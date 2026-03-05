(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LIF052M00");
            this.set_titletext("인계인수 신청서작성");
            this.set_scrollbartype("fixed fixed");
            this.set_scrolltype("both");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,1800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"수집이용항목\" type=\"STRING\" size=\"256\"/><Column id=\"수집목적\" type=\"STRING\" size=\"256\"/><Column id=\"보유기간\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBldgSeList", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLifFcltyAcptnHnov", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"coNm\" type=\"STRING\" size=\"256\"/><Column id=\"cmnctSttsCn\" type=\"STRING\" size=\"256\"/><Column id=\"fcltNm\" type=\"STRING\" size=\"256\"/><Column id=\"rmrkCn\" type=\"STRING\" size=\"256\"/><Column id=\"acptnHnovDt\" type=\"STRING\" size=\"256\"/><Column id=\"bscFcltyCheckListPath\" type=\"STRING\" size=\"256\"/><Column id=\"rbprsnFcltMngRbprsnYn\" type=\"STRING\" size=\"256\"/><Column id=\"rbprsnFcltMngRbprsnNm\" type=\"STRING\" size=\"256\"/><Column id=\"rbprsnFcltMngRbprsnMblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"rbprsnFcltMngRbprsnPrvcClctUtztnWtcsPath\" type=\"STRING\" size=\"256\"/><Column id=\"prvcClctEsntlAgreYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRgnSeList", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPstnSeList", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTspLocCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCstFcltOperMst", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"taskCd\" type=\"STRING\" size=\"256\"/><Column id=\"nextTaskCd\" type=\"STRING\" size=\"256\"/><Column id=\"pstnSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyDt\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"endCd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstnInfoRnb\" type=\"STRING\" size=\"256\"/><Column id=\"clmAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmDtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmZip\" type=\"STRING\" size=\"256\"/><Column id=\"clmCustCd\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"pbcprtPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"pbcprtPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"rcptDt\" type=\"STRING\" size=\"256\"/><Column id=\"clrId\" type=\"STRING\" size=\"256\"/><Column id=\"dptyRegYn\" type=\"STRING\" size=\"256\"/><Column id=\"dmndDt\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptAplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptCtrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptPstnInfoCn\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtHwrtInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntHwrtInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"pbcprtMvmnRgnPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"docCd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtChcYn\" type=\"STRING\" size=\"256\"/><Column id=\"wholJobBgngDt\" type=\"STRING\" size=\"256\"/><Column id=\"wholJobEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobNm\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobRsnCn\" type=\"STRING\" size=\"256\"/><Column id=\"bldgSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoCtrtrNm\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoPicCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobFldCd\" type=\"STRING\" size=\"256\"/><Column id=\"arptCstrnPicId\" type=\"STRING\" size=\"256\"/><Column id=\"lbsvcPbcprtPicId\" type=\"STRING\" size=\"256\"/><Column id=\"basctAplcfmInfoId\" type=\"STRING\" size=\"256\"/><Column id=\"lbsvcTaskAgtRlvtYn\" type=\"STRING\" size=\"256\"/><Column id=\"lbsvcTaskMdtrId\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptRnb\" type=\"STRING\" size=\"256\"/><Column id=\"aplcfmRtrvlDmndYn\" type=\"STRING\" size=\"256\"/><Column id=\"aplcfmRtrvlDt\" type=\"STRING\" size=\"256\"/><Column id=\"aplcfmRtrvlCn\" type=\"STRING\" size=\"256\"/><Column id=\"aplcfmRtrvlRqstrId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcfmRtrvlAprvYn\" type=\"STRING\" size=\"256\"/><Column id=\"aplcfmRtrvlAprvDt\" type=\"STRING\" size=\"256\"/><Column id=\"aplcfmRtrvlAprvCn\" type=\"STRING\" size=\"256\"/><Column id=\"aplcfmRtrvlAutzrId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRtpyrClmInfoMng", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"rtpyrClmInfoRegNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"payPicSmYn\" type=\"STRING\" size=\"256\"/><Column id=\"clmCustCd\" type=\"STRING\" size=\"256\"/><Column id=\"payPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"payPicDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"acuntEml\" type=\"STRING\" size=\"256\"/><Column id=\"payPicTelno\" type=\"STRING\" size=\"256\"/><Column id=\"etxivEmlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"payPicMblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"clmMtdCd\" type=\"STRING\" size=\"256\"/><Column id=\"clmZip\" type=\"STRING\" size=\"256\"/><Column id=\"clmAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmDtlAddr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEmlList", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEmlList00", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTscMvnSrvcBscInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"bscInfoRegNo\" type=\"STRING\" size=\"256\"/><Column id=\"bscInfoRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyNm\" type=\"STRING\" size=\"256\"/><Column id=\"rprsvNm\" type=\"STRING\" size=\"256\"/><Column id=\"rprsTelno\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"crno\" type=\"STRING\" size=\"256\"/><Column id=\"tpbizNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzcndNm\" type=\"STRING\" size=\"256\"/><Column id=\"custZip\" type=\"STRING\" size=\"256\"/><Column id=\"custAddr\" type=\"STRING\" size=\"256\"/><Column id=\"custDtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"atchSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTscAplyRnbMng", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplyRnbMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"pstnInfoRnb\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCnvyMttr", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/><Column id=\"cnvyMttrCn\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtfl", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplcfmNo\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"jobSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobTycoSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"atchSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"atchDtlSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"bsnsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"workId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtn\" type=\"STRING\" size=\"256\"/><Column id=\"strgFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTerm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><ConstColumn id=\"RVW_TYPE_FICA\" type=\"STRING\" size=\"30\" value=\"fcltyInstlChgBgncstAprvRvw dsBgncstAprvRvw\"/><ConstColumn id=\"RVW_TYPE_COMA\" type=\"STRING\" size=\"30\" value=\"fcltyInstlChgCmcnInspRvw dsCmcnInspRvw\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset04", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRnbKeyCntsDiv", this);
            obj._setContents("<ColumnInfo><Column id=\"visible\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"visible\">false</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","divTitle:10",null,"17000","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickFrBg");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("divInfoGuide","1660.00","262","100%","300",null,null,null,null,"50",null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_text("서비스 흐름 및 작업방법 안내");
            obj.set_cssclass("div_WF_InfoGuide");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnGuide",null,"10","34","34","10",null,null,null,null,null,this.divForm.form.divInfoGuide.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.form.divInfoGuide.addChild(obj.name, obj);

            obj = new Panel("sub_tit01","1630","674","100%","66",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("9");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div01","0","0","100%","500",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel04","0","31","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("27");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"edtRnb\"/><PanelItem id=\"PanelItem01\" componentid=\"btnPopRnbReg\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("23");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtMvnPicCoNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtMvnPicCoNm\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("4");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"edtCtrtNo\"/><PanelItem id=\"PanelItem04\" componentid=\"Button00_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("6");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("7");
            obj.set_text("계약명");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_visible("false");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_02","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02\"/><PanelItem id=\"PanelItem02\" componentid=\"divEdtCtrtNm\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("9");
            obj.set_text("위치구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel02_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("none");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_01\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel02_01_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("11");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cmbRgnSeCd","20","226","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("12");
            obj.set_innerdataset("dsRgnSeList");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtCtrtNo","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("13");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel02_01_01","308","232","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("16");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"cmbRgnSeCd\"/><PanelItem id=\"PanelItem04\" componentid=\"Button00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"cmbPstnSeCd\"/><PanelItem id=\"PanelItem03\" componentid=\"cmbBldgSeCd\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cmbPstnSeCd","20","226","100.00%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("15");
            obj.set_innerdataset("dsPstnSeList");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Div("divEdtCtrtNm","280","274","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("14");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            obj.set_visible("false");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtCtrtNm","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.Div01.form.divEdtCtrtNm.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            this.divForm.form.Div01.form.divEdtCtrtNm.addChild(obj.name, obj);

            obj = new Button("btnPop","edtCtrtNm:-40","0","40","40",null,null,null,null,null,null,this.divForm.form.Div01.form.divEdtCtrtNm.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.divForm.form.Div01.form.divEdtCtrtNm.addChild(obj.name, obj);

            obj = new Combo("cmbBldgSeCd","20","226","100.00%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("17");
            obj.set_innerdataset("dsBldgSeList");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_displaynulltext("선택");
            obj.set_visible("false");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Radio("radioCtrtChcYn","935","404","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("24");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divForm_form_Div01_form_radioCtrtChcYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div01_form_radioCtrtChcYn_innerdataset", obj);
            divForm_form_Div01_form_radioCtrtChcYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">계약선택</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">수기입력</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div01_form_radioCtrtChcYn_innerdataset);
            obj.set_text("수기입력");
            obj.set_value("0");
            obj.set_index("1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("18");
            obj.set_text("위치정보(룸번호)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_01_00","10.00","98","100%","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("19");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("none");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel04\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel03","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("20");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_01_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("21");
            obj.set_text("계약선택여부");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("22");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"radioCtrtChcYn\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtRnb","30","360","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("25");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Button("btnPopRnbReg","406","372","120","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("26");
            obj.set_text("룸번호등록");
            obj.set_fittocontents("width");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00","560","18","44","90",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("28");
            obj.set_text("Button00");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_01","560","18","44","90",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("29");
            obj.set_text("Button00");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("sub_tit02","1630","674","100%","66",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("13");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div02","0","Div01:376.428","100%","192",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("1");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem03\" componentid=\"divEdtPopAplcnt\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("4");
            obj.set_text("휴대폰 번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Button00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtMblTelno\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("Button00","560","18","44","90",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("11");
            obj.set_text("Button00");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Div("divEdtPopAplcnt","280","274","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtAplcntNm","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.Div02.form.divEdtPopAplcnt.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            this.divForm.form.Div02.form.divEdtPopAplcnt.addChild(obj.name, obj);

            obj = new Button("btnPop","edtAplcntNm:-40","0","40","40",null,null,null,null,null,null,this.divForm.form.Div02.form.divEdtPopAplcnt.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.divForm.form.Div02.form.divEdtPopAplcnt.addChild(obj.name, obj);

            obj = new Edit("edtMblTelno","0.00","46","100.00%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("8");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"edtAplcntCoNm\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtAplcntCoNm","0.00","46","100.00%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("sub_tit03","1630","674","100%","66",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("17");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div03","0","Div02:422.856","100%","735",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("0");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edtBzentyNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("1");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtBzentyNm\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("4");
            obj.set_text("대표자성명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edtRprsvNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("5");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRprsvNm\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("7");
            obj.set_text("대표전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edtRprsTelno","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("8");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRprsTelno\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("10");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_01_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel00_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("11");
            obj.set_text("사업자 등록번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edtCrno","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("12");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_02","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("13");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"edtCrno\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("14");
            obj.set_text("법인등록번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edtBrno","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("15");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtBrno\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("17");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_01_01\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel00_03","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("18");
            obj.set_text("업종");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edtTpbizNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("19");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_03","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("20");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_03\"/><PanelItem id=\"PanelItem01\" componentid=\"edtTpbizNm\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("21");
            obj.set_text("업태");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edtBzcndNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("22");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_02","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("23");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"edtBzcndNm\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel03","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("24");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_03\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_01_02\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel04","0","60","100.00%","150",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("25");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_01\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","0.00","0","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("26");
            obj.set_text("사업자등록주소/우편번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Div("divEdtPop","780.00","635","305","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("27");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edtCustZip","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.Div03.form.divEdtPop.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            obj.set_displaynulltext("우편번호 검색");
            this.divForm.form.Div03.form.divEdtPop.addChild(obj.name, obj);

            obj = new Button("btnPop","edtCustZip:-40","0","40","40",null,null,null,null,null,null,this.divForm.form.Div03.form.divEdtPop.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.divForm.form.Div03.form.divEdtPop.addChild(obj.name, obj);

            obj = new Edit("edtCustAddr","360","637","305","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("28");
            obj.set_readonly("true");
            obj.set_flexgrow("2");
            obj.set_displaynulltext("주소");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panAddress","200","641","100%","45",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("29");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divEdtPop\"/><PanelItem id=\"PanelItem02\" componentid=\"edtCustAddr\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edtCustDtlAddr","0.00","46","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("30");
            obj.set_displaynulltext("상세주소");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01","20.00","0","980","136",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("31");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"panAddress\"/><PanelItem id=\"PanelItem01\" componentid=\"edtCustDtlAddr\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("32");
            obj.set_text("사업자등록증");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("Button00","813","76","120","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("33");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_file_1_00","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("34");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("35");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panTitle00","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("36");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static00_00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("37");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_00","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("38");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_00","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("39");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFileNum00","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("40");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1_00","512","135","125","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("41");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnDel00","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("42");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_1_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("43");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("44");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_01","20","20","100%","30",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("45");
            obj.set_text("JPG,PNG,BMP,PDF만 첨부가능");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","192","1038","100.00%","80",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("46");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Grid00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00_00_00_01\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFile00","0","42","100%","201",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("47");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel01_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("sub_tit04","1630","674","100%","66",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("21");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_02\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div04","0","30","100%","1400",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_text("Div04");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnPopClmInfo","883","47","110","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("60");
            obj.set_text("청구정보찾기");
            obj.set_fittocontents("width");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00","520","41","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("61");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"edtClmCustCd\"/><PanelItem id=\"PanelItem01\" componentid=\"btnPopClmInfo\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Pnl0402_00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("59");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Pnl0401\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_01_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("0");
            obj.set_text("납부담당자 동일여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Pnl0401","0","60","305","77",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("1");
            obj.set_verticalgap("0");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem00\" componentid=\"rdoRtpyrSmYn\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("2");
            obj.set_text("납부담당자 성명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edtPayPicNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("3");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtPayPicNm\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edtClmCustCd","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("6");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("5");
            obj.set_text("청구고객번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"edtPayPicDeptNm\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Pnl0402","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("8");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_01_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel00_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("9");
            obj.set_text("납부담당자 부서");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edtPayPicDeptNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("10");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_02","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("11");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_03\"/><PanelItem id=\"PanelItem02\" componentid=\"edtPayPicTelno\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_03_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtPayPicMblTelno\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Pnl0403","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("13");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_01_01\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel00_03","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("14");
            obj.set_text("납부담당자 전화번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edtPayPicTelno","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("15");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Radio("rdoRtpyrSmYn","200.00","328","393","31",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("16");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div04_form_rdoRtpyrSmYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div04_form_rdoRtpyrSmYn_innerdataset", obj);
            divForm_form_Div04_form_rdoRtpyrSmYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">신청자정보와 동일</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">신청자정보와 동일하지 않음</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div04_form_rdoRtpyrSmYn_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel00_03_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("17");
            obj.set_text("납부담당자 휴대전화번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edtPayPicMblTelno","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("18");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","0.00","0","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("19");
            obj.set_text("청구지주소/우편번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Div("divEdtPop","780.00","635","305","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("20");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edtClmZip","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.Div04.form.divEdtPop.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            obj.set_displaynulltext("우편번호 검색");
            this.divForm.form.Div04.form.divEdtPop.addChild(obj.name, obj);

            obj = new Button("btnPop","edtClmZip:-40","0","40","40",null,null,null,null,null,null,this.divForm.form.Div04.form.divEdtPop.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.divForm.form.Div04.form.divEdtPop.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_00","360","637","305","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("21");
            obj.set_readonly("true");
            obj.set_flexgrow("2");
            obj.set_displaynulltext("주소");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panAddress","200","641","100%","45",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("22");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divEdtPop\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edt00_00","0.00","46","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("23");
            obj.set_displaynulltext("상세주소");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01","20.00","0","980","156",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("24");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"panAddress\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Pnl0405","0","60","100.00%","166",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("25");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_01\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel040701","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("26");
            obj.set_text("개인정보 수집·이용 안내");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","171","111","100%","220",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("27");
            obj.set_readonly("false");
            obj.set_value("1. 개인정보의 수집ㆍ이용 목적\n  인계인수 신청 시 작성건의 접수와 처리를 위해 개인정보를 수집목적에 필요한 최소한의 범위 내에서 수집하고 있습니다.\n2. 수집하려는 개인정보의 항목\n  필수항목 : 총괄책임자 및 시설관리책임자 성명, 총괄책임자 및 시설관리책임자 휴대폰번호\n3. 개인정보의 보유 및 이용 기간\n  계약종료 후 3년, 회원탈퇴 시까지\n4. 동의를 거부할 권리와 거부에 따른 불이익 내용\n귀하는 개인정보 수집에 거부할 권리가 있으며, 필수항목 수집을 거부할 경우 인계인수 승인요청서 작성건의 신청을 할 수 없습니다.");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Pnl04070101","10.00","98","100%","180",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("28");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"TextArea00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Pnl040701","10.00","98","480","240",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("29");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel040701\"/><PanelItem id=\"PanelItem05\" componentid=\"Pnl04070101\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Pnl0406","0","60","100.00%","183",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("80");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_horizontalgap("20");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Pnl040601\"/><PanelItem id=\"PanelItem03\" componentid=\"Pnl040602\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Pnl0407","0","60","100.00%","240",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("30");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Pnl040701\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel04080101","10","98","200","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("31");
            obj.set_text("개인정보 수집 (필수) 동의여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new CheckBox("chk00_00","200.00","128","150","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("32");
            obj.set_value("true");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Pnl04080101","41","937","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("33");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel04080101\"/><PanelItem id=\"PanelItem02\" componentid=\"chk00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_01","171","111","100%","120",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("34");
            obj.set_readonly("false");
            obj.set_value("개인정보(선택정보) 사용에 관한 안내\n선택항목에 해당하는 정보를 입력하지 않으셔도 서비스 이용에는 제한이 없습니다.\n수집하는 개인정보의 선택항목 외 모든 내용은 필수항목에서 안내된 내용과 동일합니다.\n○수집하는 개인정보의 선택항목\n입주자서비스포털 인터넷청구시스템 청구서용 이메일주소, 전자세금계산서용 이메일주소(단, 청구방식 이메일 선택시 \"청구서용 이메일주소\" 필수)");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Pnl04080102","10.00","98","100%","120",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("35");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"TextArea00_01\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Pnl040801","10.00","98","480","160",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("36");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Pnl04080101\"/><PanelItem id=\"PanelItem05\" componentid=\"Pnl04080102\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Pnl0408","0","60","100.00%","200",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("37");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Pnl040801\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel00_03_00_00_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("38");
            obj.set_text("개인정보 수집(필수) 동의여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Pnl0400901","10.00","98","480","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("39");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_03_00_00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"rdo00_01\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Pnl0409","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("40");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Pnl0400901\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Radio("rdo00_01","200.00","328","490","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("41");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div04_form_rdo00_01_innerdataset = new nexacro.NormalDataset("divForm_form_Div04_form_rdo00_01_innerdataset", obj);
            divForm_form_Div04_form_rdo00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">동의함</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">동의하지 않음(동의하지 않아도 서비스신청 가능합니다.</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div04_form_rdo00_01_innerdataset);
            obj.set_text("Select");
            obj.set_value("0");
            obj.set_index("0");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("42");
            obj.set_text("납부담당자 개인정보 수집이용동의서");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Button("Button00","813","76","120","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("43");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Button("btn_file_1_00","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("44");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("45");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panTitle00","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("46");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("Static00_00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("47");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("Static01_00","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("48");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("Static02_00","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("49");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panFileNum00","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("50");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1_00","512","135","125","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("51");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panBtnDel00","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("52");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_1_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("53");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("54");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_01","20","20","100%","30",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("55");
            obj.set_text("JPG,PNG,BMP,PDF만 첨부가능");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","192","1038","100.00%","80",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("56");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Grid00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00_00_00_01\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panFile00","0","42","100%","201",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("57");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_01_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel01_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("58");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("start");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staClmSe","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("62");
            obj.set_text("청구방식");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Radio("rdoClmMtd","127","203","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("63");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divForm_form_Div04_form_rdoClmMtd_innerdataset = new nexacro.NormalDataset("divForm_form_Div04_form_rdoClmMtd_innerdataset", obj);
            divForm_form_Div04_form_rdoClmMtd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">이메일</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">우편(등기)</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div04_form_rdoClmMtd_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Pnl040601","10.00","98","300","110",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("64");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staClmSe\"/><PanelItem id=\"PanelItem03\" componentid=\"rdoClmMtd\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staAcuntEmlAddr","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("65");
            obj.set_text("청구서 이메일주소");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edtAcuntEmlAddr1","10.00","158","30%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("66");
            obj.set_readonly("false");
            obj.set_displaynulltext("이메일 주소 입력");
            obj.set_flexgrow("1");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("Static03","507","1122","14","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("67");
            obj.set_text("@");
            obj.set_fittocontents("width");
            obj.set_textAlign("center");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edtAcuntEmlAddr2","10.00","158","30%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("68");
            obj.set_readonly("false");
            obj.set_displaynulltext("이메일 주소 입력");
            obj.set_flexgrow("1");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Combo("cboAcuntEmlAddr00","200.00","128","30%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("69");
            obj.set_innerdataset("dsEmlList");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panEmail","386","1172","100%","50",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("70");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"edtAcuntEmlAddr1\"/><PanelItem id=\"PanelItem03\" componentid=\"Static03\"/><PanelItem id=\"PanelItem02\" componentid=\"edtAcuntEmlAddr2\"/><PanelItem id=\"PanelItem04\" componentid=\"cboAcuntEmlAddr00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Pnl04060201","10.00","98","100%","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("71");
            obj.set_type("vertical");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staAcuntEmlAddr\"/><PanelItem id=\"PanelItem03\" componentid=\"panEmail\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staTxivEmlAddr","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("72");
            obj.set_text("전자세금계산서 이메일주소");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edtTxivEmlAddr1","10.00","158","30%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("73");
            obj.set_readonly("false");
            obj.set_displaynulltext("이메일 주소 입력");
            obj.set_flexgrow("1");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","507","1122","14","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("74");
            obj.set_text("@");
            obj.set_fittocontents("width");
            obj.set_textAlign("center");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edtTxivEmlAddr2","10.00","158","30%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("75");
            obj.set_readonly("false");
            obj.set_displaynulltext("이메일 주소 입력");
            obj.set_flexgrow("1");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Combo("cboTxivEmlAddr","200.00","128","30%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("76");
            obj.set_innerdataset("dsEmlList");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panEmail00_00","386","1172","100%","50",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("77");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"edtTxivEmlAddr1\"/><PanelItem id=\"PanelItem03\" componentid=\"Static03_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtTxivEmlAddr2\"/><PanelItem id=\"PanelItem04\" componentid=\"cboTxivEmlAddr\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Pnl04060202","10.00","98","100%","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("78");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTxivEmlAddr\"/><PanelItem id=\"PanelItem03\" componentid=\"panEmail00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Pnl040602","551","1140","300","172",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("79");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Pnl04060201\"/><PanelItem id=\"PanelItem02\" componentid=\"Pnl04060202\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("sub_tit05","1630","674","100%","66",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("25");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_02_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div05","0","30","100%","1000",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("0");
            obj.set_text("시설명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Pnl050101","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("1");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtfcltNm\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Pnl0501","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("2");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Pnl050101\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staLabel00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("3");
            obj.set_text("총괄책임자 및 시설관리책임자");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Pnl050201","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01\"/><PanelItem id=\"PanelItem03\" componentid=\"rdoRbprsnFcltMngRbprsnYn\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Pnl0502","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("5");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Pnl050201\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staLabel00_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("6");
            obj.set_text("총괄책임자 및 시설관리책임자 성명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Edit("edtRbprsnFcltMngRbprsnNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("7");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Pnl050301","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRbprsnFcltMngRbprsnNm\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("9");
            obj.set_text("총괄책임자 및 시설관리책임자 휴대폰번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Edit("edtRbprsnFcltMngRbprsnMblTelno","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("10");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Pnl050302","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("11");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRbprsnFcltMngRbprsnMblTelno\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Pnl0503","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("12");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Pnl050301\"/><PanelItem id=\"PanelItem02\" componentid=\"Pnl050302\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Radio("rdoRbprsnFcltMngRbprsnYn","200.00","328","393","49.37",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div05_form_rdoRbprsnFcltMngRbprsnYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div05_form_rdoRbprsnFcltMngRbprsnYn_innerdataset", obj);
            divForm_form_Div05_form_rdoRbprsnFcltMngRbprsnYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">신청자정보와 동일</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">신청자정보와 동일하지 않음</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div05_form_rdoRbprsnFcltMngRbprsnYn_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Edit("edtfcltNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("14");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staLabel050401","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("15");
            obj.set_text("개인정보 수집·이용 동의");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Pnl05040101","20.00","374","100%","336",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_TxtAreaBox");
            obj.set_spacing("8px 15px 8px 15px");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem03\" componentid=\"Static00_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Pnl050401","10.00","98","970","392",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("17");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel050401\"/><PanelItem id=\"PanelItem05\" componentid=\"Pnl05040101\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Pnl0504","0","60","100.00%","403",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("18");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Pnl050401\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel01","218","688","100%","200",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("21");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Static01\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("Static01","88","596","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("22");
            obj.set_text("▶ 개인정보 수집·이용 내역");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Grid("Grid00","86","552","100%","160",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("20");
            obj.set_binddataset("Dataset01");
            obj.set_autofittype("col");
            obj.set_useselcolor("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"350\"/><Column size=\"350\"/><Column size=\"240\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"100\"/></Rows><Band id=\"head\"><Cell text=\"수집이용항목\"/><Cell col=\"1\" text=\"수집목적\"/><Cell col=\"2\" text=\"보유기간\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"총괄책임자 및 시설관리책임자 성명,&#13;&#10;총괄책임자 및 시설관리책임자 휴대폰번호\" textAlign=\"center\" cssclass=\"CellTxtBlue\" wordWrap=\"char\"/><Cell col=\"1\" text=\"배정받은 공간에 대한 인계인수 관련&#13;&#10;서비스 신청,민원처리, 사후관리\" textAlign=\"center\" wordWrap=\"char\"/><Cell col=\"2\" text=\"계약종료 후 3년,&#13;&#10; 회원탈퇴 시까지\" textAlign=\"center\" cssclass=\"CellTxtBlue, CellLink, CellEnd\" wordWrap=\"char\"/></Band></Format></Formats>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("Static00","36","382","100%","60",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("19");
            obj.set_text("■ 인계인수 신청을 위한 개인정보 수집·이용 동의서\r\n입주자서비스포털은 <fc v=\'#1e4ebe\'>배정 받은 공간</fc>에 대한 <fc v=\'#1e4ebe\'>인계인수 신청</fc> 서비스 제공을 위해 아래와 같이 개인정보를 수집·이용 하고자 합니다.\r\n내용을 자세히 읽으신 후 동의 여부를 결정하여 주시길 바랍니다. ");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            obj.set_wordWrap("char");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("Static00_00","36","382","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("23");
            obj.set_text("※ 위의 개인정보 수집·이용에 대한 동의를 거부할 권리가 있습니다. 그러나 동의를 거부할 경우 인계인수  신청을 할 수 없습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_TxtRed");
            obj.set_wordWrap("char");
            obj.set_fittocontents("height");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staLabel050501","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("24");
            obj.set_text("개인정보 수집·이용 동의여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Pnl050501","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("25");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel050501\"/><PanelItem id=\"PanelItem02\" componentid=\"chk00_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Pnl0505","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("26");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Pnl050501\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new CheckBox("chk00_00","200.00","128","150","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("27");
            obj.set_value("true");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("28");
            obj.set_text("총괄책임자 및 시설관리책임자\r\n개인정보수집이용동의서");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_01","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("29");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnRbprsnWtcsFormDwnld\"/><PanelItem id=\"PanelItem02\" componentid=\"btn_file_1_00_01\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Pnl050601","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("30");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_01\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("31");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("32");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("33");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panFileNum00_00","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("34");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_00_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1_00_00","512","135","125","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("35");
            obj.set_text("파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panBtnDel00_00","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("36");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_1_00_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Pnl050602","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("37");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel00_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_01","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("38");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_01","20","20","100%","30",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("39");
            obj.set_text("JPG,PNG,BMP,PDF만 첨부가능");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Pnl050603","192","1038","100.00%","80",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("40");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Grid00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00_00_00_01\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Pnl0506","0","42","100%","201",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("41");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Pnl050601\"/><PanelItem id=\"PanelItem01\" componentid=\"Pnl050602\"/><PanelItem id=\"PanelItem03\" componentid=\"Pnl050603\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("btn_file_1_00_01","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("42");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("btnRbprsnWtcsFormDwnld","64.00","0","190","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("43");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_FileDw");
            obj.set_fittocontents("width");
            obj.set_enable("true");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("sub_tit07","1630","674","100%","70",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("49");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle06_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("6");
            obj.set_text("신청위치 정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnTitle01","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_text("");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("8");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnTitle01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_00","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("10");
            obj.set_text("신청자 정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnTitle02","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_text("");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_00","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("12");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnTitle02\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_01","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("14");
            obj.set_text("고객정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnTitle03","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_text("");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_01","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("16");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnTitle03\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_02","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("18");
            obj.set_text("청구정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnTitle04","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_text("");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_02","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("20");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnTitle04\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_02_00","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("22");
            obj.set_text("총괄책임자 및 시설관리책임자");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnTitle05","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_02_00","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("24");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnTitle05\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div07","0","30","100%","1227",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("50");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("Static00","537","84","100%","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("0");
            obj.set_text("1차사전미팅");
            obj.set_cssclass("sta_WF_Txt60018");
            obj.set_fittocontents("width");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("1");
            obj.set_text("미팅일");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","0","0","100%","40",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","10.00","98","305","132",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Static00\"/><PanelItem id=\"PanelItem02\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem03\" componentid=\"Calendar00\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("Panel11_00","685","150","305","1",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("4");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","0","100%","300",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("75");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Button01\"/><PanelItem id=\"PanelItem01\" componentid=\"Grid00_02\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","152",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("5");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel11_00\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("staLabel01_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("6");
            obj.set_text("미팅내용");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Edit("edt01_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("Panel01_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"edt01_01\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("9");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_01\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("panFile","0","42","100.00%","161",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("43");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00_00\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("Static03_01","537","84","100%","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("10");
            obj.set_text("2차사전미팅");
            obj.set_cssclass("sta_WF_Txt60018");
            obj.set_fittocontents("width");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("staLabel03_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("11");
            obj.set_text("미팅일");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Calendar("Calendar03_01","0","0","100%","40",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("Panel03_01","10.00","98","305","132",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("13");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Static03_01\"/><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Calendar03_01\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("Panel03_02","685","150","305","1",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("14");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("pan04","0","60","100.00%","152",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("15");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel03_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel03_02\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("staLabel04_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("16");
            obj.set_text("미팅내용");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Edit("edt04_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("17");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("Panel04_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("18");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel04_01\"/><PanelItem id=\"PanelItem02\" componentid=\"edt04_01\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("pan05","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("19");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel04_01\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("panFile00","0","42","100.00%","161",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("57");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("Static06_01","537","84","100%","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("20");
            obj.set_text("3차사전미팅");
            obj.set_cssclass("sta_WF_Txt60018");
            obj.set_fittocontents("width");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("staLabel06_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("21");
            obj.set_text("미팅일");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Calendar("Calendar06_01","0","0","100%","40",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("22");
            obj.set_readonly("true");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("Panel06_01","10.00","98","305","132",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("23");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Static06_01\"/><PanelItem id=\"PanelItem00\" componentid=\"staLabel06_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Calendar06_01\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("Pane06_02","685","150","305","1",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("24");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("pan07","0","60","100.00%","152",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("25");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel06_01\"/><PanelItem id=\"PanelItem00\" componentid=\"Pane06_02\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("staLabel07_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("26");
            obj.set_text("미팅내용");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Edit("edt07_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("27");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("Panel07_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("28");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel07_01\"/><PanelItem id=\"PanelItem02\" componentid=\"edt07_01\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("pan08","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("29");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel07_01\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("staLabel00_02","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("30");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Button("Button00","813","76","120","34",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("31");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Button("btn_file_1","124","58","116","34",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("32");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("panBtnFile","433","58","305","34",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("33");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("panTitle","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("34");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj.set_spacing("0px 0px 10px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Button("Button01","272","279","116","42",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("77");
            obj.set_text("Button01");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("Static00_00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("35");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("Static01","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("36");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("Static02","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("37");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("panFileNum","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("38");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1","512","135","125","34",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("39");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("panBtnDel","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("40");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_1\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("41");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","308","281","57","121",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("76");
            obj._setContents("");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Grid("Grid00","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("42");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("44");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Button("Button00_00","813","76","120","34",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("45");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00","433","58","305","34",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("47");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_00\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Button("btn_file_1_00","124","58","116","34",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("46");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("Static01_00","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("50");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("49");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("panTitle00","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("48");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj.set_spacing("0px 0px 10px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("Static02_00","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("51");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("58");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("panFileNum00","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("52");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_00\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1_00","512","135","125","34",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("53");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Button("btn_file_1_01","124","58","116","34",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("60");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("panBtnDel00","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("54");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_1_00\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("panBtnFile01","433","58","305","34",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("61");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_01\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_01\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("panTitle01","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("62");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj.set_spacing("0px 0px 10px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile01\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("56");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Button("Button00_01","813","76","120","34",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("59");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("63");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1_01","512","135","125","34",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("67");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("69");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum01\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel01\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Grid("Grid00_01","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("70");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("panFile01","0","42","100.00%","161",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("71");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_01\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("pan09","20.00","1221","100.00%","210",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("72");
            obj.set_type("horizontal");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("20");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Grid("Grid00_02","0","-4542","970","300",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("74");
            obj.set_binddataset("Dataset02");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"단계\"/><Cell col=\"1\" text=\"협조업무\"/><Cell col=\"2\" text=\"담당부서(처리그룹)\"/><Cell col=\"3\" text=\"담당자\"/><Cell col=\"4\" text=\"연락처(내선번호)\"/><Cell col=\"5\" text=\"검토의견\"/><Cell col=\"6\" text=\"처리결과(승인,불승인)\"/><Cell col=\"7\" text=\"확인일시\"/><Cell col=\"8\" text=\"차수\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:단계\"/><Cell col=\"1\" text=\"bind:협조업무\"/><Cell col=\"2\" text=\"bind:담당부서\"/><Cell col=\"3\" text=\"bind:담당자\"/><Cell col=\"4\" text=\"bind:연락처\"/><Cell col=\"5\" text=\"bind:검토의견\"/><Cell col=\"6\" text=\"bind:처리결과\"/><Cell col=\"7\" text=\"bind:확인일시\"/><Cell col=\"8\" text=\"bind:차수\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","0","-4586","100.00%","45",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("73");
            obj.set_text("담당부서 검토의견");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("55");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel00\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("Static02_01","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("65");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("panFileNum01","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("66");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_01\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("panBtnDel01","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("68");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_1_01\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("Static01_01","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("64");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("staSubTitle06_02","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("26");
            obj.set_text("인계인수 정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button01_02","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("27");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_03","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("28");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button01_02\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit09","1630","674","100%","70",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("29");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle06_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_03\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div09","0","30","100%","1965",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("30");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("Static00_00","537","84","100%","46",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("0");
            obj.set_text("인계인수상태(건축마감상태)");
            obj.set_cssclass("sta_WF_Txt60018");
            obj.set_fittocontents("width");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Static("staLabel00_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("1");
            obj.set_text("바닥상태");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Edit("staLabel00_00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Panel("Panel00","10.00","98","305","132",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Static00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"staLabel00_00\"/></Contents>");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Panel("Pal00","0","60","100.00%","143",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("4");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/></Contents>");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Static("staLabel01_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("5");
            obj.set_text("벽체상태");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Edit("edt01_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Panel("Panel01_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt01_01\"/></Contents>");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Panel("Pal01","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("8");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_01\"/></Contents>");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Static("staLabel02_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("9");
            obj.set_text("천장상태");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Edit("edt02_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Panel("Panel02_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("11");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt02_01\"/></Contents>");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Panel("Pal02","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("12");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_01\"/></Contents>");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Static("staLabel03_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("13");
            obj.set_text("기타상태");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Edit("edt03_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Panel("Panel03_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt03_01\"/></Contents>");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Panel("Pal03","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("16");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel03_01\"/></Contents>");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Static("Static04_01","537","84","100%","46",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("17");
            obj.set_text("인계인수상태(설비시설상태)");
            obj.set_cssclass("sta_WF_Txt60018");
            obj.set_fittocontents("width");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Static("staLabel04_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("18");
            obj.set_text("기계상태");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Edit("edt04_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Panel("Panel04_01","10.00","98","305","132",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("20");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Static04_01\"/><PanelItem id=\"PanelItem00\" componentid=\"staLabel04_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt04_01\"/></Contents>");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Panel("Pal04","0","60","100.00%","143",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("21");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel04_01\"/></Contents>");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Static("staLabel05_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("22");
            obj.set_text("전기상태");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Edit("edt05_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("23");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Panel("Panel05_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("24");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt05_01\"/></Contents>");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Panel("Pal05","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("25");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel05_01\"/></Contents>");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Static("staLabel06_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("26");
            obj.set_text("통신상태");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Edit("edt06_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("27");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Panel("Panel06_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("28");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel06_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt06_01\"/></Contents>");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Panel("Pal06","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("29");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel06_01\"/></Contents>");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Static("staLabel07_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("30");
            obj.set_text("소방상태");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Edit("edt07_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("31");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Panel("Panel07_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("32");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel07_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt07_01\"/></Contents>");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Panel("Pal07","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("33");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel07_01\"/></Contents>");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Static("staLabel08_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("34");
            obj.set_text("보안상태");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Edit("edt08_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("35");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Panel("Panel08_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("36");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel08_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt08_01\"/></Contents>");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Panel("Pal08","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("37");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel08_01\"/></Contents>");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Static("staLabel09_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("38");
            obj.set_text("기타상태");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Edit("edt09_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("39");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Panel("Panel09_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("40");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel09_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt09_01\"/></Contents>");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Panel("Pal09","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("41");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel09_01\"/></Contents>");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Static("Static10_01","537","84","100%","46",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("42");
            obj.set_text("인계인수정보");
            obj.set_cssclass("sta_WF_Txt60018");
            obj.set_fittocontents("width");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Static("staLabel10_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("43");
            obj.set_text("인계인수 일시");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Calendar("Calendar10_02","98","1124","50%","40",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("44");
            obj.set_readonly("true");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Combo("cbo10_02","334","1124","25%","40",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("45");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displaynulltext("선택");
            obj.set_readonly("true");
            var divForm_form_Div09_form_cbo10_02_innerdataset = new nexacro.NormalDataset("divForm_form_Div09_form_cbo10_02_innerdataset", obj);
            divForm_form_Div09_form_cbo10_02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">00</Col><Col id=\"datacolumn\">00</Col></Row><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">01</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">02</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">03</Col></Row><Row><Col id=\"codecolumn\">04</Col><Col id=\"datacolumn\">04</Col></Row><Row><Col id=\"codecolumn\">05</Col><Col id=\"datacolumn\">05</Col></Row><Row><Col id=\"codecolumn\">06</Col><Col id=\"datacolumn\">06</Col></Row><Row><Col id=\"codecolumn\">07</Col><Col id=\"datacolumn\">07</Col></Row><Row><Col id=\"codecolumn\">08</Col><Col id=\"datacolumn\">08</Col></Row><Row><Col id=\"codecolumn\">09</Col><Col id=\"datacolumn\">09</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">11</Col><Col id=\"datacolumn\">11</Col></Row><Row><Col id=\"codecolumn\">12</Col><Col id=\"datacolumn\">12</Col></Row><Row><Col id=\"codecolumn\">13</Col><Col id=\"datacolumn\">13</Col></Row><Row><Col id=\"codecolumn\">14</Col><Col id=\"datacolumn\">14</Col></Row><Row><Col id=\"codecolumn\">15</Col><Col id=\"datacolumn\">15</Col></Row><Row><Col id=\"codecolumn\">16</Col><Col id=\"datacolumn\">16</Col></Row><Row><Col id=\"codecolumn\">17</Col><Col id=\"datacolumn\">17</Col></Row><Row><Col id=\"codecolumn\">18</Col><Col id=\"datacolumn\">18</Col></Row><Row><Col id=\"codecolumn\">19</Col><Col id=\"datacolumn\">19</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">21</Col><Col id=\"datacolumn\">21</Col></Row><Row><Col id=\"codecolumn\">22</Col><Col id=\"datacolumn\">22</Col></Row><Row><Col id=\"codecolumn\">23</Col><Col id=\"datacolumn\">23</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div09_form_cbo10_02_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Static("Static00","544.00","1124","13","40",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("46");
            obj.set_text("시");
            obj.set_fittocontents("width");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Static("Static01","778.00","1124","13","40",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("47");
            obj.set_text("분");
            obj.set_fittocontents("width");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Panel("Panel10_02","98.00","1124","100%","40",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("48");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Calendar10_02\"/><PanelItem id=\"PanelItem01\" componentid=\"cbo10_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Static00\"/><PanelItem id=\"PanelItem06\" componentid=\"edt11_02_00\"/><PanelItem id=\"PanelItem04\" componentid=\"Static01\"/></Contents>");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Panel("Panel10_01","10.00","98","305","132",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("49");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Static10_01\"/><PanelItem id=\"PanelItem01\" componentid=\"staLabel10_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel10_02\"/></Contents>");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Panel("Panel11_00_00","685","150","305","1",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("50");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Panel("Pal10","0","60","100.00%","143",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("51");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel10_01\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel11_00_00\"/></Contents>");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Edit("edt11_02_00","400","1146","25%","40",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("101");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Static("staLabel11_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("52");
            obj.set_text("입회자 유지보수팀");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Edit("edt11_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("53");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Panel("Panel11_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("54");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel11_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt11_01\"/></Contents>");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Static("staLabel11_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("55");
            obj.set_text("입회자 성명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Edit("edt11_02","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("56");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Panel("Panel11_02","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("57");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel11_02\"/><PanelItem id=\"PanelItem01\" componentid=\"edt11_02\"/></Contents>");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Panel("Pal11","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("58");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel11_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel11_02\"/></Contents>");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Static("staLabel12_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("59");
            obj.set_text("인계자 소속");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Edit("edt12_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("60");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Panel("Panel12_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("61");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel12_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt12_01\"/></Contents>");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Static("staLabel12_02","894.00","1340","100%","46",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("62");
            obj.set_text("인계자 직위");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Edit("edt12_02","894.00","1386","100%","40",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("63");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Panel("Panel12_02","894.00","1340","305","86",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("64");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel12_02\"/><PanelItem id=\"PanelItem01\" componentid=\"edt12_02\"/></Contents>");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Panel("Pal12","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("65");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel12_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel12_02\"/></Contents>");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Static("staLabel13_1","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("66");
            obj.set_text("인계자 성명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Edit("edt13_1","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("67");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Panel("Panel13_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("68");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel13_1\"/><PanelItem id=\"PanelItem01\" componentid=\"edt13_1\"/></Contents>");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Panel("Panel13_02","685","150","305","1",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("69");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Panel("Pal13","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("70");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel13_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel13_02\"/></Contents>");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Static("staLabel14_01","50.00","1413","100.00%","46",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("71");
            obj.set_text("인수자 소속");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Edit("edt14_01","20.00","1436","100.00%","40",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("72");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Panel("Panel14_01","25.00","1420","475","86",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("73");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel14_01\"/><PanelItem id=\"PanelItem02\" componentid=\"edt14_01\"/></Contents>");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Static("staLabel14_02","600.00","1410","100.00%","46",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("74");
            obj.set_text("인수자 직위");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Edit("edt14_02","554.00","1436","100.00%","40",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("75");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Panel("Panel14_02","520.00","1420","475","86",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("76");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel14_02\"/><PanelItem id=\"PanelItem02\" componentid=\"edt14_02\"/></Contents>");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Panel("Pal14","5","1420","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("77");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel14_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel14_02\"/></Contents>");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Static("staLabel15","0.00","2030","100.00%","43",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("78");
            obj.set_text("인수자 성명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Edit("edt15","0.00","2102","100.00%","37",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("79");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Panel("Panel15","71.00","1527","475","86",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("80");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel15\"/><PanelItem id=\"PanelItem02\" componentid=\"edt15\"/></Contents>");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Panel("Panel11_00","566.00","1527","475","1",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("81");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Panel("Pal15","51","1527","100.00%","93",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("82");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel15\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel11_00\"/></Contents>");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Static("staLabel16","0.00","2030","100.00%","43",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("83");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new TextArea("txa16","200.00","728","100%","100",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("84");
            obj.set_displaynulltext("내용 입력");
            obj.set_readonly("true");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Panel("Panel16","71.00","1527","475","120",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("85");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel16\"/><PanelItem id=\"PanelItem03\" componentid=\"txa16\"/></Contents>");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Panel("Pal16","51","1527","100.00%","130",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("86");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel16\"/></Contents>");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("87");
            obj.set_text("현장사진");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Button("Button00","813","76","120","34",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("88");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Button("btn_file_1","124","58","116","34",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("89");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Panel("panBtnFile","433","58","305","34",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("90");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1\"/></Contents>");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Panel("panTitle","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("91");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj.set_spacing("0px 0px 10px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile\"/></Contents>");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("92");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Static("Static01_00","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("93");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Static("Static02","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("94");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Panel("panFileNum","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("95");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02\"/></Contents>");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1","512","135","125","34",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("96");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Panel("panBtnDel","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("97");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_1\"/></Contents>");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("98");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel\"/></Contents>");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Grid("Grid00","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("99");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Panel("panFile","0","42","100.00%","161",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("100");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00\"/></Contents>");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Static("staSubTitle06_03","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("31");
            obj.set_text("처리내역");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button01_03","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("32");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_04","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("33");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button01_03\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit10","1630","674","100%","70",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("34");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle06_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_04\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div10","0","30","100%","681",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("35");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div10.form);
            obj.set_taborder("0");
            obj.set_text("전달사항");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div10.addChild(obj.name, obj);

            obj = new TextArea("txa00_01","43","1193","100%","100",null,null,null,null,null,null,this.divForm.form.Div10.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("내용입력");
            obj.set_readonly("false");
            this.divForm.form.Div10.addChild(obj.name, obj);

            obj = new Static("sta00_01","43.00","1383","100%","33",null,null,null,null,null,null,this.divForm.form.Div10.form);
            obj.set_taborder("2");
            obj.set_text("미팅요청 일시/담당자 및 연락처 등 기입");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div10.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","43.00","1193","100%","143",null,null,null,null,null,null,this.divForm.form.Div10.form);
            obj.set_taborder("3");
            obj.set_background("#ffffff");
            obj.set_verticalgap("10");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"txa00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"sta00_01\"/></Contents>");
            this.divForm.form.Div10.addChild(obj.name, obj);

            obj = new Panel("Panel00","20.00","950","970","189",null,null,null,null,null,null,this.divForm.form.Div10.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_01\"/></Contents>");
            this.divForm.form.Div10.addChild(obj.name, obj);

            obj = new Panel("Pal00","51","1527","100.00%","200",null,null,null,null,null,null,this.divForm.form.Div10.form);
            obj.set_taborder("5");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/></Contents>");
            this.divForm.form.Div10.addChild(obj.name, obj);

            obj = new Panel("panFile","0","42","100.00%","161",null,null,null,null,null,null,this.divForm.form.Div10.form);
            obj.set_taborder("27");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00\"/></Contents>");
            this.divForm.form.Div10.addChild(obj.name, obj);

            obj = new Static("staLabel14_01","50.00","1413","100.00%","46",null,null,null,null,null,null,this.divForm.form.Div10.form);
            obj.set_taborder("6");
            obj.set_text("문서출력");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div10.addChild(obj.name, obj);

            obj = new Button("Button01","938","414","163","40",null,null,null,null,null,null,this.divForm.form.Div10.form);
            obj.set_taborder("7");
            obj.set_text("인계인수확인서 출력");
            obj.set_fittocontents("width");
            this.divForm.form.Div10.addChild(obj.name, obj);

            obj = new Panel("Panel14_01","25.00","1420","475","86",null,null,null,null,null,null,this.divForm.form.Div10.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel14_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Button01\"/></Contents>");
            this.divForm.form.Div10.addChild(obj.name, obj);

            obj = new Panel("Pal02","5","1420","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div10.form);
            obj.set_taborder("9");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel14_01\"/></Contents>");
            this.divForm.form.Div10.addChild(obj.name, obj);

            obj = new Static("staLabel02_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div10.form);
            obj.set_taborder("10");
            obj.set_text("협조 처리내역");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div10.addChild(obj.name, obj);

            obj = new Grid("Grid00","20.00","94","100.00%","165",null,null,null,null,null,null,this.divForm.form.Div10.form);
            obj.set_taborder("11");
            obj.set_binddataset("Dataset02");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"단계\"/><Cell col=\"1\" text=\"협조업무\"/><Cell col=\"2\" text=\"담당부서(처리그룹)\"/><Cell col=\"3\" text=\"담당자\"/><Cell col=\"4\" text=\"연락처(내선번호)\"/><Cell col=\"5\" text=\"처리결과(승인,불승인)\"/><Cell col=\"6\" text=\"확인일시\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:단계\"/><Cell col=\"1\" text=\"bind:협조업무\"/><Cell col=\"2\" text=\"bind:담당부서\"/><Cell col=\"3\" text=\"bind:담당자\"/><Cell col=\"4\" text=\"bind:연락처\"/><Cell col=\"5\" text=\"bind:처리결과\"/><Cell col=\"6\" text=\"bind:확인일시\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.divForm.form.Div10.addChild(obj.name, obj);

            obj = new Panel("Panel02_01","20.00","50","970","210",null,null,null,null,null,null,this.divForm.form.Div10.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Grid00\"/></Contents>");
            this.divForm.form.Div10.addChild(obj.name, obj);

            obj = new Panel("Pal03","0","46","100.00%","224",null,null,null,null,null,null,this.divForm.form.Div10.form);
            obj.set_taborder("13");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_01\"/></Contents>");
            this.divForm.form.Div10.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div10.form);
            obj.set_taborder("14");
            obj.set_text("기본시설물 체크리스트");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.divForm.form.Div10.addChild(obj.name, obj);

            obj = new Button("Button00","813","76","120","34",null,null,null,null,null,null,this.divForm.form.Div10.form);
            obj.set_taborder("15");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div10.addChild(obj.name, obj);

            obj = new Button("btn_file_1","124","58","116","34",null,null,null,null,null,null,this.divForm.form.Div10.form);
            obj.set_taborder("16");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.divForm.form.Div10.addChild(obj.name, obj);

            obj = new Panel("panBtnFile","433","58","305","34",null,null,null,null,null,null,this.divForm.form.Div10.form);
            obj.set_taborder("17");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1\"/></Contents>");
            this.divForm.form.Div10.addChild(obj.name, obj);

            obj = new Panel("panTitle","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div10.form);
            obj.set_taborder("18");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj.set_spacing("0px 0px 10px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile\"/></Contents>");
            this.divForm.form.Div10.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div10.form);
            obj.set_taborder("19");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div10.addChild(obj.name, obj);

            obj = new Static("Static01_00","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div10.form);
            obj.set_taborder("20");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div10.addChild(obj.name, obj);

            obj = new Static("Static02","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div10.form);
            obj.set_taborder("21");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div10.addChild(obj.name, obj);

            obj = new Panel("panFileNum","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div10.form);
            obj.set_taborder("22");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02\"/></Contents>");
            this.divForm.form.Div10.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1","512","135","125","34",null,null,null,null,null,null,this.divForm.form.Div10.form);
            obj.set_taborder("23");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div10.addChild(obj.name, obj);

            obj = new Panel("panBtnDel","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div10.form);
            obj.set_taborder("24");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_1\"/></Contents>");
            this.divForm.form.Div10.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div10.form);
            obj.set_taborder("25");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel\"/></Contents>");
            this.divForm.form.Div10.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div10.form);
            obj.set_taborder("26");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div10.addChild(obj.name, obj);

            obj = new Static("staSubTitle06_04","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("36");
            obj.set_text("인계인수 지적사항");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button01_04","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("37");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_05","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("38");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button01_04\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit11","1630","674","100%","70",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("39");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle06_04\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_05\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div11","0","30","100%","337",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("40");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabell07_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div11.form);
            obj.set_taborder("0");
            obj.set_text("인계인수지적사항 공종별 LIST");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div11.addChild(obj.name, obj);

            obj = new Grid("Grid00","279","92","100%","270",null,null,null,null,null,null,this.divForm.form.Div11.form);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset04");
            obj.set_autofittype("col");
            obj.set_visible("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"48\"/><Row size=\"48\"/><Row size=\"48\"/><Row size=\"48\"/><Row size=\"48\"/></Rows><Band id=\"body\"><Cell text=\"건축지적사항 LIST\" cssclass=\"CellBtn\" displaytype=\"buttoncontrol\" edittype=\"button\"/><Cell col=\"1\" text=\"(지적사항:없음)\" displaytype=\"editcontrol\" edittype=\"normal\" cssclass=\"CellEnd\"/><Cell row=\"1\" cssclass=\"CellBtn\" text=\"기계지적사항 LIST\" displaytype=\"buttoncontrol\" edittype=\"button\"/><Cell row=\"1\" col=\"1\" displaytype=\"editcontrol\" edittype=\"normal\" text=\"(지적사항:없음)\" cssclass=\"CellEnd\"/><Cell row=\"2\" cssclass=\"CellBtn\" text=\"전기지적사항 LIST\" edittype=\"button\" displaytype=\"buttoncontrol\"/><Cell row=\"2\" col=\"1\" displaytype=\"editcontrol\" edittype=\"normal\" text=\"(지적사항:없음)\" cssclass=\"CellEnd\"/><Cell row=\"3\" cssclass=\"CellBtn\" text=\"통신지적사항 LIST\" displaytype=\"buttoncontrol\" edittype=\"button\"/><Cell row=\"3\" col=\"1\" displaytype=\"editcontrol\" edittype=\"normal\" text=\"(지적사항:없음)\" cssclass=\"CellEnd\"/><Cell row=\"4\" cssclass=\"CellBtn\" text=\"기타지적사항 LIST\" displaytype=\"buttoncontrol\" edittype=\"button\"/><Cell row=\"4\" col=\"1\" displaytype=\"editcontrol\" edittype=\"normal\" text=\"(지적사항:없음)\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.divForm.form.Div11.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","337",null,null,null,null,null,null,this.divForm.form.Div11.form);
            obj.set_taborder("2");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabell07_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Grid00\"/></Contents>");
            this.divForm.form.Div11.addChild(obj.name, obj);

            obj = new Static("staSubTitle06_05","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("41");
            obj.set_text("룸번호 열쇠정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button01_05","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("42");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_06","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("43");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button01_05\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit12","1630","674","100%","70",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("44");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle06_05\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_06\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div12","0","30","100%","232",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("45");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","232",null,null,null,null,null,null,this.divForm.form.Div12.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel02_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Grid00_00\"/></Contents>");
            this.divForm.form.Div12.addChild(obj.name, obj);

            obj = new Static("staLabel02_01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div12.form);
            obj.set_taborder("1");
            obj.set_text("룸번호열쇠정보");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div12.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","20.00","94","100.00%","165",null,null,null,null,null,null,this.divForm.form.Div12.form);
            obj.set_taborder("2");
            obj.set_binddataset("Dataset02");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"룸번호\"/><Cell col=\"1\" text=\"코어번호\"/><Cell col=\"2\" text=\"비고\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.divForm.form.Div12.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","129","10867","84","62",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("53");
            obj.set_text("1231");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00","129","10867","84","62",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("51");
            obj.set_text("Button00");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","129","10867","84","62",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("54");
            obj.set_text("1231");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_01","129","10867","84","62",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("55");
            obj.set_text("1231");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00","129","10867","84","62",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("52");
            obj.set_text("Button00");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle06_00_00","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("46");
            obj.set_text("사전미팅내역");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button01_00_00","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("47");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("48");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button01_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divQuick",null,"62","296","245","62",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickMenu");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Button("btnTitleMove01","17","20","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("0");
            obj.set_text("신청위치 정보");
            obj.set_cssclass("btn_WF_Quick_S");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btnTitleMove02","17.00","btnTitleMove01:0","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("1");
            obj.set_text("신청자 정보");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btnTitleMove03","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("2");
            obj.set_text("고객정보");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btnTitleMove04","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("3");
            obj.set_text("청구정보");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btnTitleMove05","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("4");
            obj.set_text("총괄책임자 및 시설관리책임자");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btnTitleMove03_00","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("5");
            obj.set_text("고객정보");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btnTitleMove03_01","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("6");
            obj.set_text("고객정보");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Div("divCtlBtnGrp",null,"divQuick:0","296","181","62",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("divCtlBtnGrp");
            obj.set_cssclass("div_WF_QuickBtnBg");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

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

            obj = new Button("Button00","240","751","44","29",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","-10","16724","57","39",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divInfoGuide.form
            obj = new Layout("default","",0,0,this.divForm.form.divInfoGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnGuide.set_taborder("0");
                p.btnGuide.set_cssclass("btn_WF_ACMinus");
                p.btnGuide.move(null,"10","34","34","10",null);
            	}
            );
            this.divForm.form.divInfoGuide.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divInfoGuide.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divInfoGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.divInfoGuide.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divInfoGuide.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divInfoGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.divInfoGuide.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divInfoGuide.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divInfoGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.divInfoGuide.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div01.form.divEdtCtrtNm.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01.form.divEdtCtrtNm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.edtCtrtNm.set_taborder("0");
                p.edtCtrtNm.set_cssclass("edt_WF_EdtSch");
                p.edtCtrtNm.set_readonly("true");
                p.edtCtrtNm.move("0","0",null,"40","0",null);

                p.btnPop.set_taborder("1");
                p.btnPop.set_cssclass("btn_WF_EdtSch");
                p.btnPop.move("edtCtrtNm:-40","0","40","40",null,null);
            	}
            );
            this.divForm.form.Div01.form.divEdtCtrtNm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div01.form.divEdtCtrtNm.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div01.form.divEdtCtrtNm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.Div01.form.divEdtCtrtNm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div01.form.divEdtCtrtNm.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div01.form.divEdtCtrtNm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.Div01.form.divEdtCtrtNm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div01.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel04.set_taborder("27");
                p.Panel04.set_horizontalgap("10");
                p.Panel04.move("0","31","100%","40",null,null);

                p.Panel00_00.set_taborder("23");
                p.Panel00_00.set_horizontalgap("20");
                p.Panel00_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00.set_flexwrap("wrap");
                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.set_verticalgap("0");
                p.Panel00_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00.move("0","60","100.00%","96",null,null);

                p.Panel00.set_taborder("0");
                p.Panel00.set_horizontalgap("20");
                p.Panel00.set_flexcrossaxiswrapalign("start");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_verticalgap("0");
                p.Panel00.set_spacing("0px 20px 10px 20px");
                p.Panel00.set_cssclass("pal_WF_DtlBg");
                p.Panel00.move("0","60","100.00%","96",null,null);

                p.staLabel01_00.set_taborder("1");
                p.staLabel01_00.set_text("회사명");
                p.staLabel01_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00.move("10","98","100%","46",null,null);

                p.edtMvnPicCoNm.set_taborder("2");
                p.edtMvnPicCoNm.set_readonly("true");
                p.edtMvnPicCoNm.move("10.00","158","100%","40",null,null);

                p.Panel01_00.set_taborder("3");
                p.Panel01_00.set_type("vertical");
                p.Panel01_00.set_flexgrow("1");
                p.Panel01_00.move("10.00","98","305","86",null,null);

                p.staLabel01_01.set_taborder("4");
                p.staLabel01_01.set_text("계약번호");
                p.staLabel01_01.set_cssclass("sta_WF_Label");
                p.staLabel01_01.move("10","98","100%","46",null,null);

                p.Panel01_01.set_taborder("5");
                p.Panel01_01.set_type("vertical");
                p.Panel01_01.set_flexgrow("1");
                p.Panel01_01.move("10.00","98","305","86",null,null);

                p.Panel01.set_taborder("6");
                p.Panel01.set_horizontalgap("20");
                p.Panel01.set_flexcrossaxiswrapalign("start");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_verticalgap("0");
                p.Panel01.set_spacing("0px 20px 10px 20px");
                p.Panel01.set_cssclass("pal_WF_DtlBg");
                p.Panel01.set_flexshrink("1");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_visible("true");
                p.Panel01.move("0","60","100.00%","96",null,null);

                p.staLabel01_02.set_taborder("7");
                p.staLabel01_02.set_text("계약명");
                p.staLabel01_02.set_cssclass("sta_WF_Label_E");
                p.staLabel01_02.set_visible("false");
                p.staLabel01_02.move("10","98","100%","46",null,null);

                p.Panel01_02.set_taborder("8");
                p.Panel01_02.set_type("vertical");
                p.Panel01_02.set_flexgrow("1");
                p.Panel01_02.set_visible("true");
                p.Panel01_02.set_fittocontents("height");
                p.Panel01_02.move("10.00","98","305","86",null,null);

                p.staLabel01_02_01.set_taborder("9");
                p.staLabel01_02_01.set_text("위치구분");
                p.staLabel01_02_01.set_cssclass("sta_WF_Label_E");
                p.staLabel01_02_01.move("10","98","100%","46",null,null);

                p.Panel02_01.set_taborder("10");
                p.Panel02_01.set_type("vertical");
                p.Panel02_01.set_flexgrow("1");
                p.Panel02_01.set_fittocontents("none");
                p.Panel02_01.move("10.00","98","305","86",null,null);

                p.Panel02.set_taborder("11");
                p.Panel02.set_horizontalgap("20");
                p.Panel02.set_flexcrossaxiswrapalign("start");
                p.Panel02.set_flexwrap("wrap");
                p.Panel02.set_verticalgap("0");
                p.Panel02.set_spacing("0px 20px 10px 20px");
                p.Panel02.set_cssclass("pal_WF_DtlBg");
                p.Panel02.set_flexshrink("1");
                p.Panel02.set_fittocontents("height");
                p.Panel02.move("0","60","100.00%","96",null,null);

                p.cmbRgnSeCd.set_taborder("12");
                p.cmbRgnSeCd.set_innerdataset("dsRgnSeList");
                p.cmbRgnSeCd.set_codecolumn("cdId");
                p.cmbRgnSeCd.set_datacolumn("cdNm");
                p.cmbRgnSeCd.set_displaynulltext("선택");
                p.cmbRgnSeCd.set_text("");
                p.cmbRgnSeCd.set_index("-1");
                p.cmbRgnSeCd.move("20","226","100%","40",null,null);

                p.edtCtrtNo.set_taborder("13");
                p.edtCtrtNo.set_readonly("false");
                p.edtCtrtNo.move("10.00","158","100%","40",null,null);

                p.Panel02_01_01.set_taborder("16");
                p.Panel02_01_01.set_horizontalgap("10");
                p.Panel02_01_01.move("308","232","100%","40",null,null);

                p.cmbPstnSeCd.set_taborder("15");
                p.cmbPstnSeCd.set_innerdataset("dsPstnSeList");
                p.cmbPstnSeCd.set_codecolumn("cdId");
                p.cmbPstnSeCd.set_datacolumn("cdNm");
                p.cmbPstnSeCd.set_displaynulltext("선택");
                p.cmbPstnSeCd.set_text("");
                p.cmbPstnSeCd.set_index("-1");
                p.cmbPstnSeCd.move("20","226","100.00%","40",null,null);

                p.divEdtCtrtNm.set_taborder("14");
                p.divEdtCtrtNm.set_text("Div00");
                p.divEdtCtrtNm.set_formscrollbartype("none none");
                p.divEdtCtrtNm.set_formscrolltype("none");
                p.divEdtCtrtNm.set_flexgrow("1");
                p.divEdtCtrtNm.set_visible("false");
                p.divEdtCtrtNm.move("280","274","100%","40",null,null);

                p.cmbBldgSeCd.set_taborder("17");
                p.cmbBldgSeCd.set_innerdataset("dsBldgSeList");
                p.cmbBldgSeCd.set_codecolumn("cdId");
                p.cmbBldgSeCd.set_datacolumn("cdNm");
                p.cmbBldgSeCd.set_displaynulltext("선택");
                p.cmbBldgSeCd.set_visible("false");
                p.cmbBldgSeCd.set_text("");
                p.cmbBldgSeCd.set_index("-1");
                p.cmbBldgSeCd.move("20","226","100.00%","40",null,null);

                p.radioCtrtChcYn.set_taborder("24");
                p.radioCtrtChcYn.set_innerdataset(divForm_form_Div01_form_radioCtrtChcYn_innerdataset);
                p.radioCtrtChcYn.set_codecolumn("codecolumn");
                p.radioCtrtChcYn.set_datacolumn("datacolumn");
                p.radioCtrtChcYn.set_direction("vertical");
                p.radioCtrtChcYn.set_value("0");
                p.radioCtrtChcYn.set_index("1");
                p.radioCtrtChcYn.move("935","404","100%","40",null,null);

                p.staLabel01_02_01_00.set_taborder("18");
                p.staLabel01_02_01_00.set_text("위치정보(룸번호)");
                p.staLabel01_02_01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel01_02_01_00.move("10","98","100%","46",null,null);

                p.Panel01_01_01_00.set_taborder("19");
                p.Panel01_01_01_00.set_type("vertical");
                p.Panel01_01_01_00.set_flexgrow("1");
                p.Panel01_01_01_00.set_fittocontents("none");
                p.Panel01_01_01_00.move("10.00","98","100%","86",null,null);

                p.Panel03.set_taborder("20");
                p.Panel03.set_horizontalgap("20");
                p.Panel03.set_flexcrossaxiswrapalign("start");
                p.Panel03.set_flexwrap("wrap");
                p.Panel03.set_verticalgap("0");
                p.Panel03.set_spacing("0px 20px 10px 20px");
                p.Panel03.set_cssclass("pal_WF_DtlBg");
                p.Panel03.set_flexshrink("1");
                p.Panel03.set_fittocontents("height");
                p.Panel03.move("0","60","100.00%","96",null,null);

                p.staLabel01_00_00.set_taborder("21");
                p.staLabel01_00_00.set_text("계약선택여부");
                p.staLabel01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00.move("10","98","100%","46",null,null);

                p.Panel01_00_00.set_taborder("22");
                p.Panel01_00_00.set_type("vertical");
                p.Panel01_00_00.set_flexgrow("1");
                p.Panel01_00_00.move("10.00","98","305","86",null,null);

                p.edtRnb.set_taborder("25");
                p.edtRnb.set_cssclass("edt_WF_EdtSch");
                p.edtRnb.set_readonly("true");
                p.edtRnb.move("30","360","100%","40",null,null);

                p.btnPopRnbReg.set_taborder("26");
                p.btnPopRnbReg.set_text("룸번호등록");
                p.btnPopRnbReg.set_fittocontents("width");
                p.btnPopRnbReg.move("406","372","120","40",null,null);

                p.Button00_00.set_taborder("28");
                p.Button00_00.set_text("Button00");
                p.Button00_00.move("560","18","44","90",null,null);

                p.Button00_01.set_taborder("29");
                p.Button00_01.set_text("Button00");
                p.Button00_01.move("560","18","44","90",null,null);
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
                p.Panel02_01_01.set_type("vertical");
                p.Panel02_01_01.set_verticalgap("10");
                p.Panel02_01_01.set_fittocontents("height");

                p.Panel02_01.set_fittocontents("height");
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div02.form.divEdtPopAplcnt.form
            obj = new Layout("default","",0,0,this.divForm.form.Div02.form.divEdtPopAplcnt.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.edtAplcntNm.set_taborder("0");
                p.edtAplcntNm.set_cssclass("edt_WF_EdtSch");
                p.edtAplcntNm.set_readonly("true");
                p.edtAplcntNm.move("0","0",null,"40","0",null);

                p.btnPop.set_taborder("1");
                p.btnPop.set_cssclass("btn_WF_EdtSch");
                p.btnPop.move("edtAplcntNm:-40","0","40","40",null,null);
            	}
            );
            this.divForm.form.Div02.form.divEdtPopAplcnt.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div02.form.divEdtPopAplcnt.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div02.form.divEdtPopAplcnt.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.Div02.form.divEdtPopAplcnt.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div02.form.divEdtPopAplcnt.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div02.form.divEdtPopAplcnt.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.Div02.form.divEdtPopAplcnt.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div02.form
            obj = new Layout("default","",0,0,this.divForm.form.Div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_taborder("0");
                p.Panel00.set_horizontalgap("20");
                p.Panel00.set_flexcrossaxiswrapalign("start");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_verticalgap("0");
                p.Panel00.set_spacing("0px 20px 10px 20px");
                p.Panel00.set_cssclass("pal_WF_DtlBg");
                p.Panel00.set_type("horizontal");
                p.Panel00.move("0","60","100.00%","96",null,null);

                p.staLabel00.set_taborder("1");
                p.staLabel00.set_text("신청자");
                p.staLabel00.set_cssclass("sta_WF_Label");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.Panel00_00.set_taborder("2");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.set_minwidth("");
                p.Panel00_00.move("10.00","98","305","86",null,null);

                p.Panel01.set_taborder("3");
                p.Panel01.set_horizontalgap("20");
                p.Panel01.set_flexcrossaxiswrapalign("start");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_verticalgap("0");
                p.Panel01.set_spacing("0px 20px 10px 20px");
                p.Panel01.set_cssclass("pal_WF_DtlBg");
                p.Panel01.move("0","60","100.00%","96",null,null);

                p.staLabel00_00.set_taborder("4");
                p.staLabel00_00.set_text("휴대폰 번호");
                p.staLabel00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00.move("10","98","100%","46",null,null);

                p.Panel00_00_01.set_taborder("5");
                p.Panel00_00_01.set_type("vertical");
                p.Panel00_00_01.set_flexgrow("1");
                p.Panel00_00_01.set_minwidth("");
                p.Panel00_00_01.move("10.00","98","305","86",null,null);

                p.Button00.set_taborder("11");
                p.Button00.set_text("Button00");
                p.Button00.move("560","18","44","90",null,null);

                p.divEdtPopAplcnt.set_taborder("6");
                p.divEdtPopAplcnt.set_text("Div00");
                p.divEdtPopAplcnt.set_formscrollbartype("none none");
                p.divEdtPopAplcnt.set_formscrolltype("none");
                p.divEdtPopAplcnt.set_flexgrow("1");
                p.divEdtPopAplcnt.move("280","274","100%","40",null,null);

                p.edtMblTelno.set_taborder("7");
                p.edtMblTelno.set_readonly("true");
                p.edtMblTelno.move("0.00","46","100.00%","40",null,null);

                p.staLabel00_01.set_taborder("8");
                p.staLabel00_01.set_text("회사명");
                p.staLabel00_01.set_cssclass("sta_WF_Label");
                p.staLabel00_01.move("10","98","100%","46",null,null);

                p.Panel00_00_00.set_taborder("9");
                p.Panel00_00_00.set_type("vertical");
                p.Panel00_00_00.set_flexgrow("1");
                p.Panel00_00_00.set_minwidth("");
                p.Panel00_00_00.move("10.00","98","305","86",null,null);

                p.edtAplcntCoNm.set_taborder("10");
                p.edtAplcntCoNm.set_readonly("true");
                p.edtAplcntCoNm.move("0.00","46","100.00%","40",null,null);
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
            //-- Default Layout : this.divForm.form.Div03.form.divEdtPop.form
            obj = new Layout("default","",0,0,this.divForm.form.Div03.form.divEdtPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.edtCustZip.set_taborder("0");
                p.edtCustZip.set_cssclass("edt_WF_EdtSch");
                p.edtCustZip.set_readonly("true");
                p.edtCustZip.set_displaynulltext("우편번호 검색");
                p.edtCustZip.move("0","0",null,"40","0",null);

                p.btnPop.set_taborder("1");
                p.btnPop.set_cssclass("btn_WF_EdtSch");
                p.btnPop.move("edtCustZip:-40","0","40","40",null,null);
            	}
            );
            this.divForm.form.Div03.form.divEdtPop.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div03.form.divEdtPop.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div03.form.divEdtPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.Div03.form.divEdtPop.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div03.form
            obj = new Layout("default","",0,0,this.divForm.form.Div03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel00.set_taborder("0");
                p.staLabel00.set_text("업체명");
                p.staLabel00.set_cssclass("sta_WF_Label_E");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.edtBzentyNm.set_taborder("1");
                p.edtBzentyNm.set_readonly("false");
                p.edtBzentyNm.move("10.00","158","100%","40",null,null);

                p.Panel00_00.set_taborder("2");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.set_minwidth("");
                p.Panel00_00.move("10.00","98","305","86",null,null);

                p.Panel00.set_taborder("3");
                p.Panel00.set_horizontalgap("20");
                p.Panel00.set_flexcrossaxiswrapalign("start");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_verticalgap("0");
                p.Panel00.set_spacing("0px 20px 10px 20px");
                p.Panel00.set_cssclass("pal_WF_DtlBg");
                p.Panel00.set_type("horizontal");
                p.Panel00.move("0","60","100.00%","96",null,null);

                p.staLabel00_01.set_taborder("4");
                p.staLabel00_01.set_text("대표자성명");
                p.staLabel00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel00_01.move("10","98","100%","46",null,null);

                p.edtRprsvNm.set_taborder("5");
                p.edtRprsvNm.set_readonly("false");
                p.edtRprsvNm.move("10.00","158","100%","40",null,null);

                p.Panel00_00_00.set_taborder("6");
                p.Panel00_00_00.set_type("vertical");
                p.Panel00_00_00.set_flexgrow("1");
                p.Panel00_00_00.set_minwidth("");
                p.Panel00_00_00.move("10.00","98","305","86",null,null);

                p.staLabel00_00_00.set_taborder("7");
                p.staLabel00_00_00.set_text("대표전화번호");
                p.staLabel00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00_00.move("10","98","100%","46",null,null);

                p.edtRprsTelno.set_taborder("8");
                p.edtRprsTelno.set_readonly("false");
                p.edtRprsTelno.move("10.00","158","100%","40",null,null);

                p.Panel00_00_01_00.set_taborder("9");
                p.Panel00_00_01_00.set_type("vertical");
                p.Panel00_00_01_00.set_flexgrow("1");
                p.Panel00_00_01_00.set_minwidth("");
                p.Panel00_00_01_00.move("10.00","98","305","86",null,null);

                p.Panel01.set_taborder("10");
                p.Panel01.set_horizontalgap("20");
                p.Panel01.set_flexcrossaxiswrapalign("start");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_verticalgap("0");
                p.Panel01.set_spacing("0px 20px 10px 20px");
                p.Panel01.set_cssclass("pal_WF_DtlBg");
                p.Panel01.set_type("horizontal");
                p.Panel01.move("0","60","100.00%","96",null,null);

                p.staLabel00_02.set_taborder("11");
                p.staLabel00_02.set_text("사업자 등록번호");
                p.staLabel00_02.set_cssclass("sta_WF_Label");
                p.staLabel00_02.move("10","98","100%","46",null,null);

                p.edtCrno.set_taborder("12");
                p.edtCrno.set_readonly("false");
                p.edtCrno.move("10.00","158","100%","40",null,null);

                p.Panel00_00_02.set_taborder("13");
                p.Panel00_00_02.set_type("vertical");
                p.Panel00_00_02.set_flexgrow("1");
                p.Panel00_00_02.set_minwidth("");
                p.Panel00_00_02.move("10.00","98","305","86",null,null);

                p.staLabel00_00_01.set_taborder("14");
                p.staLabel00_00_01.set_text("법인등록번호");
                p.staLabel00_00_01.set_cssclass("sta_WF_Label");
                p.staLabel00_00_01.move("10","98","100%","46",null,null);

                p.edtBrno.set_taborder("15");
                p.edtBrno.set_readonly("false");
                p.edtBrno.move("10.00","158","100%","40",null,null);

                p.Panel00_00_01_01.set_taborder("16");
                p.Panel00_00_01_01.set_type("vertical");
                p.Panel00_00_01_01.set_flexgrow("1");
                p.Panel00_00_01_01.set_minwidth("");
                p.Panel00_00_01_01.move("10.00","98","305","86",null,null);

                p.Panel02.set_taborder("17");
                p.Panel02.set_horizontalgap("20");
                p.Panel02.set_flexcrossaxiswrapalign("start");
                p.Panel02.set_flexwrap("wrap");
                p.Panel02.set_fittocontents("height");
                p.Panel02.set_verticalgap("0");
                p.Panel02.set_spacing("0px 20px 10px 20px");
                p.Panel02.set_cssclass("pal_WF_DtlBg");
                p.Panel02.set_type("horizontal");
                p.Panel02.move("0","60","100.00%","96",null,null);

                p.staLabel00_03.set_taborder("18");
                p.staLabel00_03.set_text("업종");
                p.staLabel00_03.set_cssclass("sta_WF_Label");
                p.staLabel00_03.move("10","98","100%","46",null,null);

                p.edtTpbizNm.set_taborder("19");
                p.edtTpbizNm.set_readonly("false");
                p.edtTpbizNm.move("10.00","158","100%","40",null,null);

                p.Panel00_00_03.set_taborder("20");
                p.Panel00_00_03.set_type("vertical");
                p.Panel00_00_03.set_flexgrow("1");
                p.Panel00_00_03.set_minwidth("");
                p.Panel00_00_03.move("10.00","98","305","86",null,null);

                p.staLabel00_00_02.set_taborder("21");
                p.staLabel00_00_02.set_text("업태");
                p.staLabel00_00_02.set_cssclass("sta_WF_Label");
                p.staLabel00_00_02.move("10","98","100%","46",null,null);

                p.edtBzcndNm.set_taborder("22");
                p.edtBzcndNm.set_readonly("false");
                p.edtBzcndNm.move("10.00","158","100%","40",null,null);

                p.Panel00_00_01_02.set_taborder("23");
                p.Panel00_00_01_02.set_type("vertical");
                p.Panel00_00_01_02.set_flexgrow("1");
                p.Panel00_00_01_02.set_minwidth("");
                p.Panel00_00_01_02.move("10.00","98","305","86",null,null);

                p.Panel03.set_taborder("24");
                p.Panel03.set_horizontalgap("20");
                p.Panel03.set_flexcrossaxiswrapalign("start");
                p.Panel03.set_flexwrap("wrap");
                p.Panel03.set_fittocontents("height");
                p.Panel03.set_verticalgap("0");
                p.Panel03.set_spacing("0px 20px 10px 20px");
                p.Panel03.set_cssclass("pal_WF_DtlBg");
                p.Panel03.set_type("horizontal");
                p.Panel03.move("0","60","100.00%","96",null,null);

                p.Panel04.set_taborder("25");
                p.Panel04.set_horizontalgap("20");
                p.Panel04.set_flexcrossaxiswrapalign("start");
                p.Panel04.set_flexwrap("wrap");
                p.Panel04.set_fittocontents("height");
                p.Panel04.set_verticalgap("0");
                p.Panel04.set_spacing("0px 20px 10px 20px");
                p.Panel04.set_cssclass("pal_WF_DtlBg");
                p.Panel04.set_type("horizontal");
                p.Panel04.move("0","60","100.00%","150",null,null);

                p.staLabel00_00.set_taborder("26");
                p.staLabel00_00.set_text("사업자등록주소/우편번호");
                p.staLabel00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00.move("0.00","0","100%","46",null,null);

                p.divEdtPop.set_taborder("27");
                p.divEdtPop.set_text("Div00");
                p.divEdtPop.set_formscrollbartype("none none");
                p.divEdtPop.set_formscrolltype("none");
                p.divEdtPop.set_flexgrow("1");
                p.divEdtPop.move("780.00","635","305","40",null,null);

                p.edtCustAddr.set_taborder("28");
                p.edtCustAddr.set_readonly("true");
                p.edtCustAddr.set_flexgrow("2");
                p.edtCustAddr.set_displaynulltext("주소");
                p.edtCustAddr.move("360","637","305","40",null,null);

                p.panAddress.set_taborder("29");
                p.panAddress.set_horizontalgap("10");
                p.panAddress.move("200","641","100%","45",null,null);

                p.edtCustDtlAddr.set_taborder("30");
                p.edtCustDtlAddr.set_displaynulltext("상세주소");
                p.edtCustDtlAddr.move("0.00","46","100%","40",null,null);

                p.Panel00_00_01.set_taborder("31");
                p.Panel00_00_01.set_type("vertical");
                p.Panel00_00_01.set_flexgrow("1");
                p.Panel00_00_01.set_fittocontents("height");
                p.Panel00_00_01.set_verticalgap("10");
                p.Panel00_00_01.set_minwidth("");
                p.Panel00_00_01.move("20.00","0","980","136",null,null);

                p.staLabel00_02_01.set_taborder("32");
                p.staLabel00_02_01.set_text("사업자등록증");
                p.staLabel00_02_01.set_cssclass("sta_WF_Label_E");
                p.staLabel00_02_01.set_flexgrow("1");
                p.staLabel00_02_01.move("0","44","305","46",null,null);

                p.Button00.set_taborder("33");
                p.Button00.set_text("샘플첨부파일명");
                p.Button00.set_cssclass("btn_WF_Small");
                p.Button00.set_fittocontents("width");
                p.Button00.move("813","76","120","40",null,null);

                p.btn_file_1_00.set_taborder("34");
                p.btn_file_1_00.set_text("파일선택");
                p.btn_file_1_00.set_cssclass("btn_WF_FileUp");
                p.btn_file_1_00.move("124","58","116","40",null,null);

                p.panBtnFile00.set_taborder("35");
                p.panBtnFile00.set_flexgrow("1");
                p.panBtnFile00.set_flexcrossaxisalign("start");
                p.panBtnFile00.set_flexmainaxisalign("end");
                p.panBtnFile00.set_horizontalgap("10");
                p.panBtnFile00.move("433","58","305","46",null,null);

                p.panTitle00.set_taborder("36");
                p.panTitle00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00.set_flexwrap("wrap");
                p.panTitle00.set_fittocontents("height");
                p.panTitle00.move("0","124","100%","46",null,null);

                p.Static00_00.set_taborder("37");
                p.Static00_00.set_text("파일수 : ");
                p.Static00_00.set_fittocontents("width");
                p.Static00_00.move("88","123","48","46",null,null);

                p.Static01_00.set_taborder("38");
                p.Static01_00.set_text("0");
                p.Static01_00.set_fittocontents("width");
                p.Static01_00.move("165","143","9","46",null,null);

                p.Static02_00.set_taborder("39");
                p.Static02_00.set_text("개");
                p.Static02_00.set_fittocontents("width");
                p.Static02_00.move("293","131","13","46",null,null);

                p.panFileNum00.set_taborder("40");
                p.panFileNum00.set_flexgrow("1");
                p.panFileNum00.set_horizontalgap("4");
                p.panFileNum00.move("20","190","305","46",null,null);

                p.btn_del_file_1_00.set_taborder("41");
                p.btn_del_file_1_00.set_text("전체파일삭제");
                p.btn_del_file_1_00.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_1_00.set_fittocontents("width");
                p.btn_del_file_1_00.move("512","135","125","40",null,null);

                p.panBtnDel00.set_taborder("42");
                p.panBtnDel00.set_flexcrossaxisalign("center");
                p.panBtnDel00.set_flexmainaxisalign("end");
                p.panBtnDel00.set_flexgrow("1");
                p.panBtnDel00.move("517","141","305","46",null,null);

                p.Panel00_01.set_taborder("43");
                p.Panel00_01.move("20","51","100%","46",null,null);

                p.Grid00_00.set_taborder("44");
                p.Grid00_00.set_binddataset("dsFile1");
                p.Grid00_00.set_autofittype("col");
                p.Grid00_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00.move("20.00","114","100%","40",null,null);

                p.sta00_00_00_01.set_taborder("45");
                p.sta00_00_00_01.set_text("JPG,PNG,BMP,PDF만 첨부가능");
                p.sta00_00_00_01.set_cssclass("sta_WF_Des");
                p.sta00_00_00_01.set_fittocontents("height");
                p.sta00_00_00_01.move("20","20","100%","30",null,null);

                p.Panel01_00.set_taborder("46");
                p.Panel01_00.set_type("vertical");
                p.Panel01_00.set_verticalgap("10");
                p.Panel01_00.move("192","1038","100.00%","80",null,null);

                p.panFile00.set_taborder("47");
                p.panFile00.set_fittocontents("height");
                p.panFile00.set_spacing("10px 20px 10px 20px");
                p.panFile00.set_flexwrap("wrap");
                p.panFile00.set_cssclass("pal_WF_DtlBg");
                p.panFile00.set_verticalgap("4");
                p.panFile00.move("0","42","100%","201",null,null);
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
            //-- Default Layout : this.divForm.form.Div04.form.divEdtPop.form
            obj = new Layout("default","",0,0,this.divForm.form.Div04.form.divEdtPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.edtClmZip.set_taborder("0");
                p.edtClmZip.set_cssclass("edt_WF_EdtSch");
                p.edtClmZip.set_readonly("true");
                p.edtClmZip.set_displaynulltext("우편번호 검색");
                p.edtClmZip.move("0","0",null,"40","0",null);

                p.btnPop.set_taborder("1");
                p.btnPop.set_cssclass("btn_WF_EdtSch");
                p.btnPop.move("edtClmZip:-40","0","40","40",null,null);
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
            //-- Default Layout : this.divForm.form.Div04.form
            obj = new Layout("default","",0,0,this.divForm.form.Div04.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnPopClmInfo.set_taborder("60");
                p.btnPopClmInfo.set_text("청구정보찾기");
                p.btnPopClmInfo.set_fittocontents("width");
                p.btnPopClmInfo.move("883","47","110","40",null,null);

                p.Panel00.set_taborder("61");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.move("520","41","100%","40",null,null);

                p.Pnl0402_00.set_taborder("59");
                p.Pnl0402_00.set_horizontalgap("20");
                p.Pnl0402_00.set_flexcrossaxiswrapalign("start");
                p.Pnl0402_00.set_flexwrap("wrap");
                p.Pnl0402_00.set_fittocontents("height");
                p.Pnl0402_00.set_verticalgap("0");
                p.Pnl0402_00.set_spacing("0px 20px 10px 20px");
                p.Pnl0402_00.set_cssclass("pal_WF_DtlBg");
                p.Pnl0402_00.set_type("horizontal");
                p.Pnl0402_00.move("0","60","100.00%","96",null,null);

                p.staLabel00.set_taborder("0");
                p.staLabel00.set_text("납부담당자 동일여부");
                p.staLabel00.set_cssclass("sta_WF_Label_E");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.Pnl0401.set_taborder("1");
                p.Pnl0401.set_verticalgap("0");
                p.Pnl0401.set_type("vertical");
                p.Pnl0401.set_flexgrow("1");
                p.Pnl0401.move("0","60","305","77",null,null);

                p.staLabel00_01.set_taborder("2");
                p.staLabel00_01.set_text("납부담당자 성명");
                p.staLabel00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel00_01.move("10","98","100%","46",null,null);

                p.edtPayPicNm.set_taborder("3");
                p.edtPayPicNm.set_readonly("false");
                p.edtPayPicNm.move("10.00","158","100%","40",null,null);

                p.Panel00_00_00.set_taborder("4");
                p.Panel00_00_00.set_type("vertical");
                p.Panel00_00_00.set_flexgrow("1");
                p.Panel00_00_00.set_minwidth("");
                p.Panel00_00_00.move("10.00","98","305","86",null,null);

                p.edtClmCustCd.set_taborder("6");
                p.edtClmCustCd.set_readonly("false");
                p.edtClmCustCd.move("10.00","158","100%","40",null,null);

                p.staLabel00_00_00.set_taborder("5");
                p.staLabel00_00_00.set_text("청구고객번호");
                p.staLabel00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00_00.move("10","98","100%","46",null,null);

                p.Panel00_00_01_00.set_taborder("7");
                p.Panel00_00_01_00.set_type("vertical");
                p.Panel00_00_01_00.set_flexgrow("1");
                p.Panel00_00_01_00.set_minwidth("");
                p.Panel00_00_01_00.move("10.00","98","305","86",null,null);

                p.Pnl0402.set_taborder("8");
                p.Pnl0402.set_horizontalgap("20");
                p.Pnl0402.set_flexcrossaxiswrapalign("start");
                p.Pnl0402.set_flexwrap("wrap");
                p.Pnl0402.set_fittocontents("height");
                p.Pnl0402.set_verticalgap("0");
                p.Pnl0402.set_spacing("0px 20px 10px 20px");
                p.Pnl0402.set_cssclass("pal_WF_DtlBg");
                p.Pnl0402.set_type("horizontal");
                p.Pnl0402.move("0","60","100.00%","96",null,null);

                p.staLabel00_02.set_taborder("9");
                p.staLabel00_02.set_text("납부담당자 부서");
                p.staLabel00_02.set_cssclass("sta_WF_Label");
                p.staLabel00_02.move("10","98","100%","46",null,null);

                p.edtPayPicDeptNm.set_taborder("10");
                p.edtPayPicDeptNm.set_readonly("false");
                p.edtPayPicDeptNm.move("10.00","158","100%","40",null,null);

                p.Panel00_00_02.set_taborder("11");
                p.Panel00_00_02.set_type("vertical");
                p.Panel00_00_02.set_flexgrow("1");
                p.Panel00_00_02.set_minwidth("");
                p.Panel00_00_02.move("10.00","98","305","86",null,null);

                p.Panel00_00_01_01.set_taborder("12");
                p.Panel00_00_01_01.set_type("vertical");
                p.Panel00_00_01_01.set_flexgrow("1");
                p.Panel00_00_01_01.set_minwidth("");
                p.Panel00_00_01_01.move("10.00","98","305","86",null,null);

                p.Pnl0403.set_taborder("13");
                p.Pnl0403.set_horizontalgap("20");
                p.Pnl0403.set_flexcrossaxiswrapalign("start");
                p.Pnl0403.set_flexwrap("wrap");
                p.Pnl0403.set_fittocontents("height");
                p.Pnl0403.set_verticalgap("0");
                p.Pnl0403.set_spacing("0px 20px 10px 20px");
                p.Pnl0403.set_cssclass("pal_WF_DtlBg");
                p.Pnl0403.set_type("horizontal");
                p.Pnl0403.move("0","60","100.00%","96",null,null);

                p.staLabel00_03.set_taborder("14");
                p.staLabel00_03.set_text("납부담당자 전화번호");
                p.staLabel00_03.set_cssclass("sta_WF_Label_E");
                p.staLabel00_03.move("10","98","100%","46",null,null);

                p.edtPayPicTelno.set_taborder("15");
                p.edtPayPicTelno.set_readonly("false");
                p.edtPayPicTelno.move("10.00","158","100%","40",null,null);

                p.rdoRtpyrSmYn.set_taborder("16");
                p.rdoRtpyrSmYn.set_innerdataset(divForm_form_Div04_form_rdoRtpyrSmYn_innerdataset);
                p.rdoRtpyrSmYn.set_codecolumn("codecolumn");
                p.rdoRtpyrSmYn.set_datacolumn("datacolumn");
                p.rdoRtpyrSmYn.set_direction("vertical");
                p.rdoRtpyrSmYn.set_fittocontents("width");
                p.rdoRtpyrSmYn.set_index("-1");
                p.rdoRtpyrSmYn.move("200.00","328","393","31",null,null);

                p.staLabel00_03_00.set_taborder("17");
                p.staLabel00_03_00.set_text("납부담당자 휴대전화번호");
                p.staLabel00_03_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_03_00.move("10","98","100%","46",null,null);

                p.edtPayPicMblTelno.set_taborder("18");
                p.edtPayPicMblTelno.set_readonly("false");
                p.edtPayPicMblTelno.move("10.00","158","100%","40",null,null);

                p.staLabel00_00.set_taborder("19");
                p.staLabel00_00.set_text("청구지주소/우편번호");
                p.staLabel00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00.move("0.00","0","100%","46",null,null);

                p.divEdtPop.set_taborder("20");
                p.divEdtPop.set_text("Div00");
                p.divEdtPop.set_formscrollbartype("none none");
                p.divEdtPop.set_formscrolltype("none");
                p.divEdtPop.set_flexgrow("1");
                p.divEdtPop.move("780.00","635","305","40",null,null);

                p.edt00_00_00_00.set_taborder("21");
                p.edt00_00_00_00.set_readonly("true");
                p.edt00_00_00_00.set_flexgrow("2");
                p.edt00_00_00_00.set_displaynulltext("주소");
                p.edt00_00_00_00.move("360","637","305","40",null,null);

                p.panAddress.set_taborder("22");
                p.panAddress.set_horizontalgap("10");
                p.panAddress.move("200","641","100%","45",null,null);

                p.edt00_00.set_taborder("23");
                p.edt00_00.set_displaynulltext("상세주소");
                p.edt00_00.move("0.00","46","100%","40",null,null);

                p.Panel00_00_01.set_taborder("24");
                p.Panel00_00_01.set_type("vertical");
                p.Panel00_00_01.set_flexgrow("1");
                p.Panel00_00_01.set_fittocontents("height");
                p.Panel00_00_01.set_verticalgap("10");
                p.Panel00_00_01.set_minwidth("");
                p.Panel00_00_01.move("20.00","0","980","156",null,null);

                p.Pnl0405.set_taborder("25");
                p.Pnl0405.set_horizontalgap("20");
                p.Pnl0405.set_flexcrossaxiswrapalign("start");
                p.Pnl0405.set_flexwrap("wrap");
                p.Pnl0405.set_fittocontents("height");
                p.Pnl0405.set_verticalgap("0");
                p.Pnl0405.set_spacing("0px 20px 10px 20px");
                p.Pnl0405.set_cssclass("pal_WF_DtlBg");
                p.Pnl0405.set_type("horizontal");
                p.Pnl0405.move("0","60","100.00%","166",null,null);

                p.staLabel040701.set_taborder("26");
                p.staLabel040701.set_text("개인정보 수집·이용 안내");
                p.staLabel040701.set_cssclass("sta_WF_Label");
                p.staLabel040701.move("10","98","100%","46",null,null);

                p.TextArea00.set_taborder("27");
                p.TextArea00.set_readonly("false");
                p.TextArea00.set_value("1. 개인정보의 수집ㆍ이용 목적\n  인계인수 신청 시 작성건의 접수와 처리를 위해 개인정보를 수집목적에 필요한 최소한의 범위 내에서 수집하고 있습니다.\n2. 수집하려는 개인정보의 항목\n  필수항목 : 총괄책임자 및 시설관리책임자 성명, 총괄책임자 및 시설관리책임자 휴대폰번호\n3. 개인정보의 보유 및 이용 기간\n  계약종료 후 3년, 회원탈퇴 시까지\n4. 동의를 거부할 권리와 거부에 따른 불이익 내용\n귀하는 개인정보 수집에 거부할 권리가 있으며, 필수항목 수집을 거부할 경우 인계인수 승인요청서 작성건의 신청을 할 수 없습니다.");
                p.TextArea00.move("171","111","100%","220",null,null);

                p.Pnl04070101.set_taborder("28");
                p.Pnl04070101.set_type("vertical");
                p.Pnl04070101.set_minwidth("");
                p.Pnl04070101.move("10.00","98","100%","180",null,null);

                p.Pnl040701.set_taborder("29");
                p.Pnl040701.set_type("vertical");
                p.Pnl040701.set_flexgrow("1");
                p.Pnl040701.set_verticalgap("10");
                p.Pnl040701.set_minwidth("");
                p.Pnl040701.move("10.00","98","480","240",null,null);

                p.Pnl0406.set_taborder("80");
                p.Pnl0406.set_flexcrossaxiswrapalign("start");
                p.Pnl0406.set_flexwrap("wrap");
                p.Pnl0406.set_fittocontents("height");
                p.Pnl0406.set_verticalgap("0");
                p.Pnl0406.set_spacing("0px 20px 10px 20px");
                p.Pnl0406.set_cssclass("pal_WF_DtlBg");
                p.Pnl0406.set_horizontalgap("20");
                p.Pnl0406.move("0","60","100.00%","183",null,null);

                p.Pnl0407.set_taborder("30");
                p.Pnl0407.set_horizontalgap("20");
                p.Pnl0407.set_flexcrossaxiswrapalign("start");
                p.Pnl0407.set_flexwrap("wrap");
                p.Pnl0407.set_fittocontents("height");
                p.Pnl0407.set_verticalgap("0");
                p.Pnl0407.set_spacing("0px 20px 10px 20px");
                p.Pnl0407.set_cssclass("pal_WF_DtlBg");
                p.Pnl0407.set_type("horizontal");
                p.Pnl0407.move("0","60","100.00%","240",null,null);

                p.staLabel04080101.set_taborder("31");
                p.staLabel04080101.set_text("개인정보 수집 (필수) 동의여부");
                p.staLabel04080101.set_cssclass("sta_WF_Label_E");
                p.staLabel04080101.move("10","98","200","46",null,null);

                p.chk00_00.set_taborder("32");
                p.chk00_00.set_value("true");
                p.chk00_00.move("200.00","128","150","46",null,null);

                p.Pnl04080101.set_taborder("33");
                p.Pnl04080101.set_flexwrap("wrap");
                p.Pnl04080101.set_horizontalgap("10");
                p.Pnl04080101.move("41","937","100%","40",null,null);

                p.TextArea00_01.set_taborder("34");
                p.TextArea00_01.set_readonly("false");
                p.TextArea00_01.set_value("개인정보(선택정보) 사용에 관한 안내\n선택항목에 해당하는 정보를 입력하지 않으셔도 서비스 이용에는 제한이 없습니다.\n수집하는 개인정보의 선택항목 외 모든 내용은 필수항목에서 안내된 내용과 동일합니다.\n○수집하는 개인정보의 선택항목\n입주자서비스포털 인터넷청구시스템 청구서용 이메일주소, 전자세금계산서용 이메일주소(단, 청구방식 이메일 선택시 \"청구서용 이메일주소\" 필수)");
                p.TextArea00_01.move("171","111","100%","120",null,null);

                p.Pnl04080102.set_taborder("35");
                p.Pnl04080102.set_type("vertical");
                p.Pnl04080102.set_minwidth("");
                p.Pnl04080102.move("10.00","98","100%","120",null,null);

                p.Pnl040801.set_taborder("36");
                p.Pnl040801.set_type("vertical");
                p.Pnl040801.set_flexgrow("1");
                p.Pnl040801.set_verticalgap("10");
                p.Pnl040801.set_minwidth("");
                p.Pnl040801.move("10.00","98","480","160",null,null);

                p.Pnl0408.set_taborder("37");
                p.Pnl0408.set_horizontalgap("20");
                p.Pnl0408.set_flexcrossaxiswrapalign("start");
                p.Pnl0408.set_flexwrap("wrap");
                p.Pnl0408.set_fittocontents("height");
                p.Pnl0408.set_verticalgap("0");
                p.Pnl0408.set_spacing("0px 20px 10px 20px");
                p.Pnl0408.set_cssclass("pal_WF_DtlBg");
                p.Pnl0408.set_type("horizontal");
                p.Pnl0408.move("0","60","100.00%","200",null,null);

                p.staLabel00_03_00_00_00_01.set_taborder("38");
                p.staLabel00_03_00_00_00_01.set_text("개인정보 수집(필수) 동의여부");
                p.staLabel00_03_00_00_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel00_03_00_00_00_01.move("10","98","100%","46",null,null);

                p.Pnl0400901.set_taborder("39");
                p.Pnl0400901.set_type("vertical");
                p.Pnl0400901.set_flexgrow("1");
                p.Pnl0400901.set_verticalgap("10");
                p.Pnl0400901.set_minwidth("");
                p.Pnl0400901.move("10.00","98","480","86",null,null);

                p.Pnl0409.set_taborder("40");
                p.Pnl0409.set_horizontalgap("20");
                p.Pnl0409.set_flexcrossaxiswrapalign("start");
                p.Pnl0409.set_flexwrap("wrap");
                p.Pnl0409.set_fittocontents("height");
                p.Pnl0409.set_verticalgap("0");
                p.Pnl0409.set_spacing("0px 20px 10px 20px");
                p.Pnl0409.set_cssclass("pal_WF_DtlBg");
                p.Pnl0409.set_type("horizontal");
                p.Pnl0409.move("0","60","100.00%","96",null,null);

                p.rdo00_01.set_taborder("41");
                p.rdo00_01.set_innerdataset(divForm_form_Div04_form_rdo00_01_innerdataset);
                p.rdo00_01.set_codecolumn("codecolumn");
                p.rdo00_01.set_datacolumn("datacolumn");
                p.rdo00_01.set_direction("vertical");
                p.rdo00_01.set_fittocontents("width");
                p.rdo00_01.set_value("0");
                p.rdo00_01.set_index("0");
                p.rdo00_01.move("200.00","328","490","40",null,null);

                p.staLabel00_02_01.set_taborder("42");
                p.staLabel00_02_01.set_text("납부담당자 개인정보 수집이용동의서");
                p.staLabel00_02_01.set_cssclass("sta_WF_Label_E");
                p.staLabel00_02_01.set_flexgrow("1");
                p.staLabel00_02_01.move("0","44","305","46",null,null);

                p.Button00.set_taborder("43");
                p.Button00.set_text("샘플첨부파일명");
                p.Button00.set_cssclass("btn_WF_Small");
                p.Button00.set_fittocontents("width");
                p.Button00.move("813","76","120","40",null,null);

                p.btn_file_1_00.set_taborder("44");
                p.btn_file_1_00.set_text("파일선택");
                p.btn_file_1_00.set_cssclass("btn_WF_FileUp");
                p.btn_file_1_00.move("124","58","116","40",null,null);

                p.panBtnFile00.set_taborder("45");
                p.panBtnFile00.set_flexgrow("1");
                p.panBtnFile00.set_flexcrossaxisalign("start");
                p.panBtnFile00.set_flexmainaxisalign("end");
                p.panBtnFile00.set_horizontalgap("10");
                p.panBtnFile00.move("433","58","305","46",null,null);

                p.panTitle00.set_taborder("46");
                p.panTitle00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00.set_flexwrap("wrap");
                p.panTitle00.set_fittocontents("height");
                p.panTitle00.move("0","124","100%","46",null,null);

                p.Static00_00.set_taborder("47");
                p.Static00_00.set_text("파일수 : ");
                p.Static00_00.set_fittocontents("width");
                p.Static00_00.move("88","123","48","46",null,null);

                p.Static01_00.set_taborder("48");
                p.Static01_00.set_text("0");
                p.Static01_00.set_fittocontents("width");
                p.Static01_00.move("165","143","9","46",null,null);

                p.Static02_00.set_taborder("49");
                p.Static02_00.set_text("개");
                p.Static02_00.set_fittocontents("width");
                p.Static02_00.move("293","131","13","46",null,null);

                p.panFileNum00.set_taborder("50");
                p.panFileNum00.set_flexgrow("1");
                p.panFileNum00.set_horizontalgap("4");
                p.panFileNum00.move("20","190","305","46",null,null);

                p.btn_del_file_1_00.set_taborder("51");
                p.btn_del_file_1_00.set_text("전체파일삭제");
                p.btn_del_file_1_00.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_1_00.set_fittocontents("width");
                p.btn_del_file_1_00.move("512","135","125","40",null,null);

                p.panBtnDel00.set_taborder("52");
                p.panBtnDel00.set_flexcrossaxisalign("center");
                p.panBtnDel00.set_flexmainaxisalign("end");
                p.panBtnDel00.set_flexgrow("1");
                p.panBtnDel00.move("517","141","305","46",null,null);

                p.Panel00_01_00.set_taborder("53");
                p.Panel00_01_00.move("20","51","100%","46",null,null);

                p.Grid00_00.set_taborder("54");
                p.Grid00_00.set_binddataset("dsFile1");
                p.Grid00_00.set_autofittype("col");
                p.Grid00_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00.move("20.00","114","100%","40",null,null);

                p.sta00_00_00_01.set_taborder("55");
                p.sta00_00_00_01.set_text("JPG,PNG,BMP,PDF만 첨부가능");
                p.sta00_00_00_01.set_cssclass("sta_WF_Des");
                p.sta00_00_00_01.set_fittocontents("height");
                p.sta00_00_00_01.move("20","20","100%","30",null,null);

                p.Panel01_00.set_taborder("56");
                p.Panel01_00.set_type("vertical");
                p.Panel01_00.set_verticalgap("10");
                p.Panel01_00.move("192","1038","100.00%","80",null,null);

                p.panFile00.set_taborder("57");
                p.panFile00.set_fittocontents("height");
                p.panFile00.set_spacing("10px 20px 10px 20px");
                p.panFile00.set_flexwrap("wrap");
                p.panFile00.set_cssclass("pal_WF_DtlBg");
                p.panFile00.set_verticalgap("4");
                p.panFile00.move("0","42","100%","201",null,null);

                p.Panel00_00_01_00_00.set_taborder("58");
                p.Panel00_00_01_00_00.set_type("vertical");
                p.Panel00_00_01_00_00.set_flexgrow("1");
                p.Panel00_00_01_00_00.set_flexcrossaxisalign("start");
                p.Panel00_00_01_00_00.set_flexmainaxisalign("start");
                p.Panel00_00_01_00_00.set_minwidth("");
                p.Panel00_00_01_00_00.move("10.00","98","305","86",null,null);

                p.staClmSe.set_taborder("62");
                p.staClmSe.set_text("청구방식");
                p.staClmSe.set_cssclass("sta_WF_Label_E");
                p.staClmSe.move("10","98","100%","46",null,null);

                p.rdoClmMtd.set_taborder("63");
                p.rdoClmMtd.set_fittocontents("width");
                p.rdoClmMtd.set_innerdataset(divForm_form_Div04_form_rdoClmMtd_innerdataset);
                p.rdoClmMtd.set_codecolumn("codecolumn");
                p.rdoClmMtd.set_datacolumn("datacolumn");
                p.rdoClmMtd.set_direction("vertical");
                p.rdoClmMtd.set_index("-1");
                p.rdoClmMtd.move("127","203","100%","40",null,null);

                p.Pnl040601.set_taborder("64");
                p.Pnl040601.set_type("vertical");
                p.Pnl040601.set_flexgrow("1");
                p.Pnl040601.move("10.00","98","300","110",null,null);

                p.staAcuntEmlAddr.set_taborder("65");
                p.staAcuntEmlAddr.set_text("청구서 이메일주소");
                p.staAcuntEmlAddr.set_cssclass("sta_WF_Label");
                p.staAcuntEmlAddr.move("10","98","100%","46",null,null);

                p.edtAcuntEmlAddr1.set_taborder("66");
                p.edtAcuntEmlAddr1.set_readonly("false");
                p.edtAcuntEmlAddr1.set_displaynulltext("이메일 주소 입력");
                p.edtAcuntEmlAddr1.set_flexgrow("1");
                p.edtAcuntEmlAddr1.move("10.00","158","30%","40",null,null);

                p.Static03.set_taborder("67");
                p.Static03.set_text("@");
                p.Static03.set_fittocontents("width");
                p.Static03.set_textAlign("center");
                p.Static03.move("507","1122","14","40",null,null);

                p.edtAcuntEmlAddr2.set_taborder("68");
                p.edtAcuntEmlAddr2.set_readonly("false");
                p.edtAcuntEmlAddr2.set_displaynulltext("이메일 주소 입력");
                p.edtAcuntEmlAddr2.set_flexgrow("1");
                p.edtAcuntEmlAddr2.move("10.00","158","30%","40",null,null);

                p.cboAcuntEmlAddr00.set_taborder("69");
                p.cboAcuntEmlAddr00.set_innerdataset("dsEmlList");
                p.cboAcuntEmlAddr00.set_codecolumn("cdId");
                p.cboAcuntEmlAddr00.set_datacolumn("cdNm");
                p.cboAcuntEmlAddr00.set_displaynulltext("선택");
                p.cboAcuntEmlAddr00.set_text("");
                p.cboAcuntEmlAddr00.set_index("-1");
                p.cboAcuntEmlAddr00.move("200.00","128","30%","40",null,null);

                p.panEmail.set_taborder("70");
                p.panEmail.set_horizontalgap("5");
                p.panEmail.move("386","1172","100%","50",null,null);

                p.Pnl04060201.set_taborder("71");
                p.Pnl04060201.set_type("vertical");
                p.Pnl04060201.set_visible("true");
                p.Pnl04060201.move("10.00","98","100%","86",null,null);

                p.staTxivEmlAddr.set_taborder("72");
                p.staTxivEmlAddr.set_text("전자세금계산서 이메일주소");
                p.staTxivEmlAddr.set_cssclass("sta_WF_Label");
                p.staTxivEmlAddr.move("10","98","100%","46",null,null);

                p.edtTxivEmlAddr1.set_taborder("73");
                p.edtTxivEmlAddr1.set_readonly("false");
                p.edtTxivEmlAddr1.set_displaynulltext("이메일 주소 입력");
                p.edtTxivEmlAddr1.set_flexgrow("1");
                p.edtTxivEmlAddr1.move("10.00","158","30%","40",null,null);

                p.Static03_00_00.set_taborder("74");
                p.Static03_00_00.set_text("@");
                p.Static03_00_00.set_fittocontents("width");
                p.Static03_00_00.set_textAlign("center");
                p.Static03_00_00.move("507","1122","14","40",null,null);

                p.edtTxivEmlAddr2.set_taborder("75");
                p.edtTxivEmlAddr2.set_readonly("false");
                p.edtTxivEmlAddr2.set_displaynulltext("이메일 주소 입력");
                p.edtTxivEmlAddr2.set_flexgrow("1");
                p.edtTxivEmlAddr2.move("10.00","158","30%","40",null,null);

                p.cboTxivEmlAddr.set_taborder("76");
                p.cboTxivEmlAddr.set_innerdataset("dsEmlList");
                p.cboTxivEmlAddr.set_codecolumn("cdId");
                p.cboTxivEmlAddr.set_datacolumn("cdNm");
                p.cboTxivEmlAddr.set_displaynulltext("선택");
                p.cboTxivEmlAddr.set_text("");
                p.cboTxivEmlAddr.set_index("-1");
                p.cboTxivEmlAddr.move("200.00","128","30%","40",null,null);

                p.panEmail00_00.set_taborder("77");
                p.panEmail00_00.set_horizontalgap("5");
                p.panEmail00_00.move("386","1172","100%","50",null,null);

                p.Pnl04060202.set_taborder("78");
                p.Pnl04060202.set_type("vertical");
                p.Pnl04060202.move("10.00","98","100%","86",null,null);

                p.Pnl040602.set_taborder("79");
                p.Pnl040602.set_type("vertical");
                p.Pnl040602.set_flexgrow("1");
                p.Pnl040602.move("551","1140","300","172",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("0");
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
            obj.set_verticalgap("0");
            this.divForm.form.Div04.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div05.form
            obj = new Layout("default","",0,0,this.divForm.form.Div05.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel00.set_taborder("0");
                p.staLabel00.set_text("시설명");
                p.staLabel00.set_cssclass("sta_WF_Label_E");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.Pnl050101.set_taborder("1");
                p.Pnl050101.set_type("vertical");
                p.Pnl050101.set_flexgrow("1");
                p.Pnl050101.set_minwidth("");
                p.Pnl050101.move("10.00","98","305","86",null,null);

                p.Pnl0501.set_taborder("2");
                p.Pnl0501.set_horizontalgap("20");
                p.Pnl0501.set_flexcrossaxiswrapalign("start");
                p.Pnl0501.set_flexwrap("wrap");
                p.Pnl0501.set_fittocontents("height");
                p.Pnl0501.set_verticalgap("0");
                p.Pnl0501.set_spacing("0px 20px 10px 20px");
                p.Pnl0501.set_cssclass("pal_WF_DtlBg");
                p.Pnl0501.set_type("horizontal");
                p.Pnl0501.move("0","60","100.00%","96",null,null);

                p.staLabel00_01.set_taborder("3");
                p.staLabel00_01.set_text("총괄책임자 및 시설관리책임자");
                p.staLabel00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel00_01.move("10","98","100%","46",null,null);

                p.Pnl050201.set_taborder("4");
                p.Pnl050201.set_type("vertical");
                p.Pnl050201.set_flexgrow("1");
                p.Pnl050201.set_minwidth("");
                p.Pnl050201.move("10.00","98","305","86",null,null);

                p.Pnl0502.set_taborder("5");
                p.Pnl0502.set_horizontalgap("20");
                p.Pnl0502.set_flexcrossaxiswrapalign("start");
                p.Pnl0502.set_flexwrap("wrap");
                p.Pnl0502.set_fittocontents("height");
                p.Pnl0502.set_verticalgap("0");
                p.Pnl0502.set_spacing("0px 20px 10px 20px");
                p.Pnl0502.set_cssclass("pal_WF_DtlBg");
                p.Pnl0502.set_type("horizontal");
                p.Pnl0502.move("0","60","100.00%","96",null,null);

                p.staLabel00_02.set_taborder("6");
                p.staLabel00_02.set_text("총괄책임자 및 시설관리책임자 성명");
                p.staLabel00_02.set_cssclass("sta_WF_Label_E");
                p.staLabel00_02.move("10","98","100%","46",null,null);

                p.edtRbprsnFcltMngRbprsnNm.set_taborder("7");
                p.edtRbprsnFcltMngRbprsnNm.set_readonly("false");
                p.edtRbprsnFcltMngRbprsnNm.move("10.00","158","100%","40",null,null);

                p.Pnl050301.set_taborder("8");
                p.Pnl050301.set_type("vertical");
                p.Pnl050301.set_flexgrow("1");
                p.Pnl050301.set_minwidth("");
                p.Pnl050301.move("10.00","98","305","86",null,null);

                p.staLabel00_00_01.set_taborder("9");
                p.staLabel00_00_01.set_text("총괄책임자 및 시설관리책임자 휴대폰번호");
                p.staLabel00_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00_01.move("10","98","100%","46",null,null);

                p.edtRbprsnFcltMngRbprsnMblTelno.set_taborder("10");
                p.edtRbprsnFcltMngRbprsnMblTelno.set_readonly("false");
                p.edtRbprsnFcltMngRbprsnMblTelno.move("10.00","158","100%","40",null,null);

                p.Pnl050302.set_taborder("11");
                p.Pnl050302.set_type("vertical");
                p.Pnl050302.set_flexgrow("1");
                p.Pnl050302.set_minwidth("");
                p.Pnl050302.move("10.00","98","305","86",null,null);

                p.Pnl0503.set_taborder("12");
                p.Pnl0503.set_horizontalgap("20");
                p.Pnl0503.set_flexcrossaxiswrapalign("start");
                p.Pnl0503.set_flexwrap("wrap");
                p.Pnl0503.set_fittocontents("height");
                p.Pnl0503.set_verticalgap("0");
                p.Pnl0503.set_spacing("0px 20px 10px 20px");
                p.Pnl0503.set_cssclass("pal_WF_DtlBg");
                p.Pnl0503.set_type("horizontal");
                p.Pnl0503.move("0","60","100.00%","96",null,null);

                p.rdoRbprsnFcltMngRbprsnYn.set_taborder("13");
                p.rdoRbprsnFcltMngRbprsnYn.set_innerdataset(divForm_form_Div05_form_rdoRbprsnFcltMngRbprsnYn_innerdataset);
                p.rdoRbprsnFcltMngRbprsnYn.set_codecolumn("codecolumn");
                p.rdoRbprsnFcltMngRbprsnYn.set_datacolumn("datacolumn");
                p.rdoRbprsnFcltMngRbprsnYn.set_direction("vertical");
                p.rdoRbprsnFcltMngRbprsnYn.set_fittocontents("width");
                p.rdoRbprsnFcltMngRbprsnYn.set_index("-1");
                p.rdoRbprsnFcltMngRbprsnYn.move("200.00","328","393","49.37",null,null);

                p.edtfcltNm.set_taborder("14");
                p.edtfcltNm.set_readonly("false");
                p.edtfcltNm.move("10.00","158","100%","40",null,null);

                p.staLabel050401.set_taborder("15");
                p.staLabel050401.set_text("개인정보 수집·이용 동의");
                p.staLabel050401.set_cssclass("sta_WF_Label");
                p.staLabel050401.move("10","98","100%","46",null,null);

                p.Pnl05040101.set_taborder("16");
                p.Pnl05040101.set_type("vertical");
                p.Pnl05040101.set_cssclass("pal_WF_TxtAreaBox");
                p.Pnl05040101.set_spacing("8px 15px 8px 15px");
                p.Pnl05040101.set_verticalgap("10");
                p.Pnl05040101.set_minwidth("");
                p.Pnl05040101.move("20.00","374","100%","336",null,null);

                p.Pnl050401.set_taborder("17");
                p.Pnl050401.set_type("vertical");
                p.Pnl050401.set_flexgrow("1");
                p.Pnl050401.set_verticalgap("10");
                p.Pnl050401.set_minwidth("");
                p.Pnl050401.move("10.00","98","970","392",null,null);

                p.Pnl0504.set_taborder("18");
                p.Pnl0504.set_horizontalgap("20");
                p.Pnl0504.set_flexcrossaxiswrapalign("start");
                p.Pnl0504.set_flexwrap("wrap");
                p.Pnl0504.set_fittocontents("height");
                p.Pnl0504.set_verticalgap("0");
                p.Pnl0504.set_spacing("0px 20px 10px 20px");
                p.Pnl0504.set_cssclass("pal_WF_DtlBg");
                p.Pnl0504.set_type("horizontal");
                p.Pnl0504.set_visible("false");
                p.Pnl0504.move("0","60","100.00%","403",null,null);

                p.Panel01.set_taborder("21");
                p.Panel01.set_type("vertical");
                p.Panel01.move("218","688","100%","200",null,null);

                p.Static01.set_taborder("22");
                p.Static01.set_text("▶ 개인정보 수집·이용 내역");
                p.Static01.move("88","596","100%","40",null,null);

                p.Grid00.set_taborder("20");
                p.Grid00.set_binddataset("Dataset01");
                p.Grid00.set_autofittype("col");
                p.Grid00.set_useselcolor("false");
                p.Grid00.move("86","552","100%","160",null,null);

                p.Static00.set_taborder("19");
                p.Static00.set_text("■ 인계인수 신청을 위한 개인정보 수집·이용 동의서\r\n입주자서비스포털은 <fc v=\'#1e4ebe\'>배정 받은 공간</fc>에 대한 <fc v=\'#1e4ebe\'>인계인수 신청</fc> 서비스 제공을 위해 아래와 같이 개인정보를 수집·이용 하고자 합니다.\r\n내용을 자세히 읽으신 후 동의 여부를 결정하여 주시길 바랍니다. ");
                p.Static00.set_fittocontents("height");
                p.Static00.set_usedecorate("true");
                p.Static00.set_wordWrap("char");
                p.Static00.move("36","382","100%","60",null,null);

                p.Static00_00.set_taborder("23");
                p.Static00_00.set_text("※ 위의 개인정보 수집·이용에 대한 동의를 거부할 권리가 있습니다. 그러나 동의를 거부할 경우 인계인수  신청을 할 수 없습니다.");
                p.Static00_00.set_usedecorate("true");
                p.Static00_00.set_cssclass("sta_WF_TxtRed");
                p.Static00_00.set_wordWrap("char");
                p.Static00_00.set_fittocontents("height");
                p.Static00_00.move("36","382","100%","40",null,null);

                p.staLabel050501.set_taborder("24");
                p.staLabel050501.set_text("개인정보 수집·이용 동의여부");
                p.staLabel050501.set_cssclass("sta_WF_Label_E");
                p.staLabel050501.move("10","98","100%","46",null,null);

                p.Pnl050501.set_taborder("25");
                p.Pnl050501.set_type("vertical");
                p.Pnl050501.set_flexgrow("1");
                p.Pnl050501.set_minwidth("");
                p.Pnl050501.move("10.00","98","305","86",null,null);

                p.Pnl0505.set_taborder("26");
                p.Pnl0505.set_horizontalgap("20");
                p.Pnl0505.set_flexcrossaxiswrapalign("start");
                p.Pnl0505.set_flexwrap("wrap");
                p.Pnl0505.set_fittocontents("height");
                p.Pnl0505.set_verticalgap("0");
                p.Pnl0505.set_spacing("0px 20px 10px 20px");
                p.Pnl0505.set_cssclass("pal_WF_DtlBg");
                p.Pnl0505.set_type("horizontal");
                p.Pnl0505.set_visible("false");
                p.Pnl0505.move("0","60","100.00%","96",null,null);

                p.chk00_00.set_taborder("27");
                p.chk00_00.set_value("true");
                p.chk00_00.move("200.00","128","150","46",null,null);

                p.staLabel00_02_01.set_taborder("28");
                p.staLabel00_02_01.set_text("총괄책임자 및 시설관리책임자\r\n개인정보수집이용동의서");
                p.staLabel00_02_01.set_cssclass("sta_WF_Label_E");
                p.staLabel00_02_01.set_fittocontents("width");
                p.staLabel00_02_01.move("0","44","305","46",null,null);

                p.panBtnFile00_01.set_taborder("29");
                p.panBtnFile00_01.set_flexgrow("1");
                p.panBtnFile00_01.set_flexcrossaxisalign("start");
                p.panBtnFile00_01.set_flexmainaxisalign("end");
                p.panBtnFile00_01.set_horizontalgap("10");
                p.panBtnFile00_01.move("433","58","305","46",null,null);

                p.Pnl050601.set_taborder("30");
                p.Pnl050601.set_cssclass("pan_WF_FileTitle");
                p.Pnl050601.set_flexwrap("wrap");
                p.Pnl050601.set_fittocontents("height");
                p.Pnl050601.move("0","124","100%","46",null,null);

                p.Static00_00_00.set_taborder("31");
                p.Static00_00_00.set_text("파일수 : ");
                p.Static00_00_00.set_fittocontents("width");
                p.Static00_00_00.move("88","123","48","46",null,null);

                p.Static01_00_01.set_taborder("32");
                p.Static01_00_01.set_text("0");
                p.Static01_00_01.set_fittocontents("width");
                p.Static01_00_01.move("165","143","9","46",null,null);

                p.Static02_00_00.set_taborder("33");
                p.Static02_00_00.set_text("개");
                p.Static02_00_00.set_fittocontents("width");
                p.Static02_00_00.move("293","131","13","46",null,null);

                p.panFileNum00_00.set_taborder("34");
                p.panFileNum00_00.set_flexgrow("1");
                p.panFileNum00_00.set_horizontalgap("4");
                p.panFileNum00_00.move("20","190","305","46",null,null);

                p.btn_del_file_1_00_00.set_taborder("35");
                p.btn_del_file_1_00_00.set_text("파일삭제");
                p.btn_del_file_1_00_00.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_1_00_00.set_fittocontents("width");
                p.btn_del_file_1_00_00.move("512","135","125","40",null,null);

                p.panBtnDel00_00.set_taborder("36");
                p.panBtnDel00_00.set_flexcrossaxisalign("center");
                p.panBtnDel00_00.set_flexmainaxisalign("end");
                p.panBtnDel00_00.set_flexgrow("1");
                p.panBtnDel00_00.move("517","141","305","46",null,null);

                p.Pnl050602.set_taborder("37");
                p.Pnl050602.move("20","51","100%","46",null,null);

                p.Grid00_00_01.set_taborder("38");
                p.Grid00_00_01.set_binddataset("dsFile1");
                p.Grid00_00_01.set_autofittype("col");
                p.Grid00_00_01.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00_01.move("20.00","114","100%","40",null,null);

                p.sta00_00_00_01.set_taborder("39");
                p.sta00_00_00_01.set_text("JPG,PNG,BMP,PDF만 첨부가능");
                p.sta00_00_00_01.set_cssclass("sta_WF_Des");
                p.sta00_00_00_01.set_fittocontents("height");
                p.sta00_00_00_01.move("20","20","100%","30",null,null);

                p.Pnl050603.set_taborder("40");
                p.Pnl050603.set_type("vertical");
                p.Pnl050603.set_verticalgap("10");
                p.Pnl050603.move("192","1038","100.00%","80",null,null);

                p.Pnl0506.set_taborder("41");
                p.Pnl0506.set_fittocontents("height");
                p.Pnl0506.set_spacing("10px 20px 10px 20px");
                p.Pnl0506.set_flexwrap("wrap");
                p.Pnl0506.set_cssclass("pal_WF_DtlBg");
                p.Pnl0506.set_verticalgap("4");
                p.Pnl0506.set_visible("false");
                p.Pnl0506.move("0","42","100%","201",null,null);

                p.btn_file_1_00_01.set_taborder("42");
                p.btn_file_1_00_01.set_text("파일선택");
                p.btn_file_1_00_01.set_cssclass("btn_WF_FileUp");
                p.btn_file_1_00_01.move("124","58","116","40",null,null);

                p.btnRbprsnWtcsFormDwnld.set_taborder("43");
                p.btnRbprsnWtcsFormDwnld.set_text("동의서 양식 다운로드");
                p.btnRbprsnWtcsFormDwnld.set_cssclass("btn_WF_FileDw");
                p.btnRbprsnWtcsFormDwnld.set_fittocontents("width");
                p.btnRbprsnWtcsFormDwnld.set_enable("true");
                p.btnRbprsnWtcsFormDwnld.move("64.00","0","190","40",null,null);
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
            //-- Default Layout : this.divForm.form.Div07.form
            obj = new Layout("default","",0,0,this.divForm.form.Div07.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("1차사전미팅");
                p.Static00.set_cssclass("sta_WF_Txt60018");
                p.Static00.set_fittocontents("width");
                p.Static00.move("537","84","100%","46",null,null);

                p.staLabel00.set_taborder("1");
                p.staLabel00.set_text("미팅일");
                p.staLabel00.set_cssclass("sta_WF_Label");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.Calendar00.set_taborder("2");
                p.Calendar00.set_readonly("true");
                p.Calendar00.move("0","0","100%","40",null,null);

                p.Panel00_00.set_taborder("3");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.set_minwidth("");
                p.Panel00_00.move("10.00","98","305","132",null,null);

                p.Panel11_00.set_taborder("4");
                p.Panel11_00.set_type("horizontal");
                p.Panel11_00.set_horizontalgap("10");
                p.Panel11_00.set_flexgrow("1");
                p.Panel11_00.set_minwidth("");
                p.Panel11_00.move("685","150","305","1",null,null);

                p.Panel00.set_taborder("75");
                p.Panel00.set_type("vertical");
                p.Panel00.set_fittocontents("height");
                p.Panel00.move("0","0","100%","300",null,null);

                p.pan01.set_taborder("5");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_fittocontents("height");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.set_type("horizontal");
                p.pan01.move("0","60","100.00%","152",null,null);

                p.staLabel01_01.set_taborder("6");
                p.staLabel01_01.set_text("미팅내용");
                p.staLabel01_01.set_cssclass("sta_WF_Label");
                p.staLabel01_01.move("10","98","100%","46",null,null);

                p.edt01_01.set_taborder("7");
                p.edt01_01.set_readonly("true");
                p.edt01_01.move("10.00","158","100%","40",null,null);

                p.Panel01_01.set_taborder("8");
                p.Panel01_01.set_type("vertical");
                p.Panel01_01.set_flexgrow("1");
                p.Panel01_01.set_minwidth("");
                p.Panel01_01.move("10.00","98","305","86",null,null);

                p.pan02.set_taborder("9");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.set_type("horizontal");
                p.pan02.move("0","60","100.00%","96",null,null);

                p.panFile.set_taborder("43");
                p.panFile.set_fittocontents("height");
                p.panFile.set_spacing("10px 20px 10px 20px");
                p.panFile.set_flexwrap("wrap");
                p.panFile.set_cssclass("pal_WF_DtlBg");
                p.panFile.set_verticalgap("4");
                p.panFile.move("0","42","100.00%","161",null,null);

                p.Static03_01.set_taborder("10");
                p.Static03_01.set_text("2차사전미팅");
                p.Static03_01.set_cssclass("sta_WF_Txt60018");
                p.Static03_01.set_fittocontents("width");
                p.Static03_01.move("537","84","100%","46",null,null);

                p.staLabel03_01.set_taborder("11");
                p.staLabel03_01.set_text("미팅일");
                p.staLabel03_01.set_cssclass("sta_WF_Label");
                p.staLabel03_01.move("10","98","100%","46",null,null);

                p.Calendar03_01.set_taborder("12");
                p.Calendar03_01.set_readonly("true");
                p.Calendar03_01.move("0","0","100%","40",null,null);

                p.Panel03_01.set_taborder("13");
                p.Panel03_01.set_type("vertical");
                p.Panel03_01.set_flexgrow("1");
                p.Panel03_01.set_minwidth("");
                p.Panel03_01.move("10.00","98","305","132",null,null);

                p.Panel03_02.set_taborder("14");
                p.Panel03_02.set_type("horizontal");
                p.Panel03_02.set_horizontalgap("10");
                p.Panel03_02.set_flexgrow("1");
                p.Panel03_02.set_minwidth("");
                p.Panel03_02.move("685","150","305","1",null,null);

                p.pan04.set_taborder("15");
                p.pan04.set_horizontalgap("20");
                p.pan04.set_flexcrossaxiswrapalign("start");
                p.pan04.set_flexwrap("wrap");
                p.pan04.set_fittocontents("height");
                p.pan04.set_verticalgap("0");
                p.pan04.set_spacing("0px 20px 10px 20px");
                p.pan04.set_cssclass("pal_WF_DtlBg");
                p.pan04.set_type("horizontal");
                p.pan04.move("0","60","100.00%","152",null,null);

                p.staLabel04_01.set_taborder("16");
                p.staLabel04_01.set_text("미팅내용");
                p.staLabel04_01.set_cssclass("sta_WF_Label");
                p.staLabel04_01.move("10","98","100%","46",null,null);

                p.edt04_01.set_taborder("17");
                p.edt04_01.set_readonly("true");
                p.edt04_01.move("10.00","158","100%","40",null,null);

                p.Panel04_01.set_taborder("18");
                p.Panel04_01.set_type("vertical");
                p.Panel04_01.set_flexgrow("1");
                p.Panel04_01.set_minwidth("");
                p.Panel04_01.move("10.00","98","305","86",null,null);

                p.pan05.set_taborder("19");
                p.pan05.set_horizontalgap("20");
                p.pan05.set_flexcrossaxiswrapalign("start");
                p.pan05.set_flexwrap("wrap");
                p.pan05.set_fittocontents("height");
                p.pan05.set_verticalgap("0");
                p.pan05.set_spacing("0px 20px 10px 20px");
                p.pan05.set_cssclass("pal_WF_DtlBg");
                p.pan05.set_type("horizontal");
                p.pan05.move("0","60","100.00%","96",null,null);

                p.panFile00.set_taborder("57");
                p.panFile00.set_fittocontents("height");
                p.panFile00.set_spacing("10px 20px 10px 20px");
                p.panFile00.set_flexwrap("wrap");
                p.panFile00.set_cssclass("pal_WF_DtlBg");
                p.panFile00.set_verticalgap("4");
                p.panFile00.move("0","42","100.00%","161",null,null);

                p.Static06_01.set_taborder("20");
                p.Static06_01.set_text("3차사전미팅");
                p.Static06_01.set_cssclass("sta_WF_Txt60018");
                p.Static06_01.set_fittocontents("width");
                p.Static06_01.move("537","84","100%","46",null,null);

                p.staLabel06_01.set_taborder("21");
                p.staLabel06_01.set_text("미팅일");
                p.staLabel06_01.set_cssclass("sta_WF_Label");
                p.staLabel06_01.move("10","98","100%","46",null,null);

                p.Calendar06_01.set_taborder("22");
                p.Calendar06_01.set_readonly("true");
                p.Calendar06_01.move("0","0","100%","40",null,null);

                p.Panel06_01.set_taborder("23");
                p.Panel06_01.set_type("vertical");
                p.Panel06_01.set_flexgrow("1");
                p.Panel06_01.set_minwidth("");
                p.Panel06_01.move("10.00","98","305","132",null,null);

                p.Pane06_02.set_taborder("24");
                p.Pane06_02.set_type("horizontal");
                p.Pane06_02.set_horizontalgap("10");
                p.Pane06_02.set_flexgrow("1");
                p.Pane06_02.set_minwidth("");
                p.Pane06_02.move("685","150","305","1",null,null);

                p.pan07.set_taborder("25");
                p.pan07.set_horizontalgap("20");
                p.pan07.set_flexcrossaxiswrapalign("start");
                p.pan07.set_flexwrap("wrap");
                p.pan07.set_fittocontents("height");
                p.pan07.set_verticalgap("0");
                p.pan07.set_spacing("0px 20px 10px 20px");
                p.pan07.set_cssclass("pal_WF_DtlBg");
                p.pan07.set_type("horizontal");
                p.pan07.move("0","60","100.00%","152",null,null);

                p.staLabel07_01.set_taborder("26");
                p.staLabel07_01.set_text("미팅내용");
                p.staLabel07_01.set_cssclass("sta_WF_Label");
                p.staLabel07_01.move("10","98","100%","46",null,null);

                p.edt07_01.set_taborder("27");
                p.edt07_01.set_readonly("true");
                p.edt07_01.move("10.00","158","100%","40",null,null);

                p.Panel07_01.set_taborder("28");
                p.Panel07_01.set_type("vertical");
                p.Panel07_01.set_flexgrow("1");
                p.Panel07_01.set_minwidth("");
                p.Panel07_01.move("10.00","98","305","86",null,null);

                p.pan08.set_taborder("29");
                p.pan08.set_horizontalgap("20");
                p.pan08.set_flexcrossaxiswrapalign("start");
                p.pan08.set_flexwrap("wrap");
                p.pan08.set_fittocontents("height");
                p.pan08.set_verticalgap("0");
                p.pan08.set_spacing("0px 20px 10px 20px");
                p.pan08.set_cssclass("pal_WF_DtlBg");
                p.pan08.set_type("horizontal");
                p.pan08.move("0","60","100.00%","96",null,null);

                p.staLabel00_02.set_taborder("30");
                p.staLabel00_02.set_text("첨부파일");
                p.staLabel00_02.set_cssclass("sta_WF_Label");
                p.staLabel00_02.set_fittocontents("width");
                p.staLabel00_02.move("0","44","305","46",null,null);

                p.Button00.set_taborder("31");
                p.Button00.set_text("샘플첨부파일명");
                p.Button00.set_cssclass("btn_WF_Small");
                p.Button00.set_fittocontents("width");
                p.Button00.move("813","76","120","34",null,null);

                p.btn_file_1.set_taborder("32");
                p.btn_file_1.set_text("파일선택");
                p.btn_file_1.set_cssclass("btn_WF_FileUp");
                p.btn_file_1.set_fittocontents("width");
                p.btn_file_1.move("124","58","116","34",null,null);

                p.panBtnFile.set_taborder("33");
                p.panBtnFile.set_flexgrow("1");
                p.panBtnFile.set_flexmainaxisalign("end");
                p.panBtnFile.set_horizontalgap("10");
                p.panBtnFile.move("433","58","305","34",null,null);

                p.panTitle.set_taborder("34");
                p.panTitle.set_cssclass("pan_WF_FileTitle");
                p.panTitle.set_flexwrap("wrap");
                p.panTitle.set_fittocontents("height");
                p.panTitle.set_flexcrossaxisalign("center");
                p.panTitle.set_spacing("0px 0px 10px 0px");
                p.panTitle.move("0","124","100%","46",null,null);

                p.Button01.set_taborder("77");
                p.Button01.set_text("Button01");
                p.Button01.move("272","279","116","42",null,null);

                p.Static00_00.set_taborder("35");
                p.Static00_00.set_text("파일수 : ");
                p.Static00_00.set_fittocontents("width");
                p.Static00_00.move("88","123","48","46",null,null);

                p.Static01.set_taborder("36");
                p.Static01.set_text("0");
                p.Static01.set_fittocontents("width");
                p.Static01.move("165","143","9","46",null,null);

                p.Static02.set_taborder("37");
                p.Static02.set_text("개");
                p.Static02.set_fittocontents("width");
                p.Static02.move("293","131","13","46",null,null);

                p.panFileNum.set_taborder("38");
                p.panFileNum.set_flexgrow("1");
                p.panFileNum.set_horizontalgap("4");
                p.panFileNum.move("20","190","305","46",null,null);

                p.btn_del_file_1.set_taborder("39");
                p.btn_del_file_1.set_text("전체파일삭제");
                p.btn_del_file_1.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_1.set_fittocontents("width");
                p.btn_del_file_1.move("512","135","125","34",null,null);

                p.panBtnDel.set_taborder("40");
                p.panBtnDel.set_flexcrossaxisalign("center");
                p.panBtnDel.set_flexmainaxisalign("end");
                p.panBtnDel.set_flexgrow("1");
                p.panBtnDel.move("517","141","305","46",null,null);

                p.Panel00_00_00.set_taborder("41");
                p.Panel00_00_00.move("20","51","100%","46",null,null);

                p.Panel00_01.set_taborder("76");
                p.Panel00_01.move("308","281","57","121",null,null);

                p.Grid00.set_taborder("42");
                p.Grid00.set_binddataset("dsFile1");
                p.Grid00.set_autofittype("col");
                p.Grid00.set_cssclass("grd_WF_FileAdd");
                p.Grid00.move("20.00","114","100%","40",null,null);

                p.staLabel00_02_00.set_taborder("44");
                p.staLabel00_02_00.set_text("첨부파일");
                p.staLabel00_02_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_00.set_fittocontents("width");
                p.staLabel00_02_00.move("0","44","305","46",null,null);

                p.Button00_00.set_taborder("45");
                p.Button00_00.set_text("샘플첨부파일명");
                p.Button00_00.set_cssclass("btn_WF_Small");
                p.Button00_00.set_fittocontents("width");
                p.Button00_00.move("813","76","120","34",null,null);

                p.panBtnFile00.set_taborder("47");
                p.panBtnFile00.set_flexgrow("1");
                p.panBtnFile00.set_flexmainaxisalign("end");
                p.panBtnFile00.set_horizontalgap("10");
                p.panBtnFile00.move("433","58","305","34",null,null);

                p.btn_file_1_00.set_taborder("46");
                p.btn_file_1_00.set_text("파일선택");
                p.btn_file_1_00.set_cssclass("btn_WF_FileUp");
                p.btn_file_1_00.set_fittocontents("width");
                p.btn_file_1_00.move("124","58","116","34",null,null);

                p.Static01_00.set_taborder("50");
                p.Static01_00.set_text("0");
                p.Static01_00.set_fittocontents("width");
                p.Static01_00.move("165","143","9","46",null,null);

                p.Static00_00_00.set_taborder("49");
                p.Static00_00_00.set_text("파일수 : ");
                p.Static00_00_00.set_fittocontents("width");
                p.Static00_00_00.move("88","123","48","46",null,null);

                p.panTitle00.set_taborder("48");
                p.panTitle00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00.set_flexwrap("wrap");
                p.panTitle00.set_fittocontents("height");
                p.panTitle00.set_flexcrossaxisalign("center");
                p.panTitle00.set_spacing("0px 0px 10px 0px");
                p.panTitle00.move("0","124","100%","46",null,null);

                p.Static02_00.set_taborder("51");
                p.Static02_00.set_text("개");
                p.Static02_00.set_fittocontents("width");
                p.Static02_00.move("293","131","13","46",null,null);

                p.staLabel00_02_01.set_taborder("58");
                p.staLabel00_02_01.set_text("첨부파일");
                p.staLabel00_02_01.set_cssclass("sta_WF_Label");
                p.staLabel00_02_01.set_fittocontents("width");
                p.staLabel00_02_01.move("0","44","305","46",null,null);

                p.panFileNum00.set_taborder("52");
                p.panFileNum00.set_flexgrow("1");
                p.panFileNum00.set_horizontalgap("4");
                p.panFileNum00.move("20","190","305","46",null,null);

                p.btn_del_file_1_00.set_taborder("53");
                p.btn_del_file_1_00.set_text("전체파일삭제");
                p.btn_del_file_1_00.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_1_00.set_fittocontents("width");
                p.btn_del_file_1_00.move("512","135","125","34",null,null);

                p.btn_file_1_01.set_taborder("60");
                p.btn_file_1_01.set_text("파일선택");
                p.btn_file_1_01.set_cssclass("btn_WF_FileUp");
                p.btn_file_1_01.set_fittocontents("width");
                p.btn_file_1_01.move("124","58","116","34",null,null);

                p.panBtnDel00.set_taborder("54");
                p.panBtnDel00.set_flexcrossaxisalign("center");
                p.panBtnDel00.set_flexmainaxisalign("end");
                p.panBtnDel00.set_flexgrow("1");
                p.panBtnDel00.move("517","141","305","46",null,null);

                p.panBtnFile01.set_taborder("61");
                p.panBtnFile01.set_flexgrow("1");
                p.panBtnFile01.set_flexmainaxisalign("end");
                p.panBtnFile01.set_horizontalgap("10");
                p.panBtnFile01.move("433","58","305","34",null,null);

                p.panTitle01.set_taborder("62");
                p.panTitle01.set_cssclass("pan_WF_FileTitle");
                p.panTitle01.set_flexwrap("wrap");
                p.panTitle01.set_fittocontents("height");
                p.panTitle01.set_flexcrossaxisalign("center");
                p.panTitle01.set_spacing("0px 0px 10px 0px");
                p.panTitle01.move("0","124","100%","46",null,null);

                p.Grid00_00.set_taborder("56");
                p.Grid00_00.set_binddataset("dsFile1");
                p.Grid00_00.set_autofittype("col");
                p.Grid00_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00.move("20.00","114","100%","40",null,null);

                p.Button00_01.set_taborder("59");
                p.Button00_01.set_text("샘플첨부파일명");
                p.Button00_01.set_cssclass("btn_WF_Small");
                p.Button00_01.set_fittocontents("width");
                p.Button00_01.move("813","76","120","34",null,null);

                p.Static00_00_01.set_taborder("63");
                p.Static00_00_01.set_text("파일수 : ");
                p.Static00_00_01.set_fittocontents("width");
                p.Static00_00_01.move("88","123","48","46",null,null);

                p.btn_del_file_1_01.set_taborder("67");
                p.btn_del_file_1_01.set_text("전체파일삭제");
                p.btn_del_file_1_01.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_1_01.set_fittocontents("width");
                p.btn_del_file_1_01.move("512","135","125","34",null,null);

                p.Panel00_00_00_01.set_taborder("69");
                p.Panel00_00_00_01.move("20","51","100%","46",null,null);

                p.Grid00_01.set_taborder("70");
                p.Grid00_01.set_binddataset("dsFile1");
                p.Grid00_01.set_autofittype("col");
                p.Grid00_01.set_cssclass("grd_WF_FileAdd");
                p.Grid00_01.move("20.00","114","100%","40",null,null);

                p.panFile01.set_taborder("71");
                p.panFile01.set_fittocontents("height");
                p.panFile01.set_spacing("10px 20px 10px 20px");
                p.panFile01.set_flexwrap("wrap");
                p.panFile01.set_cssclass("pal_WF_DtlBg");
                p.panFile01.set_verticalgap("4");
                p.panFile01.move("0","42","100.00%","161",null,null);

                p.pan09.set_taborder("72");
                p.pan09.set_type("horizontal");
                p.pan09.set_flexgrow("1");
                p.pan09.set_verticalgap("4");
                p.pan09.set_flexwrap("wrap");
                p.pan09.set_horizontalgap("20");
                p.pan09.set_cssclass("pal_WF_DtlBg");
                p.pan09.set_spacing("10px 20px 10px 20px");
                p.pan09.set_fittocontents("height");
                p.pan09.set_minwidth("");
                p.pan09.move("20.00","1221","100.00%","210",null,null);

                p.Grid00_02.set_taborder("74");
                p.Grid00_02.set_binddataset("Dataset02");
                p.Grid00_02.set_autofittype("none");
                p.Grid00_02.move("0","-4542","970","300",null,null);

                p.staLabel00_00.set_taborder("73");
                p.staLabel00_00.set_text("담당부서 검토의견");
                p.staLabel00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00.move("0","-4586","100.00%","45",null,null);

                p.Panel00_00_00_00.set_taborder("55");
                p.Panel00_00_00_00.move("20","51","100%","46",null,null);

                p.Static02_01.set_taborder("65");
                p.Static02_01.set_text("개");
                p.Static02_01.set_fittocontents("width");
                p.Static02_01.move("293","131","13","46",null,null);

                p.panFileNum01.set_taborder("66");
                p.panFileNum01.set_flexgrow("1");
                p.panFileNum01.set_horizontalgap("4");
                p.panFileNum01.move("20","190","305","46",null,null);

                p.panBtnDel01.set_taborder("68");
                p.panBtnDel01.set_flexcrossaxisalign("center");
                p.panBtnDel01.set_flexmainaxisalign("end");
                p.panBtnDel01.set_flexgrow("1");
                p.panBtnDel01.move("517","141","305","46",null,null);

                p.Static01_01.set_taborder("64");
                p.Static01_01.set_text("0");
                p.Static01_01.set_fittocontents("width");
                p.Static01_01.move("165","143","9","46",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div07.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div07.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div07.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div07.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div09.form
            obj = new Layout("default","",0,0,this.divForm.form.Div09.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00_00.set_taborder("0");
                p.Static00_00.set_text("인계인수상태(건축마감상태)");
                p.Static00_00.set_cssclass("sta_WF_Txt60018");
                p.Static00_00.set_fittocontents("width");
                p.Static00_00.move("537","84","100%","46",null,null);

                p.staLabel00_02.set_taborder("1");
                p.staLabel00_02.set_text("바닥상태");
                p.staLabel00_02.set_cssclass("sta_WF_Label");
                p.staLabel00_02.move("10","98","100%","46",null,null);

                p.staLabel00_00.set_taborder("2");
                p.staLabel00_00.set_readonly("true");
                p.staLabel00_00.move("10.00","158","100%","40",null,null);

                p.Panel00.set_taborder("3");
                p.Panel00.set_type("vertical");
                p.Panel00.set_flexgrow("1");
                p.Panel00.set_minwidth("");
                p.Panel00.move("10.00","98","305","132",null,null);

                p.Pal00.set_taborder("4");
                p.Pal00.set_horizontalgap("20");
                p.Pal00.set_flexcrossaxiswrapalign("start");
                p.Pal00.set_flexwrap("wrap");
                p.Pal00.set_fittocontents("height");
                p.Pal00.set_verticalgap("0");
                p.Pal00.set_spacing("0px 20px 10px 20px");
                p.Pal00.set_cssclass("pal_WF_DtlBg");
                p.Pal00.set_type("horizontal");
                p.Pal00.move("0","60","100.00%","143",null,null);

                p.staLabel01_01.set_taborder("5");
                p.staLabel01_01.set_text("벽체상태");
                p.staLabel01_01.set_cssclass("sta_WF_Label");
                p.staLabel01_01.move("10","98","100%","46",null,null);

                p.edt01_01.set_taborder("6");
                p.edt01_01.set_readonly("true");
                p.edt01_01.move("10.00","158","100%","40",null,null);

                p.Panel01_01.set_taborder("7");
                p.Panel01_01.set_type("vertical");
                p.Panel01_01.set_flexgrow("1");
                p.Panel01_01.set_minwidth("");
                p.Panel01_01.move("10.00","98","305","86",null,null);

                p.Pal01.set_taborder("8");
                p.Pal01.set_horizontalgap("20");
                p.Pal01.set_flexcrossaxiswrapalign("start");
                p.Pal01.set_flexwrap("wrap");
                p.Pal01.set_fittocontents("height");
                p.Pal01.set_verticalgap("0");
                p.Pal01.set_spacing("0px 20px 10px 20px");
                p.Pal01.set_cssclass("pal_WF_DtlBg");
                p.Pal01.set_type("horizontal");
                p.Pal01.move("0","60","100.00%","96",null,null);

                p.staLabel02_01.set_taborder("9");
                p.staLabel02_01.set_text("천장상태");
                p.staLabel02_01.set_cssclass("sta_WF_Label");
                p.staLabel02_01.move("10","98","100%","46",null,null);

                p.edt02_01.set_taborder("10");
                p.edt02_01.set_readonly("true");
                p.edt02_01.move("10.00","158","100%","40",null,null);

                p.Panel02_01.set_taborder("11");
                p.Panel02_01.set_type("vertical");
                p.Panel02_01.set_flexgrow("1");
                p.Panel02_01.set_minwidth("");
                p.Panel02_01.move("10.00","98","305","86",null,null);

                p.Pal02.set_taborder("12");
                p.Pal02.set_horizontalgap("20");
                p.Pal02.set_flexcrossaxiswrapalign("start");
                p.Pal02.set_flexwrap("wrap");
                p.Pal02.set_fittocontents("height");
                p.Pal02.set_verticalgap("0");
                p.Pal02.set_spacing("0px 20px 10px 20px");
                p.Pal02.set_cssclass("pal_WF_DtlBg");
                p.Pal02.set_type("horizontal");
                p.Pal02.move("0","60","100.00%","96",null,null);

                p.staLabel03_01.set_taborder("13");
                p.staLabel03_01.set_text("기타상태");
                p.staLabel03_01.set_cssclass("sta_WF_Label");
                p.staLabel03_01.move("10","98","100%","46",null,null);

                p.edt03_01.set_taborder("14");
                p.edt03_01.set_readonly("true");
                p.edt03_01.move("10.00","158","100%","40",null,null);

                p.Panel03_01.set_taborder("15");
                p.Panel03_01.set_type("vertical");
                p.Panel03_01.set_flexgrow("1");
                p.Panel03_01.set_minwidth("");
                p.Panel03_01.move("10.00","98","305","86",null,null);

                p.Pal03.set_taborder("16");
                p.Pal03.set_horizontalgap("20");
                p.Pal03.set_flexcrossaxiswrapalign("start");
                p.Pal03.set_flexwrap("wrap");
                p.Pal03.set_fittocontents("height");
                p.Pal03.set_verticalgap("0");
                p.Pal03.set_spacing("0px 20px 10px 20px");
                p.Pal03.set_cssclass("pal_WF_DtlBg");
                p.Pal03.set_type("horizontal");
                p.Pal03.move("0","60","100.00%","96",null,null);

                p.Static04_01.set_taborder("17");
                p.Static04_01.set_text("인계인수상태(설비시설상태)");
                p.Static04_01.set_cssclass("sta_WF_Txt60018");
                p.Static04_01.set_fittocontents("width");
                p.Static04_01.move("537","84","100%","46",null,null);

                p.staLabel04_01.set_taborder("18");
                p.staLabel04_01.set_text("기계상태");
                p.staLabel04_01.set_cssclass("sta_WF_Label");
                p.staLabel04_01.move("10","98","100%","46",null,null);

                p.edt04_01.set_taborder("19");
                p.edt04_01.set_readonly("true");
                p.edt04_01.move("10.00","158","100%","40",null,null);

                p.Panel04_01.set_taborder("20");
                p.Panel04_01.set_type("vertical");
                p.Panel04_01.set_flexgrow("1");
                p.Panel04_01.set_minwidth("");
                p.Panel04_01.move("10.00","98","305","132",null,null);

                p.Pal04.set_taborder("21");
                p.Pal04.set_horizontalgap("20");
                p.Pal04.set_flexcrossaxiswrapalign("start");
                p.Pal04.set_flexwrap("wrap");
                p.Pal04.set_fittocontents("height");
                p.Pal04.set_verticalgap("0");
                p.Pal04.set_spacing("0px 20px 10px 20px");
                p.Pal04.set_cssclass("pal_WF_DtlBg");
                p.Pal04.set_type("horizontal");
                p.Pal04.move("0","60","100.00%","143",null,null);

                p.staLabel05_01.set_taborder("22");
                p.staLabel05_01.set_text("전기상태");
                p.staLabel05_01.set_cssclass("sta_WF_Label");
                p.staLabel05_01.move("10","98","100%","46",null,null);

                p.edt05_01.set_taborder("23");
                p.edt05_01.set_readonly("true");
                p.edt05_01.move("10.00","158","100%","40",null,null);

                p.Panel05_01.set_taborder("24");
                p.Panel05_01.set_type("vertical");
                p.Panel05_01.set_flexgrow("1");
                p.Panel05_01.set_minwidth("");
                p.Panel05_01.move("10.00","98","305","86",null,null);

                p.Pal05.set_taborder("25");
                p.Pal05.set_horizontalgap("20");
                p.Pal05.set_flexcrossaxiswrapalign("start");
                p.Pal05.set_flexwrap("wrap");
                p.Pal05.set_fittocontents("height");
                p.Pal05.set_verticalgap("0");
                p.Pal05.set_spacing("0px 20px 10px 20px");
                p.Pal05.set_cssclass("pal_WF_DtlBg");
                p.Pal05.set_type("horizontal");
                p.Pal05.move("0","60","100.00%","96",null,null);

                p.staLabel06_01.set_taborder("26");
                p.staLabel06_01.set_text("통신상태");
                p.staLabel06_01.set_cssclass("sta_WF_Label");
                p.staLabel06_01.move("10","98","100%","46",null,null);

                p.edt06_01.set_taborder("27");
                p.edt06_01.set_readonly("true");
                p.edt06_01.move("10.00","158","100%","40",null,null);

                p.Panel06_01.set_taborder("28");
                p.Panel06_01.set_type("vertical");
                p.Panel06_01.set_flexgrow("1");
                p.Panel06_01.set_minwidth("");
                p.Panel06_01.move("10.00","98","305","86",null,null);

                p.Pal06.set_taborder("29");
                p.Pal06.set_horizontalgap("20");
                p.Pal06.set_flexcrossaxiswrapalign("start");
                p.Pal06.set_flexwrap("wrap");
                p.Pal06.set_fittocontents("height");
                p.Pal06.set_verticalgap("0");
                p.Pal06.set_spacing("0px 20px 10px 20px");
                p.Pal06.set_cssclass("pal_WF_DtlBg");
                p.Pal06.set_type("horizontal");
                p.Pal06.move("0","60","100.00%","96",null,null);

                p.staLabel07_01.set_taborder("30");
                p.staLabel07_01.set_text("소방상태");
                p.staLabel07_01.set_cssclass("sta_WF_Label");
                p.staLabel07_01.move("10","98","100%","46",null,null);

                p.edt07_01.set_taborder("31");
                p.edt07_01.set_readonly("true");
                p.edt07_01.move("10.00","158","100%","40",null,null);

                p.Panel07_01.set_taborder("32");
                p.Panel07_01.set_type("vertical");
                p.Panel07_01.set_flexgrow("1");
                p.Panel07_01.set_minwidth("");
                p.Panel07_01.move("10.00","98","305","86",null,null);

                p.Pal07.set_taborder("33");
                p.Pal07.set_horizontalgap("20");
                p.Pal07.set_flexcrossaxiswrapalign("start");
                p.Pal07.set_flexwrap("wrap");
                p.Pal07.set_fittocontents("height");
                p.Pal07.set_verticalgap("0");
                p.Pal07.set_spacing("0px 20px 10px 20px");
                p.Pal07.set_cssclass("pal_WF_DtlBg");
                p.Pal07.set_type("horizontal");
                p.Pal07.move("0","60","100.00%","96",null,null);

                p.staLabel08_01.set_taborder("34");
                p.staLabel08_01.set_text("보안상태");
                p.staLabel08_01.set_cssclass("sta_WF_Label");
                p.staLabel08_01.move("10","98","100%","46",null,null);

                p.edt08_01.set_taborder("35");
                p.edt08_01.set_readonly("true");
                p.edt08_01.move("10.00","158","100%","40",null,null);

                p.Panel08_01.set_taborder("36");
                p.Panel08_01.set_type("vertical");
                p.Panel08_01.set_flexgrow("1");
                p.Panel08_01.set_minwidth("");
                p.Panel08_01.move("10.00","98","305","86",null,null);

                p.Pal08.set_taborder("37");
                p.Pal08.set_horizontalgap("20");
                p.Pal08.set_flexcrossaxiswrapalign("start");
                p.Pal08.set_flexwrap("wrap");
                p.Pal08.set_fittocontents("height");
                p.Pal08.set_verticalgap("0");
                p.Pal08.set_spacing("0px 20px 10px 20px");
                p.Pal08.set_cssclass("pal_WF_DtlBg");
                p.Pal08.set_type("horizontal");
                p.Pal08.move("0","60","100.00%","96",null,null);

                p.staLabel09_01.set_taborder("38");
                p.staLabel09_01.set_text("기타상태");
                p.staLabel09_01.set_cssclass("sta_WF_Label");
                p.staLabel09_01.move("10","98","100%","46",null,null);

                p.edt09_01.set_taborder("39");
                p.edt09_01.set_readonly("true");
                p.edt09_01.move("10.00","158","100%","40",null,null);

                p.Panel09_01.set_taborder("40");
                p.Panel09_01.set_type("vertical");
                p.Panel09_01.set_flexgrow("1");
                p.Panel09_01.set_minwidth("");
                p.Panel09_01.move("10.00","98","305","86",null,null);

                p.Pal09.set_taborder("41");
                p.Pal09.set_horizontalgap("20");
                p.Pal09.set_flexcrossaxiswrapalign("start");
                p.Pal09.set_flexwrap("wrap");
                p.Pal09.set_fittocontents("height");
                p.Pal09.set_verticalgap("0");
                p.Pal09.set_spacing("0px 20px 10px 20px");
                p.Pal09.set_cssclass("pal_WF_DtlBg");
                p.Pal09.set_type("horizontal");
                p.Pal09.move("0","60","100.00%","96",null,null);

                p.Static10_01.set_taborder("42");
                p.Static10_01.set_text("인계인수정보");
                p.Static10_01.set_cssclass("sta_WF_Txt60018");
                p.Static10_01.set_fittocontents("width");
                p.Static10_01.move("537","84","100%","46",null,null);

                p.staLabel10_01.set_taborder("43");
                p.staLabel10_01.set_text("인계인수 일시");
                p.staLabel10_01.set_cssclass("sta_WF_Label_E");
                p.staLabel10_01.move("10","98","100%","46",null,null);

                p.Calendar10_02.set_taborder("44");
                p.Calendar10_02.set_readonly("true");
                p.Calendar10_02.move("98","1124","50%","40",null,null);

                p.cbo10_02.set_taborder("45");
                p.cbo10_02.set_innerdataset(divForm_form_Div09_form_cbo10_02_innerdataset);
                p.cbo10_02.set_codecolumn("codecolumn");
                p.cbo10_02.set_datacolumn("datacolumn");
                p.cbo10_02.set_displaynulltext("선택");
                p.cbo10_02.set_readonly("true");
                p.cbo10_02.set_text("");
                p.cbo10_02.set_index("-1");
                p.cbo10_02.move("334","1124","25%","40",null,null);

                p.Static00.set_taborder("46");
                p.Static00.set_text("시");
                p.Static00.set_fittocontents("width");
                p.Static00.move("544.00","1124","13","40",null,null);

                p.Static01.set_taborder("47");
                p.Static01.set_text("분");
                p.Static01.set_fittocontents("width");
                p.Static01.move("778.00","1124","13","40",null,null);

                p.Panel10_02.set_taborder("48");
                p.Panel10_02.set_horizontalgap("10");
                p.Panel10_02.move("98.00","1124","100%","40",null,null);

                p.Panel10_01.set_taborder("49");
                p.Panel10_01.set_type("vertical");
                p.Panel10_01.set_flexgrow("1");
                p.Panel10_01.set_minwidth("");
                p.Panel10_01.move("10.00","98","305","132",null,null);

                p.Panel11_00_00.set_taborder("50");
                p.Panel11_00_00.set_type("horizontal");
                p.Panel11_00_00.set_horizontalgap("10");
                p.Panel11_00_00.set_flexgrow("1");
                p.Panel11_00_00.set_minwidth("");
                p.Panel11_00_00.move("685","150","305","1",null,null);

                p.Pal10.set_taborder("51");
                p.Pal10.set_horizontalgap("20");
                p.Pal10.set_flexcrossaxiswrapalign("start");
                p.Pal10.set_flexwrap("wrap");
                p.Pal10.set_fittocontents("height");
                p.Pal10.set_verticalgap("0");
                p.Pal10.set_spacing("0px 20px 10px 20px");
                p.Pal10.set_cssclass("pal_WF_DtlBg");
                p.Pal10.set_type("horizontal");
                p.Pal10.move("0","60","100.00%","143",null,null);

                p.edt11_02_00.set_taborder("101");
                p.edt11_02_00.set_readonly("true");
                p.edt11_02_00.move("400","1146","25%","40",null,null);

                p.staLabel11_01.set_taborder("52");
                p.staLabel11_01.set_text("입회자 유지보수팀");
                p.staLabel11_01.set_cssclass("sta_WF_Label");
                p.staLabel11_01.move("10","98","100%","46",null,null);

                p.edt11_01.set_taborder("53");
                p.edt11_01.set_readonly("true");
                p.edt11_01.move("10.00","158","100%","40",null,null);

                p.Panel11_01.set_taborder("54");
                p.Panel11_01.set_type("vertical");
                p.Panel11_01.set_flexgrow("1");
                p.Panel11_01.set_minwidth("");
                p.Panel11_01.move("10.00","98","305","86",null,null);

                p.staLabel11_02.set_taborder("55");
                p.staLabel11_02.set_text("입회자 성명");
                p.staLabel11_02.set_cssclass("sta_WF_Label");
                p.staLabel11_02.move("10","98","100%","46",null,null);

                p.edt11_02.set_taborder("56");
                p.edt11_02.set_readonly("true");
                p.edt11_02.move("10.00","158","100%","40",null,null);

                p.Panel11_02.set_taborder("57");
                p.Panel11_02.set_type("vertical");
                p.Panel11_02.set_flexgrow("1");
                p.Panel11_02.set_minwidth("");
                p.Panel11_02.move("10.00","98","305","86",null,null);

                p.Pal11.set_taborder("58");
                p.Pal11.set_horizontalgap("20");
                p.Pal11.set_flexcrossaxiswrapalign("start");
                p.Pal11.set_flexwrap("wrap");
                p.Pal11.set_fittocontents("height");
                p.Pal11.set_verticalgap("0");
                p.Pal11.set_spacing("0px 20px 10px 20px");
                p.Pal11.set_cssclass("pal_WF_DtlBg");
                p.Pal11.set_type("horizontal");
                p.Pal11.move("0","60","100.00%","96",null,null);

                p.staLabel12_01.set_taborder("59");
                p.staLabel12_01.set_text("인계자 소속");
                p.staLabel12_01.set_cssclass("sta_WF_Label");
                p.staLabel12_01.move("10","98","100%","46",null,null);

                p.edt12_01.set_taborder("60");
                p.edt12_01.set_readonly("true");
                p.edt12_01.move("10.00","158","100%","40",null,null);

                p.Panel12_01.set_taborder("61");
                p.Panel12_01.set_type("vertical");
                p.Panel12_01.set_flexgrow("1");
                p.Panel12_01.set_minwidth("");
                p.Panel12_01.move("10.00","98","305","86",null,null);

                p.staLabel12_02.set_taborder("62");
                p.staLabel12_02.set_text("인계자 직위");
                p.staLabel12_02.set_cssclass("sta_WF_Label");
                p.staLabel12_02.move("894.00","1340","100%","46",null,null);

                p.edt12_02.set_taborder("63");
                p.edt12_02.set_readonly("true");
                p.edt12_02.move("894.00","1386","100%","40",null,null);

                p.Panel12_02.set_taborder("64");
                p.Panel12_02.set_type("vertical");
                p.Panel12_02.set_flexgrow("1");
                p.Panel12_02.set_minwidth("");
                p.Panel12_02.move("894.00","1340","305","86",null,null);

                p.Pal12.set_taborder("65");
                p.Pal12.set_horizontalgap("20");
                p.Pal12.set_flexcrossaxiswrapalign("start");
                p.Pal12.set_flexwrap("wrap");
                p.Pal12.set_fittocontents("height");
                p.Pal12.set_verticalgap("0");
                p.Pal12.set_spacing("0px 20px 10px 20px");
                p.Pal12.set_cssclass("pal_WF_DtlBg");
                p.Pal12.set_type("horizontal");
                p.Pal12.move("0","60","100.00%","96",null,null);

                p.staLabel13_1.set_taborder("66");
                p.staLabel13_1.set_text("인계자 성명");
                p.staLabel13_1.set_cssclass("sta_WF_Label");
                p.staLabel13_1.move("10","98","100%","46",null,null);

                p.edt13_1.set_taborder("67");
                p.edt13_1.set_readonly("true");
                p.edt13_1.move("10.00","158","100%","40",null,null);

                p.Panel13_01.set_taborder("68");
                p.Panel13_01.set_type("vertical");
                p.Panel13_01.set_flexgrow("1");
                p.Panel13_01.set_minwidth("");
                p.Panel13_01.move("10.00","98","305","86",null,null);

                p.Panel13_02.set_taborder("69");
                p.Panel13_02.set_type("horizontal");
                p.Panel13_02.set_horizontalgap("10");
                p.Panel13_02.set_flexgrow("1");
                p.Panel13_02.set_minwidth("");
                p.Panel13_02.move("685","150","305","1",null,null);

                p.Pal13.set_taborder("70");
                p.Pal13.set_horizontalgap("20");
                p.Pal13.set_flexcrossaxiswrapalign("start");
                p.Pal13.set_flexwrap("wrap");
                p.Pal13.set_fittocontents("height");
                p.Pal13.set_verticalgap("0");
                p.Pal13.set_spacing("0px 20px 10px 20px");
                p.Pal13.set_cssclass("pal_WF_DtlBg");
                p.Pal13.set_type("horizontal");
                p.Pal13.move("0","60","100.00%","96",null,null);

                p.staLabel14_01.set_taborder("71");
                p.staLabel14_01.set_text("인수자 소속");
                p.staLabel14_01.set_cssclass("sta_WF_Label");
                p.staLabel14_01.move("50.00","1413","100.00%","46",null,null);

                p.edt14_01.set_taborder("72");
                p.edt14_01.set_readonly("true");
                p.edt14_01.move("20.00","1436","100.00%","40",null,null);

                p.Panel14_01.set_taborder("73");
                p.Panel14_01.set_type("vertical");
                p.Panel14_01.set_flexgrow("1");
                p.Panel14_01.set_minwidth("");
                p.Panel14_01.move("25.00","1420","475","86",null,null);

                p.staLabel14_02.set_taborder("74");
                p.staLabel14_02.set_text("인수자 직위");
                p.staLabel14_02.set_cssclass("sta_WF_Label");
                p.staLabel14_02.move("600.00","1410","100.00%","46",null,null);

                p.edt14_02.set_taborder("75");
                p.edt14_02.set_readonly("true");
                p.edt14_02.move("554.00","1436","100.00%","40",null,null);

                p.Panel14_02.set_taborder("76");
                p.Panel14_02.set_type("vertical");
                p.Panel14_02.set_flexgrow("1");
                p.Panel14_02.set_minwidth("");
                p.Panel14_02.move("520.00","1420","475","86",null,null);

                p.Pal14.set_taborder("77");
                p.Pal14.set_horizontalgap("20");
                p.Pal14.set_flexcrossaxiswrapalign("start");
                p.Pal14.set_flexwrap("wrap");
                p.Pal14.set_fittocontents("height");
                p.Pal14.set_verticalgap("0");
                p.Pal14.set_spacing("0px 20px 10px 20px");
                p.Pal14.set_cssclass("pal_WF_DtlBg");
                p.Pal14.set_type("horizontal");
                p.Pal14.move("5","1420","100.00%","96",null,null);

                p.staLabel15.set_taborder("78");
                p.staLabel15.set_text("인수자 성명");
                p.staLabel15.set_cssclass("sta_WF_Label");
                p.staLabel15.move("0.00","2030","100.00%","43",null,null);

                p.edt15.set_taborder("79");
                p.edt15.set_readonly("true");
                p.edt15.move("0.00","2102","100.00%","37",null,null);

                p.Panel15.set_taborder("80");
                p.Panel15.set_type("vertical");
                p.Panel15.set_flexgrow("1");
                p.Panel15.set_minwidth("");
                p.Panel15.move("71.00","1527","475","86",null,null);

                p.Panel11_00.set_taborder("81");
                p.Panel11_00.set_type("horizontal");
                p.Panel11_00.set_horizontalgap("10");
                p.Panel11_00.set_flexgrow("1");
                p.Panel11_00.set_minwidth("");
                p.Panel11_00.move("566.00","1527","475","1",null,null);

                p.Pal15.set_taborder("82");
                p.Pal15.set_horizontalgap("20");
                p.Pal15.set_flexcrossaxiswrapalign("start");
                p.Pal15.set_flexwrap("wrap");
                p.Pal15.set_fittocontents("height");
                p.Pal15.set_verticalgap("0");
                p.Pal15.set_spacing("0px 20px 10px 20px");
                p.Pal15.set_cssclass("pal_WF_DtlBg");
                p.Pal15.set_type("horizontal");
                p.Pal15.move("51","1527","100.00%","93",null,null);

                p.staLabel16.set_taborder("83");
                p.staLabel16.set_text("비고");
                p.staLabel16.set_cssclass("sta_WF_Label");
                p.staLabel16.move("0.00","2030","100.00%","43",null,null);

                p.txa16.set_taborder("84");
                p.txa16.set_displaynulltext("내용 입력");
                p.txa16.set_readonly("true");
                p.txa16.move("200.00","728","100%","100",null,null);

                p.Panel16.set_taborder("85");
                p.Panel16.set_type("vertical");
                p.Panel16.set_flexgrow("1");
                p.Panel16.set_minwidth("");
                p.Panel16.move("71.00","1527","475","120",null,null);

                p.Pal16.set_taborder("86");
                p.Pal16.set_horizontalgap("20");
                p.Pal16.set_flexcrossaxiswrapalign("start");
                p.Pal16.set_flexwrap("wrap");
                p.Pal16.set_fittocontents("height");
                p.Pal16.set_verticalgap("0");
                p.Pal16.set_spacing("0px 20px 10px 20px");
                p.Pal16.set_cssclass("pal_WF_DtlBg");
                p.Pal16.set_type("horizontal");
                p.Pal16.move("51","1527","100.00%","130",null,null);

                p.staLabel00_02_00.set_taborder("87");
                p.staLabel00_02_00.set_text("현장사진");
                p.staLabel00_02_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_00.set_fittocontents("width");
                p.staLabel00_02_00.move("0","44","305","46",null,null);

                p.Button00.set_taborder("88");
                p.Button00.set_text("샘플첨부파일명");
                p.Button00.set_cssclass("btn_WF_Small");
                p.Button00.set_fittocontents("width");
                p.Button00.move("813","76","120","34",null,null);

                p.btn_file_1.set_taborder("89");
                p.btn_file_1.set_text("파일선택");
                p.btn_file_1.set_cssclass("btn_WF_FileUp");
                p.btn_file_1.set_fittocontents("width");
                p.btn_file_1.move("124","58","116","34",null,null);

                p.panBtnFile.set_taborder("90");
                p.panBtnFile.set_flexgrow("1");
                p.panBtnFile.set_flexmainaxisalign("end");
                p.panBtnFile.set_horizontalgap("10");
                p.panBtnFile.move("433","58","305","34",null,null);

                p.panTitle.set_taborder("91");
                p.panTitle.set_cssclass("pan_WF_FileTitle");
                p.panTitle.set_flexwrap("wrap");
                p.panTitle.set_fittocontents("height");
                p.panTitle.set_flexcrossaxisalign("center");
                p.panTitle.set_spacing("0px 0px 10px 0px");
                p.panTitle.move("0","124","100%","46",null,null);

                p.Static00_00_00.set_taborder("92");
                p.Static00_00_00.set_text("파일수 : ");
                p.Static00_00_00.set_fittocontents("width");
                p.Static00_00_00.move("88","123","48","46",null,null);

                p.Static01_00.set_taborder("93");
                p.Static01_00.set_text("0");
                p.Static01_00.set_fittocontents("width");
                p.Static01_00.move("165","143","9","46",null,null);

                p.Static02.set_taborder("94");
                p.Static02.set_text("개");
                p.Static02.set_fittocontents("width");
                p.Static02.move("293","131","13","46",null,null);

                p.panFileNum.set_taborder("95");
                p.panFileNum.set_flexgrow("1");
                p.panFileNum.set_horizontalgap("4");
                p.panFileNum.move("20","190","305","46",null,null);

                p.btn_del_file_1.set_taborder("96");
                p.btn_del_file_1.set_text("전체파일삭제");
                p.btn_del_file_1.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_1.set_fittocontents("width");
                p.btn_del_file_1.move("512","135","125","34",null,null);

                p.panBtnDel.set_taborder("97");
                p.panBtnDel.set_flexcrossaxisalign("center");
                p.panBtnDel.set_flexmainaxisalign("end");
                p.panBtnDel.set_flexgrow("1");
                p.panBtnDel.move("517","141","305","46",null,null);

                p.Panel00_00_00.set_taborder("98");
                p.Panel00_00_00.move("20","51","100%","46",null,null);

                p.Grid00.set_taborder("99");
                p.Grid00.set_binddataset("dsFile1");
                p.Grid00.set_autofittype("col");
                p.Grid00.set_cssclass("grd_WF_FileAdd");
                p.Grid00.move("20.00","114","100%","40",null,null);

                p.panFile.set_taborder("100");
                p.panFile.set_fittocontents("height");
                p.panFile.set_spacing("10px 20px 10px 20px");
                p.panFile.set_flexwrap("wrap");
                p.panFile.set_cssclass("pal_WF_DtlBg");
                p.panFile.set_verticalgap("4");
                p.panFile.move("0","42","100.00%","161",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div09.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div09.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div09.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div09.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div10.form
            obj = new Layout("default","",0,0,this.divForm.form.Div10.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel00.set_taborder("0");
                p.staLabel00.set_text("전달사항");
                p.staLabel00.set_cssclass("sta_WF_Label");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.txa00_01.set_taborder("1");
                p.txa00_01.set_displaynulltext("내용입력");
                p.txa00_01.set_readonly("false");
                p.txa00_01.move("43","1193","100%","100",null,null);

                p.sta00_01.set_taborder("2");
                p.sta00_01.set_text("미팅요청 일시/담당자 및 연락처 등 기입");
                p.sta00_01.set_cssclass("sta_WF_Des");
                p.sta00_01.set_fittocontents("height");
                p.sta00_01.move("43.00","1383","100%","33",null,null);

                p.Panel00_01.set_taborder("3");
                p.Panel00_01.set_background("#ffffff");
                p.Panel00_01.set_verticalgap("10");
                p.Panel00_01.set_type("vertical");
                p.Panel00_01.set_fittocontents("height");
                p.Panel00_01.move("43.00","1193","100%","143",null,null);

                p.Panel00.set_taborder("4");
                p.Panel00.set_type("vertical");
                p.Panel00.set_flexgrow("1");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_minwidth("");
                p.Panel00.move("20.00","950","970","189",null,null);

                p.Pal00.set_taborder("5");
                p.Pal00.set_horizontalgap("20");
                p.Pal00.set_flexcrossaxiswrapalign("start");
                p.Pal00.set_flexwrap("wrap");
                p.Pal00.set_fittocontents("height");
                p.Pal00.set_verticalgap("0");
                p.Pal00.set_spacing("0px 20px 10px 20px");
                p.Pal00.set_cssclass("pal_WF_DtlBg");
                p.Pal00.set_type("horizontal");
                p.Pal00.move("51","1527","100.00%","200",null,null);

                p.panFile.set_taborder("27");
                p.panFile.set_fittocontents("height");
                p.panFile.set_spacing("10px 20px 10px 20px");
                p.panFile.set_flexwrap("wrap");
                p.panFile.set_cssclass("pal_WF_DtlBg");
                p.panFile.set_verticalgap("4");
                p.panFile.move("0","42","100.00%","161",null,null);

                p.staLabel14_01.set_taborder("6");
                p.staLabel14_01.set_text("문서출력");
                p.staLabel14_01.set_cssclass("sta_WF_Label");
                p.staLabel14_01.move("50.00","1413","100.00%","46",null,null);

                p.Button01.set_taborder("7");
                p.Button01.set_text("인계인수확인서 출력");
                p.Button01.set_fittocontents("width");
                p.Button01.move("938","414","163","40",null,null);

                p.Panel14_01.set_taborder("8");
                p.Panel14_01.set_type("vertical");
                p.Panel14_01.set_flexgrow("1");
                p.Panel14_01.set_minwidth("");
                p.Panel14_01.move("25.00","1420","475","86",null,null);

                p.Pal02.set_taborder("9");
                p.Pal02.set_horizontalgap("20");
                p.Pal02.set_flexcrossaxiswrapalign("start");
                p.Pal02.set_flexwrap("wrap");
                p.Pal02.set_fittocontents("height");
                p.Pal02.set_verticalgap("0");
                p.Pal02.set_spacing("0px 20px 10px 20px");
                p.Pal02.set_cssclass("pal_WF_DtlBg");
                p.Pal02.set_type("horizontal");
                p.Pal02.move("5","1420","100.00%","96",null,null);

                p.staLabel02_01.set_taborder("10");
                p.staLabel02_01.set_text("협조 처리내역");
                p.staLabel02_01.set_cssclass("sta_WF_Label");
                p.staLabel02_01.move("10","98","100%","46",null,null);

                p.Grid00.set_taborder("11");
                p.Grid00.set_binddataset("Dataset02");
                p.Grid00.set_autofittype("none");
                p.Grid00.move("20.00","94","100.00%","165",null,null);

                p.Panel02_01.set_taborder("12");
                p.Panel02_01.set_type("vertical");
                p.Panel02_01.set_flexgrow("1");
                p.Panel02_01.set_minwidth("");
                p.Panel02_01.move("20.00","50","970","210",null,null);

                p.Pal03.set_taborder("13");
                p.Pal03.set_horizontalgap("20");
                p.Pal03.set_flexcrossaxiswrapalign("start");
                p.Pal03.set_flexwrap("wrap");
                p.Pal03.set_fittocontents("height");
                p.Pal03.set_verticalgap("0");
                p.Pal03.set_spacing("0px 20px 10px 20px");
                p.Pal03.set_cssclass("pal_WF_DtlBg");
                p.Pal03.set_type("horizontal");
                p.Pal03.move("0","46","100.00%","224",null,null);

                p.staLabel00_02_00.set_taborder("14");
                p.staLabel00_02_00.set_text("기본시설물 체크리스트");
                p.staLabel00_02_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_00.set_fittocontents("width");
                p.staLabel00_02_00.move("0","44","305","46",null,null);

                p.Button00.set_taborder("15");
                p.Button00.set_text("샘플첨부파일명");
                p.Button00.set_cssclass("btn_WF_Small");
                p.Button00.set_fittocontents("width");
                p.Button00.move("813","76","120","34",null,null);

                p.btn_file_1.set_taborder("16");
                p.btn_file_1.set_text("파일선택");
                p.btn_file_1.set_cssclass("btn_WF_FileUp");
                p.btn_file_1.set_fittocontents("width");
                p.btn_file_1.move("124","58","116","34",null,null);

                p.panBtnFile.set_taborder("17");
                p.panBtnFile.set_flexgrow("1");
                p.panBtnFile.set_flexmainaxisalign("end");
                p.panBtnFile.set_horizontalgap("10");
                p.panBtnFile.move("433","58","305","34",null,null);

                p.panTitle.set_taborder("18");
                p.panTitle.set_cssclass("pan_WF_FileTitle");
                p.panTitle.set_flexwrap("wrap");
                p.panTitle.set_fittocontents("height");
                p.panTitle.set_flexcrossaxisalign("center");
                p.panTitle.set_spacing("0px 0px 10px 0px");
                p.panTitle.move("0","124","100%","46",null,null);

                p.Static00_00_00.set_taborder("19");
                p.Static00_00_00.set_text("파일수 : ");
                p.Static00_00_00.set_fittocontents("width");
                p.Static00_00_00.move("88","123","48","46",null,null);

                p.Static01_00.set_taborder("20");
                p.Static01_00.set_text("0");
                p.Static01_00.set_fittocontents("width");
                p.Static01_00.move("165","143","9","46",null,null);

                p.Static02.set_taborder("21");
                p.Static02.set_text("개");
                p.Static02.set_fittocontents("width");
                p.Static02.move("293","131","13","46",null,null);

                p.panFileNum.set_taborder("22");
                p.panFileNum.set_flexgrow("1");
                p.panFileNum.set_horizontalgap("4");
                p.panFileNum.move("20","190","305","46",null,null);

                p.btn_del_file_1.set_taborder("23");
                p.btn_del_file_1.set_text("전체파일삭제");
                p.btn_del_file_1.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_1.set_fittocontents("width");
                p.btn_del_file_1.move("512","135","125","34",null,null);

                p.panBtnDel.set_taborder("24");
                p.panBtnDel.set_flexcrossaxisalign("center");
                p.panBtnDel.set_flexmainaxisalign("end");
                p.panBtnDel.set_flexgrow("1");
                p.panBtnDel.move("517","141","305","46",null,null);

                p.Panel00_00_00.set_taborder("25");
                p.Panel00_00_00.move("20","51","100%","46",null,null);

                p.Grid00_00.set_taborder("26");
                p.Grid00_00.set_binddataset("dsFile1");
                p.Grid00_00.set_autofittype("col");
                p.Grid00_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00.move("20.00","114","100%","40",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div10.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div10.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div10.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div10.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div11.form
            obj = new Layout("default","",0,0,this.divForm.form.Div11.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabell07_01.set_taborder("0");
                p.staLabell07_01.set_text("인계인수지적사항 공종별 LIST");
                p.staLabell07_01.set_cssclass("sta_WF_Label");
                p.staLabell07_01.move("10","98","100%","46",null,null);

                p.Grid00.set_taborder("1");
                p.Grid00.set_binddataset("Dataset04");
                p.Grid00.set_autofittype("col");
                p.Grid00.set_visible("true");
                p.Grid00.move("279","92","100%","270",null,null);

                p.pan01.set_taborder("2");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_fittocontents("height");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("10px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.set_type("horizontal");
                p.pan01.move("0","60","100.00%","337",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div11.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div11.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div11.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div11.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div12.form
            obj = new Layout("default","",0,0,this.divForm.form.Div12.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.pan01.set_taborder("0");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_fittocontents("height");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("10px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.set_type("horizontal");
                p.pan01.move("0","60","100.00%","232",null,null);

                p.staLabel02_01_00.set_taborder("1");
                p.staLabel02_01_00.set_text("룸번호열쇠정보");
                p.staLabel02_01_00.set_cssclass("sta_WF_Label");
                p.staLabel02_01_00.move("10","98","100%","46",null,null);

                p.Grid00_00.set_taborder("2");
                p.Grid00_00.set_binddataset("Dataset02");
                p.Grid00_00.set_autofittype("col");
                p.Grid00_00.move("20.00","94","100.00%","165",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div12.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div12.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div12.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div12.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divInfoGuide.set_taborder("5");
                p.divInfoGuide.set_text("서비스 흐름 및 작업방법 안내");
                p.divInfoGuide.set_cssclass("div_WF_InfoGuide");
                p.divInfoGuide.set_minheight("50");
                p.divInfoGuide.set_maxheight("");
                p.divInfoGuide.move("1660.00","262","100%","300",null,null);

                p.sub_tit01.set_taborder("9");
                p.sub_tit01.set_background("#ffffff");
                p.sub_tit01.set_flexcrossaxisalign("end");
                p.sub_tit01.move("1630","674","100%","66",null,null);

                p.Div01.set_taborder("0");
                p.Div01.set_text("Div01");
                p.Div01.set_cssclass("div_WF_Bg");
                p.Div01.set_fittocontents("height");
                p.Div01.move("0","0","100%","500",null,null);

                p.sub_tit02.set_taborder("13");
                p.sub_tit02.set_background("#ffffff");
                p.sub_tit02.set_flexcrossaxisalign("end");
                p.sub_tit02.move("1630","674","100%","66",null,null);

                p.Div02.set_taborder("1");
                p.Div02.set_text("Div00");
                p.Div02.set_cssclass("div_WF_Bg");
                p.Div02.set_fittocontents("height");
                p.Div02.move("0","Div01:376.428","100%","192",null,null);

                p.sub_tit03.set_taborder("17");
                p.sub_tit03.set_background("#ffffff");
                p.sub_tit03.set_flexcrossaxisalign("end");
                p.sub_tit03.move("1630","674","100%","66",null,null);

                p.Div03.set_taborder("2");
                p.Div03.set_text("Div00");
                p.Div03.set_cssclass("div_WF_Bg");
                p.Div03.set_fittocontents("height");
                p.Div03.move("0","Div02:422.856","100%","735",null,null);

                p.sub_tit04.set_taborder("21");
                p.sub_tit04.set_background("#ffffff");
                p.sub_tit04.set_flexcrossaxisalign("end");
                p.sub_tit04.move("1630","674","100%","66",null,null);

                p.Div04.set_taborder("3");
                p.Div04.set_text("Div04");
                p.Div04.set_cssclass("div_WF_Bg");
                p.Div04.set_fittocontents("height");
                p.Div04.move("0","30","100%","1400",null,null);

                p.sub_tit05.set_taborder("25");
                p.sub_tit05.set_background("#ffffff");
                p.sub_tit05.set_flexcrossaxisalign("end");
                p.sub_tit05.move("1630","674","100%","66",null,null);

                p.Div05.set_taborder("4");
                p.Div05.set_text("Div00");
                p.Div05.set_cssclass("div_WF_Bg");
                p.Div05.set_fittocontents("height");
                p.Div05.move("0","30","100%","1000",null,null);

                p.sub_tit07.set_taborder("49");
                p.sub_tit07.set_background("#ffffff");
                p.sub_tit07.set_flexcrossaxisalign("end");
                p.sub_tit07.move("1630","674","100%","70",null,null);

                p.staSubTitle02_00.set_taborder("6");
                p.staSubTitle02_00.set_text("신청위치 정보");
                p.staSubTitle02_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00.move("1630.00","690","50%","50",null,null);

                p.btnTitle01.set_taborder("7");
                p.btnTitle01.set_cssclass("btn_WF_ACMinus");
                p.btnTitle01.set_text("");
                p.btnTitle01.move("2890.00","692","34","34",null,null);

                p.Panel01_02.set_taborder("8");
                p.Panel01_02.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02.set_spacing("0px 10px");
                p.Panel01_02.set_horizontalgap("10");
                p.Panel01_02.set_flexcrossaxisalign("center");
                p.Panel01_02.set_flexmainaxisalign("end");
                p.Panel01_02.move("2340.00","690","50%","50",null,null);

                p.staSubTitle02_00_00.set_taborder("10");
                p.staSubTitle02_00_00.set_text("신청자 정보");
                p.staSubTitle02_00_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_00.move("1630.00","690","50%","50",null,null);

                p.btnTitle02.set_taborder("11");
                p.btnTitle02.set_cssclass("btn_WF_ACMinus");
                p.btnTitle02.set_text("");
                p.btnTitle02.move("2890.00","692","34","34",null,null);

                p.Panel01_02_00.set_taborder("12");
                p.Panel01_02_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_00.set_spacing("0px 10px");
                p.Panel01_02_00.set_horizontalgap("10");
                p.Panel01_02_00.set_flexcrossaxisalign("center");
                p.Panel01_02_00.set_flexmainaxisalign("end");
                p.Panel01_02_00.move("2340.00","690","50%","50",null,null);

                p.staSubTitle02_00_01.set_taborder("14");
                p.staSubTitle02_00_01.set_text("고객정보");
                p.staSubTitle02_00_01.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_01.move("1630.00","690","50%","50",null,null);

                p.btnTitle03.set_taborder("15");
                p.btnTitle03.set_cssclass("btn_WF_ACMinus");
                p.btnTitle03.set_text("");
                p.btnTitle03.move("2890.00","692","34","34",null,null);

                p.Panel01_02_01.set_taborder("16");
                p.Panel01_02_01.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_01.set_spacing("0px 10px");
                p.Panel01_02_01.set_horizontalgap("10");
                p.Panel01_02_01.set_flexcrossaxisalign("center");
                p.Panel01_02_01.set_flexmainaxisalign("end");
                p.Panel01_02_01.move("2340.00","690","50%","50",null,null);

                p.staSubTitle02_00_02.set_taborder("18");
                p.staSubTitle02_00_02.set_text("청구정보");
                p.staSubTitle02_00_02.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_02.move("1630.00","690","50%","50",null,null);

                p.btnTitle04.set_taborder("19");
                p.btnTitle04.set_cssclass("btn_WF_ACMinus");
                p.btnTitle04.set_text("");
                p.btnTitle04.move("2890.00","692","34","34",null,null);

                p.Panel01_02_02.set_taborder("20");
                p.Panel01_02_02.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_02.set_spacing("0px 10px");
                p.Panel01_02_02.set_horizontalgap("10");
                p.Panel01_02_02.set_flexcrossaxisalign("center");
                p.Panel01_02_02.set_flexmainaxisalign("end");
                p.Panel01_02_02.move("2340.00","690","50%","50",null,null);

                p.staSubTitle02_00_02_00.set_taborder("22");
                p.staSubTitle02_00_02_00.set_text("총괄책임자 및 시설관리책임자");
                p.staSubTitle02_00_02_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_02_00.move("1630.00","690","50%","50",null,null);

                p.btnTitle05.set_taborder("23");
                p.btnTitle05.set_cssclass("btn_WF_ACMinus");
                p.btnTitle05.move("2890.00","692","34","34",null,null);

                p.Panel01_02_02_00.set_taborder("24");
                p.Panel01_02_02_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_02_00.set_spacing("0px 10px");
                p.Panel01_02_02_00.set_horizontalgap("10");
                p.Panel01_02_02_00.set_flexcrossaxisalign("center");
                p.Panel01_02_02_00.set_flexmainaxisalign("end");
                p.Panel01_02_02_00.move("2340.00","690","50%","50",null,null);

                p.Div07.set_taborder("50");
                p.Div07.set_text("Div00");
                p.Div07.set_cssclass("div_WF_Bg");
                p.Div07.set_fittocontents("height");
                p.Div07.move("0","30","100%","1227",null,null);

                p.staSubTitle06_02.set_taborder("26");
                p.staSubTitle06_02.set_text("인계인수 정보");
                p.staSubTitle06_02.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle06_02.move("1630.00","690","50%","50",null,null);

                p.Button01_02.set_taborder("27");
                p.Button01_02.set_cssclass("btn_WF_ACMinus");
                p.Button01_02.move("2890.00","692","34","34",null,null);

                p.Panel01_03.set_taborder("28");
                p.Panel01_03.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_03.set_spacing("0px 10px");
                p.Panel01_03.set_horizontalgap("10");
                p.Panel01_03.set_flexcrossaxisalign("center");
                p.Panel01_03.set_flexmainaxisalign("end");
                p.Panel01_03.move("2340.00","690","50%","50",null,null);

                p.sub_tit09.set_taborder("29");
                p.sub_tit09.set_background("#ffffff");
                p.sub_tit09.set_flexcrossaxisalign("end");
                p.sub_tit09.set_visible("false");
                p.sub_tit09.move("1630","674","100%","70",null,null);

                p.Div09.set_taborder("30");
                p.Div09.set_text("Div00");
                p.Div09.set_cssclass("div_WF_Bg");
                p.Div09.set_fittocontents("height");
                p.Div09.set_visible("false");
                p.Div09.move("0","30","100%","1965",null,null);

                p.staSubTitle06_03.set_taborder("31");
                p.staSubTitle06_03.set_text("처리내역");
                p.staSubTitle06_03.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle06_03.move("1630.00","690","50%","50",null,null);

                p.Button01_03.set_taborder("32");
                p.Button01_03.set_cssclass("btn_WF_ACMinus");
                p.Button01_03.move("2890.00","692","34","34",null,null);

                p.Panel01_04.set_taborder("33");
                p.Panel01_04.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_04.set_spacing("0px 10px");
                p.Panel01_04.set_horizontalgap("10");
                p.Panel01_04.set_flexcrossaxisalign("center");
                p.Panel01_04.set_flexmainaxisalign("end");
                p.Panel01_04.move("2340.00","690","50%","50",null,null);

                p.sub_tit10.set_taborder("34");
                p.sub_tit10.set_background("#ffffff");
                p.sub_tit10.set_flexcrossaxisalign("end");
                p.sub_tit10.set_visible("false");
                p.sub_tit10.move("1630","674","100%","70",null,null);

                p.Div10.set_taborder("35");
                p.Div10.set_text("Div00");
                p.Div10.set_cssclass("div_WF_Bg");
                p.Div10.set_fittocontents("height");
                p.Div10.set_visible("false");
                p.Div10.move("0","30","100%","681",null,null);

                p.staSubTitle06_04.set_taborder("36");
                p.staSubTitle06_04.set_text("인계인수 지적사항");
                p.staSubTitle06_04.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle06_04.move("1630.00","690","50%","50",null,null);

                p.Button01_04.set_taborder("37");
                p.Button01_04.set_cssclass("btn_WF_ACMinus");
                p.Button01_04.move("2890.00","692","34","34",null,null);

                p.Panel01_05.set_taborder("38");
                p.Panel01_05.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_05.set_spacing("0px 10px");
                p.Panel01_05.set_horizontalgap("10");
                p.Panel01_05.set_flexcrossaxisalign("center");
                p.Panel01_05.set_flexmainaxisalign("end");
                p.Panel01_05.move("2340.00","690","50%","50",null,null);

                p.sub_tit11.set_taborder("39");
                p.sub_tit11.set_background("#ffffff");
                p.sub_tit11.set_flexcrossaxisalign("end");
                p.sub_tit11.set_visible("false");
                p.sub_tit11.move("1630","674","100%","70",null,null);

                p.Div11.set_taborder("40");
                p.Div11.set_text("Div00");
                p.Div11.set_cssclass("div_WF_Bg");
                p.Div11.set_fittocontents("height");
                p.Div11.set_visible("false");
                p.Div11.move("0","30","100%","337",null,null);

                p.staSubTitle06_05.set_taborder("41");
                p.staSubTitle06_05.set_text("룸번호 열쇠정보");
                p.staSubTitle06_05.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle06_05.move("1630.00","690","50%","50",null,null);

                p.Button01_05.set_taborder("42");
                p.Button01_05.set_cssclass("btn_WF_ACMinus");
                p.Button01_05.move("2890.00","692","34","34",null,null);

                p.Panel01_06.set_taborder("43");
                p.Panel01_06.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_06.set_spacing("0px 10px");
                p.Panel01_06.set_horizontalgap("10");
                p.Panel01_06.set_flexcrossaxisalign("center");
                p.Panel01_06.set_flexmainaxisalign("end");
                p.Panel01_06.move("2340.00","690","50%","50",null,null);

                p.sub_tit12.set_taborder("44");
                p.sub_tit12.set_background("#ffffff");
                p.sub_tit12.set_flexcrossaxisalign("end");
                p.sub_tit12.set_visible("false");
                p.sub_tit12.move("1630","674","100%","70",null,null);

                p.Div12.set_taborder("45");
                p.Div12.set_text("Div00");
                p.Div12.set_cssclass("div_WF_Bg");
                p.Div12.set_fittocontents("height");
                p.Div12.set_visible("false");
                p.Div12.move("0","30","100%","232",null,null);

                p.Button00_00_00.set_taborder("53");
                p.Button00_00_00.set_text("1231");
                p.Button00_00_00.move("129","10867","84","62",null,null);

                p.Button00.set_taborder("51");
                p.Button00.set_text("Button00");
                p.Button00.move("129","10867","84","62",null,null);

                p.Button00_00_00_00.set_taborder("54");
                p.Button00_00_00_00.set_text("1231");
                p.Button00_00_00_00.move("129","10867","84","62",null,null);

                p.Button00_00_00_01.set_taborder("55");
                p.Button00_00_00_01.set_text("1231");
                p.Button00_00_00_01.move("129","10867","84","62",null,null);

                p.Button00_00.set_taborder("52");
                p.Button00_00.set_text("Button00");
                p.Button00_00.move("129","10867","84","62",null,null);

                p.staSubTitle06_00_00.set_taborder("46");
                p.staSubTitle06_00_00.set_text("사전미팅내역");
                p.staSubTitle06_00_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle06_00_00.move("1630.00","690","50%","50",null,null);

                p.Button01_00_00.set_taborder("47");
                p.Button01_00_00.set_cssclass("btn_WF_ACMinus");
                p.Button01_00_00.move("2890.00","692","34","34",null,null);

                p.Panel01_00_00.set_taborder("48");
                p.Panel01_00_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_00_00.set_spacing("0px 10px");
                p.Panel01_00_00.set_horizontalgap("10");
                p.Panel01_00_00.set_flexcrossaxisalign("center");
                p.Panel01_00_00.set_flexmainaxisalign("end");
                p.Panel01_00_00.move("2340.00","690","50%","50",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("0px 400px 0px 0px");
            obj.set_tabledirection("vertical");
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
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_tabledirection("vertical");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divQuick.form
            obj = new Layout("default","",0,0,this.divQuick.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnTitleMove01.set_taborder("0");
                p.btnTitleMove01.set_text("신청위치 정보");
                p.btnTitleMove01.set_cssclass("btn_WF_Quick_S");
                p.btnTitleMove01.move("17","20","100%","45",null,null);

                p.btnTitleMove02.set_taborder("1");
                p.btnTitleMove02.set_text("신청자 정보");
                p.btnTitleMove02.set_cssclass("btn_WF_Quick");
                p.btnTitleMove02.move("17.00","btnTitleMove01:0","100%","45",null,null);

                p.btnTitleMove03.set_taborder("2");
                p.btnTitleMove03.set_text("고객정보");
                p.btnTitleMove03.set_cssclass("btn_WF_Quick");
                p.btnTitleMove03.move("17.00","110","100%","45",null,null);

                p.btnTitleMove04.set_taborder("3");
                p.btnTitleMove04.set_text("청구정보");
                p.btnTitleMove04.set_cssclass("btn_WF_Quick");
                p.btnTitleMove04.move("17.00","110","100%","45",null,null);

                p.btnTitleMove05.set_taborder("4");
                p.btnTitleMove05.set_text("총괄책임자 및 시설관리책임자");
                p.btnTitleMove05.set_cssclass("btn_WF_Quick");
                p.btnTitleMove05.move("17.00","110","100%","45",null,null);

                p.btnTitleMove03_00.set_taborder("5");
                p.btnTitleMove03_00.set_text("고객정보");
                p.btnTitleMove03_00.set_cssclass("btn_WF_Quick");
                p.btnTitleMove03_00.move("17.00","110","100%","45",null,null);

                p.btnTitleMove03_01.set_taborder("6");
                p.btnTitleMove03_01.set_text("고객정보");
                p.btnTitleMove03_01.set_cssclass("btn_WF_Quick");
                p.btnTitleMove03_01.move("17.00","110","100%","45",null,null);
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
                p.btnTitleMove01.set_cssclass("btn_WF_QuickM_S");
                p.btnTitleMove01.set_fittocontents("width");

                p.btnTitleMove02.set_fittocontents("width");
                p.btnTitleMove02.set_cssclass("btn_WF_QuickM");

                p.btnTitleMove03.set_fittocontents("width");
                p.btnTitleMove03.set_cssclass("btn_WF_QuickM");

                p.btnTitleMove04.set_fittocontents("width");
                p.btnTitleMove04.set_cssclass("btn_WF_QuickM");

                p.btnTitleMove05.set_fittocontents("width");
                p.btnTitleMove05.set_cssclass("btn_WF_QuickM");
            	}
            );
            obj.set_type("horizontal");
            obj.set_spacing("0px 0px 0px 0px");
            this.divQuick.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divCtlBtnGrp.form
            obj = new Layout("default","",0,0,this.divCtlBtnGrp.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_verticalgap("10");
            obj.set_horizontalgap("10");
            obj.set_spacing("20px 10px");
            obj.set_flexwrap("wrap");
            this.divCtlBtnGrp.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divCtlBtnGrp.form
            obj = new Layout("mobile","",0,0,this.divCtlBtnGrp.form,
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
            this.divCtlBtnGrp.form.addLayout(obj.name, obj);
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
            obj = new Layout("default","Desktop_screen,Phone_screen",1480,1800,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("인계인수 신청서작성");
                p.set_scrollbartype("fixed fixed");
                p.set_scrolltype("both");

                p.divTitle.set_taborder("3");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_cssclass("div_WF_QuickFrBg");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("height");
                p.divForm.move("0","divTitle:10",null,"17000","60",null);

                p.divQuick.set_taborder("1");
                p.divQuick.set_text("div00");
                p.divQuick.set_cssclass("div_WF_QuickMenu");
                p.divQuick.set_fittocontents("height");
                p.divQuick.move(null,"62","296","245","62",null);

                p.divCtlBtnGrp.set_taborder("2");
                p.divCtlBtnGrp.set_text("divCtlBtnGrp");
                p.divCtlBtnGrp.set_cssclass("div_WF_QuickBtnBg");
                p.divCtlBtnGrp.set_fittocontents("height");
                p.divCtlBtnGrp.move(null,"divQuick:0","296","181","62",null);

                p.divGuide00.set_taborder("4");
                p.divGuide00.set_text("div00");
                p.divGuide00.set_visible("false");
                p.divGuide00.set_cssclass("div_GD_Tip");
                p.divGuide00.move("1600.00","145","450","385",null,null);

                p.Button00.set_taborder("5");
                p.Button00.set_text("Button00");
                p.Button00.move("240","751","44","29",null,null);

                p.Button01.set_taborder("6");
                p.Button01.set_text("Button01");
                p.Button01.move("-10","16724","57","39",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,5000,this,
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

                p.divCtlBtnGrp.set_cssclass("div_WF_QuickBtnBgM");
                p.divCtlBtnGrp.set_fittocontents("none");
                p.divCtlBtnGrp.move("0",null,null,"80","0","0");
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.Div05.form.rdoRbprsnFcltMngRbprsnYn","value","dsLifFcltyAcptnHnov","rbprsnFcltMngRbprsnYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.Div05.form.edtRbprsnFcltMngRbprsnNm","value","dsLifFcltyAcptnHnov","rbprsnFcltMngRbprsnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.Div05.form.edtRbprsnFcltMngRbprsnMblTelno","value","dsLifFcltyAcptnHnov","rbprsnFcltMngRbprsnMblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.Div04.form.rdoRtpyrSmYn","value","dsRtpyrClmInfoMng","payPicSmYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.Div04.form.edtClmCustCd","value","dsRtpyrClmInfoMng","clmCustCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.Div04.form.edtPayPicNm","value","dsRtpyrClmInfoMng","payPicNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.Div04.form.edtPayPicDeptNm","value","dsRtpyrClmInfoMng","payPicDeptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.Div04.form.edtPayPicTelno","value","dsRtpyrClmInfoMng","payPicTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.Div04.form.edtPayPicMblTelno","value","dsRtpyrClmInfoMng","payPicMblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divForm.form.Div04.form.divEdtPop.form.edtClmZip","value","dsRtpyrClmInfoMng","clmZip");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divForm.form.Div04.form.edt00_00_00_00","value","dsRtpyrClmInfoMng","clmAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divForm.form.Div04.form.edt00_00","value","dsRtpyrClmInfoMng","clmDtlAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divForm.form.Div03.form.edtBzentyNm","value","dsTscMvnSrvcBscInfo","bzentyNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divForm.form.Div03.form.edtRprsvNm","value","dsTscMvnSrvcBscInfo","rprsvNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divForm.form.Div03.form.edtRprsTelno","value","dsTscMvnSrvcBscInfo","rprsTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divForm.form.Div03.form.edtCrno","value","dsTscMvnSrvcBscInfo","crno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divForm.form.Div03.form.edtBrno","value","dsTscMvnSrvcBscInfo","crno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divForm.form.Div03.form.edtTpbizNm","value","dsTscMvnSrvcBscInfo","tpbizNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divForm.form.Div03.form.edtBzcndNm","value","dsTscMvnSrvcBscInfo","bzcndNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divForm.form.Div03.form.divEdtPop.form.edtCustZip","value","dsTscMvnSrvcBscInfo","custZip");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divForm.form.Div03.form.edtCustAddr","value","dsTscMvnSrvcBscInfo","custAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divForm.form.Div03.form.edtCustDtlAddr","value","dsTscMvnSrvcBscInfo","custDtlAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divForm.form.Div04.form.rdoClmMtd","value","dsRtpyrClmInfoMng","clmMtdCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divForm.form.Div04.form.edtAcuntEmlAddr1","value","dsRtpyrClmInfoMng","acuntEml");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divForm.form.Div04.form.edtTxivEmlAddr1","value","dsRtpyrClmInfoMng","etxivEmlAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divForm.form.Div05.form.edtfcltNm","value","dsLifFcltyAcptnHnov","fcltNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divForm.form.Div01.form.radioCtrtChcYn","value","dsCstFcltOperMst","ctrtChcYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divForm.form.Div01.form.edtCtrtNo","value","dsCstFcltOperMst","ctrtNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divForm.form.Div01.form.divEdtCtrtNm.form.edtCtrtNm","value","dsCstFcltOperMst","ctrtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divForm.form.Div01.form.cmbPstnSeCd","value","dsCstFcltOperMst","pstnSeCd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.addIncludeScript("LIF052M00_copy0.xfdl","xjs::TaskCom.xjs");
        this.registerScript("LIF052M00_copy0.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	LIF052M00.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/08/08
        *  @Desction    입주 > 인계인수신청 > 인계인수
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/08/08			김병조					최초생성
        *******************************************************************************
        */

        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;  // 업무공통

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.objVrbl = { isWrtSplmntStep : false    // 신청서 작성 및 보완 단계 여부
                       , isWrtStep       : false    // 신청서 작성 단계 여부
                       };

        this.aplyNo = "TSC2411_00019";	// TSC2411_00012 TSC2411_00019 신청서번호(화면 로드시 신청서 번호가 없으면 신규등록 가능)
        this.aplySeCd = "TSPTSC005"; // 신청구분코드(인계인수신청)
        this.jobCd    = "TAS00342";    // 작업코드(기본값 TAS00342 : 신청서작성) TAS00312
        this.pstnSeCd     = "";  // 위치구분

        this.gvUser = {
        	userId : this.objApp.gdsUser.getColumn(0,"userId")
        	,userNm : this.objApp.gdsUser.getColumn(0,"userNm")
        	,coId   : this.objApp.gdsUser.getColumn(0,"coId")  // 회사
        	,coNm   : this.objApp.gdsUser.getColumn(0,"coNm")  // 회사명
        	,userMblTelno : this.objApp.gdsUser.getColumn(0, "userMblTelno")
        };

        // 화물터미널,기타지역
        this.cgoTmnEtcRgn = ["TSPLOCTSC160","TSPLOCTSC050","TSPLOCTSC170","TSPLOCTSC180"
                            ,"TSPLOCTSC110","TSPLOCTSC190","TSPLOCTSC200","TSPLOCTSC060"
        					,"TSPLOCTSC210","TSPLOCTSC220"];
        // 룸번호별 열쇠등록 가능지역
        this.rnbKeyRegRgn = ["TSPLOCTSC010","TSPLOCTSC020","TSPLOCTSC030","TSPLOCTSC070"
        					,"TSPLOCTSC090","TSPLOCTSC100","TSPLOCTSC150"];
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	// 퀵메뉴 버튼기본
        	this.bfBtnObj = this.divQuick.form.btnTitleMove01;
        	this.bfBtnObj.cssclass = "btn_WF_Quick_S";
        	this.quickMenu();

        	// 신청구분명 조회
        	this.cfnGetAplySeNm({ id:"getAplySeNm", cbf:"fnCallback", aplySeCd:this.aplySeCd });

        	// 공통코드 함수 호출
         	this.cfnComCdLoad({ id:"tspLocCdLoad", cbf:"fnCallback", dsRgnSeList:"TSPLOC:S", dsPstnSeList:"TSPLOC:S" } ); // 지역구분코드
        	this.cfnComCdLoad({ id:"comMailSearch", cbf:"fnCallback", dsEmlList:"EML_TY:S" }); // 이메일

        	trace(this.FV_DS_OTPT_WORK_FLOW_INFO );
        	var pvAplyNo = this.getOwnerFrame().pvAplyNo;

        	if (this.gfnIsNull(this.aplyNo)) {
        		// 버튼생성
        		this.cfnBtnCrt({ crtTrgt:this.divCtlBtnGrp, cbf:"fnCallback" , lnkgEvnt:this.btnCtlBtnGrp_onclick, inqCnd : { jobPrcsPrgrsSeCd:this.jobCd} });
        	}
        	else {

        	}

        	//this.initDataLoad();


        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        this.initDataLoad = function() {

        	this.dsSearch.clearData();
        	this.dsSearch.addRow(); // 조회
        	this.dsSearch.setColumn(0,"aplyNo", this.aplyNo );

        	this.dsCstFcltOperMst.addRow();    // 시설운영마스터
        	this.dsLifFcltyAcptnHnov.addRow(); // 시설물 인계인수
        	this.dsRtpyrClmInfoMng.addRow(); // 청구정보

        	this.dsCstFcltOperMst.setColumn(0,"ctrtChcYn", "0");  // 계약선택여부 수기입력 default

        	this.dsLifFcltyAcptnHnov.setColumn(0,"coNm", this.gvUser.coNm );  // 시설물 인계인수 회사명

        	this.divForm.form.Div02.form.divEdtPopAplcnt.form.edtAplcntNm.value = this.gvUser.userNm; // 신청자명
        	this.divForm.form.Div02.form.edtMblTelno.value = this.gvUser.userMblTelno;
        	this.divForm.form.Div02.form.edtAplcntCoNm.value = this.gvUser.coNm; // 신청자 회사명
        	this.divForm.form.Div01.form.edtMvnPicCoNm.value = this.gvUser.coNm; // 입주자 회사명

        	this.cfnSearch();
        }


        //조회
        this.cfnSearch = function ()
        {
        	this.cfnSrvcCall("HnovAcptnAplyRcptAplcfmWrtInq"); // 인계인수 조회
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

        //저장
        this.cfnSave = function ()
        {
        	this.cfnSrvcCall("HnovAcptnAplyRcptAplcfmWrtStrg");
        };


        // 접기 펼치기
        this.cfnContentsFold = function (btnObj, contentsObj) {
        	contentsObj.visible = contentsObj.visible? false:true;
        	btnObj.cssclass = btnObj.cssclass == "btn_WF_ACMinus"? "btn_WF_ACPlus": "btn_WF_ACMinus";

        	this.quickMenu();
        	this.resetScroll();
        	this.divForm.form.resetScroll();
        };

        // 플로팅 퀵메뉴
        this.quickMenu = function() {
        	//this.resetScroll();

        	var mTopPos = 62;
        	var formPos = this.getVScrollPos();
        	var posCort = (this.divForm.getOffsetHeight() - this.getVScrollPos());
        	//this.logk();

        	//if ( this.objApp.screenid == "Phone_screen" ) {
        	if( this.getCurrentLayoutID() == "default" ) {
        			this.divQuick.top = formPos + mTopPos;
        			this.divCtlBtnGrp.top = parseInt( formPos ) + parseInt(this.divQuick.height) + mTopPos;
        	}
        	else {
        		// mTopPos = 0;
        		//this.divCtlBtnGrp.top = parseInt( formPos ) + this.getOffsetHeight() - parseInt(this.divCtlBtnGrp.height);
        	}

        	//this.logk();
        }

        // 타이틀이동
        this.cfnQuickMove = function(menuObj, tgtObj) {

        	if ( this.bfBtnObj !== menuObj ) {
        		menuObj.cssclass = "btn_WF_Quick_S";
        		this.bfBtnObj.cssclass = "btn_WF_Quick";
        	}
        	this.bfBtnObj = menuObj;
        	if( this.getCurrentLayoutID() == "default" ) {
        		this.vscrollbar.set_pos(tgtObj.getOffsetTop() + 62);
        	}
        	else {
        		// 모바일처리
        		this.divForm.form.vscrollbar.set_pos(tgtObj.getOffsetTop() - 50);
        	}

        	this.quickMenu();
        	trace(menuObj.id);
        	trace(tgtObj.getOffsetTop());
        }

        this.logk = function() {
        	return;
        	trace(this.getCurrentLayoutID());
        	trace("this.getVScrollPos() " + this.getVScrollPos());
        	trace("this.getOffsetHeight() " + this.getOffsetHeight());
        	trace("this.divForm.getOffsetHeight " + this.divForm.getOffsetHeight());
        	trace("this.height " + this.height);
        	trace("this " + (this.divForm.getOffsetHeight() - this.getVScrollPos()));
        }
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.cfnSrvcCall = function(srvcId) {
        	var strSrvcId   = srvcId;         // transaction을 구분하기 위한 svc id값
        	var strSvcUrl   = "";             // trabsaction을 요청할 주소
        	var inData      = "";             // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        	var outData     = "";             // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        	var strArg      = "";             // 입력값으로 보낼 arguments, strFormData="20120607"
        	var callBackFnc = "fnCallback";   // transaction의 결과를 받을 Function 이름
        	var isAsync   	= true;           // 비동기통신 여부 [생략가능]


        	// dsRtpyrClmInfoMng   청구정보
        	// dsLifFcltyAcptnHnov 시설물인계인수
        	// dsTscAplyRnbMng 위치정보(룸번호)

        	switch(strSrvcId)
        	{
        		case "HnovAcptnAplyRcptAplcfmWrtInq" :  // 조회
        			strSvcUrl = "hnovAcptnAply/selectAplcfmWrt.do";
        			inData    = "dsSearch=dsSearch";
        			outData   = " dsCstFcltOperMst=dsCstFcltOperMst"            // 시설물 Master DS
         			          + " dsLifFcltyAcptnHnov=dsLifFcltyAcptnHnov"      // 시설물 인계인수 DS
        					  + " dsTscMvnSrvcBscInfo=dsTscMvnSrvcBscInfo"		// 입주서비스기본정보
        					  + " dsRtpyrClmInfoMng=dsRtpyrClmInfoMng"			// 청구정보
        					  + " dsTscAplyRnbMng=dsTscAplyRnbMng"				// 위치정보(룸번호)
        			          + " dsCnvyMttr=dsCnvyMttr"                        // 전달사항 DS
        			          + " dsAtfl=dsAtfl"                              // 첨부파일 DS
        			break;

        		case "HnovAcptnAplyRcptAplcfmWrtStrg" :  // 저장
        			strSvcUrl = "hnovAcptnAply/saveHnovAcptnAply.do";
        			inData    = "dsWfInfo=" + this.FV_DS_OTPT_WORK_FLOW_INFO + ":U" // WorkFlow 정보
        			          + " dsCstFcltOperMst=dsCstFcltOperMst:A"              // 시설물 Master DS
         			          + " dsLifFcltyAcptnHnov=dsLifFcltyAcptnHnov:A"        // 시설물 인계인수 DS
        					  + " dsTscMvnSrvcBscInfo=dsTscMvnSrvcBscInfo:A"		// 입주서비스기본정보
        					  + " dsRtpyrClmInfoMng=dsRtpyrClmInfoMng:A"			// 청구정보
        					  + " dsTscAplyRnbMng=dsTscAplyRnbMng:A"				// 위치정보(룸번호)
        			          + " dsCnvyMttr=dsCnvyMttr:A"                          // 전달사항 DS
        			          + " dsAtfl=dsAtfl:U"                                  // 첨부파일 DS
        					  ;
        			outData   = "";
        			break;

        		case this.RaonkUpload.name :            // 첨부파일 저장
        			var obj = { "thumnail" : "N"        // 썸네일 생성여부(첨부파일 중 이미지 파일이 있는 경우 "Y" 이면 썸네일 파일 생성)
        			          , "bsnsSeCd" : "TSPTSC"   // 업무구분코드(입주자서비스)
        				      , "prgrmId"  : this.name  // 프로그램ID (화면 ID)
        			};

        			this.RaonkUpload.AddFormData('params', JSON.stringify(obj));
        			this.RaonkUpload.Transfer();
        			return;
        			break;

        		default :

        			break;
        	}

        	this.gfnTransaction( strSrvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(srvcId, errCd, errMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errCd != 0) { return; }
        	trace("srvcId = " + srvcId);
        	switch(srvcId) {
        		case "HnovAcptnAplyRcptAplcfmWrtInq" :  // 조회

        			if ( this.dsTscMvnSrvcBscInfo.rowcount == 0 ) {
        				this.dsTscMvnSrvcBscInfo.addRow();
        			}
        			// 룸번호
        			if ( this.dsTscAplyRnbMng.getRowCount() > 0 ) {
        				var rnbList = [];
        				for(var i=0; i < this.dsTscAplyRnbMng.rowcount; i++) {
        					rnbList.push(this.dsTscAplyRnbMng.getColumn(i, "pstnInfoRnb"));
        				}
        				if (rnbList.length ) {
        					this.divForm.form.Div01.form.edtRnb.value = rnbList.join(",");
        				}

        			}

        			if ( this.dsRtpyrClmInfoMng.getRowCount() > 0 ) {
        				if (this.dsRtpyrClmInfoMng.getColumn(0,"clmMtdCd") == "0" ) {
        					this.divForm.form.Div04.form.Pnl04060201.visible = false;
        				}
        			}
        			if ( this.dsCstFcltOperMst.rowcount > 0 ) {
        				this.pstnSeCd = this.dsCstFcltOperMst.getColumn(0,"pstnSeCd"); //  위치구분코드
        				trace( "pstnSeCd=" + this.pstnSeCd );
        				this.jobCd = this.dsCstFcltOperMst.getColumn(0, "taskCd");
        				this.cfnBtnCrt({ crtTrgt:this.divCtlBtnGrp, cbf:"fnCallback" , lnkgEvnt:this.btnCtlBtnGrp_onclick, inqCnd : { jobPrcsPrgrsSeCd:this.jobCd} });

        			}

        			this.fnScrnSetting();
        			break;

        		case "HnovAcptnAplyRcptAplcfmWrtStrg" :     // 저장
        		    // 정상적으로 처리되었습니다.
        			this.gfnAlertMsg("save", "CST_003");

        			break;
        		case "tspLocCdLoad" : // 위치구분 코드
        			// 인계인수신청 지역
         			this.dsRgnSeList.filter("uprCd == 'TSPLOCTSC'");
        			// 전체 조회를 위해 [선택] 추가
         			this.dsRgnSeList.insertRow(0);
         			this.dsRgnSeList.setColumn(0, "cdId", "");
         			this.dsRgnSeList.setColumn(0, "cdNm", "선택");
        			this.divForm.form.Div01.form.cmbRgnSeCd.index = 0;

        			if (  this.divForm.form.Div01.form.cmbPstnSeCd.value.length > 0 ) {
        				var nRow = this.dsPstnSeList.findRow("cdId", this.divForm.form.Div01.form.cmbPstnSeCd.value);
        				var uCd = this.dsPstnSeList.getColumn(nRow, "uprCd");
        				this.dsPstnSeList.filter("uprCd == '" + uCd + "'");
        				this.divForm.form.Div01.form.cmbRgnSeCd.value = uCd;
        			}

        			break;
        		case "_cfnBtnCrt_" : // 버튼 생성 callback
        			trace("_cfnBtnCrt_");
        			Array.from(this.divCtlBtnGrp.form.components).forEach(oComp => {
        				trace("==_cfnBtnCrt_===" +  oComp.id );
        			});
        			if ( this.jobCd == "TAS00312" ) {
        				// 접수상태
        				//this.pstnSeCd = "TSPLOCTSC160";
        				//var idxNo = this.cgoTmnEtcRgn.findIndex( rgnCd => rgnCd == this.pstnSeCd );

        				var rgnIncTf = this.cgoTmnEtcRgn.includes( this.pstnSeCd ); // 화물터미널지역
        				this.divCtlBtnGrp.form.CTL00406.visible = rgnIncTf; // 사전미팅확인
        				this.divCtlBtnGrp.form.CTL11132.visible = !rgnIncTf;    // 담당부서확인요청

        			}
        			break;

        		case this.RaonkUpload.RAONKUPLOAD_UploadComplete.name :
        			// 파일 업로드 결과를 첨부파일 데이터셋에 설정
        			for(var i = 0; i < this.dsAtchRslt.rowcount; i++) {
        			    // 첨부파일관리번호
        				this.dsAtfl.setColumn(this.dsAtfl.findRow("colId", this.dsAtchRslt.getColumn(i, "colId")), "atflMngNo", this.dsAtchRslt.getColumn(i, "atflMngNo"));
        			}

                    // 저장
        			this.cfnSave();

        			break;

        		default :
        			break;
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        /**************************************************************************
         * @name : fnPopupCallback
         * @description : 팝업에 관한 콜백 함수
         ***************************************************************************/
        this.fnPopupCallback = function(sPopupId, sRtn) {
        	trace("rtn " + sRtn);
        	trace("rtn " + sPopupId);
        	var rnbList = [];
        	// 룸번호 등록
        	if (sPopupId == "rnbMngPop")	{
        		if (this.gfnIsNull(sRtn)) return;
        		//var objRtn = JSON.parse(sRtn);
        		for(var i=0; i < this.dsTscAplyRnbMng.rowcount; i++) {
        			trace(this.dsTscAplyRnbMng.getRowType());
        			rnbList.push(this.dsTscAplyRnbMng.getColumn(i, "pstnInfoRnb"));
        		}

        		if (rnbList.length ) {
        			this.divForm.form.Div01.form.edtRnb.value = rnbList.join(",");
        		}
        		else {
        			this.divForm.form.Div01.form.edtRnb.value = "";
        		}

        	}
        }

        // 위치정보(룸번호) 팝업 데이터복사(데이터셋 팝업전달 안됨.)
        this.fnRnbCopy = function(dsRnbList) {
        	this.dsTscAplyRnbMng.copyData(dsRnbList);
        }


        /**************************************************************************
         * @name : fnScrnSetting
         * @description : 조회 시 화면 세팅
         ***************************************************************************/
        this.fnScrnSetting = function(){
        	// 컨포넌트 enable, readonly 처리
        	var sDivFrom = this.divForm.form;

        	// TAS00342 : 신청 임시저장 , 신청서보완
        	if( this.jobCd != "TAS00342" && this.jobCd != "TAS00487" ){
        		sDivFrom.sub_tit07.visible	= true;  // 사전미팅내역
        		sDivFrom.Div07.visible		= true;
        		sDivFrom.sub_tit09.visible	= true;  // 인계인수정보
        		sDivFrom.Div09.visible		= true;
        		sDivFrom.sub_tit10.visible	= true;  // 처리내역
        		sDivFrom.Div10.visible		= true;

        		// 현업접수
        		if(this.jobCd != "TAS00312" ) {
        			sDivFrom.sub_tit11.visible = true;  // 인계인수지적사항
        			sDivFrom.Div11.visible = true;
        		}
        		// 현업접수,사전미팅확인,
        		if(this.jobCd == "TAS00312" || this.jobCd == "TAS00478"  ) {
        			sDivFrom.Div10.form.Panel02_01.visible = false; // 협조자처리내역
        		}

        		if(this.jobCd == "TAS00318" ) {
        			// 완료처리
        			var rgnIncTf = this.rnbKeyRegRgn.includes( this.pstnSeCd )
        			sDivFrom.sub_tit12.visible = true;  // 룸번호열쇠정보
        			sDivFrom.Div12.visible = true;
        		}


        	}
        	// 신청서보완
        	if( this.jobCd == "TAS00487" ){
        		sDivFrom.sub_tit07.visible	= true;  // 사전미팅내역
        		sDivFrom.Div07.visible		= true;
        	}

        	this.resetScroll();

        	// this.jobCd 가 TAS00342, TAS00487 일때는 신청서 작성/보완 이외에는 컴포넌트 readOnly 처리해줌.
        	if(this.jobCd != "TAS00342" && this.jobCd != "TAS00487" ){
        		// 이력 불러오기 버튼 신청성 작성일때만 노출
        		//if(this.jobCd != "TAS10438"){
        			//this.divForm.form.Div01.form.btnHstry.visible = false;

        		//}

        		var arrDivComps = [sDivFrom.Div01, sDivFrom.Div02, sDivFrom.Div03, sDivFrom.Div04, sDivFrom.Div05
        							,sDivFrom.Div07, sDivFrom.Div09, sDivFrom.Div10, sDivFrom.Div11, sDivFrom.Div12];

        		arrDivComps.forEach(oDiv => {
        			Array.from(oDiv.form.components).forEach(oComp => {
        				fnReadonly.call(this, oComp);
        			});
        		});

        		// TAS00315 담당부서확인요청, TAS00478 사전미팅확인
        		if(this.jobCd == "TAS00315" || this.jobCd == "TAS00478"){

        		}
        		trace("this.jobCd=" + this.jobCd);


        		// 내부함수호출
        		function fnReadonly (oComp, bReadonly) {
        			if (oComp instanceof nexacro.Div) {
        				fnReadonly.call(this, oComp.form);
        			} else {
        				if (oComp instanceof nexacro.Static) return;
        				if (oComp instanceof nexacro.Panel) return;
        				if (oComp instanceof nexacro.TextArea){
        					// TAS10444 : 종료가 아닐땐 textArea 수정가능하게 해줌.
        					if(this.jobCd != "TAS10444"){
        						//return;

        					}
        				}
        				if (oComp instanceof nexacro.Button) {
        					if(oComp.id.indexOf("btnMin") > -1) return;
        					try {
        						// enable 처리할거
        						oComp.enable = bReadonly;

        						return;
        					} catch(e) {
        						trace ("enable속성없음");
        					}
        				}

        				try {
        					// 접수단계 || 담당자검토및승인
        					if(this.jobCd == "TAS10440" || this.jobCd == "TAS10441"){
        						// "rdoSrvcDmndCnYn", "grdSplmnt", "grdCnvyMttr"
        						if(this.gfnDecode(oComp.id, "rdoSrvcDmndCnYn", "1", "grdSplmnt", "1", "grdCnvyMttr", "1", "0") == "1"){
        							return;
        						}
        					}
        					// readonly 처리할거
        					oComp.readonly = !bReadonly;

        				} catch(e) {
        					trace ("readonly 속성없음");
        				}
        			}
        		}
        	}
        }
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // 접기
        this.divForm_btnTitle01_onclick = function(obj,e)
        {
        	this.cfnContentsFold(obj, this.divForm.form.Div01);
        };

        this.divForm_btnTitle02_onclick = function(obj,e)
        {
        	this.cfnContentsFold(obj, this.divForm.form.Div02);
        };

        this.divForm_btnTitle03_onclick = function(obj,e)
        {
        	this.cfnContentsFold(obj, this.divForm.form.Div03);
        };

        this.divForm_btnTitle04_onclick = function(obj,e)
        {
        	this.cfnContentsFold(obj, this.divForm.form.Div04);
        };

        this.divForm_btnTitle05_onclick = function(obj,e)
        {
        	this.cfnContentsFold(obj, this.divForm.form.Div05);
        };
        // 안내접기펼치기
        this.divInfoGuide_btnSchClose_onclick = function(obj,e)
        {
        	if ( this.divForm.form.divInfoGuide.height == 300 ) {
        		this.divForm.form.divInfoGuide.height = 50;
        	}
        	else {
        		this.divForm.form.divInfoGuide.height = 300;
        	}
        	this.resetScroll();
        };

        // 신청위치 이동
        this.divQuick_btnTitleMove01_onclick = function(obj,e)
        {
        	this.cfnQuickMove(obj, this.divForm.form.sub_tit01);
        };

        this.divQuick_btnTitleMove02_onclick = function(obj,e)
        {
        	this.cfnQuickMove(obj, this.divForm.form.sub_tit02);
        };

        this.divQuick_btnTitleMove03_onclick = function(obj,e)
        {
        	this.cfnQuickMove(obj, this.divForm.form.sub_tit03);
        };

        this.divQuick_btnTitleMove04_onclick = function(obj,e)
        {
        	this.cfnQuickMove(obj, this.divForm.form.sub_tit04);
        };

        this.divQuick_btnTitleMove05_onclick = function(obj,e)
        {
        	this.cfnQuickMove(obj, this.divForm.form.sub_tit05);
        };

        this.LIF052M00_onvscroll = function(obj,e)
        {
        	this.quickMenu();
        };

        // 지역구분
        this.divForm_Div01_cmbRgnSeCd_onitemchanged = function(obj,e)
        {
         	this.dsPstnSeList.filter("uprCd == '" + obj.value + "'");
        };
        // 위치구분
        this.divForm_Div01_cmbPstnSeCd_onitemchanged = function(obj,e)
        {
        	trace(obj.value);

        };
        // 건물구분
        this.divForm_Div01_cmbBldgSeCd_onitemchanged = function(obj,e)
        {

        };

        // 계약선택여부
        this.divForm_Div01_radioCtrtChcYn_onitemchanged = function(obj,e)
        {
        	trace(obj.value);
        	if ( obj.value == "1" ) {
        		// 계약선택
        		this.divForm.form.Div01.form.edtCtrtNo.value = "";
        		this.divForm.form.Div01.form.edtCtrtNo.readonly = true;  // 계약번호
        		// this.divForm.form.Div01.form.Panel01_02.visible = true;    //
        		this.divForm.form.Div01.form.staLabel01_02.visible = true;
        		this.divForm.form.Div01.form.divEdtCtrtNm.visible = true;
        		this.divForm.form.Div01.form.Panel01_02.height = 86;
        	}
        	else {
        		// 수기입력
        		this.divForm.form.Div01.form.edtCtrtNo.readonly = false; // 계약번호
        		//this.divForm.form.Div01.form.Panel01_02.visible = false;    // 계약명
        		this.divForm.form.Div01.form.staLabel01_02.visible = false;
        		this.divForm.form.Div01.form.divEdtCtrtNm.visible = false;
        		this.divForm.form.Div01.form.Panel01_02.height = 1;
        	}

        	//this.divForm.form.Div01.form.resetScroll();
        	//this.divForm.form.resetScroll();
        	this.resetScroll();
        	this.quickMenu();

        	trace("3");
        };

        // 청구정보 신청자정보 동일여부
        this.divForm_Div04_rdoRtpyrSmYn_onitemchanged = function(obj,e)
        {
        	trace(obj.value);
        	var smYn = obj.value == "1"? true: false;

        	this.divForm.form.Div04.form.Pnl0407.visible = smYn;
        	this.divForm.form.Div04.form.Pnl0408.visible = smYn;
        	this.divForm.form.Div04.form.Pnl0409.visible = smYn;
        	this.divForm.form.Div04.form.panFile00.visible = !smYn;

        	this.resetScroll();
        	this.quickMenu();
        };

        // 총괄책임자 및 시설관리책임자 여부
        this.divForm_Div05_rdoRbprsnFcltMngRbprsnYn_onitemchanged = function(obj,e)
        {
        	trace(obj.value);
        	var smYn = obj.value == "1"? true: false;
        	if ( obj.value == "1" ) {
        		// 신청자정보와 동일
        		this.dsLifFcltyAcptnHnov.setColumn(0,"rbprsnFcltMngRbprsnNm",this.objApp.gdsUser.getColumn(0,"userNm"));
        		this.dsLifFcltyAcptnHnov.setColumn(0,"rbprsnFcltMngRbprsnMblTelno",this.objApp.gdsUser.getColumn(0,"userMblTelno"));
        	}
        	else {
        		this.dsLifFcltyAcptnHnov.setColumn(0,"rbprsnFcltMngRbprsnNm","");
        		this.dsLifFcltyAcptnHnov.setColumn(0,"rbprsnFcltMngRbprsnMblTelno","");
        	}

        	this.divForm.form.Div05.form.Pnl0504.visible = smYn;  // 개인정보 수집·이용 동의 안내
        	this.divForm.form.Div05.form.Pnl0505.visible = smYn;  // 개인정보 수집·이용 동의 여부
        	this.divForm.form.Div05.form.Pnl0506.visible = !smYn; // 책임자 개인정보수집이용동의서
        	this.divForm.form.Div05.form.edtRbprsnFcltMngRbprsnNm.readonly = smYn;
        	this.divForm.form.Div05.form.edtRbprsnFcltMngRbprsnMblTelno.readonly = smYn;

        };
        // 청구방식
        this.divForm_Div04_rdoClmMtd_onitemchanged = function(obj,e)
        {
        	if ( obj.value == "1" ) {
        		this.divForm.form.Div04.form.Pnl04060201.visible = true;
        	}
        	else {
        		this.divForm.form.Div04.form.Pnl04060201.visible = false;
        	}
        };

        // 룸번호 등록 팝업
        this.divForm_Div01_btnPopRnbReg_onclick = function(obj,e)
        {
        	var oOption = { title:"위치정보(룸번호)등록", titlebar:true, width:500, height:700 };
        	this.gfnOpenPopup("rnbMngPop", "work::LIF/COM/LIF901P01.xfdl", "", "fnPopupCallback", oOption);
        };


        /**************************************************************************
         * @name : btn_onclick
         * @description : Button Click Event
         ***************************************************************************/
        this.btnCtlBtnGrp_onclick = function(obj,e)
        {
        	// WorkFlow 정보
        	var wfInfo = this.cfnGetWfInfo(obj.name);
        	var vBtnNm = wfInfo.prcsSeCdNm;
        	var vBtnCd = wfInfo.prcsSeCd; // 눌린 버튼 ID(obj.name과 같은 값임.)


        	trace("===== " + obj.name);
        	trace(vBtnNm);
        	trace(vBtnCd);

        	this.dsCstFcltOperMst.setColumn(0, "taskCd"    , wfInfo.jobPrcsPrgrsSeCd        );  // 현재업무코드
        	this.dsCstFcltOperMst.setColumn(0, "nextTaskCd", wfInfo.nextStepJobPrcsPrgrsSeCd);  // 다음업무코드

        	trace("===== jobPrcsPrgrsSeCd " + wfInfo.jobPrcsPrgrsSeCd);
        	trace("===== nextStepJobPrcsPrgrsSeCd " + wfInfo.nextStepJobPrcsPrgrsSeCd);

        	// CTL00777 임시저장   CTL00489 신청
        	if ( vBtnCd == "CTL00777" || vBtnCd == "CTL00489" ) {

        		// this.dsCstFcltOperMst.setColumn(0,"aplyNo", 	"" );	// 신청번호
        		this.dsCstFcltOperMst.setColumn(0,"aplySeCd", 	this.aplySeCd );		// 신청구분코드 입주서비스
        		this.dsCstFcltOperMst.setColumn(0,"pstnSeCd", 	this.divForm.form.Div01.form.cmbPstnSeCd.value );	// 위치구분코드

        		this.dsTscMvnSrvcBscInfo.setColumn(0,"ctrtNo", 	this.dsCstFcltOperMst.getColumn(0,"ctrtNo") );	// 기본정보 계약번호
        		// 계약선택여부
        		if ( this.divForm.form.Div01.form.radioCtrtChcYn.value == "0" ) {
        			this.dsCstFcltOperMst.setColumn(0,"ctrtNm", "");
        		}
        		this.dsTscMvnSrvcBscInfo.setColumn(0,"ctrtNm", 	this.dsCstFcltOperMst.getColumn(0,"ctrtNm") );	// 기본정보 계약명

        		this.cfnSave();
        	}
        	else if (vBtnCd == "CTL00406" || vBtnCd == "CTL11132" ) {
        		// 접수
        		this.cfnSave();
        	}


        }


        this.Button01_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onvscroll",this.LIF052M00_onvscroll,this);
            this.divForm.form.divInfoGuide.form.btnGuide.addEventHandler("onclick",this.divInfoGuide_btnSchClose_onclick,this);
            this.divForm.form.Div01.form.cmbRgnSeCd.addEventHandler("onitemchanged",this.divForm_Div01_cmbRgnSeCd_onitemchanged,this);
            this.divForm.form.Div01.form.cmbPstnSeCd.addEventHandler("onitemchanged",this.divForm_Div01_cmbPstnSeCd_onitemchanged,this);
            this.divForm.form.Div01.form.cmbBldgSeCd.addEventHandler("onitemchanged",this.divForm_Div01_cmbBldgSeCd_onitemchanged,this);
            this.divForm.form.Div01.form.radioCtrtChcYn.addEventHandler("onitemchanged",this.divForm_Div01_radioCtrtChcYn_onitemchanged,this);
            this.divForm.form.Div01.form.btnPopRnbReg.addEventHandler("onclick",this.divForm_Div01_btnPopRnbReg_onclick,this);
            this.divForm.form.Div03.form.btn_file_1_00.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.Div03.form.btn_del_file_1_00.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div03.form.Grid00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div03.form.Grid00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div04.form.rdoRtpyrSmYn.addEventHandler("onitemchanged",this.divForm_Div04_rdoRtpyrSmYn_onitemchanged,this);
            this.divForm.form.Div04.form.TextArea00.addEventHandler("onchanged",this.divForm_Div03_TextArea00_onchanged,this);
            this.divForm.form.Div04.form.TextArea00_01.addEventHandler("onchanged",this.divForm_Div03_TextArea00_onchanged,this);
            this.divForm.form.Div04.form.btn_file_1_00.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.Div04.form.btn_del_file_1_00.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div04.form.Grid00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div04.form.Grid00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div04.form.rdoClmMtd.addEventHandler("onitemchanged",this.divForm_Div04_rdoClmMtd_onitemchanged,this);
            this.divForm.form.Div05.form.rdoRbprsnFcltMngRbprsnYn.addEventHandler("onitemchanged",this.divForm_Div05_rdoRbprsnFcltMngRbprsnYn_onitemchanged,this);
            this.divForm.form.Div05.form.Static01.addEventHandler("onclick",this.divForm_Div04_Static01_onclick,this);
            this.divForm.form.Div05.form.Static00.addEventHandler("onclick",this.divForm_Div04_Static00_onclick,this);
            this.divForm.form.Div05.form.Static00_00.addEventHandler("onclick",this.divForm_Div04_Static00_onclick,this);
            this.divForm.form.Div05.form.btn_del_file_1_00_00.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div05.form.Grid00_00_01.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div05.form.Grid00_00_01.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div05.form.btn_file_1_00_01.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.btnTitle01.addEventHandler("onclick",this.divForm_btnTitle01_onclick,this);
            this.divForm.form.btnTitle02.addEventHandler("onclick",this.divForm_btnTitle02_onclick,this);
            this.divForm.form.btnTitle03.addEventHandler("onclick",this.divForm_btnTitle03_onclick,this);
            this.divForm.form.btnTitle04.addEventHandler("onclick",this.divForm_btnTitle04_onclick,this);
            this.divForm.form.btnTitle05.addEventHandler("onclick",this.divForm_btnTitle05_onclick,this);
            this.divForm.form.Div07.form.btn_file_1.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.Div07.form.btn_del_file_1.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div07.form.Grid00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div07.form.Grid00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div07.form.btn_file_1_00.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.Div07.form.btn_del_file_1_00.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div07.form.btn_file_1_01.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.Div07.form.Grid00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div07.form.Grid00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div07.form.btn_del_file_1_01.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div07.form.Grid00_01.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div07.form.Grid00_01.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div09.form.cbo10_02.addEventHandler("onitemchanged",this.cbo00_onitemchanged,this);
            this.divForm.form.Div09.form.btn_file_1.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.Div09.form.btn_del_file_1.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div09.form.Grid00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div09.form.Grid00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div10.form.btn_file_1.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.Div10.form.btn_del_file_1.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div10.form.Grid00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div10.form.Grid00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divQuick.form.btnTitleMove01.addEventHandler("onclick",this.divQuick_btnTitleMove01_onclick,this);
            this.divQuick.form.btnTitleMove02.addEventHandler("onclick",this.divQuick_btnTitleMove02_onclick,this);
            this.divQuick.form.btnTitleMove03.addEventHandler("onclick",this.divQuick_btnTitleMove03_onclick,this);
            this.divQuick.form.btnTitleMove04.addEventHandler("onclick",this.divQuick_btnTitleMove04_onclick,this);
            this.divQuick.form.btnTitleMove05.addEventHandler("onclick",this.divQuick_btnTitleMove05_onclick,this);
            this.divQuick.form.btnTitleMove03_00.addEventHandler("onclick",this.divQuick_btnTitleMove03_onclick,this);
            this.divQuick.form.btnTitleMove03_01.addEventHandler("onclick",this.divQuick_btnTitleMove03_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.dsAtfl.addEventHandler("onload",this.dsAtfl_onload,this);
        };
        this.loadIncludeScript("LIF052M00_copy0.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
