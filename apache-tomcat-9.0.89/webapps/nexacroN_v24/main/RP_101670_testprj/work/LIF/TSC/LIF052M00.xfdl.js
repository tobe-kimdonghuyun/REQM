(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LIF056M00");
            this.set_titletext("통신사용신청");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsCmmCmnctMst", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/><Column id=\"srvcAplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"dmndDt\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"ownrId\" type=\"STRING\" size=\"256\"/><Column id=\"ownrInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"ownrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"mdfcnDt\" type=\"STRING\" size=\"256\"/><Column id=\"mdfrId\" type=\"STRING\" size=\"256\"/><Column id=\"endCd\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"clmCustCd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"pstnInfoRnb\" type=\"STRING\" size=\"256\"/><Column id=\"clrId\" type=\"STRING\" size=\"256\"/><Column id=\"rcptDt\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclNm1\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnExmnCn1\" type=\"STRING\" size=\"256\"/><Column id=\"dptyRegYn\" type=\"STRING\" size=\"256\"/><Column id=\"acrdCmptnDt\" type=\"STRING\" size=\"256\"/><Column id=\"cmptnHpeDt\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnRspnsYn\" type=\"STRING\" size=\"256\"/><Column id=\"custTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"unqNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtrNm\" type=\"STRING\" size=\"256\"/><Column id=\"brdt\" type=\"STRING\" size=\"256\"/><Column id=\"rprsvNm\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"telno\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"bfhdJobCmptnYn\" type=\"STRING\" size=\"256\"/><Column id=\"newCustYn\" type=\"STRING\" size=\"256\"/><Column id=\"opngCnfdocPath\" type=\"STRING\" size=\"256\"/><Column id=\"custInfoCrtYn\" type=\"STRING\" size=\"256\"/><Column id=\"usfeeAmt\" type=\"STRING\" size=\"256\"/><Column id=\"upbiAmt\" type=\"STRING\" size=\"256\"/><Column id=\"upbiYn\" type=\"STRING\" size=\"256\"/><Column id=\"cncltnCmptnYn\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnRspnsDt\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptAplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptCtrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptPstnInfoCn\" type=\"STRING\" size=\"256\"/><Column id=\"focYn\" type=\"STRING\" size=\"256\"/><Column id=\"asaSysMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtHwrtInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntHwrtInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"clmAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmDtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmZip\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtChcYn\" type=\"STRING\" size=\"256\"/><Column id=\"prvcClctEsntlAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"prvcClctChcAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"chcInfoClctAgreRfsBnftsLmtAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"pstnSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"rmrkCn\" type=\"STRING\" size=\"256\"/><Column id=\"payPicSmYn\" type=\"STRING\" size=\"256\"/><Column id=\"crno\" type=\"STRING\" size=\"256\"/><Column id=\"tpbiz\" type=\"STRING\" size=\"256\"/><Column id=\"bzstat\" type=\"STRING\" size=\"256\"/><Column id=\"payPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"payPicTelno\" type=\"STRING\" size=\"256\"/><Column id=\"clmMtdCd\" type=\"STRING\" size=\"256\"/><Column id=\"acuntEml\" type=\"STRING\" size=\"256\"/><Column id=\"txivEml\" type=\"STRING\" size=\"256\"/><Column id=\"bzmnRegAddr\" type=\"STRING\" size=\"256\"/><Column id=\"bzmnRegDtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"bzmnRegZip\" type=\"STRING\" size=\"256\"/><Column id=\"builcPath\" type=\"STRING\" size=\"256\"/><Column id=\"itgrnClmYn\" type=\"STRING\" size=\"256\"/><Column id=\"custNo\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclNm2\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclNm3\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnExmnCn2\" type=\"STRING\" size=\"256\"/><Column id=\"payPicMblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnExmnCn3\" type=\"STRING\" size=\"256\"/><Column id=\"usfeeAmtOrg\" type=\"STRING\" size=\"256\"/><Column id=\"upbiAmtOrg\" type=\"STRING\" size=\"256\"/><Column id=\"epidn\" type=\"STRING\" size=\"256\"/><Column id=\"flnm\" type=\"STRING\" size=\"256\"/><Column id=\"telno\" type=\"STRING\" size=\"256\"/><Column id=\"rltnBssCd\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"telKndCd\" type=\"STRING\" size=\"256\"/><Column id=\"telAplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"telGrdCd\" type=\"STRING\" size=\"256\"/><Column id=\"telAplyQty\" type=\"STRING\" size=\"256\"/><Column id=\"telAplyTelno\" type=\"STRING\" size=\"256\"/><Column id=\"telActlUserOgdpNm\" type=\"STRING\" size=\"256\"/><Column id=\"telActlUserNm\" type=\"STRING\" size=\"256\"/><Column id=\"telShtemLgtrmYn\" type=\"STRING\" size=\"256\"/><Column id=\"telInstlPlcChgBfrNm\" type=\"STRING\" size=\"256\"/><Column id=\"telInstlPlcChgAftrNm\" type=\"STRING\" size=\"256\"/><Column id=\"telOpngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"telPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"telInstlPlcNewCncltnNm\" type=\"STRING\" size=\"256\"/><Column id=\"telPicCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"telAddedFwkCd\" type=\"STRING\" size=\"256\"/><Column id=\"telRsnCn\" type=\"STRING\" size=\"256\"/><Column id=\"lanOpngHpeYmd\" type=\"STRING\" size=\"256\"/><Column id=\"lanInstlPlcNewCncltnNm\" type=\"STRING\" size=\"256\"/><Column id=\"lanInstlPlcChgAftrNm\" type=\"STRING\" size=\"256\"/><Column id=\"lanInstlPlcChgBfrNm\" type=\"STRING\" size=\"256\"/><Column id=\"lanQty\" type=\"STRING\" size=\"256\"/><Column id=\"lanRsnCn\" type=\"STRING\" size=\"256\"/><Column id=\"lanActlUserFlnmNm\" type=\"STRING\" size=\"256\"/><Column id=\"lanActlUserOgdpNm\" type=\"STRING\" size=\"256\"/><Column id=\"lanAplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"lanUsgCd\" type=\"STRING\" size=\"256\"/><Column id=\"lanPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"lanPicCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"cableSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"cableAplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"cableAplyOfbcQty\" type=\"STRING\" size=\"256\"/><Column id=\"cableAplyCplnQty\" type=\"STRING\" size=\"256\"/><Column id=\"cableAplyCdtQty\" type=\"STRING\" size=\"256\"/><Column id=\"cableAplyMuxQty\" type=\"STRING\" size=\"256\"/><Column id=\"cableDatSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"cableDatSpdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cableTelSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"cableTelSpdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cableTelOwsysCd\" type=\"STRING\" size=\"256\"/><Column id=\"cableInstlPlcUpChgBfrNm\" type=\"STRING\" size=\"256\"/><Column id=\"cableInstlPlcUpChgAftrNm\" type=\"STRING\" size=\"256\"/><Column id=\"cableInstlPlcLrkChgBfrNm\" type=\"STRING\" size=\"256\"/><Column id=\"cableInstlPlcLrkChgAftrNm\" type=\"STRING\" size=\"256\"/><Column id=\"cableOpngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"cablePicNm\" type=\"STRING\" size=\"256\"/><Column id=\"cableUpPicCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"cableLrkPicCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"cableRsnCn\" type=\"STRING\" size=\"256\"/><Column id=\"cbltvKndCd\" type=\"STRING\" size=\"256\"/><Column id=\"cbltvAplyQty\" type=\"STRING\" size=\"256\"/><Column id=\"cbltvAplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"cbltvInstlPlcNewCncltnNm\" type=\"STRING\" size=\"256\"/><Column id=\"cbltvInstlPlcChgBfrNm\" type=\"STRING\" size=\"256\"/><Column id=\"cbltvInstlPlcChgAftrNm\" type=\"STRING\" size=\"256\"/><Column id=\"cbltvOpngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"cbltvPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"cbltvPicCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"cbltvRsnCn\" type=\"STRING\" size=\"256\"/><Column id=\"lanUsePrdCd\" type=\"STRING\" size=\"256\"/><Column id=\"cableDatOwsysCd\" type=\"STRING\" size=\"256\"/><Column id=\"operSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"upPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"datSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"spdVl\" type=\"STRING\" size=\"256\"/><Column id=\"owsysCd\" type=\"STRING\" size=\"256\"/><Column id=\"tlcrtCnt\" type=\"STRING\" size=\"256\"/><Column id=\"upTlcrtTrmiDvcNm\" type=\"STRING\" size=\"256\"/><Column id=\"upInstlPlcNm\" type=\"STRING\" size=\"256\"/><Column id=\"hpeYmd\" type=\"STRING\" size=\"256\"/><Column id=\"lrkInstlPlcNm\" type=\"STRING\" size=\"256\"/><Column id=\"lrkCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"upInstlPlcChgAftrNm\" type=\"STRING\" size=\"256\"/><Column id=\"lrkInstlPlcChgAftrNm\" type=\"STRING\" size=\"256\"/><Column id=\"upTlcrtTrmiDvcQty\" type=\"STRING\" size=\"256\"/><Column id=\"lrkTlcrtTrmiDvcQtyOrg\" type=\"STRING\" size=\"256\"/><Column id=\"tlcrtCntOrg\" type=\"STRING\" size=\"256\"/><Column id=\"datTlcrtSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"datTlcrtSpdVl\" type=\"STRING\" size=\"256\"/><Column id=\"datTlcrtOwsysCd\" type=\"STRING\" size=\"256\"/><Column id=\"datTlcrtCnt\" type=\"STRING\" size=\"256\"/><Column id=\"telEmgcblTlcrtSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"telEmgcblTlcrtEmgcblCd\" type=\"STRING\" size=\"256\"/><Column id=\"telEmgcblTlcrtOwsysCd\" type=\"STRING\" size=\"256\"/><Column id=\"telEmgcblTlcrtCnt\" type=\"STRING\" size=\"256\"/><Column id=\"brdcstTlcrtRdoBrdcstCd\" type=\"STRING\" size=\"256\"/><Column id=\"brdcstTlcrtTvBrdcstCd\" type=\"STRING\" size=\"256\"/><Column id=\"brdcstTlcrtCnt\" type=\"STRING\" size=\"256\"/><Column id=\"instlPlcUpChgAftrNm\" type=\"STRING\" size=\"256\"/><Column id=\"instlPlcUpChgBfrNm\" type=\"STRING\" size=\"256\"/><Column id=\"instlPlcLrkChgAftrNm\" type=\"STRING\" size=\"256\"/><Column id=\"instlPlcLrkChgBfrNm\" type=\"STRING\" size=\"256\"/><Column id=\"upPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"upCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"lrkPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"lrkTlcrtTrmiDvcNm\" type=\"STRING\" size=\"256\"/><Column id=\"lrkTlcrtTrmiDvcQty\" type=\"STRING\" size=\"256\"/><Column id=\"useHpeYmd\" type=\"STRING\" size=\"256\"/><Column id=\"upTlcrtTrmiDvcQtyOrg\" type=\"STRING\" size=\"256\"/><Column id=\"datTlcrtCntOrg\" type=\"STRING\" size=\"256\"/><Column id=\"telEmgcblTlcrtCntOrg\" type=\"STRING\" size=\"256\"/><Column id=\"brdcstTlcrtCntOrg\" type=\"STRING\" size=\"256\"/><Column id=\"trsSlfTrmnlQty\" type=\"STRING\" size=\"256\"/><Column id=\"trsSlfTrmnlUseHpeYmd\" type=\"STRING\" size=\"256\"/><Column id=\"trsPbcprtTrmnlQty\" type=\"STRING\" size=\"256\"/><Column id=\"trsPbcprtTrmnlUseHpeYmd\" type=\"STRING\" size=\"256\"/><Column id=\"posplyMdleQty\" type=\"STRING\" size=\"256\"/><Column id=\"posplyMdleUseHpeYmd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsQty\" type=\"STRING\" size=\"256\"/><Column id=\"prcsUseHpeYmd\" type=\"STRING\" size=\"256\"/><Column id=\"upLinkQty\" type=\"STRING\" size=\"256\"/><Column id=\"upLinkUseHpeYmd\" type=\"STRING\" size=\"256\"/><Column id=\"downLinkQty\" type=\"STRING\" size=\"256\"/><Column id=\"downLinkUseHpeYmd\" type=\"STRING\" size=\"256\"/><Column id=\"trsSlfTrmnlQtyOrg\" type=\"STRING\" size=\"256\"/><Column id=\"trsPbcprtTrmnlQtyOrg\" type=\"STRING\" size=\"256\"/><Column id=\"posplyMdleQtyOrg\" type=\"STRING\" size=\"256\"/><Column id=\"prcsQtyOrg\" type=\"STRING\" size=\"256\"/><Column id=\"upLinkQtyOrg\" type=\"STRING\" size=\"256\"/><Column id=\"downLinkQtyOrg\" type=\"STRING\" size=\"256\"/><Column id=\"jobApvsrId\" type=\"STRING\" size=\"256\"/><Column id=\"rprsOprtrNm\" type=\"STRING\" size=\"256\"/><Column id=\"rprsOprtrInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"rprsOprtrCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"cmproJobNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobBssCn\" type=\"STRING\" size=\"256\"/><Column id=\"jobSmryCn\" type=\"STRING\" size=\"256\"/><Column id=\"jobBgngDt\" type=\"STRING\" size=\"256\"/><Column id=\"jobEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"nghtJobYn\" type=\"STRING\" size=\"256\"/><Column id=\"jobApvsrEtrntYn\" type=\"STRING\" size=\"256\"/><Column id=\"jobPrpsNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobPrpsEtcCn\" type=\"STRING\" size=\"256\"/><Column id=\"jobTnope\" type=\"STRING\" size=\"256\"/><Column id=\"trgtSysInflncExnCd\" type=\"STRING\" size=\"256\"/><Column id=\"trgtSysInflncCn\" type=\"STRING\" size=\"256\"/><Column id=\"otherSysInflncExnCd\" type=\"STRING\" size=\"256\"/><Column id=\"otherSysInflncCn\" type=\"STRING\" size=\"256\"/><Column id=\"otherDeptJobAvtsmtIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"crynItemCn\" type=\"STRING\" size=\"256\"/><Column id=\"shpgotItemCn\" type=\"STRING\" size=\"256\"/><Column id=\"prvcTdptyPvsnAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"infoPrtcWtohPrvcWtcsPath\" type=\"STRING\" size=\"256\"/><Column id=\"edpEqpmntCrynShpgotAplcfmPath\" type=\"STRING\" size=\"256\"/><Column id=\"spfaWritgPath\" type=\"STRING\" size=\"256\"/><Column id=\"dtlJobStmtPath\" type=\"STRING\" size=\"256\"/><Column id=\"sysInstlWtplPath\" type=\"STRING\" size=\"256\"/><Column id=\"jobWtntPath\" type=\"STRING\" size=\"256\"/><Column id=\"cnvyMttrCn\" type=\"STRING\" size=\"256\"/><Column id=\"rvwRsltCn\" type=\"STRING\" size=\"256\"/><Column id=\"mngrRvwRsltCn\" type=\"STRING\" size=\"256\"/><Column id=\"trgtSysCn\" type=\"STRING\" size=\"256\"/><Column id=\"dageJobYn\" type=\"STRING\" size=\"256\"/><Column id=\"dladtYn\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoNm\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"cnstrCoNm\" type=\"STRING\" size=\"256\"/><Column id=\"cnstrPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"cnstrCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"rgnSeNm\" type=\"STRING\" size=\"256\"/><Column id=\"bldgSeNm\" type=\"STRING\" size=\"256\"/><Column id=\"comurmPstnCn\" type=\"STRING\" size=\"256\"/><Column id=\"trgtSysEqpmntNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"jobEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"jobBgngHr\" type=\"STRING\" size=\"256\"/><Column id=\"jobEndHr\" type=\"STRING\" size=\"256\"/><Column id=\"incmgJobNm\" type=\"STRING\" size=\"256\"/><Column id=\"incmgJobCn\" type=\"STRING\" size=\"256\"/><Column id=\"wdmchnUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"exsFcltyFinmtDslovRasblCd\" type=\"STRING\" size=\"256\"/><Column id=\"flmatyTicBdsmlOcrnYn\" type=\"STRING\" size=\"256\"/><Column id=\"noiseVbrnOcrnYn\" type=\"STRING\" size=\"256\"/><Column id=\"vstPrdocNeedYn\" type=\"STRING\" size=\"256\"/><Column id=\"posplyJobYn\" type=\"STRING\" size=\"256\"/><Column id=\"arptPbcprtPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"prvcClctAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"vstrLstFilePath\" type=\"STRING\" size=\"256\"/><Column id=\"wtohPath\" type=\"STRING\" size=\"256\"/><Column id=\"putMtrlToolCrynListFilePath\" type=\"STRING\" size=\"256\"/><Column id=\"elctyRltnNtnTechCrtfctDpctPath\" type=\"STRING\" size=\"256\"/><Column id=\"etcAtflPath\" type=\"STRING\" size=\"256\"/><Column id=\"splmntDmndRsnCn\" type=\"STRING\" size=\"256\"/><Column id=\"bilgYn\" type=\"STRING\" size=\"256\"/><Column id=\"etrntDeptDcsnCn\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoRvwOpnnCn\" type=\"STRING\" size=\"256\"/><Column id=\"aprvYn\" type=\"STRING\" size=\"256\"/><Column id=\"pbcprtCurbizRvwOpnnCn\" type=\"STRING\" size=\"256\"/><Column id=\"ipTelActypCn\" type=\"STRING\" size=\"256\"/><Column id=\"ipTelActypChgYn\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoPbcprtEmpYn\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoSmYn\" type=\"STRING\" size=\"256\"/><Column id=\"cnstrSmYn\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoPrvcClctUtztnWtcsPath\" type=\"STRING\" size=\"256\"/><Column id=\"cnstrPrvcClctUtztnWtcsPath\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoPbcprtEmpNm\" type=\"STRING\" size=\"256\"/><Column id=\"gnrlTelAplyCnt\" type=\"STRING\" size=\"256\"/><Column id=\"ldcallBfhdChcCd\" type=\"STRING\" size=\"256\"/><Column id=\"rmrkCn\" type=\"STRING\" size=\"256\"/><Column id=\"gnrlTelAplyCntOrg\" type=\"STRING\" size=\"256\"/><Column id=\"gnrlTelTlcrtCnt\" type=\"STRING\" size=\"256\"/><Column id=\"gnrlTelTlcrtCntOrg\" type=\"STRING\" size=\"256\"/><Column id=\"incmclCallSwtcSrvcYn\" type=\"STRING\" size=\"256\"/><Column id=\"callContnSrvcYn\" type=\"STRING\" size=\"256\"/><Column id=\"telnoChgSrvcYn\" type=\"STRING\" size=\"256\"/><Column id=\"callPrmGrdSrvcYn\" type=\"STRING\" size=\"256\"/><Column id=\"dirconTelSrvcYn\" type=\"STRING\" size=\"256\"/><Column id=\"sortnDilSrvcYn\" type=\"STRING\" size=\"256\"/><Column id=\"absnGdSrvcYn\" type=\"STRING\" size=\"256\"/><Column id=\"thrpsCallSrvcYn\" type=\"STRING\" size=\"256\"/><Column id=\"mtgCallSrvcYn\" type=\"STRING\" size=\"256\"/><Column id=\"callWtngSrvcYn\" type=\"STRING\" size=\"256\"/><Column id=\"dsgnHrNtfctnSrvcYn\" type=\"STRING\" size=\"256\"/><Column id=\"dsptchNoSrvcYn\" type=\"STRING\" size=\"256\"/><Column id=\"rprsTelRprsNoSrvcYn\" type=\"STRING\" size=\"256\"/><Column id=\"rprsTelSbditnNoSrvcYn\" type=\"STRING\" size=\"256\"/><Column id=\"extCallGroupSrvcYn\" type=\"STRING\" size=\"256\"/><Column id=\"incmclCallSwtcSrvcNo\" type=\"STRING\" size=\"256\"/><Column id=\"callContnSrvcNo\" type=\"STRING\" size=\"256\"/><Column id=\"telnoChgSrvcNo\" type=\"STRING\" size=\"256\"/><Column id=\"callPrmGrdSrvcNo\" type=\"STRING\" size=\"256\"/><Column id=\"dirconTelSrvcNo\" type=\"STRING\" size=\"256\"/><Column id=\"sortnDilSrvcNo\" type=\"STRING\" size=\"256\"/><Column id=\"absnGdSrvcNo\" type=\"STRING\" size=\"256\"/><Column id=\"thrpsCallSrvcNo\" type=\"STRING\" size=\"256\"/><Column id=\"mtgCallSrvcNo\" type=\"STRING\" size=\"256\"/><Column id=\"callWtngSrvcNo\" type=\"STRING\" size=\"256\"/><Column id=\"dsgnHrNtfctnSrvcNo\" type=\"STRING\" size=\"256\"/><Column id=\"dsptchNoSrvcNo\" type=\"STRING\" size=\"256\"/><Column id=\"rprsTelRprsNoSrvcNo\" type=\"STRING\" size=\"256\"/><Column id=\"rprsTelSbditnNoSrvcNo\" type=\"STRING\" size=\"256\"/><Column id=\"extCallGroupSrvcNo\" type=\"STRING\" size=\"256\"/><Column id=\"arsAutoRspnsSrvcYn\" type=\"STRING\" size=\"256\"/><Column id=\"arsAutoRspnsSrvcRprsNo\" type=\"STRING\" size=\"256\"/><Column id=\"arsAutoRspnsSrvcSbditnNo\" type=\"STRING\" size=\"256\"/><Column id=\"gnrlTelAplyCnt\" type=\"STRING\" size=\"256\"/><Column id=\"priAplyCnt\" type=\"STRING\" size=\"256\"/><Column id=\"chgHpeYmd\" type=\"STRING\" size=\"256\"/><Column id=\"gnrlTelAplyCntOrg\" type=\"STRING\" size=\"256\"/><Column id=\"priAplyCntOrg\" type=\"STRING\" size=\"256\"/><Column id=\"cnvynCustNm\" type=\"STRING\" size=\"256\"/><Column id=\"cnvynRprsvNm\" type=\"STRING\" size=\"256\"/><Column id=\"cnvynBrnoBrdt\" type=\"STRING\" size=\"256\"/><Column id=\"cnvynClmAddr\" type=\"STRING\" size=\"256\"/><Column id=\"cnvynClmZip\" type=\"STRING\" size=\"256\"/><Column id=\"cnvynClmDtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"cnvynAplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"cnvynCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"tkovCustNm\" type=\"STRING\" size=\"256\"/><Column id=\"tkovRprsvNm\" type=\"STRING\" size=\"256\"/><Column id=\"tkovBrnoBrdt\" type=\"STRING\" size=\"256\"/><Column id=\"tkovClmAddr\" type=\"STRING\" size=\"256\"/><Column id=\"tkovClmZip\" type=\"STRING\" size=\"256\"/><Column id=\"tkovClmDtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"tkovAplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"tkovCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"cplnCableUseHpeYmd\" type=\"STRING\" size=\"256\"/><Column id=\"cplnCableBgngPstnChgBfrNm\" type=\"STRING\" size=\"256\"/><Column id=\"cplnCableEndPstnChgBfrNm\" type=\"STRING\" size=\"256\"/><Column id=\"cplnCableTlcrtAplyCnt\" type=\"STRING\" size=\"256\"/><Column id=\"cplnCableRmrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cplnCableUtztnPrpsCn\" type=\"STRING\" size=\"256\"/><Column id=\"ofbcUseHpeYmd\" type=\"STRING\" size=\"256\"/><Column id=\"ofbcBgngPstnChgBfrNm\" type=\"STRING\" size=\"256\"/><Column id=\"ofbcEndPstnChgBfrNm\" type=\"STRING\" size=\"256\"/><Column id=\"ofbcTlcrtAplyCnt\" type=\"STRING\" size=\"256\"/><Column id=\"ofbcRmrkCn\" type=\"STRING\" size=\"256\"/><Column id=\"ofbcUtztnPrpsCn\" type=\"STRING\" size=\"256\"/><Column id=\"cplnCableBgngPstnChgAftrNm\" type=\"STRING\" size=\"256\"/><Column id=\"cplnCableEndPstnChgAftrNm\" type=\"STRING\" size=\"256\"/><Column id=\"ofbcBgngPstnChgAftrNm\" type=\"STRING\" size=\"256\"/><Column id=\"ofbcEndPstnChgAftrNm\" type=\"STRING\" size=\"256\"/><Column id=\"cplnCableTlcrtAplyCntOrg\" type=\"STRING\" size=\"256\"/><Column id=\"ofbcTlcrtAplyCntOrg\" type=\"STRING\" size=\"256\"/><Column id=\"bldgSeCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBldgSeList", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPstnSeList", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTspLocCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrvcAplySeList", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGnrlTelSrvcAplyInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"mngNo\" type=\"STRING\" size=\"256\"/><Column id=\"hpeTelno\" type=\"STRING\" size=\"256\"/><Column id=\"cfmtnTelno\" type=\"STRING\" size=\"256\"/><Column id=\"callPrmGrd\" type=\"STRING\" size=\"256\"/><Column id=\"hpeYmd\" type=\"STRING\" size=\"256\"/><Column id=\"instlPlcNm\" type=\"STRING\" size=\"256\"/><Column id=\"usgNm\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCallPrmGrdList", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCmmTelAddedSrvcAplyInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/><Column id=\"srvcAplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"dmndDt\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"ownrId\" type=\"STRING\" size=\"256\"/><Column id=\"ownrInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"ownrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"mdfcnDt\" type=\"STRING\" size=\"256\"/><Column id=\"mdfrId\" type=\"STRING\" size=\"256\"/><Column id=\"endCd\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"clmCustCd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"pstnInfoRnb\" type=\"STRING\" size=\"256\"/><Column id=\"clrId\" type=\"STRING\" size=\"256\"/><Column id=\"rcptDt\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclNm1\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnExmnCn1\" type=\"STRING\" size=\"256\"/><Column id=\"dptyRegYn\" type=\"STRING\" size=\"256\"/><Column id=\"acrdCmptnDt\" type=\"STRING\" size=\"256\"/><Column id=\"cmptnHpeDt\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnRspnsYn\" type=\"STRING\" size=\"256\"/><Column id=\"custTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"unqNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtrNm\" type=\"STRING\" size=\"256\"/><Column id=\"brdt\" type=\"STRING\" size=\"256\"/><Column id=\"rprsvNm\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"telno\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"bfhdJobCmptnYn\" type=\"STRING\" size=\"256\"/><Column id=\"newCustYn\" type=\"STRING\" size=\"256\"/><Column id=\"opngCnfdocPath\" type=\"STRING\" size=\"256\"/><Column id=\"custInfoCrtYn\" type=\"STRING\" size=\"256\"/><Column id=\"usfeeAmt\" type=\"STRING\" size=\"256\"/><Column id=\"upbiAmt\" type=\"STRING\" size=\"256\"/><Column id=\"upbiYn\" type=\"STRING\" size=\"256\"/><Column id=\"cncltnCmptnYn\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnRspnsDt\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptAplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptCtrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptPstnInfoCn\" type=\"STRING\" size=\"256\"/><Column id=\"focYn\" type=\"STRING\" size=\"256\"/><Column id=\"asaSysMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtHwrtInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntHwrtInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"clmAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmDtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmZip\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtChcYn\" type=\"STRING\" size=\"256\"/><Column id=\"prvcClctEsntlAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"prvcClctChcAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"chcInfoClctAgreRfsBnftsLmtAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"pstnSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"rmrkCn\" type=\"STRING\" size=\"256\"/><Column id=\"payPicSmYn\" type=\"STRING\" size=\"256\"/><Column id=\"crno\" type=\"STRING\" size=\"256\"/><Column id=\"tpbiz\" type=\"STRING\" size=\"256\"/><Column id=\"bzstat\" type=\"STRING\" size=\"256\"/><Column id=\"payPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"payPicTelno\" type=\"STRING\" size=\"256\"/><Column id=\"clmMtdCd\" type=\"STRING\" size=\"256\"/><Column id=\"acuntEml\" type=\"STRING\" size=\"256\"/><Column id=\"txivEml\" type=\"STRING\" size=\"256\"/><Column id=\"bzmnRegAddr\" type=\"STRING\" size=\"256\"/><Column id=\"bzmnRegDtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"bzmnRegZip\" type=\"STRING\" size=\"256\"/><Column id=\"builcPath\" type=\"STRING\" size=\"256\"/><Column id=\"itgrnClmYn\" type=\"STRING\" size=\"256\"/><Column id=\"custNo\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclNm2\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclNm3\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnExmnCn2\" type=\"STRING\" size=\"256\"/><Column id=\"payPicMblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnExmnCn3\" type=\"STRING\" size=\"256\"/><Column id=\"usfeeAmtOrg\" type=\"STRING\" size=\"256\"/><Column id=\"upbiAmtOrg\" type=\"STRING\" size=\"256\"/><Column id=\"epidn\" type=\"STRING\" size=\"256\"/><Column id=\"flnm\" type=\"STRING\" size=\"256\"/><Column id=\"telno\" type=\"STRING\" size=\"256\"/><Column id=\"rltnBssCd\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"telKndCd\" type=\"STRING\" size=\"256\"/><Column id=\"telAplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"telGrdCd\" type=\"STRING\" size=\"256\"/><Column id=\"telAplyQty\" type=\"STRING\" size=\"256\"/><Column id=\"telAplyTelno\" type=\"STRING\" size=\"256\"/><Column id=\"telActlUserOgdpNm\" type=\"STRING\" size=\"256\"/><Column id=\"telActlUserNm\" type=\"STRING\" size=\"256\"/><Column id=\"telShtemLgtrmYn\" type=\"STRING\" size=\"256\"/><Column id=\"telInstlPlcChgBfrNm\" type=\"STRING\" size=\"256\"/><Column id=\"telInstlPlcChgAftrNm\" type=\"STRING\" size=\"256\"/><Column id=\"telOpngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"telPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"telInstlPlcNewCncltnNm\" type=\"STRING\" size=\"256\"/><Column id=\"telPicCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"telAddedFwkCd\" type=\"STRING\" size=\"256\"/><Column id=\"telRsnCn\" type=\"STRING\" size=\"256\"/><Column id=\"lanOpngHpeYmd\" type=\"STRING\" size=\"256\"/><Column id=\"lanInstlPlcNewCncltnNm\" type=\"STRING\" size=\"256\"/><Column id=\"lanInstlPlcChgAftrNm\" type=\"STRING\" size=\"256\"/><Column id=\"lanInstlPlcChgBfrNm\" type=\"STRING\" size=\"256\"/><Column id=\"lanQty\" type=\"STRING\" size=\"256\"/><Column id=\"lanRsnCn\" type=\"STRING\" size=\"256\"/><Column id=\"lanActlUserFlnmNm\" type=\"STRING\" size=\"256\"/><Column id=\"lanActlUserOgdpNm\" type=\"STRING\" size=\"256\"/><Column id=\"lanAplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"lanUsgCd\" type=\"STRING\" size=\"256\"/><Column id=\"lanPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"lanPicCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"cableSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"cableAplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"cableAplyOfbcQty\" type=\"STRING\" size=\"256\"/><Column id=\"cableAplyCplnQty\" type=\"STRING\" size=\"256\"/><Column id=\"cableAplyCdtQty\" type=\"STRING\" size=\"256\"/><Column id=\"cableAplyMuxQty\" type=\"STRING\" size=\"256\"/><Column id=\"cableDatSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"cableDatSpdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cableTelSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"cableTelSpdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cableTelOwsysCd\" type=\"STRING\" size=\"256\"/><Column id=\"cableInstlPlcUpChgBfrNm\" type=\"STRING\" size=\"256\"/><Column id=\"cableInstlPlcUpChgAftrNm\" type=\"STRING\" size=\"256\"/><Column id=\"cableInstlPlcLrkChgBfrNm\" type=\"STRING\" size=\"256\"/><Column id=\"cableInstlPlcLrkChgAftrNm\" type=\"STRING\" size=\"256\"/><Column id=\"cableOpngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"cablePicNm\" type=\"STRING\" size=\"256\"/><Column id=\"cableUpPicCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"cableLrkPicCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"cableRsnCn\" type=\"STRING\" size=\"256\"/><Column id=\"cbltvKndCd\" type=\"STRING\" size=\"256\"/><Column id=\"cbltvAplyQty\" type=\"STRING\" size=\"256\"/><Column id=\"cbltvAplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"cbltvInstlPlcNewCncltnNm\" type=\"STRING\" size=\"256\"/><Column id=\"cbltvInstlPlcChgBfrNm\" type=\"STRING\" size=\"256\"/><Column id=\"cbltvInstlPlcChgAftrNm\" type=\"STRING\" size=\"256\"/><Column id=\"cbltvOpngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"cbltvPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"cbltvPicCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"cbltvRsnCn\" type=\"STRING\" size=\"256\"/><Column id=\"lanUsePrdCd\" type=\"STRING\" size=\"256\"/><Column id=\"cableDatOwsysCd\" type=\"STRING\" size=\"256\"/><Column id=\"operSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"upPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"datSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"spdVl\" type=\"STRING\" size=\"256\"/><Column id=\"owsysCd\" type=\"STRING\" size=\"256\"/><Column id=\"tlcrtCnt\" type=\"STRING\" size=\"256\"/><Column id=\"upTlcrtTrmiDvcNm\" type=\"STRING\" size=\"256\"/><Column id=\"upInstlPlcNm\" type=\"STRING\" size=\"256\"/><Column id=\"hpeYmd\" type=\"STRING\" size=\"256\"/><Column id=\"lrkInstlPlcNm\" type=\"STRING\" size=\"256\"/><Column id=\"lrkCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"upInstlPlcChgAftrNm\" type=\"STRING\" size=\"256\"/><Column id=\"lrkInstlPlcChgAftrNm\" type=\"STRING\" size=\"256\"/><Column id=\"upTlcrtTrmiDvcQty\" type=\"STRING\" size=\"256\"/><Column id=\"lrkTlcrtTrmiDvcQtyOrg\" type=\"STRING\" size=\"256\"/><Column id=\"tlcrtCntOrg\" type=\"STRING\" size=\"256\"/><Column id=\"datTlcrtSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"datTlcrtSpdVl\" type=\"STRING\" size=\"256\"/><Column id=\"datTlcrtOwsysCd\" type=\"STRING\" size=\"256\"/><Column id=\"datTlcrtCnt\" type=\"STRING\" size=\"256\"/><Column id=\"telEmgcblTlcrtSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"telEmgcblTlcrtEmgcblCd\" type=\"STRING\" size=\"256\"/><Column id=\"telEmgcblTlcrtOwsysCd\" type=\"STRING\" size=\"256\"/><Column id=\"telEmgcblTlcrtCnt\" type=\"STRING\" size=\"256\"/><Column id=\"brdcstTlcrtRdoBrdcstCd\" type=\"STRING\" size=\"256\"/><Column id=\"brdcstTlcrtTvBrdcstCd\" type=\"STRING\" size=\"256\"/><Column id=\"brdcstTlcrtCnt\" type=\"STRING\" size=\"256\"/><Column id=\"instlPlcUpChgAftrNm\" type=\"STRING\" size=\"256\"/><Column id=\"instlPlcUpChgBfrNm\" type=\"STRING\" size=\"256\"/><Column id=\"instlPlcLrkChgAftrNm\" type=\"STRING\" size=\"256\"/><Column id=\"instlPlcLrkChgBfrNm\" type=\"STRING\" size=\"256\"/><Column id=\"upPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"upCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"lrkPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"lrkTlcrtTrmiDvcNm\" type=\"STRING\" size=\"256\"/><Column id=\"lrkTlcrtTrmiDvcQty\" type=\"STRING\" size=\"256\"/><Column id=\"useHpeYmd\" type=\"STRING\" size=\"256\"/><Column id=\"upTlcrtTrmiDvcQtyOrg\" type=\"STRING\" size=\"256\"/><Column id=\"datTlcrtCntOrg\" type=\"STRING\" size=\"256\"/><Column id=\"telEmgcblTlcrtCntOrg\" type=\"STRING\" size=\"256\"/><Column id=\"brdcstTlcrtCntOrg\" type=\"STRING\" size=\"256\"/><Column id=\"trsSlfTrmnlQty\" type=\"STRING\" size=\"256\"/><Column id=\"trsSlfTrmnlUseHpeYmd\" type=\"STRING\" size=\"256\"/><Column id=\"trsPbcprtTrmnlQty\" type=\"STRING\" size=\"256\"/><Column id=\"trsPbcprtTrmnlUseHpeYmd\" type=\"STRING\" size=\"256\"/><Column id=\"posplyMdleQty\" type=\"STRING\" size=\"256\"/><Column id=\"posplyMdleUseHpeYmd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsQty\" type=\"STRING\" size=\"256\"/><Column id=\"prcsUseHpeYmd\" type=\"STRING\" size=\"256\"/><Column id=\"upLinkQty\" type=\"STRING\" size=\"256\"/><Column id=\"upLinkUseHpeYmd\" type=\"STRING\" size=\"256\"/><Column id=\"downLinkQty\" type=\"STRING\" size=\"256\"/><Column id=\"downLinkUseHpeYmd\" type=\"STRING\" size=\"256\"/><Column id=\"trsSlfTrmnlQtyOrg\" type=\"STRING\" size=\"256\"/><Column id=\"trsPbcprtTrmnlQtyOrg\" type=\"STRING\" size=\"256\"/><Column id=\"posplyMdleQtyOrg\" type=\"STRING\" size=\"256\"/><Column id=\"prcsQtyOrg\" type=\"STRING\" size=\"256\"/><Column id=\"upLinkQtyOrg\" type=\"STRING\" size=\"256\"/><Column id=\"downLinkQtyOrg\" type=\"STRING\" size=\"256\"/><Column id=\"jobApvsrId\" type=\"STRING\" size=\"256\"/><Column id=\"rprsOprtrNm\" type=\"STRING\" size=\"256\"/><Column id=\"rprsOprtrInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"rprsOprtrCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"cmproJobNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobBssCn\" type=\"STRING\" size=\"256\"/><Column id=\"jobSmryCn\" type=\"STRING\" size=\"256\"/><Column id=\"jobBgngDt\" type=\"STRING\" size=\"256\"/><Column id=\"jobEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"nghtJobYn\" type=\"STRING\" size=\"256\"/><Column id=\"jobApvsrEtrntYn\" type=\"STRING\" size=\"256\"/><Column id=\"jobPrpsNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobPrpsEtcCn\" type=\"STRING\" size=\"256\"/><Column id=\"jobTnope\" type=\"STRING\" size=\"256\"/><Column id=\"trgtSysInflncExnCd\" type=\"STRING\" size=\"256\"/><Column id=\"trgtSysInflncCn\" type=\"STRING\" size=\"256\"/><Column id=\"otherSysInflncExnCd\" type=\"STRING\" size=\"256\"/><Column id=\"otherSysInflncCn\" type=\"STRING\" size=\"256\"/><Column id=\"otherDeptJobAvtsmtIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"crynItemCn\" type=\"STRING\" size=\"256\"/><Column id=\"shpgotItemCn\" type=\"STRING\" size=\"256\"/><Column id=\"prvcTdptyPvsnAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"infoPrtcWtohPrvcWtcsPath\" type=\"STRING\" size=\"256\"/><Column id=\"edpEqpmntCrynShpgotAplcfmPath\" type=\"STRING\" size=\"256\"/><Column id=\"spfaWritgPath\" type=\"STRING\" size=\"256\"/><Column id=\"dtlJobStmtPath\" type=\"STRING\" size=\"256\"/><Column id=\"sysInstlWtplPath\" type=\"STRING\" size=\"256\"/><Column id=\"jobWtntPath\" type=\"STRING\" size=\"256\"/><Column id=\"cnvyMttrCn\" type=\"STRING\" size=\"256\"/><Column id=\"rvwRsltCn\" type=\"STRING\" size=\"256\"/><Column id=\"mngrRvwRsltCn\" type=\"STRING\" size=\"256\"/><Column id=\"trgtSysCn\" type=\"STRING\" size=\"256\"/><Column id=\"dageJobYn\" type=\"STRING\" size=\"256\"/><Column id=\"dladtYn\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoNm\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"cnstrCoNm\" type=\"STRING\" size=\"256\"/><Column id=\"cnstrPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"cnstrCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"rgnSeNm\" type=\"STRING\" size=\"256\"/><Column id=\"bldgSeNm\" type=\"STRING\" size=\"256\"/><Column id=\"comurmPstnCn\" type=\"STRING\" size=\"256\"/><Column id=\"trgtSysEqpmntNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"jobEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"jobBgngHr\" type=\"STRING\" size=\"256\"/><Column id=\"jobEndHr\" type=\"STRING\" size=\"256\"/><Column id=\"incmgJobNm\" type=\"STRING\" size=\"256\"/><Column id=\"incmgJobCn\" type=\"STRING\" size=\"256\"/><Column id=\"wdmchnUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"exsFcltyFinmtDslovRasblCd\" type=\"STRING\" size=\"256\"/><Column id=\"flmatyTicBdsmlOcrnYn\" type=\"STRING\" size=\"256\"/><Column id=\"noiseVbrnOcrnYn\" type=\"STRING\" size=\"256\"/><Column id=\"vstPrdocNeedYn\" type=\"STRING\" size=\"256\"/><Column id=\"posplyJobYn\" type=\"STRING\" size=\"256\"/><Column id=\"arptPbcprtPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"prvcClctAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"vstrLstFilePath\" type=\"STRING\" size=\"256\"/><Column id=\"wtohPath\" type=\"STRING\" size=\"256\"/><Column id=\"putMtrlToolCrynListFilePath\" type=\"STRING\" size=\"256\"/><Column id=\"elctyRltnNtnTechCrtfctDpctPath\" type=\"STRING\" size=\"256\"/><Column id=\"etcAtflPath\" type=\"STRING\" size=\"256\"/><Column id=\"splmntDmndRsnCn\" type=\"STRING\" size=\"256\"/><Column id=\"bilgYn\" type=\"STRING\" size=\"256\"/><Column id=\"etrntDeptDcsnCn\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoRvwOpnnCn\" type=\"STRING\" size=\"256\"/><Column id=\"aprvYn\" type=\"STRING\" size=\"256\"/><Column id=\"pbcprtCurbizRvwOpnnCn\" type=\"STRING\" size=\"256\"/><Column id=\"ipTelActypCn\" type=\"STRING\" size=\"256\"/><Column id=\"ipTelActypChgYn\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoPbcprtEmpYn\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoSmYn\" type=\"STRING\" size=\"256\"/><Column id=\"cnstrSmYn\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoPrvcClctUtztnWtcsPath\" type=\"STRING\" size=\"256\"/><Column id=\"cnstrPrvcClctUtztnWtcsPath\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoPbcprtEmpNm\" type=\"STRING\" size=\"256\"/><Column id=\"gnrlTelAplyCnt\" type=\"STRING\" size=\"256\"/><Column id=\"ldcallBfhdChcCd\" type=\"STRING\" size=\"256\"/><Column id=\"rmrkCn\" type=\"STRING\" size=\"256\"/><Column id=\"gnrlTelAplyCntOrg\" type=\"STRING\" size=\"256\"/><Column id=\"gnrlTelTlcrtCnt\" type=\"STRING\" size=\"256\"/><Column id=\"gnrlTelTlcrtCntOrg\" type=\"STRING\" size=\"256\"/><Column id=\"incmclCallSwtcSrvcYn\" type=\"STRING\" size=\"256\"/><Column id=\"callContnSrvcYn\" type=\"STRING\" size=\"256\"/><Column id=\"telnoChgSrvcYn\" type=\"STRING\" size=\"256\"/><Column id=\"callPrmGrdSrvcYn\" type=\"STRING\" size=\"256\"/><Column id=\"dirconTelSrvcYn\" type=\"STRING\" size=\"256\"/><Column id=\"sortnDilSrvcYn\" type=\"STRING\" size=\"256\"/><Column id=\"absnGdSrvcYn\" type=\"STRING\" size=\"256\"/><Column id=\"thrpsCallSrvcYn\" type=\"STRING\" size=\"256\"/><Column id=\"mtgCallSrvcYn\" type=\"STRING\" size=\"256\"/><Column id=\"callWtngSrvcYn\" type=\"STRING\" size=\"256\"/><Column id=\"dsgnHrNtfctnSrvcYn\" type=\"STRING\" size=\"256\"/><Column id=\"dsptchNoSrvcYn\" type=\"STRING\" size=\"256\"/><Column id=\"rprsTelRprsNoSrvcYn\" type=\"STRING\" size=\"256\"/><Column id=\"rprsTelSbditnNoSrvcYn\" type=\"STRING\" size=\"256\"/><Column id=\"extCallGroupSrvcYn\" type=\"STRING\" size=\"256\"/><Column id=\"incmclCallSwtcSrvcNo\" type=\"STRING\" size=\"256\"/><Column id=\"callContnSrvcNo\" type=\"STRING\" size=\"256\"/><Column id=\"telnoChgSrvcNo\" type=\"STRING\" size=\"256\"/><Column id=\"callPrmGrdSrvcNo\" type=\"STRING\" size=\"256\"/><Column id=\"dirconTelSrvcNo\" type=\"STRING\" size=\"256\"/><Column id=\"sortnDilSrvcNo\" type=\"STRING\" size=\"256\"/><Column id=\"absnGdSrvcNo\" type=\"STRING\" size=\"256\"/><Column id=\"thrpsCallSrvcNo\" type=\"STRING\" size=\"256\"/><Column id=\"mtgCallSrvcNo\" type=\"STRING\" size=\"256\"/><Column id=\"callWtngSrvcNo\" type=\"STRING\" size=\"256\"/><Column id=\"dsgnHrNtfctnSrvcNo\" type=\"STRING\" size=\"256\"/><Column id=\"dsptchNoSrvcNo\" type=\"STRING\" size=\"256\"/><Column id=\"rprsTelRprsNoSrvcNo\" type=\"STRING\" size=\"256\"/><Column id=\"rprsTelSbditnNoSrvcNo\" type=\"STRING\" size=\"256\"/><Column id=\"extCallGroupSrvcNo\" type=\"STRING\" size=\"256\"/><Column id=\"arsAutoRspnsSrvcYn\" type=\"STRING\" size=\"256\"/><Column id=\"arsAutoRspnsSrvcRprsNo\" type=\"STRING\" size=\"256\"/><Column id=\"arsAutoRspnsSrvcSbditnNo\" type=\"STRING\" size=\"256\"/><Column id=\"gnrlTelAplyCnt\" type=\"STRING\" size=\"256\"/><Column id=\"priAplyCnt\" type=\"STRING\" size=\"256\"/><Column id=\"chgHpeYmd\" type=\"STRING\" size=\"256\"/><Column id=\"gnrlTelAplyCntOrg\" type=\"STRING\" size=\"256\"/><Column id=\"priAplyCntOrg\" type=\"STRING\" size=\"256\"/><Column id=\"cnvynCustNm\" type=\"STRING\" size=\"256\"/><Column id=\"cnvynRprsvNm\" type=\"STRING\" size=\"256\"/><Column id=\"cnvynBrnoBrdt\" type=\"STRING\" size=\"256\"/><Column id=\"cnvynClmAddr\" type=\"STRING\" size=\"256\"/><Column id=\"cnvynClmZip\" type=\"STRING\" size=\"256\"/><Column id=\"cnvynClmDtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"cnvynAplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"cnvynCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"tkovCustNm\" type=\"STRING\" size=\"256\"/><Column id=\"tkovRprsvNm\" type=\"STRING\" size=\"256\"/><Column id=\"tkovBrnoBrdt\" type=\"STRING\" size=\"256\"/><Column id=\"tkovClmAddr\" type=\"STRING\" size=\"256\"/><Column id=\"tkovClmZip\" type=\"STRING\" size=\"256\"/><Column id=\"tkovClmDtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"tkovAplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"tkovCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"cplnCableUseHpeYmd\" type=\"STRING\" size=\"256\"/><Column id=\"cplnCableBgngPstnChgBfrNm\" type=\"STRING\" size=\"256\"/><Column id=\"cplnCableEndPstnChgBfrNm\" type=\"STRING\" size=\"256\"/><Column id=\"cplnCableTlcrtAplyCnt\" type=\"STRING\" size=\"256\"/><Column id=\"cplnCableRmrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cplnCableUtztnPrpsCn\" type=\"STRING\" size=\"256\"/><Column id=\"ofbcUseHpeYmd\" type=\"STRING\" size=\"256\"/><Column id=\"ofbcBgngPstnChgBfrNm\" type=\"STRING\" size=\"256\"/><Column id=\"ofbcEndPstnChgBfrNm\" type=\"STRING\" size=\"256\"/><Column id=\"ofbcTlcrtAplyCnt\" type=\"STRING\" size=\"256\"/><Column id=\"ofbcRmrkCn\" type=\"STRING\" size=\"256\"/><Column id=\"ofbcUtztnPrpsCn\" type=\"STRING\" size=\"256\"/><Column id=\"cplnCableBgngPstnChgAftrNm\" type=\"STRING\" size=\"256\"/><Column id=\"cplnCableEndPstnChgAftrNm\" type=\"STRING\" size=\"256\"/><Column id=\"ofbcBgngPstnChgAftrNm\" type=\"STRING\" size=\"256\"/><Column id=\"ofbcEndPstnChgAftrNm\" type=\"STRING\" size=\"256\"/><Column id=\"cplnCableTlcrtAplyCntOrg\" type=\"STRING\" size=\"256\"/><Column id=\"ofbcTlcrtAplyCntOrg\" type=\"STRING\" size=\"256\"/><Column id=\"bldgSeCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"carRegctfFile_fullName\" type=\"STRING\" size=\"256\"/><Column id=\"carRegctfFile_orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"carRegctfFile_fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"carRegctfFile_colId\" type=\"STRING\" size=\"256\"/><Column id=\"carFrtsdPhotoFile_fullName\" type=\"STRING\" size=\"256\"/><Column id=\"carFrtsdPhotoFile_orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"carFrtsdPhotoFile_fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"carFrtsdPhotoFile_colId\" type=\"STRING\" size=\"256\"/><Column id=\"safeDvcPhotoFile_fullName\" type=\"STRING\" size=\"256\"/><Column id=\"safeDvcPhotoFile_orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"safeDvcPhotoFile_fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"safeDvcPhotoFile_colId\" type=\"STRING\" size=\"256\"/><Column id=\"carFlkPhotoFile_fullName\" type=\"STRING\" size=\"256\"/><Column id=\"carFlkPhotoFile_orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"carFlkPhotoFile_fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"carFlkPhotoFile_colId\" type=\"STRING\" size=\"256\"/><Column id=\"newInspRcdshtFile_fullName\" type=\"STRING\" size=\"256\"/><Column id=\"newInspRcdshtFile_orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"newInspRcdshtFile_fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"newInspRcdshtFile_colId\" type=\"STRING\" size=\"256\"/><Column id=\"lsctFile_fullName\" type=\"STRING\" size=\"256\"/><Column id=\"lsctFile_orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"lsctFile_fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"lsctFile_colId\" type=\"STRING\" size=\"256\"/><Column id=\"elctyHdlEqpmntIdEvdncDcmntFile_fullName\" type=\"STRING\" size=\"256\"/><Column id=\"elctyHdlEqpmntIdEvdncDcmntFile_orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"elctyHdlEqpmntIdEvdncDcmntFile_fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"elctyHdlEqpmntIdEvdncDcmntFile_colId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","60",null,"12500","60",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickFrBg");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_03","0","-3","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("서비스 흐름 및 작업방법 안내(타이틀미정)");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_flexgrow("1");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00_03","461","6","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_03","505","-3","60","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_03\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit00","0","0","100%","46",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staSubTitle02_00_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_03\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divInfoGuide","30","506","100.00%","300",null,null,null,null,"300",null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_text("서비스 흐름 및 작업방법 안내");
            obj.set_cssclass("div_WF_InfoGuide");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_03_00","0","-3","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_text("신청위치 정보");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_flexgrow("1");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00_03_00","461","6","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_03_00","505","-3","60","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("7");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_03_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_03_00_00","0","-3","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("10");
            obj.set_text("신청자 정보");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_flexgrow("1");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00_01","461","6","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_01","505","-3","60","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("12");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit00_00_00","0","0","100%","46",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("13");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staSubTitle02_00_03_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div01","0","729","100%","600",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("14");
            obj.set_text("div01");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_00","0","0","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("신청번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Div("divEdtPop00","10","56","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtAplyNo","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.Div01.form.divEdtPop00.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            this.divForm.form.Div01.form.divEdtPop00.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00","520","0","310","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"divEdtPop00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Pan01_AplyNo","0","97","100%","97",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00","0","0","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("4");
            obj.set_text("신청구분");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtAplySeNm","0","46","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00","20","0","100%","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAplySeNm\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","0","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("7");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_00_00","0","0","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("8");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Div("divEdtPop00_00","10","56","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("9");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtAplcntNm","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.Div01.form.divEdtPop00_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            this.divForm.form.Div01.form.divEdtPop00_00.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00","520","0","310","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"divEdtPop00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_01_00","940","97","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("11");
            obj.set_text("휴대폰 번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtAplcntMblTelno","940","142","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_01_00","940","97","310","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("13");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAplcntMblTelno\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","0","97","100%","97",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("14");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_00_00_01_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00","0","0","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("15");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtCtrtInstNm","0","46","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("16");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00","20","0","100%","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("17");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtCtrtInstNm\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","0","0","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("18");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("sub_tit00_00","0","0","100%","46",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("8");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staSubTitle02_00_03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_03_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_03_00_00_00","0","-3","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("15");
            obj.set_text("고객정보");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_flexgrow("1");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00_03_00_00_00","461","6","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_03_00_00_00","505","-3","60","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("17");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_03_00_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div00","0","392","100%","200",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("9");
            obj.set_text("div00");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_00","10","10","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("위치구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00","30","10","310","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("1");
            obj.set_type("horizontal");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_00_00","876","150","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("위치정보(수기입력)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00","876","150","310","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","46","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("7");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"cboRgn\"/><PanelItem id=\"PanelItem01\" componentid=\"cmbPstnSe\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","46","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("9");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"edt00\"/><PanelItem id=\"PanelItem01\" componentid=\"btn00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn00","664","49","106","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("10");
            obj.set_text("룸번호입력창");
            obj.set_fittocontents("width");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","491","315","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("4");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_00_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt00","704","74","50%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("8");
            obj.set_flexgrow("1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Combo("cboRgn","289","64","50%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("6");
            obj.set_displaynulltext("선택");
            obj.set_innerdataset("dsTspLocCd");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Combo("cmbPstnSe","97","272","50%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("5");
            obj.set_displaynulltext("선택");
            obj.set_innerdataset("dsBldgSeList");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("sub_tit00_00_00_00","0","0","100%","46",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("18");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staSubTitle02_00_03_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_03_00_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div02","0","969","100%","1300",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("19");
            obj.set_text("div02");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_00","0","0","47.06%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("0");
            obj.set_text("고객유형");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00","20","0","480","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("1");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"radCustTypeCd\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","0","0","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("2");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Radio("radCustTypeCd","96","73","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var divForm_form_Div02_form_radCustTypeCd_innerdataset = new nexacro.NormalDataset("divForm_form_Div02_form_radCustTypeCd_innerdataset", obj);
            divForm_form_Div02_form_radCustTypeCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">CMMCUST002</Col><Col id=\"datacolumn\">사업자</Col></Row><Row><Col id=\"codecolumn\">CMMCUST003</Col><Col id=\"datacolumn\">국가기관</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div02_form_radCustTypeCd_innerdataset);
            obj.set_text("사업자");
            obj.set_value("CMMCUST002");
            obj.set_index("0");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00","0","0","96.08%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("4");
            obj.set_text("계약자명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtCustInstNm","0","46","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00","20","0","96.08%","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtCustInstNm\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","97","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("7");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_00","10","10","96.08%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("8");
            obj.set_text("대표자성명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00","30","10","310","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtRprsvNm\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_00_00","876","150","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("10");
            obj.set_text("대표전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00","876","150","310","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("11");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtRprsTelno\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","491","315","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("12");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtRprsvNm","940","142","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("13");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtRprsTelno","940","142","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_00_00","10","10","96.08%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("15");
            obj.set_text("사업자 등록번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtBrno","940","142","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("16");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_00","30","10","310","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("17");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtBrno\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("edt00_01_01_01","876","150","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("18");
            obj.set_text("법인등록번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtCrno","940","142","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_00","876","150","310","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("20");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"edt00_01_01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"edtCrno\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00","491","315","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("21");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_00_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_00_00_00","10","10","96.08%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("22");
            obj.set_text("업종");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtTpbiz","940","142","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("23");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_00_00","30","10","310","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("24");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtTpbiz\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("edt00_01_01_00_1","876","150","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("25");
            obj.set_text("업태");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtBzstat","940","142","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("26");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_00_00","876","150","310","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("27");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"edt00_01_01_00_1\"/><PanelItem id=\"PanelItem02\" componentid=\"edtBzstat\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00_00","491","315","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("28");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_00_00_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","0.00","0","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("29");
            obj.set_text("사업자등록주소/우편번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Div("divEdtPop","780.00","635","150","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("30");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtBuilcZip","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.Div02.form.divEdtPop.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            obj.set_displaynulltext("우편번호 검색");
            this.divForm.form.Div02.form.divEdtPop.addChild(obj.name, obj);

            obj = new Edit("edtBuilcAddr","360","637","305","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("31");
            obj.set_readonly("true");
            obj.set_flexgrow("2");
            obj.set_displaynulltext("주소");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panAddress","200","641","100%","45",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("32");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divEdtPop\"/><PanelItem id=\"PanelItem02\" componentid=\"edtBuilcAddr\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtBuilcAddrDtl","0.00","46","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("33");
            obj.set_displaynulltext("상세주소");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01","20.00","0","100%","156",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("34");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"panAddress\"/><PanelItem id=\"PanelItem01\" componentid=\"edtBuilcAddrDtl\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_03_00","0","60","100.00%","166",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("35");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("36");
            obj.set_text("사업자등록증");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panBtnFile01","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("37");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panTitle01","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("38");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static00_01","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("39");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static01_01","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("40");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static02_01","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("41");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panFileNum01","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("42");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panBtnDel01","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("43");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("44");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum01\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Grid("grdBuilc","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("45");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_nodatatext("파일이 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panFile01","0","42","100.00%","161",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("46");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"grdBuilc\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_03_00_00_00_00","0","-3","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("20");
            obj.set_text("청구정보");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_flexgrow("1");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00_03_00_00_00_00","461","6","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_03_00_00_00_00","505","-3","60","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("22");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_03_00_00_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit00_00_00_00_00","0","0","100%","46",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("23");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staSubTitle02_00_03_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_03_00_00_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div03","0","1827","100%","2000",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("24");
            obj.set_text("div03");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00","0","0","200","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("0");
            obj.set_text("기존 청구정보유지");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00","20","0","95.98%","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("1");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02\"/><PanelItem id=\"PanelItem02\" componentid=\"radItgrnClmYn\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","0","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("61");
            obj.getSetter("text").set("청구정보 찾기");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_type("horizontal");
            obj.set_flexmainaxisalign("spacebetween");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_01\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","97","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("2");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Radio("radItgrnClmYn","96","73","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var divForm_form_Div03_form_radItgrnClmYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div03_form_radItgrnClmYn_innerdataset", obj);
            divForm_form_Div03_form_radItgrnClmYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">합산청구</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">분리청구</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div03_form_radItgrnClmYn_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00","0","0","92.25%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("4");
            obj.set_text("납부담당자 동일여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Radio("rdoPayPicSmYn","96","73","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var divForm_form_Div03_form_rdoPayPicSmYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div03_form_rdoPayPicSmYn_innerdataset", obj);
            divForm_form_Div03_form_rdoPayPicSmYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">신청자정보와 동일</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">신청자와 납부담당자자 동일하지 않음</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div03_form_rdoPayPicSmYn_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00","20","0","95.98%","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoPayPicSmYn\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","0","97","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("7");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_00","10","10","96.08%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("8");
            obj.set_text("납부담당자 성명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edtPayPicNm","940","142","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("9");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00","30","10","310","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtPayPicNm\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_00_00","876","150","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("11");
            obj.set_text("청구고객번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edtCustNo","940","142","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("12");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00","876","150","310","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("13");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtCustNo\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","491","315","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("14");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_00_00","10","10","96.08%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("15");
            obj.set_text("납부담당자 부서");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edtPayPicDeptNm","940","142","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("16");
            obj.set_readonly("false");
            obj.set_visible("false");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_00","30","10","310","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("17");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtPayPicDeptNm\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_00_00_00","876","150","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("18");
            obj.set_text("청구서용 이메일");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edt00_01_01_00_00_00_00_00","940","142","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("19");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_00","876","150","310","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("20");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_01_01_00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00","491","315","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("21");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_00_00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_00_01","10","10","96.08%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("22");
            obj.set_text("납부담당자 전화번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edt00_01_04","940","142","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("23");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_01","30","10","310","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("24");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_01_04\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Panel01_00_00_02","876","150","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("25");
            obj.set_text("전자세금계산서용 이메일");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edt00_01_014","940","142","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("26");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_01","876","150","310","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("27");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_01_014\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01","491","315","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("28");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_00_00_01\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_004","10","10","96.08%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("29");
            obj.set_text("납부담당자 휴대전화번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edtPayPicMblTelno","940","142","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("30");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_01_00","30","10","310","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("31");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_004\"/><PanelItem id=\"PanelItem02\" componentid=\"edtPayPicMblTelno\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_00_00_01_00","876","150","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("32");
            obj.set_text("청구방식");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_01_00","876","150","310","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("33");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_00_00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoClmMtd\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01_00","491","315","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("34");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_00_00_01_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Radio("rdoClmMtd","96","73","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("35");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_fittocontents("height");
            var divForm_form_Div03_form_rdoClmMtd_innerdataset = new nexacro.NormalDataset("divForm_form_Div03_form_rdoClmMtd_innerdataset", obj);
            divForm_form_Div03_form_rdoClmMtd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">이메일</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">지로</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div03_form_rdoClmMtd_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","0.00","0","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("36");
            obj.set_text("청구지주소/우편번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Div("divEdtPop","780.00","635","150","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("37");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edtClmZip","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.Div03.form.divEdtPop.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            obj.set_displaynulltext("우편번호 검색");
            this.divForm.form.Div03.form.divEdtPop.addChild(obj.name, obj);

            obj = new Button("btnPop","edtClmZip:-40","0","40","40",null,null,null,null,null,null,this.divForm.form.Div03.form.divEdtPop.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.divForm.form.Div03.form.divEdtPop.addChild(obj.name, obj);

            obj = new Edit("edtClmAddr","360","637","305","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("38");
            obj.set_readonly("true");
            obj.set_flexgrow("2");
            obj.set_displaynulltext("주소");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panAddress","200","641","100%","45",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("39");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divEdtPop\"/><PanelItem id=\"PanelItem02\" componentid=\"edtClmAddr\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edtClmAddrDtl","0.00","46","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("40");
            obj.set_displaynulltext("상세주소");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01","20.00","0","100%","156",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("41");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"panAddress\"/><PanelItem id=\"PanelItem01\" componentid=\"edtClmAddrDtl\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_03_00","0","60","100.00%","166",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("42");
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

            obj = new Static("staLabel00_03_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("43");
            obj.set_text("개인정보 수집·이용 안내");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","171","111","100%","180",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("44");
            obj.set_readonly("false");
            obj.set_value("1. 개인정보의 수집ㆍ이용 목적\n  입주자 서비스 : 포털 통신 사용/변경/일시이용중단/일시이용중단해제/해지 신청 시 작성건의 접수와 처리\n  별정통신시스템 : 서비스 가입/변경/해지, A/S,요금청구,본인확인,이용요금 상담 및 추심, 이용불만 처리,보증금환급금\n  인터넷청구 시스템 : 공항시설사용료 청구 및 납부처리\n\n2. 수집하려는 개인정보의 항목\n  별정통신시스템 : 필수항목 : 성명, 전화번호, 휴대폰번호\n  입주자서비스포털 인터넷청구시스템 : 필수항목 : 납부담당자 이름,납부담당자 일반전화번호 납부담당자 휴대폰번호,청구지주소\n\n3. 개인정보의 보유 및 이용 기간\n  입주1. 개인정보의 수집ㆍ이용 목적\n  입주자 서비스 : 포털 통신 사용/변경/일시이용중단/일시이용중단해제/해지 신청 시 작성건의 접수와 처리\n  별정통신시스템 : 서비스 가입/변경/해지, A/S,요금청구,본인확인,이용요금 상담 및 추심, 이용불만 처리,보증금환급금\n  인터넷청구 시스템 : 공항시설사용료 청구 및 납부처리\n\n2. 수집하려는 개인정보의 항목\n  별정통신시스템 : 필수항목 : 성명, 전화번호, 휴대폰번호\n  입주자서비스포털 인터넷청구시스템 : 필수항목 : 납부담당자 이름,납부담당자 일반전화번호 납부담당자 휴대폰번호,청구지주소\n\n3. 개인정보의 보유 및 이용 기간\n  입주자서비스포털 : 계약종료 후 3년, 회원탈퇴시 까지\n  별정통신시스템 : 서비스 해지월 기중 6개월까지\n※ 단, 요금 미/과납이나 분쟁 발생 겨우, 해결시점까지 보요\n\n3. 인터넷청구시스템 : 거래 종료 후 부터 5년\n\n4. 동의를 거부할 권리와 거부에 따른 불이익 내용\n  귀하는 개인정보 수집에 거부할 권리가 있으며, 필수항목 수집을 거부할 경우 통신사용/변경/일시이용중단 /일시이용중단해지 승인요청서 작성건의 신청을 할 수 없습니다.");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_04","10.00","98","100%","105",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("45");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"TextArea00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_03_00_00_00","10.00","98","100%","161",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("46");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_03_00_00_00\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel00_00_04\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel09","0","60","100.00%","172",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("47");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_03_00_00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel00_03_00_00_00_00","10","98","200","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("48");
            obj.set_text("개인정보 수집 (필수) 동의여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new CheckBox("chkPrvcEsntlClctAgreYn","200.00","128","150","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("49");
            obj.set_value("false");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01","41","937","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("50");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_03_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"chkPrvcEsntlClctAgreYn\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_01","171","111","100%","180",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("51");
            obj.set_readonly("false");
            obj.set_value("개인정보(선택정보) 사용에 관한 안내\n선택항목에 해당하는 정보를 입력하지 않으셔도 서비스 이용에는 제한이 없습니다.\n수집하는 개인정보의 선택항목 외 모든 내용은 필수항목에서 안내된 내용과 동일합니다.\n○수집하는 개인정보의 선택항목\n입주자서비스포털 인터넷청구시스템 청구서용 이메일주소, 전자세금계산서용 이메일주소(단, 청구방식 이메일 선택시 \"청구서용 이메일주소\" 필수)");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00_00","10.00","98","100%","105",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("52");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"TextArea00_01\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_10","10.00","98","100%","155",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("53");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel10","0","60","100.00%","166",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("54");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_10\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel00_03_00_00_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("55");
            obj.set_text("개인정보 수집(선택) 동의여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Radio("rdoPrvcChcClctAgreYn","200.00","328","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("56");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var divForm_form_Div03_form_rdoPrvcChcClctAgreYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div03_form_rdoPrvcChcClctAgreYn_innerdataset", obj);
            divForm_form_Div03_form_rdoPrvcChcClctAgreYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">동의함</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">동의하지 않음(동의하지 않아도 서비스신청 가능합니다.</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div03_form_rdoPrvcChcClctAgreYn_innerdataset);
            obj.set_text("");
            obj.set_value("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_03_00_00_00_00","20","1086","980","167",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("57");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_03_00_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoPrvcChcClctAgreYn\"/><PanelItem id=\"PanelItem03\" componentid=\"sta00_00_01_00_01\"/><PanelItem id=\"PanelItem04\" componentid=\"sta00_00_01_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel09_00","0","1086","100.00%","178",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("58");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_03_00_00_00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00","20","20","100%","30",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("59");
            obj.set_text("신청자의 개인정보수집 및 이용동의여부(선택항목)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00_01","20","20","100%","30",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("60");
            obj.set_text("선택항목에 해당하는 정보를 입력하지 않으셔도 서비스 이용에는 제한이 없습니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("Button00_01","813","76","98","34",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("62");
            obj.set_text("청구정보 찾기");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_03_00_00_00_00_00","0","-3","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("25");
            obj.set_text("통신신청정보");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_flexgrow("1");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00_03_00_00_00_00_00","461","6","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("26");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_03_00_00_00_00_00","505","-3","60","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("27");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_03_00_00_00_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit00_00_00_00_00_00","0","0","100%","46",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("28");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staSubTitle02_00_03_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_03_00_00_00_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div04","0","3137","100%","9900",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("29");
            obj.set_text("div04");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_00","10","10","96.08%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("0");
            obj.set_text("서비스 신청구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Combo("cmbSrvcAplySeCd","97","272","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsSrvcAplySeList");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00","20","0","100%","146",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"cmbSrvcAplySeCd\"/><PanelItem id=\"PanelItem03\" componentid=\"sta00_00_01_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","27","100%","60",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("40");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"cb00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel02","520","1416","100%","80",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("42");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_009\"/><PanelItem id=\"PanelItem01\" componentid=\"sta00_00_019\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel08","0","46","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("260");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"radio00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","0","0","100.00%","157",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel07","0","176","100%","186",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("259");
            obj.set_type("horizontal");
            obj.set_verticalgap("10");
            obj.set_spacing("10px 0px");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00_00_01_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"sta00_00_01_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static01\"/><PanelItem id=\"PanelItem03\" componentid=\"Static02\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel05","20","796","100%","256",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("257");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj.set_spacing("10px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panGrdBtn\"/><PanelItem id=\"PanelItem01\" componentid=\"grdGnrlTelSrvc\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00_00_00","0","97","100.00%","50",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("4");
            obj.set_text("다회선 신청시 신청내역을 파일로 첨부해 주십시요\r\n신청하려는 전화 종류가 <fc v=\'#ee2e5b\'>[일반]전화</fc>인지 <fc v=\'#ee2e5b\'>[인터넷]전화</fc>인지 확인하고 신청하시길 바랍니다.\r\n");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_00_01","10","10","96.08%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("5");
            obj.set_text("일반전화 신청수");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edtGnrlTelAplyCntOrg","940","142","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("6");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_01","30","10","310","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"edtGnrlTelAplyCntOrg\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_00_00_01","876","150","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("8");
            obj.set_text("PRI 신청수");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edTpriAplyCnt","940","142","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("9");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_01","876","150","310","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"edTpriAplyCnt\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01","491","315","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("11");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_00_00_01\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00","20","388","100%","372",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("22");
            obj.set_type("vertical");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00_00_01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"TextArea00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel07\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Grid("grid00","0","46","100.00%","178",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("15");
            obj.set_fillareatype("allrow");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"307\"/><Column size=\"426\"/></Columns><Rows><Row size=\"44\"/><Row size=\"44\"/><Row size=\"44\"/><Row size=\"44\"/></Rows><Band id=\"body\"><Cell rowspan=\"4\" text=\"비용&#13;&#10;(*VAT별도)\" cssclass=\"CellHead\"/><Cell col=\"1\" rowspan=\"2\" text=\"가입비용\" cssclass=\"CellHead\"/><Cell col=\"2\" text=\"보증금형\" cssclass=\"CellHead, CellE\"/><Cell col=\"3\" text=\"12만원/회선\" textAlign=\"center\"/><Cell col=\"4\" cssclass=\"CellHead\" text=\"입금계좌&#13;&#10;(예금주)\"/><Cell col=\"5\" text=\"우리은행 000-000&#13;&#10;(인천국제공항공사)\" textAlign=\"center\"/><Cell col=\"6\" text=\"&lt;b v=&apos;true&apos;&gt;※가입보증금은 &lt;fc v=&apos;#1e4ebe&apos;&gt;선납&lt;/fc&gt;이며, 해지시 &lt;fc v=&apos;#1e4ebe&apos;&gt;3개월 이내&lt;/fc&gt;에 반환됨.&lt;/b&gt;\" textAlign=\"center\" autosizerow=\"default\" displaytype=\"decoratetext\"/><Cell row=\"1\" col=\"2\" text=\"가입비형\" cssclass=\"CellHead, CellE\"/><Cell row=\"1\" col=\"3\" text=\"1만원/회선\" textAlign=\"center\"/><Cell row=\"1\" col=\"4\" cssclass=\"CellHead\" text=\"가입조건\"/><Cell row=\"1\" col=\"5\" text=\"국가기관,단기(1개월미만), 비영리단체\" textAlign=\"center\"/><Cell row=\"1\" col=\"6\" text=\"&lt;b t=&apos;true&apos;&gt;※가입비형은 비반환&lt;/b&gt;\" textAlign=\"center\" cssclass=\"CellTxtRed\" displaytype=\"decoratetext\"/><Cell row=\"2\" col=\"1\" rowspan=\"2\" text=\"기본료(월)\" cssclass=\"CellHead\"/><Cell row=\"2\" col=\"2\" text=\"보증금형\" cssclass=\"CellHead, CellE\"/><Cell row=\"2\" col=\"3\" colspan=\"3\" text=\"5,600원/회선\" textAlign=\"center\"/><Cell row=\"2\" col=\"6\" rowspan=\"2\" text=\"&lt;b v=&apos;true&apos;&gt;설치비 : 8,000원 / 회선&#13;&#10;변경비 : 3,000원 / 회선&#13;&#10;※ 전화기는 자체 구입&lt;/b&gt;&#13;&#10;\" textAlign=\"center\" displaytype=\"decoratetext\"/><Cell row=\"3\" col=\"2\" text=\"가입비형\" cssclass=\"CellHead, CellE\"/><Cell row=\"3\" col=\"3\" colspan=\"3\" text=\"6,000원/회선\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_00_01_00","10","10","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("12");
            obj.set_text("신청내역");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_01_00","20","254","980","224",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("13");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"grid00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01_00","0","236","100.00%","491",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("14");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel05\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel06","67","971","100.00%","383",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("258");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("20");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Button("btnGrdAdd","774.00","10","50","34",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("16");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","804.00","10","48","34",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("17");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panGrdBtn","470","0","100%","39",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("18");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnGrdDel\"/><PanelItem id=\"PanelItem01\" componentid=\"btnGrdAdd\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","706","693","100%","130",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("21");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("Static02","140","904","100%","30",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("256");
            obj.set_text("<b v=\'true\'>공사의 “정보통신서비스 이용약관”에 동의하며</b> 동 약관에 내용과 같이 전화서비스를 신청합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("Static01","116","880","100%","30",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("255");
            obj.set_text("<b v=\'true\'>서비스 해지는 반드시 전화서비스 해지 신청서를 제출해야 하며, 전화통화로 서비스 해지 신청은 허용되지 않음.</b>");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Grid("grdGnrlTelSrvc","20","865","100.00%","217",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("19");
            obj.set_binddataset("dsGnrlTelSrvcAplyInfo");
            obj.set_autofittype("col");
            obj.set_nodatatext("데이타가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"199\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"희망번호\"/><Cell col=\"2\" text=\"확정번호\"/><Cell col=\"3\" text=\"통화허용등급\" cssclass=\"CellE\"/><Cell col=\"4\" text=\"희망일\" cssclass=\"CellE\"/><Cell col=\"5\" text=\"설치장소&#13;&#10;건물명/실명/호수\" cssclass=\"CellE\"/><Cell col=\"6\" text=\"용도&#13;&#10;전화용,FAX,키폰등\" cssclass=\"cellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:hpeTelno\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:cfmtnTelno\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"3\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:callPrmGrd\" combodataset=\"dsCallPrmGrdList\" combocodecol=\"cdId\" combodatacol=\"cdNm\" combodisplaynulltype=\"nulltext\" combodisplaynulltext=\"선택\"/><Cell col=\"4\" text=\"bind:hpeYmd\" displaytype=\"calendarcontrol\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\" textAlign=\"center\" combodisplaynulltype=\"none\" combodisplaynulltext=\" \"/><Cell col=\"5\" text=\"bind:instlPlcNm\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"6\" text=\"bind:usgNm\" displaytype=\"text\" edittype=\"text\"/></Band></Format></Formats>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_00_01_00_00","10","10","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("20");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00","0","0","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("23");
            obj.set_text("시외전환 사전선택");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Radio("radio00_00","96","73","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("24");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var divForm_form_Div04_form_radio00_00_innerdataset = new nexacro.NormalDataset("divForm_form_Div04_form_radio00_00_innerdataset", obj);
            divForm_form_Div04_form_radio00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">CACTELSERV001</Col><Col id=\"datacolumn\">KT[081]</Col></Row><Row><Col id=\"datacolumn\">LG유플러스[082]</Col><Col id=\"codecolumn\">CACTELSERV002</Col></Row><Row><Col id=\"datacolumn\">온세[083]</Col><Col id=\"codecolumn\">CACTELSERV003</Col></Row><Row><Col id=\"datacolumn\">SK브로드밴드[084]</Col><Col id=\"codecolumn\">CACTELSERV004</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div04_form_radio00_00_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00","20","1067","100%","230",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("25");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel08\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel01_00_00_00_01\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","0","1299.28","100.00%","241",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("26");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_01","20","1099","100%","144",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("27");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"grid01\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Grid("grid01","0","0","100%","134",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("28");
            obj.set_fillareatype("allrow");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"44\"/><Row size=\"44\"/><Row size=\"44\"/></Rows><Band id=\"body\"><Cell rowspan=\"3\" text=\"요금비교\" cssclass=\"CellHead\"/><Cell col=\"1\" text=\"구분\" textAlign=\"center\"/><Cell col=\"2\" text=\"KT\" textAlign=\"center\"/><Cell col=\"3\" text=\"LG유플러스\" textAlign=\"center\"/><Cell col=\"4\" text=\"온세통신\" textAlign=\"center\"/><Cell col=\"5\" text=\"SK브로드밴드\" textAlign=\"center\"/><Cell col=\"6\" cssclass=\"CellEnd\" text=\"비고\" textAlign=\"center\"/><Cell row=\"1\" col=\"1\" text=\"1대역(30Km까지)\" textAlign=\"center\"/><Cell row=\"1\" col=\"2\" text=\"39원/180초\" textAlign=\"center\"/><Cell row=\"1\" col=\"3\" text=\"39원/180초\" textAlign=\"center\"/><Cell row=\"1\" col=\"4\" text=\"39원/180초\" textAlign=\"center\"/><Cell row=\"1\" col=\"5\" text=\"39원/180초\" textAlign=\"center\"/><Cell row=\"1\" col=\"6\" rowspan=\"2\" cssclass=\"CellEnd\" text=\"상세내역은 &#13;&#10;정보통신 서비스 &#13;&#10;약관 참조\" textAlign=\"center\"/><Cell row=\"2\" col=\"1\" text=\"2대역(31Km까지)\" textAlign=\"center\"/><Cell row=\"2\" col=\"2\" text=\"14.5원/10초\" textAlign=\"center\"/><Cell row=\"2\" col=\"3\" text=\"14.1원/10초\" textAlign=\"center\"/><Cell row=\"2\" col=\"4\" text=\"13.9원/10초\" textAlign=\"center\"/><Cell row=\"2\" col=\"5\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new CheckBox("cb00","61","1423","186","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("39");
            obj.set_text("사용료 : 1000원 /번호");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_01","0","0","92.25%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("29");
            obj.set_text("부가서비스");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_02","20","1239","100%","199",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("30");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00_00_01_00_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_02","0","1160","100.00%","210",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("31");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_02\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00_00_00_00","0","46","100%","153",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("32");
            obj.set_text("부가서비스 동시 신청불가 안내\r\n※ 회의통화 서비스와 내선통화그룹(IDP) 서비스 동시 신청불가\r\n※ 통화중대기 서비스와 3인통화  서비스 동시 신청불가\r\n※ 부재중안내 서비스와 착신통화전환  서비스 동시 신청불가\r\n※ 대표전화서비스(대표번호)와 3인통화 서비스 동시 신청불가\r\n※ 대표전화서비스(종속번호)와 3인통화 서비스 동시 신청가능\r\n※ 대표전화서비스(대표번호)와 통화중대기 서비스 동시 신청불가\r\n※ 대표전화서비스(종속번호)와 통화중대기 서비스 동시 신청불가");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_00_01_01","10","10","96.08%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("33");
            obj.set_text("착신통화전환 서비스");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_01_01","30","10","310","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("34");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00_00_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_00_00_01_00","876","150","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("35");
            obj.set_text("대상번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("staLabel01_00_009","940","142","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("36");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_01_00","520","1370","310","126",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("37");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_00_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01_01","0","1370","100.00%","137",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("38");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_00_01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_00_00_01_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_019","0","46","100%","30",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("41");
            obj.set_text("별도의 통화료 발생");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_09","10","10","96.08%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("43");
            obj.set_text("통화연결음(링고) 서비스");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new CheckBox("cb00_00","61","1423","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("44");
            obj.set_text("사용료 : 1000원 /번호");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","0","27","100%","60",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("45");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"cb00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_01_01_00","30","10","310","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("46");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00_00_01_09\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_00_00_01_00_00","876","150","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("47");
            obj.set_text("대상번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edt00_01_01_00_00_09","940","142","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("48");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("edt00_01_01_00_00_009","0","46","100%","30",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("49");
            obj.set_text("기간통신사업자 요금");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","520","1416","100%","80",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("50");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"edt00_01_01_00_00_09\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_01_01_00_00_009\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_01_00_00","520","1370","310","126",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("51");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_00_00_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01_01_00","0","1370","100.00%","137",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("52");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_00_01_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_00_00_01_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_00_01_01_00_00","10","10","96.08%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("53");
            obj.set_text("전화변호변경 서비스");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new CheckBox("cb00_00_00","61","1423","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("54");
            obj.set_text("사용료 : 1000원 /번호");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00","0","27","100%","60",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("55");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_flexcrossaxisalign("center");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"cb00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_01_01_00_00","30","10","310","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("56");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00_00_01_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_00_00_01_00_00_00","876","150","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("57");
            obj.set_text("대상번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("staLabel01_00_00_00_00_9","520","1370","310","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("58");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_00_00_01_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_01_01_00_00_00_00_01_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01_01_00_00","0","1370","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("59");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_00_01_01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"staLabel01_00_00_00_00_9\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edt00_01_01_00_00_00_00_01_00_00_00","940","142","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("60");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_00_01_01_00_01","10","10","96.08%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("61");
            obj.set_text("통화허용등급 서비스");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new CheckBox("cb00_00_01","61","1423","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("62");
            obj.set_text("사용료 : 무료");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_01","0","27","100%","60",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("63");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"cb00_00_01\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_01_01_00_01","30","10","310","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("64");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00_00_01_01_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_01\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_00_00_01_00_00_01","876","150","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("65");
            obj.set_text("대상번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edt00_01_01_00_00_00_00_01_00_00_01","940","142","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("66");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00_00_00_00_00_00_00","0","46","100%","30",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("67");
            obj.set_text("A:국제, B:시외/이동, C:시내, D:공항구역내");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00","520","1416","100%","80",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("68");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"edt00_01_01_00_00_00_00_01_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"sta00_00_01_00_00_00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_01_00_00_01","520","1370","310","126",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("69");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_00_00_01_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01_01_00_01","0","1370","100.00%","137",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("70");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_00_01_01_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_00_00_01_00_00_01\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_00_01_01_00_00_00","10","10","96.08%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("71");
            obj.set_text("직통전화 서비스");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new CheckBox("cb00_00_00_00","61","1423","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("72");
            obj.set_text("사용료 : 무료");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_01","0","27","100%","60",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("73");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_flexcrossaxisalign("center");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"cb00_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_01_01_00_00_00","30","10","310","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("74");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00_00_01_01_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_00_01\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_00_00_01_00_00_00_00","876","150","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("75");
            obj.set_text("대상번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edt00_01_01_00_00_00_00_01_00_00_00_00","940","142","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("76");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_01_00_00_00_00","520","1370","310","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("77");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_00_00_01_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_01_01_00_00_00_00_01_00_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01_01_00_00_00","0","1370","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("78");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_00_01_01_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_00_00_01_00_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_00_01_01_00_00_00_00","10","10","96.08%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("79");
            obj.set_text("단축다이얼 서비스");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new CheckBox("cb00_00_00_00_00","61","1423","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("80");
            obj.set_text("사용료 : 무료");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_01_00","0","27","100%","60",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("81");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_flexcrossaxisalign("center");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"cb00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_01_01_00_00_00_00","30","10","310","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("82");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00_00_01_01_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_00_01_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_144","876","150","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("83");
            obj.set_text("대상번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edt00_01_01_00_00_00_00_01_00_00_00_00_00","940","142","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("84");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_01_00_00_00_00_00","520","1370","310","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("85");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00_00_01_144\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_01_01_00_00_00_00_01_00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01_01_00_00_00_00","0","1370","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("86");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_00_01_01_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_00_00_01_00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_141","10","10","96.08%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("87");
            obj.set_text("부재중안내 서비스");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new CheckBox("cb00_00_00_00_00_00","61","1423","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("88");
            obj.set_text("사용료 : 무료");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_01_00_00","0","27","100%","60",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("89");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"cb00_00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_01_01_00_00_00_00_00","30","10","310","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("90");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00_00_01_141\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_00_01_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_14","876","150","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("91");
            obj.set_text("대상번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edt00_01_01_00_00_00_00_01_00_00_00_00_00_00","940","142","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("92");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_01_00_00_00_00_00_00","520","1370","310","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("93");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00_00_01_14\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_01_01_00_00_00_00_01_00_00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01_01_00_00_00_00_00","0","1370","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("94");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_00_01_01_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_00_00_01_00_00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_00_01_01_00_00_00_00_00_00","10","10","96.08%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("95");
            obj.set_text("3인통화 서비스");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new CheckBox("cb00_00_00_00_00_00_00","61","1423","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("96");
            obj.set_text("사용료 : 무료");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_01_00_00_00","0","27","100%","60",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("97");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"cb00_00_00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_01_01_00_00_00_00_00_00","30","10","310","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("98");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00_00_01_01_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_00_01_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_138","876","150","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("99");
            obj.set_text("대상번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edt00_01_01_00_00_00_00_01_00_00_00_00_00_00_00","940","142","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("100");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_01_00_00_00_00_00_00_00","520","1370","310","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("101");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00_00_01_138\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_01_01_00_00_00_00_01_00_00_00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01_01_00_00_00_00_00_00","0","1370","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("102");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_00_01_01_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_00_00_01_00_00_00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_139","10","10","96.08%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("103");
            obj.set_text("회의통화 서비스");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new CheckBox("cb00_00_00_00_00_00_00_00","61","1423","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("104");
            obj.set_text("사용료 : 무료");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_01_00_00_00_00","0","27","100%","60",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("105");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"cb00_00_00_00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_01_01_00_00_00_00_00_00_00","30","10","310","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("106");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00_00_01_139\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_00_01_00_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_00_00_01_00_00_00_00_00_00_00_00","876","150","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("107");
            obj.set_text("대상번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edt00_01_01_00_00_00_00_01_00_00_00_00_00_00_00_00","940","142","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("108");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_01_00_00_00_00_00_00_00_00","520","1370","310","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("109");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_00_00_01_00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_01_01_00_00_00_00_01_00_00_00_00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01_01_00_00_00_00_00_00_00","0","1370","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("110");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_00_01_01_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_00_00_01_00_00_00_00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_137","10","10","96.08%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("111");
            obj.set_text("통화중대기 서비스");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new CheckBox("cb00_00_00_00_00_00_00_00_00","61","1423","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("112");
            obj.set_text("사용료 : 무료");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_01_00_00_00_00_00","0","27","100%","60",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("113");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"cb00_00_00_00_00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_01_01_00_00_00_00_00_00_00_00","30","10","310","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("114");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00_00_01_137\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_00_01_00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_134","876","150","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("115");
            obj.set_text("대상번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edt00_01_01_00_00_00_00_01_00_00_00_00_00_00_00_00_00","940","142","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("116");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_01_00_00_00_00_00_00_00_00_00","520","1370","310","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("117");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00_00_01_134\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_01_01_00_00_00_00_01_00_00_00_00_00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01_01_00_00_00_00_00_00_00_00","0","1370","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("118");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_00_01_01_00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_00_00_01_00_00_00_00_00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_13","10","10","96.08%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("119");
            obj.set_text("지정시간통보 서비스");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new CheckBox("cb00_00_00_00_00_00_00_00_00_00","61","1423","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("120");
            obj.set_text("사용료 : 무료");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_01_00_00_00_00_00_00","0","27","100%","60",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("121");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"cb00_00_00_00_00_00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_01_01_00_00_00_00_00_00_00_00_00","30","10","310","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("122");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00_00_01_13\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_00_01_00_00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_129","876","150","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("123");
            obj.set_text("대상번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edt00_01_01_00_00_00_00_01_00_00_00_00_00_00_00_00_00_00","940","142","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("124");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_01_00_00_00_00_00_00_00_00_00_00","520","1370","310","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("125");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00_00_01_129\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_01_01_00_00_00_00_01_00_00_00_00_00_00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01_01_00_00_00_00_00_00_00_00_00","0","1370","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("126");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_00_01_01_00_00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_00_00_01_00_00_00_00_00_00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_128","10","10","96.08%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("127");
            obj.set_text("발신번호표시(CID) 서비스");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new CheckBox("cb00_00_00_00_00_00_00_00_00_00_00","61","1423","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("128");
            obj.set_text("사용료 : 무료");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_01_00_00_00_00_00_00_00","0","27","100%","60",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("129");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"cb00_00_00_00_00_00_00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_01_01_00_00_00_00_00_00_00_00_00_00","30","10","310","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("130");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00_00_01_128\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_00_01_00_00_00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_126","876","150","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("131");
            obj.set_text("대상번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edt00_01_01_00_00_00_00_01_00_00_00_00_00_00_00_00_00_00_00","940","142","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("132");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00","520","1370","310","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("133");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00_00_01_126\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_01_01_00_00_00_00_01_00_00_00_00_00_00_00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01_01_00_00_00_00_00_00_00_00_00_00","0","1370","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("134");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_00_01_01_00_00_00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_125","10","10","96.08%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("135");
            obj.set_text("대표전화 서비스(대표번호)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new CheckBox("cb00_00_01_00","61","1423","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("136");
            obj.set_text("사용료 : 무료");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_01_00","0","27","100%","60",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("137");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"cb00_00_01_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_01_01_00_01_00","30","10","310","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("138");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00_00_01_125\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_01_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_124","876","150","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("139");
            obj.set_text("대상번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edt00_01_01_00_00_00_00_01_00_00_01_00","940","142","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("140");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_122","0","46","100%","30",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("141");
            obj.set_text("대표번호");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00","520","1416","100%","80",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("142");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"edt00_01_01_00_00_00_00_01_00_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"sta00_00_01_122\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_01_00_00_01_00","520","1370","310","126",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("143");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00_00_01_124\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01_01_00_01_00","0","1370","100.00%","137",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("144");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_00_01_01_00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_00_00_01_00_00_01_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_121","10","10","96.08%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("145");
            obj.set_text("대표전화 서비스(종속번호)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new CheckBox("cb00_00_01_00_00","61","1423","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("146");
            obj.set_text("사용료 : 무료");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_01_00_00","0","27","100%","60",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("147");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"cb00_00_01_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_01_01_00_01_00_00","30","10","310","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("148");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00_00_01_121\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_01_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_00_00_01_00_00_01_00_00","876","150","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("149");
            obj.set_text("대상번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edt00_01_01_00_00_00_00_01_00_00_01_00_00","940","142","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("150");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_12","0","46","100%","30",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("151");
            obj.set_text("종속번호");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00_00","520","1416","100%","80",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("152");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"edt00_01_01_00_00_00_00_01_00_00_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"sta00_00_01_12\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_01_00_00_01_00_00","520","1370","310","126",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("153");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_00_00_01_00_00_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02_00_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01_01_00_01_00_00","0","1370","100.00%","137",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("154");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_00_01_01_00_01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_00_00_01_00_00_01_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_118","10","10","96.08%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("155");
            obj.set_text("내선통화그룹(IDP) 서비스");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new CheckBox("cb00_00_00_00_00_00_00_00_00_00_00_00","61","1423","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("156");
            obj.set_text("사용료 : 무료");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_01_00_00_00_00_00_00_00_00","0","27","100%","60",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("157");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"cb00_00_00_00_00_00_00_00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_01_01_00_00_00_00_00_00_00_00_00_00_00","30","10","310","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("158");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00_00_01_118\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_00_01_00_00_00_00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_117","876","150","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("159");
            obj.set_text("대상번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edt00_01_01_00_00_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00","940","142","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("160");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00","520","1370","310","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("161");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00_00_01_117\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_01_01_00_00_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01_01_00_00_00_00_00_00_00_00_00_00_00","0","1370","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("162");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_00_01_01_00_00_00_00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_116","10","10","96.08%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("163");
            obj.set_text("ARS(자동응답) 서비스");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new CheckBox("cb00_00_01_00_00_00","61","1423","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("164");
            obj.set_text("사용료 : 무료");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_01_00_00_00","0","27","100%","60",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("165");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"cb00_00_01_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_01_01_00_01_00_00_00","20","0","310","133",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("166");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00_00_01_116\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_01_00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"sta00_00_01_113\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_00_00_01_00_00_01_00_00_00","876","150","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("167");
            obj.set_text("대상번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("sta00_00_01_114","940","142","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("168");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_112","0","46","100%","30",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("169");
            obj.set_text("대표번호");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00_00_00","520","1416","100%","80",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("170");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00_00_01_114\"/><PanelItem id=\"PanelItem01\" componentid=\"sta00_00_01_112\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_01_00_00_01_00_00_00","520","1370","310","126",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("171");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_00_00_01_00_00_01_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02_00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01_01_00_01_00_00_00","0","3025","100.00%","144",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("172");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_00_01_01_00_01_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_00_00_01_00_00_01_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel04","0","3791","100%","277",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("200");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panGrdBtn00\"/><PanelItem id=\"PanelItem01\" componentid=\"Grid00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_113","0","46","100%","47",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("173");
            obj.set_text("사용료 : 대표번호당 10,000원/월\r\n음원제작비 : 100,000원/회");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_01_01_00_01_00_00_00_00","20","0","310","0",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("174");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents/>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_115","876","150","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("175");
            obj.set_text("대상번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("sta00_00_01_11","940","142","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("176");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00_00_00_00_0","0","46","100%","30",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("177");
            obj.set_text("종속번호");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00_00_00_00","520","1416","100%","80",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("178");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00_00_01_11\"/><PanelItem id=\"PanelItem01\" componentid=\"sta00_00_01_00_00_00_00_0\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_0","520","1370","310","126",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("179");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00_00_01_115\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02_00_00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01_01_00_01_00_00_00_00","0","3025","100.00%","144",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("180");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_00_01_01_00_01_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_00_00_0\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_00_00","10","10","96.08%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("181");
            obj.set_text("서비스신청 구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Combo("cmb00_00","97","272","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("182");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00_00_00_01","0","97","100.00%","50",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("183");
            obj.set_text("다회선 신청시 신청내역을 파일로 첨부해 주십시요\r\n신청하려는 전화 종류가 <fc v=\'#ee2e5b\'>[일반]전화</fc>인지 <fc v=\'#ee2e5b\'>[인터넷]전화</fc>인지 확인하고 신청하시길 바랍니다.\r\n");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_00","20","0","100%","146",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("184");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"cmb00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"sta00_00_01_00_00_00_01\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00","0","0","100.00%","157",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("185");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Grid("grid02","20","86","100%","178",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("205");
            obj.set_fillareatype("allrow");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"440\"/></Columns><Rows><Row size=\"44\"/><Row size=\"44\"/><Row size=\"44\"/><Row size=\"44\"/></Rows><Band id=\"body\"><Cell rowspan=\"4\" cssclass=\"CellHead\" text=\"요금\"/><Cell col=\"1\" text=\"구분\" textAlign=\"center\"/><Cell col=\"2\" text=\"SK브로드밴드\" textAlign=\"center\"/><Cell col=\"3\" text=\"비고\" textAlign=\"center\" cssclass=\"CellEnd\"/><Cell row=\"1\" col=\"1\" text=\"유선전화\" textAlign=\"center\"/><Cell row=\"1\" col=\"2\" text=\"38원/180초\" textAlign=\"center\"/><Cell row=\"1\" col=\"3\" rowspan=\"3\" text=\"※ 상세 내역은 정보통신 서비스 약관 참조&#13;&#10;※ 인터넷 전화는 SK브로드밴드로만 가입 가능\" textAlign=\"center\" cssclass=\"CellEnd\"/><Cell row=\"2\" col=\"1\" text=\"인터넷전화\" textAlign=\"center\"/><Cell row=\"2\" col=\"2\" text=\"38원/180초\" textAlign=\"center\"/><Cell row=\"3\" col=\"1\" text=\"이동전화\" textAlign=\"center\"/><Cell row=\"3\" col=\"2\" text=\"11.7원/10초\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_00_01_02","10","10","96.08%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("186");
            obj.set_text("인터넷전화 신청수");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edt00_01_04","940","142","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("187");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_01_02","30","10","310","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("188");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00_00_01_02\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_01_04\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("Panel01_00_00_02","876","150","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("189");
            obj.set_text("IP전화기 기종");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edt00_01_014","940","142","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("190");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_01_01","876","150","310","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("191");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_01_014\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01_02","491","315","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("192");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_00_01_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_00_00_01_01\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel03","0","3646","100.00%","600",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("193");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 20px 10px 20px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00_00_01_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"grid00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel04\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Grid("grid00_00","20","46","100%","178",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("194");
            obj.set_fillareatype("allrow");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"210\"/></Columns><Rows><Row size=\"44\"/><Row size=\"44\"/><Row size=\"44\"/><Row size=\"44\"/></Rows><Band id=\"body\"><Cell rowspan=\"4\" text=\"비용&#13;&#10;(*VAT별도)\" cssclass=\"CellHead\"/><Cell col=\"1\" text=\"기본료(월)\" cssclass=\"CellHead\"/><Cell col=\"2\" colspan=\"4\" text=\"2,000원 / 회선\"/><Cell col=\"6\" rowspan=\"4\" text=\"※ 전화기는 자체 구입\" textAlign=\"center\" autosizerow=\"default\" cssclass=\"CellEnd\"/><Cell row=\"1\" col=\"1\" cssclass=\"CellHead\" text=\"설치비(최초1회)&#13;&#10;이전/변경비\"/><Cell row=\"1\" col=\"2\" colspan=\"4\" text=\"10,000  / 회선\"/><Cell row=\"2\" col=\"1\" rowspan=\"2\" text=\"통화요금\" cssclass=\"CellHead\"/><Cell row=\"2\" col=\"2\" text=\"유선전화\" cssclass=\"CellHead\"/><Cell row=\"2\" col=\"3\" text=\"이동(LM)전화\" textAlign=\"center\" cssclass=\"CellHead\"/><Cell row=\"2\" col=\"4\" cssclass=\"CellHead\" text=\"인터넷(LV)전화\"/><Cell row=\"2\" col=\"5\" cssclass=\"CellHead\" text=\"구내전화\"/><Cell row=\"3\" col=\"2\" text=\"38원 / 180초\" textAlign=\"center\"/><Cell row=\"3\" col=\"3\" text=\"11.7원 / 10초\" textAlign=\"center\"/><Cell row=\"3\" col=\"4\" text=\"38원 / 180초\" textAlign=\"center\"/><Cell row=\"3\" col=\"5\" text=\"무료\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_00_01_00_01","10","10","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("195");
            obj.set_text("신청내역");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Button("btnGrdDel00","804.00","10","45","34",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("196");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Button("btnGrdAdd00","774.00","10","47","34",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("197");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panGrdBtn00","470","0","100%","54",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("198");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("10px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnGrdDel00\"/><PanelItem id=\"PanelItem01\" componentid=\"btnGrdAdd00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","0","3827","100.00%","212",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("199");
            obj.set_binddataset("ds00");
            obj.set_nodatatext("데이타가 없습니다.");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"199\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"체크\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"희망번호\"/><Cell col=\"2\" text=\"확정번호\"/><Cell col=\"3\" text=\"통화허용등급\"/><Cell col=\"4\" text=\"희망일\"/><Cell col=\"5\" text=\"설치장소&#13;&#10;건물명/실명/호수\" cssclass=\"CellE\"/><Cell col=\"6\" text=\"용도&#13;&#10;전화용,FAX,키폰등\" cssclass=\"cellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:체크\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:작업일\" displaytype=\"normal\"/><Cell col=\"2\" text=\"bind:작업시작시간\" displaytype=\"normal\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:개요\" displaytype=\"calendarcontrol\" edittype=\"date\"/><Cell col=\"5\" text=\"bind:작업내역\" displaytype=\"normal\"/><Cell col=\"6\" text=\"bind:작업자회사\" displaytype=\"normal\"/></Band></Format></Formats>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_02","0","0","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("201");
            obj.set_text("시외전환 사전선택");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Radio("radio00_00_00","96","73","100%","80",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("202");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("1");
            obj.set_rowcount("2");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div04_form_radio00_00_00_innerdataset = new nexacro.NormalDataset("divForm_form_Div04_form_radio00_00_00_innerdataset", obj);
            divForm_form_Div04_form_radio00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">KT[081]</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">LG유플러스[082]</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">온세[083]</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">SK브로드밴드[084]</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div04_form_radio00_00_00_innerdataset);
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_03","20","0","100%","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("203");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"radio00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_03","0","4068","100.00%","275",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("204");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_03\"/><PanelItem id=\"PanelItem01\" componentid=\"grid02\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_00_00_00","10","10","96.08%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("206");
            obj.set_text("서비스신청 구분");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00","97","272","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("207");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00_00_00_01_00","0","97","100.00%","50",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("208");
            obj.set_text("다회선 신청시 신청내역을 파일로 첨부해 주십시요\r\n신청하려는 전화 종류가 <fc v=\'#ee2e5b\'>[일반]전화</fc>인지 <fc v=\'#ee2e5b\'>[인터넷]전화</fc>인지 확인하고 신청하시길 바랍니다.\r\n");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_00_00","20","0","100%","146",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("209");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"cmb00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"sta00_00_01_00_00_00_01_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00_00","0","0","100.00%","157",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("210");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Grid("grid03","0","51","100.00%","178",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("219");
            obj.set_fillareatype("allrow");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"274\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/><Row size=\"44\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"기본료\"/><Cell col=\"2\" text=\"설치비\"/><Cell col=\"3\" text=\"변경비\"/><Cell col=\"4\" text=\"가입대상,조건\"/><Cell col=\"5\" text=\"A/S범위\"/><Cell col=\"6\" text=\"할인 조건 등\"/></Band><Band id=\"body\"><Cell text=\"일반형\" textAlign=\"center\"/><Cell col=\"1\" text=\"35,000원\" textAlign=\"center\"/><Cell col=\"2\" text=\"14,000원\" textAlign=\"center\"/><Cell col=\"3\" text=\"10,000원\" textAlign=\"center\"/><Cell col=\"4\" text=\"일반고객\" textAlign=\"center\"/><Cell col=\"5\" text=\"SystemBox\" textAlign=\"center\"/><Cell col=\"6\" text=\"일반형 다량사용 할인율 적용\" textAlign=\"center\"/><Cell row=\"1\" text=\"기업형\" textAlign=\"center\"/><Cell row=\"1\" col=\"1\" text=\"할인율 참조\" textAlign=\"center\"/><Cell row=\"1\" col=\"2\" text=\"100,000원\" textAlign=\"center\"/><Cell row=\"1\" col=\"3\" text=\"10,000원\" textAlign=\"center\"/><Cell row=\"1\" col=\"4\" text=\"자가설비 보유고객\" textAlign=\"center\"/><Cell row=\"1\" col=\"5\" text=\"UpLink회선\" textAlign=\"center\"/><Cell row=\"1\" col=\"6\" text=\"기업형 다량사용 할인율 적용 \" textAlign=\"center\"/><Cell row=\"2\" text=\"부가형\" textAlign=\"center\"/><Cell row=\"2\" col=\"1\" text=\"13,000원\" textAlign=\"center\"/><Cell row=\"2\" col=\"2\" text=\"없음\" textAlign=\"center\"/><Cell row=\"2\" col=\"3\" text=\"없음\" textAlign=\"center\"/><Cell row=\"2\" col=\"4\" text=\"약관 참조\" textAlign=\"center\"/><Cell row=\"2\" col=\"5\" text=\"SystemBox\" textAlign=\"center\"/><Cell row=\"2\" col=\"6\" text=\"할인없음, 일반형 1회선당 최대 3회선\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Button("btnGrdDel00_00","804.00","10","48","34",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("211");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Button("btnGrdAdd00_00","774.00","10","50","34",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("212");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panGrdBtn00_00","470","0","100%","54",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("213");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("10px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnGrdDel00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"btnGrdAdd00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00","0","3827","100.00%","212",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("214");
            obj.set_binddataset("ds00");
            obj.set_nodatatext("데이타가 없습니다.");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"선택\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"1\" text=\"건물명\"/><Cell col=\"2\" text=\"호실&#13;&#10;번호\"/><Cell col=\"3\" text=\"일반&#13;&#10;회선수\"/><Cell col=\"4\" text=\"기업형&#13;&#10;회선수\"/><Cell col=\"5\" text=\"부가형&#13;&#10;회선수\"/><Cell col=\"6\" text=\"회망일\" cssclass=\"cellEnd\"/><Cell col=\"7\" text=\"UpLink\"/><Cell col=\"8\" text=\"고정IP&#13;&#10;요청수\"/><Cell col=\"9\" text=\"이용목적&#13;&#10;(단말특성)\"/></Band><Band id=\"body\"><Cell text=\"bind:체크\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:작업일\" displaytype=\"normal\"/><Cell col=\"2\" text=\"bind:작업시작시간\" displaytype=\"normal\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:개요\" displaytype=\"normal\" edittype=\"normal\"/><Cell col=\"5\" text=\"bind:작업내역\" displaytype=\"normal\"/><Cell col=\"6\" text=\"bind:작업자회사\" displaytype=\"calendarcontrol\" edittype=\"date\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/></Band></Format></Formats>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel04_00","0","3791","100%","277",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("215");
            obj.set_type("vertical");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panGrdBtn00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Grid00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_00_00_00_00","10","10","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("216");
            obj.set_text("상품별 요금 기준");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_00_00_00","20","0","100%","300",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("217");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"grid03\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00_00_00","0","4777","100.00%","250",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("218");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_00_00_00_00_00","10","10","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("220");
            obj.set_text("다량사용 할인율");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Grid("grid03_00","0","51","100.00%","222",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("221");
            obj.set_fillareatype("allrow");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"250\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"250\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/><Row size=\"44\"/><Row size=\"44\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"사용단말\"/><Cell col=\"2\" text=\"할인율\"/><Cell col=\"3\" text=\"30단말 사용시\"/><Cell col=\"4\" text=\"구분\"/><Cell col=\"5\" text=\"사용단말\"/><Cell col=\"6\" text=\"적용단가\"/><Cell col=\"7\" text=\"30단말 사용시\"/></Band><Band id=\"body\"><Cell rowspan=\"4\" text=\"일반형\" textAlign=\"center\"/><Cell col=\"1\" text=\"1~5\" textAlign=\"center\"/><Cell col=\"2\" text=\"기본료의 0%\" textAlign=\"center\"/><Cell col=\"3\" rowspan=\"4\" text=\"5 X 35,000 X 1.00&#13;&#10;5 X 35,000 X 0.95&#13;&#10;20 X 35,000 X 0.93&#13;&#10;합계 992,250원\" textAlign=\"center\"/><Cell col=\"4\" rowspan=\"4\" text=\"기업형\" textAlign=\"center\"/><Cell col=\"5\" text=\"1~10\" textAlign=\"center\"/><Cell col=\"6\" text=\"28,000원\" textAlign=\"center\"/><Cell col=\"7\" rowspan=\"4\" text=\"5 X 35,000 X 1.00&#13;&#10;5 X 35,000 X 0.95&#13;&#10;20 X 35,000 X 0.93&#13;&#10;합계 992,250원\" textAlign=\"center\"/><Cell row=\"1\" col=\"1\" text=\"6~10\" textAlign=\"center\"/><Cell row=\"1\" col=\"2\" text=\"기본료의 5%\" textAlign=\"center\"/><Cell row=\"1\" col=\"5\" text=\"11~15\" textAlign=\"center\"/><Cell row=\"1\" col=\"6\" text=\"24,000원\" textAlign=\"center\"/><Cell row=\"2\" col=\"1\" text=\"11~30\" textAlign=\"center\"/><Cell row=\"2\" col=\"2\" text=\"기본료의 7%\" textAlign=\"center\"/><Cell row=\"2\" col=\"5\" text=\"16~30\" textAlign=\"center\"/><Cell row=\"2\" col=\"6\" text=\"20,000원\" textAlign=\"center\"/><Cell row=\"3\" col=\"1\" text=\"31~50\" textAlign=\"center\"/><Cell row=\"3\" col=\"2\" text=\"기본료의 9%\" textAlign=\"center\"/><Cell row=\"3\" col=\"5\" text=\"31~60\" textAlign=\"center\"/><Cell row=\"3\" col=\"6\" text=\"15,000원\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_00_00_00_00","20","0","100%","510",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("222");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"grid03_00\"/><PanelItem id=\"PanelItem03\" componentid=\"sta00_00_01_00_00_00_01_00_00\"/><PanelItem id=\"PanelItem04\" componentid=\"sta00_00_01_00_00_00_01_00_00_00\"/><PanelItem id=\"PanelItem05\" componentid=\"sta00_00_01_00_00_00_01_00_00_00_00\"/><PanelItem id=\"PanelItem06\" componentid=\"sta00_00_01_00_00_00_01_00_00_00_01\"/><PanelItem id=\"PanelItem07\" componentid=\"sta00_00_01_00_00_00_01_00_00_00_02\"/><PanelItem id=\"PanelItem08\" componentid=\"sta00_00_01_00_00_00_01_00_00_00_03\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00_00_00_00","0","5027","100.00%","531",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("223");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00_00_00_01_00_00","0","97","100%","30",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("224");
            obj.set_text("<fc v=\'#ee2e5b\'>신규신청 : 접수일로 2일이후부터 개통가능</fc>");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00_00_00_01_00_00_00","0","97","100%","47",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("225");
            obj.set_text("공사는 다른 사람의 통신을 매개할 목적 또는 불특정 다수가 사용할 목적으로 청약을 하거나, 공사 통신망 보안을 위태롭게 할 수 있다고 객관적으로 판단될 경우 청약의 승인을 유보할 수 있다.(정보통신서비스 약관 제 9조) ");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00_00_00_01_00_00_00_00","0","97","100%","30",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("226");
            obj.set_text("공사는 정보통신서비스 약관 제 27조(계약의 해제,해지) ②항에 해당하는 사유 발생시 계약을 해지할 수 있습니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00_00_00_01_00_00_00_01","0","97","100%","30",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("227");
            obj.set_text("<b v=\'true\'>서비스 해지 및 변경은 신청서 작성/제출에 의해서만 가능합니다.</b>");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00_00_00_01_00_00_00_02","0","97","100%","30",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("228");
            obj.set_text("<b v=\'true\'>공사의 “정보통신서비스 이용약관”에 동의하며</b> 동 약관에 따라 내용과 같이 공항LAN서비스를 신청합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00_00_00_01_00_00_00_03","0","97","100%","30",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("229");
            obj.set_text("장애접수연락처:전화번호(032-741-1200),LAN(032-741-0000),CATV(032-741-7066)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_00_00_00_01","10","10","96.08%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("230");
            obj.set_text("서비스신청 구분");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_00","97","272","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("231");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00_00_00_01_00_01","0","97","100%","30",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("232");
            obj.set_text("다회선 신청시 신청내역을 파일로 첨부해 주십시오.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_00_00_01","20","0","100%","136",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("233");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00_00_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"cmb00_00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"sta00_00_01_00_00_00_01_00_01\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00_00_01","0","0","100.00%","157",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("234");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_00_00_00_01\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Button("btnGrdDel00_00_00","804.00","10","48","34",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("235");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Button("btnGrdAdd00_00_00","774.00","10","50","34",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("236");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panGrdBtn00_00_00","470","0","100%","54",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("237");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("10px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnGrdDel00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"btnGrdAdd00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00","0","3827","100.00%","212",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("238");
            obj.set_binddataset("ds00");
            obj.set_nodatatext("데이타가 없습니다.");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"300\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"선택\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"1\" text=\"건물명\"/><Cell col=\"2\" text=\"호실번호\"/><Cell col=\"3\" text=\"수량\"/><Cell col=\"4\" text=\"회망일\" cssclass=\"cellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:체크\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:작업일\" displaytype=\"normal\"/><Cell col=\"2\" text=\"bind:작업시작시간\" displaytype=\"normal\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:작업자회사\" displaytype=\"calendarcontrol\" edittype=\"button\"/></Band></Format></Formats>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel04_00_00","0","3791","100%","277",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("239");
            obj.set_type("vertical");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panGrdBtn00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Grid00_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_00_00_00_00_01","10","10","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("240");
            obj.set_text("서비스별 적용 요금표");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Grid("grid03_01","0","51","100.00%","135",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("241");
            obj.set_fillareatype("allrow");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"211\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"151\"/><Column size=\"382\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"설치비\"/><Cell col=\"2\" text=\"변경비\"/><Cell col=\"3\" text=\"단위가격\"/><Cell col=\"4\" text=\"비고\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"개별수신형(일반지역)\" textAlign=\"center\"/><Cell col=\"1\" text=\"없음\" textAlign=\"center\"/><Cell col=\"2\" text=\"없음\" textAlign=\"center\"/><Cell col=\"3\" text=\"18,000원 / 단말\" textAlign=\"center\"/><Cell col=\"4\" rowspan=\"2\" text=\"다량 사용에 따른&#13;&#10;할인율은 약관 참조\" textAlign=\"center\" cssclass=\"CellEnd\"/><Cell row=\"1\" text=\"설치구비형(단체형)\" textAlign=\"center\"/><Cell row=\"1\" col=\"1\" text=\"100,000원\" textAlign=\"center\"/><Cell row=\"1\" col=\"2\" text=\"20,000원\" textAlign=\"center\"/><Cell row=\"1\" col=\"3\" text=\"14,400원 / 단말\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_00_00_00_01","20","0","100%","250",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("242");
            obj.set_type("vertical");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00_00_00_00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"grid03_01\"/><PanelItem id=\"PanelItem06\" componentid=\"sta00_00_01_00_00_00_01_00_00_00_02_00\"/><PanelItem id=\"PanelItem05\" componentid=\"sta00_00_01_00_00_00_01_00_00_00_01_00\"/><PanelItem id=\"PanelItem03\" componentid=\"sta00_00_01_00_00_00_01_00_00_00_04\"/><PanelItem id=\"PanelItem04\" componentid=\"sta00_00_01_00_00_00_01_00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00_00_00_01","0","5992","100.00%","354",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("243");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_00_00_00_00_01\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00_00_00_01_00_00_00_04","0","97","100%","30",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("244");
            obj.set_text("<b v=\'true\'>서비스 해지 및 변경은 신청서 작성/제출에 의해서만 가능합니다.</b>");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00_00_00_01_00_00_00_00_00","0","97","100%","30",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("245");
            obj.set_text("<b v=\'true\'>공사의 “정보통신서비스 이용약관”에 동의하며</b> 동 약관에 따라 내용과 같이 신청합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00_00_00_01_00_00_00_01_00","0","97","100%","47",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("246");
            obj.set_text("방송법 64조(수상기의 등록과 수신료 납부), 제 67조(수상기의 등록 및 징수의 위탁), 동법 시행령 제 42조(수신료의 징수)에 의거 텔레비전방송(KBS) 수신료(대당 2,500원/월)를 공항케이블TV 사용료와 함께 고지합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00_00_00_01_00_00_00_02_00","0","97","100%","30",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("247");
            obj.set_text("상기가격, 할인율 및 채널내역은 종합유선방송서비스 제공사업자 & 공사와의 협약에 따를 있습니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_00_00_00_01_00","10","10","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("248");
            obj.set_text("서비스신청 구분");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_00_00","97","272","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("249");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00_00_00_01_00_01_00","0","97","100%","30",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("250");
            obj.set_text("다회선 신청시 신청내역을 파일로 첨부해 주십시오.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_00_00_01_00","20","0","100%","136",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("251");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00_00_00_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"cmb00_00_00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"sta00_00_01_00_00_00_01_00_01_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00_00_01_00","0","0","100.00%","157",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("252");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_00_00_00_01_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00_00_00_00_00","0","46","100%","30",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("253");
            obj.set_text("통화허용등급 : <b v=\'true\'>A</b>(국제,시외/이동,시내,구내), <b v=\'true\'>B</b>(시외/이동,시내,구내),<b v=\'true\'>C</b>(시내,구내),<b v=\'true\'>D</b>(구내:740~744국 번호간 전화통화는 <b v=\'true\'>무료</b>)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00_00_00_00_00_00","0","46","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("254");
            obj.set_text("시내통화는 KT의 이용약관, 시외,국제,LM, 각종 정보, 부가통화 등은 해당 전기통신사업자의 이용약관 요금을 적용하며, 시내,시외,국제통화는 통화할인율이 제공됨.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_03_00_00_00_00_00_00","0","-3","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("30");
            obj.set_text("동선");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_flexgrow("1");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00_03_00_00_00_00_00_00","461","6","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("31");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_03_00_00_00_00_00_00","505","-3","60","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("32");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_03_00_00_00_00_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit00_00_00_00_00_00_00","0","0","100%","46",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("33");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staSubTitle02_00_03_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_03_00_00_00_00_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div05","0","9686","100%","1000",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("34");
            obj.set_text("div05");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_00_01_02","0","0","45.20%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("0");
            obj.set_text("사용희망일");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Calendar("cal00","0","46","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("1");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_01_02","20","0","310","86",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00_00_01_02\"/><PanelItem id=\"PanelItem01\" componentid=\"cal00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_01_01","520","0","310","0",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01_02","0","9686","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("4");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_00_01_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_00_00_01_01\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","86","100%","196",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("24");
            obj.set_spacing("10px 0px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grid00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_00_01_02_00","0","0","45.20%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("5");
            obj.set_text("시작위치");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_01_02_00","20","0","310","86",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00_00_01_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_01_01_00","520","0","310","86",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00_00_01_02_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt01\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01_02_00","0","9686","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("8");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_00_01_02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_00_00_01_01_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Radio("radio00","548","264","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("18");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var divForm_form_Div05_form_radio00_innerdataset = new nexacro.NormalDataset("divForm_form_Div05_form_radio00_innerdataset", obj);
            divForm_form_Div05_form_radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">1P</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">2P</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">3P</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div05_form_radio00_innerdataset);
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Edit("edt01","591","175","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("11");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Edit("edt00","120","153","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("9");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_00_01_02_00_00","0","0","45.20%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("10");
            obj.set_text("종료위치");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_00_01_02_00_01","0","0","45.20%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("12");
            obj.set_text("회선신청수");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Edit("edt00_00","120","153","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("13");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_01_02_00_00","20","0","310","86",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("14");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00_00_01_02_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_00_01_02_00_00_00","0","0","45.20%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("15");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_01_01_00_00","520","0","310","86",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00_00_01_02_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"radio00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01_02_00_00","0","9686","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("17");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_00_01_02_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_00_00_01_01_00_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_00_01_02_00_01_00","0","0","45.20%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("19");
            obj.set_text("이용목적");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00","120","153","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("20");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_01_02_00_00_00","20","291","96.08%","282",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("21");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00_00_01_02_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01_02_00_00_00","0","291","100.00%","293",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("22");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_00_01_02_00_00_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Grid("grid00","0","86","100.00%","178",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("23");
            obj.set_fillareatype("allrow");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"300\"/><Column size=\"300\"/><Column size=\"300\"/><Column size=\"300\"/></Columns><Rows><Row size=\"44\"/><Row size=\"44\"/><Row size=\"44\"/><Row size=\"44\"/></Rows><Band id=\"body\"><Cell cssclass=\"CellHead\" text=\"사용위치\"/><Cell col=\"1\" text=\"동일 건물내 구간\" textAlign=\"center\"/><Cell col=\"2\" text=\"건물간(1P 기준)\" textAlign=\"center\"/><Cell col=\"3\" rowspan=\"4\" text=\"건물간 거리 산정기준&#13;&#10;주통신실 MDF 단자함&#13;&#10;-2P 요금 : 1P의 1.5배&#13;&#10;-3P 요금 : 1P의 2배\" textAlign=\"center\"/><Cell row=\"1\" cssclass=\"CellHead\" text=\"단위가격(일반업무)\"/><Cell row=\"1\" col=\"1\" text=\"2,000원 / (월, 1P)\" textAlign=\"center\"/><Cell row=\"1\" col=\"2\" text=\"2,000원 / (월, 1P, 1 Km)\" textAlign=\"center\"/><Cell row=\"2\" cssclass=\"CellHead\" text=\"단위가격(기간사업자)\"/><Cell row=\"2\" col=\"1\" text=\"4,570원 / (월, 1P)\" textAlign=\"center\"/><Cell row=\"2\" col=\"2\" text=\"4,570원 / (월, 1P, 1 Km)\" textAlign=\"center\"/><Cell row=\"3\" cssclass=\"CellHead\" text=\"개통비/변경비\"/><Cell row=\"3\" col=\"1\" colspan=\"2\" text=\"10,000원/회선\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_03_00_00_00_00_00_00_00","0","-3","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("35");
            obj.set_text("광케이블");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_flexgrow("1");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00_03_00_00_00_00_00_00_00","461","6","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("36");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_03_00_00_00_00_00_00_00","505","-3","60","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("37");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_03_00_00_00_00_00_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit00_00_00_00_00_00_00_00","0","0","100%","46",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("38");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staSubTitle02_00_03_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_03_00_00_00_00_00_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div06","232","10485","100%","1200",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("39");
            obj.set_text("div06");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_00_01_02","0","0","45.20%","46",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("0");
            obj.set_text("사용희망일");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Calendar("cal00","0","46","100%","40",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("1");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_01_02","20","0","310","86",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00_00_01_02\"/><PanelItem id=\"PanelItem01\" componentid=\"cal00\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_01_01","520","0","310","0",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01_02","0","9686","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("4");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_00_01_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_00_00_01_01\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_00_01_02_00","0","0","45.20%","46",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("5");
            obj.set_text("시작위치");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Edit("edt00","120","153","100%","40",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("6");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_01_02_00","20","0","310","86",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00_00_01_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_00_01_02_00_00","0","0","45.20%","46",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("8");
            obj.set_text("종료위치");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Edit("edt01","591","175","100%","40",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("9");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_01_01_00","520","0","310","86",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00_00_01_02_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt01\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01_02_00","0","9686","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("11");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_00_01_02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_00_00_01_01_00\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_00_01_02_00_01","0","0","45.20%","46",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("12");
            obj.set_text("회선신청수");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Edit("edt00_00","120","153","100%","40",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("13");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_01_02_00_00","20","0","310","86",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("14");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00_00_01_02_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_00\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_00_01_02_00_00_00","0","0","45.20%","46",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("15");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Edit("edt01_00","591","175","100%","40",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("16");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_01_01_00_00","520","0","310","86",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("17");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00_00_01_02_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt01_00\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01_02_00_00","0","9686","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("18");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_00_01_02_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_00_00_01_01_00_00\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("Panel00","20","86","100%","370",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("23");
            obj.set_spacing("10px 0px 0px");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grid00\"/><PanelItem id=\"PanelItem01\" componentid=\"sta00_00_01_00_00_00_01_00_00_00_02_00\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Edit("edt02","167","365","100%","40",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("22");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_00_01_02_01","0","0","45.20%","46",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("19");
            obj.set_text("이용목적");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_01_02_01","20","0","96.08%","86",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("20");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00_00_01_02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt02\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01_02_01","0","291","100.00%","467",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("21");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_00_01_02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Grid("grid00","0","10","100.00%","311",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("24");
            obj.set_fillareatype("allrow");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/><Column size=\"230\"/><Column size=\"230\"/><Column size=\"470\"/></Columns><Rows><Row size=\"44\"/><Row size=\"44\"/><Row size=\"44\"/><Row size=\"88\"/><Row size=\"88\"/></Rows><Band id=\"body\"><Cell cssclass=\"CellHead\" text=\"사용위치\"/><Cell col=\"1\" text=\"건물내\" textAlign=\"center\"/><Cell col=\"2\" textAlign=\"center\" text=\"건물간\"/><Cell col=\"3\" rowspan=\"5\" text=\"건물간 거리 산정기준&#13;&#10;건물 주통신실 MDF 단자함&#13;&#10;다량사용에 따른 할인은 동일구간, 동종 케이블에 한하여 적용되며,&#13;&#10;건물내는 다량 사용할인이 적용되지 않음&#13;&#10;할인율 적용은 코어할인, 거리할인 순으로 적용됨\" textAlign=\"center\"/><Cell row=\"1\" cssclass=\"CellHead\" text=\"단위가격\"/><Cell row=\"1\" col=\"1\" text=\"4,728원 / (월, core, 100m)\" textAlign=\"center\"/><Cell row=\"1\" col=\"2\" textAlign=\"center\" text=\"13,215원 / (월, core, 100m)\"/><Cell row=\"2\" cssclass=\"CellHead\" text=\"개통비/변경비\"/><Cell row=\"2\" col=\"1\" colspan=\"2\" text=\"10,000원/core(사유발생시 1회)\" textAlign=\"center\"/><Cell row=\"3\" cssclass=\"CellHead\" text=\"코어할인\"/><Cell row=\"3\" col=\"1\" colspan=\"2\" text=\"-첫번째 코아의 단가 할인율 : 할인 없음&#13;&#10;-두번째 코아의 단가 할인율 : 20% 할인&#13;&#10;-세번째 이후 코아의 단가 할인율 : 80% 할인\" textAlign=\"center\"/><Cell row=\"4\" cssclass=\"CellHead\" text=\"거리할인\"/><Cell row=\"4\" col=\"1\" colspan=\"2\" text=\"-2Km이상 : 10%할인, 3Km이상 : 12%할인&#13;&#10;-4Km이상 : 14%할인, 5Km이상 : 16%할인&#13;&#10;-6Km이상 : 18%할인, 7Km이상 : 20%할인\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00_00_00_01_00_00_00_02_00","0","97","100%","30",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("25");
            obj.set_text("<b v=\'true\'>공사의 “정보통신서비스 이용약관”에 동의하며</b> 동 약관에 따라 내용과 같이 신청합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_03_00_00_00_00_00_00_00_00","0","-3","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("40");
            obj.set_text("기타사항");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_flexgrow("1");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00_03_00_00_00_00_00_00_00_00","461","6","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("41");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_03_00_00_00_00_00_00_00_00","505","-3","60","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("42");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_03_00_00_00_00_00_00_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit00_00_00_00_00_00_00_00_00","0","0","100%","46",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("43");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staSubTitle02_00_03_00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_03_00_00_00_00_00_00_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div07","180","11220","100%","1650",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("44");
            obj.set_text("div07");
            obj.set_fittocontents("none");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_00_01_02","0","0","100%","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("0");
            obj.set_text("전달사항");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_01_02","20","0","100%","196",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("1");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00_00_01_02\"/><PanelItem id=\"PanelItem01\" componentid=\"TextArea00\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01_02","0","0","100.00%","407",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("2");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_00_01_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","98","70","100%","150",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("3");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("Panel00","20","196","100%","200",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("4");
            obj.set_spacing("10px 0px");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grdCnvyMttr\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Grid("grdCnvyMttr","20","10","100%","180",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("5");
            obj.set_binddataset("dsCnvyMttr");
            obj.set_nodatatext("데이타가 없습니다.");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"81\"/><Column size=\"140\"/><Column size=\"103\"/><Column size=\"900\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"일시\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"내용\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:frstRegDt\" displaytype=\"mask\" maskeditformat=\"####-##-## ##:##:##\" maskedittype=\"string\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:frstRegNm\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:cnvyMttrCn\" cssclass=\"CellEnd\" textAlign=\"left\" tooltiptext=\"bind:cnvyMttrCn\"/></Band></Format></Formats>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01","0","0","310","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("6");
            obj.set_text("사업자등록증");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Button("Button00_01","449","0","107","34",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("7");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Button("btn_file_1_01","566","0","109","34",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("8");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("panBtnFile01","305","0","310","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("9");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_01\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_01\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("panTitle01","20","10","100%","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("10");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_type("vertical");
            obj.set_flexcrossaxiswrapalign("spacebetween");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile01\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","0","48","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("11");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("Static01_01","52","0","9","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("12");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("Static02_01","65","0","13","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("13");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("panFileNum01","0","0","490","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("14");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_01\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1_01","365","6","125","34",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("15");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("panBtnDel01","490","0","490","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("16");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_1_01\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","20","60","100%","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("17");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum01\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel01\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Grid("Grid00_01","20.00","110","100%","40",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("18");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_nodatatext("파일이 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("panFile01","52","764","100%","161",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("19");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_01\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01_00","0","0","310","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("20");
            obj.set_text("개통확인서");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Button("Button00_01_00","449","0","107","34",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("21");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Button("btn_file_1_01_00","566","0","109","34",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("22");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("panBtnFile01_00","305","0","310","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("23");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_01_00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_01_00\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("panTitle01_00","20","10","100%","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("24");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_type("vertical");
            obj.set_flexcrossaxiswrapalign("spacebetween");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile01_00\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","0","48","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("25");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","52","0","9","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("26");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","65","0","13","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("27");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("panFileNum01_00","0","0","490","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("28");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_01_00\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1_01_00","365","6","125","34",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("29");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("panBtnDel01_00","490","0","490","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("30");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_1_01_00\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("Panel00_02_00","20","60","100%","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("31");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel01_00\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Grid("grdOpngCnfdocPath","20.00","110","100%","40",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("32");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_nodatatext("파일이 없습니다.");
            obj.set_binddataset("dsFile2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("panFile01_00","52","764","100%","161",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("33");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"grdOpngCnfdocPath\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_004","10","10","96.08%","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("34");
            obj.set_text("별정시스템관리번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Edit("edtAsaSysMngNo","940","142","100%","40",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("35");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_01_00","30","10","310","86",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("36");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_004\"/><PanelItem id=\"PanelItem02\" componentid=\"edtAsaSysMngNo\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_00_00_01_00","876","150","100%","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("37");
            obj.set_text("신규고객여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Radio("rdoNewCustYn","96","73","100%","40",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("38");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_fittocontents("height");
            var divForm_form_Div07_form_rdoNewCustYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div07_form_rdoNewCustYn_innerdataset", obj);
            divForm_form_Div07_form_rdoNewCustYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">아니요</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div07_form_rdoNewCustYn_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_01_00","876","150","310","86",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("39");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_00_00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoNewCustYn\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01_00","491","315","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("40");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_00_00_01_00\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_01_00_00","30","10","310","86",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("41");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_00_00_01_00_00","876","150","100%","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("42");
            obj.set_text("무상여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Radio("rdoFocYn","96","73","100%","40",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("43");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_fittocontents("height");
            var divForm_form_Div07_form_rdoFocYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div07_form_rdoFocYn_innerdataset", obj);
            divForm_form_Div07_form_rdoFocYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">아니요</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div07_form_rdoFocYn_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_01_00_00","876","150","310","86",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("44");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_00_00_01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoFocYn\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01_00_00","491","315","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("45");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_00_01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_00_00_01_00_00\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divQuick",null,"62","296","400","62",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickMenu");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","17","20","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("0");
            obj.set_text("신청자 정보");
            obj.set_cssclass("btn_WF_Quick_S");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn00_00","17.00","btn00:0","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("1");
            obj.set_text("신청위치 정보");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn00_00_00","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("2");
            obj.set_text("고객정보");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn00_00_00_00","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("3");
            obj.set_text("청구정보");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn00_00_00_00_00","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("4");
            obj.set_text("통신신청정보");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn00_00_00_01","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("5");
            obj.set_text("동선");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn00_00_00_00_01","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("6");
            obj.set_text("광케이블");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn00_00_00_02","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("7");
            obj.set_text("기타사항");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"divQuick:0","296","280","62",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickBtnBg");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.divInfoGuide.form
            obj = new Layout("default","",0,0,this.divForm.form.divInfoGuide.form,
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
                p.edtAplyNo.set_taborder("0");
                p.edtAplyNo.set_cssclass("edt_WF_EdtSch");
                p.edtAplyNo.set_readonly("true");
                p.edtAplyNo.move("0","0",null,"40","0",null);
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
                p.edtAplcntNm.set_taborder("0");
                p.edtAplcntNm.set_cssclass("edt_WF_EdtSch");
                p.edtAplcntNm.set_readonly("true");
                p.edtAplcntNm.move("0","0",null,"40","0",null);
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
            //-- Default Layout : this.divForm.form.Div01.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel01_02_00.set_taborder("0");
                p.staLabel01_02_00.set_text("신청번호");
                p.staLabel01_02_00.set_cssclass("sta_WF_Label");
                p.staLabel01_02_00.move("0","0","100%","46",null,null);

                p.divEdtPop00.set_taborder("1");
                p.divEdtPop00.set_text("Div00");
                p.divEdtPop00.set_formscrollbartype("none none");
                p.divEdtPop00.set_formscrolltype("none");
                p.divEdtPop00.set_flexgrow("1");
                p.divEdtPop00.move("10","56","100%","40",null,null);

                p.Panel01_01_00.set_taborder("2");
                p.Panel01_01_00.set_type("vertical");
                p.Panel01_01_00.set_flexgrow("1");
                p.Panel01_01_00.move("520","0","310","86",null,null);

                p.Pan01_AplyNo.set_taborder("3");
                p.Pan01_AplyNo.set_horizontalgap("20");
                p.Pan01_AplyNo.set_flexcrossaxiswrapalign("start");
                p.Pan01_AplyNo.set_flexwrap("wrap");
                p.Pan01_AplyNo.set_fittocontents("height");
                p.Pan01_AplyNo.set_verticalgap("0");
                p.Pan01_AplyNo.set_spacing("0px 20px 10px 20px");
                p.Pan01_AplyNo.set_cssclass("pal_WF_DtlBg");
                p.Pan01_AplyNo.set_type("horizontal");
                p.Pan01_AplyNo.move("0","97","100%","97",null,null);

                p.staLabel01_00_00.set_taborder("4");
                p.staLabel01_00_00.set_text("신청구분");
                p.staLabel01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00.move("0","0","100%","46",null,null);

                p.edtAplySeNm.set_taborder("5");
                p.edtAplySeNm.set_readonly("true");
                p.edtAplySeNm.move("0","46","100%","40",null,null);

                p.Panel01_00_00.set_taborder("6");
                p.Panel01_00_00.set_type("vertical");
                p.Panel01_00_00.set_flexgrow("1");
                p.Panel01_00_00.move("20","0","100%","86",null,null);

                p.Panel00.set_taborder("7");
                p.Panel00.set_horizontalgap("20");
                p.Panel00.set_flexcrossaxiswrapalign("start");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_verticalgap("0");
                p.Panel00.set_spacing("0px 20px 10px 20px");
                p.Panel00.set_cssclass("pal_WF_DtlBg");
                p.Panel00.move("0","0","100.00%","97",null,null);

                p.staLabel01_02_00_00.set_taborder("8");
                p.staLabel01_02_00_00.set_text("신청자");
                p.staLabel01_02_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_02_00_00.move("0","0","100%","46",null,null);

                p.divEdtPop00_00.set_taborder("9");
                p.divEdtPop00_00.set_text("Div00");
                p.divEdtPop00_00.set_formscrollbartype("none none");
                p.divEdtPop00_00.set_formscrolltype("none");
                p.divEdtPop00_00.set_flexgrow("1");
                p.divEdtPop00_00.move("10","56","100%","40",null,null);

                p.Panel01_01_00_00.set_taborder("10");
                p.Panel01_01_00_00.set_type("vertical");
                p.Panel01_01_00_00.set_flexgrow("1");
                p.Panel01_01_00_00.move("520","0","310","86",null,null);

                p.staLabel01_00_00_00_01_00.set_taborder("11");
                p.staLabel01_00_00_00_01_00.set_text("휴대폰 번호");
                p.staLabel01_00_00_00_01_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00_00_01_00.move("940","97","100%","46",null,null);

                p.edtAplcntMblTelno.set_taborder("12");
                p.edtAplcntMblTelno.set_readonly("true");
                p.edtAplcntMblTelno.move("940","142","100%","40",null,null);

                p.Panel01_00_00_00_01_00.set_taborder("13");
                p.Panel01_00_00_00_01_00.set_type("vertical");
                p.Panel01_00_00_00_01_00.set_flexgrow("1");
                p.Panel01_00_00_00_01_00.move("940","97","310","86",null,null);

                p.Panel00_00_00.set_taborder("14");
                p.Panel00_00_00.set_horizontalgap("20");
                p.Panel00_00_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_00.set_flexwrap("wrap");
                p.Panel00_00_00.set_fittocontents("height");
                p.Panel00_00_00.set_verticalgap("0");
                p.Panel00_00_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_00.set_type("horizontal");
                p.Panel00_00_00.move("0","97","100%","97",null,null);

                p.staLabel01_00_00_00.set_taborder("15");
                p.staLabel01_00_00_00.set_text("회사명");
                p.staLabel01_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00_00.move("0","0","100%","46",null,null);

                p.edtCtrtInstNm.set_taborder("16");
                p.edtCtrtInstNm.set_readonly("true");
                p.edtCtrtInstNm.move("0","46","100%","40",null,null);

                p.Panel01_00_00_00.set_taborder("17");
                p.Panel01_00_00_00.set_type("vertical");
                p.Panel01_00_00_00.set_flexgrow("1");
                p.Panel01_00_00_00.move("20","0","100%","86",null,null);

                p.Panel00_01.set_taborder("18");
                p.Panel00_01.set_horizontalgap("20");
                p.Panel00_01.set_flexcrossaxiswrapalign("start");
                p.Panel00_01.set_flexwrap("wrap");
                p.Panel00_01.set_fittocontents("height");
                p.Panel00_01.set_verticalgap("0");
                p.Panel00_01.set_spacing("0px 20px 10px 20px");
                p.Panel00_01.set_cssclass("pal_WF_DtlBg");
                p.Panel00_01.move("0","0","100.00%","97",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div01.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div00.form
            obj = new Layout("default","",0,0,this.divForm.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel01_00_00_00_00.set_taborder("0");
                p.staLabel01_00_00_00_00.set_text("위치구분");
                p.staLabel01_00_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel01_00_00_00_00.move("10","10","100%","46",null,null);

                p.Panel01_00_00_00_00.set_taborder("1");
                p.Panel01_00_00_00_00.set_type("horizontal");
                p.Panel01_00_00_00_00.set_flexgrow("1");
                p.Panel01_00_00_00_00.set_flexwrap("wrap");
                p.Panel01_00_00_00_00.move("30","10","310","86",null,null);

                p.staLabel01_02_00_00.set_taborder("2");
                p.staLabel01_02_00_00.set_text("위치정보(수기입력)");
                p.staLabel01_02_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel01_02_00_00.move("876","150","100%","46",null,null);

                p.Panel01_01_00_00.set_taborder("3");
                p.Panel01_01_00_00.set_type("vertical");
                p.Panel01_01_00_00.set_flexgrow("1");
                p.Panel01_01_00_00.move("876","150","310","86",null,null);

                p.Panel00.set_taborder("7");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.move("0","46","100%","40",null,null);

                p.Panel01.set_taborder("9");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.move("0","46","100%","40",null,null);

                p.btn00.set_taborder("10");
                p.btn00.set_text("룸번호입력창");
                p.btn00.set_fittocontents("width");
                p.btn00.move("664","49","106","40",null,null);

                p.Panel00_00_00.set_taborder("4");
                p.Panel00_00_00.set_horizontalgap("20");
                p.Panel00_00_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_00.set_flexwrap("wrap");
                p.Panel00_00_00.set_fittocontents("height");
                p.Panel00_00_00.set_verticalgap("0");
                p.Panel00_00_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_00.set_type("horizontal");
                p.Panel00_00_00.move("491","315","100.00%","97",null,null);

                p.edt00.set_taborder("8");
                p.edt00.set_flexgrow("1");
                p.edt00.move("704","74","50%","40",null,null);

                p.cboRgn.set_taborder("6");
                p.cboRgn.set_displaynulltext("선택");
                p.cboRgn.set_innerdataset("dsTspLocCd");
                p.cboRgn.set_codecolumn("cdId");
                p.cboRgn.set_datacolumn("cdNm");
                p.cboRgn.set_value("");
                p.cboRgn.set_index("-1");
                p.cboRgn.move("289","64","50%","40",null,null);

                p.cmbPstnSe.set_taborder("5");
                p.cmbPstnSe.set_displaynulltext("선택");
                p.cmbPstnSe.set_innerdataset("dsBldgSeList");
                p.cmbPstnSe.set_codecolumn("cdId");
                p.cmbPstnSe.set_datacolumn("cdNm");
                p.cmbPstnSe.set_value("");
                p.cmbPstnSe.set_index("-1");
                p.cmbPstnSe.move("97","272","50%","40",null,null);
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
            //-- Default Layout : this.divForm.form.Div02.form.divEdtPop.form
            obj = new Layout("default","",0,0,this.divForm.form.Div02.form.divEdtPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.edtBuilcZip.set_taborder("0");
                p.edtBuilcZip.set_cssclass("edt_WF_EdtSch");
                p.edtBuilcZip.set_readonly("true");
                p.edtBuilcZip.set_displaynulltext("우편번호 검색");
                p.edtBuilcZip.move("0","0",null,"40","0",null);
            	}
            );
            this.divForm.form.Div02.form.divEdtPop.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div02.form.divEdtPop.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div02.form.divEdtPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.Div02.form.divEdtPop.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div02.form
            obj = new Layout("default","",0,0,this.divForm.form.Div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel01_02_00.set_taborder("0");
                p.staLabel01_02_00.set_text("고객유형");
                p.staLabel01_02_00.set_cssclass("sta_WF_Label_E");
                p.staLabel01_02_00.move("0","0","47.06%","46",null,null);

                p.Panel01_01_00.set_taborder("1");
                p.Panel01_01_00.set_type("vertical");
                p.Panel01_01_00.set_flexgrow("1");
                p.Panel01_01_00.move("20","0","480","86",null,null);

                p.Panel00_00.set_taborder("2");
                p.Panel00_00.set_horizontalgap("20");
                p.Panel00_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00.set_flexwrap("nowrap");
                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.set_verticalgap("0");
                p.Panel00_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00.set_type("horizontal");
                p.Panel00_00.move("0","0","100.00%","97",null,null);

                p.radCustTypeCd.set_taborder("3");
                p.radCustTypeCd.set_innerdataset(divForm_form_Div02_form_radCustTypeCd_innerdataset);
                p.radCustTypeCd.set_codecolumn("codecolumn");
                p.radCustTypeCd.set_datacolumn("datacolumn");
                p.radCustTypeCd.set_columncount("-1");
                p.radCustTypeCd.set_rowcount("-1");
                p.radCustTypeCd.set_value("CMMCUST002");
                p.radCustTypeCd.set_index("0");
                p.radCustTypeCd.move("96","73","100%","40",null,null);

                p.staLabel01_00_00.set_taborder("4");
                p.staLabel01_00_00.set_text("계약자명");
                p.staLabel01_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel01_00_00.move("0","0","96.08%","46",null,null);

                p.edtCustInstNm.set_taborder("5");
                p.edtCustInstNm.set_readonly("true");
                p.edtCustInstNm.move("0","46","100%","40",null,null);

                p.Panel01_00_00.set_taborder("6");
                p.Panel01_00_00.set_type("vertical");
                p.Panel01_00_00.set_flexgrow("1");
                p.Panel01_00_00.move("20","0","96.08%","86",null,null);

                p.Panel00.set_taborder("7");
                p.Panel00.set_horizontalgap("20");
                p.Panel00.set_flexcrossaxiswrapalign("start");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_verticalgap("0");
                p.Panel00.set_spacing("0px 20px 10px 20px");
                p.Panel00.set_cssclass("pal_WF_DtlBg");
                p.Panel00.move("0","97","100.00%","97",null,null);

                p.staLabel01_00_00_00_00.set_taborder("8");
                p.staLabel01_00_00_00_00.set_text("대표자성명");
                p.staLabel01_00_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel01_00_00_00_00.move("10","10","96.08%","46",null,null);

                p.Panel01_00_00_00_00.set_taborder("9");
                p.Panel01_00_00_00_00.set_type("vertical");
                p.Panel01_00_00_00_00.set_flexgrow("1");
                p.Panel01_00_00_00_00.move("30","10","310","86",null,null);

                p.staLabel01_02_00_00.set_taborder("10");
                p.staLabel01_02_00_00.set_text("대표전화번호");
                p.staLabel01_02_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_02_00_00.move("876","150","100%","46",null,null);

                p.Panel01_01_00_00.set_taborder("11");
                p.Panel01_01_00_00.set_type("vertical");
                p.Panel01_01_00_00.set_flexgrow("1");
                p.Panel01_01_00_00.move("876","150","310","86",null,null);

                p.Panel00_00_00.set_taborder("12");
                p.Panel00_00_00.set_horizontalgap("20");
                p.Panel00_00_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_00.set_flexwrap("wrap");
                p.Panel00_00_00.set_fittocontents("height");
                p.Panel00_00_00.set_verticalgap("0");
                p.Panel00_00_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_00.set_type("horizontal");
                p.Panel00_00_00.move("491","315","100.00%","97",null,null);

                p.edtRprsvNm.set_taborder("13");
                p.edtRprsvNm.set_readonly("false");
                p.edtRprsvNm.move("940","142","100%","40",null,null);

                p.edtRprsTelno.set_taborder("14");
                p.edtRprsTelno.set_readonly("true");
                p.edtRprsTelno.move("940","142","100%","40",null,null);

                p.staLabel01_00_00_00_00_00.set_taborder("15");
                p.staLabel01_00_00_00_00_00.set_text("사업자 등록번호");
                p.staLabel01_00_00_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel01_00_00_00_00_00.move("10","10","96.08%","46",null,null);

                p.edtBrno.set_taborder("16");
                p.edtBrno.set_readonly("true");
                p.edtBrno.move("940","142","100%","40",null,null);

                p.Panel01_00_00_00_00_00.set_taborder("17");
                p.Panel01_00_00_00_00_00.set_type("vertical");
                p.Panel01_00_00_00_00_00.set_flexgrow("1");
                p.Panel01_00_00_00_00_00.move("30","10","310","86",null,null);

                p.edt00_01_01_01.set_taborder("18");
                p.edt00_01_01_01.set_text("법인등록번호");
                p.edt00_01_01_01.set_cssclass("sta_WF_Label");
                p.edt00_01_01_01.move("876","150","100%","46",null,null);

                p.edtCrno.set_taborder("19");
                p.edtCrno.set_readonly("true");
                p.edtCrno.move("940","142","100%","40",null,null);

                p.Panel01_01_00_00_00.set_taborder("20");
                p.Panel01_01_00_00_00.set_type("vertical");
                p.Panel01_01_00_00_00.set_flexgrow("1");
                p.Panel01_01_00_00_00.move("876","150","310","86",null,null);

                p.Panel00_00_00_00.set_taborder("21");
                p.Panel00_00_00_00.set_horizontalgap("20");
                p.Panel00_00_00_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_00_00.set_flexwrap("wrap");
                p.Panel00_00_00_00.set_fittocontents("height");
                p.Panel00_00_00_00.set_verticalgap("0");
                p.Panel00_00_00_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_00_00.set_type("horizontal");
                p.Panel00_00_00_00.move("491","315","100.00%","97",null,null);

                p.staLabel01_00_00_00_00_00_00.set_taborder("22");
                p.staLabel01_00_00_00_00_00_00.set_text("업종");
                p.staLabel01_00_00_00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00_00_00_00_00.move("10","10","96.08%","46",null,null);

                p.edtTpbiz.set_taborder("23");
                p.edtTpbiz.set_readonly("true");
                p.edtTpbiz.move("940","142","100%","40",null,null);

                p.Panel01_00_00_00_00_00_00.set_taborder("24");
                p.Panel01_00_00_00_00_00_00.set_type("vertical");
                p.Panel01_00_00_00_00_00_00.set_flexgrow("1");
                p.Panel01_00_00_00_00_00_00.move("30","10","310","86",null,null);

                p.edt00_01_01_00_1.set_taborder("25");
                p.edt00_01_01_00_1.set_text("업태");
                p.edt00_01_01_00_1.set_cssclass("sta_WF_Label");
                p.edt00_01_01_00_1.move("876","150","100%","46",null,null);

                p.edtBzstat.set_taborder("26");
                p.edtBzstat.set_readonly("true");
                p.edtBzstat.move("940","142","100%","40",null,null);

                p.Panel01_01_00_00_00_00.set_taborder("27");
                p.Panel01_01_00_00_00_00.set_type("vertical");
                p.Panel01_01_00_00_00_00.set_flexgrow("1");
                p.Panel01_01_00_00_00_00.move("876","150","310","86",null,null);

                p.Panel00_00_00_00_00.set_taborder("28");
                p.Panel00_00_00_00_00.set_horizontalgap("20");
                p.Panel00_00_00_00_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_00_00_00.set_flexwrap("wrap");
                p.Panel00_00_00_00_00.set_fittocontents("height");
                p.Panel00_00_00_00_00.set_verticalgap("0");
                p.Panel00_00_00_00_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_00_00_00.set_type("horizontal");
                p.Panel00_00_00_00_00.move("491","315","100.00%","97",null,null);

                p.staLabel00_00.set_taborder("29");
                p.staLabel00_00.set_text("사업자등록주소/우편번호");
                p.staLabel00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00.move("0.00","0","100%","46",null,null);

                p.divEdtPop.set_taborder("30");
                p.divEdtPop.set_text("Div00");
                p.divEdtPop.set_formscrollbartype("none none");
                p.divEdtPop.set_formscrolltype("none");
                p.divEdtPop.set_flexgrow("1");
                p.divEdtPop.move("780.00","635","150","40",null,null);

                p.edtBuilcAddr.set_taborder("31");
                p.edtBuilcAddr.set_readonly("true");
                p.edtBuilcAddr.set_flexgrow("2");
                p.edtBuilcAddr.set_displaynulltext("주소");
                p.edtBuilcAddr.move("360","637","305","40",null,null);

                p.panAddress.set_taborder("32");
                p.panAddress.set_horizontalgap("10");
                p.panAddress.move("200","641","100%","45",null,null);

                p.edtBuilcAddrDtl.set_taborder("33");
                p.edtBuilcAddrDtl.set_displaynulltext("상세주소");
                p.edtBuilcAddrDtl.set_readonly("true");
                p.edtBuilcAddrDtl.move("0.00","46","100%","40",null,null);

                p.Panel00_00_01.set_taborder("34");
                p.Panel00_00_01.set_type("vertical");
                p.Panel00_00_01.set_flexgrow("1");
                p.Panel00_00_01.set_fittocontents("height");
                p.Panel00_00_01.set_verticalgap("10");
                p.Panel00_00_01.set_minwidth("");
                p.Panel00_00_01.move("20.00","0","100%","156",null,null);

                p.Panel00_03_00.set_taborder("35");
                p.Panel00_03_00.set_horizontalgap("20");
                p.Panel00_03_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_03_00.set_flexwrap("wrap");
                p.Panel00_03_00.set_fittocontents("height");
                p.Panel00_03_00.set_verticalgap("0");
                p.Panel00_03_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_03_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_03_00.set_type("horizontal");
                p.Panel00_03_00.move("0","60","100.00%","166",null,null);

                p.staLabel00_02_01.set_taborder("36");
                p.staLabel00_02_01.set_text("사업자등록증");
                p.staLabel00_02_01.set_cssclass("sta_WF_Label");
                p.staLabel00_02_01.set_fittocontents("width");
                p.staLabel00_02_01.move("0","44","305","46",null,null);

                p.panBtnFile01.set_taborder("37");
                p.panBtnFile01.set_flexgrow("1");
                p.panBtnFile01.set_flexmainaxisalign("end");
                p.panBtnFile01.set_horizontalgap("10");
                p.panBtnFile01.move("433","58","305","46",null,null);

                p.panTitle01.set_taborder("38");
                p.panTitle01.set_cssclass("pan_WF_FileTitle");
                p.panTitle01.set_flexwrap("wrap");
                p.panTitle01.set_fittocontents("height");
                p.panTitle01.move("0","124","100%","46",null,null);

                p.Static00_01.set_taborder("39");
                p.Static00_01.set_text("파일수 : ");
                p.Static00_01.set_fittocontents("width");
                p.Static00_01.move("88","123","48","46",null,null);

                p.Static01_01.set_taborder("40");
                p.Static01_01.set_text("0");
                p.Static01_01.set_fittocontents("width");
                p.Static01_01.move("165","143","9","46",null,null);

                p.Static02_01.set_taborder("41");
                p.Static02_01.set_text("개");
                p.Static02_01.set_fittocontents("width");
                p.Static02_01.move("293","131","13","46",null,null);

                p.panFileNum01.set_taborder("42");
                p.panFileNum01.set_flexgrow("1");
                p.panFileNum01.set_horizontalgap("4");
                p.panFileNum01.move("20","190","305","46",null,null);

                p.panBtnDel01.set_taborder("43");
                p.panBtnDel01.set_flexcrossaxisalign("center");
                p.panBtnDel01.set_flexmainaxisalign("end");
                p.panBtnDel01.set_flexgrow("1");
                p.panBtnDel01.move("517","141","305","46",null,null);

                p.Panel00_02.set_taborder("44");
                p.Panel00_02.move("20","51","100%","46",null,null);

                p.grdBuilc.set_taborder("45");
                p.grdBuilc.set_binddataset("dsFile1");
                p.grdBuilc.set_autofittype("col");
                p.grdBuilc.set_cssclass("grd_WF_FileAdd");
                p.grdBuilc.set_nodatatext("파일이 없습니다.");
                p.grdBuilc.move("20.00","114","100%","40",null,null);

                p.panFile01.set_taborder("46");
                p.panFile01.set_fittocontents("height");
                p.panFile01.set_spacing("10px 20px 10px 20px");
                p.panFile01.set_flexwrap("wrap");
                p.panFile01.set_cssclass("pal_WF_DtlBg");
                p.panFile01.set_verticalgap("4");
                p.panFile01.move("0","42","100.00%","161",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div02.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div02.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div02.form,
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
                p.staLabel01_00_00.set_taborder("0");
                p.staLabel01_00_00.set_text("기존 청구정보유지");
                p.staLabel01_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel01_00_00.move("0","0","200","46",null,null);

                p.Panel01_00_00.set_taborder("1");
                p.Panel01_00_00.set_type("vertical");
                p.Panel01_00_00.set_flexgrow("1");
                p.Panel01_00_00.move("20","0","95.98%","86",null,null);

                p.Panel02.set_taborder("61");
                p.Panel02.getSetter("text").set("청구정보 찾기");
                p.Panel02.set_flexcrossaxisalign("center");
                p.Panel02.set_flexcrossaxiswrapalign("start");
                p.Panel02.set_type("horizontal");
                p.Panel02.set_flexmainaxisalign("spacebetween");
                p.Panel02.move("0","0","100%","46",null,null);

                p.Panel00.set_taborder("2");
                p.Panel00.set_horizontalgap("20");
                p.Panel00.set_flexcrossaxiswrapalign("start");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_verticalgap("0");
                p.Panel00.set_spacing("0px 20px 10px 20px");
                p.Panel00.set_cssclass("pal_WF_DtlBg");
                p.Panel00.move("0","97","100.00%","97",null,null);

                p.radItgrnClmYn.set_taborder("3");
                p.radItgrnClmYn.set_innerdataset(divForm_form_Div03_form_radItgrnClmYn_innerdataset);
                p.radItgrnClmYn.set_codecolumn("codecolumn");
                p.radItgrnClmYn.set_datacolumn("datacolumn");
                p.radItgrnClmYn.set_columncount("-1");
                p.radItgrnClmYn.set_rowcount("-1");
                p.radItgrnClmYn.set_value("");
                p.radItgrnClmYn.set_index("-1");
                p.radItgrnClmYn.move("96","73","100%","40",null,null);

                p.staLabel01_00_00_00.set_taborder("4");
                p.staLabel01_00_00_00.set_text("납부담당자 동일여부");
                p.staLabel01_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel01_00_00_00.move("0","0","92.25%","46",null,null);

                p.rdoPayPicSmYn.set_taborder("5");
                p.rdoPayPicSmYn.set_innerdataset(divForm_form_Div03_form_rdoPayPicSmYn_innerdataset);
                p.rdoPayPicSmYn.set_codecolumn("codecolumn");
                p.rdoPayPicSmYn.set_datacolumn("datacolumn");
                p.rdoPayPicSmYn.set_columncount("-1");
                p.rdoPayPicSmYn.set_rowcount("-1");
                p.rdoPayPicSmYn.set_value("");
                p.rdoPayPicSmYn.set_index("-1");
                p.rdoPayPicSmYn.move("96","73","100%","40",null,null);

                p.Panel01_00_00_00.set_taborder("6");
                p.Panel01_00_00_00.set_type("vertical");
                p.Panel01_00_00_00.set_flexgrow("1");
                p.Panel01_00_00_00.move("20","0","95.98%","86",null,null);

                p.Panel00_00.set_taborder("7");
                p.Panel00_00.set_horizontalgap("20");
                p.Panel00_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00.set_flexwrap("wrap");
                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.set_verticalgap("0");
                p.Panel00_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00.move("0","97","100.00%","97",null,null);

                p.staLabel01_00_00_00_00.set_taborder("8");
                p.staLabel01_00_00_00_00.set_text("납부담당자 성명");
                p.staLabel01_00_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel01_00_00_00_00.move("10","10","96.08%","46",null,null);

                p.edtPayPicNm.set_taborder("9");
                p.edtPayPicNm.set_readonly("false");
                p.edtPayPicNm.move("940","142","100%","40",null,null);

                p.Panel01_00_00_00_00.set_taborder("10");
                p.Panel01_00_00_00_00.set_type("vertical");
                p.Panel01_00_00_00_00.set_flexgrow("1");
                p.Panel01_00_00_00_00.move("30","10","310","86",null,null);

                p.staLabel01_02_00_00.set_taborder("11");
                p.staLabel01_02_00_00.set_text("청구고객번호");
                p.staLabel01_02_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel01_02_00_00.move("876","150","100%","46",null,null);

                p.edtCustNo.set_taborder("12");
                p.edtCustNo.set_readonly("false");
                p.edtCustNo.move("940","142","100%","40",null,null);

                p.Panel01_01_00_00.set_taborder("13");
                p.Panel01_01_00_00.set_type("vertical");
                p.Panel01_01_00_00.set_flexgrow("1");
                p.Panel01_01_00_00.move("876","150","310","86",null,null);

                p.Panel00_00_00.set_taborder("14");
                p.Panel00_00_00.set_horizontalgap("20");
                p.Panel00_00_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_00.set_flexwrap("wrap");
                p.Panel00_00_00.set_fittocontents("height");
                p.Panel00_00_00.set_verticalgap("0");
                p.Panel00_00_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_00.set_type("horizontal");
                p.Panel00_00_00.move("491","315","100.00%","97",null,null);

                p.staLabel01_00_00_00_00_00.set_taborder("15");
                p.staLabel01_00_00_00_00_00.set_text("납부담당자 부서");
                p.staLabel01_00_00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00_00_00_00.move("10","10","96.08%","46",null,null);

                p.edtPayPicDeptNm.set_taborder("16");
                p.edtPayPicDeptNm.set_readonly("false");
                p.edtPayPicDeptNm.set_visible("false");
                p.edtPayPicDeptNm.move("940","142","100%","40",null,null);

                p.Panel01_00_00_00_00_00.set_taborder("17");
                p.Panel01_00_00_00_00_00.set_type("vertical");
                p.Panel01_00_00_00_00_00.set_flexgrow("1");
                p.Panel01_00_00_00_00_00.move("30","10","310","86",null,null);

                p.staLabel01_02_00_00_00.set_taborder("18");
                p.staLabel01_02_00_00_00.set_text("청구서용 이메일");
                p.staLabel01_02_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel01_02_00_00_00.move("876","150","100%","46",null,null);

                p.edt00_01_01_00_00_00_00_00.set_taborder("19");
                p.edt00_01_01_00_00_00_00_00.set_readonly("false");
                p.edt00_01_01_00_00_00_00_00.move("940","142","100%","40",null,null);

                p.Panel01_01_00_00_00.set_taborder("20");
                p.Panel01_01_00_00_00.set_type("vertical");
                p.Panel01_01_00_00_00.set_flexgrow("1");
                p.Panel01_01_00_00_00.move("876","150","310","86",null,null);

                p.Panel00_00_00_00.set_taborder("21");
                p.Panel00_00_00_00.set_horizontalgap("20");
                p.Panel00_00_00_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_00_00.set_flexwrap("wrap");
                p.Panel00_00_00_00.set_fittocontents("height");
                p.Panel00_00_00_00.set_verticalgap("0");
                p.Panel00_00_00_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_00_00.set_type("horizontal");
                p.Panel00_00_00_00.move("491","315","100.00%","97",null,null);

                p.staLabel01_00_00_00_00_01.set_taborder("22");
                p.staLabel01_00_00_00_00_01.set_text("납부담당자 전화번호");
                p.staLabel01_00_00_00_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel01_00_00_00_00_01.move("10","10","96.08%","46",null,null);

                p.edt00_01_04.set_taborder("23");
                p.edt00_01_04.set_readonly("false");
                p.edt00_01_04.move("940","142","100%","40",null,null);

                p.Panel01_00_00_00_00_01.set_taborder("24");
                p.Panel01_00_00_00_00_01.set_type("vertical");
                p.Panel01_00_00_00_00_01.set_flexgrow("1");
                p.Panel01_00_00_00_00_01.move("30","10","310","86",null,null);

                p.Panel01_00_00_02.set_taborder("25");
                p.Panel01_00_00_02.set_text("전자세금계산서용 이메일");
                p.Panel01_00_00_02.set_cssclass("sta_WF_Label");
                p.Panel01_00_00_02.move("876","150","100%","46",null,null);

                p.edt00_01_014.set_taborder("26");
                p.edt00_01_014.set_readonly("false");
                p.edt00_01_014.move("940","142","100%","40",null,null);

                p.Panel01_01_00_00_01.set_taborder("27");
                p.Panel01_01_00_00_01.set_type("vertical");
                p.Panel01_01_00_00_01.set_flexgrow("1");
                p.Panel01_01_00_00_01.move("876","150","310","86",null,null);

                p.Panel00_00_00_01.set_taborder("28");
                p.Panel00_00_00_01.set_horizontalgap("20");
                p.Panel00_00_00_01.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_00_01.set_flexwrap("wrap");
                p.Panel00_00_00_01.set_fittocontents("height");
                p.Panel00_00_00_01.set_verticalgap("0");
                p.Panel00_00_00_01.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_00_01.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_00_01.set_type("horizontal");
                p.Panel00_00_00_01.move("491","315","100.00%","97",null,null);

                p.staLabel01_00_004.set_taborder("29");
                p.staLabel01_00_004.set_text("납부담당자 휴대전화번호");
                p.staLabel01_00_004.set_cssclass("sta_WF_Label_E");
                p.staLabel01_00_004.move("10","10","96.08%","46",null,null);

                p.edtPayPicMblTelno.set_taborder("30");
                p.edtPayPicMblTelno.set_readonly("false");
                p.edtPayPicMblTelno.move("940","142","100%","40",null,null);

                p.Panel01_00_00_00_00_01_00.set_taborder("31");
                p.Panel01_00_00_00_00_01_00.set_type("vertical");
                p.Panel01_00_00_00_00_01_00.set_flexgrow("1");
                p.Panel01_00_00_00_00_01_00.move("30","10","310","86",null,null);

                p.staLabel01_02_00_00_01_00.set_taborder("32");
                p.staLabel01_02_00_00_01_00.set_text("청구방식");
                p.staLabel01_02_00_00_01_00.set_cssclass("sta_WF_Label");
                p.staLabel01_02_00_00_01_00.move("876","150","100%","46",null,null);

                p.Panel01_01_00_00_01_00.set_taborder("33");
                p.Panel01_01_00_00_01_00.set_type("vertical");
                p.Panel01_01_00_00_01_00.set_flexgrow("1");
                p.Panel01_01_00_00_01_00.move("876","150","310","86",null,null);

                p.Panel00_00_00_01_00.set_taborder("34");
                p.Panel00_00_00_01_00.set_horizontalgap("20");
                p.Panel00_00_00_01_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_00_01_00.set_flexwrap("wrap");
                p.Panel00_00_00_01_00.set_fittocontents("height");
                p.Panel00_00_00_01_00.set_verticalgap("0");
                p.Panel00_00_00_01_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_00_01_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_00_01_00.set_type("horizontal");
                p.Panel00_00_00_01_00.move("491","315","100.00%","97",null,null);

                p.rdoClmMtd.set_taborder("35");
                p.rdoClmMtd.set_innerdataset(divForm_form_Div03_form_rdoClmMtd_innerdataset);
                p.rdoClmMtd.set_codecolumn("codecolumn");
                p.rdoClmMtd.set_datacolumn("datacolumn");
                p.rdoClmMtd.set_columncount("-1");
                p.rdoClmMtd.set_rowcount("-1");
                p.rdoClmMtd.set_fittocontents("height");
                p.rdoClmMtd.set_value("");
                p.rdoClmMtd.set_index("-1");
                p.rdoClmMtd.move("96","73","100%","40",null,null);

                p.staLabel00_00.set_taborder("36");
                p.staLabel00_00.set_text("청구지주소/우편번호");
                p.staLabel00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00.move("0.00","0","100%","46",null,null);

                p.divEdtPop.set_taborder("37");
                p.divEdtPop.set_text("Div00");
                p.divEdtPop.set_formscrollbartype("none none");
                p.divEdtPop.set_formscrolltype("none");
                p.divEdtPop.set_flexgrow("1");
                p.divEdtPop.move("780.00","635","150","40",null,null);

                p.edtClmAddr.set_taborder("38");
                p.edtClmAddr.set_readonly("true");
                p.edtClmAddr.set_flexgrow("2");
                p.edtClmAddr.set_displaynulltext("주소");
                p.edtClmAddr.move("360","637","305","40",null,null);

                p.panAddress.set_taborder("39");
                p.panAddress.set_horizontalgap("10");
                p.panAddress.move("200","641","100%","45",null,null);

                p.edtClmAddrDtl.set_taborder("40");
                p.edtClmAddrDtl.set_displaynulltext("상세주소");
                p.edtClmAddrDtl.move("0.00","46","100%","40",null,null);

                p.Panel00_00_01.set_taborder("41");
                p.Panel00_00_01.set_type("vertical");
                p.Panel00_00_01.set_flexgrow("1");
                p.Panel00_00_01.set_fittocontents("height");
                p.Panel00_00_01.set_verticalgap("10");
                p.Panel00_00_01.set_minwidth("");
                p.Panel00_00_01.move("20.00","0","100%","156",null,null);

                p.Panel00_03_00.set_taborder("42");
                p.Panel00_03_00.set_horizontalgap("20");
                p.Panel00_03_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_03_00.set_flexwrap("wrap");
                p.Panel00_03_00.set_fittocontents("height");
                p.Panel00_03_00.set_verticalgap("0");
                p.Panel00_03_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_03_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_03_00.set_type("horizontal");
                p.Panel00_03_00.move("0","60","100.00%","166",null,null);

                p.staLabel00_03_00_00_00.set_taborder("43");
                p.staLabel00_03_00_00_00.set_text("개인정보 수집·이용 안내");
                p.staLabel00_03_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_03_00_00_00.move("10","98","100%","46",null,null);

                p.TextArea00.set_taborder("44");
                p.TextArea00.set_readonly("false");
                p.TextArea00.set_value("1. 개인정보의 수집ㆍ이용 목적\n  입주자 서비스 : 포털 통신 사용/변경/일시이용중단/일시이용중단해제/해지 신청 시 작성건의 접수와 처리\n  별정통신시스템 : 서비스 가입/변경/해지, A/S,요금청구,본인확인,이용요금 상담 및 추심, 이용불만 처리,보증금환급금\n  인터넷청구 시스템 : 공항시설사용료 청구 및 납부처리\n\n2. 수집하려는 개인정보의 항목\n  별정통신시스템 : 필수항목 : 성명, 전화번호, 휴대폰번호\n  입주자서비스포털 인터넷청구시스템 : 필수항목 : 납부담당자 이름,납부담당자 일반전화번호 납부담당자 휴대폰번호,청구지주소\n\n3. 개인정보의 보유 및 이용 기간\n  입주1. 개인정보의 수집ㆍ이용 목적\n  입주자 서비스 : 포털 통신 사용/변경/일시이용중단/일시이용중단해제/해지 신청 시 작성건의 접수와 처리\n  별정통신시스템 : 서비스 가입/변경/해지, A/S,요금청구,본인확인,이용요금 상담 및 추심, 이용불만 처리,보증금환급금\n  인터넷청구 시스템 : 공항시설사용료 청구 및 납부처리\n\n2. 수집하려는 개인정보의 항목\n  별정통신시스템 : 필수항목 : 성명, 전화번호, 휴대폰번호\n  입주자서비스포털 인터넷청구시스템 : 필수항목 : 납부담당자 이름,납부담당자 일반전화번호 납부담당자 휴대폰번호,청구지주소\n\n3. 개인정보의 보유 및 이용 기간\n  입주자서비스포털 : 계약종료 후 3년, 회원탈퇴시 까지\n  별정통신시스템 : 서비스 해지월 기중 6개월까지\n※ 단, 요금 미/과납이나 분쟁 발생 겨우, 해결시점까지 보요\n\n3. 인터넷청구시스템 : 거래 종료 후 부터 5년\n\n4. 동의를 거부할 권리와 거부에 따른 불이익 내용\n  귀하는 개인정보 수집에 거부할 권리가 있으며, 필수항목 수집을 거부할 경우 통신사용/변경/일시이용중단 /일시이용중단해지 승인요청서 작성건의 신청을 할 수 없습니다.");
                p.TextArea00.move("171","111","100%","180",null,null);

                p.Panel00_00_04.set_taborder("45");
                p.Panel00_00_04.set_type("vertical");
                p.Panel00_00_04.set_minwidth("");
                p.Panel00_00_04.move("10.00","98","100%","105",null,null);

                p.Panel00_00_03_00_00_00.set_taborder("46");
                p.Panel00_00_03_00_00_00.set_type("vertical");
                p.Panel00_00_03_00_00_00.set_flexgrow("1");
                p.Panel00_00_03_00_00_00.set_verticalgap("10");
                p.Panel00_00_03_00_00_00.set_minwidth("");
                p.Panel00_00_03_00_00_00.move("10.00","98","100%","161",null,null);

                p.Panel09.set_taborder("47");
                p.Panel09.set_horizontalgap("20");
                p.Panel09.set_flexcrossaxiswrapalign("start");
                p.Panel09.set_flexwrap("wrap");
                p.Panel09.set_fittocontents("height");
                p.Panel09.set_verticalgap("0");
                p.Panel09.set_spacing("0px 20px 10px 20px");
                p.Panel09.set_cssclass("pal_WF_DtlBg");
                p.Panel09.set_type("horizontal");
                p.Panel09.move("0","60","100.00%","172",null,null);

                p.staLabel00_03_00_00_00_00.set_taborder("48");
                p.staLabel00_03_00_00_00_00.set_text("개인정보 수집 (필수) 동의여부");
                p.staLabel00_03_00_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_03_00_00_00_00.move("10","98","200","46",null,null);

                p.chkPrvcEsntlClctAgreYn.set_taborder("49");
                p.chkPrvcEsntlClctAgreYn.set_value("false");
                p.chkPrvcEsntlClctAgreYn.move("200.00","128","150","46",null,null);

                p.Panel01.set_taborder("50");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.move("41","937","100%","40",null,null);

                p.TextArea00_01.set_taborder("51");
                p.TextArea00_01.set_readonly("false");
                p.TextArea00_01.set_value("개인정보(선택정보) 사용에 관한 안내\n선택항목에 해당하는 정보를 입력하지 않으셔도 서비스 이용에는 제한이 없습니다.\n수집하는 개인정보의 선택항목 외 모든 내용은 필수항목에서 안내된 내용과 동일합니다.\n○수집하는 개인정보의 선택항목\n입주자서비스포털 인터넷청구시스템 청구서용 이메일주소, 전자세금계산서용 이메일주소(단, 청구방식 이메일 선택시 \"청구서용 이메일주소\" 필수)");
                p.TextArea00_01.move("171","111","100%","180",null,null);

                p.Panel00_00_00_00_00.set_taborder("52");
                p.Panel00_00_00_00_00.set_type("vertical");
                p.Panel00_00_00_00_00.set_minwidth("");
                p.Panel00_00_00_00_00.move("10.00","98","100%","105",null,null);

                p.Panel00_10.set_taborder("53");
                p.Panel00_10.set_type("vertical");
                p.Panel00_10.set_flexgrow("1");
                p.Panel00_10.set_verticalgap("10");
                p.Panel00_10.set_minwidth("");
                p.Panel00_10.move("10.00","98","100%","155",null,null);

                p.Panel10.set_taborder("54");
                p.Panel10.set_horizontalgap("20");
                p.Panel10.set_flexcrossaxiswrapalign("start");
                p.Panel10.set_flexwrap("wrap");
                p.Panel10.set_fittocontents("height");
                p.Panel10.set_verticalgap("0");
                p.Panel10.set_spacing("0px 20px 10px 20px");
                p.Panel10.set_cssclass("pal_WF_DtlBg");
                p.Panel10.set_type("horizontal");
                p.Panel10.move("0","60","100.00%","166",null,null);

                p.staLabel00_03_00_00_00_01.set_taborder("55");
                p.staLabel00_03_00_00_00_01.set_text("개인정보 수집(선택) 동의여부");
                p.staLabel00_03_00_00_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel00_03_00_00_00_01.move("10","98","100%","46",null,null);

                p.rdoPrvcChcClctAgreYn.set_taborder("56");
                p.rdoPrvcChcClctAgreYn.set_innerdataset(divForm_form_Div03_form_rdoPrvcChcClctAgreYn_innerdataset);
                p.rdoPrvcChcClctAgreYn.set_codecolumn("codecolumn");
                p.rdoPrvcChcClctAgreYn.set_datacolumn("datacolumn");
                p.rdoPrvcChcClctAgreYn.set_direction("vertical");
                p.rdoPrvcChcClctAgreYn.set_columncount("-1");
                p.rdoPrvcChcClctAgreYn.set_rowcount("-1");
                p.rdoPrvcChcClctAgreYn.set_value("");
                p.rdoPrvcChcClctAgreYn.move("200.00","328","100%","40",null,null);

                p.Panel00_00_03_00_00_00_00.set_taborder("57");
                p.Panel00_00_03_00_00_00_00.set_type("vertical");
                p.Panel00_00_03_00_00_00_00.set_flexgrow("1");
                p.Panel00_00_03_00_00_00_00.set_verticalgap("10");
                p.Panel00_00_03_00_00_00_00.set_minwidth("");
                p.Panel00_00_03_00_00_00_00.move("20","1086","980","167",null,null);

                p.Panel09_00.set_taborder("58");
                p.Panel09_00.set_horizontalgap("20");
                p.Panel09_00.set_flexcrossaxiswrapalign("start");
                p.Panel09_00.set_flexwrap("wrap");
                p.Panel09_00.set_fittocontents("height");
                p.Panel09_00.set_verticalgap("0");
                p.Panel09_00.set_spacing("0px 20px 10px 20px");
                p.Panel09_00.set_cssclass("pal_WF_DtlBg");
                p.Panel09_00.set_type("horizontal");
                p.Panel09_00.move("0","1086","100.00%","178",null,null);

                p.sta00_00_01_00.set_taborder("59");
                p.sta00_00_01_00.set_text("신청자의 개인정보수집 및 이용동의여부(선택항목)");
                p.sta00_00_01_00.set_cssclass("sta_WF_Des");
                p.sta00_00_01_00.set_fittocontents("height");
                p.sta00_00_01_00.move("20","20","100%","30",null,null);

                p.sta00_00_01_00_01.set_taborder("60");
                p.sta00_00_01_00_01.set_text("선택항목에 해당하는 정보를 입력하지 않으셔도 서비스 이용에는 제한이 없습니다.");
                p.sta00_00_01_00_01.set_cssclass("sta_WF_Des");
                p.sta00_00_01_00_01.set_fittocontents("height");
                p.sta00_00_01_00_01.move("20","20","100%","30",null,null);

                p.Button00_01.set_taborder("62");
                p.Button00_01.set_text("청구정보 찾기");
                p.Button00_01.set_cssclass("btn_WF_Small");
                p.Button00_01.set_fittocontents("width");
                p.Button00_01.move("813","76","98","34",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div03.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div03.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div03.form,
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
                p.staLabel01_00_00_00_00.set_taborder("0");
                p.staLabel01_00_00_00_00.set_text("서비스 신청구분");
                p.staLabel01_00_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel01_00_00_00_00.move("10","10","96.08%","46",null,null);

                p.cmbSrvcAplySeCd.set_taborder("1");
                p.cmbSrvcAplySeCd.set_innerdataset("dsSrvcAplySeList");
                p.cmbSrvcAplySeCd.set_codecolumn("cdId");
                p.cmbSrvcAplySeCd.set_datacolumn("cdNm");
                p.cmbSrvcAplySeCd.set_value("");
                p.cmbSrvcAplySeCd.set_index("-1");
                p.cmbSrvcAplySeCd.move("97","272","100%","40",null,null);

                p.Panel01_00_00_00_00.set_taborder("2");
                p.Panel01_00_00_00_00.set_type("vertical");
                p.Panel01_00_00_00_00.set_flexgrow("1");
                p.Panel01_00_00_00_00.set_verticalgap("5");
                p.Panel01_00_00_00_00.move("20","0","100%","146",null,null);

                p.Panel01.set_taborder("40");
                p.Panel01.set_flexmainaxisalign("spacebetween");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_flexcrossaxisalign("center");
                p.Panel01.move("0","27","100%","60",null,null);

                p.Panel02.set_taborder("42");
                p.Panel02.set_type("vertical");
                p.Panel02.set_verticalgap("10");
                p.Panel02.set_fittocontents("height");
                p.Panel02.move("520","1416","100%","80",null,null);

                p.Panel08.set_taborder("260");
                p.Panel08.move("0","46","100%","40",null,null);

                p.Panel00_00_00.set_taborder("3");
                p.Panel00_00_00.set_horizontalgap("20");
                p.Panel00_00_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_00.set_flexwrap("wrap");
                p.Panel00_00_00.set_fittocontents("height");
                p.Panel00_00_00.set_verticalgap("0");
                p.Panel00_00_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_00.set_type("vertical");
                p.Panel00_00_00.move("0","0","100.00%","157",null,null);

                p.Panel07.set_taborder("259");
                p.Panel07.set_type("horizontal");
                p.Panel07.set_verticalgap("10");
                p.Panel07.set_spacing("10px 0px");
                p.Panel07.set_fittocontents("height");
                p.Panel07.set_flexwrap("wrap");
                p.Panel07.move("0","176","100%","186",null,null);

                p.Panel05.set_taborder("257");
                p.Panel05.set_type("vertical");
                p.Panel05.set_verticalgap("10");
                p.Panel05.set_spacing("10px 0px");
                p.Panel05.move("20","796","100%","256",null,null);

                p.sta00_00_01_00_00_00.set_taborder("4");
                p.sta00_00_01_00_00_00.set_text("다회선 신청시 신청내역을 파일로 첨부해 주십시요\r\n신청하려는 전화 종류가 <fc v=\'#ee2e5b\'>[일반]전화</fc>인지 <fc v=\'#ee2e5b\'>[인터넷]전화</fc>인지 확인하고 신청하시길 바랍니다.\r\n");
                p.sta00_00_01_00_00_00.set_cssclass("sta_WF_Des");
                p.sta00_00_01_00_00_00.set_fittocontents("height");
                p.sta00_00_01_00_00_00.set_usedecorate("true");
                p.sta00_00_01_00_00_00.move("0","97","100.00%","50",null,null);

                p.staLabel01_00_00_00_00_01.set_taborder("5");
                p.staLabel01_00_00_00_00_01.set_text("일반전화 신청수");
                p.staLabel01_00_00_00_00_01.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00_00_00_01.move("10","10","96.08%","46",null,null);

                p.edtGnrlTelAplyCntOrg.set_taborder("6");
                p.edtGnrlTelAplyCntOrg.set_readonly("false");
                p.edtGnrlTelAplyCntOrg.move("940","142","100%","40",null,null);

                p.Panel01_00_00_00_00_01.set_taborder("7");
                p.Panel01_00_00_00_00_01.set_type("vertical");
                p.Panel01_00_00_00_00_01.set_flexgrow("1");
                p.Panel01_00_00_00_00_01.move("30","10","310","86",null,null);

                p.staLabel01_02_00_00_01.set_taborder("8");
                p.staLabel01_02_00_00_01.set_text("PRI 신청수");
                p.staLabel01_02_00_00_01.set_cssclass("sta_WF_Label");
                p.staLabel01_02_00_00_01.move("876","150","100%","46",null,null);

                p.edTpriAplyCnt.set_taborder("9");
                p.edTpriAplyCnt.set_readonly("false");
                p.edTpriAplyCnt.move("940","142","100%","40",null,null);

                p.Panel01_01_00_00_01.set_taborder("10");
                p.Panel01_01_00_00_01.set_type("vertical");
                p.Panel01_01_00_00_01.set_flexgrow("1");
                p.Panel01_01_00_00_01.move("876","150","310","86",null,null);

                p.Panel00_00_00_01.set_taborder("11");
                p.Panel00_00_00_01.set_horizontalgap("20");
                p.Panel00_00_00_01.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_00_01.set_flexwrap("wrap");
                p.Panel00_00_00_01.set_fittocontents("height");
                p.Panel00_00_00_01.set_verticalgap("0");
                p.Panel00_00_00_01.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_00_01.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_00_01.set_type("horizontal");
                p.Panel00_00_00_01.move("491","315","100.00%","97",null,null);

                p.Panel00.set_taborder("22");
                p.Panel00.set_type("vertical");
                p.Panel00.set_spacing("0px 0px 10px 0px");
                p.Panel00.set_fittocontents("height");
                p.Panel00.move("20","388","100%","372",null,null);

                p.grid00.set_taborder("15");
                p.grid00.set_fillareatype("allrow");
                p.grid00.set_autofittype("col");
                p.grid00.move("0","46","100.00%","178",null,null);

                p.staLabel01_00_00_00_00_01_00.set_taborder("12");
                p.staLabel01_00_00_00_00_01_00.set_text("신청내역");
                p.staLabel01_00_00_00_00_01_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00_00_00_01_00.move("10","10","100%","46",null,null);

                p.Panel01_00_00_00_00_01_00.set_taborder("13");
                p.Panel01_00_00_00_00_01_00.set_type("vertical");
                p.Panel01_00_00_00_00_01_00.set_flexgrow("1");
                p.Panel01_00_00_00_00_01_00.move("20","254","980","224",null,null);

                p.Panel00_00_00_01_00.set_taborder("14");
                p.Panel00_00_00_01_00.set_horizontalgap("20");
                p.Panel00_00_00_01_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_00_01_00.set_flexwrap("wrap");
                p.Panel00_00_00_01_00.set_fittocontents("height");
                p.Panel00_00_00_01_00.set_verticalgap("0");
                p.Panel00_00_00_01_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_00_01_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_00_01_00.set_type("horizontal");
                p.Panel00_00_00_01_00.move("0","236","100.00%","491",null,null);

                p.Panel06.set_taborder("258");
                p.Panel06.set_cssclass("pal_WF_DtlBg");
                p.Panel06.set_spacing("0px 20px 10px 20px");
                p.Panel06.set_flexwrap("wrap");
                p.Panel06.set_horizontalgap("20");
                p.Panel06.set_fittocontents("height");
                p.Panel06.move("67","971","100.00%","383",null,null);

                p.btnGrdAdd.set_taborder("16");
                p.btnGrdAdd.set_text("추가");
                p.btnGrdAdd.set_cssclass("btn_WF_Small");
                p.btnGrdAdd.set_visible("true");
                p.btnGrdAdd.set_fittocontents("width");
                p.btnGrdAdd.move("774.00","10","50","34",null,null);

                p.btnGrdDel.set_taborder("17");
                p.btnGrdDel.set_text("삭제");
                p.btnGrdDel.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel.set_visible("true");
                p.btnGrdDel.set_fittocontents("width");
                p.btnGrdDel.move("804.00","10","48","34",null,null);

                p.panGrdBtn.set_taborder("18");
                p.panGrdBtn.set_flexcrossaxisalign("start");
                p.panGrdBtn.set_flexcrossaxiswrapalign("start");
                p.panGrdBtn.set_flexmainaxisalign("end");
                p.panGrdBtn.set_horizontalgap("10");
                p.panGrdBtn.set_fittocontents("height");
                p.panGrdBtn.move("470","0","100%","39",null,null);

                p.TextArea00.set_taborder("21");
                p.TextArea00.move("706","693","100%","130",null,null);

                p.Static02.set_taborder("256");
                p.Static02.set_text("<b v=\'true\'>공사의 “정보통신서비스 이용약관”에 동의하며</b> 동 약관에 내용과 같이 전화서비스를 신청합니다.");
                p.Static02.set_cssclass("sta_WF_Des");
                p.Static02.set_fittocontents("height");
                p.Static02.set_usedecorate("true");
                p.Static02.move("140","904","100%","30",null,null);

                p.Static01.set_taborder("255");
                p.Static01.set_text("<b v=\'true\'>서비스 해지는 반드시 전화서비스 해지 신청서를 제출해야 하며, 전화통화로 서비스 해지 신청은 허용되지 않음.</b>");
                p.Static01.set_cssclass("sta_WF_Des");
                p.Static01.set_fittocontents("height");
                p.Static01.set_usedecorate("true");
                p.Static01.move("116","880","100%","30",null,null);

                p.grdGnrlTelSrvc.set_taborder("19");
                p.grdGnrlTelSrvc.set_binddataset("dsGnrlTelSrvcAplyInfo");
                p.grdGnrlTelSrvc.set_autofittype("col");
                p.grdGnrlTelSrvc.set_nodatatext("데이타가 없습니다.");
                p.grdGnrlTelSrvc.move("20","865","100.00%","217",null,null);

                p.staLabel01_00_00_00_00_01_00_00.set_taborder("20");
                p.staLabel01_00_00_00_00_01_00_00.set_text("비고");
                p.staLabel01_00_00_00_00_01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00_00_00_01_00_00.move("10","10","100%","46",null,null);

                p.staLabel01_00_00_00.set_taborder("23");
                p.staLabel01_00_00_00.set_text("시외전환 사전선택");
                p.staLabel01_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel01_00_00_00.move("0","0","100%","46",null,null);

                p.radio00_00.set_taborder("24");
                p.radio00_00.set_innerdataset(divForm_form_Div04_form_radio00_00_innerdataset);
                p.radio00_00.set_codecolumn("codecolumn");
                p.radio00_00.set_datacolumn("datacolumn");
                p.radio00_00.set_columncount("-1");
                p.radio00_00.set_rowcount("-1");
                p.radio00_00.set_value("");
                p.radio00_00.set_index("-1");
                p.radio00_00.move("96","73","100%","40",null,null);

                p.Panel01_00_00_00.set_taborder("25");
                p.Panel01_00_00_00.set_type("horizontal");
                p.Panel01_00_00_00.set_flexwrap("wrap");
                p.Panel01_00_00_00.move("20","1067","100%","230",null,null);

                p.Panel00_00.set_taborder("26");
                p.Panel00_00.set_horizontalgap("20");
                p.Panel00_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00.set_flexwrap("wrap");
                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.set_verticalgap("0");
                p.Panel00_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00.move("0","1299.28","100.00%","241",null,null);

                p.Panel01_00_00_00_01.set_taborder("27");
                p.Panel01_00_00_00_01.set_type("vertical");
                p.Panel01_00_00_00_01.set_flexgrow("1");
                p.Panel01_00_00_00_01.set_fittocontents("height");
                p.Panel01_00_00_00_01.move("20","1099","100%","144",null,null);

                p.grid01.set_taborder("28");
                p.grid01.set_fillareatype("allrow");
                p.grid01.set_autofittype("col");
                p.grid01.move("0","0","100%","134",null,null);

                p.cb00.set_taborder("39");
                p.cb00.set_text("사용료 : 1000원 /번호");
                p.cb00.move("61","1423","186","40",null,null);

                p.staLabel01_00_00_00_01.set_taborder("29");
                p.staLabel01_00_00_00_01.set_text("부가서비스");
                p.staLabel01_00_00_00_01.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00_00_01.move("0","0","92.25%","46",null,null);

                p.Panel01_00_00_00_02.set_taborder("30");
                p.Panel01_00_00_00_02.set_type("vertical");
                p.Panel01_00_00_00_02.set_flexgrow("1");
                p.Panel01_00_00_00_02.set_fittocontents("height");
                p.Panel01_00_00_00_02.move("20","1239","100%","199",null,null);

                p.Panel00_00_02.set_taborder("31");
                p.Panel00_00_02.set_horizontalgap("20");
                p.Panel00_00_02.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_02.set_flexwrap("wrap");
                p.Panel00_00_02.set_fittocontents("height");
                p.Panel00_00_02.set_verticalgap("0");
                p.Panel00_00_02.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_02.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_02.move("0","1160","100.00%","210",null,null);

                p.sta00_00_01_00_00_00_00.set_taborder("32");
                p.sta00_00_01_00_00_00_00.set_text("부가서비스 동시 신청불가 안내\r\n※ 회의통화 서비스와 내선통화그룹(IDP) 서비스 동시 신청불가\r\n※ 통화중대기 서비스와 3인통화  서비스 동시 신청불가\r\n※ 부재중안내 서비스와 착신통화전환  서비스 동시 신청불가\r\n※ 대표전화서비스(대표번호)와 3인통화 서비스 동시 신청불가\r\n※ 대표전화서비스(종속번호)와 3인통화 서비스 동시 신청가능\r\n※ 대표전화서비스(대표번호)와 통화중대기 서비스 동시 신청불가\r\n※ 대표전화서비스(종속번호)와 통화중대기 서비스 동시 신청불가");
                p.sta00_00_01_00_00_00_00.set_cssclass("sta_WF_Des");
                p.sta00_00_01_00_00_00_00.set_fittocontents("height");
                p.sta00_00_01_00_00_00_00.set_usedecorate("true");
                p.sta00_00_01_00_00_00_00.move("0","46","100%","153",null,null);

                p.staLabel01_00_00_00_00_01_01.set_taborder("33");
                p.staLabel01_00_00_00_00_01_01.set_text("착신통화전환 서비스");
                p.staLabel01_00_00_00_00_01_01.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00_00_00_01_01.move("10","10","96.08%","46",null,null);

                p.Panel01_00_00_00_00_01_01.set_taborder("34");
                p.Panel01_00_00_00_00_01_01.set_type("vertical");
                p.Panel01_00_00_00_00_01_01.set_flexgrow("1");
                p.Panel01_00_00_00_00_01_01.set_fittocontents("height");
                p.Panel01_00_00_00_00_01_01.move("30","10","310","86",null,null);

                p.staLabel01_02_00_00_01_00.set_taborder("35");
                p.staLabel01_02_00_00_01_00.set_text("대상번호");
                p.staLabel01_02_00_00_01_00.set_cssclass("sta_WF_Label");
                p.staLabel01_02_00_00_01_00.move("876","150","100%","46",null,null);

                p.staLabel01_00_009.set_taborder("36");
                p.staLabel01_00_009.set_readonly("false");
                p.staLabel01_00_009.move("940","142","100%","40",null,null);

                p.Panel01_01_00_00_01_00.set_taborder("37");
                p.Panel01_01_00_00_01_00.set_type("vertical");
                p.Panel01_01_00_00_01_00.set_flexgrow("1");
                p.Panel01_01_00_00_01_00.set_fittocontents("height");
                p.Panel01_01_00_00_01_00.move("520","1370","310","126",null,null);

                p.Panel00_00_00_01_01.set_taborder("38");
                p.Panel00_00_00_01_01.set_horizontalgap("20");
                p.Panel00_00_00_01_01.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_00_01_01.set_flexwrap("wrap");
                p.Panel00_00_00_01_01.set_fittocontents("height");
                p.Panel00_00_00_01_01.set_verticalgap("0");
                p.Panel00_00_00_01_01.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_00_01_01.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_00_01_01.set_type("horizontal");
                p.Panel00_00_00_01_01.move("0","1370","100.00%","137",null,null);

                p.sta00_00_019.set_taborder("41");
                p.sta00_00_019.set_text("별도의 통화료 발생");
                p.sta00_00_019.set_cssclass("sta_WF_Des");
                p.sta00_00_019.set_fittocontents("height");
                p.sta00_00_019.set_usedecorate("true");
                p.sta00_00_019.move("0","46","100%","30",null,null);

                p.sta00_00_01_09.set_taborder("43");
                p.sta00_00_01_09.set_text("통화연결음(링고) 서비스");
                p.sta00_00_01_09.set_cssclass("sta_WF_Label");
                p.sta00_00_01_09.move("10","10","96.08%","46",null,null);

                p.cb00_00.set_taborder("44");
                p.cb00_00.set_text("사용료 : 1000원 /번호");
                p.cb00_00.move("61","1423","100%","40",null,null);

                p.Panel01_00.set_taborder("45");
                p.Panel01_00.set_flexmainaxisalign("spacebetween");
                p.Panel01_00.set_fittocontents("height");
                p.Panel01_00.set_flexcrossaxisalign("center");
                p.Panel01_00.move("0","27","100%","60",null,null);

                p.Panel01_00_00_00_00_01_01_00.set_taborder("46");
                p.Panel01_00_00_00_00_01_01_00.set_type("vertical");
                p.Panel01_00_00_00_00_01_01_00.set_flexgrow("1");
                p.Panel01_00_00_00_00_01_01_00.set_fittocontents("height");
                p.Panel01_00_00_00_00_01_01_00.move("30","10","310","86",null,null);

                p.staLabel01_02_00_00_01_00_00.set_taborder("47");
                p.staLabel01_02_00_00_01_00_00.set_text("대상번호");
                p.staLabel01_02_00_00_01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_02_00_00_01_00_00.move("876","150","100%","46",null,null);

                p.edt00_01_01_00_00_09.set_taborder("48");
                p.edt00_01_01_00_00_09.set_readonly("false");
                p.edt00_01_01_00_00_09.move("940","142","100%","40",null,null);

                p.edt00_01_01_00_00_009.set_taborder("49");
                p.edt00_01_01_00_00_009.set_text("기간통신사업자 요금");
                p.edt00_01_01_00_00_009.set_cssclass("sta_WF_Des");
                p.edt00_01_01_00_00_009.set_fittocontents("height");
                p.edt00_01_01_00_00_009.set_usedecorate("true");
                p.edt00_01_01_00_00_009.move("0","46","100%","30",null,null);

                p.Panel02_00.set_taborder("50");
                p.Panel02_00.set_type("vertical");
                p.Panel02_00.set_verticalgap("10");
                p.Panel02_00.set_fittocontents("height");
                p.Panel02_00.move("520","1416","100%","80",null,null);

                p.Panel01_01_00_00_01_00_00.set_taborder("51");
                p.Panel01_01_00_00_01_00_00.set_type("vertical");
                p.Panel01_01_00_00_01_00_00.set_flexgrow("1");
                p.Panel01_01_00_00_01_00_00.set_fittocontents("height");
                p.Panel01_01_00_00_01_00_00.move("520","1370","310","126",null,null);

                p.Panel00_00_00_01_01_00.set_taborder("52");
                p.Panel00_00_00_01_01_00.set_horizontalgap("20");
                p.Panel00_00_00_01_01_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_00_01_01_00.set_flexwrap("wrap");
                p.Panel00_00_00_01_01_00.set_fittocontents("height");
                p.Panel00_00_00_01_01_00.set_verticalgap("0");
                p.Panel00_00_00_01_01_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_00_01_01_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_00_01_01_00.set_type("horizontal");
                p.Panel00_00_00_01_01_00.move("0","1370","100.00%","137",null,null);

                p.staLabel01_00_00_00_00_01_01_00_00.set_taborder("53");
                p.staLabel01_00_00_00_00_01_01_00_00.set_text("전화변호변경 서비스");
                p.staLabel01_00_00_00_00_01_01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00_00_00_01_01_00_00.move("10","10","96.08%","46",null,null);

                p.cb00_00_00.set_taborder("54");
                p.cb00_00_00.set_text("사용료 : 1000원 /번호");
                p.cb00_00_00.move("61","1423","100%","40",null,null);

                p.Panel01_00_00.set_taborder("55");
                p.Panel01_00_00.set_flexmainaxisalign("spacebetween");
                p.Panel01_00_00.set_flexcrossaxisalign("center");
                p.Panel01_00_00.set_fittocontents("height");
                p.Panel01_00_00.move("0","27","100%","60",null,null);

                p.Panel01_00_00_00_00_01_01_00_00.set_taborder("56");
                p.Panel01_00_00_00_00_01_01_00_00.set_type("vertical");
                p.Panel01_00_00_00_00_01_01_00_00.set_flexgrow("1");
                p.Panel01_00_00_00_00_01_01_00_00.set_fittocontents("height");
                p.Panel01_00_00_00_00_01_01_00_00.move("30","10","310","86",null,null);

                p.staLabel01_02_00_00_01_00_00_00.set_taborder("57");
                p.staLabel01_02_00_00_01_00_00_00.set_text("대상번호");
                p.staLabel01_02_00_00_01_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_02_00_00_01_00_00_00.move("876","150","100%","46",null,null);

                p.staLabel01_00_00_00_00_9.set_taborder("58");
                p.staLabel01_00_00_00_00_9.set_type("vertical");
                p.staLabel01_00_00_00_00_9.set_flexgrow("1");
                p.staLabel01_00_00_00_00_9.set_fittocontents("height");
                p.staLabel01_00_00_00_00_9.move("520","1370","310","86",null,null);

                p.Panel00_00_00_01_01_00_00.set_taborder("59");
                p.Panel00_00_00_01_01_00_00.set_horizontalgap("20");
                p.Panel00_00_00_01_01_00_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_00_01_01_00_00.set_flexwrap("wrap");
                p.Panel00_00_00_01_01_00_00.set_fittocontents("height");
                p.Panel00_00_00_01_01_00_00.set_verticalgap("0");
                p.Panel00_00_00_01_01_00_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_00_01_01_00_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_00_01_01_00_00.set_type("horizontal");
                p.Panel00_00_00_01_01_00_00.move("0","1370","100.00%","97",null,null);

                p.edt00_01_01_00_00_00_00_01_00_00_00.set_taborder("60");
                p.edt00_01_01_00_00_00_00_01_00_00_00.set_readonly("false");
                p.edt00_01_01_00_00_00_00_01_00_00_00.move("940","142","100%","40",null,null);

                p.staLabel01_00_00_00_00_01_01_00_01.set_taborder("61");
                p.staLabel01_00_00_00_00_01_01_00_01.set_text("통화허용등급 서비스");
                p.staLabel01_00_00_00_00_01_01_00_01.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00_00_00_01_01_00_01.move("10","10","96.08%","46",null,null);

                p.cb00_00_01.set_taborder("62");
                p.cb00_00_01.set_text("사용료 : 무료");
                p.cb00_00_01.move("61","1423","100%","40",null,null);

                p.Panel01_00_01.set_taborder("63");
                p.Panel01_00_01.set_flexmainaxisalign("spacebetween");
                p.Panel01_00_01.set_fittocontents("height");
                p.Panel01_00_01.set_flexcrossaxisalign("center");
                p.Panel01_00_01.move("0","27","100%","60",null,null);

                p.Panel01_00_00_00_00_01_01_00_01.set_taborder("64");
                p.Panel01_00_00_00_00_01_01_00_01.set_type("vertical");
                p.Panel01_00_00_00_00_01_01_00_01.set_flexgrow("1");
                p.Panel01_00_00_00_00_01_01_00_01.set_fittocontents("height");
                p.Panel01_00_00_00_00_01_01_00_01.move("30","10","310","86",null,null);

                p.staLabel01_02_00_00_01_00_00_01.set_taborder("65");
                p.staLabel01_02_00_00_01_00_00_01.set_text("대상번호");
                p.staLabel01_02_00_00_01_00_00_01.set_cssclass("sta_WF_Label");
                p.staLabel01_02_00_00_01_00_00_01.move("876","150","100%","46",null,null);

                p.edt00_01_01_00_00_00_00_01_00_00_01.set_taborder("66");
                p.edt00_01_01_00_00_00_00_01_00_00_01.set_readonly("false");
                p.edt00_01_01_00_00_00_00_01_00_00_01.move("940","142","100%","40",null,null);

                p.sta00_00_01_00_00_00_00_00_00_00.set_taborder("67");
                p.sta00_00_01_00_00_00_00_00_00_00.set_text("A:국제, B:시외/이동, C:시내, D:공항구역내");
                p.sta00_00_01_00_00_00_00_00_00_00.set_cssclass("sta_WF_Des");
                p.sta00_00_01_00_00_00_00_00_00_00.set_fittocontents("height");
                p.sta00_00_01_00_00_00_00_00_00_00.set_usedecorate("true");
                p.sta00_00_01_00_00_00_00_00_00_00.move("0","46","100%","30",null,null);

                p.Panel02_00_00.set_taborder("68");
                p.Panel02_00_00.set_type("vertical");
                p.Panel02_00_00.set_verticalgap("10");
                p.Panel02_00_00.set_fittocontents("height");
                p.Panel02_00_00.move("520","1416","100%","80",null,null);

                p.Panel01_01_00_00_01_00_00_01.set_taborder("69");
                p.Panel01_01_00_00_01_00_00_01.set_type("vertical");
                p.Panel01_01_00_00_01_00_00_01.set_flexgrow("1");
                p.Panel01_01_00_00_01_00_00_01.set_fittocontents("height");
                p.Panel01_01_00_00_01_00_00_01.move("520","1370","310","126",null,null);

                p.Panel00_00_00_01_01_00_01.set_taborder("70");
                p.Panel00_00_00_01_01_00_01.set_horizontalgap("20");
                p.Panel00_00_00_01_01_00_01.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_00_01_01_00_01.set_flexwrap("wrap");
                p.Panel00_00_00_01_01_00_01.set_fittocontents("height");
                p.Panel00_00_00_01_01_00_01.set_verticalgap("0");
                p.Panel00_00_00_01_01_00_01.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_00_01_01_00_01.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_00_01_01_00_01.set_type("horizontal");
                p.Panel00_00_00_01_01_00_01.move("0","1370","100.00%","137",null,null);

                p.staLabel01_00_00_00_00_01_01_00_00_00.set_taborder("71");
                p.staLabel01_00_00_00_00_01_01_00_00_00.set_text("직통전화 서비스");
                p.staLabel01_00_00_00_00_01_01_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00_00_00_01_01_00_00_00.move("10","10","96.08%","46",null,null);

                p.cb00_00_00_00.set_taborder("72");
                p.cb00_00_00_00.set_text("사용료 : 무료");
                p.cb00_00_00_00.move("61","1423","100%","40",null,null);

                p.Panel01_00_00_01.set_taborder("73");
                p.Panel01_00_00_01.set_flexmainaxisalign("spacebetween");
                p.Panel01_00_00_01.set_flexcrossaxisalign("center");
                p.Panel01_00_00_01.set_fittocontents("height");
                p.Panel01_00_00_01.move("0","27","100%","60",null,null);

                p.Panel01_00_00_00_00_01_01_00_00_00.set_taborder("74");
                p.Panel01_00_00_00_00_01_01_00_00_00.set_type("vertical");
                p.Panel01_00_00_00_00_01_01_00_00_00.set_flexgrow("1");
                p.Panel01_00_00_00_00_01_01_00_00_00.set_fittocontents("height");
                p.Panel01_00_00_00_00_01_01_00_00_00.move("30","10","310","86",null,null);

                p.staLabel01_02_00_00_01_00_00_00_00.set_taborder("75");
                p.staLabel01_02_00_00_01_00_00_00_00.set_text("대상번호");
                p.staLabel01_02_00_00_01_00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_02_00_00_01_00_00_00_00.move("876","150","100%","46",null,null);

                p.edt00_01_01_00_00_00_00_01_00_00_00_00.set_taborder("76");
                p.edt00_01_01_00_00_00_00_01_00_00_00_00.set_readonly("false");
                p.edt00_01_01_00_00_00_00_01_00_00_00_00.move("940","142","100%","40",null,null);

                p.Panel01_01_00_00_01_00_00_00_00.set_taborder("77");
                p.Panel01_01_00_00_01_00_00_00_00.set_type("vertical");
                p.Panel01_01_00_00_01_00_00_00_00.set_flexgrow("1");
                p.Panel01_01_00_00_01_00_00_00_00.set_fittocontents("height");
                p.Panel01_01_00_00_01_00_00_00_00.move("520","1370","310","86",null,null);

                p.Panel00_00_00_01_01_00_00_00.set_taborder("78");
                p.Panel00_00_00_01_01_00_00_00.set_horizontalgap("20");
                p.Panel00_00_00_01_01_00_00_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_00_01_01_00_00_00.set_flexwrap("wrap");
                p.Panel00_00_00_01_01_00_00_00.set_fittocontents("height");
                p.Panel00_00_00_01_01_00_00_00.set_verticalgap("0");
                p.Panel00_00_00_01_01_00_00_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_00_01_01_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_00_01_01_00_00_00.set_type("horizontal");
                p.Panel00_00_00_01_01_00_00_00.move("0","1370","100.00%","97",null,null);

                p.staLabel01_00_00_00_00_01_01_00_00_00_00.set_taborder("79");
                p.staLabel01_00_00_00_00_01_01_00_00_00_00.set_text("단축다이얼 서비스");
                p.staLabel01_00_00_00_00_01_01_00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00_00_00_01_01_00_00_00_00.move("10","10","96.08%","46",null,null);

                p.cb00_00_00_00_00.set_taborder("80");
                p.cb00_00_00_00_00.set_text("사용료 : 무료");
                p.cb00_00_00_00_00.move("61","1423","100%","40",null,null);

                p.Panel01_00_00_01_00.set_taborder("81");
                p.Panel01_00_00_01_00.set_flexmainaxisalign("spacebetween");
                p.Panel01_00_00_01_00.set_flexcrossaxisalign("center");
                p.Panel01_00_00_01_00.set_fittocontents("height");
                p.Panel01_00_00_01_00.move("0","27","100%","60",null,null);

                p.Panel01_00_00_00_00_01_01_00_00_00_00.set_taborder("82");
                p.Panel01_00_00_00_00_01_01_00_00_00_00.set_type("vertical");
                p.Panel01_00_00_00_00_01_01_00_00_00_00.set_flexgrow("1");
                p.Panel01_00_00_00_00_01_01_00_00_00_00.set_fittocontents("height");
                p.Panel01_00_00_00_00_01_01_00_00_00_00.move("30","10","310","86",null,null);

                p.sta00_00_01_144.set_taborder("83");
                p.sta00_00_01_144.set_text("대상번호");
                p.sta00_00_01_144.set_cssclass("sta_WF_Label");
                p.sta00_00_01_144.move("876","150","100%","46",null,null);

                p.edt00_01_01_00_00_00_00_01_00_00_00_00_00.set_taborder("84");
                p.edt00_01_01_00_00_00_00_01_00_00_00_00_00.set_readonly("false");
                p.edt00_01_01_00_00_00_00_01_00_00_00_00_00.move("940","142","100%","40",null,null);

                p.Panel01_01_00_00_01_00_00_00_00_00.set_taborder("85");
                p.Panel01_01_00_00_01_00_00_00_00_00.set_type("vertical");
                p.Panel01_01_00_00_01_00_00_00_00_00.set_flexgrow("1");
                p.Panel01_01_00_00_01_00_00_00_00_00.set_fittocontents("height");
                p.Panel01_01_00_00_01_00_00_00_00_00.move("520","1370","310","86",null,null);

                p.Panel00_00_00_01_01_00_00_00_00.set_taborder("86");
                p.Panel00_00_00_01_01_00_00_00_00.set_horizontalgap("20");
                p.Panel00_00_00_01_01_00_00_00_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_00_01_01_00_00_00_00.set_flexwrap("wrap");
                p.Panel00_00_00_01_01_00_00_00_00.set_fittocontents("height");
                p.Panel00_00_00_01_01_00_00_00_00.set_verticalgap("0");
                p.Panel00_00_00_01_01_00_00_00_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_00_01_01_00_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_00_01_01_00_00_00_00.set_type("horizontal");
                p.Panel00_00_00_01_01_00_00_00_00.move("0","1370","100.00%","97",null,null);

                p.sta00_00_01_141.set_taborder("87");
                p.sta00_00_01_141.set_text("부재중안내 서비스");
                p.sta00_00_01_141.set_cssclass("sta_WF_Label");
                p.sta00_00_01_141.move("10","10","96.08%","46",null,null);

                p.cb00_00_00_00_00_00.set_taborder("88");
                p.cb00_00_00_00_00_00.set_text("사용료 : 무료");
                p.cb00_00_00_00_00_00.move("61","1423","100%","40",null,null);

                p.Panel01_00_00_01_00_00.set_taborder("89");
                p.Panel01_00_00_01_00_00.set_flexmainaxisalign("spacebetween");
                p.Panel01_00_00_01_00_00.set_flexcrossaxisalign("center");
                p.Panel01_00_00_01_00_00.set_flexcrossaxiswrapalign("start");
                p.Panel01_00_00_01_00_00.set_fittocontents("height");
                p.Panel01_00_00_01_00_00.move("0","27","100%","60",null,null);

                p.Panel01_00_00_00_00_01_01_00_00_00_00_00.set_taborder("90");
                p.Panel01_00_00_00_00_01_01_00_00_00_00_00.set_type("vertical");
                p.Panel01_00_00_00_00_01_01_00_00_00_00_00.set_flexgrow("1");
                p.Panel01_00_00_00_00_01_01_00_00_00_00_00.set_fittocontents("height");
                p.Panel01_00_00_00_00_01_01_00_00_00_00_00.move("30","10","310","86",null,null);

                p.sta00_00_01_14.set_taborder("91");
                p.sta00_00_01_14.set_text("대상번호");
                p.sta00_00_01_14.set_cssclass("sta_WF_Label");
                p.sta00_00_01_14.move("876","150","100%","46",null,null);

                p.edt00_01_01_00_00_00_00_01_00_00_00_00_00_00.set_taborder("92");
                p.edt00_01_01_00_00_00_00_01_00_00_00_00_00_00.set_readonly("false");
                p.edt00_01_01_00_00_00_00_01_00_00_00_00_00_00.move("940","142","100%","40",null,null);

                p.Panel01_01_00_00_01_00_00_00_00_00_00.set_taborder("93");
                p.Panel01_01_00_00_01_00_00_00_00_00_00.set_type("vertical");
                p.Panel01_01_00_00_01_00_00_00_00_00_00.set_flexgrow("1");
                p.Panel01_01_00_00_01_00_00_00_00_00_00.set_fittocontents("height");
                p.Panel01_01_00_00_01_00_00_00_00_00_00.move("520","1370","310","86",null,null);

                p.Panel00_00_00_01_01_00_00_00_00_00.set_taborder("94");
                p.Panel00_00_00_01_01_00_00_00_00_00.set_horizontalgap("20");
                p.Panel00_00_00_01_01_00_00_00_00_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_00_01_01_00_00_00_00_00.set_flexwrap("wrap");
                p.Panel00_00_00_01_01_00_00_00_00_00.set_fittocontents("height");
                p.Panel00_00_00_01_01_00_00_00_00_00.set_verticalgap("0");
                p.Panel00_00_00_01_01_00_00_00_00_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_00_01_01_00_00_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_00_01_01_00_00_00_00_00.set_type("horizontal");
                p.Panel00_00_00_01_01_00_00_00_00_00.move("0","1370","100.00%","97",null,null);

                p.staLabel01_00_00_00_00_01_01_00_00_00_00_00_00.set_taborder("95");
                p.staLabel01_00_00_00_00_01_01_00_00_00_00_00_00.set_text("3인통화 서비스");
                p.staLabel01_00_00_00_00_01_01_00_00_00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00_00_00_01_01_00_00_00_00_00_00.move("10","10","96.08%","46",null,null);

                p.cb00_00_00_00_00_00_00.set_taborder("96");
                p.cb00_00_00_00_00_00_00.set_text("사용료 : 무료");
                p.cb00_00_00_00_00_00_00.move("61","1423","100%","40",null,null);

                p.Panel01_00_00_01_00_00_00.set_taborder("97");
                p.Panel01_00_00_01_00_00_00.set_flexmainaxisalign("spacebetween");
                p.Panel01_00_00_01_00_00_00.set_flexcrossaxisalign("center");
                p.Panel01_00_00_01_00_00_00.set_flexcrossaxiswrapalign("start");
                p.Panel01_00_00_01_00_00_00.set_fittocontents("height");
                p.Panel01_00_00_01_00_00_00.move("0","27","100%","60",null,null);

                p.Panel01_00_00_00_00_01_01_00_00_00_00_00_00.set_taborder("98");
                p.Panel01_00_00_00_00_01_01_00_00_00_00_00_00.set_type("vertical");
                p.Panel01_00_00_00_00_01_01_00_00_00_00_00_00.set_flexgrow("1");
                p.Panel01_00_00_00_00_01_01_00_00_00_00_00_00.set_fittocontents("height");
                p.Panel01_00_00_00_00_01_01_00_00_00_00_00_00.move("30","10","310","86",null,null);

                p.sta00_00_01_138.set_taborder("99");
                p.sta00_00_01_138.set_text("대상번호");
                p.sta00_00_01_138.set_cssclass("sta_WF_Label");
                p.sta00_00_01_138.move("876","150","100%","46",null,null);

                p.edt00_01_01_00_00_00_00_01_00_00_00_00_00_00_00.set_taborder("100");
                p.edt00_01_01_00_00_00_00_01_00_00_00_00_00_00_00.set_readonly("false");
                p.edt00_01_01_00_00_00_00_01_00_00_00_00_00_00_00.move("940","142","100%","40",null,null);

                p.Panel01_01_00_00_01_00_00_00_00_00_00_00.set_taborder("101");
                p.Panel01_01_00_00_01_00_00_00_00_00_00_00.set_type("vertical");
                p.Panel01_01_00_00_01_00_00_00_00_00_00_00.set_flexgrow("1");
                p.Panel01_01_00_00_01_00_00_00_00_00_00_00.set_fittocontents("height");
                p.Panel01_01_00_00_01_00_00_00_00_00_00_00.move("520","1370","310","86",null,null);

                p.Panel00_00_00_01_01_00_00_00_00_00_00.set_taborder("102");
                p.Panel00_00_00_01_01_00_00_00_00_00_00.set_horizontalgap("20");
                p.Panel00_00_00_01_01_00_00_00_00_00_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_00_01_01_00_00_00_00_00_00.set_flexwrap("wrap");
                p.Panel00_00_00_01_01_00_00_00_00_00_00.set_fittocontents("height");
                p.Panel00_00_00_01_01_00_00_00_00_00_00.set_verticalgap("0");
                p.Panel00_00_00_01_01_00_00_00_00_00_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_00_01_01_00_00_00_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_00_01_01_00_00_00_00_00_00.set_type("horizontal");
                p.Panel00_00_00_01_01_00_00_00_00_00_00.move("0","1370","100.00%","97",null,null);

                p.sta00_00_01_139.set_taborder("103");
                p.sta00_00_01_139.set_text("회의통화 서비스");
                p.sta00_00_01_139.set_cssclass("sta_WF_Label");
                p.sta00_00_01_139.move("10","10","96.08%","46",null,null);

                p.cb00_00_00_00_00_00_00_00.set_taborder("104");
                p.cb00_00_00_00_00_00_00_00.set_text("사용료 : 무료");
                p.cb00_00_00_00_00_00_00_00.move("61","1423","100%","40",null,null);

                p.Panel01_00_00_01_00_00_00_00.set_taborder("105");
                p.Panel01_00_00_01_00_00_00_00.set_flexmainaxisalign("spacebetween");
                p.Panel01_00_00_01_00_00_00_00.set_flexcrossaxisalign("center");
                p.Panel01_00_00_01_00_00_00_00.set_flexcrossaxiswrapalign("start");
                p.Panel01_00_00_01_00_00_00_00.set_fittocontents("height");
                p.Panel01_00_00_01_00_00_00_00.move("0","27","100%","60",null,null);

                p.Panel01_00_00_00_00_01_01_00_00_00_00_00_00_00.set_taborder("106");
                p.Panel01_00_00_00_00_01_01_00_00_00_00_00_00_00.set_type("vertical");
                p.Panel01_00_00_00_00_01_01_00_00_00_00_00_00_00.set_flexgrow("1");
                p.Panel01_00_00_00_00_01_01_00_00_00_00_00_00_00.set_fittocontents("height");
                p.Panel01_00_00_00_00_01_01_00_00_00_00_00_00_00.move("30","10","310","86",null,null);

                p.staLabel01_02_00_00_01_00_00_00_00_00_00_00_00.set_taborder("107");
                p.staLabel01_02_00_00_01_00_00_00_00_00_00_00_00.set_text("대상번호");
                p.staLabel01_02_00_00_01_00_00_00_00_00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_02_00_00_01_00_00_00_00_00_00_00_00.move("876","150","100%","46",null,null);

                p.edt00_01_01_00_00_00_00_01_00_00_00_00_00_00_00_00.set_taborder("108");
                p.edt00_01_01_00_00_00_00_01_00_00_00_00_00_00_00_00.set_readonly("false");
                p.edt00_01_01_00_00_00_00_01_00_00_00_00_00_00_00_00.move("940","142","100%","40",null,null);

                p.Panel01_01_00_00_01_00_00_00_00_00_00_00_00.set_taborder("109");
                p.Panel01_01_00_00_01_00_00_00_00_00_00_00_00.set_type("vertical");
                p.Panel01_01_00_00_01_00_00_00_00_00_00_00_00.set_flexgrow("1");
                p.Panel01_01_00_00_01_00_00_00_00_00_00_00_00.set_fittocontents("height");
                p.Panel01_01_00_00_01_00_00_00_00_00_00_00_00.move("520","1370","310","86",null,null);

                p.Panel00_00_00_01_01_00_00_00_00_00_00_00.set_taborder("110");
                p.Panel00_00_00_01_01_00_00_00_00_00_00_00.set_horizontalgap("20");
                p.Panel00_00_00_01_01_00_00_00_00_00_00_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_00_01_01_00_00_00_00_00_00_00.set_flexwrap("wrap");
                p.Panel00_00_00_01_01_00_00_00_00_00_00_00.set_fittocontents("height");
                p.Panel00_00_00_01_01_00_00_00_00_00_00_00.set_verticalgap("0");
                p.Panel00_00_00_01_01_00_00_00_00_00_00_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_00_01_01_00_00_00_00_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_00_01_01_00_00_00_00_00_00_00.set_type("horizontal");
                p.Panel00_00_00_01_01_00_00_00_00_00_00_00.move("0","1370","100.00%","97",null,null);

                p.sta00_00_01_137.set_taborder("111");
                p.sta00_00_01_137.set_text("통화중대기 서비스");
                p.sta00_00_01_137.set_cssclass("sta_WF_Label");
                p.sta00_00_01_137.move("10","10","96.08%","46",null,null);

                p.cb00_00_00_00_00_00_00_00_00.set_taborder("112");
                p.cb00_00_00_00_00_00_00_00_00.set_text("사용료 : 무료");
                p.cb00_00_00_00_00_00_00_00_00.move("61","1423","100%","40",null,null);

                p.Panel01_00_00_01_00_00_00_00_00.set_taborder("113");
                p.Panel01_00_00_01_00_00_00_00_00.set_flexmainaxisalign("spacebetween");
                p.Panel01_00_00_01_00_00_00_00_00.set_flexcrossaxisalign("center");
                p.Panel01_00_00_01_00_00_00_00_00.set_flexcrossaxiswrapalign("start");
                p.Panel01_00_00_01_00_00_00_00_00.set_fittocontents("height");
                p.Panel01_00_00_01_00_00_00_00_00.move("0","27","100%","60",null,null);

                p.Panel01_00_00_00_00_01_01_00_00_00_00_00_00_00_00.set_taborder("114");
                p.Panel01_00_00_00_00_01_01_00_00_00_00_00_00_00_00.set_type("vertical");
                p.Panel01_00_00_00_00_01_01_00_00_00_00_00_00_00_00.set_flexgrow("1");
                p.Panel01_00_00_00_00_01_01_00_00_00_00_00_00_00_00.set_fittocontents("height");
                p.Panel01_00_00_00_00_01_01_00_00_00_00_00_00_00_00.move("30","10","310","86",null,null);

                p.sta00_00_01_134.set_taborder("115");
                p.sta00_00_01_134.set_text("대상번호");
                p.sta00_00_01_134.set_cssclass("sta_WF_Label");
                p.sta00_00_01_134.move("876","150","100%","46",null,null);

                p.edt00_01_01_00_00_00_00_01_00_00_00_00_00_00_00_00_00.set_taborder("116");
                p.edt00_01_01_00_00_00_00_01_00_00_00_00_00_00_00_00_00.set_readonly("false");
                p.edt00_01_01_00_00_00_00_01_00_00_00_00_00_00_00_00_00.move("940","142","100%","40",null,null);

                p.Panel01_01_00_00_01_00_00_00_00_00_00_00_00_00.set_taborder("117");
                p.Panel01_01_00_00_01_00_00_00_00_00_00_00_00_00.set_type("vertical");
                p.Panel01_01_00_00_01_00_00_00_00_00_00_00_00_00.set_flexgrow("1");
                p.Panel01_01_00_00_01_00_00_00_00_00_00_00_00_00.set_fittocontents("height");
                p.Panel01_01_00_00_01_00_00_00_00_00_00_00_00_00.move("520","1370","310","86",null,null);

                p.Panel00_00_00_01_01_00_00_00_00_00_00_00_00.set_taborder("118");
                p.Panel00_00_00_01_01_00_00_00_00_00_00_00_00.set_horizontalgap("20");
                p.Panel00_00_00_01_01_00_00_00_00_00_00_00_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_00_01_01_00_00_00_00_00_00_00_00.set_flexwrap("wrap");
                p.Panel00_00_00_01_01_00_00_00_00_00_00_00_00.set_fittocontents("height");
                p.Panel00_00_00_01_01_00_00_00_00_00_00_00_00.set_verticalgap("0");
                p.Panel00_00_00_01_01_00_00_00_00_00_00_00_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_00_01_01_00_00_00_00_00_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_00_01_01_00_00_00_00_00_00_00_00.set_type("horizontal");
                p.Panel00_00_00_01_01_00_00_00_00_00_00_00_00.move("0","1370","100.00%","97",null,null);

                p.sta00_00_01_13.set_taborder("119");
                p.sta00_00_01_13.set_text("지정시간통보 서비스");
                p.sta00_00_01_13.set_cssclass("sta_WF_Label");
                p.sta00_00_01_13.move("10","10","96.08%","46",null,null);

                p.cb00_00_00_00_00_00_00_00_00_00.set_taborder("120");
                p.cb00_00_00_00_00_00_00_00_00_00.set_text("사용료 : 무료");
                p.cb00_00_00_00_00_00_00_00_00_00.move("61","1423","100%","40",null,null);

                p.Panel01_00_00_01_00_00_00_00_00_00.set_taborder("121");
                p.Panel01_00_00_01_00_00_00_00_00_00.set_flexmainaxisalign("spacebetween");
                p.Panel01_00_00_01_00_00_00_00_00_00.set_flexcrossaxisalign("center");
                p.Panel01_00_00_01_00_00_00_00_00_00.set_flexcrossaxiswrapalign("start");
                p.Panel01_00_00_01_00_00_00_00_00_00.set_fittocontents("height");
                p.Panel01_00_00_01_00_00_00_00_00_00.move("0","27","100%","60",null,null);

                p.Panel01_00_00_00_00_01_01_00_00_00_00_00_00_00_00_00.set_taborder("122");
                p.Panel01_00_00_00_00_01_01_00_00_00_00_00_00_00_00_00.set_type("vertical");
                p.Panel01_00_00_00_00_01_01_00_00_00_00_00_00_00_00_00.set_flexgrow("1");
                p.Panel01_00_00_00_00_01_01_00_00_00_00_00_00_00_00_00.set_fittocontents("height");
                p.Panel01_00_00_00_00_01_01_00_00_00_00_00_00_00_00_00.move("30","10","310","86",null,null);

                p.sta00_00_01_129.set_taborder("123");
                p.sta00_00_01_129.set_text("대상번호");
                p.sta00_00_01_129.set_cssclass("sta_WF_Label");
                p.sta00_00_01_129.move("876","150","100%","46",null,null);

                p.edt00_01_01_00_00_00_00_01_00_00_00_00_00_00_00_00_00_00.set_taborder("124");
                p.edt00_01_01_00_00_00_00_01_00_00_00_00_00_00_00_00_00_00.set_readonly("false");
                p.edt00_01_01_00_00_00_00_01_00_00_00_00_00_00_00_00_00_00.move("940","142","100%","40",null,null);

                p.Panel01_01_00_00_01_00_00_00_00_00_00_00_00_00_00.set_taborder("125");
                p.Panel01_01_00_00_01_00_00_00_00_00_00_00_00_00_00.set_type("vertical");
                p.Panel01_01_00_00_01_00_00_00_00_00_00_00_00_00_00.set_flexgrow("1");
                p.Panel01_01_00_00_01_00_00_00_00_00_00_00_00_00_00.set_fittocontents("height");
                p.Panel01_01_00_00_01_00_00_00_00_00_00_00_00_00_00.move("520","1370","310","86",null,null);

                p.Panel00_00_00_01_01_00_00_00_00_00_00_00_00_00.set_taborder("126");
                p.Panel00_00_00_01_01_00_00_00_00_00_00_00_00_00.set_horizontalgap("20");
                p.Panel00_00_00_01_01_00_00_00_00_00_00_00_00_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_00_01_01_00_00_00_00_00_00_00_00_00.set_flexwrap("wrap");
                p.Panel00_00_00_01_01_00_00_00_00_00_00_00_00_00.set_fittocontents("height");
                p.Panel00_00_00_01_01_00_00_00_00_00_00_00_00_00.set_verticalgap("0");
                p.Panel00_00_00_01_01_00_00_00_00_00_00_00_00_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_00_01_01_00_00_00_00_00_00_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_00_01_01_00_00_00_00_00_00_00_00_00.set_type("horizontal");
                p.Panel00_00_00_01_01_00_00_00_00_00_00_00_00_00.move("0","1370","100.00%","97",null,null);

                p.sta00_00_01_128.set_taborder("127");
                p.sta00_00_01_128.set_text("발신번호표시(CID) 서비스");
                p.sta00_00_01_128.set_cssclass("sta_WF_Label");
                p.sta00_00_01_128.move("10","10","96.08%","46",null,null);

                p.cb00_00_00_00_00_00_00_00_00_00_00.set_taborder("128");
                p.cb00_00_00_00_00_00_00_00_00_00_00.set_text("사용료 : 무료");
                p.cb00_00_00_00_00_00_00_00_00_00_00.move("61","1423","100%","40",null,null);

                p.Panel01_00_00_01_00_00_00_00_00_00_00.set_taborder("129");
                p.Panel01_00_00_01_00_00_00_00_00_00_00.set_flexmainaxisalign("spacebetween");
                p.Panel01_00_00_01_00_00_00_00_00_00_00.set_flexcrossaxisalign("center");
                p.Panel01_00_00_01_00_00_00_00_00_00_00.set_flexcrossaxiswrapalign("start");
                p.Panel01_00_00_01_00_00_00_00_00_00_00.set_fittocontents("height");
                p.Panel01_00_00_01_00_00_00_00_00_00_00.move("0","27","100%","60",null,null);

                p.Panel01_00_00_00_00_01_01_00_00_00_00_00_00_00_00_00_00.set_taborder("130");
                p.Panel01_00_00_00_00_01_01_00_00_00_00_00_00_00_00_00_00.set_type("vertical");
                p.Panel01_00_00_00_00_01_01_00_00_00_00_00_00_00_00_00_00.set_flexgrow("1");
                p.Panel01_00_00_00_00_01_01_00_00_00_00_00_00_00_00_00_00.set_fittocontents("height");
                p.Panel01_00_00_00_00_01_01_00_00_00_00_00_00_00_00_00_00.move("30","10","310","86",null,null);

                p.sta00_00_01_126.set_taborder("131");
                p.sta00_00_01_126.set_text("대상번호");
                p.sta00_00_01_126.set_cssclass("sta_WF_Label");
                p.sta00_00_01_126.move("876","150","100%","46",null,null);

                p.edt00_01_01_00_00_00_00_01_00_00_00_00_00_00_00_00_00_00_00.set_taborder("132");
                p.edt00_01_01_00_00_00_00_01_00_00_00_00_00_00_00_00_00_00_00.set_readonly("false");
                p.edt00_01_01_00_00_00_00_01_00_00_00_00_00_00_00_00_00_00_00.move("940","142","100%","40",null,null);

                p.Panel01_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00.set_taborder("133");
                p.Panel01_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00.set_type("vertical");
                p.Panel01_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00.set_flexgrow("1");
                p.Panel01_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00.set_fittocontents("height");
                p.Panel01_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00.move("520","1370","310","86",null,null);

                p.Panel00_00_00_01_01_00_00_00_00_00_00_00_00_00_00.set_taborder("134");
                p.Panel00_00_00_01_01_00_00_00_00_00_00_00_00_00_00.set_horizontalgap("20");
                p.Panel00_00_00_01_01_00_00_00_00_00_00_00_00_00_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_00_01_01_00_00_00_00_00_00_00_00_00_00.set_flexwrap("wrap");
                p.Panel00_00_00_01_01_00_00_00_00_00_00_00_00_00_00.set_fittocontents("height");
                p.Panel00_00_00_01_01_00_00_00_00_00_00_00_00_00_00.set_verticalgap("0");
                p.Panel00_00_00_01_01_00_00_00_00_00_00_00_00_00_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_00_01_01_00_00_00_00_00_00_00_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_00_01_01_00_00_00_00_00_00_00_00_00_00.set_type("horizontal");
                p.Panel00_00_00_01_01_00_00_00_00_00_00_00_00_00_00.move("0","1370","100.00%","97",null,null);

                p.sta00_00_01_125.set_taborder("135");
                p.sta00_00_01_125.set_text("대표전화 서비스(대표번호)");
                p.sta00_00_01_125.set_cssclass("sta_WF_Label");
                p.sta00_00_01_125.move("10","10","96.08%","46",null,null);

                p.cb00_00_01_00.set_taborder("136");
                p.cb00_00_01_00.set_text("사용료 : 무료");
                p.cb00_00_01_00.move("61","1423","100%","40",null,null);

                p.Panel01_00_01_00.set_taborder("137");
                p.Panel01_00_01_00.set_flexmainaxisalign("spacebetween");
                p.Panel01_00_01_00.set_fittocontents("height");
                p.Panel01_00_01_00.set_flexcrossaxisalign("center");
                p.Panel01_00_01_00.move("0","27","100%","60",null,null);

                p.Panel01_00_00_00_00_01_01_00_01_00.set_taborder("138");
                p.Panel01_00_00_00_00_01_01_00_01_00.set_type("vertical");
                p.Panel01_00_00_00_00_01_01_00_01_00.set_flexgrow("1");
                p.Panel01_00_00_00_00_01_01_00_01_00.set_fittocontents("height");
                p.Panel01_00_00_00_00_01_01_00_01_00.move("30","10","310","86",null,null);

                p.sta00_00_01_124.set_taborder("139");
                p.sta00_00_01_124.set_text("대상번호");
                p.sta00_00_01_124.set_cssclass("sta_WF_Label");
                p.sta00_00_01_124.move("876","150","100%","46",null,null);

                p.edt00_01_01_00_00_00_00_01_00_00_01_00.set_taborder("140");
                p.edt00_01_01_00_00_00_00_01_00_00_01_00.set_readonly("false");
                p.edt00_01_01_00_00_00_00_01_00_00_01_00.move("940","142","100%","40",null,null);

                p.sta00_00_01_122.set_taborder("141");
                p.sta00_00_01_122.set_text("대표번호");
                p.sta00_00_01_122.set_cssclass("sta_WF_Des");
                p.sta00_00_01_122.set_fittocontents("height");
                p.sta00_00_01_122.set_usedecorate("true");
                p.sta00_00_01_122.move("0","46","100%","30",null,null);

                p.Panel02_00_00_00.set_taborder("142");
                p.Panel02_00_00_00.set_type("vertical");
                p.Panel02_00_00_00.set_verticalgap("10");
                p.Panel02_00_00_00.set_fittocontents("height");
                p.Panel02_00_00_00.move("520","1416","100%","80",null,null);

                p.Panel01_01_00_00_01_00_00_01_00.set_taborder("143");
                p.Panel01_01_00_00_01_00_00_01_00.set_type("vertical");
                p.Panel01_01_00_00_01_00_00_01_00.set_flexgrow("1");
                p.Panel01_01_00_00_01_00_00_01_00.set_fittocontents("height");
                p.Panel01_01_00_00_01_00_00_01_00.move("520","1370","310","126",null,null);

                p.Panel00_00_00_01_01_00_01_00.set_taborder("144");
                p.Panel00_00_00_01_01_00_01_00.set_horizontalgap("20");
                p.Panel00_00_00_01_01_00_01_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_00_01_01_00_01_00.set_flexwrap("wrap");
                p.Panel00_00_00_01_01_00_01_00.set_fittocontents("height");
                p.Panel00_00_00_01_01_00_01_00.set_verticalgap("0");
                p.Panel00_00_00_01_01_00_01_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_00_01_01_00_01_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_00_01_01_00_01_00.set_type("horizontal");
                p.Panel00_00_00_01_01_00_01_00.move("0","1370","100.00%","137",null,null);

                p.sta00_00_01_121.set_taborder("145");
                p.sta00_00_01_121.set_text("대표전화 서비스(종속번호)");
                p.sta00_00_01_121.set_cssclass("sta_WF_Label");
                p.sta00_00_01_121.move("10","10","96.08%","46",null,null);

                p.cb00_00_01_00_00.set_taborder("146");
                p.cb00_00_01_00_00.set_text("사용료 : 무료");
                p.cb00_00_01_00_00.move("61","1423","100%","40",null,null);

                p.Panel01_00_01_00_00.set_taborder("147");
                p.Panel01_00_01_00_00.set_flexmainaxisalign("spacebetween");
                p.Panel01_00_01_00_00.set_fittocontents("height");
                p.Panel01_00_01_00_00.set_flexcrossaxisalign("center");
                p.Panel01_00_01_00_00.move("0","27","100%","60",null,null);

                p.Panel01_00_00_00_00_01_01_00_01_00_00.set_taborder("148");
                p.Panel01_00_00_00_00_01_01_00_01_00_00.set_type("vertical");
                p.Panel01_00_00_00_00_01_01_00_01_00_00.set_flexgrow("1");
                p.Panel01_00_00_00_00_01_01_00_01_00_00.set_fittocontents("height");
                p.Panel01_00_00_00_00_01_01_00_01_00_00.move("30","10","310","86",null,null);

                p.staLabel01_02_00_00_01_00_00_01_00_00.set_taborder("149");
                p.staLabel01_02_00_00_01_00_00_01_00_00.set_text("대상번호");
                p.staLabel01_02_00_00_01_00_00_01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_02_00_00_01_00_00_01_00_00.move("876","150","100%","46",null,null);

                p.edt00_01_01_00_00_00_00_01_00_00_01_00_00.set_taborder("150");
                p.edt00_01_01_00_00_00_00_01_00_00_01_00_00.set_readonly("false");
                p.edt00_01_01_00_00_00_00_01_00_00_01_00_00.move("940","142","100%","40",null,null);

                p.sta00_00_01_12.set_taborder("151");
                p.sta00_00_01_12.set_text("종속번호");
                p.sta00_00_01_12.set_cssclass("sta_WF_Des");
                p.sta00_00_01_12.set_fittocontents("height");
                p.sta00_00_01_12.set_usedecorate("true");
                p.sta00_00_01_12.move("0","46","100%","30",null,null);

                p.Panel02_00_00_00_00.set_taborder("152");
                p.Panel02_00_00_00_00.set_type("vertical");
                p.Panel02_00_00_00_00.set_verticalgap("10");
                p.Panel02_00_00_00_00.set_fittocontents("height");
                p.Panel02_00_00_00_00.move("520","1416","100%","80",null,null);

                p.Panel01_01_00_00_01_00_00_01_00_00.set_taborder("153");
                p.Panel01_01_00_00_01_00_00_01_00_00.set_type("vertical");
                p.Panel01_01_00_00_01_00_00_01_00_00.set_flexgrow("1");
                p.Panel01_01_00_00_01_00_00_01_00_00.set_fittocontents("height");
                p.Panel01_01_00_00_01_00_00_01_00_00.move("520","1370","310","126",null,null);

                p.Panel00_00_00_01_01_00_01_00_00.set_taborder("154");
                p.Panel00_00_00_01_01_00_01_00_00.set_horizontalgap("20");
                p.Panel00_00_00_01_01_00_01_00_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_00_01_01_00_01_00_00.set_flexwrap("wrap");
                p.Panel00_00_00_01_01_00_01_00_00.set_fittocontents("height");
                p.Panel00_00_00_01_01_00_01_00_00.set_verticalgap("0");
                p.Panel00_00_00_01_01_00_01_00_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_00_01_01_00_01_00_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_00_01_01_00_01_00_00.set_type("horizontal");
                p.Panel00_00_00_01_01_00_01_00_00.move("0","1370","100.00%","137",null,null);

                p.sta00_00_01_118.set_taborder("155");
                p.sta00_00_01_118.set_text("내선통화그룹(IDP) 서비스");
                p.sta00_00_01_118.set_cssclass("sta_WF_Label");
                p.sta00_00_01_118.move("10","10","96.08%","46",null,null);

                p.cb00_00_00_00_00_00_00_00_00_00_00_00.set_taborder("156");
                p.cb00_00_00_00_00_00_00_00_00_00_00_00.set_text("사용료 : 무료");
                p.cb00_00_00_00_00_00_00_00_00_00_00_00.move("61","1423","100%","40",null,null);

                p.Panel01_00_00_01_00_00_00_00_00_00_00_00.set_taborder("157");
                p.Panel01_00_00_01_00_00_00_00_00_00_00_00.set_flexmainaxisalign("spacebetween");
                p.Panel01_00_00_01_00_00_00_00_00_00_00_00.set_flexcrossaxisalign("center");
                p.Panel01_00_00_01_00_00_00_00_00_00_00_00.set_flexcrossaxiswrapalign("start");
                p.Panel01_00_00_01_00_00_00_00_00_00_00_00.set_fittocontents("height");
                p.Panel01_00_00_01_00_00_00_00_00_00_00_00.move("0","27","100%","60",null,null);

                p.Panel01_00_00_00_00_01_01_00_00_00_00_00_00_00_00_00_00_00.set_taborder("158");
                p.Panel01_00_00_00_00_01_01_00_00_00_00_00_00_00_00_00_00_00.set_type("vertical");
                p.Panel01_00_00_00_00_01_01_00_00_00_00_00_00_00_00_00_00_00.set_flexgrow("1");
                p.Panel01_00_00_00_00_01_01_00_00_00_00_00_00_00_00_00_00_00.set_fittocontents("height");
                p.Panel01_00_00_00_00_01_01_00_00_00_00_00_00_00_00_00_00_00.move("30","10","310","86",null,null);

                p.sta00_00_01_117.set_taborder("159");
                p.sta00_00_01_117.set_text("대상번호");
                p.sta00_00_01_117.set_cssclass("sta_WF_Label");
                p.sta00_00_01_117.move("876","150","100%","46",null,null);

                p.edt00_01_01_00_00_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00.set_taborder("160");
                p.edt00_01_01_00_00_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00.set_readonly("false");
                p.edt00_01_01_00_00_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00.move("940","142","100%","40",null,null);

                p.Panel01_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00.set_taborder("161");
                p.Panel01_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00.set_type("vertical");
                p.Panel01_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00.set_flexgrow("1");
                p.Panel01_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00.set_fittocontents("height");
                p.Panel01_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00.move("520","1370","310","86",null,null);

                p.Panel00_00_00_01_01_00_00_00_00_00_00_00_00_00_00_00.set_taborder("162");
                p.Panel00_00_00_01_01_00_00_00_00_00_00_00_00_00_00_00.set_horizontalgap("20");
                p.Panel00_00_00_01_01_00_00_00_00_00_00_00_00_00_00_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_00_01_01_00_00_00_00_00_00_00_00_00_00_00.set_flexwrap("wrap");
                p.Panel00_00_00_01_01_00_00_00_00_00_00_00_00_00_00_00.set_fittocontents("height");
                p.Panel00_00_00_01_01_00_00_00_00_00_00_00_00_00_00_00.set_verticalgap("0");
                p.Panel00_00_00_01_01_00_00_00_00_00_00_00_00_00_00_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_00_01_01_00_00_00_00_00_00_00_00_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_00_01_01_00_00_00_00_00_00_00_00_00_00_00.set_type("horizontal");
                p.Panel00_00_00_01_01_00_00_00_00_00_00_00_00_00_00_00.move("0","1370","100.00%","97",null,null);

                p.sta00_00_01_116.set_taborder("163");
                p.sta00_00_01_116.set_text("ARS(자동응답) 서비스");
                p.sta00_00_01_116.set_cssclass("sta_WF_Label");
                p.sta00_00_01_116.move("10","10","96.08%","46",null,null);

                p.cb00_00_01_00_00_00.set_taborder("164");
                p.cb00_00_01_00_00_00.set_text("사용료 : 무료");
                p.cb00_00_01_00_00_00.move("61","1423","100%","40",null,null);

                p.Panel01_00_01_00_00_00.set_taborder("165");
                p.Panel01_00_01_00_00_00.set_flexmainaxisalign("spacebetween");
                p.Panel01_00_01_00_00_00.set_fittocontents("height");
                p.Panel01_00_01_00_00_00.set_flexcrossaxisalign("center");
                p.Panel01_00_01_00_00_00.move("0","27","100%","60",null,null);

                p.Panel01_00_00_00_00_01_01_00_01_00_00_00.set_taborder("166");
                p.Panel01_00_00_00_00_01_01_00_01_00_00_00.set_type("vertical");
                p.Panel01_00_00_00_00_01_01_00_01_00_00_00.set_flexgrow("1");
                p.Panel01_00_00_00_00_01_01_00_01_00_00_00.set_fittocontents("height");
                p.Panel01_00_00_00_00_01_01_00_01_00_00_00.move("20","0","310","133",null,null);

                p.staLabel01_02_00_00_01_00_00_01_00_00_00.set_taborder("167");
                p.staLabel01_02_00_00_01_00_00_01_00_00_00.set_text("대상번호");
                p.staLabel01_02_00_00_01_00_00_01_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_02_00_00_01_00_00_01_00_00_00.move("876","150","100%","46",null,null);

                p.sta00_00_01_114.set_taborder("168");
                p.sta00_00_01_114.set_readonly("false");
                p.sta00_00_01_114.move("940","142","100%","40",null,null);

                p.sta00_00_01_112.set_taborder("169");
                p.sta00_00_01_112.set_text("대표번호");
                p.sta00_00_01_112.set_cssclass("sta_WF_Des");
                p.sta00_00_01_112.set_fittocontents("height");
                p.sta00_00_01_112.set_usedecorate("true");
                p.sta00_00_01_112.move("0","46","100%","30",null,null);

                p.Panel02_00_00_00_00_00.set_taborder("170");
                p.Panel02_00_00_00_00_00.set_type("vertical");
                p.Panel02_00_00_00_00_00.set_verticalgap("10");
                p.Panel02_00_00_00_00_00.set_fittocontents("height");
                p.Panel02_00_00_00_00_00.move("520","1416","100%","80",null,null);

                p.Panel01_01_00_00_01_00_00_01_00_00_00.set_taborder("171");
                p.Panel01_01_00_00_01_00_00_01_00_00_00.set_type("vertical");
                p.Panel01_01_00_00_01_00_00_01_00_00_00.set_flexgrow("1");
                p.Panel01_01_00_00_01_00_00_01_00_00_00.set_fittocontents("height");
                p.Panel01_01_00_00_01_00_00_01_00_00_00.move("520","1370","310","126",null,null);

                p.Panel00_00_00_01_01_00_01_00_00_00.set_taborder("172");
                p.Panel00_00_00_01_01_00_01_00_00_00.set_horizontalgap("20");
                p.Panel00_00_00_01_01_00_01_00_00_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_00_01_01_00_01_00_00_00.set_flexwrap("wrap");
                p.Panel00_00_00_01_01_00_01_00_00_00.set_fittocontents("height");
                p.Panel00_00_00_01_01_00_01_00_00_00.set_verticalgap("0");
                p.Panel00_00_00_01_01_00_01_00_00_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_00_01_01_00_01_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_00_01_01_00_01_00_00_00.set_type("horizontal");
                p.Panel00_00_00_01_01_00_01_00_00_00.move("0","3025","100.00%","144",null,null);

                p.Panel04.set_taborder("200");
                p.Panel04.set_type("vertical");
                p.Panel04.move("0","3791","100%","277",null,null);

                p.sta00_00_01_113.set_taborder("173");
                p.sta00_00_01_113.set_text("사용료 : 대표번호당 10,000원/월\r\n음원제작비 : 100,000원/회");
                p.sta00_00_01_113.set_cssclass("sta_WF_Des");
                p.sta00_00_01_113.set_fittocontents("height");
                p.sta00_00_01_113.set_usedecorate("true");
                p.sta00_00_01_113.move("0","46","100%","47",null,null);

                p.Panel01_00_00_00_00_01_01_00_01_00_00_00_00.set_taborder("174");
                p.Panel01_00_00_00_00_01_01_00_01_00_00_00_00.set_type("vertical");
                p.Panel01_00_00_00_00_01_01_00_01_00_00_00_00.set_flexgrow("1");
                p.Panel01_00_00_00_00_01_01_00_01_00_00_00_00.set_fittocontents("height");
                p.Panel01_00_00_00_00_01_01_00_01_00_00_00_00.move("20","0","310","0",null,null);

                p.sta00_00_01_115.set_taborder("175");
                p.sta00_00_01_115.set_text("대상번호");
                p.sta00_00_01_115.set_cssclass("sta_WF_Label");
                p.sta00_00_01_115.move("876","150","100%","46",null,null);

                p.sta00_00_01_11.set_taborder("176");
                p.sta00_00_01_11.set_readonly("false");
                p.sta00_00_01_11.move("940","142","100%","40",null,null);

                p.sta00_00_01_00_00_00_00_0.set_taborder("177");
                p.sta00_00_01_00_00_00_00_0.set_text("종속번호");
                p.sta00_00_01_00_00_00_00_0.set_cssclass("sta_WF_Des");
                p.sta00_00_01_00_00_00_00_0.set_fittocontents("height");
                p.sta00_00_01_00_00_00_00_0.set_usedecorate("true");
                p.sta00_00_01_00_00_00_00_0.move("0","46","100%","30",null,null);

                p.Panel02_00_00_00_00_00_00.set_taborder("178");
                p.Panel02_00_00_00_00_00_00.set_type("vertical");
                p.Panel02_00_00_00_00_00_00.set_verticalgap("10");
                p.Panel02_00_00_00_00_00_00.set_fittocontents("height");
                p.Panel02_00_00_00_00_00_00.move("520","1416","100%","80",null,null);

                p.Panel01_01_00_00_0.set_taborder("179");
                p.Panel01_01_00_00_0.set_type("vertical");
                p.Panel01_01_00_00_0.set_flexgrow("1");
                p.Panel01_01_00_00_0.set_fittocontents("height");
                p.Panel01_01_00_00_0.move("520","1370","310","126",null,null);

                p.Panel00_00_00_01_01_00_01_00_00_00_00.set_taborder("180");
                p.Panel00_00_00_01_01_00_01_00_00_00_00.set_horizontalgap("20");
                p.Panel00_00_00_01_01_00_01_00_00_00_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_00_01_01_00_01_00_00_00_00.set_flexwrap("wrap");
                p.Panel00_00_00_01_01_00_01_00_00_00_00.set_fittocontents("height");
                p.Panel00_00_00_01_01_00_01_00_00_00_00.set_verticalgap("0");
                p.Panel00_00_00_01_01_00_01_00_00_00_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_00_01_01_00_01_00_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_00_01_01_00_01_00_00_00_00.set_type("horizontal");
                p.Panel00_00_00_01_01_00_01_00_00_00_00.move("0","3025","100.00%","144",null,null);

                p.staLabel01_00_00_00_00_00.set_taborder("181");
                p.staLabel01_00_00_00_00_00.set_text("서비스신청 구분");
                p.staLabel01_00_00_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel01_00_00_00_00_00.move("10","10","96.08%","46",null,null);

                p.cmb00_00.set_taborder("182");
                p.cmb00_00.set_value("");
                p.cmb00_00.set_index("-1");
                p.cmb00_00.move("97","272","100%","40",null,null);

                p.sta00_00_01_00_00_00_01.set_taborder("183");
                p.sta00_00_01_00_00_00_01.set_text("다회선 신청시 신청내역을 파일로 첨부해 주십시요\r\n신청하려는 전화 종류가 <fc v=\'#ee2e5b\'>[일반]전화</fc>인지 <fc v=\'#ee2e5b\'>[인터넷]전화</fc>인지 확인하고 신청하시길 바랍니다.\r\n");
                p.sta00_00_01_00_00_00_01.set_cssclass("sta_WF_Des");
                p.sta00_00_01_00_00_00_01.set_fittocontents("height");
                p.sta00_00_01_00_00_00_01.set_usedecorate("true");
                p.sta00_00_01_00_00_00_01.move("0","97","100.00%","50",null,null);

                p.Panel01_00_00_00_00_00.set_taborder("184");
                p.Panel01_00_00_00_00_00.set_type("vertical");
                p.Panel01_00_00_00_00_00.set_flexgrow("1");
                p.Panel01_00_00_00_00_00.set_verticalgap("5");
                p.Panel01_00_00_00_00_00.move("20","0","100%","146",null,null);

                p.Panel00_00_00_00.set_taborder("185");
                p.Panel00_00_00_00.set_horizontalgap("20");
                p.Panel00_00_00_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_00_00.set_flexwrap("wrap");
                p.Panel00_00_00_00.set_fittocontents("height");
                p.Panel00_00_00_00.set_verticalgap("0");
                p.Panel00_00_00_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_00_00.set_type("vertical");
                p.Panel00_00_00_00.move("0","0","100.00%","157",null,null);

                p.grid02.set_taborder("205");
                p.grid02.set_fillareatype("allrow");
                p.grid02.set_autofittype("col");
                p.grid02.move("20","86","100%","178",null,null);

                p.staLabel01_00_00_00_00_01_02.set_taborder("186");
                p.staLabel01_00_00_00_00_01_02.set_text("인터넷전화 신청수");
                p.staLabel01_00_00_00_00_01_02.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00_00_00_01_02.move("10","10","96.08%","46",null,null);

                p.edt00_01_04.set_taborder("187");
                p.edt00_01_04.set_readonly("false");
                p.edt00_01_04.move("940","142","100%","40",null,null);

                p.Panel01_00_00_00_00_01_02.set_taborder("188");
                p.Panel01_00_00_00_00_01_02.set_type("vertical");
                p.Panel01_00_00_00_00_01_02.set_flexgrow("1");
                p.Panel01_00_00_00_00_01_02.move("30","10","310","86",null,null);

                p.Panel01_00_00_02.set_taborder("189");
                p.Panel01_00_00_02.set_text("IP전화기 기종");
                p.Panel01_00_00_02.set_cssclass("sta_WF_Label");
                p.Panel01_00_00_02.move("876","150","100%","46",null,null);

                p.edt00_01_014.set_taborder("190");
                p.edt00_01_014.set_readonly("false");
                p.edt00_01_014.move("940","142","100%","40",null,null);

                p.Panel01_01_00_00_01_01.set_taborder("191");
                p.Panel01_01_00_00_01_01.set_type("vertical");
                p.Panel01_01_00_00_01_01.set_flexgrow("1");
                p.Panel01_01_00_00_01_01.move("876","150","310","86",null,null);

                p.Panel00_00_00_01_02.set_taborder("192");
                p.Panel00_00_00_01_02.set_horizontalgap("20");
                p.Panel00_00_00_01_02.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_00_01_02.set_flexwrap("wrap");
                p.Panel00_00_00_01_02.set_fittocontents("height");
                p.Panel00_00_00_01_02.set_verticalgap("0");
                p.Panel00_00_00_01_02.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_00_01_02.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_00_01_02.set_type("horizontal");
                p.Panel00_00_00_01_02.move("491","315","100.00%","97",null,null);

                p.Panel03.set_taborder("193");
                p.Panel03.set_type("vertical");
                p.Panel03.set_fittocontents("height");
                p.Panel03.set_spacing("0px 20px 10px 20px");
                p.Panel03.move("0","3646","100.00%","600",null,null);

                p.grid00_00.set_taborder("194");
                p.grid00_00.set_fillareatype("allrow");
                p.grid00_00.set_autofittype("col");
                p.grid00_00.move("20","46","100%","178",null,null);

                p.staLabel01_00_00_00_00_01_00_01.set_taborder("195");
                p.staLabel01_00_00_00_00_01_00_01.set_text("신청내역");
                p.staLabel01_00_00_00_00_01_00_01.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00_00_00_01_00_01.move("10","10","100%","46",null,null);

                p.btnGrdDel00.set_taborder("196");
                p.btnGrdDel00.set_text("삭제");
                p.btnGrdDel00.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel00.set_visible("true");
                p.btnGrdDel00.set_fittocontents("width");
                p.btnGrdDel00.move("804.00","10","45","34",null,null);

                p.btnGrdAdd00.set_taborder("197");
                p.btnGrdAdd00.set_text("추가");
                p.btnGrdAdd00.set_cssclass("btn_WF_Small");
                p.btnGrdAdd00.set_visible("true");
                p.btnGrdAdd00.set_fittocontents("width");
                p.btnGrdAdd00.move("774.00","10","47","34",null,null);

                p.panGrdBtn00.set_taborder("198");
                p.panGrdBtn00.set_flexcrossaxisalign("start");
                p.panGrdBtn00.set_flexcrossaxiswrapalign("start");
                p.panGrdBtn00.set_flexmainaxisalign("end");
                p.panGrdBtn00.set_horizontalgap("10");
                p.panGrdBtn00.set_spacing("10px 0px");
                p.panGrdBtn00.move("470","0","100%","54",null,null);

                p.Grid00_00.set_taborder("199");
                p.Grid00_00.set_binddataset("ds00");
                p.Grid00_00.set_nodatatext("데이타가 없습니다.");
                p.Grid00_00.set_autofittype("col");
                p.Grid00_00.move("0","3827","100.00%","212",null,null);

                p.staLabel01_00_00_00_02.set_taborder("201");
                p.staLabel01_00_00_00_02.set_text("시외전환 사전선택");
                p.staLabel01_00_00_00_02.set_cssclass("sta_WF_Label_E");
                p.staLabel01_00_00_00_02.move("0","0","100%","46",null,null);

                p.radio00_00_00.set_taborder("202");
                p.radio00_00_00.set_innerdataset(divForm_form_Div04_form_radio00_00_00_innerdataset);
                p.radio00_00_00.set_codecolumn("codecolumn");
                p.radio00_00_00.set_datacolumn("datacolumn");
                p.radio00_00_00.set_columncount("1");
                p.radio00_00_00.set_rowcount("2");
                p.radio00_00_00.set_direction("vertical");
                p.radio00_00_00.set_fittocontents("width");
                p.radio00_00_00.move("96","73","100%","80",null,null);

                p.Panel01_00_00_00_03.set_taborder("203");
                p.Panel01_00_00_00_03.set_type("vertical");
                p.Panel01_00_00_00_03.set_fittocontents("height");
                p.Panel01_00_00_00_03.move("20","0","100%","86",null,null);

                p.Panel00_00_03.set_taborder("204");
                p.Panel00_00_03.set_horizontalgap("20");
                p.Panel00_00_03.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_03.set_flexwrap("wrap");
                p.Panel00_00_03.set_fittocontents("height");
                p.Panel00_00_03.set_verticalgap("0");
                p.Panel00_00_03.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_03.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_03.move("0","4068","100.00%","275",null,null);

                p.staLabel01_00_00_00_00_00_00.set_taborder("206");
                p.staLabel01_00_00_00_00_00_00.set_text("서비스신청 구분");
                p.staLabel01_00_00_00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00_00_00_00_00.move("10","10","96.08%","46",null,null);

                p.cmb00_00_00.set_taborder("207");
                p.cmb00_00_00.set_value("");
                p.cmb00_00_00.set_index("-1");
                p.cmb00_00_00.move("97","272","100%","40",null,null);

                p.sta00_00_01_00_00_00_01_00.set_taborder("208");
                p.sta00_00_01_00_00_00_01_00.set_text("다회선 신청시 신청내역을 파일로 첨부해 주십시요\r\n신청하려는 전화 종류가 <fc v=\'#ee2e5b\'>[일반]전화</fc>인지 <fc v=\'#ee2e5b\'>[인터넷]전화</fc>인지 확인하고 신청하시길 바랍니다.\r\n");
                p.sta00_00_01_00_00_00_01_00.set_cssclass("sta_WF_Des");
                p.sta00_00_01_00_00_00_01_00.set_fittocontents("height");
                p.sta00_00_01_00_00_00_01_00.set_usedecorate("true");
                p.sta00_00_01_00_00_00_01_00.move("0","97","100.00%","50",null,null);

                p.Panel01_00_00_00_00_00_00.set_taborder("209");
                p.Panel01_00_00_00_00_00_00.set_type("vertical");
                p.Panel01_00_00_00_00_00_00.set_flexgrow("1");
                p.Panel01_00_00_00_00_00_00.set_verticalgap("5");
                p.Panel01_00_00_00_00_00_00.set_fittocontents("height");
                p.Panel01_00_00_00_00_00_00.move("20","0","100%","146",null,null);

                p.Panel00_00_00_00_00.set_taborder("210");
                p.Panel00_00_00_00_00.set_horizontalgap("20");
                p.Panel00_00_00_00_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_00_00_00.set_flexwrap("wrap");
                p.Panel00_00_00_00_00.set_fittocontents("height");
                p.Panel00_00_00_00_00.set_verticalgap("0");
                p.Panel00_00_00_00_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_00_00_00.set_type("vertical");
                p.Panel00_00_00_00_00.move("0","0","100.00%","157",null,null);

                p.grid03.set_taborder("219");
                p.grid03.set_fillareatype("allrow");
                p.grid03.set_autofittype("col");
                p.grid03.move("0","51","100.00%","178",null,null);

                p.btnGrdDel00_00.set_taborder("211");
                p.btnGrdDel00_00.set_text("삭제");
                p.btnGrdDel00_00.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel00_00.set_visible("true");
                p.btnGrdDel00_00.set_fittocontents("width");
                p.btnGrdDel00_00.move("804.00","10","48","34",null,null);

                p.btnGrdAdd00_00.set_taborder("212");
                p.btnGrdAdd00_00.set_text("추가");
                p.btnGrdAdd00_00.set_cssclass("btn_WF_Small");
                p.btnGrdAdd00_00.set_visible("true");
                p.btnGrdAdd00_00.set_fittocontents("width");
                p.btnGrdAdd00_00.move("774.00","10","50","34",null,null);

                p.panGrdBtn00_00.set_taborder("213");
                p.panGrdBtn00_00.set_flexcrossaxisalign("start");
                p.panGrdBtn00_00.set_flexcrossaxiswrapalign("start");
                p.panGrdBtn00_00.set_flexmainaxisalign("end");
                p.panGrdBtn00_00.set_horizontalgap("10");
                p.panGrdBtn00_00.set_spacing("10px 0px");
                p.panGrdBtn00_00.move("470","0","100%","54",null,null);

                p.Grid00_00_00.set_taborder("214");
                p.Grid00_00_00.set_binddataset("ds00");
                p.Grid00_00_00.set_nodatatext("데이타가 없습니다.");
                p.Grid00_00_00.set_autofittype("col");
                p.Grid00_00_00.move("0","3827","100.00%","212",null,null);

                p.Panel04_00.set_taborder("215");
                p.Panel04_00.set_type("vertical");
                p.Panel04_00.set_spacing("0px 20px 10px 20px");
                p.Panel04_00.set_fittocontents("height");
                p.Panel04_00.move("0","3791","100%","277",null,null);

                p.staLabel01_00_00_00_00_00_00_00.set_taborder("216");
                p.staLabel01_00_00_00_00_00_00_00.set_text("상품별 요금 기준");
                p.staLabel01_00_00_00_00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00_00_00_00_00_00.move("10","10","100%","46",null,null);

                p.Panel01_00_00_00_00_00_00_00.set_taborder("217");
                p.Panel01_00_00_00_00_00_00_00.set_type("vertical");
                p.Panel01_00_00_00_00_00_00_00.set_flexgrow("1");
                p.Panel01_00_00_00_00_00_00_00.set_verticalgap("5");
                p.Panel01_00_00_00_00_00_00_00.set_fittocontents("height");
                p.Panel01_00_00_00_00_00_00_00.move("20","0","100%","300",null,null);

                p.Panel00_00_00_00_00_00.set_taborder("218");
                p.Panel00_00_00_00_00_00.set_horizontalgap("20");
                p.Panel00_00_00_00_00_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_00_00_00_00.set_flexwrap("wrap");
                p.Panel00_00_00_00_00_00.set_fittocontents("height");
                p.Panel00_00_00_00_00_00.set_verticalgap("0");
                p.Panel00_00_00_00_00_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_00_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_00_00_00_00.set_type("vertical");
                p.Panel00_00_00_00_00_00.move("0","4777","100.00%","250",null,null);

                p.staLabel01_00_00_00_00_00_00_00_00.set_taborder("220");
                p.staLabel01_00_00_00_00_00_00_00_00.set_text("다량사용 할인율");
                p.staLabel01_00_00_00_00_00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00_00_00_00_00_00_00.move("10","10","100%","46",null,null);

                p.grid03_00.set_taborder("221");
                p.grid03_00.set_fillareatype("allrow");
                p.grid03_00.set_autofittype("col");
                p.grid03_00.move("0","51","100.00%","222",null,null);

                p.Panel01_00_00_00_00_00_00_00_00.set_taborder("222");
                p.Panel01_00_00_00_00_00_00_00_00.set_type("vertical");
                p.Panel01_00_00_00_00_00_00_00_00.set_flexgrow("1");
                p.Panel01_00_00_00_00_00_00_00_00.set_verticalgap("5");
                p.Panel01_00_00_00_00_00_00_00_00.set_fittocontents("height");
                p.Panel01_00_00_00_00_00_00_00_00.move("20","0","100%","510",null,null);

                p.Panel00_00_00_00_00_00_00.set_taborder("223");
                p.Panel00_00_00_00_00_00_00.set_horizontalgap("20");
                p.Panel00_00_00_00_00_00_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_00_00_00_00_00.set_flexwrap("wrap");
                p.Panel00_00_00_00_00_00_00.set_fittocontents("height");
                p.Panel00_00_00_00_00_00_00.set_verticalgap("0");
                p.Panel00_00_00_00_00_00_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_00_00_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_00_00_00_00_00.set_type("vertical");
                p.Panel00_00_00_00_00_00_00.move("0","5027","100.00%","531",null,null);

                p.sta00_00_01_00_00_00_01_00_00.set_taborder("224");
                p.sta00_00_01_00_00_00_01_00_00.set_text("<fc v=\'#ee2e5b\'>신규신청 : 접수일로 2일이후부터 개통가능</fc>");
                p.sta00_00_01_00_00_00_01_00_00.set_cssclass("sta_WF_Des");
                p.sta00_00_01_00_00_00_01_00_00.set_fittocontents("height");
                p.sta00_00_01_00_00_00_01_00_00.set_usedecorate("true");
                p.sta00_00_01_00_00_00_01_00_00.move("0","97","100%","30",null,null);

                p.sta00_00_01_00_00_00_01_00_00_00.set_taborder("225");
                p.sta00_00_01_00_00_00_01_00_00_00.set_text("공사는 다른 사람의 통신을 매개할 목적 또는 불특정 다수가 사용할 목적으로 청약을 하거나, 공사 통신망 보안을 위태롭게 할 수 있다고 객관적으로 판단될 경우 청약의 승인을 유보할 수 있다.(정보통신서비스 약관 제 9조) ");
                p.sta00_00_01_00_00_00_01_00_00_00.set_cssclass("sta_WF_Des");
                p.sta00_00_01_00_00_00_01_00_00_00.set_fittocontents("height");
                p.sta00_00_01_00_00_00_01_00_00_00.set_usedecorate("true");
                p.sta00_00_01_00_00_00_01_00_00_00.move("0","97","100%","47",null,null);

                p.sta00_00_01_00_00_00_01_00_00_00_00.set_taborder("226");
                p.sta00_00_01_00_00_00_01_00_00_00_00.set_text("공사는 정보통신서비스 약관 제 27조(계약의 해제,해지) ②항에 해당하는 사유 발생시 계약을 해지할 수 있습니다.");
                p.sta00_00_01_00_00_00_01_00_00_00_00.set_cssclass("sta_WF_Des");
                p.sta00_00_01_00_00_00_01_00_00_00_00.set_fittocontents("height");
                p.sta00_00_01_00_00_00_01_00_00_00_00.set_usedecorate("true");
                p.sta00_00_01_00_00_00_01_00_00_00_00.move("0","97","100%","30",null,null);

                p.sta00_00_01_00_00_00_01_00_00_00_01.set_taborder("227");
                p.sta00_00_01_00_00_00_01_00_00_00_01.set_text("<b v=\'true\'>서비스 해지 및 변경은 신청서 작성/제출에 의해서만 가능합니다.</b>");
                p.sta00_00_01_00_00_00_01_00_00_00_01.set_cssclass("sta_WF_Des");
                p.sta00_00_01_00_00_00_01_00_00_00_01.set_fittocontents("height");
                p.sta00_00_01_00_00_00_01_00_00_00_01.set_usedecorate("true");
                p.sta00_00_01_00_00_00_01_00_00_00_01.move("0","97","100%","30",null,null);

                p.sta00_00_01_00_00_00_01_00_00_00_02.set_taborder("228");
                p.sta00_00_01_00_00_00_01_00_00_00_02.set_text("<b v=\'true\'>공사의 “정보통신서비스 이용약관”에 동의하며</b> 동 약관에 따라 내용과 같이 공항LAN서비스를 신청합니다.");
                p.sta00_00_01_00_00_00_01_00_00_00_02.set_cssclass("sta_WF_Des");
                p.sta00_00_01_00_00_00_01_00_00_00_02.set_fittocontents("height");
                p.sta00_00_01_00_00_00_01_00_00_00_02.set_usedecorate("true");
                p.sta00_00_01_00_00_00_01_00_00_00_02.move("0","97","100%","30",null,null);

                p.sta00_00_01_00_00_00_01_00_00_00_03.set_taborder("229");
                p.sta00_00_01_00_00_00_01_00_00_00_03.set_text("장애접수연락처:전화번호(032-741-1200),LAN(032-741-0000),CATV(032-741-7066)");
                p.sta00_00_01_00_00_00_01_00_00_00_03.set_cssclass("sta_WF_Des");
                p.sta00_00_01_00_00_00_01_00_00_00_03.set_fittocontents("height");
                p.sta00_00_01_00_00_00_01_00_00_00_03.set_usedecorate("true");
                p.sta00_00_01_00_00_00_01_00_00_00_03.move("0","97","100%","30",null,null);

                p.staLabel01_00_00_00_00_00_00_01.set_taborder("230");
                p.staLabel01_00_00_00_00_00_00_01.set_text("서비스신청 구분");
                p.staLabel01_00_00_00_00_00_00_01.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00_00_00_00_00_01.move("10","10","96.08%","46",null,null);

                p.cmb00_00_00_00.set_taborder("231");
                p.cmb00_00_00_00.set_value("");
                p.cmb00_00_00_00.set_index("-1");
                p.cmb00_00_00_00.move("97","272","100%","40",null,null);

                p.sta00_00_01_00_00_00_01_00_01.set_taborder("232");
                p.sta00_00_01_00_00_00_01_00_01.set_text("다회선 신청시 신청내역을 파일로 첨부해 주십시오.");
                p.sta00_00_01_00_00_00_01_00_01.set_cssclass("sta_WF_Des");
                p.sta00_00_01_00_00_00_01_00_01.set_fittocontents("height");
                p.sta00_00_01_00_00_00_01_00_01.set_usedecorate("true");
                p.sta00_00_01_00_00_00_01_00_01.move("0","97","100%","30",null,null);

                p.Panel01_00_00_00_00_00_00_01.set_taborder("233");
                p.Panel01_00_00_00_00_00_00_01.set_type("vertical");
                p.Panel01_00_00_00_00_00_00_01.set_flexgrow("1");
                p.Panel01_00_00_00_00_00_00_01.set_verticalgap("5");
                p.Panel01_00_00_00_00_00_00_01.set_fittocontents("height");
                p.Panel01_00_00_00_00_00_00_01.move("20","0","100%","136",null,null);

                p.Panel00_00_00_00_00_01.set_taborder("234");
                p.Panel00_00_00_00_00_01.set_horizontalgap("20");
                p.Panel00_00_00_00_00_01.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_00_00_00_01.set_flexwrap("wrap");
                p.Panel00_00_00_00_00_01.set_fittocontents("height");
                p.Panel00_00_00_00_00_01.set_verticalgap("0");
                p.Panel00_00_00_00_00_01.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_00_00_00_01.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_00_00_00_01.set_type("vertical");
                p.Panel00_00_00_00_00_01.move("0","0","100.00%","157",null,null);

                p.btnGrdDel00_00_00.set_taborder("235");
                p.btnGrdDel00_00_00.set_text("삭제");
                p.btnGrdDel00_00_00.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel00_00_00.set_visible("true");
                p.btnGrdDel00_00_00.set_fittocontents("width");
                p.btnGrdDel00_00_00.move("804.00","10","48","34",null,null);

                p.btnGrdAdd00_00_00.set_taborder("236");
                p.btnGrdAdd00_00_00.set_text("추가");
                p.btnGrdAdd00_00_00.set_cssclass("btn_WF_Small");
                p.btnGrdAdd00_00_00.set_visible("true");
                p.btnGrdAdd00_00_00.set_fittocontents("width");
                p.btnGrdAdd00_00_00.move("774.00","10","50","34",null,null);

                p.panGrdBtn00_00_00.set_taborder("237");
                p.panGrdBtn00_00_00.set_flexcrossaxisalign("start");
                p.panGrdBtn00_00_00.set_flexcrossaxiswrapalign("start");
                p.panGrdBtn00_00_00.set_flexmainaxisalign("end");
                p.panGrdBtn00_00_00.set_horizontalgap("10");
                p.panGrdBtn00_00_00.set_spacing("10px 0px");
                p.panGrdBtn00_00_00.move("470","0","100%","54",null,null);

                p.Grid00_00_00_00.set_taborder("238");
                p.Grid00_00_00_00.set_binddataset("ds00");
                p.Grid00_00_00_00.set_nodatatext("데이타가 없습니다.");
                p.Grid00_00_00_00.set_autofittype("col");
                p.Grid00_00_00_00.move("0","3827","100.00%","212",null,null);

                p.Panel04_00_00.set_taborder("239");
                p.Panel04_00_00.set_type("vertical");
                p.Panel04_00_00.set_spacing("0px 20px 10px 20px");
                p.Panel04_00_00.set_fittocontents("height");
                p.Panel04_00_00.move("0","3791","100%","277",null,null);

                p.staLabel01_00_00_00_00_00_00_00_01.set_taborder("240");
                p.staLabel01_00_00_00_00_00_00_00_01.set_text("서비스별 적용 요금표");
                p.staLabel01_00_00_00_00_00_00_00_01.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00_00_00_00_00_00_01.move("10","10","100%","46",null,null);

                p.grid03_01.set_taborder("241");
                p.grid03_01.set_fillareatype("allrow");
                p.grid03_01.set_autofittype("col");
                p.grid03_01.move("0","51","100.00%","135",null,null);

                p.Panel01_00_00_00_00_00_00_00_01.set_taborder("242");
                p.Panel01_00_00_00_00_00_00_00_01.set_type("vertical");
                p.Panel01_00_00_00_00_00_00_00_01.set_verticalgap("5");
                p.Panel01_00_00_00_00_00_00_00_01.set_fittocontents("height");
                p.Panel01_00_00_00_00_00_00_00_01.set_flexgrow("1");
                p.Panel01_00_00_00_00_00_00_00_01.move("20","0","100%","250",null,null);

                p.Panel00_00_00_00_00_00_01.set_taborder("243");
                p.Panel00_00_00_00_00_00_01.set_horizontalgap("20");
                p.Panel00_00_00_00_00_00_01.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_00_00_00_00_01.set_flexwrap("wrap");
                p.Panel00_00_00_00_00_00_01.set_fittocontents("height");
                p.Panel00_00_00_00_00_00_01.set_verticalgap("0");
                p.Panel00_00_00_00_00_00_01.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_00_00_00_00_01.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_00_00_00_00_01.set_type("vertical");
                p.Panel00_00_00_00_00_00_01.move("0","5992","100.00%","354",null,null);

                p.sta00_00_01_00_00_00_01_00_00_00_04.set_taborder("244");
                p.sta00_00_01_00_00_00_01_00_00_00_04.set_text("<b v=\'true\'>서비스 해지 및 변경은 신청서 작성/제출에 의해서만 가능합니다.</b>");
                p.sta00_00_01_00_00_00_01_00_00_00_04.set_cssclass("sta_WF_Des");
                p.sta00_00_01_00_00_00_01_00_00_00_04.set_fittocontents("height");
                p.sta00_00_01_00_00_00_01_00_00_00_04.set_usedecorate("true");
                p.sta00_00_01_00_00_00_01_00_00_00_04.move("0","97","100%","30",null,null);

                p.sta00_00_01_00_00_00_01_00_00_00_00_00.set_taborder("245");
                p.sta00_00_01_00_00_00_01_00_00_00_00_00.set_text("<b v=\'true\'>공사의 “정보통신서비스 이용약관”에 동의하며</b> 동 약관에 따라 내용과 같이 신청합니다.");
                p.sta00_00_01_00_00_00_01_00_00_00_00_00.set_cssclass("sta_WF_Des");
                p.sta00_00_01_00_00_00_01_00_00_00_00_00.set_fittocontents("height");
                p.sta00_00_01_00_00_00_01_00_00_00_00_00.set_usedecorate("true");
                p.sta00_00_01_00_00_00_01_00_00_00_00_00.move("0","97","100%","30",null,null);

                p.sta00_00_01_00_00_00_01_00_00_00_01_00.set_taborder("246");
                p.sta00_00_01_00_00_00_01_00_00_00_01_00.set_text("방송법 64조(수상기의 등록과 수신료 납부), 제 67조(수상기의 등록 및 징수의 위탁), 동법 시행령 제 42조(수신료의 징수)에 의거 텔레비전방송(KBS) 수신료(대당 2,500원/월)를 공항케이블TV 사용료와 함께 고지합니다.");
                p.sta00_00_01_00_00_00_01_00_00_00_01_00.set_cssclass("sta_WF_Des");
                p.sta00_00_01_00_00_00_01_00_00_00_01_00.set_fittocontents("height");
                p.sta00_00_01_00_00_00_01_00_00_00_01_00.set_usedecorate("true");
                p.sta00_00_01_00_00_00_01_00_00_00_01_00.move("0","97","100%","47",null,null);

                p.sta00_00_01_00_00_00_01_00_00_00_02_00.set_taborder("247");
                p.sta00_00_01_00_00_00_01_00_00_00_02_00.set_text("상기가격, 할인율 및 채널내역은 종합유선방송서비스 제공사업자 & 공사와의 협약에 따를 있습니다.");
                p.sta00_00_01_00_00_00_01_00_00_00_02_00.set_cssclass("sta_WF_Des");
                p.sta00_00_01_00_00_00_01_00_00_00_02_00.set_fittocontents("height");
                p.sta00_00_01_00_00_00_01_00_00_00_02_00.set_usedecorate("true");
                p.sta00_00_01_00_00_00_01_00_00_00_02_00.move("0","97","100%","30",null,null);

                p.staLabel01_00_00_00_00_00_00_01_00.set_taborder("248");
                p.staLabel01_00_00_00_00_00_00_01_00.set_text("서비스신청 구분");
                p.staLabel01_00_00_00_00_00_00_01_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00_00_00_00_00_01_00.move("10","10","100%","46",null,null);

                p.cmb00_00_00_00_00.set_taborder("249");
                p.cmb00_00_00_00_00.set_value("");
                p.cmb00_00_00_00_00.set_index("-1");
                p.cmb00_00_00_00_00.move("97","272","100%","40",null,null);

                p.sta00_00_01_00_00_00_01_00_01_00.set_taborder("250");
                p.sta00_00_01_00_00_00_01_00_01_00.set_text("다회선 신청시 신청내역을 파일로 첨부해 주십시오.");
                p.sta00_00_01_00_00_00_01_00_01_00.set_cssclass("sta_WF_Des");
                p.sta00_00_01_00_00_00_01_00_01_00.set_fittocontents("height");
                p.sta00_00_01_00_00_00_01_00_01_00.set_usedecorate("true");
                p.sta00_00_01_00_00_00_01_00_01_00.move("0","97","100%","30",null,null);

                p.Panel01_00_00_00_00_00_00_01_00.set_taborder("251");
                p.Panel01_00_00_00_00_00_00_01_00.set_type("vertical");
                p.Panel01_00_00_00_00_00_00_01_00.set_flexgrow("1");
                p.Panel01_00_00_00_00_00_00_01_00.set_verticalgap("5");
                p.Panel01_00_00_00_00_00_00_01_00.set_fittocontents("height");
                p.Panel01_00_00_00_00_00_00_01_00.move("20","0","100%","136",null,null);

                p.Panel00_00_00_00_00_01_00.set_taborder("252");
                p.Panel00_00_00_00_00_01_00.set_horizontalgap("20");
                p.Panel00_00_00_00_00_01_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_00_00_00_01_00.set_flexwrap("wrap");
                p.Panel00_00_00_00_00_01_00.set_fittocontents("height");
                p.Panel00_00_00_00_00_01_00.set_verticalgap("0");
                p.Panel00_00_00_00_00_01_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_00_00_00_01_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_00_00_00_01_00.set_type("vertical");
                p.Panel00_00_00_00_00_01_00.move("0","0","100.00%","157",null,null);

                p.sta00_00_01_00_00_00_00_00.set_taborder("253");
                p.sta00_00_01_00_00_00_00_00.set_text("통화허용등급 : <b v=\'true\'>A</b>(국제,시외/이동,시내,구내), <b v=\'true\'>B</b>(시외/이동,시내,구내),<b v=\'true\'>C</b>(시내,구내),<b v=\'true\'>D</b>(구내:740~744국 번호간 전화통화는 <b v=\'true\'>무료</b>)");
                p.sta00_00_01_00_00_00_00_00.set_cssclass("sta_WF_Des");
                p.sta00_00_01_00_00_00_00_00.set_fittocontents("height");
                p.sta00_00_01_00_00_00_00_00.set_usedecorate("true");
                p.sta00_00_01_00_00_00_00_00.move("0","46","100%","30",null,null);

                p.sta00_00_01_00_00_00_00_00_00.set_taborder("254");
                p.sta00_00_01_00_00_00_00_00_00.set_text("시내통화는 KT의 이용약관, 시외,국제,LM, 각종 정보, 부가통화 등은 해당 전기통신사업자의 이용약관 요금을 적용하며, 시내,시외,국제통화는 통화할인율이 제공됨.");
                p.sta00_00_01_00_00_00_00_00_00.set_cssclass("sta_WF_Des");
                p.sta00_00_01_00_00_00_00_00_00.set_fittocontents("height");
                p.sta00_00_01_00_00_00_00_00_00.set_usedecorate("true");
                p.sta00_00_01_00_00_00_00_00_00.move("0","46","100%","46",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div04.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div04.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div04.form,
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
                p.staLabel01_00_00_00_00_01_02.set_taborder("0");
                p.staLabel01_00_00_00_00_01_02.set_text("사용희망일");
                p.staLabel01_00_00_00_00_01_02.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00_00_00_01_02.move("0","0","45.20%","46",null,null);

                p.cal00.set_taborder("1");
                p.cal00.move("0","46","100%","40",null,null);

                p.Panel01_00_00_00_00_01_02.set_taborder("2");
                p.Panel01_00_00_00_00_01_02.set_type("vertical");
                p.Panel01_00_00_00_00_01_02.set_flexgrow("1");
                p.Panel01_00_00_00_00_01_02.move("20","0","310","86",null,null);

                p.Panel01_01_00_00_01_01.set_taborder("3");
                p.Panel01_01_00_00_01_01.set_type("vertical");
                p.Panel01_01_00_00_01_01.set_flexgrow("1");
                p.Panel01_01_00_00_01_01.move("520","0","310","0",null,null);

                p.Panel00_00_00_01_02.set_taborder("4");
                p.Panel00_00_00_01_02.set_horizontalgap("20");
                p.Panel00_00_00_01_02.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_00_01_02.set_flexwrap("wrap");
                p.Panel00_00_00_01_02.set_fittocontents("height");
                p.Panel00_00_00_01_02.set_verticalgap("0");
                p.Panel00_00_00_01_02.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_00_01_02.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_00_01_02.set_type("horizontal");
                p.Panel00_00_00_01_02.move("0","9686","100.00%","97",null,null);

                p.Panel00.set_taborder("24");
                p.Panel00.set_spacing("10px 0px 0px");
                p.Panel00.move("0","86","100%","196",null,null);

                p.staLabel01_00_00_00_00_01_02_00.set_taborder("5");
                p.staLabel01_00_00_00_00_01_02_00.set_text("시작위치");
                p.staLabel01_00_00_00_00_01_02_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00_00_00_01_02_00.move("0","0","45.20%","46",null,null);

                p.Panel01_00_00_00_00_01_02_00.set_taborder("6");
                p.Panel01_00_00_00_00_01_02_00.set_type("vertical");
                p.Panel01_00_00_00_00_01_02_00.set_flexgrow("1");
                p.Panel01_00_00_00_00_01_02_00.move("20","0","310","86",null,null);

                p.Panel01_01_00_00_01_01_00.set_taborder("7");
                p.Panel01_01_00_00_01_01_00.set_type("vertical");
                p.Panel01_01_00_00_01_01_00.set_flexgrow("1");
                p.Panel01_01_00_00_01_01_00.move("520","0","310","86",null,null);

                p.Panel00_00_00_01_02_00.set_taborder("8");
                p.Panel00_00_00_01_02_00.set_horizontalgap("20");
                p.Panel00_00_00_01_02_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_00_01_02_00.set_flexwrap("wrap");
                p.Panel00_00_00_01_02_00.set_fittocontents("height");
                p.Panel00_00_00_01_02_00.set_verticalgap("0");
                p.Panel00_00_00_01_02_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_00_01_02_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_00_01_02_00.set_type("horizontal");
                p.Panel00_00_00_01_02_00.move("0","9686","100.00%","97",null,null);

                p.radio00.set_taborder("18");
                p.radio00.set_innerdataset(divForm_form_Div05_form_radio00_innerdataset);
                p.radio00.set_codecolumn("codecolumn");
                p.radio00.set_datacolumn("datacolumn");
                p.radio00.set_columncount("-1");
                p.radio00.set_rowcount("-1");
                p.radio00.move("548","264","100%","40",null,null);

                p.edt01.set_taborder("11");
                p.edt01.move("591","175","100%","40",null,null);

                p.edt00.set_taborder("9");
                p.edt00.move("120","153","100%","40",null,null);

                p.staLabel01_00_00_00_00_01_02_00_00.set_taborder("10");
                p.staLabel01_00_00_00_00_01_02_00_00.set_text("종료위치");
                p.staLabel01_00_00_00_00_01_02_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00_00_00_01_02_00_00.move("0","0","45.20%","46",null,null);

                p.staLabel01_00_00_00_00_01_02_00_01.set_taborder("12");
                p.staLabel01_00_00_00_00_01_02_00_01.set_text("회선신청수");
                p.staLabel01_00_00_00_00_01_02_00_01.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00_00_00_01_02_00_01.move("0","0","45.20%","46",null,null);

                p.edt00_00.set_taborder("13");
                p.edt00_00.move("120","153","100%","40",null,null);

                p.Panel01_00_00_00_00_01_02_00_00.set_taborder("14");
                p.Panel01_00_00_00_00_01_02_00_00.set_type("vertical");
                p.Panel01_00_00_00_00_01_02_00_00.set_flexgrow("1");
                p.Panel01_00_00_00_00_01_02_00_00.move("20","0","310","86",null,null);

                p.staLabel01_00_00_00_00_01_02_00_00_00.set_taborder("15");
                p.staLabel01_00_00_00_00_01_02_00_00_00.set_text("비고");
                p.staLabel01_00_00_00_00_01_02_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00_00_00_01_02_00_00_00.move("0","0","45.20%","46",null,null);

                p.Panel01_01_00_00_01_01_00_00.set_taborder("16");
                p.Panel01_01_00_00_01_01_00_00.set_type("vertical");
                p.Panel01_01_00_00_01_01_00_00.set_flexgrow("1");
                p.Panel01_01_00_00_01_01_00_00.move("520","0","310","86",null,null);

                p.Panel00_00_00_01_02_00_00.set_taborder("17");
                p.Panel00_00_00_01_02_00_00.set_horizontalgap("20");
                p.Panel00_00_00_01_02_00_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_00_01_02_00_00.set_flexwrap("wrap");
                p.Panel00_00_00_01_02_00_00.set_fittocontents("height");
                p.Panel00_00_00_01_02_00_00.set_verticalgap("0");
                p.Panel00_00_00_01_02_00_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_00_01_02_00_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_00_01_02_00_00.set_type("horizontal");
                p.Panel00_00_00_01_02_00_00.move("0","9686","100.00%","97",null,null);

                p.staLabel01_00_00_00_00_01_02_00_01_00.set_taborder("19");
                p.staLabel01_00_00_00_00_01_02_00_01_00.set_text("이용목적");
                p.staLabel01_00_00_00_00_01_02_00_01_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00_00_00_01_02_00_01_00.move("0","0","45.20%","46",null,null);

                p.edt00_00_00.set_taborder("20");
                p.edt00_00_00.move("120","153","100%","40",null,null);

                p.Panel01_00_00_00_00_01_02_00_00_00.set_taborder("21");
                p.Panel01_00_00_00_00_01_02_00_00_00.set_type("vertical");
                p.Panel01_00_00_00_00_01_02_00_00_00.set_flexgrow("1");
                p.Panel01_00_00_00_00_01_02_00_00_00.move("20","291","96.08%","282",null,null);

                p.Panel00_00_00_01_02_00_00_00.set_taborder("22");
                p.Panel00_00_00_01_02_00_00_00.set_horizontalgap("20");
                p.Panel00_00_00_01_02_00_00_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_00_01_02_00_00_00.set_flexwrap("wrap");
                p.Panel00_00_00_01_02_00_00_00.set_fittocontents("height");
                p.Panel00_00_00_01_02_00_00_00.set_verticalgap("0");
                p.Panel00_00_00_01_02_00_00_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_00_01_02_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_00_01_02_00_00_00.set_type("horizontal");
                p.Panel00_00_00_01_02_00_00_00.move("0","291","100.00%","293",null,null);

                p.grid00.set_taborder("23");
                p.grid00.set_fillareatype("allrow");
                p.grid00.set_autofittype("col");
                p.grid00.move("0","86","100.00%","178",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div05.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div05.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div05.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div05.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div06.form
            obj = new Layout("default","",0,0,this.divForm.form.Div06.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel01_00_00_00_00_01_02.set_taborder("0");
                p.staLabel01_00_00_00_00_01_02.set_text("사용희망일");
                p.staLabel01_00_00_00_00_01_02.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00_00_00_01_02.move("0","0","45.20%","46",null,null);

                p.cal00.set_taborder("1");
                p.cal00.move("0","46","100%","40",null,null);

                p.Panel01_00_00_00_00_01_02.set_taborder("2");
                p.Panel01_00_00_00_00_01_02.set_type("vertical");
                p.Panel01_00_00_00_00_01_02.set_flexgrow("1");
                p.Panel01_00_00_00_00_01_02.move("20","0","310","86",null,null);

                p.Panel01_01_00_00_01_01.set_taborder("3");
                p.Panel01_01_00_00_01_01.set_type("vertical");
                p.Panel01_01_00_00_01_01.set_flexgrow("1");
                p.Panel01_01_00_00_01_01.move("520","0","310","0",null,null);

                p.Panel00_00_00_01_02.set_taborder("4");
                p.Panel00_00_00_01_02.set_horizontalgap("20");
                p.Panel00_00_00_01_02.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_00_01_02.set_flexwrap("wrap");
                p.Panel00_00_00_01_02.set_fittocontents("height");
                p.Panel00_00_00_01_02.set_verticalgap("0");
                p.Panel00_00_00_01_02.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_00_01_02.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_00_01_02.set_type("horizontal");
                p.Panel00_00_00_01_02.move("0","9686","100.00%","97",null,null);

                p.staLabel01_00_00_00_00_01_02_00.set_taborder("5");
                p.staLabel01_00_00_00_00_01_02_00.set_text("시작위치");
                p.staLabel01_00_00_00_00_01_02_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00_00_00_01_02_00.move("0","0","45.20%","46",null,null);

                p.edt00.set_taborder("6");
                p.edt00.move("120","153","100%","40",null,null);

                p.Panel01_00_00_00_00_01_02_00.set_taborder("7");
                p.Panel01_00_00_00_00_01_02_00.set_type("vertical");
                p.Panel01_00_00_00_00_01_02_00.set_flexgrow("1");
                p.Panel01_00_00_00_00_01_02_00.move("20","0","310","86",null,null);

                p.staLabel01_00_00_00_00_01_02_00_00.set_taborder("8");
                p.staLabel01_00_00_00_00_01_02_00_00.set_text("종료위치");
                p.staLabel01_00_00_00_00_01_02_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00_00_00_01_02_00_00.move("0","0","45.20%","46",null,null);

                p.edt01.set_taborder("9");
                p.edt01.move("591","175","100%","40",null,null);

                p.Panel01_01_00_00_01_01_00.set_taborder("10");
                p.Panel01_01_00_00_01_01_00.set_type("vertical");
                p.Panel01_01_00_00_01_01_00.set_flexgrow("1");
                p.Panel01_01_00_00_01_01_00.move("520","0","310","86",null,null);

                p.Panel00_00_00_01_02_00.set_taborder("11");
                p.Panel00_00_00_01_02_00.set_horizontalgap("20");
                p.Panel00_00_00_01_02_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_00_01_02_00.set_flexwrap("wrap");
                p.Panel00_00_00_01_02_00.set_fittocontents("height");
                p.Panel00_00_00_01_02_00.set_verticalgap("0");
                p.Panel00_00_00_01_02_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_00_01_02_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_00_01_02_00.set_type("horizontal");
                p.Panel00_00_00_01_02_00.move("0","9686","100.00%","97",null,null);

                p.staLabel01_00_00_00_00_01_02_00_01.set_taborder("12");
                p.staLabel01_00_00_00_00_01_02_00_01.set_text("회선신청수");
                p.staLabel01_00_00_00_00_01_02_00_01.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00_00_00_01_02_00_01.move("0","0","45.20%","46",null,null);

                p.edt00_00.set_taborder("13");
                p.edt00_00.move("120","153","100%","40",null,null);

                p.Panel01_00_00_00_00_01_02_00_00.set_taborder("14");
                p.Panel01_00_00_00_00_01_02_00_00.set_type("vertical");
                p.Panel01_00_00_00_00_01_02_00_00.set_flexgrow("1");
                p.Panel01_00_00_00_00_01_02_00_00.move("20","0","310","86",null,null);

                p.staLabel01_00_00_00_00_01_02_00_00_00.set_taborder("15");
                p.staLabel01_00_00_00_00_01_02_00_00_00.set_text("비고");
                p.staLabel01_00_00_00_00_01_02_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00_00_00_01_02_00_00_00.move("0","0","45.20%","46",null,null);

                p.edt01_00.set_taborder("16");
                p.edt01_00.move("591","175","100%","40",null,null);

                p.Panel01_01_00_00_01_01_00_00.set_taborder("17");
                p.Panel01_01_00_00_01_01_00_00.set_type("vertical");
                p.Panel01_01_00_00_01_01_00_00.set_flexgrow("1");
                p.Panel01_01_00_00_01_01_00_00.move("520","0","310","86",null,null);

                p.Panel00_00_00_01_02_00_00.set_taborder("18");
                p.Panel00_00_00_01_02_00_00.set_horizontalgap("20");
                p.Panel00_00_00_01_02_00_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_00_01_02_00_00.set_flexwrap("wrap");
                p.Panel00_00_00_01_02_00_00.set_fittocontents("height");
                p.Panel00_00_00_01_02_00_00.set_verticalgap("0");
                p.Panel00_00_00_01_02_00_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_00_01_02_00_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_00_01_02_00_00.set_type("horizontal");
                p.Panel00_00_00_01_02_00_00.move("0","9686","100.00%","97",null,null);

                p.Panel00.set_taborder("23");
                p.Panel00.set_spacing("10px 0px 0px");
                p.Panel00.set_type("vertical");
                p.Panel00.set_verticalgap("10");
                p.Panel00.set_fittocontents("height");
                p.Panel00.move("20","86","100%","370",null,null);

                p.edt02.set_taborder("22");
                p.edt02.move("167","365","100%","40",null,null);

                p.staLabel01_00_00_00_00_01_02_01.set_taborder("19");
                p.staLabel01_00_00_00_00_01_02_01.set_text("이용목적");
                p.staLabel01_00_00_00_00_01_02_01.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00_00_00_01_02_01.move("0","0","45.20%","46",null,null);

                p.Panel01_00_00_00_00_01_02_01.set_taborder("20");
                p.Panel01_00_00_00_00_01_02_01.set_type("vertical");
                p.Panel01_00_00_00_00_01_02_01.set_flexgrow("1");
                p.Panel01_00_00_00_00_01_02_01.move("20","0","96.08%","86",null,null);

                p.Panel00_00_00_01_02_01.set_taborder("21");
                p.Panel00_00_00_01_02_01.set_horizontalgap("20");
                p.Panel00_00_00_01_02_01.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_00_01_02_01.set_flexwrap("wrap");
                p.Panel00_00_00_01_02_01.set_fittocontents("height");
                p.Panel00_00_00_01_02_01.set_verticalgap("0");
                p.Panel00_00_00_01_02_01.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_00_01_02_01.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_00_01_02_01.set_type("horizontal");
                p.Panel00_00_00_01_02_01.move("0","291","100.00%","467",null,null);

                p.grid00.set_taborder("24");
                p.grid00.set_fillareatype("allrow");
                p.grid00.set_autofittype("col");
                p.grid00.move("0","10","100.00%","311",null,null);

                p.sta00_00_01_00_00_00_01_00_00_00_02_00.set_taborder("25");
                p.sta00_00_01_00_00_00_01_00_00_00_02_00.set_text("<b v=\'true\'>공사의 “정보통신서비스 이용약관”에 동의하며</b> 동 약관에 따라 내용과 같이 신청합니다.");
                p.sta00_00_01_00_00_00_01_00_00_00_02_00.set_cssclass("sta_WF_Des");
                p.sta00_00_01_00_00_00_01_00_00_00_02_00.set_fittocontents("height");
                p.sta00_00_01_00_00_00_01_00_00_00_02_00.set_usedecorate("true");
                p.sta00_00_01_00_00_00_01_00_00_00_02_00.move("0","97","100%","30",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div06.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div06.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div06.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div06.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div07.form
            obj = new Layout("default","",0,0,this.divForm.form.Div07.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel01_00_00_00_00_01_02.set_taborder("0");
                p.staLabel01_00_00_00_00_01_02.set_text("전달사항");
                p.staLabel01_00_00_00_00_01_02.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00_00_00_01_02.move("0","0","100%","46",null,null);

                p.Panel01_00_00_00_00_01_02.set_taborder("1");
                p.Panel01_00_00_00_00_01_02.set_type("vertical");
                p.Panel01_00_00_00_00_01_02.set_fittocontents("height");
                p.Panel01_00_00_00_00_01_02.move("20","0","100%","196",null,null);

                p.Panel00_00_00_01_02.set_taborder("2");
                p.Panel00_00_00_01_02.set_horizontalgap("20");
                p.Panel00_00_00_01_02.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_00_01_02.set_flexwrap("wrap");
                p.Panel00_00_00_01_02.set_fittocontents("height");
                p.Panel00_00_00_01_02.set_verticalgap("0");
                p.Panel00_00_00_01_02.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_00_01_02.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_00_01_02.set_type("horizontal");
                p.Panel00_00_00_01_02.move("0","0","100.00%","407",null,null);

                p.TextArea00.set_taborder("3");
                p.TextArea00.move("98","70","100%","150",null,null);

                p.Panel00.set_taborder("4");
                p.Panel00.set_spacing("10px 0px");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_type("vertical");
                p.Panel00.set_verticalgap("10");
                p.Panel00.move("20","196","100%","200",null,null);

                p.grdCnvyMttr.set_taborder("5");
                p.grdCnvyMttr.set_binddataset("dsCnvyMttr");
                p.grdCnvyMttr.set_nodatatext("데이타가 없습니다.");
                p.grdCnvyMttr.set_autofittype("col");
                p.grdCnvyMttr.move("20","10","100%","180",null,null);

                p.staLabel00_02_01.set_taborder("6");
                p.staLabel00_02_01.set_text("사업자등록증");
                p.staLabel00_02_01.set_cssclass("sta_WF_Label_E");
                p.staLabel00_02_01.set_fittocontents("width");
                p.staLabel00_02_01.set_flexgrow("1");
                p.staLabel00_02_01.move("0","0","310","46",null,null);

                p.Button00_01.set_taborder("7");
                p.Button00_01.set_text("샘플첨부파일명");
                p.Button00_01.set_cssclass("btn_WF_Small");
                p.Button00_01.set_fittocontents("width");
                p.Button00_01.move("449","0","107","34",null,null);

                p.btn_file_1_01.set_taborder("8");
                p.btn_file_1_01.set_text("파일선택");
                p.btn_file_1_01.set_cssclass("btn_WF_FileUp");
                p.btn_file_1_01.set_fittocontents("width");
                p.btn_file_1_01.move("566","0","109","34",null,null);

                p.panBtnFile01.set_taborder("9");
                p.panBtnFile01.set_flexgrow("1");
                p.panBtnFile01.set_flexmainaxisalign("end");
                p.panBtnFile01.set_horizontalgap("10");
                p.panBtnFile01.set_flexcrossaxiswrapalign("center");
                p.panBtnFile01.set_flexcrossaxisalign("center");
                p.panBtnFile01.move("305","0","310","46",null,null);

                p.panTitle01.set_taborder("10");
                p.panTitle01.set_cssclass("pan_WF_FileTitle");
                p.panTitle01.set_flexwrap("wrap");
                p.panTitle01.set_type("vertical");
                p.panTitle01.set_flexcrossaxiswrapalign("spacebetween");
                p.panTitle01.move("20","10","100%","46",null,null);

                p.Static00_01.set_taborder("11");
                p.Static00_01.set_text("파일수 : ");
                p.Static00_01.set_fittocontents("width");
                p.Static00_01.move("0","0","48","46",null,null);

                p.Static01_01.set_taborder("12");
                p.Static01_01.set_text("0");
                p.Static01_01.set_fittocontents("width");
                p.Static01_01.move("52","0","9","46",null,null);

                p.Static02_01.set_taborder("13");
                p.Static02_01.set_text("개");
                p.Static02_01.set_fittocontents("width");
                p.Static02_01.move("65","0","13","46",null,null);

                p.panFileNum01.set_taborder("14");
                p.panFileNum01.set_flexgrow("1");
                p.panFileNum01.set_horizontalgap("4");
                p.panFileNum01.move("0","0","490","46",null,null);

                p.btn_del_file_1_01.set_taborder("15");
                p.btn_del_file_1_01.set_text("전체파일삭제");
                p.btn_del_file_1_01.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_1_01.set_fittocontents("width");
                p.btn_del_file_1_01.move("365","6","125","34",null,null);

                p.panBtnDel01.set_taborder("16");
                p.panBtnDel01.set_flexcrossaxisalign("center");
                p.panBtnDel01.set_flexmainaxisalign("end");
                p.panBtnDel01.set_flexgrow("1");
                p.panBtnDel01.move("490","0","490","46",null,null);

                p.Panel00_02.set_taborder("17");
                p.Panel00_02.move("20","60","100%","46",null,null);

                p.Grid00_01.set_taborder("18");
                p.Grid00_01.set_binddataset("dsFile1");
                p.Grid00_01.set_autofittype("col");
                p.Grid00_01.set_cssclass("grd_WF_FileAdd");
                p.Grid00_01.set_nodatatext("파일이 없습니다.");
                p.Grid00_01.move("20.00","110","100%","40",null,null);

                p.panFile01.set_taborder("19");
                p.panFile01.set_fittocontents("height");
                p.panFile01.set_spacing("10px 20px 10px 20px");
                p.panFile01.set_flexwrap("wrap");
                p.panFile01.set_cssclass("pal_WF_DtlBg");
                p.panFile01.set_verticalgap("4");
                p.panFile01.move("52","764","100%","161",null,null);

                p.staLabel00_02_01_00.set_taborder("20");
                p.staLabel00_02_01_00.set_text("개통확인서");
                p.staLabel00_02_01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_02_01_00.set_fittocontents("width");
                p.staLabel00_02_01_00.set_flexgrow("1");
                p.staLabel00_02_01_00.move("0","0","310","46",null,null);

                p.Button00_01_00.set_taborder("21");
                p.Button00_01_00.set_text("샘플첨부파일명");
                p.Button00_01_00.set_cssclass("btn_WF_Small");
                p.Button00_01_00.set_fittocontents("width");
                p.Button00_01_00.move("449","0","107","34",null,null);

                p.btn_file_1_01_00.set_taborder("22");
                p.btn_file_1_01_00.set_text("파일선택");
                p.btn_file_1_01_00.set_cssclass("btn_WF_FileUp");
                p.btn_file_1_01_00.set_fittocontents("width");
                p.btn_file_1_01_00.move("566","0","109","34",null,null);

                p.panBtnFile01_00.set_taborder("23");
                p.panBtnFile01_00.set_flexgrow("1");
                p.panBtnFile01_00.set_flexmainaxisalign("end");
                p.panBtnFile01_00.set_horizontalgap("10");
                p.panBtnFile01_00.set_flexcrossaxiswrapalign("center");
                p.panBtnFile01_00.set_flexcrossaxisalign("center");
                p.panBtnFile01_00.move("305","0","310","46",null,null);

                p.panTitle01_00.set_taborder("24");
                p.panTitle01_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle01_00.set_flexwrap("wrap");
                p.panTitle01_00.set_type("vertical");
                p.panTitle01_00.set_flexcrossaxiswrapalign("spacebetween");
                p.panTitle01_00.move("20","10","100%","46",null,null);

                p.Static00_01_00.set_taborder("25");
                p.Static00_01_00.set_text("파일수 : ");
                p.Static00_01_00.set_fittocontents("width");
                p.Static00_01_00.move("0","0","48","46",null,null);

                p.Static01_01_00.set_taborder("26");
                p.Static01_01_00.set_text("0");
                p.Static01_01_00.set_fittocontents("width");
                p.Static01_01_00.move("52","0","9","46",null,null);

                p.Static02_01_00.set_taborder("27");
                p.Static02_01_00.set_text("개");
                p.Static02_01_00.set_fittocontents("width");
                p.Static02_01_00.move("65","0","13","46",null,null);

                p.panFileNum01_00.set_taborder("28");
                p.panFileNum01_00.set_flexgrow("1");
                p.panFileNum01_00.set_horizontalgap("4");
                p.panFileNum01_00.move("0","0","490","46",null,null);

                p.btn_del_file_1_01_00.set_taborder("29");
                p.btn_del_file_1_01_00.set_text("전체파일삭제");
                p.btn_del_file_1_01_00.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_1_01_00.set_fittocontents("width");
                p.btn_del_file_1_01_00.move("365","6","125","34",null,null);

                p.panBtnDel01_00.set_taborder("30");
                p.panBtnDel01_00.set_flexcrossaxisalign("center");
                p.panBtnDel01_00.set_flexmainaxisalign("end");
                p.panBtnDel01_00.set_flexgrow("1");
                p.panBtnDel01_00.move("490","0","490","46",null,null);

                p.Panel00_02_00.set_taborder("31");
                p.Panel00_02_00.move("20","60","100%","46",null,null);

                p.grdOpngCnfdocPath.set_taborder("32");
                p.grdOpngCnfdocPath.set_autofittype("col");
                p.grdOpngCnfdocPath.set_cssclass("grd_WF_FileAdd");
                p.grdOpngCnfdocPath.set_nodatatext("파일이 없습니다.");
                p.grdOpngCnfdocPath.set_binddataset("dsFile2");
                p.grdOpngCnfdocPath.move("20.00","110","100%","40",null,null);

                p.panFile01_00.set_taborder("33");
                p.panFile01_00.set_fittocontents("height");
                p.panFile01_00.set_spacing("10px 20px 10px 20px");
                p.panFile01_00.set_flexwrap("wrap");
                p.panFile01_00.set_cssclass("pal_WF_DtlBg");
                p.panFile01_00.set_verticalgap("4");
                p.panFile01_00.move("52","764","100%","161",null,null);

                p.staLabel01_00_004.set_taborder("34");
                p.staLabel01_00_004.set_text("별정시스템관리번호");
                p.staLabel01_00_004.set_cssclass("sta_WF_Label_E");
                p.staLabel01_00_004.move("10","10","96.08%","46",null,null);

                p.edtAsaSysMngNo.set_taborder("35");
                p.edtAsaSysMngNo.set_readonly("false");
                p.edtAsaSysMngNo.move("940","142","100%","40",null,null);

                p.Panel01_00_00_00_00_01_00.set_taborder("36");
                p.Panel01_00_00_00_00_01_00.set_type("vertical");
                p.Panel01_00_00_00_00_01_00.set_flexgrow("1");
                p.Panel01_00_00_00_00_01_00.move("30","10","310","86",null,null);

                p.staLabel01_02_00_00_01_00.set_taborder("37");
                p.staLabel01_02_00_00_01_00.set_text("신규고객여부");
                p.staLabel01_02_00_00_01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel01_02_00_00_01_00.move("876","150","100%","46",null,null);

                p.rdoNewCustYn.set_taborder("38");
                p.rdoNewCustYn.set_innerdataset(divForm_form_Div07_form_rdoNewCustYn_innerdataset);
                p.rdoNewCustYn.set_codecolumn("codecolumn");
                p.rdoNewCustYn.set_datacolumn("datacolumn");
                p.rdoNewCustYn.set_columncount("-1");
                p.rdoNewCustYn.set_rowcount("-1");
                p.rdoNewCustYn.set_fittocontents("height");
                p.rdoNewCustYn.set_value("");
                p.rdoNewCustYn.set_index("-1");
                p.rdoNewCustYn.move("96","73","100%","40",null,null);

                p.Panel01_01_00_00_01_00.set_taborder("39");
                p.Panel01_01_00_00_01_00.set_type("vertical");
                p.Panel01_01_00_00_01_00.set_flexgrow("1");
                p.Panel01_01_00_00_01_00.move("876","150","310","86",null,null);

                p.Panel00_00_00_01_00.set_taborder("40");
                p.Panel00_00_00_01_00.set_horizontalgap("20");
                p.Panel00_00_00_01_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_00_01_00.set_flexwrap("wrap");
                p.Panel00_00_00_01_00.set_fittocontents("height");
                p.Panel00_00_00_01_00.set_verticalgap("0");
                p.Panel00_00_00_01_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_00_01_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_00_01_00.set_type("horizontal");
                p.Panel00_00_00_01_00.move("491","315","100.00%","97",null,null);

                p.Panel01_00_00_00_00_01_00_00.set_taborder("41");
                p.Panel01_00_00_00_00_01_00_00.set_type("vertical");
                p.Panel01_00_00_00_00_01_00_00.set_flexgrow("1");
                p.Panel01_00_00_00_00_01_00_00.move("30","10","310","86",null,null);

                p.staLabel01_02_00_00_01_00_00.set_taborder("42");
                p.staLabel01_02_00_00_01_00_00.set_text("무상여부");
                p.staLabel01_02_00_00_01_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel01_02_00_00_01_00_00.move("876","150","100%","46",null,null);

                p.rdoFocYn.set_taborder("43");
                p.rdoFocYn.set_innerdataset(divForm_form_Div07_form_rdoFocYn_innerdataset);
                p.rdoFocYn.set_codecolumn("codecolumn");
                p.rdoFocYn.set_datacolumn("datacolumn");
                p.rdoFocYn.set_columncount("-1");
                p.rdoFocYn.set_rowcount("-1");
                p.rdoFocYn.set_fittocontents("height");
                p.rdoFocYn.set_value("");
                p.rdoFocYn.set_index("-1");
                p.rdoFocYn.move("96","73","100%","40",null,null);

                p.Panel01_01_00_00_01_00_00.set_taborder("44");
                p.Panel01_01_00_00_01_00_00.set_type("vertical");
                p.Panel01_01_00_00_01_00_00.set_flexgrow("1");
                p.Panel01_01_00_00_01_00_00.move("876","150","310","86",null,null);

                p.Panel00_00_00_01_00_00.set_taborder("45");
                p.Panel00_00_00_01_00_00.set_horizontalgap("20");
                p.Panel00_00_00_01_00_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00_00_01_00_00.set_flexwrap("wrap");
                p.Panel00_00_00_01_00_00.set_fittocontents("height");
                p.Panel00_00_00_01_00_00.set_verticalgap("0");
                p.Panel00_00_00_01_00_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_00_00_01_00_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_00_00_01_00_00.set_type("horizontal");
                p.Panel00_00_00_01_00_00.move("491","315","100.00%","97",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div07.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div07.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div07.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div07.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staSubTitle02_00_03.set_taborder("0");
                p.staSubTitle02_00_03.set_text("서비스 흐름 및 작업방법 안내(타이틀미정)");
                p.staSubTitle02_00_03.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_03.set_flexgrow("1");
                p.staSubTitle02_00_03.move("0","-3","100%","50",null,null);

                p.Button00_00_03.set_taborder("1");
                p.Button00_00_03.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_03.move("461","6","34","34",null,null);

                p.Panel01_02_03.set_taborder("2");
                p.Panel01_02_03.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_03.set_spacing("0px 10px");
                p.Panel01_02_03.set_horizontalgap("10");
                p.Panel01_02_03.set_flexcrossaxisalign("center");
                p.Panel01_02_03.set_flexmainaxisalign("end");
                p.Panel01_02_03.set_flexgrow("1");
                p.Panel01_02_03.move("505","-3","60","50",null,null);

                p.sub_tit00.set_taborder("3");
                p.sub_tit00.set_background("#ffffff");
                p.sub_tit00.set_flexcrossaxisalign("end");
                p.sub_tit00.move("0","0","100%","46",null,null);

                p.divInfoGuide.set_taborder("4");
                p.divInfoGuide.set_text("서비스 흐름 및 작업방법 안내");
                p.divInfoGuide.set_cssclass("div_WF_InfoGuide");
                p.divInfoGuide.set_minheight("300");
                p.divInfoGuide.set_maxheight("");
                p.divInfoGuide.move("30","506","100.00%","300",null,null);

                p.staSubTitle02_00_03_00.set_taborder("5");
                p.staSubTitle02_00_03_00.set_text("신청위치 정보");
                p.staSubTitle02_00_03_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_03_00.set_flexgrow("1");
                p.staSubTitle02_00_03_00.move("0","-3","100%","50",null,null);

                p.Button00_00_03_00.set_taborder("6");
                p.Button00_00_03_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_03_00.move("461","6","34","34",null,null);

                p.Panel01_02_03_00.set_taborder("7");
                p.Panel01_02_03_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_03_00.set_spacing("0px 10px");
                p.Panel01_02_03_00.set_horizontalgap("10");
                p.Panel01_02_03_00.set_flexcrossaxisalign("center");
                p.Panel01_02_03_00.set_flexmainaxisalign("end");
                p.Panel01_02_03_00.set_flexgrow("1");
                p.Panel01_02_03_00.move("505","-3","60","50",null,null);

                p.staSubTitle02_00_03_00_00.set_taborder("10");
                p.staSubTitle02_00_03_00_00.set_text("신청자 정보");
                p.staSubTitle02_00_03_00_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_03_00_00.set_flexgrow("1");
                p.staSubTitle02_00_03_00_00.move("0","-3","100%","50",null,null);

                p.Button00_00_01.set_taborder("11");
                p.Button00_00_01.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_01.move("461","6","34","34",null,null);

                p.Panel01_02_01.set_taborder("12");
                p.Panel01_02_01.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_01.set_spacing("0px 10px");
                p.Panel01_02_01.set_horizontalgap("10");
                p.Panel01_02_01.set_flexcrossaxisalign("center");
                p.Panel01_02_01.set_flexmainaxisalign("end");
                p.Panel01_02_01.set_flexgrow("1");
                p.Panel01_02_01.move("505","-3","60","50",null,null);

                p.sub_tit00_00_00.set_taborder("13");
                p.sub_tit00_00_00.set_background("#ffffff");
                p.sub_tit00_00_00.set_flexcrossaxisalign("end");
                p.sub_tit00_00_00.move("0","0","100%","46",null,null);

                p.Div01.set_taborder("14");
                p.Div01.set_text("div01");
                p.Div01.set_fittocontents("height");
                p.Div01.move("0","729","100%","600",null,null);

                p.sub_tit00_00.set_taborder("8");
                p.sub_tit00_00.set_background("#ffffff");
                p.sub_tit00_00.set_flexcrossaxisalign("end");
                p.sub_tit00_00.move("0","0","100%","46",null,null);

                p.staSubTitle02_00_03_00_00_00.set_taborder("15");
                p.staSubTitle02_00_03_00_00_00.set_text("고객정보");
                p.staSubTitle02_00_03_00_00_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_03_00_00_00.set_flexgrow("1");
                p.staSubTitle02_00_03_00_00_00.move("0","-3","100%","50",null,null);

                p.Button00_00_03_00_00_00.set_taborder("16");
                p.Button00_00_03_00_00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_03_00_00_00.move("461","6","34","34",null,null);

                p.Panel01_02_03_00_00_00.set_taborder("17");
                p.Panel01_02_03_00_00_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_03_00_00_00.set_spacing("0px 10px");
                p.Panel01_02_03_00_00_00.set_horizontalgap("10");
                p.Panel01_02_03_00_00_00.set_flexcrossaxisalign("center");
                p.Panel01_02_03_00_00_00.set_flexmainaxisalign("end");
                p.Panel01_02_03_00_00_00.set_flexgrow("1");
                p.Panel01_02_03_00_00_00.move("505","-3","60","50",null,null);

                p.Div00.set_taborder("9");
                p.Div00.set_text("div00");
                p.Div00.set_fittocontents("height");
                p.Div00.move("0","392","100%","200",null,null);

                p.sub_tit00_00_00_00.set_taborder("18");
                p.sub_tit00_00_00_00.set_background("#ffffff");
                p.sub_tit00_00_00_00.set_flexcrossaxisalign("end");
                p.sub_tit00_00_00_00.move("0","0","100%","46",null,null);

                p.Div02.set_taborder("19");
                p.Div02.set_text("div02");
                p.Div02.set_fittocontents("height");
                p.Div02.move("0","969","100%","1300",null,null);

                p.staSubTitle02_00_03_00_00_00_00.set_taborder("20");
                p.staSubTitle02_00_03_00_00_00_00.set_text("청구정보");
                p.staSubTitle02_00_03_00_00_00_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_03_00_00_00_00.set_flexgrow("1");
                p.staSubTitle02_00_03_00_00_00_00.move("0","-3","100%","50",null,null);

                p.Button00_00_03_00_00_00_00.set_taborder("21");
                p.Button00_00_03_00_00_00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_03_00_00_00_00.move("461","6","34","34",null,null);

                p.Panel01_02_03_00_00_00_00.set_taborder("22");
                p.Panel01_02_03_00_00_00_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_03_00_00_00_00.set_spacing("0px 10px");
                p.Panel01_02_03_00_00_00_00.set_horizontalgap("10");
                p.Panel01_02_03_00_00_00_00.set_flexcrossaxisalign("center");
                p.Panel01_02_03_00_00_00_00.set_flexmainaxisalign("end");
                p.Panel01_02_03_00_00_00_00.set_flexgrow("1");
                p.Panel01_02_03_00_00_00_00.move("505","-3","60","50",null,null);

                p.sub_tit00_00_00_00_00.set_taborder("23");
                p.sub_tit00_00_00_00_00.set_background("#ffffff");
                p.sub_tit00_00_00_00_00.set_flexcrossaxisalign("end");
                p.sub_tit00_00_00_00_00.move("0","0","100%","46",null,null);

                p.Div03.set_taborder("24");
                p.Div03.set_text("div03");
                p.Div03.set_fittocontents("height");
                p.Div03.move("0","1827","100%","2000",null,null);

                p.staSubTitle02_00_03_00_00_00_00_00.set_taborder("25");
                p.staSubTitle02_00_03_00_00_00_00_00.set_text("통신신청정보");
                p.staSubTitle02_00_03_00_00_00_00_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_03_00_00_00_00_00.set_flexgrow("1");
                p.staSubTitle02_00_03_00_00_00_00_00.move("0","-3","100%","50",null,null);

                p.Button00_00_03_00_00_00_00_00.set_taborder("26");
                p.Button00_00_03_00_00_00_00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_03_00_00_00_00_00.move("461","6","34","34",null,null);

                p.Panel01_02_03_00_00_00_00_00.set_taborder("27");
                p.Panel01_02_03_00_00_00_00_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_03_00_00_00_00_00.set_spacing("0px 10px");
                p.Panel01_02_03_00_00_00_00_00.set_horizontalgap("10");
                p.Panel01_02_03_00_00_00_00_00.set_flexcrossaxisalign("center");
                p.Panel01_02_03_00_00_00_00_00.set_flexmainaxisalign("end");
                p.Panel01_02_03_00_00_00_00_00.set_flexgrow("1");
                p.Panel01_02_03_00_00_00_00_00.move("505","-3","60","50",null,null);

                p.sub_tit00_00_00_00_00_00.set_taborder("28");
                p.sub_tit00_00_00_00_00_00.set_background("#ffffff");
                p.sub_tit00_00_00_00_00_00.set_flexcrossaxisalign("end");
                p.sub_tit00_00_00_00_00_00.move("0","0","100%","46",null,null);

                p.Div04.set_taborder("29");
                p.Div04.set_text("div04");
                p.Div04.set_fittocontents("height");
                p.Div04.move("0","3137","100%","9900",null,null);

                p.staSubTitle02_00_03_00_00_00_00_00_00.set_taborder("30");
                p.staSubTitle02_00_03_00_00_00_00_00_00.set_text("동선");
                p.staSubTitle02_00_03_00_00_00_00_00_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_03_00_00_00_00_00_00.set_flexgrow("1");
                p.staSubTitle02_00_03_00_00_00_00_00_00.move("0","-3","100%","50",null,null);

                p.Button00_00_03_00_00_00_00_00_00.set_taborder("31");
                p.Button00_00_03_00_00_00_00_00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_03_00_00_00_00_00_00.move("461","6","34","34",null,null);

                p.Panel01_02_03_00_00_00_00_00_00.set_taborder("32");
                p.Panel01_02_03_00_00_00_00_00_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_03_00_00_00_00_00_00.set_spacing("0px 10px");
                p.Panel01_02_03_00_00_00_00_00_00.set_horizontalgap("10");
                p.Panel01_02_03_00_00_00_00_00_00.set_flexcrossaxisalign("center");
                p.Panel01_02_03_00_00_00_00_00_00.set_flexmainaxisalign("end");
                p.Panel01_02_03_00_00_00_00_00_00.set_flexgrow("1");
                p.Panel01_02_03_00_00_00_00_00_00.move("505","-3","60","50",null,null);

                p.sub_tit00_00_00_00_00_00_00.set_taborder("33");
                p.sub_tit00_00_00_00_00_00_00.set_background("#ffffff");
                p.sub_tit00_00_00_00_00_00_00.set_flexcrossaxisalign("end");
                p.sub_tit00_00_00_00_00_00_00.move("0","0","100%","46",null,null);

                p.Div05.set_taborder("34");
                p.Div05.set_text("div05");
                p.Div05.set_fittocontents("height");
                p.Div05.move("0","9686","100%","1000",null,null);

                p.staSubTitle02_00_03_00_00_00_00_00_00_00.set_taborder("35");
                p.staSubTitle02_00_03_00_00_00_00_00_00_00.set_text("광케이블");
                p.staSubTitle02_00_03_00_00_00_00_00_00_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_03_00_00_00_00_00_00_00.set_flexgrow("1");
                p.staSubTitle02_00_03_00_00_00_00_00_00_00.move("0","-3","100%","50",null,null);

                p.Button00_00_03_00_00_00_00_00_00_00.set_taborder("36");
                p.Button00_00_03_00_00_00_00_00_00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_03_00_00_00_00_00_00_00.move("461","6","34","34",null,null);

                p.Panel01_02_03_00_00_00_00_00_00_00.set_taborder("37");
                p.Panel01_02_03_00_00_00_00_00_00_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_03_00_00_00_00_00_00_00.set_spacing("0px 10px");
                p.Panel01_02_03_00_00_00_00_00_00_00.set_horizontalgap("10");
                p.Panel01_02_03_00_00_00_00_00_00_00.set_flexcrossaxisalign("center");
                p.Panel01_02_03_00_00_00_00_00_00_00.set_flexmainaxisalign("end");
                p.Panel01_02_03_00_00_00_00_00_00_00.set_flexgrow("1");
                p.Panel01_02_03_00_00_00_00_00_00_00.move("505","-3","60","50",null,null);

                p.sub_tit00_00_00_00_00_00_00_00.set_taborder("38");
                p.sub_tit00_00_00_00_00_00_00_00.set_background("#ffffff");
                p.sub_tit00_00_00_00_00_00_00_00.set_flexcrossaxisalign("end");
                p.sub_tit00_00_00_00_00_00_00_00.move("0","0","100%","46",null,null);

                p.Div06.set_taborder("39");
                p.Div06.set_text("div06");
                p.Div06.set_fittocontents("height");
                p.Div06.move("232","10485","100%","1200",null,null);

                p.staSubTitle02_00_03_00_00_00_00_00_00_00_00.set_taborder("40");
                p.staSubTitle02_00_03_00_00_00_00_00_00_00_00.set_text("기타사항");
                p.staSubTitle02_00_03_00_00_00_00_00_00_00_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_03_00_00_00_00_00_00_00_00.set_flexgrow("1");
                p.staSubTitle02_00_03_00_00_00_00_00_00_00_00.move("0","-3","100%","50",null,null);

                p.Button00_00_03_00_00_00_00_00_00_00_00.set_taborder("41");
                p.Button00_00_03_00_00_00_00_00_00_00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_03_00_00_00_00_00_00_00_00.move("461","6","34","34",null,null);

                p.Panel01_02_03_00_00_00_00_00_00_00_00.set_taborder("42");
                p.Panel01_02_03_00_00_00_00_00_00_00_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_03_00_00_00_00_00_00_00_00.set_spacing("0px 10px");
                p.Panel01_02_03_00_00_00_00_00_00_00_00.set_horizontalgap("10");
                p.Panel01_02_03_00_00_00_00_00_00_00_00.set_flexcrossaxisalign("center");
                p.Panel01_02_03_00_00_00_00_00_00_00_00.set_flexmainaxisalign("end");
                p.Panel01_02_03_00_00_00_00_00_00_00_00.set_flexgrow("1");
                p.Panel01_02_03_00_00_00_00_00_00_00_00.move("505","-3","60","50",null,null);

                p.sub_tit00_00_00_00_00_00_00_00_00.set_taborder("43");
                p.sub_tit00_00_00_00_00_00_00_00_00.set_background("#ffffff");
                p.sub_tit00_00_00_00_00_00_00_00_00.set_flexcrossaxisalign("end");
                p.sub_tit00_00_00_00_00_00_00_00_00.move("0","0","100%","46",null,null);

                p.Div07.set_taborder("44");
                p.Div07.set_text("div07");
                p.Div07.set_fittocontents("none");
                p.Div07.move("180","11220","100%","1650",null,null);
            	}
            );
            obj.set_spacing("0px 400px 0px 0px");
            obj.set_type("vertical");
            obj.set_verticalgap("0");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("Layout0","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div06.set_fittocontents("height");

                p.Div07.set_fittocontents("height");
            	}
            );
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
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
                p.btn00.set_taborder("0");
                p.btn00.set_text("신청자 정보");
                p.btn00.set_cssclass("btn_WF_Quick_S");
                p.btn00.move("17","20","100%","45",null,null);

                p.btn00_00.set_taborder("1");
                p.btn00_00.set_text("신청위치 정보");
                p.btn00_00.set_cssclass("btn_WF_Quick");
                p.btn00_00.move("17.00","btn00:0","100%","45",null,null);

                p.btn00_00_00.set_taborder("2");
                p.btn00_00_00.set_text("고객정보");
                p.btn00_00_00.set_cssclass("btn_WF_Quick");
                p.btn00_00_00.move("17.00","110","100%","45",null,null);

                p.btn00_00_00_00.set_taborder("3");
                p.btn00_00_00_00.set_text("청구정보");
                p.btn00_00_00_00.set_cssclass("btn_WF_Quick");
                p.btn00_00_00_00.move("17.00","110","100%","45",null,null);

                p.btn00_00_00_00_00.set_taborder("4");
                p.btn00_00_00_00_00.set_text("통신신청정보");
                p.btn00_00_00_00_00.set_cssclass("btn_WF_Quick");
                p.btn00_00_00_00_00.move("17.00","110","100%","45",null,null);

                p.btn00_00_00_01.set_taborder("5");
                p.btn00_00_00_01.set_text("동선");
                p.btn00_00_00_01.set_cssclass("btn_WF_Quick");
                p.btn00_00_00_01.move("17.00","110","100%","45",null,null);

                p.btn00_00_00_00_01.set_taborder("6");
                p.btn00_00_00_00_01.set_text("광케이블");
                p.btn00_00_00_00_01.set_cssclass("btn_WF_Quick");
                p.btn00_00_00_00_01.move("17.00","110","100%","45",null,null);

                p.btn00_00_00_02.set_taborder("7");
                p.btn00_00_00_02.set_text("기타사항");
                p.btn00_00_00_02.set_cssclass("btn_WF_Quick");
                p.btn00_00_00_02.move("17.00","110","100%","45",null,null);
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

            //-- Normal Layout : this.divQuick.form
            obj = new Layout("Layout0","",0,0,this.divQuick.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btn00_00.set_cssclass("btn_WF_QuickM");
                p.btn00_00.set_fittocontents("width");

                p.btn00_00_00.set_cssclass("btn_WF_QuickM");
                p.btn00_00_00.set_fittocontents("width");

                p.btn00_00_00_00.set_cssclass("btn_WF_QuickM");
                p.btn00_00_00_00.set_fittocontents("width");

                p.btn00_00_00_00_00.set_cssclass("btn_WF_QuickM");
                p.btn00_00_00_00_00.set_fittocontents("width");

                p.btn00.set_cssclass("btn_WF_QuickM_S");
                p.btn00.set_fittocontents("width");
            	}
            );
            obj.set_type("horizontal");
            obj.set_spacing("0px");
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
            obj.set_flexmainaxisalign("end");
            obj.set_verticalgap("10");
            obj.set_horizontalgap("10");
            obj.set_spacing("20px 10px");
            obj.set_flexwrap("wrap");
            obj.set_flexcrossaxisalign("center");
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
            obj.set_verticalgap("10");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            this.divBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divBtn.form
            obj = new Layout("Layout0","",0,0,this.divBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_spacing("0px 10px");
            obj.set_flexwrap("nowrap");
            obj.set_flexmainaxisalign("start");
            obj.set_type("horizontal");
            obj.set_verticalgap("10");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            this.divBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("통신사용신청");

                p.divForm.set_taborder("3");
                p.divForm.set_text("div00");
                p.divForm.set_cssclass("div_WF_QuickFrBg");
                p.divForm.set_fittocontents("height");
                p.divForm.move("0","60",null,"12500","60",null);

                p.divTitle.set_taborder("0");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);

                p.divQuick.set_taborder("1");
                p.divQuick.set_text("div00");
                p.divQuick.set_cssclass("div_WF_QuickMenu");
                p.divQuick.set_fittocontents("height");
                p.divQuick.move(null,"62","296","400","62",null);

                p.divBtn.set_taborder("2");
                p.divBtn.set_text("div00");
                p.divBtn.set_cssclass("div_WF_QuickBtnBg");
                p.divBtn.set_fittocontents("height");
                p.divBtn.move(null,"divQuick:0","296","280","62",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",480,12000,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divBtn.set_cssclass("div_WF_QuickBtnBgM");
                p.divBtn.set_fittocontents("none");
                p.divBtn.move("0","divForm:0",null,"80","0",null);

                p.divQuick.set_cssclass("div_WF_QuickMenuM");
                p.divQuick.move("20","60",null,"60","20",null);

                p.divTitle.move("0","0",null,"50","0",null);

                p.divForm.set_cssclass("div_WF_QuickFrBgM");
                p.divForm.move("0","120",null,null,"0","80");
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.Div01.form.divEdtPop00.form.edtAplyNo","value","dsCmmCmnctMst","aplyNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.Div01.form.edtAplcntMblTelno","value","dsCmmCmnctMst","mblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.Div01.form.divEdtPop00_00.form.edtAplcntNm","value","dsCmmCmnctMst","aplcntNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.Div00.form.cboRgn","value","dsCmmCmnctMst","bldgSeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.Div00.form.cmbPstnSe","value","dsCmmCmnctMst","pstnSeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.Div03.form.radItgrnClmYn","value","dsCmmCmnctMst","itgrnClmYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.Div03.form.rdoPayPicSmYn","value","dsCmmCmnctMst","payPicSmYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.Div03.form.edtPayPicNm","value","dsCmmCmnctMst","payPicNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divForm.form.Div03.form.edt00_01_04","value","dsCmmCmnctMst","payPicNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divForm.form.Div03.form.edtPayPicMblTelno","value","dsCmmCmnctMst","payPicNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divForm.form.Div03.form.edtCustNo","value","dsCmmCmnctMst","custNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divForm.form.Div03.form.edt00_01_01_00_00_00_00_00","value","dsCmmCmnctMst","acuntEml");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divForm.form.Div03.form.edt00_01_014","value","dsCmmCmnctMst","txivEml");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divForm.form.Div03.form.rdoClmMtd","value","dsCmmCmnctMst","clmMtdCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divForm.form.Div03.form.edtClmAddr","value","dsCmmCmnctMst","clmAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divForm.form.Div03.form.divEdtPop.form.edtClmZip","value","dsCmmCmnctMst","bzmnRegDtlAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divForm.form.Div02.form.radCustTypeCd","value","dsCmmCmnctMst","custTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divForm.form.Div02.form.edtRprsvNm","value","dsCmmCmnctMst","rprsvNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divForm.form.Div04.form.cmbSrvcAplySeCd","value","dsCmmCmnctMst","srvcAplySeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divForm.form.Div04.form.edtGnrlTelAplyCntOrg","value","dsCmmCmnctMst","gnrlTelAplyCnt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divForm.form.Div04.form.edTpriAplyCnt","value","dsCmmCmnctMst","priAplyCnt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.Div02.form.edtCustInstNm","value","dsCmmCmnctMst","ctrtrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divForm.form.Div07.form.rdoNewCustYn","value","dsCmmCmnctMst","newCustYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divForm.form.Div07.form.rdoFocYn","value","dsCmmCmnctMst","focYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divForm.form.Div07.form.edtAsaSysMngNo","value","dsCmmCmnctMst","asaSysMngNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divForm.form.Div03.form.chkPrvcEsntlClctAgreYn","value","dsCmmCmnctMst","prvcClctEsntlAgreYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divForm.form.Div03.form.rdoPrvcChcClctAgreYn","value","dsCmmCmnctMst","prvcClctChcAgreYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divForm.form.Div07.form.TextArea00","value","dsCmmCmnctMst","cnvyMttrCn");
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
        *  @FileName 	LIF056M00.xfdl
        *  @Creator 	김진섭
        *  @CreateDate 	2024/12/07
        *  @Desction    입주>유틸리티신청>통신신청(전기/LAN/TV)>통신사용신청
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
        this.objVrbl = { isWrtSplmntStep : false    // 신청서 작성 및 보완 단계 여부
                       , isWrtStep       : false    // 신청서 작성 단계 여부
                       };

        this.aplyNo 	= "";	// 신청서번호(화면 로드시 신청서 번호가 없으면 신규등록 가능)
        this.aplySeCd 	= "TSPCMM001"; // 신청구분코드 - (ASIS : CAR_CAT_CD (워크플로우 데이타업데이트TAB에서 확인))
        this.jobCd 		= "TAS00101"; // 작업코드(기본값 TAS00101 : 신청서작성)

        this.vStrSvcId  = ""; // 서비스ID
        this.vStrSvcUrl = ""; // 서비스URL

        this.btnDiv = this.divBtn; // 공통버튼영역 Div

        this.lv_cboRgnSe = "0"; // 콤보 아이템 클릭 시 1로 바꿔줌. 로드시 이벤트때 적용.

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
        	this.cfnComCdLoad({ id:"comSrvcAplySeCdSearch", cbf:"fnCallback", dsSrvcAplySeList:"CMMCLA:" }); // 서비스신청구분코드
        	this.cfnComCdLoad({ id:"comdCallPrmGrdListSearch", cbf:"fnCallback", dsCallPrmGrdList:"CMMCACCPC:" }); //통화허용등급

        	// 신청서 번호 있는지 체크 없으면 신규등록
        	this.aplyNo = this.getOwnerFrame().aplyNo;   // 신청번호
        	//this.aplyNo = "CMM2412_00008";   // 신청번호


        	trace("a44_aplyNo==>" + this.aplyNo);
        	if (this.gfnIsNull(this.aplyNo)) {
        	    var nRow = this.dsCmmCmnctMst.addRow();

        		//신청자정보 영역
        		this.dsCmmCmnctMst.setColumn(nRow, "rgtrId"		, this.gvUserId);	// 등록자id
        		this.dsCmmCmnctMst.setColumn(nRow, "rgtrInstCd"	, this.gvCoId);		// 등록자기관코드
        		this.dsCmmCmnctMst.setColumn(nRow, "rgtrDeptCd"	, this.gvDeptId);	// 등록자부서코드
        		this.dsCmmCmnctMst.setColumn(nRow, "mblTelno"	, this.gvMblTelNo);	// 등록자휴대전화번호
        		this.dsCmmCmnctMst.setColumn(nRow, "aplcntId"		, this.gvUserId);	// 신청자id
        		this.dsCmmCmnctMst.setColumn(nRow, "aplcntNm"		, this.gvUserNm);	// 신청자명
        		this.dsCmmCmnctMst.setColumn(nRow, "aplcntInstCd"	, this.gvCoId);		// 신청자기관코드
        		this.dsCmmCmnctMst.setColumn(nRow, "ctrtrNm"	, this.gvCoNm);		// 신청자기관명(계약자명)
        		this.divForm.form.Div01.form.edtCtrtInstNm.value = this.gvCoNm;//회사명
        		this.dsCmmCmnctMst.setColumn(nRow, "aplcntDeptCd"	, this.gvDeptId);	// 신청자부서코드
        		this.dsCmmCmnctMst.setColumn(nRow, "aplySeCd"		, this.aplySeCd);	// 신청구분코드

        		//신청번호
        		this.divForm.form.Div01.form.Pan01_AplyNo.visible = false;
        		this.divForm.form.Div00.form.cmbPstnSe.readonly = true; //수기입력 위치구분2
        		//this.divForm.form.Div02.form.staCnvyMttr.text = "전달사항";//처리내용 타이틀 항목
        		//this.divForm.form.Div02.form.pan12.visible = false;//처리내용 그리드 이력 항목

        	    //this.divForm.form.Div02.form.rdoAplyKndCd.set_index(0);//신청종류 항목
        		//this.divForm.form.Div02.form.rdoFcltSe.set_index(0);//시설구분 항목
        		//this.divForm.form.Div02.form.rdoCustTypeCd.set_index(0);//고객유형 항목
        		//this.divForm.form.Div02.form.rdoZone.set_index(0);//구역구분 항목


        		// 해당 TASK ID로 버튼 자동 생성 -> 추후에 신청번호가 있는지 없는지 체크해서 task id 박아넣어줘야함. 현재는 신청서 작성으로 했음.
        		this.cfnBtnCrt({ crtTrgt:this.divBtn, cbf:"fnCallback", lnkgEvnt:this.btn_onclick, inqCnd : { jobPrcsPrgrsSeCd:this.jobCd} });

        	} else {

        		this.divForm.form.Div01.form.edtCtrtInstNm.value = this.gvCoNm;//회사명

        		// 통신사용신청 마스터 조회
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
        		posTop1 = 62;
        		posTop2 = 523;

        	}else{
        		posTop1 = 12;
        		posTop2 = 473;

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
        		CTL00757	임시저장
        		CTL00162	신청
        		CTL00824	종료
        		CTL00163	재신청
        		CTL11002	재신청
        		CTL00164	미처리종료
        		CTL00165	접수
        		CTL00168	사전작업완료
        		CTL00167	보완요청
        		CTL00169	다음단계
        		CTL11014	담당자변경
        		CTL00889	미처리종료
        		CTL00286	설문응답완료
        	*/

        	trace("vBtnCd===>" + vBtnCd);

        	if(vBtnCd == "CTL00757"){ // 임시저장 버튼
        		this.vStrSvcId  = "saveCmnctUseAplcfmWrtTmprStrg";
        		this.vStrSvcUrl = "cmnctUse/saveCmnctUseAplcfmWrtTmprStrg.do";

        	}else if(vBtnCd == "CTL00162" || vBtnCd == "CTL00163"){ // 신청서작성 - 신청, 신청서보완 - 재신청
        		// validation check
        		var res = this.fnValiChk();
        		if(!res){
        			return;

        		}

        		this.vStrSvcId  = "saveCmnctUseAplcfmWrtTmprStrg";
        		this.vStrSvcUrl = "cmnctUse/saveCmnctUseAplcfmWrtTmprStrg.do";

        	}else if(vBtnCd == "CTL00824" || vBtnCd == "CTL00164" || vBtnCd == "CTL00889"){ // 종료, 신청서보완 - 미처리종료, 담당자검토및승인 - 미처리종료
        		// 신규입력일때 종료 버튼 클릭 시 화면만 닫아줌.
        		if(this.dsCmmCmnctMst.getRowType(0) == Dataset.ROWTYPE_INSERT){
        			this.gfnConfirmMsg("endConfirm", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"], "", ["종료"]);

        			return;

        		}else{
        			this.vStrSvcId  = "saveCmnctUseAplcfmWrtTmprStrg";
        			this.vStrSvcUrl = "cmnctUse/saveCmnctUseAplcfmWrtTmprStrg.do";

        		}

        	}else if(vBtnCd == "CTL00165"){ // 접수 - 접수, 접수 - 보완요청
        	//alert("cc11");
        		this.vStrSvcId  = "saveCmnctUseAplcfmWrtTmprStrg";
        		this.vStrSvcUrl = "cmnctUse/saveCmnctUseAplcfmWrtTmprStrg.do";

        		// 서비스요청내용
        // 		if(this.gfnIsNull(this.dsCmmCmnctMst.getColumn(0, "srvcDmndCnIdntyYn"))){
        // 			this.divForm.form.Div02.form.rdoSrvcDmndCnYn.setFocus();
        // 			this.gfnAlertMsg("msg", "MSG_009", ["서비스요청 내용확인 \n"]);
        // 			return;
        //
        // 		}
        // 		// 보완요청 - 보완사유 체크
        // 		if(vBtnCd == "CTL11001"){
        // 			if(this.gfnIsNull(this.dsCmmCmnctMst.getColumn(0, "splmntDmndRsnCn"))){
        // 				this.divForm.form.Div02.form.txtSplmntDmndRsn.setFocus();
        // 				this.gfnAlertMsg("msg", "MSG_009", ["보완요청 사유 \n"]);
        // 				return;
        //
        // 			}
        // 		}
                  // 담당자검토및승인 - 보완요청 || 다음단계(승인) || 처리완료
        	}else if(vBtnCd == "CTL00167" || vBtnCd == "CTL00169" || vBtnCd == "CTL10854"){
        		this.vStrSvcId  = "saveCmnctUseAplcfmWrtTmprStrg";
        		this.vStrSvcUrl = "cmnctUse/saveCmnctUseAplcfmWrtTmprStrg.do";

        		// 서비스신청정보
        // 		if(this.gfnIsNull(this.dsCmmCmnctMst.getColumn(0, "srvcAplyInfoIdntyYn"))){
        // 			this.divForm.form.Div02.form.rdoSrvcDmndCnYn.setFocus();
        // 			this.gfnAlertMsg("msg", "MSG_009", ["서비스신청정보 확인 \n"]);
        // 			return;
        //
        // 		}
        // 		// 보완요청 - 보완사유 체크
        // 		if(vBtnCd == "CTL00167"){
        // 			if(this.gfnIsNull(this.dsCmmCmnctMst.getColumn(0, "splmntDmndRsnCn"))){
        // 				this.divForm.form.Div02.form.txtSplmntDmndRsn.setFocus();
        // 				this.gfnAlertMsg("msg", "MSG_009", ["보완요청사유 \n"]);
        // 				return;
        //
        // 			}
        // 		}
        	}else if(vBtnCd == "CTL00166"){ // 담당자변경
        		alert("담당자변경 팝업 완료 시 연결 예정!!");
        		return;

        	}else if(vBtnCd == "CTL00168"){ // 사전작업완료

        	//임시 막음 todo
        // 		if (this.gfnDsIsUpdated(this.dsFile2) == false) {
        // 			this.gfnAlertMsg("msg", "MSG_009", ["[개통확인서] \n"]);
        // 			return false;
        // 		}

        		// 신규고객여부
        		if(this.gfnIsNull(this.dsCmmCmnctMst.getColumn(0, "newCustYn"))){
        			this.divForm.form.Div07.form.rdoNewCustYn.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["신규고객여부 \n"]);
        			return false;

        		}

        		// 별정시스템관리번호
        		if(this.gfnIsNull(this.dsCmmCmnctMst.getColumn(0, "asaSysMngNo"))){
        			this.divForm.form.Div07.form.edtAsaSysMngNo.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["별정시스템관리번호 \n"]);
        			return false;

        		}

        		// 무상여부
        		if(this.gfnIsNull(this.dsCmmCmnctMst.getColumn(0, "focYn"))){
        			this.divForm.form.Div07.form.rdoFocYn.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["무상여부 \n"]);
        			return false;

        		}

        		this.vStrSvcId  = "saveCmnctUseAplcfmWrtTmprStrg";
        		this.vStrSvcUrl = "cmnctUse/saveCmnctUseAplcfmWrtTmprStrg.do";

        	}else if(vBtnCd == "CTL00286"){ // 설문응답완료

        		this.vStrSvcId  = "saveCmnctUseAplcfmWrtTmprStrg";
        		this.vStrSvcUrl = "cmnctUse/saveCmnctUseAplcfmWrtTmprStrg.do";

        	}

        	// 넘겨줄 데이터 세팅
        	this.dsCmmCmnctMst.setColumn(0, "jobCd", wfInfo.nextStepJobPrcsPrgrsSeCd);
        	this.dsCmmCmnctMst.setColumn(0, "aplySeCd", this.aplySeCd);

        	if(this.gfnIsNull(this.dsCmmCmnctMst.getColumn(0, "docCd"))){
        		this.dsCmmCmnctMst.setColumn(0, "docCd", "TSPDOC900"); // 공통코드 TSPDOC900 : 전동차신청

        	}
        	//alert("cc22");
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
        	if(this.gfnIsNull(this.dsCmmCmnctMst.getColumn(0, "aplyDt"))){
        		this.dsCmmCmnctMst.setColumn(0, "aplyDt", curDt);

        	}
        	if(this.gfnIsNull(this.dsMst.getColumn(0, "aplyDt"))){
        		this.dsMst.setColumn(0, "aplyDt", curDt);

        	}
        	//alert("cc33");
        	// 종료, 신청서보완 - 미처리종료, 담당자검토및승인 - 미처리종료, 등록/허가증제작중 - 제작완료
        	if(vBtnCd == "CTL00824" || vBtnCd == "CTL00164" || vBtnCd == "CTL00889" ){
        		// 종료일자 세팅
        		this.dsCmmCmnctMst.setColumn(0, "endDt", curDt);
        		this.dsMst.setColumn(0, "endDt", curDt);

        	}

        	// 납부담당자동일여부 - 동일하지 않을때 개인정보동의 항목 null 넣어줌.
        	if(this.dsCmmCmnctMst.getColumn(0, "payPicSmYn") == "1"){ // 동일하지않음
        		if(this.dsCmmCmnctMst.getColumn(0, "aplyKndCd") == "CARREQTYPE002"){
        			this.dsCmmCmnctMst.setColumn(0, "prvcClctEsntlAgreYn", null);
        			this.dsCmmCmnctMst.setColumn(0, "prvcClctChcAgreYn", null);

        		}else{
        			this.dsCmmCmnctMst.setColumn(0, "prvcClctEsntlAgreYn", null);
        			this.dsCmmCmnctMst.setColumn(0, "prvcClctEsntlAgreYn2", null);
        			this.dsCmmCmnctMst.setColumn(0, "prvcClctChcAgreYn", null);

        		}

        	}else if(this.dsCmmCmnctMst.getColumn(0, "payPicSmYn") == "0"){ // 동일함
        		this.dsCmmCmnctMst.setColumn(0, "prvcClctEsntlAgreYn2", null);

        	}
        	//alert("cc44");
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
        	//alert("cc55");
        	if(this.dsMst.getColumn(0, "clmZip") != this.dsCmmCmnctMst.getColumn(0, "clmZip")){
        		this.dsMst.setColumn(0, "clmZip", this.dsCmmCmnctMst.getColumn(0, "clmZip"));	// 우편번호

        	}
        	if(this.dsMst.getColumn(0, "clmAddr") != this.dsCmmCmnctMst.getColumn(0, "clmAddr")){
        		this.dsMst.setColumn(0, "clmAddr", this.dsCmmCmnctMst.getColumn(0, "clmZip"));	// 청구주소

        	}
        	if(this.dsMst.getColumn(0, "clmDtlAddr") != this.dsCmmCmnctMst.getColumn(0, "clmDtlAddr")){
        		this.dsMst.setColumn(0, "clmDtlAddr", this.dsCmmCmnctMst.getColumn(0, "clmDtlAddr"));		// 청구상세주소

        	}

        	// 수정된 내역이 있는지 체크
        	if(!this.gfnDsIsUpdated(this.dsCmmCmnctMst) && !this.gfnDsIsUpdated(this.dsAtfl) && !this.gfnDsIsUpdated(this.dsCnvyMttr)){
        		this.gfnAlertMsg("msg", "MSG_004", [""]);
        		return;

        	}
        	//alert("cc66");
        	if(vBtnCd == "CTL00824" || vBtnCd == "CTL00164" || vBtnCd == "CTL00889"){ // 종료, 신청서보완 - 미처리종료, 담당자검토및승인 - 미처리종료
        		trace("sssss==>" + vBtnCd );
        		this.gfnConfirmMsg("endSaveConfirm", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"], "", ["종료"]);

        	}else if(vBtnCd == "CTL00162") { // 신청
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

        			// 저장
        			this.cfnSave();

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
        			//alert("gggg2222==>" + oRtn.result);
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
        this.fnValiChk = function()
        {

        	// 통합청구
        	if(this.gfnIsNull(this.dsCmmCmnctMst.getColumn(0, "itgrnClmYn"))){
        		this.divForm.form.Div03.form.radItgrnClmYn.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["[기존 청구정보유지] \n"]);
        		return false;

        	}

        	// 청구고객번호
        	if(this.gfnIsNull(this.dsCmmCmnctMst.getColumn(0, "custNo"))){
        		this.divForm.form.Div03.form.edtCustNo.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["청구고객번호 \n"]);
        		return false;

        	}

        	// 고객유형
        	if(this.gfnIsNull(this.dsCmmCmnctMst.getColumn(0, "custTypeCd"))){
        		this.divForm.form.Div02.form.radCustTypeCd.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["고객유형 \n"]);
        		return false;

        	}

        	// 대표자명
        	if(this.gfnIsNull(this.dsCmmCmnctMst.getColumn(0, "rprsvNm"))){
        		this.divForm.form.Div02.form.edtRprsvNm.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["대표자명 \n"]);
        		return false;

        	}

        	if(this.gfnIsNull(this.divForm.form.Div00.form.cboRgn.value)){ // 지역구분코드
        		this.divForm.form.Div00.form.cboRgn.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["지역구분 \n"]);
        		return false;
        	}

        	if(this.gfnIsNull(this.divForm.form.Div00.form.cmbPstnSe.value)){ // 위치구분코드
        		this.divForm.form.Div00.form.cmbPstnSe.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["[위치구분]은 최하단 정보 \n"]);
        		return false;
        	}

        	if(this.gfnIsNull(this.divForm.form.Div04.form.cmbSrvcAplySeCd.value)){ // 서비스신청구분
        		this.divForm.form.Div04.form.cmbSrvcAplySeCd.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["[서비스신청구분] \n"]);
        		return false;
        	}

        	for(var i = 0; i < this.dsGnrlTelSrvcAplyInfo.rowcount; i++) {

        		// 통화허용등급
        		if(this.gfnIsNull(this.dsGnrlTelSrvcAplyInfo.getColumn(i, "callPrmGrd"))){
        			this.gfnAlertMsg("msg", "MSG_009", ["[통화허용등급] \n"]);
        			return false;
        		}

        		// 희망일자
        		if(this.gfnIsNull(this.dsGnrlTelSrvcAplyInfo.getColumn(i, "hpeYmd"))){
        			this.gfnAlertMsg("msg", "MSG_009", ["[희망일자] \n"]);
        			return false;
        		}

        		// 설치장소
        		if(this.gfnIsNull(this.dsGnrlTelSrvcAplyInfo.getColumn(i, "instlPlcNm"))){
        			this.gfnAlertMsg("msg", "MSG_009", ["[설치장소] \n"]);
        			return false;
        		}

        	}

        	if(this.gfnIsNull(this.divForm.form.Div03.form.chkPrvcEsntlClctAgreYn.value)){ // 개인정보수집이용동의여부
        		this.divForm.form.Div03.form.chkPrvcEsntlClctAgreYn.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["개인정보(필수)수집이용동의여부 \n"]);
        		return false;
        	}

        	if(this.gfnIsNull(this.divForm.form.Div03.form.rdoPrvcChcClctAgreYn.value)){ // 개인정보수집이용동의여부
        		this.divForm.form.Div03.form.rdoPrvcChcClctAgreYn.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["개인정보(선택)수집이용동의여부 \n"]);
        		return false;
        	}

        	//임시 막음 todo
        // 	if(this.gfnIsNull(this.divForm.form.Div03.form.rdoPrvcChcClctAgreYn.value)){ // 사업자등록증
        // 		this.divForm.form.Div03.form.rdoPrvcChcClctAgreYn.setFocus();
        // 		this.gfnAlertMsg("msg", "MSG_009", ["사업자등록증 \n"]);
        // 		return false;
        // 	}

        	return true;
        }

        /**************************************************************************
         * @name : fnScrnSetting
         * @description : 조회 시 화면 세팅
         ***************************************************************************/
        this.fnScrnSetting = function()
        {

        // 	// TAS10434 : 담당자접수, TAS10435 : 담당자검토및승인
        // 	//TODO
        // 	//서비스목록화면에서 팝업 오픈인지, 처리자 로그인 후 메인화면의 처리목록에 팝업 오픈인지 구분 필요
        // 	//KJS,20241120
        // 	if(this.jobCd == "TAS10434" || this.jobCd == "TAS10435"){
        // //alert("bb33222");
        // 		this.divForm.form.Div02.form.pan07.visible = true; //서비스요청내용확인 radio
        // 		this.divForm.form.Div02.form.pan08.visible = true; //보완요청사유
        // 		this.divForm.form.Div02.form.pan09.visible = true; //별칭내용
        // 		this.divForm.form.Div02.form.pan10.visible = true; //전달사항
        // 		this.divForm.form.Div02.form.pan11.visible = true; //별칭내용
        // 		this.divForm.form.Div02.form.pan12.visible = true; //처리내용이력
        //
        // 		this.resetScroll();//화면에서 스크롤을 길게 보이게 해주는 기능
        // 	}
        //
        // 	//TAS10433 : 신청서보완
        // 	if(this.jobCd == "TAS10433"){
        // 		this.divForm.form.Div02.form.pan08.visible = true; //보완요청사유
        // 		this.divForm.form.Div02.form.pan10.visible = true; //전달사항
        // 		this.divForm.form.Div02.form.pan12.visible = true; //처리내용이력
        //
        // 		this.resetScroll();//화면에서 스크롤을 길게 보이게 해주는 기능
        // 	}
        //
        // 	//TAS10436 : 만족조조사
        // 	if(this.jobCd == "TAS10436"){
        // 	    this.divForm.form.Div02.form.pan10.visible = false; //처리내역
        // 		this.divForm.form.Div02.form.pan12.visible = true; //처리내용이력
        //
        // 		this.resetScroll();//화면에서 스크롤을 길게 보이게 해주는 기능
        // 	}
        // //alert("bb44");
        // 	// 담당자접수 (조회 거래) 시 readyOnly 처리
        // // 	if(this.jobCd == "TAS10434"){
        // // 		this.divForm.form.Div02.form.rdoSrvcDmndCnYn.readonly = true;
        // // 		this.divForm.form.Div02.form.txtSplmntDmndRsn.readonly = true;
        // // 	}
        //
        // 	// 신청서 보완 시 보완내역 readyOnly 처리
        // 	if(this.jobCd == "TAS10433"){
        // 		this.divForm.form.Div02.form.rdoSrvcDmndCnYn.readonly = true;
        // 		this.divForm.form.Div02.form.txtSplmntDmndRsn.readonly = true;
        // 		this.divForm.form.Div02.form.grdSplmnt.readonly = true;
        // 		this.divForm.form.Div02.form.grdCnvyMttr.readonly = true;
        //
        // 		this.resetScroll();
        //
        // 	}
        //
        // 	trace("(fn_ScrnSetting)this.jobCd ====>" + this.jobCd);
        //
        // 	// TAS10437 : 종료 일때
        // 	if(this.jobCd == "TAS10437"){
        // 		var sBfrJobCd = this.dsCmmCmnctMst.getColumn(0, "bfrJobCd");
        // 		trace("sBfrJobCd_ff==>" + sBfrJobCd);
        // 		// TAS00101 : 신청서작성, TAS10433 : 신청서보완
        // 		if(sBfrJobCd == "TAS00101"){
        //
        //
        // 		}else if(sBfrJobCd == "TAS10433"){
        // 			// 신청서보완에서 미처리 종료된 경우 보완 내역을 보여준다.
        // 			this.divForm.form.Div02.form.pan07.visible = true;
        // 			this.divForm.form.Div02.form.pan08.visible = true;
        // 			this.divForm.form.Div02.form.pan09.visible = true;
        // 			// this.divForm.form.Div07.form.pan07.visible = true;
        // 			//this.divForm.form.Div07.form.pan08.visible = true;
        //
        // 			this.resetScroll();
        //
        // 		}
        // 	}
        // //alert("bb555==>" + this.jobCd);
        // 	// this.jobCd 가 TAS00101, TAS10433 일때는 신청서 작성/보완 이라 이외에는 컴포넌트 readOnly 처리해줌.
        // 	if(this.jobCd != "TAS00101" && this.jobCd != "TAS10433"){
        // //alert("bb66611==>" + this.jobCd);
        // 		// 이력 불러오기 버튼 신청성 작성일때만 노출
        // 		if(this.jobCd != "TAS00101"){
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
        // //alert("bb66633==>" + this.jobCd);
        // 		// 내부함수호출
        // 		function fnReadonly (oComp, bReadonly) {
        // 			if (oComp instanceof nexacro.Div) {
        // 				fnReadonly.call(this, oComp.form);
        // 			} else {
        // 				if (oComp instanceof nexacro.Static) return;
        // 				if (oComp instanceof nexacro.Panel) return;
        // 				if (oComp instanceof nexacro.TextArea){
        // 					// TAS10437 : 종료가 아닐땐 textArea 수정가능하게 해줌.
        // 					if(this.jobCd != "TAS10437"){
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
        // 					if(this.jobCd == "TAS10434" || this.jobCd == "TAS10435"){
        // 						// "rdoSrvcDmndCnYn", "grdSplmnt", "grdCnvyMttr"
        // 						if(this.gfnDecode(oComp.id, "rdoSrvcDmndCnYn", "1", "grdSplmnt", "1", "grdCnvyMttr", "1", "0") == "1"){
        // 							return;
        //
        // 						}
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
        //
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

        	case "tspLocCdLoad" : // 지역구분코드
        			this.dsTspLocCd.filter("uprCd == 'TSPLOCWAT' || cdId == ''");

        			break;

        		case "selectCmnctUseAplcfmWrtInq" : // 통신사용신청 마스터 조회
        			//alert("마스터 정상조회!!!");
        			if(this.dsCmmCmnctMst.getRowCount() > 0){
        				this.jobCd = this.dsCmmCmnctMst.getColumn(0, "jobCd");
        			}

        			//@서비스목록 화면에서 팝업조회시 버튼 생성 막음(kjs, 20241119)
        			// 해당 TASK ID로 버튼 자동 생성 -> 추후에 신청번호가 있는지 없는지 체크해서 task id 박아넣어줘야함. 현재는 신청서 작성으로 했음.
        			this.cfnBtnCrt({ crtTrgt:this.divBtn, cbf:"fnCallback", lnkgEvnt:this.btn_onclick, inqCnd : { jobPrcsPrgrsSeCd:this.jobCd} });

        			// 화면 세팅
        			this.fnScrnSetting();

        			//신청번호
        			this.divForm.form.Div01.form.Pan01_AplyNo.visible = true;

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

        			this.divForm.form.Div02.form.rdoFcltSe.set_index(0);

        			break;

        		case "comSrvcAplySeCdSearch" : // 서비스신청구분코드 조회

         			// 전체 조회를 위해 [선택] 추가
         			//this.dsSrvcAplySeList.insertRow(0);
         			//this.dsSrvcAplySeList.setColumn(0, "cdId", "");
         			//this.dsSrvcAplySeList.setColumn(0, "cdNm", "[서비스신청구분]");
        			this.dsSrvcAplySeList.filter("cdId == 'CMMCLA0101' || cdId == 'CMMCLA0113' || cdId == 'CMMCLA0103' || cdId == 'CMMCLA0105' || cdId == 'CMMCLA0106'");
        			this.dsSrvcAplySeList.insertRow(0);
         			this.dsSrvcAplySeList.setColumn(0, "cdId", "");
         			this.dsSrvcAplySeList.setColumn(0, "cdNm", "[서비스신청구분]");

        			this.divForm.form.Div04.form.cmbSrvcAplySeCd.index = 0;

        			break;

        		case "comBldgSeSearch" : // 건물구분 조회
        // 			// 건물구분 제한값 'TSPLOCTSC010', 'TSPLOCTSC070', 'TSPLOCTSC020' ,'TSPLOCTSC030' ,'TSPLOCTSC090'
        // 			this.dsBldgSeList.filter("cdId == 'TSPLOCTSC010' || cdId == 'TSPLOCTSC020' || cdId == 'TSPLOCTSC070'");
        //
        // 			// 전체 조회를 위해 [선택] 추가
        // 			this.dsBldgSeList.insertRow(0);
        // 			this.dsBldgSeList.setColumn(0, "cdId", "");
        // 			this.dsBldgSeList.setColumn(0, "cdNm", "[건물구분]");

        			this.divForm.form.Div00.form.cmbPstnSe.set_index(0);

        			break;

        		case "comAplyKndSearch" : // 신청구분 조회
        			this.divForm.form.Div03.form.cboSrvcAplySe.set_index(0);

        			break;

        		case "_cfnBtnCrt_" : // 버튼 생성 callback
        			// 접수 || 담당자검토및승인
        			if(this.jobCd == "TAS10434" || this.jobCd == "TAS10435"){
        				this.rdoSrvcDmndCnYn_onitemchanged(this.divForm.form.Div02.form.rdoSrvcDmndCnYn);

        			}else if(this.jobCd == "TAS10433"){ // 신청서보완
        				var sClrId = this.dsCmmCmnctMst.getColumn(0, "clrId");
        				console.log("sClrId = " + sClrId);
        				if(this.gfnIsNull(sClrId)){ // 접수자ID가 없을때 담당자접수 에서 넘어온 자료
        					Array.from(this.btnDiv.form.components).forEach(oComp => {
        						if(oComp.id == "CTL00163"){
        							oComp.visible = false;

        						}else if(oComp.id == "CTL11002"){
        							oComp.visible = true;
        							console.log("CTL11002");

        						}
        					});

        				}else{
        					Array.from(this.btnDiv.form.components).forEach(oComp => {
        						if(oComp.id == "CTL00163"){
        							oComp.visible = true;
        							console.log("CTL00163");

        						}else if(oComp.id == "CTL11002"){
        							oComp.visible = false;

        						}
        					});
        				}
        			}

        			break;

        		case "saveCmnctUseAplcfmWrtTmprStrg" : // 임시저장, 신청

        			alert("저장 처리가 정상적으로 완료되었습니다");
        		    //this.close();
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
        	this.dsSearch.setColumn(0, "inqSeCd", "1"); // 1 : 신청, 2 : 해지

        	var strSvcId    = "selectCmnctUseAplcfmWrtInq";
        	var strSvcUrl   = "cmnctUse/selectCmnctUseAplcfmWrtInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsCmmCmnctMst=dsCmmCmnctMst dsGnrlTelSrvcAplyInfo=dsGnrlTelSrvcAplyInfo dsCnvyMttr=dsCnvyMttr dsAtfl=dsAtfl dsMst=dsMst";
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
        			          + " dsMst=dsMst:U"                                     // Master DS
         			          + " dsCmmCmnctMst=dsCmmCmnctMst:U"     		 // 통신사용신청마스타 DS
        					  + " dsGnrlTelSrvcAplyInfo=dsGnrlTelSrvcAplyInfo:U"   // 통신일반전화서비스신청 DS
        			          + " dsCnvyMttr=dsCnvyMttr"                           // 전달사항 DS
        			          + " dsAtfl=dsAtfl:U";                                   // 첨부파일 DS

        trace("@strSvcId==>" + strSvcId);
        trace("@vStrSvcUrl==>" + vStrSvcUrl);
        trace("@this.FV_DS_OTPT_WORK_FLOW_INFO==>" + this.FV_DS_OTPT_WORK_FLOW_INFO);
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

        	if(this.jobCd == "TAS10434"){ // 담당자접수
        	//alert("objVal11==>" + objVal);
        		if(objVal == "1"){ // 1 : 확인
        			/*
        			CTL00165	접수
        			CTL11001	보완요청
        			CTL11020	미처리종료
        			*/
        			Array.from(this.btnDiv.form.components).forEach(oComp => {
        				if(oComp.id == "CTL00165"){
        					oComp.visible = true;

        				}else{
        					oComp.visible = false;

        				}
        			});

        		}else if(objVal == "2"){ // 2 : 미처리종료
        			/*
        			CTL00165	접수
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
        	alert("objVal==>" + objVal);
        		if(objVal == "1"){ // 1 : 확인
        			/*
        			CTL00167	보완요청
        			CTL00169	승인
        			*/
        			Array.from(this.btnDiv.form.components).forEach(oComp => {
        				if(oComp.id == "CTL00169"){
        					oComp.visible = true;

        				}else if(oComp.id == "CTL00167"){
        					oComp.visible = false;

        				}
        			});

        		}else if(objVal == "2"){ // 2 : 미처리종료
        			/*
        			CTL00167	보완요청
        			CTL00169	승인
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
        	}

        	// 1 : 확인 일때 보완요청사유를 지워준다.
        	if(objVal == "1"){
        		// this.dsList.setColumn(0, "splmntDmndRsnCn", "");

        	}
        };

        this.divForm_Div00_cboRgn_onitemchanged = function(obj,e)
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

        	trace("dddd==>" + this.lv_cboRgnSe);
        	// 1일때만 초기화해줌.
        	if(this.lv_cboRgnSe == "1"){
        		this.divForm.form.Div00.form.cmbPstnSe.index = 0;
        		this.divForm.form.Div00.form.cmbPstnSe.readonly = false; //수기입력 위치구분2
        	}else{
        		this.divForm.form.Div00.form.cmbPstnSe.readonly = true; //수기입력 위치구분2
        	}
        };

        /**************************************************************************
         * @name : cboRgn_onitemclick
         * @description : 지역구분콤보 아이템 클릭 시
         ***************************************************************************/
        this.divForm_Div00_cboRgn_onitemclick = function(obj,e)
        {
        	this.lv_cboRgnSe = "1";
        };


        /**************************************************************************
         * @name :
         * @description : 서비스신청구분 - 일반전화서비스 선택시
         ***************************************************************************/
        //행추가
        this.divForm_Div04_btnGrdAdd_onclick = function(obj,e)
        {
        	var nRow = this.dsGnrlTelSrvcAplyInfo.addRow();
        	this.dsGnrlTelSrvcAplyInfo.setColumn(nRow, "rowSttsCd" , "I");
        	this.dsGnrlTelSrvcAplyInfo.setColumn(nRow, "hpeYmd" , "");

        };

        //행삭제
        this.divForm_Div04_btnGrdDel_onclick = function(obj,e)
        {
         	if(this.dsGnrlTelSrvcAplyInfo.findRow("chk", 1) != -1) {
         		this.gfnConfirmMsg( this.divForm.form.Div04.form.btnGrdDel.name
         		                  , "MSG_005"   // 삭제하시겠습니까?
         						  , function(id, val) {
         						        if(JSON.parse(val).result == "Y") {
        			                        this.dsGnrlTelSrvcAplyInfo.deleteMultiRows(this.dsGnrlTelSrvcAplyInfo.extractRows("chk == " + 1));
        // 									this.dsGnrlTelSrvcAplyInfo_oncolumnchanged();
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

        /**************************************************************************
         * @name :
         * @description : 서비스신청구분 항목 체인지 시
         ***************************************************************************/
        this.divForm_Div04_cmbSrvcAplySeCd_onitemchanged = function(obj,e)
        {
        	//alert("서비스신청구분 항목 체인지==>" + obj.value);

        	//일반전화서비스 그리드 행추가
        	this.divForm_Div04_btnGrdAdd_onclick();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onvscroll",this.form_onvscroll,this);
            this.divForm.form.Div00.form.cboRgn.addEventHandler("onitemchanged",this.divForm_Div00_cboRgn_onitemchanged,this);
            this.divForm.form.Div00.form.cboRgn.addEventHandler("onitemclick",this.divForm_Div00_cboRgn_onitemclick,this);
            this.divForm.form.Div02.form.grdBuilc.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div02.form.grdBuilc.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div03.form.TextArea00.addEventHandler("onchanged",this.divForm_Div03_TextArea00_onchanged,this);
            this.divForm.form.Div03.form.TextArea00_01.addEventHandler("onchanged",this.divForm_Div03_TextArea00_onchanged,this);
            this.divForm.form.Div04.form.cmbSrvcAplySeCd.addEventHandler("onitemchanged",this.divForm_Div04_cmbSrvcAplySeCd_onitemchanged,this);
            this.divForm.form.Div04.form.btnGrdAdd.addEventHandler("onclick",this.divForm_Div04_btnGrdAdd_onclick,this);
            this.divForm.form.Div04.form.btnGrdDel.addEventHandler("onclick",this.divForm_Div04_btnGrdDel_onclick,this);
            this.divForm.form.Div04.form.sta00_00_01_00_00_00_00.addEventHandler("onclick",this.divForm_div04_sta00_00_01_00_00_00_00_onclick,this);
            this.divForm.form.Div07.form.btn_file_1_01.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.Div07.form.btn_del_file_1_01.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div07.form.Grid00_01.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div07.form.Grid00_01.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div07.form.btn_file_1_01_00.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.Div07.form.btn_del_file_1_01_00.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div07.form.grdOpngCnfdocPath.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div07.form.grdOpngCnfdocPath.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsMain_onvaluechanged,this);
            this.dsMst.addEventHandler("onvaluechanged",this.dsMst_onvaluechanged,this);
            this.dsMst.addEventHandler("onload",this.dsMst_onload,this);
            this.dsAtfl.addEventHandler("onload",this.dsAtfl_onload,this);
        };
        this.loadIncludeScript("LIF052M00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
