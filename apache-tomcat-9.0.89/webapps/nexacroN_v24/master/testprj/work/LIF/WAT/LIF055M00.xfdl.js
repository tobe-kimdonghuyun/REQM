(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LIF055M00");
            this.set_titletext("신청서작성");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"inqSeCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWtspMst", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"bfrJobCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeNm\" type=\"STRING\" size=\"256\"/><Column id=\"endCd\" type=\"STRING\" size=\"256\"/><Column id=\"endNm\" type=\"STRING\" size=\"256\"/><Column id=\"docCd\" type=\"STRING\" size=\"256\"/><Column id=\"docNm\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyDt\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"actlEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrJobGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtPrcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstnSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"bldgSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"pstnSeNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstnInfoRnb\" type=\"STRING\" size=\"256\"/><Column id=\"clmCustCd\" type=\"STRING\" size=\"256\"/><Column id=\"clmZip\" type=\"STRING\" size=\"256\"/><Column id=\"clmAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmDtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntHwrtInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptAplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptCtrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptWtspUsePstnCn\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtHwrtInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtChcYn\" type=\"STRING\" size=\"256\"/><Column id=\"gageInstlYn\" type=\"STRING\" size=\"256\"/><Column id=\"mthwYn\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnRspnsYn\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnRspnsDt\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclNm1\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclNm2\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclNm3\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnExmnCn1\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnExmnCn2\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnExmnCn3\" type=\"STRING\" size=\"256\"/><Column id=\"bscInfoRegNo\" type=\"STRING\" size=\"256\"/><Column id=\"rtpyrClmInfoRegNo\" type=\"STRING\" size=\"256\"/><Column id=\"rprsvNm\" type=\"STRING\" size=\"256\"/><Column id=\"rprsvNm2\" type=\"STRING\" size=\"256\"/><Column id=\"agreYmd\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptClmAddr\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptClmDtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptClmZip\" type=\"STRING\" size=\"256\"/><Column id=\"mvnSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"pipNeedYn\" type=\"STRING\" size=\"256\"/><Column id=\"thwhrYn\" type=\"STRING\" size=\"256\"/><Column id=\"erpInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"cnvyMttrCn\" type=\"STRING\" size=\"256\"/><Column id=\"prvcClctEsntlAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"prvcClctChcAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"ctnMttrAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"wtspUtztnTrmsAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"grndsVstDsctn\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileNo\" type=\"STRING\" size=\"256\"/><Column id=\"atchSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"bscInfoRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzcndNm\" type=\"STRING\" size=\"256\"/><Column id=\"tpbizNm\" type=\"STRING\" size=\"256\"/><Column id=\"custZip\" type=\"STRING\" size=\"256\"/><Column id=\"custAddr\" type=\"STRING\" size=\"256\"/><Column id=\"custDtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"rprsTelno\" type=\"STRING\" size=\"256\"/><Column id=\"crno\" type=\"STRING\" size=\"256\"/><Column id=\"clmMtdCd\" type=\"STRING\" size=\"256\"/><Column id=\"etxivEmlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"etxivEmlAddr1\" type=\"STRING\" size=\"256\"/><Column id=\"etxivEmlAddr2\" type=\"STRING\" size=\"256\"/><Column id=\"acuntEml\" type=\"STRING\" size=\"256\"/><Column id=\"acuntEml1\" type=\"STRING\" size=\"256\"/><Column id=\"acuntEml2\" type=\"STRING\" size=\"256\"/><Column id=\"payPicSmYn\" type=\"STRING\" size=\"256\"/><Column id=\"payPicDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"payPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"payPicTelno\" type=\"STRING\" size=\"256\"/><Column id=\"payPicMblTelno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMst", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeNm\" type=\"STRING\" size=\"256\"/><Column id=\"taskCd\" type=\"STRING\" size=\"256\"/><Column id=\"nextTaskCd\" type=\"STRING\" size=\"256\"/><Column id=\"pstnSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyDt\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"endCd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstnInfoRnb\" type=\"STRING\" size=\"256\"/><Column id=\"clmZip\" type=\"STRING\" size=\"256\"/><Column id=\"clmAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmDtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmWholAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmCustCd\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"rcptDt\" type=\"STRING\" size=\"256\"/><Column id=\"clrId\" type=\"STRING\" size=\"256\"/><Column id=\"dptyRegYn\" type=\"STRING\" size=\"256\"/><Column id=\"dmndDt\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptAplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptCtrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptPstnInfoCn\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtHwrtInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntHwrtInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtMvmnRgnPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"docCd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtChcYn\" type=\"STRING\" size=\"256\"/><Column id=\"wholJobBgngDt\" type=\"STRING\" size=\"256\"/><Column id=\"wholJobEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobNm\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobRsnCn\" type=\"STRING\" size=\"256\"/><Column id=\"bldgSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoCtrtrNm\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoPicCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobFldCd\" type=\"STRING\" size=\"256\"/><Column id=\"arptCstrnPicId\" type=\"STRING\" size=\"256\"/><Column id=\"lbsvcPbcprtPicId\" type=\"STRING\" size=\"256\"/><Column id=\"basctAplcfmInfoId\" type=\"STRING\" size=\"256\"/><Column id=\"lbsvcTaskAgtRlvtYn\" type=\"STRING\" size=\"256\"/><Column id=\"lbsvcTaskMdtrId\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptRnb\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/><Column id=\"cntnIstr\" type=\"STRING\" size=\"256\"/><Column id=\"cntnBrwsr\" type=\"STRING\" size=\"256\"/><Column id=\"cntnVer\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"docCd\"/><Col id=\"aplySeCd\"/><Col id=\"taskCd\"/><Col id=\"aplyNo\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCnvyMttr", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/><Column id=\"cnvyMttrCn\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtfl", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplcfmNo\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"jobSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobTycoSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"atchSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"atchDtlSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"bsnsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"workId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtn\" type=\"STRING\" size=\"256\"/><Column id=\"strgFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTerm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtchRslt", this);
            obj._setContents("<ColumnInfo><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"payPicPrvcClctAgreFile_fullName\" type=\"STRING\" size=\"256\"/><Column id=\"payPicPrvcClctAgreFile_orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"payPicPrvcClctAgreFile_fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"payPicPrvcClctAgreFile_colId\" type=\"STRING\" size=\"256\"/><Column id=\"pblcnPrdctSpcfatFile_fullName\" type=\"STRING\" size=\"256\"/><Column id=\"pblcnPrdctSpcfatFile_orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"pblcnPrdctSpcfatFile_fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"pblcnPrdctSpcfatFile_colId\" type=\"STRING\" size=\"256\"/><Column id=\"insrncJoinPrdocFile_fullName\" type=\"STRING\" size=\"256\"/><Column id=\"insrncJoinPrdocFile_orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"insrncJoinPrdocFile_fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"insrncJoinPrdocFile_colId\" type=\"STRING\" size=\"256\"/><Column id=\"elcttrFrtPhotoFile_fullName\" type=\"STRING\" size=\"256\"/><Column id=\"elcttrFrtPhotoFile_orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"elcttrFrtPhotoFile_fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"elcttrFrtPhotoFile_colId\" type=\"STRING\" size=\"256\"/><Column id=\"elcttrRarPhotoFile_fullName\" type=\"STRING\" size=\"256\"/><Column id=\"elcttrRarPhotoFile_orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"elcttrRarPhotoFile_fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"elcttrRarPhotoFile_colId\" type=\"STRING\" size=\"256\"/><Column id=\"elcttrFlkPhotoFile_fullName\" type=\"STRING\" size=\"256\"/><Column id=\"elcttrFlkPhotoFile_orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"elcttrFlkPhotoFile_fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"elcttrFlkPhotoFile_colId\" type=\"STRING\" size=\"256\"/><Column id=\"prtcZoneAdpsFrtsdFile_fullName\" type=\"STRING\" size=\"256\"/><Column id=\"prtcZoneAdpsFrtsdFile_orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"prtcZoneAdpsFrtsdFile_fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"prtcZoneAdpsFrtsdFile_colId\" type=\"STRING\" size=\"256\"/><Column id=\"prtcZoneAdpsBaksdFile_fullName\" type=\"STRING\" size=\"256\"/><Column id=\"prtcZoneAdpsBaksdFile_orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"prtcZoneAdpsBaksdFile_fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"prtcZoneAdpsBaksdFile_colId\" type=\"STRING\" size=\"256\"/><Column id=\"carLcnDpctFile_fullName\" type=\"STRING\" size=\"256\"/><Column id=\"carLcnDpctFile_orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"carLcnDpctFile_fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"carLcnDpctFile_colId\" type=\"STRING\" size=\"256\"/><Column id=\"bizcrdPhotoFile_fullName\" type=\"STRING\" size=\"256\"/><Column id=\"bizcrdPhotoFile_orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizcrdPhotoFile_fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"bizcrdPhotoFile_colId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtflDown", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplcfmNo\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"jobSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobTycoSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"atchSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"atchDtlSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"bsnsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"workId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtn\" type=\"STRING\" size=\"256\"/><Column id=\"strgFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTerm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDgstfnExmn", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnTtl\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnCn\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnScr\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnExmnYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHstryInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"bfrJobCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobNm\" type=\"STRING\" size=\"256\"/><Column id=\"cpstArtclCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyKndCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyKndNm\" type=\"STRING\" size=\"256\"/><Column id=\"endCd\" type=\"STRING\" size=\"256\"/><Column id=\"endNm\" type=\"STRING\" size=\"256\"/><Column id=\"docCd\" type=\"STRING\" size=\"256\"/><Column id=\"docNm\" type=\"STRING\" size=\"256\"/><Column id=\"srvcCd\" type=\"STRING\" size=\"256\"/><Column id=\"srvcNm\" type=\"STRING\" size=\"256\"/><Column id=\"srvcAplyInfoIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"rcptMdaCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsDt\" type=\"STRING\" size=\"256\"/><Column id=\"actlEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"actlBgngDt\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/><Column id=\"aplyDt\" type=\"STRING\" size=\"256\"/><Column id=\"rcptDt\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"mdfcnDt\" type=\"STRING\" size=\"256\"/><Column id=\"dmndPrdBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"dmndPrdEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"acrdCmptnDt\" type=\"STRING\" size=\"256\"/><Column id=\"planBgngDt\" type=\"STRING\" size=\"256\"/><Column id=\"planEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"cmptnHpeDt\" type=\"STRING\" size=\"256\"/><Column id=\"custTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"custTypeNm\" type=\"STRING\" size=\"256\"/><Column id=\"bldgSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"bldgSeNm\" type=\"STRING\" size=\"256\"/><Column id=\"zoneSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"zoneSeNm\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstnInfoRnb\" type=\"STRING\" size=\"256\"/><Column id=\"pstnInfoRnbNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyTtlNm\" type=\"STRING\" size=\"256\"/><Column id=\"actnPlanCn\" type=\"STRING\" size=\"256\"/><Column id=\"srvcDmndCnIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"srvcDmndCn\" type=\"STRING\" size=\"256\"/><Column id=\"srvcAplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"srvcAplySeNm\" type=\"STRING\" size=\"256\"/><Column id=\"splmntDmndRsnCn\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtChcYn\" type=\"STRING\" size=\"256\"/><Column id=\"prvcClctEsntlAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"prvcClctEsntlAgreYn2\" type=\"STRING\" size=\"256\"/><Column id=\"wtohAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"dptyRegYn\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtHwrtInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"prvcClctChcAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntHwrtInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptAplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptPstnInfoCn\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptCtrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrNm\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrTelno\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrMblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"ownrId\" type=\"STRING\" size=\"256\"/><Column id=\"ownrNm\" type=\"STRING\" size=\"256\"/><Column id=\"ownrInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"ownrInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"ownrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"ownrDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"ownrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"ownrJobGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrJobGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrJobGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtPrcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtPrcrJobGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"clrId\" type=\"STRING\" size=\"256\"/><Column id=\"clrNm\" type=\"STRING\" size=\"256\"/><Column id=\"mdfrId\" type=\"STRING\" size=\"256\"/><Column id=\"mdfrNm\" type=\"STRING\" size=\"256\"/><Column id=\"payPicSmYn\" type=\"STRING\" size=\"256\"/><Column id=\"payPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"payPicTelno\" type=\"STRING\" size=\"256\"/><Column id=\"payPicMblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"clmMtdCd\" type=\"STRING\" size=\"256\"/><Column id=\"clmCustCd\" type=\"STRING\" size=\"256\"/><Column id=\"clmZip\" type=\"STRING\" size=\"256\"/><Column id=\"clmAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmDtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmEml\" type=\"STRING\" size=\"256\"/><Column id=\"clmEml1\" type=\"STRING\" size=\"256\"/><Column id=\"clmEml2\" type=\"STRING\" size=\"256\"/><Column id=\"txivEml\" type=\"STRING\" size=\"256\"/><Column id=\"txivEml1\" type=\"STRING\" size=\"256\"/><Column id=\"txivEml2\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnRspnsYn\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnRspnsDt\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclNm1\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclNm2\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclNm3\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnExmnCn1\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnExmnCn2\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnExmnCn3\" type=\"STRING\" size=\"256\"/><Column id=\"cnvyMttrCn\" type=\"STRING\" size=\"256\"/><Column id=\"prtcZoneAdpsDpctFrtsdPath\" type=\"STRING\" size=\"256\"/><Column id=\"prtcZoneAdpsDpctBaksdPath\" type=\"STRING\" size=\"256\"/><Column id=\"carDrvnLcnDpctPath\" type=\"STRING\" size=\"256\"/><Column id=\"bizcrdPhotoFilePath\" type=\"STRING\" size=\"256\"/><Column id=\"fbctnDcmntPblcnPrdctSpcfatPath\" type=\"STRING\" size=\"256\"/><Column id=\"insrncJoinPrdocPath\" type=\"STRING\" size=\"256\"/><Column id=\"elcttrFrtPhotoPath\" type=\"STRING\" size=\"256\"/><Column id=\"elcttrRarPhotoPath\" type=\"STRING\" size=\"256\"/><Column id=\"elcttrFlkPhotoPath\" type=\"STRING\" size=\"256\"/><Column id=\"payPicPrvcClctUtztnWtcsPath\" type=\"STRING\" size=\"256\"/><Column id=\"regNo\" type=\"STRING\" size=\"256\"/><Column id=\"prmsnNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTspLocCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBldgSeList", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPstnSe", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEmlList", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWtspUseList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"wtspUseListNo\" type=\"STRING\" size=\"256\"/><Column id=\"wtspAplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"wtspSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"wtspSeNm\" type=\"STRING\" size=\"256\"/><Column id=\"wtspPrgrsSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"wtspPrgrsSttsNm\" type=\"STRING\" size=\"256\"/><Column id=\"rmtqtUnit\" type=\"STRING\" size=\"256\"/><Column id=\"gageMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"rnb\" type=\"STRING\" size=\"256\"/><Column id=\"usePrnmntYmd\" type=\"STRING\" size=\"256\"/><Column id=\"rmtqtIdntyYmd\" type=\"STRING\" size=\"256\"/><Column id=\"cncltnPrnmntYmd\" type=\"STRING\" size=\"256\"/><Column id=\"cncltnRmtqtIdntyYmd\" type=\"STRING\" size=\"256\"/><Column id=\"rmtqt\" type=\"STRING\" size=\"256\"/><Column id=\"cncltnRmtqt\" type=\"STRING\" size=\"256\"/><Column id=\"gageFrmPrdocAtflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"rcgnCnfdocAtflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"cpocscAtflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"mdfcnDt\" type=\"STRING\" size=\"256\"/><Column id=\"mdfrId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWaterType", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","divTitle:10",null,"6720.99","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickFrBg");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Button("btnMinTitle","460","-55","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("29");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit00","955","18","100%","58",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("26");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staSubTitle02_00_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_03\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_03","0","-53","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("27");
            obj.set_text("서비스 흐름 및 작업방법 안내(타이틀미정)");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_03","505","-53","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("28");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinTitle\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divInfoGuide","1660.00","262","100%","300",null,null,null,null,"300",null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_text("서비스 흐름 및 작업방법 안내");
            obj.set_cssclass("div_WF_InfoGuide");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divDgstfnExmn","1660.00","262","100%","920",null,null,null,null,"920",null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_fittocontents("height");
            obj.set_rtl("");
            obj.set_url("work::COM/util/dgstfnExmn/dgstfnExmn.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit01","1630","674","100%","66",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("9");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div01","0","0","100%","577",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staAplyNo","0","-466","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("6");
            obj.set_text("신청번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtAplyNo","0","-421","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00","20","-466","100%","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staAplyNo\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAplyNo\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00","-5","25","100%","97",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("4");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
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

            obj = new Static("staAplySe","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("신청구분");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtAplySe","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staAplySe\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAplySe\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staCtrtChcYn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("8");
            obj.set_text("계약선택여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Radio("rdoCtrtChcYn","200.00","328","393","49.37",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div01_form_rdoCtrtChcYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div01_form_rdoCtrtChcYn_innerdataset", obj);
            divForm_form_Div01_form_rdoCtrtChcYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">계약선택</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">수기입력</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div01_form_rdoCtrtChcYn_innerdataset);
            obj.set_text("계약선택");
            obj.set_value("1");
            obj.set_index("0");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCtrtChcYn\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoCtrtChcYn\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("11");
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

            obj = new Static("staCtrtNo","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("12");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtCtrtNo","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("14");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCtrtNo\"/><PanelItem id=\"PanelItem02\" componentid=\"edtCtrtNo\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staCtrtNoHwrtInpt","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("15");
            obj.set_text("계약번호(수기입력)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtCtrtNoHwrtInpt","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("16");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_02","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("17");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCtrtNoHwrtInpt\"/><PanelItem id=\"PanelItem02\" componentid=\"edtCtrtNoHwrtInpt\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staCtrtNm","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("18");
            obj.set_text("계약명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Div("divEdtPop00","280","274","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("19");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtCtrtNm","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.Div01.form.divEdtPop00.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            this.divForm.form.Div01.form.divEdtPop00.addChild(obj.name, obj);

            obj = new Button("btnCtrt","edtCtrtNm:-40","0","40","40",null,null,null,null,null,null,this.divForm.form.Div01.form.divEdtPop00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.divForm.form.Div01.form.divEdtPop00.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("20");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCtrtNm\"/><PanelItem id=\"PanelItem02\" componentid=\"divEdtPop00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel03","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("21");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel01_01_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staAplcntNm","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("22");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtAplcntNm","42","47","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("23");
            obj.set_readonly("true");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("24");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staAplcntNm\"/><PanelItem id=\"PanelItem02\" componentid=\"edtAplcntNm\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staAplcntMblTelno","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("25");
            obj.set_text("휴대폰 번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtAplcntMblTelno","0","46","100.00%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("26");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("27");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staAplcntMblTelno\"/><PanelItem id=\"PanelItem02\" componentid=\"edtAplcntMblTelno\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("28");
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

            obj = new Static("staCtrtInstNm","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("29");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtCtrtInstNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("30");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00","10.00","98","100%","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("31");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCtrtInstNm\"/><PanelItem id=\"PanelItem01\" componentid=\"edtCtrtInstNm\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel04","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("32");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_00_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("sub_tit02","1630","674","100%","66",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("13");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div02","0","Div01:376.428","100%","285",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Edit("edtWtspUsePstn","1028","121","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("12");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staWtspUsePstn","1028","76","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("11");
            obj.set_text("수도사용위치(수기입력)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtRnb","1028","26","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staRnb","1028","-20","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("7");
            obj.set_text("위치정보(룸번호)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Combo("cboRgn","1028","-70","300","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("1");
            obj.set_flexgrow("1");
            obj.set_innerdataset("dsTspLocCd");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("제1교통센터");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Combo("cboBldg","1360","-70","300","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("2");
            obj.set_flexgrow("1");
            obj.set_innerdataset("dsBldgSeList");
            obj.set_datacolumn("cdNm");
            obj.set_codecolumn("cdId");
            obj.set_text("B동");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Combo("cboPstn","1693","-70","300","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("3");
            obj.set_flexgrow("1");
            obj.set_innerdataset("dsPstnSe");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("B1-3206, B1-3207");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","1028","-70","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("4");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"cboRgn\"/><PanelItem id=\"PanelItem01\" componentid=\"cboBldg\"/><PanelItem id=\"PanelItem02\" componentid=\"cboPstn\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staPstnSe","1028","-116","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("0");
            obj.set_text("위치구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_01","1028","-116","100%","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPstnSe\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel05","1008","-116","100.00%","95",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("6");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_01_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_01","1028","-20","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRnb\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRnb\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel06","1008","-20","100.00%","95",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("10");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel07_00","1028","76","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("13");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staWtspUsePstn\"/><PanelItem id=\"PanelItem01\" componentid=\"edtWtspUsePstn\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel07","1008","76","100.00%","95",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("14");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel07_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("sub_tit03","1630","674","100%","66",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("17");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div03","0","Div02:422.856","100%","702",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staCustInstNm","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("0");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edtCustInstNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCustInstNm\"/><PanelItem id=\"PanelItem01\" componentid=\"edtCustInstNm\"/></Contents>");
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

            obj = new Static("staRprsvNm","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("4");
            obj.set_text("대표자성명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edtRprsvNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRprsvNm\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRprsvNm\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staRprsTelno","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("7");
            obj.set_text("대표전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edtRprsTelno","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRprsTelno\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRprsTelno\"/></Contents>");
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

            obj = new Static("staBrno","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("11");
            obj.set_text("사업자 등록번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edtBrno","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_02","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("13");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staBrno\"/><PanelItem id=\"PanelItem01\" componentid=\"edtBrno\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staCrno","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("14");
            obj.set_text("법인등록번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edtCrno","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCrno\"/><PanelItem id=\"PanelItem01\" componentid=\"edtCrno\"/></Contents>");
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

            obj = new Static("staTpbiz","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("18");
            obj.set_text("업종");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edtTpbiz","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_03","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("20");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTpbiz\"/><PanelItem id=\"PanelItem01\" componentid=\"edtTpbiz\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staBzstat","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("21");
            obj.set_text("업태");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edtBzstat","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("22");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_02","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("23");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staBzstat\"/><PanelItem id=\"PanelItem01\" componentid=\"edtBzstat\"/></Contents>");
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

            obj = new Panel("Panel00_03_00","-65","350","100.00%","167",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("34");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_01_03\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staBuilcAddr","0","-1340","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("36");
            obj.set_text("사업자등록주소/우편번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_03","20.00","-1340","100%","156",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("35");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staBuilcAddr\"/><PanelItem id=\"PanelItem01\" componentid=\"panAddress00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtBuilcAddrDtl\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edtBuilcAddrDtl","0","-1230","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("40");
            obj.set_displaynulltext("상세주소");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edtBuilcAddr","327","-1340","305","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("39");
            obj.set_readonly("true");
            obj.set_flexgrow("2");
            obj.set_displaynulltext("주소");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Div("divEdtPop2","0","-1340","150","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("38");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edtBuilcZip","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.Div03.form.divEdtPop2.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            obj.set_displaynulltext("우편번호 검색");
            this.divForm.form.Div03.form.divEdtPop2.addChild(obj.name, obj);

            obj = new Button("btnBuilcAddr","edtBuilcZip:-40","0","40","40",null,null,null,null,null,null,this.divForm.form.Div03.form.divEdtPop2.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.divForm.form.Div03.form.divEdtPop2.addChild(obj.name, obj);

            obj = new Panel("panAddress00","0","-1285","100%","45",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("37");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divEdtPop2\"/><PanelItem id=\"PanelItem01\" componentid=\"edtBuilcAddr\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staBuilc","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("25");
            obj.set_text("사업자등록증");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btnBuilcSample","813","76","120","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("26");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btnBuilcFile","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("27");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnFile","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("28");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnBuilcSample\"/><PanelItem id=\"PanelItem00\" componentid=\"btnBuilcFile\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panTitle","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("29");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staBuilc\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Grid("grdBuilc","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("30");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_01","20","20","100%","30",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("31");
            obj.set_text("JPG,PNG,BMP,PDF만 첨부가능");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","192","1038","100.00%","80",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("32");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grdBuilc\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00_00_00_01\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFile","0","42","100.00%","151",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("33");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel01_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("sub_tit04","1630","674","100%","66",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("21");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_02\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div04","0","30","100%","1260",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel04","0","95","100%","80",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("57");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staPrvcEsntlClctAgreYn00\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoPrvcChcClctAgreYn\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staPayPicSmYn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("0");
            obj.set_text("납부담당자 동일여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("1");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Panel02\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoPayPicSmYn\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel02","187","7","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("44");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPayPicSmYn\"/><PanelItem id=\"PanelItem02\" componentid=\"btnClmInfo\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("2");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staPayPicNm","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("3");
            obj.set_text("납부담당자 성명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edtPayPicNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("4");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPayPicNm\"/><PanelItem id=\"PanelItem01\" componentid=\"edtPayPicNm\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staPayPicDeptNm","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("6");
            obj.set_text("납부담당자 부서");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edtPayPicDeptNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("7");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPayPicDeptNm\"/><PanelItem id=\"PanelItem01\" componentid=\"edtPayPicDeptNm\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("9");
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

            obj = new Static("staPayPicTelno","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_text("납부담당자 전화번호");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edtPayPicTelno","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("11");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_02","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPayPicTelno\"/><PanelItem id=\"PanelItem01\" componentid=\"edtPayPicTelno\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staPayPicMblTelno","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_text("납부담당자 휴대전화번호");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edtPayPicMblTelno","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("14");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPayPicMblTelno\"/><PanelItem id=\"PanelItem01\" componentid=\"edtPayPicMblTelno\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("16");
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

            obj = new Static("staClmCustNo","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("17");
            obj.set_text("청구고객번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edtClmCustNo","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("18");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_03","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("19");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staClmCustNo\"/><PanelItem id=\"PanelItem01\" componentid=\"edtClmCustNo\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_02","10.00","98","305","0",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("20");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_03","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("21");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_03\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_01_02\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Radio("rdoPayPicSmYn","200.00","328","393","49.37",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("22");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div04_form_rdoPayPicSmYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div04_form_rdoPayPicSmYn_innerdataset", obj);
            divForm_form_Div04_form_rdoPayPicSmYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">신청자정보와 동일</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">신청자정보와 동일하지 않음</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div04_form_rdoPayPicSmYn_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_03_01","0","60","100.00%","183",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("25");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_01_02_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel03\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staClmMtd","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("23");
            obj.set_text("청구방식");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_02_00","10.00","98","305","110",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("24");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staClmMtd\"/><PanelItem id=\"PanelItem03\" componentid=\"rdoClmMtd\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Radio("rdoClmMtd","200.00","328","100%","80",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("26");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("horizontal");
            obj.set_fittocontents("width");
            var divForm_form_Div04_form_rdoClmMtd_innerdataset = new nexacro.NormalDataset("divForm_form_Div04_form_rdoClmMtd_innerdataset", obj);
            divForm_form_Div04_form_rdoClmMtd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">이메일</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">우편(등기)</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div04_form_rdoClmMtd_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staClmAddr","0.00","0","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("27");
            obj.set_text("청구지주소/우편번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Div("divEdtPop","780.00","635","150","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("28");
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

            obj = new Button("btnClmAddr","edtClmZip:-40","0","40","40",null,null,null,null,null,null,this.divForm.form.Div04.form.divEdtPop.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.divForm.form.Div04.form.divEdtPop.addChild(obj.name, obj);

            obj = new Edit("edtClmAddr","360","637","305","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("29");
            obj.set_readonly("true");
            obj.set_flexgrow("2");
            obj.set_displaynulltext("주소");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panAddress","200","641","100%","45",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("30");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divEdtPop\"/><PanelItem id=\"PanelItem02\" componentid=\"edtClmAddr\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edtClmAddrDtl","0.00","46","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("31");
            obj.set_displaynulltext("상세주소");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01","20.00","0","980","156",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("32");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staClmAddr\"/><PanelItem id=\"PanelItem03\" componentid=\"panAddress\"/><PanelItem id=\"PanelItem01\" componentid=\"edtClmAddrDtl\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_03_00","0","60","100.00%","166",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("33");
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

            obj = new Static("staPrvcClctAgre","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("34");
            obj.set_text("개인정보 수집·이용 안내");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_04","10.00","98","100%","105",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("35");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"sta00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_03_00_00_00","10.00","98","100%","161",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("36");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("10");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPrvcClctAgre\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel00_00_04\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel09","0","60","100.00%","212",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("37");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_03_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staPrvcEsntlClctAgreYn","10","98","200","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("38");
            obj.set_text("개인정보 수집 (필수) 동의여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new CheckBox("chkPrvcEsntlClctAgreYn","200.00","128","150","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("39");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_value("0");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01","41","937","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("40");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("10");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPrvcEsntlClctAgreYn\"/><PanelItem id=\"PanelItem02\" componentid=\"chkPrvcEsntlClctAgreYn\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_10","10.00","98","100%","98",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("41");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"sta00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel10","0","60","100.00%","164",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("42");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_10\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel04\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staPrvcEsntlClctAgreYn00","15","1036","200","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("58");
            obj.set_text("개인정보 수집(선택) 동의여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00","-235","870","100%","98",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("56");
            obj.set_text("개인정보(선택정보) 사용에 관한 안내\r\n선택항목에 해당하는 정보를 입력하지 않으셔도 서비스 이용에는 제한이 없습니다.\r\n수집하는 개인정보의 선택항목 외 모든 내용은 필수항목에서 안내된 내용과 동일합니다.\r\n○수집하는 개인정보의 선택항목\r\n입주자서비스포털 인터넷청구시스템 청구서용 이메일주소, 전자세금계산서용 이메일주소(단, 청구방식 이메일 선택시 \"청구서용 이메일주소\" 필수)");
            obj.set_cssclass("sta_WF_Des004");
            obj.set_fittocontents("height");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Radio("rdoPrvcChcClctAgreYn","200.00","328","490","31",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("43");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div04_form_rdoPrvcChcClctAgreYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div04_form_rdoPrvcChcClctAgreYn_innerdataset", obj);
            divForm_form_Div04_form_rdoPrvcChcClctAgreYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">동의함</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">동의하지 않음(동의하지 않아도 서비스신청 가능합니다.</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div04_form_rdoPrvcChcClctAgreYn_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Button("btnClmInfo","858.00","753","120","34",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("45");
            obj.set_text("청구정보찾기");
            obj.set_cssclass("btn_WF_Small");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            obj.set_fittocontents("width");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Button("btnPayPicPrvcClctUtztnWtcsSample","64.00","0","190","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("46");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_FileDw02");
            obj.set_fittocontents("width");
            obj.set_enable("true");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staPayPicPrvcClctUtztnWtcs","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("47");
            obj.set_text("납부담당자 개인정보 수집이용동의서");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Button("btnPayPicPrvcClctUtztnWtcsFile","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("48");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panBtnFile","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("49");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnPayPicPrvcClctUtztnWtcsSample\"/><PanelItem id=\"PanelItem00\" componentid=\"btnPayPicPrvcClctUtztnWtcsFile\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panTitle","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("50");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPayPicPrvcClctUtztnWtcs\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Grid("grdPayPicPrvcClctUtztnWtcs","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("51");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_01","20","20","100%","30",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("52");
            obj.set_text("JPG,PNG,BMP,PDF만 첨부가능");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","192","1038","100.00%","80",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("53");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grdPayPicPrvcClctUtztnWtcs\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00_00_00_01\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panFile","0","42","100.00%","151",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("54");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel01_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00","20","20","100%","149",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("55");
            obj.set_text("1. 개인정보의 수집ㆍ이용 목적\r\n  인계인수 신청 시 작성건의 접수와 처리를 위해 개인정보를 수집목적에 필요한 최소한의 범위 내에서 수집하고 있습니다.\r\n2. 수집하려는 개인정보의 항목\r\n  필수항목 : 총괄책임자 및 시설관리책임자 성명, 총괄책임자 및 시설관리책임자 휴대폰번호\r\n3. 개인정보의 보유 및 이용 기간\r\n  계약종료 후 3년, 회원탈퇴 시까지\r\n4. 동의를 거부할 권리와 거부에 따른 불이익 내용\r\n귀하는 개인정보 수집에 거부할 권리가 있으며, 필수항목 수집을 거부할 경우 인계인수 승인요청서 작성건의 신청을 할 수 없습니다.");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Des004");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staAcuntEmlAddr","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("59");
            obj.set_text("청구서용 이메일");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edtAcuntEmlAddr1","10.00","158","30%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("60");
            obj.set_readonly("false");
            obj.set_displaynulltext("이메일 주소 입력");
            obj.set_flexgrow("1");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("Static03","507","1122","14","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("61");
            obj.set_text("@");
            obj.set_fittocontents("width");
            obj.set_textAlign("center");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edtAcuntEmlAddr2","10.00","158","30%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("62");
            obj.set_readonly("false");
            obj.set_displaynulltext("이메일 주소 입력");
            obj.set_flexgrow("1");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Combo("cboAcuntEmlAddr","200.00","128","30%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("63");
            obj.set_innerdataset("dsEmlList");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panEmail","386","1172","100%","50",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("64");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"edtAcuntEmlAddr1\"/><PanelItem id=\"PanelItem03\" componentid=\"Static03\"/><PanelItem id=\"PanelItem02\" componentid=\"edtAcuntEmlAddr2\"/><PanelItem id=\"PanelItem04\" componentid=\"cboAcuntEmlAddr\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("pan02_02_00","10.00","98","100%","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("65");
            obj.set_type("vertical");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staAcuntEmlAddr\"/><PanelItem id=\"PanelItem03\" componentid=\"panEmail\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staTxivEmlAddr","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("66");
            obj.set_text("전자세금계산서용 이메일");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edtTxivEmlAddr1","10.00","158","30%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("67");
            obj.set_readonly("false");
            obj.set_displaynulltext("이메일 주소 입력");
            obj.set_flexgrow("1");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("Static03_00","507","1122","14","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("68");
            obj.set_text("@");
            obj.set_fittocontents("width");
            obj.set_textAlign("center");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edtTxivEmlAddr2","10.00","158","30%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("69");
            obj.set_readonly("false");
            obj.set_displaynulltext("이메일 주소 입력");
            obj.set_flexgrow("1");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Combo("cboTxivEmlAddr","200.00","128","30%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("70");
            obj.set_innerdataset("dsEmlList");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panEmail00","386","1172","100%","50",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("71");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"edtTxivEmlAddr1\"/><PanelItem id=\"PanelItem03\" componentid=\"Static03_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtTxivEmlAddr2\"/><PanelItem id=\"PanelItem04\" componentid=\"cboTxivEmlAddr\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("pan02_02_00_00","10.00","98","100%","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("72");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTxivEmlAddr\"/><PanelItem id=\"PanelItem03\" componentid=\"panEmail00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel03","551","1140","300","172",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("73");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan02_02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan02_02_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("sub_tit05","1630","674","100%","66",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("25");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_02_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div05","0","30","100%","2449.99",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staGageFrmPrdoc","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("0");
            obj.set_text("계량기형식증명서 및 검정확인서는 계량기 구매처에서 발급 가능");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","10.00","98","970","86",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("1");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staGageFrmPrdoc\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel06\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","60","100.00%","191",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("2");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel06_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("Static02","997","65","96.04%","54",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("6");
            obj.set_text("- 열사용시설준공점검필증은 중온수/급탕신청시에만 해당\r\n- 발급처:인천공항에너지 시설부 열배관팀 032-450-0668\r\n");
            obj.set_verticalAlign("middle");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("btnRcgnCnfdocSample","234","50","200","34",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("5");
            obj.set_text("검정확인서 (샘플)");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("btnGageFrmPrdocSample","32","51","200","34",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("4");
            obj.set_text("계량기형식증명서(샘플)");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel06","37","50","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("20");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnGageFrmPrdocSample\"/><PanelItem id=\"PanelItem02\" componentid=\"btnRcgnCnfdocSample\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("btnFcltCpocscSample","32","51","230","34",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("8");
            obj.set_text("열사용시설준공점검필증 (샘플)");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel06_00","778","102","96.04%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("7");
            obj.set_horizontalgap("20");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnFcltCpocscSample\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","413","156","45","34",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("68");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panGrdBtn","-70","156","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("69");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 20px 0px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnGrdAdd\"/><PanelItem id=\"PanelItem01\" componentid=\"btnGrdDel\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("btnGrdAdd","356","156","47","34",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("67");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Div("divGrd","0","30","100%","400",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("9");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Grid("grdCtrtInfoList","0","0","100.00%","360",null,null,null,null,null,null,this.divForm.form.Div05.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsWtspUseList");
            obj.set_autofittype("none");
            obj.getSetter("uFunction").set("checkbox");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"59\"/><Column size=\"290\"/><Column size=\"320\"/><Column size=\"320\"/><Column size=\"370\"/><Column size=\"300\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"수도구분\"/><Cell col=\"2\" text=\"계량기형식증명서*\"/><Cell col=\"3\" text=\"검정확인서*\"/><Cell col=\"4\" text=\"열사용시설준공&#13;&#10;점검필증(중온수신청시필수)\"/><Cell col=\"5\" text=\"사용예정일*\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:wtspSeCd\" displaytype=\"combotext\" textAlign=\"center\" edittype=\"combo\" combodataset=\"dsWaterType\" combocodecol=\"cdId\" combodatacol=\"cdNm\"/><Cell col=\"2\" text=\"bind:ctrtNm\" displaytype=\"text\" textAlign=\"center\" tooltiptext=\"bind:ctrtNm\"/><Cell col=\"3\" text=\"bind:계약상태\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:ctrtTypeNm\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:usePrnmntYmd\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" edittype=\"date\" cssclass=\"CellEnd\"/></Band></Format><Format id=\"default2\"><Columns><Column size=\"59\"/><Column size=\"190\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"250\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"수도구분\"/><Cell col=\"2\" text=\"계량기형식증명서*\"/><Cell col=\"3\" text=\"검정확인서*\"/><Cell col=\"4\" text=\"열사용시설준공&#13;&#10;점검필증(중온수신청시필수)\"/><Cell col=\"5\" text=\"사용예정일*\"/><Cell col=\"6\" text=\"검침일*\"/><Cell col=\"7\" text=\"검침값*\"/><Cell col=\"8\" text=\"단위*\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"none\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:wtspSeCd\" displaytype=\"combotext\" textAlign=\"center\" edittype=\"none\" combodataset=\"dsWaterType\" combocodecol=\"cdId\" combodatacol=\"cdNm\"/><Cell col=\"2\" text=\"bind:ctrtNm\" displaytype=\"text\" textAlign=\"center\" tooltiptext=\"bind:ctrtNm\"/><Cell col=\"3\" text=\"bind:계약상태\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:ctrtTypeNm\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:usePrnmntYmd\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" edittype=\"none\"/><Cell col=\"6\" text=\"bind:rmtqtIdntyYmd\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" edittype=\"date\"/><Cell col=\"7\" text=\"bind:rmtqt\" textAlign=\"center\" displaytype=\"number\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" edittype=\"mask\" maskeditformat=\"###,###,###,###,###,###\"/><Cell col=\"8\" text=\"bind:rmtqtUnit\" textAlign=\"center\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" edittype=\"normal\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.divForm.form.Div05.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","471",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("10");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("10");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"panGrdBtn\"/><PanelItem id=\"PanelItem00\" componentid=\"divGrd\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","265","100.00%","204",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_horizontalgap("20");
            obj.set_flexwrap("nowrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"sta00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Edit("edtRprsvNm","550","931","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("26");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("sta00","20","20","100%","183",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("11");
            obj.set_text("수도사용신청 구분의 용어정의\r\n- 상수 : 인천시 상수도사업본부에서 생성하여 공급하는 일반 수도용수\r\n- 중수 : 공항지역 내 발생한 하수를 인천국제공항 중수도시설에서 재처리하여 생산한 재활용수로  화장실,조경,청소용수 등으로 사용됨\r\n- 중온수 : 인천공항에너지㈜에서 생산하는 냉난방용 열에너지 공급용수\r\n- 급탕 : 상수를 고온으로 가열한 용수\r\n- 냉수 : 인천국제공항에서 생산하는 냉방에너지 공급용수\r\n- 폐수 : 물에 액체성 또는 고체성의 수질오염물질이 섞여 있어 그대로는 사용할 수 없는 물\r\n\r\n본 신청인은 공항지역 내 수도 등 유틸리티(상수,중수,중온수,급탕,냉수,폐수) 사용을 신청함에 있어 [수도 등에 대한 이용안내서]를 숙지하고 위의 제반 사항에 동의하며, 안전하고 효율적인 공항운영을 위하여 공사의 제 요구사항을 이행할 것을 서약 합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staUtztnTrmsAgreYn","10","98","300","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("13");
            obj.set_text("수도등에 대한 이용약관 동의여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("Static03_01_01","36","382","100%","50",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("14");
            obj.set_text("■수도 등에 대한 이용약관 및 유의사항");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            obj.set_wordWrap("char");
            obj.set_textAlign("left");
            obj.set_verticalAlign("bottom");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel03_01_01","20.00","456","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("15");
            obj.set_type("horizontal");
            obj.set_cssclass("pal_WF_TxtAreaBox");
            obj.set_verticalgap("10");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staUtztnTrmsAgreYn\"/><PanelItem id=\"PanelItem00\" componentid=\"chkUtztnTrmsAgreYn\"/><PanelItem id=\"PanelItem02\" componentid=\"btnWtcsSample\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel03_01","10.00","98","100%","95.99",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("10");
            obj.set_spacing("10px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Static03_01_01\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel03_01_01\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel03","0","60","100.00%","106.99",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("17");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel03_01\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panFile00_00_00","43","936","100.00%","161",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("71");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_00_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_01_00_00_00","0","-4441","100%","30",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("79");
            obj.set_text("JPG,PNG,BMP,PDF만 첨부가능");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Grid("grdWstwtPrcsFcltCpocsc","0","-4491","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("78");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("btnWstwtPrcsFcltCpocscFile","375","-4491","116","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("76");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("btnWstwtPrcsFcltCpocscSample","245","-4491","120","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("75");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00_00","490","-4491","485","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("74");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnWstwtPrcsFcltCpocscSample\"/><PanelItem id=\"PanelItem01\" componentid=\"btnWstwtPrcsFcltCpocscFile\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staWstwtPrcsFcltCpocsc","0","-4491","485","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("73");
            obj.set_text("자체오수처리시설(정화조)준공필증");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new CheckBox("chkUtztnTrmsAgreYn","210","444","50","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("18");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_value("0");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staAgreYmd","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("19");
            obj.set_text("동의일");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Calendar("calAgreYmd","280","139","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("20");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("pan_03_00_00","20.00","242","305","86",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("21");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staAgreYmd\"/><PanelItem id=\"PanelItem02\" componentid=\"calAgreYmd\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staRprsvNm","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("22");
            obj.set_text("대표자 성명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("pan_04_01_00_00","20.00","242","305","86",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("23");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRprsvNm\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRprsvNm\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel07","0","242","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("24");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_03_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan_04_01_00_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("sta00_00","840","902","100%","150",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("27");
            obj.set_text("유의사항\r\n1.사용승인 및 공사의 확인없이 무단 사용하는 경우에는 최초 검침량을 0으로 간주합니다.\r\n2.재사용 신청서를 제출하는 경우에는 당해 해소내용을 근거서류와 함께 제출하여야 합니다.\r\n3.해지 또는 명의변경 등으로 사용자가 변경되는 경우에는 반드시 공사로 사전 통보하여 주시기 바라며,  미 통보로 인한 일체의 책임은 변경전 사용자에게 있습니다.\r\n4.자체오수처리시설(정화조)을 설치할 경우 신청전 아래 연락처로 문의 바랍니다.\r\n5.수도 등 유틸리티를 사용하는데 필요한 배관, 계량기 부속설비의 경우 수도 등에 대한 이용악관 제26조에 따라 입주자 부담으로 설치합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel02","40","960","100%","150",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("28");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexwrap("nowrap");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("btnWtcsSample","64.00","0","190","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("25");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_FileDw02");
            obj.set_fittocontents("width");
            obj.set_enable("true");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_00_00","20","-4431","100%","80",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("77");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grdWstwtPrcsFcltCpocsc\"/><PanelItem id=\"PanelItem01\" componentid=\"sta00_00_00_01_00_00_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00_00","20","-4481","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("72");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staWstwtPrcsFcltCpocsc\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panell00_01_01","35.00","100","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("29");
            obj.set_background("#ffffff");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staCtnMttrAgreYn\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Radio("rdoCtnMttrAgreYn","200.00","328","393","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("30");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div05_form_rdoCtnMttrAgreYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div05_form_rdoCtnMttrAgreYn_innerdataset", obj);
            divForm_form_Div05_form_rdoCtnMttrAgreYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">동의함</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">동의하지 않음</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div05_form_rdoCtnMttrAgreYn_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("31");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Panell00_01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoCtnMttrAgreYn\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","0","60","100.00%","247",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("32");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel02\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel00_01\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panFile00_00","-65","902","100.00%","161",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("58");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_02_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00","485","-3022","485","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("61");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnCustInfoCnfdocSample\"/><PanelItem id=\"PanelItem01\" componentid=\"btnCustInfoCnfdocFile\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("btnCustInfoCnfdocSample","238","-3022","120","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("62");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("btnCustInfoCnfdocFile","368","-3022","116","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("63");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staCustInfoCnfdoc","0","-3022","485","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("60");
            obj.set_text("고객정보확인서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00","20","-3012","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("59");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCustInfoCnfdoc\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_00","20","-2912","100%","80",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("64");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grdCustInfoCnfdoc\"/><PanelItem id=\"PanelItem01\" componentid=\"sta00_00_00_01_00_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Grid("grdCustInfoCnfdoc","0","-3022","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("65");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_01_00_00","0","-2972","100%","30",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("66");
            obj.set_text("JPG,PNG,BMP,PDF만 첨부가능");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staCnvyMttr","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("33");
            obj.set_text("전달사항");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new TextArea("txtCnvyMttr","43","1193","100%","100",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("34");
            obj.set_displaynulltext("내용입력");
            obj.set_readonly("false");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00","43.00","1193","100%","100",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("35");
            obj.set_background("#ffffff");
            obj.set_verticalgap("10");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"txtCnvyMttr\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel00_02_00","20.00","950","980","146",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("36");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCnvyMttr\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_01_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel06_01","51","1527","100.00%","157",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("37");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_02_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Div("divGrd00","0","30","100%","187",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("38");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Grid("grdCnvyMttr","0","0","100.00%","100%",null,null,null,null,null,null,this.divForm.form.Div05.form.divGrd00.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsCnvyMttr");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"81\"/><Column size=\"140\"/><Column size=\"103\"/><Column size=\"900\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"일시\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"내용\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:frstRegDt\" displaytype=\"mask\" maskeditformat=\"####-##-## ##:##:##\" textAlign=\"center\" maskedittype=\"string\"/><Cell col=\"2\" textAlign=\"center\" text=\"bind:frstRegNm\"/><Cell col=\"3\" cssclass=\"CellEnd\" text=\"bind:cnvyMttrCn\"/></Band></Format></Formats>");
            this.divForm.form.Div05.form.divGrd00.addChild(obj.name, obj);

            obj = new Static("Static00_00","15","238","96.91%","40",null,null,null,null,null,null,this.divForm.form.Div05.form.divGrd00.form);
            obj.set_taborder("1");
            obj.set_text("※ My Page -> 검토의견함 메뉴에서 내용 등록/수정/삭제 가능합니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Txt");
            obj.set_wordWrap("char");
            obj.set_fittocontents("height");
            this.divForm.form.Div05.form.divGrd00.addChild(obj.name, obj);

            obj = new Panel("Pal03","0","60","100.00%","208",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("39");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divGrd00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staGrndsVstCn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("40");
            obj.set_text("현장방문내역");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new TextArea("txtGrndsVstCn","43","1193","100%","100",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("41");
            obj.set_displaynulltext("내용입력");
            obj.set_readonly("false");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_01","43.00","1193","100%","143",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("42");
            obj.set_background("#ffffff");
            obj.set_verticalgap("10");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"txtGrndsVstCn\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel00_02_01","20.00","950","970","189",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("43");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staGrndsVstCn\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_01_01\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel06_02","51","1527","100.00%","200",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("44");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_02_01\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staPipNeedYn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("45");
            obj.set_text("배관필요여부");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Radio("rdoPipNeedYn","200.00","328","393","49.37",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("46");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div05_form_rdoPipNeedYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div05_form_rdoPipNeedYn_innerdataset", obj);
            divForm_form_Div05_form_rdoPipNeedYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div05_form_rdoPipNeedYn_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel01_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("47");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPipNeedYn\"/><PanelItem id=\"PanelItem03\" componentid=\"rdoPipNeedYn\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("48");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_01\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staRmtqtPhoto","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("49");
            obj.set_text("검침값사진");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("btnstaRmtqtPhotoSample","813","76","120","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("50");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("btnstaRmtqtPhotoFile","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("51");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("52");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnstaRmtqtPhotoSample\"/><PanelItem id=\"PanelItem00\" componentid=\"btnstaRmtqtPhotoFile\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panTitle00","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("53");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRmtqtPhoto\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Grid("grdstaRmtqtPhoto","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("54");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_01_00","20","20","100%","30",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("55");
            obj.set_text("JPG,PNG,BMP,PDF만 첨부가능");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel01_02","192","1038","100.00%","80",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("56");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grdstaRmtqtPhoto\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00_00_00_01_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panFile00","0","42","100.00%","151",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("57");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel01_02\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staCtnMttrAgreYn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("70");
            obj.set_text("유의사항에 대한 동의여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staSubTitle01","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("6");
            obj.set_text("신청자 정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinAplyPstn","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("8");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinAplyPstn\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_00","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("10");
            obj.set_text("신청위치 정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinAplcntInfo","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_00","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("12");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinAplcntInfo\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_01","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("14");
            obj.set_text("고객정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinCustInfo","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_01","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("16");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinCustInfo\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_02","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("18");
            obj.set_text("청구정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinClmInfo","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_02","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("20");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinClmInfo\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_02_00","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("22");
            obj.set_text("수도 신청정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinWtspAplyInfo","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
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
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinWtspAplyInfo\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divQuick",null,"62","296","245","62",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickMenu");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","17","20","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("0");
            obj.set_text("신청위치 정보");
            obj.set_cssclass("btn_WF_Quick_S");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn02","17.00","btn01:0","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("1");
            obj.set_text("신청자 정보");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn03","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("2");
            obj.set_text("고객정보");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn04","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("3");
            obj.set_text("청구정보");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn05","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("4");
            obj.set_text("수도 신청정보");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"divQuick:0","296","181","62",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickBtnBg");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_05","7","20","100","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("4");
            obj.set_text("임시저장삭제");
            obj.set_cssclass("btn_WF_No");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btn00","7","20","100","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("0");
            obj.set_text("임시저장");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btn00_00_00_00","10","20","100","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("3");
            obj.set_text("신청회수");
            obj.set_cssclass("btn_WF_No");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btn00_00_00","10","20","100","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("2");
            obj.set_text("신청회수요청");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btn00_00_01","10","20","100","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("5");
            obj.set_text("종료");
            obj.set_cssclass("btn_WF_No");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btn00_00","btn00:10","20","100","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("1");
            obj.set_text("신청");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divBtn.addChild(obj.name, obj);
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
            //-- Default Layout : this.divForm.form.divDgstfnExmn
            obj = new Layout("default","",0,0,this.divForm.form.divDgstfnExmn.form,function(p){});
            this.divForm.form.divDgstfnExmn.form.addLayout(obj.name, obj);

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

                p.btnCtrt.set_taborder("1");
                p.btnCtrt.set_cssclass("btn_WF_EdtSch");
                p.btnCtrt.move("edtCtrtNm:-40","0","40","40",null,null);
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
                p.staAplyNo.set_taborder("6");
                p.staAplyNo.set_text("신청번호");
                p.staAplyNo.set_cssclass("sta_WF_Label");
                p.staAplyNo.move("0","-466","100%","46",null,null);

                p.edtAplyNo.set_taborder("7");
                p.edtAplyNo.set_readonly("true");
                p.edtAplyNo.move("0","-421","100%","40",null,null);

                p.Panel01_00_00.set_taborder("5");
                p.Panel01_00_00.set_type("vertical");
                p.Panel01_00_00.set_flexgrow("1");
                p.Panel01_00_00.move("20","-466","100%","86",null,null);

                p.Panel00.set_taborder("4");
                p.Panel00.set_horizontalgap("20");
                p.Panel00.set_flexcrossaxiswrapalign("start");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_verticalgap("0");
                p.Panel00.set_spacing("0px 20px 10px 20px");
                p.Panel00.set_cssclass("pal_WF_DtlBg");
                p.Panel00.set_visible("false");
                p.Panel00.move("-5","25","100%","97",null,null);

                p.Panel01.set_taborder("0");
                p.Panel01.set_horizontalgap("20");
                p.Panel01.set_flexcrossaxiswrapalign("start");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_verticalgap("0");
                p.Panel01.set_spacing("0px 20px 10px 20px");
                p.Panel01.set_cssclass("pal_WF_DtlBg");
                p.Panel01.move("0","60","100.00%","96",null,null);

                p.staAplySe.set_taborder("1");
                p.staAplySe.set_text("신청구분");
                p.staAplySe.set_cssclass("sta_WF_Label");
                p.staAplySe.move("10","98","100%","46",null,null);

                p.edtAplySe.set_taborder("2");
                p.edtAplySe.set_readonly("true");
                p.edtAplySe.move("10.00","158","100%","40",null,null);

                p.Panel01_00.set_taborder("3");
                p.Panel01_00.set_type("vertical");
                p.Panel01_00.set_flexgrow("1");
                p.Panel01_00.move("10.00","98","305","86",null,null);

                p.staCtrtChcYn.set_taborder("8");
                p.staCtrtChcYn.set_text("계약선택여부");
                p.staCtrtChcYn.set_cssclass("sta_WF_Label_E");
                p.staCtrtChcYn.move("10","98","100%","46",null,null);

                p.rdoCtrtChcYn.set_taborder("9");
                p.rdoCtrtChcYn.set_innerdataset(divForm_form_Div01_form_rdoCtrtChcYn_innerdataset);
                p.rdoCtrtChcYn.set_codecolumn("codecolumn");
                p.rdoCtrtChcYn.set_datacolumn("datacolumn");
                p.rdoCtrtChcYn.set_direction("vertical");
                p.rdoCtrtChcYn.set_fittocontents("width");
                p.rdoCtrtChcYn.set_value("1");
                p.rdoCtrtChcYn.set_index("0");
                p.rdoCtrtChcYn.move("200.00","328","393","49.37",null,null);

                p.Panel00_00_00.set_taborder("10");
                p.Panel00_00_00.set_type("vertical");
                p.Panel00_00_00.set_flexgrow("1");
                p.Panel00_00_00.set_minwidth("");
                p.Panel00_00_00.move("10.00","98","305","86",null,null);

                p.Panel02.set_taborder("11");
                p.Panel02.set_horizontalgap("20");
                p.Panel02.set_flexcrossaxiswrapalign("start");
                p.Panel02.set_flexwrap("wrap");
                p.Panel02.set_fittocontents("height");
                p.Panel02.set_verticalgap("0");
                p.Panel02.set_spacing("0px 20px 10px 20px");
                p.Panel02.set_cssclass("pal_WF_DtlBg");
                p.Panel02.set_type("horizontal");
                p.Panel02.move("0","60","100.00%","96",null,null);

                p.staCtrtNo.set_taborder("12");
                p.staCtrtNo.set_text("계약번호");
                p.staCtrtNo.set_cssclass("sta_WF_Label");
                p.staCtrtNo.move("10","98","100%","46",null,null);

                p.edtCtrtNo.set_taborder("13");
                p.edtCtrtNo.set_readonly("true");
                p.edtCtrtNo.move("10.00","158","100%","40",null,null);

                p.Panel01_01.set_taborder("14");
                p.Panel01_01.set_type("vertical");
                p.Panel01_01.set_flexgrow("1");
                p.Panel01_01.move("10.00","98","300","86",null,null);

                p.staCtrtNoHwrtInpt.set_taborder("15");
                p.staCtrtNoHwrtInpt.set_text("계약번호(수기입력)");
                p.staCtrtNoHwrtInpt.set_cssclass("sta_WF_Label");
                p.staCtrtNoHwrtInpt.move("10","98","100%","46",null,null);

                p.edtCtrtNoHwrtInpt.set_taborder("16");
                p.edtCtrtNoHwrtInpt.set_readonly("false");
                p.edtCtrtNoHwrtInpt.move("10.00","158","100%","40",null,null);

                p.Panel01_01_02.set_taborder("17");
                p.Panel01_01_02.set_type("vertical");
                p.Panel01_01_02.set_flexgrow("1");
                p.Panel01_01_02.set_visible("false");
                p.Panel01_01_02.move("10.00","98","300","86",null,null);

                p.staCtrtNm.set_taborder("18");
                p.staCtrtNm.set_text("계약명");
                p.staCtrtNm.set_cssclass("sta_WF_Label_E");
                p.staCtrtNm.move("10","98","100%","46",null,null);

                p.divEdtPop00.set_taborder("19");
                p.divEdtPop00.set_text("Div00");
                p.divEdtPop00.set_formscrollbartype("none none");
                p.divEdtPop00.set_formscrolltype("none");
                p.divEdtPop00.set_flexgrow("1");
                p.divEdtPop00.move("280","274","100%","40",null,null);

                p.Panel01_01_00.set_taborder("20");
                p.Panel01_01_00.set_type("vertical");
                p.Panel01_01_00.set_flexgrow("1");
                p.Panel01_01_00.move("10.00","98","300","86",null,null);

                p.Panel03.set_taborder("21");
                p.Panel03.set_horizontalgap("20");
                p.Panel03.set_flexcrossaxiswrapalign("start");
                p.Panel03.set_flexwrap("wrap");
                p.Panel03.set_verticalgap("0");
                p.Panel03.set_spacing("0px 20px 10px 20px");
                p.Panel03.set_cssclass("pal_WF_DtlBg");
                p.Panel03.set_flexshrink("1");
                p.Panel03.set_fittocontents("height");
                p.Panel03.move("0","60","100.00%","96",null,null);

                p.staAplcntNm.set_taborder("22");
                p.staAplcntNm.set_text("신청자");
                p.staAplcntNm.set_cssclass("sta_WF_Label");
                p.staAplcntNm.move("10","98","100%","46",null,null);

                p.edtAplcntNm.set_taborder("23");
                p.edtAplcntNm.set_readonly("true");
                p.edtAplcntNm.move("42","47","100%","40",null,null);

                p.Panel00_00.set_taborder("24");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.set_minwidth("");
                p.Panel00_00.move("10.00","98","305","86",null,null);

                p.staAplcntMblTelno.set_taborder("25");
                p.staAplcntMblTelno.set_text("휴대폰 번호");
                p.staAplcntMblTelno.set_cssclass("sta_WF_Label");
                p.staAplcntMblTelno.move("10","98","100%","46",null,null);

                p.edtAplcntMblTelno.set_taborder("26");
                p.edtAplcntMblTelno.set_readonly("true");
                p.edtAplcntMblTelno.move("0","46","100.00%","40",null,null);

                p.Panel00_00_01.set_taborder("27");
                p.Panel00_00_01.set_type("vertical");
                p.Panel00_00_01.set_flexgrow("1");
                p.Panel00_00_01.set_minwidth("");
                p.Panel00_00_01.move("10.00","98","305","86",null,null);

                p.Panel00_01.set_taborder("28");
                p.Panel00_01.set_horizontalgap("20");
                p.Panel00_01.set_flexcrossaxiswrapalign("start");
                p.Panel00_01.set_flexwrap("wrap");
                p.Panel00_01.set_fittocontents("height");
                p.Panel00_01.set_verticalgap("0");
                p.Panel00_01.set_spacing("0px 20px 10px 20px");
                p.Panel00_01.set_cssclass("pal_WF_DtlBg");
                p.Panel00_01.set_type("horizontal");
                p.Panel00_01.move("0","60","100.00%","96",null,null);

                p.staCtrtInstNm.set_taborder("29");
                p.staCtrtInstNm.set_text("회사명");
                p.staCtrtInstNm.set_cssclass("sta_WF_Label");
                p.staCtrtInstNm.move("10","98","100%","46",null,null);

                p.edtCtrtInstNm.set_taborder("30");
                p.edtCtrtInstNm.set_readonly("true");
                p.edtCtrtInstNm.move("10.00","158","100%","40",null,null);

                p.Panel01_00_00_00.set_taborder("31");
                p.Panel01_00_00_00.set_type("vertical");
                p.Panel01_00_00_00.set_flexgrow("1");
                p.Panel01_00_00_00.move("10.00","98","100%","86",null,null);

                p.Panel04.set_taborder("32");
                p.Panel04.set_horizontalgap("20");
                p.Panel04.set_flexcrossaxiswrapalign("start");
                p.Panel04.set_flexwrap("wrap");
                p.Panel04.set_fittocontents("height");
                p.Panel04.set_verticalgap("0");
                p.Panel04.set_spacing("0px 20px 10px 20px");
                p.Panel04.set_cssclass("pal_WF_DtlBg");
                p.Panel04.move("0","60","100.00%","96",null,null);
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
                p.edtWtspUsePstn.set_taborder("12");
                p.edtWtspUsePstn.set_readonly("false");
                p.edtWtspUsePstn.move("1028","121","100%","40",null,null);

                p.staWtspUsePstn.set_taborder("11");
                p.staWtspUsePstn.set_text("수도사용위치(수기입력)");
                p.staWtspUsePstn.set_cssclass("sta_WF_Label");
                p.staWtspUsePstn.move("1028","76","100%","46",null,null);

                p.edtRnb.set_taborder("8");
                p.edtRnb.set_readonly("true");
                p.edtRnb.move("1028","26","100%","40",null,null);

                p.staRnb.set_taborder("7");
                p.staRnb.set_text("위치정보(룸번호)");
                p.staRnb.set_cssclass("sta_WF_Label");
                p.staRnb.move("1028","-20","100%","46",null,null);

                p.cboRgn.set_taborder("1");
                p.cboRgn.set_flexgrow("1");
                p.cboRgn.set_innerdataset("dsTspLocCd");
                p.cboRgn.set_codecolumn("cdId");
                p.cboRgn.set_datacolumn("cdNm");
                p.cboRgn.set_text("제1교통센터");
                p.cboRgn.set_value("");
                p.cboRgn.set_index("-1");
                p.cboRgn.move("1028","-70","300","40",null,null);

                p.cboBldg.set_taborder("2");
                p.cboBldg.set_flexgrow("1");
                p.cboBldg.set_innerdataset("dsBldgSeList");
                p.cboBldg.set_datacolumn("cdNm");
                p.cboBldg.set_codecolumn("cdId");
                p.cboBldg.set_text("B동");
                p.cboBldg.set_value("");
                p.cboBldg.set_index("-1");
                p.cboBldg.move("1360","-70","300","40",null,null);

                p.cboPstn.set_taborder("3");
                p.cboPstn.set_flexgrow("1");
                p.cboPstn.set_innerdataset("dsPstnSe");
                p.cboPstn.set_codecolumn("cdId");
                p.cboPstn.set_datacolumn("cdNm");
                p.cboPstn.set_text("B1-3206, B1-3207");
                p.cboPstn.set_value("");
                p.cboPstn.set_index("-1");
                p.cboPstn.move("1693","-70","300","40",null,null);

                p.Panel00_01.set_taborder("4");
                p.Panel00_01.set_horizontalgap("20");
                p.Panel00_01.set_flexcrossaxiswrapalign("start");
                p.Panel00_01.set_flexwrap("wrap");
                p.Panel00_01.set_fittocontents("height");
                p.Panel00_01.set_verticalgap("10");
                p.Panel00_01.move("1028","-70","100%","40",null,null);

                p.staPstnSe.set_taborder("0");
                p.staPstnSe.set_text("위치구분");
                p.staPstnSe.set_cssclass("sta_WF_Label_E");
                p.staPstnSe.move("1028","-116","100%","46",null,null);

                p.Panel01_01_01.set_taborder("5");
                p.Panel01_01_01.set_type("vertical");
                p.Panel01_01_01.set_flexgrow("1");
                p.Panel01_01_01.set_fittocontents("height");
                p.Panel01_01_01.move("1028","-116","100%","86",null,null);

                p.Panel05.set_taborder("6");
                p.Panel05.set_horizontalgap("20");
                p.Panel05.set_flexcrossaxiswrapalign("start");
                p.Panel05.set_flexwrap("wrap");
                p.Panel05.set_verticalgap("0");
                p.Panel05.set_spacing("0px 20px 10px 20px");
                p.Panel05.set_cssclass("pal_WF_DtlBg");
                p.Panel05.set_flexshrink("1");
                p.Panel05.set_fittocontents("height");
                p.Panel05.move("1008","-116","100.00%","95",null,null);

                p.Panel01_00_01.set_taborder("9");
                p.Panel01_00_01.set_type("vertical");
                p.Panel01_00_01.set_flexgrow("1");
                p.Panel01_00_01.move("1028","-20","305","86",null,null);

                p.Panel06.set_taborder("10");
                p.Panel06.set_horizontalgap("20");
                p.Panel06.set_flexcrossaxiswrapalign("start");
                p.Panel06.set_flexwrap("wrap");
                p.Panel06.set_fittocontents("height");
                p.Panel06.set_verticalgap("0");
                p.Panel06.set_spacing("0px 20px 10px 20px");
                p.Panel06.set_cssclass("pal_WF_DtlBg");
                p.Panel06.move("1008","-20","100.00%","95",null,null);

                p.Panel07_00.set_taborder("13");
                p.Panel07_00.set_type("vertical");
                p.Panel07_00.set_flexgrow("1");
                p.Panel07_00.move("1028","76","305","86",null,null);

                p.Panel07.set_taborder("14");
                p.Panel07.set_horizontalgap("20");
                p.Panel07.set_flexcrossaxiswrapalign("start");
                p.Panel07.set_flexwrap("wrap");
                p.Panel07.set_fittocontents("height");
                p.Panel07.set_verticalgap("0");
                p.Panel07.set_spacing("0px 20px 10px 20px");
                p.Panel07.set_cssclass("pal_WF_DtlBg");
                p.Panel07.set_visible("false");
                p.Panel07.move("1008","76","100.00%","95",null,null);
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
            //-- Default Layout : this.divForm.form.Div03.form.divEdtPop2.form
            obj = new Layout("default","",0,0,this.divForm.form.Div03.form.divEdtPop2.form,
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

                p.btnBuilcAddr.set_taborder("1");
                p.btnBuilcAddr.set_cssclass("btn_WF_EdtSch");
                p.btnBuilcAddr.move("edtBuilcZip:-40","0","40","40",null,null);
            	}
            );
            this.divForm.form.Div03.form.divEdtPop2.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div03.form.divEdtPop2.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div03.form.divEdtPop2.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.Div03.form.divEdtPop2.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div03.form
            obj = new Layout("default","",0,0,this.divForm.form.Div03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staCustInstNm.set_taborder("0");
                p.staCustInstNm.set_text("업체명");
                p.staCustInstNm.set_cssclass("sta_WF_Label_E");
                p.staCustInstNm.move("10","98","100%","46",null,null);

                p.edtCustInstNm.set_taborder("1");
                p.edtCustInstNm.set_readonly("true");
                p.edtCustInstNm.move("10.00","158","100%","40",null,null);

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

                p.staRprsvNm.set_taborder("4");
                p.staRprsvNm.set_text("대표자성명");
                p.staRprsvNm.set_cssclass("sta_WF_Label_E");
                p.staRprsvNm.move("10","98","100%","46",null,null);

                p.edtRprsvNm.set_taborder("5");
                p.edtRprsvNm.set_readonly("true");
                p.edtRprsvNm.move("10.00","158","100%","40",null,null);

                p.Panel00_00_00.set_taborder("6");
                p.Panel00_00_00.set_type("vertical");
                p.Panel00_00_00.set_flexgrow("1");
                p.Panel00_00_00.set_minwidth("");
                p.Panel00_00_00.move("10.00","98","305","86",null,null);

                p.staRprsTelno.set_taborder("7");
                p.staRprsTelno.set_text("대표전화번호");
                p.staRprsTelno.set_cssclass("sta_WF_Label");
                p.staRprsTelno.move("10","98","100%","46",null,null);

                p.edtRprsTelno.set_taborder("8");
                p.edtRprsTelno.set_readonly("true");
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

                p.staBrno.set_taborder("11");
                p.staBrno.set_text("사업자 등록번호");
                p.staBrno.set_cssclass("sta_WF_Label");
                p.staBrno.move("10","98","100%","46",null,null);

                p.edtBrno.set_taborder("12");
                p.edtBrno.set_readonly("true");
                p.edtBrno.move("10.00","158","100%","40",null,null);

                p.Panel00_00_02.set_taborder("13");
                p.Panel00_00_02.set_type("vertical");
                p.Panel00_00_02.set_flexgrow("1");
                p.Panel00_00_02.set_minwidth("");
                p.Panel00_00_02.move("10.00","98","305","86",null,null);

                p.staCrno.set_taborder("14");
                p.staCrno.set_text("법인등록번호");
                p.staCrno.set_cssclass("sta_WF_Label");
                p.staCrno.move("10","98","100%","46",null,null);

                p.edtCrno.set_taborder("15");
                p.edtCrno.set_readonly("true");
                p.edtCrno.move("10.00","158","100%","40",null,null);

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

                p.staTpbiz.set_taborder("18");
                p.staTpbiz.set_text("업종");
                p.staTpbiz.set_cssclass("sta_WF_Label");
                p.staTpbiz.move("10","98","100%","46",null,null);

                p.edtTpbiz.set_taborder("19");
                p.edtTpbiz.set_readonly("true");
                p.edtTpbiz.move("10.00","158","100%","40",null,null);

                p.Panel00_00_03.set_taborder("20");
                p.Panel00_00_03.set_type("vertical");
                p.Panel00_00_03.set_flexgrow("1");
                p.Panel00_00_03.set_minwidth("");
                p.Panel00_00_03.move("10.00","98","305","86",null,null);

                p.staBzstat.set_taborder("21");
                p.staBzstat.set_text("업태");
                p.staBzstat.set_cssclass("sta_WF_Label");
                p.staBzstat.move("10","98","100%","46",null,null);

                p.edtBzstat.set_taborder("22");
                p.edtBzstat.set_readonly("true");
                p.edtBzstat.move("10.00","158","100%","40",null,null);

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

                p.Panel00_03_00.set_taborder("34");
                p.Panel00_03_00.set_horizontalgap("20");
                p.Panel00_03_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_03_00.set_flexwrap("wrap");
                p.Panel00_03_00.set_fittocontents("height");
                p.Panel00_03_00.set_verticalgap("0");
                p.Panel00_03_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_03_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_03_00.set_type("horizontal");
                p.Panel00_03_00.move("-65","350","100.00%","167",null,null);

                p.staBuilcAddr.set_taborder("36");
                p.staBuilcAddr.set_text("사업자등록주소/우편번호");
                p.staBuilcAddr.set_cssclass("sta_WF_Label");
                p.staBuilcAddr.move("0","-1340","100%","46",null,null);

                p.Panel00_00_01_03.set_taborder("35");
                p.Panel00_00_01_03.set_type("vertical");
                p.Panel00_00_01_03.set_flexgrow("1");
                p.Panel00_00_01_03.set_fittocontents("height");
                p.Panel00_00_01_03.set_verticalgap("10");
                p.Panel00_00_01_03.set_minwidth("");
                p.Panel00_00_01_03.move("20.00","-1340","100%","156",null,null);

                p.edtBuilcAddrDtl.set_taborder("40");
                p.edtBuilcAddrDtl.set_displaynulltext("상세주소");
                p.edtBuilcAddrDtl.move("0","-1230","100%","40",null,null);

                p.edtBuilcAddr.set_taborder("39");
                p.edtBuilcAddr.set_readonly("true");
                p.edtBuilcAddr.set_flexgrow("2");
                p.edtBuilcAddr.set_displaynulltext("주소");
                p.edtBuilcAddr.move("327","-1340","305","40",null,null);

                p.divEdtPop2.set_taborder("38");
                p.divEdtPop2.set_text("Div00");
                p.divEdtPop2.set_formscrollbartype("none none");
                p.divEdtPop2.set_formscrolltype("none");
                p.divEdtPop2.set_flexgrow("1");
                p.divEdtPop2.move("0","-1340","150","40",null,null);

                p.panAddress00.set_taborder("37");
                p.panAddress00.set_horizontalgap("10");
                p.panAddress00.set_fittocontents("height");
                p.panAddress00.set_flexgrow("1");
                p.panAddress00.move("0","-1285","100%","45",null,null);

                p.staBuilc.set_taborder("25");
                p.staBuilc.set_text("사업자등록증");
                p.staBuilc.set_cssclass("sta_WF_Label_E");
                p.staBuilc.set_flexgrow("1");
                p.staBuilc.move("0","44","305","46",null,null);

                p.btnBuilcSample.set_taborder("26");
                p.btnBuilcSample.set_text("샘플첨부파일명");
                p.btnBuilcSample.set_cssclass("btn_WF_Small");
                p.btnBuilcSample.set_fittocontents("width");
                p.btnBuilcSample.move("813","76","120","40",null,null);

                p.btnBuilcFile.set_taborder("27");
                p.btnBuilcFile.set_text("파일선택");
                p.btnBuilcFile.set_cssclass("btn_WF_FileUp");
                p.btnBuilcFile.move("124","58","116","40",null,null);

                p.panBtnFile.set_taborder("28");
                p.panBtnFile.set_flexgrow("1");
                p.panBtnFile.set_flexcrossaxisalign("start");
                p.panBtnFile.set_flexmainaxisalign("end");
                p.panBtnFile.set_horizontalgap("10");
                p.panBtnFile.move("433","58","305","46",null,null);

                p.panTitle.set_taborder("29");
                p.panTitle.set_cssclass("pan_WF_FileTitle");
                p.panTitle.set_flexwrap("wrap");
                p.panTitle.set_fittocontents("height");
                p.panTitle.move("0","124","100%","46",null,null);

                p.grdBuilc.set_taborder("30");
                p.grdBuilc.set_binddataset("dsFile1");
                p.grdBuilc.set_autofittype("col");
                p.grdBuilc.set_cssclass("grd_WF_FileAdd");
                p.grdBuilc.move("20.00","114","100%","40",null,null);

                p.sta00_00_00_01.set_taborder("31");
                p.sta00_00_00_01.set_text("JPG,PNG,BMP,PDF만 첨부가능");
                p.sta00_00_00_01.set_cssclass("sta_WF_Des");
                p.sta00_00_00_01.set_fittocontents("height");
                p.sta00_00_00_01.move("20","20","100%","30",null,null);

                p.Panel01_00.set_taborder("32");
                p.Panel01_00.set_type("vertical");
                p.Panel01_00.set_verticalgap("10");
                p.Panel01_00.move("192","1038","100.00%","80",null,null);

                p.panFile.set_taborder("33");
                p.panFile.set_fittocontents("height");
                p.panFile.set_spacing("10px 20px 10px 20px");
                p.panFile.set_flexwrap("wrap");
                p.panFile.set_cssclass("pal_WF_DtlBg");
                p.panFile.set_verticalgap("4");
                p.panFile.move("0","42","100.00%","151",null,null);
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

                p.btnClmAddr.set_taborder("1");
                p.btnClmAddr.set_cssclass("btn_WF_EdtSch");
                p.btnClmAddr.move("edtClmZip:-40","0","40","40",null,null);
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
                p.Panel04.set_taborder("57");
                p.Panel04.set_type("vertical");
                p.Panel04.set_flexgrow("1");
                p.Panel04.set_fittocontents("height");
                p.Panel04.move("0","95","100%","80",null,null);

                p.staPayPicSmYn.set_taborder("0");
                p.staPayPicSmYn.set_text("납부담당자 동일여부");
                p.staPayPicSmYn.set_cssclass("sta_WF_Label_E");
                p.staPayPicSmYn.move("10","98","100%","46",null,null);

                p.Panel00_00.set_taborder("1");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.set_minwidth("");
                p.Panel00_00.move("10.00","98","305","86",null,null);

                p.Panel02.set_taborder("44");
                p.Panel02.set_flexcrossaxisalign("end");
                p.Panel02.move("187","7","100%","46",null,null);

                p.Panel00.set_taborder("2");
                p.Panel00.set_horizontalgap("20");
                p.Panel00.set_flexcrossaxiswrapalign("start");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_verticalgap("0");
                p.Panel00.set_spacing("0px 20px 10px 20px");
                p.Panel00.set_cssclass("pal_WF_DtlBg");
                p.Panel00.set_type("horizontal");
                p.Panel00.move("0","60","100.00%","96",null,null);

                p.staPayPicNm.set_taborder("3");
                p.staPayPicNm.set_text("납부담당자 성명");
                p.staPayPicNm.set_cssclass("sta_WF_Label_E");
                p.staPayPicNm.move("10","98","100%","46",null,null);

                p.edtPayPicNm.set_taborder("4");
                p.edtPayPicNm.set_readonly("false");
                p.edtPayPicNm.move("10.00","158","100%","40",null,null);

                p.Panel00_00_00.set_taborder("5");
                p.Panel00_00_00.set_type("vertical");
                p.Panel00_00_00.set_flexgrow("1");
                p.Panel00_00_00.set_minwidth("");
                p.Panel00_00_00.move("10.00","98","305","86",null,null);

                p.staPayPicDeptNm.set_taborder("6");
                p.staPayPicDeptNm.set_text("납부담당자 부서");
                p.staPayPicDeptNm.set_cssclass("sta_WF_Label");
                p.staPayPicDeptNm.move("10","98","100%","46",null,null);

                p.edtPayPicDeptNm.set_taborder("7");
                p.edtPayPicDeptNm.set_readonly("false");
                p.edtPayPicDeptNm.move("10.00","158","100%","40",null,null);

                p.Panel00_00_01_00.set_taborder("8");
                p.Panel00_00_01_00.set_type("vertical");
                p.Panel00_00_01_00.set_flexgrow("1");
                p.Panel00_00_01_00.set_minwidth("");
                p.Panel00_00_01_00.move("10.00","98","305","86",null,null);

                p.Panel00_01.set_taborder("9");
                p.Panel00_01.set_horizontalgap("20");
                p.Panel00_01.set_flexcrossaxiswrapalign("start");
                p.Panel00_01.set_flexwrap("wrap");
                p.Panel00_01.set_fittocontents("height");
                p.Panel00_01.set_verticalgap("0");
                p.Panel00_01.set_spacing("0px 20px 10px 20px");
                p.Panel00_01.set_cssclass("pal_WF_DtlBg");
                p.Panel00_01.set_type("horizontal");
                p.Panel00_01.move("0","60","100.00%","96",null,null);

                p.staPayPicTelno.set_taborder("10");
                p.staPayPicTelno.set_cssclass("sta_WF_Label_E");
                p.staPayPicTelno.set_text("납부담당자 전화번호");
                p.staPayPicTelno.move("10","98","100%","46",null,null);

                p.edtPayPicTelno.set_taborder("11");
                p.edtPayPicTelno.set_readonly("false");
                p.edtPayPicTelno.move("10.00","158","100%","40",null,null);

                p.Panel00_00_02.set_taborder("12");
                p.Panel00_00_02.set_type("vertical");
                p.Panel00_00_02.set_flexgrow("1");
                p.Panel00_00_02.set_minwidth("");
                p.Panel00_00_02.move("10.00","98","305","86",null,null);

                p.staPayPicMblTelno.set_taborder("13");
                p.staPayPicMblTelno.set_cssclass("sta_WF_Label_E");
                p.staPayPicMblTelno.set_text("납부담당자 휴대전화번호");
                p.staPayPicMblTelno.move("10","98","100%","46",null,null);

                p.edtPayPicMblTelno.set_taborder("14");
                p.edtPayPicMblTelno.set_readonly("false");
                p.edtPayPicMblTelno.move("10.00","158","100%","40",null,null);

                p.Panel00_00_01_01.set_taborder("15");
                p.Panel00_00_01_01.set_type("vertical");
                p.Panel00_00_01_01.set_flexgrow("1");
                p.Panel00_00_01_01.set_minwidth("");
                p.Panel00_00_01_01.move("10.00","98","305","86",null,null);

                p.Panel00_02.set_taborder("16");
                p.Panel00_02.set_horizontalgap("20");
                p.Panel00_02.set_flexcrossaxiswrapalign("start");
                p.Panel00_02.set_flexwrap("wrap");
                p.Panel00_02.set_fittocontents("height");
                p.Panel00_02.set_verticalgap("0");
                p.Panel00_02.set_spacing("0px 20px 10px 20px");
                p.Panel00_02.set_cssclass("pal_WF_DtlBg");
                p.Panel00_02.set_type("horizontal");
                p.Panel00_02.move("0","60","100.00%","96",null,null);

                p.staClmCustNo.set_taborder("17");
                p.staClmCustNo.set_text("청구고객번호");
                p.staClmCustNo.set_cssclass("sta_WF_Label_E");
                p.staClmCustNo.move("10","98","100%","46",null,null);

                p.edtClmCustNo.set_taborder("18");
                p.edtClmCustNo.move("10.00","158","100%","40",null,null);

                p.Panel00_00_03.set_taborder("19");
                p.Panel00_00_03.set_type("vertical");
                p.Panel00_00_03.set_flexgrow("1");
                p.Panel00_00_03.set_minwidth("");
                p.Panel00_00_03.move("10.00","98","305","86",null,null);

                p.Panel00_00_01_02.set_taborder("20");
                p.Panel00_00_01_02.set_type("vertical");
                p.Panel00_00_01_02.set_flexgrow("1");
                p.Panel00_00_01_02.set_minwidth("");
                p.Panel00_00_01_02.move("10.00","98","305","0",null,null);

                p.Panel00_03.set_taborder("21");
                p.Panel00_03.set_horizontalgap("20");
                p.Panel00_03.set_flexcrossaxiswrapalign("start");
                p.Panel00_03.set_flexwrap("wrap");
                p.Panel00_03.set_fittocontents("height");
                p.Panel00_03.set_verticalgap("0");
                p.Panel00_03.set_spacing("0px 20px 10px 20px");
                p.Panel00_03.set_cssclass("pal_WF_DtlBg");
                p.Panel00_03.set_type("horizontal");
                p.Panel00_03.move("0","60","100.00%","96",null,null);

                p.rdoPayPicSmYn.set_taborder("22");
                p.rdoPayPicSmYn.set_innerdataset(divForm_form_Div04_form_rdoPayPicSmYn_innerdataset);
                p.rdoPayPicSmYn.set_codecolumn("codecolumn");
                p.rdoPayPicSmYn.set_datacolumn("datacolumn");
                p.rdoPayPicSmYn.set_direction("vertical");
                p.rdoPayPicSmYn.set_fittocontents("width");
                p.rdoPayPicSmYn.set_index("-1");
                p.rdoPayPicSmYn.move("200.00","328","393","49.37",null,null);

                p.Panel00_03_01.set_taborder("25");
                p.Panel00_03_01.set_horizontalgap("20");
                p.Panel00_03_01.set_flexcrossaxiswrapalign("start");
                p.Panel00_03_01.set_flexwrap("wrap");
                p.Panel00_03_01.set_fittocontents("height");
                p.Panel00_03_01.set_verticalgap("0");
                p.Panel00_03_01.set_spacing("0px 20px 10px 20px");
                p.Panel00_03_01.set_cssclass("pal_WF_DtlBg");
                p.Panel00_03_01.set_type("horizontal");
                p.Panel00_03_01.move("0","60","100.00%","183",null,null);

                p.staClmMtd.set_taborder("23");
                p.staClmMtd.set_text("청구방식");
                p.staClmMtd.set_cssclass("sta_WF_Label_E");
                p.staClmMtd.move("10","98","100%","46",null,null);

                p.Panel00_00_01_02_00.set_taborder("24");
                p.Panel00_00_01_02_00.set_type("vertical");
                p.Panel00_00_01_02_00.set_flexgrow("1");
                p.Panel00_00_01_02_00.set_minwidth("");
                p.Panel00_00_01_02_00.move("10.00","98","305","110",null,null);

                p.rdoClmMtd.set_taborder("26");
                p.rdoClmMtd.set_innerdataset(divForm_form_Div04_form_rdoClmMtd_innerdataset);
                p.rdoClmMtd.set_codecolumn("codecolumn");
                p.rdoClmMtd.set_datacolumn("datacolumn");
                p.rdoClmMtd.set_direction("horizontal");
                p.rdoClmMtd.set_fittocontents("width");
                p.rdoClmMtd.set_index("-1");
                p.rdoClmMtd.move("200.00","328","100%","80",null,null);

                p.staClmAddr.set_taborder("27");
                p.staClmAddr.set_text("청구지주소/우편번호");
                p.staClmAddr.set_cssclass("sta_WF_Label_E");
                p.staClmAddr.move("0.00","0","100%","46",null,null);

                p.divEdtPop.set_taborder("28");
                p.divEdtPop.set_text("Div00");
                p.divEdtPop.set_formscrollbartype("none none");
                p.divEdtPop.set_formscrolltype("none");
                p.divEdtPop.set_flexgrow("1");
                p.divEdtPop.move("780.00","635","150","40",null,null);

                p.edtClmAddr.set_taborder("29");
                p.edtClmAddr.set_readonly("true");
                p.edtClmAddr.set_flexgrow("2");
                p.edtClmAddr.set_displaynulltext("주소");
                p.edtClmAddr.move("360","637","305","40",null,null);

                p.panAddress.set_taborder("30");
                p.panAddress.set_horizontalgap("10");
                p.panAddress.move("200","641","100%","45",null,null);

                p.edtClmAddrDtl.set_taborder("31");
                p.edtClmAddrDtl.set_displaynulltext("상세주소");
                p.edtClmAddrDtl.move("0.00","46","100%","40",null,null);

                p.Panel00_00_01.set_taborder("32");
                p.Panel00_00_01.set_type("vertical");
                p.Panel00_00_01.set_flexgrow("1");
                p.Panel00_00_01.set_fittocontents("height");
                p.Panel00_00_01.set_verticalgap("10");
                p.Panel00_00_01.set_minwidth("");
                p.Panel00_00_01.move("20.00","0","980","156",null,null);

                p.Panel00_03_00.set_taborder("33");
                p.Panel00_03_00.set_horizontalgap("20");
                p.Panel00_03_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_03_00.set_flexwrap("wrap");
                p.Panel00_03_00.set_fittocontents("height");
                p.Panel00_03_00.set_verticalgap("0");
                p.Panel00_03_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_03_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_03_00.set_type("horizontal");
                p.Panel00_03_00.move("0","60","100.00%","166",null,null);

                p.staPrvcClctAgre.set_taborder("34");
                p.staPrvcClctAgre.set_text("개인정보 수집·이용 안내");
                p.staPrvcClctAgre.set_cssclass("sta_WF_Label");
                p.staPrvcClctAgre.move("10","98","100%","46",null,null);

                p.Panel00_00_04.set_taborder("35");
                p.Panel00_00_04.set_type("vertical");
                p.Panel00_00_04.set_fittocontents("height");
                p.Panel00_00_04.set_minwidth("");
                p.Panel00_00_04.move("10.00","98","100%","105",null,null);

                p.Panel00_00_03_00_00_00.set_taborder("36");
                p.Panel00_00_03_00_00_00.set_type("vertical");
                p.Panel00_00_03_00_00_00.set_flexgrow("1");
                p.Panel00_00_03_00_00_00.set_verticalgap("10");
                p.Panel00_00_03_00_00_00.set_fittocontents("height");
                p.Panel00_00_03_00_00_00.set_minwidth("");
                p.Panel00_00_03_00_00_00.move("10.00","98","100%","161",null,null);

                p.Panel09.set_taborder("37");
                p.Panel09.set_horizontalgap("20");
                p.Panel09.set_flexcrossaxiswrapalign("start");
                p.Panel09.set_flexwrap("wrap");
                p.Panel09.set_fittocontents("height");
                p.Panel09.set_verticalgap("0");
                p.Panel09.set_spacing("0px 20px 10px 20px");
                p.Panel09.set_cssclass("pal_WF_DtlBg");
                p.Panel09.set_type("horizontal");
                p.Panel09.move("0","60","100.00%","212",null,null);

                p.staPrvcEsntlClctAgreYn.set_taborder("38");
                p.staPrvcEsntlClctAgreYn.set_text("개인정보 수집 (필수) 동의여부");
                p.staPrvcEsntlClctAgreYn.set_cssclass("sta_WF_Label_E");
                p.staPrvcEsntlClctAgreYn.move("10","98","200","46",null,null);

                p.chkPrvcEsntlClctAgreYn.set_taborder("39");
                p.chkPrvcEsntlClctAgreYn.set_falsevalue("0");
                p.chkPrvcEsntlClctAgreYn.set_truevalue("1");
                p.chkPrvcEsntlClctAgreYn.set_value("0");
                p.chkPrvcEsntlClctAgreYn.move("200.00","128","150","46",null,null);

                p.Panel01.set_taborder("40");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_type("horizontal");
                p.Panel01.move("41","937","100%","40",null,null);

                p.Panel00_10.set_taborder("41");
                p.Panel00_10.set_type("vertical");
                p.Panel00_10.set_fittocontents("height");
                p.Panel00_10.set_spacing("10px 0px");
                p.Panel00_10.set_minwidth("");
                p.Panel00_10.move("10.00","98","100%","98",null,null);

                p.Panel10.set_taborder("42");
                p.Panel10.set_horizontalgap("20");
                p.Panel10.set_flexcrossaxiswrapalign("start");
                p.Panel10.set_flexwrap("wrap");
                p.Panel10.set_fittocontents("height");
                p.Panel10.set_spacing("0px 20px 10px 20px");
                p.Panel10.set_cssclass("pal_WF_DtlBg");
                p.Panel10.set_type("horizontal");
                p.Panel10.move("0","60","100.00%","164",null,null);

                p.staPrvcEsntlClctAgreYn00.set_taborder("58");
                p.staPrvcEsntlClctAgreYn00.set_text("개인정보 수집(선택) 동의여부");
                p.staPrvcEsntlClctAgreYn00.set_cssclass("sta_WF_Label_E");
                p.staPrvcEsntlClctAgreYn00.move("15","1036","200","46",null,null);

                p.sta00_00.set_taborder("56");
                p.sta00_00.set_text("개인정보(선택정보) 사용에 관한 안내\r\n선택항목에 해당하는 정보를 입력하지 않으셔도 서비스 이용에는 제한이 없습니다.\r\n수집하는 개인정보의 선택항목 외 모든 내용은 필수항목에서 안내된 내용과 동일합니다.\r\n○수집하는 개인정보의 선택항목\r\n입주자서비스포털 인터넷청구시스템 청구서용 이메일주소, 전자세금계산서용 이메일주소(단, 청구방식 이메일 선택시 \"청구서용 이메일주소\" 필수)");
                p.sta00_00.set_cssclass("sta_WF_Des004");
                p.sta00_00.set_fittocontents("height");
                p.sta00_00.move("-235","870","100%","98",null,null);

                p.rdoPrvcChcClctAgreYn.set_taborder("43");
                p.rdoPrvcChcClctAgreYn.set_innerdataset(divForm_form_Div04_form_rdoPrvcChcClctAgreYn_innerdataset);
                p.rdoPrvcChcClctAgreYn.set_codecolumn("codecolumn");
                p.rdoPrvcChcClctAgreYn.set_datacolumn("datacolumn");
                p.rdoPrvcChcClctAgreYn.set_direction("vertical");
                p.rdoPrvcChcClctAgreYn.set_fittocontents("width");
                p.rdoPrvcChcClctAgreYn.set_index("-1");
                p.rdoPrvcChcClctAgreYn.move("200.00","328","490","31",null,null);

                p.btnClmInfo.set_taborder("45");
                p.btnClmInfo.set_text("청구정보찾기");
                p.btnClmInfo.set_cssclass("btn_WF_Small");
                p.btnClmInfo.set_verticalAlign("middle");
                p.btnClmInfo.set_textAlign("center");
                p.btnClmInfo.set_fittocontents("width");
                p.btnClmInfo.move("858.00","753","120","34",null,null);

                p.btnPayPicPrvcClctUtztnWtcsSample.set_taborder("46");
                p.btnPayPicPrvcClctUtztnWtcsSample.set_text("동의서 양식 다운로드");
                p.btnPayPicPrvcClctUtztnWtcsSample.set_cssclass("btn_WF_FileDw02");
                p.btnPayPicPrvcClctUtztnWtcsSample.set_fittocontents("width");
                p.btnPayPicPrvcClctUtztnWtcsSample.set_enable("true");
                p.btnPayPicPrvcClctUtztnWtcsSample.move("64.00","0","190","40",null,null);

                p.staPayPicPrvcClctUtztnWtcs.set_taborder("47");
                p.staPayPicPrvcClctUtztnWtcs.set_text("납부담당자 개인정보 수집이용동의서");
                p.staPayPicPrvcClctUtztnWtcs.set_cssclass("sta_WF_Label_E");
                p.staPayPicPrvcClctUtztnWtcs.set_flexgrow("1");
                p.staPayPicPrvcClctUtztnWtcs.move("0","44","305","46",null,null);

                p.btnPayPicPrvcClctUtztnWtcsFile.set_taborder("48");
                p.btnPayPicPrvcClctUtztnWtcsFile.set_text("파일선택");
                p.btnPayPicPrvcClctUtztnWtcsFile.set_cssclass("btn_WF_FileUp");
                p.btnPayPicPrvcClctUtztnWtcsFile.move("124","58","116","40",null,null);

                p.panBtnFile.set_taborder("49");
                p.panBtnFile.set_flexgrow("1");
                p.panBtnFile.set_flexcrossaxisalign("start");
                p.panBtnFile.set_flexmainaxisalign("end");
                p.panBtnFile.set_horizontalgap("10");
                p.panBtnFile.move("433","58","305","46",null,null);

                p.panTitle.set_taborder("50");
                p.panTitle.set_cssclass("pan_WF_FileTitle");
                p.panTitle.set_flexwrap("wrap");
                p.panTitle.set_fittocontents("height");
                p.panTitle.move("0","124","100%","46",null,null);

                p.grdPayPicPrvcClctUtztnWtcs.set_taborder("51");
                p.grdPayPicPrvcClctUtztnWtcs.set_binddataset("dsFile1");
                p.grdPayPicPrvcClctUtztnWtcs.set_autofittype("col");
                p.grdPayPicPrvcClctUtztnWtcs.set_cssclass("grd_WF_FileAdd");
                p.grdPayPicPrvcClctUtztnWtcs.move("20.00","114","100%","40",null,null);

                p.sta00_00_00_01.set_taborder("52");
                p.sta00_00_00_01.set_text("JPG,PNG,BMP,PDF만 첨부가능");
                p.sta00_00_00_01.set_cssclass("sta_WF_Des");
                p.sta00_00_00_01.set_fittocontents("height");
                p.sta00_00_00_01.move("20","20","100%","30",null,null);

                p.Panel01_00.set_taborder("53");
                p.Panel01_00.set_type("vertical");
                p.Panel01_00.set_verticalgap("10");
                p.Panel01_00.move("192","1038","100.00%","80",null,null);

                p.panFile.set_taborder("54");
                p.panFile.set_fittocontents("height");
                p.panFile.set_spacing("10px 20px 10px 20px");
                p.panFile.set_flexwrap("wrap");
                p.panFile.set_cssclass("pal_WF_DtlBg");
                p.panFile.set_verticalgap("4");
                p.panFile.set_visible("false");
                p.panFile.move("0","42","100.00%","151",null,null);

                p.sta00.set_taborder("55");
                p.sta00.set_text("1. 개인정보의 수집ㆍ이용 목적\r\n  인계인수 신청 시 작성건의 접수와 처리를 위해 개인정보를 수집목적에 필요한 최소한의 범위 내에서 수집하고 있습니다.\r\n2. 수집하려는 개인정보의 항목\r\n  필수항목 : 총괄책임자 및 시설관리책임자 성명, 총괄책임자 및 시설관리책임자 휴대폰번호\r\n3. 개인정보의 보유 및 이용 기간\r\n  계약종료 후 3년, 회원탈퇴 시까지\r\n4. 동의를 거부할 권리와 거부에 따른 불이익 내용\r\n귀하는 개인정보 수집에 거부할 권리가 있으며, 필수항목 수집을 거부할 경우 인계인수 승인요청서 작성건의 신청을 할 수 없습니다.");
                p.sta00.set_fittocontents("height");
                p.sta00.set_cssclass("sta_WF_Des004");
                p.sta00.move("20","20","100%","149",null,null);

                p.staAcuntEmlAddr.set_taborder("59");
                p.staAcuntEmlAddr.set_text("청구서용 이메일");
                p.staAcuntEmlAddr.set_cssclass("sta_WF_Label_E");
                p.staAcuntEmlAddr.move("10","98","100%","46",null,null);

                p.edtAcuntEmlAddr1.set_taborder("60");
                p.edtAcuntEmlAddr1.set_readonly("false");
                p.edtAcuntEmlAddr1.set_displaynulltext("이메일 주소 입력");
                p.edtAcuntEmlAddr1.set_flexgrow("1");
                p.edtAcuntEmlAddr1.move("10.00","158","30%","40",null,null);

                p.Static03.set_taborder("61");
                p.Static03.set_text("@");
                p.Static03.set_fittocontents("width");
                p.Static03.set_textAlign("center");
                p.Static03.move("507","1122","14","40",null,null);

                p.edtAcuntEmlAddr2.set_taborder("62");
                p.edtAcuntEmlAddr2.set_readonly("false");
                p.edtAcuntEmlAddr2.set_displaynulltext("이메일 주소 입력");
                p.edtAcuntEmlAddr2.set_flexgrow("1");
                p.edtAcuntEmlAddr2.move("10.00","158","30%","40",null,null);

                p.cboAcuntEmlAddr.set_taborder("63");
                p.cboAcuntEmlAddr.set_innerdataset("dsEmlList");
                p.cboAcuntEmlAddr.set_codecolumn("cdId");
                p.cboAcuntEmlAddr.set_datacolumn("cdNm");
                p.cboAcuntEmlAddr.set_displaynulltext("선택");
                p.cboAcuntEmlAddr.set_text("");
                p.cboAcuntEmlAddr.set_index("-1");
                p.cboAcuntEmlAddr.move("200.00","128","30%","40",null,null);

                p.panEmail.set_taborder("64");
                p.panEmail.set_horizontalgap("5");
                p.panEmail.move("386","1172","100%","50",null,null);

                p.pan02_02_00.set_taborder("65");
                p.pan02_02_00.set_type("vertical");
                p.pan02_02_00.set_visible("false");
                p.pan02_02_00.move("10.00","98","100%","86",null,null);

                p.staTxivEmlAddr.set_taborder("66");
                p.staTxivEmlAddr.set_text("전자세금계산서용 이메일");
                p.staTxivEmlAddr.set_cssclass("sta_WF_Label_E");
                p.staTxivEmlAddr.move("10","98","100%","46",null,null);

                p.edtTxivEmlAddr1.set_taborder("67");
                p.edtTxivEmlAddr1.set_readonly("false");
                p.edtTxivEmlAddr1.set_displaynulltext("이메일 주소 입력");
                p.edtTxivEmlAddr1.set_flexgrow("1");
                p.edtTxivEmlAddr1.move("10.00","158","30%","40",null,null);

                p.Static03_00.set_taborder("68");
                p.Static03_00.set_text("@");
                p.Static03_00.set_fittocontents("width");
                p.Static03_00.set_textAlign("center");
                p.Static03_00.move("507","1122","14","40",null,null);

                p.edtTxivEmlAddr2.set_taborder("69");
                p.edtTxivEmlAddr2.set_readonly("false");
                p.edtTxivEmlAddr2.set_displaynulltext("이메일 주소 입력");
                p.edtTxivEmlAddr2.set_flexgrow("1");
                p.edtTxivEmlAddr2.move("10.00","158","30%","40",null,null);

                p.cboTxivEmlAddr.set_taborder("70");
                p.cboTxivEmlAddr.set_innerdataset("dsEmlList");
                p.cboTxivEmlAddr.set_codecolumn("cdId");
                p.cboTxivEmlAddr.set_datacolumn("cdNm");
                p.cboTxivEmlAddr.set_displaynulltext("선택");
                p.cboTxivEmlAddr.set_text("");
                p.cboTxivEmlAddr.set_index("-1");
                p.cboTxivEmlAddr.move("200.00","128","30%","40",null,null);

                p.panEmail00.set_taborder("71");
                p.panEmail00.set_horizontalgap("5");
                p.panEmail00.move("386","1172","100%","50",null,null);

                p.pan02_02_00_00.set_taborder("72");
                p.pan02_02_00_00.set_type("vertical");
                p.pan02_02_00_00.move("10.00","98","100%","86",null,null);

                p.Panel03.set_taborder("73");
                p.Panel03.set_type("vertical");
                p.Panel03.set_flexgrow("1");
                p.Panel03.move("551","1140","300","172",null,null);
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
            //-- Default Layout : this.divForm.form.Div05.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.Div05.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdCtrtInfoList.set_taborder("0");
                p.grdCtrtInfoList.set_binddataset("dsWtspUseList");
                p.grdCtrtInfoList.set_autofittype("none");
                p.grdCtrtInfoList.getSetter("uFunction").set("checkbox");
                p.grdCtrtInfoList.set_maxwidth("");
                p.grdCtrtInfoList.move("0","0","100.00%","360",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.Div05.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div05.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div05.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdCtrtInfoList.set_autofittype("none");

                p.btnGrdRegi.set_visible("false");

                p.btnGrdDel.set_visible("false");
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.Div05.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div05.form.divGrd.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div05.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.Div05.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div05.form.divGrd00.form
            obj = new Layout("default","",0,0,this.divForm.form.Div05.form.divGrd00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdCnvyMttr.set_taborder("1");
                p.grdCnvyMttr.set_binddataset("dsCnvyMttr");
                p.grdCnvyMttr.set_autofittype("col");
                p.grdCnvyMttr.move("0","0","100.00%","100%",null,null);

                p.Static00_00.set_taborder("1");
                p.Static00_00.set_text("※ My Page -> 검토의견함 메뉴에서 내용 등록/수정/삭제 가능합니다.");
                p.Static00_00.set_usedecorate("true");
                p.Static00_00.set_cssclass("sta_WF_Txt");
                p.Static00_00.set_wordWrap("char");
                p.Static00_00.set_fittocontents("height");
                p.Static00_00.move("15","238","96.91%","40",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.Div05.form.divGrd00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div05.form.divGrd00.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div05.form.divGrd00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnGrdRegi.set_visible("false");

                p.btnGrdDel.set_visible("false");
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.Div05.form.divGrd00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div05.form
            obj = new Layout("default","",0,0,this.divForm.form.Div05.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staGageFrmPrdoc.set_taborder("0");
                p.staGageFrmPrdoc.set_text("계량기형식증명서 및 검정확인서는 계량기 구매처에서 발급 가능");
                p.staGageFrmPrdoc.set_cssclass("sta_WF_Label");
                p.staGageFrmPrdoc.move("10","98","100%","46",null,null);

                p.Panel00_00.set_taborder("1");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.set_minwidth("");
                p.Panel00_00.move("10.00","98","970","86",null,null);

                p.Panel00.set_taborder("2");
                p.Panel00.set_horizontalgap("20");
                p.Panel00.set_flexcrossaxiswrapalign("start");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_verticalgap("0");
                p.Panel00.set_spacing("0px 20px 10px 20px");
                p.Panel00.set_cssclass("pal_WF_DtlBg");
                p.Panel00.set_type("horizontal");
                p.Panel00.move("0","60","100.00%","191",null,null);

                p.Static02.set_taborder("6");
                p.Static02.set_text("- 열사용시설준공점검필증은 중온수/급탕신청시에만 해당\r\n- 발급처:인천공항에너지 시설부 열배관팀 032-450-0668\r\n");
                p.Static02.set_verticalAlign("middle");
                p.Static02.move("997","65","96.04%","54",null,null);

                p.btnRcgnCnfdocSample.set_taborder("5");
                p.btnRcgnCnfdocSample.set_text("검정확인서 (샘플)");
                p.btnRcgnCnfdocSample.set_fittocontents("width");
                p.btnRcgnCnfdocSample.move("234","50","200","34",null,null);

                p.btnGageFrmPrdocSample.set_taborder("4");
                p.btnGageFrmPrdocSample.set_text("계량기형식증명서(샘플)");
                p.btnGageFrmPrdocSample.set_fittocontents("width");
                p.btnGageFrmPrdocSample.move("32","51","200","34",null,null);

                p.Panel06.set_taborder("3");
                p.Panel06.set_horizontalgap("20");
                p.Panel06.move("37","50","100%","40",null,null);

                p.btnFcltCpocscSample.set_taborder("8");
                p.btnFcltCpocscSample.set_text("열사용시설준공점검필증 (샘플)");
                p.btnFcltCpocscSample.set_fittocontents("width");
                p.btnFcltCpocscSample.move("32","51","230","34",null,null);

                p.Panel06_00.set_taborder("7");
                p.Panel06_00.set_horizontalgap("20");
                p.Panel06_00.move("778","102","96.04%","40",null,null);

                p.btnGrdDel.set_taborder("68");
                p.btnGrdDel.set_text("삭제");
                p.btnGrdDel.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel.set_visible("true");
                p.btnGrdDel.set_fittocontents("width");
                p.btnGrdDel.move("413","156","45","34",null,null);

                p.panGrdBtn.set_taborder("69");
                p.panGrdBtn.set_flexcrossaxisalign("start");
                p.panGrdBtn.set_flexcrossaxiswrapalign("start");
                p.panGrdBtn.set_flexmainaxisalign("end");
                p.panGrdBtn.set_horizontalgap("10");
                p.panGrdBtn.set_spacing("0px 20px 0px 0px");
                p.panGrdBtn.move("-70","156","100%","40",null,null);

                p.btnGrdAdd.set_taborder("67");
                p.btnGrdAdd.set_text("추가");
                p.btnGrdAdd.set_cssclass("btn_WF_Small");
                p.btnGrdAdd.set_visible("true");
                p.btnGrdAdd.set_fittocontents("width");
                p.btnGrdAdd.move("356","156","47","34",null,null);

                p.divGrd.set_taborder("9");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","30","100%","400",null,null);

                p.pan00.set_taborder("10");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("10");
                p.pan00.set_spacing("10px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.set_type("horizontal");
                p.pan00.move("0","60","100.00%","471",null,null);

                p.Panel01.set_taborder("12");
                p.Panel01.set_type("vertical");
                p.Panel01.set_verticalgap("20");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_cssclass("pal_WF_DtlBg");
                p.Panel01.set_spacing("10px 20px 10px 20px");
                p.Panel01.set_horizontalgap("20");
                p.Panel01.set_flexwrap("nowrap");
                p.Panel01.move("0","265","100.00%","204",null,null);

                p.edtRprsvNm.set_taborder("26");
                p.edtRprsvNm.move("550","931","100%","40",null,null);

                p.sta00.set_taborder("11");
                p.sta00.set_text("수도사용신청 구분의 용어정의\r\n- 상수 : 인천시 상수도사업본부에서 생성하여 공급하는 일반 수도용수\r\n- 중수 : 공항지역 내 발생한 하수를 인천국제공항 중수도시설에서 재처리하여 생산한 재활용수로  화장실,조경,청소용수 등으로 사용됨\r\n- 중온수 : 인천공항에너지㈜에서 생산하는 냉난방용 열에너지 공급용수\r\n- 급탕 : 상수를 고온으로 가열한 용수\r\n- 냉수 : 인천국제공항에서 생산하는 냉방에너지 공급용수\r\n- 폐수 : 물에 액체성 또는 고체성의 수질오염물질이 섞여 있어 그대로는 사용할 수 없는 물\r\n\r\n본 신청인은 공항지역 내 수도 등 유틸리티(상수,중수,중온수,급탕,냉수,폐수) 사용을 신청함에 있어 [수도 등에 대한 이용안내서]를 숙지하고 위의 제반 사항에 동의하며, 안전하고 효율적인 공항운영을 위하여 공사의 제 요구사항을 이행할 것을 서약 합니다.");
                p.sta00.set_cssclass("sta_WF_Des");
                p.sta00.set_fittocontents("height");
                p.sta00.move("20","20","100%","183",null,null);

                p.staUtztnTrmsAgreYn.set_taborder("13");
                p.staUtztnTrmsAgreYn.set_text("수도등에 대한 이용약관 동의여부");
                p.staUtztnTrmsAgreYn.set_cssclass("sta_WF_Label_E");
                p.staUtztnTrmsAgreYn.move("10","98","300","40",null,null);

                p.Static03_01_01.set_taborder("14");
                p.Static03_01_01.set_text("■수도 등에 대한 이용약관 및 유의사항");
                p.Static03_01_01.set_fittocontents("height");
                p.Static03_01_01.set_usedecorate("true");
                p.Static03_01_01.set_wordWrap("char");
                p.Static03_01_01.set_textAlign("left");
                p.Static03_01_01.set_verticalAlign("bottom");
                p.Static03_01_01.set_maxheight("");
                p.Static03_01_01.move("36","382","100%","50",null,null);

                p.Panel03_01_01.set_taborder("15");
                p.Panel03_01_01.set_type("horizontal");
                p.Panel03_01_01.set_cssclass("pal_WF_TxtAreaBox");
                p.Panel03_01_01.set_verticalgap("10");
                p.Panel03_01_01.set_fittocontents("height");
                p.Panel03_01_01.set_minwidth("");
                p.Panel03_01_01.move("20.00","456","100%","40",null,null);

                p.Panel03_01.set_taborder("16");
                p.Panel03_01.set_type("vertical");
                p.Panel03_01.set_flexgrow("1");
                p.Panel03_01.set_verticalgap("10");
                p.Panel03_01.set_spacing("10px 0px");
                p.Panel03_01.set_minwidth("");
                p.Panel03_01.move("10.00","98","100%","95.99",null,null);

                p.Panel03.set_taborder("17");
                p.Panel03.set_horizontalgap("20");
                p.Panel03.set_flexcrossaxiswrapalign("start");
                p.Panel03.set_flexwrap("wrap");
                p.Panel03.set_fittocontents("height");
                p.Panel03.set_verticalgap("0");
                p.Panel03.set_spacing("0px 20px 10px 20px");
                p.Panel03.set_cssclass("pal_WF_DtlBg");
                p.Panel03.set_type("horizontal");
                p.Panel03.move("0","60","100.00%","106.99",null,null);

                p.panFile00_00_00.set_taborder("71");
                p.panFile00_00_00.set_fittocontents("height");
                p.panFile00_00_00.set_spacing("10px 20px 10px 20px");
                p.panFile00_00_00.set_flexwrap("wrap");
                p.panFile00_00_00.set_cssclass("pal_WF_DtlBg");
                p.panFile00_00_00.set_verticalgap("4");
                p.panFile00_00_00.move("43","936","100.00%","161",null,null);

                p.sta00_00_00_01_00_00_00.set_taborder("79");
                p.sta00_00_00_01_00_00_00.set_text("JPG,PNG,BMP,PDF만 첨부가능");
                p.sta00_00_00_01_00_00_00.set_cssclass("sta_WF_Des");
                p.sta00_00_00_01_00_00_00.set_fittocontents("height");
                p.sta00_00_00_01_00_00_00.move("0","-4441","100%","30",null,null);

                p.grdWstwtPrcsFcltCpocsc.set_taborder("78");
                p.grdWstwtPrcsFcltCpocsc.set_binddataset("dsFile1");
                p.grdWstwtPrcsFcltCpocsc.set_autofittype("col");
                p.grdWstwtPrcsFcltCpocsc.set_cssclass("grd_WF_FileAdd");
                p.grdWstwtPrcsFcltCpocsc.move("0","-4491","100%","40",null,null);

                p.btnWstwtPrcsFcltCpocscFile.set_taborder("76");
                p.btnWstwtPrcsFcltCpocscFile.set_text("파일선택");
                p.btnWstwtPrcsFcltCpocscFile.set_cssclass("btn_WF_FileUp");
                p.btnWstwtPrcsFcltCpocscFile.move("375","-4491","116","40",null,null);

                p.btnWstwtPrcsFcltCpocscSample.set_taborder("75");
                p.btnWstwtPrcsFcltCpocscSample.set_text("샘플첨부파일명");
                p.btnWstwtPrcsFcltCpocscSample.set_cssclass("btn_WF_Small");
                p.btnWstwtPrcsFcltCpocscSample.set_fittocontents("width");
                p.btnWstwtPrcsFcltCpocscSample.move("245","-4491","120","40",null,null);

                p.panBtnFile00_00_00.set_taborder("74");
                p.panBtnFile00_00_00.set_flexgrow("1");
                p.panBtnFile00_00_00.set_flexcrossaxisalign("start");
                p.panBtnFile00_00_00.set_flexmainaxisalign("end");
                p.panBtnFile00_00_00.set_horizontalgap("10");
                p.panBtnFile00_00_00.move("490","-4491","485","46",null,null);

                p.staWstwtPrcsFcltCpocsc.set_taborder("73");
                p.staWstwtPrcsFcltCpocsc.set_text("자체오수처리시설(정화조)준공필증");
                p.staWstwtPrcsFcltCpocsc.set_cssclass("sta_WF_Label");
                p.staWstwtPrcsFcltCpocsc.set_flexgrow("1");
                p.staWstwtPrcsFcltCpocsc.move("0","-4491","485","46",null,null);

                p.chkUtztnTrmsAgreYn.set_taborder("18");
                p.chkUtztnTrmsAgreYn.set_falsevalue("0");
                p.chkUtztnTrmsAgreYn.set_truevalue("1");
                p.chkUtztnTrmsAgreYn.set_value("0");
                p.chkUtztnTrmsAgreYn.move("210","444","50","40",null,null);

                p.staAgreYmd.set_taborder("19");
                p.staAgreYmd.set_text("동의일");
                p.staAgreYmd.set_cssclass("sta_WF_Label_E");
                p.staAgreYmd.move("10","98","100%","46",null,null);

                p.calAgreYmd.set_taborder("20");
                p.calAgreYmd.move("280","139","100%","40",null,null);

                p.pan_03_00_00.set_taborder("21");
                p.pan_03_00_00.set_type("vertical");
                p.pan_03_00_00.set_flexgrow("1");
                p.pan_03_00_00.move("20.00","242","305","86",null,null);

                p.staRprsvNm.set_taborder("22");
                p.staRprsvNm.set_text("대표자 성명");
                p.staRprsvNm.set_cssclass("sta_WF_Label_E");
                p.staRprsvNm.move("10","98","100%","46",null,null);

                p.pan_04_01_00_00.set_taborder("23");
                p.pan_04_01_00_00.set_type("vertical");
                p.pan_04_01_00_00.set_flexgrow("1");
                p.pan_04_01_00_00.move("20.00","242","305","86",null,null);

                p.Panel07.set_taborder("24");
                p.Panel07.set_horizontalgap("20");
                p.Panel07.set_flexcrossaxiswrapalign("start");
                p.Panel07.set_flexwrap("wrap");
                p.Panel07.set_fittocontents("height");
                p.Panel07.set_verticalgap("0");
                p.Panel07.set_spacing("0px 20px 10px 20px");
                p.Panel07.set_cssclass("pal_WF_DtlBg");
                p.Panel07.move("0","242","100.00%","96",null,null);

                p.sta00_00.set_taborder("27");
                p.sta00_00.set_text("유의사항\r\n1.사용승인 및 공사의 확인없이 무단 사용하는 경우에는 최초 검침량을 0으로 간주합니다.\r\n2.재사용 신청서를 제출하는 경우에는 당해 해소내용을 근거서류와 함께 제출하여야 합니다.\r\n3.해지 또는 명의변경 등으로 사용자가 변경되는 경우에는 반드시 공사로 사전 통보하여 주시기 바라며,  미 통보로 인한 일체의 책임은 변경전 사용자에게 있습니다.\r\n4.자체오수처리시설(정화조)을 설치할 경우 신청전 아래 연락처로 문의 바랍니다.\r\n5.수도 등 유틸리티를 사용하는데 필요한 배관, 계량기 부속설비의 경우 수도 등에 대한 이용악관 제26조에 따라 입주자 부담으로 설치합니다.");
                p.sta00_00.set_cssclass("sta_WF_Des");
                p.sta00_00.set_fittocontents("height");
                p.sta00_00.move("840","902","100%","150",null,null);

                p.Panel02.set_taborder("28");
                p.Panel02.set_cssclass("pal_WF_DtlBg");
                p.Panel02.set_flexwrap("nowrap");
                p.Panel02.set_type("vertical");
                p.Panel02.set_fittocontents("height");
                p.Panel02.set_spacing("10px 0px");
                p.Panel02.move("40","960","100%","150",null,null);

                p.btnWtcsSample.set_taborder("25");
                p.btnWtcsSample.set_text("동의서 양식 다운로드");
                p.btnWtcsSample.set_cssclass("btn_WF_FileDw02");
                p.btnWtcsSample.set_fittocontents("width");
                p.btnWtcsSample.set_enable("true");
                p.btnWtcsSample.move("64.00","0","190","40",null,null);

                p.Panel01_02_00_00.set_taborder("77");
                p.Panel01_02_00_00.set_type("vertical");
                p.Panel01_02_00_00.set_verticalgap("10");
                p.Panel01_02_00_00.move("20","-4431","100%","80",null,null);

                p.panTitle00_00_00.set_taborder("72");
                p.panTitle00_00_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00_00.set_flexwrap("wrap");
                p.panTitle00_00_00.set_fittocontents("height");
                p.panTitle00_00_00.move("20","-4481","100%","46",null,null);

                p.Panell00_01_01.set_taborder("29");
                p.Panell00_01_01.set_background("#ffffff");
                p.Panell00_01_01.set_flexmainaxisalign("spacebetween");
                p.Panell00_01_01.set_flexcrossaxisalign("center");
                p.Panell00_01_01.move("35.00","100","100%","46",null,null);

                p.rdoCtnMttrAgreYn.set_taborder("30");
                p.rdoCtnMttrAgreYn.set_innerdataset(divForm_form_Div05_form_rdoCtnMttrAgreYn_innerdataset);
                p.rdoCtnMttrAgreYn.set_codecolumn("codecolumn");
                p.rdoCtnMttrAgreYn.set_datacolumn("datacolumn");
                p.rdoCtnMttrAgreYn.set_direction("vertical");
                p.rdoCtnMttrAgreYn.set_fittocontents("width");
                p.rdoCtnMttrAgreYn.set_index("-1");
                p.rdoCtnMttrAgreYn.move("200.00","328","393","40",null,null);

                p.Panel00_01.set_taborder("31");
                p.Panel00_01.set_type("vertical");
                p.Panel00_01.set_flexgrow("1");
                p.Panel00_01.set_minwidth("");
                p.Panel00_01.move("10.00","98","305","86",null,null);

                p.Panel00_02.set_taborder("32");
                p.Panel00_02.set_horizontalgap("20");
                p.Panel00_02.set_flexcrossaxiswrapalign("start");
                p.Panel00_02.set_flexwrap("wrap");
                p.Panel00_02.set_fittocontents("height");
                p.Panel00_02.set_verticalgap("0");
                p.Panel00_02.set_spacing("0px 20px 10px 20px");
                p.Panel00_02.set_cssclass("pal_WF_DtlBg");
                p.Panel00_02.set_type("horizontal");
                p.Panel00_02.move("0","60","100.00%","247",null,null);

                p.panFile00_00.set_taborder("58");
                p.panFile00_00.set_fittocontents("height");
                p.panFile00_00.set_spacing("10px 20px 10px 20px");
                p.panFile00_00.set_flexwrap("wrap");
                p.panFile00_00.set_cssclass("pal_WF_DtlBg");
                p.panFile00_00.set_verticalgap("4");
                p.panFile00_00.move("-65","902","100.00%","161",null,null);

                p.panBtnFile00_00.set_taborder("61");
                p.panBtnFile00_00.set_flexgrow("1");
                p.panBtnFile00_00.set_flexcrossaxisalign("start");
                p.panBtnFile00_00.set_flexmainaxisalign("end");
                p.panBtnFile00_00.set_horizontalgap("10");
                p.panBtnFile00_00.move("485","-3022","485","46",null,null);

                p.btnCustInfoCnfdocSample.set_taborder("62");
                p.btnCustInfoCnfdocSample.set_text("샘플첨부파일명");
                p.btnCustInfoCnfdocSample.set_cssclass("btn_WF_Small");
                p.btnCustInfoCnfdocSample.set_fittocontents("width");
                p.btnCustInfoCnfdocSample.move("238","-3022","120","40",null,null);

                p.btnCustInfoCnfdocFile.set_taborder("63");
                p.btnCustInfoCnfdocFile.set_text("파일선택");
                p.btnCustInfoCnfdocFile.set_cssclass("btn_WF_FileUp");
                p.btnCustInfoCnfdocFile.move("368","-3022","116","40",null,null);

                p.staCustInfoCnfdoc.set_taborder("60");
                p.staCustInfoCnfdoc.set_text("고객정보확인서");
                p.staCustInfoCnfdoc.set_cssclass("sta_WF_Label");
                p.staCustInfoCnfdoc.set_flexgrow("1");
                p.staCustInfoCnfdoc.move("0","-3022","485","46",null,null);

                p.panTitle00_00.set_taborder("59");
                p.panTitle00_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00.set_flexwrap("wrap");
                p.panTitle00_00.set_fittocontents("height");
                p.panTitle00_00.move("20","-3012","100%","46",null,null);

                p.Panel01_02_00.set_taborder("64");
                p.Panel01_02_00.set_type("vertical");
                p.Panel01_02_00.set_verticalgap("10");
                p.Panel01_02_00.move("20","-2912","100%","80",null,null);

                p.grdCustInfoCnfdoc.set_taborder("65");
                p.grdCustInfoCnfdoc.set_binddataset("dsFile1");
                p.grdCustInfoCnfdoc.set_autofittype("col");
                p.grdCustInfoCnfdoc.set_cssclass("grd_WF_FileAdd");
                p.grdCustInfoCnfdoc.move("0","-3022","100%","40",null,null);

                p.sta00_00_00_01_00_00.set_taborder("66");
                p.sta00_00_00_01_00_00.set_text("JPG,PNG,BMP,PDF만 첨부가능");
                p.sta00_00_00_01_00_00.set_cssclass("sta_WF_Des");
                p.sta00_00_00_01_00_00.set_fittocontents("height");
                p.sta00_00_00_01_00_00.move("0","-2972","100%","30",null,null);

                p.staCnvyMttr.set_taborder("33");
                p.staCnvyMttr.set_text("전달사항");
                p.staCnvyMttr.set_cssclass("sta_WF_Label");
                p.staCnvyMttr.move("10","98","100%","46",null,null);

                p.txtCnvyMttr.set_taborder("34");
                p.txtCnvyMttr.set_displaynulltext("내용입력");
                p.txtCnvyMttr.set_readonly("false");
                p.txtCnvyMttr.move("43","1193","100%","100",null,null);

                p.Panel00_01_00.set_taborder("35");
                p.Panel00_01_00.set_background("#ffffff");
                p.Panel00_01_00.set_verticalgap("10");
                p.Panel00_01_00.set_type("vertical");
                p.Panel00_01_00.set_fittocontents("height");
                p.Panel00_01_00.move("43.00","1193","100%","100",null,null);

                p.Panel00_02_00.set_taborder("36");
                p.Panel00_02_00.set_type("vertical");
                p.Panel00_02_00.set_flexgrow("1");
                p.Panel00_02_00.set_fittocontents("height");
                p.Panel00_02_00.set_minwidth("");
                p.Panel00_02_00.move("20.00","950","980","146",null,null);

                p.Panel06_01.set_taborder("37");
                p.Panel06_01.set_horizontalgap("20");
                p.Panel06_01.set_flexcrossaxiswrapalign("start");
                p.Panel06_01.set_flexwrap("wrap");
                p.Panel06_01.set_fittocontents("height");
                p.Panel06_01.set_verticalgap("0");
                p.Panel06_01.set_spacing("0px 20px 10px 20px");
                p.Panel06_01.set_cssclass("pal_WF_DtlBg");
                p.Panel06_01.set_type("horizontal");
                p.Panel06_01.move("51","1527","100.00%","157",null,null);

                p.divGrd00.set_taborder("38");
                p.divGrd00.set_text("Div01");
                p.divGrd00.set_fittocontents("height");
                p.divGrd00.set_formscrollbartype("none none");
                p.divGrd00.set_formscrolltype("none");
                p.divGrd00.move("0","30","100%","187",null,null);

                p.Pal03.set_taborder("39");
                p.Pal03.set_horizontalgap("20");
                p.Pal03.set_flexcrossaxiswrapalign("start");
                p.Pal03.set_flexwrap("wrap");
                p.Pal03.set_fittocontents("height");
                p.Pal03.set_verticalgap("0");
                p.Pal03.set_spacing("10px 20px 10px 20px");
                p.Pal03.set_cssclass("pal_WF_DtlBg");
                p.Pal03.set_type("horizontal");
                p.Pal03.move("0","60","100.00%","208",null,null);

                p.staGrndsVstCn.set_taborder("40");
                p.staGrndsVstCn.set_text("현장방문내역");
                p.staGrndsVstCn.set_cssclass("sta_WF_Label");
                p.staGrndsVstCn.move("10","98","100%","46",null,null);

                p.txtGrndsVstCn.set_taborder("41");
                p.txtGrndsVstCn.set_displaynulltext("내용입력");
                p.txtGrndsVstCn.set_readonly("false");
                p.txtGrndsVstCn.move("43","1193","100%","100",null,null);

                p.Panel00_01_01.set_taborder("42");
                p.Panel00_01_01.set_background("#ffffff");
                p.Panel00_01_01.set_verticalgap("10");
                p.Panel00_01_01.set_type("vertical");
                p.Panel00_01_01.set_fittocontents("height");
                p.Panel00_01_01.move("43.00","1193","100%","143",null,null);

                p.Panel00_02_01.set_taborder("43");
                p.Panel00_02_01.set_type("vertical");
                p.Panel00_02_01.set_flexgrow("1");
                p.Panel00_02_01.set_fittocontents("height");
                p.Panel00_02_01.set_minwidth("");
                p.Panel00_02_01.move("20.00","950","970","189",null,null);

                p.Panel06_02.set_taborder("44");
                p.Panel06_02.set_horizontalgap("20");
                p.Panel06_02.set_flexcrossaxiswrapalign("start");
                p.Panel06_02.set_flexwrap("wrap");
                p.Panel06_02.set_fittocontents("height");
                p.Panel06_02.set_verticalgap("0");
                p.Panel06_02.set_spacing("0px 20px 10px 20px");
                p.Panel06_02.set_cssclass("pal_WF_DtlBg");
                p.Panel06_02.set_type("horizontal");
                p.Panel06_02.set_visible("false");
                p.Panel06_02.move("51","1527","100.00%","200",null,null);

                p.staPipNeedYn.set_taborder("45");
                p.staPipNeedYn.set_text("배관필요여부");
                p.staPipNeedYn.set_cssclass("sta_WF_Label");
                p.staPipNeedYn.move("10","98","100%","46",null,null);

                p.rdoPipNeedYn.set_taborder("46");
                p.rdoPipNeedYn.set_innerdataset(divForm_form_Div05_form_rdoPipNeedYn_innerdataset);
                p.rdoPipNeedYn.set_codecolumn("codecolumn");
                p.rdoPipNeedYn.set_datacolumn("datacolumn");
                p.rdoPipNeedYn.set_direction("vertical");
                p.rdoPipNeedYn.set_fittocontents("width");
                p.rdoPipNeedYn.set_index("-1");
                p.rdoPipNeedYn.move("200.00","328","393","49.37",null,null);

                p.Panel01_01.set_taborder("47");
                p.Panel01_01.set_type("vertical");
                p.Panel01_01.set_flexgrow("1");
                p.Panel01_01.set_minwidth("");
                p.Panel01_01.move("10.00","98","305","86",null,null);

                p.Panel01_00.set_taborder("48");
                p.Panel01_00.set_horizontalgap("20");
                p.Panel01_00.set_flexcrossaxiswrapalign("start");
                p.Panel01_00.set_flexwrap("wrap");
                p.Panel01_00.set_fittocontents("height");
                p.Panel01_00.set_verticalgap("0");
                p.Panel01_00.set_spacing("0px 20px 10px 20px");
                p.Panel01_00.set_cssclass("pal_WF_DtlBg");
                p.Panel01_00.set_type("horizontal");
                p.Panel01_00.set_visible("false");
                p.Panel01_00.move("0","60","100.00%","96",null,null);

                p.staRmtqtPhoto.set_taborder("49");
                p.staRmtqtPhoto.set_text("검침값사진");
                p.staRmtqtPhoto.set_cssclass("sta_WF_Label");
                p.staRmtqtPhoto.set_flexgrow("1");
                p.staRmtqtPhoto.move("0","44","305","46",null,null);

                p.btnstaRmtqtPhotoSample.set_taborder("50");
                p.btnstaRmtqtPhotoSample.set_text("샘플첨부파일명");
                p.btnstaRmtqtPhotoSample.set_cssclass("btn_WF_Small");
                p.btnstaRmtqtPhotoSample.set_fittocontents("width");
                p.btnstaRmtqtPhotoSample.move("813","76","120","40",null,null);

                p.btnstaRmtqtPhotoFile.set_taborder("51");
                p.btnstaRmtqtPhotoFile.set_text("파일선택");
                p.btnstaRmtqtPhotoFile.set_cssclass("btn_WF_FileUp");
                p.btnstaRmtqtPhotoFile.move("124","58","116","40",null,null);

                p.panBtnFile00.set_taborder("52");
                p.panBtnFile00.set_flexgrow("1");
                p.panBtnFile00.set_flexcrossaxisalign("start");
                p.panBtnFile00.set_flexmainaxisalign("end");
                p.panBtnFile00.set_horizontalgap("10");
                p.panBtnFile00.move("433","58","305","46",null,null);

                p.panTitle00.set_taborder("53");
                p.panTitle00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00.set_flexwrap("wrap");
                p.panTitle00.set_fittocontents("height");
                p.panTitle00.move("0","124","100%","46",null,null);

                p.grdstaRmtqtPhoto.set_taborder("54");
                p.grdstaRmtqtPhoto.set_binddataset("dsFile1");
                p.grdstaRmtqtPhoto.set_autofittype("col");
                p.grdstaRmtqtPhoto.set_cssclass("grd_WF_FileAdd");
                p.grdstaRmtqtPhoto.move("20.00","114","100%","40",null,null);

                p.sta00_00_00_01_00.set_taborder("55");
                p.sta00_00_00_01_00.set_text("JPG,PNG,BMP,PDF만 첨부가능");
                p.sta00_00_00_01_00.set_cssclass("sta_WF_Des");
                p.sta00_00_00_01_00.set_fittocontents("height");
                p.sta00_00_00_01_00.move("20","20","100%","30",null,null);

                p.Panel01_02.set_taborder("56");
                p.Panel01_02.set_type("vertical");
                p.Panel01_02.set_verticalgap("10");
                p.Panel01_02.move("192","1038","100.00%","80",null,null);

                p.panFile00.set_taborder("57");
                p.panFile00.set_fittocontents("height");
                p.panFile00.set_spacing("10px 20px 10px 20px");
                p.panFile00.set_flexwrap("wrap");
                p.panFile00.set_cssclass("pal_WF_DtlBg");
                p.panFile00.set_verticalgap("4");
                p.panFile00.set_visible("false");
                p.panFile00.move("0","42","100.00%","151",null,null);

                p.staCtnMttrAgreYn.set_taborder("70");
                p.staCtnMttrAgreYn.set_text("유의사항에 대한 동의여부");
                p.staCtnMttrAgreYn.set_cssclass("sta_WF_Label_E");
                p.staCtnMttrAgreYn.move("10","98","100%","46",null,null);
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
                p.btnMinTitle.set_taborder("29");
                p.btnMinTitle.set_cssclass("btn_WF_ACMinus");
                p.btnMinTitle.move("460","-55","34","34",null,null);

                p.sub_tit00.set_taborder("26");
                p.sub_tit00.set_background("#ffffff");
                p.sub_tit00.set_flexcrossaxisalign("end");
                p.sub_tit00.move("955","18","100%","58",null,null);

                p.staSubTitle02_00_03.set_taborder("27");
                p.staSubTitle02_00_03.set_text("서비스 흐름 및 작업방법 안내(타이틀미정)");
                p.staSubTitle02_00_03.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_03.move("0","-53","50%","50",null,null);

                p.Panel01_02_03.set_taborder("28");
                p.Panel01_02_03.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_03.set_spacing("0px 10px");
                p.Panel01_02_03.set_horizontalgap("10");
                p.Panel01_02_03.set_flexcrossaxisalign("center");
                p.Panel01_02_03.set_flexmainaxisalign("end");
                p.Panel01_02_03.move("505","-53","50%","50",null,null);

                p.divInfoGuide.set_taborder("5");
                p.divInfoGuide.set_text("서비스 흐름 및 작업방법 안내");
                p.divInfoGuide.set_cssclass("div_WF_InfoGuide");
                p.divInfoGuide.set_minheight("300");
                p.divInfoGuide.set_maxheight("");
                p.divInfoGuide.move("1660.00","262","100%","300",null,null);

                p.divDgstfnExmn.set_taborder("0");
                p.divDgstfnExmn.set_fittocontents("height");
                p.divDgstfnExmn.set_url("work::COM/util/dgstfnExmn/dgstfnExmn.xfdl");
                p.divDgstfnExmn.set_formscrollbartype("none none");
                p.divDgstfnExmn.set_visible("false");
                p.divDgstfnExmn.set_minheight("920");
                p.divDgstfnExmn.set_maxheight("");
                p.divDgstfnExmn.move("1660.00","262","100%","920",null,null);

                p.sub_tit01.set_taborder("9");
                p.sub_tit01.set_background("#ffffff");
                p.sub_tit01.set_flexcrossaxisalign("end");
                p.sub_tit01.move("1630","674","100%","66",null,null);

                p.Div01.set_taborder("0");
                p.Div01.set_text("Div00");
                p.Div01.set_cssclass("div_WF_Bg");
                p.Div01.set_fittocontents("height");
                p.Div01.set_visible("false");
                p.Div01.move("0","0","100%","577",null,null);

                p.sub_tit02.set_taborder("13");
                p.sub_tit02.set_background("#ffffff");
                p.sub_tit02.set_flexcrossaxisalign("end");
                p.sub_tit02.move("1630","674","100%","66",null,null);

                p.Div02.set_taborder("1");
                p.Div02.set_text("Div00");
                p.Div02.set_cssclass("div_WF_Bg");
                p.Div02.set_fittocontents("height");
                p.Div02.set_visible("false");
                p.Div02.move("0","Div01:376.428","100%","285",null,null);

                p.sub_tit03.set_taborder("17");
                p.sub_tit03.set_background("#ffffff");
                p.sub_tit03.set_flexcrossaxisalign("end");
                p.sub_tit03.move("1630","674","100%","66",null,null);

                p.Div03.set_taborder("2");
                p.Div03.set_text("Div00");
                p.Div03.set_cssclass("div_WF_Bg");
                p.Div03.set_fittocontents("height");
                p.Div03.set_visible("false");
                p.Div03.move("0","Div02:422.856","100%","702",null,null);

                p.sub_tit04.set_taborder("21");
                p.sub_tit04.set_background("#ffffff");
                p.sub_tit04.set_flexcrossaxisalign("end");
                p.sub_tit04.move("1630","674","100%","66",null,null);

                p.Div04.set_taborder("3");
                p.Div04.set_text("Div00");
                p.Div04.set_cssclass("div_WF_Bg");
                p.Div04.set_fittocontents("height");
                p.Div04.set_visible("false");
                p.Div04.move("0","30","100%","1260",null,null);

                p.sub_tit05.set_taborder("25");
                p.sub_tit05.set_background("#ffffff");
                p.sub_tit05.set_flexcrossaxisalign("end");
                p.sub_tit05.move("1630","674","100%","66",null,null);

                p.Div05.set_taborder("4");
                p.Div05.set_text("Div00");
                p.Div05.set_cssclass("div_WF_Bg");
                p.Div05.set_fittocontents("height");
                p.Div05.set_visible("false");
                p.Div05.move("0","30","100%","2449.99",null,null);

                p.staSubTitle01.set_taborder("6");
                p.staSubTitle01.set_text("신청자 정보");
                p.staSubTitle01.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle01.move("1630.00","690","50%","50",null,null);

                p.btnMinAplyPstn.set_taborder("7");
                p.btnMinAplyPstn.set_cssclass("btn_WF_ACMinus");
                p.btnMinAplyPstn.move("2890.00","692","34","34",null,null);

                p.Panel01.set_taborder("8");
                p.Panel01.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01.set_spacing("0px 10px");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_flexcrossaxisalign("center");
                p.Panel01.set_flexmainaxisalign("end");
                p.Panel01.move("2340.00","690","50%","50",null,null);

                p.staSubTitle02_00_00.set_taborder("10");
                p.staSubTitle02_00_00.set_text("신청위치 정보");
                p.staSubTitle02_00_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_00.move("1630.00","690","50%","50",null,null);

                p.btnMinAplcntInfo.set_taborder("11");
                p.btnMinAplcntInfo.set_cssclass("btn_WF_ACMinus");
                p.btnMinAplcntInfo.move("2890.00","692","34","34",null,null);

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

                p.btnMinCustInfo.set_taborder("15");
                p.btnMinCustInfo.set_cssclass("btn_WF_ACMinus");
                p.btnMinCustInfo.move("2890.00","692","34","34",null,null);

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

                p.btnMinClmInfo.set_taborder("19");
                p.btnMinClmInfo.set_cssclass("btn_WF_ACMinus");
                p.btnMinClmInfo.move("2890.00","692","34","34",null,null);

                p.Panel01_02_02.set_taborder("20");
                p.Panel01_02_02.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_02.set_spacing("0px 10px");
                p.Panel01_02_02.set_horizontalgap("10");
                p.Panel01_02_02.set_flexcrossaxisalign("center");
                p.Panel01_02_02.set_flexmainaxisalign("end");
                p.Panel01_02_02.move("2340.00","690","50%","50",null,null);

                p.staSubTitle02_00_02_00.set_taborder("22");
                p.staSubTitle02_00_02_00.set_text("수도 신청정보");
                p.staSubTitle02_00_02_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_02_00.move("1630.00","690","50%","50",null,null);

                p.btnMinWtspAplyInfo.set_taborder("23");
                p.btnMinWtspAplyInfo.set_cssclass("btn_WF_ACMinus");
                p.btnMinWtspAplyInfo.move("2890.00","692","34","34",null,null);

                p.Panel01_02_02_00.set_taborder("24");
                p.Panel01_02_02_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_02_00.set_spacing("0px 10px");
                p.Panel01_02_02_00.set_horizontalgap("10");
                p.Panel01_02_02_00.set_flexcrossaxisalign("center");
                p.Panel01_02_02_00.set_flexmainaxisalign("end");
                p.Panel01_02_02_00.move("2340.00","690","50%","50",null,null);
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
                p.btn01.set_text("신청위치 정보");
                p.btn01.set_cssclass("btn_WF_Quick_S");
                p.btn01.move("17","20","100%","45",null,null);

                p.btn02.set_taborder("1");
                p.btn02.set_text("신청자 정보");
                p.btn02.set_cssclass("btn_WF_Quick");
                p.btn02.move("17.00","btn01:0","100%","45",null,null);

                p.btn03.set_taborder("2");
                p.btn03.set_text("고객정보");
                p.btn03.set_cssclass("btn_WF_Quick");
                p.btn03.move("17.00","110","100%","45",null,null);

                p.btn04.set_taborder("3");
                p.btn04.set_text("청구정보");
                p.btn04.set_cssclass("btn_WF_Quick");
                p.btn04.move("17.00","110","100%","45",null,null);

                p.btn05.set_taborder("4");
                p.btn05.set_text("수도 신청정보");
                p.btn05.set_cssclass("btn_WF_Quick");
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
                p.btn05.set_cssclass("btn_WF_QuickM");
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
                p.btn00_05.set_taborder("4");
                p.btn00_05.set_text("임시저장삭제");
                p.btn00_05.set_cssclass("btn_WF_No");
                p.btn00_05.set_fittocontents("width");
                p.btn00_05.set_visible("false");
                p.btn00_05.move("7","20","100","40",null,null);

                p.btn00.set_taborder("0");
                p.btn00.set_text("임시저장");
                p.btn00.set_cssclass("btn_WF_Yes");
                p.btn00.set_fittocontents("width");
                p.btn00.set_visible("false");
                p.btn00.move("7","20","100","40",null,null);

                p.btn00_00_00_00.set_taborder("3");
                p.btn00_00_00_00.set_text("신청회수");
                p.btn00_00_00_00.set_cssclass("btn_WF_No");
                p.btn00_00_00_00.set_fittocontents("width");
                p.btn00_00_00_00.set_visible("false");
                p.btn00_00_00_00.move("10","20","100","40",null,null);

                p.btn00_00_00.set_taborder("2");
                p.btn00_00_00.set_text("신청회수요청");
                p.btn00_00_00.set_cssclass("btn_WF_Yes");
                p.btn00_00_00.set_fittocontents("width");
                p.btn00_00_00.set_visible("false");
                p.btn00_00_00.move("10","20","100","40",null,null);

                p.btn00_00_01.set_taborder("5");
                p.btn00_00_01.set_text("종료");
                p.btn00_00_01.set_cssclass("btn_WF_No");
                p.btn00_00_01.set_fittocontents("width");
                p.btn00_00_01.set_visible("false");
                p.btn00_00_01.move("10","20","100","40",null,null);

                p.btn00_00.set_taborder("1");
                p.btn00_00.set_text("신청");
                p.btn00_00.set_cssclass("btn_WF_Yes");
                p.btn00_00.set_fittocontents("width");
                p.btn00_00.set_visible("false");
                p.btn00_00.move("btn00:10","20","100","40",null,null);
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
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("신청서작성");

                p.divTitle.set_taborder("3");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_cssclass("div_WF_QuickFrBg");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("height");
                p.divForm.move("0","divTitle:10",null,"6720.99","60",null);

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
            obj = new BindItem("item0","divForm.form.Div01.form.edtAplyNo","value","dsWtspMst","aplyNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.Div01.form.rdoCtrtChcYn","value","dsWtspMst","ctrtChcYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.Div01.form.edtCtrtNo","value","dsWtspMst","ctrtNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.Div01.form.edtCtrtNoHwrtInpt","value","dsWtspMst","hwrtInptCtrtNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.Div01.form.divEdtPop00.form.edtCtrtNm","value","dsWtspMst","ctrtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divForm.form.Div03.form.edtCustInstNm","value","dsWtspMst","bzentyNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divForm.form.Div03.form.edtRprsvNm","value","dsWtspMst","rprsvNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divForm.form.Div03.form.edtRprsTelno","value","dsWtspMst","rprsTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divForm.form.Div03.form.edtBrno","value","dsWtspMst","brno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divForm.form.Div03.form.edtCrno","value","dsWtspMst","crno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divForm.form.Div03.form.edtTpbiz","value","dsWtspMst","tpbizNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divForm.form.Div03.form.edtBzstat","value","dsWtspMst","bzcndNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divForm.form.Div03.form.divEdtPop2.form.edtBuilcZip","value","dsWtspMst","custZip");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divForm.form.Div03.form.edtBuilcAddr","value","dsWtspMst","custAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divForm.form.Div03.form.edtBuilcAddrDtl","value","dsWtspMst","custDtlAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divForm.form.Div04.form.rdoPayPicSmYn","value","dsWtspMst","payPicSmYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divForm.form.Div04.form.edtPayPicNm","value","dsWtspMst","payPicNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divForm.form.Div04.form.edtPayPicDeptNm","value","dsWtspMst","payPicDeptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divForm.form.Div04.form.edtPayPicTelno","value","dsWtspMst","payPicTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divForm.form.Div04.form.edtPayPicMblTelno","value","dsWtspMst","payPicMblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divForm.form.Div04.form.edtClmCustNo","value","dsWtspMst","clmCustCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divForm.form.Div04.form.rdoClmMtd","value","dsWtspMst","clmMtdCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divForm.form.Div04.form.divEdtPop.form.edtClmZip","value","dsWtspMst","clmZip");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divForm.form.Div04.form.edtClmAddr","value","dsWtspMst","clmAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divForm.form.Div04.form.edtClmAddrDtl","value","dsWtspMst","clmDtlAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divForm.form.Div04.form.chkPrvcEsntlClctAgreYn","value","dsWtspMst","prvcClctEsntlAgreYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divForm.form.Div04.form.rdoPrvcChcClctAgreYn","value","dsWtspMst","prvcClctChcAgreYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divForm.form.Div05.form.chkUtztnTrmsAgreYn","value","dsWtspMst","wtspUtztnTrmsAgreYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divForm.form.Div05.form.rdoCtnMttrAgreYn","value","dsWtspMst","ctnMttrAgreYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divForm.form.Div05.form.calAgreYmd","value","dsWtspMst","agreYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divForm.form.Div05.form.edtRprsvNm","value","dsWtspMst","rprsvNm2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divForm.form.Div05.form.txtCnvyMttr","value","dsWtspMst","cnvyMttrCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divForm.form.Div05.form.txtGrndsVstCn","value","dsWtspMst","grndsVstDsctn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divForm.form.Div05.form.rdoPipNeedYn","value","dsWtspMst","pipNeedYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divForm.form.Div04.form.edtAcuntEmlAddr1","value","dsWtspMst","acuntEml1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divForm.form.Div04.form.edtAcuntEmlAddr2","value","dsWtspMst","acuntEml2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divForm.form.Div04.form.edtTxivEmlAddr1","value","dsWtspMst","etxivEmlAddr1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","divForm.form.Div04.form.edtTxivEmlAddr2","value","dsWtspMst","etxivEmlAddr2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.Div01.form.edtAplcntNm","value","dsWtspMst","aplcntNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.Div01.form.edtAplcntMblTelno","value","dsWtspMst","mblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.Div02.form.cboRgn","value","dsWtspMst","pstnSeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divForm.form.Div02.form.cboBldg","value","dsWtspMst","bldgSeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divForm.form.Div02.form.cboPstn","value","dsWtspMst","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divForm.form.Div02.form.edtRnb","value","dsWtspMst","pstnInfoRnb");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divForm.form.Div02.form.edtWtspUsePstn","value","dsWtspMst","hwrtInptWtspUsePstnCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.Div01.form.edtCtrtInstNm","value","dsWtspMst","aplcntInstNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
            this._addPreloadList("fdl","work::COM/util/dgstfnExmn/dgstfnExmn.xfdl");
        };
        
        // User Script
        this.addIncludeScript("LIF055M00.xfdl","xjs::TaskCom.xjs");
        this.registerScript("LIF055M00.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	LIF055M00.xfdl
        *  @Creator 	CHG
        *  @CreateDate 	2024/11/22
        *  @Desction   입주 > 유틸리티신청 > 수도사용신청
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/11/22				CHG							최초생성
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

        this.aplyNo = "";	// 신청서번호(화면 로드시 신청서 번호가 없으면 신규등록 가능)
        this.aplySeCd = "TSPWAT001"; // 신청구분코드(수도사용신청 : "TSPWAT001")
        this.jobCd = "TAS00046"; // 작업코드(기본값 TAS00046 : 신청서작성)

        this.btnDiv = this.divBtn; // 공통버튼영역 Div

        this.rdoPaySe = "0"; // 라디오 버튼 클릭 시 1로 바꿔줌. 로드시 이벤트때 적용.
        this.cboRgnSe = "0"; // 콤보 아이템 클릭 시 1로 바꿔줌. 로드시 이벤트때 적용.

        this.vStrSvcId  = ""; // 서비스ID
        this.vStrSvcUrl = ""; // 서비스URL

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	// 화면 open이 느려서 임시로 처리해줌.
        	/* 화면처리 Start */
        	this.divForm.form.Div02.visible = true;

        	nexacro._OnceCallbackTimer.callonce(this, function () {
        		this.divForm.form.Div01.visible = true;
        		this.divForm.form.Div03.visible = true;
        		this.divForm.form.Div04.visible = true;
        		this.divForm.form.Div05.visible = true;
        		this.resetScroll();
        	},50);
        	/* 화면처리 End */

        	// 로그인 정보
        	this.gvUserId 	= this.objApp.gdsUser.getColumn(0,"userId");			// 유저id
        	this.gvUserNm 	= this.objApp.gdsUser.getColumn(0,"userNm");			// 유저명
        	this.gvCoId   	= this.objApp.gdsUser.getColumn(0,"coId");				// 소속회사코드
        	this.gvCoNm   	= this.objApp.gdsUser.getColumn(0,"coNm");				// 소속회사명
        	this.gvDeptId   = this.objApp.gdsUser.getColumn(0,"deptId");			// 부서코드
        	this.gvDeptNm   = this.objApp.gdsUser.getColumn(0,"deptNm");			// 부서명
        	this.gvTelNo  	= this.objApp.gdsUser.getColumn(0, "userTelno");		// 전화번호
        	this.gvMblTelNo	= this.objApp.gdsUser.getColumn(0, "userMblTelno");		// 휴대전화번호

        	// 그리드 포멧ID 디폴트 세팅
        	this.divForm.form.Div05.form.divGrd.form.grdCtrtInfoList.setFormat("default");

        	// 신청구분명 조회
        	this.cfnGetAplySeNm({ id:"getAplySeNm", cbf:"fnCallback", aplySeCd:this.aplySeCd });

        	// 공통코드 함수 호출
        	this.cfnComCdLoad({ id:"comMailSearch", cbf:"fnCallback", dsEmlList:"EML_TY:S" }); // 이메일

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

        this.cfnClose = function(){


        }

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
        	this.dsSearch.setColumn(0, "inqSeCd", "1"); // 1 : 사용, 2 : 해지

        	var strSvcId    = "wtspUseAplcfmWrtInq";
        	var strSvcUrl   = "wtsp/wtspUseAplcfmWrtInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsWtspMst=dsWtspMst dsWtspUseList=dsWtspUseList dsCnvyMttr=dsCnvyMttr dsAtfl=dsAtfl dsMst=dsMst";
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
        			          + " dsMst=dsMst:A"                                     // Master DS
         			          + " dsWtspMst=dsWtspMst:A"                           	 // 수도사용 DS
         			          + " dsWtspUseList=dsWtspUseList:A"                     // 수도사용리스트 DS
        			          + " dsCnvyMttr=dsCnvyMttr:A"                           // 전달사항 DS
        			          + " dsAtfl=dsAtfl:U"                                   // 첨부파일 DS

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
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "comMailSearch" : // 메일코드 조회
        			this.cfnComCdLoad({ id:"comWaterTypeSearch", cbf:"fnCallback", dsWaterType:"WATERTYP:S" }); // 수도구분

        			break;

        		case "comWaterTypeSearch" : // 수도구분 조회
        			this.cfnComCdLoad({ id:"tspLocCdLoad", cbf:"fnCallback", dsTspLocCd:"TSPLOC:S" }); // 지역구분코드

        			break;

        		case "getAplySeNm" : // 신청구분명 조회
        			// 신청정보 세팅
        			this.divForm.form.Div01.form.edtAplySe.value = this.cfnGvbkAplySeNm();

        			break;

        		case "tspLocCdLoad" : // 지역구분코드
        			this.dsBldgSeList.copyData(this.dsTspLocCd);
        			this.dsBldgSeList.filter("cdId == ''");
        			this.dsTspLocCd.filter("uprCd == 'TSPLOCWAT' || cdId == ''");

        			// 신청서 번호 있는지 체크 없으면 신규등록
        			this.aplyNo = this.getOwnerFrame().pvAplyNo;   // 신청번호
        			// this.aplyNo = "WAT2412_00015";

        			if (this.gfnIsNull(this.aplyNo)) {
        				var nRow = this.dsWtspMst.addRow();

        				this.dsWtspMst.setColumn(nRow, "aplcntId"		, this.gvUserId);	// 신청자id
        				this.dsWtspMst.setColumn(nRow, "aplcntNm"		, this.gvUserNm);	// 신청자명
        				this.dsWtspMst.setColumn(nRow, "aplcntInstCd"	, this.gvCoId);		// 신청자기관코드
        				this.dsWtspMst.setColumn(nRow, "aplcntInstNm"	, this.gvCoNm);		// 신청자기관명
        				this.dsWtspMst.setColumn(nRow, "aplcntDeptCd"	, this.gvDeptId);	// 신청자부서코드
        				this.dsWtspMst.setColumn(nRow, "aplcntDeptNm"	, this.gvDeptNm);	// 신청자부서명
        				this.dsWtspMst.setColumn(nRow, "aplySeCd"		, this.aplySeCd);	// 신청구분코드
        				this.dsWtspMst.setColumn(nRow, "mblTelno"		, this.gvMblTelNo);	// 휴대전화번호

        				// 해당 TASK ID로 버튼 자동 생성 -> 추후에 신청번호가 있는지 없는지 체크해서 task id 박아넣어줘야함. 현재는 신청서 작성으로 했음.
        				this.cfnBtnCrt({ crtTrgt:this.divBtn, cbf:"fnCallback", lnkgEvnt:this.btn_onclick, inqCnd : { jobPrcsPrgrsSeCd:this.jobCd} });

        			} else {
        				// 수도사용 조회
        				this.cfnSearch(this.aplyNo);

        			}

        			break;

        		case "_cfnBtnCrt_" : // 버튼 생성 callback
        			// 신청서작성 - 신청취소 : 신규 신청일때는 안보여줌.
        			if(this.jobCd == "TAS00046" && this.gfnIsNull(this.aplyNo)){
        				Array.from(this.btnDiv.form.components).forEach(oComp => {
        					if(oComp.id == "CTL01004"){
        						oComp.visible = false;

        					}
        				});
        			}

        			break;

        		case "wtspUseAplcfmWrtInq": //조회
        			if(this.dsWtspMst.getRowCount() > 0){
        				this.jobCd = this.dsWtspMst.getColumn(0, "jobCd");

        			}

        			// 해당 TASK ID로 버튼 자동 생성
        			this.cfnBtnCrt({ crtTrgt:this.divBtn, cbf:"fnCallback", lnkgEvnt:this.btn_onclick, inqCnd : { jobPrcsPrgrsSeCd:this.jobCd} });

        			// 화면 세팅
        			this.fnScrnSetting();

        			break;

        		case "wtspUseAplcfmWrtTmprStrg" :
        			this.gfnAlertMsg("saveAlert", this.objApp.getVariable("gvRetMsg"), "", "msgCallback");

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

        /**************************************************************************
         * @name : fnPopupCallback
         * @description : 팝업에 관한 콜백 함수
         ***************************************************************************/
        this.fnPopupCallback = function(sPopupId, sRtn)
        {
        	if (sPopupId == "wtohAgreYnPop"){
        		// if (this.gfnIsNull(sRtn)) return;
        		var objRtn = JSON.parse(sRtn);

        		var strWtohAgreYn = objRtn.wtohAgreYn;

        		if(!this.gfnIsNull(strWtohAgreYn) && strWtohAgreYn == "1"){
        			this.dsList.setColumn(0, "wtohAgreYn", strWtohAgreYn);

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
        	}else if(sPopupId == "delConfirm"){
        		if(oRtn.result == "Y") {
        			// 아래에서 부터 삭제
        			for(var i = this.dsWtspUseList.getRowCount() - 1; i >= 0; i--){
        				if(this.dsWtspUseList.getColumn(i, "chk") == "1"){
        					// this.dsWtspUseList.setRowType(i, Dataset.ROWTYPE_DELETE);
        					this.dsWtspUseList.deleteRow(i);

        				}
        			}
        		}
        	}else if(sPopupId == "aplyCancelConfirm"){
        		// 첨부파일 다 삭제해 줘야함! 여기!

        		// 데이터셋 모든 자료 삭제
        		this.dsWtspMst.deleteAll();
        		this.dsWtspUseList.deleteAll();
        		this.dsCnvyMttr.deleteAll();
        		this.dsAtfl.deleteAll();
        		this.dsMst.deleteAll();

        		// 저장
        		this.cfnSave();
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
        	var sCtrtChcYn = this.dsWtspMst.getColumn(0, "ctrtChcYn"); // 계약선택여부
        	var sPayPicSmYn = this.dsWtspMst.getColumn(0, "payPicSmYn"); // 납부담당자 동일여부
        	var sClmMtdCd = this.dsWtspMst.getColumn(0, "clmMtdCd"); // 청구방식코드

        	if(this.gfnIsNull(sCtrtChcYn)){ // 계약선택여부
        		this.divForm.form.Div01.form.rdoCtrtChcYn.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["계약선택여부 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsWtspMst.getColumn(0, "pstnSeCd"))){ // 위치구분코드
        		this.divForm.form.Div02.form.cboRgn.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["위치구분코드 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsWtspMst.getColumn(0, "bldgSeCd"))){ // 위치구분코드
        		this.divForm.form.Div02.form.cboBldg.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["위치구분코드 \n"]);
        		return false;
        	}

        	// 계약선택 시 체크
        	if(sCtrtChcYn == "1"){
        		if(this.gfnIsNull(this.dsWtspMst.getColumn(0, "bzentyNm"))){ // 업체명
        			this.divForm.form.Div03.form.edtCustInstNm.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["업체명 \n"]);
        			return false;
        		}
        		if(this.gfnIsNull(this.dsWtspMst.getColumn(0, "rprsvNm"))){ // 대표자성명
        			this.divForm.form.Div03.form.edtRprsvNm.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["대표자성명 \n"]);
        			return false;
        		}
        	}

        	if(this.gfnIsNull(sPayPicSmYn)){ // 납부담당자 동일여부
        		this.divForm.form.Div04.form.rdoPayPicSmYn.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["납부담당자 동일여부 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsWtspMst.getColumn(0, "payPicNm"))){ // 납부담당자 성명
        		this.divForm.form.Div04.form.edtPayPicNm.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["납부담당자 성명 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsWtspMst.getColumn(0, "payPicTelno"))){ // 납부담당자 전화번호
        		this.divForm.form.Div04.form.edtPayPicTelno.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["납부담당자 전화번호 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsWtspMst.getColumn(0, "payPicMblTelno"))){ // 납부담당자 휴대전화번호
        		this.divForm.form.Div04.form.edtPayPicMblTelno.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["납부담당자 휴대전화번호 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsWtspMst.getColumn(0, "clmCustCd"))){ // 청구고객코드
        		this.divForm.form.Div04.form.edtClmCustNo.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["청구고객코드 \n"]);
        		return false;
        	}

        	if(this.gfnIsNull(sClmMtdCd)){ // 청구방식코드
        		this.divForm.form.Div04.form.rdoClmMtd.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["청구방식코드 \n"]);
        		return false;
        	}else if(sClmMtdCd == "1"){ // 이메일일때
        		if(this.gfnIsNull(this.dsWtspMst.getColumn(0, "acuntEml1"))){ // 청구서용이메일
        			this.divForm.form.Div04.form.edtAcuntEmlAddr1.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["청구서용이메일 \n"]);
        			return false;
        		}
        		if(this.gfnIsNull(this.dsWtspMst.getColumn(0, "acuntEml2"))){ // 청구서용이메일주소
        			this.divForm.form.Div04.form.edtAcuntEmlAddr2.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["청구서용이메일주소 \n"]);
        			return false;
        		}

        	}
        	if(this.gfnIsNull(this.dsWtspMst.getColumn(0, "etxivEmlAddr1"))){ // 전자세금계산서이메일
        		this.divForm.form.Div04.form.edtTxivEmlAddr1.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["전자세금계산서이메일 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsWtspMst.getColumn(0, "etxivEmlAddr2"))){ // 전자세금계산서이메일주소
        		this.divForm.form.Div04.form.edtTxivEmlAddr2.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["전자세금계산서이메일주소 \n"]);
        		return false;
        	}

        	if(this.gfnIsNull(this.dsWtspMst.getColumn(0, "clmZip"))){ // 청구지우편번호
        		this.divForm.form.Div04.form.divEdtPop.form.edtClmZip.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["청구지우편번호 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsWtspMst.getColumn(0, "clmAddr"))){ // 청구지주소
        		this.divForm.form.Div04.form.edtClmAddr.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["청구지주소 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsWtspMst.getColumn(0, "clmDtlAddr"))){ // 청구지상세주소
        		this.divForm.form.Div04.form.edtClmAddrDtl.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["청구지상세주소 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsWtspMst.getColumn(0, "prvcClctEsntlAgreYn"))){ // 개인정보수집필수동의여부
        		this.divForm.form.Div04.form.chkPrvcEsntlClctAgreYn.setFocus();
        		this.gfnAlertMsg("msg", "MSG_011", ["개인정보수집필수동의여부를 \n체크하여 주세요."]);
        		return false;
        	}
        	if(this.dsWtspMst.getColumn(0, "prvcClctEsntlAgreYn") == "0"){
        		this.divForm.form.Div04.form.chkPrvcEsntlClctAgreYn.setFocus();
        		this.gfnAlertMsg("msg", "MSG_011", ["개인정보수집필수동의여부를 \n체크하여 주세요."]);
        		return false;

        	}
        	if(this.gfnIsNull(this.dsWtspMst.getColumn(0, "prvcClctChcAgreYn"))){ // 개인정보수집선택동의여부
        		this.divForm.form.Div04.form.rdoPrvcChcClctAgreYn.setFocus();
        		this.gfnAlertMsg("msg", "MSG_011", ["개인정보수집선택동의여부를 \n체크하여 주세요."]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsWtspMst.getColumn(0, "wtspUtztnTrmsAgreYn"))
        	  || this.dsWtspMst.getColumn(0, "wtspUtztnTrmsAgreYn") == "0"){ // 수도등에 대한 이용약관
        		this.divForm.form.Div05.form.chkUtztnTrmsAgreYn.setFocus();
        		this.gfnAlertMsg("msg", "MSG_011", ["수도등에 대한 이용약관을 \n체크하여 주세요."]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsWtspMst.getColumn(0, "agreYmd"))){ // 동의일
        		this.divForm.form.Div05.form.calAgreYmd.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["동의일 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsWtspMst.getColumn(0, "rprsvNm2"))){ // 대표자명
        		this.divForm.form.Div05.form.edtRprsvNm.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["대표자명 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsWtspMst.getColumn(0, "ctnMttrAgreYn"))){ // 유의사항에 대한 동의여부
        		this.divForm.form.Div05.form.rdoCtnMttrAgreYn.setFocus();
        		this.gfnAlertMsg("msg", "MSG_011", ["유의사항에 대한 동의여부를 \n체크하여 주세요."]);
        		return false;
        	}
        	if(this.dsWtspMst.getColumn(0, "ctnMttrAgreYn") == "0"){
        		this.divForm.form.Div05.form.rdoCtnMttrAgreYn.setFocus();
        		this.gfnAlertMsg("msg", "MSG_011", ["유의사항에 대한 동의여부를 \n동의하여 주세요."]);
        		return false;

        	}

        	if(this.dsWtspUseList.getRowCount() > 0){
        		var cellIdx = -1;
        		for(var i = 0; i < this.dsWtspUseList.getRowCount(); i++){
        			if(this.gfnIsNull(this.dsWtspUseList.getColumn(i, "wtspSeCd"))){
        				cellIdx = this.divForm.form.Div05.form.divGrd.form.grdCtrtInfoList.getBindCellIndex("body", "wtspSeCd");
        				this.divForm.form.Div05.form.divGrd.form.grdCtrtInfoList.setFocus();
        				this.divForm.form.Div05.form.divGrd.form.grdCtrtInfoList.setCellPos(cellIdx, i);
        				this.gfnAlertMsg("msg", "MSG_009", ["수도구분 \n"]);
        				return false;

        			}
        			if(this.gfnIsNull(this.dsWtspUseList.getColumn(i, "usePrnmntYmd"))){
        				cellIdx = this.divForm.form.Div05.form.divGrd.form.grdCtrtInfoList.getBindCellIndex("body", "usePrnmntYmd");
        				this.divForm.form.Div05.form.divGrd.form.grdCtrtInfoList.setFocus();
        				this.divForm.form.Div05.form.divGrd.form.grdCtrtInfoList.setCellPos(cellIdx, i);
        				this.gfnAlertMsg("msg", "MSG_009", ["사용예정일 \n"]);
        				return false;

        			}
        		}
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
        	var sCtrtChcYn = this.dsWtspMst.getColumn(0, "ctrtChcYn"); // 계약선택여부 여부
        	var sClmMtdCd = this.dsWtspMst.getColumn(0, "clmMtdCd"); // 청구방식코드
        	var sPstnSeCd = this.dsWtspMst.getColumn(0, "pstnSeCd"); // 지역구분코드
        	var sPayPicSmYn = this.dsWtspMst.getColumn(0, "payPicSmYn"); // 납부담당자동일여부

        	var sClmEml2 = this.dsWtspMst.getColumn(0, "acuntEml2"); // 청구이메일
        	var sTxivEml2 = this.dsWtspMst.getColumn(0, "etxivEmlAddr2"); // 세금계산서이메일

        	if(!this.gfnIsNull(sCtrtChcYn)){
        		this.rdoCtrtChcYn_onitemchanged(this.divForm.form.Div01.form.rdoCtrtChcYn);

        	}
        	if(!this.gfnIsNull(sClmMtdCd)){
        		this.rdoClmMtd_onitemchanged(this.divForm.form.Div04.form.rdoClmMtd);

        	}

        	if(!this.gfnIsNull(sPstnSeCd)){
        		this.cboRgn_onitemchanged(this.divForm.form.Div02.form.cboRgn);

        	}

        	if(!this.gfnIsNull(sPayPicSmYn)){
        		this.rdoPayPicSmYn_onitemchanged(this.divForm.form.Div04.form.rdoPayPicSmYn);

        	}

        	if(!this.gfnIsNull(sClmEml2)){
        		this.edtEml_onchanged(this.divForm.form.Div04.form.edtAcuntEmlAddr2);

        	}
        	if(!this.gfnIsNull(sTxivEml2)){
        		this.edtEml_onchanged(this.divForm.form.Div04.form.edtTxivEmlAddr2);

        	}

        	if(!this.gfnIsNull(this.aplyNo)){
        		this.divForm.form.Div01.form.Panel00.visible = true;
        		this.resetScroll();

        	}

        	/*
        		this.jobCd 아래에 해당되면 수도 사용내역 그리드 format id를 바꿔준다.
        		TAS00057	2161.검침완료
        		TAS00058	2181.현업접수
        		TAS00281	2182.승인
        		TAS00453	2183.통수
        		TAS00059	종료
        		TAS00278	2191.만족도조사
        	*/
        	if(this.gfnDecode(this.jobCd, "TAS00057", 1, "TAS00058", 1, "TAS00281", 1, "TAS00453", 1, "TAS00059", 1, "TAS00278", 1, 0) == 1){
        		this.divForm.form.Div05.form.divGrd.form.grdCtrtInfoList.setFormat("default2");

        	}

        	// 승인 이후부터 현장방문내역, 배관필요여부 보여줌
        	if(this.gfnDecode(this.jobCd, "TAS00281", 1, "TAS00453", 1, "TAS00059", 1, "TAS00278", 1, 0) == 1){
        		this.divForm.form.Div05.form.Panel06_02.visible = true;
        		this.divForm.form.Div05.form.Panel01_00.visible = true;

        		this.resetScroll();

        	}

        	// TAS00278 : 만족도조사일떄
        	if(this.jobCd == "TAS00278"){
        		this.divForm.form.divDgstfnExmn.visible = true;

        		this.resetScroll();

        	}

        	// this.jobCd 가 TAS00046, TAS10439 일때는 신청서 작성/보완 이라 이외에는 컴포넌트 readOnly 처리해줌.
        	if(this.jobCd != "TAS00046" && this.jobCd != "TAS00520"){
        		if(this.jobCd != "TAS00057"){
        			this.divForm.form.Div05.form.divGrd.form.grdCtrtInfoList.readonly = true;

        		}

        		var sDivFrom = this.divForm.form;

        		var arrDivComps = [sDivFrom.Div01, sDivFrom.Div02, sDivFrom.Div03, sDivFrom.Div04, sDivFrom.Div05
        							, sDivFrom.Div03.form.divEdtPop2, sDivFrom.Div04.form.divEdtPop, sDivFrom.Div01.form.divEdtPop00];

        		arrDivComps.forEach(oDiv => {
        			Array.from(oDiv.form.components).forEach(oComp => {
        				fnReadonly.call(this, oComp);
        			});
        		});

        		// 내부함수호출
        		function fnReadonly (oComp, bReadonly) {
        			if (oComp instanceof nexacro.Div) {
        				fnReadonly.call(this, oComp.form);
        			} else {
        				if (oComp instanceof nexacro.Static) return;
        				if (oComp instanceof nexacro.Panel) return;
        				if (oComp instanceof nexacro.TextArea){
        					if(oComp.id.indexOf("txtGrndsVstCn") > -1){
        						if(this.jobCd == "TAS00281"){
        							return;

        						}
        					}else{
        						return;

        					}
        				}
        				if (oComp instanceof nexacro.Radio) {
        					if(oComp.id.indexOf("rdoPipNeedYn") > -1){
        						if(this.jobCd == "TAS00281"){
        							return;

        						}
        					}
        					try {
        						// readonly 처리할거
        						oComp.readonly = !bReadonly;

        						return;
        					} catch(e) {
        						trace ("readonly 속성없음");
        					}
        				}
        				if (oComp instanceof nexacro.Button) {
        					if(oComp.id.indexOf("btnMin") > -1) return;
        					if(oComp.id.indexOf("Sample") > -1) return;
        					try {
        						// enable 처리할거
        						oComp.enable = bReadonly;

        						return;
        					} catch(e) {
        						trace ("enable속성없음");
        					}
        				}

        				try {
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
        		posTop2 = 308;

        	}else{
        		posTop1 = 12;
        		posTop2 = 258;

        	}

        	this.divQuick.top = e.pos + posTop1;
        	this.divBtn.top = e.pos + posTop2;
        };

        /**************************************************************************
         * @name : cboRgn_onitemchanged
         * @description : 지역구분 콤보 수정 완료 시
         ***************************************************************************/
        this.cboRgn_onitemchanged = function(obj,e)
        {
        	var objVal = obj.value;
        	var strFilter = "";

        	if(this.gfnIsNull(objVal)){
        		strFilter = "cdId == ''";

        	}else{
        		strFilter = "cdId == '' || uprCd == '" + objVal + "'";

        	}

        	this.dsBldgSeList.filter(strFilter);

        	// 1일때만 초기화해줌.
        	if(this.cboRgnSe == "1"){
        		this.divForm.form.Div02.form.cboBldg.index = 0;

        	}

        };

        /**************************************************************************
         * @name : rdoCtrtChcYn_onitemchanged
         * @description : 계약선택여부 수정 완료 시
         ***************************************************************************/
        this.rdoCtrtChcYn_onitemchanged = function(obj,e)
        {
        	var objVal = obj.value;

        	/*
        		0 : 수기입력
        		1 : 계약선택
        	*/
        	if(objVal == "0"){
        		this.divForm.form.Div01.form.Panel01_01.visible = false;	// 계약번호
        		this.divForm.form.Div01.form.Panel01_01_00.visible = false; // 계약명
        		this.divForm.form.Div02.form.Panel06.visible = false;		// 위치정보(룸번호)
        		this.divForm.form.Div01.form.Panel04.visible = false; 		// 회사명
        		// this.divForm.form.Div04.form.Panel00_03.visible = false;	// 청구고객번호

        		this.divForm.form.Div01.form.Panel01_01_02.visible = true;	// 계약번호(수기입력)
        		this.divForm.form.Div02.form.Panel07.visible = true;		// 수도사용위치(수기입력)

        		// 고객정보 비활성화
        		this.divForm.form.sub_tit03.visible = false;
        		this.divForm.form.Div03.visible = false;

        	}else {
        		this.divForm.form.Div01.form.Panel01_01.visible = true;
        		this.divForm.form.Div01.form.Panel01_01_00.visible = true;
        		this.divForm.form.Div02.form.Panel06.visible = true;
        		this.divForm.form.Div01.form.Panel04.visible = true;
        		// this.divForm.form.Div04.form.Panel00_03.visible = true;

        		this.divForm.form.Div01.form.Panel01_01_02.visible = false;
        		this.divForm.form.Div02.form.Panel07.visible = false;

        		// 고객정보 활성화
        		this.divForm.form.sub_tit03.visible = true;
        		this.divForm.form.Div03.visible = true;

        	}

        	this.resetScroll();

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

        	this.dsWtspMst.setColumn(0, "ctrtNo", "1234");
        	this.dsWtspMst.setColumn(0, "ctrtNm", "테스트 계약명~");
        	this.dsWtspMst.setColumn(0, "pstnInfoRnb", "룸번호~1-2-3");

        	this.dsWtspMst.setColumn(0, "bzentyNm", "업체명");
        	this.dsWtspMst.setColumn(0, "rprsvNm", "대표자명");
        	this.dsWtspMst.setColumn(0, "rprsTelno", "010-9999-9999");
        	this.dsWtspMst.setColumn(0, "brno", "brno-test");
        	this.dsWtspMst.setColumn(0, "crno", "crno-test");
        	this.dsWtspMst.setColumn(0, "tpbizNm", "업종명");
        	this.dsWtspMst.setColumn(0, "bzcndNm", "업태명");
        };

        /**************************************************************************
         * @name : btnBuilcAddr_onclick
         * @description : 주소찾기 버튼 클릭 시
         ***************************************************************************/
        this.btnBuilcAddr_onclick = function(obj,e)
        {
        	alert("우편번호 찾기!!! 임시데이터");

        	this.dsWtspMst.setColumn(0, "custZip", "11111");
        	this.dsWtspMst.setColumn(0, "custAddr", "테스트 주소~");
        	this.dsWtspMst.setColumn(0, "custDtlAddr", "101동101호");

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

        	this.dsWtspMst.setColumn(0, "clmZip", "22222");
        	this.dsWtspMst.setColumn(0, "clmAddr", "테스트 주소~");
        	this.dsWtspMst.setColumn(0, "clmDtlAddr", "101동101호");

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
        		CTL00094	임시저장
        		CTL00095	신청
        		CTL00821	종료
        		CTL01004	신청취소
        		CTL00096	접수
        		CTL00097	담당자변경
        		CTL00099	담당자지정완료
        		CTL00881	미처리종료
        		CTL01031	재신청
        		CTL01032	미처리종료
        		CTL00110	검침완료
        		CTL00623	담당자변경
        		CTL00883	미처리종료
        		CTL01033	보완요청
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

        	// 임시저장, 신청취소, 접수, 담당자지정완료, 보완요청, 현업접수, 승인, 처리완료
        	if(vBtnCd == "CTL00094" || vBtnCd == "CTL01004" || vBtnCd == "CTL00096" || vBtnCd == "CTL00099"
        	  || vBtnCd == "CTL01033" || vBtnCd == "CTL00111" || vBtnCd == "CTL11130" || vBtnCd == "CTL00687" || vBtnCd == "CTL00252"){
        		if(vBtnCd == "CTL00687"){
        			if(this.gfnIsNull(this.dsWtspMst.getColumn(0, "pipNeedYn"))){
        				this.gfnAlertMsg("msg", "MSG_009", ["배관필요여부 \n"]);
        				return;
        			}
        		}

        		this.vStrSvcId  = "wtspUseAplcfmWrtTmprStrg";
        		this.vStrSvcUrl = "wtsp/wtspUseAplcfmWrtTmprStrg.do";

        	}else if(vBtnCd == "CTL00095" || vBtnCd == "CTL01031"){ // 신청서작성 - 신청, 신청서보완 - 재신청
        		// validation check
        		var res = this.fnValiChk();
        		if(!res){
        			return;

        		}

        		if(vBtnCd == "CTL00095"){
        			// 신청 버튼 클릭 시 접속정보 세팅 추가
        			if(this.gfnIsNull(this.dsMst.getColumn(0, "cntnIstr"))){ // 접속기기
        				this.dsMst.setColumn(0, "cntnIstr", this.objApp.gdsUser.getColumn(0, "device"));

        			}
        			if(this.gfnIsNull(this.dsMst.getColumn(0, "cntnBrwsr"))){ // 접속브라우저
        				this.dsMst.setColumn(0, "cntnBrwsr", this.objApp.gdsUser.getColumn(0, "webKind"));

        			}
        			if(this.gfnIsNull(this.dsMst.getColumn(0, "cntnVer"))){ // 브라우저버전
        				this.dsMst.setColumn(0, "cntnVer", this.objApp.gdsUser.getColumn(0, "webVer"));

        			}
        		}

        		this.vStrSvcId  = "wtspUseAplcfmWrtTmprStrg";
        		this.vStrSvcUrl = "wtsp/wtspUseAplcfmWrtTmprStrg.do";

        	}else if(vBtnCd == "CTL00821" || vBtnCd == "CTL00881" || vBtnCd == "CTL01032"
        	  || vBtnCd == "CTL00883" || vBtnCd == "CTL00884"){ // 신청서작성 - 종료 || 담당자접수 - 미처리종료 || 보완요청 - 미처리종료 || 검침완료 - 미처리종료 || 승인 - 미처리종료
        		// 신규입력일때 종료 버튼 클릭 시 화면만 닫아줌.
        		if(this.dsWtspMst.getRowType(0) == Dataset.ROWTYPE_INSERT){
        			this.gfnConfirmMsg("endConfirm", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"], "", ["종료"]);

        			return;

        		}else{
        			this.vStrSvcId  = "wtspUseAplcfmWrtTmprStrg";
        			this.vStrSvcUrl = "wtsp/wtspUseAplcfmWrtTmprStrg.do";

        		}

        	}else if(vBtnCd == "CTL00097" || vBtnCd == "CTL00623" || vBtnCd == "CTL00253"){ // 담당자변경, 담당자변경, 담당자변경
        		alert("담당자변경 팝업 완료 시 연결 예정!!");
        		return;

        	}else if(vBtnCd == "CTL00110"){
        		if(this.dsWtspUseList.getRowCount() > 0){
        			var cellIdx = -1;
        			for(var i = 0; i < this.dsWtspUseList.getRowCount(); i++){
        				if(this.gfnIsNull(this.dsWtspUseList.getColumn(i, "rmtqtIdntyYmd"))){
        					cellIdx = this.divForm.form.Div05.form.divGrd.form.grdCtrtInfoList.getBindCellIndex("body", "rmtqtIdntyYmd");
        					this.divForm.form.Div05.form.divGrd.form.grdCtrtInfoList.setFocus();
        					this.divForm.form.Div05.form.divGrd.form.grdCtrtInfoList.setCellPos(cellIdx, i);
        					this.gfnAlertMsg("msg", "MSG_009", ["검침일 \n"]);
        					return;

        				}
        				if(this.gfnIsNull(this.dsWtspUseList.getColumn(i, "rmtqt"))){
        					cellIdx = this.divForm.form.Div05.form.divGrd.form.grdCtrtInfoList.getBindCellIndex("body", "rmtqt");
        					this.divForm.form.Div05.form.divGrd.form.grdCtrtInfoList.setFocus();
        					this.divForm.form.Div05.form.divGrd.form.grdCtrtInfoList.setCellPos(cellIdx, i);
        					this.gfnAlertMsg("msg", "MSG_009", ["검침값 \n"]);
        					return;

        				}
        				if(this.gfnIsNull(this.dsWtspUseList.getColumn(i, "rmtqtUnit"))){
        					cellIdx = this.divForm.form.Div05.form.divGrd.form.grdCtrtInfoList.getBindCellIndex("body", "rmtqtUnit");
        					this.divForm.form.Div05.form.divGrd.form.grdCtrtInfoList.setFocus();
        					this.divForm.form.Div05.form.divGrd.form.grdCtrtInfoList.setCellPos(cellIdx, i);
        					this.gfnAlertMsg("msg", "MSG_009", ["단위 \n"]);
        					return;

        				}
        			}
        		}

        		// 통수여부 세팅
        		this.dsWtspMst.setColumn(0, "thwhrYn", "1");

        		this.vStrSvcId  = "wtspUseAplcfmWrtTmprStrg";
        		this.vStrSvcUrl = "wtsp/wtspUseAplcfmWrtTmprStrg.do";

        	}else if(vBtnCd == "CTL00254"){ // 설문응답완료
        		this.vStrSvcId  = "wtspUseAplcfmWrtTmprStrg";
        		this.vStrSvcUrl = "wtsp/wtspUseAplcfmWrtTmprStrg.do";

        		this.dsDgstfnExmn.copyData(this.divForm.form.divDgstfnExmn.form.dsDgstfn);

        		for(var i = 0; i < this.dsDgstfnExmn.getRowCount(); i++){
        			// 설문여부 Y값인경우에만 넣어줌.
        			if(!this.gfnIsNull(this.dsDgstfnExmn.getColumn(i, "dgstfnExmnYn")) && this.dsDgstfnExmn.getColumn(i, "dgstfnExmnYn") == "Y"){
        				var dgstfnNo = this.dsDgstfnExmn.getColumn(i, "no");
        				var dgstfnCn = this.dsDgstfnExmn.getColumn(i, "dgstfnCn");
        				var dgstfnScr = this.dsDgstfnExmn.getColumn(i, "dgstfnScr");

        				// 만족도 조사 항목 데이터 세팅
        				switch(dgstfnNo){
        					case "1" : this.dsWtspMst.setColumn(0, "dgstfnArtclNm1", dgstfnScr); break;
        					case "2" : this.dsWtspMst.setColumn(0, "dgstfnArtclNm2", dgstfnScr); break;
        					case "3" : this.dsWtspMst.setColumn(0, "dgstfnArtclNm3", dgstfnScr); break;
        					case "4" : this.dsWtspMst.setColumn(0, "dgstfnExmnCn1", dgstfnCn); break;
        					case "5" : this.dsWtspMst.setColumn(0, "dgstfnExmnCn2", dgstfnCn); break;
        					case "6" : this.dsWtspMst.setColumn(0, "dgstfnExmnCn3", dgstfnCn); break;

        					default :

        						break;
        				}
        			}
        		}
        	}else{
        		return;

        	}

        	var curTasId = wfInfo.jobPrcsPrgrsSeCd;

        	if(this.gfnIsNull(this.dsWtspMst.getColumn(0, "bfrJobCd"))){
        		this.dsWtspMst.setColumn(0, "bfrJobCd", curTasId);

        	}

        	// 넘겨줄 데이터 세팅
        	this.dsWtspMst.setColumn(0, "jobCd", wfInfo.nextStepJobPrcsPrgrsSeCd);
        	this.dsWtspMst.setColumn(0, "aplySeCd", this.aplySeCd);

        	if(this.gfnIsNull(this.dsWtspMst.getColumn(0, "docCd"))){
        		this.dsWtspMst.setColumn(0, "docCd", "TSPDOC210"); // 공통코드 TSPDOC210 : 수도사용신청

        	}

        	// 위치구분코드
        	// 건물코드가 있을땐 건물코드, 건물코드가 없고 위치코드가 있을때 위치코드, 둘 다 없을때 TSPLOCWAT(기본값)
        	var sPstnSeCd = "";
        	if(!this.gfnIsNull(this.dsWtspMst.getColumn(0, "bldgSeCd"))){
        		sPstnSeCd = this.dsWtspMst.getColumn(0, "bldgSeCd");

        	}else if(!this.gfnIsNull(this.dsWtspMst.getColumn(0, "pstnSeCd"))){
        		sPstnSeCd = this.dsWtspMst.getColumn(0, "pstnSeCd");

        	}else{
        		sPstnSeCd = "TSPLOCWAT";

        	}

        	if(!this.gfnIsNull(sPstnSeCd)){
        		this.dsWtspMst.addColumn("savePstn", "string");
        		this.dsWtspMst.setColumn(0, "savePstn", sPstnSeCd);
        	}

        	// 시설운영마스터 데이터 세팅
        	if(!this.gfnIsNull(this.aplyNo)){
        		this.dsMst.setColumn(0, "aplyNo", this.aplyNo);

        	}
        	this.dsMst.setColumn(0, "taskCd"    , wfInfo.jobPrcsPrgrsSeCd        );  // 현재업무코드
        	this.dsMst.setColumn(0, "nextTaskCd", wfInfo.nextStepJobPrcsPrgrsSeCd);  // 다음업무코드

        	this.dsMst.setColumn(0, "aplySeCd", this.aplySeCd);  // 신청구분코드

        	if(this.gfnIsNull(this.dsMst.getColumn(0, "docCd"))){
        		this.dsMst.setColumn(0, "docCd", "TSPDOC210"); // 공통코드 TSPDOC210 : 수도사용신청

        	}

        	var curDt = this.gfnGetDate("time");
        	if(this.gfnIsNull(this.dsWtspMst.getColumn(0, "aplyDt"))){
        		this.dsWtspMst.setColumn(0, "aplyDt", curDt);

        	}
        	if(this.gfnIsNull(this.dsMst.getColumn(0, "aplyDt"))){
        		this.dsMst.setColumn(0, "aplyDt", curDt);

        	}

        	// 종료 || 담당자접수 - 미처리종료 || 신청저보완 - 미처리종료 || 검침완료 - 미처리종료 || 승인 - 미처리종료 || 처리완료
        	if(vBtnCd == "CTL00821" || vBtnCd == "CTL00881" || vBtnCd == "CTL01032" || vBtnCd == "CTL00883" || vBtnCd == "CTL00884" || vBtnCd == "CTL00252"){
        		// 종료일자 세팅
        		this.dsWtspMst.setColumn(0, "endDt", curDt);
        		this.dsMst.setColumn(0, "endDt", curDt);

        	}

        	// 접수
        	if(vBtnCd == "CTL00096"){
        		// 접수일자 세팅
        		this.dsMst.setColumn(0, "rcptDt", curDt);

        	}

        	// 처리완료시 erp여부 넣어줌.
        	if(vBtnCd == "CTL00252"){
        		this.dsWtspMst.setColumn(0, "erpInptYn", "1");

        	}

        	// 설문응답완료
        	if(vBtnCd == "CTL00254"){
        		this.dsWtspMst.setColumn(0, "dgstfnRspnsDt", curDt);
        		this.dsWtspMst.setColumn(0, "dgstfnRspnsYn", "1");

        	}

        	// 청구이메일 세팅
        	if(!this.gfnIsNull(this.dsWtspMst.getColumn(0, "acuntEml1")) && !this.gfnIsNull(this.dsWtspMst.getColumn(0, "acuntEml2"))){
        		var sAcuntEml = this.dsWtspMst.getColumn(0, "acuntEml1") + "@" + this.dsWtspMst.getColumn(0, "acuntEml2");

        		this.dsWtspMst.setColumn(0, "acuntEml", sAcuntEml);

        	}

        	// 세금계산서이메일 세팅
        	if(!this.gfnIsNull(this.dsWtspMst.getColumn(0, "etxivEmlAddr1")) && !this.gfnIsNull(this.dsWtspMst.getColumn(0, "etxivEmlAddr2"))){
        		var sTxivEml = this.dsWtspMst.getColumn(0, "etxivEmlAddr1") + "@" + this.dsWtspMst.getColumn(0, "etxivEmlAddr2");

        		this.dsWtspMst.setColumn(0, "etxivEmlAddr", sTxivEml);

        	}

        	// 계약선택여부 1 : 계약선택, 0 : 수기입력
        	if(this.dsWtspMst.getColumn(0, "ctrtChcYn") == "1"){
        		// 계약번호(수기입력), 수도사용위치(수기입력) null 넣어줌.
        		this.dsWtspMst.setColumn(0, "hwrtInptCtrtNo", null);
        		this.dsWtspMst.setColumn(0, "hwrtInptWtspUsePstnCn", null);

        	}else if(this.dsWtspMst.getColumn(0, "ctrtChcYn") == "0"){
        		// 계약번호, 계약명, 위치정보(룸번호) null 넣어줌.
        		this.dsWtspMst.setColumn(0, "ctrtNo", null);
        		this.dsWtspMst.setColumn(0, "ctrtNm", null);
        		this.dsWtspMst.setColumn(0, "pstnInfoRnb", null);

        		// 수기입력 시 고객정보 null 넣어줌
        		this.dsWtspMst.setColumn(0, "bzentyNm", null);
        		this.dsWtspMst.setColumn(0, "rprsvNm", null);
        		this.dsWtspMst.setColumn(0, "rprsTelno", null);
        		this.dsWtspMst.setColumn(0, "brno", null);
        		this.dsWtspMst.setColumn(0, "crno", null);
        		this.dsWtspMst.setColumn(0, "tpbizNm", null);
        		this.dsWtspMst.setColumn(0, "bzcndNm", null);
        		this.dsWtspMst.setColumn(0, "custZip", null);
        		this.dsWtspMst.setColumn(0, "custAddr", null);
        		this.dsWtspMst.setColumn(0, "custDtlAddr", null);
        		// 여기 사업자등록증 삭제해줘야함.

        	}

        	// 청구방식 - 지로용지일때 청구메일 null로 넘겨줌.
        	if(this.dsWtspMst.getColumn(0, "clmMtdCd") == "0"){
        		this.dsWtspMst.setColumn(0, "acuntEml", null);

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

        	if(this.dsMst.getColumn(0, "clmZip") != this.dsWtspMst.getColumn(0, "clmZip")){
        		this.dsMst.setColumn(0, "clmZip", this.dsWtspMst.getColumn(0, "clmZip"));	// 우편번호

        	}
        	if(this.dsMst.getColumn(0, "clmAddr") != this.dsWtspMst.getColumn(0, "clmAddr")){
        		this.dsMst.setColumn(0, "clmAddr", this.dsWtspMst.getColumn(0, "clmZip"));	// 청구주소

        	}
        	if(this.dsMst.getColumn(0, "clmDtlAddr") != this.dsWtspMst.getColumn(0, "clmDtlAddr")){
        		this.dsMst.setColumn(0, "clmDtlAddr", this.dsWtspMst.getColumn(0, "clmDtlAddr"));		// 청구상세주소

        	}

        	// 수정된 내역이 있는지 체크
        	if(!this.gfnDsIsUpdated(this.dsWtspMst) && !this.gfnDsIsUpdated(this.dsAtfl) && !this.gfnDsIsUpdated(this.dsCnvyMttr)){
        		this.gfnAlertMsg("msg", "MSG_004", [""]);
        		return;

        	}

        	if(vBtnCd == "CTL01004"){ // 신청취소
        		this.gfnConfirmMsg("aplyCancelConfirm", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"], "", [vBtnNm]);

        	}else{
        		this.gfnConfirmMsg("save_confirm", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"], "", [vBtnNm]);

        	}
        }

        /**************************************************************************
         * @name : divGrd_btnGrdAdd_onclick
         * @description : 그리드 추가 버튼 클릭
         ***************************************************************************/
        this.divGrd_btnGrdAdd_onclick = function(obj,e)
        {
        	var nRow = this.dsWtspUseList.addRow();


        };

        /**************************************************************************
         * @name : divGrd_btnGrdDel_onclick
         * @description : 그리드 삭제 버튼 클릭
         ***************************************************************************/
        this.divGrd_btnGrdDel_onclick = function(obj,e)
        {
        	if(this.dsWtspUseList.getRowCount() < 1){
        		this.gfnAlertMsg("msg", "MSG_011", ["삭제할 자료가 없습니다."]);
        		return;

        	}

        	var checkChk = this.dsWtspUseList.findRow("chk", "1");

        	if(checkChk < 0){
        		this.gfnAlertMsg("msg", "MSG_011", ["체크박스를 체크하신 후 \n버튼을 클릭해 주세요."]);
        		return;

        	}

        	this.gfnConfirmMsg("delConfirm", "MSG_011", "msgCallback", ["확인", "취소"], ["Y", "N"], "", ["선택한 자료를 삭제 하시겠습니까?"]);

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
        	this.gfnDownloadSetting(this.RaonkUpload, this.dsAtfl);

        	// 첨부 파일 표출용 DS 설정
        	for(var i = 0; i < this.dsAtfl.rowcount; i++) {
        		// 첨부 파일 표출용 DS 설정
        		this.cfnSetAtflExprs( this.dsAtfl.getColumn(i, "orgnlFileNm")
        		                    + '(' + this.dsAtfl.getColumn(i, "fileSz") + ')'  // 파일풀명
        							, this.dsAtfl.getColumn(i, "orgnlFileNm")         // 원본파일명
        							, this.dsAtfl.getColumn(i, "fileSz"     )         // 파일크기
        							, this.dsAtfl.getColumn(i, "colId"      )         // 컬럼ID
        							);
        	}
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









        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onvscroll",this.form_onvscroll,this);
            this.divForm.form.btnMinTitle.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.Div01.form.rdoCtrtChcYn.addEventHandler("onitemchanged",this.rdoCtrtChcYn_onitemchanged,this);
            this.divForm.form.Div01.form.divEdtPop00.form.btnCtrt.addEventHandler("onclick",this.btnCtrt_onclick,this);
            this.divForm.form.Div02.form.cboRgn.addEventHandler("onitemchanged",this.cboRgn_onitemchanged,this);
            this.divForm.form.Div02.form.cboRgn.addEventHandler("onitemclick",this.cboRgn_onitemclick,this);
            this.divForm.form.Div03.form.divEdtPop2.form.btnBuilcAddr.addEventHandler("onclick",this.btnBuilcAddr_onclick,this);
            this.divForm.form.Div03.form.btnBuilcFile.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.Div03.form.grdBuilc.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div03.form.grdBuilc.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div04.form.rdoPayPicSmYn.addEventHandler("onitemchanged",this.rdoPayPicSmYn_onitemchanged,this);
            this.divForm.form.Div04.form.rdoPayPicSmYn.addEventHandler("onitemclick",this.rdoPayPicSmYn_onitemclick,this);
            this.divForm.form.Div04.form.rdoClmMtd.addEventHandler("onitemchanged",this.rdoClmMtd_onitemchanged,this);
            this.divForm.form.Div04.form.divEdtPop.form.btnClmAddr.addEventHandler("onclick",this.btnClmAddr_onclick,this);
            this.divForm.form.Div04.form.sta00_00.addEventHandler("onclick",this.divForm_Div05_sta00_onclick,this);
            this.divForm.form.Div04.form.btnPayPicPrvcClctUtztnWtcsFile.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.Div04.form.grdPayPicPrvcClctUtztnWtcs.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div04.form.grdPayPicPrvcClctUtztnWtcs.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div04.form.sta00.addEventHandler("onclick",this.divForm_Div05_sta00_onclick,this);
            this.divForm.form.Div04.form.edtAcuntEmlAddr2.addEventHandler("onchanged",this.edtEml_onchanged,this);
            this.divForm.form.Div04.form.cboAcuntEmlAddr.addEventHandler("onitemchanged",this.cboEml_onitemchanged,this);
            this.divForm.form.Div04.form.edtTxivEmlAddr2.addEventHandler("onchanged",this.edtEml_onchanged,this);
            this.divForm.form.Div04.form.cboTxivEmlAddr.addEventHandler("onitemchanged",this.cboEml_onitemchanged,this);
            this.divForm.form.Div05.form.btnGrdDel.addEventHandler("onclick",this.divGrd_btnGrdDel_onclick,this);
            this.divForm.form.Div05.form.btnGrdAdd.addEventHandler("onclick",this.divGrd_btnGrdAdd_onclick,this);
            this.divForm.form.Div05.form.sta00.addEventHandler("onclick",this.divForm_Div05_sta00_onclick,this);
            this.divForm.form.Div05.form.Static03_01_01.addEventHandler("onclick",this.divForm_Div04_Static00_onclick,this);
            this.divForm.form.Div05.form.grdWstwtPrcsFcltCpocsc.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div05.form.grdWstwtPrcsFcltCpocsc.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div05.form.btnWstwtPrcsFcltCpocscFile.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.Div05.form.chkUtztnTrmsAgreYn.addEventHandler("onclick",this.divForm_Div05_chk04_01_onclick,this);
            this.divForm.form.Div05.form.sta00_00.addEventHandler("onclick",this.divForm_Div05_sta00_onclick,this);
            this.divForm.form.Div05.form.rdoCtnMttrAgreYn.addEventHandler("onitemchanged",this.divForm_Div05_rdo00_onitemchanged,this);
            this.divForm.form.Div05.form.btnCustInfoCnfdocFile.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.Div05.form.grdCustInfoCnfdoc.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div05.form.grdCustInfoCnfdoc.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div05.form.divGrd00.form.Static00_00.addEventHandler("onclick",this.divForm_Div04_Static00_onclick,this);
            this.divForm.form.Div05.form.btnstaRmtqtPhotoFile.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.Div05.form.grdstaRmtqtPhoto.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div05.form.grdstaRmtqtPhoto.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.btnMinAplyPstn.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.btnMinAplcntInfo.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.btnMinCustInfo.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.btnMinClmInfo.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.btnMinWtspAplyInfo.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divQuick.form.btn01.addEventHandler("onclick",this.btnQuick_onclick,this);
            this.divQuick.form.btn02.addEventHandler("onclick",this.btnQuick_onclick,this);
            this.divQuick.form.btn03.addEventHandler("onclick",this.btnQuick_onclick,this);
            this.divQuick.form.btn04.addEventHandler("onclick",this.btnQuick_onclick,this);
            this.divQuick.form.btn05.addEventHandler("onclick",this.btnQuick_onclick,this);
            this.divBtn.form.btn00_00_00_00.addEventHandler("onclick",this.divBtn_btn00_00_onclick,this);
            this.divBtn.form.btn00_00_00.addEventHandler("onclick",this.divBtn_btn00_00_onclick,this);
            this.divBtn.form.btn00_00_01.addEventHandler("onclick",this.divBtn_btn00_00_onclick,this);
            this.divBtn.form.btn00_00.addEventHandler("onclick",this.divBtn_btn00_00_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsMain_onvaluechanged,this);
            this.dsWtspMst.addEventHandler("onvaluechanged",this.dsMain_onvaluechanged,this);
            this.dsMst.addEventHandler("onvaluechanged",this.dsMst_onvaluechanged,this);
            this.dsMst.addEventHandler("onload",this.dsMst_onload,this);
            this.dsAtfl.addEventHandler("onload",this.dsAtfl_onload,this);
            this.dsAtflDown.addEventHandler("onload",this.dsAtfl_onload,this);
            this.dsHstryInfo.addEventHandler("onvaluechanged",this.dsMain_onvaluechanged,this);
        };
        this.loadIncludeScript("LIF055M00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
