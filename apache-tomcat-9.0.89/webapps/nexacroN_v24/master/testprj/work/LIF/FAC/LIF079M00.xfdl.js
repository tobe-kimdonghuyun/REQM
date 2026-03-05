(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LIF079M00");
            this.set_titletext("부가시설물설치및연장신청 신청서작성");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFacAddedFcltyMst", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"fcltSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"sn\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyKndCd\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/><Column id=\"aplyDt\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"ownrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"endCd\" type=\"STRING\" size=\"256\"/><Column id=\"cnvyMttrCn\" type=\"STRING\" size=\"256\"/><Column id=\"clrId\" type=\"STRING\" size=\"256\"/><Column id=\"rcptDt\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnRspnsYn\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnRspnsDt\" type=\"STRING\" size=\"256\"/><Column id=\"docCd\" type=\"STRING\" size=\"256\"/><Column id=\"custTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrTelno\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrMblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"ymdDsgnSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"instlDmndPrdBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"instlDmndPrdEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"bldgSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"zoneSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"srvcAplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"dtlArtclCn\" type=\"STRING\" size=\"256\"/><Column id=\"qty\" type=\"STRING\" size=\"256\"/><Column id=\"shopAreaVl\" type=\"STRING\" size=\"256\"/><Column id=\"wdthVl\" type=\"STRING\" size=\"256\"/><Column id=\"vrtcVl\" type=\"STRING\" size=\"256\"/><Column id=\"hgtVl\" type=\"STRING\" size=\"256\"/><Column id=\"instlPstnCn\" type=\"STRING\" size=\"256\"/><Column id=\"usgCn\" type=\"STRING\" size=\"256\"/><Column id=\"splmntDmndRsnCn\" type=\"STRING\" size=\"256\"/><Column id=\"srvcDmndCnIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"srvcAplyInfoIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"addedFcltyFrtPhotoPath\" type=\"STRING\" size=\"256\"/><Column id=\"addedFcltyRarPhotoPath\" type=\"STRING\" size=\"256\"/><Column id=\"addedFcltyFlkPhotoPath\" type=\"STRING\" size=\"256\"/><Column id=\"addedFcltyEtc1PhotoPath\" type=\"STRING\" size=\"256\"/><Column id=\"addedFcltyEtc2PhotoPath\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsRenUseList", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCustTypeCdList", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsZoneCdList", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrvcAplySeList", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCnvyMttr", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/><Column id=\"cnvyMttrCn\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"fcltSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"sn\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyKndCd\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/><Column id=\"aplyDt\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"ownrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"endCd\" type=\"STRING\" size=\"256\"/><Column id=\"cnvyMttrCn\" type=\"STRING\" size=\"256\"/><Column id=\"clrId\" type=\"STRING\" size=\"256\"/><Column id=\"rcptDt\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnRspnsYn\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnRspnsDt\" type=\"STRING\" size=\"256\"/><Column id=\"docCd\" type=\"STRING\" size=\"256\"/><Column id=\"custTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrTelno\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrMblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"ymdDsgnSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"instlDmndPrdBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"instlDmndPrdEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"bldgSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"zoneSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"srvcAplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"dtlArtclCn\" type=\"STRING\" size=\"256\"/><Column id=\"qty\" type=\"STRING\" size=\"256\"/><Column id=\"shopAreaVl\" type=\"STRING\" size=\"256\"/><Column id=\"wdthVl\" type=\"STRING\" size=\"256\"/><Column id=\"vrtcVl\" type=\"STRING\" size=\"256\"/><Column id=\"hgtVl\" type=\"STRING\" size=\"256\"/><Column id=\"instlPstnCn\" type=\"STRING\" size=\"256\"/><Column id=\"usgCn\" type=\"STRING\" size=\"256\"/><Column id=\"splmntDmndRsnCn\" type=\"STRING\" size=\"256\"/><Column id=\"srvcDmndCnIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"srvcAplyInfoIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"addedFcltyFrtPhotoPath\" type=\"STRING\" size=\"256\"/><Column id=\"addedFcltyRarPhotoPath\" type=\"STRING\" size=\"256\"/><Column id=\"addedFcltyFlkPhotoPath\" type=\"STRING\" size=\"256\"/><Column id=\"addedFcltyEtc1PhotoPath\" type=\"STRING\" size=\"256\"/><Column id=\"addedFcltyEtc2PhotoPath\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrvcAplySeList_SANG", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdNm\">선택</Col></Row><Row><Col id=\"cdTypeId\">FACSVCTYPE</Col><Col id=\"cdId\">FACSVCTYPE091</Col><Col id=\"cdNm\">이젤형게시판</Col></Row><Row><Col id=\"cdId\">FACSVCTYPE092</Col><Col id=\"cdTypeId\">FACSVCTYPE</Col><Col id=\"cdNm\">행렬관리봉</Col></Row><Row><Col id=\"cdId\">FACSVCTYPE093</Col><Col id=\"cdNm\">DID</Col><Col id=\"cdTypeId\">FACSVCTYPE</Col></Row><Row><Col id=\"cdId\">FACSVCTYPE094</Col><Col id=\"cdNm\">안내데스크</Col><Col id=\"cdTypeId\">FACSVCTYPE</Col></Row><Row><Col id=\"cdId\">FACSVCTYPE095</Col><Col id=\"cdNm\">순번대기표</Col><Col id=\"cdTypeId\">FACSVCTYPE</Col></Row><Row><Col id=\"cdId\">FACSVCTYPE096</Col><Col id=\"cdNm\">세관안내문</Col><Col id=\"cdTypeId\">FACSVCTYPE</Col></Row></Rows>");
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

            obj = new Div("Div01","0","0","100%","429",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan01_AplyNo","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_aplyNo\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00","20","-429","980","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("24");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAplySeNm\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("23");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","10","98","65","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("신청번호");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtAplySeNm11","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_aplyNo","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Panel03\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAplySeNm11\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtAplySeNm","0","-378","100%","34",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("27");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00","0","-427","65","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("26");
            obj.set_text("신청구분 ");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel03_00","0","-429","100%","51",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("25");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_spacing("10px 0px 10px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"btnHstry\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Button("btnHstry","841","110","147","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("28");
            obj.set_text("과거신청이력 불러오기");
            obj.set_fittocontents("width");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel03","78","37","100%","60",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("11");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_spacing("10px 0px 10px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("4");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_01_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("6");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("7");
            obj.set_text("신청자 회사명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"divEdtPop00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Div("divEdtPop00","280","274","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("10");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.Div01.form.divEdtPop00.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            this.divForm.form.Div01.form.divEdtPop00.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_02_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("12");
            obj.set_text("등록자 전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00_00_00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_02_00","10.00","98","305","130",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("14");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_00_01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("15");
            obj.set_text("등록자 휴대폰 번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_01_00","10.00","98","305","130",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan04","0","60","100.00%","141",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("17");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00_01_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta00","200.00","383","100%","47",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("18");
            obj.set_text("전화번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 등록 및 수정이 가능합니다.");
            obj.set_cssclass("sta_WF_TxtRed");
            obj.set_fittocontents("height");
            obj.set_wordWrap("char");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel02","104","417","100%","94",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("19");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"edt00_01_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00_00_00_00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("20");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta00_00","200.00","383","100%","47",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("21");
            obj.set_text("휴대폰번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 등록 및 수정이 가능합니다.");
            obj.set_cssclass("sta_WF_TxtRed");
            obj.set_fittocontents("height");
            obj.set_wordWrap("char");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","104","417","100%","94",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("22");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"edt00_01_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("sub_tit02","1630","674","100%","70",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("10");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div02","0","Div01:376.428","100%","3079",null,null,null,null,null,null,this.divForm.form);
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

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("1");
            obj.set_text("신청종류");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoAplyKndCd\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Radio("rdoAplyKndCd","200.00","328","393","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div02_form_rdoAplyKndCd_innerdataset = new nexacro.NormalDataset("divForm_form_Div02_form_rdoAplyKndCd_innerdataset", obj);
            divForm_form_Div02_form_rdoAplyKndCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">FACREQTYPE001</Col><Col id=\"datacolumn\">신규신청</Col></Row><Row><Col id=\"codecolumn\">FACREQTYPE002</Col><Col id=\"datacolumn\">연장신청</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div02_form_rdoAplyKndCd_innerdataset);
            obj.set_text("Select");
            obj.set_value("0");
            obj.set_index("0");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("4");
            obj.set_text("시설구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Radio("rdoFcltSe","200.00","328","393","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div02_form_rdoFcltSe_innerdataset = new nexacro.NormalDataset("divForm_form_Div02_form_rdoFcltSe_innerdataset", obj);
            divForm_form_Div02_form_rdoFcltSe_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">RENUSE001</Col><Col id=\"datacolumn\">업무용시설</Col></Row><Row><Col id=\"codecolumn\">RENUSE002</Col><Col id=\"datacolumn\">상업용시설</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div02_form_rdoFcltSe_innerdataset);
            obj.set_text("");
            obj.set_value("0");
            obj.set_index("-1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_02","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoFcltSe\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("7");
            obj.set_text("고객유형");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Radio("rdoCustTypeCd","200.00","328","100%","62",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_rowcount("2");
            obj.set_fittocontents("width");
            var divForm_form_Div02_form_rdoCustTypeCd_innerdataset = new nexacro.NormalDataset("divForm_form_Div02_form_rdoCustTypeCd_innerdataset", obj);
            divForm_form_Div02_form_rdoCustTypeCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">FACCOMTYPE001</Col><Col id=\"datacolumn\">공항공사</Col></Row><Row><Col id=\"codecolumn\">FACCOMTYPE002</Col><Col id=\"datacolumn\">자회사</Col></Row><Row><Col id=\"datacolumn\">항공사</Col><Col id=\"codecolumn\">FACCOMTYPE003</Col></Row><Row><Col id=\"datacolumn\">호텔</Col><Col id=\"codecolumn\">FACCOMTYPE004</Col></Row><Row><Col id=\"datacolumn\">기타고객</Col><Col id=\"codecolumn\">FACCOMTYPE005</Col></Row><Row><Col id=\"datacolumn\">상업/면세</Col><Col id=\"codecolumn\">FACCOMTYPE006</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div02_form_rdoCustTypeCd_innerdataset);
            obj.set_text("Select");
            obj.set_value("0");
            obj.set_index("0");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01","10.00","98","970","108",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoCustTypeCd\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100.00%","119",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("10");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Div("divCal","1030","75","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("11");
            obj.set_text("Div00");
            obj.set_flexgrow("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Calendar("calBgngYmd","0","0","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form.divCal.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.Div02.form.divCal.addChild(obj.name, obj);

            obj = new Static("staDash","calBgngYmd:10","0","10","40",null,null,null,null,null,null,this.divForm.form.Div02.form.divCal.form);
            obj.set_taborder("1");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_Dash");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.form.divCal.addChild(obj.name, obj);

            obj = new Calendar("calEndYmd","staDash:10","0","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form.divCal.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.Div02.form.divCal.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("12");
            obj.set_text("설치요청기간");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("13");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"divCal\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("14");
            obj.set_text("일수");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_02_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"edtDiffDate\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan03","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("16");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_01_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel00_00_02_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtDiffDate","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("17");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("18");
            obj.set_text("건물구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("19");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"cboBldgSe\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("20");
            obj.set_text("구역구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_02_00_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("21");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoZone\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan04","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("22");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_01_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel00_00_02_00_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Radio("rdoZone","200.00","328","393","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("23");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div02_form_rdoZone_innerdataset = new nexacro.NormalDataset("divForm_form_Div02_form_rdoZone_innerdataset", obj);
            divForm_form_Div02_form_rdoZone_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">TSCWPLARA001</Col><Col id=\"datacolumn\">A/S보호구역</Col></Row><Row><Col id=\"codecolumn\">TSCWPLARA002</Col><Col id=\"datacolumn\">L/S일반구역</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div02_form_rdoZone_innerdataset);
            obj.set_text("Select");
            obj.set_value("0");
            obj.set_index("0");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Combo("cboBldgSe","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("24");
            obj.set_innerdataset("dsBldgSeList");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_displaynulltext("[건물구분]");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("25");
            obj.set_text("상업용시설 부가시설물 신청내역 리스트");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_00_00_00","10.00","98","305","376",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("26");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"divGrd\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan041","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("37");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_01_00_00_02\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel_dtlArtlc\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan042","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("44");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_01_00_00_02_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel00_00_02_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_02_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel00_00_02_00_00_00_00_00_02\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel00_00_02_00_00_00_00_00_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan043","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("57");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_01_00_00_02_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan044","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("62");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_01_00_00_02_01_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panFile","0","42","100.00%","161",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("76");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panFile00","0","42","100.00%","161",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("90");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panFile01","0","42","100.00%","161",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("104");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panFile02","0","42","100.00%","161",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("118");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_03\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_02\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panFile03","0","42","100.00%","161",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("132");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle03\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_04\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_03\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan05","0","60","100.00%","387",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("27");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_01_00_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Div("divGrd","0","54","100%","330",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("28");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn",null,"0","550","34","0",null,null,null,null,null,this.divForm.form.Div02.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("width");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnGrdDel\"/><PanelItem id=\"PanelItem04\" componentid=\"btnGrdRegi\"/></Contents>");
            this.divForm.form.Div02.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdList","0","PanelGrdBtn:10","100%",null,null,"46",null,null,null,null,this.divForm.form.Div02.form.divGrd.form);
            obj.set_taborder("6");
            obj.set_binddataset("dsList");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"NO\"/><Cell col=\"2\" text=\"서비스&#13;&#10;신청구분\" cssclass=\"CellE\"/><Cell col=\"3\" text=\"수량\" cssclass=\"CellE\"/><Cell col=\"4\" text=\"가로\" cssclass=\"CellE\"/><Cell col=\"5\" text=\"세로\" cssclass=\"CellE\"/><Cell col=\"6\" text=\"높이\" cssclass=\"CellE\"/><Cell col=\"7\" text=\"설치위치\" cssclass=\"CellE\"/><Cell col=\"8\" text=\"용도\" cssclass=\"CellE\"/><Cell col=\"9\" text=\"부가시설물&#13;&#10;사진(전면)\" cssclass=\"CellE\"/><Cell col=\"10\" text=\"부가시설물&#13;&#10;사진(후면)\" cssclass=\"CellE\"/><Cell col=\"11\" text=\"부가시설물&#13;&#10;사진(측면)\" cssclass=\"CellE\"/><Cell col=\"12\" text=\"부가시설물&#13;&#10;사진(기타1)\"/><Cell col=\"13\" text=\"부가시설물&#13;&#10;사진(기타2)\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:srvcAplySeCd\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsSrvcAplySeList_SANG\" combocodecol=\"cdId\" combodatacol=\"cdNm\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:qty\" displaytype=\"editcontrol\" edittype=\"text\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:wdthVl\" displaytype=\"editcontrol\" edittype=\"text\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:vrtcVl\" displaytype=\"editcontrol\" edittype=\"text\" textAlign=\"right\"/><Cell col=\"6\" displaytype=\"editcontrol\" edittype=\"text\" text=\"bind:hgtVl\" textAlign=\"right\"/><Cell col=\"7\" edittype=\"text\" text=\"bind:instlPstnCn\" displaytype=\"editcontrol\" textAlign=\"left\"/><Cell col=\"8\" edittype=\"text\" text=\"bind:usgCn\" displaytype=\"editcontrol\" textAlign=\"left\"/><Cell col=\"9\" edittype=\"text\" text=\"bind:addedFcltyFrtPhotoPath\" displaytype=\"editcontrol\" textAlign=\"left\"/><Cell col=\"10\" edittype=\"text\" text=\"bind:addedFcltyRarPhotoPath\" displaytype=\"editcontrol\" textAlign=\"left\"/><Cell col=\"11\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"bind:addedFcltyFlkPhotoPath\"/><Cell col=\"12\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"bind:addedFcltyEtc1PhotoPath\"/><Cell col=\"13\" cssclass=\"CellEnd\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"bind:addedFcltyEtc2PhotoPath\"/></Band></Format></Formats>");
            this.divForm.form.Div02.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","27","34",null,null,null,null,null,null,this.divForm.form.Div02.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal01","staTotal:0","0","43","34",null,null,null,null,null,null,this.divForm.form.Div02.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","staTotal01:0","0","30","34",null,null,null,null,null,null,this.divForm.form.Div02.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divForm.form.Div02.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","316.00","0","45","34",null,null,null,null,null,null,this.divForm.form.Div02.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdRegi","371.00","0","45","34",null,null,null,null,null,null,this.divForm.form.Div02.form.divGrd.form);
            obj.set_taborder("5");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("29");
            obj.set_text("부가시설물 설치 및 운영기준");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_00_00_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("30");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan06","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("31");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_01_00_00_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("sta00","200.00","383","100%","30",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("32");
            obj.set_text("승인완료시 여객서비스팀 사무실로 스티커 방문수령 바랍니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00_00_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("33");
            obj.set_text("서비스신청구분(업무용)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_00_00_02","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("34");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00_00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"cboSrvcAplySe\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel_dtlArtlc","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("35");
            obj.set_text("세부항목(기타)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel_dtlArtlc","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("36");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel_dtlArtlc\"/><PanelItem id=\"PanelItem03\" componentid=\"edtDtlArtlc\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtDtlArtlc","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("38");
            obj.set_textAlign("left");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00_00_02_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("39");
            obj.set_text("수량");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_00_00_02_00","10.00","98","160","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("40");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00_00_02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtQty\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("41");
            obj.set_text("매장면적");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtDiffDate00_00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("42");
            obj.set_textAlign("right");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_02_00_00_00_00_00","10.00","98","160","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("43");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00_00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"edtDiffDate00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtQty","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("45");
            obj.set_textAlign("right");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00_00_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("46");
            obj.set_text("가로(mm)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtWdthVl","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("47");
            obj.set_textAlign("right");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_02_00_00_00_00_00_00","10.00","98","160","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("48");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"edtWdthVl\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00_00_00_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("49");
            obj.set_text("높이(mm)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtHgtVl","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("50");
            obj.set_textAlign("right");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_02_00_00_00_00_00_01","10.00","98","160","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("51");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00_00_00_00_01\"/><PanelItem id=\"PanelItem03\" componentid=\"edtHgtVl\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00_00_00_00_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("52");
            obj.set_text("세로(mm)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtVrtcVl","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("53");
            obj.set_textAlign("right");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_02_00_00_00_00_00_02","10.00","98","160","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("54");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00_00_00_00_02\"/><PanelItem id=\"PanelItem03\" componentid=\"edtVrtcVl\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00_00_02_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("55");
            obj.set_text("설치위치");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_00_00_02_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("56");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00_00_02_01\"/><PanelItem id=\"PanelItem02\" componentid=\"edtInstlPstnCn\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtInstlPstnCn","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("58");
            obj.set_textAlign("left");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00_00_02_01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("59");
            obj.set_text("용도");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtUsgCn","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("60");
            obj.set_textAlign("left");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_00_00_02_01_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("61");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00_00_02_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtUsgCn\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("63");
            obj.set_text("부가시설물사진(전면)");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("Button00","813","76","120","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("64");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_file_1","124","58","116","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("65");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panBtnFile","433","58","305","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("66");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panTitle","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("67");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj.set_spacing("0px 0px 10px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("68");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static01","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("69");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static02","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("70");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panFileNum","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("71");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1","512","135","125","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("72");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panBtnDel","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("73");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_1\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("74");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Grid("Grid00","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("75");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("77");
            obj.set_text("부가시설물사진(후면)");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("Button00_00","813","76","120","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("78");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_file_1_00","124","58","116","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("79");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00","433","58","305","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("80");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panTitle00","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("81");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj.set_spacing("0px 0px 10px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static00_00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("82");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static01_00","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("83");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static02_00","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("84");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panFileNum00","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("85");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1_00","512","135","125","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("86");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panBtnDel00","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("87");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_1_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("88");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("89");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_02","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("91");
            obj.set_text("부가시설물사진(측면)");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("Button00_01","813","76","120","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("92");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_file_1_01","124","58","116","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("93");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panBtnFile01","433","58","305","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("94");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_01\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panTitle01","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("95");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj.set_spacing("0px 0px 10px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_02\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static00_01","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("96");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static01_01","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("97");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static02_01","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("98");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panFileNum01","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("99");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1_01","512","135","125","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("100");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panBtnDel01","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("101");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_1_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("102");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum01\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Grid("Grid00_01","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("103");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_03","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("105");
            obj.set_text("부가시설물사진(기타)");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("Button00_02","813","76","120","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("106");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_file_1_02","124","58","116","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("107");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panBtnFile02","433","58","305","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("108");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_02\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_02\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panTitle02","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("109");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj.set_spacing("0px 0px 10px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_03\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile02\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static00_02","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("110");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static01_02","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("111");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static02_02","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("112");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panFileNum02","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("113");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_02\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1_02","512","135","125","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("114");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panBtnDel02","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("115");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_1_02\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_03","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("116");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum02\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel02\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Grid("Grid00_02","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("117");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_04","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("119");
            obj.set_text("부가시설물사진(기타2)");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("Button00_03","813","76","120","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("120");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_file_1_03","124","58","116","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("121");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panBtnFile03","433","58","305","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("122");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_03\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_03\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panTitle03","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("123");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj.set_spacing("0px 0px 10px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_04\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile03\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static00_03","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("124");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static01_03","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("125");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static02_03","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("126");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panFileNum03","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("127");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_03\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_03\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1_03","512","135","125","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("128");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panBtnDel03","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("129");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_1_03\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_04","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("130");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum03\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel03\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Grid("Grid00_03","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("131");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Combo("cboSrvcAplySe","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("133");
            obj.set_innerdataset("dsSrvcAplySeList");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_displaynulltext("[건물구분11]");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staPrvcClctChcAgreYn01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("134");
            obj.set_text("서비스요청내용확인");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Radio("rdoSrvcDmndCnYn","200.00","328","490","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("135");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div02_form_rdoSrvcDmndCnYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div02_form_rdoSrvcDmndCnYn_innerdataset", obj);
            divForm_form_Div02_form_rdoSrvcDmndCnYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">승인</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">보완</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">미승인</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div02_form_rdoSrvcDmndCnYn_innerdataset);
            obj.set_text("보완");
            obj.set_value("0");
            obj.set_index("1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_03_00_00_00_00_00_00","64.00","495","980","96",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("136");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPrvcClctChcAgreYn01\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoSrvcDmndCnYn\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan07","0","60","100.00%","107",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("137");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_03_00_00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staSplmntDmndRsn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("138");
            obj.set_text("보완요청사유");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new TextArea("txtSplmntDmndRsn","18","1593","100%","100",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("139");
            obj.set_readonly("false");
            obj.set_displaynulltext("내용입력");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan08","0","60","100.00%","177",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("140");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_fittocontents("height");
            obj.set_verticalgap("10");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("vertical");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staSplmntDmndRsn\"/><PanelItem id=\"PanelItem01\" componentid=\"txtSplmntDmndRsn\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Grid("grdSplmnt","18","1715","100%","150",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("141");
            obj.set_binddataset("dataSet00");
            obj.set_autofittype("col");
            obj.set_nodatatext("등록된 협조 및 처리 내용이 존재하지 않습니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"별칭\"/><Cell col=\"1\" text=\"내용\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:별칭\"/><Cell col=\"1\" text=\"bind:내용\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00_00_00","18","1865","100%","30",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("142");
            obj.set_text("My Page -> 검토의견함 메뉴에서 내용 등록/수정/삭제 가능합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan09","0","60","100.00%","201",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("143");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grdSplmnt\"/><PanelItem id=\"PanelItem01\" componentid=\"sta00_00_01_00_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staCnvyMttr","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("144");
            obj.set_text("처리내용");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new TextArea("txtCnvyMttr","18","1593","100%","100",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("145");
            obj.set_readonly("false");
            obj.set_displaynulltext("내용입력");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan10","0","60","100.00%","177",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("146");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_fittocontents("height");
            obj.set_verticalgap("10");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staCnvyMttr\"/><PanelItem id=\"PanelItem01\" componentid=\"txtCnvyMttr\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Grid("grdCnvyMttr00","18","1715","100%","150",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("147");
            obj.set_binddataset("dataSet00");
            obj.set_autofittype("col");
            obj.set_nodatatext("등록된 협조 및 처리 내용이 존재하지 않습니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"별칭\"/><Cell col=\"1\" text=\"내용\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:별칭\"/><Cell col=\"1\" text=\"bind:내용\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00_00_00_00_00","18","1865","100%","30",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("148");
            obj.set_text("My Page -> 검토의견함 메뉴에서 내용 등록/수정/삭제 가능합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan11","0","60","100.00%","201",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("149");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grdCnvyMttr00\"/><PanelItem id=\"PanelItem01\" componentid=\"sta00_00_01_00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Grid("grdCnvyMttr","18","1715","100%","180",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("150");
            obj.set_binddataset("dsCnvyMttr");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_autosizingtype("none");
            obj.set_scrollbarsize("15");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"170\"/><Column size=\"90\"/><Column size=\"650\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"일시\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"내용\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:frstRegDt\" displaytype=\"mask\" maskeditformat=\"####-##-## ##:##:##\" maskedittype=\"string\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:frstRegNm\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:cnvyMttrCn\" cssclass=\"CellEnd\" textAlign=\"left\" tooltiptext=\"bind:cnvyMttrCn\"/></Band></Format></Formats>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan12","0","60","100.00%","181",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("151");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grdCnvyMttr\"/></Contents>");
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

            obj = new Div("divQuick",null,"62","296","156","62",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickMenu");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","17","20","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("0");
            obj.set_text("신청자정보");
            obj.set_cssclass("btn_WF_Quick_S");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn02","17.00","btn01:0","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("1");
            obj.set_text("신청정보");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn03","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
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
            //-- Default Layout : this.divForm.form.Div01.form.divEdtPop00.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01.form.divEdtPop00.form,
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
            //-- Default Layout : this.divForm.form.Div01.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.pan01_AplyNo.set_taborder("0");
                p.pan01_AplyNo.set_horizontalgap("20");
                p.pan01_AplyNo.set_flexcrossaxiswrapalign("start");
                p.pan01_AplyNo.set_flexwrap("wrap");
                p.pan01_AplyNo.set_fittocontents("height");
                p.pan01_AplyNo.set_verticalgap("0");
                p.pan01_AplyNo.set_spacing("0px 20px 10px 20px");
                p.pan01_AplyNo.set_cssclass("pal_WF_DtlBg");
                p.pan01_AplyNo.set_visible("false");
                p.pan01_AplyNo.move("0","60","100.00%","96",null,null);

                p.Panel01_00_00.set_taborder("24");
                p.Panel01_00_00.set_type("vertical");
                p.Panel01_00_00.set_flexgrow("1");
                p.Panel01_00_00.move("20","-429","980","86",null,null);

                p.pan01_00.set_taborder("23");
                p.pan01_00.set_horizontalgap("20");
                p.pan01_00.set_flexcrossaxiswrapalign("start");
                p.pan01_00.set_flexwrap("wrap");
                p.pan01_00.set_fittocontents("height");
                p.pan01_00.set_verticalgap("0");
                p.pan01_00.set_spacing("0px 20px 10px 20px");
                p.pan01_00.set_cssclass("pal_WF_DtlBg");
                p.pan01_00.move("0","60","100.00%","96",null,null);

                p.staLabel01_00.set_taborder("1");
                p.staLabel01_00.set_text("신청번호");
                p.staLabel01_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00.set_fittocontents("width");
                p.staLabel01_00.move("10","98","65","46",null,null);

                p.edtAplySeNm11.set_taborder("2");
                p.edtAplySeNm11.set_readonly("true");
                p.edtAplySeNm11.move("10.00","158","100%","40",null,null);

                p.Panel01_aplyNo.set_taborder("3");
                p.Panel01_aplyNo.set_type("vertical");
                p.Panel01_aplyNo.set_flexgrow("1");
                p.Panel01_aplyNo.set_visible("true");
                p.Panel01_aplyNo.move("10.00","98","305","86",null,null);

                p.edtAplySeNm.set_taborder("27");
                p.edtAplySeNm.set_readonly("true");
                p.edtAplySeNm.move("0","-378","100%","34",null,null);

                p.staLabel01_00_00.set_taborder("26");
                p.staLabel01_00_00.set_text("신청구분 ");
                p.staLabel01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00.set_fittocontents("width");
                p.staLabel01_00_00.move("0","-427","65","46",null,null);

                p.Panel03_00.set_taborder("25");
                p.Panel03_00.set_flexcrossaxisalign("center");
                p.Panel03_00.set_flexmainaxisalign("spacebetween");
                p.Panel03_00.set_spacing("10px 0px 10px 0px");
                p.Panel03_00.move("0","-429","100%","51",null,null);

                p.btnHstry.set_taborder("28");
                p.btnHstry.set_text("과거신청이력 불러오기");
                p.btnHstry.set_fittocontents("width");
                p.btnHstry.move("841","110","147","40",null,null);

                p.Panel03.set_taborder("11");
                p.Panel03.set_flexcrossaxisalign("center");
                p.Panel03.set_flexmainaxisalign("spacebetween");
                p.Panel03.set_spacing("10px 0px 10px 0px");
                p.Panel03.move("78","37","100%","60",null,null);

                p.staLabel01_02.set_taborder("4");
                p.staLabel01_02.set_text("신청자");
                p.staLabel01_02.set_cssclass("sta_WF_Label");
                p.staLabel01_02.move("10","98","100%","46",null,null);

                p.Panel01_01.set_taborder("5");
                p.Panel01_01.set_type("vertical");
                p.Panel01_01.set_flexgrow("1");
                p.Panel01_01.move("10.00","98","305","86",null,null);

                p.pan02.set_taborder("6");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.set_flexshrink("1");
                p.pan02.set_fittocontents("height");
                p.pan02.move("0","60","100.00%","96",null,null);

                p.staLabel01_02_00.set_taborder("7");
                p.staLabel01_02_00.set_text("신청자 회사명");
                p.staLabel01_02_00.set_cssclass("sta_WF_Label");
                p.staLabel01_02_00.move("10","98","100%","46",null,null);

                p.Panel01_01_00.set_taborder("8");
                p.Panel01_01_00.set_type("vertical");
                p.Panel01_01_00.set_flexgrow("1");
                p.Panel01_01_00.move("10.00","98","305","86",null,null);

                p.edt00_01_00.set_taborder("9");
                p.edt00_01_00.set_readonly("true");
                p.edt00_01_00.move("10.00","158","100%","40",null,null);

                p.divEdtPop00.set_taborder("10");
                p.divEdtPop00.set_text("Div00");
                p.divEdtPop00.set_formscrollbartype("none none");
                p.divEdtPop00.set_formscrolltype("none");
                p.divEdtPop00.set_flexgrow("1");
                p.divEdtPop00.move("280","274","100%","40",null,null);

                p.staLabel01_02_02_00.set_taborder("12");
                p.staLabel01_02_02_00.set_text("등록자 전화번호");
                p.staLabel01_02_02_00.set_cssclass("sta_WF_Label");
                p.staLabel01_02_02_00.move("10","98","100%","46",null,null);

                p.edt00_01_00_00_00.set_taborder("13");
                p.edt00_01_00_00_00.set_readonly("true");
                p.edt00_01_00_00_00.move("10.00","158","100%","40",null,null);

                p.Panel01_01_02_00.set_taborder("14");
                p.Panel01_01_02_00.set_type("vertical");
                p.Panel01_01_02_00.set_flexgrow("1");
                p.Panel01_01_02_00.set_fittocontents("height");
                p.Panel01_01_02_00.move("10.00","98","305","130",null,null);

                p.staLabel01_02_00_01_00.set_taborder("15");
                p.staLabel01_02_00_01_00.set_text("등록자 휴대폰 번호");
                p.staLabel01_02_00_01_00.set_cssclass("sta_WF_Label");
                p.staLabel01_02_00_01_00.move("10","98","100%","46",null,null);

                p.Panel01_01_00_01_00.set_taborder("16");
                p.Panel01_01_00_01_00.set_type("vertical");
                p.Panel01_01_00_01_00.set_flexgrow("1");
                p.Panel01_01_00_01_00.set_fittocontents("height");
                p.Panel01_01_00_01_00.move("10.00","98","305","130",null,null);

                p.pan04.set_taborder("17");
                p.pan04.set_horizontalgap("20");
                p.pan04.set_flexcrossaxiswrapalign("start");
                p.pan04.set_flexwrap("wrap");
                p.pan04.set_verticalgap("0");
                p.pan04.set_spacing("0px 20px 10px 20px");
                p.pan04.set_cssclass("pal_WF_DtlBg");
                p.pan04.set_flexshrink("1");
                p.pan04.set_fittocontents("height");
                p.pan04.move("0","60","100.00%","141",null,null);

                p.sta00.set_taborder("18");
                p.sta00.set_text("전화번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 등록 및 수정이 가능합니다.");
                p.sta00.set_cssclass("sta_WF_TxtRed");
                p.sta00.set_fittocontents("height");
                p.sta00.set_wordWrap("char");
                p.sta00.move("200.00","383","100%","47",null,null);

                p.Panel02.set_taborder("19");
                p.Panel02.set_type("vertical");
                p.Panel02.set_verticalgap("10");
                p.Panel02.set_fittocontents("height");
                p.Panel02.move("104","417","100%","94",null,null);

                p.edt00_01_00_00_00_00.set_taborder("20");
                p.edt00_01_00_00_00_00.set_readonly("true");
                p.edt00_01_00_00_00_00.move("10.00","158","100%","40",null,null);

                p.sta00_00.set_taborder("21");
                p.sta00_00.set_text("휴대폰번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 등록 및 수정이 가능합니다.");
                p.sta00_00.set_cssclass("sta_WF_TxtRed");
                p.sta00_00.set_fittocontents("height");
                p.sta00_00.set_wordWrap("char");
                p.sta00_00.move("200.00","383","100%","47",null,null);

                p.Panel02_00.set_taborder("22");
                p.Panel02_00.set_type("vertical");
                p.Panel02_00.set_verticalgap("10");
                p.Panel02_00.set_fittocontents("height");
                p.Panel02_00.move("104","417","100%","94",null,null);
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
            //-- Default Layout : this.divForm.form.Div02.form.divCal.form
            obj = new Layout("default","",0,0,this.divForm.form.Div02.form.divCal.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.calBgngYmd.set_taborder("0");
                p.calBgngYmd.set_dateformat("yyyy-MM-dd");
                p.calBgngYmd.move("0","0","100%","40",null,null);

                p.staDash.set_taborder("1");
                p.staDash.set_text("~");
                p.staDash.set_cssclass("sta_WF_Dash");
                p.staDash.set_fittocontents("width");
                p.staDash.move("calBgngYmd:10","0","10","40",null,null);

                p.calEndYmd.set_taborder("2");
                p.calEndYmd.set_dateformat("yyyy-MM-dd");
                p.calEndYmd.move("staDash:10","0","100%","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divForm.form.Div02.form.divCal.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div02.form.divCal.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div02.form.divCal.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divForm.form.Div02.form.divCal.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div02.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.Div02.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.PanelGrdBtn.set_taborder("0");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_fittocontents("width");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.move(null,"0","550","34","0",null);

                p.grdList.set_taborder("6");
                p.grdList.set_binddataset("dsList");
                p.grdList.set_autofittype("none");
                p.grdList.move("0","PanelGrdBtn:10","100%",null,null,"46");

                p.staTotal.set_taborder("3");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","0","27","34",null,null);

                p.staTotal01.set_taborder("2");
                p.staTotal01.set_text("0");
                p.staTotal01.set_cssclass("sta_WF_Total");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.set_fittocontents("width");
                p.staTotal01.move("staTotal:0","0","43","34",null,null);

                p.staTotal02.set_taborder("1");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.move("staTotal01:0","0","30","34",null,null);

                p.btnGrdDel.set_taborder("4");
                p.btnGrdDel.set_text("행삭제");
                p.btnGrdDel.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel.set_fittocontents("width");
                p.btnGrdDel.move("316.00","0","45","34",null,null);

                p.btnGrdRegi.set_taborder("5");
                p.btnGrdRegi.set_text("행추가");
                p.btnGrdRegi.set_cssclass("btn_WF_SmallBlack");
                p.btnGrdRegi.set_fittocontents("width");
                p.btnGrdRegi.move("371.00","0","45","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.Div02.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div02.form.divGrd.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div02.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.Div02.form.divGrd.form.addLayout(obj.name, obj);
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

                p.staLabel00.set_taborder("1");
                p.staLabel00.set_text("신청종류");
                p.staLabel00.set_cssclass("sta_WF_Label_E");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.Panel00_00.set_taborder("2");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.set_minwidth("");
                p.Panel00_00.move("10.00","98","305","86",null,null);

                p.rdoAplyKndCd.set_taborder("3");
                p.rdoAplyKndCd.set_innerdataset(divForm_form_Div02_form_rdoAplyKndCd_innerdataset);
                p.rdoAplyKndCd.set_codecolumn("codecolumn");
                p.rdoAplyKndCd.set_datacolumn("datacolumn");
                p.rdoAplyKndCd.set_direction("vertical");
                p.rdoAplyKndCd.set_fittocontents("width");
                p.rdoAplyKndCd.set_value("0");
                p.rdoAplyKndCd.set_index("0");
                p.rdoAplyKndCd.move("200.00","328","393","40",null,null);

                p.staLabel00_02.set_taborder("4");
                p.staLabel00_02.set_text("시설구분");
                p.staLabel00_02.set_cssclass("sta_WF_Label_E");
                p.staLabel00_02.move("10","98","100%","46",null,null);

                p.rdoFcltSe.set_taborder("5");
                p.rdoFcltSe.set_innerdataset(divForm_form_Div02_form_rdoFcltSe_innerdataset);
                p.rdoFcltSe.set_codecolumn("codecolumn");
                p.rdoFcltSe.set_datacolumn("datacolumn");
                p.rdoFcltSe.set_direction("vertical");
                p.rdoFcltSe.set_fittocontents("width");
                p.rdoFcltSe.set_value("0");
                p.rdoFcltSe.set_index("-1");
                p.rdoFcltSe.move("200.00","328","393","40",null,null);

                p.Panel00_00_02.set_taborder("6");
                p.Panel00_00_02.set_type("vertical");
                p.Panel00_00_02.set_flexgrow("1");
                p.Panel00_00_02.set_minwidth("");
                p.Panel00_00_02.move("10.00","98","305","86",null,null);

                p.staLabel00_00.set_taborder("7");
                p.staLabel00_00.set_text("고객유형");
                p.staLabel00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00.move("10","98","100%","46",null,null);

                p.rdoCustTypeCd.set_taborder("8");
                p.rdoCustTypeCd.set_innerdataset(divForm_form_Div02_form_rdoCustTypeCd_innerdataset);
                p.rdoCustTypeCd.set_codecolumn("codecolumn");
                p.rdoCustTypeCd.set_datacolumn("datacolumn");
                p.rdoCustTypeCd.set_direction("vertical");
                p.rdoCustTypeCd.set_rowcount("2");
                p.rdoCustTypeCd.set_fittocontents("width");
                p.rdoCustTypeCd.set_value("0");
                p.rdoCustTypeCd.set_index("0");
                p.rdoCustTypeCd.move("200.00","328","100%","62",null,null);

                p.Panel00_00_01.set_taborder("9");
                p.Panel00_00_01.set_type("vertical");
                p.Panel00_00_01.set_flexgrow("1");
                p.Panel00_00_01.set_minwidth("");
                p.Panel00_00_01.move("10.00","98","970","108",null,null);

                p.pan02.set_taborder("10");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.set_type("horizontal");
                p.pan02.move("0","60","100.00%","119",null,null);

                p.divCal.set_taborder("11");
                p.divCal.set_text("Div00");
                p.divCal.set_flexgrow("1");
                p.divCal.set_formscrollbartype("none none");
                p.divCal.set_formscrolltype("none");
                p.divCal.move("1030","75","100%","40",null,null);

                p.staLabel00_00_00.set_taborder("12");
                p.staLabel00_00_00.set_text("설치요청기간");
                p.staLabel00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00_00.move("10","98","100%","46",null,null);

                p.Panel00_00_01_00.set_taborder("13");
                p.Panel00_00_01_00.set_type("vertical");
                p.Panel00_00_01_00.set_flexgrow("1");
                p.Panel00_00_01_00.set_minwidth("");
                p.Panel00_00_01_00.move("10.00","98","305","86",null,null);

                p.staLabel00_02_00_00.set_taborder("14");
                p.staLabel00_02_00_00.set_text("일수");
                p.staLabel00_02_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_00_00.move("10","98","100%","46",null,null);

                p.Panel00_00_02_00_00.set_taborder("15");
                p.Panel00_00_02_00_00.set_type("vertical");
                p.Panel00_00_02_00_00.set_flexgrow("1");
                p.Panel00_00_02_00_00.set_minwidth("");
                p.Panel00_00_02_00_00.move("10.00","98","305","86",null,null);

                p.pan03.set_taborder("16");
                p.pan03.set_horizontalgap("20");
                p.pan03.set_flexcrossaxiswrapalign("start");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_fittocontents("height");
                p.pan03.set_verticalgap("0");
                p.pan03.set_spacing("0px 20px 10px 20px");
                p.pan03.set_cssclass("pal_WF_DtlBg");
                p.pan03.set_type("horizontal");
                p.pan03.move("0","60","100.00%","96",null,null);

                p.edtDiffDate.set_taborder("17");
                p.edtDiffDate.set_readonly("true");
                p.edtDiffDate.set_textAlign("right");
                p.edtDiffDate.move("10.00","158","100%","40",null,null);

                p.staLabel00_00_00_00.set_taborder("18");
                p.staLabel00_00_00_00.set_text("건물구분");
                p.staLabel00_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00_00_00.move("10","98","100%","46",null,null);

                p.Panel00_00_01_00_00.set_taborder("19");
                p.Panel00_00_01_00_00.set_type("vertical");
                p.Panel00_00_01_00_00.set_flexgrow("1");
                p.Panel00_00_01_00_00.set_minwidth("");
                p.Panel00_00_01_00_00.move("10.00","98","305","86",null,null);

                p.staLabel00_02_00_00_00.set_taborder("20");
                p.staLabel00_02_00_00_00.set_text("구역구분");
                p.staLabel00_02_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_02_00_00_00.move("10","98","100%","46",null,null);

                p.Panel00_00_02_00_00_00.set_taborder("21");
                p.Panel00_00_02_00_00_00.set_type("vertical");
                p.Panel00_00_02_00_00_00.set_flexgrow("1");
                p.Panel00_00_02_00_00_00.set_minwidth("");
                p.Panel00_00_02_00_00_00.move("10.00","98","305","86",null,null);

                p.pan04.set_taborder("22");
                p.pan04.set_horizontalgap("20");
                p.pan04.set_flexcrossaxiswrapalign("start");
                p.pan04.set_flexwrap("wrap");
                p.pan04.set_fittocontents("height");
                p.pan04.set_verticalgap("0");
                p.pan04.set_spacing("0px 20px 10px 20px");
                p.pan04.set_cssclass("pal_WF_DtlBg");
                p.pan04.set_type("horizontal");
                p.pan04.move("0","60","100.00%","96",null,null);

                p.rdoZone.set_taborder("23");
                p.rdoZone.set_innerdataset(divForm_form_Div02_form_rdoZone_innerdataset);
                p.rdoZone.set_codecolumn("codecolumn");
                p.rdoZone.set_datacolumn("datacolumn");
                p.rdoZone.set_direction("vertical");
                p.rdoZone.set_fittocontents("width");
                p.rdoZone.set_value("0");
                p.rdoZone.set_index("0");
                p.rdoZone.move("200.00","328","393","40",null,null);

                p.cboBldgSe.set_taborder("24");
                p.cboBldgSe.set_innerdataset("dsBldgSeList");
                p.cboBldgSe.set_codecolumn("cdId");
                p.cboBldgSe.set_datacolumn("cdNm");
                p.cboBldgSe.set_displaynulltext("[건물구분]");
                p.cboBldgSe.set_text("");
                p.cboBldgSe.set_index("-1");
                p.cboBldgSe.move("200.00","128","100%","40",null,null);

                p.staLabel00_00_00_00_00.set_taborder("25");
                p.staLabel00_00_00_00_00.set_text("상업용시설 부가시설물 신청내역 리스트");
                p.staLabel00_00_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00_00_00_00.move("10","98","100%","46",null,null);

                p.Panel00_00_01_00_00_00.set_taborder("26");
                p.Panel00_00_01_00_00_00.set_type("vertical");
                p.Panel00_00_01_00_00_00.set_flexgrow("1");
                p.Panel00_00_01_00_00_00.set_minwidth("");
                p.Panel00_00_01_00_00_00.move("10.00","98","305","376",null,null);

                p.pan041.set_taborder("37");
                p.pan041.set_horizontalgap("20");
                p.pan041.set_flexcrossaxiswrapalign("start");
                p.pan041.set_flexwrap("wrap");
                p.pan041.set_fittocontents("height");
                p.pan041.set_verticalgap("0");
                p.pan041.set_spacing("0px 20px 10px 20px");
                p.pan041.set_cssclass("pal_WF_DtlBg");
                p.pan041.set_type("horizontal");
                p.pan041.move("0","60","100.00%","96",null,null);

                p.pan042.set_taborder("44");
                p.pan042.set_horizontalgap("20");
                p.pan042.set_flexcrossaxiswrapalign("start");
                p.pan042.set_flexwrap("wrap");
                p.pan042.set_fittocontents("height");
                p.pan042.set_verticalgap("0");
                p.pan042.set_spacing("0px 20px 10px 20px");
                p.pan042.set_cssclass("pal_WF_DtlBg");
                p.pan042.set_type("horizontal");
                p.pan042.move("0","60","100.00%","96",null,null);

                p.pan043.set_taborder("57");
                p.pan043.set_horizontalgap("20");
                p.pan043.set_flexcrossaxiswrapalign("start");
                p.pan043.set_flexwrap("wrap");
                p.pan043.set_fittocontents("height");
                p.pan043.set_verticalgap("0");
                p.pan043.set_spacing("0px 20px 10px 20px");
                p.pan043.set_cssclass("pal_WF_DtlBg");
                p.pan043.set_type("horizontal");
                p.pan043.move("0","60","100.00%","96",null,null);

                p.pan044.set_taborder("62");
                p.pan044.set_horizontalgap("20");
                p.pan044.set_flexcrossaxiswrapalign("start");
                p.pan044.set_flexwrap("wrap");
                p.pan044.set_fittocontents("height");
                p.pan044.set_verticalgap("0");
                p.pan044.set_spacing("0px 20px 10px 20px");
                p.pan044.set_cssclass("pal_WF_DtlBg");
                p.pan044.set_type("horizontal");
                p.pan044.move("0","60","100.00%","96",null,null);

                p.panFile.set_taborder("76");
                p.panFile.set_fittocontents("height");
                p.panFile.set_spacing("10px 20px 10px 20px");
                p.panFile.set_flexwrap("wrap");
                p.panFile.set_cssclass("pal_WF_DtlBg");
                p.panFile.set_verticalgap("4");
                p.panFile.move("0","42","100.00%","161",null,null);

                p.panFile00.set_taborder("90");
                p.panFile00.set_fittocontents("height");
                p.panFile00.set_spacing("10px 20px 10px 20px");
                p.panFile00.set_flexwrap("wrap");
                p.panFile00.set_cssclass("pal_WF_DtlBg");
                p.panFile00.set_verticalgap("4");
                p.panFile00.move("0","42","100.00%","161",null,null);

                p.panFile01.set_taborder("104");
                p.panFile01.set_fittocontents("height");
                p.panFile01.set_spacing("10px 20px 10px 20px");
                p.panFile01.set_flexwrap("wrap");
                p.panFile01.set_cssclass("pal_WF_DtlBg");
                p.panFile01.set_verticalgap("4");
                p.panFile01.move("0","42","100.00%","161",null,null);

                p.panFile02.set_taborder("118");
                p.panFile02.set_fittocontents("height");
                p.panFile02.set_spacing("10px 20px 10px 20px");
                p.panFile02.set_flexwrap("wrap");
                p.panFile02.set_cssclass("pal_WF_DtlBg");
                p.panFile02.set_verticalgap("4");
                p.panFile02.move("0","42","100.00%","161",null,null);

                p.panFile03.set_taborder("132");
                p.panFile03.set_fittocontents("height");
                p.panFile03.set_spacing("10px 20px 10px 20px");
                p.panFile03.set_flexwrap("wrap");
                p.panFile03.set_cssclass("pal_WF_DtlBg");
                p.panFile03.set_verticalgap("4");
                p.panFile03.move("0","42","100.00%","161",null,null);

                p.pan05.set_taborder("27");
                p.pan05.set_horizontalgap("20");
                p.pan05.set_flexcrossaxiswrapalign("start");
                p.pan05.set_flexwrap("wrap");
                p.pan05.set_fittocontents("height");
                p.pan05.set_verticalgap("0");
                p.pan05.set_spacing("0px 20px 10px 20px");
                p.pan05.set_cssclass("pal_WF_DtlBg");
                p.pan05.set_type("horizontal");
                p.pan05.set_visible("true");
                p.pan05.move("0","60","100.00%","387",null,null);

                p.divGrd.set_taborder("28");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","54","100%","330",null,null);

                p.staLabel00_00_00_00_01.set_taborder("29");
                p.staLabel00_00_00_00_01.set_text("부가시설물 설치 및 운영기준");
                p.staLabel00_00_00_00_01.set_cssclass("sta_WF_Label");
                p.staLabel00_00_00_00_01.move("10","98","100%","46",null,null);

                p.Panel00_00_01_00_00_01.set_taborder("30");
                p.Panel00_00_01_00_00_01.set_type("vertical");
                p.Panel00_00_01_00_00_01.set_flexgrow("1");
                p.Panel00_00_01_00_00_01.set_minwidth("");
                p.Panel00_00_01_00_00_01.move("10.00","98","305","86",null,null);

                p.pan06.set_taborder("31");
                p.pan06.set_horizontalgap("20");
                p.pan06.set_flexcrossaxiswrapalign("start");
                p.pan06.set_flexwrap("wrap");
                p.pan06.set_fittocontents("height");
                p.pan06.set_verticalgap("0");
                p.pan06.set_spacing("0px 20px 10px 20px");
                p.pan06.set_cssclass("pal_WF_DtlBg");
                p.pan06.set_type("horizontal");
                p.pan06.move("0","60","100.00%","96",null,null);

                p.sta00.set_taborder("32");
                p.sta00.set_text("승인완료시 여객서비스팀 사무실로 스티커 방문수령 바랍니다.");
                p.sta00.set_cssclass("sta_WF_Des");
                p.sta00.set_fittocontents("height");
                p.sta00.move("200.00","383","100%","30",null,null);

                p.staLabel00_00_00_00_02.set_taborder("33");
                p.staLabel00_00_00_00_02.set_text("서비스신청구분(업무용)");
                p.staLabel00_00_00_00_02.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00_00_00_02.move("10","98","100%","46",null,null);

                p.Panel00_00_01_00_00_02.set_taborder("34");
                p.Panel00_00_01_00_00_02.set_type("vertical");
                p.Panel00_00_01_00_00_02.set_flexgrow("1");
                p.Panel00_00_01_00_00_02.set_minwidth("");
                p.Panel00_00_01_00_00_02.move("10.00","98","305","86",null,null);

                p.staLabel_dtlArtlc.set_taborder("35");
                p.staLabel_dtlArtlc.set_text("세부항목(기타)");
                p.staLabel_dtlArtlc.set_cssclass("sta_WF_Label_E");
                p.staLabel_dtlArtlc.move("10","98","100%","46",null,null);

                p.Panel_dtlArtlc.set_taborder("36");
                p.Panel_dtlArtlc.set_type("vertical");
                p.Panel_dtlArtlc.set_flexgrow("1");
                p.Panel_dtlArtlc.set_visible("false");
                p.Panel_dtlArtlc.set_minwidth("");
                p.Panel_dtlArtlc.move("10.00","98","305","86",null,null);

                p.edtDtlArtlc.set_taborder("38");
                p.edtDtlArtlc.set_textAlign("left");
                p.edtDtlArtlc.move("10.00","158","100%","40",null,null);

                p.staLabel00_00_00_00_02_00.set_taborder("39");
                p.staLabel00_00_00_00_02_00.set_text("수량");
                p.staLabel00_00_00_00_02_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00_00_00_02_00.move("10","98","100%","46",null,null);

                p.Panel00_00_01_00_00_02_00.set_taborder("40");
                p.Panel00_00_01_00_00_02_00.set_type("vertical");
                p.Panel00_00_01_00_00_02_00.set_flexgrow("1");
                p.Panel00_00_01_00_00_02_00.set_minwidth("");
                p.Panel00_00_01_00_00_02_00.move("10.00","98","160","86",null,null);

                p.staLabel00_02_00_00_00_00_00.set_taborder("41");
                p.staLabel00_02_00_00_00_00_00.set_text("매장면적");
                p.staLabel00_02_00_00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_00_00_00_00_00.move("10","98","100%","46",null,null);

                p.edtDiffDate00_00.set_taborder("42");
                p.edtDiffDate00_00.set_textAlign("right");
                p.edtDiffDate00_00.move("10.00","158","100%","40",null,null);

                p.Panel00_00_02_00_00_00_00_00.set_taborder("43");
                p.Panel00_00_02_00_00_00_00_00.set_type("vertical");
                p.Panel00_00_02_00_00_00_00_00.set_flexgrow("1");
                p.Panel00_00_02_00_00_00_00_00.set_minwidth("");
                p.Panel00_00_02_00_00_00_00_00.move("10.00","98","160","86",null,null);

                p.edtQty.set_taborder("45");
                p.edtQty.set_textAlign("right");
                p.edtQty.move("10.00","158","100%","40",null,null);

                p.staLabel00_02_00_00_00_00_00_00.set_taborder("46");
                p.staLabel00_02_00_00_00_00_00_00.set_text("가로(mm)");
                p.staLabel00_02_00_00_00_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_02_00_00_00_00_00_00.move("10","98","100%","46",null,null);

                p.edtWdthVl.set_taborder("47");
                p.edtWdthVl.set_textAlign("right");
                p.edtWdthVl.move("10.00","158","100%","40",null,null);

                p.Panel00_00_02_00_00_00_00_00_00.set_taborder("48");
                p.Panel00_00_02_00_00_00_00_00_00.set_type("vertical");
                p.Panel00_00_02_00_00_00_00_00_00.set_flexgrow("1");
                p.Panel00_00_02_00_00_00_00_00_00.set_minwidth("");
                p.Panel00_00_02_00_00_00_00_00_00.move("10.00","98","160","86",null,null);

                p.staLabel00_02_00_00_00_00_00_01.set_taborder("49");
                p.staLabel00_02_00_00_00_00_00_01.set_text("높이(mm)");
                p.staLabel00_02_00_00_00_00_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel00_02_00_00_00_00_00_01.move("10","98","100%","46",null,null);

                p.edtHgtVl.set_taborder("50");
                p.edtHgtVl.set_textAlign("right");
                p.edtHgtVl.move("10.00","158","100%","40",null,null);

                p.Panel00_00_02_00_00_00_00_00_01.set_taborder("51");
                p.Panel00_00_02_00_00_00_00_00_01.set_type("vertical");
                p.Panel00_00_02_00_00_00_00_00_01.set_flexgrow("1");
                p.Panel00_00_02_00_00_00_00_00_01.set_minwidth("");
                p.Panel00_00_02_00_00_00_00_00_01.move("10.00","98","160","86",null,null);

                p.staLabel00_02_00_00_00_00_00_02.set_taborder("52");
                p.staLabel00_02_00_00_00_00_00_02.set_text("세로(mm)");
                p.staLabel00_02_00_00_00_00_00_02.set_cssclass("sta_WF_Label_E");
                p.staLabel00_02_00_00_00_00_00_02.move("10","98","100%","46",null,null);

                p.edtVrtcVl.set_taborder("53");
                p.edtVrtcVl.set_textAlign("right");
                p.edtVrtcVl.move("10.00","158","100%","40",null,null);

                p.Panel00_00_02_00_00_00_00_00_02.set_taborder("54");
                p.Panel00_00_02_00_00_00_00_00_02.set_type("vertical");
                p.Panel00_00_02_00_00_00_00_00_02.set_flexgrow("1");
                p.Panel00_00_02_00_00_00_00_00_02.set_minwidth("");
                p.Panel00_00_02_00_00_00_00_00_02.move("10.00","98","160","86",null,null);

                p.staLabel00_00_00_00_02_01.set_taborder("55");
                p.staLabel00_00_00_00_02_01.set_text("설치위치");
                p.staLabel00_00_00_00_02_01.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00_00_00_02_01.move("10","98","100%","46",null,null);

                p.Panel00_00_01_00_00_02_01.set_taborder("56");
                p.Panel00_00_01_00_00_02_01.set_type("vertical");
                p.Panel00_00_01_00_00_02_01.set_flexgrow("1");
                p.Panel00_00_01_00_00_02_01.set_minwidth("");
                p.Panel00_00_01_00_00_02_01.move("10.00","98","305","86",null,null);

                p.edtInstlPstnCn.set_taborder("58");
                p.edtInstlPstnCn.set_textAlign("left");
                p.edtInstlPstnCn.move("10.00","158","100%","40",null,null);

                p.staLabel00_00_00_00_02_01_00.set_taborder("59");
                p.staLabel00_00_00_00_02_01_00.set_text("용도");
                p.staLabel00_00_00_00_02_01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00_00_00_02_01_00.move("10","98","100%","46",null,null);

                p.edtUsgCn.set_taborder("60");
                p.edtUsgCn.set_textAlign("left");
                p.edtUsgCn.move("10.00","158","100%","40",null,null);

                p.Panel00_00_01_00_00_02_01_00.set_taborder("61");
                p.Panel00_00_01_00_00_02_01_00.set_type("vertical");
                p.Panel00_00_01_00_00_02_01_00.set_flexgrow("1");
                p.Panel00_00_01_00_00_02_01_00.set_minwidth("");
                p.Panel00_00_01_00_00_02_01_00.move("10.00","98","305","86",null,null);

                p.staLabel00_02_00.set_taborder("63");
                p.staLabel00_02_00.set_text("부가시설물사진(전면)");
                p.staLabel00_02_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_02_00.set_fittocontents("width");
                p.staLabel00_02_00.move("0","44","305","46",null,null);

                p.Button00.set_taborder("64");
                p.Button00.set_text("샘플첨부파일명");
                p.Button00.set_cssclass("btn_WF_Small");
                p.Button00.set_fittocontents("width");
                p.Button00.move("813","76","120","34",null,null);

                p.btn_file_1.set_taborder("65");
                p.btn_file_1.set_text("파일선택");
                p.btn_file_1.set_cssclass("btn_WF_FileUp");
                p.btn_file_1.set_fittocontents("width");
                p.btn_file_1.move("124","58","116","34",null,null);

                p.panBtnFile.set_taborder("66");
                p.panBtnFile.set_flexgrow("1");
                p.panBtnFile.set_flexmainaxisalign("end");
                p.panBtnFile.set_horizontalgap("10");
                p.panBtnFile.move("433","58","305","34",null,null);

                p.panTitle.set_taborder("67");
                p.panTitle.set_cssclass("pan_WF_FileTitle");
                p.panTitle.set_flexwrap("wrap");
                p.panTitle.set_fittocontents("height");
                p.panTitle.set_flexcrossaxisalign("center");
                p.panTitle.set_spacing("0px 0px 10px 0px");
                p.panTitle.move("0","124","100%","46",null,null);

                p.Static00.set_taborder("68");
                p.Static00.set_text("파일수 : ");
                p.Static00.set_fittocontents("width");
                p.Static00.move("88","123","48","46",null,null);

                p.Static01.set_taborder("69");
                p.Static01.set_text("0");
                p.Static01.set_fittocontents("width");
                p.Static01.move("165","143","9","46",null,null);

                p.Static02.set_taborder("70");
                p.Static02.set_text("개");
                p.Static02.set_fittocontents("width");
                p.Static02.move("293","131","13","46",null,null);

                p.panFileNum.set_taborder("71");
                p.panFileNum.set_flexgrow("1");
                p.panFileNum.set_horizontalgap("4");
                p.panFileNum.move("20","190","305","46",null,null);

                p.btn_del_file_1.set_taborder("72");
                p.btn_del_file_1.set_text("전체파일삭제");
                p.btn_del_file_1.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_1.set_fittocontents("width");
                p.btn_del_file_1.move("512","135","125","34",null,null);

                p.panBtnDel.set_taborder("73");
                p.panBtnDel.set_flexcrossaxisalign("center");
                p.panBtnDel.set_flexmainaxisalign("end");
                p.panBtnDel.set_flexgrow("1");
                p.panBtnDel.move("517","141","305","46",null,null);

                p.Panel00.set_taborder("74");
                p.Panel00.move("20","51","100%","46",null,null);

                p.Grid00.set_taborder("75");
                p.Grid00.set_binddataset("dsFile1");
                p.Grid00.set_autofittype("col");
                p.Grid00.set_cssclass("grd_WF_FileAdd");
                p.Grid00.move("20.00","114","100%","40",null,null);

                p.staLabel00_02_01.set_taborder("77");
                p.staLabel00_02_01.set_text("부가시설물사진(후면)");
                p.staLabel00_02_01.set_cssclass("sta_WF_Label_E");
                p.staLabel00_02_01.set_fittocontents("width");
                p.staLabel00_02_01.move("0","44","305","46",null,null);

                p.Button00_00.set_taborder("78");
                p.Button00_00.set_text("샘플첨부파일명");
                p.Button00_00.set_cssclass("btn_WF_Small");
                p.Button00_00.set_fittocontents("width");
                p.Button00_00.move("813","76","120","34",null,null);

                p.btn_file_1_00.set_taborder("79");
                p.btn_file_1_00.set_text("파일선택");
                p.btn_file_1_00.set_cssclass("btn_WF_FileUp");
                p.btn_file_1_00.set_fittocontents("width");
                p.btn_file_1_00.move("124","58","116","34",null,null);

                p.panBtnFile00.set_taborder("80");
                p.panBtnFile00.set_flexgrow("1");
                p.panBtnFile00.set_flexmainaxisalign("end");
                p.panBtnFile00.set_horizontalgap("10");
                p.panBtnFile00.move("433","58","305","34",null,null);

                p.panTitle00.set_taborder("81");
                p.panTitle00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00.set_flexwrap("wrap");
                p.panTitle00.set_fittocontents("height");
                p.panTitle00.set_flexcrossaxisalign("center");
                p.panTitle00.set_spacing("0px 0px 10px 0px");
                p.panTitle00.move("0","124","100%","46",null,null);

                p.Static00_00.set_taborder("82");
                p.Static00_00.set_text("파일수 : ");
                p.Static00_00.set_fittocontents("width");
                p.Static00_00.move("88","123","48","46",null,null);

                p.Static01_00.set_taborder("83");
                p.Static01_00.set_text("0");
                p.Static01_00.set_fittocontents("width");
                p.Static01_00.move("165","143","9","46",null,null);

                p.Static02_00.set_taborder("84");
                p.Static02_00.set_text("개");
                p.Static02_00.set_fittocontents("width");
                p.Static02_00.move("293","131","13","46",null,null);

                p.panFileNum00.set_taborder("85");
                p.panFileNum00.set_flexgrow("1");
                p.panFileNum00.set_horizontalgap("4");
                p.panFileNum00.move("20","190","305","46",null,null);

                p.btn_del_file_1_00.set_taborder("86");
                p.btn_del_file_1_00.set_text("전체파일삭제");
                p.btn_del_file_1_00.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_1_00.set_fittocontents("width");
                p.btn_del_file_1_00.move("512","135","125","34",null,null);

                p.panBtnDel00.set_taborder("87");
                p.panBtnDel00.set_flexcrossaxisalign("center");
                p.panBtnDel00.set_flexmainaxisalign("end");
                p.panBtnDel00.set_flexgrow("1");
                p.panBtnDel00.move("517","141","305","46",null,null);

                p.Panel00_01.set_taborder("88");
                p.Panel00_01.move("20","51","100%","46",null,null);

                p.Grid00_00.set_taborder("89");
                p.Grid00_00.set_binddataset("dsFile1");
                p.Grid00_00.set_autofittype("col");
                p.Grid00_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00.move("20.00","114","100%","40",null,null);

                p.staLabel00_02_02.set_taborder("91");
                p.staLabel00_02_02.set_text("부가시설물사진(측면)");
                p.staLabel00_02_02.set_cssclass("sta_WF_Label_E");
                p.staLabel00_02_02.set_fittocontents("width");
                p.staLabel00_02_02.move("0","44","305","46",null,null);

                p.Button00_01.set_taborder("92");
                p.Button00_01.set_text("샘플첨부파일명");
                p.Button00_01.set_cssclass("btn_WF_Small");
                p.Button00_01.set_fittocontents("width");
                p.Button00_01.move("813","76","120","34",null,null);

                p.btn_file_1_01.set_taborder("93");
                p.btn_file_1_01.set_text("파일선택");
                p.btn_file_1_01.set_cssclass("btn_WF_FileUp");
                p.btn_file_1_01.set_fittocontents("width");
                p.btn_file_1_01.move("124","58","116","34",null,null);

                p.panBtnFile01.set_taborder("94");
                p.panBtnFile01.set_flexgrow("1");
                p.panBtnFile01.set_flexmainaxisalign("end");
                p.panBtnFile01.set_horizontalgap("10");
                p.panBtnFile01.move("433","58","305","34",null,null);

                p.panTitle01.set_taborder("95");
                p.panTitle01.set_cssclass("pan_WF_FileTitle");
                p.panTitle01.set_flexwrap("wrap");
                p.panTitle01.set_fittocontents("height");
                p.panTitle01.set_flexcrossaxisalign("center");
                p.panTitle01.set_spacing("0px 0px 10px 0px");
                p.panTitle01.move("0","124","100%","46",null,null);

                p.Static00_01.set_taborder("96");
                p.Static00_01.set_text("파일수 : ");
                p.Static00_01.set_fittocontents("width");
                p.Static00_01.move("88","123","48","46",null,null);

                p.Static01_01.set_taborder("97");
                p.Static01_01.set_text("0");
                p.Static01_01.set_fittocontents("width");
                p.Static01_01.move("165","143","9","46",null,null);

                p.Static02_01.set_taborder("98");
                p.Static02_01.set_text("개");
                p.Static02_01.set_fittocontents("width");
                p.Static02_01.move("293","131","13","46",null,null);

                p.panFileNum01.set_taborder("99");
                p.panFileNum01.set_flexgrow("1");
                p.panFileNum01.set_horizontalgap("4");
                p.panFileNum01.move("20","190","305","46",null,null);

                p.btn_del_file_1_01.set_taborder("100");
                p.btn_del_file_1_01.set_text("전체파일삭제");
                p.btn_del_file_1_01.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_1_01.set_fittocontents("width");
                p.btn_del_file_1_01.move("512","135","125","34",null,null);

                p.panBtnDel01.set_taborder("101");
                p.panBtnDel01.set_flexcrossaxisalign("center");
                p.panBtnDel01.set_flexmainaxisalign("end");
                p.panBtnDel01.set_flexgrow("1");
                p.panBtnDel01.move("517","141","305","46",null,null);

                p.Panel00_02.set_taborder("102");
                p.Panel00_02.move("20","51","100%","46",null,null);

                p.Grid00_01.set_taborder("103");
                p.Grid00_01.set_binddataset("dsFile1");
                p.Grid00_01.set_autofittype("col");
                p.Grid00_01.set_cssclass("grd_WF_FileAdd");
                p.Grid00_01.move("20.00","114","100%","40",null,null);

                p.staLabel00_02_03.set_taborder("105");
                p.staLabel00_02_03.set_text("부가시설물사진(기타)");
                p.staLabel00_02_03.set_cssclass("sta_WF_Label");
                p.staLabel00_02_03.set_fittocontents("width");
                p.staLabel00_02_03.move("0","44","305","46",null,null);

                p.Button00_02.set_taborder("106");
                p.Button00_02.set_text("샘플첨부파일명");
                p.Button00_02.set_cssclass("btn_WF_Small");
                p.Button00_02.set_fittocontents("width");
                p.Button00_02.move("813","76","120","34",null,null);

                p.btn_file_1_02.set_taborder("107");
                p.btn_file_1_02.set_text("파일선택");
                p.btn_file_1_02.set_cssclass("btn_WF_FileUp");
                p.btn_file_1_02.set_fittocontents("width");
                p.btn_file_1_02.move("124","58","116","34",null,null);

                p.panBtnFile02.set_taborder("108");
                p.panBtnFile02.set_flexgrow("1");
                p.panBtnFile02.set_flexmainaxisalign("end");
                p.panBtnFile02.set_horizontalgap("10");
                p.panBtnFile02.move("433","58","305","34",null,null);

                p.panTitle02.set_taborder("109");
                p.panTitle02.set_cssclass("pan_WF_FileTitle");
                p.panTitle02.set_flexwrap("wrap");
                p.panTitle02.set_fittocontents("height");
                p.panTitle02.set_flexcrossaxisalign("center");
                p.panTitle02.set_spacing("0px 0px 10px 0px");
                p.panTitle02.move("0","124","100%","46",null,null);

                p.Static00_02.set_taborder("110");
                p.Static00_02.set_text("파일수 : ");
                p.Static00_02.set_fittocontents("width");
                p.Static00_02.move("88","123","48","46",null,null);

                p.Static01_02.set_taborder("111");
                p.Static01_02.set_text("0");
                p.Static01_02.set_fittocontents("width");
                p.Static01_02.move("165","143","9","46",null,null);

                p.Static02_02.set_taborder("112");
                p.Static02_02.set_text("개");
                p.Static02_02.set_fittocontents("width");
                p.Static02_02.move("293","131","13","46",null,null);

                p.panFileNum02.set_taborder("113");
                p.panFileNum02.set_flexgrow("1");
                p.panFileNum02.set_horizontalgap("4");
                p.panFileNum02.move("20","190","305","46",null,null);

                p.btn_del_file_1_02.set_taborder("114");
                p.btn_del_file_1_02.set_text("전체파일삭제");
                p.btn_del_file_1_02.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_1_02.set_fittocontents("width");
                p.btn_del_file_1_02.move("512","135","125","34",null,null);

                p.panBtnDel02.set_taborder("115");
                p.panBtnDel02.set_flexcrossaxisalign("center");
                p.panBtnDel02.set_flexmainaxisalign("end");
                p.panBtnDel02.set_flexgrow("1");
                p.panBtnDel02.move("517","141","305","46",null,null);

                p.Panel00_03.set_taborder("116");
                p.Panel00_03.move("20","51","100%","46",null,null);

                p.Grid00_02.set_taborder("117");
                p.Grid00_02.set_binddataset("dsFile1");
                p.Grid00_02.set_autofittype("col");
                p.Grid00_02.set_cssclass("grd_WF_FileAdd");
                p.Grid00_02.move("20.00","114","100%","40",null,null);

                p.staLabel00_02_04.set_taborder("119");
                p.staLabel00_02_04.set_text("부가시설물사진(기타2)");
                p.staLabel00_02_04.set_cssclass("sta_WF_Label");
                p.staLabel00_02_04.set_fittocontents("width");
                p.staLabel00_02_04.move("0","44","305","46",null,null);

                p.Button00_03.set_taborder("120");
                p.Button00_03.set_text("샘플첨부파일명");
                p.Button00_03.set_cssclass("btn_WF_Small");
                p.Button00_03.set_fittocontents("width");
                p.Button00_03.move("813","76","120","34",null,null);

                p.btn_file_1_03.set_taborder("121");
                p.btn_file_1_03.set_text("파일선택");
                p.btn_file_1_03.set_cssclass("btn_WF_FileUp");
                p.btn_file_1_03.set_fittocontents("width");
                p.btn_file_1_03.move("124","58","116","34",null,null);

                p.panBtnFile03.set_taborder("122");
                p.panBtnFile03.set_flexgrow("1");
                p.panBtnFile03.set_flexmainaxisalign("end");
                p.panBtnFile03.set_horizontalgap("10");
                p.panBtnFile03.move("433","58","305","34",null,null);

                p.panTitle03.set_taborder("123");
                p.panTitle03.set_cssclass("pan_WF_FileTitle");
                p.panTitle03.set_flexwrap("wrap");
                p.panTitle03.set_fittocontents("height");
                p.panTitle03.set_flexcrossaxisalign("center");
                p.panTitle03.set_spacing("0px 0px 10px 0px");
                p.panTitle03.move("0","124","100%","46",null,null);

                p.Static00_03.set_taborder("124");
                p.Static00_03.set_text("파일수 : ");
                p.Static00_03.set_fittocontents("width");
                p.Static00_03.move("88","123","48","46",null,null);

                p.Static01_03.set_taborder("125");
                p.Static01_03.set_text("0");
                p.Static01_03.set_fittocontents("width");
                p.Static01_03.move("165","143","9","46",null,null);

                p.Static02_03.set_taborder("126");
                p.Static02_03.set_text("개");
                p.Static02_03.set_fittocontents("width");
                p.Static02_03.move("293","131","13","46",null,null);

                p.panFileNum03.set_taborder("127");
                p.panFileNum03.set_flexgrow("1");
                p.panFileNum03.set_horizontalgap("4");
                p.panFileNum03.move("20","190","305","46",null,null);

                p.btn_del_file_1_03.set_taborder("128");
                p.btn_del_file_1_03.set_text("전체파일삭제");
                p.btn_del_file_1_03.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_1_03.set_fittocontents("width");
                p.btn_del_file_1_03.move("512","135","125","34",null,null);

                p.panBtnDel03.set_taborder("129");
                p.panBtnDel03.set_flexcrossaxisalign("center");
                p.panBtnDel03.set_flexmainaxisalign("end");
                p.panBtnDel03.set_flexgrow("1");
                p.panBtnDel03.move("517","141","305","46",null,null);

                p.Panel00_04.set_taborder("130");
                p.Panel00_04.move("20","51","100%","46",null,null);

                p.Grid00_03.set_taborder("131");
                p.Grid00_03.set_binddataset("dsFile1");
                p.Grid00_03.set_autofittype("col");
                p.Grid00_03.set_cssclass("grd_WF_FileAdd");
                p.Grid00_03.move("20.00","114","100%","40",null,null);

                p.cboSrvcAplySe.set_taborder("133");
                p.cboSrvcAplySe.set_innerdataset("dsSrvcAplySeList");
                p.cboSrvcAplySe.set_codecolumn("cdId");
                p.cboSrvcAplySe.set_datacolumn("cdNm");
                p.cboSrvcAplySe.set_displaynulltext("[건물구분11]");
                p.cboSrvcAplySe.set_text("");
                p.cboSrvcAplySe.set_index("-1");
                p.cboSrvcAplySe.move("200.00","128","100%","40",null,null);

                p.staPrvcClctChcAgreYn01.set_taborder("134");
                p.staPrvcClctChcAgreYn01.set_text("서비스요청내용확인");
                p.staPrvcClctChcAgreYn01.set_cssclass("sta_WF_Label");
                p.staPrvcClctChcAgreYn01.move("10","98","100%","46",null,null);

                p.rdoSrvcDmndCnYn.set_taborder("135");
                p.rdoSrvcDmndCnYn.set_innerdataset(divForm_form_Div02_form_rdoSrvcDmndCnYn_innerdataset);
                p.rdoSrvcDmndCnYn.set_codecolumn("codecolumn");
                p.rdoSrvcDmndCnYn.set_datacolumn("datacolumn");
                p.rdoSrvcDmndCnYn.set_direction("vertical");
                p.rdoSrvcDmndCnYn.set_fittocontents("width");
                p.rdoSrvcDmndCnYn.set_value("0");
                p.rdoSrvcDmndCnYn.set_index("1");
                p.rdoSrvcDmndCnYn.move("200.00","328","490","40",null,null);

                p.Panel00_00_03_00_00_00_00_00_00.set_taborder("136");
                p.Panel00_00_03_00_00_00_00_00_00.set_type("vertical");
                p.Panel00_00_03_00_00_00_00_00_00.set_flexgrow("1");
                p.Panel00_00_03_00_00_00_00_00_00.set_verticalgap("10");
                p.Panel00_00_03_00_00_00_00_00_00.set_minwidth("");
                p.Panel00_00_03_00_00_00_00_00_00.move("64.00","495","980","96",null,null);

                p.pan07.set_taborder("137");
                p.pan07.set_horizontalgap("20");
                p.pan07.set_flexcrossaxiswrapalign("start");
                p.pan07.set_flexwrap("wrap");
                p.pan07.set_fittocontents("height");
                p.pan07.set_verticalgap("0");
                p.pan07.set_spacing("0px 20px 10px 20px");
                p.pan07.set_cssclass("pal_WF_DtlBg");
                p.pan07.set_type("horizontal");
                p.pan07.set_visible("false");
                p.pan07.move("0","60","100.00%","107",null,null);

                p.staSplmntDmndRsn.set_taborder("138");
                p.staSplmntDmndRsn.set_text("보완요청사유");
                p.staSplmntDmndRsn.set_cssclass("sta_WF_Label");
                p.staSplmntDmndRsn.move("10","98","100%","46",null,null);

                p.txtSplmntDmndRsn.set_taborder("139");
                p.txtSplmntDmndRsn.set_readonly("false");
                p.txtSplmntDmndRsn.set_displaynulltext("내용입력");
                p.txtSplmntDmndRsn.move("18","1593","100%","100",null,null);

                p.pan08.set_taborder("140");
                p.pan08.set_flexcrossaxiswrapalign("start");
                p.pan08.set_fittocontents("height");
                p.pan08.set_verticalgap("10");
                p.pan08.set_spacing("10px 20px 10px 20px");
                p.pan08.set_cssclass("pal_WF_DtlBg");
                p.pan08.set_type("vertical");
                p.pan08.set_visible("false");
                p.pan08.move("0","60","100.00%","177",null,null);

                p.grdSplmnt.set_taborder("141");
                p.grdSplmnt.set_binddataset("dataSet00");
                p.grdSplmnt.set_autofittype("col");
                p.grdSplmnt.set_nodatatext("등록된 협조 및 처리 내용이 존재하지 않습니다");
                p.grdSplmnt.move("18","1715","100%","150",null,null);

                p.sta00_00_01_00_00_00.set_taborder("142");
                p.sta00_00_01_00_00_00.set_text("My Page -> 검토의견함 메뉴에서 내용 등록/수정/삭제 가능합니다.");
                p.sta00_00_01_00_00_00.set_cssclass("sta_WF_Des");
                p.sta00_00_01_00_00_00.set_fittocontents("height");
                p.sta00_00_01_00_00_00.move("18","1865","100%","30",null,null);

                p.pan09.set_taborder("143");
                p.pan09.set_flexcrossaxiswrapalign("start");
                p.pan09.set_flexwrap("wrap");
                p.pan09.set_fittocontents("height");
                p.pan09.set_verticalgap("0");
                p.pan09.set_spacing("10px 20px 10px 20px");
                p.pan09.set_cssclass("pal_WF_DtlBg");
                p.pan09.set_type("horizontal");
                p.pan09.set_visible("false");
                p.pan09.move("0","60","100.00%","201",null,null);

                p.staCnvyMttr.set_taborder("144");
                p.staCnvyMttr.set_text("처리내용");
                p.staCnvyMttr.set_cssclass("sta_WF_Label");
                p.staCnvyMttr.move("10","98","100%","46",null,null);

                p.txtCnvyMttr.set_taborder("145");
                p.txtCnvyMttr.set_readonly("false");
                p.txtCnvyMttr.set_displaynulltext("내용입력");
                p.txtCnvyMttr.move("18","1593","100%","100",null,null);

                p.pan10.set_taborder("146");
                p.pan10.set_flexcrossaxiswrapalign("start");
                p.pan10.set_fittocontents("height");
                p.pan10.set_verticalgap("10");
                p.pan10.set_spacing("10px 20px 10px 20px");
                p.pan10.set_cssclass("pal_WF_DtlBg");
                p.pan10.set_type("vertical");
                p.pan10.move("0","60","100.00%","177",null,null);

                p.grdCnvyMttr00.set_taborder("147");
                p.grdCnvyMttr00.set_binddataset("dataSet00");
                p.grdCnvyMttr00.set_autofittype("col");
                p.grdCnvyMttr00.set_nodatatext("등록된 협조 및 처리 내용이 존재하지 않습니다");
                p.grdCnvyMttr00.move("18","1715","100%","150",null,null);

                p.sta00_00_01_00_00_00_00_00.set_taborder("148");
                p.sta00_00_01_00_00_00_00_00.set_text("My Page -> 검토의견함 메뉴에서 내용 등록/수정/삭제 가능합니다.");
                p.sta00_00_01_00_00_00_00_00.set_cssclass("sta_WF_Des");
                p.sta00_00_01_00_00_00_00_00.set_fittocontents("height");
                p.sta00_00_01_00_00_00_00_00.move("18","1865","100%","30",null,null);

                p.pan11.set_taborder("149");
                p.pan11.set_flexcrossaxiswrapalign("start");
                p.pan11.set_flexwrap("wrap");
                p.pan11.set_fittocontents("height");
                p.pan11.set_verticalgap("0");
                p.pan11.set_spacing("10px 20px 10px 20px");
                p.pan11.set_cssclass("pal_WF_DtlBg");
                p.pan11.set_type("horizontal");
                p.pan11.set_visible("false");
                p.pan11.move("0","60","100.00%","201",null,null);

                p.grdCnvyMttr.set_taborder("150");
                p.grdCnvyMttr.set_binddataset("dsCnvyMttr");
                p.grdCnvyMttr.set_autofittype("col");
                p.grdCnvyMttr.set_cellsizingtype("col");
                p.grdCnvyMttr.set_autosizingtype("none");
                p.grdCnvyMttr.set_scrollbarsize("15");
                p.grdCnvyMttr.move("18","1715","100%","180",null,null);

                p.pan12.set_taborder("151");
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
                p.Div01.move("0","0","100%","429",null,null);

                p.sub_tit02.set_taborder("10");
                p.sub_tit02.set_background("#ffffff");
                p.sub_tit02.set_flexcrossaxisalign("end");
                p.sub_tit02.move("1630","674","100%","70",null,null);

                p.Div02.set_taborder("1");
                p.Div02.set_text("Div00");
                p.Div02.set_cssclass("div_WF_Bg");
                p.Div02.set_fittocontents("height");
                p.Div02.move("0","Div01:376.428","100%","3079",null,null);

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
                p.btn01.set_taborder("0");
                p.btn01.set_text("신청자정보");
                p.btn01.set_cssclass("btn_WF_Quick_S");
                p.btn01.move("17","20","100%","45",null,null);

                p.btn02.set_taborder("1");
                p.btn02.set_text("신청정보");
                p.btn02.set_cssclass("btn_WF_Quick");
                p.btn02.move("17.00","btn01:0","100%","45",null,null);

                p.btn03.set_taborder("2");
                p.btn03.set_text("처리내역");
                p.btn03.set_cssclass("btn_WF_Quick");
                p.btn03.move("17.00","110","100%","45",null,null);
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
                p.set_titletext("부가시설물설치및연장신청 신청서작성");

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
            obj = new BindItem("item1","divForm.form.Div01.form.divEdtPop00.form.Edit00","value","dsFacAddedFcltyMst","aplcntInstNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.Div01.form.edt00_01_00","value","dsFacAddedFcltyMst","aplcntNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.Div01.form.edt00_01_00_00_00","value","dsFacAddedFcltyMst","rgtrTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.Div01.form.edt00_01_00_00_00_00","value","dsFacAddedFcltyMst","rgtrMblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.Div02.form.rdoFcltSe","value","dsFacAddedFcltyMst","fcltSeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.Div02.form.rdoAplyKndCd","value","dsFacAddedFcltyMst","aplyKndCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divForm.form.Div02.form.rdoCustTypeCd","value","dsFacAddedFcltyMst","custTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divForm.form.Div02.form.divCal.form.calBgngYmd","value","dsFacAddedFcltyMst","instlDmndPrdBgngYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divForm.form.Div02.form.divCal.form.calEndYmd","value","dsFacAddedFcltyMst","instlDmndPrdEndYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divForm.form.Div02.form.cboBldgSe","value","dsFacAddedFcltyMst","bldgSeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divForm.form.Div02.form.rdoZone","value","dsFacAddedFcltyMst","zoneSeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divForm.form.Div02.form.edtDtlArtlc","value","dsFacAddedFcltyMst","dtlArtclCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divForm.form.Div02.form.edtQty","value","dsFacAddedFcltyMst","qty");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divForm.form.Div02.form.edtDiffDate00_00","value","dsFacAddedFcltyMst","shopAreaVl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divForm.form.Div02.form.edtWdthVl","value","dsFacAddedFcltyMst","wdthVl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divForm.form.Div02.form.edtVrtcVl","value","dsFacAddedFcltyMst","vrtcVl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divForm.form.Div02.form.edtHgtVl","value","dsFacAddedFcltyMst","hgtVl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divForm.form.Div02.form.edtInstlPstnCn","value","dsFacAddedFcltyMst","instlPstnCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divForm.form.Div02.form.edtUsgCn","value","dsFacAddedFcltyMst","usgCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divForm.form.Div02.form.cboSrvcAplySe","value","dsFacAddedFcltyMst","srvcAplySeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divForm.form.Div01.form.edtAplySeNm11","value","dsFacAddedFcltyMst","aplyNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.Div02.form.txtSplmntDmndRsn","value","dsFacAddedFcltyMst","splmntDmndRsnCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.Div02.form.txtCnvyMttr","value","dsFacAddedFcltyMst","cnvyMttrCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divForm.form.Div02.form.rdoSrvcDmndCnYn","value","dsFacAddedFcltyMst","srvcDmndCnIdntyYn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.addIncludeScript("LIF079M00.xfdl","xjs::TaskCom.xjs");
        this.registerScript("LIF079M00.xfdl", function() {
        /******************************************************************************
        *  PcMdi 프로젝트
        *  @FileName 	LIF079M00.xfdl
        *  @Creator 	김진섭
        *  @CreateDate 	2024/11/11
        *  @Desction    생활 > 부가시설물설치및연장신청
        ******************* 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/11/11				김진섭							최초생성
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
        this.aplySeCd 	= "TSPFAC001"; // 신청구분코드(부가시설물신청 : "TSPFAC001") - (ASIS : CAR_CAT_CD (워크플로우 데이타업데이트TAB에서 확인))
        this.jobCd 		= "TAS10432"; // 작업코드(기본값 TAS10432 : 신청서작성)

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
        	this.cfnComCdLoad({ id:"comBldgSeSearch", cbf:"fnCallback", dsBldgSeList:"TSPLOC:S" }); // 건물구분코드(S:"선택"추가 옵션)
        	this.cfnComCdLoad({ id:"comAplyKndCdSearch", cbf:"fnCallback", dsAplyKndCdList:"FACREQTYPE:" }); // 신청종류코드
        	this.cfnComCdLoad({ id:"comRenUseCdSearch", cbf:"fnCallback", dsRenUseList:"RENUSE:" }); // 시설구분코드
        	this.cfnComCdLoad({ id:"comCustTypeCdSearch", cbf:"fnCallback", dsCustTypeCdList:"FACCOMTYPE:" }); // 고객유형코드
        	this.cfnComCdLoad({ id:"comZoneCdSearch", cbf:"fnCallback", dsZoneCdList:"TSCWPLARA:" }); // 구역구분코드
        	this.cfnComCdLoad({ id:"comSrvcAplySeCdSearch", cbf:"fnCallback", dsSrvcAplySeList:"FACSVCTYPE:" }); // 서비스신청구분코드

        	// 신청서 번호 있는지 체크 없으면 신규등록
        	this.aplyNo = this.getOwnerFrame().aplyNo;   // 신청번호
        	//this.aplyNo = "FAC2501_00004";   // 신청번호- 상업용
        	//this.aplyNo = "FAC2501_00009";   // 신청번호 - 업무용

        	trace("a44_aplyNo==>" + this.aplyNo);
        	if (this.gfnIsNull(this.aplyNo)) {
        	    var nRow = this.dsFacAddedFcltyMst.addRow();

        		//신청자정보 영역
        		this.dsFacAddedFcltyMst.setColumn(nRow, "rgtrId"		, this.gvUserId);	// 등록자id
        		this.dsFacAddedFcltyMst.setColumn(nRow, "rgtrNm"		, this.gvUserNm);	// 등록자명
        		this.dsFacAddedFcltyMst.setColumn(nRow, "rgtrInstCd"	, this.gvCoId);		// 등록자기관코드
        		this.dsFacAddedFcltyMst.setColumn(nRow, "rgtrInstNm"	, this.gvCoNm);		// 등록자기관명
        		this.dsFacAddedFcltyMst.setColumn(nRow, "rgtrDeptCd"	, this.gvDeptId);	// 등록자부서코드
        		this.dsFacAddedFcltyMst.setColumn(nRow, "rgtrTelno"		, this.gvTelNo);	// 등록자전화번호
        		this.dsFacAddedFcltyMst.setColumn(nRow, "rgtrMblTelno"	, this.gvMblTelNo);	// 등록자휴대전화번호
        		this.dsFacAddedFcltyMst.setColumn(nRow, "aplcntId"		, this.gvUserId);	// 신청자id
        		this.dsFacAddedFcltyMst.setColumn(nRow, "aplcntNm"		, this.gvUserNm);	// 신청자명
        		this.dsFacAddedFcltyMst.setColumn(nRow, "aplcntInstCd"	, this.gvCoId);		// 신청자기관코드
        		this.dsFacAddedFcltyMst.setColumn(nRow, "aplcntInstNm"	, this.gvCoNm);		// 신청자기관명
        		this.dsFacAddedFcltyMst.setColumn(nRow, "aplcntDeptCd"	, this.gvDeptId);	// 신청자부서코드
        		this.dsFacAddedFcltyMst.setColumn(nRow, "aplySeCd"		, this.aplySeCd);	// 신청구분코드

        		//설치요청기간 set
        		var vFdate 	= this.gfn_getDate("date");
        		var vTdate	= this.gfn_addMonth(vFdate, 1);
        		this.divForm.form.Div02.form.divCal.form.calBgngYmd.set_value(vFdate);
        		this.divForm.form.Div02.form.divCal.form.calEndYmd.set_value(vTdate);

        		//차이 일수계산 set
        		this.divForm.form.Div02.form.edtDiffDate.set_value(this.gfn_getDiffDate(vFdate, vTdate));

        		//상업용시설 부가시설물 신청내역 리스트 영역
        		this.divForm.form.Div02.form.pan05.set_visible(false);

        		this.divForm.form.Div02.form.staCnvyMttr.text = "전달사항";//처리내용 타이틀 항목
        		this.divForm.form.Div02.form.pan12.visible = false;//처리내용 그리드 이력 항목

        	    this.divForm.form.Div02.form.rdoAplyKndCd.set_index(0);//신청종류 항목

        		this.divForm.form.Div02.form.rdoCustTypeCd.set_index(0);//고객유형 항목
        		this.divForm.form.Div02.form.rdoZone.set_index(0);//구역구분 항목

        		// 해당 TASK ID로 버튼 자동 생성 -> 추후에 신청번호가 있는지 없는지 체크해서 task id 박아넣어줘야함. 현재는 신청서 작성으로 했음.
        		this.cfnBtnCrt({ crtTrgt:this.divBtn, cbf:"fnCallback", lnkgEvnt:this.btn_onclick, inqCnd : { jobPrcsPrgrsSeCd:this.jobCd} });

        	} else {

        		// 부가시설물 마스터 조회
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
        		CTL10991	임시저장
        		CTL10992	신청
        		CTL10993	종료
        		CTL10994	재신청
        		CTL11002	재신청
        		CTL10995	미처리종료
        		CTL10996	접수
        		CTL11001	보완요청
        		CTL10997	보완요청
        		CTL10998	승인
        		CTL11014	담당자변경
        		CTL11000	미처리종료
        		CTL11003	설문응답완료
        	*/

        	trace("vBtnCd===>" + vBtnCd);

        	if(vBtnCd == "CTL10991"){ // 임시저장 버튼
        		this.vStrSvcId  = "addedFcltyInstlPrlgAplyStrg";
        		this.vStrSvcUrl = "addedFclty/addedFcltyInstlPrlgAplyStrg.do";

        	}else if(vBtnCd == "CTL10992" || vBtnCd == "CTL10994" || vBtnCd == "CTL11002"){ // 신청서작성 - 신청, 신청서보완 - 재신청
        		// validation check
        		var res = this.fnValiChk();
        		if(!res){
        			return;

        		}
        		this.vStrSvcId  = "addedFcltyInstlPrlgAplyStrg";
        		this.vStrSvcUrl = "addedFclty/addedFcltyInstlPrlgAplyStrg.do";

        	}else if(vBtnCd == "CTL10993" || vBtnCd == "CTL10995" || vBtnCd == "CTL11000"){ // 종료, 신청서보완 - 미처리종료, 담당자검토및승인 - 미처리종료
        		// 신규입력일때 종료 버튼 클릭 시 화면만 닫아줌.
        		if(this.dsFacAddedFcltyMst.getRowType(0) == Dataset.ROWTYPE_INSERT){
        			this.gfnConfirmMsg("endConfirm", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"], "", ["종료"]);

        			return;

        		}else{
        			this.vStrSvcId  = "addedFcltyInstlPrlgAplyStrg";
        			this.vStrSvcUrl = "addedFclty/addedFcltyInstlPrlgAplyStrg.do";

        		}

        	}else if(vBtnCd == "CTL10996" || vBtnCd == "CTL11001"){ // 접수 - 접수, 접수 - 보완요청
        		this.vStrSvcId  = "addedFcltyInstlPrlgAplyStrg";
        		this.vStrSvcUrl = "addedFclty/addedFcltyInstlPrlgAplyStrg.do";

        		// 서비스요청내용
        		if(this.gfnIsNull(this.dsFacAddedFcltyMst.getColumn(0, "srvcDmndCnIdntyYn"))){
        			this.divForm.form.Div02.form.rdoSrvcDmndCnYn.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["서비스요청 내용확인 \n"]);
        			return;

        		}
        		// 보완요청 - 보완사유 체크
        		if(vBtnCd == "CTL11001"){
        			if(this.gfnIsNull(this.dsFacAddedFcltyMst.getColumn(0, "splmntDmndRsnCn"))){
        				this.divForm.form.Div02.form.txtSplmntDmndRsn.setFocus();
        				this.gfnAlertMsg("msg", "MSG_009", ["보완요청 사유 \n"]);
        				return;

        			}
        		}
        	}else if(vBtnCd == "CTL10997" || vBtnCd == "CTL10998"){ // 담당자검토및승인 - 보완요청 || 승인
        		this.vStrSvcId  = "addedFcltyInstlPrlgAplyStrg";
        		this.vStrSvcUrl = "addedFclty/addedFcltyInstlPrlgAplyStrg.do";

        		// 서비스신청정보
        		if(this.gfnIsNull(this.dsFacAddedFcltyMst.getColumn(0, "srvcAplyInfoIdntyYn"))){
        			this.divForm.form.Div02.form.rdoSrvcDmndCnYn.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["서비스신청정보 확인 \n"]);
        			return;

        		}
        		// 보완요청 - 보완사유 체크
        		if(vBtnCd == "CTL10997"){
        			if(this.gfnIsNull(this.dsFacAddedFcltyMst.getColumn(0, "splmntDmndRsnCn"))){
        				this.divForm.form.Div02.form.txtSplmntDmndRsn.setFocus();
        				this.gfnAlertMsg("msg", "MSG_009", ["보완요청사유 \n"]);
        				return;

        			}
        		}
        	}else if(vBtnCd == "CTL10999"){ // 담당자변경
        		alert("담당자변경 팝업 완료 시 연결 예정!!");
        		return;

        	}

        	// 넘겨줄 데이터 세팅
        	if(this.divForm.form.Div02.form.rdoFcltSe.value == "RENUSE001"){
        		this.dsFacAddedFcltyMst.setColumn(0, "jobCd", wfInfo.nextStepJobPrcsPrgrsSeCd);
        		this.dsFacAddedFcltyMst.setColumn(0, "aplySeCd", this.aplySeCd);

        		if(this.gfnIsNull(this.dsFacAddedFcltyMst.getColumn(0, "docCd"))){
        			this.dsFacAddedFcltyMst.setColumn(0, "docCd", "TSPDOC900"); // 공통코드 TSPDOC900 : 전동차신청
        		}

        	}else{
        		for(var i = 0; i < this.dsList.rowcount; i++) {
        			this.dsList.setColumn(i, "jobCd", wfInfo.nextStepJobPrcsPrgrsSeCd);
        			this.dsList.setColumn(i, "aplySeCd", this.aplySeCd);
        			this.dsList.setColumn(i, "docCd", "TSPDOC900")
        		}
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
        	if(this.divForm.form.Div02.form.rdoFcltSe.value == "RENUSE001"){
        		if(this.gfnIsNull(this.dsFacAddedFcltyMst.getColumn(0, "aplyDt"))){
        			this.dsFacAddedFcltyMst.setColumn(0, "aplyDt", curDt);
        		}
        	}else{
        		for(var i = 0; i < this.dsList.rowcount; i++) {
        			this.dsList.setColumn(i, "aplyDt", curDt);
        		}
        	}

        	if(this.gfnIsNull(this.dsMst.getColumn(0, "aplyDt"))){
        		this.dsMst.setColumn(0, "aplyDt", curDt);

        	}

        	// 종료, 신청서보완 - 미처리종료, 담당자검토및승인 - 미처리종료, 등록/허가증제작중 - 제작완료
        	if(vBtnCd == "CTL10993" || vBtnCd == "CTL10995" || vBtnCd == "CTL11000" ){
        		// 종료일자 세팅
        		if(this.divForm.form.Div02.form.rdoFcltSe.value == "RENUSE001"){
        			this.dsFacAddedFcltyMst.setColumn(0, "endDt", curDt);
        		}else{
        			for(var i = 0; i < this.dsList.rowcount; i++) {
        				this.dsList.setColumn(i, "endDt", curDt);
        			}
        		}
        		this.dsMst.setColumn(0, "endDt", curDt);

        	}

        	// 납부담당자동일여부 - 동일하지 않을때 개인정보동의 항목 null 넣어줌.
        	if(this.dsFacAddedFcltyMst.getColumn(0, "payPicSmYn") == "1"){ // 동일하지않음
        		if(this.dsFacAddedFcltyMst.getColumn(0, "aplyKndCd") == "CARREQTYPE002"){
        			if(this.divForm.form.Div02.form.rdoFcltSe.value == "RENUSE001"){
        				this.dsFacAddedFcltyMst.setColumn(0, "prvcClctEsntlAgreYn", null);
        				this.dsFacAddedFcltyMst.setColumn(0, "prvcClctChcAgreYn", null);
        			}else{
        				for(var i = 0; i < this.dsList.rowcount; i++) {
        					this.dsList.setColumn(i, "prvcClctEsntlAgreYn", null);
        					this.dsList.setColumn(i, "prvcClctChcAgreYn", null);
        				}
        			}

        		}else{
        			if(this.divForm.form.Div02.form.rdoFcltSe.value == "RENUSE001"){
        				this.dsFacAddedFcltyMst.setColumn(0, "prvcClctEsntlAgreYn", null);
        				this.dsFacAddedFcltyMst.setColumn(0, "prvcClctEsntlAgreYn2", null);
        				this.dsFacAddedFcltyMst.setColumn(0, "prvcClctChcAgreYn", null);
        			}else{
        				for(var i = 0; i < this.dsList.rowcount; i++) {
        					this.dsList.setColumn(i, "prvcClctEsntlAgreYn", null);
        					this.dsList.setColumn(i, "prvcClctEsntlAgreYn2", null);
        					this.dsList.setColumn(i, "prvcClctChcAgreYn", null);
        				}
        			}

        		}

        	}else if(this.dsFacAddedFcltyMst.getColumn(0, "payPicSmYn") == "0"){ // 동일함
        		if(this.divForm.form.Div02.form.rdoFcltSe.value == "RENUSE001"){
        			this.dsFacAddedFcltyMst.setColumn(0, "prvcClctEsntlAgreYn2", null);
        		}else{
        			for(var i = 0; i < this.dsList.rowcount; i++) {
        				this.dsList.setColumn(i, "prvcClctEsntlAgreYn2", null);
        			}
        		}

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

        	if(this.dsMst.getColumn(0, "clmZip") != this.dsFacAddedFcltyMst.getColumn(0, "clmZip")){
        		this.dsMst.setColumn(0, "clmZip", this.dsFacAddedFcltyMst.getColumn(0, "clmZip"));	// 우편번호

        	}
        	if(this.dsMst.getColumn(0, "clmAddr") != this.dsFacAddedFcltyMst.getColumn(0, "clmAddr")){
        		this.dsMst.setColumn(0, "clmAddr", this.dsFacAddedFcltyMst.getColumn(0, "clmZip"));	// 청구주소

        	}
        	if(this.dsMst.getColumn(0, "clmDtlAddr") != this.dsFacAddedFcltyMst.getColumn(0, "clmDtlAddr")){
        		this.dsMst.setColumn(0, "clmDtlAddr", this.dsFacAddedFcltyMst.getColumn(0, "clmDtlAddr"));		// 청구상세주소

        	}

        	// 수정된 내역이 있는지 체크
        	if(!this.gfnDsIsUpdated(this.dsFacAddedFcltyMst) && !this.gfnDsIsUpdated(this.dsAtfl) && !this.gfnDsIsUpdated(this.dsCnvyMttr)){
        		this.gfnAlertMsg("msg", "MSG_004", [""]);
        		return;

        	}

        	if(vBtnCd == "CTL10993" || vBtnCd == "CTL10995" || vBtnCd == "CTL11000"){ // 종료, 신청서보완 - 미처리종료, 담당자검토및승인 - 미처리종료
        		trace("sssss==>" + vBtnCd );
        		this.gfnConfirmMsg("endSaveConfirm", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"], "", ["종료"]);

        	}else if(vBtnCd == "CTL10992") { // 신청
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
        	//alert("gggg==>" + oRtn.result);
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
        			alert("gggg2222==>" + oRtn.result);
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

        //	var tmpVhclType = this.dsBldgSeList.getColumn(0, "bldgSeCd"); // 건물구분 코드
        // 	var tmpFuelKndCd = this.dsFacAddedFcltyMst.getColumn(0, "fuelKndCd"); // 연료 종류 코드
        // 	var tmpOfcbzUseYn = this.dsFacAddedFcltyMst.getColumn(0, "ofcbzUseYn"); // 공용충전기사용여부
        // 	var tmpSafeInspTrgtYn = this.dsFacAddedFcltyMst.getColumn(0, "safeInspTrgtYn"); // 안전검사대상여부
        // 	var tmpSafeDvcEsntlVhclYn = this.dsFacAddedFcltyMst.getColumn(0, "safeDvcEsntlVhclYn"); // 안전장치의무부착여부


        	// 신청종류
        	if(this.gfnIsNull(this.divForm.form.Div02.form.rdoAplyKndCd.value)){
        		this.divForm.form.Div02.form.rdoAplyKndCd.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["[신청종류] \n"]);
        		return false;
        	}

        	// 시설구분
        	if(this.gfnIsNull(this.divForm.form.Div02.form.rdoFcltSe.value)){
        		this.divForm.form.Div02.form.rdoFcltSe.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["[시설구분] \n"]);
        		return false;
        	}

        	// 고객유형
        	if(this.gfnIsNull(this.divForm.form.Div02.form.rdoCustTypeCd.value)){
        		this.divForm.form.Div02.form.rdoCustTypeCd.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["[고객유형] \n"]);
        		return false;
        	}

        	// 건물구분
        	if(this.gfnIsNull(this.dsFacAddedFcltyMst.getColumn(0, "bldgSeCd"))){
        		this.divForm.form.Div02.form.cboBldgSe.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["[건물구분] \n"]);
        		return false;
        	}

        	if(this.divForm.form.Div02.form.rdoFcltSe.value == "RENUSE001"){

        		// 서비스신청구분(업무용시설)
        		if(this.gfnIsNull(this.dsFacAddedFcltyMst.getColumn(0, "srvcAplySeCd"))){
        			this.divForm.form.Div02.form.cboSrvcAplySe.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["[서비스신청구분] \n"]);
        			return false;

        		}

        		// 수량
        		if(this.gfnIsNull(this.dsFacAddedFcltyMst.getColumn(0, "qty"))){
        			this.divForm.form.Div02.form.edtQty.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["[수량] \n"]);
        			return false;

        		}

        		// 가로
        		if(this.gfnIsNull(this.dsFacAddedFcltyMst.getColumn(0, "wdthVl"))){
        			this.divForm.form.Div02.form.edtWdthVl.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["[가로] \n"]);
        			return false;

        		}

        		// 세로
        		if(this.gfnIsNull(this.dsFacAddedFcltyMst.getColumn(0, "vrtcVl"))){
        			this.divForm.form.Div02.form.edtVrtcVl.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["[세로] \n"]);
        			return false;

        		}

        		// 높이
        		if(this.gfnIsNull(this.dsFacAddedFcltyMst.getColumn(0, "hgtVl"))){
        			this.divForm.form.Div02.form.edtHgtVl.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["[높이] \n"]);
        			return false;

        		}

        		// 설치위치
        		if(this.gfnIsNull(this.dsFacAddedFcltyMst.getColumn(0, "instlPstnCn"))){
        			this.divForm.form.Div02.form.edtInstlPstnCn.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["[설치위치] \n"]);
        			return false;

        		}

        		// 용도
        		if(this.gfnIsNull(this.dsFacAddedFcltyMst.getColumn(0, "usgCn"))){
        			this.divForm.form.Div02.form.edtUsgCn.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["[용도] \n"]);
        			return false;

        		}
        	}else{//RENUSE001 :상업용시설

        		if(this.dsList.getRowCount() <= 0){
        			this.gfnAlertMsg("msg", "MSG_009", ["[상업용시설 부가시설물 신청내역] \n"]);
        			return false;
        		}

        		for(var i = 0; i < this.dsList.rowcount; i++) {

        			// 서비스신청구분
        			if(this.gfnIsNull(this.dsList.getColumn(i, "srvcAplySeCd"))){
        				this.gfnAlertMsg("msg", "MSG_009", ["[상업용시설 서비스신청구분] \n"]);
        				return false;
        			}

        			// 수량
        			if(this.gfnIsNull(this.dsList.getColumn(i, "qty"))){
        				this.gfnAlertMsg("msg", "MSG_009", ["[상업용시설 수량] \n"]);
        				return false;
        			}

        			// 가로
        			if(this.gfnIsNull(this.dsList.getColumn(i, "wdthVl"))){
        				this.gfnAlertMsg("msg", "MSG_009", ["[상업용시설 가로] \n"]);
        				return false;
        			}

        			// 세로
        			if(this.gfnIsNull(this.dsList.getColumn(i, "vrtcVl"))){
        				this.gfnAlertMsg("msg", "MSG_009", ["[상업용시설 세로] \n"]);
        				return false;
        			}

        			// 높이
        			if(this.gfnIsNull(this.dsList.getColumn(i, "hgtVl"))){
        				this.gfnAlertMsg("msg", "MSG_009", ["[상업용시설 높이] \n"]);
        				return false;
        			}

        			// 설치위치
        			if(this.gfnIsNull(this.dsList.getColumn(i, "instlPstnCn"))){
        				this.gfnAlertMsg("msg", "MSG_009", ["[상업용시설 설치위치] \n"]);
        				return false;
        			}

        			// 용도
        			if(this.gfnIsNull(this.dsList.getColumn(i, "usgCn"))){
        				this.gfnAlertMsg("msg", "MSG_009", ["[상업용시설 용도] \n"]);
        				return false;
        			}

        			//TODO 부가시설물사진 첨부
        			//부가시설물사진(전면)
        			if(this.gfnIsNull(this.dsList.getColumn(i, "addedFcltyFrtPhotoPath"))){
        				this.gfnAlertMsg("msg", "MSG_009", ["[상업용시설 부가시설물사진(전면)] \n"]);
        				return false;
        			}

        			//부가시설물사진(후면)
        			if(this.gfnIsNull(this.dsList.getColumn(i, "addedFcltyRarPhotoPath"))){
        				this.gfnAlertMsg("msg", "MSG_009", ["[상업용시설 부가시설물사진(후면)] \n"]);
        				return false;
        			}

        			//TODO TEST때문에 막음
        // 			//부가시설물사진(측면)
        // 			if(this.gfnIsNull(this.dsList.getColumn(i, "addedFcltyFlkPhotoPath"))){
        // 				this.gfnAlertMsg("msg", "MSG_009", ["[상업용시설 부가시설물사진(측면)] \n"]);
        // 				return false;
        // 			}

        		}

        	}

        	return true;
        }

        /**************************************************************************
         * @name : fnScrnSetting
         * @description : 조회 시 화면 세팅
         ***************************************************************************/
        this.fnScrnSetting = function()
        {

        //alert("bb11");
        	// 기본 바인딩 세팅
        	// 개인정보 필수동의
        	var sCompid = "divForm.form.Div02.form.rdoSrvcDmndCnYn";
        	var sItem = "";

        	for(var i = 0; i < this.binds.length; i++){
        		if(this.binds[i].compid == sCompid){
        			sItem = this.binds[i].name;
        			break;

        		}
        	}
        	// 같은 항목으로 동적바인딩 제거
        	this.removeChild(sItem);
        //alert("bb22");
        	var tmpTxt = "";

        	//TAS10435 : 담당자검토및승인
        	if(this.jobCd == "TAS10435"){
        		// 바인딩 생성
        		var bindObj = new BindItem();
        		bindObj.init(sItem, sCompid, "value", "dsFacAddedFcltyMst", "srvcAplyInfoIdntyYn");
        		this.addChild(sItem, bindObj);
        		bindObj.bind();
        		tmpTxt = "서비스신청정보확인";

        	}else{
        		// 바인딩 생성
        		var bindObj = new BindItem();
        		bindObj.init(sItem, sCompid, "value", "dsFacAddedFcltyMst", "srvcDmndCnIdntyYn");
        		this.addChild(sItem, bindObj);
        		bindObj.bind();
        		tmpTxt = "서비스요청내용확인";

        	}
        //alert("bb33_this.jobCd==>" + this.jobCd);
        	// text 세팅
        	this.divForm.form.Div02.form.staPrvcClctChcAgreYn01.text = tmpTxt;

        	// TAS10434 : 담당자접수, TAS10435 : 담당자검토및승인
        	//TODO
        	//서비스목록화면에서 팝업 오픈인지, 처리자 로그인 후 메인화면의 처리목록에 팝업 오픈인지 구분 필요
        	//KJS,20241120
        	if(this.jobCd == "TAS10434" || this.jobCd == "TAS10435"){
        //alert("bb33222");
        		this.divForm.form.Div02.form.pan07.visible = true; //서비스요청내용확인 radio
        		this.divForm.form.Div02.form.pan08.visible = true; //보완요청사유
        		this.divForm.form.Div02.form.pan09.visible = true; //별칭내용
        		this.divForm.form.Div02.form.pan10.visible = true; //전달사항
        		this.divForm.form.Div02.form.pan11.visible = true; //별칭내용
        		this.divForm.form.Div02.form.pan12.visible = true; //처리내용이력

        		this.resetScroll();//화면에서 스크롤을 길게 보이게 해주는 기능
        	}

        	//TAS10433 : 신청서보완
        	if(this.jobCd == "TAS10433"){
        		this.divForm.form.Div02.form.pan08.visible = true; //보완요청사유
        		this.divForm.form.Div02.form.pan10.visible = true; //전달사항
        		this.divForm.form.Div02.form.pan12.visible = true; //처리내용이력

        		this.resetScroll();//화면에서 스크롤을 길게 보이게 해주는 기능
        	}

        	//TAS10436 : 만족조조사
        	if(this.jobCd == "TAS10436"){
        	    this.divForm.form.Div02.form.pan10.visible = false; //처리내역
        		this.divForm.form.Div02.form.pan12.visible = true; //처리내용이력

        		this.resetScroll();//화면에서 스크롤을 길게 보이게 해주는 기능
        	}
        //alert("bb44");
        	// 담당자접수 (조회 거래) 시 readyOnly 처리
        // 	if(this.jobCd == "TAS10434"){
        // 		this.divForm.form.Div02.form.rdoSrvcDmndCnYn.readonly = true;
        // 		this.divForm.form.Div02.form.txtSplmntDmndRsn.readonly = true;
        // 	}

        	// 신청서 보완 시 보완내역 readyOnly 처리
        	if(this.jobCd == "TAS10433"){
        		this.divForm.form.Div02.form.rdoSrvcDmndCnYn.readonly = true;
        		this.divForm.form.Div02.form.txtSplmntDmndRsn.readonly = true;
        		this.divForm.form.Div02.form.grdSplmnt.readonly = true;
        		this.divForm.form.Div02.form.grdCnvyMttr.readonly = true;

        		this.resetScroll();

        	}

        	trace("(fn_ScrnSetting)this.jobCd ====>" + this.jobCd);

        	// TAS10437 : 종료 일때
        	if(this.jobCd == "TAS10437"){
        		var sBfrJobCd = this.dsFacAddedFcltyMst.getColumn(0, "bfrJobCd");
        		trace("sBfrJobCd_ff==>" + sBfrJobCd);
        		// TAS10432 : 신청서작성, TAS10433 : 신청서보완
        		if(sBfrJobCd == "TAS10432"){


        		}else if(sBfrJobCd == "TAS10433"){
        			// 신청서보완에서 미처리 종료된 경우 보완 내역을 보여준다.
        			this.divForm.form.Div02.form.pan07.visible = true;
        			this.divForm.form.Div02.form.pan08.visible = true;
        			this.divForm.form.Div02.form.pan09.visible = true;
        			// this.divForm.form.Div07.form.pan07.visible = true;
        			//this.divForm.form.Div07.form.pan08.visible = true;

        			this.resetScroll();

        		}
        	}
        //alert("bb555==>" + this.jobCd);
        	// this.jobCd 가 TAS10432, TAS10433 일때는 신청서 작성/보완 이라 이외에는 컴포넌트 readOnly 처리해줌.
        	if(this.jobCd != "TAS10432" && this.jobCd != "TAS10433"){
        //alert("bb66611==>" + this.jobCd);
        		// 이력 불러오기 버튼 신청성 작성일때만 노출
        		if(this.jobCd != "TAS10432"){
        			this.divForm.form.Div01.form.btnHstry.visible = false;

        		}
        //alert("bb66622==>" + this.jobCd);
        		// 컨포넌트 enable, readonly 처리
        		var sDivFrom = this.divForm.form;

        		var arrDivComps = [sDivFrom.Div01, sDivFrom.Div02];

        		arrDivComps.forEach(oDiv => {
        			Array.from(oDiv.form.components).forEach(oComp => {
        				fnReadonly.call(this, oComp);
        			});
        		});
        //alert("bb66633==>" + this.jobCd);
        		// 내부함수호출
        		function fnReadonly (oComp, bReadonly) {
        			if (oComp instanceof nexacro.Div) {
        				fnReadonly.call(this, oComp.form);
        			} else {
        				if (oComp instanceof nexacro.Static) return;
        				if (oComp instanceof nexacro.Panel) return;
        				if (oComp instanceof nexacro.TextArea){
        					// TAS10437 : 종료가 아닐땐 textArea 수정가능하게 해줌.
        					if(this.jobCd != "TAS10437"){
        						return;

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
        //alert("bb8888");

        				try {
        					// 접수단계 || 담당자검토및승인
        					if(this.jobCd == "TAS10434" || this.jobCd == "TAS10435"){
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

        	//alert("bb9999");
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
        		case "addedFcltyInstlPrlgAplyInq" : // 부가시설물 마스터 조회
        			//alert("마스터 정상조회!!!");
        			if(this.dsFacAddedFcltyMst.getRowCount() > 0){
        				this.jobCd = this.dsFacAddedFcltyMst.getColumn(0, "jobCd");
        			}

        			//@서비스목록 화면에서 팝업조회시 버튼 생성 막음(kjs, 20241119)
        			// 해당 TASK ID로 버튼 자동 생성 -> 추후에 신청번호가 있는지 없는지 체크해서 task id 박아넣어줘야함. 현재는 신청서 작성으로 했음.
        			this.cfnBtnCrt({ crtTrgt:this.divBtn, cbf:"fnCallback", lnkgEvnt:this.btn_onclick, inqCnd : { jobPrcsPrgrsSeCd:this.jobCd} });

        			// 화면 세팅
        			this.fnScrnSetting();

        			//상업용시설 부가시설물 신청내역 리스트
        			if(this.dsFacAddedFcltyMst.getColumn(0, "fcltSeCd") == "RENUSE001"){
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

        			//시설구분 라디오 바튼
        			this.divForm_Div02_rdoFcltSe_onitemchanged();

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

        		case "comRenUseCdSearch" : // 시설구분코드 조회

        			//this.divForm.form.Div02.form.rdoFcltSe.set_index(0);
        			//test용
        			//this.divForm.form.Div02.form.rdoFcltSe.value = "RENUSE002";//시설구분 항목
        			//this.divForm_Div02_rdoFcltSe_onitemchanged();

        			break;

        		case "comSrvcAplySeCdSearch" : // 서비스신청구분코드 조회

        			// 전체 조회를 위해 [선택] 추가
        			this.dsSrvcAplySeList.insertRow(0);
        			this.dsSrvcAplySeList.setColumn(0, "cdId", "");
        			this.dsSrvcAplySeList.setColumn(0, "cdNm", "[서비스신청구분]");

        			this.divForm.form.Div02.form.cboSrvcAplySe.set_index(0);

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
        			if(this.jobCd == "TAS10434" || this.jobCd == "TAS10435"){
        				//KJS this.rdoSrvcDmndCnYn_onitemchanged(this.divForm.form.Div02.form.rdoSrvcDmndCnYn);

        				//서비스요청내용확인 라디오 선택
        				this.rdoSrvcDmndCnYn_onitemchanged();

        			}else if(this.jobCd == "TAS10433"){ // 신청서보완
        				var sClrId = this.dsFacAddedFcltyMst.getColumn(0, "clrId");
        				console.log("sClrId = " + sClrId);
        				if(this.gfnIsNull(sClrId)){ // 접수자ID가 없을때 담당자접수 에서 넘어온 자료
        					Array.from(this.btnDiv.form.components).forEach(oComp => {
        						if(oComp.id == "CTL10994"){
        							oComp.visible = false;

        						}else if(oComp.id == "CTL11002"){
        							oComp.visible = true;
        							console.log("CTL11002");

        						}
        					});

        				}else{
        					Array.from(this.btnDiv.form.components).forEach(oComp => {
        						if(oComp.id == "CTL10994"){
        							oComp.visible = true;
        							console.log("CTL10994");

        						}else if(oComp.id == "CTL11002"){
        							oComp.visible = false;

        						}
        					});
        				}
        			}

        			break;

        		case "addedFcltyInstlPrlgAplyStrg" : // 임시저장, 신청

        			alert("저장 처리가 정상적으로 완료되었습니다");
        		    this.reload();
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

        		default :
        			break;
        	}
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function (paramAplyNo)
        {
        	this.fnSearch(paramAplyNo);
        };

        /*=================================================================================*
         * @name : fnSearch
         * @description : 조회
         *=================================================================================*/
        this.fnSearch = function(paramAplyNo)
        {
        	if(this.dsSearch.getRowCount() > 0){
        		this.dsSearch.clearData();

        	}

        	this.dsSearch.addRow();
        	this.dsSearch.setColumn(0, "aplyNo", paramAplyNo);

        	var strSvcId    = "addedFcltyInstlPrlgAplyInq";
        	var strSvcUrl   = "addedFclty/addedFcltyInstlPrlgAplyInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsFacAddedFcltyMst=dsFacAddedFcltyMst dsCnvyMttr=dsCnvyMttr dsAtfl=dsAtfl dsList=dsList dsMst=dsMst";
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
        	// 전달사항 없을때 오류 나서 addRow 추가
         	if(this.dsCnvyMttr.getRowCount() < 1){
         		this.dsCnvyMttr.addRow();
         	}

        	var strSvcId    = vStrSvcId;
        	var strSvcUrl   = vStrSvcUrl;
        	var inData      = "";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	inData    = "dsWfInfo=" + this.FV_DS_OTPT_WORK_FLOW_INFO + ":U"  // WorkFlow 정보
        			          + " dsMst=dsMst:U"                                     // 시설물운영 마스터 DS
         			          + " dsFacAddedFcltyMst=dsFacAddedFcltyMst:U"     		 // 부가시설물 마스터 DS
        					  + " dsList=dsList:U"                      		 // 상업용시설 부가시설물 신청내역 LIST DS
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
        	//alert("xxxx==>" + this.divForm.form.Div02.form.rdoFcltSe.value);
        	//상업용시설 부가시설물 신청내역 리스트
        	if(this.divForm.form.Div02.form.rdoFcltSe.value == "RENUSE001"){
        		this.divForm.form.Div02.form.pan05.visible = false ;//업무용시설
        		this.divForm.form.Div02.form.pan041.visible = true;//업무용시설용 서비스신청구분 항목

        		this.divForm.form.Div02.form.pan042.visible = true;//수량
        		this.divForm.form.Div02.form.pan043.visible = true;//설치위치
        		this.divForm.form.Div02.form.pan044.visible = true;//용도
        		this.divForm.form.Div02.form.panFile.visible = true;//부가시설물사진(전면)
        		this.divForm.form.Div02.form.panFile00.visible = true;//부가시설물사진(후면)
        		this.divForm.form.Div02.form.panFile01.visible = true;//부가시설물사진(측면)
        		this.divForm.form.Div02.form.panFile02.visible = true;//부가시설물사진(기타)
        		this.divForm.form.Div02.form.panFile03.visible = true;//부가시설물사진(기타2)

        	}else{
        		this.divForm.form.Div02.form.pan05.visible = true ;//상업용시설용 입력 그리드
        		this.divForm.form.Div02.form.pan041.visible = false;//업무용시설용 서비스신청구분 항목

        		this.divForm.form.Div02.form.pan042.visible = false;//수량
        		this.divForm.form.Div02.form.pan043.visible = false;//설치위치
        		this.divForm.form.Div02.form.pan044.visible = false;//용도
        		this.divForm.form.Div02.form.panFile.visible = false;//부가시설물사진(전면)
        		this.divForm.form.Div02.form.panFile00.visible = false;//부가시설물사진(후면)
        		this.divForm.form.Div02.form.panFile01.visible = false;//부가시설물사진(측면)
        		this.divForm.form.Div02.form.panFile02.visible = false;//부가시설물사진(기타)
        		this.divForm.form.Div02.form.panFile03.visible = false;//부가시설물사진(기타2)
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

        	//var objVal = obj.value;
        	var objVal = this.divForm.form.Div02.form.rdoSrvcDmndCnYn.value;
        	//alert("ddd==>" + objVal);

        	if(this.jobCd == "TAS10434"){ // 담당자접수
        	//alert("objVal11==>" + objVal);
        		if(objVal == "1"){ // 1 : 확인
        			/*
        			CTL10996	접수
        			CTL11001	보완요청
        			CTL11020	미처리종료
        			*/
        			Array.from(this.btnDiv.form.components).forEach(oComp => {
        				if(oComp.id == "CTL10996"){
        					oComp.visible = true;

        				}else{
        					oComp.visible = false;

        				}
        			});

        		}else if(objVal == "2"){ // 2 : 미처리종료
        			/*
        			CTL10996	접수
        			CTL11001	보완요청
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
        				if(oComp.id == "CTL11001"){
        					oComp.visible = true;

        				}else{
        					oComp.visible = false;

        				}
        			});
        		}

        	}else if(this.jobCd == "TAS10435"){ // 담당자검토및승인
        	trace("objVal==>" + objVal);
        		if(objVal == "1"){ // 1 : 승인 라디오버튼 클릭
        			/*
        			CTL10997	보완요청
        			CTL10998	승인
        			CTL10999	담당자변경
        			CTL11000	미처리종료
        			*/
        			Array.from(this.btnDiv.form.components).forEach(oComp => {
        				if(oComp.id == "CTL10998" || oComp.id == "CTL10999" || oComp.id == "CTL11000"){
        					oComp.visible = true;

        				}else if(oComp.id == "CTL10997"){
        					oComp.visible = false;

        				}
        			});

        		}else if(objVal == "2"){ // 2 : 미승인 라디오버튼 클릭
        			/*
        			CTL10997	보완요청
        			CTL10998	승인
        			CTL10999	담당자변경
        			CTL11000	미처리종료
        			*/
        			Array.from(this.btnDiv.form.components).forEach(oComp => {
        			//trace("oComp.id_1111==>" + oComp.id);
        				if(oComp.id == "CTL11000"){
        					oComp.visible = true;

        				}else if(oComp.id == "CTL10997" || oComp.id == "CTL10999" || oComp.id == "CTL10998"){
        					oComp.visible = false;

        				}
        			});

        		}else if(objVal == "0" || objVal == "Y"){ // 2 : 보완요청 라디오버튼 클릭
        			/*
        			CTL10997	보완요청
        			CTL10998	승인
        			CTL10999	담당자변경
        			CTL11000	미처리종료
        			*/
        			Array.from(this.btnDiv.form.components).forEach(oComp => {
        				if(oComp.id == "CTL10997" || oComp.id == "CTL10999" || oComp.id == "CTL11000"){
        					oComp.visible = true;

        				}else if(oComp.id == "CTL10998"){
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

        //행추가
        this.divForm_Div02_divGrd_btnGrdRegi_onclick = function(obj,e)
        {
        	var nRow = this.dsList.addRow();

        	//신청자정보 영역
        	this.dsList.setColumn(nRow, "rgtrId"		, this.gvUserId);	// 등록자id
        	this.dsList.setColumn(nRow, "rgtrNm"		, this.gvUserNm);	// 등록자명
        	this.dsList.setColumn(nRow, "rgtrInstCd"	, this.gvCoId);		// 등록자기관코드
        	this.dsList.setColumn(nRow, "rgtrInstNm"	, this.gvCoNm);		// 등록자기관명
        	this.dsList.setColumn(nRow, "rgtrDeptCd"	, this.gvDeptId);	// 등록자부서코드
        	this.dsList.setColumn(nRow, "rgtrTelno"		, this.gvTelNo);	// 등록자전화번호
        	this.dsList.setColumn(nRow, "rgtrMblTelno"	, this.gvMblTelNo);	// 등록자휴대전화번호
        	this.dsList.setColumn(nRow, "aplcntId"		, this.gvUserId);	// 신청자id
        	this.dsList.setColumn(nRow, "aplcntNm"		, this.gvUserNm);	// 신청자명
        	this.dsList.setColumn(nRow, "aplcntInstCd"	, this.gvCoId);		// 신청자기관코드
        	this.dsList.setColumn(nRow, "aplcntInstNm"	, this.gvCoNm);		// 신청자기관명
        	this.dsList.setColumn(nRow, "aplcntDeptCd"	, this.gvDeptId);	// 신청자부서코드
        	this.dsList.setColumn(nRow, "aplySeCd"		, this.aplySeCd);	// 신청구분코드

        	//신청종류코드
        	this.dsList.setColumn(nRow, "aplyKndCd"		, this.dsFacAddedFcltyMst.getColumn(0, "aplyKndCd"));
        	//시설구분코드
        	this.dsList.setColumn(nRow, "fcltSeCd"		, this.dsFacAddedFcltyMst.getColumn(0, "fcltSeCd"));
        	//고객유형코드
        	this.dsList.setColumn(nRow, "custTypeCd"	, this.dsFacAddedFcltyMst.getColumn(0, "custTypeCd"));
        	//설치요청시작일자
        	this.dsList.setColumn(nRow, "instlDmndPrdBgngYmd", this.dsFacAddedFcltyMst.getColumn(0, "instlDmndPrdBgngYmd"));
        	//설치요청종룡일자
        	this.dsList.setColumn(nRow, "instlDmndPrdEndYmd", this.dsFacAddedFcltyMst.getColumn(0, "instlDmndPrdEndYmd"));
        	//건물구분코드
        	this.dsList.setColumn(nRow, "bldgSeCd"	, this.dsFacAddedFcltyMst.getColumn(0, "bldgSeCd"));
        	//구역구분
        	this.dsList.setColumn(nRow, "zoneSeCd"	, this.dsFacAddedFcltyMst.getColumn(0, "zoneSeCd"));

        };

        //행삭제
        this.divForm_Div02_divGrd_btnGrdDel_onclick = function(obj,e)
        {
         	if(this.dsList.findRow("chk", 1) != -1) {
         		this.gfnConfirmMsg( "btnGrdDel_POPUP"
         		                  , "MSG_005"   // 삭제하시겠습니까?
         						  , function(id, val) {
         						        if(JSON.parse(val).result == "Y") {
        			                        this.dsList.deleteMultiRows(this.dsList.extractRows("chk == " + 1));
        // 									this.dsGnrlTelCncltnList_oncolumnchanged();
         		                        }
         		                    }
         						  , ["확인", "취소"]
         						  , ["Y"  , "N" ]
         						  );
         	} else {
         	    // 선택된 내용이 없습니다.
         		this.gfnAlertMsg("msg", "MSG_006", "");
         	}
        };

        this.divForm_Div01_btnHstry_onclick = function(obj,e)
        {
        	var sTitle = "부가시설물설치및연장신청 과거신청이력팝업";

        	var objArg   = {
        		  paramInstNm : this.gvCoNm
        		, paramNm : this.gvUserNm
        	};

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
        		, width: 1500
        		, height: 980			//width,height 지정하지 않음 popup form size적용
        		, autosize: false
        		, title: sTitle
        		, resize: true
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("aplyHstryPop", "work::LIF/FAC/LIF079P06.xfdl", objArg, sPopupCallBack, objOption);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onvscroll",this.form_onvscroll,this);
            this.divForm.form.divInfoGuide.form.btnSchClose.addEventHandler("onclick",this.divInfoGuide_btnSchClose_onclick,this);
            this.divForm.form.Div01.form.btnHstry.addEventHandler("onclick",this.divForm_Div01_btnHstry_onclick,this);
            this.divForm.form.Div01.form.sta00_00.addEventHandler("onclick",this.divForm_Div01_sta00_00_onclick,this);
            this.divForm.form.Div02.form.rdoFcltSe.addEventHandler("onitemchanged",this.divForm_Div02_rdoFcltSe_onitemchanged,this);
            this.divForm.form.Div02.form.divCal.form.calBgngYmd.addEventHandler("onchanged",this.divForm_Div02_divCal_calBgngYmd_onchanged,this);
            this.divForm.form.Div02.form.divCal.form.calEndYmd.addEventHandler("onchanged",this.divForm_Div02_divCal_calEndYmd_onchanged,this);
            this.divForm.form.Div02.form.cboBldgSe.addEventHandler("onitemchanged",this.cbo00_onitemchanged,this);
            this.divForm.form.Div02.form.divGrd.form.btnGrdDel.addEventHandler("onclick",this.divForm_Div02_divGrd_btnGrdDel_onclick,this);
            this.divForm.form.Div02.form.divGrd.form.btnGrdRegi.addEventHandler("onclick",this.divForm_Div02_divGrd_btnGrdRegi_onclick,this);
            this.divForm.form.Div02.form.btn_file_1.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.Div02.form.btn_del_file_1.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div02.form.Grid00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div02.form.Grid00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div02.form.btn_file_1_00.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.Div02.form.btn_del_file_1_00.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div02.form.Grid00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div02.form.Grid00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div02.form.btn_file_1_01.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.Div02.form.btn_del_file_1_01.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div02.form.Grid00_01.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div02.form.Grid00_01.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div02.form.btn_file_1_02.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.Div02.form.btn_del_file_1_02.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div02.form.Grid00_02.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div02.form.Grid00_02.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div02.form.btn_file_1_03.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.Div02.form.btn_del_file_1_03.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div02.form.Grid00_03.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div02.form.Grid00_03.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div02.form.cboSrvcAplySe.addEventHandler("onitemchanged",this.divForm_Div02_cboSrvcAplySe_onitemchanged,this);
            this.divForm.form.Div02.form.rdoSrvcDmndCnYn.addEventHandler("onitemchanged",this.rdoSrvcDmndCnYn_onitemchanged,this);
            this.divForm.form.Div02.form.txtSplmntDmndRsn.addEventHandler("onchanged",this.divForm_Div03_TextArea00_onchanged,this);
            this.divForm.form.Div02.form.txtCnvyMttr.addEventHandler("onchanged",this.divForm_Div03_TextArea00_onchanged,this);
            this.divQuick.form.btn01.addEventHandler("onclick",this.btnQuick_onclick,this);
            this.divQuick.form.btn02.addEventHandler("onclick",this.btnQuick_onclick,this);
            this.divQuick.form.btn03.addEventHandler("onclick",this.btnQuick_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsMain_onvaluechanged,this);
            this.dsMst.addEventHandler("onvaluechanged",this.dsMst_onvaluechanged,this);
            this.dsMst.addEventHandler("onload",this.dsMst_onload,this);
            this.dsAtfl.addEventHandler("onload",this.dsAtfl_onload,this);
        };
        this.loadIncludeScript("LIF079M00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
