(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("REN041M01");
            this.set_titletext("임차의향서(변경) 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"hireLoiNo\" type=\"STRING\" size=\"256\"/><Column id=\"hireLohNo\" type=\"STRING\" size=\"256\"/><Column id=\"loiSeCd\" type=\"STRING\" size=\"0\"/><Column id=\"prgrsSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrsSttsNm\" type=\"STRING\" size=\"256\"/><Column id=\"custNo\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyNm\" type=\"STRING\" size=\"0\"/><Column id=\"bzentyClsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyClsfNm\" type=\"STRING\" size=\"256\"/><Column id=\"rtfeYnCd\" type=\"STRING\" size=\"0\"/><Column id=\"mncoYnCd\" type=\"STRING\" size=\"0\"/><Column id=\"utltYnCd\" type=\"STRING\" size=\"0\"/><Column id=\"rltnMttr\" type=\"STRING\" size=\"0\"/><Column id=\"noteMttr\" type=\"STRING\" size=\"0\"/><Column id=\"checkIdfrNm1\" type=\"STRING\" size=\"256\"/><Column id=\"checkIdfrNm2\" type=\"STRING\" size=\"256\"/><Column id=\"sbmsnDt\" type=\"STRING\" size=\"0\"/><Column id=\"sbmsnId\" type=\"STRING\" size=\"0\"/><Column id=\"rcptNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSpceList", this);
            obj._setContents("<ColumnInfo><Column id=\"chc\" type=\"STRING\" size=\"256\"/><Column id=\"hireLoiNo\" type=\"STRING\" size=\"0\"/><Column id=\"polSpceId\" type=\"STRING\" size=\"0\"/><Column id=\"rtnChgSeCd\" type=\"STRING\" size=\"0\"/><Column id=\"bizSectNm\" type=\"STRING\" size=\"0\"/><Column id=\"cstrnDtyDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"bldgCd\" type=\"STRING\" size=\"0\"/><Column id=\"bldgNm\" type=\"STRING\" size=\"256\"/><Column id=\"usgCd\" type=\"STRING\" size=\"0\"/><Column id=\"dtlUsgCd\" type=\"STRING\" size=\"0\"/><Column id=\"dtlUsgNm\" type=\"STRING\" size=\"256\"/><Column id=\"rmnmNo\" type=\"STRING\" size=\"0\"/><Column id=\"rntar\" type=\"STRING\" size=\"0\"/><Column id=\"rentBgngYmd\" type=\"STRING\" size=\"0\"/><Column id=\"rentEndYmd\" type=\"STRING\" size=\"0\"/><Column id=\"userCnt\" type=\"STRING\" size=\"0\"/><Column id=\"userCnt1\" type=\"STRING\" size=\"0\"/><Column id=\"userCnt2\" type=\"STRING\" size=\"0\"/><Column id=\"userCnt3\" type=\"STRING\" size=\"0\"/><Column id=\"ctrtPrd\" type=\"STRING\" size=\"256\"/><Column id=\"rtnHpeDt\" type=\"STRING\" size=\"0\"/><Column id=\"ctrtCncltnDt\" type=\"STRING\" size=\"0\"/><Column id=\"gvbkAplyYn\" type=\"STRING\" size=\"0\"/><Column id=\"hpePrlgYmd\" type=\"STRING\" size=\"0\"/><Column id=\"cfmtnPrlgYmd\" type=\"STRING\" size=\"0\"/><Column id=\"noteMttr\" type=\"STRING\" size=\"0\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPicList", this);
            obj._setContents("<ColumnInfo><Column id=\"chc\" type=\"STRING\" size=\"256\"/><Column id=\"hireLoiNo\" type=\"STRING\" size=\"0\"/><Column id=\"regSeq\" type=\"STRING\" size=\"0\"/><Column id=\"aplcntSmYn\" type=\"STRING\" size=\"0\"/><Column id=\"picDeptNm\" type=\"STRING\" size=\"0\"/><Column id=\"picNm\" type=\"STRING\" size=\"0\"/><Column id=\"picJbpsNm\" type=\"STRING\" size=\"0\"/><Column id=\"picTelno\" type=\"STRING\" size=\"0\"/><Column id=\"picMblTelno\" type=\"STRING\" size=\"0\"/><Column id=\"picEmlAddr\" type=\"STRING\" size=\"0\"/><Column id=\"picFxno\" type=\"STRING\" size=\"0\"/><Column id=\"dtyBsnsNm\" type=\"STRING\" size=\"0\"/><Column id=\"prvcClctAgreYn\" type=\"STRING\" size=\"0\"/><Column id=\"prvcClctAgreAtflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboDtlUsgCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"hireLoiNo\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"grp1CdId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboRtfeYnCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboMncoYnCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboUtltYnCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCtrtSpceInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"chc\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"0\"/><Column id=\"polSpceId\" type=\"STRING\" size=\"0\"/><Column id=\"bldgCd\" type=\"STRING\" size=\"0\"/><Column id=\"bldgNm\" type=\"STRING\" size=\"256\"/><Column id=\"rentUsgGrpCd\" type=\"STRING\" size=\"0\"/><Column id=\"rentUsgCd\" type=\"STRING\" size=\"0\"/><Column id=\"rentUsgNm\" type=\"STRING\" size=\"256\"/><Column id=\"rnimf\" type=\"STRING\" size=\"0\"/><Column id=\"rentSpceAr\" type=\"STRING\" size=\"0\"/><Column id=\"ctrtBgngYmd\" type=\"STRING\" size=\"0\"/><Column id=\"ctrtEndYmd\" type=\"STRING\" size=\"0\"/><Column id=\"ctrtPrd\" type=\"STRING\" size=\"256\"/><Column id=\"userCnt\" type=\"STRING\" size=\"0\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCtrtInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"ctrtNo\" type=\"STRING\" size=\"0\"/><Column id=\"ctrtNm\" type=\"STRING\" size=\"0\"/><Column id=\"bzentyClsfCd\" type=\"STRING\" size=\"0\"/><Column id=\"rtfeYnCd\" type=\"STRING\" size=\"256\"/><Column id=\"mncoYnCd\" type=\"STRING\" size=\"0\"/><Column id=\"utltYnCd\" type=\"STRING\" size=\"0\"/><Column id=\"custNm\" type=\"STRING\" size=\"0\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtflList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"grp1CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp1CdNm\" type=\"STRING\" size=\"0\"/><Column id=\"grp2CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp2CdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"hireLoiNo\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId\" type=\"STRING\" size=\"256\"/><Column id=\"atflCd\" type=\"STRING\" size=\"256\"/><Column id=\"natchRsn\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bsnsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId2\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtn\" type=\"STRING\" size=\"256\"/><Column id=\"strgFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTerm\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj.set_useclientlayout("true");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtchRslt", this);
            obj._setContents("<ColumnInfo><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"grp1CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp1CdNm\" type=\"STRING\" size=\"256\"/><Column id=\"grp2CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp2CdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"hireLoiNo\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId\" type=\"STRING\" size=\"256\"/><Column id=\"atflCd\" type=\"STRING\" size=\"256\"/><Column id=\"natchRsn\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bsnsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId2\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtn\" type=\"STRING\" size=\"256\"/><Column id=\"strgFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTerm\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"grp1CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp1CdNm\" type=\"STRING\" size=\"256\"/><Column id=\"grp2CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp2CdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"hireLoiNo\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId\" type=\"STRING\" size=\"256\"/><Column id=\"atflCd\" type=\"STRING\" size=\"256\"/><Column id=\"natchRsn\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bsnsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId2\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtn\" type=\"STRING\" size=\"256\"/><Column id=\"strgFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTerm\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtflSave", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"grp1CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp1CdNm\" type=\"STRING\" size=\"256\"/><Column id=\"grp2CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp2CdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"hireLoiNo\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId\" type=\"STRING\" size=\"256\"/><Column id=\"atflCd\" type=\"STRING\" size=\"256\"/><Column id=\"natchRsn\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bsnsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId2\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtn\" type=\"STRING\" size=\"256\"/><Column id=\"strgFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTerm\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile99", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"grp1CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp1CdNm\" type=\"STRING\" size=\"256\"/><Column id=\"grp2CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp2CdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"hireLoiNo\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId\" type=\"STRING\" size=\"256\"/><Column id=\"atflCd\" type=\"STRING\" size=\"256\"/><Column id=\"natchRsn\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bsnsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId2\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtn\" type=\"STRING\" size=\"256\"/><Column id=\"strgFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTerm\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboBldgCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","70",null,"4566","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickFrBg");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("sub_tit00","990","16","100%","96",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("24");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00","0","0","100%","46",null,null,null,null,null,null,this.divForm.form.sub_tit00.form);
            obj.set_taborder("0");
            obj.set_text("접수번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.sub_tit00.addChild(obj.name, obj);

            obj = new Edit("edt00_01_01","0","46","100%","40",null,null,null,null,null,null,this.divForm.form.sub_tit00.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.sub_tit00.addChild(obj.name, obj);

            obj = new Panel("Panel03","20","0","300","86",null,null,null,null,null,null,this.divForm.form.sub_tit00.form);
            obj.set_taborder("2");
            obj.set_flexgrow("1");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_01_01\"/></Contents>");
            this.divForm.form.sub_tit00.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","10","10","100%","46",null,null,null,null,null,null,this.divForm.form.sub_tit00.form);
            obj.set_taborder("3");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.sub_tit00.addChild(obj.name, obj);

            obj = new Edit("edt00_01","10","56","100%","40",null,null,null,null,null,null,this.divForm.form.sub_tit00.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.sub_tit00.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","720","0","300","86",null,null,null,null,null,null,this.divForm.form.sub_tit00.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_01\"/></Contents>");
            this.divForm.form.sub_tit00.addChild(obj.name, obj);

            obj = new Panel("Panel01","1006","28","300","1",null,null,null,null,null,null,this.divForm.form.sub_tit00.form);
            obj.set_taborder("7");
            obj._setContents("");
            this.divForm.form.sub_tit00.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","0","100.00%","96",null,null,null,null,null,null,this.divForm.form.sub_tit00.form);
            obj.set_taborder("6");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_horizontalgap("20");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel03\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel01\"/></Contents>");
            this.divForm.form.sub_tit00.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("임차인 정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 20px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit01","1630","674","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divHirerInfo","0","0","100%","380",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staBzentyNm","396.00","70","100%","46",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("0");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Edit("edtBzentyNm","396.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Panel("panBzentyNm","396.00","70","200","86",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staBzentyNm\"/><PanelItem id=\"PanelItem01\" componentid=\"edtBzentyNm\"/></Contents>");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Static("staBzentyClsfNm","396.00","70","100%","46",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("3");
            obj.set_text("업체분류");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Edit("edtBzentyClsfNm","396.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Panel("panBzentyClsfNm","396.00","70","150","86",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staBzentyClsfNm\"/><PanelItem id=\"PanelItem01\" componentid=\"edtBzentyClsfNm\"/></Contents>");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Static("staRtfeYn","396.00","70","100%","46",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("6");
            obj.set_text("임대료");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Panel("panRtfeYn","396.00","70","90","86",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRtfeYn\"/><PanelItem id=\"PanelItem03\" componentid=\"cboRtfeYn\"/></Contents>");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Static("staMncoYn","46.00","46","100%","46",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("8");
            obj.set_text("관리비");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Panel("panMncoYn","46.00","46","90","86",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("9");
            obj.set_flexgrow("1");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staMncoYn\"/><PanelItem id=\"PanelItem02\" componentid=\"cboMncoYn\"/></Contents>");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Static("staUtltYn","396.00","70","100%","46",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("10");
            obj.set_text("유틸리티");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Panel("panUtltYn","396.00","70","90","86",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("11");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staUtltYn\"/><PanelItem id=\"PanelItem03\" componentid=\"cboUtltYn\"/></Contents>");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Panel("Panel00","136.00","100","100.00%","96",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("12");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"panBzentyNm\"/><PanelItem id=\"PanelItem05\" componentid=\"panBzentyClsfNm\"/><PanelItem id=\"PanelItem03\" componentid=\"panRtfeYn\"/><PanelItem id=\"PanelItem00\" componentid=\"panMncoYn\"/><PanelItem id=\"PanelItem02\" componentid=\"panUtltYn\"/></Contents>");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Combo("cboMncoYn","698","55","100%","40",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("23");
            obj.set_displaynulltext("선택");
            obj.set_innerdataset("dsCboMncoYnCd");
            obj.set_datacolumn("cdNm");
            obj.set_codecolumn("cdId");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Combo("cboUtltYn","906","53","100%","40",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("22");
            obj.set_displaynulltext("선택");
            obj.set_innerdataset("dsCboUtltYnCd");
            obj.set_datacolumn("cdNm");
            obj.set_codecolumn("cdId");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Combo("cboRtfeYn","590","55","100%","40",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("21");
            obj.set_innerdataset("dsCboRtfeYnCd");
            obj.set_datacolumn("cdNm");
            obj.set_codecolumn("cdId");
            obj.set_displaynulltext("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Static("staRltnMttr","396.00","70","100%","46",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("13");
            obj.set_text("관련사항");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new TextArea("txtRltnMttr","171","111","100%","100",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("14");
            obj.set_readonly("false");
            obj.set_displaynulltext("내용 입력");
            obj.set_visible("true");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Panel("panRltnMttr","396.00","70","100%","100",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"txtRltnMttr\"/></Contents>");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Panel("panRltnMttrGrp","136.00","100","100.00%","157",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("16");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staRltnMttr\"/><PanelItem id=\"PanelItem04\" componentid=\"panRltnMttr\"/></Contents>");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Static("staNoteMttr","396.00","70","100%","46",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("17");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new TextArea("txtNoteMttr","171","111","100%","70",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("18");
            obj.set_readonly("false");
            obj.set_displaynulltext("비고 입력");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Panel("panNoteMttr","396.00","70","100%","70",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("19");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"txtNoteMttr\"/></Contents>");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Panel("panNoteMttrGrp","136.00","100","100.00%","127",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("20");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staNoteMttr\"/><PanelItem id=\"PanelItem04\" componentid=\"panNoteMttr\"/></Contents>");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_00","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_text("변경요청사항");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_00","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("7");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit02","1630","674","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("8");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div02","0","66","100%","300",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("9");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("PanTotalBtn","0","40","100.00%","50",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"PanelTotal\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn","314","44","60%","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("10");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnAddRowSpce\"/><PanelItem id=\"PanelItem01\" componentid=\"btnDelRowSpce\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btnDelRowSpce","540","44","64","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("9");
            obj.set_text("행삭제");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btnAddRowSpce","466","44","64","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("8");
            obj.set_text("행추가");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Div("divGrdSpceList","0","0","100%","236",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Grid("grdSpceList","0","0","100.00%","236",null,null,null,null,null,null,this.divForm.form.Div02.form.divGrdSpceList.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsSpceList");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"250\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"250\"/><Column size=\"130\"/><Column size=\"130\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell displaytype=\"none\"/><Cell col=\"1\" text=\"건물명\"/><Cell col=\"2\" text=\"호실번호\"/><Cell col=\"3\" text=\"사용용도\" cssclass=\"CellHead\"/><Cell col=\"4\" text=\"면적(m2)\"/><Cell col=\"5\" text=\"사용인원수\"/><Cell col=\"6\" text=\"계약기간\" cssclass=\"CellHead\"/><Cell col=\"7\" text=\"희망연장일자\" cssclass=\"CellHead_E\"/><Cell col=\"8\" text=\"확정연장일자\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:chc\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"1\" textAlign=\"left\" verticalAlign=\"middle\" displaytype=\"combotext\" edittype=\"none\" text=\"bind:bldgCd\" combodataset=\"dsCboBldgCd\" combodatacol=\"cdNm\" combocodecol=\"cdId\"/><Cell col=\"2\" suppressalign=\"middle\" textAlign=\"center\" verticalAlign=\"middle\" edittype=\"none\" displaytype=\"normal\" cssclass=\"CellReadonly\" text=\"bind:rmnmNo\"/><Cell col=\"3\" textAlign=\"center\" verticalAlign=\"middle\" displaytype=\"combotext\" text=\"bind:dtlUsgCd\" edittype=\"none\" combodataset=\"dsCboDtlUsgCd\" combodatacol=\"cdNm\" combocodecol=\"cdId\"/><Cell col=\"4\" textAlign=\"right\" verticalAlign=\"middle\" displaytype=\"normal\" text=\"bind:rntar\"/><Cell col=\"5\" textAlign=\"center\" verticalAlign=\"middle\" text=\"bind:userCnt\" edittype=\"none\"/><Cell col=\"6\" textAlign=\"center\" verticalAlign=\"middle\" text=\"bind:ctrtPrd\" edittype=\"none\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd\" maskedittype=\"string\" maskeditmaskchar=\" \"/><Cell col=\"7\" textAlign=\"center\" verticalAlign=\"middle\" displaytype=\"date\" text=\"bind:hpePrlgYmd\" maskedittype=\"string\" calendardateformat=\"yyyy-MM-dd\" edittype=\"date\" maskeditmaskchar=\" \"/><Cell col=\"8\" textAlign=\"center\" verticalAlign=\"middle\" displaytype=\"date\" text=\"bind:cfmtnPrlgYmd\" maskedittype=\"string\" calendardateformat=\"yyyy-MM-dd\" maskeditmaskchar=\" \"/></Band></Format></Formats>");
            this.divForm.form.Div02.form.divGrdSpceList.addChild(obj.name, obj);

            obj = new Panel("panSpceList","0","40","100.00%","301",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("2");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divGrdSpceList\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staTotal_00","10.00","0","55","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("3");
            obj.set_text("변경");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("none");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staTotalCnt","0","0","40","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("4");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staTotal02_00","0","0","30","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("5");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("PanelTotal00_00","10.00","0","400","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("6");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTotal_00\"/><PanelItem id=\"PanelItem03\" componentid=\"staTotalCnt\"/><PanelItem id=\"PanelItem01\" componentid=\"staTotal02_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("PanelTotal","0","0","100%","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("7");
            obj.set_horizontalgap("20");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"PanelTotal00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"PanelGrdBtn\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_01","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("10");
            obj.set_text("임차업무 연락처");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00_01","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_01","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("12");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit03","1630","674","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("13");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div03","0","422.856","100%","502",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("14");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panPicList","0","60","100.00%","301",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("1");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divGrdPicList\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFile00_00","0","313","100.00%","110",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("2");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj.getSetter("upatchdtisecd").set("R00");
            obj.getSetter("upatchsecd").set("R01");
            obj.getSetter("upcolid").set("prvcUtlzWtcs");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"grdFile1\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01_00","0","-931","70%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("4");
            obj.set_text("임차업무 담당자 개인정보수집 및 이용동의서");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00","20","-921","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("3");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Div("divGrdPicList","0","24","100%","280",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn","530","0","60%","34",null,null,null,null,null,null,this.divForm.form.Div03.form.divGrdPicList.form);
            obj.set_taborder("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnAddRow\"/><PanelItem id=\"PanelItem01\" componentid=\"btnDelRow\"/></Contents>");
            this.divForm.form.Div03.form.divGrdPicList.addChild(obj.name, obj);

            obj = new Grid("grdPicList","0","44","100%","236",null,null,null,null,null,null,this.divForm.form.Div03.form.divGrdPicList.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsPicList");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"101\"/><Column size=\"85\"/><Column size=\"98\"/><Column size=\"120\"/><Column size=\"142\"/><Column size=\"149\"/><Column size=\"155\"/><Column size=\"150\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell displaytype=\"none\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"담당부서\" cssclass=\"CellHead_E\"/><Cell col=\"2\" text=\"담당자\" cssclass=\"CellHead_E\"/><Cell col=\"3\" text=\"직위(직급)\" cssclass=\"CellHead_E\"/><Cell col=\"4\" text=\"전화(사무실)\" cssclass=\"CellHead_E\"/><Cell col=\"5\" text=\"휴대폰\" cssclass=\"CellHead_E\"/><Cell col=\"6\" text=\"이메일\" cssclass=\"CellHead_E\"/><Cell col=\"7\" text=\"FAX\" cssclass=\"CellHead_E\"/><Cell col=\"8\" cssclass=\"CellHead_E\" text=\"담당업무\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:chc\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"1\" textAlign=\"left\" verticalAlign=\"middle\" displaytype=\"text\" text=\"bind:picDeptNm\" edittype=\"text\"/><Cell col=\"2\" suppressalign=\"middle\" textAlign=\"left\" verticalAlign=\"middle\" edittype=\"text\" displaytype=\"text\" cssclass=\"CellReadonly\" text=\"bind:picNm\"/><Cell col=\"3\" textAlign=\"left\" verticalAlign=\"middle\" text=\"bind:picJbpsNm\" edittype=\"text\"/><Cell col=\"4\" textAlign=\"center\" verticalAlign=\"middle\" displaytype=\"normal\" text=\"bind:picTelno\" edittype=\"text\" maskedittype=\"string\" maskeditformat=\"###-####-####\" maskeditmaskchar=\" \"/><Cell col=\"5\" textAlign=\"center\" verticalAlign=\"middle\" text=\"bind:picMblTelno\" edittype=\"text\" maskedittype=\"string\" maskeditformat=\"###-####-####\" maskeditmaskchar=\" \" displaytype=\"normal\"/><Cell col=\"6\" textAlign=\"left\" verticalAlign=\"middle\" text=\"bind:picEmlAddr\" edittype=\"text\"/><Cell col=\"7\" textAlign=\"center\" verticalAlign=\"middle\" displaytype=\"normal\" text=\"bind:picFxno\" edittype=\"text\" maskedittype=\"string\" maskeditformat=\"###-####-####\" maskeditmaskchar=\" \"/><Cell col=\"8\" cssclass=\"CellEnd\" textAlign=\"left\" verticalAlign=\"middle\" text=\"bind:dtyBsnsNm\" edittype=\"text\"/></Band></Format></Formats>");
            this.divForm.form.Div03.form.divGrdPicList.addChild(obj.name, obj);

            obj = new Panel("PanTotalBtn","0","0","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form.divGrdPicList.form);
            obj.set_taborder("2");
            obj.set_flexmainaxisalign("end");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"PanelGrdBtn\"/></Contents>");
            this.divForm.form.Div03.form.divGrdPicList.addChild(obj.name, obj);

            obj = new Button("btnDelRow","768","1","64","34",null,null,null,null,null,null,this.divForm.form.Div03.form.divGrdPicList.form);
            obj.set_taborder("3");
            obj.set_text("행삭제");
            this.divForm.form.Div03.form.divGrdPicList.addChild(obj.name, obj);

            obj = new Button("btnAddRow","716","6","64","34",null,null,null,null,null,null,this.divForm.form.Div03.form.divGrdPicList.form);
            obj.set_taborder("4");
            obj.set_text("행추가");
            this.divForm.form.Div03.form.divGrdPicList.addChild(obj.name, obj);

            obj = new Grid("grdFile1","20.00","60","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("5");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell cssclass=\"expr:!A110 ? &quot;&quot; : &quot;CellFile&quot;\" text=\"bind:orgnlFileNm\"/><Cell col=\"1\" cssclass=\"expr:!colId ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"expr:!colId ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\"/></Band></Format></Formats>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_02_00","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("15");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00_02_00","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_02_00","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("17");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_02_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit05","1630","674","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("18");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staSubTitle02_00_02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_02_02_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div05","0","30","100%","200",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("19");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("0");
            obj.set_text("변경요청공문");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("1");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panFile00_00","0","42","100.00%","200",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("2");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj.getSetter("upatchdtisecd").set("R01");
            obj.getSetter("upatchsecd").set("R01");
            obj.getSetter("upcolid").set("bulic");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"grdFile2\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Grid("grdFile2","20.00","60","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("3");
            obj.set_binddataset("dsFile2");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell cssclass=\"expr:!colId ? &quot;&quot; : &quot;CellFile&quot;\" text=\"bind:orgnlFileNm\"/><Cell col=\"1\" cssclass=\"expr:!colId ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"expr:!colId ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\"/></Band></Format></Formats>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staSubTitleRvwOpnn","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("20");
            obj.set_text("임차의향서(변경) 신청 검토의견");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panRvwOpnn","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("21");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn00_00_02_00_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit08","1630","674","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("22");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitleRvwOpnn\"/><PanelItem id=\"PanelItem01\" componentid=\"panRvwOpnn\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divRvwOpnn","0","30","100%","158",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("23");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg .div_WF_SchBg");
            obj.set_fittocontents("height");
            obj.set_visible("true");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panRvwOpnn","0","50","100.00%","130",null,null,null,null,null,null,this.divForm.form.divRvwOpnn.form);
            obj.set_taborder("0");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("div_WF_InfoGuide");
            obj.set_verticalgap("0");
            obj.set_horizontalgap("20");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"txtRvwOpnn\"/></Contents>");
            this.divForm.form.divRvwOpnn.addChild(obj.name, obj);

            obj = new TextArea("txtRvwOpnn","171","111","100%","100",null,null,null,null,null,null,this.divForm.form.divRvwOpnn.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_displaynulltext("검토의견 입력 – 반려(보완요청)의 경우 입력 필수");
            obj.set_visible("true");
            this.divForm.form.divRvwOpnn.addChild(obj.name, obj);

            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divQuick",null,"divTitle:20","296","245","62",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickMenu");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","17","20","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("0");
            obj.set_text("임차인 정보");
            obj.set_cssclass("btn_WF_Quick_S");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn02","17.00","btn01:0","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("1");
            obj.set_text("변경요청사항");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn03","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("2");
            obj.set_text("임차업무 연락처");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn05","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("3");
            obj.set_text("첨부파일");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn08","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("4");
            obj.set_text("검토의견");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"divQuick:0","296","181","62",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickBtnBg");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","7","20","84","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_No");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btnSbmsn","btnCancel:10","20","84","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("1");
            obj.set_text("제출");
            obj.set_cssclass("btn_WF_Yes");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btnSave","10","20","84","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Yes");
            this.divBtn.addChild(obj.name, obj);

            obj = new Div("divGuide00","1600.00","145","450","385",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            obj.set_visible("false");
            obj.set_cssclass("div_GD_Tip");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","18.00","15","262","45",null,null,null,null,null,null,this.divGuide00.form);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_cssclass("btn_WF_Quick");
            this.divGuide00.addChild(obj.name, obj);

            obj = new Static("sta00","18.00","122","375","50",null,null,null,null,null,null,this.divGuide00.form);
            obj.set_taborder("1");
            obj.set_text("선택했을때 class : btn_WF_Quick_S 적용");
            this.divGuide00.addChild(obj.name, obj);

            obj = new Button("btn00_00","18.00","68","262","45",null,null,null,null,null,null,this.divGuide00.form);
            obj.set_taborder("2");
            obj.set_text("기본정보");
            obj.set_cssclass("btn_WF_Quick_S");
            this.divGuide00.addChild(obj.name, obj);

            obj = new Button("Button00_00","20.00","205","34","34",null,null,null,null,null,null,this.divGuide00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.divGuide00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","64.00","205","34","34",null,null,null,null,null,null,this.divGuide00.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divGuide00.addChild(obj.name, obj);

            obj = new Static("sta00_00","20.00","255","375","50",null,null,null,null,null,null,this.divGuide00.form);
            obj.set_taborder("5");
            obj.set_text("접혀있을때 class : btn_WF_ACPlus 로 접음");
            this.divGuide00.addChild(obj.name, obj);

            obj = new RaonkUpload("RaonkUpload","0","520","864","200",null,null,null,null,null,null,this);
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
            //-- Default Layout : this.divForm.form.sub_tit00.form
            obj = new Layout("default","",0,0,this.divForm.form.sub_tit00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel01_00_00.set_taborder("0");
                p.staLabel01_00_00.set_text("접수번호");
                p.staLabel01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00.move("0","0","100%","46",null,null);

                p.edt00_01_01.set_taborder("1");
                p.edt00_01_01.set_readonly("true");
                p.edt00_01_01.move("0","46","100%","40",null,null);

                p.Panel03.set_taborder("2");
                p.Panel03.set_flexgrow("1");
                p.Panel03.set_type("vertical");
                p.Panel03.move("20","0","300","86",null,null);

                p.staLabel01_00.set_taborder("3");
                p.staLabel01_00.set_text("상태");
                p.staLabel01_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00.move("10","10","100%","46",null,null);

                p.edt00_01.set_taborder("4");
                p.edt00_01.set_readonly("true");
                p.edt00_01.move("10","56","100%","40",null,null);

                p.Panel01_00.set_taborder("5");
                p.Panel01_00.set_type("vertical");
                p.Panel01_00.set_flexgrow("1");
                p.Panel01_00.move("720","0","300","86",null,null);

                p.Panel01.set_taborder("7");
                p.Panel01.move("1006","28","300","1",null,null);

                p.Panel00.set_taborder("6");
                p.Panel00.set_flexcrossaxiswrapalign("start");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_verticalgap("0");
                p.Panel00.set_spacing("0px 20px 10px 20px");
                p.Panel00.set_cssclass("pal_WF_DtlBg");
                p.Panel00.set_type("horizontal");
                p.Panel00.set_horizontalgap("20");
                p.Panel00.move("0","0","100.00%","96",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_flexwrap("nowrap");
            this.divForm.form.sub_tit00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.sub_tit00.form
            obj = new Layout("mobile","",0,0,this.divForm.form.sub_tit00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_flexwrap("nowrap");
            this.divForm.form.sub_tit00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divHirerInfo.form
            obj = new Layout("default","",0,0,this.divForm.form.divHirerInfo.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staBzentyNm.set_taborder("0");
                p.staBzentyNm.set_text("업체명");
                p.staBzentyNm.set_cssclass("sta_WF_Label");
                p.staBzentyNm.move("396.00","70","100%","46",null,null);

                p.edtBzentyNm.set_taborder("1");
                p.edtBzentyNm.set_readonly("true");
                p.edtBzentyNm.move("396.00","114","100%","40",null,null);

                p.panBzentyNm.set_taborder("2");
                p.panBzentyNm.set_type("vertical");
                p.panBzentyNm.set_flexgrow("1");
                p.panBzentyNm.move("396.00","70","200","86",null,null);

                p.staBzentyClsfNm.set_taborder("3");
                p.staBzentyClsfNm.set_text("업체분류");
                p.staBzentyClsfNm.set_cssclass("sta_WF_Label");
                p.staBzentyClsfNm.move("396.00","70","100%","46",null,null);

                p.edtBzentyClsfNm.set_taborder("4");
                p.edtBzentyClsfNm.set_readonly("true");
                p.edtBzentyClsfNm.move("396.00","114","100%","40",null,null);

                p.panBzentyClsfNm.set_taborder("5");
                p.panBzentyClsfNm.set_type("vertical");
                p.panBzentyClsfNm.set_flexgrow("1");
                p.panBzentyClsfNm.move("396.00","70","150","86",null,null);

                p.staRtfeYn.set_taborder("6");
                p.staRtfeYn.set_text("임대료");
                p.staRtfeYn.set_cssclass("sta_WF_Label_E");
                p.staRtfeYn.move("396.00","70","100%","46",null,null);

                p.panRtfeYn.set_taborder("7");
                p.panRtfeYn.set_type("vertical");
                p.panRtfeYn.set_flexgrow("1");
                p.panRtfeYn.move("396.00","70","90","86",null,null);

                p.staMncoYn.set_taborder("8");
                p.staMncoYn.set_text("관리비");
                p.staMncoYn.set_cssclass("sta_WF_Label_E");
                p.staMncoYn.move("46.00","46","100%","46",null,null);

                p.panMncoYn.set_taborder("9");
                p.panMncoYn.set_flexgrow("1");
                p.panMncoYn.set_type("vertical");
                p.panMncoYn.move("46.00","46","90","86",null,null);

                p.staUtltYn.set_taborder("10");
                p.staUtltYn.set_text("유틸리티");
                p.staUtltYn.set_cssclass("sta_WF_Label_E");
                p.staUtltYn.move("396.00","70","100%","46",null,null);

                p.panUtltYn.set_taborder("11");
                p.panUtltYn.set_type("vertical");
                p.panUtltYn.set_flexgrow("1");
                p.panUtltYn.move("396.00","70","90","86",null,null);

                p.Panel00.set_taborder("12");
                p.Panel00.set_horizontalgap("20");
                p.Panel00.set_flexcrossaxiswrapalign("start");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_verticalgap("0");
                p.Panel00.set_spacing("0px 20px 10px 20px");
                p.Panel00.set_cssclass("pal_WF_DtlBg");
                p.Panel00.set_type("horizontal");
                p.Panel00.move("136.00","100","100.00%","96",null,null);

                p.cboMncoYn.set_taborder("23");
                p.cboMncoYn.set_displaynulltext("선택");
                p.cboMncoYn.set_innerdataset("dsCboMncoYnCd");
                p.cboMncoYn.set_datacolumn("cdNm");
                p.cboMncoYn.set_codecolumn("cdId");
                p.cboMncoYn.set_value("");
                p.cboMncoYn.set_index("-1");
                p.cboMncoYn.move("698","55","100%","40",null,null);

                p.cboUtltYn.set_taborder("22");
                p.cboUtltYn.set_displaynulltext("선택");
                p.cboUtltYn.set_innerdataset("dsCboUtltYnCd");
                p.cboUtltYn.set_datacolumn("cdNm");
                p.cboUtltYn.set_codecolumn("cdId");
                p.cboUtltYn.set_value("");
                p.cboUtltYn.set_index("-1");
                p.cboUtltYn.move("906","53","100%","40",null,null);

                p.cboRtfeYn.set_taborder("21");
                p.cboRtfeYn.set_innerdataset("dsCboRtfeYnCd");
                p.cboRtfeYn.set_datacolumn("cdNm");
                p.cboRtfeYn.set_codecolumn("cdId");
                p.cboRtfeYn.set_displaynulltext("선택");
                p.cboRtfeYn.set_value("");
                p.cboRtfeYn.set_index("-1");
                p.cboRtfeYn.move("590","55","100%","40",null,null);

                p.staRltnMttr.set_taborder("13");
                p.staRltnMttr.set_text("관련사항");
                p.staRltnMttr.set_cssclass("sta_WF_Label");
                p.staRltnMttr.move("396.00","70","100%","46",null,null);

                p.txtRltnMttr.set_taborder("14");
                p.txtRltnMttr.set_readonly("false");
                p.txtRltnMttr.set_displaynulltext("내용 입력");
                p.txtRltnMttr.set_visible("true");
                p.txtRltnMttr.move("171","111","100%","100",null,null);

                p.panRltnMttr.set_taborder("15");
                p.panRltnMttr.set_type("vertical");
                p.panRltnMttr.set_flexgrow("1");
                p.panRltnMttr.set_fittocontents("height");
                p.panRltnMttr.move("396.00","70","100%","100",null,null);

                p.panRltnMttrGrp.set_taborder("16");
                p.panRltnMttrGrp.set_horizontalgap("20");
                p.panRltnMttrGrp.set_flexcrossaxiswrapalign("start");
                p.panRltnMttrGrp.set_flexwrap("wrap");
                p.panRltnMttrGrp.set_fittocontents("height");
                p.panRltnMttrGrp.set_verticalgap("0");
                p.panRltnMttrGrp.set_spacing("0px 20px 10px 20px");
                p.panRltnMttrGrp.set_cssclass("pal_WF_DtlBg");
                p.panRltnMttrGrp.set_type("horizontal");
                p.panRltnMttrGrp.move("136.00","100","100.00%","157",null,null);

                p.staNoteMttr.set_taborder("17");
                p.staNoteMttr.set_text("비고");
                p.staNoteMttr.set_cssclass("sta_WF_Label");
                p.staNoteMttr.move("396.00","70","100%","46",null,null);

                p.txtNoteMttr.set_taborder("18");
                p.txtNoteMttr.set_readonly("false");
                p.txtNoteMttr.set_displaynulltext("비고 입력");
                p.txtNoteMttr.move("171","111","100%","70",null,null);

                p.panNoteMttr.set_taborder("19");
                p.panNoteMttr.set_type("vertical");
                p.panNoteMttr.set_flexgrow("1");
                p.panNoteMttr.set_fittocontents("height");
                p.panNoteMttr.move("396.00","70","100%","70",null,null);

                p.panNoteMttrGrp.set_taborder("20");
                p.panNoteMttrGrp.set_horizontalgap("20");
                p.panNoteMttrGrp.set_flexcrossaxiswrapalign("start");
                p.panNoteMttrGrp.set_flexwrap("wrap");
                p.panNoteMttrGrp.set_fittocontents("height");
                p.panNoteMttrGrp.set_verticalgap("0");
                p.panNoteMttrGrp.set_spacing("0px 20px 10px 20px");
                p.panNoteMttrGrp.set_cssclass("pal_WF_DtlBg");
                p.panNoteMttrGrp.set_type("horizontal");
                p.panNoteMttrGrp.move("136.00","100","100.00%","127",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.divHirerInfo.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divHirerInfo.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divHirerInfo.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.divHirerInfo.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div02.form.divGrdSpceList.form
            obj = new Layout("default","",0,0,this.divForm.form.Div02.form.divGrdSpceList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdSpceList.set_taborder("0");
                p.grdSpceList.set_binddataset("dsSpceList");
                p.grdSpceList.set_autofittype("none");
                p.grdSpceList.set_autoenter("select");
                p.grdSpceList.move("0","0","100.00%","236",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.Div02.form.divGrdSpceList.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div02.form.divGrdSpceList.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div02.form.divGrdSpceList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdSpceList.set_autofittype("none");

                p.btnGrdRegi.set_visible("false");

                p.btnGrdDel.set_visible("false");
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.Div02.form.divGrdSpceList.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div02.form.divGrdSpceList.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div02.form.divGrdSpceList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.Div02.form.divGrdSpceList.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div02.form.divGrdSpceList.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div02.form.divGrdSpceList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.Div02.form.divGrdSpceList.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div02.form
            obj = new Layout("default","",0,0,this.divForm.form.Div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.PanTotalBtn.set_taborder("0");
                p.PanTotalBtn.set_horizontalgap("20");
                p.PanTotalBtn.set_flexcrossaxiswrapalign("start");
                p.PanTotalBtn.set_flexwrap("wrap");
                p.PanTotalBtn.set_fittocontents("height");
                p.PanTotalBtn.set_verticalgap("0");
                p.PanTotalBtn.set_spacing("10px 20px 10px 20px");
                p.PanTotalBtn.set_type("horizontal");
                p.PanTotalBtn.move("0","40","100.00%","50",null,null);

                p.PanelGrdBtn.set_taborder("10");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.set_visible("true");
                p.PanelGrdBtn.move("314","44","60%","34",null,null);

                p.btnDelRowSpce.set_taborder("9");
                p.btnDelRowSpce.set_text("행삭제");
                p.btnDelRowSpce.move("540","44","64","34",null,null);

                p.btnAddRowSpce.set_taborder("8");
                p.btnAddRowSpce.set_text("행추가");
                p.btnAddRowSpce.move("466","44","64","34",null,null);

                p.divGrdSpceList.set_taborder("1");
                p.divGrdSpceList.set_text("Div01");
                p.divGrdSpceList.set_fittocontents("height");
                p.divGrdSpceList.set_formscrollbartype("none none");
                p.divGrdSpceList.set_formscrolltype("none");
                p.divGrdSpceList.move("0","0","100%","236",null,null);

                p.panSpceList.set_taborder("2");
                p.panSpceList.set_horizontalgap("20");
                p.panSpceList.set_flexcrossaxiswrapalign("start");
                p.panSpceList.set_flexwrap("wrap");
                p.panSpceList.set_fittocontents("height");
                p.panSpceList.set_verticalgap("0");
                p.panSpceList.set_spacing("10px 20px 10px 20px");
                p.panSpceList.set_cssclass("pal_WF_DtlBg");
                p.panSpceList.set_type("horizontal");
                p.panSpceList.move("0","40","100.00%","301",null,null);

                p.staTotal_00.set_taborder("3");
                p.staTotal_00.set_text("변경");
                p.staTotal_00.set_cssclass("sta_WF_SchLabel");
                p.staTotal_00.set_usedecorate("true");
                p.staTotal_00.set_fittocontents("none");
                p.staTotal_00.move("10.00","0","55","34",null,null);

                p.staTotalCnt.set_taborder("4");
                p.staTotalCnt.set_text("0");
                p.staTotalCnt.set_cssclass("sta_WF_Total");
                p.staTotalCnt.set_usedecorate("true");
                p.staTotalCnt.set_fittocontents("width");
                p.staTotalCnt.move("0","0","40","34",null,null);

                p.staTotal02_00.set_taborder("5");
                p.staTotal02_00.set_text("건");
                p.staTotal02_00.set_usedecorate("true");
                p.staTotal02_00.move("0","0","30","34",null,null);

                p.PanelTotal00_00.set_taborder("6");
                p.PanelTotal00_00.move("10.00","0","400","34",null,null);

                p.PanelTotal.set_taborder("7");
                p.PanelTotal.set_horizontalgap("20");
                p.PanelTotal.move("0","0","100%","34",null,null);
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
            //-- Default Layout : this.divForm.form.Div03.form.divGrdPicList.form
            obj = new Layout("default","",0,0,this.divForm.form.Div03.form.divGrdPicList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.PanelGrdBtn.set_taborder("1");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.set_visible("true");
                p.PanelGrdBtn.move("530","0","60%","34",null,null);

                p.grdPicList.set_taborder("0");
                p.grdPicList.set_binddataset("dsPicList");
                p.grdPicList.set_autofittype("none");
                p.grdPicList.set_autoenter("select");
                p.grdPicList.set_selecttype("row");
                p.grdPicList.move("0","44","100%","236",null,null);

                p.PanTotalBtn.set_taborder("2");
                p.PanTotalBtn.set_flexmainaxisalign("end");
                p.PanTotalBtn.set_flexcrossaxiswrapalign("start");
                p.PanTotalBtn.set_flexcrossaxisalign("start");
                p.PanTotalBtn.set_flexwrap("wrap");
                p.PanTotalBtn.move("0","0","100%","40",null,null);

                p.btnDelRow.set_taborder("3");
                p.btnDelRow.set_text("행삭제");
                p.btnDelRow.move("768","1","64","34",null,null);

                p.btnAddRow.set_taborder("4");
                p.btnAddRow.set_text("행추가");
                p.btnAddRow.move("716","6","64","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.Div03.form.divGrdPicList.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div03.form.divGrdPicList.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div03.form.divGrdPicList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdPicList.set_autofittype("none");

                p.btnGrdRegi.set_visible("false");

                p.btnGrdDel.set_visible("false");
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.Div03.form.divGrdPicList.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div03.form.divGrdPicList.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div03.form.divGrdPicList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.Div03.form.divGrdPicList.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div03.form.divGrdPicList.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div03.form.divGrdPicList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.Div03.form.divGrdPicList.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div03.form
            obj = new Layout("default","",0,0,this.divForm.form.Div03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panPicList.set_taborder("1");
                p.panPicList.set_horizontalgap("20");
                p.panPicList.set_flexcrossaxiswrapalign("start");
                p.panPicList.set_flexwrap("wrap");
                p.panPicList.set_fittocontents("height");
                p.panPicList.set_verticalgap("0");
                p.panPicList.set_spacing("10px 20px 10px 20px");
                p.panPicList.set_cssclass("pal_WF_DtlBg");
                p.panPicList.set_type("horizontal");
                p.panPicList.move("0","60","100.00%","301",null,null);

                p.panFile00_00.set_taborder("2");
                p.panFile00_00.set_fittocontents("height");
                p.panFile00_00.set_spacing("10px 20px 10px 20px");
                p.panFile00_00.set_flexwrap("wrap");
                p.panFile00_00.set_cssclass("pal_WF_DtlBg");
                p.panFile00_00.set_verticalgap("4");
                p.panFile00_00.getSetter("upatchdtisecd").set("R00");
                p.panFile00_00.getSetter("upatchsecd").set("R01");
                p.panFile00_00.getSetter("upcolid").set("prvcUtlzWtcs");
                p.panFile00_00.move("0","313","100.00%","110",null,null);

                p.staLabel00_02_01_00.set_taborder("4");
                p.staLabel00_02_01_00.set_text("임차업무 담당자 개인정보수집 및 이용동의서");
                p.staLabel00_02_01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_02_01_00.set_fittocontents("width");
                p.staLabel00_02_01_00.move("0","-931","70%","46",null,null);

                p.panTitle00_00.set_taborder("3");
                p.panTitle00_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00.set_flexwrap("wrap");
                p.panTitle00_00.set_fittocontents("height");
                p.panTitle00_00.move("20","-921","100%","46",null,null);

                p.divGrdPicList.set_taborder("0");
                p.divGrdPicList.set_text("Div01");
                p.divGrdPicList.set_fittocontents("height");
                p.divGrdPicList.set_formscrollbartype("none none");
                p.divGrdPicList.set_formscrolltype("none");
                p.divGrdPicList.move("0","24","100%","280",null,null);

                p.grdFile1.set_taborder("5");
                p.grdFile1.set_binddataset("dsFile1");
                p.grdFile1.set_autofittype("col");
                p.grdFile1.set_cssclass("grd_WF_FileAdd");
                p.grdFile1.set_readonly("true");
                p.grdFile1.move("20.00","60","100%","40",null,null);
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
            //-- Default Layout : this.divForm.form.Div05.form
            obj = new Layout("default","",0,0,this.divForm.form.Div05.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel00_02_01.set_taborder("0");
                p.staLabel00_02_01.set_text("변경요청공문");
                p.staLabel00_02_01.set_cssclass("sta_WF_Label");
                p.staLabel00_02_01.set_fittocontents("width");
                p.staLabel00_02_01.move("0","44","305","46",null,null);

                p.panTitle00_00.set_taborder("1");
                p.panTitle00_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00.set_flexwrap("wrap");
                p.panTitle00_00.set_fittocontents("height");
                p.panTitle00_00.move("0","124","100%","46",null,null);

                p.panFile00_00.set_taborder("2");
                p.panFile00_00.set_fittocontents("height");
                p.panFile00_00.set_spacing("10px 20px 10px 20px");
                p.panFile00_00.set_flexwrap("wrap");
                p.panFile00_00.set_cssclass("pal_WF_DtlBg");
                p.panFile00_00.set_verticalgap("4");
                p.panFile00_00.getSetter("upatchdtisecd").set("R01");
                p.panFile00_00.getSetter("upatchsecd").set("R01");
                p.panFile00_00.getSetter("upcolid").set("bulic");
                p.panFile00_00.move("0","42","100.00%","200",null,null);

                p.grdFile2.set_taborder("3");
                p.grdFile2.set_binddataset("dsFile2");
                p.grdFile2.set_autofittype("col");
                p.grdFile2.set_cssclass("grd_WF_FileAdd");
                p.grdFile2.set_readonly("true");
                p.grdFile2.move("20.00","60","100%","40",null,null);
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
                p.staLabel00_02_01.move("0","44","305","46",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div05.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divRvwOpnn.form
            obj = new Layout("default","",0,0,this.divForm.form.divRvwOpnn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panRvwOpnn.set_taborder("0");
                p.panRvwOpnn.set_fittocontents("height");
                p.panRvwOpnn.set_spacing("10px 20px 10px 20px");
                p.panRvwOpnn.set_flexwrap("wrap");
                p.panRvwOpnn.set_cssclass("div_WF_InfoGuide");
                p.panRvwOpnn.set_verticalgap("0");
                p.panRvwOpnn.set_horizontalgap("20");
                p.panRvwOpnn.move("0","50","100.00%","130",null,null);

                p.txtRvwOpnn.set_taborder("1");
                p.txtRvwOpnn.set_readonly("true");
                p.txtRvwOpnn.set_displaynulltext("검토의견 입력 – 반려(보완요청)의 경우 입력 필수");
                p.txtRvwOpnn.set_visible("true");
                p.txtRvwOpnn.move("171","111","100%","100",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.divRvwOpnn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divRvwOpnn.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divRvwOpnn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.divRvwOpnn.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sub_tit00.set_taborder("24");
                p.sub_tit00.set_text("div00");
                p.sub_tit00.set_cssclass("div_WF_Bg");
                p.sub_tit00.set_fittocontents("height");
                p.sub_tit00.move("990","16","100%","96",null,null);

                p.staSubTitle02_00.set_taborder("0");
                p.staSubTitle02_00.set_text("임차인 정보");
                p.staSubTitle02_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00.move("1630.00","690","50%","50",null,null);

                p.Button00_00.set_taborder("1");
                p.Button00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00.move("2890.00","692","34","34",null,null);

                p.Panel01_02.set_taborder("2");
                p.Panel01_02.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02.set_spacing("0px 20px");
                p.Panel01_02.set_horizontalgap("10");
                p.Panel01_02.set_flexcrossaxisalign("center");
                p.Panel01_02.set_flexmainaxisalign("end");
                p.Panel01_02.move("2340.00","690","50%","50",null,null);

                p.sub_tit01.set_taborder("3");
                p.sub_tit01.set_background("#ffffff");
                p.sub_tit01.set_flexcrossaxisalign("end");
                p.sub_tit01.set_minheight("70");
                p.sub_tit01.set_maxheight("");
                p.sub_tit01.move("1630","674","100%","70",null,null);

                p.divHirerInfo.set_taborder("4");
                p.divHirerInfo.set_text("Div00");
                p.divHirerInfo.set_cssclass("div_WF_Bg");
                p.divHirerInfo.set_fittocontents("height");
                p.divHirerInfo.move("0","0","100%","380",null,null);

                p.staSubTitle02_00_00.set_taborder("5");
                p.staSubTitle02_00_00.set_text("변경요청사항");
                p.staSubTitle02_00_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_00.move("1630.00","690","50%","50",null,null);

                p.Button00_00_00.set_taborder("6");
                p.Button00_00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_00.move("2890.00","692","34","34",null,null);

                p.Panel01_02_00.set_taborder("7");
                p.Panel01_02_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_00.set_spacing("0px 10px");
                p.Panel01_02_00.set_horizontalgap("10");
                p.Panel01_02_00.set_flexcrossaxisalign("center");
                p.Panel01_02_00.set_flexmainaxisalign("end");
                p.Panel01_02_00.move("2340.00","690","50%","50",null,null);

                p.sub_tit02.set_taborder("8");
                p.sub_tit02.set_background("#ffffff");
                p.sub_tit02.set_flexcrossaxisalign("end");
                p.sub_tit02.set_minheight("70");
                p.sub_tit02.set_maxheight("");
                p.sub_tit02.move("1630","674","100%","70",null,null);

                p.Div02.set_taborder("9");
                p.Div02.set_text("Div00");
                p.Div02.set_cssclass("div_WF_Bg");
                p.Div02.set_fittocontents("height");
                p.Div02.move("0","66","100%","300",null,null);

                p.staSubTitle02_00_01.set_taborder("10");
                p.staSubTitle02_00_01.set_text("임차업무 연락처");
                p.staSubTitle02_00_01.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_01.move("1630.00","690","50%","50",null,null);

                p.Button00_00_01.set_taborder("11");
                p.Button00_00_01.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_01.move("2890.00","692","34","34",null,null);

                p.Panel01_02_01.set_taborder("12");
                p.Panel01_02_01.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_01.set_spacing("0px 10px");
                p.Panel01_02_01.set_horizontalgap("10");
                p.Panel01_02_01.set_flexcrossaxisalign("center");
                p.Panel01_02_01.set_flexmainaxisalign("end");
                p.Panel01_02_01.move("2340.00","690","50%","50",null,null);

                p.sub_tit03.set_taborder("13");
                p.sub_tit03.set_background("#ffffff");
                p.sub_tit03.set_flexcrossaxisalign("end");
                p.sub_tit03.set_minheight("70");
                p.sub_tit03.set_maxheight("");
                p.sub_tit03.move("1630","674","100%","70",null,null);

                p.Div03.set_taborder("14");
                p.Div03.set_text("Div00");
                p.Div03.set_cssclass("div_WF_Bg");
                p.Div03.set_fittocontents("height");
                p.Div03.move("0","422.856","100%","502",null,null);

                p.staSubTitle02_00_02_00.set_taborder("15");
                p.staSubTitle02_00_02_00.set_text("첨부파일");
                p.staSubTitle02_00_02_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_02_00.move("1630.00","690","50%","50",null,null);

                p.Button00_00_02_00.set_taborder("16");
                p.Button00_00_02_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_02_00.move("2890.00","692","34","34",null,null);

                p.Panel01_02_02_00.set_taborder("17");
                p.Panel01_02_02_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_02_00.set_spacing("0px 10px");
                p.Panel01_02_02_00.set_horizontalgap("10");
                p.Panel01_02_02_00.set_flexcrossaxisalign("center");
                p.Panel01_02_02_00.set_flexmainaxisalign("end");
                p.Panel01_02_02_00.move("2340.00","690","50%","50",null,null);

                p.sub_tit05.set_taborder("18");
                p.sub_tit05.set_background("#ffffff");
                p.sub_tit05.set_flexcrossaxisalign("end");
                p.sub_tit05.set_minheight("70");
                p.sub_tit05.set_maxheight("");
                p.sub_tit05.move("1630","674","100%","70",null,null);

                p.Div05.set_taborder("19");
                p.Div05.set_text("Div00");
                p.Div05.set_cssclass("div_WF_Bg");
                p.Div05.set_fittocontents("height");
                p.Div05.move("0","30","100%","200",null,null);

                p.staSubTitleRvwOpnn.set_taborder("20");
                p.staSubTitleRvwOpnn.set_text("임차의향서(변경) 신청 검토의견");
                p.staSubTitleRvwOpnn.set_cssclass("sta_WF_SubTitle");
                p.staSubTitleRvwOpnn.move("1630.00","690","50%","50",null,null);

                p.panRvwOpnn.set_taborder("21");
                p.panRvwOpnn.set_cssclass("pal_WF_TitBtnBg");
                p.panRvwOpnn.set_spacing("0px 10px");
                p.panRvwOpnn.set_horizontalgap("10");
                p.panRvwOpnn.set_flexcrossaxisalign("center");
                p.panRvwOpnn.set_flexmainaxisalign("end");
                p.panRvwOpnn.move("2340.00","690","50%","50",null,null);

                p.sub_tit08.set_taborder("22");
                p.sub_tit08.set_background("#ffffff");
                p.sub_tit08.set_flexcrossaxisalign("end");
                p.sub_tit08.set_visible("true");
                p.sub_tit08.set_minheight("70");
                p.sub_tit08.set_maxheight("");
                p.sub_tit08.move("1630","674","100%","70",null,null);

                p.divRvwOpnn.set_taborder("23");
                p.divRvwOpnn.set_text("Div00");
                p.divRvwOpnn.set_cssclass("div_WF_Bg .div_WF_SchBg");
                p.divRvwOpnn.set_fittocontents("height");
                p.divRvwOpnn.set_visible("true");
                p.divRvwOpnn.move("0","30","100%","158",null,null);
            	}
            );
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

            	}
            );
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_type("vertical");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divQuick.form
            obj = new Layout("default","",0,0,this.divQuick.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btn01.set_taborder("0");
                p.btn01.set_text("임차인 정보");
                p.btn01.set_cssclass("btn_WF_Quick_S");
                p.btn01.move("17","20","100%","45",null,null);

                p.btn02.set_taborder("1");
                p.btn02.set_text("변경요청사항");
                p.btn02.set_cssclass("btn_WF_Quick");
                p.btn02.move("17.00","btn01:0","100%","45",null,null);

                p.btn03.set_taborder("2");
                p.btn03.set_text("임차업무 연락처");
                p.btn03.set_cssclass("btn_WF_Quick");
                p.btn03.move("17.00","110","100%","45",null,null);

                p.btn05.set_taborder("3");
                p.btn05.set_text("첨부파일");
                p.btn05.set_cssclass("btn_WF_Quick");
                p.btn05.move("17.00","110","100%","45",null,null);

                p.btn08.set_taborder("4");
                p.btn08.set_text("검토의견");
                p.btn08.set_cssclass("btn_WF_Quick");
                p.btn08.move("17.00","110","100%","45",null,null);
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

                p.btn05.set_fittocontents("width");
                p.btn05.set_cssclass("btn_WF_QuickM");

                p.btn08.set_cssclass("btn_WF_QuickM");
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
                p.btnCancel.set_taborder("0");
                p.btnCancel.set_text("취소");
                p.btnCancel.set_cssclass("btn_WF_No");
                p.btnCancel.move("7","20","84","40",null,null);

                p.btnSbmsn.set_taborder("1");
                p.btnSbmsn.set_text("제출");
                p.btnSbmsn.set_cssclass("btn_WF_Yes");
                p.btnSbmsn.move("btnCancel:10","20","84","40",null,null);

                p.btnSave.set_taborder("2");
                p.btnSave.set_text("저장");
                p.btnSave.set_cssclass("btn_WF_Yes");
                p.btnSave.move("10","20","84","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_verticalgap("10");
            obj.set_horizontalgap("10");
            obj.set_spacing("20px 10px");
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
            obj.set_flexwrap("nowrap");
            obj.set_spacing("0px 10px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("10");
            obj.set_horizontalgap("10");
            this.divBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divGuide00.form
            obj = new Layout("default","",0,0,this.divGuide00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btn00.set_taborder("0");
                p.btn00.set_text("기본정보");
                p.btn00.set_cssclass("btn_WF_Quick");
                p.btn00.move("18.00","15","262","45",null,null);

                p.sta00.set_taborder("1");
                p.sta00.set_text("선택했을때 class : btn_WF_Quick_S 적용");
                p.sta00.move("18.00","122","375","50",null,null);

                p.btn00_00.set_taborder("2");
                p.btn00_00.set_text("기본정보");
                p.btn00_00.set_cssclass("btn_WF_Quick_S");
                p.btn00_00.move("18.00","68","262","45",null,null);

                p.Button00_00.set_taborder("3");
                p.Button00_00.set_cssclass("btn_WF_ACPlus");
                p.Button00_00.set_visible("false");
                p.Button00_00.move("20.00","205","34","34",null,null);

                p.Button00_00_00.set_taborder("4");
                p.Button00_00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_00.move("64.00","205","34","34",null,null);

                p.sta00_00.set_taborder("5");
                p.sta00_00.set_text("접혀있을때 class : btn_WF_ACPlus 로 접음");
                p.sta00_00.move("20.00","255","375","50",null,null);
            	}
            );
            this.divGuide00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGuide00.form
            obj = new Layout("mobile","",0,0,this.divGuide00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divGuide00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGuide00.form
            obj = new Layout("mobile","",0,0,this.divGuide00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divGuide00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("임차의향서(변경) 등록");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_cssclass("div_WF_QuickFrBg");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("height");
                p.divForm.move("0","70",null,"4566","60",null);

                p.divTitle.set_taborder("3");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);

                p.divQuick.set_taborder("1");
                p.divQuick.set_text("div00");
                p.divQuick.set_cssclass("div_WF_QuickMenu");
                p.divQuick.set_fittocontents("height");
                p.divQuick.move(null,"divTitle:20","296","245","62",null);

                p.divBtn.set_taborder("2");
                p.divBtn.set_text("div00");
                p.divBtn.set_cssclass("div_WF_QuickBtnBg");
                p.divBtn.set_fittocontents("height");
                p.divBtn.move(null,"divQuick:0","296","181","62",null);

                p.divGuide00.set_taborder("4");
                p.divGuide00.set_text("div00");
                p.divGuide00.set_visible("false");
                p.divGuide00.set_cssclass("div_GD_Tip");
                p.divGuide00.move("1600.00","145","450","385",null,null);

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
                p.RaonkUpload.move("0","520","864","200",null,null);
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
                p.divTitle.set_visible("false");
                p.divTitle.move("0","0",null,"50","0",null);

                p.divQuick.set_cssclass("div_WF_QuickMenuM");
                p.divQuick.move("20","divTitle:20",null,"60","20",null);

                p.divForm.set_fittocontents("none");
                p.divForm.set_cssclass("div_WF_QuickFrBgM");
                p.divForm.move("0","150",null,null,"0","80");

                p.divBtn.set_cssclass("div_WF_QuickBtnBgM");
                p.divBtn.set_fittocontents("none");
                p.divBtn.move("0",null,null,"80","0","0");
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.divHirerInfo.form.edtBzentyNm","value","dsMaster","bzentyNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.divHirerInfo.form.edtBzentyClsfNm","value","dsMaster","bzentyClsfNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.divHirerInfo.form.cboRtfeYn","value","dsMaster","rtfeYnCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.divHirerInfo.form.cboMncoYn","value","dsMaster","mncoYnCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.divHirerInfo.form.cboUtltYn","value","dsMaster","utltYnCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.divHirerInfo.form.txtRltnMttr","value","dsMaster","rltnMttr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.divHirerInfo.form.txtNoteMttr","value","dsMaster","noteMttr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.sub_tit00.form.edt00_01","value","dsMaster","prgrsSttsNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.sub_tit00.form.edt00_01_01","value","dsMaster","rcptNo");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.addIncludeScript("REN041M01.xfdl","xjs::TaskCom.xjs");
        this.registerScript("REN041M01.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	REN041M01.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/12/03
        *  @Desction    임차의향서(변경) 등록
        ******************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/12/03			이루온						최초생성
        *******************************************************************************
        */

        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;  // 업무공통
        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.param;
        this.validateColumn = [];

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	if (this.opener) {
        		// 상세화면 타이틀 폭 설정 변경
        		this.divTitle.height = 0;

        		this.param = {
        			"status" : this.getOwnerFrame().status
        			,"hireLoiNo" : this.getOwnerFrame().hireLoiNo
        		}
        	} else {
        		this.param = this.getOwnerFrame().form.fvObjArgs;
        	}

        	if (this.param != null) {
        		//페이지 로딩시 처음에 실행 되는 함수
        		this.fnInit();

        		// 등록 이면
        		if (this.param.status != null && this.param.status == "reg") {
        			// 접수번호 및 상태 표시 안함.
        			this.divForm.form.sub_tit00.visible = false;
        			// 임차의향서 등록조회
        			this.selectChgHireLoiReg();
        		} else {
        			// 임차의향서 상세조회
        			this.dsSearch.setColumn(0,"hireLoiNo"	,this.param.hireLoiNo);
        			this.selectHireLoi();
        		}

        		//초기포커스 지정
        		//this.divForm.form.Div01.form.rdoSptIdntyCd.setFocus();
        	} else {
        		this.gfnAlertMsg("msg", "REN_004");	//임차희망서번호가 없습니다.
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	// 사용자정보 조회
        	const gdsUser = nexacro.getApplication().gdsUser;
        	this.dsSearch.setColumn(0, "userId"		,gdsUser.getColumn(0, "userId"));
        	this.dsSearch.setColumn(0,"grp1CdId"	,"REN041M01");

        	// 공통코드조회 : 상세용도, 유무상코드
        	this.cfnComCdLoad({dsCboDtlUsgCd:"RENT_DTL_USG:S", dsCboRtfeYnCd:"YN_CD:S", dsCboMncoYnCd:"YN_CD:S", dsCboUtltYnCd:"YN_CD:S", dsCboBldgCd:"RENT_ASN_BLDG"});
        	this.cfnEtcCdLoad({id:"cfnEtcCd"
        					 , cbf:"fnCallback"
        //					 , dsCboUsgCd:"{id:'selectTaskComListCd', cnd:{cdTyId:'RENT_USE'}, opt:'B:grp2CdNm'}"
        //					 , dsCboDtlUsgCd:"{id:'selectTaskComListCd', cnd:{cdTyId:'RENT_USE'}, opt:'B:cdNm'}"
        					 , dsAtflArtclList:"{id:'selectTaskComListCd', cnd:{cdTyId:'ATFL_SE', grp1CdId:'REN041M01'}}"});

        	this.validateColumn.push({"title" : "임대료"	, "com": this.divForm.form.divHirerInfo.form.cboRtfeYn});
        	this.validateColumn.push({"title" : "관리비"	, "com": this.divForm.form.divHirerInfo.form.cboMncoYn});
        	this.validateColumn.push({"title" : "유티리티"	, "com": this.divForm.form.divHirerInfo.form.cboUtltYn});
        };

        // 상세 페이지 옆 버튼 부분 플로팅 스크롤
        this.form_onvscroll = function(obj,e)
        {
        	if (this.objApp.screenid == "Desktop_screen") {
        		this.divQuick.top = e.pos+50;
        		this.divBtn.top = "divQuick:0";
        /*
        		if (this.dsGet.getColumn(0, "prgrsSttsCd") == "10"
        			|| this.dsGet.getColumn(0, "prgrsSttsCd") == "11"
        			|| this.dsGet.getColumn(0, "prgrsSttsCd") == "14"
        			|| this.param.status == "reg"){
        			this.divBtn.top = e.pos+251;
        		}
        */
        	}
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/

        // 임차의향서 등록조회
        this.selectChgHireLoiReg = function()
        {
        	var strSvcId    = "selectChgHireLoiReg";
        	var strSvcUrl   = "ren/chg/selectChgHireLoiReg.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsCtrtInfo=dsCtrtInfo dsAtflList=dsAtflList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 임차의향서 상세조회
        this.selectHireLoi = function()
        {
        	var strSvcId    = "selectHireLoi";
        	var strSvcUrl   = "ren/chg/selectChgHireLoi.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsMaster=dsMaster dsSpceList=dsSpceList dsPicList=dsPicList dsAtflList=dsAtflList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };


        // 데이터 저장
        this.saveTransaction = function()
        {
        	console.log("this.dsPicList.saveJSON()===>"+this.dsPicList.saveJSON());
        	var strSvcId    = "saveChgHireLoi";
        	var strSvcUrl   = "ren/chg/saveChgHireLoi.do";
        	var inData      = "dsMaster=dsMaster:A dsSpceList=dsSpceList:U dsPicList=dsPicList:A dsAtflList=dsAtflSave:U"
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= false;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };


        this.cfnClose = function() {
        	console.log('cfnClose');
        }

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

        		case "cfnEtcCd":
        			this.dsFile.clear();
        			for(var i = 0; i < this.dsAtflArtclList.rowcount; i++) {
        				this.dsFile.addColumn(this.dsAtflArtclList.getColumn(i, "cdId"), "STRING");
        			}
        			this.dsFile.addRow();
        			break;

        		// 임차의향서 등록조회
        		case "selectChgHireLoiReg":
        			if (this.dsCtrtInfo.rowcount == 0) {
        				// {0} 할 계약정보가 없습니다.
        				this.gfnAlertMsg("msg", "REN_018", [ "변경" ]);
        				this.divBtn_btnCancel_onclick();
        				return;
        /*
        			} else if (this.dsCtrtSpceInfo.rowcount == 0) {
        				// {0} 할 계약공간정보가 없습니다.
        				this.gfnAlertMsg("msg", "REN_019", [ "변경" ]);
        				this.divBtn_btnCancel_onclick();
        				return;
        				*/
        			}

        			this.dsMaster.clearData();

        			this.dsMaster.addRow();
        			this.dsMaster.copyRow(0, this.dsCtrtInfo,0);
        			this.dsMaster.setColumn(0, "loiSeCd"	, "M");		// 의향서구분: A.신규 M.변경
        /*
        			// 계약공간정보를 임차의향서공간내역으로 복사
        			this.dsSpceList.clearData();
        			for (i = 0; i<this.dsCtrtSpceInfo.rowcount; i++) {
        				this.dsSpceList.addRow();
        				this.dsSpceList.copyRow(i,this.dsCtrtSpceInfo,i);
        			};

        			// 공간정보 데이타셋 상태값 초기화
        			this.dsSpceList.set_updatecontrol(false);
        			this.dsSpceList.applyChange();
        			this.dsSpceList.set_updatecontrol(true);
        */
        			this.divBtn.form.btnSave.visible = true;		// 저장
        			this.divBtn.form.btnSbmsn.visible = false;		// 제출
        			this.divForm.form.sub_tit08.visible = false;	// 검토의견
        			this.divForm.form.divRvwOpnn.visible = false;	// 검토의견
        			this.divQuick.form.btn08.visible = false;		// 검토의견 퀵버튼

        			// 첨부파일 설정
        			this.cfnFileSet();

        			break;

        		// 임차의향서 상세조회
        		case "selectHireLoi":
        /*
        			// 계약공간정보를 임차의향서공간내역으로 복사
        			for (i = 0; i<this.dsCtrtSpceInfo.rowcount; i++) {
        				this.dsSpceList.addRow();
        				this.dsSpceList.copyRow(this.dsSpceList.rowposition,this.dsCtrtSpceInfo,i);
        			};

        			// 공간정보 데이타셋 상태값 초기화
        			this.dsSpceList.set_updatecontrol(false);
        			this.dsSpceList.applyChange();
        			this.dsSpceList.set_updatecontrol(true);
        */
        			this.divBtn.form.btnSave.visible = false;		// 저장
        			this.divBtn.form.btnSbmsn.visible = false;		// 제출

        			// 30.작성중 31.제출 32.접수 33.반려 34.SAP전송 35.배정확정
        			if (this.dsMaster.getColumn(0,"prgrsSttsCd") == "30") {
        				this.divBtn.form.btnSave.visible = true;	// 저장
        				this.divBtn.form.btnSbmsn.visible = true;	// 제출
        			} else {
        				// 30.작성중 아닌 경우 행추가/삭제 버튼 비활성화 시킴
        				this.divForm.form.Div02.form.btnAddRowSpce.visible = false;	// 행추가
        				this.divForm.form.Div02.form.btnDelRowSpce.visible = false;	// 행삭제
        				this.divForm.form.Div03.form.divGrdPicList.form.btnAddRow.visible = false;	// 행삭제
        				this.divForm.form.Div03.form.divGrdPicList.form.btnDelRow.visible = false;	// 행삭제

        				// 30.작성중 아닌 경우 첨부파일 버튼 비활성화 시킴
        				this.divForm.form.Div03.form.grdFile1.setFormatColProperty(1, "size", 0);
        				this.divForm.form.Div05.form.grdFile2.setFormatColProperty(2, "size", 0);
        			}

        			// 33.반려 인 경우만 검토의견 표시 함
        			if (this.dsMaster.getColumn(0,"prgrsSttsCd") != "33") {
        				this.divForm.form.sub_tit08.visible = false;	// 검토의견
        				this.divForm.form.divRvwOpnn.visible = false;	// 검토의견
        				this.divQuick.form.btn08.visible = false;		// 검토의견 퀵버튼
        				this.divBtn.top = "divQuick:0";
        			}

        			// 35.확정 인 경우만 확정연장일자 그리드 표시 함
        			if (this.dsMaster.getColumn(0,"prgrsSttsCd") != "35") {
        				var grid = this.divForm.form.Div02.form.divGrdSpceList.form.grdSpceList;
        				grid.setFormatColProperty(8, "size", 0);
        			}

        			// 첨부파일 설정
        			this.cfnFileSet();

        			break;

        		case "saveChgHireLoi":		// 저장
        			this.gfnAlertMsg("msg", "MSG_007", [ this.objApp.getVariable("gvRetMsg") ]);
        			var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        			this.gfnCloseMenu(cMenuId);
        			this._gfnOpenMenu(cMenuId.substring(0,14),"",true);

        			break;

        		case "uploadComplete":
        			// 파일 업로드가 완료 된 후 첨부파일 과 같이 데이터 저장
        			console.log("this.dsAtchRslt.saveJSON"+this.dsAtchRslt.saveJSON());

        			console.log("this.dsFile1==aa==>"+this.dsFile1.saveJSON());

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

        			console.log("this.dsAtflSave==1==>"+this.dsAtflSave.saveJSON());

        			// 파일 업로드 결과를 첨부파일 데이터셋에 설정
        			for (var i = 0; i < this.dsAtchRslt.rowcount; i++) {
        			    // 첨부파일관리번호
        				this.dsAtflSave.setColumn(this.dsAtflSave.findRow("colId", this.dsAtchRslt.getColumn(i, "colId")), "atflMngNo", this.dsAtchRslt.getColumn(i, "atflMngNo"));
        			}

        			console.log("this.dsAtflSave==2==>"+this.dsAtflSave.saveJSON());

        			this.saveTransaction();

        			break;
        	}
        };

        // 첨부파일 설정
        this.cfnFileSet = function()
        {
        	this.dsFile1.clearData();
        	this.dsFile2.clearData();
        	for (i = 0; i<this.dsAtflList.rowcount; i++) {
        		// 임차업무 담당자 개인정보수집 및 이용동의서
        		if (this.dsAtflList.getColumn(i,"grp2CdId") == "A") {
        			this.dsFile1.addRow();
        			this.dsFile1.copyRow(this.dsFile1.rowposition,this.dsAtflList,i);
        		}

        		// 시설사용료 담당자 개인정보수집 및 이용동의서
        		if (this.dsAtflList.getColumn(i,"grp2CdId") == "B") {
        			this.dsFile2.addRow();
        			this.dsFile2.copyRow(this.dsFile2.rowposition,this.dsAtflList,i);
        		}
        	};

        	console.log("this.dsFile1==2==>"+this.dsFile1.saveXML());
        	console.log("this.dsFile2==2==>"+this.dsFile2.saveXML());

        	// 데이터 조회 후 파일리스트에 셋팅
        	this.gfnDownloadSetting(this.RaonkUpload, this.dsFile1);
        	this.gfnDownloadSetting(this.RaonkUpload, this.dsFile2);

        	// 첨부파일1 데이타셋 상태값 초기화
        	this.dsFile1.set_updatecontrol(false);
        	this.dsFile1.applyChange();
        	this.dsFile1.set_updatecontrol(true);

        	// 첨부파일2 데이타셋 상태값 초기화
        	this.dsFile2.set_updatecontrol(false);
        	this.dsFile2.applyChange();
        	this.dsFile2.set_updatecontrol(true);
        }


        /*******************************************************************************************************************************
         * 저장 버튼 클릭시
        *******************************************************************************************************************************/
        this.divBtn_btnSave_onclick = function(obj,e)
        {
        	 if (this.gfnDsIsUpdated(this.dsMaster) == true ||
        		this.gfnDsIsUpdated(this.dsSpceList) == true ||
        		this.gfnDsIsUpdated(this.dsPicList) == true ||
        		this.gfnDsIsUpdated(this.dsFile1) == true ||
        		this.gfnDsIsUpdated(this.dsFile2) == true) {

        		this.dsMaster.setColumn(0, "prgrsSttsCd"	, "30");	// 진행상태코드: 30.작성중
        		this.gfnConfirmMsg("save_confirm", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        	} else {
        		// 변경된 내용이 없습니다.
         		this.gfnAlertMsg("msg", "MSG_004");
         		return;
        	}
        };

        /*******************************************************************************************************************************
         * 제출 버튼 클릭시
        *******************************************************************************************************************************/
        this.divBtn_btnSbmsn_onclick = function(obj,e)
        {
        	// 필수입력 여부 체크
        	if (this.gfnDsIsValidated(this.validateColumn)) {
        		// 그리드 필수입력여부 체크(임차요청사항)
        		if (this.cfnGrdIsValidated(this.divForm.form.Div02.form.divGrdSpceList.form.grdSpceList) == false) {
        			return;
        		};

        		// 그리드 필수입력여부 체크(임차업무 담당자 연락처)
        		if (this.cfnGrdIsValidated(this.divForm.form.Div03.form.divGrdPicList.form.grdPicList) == false) {
        			return;
        		};

        		this.dsMaster.setColumn(0, "prgrsSttsCd"	, "31");	// 진행상태코드: 30.작성중 31.제출
        		this.gfnConfirmMsg("sbmsn_confirm", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"],"",["제출"]);
        	}
        };

        /*******************************************************************************************************************************
         * 삭제 버튼 클릭시
        *******************************************************************************************************************************/
        this.divBtn_btnDelete_onclick = function(obj,e)
        {
        	this.gfnConfirmMsg("delete_confirm", "MSG_005", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        };

        /*******************************************************************************************************************************
         * 취소 버튼 클릭시
        *******************************************************************************************************************************/
        this.divBtn_btnCancel_onclick = function(obj,e)
        {
        	var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        	this.gfnCloseMenu(cMenuId);
        	this._gfnOpenMenu(cMenuId.substring(0,14),"",true);
        };


        //얼럿창 콜백 함수
        this.msgCallback = function(sPopupId, sRtn) {

        	var oRtn 		= JSON.parse(sRtn);

        	// 저장 또는 제출시
        	if (sPopupId == "save_confirm" || sPopupId == "sbmsn_confirm") {
        		if (oRtn.result == "Y") {
        			var obj = {
        				"atchFileId" : "",			// 기존 첨부파일 있을 경우 입력
        				"bsnsSeCd" : "REN",			// 업무구분코드
        				"prgrmId" : "REN041M01" 	// 프로그램ID (화면 ID)
        			}

        			var str = JSON.stringify(obj);
        			this.RaonkUpload.AddFormData('params', str);
        			this.RaonkUpload.Transfer();
        		}

        	// 임차업무 담당자 개인정보수집 및 이용동의서 삭제
        	} else if(sPopupId == "file_del1") {
        		this.cfnDsFileDelete(this.dsFile1, oRtn);

        	// 변경요청공문
        	} else if(sPopupId == "file_del2") {
        		this.cfnDsFileDelete(this.dsFile2, oRtn);
        	}
        };

        // 첨부파일 삭제
        this.cfnDsFileDelete = function(oDsFile, oRtn) {
        	console.log(">>>oDsFile 1<<<"+oDsFile.saveJSON());

        	this.dsFile99.clearData();
        	this.dsFile99.copyData(oDsFile);

        	this.gfnDeleteFile(this.RaonkUpload, oDsFile, oRtn.paramArg);

        	oDsFile.clearData();
        	oDsFile.copyData(this.dsFile99);

        	oDsFile.setColumn(this.gRow,"colId","");
        	oDsFile.setColumn(this.gRow,"atflMngNo","");
        	oDsFile.setColumn(this.gRow,"orgnlFileNm","");

        	console.log(">>>oDsFile 2<<<"+oDsFile.saveJSON());
        };

        // 신청자와동일 체크시
        this.divForm_Div01_cbxAplcntSmYn_onclick = function(obj,e)
        {
        	if (this.divForm.form.Div01.form.cbxAplcntSmYn.value == "Y") {
        		this.divForm.form.Div01.form.edtVstrNm.value = this.objApp.gdsUser.getColumn(0,"userNm");
        		this.divForm.form.Div01.form.edtVstrTelno.value  = this.objApp.gdsUser.getColumn(0, "userMblTelno");
        	}
        };


        // 업무담당자 행 추가시
        this.divForm_Div03_divGrdPicList_btnAddRow_onclick = function(obj,e)
        {
        	this.dsPicList.addRow();
        };


        // 업무담당자 행 삭제시
        this.divForm_Div03_divGrdPicList_btnDelRow_onclick = function(obj,e)
        {
        	for (var i=this.dsPicList.rowcount;i>=0;i--) {
        		if (this.dsPicList.getColumn(i, "chc") == "1") {
        			this.dsPicList.deleteRow(i);
        		}
        	}
        };


        // 공간정보 행 추가시
        this.divForm_Div02_btnAddRowSpce_onclick = function(obj,e)
        {
        	var sTitle = "SAP풀공간검색";
        	//var objArg   = {"jobGroupId" : this.jobGroupId};
        	var objArg   = {"jobGroupId" : ""};

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
         		//, width: 1221
         		//, height: 650			//width,height 지정하지 않음 popup form size적용
        		, autosize: false
        		, title: sTitle
        		, resize: false
        		, titlebar: true
        	};

        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("sapPolSpce", "work::REN/CHG/REN041P01.xfdl", objArg, sPopupCallBack, objOption);
        };

        // 팝업 콜백 함수
        this.fnPopupCallback = function(sPopupId, sRtn)
        {
        	if(sPopupId =="sapPolSpce")
        	{
        		if (this.gfnIsNull(sRtn)) return;
        		var objRtn = JSON.parse(sRtn);

        		for (var i=0;i<objRtn.length;i++) {
        			var nRow = this.dsSpceList.addRow();
        			this.dsSpceList.setColumn(nRow, "polSpceId"		, objRtn[i].polSpceId);
        			this.dsSpceList.setColumn(nRow, "rmnmNo"		, objRtn[i].rmnmNo);
        			this.dsSpceList.setColumn(nRow, "bldgCd"		, objRtn[i].bldgCd);
        			this.dsSpceList.setColumn(nRow, "dtlUsgCd"		, objRtn[i].rentUsgCd);
        			this.dsSpceList.setColumn(nRow, "rentAr"		, objRtn[i].rentSpceAr);
        			this.dsSpceList.setColumn(nRow, "rentBgngYmd"	, objRtn[i].ctrtBgngYmd);
        			this.dsSpceList.setColumn(nRow, "rentEndYmd"	, objRtn[i].ctrtEndYmd);
        			this.dsSpceList.setColumn(nRow, "ctrtPrd"		, objRtn[i].ctrtPrd);
        		}

        		// 공간내역건수
        		this.divForm.form.Div02.form.staTotalCnt.text = this.dsSpceList.rowcount;
        	}
        };

        // 공간정보 행 삭제시
        this.divForm_Div02_btnDelRowSpce_onclick = function(obj,e)
        {
        	for (var i=this.dsSpceList.rowcount;i>=0;i--) {
        		if (this.dsSpceList.getColumn(i, "chc") == "1") {
        			this.dsSpceList.deleteRow(i);
        		}
        	}

        	// 공간내역건수
        	this.divForm.form.Div02.form.staTotalCnt.text = this.dsSpceList.rowcount;
        };

        // 퀵메뉴 클릭시
        this.divQuickMenu_onclick = function(obj,e)
        {
        	if (obj.name == "btn01") {
        		this.divForm.form.sub_tit01.setFocus();	// 임차인정보
        	} if (obj.name == "btn02") {
        		this.divForm.form.sub_tit02.setFocus();	// 임차요청사항
        	} if (obj.name == "btn03") {
        		this.divForm.form.sub_tit03.setFocus();	// 임차엄부담당자연락처
        	} if (obj.name == "btn04") {
        		this.divForm.form.sub_tit04.setFocus();	// 시설사용료 청구대상 정보
        	} if (obj.name == "btn05") {
        		this.divForm.form.sub_tit05.setFocus();	// 첨부파일
        	} if (obj.name == "btn06") {
        		this.divForm.form.sub_tit06.setFocus();	// 체크리스트
        	} if (obj.name == "btn07") {
        		this.divForm.form.sub_tit07.setFocus();	// 입주/퇴거안내
        	} if (obj.name == "btn08") {
        		this.divForm.form.sub_tit08.setFocus();	// 검토의견
        	}
        };


        this.divForm_Div02_divGrdSpceList_grdSpceList_oncellclick = function(obj,e)
        {
        	if (this.dsSpceList.getColumn(e.row, "chc") == "1") {
        		this.divForm.form.Div02.form.divGrdSpceList.form.grdSpceList.setFocus();
        		this.divForm.form.Div02.form.divGrdSpceList.form.grdSpceList.setCellPos(7);
        		this.divForm.form.Div02.form.divGrdSpceList.form.grdSpceList.setFocus(e.row, true);
        		// 선택 건수 구하기 및 표시
        		this.dsSpceList.filter("chc == '1'");
        		var vCnt = this.dsSpceList.getRowCount();
        		this.divForm.form.Div02.form.staTotalCnt.text = vCnt;
        		this.dsSpceList.filter("");
        	} else {
        		this.dsSpceList.setColumn(e.row, "hpePrlgYmd", "");
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
        	console.log("RaonkUpload_RAONKUPLOAD_BeforeAddFile");

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
        		console.log(">>>this.dsFile1<<<"+this.dsFile1.saveJSON());

        	// 변경요청공문
        	} else if(this.gAtflSe == "dsFile2") {
        		var nIdx = this.dsFile2.rowposition;
        		this.dsFile2.setColumn(nIdx, "fullName", paramObj.userdata.strName + ' (' + paramObj.userdata.nSize + ')');
        		this.dsFile2.setColumn(nIdx, "orgnlFileNm", paramObj.userdata.strName);
        		this.dsFile2.setColumn(nIdx, "fileSz", paramObj.userdata.nSize);
        		this.dsFile2.setColumn(nIdx, "atflMngSno", paramObj.userdata.nIndex);
        		this.dsFile2.setColumn(nIdx, "colId", this.gvUploadCategory);
        		console.log(">>>this.dsFile2<<<"+this.dsFile2.saveJSON());
        	}
        };

        // 파일 업로드 완료 이벤트
        this.RaonkUpload_RAONKUPLOAD_UploadComplete = function(obj, paramObj)
        {
        	var allListArray = this.RaonkUpload.GetListInfo("json");
        	console.log("RaonkUpload_RAONKUPLOAD_UploadComplete");
        	console.log(allListArray);
        	// 파일 업로드 후 첨부파일관리번호를 얻기 위한 함수
        	this.gfnUploadComplete("uploadComplete", allListArray, "dsAtchRslt", "fnCallback");
        };

        // 임차업무 담당자 개인정보수집 및 이용동의서
        this.divForm_Div03_grdFile1_oncellclick = function(obj,e)
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

        // 변경요청공문
        this.divForm_Div04_grdFile2_oncellclick = function(obj,e)
        {
        	// 데이터의 첨부파일 관리번호 입력 컬럼명
        	if (e.col == 0) {
        		// 파일명을 더블클릭 시 다운로드
        		this.gfnDownloadFile(this.RaonkUpload, this.dsFile2, e);

        	} else if (e.col == 1) {
        		this.gAtflSe = "dsFile2";
        		this.gRow = this.dsFile2.rowposition;
        		this.gAtflCnt = 0;

        		// 파일추가 또는 삭제여부
        		if (this.gfnIsNull(this.dsFile2.getColumn(this.gRow,"orgnlFileNm"))) {
        			this.gvUploadCategory = this.dsFile2.getColumn(this.dsFile2.rowposition,"cdId");		// 컬럼ID
        			this.RaonkUpload.OpenFileDialog();
        		} else {
        			var param = {
        				"row" : e.row,
        				"col" : e.col
        			};

        			// {0} 첨부파일 삭제하시겠습니까?
        			var sCdNm = this.dsFile2.getColumn(this.dsFile2.rowposition,"cdNm")
        			this.gfnConfirmMsg("file_del2", "REN_021", "msgCallback", ["확인", "취소"], ["Y", "N"], param,[ "" ]);
        		}
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onvscroll",this.form_onvscroll,this);
            this.divForm.form.divHirerInfo.form.txtRltnMttr.addEventHandler("onchanged",this.divForm_Div03_TextArea00_onchanged,this);
            this.divForm.form.divHirerInfo.form.staNoteMttr.addEventHandler("onclick",this.divForm_Div01_staLabel01_00_01_01_00_00_00_onclick,this);
            this.divForm.form.divHirerInfo.form.txtNoteMttr.addEventHandler("onchanged",this.divForm_Div03_TextArea00_onchanged,this);
            this.divForm.form.staSubTitle02_00_00.addEventHandler("onclick",this.divForm_staSubTitle02_00_00_onclick,this);
            this.divForm.form.Div02.form.btnDelRowSpce.addEventHandler("onclick",this.divForm_Div02_btnDelRowSpce_onclick,this);
            this.divForm.form.Div02.form.btnAddRowSpce.addEventHandler("onclick",this.divForm_Div02_btnAddRowSpce_onclick,this);
            this.divForm.form.staSubTitle02_00_01.addEventHandler("onclick",this.divForm_staSubTitle02_00_01_onclick,this);
            this.divForm.form.Div03.form.staLabel00_02_01_00.addEventHandler("onclick",this.divForm_Div05_staLabel00_02_01_onclick,this);
            this.divForm.form.Div03.form.divGrdPicList.form.btnDelRow.addEventHandler("onclick",this.divForm_Div03_divGrdPicList_btnDelRow_onclick,this);
            this.divForm.form.Div03.form.divGrdPicList.form.btnAddRow.addEventHandler("onclick",this.divForm_Div03_divGrdPicList_btnAddRow_onclick,this);
            this.divForm.form.Div03.form.grdFile1.addEventHandler("oncellclick",this.divForm_Div03_grdFile1_oncellclick,this);
            this.divForm.form.Div05.form.grdFile2.addEventHandler("oncellclick",this.divForm_Div04_grdFile2_oncellclick,this);
            this.divForm.form.divRvwOpnn.form.txtRvwOpnn.addEventHandler("onchanged",this.divForm_Div03_TextArea00_onchanged,this);
            this.divQuick.form.btn01.addEventHandler("onclick",this.divQuickMenu_onclick,this);
            this.divQuick.form.btn02.addEventHandler("onclick",this.divQuickMenu_onclick,this);
            this.divQuick.form.btn03.addEventHandler("onclick",this.divQuickMenu_onclick,this);
            this.divQuick.form.btn05.addEventHandler("onclick",this.divQuickMenu_onclick,this);
            this.divQuick.form.btn08.addEventHandler("onclick",this.divQuickMenu_onclick,this);
            this.divBtn.form.btnCancel.addEventHandler("onclick",this.divBtn_btnCancel_onclick,this);
            this.divBtn.form.btnSbmsn.addEventHandler("onclick",this.divBtn_btnSbmsn_onclick,this);
            this.divBtn.form.btnSave.addEventHandler("onclick",this.divBtn_btnSave_onclick,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddFile",this.RaonkUpload_RAONKUPLOAD_AfterAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_CreationComplete",this.RaonkUpload_RAONKUPLOAD_CreationComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_UploadComplete",this.RaonkUpload_RAONKUPLOAD_UploadComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_OnError",this.RaonkUpload_RAONKUPLOAD_OnError,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeAddFile",this.RaonkUpload_RAONKUPLOAD_BeforeAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddAllFile",this.RaonkUpload_RAONKUPLOAD_AfterAddAllFile,this);
            this.dsFile1.addEventHandler("onload",this.dsAtfl_onload,this);
            this.dsFile2.addEventHandler("onload",this.dsAtfl_onload,this);
            this.dsAtflSave.addEventHandler("onload",this.dsAtfl_onload,this);
            this.dsFile99.addEventHandler("onload",this.dsAtfl_onload,this);
        };
        this.loadIncludeScript("REN041M01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
