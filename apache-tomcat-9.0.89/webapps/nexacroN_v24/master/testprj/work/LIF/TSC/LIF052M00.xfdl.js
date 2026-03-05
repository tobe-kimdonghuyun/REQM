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
            this.set_titletext("인계인수신청서작성");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCstFcltOperMst", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"taskCd\" type=\"STRING\" size=\"256\"/><Column id=\"pstnSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyDt\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"endCd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstnInfoRnb\" type=\"STRING\" size=\"256\"/><Column id=\"clmAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmDtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmZip\" type=\"STRING\" size=\"256\"/><Column id=\"clmCustCd\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"pbcprtPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"pbcprtPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"rcptDt\" type=\"STRING\" size=\"256\"/><Column id=\"clrId\" type=\"STRING\" size=\"256\"/><Column id=\"dptyRegYn\" type=\"STRING\" size=\"256\"/><Column id=\"dmndDt\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptAplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptCtrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptPstnInfoCn\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtHwrtInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntHwrtInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"pbcprtMvmnRgnPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"docCd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtChcYn\" type=\"STRING\" size=\"256\"/><Column id=\"wholJobBgngDt\" type=\"STRING\" size=\"256\"/><Column id=\"wholJobEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobNm\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobRsnCn\" type=\"STRING\" size=\"256\"/><Column id=\"bldgSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoCtrtrNm\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoPicCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobFldCd\" type=\"STRING\" size=\"256\"/><Column id=\"arptCstrnPicId\" type=\"STRING\" size=\"256\"/><Column id=\"lbsvcPbcprtPicId\" type=\"STRING\" size=\"256\"/><Column id=\"basctAplcfmInfoId\" type=\"STRING\" size=\"256\"/><Column id=\"lbsvcTaskAgtRlvtYn\" type=\"STRING\" size=\"256\"/><Column id=\"lbsvcTaskMdtrId\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptRnb\" type=\"STRING\" size=\"256\"/><Column id=\"aplcfmRtrvlDmndYn\" type=\"STRING\" size=\"256\"/><Column id=\"aplcfmRtrvlDt\" type=\"STRING\" size=\"256\"/><Column id=\"aplcfmRtrvlCn\" type=\"STRING\" size=\"256\"/><Column id=\"aplcfmRtrvlRqstrId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcfmRtrvlAprvYn\" type=\"STRING\" size=\"256\"/><Column id=\"aplcfmRtrvlAprvDt\" type=\"STRING\" size=\"256\"/><Column id=\"aplcfmRtrvlAprvCn\" type=\"STRING\" size=\"256\"/><Column id=\"aplcfmRtrvlAutzrId\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclFstVl\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclSecdVl\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclThrVl\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclFstCn\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclSecdCn\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclThrCn\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnRspnsYn\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"coNm\" type=\"STRING\" size=\"256\"/><Column id=\"cmnctSttsCn\" type=\"STRING\" size=\"256\"/><Column id=\"fcltNm\" type=\"STRING\" size=\"256\"/><Column id=\"rmrkCn\" type=\"STRING\" size=\"256\"/><Column id=\"elctySttsCn\" type=\"STRING\" size=\"256\"/><Column id=\"fiftSttsCn\" type=\"STRING\" size=\"256\"/><Column id=\"scrtySttsCn\" type=\"STRING\" size=\"256\"/><Column id=\"flofSttsCn\" type=\"STRING\" size=\"256\"/><Column id=\"mchnSttsCn\" type=\"STRING\" size=\"256\"/><Column id=\"etrntNm\" type=\"STRING\" size=\"256\"/><Column id=\"etrntMntnMtnctmNm\" type=\"STRING\" size=\"256\"/><Column id=\"cilinSttsCn\" type=\"STRING\" size=\"256\"/><Column id=\"acptrJbpsNm\" type=\"STRING\" size=\"256\"/><Column id=\"acptrNm\" type=\"STRING\" size=\"256\"/><Column id=\"acptrOgdpNm\" type=\"STRING\" size=\"256\"/><Column id=\"hvprsnJbpsNm\" type=\"STRING\" size=\"256\"/><Column id=\"hvprsnNm\" type=\"STRING\" size=\"256\"/><Column id=\"hvprsnOgdpNm\" type=\"STRING\" size=\"256\"/><Column id=\"wlstrtSttsCn\" type=\"STRING\" size=\"256\"/><Column id=\"wtspSttsCn\" type=\"STRING\" size=\"256\"/><Column id=\"cnvyMttrCn\" type=\"STRING\" size=\"256\"/><Column id=\"acptnHnovDt\" type=\"STRING\" size=\"256\"/><Column id=\"grndsPhotoPath\" type=\"STRING\" size=\"256\"/><Column id=\"archDdlnEtcSttsCn\" type=\"STRING\" size=\"256\"/><Column id=\"faltFcltEtcSttsCn\" type=\"STRING\" size=\"256\"/><Column id=\"cycl1BfhdMetgAtflPath\" type=\"STRING\" size=\"256\"/><Column id=\"cycl2BfhdMetgAtflPath\" type=\"STRING\" size=\"256\"/><Column id=\"cycl3BfhdMetgAtflPath\" type=\"STRING\" size=\"256\"/><Column id=\"cycl1BfhdMetgYmd\" type=\"STRING\" size=\"256\"/><Column id=\"cycl2BfhdMetgYmd\" type=\"STRING\" size=\"256\"/><Column id=\"cycl3BfhdMetgYmd\" type=\"STRING\" size=\"256\"/><Column id=\"cycl1BfhdMetgCn\" type=\"STRING\" size=\"256\"/><Column id=\"cycl2BfhdMetgCn\" type=\"STRING\" size=\"256\"/><Column id=\"cycl3BfhdMetgCn\" type=\"STRING\" size=\"256\"/><Column id=\"bscFcltyCheckListPath\" type=\"STRING\" size=\"256\"/><Column id=\"coLogoOfcbzSngeUtlzPath\" type=\"STRING\" size=\"256\"/><Column id=\"rbprsnFcltMngRbprsnYn\" type=\"STRING\" size=\"256\"/><Column id=\"rbprsnFcltMngRbprsnNm\" type=\"STRING\" size=\"256\"/><Column id=\"rbprsnFcltMngRbprsnMblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"rbprsnFcltMngRbprsnPrvcClctUtztnWtcsPath\" type=\"STRING\" size=\"256\"/><Column id=\"prvcClctEsntlAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/><Column id=\"bscInfoRegNo\" type=\"STRING\" size=\"256\"/><Column id=\"rtpyrClmInfoRegNo\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsEmlList", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsCnvyMttr", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/><Column id=\"cnvyMttrCn\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"dtlProcsEtcCn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset04", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBgncstAprvRvw", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"chc\" type=\"INT\" size=\"1\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"souId\" type=\"STRING\" size=\"256\"/><Column id=\"dtlProcsEtcCn\" type=\"STRING\" size=\"256\"/><Column id=\"souProcsId\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobNm\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnKndCd\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnKndNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstnInfoRnb\" type=\"STRING\" size=\"256\"/><Column id=\"seCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"dmndDt\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrTelno\" type=\"STRING\" size=\"256\"/><Column id=\"prcrInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"crtDt\" type=\"STRING\" size=\"256\"/><Column id=\"aprvYn\" type=\"STRING\" size=\"256\"/><Column id=\"acptnHnovAprvCd\" type=\"STRING\" size=\"256\"/><Column id=\"acptnHnovAprvNm\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"bfhdMetgStepNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcsRsltCn\" type=\"STRING\" size=\"256\"/><Column id=\"tmprCd\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"isFileAtch\" type=\"INT\" size=\"256\"/><Column id=\"isEdtrPsblty\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCmcnInspRvw", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"chc\" type=\"INT\" size=\"1\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"souId\" type=\"STRING\" size=\"256\"/><Column id=\"dtlProcsEtcCn\" type=\"STRING\" size=\"256\"/><Column id=\"souProcsId\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobNm\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnKndCd\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnKndNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstnInfoRnb\" type=\"STRING\" size=\"256\"/><Column id=\"seCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"dmndDt\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrTelno\" type=\"STRING\" size=\"256\"/><Column id=\"prcrInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"crtDt\" type=\"STRING\" size=\"256\"/><Column id=\"aprvYn\" type=\"STRING\" size=\"256\"/><Column id=\"acptnHnovAprvCd\" type=\"STRING\" size=\"256\"/><Column id=\"acptnHnovAprvNm\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"bfhdMetgStepNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcsRsltCn\" type=\"STRING\" size=\"256\"/><Column id=\"tmprCd\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"isFileAtch\" type=\"INT\" size=\"256\"/><Column id=\"isEdtrPsblty\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtchRslt", this);
            obj._setContents("<ColumnInfo><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRvwAtfl", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bsnsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtn\" type=\"STRING\" size=\"256\"/><Column id=\"strgFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTerm\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJobGroupCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"jobGroupId\" type=\"STRING\" size=\"256\"/><Column id=\"jobGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"upJobGroupId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrTelno\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"jobGroupId\">WOGCOPM130</Col><Col id=\"jobGroupNm\">터미널건축팀</Col><Col id=\"prcrTelno\">000-1234-0130</Col></Row><Row><Col id=\"jobGroupId\">WOGCOPM140</Col><Col id=\"jobGroupNm\">건축지원팀</Col><Col id=\"prcrTelno\">000-1234-0140</Col></Row><Row><Col id=\"jobGroupId\">WOGCOPM150</Col><Col id=\"jobGroupNm\">T1 기계그룹</Col><Col id=\"prcrTelno\">000-1234-0150</Col></Row><Row><Col id=\"jobGroupId\">WOGCOPM160</Col><Col id=\"jobGroupNm\">T2 기계그룹</Col><Col id=\"prcrTelno\">000-1234-0160</Col></Row><Row><Col id=\"jobGroupId\">WOGCOPM170</Col><Col id=\"jobGroupNm\">플랜트시설팀</Col><Col id=\"prcrTelno\">000-1234-0170</Col></Row><Row><Col id=\"jobGroupId\">WOGCOPM180</Col><Col id=\"jobGroupNm\">T1 전기그룹</Col><Col id=\"prcrTelno\">000-1234-0180</Col></Row><Row><Col id=\"jobGroupId\">WOGCOPM190</Col><Col id=\"jobGroupNm\">T2 전기그룹</Col><Col id=\"prcrTelno\">000-1234-0190</Col></Row><Row><Col id=\"jobGroupId\">WOGCOPM200</Col><Col id=\"jobGroupNm\">부대건물그룹</Col><Col id=\"prcrTelno\">000-1234-0200</Col></Row><Row><Col id=\"jobGroupId\">WOGCOPM210</Col><Col id=\"jobGroupNm\">통신그룹</Col><Col id=\"prcrTelno\">000-1234-0210</Col></Row><Row><Col id=\"jobGroupId\">WOGCOPM220</Col><Col id=\"jobGroupNm\">T1 소방그룹</Col><Col id=\"prcrTelno\">000-1234-0220</Col></Row><Row><Col id=\"jobGroupId\">WOGCOPM230</Col><Col id=\"jobGroupNm\">T2 소방그룹</Col><Col id=\"prcrTelno\">000-1234-0230</Col></Row><Row><Col id=\"jobGroupId\">WOGCOPM240</Col><Col id=\"jobGroupNm\">부대건물그룹</Col><Col id=\"prcrTelno\">000-1234-0240</Col></Row><Row><Col id=\"jobGroupId\">WOGSECWS0010</Col><Col id=\"jobGroupNm\">보안그룹</Col><Col id=\"prcrTelno\">000-1234-0010</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtrb", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><ConstColumn id=\"AplcfmWrtRcpt\" type=\"STRING\" size=\"500\" value=\"{&quot;description&quot;:&quot;신청서작성보완접수&quot;, &quot;editable&quot;:&quot;TAS00233:신청서작성,TAS10431:신청서보완&quot;, &quot;readonly&quot;:&quot;TAS00235:담당자접수&quot;}\"/><ConstColumn id=\"CmcnInspDmnd\" type=\"STRING\" size=\"30\" value=\"{&quot;description&quot;:&quot;준공검사요청&quot;, &quot;editable&quot;:&quot;TAS10404:준공검사요청,TAS00340:준공검사&quot;, &quot;readonly&quot;:&quot;TAS10414:관련부서처리,TAS10430:신청자조치사항보완,TAS10453:조건부완료,TAS00489:도면및서류최종검토,TAS00333:만족도조사,TAS00245:종료&quot;}\"/><ConstColumn id=\"BfhdMetgDsctn\" type=\"STRING\" size=\"30\" value=\"{&quot;description&quot;:&quot;사전미팅내역&quot;, &quot;editable&quot;:&quot;TAS00336:착공승인검토,TAS00340:준공검사,TAS10453:조건부완료,TAS00489:도면및서류최종검토&quot;, &quot;readonly&quot;:&quot;TAS10415:관련부서처리,TAS10404:준공검사요청,TAS10414:관련부서처리,TAS10430:신청자조치사항보완,TAS00333:만족도조사,TAS00245:종료&quot;}\"/><ConstColumn id=\"PrcsDsctnTtl\" type=\"STRING\" size=\"30\" value=\"{&quot;description&quot;:&quot;처리내역제목&quot;, &quot;editable&quot;:&quot;TAS00336:착공승인검토&quot;, &quot;readonly&quot;:&quot;TAS10415:관련부서처리,TAS10404:준공검사요청,TAS00340:준공검사,TAS10414:관련부서처리,TAS10430:신청자조치사항보완,TAS10453:조건부완료,TAS00489:도면및서류최종검토,TAS00333:만족도조사,TAS00245:종료&quot;}\"/><ConstColumn id=\"CmcnInspDsctn\" type=\"STRING\" size=\"30\" value=\"{&quot;description&quot;:&quot;준공검사내역&quot;, &quot;editable&quot;:&quot;TAS00336:착공승인검토&quot;, &quot;readonly&quot;:&quot;TAS10415:관련부서처리,TAS10404:준공검사요청,TAS00340:준공검사,TAS10414:관련부서처리,TAS10430:신청자조치사항보완,TAS10453:조건부완료,TAS00489:도면및서류최종검토,TAS00333:만족도조사,TAS00245:종료&quot;}\"/><ConstColumn id=\"CmcnInspYmd\" type=\"STRING\" size=\"30\" value=\"{&quot;description&quot;:&quot;준공검사날짜&quot;, &quot;editable&quot;:&quot;TAS00340:준공검사,TAS10453:조건부완료,TAS00489:도면및서류최종검토&quot;, &quot;readonly&quot;:&quot;TAS00336:착공승인검토,TAS10415:관련부서처리,TAS10404:준공검사요청,TAS10414:관련부서처리,TAS10430:신청자조치사항보완,TAS00333:만족도조사,TAS00245:종료&quot;}\"/><ConstColumn id=\"CmcnInspRslt\" type=\"STRING\" size=\"30\" value=\"{&quot;description&quot;:&quot;준공검사결과,내역&quot;, &quot;editable&quot;:&quot;TAS00340:준공검사,TAS10453:조건부완료,TAS00489:도면및서류최종검토&quot;, &quot;readonly&quot;:&quot;TAS10404:준공검사요청,TAS10414:관련부서처리,TAS10430:신청자조치사항보완,TAS00333:만족도조사,TAS00245:종료&quot;}\"/><ConstColumn id=\"DocOtpt1\" type=\"STRING\" size=\"30\" value=\"{&quot;description&quot;:&quot;문서출력(승인신청서)&quot;, &quot;editable&quot;:&quot;&quot;, &quot;readonly&quot;:&quot;TAS00336:착공승인검토,TAS10415:관련부서처리,TAS10404:준공검사요청,TAS00340:준공검사,TAS10414:관련부서처리,TAS10430:신청자조치사항보완,TAS10453:조건부완료,TAS00489:도면및서류최종검토,TAS00333:만족도조사,TAS00245:종료&quot;}\"/><ConstColumn id=\"DocOtpt2\" type=\"STRING\" size=\"30\" value=\"{&quot;description&quot;:&quot;문서출력(준공검사서,승인정보)&quot;, &quot;editable&quot;:&quot;&quot;, &quot;readonly&quot;:&quot;TAS00340:준공검사,TAS10414:관련부서처리,TAS10430:신청자조치사항보완,TAS10453:조건부완료,TAS00489:도면및서류최종검토,TAS00333:만족도조사,TAS00245:종료&quot;}\"/><ConstColumn id=\"FlrplnAplcnYn\" type=\"STRING\" size=\"30\" value=\"{&quot;description&quot;:&quot;도면및서류최종검토&quot;, &quot;editable&quot;:&quot;TAS00489:도면및서류최종검토&quot;, &quot;readonly&quot;:&quot;TAS00333:만족도조사,TAS00245:종료&quot;}\"/><ConstColumn id=\"CoprPrcs\" type=\"STRING\" size=\"30\" value=\"{&quot;description&quot;:&quot;협조처리&quot;, &quot;editable&quot;:&quot;TAS00336:착공승인검토&quot;, &quot;readonly&quot;:&quot;TAS10415:관련부서처리,TAS10404:준공검사요청,TAS00340:준공검사,TAS10414:관련부서처리,TAS10430:신청자조치사항보완,TAS10453:조건부완료,TAS00489:도면및서류최종검토,TAS00333:만족도조사,TAS00245:종료&quot;}\"/><ConstColumn id=\"BgncstAprvRvw\" type=\"STRING\" size=\"30\" value=\"{&quot;description&quot;:&quot;착공승인검토&quot;, &quot;editable&quot;:&quot;TAS00336:착공승인검토&quot;, &quot;readonly&quot;:&quot;TAS10415:관련부서처리,TAS10404:준공검사요청,TAS00340:준공검사,TAS10414:관련부서처리,TAS10430:신청자조치사항보완,TAS10453:조건부완료,TAS00489:도면및서류최종검토,TAS00333:만족도조사,TAS00245:종료&quot;}\"/><ConstColumn id=\"BgncstAprvRvwEdtr\" type=\"STRING\" size=\"30\" value=\"{&quot;description&quot;:&quot;착공승인검토편집&quot;, &quot;editable&quot;:&quot;TAS00336:착공승인검토&quot;, &quot;readonly&quot;:&quot;&quot;}\"/><ConstColumn id=\"BgncstAprvRvwDeptEdtr\" type=\"STRING\" size=\"30\" value=\"{&quot;description&quot;:&quot;착공승인검토부서편집&quot;, &quot;editable&quot;:&quot;TAS10415:관련부서처리&quot;, &quot;readonly&quot;:&quot;&quot;}\"/><ConstColumn id=\"CmcnInspRvw\" type=\"STRING\" size=\"30\" value=\"{&quot;description&quot;:&quot;준공검사&quot;, &quot;editable&quot;:&quot;TAS00340:준공검사&quot;, &quot;readonly&quot;:&quot;TAS10404:준공검사요청,TAS10414:관련부서처리,TAS10430:신청자조치사항보완,TAS10453:조건부완료,TAS00489:도면및서류최종검토,TAS00333:만족도조사,TAS00245:종료&quot;}\"/><ConstColumn id=\"CmcnInspRvwEdtr\" type=\"STRING\" size=\"30\" value=\"{&quot;description&quot;:&quot;준공검사편집&quot;, &quot;editable&quot;:&quot;TAS00340 준공검사&quot;, &quot;readonly&quot;:&quot;&quot;}\"/><ConstColumn id=\"CmcnInspRvwDeptEdtr\" type=\"STRING\" size=\"30\" value=\"{&quot;description&quot;:&quot;준공검사부서편집&quot;, &quot;editable&quot;:&quot;TAS10414:관련부서처리&quot;, &quot;readonly&quot;:&quot;&quot;}\"/><ConstColumn id=\"DgstfnExmn\" type=\"STRING\" size=\"30\" value=\"{&quot;description&quot;:&quot;만족도조사&quot;, &quot;editable&quot;:&quot;TAS00333:만족도조사&quot;, &quot;readonly&quot;:&quot;TAS00245:종료&quot;}\"/><ConstColumn id=\"CnvyMttr\" type=\"STRING\" size=\"30\" value=\"{&quot;description&quot;:&quot;전달사항&quot;, &quot;editable&quot;:&quot;TAS00233:신청서작성,TAS10431:신청서보완,TAS00336:착공승인검토,TAS10404:준공검사요청,TAS00340:준공검사,TAS10430:신청자조치사항보완,TAS10453:조건부완료,TAS00489:도면및서류최종검토&quot;, &quot;readonly&quot;:&quot;&quot;}\"/><ConstColumn id=\"AtchCn\" type=\"STRING\" size=\"30\" value=\"{&quot;description&quot;:&quot;별첨목록&quot;, &quot;editable&quot;:&quot;&quot;, &quot;readonly&quot;:&quot;TAS00336:착공승인검토,TAS10404:준공검사요청,TAS00340:준공검사,TAS10430:신청자조치사항보완,TAS10453:조건부완료,TAS00489:도면및서류최종검토&quot;}\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDocCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"docCd\" type=\"STRING\" size=\"256\"/><Column id=\"docNm\" type=\"STRING\" size=\"256\"/><Column id=\"upDocCd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"docCd\">Y06110</Col><Col id=\"docNm\">건축</Col></Row><Row><Col id=\"docCd\">Y06120</Col><Col id=\"docNm\">기계</Col></Row><Row><Col id=\"docCd\">Y06140</Col><Col id=\"docNm\">전기</Col></Row><Row><Col id=\"docCd\">Y06130</Col><Col id=\"docNm\">통신</Col></Row><Row><Col id=\"docCd\">Y06180</Col><Col id=\"docNm\">소방</Col></Row><Row><Col id=\"docCd\">Y06160</Col><Col id=\"docNm\">보안</Col></Row><Row><Col id=\"docCd\">Y06150</Col><Col id=\"docNm\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTscAplyRnbMng", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplyRnbMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"pstnInfoRnb\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","divTitle:10",null,"9200","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickFrBg");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_03","0","-53","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("16");
            obj.set_text("서비스 흐름 및 작업방법 안내(타이틀미정)");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinTitle","460","-55","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_03","505","-53","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("18");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinTitle\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit00","955","18","100%","58",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("19");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staSubTitle02_00_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_03\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divInfoGuide","1660.00","262","100%","300",null,null,null,null,"300",null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_text("서비스 흐름 및 작업방법 안내");
            obj.set_cssclass("div_WF_InfoGuide");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnSchClose",null,"10","34","34","10",null,null,null,null,null,this.divForm.form.divInfoGuide.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_ACPlus");
            this.divForm.form.divInfoGuide.addChild(obj.name, obj);

            obj = new Panel("sub_tit01","1630","674","100%","66",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("7");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div01","0","0","100%","865",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel00","-5","25","100%","97",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("20");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staAplySe","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("13");
            obj.set_text("신청구분");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtAplySe","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staAplySe\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAplySe\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("16");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("12");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel03","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
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

            obj = new Edit("edtCtrtNo","60","538","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("32");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel04","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("4");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel06\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("5");
            obj.set_text("계약명");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_visible("true");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"divEdtPop00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("7");
            obj.set_text("계약번호(수기입력)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Div("divEdtPop00","280","274","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("8");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            obj.set_visible("true");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtCtrtNm","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.Div01.form.divEdtPop00.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            this.divForm.form.Div01.form.divEdtPop00.addChild(obj.name, obj);

            obj = new Button("btnCtrtChc",null,"0","40","40","0",null,null,null,null,null,this.divForm.form.Div01.form.divEdtPop00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.divForm.form.Div01.form.divEdtPop00.addChild(obj.name, obj);

            obj = new Static("staCtrtChcYn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("9");
            obj.set_text("계약선택여부");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Radio("rdoCtrtChcYn","200.00","328","393","49.37",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div01_form_rdoCtrtChcYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div01_form_rdoCtrtChcYn_innerdataset", obj);
            divForm_form_Div01_form_rdoCtrtChcYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">계약선택</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">수기입력</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div01_form_rdoCtrtChcYn_innerdataset);
            obj.set_text("수기입력");
            obj.set_value("1");
            obj.set_index("1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("11");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCtrtChcYn\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoCtrtChcYn\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel06","1018","424","310","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("40");
            obj.set_flexgrow("1");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_01\"/><PanelItem id=\"PanelItem02\" componentid=\"edtCtrtNo\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staAplyNo","0","-466","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("17");
            obj.set_text("신청번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtAplyNo","0","-421","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("18");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00","20","-466","100%","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("19");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staAplyNo\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAplyNo\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("21");
            obj.set_text("청구고객코드");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Div("divEdtPop00_00","280","274","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("22");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.Div01.form.divEdtPop00_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("false");
            this.divForm.form.Div01.form.divEdtPop00_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("23");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem03\" componentid=\"divEdtPop00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("24");
            obj.set_text("청구주소");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00_00","0.00","46","100.00%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("25");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("26");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_01_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("39");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_01_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("27");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("28");
            obj.set_text("시설명");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_accessibilitylabel("필수입력");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtFcltNm","0","46","100.00%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("29");
            obj.set_readonly("false");
            obj.set_accessibilitydescription("필수입력");
            obj.set_accessibilitylabel("시설명");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("30");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"edtFcltNm\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_02","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("31");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("33");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Div("divEdtPop00_00_00","280","274","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("34");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.Div01.form.divEdtPop00_00_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            this.divForm.form.Div01.form.divEdtPop00_00_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_02","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("35");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02\"/><PanelItem id=\"PanelItem03\" componentid=\"divEdtPop00_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("36");
            obj.set_text("휴대폰 번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00_00_01","0.00","46","100.00%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("37");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("38");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_01_00_00_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("sub_tit03_00","1630","674","100%","66",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("23");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_01_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("div02","52","1587","100%","200",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("24");
            obj.set_text("div00");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel01_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("0");
            obj.set_text("위치구분(계약선택)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Combo("cmbRgnSeCrtr","76","450","190","40",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("선택");
            obj.set_flexgrow("1");
            obj.set_innerdataset("dsTspLocCd");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Combo("cmbPstnSeCrtr","272","450","190","40",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("2");
            obj.set_flexgrow("1");
            obj.set_displaynulltext("선택");
            obj.set_innerdataset("dsBldgSeList");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Panel("Panel07","0","46","100%","40",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"cmbRgnSeCrtr\"/><PanelItem id=\"PanelItem01\" componentid=\"cmbPstnSeCrtr\"/></Contents>");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel07\"/></Contents>");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("5");
            obj.set_text("위치정보(룸번호)");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_visible("true");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel06\"/></Contents>");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Panel("Panel04","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("7");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00\"/></Contents>");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Edit("edtPstnInfoRnb","524","548","100%","40",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Panel("Panel06","0","31","100%","40",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("9");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"edtPstnInfoRnb\"/></Contents>");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("10");
            obj.set_text("위치구분(수기입력)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Combo("cboRgn","76","450","190","40",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("11");
            obj.set_displaynulltext("선택");
            obj.set_flexgrow("1");
            obj.set_innerdataset("dsTspLocCd");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Combo("cmbPstnSe","272","450","190","40",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("12");
            obj.set_flexgrow("1");
            obj.set_displaynulltext("선택");
            obj.set_innerdataset("dsBldgSeList");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Panel("Panel07_00","0","46","100%","40",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("13");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"cboRgn\"/><PanelItem id=\"PanelItem01\" componentid=\"cmbPstnSe\"/></Contents>");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("14");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel07_00\"/></Contents>");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("15");
            obj.set_text("룸번호(수기입력)");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_visible("true");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Edit("edtHwrtInptRnb","524","548","100%","40",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("16");
            obj.set_readonly("false");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Panel("Panel06_00","0","31","100%","40",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("17");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"edtHwrtInptRnb\"/><PanelItem id=\"PanelItem00\" componentid=\"btnRnbNoInpt\"/></Contents>");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("18");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel06_00\"/></Contents>");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Panel("Panel04_PstnSeCd","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("19");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00_00\"/></Contents>");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Button("btnRnbNoInpt","1000","162","150","40",null,null,null,null,null,null,this.divForm.form.div02.form);
            obj.set_taborder("20");
            obj.set_text("룸번호입력창");
            this.divForm.form.div02.addChild(obj.name, obj);

            obj = new Panel("sub_tit03","1630","674","100%","66",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("11");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div03","0","1409.08","100%","600",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("0");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edt00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00\"/></Contents>");
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
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edt00_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_01\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("7");
            obj.set_text("대표전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_00_00\"/></Contents>");
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

            obj = new Edit("edt00_02","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_02","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("13");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("14");
            obj.set_text("법인등록번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edt00_00_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_00_01\"/></Contents>");
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

            obj = new Edit("edt00_03","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_03","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("20");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_03\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_03\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("21");
            obj.set_text("업태");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edt00_00_02","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("22");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_02","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("23");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_00_02\"/></Contents>");
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

            obj = new Panel("Panel04","0","60","100.00%","160",null,null,null,null,null,null,this.divForm.form.Div03.form);
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

            obj = new Edit("Edit00","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.Div03.form.divEdtPop.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            obj.set_displaynulltext("우편번호 검색");
            this.divForm.form.Div03.form.divEdtPop.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_00","360","637","305","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("28");
            obj.set_readonly("true");
            obj.set_flexgrow("2");
            obj.set_displaynulltext("주소");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panAddress","200","641","100%","45",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("29");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divEdtPop\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_00_00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edt00_00","0.00","46","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("30");
            obj.set_displaynulltext("상세주소");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01","20.00","0","980","136",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("31");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"panAddress\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_02_00_00","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("25");
            obj.set_text("총괄책임자 및 시설관리책임자");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_02_00_00","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("26");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_02_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit05_00","1630","674","100%","66",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("27");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_02_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_02_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00_02_00_00","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("29");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("div00","38","2718","100%","192",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("28");
            obj.set_text("div00");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("0");
            obj.set_text("총괄책임자 및 시설관리책임자");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Radio("rdoRtpyrSmYn","200.00","328","420","49.37",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_div00_form_rdoRtpyrSmYn_innerdataset = new nexacro.NormalDataset("divForm_form_div00_form_rdoRtpyrSmYn_innerdataset", obj);
            divForm_form_div00_form_rdoRtpyrSmYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">신청자정보와 동일</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">신청자정보와 동일하지 않음</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_div00_form_rdoRtpyrSmYn_innerdataset);
            obj.set_text("Select");
            obj.set_value("0");
            obj.set_index("0");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01\"/><PanelItem id=\"PanelItem03\" componentid=\"rdoRtpyrSmYn\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("4");
            obj.set_text("총괄책임자 및 시설관리책임자 <b v=\'true\'>성명</b>");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_usedecorate("true");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Edit("edtRbprsnFcltMngRbprsnNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("5");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_02","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRbprsnFcltMngRbprsnNm\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("7");
            obj.set_text("총괄책임자 및 시설관리 책임자 <b v=\'true\'>휴대폰번호</b>");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_fittocontents("none");
            obj.set_usedecorate("true");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Edit("edtRbprsnFcltMngRbprsnMblTelno","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("8");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRbprsnFcltMngRbprsnMblTelno\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("10");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_01_01\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("sub_tit05","1630","674","100%","66",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("15");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_02_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div05","0","30","100%","1180.99",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divPrvcWtcs","3090","1492","100.00%","542",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("40");
            obj.set_text("Div03");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("Static02","71","3301","100.00%","47",null,null,null,null,null,null,this.divForm.form.Div05.form.divPrvcWtcs.form);
            obj.set_taborder("0");
            obj.set_text("■ 입주자서비스포털은 배정 받은 공간에 대한 시설물 설치(변경) 신청 서비스 제공을 위해 아래와 같이 개인정보를 수집 이용하고자 합니다.\r\n내용을 자세히 읽은신 후 동의여부를 결정하야 주시길 바랍니다.");
            obj.set_cssclass("sta_WF_Des004");
            obj.set_fittocontents("height");
            this.divForm.form.Div05.form.divPrvcWtcs.addChild(obj.name, obj);

            obj = new Static("Static05","137","3798","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form.divPrvcWtcs.form);
            obj.set_taborder("1");
            obj.set_text("개인정보(필수) 수집이용 동의 여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div05.form.divPrvcWtcs.addChild(obj.name, obj);

            obj = new CheckBox("chkPrvcClctEsntlAgreYn","87","3847","46","40",null,null,null,null,null,null,this.divForm.form.Div05.form.divPrvcWtcs.form);
            obj.set_taborder("2");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_value("1");
            this.divForm.form.Div05.form.divPrvcWtcs.addChild(obj.name, obj);

            obj = new Panel("Panel10","20","3771","100%","124",null,null,null,null,null,null,this.divForm.form.Div05.form.divPrvcWtcs.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static05\"/><PanelItem id=\"PanelItem01\" componentid=\"chkPrvcClctEsntlAgreYn\"/></Contents>");
            this.divForm.form.Div05.form.divPrvcWtcs.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","3336","100.00%","345",null,null,null,null,null,null,this.divForm.form.Div05.form.divPrvcWtcs.form);
            obj.set_taborder("9");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("20");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel07\"/></Contents>");
            this.divForm.form.Div05.form.divPrvcWtcs.addChild(obj.name, obj);

            obj = new Panel("Panel09","0","3761","100.00%","150",null,null,null,null,null,null,this.divForm.form.Div05.form.divPrvcWtcs.form);
            obj.set_taborder("4");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_horizontalgap("20");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel10\"/></Contents>");
            this.divForm.form.Div05.form.divPrvcWtcs.addChild(obj.name, obj);

            obj = new Static("Static01","20","3286","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form.divPrvcWtcs.form);
            obj.set_taborder("5");
            obj.set_text("개인정보 수집 이용내역");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("0");
            this.divForm.form.Div05.form.divPrvcWtcs.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50","100.00%","133",null,null,null,null,null,null,this.divForm.form.Div05.form.divPrvcWtcs.form);
            obj.set_taborder("6");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"414\"/><Column size=\"414\"/><Column size=\"414\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"80\" band=\"head\"/></Rows><Band id=\"head\"><Cell text=\"수집이용항목\" border=\"1px solid, 1px solid #bcbcbc, 1px solid, 0px none\"/><Cell col=\"1\" text=\"수집목적\" border=\"1px solid, 1px solid #bcbcbc, 1px solid, 0px none\"/><Cell col=\"2\" cssclass=\"CellEnd\" text=\"보유기간\" border=\"1px solid, 0px none\"/><Cell row=\"1\" color=\"blue\" text=\"            총괄책임자 및 시설관리책임자 성명,&#13;&#10;        총괄책임자 및 시설관리책임자 휴대폰번호\" background=\"#ffffff\" textAlign=\"left\"/><Cell row=\"1\" col=\"1\" background=\"#ffffff\" text=\"배정 받은 공간에 대한 시설물 설치(변경)관련 서비스 신청,&#13;&#10;민원처리, 사후관리\" font=\"bold 16px/normal &quot;pretendard&quot;\"/><Cell row=\"1\" col=\"2\" color=\"blue\" background=\"#ffffff\" text=\"계약종료 후 3년, 회원탈퇴 시까지\" font=\"bold 16px/normal &quot;pretendard&quot;\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.divForm.form.Div05.form.divPrvcWtcs.addChild(obj.name, obj);

            obj = new Static("Static03","113","3670","100%","60",null,null,null,null,null,null,this.divForm.form.Div05.form.divPrvcWtcs.form);
            obj.set_taborder("7");
            obj.set_text("위의 개인정보 수집•이용에 대한 동의를 거부할 권리가 있습니다. 그러나 필수 항목 수집•이용 동의를 거부할 경우 시설물 설치(변경) 신청을 할 수 없습니다.");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Des");
            obj.set_color("red");
            this.divForm.form.Div05.form.divPrvcWtcs.addChild(obj.name, obj);

            obj = new Panel("Panel07","20","3346","100%","334",null,null,null,null,null,null,this.divForm.form.Div05.form.divPrvcWtcs.form);
            obj.set_taborder("8");
            obj.set_flexgrow("0");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01\"/><PanelItem id=\"PanelItem01\" componentid=\"Grid00\"/><PanelItem id=\"PanelItem03\" componentid=\"Static03\"/></Contents>");
            this.divForm.form.Div05.form.divPrvcWtcs.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("0");
            obj.set_text("총괄책임자 및 시설관리책임자\r\n개인정보수집이용동의서");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_01","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("1");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnAdd04_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00\"/><PanelItem id=\"PanelItem02\" componentid=\"btn_file_1_00_01\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("2");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_01\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("3");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("4");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("5");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panFileNum00_00","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("6");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_00_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1_00_00","512","135","125","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("7");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panBtnDel00_00","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("8");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_1_00_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("9");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel00_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_01","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("10");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_nodatatext("파일이 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_01","20","20","100%","30",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("11");
            obj.set_text("JPG,PNG,BMP,PDF만 첨부가능");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","192","1038","100.00%","80",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Grid00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00_00_00_01\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panFile01","0","42","100%","201",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("13");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_01_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel01_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staLabel05","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("14");
            obj.set_text("전달사항");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new TextArea("txtCnvyMttr","43","1193","100%","100",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("15");
            obj.set_displaynulltext("내용입력");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("sta00","43.00","1383","100%","33",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("16");
            obj.set_text("미팅요청 일시/담당자 및 연락처 등 기입");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","43.00","1193","100%","223",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("17");
            obj.set_background("#ffffff");
            obj.set_verticalgap("10");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"txtCnvyMttr\"/><PanelItem id=\"PanelItem01\" componentid=\"sta00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00_00","20.00","950","980","225.997",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("18");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_02\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel05","0","950","100.00%","236.997",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("19");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01_00","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("20");
            obj.set_text("기본시설물 체크리스트 다운받기");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_01_00","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("21");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnAdd04_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"btn_file_1_00_01_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00_00","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("22");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_01_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("23");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("24");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("25");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panFileNum00_00_00","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("26");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_00_00_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1_00_00_00","512","135","125","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("27");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panBtnDel00_00_00","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("28");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_1_00_00_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00_00","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("29");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel00_00_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_01_00","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("30");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_nodatatext("파일이 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_01_00","20","20","100%","30",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("31");
            obj.set_text("JPG,PNG,BMP,PDF만 첨부가능");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00","192","1038","100.00%","80",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("32");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Grid00_00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00_00_00_01_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panFile02","0","42","100%","201",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("33");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_01_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel01_00_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("Button00","813","76","120","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("34");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("btn_file_1_00_01","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("35");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("btnAdd04_00_00_00_00","64.00","0","290","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("36");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_FileDw");
            obj.set_fittocontents("width");
            obj.set_enable("true");
            obj.set_font("20px/normal \"pretendard\"");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("btnAdd04_00_00_00","724.00","520","295","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("37");
            obj.set_text("기본시설물 체크리스트 \r\n양식 다운로드");
            obj.set_cssclass("btn_WF_FileDw");
            obj.set_fittocontents("width");
            obj.set_enable("true");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("Button00_01","813","76","120","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("38");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("btn_file_1_00_01_00","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("39");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_text("신청자 정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("6");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_01","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("8");
            obj.set_text("고객정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00_01","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_01","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("10");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_02_00","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("12");
            obj.set_text("인계인수 신청을 위한 개인정보 수집 이용동의서");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00_02_00","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_02_00","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("14");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_02_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_01_00","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("20");
            obj.set_text("신청위치정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_01_00","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("22");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_01_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle06_00_00","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("30");
            obj.set_text("사전미팅내역");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button01_00_00","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("31");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("32");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button01_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit07","1630","674","100%","70",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("33");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle06_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div07","0","30","100%","1550",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("34");
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

            obj = new Calendar("Calendar00","0","0","150","40",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("2");
            obj.set_readonly("false");
            obj.set_dateformat("yyyy-MM-dd");
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
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Grid00_02\"/></Contents>");
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
            obj.set_readonly("false");
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
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00\"/></Contents>");
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

            obj = new Calendar("Calendar03_01","0","0","150","40",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("12");
            obj.set_readonly("false");
            obj.set_dateformat("yyyy-MM-dd");
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
            obj.set_readonly("false");
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

            obj = new Calendar("Calendar06_01","0","0","150","40",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("22");
            obj.set_readonly("false");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("Panel06_01","10.00","98","65","132",null,null,null,null,null,null,this.divForm.form.Div07.form);
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
            obj.set_readonly("false");
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

            obj = new Grid("Grid00","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("42");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_readonly("false");
            obj.set_nodatatext("파일이 없습니다.");
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
            obj.set_readonly("false");
            obj.set_nodatatext("파일이 없습니다.");
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
            obj.set_readonly("false");
            obj.set_nodatatext("파일이 없습니다.");
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

            obj = new Grid("Grid00_02","0","-4542","100%","300",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("74");
            obj.set_binddataset("Dataset02");
            obj.set_autofittype("col");
            obj.set_nodatatext("데이타가 없습니다.");
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
            obj.set_taborder("35");
            obj.set_text("인계인수 정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button01_02","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("36");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_03","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("37");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button01_02\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit09","1630","674","100%","70",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("38");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle06_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_03\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div09","0","30","100%","1965",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("39");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_visible("true");
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
            obj.set_readonly("false");
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
            obj.set_readonly("false");
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
            obj.set_readonly("false");
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
            obj.set_readonly("false");
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
            obj.set_readonly("false");
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
            obj.set_readonly("false");
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
            obj.set_readonly("false");
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
            obj.set_readonly("false");
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
            obj.set_readonly("false");
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

            obj = new Panel("Panel09_01_00","20","-5476","980","86",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("103");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel09_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt09_01_00\"/></Contents>");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Static("staLabel09_01_00","0","-5476","96.08%","46",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("104");
            obj.set_text("기타상태");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Panel("Pal09_00","6","910","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("102");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel09_01_00\"/></Contents>");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Edit("edt09_01_00","0","-5430","100%","40",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("105");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Static("staLabel09_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("38");
            obj.set_text("수도상태");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Edit("edt09_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("39");
            obj.set_readonly("false");
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

            obj = new Calendar("calAcptnHnovDt","98","1124","150","40",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("44");
            obj.set_readonly("false");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Combo("cboAcptnHnovDt_HH","334","1124","80","40",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("45");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displaynulltext("선택");
            obj.set_readonly("false");
            var divForm_form_Div09_form_cboAcptnHnovDt_HH_innerdataset = new nexacro.NormalDataset("divForm_form_Div09_form_cboAcptnHnovDt_HH_innerdataset", obj);
            divForm_form_Div09_form_cboAcptnHnovDt_HH_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">00</Col><Col id=\"datacolumn\">00</Col></Row><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">01</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">02</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">03</Col></Row><Row><Col id=\"codecolumn\">04</Col><Col id=\"datacolumn\">04</Col></Row><Row><Col id=\"codecolumn\">05</Col><Col id=\"datacolumn\">05</Col></Row><Row><Col id=\"codecolumn\">06</Col><Col id=\"datacolumn\">06</Col></Row><Row><Col id=\"codecolumn\">07</Col><Col id=\"datacolumn\">07</Col></Row><Row><Col id=\"codecolumn\">08</Col><Col id=\"datacolumn\">08</Col></Row><Row><Col id=\"codecolumn\">09</Col><Col id=\"datacolumn\">09</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">11</Col><Col id=\"datacolumn\">11</Col></Row><Row><Col id=\"codecolumn\">12</Col><Col id=\"datacolumn\">12</Col></Row><Row><Col id=\"codecolumn\">13</Col><Col id=\"datacolumn\">13</Col></Row><Row><Col id=\"codecolumn\">14</Col><Col id=\"datacolumn\">14</Col></Row><Row><Col id=\"codecolumn\">15</Col><Col id=\"datacolumn\">15</Col></Row><Row><Col id=\"codecolumn\">16</Col><Col id=\"datacolumn\">16</Col></Row><Row><Col id=\"codecolumn\">17</Col><Col id=\"datacolumn\">17</Col></Row><Row><Col id=\"codecolumn\">18</Col><Col id=\"datacolumn\">18</Col></Row><Row><Col id=\"codecolumn\">19</Col><Col id=\"datacolumn\">19</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">21</Col><Col id=\"datacolumn\">21</Col></Row><Row><Col id=\"codecolumn\">22</Col><Col id=\"datacolumn\">22</Col></Row><Row><Col id=\"codecolumn\">23</Col><Col id=\"datacolumn\">23</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div09_form_cboAcptnHnovDt_HH_innerdataset);
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
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"calAcptnHnovDt\"/><PanelItem id=\"PanelItem01\" componentid=\"cboAcptnHnovDt_HH\"/><PanelItem id=\"PanelItem02\" componentid=\"Static00\"/><PanelItem id=\"PanelItem06\" componentid=\"edtAcptnHnovDt_MM\"/><PanelItem id=\"PanelItem04\" componentid=\"Static01\"/></Contents>");
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

            obj = new Edit("edtAcptnHnovDt_MM","400","1146","80","40",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("101");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Static("staLabel11_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("52");
            obj.set_text("입회자 유지보수팀");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div09.addChild(obj.name, obj);

            obj = new Edit("edt11_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div09.form);
            obj.set_taborder("53");
            obj.set_readonly("false");
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
            obj.set_readonly("false");
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
            obj.set_readonly("false");
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
            obj.set_readonly("false");
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
            obj.set_readonly("false");
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
            obj.set_readonly("false");
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
            obj.set_readonly("false");
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
            obj.set_readonly("false");
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
            obj.set_readonly("false");
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
            obj.set_nodatatext("파일이 없습니다.");
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
            obj.set_taborder("40");
            obj.set_text("처리내역");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button01_03","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("41");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_04","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("42");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button01_03\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit10","1630","674","100%","70",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("43");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle06_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_04\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div10","0","30","100%","941",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("44");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_visible("true");
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
            obj.set_taborder("23");
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

            obj = new Static("staLabel00_02_00","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div10.form);
            obj.set_taborder("10");
            obj.set_text("기본시설물 체크리스트");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.divForm.form.Div10.addChild(obj.name, obj);

            obj = new Button("Button00","813","76","120","34",null,null,null,null,null,null,this.divForm.form.Div10.form);
            obj.set_taborder("11");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div10.addChild(obj.name, obj);

            obj = new Button("btn_file_1","124","58","116","34",null,null,null,null,null,null,this.divForm.form.Div10.form);
            obj.set_taborder("12");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.divForm.form.Div10.addChild(obj.name, obj);

            obj = new Panel("panBtnFile","433","58","305","34",null,null,null,null,null,null,this.divForm.form.Div10.form);
            obj.set_taborder("13");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1\"/></Contents>");
            this.divForm.form.Div10.addChild(obj.name, obj);

            obj = new Panel("panTitle","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div10.form);
            obj.set_taborder("14");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj.set_spacing("0px 0px 10px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile\"/></Contents>");
            this.divForm.form.Div10.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div10.form);
            obj.set_taborder("15");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div10.addChild(obj.name, obj);

            obj = new Static("Static01_00","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div10.form);
            obj.set_taborder("16");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div10.addChild(obj.name, obj);

            obj = new Static("Static02","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div10.form);
            obj.set_taborder("17");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div10.addChild(obj.name, obj);

            obj = new Panel("panFileNum","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div10.form);
            obj.set_taborder("18");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02\"/></Contents>");
            this.divForm.form.Div10.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1","512","135","125","34",null,null,null,null,null,null,this.divForm.form.Div10.form);
            obj.set_taborder("19");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div10.addChild(obj.name, obj);

            obj = new Panel("panBtnDel","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div10.form);
            obj.set_taborder("20");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_1\"/></Contents>");
            this.divForm.form.Div10.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div10.form);
            obj.set_taborder("21");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel\"/></Contents>");
            this.divForm.form.Div10.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div10.form);
            obj.set_taborder("22");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_nodatatext("파일이 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div10.addChild(obj.name, obj);

            obj = new Static("staSubTitle01","10","30","100%","50",null,null,null,null,null,null,this.divForm.form.Div10.form);
            obj.set_taborder("24");
            obj.set_text("협조처리");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.form.Div10.addChild(obj.name, obj);

            obj = new Button("btnCoprPrcs","98","16","34","34",null,null,null,null,null,null,this.divForm.form.Div10.form);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("true");
            this.divForm.form.Div10.addChild(obj.name, obj);

            obj = new Panel("Panel02_02_01","1157","30","132","50",null,null,null,null,null,null,this.divForm.form.Div10.form);
            obj.set_taborder("26");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnCoprPrcs\"/></Contents>");
            this.divForm.form.Div10.addChild(obj.name, obj);

            obj = new Panel("panCoprPrcs","1353","4405","100.00%","70",null,null,null,null,"70",null,this.divForm.form.Div10.form);
            obj.set_taborder("27");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02_02_01\"/></Contents>");
            this.divForm.form.Div10.addChild(obj.name, obj);

            obj = new Div("divCoprPrcs","0","3987","100.00%","412",null,null,null,null,null,null,this.divForm.form.Div10.form);
            obj.set_taborder("28");
            obj.set_text("Div01");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            obj.getSetter("updtlprocsetccn").set("FICA");
            this.divForm.form.Div10.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01_00_00_00_00_00_00_00_00_04","0","0","298","46",null,null,null,null,null,null,this.divForm.form.Div10.form.divCoprPrcs.form);
            obj.set_taborder("0");
            obj.set_text("협조처리목록");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divForm.form.Div10.form.divCoprPrcs.addChild(obj.name, obj);

            obj = new Panel("panBgncstAprvRvwBtn","298","0","298","46",null,null,null,null,null,null,this.divForm.form.Div10.form.divCoprPrcs.form);
            obj.set_taborder("1");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxiswrapalign("start");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnBgncstRvwEblcAdd\"/><PanelItem id=\"PanelItem03\" componentid=\"btnBgncstRvwAdd\"/><PanelItem id=\"PanelItem04\" componentid=\"btnBgncstRvwDel\"/><PanelItem id=\"PanelItem05\" componentid=\"btnBgncstRvwStrg\"/><PanelItem id=\"PanelItem06\" componentid=\"btnBgncstRvwInq\"/></Contents>");
            this.divForm.form.Div10.form.divCoprPrcs.addChild(obj.name, obj);

            obj = new Panel("panTitle01_00_00_00_00_00_00_00_00_04","20","10","100%","46",null,null,null,null,null,null,this.divForm.form.Div10.form.divCoprPrcs.form);
            obj.set_taborder("2");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01_00_00_00_00_00_00_00_00_04\"/><PanelItem id=\"PanelItem01\" componentid=\"panBgncstAprvRvwBtn\"/></Contents>");
            this.divForm.form.Div10.form.divCoprPrcs.addChild(obj.name, obj);

            obj = new Panel("panBgncstAprvRvw","40","638","100.00%","356",null,null,null,null,null,null,this.divForm.form.Div10.form.divCoprPrcs.form);
            obj.set_taborder("3");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01_00_00_00_00_00_00_00_00_04\"/><PanelItem id=\"PanelItem02\" componentid=\"grdBgncstAprvRvw\"/></Contents>");
            this.divForm.form.Div10.form.divCoprPrcs.addChild(obj.name, obj);

            obj = new Grid("grdBgncstAprvRvw","20","10","100%","285",null,null,null,null,null,null,this.divForm.form.Div10.form.divCoprPrcs.form);
            obj.set_taborder("4");
            obj.set_binddataset("dsBgncstAprvRvw");
            obj.set_extendsizetype("row");
            obj.set_autosizingtype("row");
            obj.set_scrollbartype("none none");
            obj.set_nodatatext("데이타가 없습니다.");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"155\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"224\"/><Column size=\"48\"/><Column size=\"110\"/><Column size=\"165\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell displaytype=\"expr:dataset.parent.cfnGetAtrb.call(&quot;isTAS00336&quot;) ? &quot;checkboxcontrol&quot; : &quot;none&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb.call(&quot;isTAS00336&quot;) ? &quot;checkbox&quot; : &quot;none&quot;\"/><Cell col=\"1\" text=\"단계\"/><Cell col=\"2\" text=\"협조업무\" cssclass=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsBgncstAprvRvwEdtr&quot;) ? &quot;CellE&quot; : &quot;&quot;\"/><Cell col=\"3\" text=\"담당부서(처리그룹)\" cssclass=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsBgncstAprvRvwEdtr&quot;) ? &quot;CellE&quot; : &quot;&quot;\"/><Cell col=\"4\" text=\"담당자\" cssclass=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsBgncstAprvRvwEdtr&quot;) ? &quot;CellE&quot; : &quot;&quot;\"/><Cell col=\"5\" text=\"연락처(내선번호)\"/><Cell col=\"6\" text=\"검토의견\"/><Cell col=\"7\" cssclass=\"CellAdd\" displaytype=\"buttoncontrol\"/><Cell col=\"8\" text=\"처리결과&#13;&#10;(승인,불승인)\"/><Cell col=\"9\" text=\"확인일시\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:chc\" edittype=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsBgncstAprvRvwEdtr&quot;) ? &quot;checkbox&quot; : &quot;none&quot;\" displaytype=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsBgncstAprvRvwEdtr&quot;) ? &quot;checkboxcontrol&quot; : &quot;none&quot;\"/><Cell col=\"1\" text=\"bind:jobNm\" textAlign=\"center\"/><Cell col=\"2\" displaytype=\"combotext\" edittype=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsBgncstAprvRvwEdtr&quot;) ? &quot;combo&quot; : &quot;none&quot;\" combodataset=\"dsDocCd\" combodatacol=\"docNm\" combocodecol=\"docCd\" text=\"bind:cstrnKndCd\" cssclass=\"CellLink\" textAlign=\"center\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" text=\"bind:tmprCd\" textAlign=\"center\"/><Cell col=\"4\" displaytype=\"text\" expandshow=\"expr:dataset.parent.cfnGetAtrb.call(&quot;roBgncstAprvRvwEdtr&quot;) ? &quot;hide&quot; : &quot;show&quot;\" expandsize=\"40\" text=\"bind:prcrNm\"/><Cell col=\"5\" text=\"bind:prcrTelno\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:prcsRsltCn\" textareascrolltype=\"none\"/><Cell col=\"7\" displaytype=\"expr:isFileAtch ? &quot;buttoncontrol&quot; : &quot;&quot;\" cssclass=\"CellAdd\"/><Cell col=\"8\" text=\"bind:acptnHnovAprvNm\" textAlign=\"center\"/><Cell col=\"9\" cssclass=\"CellEnd\" text=\"bind:endDt\" displaytype=\"mask\" maskeditformat=\"####-##-## ##:##\" maskedittype=\"string\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divForm.form.Div10.form.divCoprPrcs.addChild(obj.name, obj);

            obj = new Button("btnBgncstRvwInq","920","10","75","34",null,null,null,null,null,null,this.divForm.form.Div10.form.divCoprPrcs.form);
            obj.set_taborder("5");
            obj.set_text("조회(숨김)");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.Div10.form.divCoprPrcs.addChild(obj.name, obj);

            obj = new Button("btnBgncstRvwEblcAdd","1060","10","78","34",null,null,null,null,null,null,this.divForm.form.Div10.form.divCoprPrcs.form);
            obj.set_taborder("6");
            obj.set_text("일괄추가");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.Div10.form.divCoprPrcs.addChild(obj.name, obj);

            obj = new Button("btnBgncstRvwAdd","1070","1","47","34",null,null,null,null,null,null,this.divForm.form.Div10.form.divCoprPrcs.form);
            obj.set_taborder("7");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.Div10.form.divCoprPrcs.addChild(obj.name, obj);

            obj = new Button("btnBgncstRvwDel","804.00","10","45","34",null,null,null,null,null,null,this.divForm.form.Div10.form.divCoprPrcs.form);
            obj.set_taborder("8");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.Div10.form.divCoprPrcs.addChild(obj.name, obj);

            obj = new Button("btnBgncstRvwStrg","1234","10","45","34",null,null,null,null,null,null,this.divForm.form.Div10.form.divCoprPrcs.form);
            obj.set_taborder("9");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.Div10.form.divCoprPrcs.addChild(obj.name, obj);

            obj = new Static("staSubTitle06_05","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("45");
            obj.set_text("룸번호 열쇠정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button01_05","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("46");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_06","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("47");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button01_05\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit12","1630","674","100%","70",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("48");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle06_05\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_06\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div12","0","8285","100%","232",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("49");
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
            obj.set_nodatatext("데이타가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"룸번호\"/><Cell col=\"1\" text=\"코어번호\"/><Cell col=\"2\" text=\"비고\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.divForm.form.Div12.addChild(obj.name, obj);

            obj = new Div("divQuick",null,"62","296","500","62",null,null,null,null,null,this);
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
            obj.set_text("신청위치정보");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn00_00_00","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("2");
            obj.set_text("고객정보");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn00_00_00_00","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("3");
            obj.set_text("총괄책임자및시설관리책임자");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn00_00_00_00_00","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("4");
            obj.set_text("사전미팅내역");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn00_01","17","20","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("5");
            obj.set_text("인계인수정보");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn00_00_00_00_00_00","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("6");
            obj.set_text("처리내역");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn00_00_00_00_00_00_00","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("7");
            obj.set_text("협조처리");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn00_01_00","17","20","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("8");
            obj.set_text("룸번호열쇠정보");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"divQuick:0","296","281","62",null,null,null,null,null,this);
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
            //-- Default Layout : this.divForm.form.Div01.form.divEdtPop00.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01.form.divEdtPop00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.edtCtrtNm.set_taborder("0");
                p.edtCtrtNm.set_cssclass("edt_WF_EdtSch");
                p.edtCtrtNm.set_readonly("true");
                p.edtCtrtNm.move("0","0",null,"40","0",null);

                p.btnCtrtChc.set_taborder("1");
                p.btnCtrtChc.set_cssclass("btn_WF_EdtSch");
                p.btnCtrtChc.move(null,"0","40","40","0",null);
            	}
            );
            this.divForm.form.Div01.form.divEdtPop00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div01.form.divEdtPop00.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div01.form.divEdtPop00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.Div01.form.divEdtPop00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div01.form.divEdtPop00.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div01.form.divEdtPop00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.Div01.form.divEdtPop00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div01.form.divEdtPop00_00.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01.form.divEdtPop00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Edit00.set_taborder("0");
                p.Edit00.set_cssclass("edt_WF_EdtSch");
                p.Edit00.set_readonly("false");
                p.Edit00.move("0","0",null,"40","0",null);
            	}
            );
            this.divForm.form.Div01.form.divEdtPop00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div01.form.divEdtPop00_00.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div01.form.divEdtPop00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.Div01.form.divEdtPop00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div01.form.divEdtPop00_00.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div01.form.divEdtPop00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.Div01.form.divEdtPop00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div01.form.divEdtPop00_00_00.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01.form.divEdtPop00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Edit00.set_taborder("0");
                p.Edit00.set_cssclass("edt_WF_EdtSch");
                p.Edit00.set_readonly("true");
                p.Edit00.move("0","0",null,"40","0",null);
            	}
            );
            this.divForm.form.Div01.form.divEdtPop00_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div01.form.divEdtPop00_00_00.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div01.form.divEdtPop00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.Div01.form.divEdtPop00_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div01.form.divEdtPop00_00_00.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div01.form.divEdtPop00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.Div01.form.divEdtPop00_00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div01.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_taborder("20");
                p.Panel00.set_horizontalgap("20");
                p.Panel00.set_flexcrossaxiswrapalign("start");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_verticalgap("0");
                p.Panel00.set_spacing("0px 20px 10px 20px");
                p.Panel00.set_cssclass("pal_WF_DtlBg");
                p.Panel00.move("-5","25","100%","97",null,null);

                p.staAplySe.set_taborder("13");
                p.staAplySe.set_text("신청구분");
                p.staAplySe.set_cssclass("sta_WF_Label");
                p.staAplySe.move("10","98","100%","46",null,null);

                p.edtAplySe.set_taborder("14");
                p.edtAplySe.set_readonly("true");
                p.edtAplySe.move("10.00","158","100%","40",null,null);

                p.Panel01_00_00.set_taborder("15");
                p.Panel01_00_00.set_type("vertical");
                p.Panel01_00_00.set_flexgrow("1");
                p.Panel01_00_00.move("10.00","98","305","86",null,null);

                p.Panel01.set_taborder("16");
                p.Panel01.set_horizontalgap("20");
                p.Panel01.set_flexcrossaxiswrapalign("start");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_verticalgap("0");
                p.Panel01.set_spacing("0px 20px 10px 20px");
                p.Panel01.set_cssclass("pal_WF_DtlBg");
                p.Panel01.move("0","60","100.00%","96",null,null);

                p.Panel02.set_taborder("12");
                p.Panel02.set_horizontalgap("20");
                p.Panel02.set_flexcrossaxiswrapalign("start");
                p.Panel02.set_flexwrap("wrap");
                p.Panel02.set_fittocontents("height");
                p.Panel02.set_verticalgap("0");
                p.Panel02.set_spacing("0px 20px 10px 20px");
                p.Panel02.set_cssclass("pal_WF_DtlBg");
                p.Panel02.set_type("horizontal");
                p.Panel02.move("0","60","100.00%","96",null,null);

                p.Panel03.set_taborder("0");
                p.Panel03.set_horizontalgap("20");
                p.Panel03.set_flexcrossaxiswrapalign("start");
                p.Panel03.set_flexwrap("wrap");
                p.Panel03.set_fittocontents("height");
                p.Panel03.set_verticalgap("0");
                p.Panel03.set_spacing("0px 20px 10px 20px");
                p.Panel03.set_cssclass("pal_WF_DtlBg");
                p.Panel03.move("0","60","100.00%","96",null,null);

                p.edtCtrtNo.set_taborder("32");
                p.edtCtrtNo.move("60","538","100%","40",null,null);

                p.staLabel01_00.set_taborder("1");
                p.staLabel01_00.set_text("회사명");
                p.staLabel01_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00.move("10","98","100%","46",null,null);

                p.edt00_01.set_taborder("2");
                p.edt00_01.set_readonly("true");
                p.edt00_01.move("10.00","158","100%","40",null,null);

                p.Panel01_00.set_taborder("3");
                p.Panel01_00.set_type("vertical");
                p.Panel01_00.set_flexgrow("1");
                p.Panel01_00.move("10.00","98","305","86",null,null);

                p.Panel04.set_taborder("4");
                p.Panel04.set_horizontalgap("20");
                p.Panel04.set_flexcrossaxiswrapalign("start");
                p.Panel04.set_flexwrap("wrap");
                p.Panel04.set_verticalgap("0");
                p.Panel04.set_spacing("0px 20px 10px 20px");
                p.Panel04.set_cssclass("pal_WF_DtlBg");
                p.Panel04.set_flexshrink("1");
                p.Panel04.set_fittocontents("height");
                p.Panel04.move("0","60","100.00%","96",null,null);

                p.staLabel01_02_00.set_taborder("5");
                p.staLabel01_02_00.set_text("계약명");
                p.staLabel01_02_00.set_cssclass("sta_WF_Label_E");
                p.staLabel01_02_00.set_visible("true");
                p.staLabel01_02_00.move("10","98","100%","46",null,null);

                p.Panel01_01_00.set_taborder("6");
                p.Panel01_01_00.set_type("vertical");
                p.Panel01_01_00.set_flexgrow("1");
                p.Panel01_01_00.set_visible("true");
                p.Panel01_01_00.move("10.00","98","305","86",null,null);

                p.staLabel01_02_01.set_taborder("7");
                p.staLabel01_02_01.set_text("계약번호(수기입력)");
                p.staLabel01_02_01.set_cssclass("sta_WF_Label");
                p.staLabel01_02_01.move("10","98","100%","46",null,null);

                p.divEdtPop00.set_taborder("8");
                p.divEdtPop00.set_text("Div00");
                p.divEdtPop00.set_formscrollbartype("none none");
                p.divEdtPop00.set_formscrolltype("none");
                p.divEdtPop00.set_flexgrow("1");
                p.divEdtPop00.set_visible("true");
                p.divEdtPop00.move("280","274","100%","40",null,null);

                p.staCtrtChcYn.set_taborder("9");
                p.staCtrtChcYn.set_text("계약선택여부");
                p.staCtrtChcYn.set_cssclass("sta_WF_Label");
                p.staCtrtChcYn.move("10","98","100%","46",null,null);

                p.rdoCtrtChcYn.set_taborder("10");
                p.rdoCtrtChcYn.set_innerdataset(divForm_form_Div01_form_rdoCtrtChcYn_innerdataset);
                p.rdoCtrtChcYn.set_codecolumn("codecolumn");
                p.rdoCtrtChcYn.set_datacolumn("datacolumn");
                p.rdoCtrtChcYn.set_direction("vertical");
                p.rdoCtrtChcYn.set_fittocontents("width");
                p.rdoCtrtChcYn.set_value("1");
                p.rdoCtrtChcYn.set_index("1");
                p.rdoCtrtChcYn.move("200.00","328","393","49.37",null,null);

                p.Panel00_00_00.set_taborder("11");
                p.Panel00_00_00.set_type("vertical");
                p.Panel00_00_00.set_flexgrow("1");
                p.Panel00_00_00.set_minwidth("");
                p.Panel00_00_00.move("10.00","98","305","86",null,null);

                p.Panel06.set_taborder("40");
                p.Panel06.set_flexgrow("1");
                p.Panel06.set_type("vertical");
                p.Panel06.move("1018","424","310","86",null,null);

                p.staAplyNo.set_taborder("17");
                p.staAplyNo.set_text("신청번호");
                p.staAplyNo.set_cssclass("sta_WF_Label");
                p.staAplyNo.move("0","-466","100%","46",null,null);

                p.edtAplyNo.set_taborder("18");
                p.edtAplyNo.set_readonly("true");
                p.edtAplyNo.move("0","-421","100%","40",null,null);

                p.Panel01_00_00_00.set_taborder("19");
                p.Panel01_00_00_00.set_type("vertical");
                p.Panel01_00_00_00.set_flexgrow("1");
                p.Panel01_00_00_00.move("20","-466","100%","86",null,null);

                p.staLabel00.set_taborder("21");
                p.staLabel00.set_text("청구고객코드");
                p.staLabel00.set_cssclass("sta_WF_Label");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.divEdtPop00_00.set_taborder("22");
                p.divEdtPop00_00.set_text("Div00");
                p.divEdtPop00_00.set_formscrollbartype("none none");
                p.divEdtPop00_00.set_formscrolltype("none");
                p.divEdtPop00_00.set_flexgrow("1");
                p.divEdtPop00_00.move("280","274","100%","40",null,null);

                p.Panel00_00.set_taborder("23");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.set_minwidth("");
                p.Panel00_00.move("10.00","98","305","86",null,null);

                p.staLabel00_00.set_taborder("24");
                p.staLabel00_00.set_text("청구주소");
                p.staLabel00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00.move("10","98","100%","46",null,null);

                p.edt00_01_00_00.set_taborder("25");
                p.edt00_01_00_00.set_readonly("false");
                p.edt00_01_00_00.move("0.00","46","100.00%","40",null,null);

                p.Panel00_00_01.set_taborder("26");
                p.Panel00_00_01.set_type("vertical");
                p.Panel00_00_01.set_flexgrow("1");
                p.Panel00_00_01.set_minwidth("");
                p.Panel00_00_01.move("10.00","98","305","86",null,null);

                p.Panel00_01_00.set_taborder("39");
                p.Panel00_01_00.set_horizontalgap("20");
                p.Panel00_01_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_01_00.set_flexwrap("wrap");
                p.Panel00_01_00.set_fittocontents("height");
                p.Panel00_01_00.set_verticalgap("0");
                p.Panel00_01_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_01_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_01_00.set_type("horizontal");
                p.Panel00_01_00.move("0","60","100.00%","96",null,null);

                p.Panel00_01.set_taborder("27");
                p.Panel00_01.set_horizontalgap("20");
                p.Panel00_01.set_flexcrossaxiswrapalign("start");
                p.Panel00_01.set_flexwrap("wrap");
                p.Panel00_01.set_fittocontents("height");
                p.Panel00_01.set_verticalgap("0");
                p.Panel00_01.set_spacing("0px 20px 10px 20px");
                p.Panel00_01.set_cssclass("pal_WF_DtlBg");
                p.Panel00_01.set_type("horizontal");
                p.Panel00_01.move("0","60","100.00%","96",null,null);

                p.staLabel00_01.set_taborder("28");
                p.staLabel00_01.set_text("시설명");
                p.staLabel00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel00_01.set_accessibilitylabel("필수입력");
                p.staLabel00_01.move("10","98","100%","46",null,null);

                p.edtFcltNm.set_taborder("29");
                p.edtFcltNm.set_readonly("false");
                p.edtFcltNm.set_accessibilitydescription("필수입력");
                p.edtFcltNm.set_accessibilitylabel("시설명");
                p.edtFcltNm.move("0","46","100.00%","40",null,null);

                p.Panel00_00_00_00.set_taborder("30");
                p.Panel00_00_00_00.set_type("vertical");
                p.Panel00_00_00_00.set_flexgrow("1");
                p.Panel00_00_00_00.set_minwidth("");
                p.Panel00_00_00_00.move("10.00","98","305","86",null,null);

                p.Panel01_02.set_taborder("31");
                p.Panel01_02.set_horizontalgap("20");
                p.Panel01_02.set_flexcrossaxiswrapalign("start");
                p.Panel01_02.set_flexwrap("wrap");
                p.Panel01_02.set_fittocontents("height");
                p.Panel01_02.set_verticalgap("0");
                p.Panel01_02.set_spacing("0px 20px 10px 20px");
                p.Panel01_02.set_cssclass("pal_WF_DtlBg");
                p.Panel01_02.move("0","60","100.00%","96",null,null);

                p.staLabel00_02.set_taborder("33");
                p.staLabel00_02.set_text("신청자");
                p.staLabel00_02.set_cssclass("sta_WF_Label");
                p.staLabel00_02.move("10","98","100%","46",null,null);

                p.divEdtPop00_00_00.set_taborder("34");
                p.divEdtPop00_00_00.set_text("Div00");
                p.divEdtPop00_00_00.set_formscrollbartype("none none");
                p.divEdtPop00_00_00.set_formscrolltype("none");
                p.divEdtPop00_00_00.set_flexgrow("1");
                p.divEdtPop00_00_00.move("280","274","100%","40",null,null);

                p.Panel00_00_02.set_taborder("35");
                p.Panel00_00_02.set_type("vertical");
                p.Panel00_00_02.set_flexgrow("1");
                p.Panel00_00_02.set_minwidth("");
                p.Panel00_00_02.move("10.00","98","305","86",null,null);

                p.staLabel00_00_00.set_taborder("36");
                p.staLabel00_00_00.set_text("휴대폰 번호");
                p.staLabel00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00_00.move("10","98","100%","46",null,null);

                p.edt00_01_00_00_01.set_taborder("37");
                p.edt00_01_00_00_01.set_readonly("true");
                p.edt00_01_00_00_01.move("0.00","46","100.00%","40",null,null);

                p.Panel00_00_01_00.set_taborder("38");
                p.Panel00_00_01_00.set_type("vertical");
                p.Panel00_00_01_00.set_flexgrow("1");
                p.Panel00_00_01_00.set_minwidth("");
                p.Panel00_00_01_00.move("10.00","98","305","86",null,null);
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
            //-- Default Layout : this.divForm.form.div02.form
            obj = new Layout("default","",0,0,this.divForm.form.div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel01_02.set_taborder("0");
                p.staLabel01_02.set_text("위치구분(계약선택)");
                p.staLabel01_02.set_cssclass("sta_WF_Label_E");
                p.staLabel01_02.move("10","98","100%","46",null,null);

                p.cmbRgnSeCrtr.set_taborder("1");
                p.cmbRgnSeCrtr.set_displaynulltext("선택");
                p.cmbRgnSeCrtr.set_flexgrow("1");
                p.cmbRgnSeCrtr.set_innerdataset("dsTspLocCd");
                p.cmbRgnSeCrtr.set_codecolumn("cdId");
                p.cmbRgnSeCrtr.set_datacolumn("cdNm");
                p.cmbRgnSeCrtr.set_text("선택");
                p.cmbRgnSeCrtr.set_value("");
                p.cmbRgnSeCrtr.set_index("-1");
                p.cmbRgnSeCrtr.move("76","450","190","40",null,null);

                p.cmbPstnSeCrtr.set_taborder("2");
                p.cmbPstnSeCrtr.set_flexgrow("1");
                p.cmbPstnSeCrtr.set_displaynulltext("선택");
                p.cmbPstnSeCrtr.set_innerdataset("dsBldgSeList");
                p.cmbPstnSeCrtr.set_codecolumn("cdId");
                p.cmbPstnSeCrtr.set_datacolumn("cdNm");
                p.cmbPstnSeCrtr.set_value("");
                p.cmbPstnSeCrtr.set_index("-1");
                p.cmbPstnSeCrtr.move("272","450","190","40",null,null);

                p.Panel07.set_taborder("3");
                p.Panel07.set_horizontalgap("10");
                p.Panel07.move("0","46","100%","40",null,null);

                p.Panel01_01.set_taborder("4");
                p.Panel01_01.set_type("vertical");
                p.Panel01_01.set_flexgrow("1");
                p.Panel01_01.move("10.00","98","305","86",null,null);

                p.staLabel01_02_00.set_taborder("5");
                p.staLabel01_02_00.set_text("위치정보(룸번호)");
                p.staLabel01_02_00.set_cssclass("sta_WF_Label_E");
                p.staLabel01_02_00.set_visible("true");
                p.staLabel01_02_00.move("10","98","100%","46",null,null);

                p.Panel01_01_00.set_taborder("6");
                p.Panel01_01_00.set_type("vertical");
                p.Panel01_01_00.set_flexgrow("1");
                p.Panel01_01_00.set_visible("true");
                p.Panel01_01_00.move("10.00","98","305","86",null,null);

                p.Panel04.set_taborder("7");
                p.Panel04.set_horizontalgap("20");
                p.Panel04.set_flexcrossaxiswrapalign("start");
                p.Panel04.set_flexwrap("wrap");
                p.Panel04.set_verticalgap("0");
                p.Panel04.set_spacing("0px 20px 10px 20px");
                p.Panel04.set_cssclass("pal_WF_DtlBg");
                p.Panel04.set_flexshrink("1");
                p.Panel04.set_fittocontents("height");
                p.Panel04.move("0","60","100.00%","96",null,null);

                p.edtPstnInfoRnb.set_taborder("8");
                p.edtPstnInfoRnb.set_readonly("true");
                p.edtPstnInfoRnb.move("524","548","100%","40",null,null);

                p.Panel06.set_taborder("9");
                p.Panel06.set_horizontalgap("10");
                p.Panel06.move("0","31","100%","40",null,null);

                p.staLabel01_02_01.set_taborder("10");
                p.staLabel01_02_01.set_text("위치구분(수기입력)");
                p.staLabel01_02_01.set_cssclass("sta_WF_Label_E");
                p.staLabel01_02_01.move("10","98","100%","46",null,null);

                p.cboRgn.set_taborder("11");
                p.cboRgn.set_displaynulltext("선택");
                p.cboRgn.set_flexgrow("1");
                p.cboRgn.set_innerdataset("dsTspLocCd");
                p.cboRgn.set_codecolumn("cdId");
                p.cboRgn.set_datacolumn("cdNm");
                p.cboRgn.set_text("선택");
                p.cboRgn.set_value("");
                p.cboRgn.set_index("-1");
                p.cboRgn.move("76","450","190","40",null,null);

                p.cmbPstnSe.set_taborder("12");
                p.cmbPstnSe.set_flexgrow("1");
                p.cmbPstnSe.set_displaynulltext("선택");
                p.cmbPstnSe.set_innerdataset("dsBldgSeList");
                p.cmbPstnSe.set_codecolumn("cdId");
                p.cmbPstnSe.set_datacolumn("cdNm");
                p.cmbPstnSe.set_value("");
                p.cmbPstnSe.set_index("-1");
                p.cmbPstnSe.move("272","450","190","40",null,null);

                p.Panel07_00.set_taborder("13");
                p.Panel07_00.set_horizontalgap("10");
                p.Panel07_00.move("0","46","100%","40",null,null);

                p.Panel01_01_01.set_taborder("14");
                p.Panel01_01_01.set_type("vertical");
                p.Panel01_01_01.set_flexgrow("1");
                p.Panel01_01_01.move("10.00","98","305","86",null,null);

                p.staLabel01_02_00_00.set_taborder("15");
                p.staLabel01_02_00_00.set_text("룸번호(수기입력)");
                p.staLabel01_02_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel01_02_00_00.set_visible("true");
                p.staLabel01_02_00_00.move("10","98","100%","46",null,null);

                p.edtHwrtInptRnb.set_taborder("16");
                p.edtHwrtInptRnb.set_readonly("false");
                p.edtHwrtInptRnb.move("524","548","100%","40",null,null);

                p.Panel06_00.set_taborder("17");
                p.Panel06_00.set_horizontalgap("10");
                p.Panel06_00.move("0","31","100%","40",null,null);

                p.Panel01_01_00_00.set_taborder("18");
                p.Panel01_01_00_00.set_type("vertical");
                p.Panel01_01_00_00.set_flexgrow("1");
                p.Panel01_01_00_00.set_visible("true");
                p.Panel01_01_00_00.move("10.00","98","305","86",null,null);

                p.Panel04_PstnSeCd.set_taborder("19");
                p.Panel04_PstnSeCd.set_horizontalgap("20");
                p.Panel04_PstnSeCd.set_flexcrossaxiswrapalign("start");
                p.Panel04_PstnSeCd.set_flexwrap("wrap");
                p.Panel04_PstnSeCd.set_verticalgap("0");
                p.Panel04_PstnSeCd.set_spacing("0px 20px 10px 20px");
                p.Panel04_PstnSeCd.set_cssclass("pal_WF_DtlBg");
                p.Panel04_PstnSeCd.set_flexshrink("1");
                p.Panel04_PstnSeCd.set_fittocontents("height");
                p.Panel04_PstnSeCd.move("0","60","100.00%","96",null,null);

                p.btnRnbNoInpt.set_taborder("20");
                p.btnRnbNoInpt.set_text("룸번호입력창");
                p.btnRnbNoInpt.move("1000","162","150","40",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.div02.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.div02.form
            obj = new Layout("mobile","",0,0,this.divForm.form.div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.div02.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div03.form.divEdtPop.form
            obj = new Layout("default","",0,0,this.divForm.form.Div03.form.divEdtPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Edit00.set_taborder("0");
                p.Edit00.set_cssclass("edt_WF_EdtSch");
                p.Edit00.set_readonly("true");
                p.Edit00.set_displaynulltext("우편번호 검색");
                p.Edit00.move("0","0",null,"40","0",null);
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
                p.staLabel00.set_cssclass("sta_WF_Label");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.edt00.set_taborder("1");
                p.edt00.set_readonly("true");
                p.edt00.move("10.00","158","100%","40",null,null);

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
                p.staLabel00_01.set_cssclass("sta_WF_Label");
                p.staLabel00_01.move("10","98","100%","46",null,null);

                p.edt00_01.set_taborder("5");
                p.edt00_01.set_readonly("true");
                p.edt00_01.move("10.00","158","100%","40",null,null);

                p.Panel00_00_00.set_taborder("6");
                p.Panel00_00_00.set_type("vertical");
                p.Panel00_00_00.set_flexgrow("1");
                p.Panel00_00_00.set_minwidth("");
                p.Panel00_00_00.move("10.00","98","305","86",null,null);

                p.staLabel00_00_00.set_taborder("7");
                p.staLabel00_00_00.set_text("대표전화번호");
                p.staLabel00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00_00.move("10","98","100%","46",null,null);

                p.edt00_00_00.set_taborder("8");
                p.edt00_00_00.set_readonly("true");
                p.edt00_00_00.move("10.00","158","100%","40",null,null);

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

                p.edt00_02.set_taborder("12");
                p.edt00_02.set_readonly("true");
                p.edt00_02.move("10.00","158","100%","40",null,null);

                p.Panel00_00_02.set_taborder("13");
                p.Panel00_00_02.set_type("vertical");
                p.Panel00_00_02.set_flexgrow("1");
                p.Panel00_00_02.set_minwidth("");
                p.Panel00_00_02.move("10.00","98","305","86",null,null);

                p.staLabel00_00_01.set_taborder("14");
                p.staLabel00_00_01.set_text("법인등록번호");
                p.staLabel00_00_01.set_cssclass("sta_WF_Label");
                p.staLabel00_00_01.move("10","98","100%","46",null,null);

                p.edt00_00_01.set_taborder("15");
                p.edt00_00_01.set_readonly("true");
                p.edt00_00_01.move("10.00","158","100%","40",null,null);

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

                p.edt00_03.set_taborder("19");
                p.edt00_03.set_readonly("true");
                p.edt00_03.move("10.00","158","100%","40",null,null);

                p.Panel00_00_03.set_taborder("20");
                p.Panel00_00_03.set_type("vertical");
                p.Panel00_00_03.set_flexgrow("1");
                p.Panel00_00_03.set_minwidth("");
                p.Panel00_00_03.move("10.00","98","305","86",null,null);

                p.staLabel00_00_02.set_taborder("21");
                p.staLabel00_00_02.set_text("업태");
                p.staLabel00_00_02.set_cssclass("sta_WF_Label");
                p.staLabel00_00_02.move("10","98","100%","46",null,null);

                p.edt00_00_02.set_taborder("22");
                p.edt00_00_02.set_readonly("true");
                p.edt00_00_02.move("10.00","158","100%","40",null,null);

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
                p.Panel04.move("0","60","100.00%","160",null,null);

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

                p.edt00_00_00_00.set_taborder("28");
                p.edt00_00_00_00.set_readonly("true");
                p.edt00_00_00_00.set_flexgrow("2");
                p.edt00_00_00_00.set_displaynulltext("주소");
                p.edt00_00_00_00.move("360","637","305","40",null,null);

                p.panAddress.set_taborder("29");
                p.panAddress.set_horizontalgap("10");
                p.panAddress.move("200","641","100%","45",null,null);

                p.edt00_00.set_taborder("30");
                p.edt00_00.set_displaynulltext("상세주소");
                p.edt00_00.set_readonly("true");
                p.edt00_00.move("0.00","46","100%","40",null,null);

                p.Panel00_00_01.set_taborder("31");
                p.Panel00_00_01.set_type("vertical");
                p.Panel00_00_01.set_flexgrow("1");
                p.Panel00_00_01.set_fittocontents("height");
                p.Panel00_00_01.set_verticalgap("10");
                p.Panel00_00_01.set_minwidth("");
                p.Panel00_00_01.move("20.00","0","980","136",null,null);
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
            //-- Default Layout : this.divForm.form.div00.form
            obj = new Layout("default","",0,0,this.divForm.form.div00.form,function(p){});
            obj.set_type("vertical");
            this.divForm.form.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.Div05.form.divPrvcWtcs.form
            obj = new Layout("default","",0,0,this.divForm.form.Div05.form.divPrvcWtcs.form,function(p){});
            obj.set_type("vertical");
            obj.set_flexwrap("wrap");
            this.divForm.form.Div05.form.divPrvcWtcs.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.Div05.form
            obj = new Layout("default","",0,0,this.divForm.form.Div05.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divPrvcWtcs.set_taborder("40");
                p.divPrvcWtcs.set_text("Div03");
                p.divPrvcWtcs.set_formscrollbartype("none none");
                p.divPrvcWtcs.set_formscrolltype("none");
                p.divPrvcWtcs.set_fittocontents("height");
                p.divPrvcWtcs.move("3090","1492","100.00%","542",null,null);

                p.staLabel00_02_01.set_taborder("0");
                p.staLabel00_02_01.set_text("총괄책임자 및 시설관리책임자\r\n개인정보수집이용동의서");
                p.staLabel00_02_01.set_cssclass("sta_WF_Label_E");
                p.staLabel00_02_01.set_fittocontents("width");
                p.staLabel00_02_01.move("0","44","305","46",null,null);

                p.panBtnFile00_01.set_taborder("1");
                p.panBtnFile00_01.set_flexgrow("1");
                p.panBtnFile00_01.set_flexcrossaxisalign("start");
                p.panBtnFile00_01.set_flexmainaxisalign("end");
                p.panBtnFile00_01.set_horizontalgap("10");
                p.panBtnFile00_01.move("433","58","305","46",null,null);

                p.panTitle00_00.set_taborder("2");
                p.panTitle00_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00.set_flexwrap("wrap");
                p.panTitle00_00.set_fittocontents("height");
                p.panTitle00_00.move("0","124","100%","46",null,null);

                p.Static00_00_00.set_taborder("3");
                p.Static00_00_00.set_text("파일수 : ");
                p.Static00_00_00.set_fittocontents("width");
                p.Static00_00_00.move("88","123","48","46",null,null);

                p.Static01_00_01.set_taborder("4");
                p.Static01_00_01.set_text("0");
                p.Static01_00_01.set_fittocontents("width");
                p.Static01_00_01.move("165","143","9","46",null,null);

                p.Static02_00_00.set_taborder("5");
                p.Static02_00_00.set_text("개");
                p.Static02_00_00.set_fittocontents("width");
                p.Static02_00_00.move("293","131","13","46",null,null);

                p.panFileNum00_00.set_taborder("6");
                p.panFileNum00_00.set_flexgrow("1");
                p.panFileNum00_00.set_horizontalgap("4");
                p.panFileNum00_00.move("20","190","305","46",null,null);

                p.btn_del_file_1_00_00.set_taborder("7");
                p.btn_del_file_1_00_00.set_text("전체파일삭제");
                p.btn_del_file_1_00_00.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_1_00_00.set_fittocontents("width");
                p.btn_del_file_1_00_00.move("512","135","125","40",null,null);

                p.panBtnDel00_00.set_taborder("8");
                p.panBtnDel00_00.set_flexcrossaxisalign("center");
                p.panBtnDel00_00.set_flexmainaxisalign("end");
                p.panBtnDel00_00.set_flexgrow("1");
                p.panBtnDel00_00.move("517","141","305","46",null,null);

                p.Panel00_01_00.set_taborder("9");
                p.Panel00_01_00.move("20","51","100%","46",null,null);

                p.Grid00_00_01.set_taborder("10");
                p.Grid00_00_01.set_binddataset("dsFile1");
                p.Grid00_00_01.set_autofittype("col");
                p.Grid00_00_01.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00_01.set_nodatatext("파일이 없습니다.");
                p.Grid00_00_01.move("20.00","114","100%","40",null,null);

                p.sta00_00_00_01.set_taborder("11");
                p.sta00_00_00_01.set_text("JPG,PNG,BMP,PDF만 첨부가능");
                p.sta00_00_00_01.set_cssclass("sta_WF_Des");
                p.sta00_00_00_01.set_fittocontents("height");
                p.sta00_00_00_01.move("20","20","100%","30",null,null);

                p.Panel01_00.set_taborder("12");
                p.Panel01_00.set_type("vertical");
                p.Panel01_00.set_verticalgap("10");
                p.Panel01_00.move("192","1038","100.00%","80",null,null);

                p.panFile01.set_taborder("13");
                p.panFile01.set_fittocontents("height");
                p.panFile01.set_spacing("10px 20px 10px 20px");
                p.panFile01.set_flexwrap("wrap");
                p.panFile01.set_cssclass("pal_WF_DtlBg");
                p.panFile01.set_verticalgap("4");
                p.panFile01.move("0","42","100%","201",null,null);

                p.staLabel05.set_taborder("14");
                p.staLabel05.set_text("전달사항");
                p.staLabel05.set_cssclass("sta_WF_Label");
                p.staLabel05.move("10","98","100%","46",null,null);

                p.txtCnvyMttr.set_taborder("15");
                p.txtCnvyMttr.set_displaynulltext("내용입력");
                p.txtCnvyMttr.move("43","1193","100%","100",null,null);

                p.sta00.set_taborder("16");
                p.sta00.set_text("미팅요청 일시/담당자 및 연락처 등 기입");
                p.sta00.set_cssclass("sta_WF_Des");
                p.sta00.set_fittocontents("height");
                p.sta00.move("43.00","1383","100%","33",null,null);

                p.Panel00_02.set_taborder("17");
                p.Panel00_02.set_background("#ffffff");
                p.Panel00_02.set_verticalgap("10");
                p.Panel00_02.set_type("vertical");
                p.Panel00_02.set_fittocontents("height");
                p.Panel00_02.move("43.00","1193","100%","223",null,null);

                p.Panel00_00_00_00_00.set_taborder("18");
                p.Panel00_00_00_00_00.set_type("vertical");
                p.Panel00_00_00_00_00.set_flexgrow("1");
                p.Panel00_00_00_00_00.set_fittocontents("height");
                p.Panel00_00_00_00_00.set_minwidth("");
                p.Panel00_00_00_00_00.move("20.00","950","980","225.997",null,null);

                p.Panel05.set_taborder("19");
                p.Panel05.set_horizontalgap("20");
                p.Panel05.set_flexcrossaxiswrapalign("start");
                p.Panel05.set_flexwrap("wrap");
                p.Panel05.set_fittocontents("height");
                p.Panel05.set_verticalgap("0");
                p.Panel05.set_spacing("0px 20px 10px 20px");
                p.Panel05.set_cssclass("pal_WF_DtlBg");
                p.Panel05.set_type("horizontal");
                p.Panel05.move("0","950","100.00%","236.997",null,null);

                p.staLabel00_02_01_00.set_taborder("20");
                p.staLabel00_02_01_00.set_text("기본시설물 체크리스트 다운받기");
                p.staLabel00_02_01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_02_01_00.set_fittocontents("width");
                p.staLabel00_02_01_00.move("0","44","305","46",null,null);

                p.panBtnFile00_01_00.set_taborder("21");
                p.panBtnFile00_01_00.set_flexgrow("1");
                p.panBtnFile00_01_00.set_flexcrossaxisalign("start");
                p.panBtnFile00_01_00.set_flexmainaxisalign("end");
                p.panBtnFile00_01_00.set_horizontalgap("10");
                p.panBtnFile00_01_00.move("433","58","305","46",null,null);

                p.panTitle00_00_00.set_taborder("22");
                p.panTitle00_00_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00_00.set_flexwrap("wrap");
                p.panTitle00_00_00.set_fittocontents("height");
                p.panTitle00_00_00.move("0","124","100%","46",null,null);

                p.Static00_00_00_00.set_taborder("23");
                p.Static00_00_00_00.set_text("파일수 : ");
                p.Static00_00_00_00.set_fittocontents("width");
                p.Static00_00_00_00.move("88","123","48","46",null,null);

                p.Static01_00_01_00.set_taborder("24");
                p.Static01_00_01_00.set_text("0");
                p.Static01_00_01_00.set_fittocontents("width");
                p.Static01_00_01_00.move("165","143","9","46",null,null);

                p.Static02_00_00_00.set_taborder("25");
                p.Static02_00_00_00.set_text("개");
                p.Static02_00_00_00.set_fittocontents("width");
                p.Static02_00_00_00.move("293","131","13","46",null,null);

                p.panFileNum00_00_00.set_taborder("26");
                p.panFileNum00_00_00.set_flexgrow("1");
                p.panFileNum00_00_00.set_horizontalgap("4");
                p.panFileNum00_00_00.move("20","190","305","46",null,null);

                p.btn_del_file_1_00_00_00.set_taborder("27");
                p.btn_del_file_1_00_00_00.set_text("전체파일삭제");
                p.btn_del_file_1_00_00_00.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_1_00_00_00.set_fittocontents("width");
                p.btn_del_file_1_00_00_00.move("512","135","125","40",null,null);

                p.panBtnDel00_00_00.set_taborder("28");
                p.panBtnDel00_00_00.set_flexcrossaxisalign("center");
                p.panBtnDel00_00_00.set_flexmainaxisalign("end");
                p.panBtnDel00_00_00.set_flexgrow("1");
                p.panBtnDel00_00_00.move("517","141","305","46",null,null);

                p.Panel00_01_00_00.set_taborder("29");
                p.Panel00_01_00_00.move("20","51","100%","46",null,null);

                p.Grid00_00_01_00.set_taborder("30");
                p.Grid00_00_01_00.set_binddataset("dsFile1");
                p.Grid00_00_01_00.set_autofittype("col");
                p.Grid00_00_01_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00_01_00.set_nodatatext("파일이 없습니다.");
                p.Grid00_00_01_00.move("20.00","114","100%","40",null,null);

                p.sta00_00_00_01_00.set_taborder("31");
                p.sta00_00_00_01_00.set_text("JPG,PNG,BMP,PDF만 첨부가능");
                p.sta00_00_00_01_00.set_cssclass("sta_WF_Des");
                p.sta00_00_00_01_00.set_fittocontents("height");
                p.sta00_00_00_01_00.move("20","20","100%","30",null,null);

                p.Panel01_00_00.set_taborder("32");
                p.Panel01_00_00.set_type("vertical");
                p.Panel01_00_00.set_verticalgap("10");
                p.Panel01_00_00.move("192","1038","100.00%","80",null,null);

                p.panFile02.set_taborder("33");
                p.panFile02.set_fittocontents("height");
                p.panFile02.set_spacing("10px 20px 10px 20px");
                p.panFile02.set_flexwrap("wrap");
                p.panFile02.set_cssclass("pal_WF_DtlBg");
                p.panFile02.set_verticalgap("4");
                p.panFile02.move("0","42","100%","201",null,null);

                p.Button00.set_taborder("34");
                p.Button00.set_text("샘플첨부파일명");
                p.Button00.set_cssclass("btn_WF_Small");
                p.Button00.set_fittocontents("width");
                p.Button00.move("813","76","120","40",null,null);

                p.btn_file_1_00_01.set_taborder("35");
                p.btn_file_1_00_01.set_text("파일선택");
                p.btn_file_1_00_01.set_cssclass("btn_WF_FileUp");
                p.btn_file_1_00_01.move("124","58","116","40",null,null);

                p.btnAdd04_00_00_00_00.set_taborder("36");
                p.btnAdd04_00_00_00_00.set_text("동의서 양식 다운로드");
                p.btnAdd04_00_00_00_00.set_cssclass("btn_WF_FileDw");
                p.btnAdd04_00_00_00_00.set_fittocontents("width");
                p.btnAdd04_00_00_00_00.set_enable("true");
                p.btnAdd04_00_00_00_00.set_font("20px/normal \"pretendard\"");
                p.btnAdd04_00_00_00_00.move("64.00","0","290","40",null,null);

                p.btnAdd04_00_00_00.set_taborder("37");
                p.btnAdd04_00_00_00.set_text("기본시설물 체크리스트 \r\n양식 다운로드");
                p.btnAdd04_00_00_00.set_cssclass("btn_WF_FileDw");
                p.btnAdd04_00_00_00.set_fittocontents("width");
                p.btnAdd04_00_00_00.set_enable("true");
                p.btnAdd04_00_00_00.move("724.00","520","295","40",null,null);

                p.Button00_01.set_taborder("38");
                p.Button00_01.set_text("샘플첨부파일명");
                p.Button00_01.set_cssclass("btn_WF_Small");
                p.Button00_01.set_fittocontents("width");
                p.Button00_01.move("813","76","120","40",null,null);

                p.btn_file_1_00_01_00.set_taborder("39");
                p.btn_file_1_00_01_00.set_text("파일선택");
                p.btn_file_1_00_01_00.set_cssclass("btn_WF_FileUp");
                p.btn_file_1_00_01_00.move("124","58","116","40",null,null);
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
                p.Calendar00.set_readonly("false");
                p.Calendar00.set_dateformat("yyyy-MM-dd");
                p.Calendar00.move("0","0","150","40",null,null);

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
                p.edt01_01.set_readonly("false");
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
                p.Calendar03_01.set_readonly("false");
                p.Calendar03_01.set_dateformat("yyyy-MM-dd");
                p.Calendar03_01.move("0","0","150","40",null,null);

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
                p.edt04_01.set_readonly("false");
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
                p.Calendar06_01.set_readonly("false");
                p.Calendar06_01.set_dateformat("yyyy-MM-dd");
                p.Calendar06_01.move("0","0","150","40",null,null);

                p.Panel06_01.set_taborder("23");
                p.Panel06_01.set_type("vertical");
                p.Panel06_01.set_flexgrow("1");
                p.Panel06_01.set_minwidth("");
                p.Panel06_01.move("10.00","98","65","132",null,null);

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
                p.edt07_01.set_readonly("false");
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

                p.Grid00.set_taborder("42");
                p.Grid00.set_binddataset("dsFile1");
                p.Grid00.set_autofittype("col");
                p.Grid00.set_cssclass("grd_WF_FileAdd");
                p.Grid00.set_readonly("false");
                p.Grid00.set_nodatatext("파일이 없습니다.");
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
                p.Grid00_00.set_readonly("false");
                p.Grid00_00.set_nodatatext("파일이 없습니다.");
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
                p.Grid00_01.set_readonly("false");
                p.Grid00_01.set_nodatatext("파일이 없습니다.");
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
                p.Grid00_02.set_autofittype("col");
                p.Grid00_02.set_nodatatext("데이타가 없습니다.");
                p.Grid00_02.move("0","-4542","100%","300",null,null);

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
                p.staLabel00_00.set_readonly("false");
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
                p.edt01_01.set_readonly("false");
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
                p.edt02_01.set_readonly("false");
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
                p.edt03_01.set_readonly("false");
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
                p.edt04_01.set_readonly("false");
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
                p.edt05_01.set_readonly("false");
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
                p.edt06_01.set_readonly("false");
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
                p.edt07_01.set_readonly("false");
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
                p.edt08_01.set_readonly("false");
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

                p.Panel09_01_00.set_taborder("103");
                p.Panel09_01_00.set_type("vertical");
                p.Panel09_01_00.set_flexgrow("1");
                p.Panel09_01_00.set_minwidth("");
                p.Panel09_01_00.move("20","-5476","980","86",null,null);

                p.staLabel09_01_00.set_taborder("104");
                p.staLabel09_01_00.set_text("기타상태");
                p.staLabel09_01_00.set_cssclass("sta_WF_Label");
                p.staLabel09_01_00.move("0","-5476","96.08%","46",null,null);

                p.Pal09_00.set_taborder("102");
                p.Pal09_00.set_horizontalgap("20");
                p.Pal09_00.set_flexcrossaxiswrapalign("start");
                p.Pal09_00.set_flexwrap("wrap");
                p.Pal09_00.set_fittocontents("height");
                p.Pal09_00.set_verticalgap("0");
                p.Pal09_00.set_spacing("0px 20px 10px 20px");
                p.Pal09_00.set_cssclass("pal_WF_DtlBg");
                p.Pal09_00.set_type("horizontal");
                p.Pal09_00.move("6","910","100.00%","96",null,null);

                p.edt09_01_00.set_taborder("105");
                p.edt09_01_00.set_readonly("false");
                p.edt09_01_00.move("0","-5430","100%","40",null,null);

                p.staLabel09_01.set_taborder("38");
                p.staLabel09_01.set_text("수도상태");
                p.staLabel09_01.set_cssclass("sta_WF_Label");
                p.staLabel09_01.move("10","98","100%","46",null,null);

                p.edt09_01.set_taborder("39");
                p.edt09_01.set_readonly("false");
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

                p.calAcptnHnovDt.set_taborder("44");
                p.calAcptnHnovDt.set_readonly("false");
                p.calAcptnHnovDt.set_dateformat("yyyy-MM-dd");
                p.calAcptnHnovDt.move("98","1124","150","40",null,null);

                p.cboAcptnHnovDt_HH.set_taborder("45");
                p.cboAcptnHnovDt_HH.set_innerdataset(divForm_form_Div09_form_cboAcptnHnovDt_HH_innerdataset);
                p.cboAcptnHnovDt_HH.set_codecolumn("codecolumn");
                p.cboAcptnHnovDt_HH.set_datacolumn("datacolumn");
                p.cboAcptnHnovDt_HH.set_displaynulltext("선택");
                p.cboAcptnHnovDt_HH.set_readonly("false");
                p.cboAcptnHnovDt_HH.set_text("");
                p.cboAcptnHnovDt_HH.set_index("-1");
                p.cboAcptnHnovDt_HH.move("334","1124","80","40",null,null);

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

                p.edtAcptnHnovDt_MM.set_taborder("101");
                p.edtAcptnHnovDt_MM.set_readonly("false");
                p.edtAcptnHnovDt_MM.move("400","1146","80","40",null,null);

                p.staLabel11_01.set_taborder("52");
                p.staLabel11_01.set_text("입회자 유지보수팀");
                p.staLabel11_01.set_cssclass("sta_WF_Label");
                p.staLabel11_01.move("10","98","100%","46",null,null);

                p.edt11_01.set_taborder("53");
                p.edt11_01.set_readonly("false");
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
                p.edt11_02.set_readonly("false");
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
                p.edt12_01.set_readonly("false");
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
                p.edt12_02.set_readonly("false");
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
                p.edt13_1.set_readonly("false");
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
                p.edt14_01.set_readonly("false");
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
                p.edt14_02.set_readonly("false");
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
                p.edt15.set_readonly("false");
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
                p.txa16.set_readonly("false");
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
                p.Grid00.set_nodatatext("파일이 없습니다.");
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
            //-- Default Layout : this.divForm.form.Div10.form.divCoprPrcs.form
            obj = new Layout("default","",0,0,this.divForm.form.Div10.form.divCoprPrcs.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel00_02_01_00_00_00_00_00_00_00_00_04.set_taborder("0");
                p.staLabel00_02_01_00_00_00_00_00_00_00_00_04.set_text("협조처리목록");
                p.staLabel00_02_01_00_00_00_00_00_00_00_00_04.set_cssclass("sta_WF_Label");
                p.staLabel00_02_01_00_00_00_00_00_00_00_00_04.set_flexgrow("1");
                p.staLabel00_02_01_00_00_00_00_00_00_00_00_04.move("0","0","298","46",null,null);

                p.panBgncstAprvRvwBtn.set_taborder("1");
                p.panBgncstAprvRvwBtn.set_flexgrow("1");
                p.panBgncstAprvRvwBtn.set_flexcrossaxisalign("center");
                p.panBgncstAprvRvwBtn.set_flexmainaxisalign("end");
                p.panBgncstAprvRvwBtn.set_horizontalgap("10");
                p.panBgncstAprvRvwBtn.set_flexcrossaxiswrapalign("start");
                p.panBgncstAprvRvwBtn.move("298","0","298","46",null,null);

                p.panTitle01_00_00_00_00_00_00_00_00_04.set_taborder("2");
                p.panTitle01_00_00_00_00_00_00_00_00_04.set_cssclass("pan_WF_FileTitle");
                p.panTitle01_00_00_00_00_00_00_00_00_04.set_flexwrap("wrap");
                p.panTitle01_00_00_00_00_00_00_00_00_04.move("20","10","100%","46",null,null);

                p.panBgncstAprvRvw.set_taborder("3");
                p.panBgncstAprvRvw.set_fittocontents("height");
                p.panBgncstAprvRvw.set_spacing("10px 20px 10px 20px");
                p.panBgncstAprvRvw.set_flexwrap("wrap");
                p.panBgncstAprvRvw.set_cssclass("pal_WF_DtlBg");
                p.panBgncstAprvRvw.set_verticalgap("4");
                p.panBgncstAprvRvw.move("40","638","100.00%","356",null,null);

                p.grdBgncstAprvRvw.set_taborder("4");
                p.grdBgncstAprvRvw.set_binddataset("dsBgncstAprvRvw");
                p.grdBgncstAprvRvw.set_extendsizetype("row");
                p.grdBgncstAprvRvw.set_autosizingtype("row");
                p.grdBgncstAprvRvw.set_scrollbartype("none none");
                p.grdBgncstAprvRvw.set_nodatatext("데이타가 없습니다.");
                p.grdBgncstAprvRvw.set_autofittype("col");
                p.grdBgncstAprvRvw.move("20","10","100%","285",null,null);

                p.btnBgncstRvwInq.set_taborder("5");
                p.btnBgncstRvwInq.set_text("조회(숨김)");
                p.btnBgncstRvwInq.set_cssclass("btn_WF_Small");
                p.btnBgncstRvwInq.set_visible("true");
                p.btnBgncstRvwInq.set_fittocontents("width");
                p.btnBgncstRvwInq.move("920","10","75","34",null,null);

                p.btnBgncstRvwEblcAdd.set_taborder("6");
                p.btnBgncstRvwEblcAdd.set_text("일괄추가");
                p.btnBgncstRvwEblcAdd.set_cssclass("btn_WF_Small");
                p.btnBgncstRvwEblcAdd.set_visible("true");
                p.btnBgncstRvwEblcAdd.set_fittocontents("width");
                p.btnBgncstRvwEblcAdd.move("1060","10","78","34",null,null);

                p.btnBgncstRvwAdd.set_taborder("7");
                p.btnBgncstRvwAdd.set_text("추가");
                p.btnBgncstRvwAdd.set_cssclass("btn_WF_Small");
                p.btnBgncstRvwAdd.set_visible("true");
                p.btnBgncstRvwAdd.set_fittocontents("width");
                p.btnBgncstRvwAdd.move("1070","1","47","34",null,null);

                p.btnBgncstRvwDel.set_taborder("8");
                p.btnBgncstRvwDel.set_text("삭제");
                p.btnBgncstRvwDel.set_cssclass("btn_WF_Small");
                p.btnBgncstRvwDel.set_visible("true");
                p.btnBgncstRvwDel.set_fittocontents("width");
                p.btnBgncstRvwDel.move("804.00","10","45","34",null,null);

                p.btnBgncstRvwStrg.set_taborder("9");
                p.btnBgncstRvwStrg.set_text("저장");
                p.btnBgncstRvwStrg.set_cssclass("btn_WF_Small");
                p.btnBgncstRvwStrg.set_visible("true");
                p.btnBgncstRvwStrg.set_fittocontents("width");
                p.btnBgncstRvwStrg.move("1234","10","45","34",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div10.form.divCoprPrcs.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div10.form.divCoprPrcs.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div10.form.divCoprPrcs.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdBgncstAprvRvw.set_autofittype("none");

                p.btnGrdAdd.set_visible("false");

                p.btnGrdRegi.set_visible("false");

                p.btnBgncstRvwDel.set_visible("false");

                p.btnGrdDw.set_visible("false");
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div10.form.divCoprPrcs.form.addLayout(obj.name, obj);
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

                p.panFile.set_taborder("23");
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

                p.staLabel00_02_00.set_taborder("10");
                p.staLabel00_02_00.set_text("기본시설물 체크리스트");
                p.staLabel00_02_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_00.set_fittocontents("width");
                p.staLabel00_02_00.move("0","44","305","46",null,null);

                p.Button00.set_taborder("11");
                p.Button00.set_text("샘플첨부파일명");
                p.Button00.set_cssclass("btn_WF_Small");
                p.Button00.set_fittocontents("width");
                p.Button00.move("813","76","120","34",null,null);

                p.btn_file_1.set_taborder("12");
                p.btn_file_1.set_text("파일선택");
                p.btn_file_1.set_cssclass("btn_WF_FileUp");
                p.btn_file_1.set_fittocontents("width");
                p.btn_file_1.move("124","58","116","34",null,null);

                p.panBtnFile.set_taborder("13");
                p.panBtnFile.set_flexgrow("1");
                p.panBtnFile.set_flexmainaxisalign("end");
                p.panBtnFile.set_horizontalgap("10");
                p.panBtnFile.move("433","58","305","34",null,null);

                p.panTitle.set_taborder("14");
                p.panTitle.set_cssclass("pan_WF_FileTitle");
                p.panTitle.set_flexwrap("wrap");
                p.panTitle.set_fittocontents("height");
                p.panTitle.set_flexcrossaxisalign("center");
                p.panTitle.set_spacing("0px 0px 10px 0px");
                p.panTitle.move("0","124","100%","46",null,null);

                p.Static00_00_00.set_taborder("15");
                p.Static00_00_00.set_text("파일수 : ");
                p.Static00_00_00.set_fittocontents("width");
                p.Static00_00_00.move("88","123","48","46",null,null);

                p.Static01_00.set_taborder("16");
                p.Static01_00.set_text("0");
                p.Static01_00.set_fittocontents("width");
                p.Static01_00.move("165","143","9","46",null,null);

                p.Static02.set_taborder("17");
                p.Static02.set_text("개");
                p.Static02.set_fittocontents("width");
                p.Static02.move("293","131","13","46",null,null);

                p.panFileNum.set_taborder("18");
                p.panFileNum.set_flexgrow("1");
                p.panFileNum.set_horizontalgap("4");
                p.panFileNum.move("20","190","305","46",null,null);

                p.btn_del_file_1.set_taborder("19");
                p.btn_del_file_1.set_text("전체파일삭제");
                p.btn_del_file_1.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_1.set_fittocontents("width");
                p.btn_del_file_1.move("512","135","125","34",null,null);

                p.panBtnDel.set_taborder("20");
                p.panBtnDel.set_flexcrossaxisalign("center");
                p.panBtnDel.set_flexmainaxisalign("end");
                p.panBtnDel.set_flexgrow("1");
                p.panBtnDel.move("517","141","305","46",null,null);

                p.Panel00_00_00.set_taborder("21");
                p.Panel00_00_00.move("20","51","100%","46",null,null);

                p.Grid00_00.set_taborder("22");
                p.Grid00_00.set_binddataset("dsFile1");
                p.Grid00_00.set_autofittype("col");
                p.Grid00_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00.set_nodatatext("파일이 없습니다.");
                p.Grid00_00.move("20.00","114","100%","40",null,null);

                p.staSubTitle01.set_taborder("24");
                p.staSubTitle01.set_text("협조처리");
                p.staSubTitle01.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle01.move("10","30","100%","50",null,null);

                p.btnCoprPrcs.set_taborder("25");
                p.btnCoprPrcs.set_cssclass("btn_WF_ACMinus");
                p.btnCoprPrcs.set_visible("true");
                p.btnCoprPrcs.move("98","16","34","34",null,null);

                p.Panel02_02_01.set_taborder("26");
                p.Panel02_02_01.set_cssclass("pal_WF_TitBtnBg");
                p.Panel02_02_01.set_horizontalgap("10");
                p.Panel02_02_01.set_spacing("0px 10px 0px 10px");
                p.Panel02_02_01.set_flexcrossaxisalign("center");
                p.Panel02_02_01.set_flexmainaxisalign("end");
                p.Panel02_02_01.move("1157","30","132","50",null,null);

                p.panCoprPrcs.set_taborder("27");
                p.panCoprPrcs.set_flexcrossaxisalign("end");
                p.panCoprPrcs.set_minheight("70");
                p.panCoprPrcs.set_maxheight("");
                p.panCoprPrcs.move("1353","4405","100.00%","70",null,null);

                p.divCoprPrcs.set_taborder("28");
                p.divCoprPrcs.set_text("Div01");
                p.divCoprPrcs.set_formscrollbartype("none none");
                p.divCoprPrcs.set_formscrolltype("none");
                p.divCoprPrcs.set_fittocontents("height");
                p.divCoprPrcs.getSetter("updtlprocsetccn").set("FICA");
                p.divCoprPrcs.move("0","3987","100.00%","412",null,null);
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
                p.Grid00_00.set_nodatatext("데이타가 없습니다.");
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
                p.staSubTitle02_00_03.set_taborder("16");
                p.staSubTitle02_00_03.set_text("서비스 흐름 및 작업방법 안내(타이틀미정)");
                p.staSubTitle02_00_03.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_03.move("0","-53","50%","50",null,null);

                p.btnMinTitle.set_taborder("17");
                p.btnMinTitle.set_cssclass("btn_WF_ACMinus");
                p.btnMinTitle.move("460","-55","34","34",null,null);

                p.Panel01_02_03.set_taborder("18");
                p.Panel01_02_03.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_03.set_spacing("0px 10px");
                p.Panel01_02_03.set_horizontalgap("10");
                p.Panel01_02_03.set_flexcrossaxisalign("center");
                p.Panel01_02_03.set_flexmainaxisalign("end");
                p.Panel01_02_03.move("505","-53","50%","50",null,null);

                p.sub_tit00.set_taborder("19");
                p.sub_tit00.set_background("#ffffff");
                p.sub_tit00.set_flexcrossaxisalign("end");
                p.sub_tit00.move("955","18","100%","58",null,null);

                p.divInfoGuide.set_taborder("3");
                p.divInfoGuide.set_text("서비스 흐름 및 작업방법 안내");
                p.divInfoGuide.set_cssclass("div_WF_InfoGuide");
                p.divInfoGuide.set_minheight("300");
                p.divInfoGuide.set_maxheight("");
                p.divInfoGuide.move("1660.00","262","100%","300",null,null);

                p.sub_tit01.set_taborder("7");
                p.sub_tit01.set_background("#ffffff");
                p.sub_tit01.set_flexcrossaxisalign("end");
                p.sub_tit01.move("1630","674","100%","66",null,null);

                p.Div01.set_taborder("0");
                p.Div01.set_text("Div00");
                p.Div01.set_cssclass("div_WF_Bg");
                p.Div01.set_fittocontents("height");
                p.Div01.move("0","0","100%","865",null,null);

                p.sub_tit03_00.set_taborder("23");
                p.sub_tit03_00.set_background("#ffffff");
                p.sub_tit03_00.set_flexcrossaxisalign("end");
                p.sub_tit03_00.move("1630","674","100%","66",null,null);

                p.div02.set_taborder("24");
                p.div02.set_text("div00");
                p.div02.set_fittocontents("height");
                p.div02.move("52","1587","100%","200",null,null);

                p.sub_tit03.set_taborder("11");
                p.sub_tit03.set_background("#ffffff");
                p.sub_tit03.set_flexcrossaxisalign("end");
                p.sub_tit03.move("1630","674","100%","66",null,null);

                p.Div03.set_taborder("1");
                p.Div03.set_text("Div00");
                p.Div03.set_cssclass("div_WF_Bg");
                p.Div03.set_fittocontents("height");
                p.Div03.move("0","1409.08","100%","600",null,null);

                p.staSubTitle02_00_02_00_00.set_taborder("25");
                p.staSubTitle02_00_02_00_00.set_text("총괄책임자 및 시설관리책임자");
                p.staSubTitle02_00_02_00_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_02_00_00.move("1630.00","690","50%","50",null,null);

                p.Panel01_02_02_00_00.set_taborder("26");
                p.Panel01_02_02_00_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_02_00_00.set_spacing("0px 10px");
                p.Panel01_02_02_00_00.set_horizontalgap("10");
                p.Panel01_02_02_00_00.set_flexcrossaxisalign("center");
                p.Panel01_02_02_00_00.set_flexmainaxisalign("end");
                p.Panel01_02_02_00_00.move("2340.00","690","50%","50",null,null);

                p.sub_tit05_00.set_taborder("27");
                p.sub_tit05_00.set_background("#ffffff");
                p.sub_tit05_00.set_flexcrossaxisalign("end");
                p.sub_tit05_00.move("1630","674","100%","66",null,null);

                p.Button00_00_02_00_00.set_taborder("29");
                p.Button00_00_02_00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_02_00_00.move("2890.00","692","34","34",null,null);

                p.div00.set_taborder("28");
                p.div00.set_text("div00");
                p.div00.set_fittocontents("height");
                p.div00.move("38","2718","100%","192",null,null);

                p.sub_tit05.set_taborder("15");
                p.sub_tit05.set_background("#ffffff");
                p.sub_tit05.set_flexcrossaxisalign("end");
                p.sub_tit05.move("1630","674","100%","66",null,null);

                p.Div05.set_taborder("2");
                p.Div05.set_text("Div00");
                p.Div05.set_cssclass("div_WF_Bg");
                p.Div05.set_fittocontents("height");
                p.Div05.move("0","30","100%","1180.99",null,null);

                p.staSubTitle02_00.set_taborder("4");
                p.staSubTitle02_00.set_text("신청자 정보");
                p.staSubTitle02_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00.move("1630.00","690","50%","50",null,null);

                p.Button00_00.set_taborder("5");
                p.Button00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00.move("2890.00","692","34","34",null,null);

                p.Panel01_02.set_taborder("6");
                p.Panel01_02.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02.set_spacing("0px 10px");
                p.Panel01_02.set_horizontalgap("10");
                p.Panel01_02.set_flexcrossaxisalign("center");
                p.Panel01_02.set_flexmainaxisalign("end");
                p.Panel01_02.move("2340.00","690","50%","50",null,null);

                p.staSubTitle02_00_01.set_taborder("8");
                p.staSubTitle02_00_01.set_text("고객정보");
                p.staSubTitle02_00_01.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_01.move("1630.00","690","50%","50",null,null);

                p.Button00_00_01.set_taborder("9");
                p.Button00_00_01.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_01.move("2890.00","692","34","34",null,null);

                p.Panel01_02_01.set_taborder("10");
                p.Panel01_02_01.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_01.set_spacing("0px 10px");
                p.Panel01_02_01.set_horizontalgap("10");
                p.Panel01_02_01.set_flexcrossaxisalign("center");
                p.Panel01_02_01.set_flexmainaxisalign("end");
                p.Panel01_02_01.move("2340.00","690","50%","50",null,null);

                p.staSubTitle02_00_02_00.set_taborder("12");
                p.staSubTitle02_00_02_00.set_text("인계인수 신청을 위한 개인정보 수집 이용동의서");
                p.staSubTitle02_00_02_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_02_00.move("1630.00","690","50%","50",null,null);

                p.Button00_00_02_00.set_taborder("13");
                p.Button00_00_02_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_02_00.move("2890.00","692","34","34",null,null);

                p.Panel01_02_02_00.set_taborder("14");
                p.Panel01_02_02_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_02_00.set_spacing("0px 10px");
                p.Panel01_02_02_00.set_horizontalgap("10");
                p.Panel01_02_02_00.set_flexcrossaxisalign("center");
                p.Panel01_02_02_00.set_flexmainaxisalign("end");
                p.Panel01_02_02_00.move("2340.00","690","50%","50",null,null);

                p.staSubTitle02_00_01_00.set_taborder("20");
                p.staSubTitle02_00_01_00.set_text("신청위치정보");
                p.staSubTitle02_00_01_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_01_00.move("1630.00","690","50%","50",null,null);

                p.Button00_00_01_00.set_taborder("21");
                p.Button00_00_01_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_01_00.move("2890.00","692","34","34",null,null);

                p.Panel01_02_01_00.set_taborder("22");
                p.Panel01_02_01_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_01_00.set_spacing("0px 10px");
                p.Panel01_02_01_00.set_horizontalgap("10");
                p.Panel01_02_01_00.set_flexcrossaxisalign("center");
                p.Panel01_02_01_00.set_flexmainaxisalign("end");
                p.Panel01_02_01_00.move("2340.00","690","50%","50",null,null);

                p.staSubTitle06_00_00.set_taborder("30");
                p.staSubTitle06_00_00.set_text("사전미팅내역");
                p.staSubTitle06_00_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle06_00_00.move("1630.00","690","50%","50",null,null);

                p.Button01_00_00.set_taborder("31");
                p.Button01_00_00.set_cssclass("btn_WF_ACMinus");
                p.Button01_00_00.move("2890.00","692","34","34",null,null);

                p.Panel01_00_00.set_taborder("32");
                p.Panel01_00_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_00_00.set_spacing("0px 10px");
                p.Panel01_00_00.set_horizontalgap("10");
                p.Panel01_00_00.set_flexcrossaxisalign("center");
                p.Panel01_00_00.set_flexmainaxisalign("end");
                p.Panel01_00_00.move("2340.00","690","50%","50",null,null);

                p.sub_tit07.set_taborder("33");
                p.sub_tit07.set_background("#ffffff");
                p.sub_tit07.set_flexcrossaxisalign("end");
                p.sub_tit07.move("1630","674","100%","70",null,null);

                p.Div07.set_taborder("34");
                p.Div07.set_text("Div00");
                p.Div07.set_cssclass("div_WF_Bg");
                p.Div07.set_fittocontents("height");
                p.Div07.move("0","30","100%","1550",null,null);

                p.staSubTitle06_02.set_taborder("35");
                p.staSubTitle06_02.set_text("인계인수 정보");
                p.staSubTitle06_02.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle06_02.move("1630.00","690","50%","50",null,null);

                p.Button01_02.set_taborder("36");
                p.Button01_02.set_cssclass("btn_WF_ACMinus");
                p.Button01_02.move("2890.00","692","34","34",null,null);

                p.Panel01_03.set_taborder("37");
                p.Panel01_03.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_03.set_spacing("0px 10px");
                p.Panel01_03.set_horizontalgap("10");
                p.Panel01_03.set_flexcrossaxisalign("center");
                p.Panel01_03.set_flexmainaxisalign("end");
                p.Panel01_03.move("2340.00","690","50%","50",null,null);

                p.sub_tit09.set_taborder("38");
                p.sub_tit09.set_background("#ffffff");
                p.sub_tit09.set_flexcrossaxisalign("end");
                p.sub_tit09.set_visible("true");
                p.sub_tit09.move("1630","674","100%","70",null,null);

                p.Div09.set_taborder("39");
                p.Div09.set_text("Div00");
                p.Div09.set_cssclass("div_WF_Bg");
                p.Div09.set_fittocontents("height");
                p.Div09.set_visible("true");
                p.Div09.move("0","30","100%","1965",null,null);

                p.staSubTitle06_03.set_taborder("40");
                p.staSubTitle06_03.set_text("처리내역");
                p.staSubTitle06_03.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle06_03.move("1630.00","690","50%","50",null,null);

                p.Button01_03.set_taborder("41");
                p.Button01_03.set_cssclass("btn_WF_ACMinus");
                p.Button01_03.move("2890.00","692","34","34",null,null);

                p.Panel01_04.set_taborder("42");
                p.Panel01_04.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_04.set_spacing("0px 10px");
                p.Panel01_04.set_horizontalgap("10");
                p.Panel01_04.set_flexcrossaxisalign("center");
                p.Panel01_04.set_flexmainaxisalign("end");
                p.Panel01_04.move("2340.00","690","50%","50",null,null);

                p.sub_tit10.set_taborder("43");
                p.sub_tit10.set_background("#ffffff");
                p.sub_tit10.set_flexcrossaxisalign("end");
                p.sub_tit10.set_visible("true");
                p.sub_tit10.move("1630","674","100%","70",null,null);

                p.Div10.set_taborder("44");
                p.Div10.set_text("Div00");
                p.Div10.set_cssclass("div_WF_Bg");
                p.Div10.set_fittocontents("height");
                p.Div10.set_visible("true");
                p.Div10.move("0","30","100%","941",null,null);

                p.staSubTitle06_05.set_taborder("45");
                p.staSubTitle06_05.set_text("룸번호 열쇠정보");
                p.staSubTitle06_05.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle06_05.move("1630.00","690","50%","50",null,null);

                p.Button01_05.set_taborder("46");
                p.Button01_05.set_cssclass("btn_WF_ACMinus");
                p.Button01_05.move("2890.00","692","34","34",null,null);

                p.Panel01_06.set_taborder("47");
                p.Panel01_06.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_06.set_spacing("0px 10px");
                p.Panel01_06.set_horizontalgap("10");
                p.Panel01_06.set_flexcrossaxisalign("center");
                p.Panel01_06.set_flexmainaxisalign("end");
                p.Panel01_06.move("2340.00","690","50%","50",null,null);

                p.sub_tit12.set_taborder("48");
                p.sub_tit12.set_background("#ffffff");
                p.sub_tit12.set_flexcrossaxisalign("end");
                p.sub_tit12.set_visible("false");
                p.sub_tit12.move("1630","674","100%","70",null,null);

                p.Div12.set_taborder("49");
                p.Div12.set_text("Div00");
                p.Div12.set_cssclass("div_WF_Bg");
                p.Div12.set_fittocontents("height");
                p.Div12.set_visible("false");
                p.Div12.move("0","8285","100%","232",null,null);
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
                p.btn00_00.set_text("신청위치정보");
                p.btn00_00.set_cssclass("btn_WF_Quick");
                p.btn00_00.move("17.00","btn00:0","100%","45",null,null);

                p.btn00_00_00.set_taborder("2");
                p.btn00_00_00.set_text("고객정보");
                p.btn00_00_00.set_cssclass("btn_WF_Quick");
                p.btn00_00_00.move("17.00","110","100%","45",null,null);

                p.btn00_00_00_00.set_taborder("3");
                p.btn00_00_00_00.set_text("총괄책임자및시설관리책임자");
                p.btn00_00_00_00.set_cssclass("btn_WF_Quick");
                p.btn00_00_00_00.move("17.00","110","100%","45",null,null);

                p.btn00_00_00_00_00.set_taborder("4");
                p.btn00_00_00_00_00.set_text("사전미팅내역");
                p.btn00_00_00_00_00.set_cssclass("btn_WF_Quick");
                p.btn00_00_00_00_00.move("17.00","110","100%","45",null,null);

                p.btn00_01.set_taborder("5");
                p.btn00_01.set_text("인계인수정보");
                p.btn00_01.set_cssclass("btn_WF_Quick");
                p.btn00_01.move("17","20","100%","45",null,null);

                p.btn00_00_00_00_00_00.set_taborder("6");
                p.btn00_00_00_00_00_00.set_text("처리내역");
                p.btn00_00_00_00_00_00.set_cssclass("btn_WF_Quick");
                p.btn00_00_00_00_00_00.move("17.00","110","100%","45",null,null);

                p.btn00_00_00_00_00_00_00.set_taborder("7");
                p.btn00_00_00_00_00_00_00.set_text("협조처리");
                p.btn00_00_00_00_00_00_00.set_cssclass("btn_WF_Quick");
                p.btn00_00_00_00_00_00_00.move("17.00","110","100%","45",null,null);

                p.btn00_01_00.set_taborder("8");
                p.btn00_01_00.set_text("룸번호열쇠정보");
                p.btn00_01_00.set_cssclass("btn_WF_Quick");
                p.btn00_01_00.move("17","20","100%","45",null,null);
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

                p.btn00_00_00_00.set_fittocontents("width");
                p.btn00_00_00_00.set_cssclass("btn_WF_QuickM");

                p.btn00_00_00_00_00.set_fittocontents("width");
                p.btn00_00_00_00_00.set_cssclass("btn_WF_QuickM");
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
                p.set_titletext("인계인수신청서작성");

                p.divTitle.set_taborder("3");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_cssclass("div_WF_QuickFrBg");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("height");
                p.divForm.move("0","divTitle:10",null,"9200","60",null);

                p.divQuick.set_taborder("1");
                p.divQuick.set_text("div00");
                p.divQuick.set_cssclass("div_WF_QuickMenu");
                p.divQuick.set_fittocontents("height");
                p.divQuick.move(null,"62","296","500","62",null);

                p.divBtn.set_taborder("2");
                p.divBtn.set_text("div00");
                p.divBtn.set_cssclass("div_WF_QuickBtnBg");
                p.divBtn.set_fittocontents("height");
                p.divBtn.move(null,"divQuick:0","296","281","62",null);

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
            obj = new BindItem("item3","divForm.form.Div01.form.edt00_01_00_00_01","value","dsCstFcltOperMst","mblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.Div01.form.divEdtPop00_00_00.form.Edit00","value","dsCstFcltOperMst","aplcntId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divForm.form.Div01.form.edt00_01","value","dsCstFcltOperMst","coNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.Div01.form.rdoCtrtChcYn","value","dsCstFcltOperMst","ctrtChcYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.div02.form.cmbPstnSe","value","dsCstFcltOperMst","pstnSeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.div02.form.cmbPstnSeCrtr","value","dsCstFcltOperMst","pstnSeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.div02.form.edtHwrtInptRnb","value","dsCstFcltOperMst","hwrtInptRnb");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.Div01.form.edtFcltNm","value","dsCstFcltOperMst","fcltNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.div00.form.rdoRtpyrSmYn","value","dsCstFcltOperMst","rbprsnFcltMngRbprsnYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divForm.form.div00.form.edtRbprsnFcltMngRbprsnNm","value","dsCstFcltOperMst","rbprsnFcltMngRbprsnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divForm.form.div00.form.edtRbprsnFcltMngRbprsnMblTelno","value","dsCstFcltOperMst","rbprsnFcltMngRbprsnMblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divForm.form.Div01.form.edtAplyNo","value","dsCstFcltOperMst","aplyNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divForm.form.Div01.form.edtCtrtNo","value","dsCstFcltOperMst","hwrtInptCtrtNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divForm.form.div02.form.cboRgn","value","dsCstFcltOperMst","bldgSeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divForm.form.div02.form.edtPstnInfoRnb","value","dsCstFcltOperMst","pstnInfoRnb");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divForm.form.Div09.form.calAcptnHnovDt","value","dsCstFcltOperMst","acptnHnovDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divForm.form.Div10.form.panCoprPrcs","visible","dsAtrb","vsCoprPrcs");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divForm.form.Div10.form.divCoprPrcs.form.panBgncstAprvRvw","visible","dsAtrb","vsBgncstAprvRvw");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divForm.form.Div10.form.divCoprPrcs.form.panBgncstAprvRvwBtn","visible","dsAtrb","vsBgncstAprvRvwEdtr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divForm.form.div02.form.cmbRgnSeCrtr","value","dsCstFcltOperMst","bldgSeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divForm.form.Div01.form.divEdtPop00.form.edtCtrtNm","value","dsCstFcltOperMst","ctrtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divForm.form.Div01.form.divEdtPop00_00.form.Edit00","value","dsCstFcltOperMst","clmCustCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divForm.form.Div01.form.edt00_01_00_00","value","dsCstFcltOperMst","clmAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divForm.form.Div05.form.txtCnvyMttr","value","dsCstFcltOperMst","cnvyMttrCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divForm.form.Div07.form.Calendar00","value","dsRgnSeList","cycl1BfhdMetgYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divForm.form.Div07.form.Calendar03_01","value","dsCstFcltOperMst","cycl2BfhdMetgYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divForm.form.Div07.form.Calendar06_01","value","dsCstFcltOperMst","cycl3BfhdMetgYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divForm.form.Div07.form.edt01_01","value","dsRgnSeList","cycl1BfhdMetgCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divForm.form.Div07.form.edt04_01","value","dsCstFcltOperMst","cycl2BfhdMetgCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divForm.form.Div07.form.edt07_01","value","dsCstFcltOperMst","cycl3BfhdMetgCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divForm.form.Div09.form.staLabel00_00","value","dsCstFcltOperMst","flofSttsCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divForm.form.Div09.form.edt01_01","value","dsCstFcltOperMst","wlstrtSttsCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divForm.form.Div09.form.edt02_01","value","dsCstFcltOperMst","cilinSttsCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divForm.form.Div09.form.edt03_01","value","dsCstFcltOperMst","archDdlnEtcSttsCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divForm.form.Div09.form.edt04_01","value","dsCstFcltOperMst","mchnSttsCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divForm.form.Div09.form.edt05_01","value","dsCstFcltOperMst","elctySttsCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divForm.form.Div09.form.edt06_01","value","dsCstFcltOperMst","cmnctSttsCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divForm.form.Div09.form.edt07_01","value","dsCstFcltOperMst","fiftSttsCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divForm.form.Div09.form.edt08_01","value","dsCstFcltOperMst","scrtySttsCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divForm.form.Div09.form.edt09_01","value","dsCstFcltOperMst","wtspSttsCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divForm.form.Div09.form.edt09_01_00","value","dsCstFcltOperMst","faltFcltEtcSttsCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divForm.form.Div09.form.edt11_01","value","dsCstFcltOperMst","etrntMntnMtnctmNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divForm.form.Div09.form.edt11_02","value","dsCstFcltOperMst","etrntNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divForm.form.Div09.form.edt12_01","value","dsCstFcltOperMst","hvprsnOgdpNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divForm.form.Div09.form.edt12_02","value","dsCstFcltOperMst","hvprsnJbpsNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divForm.form.Div09.form.edt13_1","value","dsCstFcltOperMst","hvprsnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divForm.form.Div09.form.edt14_01","value","dsCstFcltOperMst","acptrOgdpNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","divForm.form.Div09.form.edt14_02","value","dsCstFcltOperMst","acptrJbpsNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","divForm.form.Div09.form.edt15","value","dsCstFcltOperMst","acptrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","divForm.form.Div09.form.txa16","value","dsCstFcltOperMst","rmrkCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","divForm.form.Div10.form.txa00_01","value","dsCstFcltOperMst","cnvyMttrCn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.addIncludeScript("LIF052M00.xfdl","xjs::TaskCom.xjs");
        this.registerScript("LIF052M00.xfdl", function() {
        /******************************************************************************
        *  PcMdi 프로젝트
        *  @FileName 	LIF052M00.xfdl
        *  @Creator 	김진섭
        *  @CreateDate 	2024/12/07
        *  @Desction    입주>인계인수신청>인계인수신청
        ******************* 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/12/07				김진섭							최초생성
        ********************************************************************************/
        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;  // 업무공통
        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();

        this.aplyNo = "";	// 신청서번호(화면 로드시 신청서 번호가 없으면 신규등록 가능)
        this.aplySeCd = "TSPTSC005"; // 신청구분코드
        this.jobCd = "TAS00342"; // 작업코드(기본값 TAS00342 : 신청서작성)

        this.btnDiv = this.divBtn; // 공통버튼영역 Div

        this.rdoPaySe = "0"; // 라디오 버튼 클릭 시 1로 바꿔줌. 로드시 이벤트때 적용.
        this.cboRgnSe = "0"; // 콤보 아이템 클릭 시 1로 바꿔줌. 로드시 이벤트때 적용.

        this.vStrSvcId  = ""; // 서비스ID
        this.vStrSvcUrl = ""; // 서비스URL

        //TODO확인 위치구분 항목에서 지역코드를 화물터미널지역,기타지역으로 선택할 경우 - 사전미팅확인 업무
        this.cgoTmnEtcRgn = ["TSPLOCTSC160","TSPLOCTSC050","TSPLOCTSC170","TSPLOCTSC180"
                            ,"TSPLOCTSC110","TSPLOCTSC190","TSPLOCTSC200","TSPLOCTSC060"
        					,"TSPLOCTSC210","TSPLOCTSC220"];

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
        	this.cfnComCdLoad({ id:"tspLocCdLoad", cbf:"fnCallback", dsTspLocCd:"TSPLOC:S" }); // 지역구분코드
         	this.cfnComCdLoad({ id:"comBldgSeSearch", cbf:"fnCallback", dsBldgSeList:"TSPLOC:S" }); // 건물구분코드(S:"선택"추가 옵션)

        	// 신청서 번호 있는지 체크 없으면 신규등록
        	this.aplyNo = this.getOwnerFrame().aplyNo;   // 신청번호
        	//this.aplyNo = "TSC2401_06167";   // 신청번호

        	trace("a44_aplyNo==>" + this.aplyNo);
        	if (this.gfnIsNull(this.aplyNo)) {
        	    var nRow = this.dsCstFcltOperMst.addRow();

        		//신청자정보 영역
        		this.dsCstFcltOperMst.setColumn(nRow, "mblTelno"	, this.gvMblTelNo);	// 등록자휴대전화번호
        		this.dsCstFcltOperMst.setColumn(nRow, "aplcntId"		, this.gvUserId);	// 신청자id
        		this.dsCstFcltOperMst.setColumn(nRow, "aplcntNm"		, this.gvUserNm);	// 신청자명
        		this.dsCstFcltOperMst.setColumn(nRow, "aplcntInstCd"	, this.gvCoId);		// 신청자기관코드
        		//this.dsCstFcltOperMst.setColumn(nRow, "aplcntInstNm"	, this.gvCoNm);		// 신청자기관명
        		this.dsCstFcltOperMst.setColumn(nRow, "coNm"			, this.gvCoNm);		// 신청자기관명
        		this.dsCstFcltOperMst.setColumn(nRow, "aplcntDeptCd"	, this.gvDeptId);	// 신청자부서코드
        		this.dsCstFcltOperMst.setColumn(nRow, "aplySeCd"		, this.aplySeCd);	// 신청구분코드
                this.dsCstFcltOperMst.setColumn(nRow, "ctrtChcYn"		, "0");	//게약선택구분(0:수기입력)

        		this.divForm.form.div02.form.cmbPstnSeCrtr.readonly = true; //계약번호 위치구분2
        		this.divForm.form.div02.form.cmbPstnSe.readonly = true; //수기입력 위치구분2
        		this.divForm.form.Div01.form.staLabel01_02_01.visible = true;//계약번호(수기입력) 항목
        		this.divForm.form.Div01.form.edtCtrtNo.visible = true;//계약번호(수기입력) 항목
        		this.divForm.form.div02.form.Panel04.visible = false;//위치구분(계약선택) 항목
        		this.divForm.form.div02.form.Panel04_PstnSeCd.visible = true;//위치구분(수기입력) 항목
        		this.divForm.form.Div05.form.panFile01.visible = false;//총괄책임자 및 시설관리책임자 성명 항목
        		this.divForm.form.Div01.form.Panel00.visible = false;//신청번호 항목
        		this.divForm.form.Div01.form.Panel00_01.visible = false;//청구고객코드, 청구주소
        		this.divForm.form.div00.form.rdoRtpyrSmYn.value = "";//총괄책임자 및 시설관리책임자 선택 항목
        		this.divForm.form.Div01.form.staLabel01_02_00.visible = false;//계약명 타이틀 항목
        		this.divForm.form.Div01.form.divEdtPop00.visible = false;//계약명 정보 항목
        		this.divForm.form.sub_tit03.visible = false//고객정보 타이틀
        		this.divForm.form.Div03.visible = false//고객정보 항목영역

        		//인계인수 신청을 위한 개인정보 수집 이용동의서 subtitle05
        		this.divForm.form.sub_tit05.visible = false;
        		//개인정보 수집 동의서 div
        		this.divForm.form.Div05.form.divPrvcWtcs.visible = false;

        		//계약선택여부 라디오 버튼
        		this.divForm_Div01_rdoCtrtChcYn_onitemchanged();

        		// 해당 TASK ID로 버튼 자동 생성 -> 추후에 신청번호가 있는지 없는지 체크해서 task id 박아넣어줘야함. 현재는 신청서 작성으로 했음.
        		this.cfnBtnCrt({ crtTrgt:this.divBtn, cbf:"fnCallback", lnkgEvnt:this.btn_onclick, inqCnd : { jobPrcsPrgrsSeCd:this.jobCd} });

        	} else {

        		// 부가시설물 마스터 조회
        		this.fnSearch(this.aplyNo);
        	}

        	trace("정상!!!");
        };


        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function (paramAplyNo)
        {
        	// 조회
        	this.fnSearch(paramAplyNo);
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
        	this.fnSave(this.vStrSvcId, this.vStrSvcUrl);
        };

        //추가버튼1
        this.cfnbtnAdd1 = function ()
        {
        	this.gfnAlert("msg.confirm", ["추가버튼1입니다."]);
        	return;
        };

        //추가버튼2
        this.cfnbtnAdd2 = function ()
        {
        	this.gfnAlert("msg.confirm", ["추가버튼2입니다."]);
        	return;
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        /**************************************************************************
         * @name : fnSearch
         * @description : 조회
         ***************************************************************************/
        this.fnSearch = function(paramAplyNo)
        {
        	if(this.dsSearch.getRowCount() > 0){
        		this.dsSearch.clearData();

        	}

        	this.dsSearch.addRow();
        	this.dsSearch.setColumn(0, "aplyNo", paramAplyNo);

        	var strSvcId    = "selectHnovAcptnAplyInstlPrlgAplyInq";
        	var strSvcUrl   = "hnovAcptnAply/selectHnovAcptnAplyInstlPrlgAplyInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsCstFcltOperMst=dsCstFcltOperMst dsCnvyMttr=dsCnvyMttr dsAtfl=dsAtfl dsMst=dsMst";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /**************************************************************************
         * @name : fnSave
         * @description : 수도사용목록 저장
         ***************************************************************************/
        this.fnSave = function(vStrSvcId, vStrSvcUrl)
        {

        	var strSvcId    = vStrSvcId;
        	var strSvcUrl   = vStrSvcUrl;
        	var inData      = "";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	//console.log("zz = " + this.dsMst.saveXML());
        	//console.log("zz = " + this.dsCstFcltOperMst.saveXML());

            inData    = "dsWfInfo=" + this.FV_DS_OTPT_WORK_FLOW_INFO + ":U"  // WorkFlow 정보
        			          + " dsMst=dsMst:U"                                     // Master DS
         			          + " dsCstFcltOperMst=dsCstFcltOperMst:U"     		 // 전동차목록 DS
        			          + " dsCnvyMttr=dsCnvyMttr"                           // 전달사항 DS
        			          + " dsAtfl=dsAtfl:U";                                   // 첨부파일 DS

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        /**************************************************************************
         * @name : fnCallback
         * @description : 서비스 콜백
         ***************************************************************************/
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {

        	trace("@@fnCallback errorCode==>" + errorCode + " ; " +"svcID==>" + svcID + " ; " + "errorMsg==>" + errorMsg);
        	trace("dddd===>" + this.divForm.form.Div10.form.divCoprPrcs.form.btnBgncstRvwInq.name);
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "comMailSearch" : // 메일코드 조회
        			//this.cfnComCdLoad({ id:"tspLocCdLoad", cbf:"fnCallback", dsTspLocCd:"TSPLOC:S" }); // 지역구분코드

        			break;

        		case "getAplySeNm" : // 신청구분명 조회
        			// 신청정보 세팅
        			this.divForm.form.Div01.form.edtAplySe.value = this.cfnGvbkAplySeNm();

        			break;

        		case "tspLocCdLoad" : // 지역구분코드
        			//this.dsBldgSeList.copyData(this.dsTspLocCd);
        			//this.dsBldgSeList.filter("cdId == ''");
        			this.dsTspLocCd.filter("uprCd == 'TSPLOCWAT' || cdId == ''");

        // 			// 신청서 번호 있는지 체크 없으면 신규등록
        // 			this.aplyNo = this.getOwnerFrame().aplyNo;   // 신청번호
        // 			// this.aplyNo = "WAT2411_00002";
        //
        // 			if (this.gfnIsNull(this.aplyNo)) {
        // 				var nRow = this.dsCstFcltOperMst.addRow();
        // 				alert("aa222==>" + this.gvUserNm);
        // 				this.dsCstFcltOperMst.setColumn(nRow, "aplcntId"		, this.gvUserId);	// 신청자id
        // 				this.dsCstFcltOperMst.setColumn(nRow, "aplcntNm"		, this.gvUserNm);	// 신청자명
        // 				this.dsCstFcltOperMst.setColumn(nRow, "aplcntInstCd"	, this.gvCoId);		// 신청자기관코드
        // 				this.dsCstFcltOperMst.setColumn(nRow, "aplcntInstNm"	, this.gvCoNm);		// 신청자기관명
        // 				this.dsCstFcltOperMst.setColumn(nRow, "aplcntDeptCd"	, this.gvDeptId);	// 신청자부서코드
        // 				this.dsCstFcltOperMst.setColumn(nRow, "aplcntDeptNm"	, this.gvDeptNm);	// 신청자부서명
        // 				this.dsCstFcltOperMst.setColumn(nRow, "aplySeCd"		, this.aplySeCd);	// 신청구분코드
        // 				this.dsCstFcltOperMst.setColumn(nRow, "mblTelno"		, this.gvMblTelNo);	// 휴대전화번호
        //
        // 				trace("vvvvvvvvv11===>" + this.dsCstFcltOperMst.saveXML());
        // 				// 해당 TASK ID로 버튼 자동 생성 -> 추후에 신청번호가 있는지 없는지 체크해서 task id 박아넣어줘야함. 현재는 신청서 작성으로 했음.
        // 				this.cfnBtnCrt({ crtTrgt:this.divBtn, cbf:"fnCallback", lnkgEvnt:this.btn_onclick, inqCnd : { jobPrcsPrgrsSeCd:this.jobCd} });
        //
        // 			} else {
        // 				// 수도사용 조회
        // 				this.cfnSearch(this.aplyNo);
        //
        // 			}

        			break;

        		case "_cfnBtnCrt_" : // 버튼 생성 callback
        		trace("vvvv__cfnBtnCrt_");
        			// 신청서작성 - 신청취소 : 신규 신청일때는 안보여줌.
        			if(this.jobCd == "TAS00342" && this.gfnIsNull(this.aplyNo)){
        				Array.from(this.btnDiv.form.components).forEach(oComp => {
        					if(oComp.id == "CTL00990"){
        						oComp.visible = false;

        					}
        				});
        			}

        			if(this.jobCd == "TAS00312"){
        			   // 화물터미널지역 관련 접수버튼 노출 분기
        				var rgnIncTf = this.cgoTmnEtcRgn.includes(this.dsCstFcltOperMst.getColumn(0,"pstnSeCd"));
        				trace("rgnIncTf==>" + rgnIncTf);
        				this.divBtn.form.CTL00406.visible = rgnIncTf; // 사전미팅확인
        				this.divBtn.form.CTL11132.visible = !rgnIncTf;    // 담당부서확인요청
        			}

        			break;

        		case "selectHnovAcptnAplyInstlPrlgAplyInq": //조회
        		//alert("ddd11");
        			if(this.dsCstFcltOperMst.getRowCount() > 0){
        				this.jobCd = this.dsCstFcltOperMst.getColumn(0, "taskCd");

        			}

        			if(this.dsCnvyMttr.getRowCount() < 1){
        				this.dsCnvyMttr.addRow();

        			}
        			//alert("ddd22");
        			//alert("this.jobCd = " + this.jobCd);
        			// 해당 TASK ID로 버튼 자동 생성
        			this.cfnBtnCrt({ crtTrgt:this.divBtn, cbf:"fnCallback", lnkgEvnt:this.btn_onclick, inqCnd : { jobPrcsPrgrsSeCd:this.jobCd} });
        			//alert("ddd33");
        			// 화면 세팅
        			this.fnScrnSetting();

        			//계약선택여부 라디오 버튼
        			this.divForm_Div01_rdoCtrtChcYn_onitemchanged();

        			//신청자정보와 동일  라디오 버튼
        			this.divForm_div00_rdoRtpyrSmYn_onitemchanged();

        			//협조처리목록 조회
        			//kjs this.divForm.form.Div10.form.divCoprPrcs.form.btnBgncstRvwStrg.click();
        			this.fnSrvcCall(this.divForm.form.Div10.form.divCoprPrcs.form.btnBgncstRvwInq.name);

        			break;

        		case "saveHnovAcptnAplyInstlPrlgAplyStrg" :
        			alert("저장 처리가 정상적으로 완료되었습니다");
        		    //this.close();
        			this.reload();

        			//this.gfnAlertMsg("saveAlert", "저장", this.objApp.getVariable("gvRetMsg"), "msgCallback");

        			break;

        		case "comBldgSeSearch" : // 건물구분 조회
        			// 건물구분 제한값 'TSPLOCTSC010', 'TSPLOCTSC070', 'TSPLOCTSC020' ,'TSPLOCTSC030' ,'TSPLOCTSC090'
        			//this.dsBldgSeList.filter("cdId == 'TSPLOCTSC010' || cdId == 'TSPLOCTSC020' || cdId == 'TSPLOCTSC070'");

        			// 전체 조회를 위해 [선택] 추가
        			//this.dsBldgSeList.insertRow(0);
        			//this.dsBldgSeList.setColumn(0, "cdId", "");
        			//this.dsBldgSeList.setColumn(0, "cdNm", "[건물구분]");

        			this.divForm.form.div02.form.cmbPstnSe.set_index(0);

        			break;

        // 		case this.RaonkUpload.RAONKUPLOAD_UploadComplete.name :
        // 			// 파일 업로드 결과를 첨부파일 데이터셋에 설정
        // 			for(var i = 0; i < this.dsAtchRslt.rowcount; i++) {
        // 			    // 첨부파일관리번호
        // 				this.dsAtfl.setColumn(this.dsAtfl.findRow("colId", this.dsAtchRslt.getColumn(i, "colId")), "atflMngNo", this.dsAtchRslt.getColumn(i, "atflMngNo"));
        // 			}
        //
        //             // 저장
        // 			this.cfnSave();
        //
        // 			break;

        		case this.divForm.form.Div10.form.divCoprPrcs.form.btnBgncstRvwInq.name :     // 조회(협조처리목록)
        			alert("협조처리정보가 조회 완료되었습니다");
        			break;

        		case this.divForm.form.Div10.form.divCoprPrcs.form.btnBgncstRvwStrg.name :     // 저장(착공승인검토)
        		    // 정상적으로 처리되었습니다.
        			this.gfnAlertMsg("save", "CST_003");
        			// 조회
        			this.dsSearch.setColumn(0, "dtlProcsEtcCn", srvcId == this.divForm.form.Div10.form.divCoprPrcs.form.btnBgncstRvwStrg.name ? "FICA" : "COMA");
        			//협조처리 조회버튼 클릭
        			this.divForm.form.Div10.form.divCoprPrcs.form.btnBgncstRvwInq.click();

        			break;

        		default :
        			break;
        	}
        };

        /**************************************************************************
         * @name : fnPopupCallback
         * @description : 팝업에 관한 콜백 함수
         ***************************************************************************/
        this.fnPopupCallback = function(sPopupId, oRtn)
        {

        	switch(sPopupId) {
        		case "rnbNoInptPop" : // 룸번호입력창

        			if(this.gfnIsNull(oRtn)){
        				return;
        			}

        			var arr = "";
        			for(var i = 0; i < this.dsTscAplyRnbMng.rowcount; i++) {
        				if(i == 0){
        					arr = arr + this.dsTscAplyRnbMng.getColumn(i, "pstnInfoRnb");
        				}else{
        					arr = arr + "," + this.dsTscAplyRnbMng.getColumn(i, "pstnInfoRnb");
        				}
        			}
        			trace("vvvvvvvv5555===>" + arr);
        			//this.divForm.form.div02.form.edtHwrtInptRnb.value = arr;
        			this.dsCstFcltOperMst.setColumn(0, "hwrtInptRnb"     , arr   );

        			break;

        		case "picSch" :  // 담당자 찾기
        		    if(this.gfnIsNull(oRtn)) { return; }
        			oRtn = JSON.parse(oRtn);

        			//var ds = this[this.getFocus().parent.parent.parent.parent.binddataset];
        			var ds = this.dsBgncstAprvRvw;
        			ds.setColumn(ds.rowposition, "prcrId"    , oRtn.userId   );  // 담당자ID
        		    ds.setColumn(ds.rowposition, "prcrNm"    , oRtn.userNm   );  // 담당자명
        			ds.setColumn(ds.rowposition, "prcrTelno" , oRtn.userTelno);  // 담당자전화번호
        			ds.setColumn(ds.rowposition, "prcrInstCd", oRtn.coId     );  // 회사ID
        			ds.setColumn(ds.rowposition, "prcrDeptCd", oRtn.deptId   );  // 부서ID

                    // 담당부서 표시를 위한 처리
        			if(this.dsJobGroupCd.findRow("jobGroupId", oRtn.userId) == -1) {
        				var nRow = this.dsJobGroupCd.addRow();
        				this.dsJobGroupCd.setColumn(nRow, "jobGroupId", oRtn.userId);
        				this.dsJobGroupCd.setColumn(nRow, "jobGroupNm", oRtn.deptNm);
        				ds.setColumn(ds.rowposition, "tmprCd", oRtn.userId);
        			}

        			break;

        		case this.divForm.form.Div10.form.divCoprPrcs.form.grdBgncstAprvRvw.name :  // 착공승인검토
        		//case this.divCoprPrcs.form.grdCmcnInspRvw.name :    // 준공검사
        		    var ds = this[this.getFocus().binddataset];
        			if(!this.gfnIsNull(oRtn)) {
        			    if(oRtn) {
        				    var rtnVal = JSON.parse(oRtn);
        					if(rtnVal.hasOwnProperty("acptnHnovAprvCd")) {
        						ds.setColumn(ds.rowposition, "acptnHnovAprvCd", rtnVal.acptnHnovAprvCd);  // 검토결과코드
        						ds.setColumn(ds.rowposition, "prcsRsltCn"     , rtnVal.prcsRsltCn);       // 검토결과내용
        					}

        					// 첨부파일 변경시 첨부파일부터 저장
        					if(this.gfnDsIsUpdated(this.dsRvwAtfl)) {  // 첨부파일 변경시
        						// 첨부파일 저장
        						this.fnSrvcCall(this.RaonkUploadRvw.name);
        					} else {
        						// 저장
        						//if(this.getFocus().name.startsWith("grdBgncst")) {
        						    this.divForm.form.Div10.form.divCoprPrcs.form.btnBgncstRvwStrg.click();  // 저장(착공승인검토)
        					    //} else {
        							//this.divCoprPrcs.form.btnCmcnRvwStrg.click();    // 저장(준공검사)
        						//}
        					}
        				}
        			} else {
        			    // 취소시
        				if(this.gfnDsIsUpdated(this.dsRvwAtfl)) {  // 파일추가를 시도했을 경우
        					// 조회
        					//if(this.getFocus().name.startsWith("grdBgncst")) {
        					    this.dsSearch.setColumn(0, "dtlProcsEtcCn", "FICA");
        						this.divForm.form.Div10.form.divCoprPrcs.form.btnBgncstRvwInq.click();  // 조회(착공승인검토)
        				    //} else {
        						//this.dsSearch.setColumn(0, "dtlProcsEtcCn", "COMA");
        						//this.divCoprPrcs.form.btnCmcnRvwInq.click();    // 조회(준공검사)
        					//}
        				}
        			}

        			break;

        		case "btnCtrtChc_Popup" :  // 계약선택

        		trace("www==>" + oRtn );
        			if(this.gfnIsNull(oRtn)) { return; }
        			oRtn = JSON.parse(oRtn);
        		    this.dsCstFcltOperMst.setColumn(0, "ctrtNo"     , oRtn.ctrtNo   );  // 계약번호
        			this.dsCstFcltOperMst.setColumn(0, "ctrtNm"     , oRtn.ctrtNm   );  // 계약명
        			this.dsCstFcltOperMst.setColumn(0, "clmCustCd"  , oRtn.clmCustCd);  // 청구고객코드
        			this.dsCstFcltOperMst.setColumn(0, "clmAddr"    , oRtn.clmAddr     );  // 청구주소
        			this.dsCstFcltOperMst.setColumn(0, "pstnInfoRnb", oRtn.pstnInfoRnb     );  // 위치정보(룸번호)
        //alert("www111");
        			break;

        		default :
        			break;
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
        						  , "bsnsSeCd" : "TSPWAT"   // 업무구분코드(입주자서비스)
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
        	}else if(sPopupId == "saveAlert"){
        		this.reload();

        		// this.gfnCloseMenu("MNG_0000000295");
        		// this.fnMovePage('MNG_0000000021', 'MNG_0000000144', 'work::CST/CAD/CST009M01.xfdl');

        	}else if(sPopupId == "endConfirm"){
        		if(oRtn.result == "Y") {
        			// 메뉴 ID
        			var sMenuId = this.objApp.gvFrmLeft.form.dsMenu.getColumn(this.objApp.gvFrmLeft.form.dsMenu.rowposition, this.FRAME_MENUCOLUMNS.menuId);

        			this.gfnCloseMenu(sMenuId);

        		}
        	}else if(sPopupId == "endSaveConfirm"){
        		if(oRtn.result == "Y") {
        			// 첨부파일 변경시 첨부파일부터 저장
        			if(this.gfnDsIsUpdated(this.dsAtfl)) {  // 첨부파일 변경시
        				// 첨부파일 저장
        				var obj = { "thumnail" : "N"        // 썸네일 생성여부(첨부파일 중 이미지 파일이 있는 경우 "Y" 이면 썸네일 파일 생성)
        						  , "bsnsSeCd" : "TSPWAT"   // 업무구분코드(입주자서비스)
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
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        /**************************************************************************
         * @name : fnValiChk
         * @description : validation check
         ***************************************************************************/
        this.fnValiChk = function(){

        	if(this.gfnIsNull(this.dsCstFcltOperMst.getColumn(0, "ctrtChcYn"))){ // 계약선택여부
        		this.divForm.form.Div01.form.rdoCtrtChcYn.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["계약선택여부 \n"]);
        		return false;
        	}

        	if(this.divForm.form.Div01.form.rdoCtrtChcYn.value == "0" ){ //0:수기입력

        		if(this.gfnIsNull(this.divForm.form.div02.form.cboRgn.value)){ // 지역구분코드
        			this.divForm.form.div02.form.cboRgn.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["지역구분 \n"]);
        			return false;
        		}

        		if(this.gfnIsNull(this.divForm.form.div02.form.cmbPstnSe.value)){ // 위치구분코드
        			this.divForm.form.div02.form.cmbPstnSe.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["[위치구분]은 최하단 정보 \n"]);
        			return false;
        		}

        		if(this.gfnIsNull(this.dsCstFcltOperMst.getColumn(0, "hwrtInptRnb"))){ // 룸번호
        			this.divForm.form.div02.form.edtHwrtInptRnb.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["수기선택 룸번호 \n"]);
        			return false;
        		}

        	}else{//1:계약선택

        		if(this.gfnIsNull(this.divForm.form.Div01.form.divEdtPop00.form.edtCtrtNm.value)){ // 계약명
        			this.divForm.form.Div01.form.divEdtPop00.form.edtCtrtNm.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["계약명 \n"]);
        			return false;
        		}

        		if(this.gfnIsNull(this.divForm.form.div02.form.cmbRgnSeCrtr.value)){ // 지역구분코드
        			this.divForm.form.div02.form.cmbRgnSeCrtr.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["지역구분 \n"]);
        			return false;
        		}

        		if(this.gfnIsNull(this.divForm.form.div02.form.cmbPstnSeCrtr.value)){ // 위치구분코드
        			this.divForm.form.div02.form.cmbPstnSeCrtr.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["[위치구분]은 최하단 정보 \n"]);
        			return false;
        		}

        		if(this.gfnIsNull(this.divForm.form.div02.form.edtPstnInfoRnb.value)){ // 룸번호
        			this.divForm.form.div02.form.edtPstnInfoRnb.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["계약선택 룸번호 \n"]);
        			return false;
        		}

        	}

        	if(this.gfnIsNull(this.dsCstFcltOperMst.getColumn(0, "fcltNm"))){ // 시설명
        		this.divForm.form.Div01.form.edtFcltNm.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["시설명 \n"]);
        		return false;
        	}


        	if(this.gfnIsNull(this.dsCstFcltOperMst.getColumn(0, "rbprsnFcltMngRbprsnYn"))){ // 신청자와 동일여부
        		this.divForm.form.div00.form.rdoRtpyrSmYn.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["총괄책임자및시설관리책임자 \n"]);
        		return false;
        	}

        	if(this.gfnIsNull(this.dsCstFcltOperMst.getColumn(0, "rbprsnFcltMngRbprsnNm"))){ // 총괄책임자 성명
        		this.divForm.form.div00.form.edtRbprsnFcltMngRbprsnNm.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["총괄책임자및시설관리책임자 성명 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsCstFcltOperMst.getColumn(0, "rbprsnFcltMngRbprsnMblTelno"))){ // 총괄책임자 휴대폰번호
        		this.divForm.form.div00.form.edtRbprsnFcltMngRbprsnMblTelno.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["총괄책임자및시설관리책임자 휴대폰번호 \n"]);
        		return false;
        	}

        	return true;

        }


        /**************************************************************************
         * @name : cfnAddAtfl
         * @description : 첨부 파일 추가
         ***************************************************************************/
        this.cfnAddAtfl = function(oFile) {
        	// 이미 첨부된 파일이 있으면 기존 파일 삭제
        	this.cfnDelAtfl(oFile.upcolid);

        	// RaonkUpload에 컬럼ID 설정
        	this.RaonkUpload.SetFileCustomValue(-1, JSON.stringify({ "strCustomValue" : oFile.upcolid }));

            // 첨부파일 DS에 추가
        	var nRow = this.dsAtfl.findRow("colId", oFile.upcolid);
                nRow = Math.max(nRow, 0) ? nRow : this.dsAtfl.addRow();

        	this.dsAtfl.setColumn(nRow, "jobSeCd"      , "CAR"                 );  // 작업구분
        	this.dsAtfl.setColumn(nRow, "jobTycoSeCd"  , this.aplySeCd         );  // 작업공종구분코드
        	this.dsAtfl.setColumn(nRow, "aplcfmNo"     , ""                    );  // 신청서번호(서비스에서설정)
        	this.dsAtfl.setColumn(nRow, "atchFileNm"   , oFile.userdata.strName);  // 첨부파일명
        	this.dsAtfl.setColumn(nRow, "atchFileMngNo", ""                    );  // 첨부파일관리번호(Main화면(CST002M00)에서 파일 업로드 후 설정)
        	this.dsAtfl.setColumn(nRow, "colId"        , oFile.upcolid         );  // 컬럼ID
        	this.dsAtfl.setColumn(nRow, "atchSeCd"     , oFile.upatchsecd      );  // 첨부파일구분코드
        	this.dsAtfl.setColumn(nRow, "atchDtlSeCd"  , oFile.upatchdtlsecd   );  // 첨부파일상세구분코드
        	this.dsAtfl.setColumn(nRow, "fileSz"  	   , oFile.userdata.nSize  );  // 파일크기

        	// 첨부 파일 표출용 DS 설정
            this.cfnSetAtflExprs( oFile.userdata.strName + '(' + oFile.userdata.nSize + ')'  // 파일풀명
        	                    , oFile.userdata.strName                                     // 원본파일명
        						, oFile.userdata.nSize                                       // 파일크기
        						, oFile.upcolid                                              // 컬럼ID
        						);
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
         * @name : fnScrnSetting
         * @description : 조회 시 화면 세팅
         ***************************************************************************/
        this.fnScrnSetting = function(){

        	trace("(fnScrnSetting)this.jobCd==>" + this.jobCd);

        	var sCtrtChcYn = this.dsCstFcltOperMst.getColumn(0, "ctrtChcYn"); // 계약선택여부 여부
        	var sClmMtdCd = this.dsCstFcltOperMst.getColumn(0, "clmMtdCd"); // 청구방식코드
        	var sPstnSeCd = this.dsCstFcltOperMst.getColumn(0, "pstnSeCd"); // 지역구분코드
        	var sPayPicSmYn = this.dsCstFcltOperMst.getColumn(0, "payPicSmYn"); // 납부담당자동일여부

        	var sClmEml2 = this.dsCstFcltOperMst.getColumn(0, "acuntEml2"); // 청구이메일
        	var sTxivEml2 = this.dsCstFcltOperMst.getColumn(0, "etxivEmlAddr2"); // 세금계산서이메일

         	if(!this.gfnIsNull(sPstnSeCd)){
         		this.divForm_div02_cboRgn_onitemchanged(this.divForm.form.div02.form.cboRgn);

        	}

        	// TAS00312:협업접수
        	if(this.jobCd == "TAS00312"){

        		this.divForm.form.Div05.form.Panel05.visible = false;//전달사항 영역
        		this.divForm.form.Div05.form.panFile02.visible = false;//기본시설물 체크리스트다운 영역
        // 		var sDivFrom = this.divForm.form;
        // 		var arrDivComps = [sDivFrom.Div01, sDivFrom.Div02, sDivFrom.Div03, sDivFrom.Div04, sDivFrom.Div05
        // 							, sDivFrom.Div06, sDivFrom.Div07, sDivFrom.Div01.form.divEdtPop];
        //
        // 		arrDivComps.forEach(oDiv => {
        // 			Array.from(oDiv.form.components).forEach(oComp => {
        // 				fnReadonly.call(this, oComp);
        // 			});
        // 		});

        		// 내부함수호출
        // 		function fnReadonly (oComp, bReadonly) {
        // 			if (oComp instanceof nexacro.Div) {
        // 				fnReadonly.call(this, oComp.form);
        // 			} else {
        // 				if (oComp instanceof nexacro.Static) return;
        // 				if (oComp instanceof nexacro.Panel) return;
        // 				if (oComp instanceof nexacro.TextArea) return;
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
        //
        // 				try {
        // 					// readonly 처리할거
        // 					oComp.readonly = !bReadonly;
        //
        // 				} catch(e) {
        // 					trace ("readonly 속성없음");
        // 				}
        // 			}
        // 		}

        	}

        	if(this.jobCd == "TAS00487"){
        	   // 화물터미널지역 관련 접수버튼 노출 분기
        		var rgnIncTf = this.cgoTmnEtcRgn.includes(this.dsCstFcltOperMst.getColumn(0,"pstnSeCd"));
        		trace("rgnIncTf111==>" + rgnIncTf);
        		this.divBtn.form.CTL00937.visible = rgnIncTf; // 사전미팅확인
        		this.divBtn.form.CTL11133.visible = !rgnIncTf;    // 담당부서확인요청
        	}
        }

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        /**************************************************************************
         * @name : btnMin_onclick
         * @description : 화면 접기/펼치기 기능
         ***************************************************************************/
        this.btnMin_onclick = function(obj,e)
        {
        	var objNm = obj.name;
        	var objClass = obj.cssclass;
        	var objDiv = null;
        	var divVisible = false;

        	// 해당 div 찾아줌.
        	if(objNm == "btnMinAplyPstn"){
        		objDiv = this.divForm.form.Div01;

        	}else if(objNm == "btnMinAplcntInfo"){
        		objDiv = this.divForm.form.Div02;

        	}else if(objNm == "btnMinCustInfo"){
        		objDiv = this.divForm.form.Div03;

        	}else if(objNm == "btnMinClmInfo"){
        		objDiv = this.divForm.form.Div04;

        	}else if(objNm == "btnMinWtspAplyInfo"){
        		objDiv = this.divForm.form.Div05;

        	}else{
        		return;

        	}

        	if(objClass == "btn_WF_ACMinus"){ // - 버튼 일때
        		divVisible = false; // visible 세팅
        		obj.cssclass = "btn_WF_ACPlus"; // 클래스 수정

        	}else if(objClass == "btn_WF_ACPlus"){ // + 버튼 일때
        		divVisible = true; // visible 세팅
        		obj.cssclass = "btn_WF_ACMinus";

        	}

        	objDiv.visible = divVisible;
        	this.resetScroll();
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

        	if(objNm == "btn01"){
        		objDiv = this.divForm.form.Div01;
        		objTit = this.divForm.form.sub_tit01;

        	}else if(objNm == "btn02"){
        		objDiv = this.divForm.form.Div02;
        		objTit = this.divForm.form.sub_tit02;

        	}else if(objNm == "btn03"){
        		objDiv = this.divForm.form.Div03;
        		objTit = this.divForm.form.sub_tit03;

        	}else if(objNm == "btn04"){
        		objDiv = this.divForm.form.Div04;
        		objTit = this.divForm.form.sub_tit04;

        	}else if(objNm == "btn05"){
        		objDiv = this.divForm.form.Div05;
        		objTit = this.divForm.form.sub_tit05;

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
         * @name : form_onvscroll
         * @description : 화면 수직 스크롤 시
         ***************************************************************************/
        this.form_onvscroll = function(obj,e)
        {
        	// 버튼 크기에 맞춰 수치를 알아내야 한다.
        	var posTop1 = 0;
        	var posTop2 = 0;

        	if(e.pos == 0){
        		posTop1 = 62;
        		posTop2 = 488;

        	}else{
        		posTop1 = 13;
        		posTop2 = 439;

        	}

        	this.divQuick.top = e.pos + posTop1;
        	this.divBtn.top = e.pos + posTop2;
        };


        /**************************************************************************
         * @name : rdoPayPicSmYn_onitemchanged
         * @description : 납부담당자동일여부 수정 완료 시
         ***************************************************************************/
        this.rdoPayPicSmYn_onitemchanged = function(obj,e)
        {
        	/*
        		1	신청자정보와 동일
        		0	신청자정보와 동일하지 않음
        	*/
        	var objVal = obj.value;

        	// 청구정보세팅
        	if(objVal == "1"){
        		// 1 일때만 값 세팅 1 : 아이템 클릭으로 직접 수정 시
        		if(this.rdoPaySe == "1"){
        			this.divForm.form.Div04.form.edtPayPicNm.value = this.gvUserNm;
        			this.divForm.form.Div04.form.edtPayPicDeptNm.value = this.gvDeptNm;
        			this.divForm.form.Div04.form.edtPayPicTelno.value = this.gvTelNo;
        			this.divForm.form.Div04.form.edtPayPicMblTelno.value = this.gvMblTelNo;

        		}

        		this.divForm.form.Div04.form.edtPayPicNm.readonly = true;
        		this.divForm.form.Div04.form.edtPayPicDeptNm.readonly = true;
        		this.divForm.form.Div04.form.edtPayPicTelno.readonly = true;
        		this.divForm.form.Div04.form.edtPayPicMblTelno.readonly = true;

        		this.divForm.form.Div04.form.panFile.visible = false;

        	}else if(objVal == "0"){
        		// 1 일때만 값 세팅 1 : 아이템 클릭으로 직접 수정 시
        		if(this.rdoPaySe == "1"){
        			this.divForm.form.Div04.form.edtPayPicNm.value = "";
        			this.divForm.form.Div04.form.edtPayPicDeptNm.value = "";
        			this.divForm.form.Div04.form.edtPayPicTelno.value = "";
        			this.divForm.form.Div04.form.edtPayPicMblTelno.value = "";

        		}

        		this.divForm.form.Div04.form.edtPayPicNm.readonly = false;
        		this.divForm.form.Div04.form.edtPayPicDeptNm.readonly = false;
        		this.divForm.form.Div04.form.edtPayPicTelno.readonly = false;
        		this.divForm.form.Div04.form.edtPayPicMblTelno.readonly = false;

        		this.divForm.form.Div04.form.panFile.visible = true;

        	}

        	this.resetScroll();
        };

        /**************************************************************************
         * @name : rdoClmMtd_onitemchanged
         * @description : 청구방식 수정 완료 시
         ***************************************************************************/
        this.rdoClmMtd_onitemchanged = function(obj,e)
        {
        	/*
        		1	이메일
        		0	지로
        	*/
        	var objVal = obj.value;

        	if(objVal == "1"){
        		this.divForm.form.Div04.form.pan02_02_00.visible = true;

        	}else if(objVal == "0"){
        		this.divForm.form.Div04.form.pan02_02_00.visible = false;

        	}

        	this.resetScroll();

        };

        /**************************************************************************
         * @name : cboEml_onitemchanged
         * @description : 이메일 도메인 콤보 수정 완료 시
         ***************************************************************************/
        this.cboEml_onitemchanged = function(obj,e)
        {
        	var objVal = obj.value;
        	var objNm = obj.name;

        	var objEdt = "";
        	var sEdt = "";

        	if(objNm == "cboAcuntEmlAddr"){
        		objEdt = this.divForm.form.Div04.form.edtAcuntEmlAddr2;

        	}else if(objNm == "cboTxivEmlAddr"){
        		objEdt = this.divForm.form.Div04.form.edtTxivEmlAddr2;

        	}

        	if(this.gfnIsNull(objEdt)){
        		return;

        	}

        	if(this.gfnIsNull(objVal)){
        		objEdt.readonly = false;
        		sEdt = "";

        	}else{
        		objEdt.readonly = true;
        		sEdt = obj.text;

        	}

        	objEdt.value = sEdt;

        };

        /**************************************************************************
         * @name : edtEml_onchanged
         * @description : 이메일 도메인 직접 입력 시
         ***************************************************************************/
        this.edtEml_onchanged = function(obj,e)
        {
        	var objVal = obj.value;
        	var objNm = obj.name;

        	var cboNm = "";

        	if(objNm == "edtAcuntEmlAddr2"){
        		cboNm = this.divForm.form.Div04.form.cboAcuntEmlAddr;

        	}else if(objNm == "edtTxivEmlAddr2"){
        		cboNm = this.divForm.form.Div04.form.cboTxivEmlAddr;

        	}

        	if(this.gfnIsNull(cboNm)){
        		return;

        	}

        	var nRow = this.dsEmlList.findRow("cdNm", objVal);

        	if(nRow > -1){
        		cboNm.value = this.dsEmlList.getColumn(nRow, "cdId");
        		obj.readonly = true;

        	}

        };

        /**************************************************************************
         * @name : cboRgn_onitemclick
         * @description : 지역구분콤보 아이템 클릭 시
         ***************************************************************************/
        this.cboRgn_onitemclick = function(obj,e)
        {
        	this.cboRgnSe = "1";
        };

        /**************************************************************************
         * @name : rdoPayPicSmYn_onitemclick
         * @description : 납부담당자동일여부 아이템 클릭 시
         ***************************************************************************/
        this.rdoPayPicSmYn_onitemclick = function(obj,e)
        {
        	this.rdoPaySe = "1";
        };

        /**************************************************************************
         * @name : btnCtrt_onclick
         * @description : 계약찾기 버튼 클릭 시
         ***************************************************************************/
        this.btnCtrt_onclick = function(obj,e)
        {
        	alert("계약선택 팝업 추후에 연결 예정");

        	this.dsCstFcltOperMst.setColumn(0, "ctrtNo", "1234");
        	this.dsCstFcltOperMst.setColumn(0, "ctrtNm", "테스트 계약명~");
        	this.dsCstFcltOperMst.setColumn(0, "pstnInfoRnb", "룸번호~1-2-3");
        };

        /**************************************************************************
         * @name : btnBuilcAddr_onclick
         * @description : 주소찾기 버튼 클릭 시
         ***************************************************************************/
        this.btnBuilcAddr_onclick = function(obj,e)
        {
        	alert("우편번호 찾기!!! 임시데이터");

        	this.dsCstFcltOperMst.setColumn(0, "custZip", "11111");
        	this.dsCstFcltOperMst.setColumn(0, "custAddr", "테스트 주소~");
        	this.dsCstFcltOperMst.setColumn(0, "custDtlAddr", "101동101호");

        	/* 개발 시 외부망 안됨.
        	var sTitle = "주소검색";		// 팝업 파이틀
        	var objArg   = {};			// 팝업창에 보낸 파라메터

        	var objOption = {
        		popuptype: "modal"		//modal,modaless
        // 		, width: 700			// 팝업창 width
        // 		, height: 700			// 팝업창 height
        		, autosize: false		// 사이즈 자동 여부
        		, title: sTitle			// 팝업타이틀
        		, resize: false			// 사이즈 조정 여부
        		, titlebar: true		// 팝업 타이틀바 여부
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("addr"				// 팝업ID
        	, "work::COM/cert/addrPopup.xfdl"		// 팝업 호출 화면
        	, objArg, sPopupCallBack, objOption);
        	*/
        };

        /**************************************************************************
         * @name : btnClmAddr_onclick
         * @description : 주소찾기 버튼 클릭 시
         ***************************************************************************/
        this.btnClmAddr_onclick = function(obj,e)
        {
        	alert("우편번호 찾기!!! 임시데이터");

        	this.dsCstFcltOperMst.setColumn(0, "clmZip", "22222");
        	this.dsCstFcltOperMst.setColumn(0, "clmAddr", "테스트 주소~");
        	this.dsCstFcltOperMst.setColumn(0, "clmDtlAddr", "101동101호");

        	/* 개발 시 외부망 안됨.
        	var sTitle = "주소검색";		// 팝업 파이틀
        	var objArg   = {};			// 팝업창에 보낸 파라메터

        	var objOption = {
        		popuptype: "modal"		//modal,modaless
        // 		, width: 700			// 팝업창 width
        // 		, height: 700			// 팝업창 height
        		, autosize: false		// 사이즈 자동 여부
        		, title: sTitle			// 팝업타이틀
        		, resize: false			// 사이즈 조정 여부
        		, titlebar: true		// 팝업 타이틀바 여부
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("addr"				// 팝업ID
        	, "work::COM/cert/addrPopup.xfdl"		// 팝업 호출 화면
        	, objArg, sPopupCallBack, objOption);
        	*/
        };

        /**************************************************************************
         * @name : btn_onclick
         * @description : Button Click Event
         ***************************************************************************/
        this.btn_onclick = function(obj,e)
        {
        	// WorkFlow 정보
        	var wfInfo = this.cfnGetWfInfo(obj.name);

        	var vBtnNm = wfInfo.prcsSeCdNm;
        	var vBtnCd = wfInfo.prcsSeCd; // 눌린 버튼 ID(obj.name과 같은 값임.)
        	/* vBtnCd 정보
        		CTL00777	임시저장
        		CTL00489	신청
        		CTL00809	종료
        		CTL00990	신청취소
        		CTL00406	접수
        		CTL00411	담당자확인요청
        		CTL00454	담당자확인불필요
        		CTL00099	담당자지정완료
        		CTL00881	미처리종료
        		CTL11133	재신청(담당부서확인요청)
        		CTL00937	재신청(사전미팅확인)
        		CTL01032	미처리종료
        		--CTL00110	검침완료
        		CTL00623	담당자변경
        		CTL00883	미처리종료
        		CTL00939	보완요청
        		CTL00111	접수
        		CTL00253	담당자변경
        		CTL00687	승인
        		CTL00884	미처리종료
        		CTL11130	보완요청
        		CTL00249	만족도요청
        		CTL00252	처리완료
        		N/A			N/A
        		CTL00254	설문응답완료
        	*/

        	trace("vBtnCd===>" + vBtnCd);

        	if(vBtnCd == "CTL00777"){ // 임시저장 버튼
        		this.vStrSvcId  = "saveHnovAcptnAplyInstlPrlgAplyStrg";
        		this.vStrSvcUrl = "hnovAcptnAply/saveHnovAcptnAplyInstlPrlgAplyStrg.do";

        	}else if(vBtnCd == "CTL00489" || vBtnCd == "CTL11133" || vBtnCd == "CTL00937"){ // 신청서작성 - 신청
        		// validation check                                                                      재신청
        		var res = this.fnValiChk();

        		if(!res){
        			return;

        		}

        		this.vStrSvcId  = "saveHnovAcptnAplyInstlPrlgAplyStrg";
        		this.vStrSvcUrl = "hnovAcptnAply/saveHnovAcptnAplyInstlPrlgAplyStrg.do";

        	}else if(vBtnCd == "CTL00809"){ // 신청서작성 - 종료
        		// 신규입력일때 종료 버튼 클릭 시 화면만 닫아줌.
        		if(this.dsCstFcltOperMst.getRowType(0) == Dataset.ROWTYPE_INSERT){
        			this.gfnConfirmMsg("endConfirm", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"], "", ["종료"]);

        			return;

        		}else{

        			this.vStrSvcId  = "saveHnovAcptnAplyInstlPrlgAplyStrg";
        			this.vStrSvcUrl = "hnovAcptnAply/saveHnovAcptnAplyInstlPrlgAplyStrg.do";
        		}
        	}else if(vBtnCd == "CTL00406" || vBtnCd == "CTL11132"){ // 접수(CTL00406)(사전미팅확인)
                                                                    //접수(CTL11132)(담당부서확인요청)
        		this.vStrSvcId  = "saveHnovAcptnAplyInstlPrlgAplyStrg";
        		this.vStrSvcUrl = "hnovAcptnAply/saveHnovAcptnAplyInstlPrlgAplyStrg.do";

        	}else if(vBtnCd == "CTL11134" || vBtnCd == "CTL00939" || vBtnCd == "CTL10990"){ // 보완요청

        		this.vStrSvcId  = "saveHnovAcptnAplyInstlPrlgAplyStrg";
        		this.vStrSvcUrl = "hnovAcptnAply/saveHnovAcptnAplyInstlPrlgAplyStrg.do";

        	}else if(vBtnCd == "CTL00411"){ // 담당자확인요청

        		if(this.gfnIsNull(this.dsCstFcltOperMst.getColumn(0, "acptnHnovDt"))){ // 인계인수일시
        			this.divForm.form.Div09.form.calAcptnHnovDt.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["인계인수일시 \n"]);
        			return false;
        		}
        		if(this.gfnIsNull(this.dsCstFcltOperMst.getColumn(0, "acptnHnovDt"))){ // 인계인수일시(시간)
        			this.divForm.form.Div09.form.cboAcptnHnovDt_HH.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["인계인수일시(시간) \n"]);
        			return false;
        		}
        		if(this.gfnIsNull(this.dsCstFcltOperMst.getColumn(0, "acptnHnovDt"))){ // 인계인수일시(분)
        			this.divForm.form.Div09.form.cboAcptnHnovDt_MM.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["인계인수일시(분) \n"]);
        			return false;
        		}

        		this.vStrSvcId  = "saveHnovAcptnAplyInstlPrlgAplyStrg";
        		this.vStrSvcUrl = "hnovAcptnAply/saveHnovAcptnAplyInstlPrlgAplyStrg.do";

        	}else if(vBtnCd == "CTL00454"){ // 담당자확인불필요

        		this.vStrSvcId  = "saveHnovAcptnAplyInstlPrlgAplyStrg";
        		this.vStrSvcUrl = "hnovAcptnAply/saveHnovAcptnAplyInstlPrlgAplyStrg.do";

        	}else if(vBtnCd == "CTL00785"){ // 업무협조재설정

        		this.vStrSvcId  = "saveHnovAcptnAplyInstlPrlgAplyStrg";
        		this.vStrSvcUrl = "hnovAcptnAply/saveHnovAcptnAplyInstlPrlgAplyStrg.do";

        	}else if(vBtnCd == "CTL00457"){ // 처리완료

        		this.vStrSvcId  = "saveHnovAcptnAplyInstlPrlgAplyStrg";
        		this.vStrSvcUrl = "hnovAcptnAply/saveHnovAcptnAplyInstlPrlgAplyStrg.do";

        	}else if(vBtnCd == "CTL00458"){ // 설문응답완료

        		this.vStrSvcId  = "saveHnovAcptnAplyInstlPrlgAplyStrg";
        		this.vStrSvcUrl = "hnovAcptnAply/saveHnovAcptnAplyInstlPrlgAplyStrg.do";
        	}

        	// 넘겨줄 데이터 세팅
        	this.dsCstFcltOperMst.setColumn(0, "taskCd", wfInfo.nextStepJobPrcsPrgrsSeCd);
        	this.dsCstFcltOperMst.setColumn(0, "aplySeCd", this.aplySeCd);

        	if(this.gfnIsNull(this.dsCstFcltOperMst.getColumn(0, "docCd"))){
        		this.dsCstFcltOperMst.setColumn(0, "docCd", "TSPDOC710"); // 공통코드 TSPDOC710 : 인계인수사용신청

        	}

        	// 위치구분코드
        	// 건물코드가 있을땐 건물코드, 건물코드가 없고 위치코드가 있을때 위치코드, 둘 다 없을때 TSPLOCWAT(기본값)
        	var sPstnSeCd = "";
        	if(!this.gfnIsNull(this.dsCstFcltOperMst.getColumn(0, "bldgSeCd"))){
        		sPstnSeCd = this.dsCstFcltOperMst.getColumn(0, "bldgSeCd");

        	}else if(!this.gfnIsNull(this.dsCstFcltOperMst.getColumn(0, "pstnSeCd"))){
        		sPstnSeCd = this.dsCstFcltOperMst.getColumn(0, "pstnSeCd");

        	}else{
        		sPstnSeCd = "TSPLOCWAT";

        	}

        	if(!this.gfnIsNull(sPstnSeCd)){
        		this.dsCstFcltOperMst.addColumn("savePstn", "string");
        		this.dsCstFcltOperMst.setColumn(0, "savePstn", sPstnSeCd);
        	}

        	// 시설운영마스터 데이터 세팅
        	if(!this.gfnIsNull(this.aplyNo)){
        		this.dsMst.setColumn(0, "aplyNo", this.aplyNo);

        	}
        	this.dsMst.setColumn(0, "taskCd"    , wfInfo.jobPrcsPrgrsSeCd        );  // 현재업무코드
        	this.dsMst.setColumn(0, "nextTaskCd", wfInfo.nextStepJobPrcsPrgrsSeCd);  // 다음업무코드

        	this.dsMst.setColumn(0, "aplySeCd", this.aplySeCd);  // 신청구분코드

        	if(this.gfnIsNull(this.dsMst.getColumn(0, "docCd"))){
        		this.dsMst.setColumn(0, "docCd", "TSPDOC710"); // 공통코드 TSPDOC710 : 인계인수사용신청

        	}

        	var curDt = this.gfnGetDate("time");
        	if(this.gfnIsNull(this.dsCstFcltOperMst.getColumn(0, "aplyDt"))){
        		this.dsCstFcltOperMst.setColumn(0, "aplyDt", curDt);

        	}
        	if(this.gfnIsNull(this.dsMst.getColumn(0, "aplyDt"))){
        		this.dsMst.setColumn(0, "aplyDt", curDt);

        	}

        	// 종료
        	if(vBtnCd == "CTL00809"){
        		// 종료일자 세팅
        		this.dsCstFcltOperMst.setColumn(0, "endDt", curDt);
        		this.dsMst.setColumn(0, "endDt", curDt);

        	}

        // 	// 계약선택여부 1 : 계약선택, 0 : 수기입력
        // 	if(this.dsCstFcltOperMst.getColumn(0, "ctrtChcYn") == "1"){
        // 		// 계약번호(수기입력), 수도사용위치(수기입력) null 넣어줌.
        // 		this.dsCstFcltOperMst.setColumn(0, "hwrtInptCtrtNo", null);
        // 		this.dsCstFcltOperMst.setColumn(0, "hwrtInptWtspUsePstnCn", null);
        //
        // 	}else if(this.dsCstFcltOperMst.getColumn(0, "ctrtChcYn") == "0"){
        // 		// 계약번호, 계약명, 위치정보(룸번호) null 넣어줌.
        // 		this.dsCstFcltOperMst.setColumn(0, "ctrtNo", null);
        // 		this.dsCstFcltOperMst.setColumn(0, "ctrtNm", null);
        // 		this.dsCstFcltOperMst.setColumn(0, "pstnInfoRnb", null);
        //
        // 	}
        //
        	// 수정된 내역이 있는지 체크(변경)
        	if(!this.gfnDsIsUpdated(this.dsCstFcltOperMst) && !this.gfnDsIsUpdated(this.dsAtfl) && !this.gfnDsIsUpdated(this.dsCnvyMttr)){
        		this.gfnAlertMsg("msg", "MSG_004", [""]);
        		return;

        	}

        	if(vBtnCd == "CTL00809"){ // 종료
        		this.gfnConfirmMsg("endSaveConfirm", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"], "", ["종료"]);

        	}else{
        		this.gfnConfirmMsg("save_confirm", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"]);

        	}
        }

        /**************************************************************************
         * @name : divGrd_btnGrdAdd_onclick
         * @description : 그리드 추가 버튼 클릭
         ***************************************************************************/
        this.divGrd_btnGrdAdd_onclick = function(obj,e)
        {



        };

        /**************************************************************************
         * @name : divGrd_btnGrdDel_onclick
         * @description : 그리드 삭제 버튼 클릭
         ***************************************************************************/
        this.divGrd_btnGrdDel_onclick = function(obj,e)
        {

        };
















        /**************************************************************************
         * @name : FileAtch_onclick
         * @description : 파일선택 버튼 클릭
         ***************************************************************************/
        this.FileAtch_onclick = function(obj,e)
        {
        	// 첨부파일 선택 창 열기
        	this.RaonkUpload.OpenFileDialog();
        };

        /**************************************************************************
         * @name : RaonkUpload_RAONKUPLOAD_CreationComplete
         * @description : 업로드 객체가 생성이 완료 시 발생하는 이벤트
         ***************************************************************************/
        this.RaonkUpload_RAONKUPLOAD_CreationComplete = function(obj,  paramObj)
        {
        	// 업로드 솔루션이 초기 생성시 업로드 할 경로를 지정해야 한다.
        	// /CMM/YYYY/MM/DD/  <<== CMM은 업무별 폴더 지정이고 기본적으로 /년도/월/일 의 폴더 구조를 갖는다.
        	this.RaonkUpload.SetConfig('FolderNameRule', '/LIF/CAR/YYYY/MM/DD/');
        };

        /**************************************************************************
         * @name : RaonkUpload_RAONKUPLOAD_BeforeAddFile
         * @description : 파일이 추가 되기 이전에 발생하는 이벤트
         ***************************************************************************/
        this.RaonkUpload_RAONKUPLOAD_BeforeAddFile = function(obj, paramObj)
        {
        	return true;
        };

        /**************************************************************************
         * @name : RaonkUpload_RAONKUPLOAD_AfterAddFile
         * @description : 파일이 추가 되기 이후에 발생하는 이벤트
         ***************************************************************************/
        this.RaonkUpload_RAONKUPLOAD_AfterAddFile = function(obj, e)
        {
            e.upcolid       = this.getFocus().upcolid       || "";  // 컬럼ID
        	e.upatchsecd    = this.getFocus().upatchsecd    || "";  // 첨부파일구분코드
        	e.upatchdtlsecd = this.getFocus().upatchdtlsecd || "";  // 첨부파일상세구분코드

        	// 첨부 파일 추가
        	this.cfnAddAtfl(e);
        };

        /**************************************************************************
         * @name : RaonkUpload_RAONKUPLOAD_UploadComplete
         * @description : 업로드 완료 시 발생하는 이벤트
         ***************************************************************************/
        this.RaonkUpload_RAONKUPLOAD_UploadComplete = function(obj, e)
        {
        	var allListArray = this.RaonkUpload.GetListInfo("json");
        	// 파일 업로드 후 첨부파일관리번호를 얻기 위한 함수
        	this.gfnUploadComplete(e.eventid, allListArray, "dsAtchRslt", "fnCallback");

        };

        /**************************************************************************
         * @name : RaonkUpload_RAONKUPLOAD_OnError
         * @description : 업로드 오류 시 발생하는 이벤트
         ***************************************************************************/
        this.RaonkUpload_RAONKUPLOAD_OnError = function(obj, paramObj)
        {
            // 파일 업로드 중 오류가 발생했습니다!
        	this.gfnAlertMsg(this.RaonkUpload.name, "CST_002", [paramObj.userdata.strMessage]);
        };

        /**************************************************************************
         * @name : dsAtfl_onload
         * @description : 첨부파일 dataset load 완료 시 호출
         ***************************************************************************/
        this.dsAtfl_onload = function(obj,e)
        {
        	// 데이터 조회 후 첨부파일 파일리스트에 셋팅
        // 	this.gfnDownloadSetting(this.RaonkUpload, this.dsAtfl);
        //
        // 	// 첨부 파일 표출용 DS 설정
        // 	for(var i = 0; i < this.dsAtfl.rowcount; i++) {
        // 		// 첨부 파일 표출용 DS 설정
        // 		this.cfnSetAtflExprs( this.dsAtfl.getColumn(i, "orgnlFileNm")
        // 		                    + '(' + this.dsAtfl.getColumn(i, "fileSz") + ')'  // 파일풀명
        // 							, this.dsAtfl.getColumn(i, "orgnlFileNm")         // 원본파일명
        // 							, this.dsAtfl.getColumn(i, "fileSz"     )         // 파일크기
        // 							, this.dsAtfl.getColumn(i, "colId"      )         // 컬럼ID
        // 							);
        // 	}
        };

        /**************************************************************************
         * @name : grd_oncellclick
         * @description : 그리드 셀 클릭 시
         ***************************************************************************/
        this.grd_oncellclick = function(obj,e)
        {
        	var objDs = obj.getBindDataset();

        	var objFileId = obj.getCellProperty("body", 0, "text").replace("bind:", "").replace("_fullName", "");

        	// 그리드 내의 삭제버튼 클릭
            if(e.fromobject.name == "cellbutton") {
        		// 신청서작성, 신청서보완 일때만 삭제 가능하게 수정
        		if(this.jobCd == "TAS10438" || this.jobCd == "TAS10439"){
        			// 첨부 파일 삭제
        			this.cfnDelAtfl(objFileId);

        		}

        	}else{
        		// 해당 로우 찾기
        		var copyRow = this.dsAtfl.findRow("colId", objFileId);

        		if(copyRow < 0){
        			return;

        		}

        		// dataset 초기화
        		if(this.dsAtflDown.getRowCount() > 0){
        			this.dsAtflDown.clearData();

        		}

        		// dataset copy
        		var nRow = this.dsAtflDown.addRow();

        		this.dsAtflDown.copyRow(nRow, this.dsAtfl, copyRow);

        		// 첨부파일 다운로드
        		this.gfnDownloadFile(this.RaonkUpload, this.dsAtflDown, e);

        	}
        };

        /**************************************************************************
         * @name : onitemchanged
         * @description : 계약선택 여부 라디오 버튼 변환
         ***************************************************************************/
        this.divForm_Div01_rdoCtrtChcYn_onitemchanged = function(obj,e)
        {

        	this.cboRgnSe = "";//초기화

        	if(this.divForm.form.Div01.form.rdoCtrtChcYn.value == "0"){//0:수기입력

        // 		this.divForm.form.Div01.form.Panel01_01_00.width = 0;//계약번호(수기입력) 항목 콘트롤
        // 		this.divForm.form.Div01.form.Panel01_01_00.flexgrow = 0;//계약번호(수기입력) 항목 콘트롤
        // 		this.divForm.form.Div01.form.Panel04.horizontalgap = 0;//계약번호(수기입력) 항목 콘트롤
        // 		this.divForm.form.Div01.form.Panel06.flexgrow = 0;//계약번호(수기입력) 항목 콘트롤
        // 		this.divForm.form.Div01.form.Panel06.width = 695;//계약번호(수기입력) 항목 콘트롤

        		//this.divForm.form.Div01.form.Panel06.height = 0;
        		//this.divForm.form.Div01.form.Panel06.visible = true;
        		this.divForm.form.Div01.form.Panel01_01_00.visible = false;
        		this.divForm.form.Div01.form.Panel06.visible = true;

        		this.divForm.form.div02.form.cboRgn.index = 0;
        		this.divForm.form.div02.form.cmbPstnSe.index = 0;
        		this.divForm.form.div02.form.cmbPstnSeCrtr.readonly = true; //계약번호 위치구분2
        		this.divForm.form.div02.form.cmbPstnSe.readonly = true; //수기입력 위치구분2
        		this.divForm.form.div02.form.Panel04.visible = false;//위치구분(계약선택) 항목
        		this.divForm.form.div02.form.Panel04_PstnSeCd.visible = true;//위치구분(수기입력) 항목
        		this.divForm.form.Div01.form.Panel00_01.visible = false;//청구고객코드, 청구주소
        		this.divForm.form.Div01.form.staLabel01_02_01.visible = true;//계약번호(수기입력) 항목
        		this.divForm.form.Div01.form.edtCtrtNo.visible = true;//계약번호(수기입력) 항목
        		this.divForm.form.sub_tit03.visible = false//고객정보 타이틀
        		this.divForm.form.Div03.visible = false//고객정보 항목영역
        		this.divForm.form.Div01.form.staLabel01_02_00.visible = false;//계약명 타이틀 항목
        		this.divForm.form.Div01.form.divEdtPop00.visible = false;//계약명 정보 항목

        	}else if(this.divForm.form.Div01.form.rdoCtrtChcYn.value == "1"){//1:계약선택

        // 		this.divForm.form.Div01.form.Panel01_01_00.width = 691;//계약명 항목 콘트롤
        // 		this.divForm.form.Div01.form.Panel01_01_00.flexgrow = 1;//계약명 항목 콘트롤
        // 		this.divForm.form.Div01.form.Panel04.horizontalgap = 20;//계약명 항목 콘트롤
        // 		this.divForm.form.Div01.form.Panel06.flexgrow = 1;//계약명 항목 콘트롤
        // 		this.divForm.form.Div01.form.Panel06.width = 0;//계약명 항목 콘트롤

        		//this.divForm.form.Div01.form.Panel06.height = 86;
        		this.divForm.form.Div01.form.Panel01_01_00.visible = true;
        		this.divForm.form.Div01.form.Panel06.visible = false;


        		this.divForm.form.div02.form.cmbRgnSeCrtr.index = 0;
        		this.divForm.form.div02.form.cmbPstnSeCrtr.index = 0;
        		this.divForm.form.div02.form.cmbPstnSeCrtr.readonly = true; //계약번호 위치구분2
        		this.divForm.form.div02.form.cmbPstnSe.readonly = true; //수기입력 위치구분2
        		this.divForm.form.div02.form.Panel04.visible = true;//위치구분(계약선택) 항목
        		this.divForm.form.div02.form.Panel04_PstnSeCd.visible = false;//위치구분(수기입력) 항목
        		this.divForm.form.Div01.form.Panel00_01.visible = true;//청구고객코드, 청구주소
        		this.divForm.form.Div01.form.staLabel01_02_01.visible = false;//계약번호(수기입력) 항목
        		this.divForm.form.Div01.form.edtCtrtNo.visible = false;//계약번호(수기입력) 항목
        		this.divForm.form.sub_tit03.visible = true//고객정보 타이틀
        		this.divForm.form.Div03.visible = true//고객정보 항목영역
        		this.divForm.form.Div01.form.staLabel01_02_00.visible = true;//계약명 타이틀 항목
        		this.divForm.form.Div01.form.divEdtPop00.visible = true;//계약명 정보 항목
        	}

        	this.resetScroll();

        };

        /**************************************************************************
         * @name : onitemchanged
         * @description : 신청자정보와 동일 선택 라디오 버튼 변환
         ***************************************************************************/
        this.divForm_div00_rdoRtpyrSmYn_onitemchanged = function(obj,e)
        {
        	if(this.divForm.form.div00.form.rdoRtpyrSmYn.value == "0"){//1:신청자정보와 동일, 0:신청자정보와 동일하지 않음
        	    //인계인수 신청을 위한 개인정보 수집 이용동의서 subtitle05
        		this.divForm.form.sub_tit05.visible = false;
        		//개인정보 수집 동의서 div
        		this.divForm.form.Div05.form.divPrvcWtcs.visible = false;
        		this.divForm.form.Div05.form.panFile01.visible = true;//총괄책임자 및 시설관리책임자 성명 항목
        	}else{
        		this.divForm.form.sub_tit05.visible = true;
        		this.divForm.form.Div05.form.divPrvcWtcs.visible = true;
        		this.divForm.form.Div05.form.panFile01.visible = false;//총괄책임자 및 시설관리책임자 성명 항목

        	}

        	this.resetScroll();
        };


        /**************************************************************************
         * @name : cboRgn_onitemchanged
         * @description : 지역구분 콤보 수정 완료 시
         ***************************************************************************/
        this.divForm_div02_cboRgn_onitemchanged = function(obj,e)
        {
        	var objVal = obj.value;
        	var strFilter = "";

        	if(this.gfnIsNull(objVal)){
        		strFilter = "cdId == ''";

        	}else{
        		strFilter = "cdId == '' || uprCd == '" + objVal + "'";

        	}

        	//console.log("================================");
        	//console.log("strFilter = " + strFilter);
        	//console.log("dsBldgSeList = " + this.dsBldgSeList.saveXML());
        	this.dsBldgSeList.filter(strFilter);

        	trace("dddd==>" + this.cboRgnSe);
        	// 1일때만 초기화해줌.
        	if(this.cboRgnSe == "1"){
        		this.divForm.form.div02.form.cmbPstnSe.index = 0;

        		this.divForm.form.div02.form.cmbPstnSeCrtr.readonly = false; //계약번호 위치구분2
        		this.divForm.form.div02.form.cmbPstnSe.readonly = false; //수기입력 위치구분2

        	}else{
        		this.divForm.form.div02.form.cmbPstnSeCrtr.readonly = true; //계약번호 위치구분2
        		this.divForm.form.div02.form.cmbPstnSe.readonly = true; //수기입력 위치구분2
        	}

        };

        /**************************************************************************
         * @name : cboRgn_onitemclick
         * @description : 지역구분콤보 아이템 클릭 시
         ***************************************************************************/
        this.divForm_div02_cboRgn_onitemclick = function(obj,e)
        {
        	this.cboRgnSe = "1";
        };

        /**************************************************************************
         * @name : 협조처리 그리드
         * @description :
         ***************************************************************************/
        this.grdRvw_oncellclick = function(obj,e)
        {
        	// 담당자 찾기
        	if(e.cell == obj.getBindCellIndex("body", "prcrNm")) {
        	    var oOption = { title:"담당자 찾기", titlebar:true, width:900, height:700 };
        		this.gfnOpenPopup("picSch", "work::CST/TSC/CST002P27.xfdl", "", "fnPopupCallback", oOption);
        	}else
            // 업무협조 셀
        	if(e.cell == obj.getBindCellIndex("body", "cstrnKndCd")) {
        	    //kjs if(obj.getCellPropertyValue(0, e.cell, "cssclass").indexOf("CellLink") != -1) {
        		    var ds = this[obj.binddataset];
        		    // 협조업무명

        			console.log(this.dsDocCd.getColumn(this.dsDocCd.findRow("docCd", ds.getColumn(ds.rowposition, "cstrnKndCd")), "docNm"));
        			console.log(this.dsMst.getColumn(0, "ctrtChcYn") == 0 ? this.dsMst.getColumn(0, "hwrtInptPstnInfoCn") : this.dsMst.getColumn(0, "pstnInfoRnb"));

        			//return;

        		    ds.setColumn(ds.rowposition, "cstrnKndNm" , this.dsDocCd.getColumn(this.dsDocCd.findRow("docCd", ds.getColumn(ds.rowposition, "cstrnKndCd")), "docNm"));
        		    // 위치정보룸번호
        			ds.setColumn(ds.rowposition, "pstnInfoRnb", this.dsMst.getColumn(0, "ctrtChcYn") == 0 ? this.dsMst.getColumn(0, "hwrtInptPstnInfoCn") : this.dsMst.getColumn(0, "pstnInfoRnb"));
        			// 편집권한
        			ds.setColumn(ds.rowposition, "isEdtrPsblty", ds.getColumn(ds.rowposition, "isEdtrPsblty")  // 편집권한여부
                                                              && !obj.readonly                                 // 그리드 편집가능
        													  && this.dsMst.isEdtrPsblty                       // Main 편집권한여부
        						 ); // 편집가능여부
        			// 첨부파일 정보
        			//this.RaonkUploadRvw.upatflinfo = { aplyNo : ds.getColumn(ds.rowposition, "aplyNo")
        			  //                               , colid  : ds.getColumn(ds.rowposition, "colId")
        				//						     };
        			// 데이터 편짐 권한이 없으면...
        			var dtlProcsEtcCn = ds.getColumn(ds.rowposition, "dtlProcsEtcCn");  // 상세공정기타내용
        			if(!this.dsMst.isEdtrPsblty || (dtlProcsEtcCn == "FICA" && !this.cfnGetAtrb.call("vsBgncstAprvRvwDeptEdtr")) || (dtlProcsEtcCn == "COMA" && !this.cfnGetAtrb.call("vsCmcnInspRvwDeptEdtr"))) {
        				ds.setColumn(ds.rowposition, "isEdtrPsblty", false);
        			}

                    ds.applyChange();

        		    var oArg    = { pvObjDsJobDrctn  : ds
        			              , pvObjDsRvwAtfl   : this.dsRvwAtfl
        			              , pvObjRaonkUpload : this.RaonkUploadRvw
        			              };
        			var oOption = { title:"검토의견", titlebar:true, width:800, height:800 };

        			//var id = obj.name.startsWith("grdBgncst") ? this.divCoprPrcs.form.grdBgncstAprvRvw.name : this.divCoprPrcs.form.grdCmcnInspRvw.name;
        			var id = this.divForm.form.Div10.form.divCoprPrcs.form.grdBgncstAprvRvw.name;
        			this.gfnOpenPopup(id, "work::CST/TSC/CST002P31.xfdl", oArg, "fnPopupCallback", oOption);
        		//}
        	} else if(e.cell == 7) {  // 첨부파일
        		if(obj.getCellPropertyValue(0, 7, "displaytype") == "buttoncontrol") {  // 파일
        			// 파일 다운로드
        			this.cfnFileDwnld(this.RaonkUploadRvw, this.dsRvwAtfl, this[obj.binddataset].getColumn(e.row, "colId"), e);
        		}
        	}

        };

        this.dsRvw_onload = function(obj,e)
        {
        	//alert("11");
        	// 담당부서 표시를 위한 처리
        	if(this.dsAtrb) {
        		for(var i = 0; i < obj.rowcount; i++) {
        			if(obj.findRow("jobGroupId", obj.getColumn(i, "prcrId") == -1)) {
        				var nRow = this.dsJobGroupCd.addRow();
        				this.dsJobGroupCd.setColumn(nRow, "jobGroupId", obj.getColumn(i , "prcrId"    ));
        				this.dsJobGroupCd.setColumn(nRow, "jobGroupNm", obj.getColumn(i , "prcrDeptNm"));
        				obj.setColumn(obj.rowposition   , "tmprCd"    , obj.getColumn(i , "prcrId"    ));
        			}
        		}
        	}
        //alert("22");
            // 행의 높이에 따라 그리드의 높이를 재설정
        	//this.cfnGridResizeHeight(obj.name == "dsBgncstAprvRvw" ? this.divCoprPrcs.form.grdBgncstAprvRvw : this.divCoprPrcs.form.grdCmcnInspRvw);
        	this.cfnGridResizeHeight(this.divForm.form.Div10.form.divCoprPrcs.form.grdBgncstAprvRvw);

        //alert("33");
        };

        this.dsRvw_onrowposchanged = function(obj,e)
        {
            console.log("LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL");
        	// 행의 높이에 따라 그리드의 높이를 재설정
        	this.cfnGridResizeHeight(this.divForm.form.Div10.form.divCoprPrcs.form.grdBgncstAprvRvw);
        };

        this.dsRvw_onvaluechanged = function(obj,e)
        {
            // 담당부서(처리그룹)
        	if(e.columnid == "tmprCd") {
        		if(e.newvalue && e.newvalue.startsWith("WOG")) {
        			obj.setColumn(obj.rowposition, "prcrJobGroupCd", e.newvalue);  // 담당그룹코드
        			obj.setColumn(obj.rowposition, "prcrId"        , ""        );  // 담당자ID
        			obj.setColumn(obj.rowposition, "prcrNm"        , ""        );  // 처리자명
        			obj.setColumn(obj.rowposition, "prcrTelno"     , ""        );  // 처리자전화번호
        			obj.setColumn(obj.rowposition, "prcrDeptCd"    , ""        );  // 처리자부서코드
        			obj.setColumn(obj.rowposition, "prcrInstCd"    , ""        );  // 처리자기관코드
        			obj.setColumn(obj.rowposition, "prcrTelno"     , this.dsJobGroupCd.getColumn(this.dsJobGroupCd.findRow("jobGroupId", e.newvalue), "prcrTelno"));  // 전화번호
        		} else {
        			obj.setColumn(obj.rowposition, "prcrJobGroupCd", ""        );  // 담당그룹코드
        		}
            // 협조업무코드
        	} else if(e.columnid == "cstrnKndCd") {
        		this.dsBgncstAprvRvw.setColumn(obj.rowposition, "seCd", e.newvalue);  // 구분코드
        	}
        };

        // 착공승인검토,준공검사 그리드 버튼 클릭
        this.grdRvw_Button_onclick = function(obj,e)
        {
            var isBgncst = obj.name.startsWith("btnBgncst");
        	var ds       = isBgncst ? this.dsBgncstAprvRvw : this.dsCmcnInspRvw;
        	var ds       = this.dsBgncstAprvRvw;
        	var grd      = this.divForm.form.Div10.form.divCoprPrcs.form.grdBgncstAprvRvw;

        	trace("obj.name.endsWith1==>" + obj.name.endsWith("EblcAdd"));
        	trace("obj.name.endsWith2==>" + obj.name.endsWith("Strg"));
        	trace("obj.name.endsWith3==>" + obj.name.endsWith("Add"));
        	trace("obj.name.endsWith4==>" + obj.name.endsWith("Del"));
        	trace("obj.name.endsWith5==>" + obj.name.endsWith("Inq"));

        	if(obj.name.endsWith("Inq")) {  // 조회
        	    this.dsSearch.setColumn(0, "dtlProcsEtcCn", isBgncst ? "FICA" : "COMA");

        		trace("ccccc111===>" + obj.name);
        		trace("ccccc22===>" + this.divForm.form.Div10.form.divCoprPrcs.form.btnBgncstRvwInq.name);

        		this.fnSrvcCall(obj.name);

        	} else if(obj.name.endsWith("Strg")) {  // 저장
        	    // 데이터 점검
        	    if(this.cfnIsVldRvwDat(grd)) {

        			this.fnSrvcCall(obj.name);
        		}
        	} else {
        		var wfInfo = this.cfnGetWfInfo("CTL01625");  // 등록버튼(협조요청준비)

        		if(obj.name.endsWith("EblcAdd")) {      // 일괄추가
        			for(var i = 0; i < this.dsDocCd.rowcount; i++) {
        				wfInfo.docCd = this.dsDocCd.getColumn(i, "docCd");  // 협조업무코드
        				this.cfndsBgncstAprvRvwAdd(ds, wfInfo);
        			}
        		} else if(obj.name.endsWith("Add")) {  // 추가

        			this.cfndsBgncstAprvRvwAdd(ds, wfInfo);

        		} else if(obj.name.endsWith("Del")) {  // 삭제

        			for(var i = ds.rowcount - 1; i >= 0; i--) {

        				if(ds.getColumn(i, "chc")) {
        					ds.deleteRow(i);
        				}
        			}
        		}

        		// 행의 높이에 따라 그리드의 높이를 재설정
        		this.cfnGridResizeHeight(grd);
        	}
        };


        this.grdRvw_onexpanddown = function(obj,e)
        {

        	trace("cccc==>" + e.col);
            // 담당자 찾기
        	if(e.col == this.divForm.form.Div10.form.divCoprPrcs.form.grdBgncstAprvRvw.getBindCellIndex("body", "prcrNm")) {
        	    var oOption = { title:"담당자 찾기", titlebar:true, width:900, height:700 };
        		this.gfnOpenPopup("picSch", "work::CST/TSC/CST002P27.xfdl", "", "fnPopupCallback", oOption);
        	}
        };

        // 행의 높이에 따라 그리드의 높이를 재설정
        this.cfnGridResizeHeight = function(oGrd) {
        	oGrd.height = oGrd.getRealRowFullSize() + 20;
        	oGrd.parent.parent.height = oGrd.getRealRowFullSize() + 80;
        	this.resetScroll();
        };


        this.dsRvwAtfl_onload = function(obj,e)
        {
        	// 데이터 조회 후 첨부파일 파일리스트에 셋팅
        	if(this.RaonkUploadRvw) {
        		if(this.dsRvwAtfl.rowcount > 0) {
        			// RaonkUpload 초기화
        			this.RaonkUploadRvw.ResetUpload();
        			this.gfnDownloadSetting(this.RaonkUploadRvw, this.dsRvwAtfl);
        		}

        //        if(this.RaonkUploadRvw.GetListInfo() && this.RaonkUploadRvw.GetListInfo().mergeFile) {
        // 			console.log("LLLLLLLLL_RaonkUploadRvw.GetListInfo().mergeFile========" + this.RaonkUploadRvw.GetListInfo().mergeFile);
        // 			if(this.RaonkUploadRvw.GetListInfo().mergeFile) {
        // 				console.log("LLLLLLLLL_RaonkUploadRvw.GetListInfo().mergeFile.length=" + this.RaonkUploadRvw.GetListInfo().mergeFile.length);
        // 			}
        // 		}
        	}

        	this.resetScroll();
        };


        this.cfndsBgncstAprvRvwAdd = function(ds, wfInfo) {
            // Rvw_Button_onclick
            var nRow = ds.findRow("cstrnKndCd", wfInfo.docCd);
        	    nRow = nRow == -1 ? ds.rowcount : (nRow + 1);
            ds.insertRow(nRow);
        	ds.setColumn(nRow, "souId"        , this.dsMst.getColumn(0, "aplyNo")         );  // 원천ID(신청서번호)
        	ds.setColumn(nRow, "jobCd"        , wfInfo.jobPrcsPrgrsSeCd                   );  // 단계코드
        	ds.setColumn(nRow, "jobNm"        , wfInfo.jobPrcsPrgrsSeCdNm                 );  // 단계명
        	//kjs 임시막음 ds.setColumn(nRow, "cstrnKndCd"   , wfInfo.docCd                              );  // 협조업무코드
        	ds.setColumn(nRow, "cstrnKndCd"   , "Y06140"                              );  // 협조업무코드
        	// -----------------
        	ds.setColumn(nRow, "dtlProcsEtcCn", ds.name.startsWith("dsBgncst") ? "FICA" : "COMA");  // 상세공정기타내용
        	ds.setColumn(nRow, "souProcsId"   , "TSC"                                     );  // 원천공정ID
        	ds.setColumn(nRow, "aplcntId"     , this.objApp.gdsUser.getColumn(0, "userId"));  // 신청자ID
        	ds.setColumn(nRow, "aplcntInstCd" , this.objApp.gdsUser.getColumn(0, "coId"  ));  // 신청자기관코드
        	ds.setColumn(nRow, "aplcntDeptCd" , this.objApp.gdsUser.getColumn(0, "deptId"));  // 신청자부서코드
        	ds.setColumn(nRow, "rgtrId"       , this.objApp.gdsUser.getColumn(0, "userId"));  // 등록자ID
        	ds.setColumn(nRow, "rgtrInstCd"   , this.objApp.gdsUser.getColumn(0, "coId"  ));  // 등록자기관코드
        	ds.setColumn(nRow, "rgtrDeptCd"   , this.objApp.gdsUser.getColumn(0, "deptId"));  // 등록자부서코드
        };

        this.fnSrvcCall = function(srvcId)
        {
        	trace("ss==>" + this.divForm.form.Div10.form.divCoprPrcs.form.btnBgncstRvwInq.name);

        	var strSrvcId   = srvcId;         // transaction을 구분하기 위한 svc id값
        	var strSvcUrl   = "";             // trabsaction을 요청할 주소
        	var inData      = "";             // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        	var outData     = "";             // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        	var strArg      = "";             // 입력값으로 보낼 arguments, strFormData="20120607"
        	var callBackFnc = "fnCallback";   // transaction의 결과를 받을 Function 이름
        	var isAsync   	= true;           // 비동기통신 여부 [생략가능]

        	switch(strSrvcId)
        	{
        		case this.divForm.form.Div10.form.divCoprPrcs.form.btnBgncstRvwInq.name :  // 조회(착공승인검토)
        		//case this.divCoprPrcs.form.btnCmcnRvwInq.name :    // 조회(준공검사)
        			strSvcUrl = "hnovAcptnAply/selectRvw.do";
        			inData    = "dsSearch=dsSearch";                     // 조회조건
        			outData   = "dsBgncstAprvRvw=dsBgncstAprvRvw"  // 착공승인검토
        			          //+ "dsCmcnInspRvw=dsCmcnInspRvw"     + " "  // 준공검사
        			          //+ "dsRvwAtfl=dsRvwAtfl"
        					  ;
        			break;

        		case this.divForm.form.Div10.form.divCoprPrcs.form.btnBgncstRvwStrg.name :  // 저장(착공승인검토)
        		//case this.divCoprPrcs.form.btnCmcnRvwStrg.name :    // 저장(준공검사)
        			strSvcUrl = "hnovAcptnAply/saveRvw.do";
        			inData    = [];
        			outData   = "";
        			if(this.gfnDsIsUpdated(this.dsBgncstAprvRvw)) { inData.push("dsJobDrctn=dsBgncstAprvRvw:U"); }  // 협조처리내역
        			//if(this.gfnDsIsUpdated(this.dsCmcnInspRvw  )) { inData.push("dsJobDrctn=dsCmcnInspRvw:U"  ); }  // 준공검사검토 내역
        			//if(this.gfnDsIsUpdated(this.dsRvwAtfl      )) { inData.push("dsRvwAtfl=dsRvwAtfl:U"       ); }  // 검토 첨부파일
        			inData = inData.join(" ");

        			break;
        	}

        	trace("return_11_인게인수 자바 개발 필요==>" + strSvcUrl);
        	//return;

        	this.gfnTransaction( strSrvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        this.cfnIsVldRvwDat = function(grdRvw) {
            console.log(this.name + "_VVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");

        	var dsRvw = this[grdRvw.binddataset];
        	// 검토내역 데이터 점검
        	for(var i = 0; i < dsRvw.rowcount; i++) {
        		// 업무협조 코드
        		if(this.gfnIsNull(dsRvw.getColumn(i, "cstrnKndCd"))) {
        			// {0}는(은) 필수 항목입니다!
        			this.gfnAlertMsg("CST_004", "CST_004", ["업무협조코드(공사종류코드)"], function() {
        				grdRvw.setFocus();
        				grdRvw.setCellPos(grdRvw.getBindCellIndex("body", "cstrnKndCd"), i);
        				grdRvw.showEditor(true);
        			});

        			return false;
        		}

        		// 처리그룹 또는 담당자
        		if(this.gfnIsNull(dsRvw.getColumn(i, "prcrJobGroupCd")) && this.gfnIsNull(dsRvw.getColumn(i, "prcrId"))) {
        			// {0}는(은) 필수 항목입니다!
        			this.gfnAlertMsg("CST_004", "CST_004", ["처리그룹 또는 담당자"], function() {
        				grdRvw.setFocus();
        				grdRvw.setCellPos(grdRvw.getBindCellIndex("body", "tmprCd"), i);
        				grdRvw.showEditor(true);
        			});

        			return false;
        		}
        	}

        	return true;
        };

        // 계약선택팝업 버튼 클릭
        this.divForm_Div01_divEdtPop00_btnCtrtChc_onclick = function(obj,e)
        {
        	var oOption = { title:"계약선택", titlebar:true, width:900, height:700 };
        	this.gfnOpenPopup("btnCtrtChc_Popup", "work::CST/COM/CST002P01.xfdl", "", "fnPopupCallback", oOption);
        };


        this.divForm_div02_btnRnbNoInpt_onclick = function(obj,e)
        {
        	var sTitle = "룸번호입력팝업";

        	var objArg   = {
        		  paramInstNm : this.gvCoNm
        		, paramNm : this.gvUserNm
        	};

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
        		, width: 700
        		, height: 680			//width,height 지정하지 않음 popup form size적용
        		, autosize: false
        		, title: sTitle
        		, resize: true
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("rnbNoInptPop", "work::LIF/COM/LIF901P01.xfdl", objArg, sPopupCallBack, objOption);
        };

        this.fnRnbCopy = function()
        {
        	alert("sss==>" + this.dsTscAplyRnbMng.saveXML());

        };

        this.divQuick_btn00_00_00_00_00_00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onvscroll",this.form_onvscroll,this);
            this.divForm.form.btnMinTitle.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.divInfoGuide.form.btnSchClose.addEventHandler("onclick",this.divInfoGuide_btnSchClose_onclick,this);
            this.divForm.form.Div01.form.divEdtPop00.form.btnCtrtChc.addEventHandler("onclick",this.divForm_Div01_divEdtPop00_btnCtrtChc_onclick,this);
            this.divForm.form.Div01.form.rdoCtrtChcYn.addEventHandler("onitemchanged",this.divForm_Div01_rdoCtrtChcYn_onitemchanged,this);
            this.divForm.form.div02.form.cmbRgnSeCrtr.addEventHandler("onitemchanged",this.divForm_div02_cboRgn_onitemchanged,this);
            this.divForm.form.div02.form.cmbRgnSeCrtr.addEventHandler("onitemclick",this.divForm_div02_cboRgn_onitemclick,this);
            this.divForm.form.div02.form.cboRgn.addEventHandler("onitemchanged",this.divForm_div02_cboRgn_onitemchanged,this);
            this.divForm.form.div02.form.cboRgn.addEventHandler("onitemclick",this.divForm_div02_cboRgn_onitemclick,this);
            this.divForm.form.div02.form.btnRnbNoInpt.addEventHandler("onclick",this.divForm_div02_btnRnbNoInpt_onclick,this);
            this.divForm.form.div00.form.rdoRtpyrSmYn.addEventHandler("onitemchanged",this.divForm_div00_rdoRtpyrSmYn_onitemchanged,this);
            this.divForm.form.Div05.form.divPrvcWtcs.form.Static02.addEventHandler("onclick",this.Static02_onclick,this);
            this.divForm.form.Div05.form.btn_del_file_1_00_00.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div05.form.Grid00_00_01.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div05.form.Grid00_00_01.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div05.form.btn_del_file_1_00_00_00.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div05.form.Grid00_00_01_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div05.form.Grid00_00_01_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div05.form.btn_file_1_00_01.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.Div05.form.btn_file_1_00_01_00.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
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
            this.divForm.form.Div09.form.cboAcptnHnovDt_HH.addEventHandler("onitemchanged",this.cbo00_onitemchanged,this);
            this.divForm.form.Div09.form.btn_file_1.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.Div09.form.btn_del_file_1.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div09.form.Grid00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div09.form.Grid00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div10.form.btn_file_1.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.Div10.form.btn_del_file_1.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div10.form.Grid00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div10.form.Grid00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div10.form.btnCoprPrcs.addEventHandler("onclick",this.Button_onclick,this);
            this.divForm.form.Div10.form.btnCoprPrcs.addEventHandler("ondblclick",this.Button_ondblclick,this);
            this.divForm.form.Div10.form.divCoprPrcs.form.grdBgncstAprvRvw.addEventHandler("oncellposchanged",this.grdRvw_oncellposchanged,this);
            this.divForm.form.Div10.form.divCoprPrcs.form.grdBgncstAprvRvw.addEventHandler("onexpanddown",this.grdRvw_onexpanddown,this);
            this.divForm.form.Div10.form.divCoprPrcs.form.grdBgncstAprvRvw.addEventHandler("oncellclick",this.grdRvw_oncellclick,this);
            this.divForm.form.Div10.form.divCoprPrcs.form.btnBgncstRvwInq.addEventHandler("onclick",this.grdRvw_Button_onclick,this);
            this.divForm.form.Div10.form.divCoprPrcs.form.btnBgncstRvwEblcAdd.addEventHandler("onclick",this.grdRvw_Button_onclick,this);
            this.divForm.form.Div10.form.divCoprPrcs.form.btnBgncstRvwAdd.addEventHandler("onclick",this.grdRvw_Button_onclick,this);
            this.divForm.form.Div10.form.divCoprPrcs.form.btnBgncstRvwDel.addEventHandler("onclick",this.grdRvw_Button_onclick,this);
            this.divForm.form.Div10.form.divCoprPrcs.form.btnBgncstRvwStrg.addEventHandler("onclick",this.grdRvw_Button_onclick,this);
            this.divQuick.form.btn00_00_00_00_00_00.addEventHandler("onclick",this.divQuick_btn00_00_00_00_00_00_onclick,this);
            this.dsMst.addEventHandler("onvaluechanged",this.dsMst_onvaluechanged,this);
            this.dsMst.addEventHandler("onload",this.dsMst_onload,this);
            this.dsAtfl.addEventHandler("onload",this.dsAtfl_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsMain_onvaluechanged,this);
            this.dsBgncstAprvRvw.addEventHandler("onload",this.dsRvw_onload,this);
            this.dsBgncstAprvRvw.addEventHandler("onrowposchanged",this.dsRvw_onrowposchanged,this);
            this.dsBgncstAprvRvw.addEventHandler("onvaluechanged",this.dsRvw_onvaluechanged,this);
            this.dsCmcnInspRvw.addEventHandler("onload",this.dsRvw_onload,this);
            this.dsCmcnInspRvw.addEventHandler("onrowposchanged",this.dsRvw_onrowposchanged,this);
            this.dsCmcnInspRvw.addEventHandler("onvaluechanged",this.dsRvw_onvaluechanged,this);
            this.dsRvwAtfl.addEventHandler("onload",this.dsRvwAtfl_onload,this);
            this.dsDocCd.addEventHandler("cancolumnchange",this.dsDocCd_cancolumnchange,this);
        };
        this.loadIncludeScript("LIF052M00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
