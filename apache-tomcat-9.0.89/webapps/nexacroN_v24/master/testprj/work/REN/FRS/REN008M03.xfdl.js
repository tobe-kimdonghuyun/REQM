(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("REN008M03");
            this.set_titletext("임차의향서 접수");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCustInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"hireLoiNo\" type=\"STRING\" size=\"256\"/><Column id=\"rprsvNm\" type=\"STRING\" size=\"0\"/><Column id=\"brno\" type=\"STRING\" size=\"0\"/><Column id=\"crno\" type=\"STRING\" size=\"0\"/><Column id=\"tpbizNm\" type=\"STRING\" size=\"0\"/><Column id=\"bzentyNm\" type=\"STRING\" size=\"0\"/><Column id=\"dtyDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"picNm\" type=\"STRING\" size=\"0\"/><Column id=\"telno\" type=\"STRING\" size=\"0\"/><Column id=\"fxno\" type=\"STRING\" size=\"0\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"0\"/><Column id=\"payShapeCd\" type=\"STRING\" size=\"256\"/><Column id=\"emlClmAplyYn\" type=\"STRING\" size=\"256\"/><Column id=\"emlAddr\" type=\"STRING\" size=\"0\"/><Column id=\"etxivEmlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"bplcZip\" type=\"STRING\" size=\"0\"/><Column id=\"bplcAddr\" type=\"STRING\" size=\"0\"/><Column id=\"bplcDtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"bplcAddrSmYn\" type=\"STRING\" size=\"256\"/><Column id=\"clmZip\" type=\"STRING\" size=\"256\"/><Column id=\"clmAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmDtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"hireLoiNo\" type=\"STRING\" size=\"256\"/><Column id=\"hireLohNo\" type=\"STRING\" size=\"256\"/><Column id=\"loiSeCd\" type=\"STRING\" size=\"0\"/><Column id=\"prgrsSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"hirerCustNo\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyNm\" type=\"STRING\" size=\"0\"/><Column id=\"bzentyClsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyClsfNm\" type=\"STRING\" size=\"256\"/><Column id=\"rtfeYnNm\" type=\"STRING\" size=\"0\"/><Column id=\"mncoYnNm\" type=\"STRING\" size=\"0\"/><Column id=\"utltYnNm\" type=\"STRING\" size=\"0\"/><Column id=\"rltnMttr\" type=\"STRING\" size=\"0\"/><Column id=\"noteMttr\" type=\"STRING\" size=\"0\"/><Column id=\"checkIdfrNm1\" type=\"STRING\" size=\"256\"/><Column id=\"checkIdfrNm2\" type=\"STRING\" size=\"256\"/><Column id=\"sbmsnDt\" type=\"STRING\" size=\"0\"/><Column id=\"sbmsnrId\" type=\"STRING\" size=\"0\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"rcptNo\" type=\"STRING\" size=\"256\"/><Column id=\"prgrsSttsNm\" type=\"STRING\" size=\"256\"/><Column id=\"rvwOpnn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSpceList", this);
            obj._setContents("<ColumnInfo><Column id=\"hireLoiNo\" type=\"STRING\" size=\"0\"/><Column id=\"polSpceId\" type=\"STRING\" size=\"0\"/><Column id=\"rtnChgSeCd\" type=\"STRING\" size=\"0\"/><Column id=\"bizSectNm\" type=\"STRING\" size=\"0\"/><Column id=\"cstrnDtyDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"bldgCd\" type=\"STRING\" size=\"0\"/><Column id=\"bldgNm\" type=\"STRING\" size=\"256\"/><Column id=\"usgCd\" type=\"STRING\" size=\"0\"/><Column id=\"dtlUsgNm\" type=\"STRING\" size=\"0\"/><Column id=\"rmnmNo\" type=\"STRING\" size=\"0\"/><Column id=\"rntar\" type=\"STRING\" size=\"0\"/><Column id=\"rentBgngYmd\" type=\"STRING\" size=\"0\"/><Column id=\"rentEndYmd\" type=\"STRING\" size=\"0\"/><Column id=\"cfmtnRmnmNo\" type=\"STRING\" size=\"0\"/><Column id=\"cfmtnRntar\" type=\"STRING\" size=\"0\"/><Column id=\"cfmtnCtrtBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"cfmtnCtrtEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"userCnt\" type=\"STRING\" size=\"0\"/><Column id=\"userCnt1\" type=\"STRING\" size=\"0\"/><Column id=\"userCnt2\" type=\"STRING\" size=\"0\"/><Column id=\"userCnt3\" type=\"STRING\" size=\"0\"/><Column id=\"rtnHpeDt\" type=\"STRING\" size=\"0\"/><Column id=\"ctrtCncltnDt\" type=\"STRING\" size=\"0\"/><Column id=\"gvbkAplyYn\" type=\"STRING\" size=\"0\"/><Column id=\"hpePrlgDt\" type=\"STRING\" size=\"0\"/><Column id=\"cfmtnPrlgDt\" type=\"STRING\" size=\"0\"/><Column id=\"noteMttr\" type=\"STRING\" size=\"0\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPicList", this);
            obj._setContents("<ColumnInfo><Column id=\"hireLoiNo\" type=\"STRING\" size=\"0\"/><Column id=\"regSeq\" type=\"STRING\" size=\"0\"/><Column id=\"aplcntSmYn\" type=\"STRING\" size=\"0\"/><Column id=\"picDeptNm\" type=\"STRING\" size=\"0\"/><Column id=\"picNm\" type=\"STRING\" size=\"0\"/><Column id=\"picJbpsNm\" type=\"STRING\" size=\"0\"/><Column id=\"picTelno\" type=\"STRING\" size=\"0\"/><Column id=\"picMblTelno\" type=\"STRING\" size=\"0\"/><Column id=\"picEmlAddr\" type=\"STRING\" size=\"0\"/><Column id=\"picFxno\" type=\"STRING\" size=\"0\"/><Column id=\"dtyBsnsNm\" type=\"STRING\" size=\"0\"/><Column id=\"prvcClctAgreYn\" type=\"STRING\" size=\"0\"/><Column id=\"prvcClctAgreAtflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboDtlUsgCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"hireLoiNo\" type=\"STRING\" size=\"256\"/><Column id=\"grp1CdId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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


            obj = new Dataset("dsHireLohSpceList", this);
            obj._setContents("<ColumnInfo><Column id=\"hireLoiNo\" type=\"STRING\" size=\"0\"/><Column id=\"polSpceId\" type=\"STRING\" size=\"0\"/><Column id=\"rtnChgSeCd\" type=\"STRING\" size=\"0\"/><Column id=\"bizSectNm\" type=\"STRING\" size=\"0\"/><Column id=\"cstrnDtyDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"bldgCd\" type=\"STRING\" size=\"0\"/><Column id=\"bldgNm\" type=\"STRING\" size=\"256\"/><Column id=\"usgCd\" type=\"STRING\" size=\"0\"/><Column id=\"dtlUsgCd\" type=\"STRING\" size=\"0\"/><Column id=\"rmnmNo\" type=\"STRING\" size=\"0\"/><Column id=\"rntar\" type=\"STRING\" size=\"0\"/><Column id=\"rentBgngYmd\" type=\"STRING\" size=\"0\"/><Column id=\"rentEndYmd\" type=\"STRING\" size=\"0\"/><Column id=\"cfmtnRmnmNo\" type=\"STRING\" size=\"0\"/><Column id=\"cfmtnRntar\" type=\"STRING\" size=\"0\"/><Column id=\"cfmtnCtrtBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"cfmtnCtrtEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"userCnt\" type=\"STRING\" size=\"0\"/><Column id=\"userCnt1\" type=\"STRING\" size=\"0\"/><Column id=\"userCnt2\" type=\"STRING\" size=\"0\"/><Column id=\"userCnt3\" type=\"STRING\" size=\"0\"/><Column id=\"rtnHpeDt\" type=\"STRING\" size=\"0\"/><Column id=\"ctrtCncltnDt\" type=\"STRING\" size=\"0\"/><Column id=\"gvbkAplyYn\" type=\"STRING\" size=\"0\"/><Column id=\"hpePrlgDt\" type=\"STRING\" size=\"0\"/><Column id=\"cfmtnPrlgDt\" type=\"STRING\" size=\"0\"/><Column id=\"noteMttr\" type=\"STRING\" size=\"0\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtflList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"grp1CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp1CdNm\" type=\"STRING\" size=\"0\"/><Column id=\"grp2CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp2CdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"hireLoiNo\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId\" type=\"STRING\" size=\"256\"/><Column id=\"atflCd\" type=\"STRING\" size=\"256\"/><Column id=\"natchRsn\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bsnsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId2\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtn\" type=\"STRING\" size=\"256\"/><Column id=\"strgFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTerm\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"grp2CdNm\">010</Col><Col id=\"hireLoiNo\">REN0022001</Col></Row><Row><Col id=\"grp2CdNm\">020</Col><Col id=\"hireLoiNo\">REN0022001</Col><Col id=\"prgrmId\">REN0022002</Col></Row><Row><Col id=\"grp2CdNm\">030</Col><Col id=\"hireLoiNo\">REN0022001</Col><Col id=\"prgrmId\">REN0022002</Col></Row><Row><Col id=\"grp2CdNm\">040</Col><Col id=\"prgrmId\">REN0022002</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj.set_useclientlayout("true");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"grp1CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp1CdNm\" type=\"STRING\" size=\"256\"/><Column id=\"grp2CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp2CdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"hireLoiNo\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId\" type=\"STRING\" size=\"256\"/><Column id=\"atflCd\" type=\"STRING\" size=\"256\"/><Column id=\"natchRsn\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bsnsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId2\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtn\" type=\"STRING\" size=\"256\"/><Column id=\"strgFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTerm\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"grp1CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp1CdNm\" type=\"STRING\" size=\"256\"/><Column id=\"grp2CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp2CdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"hireLoiNo\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId\" type=\"STRING\" size=\"256\"/><Column id=\"atflCd\" type=\"STRING\" size=\"256\"/><Column id=\"natchRsn\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bsnsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId2\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtn\" type=\"STRING\" size=\"256\"/><Column id=\"strgFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTerm\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile3", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"grp1CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp1CdNm\" type=\"STRING\" size=\"256\"/><Column id=\"grp2CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp2CdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"hireLoiNo\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId\" type=\"STRING\" size=\"256\"/><Column id=\"atflCd\" type=\"STRING\" size=\"256\"/><Column id=\"natchRsn\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bsnsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId2\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtn\" type=\"STRING\" size=\"256\"/><Column id=\"strgFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTerm\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","divTitle:0",null,"4566","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickFrBg");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

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

            obj = new Div("divRcptNo","990","16","100%","96",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("40");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staRcptNo","0","0","100%","46",null,null,null,null,null,null,this.divForm.form.divRcptNo.form);
            obj.set_taborder("0");
            obj.set_text("접수번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.divRcptNo.addChild(obj.name, obj);

            obj = new Edit("edtRcptNo","0","46","100%","40",null,null,null,null,null,null,this.divForm.form.divRcptNo.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.divRcptNo.addChild(obj.name, obj);

            obj = new Panel("panRcptNo","20","0","300","86",null,null,null,null,null,null,this.divForm.form.divRcptNo.form);
            obj.set_taborder("2");
            obj.set_flexgrow("1");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRcptNo\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRcptNo\"/></Contents>");
            this.divForm.form.divRcptNo.addChild(obj.name, obj);

            obj = new Static("staSttsNm","10","10","100%","46",null,null,null,null,null,null,this.divForm.form.divRcptNo.form);
            obj.set_taborder("3");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.divRcptNo.addChild(obj.name, obj);

            obj = new Edit("edtSttsNm","10","56","100%","40",null,null,null,null,null,null,this.divForm.form.divRcptNo.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_value("임차의향서 제출");
            obj.set_text("임차의향서 제출");
            this.divForm.form.divRcptNo.addChild(obj.name, obj);

            obj = new Panel("panSttsNm","720","0","300","86",null,null,null,null,null,null,this.divForm.form.divRcptNo.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSttsNm\"/><PanelItem id=\"PanelItem01\" componentid=\"edtSttsNm\"/></Contents>");
            this.divForm.form.divRcptNo.addChild(obj.name, obj);

            obj = new Panel("Panel01","1006","28","300","1",null,null,null,null,null,null,this.divForm.form.divRcptNo.form);
            obj.set_taborder("7");
            obj._setContents("");
            this.divForm.form.divRcptNo.addChild(obj.name, obj);

            obj = new Panel("panRcptNoGrp","0","0","100.00%","96",null,null,null,null,null,null,this.divForm.form.divRcptNo.form);
            obj.set_taborder("6");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_horizontalgap("20");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panRcptNo\"/><PanelItem id=\"PanelItem02\" componentid=\"panSttsNm\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel01\"/></Contents>");
            this.divForm.form.divRcptNo.addChild(obj.name, obj);

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
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Panel("panRtfeYn","396.00","70","90","86",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRtfeYn\"/><PanelItem id=\"PanelItem03\" componentid=\"edtRtfeYn\"/></Contents>");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Static("staMncoYn","46.00","46","100%","46",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("8");
            obj.set_text("관리비");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Panel("panMncoYn","46.00","46","90","86",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("9");
            obj.set_flexgrow("1");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staMncoYn\"/><PanelItem id=\"PanelItem02\" componentid=\"edtMncoYn\"/></Contents>");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Static("staUtltYn","396.00","70","100%","46",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("10");
            obj.set_text("유틸리티");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Panel("panUtltYn","396.00","70","90","86",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("11");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staUtltYn\"/><PanelItem id=\"PanelItem03\" componentid=\"edtUtltYn\"/></Contents>");
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

            obj = new Edit("edtMncoYn","698","55","100%","40",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("23");
            obj.set_value("");
            obj.getSetter("index").set("-1");
            obj.set_displaynulltext("선택");
            obj.getSetter("innerdataset").set("dsCboMncoYnCd");
            obj.getSetter("datacolumn").set("cdNm");
            obj.getSetter("codecolumn").set("cdId");
            obj.set_readonly("true");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Edit("edtUtltYn","906","53","100%","40",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("22");
            obj.set_displaynulltext("선택");
            obj.set_value("");
            obj.getSetter("index").set("-1");
            obj.getSetter("innerdataset").set("dsCboUtltYnCd");
            obj.getSetter("datacolumn").set("cdNm");
            obj.getSetter("codecolumn").set("cdId");
            obj.set_readonly("true");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Edit("edtRtfeYn","590","55","100%","40",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("21");
            obj.set_value("");
            obj.getSetter("index").set("-1");
            obj.getSetter("innerdataset").set("dsCboRtfeYnCd");
            obj.getSetter("datacolumn").set("cdNm");
            obj.getSetter("codecolumn").set("cdId");
            obj.set_displaynulltext("선택");
            obj.set_readonly("true");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Static("staRltnMttr","396.00","70","100%","46",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("13");
            obj.set_text("관련사항");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new TextArea("txtRltnMttr","171","111","100%","100",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
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
            obj.set_readonly("true");
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
            obj.set_text("임차요청사항");
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

            obj = new Div("divSpceListGrp","0","66","100%","300",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("9");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panSpceList","0","40","100.00%","301",null,null,null,null,null,null,this.divForm.form.divSpceListGrp.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divGrdSpceList\"/></Contents>");
            this.divForm.form.divSpceListGrp.addChild(obj.name, obj);

            obj = new Div("divGrdSpceList","0","0","100%","236",null,null,null,null,null,null,this.divForm.form.divSpceListGrp.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divSpceListGrp.addChild(obj.name, obj);

            obj = new Grid("grdSpceList","0","0","100.00%","236",null,null,null,null,null,null,this.divForm.form.divSpceListGrp.form.divGrdSpceList.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsSpceList");
            obj.set_autofittype("none");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"250\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"40\"/><Column size=\"200\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"건물명\"/><Cell col=\"1\" text=\"호실번호\"/><Cell col=\"2\" text=\"사용용도\"/><Cell col=\"3\" text=\"면적(m2)\"/><Cell col=\"4\" text=\"사용인원수\"/><Cell col=\"5\" text=\"임차시작일자\" cssclass=\"CellEnd\"/><Cell col=\"6\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"ToolTip\" tooltiptext=\"[임차시작일자] 임차의향서 제출일로부터 최소7일 이후 &#13;&#10;[임차종료일자] YYYY.12.31 (1년 단위 갱신) &#13;&#10;(단, 용역 등으로 인한 계약서상 별도 종료이이 명시되어 있는 경우에는 해당 종료일로 기재)\"/><Cell col=\"7\" text=\"임차종료일자\" cssclass=\"CellEnd\"/><Cell col=\"8\" cssclass=\"ToolTip\" displaytype=\"buttoncontrol\" edittype=\"button\" tooltiptext=\"[임차시작일자] 임차의향서 제출일로부터 최소7일 이후 &#13;&#10;[임차종료일자] YYYY.12.31 (1년 단위 갱신) &#13;&#10;(단, 용역 등으로 인한 계약서상 별도 종료이이 명시되어 있는 경우에는 해당 종료일로 기재)\"/><Cell col=\"9\" text=\"비고\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell textAlign=\"left\" verticalAlign=\"middle\" displaytype=\"normal\" edittype=\"readonly\" text=\"bind:bldgNm\"/><Cell col=\"1\" suppressalign=\"middle\" textAlign=\"center\" verticalAlign=\"middle\" edittype=\"readonly\" displaytype=\"normal\" cssclass=\"CellReadonly\" text=\"bind:rmnmNo\"/><Cell col=\"2\" textAlign=\"center\" verticalAlign=\"middle\" displaytype=\"text\" text=\"bind:dtlUsgNm\" edittype=\"normal\"/><Cell col=\"3\" textAlign=\"right\" verticalAlign=\"middle\" displaytype=\"normal\" text=\"bind:rntar\"/><Cell col=\"4\" textAlign=\"center\" verticalAlign=\"middle\" text=\"bind:userCnt\" edittype=\"normal\"/><Cell col=\"5\" colspan=\"2\" textAlign=\"center\" verticalAlign=\"middle\" text=\"bind:rentBgngYmd\" edittype=\"date\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" maskedittype=\"string\" maskeditmaskchar=\" \"/><Cell col=\"7\" colspan=\"2\" textAlign=\"center\" verticalAlign=\"middle\" displaytype=\"date\" text=\"bind:rentEndYmd\" maskedittype=\"string\" calendardateformat=\"yyyy-MM-dd\" edittype=\"date\" maskeditmaskchar=\" \"/><Cell col=\"9\" textAlign=\"left\" verticalAlign=\"middle\" displaytype=\"normal\" cssclass=\"CellEnd\" text=\"bind:noteMttr\" edittype=\"normal\"/></Band></Format></Formats>");
            this.divForm.form.divSpceListGrp.form.divGrdSpceList.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_01","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("10");
            obj.set_text("임차업무 담당자 연락처");
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

            obj = new Div("divPicListGrp","0","422.856","100%","502",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("14");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panPicList","0","60","100.00%","301",null,null,null,null,null,null,this.divForm.form.divPicListGrp.form);
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
            this.divForm.form.divPicListGrp.addChild(obj.name, obj);

            obj = new Panel("panFile00_00","0","313","100.00%","156",null,null,null,null,null,null,this.divForm.form.divPicListGrp.form);
            obj.set_taborder("2");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"grdFile1\"/></Contents>");
            this.divForm.form.divPicListGrp.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01_00","0","-931","400","46",null,null,null,null,null,null,this.divForm.form.divPicListGrp.form);
            obj.set_taborder("4");
            obj.set_text("임차업무 담당자 개인정보수집 및 이용동의서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.divForm.form.divPicListGrp.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00","20","-921","100%","46",null,null,null,null,null,null,this.divForm.form.divPicListGrp.form);
            obj.set_taborder("3");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01_00\"/></Contents>");
            this.divForm.form.divPicListGrp.addChild(obj.name, obj);

            obj = new Div("divGrdPicList","0","24","100%","280",null,null,null,null,null,null,this.divForm.form.divPicListGrp.form);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divPicListGrp.addChild(obj.name, obj);

            obj = new Grid("grdPicList","0","0","100%","236",null,null,null,null,null,null,this.divForm.form.divPicListGrp.form.divGrdPicList.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsPicList");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"101\"/><Column size=\"85\"/><Column size=\"98\"/><Column size=\"120\"/><Column size=\"142\"/><Column size=\"149\"/><Column size=\"155\"/><Column size=\"150\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"담당부서\"/><Cell col=\"1\" text=\"담당자\"/><Cell col=\"2\" text=\"직위(직급)\"/><Cell col=\"3\" text=\"전화(사무실)\"/><Cell col=\"4\" text=\"휴대폰\"/><Cell col=\"5\" text=\"이메일\"/><Cell col=\"6\" text=\"FAX\"/><Cell col=\"7\" cssclass=\"CellEnd\" text=\"담당업무\"/></Band><Band id=\"body\"><Cell textAlign=\"left\" verticalAlign=\"middle\" displaytype=\"text\" text=\"bind:picDeptNm\" edittype=\"text\"/><Cell col=\"1\" suppressalign=\"middle\" textAlign=\"left\" verticalAlign=\"middle\" edittype=\"text\" displaytype=\"text\" cssclass=\"CellReadonly\" text=\"bind:picNm\"/><Cell col=\"2\" textAlign=\"left\" verticalAlign=\"middle\" text=\"bind:picJbpsNm\" edittype=\"text\"/><Cell col=\"3\" textAlign=\"center\" verticalAlign=\"middle\" displaytype=\"normal\" text=\"bind:picTelno\" edittype=\"mask\" maskedittype=\"string\" maskeditformat=\"###-####-####\" maskeditmaskchar=\" \"/><Cell col=\"4\" textAlign=\"center\" verticalAlign=\"middle\" text=\"bind:picMblTelno\" edittype=\"mask\" maskedittype=\"string\" maskeditformat=\"###-####-####\" maskeditmaskchar=\" \" displaytype=\"normal\"/><Cell col=\"5\" textAlign=\"left\" verticalAlign=\"middle\" text=\"bind:picEmlAddr\" edittype=\"text\"/><Cell col=\"6\" textAlign=\"center\" verticalAlign=\"middle\" displaytype=\"normal\" text=\"bind:picFxno\" edittype=\"mask\" maskedittype=\"string\" maskeditformat=\"###-####-####\" maskeditmaskchar=\" \"/><Cell col=\"7\" cssclass=\"CellEnd\" textAlign=\"left\" verticalAlign=\"middle\" text=\"bind:dtyBsnsNm\" edittype=\"text\" editautoselect=\"false\"/></Band></Format></Formats>");
            this.divForm.form.divPicListGrp.form.divGrdPicList.addChild(obj.name, obj);

            obj = new Grid("grdFile1","20.00","60","100%","40",null,null,null,null,null,null,this.divForm.form.divPicListGrp.form);
            obj.set_taborder("5");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"0\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell cssclass=\"expr:!colId ? &quot;&quot; : &quot;CellFile&quot;\" text=\"bind:orgnlFileNm\"/><Cell col=\"1\" cssclass=\"expr:!colId ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"expr:!colId ? &quot;파일찾기&quot; : &quot;삭제&quot;\"/></Band></Format></Formats>");
            this.divForm.form.divPicListGrp.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_01_00","-64","1536","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("15");
            obj.set_text("시설사용료 청구대상 정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_01_00","446","1536","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("17");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_01_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit04","944","1440","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("18");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_01_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div04","0","1558","100%","918",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("19");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staRprsvNm","396.00","70","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("0");
            obj.set_text("대표자 성명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edtRprsvNm","396.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panRprsvNm","396.00","70","172","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRprsvNm\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRprsvNm\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staBrno","396.00","70","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("3");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new MaskEdit("edtBrno","396.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_format("###-##-#####");
            obj.set_value("8413500001");
            obj.set_type("string");
            obj.set_maskchar(" ");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panBrno","396.00","70","172","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staBrno\"/><PanelItem id=\"PanelItem01\" componentid=\"edtBrno\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staCrno","396.00","70","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("6");
            obj.set_text("법입등록번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new MaskEdit("edtCrno","396.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_format("######-#######");
            obj.set_value("1234561234567");
            obj.set_type("string");
            obj.set_maskchar(" ");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panCrno","396.00","70","172","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCrno\"/><PanelItem id=\"PanelItem01\" componentid=\"edtCrno\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staTpbizNm","46.00","46","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("11");
            obj.set_text("업종");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panTpbizNm","46.00","46","172","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("12");
            obj.set_flexgrow("1");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTpbizNm\"/><PanelItem id=\"PanelItem02\" componentid=\"edtTpbizNm\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staBzcndNm","396.00","70","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("13");
            obj.set_text("업태");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panBzcndNm","396.00","70","172","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("14");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staBzcndNm\"/><PanelItem id=\"PanelItem02\" componentid=\"edtBzcndNm\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","1533","1606","100%","70",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("66");
            obj.set_horizontalgap("10");
            obj.set_verticalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnAdd04_00_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00","136.00","100","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("15");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"panRprsvNm\"/><PanelItem id=\"PanelItem05\" componentid=\"panBrno\"/><PanelItem id=\"PanelItem03\" componentid=\"panCrno\"/><PanelItem id=\"PanelItem00\" componentid=\"panTpbizNm\"/><PanelItem id=\"PanelItem02\" componentid=\"panBzcndNm\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edtBzcndNm","862","54","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edtTpbizNm","706","56","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new MaskEdit("edtTelNo","0","-1462","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("25");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_maskchar(" ");
            obj.set_autoskip("true");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new MaskEdit("edtFaxNo","724","156","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("26");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_maskchar(" ");
            obj.set_autoskip("true");
            obj.set_readonly("true");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new MaskEdit("edtMblTelNo","872","154","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("31");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_maskchar(" ");
            obj.set_autoskip("true");
            obj.set_readonly("true");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staTelNo","0","-1508","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("24");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panTelNo","522","-1508","172","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("23");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTelNo\"/><PanelItem id=\"PanelItem01\" componentid=\"edtTelNo\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edtPicNm","0","-1462","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("22");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staPicNm","0","-1508","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("21");
            obj.set_text("담당자명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panPicNm","296","-1508","172","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("20");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPicNm\"/><PanelItem id=\"PanelItem01\" componentid=\"edtPicNm\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edtDtyDeptNm","0","-1462","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staDtyDeptNm","0","-1508","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("18");
            obj.set_text("담당부서");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panDtyDeptNm","20","-1508","172","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("17");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staDtyDeptNm\"/><PanelItem id=\"PanelItem01\" componentid=\"edtDtyDeptNm\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","136.00","100","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("16");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panDtyDeptNm\"/><PanelItem id=\"PanelItem01\" componentid=\"panPicNm\"/><PanelItem id=\"PanelItem02\" componentid=\"panTelNo\"/><PanelItem id=\"PanelItem03\" componentid=\"panFaxNo\"/><PanelItem id=\"PanelItem04\" componentid=\"panMblTelNo\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panFile00_00","24","201","100.00%","165",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("63");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"grdFile2\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staFaxNo","0","-1508","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("28");
            obj.set_text("팩스번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panFaxNo","688","-1508","172","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("27");
            obj.set_flexgrow("1");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staFaxNo\"/><PanelItem id=\"PanelItem02\" componentid=\"edtFaxNo\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staMblTelNo","0","-1508","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("30");
            obj.set_text("휴대전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panMblTelNo","854","-1508","172","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("29");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staMblTelNo\"/><PanelItem id=\"PanelItem02\" componentid=\"edtMblTelNo\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01_00","0","-1508","400","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("65");
            obj.set_text("시설사용료 담당자 개인정보수집 및 이용동의서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00","20","-1498","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("64");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edt00_00_01_00","20","-1411","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("60");
            obj.set_displaynulltext("상세주소");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panAddress00","20","-1461","100%","45",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("57");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divEdtPop00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00","20","-1508","100","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("56");
            obj.set_text("청구지주소");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","-7","356","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("32");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_horizontalgap("20");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_5_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panstaEmlClmAplyYnGrp","20","-1505","300","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("39");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel03\"/><PanelItem id=\"PanelItem01\" componentid=\"panEmlClmAplyYn\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_02_00","-7","356","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("38");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_horizontalgap("20");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panstaEmlClmAplyYnGrp\"/><PanelItem id=\"PanelItem02\" componentid=\"panEmlAddr\"/><PanelItem id=\"PanelItem03\" componentid=\"panEtxivEmlAddr\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_5_00_00","0","343","100.00%","1104",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("33");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_01_03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edtEmlAddr","0","-1463","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("45");
            obj.set_readonly("true");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edtEtxivEmlAddr","0","-1463","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("48");
            obj.set_readonly("true");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staEtxivEmlAddr","713","422","68.72%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("47");
            obj.set_text("이메일(전자세금계산서용)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panEtxivEmlAddr","970","535","300","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("46");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staEtxivEmlAddr\"/><PanelItem id=\"PanelItem01\" componentid=\"edtEtxivEmlAddr\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staEmlAddr","0","-1508","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("44");
            obj.set_text("이메일(업무용)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panEmlAddr","-41","508","300","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("43");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staEmlAddr\"/><PanelItem id=\"PanelItem01\" componentid=\"edtEmlAddr\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","259","-1507","74.41%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("37");
            obj.set_text("※ 월후납 청구 선택시 COFIX 이자가 가산됩니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_TxtRed");
            obj.set_wordWrap("char");
            obj.set_fittocontents("height");
            obj.set_verticalAlign("middle");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Radio("rdo00_00","0","-1507","260","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("36");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_readonly("true");
            var divForm_form_Div04_form_rdo00_00_innerdataset = new nexacro.NormalDataset("divForm_form_Div04_form_rdo00_00_innerdataset", obj);
            divForm_form_Div04_form_rdo00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">연선납</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">월후납</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div04_form_rdo00_00_innerdataset);
            obj.set_text("Select");
            obj.set_value("0");
            obj.set_index("0");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","-1462","100.00%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("35");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"rdo00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new CheckBox("cbxEmlClmAplyYn","170","514","100%","24",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("42");
            obj.set_text("이메일 청구 신청*");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("N");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_01_03_00","0","-1507","100.00%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("34");
            obj.set_text("납부형태");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staEmlClmAplyYn","255","-1505","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("41");
            obj.set_text("※ 이메일 청구할인으로 세금계산서 금액과 청구금액이 상이할 수 있습니다");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_TxtRed");
            obj.set_wordWrap("char");
            obj.set_fittocontents("height");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panEmlClmAplyYn","0","-1460","96.08%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("40");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staEmlClmAplyYn\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","0.00","0","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("49");
            obj.set_text("사업자등록주소");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Div("divEdtPop","780.00","635","170","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("50");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("Edit00","0","0","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form.divEdtPop.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            obj.set_displaynulltext("우편번호 검색");
            this.divForm.form.Div04.form.divEdtPop.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_00","360","637","750","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("51");
            obj.set_readonly("true");
            obj.set_flexgrow("2");
            obj.set_displaynulltext("주소");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panAddress","200","641","100%","45",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("52");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divEdtPop\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edt00_00_01","0.00","46","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("53");
            obj.set_displaynulltext("상세주소");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01","20.00","0","100%","156",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("54");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("10");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexwrap("nowrap");
            obj.set_horizontalgap("20");
            obj.set_spacing("0px 20px 10px 20px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"panAddress\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_00_01\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new CheckBox("cboBplcAddrSmYn","115","758","316","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("62");
            obj.set_text("사업자등록주소와 동일");
            obj.set_cssclass("sta_WF_Label");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_readonly("true");
            obj.set_value("N");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel02","522","754","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("61");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"cboBplcAddrSmYn\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panClmAddr","-10","688","100.00%","162",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("55");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("10");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexwrap("nowrap");
            obj.set_horizontalgap("20");
            obj.set_spacing("0px 20px 10px 20px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"Panel02\"/><PanelItem id=\"PanelItem01\" componentid=\"panAddress00\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_00_01_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_00_00","435","-1508","750","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("59");
            obj.set_readonly("true");
            obj.set_flexgrow("2");
            obj.set_displaynulltext("주소");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Div("divEdtPop00","0","-1508","170","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("58");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("Edit00","0","0","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form.divEdtPop00.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            obj.set_displaynulltext("우편번호 검색");
            this.divForm.form.Div04.form.divEdtPop00.addChild(obj.name, obj);

            obj = new Button("btnAdd04_00_00_00_00","64.00","0","190","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("67");
            obj.set_text("청구대상 정보 다운로드(엑셀)");
            obj.set_cssclass("btn_WF_FileDw02");
            obj.set_fittocontents("width");
            obj.set_enable("true");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel03","175","520","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("68");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"cbxEmlClmAplyYn\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Grid("grdFile2","20.00","60","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("69");
            obj.set_binddataset("dsFile2");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"0\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell cssclass=\"expr:!colId ? &quot;&quot; : &quot;CellFile&quot;\" text=\"bind:orgnlFileNm\"/><Cell col=\"1\" cssclass=\"expr:!colId ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"expr:!colId ? &quot;파일찾기&quot; : &quot;삭제&quot;\"/></Band></Format></Formats>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_02_00","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("20");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00_02_00","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_02_00","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("22");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_02_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit05","1630","674","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("23");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staSubTitle02_00_02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_02_02_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div05","0","30","100%","310",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("24");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panFile00_00","0","42","100.00%","301",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("0");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grdFile3\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Grid("grdFile3","-551","421","100%","236",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsFile3");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"596\"/><Column size=\"0\" band=\"right\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"증빙자료명\"/><Cell col=\"1\" text=\"첨부파일명\"/><Cell col=\"2\"/></Band><Band id=\"body\"><Cell text=\"bind:cdNm\"/><Cell col=\"1\" text=\"bind:orgnlFileNm\" cssclass=\"CellLink\"/><Cell col=\"2\" cssclass=\"expr:!colId ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\" text=\"expr:!colId ? &quot;파일찾기&quot; : &quot;삭제&quot;\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band></Format></Formats>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_02_00_00","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("25");
            obj.set_text("체크리스트");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00_02_00_00","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("26");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_02_00_00","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("27");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_02_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit06","1630","674","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("28");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staSubTitle02_00_02_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_02_02_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divCheckList","0","30","100%","158",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("29");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("sta00","20","10","650","53",null,null,null,null,null,null,this.divForm.form.divCheckList.form);
            obj.set_taborder("0");
            obj.set_text("임차요청사항은 임대배정 업무부서 담당자와 사전 협의 후 정확히 입력하였습니까?\r\n임대배정 업무부서 : 운영기획팀, 교통안전팀, 물류운영팀");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_textAlign("left");
            this.divForm.form.divCheckList.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","50","100.00%","74",null,null,null,null,null,null,this.divForm.form.divCheckList.form);
            obj.set_taborder("1");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj.set_horizontalgap("20");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"sta00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/></Contents>");
            this.divForm.form.divCheckList.addChild(obj.name, obj);

            obj = new Static("sta00_00","20","-3395","650","53",null,null,null,null,null,null,this.divForm.form.divCheckList.form);
            obj.set_taborder("7");
            obj.set_text("임대료 및 관리비/유틸리티 유·무상 여부는 근거 규정을 확인하였습니까?");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_textAlign("left");
            this.divForm.form.divCheckList.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","0","50","100.00%","74",null,null,null,null,null,null,this.divForm.form.divCheckList.form);
            obj.set_taborder("6");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj.set_horizontalgap("20");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00\"/></Contents>");
            this.divForm.form.divCheckList.addChild(obj.name, obj);

            obj = new Panel("panCheckIdfrNm2","0","-3405","100%","40",null,null,null,null,null,null,this.divForm.form.divCheckList.form);
            obj.set_taborder("9");
            obj.set_type("horizontal");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCheckIdfrNm2\"/><PanelItem id=\"PanelItem01\" componentid=\"edtCheckIdfrNm2\"/></Contents>");
            this.divForm.form.divCheckList.addChild(obj.name, obj);

            obj = new Static("staCheckIdfrNm2","0","-3405","100","40",null,null,null,null,null,null,this.divForm.form.divCheckList.form);
            obj.set_taborder("10");
            obj.set_text("확인자");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divForm.form.divCheckList.addChild(obj.name, obj);

            obj = new Edit("edtCheckIdfrNm2","70","-3405","100%","40",null,null,null,null,"40",null,this.divForm.form.divCheckList.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_displaynulltext(" 확인자 성명");
            obj.set_flexgrow("1");
            obj.set_text("");
            this.divForm.form.divCheckList.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","690","-3395","250","40",null,null,null,null,null,null,this.divForm.form.divCheckList.form);
            obj.set_taborder("8");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panCheckIdfrNm2\"/></Contents>");
            this.divForm.form.divCheckList.addChild(obj.name, obj);

            obj = new Panel("Panel00","964","20","250","40",null,null,null,null,null,null,this.divForm.form.divCheckList.form);
            obj.set_taborder("2");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panCheckIdfrNm1\"/></Contents>");
            this.divForm.form.divCheckList.addChild(obj.name, obj);

            obj = new Static("staCheckIdfrNm1","396.00","70","100","40",null,null,null,null,null,null,this.divForm.form.divCheckList.form);
            obj.set_taborder("3");
            obj.set_text("확인자");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divForm.form.divCheckList.addChild(obj.name, obj);

            obj = new Edit("edtCheckIdfrNm1","396.00","114","100%","40",null,null,null,null,"40",null,this.divForm.form.divCheckList.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_displaynulltext(" 확인자 성명");
            obj.set_flexgrow("1");
            obj.set_text("");
            this.divForm.form.divCheckList.addChild(obj.name, obj);

            obj = new Panel("panCheckIdfrNm1","396.00","70","100%","40",null,null,null,null,null,null,this.divForm.form.divCheckList.form);
            obj.set_taborder("5");
            obj.set_type("horizontal");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staCheckIdfrNm1\"/><PanelItem id=\"PanelItem00\" componentid=\"edtCheckIdfrNm1\"/></Contents>");
            this.divForm.form.divCheckList.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_02_00_00_00","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("30");
            obj.set_text("입주/퇴거 안내");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btn00_00_02_00_00_00","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("32");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_02_00_00_00","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("34");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_02_00_00_00_0\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_00_02_00_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit07","1630","674","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("36");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_02_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_02_00_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divMvnEvct","0","30","100%","158",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("39");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg .div_WF_SchBg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("sta00","20","10","100%","47",null,null,null,null,null,null,this.divForm.form.divMvnEvct.form);
            obj.set_taborder("0");
            obj.set_text("(입주/퇴거) 입주 시 입주절차, 퇴거 시 퇴거절차(원상복구 등) 필수 진행\r\n   - 입주자지원센터 : 032-741-3301(T1), 032-741-3535(T2)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_textAlign("left");
            this.divForm.form.divMvnEvct.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","50","100.00%","130",null,null,null,null,null,null,this.divForm.form.divMvnEvct.form);
            obj.set_taborder("1");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("div_WF_InfoGuide");
            obj.set_verticalgap("0");
            obj.set_horizontalgap("20");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"sta00\"/><PanelItem id=\"PanelItem01\" componentid=\"sta00_00\"/></Contents>");
            this.divForm.form.divMvnEvct.addChild(obj.name, obj);

            obj = new Static("sta00_00","12","40","100%","50",null,null,null,null,null,null,this.divForm.form.divMvnEvct.form);
            obj.set_taborder("2");
            obj.set_text("(계약/임대료) 배정 후 계약체결 및 임대료(보증금) 납부(무상 제외)\r\n   - 재무팀 : 032-741-2323");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_textAlign("left");
            this.divForm.form.divMvnEvct.addChild(obj.name, obj);

            obj = new Static("staSubTitleRvwOpnn","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("31");
            obj.set_text("임차의향서 검토의견");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00_02_00_00_00","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("33");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panRvwOpnn","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("35");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn00_00_02_00_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit08","1630","674","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("37");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitleRvwOpnn\"/><PanelItem id=\"PanelItem01\" componentid=\"panRvwOpnn\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divRvwOpnn","0","30","100%","158",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("38");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg .div_WF_SchBg");
            obj.set_fittocontents("height");
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
            obj.set_readonly("false");
            obj.set_displaynulltext("검토의견 입력 – 반려(보완요청)의 경우 입력 필수");
            obj.set_visible("true");
            this.divForm.form.divRvwOpnn.addChild(obj.name, obj);

            obj = new Div("divQuick",null,"62","296","245","62",null,null,null,null,null,this);
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
            obj.set_text("임차요청사항");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn03","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("2");
            obj.set_text("임차업무 담당자 연락처");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn04","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("3");
            obj.set_text("시설사용료 청구대상 정보");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn05","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("4");
            obj.set_text("첨부파일");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn06","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("5");
            obj.set_text("체크리스트");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn07","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("6");
            obj.set_text("입주/퇴거 안내");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn08","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("7");
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

            obj = new Button("btnRcpt","btnCancel:10","20","84","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("1");
            obj.set_text("접수");
            obj.set_cssclass("btn_WF_Yes");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btnRjct","10","20","84","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("2");
            obj.set_text("반려");
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
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divRcptNo.form
            obj = new Layout("default","",0,0,this.divForm.form.divRcptNo.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staRcptNo.set_taborder("0");
                p.staRcptNo.set_text("접수번호");
                p.staRcptNo.set_cssclass("sta_WF_Label");
                p.staRcptNo.move("0","0","100%","46",null,null);

                p.edtRcptNo.set_taborder("1");
                p.edtRcptNo.set_readonly("true");
                p.edtRcptNo.move("0","46","100%","40",null,null);

                p.panRcptNo.set_taborder("2");
                p.panRcptNo.set_flexgrow("1");
                p.panRcptNo.set_type("vertical");
                p.panRcptNo.move("20","0","300","86",null,null);

                p.staSttsNm.set_taborder("3");
                p.staSttsNm.set_text("상태");
                p.staSttsNm.set_cssclass("sta_WF_Label");
                p.staSttsNm.move("10","10","100%","46",null,null);

                p.edtSttsNm.set_taborder("4");
                p.edtSttsNm.set_readonly("true");
                p.edtSttsNm.set_value("임차의향서 제출");
                p.edtSttsNm.move("10","56","100%","40",null,null);

                p.panSttsNm.set_taborder("5");
                p.panSttsNm.set_type("vertical");
                p.panSttsNm.set_flexgrow("1");
                p.panSttsNm.move("720","0","300","86",null,null);

                p.Panel01.set_taborder("7");
                p.Panel01.move("1006","28","300","1",null,null);

                p.panRcptNoGrp.set_taborder("6");
                p.panRcptNoGrp.set_flexcrossaxiswrapalign("start");
                p.panRcptNoGrp.set_flexwrap("wrap");
                p.panRcptNoGrp.set_fittocontents("height");
                p.panRcptNoGrp.set_verticalgap("0");
                p.panRcptNoGrp.set_spacing("0px 20px 10px 20px");
                p.panRcptNoGrp.set_cssclass("pal_WF_DtlBg");
                p.panRcptNoGrp.set_type("horizontal");
                p.panRcptNoGrp.set_horizontalgap("20");
                p.panRcptNoGrp.move("0","0","100.00%","96",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_flexwrap("nowrap");
            this.divForm.form.divRcptNo.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divRcptNo.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divRcptNo.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_flexwrap("nowrap");
            this.divForm.form.divRcptNo.form.addLayout(obj.name, obj);
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
                p.staRtfeYn.set_cssclass("sta_WF_Label");
                p.staRtfeYn.move("396.00","70","100%","46",null,null);

                p.panRtfeYn.set_taborder("7");
                p.panRtfeYn.set_type("vertical");
                p.panRtfeYn.set_flexgrow("1");
                p.panRtfeYn.move("396.00","70","90","86",null,null);

                p.staMncoYn.set_taborder("8");
                p.staMncoYn.set_text("관리비");
                p.staMncoYn.set_cssclass("sta_WF_Label");
                p.staMncoYn.move("46.00","46","100%","46",null,null);

                p.panMncoYn.set_taborder("9");
                p.panMncoYn.set_flexgrow("1");
                p.panMncoYn.set_type("vertical");
                p.panMncoYn.move("46.00","46","90","86",null,null);

                p.staUtltYn.set_taborder("10");
                p.staUtltYn.set_text("유틸리티");
                p.staUtltYn.set_cssclass("sta_WF_Label");
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

                p.edtMncoYn.set_taborder("23");
                p.edtMncoYn.set_value("");
                p.edtMncoYn.getSetter("index").set("-1");
                p.edtMncoYn.set_displaynulltext("선택");
                p.edtMncoYn.getSetter("innerdataset").set("dsCboMncoYnCd");
                p.edtMncoYn.getSetter("datacolumn").set("cdNm");
                p.edtMncoYn.getSetter("codecolumn").set("cdId");
                p.edtMncoYn.set_readonly("true");
                p.edtMncoYn.move("698","55","100%","40",null,null);

                p.edtUtltYn.set_taborder("22");
                p.edtUtltYn.set_displaynulltext("선택");
                p.edtUtltYn.set_value("");
                p.edtUtltYn.getSetter("index").set("-1");
                p.edtUtltYn.getSetter("innerdataset").set("dsCboUtltYnCd");
                p.edtUtltYn.getSetter("datacolumn").set("cdNm");
                p.edtUtltYn.getSetter("codecolumn").set("cdId");
                p.edtUtltYn.set_readonly("true");
                p.edtUtltYn.move("906","53","100%","40",null,null);

                p.edtRtfeYn.set_taborder("21");
                p.edtRtfeYn.set_value("");
                p.edtRtfeYn.getSetter("index").set("-1");
                p.edtRtfeYn.getSetter("innerdataset").set("dsCboRtfeYnCd");
                p.edtRtfeYn.getSetter("datacolumn").set("cdNm");
                p.edtRtfeYn.getSetter("codecolumn").set("cdId");
                p.edtRtfeYn.set_displaynulltext("선택");
                p.edtRtfeYn.set_readonly("true");
                p.edtRtfeYn.move("590","55","100%","40",null,null);

                p.staRltnMttr.set_taborder("13");
                p.staRltnMttr.set_text("관련사항");
                p.staRltnMttr.set_cssclass("sta_WF_Label");
                p.staRltnMttr.move("396.00","70","100%","46",null,null);

                p.txtRltnMttr.set_taborder("14");
                p.txtRltnMttr.set_readonly("true");
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
                p.txtNoteMttr.set_readonly("true");
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
            //-- Default Layout : this.divForm.form.divSpceListGrp.form.divGrdSpceList.form
            obj = new Layout("default","",0,0,this.divForm.form.divSpceListGrp.form.divGrdSpceList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdSpceList.set_taborder("0");
                p.grdSpceList.set_binddataset("dsSpceList");
                p.grdSpceList.set_autofittype("none");
                p.grdSpceList.set_readonly("true");
                p.grdSpceList.move("0","0","100.00%","236",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divSpceListGrp.form.divGrdSpceList.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divSpceListGrp.form.divGrdSpceList.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divSpceListGrp.form.divGrdSpceList.form,
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
            this.divForm.form.divSpceListGrp.form.divGrdSpceList.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divSpceListGrp.form.divGrdSpceList.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divSpceListGrp.form.divGrdSpceList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divSpceListGrp.form.divGrdSpceList.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divSpceListGrp.form.divGrdSpceList.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divSpceListGrp.form.divGrdSpceList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divSpceListGrp.form.divGrdSpceList.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divSpceListGrp.form
            obj = new Layout("default","",0,0,this.divForm.form.divSpceListGrp.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panSpceList.set_taborder("0");
                p.panSpceList.set_horizontalgap("20");
                p.panSpceList.set_flexcrossaxiswrapalign("start");
                p.panSpceList.set_flexwrap("wrap");
                p.panSpceList.set_fittocontents("height");
                p.panSpceList.set_verticalgap("0");
                p.panSpceList.set_spacing("10px 20px 10px 20px");
                p.panSpceList.set_cssclass("pal_WF_DtlBg");
                p.panSpceList.set_type("horizontal");
                p.panSpceList.move("0","40","100.00%","301",null,null);

                p.divGrdSpceList.set_taborder("1");
                p.divGrdSpceList.set_text("Div01");
                p.divGrdSpceList.set_fittocontents("height");
                p.divGrdSpceList.set_formscrollbartype("none none");
                p.divGrdSpceList.set_formscrolltype("none");
                p.divGrdSpceList.move("0","0","100%","236",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.divSpceListGrp.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divSpceListGrp.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divSpceListGrp.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.divSpceListGrp.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divPicListGrp.form.divGrdPicList.form
            obj = new Layout("default","",0,0,this.divForm.form.divPicListGrp.form.divGrdPicList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdPicList.set_taborder("0");
                p.grdPicList.set_binddataset("dsPicList");
                p.grdPicList.set_autofittype("none");
                p.grdPicList.move("0","0","100%","236",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divPicListGrp.form.divGrdPicList.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divPicListGrp.form.divGrdPicList.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divPicListGrp.form.divGrdPicList.form,
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
            this.divForm.form.divPicListGrp.form.divGrdPicList.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divPicListGrp.form.divGrdPicList.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divPicListGrp.form.divGrdPicList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divPicListGrp.form.divGrdPicList.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divPicListGrp.form.divGrdPicList.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divPicListGrp.form.divGrdPicList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divPicListGrp.form.divGrdPicList.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divPicListGrp.form
            obj = new Layout("default","",0,0,this.divForm.form.divPicListGrp.form,
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
                p.panFile00_00.move("0","313","100.00%","156",null,null);

                p.staLabel00_02_01_00.set_taborder("4");
                p.staLabel00_02_01_00.set_text("임차업무 담당자 개인정보수집 및 이용동의서");
                p.staLabel00_02_01_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_01_00.set_fittocontents("width");
                p.staLabel00_02_01_00.move("0","-931","400","46",null,null);

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
            this.divForm.form.divPicListGrp.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divPicListGrp.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divPicListGrp.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.divPicListGrp.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div04.form.divEdtPop.form
            obj = new Layout("default","",0,0,this.divForm.form.Div04.form.divEdtPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Edit00.set_taborder("0");
                p.Edit00.set_cssclass("edt_WF_EdtSch");
                p.Edit00.set_readonly("true");
                p.Edit00.set_displaynulltext("우편번호 검색");
                p.Edit00.move("0","0","100%","40",null,null);
            	}
            );
            this.divForm.form.Div04.form.divEdtPop.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div04.form.divEdtPop.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div04.form.divEdtPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.Div04.form.divEdtPop.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div04.form.divEdtPop00.form
            obj = new Layout("default","",0,0,this.divForm.form.Div04.form.divEdtPop00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Edit00.set_taborder("0");
                p.Edit00.set_cssclass("edt_WF_EdtSch");
                p.Edit00.set_readonly("true");
                p.Edit00.set_displaynulltext("우편번호 검색");
                p.Edit00.move("0","0","100%","40",null,null);
            	}
            );
            this.divForm.form.Div04.form.divEdtPop00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div04.form.divEdtPop00.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div04.form.divEdtPop00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.Div04.form.divEdtPop00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div04.form
            obj = new Layout("default","",0,0,this.divForm.form.Div04.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staRprsvNm.set_taborder("0");
                p.staRprsvNm.set_text("대표자 성명");
                p.staRprsvNm.set_cssclass("sta_WF_Label");
                p.staRprsvNm.move("396.00","70","100%","46",null,null);

                p.edtRprsvNm.set_taborder("1");
                p.edtRprsvNm.set_readonly("true");
                p.edtRprsvNm.move("396.00","114","100%","40",null,null);

                p.panRprsvNm.set_taborder("2");
                p.panRprsvNm.set_type("vertical");
                p.panRprsvNm.set_flexgrow("1");
                p.panRprsvNm.move("396.00","70","172","86",null,null);

                p.staBrno.set_taborder("3");
                p.staBrno.set_text("사업자등록번호");
                p.staBrno.set_cssclass("sta_WF_Label");
                p.staBrno.move("396.00","70","100%","46",null,null);

                p.edtBrno.set_taborder("4");
                p.edtBrno.set_readonly("true");
                p.edtBrno.set_format("###-##-#####");
                p.edtBrno.set_value("8413500001");
                p.edtBrno.set_type("string");
                p.edtBrno.set_maskchar(" ");
                p.edtBrno.move("396.00","114","100%","40",null,null);

                p.panBrno.set_taborder("5");
                p.panBrno.set_type("vertical");
                p.panBrno.set_flexgrow("1");
                p.panBrno.move("396.00","70","172","86",null,null);

                p.staCrno.set_taborder("6");
                p.staCrno.set_text("법입등록번호");
                p.staCrno.set_cssclass("sta_WF_Label");
                p.staCrno.move("396.00","70","100%","46",null,null);

                p.edtCrno.set_taborder("7");
                p.edtCrno.set_readonly("true");
                p.edtCrno.set_format("######-#######");
                p.edtCrno.set_value("1234561234567");
                p.edtCrno.set_type("string");
                p.edtCrno.set_maskchar(" ");
                p.edtCrno.move("396.00","114","100%","40",null,null);

                p.panCrno.set_taborder("10");
                p.panCrno.set_type("vertical");
                p.panCrno.set_flexgrow("1");
                p.panCrno.move("396.00","70","172","86",null,null);

                p.staTpbizNm.set_taborder("11");
                p.staTpbizNm.set_text("업종");
                p.staTpbizNm.set_cssclass("sta_WF_Label");
                p.staTpbizNm.move("46.00","46","100%","46",null,null);

                p.panTpbizNm.set_taborder("12");
                p.panTpbizNm.set_flexgrow("1");
                p.panTpbizNm.set_type("vertical");
                p.panTpbizNm.move("46.00","46","172","86",null,null);

                p.staBzcndNm.set_taborder("13");
                p.staBzcndNm.set_text("업태");
                p.staBzcndNm.set_cssclass("sta_WF_Label");
                p.staBzcndNm.move("396.00","70","100%","46",null,null);

                p.panBzcndNm.set_taborder("14");
                p.panBzcndNm.set_type("vertical");
                p.panBzcndNm.set_flexgrow("1");
                p.panBzcndNm.move("396.00","70","172","86",null,null);

                p.Panel00_01.set_taborder("66");
                p.Panel00_01.set_horizontalgap("10");
                p.Panel00_01.set_verticalgap("10");
                p.Panel00_01.set_flexcrossaxisalign("center");
                p.Panel00_01.set_flexcrossaxiswrapalign("start");
                p.Panel00_01.set_flexmainaxisalign("end");
                p.Panel00_01.move("1533","1606","100%","70",null,null);

                p.Panel00.set_taborder("15");
                p.Panel00.set_horizontalgap("20");
                p.Panel00.set_flexcrossaxiswrapalign("start");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_verticalgap("0");
                p.Panel00.set_spacing("0px 20px 10px 20px");
                p.Panel00.set_cssclass("pal_WF_DtlBg");
                p.Panel00.set_type("horizontal");
                p.Panel00.move("136.00","100","100.00%","96",null,null);

                p.edtBzcndNm.set_taborder("9");
                p.edtBzcndNm.set_readonly("true");
                p.edtBzcndNm.move("862","54","100%","40",null,null);

                p.edtTpbizNm.set_taborder("8");
                p.edtTpbizNm.set_readonly("true");
                p.edtTpbizNm.move("706","56","100%","40",null,null);

                p.edtTelNo.set_taborder("25");
                p.edtTelNo.set_readonly("true");
                p.edtTelNo.set_textAlign("left");
                p.edtTelNo.set_type("string");
                p.edtTelNo.set_maskchar(" ");
                p.edtTelNo.set_autoskip("true");
                p.edtTelNo.move("0","-1462","100%","40",null,null);

                p.edtFaxNo.set_taborder("26");
                p.edtFaxNo.set_textAlign("left");
                p.edtFaxNo.set_type("string");
                p.edtFaxNo.set_maskchar(" ");
                p.edtFaxNo.set_autoskip("true");
                p.edtFaxNo.set_readonly("true");
                p.edtFaxNo.move("724","156","100%","40",null,null);

                p.edtMblTelNo.set_taborder("31");
                p.edtMblTelNo.set_textAlign("left");
                p.edtMblTelNo.set_type("string");
                p.edtMblTelNo.set_maskchar(" ");
                p.edtMblTelNo.set_autoskip("true");
                p.edtMblTelNo.set_readonly("true");
                p.edtMblTelNo.move("872","154","100%","40",null,null);

                p.staTelNo.set_taborder("24");
                p.staTelNo.set_text("전화번호");
                p.staTelNo.set_cssclass("sta_WF_Label");
                p.staTelNo.move("0","-1508","100%","46",null,null);

                p.panTelNo.set_taborder("23");
                p.panTelNo.set_type("vertical");
                p.panTelNo.set_flexgrow("1");
                p.panTelNo.move("522","-1508","172","86",null,null);

                p.edtPicNm.set_taborder("22");
                p.edtPicNm.set_readonly("true");
                p.edtPicNm.move("0","-1462","100%","40",null,null);

                p.staPicNm.set_taborder("21");
                p.staPicNm.set_text("담당자명");
                p.staPicNm.set_cssclass("sta_WF_Label");
                p.staPicNm.move("0","-1508","100%","46",null,null);

                p.panPicNm.set_taborder("20");
                p.panPicNm.set_type("vertical");
                p.panPicNm.set_flexgrow("1");
                p.panPicNm.move("296","-1508","172","86",null,null);

                p.edtDtyDeptNm.set_taborder("19");
                p.edtDtyDeptNm.set_readonly("true");
                p.edtDtyDeptNm.move("0","-1462","100%","40",null,null);

                p.staDtyDeptNm.set_taborder("18");
                p.staDtyDeptNm.set_text("담당부서");
                p.staDtyDeptNm.set_cssclass("sta_WF_Label");
                p.staDtyDeptNm.move("0","-1508","100%","46",null,null);

                p.panDtyDeptNm.set_taborder("17");
                p.panDtyDeptNm.set_type("vertical");
                p.panDtyDeptNm.set_flexgrow("1");
                p.panDtyDeptNm.move("20","-1508","172","86",null,null);

                p.Panel00_00.set_taborder("16");
                p.Panel00_00.set_horizontalgap("20");
                p.Panel00_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00.set_flexwrap("wrap");
                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.set_verticalgap("0");
                p.Panel00_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00.set_type("horizontal");
                p.Panel00_00.move("136.00","100","100.00%","97",null,null);

                p.panFile00_00.set_taborder("63");
                p.panFile00_00.set_fittocontents("height");
                p.panFile00_00.set_spacing("10px 20px 10px 20px");
                p.panFile00_00.set_flexwrap("wrap");
                p.panFile00_00.set_cssclass("pal_WF_DtlBg");
                p.panFile00_00.set_verticalgap("4");
                p.panFile00_00.move("24","201","100.00%","165",null,null);

                p.staFaxNo.set_taborder("28");
                p.staFaxNo.set_text("팩스번호");
                p.staFaxNo.set_cssclass("sta_WF_Label");
                p.staFaxNo.move("0","-1508","100%","46",null,null);

                p.panFaxNo.set_taborder("27");
                p.panFaxNo.set_flexgrow("1");
                p.panFaxNo.set_type("vertical");
                p.panFaxNo.move("688","-1508","172","86",null,null);

                p.staMblTelNo.set_taborder("30");
                p.staMblTelNo.set_text("휴대전화번호");
                p.staMblTelNo.set_cssclass("sta_WF_Label");
                p.staMblTelNo.move("0","-1508","100%","46",null,null);

                p.panMblTelNo.set_taborder("29");
                p.panMblTelNo.set_type("vertical");
                p.panMblTelNo.set_flexgrow("1");
                p.panMblTelNo.move("854","-1508","172","86",null,null);

                p.staLabel00_02_01_00.set_taborder("65");
                p.staLabel00_02_01_00.set_text("시설사용료 담당자 개인정보수집 및 이용동의서");
                p.staLabel00_02_01_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_01_00.set_fittocontents("width");
                p.staLabel00_02_01_00.move("0","-1508","400","46",null,null);

                p.panTitle00_00.set_taborder("64");
                p.panTitle00_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00.set_flexwrap("wrap");
                p.panTitle00_00.set_fittocontents("height");
                p.panTitle00_00.move("20","-1498","100%","46",null,null);

                p.edt00_00_01_00.set_taborder("60");
                p.edt00_00_01_00.set_displaynulltext("상세주소");
                p.edt00_00_01_00.set_readonly("true");
                p.edt00_00_01_00.move("20","-1411","100%","40",null,null);

                p.panAddress00.set_taborder("57");
                p.panAddress00.set_horizontalgap("10");
                p.panAddress00.move("20","-1461","100%","45",null,null);

                p.staLabel00_00_00.set_taborder("56");
                p.staLabel00_00_00.set_text("청구지주소");
                p.staLabel00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00_00.move("20","-1508","100","46",null,null);

                p.Panel00_02.set_taborder("32");
                p.Panel00_02.set_spacing("0px 20px 10px 20px");
                p.Panel00_02.set_horizontalgap("20");
                p.Panel00_02.set_flexwrap("wrap");
                p.Panel00_02.set_cssclass("pal_WF_DtlBg");
                p.Panel00_02.move("-7","356","100.00%","96",null,null);

                p.panstaEmlClmAplyYnGrp.set_taborder("39");
                p.panstaEmlClmAplyYnGrp.set_type("vertical");
                p.panstaEmlClmAplyYnGrp.set_flexgrow("1");
                p.panstaEmlClmAplyYnGrp.set_fittocontents("height");
                p.panstaEmlClmAplyYnGrp.move("20","-1505","300","86",null,null);

                p.Panel00_02_00.set_taborder("38");
                p.Panel00_02_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_02_00.set_horizontalgap("20");
                p.Panel00_02_00.set_flexwrap("wrap");
                p.Panel00_02_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_02_00.move("-7","356","100.00%","96",null,null);

                p.Panel00_5_00_00.set_taborder("33");
                p.Panel00_5_00_00.set_type("vertical");
                p.Panel00_5_00_00.set_flexgrow("1");
                p.Panel00_5_00_00.move("0","343","100.00%","1104",null,null);

                p.edtEmlAddr.set_taborder("45");
                p.edtEmlAddr.set_readonly("true");
                p.edtEmlAddr.move("0","-1463","100%","40",null,null);

                p.edtEtxivEmlAddr.set_taborder("48");
                p.edtEtxivEmlAddr.set_readonly("true");
                p.edtEtxivEmlAddr.move("0","-1463","100%","40",null,null);

                p.staEtxivEmlAddr.set_taborder("47");
                p.staEtxivEmlAddr.set_text("이메일(전자세금계산서용)");
                p.staEtxivEmlAddr.set_cssclass("sta_WF_Label");
                p.staEtxivEmlAddr.move("713","422","68.72%","46",null,null);

                p.panEtxivEmlAddr.set_taborder("46");
                p.panEtxivEmlAddr.set_type("vertical");
                p.panEtxivEmlAddr.set_flexgrow("1");
                p.panEtxivEmlAddr.set_fittocontents("height");
                p.panEtxivEmlAddr.move("970","535","300","86",null,null);

                p.staEmlAddr.set_taborder("44");
                p.staEmlAddr.set_text("이메일(업무용)");
                p.staEmlAddr.set_cssclass("sta_WF_Label");
                p.staEmlAddr.move("0","-1508","100%","46",null,null);

                p.panEmlAddr.set_taborder("43");
                p.panEmlAddr.set_type("vertical");
                p.panEmlAddr.set_flexgrow("1");
                p.panEmlAddr.set_fittocontents("height");
                p.panEmlAddr.move("-41","508","300","86",null,null);

                p.Static00_00_00.set_taborder("37");
                p.Static00_00_00.set_text("※ 월후납 청구 선택시 COFIX 이자가 가산됩니다.");
                p.Static00_00_00.set_usedecorate("true");
                p.Static00_00_00.set_cssclass("sta_WF_TxtRed");
                p.Static00_00_00.set_wordWrap("char");
                p.Static00_00_00.set_fittocontents("height");
                p.Static00_00_00.set_verticalAlign("middle");
                p.Static00_00_00.move("259","-1507","74.41%","40",null,null);

                p.rdo00_00.set_taborder("36");
                p.rdo00_00.set_innerdataset(divForm_form_Div04_form_rdo00_00_innerdataset);
                p.rdo00_00.set_codecolumn("codecolumn");
                p.rdo00_00.set_datacolumn("datacolumn");
                p.rdo00_00.set_direction("vertical");
                p.rdo00_00.set_fittocontents("width");
                p.rdo00_00.set_readonly("true");
                p.rdo00_00.set_value("0");
                p.rdo00_00.set_index("0");
                p.rdo00_00.move("0","-1507","260","40",null,null);

                p.Panel01.set_taborder("35");
                p.Panel01.move("0","-1462","100.00%","40",null,null);

                p.cbxEmlClmAplyYn.set_taborder("42");
                p.cbxEmlClmAplyYn.set_text("이메일 청구 신청*");
                p.cbxEmlClmAplyYn.set_truevalue("Y");
                p.cbxEmlClmAplyYn.set_falsevalue("N");
                p.cbxEmlClmAplyYn.set_value("N");
                p.cbxEmlClmAplyYn.move("170","514","100%","24",null,null);

                p.staLabel01_00_01_03_00.set_taborder("34");
                p.staLabel01_00_01_03_00.set_text("납부형태");
                p.staLabel01_00_01_03_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_01_03_00.move("0","-1507","100.00%","46",null,null);

                p.staEmlClmAplyYn.set_taborder("41");
                p.staEmlClmAplyYn.set_text("※ 이메일 청구할인으로 세금계산서 금액과 청구금액이 상이할 수 있습니다");
                p.staEmlClmAplyYn.set_usedecorate("true");
                p.staEmlClmAplyYn.set_cssclass("sta_WF_TxtRed");
                p.staEmlClmAplyYn.set_wordWrap("char");
                p.staEmlClmAplyYn.set_fittocontents("height");
                p.staEmlClmAplyYn.move("255","-1505","100%","40",null,null);

                p.panEmlClmAplyYn.set_taborder("40");
                p.panEmlClmAplyYn.move("0","-1460","96.08%","40",null,null);

                p.staLabel00_00.set_taborder("49");
                p.staLabel00_00.set_text("사업자등록주소");
                p.staLabel00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00.move("0.00","0","100%","46",null,null);

                p.divEdtPop.set_taborder("50");
                p.divEdtPop.set_text("Div00");
                p.divEdtPop.set_formscrollbartype("none none");
                p.divEdtPop.set_formscrolltype("none");
                p.divEdtPop.set_flexgrow("1");
                p.divEdtPop.move("780.00","635","170","40",null,null);

                p.edt00_00_00_00.set_taborder("51");
                p.edt00_00_00_00.set_readonly("true");
                p.edt00_00_00_00.set_flexgrow("2");
                p.edt00_00_00_00.set_displaynulltext("주소");
                p.edt00_00_00_00.move("360","637","750","40",null,null);

                p.panAddress.set_taborder("52");
                p.panAddress.set_horizontalgap("10");
                p.panAddress.move("200","641","100%","45",null,null);

                p.edt00_00_01.set_taborder("53");
                p.edt00_00_01.set_displaynulltext("상세주소");
                p.edt00_00_01.set_readonly("true");
                p.edt00_00_01.move("0.00","46","100%","40",null,null);

                p.Panel00_00_01.set_taborder("54");
                p.Panel00_00_01.set_type("vertical");
                p.Panel00_00_01.set_flexgrow("1");
                p.Panel00_00_01.set_fittocontents("height");
                p.Panel00_00_01.set_verticalgap("10");
                p.Panel00_00_01.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_01.set_flexwrap("nowrap");
                p.Panel00_00_01.set_horizontalgap("20");
                p.Panel00_00_01.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_01.set_minwidth("");
                p.Panel00_00_01.move("20.00","0","100%","156",null,null);

                p.cboBplcAddrSmYn.set_taborder("62");
                p.cboBplcAddrSmYn.set_text("사업자등록주소와 동일");
                p.cboBplcAddrSmYn.set_cssclass("sta_WF_Label");
                p.cboBplcAddrSmYn.set_truevalue("Y");
                p.cboBplcAddrSmYn.set_falsevalue("N");
                p.cboBplcAddrSmYn.set_readonly("true");
                p.cboBplcAddrSmYn.set_value("N");
                p.cboBplcAddrSmYn.move("115","758","316","46",null,null);

                p.Panel02.set_taborder("61");
                p.Panel02.move("522","754","100%","46",null,null);

                p.panClmAddr.set_taborder("55");
                p.panClmAddr.set_type("vertical");
                p.panClmAddr.set_flexgrow("1");
                p.panClmAddr.set_fittocontents("height");
                p.panClmAddr.set_verticalgap("10");
                p.panClmAddr.set_cssclass("pal_WF_DtlBg");
                p.panClmAddr.set_flexwrap("nowrap");
                p.panClmAddr.set_horizontalgap("20");
                p.panClmAddr.set_spacing("0px 20px 10px 20px");
                p.panClmAddr.set_minwidth("");
                p.panClmAddr.move("-10","688","100.00%","162",null,null);

                p.edt00_00_00_00_00.set_taborder("59");
                p.edt00_00_00_00_00.set_readonly("true");
                p.edt00_00_00_00_00.set_flexgrow("2");
                p.edt00_00_00_00_00.set_displaynulltext("주소");
                p.edt00_00_00_00_00.move("435","-1508","750","40",null,null);

                p.divEdtPop00.set_taborder("58");
                p.divEdtPop00.set_text("Div00");
                p.divEdtPop00.set_formscrollbartype("none none");
                p.divEdtPop00.set_formscrolltype("none");
                p.divEdtPop00.set_flexgrow("1");
                p.divEdtPop00.move("0","-1508","170","40",null,null);

                p.btnAdd04_00_00_00_00.set_taborder("67");
                p.btnAdd04_00_00_00_00.set_text("청구대상 정보 다운로드(엑셀)");
                p.btnAdd04_00_00_00_00.set_cssclass("btn_WF_FileDw02");
                p.btnAdd04_00_00_00_00.set_fittocontents("width");
                p.btnAdd04_00_00_00_00.set_enable("true");
                p.btnAdd04_00_00_00_00.move("64.00","0","190","40",null,null);

                p.Panel03.set_taborder("68");
                p.Panel03.set_flexcrossaxisalign("center");
                p.Panel03.move("175","520","100%","46",null,null);

                p.grdFile2.set_taborder("69");
                p.grdFile2.set_binddataset("dsFile2");
                p.grdFile2.set_autofittype("col");
                p.grdFile2.set_cssclass("grd_WF_FileAdd");
                p.grdFile2.set_readonly("true");
                p.grdFile2.move("20.00","60","100%","40",null,null);
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
                p.panFile00_00.set_taborder("0");
                p.panFile00_00.set_fittocontents("height");
                p.panFile00_00.set_spacing("10px 20px 10px 20px");
                p.panFile00_00.set_flexwrap("wrap");
                p.panFile00_00.set_cssclass("pal_WF_DtlBg");
                p.panFile00_00.set_verticalgap("4");
                p.panFile00_00.move("0","42","100.00%","301",null,null);

                p.grdFile3.set_taborder("1");
                p.grdFile3.set_binddataset("dsFile3");
                p.grdFile3.set_autofittype("col");
                p.grdFile3.set_autoenter("select");
                p.grdFile3.move("-551","421","100%","236",null,null);
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
            //-- Default Layout : this.divForm.form.divCheckList.form
            obj = new Layout("default","",0,0,this.divForm.form.divCheckList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sta00.set_taborder("0");
                p.sta00.set_text("임차요청사항은 임대배정 업무부서 담당자와 사전 협의 후 정확히 입력하였습니까?\r\n임대배정 업무부서 : 운영기획팀, 교통안전팀, 물류운영팀");
                p.sta00.set_cssclass("sta_WF_Des");
                p.sta00.set_fittocontents("height");
                p.sta00.set_textAlign("left");
                p.sta00.move("20","10","650","53",null,null);

                p.Panel01.set_taborder("1");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_spacing("10px 20px 10px 20px");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_cssclass("pal_WF_DtlBg");
                p.Panel01.set_verticalgap("4");
                p.Panel01.set_horizontalgap("20");
                p.Panel01.move("0","50","100.00%","74",null,null);

                p.sta00_00.set_taborder("7");
                p.sta00_00.set_text("임대료 및 관리비/유틸리티 유·무상 여부는 근거 규정을 확인하였습니까?");
                p.sta00_00.set_cssclass("sta_WF_Des");
                p.sta00_00.set_fittocontents("height");
                p.sta00_00.set_textAlign("left");
                p.sta00_00.move("20","-3395","650","53",null,null);

                p.Panel01_00.set_taborder("6");
                p.Panel01_00.set_fittocontents("height");
                p.Panel01_00.set_spacing("10px 20px 10px 20px");
                p.Panel01_00.set_flexwrap("wrap");
                p.Panel01_00.set_cssclass("pal_WF_DtlBg");
                p.Panel01_00.set_verticalgap("4");
                p.Panel01_00.set_horizontalgap("20");
                p.Panel01_00.move("0","50","100.00%","74",null,null);

                p.panCheckIdfrNm2.set_taborder("9");
                p.panCheckIdfrNm2.set_type("horizontal");
                p.panCheckIdfrNm2.set_flexgrow("1");
                p.panCheckIdfrNm2.set_fittocontents("height");
                p.panCheckIdfrNm2.set_maxheight("");
                p.panCheckIdfrNm2.move("0","-3405","100%","40",null,null);

                p.staCheckIdfrNm2.set_taborder("10");
                p.staCheckIdfrNm2.set_text("확인자");
                p.staCheckIdfrNm2.set_cssclass("sta_WF_Label");
                p.staCheckIdfrNm2.set_flexgrow("1");
                p.staCheckIdfrNm2.move("0","-3405","100","40",null,null);

                p.edtCheckIdfrNm2.set_taborder("11");
                p.edtCheckIdfrNm2.set_readonly("true");
                p.edtCheckIdfrNm2.set_displaynulltext(" 확인자 성명");
                p.edtCheckIdfrNm2.set_flexgrow("1");
                p.edtCheckIdfrNm2.set_minheight("40");
                p.edtCheckIdfrNm2.set_maxheight("");
                p.edtCheckIdfrNm2.move("70","-3405","100%","40",null,null);

                p.Panel00_00.set_taborder("8");
                p.Panel00_00.set_flexcrossaxiswrapalign("center");
                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.move("690","-3395","250","40",null,null);

                p.Panel00.set_taborder("2");
                p.Panel00.set_flexgrow("1");
                p.Panel00.set_fittocontents("height");
                p.Panel00.move("964","20","250","40",null,null);

                p.staCheckIdfrNm1.set_taborder("3");
                p.staCheckIdfrNm1.set_text("확인자");
                p.staCheckIdfrNm1.set_cssclass("sta_WF_Label");
                p.staCheckIdfrNm1.set_flexgrow("1");
                p.staCheckIdfrNm1.move("396.00","70","100","40",null,null);

                p.edtCheckIdfrNm1.set_taborder("4");
                p.edtCheckIdfrNm1.set_readonly("true");
                p.edtCheckIdfrNm1.set_displaynulltext(" 확인자 성명");
                p.edtCheckIdfrNm1.set_flexgrow("1");
                p.edtCheckIdfrNm1.set_minheight("40");
                p.edtCheckIdfrNm1.set_maxheight("");
                p.edtCheckIdfrNm1.move("396.00","114","100%","40",null,null);

                p.panCheckIdfrNm1.set_taborder("5");
                p.panCheckIdfrNm1.set_type("horizontal");
                p.panCheckIdfrNm1.set_flexgrow("1");
                p.panCheckIdfrNm1.set_flexcrossaxiswrapalign("center");
                p.panCheckIdfrNm1.set_fittocontents("height");
                p.panCheckIdfrNm1.move("396.00","70","100%","40",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.divCheckList.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divCheckList.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divCheckList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.divCheckList.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divMvnEvct.form
            obj = new Layout("default","",0,0,this.divForm.form.divMvnEvct.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sta00.set_taborder("0");
                p.sta00.set_text("(입주/퇴거) 입주 시 입주절차, 퇴거 시 퇴거절차(원상복구 등) 필수 진행\r\n   - 입주자지원센터 : 032-741-3301(T1), 032-741-3535(T2)");
                p.sta00.set_cssclass("sta_WF_Des");
                p.sta00.set_fittocontents("height");
                p.sta00.set_textAlign("left");
                p.sta00.move("20","10","100%","47",null,null);

                p.Panel01.set_taborder("1");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_spacing("10px 20px 10px 20px");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_cssclass("div_WF_InfoGuide");
                p.Panel01.set_verticalgap("0");
                p.Panel01.set_horizontalgap("20");
                p.Panel01.move("0","50","100.00%","130",null,null);

                p.sta00_00.set_taborder("2");
                p.sta00_00.set_text("(계약/임대료) 배정 후 계약체결 및 임대료(보증금) 납부(무상 제외)\r\n   - 재무팀 : 032-741-2323");
                p.sta00_00.set_cssclass("sta_WF_Des");
                p.sta00_00.set_fittocontents("height");
                p.sta00_00.set_textAlign("left");
                p.sta00_00.move("12","40","100%","50",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.divMvnEvct.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divMvnEvct.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divMvnEvct.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.divMvnEvct.form.addLayout(obj.name, obj);
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
                p.txtRvwOpnn.set_readonly("false");
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

                p.divRcptNo.set_taborder("40");
                p.divRcptNo.set_text("div00");
                p.divRcptNo.set_cssclass("div_WF_Bg");
                p.divRcptNo.set_fittocontents("height");
                p.divRcptNo.move("990","16","100%","96",null,null);

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
                p.staSubTitle02_00_00.set_text("임차요청사항");
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

                p.divSpceListGrp.set_taborder("9");
                p.divSpceListGrp.set_text("Div00");
                p.divSpceListGrp.set_cssclass("div_WF_Bg");
                p.divSpceListGrp.set_fittocontents("height");
                p.divSpceListGrp.move("0","66","100%","300",null,null);

                p.staSubTitle02_00_01.set_taborder("10");
                p.staSubTitle02_00_01.set_text("임차업무 담당자 연락처");
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

                p.divPicListGrp.set_taborder("14");
                p.divPicListGrp.set_text("Div00");
                p.divPicListGrp.set_cssclass("div_WF_Bg");
                p.divPicListGrp.set_fittocontents("height");
                p.divPicListGrp.move("0","422.856","100%","502",null,null);

                p.staSubTitle02_00_01_00.set_taborder("15");
                p.staSubTitle02_00_01_00.set_text("시설사용료 청구대상 정보");
                p.staSubTitle02_00_01_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_01_00.move("-64","1536","50%","50",null,null);

                p.Button00_00_01_00.set_taborder("16");
                p.Button00_00_01_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_01_00.move("2890.00","692","34","34",null,null);

                p.Panel01_02_01_00.set_taborder("17");
                p.Panel01_02_01_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_01_00.set_spacing("0px 10px");
                p.Panel01_02_01_00.set_horizontalgap("10");
                p.Panel01_02_01_00.set_flexcrossaxisalign("center");
                p.Panel01_02_01_00.set_flexmainaxisalign("end");
                p.Panel01_02_01_00.move("446","1536","50%","50",null,null);

                p.sub_tit04.set_taborder("18");
                p.sub_tit04.set_background("#ffffff");
                p.sub_tit04.set_flexcrossaxisalign("end");
                p.sub_tit04.set_minheight("70");
                p.sub_tit04.set_maxheight("");
                p.sub_tit04.move("944","1440","100%","70",null,null);

                p.Div04.set_taborder("19");
                p.Div04.set_text("Div00");
                p.Div04.set_cssclass("div_WF_Bg");
                p.Div04.set_fittocontents("height");
                p.Div04.move("0","1558","100%","918",null,null);

                p.staSubTitle02_00_02_00.set_taborder("20");
                p.staSubTitle02_00_02_00.set_text("첨부파일");
                p.staSubTitle02_00_02_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_02_00.move("1630.00","690","50%","50",null,null);

                p.Button00_00_02_00.set_taborder("21");
                p.Button00_00_02_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_02_00.move("2890.00","692","34","34",null,null);

                p.Panel01_02_02_00.set_taborder("22");
                p.Panel01_02_02_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_02_00.set_spacing("0px 10px");
                p.Panel01_02_02_00.set_horizontalgap("10");
                p.Panel01_02_02_00.set_flexcrossaxisalign("center");
                p.Panel01_02_02_00.set_flexmainaxisalign("end");
                p.Panel01_02_02_00.move("2340.00","690","50%","50",null,null);

                p.sub_tit05.set_taborder("23");
                p.sub_tit05.set_background("#ffffff");
                p.sub_tit05.set_flexcrossaxisalign("end");
                p.sub_tit05.set_minheight("70");
                p.sub_tit05.set_maxheight("");
                p.sub_tit05.move("1630","674","100%","70",null,null);

                p.Div05.set_taborder("24");
                p.Div05.set_text("Div00");
                p.Div05.set_cssclass("div_WF_Bg");
                p.Div05.set_fittocontents("height");
                p.Div05.move("0","30","100%","310",null,null);

                p.staSubTitle02_00_02_00_00.set_taborder("25");
                p.staSubTitle02_00_02_00_00.set_text("체크리스트");
                p.staSubTitle02_00_02_00_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_02_00_00.move("1630.00","690","50%","50",null,null);

                p.Button00_00_02_00_00.set_taborder("26");
                p.Button00_00_02_00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_02_00_00.move("2890.00","692","34","34",null,null);

                p.Panel01_02_02_00_00.set_taborder("27");
                p.Panel01_02_02_00_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_02_00_00.set_spacing("0px 10px");
                p.Panel01_02_02_00_00.set_horizontalgap("10");
                p.Panel01_02_02_00_00.set_flexcrossaxisalign("center");
                p.Panel01_02_02_00_00.set_flexmainaxisalign("end");
                p.Panel01_02_02_00_00.move("2340.00","690","50%","50",null,null);

                p.sub_tit06.set_taborder("28");
                p.sub_tit06.set_background("#ffffff");
                p.sub_tit06.set_flexcrossaxisalign("end");
                p.sub_tit06.set_minheight("70");
                p.sub_tit06.set_maxheight("");
                p.sub_tit06.move("1630","674","100%","70",null,null);

                p.divCheckList.set_taborder("29");
                p.divCheckList.set_text("Div00");
                p.divCheckList.set_cssclass("div_WF_Bg");
                p.divCheckList.set_fittocontents("height");
                p.divCheckList.move("0","30","100%","158",null,null);

                p.staSubTitle02_00_02_00_00_00.set_taborder("30");
                p.staSubTitle02_00_02_00_00_00.set_text("입주/퇴거 안내");
                p.staSubTitle02_00_02_00_00_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_02_00_00_00.move("1630.00","690","50%","50",null,null);

                p.btn00_00_02_00_00_00.set_taborder("32");
                p.btn00_00_02_00_00_00.set_cssclass("btn_WF_ACMinus");
                p.btn00_00_02_00_00_00.move("2890.00","692","34","34",null,null);

                p.Panel01_02_02_00_00_00.set_taborder("34");
                p.Panel01_02_02_00_00_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_02_00_00_00.set_spacing("0px 10px");
                p.Panel01_02_02_00_00_00.set_horizontalgap("10");
                p.Panel01_02_02_00_00_00.set_flexcrossaxisalign("center");
                p.Panel01_02_02_00_00_00.set_flexmainaxisalign("end");
                p.Panel01_02_02_00_00_00.move("2340.00","690","50%","50",null,null);

                p.sub_tit07.set_taborder("36");
                p.sub_tit07.set_background("#ffffff");
                p.sub_tit07.set_flexcrossaxisalign("end");
                p.sub_tit07.set_minheight("70");
                p.sub_tit07.set_maxheight("");
                p.sub_tit07.move("1630","674","100%","70",null,null);

                p.divMvnEvct.set_taborder("39");
                p.divMvnEvct.set_text("Div00");
                p.divMvnEvct.set_cssclass("div_WF_Bg .div_WF_SchBg");
                p.divMvnEvct.set_fittocontents("height");
                p.divMvnEvct.move("0","30","100%","158",null,null);

                p.staSubTitleRvwOpnn.set_taborder("31");
                p.staSubTitleRvwOpnn.set_text("임차의향서 검토의견");
                p.staSubTitleRvwOpnn.set_cssclass("sta_WF_SubTitle");
                p.staSubTitleRvwOpnn.move("1630.00","690","50%","50",null,null);

                p.Button00_00_02_00_00_00.set_taborder("33");
                p.Button00_00_02_00_00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_02_00_00_00.move("2890.00","692","34","34",null,null);

                p.panRvwOpnn.set_taborder("35");
                p.panRvwOpnn.set_cssclass("pal_WF_TitBtnBg");
                p.panRvwOpnn.set_spacing("0px 10px");
                p.panRvwOpnn.set_horizontalgap("10");
                p.panRvwOpnn.set_flexcrossaxisalign("center");
                p.panRvwOpnn.set_flexmainaxisalign("end");
                p.panRvwOpnn.move("2340.00","690","50%","50",null,null);

                p.sub_tit08.set_taborder("37");
                p.sub_tit08.set_background("#ffffff");
                p.sub_tit08.set_flexcrossaxisalign("end");
                p.sub_tit08.set_minheight("70");
                p.sub_tit08.set_maxheight("");
                p.sub_tit08.move("1630","674","100%","70",null,null);

                p.divRvwOpnn.set_taborder("38");
                p.divRvwOpnn.set_text("Div00");
                p.divRvwOpnn.set_cssclass("div_WF_Bg .div_WF_SchBg");
                p.divRvwOpnn.set_fittocontents("height");
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
                p.btn02.set_text("임차요청사항");
                p.btn02.set_cssclass("btn_WF_Quick");
                p.btn02.move("17.00","btn01:0","100%","45",null,null);

                p.btn03.set_taborder("2");
                p.btn03.set_text("임차업무 담당자 연락처");
                p.btn03.set_cssclass("btn_WF_Quick");
                p.btn03.move("17.00","110","100%","45",null,null);

                p.btn04.set_taborder("3");
                p.btn04.set_text("시설사용료 청구대상 정보");
                p.btn04.set_cssclass("btn_WF_Quick");
                p.btn04.move("17.00","110","100%","45",null,null);

                p.btn05.set_taborder("4");
                p.btn05.set_text("첨부파일");
                p.btn05.set_cssclass("btn_WF_Quick");
                p.btn05.move("17.00","110","100%","45",null,null);

                p.btn06.set_taborder("5");
                p.btn06.set_text("체크리스트");
                p.btn06.set_cssclass("btn_WF_Quick");
                p.btn06.move("17.00","110","100%","45",null,null);

                p.btn07.set_taborder("6");
                p.btn07.set_text("입주/퇴거 안내");
                p.btn07.set_cssclass("btn_WF_Quick");
                p.btn07.move("17.00","110","100%","45",null,null);

                p.btn08.set_taborder("7");
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

                p.btn04.set_fittocontents("width");
                p.btn04.set_cssclass("btn_WF_QuickM");

                p.btn05.set_fittocontents("width");
                p.btn05.set_cssclass("btn_WF_QuickM");

                p.btn06.set_cssclass("btn_WF_QuickM");

                p.btn07.set_cssclass("btn_WF_QuickM");
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

                p.btnRcpt.set_taborder("1");
                p.btnRcpt.set_text("접수");
                p.btnRcpt.set_cssclass("btn_WF_Yes");
                p.btnRcpt.move("btnCancel:10","20","84","40",null,null);

                p.btnRjct.set_taborder("2");
                p.btnRjct.set_text("반려");
                p.btnRjct.set_cssclass("btn_WF_Yes");
                p.btnRjct.move("10","20","84","40",null,null);
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
                p.set_titletext("임차의향서 접수");

                p.divTitle.set_taborder("3");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_cssclass("div_WF_QuickFrBg");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("height");
                p.divForm.move("0","divTitle:0",null,"4566","60",null);

                p.divQuick.set_taborder("1");
                p.divQuick.set_text("div00");
                p.divQuick.set_cssclass("div_WF_QuickMenu");
                p.divQuick.set_fittocontents("height");
                p.divQuick.move(null,"62","296","245","62",null);

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
                p.divTitle.move("0","0",null,"50","0",null);

                p.divQuick.set_cssclass("div_WF_QuickMenuM");
                p.divQuick.move("20","60",null,"60","20",null);

                p.divForm.set_fittocontents("none");
                p.divForm.set_cssclass("div_WF_QuickFrBgM");
                p.divForm.move("0","120",null,null,"0","80");

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

            obj = new BindItem("item2","divForm.form.divHirerInfo.form.edtRtfeYn","value","dsMaster","rtfeYnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.divHirerInfo.form.edtMncoYn","value","dsMaster","mncoYnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.divHirerInfo.form.edtUtltYn","value","dsMaster","utltYnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.divHirerInfo.form.txtRltnMttr","value","dsMaster","rltnMttr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.divHirerInfo.form.txtNoteMttr","value","dsMaster","noteMttr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.Div04.form.edtRprsvNm","value","dsCustInfo","rprsvNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.Div04.form.edtBrno","value","dsCustInfo","brno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divForm.form.Div04.form.edtCrno","value","dsCustInfo","crno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divForm.form.Div04.form.edtTpbizNm","value","dsCustInfo","tpbizNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divForm.form.Div04.form.edtBzcndNm","value","dsCustInfo","bzentyNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divForm.form.Div04.form.edtDtyDeptNm","value","dsCustInfo","dtyDeptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divForm.form.Div04.form.edtPicNm","value","dsCustInfo","picNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divForm.form.Div04.form.edtTelNo","value","dsCustInfo","telno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divForm.form.Div04.form.edtFaxNo","value","dsCustInfo","fxno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divForm.form.Div04.form.edtMblTelNo","value","dsCustInfo","mblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divForm.form.Div04.form.edtEmlAddr","value","dsCustInfo","emlAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divForm.form.Div04.form.edtEtxivEmlAddr","value","dsCustInfo","etxivEmlAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divForm.form.Div04.form.divEdtPop.form.Edit00","value","dsCustInfo","bplcZip");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divForm.form.Div04.form.edt00_00_00_00","value","dsCustInfo","bplcAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divForm.form.Div04.form.cbxEmlClmAplyYn","height","dsCustInfo","emlClmAplyYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divForm.form.divCheckList.form.edtCheckIdfrNm1","height","dsMaster","checkIdfrNm1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divForm.form.divCheckList.form.edtCheckIdfrNm2","height","dsMaster","checkIdfrNm2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divForm.form.Div04.form.edt00_00_01_00","value","dsCustInfo","clmDtlAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divForm.form.Div04.form.edt00_00_01","value","dsCustInfo","bplcDtlAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divForm.form.Div04.form.divEdtPop00.form.Edit00","value","dsCustInfo","clmZip");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divForm.form.Div04.form.edt00_00_00_00_00","value","dsCustInfo","clmAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divForm.form.Div04.form.cboBplcAddrSmYn","value","dsCustInfo","bplcAddrSmYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divForm.form.divCheckList.form.edtCheckIdfrNm1","value","dsMaster","checkIdfrNm1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divForm.form.divCheckList.form.edtCheckIdfrNm2","value","dsMaster","checkIdfrNm2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divForm.form.Div04.form.cbxEmlClmAplyYn","value","dsCustInfo","emlClmAplyYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divForm.form.Div04.form.rdo00_00","value","dsCustInfo","payShapeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divForm.form.divRvwOpnn.form.txtRvwOpnn","value","dsMaster","rvwOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divForm.form.divRcptNo.form.edtRcptNo","value","dsMaster","rcptNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divForm.form.divRcptNo.form.edtSttsNm","value","dsMaster","prgrsSttsNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.addIncludeScript("REN008M03.xfdl","xjs::TaskCom.xjs");
        this.registerScript("REN008M03.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	REN008M03.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/10/29
        *  @Desction    임차의향서 접수
        ******************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/10/29			이루온						최초생성
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

        	if (this.opener) {
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

        		// 임차의향서 상세조회
        		this.dsSearch.setColumn(0,"grp1CdId", "REN008M01");
        		this.dsSearch.setColumn(0,"hireLoiNo"	,this.param.hireLoiNo);
        		this.selectHireLoi();

        		//초기포커스 지정
        		//this.divForm.form.Div01.form.rdoSptIdntyCd.setFocus();
        	} else {
        		this.gfnAlertMsg("msg", "REN_004");	//임차희망서번호가 없습니다.
        	}
        };

        // 상세 페이지 옆 버튼 부분 플로팅 스크롤
        this.form_onvscroll = function(obj,e)
        {
        	if(this.objApp.screenid == "Desktop_screen") {
        		this.divQuick.top = e.pos+50;
        		//this.divBtn.top = e.pos+297;
        		this.divBtn.top = "divQuick:0";
        /*
        		if (this.dsGet.getColumn(0, "prgrsSttsCd") == "11"
        			|| this.dsGet.getColumn(0, "prgrsSttsCd") == "12"
        			|| this.dsGet.getColumn(0, "prgrsSttsCd") == "13"
        			|| this.dsGet.getColumn(0, "prgrsSttsCd") == "14"
        			|| this.param.status == "reg"){
        			this.divBtn.top = e.pos+251;
        		}
        		*/
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	// 공통코드조회 : 상세용도, 유무상코드
        	this.cfnComCdLoad({dsCboDtlUsgCd:"RENT_DTL_USG:S", dsCboRtfeYnCd:"YN_CD:S", dsCboMncoYnCd:"YN_CD:S", dsCboUtltYnCd:"YN_CD:S"});
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        /*******************************************************************************************************************************
         * 임차의향서 상세조회
        *******************************************************************************************************************************/
        this.selectHireLoi = function()
        {
        	var strSvcId    = "selectHireLoi";
        	var strSvcUrl   = "ren/frs/selectHireLoi.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsMaster=dsMaster dsSpceList=dsSpceList dsCustInfo=dsCustInfo dsPicList=dsPicList dsAtflList=dsAtflList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

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

        		// 임차의향서 상세조회
        		case "selectHireLoi":
        			this.divBtn.form.btnRcpt.visible = false;		// 접수
        			this.divBtn.form.btnRjct.visible = false;		// 반려

        			//30.작성중 31.제출 32.접수 33.반려 34.SAP전송 35.배정확정
        			if (this.dsMaster.getColumn(0,"prgrsSttsCd") == "31") {
        				this.divBtn.form.btnRcpt.visible = true;	// 저장
        				this.divBtn.form.btnRjct.visible = true;	// 제출
        			}

        			// 이메일청구신청 이면 청구지주소 비활성화 시킴
        			if (this.dsCustInfo.getColumn(0,"emlClmAplyYn") == "Y") {
        				this.divForm.form.Div04.form.panClmAddr.visible = false;
        			}

        			// 첨부파일 설정
        			this.cfnFileSet();

        			break;

        		// 접수,반려
        		case "update":
        			this.gfnAlertMsg("msg", this.objApp.getVariable("gvRetMsg"), "", "msgCallback");
        			var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        			this.gfnCloseMenu(cMenuId);
        			this._gfnOpenMenu(cMenuId.substring(0,14),"",true);

        			break;
        	}
        };

        // 첨부파일 설정
        this.cfnFileSet = function()
        {
        	var vBZENTY_CLSF_CD = "";
        	if (this.dsMaster.getColumn(0,"bzentyClsfCd") == "BZENTY_CLSF_CD001") {			// 공항운영그룹
        		vBZENTY_CLSF_CD = "B";
        	} else if (this.dsMaster.getColumn(0,"bzentyClsfCd") == "BZENTY_CLSF_CD002") {	// 항공사그룹
        		vBZENTY_CLSF_CD = "C";
        	} else if (this.dsMaster.getColumn(0,"bzentyClsfCd") == "BZENTY_CLSF_CD003") {	// 조업사 정비업체
        		vBZENTY_CLSF_CD = "D";
        	} else if (this.dsMaster.getColumn(0,"bzentyClsfCd") == "BZENTY_CLSF_CD004") {	// 여행사
        		vBZENTY_CLSF_CD = "E";
        	} else if (this.dsMaster.getColumn(0,"bzentyClsfCd") == "BZENTY_CLSF_CD005") {	// 공공그룹
        		vBZENTY_CLSF_CD = "F";
        	} else if (this.dsMaster.getColumn(0,"bzentyClsfCd") == "BZENTY_CLSF_CD006") {	// 상업그룹
        		vBZENTY_CLSF_CD = "G";
        	} else if (this.dsMaster.getColumn(0,"bzentyClsfCd") == "BZENTY_CLSF_CD007") {	// 기타
        		vBZENTY_CLSF_CD = "H";
        	}

        	this.dsFile1.clearData();
        	this.dsFile2.clearData();
        	this.dsFile3.clearData();
        	for (i = 0; i<this.dsAtflList.rowcount; i++) {
        		// 임차업무 담당자 개인정보수집 및 이용동의서
        		if (this.dsAtflList.getColumn(i,"grp2CdId") == "A") {
        			this.dsFile1.addRow();
        			this.dsFile1.copyRow(this.dsFile1.rowposition,this.dsAtflList,i);
        		}

        		// 시설사용료 담당자 개인정보수집 및 이용동의서
        		if (this.dsAtflList.getColumn(i,"grp2CdId") == "K") {
        			this.dsFile2.addRow();
        			this.dsFile2.copyRow(this.dsFile2.rowposition,this.dsAtflList,i);
        		}

        		// 첨부파일
        		if (this.dsAtflList.getColumn(i,"grp1CdId") == 'REN008M01' &&
        		   (this.dsAtflList.getColumn(i,"grp2CdId") == vBZENTY_CLSF_CD || this.dsAtflList.getColumn(i,"grp2CdId") == 'J')) {
        			this.dsFile3.addRow();
        			this.dsFile3.copyRow(this.dsFile3.rowposition,this.dsAtflList,i);
        		}
        	};

        	console.log("this.dsFile1==2==>"+this.dsFile1.saveXML());
        	console.log("this.dsFile2==2==>"+this.dsFile2.saveXML());
        	console.log("this.dsFile3==2==>"+this.dsFile3.saveXML());
        	//this.dsFile1.filter("grp1CdId ==  'REN008M01' && (grp2CdId == '" + vBZENTY_CLSF_CD + "' || grp2CdId == 'J') ");

        	// 데이터 조회 후 파일리스트에 셋팅
        	this.gfnDownloadSetting(this.RaonkUpload, this.dsFile1);
        	this.gfnDownloadSetting(this.RaonkUpload, this.dsFile2);
        	this.gfnDownloadSetting(this.RaonkUpload, this.dsFile3);
        }

        /*******************************************************************************************************************************
         * 접수 버튼 클릭시
        *******************************************************************************************************************************/
        this.divBtn_btnRcpt_onclick = function(obj,e)
        {
        	this.dsMaster.setColumn(0, "prgrsSttsCd"	, "32");	// 진행상태코드: 30.작성중 31.제출 32.접수
        	this.gfnConfirmMsg("save_confirm", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"],"",["접수"]);
        };

        /*******************************************************************************************************************************
         * 반려 버튼 클릭시
        *******************************************************************************************************************************/
        this.divBtn_btnRjct_onclick = function(obj,e)
        {
        	 if (this.gfnDsIsUpdated(this.dsMaster) == true) {
        		this.dsMaster.setColumn(0, "prgrsSttsCd"	, "33");	// 진행상태코드: 30.작성중 31.제출 32.접수 33.반려
        		this.gfnConfirmMsg("save_confirm", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"],"",["반려"]);
        	} else {
        		this.gfnAlertMsg("msg", "REN_015");
        		this.divForm.form.divRvwOpnn.form.txtRvwOpnn.setFocus();	// 검토의견
         		return;
        	}
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


        // 얼럿창 콜백 함수
        this.msgCallback = function(sPopupId, sRtn) {

        	var oRtn 		= JSON.parse(sRtn);

        	// 저장
        	if (sPopupId == "save_confirm" && oRtn.result == "Y") {

        		var strSvcId    = "update";
        		var strSvcUrl   = "ren/frs/updateHireLoiRcptRjct.do";
        		var inData      = "dsMaster=dsMaster:A";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";
        		var isAsync   	= false;

        		this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        	}
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
        		//this.gfnAlertMsg("MSG_001", "msgCallback");
        		//this.gfnAlertMsg("msg", "파일 1개만 업로드 가능 합니다.");
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
        	}
        };

        // 시설사용료 담당자 개인정보수집 및 이용동의서
        this.divForm_Div04_grdFile2_oncellclick = function(obj,e)
        {
        	// 데이터의 첨부파일 관리번호 입력 컬럼명
        	if (e.col == 0) {
        		// 파일명을 더블클릭 시 다운로드
        		this.gfnDownloadFile(this.RaonkUpload, this.dsFile2, e);
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
            this.divForm.form.divRcptNo.form.staSttsNm.addEventHandler("onclick",this.divForm_divRcptNo_staSttsNm_onclick,this);
            this.divForm.form.divHirerInfo.form.txtRltnMttr.addEventHandler("onchanged",this.divForm_Div03_TextArea00_onchanged,this);
            this.divForm.form.divHirerInfo.form.staNoteMttr.addEventHandler("onclick",this.divForm_Div01_staLabel01_00_01_01_00_00_00_onclick,this);
            this.divForm.form.divHirerInfo.form.txtNoteMttr.addEventHandler("onchanged",this.divForm_Div03_TextArea00_onchanged,this);
            this.divForm.form.staSubTitle02_00_00.addEventHandler("onclick",this.divForm_staSubTitle02_00_00_onclick,this);
            this.divForm.form.staSubTitle02_00_01.addEventHandler("onclick",this.divForm_staSubTitle02_00_01_onclick,this);
            this.divForm.form.divPicListGrp.form.staLabel00_02_01_00.addEventHandler("onclick",this.divForm_Div05_staLabel00_02_01_onclick,this);
            this.divForm.form.divPicListGrp.form.grdFile1.addEventHandler("oncellclick",this.divForm_Div03_grdFile1_oncellclick,this);
            this.divForm.form.staSubTitle02_00_01_00.addEventHandler("onclick",this.divForm_staSubTitle02_00_01_onclick,this);
            this.divForm.form.Div04.form.staLabel00_02_01_00.addEventHandler("onclick",this.divForm_Div05_staLabel00_02_01_onclick,this);
            this.divForm.form.Div04.form.Static00_00_00.addEventHandler("onclick",this.divForm_Div04_Static00_onclick,this);
            this.divForm.form.Div04.form.rdo00_00.addEventHandler("onitemchanged",this.divForm_rdo00_00_onitemchanged,this);
            this.divForm.form.Div04.form.staEmlClmAplyYn.addEventHandler("onclick",this.divForm_Div04_Static00_onclick,this);
            this.divForm.form.Div04.form.cboBplcAddrSmYn.addEventHandler("onclick",this.divForm_Div04_cboBplcAddrSmYn_onclick,this);
            this.divForm.form.Div04.form.grdFile2.addEventHandler("oncellclick",this.divForm_Div04_grdFile2_oncellclick,this);
            this.divForm.form.Div05.form.grdFile3.addEventHandler("oncellclick",this.divForm_Div05_grdFile3_oncellclick,this);
            this.divForm.form.Button00_00_02_00_00.addEventHandler("onclick",this.divForm_Button00_00_02_00_00_onclick,this);
            this.divForm.form.btn00_00_02_00_00_00.addEventHandler("onclick",this.divForm_Button00_00_02_00_00_onclick,this);
            this.divForm.form.Button00_00_02_00_00_00.addEventHandler("onclick",this.divForm_Button00_00_02_00_00_onclick,this);
            this.divForm.form.divRvwOpnn.form.txtRvwOpnn.addEventHandler("onchanged",this.divForm_Div03_TextArea00_onchanged,this);
            this.divQuick.form.btn01.addEventHandler("onclick",this.divQuickMenu_onclick,this);
            this.divQuick.form.btn02.addEventHandler("onclick",this.divQuickMenu_onclick,this);
            this.divQuick.form.btn03.addEventHandler("onclick",this.divQuickMenu_onclick,this);
            this.divQuick.form.btn04.addEventHandler("onclick",this.divQuickMenu_onclick,this);
            this.divQuick.form.btn05.addEventHandler("onclick",this.divQuickMenu_onclick,this);
            this.divQuick.form.btn06.addEventHandler("onclick",this.divQuickMenu_onclick,this);
            this.divQuick.form.btn07.addEventHandler("onclick",this.divQuickMenu_onclick,this);
            this.divQuick.form.btn08.addEventHandler("onclick",this.divQuickMenu_onclick,this);
            this.divBtn.form.btnCancel.addEventHandler("onclick",this.divBtn_btnCancel_onclick,this);
            this.divBtn.form.btnRcpt.addEventHandler("onclick",this.divBtn_btnRcpt_onclick,this);
            this.divBtn.form.btnRjct.addEventHandler("onclick",this.divBtn_btnRjct_onclick,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddFile",this.RaonkUpload_RAONKUPLOAD_AfterAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_CreationComplete",this.RaonkUpload_RAONKUPLOAD_CreationComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_UploadComplete",this.RaonkUpload_RAONKUPLOAD_UploadComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_OnError",this.RaonkUpload_RAONKUPLOAD_OnError,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeAddFile",this.RaonkUpload_RAONKUPLOAD_BeforeAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddAllFile",this.RaonkUpload_RAONKUPLOAD_AfterAddAllFile,this);
            this.dsFile1.addEventHandler("onload",this.dsAtfl_onload,this);
            this.dsFile2.addEventHandler("onload",this.dsAtfl_onload,this);
            this.dsFile3.addEventHandler("onload",this.dsAtfl_onload,this);
        };
        this.loadIncludeScript("REN008M03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
