(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LIF072M00");
            this.set_titletext("이동지역차량징비반입반출입신청 신청서보완");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBldgSeList", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMst", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeNm\" type=\"STRING\" size=\"256\"/><Column id=\"taskCd\" type=\"STRING\" size=\"256\"/><Column id=\"nextTaskCd\" type=\"STRING\" size=\"256\"/><Column id=\"pstnSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyDt\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"endCd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstnInfoRnb\" type=\"STRING\" size=\"256\"/><Column id=\"clmZip\" type=\"STRING\" size=\"256\"/><Column id=\"clmAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmDtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmWholAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmCustCd\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"rcptDt\" type=\"STRING\" size=\"256\"/><Column id=\"clrId\" type=\"STRING\" size=\"256\"/><Column id=\"dptyRegYn\" type=\"STRING\" size=\"256\"/><Column id=\"dmndDt\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptAplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptCtrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptPstnInfoCn\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtHwrtInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntHwrtInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtMvmnRgnPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"docCd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtChcYn\" type=\"STRING\" size=\"256\"/><Column id=\"wholJobBgngDt\" type=\"STRING\" size=\"256\"/><Column id=\"wholJobEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobNm\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobRsnCn\" type=\"STRING\" size=\"256\"/><Column id=\"bldgSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoCtrtrNm\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoPicCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobFldCd\" type=\"STRING\" size=\"256\"/><Column id=\"arptCstrnPicId\" type=\"STRING\" size=\"256\"/><Column id=\"lbsvcPbcprtPicId\" type=\"STRING\" size=\"256\"/><Column id=\"basctAplcfmInfoId\" type=\"STRING\" size=\"256\"/><Column id=\"lbsvcTaskAgtRlvtYn\" type=\"STRING\" size=\"256\"/><Column id=\"lbsvcTaskMdtrId\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptRnb\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"docCd\"/><Col id=\"aplySeCd\"/><Col id=\"taskCd\"/><Col id=\"aplyNo\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"carRegctfFile_fullName\" type=\"STRING\" size=\"256\"/><Column id=\"carRegctfFile_orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"carRegctfFile_fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"carRegctfFile_colId\" type=\"STRING\" size=\"256\"/><Column id=\"carFrtsdPhotoFile_fullName\" type=\"STRING\" size=\"256\"/><Column id=\"carFrtsdPhotoFile_orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"carFrtsdPhotoFile_fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"carFrtsdPhotoFile_colId\" type=\"STRING\" size=\"256\"/><Column id=\"safeDvcPhotoFile_fullName\" type=\"STRING\" size=\"256\"/><Column id=\"safeDvcPhotoFile_orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"safeDvcPhotoFile_fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"safeDvcPhotoFile_colId\" type=\"STRING\" size=\"256\"/><Column id=\"carFlkPhotoFile_fullName\" type=\"STRING\" size=\"256\"/><Column id=\"carFlkPhotoFile_orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"carFlkPhotoFile_fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"carFlkPhotoFile_colId\" type=\"STRING\" size=\"256\"/><Column id=\"newInspRcdshtFile_fullName\" type=\"STRING\" size=\"256\"/><Column id=\"newInspRcdshtFile_orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"newInspRcdshtFile_fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"newInspRcdshtFile_colId\" type=\"STRING\" size=\"256\"/><Column id=\"lsctFile_fullName\" type=\"STRING\" size=\"256\"/><Column id=\"lsctFile_orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"lsctFile_fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"lsctFile_colId\" type=\"STRING\" size=\"256\"/><Column id=\"elctyHdlEqpmntIdEvdncDcmntFile_fullName\" type=\"STRING\" size=\"256\"/><Column id=\"elctyHdlEqpmntIdEvdncDcmntFile_orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"elctyHdlEqpmntIdEvdncDcmntFile_fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"elctyHdlEqpmntIdEvdncDcmntFile_colId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtfl", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplcfmNo\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"jobSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobTycoSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"atchSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"atchDtlSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"bsnsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"workId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtn\" type=\"STRING\" size=\"256\"/><Column id=\"strgFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTerm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAplyKndCdList", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCrynShpgotCdList", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCnvyMttr", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/><Column id=\"cnvyMttrCn\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAisMvmnRgnMst", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"fcltSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"sn\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyKndCd\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/><Column id=\"aplyDt\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"ownrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"endCd\" type=\"STRING\" size=\"256\"/><Column id=\"cnvyMttrCn\" type=\"STRING\" size=\"256\"/><Column id=\"clrId\" type=\"STRING\" size=\"256\"/><Column id=\"rcptDt\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnRspnsYn\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnRspnsDt\" type=\"STRING\" size=\"256\"/><Column id=\"docCd\" type=\"STRING\" size=\"256\"/><Column id=\"custTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrTelno\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrMblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"ymdDsgnSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"instlDmndPrdBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"instlDmndPrdEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"bldgSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"zoneSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"srvcAplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"dtlArtclCn\" type=\"STRING\" size=\"256\"/><Column id=\"qty\" type=\"STRING\" size=\"256\"/><Column id=\"shopAreaVl\" type=\"STRING\" size=\"256\"/><Column id=\"wdthVl\" type=\"STRING\" size=\"256\"/><Column id=\"vrtcVl\" type=\"STRING\" size=\"256\"/><Column id=\"hgtVl\" type=\"STRING\" size=\"256\"/><Column id=\"instlPstnCn\" type=\"STRING\" size=\"256\"/><Column id=\"usgCn\" type=\"STRING\" size=\"256\"/><Column id=\"splmntDmndRsnCn\" type=\"STRING\" size=\"256\"/><Column id=\"srvcDmndCnIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"srvcAplyInfoIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"addedFcltyFrtPhotoPath\" type=\"STRING\" size=\"256\"/><Column id=\"addedFcltyRarPhotoPath\" type=\"STRING\" size=\"256\"/><Column id=\"addedFcltyFlkPhotoPath\" type=\"STRING\" size=\"256\"/><Column id=\"addedFcltyEtc1PhotoPath\" type=\"STRING\" size=\"256\"/><Column id=\"addedFcltyEtc2PhotoPath\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"ersrYmd\" type=\"STRING\" size=\"256\"/><Column id=\"ersrRsnCn\" type=\"STRING\" size=\"256\"/><Column id=\"regYmd\" type=\"STRING\" size=\"256\"/><Column id=\"mvmnRgnRegNo\" type=\"STRING\" size=\"256\"/><Column id=\"vhclEqpmntNm\" type=\"STRING\" size=\"256\"/><Column id=\"ctpvRegNo\" type=\"STRING\" size=\"256\"/><Column id=\"vhclEqpmntSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"vhclAdpsHldYn\" type=\"STRING\" size=\"256\"/><Column id=\"vhclCrynShpgotAprvYn\" type=\"STRING\" size=\"256\"/><Column id=\"vhclAdpsRtnYn\" type=\"STRING\" size=\"256\"/><Column id=\"rtnIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cnvyMttrCn\" type=\"STRING\" size=\"256\"/><Column id=\"vhclAdpsRtnYmd\" type=\"STRING\" size=\"256\"/><Column id=\"vhclAdpsRtnEqpmntShpgotIdntyDcmntPath\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/><Column id=\"vhclEqpmntNm\" type=\"STRING\" size=\"256\"/><Column id=\"autzrNm\" type=\"STRING\" size=\"256\"/><Column id=\"crtYmd\" type=\"STRING\" size=\"256\"/><Column id=\"mvmnRgnRegNo\" type=\"STRING\" size=\"256\"/><Column id=\"crynYmd\" type=\"STRING\" size=\"256\"/><Column id=\"crynChckpntCd\" type=\"STRING\" size=\"256\"/><Column id=\"crynShpgotRsnCn\" type=\"STRING\" size=\"256\"/><Column id=\"jobPlcCn\" type=\"STRING\" size=\"256\"/><Column id=\"vhclEqpmntNm\" type=\"STRING\" size=\"256\"/><Column id=\"autzrNm\" type=\"STRING\" size=\"256\"/><Column id=\"crtYmd\" type=\"STRING\" size=\"256\"/><Column id=\"crynYmd\" type=\"STRING\" size=\"256\"/><Column id=\"crynChckpntCd\" type=\"STRING\" size=\"256\"/><Column id=\"crynShpgotRsnCn\" type=\"STRING\" size=\"256\"/><Column id=\"jobPlcCn\" type=\"STRING\" size=\"256\"/><Column id=\"vhclEqpmntNm\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoAutzrNm\" type=\"STRING\" size=\"256\"/><Column id=\"crtYmd\" type=\"STRING\" size=\"256\"/><Column id=\"crynYmd\" type=\"STRING\" size=\"256\"/><Column id=\"crynChckpntCd\" type=\"STRING\" size=\"256\"/><Column id=\"crynShpgotRsnCn\" type=\"STRING\" size=\"256\"/><Column id=\"jobPlcCn\" type=\"STRING\" size=\"256\"/><Column id=\"ersrYmd\" type=\"STRING\" size=\"256\"/><Column id=\"ersrRsnCn\" type=\"STRING\" size=\"256\"/><Column id=\"regYmd\" type=\"STRING\" size=\"256\"/><Column id=\"mvmnRgnRegNo\" type=\"STRING\" size=\"256\"/><Column id=\"vhclEqpmntNm\" type=\"STRING\" size=\"256\"/><Column id=\"ctpvRegNo\" type=\"STRING\" size=\"256\"/><Column id=\"vhclEqpmntSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"vhclAdpsHldYn\" type=\"STRING\" size=\"256\"/><Column id=\"vhclCrynShpgotAprvYn\" type=\"STRING\" size=\"256\"/><Column id=\"vhclAdpsRtnYn\" type=\"STRING\" size=\"256\"/><Column id=\"rtnIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cnvyMttrCn\" type=\"STRING\" size=\"256\"/><Column id=\"vhclAdpsRtnYmd\" type=\"STRING\" size=\"256\"/><Column id=\"vhclAdpsRtnEqpmntShpgotIdntyDcmntPath\" type=\"STRING\" size=\"256\"/><Column id=\"vinSn\" type=\"STRING\" size=\"256\"/><Column id=\"vin\" type=\"STRING\" size=\"256\"/><Column id=\"rprsvNm\" type=\"STRING\" size=\"256\"/><Column id=\"bilgCd\" type=\"STRING\" size=\"256\"/><Column id=\"dsplmt\" type=\"STRING\" size=\"256\"/><Column id=\"ogdpOfc\" type=\"STRING\" size=\"256\"/><Column id=\"crtYmd\" type=\"STRING\" size=\"256\"/><Column id=\"mdlyrCn\" type=\"STRING\" size=\"256\"/><Column id=\"ersrYmd\" type=\"STRING\" size=\"256\"/><Column id=\"frmNm\" type=\"STRING\" size=\"256\"/><Column id=\"newInspYmd\" type=\"STRING\" size=\"256\"/><Column id=\"safeInspTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"mnfctrNm\" type=\"STRING\" size=\"256\"/><Column id=\"maxLdcpct\" type=\"STRING\" size=\"256\"/><Column id=\"aprvYmd\" type=\"STRING\" size=\"256\"/><Column id=\"csctnoCn\" type=\"STRING\" size=\"256\"/><Column id=\"rdgNope\" type=\"STRING\" size=\"256\"/><Column id=\"vhclTwt\" type=\"STRING\" size=\"256\"/><Column id=\"hgtVl\" type=\"STRING\" size=\"256\"/><Column id=\"lenVl\" type=\"STRING\" size=\"256\"/><Column id=\"vhclEqpmntNm\" type=\"STRING\" size=\"256\"/><Column id=\"carRegYmd\" type=\"STRING\" size=\"256\"/><Column id=\"usgNm\" type=\"STRING\" size=\"256\"/><Column id=\"usgCd\" type=\"STRING\" size=\"256\"/><Column id=\"area\" type=\"STRING\" size=\"256\"/><Column id=\"vhrno\" type=\"STRING\" size=\"256\"/><Column id=\"vhclEqpmntSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"vhclWt\" type=\"STRING\" size=\"256\"/><Column id=\"indvVhclYn\" type=\"STRING\" size=\"256\"/><Column id=\"tmprRglrYn\" type=\"STRING\" size=\"256\"/><Column id=\"exsRegYn\" type=\"STRING\" size=\"256\"/><Column id=\"inspCrtnShpgotAprvYn\" type=\"STRING\" size=\"256\"/><Column id=\"vhclRegAprvYn\" type=\"STRING\" size=\"256\"/><Column id=\"vhclIncmgAprvYn\" type=\"STRING\" size=\"256\"/><Column id=\"vhclNoExnCd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtCnclsYn\" type=\"STRING\" size=\"256\"/><Column id=\"adpsRcvYn\" type=\"STRING\" size=\"256\"/><Column id=\"cnvyMttrCn\" type=\"STRING\" size=\"256\"/><Column id=\"carmdlSclCd\" type=\"STRING\" size=\"256\"/><Column id=\"mvmnRgnRegNo\" type=\"STRING\" size=\"256\"/><Column id=\"carRegctfPath\" type=\"STRING\" size=\"256\"/><Column id=\"vhclEqpmntFrtsdPhotoPath\" type=\"STRING\" size=\"256\"/><Column id=\"newInspRcdshtPath\" type=\"STRING\" size=\"256\"/><Column id=\"lseCotrtPath\" type=\"STRING\" size=\"256\"/><Column id=\"vhclEqpmntFlkPhotoPath\" type=\"STRING\" size=\"256\"/><Column id=\"fuelKndCd\" type=\"STRING\" size=\"256\"/><Column id=\"safeDvcEsntlVhclYn\" type=\"STRING\" size=\"256\"/><Column id=\"inspInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"safeDvcKndCd\" type=\"STRING\" size=\"256\"/><Column id=\"ofcbzUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"ofcbzUnusdAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"batryId\" type=\"STRING\" size=\"256\"/><Column id=\"vhcleId\" type=\"STRING\" size=\"256\"/><Column id=\"safeDvcEtcKndNm\" type=\"STRING\" size=\"256\"/><Column id=\"dsplmtOrg\" type=\"STRING\" size=\"256\"/><Column id=\"maxLdcpctOrg\" type=\"STRING\" size=\"256\"/><Column id=\"vhclTwtOrg\" type=\"STRING\" size=\"256\"/><Column id=\"vhclWtOrg\" type=\"STRING\" size=\"256\"/><Column id=\"rdgNopeOrg\" type=\"STRING\" size=\"256\"/><Column id=\"areaOrg\" type=\"STRING\" size=\"256\"/><Column id=\"bilgCd\" type=\"STRING\" size=\"256\"/><Column id=\"vhclEqpmntSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"vhclWt\" type=\"STRING\" size=\"256\"/><Column id=\"cnvyMttrCn\" type=\"STRING\" size=\"256\"/><Column id=\"vhclCrynShpgotAprvYn\" type=\"STRING\" size=\"256\"/><Column id=\"crynShpgotYmd\" type=\"STRING\" size=\"256\"/><Column id=\"crynChckpntCd\" type=\"STRING\" size=\"256\"/><Column id=\"crynShpgotRsnCn\" type=\"STRING\" size=\"256\"/><Column id=\"crynShpgotCd\" type=\"STRING\" size=\"256\"/><Column id=\"mvmnRgnRegNo\" type=\"STRING\" size=\"256\"/><Column id=\"pdctfPath\" type=\"STRING\" size=\"256\"/><Column id=\"vhclTwt_99\" type=\"STRING\" size=\"256\"/><Column id=\"maxLdcpct\" type=\"STRING\" size=\"256\"/><Column id=\"rdgNope\" type=\"STRING\" size=\"256\"/><Column id=\"vhclWtOrg\" type=\"STRING\" size=\"256\"/><Column id=\"vhclTwtOrg_99\" type=\"STRING\" size=\"256\"/><Column id=\"maxLdcpctOrg\" type=\"STRING\" size=\"256\"/><Column id=\"rdgNopeOrg\" type=\"STRING\" size=\"256\"/><Column id=\"ogdpOfcCd\" type=\"STRING\" size=\"256\"/><Column id=\"flnm\" type=\"STRING\" size=\"256\"/><Column id=\"eduHpeYmd\" type=\"STRING\" size=\"256\"/><Column id=\"istoOgdpOfcNm\" type=\"STRING\" size=\"256\"/><Column id=\"istoNm\" type=\"STRING\" size=\"256\"/><Column id=\"adpsIssuNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplySttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"mnevRgnIncmgCd\" type=\"STRING\" size=\"256\"/><Column id=\"eduEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"eduBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"cnvyMttrCn\" type=\"STRING\" size=\"256\"/><Column id=\"lcnsAplyAprvYn\" type=\"STRING\" size=\"256\"/><Column id=\"grndsSafeEduPhotoPath\" type=\"STRING\" size=\"256\"/><Column id=\"brdt\" type=\"STRING\" size=\"256\"/><Column id=\"prvcClctEsntlAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"jobRbprsn1Nm\" type=\"STRING\" size=\"256\"/><Column id=\"jobRbprsn2Nm\" type=\"STRING\" size=\"256\"/><Column id=\"jobRbprsn1Telno\" type=\"STRING\" size=\"256\"/><Column id=\"jobRbprsn2Telno\" type=\"STRING\" size=\"256\"/><Column id=\"udgdEbmtItfeYn\" type=\"STRING\" size=\"256\"/><Column id=\"avtnInfoPvsnYn\" type=\"STRING\" size=\"256\"/><Column id=\"mvmnPathDsgnYn\" type=\"STRING\" size=\"256\"/><Column id=\"oprtrSafeEduYn\" type=\"STRING\" size=\"256\"/><Column id=\"safeFcltyInstlYn\" type=\"STRING\" size=\"256\"/><Column id=\"rltnInstBfhdCnsltnYn\" type=\"STRING\" size=\"256\"/><Column id=\"actlJobEndHr\" type=\"STRING\" size=\"256\"/><Column id=\"arcftInsdCrynPhbtCmdtyDocReadYn\" type=\"STRING\" size=\"256\"/><Column id=\"jobEndHr\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobNm\" type=\"STRING\" size=\"256\"/><Column id=\"dgadsCmdtyUseCmpanAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"jobPrpsEtcCn\" type=\"STRING\" size=\"256\"/><Column id=\"jobPrpsCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobRtrcnRsnCn\" type=\"STRING\" size=\"256\"/><Column id=\"dgadsCmdtyMngRbprsn1Nm\" type=\"STRING\" size=\"256\"/><Column id=\"incmgChckpntMvmnPathNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobDt\" type=\"STRING\" size=\"256\"/><Column id=\"jobBgngHr\" type=\"STRING\" size=\"256\"/><Column id=\"crynChckpntCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobTnope\" type=\"STRING\" size=\"256\"/><Column id=\"trsClsgnNm\" type=\"STRING\" size=\"256\"/><Column id=\"dgadsCmdtyMngRbprsn2Nm\" type=\"STRING\" size=\"256\"/><Column id=\"emrgYn\" type=\"STRING\" size=\"256\"/><Column id=\"lbsvcTkcgDeptTaskPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobAprvYn\" type=\"STRING\" size=\"256\"/><Column id=\"dgadsCmdtyAprvYn\" type=\"STRING\" size=\"256\"/><Column id=\"cnvyMttrCn\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobWeekNghtSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobPstnSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prvcClctEsntlAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"jobCmpanAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobPstnFlrplnAtchPath\" type=\"STRING\" size=\"256\"/><Column id=\"putEqpmntCn\" type=\"STRING\" size=\"256\"/><Column id=\"coNm\" type=\"STRING\" size=\"256\"/><Column id=\"ctinfo\" type=\"STRING\" size=\"256\"/><Column id=\"jobDays\" type=\"STRING\" size=\"256\"/><Column id=\"putMtrlToolKndCrynYn\" type=\"STRING\" size=\"256\"/><Column id=\"jobCstrnPstnDtlCn\" type=\"STRING\" size=\"256\"/><Column id=\"jobCmptnCn\" type=\"STRING\" size=\"256\"/><Column id=\"regFilePath\" type=\"STRING\" size=\"256\"/><Column id=\"jobPrdBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"jobPrdEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"jobCn\" type=\"STRING\" size=\"256\"/><Column id=\"chcRsnUtztnPrnmntChckpntCn\" type=\"STRING\" size=\"256\"/><Column id=\"jobRbprsn1SmYn\" type=\"STRING\" size=\"256\"/><Column id=\"jobRbprsn2SmYn\" type=\"STRING\" size=\"256\"/><Column id=\"jobRbprsn1PrvcClctUtztnTdptyPvsnWtcsPath\" type=\"STRING\" size=\"256\"/><Column id=\"jobRbprsn2PrvcClctUtztnTdptyPvsnWtcsPath\" type=\"STRING\" size=\"256\"/><Column id=\"jobTnopeOrg\" type=\"STRING\" size=\"256\"/><Column id=\"mvmnRgnNoExnYn\" type=\"STRING\" size=\"256\"/><Column id=\"vhclEqpmntTypeCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsVhclSe", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsVhclCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","divTitle:10",null,"4200","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickFrBg");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("divInfoGuide","1660.00","262","100%","300",null,null,null,null,"300",null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_text("서비스 흐름 및 작업방법 안내");
            obj.set_cssclass("div_WF_InfoGuide");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnSchClose",null,"10","34","34","10",null,null,null,null,null,this.divForm.form.divInfoGuide.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_ACPlus");
            this.divForm.form.divInfoGuide.addChild(obj.name, obj);

            obj = new Panel("sub_tit01","1630","674","100%","70",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("6");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div01","0","0","100%","480",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("신청번호 ");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtAplySeNm11","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_02","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_02\"/><PanelItem id=\"PanelItem02\" componentid=\"edtAplySeNm11\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_AplyNo","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_02_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("4");
            obj.set_text("신청구분 ");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtAplySeNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_02_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtAplySeNm\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("7");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_02_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_02_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("8");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00_00_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_02_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_02_01\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_01_00_00_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_00_01_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("11");
            obj.set_text("신청자 회사명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00_01_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_01_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("13");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_00_01_01\"/><PanelItem id=\"PanelItem03\" componentid=\"edt00_01_00_01_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan03","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("14");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00_01_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_02_03","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("15");
            obj.set_text("휴대폰 번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00_00_03","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("16");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_02_03","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("17");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_02_03\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_01_00_00_03\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_01_03","10.00","98","305","1",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("18");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan05","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("19");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_02_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00_01_03\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("sub_tit02","1630","674","100%","70",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("10");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div02","0","Div01:376.428","100%","1146",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel00_00_02\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Combo("cboVhclCd","274","153","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("70");
            obj.set_innerdataset("dsVhclCd");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Combo("cboVhclSe","33","145","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("69");
            obj.set_innerdataset("dsVhclSe");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_displaynulltext("선택");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("1");
            obj.set_text("반입반출여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoCrynShpgotCd\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Radio("rdoCrynShpgotCd","200.00","328","393","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div02_form_rdoCrynShpgotCd_innerdataset = new nexacro.NormalDataset("divForm_form_Div02_form_rdoCrynShpgotCd_innerdataset", obj);
            divForm_form_Div02_form_rdoCrynShpgotCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">AISVIOGUBUN001</Col><Col id=\"datacolumn\">반입</Col></Row><Row><Col id=\"codecolumn\">AISVIOGUBUN002</Col><Col id=\"datacolumn\">반출</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div02_form_rdoCrynShpgotCd_innerdataset);
            obj.set_text("Select");
            obj.set_value("0");
            obj.set_index("0");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("14");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel00_00_02_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_02","10.00","98","305","1",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("5");
            obj.set_text("이동지역등록번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan03","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("40");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel00_00_02_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan04","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("7");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_02_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00","222","153","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("9");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"edt00_01_00_00_01\"/><PanelItem id=\"PanelItem03\" componentid=\"btn00_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00_00_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("8");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("10");
            obj.set_text("차량(장비)구분");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","222","153","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("11");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"cboVhclSe\"/><PanelItem id=\"PanelItem01\" componentid=\"cboVhclCd\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_02_00_00","10.00","98","305","1",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("13");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtVin","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("15");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("16");
            obj.set_text("차대번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_02_00_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("17");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"edtVin\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_02_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("18");
            obj.set_text("차량중량(Kg)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("19");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtVvhclWt\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan05","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("20");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_00_01_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtVvhclWt","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("21");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_02","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("22");
            obj.set_text("제작증 등");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("Button00","813","76","120","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("23");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_file_1","124","58","116","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("24");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panBtnFile","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("25");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panTitle","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("26");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("27");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static01","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("28");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static02","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("29");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panFileNum","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("30");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1","512","135","125","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("31");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panBtnDel","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("32");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_1\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("33");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Grid("Grid00","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("34");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("36");
            obj.set_text("이동지역번호유무");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Radio("rdoMvmnRgnNoExnYn","200.00","328","393","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("37");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div02_form_rdoMvmnRgnNoExnYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div02_form_rdoMvmnRgnNoExnYn_innerdataset", obj);
            divForm_form_Div02_form_rdoMvmnRgnNoExnYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">유</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">무</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div02_form_rdoMvmnRgnNoExnYn_innerdataset);
            obj.set_text("유");
            obj.set_value("1");
            obj.set_index("0");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("38");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoMvmnRgnNoExnYn\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_02_01","10.00","98","305","1",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("39");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_02_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("41");
            obj.set_text("차량총중량(Kg)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtVhclTwt","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("42");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("43");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_02_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtVhclTwt\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_02_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("44");
            obj.set_text("최대적재량");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtMaxLdcpct","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("45");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01_00_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("46");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_02_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"edtMaxLdcpct\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_02_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("47");
            obj.set_text("승차인원");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtRdgNope","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("48");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01_00_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("49");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_02_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtRdgNope\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan06","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("50");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_01_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_00_01_00_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("51");
            obj.set_text("반출입일자");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Calendar("calCrynShpgotYmd","0","0","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("52");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("53");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_02\"/><PanelItem id=\"PanelItem03\" componentid=\"calCrynShpgotYmd\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_02_00_01_00","10.00","98","305","1",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("54");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan07","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("55");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel00_00_02_00_01_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_02_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("56");
            obj.set_text("초소명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01_01","10.00","98","970","116",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("57");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_02_01\"/><PanelItem id=\"PanelItem02\" componentid=\"chkCrynChckpntCd\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan08","0","60","100.00%","127",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("58");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_01_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new CheckBoxSet("chkCrynChckpntCd","200.00","213","100%","70",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("59");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonlycolumn("readonlycolumn");
            obj.set_fittocontents("width");
            obj.set_rowcount("2");
            var divForm_form_Div02_form_chkCrynChckpntCd_innerdataset = new nexacro.NormalDataset("divForm_form_Div02_form_chkCrynChckpntCd_innerdataset", obj);
            divForm_form_Div02_form_chkCrynChckpntCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/><Column id=\"readonlycolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">GPCODE001</Col><Col id=\"datacolumn\">G1</Col></Row><Row><Col id=\"codecolumn\">GPCODE002</Col><Col id=\"datacolumn\">G2</Col></Row><Row><Col id=\"codecolumn\">GPCODE003</Col><Col id=\"datacolumn\">G3</Col></Row><Row><Col id=\"codecolumn\">GPCODE004</Col><Col id=\"datacolumn\">G4</Col></Row><Row><Col id=\"codecolumn\">GPCODE005</Col><Col id=\"datacolumn\">G5</Col></Row><Row><Col id=\"codecolumn\">GPCODE006</Col><Col id=\"datacolumn\">G6</Col></Row><Row><Col id=\"codecolumn\">GPCODE007</Col><Col id=\"datacolumn\">G7</Col></Row><Row><Col id=\"codecolumn\">GPCODE008</Col><Col id=\"datacolumn\">TG1</Col></Row><Row><Col id=\"codecolumn\">GPCODE009</Col><Col id=\"datacolumn\">TG2</Col></Row><Row><Col id=\"codecolumn\">GPCODE010</Col><Col id=\"datacolumn\">G10</Col></Row><Row><Col id=\"codecolumn\">GPCODE011</Col><Col id=\"datacolumn\">G11</Col></Row><Row><Col id=\"datacolumn\">EG4</Col><Col id=\"codecolumn\">GPCODE012</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div02_form_chkCrynChckpntCd_innerdataset);
            obj.set_text("Check");
            obj.set_value("0");
            obj.set_index("0");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_02_00_01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("60");
            obj.set_text("반입(출)사유");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtCrynShpgotRsnCn","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("61");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01_00_01_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("62");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_02_00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtCrynShpgotRsnCn\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan09","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("63");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_01_00_01_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panFile","0","42","100.00%","200",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("35");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00\"/><PanelItem id=\"PanelItem03\" componentid=\"sta00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("sta00","200.00","383","100%","30",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("64");
            obj.set_text("제원을 증명할 수 있는 서류 (제작증 등) 1부");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01_00_01_00_00","10.00","98","305","30",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("65");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00_00_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan10","0","60","100.00%","51",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("66");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_01_00_01_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00","200.00","510","100%","30",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("67");
            obj.set_text("상기와 같이 차량/장비를 반입(출)하고자 하오니 확인 및 승인하여 주시기 바랍니다.");
            obj.set_cssclass("sta_WF_Des004");
            obj.set_fittocontents("height");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn00_00_00","488","168","250","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("68");
            obj.set_text("이동지역등록번호조회");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_text("신청자정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_00","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("7");
            obj.set_text("신청정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_00","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("9");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_01","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("11");
            obj.set_text("처리내역");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00_01","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_01","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("13");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit03","1630","674","100%","70",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("14");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div03","0","0","100%","400",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("15");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("0");
            obj.set_text("전달사항");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_02","10.00","98","305","146",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("1");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_02\"/><PanelItem id=\"PanelItem02\" componentid=\"txa00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","157",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("2");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_02\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new TextArea("txa00","40","64","100.00%","100",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("3");
            obj.set_displaynulltext("내용 입력");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01_00_00","20","-2194","480","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_02_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoDilgCd\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_02_00_00","0","-2194","47.06%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("8");
            obj.set_text("과금여부");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Radio("rdoDilgCd","0","-2149","393","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div03_form_rdoDilgCd_innerdataset = new nexacro.NormalDataset("divForm_form_Div03_form_rdoDilgCd_innerdataset", obj);
            divForm_form_Div03_form_rdoDilgCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">과금대상</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">비과금대상</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div03_form_rdoDilgCd_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan02","-9","81","100.00%","122",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("6");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00_02_00_01_00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_02_00_01_00_00","520","-2194","480","1",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Grid("grdCnvyMttr","18","1715","100%","180",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("4");
            obj.set_binddataset("dsCnvyMttr");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_autosizingtype("none");
            obj.set_scrollbarsize("15");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"170\"/><Column size=\"90\"/><Column size=\"650\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"일시\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"내용\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:frstRegDt\" displaytype=\"mask\" maskeditformat=\"####-##-## ##:##:##\" maskedittype=\"string\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:frstRegNm\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:cnvyMttrCn\" cssclass=\"CellEnd\" textAlign=\"left\" tooltiptext=\"bind:cnvyMttrCn\"/></Band></Format></Formats>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan12","0","60","100.00%","181",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("5");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grdCnvyMttr\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Div("divQuick",null,"62","296","156","62",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickMenu");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","17","20","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("0");
            obj.set_text("신청자정보");
            obj.set_cssclass("btn_WF_Quick_S");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn00_00","17.00","btn00:0","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("1");
            obj.set_text("신청정보");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn00_00_00","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("2");
            obj.set_text("처리내역");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"divQuick:0","296","131","62",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
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
                p.btnSchClose.set_taborder("0");
                p.btnSchClose.set_cssclass("btn_WF_ACPlus");
                p.btnSchClose.move(null,"10","34","34","10",null);
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
            //-- Default Layout : this.divForm.form.Div01.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel01_02_02.set_taborder("0");
                p.staLabel01_02_02.set_text("신청번호 ");
                p.staLabel01_02_02.set_cssclass("sta_WF_Label");
                p.staLabel01_02_02.move("10","98","100%","46",null,null);

                p.edtAplySeNm11.set_taborder("1");
                p.edtAplySeNm11.set_readonly("true");
                p.edtAplySeNm11.move("10.00","158","100%","40",null,null);

                p.Panel01_01_02.set_taborder("2");
                p.Panel01_01_02.set_type("vertical");
                p.Panel01_01_02.set_flexgrow("1");
                p.Panel01_01_02.move("10.00","98","305","86",null,null);

                p.pan01_AplyNo.set_taborder("3");
                p.pan01_AplyNo.set_horizontalgap("20");
                p.pan01_AplyNo.set_flexcrossaxiswrapalign("start");
                p.pan01_AplyNo.set_flexwrap("wrap");
                p.pan01_AplyNo.set_verticalgap("0");
                p.pan01_AplyNo.set_spacing("0px 20px 10px 20px");
                p.pan01_AplyNo.set_cssclass("pal_WF_DtlBg");
                p.pan01_AplyNo.set_flexshrink("1");
                p.pan01_AplyNo.set_fittocontents("height");
                p.pan01_AplyNo.set_visible("true");
                p.pan01_AplyNo.move("0","60","100.00%","96",null,null);

                p.staLabel01_02_02_00.set_taborder("4");
                p.staLabel01_02_02_00.set_text("신청구분 ");
                p.staLabel01_02_02_00.set_cssclass("sta_WF_Label");
                p.staLabel01_02_02_00.move("10","98","100%","46",null,null);

                p.edtAplySeNm.set_taborder("5");
                p.edtAplySeNm.set_readonly("true");
                p.edtAplySeNm.move("10.00","158","100%","40",null,null);

                p.Panel01_01_02_00.set_taborder("6");
                p.Panel01_01_02_00.set_type("vertical");
                p.Panel01_01_02_00.set_flexgrow("1");
                p.Panel01_01_02_00.move("10.00","98","305","86",null,null);

                p.pan02.set_taborder("7");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.set_flexshrink("1");
                p.pan02.set_fittocontents("height");
                p.pan02.move("0","60","100.00%","96",null,null);

                p.staLabel01_02_02_01.set_taborder("8");
                p.staLabel01_02_02_01.set_text("신청자");
                p.staLabel01_02_02_01.set_cssclass("sta_WF_Label");
                p.staLabel01_02_02_01.move("10","98","100%","46",null,null);

                p.edt00_01_00_00_01.set_taborder("9");
                p.edt00_01_00_00_01.set_readonly("true");
                p.edt00_01_00_00_01.move("10.00","158","100%","40",null,null);

                p.Panel01_01_02_01.set_taborder("10");
                p.Panel01_01_02_01.set_type("vertical");
                p.Panel01_01_02_01.set_flexgrow("1");
                p.Panel01_01_02_01.move("10.00","98","305","86",null,null);

                p.staLabel01_02_00_01_01.set_taborder("11");
                p.staLabel01_02_00_01_01.set_text("신청자 회사명");
                p.staLabel01_02_00_01_01.set_cssclass("sta_WF_Label");
                p.staLabel01_02_00_01_01.move("10","98","100%","46",null,null);

                p.edt00_01_00_01_01.set_taborder("12");
                p.edt00_01_00_01_01.set_readonly("true");
                p.edt00_01_00_01_01.move("10.00","158","100%","40",null,null);

                p.Panel01_01_00_01_01.set_taborder("13");
                p.Panel01_01_00_01_01.set_type("vertical");
                p.Panel01_01_00_01_01.set_flexgrow("1");
                p.Panel01_01_00_01_01.move("10.00","98","305","86",null,null);

                p.pan03.set_taborder("14");
                p.pan03.set_horizontalgap("20");
                p.pan03.set_flexcrossaxiswrapalign("start");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_verticalgap("0");
                p.pan03.set_spacing("0px 20px 10px 20px");
                p.pan03.set_cssclass("pal_WF_DtlBg");
                p.pan03.set_flexshrink("1");
                p.pan03.set_fittocontents("height");
                p.pan03.move("0","60","100.00%","96",null,null);

                p.staLabel01_02_02_03.set_taborder("15");
                p.staLabel01_02_02_03.set_text("휴대폰 번호");
                p.staLabel01_02_02_03.set_cssclass("sta_WF_Label");
                p.staLabel01_02_02_03.move("10","98","100%","46",null,null);

                p.edt00_01_00_00_03.set_taborder("16");
                p.edt00_01_00_00_03.set_readonly("true");
                p.edt00_01_00_00_03.move("10.00","158","100%","40",null,null);

                p.Panel01_01_02_03.set_taborder("17");
                p.Panel01_01_02_03.set_type("vertical");
                p.Panel01_01_02_03.set_flexgrow("1");
                p.Panel01_01_02_03.move("10.00","98","305","86",null,null);

                p.Panel01_01_00_01_03.set_taborder("18");
                p.Panel01_01_00_01_03.set_type("vertical");
                p.Panel01_01_00_01_03.set_flexgrow("1");
                p.Panel01_01_00_01_03.move("10.00","98","305","1",null,null);

                p.pan05.set_taborder("19");
                p.pan05.set_horizontalgap("20");
                p.pan05.set_flexcrossaxiswrapalign("start");
                p.pan05.set_flexwrap("wrap");
                p.pan05.set_verticalgap("0");
                p.pan05.set_spacing("0px 20px 10px 20px");
                p.pan05.set_cssclass("pal_WF_DtlBg");
                p.pan05.set_flexshrink("1");
                p.pan05.set_fittocontents("height");
                p.pan05.move("0","60","100.00%","96",null,null);
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
                p.pan01.set_taborder("0");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_fittocontents("height");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.set_type("horizontal");
                p.pan01.move("0","60","100.00%","96",null,null);

                p.cboVhclCd.set_taborder("70");
                p.cboVhclCd.set_innerdataset("dsVhclCd");
                p.cboVhclCd.set_codecolumn("cdId");
                p.cboVhclCd.set_datacolumn("cdNm");
                p.cboVhclCd.set_displaynulltext("선택");
                p.cboVhclCd.set_text("");
                p.cboVhclCd.set_value("");
                p.cboVhclCd.set_index("-1");
                p.cboVhclCd.move("274","153","100%","40",null,null);

                p.cboVhclSe.set_taborder("69");
                p.cboVhclSe.set_innerdataset("dsVhclSe");
                p.cboVhclSe.set_codecolumn("cdId");
                p.cboVhclSe.set_datacolumn("cdNm");
                p.cboVhclSe.set_displaynulltext("선택");
                p.cboVhclSe.set_text("선택");
                p.cboVhclSe.set_value("");
                p.cboVhclSe.set_index("-1");
                p.cboVhclSe.move("33","145","100%","40",null,null);

                p.staLabel00.set_taborder("1");
                p.staLabel00.set_text("반입반출여부");
                p.staLabel00.set_cssclass("sta_WF_Label_E");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.Panel00_00.set_taborder("2");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.set_minwidth("");
                p.Panel00_00.move("10.00","98","305","86",null,null);

                p.rdoCrynShpgotCd.set_taborder("3");
                p.rdoCrynShpgotCd.set_innerdataset(divForm_form_Div02_form_rdoCrynShpgotCd_innerdataset);
                p.rdoCrynShpgotCd.set_codecolumn("codecolumn");
                p.rdoCrynShpgotCd.set_datacolumn("datacolumn");
                p.rdoCrynShpgotCd.set_direction("vertical");
                p.rdoCrynShpgotCd.set_fittocontents("width");
                p.rdoCrynShpgotCd.set_value("0");
                p.rdoCrynShpgotCd.set_index("0");
                p.rdoCrynShpgotCd.move("200.00","328","393","40",null,null);

                p.pan02.set_taborder("14");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.set_type("horizontal");
                p.pan02.move("0","60","100.00%","96",null,null);

                p.Panel00_00_02.set_taborder("4");
                p.Panel00_00_02.set_type("vertical");
                p.Panel00_00_02.set_flexgrow("1");
                p.Panel00_00_02.set_minwidth("");
                p.Panel00_00_02.move("10.00","98","305","1",null,null);

                p.staLabel00_00.set_taborder("5");
                p.staLabel00_00.set_text("이동지역등록번호");
                p.staLabel00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00.move("10","98","100%","46",null,null);

                p.Panel00_00_00.set_taborder("6");
                p.Panel00_00_00.set_type("vertical");
                p.Panel00_00_00.set_flexgrow("1");
                p.Panel00_00_00.set_minwidth("");
                p.Panel00_00_00.move("10.00","98","305","86",null,null);

                p.pan03.set_taborder("40");
                p.pan03.set_horizontalgap("20");
                p.pan03.set_flexcrossaxiswrapalign("start");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_fittocontents("height");
                p.pan03.set_verticalgap("0");
                p.pan03.set_spacing("0px 20px 10px 20px");
                p.pan03.set_cssclass("pal_WF_DtlBg");
                p.pan03.set_type("horizontal");
                p.pan03.move("0","60","100.00%","96",null,null);

                p.pan04.set_taborder("7");
                p.pan04.set_horizontalgap("20");
                p.pan04.set_flexcrossaxiswrapalign("start");
                p.pan04.set_flexwrap("wrap");
                p.pan04.set_fittocontents("height");
                p.pan04.set_verticalgap("0");
                p.pan04.set_spacing("0px 20px 10px 20px");
                p.pan04.set_cssclass("pal_WF_DtlBg");
                p.pan04.set_type("horizontal");
                p.pan04.move("0","60","100.00%","96",null,null);

                p.Panel00.set_taborder("9");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.move("222","153","100%","40",null,null);

                p.edt00_01_00_00_01.set_taborder("8");
                p.edt00_01_00_00_01.move("10.00","158","100%","40",null,null);

                p.staLabel00_00_01.set_taborder("10");
                p.staLabel00_00_01.set_text("차량(장비)구분");
                p.staLabel00_00_01.set_cssclass("sta_WF_Label");
                p.staLabel00_00_01.move("10","98","100%","46",null,null);

                p.Panel00_01.set_taborder("11");
                p.Panel00_01.set_horizontalgap("10");
                p.Panel00_01.move("222","153","100%","40",null,null);

                p.Panel00_00_00_00.set_taborder("12");
                p.Panel00_00_00_00.set_type("vertical");
                p.Panel00_00_00_00.set_flexgrow("1");
                p.Panel00_00_00_00.set_minwidth("");
                p.Panel00_00_00_00.move("10.00","98","305","86",null,null);

                p.Panel00_00_02_00_00.set_taborder("13");
                p.Panel00_00_02_00_00.set_type("vertical");
                p.Panel00_00_02_00_00.set_flexgrow("1");
                p.Panel00_00_02_00_00.set_minwidth("");
                p.Panel00_00_02_00_00.move("10.00","98","305","1",null,null);

                p.edtVin.set_taborder("15");
                p.edtVin.move("10.00","158","100%","40",null,null);

                p.staLabel00_00_00_01.set_taborder("16");
                p.staLabel00_00_00_01.set_text("차대번호");
                p.staLabel00_00_00_01.set_cssclass("sta_WF_Label");
                p.staLabel00_00_00_01.move("10","98","100%","46",null,null);

                p.Panel00_00_02_00_01.set_taborder("17");
                p.Panel00_00_02_00_01.set_type("vertical");
                p.Panel00_00_02_00_01.set_flexgrow("1");
                p.Panel00_00_02_00_01.set_minwidth("");
                p.Panel00_00_02_00_01.move("10.00","98","305","86",null,null);

                p.staLabel00_00_02_00.set_taborder("18");
                p.staLabel00_00_02_00.set_text("차량중량(Kg)");
                p.staLabel00_00_02_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00_02_00.move("10","98","100%","46",null,null);

                p.Panel00_00_00_01_00.set_taborder("19");
                p.Panel00_00_00_01_00.set_type("vertical");
                p.Panel00_00_00_01_00.set_flexgrow("1");
                p.Panel00_00_00_01_00.set_minwidth("");
                p.Panel00_00_00_01_00.move("10.00","98","305","86",null,null);

                p.pan05.set_taborder("20");
                p.pan05.set_horizontalgap("20");
                p.pan05.set_flexcrossaxiswrapalign("start");
                p.pan05.set_flexwrap("wrap");
                p.pan05.set_fittocontents("height");
                p.pan05.set_verticalgap("0");
                p.pan05.set_spacing("0px 20px 10px 20px");
                p.pan05.set_cssclass("pal_WF_DtlBg");
                p.pan05.set_type("horizontal");
                p.pan05.move("0","60","100.00%","96",null,null);

                p.edtVvhclWt.set_taborder("21");
                p.edtVvhclWt.set_readonly("true");
                p.edtVvhclWt.move("10.00","158","100%","40",null,null);

                p.staLabel00_02.set_taborder("22");
                p.staLabel00_02.set_text("제작증 등");
                p.staLabel00_02.set_cssclass("sta_WF_Label");
                p.staLabel00_02.set_fittocontents("width");
                p.staLabel00_02.move("0","44","305","46",null,null);

                p.Button00.set_taborder("23");
                p.Button00.set_text("샘플첨부파일명");
                p.Button00.set_cssclass("btn_WF_Small");
                p.Button00.set_fittocontents("width");
                p.Button00.move("813","76","120","34",null,null);

                p.btn_file_1.set_taborder("24");
                p.btn_file_1.set_text("파일선택");
                p.btn_file_1.set_cssclass("btn_WF_FileUp");
                p.btn_file_1.set_fittocontents("width");
                p.btn_file_1.move("124","58","116","34",null,null);

                p.panBtnFile.set_taborder("25");
                p.panBtnFile.set_flexgrow("1");
                p.panBtnFile.set_flexmainaxisalign("end");
                p.panBtnFile.set_horizontalgap("10");
                p.panBtnFile.move("433","58","305","46",null,null);

                p.panTitle.set_taborder("26");
                p.panTitle.set_cssclass("pan_WF_FileTitle");
                p.panTitle.set_flexwrap("wrap");
                p.panTitle.set_fittocontents("height");
                p.panTitle.move("0","124","100%","46",null,null);

                p.Static00.set_taborder("27");
                p.Static00.set_text("파일수 : ");
                p.Static00.set_fittocontents("width");
                p.Static00.move("88","123","48","46",null,null);

                p.Static01.set_taborder("28");
                p.Static01.set_text("0");
                p.Static01.set_fittocontents("width");
                p.Static01.move("165","143","9","46",null,null);

                p.Static02.set_taborder("29");
                p.Static02.set_text("개");
                p.Static02.set_fittocontents("width");
                p.Static02.move("293","131","13","46",null,null);

                p.panFileNum.set_taborder("30");
                p.panFileNum.set_flexgrow("1");
                p.panFileNum.set_horizontalgap("4");
                p.panFileNum.move("20","190","305","46",null,null);

                p.btn_del_file_1.set_taborder("31");
                p.btn_del_file_1.set_text("전체파일삭제");
                p.btn_del_file_1.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_1.set_fittocontents("width");
                p.btn_del_file_1.move("512","135","125","34",null,null);

                p.panBtnDel.set_taborder("32");
                p.panBtnDel.set_flexcrossaxisalign("center");
                p.panBtnDel.set_flexmainaxisalign("end");
                p.panBtnDel.set_flexgrow("1");
                p.panBtnDel.move("517","141","305","46",null,null);

                p.Panel00_02.set_taborder("33");
                p.Panel00_02.move("20","51","100%","46",null,null);

                p.Grid00.set_taborder("34");
                p.Grid00.set_binddataset("dsFile1");
                p.Grid00.set_autofittype("col");
                p.Grid00.set_cssclass("grd_WF_FileAdd");
                p.Grid00.move("20.00","114","100%","40",null,null);

                p.staLabel00_01.set_taborder("36");
                p.staLabel00_01.set_text("이동지역번호유무");
                p.staLabel00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel00_01.move("10","98","100%","46",null,null);

                p.rdoMvmnRgnNoExnYn.set_taborder("37");
                p.rdoMvmnRgnNoExnYn.set_innerdataset(divForm_form_Div02_form_rdoMvmnRgnNoExnYn_innerdataset);
                p.rdoMvmnRgnNoExnYn.set_codecolumn("codecolumn");
                p.rdoMvmnRgnNoExnYn.set_datacolumn("datacolumn");
                p.rdoMvmnRgnNoExnYn.set_direction("vertical");
                p.rdoMvmnRgnNoExnYn.set_fittocontents("width");
                p.rdoMvmnRgnNoExnYn.set_value("1");
                p.rdoMvmnRgnNoExnYn.set_index("0");
                p.rdoMvmnRgnNoExnYn.move("200.00","328","393","40",null,null);

                p.Panel00_00_01.set_taborder("38");
                p.Panel00_00_01.set_type("vertical");
                p.Panel00_00_01.set_flexgrow("1");
                p.Panel00_00_01.set_minwidth("");
                p.Panel00_00_01.move("10.00","98","305","86",null,null);

                p.Panel00_00_02_01.set_taborder("39");
                p.Panel00_00_02_01.set_type("vertical");
                p.Panel00_00_02_01.set_flexgrow("1");
                p.Panel00_00_02_01.set_minwidth("");
                p.Panel00_00_02_01.move("10.00","98","305","1",null,null);

                p.staLabel00_00_02_00_00.set_taborder("41");
                p.staLabel00_00_02_00_00.set_text("차량총중량(Kg)");
                p.staLabel00_00_02_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00_02_00_00.move("10","98","100%","46",null,null);

                p.edtVhclTwt.set_taborder("42");
                p.edtVhclTwt.move("10.00","158","100%","40",null,null);

                p.Panel00_00_00_01_00_00.set_taborder("43");
                p.Panel00_00_00_01_00_00.set_type("vertical");
                p.Panel00_00_00_01_00_00.set_flexgrow("1");
                p.Panel00_00_00_01_00_00.set_minwidth("");
                p.Panel00_00_00_01_00_00.move("10.00","98","305","86",null,null);

                p.staLabel00_00_02_00_01.set_taborder("44");
                p.staLabel00_00_02_00_01.set_text("최대적재량");
                p.staLabel00_00_02_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00_02_00_01.move("10","98","100%","46",null,null);

                p.edtMaxLdcpct.set_taborder("45");
                p.edtMaxLdcpct.move("10.00","158","100%","40",null,null);

                p.Panel00_00_00_01_00_01.set_taborder("46");
                p.Panel00_00_00_01_00_01.set_type("vertical");
                p.Panel00_00_00_01_00_01.set_flexgrow("1");
                p.Panel00_00_00_01_00_01.set_minwidth("");
                p.Panel00_00_00_01_00_01.move("10.00","98","305","86",null,null);

                p.staLabel00_00_02_00_00_00.set_taborder("47");
                p.staLabel00_00_02_00_00_00.set_text("승차인원");
                p.staLabel00_00_02_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00_02_00_00_00.move("10","98","100%","46",null,null);

                p.edtRdgNope.set_taborder("48");
                p.edtRdgNope.move("10.00","158","100%","40",null,null);

                p.Panel00_00_00_01_00_00_00.set_taborder("49");
                p.Panel00_00_00_01_00_00_00.set_type("vertical");
                p.Panel00_00_00_01_00_00_00.set_flexgrow("1");
                p.Panel00_00_00_01_00_00_00.set_minwidth("");
                p.Panel00_00_00_01_00_00_00.move("10.00","98","305","86",null,null);

                p.pan06.set_taborder("50");
                p.pan06.set_horizontalgap("20");
                p.pan06.set_flexcrossaxiswrapalign("start");
                p.pan06.set_flexwrap("wrap");
                p.pan06.set_fittocontents("height");
                p.pan06.set_verticalgap("0");
                p.pan06.set_spacing("0px 20px 10px 20px");
                p.pan06.set_cssclass("pal_WF_DtlBg");
                p.pan06.set_type("horizontal");
                p.pan06.move("0","60","100.00%","96",null,null);

                p.staLabel00_00_02.set_taborder("51");
                p.staLabel00_00_02.set_text("반출입일자");
                p.staLabel00_00_02.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00_02.move("10","98","100%","46",null,null);

                p.calCrynShpgotYmd.set_taborder("52");
                p.calCrynShpgotYmd.set_dateformat("yyyy-MM-dd");
                p.calCrynShpgotYmd.move("0","0","100%","40",null,null);

                p.Panel00_00_00_01.set_taborder("53");
                p.Panel00_00_00_01.set_type("vertical");
                p.Panel00_00_00_01.set_flexgrow("1");
                p.Panel00_00_00_01.set_minwidth("");
                p.Panel00_00_00_01.move("10.00","98","305","86",null,null);

                p.Panel00_00_02_00_01_00.set_taborder("54");
                p.Panel00_00_02_00_01_00.set_type("vertical");
                p.Panel00_00_02_00_01_00.set_flexgrow("1");
                p.Panel00_00_02_00_01_00.set_minwidth("");
                p.Panel00_00_02_00_01_00.move("10.00","98","305","1",null,null);

                p.pan07.set_taborder("55");
                p.pan07.set_horizontalgap("20");
                p.pan07.set_flexcrossaxiswrapalign("start");
                p.pan07.set_flexwrap("wrap");
                p.pan07.set_fittocontents("height");
                p.pan07.set_verticalgap("0");
                p.pan07.set_spacing("0px 20px 10px 20px");
                p.pan07.set_cssclass("pal_WF_DtlBg");
                p.pan07.set_type("horizontal");
                p.pan07.move("0","60","100.00%","96",null,null);

                p.staLabel00_00_02_01.set_taborder("56");
                p.staLabel00_00_02_01.set_text("초소명");
                p.staLabel00_00_02_01.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00_02_01.move("10","98","100%","46",null,null);

                p.Panel00_00_00_01_01.set_taborder("57");
                p.Panel00_00_00_01_01.set_type("vertical");
                p.Panel00_00_00_01_01.set_flexgrow("1");
                p.Panel00_00_00_01_01.set_minwidth("");
                p.Panel00_00_00_01_01.move("10.00","98","970","116",null,null);

                p.pan08.set_taborder("58");
                p.pan08.set_horizontalgap("20");
                p.pan08.set_flexcrossaxiswrapalign("start");
                p.pan08.set_flexwrap("wrap");
                p.pan08.set_fittocontents("height");
                p.pan08.set_verticalgap("0");
                p.pan08.set_spacing("0px 20px 10px 20px");
                p.pan08.set_cssclass("pal_WF_DtlBg");
                p.pan08.set_type("horizontal");
                p.pan08.move("0","60","100.00%","127",null,null);

                p.chkCrynChckpntCd.set_taborder("59");
                p.chkCrynChckpntCd.set_innerdataset(divForm_form_Div02_form_chkCrynChckpntCd_innerdataset);
                p.chkCrynChckpntCd.set_codecolumn("codecolumn");
                p.chkCrynChckpntCd.set_datacolumn("datacolumn");
                p.chkCrynChckpntCd.set_readonlycolumn("readonlycolumn");
                p.chkCrynChckpntCd.set_fittocontents("width");
                p.chkCrynChckpntCd.set_rowcount("2");
                p.chkCrynChckpntCd.set_value("0");
                p.chkCrynChckpntCd.set_index("0");
                p.chkCrynChckpntCd.move("200.00","213","100%","70",null,null);

                p.staLabel00_00_02_00_01_00.set_taborder("60");
                p.staLabel00_00_02_00_01_00.set_text("반입(출)사유");
                p.staLabel00_00_02_00_01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00_02_00_01_00.move("10","98","100%","46",null,null);

                p.edtCrynShpgotRsnCn.set_taborder("61");
                p.edtCrynShpgotRsnCn.move("10.00","158","100%","40",null,null);

                p.Panel00_00_00_01_00_01_00.set_taborder("62");
                p.Panel00_00_00_01_00_01_00.set_type("vertical");
                p.Panel00_00_00_01_00_01_00.set_flexgrow("1");
                p.Panel00_00_00_01_00_01_00.set_minwidth("");
                p.Panel00_00_00_01_00_01_00.move("10.00","98","305","86",null,null);

                p.pan09.set_taborder("63");
                p.pan09.set_horizontalgap("20");
                p.pan09.set_flexcrossaxiswrapalign("start");
                p.pan09.set_flexwrap("wrap");
                p.pan09.set_fittocontents("height");
                p.pan09.set_verticalgap("0");
                p.pan09.set_spacing("0px 20px 10px 20px");
                p.pan09.set_cssclass("pal_WF_DtlBg");
                p.pan09.set_type("horizontal");
                p.pan09.move("0","60","100.00%","96",null,null);

                p.panFile.set_taborder("35");
                p.panFile.set_fittocontents("height");
                p.panFile.set_spacing("10px 20px 10px 20px");
                p.panFile.set_flexwrap("wrap");
                p.panFile.set_cssclass("pal_WF_DtlBg");
                p.panFile.set_verticalgap("4");
                p.panFile.move("0","42","100.00%","200",null,null);

                p.sta00.set_taborder("64");
                p.sta00.set_text("제원을 증명할 수 있는 서류 (제작증 등) 1부");
                p.sta00.set_cssclass("sta_WF_Des");
                p.sta00.set_fittocontents("height");
                p.sta00.move("200.00","383","100%","30",null,null);

                p.Panel00_00_00_01_00_01_00_00.set_taborder("65");
                p.Panel00_00_00_01_00_01_00_00.set_type("vertical");
                p.Panel00_00_00_01_00_01_00_00.set_flexgrow("1");
                p.Panel00_00_00_01_00_01_00_00.set_minwidth("");
                p.Panel00_00_00_01_00_01_00_00.move("10.00","98","305","30",null,null);

                p.pan10.set_taborder("66");
                p.pan10.set_horizontalgap("20");
                p.pan10.set_flexcrossaxiswrapalign("start");
                p.pan10.set_flexwrap("wrap");
                p.pan10.set_fittocontents("height");
                p.pan10.set_verticalgap("0");
                p.pan10.set_spacing("10px 20px 10px 20px");
                p.pan10.set_cssclass("pal_WF_DtlBg");
                p.pan10.set_type("horizontal");
                p.pan10.move("0","60","100.00%","51",null,null);

                p.sta00_00_00_00.set_taborder("67");
                p.sta00_00_00_00.set_text("상기와 같이 차량/장비를 반입(출)하고자 하오니 확인 및 승인하여 주시기 바랍니다.");
                p.sta00_00_00_00.set_cssclass("sta_WF_Des004");
                p.sta00_00_00_00.set_fittocontents("height");
                p.sta00_00_00_00.move("200.00","510","100%","30",null,null);

                p.btn00_00_00.set_taborder("68");
                p.btn00_00_00.set_text("이동지역등록번호조회");
                p.btn00_00_00.set_fittocontents("width");
                p.btn00_00_00.move("488","168","250","40",null,null);
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
            obj = new Layout("default","",0,0,this.divForm.form.Div03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel01_02_02.set_taborder("0");
                p.staLabel01_02_02.set_text("전달사항");
                p.staLabel01_02_02.set_cssclass("sta_WF_Label");
                p.staLabel01_02_02.move("10","98","100%","46",null,null);

                p.Panel01_01_02.set_taborder("1");
                p.Panel01_01_02.set_type("vertical");
                p.Panel01_01_02.set_flexgrow("1");
                p.Panel01_01_02.move("10.00","98","305","146",null,null);

                p.pan01.set_taborder("2");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.set_flexshrink("1");
                p.pan01.set_fittocontents("height");
                p.pan01.move("0","60","100.00%","157",null,null);

                p.txa00.set_taborder("3");
                p.txa00.set_displaynulltext("내용 입력");
                p.txa00.move("40","64","100.00%","100",null,null);

                p.Panel00_00_00_01_00_00.set_taborder("7");
                p.Panel00_00_00_01_00_00.set_type("vertical");
                p.Panel00_00_00_01_00_00.set_flexgrow("1");
                p.Panel00_00_00_01_00_00.set_minwidth("");
                p.Panel00_00_00_01_00_00.move("20","-2194","480","86",null,null);

                p.staLabel00_00_02_00_00.set_taborder("8");
                p.staLabel00_00_02_00_00.set_text("과금여부");
                p.staLabel00_00_02_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00_02_00_00.move("0","-2194","47.06%","46",null,null);

                p.rdoDilgCd.set_taborder("9");
                p.rdoDilgCd.set_innerdataset(divForm_form_Div03_form_rdoDilgCd_innerdataset);
                p.rdoDilgCd.set_codecolumn("codecolumn");
                p.rdoDilgCd.set_datacolumn("datacolumn");
                p.rdoDilgCd.set_direction("vertical");
                p.rdoDilgCd.set_fittocontents("width");
                p.rdoDilgCd.set_index("-1");
                p.rdoDilgCd.move("0","-2149","393","40",null,null);

                p.pan02.set_taborder("6");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.set_type("horizontal");
                p.pan02.set_visible("false");
                p.pan02.move("-9","81","100.00%","122",null,null);

                p.Panel00_00_02_00_01_00_00.set_taborder("10");
                p.Panel00_00_02_00_01_00_00.set_type("vertical");
                p.Panel00_00_02_00_01_00_00.set_flexgrow("1");
                p.Panel00_00_02_00_01_00_00.set_minwidth("");
                p.Panel00_00_02_00_01_00_00.move("520","-2194","480","1",null,null);

                p.grdCnvyMttr.set_taborder("4");
                p.grdCnvyMttr.set_binddataset("dsCnvyMttr");
                p.grdCnvyMttr.set_autofittype("col");
                p.grdCnvyMttr.set_cellsizingtype("col");
                p.grdCnvyMttr.set_autosizingtype("none");
                p.grdCnvyMttr.set_scrollbarsize("15");
                p.grdCnvyMttr.move("18","1715","100%","180",null,null);

                p.pan12.set_taborder("5");
                p.pan12.set_flexcrossaxiswrapalign("start");
                p.pan12.set_flexwrap("wrap");
                p.pan12.set_fittocontents("height");
                p.pan12.set_verticalgap("0");
                p.pan12.set_spacing("10px 20px 10px 20px");
                p.pan12.set_cssclass("pal_WF_DtlBg");
                p.pan12.set_type("horizontal");
                p.pan12.set_visible("true");
                p.pan12.move("0","60","100.00%","181",null,null);
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
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divInfoGuide.set_taborder("2");
                p.divInfoGuide.set_text("서비스 흐름 및 작업방법 안내");
                p.divInfoGuide.set_cssclass("div_WF_InfoGuide");
                p.divInfoGuide.set_minheight("300");
                p.divInfoGuide.set_maxheight("");
                p.divInfoGuide.move("1660.00","262","100%","300",null,null);

                p.sub_tit01.set_taborder("6");
                p.sub_tit01.set_background("#ffffff");
                p.sub_tit01.set_flexcrossaxisalign("end");
                p.sub_tit01.move("1630","674","100%","70",null,null);

                p.Div01.set_taborder("0");
                p.Div01.set_text("Div00");
                p.Div01.set_cssclass("div_WF_Bg");
                p.Div01.set_fittocontents("height");
                p.Div01.move("0","0","100%","480",null,null);

                p.sub_tit02.set_taborder("10");
                p.sub_tit02.set_background("#ffffff");
                p.sub_tit02.set_flexcrossaxisalign("end");
                p.sub_tit02.move("1630","674","100%","70",null,null);

                p.Div02.set_taborder("1");
                p.Div02.set_text("Div00");
                p.Div02.set_cssclass("div_WF_Bg");
                p.Div02.set_fittocontents("height");
                p.Div02.move("0","Div01:376.428","100%","1146",null,null);

                p.staSubTitle02_00.set_taborder("3");
                p.staSubTitle02_00.set_text("신청자정보");
                p.staSubTitle02_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00.move("1630.00","690","50%","50",null,null);

                p.Button00_00.set_taborder("4");
                p.Button00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00.move("2890.00","692","34","34",null,null);

                p.Panel01_02.set_taborder("5");
                p.Panel01_02.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02.set_spacing("0px 10px");
                p.Panel01_02.set_horizontalgap("10");
                p.Panel01_02.set_flexcrossaxisalign("center");
                p.Panel01_02.set_flexmainaxisalign("end");
                p.Panel01_02.move("2340.00","690","50%","50",null,null);

                p.staSubTitle02_00_00.set_taborder("7");
                p.staSubTitle02_00_00.set_text("신청정보");
                p.staSubTitle02_00_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_00.move("1630.00","690","50%","50",null,null);

                p.Button00_00_00.set_taborder("8");
                p.Button00_00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_00.move("2890.00","692","34","34",null,null);

                p.Panel01_02_00.set_taborder("9");
                p.Panel01_02_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_00.set_spacing("0px 10px");
                p.Panel01_02_00.set_horizontalgap("10");
                p.Panel01_02_00.set_flexcrossaxisalign("center");
                p.Panel01_02_00.set_flexmainaxisalign("end");
                p.Panel01_02_00.move("2340.00","690","50%","50",null,null);

                p.staSubTitle02_00_01.set_taborder("11");
                p.staSubTitle02_00_01.set_text("처리내역");
                p.staSubTitle02_00_01.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_01.move("1630.00","690","50%","50",null,null);

                p.Button00_00_01.set_taborder("12");
                p.Button00_00_01.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_01.move("2890.00","692","34","34",null,null);

                p.Panel01_02_01.set_taborder("13");
                p.Panel01_02_01.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_01.set_spacing("0px 10px");
                p.Panel01_02_01.set_horizontalgap("10");
                p.Panel01_02_01.set_flexcrossaxisalign("center");
                p.Panel01_02_01.set_flexmainaxisalign("end");
                p.Panel01_02_01.move("2340.00","690","50%","50",null,null);

                p.sub_tit03.set_taborder("14");
                p.sub_tit03.set_background("#ffffff");
                p.sub_tit03.set_flexcrossaxisalign("end");
                p.sub_tit03.move("1630","674","100%","70",null,null);

                p.Div03.set_taborder("15");
                p.Div03.set_text("Div00");
                p.Div03.set_cssclass("div_WF_Bg");
                p.Div03.set_fittocontents("height");
                p.Div03.move("0","0","100%","400",null,null);
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
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divQuick.form
            obj = new Layout("default","",0,0,this.divQuick.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btn00.set_taborder("0");
                p.btn00.set_text("신청자정보");
                p.btn00.set_cssclass("btn_WF_Quick_S");
                p.btn00.move("17","20","100%","45",null,null);

                p.btn00_00.set_taborder("1");
                p.btn00_00.set_text("신청정보");
                p.btn00_00.set_cssclass("btn_WF_Quick");
                p.btn00_00.move("17.00","btn00:0","100%","45",null,null);

                p.btn00_00_00.set_taborder("2");
                p.btn00_00_00.set_text("처리내역");
                p.btn00_00_00.set_cssclass("btn_WF_Quick");
                p.btn00_00_00.move("17.00","110","100%","45",null,null);
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

                p.btn00_00.set_fittocontents("width");
                p.btn00_00.set_cssclass("btn_WF_QuickM");

                p.btn00_00_00.set_fittocontents("width");
                p.btn00_00_00.set_cssclass("btn_WF_QuickM");
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
            obj = new Layout("default","Desktop_screen,Phone_screen",1480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("이동지역차량징비반입반출입신청 신청서보완");

                p.divTitle.set_taborder("3");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_cssclass("div_WF_QuickFrBg");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("height");
                p.divForm.move("0","divTitle:10",null,"4200","60",null);

                p.divQuick.set_taborder("1");
                p.divQuick.set_text("div00");
                p.divQuick.set_cssclass("div_WF_QuickMenu");
                p.divQuick.set_fittocontents("height");
                p.divQuick.move(null,"62","296","156","62",null);

                p.divBtn.set_taborder("2");
                p.divBtn.set_text("div00");
                p.divBtn.set_cssclass("div_WF_QuickBtnBg");
                p.divBtn.set_fittocontents("height");
                p.divBtn.move(null,"divQuick:0","296","131","62",null);

                p.divGuide00.set_taborder("4");
                p.divGuide00.set_text("div00");
                p.divGuide00.set_visible("false");
                p.divGuide00.set_cssclass("div_GD_Tip");
                p.divGuide00.move("1600.00","145","450","385",null,null);
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

                p.divBtn.set_cssclass("div_WF_QuickBtnBgM");
                p.divBtn.set_fittocontents("none");
                p.divBtn.move("0",null,null,"80","0","0");
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.Div01.form.edtAplySeNm11","value","dsAisMvmnRgnMst","aplyNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.Div01.form.edt00_01_00_00_01","value","dsAisMvmnRgnMst","aplcntNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.Div01.form.edt00_01_00_01_01","value","dsAisMvmnRgnMst","aplcntInstNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.Div01.form.edt00_01_00_00_03","value","dsAisMvmnRgnMst","hwrtInptCtinfoNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.Div02.form.cboVhclSe","value","dsAisMvmnRgnMst","vhclEqpmntTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.Div02.form.cboVhclCd","value","dsAisMvmnRgnMst","vhclEqpmntSeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.Div02.form.rdoMvmnRgnNoExnYn","value","dsAisMvmnRgnMst","mvmnRgnNoExnYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.Div02.form.edtVin","value","dsAisMvmnRgnMst","vin");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.Div02.form.edt00_01_00_00_01","value","dsAisMvmnRgnMst","mvmnRgnRegNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divForm.form.Div02.form.edtVvhclWt","value","dsAisMvmnRgnMst","vhclWt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divForm.form.Div02.form.edtVhclTwt","value","dsAisMvmnRgnMst","vhclTwt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divForm.form.Div02.form.edtMaxLdcpct","value","dsAisMvmnRgnMst","maxLdcpct");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divForm.form.Div02.form.edtRdgNope","value","dsAisMvmnRgnMst","rdgNope");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divForm.form.Div02.form.calCrynShpgotYmd","value","dsAisMvmnRgnMst","crynShpgotYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divForm.form.Div02.form.chkCrynChckpntCd","value","dsAisMvmnRgnMst","crynChckpntCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divForm.form.Div02.form.edtCrynShpgotRsnCn","value","dsAisMvmnRgnMst","crynShpgotRsnCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divForm.form.Div03.form.txa00","value","dsAisMvmnRgnMst","cnvyMttrCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divForm.form.Div02.form.rdoCrynShpgotCd","value","dsAisMvmnRgnMst","crynShpgotCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divForm.form.Div03.form.rdoDilgCd","value","dsAisMvmnRgnMst","bilgCd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.addIncludeScript("LIF072M00.xfdl","xjs::TaskCom.xjs");
        this.registerScript("LIF072M00.xfdl", function() {
        /******************************************************************************
        *  PcMdi 프로젝트
        *  @FileName 	LIF072M00.xfdl
        *  @Creator 	김진섭
        *  @CreateDate 	2024/11/22
        *  @Desction    생활>이동지역>차량/장비반출입신청>
        ******************* 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/11/22				김진섭							최초생성
        ********************************************************************************/
        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;  // 업무공통

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.objVrbl = { isWrtSplmntStep : false    // 신청서 작성 및 보완 단계 여부
                       , isWrtStep       : false    // 신청서 작성 단계 여부
                       };

        this.aplyNo 	= "";	// 신청서번호(화면 로드시 신청서 번호가 없으면 신규등록 가능)

        //(ASIS : CAR_CAT_CD (워크플로우>임시저정>수정버튼클릭>데이타업데이트TAB에서 확인))
        this.aplySeCd 	= "TSPAIS004"; // 신청구분코드
        this.jobCd 		= "TAS00221"; // 작업코드(기본값 TAS00221 : 신청서작성)

        this.vStrSvcId  = ""; // 서비스ID
        this.vStrSvcUrl = ""; // 서비스URL

        this.btnDiv = this.divBtn; // 공통버튼영역 Div

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        	this.fnInit();

        };

        /*******************************************************************************************************************************
         * fnInit Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	// 로그인 정보
        	this.gvUserId 	= this.objApp.gdsUser.getColumn(0,"userId");			// 유저id
        	this.gvUserNm 	= this.objApp.gdsUser.getColumn(0,"userNm");			// 유저명
        	this.gvCoId   	= this.objApp.gdsUser.getColumn(0,"coId");				// 소속회사코드
        	this.gvCoNm   	= this.objApp.gdsUser.getColumn(0,"coNm");				// 소속회사명
        	this.gvDeptId   = this.objApp.gdsUser.getColumn(0,"deptId");			// 부서코드
        	this.gvTelNo  	= this.objApp.gdsUser.getColumn(0, "userTelno");		// 전화번호
        	this.gvMblTelNo	= this.objApp.gdsUser.getColumn(0, "userMblTelno");		// 휴대전화번호

        	// 신청구분명 조회
        	this.cfnGetAplySeNm({ id:"getAplySeNm", cbf:"fnCallback", aplySeCd:this.aplySeCd });

        	// 공통코드 함수 호출
        	this.cfnComCdLoad({ id:"comVhclSeSearch", cbf:"fnCallback", dsVhclSe:"AISVERVTY:S" }); // 차량/장비코드
        	this.cfnComCdLoad({ id:"comVhclCdSearch", cbf:"fnCallback", dsVhclCd:"AISVERVTY:S" }); // 차량/장비코드
         	this.cfnComCdLoad({ id:"comAISVIOGUBUNSearch", cbf:"fnCallback", dsCrynShpgotCdList:"AISVIOGUBUN:" }); // [이동지역/차량장비반출입]반입반출구분

        	// 신청서 번호 있는지 체크 없으면 신규등록
        	//this.aplyNo = this.getOwnerFrame().aplyNo;   // 신청번호
        	this.aplyNo 	= "AIS2411_00012";	// 신청서번호(화면 로드시 신청서 번호가 없으면 신규등록 가능)

        	trace("a44_aplyNo==>" + this.aplyNo);
        	if (this.gfnIsNull(this.aplyNo)) {
        	    var nRow = this.dsAisMvmnRgnMst.addRow();
        		//alert("dd11");
        		//신청자정보 영역
        		this.dsAisMvmnRgnMst.setColumn(nRow, "rgtrId"		, this.gvUserId);	// 등록자id
        		this.dsAisMvmnRgnMst.setColumn(nRow, "rgtrNm"		, this.gvUserNm);	// 등록자명
        		this.dsAisMvmnRgnMst.setColumn(nRow, "rgtrInstCd"	, this.gvCoId);		// 등록자기관코드
        		this.dsAisMvmnRgnMst.setColumn(nRow, "rgtrInstNm"	, this.gvCoNm);		// 등록자기관명
        		this.dsAisMvmnRgnMst.setColumn(nRow, "rgtrDeptCd"	, this.gvDeptId);	// 등록자부서코드
        		this.dsAisMvmnRgnMst.setColumn(nRow, "rgtrTelno"	, this.gvTelNo);	// 등록자전화번호
        		//KJS this.dsAisMvmnRgnMst.setColumn(nRow, "rgtrMblTelno"	, this.gvMblTelNo);	// 등록자휴대전화번호
        		this.dsAisMvmnRgnMst.setColumn(nRow, "hwrtInptCtinfoNo"	, this.gvMblTelNo);	// 등록자휴대전화번호
        		this.dsAisMvmnRgnMst.setColumn(nRow, "aplcntId"		, this.gvUserId);	// 신청자id
        		this.dsAisMvmnRgnMst.setColumn(nRow, "aplcntNm"		, this.gvUserNm);	// 신청자명
        		this.dsAisMvmnRgnMst.setColumn(nRow, "aplcntInstCd"	, this.gvCoId);		// 신청자기관코드
        		this.dsAisMvmnRgnMst.setColumn(nRow, "aplcntInstNm"	, this.gvCoNm);		// 신청자기관명
        		this.dsAisMvmnRgnMst.setColumn(nRow, "aplcntDeptCd"	, this.gvDeptId);	// 신청자부서코드
        		this.dsAisMvmnRgnMst.setColumn(nRow, "aplySeCd"		, this.aplySeCd);	// 신청구분코드
        		//alert("dd22");

         		var currdate 	= this.gfn_getDate("date");
         		this.divForm.form.Div02.form.calCrynShpgotYmd.set_value(currdate);//반출입일자 항목
        //
        // 		//이동지역차량장비말소 신청내역 리스트 영역
        // 		this.divForm.form.Div02.form.pan05.set_visible(false);
        //
        // 		this.divForm.form.Div02.form.staCnvyMttr.text = "전달내용";//처리내용 타이틀 항목
        // 		this.divForm.form.Div02.form.pan12.visible = false;//처리내용 그리드 이력 항목
        //
         	    this.divForm.form.Div02.form.rdoMvmnRgnNoExnYn.value = 1;//이동지역번호유무 항목(1:유,0:무)
        // 		this.divForm.form.Div02.form.rdoFcltSe.set_index(0);//시설구분 항목
        // 		this.divForm.form.Div02.form.rdoCustTypeCd.set_index(0);//고객유형 항목
        // 		this.divForm.form.Div02.form.rdoZone.set_index(0);//구역구분 항목
        //

        		// 해당 TASK ID로 버튼 자동 생성 -> 추후에 신청번호가 있는지 없는지 체크해서 task id 박아넣어줘야함. 현재는 신청서 작성으로 했음.
        		this.cfnBtnCrt({ crtTrgt:this.divBtn, cbf:"fnCallback", lnkgEvnt:this.btn_onclick, inqCnd : { jobPrcsPrgrsSeCd:this.jobCd} });

        	} else {

        		trace("ggg===>" + this.aplyNo);
        		// 이동지역차량장비말소 마스터 조회
        		this.fnSearch(this.aplyNo);
        	}

        	trace("정상!!!");
        };

        /**************************************************************************
         * @name : form_onvscroll
         * @description : 화면 수직 스크롤 시
         ***************************************************************************/
        this.form_onvscroll = function(obj,e)
        {
        	// 버튼 크기에 맞춰 수치를 알아내야 한다.
        	var posTop1 = 0;
        	var posTop2 = 0;

        	if(e.pos == 0){
        		posTop1 = 63;
        		posTop2 = 219;

        	}else{
        		posTop1 = 12;
        		posTop2 = 168;
        	}

        	this.divQuick.top = e.pos + posTop1;
        	this.divBtn.top = e.pos + posTop2;
        };

        /**************************************************************************
         * @name : btnQuick_onclick
         * @description : 퀵메뉴 버튼 클릭
         ***************************************************************************/
        this.btnQuick_onclick = function(obj,e)
        {
        	var objNm = obj.name;

        	var objClass = obj.cssclass;

        	// btn_WF_Quick_S, btn_WF_Quick
        	// 컴포넌트 css 초기화
        	Array.from(this.divQuick.form.components).forEach(oComp => {
        		oComp.cssclass = "btn_WF_Quick";
        	});

        	obj.cssclass = "btn_WF_Quick_S";

        	var objDiv = null;
        	var objTit = null;

        	console.log("objNm = " + objNm);

        	if(objNm == "btn01"){//신청자정보
        		objDiv = this.divForm.form.Div01;
        		objTit = this.divForm.form.sub_tit01;

        	}else if(objNm == "btn02"){//신청정보
        		objDiv = this.divForm.form.Div02;
        		objTit = this.divForm.form.sub_tit02;

        	}else if(objNm == "btn03"){//처리결과
        		objDiv = this.divForm.form.Div03;
        		objTit = this.divForm.form.sub_tit03;

        	}

        	// 해당 DIV가 현재 숨겨져 있으면 이동 안함.
        	if(!objDiv.visible){
        		return;
        	}

        	if( this.getCurrentLayoutID() == "default" ) {
        		this.vscrollbar.set_pos(objTit.getOffsetTop() + 12);
        	}else{
        		// 모바일처리
        		// 얘는 픽셀 세팅 해야함 현재 화면 모바일 버전으로 안보임.
        		this.divForm.form.vscrollbar.set_pos(objTit.getOffsetTop() - 50);
        	}

        };

        /**************************************************************************
         * @name : btn_onclick
         * @description : Button Click Event
         ***************************************************************************/
        this.btn_onclick = function(obj,e)
        {
        	// WorkFlow 정보
        	var wfInfo = this.cfnGetWfInfo(obj.name);

        	trace("bb11");
        	var vBtnNm = wfInfo.prcsSeCdNm;
        	var vBtnCd = wfInfo.prcsSeCd; // 눌린 버튼 ID(obj.name과 같은 값임.)

        	/* vBtnCd 정보
        		CTL00775	임시저장
        		CTL00384	신청
        		CTL00833	종료
        		CTL00385	재신청
        		CTL00385	재신청
        		CTL00386	미처리종료
        		CTL00387	접수
        		CTL11094	회수
        		CTL00389	보완요청
        		CTL00389	보완요청
        		CTL00390	승인
        		CTL00388	담당자변경
        		CTL00901	미처리종료
        		CTL00393	설문응답완료
        	*/

        	trace("vBtnCd===>" + vBtnCd);

        	// 임시저장 버튼 // 회수 버튼
        	if(vBtnCd == "CTL00775" || vBtnCd == "CTL11094"){
        		this.vStrSvcId  = "vhclEqpmntCrynShpgotAplyStrg";
        		this.vStrSvcUrl = "vhclEqpmntCrynShpgot/vhclEqpmntCrynShpgotAplyStrg.do";

        	}else if(vBtnCd == "CTL00384" || vBtnCd == "CTL00385" || vBtnCd == "CTL00385"){ // 신청서작성 - 신청, 신청서보완 - 재신청
        		// validation check
        		var res = this.fnValiChk();
        		if(!res){
        			return;

        		}
        		this.vStrSvcId  = "vhclEqpmntCrynShpgotAplyStrg";
        		this.vStrSvcUrl = "vhclEqpmntCrynShpgot/vhclEqpmntCrynShpgotAplyStrg.do";

        	}else if(vBtnCd == "CTL00833" || vBtnCd == "CTL00386" || vBtnCd == "CTL00901"){ // 종료, 신청서보완 - 미처리종료, 담당자검토및승인 - 미처리종료
        		// 신규입력일때 종료 버튼 클릭 시 화면만 닫아줌.
        		if(this.dsAisMvmnRgnMst.getRowType(0) == Dataset.ROWTYPE_INSERT){
        			this.gfnConfirmMsg("endConfirm", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"], "", ["종료"]);

        			return;

        		}else{
        			this.vStrSvcId  = "vhclEqpmntCrynShpgotAplyStrg";
        			this.vStrSvcUrl = "vhclEqpmntCrynShpgot/vhclEqpmntCrynShpgotAplyStrg.do";

        		}

        	}else if(vBtnCd == "CTL00387"){ // 접수버튼 클릭
        		this.vStrSvcId  = "vhclEqpmntCrynShpgotAplyStrg";
        		this.vStrSvcUrl = "vhclEqpmntCrynShpgot/vhclEqpmntCrynShpgotAplyStrg.do";

        	}else if(vBtnCd == "CTL00389" || vBtnCd == "CTL00390"){ // 담당자검토및승인 - 보완요청 || 승인
        		this.vStrSvcId  = "vhclEqpmntCrynShpgotAplyStrg";
        		this.vStrSvcUrl = "vhclEqpmntCrynShpgot/vhclEqpmntCrynShpgotAplyStrg.do";

        		// 보완요청버튼 클릭 - 과금여부 항목 체크
        		if(this.gfnIsNull(this.dsAisMvmnRgnMst.getColumn(0, "bilgCd"))){
        			this.divForm.form.Div03.form.rdoDilgCd.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["과금여부 \n"]);
        			return;

        		}

        	}else if(vBtnCd == "CTL00388"){ // 담당자변경
        		alert("담당자변경 팝업 완료 시 연결 예정!!");
        		return;

        	}

        	// 넘겨줄 데이터 세팅
        	this.dsAisMvmnRgnMst.setColumn(0, "jobCd", wfInfo.nextStepJobPrcsPrgrsSeCd);
        	this.dsAisMvmnRgnMst.setColumn(0, "aplySeCd", this.aplySeCd);

        	if(this.gfnIsNull(this.dsAisMvmnRgnMst.getColumn(0, "docCd"))){
        		this.dsAisMvmnRgnMst.setColumn(0, "docCd", "TSPDOC900"); // 공통코드 TSPDOC900 : 전동차신청

        	}

        	// 시설운영마스터 데이터 세팅
        	if(!this.gfnIsNull(this.aplyNo)){
        		this.dsMst.setColumn(0, "aplyNo", this.aplyNo);

        	}
        	this.dsMst.setColumn(0, "taskCd"    , wfInfo.jobPrcsPrgrsSeCd        );  // 현재업무코드
        	this.dsMst.setColumn(0, "nextTaskCd", wfInfo.nextStepJobPrcsPrgrsSeCd);  // 다음업무코드

        	this.dsMst.setColumn(0, "aplySeCd", this.aplySeCd);  // 신청구분코드

        	if(this.gfnIsNull(this.dsMst.getColumn(0, "docCd"))){
        		this.dsMst.setColumn(0, "docCd", "TSPDOC900"); // 공통코드 TSPDOC900 : 전동차신청

        	}

        	var curDt = this.gfnGetDate("time");
        	if(this.gfnIsNull(this.dsAisMvmnRgnMst.getColumn(0, "aplyDt"))){
        		this.dsAisMvmnRgnMst.setColumn(0, "aplyDt", curDt);

        	}
        	if(this.gfnIsNull(this.dsMst.getColumn(0, "aplyDt"))){
        		this.dsMst.setColumn(0, "aplyDt", curDt);

        	}

        	// 종료, 신청서보완 - 미처리종료, 담당자검토및승인 - 미처리종료, 등록/허가증제작중 - 제작완료
        	if(vBtnCd == "CTL00833" || vBtnCd == "CTL00386" || vBtnCd == "CTL00901" ){
        		// 종료일자 세팅
        		this.dsAisMvmnRgnMst.setColumn(0, "endDt", curDt);
        		this.dsMst.setColumn(0, "endDt", curDt);

        	}

        	// 납부담당자동일여부 - 동일하지 않을때 개인정보동의 항목 null 넣어줌.
        	if(this.dsAisMvmnRgnMst.getColumn(0, "payPicSmYn") == "1"){ // 동일하지않음
        		if(this.dsAisMvmnRgnMst.getColumn(0, "aplyKndCd") == "CARREQTYPE002"){
        			this.dsAisMvmnRgnMst.setColumn(0, "prvcClctEsntlAgreYn", null);
        			this.dsAisMvmnRgnMst.setColumn(0, "prvcClctChcAgreYn", null);

        		}else{
        			this.dsAisMvmnRgnMst.setColumn(0, "prvcClctEsntlAgreYn", null);
        			this.dsAisMvmnRgnMst.setColumn(0, "prvcClctEsntlAgreYn2", null);
        			this.dsAisMvmnRgnMst.setColumn(0, "prvcClctChcAgreYn", null);

        		}

        	}else if(this.dsAisMvmnRgnMst.getColumn(0, "payPicSmYn") == "0"){ // 동일함
        		this.dsAisMvmnRgnMst.setColumn(0, "prvcClctEsntlAgreYn2", null);

        	}

        	if(this.gfnIsNull(this.dsMst.getColumn(0, "aplcntId"))){
        		this.dsMst.setColumn(0, "aplcntId", this.gvUserId);	// 신청자id

        	}
        	if(this.gfnIsNull(this.dsMst.getColumn(0, "aplcntNm"))){
        		this.dsMst.setColumn(0, "aplcntNm", this.gvUserNm);	// 신청자명

        	}
        	if(this.gfnIsNull(this.dsMst.getColumn(0, "aplcntInstCd"))){
        		this.dsMst.setColumn(0, "aplcntInstCd", this.gvCoId);		// 신청자기관코드

        	}
        	if(this.gfnIsNull(this.dsMst.getColumn(0, "aplcntInstNm"))){
        		this.dsMst.setColumn(0, "aplcntInstNm", this.gvCoNm);		// 신청자기관명

        	}
        	if(this.gfnIsNull(this.dsMst.getColumn(0, "aplcntDeptCd"))){
        		this.dsMst.setColumn(0, "aplcntDeptCd", this.gvDeptId);	// 신청자부서코드

        	}

        	if(this.dsMst.getColumn(0, "clmZip") != this.dsAisMvmnRgnMst.getColumn(0, "clmZip")){
        		this.dsMst.setColumn(0, "clmZip", this.dsAisMvmnRgnMst.getColumn(0, "clmZip"));	// 우편번호

        	}
        	if(this.dsMst.getColumn(0, "clmAddr") != this.dsAisMvmnRgnMst.getColumn(0, "clmAddr")){
        		this.dsMst.setColumn(0, "clmAddr", this.dsAisMvmnRgnMst.getColumn(0, "clmZip"));	// 청구주소

        	}
        	if(this.dsMst.getColumn(0, "clmDtlAddr") != this.dsAisMvmnRgnMst.getColumn(0, "clmDtlAddr")){
        		this.dsMst.setColumn(0, "clmDtlAddr", this.dsAisMvmnRgnMst.getColumn(0, "clmDtlAddr"));		// 청구상세주소

        	}

        	// 수정된 내역이 있는지 체크
        	if(!this.gfnDsIsUpdated(this.dsAisMvmnRgnMst) && !this.gfnDsIsUpdated(this.dsAtfl) && !this.gfnDsIsUpdated(this.dsCnvyMttr)){
        		this.gfnAlertMsg("msg", "MSG_004", [""]);//변경된 내용이 없습니다.
        		return;

        	}

        	if(vBtnCd == "CTL00833" || vBtnCd == "CTL00386" || vBtnCd == "CTL00901"){ // 종료, 신청서보완 - 미처리종료, 담당자검토및승인 - 미처리종료
        		trace("sssss==>" + vBtnCd );
        		this.gfnConfirmMsg("endSaveConfirm", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"], "", ["종료"]);

        	}else if(vBtnCd == "CTL00384") { // 신청
        		this.gfnConfirmMsg("aply_confirm", "MSG_025", "msgCallback", ["확인", "취소"], ["Y", "N"]);

        	}else{
        		this.gfnConfirmMsg("save_confirm", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"]);

        	}

        }

        /**************************************************************************
         * @name : msgCallback
         * @description : 얼럿창 콜백 함수
         ***************************************************************************/
        this.msgCallback = function(sPopupId, sRtn) {
        	var oRtn = JSON.parse(sRtn);

        	if(sPopupId == "save_confirm") {
        		if(oRtn.result == "Y") {
                    // 첨부파일 변경시 첨부파일부터 저장
        			if(this.gfnDsIsUpdated(this.dsAtfl)) {  // 첨부파일 변경시
        				// 첨부파일 저장
        				var obj = { "thumnail" : "N"        // 썸네일 생성여부(첨부파일 중 이미지 파일이 있는 경우 "Y" 이면 썸네일 파일 생성)
        						  , "bsnsSeCd" : "TSPCAR"   // 업무구분코드(입주자서비스)
        						  , "prgrmId"  : this.name  // 프로그램ID (화면 ID)
        				};

        				this.RaonkUpload.AddFormData('params', JSON.stringify(obj));
        				this.RaonkUpload.Transfer();
        				return;

        			} else {
        				// 저장
        				this.cfnSave();
        			}
        		}
        	}else if(sPopupId == "endConfirm"){
        		if(oRtn.result == "Y") {
        			// 메뉴 ID
        			var sMenuId = this.objApp.gvFrmLeft.form.dsMenu.getColumn(this.objApp.gvFrmLeft.form.dsMenu.rowposition, this.FRAME_MENUCOLUMNS.menuId);

        			this.gfnCloseMenu(sMenuId);

        		}
        	}else if(sPopupId == "endSaveConfirm"){
        	trace("gggg==>" + oRtn.result);
        		if(oRtn.result == "Y") {
        			// 첨부파일 변경시 첨부파일부터 저장
        			if(this.gfnDsIsUpdated(this.dsAtfl)) {  // 첨부파일 변경시
        				// 첨부파일 저장
        				var obj = { "thumnail" : "N"        // 썸네일 생성여부(첨부파일 중 이미지 파일이 있는 경우 "Y" 이면 썸네일 파일 생성)
        						  , "bsnsSeCd" : "TSPCAR"   // 업무구분코드(입주자서비스)
        						  , "prgrmId"  : this.name  // 프로그램ID (화면 ID)
        				};

        				this.RaonkUpload.AddFormData('params', JSON.stringify(obj));
        				this.RaonkUpload.Transfer();
        				return;

        			} else {
        			trace("gggg2222==>" + oRtn.result);
        				// 저장
        				this.cfnSave();
        			}
        		}
        	}else if(sPopupId == "saveAlert"){
        		this.reload();

        		// this.gfnCloseMenu("MNG_0000000295");
        		// this.fnMovePage('MNG_0000000021', 'MNG_0000000144', 'work::CST/CAD/CST009M01.xfdl');

        	}else if(sPopupId == "imsi_saveAlert"){
        		//this.alert("임시저장 되었습니다.");
        		//this.close();

        		// this.gfnCloseMenu("MNG_0000000295");
        		// this.fnMovePage('MNG_0000000021', 'MNG_0000000144', 'work::CST/CAD/CST009M01.xfdl');

        	}else if(sPopupId == "aply_confirm"){
        		if(oRtn.result == "Y") {

        			// 저장
        			this.cfnSave();
        // 			// 메뉴 ID
        // 			var sMenuId = this.objApp.gvFrmLeft.form.dsMenu.getColumn(this.objApp.gvFrmLeft.form.dsMenu.rowposition, this.FRAME_MENUCOLUMNS.menuId);
        //
        // 			this.gfnCloseMenu(sMenuId);

        		}
        	}
        };

        /**************************************************************************
         * @name : cfnDelAtfl
         * @description : 첨부 파일 삭제
         ***************************************************************************/
        this.cfnDelAtfl = function(colId) {
            // 존재하지 않으면 돌아감
        	if(this.gfnIsNull(colId) || this.gfnIsNull(this.dsFile.getColumn(0, colId + "_orgnlFileNm"))) { return; }

            // RaonkUpload mergeFile 삭제
            var oRaonkUpload = this.RaonkUpload;
        	if(oRaonkUpload.GetListInfo().mergeFile) {
        	    oRaonkUpload.GetListInfo().mergeFile.forEach(function(v, i, o) {
        			if(v.customValue == colId) {
        				oRaonkUpload.SetSelectFile(i, '0');
        				oRaonkUpload.DeleteSelectedFile();
        			}
        		});
        	}

        	// 첨부파일 삭제
        	this.dsAtfl.deleteRow(this.dsAtfl.findRow("colId", colId));

        	// 첨부 파일 표출용 DS 설정
            this.cfnSetAtflExprs("", "", "", colId);
        };

        /**************************************************************************
         * @name : cfnSetAtflExprs
         * @description : 첨부 파일 표출용 DS 설정
         ***************************************************************************/
        this.cfnSetAtflExprs = function(fullName, orgnlFileNm, fileSz, colId) {
        	// 화면에 표출할 파일정보를 그리드에 설정
        	this.dsFile.setColumn(0, colId + "_fullName"   , fullName   );  // 파일풀명
        	this.dsFile.setColumn(0, colId + "_orgnlFileNm", orgnlFileNm);  // 원본파일명
        	this.dsFile.setColumn(0, colId + "_fileSz"     , fileSz     );  // 파일크기
        	this.dsFile.setColumn(0, colId + "_colId"      , this.gfnIsNull(fullName) ? "" : colId);  // 컬럼ID
        };

        /**************************************************************************
         * @name : fnValiChk
         * @description : validation check
         ***************************************************************************/
        this.fnValiChk = function(){

        	// 반입반출여부
        	if(this.gfnIsNull(this.dsAisMvmnRgnMst.getColumn(0, "crynShpgotCd"))){
        		this.divForm.form.Div02.form.rdoCrynShpgotCd.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["반입반출여부 \n"]);
        		return false;

        	}

        	// 차량(장비)구분1
        	if(this.gfnIsNull(this.dsAisMvmnRgnMst.getColumn(0, "vhclEqpmntTypeCd"))){
        		this.divForm.form.Div02.form.cboVhclSe.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["차량(장비)구분1 \n"]);
        		return false;

        	}

        	// 차량(장비)구분2
        	if(this.gfnIsNull(this.dsAisMvmnRgnMst.getColumn(0, "vhclEqpmntSeCd"))){
        		this.divForm.form.Div02.form.cboVhclCd.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["차량(장비)구분 최하단 정보\n"]);
        		return false;

        	}

        	// 차대번호
        	if(this.gfnIsNull(this.dsAisMvmnRgnMst.getColumn(0, "vin"))){
        		this.divForm.form.Div02.form.edtVin.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["차대번호 \n"]);
        		return false;

        	}

        	// 차량총중량
        	if(this.gfnIsNull(this.dsAisMvmnRgnMst.getColumn(0, "vhclTwt"))){
        		this.divForm.form.Div02.form.edtVhclTwt.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["차량총중량 \n"]);
        		return false;

        	}

        	// 최대적재량
        	if(this.gfnIsNull(this.dsAisMvmnRgnMst.getColumn(0, "maxLdcpct"))){
        		this.divForm.form.Div02.form.edtMaxLdcpct.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["최대적재량 \n"]);
        		return false;

        	}

        	// 승차인원
        	if(this.gfnIsNull(this.dsAisMvmnRgnMst.getColumn(0, "rdgNope"))){
        		this.divForm.form.Div02.form.edtRdgNope.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["승차인원 \n"]);
        		return false;

        	}

        	// 반출입일자
        	if(this.gfnIsNull(this.dsAisMvmnRgnMst.getColumn(0, "crynShpgotYmd"))){
        		this.divForm.form.Div02.form.calCrynShpgotYmd.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["반출입일자 \n"]);
        		return false;

        	}

        	// 초소명
        	if(this.gfnIsNull(this.dsAisMvmnRgnMst.getColumn(0, "crynChckpntCd"))){
        		this.divForm.form.Div02.form.chkCrynChckpntCd.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["초소 \n"]);
        		return false;

        	}

        	// 반입(출)사유
        	if(this.gfnIsNull(this.dsAisMvmnRgnMst.getColumn(0, "crynShpgotRsnCn"))){
        		this.divForm.form.Div02.form.edtCrynShpgotRsnCn.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["반입(출)사유 \n"]);
        		return false;

        	}

        	return true;
        }

        /**************************************************************************
         * @name : fnScrnSetting
         * @description : 조회 시 화면 세팅
         ***************************************************************************/
        this.fnScrnSetting = function()
        {

        trace("(현재)this.jobCd===>" + this.jobCd);

        	var sVhclSe = this.dsAisMvmnRgnMst.getColumn(0, "vhclEqpmntTypeCd"); // 차량장비구분코드

        	if(!this.gfnIsNull(sVhclSe)){
        		this.divForm.form.Div02.form.cboVhclCd.visible = true;

        		//this.dsVhclCd.filter("uprCd == '" + sVhclSe + "' || cdId == ''");

        		this.resetScroll();

        	}else{
        		this.divForm.form.Div02.form.cboVhclCd.visible = false;

        		this.dsVhclCd.filter("");

        		this.resetScroll();

        	}

        	// TAS00223 : 담당자접수, TAS00224 : 담당자검토및승인
        	//TODO
        	//서비스목록화면에서 팝업 오픈인지, 처리자 로그인 후 메인화면의 처리목록에 팝업 오픈인지 구분 필요
        	//KJS,20241120
        	if(this.jobCd == "TAS00222" || this.jobCd == "TAS00223"){
         		this.divForm.form.Div03.form.pan02.visible = true; //과금여부 보이기
         		this.divForm.form.Div03.form.pan02.enable = false; //과금여부 입력막기

         		this.resetScroll();//화면에서 스크롤을 길게 보이게 해주는 기능
        	}else{
         		this.resetScroll();//화면에서 스크롤을 길게 보이게 해주는 기능
        	}

        	//TAS00222 : 신청서보완
        	if(this.jobCd == "TAS00222"){
        		this.divForm.form.Div02.form.pan08.visible = true; //보완요청사유
        		this.divForm.form.Div02.form.pan10.visible = true; //전달사항
        		this.divForm.form.Div02.form.pan12.visible = true; //처리내용이력

        		this.resetScroll();//화면에서 스크롤을 길게 보이게 해주는 기능
        	}

        	//TAS00309 : 만족조조사
        	if(this.jobCd == "TAS00309"){
        	    this.divForm.form.Div02.form.pan10.visible = false; //처리내역
        		this.divForm.form.Div02.form.pan12.visible = true; //처리내용이력

        		this.resetScroll();//화면에서 스크롤을 길게 보이게 해주는 기능
        	}
        //alert("bb44");
        	// 담당자접수 (조회 거래) 시 readyOnly 처리
        // 	if(this.jobCd == "TAS00223"){
        // 		this.divForm.form.Div02.form.rdoSrvcDmndCnYn.readonly = true;
        // 		this.divForm.form.Div02.form.txtSplmntDmndRsn.readonly = true;
        // 	}

        	// 신청서 보완 시 보완내역 readyOnly 처리
        	if(this.jobCd == "TAS00222"){
        		this.divForm.form.Div02.form.rdoSrvcDmndCnYn.readonly = true;
        		this.divForm.form.Div02.form.txtSplmntDmndRsn.readonly = true;
        		this.divForm.form.Div02.form.grdSplmnt.readonly = true;
        		this.divForm.form.Div02.form.grdCnvyMttr.readonly = true;

        		this.resetScroll();

        	}

        	trace("(fn_ScrnSetting)this.jobCd ====>" + this.jobCd);

        	// TAS00226 : 종료 일때
        	if(this.jobCd == "TAS00226"){
        		var sBfrJobCd = this.dsAisMvmnRgnMst.getColumn(0, "bfrJobCd");
        		trace("sBfrJobCd_ff==>" + sBfrJobCd);
        		// TAS00221 : 신청서작성, TAS00222 : 신청서보완
        		if(sBfrJobCd == "TAS00221"){


        		}else if(sBfrJobCd == "TAS00222"){
        			// 신청서보완에서 미처리 종료된 경우 보완 내역을 보여준다.
        // 			this.divForm.form.Div02.form.pan07.visible = true;
        // 			this.divForm.form.Div02.form.pan08.visible = true;
        // 			this.divForm.form.Div02.form.pan09.visible = true;
        			// this.divForm.form.Div07.form.pan07.visible = true;
        			//this.divForm.form.Div07.form.pan08.visible = true;

        			this.resetScroll();

        		}
        	}
        trace("bb555==>" + this.jobCd);
        	// this.jobCd 가 TAS00221, TAS00222 일때는 신청서 작성/보완 이라 이외에는 컴포넌트 readOnly 처리해줌.
        // 	if(this.jobCd != "TAS00221" && this.jobCd != "TAS00222"){
        // //alert("bb66611==>" + this.jobCd);
        // 		// 이력 불러오기 버튼 신청성 작성일때만 노출
        // 		if(this.jobCd != "TAS00221"){
        // 			this.divForm.form.Div01.form.btnHstry.visible = false;
        //
        // 		}
        // //alert("bb66622==>" + this.jobCd);
        // 		// 컨포넌트 enable, readonly 처리
        // 		var sDivFrom = this.divForm.form;
        //
        // 		var arrDivComps = [sDivFrom.Div01, sDivFrom.Div02];
        //
        // 		arrDivComps.forEach(oDiv => {
        // 			Array.from(oDiv.form.components).forEach(oComp => {
        // 				fnReadonly.call(this, oComp);
        // 			});
        // 		});
        // alert("bb66633==>" + this.jobCd);
        // 		// 내부함수호출
        // 		function fnReadonly (oComp, bReadonly) {
        // 			if (oComp instanceof nexacro.Div) {
        // 				fnReadonly.call(this, oComp.form);
        // 			} else {
        // 				if (oComp instanceof nexacro.Static) return;
        // 				if (oComp instanceof nexacro.Panel) return;
        // 				if (oComp instanceof nexacro.TextArea){
        // 					// TAS00226 : 종료가 아닐땐 textArea 수정가능하게 해줌.
        // 					if(this.jobCd != "TAS00226"){
        // 						return;
        //
        // 					}
        // 				}
        // 				if (oComp instanceof nexacro.Button) {
        // 					if(oComp.id.indexOf("btnMin") > -1) return;
        // 					try {
        // 						// enable 처리할거
        // 						oComp.enable = bReadonly;
        //
        // 						return;
        // 					} catch(e) {
        // 						trace ("enable속성없음");
        // 					}
        // 				}
        // //alert("bb8888");
        //
        // 				try {
        // 					// 접수단계 || 담당자검토및승인
        // 					if(this.jobCd == "TAS00223" || this.jobCd == "TAS00224"){
        // 						// "rdoSrvcDmndCnYn", "grdSplmnt", "grdCnvyMttr"
        // // 						if(this.gfnDecode(oComp.id, "rdoSrvcDmndCnYn", "1", "grdSplmnt", "1", "grdCnvyMttr", "1", "0") == "1"){
        // // 							return;
        // //
        // // 						}
        //
        // 					}
        //
        // 					// readonly 처리할거
        // 					oComp.readonly = !bReadonly;
        //
        // 				} catch(e) {
        // 					trace ("readonly 속성없음");
        // 				}
        // 			}
        // 		}
        // 	}

        	//TAS00224 : 담당자검토및승인
        	if(this.jobCd == "TAS00224"){
        	trace("fffffffffff===>" + this.jobCd);
        		this.divForm.form.Div03.form.pan02.visible = true;
        	}

        	trace("bb9999_fnScrnSetting okok!!");
        }

        /************************************************************************************************************
         * @name : fnCallback
         * @description : 팝업에 관한 콜백 함수
         ***********************************************************************************************************/
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
            trace("@@fnCallback errorCode==>" + errorCode + " ; " +"svcID==>" + svcID + " ; " + "errorMsg==>" + errorMsg);

        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "vhclEqpmntCrynShpgotInq" : // 이동지역차량장비말소 마스터 조회
        			//alert("마스터 정상조회!!!");
        			if(this.dsAisMvmnRgnMst.getRowCount() > 0){
        				this.jobCd = this.dsAisMvmnRgnMst.getColumn(0, "jobCd");
        			}

        			//@서비스목록 화면에서 팝업조회시 버튼 생성 막음(kjs, 20241119)
        			// 해당 TASK ID로 버튼 자동 생성 -> 추후에 신청번호가 있는지 없는지 체크해서 task id 박아넣어줘야함. 현재는 신청서 작성으로 했음.
        			this.cfnBtnCrt({ crtTrgt:this.divBtn, cbf:"fnCallback", lnkgEvnt:this.btn_onclick, inqCnd : { jobPrcsPrgrsSeCd:this.jobCd} });

        			// 화면 세팅
        			this.fnScrnSetting();

        			//상업용시설 이동지역차량장비말소 신청내역 리스트
        			if(this.dsAisMvmnRgnMst.getColumn(0, "fcltSeCd") == "RENUSE001"){
        				this.divForm.form.Div02.form.pan05.set_visible(false);//업무용시설
        			}else{
        				this.divForm.form.Div02.form.pan05.set_visible(true);//상업용시설
        			}

        			//차이 일수계산
        			var v_calBgngYmd = this.divForm.form.Div02.form.divCal.form.calBgngYmd.value;
        			var v_calEndYmd  = this.divForm.form.Div02.form.divCal.form.calEndYmd.value;
        			this.divForm.form.Div02.form.edtDiffDate.set_value(this.gfn_getDiffDate(v_calBgngYmd, v_calEndYmd));

        			//신청번호
        			this.divForm.form.Div01.form.pan01_AplyNo.visible = true;

        			alert("조회가 완료되었습니다");

        			break;

        		case "getAplySeNm" : // 신청구분명 조회
        			// 신청구분명 set
        			var v_AplySeNm = this.cfnGvbkAplySeNm();
        			trace("this.cfnGvbkAplySeNm()_v_AplySeNm==>" + v_AplySeNm);
        			this.divForm.form.Div01.form.edtAplySeNm.value = v_AplySeNm;

        			break;

        		case "comAplyKndCdSearch" : // 신청종류코드 조회
        			this.dsAplyKndCdList.filter("cdId == 'FACREQTYPE001' || cdId == 'FACREQTYPE002'");
        			this.divForm.form.Div02.form.rdoAplyKndCd.set_index(0);

        			break;

        		case "comAISVIOGUBUNSearch" : // [이동지역/차량장비반출입]반입반출구분

        			this.divForm.form.Div02.form.rdoCrynShpgotCd.set_index(0);

        			break;

        		case "comVhclSeSearch" : // 차량/장비1 조회
        			// 차량/장비 제한값 'AISVERVTY01', 'AISVERVTY02', 'AISVERVTY03' ,'AISVERVTY04'
        			this.dsVhclSe.filter("cdId == '' || cdId == 'AISVERVTY01' || cdId == 'AISVERVTY02' || cdId == 'AISVERVTY03' || cdId == 'AISVERVTY04'");

        			// this.divForm.form.Div02.form.cboVhclSe.index = 0;

        			break;

        		case "comVhclCdSearch" : // 차량/장비2 조회
        			// this.divForm.form.Div02.form.cboVhclCd.index = 0;

        			break;

        		case "comBldgSeSearch" : // 건물구분 조회
        			// 건물구분 제한값 'TSPLOCTSC010', 'TSPLOCTSC070', 'TSPLOCTSC020' ,'TSPLOCTSC030' ,'TSPLOCTSC090'
        			this.dsBldgSeList.filter("cdId == 'TSPLOCTSC010' || cdId == 'TSPLOCTSC020' || cdId == 'TSPLOCTSC070'");

        			// 전체 조회를 위해 [선택] 추가
        			this.dsBldgSeList.insertRow(0);
        			this.dsBldgSeList.setColumn(0, "cdId", "");
        			this.dsBldgSeList.setColumn(0, "cdNm", "[건물구분]");

        			this.divForm.form.Div02.form.cboBldgSe.set_index(0);

        			break;

        		case "comAplyKndSearch" : // 신청구분 조회
        			this.divForm.form.Div03.form.cboSrvcAplySe.set_index(0);

        			break;

        		case "_cfnBtnCrt_" : // 버튼 생성 callback
        			// 접수 || 담당자검토및승인
        			if(this.jobCd == "TAS00223" || this.jobCd == "TAS00224"){
        				this.rdoSrvcDmndCnYn_onitemchanged(this.divForm.form.Div02.form.rdoSrvcDmndCnYn);

        			}else if(this.jobCd == "TAS00222"){ // 신청서보완
        				var sClrId = this.dsAisMvmnRgnMst.getColumn(0, "clrId");
        				console.log("sClrId = " + sClrId);
        				if(this.gfnIsNull(sClrId)){ // 접수자ID가 없을때 담당자접수 에서 넘어온 자료
        					Array.from(this.btnDiv.form.components).forEach(oComp => {
        						if(oComp.id == "CTL00385"){
        							oComp.visible = true;

        						}else if(oComp.id == "CTL00385"){
        							oComp.visible = true;
        							console.log("CTL00385");

        						}
        					});

        				}else{
        					Array.from(this.btnDiv.form.components).forEach(oComp => {
        						if(oComp.id == "CTL00385"){
        							oComp.visible = true;
        							console.log("CTL00385");

        						}else if(oComp.id == "CTL00385"){
        							oComp.visible = false;

        						}
        					});
        				}
        			}

        			break;

        		case "vhclEqpmntCrynShpgotAplyStrg" : // 임시저장, 신청

        			alert("저장 처리가 정상적으로 완료되었습니다");
        		    this.close();
        			//this.gfnAlertMsg("저장", this.objApp.getVariable("gvRetMsg"));
        			//this.gfnAlertMsg("imsi_saveAlert", "저장", this.objApp.getVariable("gvRetMsg"), "msgCallback");

        // 			var param = {
        // 				"coId" : coId
        // 			};
        // 			var sMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        // 			var sMenuUrl = 'work::SVC/fac/LIF046M00.xfdl';
        // 			var actNm = '추가/상세';
        //
        // 			this.gfnPageOpen(sMenuId, sMenuUrl, actNm, param);

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
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function(paramAplyNo)
        {
        	this.fnSearch(paramAplyNo);
        };

        /*=================================================================================*
         * @name : fnSearch
         * @description : 조회
         *=================================================================================*/
        this.fnSearch = function(paramAplyNo)
        {

        	trace("dddd==>" + paramAplyNo);
        	if(this.dsSearch.getRowCount() > 0){
        		this.dsSearch.clearData();

        	}

        	this.dsSearch.addRow();
        	this.dsSearch.setColumn(0, "aplyNo", paramAplyNo);

        	var strSvcId    = "vhclEqpmntCrynShpgotInq";
        	var strSvcUrl   = "vhclEqpmntCrynShpgot/vhclEqpmntCrynShpgotInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsAisMvmnRgnMst=dsAisMvmnRgnMst dsCnvyMttr=dsCnvyMttr dsAtfl=dsAtfl dsMst=dsMst";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /*=============================================================================*
         * @name : cfnSave
         * @description : 저장
         *=============================================================================*/
        this.cfnSave = function ()
        {
        	this.fn_Save(this.vStrSvcId, this.vStrSvcUrl);
        };

        this.fn_Save = function(vStrSvcId, vStrSvcUrl)
        {
        	//업무구분
        	//kjs this.dsAisMvmnRgnMst.setColumn(0, "jobCd", "FAC");

        	var strSvcId    = vStrSvcId;
        	var strSvcUrl   = vStrSvcUrl;
        	var inData      = "";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;
        trace("ddd11");
        	inData    = "dsWfInfo=" + this.FV_DS_OTPT_WORK_FLOW_INFO + ":U"  // WorkFlow 정보
        			          + " dsMst=dsMst:U"                                     // Master DS
         			          + " dsAisMvmnRgnMst=dsAisMvmnRgnMst:U"     		 // 업무마스타 DS
        			          + " dsCnvyMttr=dsCnvyMttr"                           // 전달사항 DS
        			          + " dsAtfl=dsAtfl:U";                                   // 첨부파일 DS

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        /*========================================================================================================*/
        /*  설치요청기간 시작일자 항목 변경
        /*=========================================================================================================*/
        this.divForm_Div02_divCal_calBgngYmd_onchanged = function(obj,e)
        {
        	var v_calBgngYmd = this.divForm.form.Div02.form.divCal.form.calBgngYmd.value;
        	var v_calEndYmd = this.divForm.form.Div02.form.divCal.form.calEndYmd.value;

        	//차이 일수계산
        	this.divForm.form.Div02.form.edtDiffDate.set_value(this.gfn_getDiffDate(v_calBgngYmd, v_calEndYmd));
        };

        /*=========================================================================================================*/
        /*  설치요청기간 종료일자 항목 변경
        /*=========================================================================================================*/
        this.divForm_Div02_divCal_calEndYmd_onchanged = function(obj,e)
        {
        	var v_calBgngYmd = this.divForm.form.Div02.form.divCal.form.calBgngYmd.value;
        	var v_calEndYmd = this.divForm.form.Div02.form.divCal.form.calEndYmd.value;

        	//차이 일수계산
        	this.divForm.form.Div02.form.edtDiffDate.set_value(this.gfn_getDiffDate(v_calBgngYmd, v_calEndYmd));
        };

        /*============================================================================================================================*/
        /*  시설구분 항목 변경
        /*============================================================================================================================*/
        this.divForm_Div02_rdoFcltSe_onitemchanged = function(obj,e)
        {
        	//상업용시설 이동지역차량장비말소 신청내역 리스트
        	if(this.divForm.form.Div02.form.rdoFcltSe.value == "RENUSE001"){
        		this.divForm.form.Div02.form.pan05.set_visible(false);//업무용시설
        	}else{
        		this.divForm.form.Div02.form.pan05.set_visible(true);//상업용시설
        	}
        };


        this.divForm_Div02_cboSrvcAplySe_onitemchanged = function(obj,e)
        {
            trace("dddd==>" + obj.value);
        	if(obj.value == "FACSVCTYPE008"){//기타선택
        		this.divForm.form.Div02.form.Panel_dtlArtlc.visible = true;
        	}else{
        		this.divForm.form.Div02.form.Panel_dtlArtlc.visible = false;
        	}
        };


        this.cfnClose = function(){

        	trace("cfnClose call");
        }

        /**************************************************************************
         * @name : rdoSrvcDmndCnYn_onitemchanged
         * @description : 서비스요청내용 수정 완료 시
         ***************************************************************************/
        this.rdoSrvcDmndCnYn_onitemchanged = function(obj,e)
        {
        	var objVal = obj.value;

        	if(this.jobCd == "TAS00223"){ // 담당자접수
        	//alert("objVal11==>" + objVal);
        		if(objVal == "1"){ // 1 : 확인
        			/*
        			CTL00387	접수
        			CTL00389	보완요청
        			CTL11020	미처리종료
        			*/
        			Array.from(this.btnDiv.form.components).forEach(oComp => {
        				if(oComp.id == "CTL00387"){
        					oComp.visible = true;

        				}else{
        					oComp.visible = false;

        				}
        			});

        		}else if(objVal == "2"){ // 2 : 미처리종료
        			/*
        			CTL00387	접수
        			CTL00389	보완요청
        			CTL11020	미처리종료
        			*/
        			Array.from(this.btnDiv.form.components).forEach(oComp => {
        			//trace("oComp.id_1111==>" + oComp.id);
        				if(oComp.id == "CTL11020"){
        					oComp.visible = true;

        				}else{
        					oComp.visible = false;

        				}
        			});

        		}else{
        			Array.from(this.btnDiv.form.components).forEach(oComp => {
        				if(oComp.id == "CTL00389"){
        					oComp.visible = true;

        				}else{
        					oComp.visible = false;

        				}
        			});
        		}

        	}else if(this.jobCd == "TAS00224"){ // 담당자검토및승인
        	trace("objVal==>" + objVal);
        		if(objVal == "1"){ // 1 : 확인
        			/*
        			CTL00389	보완요청
        			CTL00390	승인
        			*/
        			Array.from(this.btnDiv.form.components).forEach(oComp => {
        				if(oComp.id == "CTL00390"){
        					oComp.visible = true;

        				}else if(oComp.id == "CTL00389"){
        					oComp.visible = false;

        				}
        			});

        		}else if(objVal == "2"){ // 2 : 미처리종료
        			/*
        			CTL00389	보완요청
        			CTL00390	승인
        			*/
        			Array.from(this.btnDiv.form.components).forEach(oComp => {
        			//trace("oComp.id_1111==>" + oComp.id);
        				if(oComp.id == "CTL11020"){
        					oComp.visible = true;

        				}else{
        					oComp.visible = false;

        				}
        			});

        		}else{
        			Array.from(this.btnDiv.form.components).forEach(oComp => {
        				if(oComp.id == "CTL00389"){
        					oComp.visible = true;

        				}else{
        					oComp.visible = false;

        				}
        			});
        		}
        	}

        	// 1 : 확인 일때 보완요청사유를 지워준다.
        	if(objVal == "1"){
        		// this.dsList.setColumn(0, "splmntDmndRsnCn", "");

        	}
        };


        this.divForm_Div02_cboVhclSe_onitemchanged = function(obj,e)
        {
        	var objVal = obj.value;

        	if(this.gfnIsNull(objVal)){
        		this.divForm.form.Div02.form.cboVhclCd.visible = false;

        	}else{
        		this.divForm.form.Div02.form.cboVhclCd.visible = true;

        		this.dsVhclCd.filter("uprCd == '" + objVal + "' || cdId == ''");

        	}
        	this.divForm.form.Div02.form.cboVhclCd.index = 0;

        	// 버튼 처리
        	this.fnSetAplyBtn("1", objVal);

        	this.resetScroll();
        };

        /**************************************************************************
         * @name : fnSetAplyBtn
         * @description : 콤보별 신청버튼 분기 처리(sType : 1 = 차량/장비구분코드, 2 = 연료종류코드)
         ***************************************************************************/
        this.fnSetAplyBtn = function(sType, sVal){
        	// 신청버튼 : CTL00151, CTL11073
        	var sVal2 = "";

        	if(sType == "1"){ // 차량장비구분코드
        		// var sCarTypeCd = "";// 차량유형코드가져오면됨.
        		if(sVal == "AISVERVTY03"){ // 특장/특수차
        			sVal2 = this.divForm.form.Div02.form.cboFuelKnd.value; // 연료종류코드
        			if(sVal2 == "AISVERFUE003"){ // 전기
        				// 전기차 관련 양식 표출, 전력 운영팀 전송 버튼 표출
        				// 공용충전기여부 라디오 노출 시킴
        				//KJS this.divForm.form.Div02.form.Pan06.visible = true;

        				// CTL11073 버튼 보여줌
        				// CTL00151 버튼 숨김
        				Array.from(this.btnDiv.form.components).forEach(oComp => {
        					if(oComp.id == "CTL11073"){
        						oComp.visible = true;

        					}else if(oComp.id == "CTL00151"){
        						oComp.visible = false;

        					}
        				});

        			}else{
        				// 전기차 관련 약식 숨김 및 운항안전팀 전송 버튼 표출
        				// 공용충전기여부 라디오 숨김
        				//KJS this.divForm.form.Div02.form.Pan06.visible = false;

        				// CTL11073 버튼 숨김
        				// CTL00151 버튼 보여줌
        				Array.from(this.btnDiv.form.components).forEach(oComp => {
        					if(oComp.id == "CTL11073"){
        						oComp.visible = false;

        					}else if(oComp.id == "CTL00151"){
        						oComp.visible = true;

        					}
        				});

        			}
        		}else{
        			// 전기차 관련 약식 숨김 및 운항안전팀 전송 버튼 표출
        			// 공용충전기여부 라디오 숨김
        			//KJS this.divForm.form.Div02.form.Pan06.visible = false;

        			// CTL11073 버튼 숨김
        			// CTL00151 버튼 보여줌
        			Array.from(this.btnDiv.form.components).forEach(oComp => {
        				if(oComp.id == "CTL11073"){
        					oComp.visible = false;

        				}else if(oComp.id == "CTL00151"){
        					oComp.visible = true;

        				}
        			});
        		}

        	}else if(sType == "2"){ // 연료종류코드
        		if(sVal == "AISVERFUE003"){ // 전기
        			sVal2 = this.divForm.form.Div02.form.cboVhclSe.value; // 차량장비유형코드
        			if(sVal2 == "AISVERVTY03"){ // 특장/특수차
        				// 전기차 관련 양식 표출, 전력 운영팀 전송 버튼 표출
        				// 공용충전기여부 라디오 노출 시킴
        				//KJS this.divForm.form.Div02.form.Pan06.visible = true;

        				// CTL11073 버튼 보여줌
        				// CTL00151 버튼 숨김
        				Array.from(this.btnDiv.form.components).forEach(oComp => {
        					if(oComp.id == "CTL11073"){
        						oComp.visible = true;

        					}else if(oComp.id == "CTL00151"){
        						oComp.visible = false;

        					}
        				});

        			}else{
        				// 전기차 관련 약식 숨김 및 운항안전팀 전송 버튼 표출
        				// 공용충전기여부 라디오 숨김
        				//KJS this.divForm.form.Div02.form.Pan06.visible = false;

        				// CTL11073 버튼 숨김
        				// CTL00151 버튼 보여줌
        				Array.from(this.btnDiv.form.components).forEach(oComp => {
        					if(oComp.id == "CTL11073"){
        						oComp.visible = false;

        					}else if(oComp.id == "CTL00151"){
        						oComp.visible = true;

        					}
        				});

        			}

        		}else{
        			// 전기차 관련 약식 숨김 및 운항안전팀 전송 버튼 표출
        			// 공용충전기여부 라디오 숨김
        			//KJS this.divForm.form.Div02.form.Pan06.visible = false;

        			// CTL11073 버튼 숨김
        			// CTL00151 버튼 보여줌
        			Array.from(this.btnDiv.form.components).forEach(oComp => {
        				if(oComp.id == "CTL11073"){
        					oComp.visible = false;

        				}else if(oComp.id == "CTL00151"){
        					oComp.visible = true;

        				}
        			});
        		}
        	}
         }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onvscroll",this.form_onvscroll,this);
            this.divForm.form.divInfoGuide.form.btnSchClose.addEventHandler("onclick",this.divInfoGuide_btnSchClose_onclick,this);
            this.divForm.form.Div02.form.cboVhclSe.addEventHandler("onitemchanged",this.divForm_Div02_cboVhclSe_onitemchanged,this);
            this.divForm.form.Div02.form.btn_file_1.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.Div02.form.btn_del_file_1.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div02.form.Grid00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div02.form.Grid00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsMain_onvaluechanged,this);
            this.dsMst.addEventHandler("onvaluechanged",this.dsMst_onvaluechanged,this);
            this.dsMst.addEventHandler("onload",this.dsMst_onload,this);
            this.dsAtfl.addEventHandler("onload",this.dsAtfl_onload,this);
            this.dsAisMvmnRgnMst.addEventHandler("onvaluechanged",this.dsMain_onvaluechanged,this);
        };
        this.loadIncludeScript("LIF072M00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
