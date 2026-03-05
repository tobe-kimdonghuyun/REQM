(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LIF080M00");
            this.set_titletext("신청서작성");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"bfrJobCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobNm\" type=\"STRING\" size=\"256\"/><Column id=\"cpstArtclCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyKndCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyKndNm\" type=\"STRING\" size=\"256\"/><Column id=\"endCd\" type=\"STRING\" size=\"256\"/><Column id=\"endNm\" type=\"STRING\" size=\"256\"/><Column id=\"docCd\" type=\"STRING\" size=\"256\"/><Column id=\"docNm\" type=\"STRING\" size=\"256\"/><Column id=\"srvcCd\" type=\"STRING\" size=\"256\"/><Column id=\"srvcNm\" type=\"STRING\" size=\"256\"/><Column id=\"srvcAplyInfoIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"rcptMdaCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsDt\" type=\"STRING\" size=\"256\"/><Column id=\"actlEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"actlBgngDt\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/><Column id=\"aplyDt\" type=\"STRING\" size=\"256\"/><Column id=\"rcptDt\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"mdfcnDt\" type=\"STRING\" size=\"256\"/><Column id=\"dmndPrdBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"dmndPrdEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"acrdCmptnDt\" type=\"STRING\" size=\"256\"/><Column id=\"planBgngDt\" type=\"STRING\" size=\"256\"/><Column id=\"planEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"cmptnHpeDt\" type=\"STRING\" size=\"256\"/><Column id=\"custTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"custTypeNm\" type=\"STRING\" size=\"256\"/><Column id=\"bldgSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"bldgSeNm\" type=\"STRING\" size=\"256\"/><Column id=\"zoneSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"zoneSeNm\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstnInfoRnb\" type=\"STRING\" size=\"256\"/><Column id=\"pstnInfoRnbNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyTtlNm\" type=\"STRING\" size=\"256\"/><Column id=\"actnPlanCn\" type=\"STRING\" size=\"256\"/><Column id=\"srvcDmndCnIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"srvcDmndCn\" type=\"STRING\" size=\"256\"/><Column id=\"srvcAplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"srvcAplySeNm\" type=\"STRING\" size=\"256\"/><Column id=\"splmntDmndRsnCn\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtChcYn\" type=\"STRING\" size=\"256\"/><Column id=\"prvcClctEsntlAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"prvcClctEsntlAgreYn2\" type=\"STRING\" size=\"256\"/><Column id=\"wtohAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"dptyRegYn\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtHwrtInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"prvcClctChcAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntHwrtInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptAplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptPstnInfoCn\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptCtrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrNm\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrTelno\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrMblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"ownrId\" type=\"STRING\" size=\"256\"/><Column id=\"ownrNm\" type=\"STRING\" size=\"256\"/><Column id=\"ownrInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"ownrInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"ownrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"ownrDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"ownrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"ownrJobGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrJobGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrJobGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtPrcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtPrcrJobGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"clrId\" type=\"STRING\" size=\"256\"/><Column id=\"clrNm\" type=\"STRING\" size=\"256\"/><Column id=\"mdfrId\" type=\"STRING\" size=\"256\"/><Column id=\"mdfrNm\" type=\"STRING\" size=\"256\"/><Column id=\"payPicSmYn\" type=\"STRING\" size=\"256\"/><Column id=\"payPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"payPicTelno\" type=\"STRING\" size=\"256\"/><Column id=\"payPicMblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"clmMtdCd\" type=\"STRING\" size=\"256\"/><Column id=\"clmCustCd\" type=\"STRING\" size=\"256\"/><Column id=\"clmZip\" type=\"STRING\" size=\"256\"/><Column id=\"clmAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmDtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmEml\" type=\"STRING\" size=\"256\"/><Column id=\"clmEml1\" type=\"STRING\" size=\"256\"/><Column id=\"clmEml2\" type=\"STRING\" size=\"256\"/><Column id=\"txivEml\" type=\"STRING\" size=\"256\"/><Column id=\"txivEml1\" type=\"STRING\" size=\"256\"/><Column id=\"txivEml2\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnRspnsYn\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnRspnsDt\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclNm1\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclNm2\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclNm3\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnExmnCn1\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnExmnCn2\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnExmnCn3\" type=\"STRING\" size=\"256\"/><Column id=\"cnvyMttrCn\" type=\"STRING\" size=\"256\"/><Column id=\"prtcZoneAdpsDpctFrtsdPath\" type=\"STRING\" size=\"256\"/><Column id=\"prtcZoneAdpsDpctBaksdPath\" type=\"STRING\" size=\"256\"/><Column id=\"carDrvnLcnDpctPath\" type=\"STRING\" size=\"256\"/><Column id=\"bizcrdPhotoFilePath\" type=\"STRING\" size=\"256\"/><Column id=\"fbctnDcmntPblcnPrdctSpcfatPath\" type=\"STRING\" size=\"256\"/><Column id=\"insrncJoinPrdocPath\" type=\"STRING\" size=\"256\"/><Column id=\"elcttrFrtPhotoPath\" type=\"STRING\" size=\"256\"/><Column id=\"elcttrRarPhotoPath\" type=\"STRING\" size=\"256\"/><Column id=\"elcttrFlkPhotoPath\" type=\"STRING\" size=\"256\"/><Column id=\"payPicPrvcClctUtztnWtcsPath\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCn", this);
            obj._setContents("<ColumnInfo><Column id=\"sysSe\" type=\"STRING\" size=\"256\"/><Column id=\"utztnArtcl\" type=\"STRING\" size=\"256\"/><Column id=\"prps\" type=\"STRING\" size=\"256\"/><Column id=\"prd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"sysSe\">입주자서비스\\n포털</Col><Col id=\"utztnArtcl\">[필수]납부담당자 이름, 납부담당자 일반전화번호&lt;br&gt;</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAplyKndList", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBldgSeList", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMst", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeNm\" type=\"STRING\" size=\"256\"/><Column id=\"taskCd\" type=\"STRING\" size=\"256\"/><Column id=\"nextTaskCd\" type=\"STRING\" size=\"256\"/><Column id=\"pstnSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyDt\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"endCd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstnInfoRnb\" type=\"STRING\" size=\"256\"/><Column id=\"clmZip\" type=\"STRING\" size=\"256\"/><Column id=\"clmAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmDtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmWholAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmCustCd\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"rcptDt\" type=\"STRING\" size=\"256\"/><Column id=\"clrId\" type=\"STRING\" size=\"256\"/><Column id=\"dptyRegYn\" type=\"STRING\" size=\"256\"/><Column id=\"dmndDt\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptAplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptCtrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptPstnInfoCn\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtHwrtInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntHwrtInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtMvmnRgnPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"docCd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtChcYn\" type=\"STRING\" size=\"256\"/><Column id=\"wholJobBgngDt\" type=\"STRING\" size=\"256\"/><Column id=\"wholJobEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobNm\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobRsnCn\" type=\"STRING\" size=\"256\"/><Column id=\"bldgSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoCtrtrNm\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoPicCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobFldCd\" type=\"STRING\" size=\"256\"/><Column id=\"arptCstrnPicId\" type=\"STRING\" size=\"256\"/><Column id=\"lbsvcPbcprtPicId\" type=\"STRING\" size=\"256\"/><Column id=\"basctAplcfmInfoId\" type=\"STRING\" size=\"256\"/><Column id=\"lbsvcTaskAgtRlvtYn\" type=\"STRING\" size=\"256\"/><Column id=\"lbsvcTaskMdtrId\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptRnb\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"docCd\"/><Col id=\"aplySeCd\"/><Col id=\"taskCd\"/><Col id=\"aplyNo\"/></Row></Rows>");
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


            obj = new Dataset("dataSet00", this);
            obj._setContents("<ColumnInfo><Column id=\"별칭\" type=\"STRING\" size=\"256\"/><Column id=\"내용\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEmlList", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divGuide","1590.00","135","450","385",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("false");
            obj.set_cssclass("div_GD_Tip");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","18.00","15","262","45",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_cssclass("btn_WF_Quick");
            this.divGuide.addChild(obj.name, obj);

            obj = new Static("sta00","18.00","122","375","50",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("1");
            obj.set_text("선택했을때 class : btn_WF_Quick_S 적용");
            this.divGuide.addChild(obj.name, obj);

            obj = new Button("btn00_00","18.00","68","262","45",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("2");
            obj.set_text("기본정보");
            obj.set_cssclass("btn_WF_Quick_S");
            this.divGuide.addChild(obj.name, obj);

            obj = new Button("Button00_00","20.00","205","34","34",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.divGuide.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","64.00","205","34","34",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divGuide.addChild(obj.name, obj);

            obj = new Static("sta00_00","20.00","255","375","50",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("5");
            obj.set_text("접혀있을때 class : btn_WF_ACPlus 로 접음");
            this.divGuide.addChild(obj.name, obj);

            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","divTitle:10",null,"8000","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickFrBg");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("divInfoGuide","1660.00","262","100%","300",null,null,null,null,"300",null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("서비스 흐름 및 작업방법 안내");
            obj.set_cssclass("div_WF_InfoGuide");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnSchClose",null,"10","34","34","10",null,null,null,null,null,this.divForm.form.divInfoGuide.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_ACPlus");
            this.divForm.form.divInfoGuide.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00","7","310","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("신청자정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinAplcntInfo","553","327","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02","517","310","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinAplcntInfo\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit01","7","310","100%","70",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div01","0","0","100%","459",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan03_01","10.00","98","300","144",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("18");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRgtrTelno\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel04_02_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtRgtrTelno","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("25");
            obj.set_readonly("true");
            obj.set_value("02-123-4567");
            obj.set_text("02-123-4567");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan02_","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRgtrNm\"/><PanelItem id=\"PanelItem02\" componentid=\"edtRgtrNm\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan02_02","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRgtrInstNm\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRgtrInstNm\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staRgtrTelno","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("17");
            obj.set_text("등록자 전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan03_02","10.00","98","300","144",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("20");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRgtrMblTelno\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel04_02_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staAplySeNm","10","98","300","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("신청구분 ");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Button("btnHstry","48","62","120","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("23");
            obj.set_text("과거신청이력불러오기");
            obj.set_fittocontents("width");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00","763","63","100%","56",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("22");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("spacebetween");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staAplySeNm\"/><PanelItem id=\"PanelItem01\" componentid=\"btnHstry\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan00_01","10.00","98","100%","101",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAplySeNm\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","112",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_background("pink");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan00_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staAplcntNm","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("4");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtAplcntNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_value("신청자 성명");
            obj.set_text("신청자 성명");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("10");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan01_02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staAplcntNm\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAplcntNm\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtAplySeNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staRgtrNm","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("11");
            obj.set_text("등록자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staAplcntInstNm","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("7");
            obj.set_text("신청자 회사명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtAplcntInstNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_value("회사명");
            obj.set_text("회사명");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_02","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staAplcntInstNm\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAplcntInstNm\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta00_00","20","20","100%","48",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("26");
            obj.set_text("전화번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 등록 및 수정이 가능합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel04_02_00","0","685","100%","98",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("24");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"edtRgtrTelno\"/><PanelItem id=\"PanelItem01\" componentid=\"sta00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staRgtrInstNm","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("13");
            obj.set_text("등록자 회사명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("16");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan02_\"/><PanelItem id=\"PanelItem02\" componentid=\"pan02_02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtRgtrInstNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            obj.set_value("회사명");
            obj.set_text("회사명");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staRgtrMblTelno","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("19");
            obj.set_text("등록자 휴대폰 번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtRgtrMblTelno","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("27");
            obj.set_readonly("true");
            obj.set_value("010-123-4567");
            obj.set_text("010-123-4567");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","20","20","100%","48",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("28");
            obj.set_text("휴대폰번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 등록 및 수정이 가능합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan03","0","60","100.00%","155",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("21");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan03_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan03_02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtRgtrNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("30");
            obj.set_readonly("true");
            obj.set_value("등록자 성명");
            obj.set_text("등록자 성명");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel04_02_00_00","0","685","100%","98",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("29");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"edtRgtrMblTelno\"/><PanelItem id=\"PanelItem01\" componentid=\"sta00_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_00","917","900","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("6");
            obj.set_text("청구 정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinClmInfo","538","902","34","30",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_00","1422","900","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("8");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinClmInfo\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit02","917","900","100%","70",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("9");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div02","0","558","100%","938",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("10");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staPayPicSmYn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("1");
            obj.set_text("납부담당자  동일여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan00_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPayPicSmYn\"/><PanelItem id=\"PanelItem03\" componentid=\"rdoPayPicSmYn\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staPayPicNm","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("3");
            obj.set_text("납부담당자 이름");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan01_01","10.00","98","300","126",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPayPicNm\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel04_02_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan01_02","10.00","98","300","1",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtPayPicNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("8");
            obj.set_readonly("false");
            obj.set_displaynulltext("납부담당자 성명  입력");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan03_01","10.00","98","300","144",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPayPicTelno\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel04_02_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staPayPicTelno","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("11");
            obj.set_text("납부담당자 일반전화번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staMblPayPicTelno","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("16");
            obj.set_text("납부담당자 휴대전화번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtPayPicTelno","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("12");
            obj.set_readonly("false");
            obj.set_displaynulltext("전화번호 입력");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel04_02_00_00","0","685","100%","98",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("14");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"edtPayPicTelno\"/><PanelItem id=\"PanelItem01\" componentid=\"sta00_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtPayPicMblTelno","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("17");
            obj.set_readonly("false");
            obj.set_displaynulltext("휴대전화번호 입력");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel04_02_00_00_00","0","685","100%","98",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("19");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"edtPayPicMblTelno\"/><PanelItem id=\"PanelItem01\" componentid=\"sta00_00_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan03_02","10.00","98","300","144",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("20");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staMblPayPicTelno\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel04_02_00_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staPayPicPrvcClctAgre","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("22");
            obj.set_text("납부담당자의 개인정보 수집 및  이용 동의서");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btnPayPicPrvcClctAgreSample","813","76","120","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("23");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btnPayPicPrvcClctAgreFile","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("24");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.getSetter("upcolid").set("payPicPrvcClctAgreFile");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panBtnFile","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("25");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnPayPicPrvcClctAgreSample\"/><PanelItem id=\"PanelItem00\" componentid=\"btnPayPicPrvcClctAgreFile\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panTitle","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("26");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPayPicPrvcClctAgre\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("27");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staPayPicPrvcClctAgreCnt","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
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
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem01\" componentid=\"staPayPicPrvcClctAgreCnt\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panBtnDel","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("31");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staAddr","0.00","0","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("34");
            obj.set_text("청구지우편번호/청구지주소");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Div("divEdtPop","780.00","635","305","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("35");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtZip","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.Div02.form.divEdtPop.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            obj.set_displaynulltext("우편번호 검색");
            this.divForm.form.Div02.form.divEdtPop.addChild(obj.name, obj);

            obj = new Button("btnPop","edtZip:-40","0","40","40",null,null,null,null,null,null,this.divForm.form.Div02.form.divEdtPop.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.divForm.form.Div02.form.divEdtPop.addChild(obj.name, obj);

            obj = new Edit("edtAddr","360","637","305","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("36");
            obj.set_readonly("true");
            obj.set_flexgrow("2");
            obj.set_displaynulltext("주소");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtDtlAddr","0.00","46","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("38");
            obj.set_displaynulltext("상세주소");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staClmSe","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("41");
            obj.set_text("청구방식");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan02_","10.00","98","300","110",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("42");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staClmSe\"/><PanelItem id=\"PanelItem03\" componentid=\"rdoClmSe\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Radio("rdoClmSe","127","203","100%","80",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("44");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("horizontal");
            var divForm_form_Div02_form_rdoClmSe_innerdataset = new nexacro.NormalDataset("divForm_form_Div02_form_rdoClmSe_innerdataset", obj);
            divForm_form_Div02_form_rdoClmSe_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">이메일(청구서스캔본송부)</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">지로용지(청구서원본방문수령)</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div02_form_rdoClmSe_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static03","507","1122","14","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("53");
            obj.set_text("@");
            obj.set_fittocontents("width");
            obj.set_textAlign("center");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel03","551","1140","300","172",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("45");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan02_02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan02_02_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staAcuntEmlAddr","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("46");
            obj.set_text("청구서 이메일주소");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan02_02_00","10.00","98","100%","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("47");
            obj.set_type("vertical");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staAcuntEmlAddr\"/><PanelItem id=\"PanelItem03\" componentid=\"panEmail\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtAcuntEmlAddr2","10.00","158","30%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("52");
            obj.set_readonly("false");
            obj.set_displaynulltext("이메일 주소 입력");
            obj.set_flexgrow("1");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staTxivEmlAddr","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("48");
            obj.set_text("세금계산서 이메일주소");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Combo("cboAcuntEmlAddr","200.00","128","30%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("54");
            obj.set_innerdataset("dsEmlList");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan02_02_00_00","10.00","98","100%","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("49");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTxivEmlAddr\"/><PanelItem id=\"PanelItem03\" componentid=\"panEmail00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtAcuntEmlAddr1","10.00","158","30%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("51");
            obj.set_readonly("false");
            obj.set_displaynulltext("이메일 주소 입력");
            obj.set_flexgrow("1");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panEmail","386","1172","100%","50",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("50");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"edtAcuntEmlAddr1\"/><PanelItem id=\"PanelItem03\" componentid=\"Static03\"/><PanelItem id=\"PanelItem02\" componentid=\"edtAcuntEmlAddr2\"/><PanelItem id=\"PanelItem04\" componentid=\"cboAcuntEmlAddr\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtTxivEmlAddr1","10.00","158","30%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("55");
            obj.set_readonly("false");
            obj.set_displaynulltext("이메일 주소 입력");
            obj.set_flexgrow("1");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static03_00","507","1122","14","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("56");
            obj.set_text("@");
            obj.set_fittocontents("width");
            obj.set_textAlign("center");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtTxivEmlAddr2","10.00","158","30%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("57");
            obj.set_readonly("false");
            obj.set_displaynulltext("이메일 주소 입력");
            obj.set_flexgrow("1");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Combo("cboTxivEmlAddr","200.00","128","30%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("58");
            obj.set_innerdataset("dsEmlList");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panEmail00","386","1172","100%","50",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("59");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"edtTxivEmlAddr1\"/><PanelItem id=\"PanelItem03\" componentid=\"Static03_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtTxivEmlAddr2\"/><PanelItem id=\"PanelItem04\" componentid=\"cboTxivEmlAddr\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan00_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","137",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("6");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan01_02\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100.00%","155",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("21");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan03_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan03_02\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panFile","0","42","100%","201",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("33");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan03","0","60","100.00%","166",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("40");
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

            obj = new Panel("pan04","0","60","100.00%","183",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("43");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan02_\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel03\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("sta00_00","20","20","100%","30",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("9");
            obj.set_text("신청자정보와 동일시 신청자명 자동입력");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","20","20","100%","48",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("13");
            obj.set_text("신청자정보와 동일시 전화번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 입력하세요.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00","20","20","100%","48",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("18");
            obj.set_text("신청자정보와 동일시 휴대전화번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 입력하세요.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("32");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panAddress","200","641","100%","45",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("37");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divEdtPop\"/><PanelItem id=\"PanelItem02\" componentid=\"edtAddr\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01","20.00","0","980","156",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("39");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staAddr\"/><PanelItem id=\"PanelItem03\" componentid=\"panAddress\"/><PanelItem id=\"PanelItem01\" componentid=\"edtDtlAddr\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Radio("rdoPayPicSmYn","127","203","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("7");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divForm_form_Div02_form_rdoPayPicSmYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div02_form_rdoPayPicSmYn_innerdataset", obj);
            divForm_form_Div02_form_rdoPayPicSmYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">신청자와 동일하지 않음</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">신청자와 동일</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div02_form_rdoPayPicSmYn_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel04_02_00","0","685","100%","80",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("10");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"edtPayPicNm\"/><PanelItem id=\"PanelItem01\" componentid=\"sta00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Grid("grdPayPicPrvcClctAgre","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("60");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_scrolltype("both");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:payPicPrvcClctAgreFile_fullName\" cssclass=\"expr:dataset.parent.gfnIsNull(payPicPrvcClctAgreFile_fullName) ? &quot;&quot; : &quot;CellFile&quot;\" cursor=\"pointer\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.gfnIsNull(payPicPrvcClctAgreFile_fullName) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.gfnIsNull(payPicPrvcClctAgreFile_fullName) ? &quot;none&quot; : &quot;button&quot;\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_01","20","20","100%","30",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("61");
            obj.set_text("JPG,PNG,BMP,PDF만 첨부가능");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01","192","1038","100.00%","80",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("62");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grdPayPicPrvcClctAgre\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00_00_00_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_01","30","50","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("11");
            obj.set_text("신청 정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinAplyInfo","1390.00","18","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_01","710.00","50","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("13");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnMinAplyInfo\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit03","0","0","100%","70",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("14");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div03","0","988","100%","513",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("15");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan02_01","10.00","98","100%","116",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCustType\"/><PanelItem id=\"PanelItem03\" componentid=\"rdoCustType\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan02_02","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00","325","437","100%","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("11");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan02_02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan02_02_00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan02_02_01","10.00","98","300","1",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staDmndBgngYmd","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("13");
            obj.set_text("요청기간시작일자");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan02_02_00","10.00","98","100%","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staDmndBgngYmd\"/><PanelItem id=\"PanelItem02\" componentid=\"calDmndBgngYmd\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan02_02_00_00","10.00","98","100%","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("18");
            obj.set_type("vertical");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"cal00_00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("16");
            obj.set_text("요청기간종료일자(유효기간)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staSrvcAplySe","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("19");
            obj.set_text("서비스신청구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan02_04_00","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("20");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSrvcAplySe\"/><PanelItem id=\"PanelItem03\" componentid=\"cboSrvcAplySe\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan02_02_02_00","10.00","98","300","1",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("21");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan02_\"/><PanelItem id=\"PanelItem02\" componentid=\"pan02_03\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","127",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("7");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan02_01\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("10");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan02_02\"/><PanelItem id=\"PanelItem03\" componentid=\"pan02_02_01\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staAplyKnd","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("0");
            obj.set_text("신청종류");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Radio("rdoAplyKnd","127","203","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("1");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divForm_form_Div03_form_rdoAplyKnd_innerdataset = new nexacro.NormalDataset("divForm_form_Div03_form_rdoAplyKnd_innerdataset", obj);
            divForm_form_Div03_form_rdoAplyKnd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">CARREQTYPE001</Col><Col id=\"datacolumn\">전동차등록신청</Col></Row><Row><Col id=\"codecolumn\">CARREQTYPE002</Col><Col id=\"datacolumn\">전동차운전허가신청</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div03_form_rdoAplyKnd_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staCustType","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("4");
            obj.set_text("고객유형");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Radio("rdoCustType","127","203","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("5");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divForm_form_Div03_form_rdoCustType_innerdataset = new nexacro.NormalDataset("divForm_form_Div03_form_rdoCustType_innerdataset", obj);
            divForm_form_Div03_form_rdoCustType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">CARCOMTYPE001</Col><Col id=\"datacolumn\">공항공사</Col></Row><Row><Col id=\"codecolumn\">CARCOMTYPE002</Col><Col id=\"datacolumn\">자회사</Col></Row><Row><Col id=\"datacolumn\">항공사</Col><Col id=\"codecolumn\">CARCOMTYPE003</Col></Row><Row><Col id=\"datacolumn\">공항철도</Col><Col id=\"codecolumn\">CARCOMTYPE004</Col></Row><Row><Col id=\"datacolumn\">기타 고객</Col><Col id=\"codecolumn\">CARCOMTYPE005</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div03_form_rdoCustType_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("sta00_00","20","20","100%","30",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("8");
            obj.set_text("1회 신청 시, 요청기간 시작일을 기준으로 유효기간은 2년이며 연장하는 경우 2년 단위로 갱신 신청");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staBldg","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("24");
            obj.set_text("건물구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan01_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("25");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staBldg\"/><PanelItem id=\"PanelItem03\" componentid=\"cboBldg\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staZone","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("26");
            obj.set_text("구역구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan01_02","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("27");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staZone\"/><PanelItem id=\"PanelItem03\" componentid=\"rdoZone\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan03","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("28");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan01_02\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan04","0","60","100%","96",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("22");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan02_04_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan02_02_02_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Radio("rdoZone","127","203","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("29");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divForm_form_Div03_form_rdoZone_innerdataset = new nexacro.NormalDataset("divForm_form_Div03_form_rdoZone_innerdataset", obj);
            divForm_form_Div03_form_rdoZone_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">TSCWPLARA001</Col><Col id=\"datacolumn\">A/S보호구역</Col></Row><Row><Col id=\"codecolumn\">TSCWPLARA002</Col><Col id=\"datacolumn\">L/S일반구역</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div03_form_rdoZone_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Calendar("calDmndBgngYmd","200.00","728","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("14");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20240702");
            obj.set_type("normal");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Calendar("cal00_00_00","200.00","728","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("17");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20240702");
            obj.set_type("normal");
            obj.set_readonly("true");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Combo("cboSrvcAplySe","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("23");
            obj.set_innerdataset("dsAplyKndList");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan02_","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staAplyKnd\"/><PanelItem id=\"PanelItem03\" componentid=\"rdoAplyKnd\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan02_03","10.00","98","300","1",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("30");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Combo("cboBldg","-191.00","391","100.00%","39",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("31");
            obj.set_innerdataset("dsBldgSeList");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_02","30","50","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("16");
            obj.set_text("전동차등록증 제출서류");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinDoc","1390.00","18","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_02","710.00","50","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("18");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnMinDoc\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit04","0","0","100%","70",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("19");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_02\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div04","0","30","100%","207",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("20");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staPblcnPrdctSpcfat","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("0");
            obj.set_text("재직서 발행제품 사양서");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panBtnFile","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("3");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnPblcnPrdctSpcfatSample\"/><PanelItem id=\"PanelItem00\" componentid=\"btnPblcnPrdctSpcfatFile\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panTitle","0","124","100%","92",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("4");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPblcnPrdctSpcfat\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("Static00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("5");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staPblcnPrdctSpcfatCnt","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("6");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("Static02","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("7");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panFileNum","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("8");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem01\" componentid=\"staPblcnPrdctSpcfatCnt\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panBtnDel","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("9");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panFile","0","42","300","196",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("11");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 0px 0px 0px");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("4");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem03\" componentid=\"grdPblcnPrdctSpcfat\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staInsrncJoinPrdoc","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("13");
            obj.set_text("보험가입증서");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Button("btnInsrncJoinPrdocSample","813","76","120","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("14");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Button("btnInsrncJoinPrdocFile","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("15");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.getSetter("upcolid").set("insrncJoinPrdocFile");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("16");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnInsrncJoinPrdocSample\"/><PanelItem id=\"PanelItem00\" componentid=\"btnInsrncJoinPrdocFile\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panTitle00","0","124","100%","92",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("17");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staInsrncJoinPrdoc\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("Static00_00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("18");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staInsrncJoinPrdocCnt","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("19");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("Static02_00","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("20");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panFileNum00","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("21");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"staInsrncJoinPrdocCnt\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panBtnDel00","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("22");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panFile00","0","42","300","196",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("25");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 0px 0px 0px");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("4");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"grdInsrncJoinPrdoc\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","207",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("26");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFile\"/><PanelItem id=\"PanelItem02\" componentid=\"panFile00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Button("btnPblcnPrdctSpcfatSample","813","76","120","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("1");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Button("btnPblcnPrdctSpcfatFile","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("2");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.getSetter("upcolid").set("pblcnPrdctSpcfatFile");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Grid("grdPblcnPrdctSpcfat","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("12");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:pblcnPrdctSpcfatFile_fullName\" cssclass=\"expr:dataset.parent.gfnIsNull(pblcnPrdctSpcfatFile_fullName) ? &quot;&quot; : &quot;CellFile&quot;\" cursor=\"pointer\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.gfnIsNull(pblcnPrdctSpcfatFile_fullName) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.gfnIsNull(pblcnPrdctSpcfatFile_fullName) ? &quot;none&quot; : &quot;button&quot;\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("23");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Grid("grdInsrncJoinPrdoc","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("24");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:insrncJoinPrdocFile_fullName\" cssclass=\"expr:dataset.parent.gfnIsNull(insrncJoinPrdocFile_fullName) ? &quot;&quot; : &quot;CellFile&quot;\" cursor=\"pointer\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.gfnIsNull(insrncJoinPrdocFile_fullName) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.gfnIsNull(insrncJoinPrdocFile_fullName) ? &quot;none&quot; : &quot;button&quot;\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_03","30","50","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("21");
            obj.set_text("전동차등록증 제출사진");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinPhoto","1390.00","18","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_03","710.00","50","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("23");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnMinPhoto\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit05","0","0","100%","70",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("24");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_03\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div05","0","30","100%","483",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("25");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staElcttrFrtPhoto","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("0");
            obj.set_text("전동차 전면 사진");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("btnElcttrFrtPhotoSample","813","76","120","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("1");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("btnElcttrFrtPhotoFile","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("2");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.getSetter("upcolid").set("elcttrFrtPhotoFile");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panBtnFile02","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("3");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnElcttrFrtPhotoSample\"/><PanelItem id=\"PanelItem00\" componentid=\"btnElcttrFrtPhotoFile\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panTitle02","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("4");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staElcttrFrtPhoto\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile02\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("Static00_02","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("5");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staElcttrFrtPhotoCnt","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("6");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("Static02_02","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("7");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panFileNum02","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("8");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"staElcttrFrtPhotoCnt\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_02\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panBtnDel02","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("9");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum02\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel02\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Grid("grdElcttrFrtPhoto","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("11");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:elcttrFrtPhotoFile_fullName\" cssclass=\"expr:dataset.parent.gfnIsNull(elcttrFrtPhotoFile_fullName) ? &quot;&quot; : &quot;CellFile&quot;\" cursor=\"pointer\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.gfnIsNull(elcttrFrtPhotoFile_fullName) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.gfnIsNull(elcttrFrtPhotoFile_fullName) ? &quot;none&quot; : &quot;button&quot;\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panFile02","0","42","980","150",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("12");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 0px 0px 0px");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("4");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_02\"/><PanelItem id=\"PanelItem03\" componentid=\"grdElcttrFrtPhoto\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","161",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("13");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFile02\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staElcttrRarPhoto","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("14");
            obj.set_text("전동차 후면 사진");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("btnElcttrRarPhotoSample","813","76","120","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("15");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("btnElcttrRarPhotoFile","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("16");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.getSetter("upcolid").set("elcttrRarPhotoFile");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panBtnFile02_00","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("17");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnElcttrRarPhotoSample\"/><PanelItem id=\"PanelItem00\" componentid=\"btnElcttrRarPhotoFile\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panTitle02_00","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("18");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staElcttrRarPhoto\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile02_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("19");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staElcttrRarPhotoCnt","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("20");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("Static02_02_00","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("21");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panFileNum02_00","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("22");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"staElcttrRarPhotoCnt\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_02_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panBtnDel02_00","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("23");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel00_02_00","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("24");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel02_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Grid("grdElcttrRarPhoto","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("25");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:elcttrRarPhotoFile_fullName\" cssclass=\"expr:dataset.parent.gfnIsNull(elcttrRarPhotoFile_fullName) ? &quot;&quot; : &quot;CellFile&quot;\" cursor=\"pointer\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.gfnIsNull(elcttrRarPhotoFile_fullName) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.gfnIsNull(elcttrRarPhotoFile_fullName) ? &quot;none&quot; : &quot;button&quot;\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panFile02_00","0","42","980","150",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("26");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 0px 0px 0px");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("4");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_02_00\"/><PanelItem id=\"PanelItem03\" componentid=\"grdElcttrRarPhoto\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","161",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("27");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFile02_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staElcttrFlkPhoto","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("28");
            obj.set_text("전동차 측면 사진");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("btnElcttrFlkPhotoSample","813","76","120","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("29");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("btnElcttrFlkPhotoFile","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("30");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.getSetter("upcolid").set("elcttrFlkPhotoFile");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panBtnFile02_01","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("31");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnElcttrFlkPhotoSample\"/><PanelItem id=\"PanelItem00\" componentid=\"btnElcttrFlkPhotoFile\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panTitle02_01","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("32");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staElcttrFlkPhoto\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile02_01\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("Static00_02_01","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("33");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staElcttrFlkPhotoCnt","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("34");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("Static02_02_01","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("35");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panFileNum02_01","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("36");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"staElcttrFlkPhotoCnt\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_02_01\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panBtnDel02_01","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("37");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel00_02_01","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("38");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel02_01\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Grid("grdElcttrFlkPhoto","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("39");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:elcttrFlkPhotoFile_fullName\" cssclass=\"expr:dataset.parent.gfnIsNull(elcttrFlkPhotoFile_fullName) ? &quot;&quot; : &quot;CellFile&quot;\" cursor=\"pointer\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.gfnIsNull(elcttrFlkPhotoFile_fullName) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.gfnIsNull(elcttrFlkPhotoFile_fullName) ? &quot;none&quot; : &quot;button&quot;\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panFile02_01","0","42","980","150",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("40");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 0px 0px 0px");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("4");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_02_01\"/><PanelItem id=\"PanelItem03\" componentid=\"grdElcttrFlkPhoto\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100.00%","161",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("41");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFile02_01\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_04","30","50","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("26");
            obj.set_text("운전허가증 제출사진");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinDrvn","1390.00","18","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("27");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_04","710.00","50","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("28");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnMinDrvn\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit06","0","0","100%","70",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("29");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_04\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_04\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div06","0","30","100%","482",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("30");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staPrtcZoneAdpsFrtsd","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("0");
            obj.set_text("보호구역 출입증 사본(앞면)");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Button("btnPrtcZoneAdpsFrtsdSample","813","76","120","40",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("1");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("panBtnFile","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("3");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnPrtcZoneAdpsFrtsdSample\"/><PanelItem id=\"PanelItem00\" componentid=\"btnPrtcZoneAdpsFrtsdFile\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("panTitle","0","124","100%","92",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("4");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPrtcZoneAdpsFrtsd\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Static("Static00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("5");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Static("staPrtcZoneAdpsFrtsdCnt","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("6");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Static("Static02","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("7");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("panFileNum","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("8");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem01\" componentid=\"staPrtcZoneAdpsFrtsdCnt\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("panBtnDel","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("9");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("panFile","0","42","300","230",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("11");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 0px 0px 0px");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("4");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem03\" componentid=\"grdPrtcZoneAdpsFrtsd\"/><PanelItem id=\"PanelItem04\" componentid=\"sta00_00\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Static("staPrtcZoneAdpsBaksd","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("13");
            obj.set_text("보호구역 출입증 사본(뒷면)");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Button("btnPrtcZoneAdpsBaksdSample","813","76","120","40",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("14");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Button("btnPrtcZoneAdpsBaksdFile","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("15");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.getSetter("upcolid").set("prtcZoneAdpsBaksdFile");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("16");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnPrtcZoneAdpsBaksdSample\"/><PanelItem id=\"PanelItem00\" componentid=\"btnPrtcZoneAdpsBaksdFile\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("panTitle00","0","124","100%","92",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("17");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPrtcZoneAdpsBaksd\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Static("Static00_00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("18");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Static("staPrtcZoneAdpsBaksdCnt","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("19");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Static("Static02_00","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("20");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("panFileNum00","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("21");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"staPrtcZoneAdpsBaksdCnt\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_00\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("panBtnDel00","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("22");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("panFile00","520","0","300","230",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("25");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 0px 0px 0px");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("4");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"grdPrtcZoneAdpsBaksd\"/><PanelItem id=\"PanelItem04\" componentid=\"sta00_00_00\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Static("staCarLcnDpct","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("29");
            obj.set_text("자동차 운전면허증 사본");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Button("btnCarLcnDpctSample","813","76","120","40",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("30");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Button("btnCarLcnDpctFile","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("31");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.getSetter("upcolid").set("carLcnDpctFile");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("panBtnFile01","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("32");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnCarLcnDpctSample\"/><PanelItem id=\"PanelItem00\" componentid=\"btnCarLcnDpctFile\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("panTitle01","0","124","100%","92",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("33");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCarLcnDpct\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile01\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Static("Static00_01","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("34");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Static("staCarLcnDpctCnt","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("35");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Static("Static02_01","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("36");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("panFileNum01","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("37");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"staCarLcnDpctCnt\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_01\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("panBtnDel01","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("38");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("panFile01","0","42","300","230",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("42");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 0px 0px 0px");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("4");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_01\"/><PanelItem id=\"PanelItem03\" componentid=\"grdCarLcnDpct\"/><PanelItem id=\"PanelItem04\" componentid=\"sta00_00_01\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Static("staBizcrdPhoto","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("43");
            obj.set_text("번명함 사진 파일");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Button("btnBizcrdPhotoSample","813","76","120","40",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("44");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Button("btnBizcrdPhotoFile","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("45");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.getSetter("upcolid").set("bizcrdPhotoFile");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("46");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnBizcrdPhotoSample\"/><PanelItem id=\"PanelItem00\" componentid=\"btnBizcrdPhotoFile\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00","0","124","100%","92",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("47");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staBizcrdPhoto\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("48");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Static("staBizcrdPhotoCnt","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("49");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("50");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("panFileNum00_00","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("51");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"staBizcrdPhotoCnt\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_00_00\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("panBtnDel00_00","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("52");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("panFile00_00","520","0","300","230",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("56");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 0px 0px 0px");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("4");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"grdBizcrdPhoto\"/><PanelItem id=\"PanelItem04\" componentid=\"sta00_00_00_00\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","241",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("26");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFile\"/><PanelItem id=\"PanelItem02\" componentid=\"panFile00\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","241",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("57");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFile01\"/><PanelItem id=\"PanelItem02\" componentid=\"panFile00_00\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("Panel00","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Grid("grdPrtcZoneAdpsFrtsd","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("12");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:prtcZoneAdpsFrtsdFile_fullName\" cssclass=\"expr:dataset.parent.gfnIsNull(prtcZoneAdpsFrtsdFile_fullName) ? &quot;&quot; : &quot;CellFile&quot;\" cursor=\"pointer\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.gfnIsNull(prtcZoneAdpsFrtsdFile_fullName) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.gfnIsNull(prtcZoneAdpsFrtsdFile_fullName) ? &quot;none&quot; : &quot;button&quot;\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("23");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel00\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Grid("grdPrtcZoneAdpsBaksd","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("24");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:prtcZoneAdpsBaksdFile_fullName\" cssclass=\"expr:dataset.parent.gfnIsNull(prtcZoneAdpsBaksdFile_fullName) ? &quot;&quot; : &quot;CellFile&quot;\" cursor=\"pointer\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.gfnIsNull(prtcZoneAdpsBaksdFile_fullName) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.gfnIsNull(prtcZoneAdpsBaksdFile_fullName) ? &quot;none&quot; : &quot;button&quot;\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Static("sta00_00","20","20","100%","30",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("27");
            obj.set_text("주민번호 뒷자리 및 출입증 발급번호 마스킹");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","20","20","100%","30",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("28");
            obj.set_text("주민번호 뒷자리 및 출입증 발급번호 마스킹");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("39");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum01\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel01\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Grid("grdCarLcnDpct","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("40");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:carLcnDpctFile_fullName\" cssclass=\"expr:dataset.parent.gfnIsNull(carLcnDpctFile_fullName) ? &quot;&quot; : &quot;CellFile&quot;\" cursor=\"pointer\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.gfnIsNull(carLcnDpctFile_fullName) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.gfnIsNull(carLcnDpctFile_fullName) ? &quot;none&quot; : &quot;button&quot;\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Static("sta00_00_01","20","20","100%","30",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("41");
            obj.set_text("주민번호 뒷자리 및 출입증 발급번호 마스킹");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("53");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel00_00\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Grid("grdBizcrdPhoto","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("54");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:bizcrdPhotoFile_fullName\" cssclass=\"expr:dataset.parent.gfnIsNull(bizcrdPhotoFile_fullName) ? &quot;&quot; : &quot;CellFile&quot;\" cursor=\"pointer\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.gfnIsNull(bizcrdPhotoFile_fullName) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.gfnIsNull(bizcrdPhotoFile_fullName) ? &quot;none&quot; : &quot;button&quot;\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00","20","20","100%","30",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("55");
            obj.set_text("354x472 [해상도 200dpi이상]");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Button("btnPrtcZoneAdpsFrtsdFile","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("2");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.getSetter("upcolid").set("prtcZoneAdpsFrtsdFile");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_05","30","50","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("31");
            obj.set_text("전동차 등록 및 운전허가 승인 및 운영 기준");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinAprvYn","1390.00","18","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("32");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_05","710.00","50","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("33");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnMinAprvYn\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit07","0","0","100%","70",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("34");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_05\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_05\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div07","0","30","100%","2000",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("35");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_01","-10.00","372","100%","30",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("5");
            obj.set_text("위의 개인정보 수집ㆍ이용에 대한 동의를 거부할 권리가 있습니다. 그러나 필수 항목 수집ㆍ이용 동의를 거부할 경우 전동차 등록 및 운전허가 신청을 할 수 있습니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00_00","-10.00","421","100%","47",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("6");
            obj.set_text("필수 항목 수집ㆍ이용 동의를 거부하실 경우 전동차 등록 및 운전허가 신청을 하실수 없으시나,\r\n선택항목 수집ㆍ이용 동의를 거부하셔도 전동차 등록 및 운전허가 신청에는 제한이 없습니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_01","171","111","100%","180",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("1");
            obj.set_value("전동차 운전허가증 제출목록: 보호구역 출입증 사본, 자동차 운전면허증 사본, 반명함 사진파일\n운전허가증 사진의 경우 반명함 사이즈 픽셀 354x472 [해상도 200dpi 이상]\n보호구역 출입증의 경우 앞,뒷면 모두 제출\n운전면허증의 경우 주민번호 뒷자리와 운전면허번호는 삭제한 후 제출\n전동차 등록증 제출서류: 제작서 발행제품 사양서(전동차 제원), 보험가입증서, 전동차 전,후,측면 사진\n보험가입증서의 경우 기간 내의 유효한 영업배상책임보험이어야 함\n전동차 등록번호 및 운전허가증 유효기간 : 24개월");
            obj.set_readonly("true");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","201",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"TextArea00_01\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("staLabel00_03_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("2");
            obj.set_text("전동차 등록 및 운전허가 신청을 위한 개인정보 수집ㆍ이용 동의서");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","0.00","285","100.00%","60",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_value("입주자서비스포털은 전동차 등록 및 운전허가에대한 전동차 등록 및 운전허가 신청 서비스 제공을 위해 아래와 같이 개인정보를 수집ㆍ이용하고자 합니다.\n내용을 자세히 읽으신 후 여부를 결정하여 주시길 바랍니다.");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Grid("grdCn","500.00","4747","100%","200",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("4");
            obj.set_autofittype("col");
            obj.set_readonly("true");
            obj.set_binddataset("dsCn");
            obj.set_autosizingtype("none");
            obj.set_extendsizetype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"300\"/><Column size=\"600\"/><Column size=\"300\"/><Column size=\"300\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"150\"/></Rows><Band id=\"head\"><Cell text=\"시스템구분\"/><Cell col=\"1\" text=\"수집ㆍ이용 항목\"/><Cell col=\"2\" text=\"수집목적\"/><Cell col=\"3\" text=\"보유기간\"/></Band><Band id=\"body\"><Cell text=\"입주자서비스&#13;&#10;포털\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"text\" autosizerow=\"none\" textAlign=\"center\" text=\"[필수]납부담당자 이름, 납부담당자 일반전화번호&#13;&#10;납부담당자 휴대전화번호, 청구지주소, 생년월일&#13;&#10;[선택]청구서 이메일주소, 세금계산서 이메일주소&#13;&#10;※단, 청구방식&quot;이메일&quot; 선택 시 청구서 이메일주소 필수&#13;&#10;\" controlautosizingtype=\"none\"/><Cell col=\"2\" text=\"전동차 등록 및 운전허가 관련&#13;&#10;서비스 신청, 민원처리, 사후처리\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"3\" text=\"계약종료 후 3년,&#13;&#10;회원탈퇴 시까지\" displaytype=\"text\" textAlign=\"center\" cssclass=\"CellLink, CellTxtBlue\"/></Band></Format></Formats>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_03_00_00_00","10.00","98","100%","423",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("10");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_03_00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"TextArea00\"/><PanelItem id=\"PanelItem01\" componentid=\"grdCn\"/><PanelItem id=\"PanelItem05\" componentid=\"sta00_00_01_01\"/><PanelItem id=\"PanelItem04\" componentid=\"sta00_00_01_00_00\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","434",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("8");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_03_00_00_00\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("staPrvcClctEsntlAgreYn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("9");
            obj.set_text("개인정보 수집(필수) 동의여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new CheckBox("chkPrvcClctEsntlAgreYn","274.00","355","150","40",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("10");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_value("0");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("sta00_00_01","20","20","100%","30",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("11");
            obj.set_text("신청자의 개인정보수집 및 이용동의여부(필수항목)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_03_00_00_00_00","64.00","495","980","176",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("10");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPrvcClctEsntlAgreYn\"/><PanelItem id=\"PanelItem01\" componentid=\"chkPrvcClctEsntlAgreYn\"/><PanelItem id=\"PanelItem03\" componentid=\"sta00_00_01\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100.00%","187",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("13");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_03_00_00_00_00\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("staPrvcClctChcAgreYn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("14");
            obj.set_text("개인정보 수집(선택) 동의여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Radio("rdoPrvcClctChcAgreYn","200.00","328","490","40",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div07_form_rdoPrvcClctChcAgreYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div07_form_rdoPrvcClctChcAgreYn_innerdataset", obj);
            divForm_form_Div07_form_rdoPrvcClctChcAgreYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">동의함</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">동의하지 않음(동의하지 않아도 서비스신청 가능합니다.</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div07_form_rdoPrvcClctChcAgreYn_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00","20","20","100%","30",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("16");
            obj.set_text("신청자의 개인정보수집 및 이용동의여부(선택항목)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00_01","20","20","100%","30",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("17");
            obj.set_text("선택항목에 해당하는 정보를 입력하지 않으셔도 서비스 이용에는 제한이 없습니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_03_00_00_00_00_00","64.00","495","980","176",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("18");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPrvcClctChcAgreYn\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoPrvcClctChcAgreYn\"/><PanelItem id=\"PanelItem03\" componentid=\"sta00_00_01_00\"/><PanelItem id=\"PanelItem04\" componentid=\"sta00_00_01_00_01\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("pan03","0","60","100.00%","187",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("19");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_03_00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("staPrvcClctChcAgreYn01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("20");
            obj.set_text("서비스요청내용확인");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Radio("rdoSrvcDmndCnYn","200.00","328","490","40",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("21");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div07_form_rdoSrvcDmndCnYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div07_form_rdoSrvcDmndCnYn_innerdataset", obj);
            divForm_form_Div07_form_rdoSrvcDmndCnYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">확인</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">보완</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div07_form_rdoSrvcDmndCnYn_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_03_00_00_00_00_00_00","64.00","495","980","96",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("22");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPrvcClctChcAgreYn01\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoSrvcDmndCnYn\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("pan04","0","60","100.00%","107",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("23");
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
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("staSplmntDmndRsn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("24");
            obj.set_text("보완요청사유");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new TextArea("txtSplmntDmndRsn","18","1593","100%","100",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("25");
            obj.set_readonly("false");
            obj.set_displaynulltext("내용입력");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("pan05","0","60","100.00%","177",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("26");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_fittocontents("height");
            obj.set_verticalgap("10");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("vertical");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staSplmntDmndRsn\"/><PanelItem id=\"PanelItem01\" componentid=\"txtSplmntDmndRsn\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Grid("grdSplmnt","18","1715","100%","150",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("27");
            obj.set_binddataset("dataSet00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"별칭\"/><Cell col=\"1\" text=\"내용\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:별칭\"/><Cell col=\"1\" text=\"bind:내용\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00_00_00","18","1865","100%","30",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("28");
            obj.set_text("My Page -> 검토의견함 메뉴에서 내용 등록/수정/삭제 가능합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("pan06","0","60","100.00%","201",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("29");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grdSplmnt\"/><PanelItem id=\"PanelItem01\" componentid=\"sta00_00_01_00_00_00\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("staCnvyMttr","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("30");
            obj.set_text("전달사항");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new TextArea("txtCnvyMttr","18","1593","100%","100",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("31");
            obj.set_readonly("false");
            obj.set_displaynulltext("내용입력");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("pan00_01_00","0","60","100.00%","177",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("32");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_fittocontents("height");
            obj.set_verticalgap("10");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staCnvyMttr\"/><PanelItem id=\"PanelItem01\" componentid=\"txtCnvyMttr\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Grid("grdCnvyMttr","18","1715","100%","180",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("33");
            obj.set_binddataset("dsCnvyMttr");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"81\"/><Column size=\"110\"/><Column size=\"103\"/><Column size=\"900\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"일자\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"내용\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:frstRegDt\" displaytype=\"mask\" maskeditformat=\"####-##-## ##:##\" maskedittype=\"string\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:frstRegNm\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:cnvyMttrCn\" cssclass=\"CellEnd\" textAlign=\"left\" tooltiptext=\"bind:cnvyMttrCn\"/></Band></Format></Formats>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("pan07","0","60","100.00%","201",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("34");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grdCnvyMttr\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Grid("grdCnvyMttr00","18","1715","100%","150",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("35");
            obj.set_binddataset("dataSet00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"별칭\"/><Cell col=\"1\" text=\"내용\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:별칭\"/><Cell col=\"1\" text=\"bind:내용\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00_00_00_00_00","18","1865","100%","30",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("36");
            obj.set_text("My Page -> 검토의견함 메뉴에서 내용 등록/수정/삭제 가능합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("pan08","0","60","100.00%","201",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("37");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grdCnvyMttr00\"/><PanelItem id=\"PanelItem01\" componentid=\"sta00_00_01_00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Div("divQuick",null,"62","296","351","62",null,null,null,null,null,this);
            obj.set_taborder("2");
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
            obj.set_text("청구 정보");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn03","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("2");
            obj.set_text("신청 정보");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn04","17.00","155","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("3");
            obj.set_text("전동차등록증 제출서류");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn05","17.00","200","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("4");
            obj.set_text("전동차등록증 제출사진");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn06","17.00","200","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("5");
            obj.set_text("운전허가증 제출사진");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn07","17.00","200","100%","60",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("6");
            obj.set_text("전동차 등록 및 운전허가\r\n승인 및 운영 기준");
            obj.set_cssclass("btn_WF_Quick");
            obj.set_fittocontents("height");
            this.divQuick.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"divQuick:0","296","131","62",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            obj.set_fittocontents("height");
            obj.set_cssclass("div_WF_QuickBtnBg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","7","20","100","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("0");
            obj.set_text("임시저장");
            obj.set_cssclass("btn_WF_No");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btn00_01","7","20","100","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("2");
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
            //-- Default Layout : this.divGuide.form
            obj = new Layout("default","",0,0,this.divGuide.form,
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
            this.divGuide.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGuide.form
            obj = new Layout("mobile","",0,0,this.divGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divGuide.form.addLayout(obj.name, obj);
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
            //-- Default Layout : this.divForm.form.Div01.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.pan03_01.set_taborder("18");
                p.pan03_01.set_type("vertical");
                p.pan03_01.set_flexgrow("1");
                p.pan03_01.move("10.00","98","300","144",null,null);

                p.edtRgtrTelno.set_taborder("25");
                p.edtRgtrTelno.set_readonly("true");
                p.edtRgtrTelno.set_value("02-123-4567");
                p.edtRgtrTelno.move("10.00","158","100%","40",null,null);

                p.pan02_.set_taborder("12");
                p.pan02_.set_type("vertical");
                p.pan02_.set_flexgrow("1");
                p.pan02_.move("10.00","98","300","86",null,null);

                p.pan02_02.set_taborder("15");
                p.pan02_02.set_type("vertical");
                p.pan02_02.set_flexgrow("1");
                p.pan02_02.move("10.00","98","300","86",null,null);

                p.staRgtrTelno.set_taborder("17");
                p.staRgtrTelno.set_text("등록자 전화번호");
                p.staRgtrTelno.set_cssclass("sta_WF_Label");
                p.staRgtrTelno.move("10","98","100%","46",null,null);

                p.pan03_02.set_taborder("20");
                p.pan03_02.set_type("vertical");
                p.pan03_02.set_flexgrow("1");
                p.pan03_02.move("10.00","98","300","144",null,null);

                p.staAplySeNm.set_taborder("1");
                p.staAplySeNm.set_text("신청구분 ");
                p.staAplySeNm.set_cssclass("sta_WF_Label");
                p.staAplySeNm.set_flexgrow("1");
                p.staAplySeNm.move("10","98","300","46",null,null);

                p.btnHstry.set_taborder("23");
                p.btnHstry.set_text("과거신청이력불러오기");
                p.btnHstry.set_fittocontents("width");
                p.btnHstry.move("48","62","120","40",null,null);

                p.Panel00.set_taborder("22");
                p.Panel00.set_flexcrossaxisalign("center");
                p.Panel00.set_flexmainaxisalign("spacebetween");
                p.Panel00.move("763","63","100%","56",null,null);

                p.pan00_01.set_taborder("3");
                p.pan00_01.set_type("vertical");
                p.pan00_01.set_flexgrow("1");
                p.pan00_01.set_verticalgap("5");
                p.pan00_01.set_minwidth("");
                p.pan00_01.move("10.00","98","100%","101",null,null);

                p.pan00.set_taborder("0");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.set_background("pink");
                p.pan00.move("0","60","100.00%","112",null,null);

                p.staAplcntNm.set_taborder("4");
                p.staAplcntNm.set_text("신청자");
                p.staAplcntNm.set_cssclass("sta_WF_Label");
                p.staAplcntNm.move("10","98","100%","46",null,null);

                p.edtAplcntNm.set_taborder("5");
                p.edtAplcntNm.set_readonly("true");
                p.edtAplcntNm.set_value("신청자 성명");
                p.edtAplcntNm.move("10.00","158","100%","40",null,null);

                p.pan01.set_taborder("10");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.set_flexshrink("1");
                p.pan01.set_fittocontents("height");
                p.pan01.move("0","60","100.00%","96",null,null);

                p.pan01_01.set_taborder("6");
                p.pan01_01.set_type("vertical");
                p.pan01_01.set_flexgrow("1");
                p.pan01_01.move("10.00","98","300","86",null,null);

                p.edtAplySeNm.set_taborder("2");
                p.edtAplySeNm.set_readonly("true");
                p.edtAplySeNm.move("10.00","158","100%","40",null,null);

                p.staRgtrNm.set_taborder("11");
                p.staRgtrNm.set_text("등록자");
                p.staRgtrNm.set_cssclass("sta_WF_Label");
                p.staRgtrNm.move("10","98","100%","46",null,null);

                p.staAplcntInstNm.set_taborder("7");
                p.staAplcntInstNm.set_text("신청자 회사명");
                p.staAplcntInstNm.set_cssclass("sta_WF_Label");
                p.staAplcntInstNm.move("10","98","100%","46",null,null);

                p.edtAplcntInstNm.set_taborder("8");
                p.edtAplcntInstNm.set_readonly("true");
                p.edtAplcntInstNm.set_value("회사명");
                p.edtAplcntInstNm.move("10.00","158","100%","40",null,null);

                p.pan01_02.set_taborder("9");
                p.pan01_02.set_type("vertical");
                p.pan01_02.set_flexgrow("1");
                p.pan01_02.move("10.00","98","300","86",null,null);

                p.sta00_00.set_taborder("26");
                p.sta00_00.set_text("전화번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 등록 및 수정이 가능합니다.");
                p.sta00_00.set_cssclass("sta_WF_Des");
                p.sta00_00.set_fittocontents("height");
                p.sta00_00.move("20","20","100%","48",null,null);

                p.Panel04_02_00.set_taborder("24");
                p.Panel04_02_00.set_fittocontents("height");
                p.Panel04_02_00.set_type("vertical");
                p.Panel04_02_00.set_verticalgap("10");
                p.Panel04_02_00.move("0","685","100%","98",null,null);

                p.staRgtrInstNm.set_taborder("13");
                p.staRgtrInstNm.set_text("등록자 회사명");
                p.staRgtrInstNm.set_cssclass("sta_WF_Label");
                p.staRgtrInstNm.move("10","98","100%","46",null,null);

                p.pan02.set_taborder("16");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.set_visible("false");
                p.pan02.move("0","60","100%","96",null,null);

                p.edtRgtrInstNm.set_taborder("14");
                p.edtRgtrInstNm.set_readonly("true");
                p.edtRgtrInstNm.set_value("회사명");
                p.edtRgtrInstNm.move("10.00","158","100%","40",null,null);

                p.staRgtrMblTelno.set_taborder("19");
                p.staRgtrMblTelno.set_text("등록자 휴대폰 번호");
                p.staRgtrMblTelno.set_cssclass("sta_WF_Label");
                p.staRgtrMblTelno.move("10","98","100%","46",null,null);

                p.edtRgtrMblTelno.set_taborder("27");
                p.edtRgtrMblTelno.set_readonly("true");
                p.edtRgtrMblTelno.set_value("010-123-4567");
                p.edtRgtrMblTelno.move("10.00","158","100%","40",null,null);

                p.sta00_00_00.set_taborder("28");
                p.sta00_00_00.set_text("휴대폰번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 등록 및 수정이 가능합니다.");
                p.sta00_00_00.set_cssclass("sta_WF_Des");
                p.sta00_00_00.set_fittocontents("height");
                p.sta00_00_00.move("20","20","100%","48",null,null);

                p.pan03.set_taborder("21");
                p.pan03.set_horizontalgap("20");
                p.pan03.set_flexcrossaxiswrapalign("start");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_fittocontents("height");
                p.pan03.set_verticalgap("0");
                p.pan03.set_spacing("0px 20px 10px 20px");
                p.pan03.set_cssclass("pal_WF_DtlBg");
                p.pan03.move("0","60","100.00%","155",null,null);

                p.edtRgtrNm.set_taborder("30");
                p.edtRgtrNm.set_readonly("true");
                p.edtRgtrNm.set_value("등록자 성명");
                p.edtRgtrNm.move("10.00","158","100%","40",null,null);

                p.Panel04_02_00_00.set_taborder("29");
                p.Panel04_02_00_00.set_fittocontents("height");
                p.Panel04_02_00_00.set_type("vertical");
                p.Panel04_02_00_00.set_verticalgap("10");
                p.Panel04_02_00_00.move("0","685","100%","98",null,null);
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
                p.pan00.set_visible("false");
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div02.form.divEdtPop.form
            obj = new Layout("default","",0,0,this.divForm.form.Div02.form.divEdtPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.edtZip.set_taborder("0");
                p.edtZip.set_cssclass("edt_WF_EdtSch");
                p.edtZip.set_readonly("true");
                p.edtZip.set_displaynulltext("우편번호 검색");
                p.edtZip.move("0","0",null,"40","0",null);

                p.btnPop.set_taborder("1");
                p.btnPop.set_cssclass("btn_WF_EdtSch");
                p.btnPop.move("edtZip:-40","0","40","40",null,null);
            	}
            );
            this.divForm.form.Div02.form.divEdtPop.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div02.form.divEdtPop.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div02.form.divEdtPop.form,
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
                p.staPayPicSmYn.set_taborder("1");
                p.staPayPicSmYn.set_text("납부담당자  동일여부");
                p.staPayPicSmYn.set_cssclass("sta_WF_Label_E");
                p.staPayPicSmYn.move("10","98","100%","46",null,null);

                p.pan00_01.set_taborder("2");
                p.pan00_01.set_type("vertical");
                p.pan00_01.set_flexgrow("1");
                p.pan00_01.move("10.00","98","300","86",null,null);

                p.staPayPicNm.set_taborder("3");
                p.staPayPicNm.set_text("납부담당자 이름");
                p.staPayPicNm.set_cssclass("sta_WF_Label_E");
                p.staPayPicNm.move("10","98","100%","46",null,null);

                p.pan01_01.set_taborder("4");
                p.pan01_01.set_type("vertical");
                p.pan01_01.set_flexgrow("1");
                p.pan01_01.move("10.00","98","300","126",null,null);

                p.pan01_02.set_taborder("5");
                p.pan01_02.set_type("vertical");
                p.pan01_02.set_flexgrow("1");
                p.pan01_02.move("10.00","98","300","1",null,null);

                p.edtPayPicNm.set_taborder("8");
                p.edtPayPicNm.set_readonly("false");
                p.edtPayPicNm.set_displaynulltext("납부담당자 성명  입력");
                p.edtPayPicNm.move("10.00","158","100%","40",null,null);

                p.pan03_01.set_taborder("15");
                p.pan03_01.set_type("vertical");
                p.pan03_01.set_flexgrow("1");
                p.pan03_01.move("10.00","98","300","144",null,null);

                p.staPayPicTelno.set_taborder("11");
                p.staPayPicTelno.set_text("납부담당자 일반전화번호");
                p.staPayPicTelno.set_cssclass("sta_WF_Label_E");
                p.staPayPicTelno.move("10","98","100%","46",null,null);

                p.staMblPayPicTelno.set_taborder("16");
                p.staMblPayPicTelno.set_text("납부담당자 휴대전화번호");
                p.staMblPayPicTelno.set_cssclass("sta_WF_Label_E");
                p.staMblPayPicTelno.move("10","98","100%","46",null,null);

                p.edtPayPicTelno.set_taborder("12");
                p.edtPayPicTelno.set_readonly("false");
                p.edtPayPicTelno.set_displaynulltext("전화번호 입력");
                p.edtPayPicTelno.move("10.00","158","100%","40",null,null);

                p.Panel04_02_00_00.set_taborder("14");
                p.Panel04_02_00_00.set_fittocontents("height");
                p.Panel04_02_00_00.set_type("vertical");
                p.Panel04_02_00_00.set_verticalgap("10");
                p.Panel04_02_00_00.move("0","685","100%","98",null,null);

                p.edtPayPicMblTelno.set_taborder("17");
                p.edtPayPicMblTelno.set_readonly("false");
                p.edtPayPicMblTelno.set_displaynulltext("휴대전화번호 입력");
                p.edtPayPicMblTelno.move("10.00","158","100%","40",null,null);

                p.Panel04_02_00_00_00.set_taborder("19");
                p.Panel04_02_00_00_00.set_fittocontents("height");
                p.Panel04_02_00_00_00.set_type("vertical");
                p.Panel04_02_00_00_00.set_verticalgap("10");
                p.Panel04_02_00_00_00.move("0","685","100%","98",null,null);

                p.pan03_02.set_taborder("20");
                p.pan03_02.set_type("vertical");
                p.pan03_02.set_flexgrow("1");
                p.pan03_02.move("10.00","98","300","144",null,null);

                p.staPayPicPrvcClctAgre.set_taborder("22");
                p.staPayPicPrvcClctAgre.set_text("납부담당자의 개인정보 수집 및  이용 동의서");
                p.staPayPicPrvcClctAgre.set_cssclass("sta_WF_Label_E");
                p.staPayPicPrvcClctAgre.set_flexgrow("1");
                p.staPayPicPrvcClctAgre.move("0","44","305","46",null,null);

                p.btnPayPicPrvcClctAgreSample.set_taborder("23");
                p.btnPayPicPrvcClctAgreSample.set_text("샘플첨부파일명");
                p.btnPayPicPrvcClctAgreSample.set_cssclass("btn_WF_Small");
                p.btnPayPicPrvcClctAgreSample.set_fittocontents("width");
                p.btnPayPicPrvcClctAgreSample.move("813","76","120","40",null,null);

                p.btnPayPicPrvcClctAgreFile.set_taborder("24");
                p.btnPayPicPrvcClctAgreFile.set_text("파일선택");
                p.btnPayPicPrvcClctAgreFile.set_cssclass("btn_WF_FileUp");
                p.btnPayPicPrvcClctAgreFile.getSetter("upcolid").set("payPicPrvcClctAgreFile");
                p.btnPayPicPrvcClctAgreFile.move("124","58","116","40",null,null);

                p.panBtnFile.set_taborder("25");
                p.panBtnFile.set_flexgrow("1");
                p.panBtnFile.set_flexcrossaxisalign("start");
                p.panBtnFile.set_flexmainaxisalign("end");
                p.panBtnFile.set_horizontalgap("10");
                p.panBtnFile.move("433","58","305","46",null,null);

                p.panTitle.set_taborder("26");
                p.panTitle.set_cssclass("pan_WF_FileTitle");
                p.panTitle.set_flexwrap("wrap");
                p.panTitle.set_visible("true");
                p.panTitle.move("0","124","100%","46",null,null);

                p.Static00.set_taborder("27");
                p.Static00.set_text("파일수 : ");
                p.Static00.set_fittocontents("width");
                p.Static00.move("88","123","48","46",null,null);

                p.staPayPicPrvcClctAgreCnt.set_taborder("28");
                p.staPayPicPrvcClctAgreCnt.set_text("0");
                p.staPayPicPrvcClctAgreCnt.set_fittocontents("width");
                p.staPayPicPrvcClctAgreCnt.move("165","143","9","46",null,null);

                p.Static02.set_taborder("29");
                p.Static02.set_text("개");
                p.Static02.set_fittocontents("width");
                p.Static02.move("293","131","13","46",null,null);

                p.panFileNum.set_taborder("30");
                p.panFileNum.set_flexgrow("1");
                p.panFileNum.set_horizontalgap("4");
                p.panFileNum.move("20","190","305","46",null,null);

                p.panBtnDel.set_taborder("31");
                p.panBtnDel.set_flexcrossaxisalign("center");
                p.panBtnDel.set_flexmainaxisalign("end");
                p.panBtnDel.set_flexgrow("1");
                p.panBtnDel.move("517","141","305","46",null,null);

                p.staAddr.set_taborder("34");
                p.staAddr.set_text("청구지우편번호/청구지주소");
                p.staAddr.set_cssclass("sta_WF_Label_E");
                p.staAddr.move("0.00","0","100%","46",null,null);

                p.divEdtPop.set_taborder("35");
                p.divEdtPop.set_text("Div00");
                p.divEdtPop.set_formscrollbartype("none none");
                p.divEdtPop.set_formscrolltype("none");
                p.divEdtPop.set_flexgrow("1");
                p.divEdtPop.move("780.00","635","305","40",null,null);

                p.edtAddr.set_taborder("36");
                p.edtAddr.set_readonly("true");
                p.edtAddr.set_flexgrow("2");
                p.edtAddr.set_displaynulltext("주소");
                p.edtAddr.move("360","637","305","40",null,null);

                p.edtDtlAddr.set_taborder("38");
                p.edtDtlAddr.set_displaynulltext("상세주소");
                p.edtDtlAddr.move("0.00","46","100%","40",null,null);

                p.staClmSe.set_taborder("41");
                p.staClmSe.set_text("청구방식");
                p.staClmSe.set_cssclass("sta_WF_Label_E");
                p.staClmSe.move("10","98","100%","46",null,null);

                p.pan02_.set_taborder("42");
                p.pan02_.set_type("vertical");
                p.pan02_.set_flexgrow("1");
                p.pan02_.move("10.00","98","300","110",null,null);

                p.rdoClmSe.set_taborder("44");
                p.rdoClmSe.set_fittocontents("width");
                p.rdoClmSe.set_innerdataset(divForm_form_Div02_form_rdoClmSe_innerdataset);
                p.rdoClmSe.set_codecolumn("codecolumn");
                p.rdoClmSe.set_datacolumn("datacolumn");
                p.rdoClmSe.set_direction("horizontal");
                p.rdoClmSe.set_index("-1");
                p.rdoClmSe.move("127","203","100%","80",null,null);

                p.Static03.set_taborder("53");
                p.Static03.set_text("@");
                p.Static03.set_fittocontents("width");
                p.Static03.set_textAlign("center");
                p.Static03.move("507","1122","14","40",null,null);

                p.Panel03.set_taborder("45");
                p.Panel03.set_type("vertical");
                p.Panel03.set_flexgrow("1");
                p.Panel03.move("551","1140","300","172",null,null);

                p.staAcuntEmlAddr.set_taborder("46");
                p.staAcuntEmlAddr.set_text("청구서 이메일주소");
                p.staAcuntEmlAddr.set_cssclass("sta_WF_Label");
                p.staAcuntEmlAddr.move("10","98","100%","46",null,null);

                p.pan02_02_00.set_taborder("47");
                p.pan02_02_00.set_type("vertical");
                p.pan02_02_00.set_visible("false");
                p.pan02_02_00.move("10.00","98","100%","86",null,null);

                p.edtAcuntEmlAddr2.set_taborder("52");
                p.edtAcuntEmlAddr2.set_readonly("false");
                p.edtAcuntEmlAddr2.set_displaynulltext("이메일 주소 입력");
                p.edtAcuntEmlAddr2.set_flexgrow("1");
                p.edtAcuntEmlAddr2.move("10.00","158","30%","40",null,null);

                p.staTxivEmlAddr.set_taborder("48");
                p.staTxivEmlAddr.set_text("세금계산서 이메일주소");
                p.staTxivEmlAddr.set_cssclass("sta_WF_Label");
                p.staTxivEmlAddr.move("10","98","100%","46",null,null);

                p.cboAcuntEmlAddr.set_taborder("54");
                p.cboAcuntEmlAddr.set_innerdataset("dsEmlList");
                p.cboAcuntEmlAddr.set_codecolumn("cdId");
                p.cboAcuntEmlAddr.set_datacolumn("cdNm");
                p.cboAcuntEmlAddr.set_displaynulltext("선택");
                p.cboAcuntEmlAddr.set_text("");
                p.cboAcuntEmlAddr.set_index("-1");
                p.cboAcuntEmlAddr.move("200.00","128","30%","40",null,null);

                p.pan02_02_00_00.set_taborder("49");
                p.pan02_02_00_00.set_type("vertical");
                p.pan02_02_00_00.move("10.00","98","100%","86",null,null);

                p.edtAcuntEmlAddr1.set_taborder("51");
                p.edtAcuntEmlAddr1.set_readonly("false");
                p.edtAcuntEmlAddr1.set_displaynulltext("이메일 주소 입력");
                p.edtAcuntEmlAddr1.set_flexgrow("1");
                p.edtAcuntEmlAddr1.move("10.00","158","30%","40",null,null);

                p.panEmail.set_taborder("50");
                p.panEmail.set_horizontalgap("5");
                p.panEmail.move("386","1172","100%","50",null,null);

                p.edtTxivEmlAddr1.set_taborder("55");
                p.edtTxivEmlAddr1.set_readonly("false");
                p.edtTxivEmlAddr1.set_displaynulltext("이메일 주소 입력");
                p.edtTxivEmlAddr1.set_flexgrow("1");
                p.edtTxivEmlAddr1.move("10.00","158","30%","40",null,null);

                p.Static03_00.set_taborder("56");
                p.Static03_00.set_text("@");
                p.Static03_00.set_fittocontents("width");
                p.Static03_00.set_textAlign("center");
                p.Static03_00.move("507","1122","14","40",null,null);

                p.edtTxivEmlAddr2.set_taborder("57");
                p.edtTxivEmlAddr2.set_readonly("false");
                p.edtTxivEmlAddr2.set_displaynulltext("이메일 주소 입력");
                p.edtTxivEmlAddr2.set_flexgrow("1");
                p.edtTxivEmlAddr2.move("10.00","158","30%","40",null,null);

                p.cboTxivEmlAddr.set_taborder("58");
                p.cboTxivEmlAddr.set_innerdataset("dsEmlList");
                p.cboTxivEmlAddr.set_codecolumn("cdId");
                p.cboTxivEmlAddr.set_datacolumn("cdNm");
                p.cboTxivEmlAddr.set_displaynulltext("선택");
                p.cboTxivEmlAddr.set_text("");
                p.cboTxivEmlAddr.set_index("-1");
                p.cboTxivEmlAddr.move("200.00","128","30%","40",null,null);

                p.panEmail00.set_taborder("59");
                p.panEmail00.set_horizontalgap("5");
                p.panEmail00.move("386","1172","100%","50",null,null);

                p.pan00.set_taborder("0");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.set_type("horizontal");
                p.pan00.move("0","60","100.00%","96",null,null);

                p.pan01.set_taborder("6");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_fittocontents("height");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.move("0","60","100.00%","137",null,null);

                p.pan02.set_taborder("21");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","60","100.00%","155",null,null);

                p.panFile.set_taborder("33");
                p.panFile.set_fittocontents("height");
                p.panFile.set_spacing("10px 20px 10px 20px");
                p.panFile.set_flexwrap("wrap");
                p.panFile.set_cssclass("pal_WF_DtlBg");
                p.panFile.set_verticalgap("4");
                p.panFile.set_visible("false");
                p.panFile.move("0","42","100%","201",null,null);

                p.pan03.set_taborder("40");
                p.pan03.set_horizontalgap("20");
                p.pan03.set_flexcrossaxiswrapalign("start");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_fittocontents("height");
                p.pan03.set_verticalgap("0");
                p.pan03.set_spacing("0px 20px 10px 20px");
                p.pan03.set_cssclass("pal_WF_DtlBg");
                p.pan03.set_type("horizontal");
                p.pan03.move("0","60","100.00%","166",null,null);

                p.pan04.set_taborder("43");
                p.pan04.set_horizontalgap("20");
                p.pan04.set_flexcrossaxiswrapalign("start");
                p.pan04.set_flexwrap("wrap");
                p.pan04.set_fittocontents("height");
                p.pan04.set_verticalgap("0");
                p.pan04.set_spacing("0px 20px 10px 20px");
                p.pan04.set_cssclass("pal_WF_DtlBg");
                p.pan04.move("0","60","100.00%","183",null,null);

                p.sta00_00.set_taborder("9");
                p.sta00_00.set_text("신청자정보와 동일시 신청자명 자동입력");
                p.sta00_00.set_cssclass("sta_WF_Des");
                p.sta00_00.set_fittocontents("height");
                p.sta00_00.move("20","20","100%","30",null,null);

                p.sta00_00_00.set_taborder("13");
                p.sta00_00_00.set_text("신청자정보와 동일시 전화번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 입력하세요.");
                p.sta00_00_00.set_cssclass("sta_WF_Des");
                p.sta00_00_00.set_fittocontents("height");
                p.sta00_00_00.move("20","20","100%","48",null,null);

                p.sta00_00_00_00.set_taborder("18");
                p.sta00_00_00_00.set_text("신청자정보와 동일시 휴대전화번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 입력하세요.");
                p.sta00_00_00_00.set_cssclass("sta_WF_Des");
                p.sta00_00_00_00.set_fittocontents("height");
                p.sta00_00_00_00.move("20","20","100%","48",null,null);

                p.Panel00.set_taborder("32");
                p.Panel00.move("20","51","100%","46",null,null);

                p.panAddress.set_taborder("37");
                p.panAddress.set_horizontalgap("10");
                p.panAddress.move("200","641","100%","45",null,null);

                p.Panel00_00_01.set_taborder("39");
                p.Panel00_00_01.set_type("vertical");
                p.Panel00_00_01.set_flexgrow("1");
                p.Panel00_00_01.set_fittocontents("height");
                p.Panel00_00_01.set_verticalgap("10");
                p.Panel00_00_01.set_minwidth("");
                p.Panel00_00_01.move("20.00","0","980","156",null,null);

                p.rdoPayPicSmYn.set_taborder("7");
                p.rdoPayPicSmYn.set_fittocontents("width");
                p.rdoPayPicSmYn.set_innerdataset(divForm_form_Div02_form_rdoPayPicSmYn_innerdataset);
                p.rdoPayPicSmYn.set_codecolumn("codecolumn");
                p.rdoPayPicSmYn.set_datacolumn("datacolumn");
                p.rdoPayPicSmYn.set_direction("vertical");
                p.rdoPayPicSmYn.set_index("-1");
                p.rdoPayPicSmYn.move("127","203","100%","40",null,null);

                p.Panel04_02_00.set_taborder("10");
                p.Panel04_02_00.set_fittocontents("height");
                p.Panel04_02_00.set_type("vertical");
                p.Panel04_02_00.set_verticalgap("10");
                p.Panel04_02_00.move("0","685","100%","80",null,null);

                p.grdPayPicPrvcClctAgre.set_taborder("60");
                p.grdPayPicPrvcClctAgre.set_binddataset("dsFile");
                p.grdPayPicPrvcClctAgre.set_autofittype("col");
                p.grdPayPicPrvcClctAgre.set_cssclass("grd_WF_FileAdd");
                p.grdPayPicPrvcClctAgre.set_scrolltype("both");
                p.grdPayPicPrvcClctAgre.set_scrollbartype("none none");
                p.grdPayPicPrvcClctAgre.move("20.00","114","100%","40",null,null);

                p.sta00_00_00_01.set_taborder("61");
                p.sta00_00_00_01.set_text("JPG,PNG,BMP,PDF만 첨부가능");
                p.sta00_00_00_01.set_cssclass("sta_WF_Des");
                p.sta00_00_00_01.set_fittocontents("height");
                p.sta00_00_00_01.move("20","20","100%","30",null,null);

                p.Panel01.set_taborder("62");
                p.Panel01.set_type("vertical");
                p.Panel01.set_verticalgap("10");
                p.Panel01.move("192","1038","100.00%","80",null,null);
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
                p.pan02_01.set_taborder("6");
                p.pan02_01.set_type("vertical");
                p.pan02_01.set_flexgrow("1");
                p.pan02_01.move("10.00","98","100%","116",null,null);

                p.pan02_02.set_taborder("9");
                p.pan02_02.set_type("vertical");
                p.pan02_02.set_flexgrow("1");
                p.pan02_02.move("10.00","98","300","86",null,null);

                p.Panel00.set_taborder("11");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.move("325","437","100%","86",null,null);

                p.pan02_02_01.set_taborder("12");
                p.pan02_02_01.set_type("vertical");
                p.pan02_02_01.set_flexgrow("1");
                p.pan02_02_01.move("10.00","98","300","1",null,null);

                p.staDmndBgngYmd.set_taborder("13");
                p.staDmndBgngYmd.set_text("요청기간시작일자");
                p.staDmndBgngYmd.set_cssclass("sta_WF_Label_E");
                p.staDmndBgngYmd.move("10","98","100%","46",null,null);

                p.pan02_02_00.set_taborder("15");
                p.pan02_02_00.set_type("vertical");
                p.pan02_02_00.move("10.00","98","100%","86",null,null);

                p.pan02_02_00_00.set_taborder("18");
                p.pan02_02_00_00.set_type("vertical");
                p.pan02_02_00_00.set_visible("false");
                p.pan02_02_00_00.move("10.00","98","100%","86",null,null);

                p.staLabel03_00_01_00_00.set_taborder("16");
                p.staLabel03_00_01_00_00.set_text("요청기간종료일자(유효기간)");
                p.staLabel03_00_01_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_01_00_00.move("10","98","100%","46",null,null);

                p.staSrvcAplySe.set_taborder("19");
                p.staSrvcAplySe.set_text("서비스신청구분");
                p.staSrvcAplySe.set_cssclass("sta_WF_Label_E");
                p.staSrvcAplySe.move("10","98","100%","46",null,null);

                p.pan02_04_00.set_taborder("20");
                p.pan02_04_00.set_type("vertical");
                p.pan02_04_00.set_flexgrow("1");
                p.pan02_04_00.move("10.00","98","300","86",null,null);

                p.pan02_02_02_00.set_taborder("21");
                p.pan02_02_02_00.set_type("vertical");
                p.pan02_02_02_00.set_flexgrow("1");
                p.pan02_02_02_00.move("10.00","98","300","1",null,null);

                p.pan00.set_taborder("3");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("0","60","100.00%","97",null,null);

                p.pan01.set_taborder("7");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_fittocontents("height");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.move("0","60","100.00%","127",null,null);

                p.pan02.set_taborder("10");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","60","100.00%","97",null,null);

                p.staAplyKnd.set_taborder("0");
                p.staAplyKnd.set_text("신청종류");
                p.staAplyKnd.set_cssclass("sta_WF_Label_E");
                p.staAplyKnd.move("10","98","100%","46",null,null);

                p.rdoAplyKnd.set_taborder("1");
                p.rdoAplyKnd.set_fittocontents("width");
                p.rdoAplyKnd.set_innerdataset(divForm_form_Div03_form_rdoAplyKnd_innerdataset);
                p.rdoAplyKnd.set_codecolumn("codecolumn");
                p.rdoAplyKnd.set_datacolumn("datacolumn");
                p.rdoAplyKnd.set_direction("vertical");
                p.rdoAplyKnd.set_index("-1");
                p.rdoAplyKnd.move("127","203","100%","40",null,null);

                p.staCustType.set_taborder("4");
                p.staCustType.set_text("고객유형");
                p.staCustType.set_cssclass("sta_WF_Label_E");
                p.staCustType.move("10","98","100%","46",null,null);

                p.rdoCustType.set_taborder("5");
                p.rdoCustType.set_fittocontents("width");
                p.rdoCustType.set_innerdataset(divForm_form_Div03_form_rdoCustType_innerdataset);
                p.rdoCustType.set_codecolumn("codecolumn");
                p.rdoCustType.set_datacolumn("datacolumn");
                p.rdoCustType.set_direction("vertical");
                p.rdoCustType.set_index("-1");
                p.rdoCustType.move("127","203","100%","40",null,null);

                p.sta00_00.set_taborder("8");
                p.sta00_00.set_text("1회 신청 시, 요청기간 시작일을 기준으로 유효기간은 2년이며 연장하는 경우 2년 단위로 갱신 신청");
                p.sta00_00.set_cssclass("sta_WF_Des");
                p.sta00_00.set_fittocontents("height");
                p.sta00_00.move("20","20","100%","30",null,null);

                p.staBldg.set_taborder("24");
                p.staBldg.set_text("건물구분");
                p.staBldg.set_cssclass("sta_WF_Label_E");
                p.staBldg.move("10","98","100%","46",null,null);

                p.pan01_01.set_taborder("25");
                p.pan01_01.set_type("vertical");
                p.pan01_01.set_flexgrow("1");
                p.pan01_01.move("10.00","98","300","86",null,null);

                p.staZone.set_taborder("26");
                p.staZone.set_text("구역구분");
                p.staZone.set_cssclass("sta_WF_Label_E");
                p.staZone.move("10","98","100%","46",null,null);

                p.pan01_02.set_taborder("27");
                p.pan01_02.set_type("vertical");
                p.pan01_02.set_flexgrow("1");
                p.pan01_02.move("10.00","98","300","86",null,null);

                p.pan03.set_taborder("28");
                p.pan03.set_horizontalgap("20");
                p.pan03.set_flexcrossaxiswrapalign("start");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_verticalgap("0");
                p.pan03.set_spacing("0px 20px 10px 20px");
                p.pan03.set_cssclass("pal_WF_DtlBg");
                p.pan03.set_flexshrink("1");
                p.pan03.set_fittocontents("height");
                p.pan03.move("0","60","100.00%","96",null,null);

                p.pan04.set_taborder("22");
                p.pan04.set_horizontalgap("20");
                p.pan04.set_flexcrossaxiswrapalign("start");
                p.pan04.set_flexwrap("wrap");
                p.pan04.set_fittocontents("height");
                p.pan04.set_verticalgap("0");
                p.pan04.set_spacing("0px 20px 10px 20px");
                p.pan04.set_cssclass("pal_WF_DtlBg");
                p.pan04.move("0","60","100%","96",null,null);

                p.rdoZone.set_taborder("29");
                p.rdoZone.set_fittocontents("width");
                p.rdoZone.set_innerdataset(divForm_form_Div03_form_rdoZone_innerdataset);
                p.rdoZone.set_codecolumn("codecolumn");
                p.rdoZone.set_datacolumn("datacolumn");
                p.rdoZone.set_direction("vertical");
                p.rdoZone.set_index("-1");
                p.rdoZone.move("127","203","100%","40",null,null);

                p.calDmndBgngYmd.set_taborder("14");
                p.calDmndBgngYmd.set_dateformat("yyyy-MM-dd");
                p.calDmndBgngYmd.set_value("20240702");
                p.calDmndBgngYmd.set_type("normal");
                p.calDmndBgngYmd.move("200.00","728","100%","40",null,null);

                p.cal00_00_00.set_taborder("17");
                p.cal00_00_00.set_dateformat("yyyy-MM-dd");
                p.cal00_00_00.set_value("20240702");
                p.cal00_00_00.set_type("normal");
                p.cal00_00_00.set_readonly("true");
                p.cal00_00_00.move("200.00","728","100%","40",null,null);

                p.cboSrvcAplySe.set_taborder("23");
                p.cboSrvcAplySe.set_innerdataset("dsAplyKndList");
                p.cboSrvcAplySe.set_codecolumn("cdId");
                p.cboSrvcAplySe.set_datacolumn("cdNm");
                p.cboSrvcAplySe.set_displaynulltext("선택");
                p.cboSrvcAplySe.set_text("");
                p.cboSrvcAplySe.set_index("-1");
                p.cboSrvcAplySe.move("200.00","128","100%","40",null,null);

                p.pan02_.set_taborder("2");
                p.pan02_.set_type("vertical");
                p.pan02_.set_flexgrow("1");
                p.pan02_.move("10.00","98","300","86",null,null);

                p.pan02_03.set_taborder("30");
                p.pan02_03.set_type("vertical");
                p.pan02_03.set_flexgrow("1");
                p.pan02_03.move("10.00","98","300","1",null,null);

                p.cboBldg.set_taborder("31");
                p.cboBldg.set_innerdataset("dsBldgSeList");
                p.cboBldg.set_codecolumn("cdId");
                p.cboBldg.set_datacolumn("cdNm");
                p.cboBldg.set_displaynulltext("선택");
                p.cboBldg.set_text("");
                p.cboBldg.set_index("-1");
                p.cboBldg.move("-191.00","391","100.00%","39",null,null);
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
                p.staPblcnPrdctSpcfat.set_taborder("0");
                p.staPblcnPrdctSpcfat.set_text("재직서 발행제품 사양서");
                p.staPblcnPrdctSpcfat.set_cssclass("sta_WF_Label_E");
                p.staPblcnPrdctSpcfat.set_flexgrow("1");
                p.staPblcnPrdctSpcfat.move("0","44","305","46",null,null);

                p.panBtnFile.set_taborder("3");
                p.panBtnFile.set_flexgrow("1");
                p.panBtnFile.set_flexcrossaxisalign("start");
                p.panBtnFile.set_flexmainaxisalign("end");
                p.panBtnFile.set_horizontalgap("10");
                p.panBtnFile.move("433","58","305","46",null,null);

                p.panTitle.set_taborder("4");
                p.panTitle.set_cssclass("pan_WF_FileTitle");
                p.panTitle.set_flexwrap("wrap");
                p.panTitle.set_fittocontents("height");
                p.panTitle.move("0","124","100%","92",null,null);

                p.Static00.set_taborder("5");
                p.Static00.set_text("파일수 : ");
                p.Static00.set_fittocontents("width");
                p.Static00.move("88","123","48","46",null,null);

                p.staPblcnPrdctSpcfatCnt.set_taborder("6");
                p.staPblcnPrdctSpcfatCnt.set_text("0");
                p.staPblcnPrdctSpcfatCnt.set_fittocontents("width");
                p.staPblcnPrdctSpcfatCnt.move("165","143","9","46",null,null);

                p.Static02.set_taborder("7");
                p.Static02.set_text("개");
                p.Static02.set_fittocontents("width");
                p.Static02.move("293","131","13","46",null,null);

                p.panFileNum.set_taborder("8");
                p.panFileNum.set_flexgrow("1");
                p.panFileNum.set_horizontalgap("4");
                p.panFileNum.move("20","190","305","46",null,null);

                p.panBtnDel.set_taborder("9");
                p.panBtnDel.set_flexcrossaxisalign("center");
                p.panBtnDel.set_flexmainaxisalign("end");
                p.panBtnDel.set_flexgrow("1");
                p.panBtnDel.move("517","141","305","46",null,null);

                p.panFile.set_taborder("11");
                p.panFile.set_fittocontents("height");
                p.panFile.set_spacing("10px 0px 0px 0px");
                p.panFile.set_flexwrap("wrap");
                p.panFile.set_verticalgap("4");
                p.panFile.set_flexgrow("1");
                p.panFile.move("0","42","300","196",null,null);

                p.staInsrncJoinPrdoc.set_taborder("13");
                p.staInsrncJoinPrdoc.set_text("보험가입증서");
                p.staInsrncJoinPrdoc.set_cssclass("sta_WF_Label_E");
                p.staInsrncJoinPrdoc.set_flexgrow("1");
                p.staInsrncJoinPrdoc.move("0","44","305","46",null,null);

                p.btnInsrncJoinPrdocSample.set_taborder("14");
                p.btnInsrncJoinPrdocSample.set_text("샘플첨부파일명");
                p.btnInsrncJoinPrdocSample.set_cssclass("btn_WF_Small");
                p.btnInsrncJoinPrdocSample.set_fittocontents("width");
                p.btnInsrncJoinPrdocSample.move("813","76","120","40",null,null);

                p.btnInsrncJoinPrdocFile.set_taborder("15");
                p.btnInsrncJoinPrdocFile.set_text("파일선택");
                p.btnInsrncJoinPrdocFile.set_cssclass("btn_WF_FileUp");
                p.btnInsrncJoinPrdocFile.getSetter("upcolid").set("insrncJoinPrdocFile");
                p.btnInsrncJoinPrdocFile.move("124","58","116","40",null,null);

                p.panBtnFile00.set_taborder("16");
                p.panBtnFile00.set_flexgrow("1");
                p.panBtnFile00.set_flexcrossaxisalign("start");
                p.panBtnFile00.set_flexmainaxisalign("end");
                p.panBtnFile00.set_horizontalgap("10");
                p.panBtnFile00.move("433","58","305","46",null,null);

                p.panTitle00.set_taborder("17");
                p.panTitle00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00.set_flexwrap("wrap");
                p.panTitle00.set_fittocontents("height");
                p.panTitle00.move("0","124","100%","92",null,null);

                p.Static00_00.set_taborder("18");
                p.Static00_00.set_text("파일수 : ");
                p.Static00_00.set_fittocontents("width");
                p.Static00_00.move("88","123","48","46",null,null);

                p.staInsrncJoinPrdocCnt.set_taborder("19");
                p.staInsrncJoinPrdocCnt.set_text("0");
                p.staInsrncJoinPrdocCnt.set_fittocontents("width");
                p.staInsrncJoinPrdocCnt.move("165","143","9","46",null,null);

                p.Static02_00.set_taborder("20");
                p.Static02_00.set_text("개");
                p.Static02_00.set_fittocontents("width");
                p.Static02_00.move("293","131","13","46",null,null);

                p.panFileNum00.set_taborder("21");
                p.panFileNum00.set_flexgrow("1");
                p.panFileNum00.set_horizontalgap("4");
                p.panFileNum00.move("20","190","305","46",null,null);

                p.panBtnDel00.set_taborder("22");
                p.panBtnDel00.set_flexcrossaxisalign("center");
                p.panBtnDel00.set_flexmainaxisalign("end");
                p.panBtnDel00.set_flexgrow("1");
                p.panBtnDel00.move("517","141","305","46",null,null);

                p.panFile00.set_taborder("25");
                p.panFile00.set_fittocontents("height");
                p.panFile00.set_spacing("10px 0px 0px 0px");
                p.panFile00.set_flexwrap("wrap");
                p.panFile00.set_verticalgap("4");
                p.panFile00.set_flexgrow("1");
                p.panFile00.move("0","42","300","196",null,null);

                p.pan00.set_taborder("26");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("0","60","100.00%","207",null,null);

                p.btnPblcnPrdctSpcfatSample.set_taborder("1");
                p.btnPblcnPrdctSpcfatSample.set_text("샘플첨부파일명");
                p.btnPblcnPrdctSpcfatSample.set_cssclass("btn_WF_Small");
                p.btnPblcnPrdctSpcfatSample.set_fittocontents("width");
                p.btnPblcnPrdctSpcfatSample.move("813","76","120","40",null,null);

                p.btnPblcnPrdctSpcfatFile.set_taborder("2");
                p.btnPblcnPrdctSpcfatFile.set_text("파일선택");
                p.btnPblcnPrdctSpcfatFile.set_cssclass("btn_WF_FileUp");
                p.btnPblcnPrdctSpcfatFile.getSetter("upcolid").set("pblcnPrdctSpcfatFile");
                p.btnPblcnPrdctSpcfatFile.move("124","58","116","40",null,null);

                p.grdPblcnPrdctSpcfat.set_taborder("12");
                p.grdPblcnPrdctSpcfat.set_binddataset("dsFile");
                p.grdPblcnPrdctSpcfat.set_autofittype("col");
                p.grdPblcnPrdctSpcfat.set_cssclass("grd_WF_FileAdd");
                p.grdPblcnPrdctSpcfat.set_scrollbartype("none none");
                p.grdPblcnPrdctSpcfat.move("20.00","114","100%","40",null,null);

                p.Panel00.set_taborder("10");
                p.Panel00.move("20","51","100%","46",null,null);

                p.Panel00_00.set_taborder("23");
                p.Panel00_00.move("20","51","100%","46",null,null);

                p.grdInsrncJoinPrdoc.set_taborder("24");
                p.grdInsrncJoinPrdoc.set_binddataset("dsFile");
                p.grdInsrncJoinPrdoc.set_autofittype("col");
                p.grdInsrncJoinPrdoc.set_cssclass("grd_WF_FileAdd");
                p.grdInsrncJoinPrdoc.set_scrollbartype("none none");
                p.grdInsrncJoinPrdoc.move("20.00","114","100%","40",null,null);
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
                p.staElcttrFrtPhoto.set_taborder("0");
                p.staElcttrFrtPhoto.set_text("전동차 전면 사진");
                p.staElcttrFrtPhoto.set_cssclass("sta_WF_Label_E");
                p.staElcttrFrtPhoto.set_flexgrow("1");
                p.staElcttrFrtPhoto.move("0","44","305","46",null,null);

                p.btnElcttrFrtPhotoSample.set_taborder("1");
                p.btnElcttrFrtPhotoSample.set_text("샘플첨부파일명");
                p.btnElcttrFrtPhotoSample.set_cssclass("btn_WF_Small");
                p.btnElcttrFrtPhotoSample.set_fittocontents("width");
                p.btnElcttrFrtPhotoSample.move("813","76","120","40",null,null);

                p.btnElcttrFrtPhotoFile.set_taborder("2");
                p.btnElcttrFrtPhotoFile.set_text("파일선택");
                p.btnElcttrFrtPhotoFile.set_cssclass("btn_WF_FileUp");
                p.btnElcttrFrtPhotoFile.getSetter("upcolid").set("elcttrFrtPhotoFile");
                p.btnElcttrFrtPhotoFile.move("124","58","116","40",null,null);

                p.panBtnFile02.set_taborder("3");
                p.panBtnFile02.set_flexgrow("1");
                p.panBtnFile02.set_flexcrossaxisalign("start");
                p.panBtnFile02.set_flexmainaxisalign("end");
                p.panBtnFile02.set_horizontalgap("10");
                p.panBtnFile02.move("433","58","305","46",null,null);

                p.panTitle02.set_taborder("4");
                p.panTitle02.set_cssclass("pan_WF_FileTitle");
                p.panTitle02.set_flexwrap("wrap");
                p.panTitle02.set_fittocontents("height");
                p.panTitle02.move("0","124","100%","46",null,null);

                p.Static00_02.set_taborder("5");
                p.Static00_02.set_text("파일수 : ");
                p.Static00_02.set_fittocontents("width");
                p.Static00_02.move("88","123","48","46",null,null);

                p.staElcttrFrtPhotoCnt.set_taborder("6");
                p.staElcttrFrtPhotoCnt.set_text("0");
                p.staElcttrFrtPhotoCnt.set_fittocontents("width");
                p.staElcttrFrtPhotoCnt.move("165","143","9","46",null,null);

                p.Static02_02.set_taborder("7");
                p.Static02_02.set_text("개");
                p.Static02_02.set_fittocontents("width");
                p.Static02_02.move("293","131","13","46",null,null);

                p.panFileNum02.set_taborder("8");
                p.panFileNum02.set_flexgrow("1");
                p.panFileNum02.set_horizontalgap("4");
                p.panFileNum02.move("20","190","305","46",null,null);

                p.panBtnDel02.set_taborder("9");
                p.panBtnDel02.set_flexcrossaxisalign("center");
                p.panBtnDel02.set_flexmainaxisalign("end");
                p.panBtnDel02.set_flexgrow("1");
                p.panBtnDel02.move("517","141","305","46",null,null);

                p.Panel00_02.set_taborder("10");
                p.Panel00_02.move("20","51","100%","46",null,null);

                p.grdElcttrFrtPhoto.set_taborder("11");
                p.grdElcttrFrtPhoto.set_binddataset("dsFile");
                p.grdElcttrFrtPhoto.set_autofittype("col");
                p.grdElcttrFrtPhoto.set_cssclass("grd_WF_FileAdd");
                p.grdElcttrFrtPhoto.set_scrollbartype("none none");
                p.grdElcttrFrtPhoto.move("20.00","114","100%","40",null,null);

                p.panFile02.set_taborder("12");
                p.panFile02.set_fittocontents("height");
                p.panFile02.set_spacing("10px 0px 0px 0px");
                p.panFile02.set_flexwrap("wrap");
                p.panFile02.set_verticalgap("4");
                p.panFile02.set_flexgrow("1");
                p.panFile02.move("0","42","980","150",null,null);

                p.pan00.set_taborder("13");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("0","60","100.00%","161",null,null);

                p.staElcttrRarPhoto.set_taborder("14");
                p.staElcttrRarPhoto.set_text("전동차 후면 사진");
                p.staElcttrRarPhoto.set_cssclass("sta_WF_Label_E");
                p.staElcttrRarPhoto.set_flexgrow("1");
                p.staElcttrRarPhoto.move("0","44","305","46",null,null);

                p.btnElcttrRarPhotoSample.set_taborder("15");
                p.btnElcttrRarPhotoSample.set_text("샘플첨부파일명");
                p.btnElcttrRarPhotoSample.set_cssclass("btn_WF_Small");
                p.btnElcttrRarPhotoSample.set_fittocontents("width");
                p.btnElcttrRarPhotoSample.move("813","76","120","40",null,null);

                p.btnElcttrRarPhotoFile.set_taborder("16");
                p.btnElcttrRarPhotoFile.set_text("파일선택");
                p.btnElcttrRarPhotoFile.set_cssclass("btn_WF_FileUp");
                p.btnElcttrRarPhotoFile.getSetter("upcolid").set("elcttrRarPhotoFile");
                p.btnElcttrRarPhotoFile.move("124","58","116","40",null,null);

                p.panBtnFile02_00.set_taborder("17");
                p.panBtnFile02_00.set_flexgrow("1");
                p.panBtnFile02_00.set_flexcrossaxisalign("start");
                p.panBtnFile02_00.set_flexmainaxisalign("end");
                p.panBtnFile02_00.set_horizontalgap("10");
                p.panBtnFile02_00.move("433","58","305","46",null,null);

                p.panTitle02_00.set_taborder("18");
                p.panTitle02_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle02_00.set_flexwrap("wrap");
                p.panTitle02_00.set_fittocontents("height");
                p.panTitle02_00.move("0","124","100%","46",null,null);

                p.Static00_02_00.set_taborder("19");
                p.Static00_02_00.set_text("파일수 : ");
                p.Static00_02_00.set_fittocontents("width");
                p.Static00_02_00.move("88","123","48","46",null,null);

                p.staElcttrRarPhotoCnt.set_taborder("20");
                p.staElcttrRarPhotoCnt.set_text("0");
                p.staElcttrRarPhotoCnt.set_fittocontents("width");
                p.staElcttrRarPhotoCnt.move("165","143","9","46",null,null);

                p.Static02_02_00.set_taborder("21");
                p.Static02_02_00.set_text("개");
                p.Static02_02_00.set_fittocontents("width");
                p.Static02_02_00.move("293","131","13","46",null,null);

                p.panFileNum02_00.set_taborder("22");
                p.panFileNum02_00.set_flexgrow("1");
                p.panFileNum02_00.set_horizontalgap("4");
                p.panFileNum02_00.move("20","190","305","46",null,null);

                p.panBtnDel02_00.set_taborder("23");
                p.panBtnDel02_00.set_flexcrossaxisalign("center");
                p.panBtnDel02_00.set_flexmainaxisalign("end");
                p.panBtnDel02_00.set_flexgrow("1");
                p.panBtnDel02_00.move("517","141","305","46",null,null);

                p.Panel00_02_00.set_taborder("24");
                p.Panel00_02_00.move("20","51","100%","46",null,null);

                p.grdElcttrRarPhoto.set_taborder("25");
                p.grdElcttrRarPhoto.set_binddataset("dsFile");
                p.grdElcttrRarPhoto.set_autofittype("col");
                p.grdElcttrRarPhoto.set_cssclass("grd_WF_FileAdd");
                p.grdElcttrRarPhoto.set_scrollbartype("none none");
                p.grdElcttrRarPhoto.move("20.00","114","100%","40",null,null);

                p.panFile02_00.set_taborder("26");
                p.panFile02_00.set_fittocontents("height");
                p.panFile02_00.set_spacing("10px 0px 0px 0px");
                p.panFile02_00.set_flexwrap("wrap");
                p.panFile02_00.set_verticalgap("4");
                p.panFile02_00.set_flexgrow("1");
                p.panFile02_00.move("0","42","980","150",null,null);

                p.pan01.set_taborder("27");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_fittocontents("height");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.move("0","60","100.00%","161",null,null);

                p.staElcttrFlkPhoto.set_taborder("28");
                p.staElcttrFlkPhoto.set_text("전동차 측면 사진");
                p.staElcttrFlkPhoto.set_cssclass("sta_WF_Label_E");
                p.staElcttrFlkPhoto.set_flexgrow("1");
                p.staElcttrFlkPhoto.move("0","44","305","46",null,null);

                p.btnElcttrFlkPhotoSample.set_taborder("29");
                p.btnElcttrFlkPhotoSample.set_text("샘플첨부파일명");
                p.btnElcttrFlkPhotoSample.set_cssclass("btn_WF_Small");
                p.btnElcttrFlkPhotoSample.set_fittocontents("width");
                p.btnElcttrFlkPhotoSample.move("813","76","120","40",null,null);

                p.btnElcttrFlkPhotoFile.set_taborder("30");
                p.btnElcttrFlkPhotoFile.set_text("파일선택");
                p.btnElcttrFlkPhotoFile.set_cssclass("btn_WF_FileUp");
                p.btnElcttrFlkPhotoFile.getSetter("upcolid").set("elcttrFlkPhotoFile");
                p.btnElcttrFlkPhotoFile.move("124","58","116","40",null,null);

                p.panBtnFile02_01.set_taborder("31");
                p.panBtnFile02_01.set_flexgrow("1");
                p.panBtnFile02_01.set_flexcrossaxisalign("start");
                p.panBtnFile02_01.set_flexmainaxisalign("end");
                p.panBtnFile02_01.set_horizontalgap("10");
                p.panBtnFile02_01.move("433","58","305","46",null,null);

                p.panTitle02_01.set_taborder("32");
                p.panTitle02_01.set_cssclass("pan_WF_FileTitle");
                p.panTitle02_01.set_flexwrap("wrap");
                p.panTitle02_01.set_fittocontents("height");
                p.panTitle02_01.move("0","124","100%","46",null,null);

                p.Static00_02_01.set_taborder("33");
                p.Static00_02_01.set_text("파일수 : ");
                p.Static00_02_01.set_fittocontents("width");
                p.Static00_02_01.move("88","123","48","46",null,null);

                p.staElcttrFlkPhotoCnt.set_taborder("34");
                p.staElcttrFlkPhotoCnt.set_text("0");
                p.staElcttrFlkPhotoCnt.set_fittocontents("width");
                p.staElcttrFlkPhotoCnt.move("165","143","9","46",null,null);

                p.Static02_02_01.set_taborder("35");
                p.Static02_02_01.set_text("개");
                p.Static02_02_01.set_fittocontents("width");
                p.Static02_02_01.move("293","131","13","46",null,null);

                p.panFileNum02_01.set_taborder("36");
                p.panFileNum02_01.set_flexgrow("1");
                p.panFileNum02_01.set_horizontalgap("4");
                p.panFileNum02_01.move("20","190","305","46",null,null);

                p.panBtnDel02_01.set_taborder("37");
                p.panBtnDel02_01.set_flexcrossaxisalign("center");
                p.panBtnDel02_01.set_flexmainaxisalign("end");
                p.panBtnDel02_01.set_flexgrow("1");
                p.panBtnDel02_01.move("517","141","305","46",null,null);

                p.Panel00_02_01.set_taborder("38");
                p.Panel00_02_01.move("20","51","100%","46",null,null);

                p.grdElcttrFlkPhoto.set_taborder("39");
                p.grdElcttrFlkPhoto.set_binddataset("dsFile");
                p.grdElcttrFlkPhoto.set_autofittype("col");
                p.grdElcttrFlkPhoto.set_cssclass("grd_WF_FileAdd");
                p.grdElcttrFlkPhoto.set_scrollbartype("none none");
                p.grdElcttrFlkPhoto.move("20.00","114","100%","40",null,null);

                p.panFile02_01.set_taborder("40");
                p.panFile02_01.set_fittocontents("height");
                p.panFile02_01.set_spacing("10px 0px 0px 0px");
                p.panFile02_01.set_flexwrap("wrap");
                p.panFile02_01.set_verticalgap("4");
                p.panFile02_01.set_flexgrow("1");
                p.panFile02_01.move("0","42","980","150",null,null);

                p.pan02.set_taborder("41");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","60","100.00%","161",null,null);
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
            //-- Default Layout : this.divForm.form.Div06.form
            obj = new Layout("default","",0,0,this.divForm.form.Div06.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staPrtcZoneAdpsFrtsd.set_taborder("0");
                p.staPrtcZoneAdpsFrtsd.set_text("보호구역 출입증 사본(앞면)");
                p.staPrtcZoneAdpsFrtsd.set_cssclass("sta_WF_Label_E");
                p.staPrtcZoneAdpsFrtsd.set_flexgrow("1");
                p.staPrtcZoneAdpsFrtsd.move("0","44","305","46",null,null);

                p.btnPrtcZoneAdpsFrtsdSample.set_taborder("1");
                p.btnPrtcZoneAdpsFrtsdSample.set_text("샘플첨부파일명");
                p.btnPrtcZoneAdpsFrtsdSample.set_cssclass("btn_WF_Small");
                p.btnPrtcZoneAdpsFrtsdSample.set_fittocontents("width");
                p.btnPrtcZoneAdpsFrtsdSample.move("813","76","120","40",null,null);

                p.panBtnFile.set_taborder("3");
                p.panBtnFile.set_flexgrow("1");
                p.panBtnFile.set_flexcrossaxisalign("start");
                p.panBtnFile.set_flexmainaxisalign("end");
                p.panBtnFile.set_horizontalgap("10");
                p.panBtnFile.move("433","58","305","46",null,null);

                p.panTitle.set_taborder("4");
                p.panTitle.set_cssclass("pan_WF_FileTitle");
                p.panTitle.set_flexwrap("wrap");
                p.panTitle.set_fittocontents("height");
                p.panTitle.move("0","124","100%","92",null,null);

                p.Static00.set_taborder("5");
                p.Static00.set_text("파일수 : ");
                p.Static00.set_fittocontents("width");
                p.Static00.move("88","123","48","46",null,null);

                p.staPrtcZoneAdpsFrtsdCnt.set_taborder("6");
                p.staPrtcZoneAdpsFrtsdCnt.set_text("0");
                p.staPrtcZoneAdpsFrtsdCnt.set_fittocontents("width");
                p.staPrtcZoneAdpsFrtsdCnt.move("165","143","9","46",null,null);

                p.Static02.set_taborder("7");
                p.Static02.set_text("개");
                p.Static02.set_fittocontents("width");
                p.Static02.move("293","131","13","46",null,null);

                p.panFileNum.set_taborder("8");
                p.panFileNum.set_flexgrow("1");
                p.panFileNum.set_horizontalgap("4");
                p.panFileNum.move("20","190","305","46",null,null);

                p.panBtnDel.set_taborder("9");
                p.panBtnDel.set_flexcrossaxisalign("center");
                p.panBtnDel.set_flexmainaxisalign("end");
                p.panBtnDel.set_flexgrow("1");
                p.panBtnDel.move("517","141","305","46",null,null);

                p.panFile.set_taborder("11");
                p.panFile.set_fittocontents("height");
                p.panFile.set_spacing("10px 0px 0px 0px");
                p.panFile.set_flexwrap("wrap");
                p.panFile.set_verticalgap("4");
                p.panFile.set_flexgrow("1");
                p.panFile.move("0","42","300","230",null,null);

                p.staPrtcZoneAdpsBaksd.set_taborder("13");
                p.staPrtcZoneAdpsBaksd.set_text("보호구역 출입증 사본(뒷면)");
                p.staPrtcZoneAdpsBaksd.set_cssclass("sta_WF_Label_E");
                p.staPrtcZoneAdpsBaksd.set_flexgrow("1");
                p.staPrtcZoneAdpsBaksd.move("0","44","305","46",null,null);

                p.btnPrtcZoneAdpsBaksdSample.set_taborder("14");
                p.btnPrtcZoneAdpsBaksdSample.set_text("샘플첨부파일명");
                p.btnPrtcZoneAdpsBaksdSample.set_cssclass("btn_WF_Small");
                p.btnPrtcZoneAdpsBaksdSample.set_fittocontents("width");
                p.btnPrtcZoneAdpsBaksdSample.move("813","76","120","40",null,null);

                p.btnPrtcZoneAdpsBaksdFile.set_taborder("15");
                p.btnPrtcZoneAdpsBaksdFile.set_text("파일선택");
                p.btnPrtcZoneAdpsBaksdFile.set_cssclass("btn_WF_FileUp");
                p.btnPrtcZoneAdpsBaksdFile.getSetter("upcolid").set("prtcZoneAdpsBaksdFile");
                p.btnPrtcZoneAdpsBaksdFile.move("124","58","116","40",null,null);

                p.panBtnFile00.set_taborder("16");
                p.panBtnFile00.set_flexgrow("1");
                p.panBtnFile00.set_flexcrossaxisalign("start");
                p.panBtnFile00.set_flexmainaxisalign("end");
                p.panBtnFile00.set_horizontalgap("10");
                p.panBtnFile00.move("433","58","305","46",null,null);

                p.panTitle00.set_taborder("17");
                p.panTitle00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00.set_flexwrap("wrap");
                p.panTitle00.set_fittocontents("height");
                p.panTitle00.move("0","124","100%","92",null,null);

                p.Static00_00.set_taborder("18");
                p.Static00_00.set_text("파일수 : ");
                p.Static00_00.set_fittocontents("width");
                p.Static00_00.move("88","123","48","46",null,null);

                p.staPrtcZoneAdpsBaksdCnt.set_taborder("19");
                p.staPrtcZoneAdpsBaksdCnt.set_text("0");
                p.staPrtcZoneAdpsBaksdCnt.set_fittocontents("width");
                p.staPrtcZoneAdpsBaksdCnt.move("165","143","9","46",null,null);

                p.Static02_00.set_taborder("20");
                p.Static02_00.set_text("개");
                p.Static02_00.set_fittocontents("width");
                p.Static02_00.move("293","131","13","46",null,null);

                p.panFileNum00.set_taborder("21");
                p.panFileNum00.set_flexgrow("1");
                p.panFileNum00.set_horizontalgap("4");
                p.panFileNum00.move("20","190","305","46",null,null);

                p.panBtnDel00.set_taborder("22");
                p.panBtnDel00.set_flexcrossaxisalign("center");
                p.panBtnDel00.set_flexmainaxisalign("end");
                p.panBtnDel00.set_flexgrow("1");
                p.panBtnDel00.move("517","141","305","46",null,null);

                p.panFile00.set_taborder("25");
                p.panFile00.set_fittocontents("height");
                p.panFile00.set_spacing("10px 0px 0px 0px");
                p.panFile00.set_flexwrap("wrap");
                p.panFile00.set_verticalgap("4");
                p.panFile00.set_flexgrow("1");
                p.panFile00.move("520","0","300","230",null,null);

                p.staCarLcnDpct.set_taborder("29");
                p.staCarLcnDpct.set_text("자동차 운전면허증 사본");
                p.staCarLcnDpct.set_cssclass("sta_WF_Label_E");
                p.staCarLcnDpct.set_flexgrow("1");
                p.staCarLcnDpct.move("0","44","305","46",null,null);

                p.btnCarLcnDpctSample.set_taborder("30");
                p.btnCarLcnDpctSample.set_text("샘플첨부파일명");
                p.btnCarLcnDpctSample.set_cssclass("btn_WF_Small");
                p.btnCarLcnDpctSample.set_fittocontents("width");
                p.btnCarLcnDpctSample.move("813","76","120","40",null,null);

                p.btnCarLcnDpctFile.set_taborder("31");
                p.btnCarLcnDpctFile.set_text("파일선택");
                p.btnCarLcnDpctFile.set_cssclass("btn_WF_FileUp");
                p.btnCarLcnDpctFile.getSetter("upcolid").set("carLcnDpctFile");
                p.btnCarLcnDpctFile.move("124","58","116","40",null,null);

                p.panBtnFile01.set_taborder("32");
                p.panBtnFile01.set_flexgrow("1");
                p.panBtnFile01.set_flexcrossaxisalign("start");
                p.panBtnFile01.set_flexmainaxisalign("end");
                p.panBtnFile01.set_horizontalgap("10");
                p.panBtnFile01.move("433","58","305","46",null,null);

                p.panTitle01.set_taborder("33");
                p.panTitle01.set_cssclass("pan_WF_FileTitle");
                p.panTitle01.set_flexwrap("wrap");
                p.panTitle01.set_fittocontents("height");
                p.panTitle01.move("0","124","100%","92",null,null);

                p.Static00_01.set_taborder("34");
                p.Static00_01.set_text("파일수 : ");
                p.Static00_01.set_fittocontents("width");
                p.Static00_01.move("88","123","48","46",null,null);

                p.staCarLcnDpctCnt.set_taborder("35");
                p.staCarLcnDpctCnt.set_text("0");
                p.staCarLcnDpctCnt.set_fittocontents("width");
                p.staCarLcnDpctCnt.move("165","143","9","46",null,null);

                p.Static02_01.set_taborder("36");
                p.Static02_01.set_text("개");
                p.Static02_01.set_fittocontents("width");
                p.Static02_01.move("293","131","13","46",null,null);

                p.panFileNum01.set_taborder("37");
                p.panFileNum01.set_flexgrow("1");
                p.panFileNum01.set_horizontalgap("4");
                p.panFileNum01.move("20","190","305","46",null,null);

                p.panBtnDel01.set_taborder("38");
                p.panBtnDel01.set_flexcrossaxisalign("center");
                p.panBtnDel01.set_flexmainaxisalign("end");
                p.panBtnDel01.set_flexgrow("1");
                p.panBtnDel01.move("517","141","305","46",null,null);

                p.panFile01.set_taborder("42");
                p.panFile01.set_fittocontents("height");
                p.panFile01.set_spacing("10px 0px 0px 0px");
                p.panFile01.set_flexwrap("wrap");
                p.panFile01.set_verticalgap("4");
                p.panFile01.set_flexgrow("1");
                p.panFile01.move("0","42","300","230",null,null);

                p.staBizcrdPhoto.set_taborder("43");
                p.staBizcrdPhoto.set_text("번명함 사진 파일");
                p.staBizcrdPhoto.set_cssclass("sta_WF_Label_E");
                p.staBizcrdPhoto.set_flexgrow("1");
                p.staBizcrdPhoto.move("0","44","305","46",null,null);

                p.btnBizcrdPhotoSample.set_taborder("44");
                p.btnBizcrdPhotoSample.set_text("샘플첨부파일명");
                p.btnBizcrdPhotoSample.set_cssclass("btn_WF_Small");
                p.btnBizcrdPhotoSample.set_fittocontents("width");
                p.btnBizcrdPhotoSample.move("813","76","120","40",null,null);

                p.btnBizcrdPhotoFile.set_taborder("45");
                p.btnBizcrdPhotoFile.set_text("파일선택");
                p.btnBizcrdPhotoFile.set_cssclass("btn_WF_FileUp");
                p.btnBizcrdPhotoFile.getSetter("upcolid").set("bizcrdPhotoFile");
                p.btnBizcrdPhotoFile.move("124","58","116","40",null,null);

                p.panBtnFile00_00.set_taborder("46");
                p.panBtnFile00_00.set_flexgrow("1");
                p.panBtnFile00_00.set_flexcrossaxisalign("start");
                p.panBtnFile00_00.set_flexmainaxisalign("end");
                p.panBtnFile00_00.set_horizontalgap("10");
                p.panBtnFile00_00.move("433","58","305","46",null,null);

                p.panTitle00_00.set_taborder("47");
                p.panTitle00_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00.set_flexwrap("wrap");
                p.panTitle00_00.set_fittocontents("height");
                p.panTitle00_00.move("0","124","100%","92",null,null);

                p.Static00_00_00.set_taborder("48");
                p.Static00_00_00.set_text("파일수 : ");
                p.Static00_00_00.set_fittocontents("width");
                p.Static00_00_00.move("88","123","48","46",null,null);

                p.staBizcrdPhotoCnt.set_taborder("49");
                p.staBizcrdPhotoCnt.set_text("0");
                p.staBizcrdPhotoCnt.set_fittocontents("width");
                p.staBizcrdPhotoCnt.move("165","143","9","46",null,null);

                p.Static02_00_00.set_taborder("50");
                p.Static02_00_00.set_text("개");
                p.Static02_00_00.set_fittocontents("width");
                p.Static02_00_00.move("293","131","13","46",null,null);

                p.panFileNum00_00.set_taborder("51");
                p.panFileNum00_00.set_flexgrow("1");
                p.panFileNum00_00.set_horizontalgap("4");
                p.panFileNum00_00.move("20","190","305","46",null,null);

                p.panBtnDel00_00.set_taborder("52");
                p.panBtnDel00_00.set_flexcrossaxisalign("center");
                p.panBtnDel00_00.set_flexmainaxisalign("end");
                p.panBtnDel00_00.set_flexgrow("1");
                p.panBtnDel00_00.move("517","141","305","46",null,null);

                p.panFile00_00.set_taborder("56");
                p.panFile00_00.set_fittocontents("height");
                p.panFile00_00.set_spacing("10px 0px 0px 0px");
                p.panFile00_00.set_flexwrap("wrap");
                p.panFile00_00.set_verticalgap("4");
                p.panFile00_00.set_flexgrow("1");
                p.panFile00_00.move("520","0","300","230",null,null);

                p.pan00.set_taborder("26");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("0","60","100.00%","241",null,null);

                p.pan01.set_taborder("57");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_fittocontents("height");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.move("0","60","100.00%","241",null,null);

                p.Panel00.set_taborder("10");
                p.Panel00.move("20","51","100%","46",null,null);

                p.grdPrtcZoneAdpsFrtsd.set_taborder("12");
                p.grdPrtcZoneAdpsFrtsd.set_binddataset("dsFile");
                p.grdPrtcZoneAdpsFrtsd.set_autofittype("col");
                p.grdPrtcZoneAdpsFrtsd.set_cssclass("grd_WF_FileAdd");
                p.grdPrtcZoneAdpsFrtsd.set_scrollbartype("none none");
                p.grdPrtcZoneAdpsFrtsd.move("20.00","114","100%","40",null,null);

                p.Panel00_00.set_taborder("23");
                p.Panel00_00.move("20","51","100%","46",null,null);

                p.grdPrtcZoneAdpsBaksd.set_taborder("24");
                p.grdPrtcZoneAdpsBaksd.set_binddataset("dsFile");
                p.grdPrtcZoneAdpsBaksd.set_autofittype("col");
                p.grdPrtcZoneAdpsBaksd.set_cssclass("grd_WF_FileAdd");
                p.grdPrtcZoneAdpsBaksd.set_scrollbartype("none none");
                p.grdPrtcZoneAdpsBaksd.move("20.00","114","100%","40",null,null);

                p.sta00_00.set_taborder("27");
                p.sta00_00.set_text("주민번호 뒷자리 및 출입증 발급번호 마스킹");
                p.sta00_00.set_cssclass("sta_WF_Des");
                p.sta00_00.set_fittocontents("height");
                p.sta00_00.move("20","20","100%","30",null,null);

                p.sta00_00_00.set_taborder("28");
                p.sta00_00_00.set_text("주민번호 뒷자리 및 출입증 발급번호 마스킹");
                p.sta00_00_00.set_cssclass("sta_WF_Des");
                p.sta00_00_00.set_fittocontents("height");
                p.sta00_00_00.move("20","20","100%","30",null,null);

                p.Panel00_01.set_taborder("39");
                p.Panel00_01.move("20","51","100%","46",null,null);

                p.grdCarLcnDpct.set_taborder("40");
                p.grdCarLcnDpct.set_binddataset("dsFile");
                p.grdCarLcnDpct.set_autofittype("col");
                p.grdCarLcnDpct.set_cssclass("grd_WF_FileAdd");
                p.grdCarLcnDpct.set_scrollbartype("none none");
                p.grdCarLcnDpct.move("20.00","114","100%","40",null,null);

                p.sta00_00_01.set_taborder("41");
                p.sta00_00_01.set_text("주민번호 뒷자리 및 출입증 발급번호 마스킹");
                p.sta00_00_01.set_cssclass("sta_WF_Des");
                p.sta00_00_01.set_fittocontents("height");
                p.sta00_00_01.move("20","20","100%","30",null,null);

                p.Panel00_00_00.set_taborder("53");
                p.Panel00_00_00.move("20","51","100%","46",null,null);

                p.grdBizcrdPhoto.set_taborder("54");
                p.grdBizcrdPhoto.set_binddataset("dsFile");
                p.grdBizcrdPhoto.set_autofittype("col");
                p.grdBizcrdPhoto.set_cssclass("grd_WF_FileAdd");
                p.grdBizcrdPhoto.set_scrollbartype("none none");
                p.grdBizcrdPhoto.move("20.00","114","100%","40",null,null);

                p.sta00_00_00_00.set_taborder("55");
                p.sta00_00_00_00.set_text("354x472 [해상도 200dpi이상]");
                p.sta00_00_00_00.set_cssclass("sta_WF_Des");
                p.sta00_00_00_00.set_fittocontents("height");
                p.sta00_00_00_00.move("20","20","100%","30",null,null);

                p.btnPrtcZoneAdpsFrtsdFile.set_taborder("2");
                p.btnPrtcZoneAdpsFrtsdFile.set_text("파일선택");
                p.btnPrtcZoneAdpsFrtsdFile.set_cssclass("btn_WF_FileUp");
                p.btnPrtcZoneAdpsFrtsdFile.getSetter("upcolid").set("prtcZoneAdpsFrtsdFile");
                p.btnPrtcZoneAdpsFrtsdFile.move("124","58","116","40",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div06.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div06.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div06.form,
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
                p.sta00_00_01_01.set_taborder("5");
                p.sta00_00_01_01.set_text("위의 개인정보 수집ㆍ이용에 대한 동의를 거부할 권리가 있습니다. 그러나 필수 항목 수집ㆍ이용 동의를 거부할 경우 전동차 등록 및 운전허가 신청을 할 수 있습니다.");
                p.sta00_00_01_01.set_cssclass("sta_WF_Des");
                p.sta00_00_01_01.set_fittocontents("height");
                p.sta00_00_01_01.move("-10.00","372","100%","30",null,null);

                p.sta00_00_01_00_00.set_taborder("6");
                p.sta00_00_01_00_00.set_text("필수 항목 수집ㆍ이용 동의를 거부하실 경우 전동차 등록 및 운전허가 신청을 하실수 없으시나,\r\n선택항목 수집ㆍ이용 동의를 거부하셔도 전동차 등록 및 운전허가 신청에는 제한이 없습니다.");
                p.sta00_00_01_00_00.set_cssclass("sta_WF_Des");
                p.sta00_00_01_00_00.set_fittocontents("height");
                p.sta00_00_01_00_00.move("-10.00","421","100%","47",null,null);

                p.TextArea00_01.set_taborder("1");
                p.TextArea00_01.set_value("전동차 운전허가증 제출목록: 보호구역 출입증 사본, 자동차 운전면허증 사본, 반명함 사진파일\n운전허가증 사진의 경우 반명함 사이즈 픽셀 354x472 [해상도 200dpi 이상]\n보호구역 출입증의 경우 앞,뒷면 모두 제출\n운전면허증의 경우 주민번호 뒷자리와 운전면허번호는 삭제한 후 제출\n전동차 등록증 제출서류: 제작서 발행제품 사양서(전동차 제원), 보험가입증서, 전동차 전,후,측면 사진\n보험가입증서의 경우 기간 내의 유효한 영업배상책임보험이어야 함\n전동차 등록번호 및 운전허가증 유효기간 : 24개월");
                p.TextArea00_01.set_readonly("true");
                p.TextArea00_01.move("171","111","100%","180",null,null);

                p.pan00.set_taborder("0");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("10px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("0","60","100.00%","201",null,null);

                p.staLabel00_03_00_00_00.set_taborder("2");
                p.staLabel00_03_00_00_00.set_text("전동차 등록 및 운전허가 신청을 위한 개인정보 수집ㆍ이용 동의서");
                p.staLabel00_03_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_03_00_00_00.move("10","98","100%","46",null,null);

                p.TextArea00.set_taborder("3");
                p.TextArea00.set_readonly("true");
                p.TextArea00.set_value("입주자서비스포털은 전동차 등록 및 운전허가에대한 전동차 등록 및 운전허가 신청 서비스 제공을 위해 아래와 같이 개인정보를 수집ㆍ이용하고자 합니다.\n내용을 자세히 읽으신 후 여부를 결정하여 주시길 바랍니다.");
                p.TextArea00.move("0.00","285","100.00%","60",null,null);

                p.grdCn.set_taborder("4");
                p.grdCn.set_autofittype("col");
                p.grdCn.set_readonly("true");
                p.grdCn.set_binddataset("dsCn");
                p.grdCn.set_autosizingtype("none");
                p.grdCn.set_extendsizetype("none");
                p.grdCn.move("500.00","4747","100%","200",null,null);

                p.Panel00_00_03_00_00_00.set_taborder("7");
                p.Panel00_00_03_00_00_00.set_type("vertical");
                p.Panel00_00_03_00_00_00.set_flexgrow("1");
                p.Panel00_00_03_00_00_00.set_verticalgap("10");
                p.Panel00_00_03_00_00_00.set_fittocontents("height");
                p.Panel00_00_03_00_00_00.set_minwidth("");
                p.Panel00_00_03_00_00_00.move("10.00","98","100%","423",null,null);

                p.pan01.set_taborder("8");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_fittocontents("height");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.set_type("horizontal");
                p.pan01.set_visible("false");
                p.pan01.move("0","60","100.00%","434",null,null);

                p.staPrvcClctEsntlAgreYn.set_taborder("9");
                p.staPrvcClctEsntlAgreYn.set_text("개인정보 수집(필수) 동의여부");
                p.staPrvcClctEsntlAgreYn.set_cssclass("sta_WF_Label_E");
                p.staPrvcClctEsntlAgreYn.move("10","98","100%","46",null,null);

                p.chkPrvcClctEsntlAgreYn.set_taborder("10");
                p.chkPrvcClctEsntlAgreYn.set_truevalue("1");
                p.chkPrvcClctEsntlAgreYn.set_falsevalue("0");
                p.chkPrvcClctEsntlAgreYn.set_value("0");
                p.chkPrvcClctEsntlAgreYn.move("274.00","355","150","40",null,null);

                p.sta00_00_01.set_taborder("11");
                p.sta00_00_01.set_text("신청자의 개인정보수집 및 이용동의여부(필수항목)");
                p.sta00_00_01.set_cssclass("sta_WF_Des");
                p.sta00_00_01.set_fittocontents("height");
                p.sta00_00_01.move("20","20","100%","30",null,null);

                p.Panel00_00_03_00_00_00_00.set_taborder("12");
                p.Panel00_00_03_00_00_00_00.set_type("vertical");
                p.Panel00_00_03_00_00_00_00.set_flexgrow("1");
                p.Panel00_00_03_00_00_00_00.set_verticalgap("10");
                p.Panel00_00_03_00_00_00_00.set_fittocontents("height");
                p.Panel00_00_03_00_00_00_00.set_minwidth("");
                p.Panel00_00_03_00_00_00_00.move("64.00","495","980","176",null,null);

                p.pan02.set_taborder("13");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.set_type("horizontal");
                p.pan02.set_visible("false");
                p.pan02.move("0","60","100.00%","187",null,null);

                p.staPrvcClctChcAgreYn.set_taborder("14");
                p.staPrvcClctChcAgreYn.set_text("개인정보 수집(선택) 동의여부");
                p.staPrvcClctChcAgreYn.set_cssclass("sta_WF_Label_E");
                p.staPrvcClctChcAgreYn.move("10","98","100%","46",null,null);

                p.rdoPrvcClctChcAgreYn.set_taborder("15");
                p.rdoPrvcClctChcAgreYn.set_innerdataset(divForm_form_Div07_form_rdoPrvcClctChcAgreYn_innerdataset);
                p.rdoPrvcClctChcAgreYn.set_codecolumn("codecolumn");
                p.rdoPrvcClctChcAgreYn.set_datacolumn("datacolumn");
                p.rdoPrvcClctChcAgreYn.set_direction("vertical");
                p.rdoPrvcClctChcAgreYn.set_fittocontents("width");
                p.rdoPrvcClctChcAgreYn.set_index("-1");
                p.rdoPrvcClctChcAgreYn.move("200.00","328","490","40",null,null);

                p.sta00_00_01_00.set_taborder("16");
                p.sta00_00_01_00.set_text("신청자의 개인정보수집 및 이용동의여부(선택항목)");
                p.sta00_00_01_00.set_cssclass("sta_WF_Des");
                p.sta00_00_01_00.set_fittocontents("height");
                p.sta00_00_01_00.move("20","20","100%","30",null,null);

                p.sta00_00_01_00_01.set_taborder("17");
                p.sta00_00_01_00_01.set_text("선택항목에 해당하는 정보를 입력하지 않으셔도 서비스 이용에는 제한이 없습니다.");
                p.sta00_00_01_00_01.set_cssclass("sta_WF_Des");
                p.sta00_00_01_00_01.set_fittocontents("height");
                p.sta00_00_01_00_01.move("20","20","100%","30",null,null);

                p.Panel00_00_03_00_00_00_00_00.set_taborder("18");
                p.Panel00_00_03_00_00_00_00_00.set_type("vertical");
                p.Panel00_00_03_00_00_00_00_00.set_flexgrow("1");
                p.Panel00_00_03_00_00_00_00_00.set_verticalgap("10");
                p.Panel00_00_03_00_00_00_00_00.set_minwidth("");
                p.Panel00_00_03_00_00_00_00_00.move("64.00","495","980","176",null,null);

                p.pan03.set_taborder("19");
                p.pan03.set_horizontalgap("20");
                p.pan03.set_flexcrossaxiswrapalign("start");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_fittocontents("height");
                p.pan03.set_verticalgap("0");
                p.pan03.set_spacing("0px 20px 10px 20px");
                p.pan03.set_cssclass("pal_WF_DtlBg");
                p.pan03.set_type("horizontal");
                p.pan03.set_visible("false");
                p.pan03.move("0","60","100.00%","187",null,null);

                p.staPrvcClctChcAgreYn01.set_taborder("20");
                p.staPrvcClctChcAgreYn01.set_text("서비스요청내용확인");
                p.staPrvcClctChcAgreYn01.set_cssclass("sta_WF_Label");
                p.staPrvcClctChcAgreYn01.move("10","98","100%","46",null,null);

                p.rdoSrvcDmndCnYn.set_taborder("21");
                p.rdoSrvcDmndCnYn.set_innerdataset(divForm_form_Div07_form_rdoSrvcDmndCnYn_innerdataset);
                p.rdoSrvcDmndCnYn.set_codecolumn("codecolumn");
                p.rdoSrvcDmndCnYn.set_datacolumn("datacolumn");
                p.rdoSrvcDmndCnYn.set_direction("vertical");
                p.rdoSrvcDmndCnYn.set_fittocontents("width");
                p.rdoSrvcDmndCnYn.set_index("-1");
                p.rdoSrvcDmndCnYn.move("200.00","328","490","40",null,null);

                p.Panel00_00_03_00_00_00_00_00_00.set_taborder("22");
                p.Panel00_00_03_00_00_00_00_00_00.set_type("vertical");
                p.Panel00_00_03_00_00_00_00_00_00.set_flexgrow("1");
                p.Panel00_00_03_00_00_00_00_00_00.set_verticalgap("10");
                p.Panel00_00_03_00_00_00_00_00_00.set_minwidth("");
                p.Panel00_00_03_00_00_00_00_00_00.move("64.00","495","980","96",null,null);

                p.pan04.set_taborder("23");
                p.pan04.set_horizontalgap("20");
                p.pan04.set_flexcrossaxiswrapalign("start");
                p.pan04.set_flexwrap("wrap");
                p.pan04.set_fittocontents("height");
                p.pan04.set_verticalgap("0");
                p.pan04.set_spacing("0px 20px 10px 20px");
                p.pan04.set_cssclass("pal_WF_DtlBg");
                p.pan04.set_type("horizontal");
                p.pan04.set_visible("false");
                p.pan04.move("0","60","100.00%","107",null,null);

                p.staSplmntDmndRsn.set_taborder("24");
                p.staSplmntDmndRsn.set_text("보완요청사유");
                p.staSplmntDmndRsn.set_cssclass("sta_WF_Label");
                p.staSplmntDmndRsn.move("10","98","100%","46",null,null);

                p.txtSplmntDmndRsn.set_taborder("25");
                p.txtSplmntDmndRsn.set_readonly("false");
                p.txtSplmntDmndRsn.set_displaynulltext("내용입력");
                p.txtSplmntDmndRsn.move("18","1593","100%","100",null,null);

                p.pan05.set_taborder("26");
                p.pan05.set_flexcrossaxiswrapalign("start");
                p.pan05.set_fittocontents("height");
                p.pan05.set_verticalgap("10");
                p.pan05.set_spacing("10px 20px 10px 20px");
                p.pan05.set_cssclass("pal_WF_DtlBg");
                p.pan05.set_type("vertical");
                p.pan05.set_visible("false");
                p.pan05.move("0","60","100.00%","177",null,null);

                p.grdSplmnt.set_taborder("27");
                p.grdSplmnt.set_binddataset("dataSet00");
                p.grdSplmnt.set_autofittype("col");
                p.grdSplmnt.move("18","1715","100%","150",null,null);

                p.sta00_00_01_00_00_00.set_taborder("28");
                p.sta00_00_01_00_00_00.set_text("My Page -> 검토의견함 메뉴에서 내용 등록/수정/삭제 가능합니다.");
                p.sta00_00_01_00_00_00.set_cssclass("sta_WF_Des");
                p.sta00_00_01_00_00_00.set_fittocontents("height");
                p.sta00_00_01_00_00_00.move("18","1865","100%","30",null,null);

                p.pan06.set_taborder("29");
                p.pan06.set_flexcrossaxiswrapalign("start");
                p.pan06.set_flexwrap("wrap");
                p.pan06.set_fittocontents("height");
                p.pan06.set_verticalgap("0");
                p.pan06.set_spacing("10px 20px 10px 20px");
                p.pan06.set_cssclass("pal_WF_DtlBg");
                p.pan06.set_type("horizontal");
                p.pan06.set_visible("false");
                p.pan06.move("0","60","100.00%","201",null,null);

                p.staCnvyMttr.set_taborder("30");
                p.staCnvyMttr.set_text("전달사항");
                p.staCnvyMttr.set_cssclass("sta_WF_Label");
                p.staCnvyMttr.move("10","98","100%","46",null,null);

                p.txtCnvyMttr.set_taborder("31");
                p.txtCnvyMttr.set_readonly("false");
                p.txtCnvyMttr.set_displaynulltext("내용입력");
                p.txtCnvyMttr.move("18","1593","100%","100",null,null);

                p.pan00_01_00.set_taborder("32");
                p.pan00_01_00.set_flexcrossaxiswrapalign("start");
                p.pan00_01_00.set_fittocontents("height");
                p.pan00_01_00.set_verticalgap("10");
                p.pan00_01_00.set_spacing("10px 20px 10px 20px");
                p.pan00_01_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_01_00.set_type("vertical");
                p.pan00_01_00.move("0","60","100.00%","177",null,null);

                p.grdCnvyMttr.set_taborder("33");
                p.grdCnvyMttr.set_binddataset("dsCnvyMttr");
                p.grdCnvyMttr.set_autofittype("col");
                p.grdCnvyMttr.move("18","1715","100%","180",null,null);

                p.pan07.set_taborder("34");
                p.pan07.set_flexcrossaxiswrapalign("start");
                p.pan07.set_flexwrap("wrap");
                p.pan07.set_fittocontents("height");
                p.pan07.set_verticalgap("0");
                p.pan07.set_spacing("10px 20px 10px 20px");
                p.pan07.set_cssclass("pal_WF_DtlBg");
                p.pan07.set_type("horizontal");
                p.pan07.set_visible("true");
                p.pan07.move("0","60","100.00%","201",null,null);

                p.grdCnvyMttr00.set_taborder("35");
                p.grdCnvyMttr00.set_binddataset("dataSet00");
                p.grdCnvyMttr00.set_autofittype("col");
                p.grdCnvyMttr00.move("18","1715","100%","150",null,null);

                p.sta00_00_01_00_00_00_00_00.set_taborder("36");
                p.sta00_00_01_00_00_00_00_00.set_text("My Page -> 검토의견함 메뉴에서 내용 등록/수정/삭제 가능합니다.");
                p.sta00_00_01_00_00_00_00_00.set_cssclass("sta_WF_Des");
                p.sta00_00_01_00_00_00_00_00.set_fittocontents("height");
                p.sta00_00_01_00_00_00_00_00.move("18","1865","100%","30",null,null);

                p.pan08.set_taborder("37");
                p.pan08.set_flexcrossaxiswrapalign("start");
                p.pan08.set_flexwrap("wrap");
                p.pan08.set_fittocontents("height");
                p.pan08.set_verticalgap("0");
                p.pan08.set_spacing("10px 20px 10px 20px");
                p.pan08.set_cssclass("pal_WF_DtlBg");
                p.pan08.set_type("horizontal");
                p.pan08.set_visible("false");
                p.pan08.move("0","60","100.00%","201",null,null);
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
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divInfoGuide.set_taborder("0");
                p.divInfoGuide.set_text("서비스 흐름 및 작업방법 안내");
                p.divInfoGuide.set_cssclass("div_WF_InfoGuide");
                p.divInfoGuide.set_minheight("300");
                p.divInfoGuide.set_maxheight("");
                p.divInfoGuide.move("1660.00","262","100%","300",null,null);

                p.staSubTitle02_00.set_taborder("1");
                p.staSubTitle02_00.set_text("신청자정보");
                p.staSubTitle02_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00.move("7","310","100%","50",null,null);

                p.btnMinAplcntInfo.set_taborder("2");
                p.btnMinAplcntInfo.set_cssclass("btn_WF_ACMinus");
                p.btnMinAplcntInfo.move("553","327","34","34",null,null);

                p.Panel01_02.set_taborder("3");
                p.Panel01_02.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02.set_spacing("0px 10px");
                p.Panel01_02.set_horizontalgap("10");
                p.Panel01_02.set_flexcrossaxisalign("center");
                p.Panel01_02.set_flexmainaxisalign("end");
                p.Panel01_02.move("517","310","100%","50",null,null);

                p.sub_tit01.set_taborder("4");
                p.sub_tit01.set_background("#ffffff");
                p.sub_tit01.set_flexcrossaxisalign("end");
                p.sub_tit01.move("7","310","100%","70",null,null);

                p.Div01.set_taborder("5");
                p.Div01.set_text("Div00");
                p.Div01.set_cssclass("div_WF_Bg");
                p.Div01.set_fittocontents("height");
                p.Div01.move("0","0","100%","459",null,null);

                p.staSubTitle02_00_00.set_taborder("6");
                p.staSubTitle02_00_00.set_text("청구 정보");
                p.staSubTitle02_00_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_00.move("917","900","100%","50",null,null);

                p.btnMinClmInfo.set_taborder("7");
                p.btnMinClmInfo.set_cssclass("btn_WF_ACMinus");
                p.btnMinClmInfo.move("538","902","34","30",null,null);

                p.Panel01_02_00.set_taborder("8");
                p.Panel01_02_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_00.set_spacing("0px 10px");
                p.Panel01_02_00.set_horizontalgap("10");
                p.Panel01_02_00.set_flexcrossaxisalign("center");
                p.Panel01_02_00.set_flexmainaxisalign("end");
                p.Panel01_02_00.move("1422","900","100%","50",null,null);

                p.sub_tit02.set_taborder("9");
                p.sub_tit02.set_background("#ffffff");
                p.sub_tit02.set_flexcrossaxisalign("end");
                p.sub_tit02.move("917","900","100%","70",null,null);

                p.Div02.set_taborder("10");
                p.Div02.set_text("Div00");
                p.Div02.set_cssclass("div_WF_Bg");
                p.Div02.set_fittocontents("height");
                p.Div02.set_visible("false");
                p.Div02.move("0","558","100%","938",null,null);

                p.staSubTitle02_00_01.set_taborder("11");
                p.staSubTitle02_00_01.set_text("신청 정보");
                p.staSubTitle02_00_01.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_01.move("30","50","100%","50",null,null);

                p.btnMinAplyInfo.set_taborder("12");
                p.btnMinAplyInfo.set_cssclass("btn_WF_ACMinus");
                p.btnMinAplyInfo.move("1390.00","18","34","34",null,null);

                p.Panel01_02_01.set_taborder("13");
                p.Panel01_02_01.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_01.set_spacing("0px 10px");
                p.Panel01_02_01.set_horizontalgap("10");
                p.Panel01_02_01.set_flexcrossaxisalign("center");
                p.Panel01_02_01.set_flexmainaxisalign("end");
                p.Panel01_02_01.move("710.00","50","100%","50",null,null);

                p.sub_tit03.set_taborder("14");
                p.sub_tit03.set_background("#ffffff");
                p.sub_tit03.set_flexcrossaxisalign("end");
                p.sub_tit03.move("0","0","100%","70",null,null);

                p.Div03.set_taborder("15");
                p.Div03.set_text("Div00");
                p.Div03.set_cssclass("div_WF_Bg");
                p.Div03.set_fittocontents("height");
                p.Div03.set_visible("false");
                p.Div03.move("0","988","100%","513",null,null);

                p.staSubTitle02_00_02.set_taborder("16");
                p.staSubTitle02_00_02.set_text("전동차등록증 제출서류");
                p.staSubTitle02_00_02.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_02.move("30","50","100%","50",null,null);

                p.btnMinDoc.set_taborder("17");
                p.btnMinDoc.set_cssclass("btn_WF_ACMinus");
                p.btnMinDoc.move("1390.00","18","34","34",null,null);

                p.Panel01_02_02.set_taborder("18");
                p.Panel01_02_02.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_02.set_spacing("0px 10px");
                p.Panel01_02_02.set_horizontalgap("10");
                p.Panel01_02_02.set_flexcrossaxisalign("center");
                p.Panel01_02_02.set_flexmainaxisalign("end");
                p.Panel01_02_02.move("710.00","50","100%","50",null,null);

                p.sub_tit04.set_taborder("19");
                p.sub_tit04.set_background("#ffffff");
                p.sub_tit04.set_flexcrossaxisalign("end");
                p.sub_tit04.set_visible("false");
                p.sub_tit04.move("0","0","100%","70",null,null);

                p.Div04.set_taborder("20");
                p.Div04.set_text("Div00");
                p.Div04.set_cssclass("div_WF_Bg");
                p.Div04.set_fittocontents("height");
                p.Div04.set_visible("false");
                p.Div04.move("0","30","100%","207",null,null);

                p.staSubTitle02_00_03.set_taborder("21");
                p.staSubTitle02_00_03.set_text("전동차등록증 제출사진");
                p.staSubTitle02_00_03.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_03.move("30","50","100%","50",null,null);

                p.btnMinPhoto.set_taborder("22");
                p.btnMinPhoto.set_cssclass("btn_WF_ACMinus");
                p.btnMinPhoto.move("1390.00","18","34","34",null,null);

                p.Panel01_02_03.set_taborder("23");
                p.Panel01_02_03.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_03.set_spacing("0px 10px");
                p.Panel01_02_03.set_horizontalgap("10");
                p.Panel01_02_03.set_flexcrossaxisalign("center");
                p.Panel01_02_03.set_flexmainaxisalign("end");
                p.Panel01_02_03.move("710.00","50","100%","50",null,null);

                p.sub_tit05.set_taborder("24");
                p.sub_tit05.set_background("#ffffff");
                p.sub_tit05.set_flexcrossaxisalign("end");
                p.sub_tit05.set_visible("false");
                p.sub_tit05.move("0","0","100%","70",null,null);

                p.Div05.set_taborder("25");
                p.Div05.set_text("Div00");
                p.Div05.set_cssclass("div_WF_Bg");
                p.Div05.set_fittocontents("height");
                p.Div05.set_visible("false");
                p.Div05.move("0","30","100%","483",null,null);

                p.staSubTitle02_00_04.set_taborder("26");
                p.staSubTitle02_00_04.set_text("운전허가증 제출사진");
                p.staSubTitle02_00_04.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_04.move("30","50","100%","50",null,null);

                p.btnMinDrvn.set_taborder("27");
                p.btnMinDrvn.set_cssclass("btn_WF_ACMinus");
                p.btnMinDrvn.move("1390.00","18","34","34",null,null);

                p.Panel01_02_04.set_taborder("28");
                p.Panel01_02_04.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_04.set_spacing("0px 10px");
                p.Panel01_02_04.set_horizontalgap("10");
                p.Panel01_02_04.set_flexcrossaxisalign("center");
                p.Panel01_02_04.set_flexmainaxisalign("end");
                p.Panel01_02_04.move("710.00","50","100%","50",null,null);

                p.sub_tit06.set_taborder("29");
                p.sub_tit06.set_background("#ffffff");
                p.sub_tit06.set_flexcrossaxisalign("end");
                p.sub_tit06.set_visible("false");
                p.sub_tit06.move("0","0","100%","70",null,null);

                p.Div06.set_taborder("30");
                p.Div06.set_text("Div00");
                p.Div06.set_cssclass("div_WF_Bg");
                p.Div06.set_fittocontents("height");
                p.Div06.set_visible("false");
                p.Div06.move("0","30","100%","482",null,null);

                p.staSubTitle02_00_05.set_taborder("31");
                p.staSubTitle02_00_05.set_text("전동차 등록 및 운전허가 승인 및 운영 기준");
                p.staSubTitle02_00_05.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_05.move("30","50","100%","50",null,null);

                p.btnMinAprvYn.set_taborder("32");
                p.btnMinAprvYn.set_cssclass("btn_WF_ACMinus");
                p.btnMinAprvYn.move("1390.00","18","34","34",null,null);

                p.Panel01_02_05.set_taborder("33");
                p.Panel01_02_05.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_05.set_spacing("0px 10px");
                p.Panel01_02_05.set_horizontalgap("10");
                p.Panel01_02_05.set_flexcrossaxisalign("center");
                p.Panel01_02_05.set_flexmainaxisalign("end");
                p.Panel01_02_05.move("710.00","50","100%","50",null,null);

                p.sub_tit07.set_taborder("34");
                p.sub_tit07.set_background("#ffffff");
                p.sub_tit07.set_flexcrossaxisalign("end");
                p.sub_tit07.move("0","0","100%","70",null,null);

                p.Div07.set_taborder("35");
                p.Div07.set_text("Div00");
                p.Div07.set_cssclass("div_WF_Bg");
                p.Div07.set_fittocontents("height");
                p.Div07.set_visible("false");
                p.Div07.move("0","30","100%","2000",null,null);
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
                p.btn01.set_text("신청자정보");
                p.btn01.set_cssclass("btn_WF_Quick_S");
                p.btn01.move("17","20","100%","45",null,null);

                p.btn02.set_taborder("1");
                p.btn02.set_text("청구 정보");
                p.btn02.set_cssclass("btn_WF_Quick");
                p.btn02.move("17.00","btn01:0","100%","45",null,null);

                p.btn03.set_taborder("2");
                p.btn03.set_text("신청 정보");
                p.btn03.set_cssclass("btn_WF_Quick");
                p.btn03.move("17.00","110","100%","45",null,null);

                p.btn04.set_taborder("3");
                p.btn04.set_text("전동차등록증 제출서류");
                p.btn04.set_cssclass("btn_WF_Quick");
                p.btn04.move("17.00","155","100%","45",null,null);

                p.btn05.set_taborder("4");
                p.btn05.set_text("전동차등록증 제출사진");
                p.btn05.set_cssclass("btn_WF_Quick");
                p.btn05.move("17.00","200","100%","45",null,null);

                p.btn06.set_taborder("5");
                p.btn06.set_text("운전허가증 제출사진");
                p.btn06.set_cssclass("btn_WF_Quick");
                p.btn06.move("17.00","200","100%","45",null,null);

                p.btn07.set_taborder("6");
                p.btn07.set_text("전동차 등록 및 운전허가\r\n승인 및 운영 기준");
                p.btn07.set_cssclass("btn_WF_Quick");
                p.btn07.set_fittocontents("height");
                p.btn07.move("17.00","200","100%","60",null,null);
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
                p.btn01.move(null,null,"460",null,null,null);

                p.btn02.set_cssclass("btn_WF_QuickM");
                p.btn02.set_fittocontents("width");

                p.btn03.set_cssclass("btn_WF_QuickM");
                p.btn03.set_fittocontents("width");

                p.btn04.set_cssclass("btn_WF_QuickM");
                p.btn04.set_fittocontents("width");

                p.btn05.set_cssclass("btn_WF_QuickM");
                p.btn05.set_fittocontents("width");

                p.btn06.set_cssclass("btn_WF_QuickM");
                p.btn06.set_fittocontents("width");

                p.btn07.set_cssclass("btn_WF_QuickM");
                p.btn07.set_fittocontents("width");
            	}
            );
            obj.set_type("horizontal");
            obj.set_spacing("0px 0px  0px  0px");
            this.divQuick.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divBtn.form
            obj = new Layout("default","",0,0,this.divBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btn00.set_taborder("0");
                p.btn00.set_text("임시저장");
                p.btn00.set_cssclass("btn_WF_No");
                p.btn00.set_fittocontents("width");
                p.btn00.set_visible("false");
                p.btn00.move("7","20","100","40",null,null);

                p.btn00_01.set_taborder("2");
                p.btn00_01.set_text("종료");
                p.btn00_01.set_cssclass("btn_WF_No");
                p.btn00_01.set_fittocontents("width");
                p.btn00_01.set_visible("false");
                p.btn00_01.move("7","20","100","40",null,null);

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
                p.btn00.set_fittocontents("width");

                p.btn00_01.set_fittocontents("width");

                p.btn00_00.set_fittocontents("width");
            	}
            );
            obj.set_flexwrap("nowrap");
            obj.set_flexmainaxisalign("start");
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

                p.divGuide.set_taborder("0");
                p.divGuide.set_text("div00");
                p.divGuide.set_visible("false");
                p.divGuide.set_cssclass("div_GD_Tip");
                p.divGuide.move("1590.00","135","450","385",null,null);

                p.divTitle.set_taborder("3");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);

                p.divForm.set_taborder("1");
                p.divForm.set_text("div00");
                p.divForm.set_cssclass("div_WF_QuickFrBg");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("height");
                p.divForm.move("0","divTitle:10",null,"8000","60",null);

                p.divQuick.set_taborder("2");
                p.divQuick.set_text("div00");
                p.divQuick.set_cssclass("div_WF_QuickMenu");
                p.divQuick.set_fittocontents("height");
                p.divQuick.move(null,"62","296","351","62",null);

                p.divBtn.set_taborder("4");
                p.divBtn.set_text("div00");
                p.divBtn.set_fittocontents("height");
                p.divBtn.set_cssclass("div_WF_QuickBtnBg");
                p.divBtn.set_visible("true");
                p.divBtn.move(null,"divQuick:0","296","131","62",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,5000,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divQuick.set_cssclass("div_WF_QuickMenuM");
                p.divQuick.move("20","60",null,"60","0",null);

                p.divBtn.set_cssclass("div_WF_QuickBtnBgM");
                p.divBtn.set_fittocontents("none");
                p.divBtn.move("0",null,null,"80","0","0");

                p.divForm.set_cssclass("div_WF_QuickFrBgM");
                p.divForm.set_fittocontents("none");
                p.divForm.move("0","120",null,null,"0","90");

                p.divTitle.move("0","0",null,"50","0",null);

                p.divGuide.move("1190.00","156","450","385",null,null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item22","divForm.form.Div01.form.edtAplcntNm","value","dsList","aplcntNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divForm.form.Div01.form.edtAplcntInstNm","value","dsList","aplcntInstNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divForm.form.Div01.form.edtRgtrNm","value","dsList","rgtrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divForm.form.Div01.form.edtRgtrInstNm","value","dsList","rgtrInstNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divForm.form.Div01.form.edtRgtrTelno","value","dsList","rgtrTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divForm.form.Div01.form.edtRgtrMblTelno","value","dsList","rgtrMblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divForm.form.Div02.form.rdoPayPicSmYn","value","dsList","payPicSmYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.Div02.form.rdoClmSe","value","dsList","clmMtdCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.Div02.form.edtPayPicNm","value","dsList","payPicNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.Div02.form.edtPayPicTelno","value","dsList","payPicTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.Div02.form.edtPayPicMblTelno","value","dsList","payPicMblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.Div02.form.divEdtPop.form.edtZip","value","dsList","clmZip");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.Div02.form.edtAddr","value","dsList","clmAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.Div02.form.edtDtlAddr","value","dsList","clmDtlAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.Div02.form.edtAcuntEmlAddr1","value","dsList","clmEml1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divForm.form.Div02.form.edtTxivEmlAddr1","value","dsList","txivEml1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divForm.form.Div02.form.edtAcuntEmlAddr2","value","dsList","clmEml2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divForm.form.Div02.form.edtTxivEmlAddr2","value","dsList","txivEml2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divForm.form.Div03.form.rdoAplyKnd","value","dsList","aplyKndCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divForm.form.Div03.form.rdoCustType","value","dsList","custTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divForm.form.Div03.form.calDmndBgngYmd","value","dsList","dmndPrdBgngYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divForm.form.Div03.form.cal00_00_00","value","dsList","dmndPrdEndYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divForm.form.Div03.form.cboBldg","value","dsList","bldgSeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divForm.form.Div03.form.cboSrvcAplySe","value","dsList","srvcAplySeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divForm.form.Div03.form.rdoZone","value","dsList","zoneSeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divForm.form.Div07.form.chkPrvcClctEsntlAgreYn","value","dsList","prvcClctEsntlAgreYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divForm.form.Div07.form.rdoPrvcClctChcAgreYn","value","dsList","prvcClctChcAgreYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","txtCnvyMttr","value","dsCnvyMttr","cnvyMttrCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divForm.form.Div01.form.edtAplySeNm","value","dsList","aplySeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divForm.form.Div07.form.txtCnvyMttr","value","dsList","cnvyMttrCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divForm.form.Div07.form.rdoSrvcDmndCnYn","value","dsList","srvcDmndCnIdntyYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divForm.form.Div07.form.txtSplmntDmndRsn","value","dsList","splmntDmndRsnCn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.addIncludeScript("LIF055M00.xfdl","xjs::TaskCom.xjs");
        this.registerScript("LIF055M00.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	LIF080M00.xfdl
        *  @Creator 	CHG
        *  @CreateDate 	2024/10/18
        *  @Desction    생활 > 전동차등록및운전허가신청
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/10/18				CHG							최초생성
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
        this.aplySeCd = "TSPCAR001"; // 신청구분코드(전동차신청 : "TSPCAR001")
        this.jobCd = "TAS10438"; // 작업코드(기본값 TAS10438 : 신청서작성)

        this.rdoPaySe = "0"; // 라디오 버튼 클릭 시 1로 바꿔줌. 로드시 이벤트때 적용.
        this.rdoAplySe = "0"; // 라디오 버튼 클릭 시 1로 바꿔줌. 로드시 이벤트때 적용.

        this.btnDiv = this.divBtn; // 공통버튼영역 Div

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
        	// this.divForm.form.Div06.visible = true;
        	// this.divForm.form.Div05.visible = true;
        	// this.divForm.form.Div04.visible = true;
        	this.divForm.form.Div03.visible = true;

        // 	nexacro._OnceCallbackTimer.callonce(this, function () {
        // 		this.divForm.form.Div02.visible = true;
        // 		this.divForm.form.Div07.visible = true;
        // 		this.resetScroll();
        // 	},50);
        	/* 화면처리 End */

        		this.divForm.form.Div02.visible = true;
        		this.divForm.form.Div07.visible = true;
        		this.resetScroll();

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
        	this.cfnComCdLoad({ id:"comAplyKndSearch", cbf:"fnCallback", dsAplyKndList:"CARSVCTYPE:S" }); // 신청구분코드
        	this.cfnComCdLoad({ id:"comBldgSeSearch", cbf:"fnCallback", dsBldgSeList:"TSPLOC:S" }); // 건물코드코드
        	this.cfnComCdLoad({ id:"comMailSearch", cbf:"fnCallback", dsEmlList:"EML_TY:S" }); // 이메일

        	// 신청서 번호 있는지 체크 없으면 신규등록
        	this.aplyNo = this.getOwnerFrame().aplyNo;   // 신청번호
        	// CAR2411_00002 : 임시저장, CAR2411_00003 : 신청서보완(신청 이후), CAR2411_00006 : 종료
        	// CAR2411_00008, CAR2411_00007, CAR2411_00014 : 담당자검토및승인, CAR2411_00009, CAR2411_00011 : 미처리종료
        	// CAR2411_00012 : 만족도조사, CAR2411_00013 : 등록/허가증 제작중
        	// this.aplyNo = "CAR2411_00013";

        	if (this.gfnIsNull(this.aplyNo)) {
        	    var nRow = this.dsList.addRow();

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

        		// 해당 TASK ID로 버튼 자동 생성 -> 추후에 신청번호가 있는지 없는지 체크해서 task id 박아넣어줘야함. 현재는 신청서 작성으로 했음.
        		this.cfnBtnCrt({ crtTrgt:this.divBtn, lnkgEvnt:this.btn_onclick, inqCnd : { jobPrcsPrgrsSeCd:this.jobCd} });

        	} else {
        		// 전동차목록 조회
        		//this.cfnSearch();

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
        		posTop2 = 414;

        	}else{
        		posTop1 = 12;
        		posTop2 = 364;

        	}

        	this.divQuick.top = e.pos + posTop1;
        	this.divBtn.top = e.pos + posTop2;
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	this.fnSearch(this.aplyNo);
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
         * @description : 전동차목록 조회
         ***************************************************************************/
        this.fnSearch = function(paramAplyNo)
        {
        	if(this.dsSearch.getRowCount() > 0){
        		this.dsSearch.clearData();

        	}

        	this.dsSearch.addRow();
        	this.dsSearch.setColumn(0, "aplyNo", paramAplyNo);

        	var strSvcId    = "elcttrAplyInq";
        	var strSvcUrl   = "elcttr/elcttrAplyInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsList=dsList dsCnvyMttr=dsCnvyMttr dsAtfl=dsAtfl dsMst=dsMst";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /**************************************************************************
         * @name : fnSave
         * @description : 전동차목록 저장
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

        	inData    = "dsWfInfo=" + this.FV_DS_OTPT_WORK_FLOW_INFO + ":U"  // WorkFlow 정보
        			          + " dsMst=dsMst:A"                                     // Master DS
         			          + " dsList=dsList:A"                           		 // 전동차목록 DS
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
        		case "getAplySeNm" : // 신청구분명 조회
        			// 신청정보 세팅
        			this.divForm.form.Div01.form.edtAplySeNm.value = this.cfnGvbkAplySeNm();

        			break;

        		case "comBldgSeSearch" : // 건물구분 조회
        			// 건물구분 제한값 'TSPLOCTSC010', 'TSPLOCTSC070', 'TSPLOCTSC020' ,'TSPLOCTSC030' ,'TSPLOCTSC090'
        			this.dsBldgSeList.filter("cdId == 'TSPLOCTSC010' || cdId == 'TSPLOCTSC070' || cdId == 'TSPLOCTSC020' || cdId == 'TSPLOCTSC030' || cdId == 'TSPLOCTSC090' || cdId == ''");

        			break;

        		case "comAplyKndSearch" : // 신청구분 조회
        			this.divForm.form.Div03.form.cboSrvcAplySe.index = 0;

        			break;

        		case "elcttrAplyInq": // 조회
        			if(this.dsList.getRowCount() > 0){
        				this.jobCd = this.dsList.getColumn(0, "jobCd");

        			}

        			// 해당 TASK ID로 버튼 자동 생성 -> 추후에 신청번호가 있는지 없는지 체크해서 task id 박아넣어줘야함. 현재는 신청서 작성으로 했음.
        			this.cfnBtnCrt({ crtTrgt:this.divBtn, cbf:"fnCallback", lnkgEvnt:this.btn_onclick, inqCnd : { jobPrcsPrgrsSeCd:this.jobCd} });

        			// 화면 세팅
        			this.fnScrnSetting();

        			break;

        		case "_cfnBtnCrt_" : // 버튼 생성 callback
        			// 접수 || 담당자검토및승인
        			if(this.jobCd == "TAS10440" || this.jobCd == "TAS10441"){
        				this.rdoSrvcDmndCnYn_onitemchanged(this.divForm.form.Div07.form.rdoSrvcDmndCnYn);

        			}else if(this.jobCd == "TAS10439"){ // 신청서보완
        				var sClrId = this.dsList.getColumn(0, "clrId");
        				console.log("sClrId = " + sClrId);
        				if(this.gfnIsNull(sClrId)){ // 접수자ID가 없을때 담당자접수 에서 넘어온 자료
        					Array.from(this.btnDiv.form.components).forEach(oComp => {
        						if(oComp.id == "CTL11007"){
        							oComp.visible = false;

        						}else if(oComp.id == "CTL11008"){
        							oComp.visible = true;
        							console.log("CTL11008");

        						}
        					});

        				}else{
        					Array.from(this.btnDiv.form.components).forEach(oComp => {
        						if(oComp.id == "CTL11007"){
        							oComp.visible = true;
        							console.log("CTL11007");

        						}else if(oComp.id == "CTL11008"){
        							oComp.visible = false;

        						}
        					});
        				}
        			}


        			break;

        		case "elcttrAplyStrg" : // 임시저장, 신청
        			this.gfnAlertMsg("saveAlert", "저장", this.objApp.getVariable("gvRetMsg"), "msgCallback");

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
        	if (sPopupId == "wtohAgreYnPop")
        	{
        		// if (this.gfnIsNull(sRtn)) return;
        		var objRtn = JSON.parse(sRtn);

        		var strWtohAgreYn = objRtn.wtohAgreYn;

        		if(!this.gfnIsNull(strWtohAgreYn) && strWtohAgreYn == "1"){
        			this.dsList.setColumn(0, "wtohAgreYn", strWtohAgreYn);

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

        		}else{
        			this.gfnAlertMsg("msg", "MSG_011", ["서약서에 동의하셔야 전동차등록신청 \n및 허가신청을 신청하실 수 있습니다."]);

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
        	}else if(sPopupId == "saveAlert"){
        		this.reload();

        		// this.gfnCloseMenu("MNG_0000000295");
        		// this.fnMovePage('MNG_0000000021', 'MNG_0000000144', 'work::CST/CAD/CST009M01.xfdl');

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
        	var sPayPicSmYn = this.dsList.getColumn(0, "payPicSmYn"); // 납부담당자동일여부
        	var sClmMtdCd = this.dsList.getColumn(0, "clmMtdCd"); // 청구방식
        	var sAplyKndCd = this.dsList.getColumn(0, "aplyKndCd"); // 신청종류코드

        	if(this.gfnIsNull(sPayPicSmYn)){ // 납부담당자동일여부
        		this.divForm.form.Div02.form.rdoPayPicSmYn.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["납부담당자동일여부 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsList.getColumn(0, "payPicNm"))){ // 납부담당자명
        		this.divForm.form.Div02.form.edtPayPicNm.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["납부담당자명 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsList.getColumn(0, "payPicTelno"))){ // 납부담당자전화번호
        		this.divForm.form.Div02.form.edtPayPicTelno.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["납부담당자전화번호 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsList.getColumn(0, "payPicMblTelno"))){ // 납부담당자휴대전화번호
        		this.divForm.form.Div02.form.edtPayPicMblTelno.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["납부담당자휴대전화번호 \n"]);
        		return false;
        	}
        	if(sPayPicSmYn == "1"){ // 납부담당자동일여부 - 신청자정보와동일하지않음
        		// 납부담당자개인정보수집및이용동의서
        		if(this.dsAtfl.findRow("colId", "payPicPrvcClctAgreFile") < 0){
        			this.divForm.form.Div02.form.btnPayPicPrvcClctAgreFile.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["납부담당자개인정보수집및이용동의서 \n"]);
        			return false;

        		}
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(0, "clmZip"))){ // 청구우편번호
        		this.divForm.form.Div02.form.divEdtPop.form.edtZip.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["청구우편번호 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsList.getColumn(0, "clmAddr"))){ // 청구주소
        		this.divForm.form.Div02.form.edtAddr.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["청구주소 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsList.getColumn(0, "clmDtlAddr"))){ // 청구상세주소
        		this.divForm.form.Div02.form.edtDtlAddr.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["청구상세주소 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(sClmMtdCd)){ // 청구방식
        		this.divForm.form.Div02.form.rdoClmSe.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["청구방식 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsList.getColumn(0, "txivEml1"))){ // 세금계산서이메일
        		this.divForm.form.Div02.form.edtTxivEmlAddr1.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["세금계산서이메일 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsList.getColumn(0, "txivEml2"))){ // 세금계산서이메일주소
        		this.divForm.form.Div02.form.edtTxivEmlAddr2.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["세금계산서이메일주소 \n"]);
        		return false;
        	}
        	// 청구방식 - 이메일일때 청구서이메일주소 체크
        	if(sClmMtdCd == "1"){
        		if(this.gfnIsNull(this.dsList.getColumn(0, "clmEml1"))){ // 청구서이메일
        			this.divForm.form.Div02.form.edtAcuntEmlAddr1.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["청구서이메일 \n"]);
        			return false;
        		}
        		if(this.gfnIsNull(this.dsList.getColumn(0, "clmEml2"))){ // 청구서이메일주소
        			this.divForm.form.Div02.form.edtAcuntEmlAddr2.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["청구서이메일주소 \n"]);
        			return false;
        		}

        	}

        	if(this.gfnIsNull(sAplyKndCd)){ // 신청종류
        		this.divForm.form.Div03.form.rdoAplyKnd.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["신청종류 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsList.getColumn(0, "custTypeCd"))){ // 고객유형코드
        		this.divForm.form.Div03.form.rdoCustType.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["고객유형 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsList.getColumn(0, "dmndPrdBgngYmd"))){ // 요청기간시작일자
        		this.divForm.form.Div03.form.calDmndBgngYmd.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["요청기간시작일자 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsList.getColumn(0, "bldgSeCd"))){ // 건물구분코드
        		this.divForm.form.Div03.form.cboBldg.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["건물구분 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsList.getColumn(0, "zoneSeCd"))){ // 구역구분코드
        		this.divForm.form.Div03.form.rdoZone.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["구역구분 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsList.getColumn(0, "srvcAplySeCd"))){ // 서비스신청구분코드
        		this.divForm.form.Div03.form.cboSrvcAplySe.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["서비스신청구분 \n"]);
        		return false;
        	}

        	if(sAplyKndCd == "CARREQTYPE001"){ // 신청종류코드 - 전동차등록
        		// 제작서류발행제품사양서
        		if(this.dsAtfl.findRow("colId", "pblcnPrdctSpcfatFile") < 0){
        			this.divForm.form.Div04.form.btnPblcnPrdctSpcfatFile.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["제작서류발행제품사양서 \n"]);
        			return false;

        		}
        		// 보험가입증명서
        		if(this.dsAtfl.findRow("colId", "insrncJoinPrdocFile") < 0){
        			this.divForm.form.Div04.form.btnInsrncJoinPrdocFile.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["보험가입증명서 \n"]);
        			return false;

        		}
        		// 전동차전면사진
        		if(this.dsAtfl.findRow("colId", "elcttrFrtPhotoFile") < 0){
        			this.divForm.form.Div05.form.btnElcttrFrtPhotoFile.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["전동차전면사진 \n"]);
        			return false;

        		}
        		// 전동차후면사진
        		if(this.dsAtfl.findRow("colId", "elcttrRarPhotoFile") < 0){
        			this.divForm.form.Div05.form.btnElcttrRarPhotoFile.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["전동차후면사진 \n"]);
        			return false;

        		}
        		// 전동차측면사진
        		if(this.dsAtfl.findRow("colId", "elcttrFlkPhotoFile") < 0){
        			this.divForm.form.Div05.form.btnElcttrFlkPhotoFile.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["전동차측면사진 \n"]);
        			return false;

        		}

        	}else if(sAplyKndCd == "CARREQTYPE002"){ // 신청종류코드 - 전동차운전허가
        		// 보호구역출입증사본앞면
        		if(this.dsAtfl.findRow("colId", "prtcZoneAdpsFrtsdFile") < 0){
        			this.divForm.form.Div06.form.btnPrtcZoneAdpsFrtsdFile.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["보호구역출입증사본앞면 \n"]);
        			return false;

        		}
        		// 보호구역출입증사본뒷면
        		if(this.dsAtfl.findRow("colId", "prtcZoneAdpsBaksdFile") < 0){
        			this.divForm.form.Div06.form.btnPrtcZoneAdpsBaksdFile.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["보호구역출입증사본뒷면 \n"]);
        			return false;

        		}
        		// 자동차운전면허증사본
        		if(this.dsAtfl.findRow("colId", "carLcnDpctFile") < 0){
        			this.divForm.form.Div06.form.btnCarLcnDpctFile.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["자동차운전면허증사본 \n"]);
        			return false;

        		}
        		// 반명함사진파일
        		if(this.dsAtfl.findRow("colId", "bizcrdPhotoFile") < 0){
        			this.divForm.form.Div06.form.btnBizcrdPhotoFile.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["반명함사진파일 \n"]);
        			return false;

        		}

        	}

        	if(sPayPicSmYn == "1"){ // 납부담당자동일여부 - 동일하지않음
        		if(sAplyKndCd == "CARREQTYPE002"){ // 신청종류코드 - 전동차운전허가
        			if(this.gfnIsNull(this.dsList.getColumn(0, "prvcClctEsntlAgreYn2"))){ // 개인정보수집필수동의여부
        				this.divForm.form.Div07.form.chkPrvcClctEsntlAgreYn.setFocus();
        				this.gfnAlertMsg("msg", "MSG_011", ["개인정보수집필수동의여부를 \n체크하여 주세요."]);
        				return false;
        			}
        			if(this.dsList.getColumn(0, "prvcClctEsntlAgreYn2") == "0"){
        				this.divForm.form.Div07.form.chkPrvcClctEsntlAgreYn.setFocus();
        				this.gfnAlertMsg("msg", "MSG_011", ["개인정보수집필수동의여부를 \n체크하여 주세요."]);
        				return false;

        			}
        		}

        	}else if(sPayPicSmYn == "0"){ // 납부담당자동일여부 - 동일함
        		if(this.gfnIsNull(this.dsList.getColumn(0, "prvcClctEsntlAgreYn"))){ // 개인정보수집필수동의여부
        			this.divForm.form.Div07.form.chkPrvcClctEsntlAgreYn.setFocus();
        			this.gfnAlertMsg("msg", "MSG_011", ["개인정보수집필수동의여부를 \n체크하여 주세요."]);
        			return false;
        		}
        		if(this.dsList.getColumn(0, "prvcClctEsntlAgreYn") == "0"){
        			this.divForm.form.Div07.form.chkPrvcClctEsntlAgreYn.setFocus();
        			this.gfnAlertMsg("msg", "MSG_011", ["개인정보수집필수동의여부를 \n체크하여 주세요."]);
        			return false;

        		}
        		if(this.gfnIsNull(this.dsList.getColumn(0, "prvcClctChcAgreYn"))){ // 개인정보수집선택동의여부
        			this.divForm.form.Div07.form.rdoPrvcClctChcAgreYn.setFocus();
        			this.gfnAlertMsg("msg", "MSG_011", ["개인정보수집선택동의여부를 \n체크하여 주세요."]);
        			return false;
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
        	var sPayPicSmYn = this.dsList.getColumn(0, "payPicSmYn"); // 납부담당자 동일 여부
        	var sClmMtdCd = this.dsList.getColumn(0, "clmMtdCd"); // 청구방식코드
        	var sAplyKndCd = this.dsList.getColumn(0, "aplyKndCd"); // 신청종류코드

        	var sClmEml2 = this.dsList.getColumn(0, "clmEml2"); // 청구이메일
        	var sTxivEml2 = this.dsList.getColumn(0, "txivEml2"); // 세금계산서이메일

        	if(!this.gfnIsNull(sPayPicSmYn)){
        		this.rdoPayPicSmYn_onitemchanged(this.divForm.form.Div02.form.rdoPayPicSmYn);

        	}
        	if(!this.gfnIsNull(sClmMtdCd)){
        		this.rdoClmSe_onitemchanged(this.divForm.form.Div02.form.rdoClmSe);

        	}
        	if(!this.gfnIsNull(sAplyKndCd)){
        		this.rdoAplyKnd_onitemchanged(this.divForm.form.Div03.form.rdoAplyKnd);

        	}

        	if(!this.gfnIsNull(sClmEml2)){
        		this.edtEml_onchanged(this.divForm.form.Div02.form.edtAcuntEmlAddr2);

        	}
        	if(!this.gfnIsNull(sTxivEml2)){
        		this.edtEml_onchanged(this.divForm.form.Div02.form.edtTxivEmlAddr2);

        	}

        	// 기본 바인딩 세팅
        	// 개인정보 필수동의
        	var sCompid = "divForm.form.Div07.form.rdoSrvcDmndCnYn";
        	var sItem = "";

        	for(var i = 0; i < this.binds.length; i++){
        		if(this.binds[i].compid == sCompid){
        			sItem = this.binds[i].name;
        			break;

        		}
        	}
        	// 같은 항목으로 동적바인딩 제거
        	this.removeChild(sItem);

        	var tmpTxt = "";

        	// TAS10441 : 담당자검토및승인
        	if(this.jobCd == "TAS10441"){
        		// 바인딩 생성
        		var bindObj = new BindItem();
        		bindObj.init(sItem, sCompid, "value", "dsList", "srvcAplyInfoIdntyYn");
        		this.addChild(sItem, bindObj);
        		bindObj.bind();
        		tmpTxt = "서비스신청정보확인";

        	}else{
        		// 바인딩 생성
        		var bindObj = new BindItem();
        		bindObj.init(sItem, sCompid, "value", "dsList", "srvcDmndCnIdntyYn");
        		this.addChild(sItem, bindObj);
        		bindObj.bind();
        		tmpTxt = "서비스요청내용확인";

        	}

        	// text 세팅
        	this.divForm.form.Div07.form.staPrvcClctChcAgreYn01.text = tmpTxt;

        	// TAS10440 : 접수단계, TAS10439 : 신청서보완, TAS10441 : 담당자검토및승인
        	if(this.jobCd == "TAS10440" || this.jobCd == "TAS10439" || this.jobCd == "TAS10441"){
        		this.divForm.form.Div07.form.pan04.visible = true;
        		this.divForm.form.Div07.form.pan05.visible = true;
        		this.divForm.form.Div07.form.pan06.visible = true;
        		// this.divForm.form.Div07.form.pan07.visible = true;
        		this.divForm.form.Div07.form.pan08.visible = true;

        		this.resetScroll();

        	}

        	// 신청서 보완 시 보완내역 readyOnly 처리
        	if(this.jobCd == "TAS10439"){
        		this.divForm.form.Div07.form.rdoSrvcDmndCnYn.readonly = true;
        		this.divForm.form.Div07.form.txtSplmntDmndRsn.readonly = true;
        		this.divForm.form.Div07.form.grdSplmnt.readonly = true;
        		this.divForm.form.Div07.form.grdCnvyMttr.readonly = true;

        		this.resetScroll();

        	}

        	console.log("this.jobCd = " + this.jobCd);
        	// TAS10444 : 종료 일때
        	if(this.jobCd == "TAS10444"){
        		var sBfrJobCd = this.dsList.getColumn(0, "bfrJobCd");
        		console.log("sBfrJobCd = " + sBfrJobCd);
        		// TAS10438 : 신청서작성, TAS10439 : 신청서보완
        		if(sBfrJobCd == "TAS10438"){


        		}else if(sBfrJobCd == "TAS10439"){
        			// 신청서보완에서 미처리 종료된 경우 보완 내역을 보여준다.
        			this.divForm.form.Div07.form.pan04.visible = true;
        			this.divForm.form.Div07.form.pan05.visible = true;
        			this.divForm.form.Div07.form.pan06.visible = true;
        			// this.divForm.form.Div07.form.pan07.visible = true;
        			this.divForm.form.Div07.form.pan08.visible = true;

        			this.resetScroll();

        		}
        	}

        	// this.jobCd 가 TAS10438, TAS10439 일때는 신청서 작성/보완 이라 이외에는 컴포넌트 readOnly 처리해줌.
        	if(this.jobCd != "TAS10438" && this.jobCd != "TAS10439"){
        		// 이력 불러오기 버튼 신청성 작성일때만 노출
        		if(this.jobCd != "TAS10438"){
        			this.divForm.form.Div01.form.btnHstry.visible = false;

        		}

        		// 컨포넌트 enable, readonly 처리
        		var sDivFrom = this.divForm.form;

        		var arrDivComps = [sDivFrom.Div01, sDivFrom.Div02, sDivFrom.Div03, sDivFrom.Div04, sDivFrom.Div05
        							, sDivFrom.Div06, sDivFrom.Div07, sDivFrom.Div01.form.divEdtPop];

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
        					// TAS10444 : 종료가 아닐땐 textArea 수정가능하게 해줌.
        					if(this.jobCd != "TAS10444"){
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
        /**************************************************************************
         * @name : btnMinAplyInfo_onclick
         * @description : 화면 접기/펼치기 기능
         ***************************************************************************/
        this.btnMin_onclick = function(obj,e)
        {
        	var objNm = obj.name;
        	var objClass = obj.cssclass;

        	if(objClass == "btn_WF_ACMinus"){
        		if(objNm == "btnMinAplcntInfo"){
        			this.divForm.form.Div01.visible = false;

        		}else if(objNm == "btnMinClmInfo"){
        			this.divForm.form.Div02.visible = false;

        		}else if(objNm == "btnMinAplyInfo"){
        			this.divForm.form.Div03.visible = false;

        		}else if(objNm == "btnMinDoc"){
        			this.divForm.form.Div04.visible = false;

        		}else if(objNm == "btnMinPhoto"){
        			this.divForm.form.Div05.visible = false;

        		}else if(objNm == "btnMinDrvn"){
        			this.divForm.form.Div06.visible = false;

        		}else if(objNm == "btnMinAprvYn"){
        			this.divForm.form.Div07.visible = false;

        		}else if(objNm == "btnMinMttr"){

        		}

        		obj.cssclass = "btn_WF_ACPlus";

        	}else if(objClass == "btn_WF_ACPlus"){
        		if(objNm == "btnMinAplcntInfo"){
        			this.divForm.form.Div01.visible = true;

        		}else if(objNm == "btnMinClmInfo"){
        			this.divForm.form.Div02.visible = true;

        		}else if(objNm == "btnMinAplyInfo"){
        			this.divForm.form.Div03.visible = true;

        		}else if(objNm == "btnMinDoc"){
        			this.divForm.form.Div04.visible = true;

        		}else if(objNm == "btnMinPhoto"){
        			this.divForm.form.Div05.visible = true;

        		}else if(objNm == "btnMinDrvn"){
        			this.divForm.form.Div06.visible = true;

        		}else if(objNm == "btnMinAprvYn"){
        			this.divForm.form.Div07.visible = true;

        		}else if(objNm == "btnMinMttr"){

        		}

        		obj.cssclass = "btn_WF_ACMinus";

        	}

        	this.resetScroll();

        };

        /**************************************************************************
         * @name : rdoPayPicSmYn_onitemchanged
         * @description : 납부담당자 라디오 수정 완료 시
         ***************************************************************************/
        this.rdoPayPicSmYn_onitemchanged = function(obj,e)
        {
        	var objVal = obj.value;

        	var aplySeCd = this.divForm.form.Div03.form.rdoAplyKnd.value;

        	// 기본 바인딩 세팅
        	// 개인정보 필수동의
        	var sCompid = "divForm.form.Div07.form.chkPrvcClctEsntlAgreYn";
        	var sItem = "";

        	for(var i = 0; i < this.binds.length; i++){
        		if(this.binds[i].compid == sCompid){
        			sItem = this.binds[i].name;
        			break;

        		}

        	}

        	// 같은 항목으로 동적바인딩 제거
        	this.removeChild(sItem);

        	// 바인딩 생성
        	var bindObj = new BindItem();
        	bindObj.init(sItem, sCompid, "value", "dsList", "prvcClctEsntlAgreYn");
        	this.addChild(sItem, bindObj);
        	bindObj.bind();

        	if(objVal == "1"){ // 신청자와동일하지않음 - 납부담당자 개인정보 이용 동의서 보여줌
        		this.divForm.form.Div02.form.panFile.visible = true;

        		if(aplySeCd == "CARREQTYPE002"){ // 신청종류가 자동차운전허가신청일때
        			this.divForm.form.Div07.form.pan01.visible = true; // 개인정보 수집/이용동의서 보여줌.
        			this.divForm.form.Div07.form.pan02.visible = true; // 개인정보 필수동의여부 보여줌.
        			this.divForm.form.Div07.form.pan03.visible = false; // 개인정보 선택동의여부 안보여줌.

        			// 같은 항목으로 동적바인딩 제거
        			this.removeChild(sItem);

        			// 바인딩 생성
        			bindObj.init(sItem, sCompid, "value", "dsList", "prvcClctEsntlAgreYn2");
        			this.addChild(sItem, bindObj);
        			bindObj.bind();

        		}else {
        			this.divForm.form.Div07.form.pan01.visible = false; // 개인정보 수집/이용동의서 안보여줌.
        			this.divForm.form.Div07.form.pan02.visible = false; // 개인정보 필수동의여부 안보여줌.
        			this.divForm.form.Div07.form.pan03.visible = false; // 개인정보 선택동의여부 안보여줌.

        		}

        		// 납부담당자 이름, 전화번호 등 입력가능하게 readonly 풀어줌.
        		this.divForm.form.Div02.form.edtPayPicNm.readonly = false;
        		this.divForm.form.Div02.form.edtPayPicTelno.readonly = false;
        		this.divForm.form.Div02.form.edtPayPicMblTelno.readonly = false;

        		// this.rdoPaySe 값이 "1"일때만 초기화 해줌. 라디오 클릭시 this.rdoPaySe 값을 "1"로 바꿔줌.
        		if(this.rdoPaySe == "1"){
        			// value 초기화
        			this.divForm.form.Div02.form.edtPayPicNm.value = "";
        			this.divForm.form.Div02.form.edtPayPicTelno.value = "";
        			this.divForm.form.Div02.form.edtPayPicMblTelno.value = "";

        		}

        	}else if(objVal == "0"){ // 신청자와동일 - 납부담당자 개인정보 이용 동의서 안보여줌
        		this.divForm.form.Div02.form.panFile.visible = false;

        		this.divForm.form.Div07.form.pan01.visible = true; // 개인정보 수집/이용동의서 보여줌.
        		this.divForm.form.Div07.form.pan02.visible = true; // 개인정보 필수동의여부 보여줌.
        		this.divForm.form.Div07.form.pan03.visible = true; // 개인정보 선택동의여부 보여줌.

        		// 납부담당자 이름, 전화번호 등 입력 불가능하게 readonly 처히해줌.
        		this.divForm.form.Div02.form.edtPayPicNm.readonly = true;
        		this.divForm.form.Div02.form.edtPayPicTelno.readonly = true;
        		this.divForm.form.Div02.form.edtPayPicMblTelno.readonly = true;

        		// this.rdoPaySe 값이 "1"일때만 세션값 세팅 해줌. 라디오 클릭시 this.rdoPaySe 값을 "1"로 바꿔줌.
        		if(this.rdoPaySe == "1"){
        			// value 세션값 세팅
        			this.divForm.form.Div02.form.edtPayPicNm.value = this.gvUserNm;
        			this.divForm.form.Div02.form.edtPayPicTelno.value = this.gvTelNo;
        			this.divForm.form.Div02.form.edtPayPicMblTelno.value = this.gvMblTelNo;

        		}

        	}
        	this.resetScroll();

        };

        /**************************************************************************
         * @name : rdoClmSe_onitemchanged
         * @description : 청구방식 라디오 수정 완료 시
         ***************************************************************************/
        this.rdoClmSe_onitemchanged = function(obj,e)
        {
        	var objVal = obj.value;

        	if(objVal == "1"){ // 이메일 - 청구서이메일주소 보여줌
        		this.divForm.form.Div02.form.pan02_02_00.visible = true;

        	}else if(objVal == "0"){ // 지로용지 - 청구서이메일주소 안보여줌
        		this.divForm.form.Div02.form.pan02_02_00.visible = false;

        	}
        	this.resetScroll();

        };

        /**************************************************************************
         * @name : rdoAplyKnd_onitemchanged
         * @description : 신청종류 라디오 수정 완료 시
         ***************************************************************************/
        this.rdoAplyKnd_onitemchanged = function(obj,e)
        {
        	var objVal = obj.value;

        	var payPicCd = this.divForm.form.Div02.form.rdoPayPicSmYn.value;

        	// 기본 바인딩 세팅
        	// 개인정보 필수동의
        	var sCompid = "divForm.form.Div07.form.chkPrvcClctEsntlAgreYn";
        	var sItem = "";

        	for(var i = 0; i < this.binds.length; i++){
        		if(this.binds[i].compid == sCompid){
        			sItem = this.binds[i].name;
        			break;

        		}

        	}

        	// 같은 항목으로 동적바인딩 제거
        	this.removeChild(sItem);

        	// 바인딩 생성
        	var bindObj = new BindItem();
        	bindObj.init(sItem, sCompid, "value", "dsList", "prvcClctEsntlAgreYn");
        	this.addChild(sItem, bindObj);
        	bindObj.bind();

        	if(objVal == "CARREQTYPE001"){ // 자동차등록신청
        		// 전동차등록증 제출서류 보여줌
        		this.divForm.form.sub_tit04.visible = true;
        		this.divForm.form.Div04.visible = true;

        		// 전동차등록증 제출사진 보여줌
        		this.divForm.form.sub_tit05.visible = true;
        		this.divForm.form.Div05.visible = true;

        		// 운전허가증 제출사진 안보여줌
        		this.divForm.form.sub_tit06.visible = false;
        		this.divForm.form.Div06.visible = false;

        		if(payPicCd == "1"){ // 납부담당자 동일 여부 신청자와동일하지않음 일때
        			this.divForm.form.Div07.form.pan01.visible = false; // 개인정보 수집/이용동의서 안보여줌.
        			this.divForm.form.Div07.form.pan02.visible = false; // 개인정보 필수동의여부 안보여줌.
        			this.divForm.form.Div07.form.pan03.visible = false; // 개인정보 선택동의여부 안보여줌.

        		}

        		this.dsAplyKndList.filter("cdId == 'CARSVCTYPE001' || cdId == 'CARSVCTYPE002' || cdId == ''");

        		// this.rdoAplySe 가 1 일때만 초기화해줌.
        		if(this.rdoAplySe == "1"){
        			this.divForm.form.Div03.form.cboSrvcAplySe.index = 0;

        		}

        	}else if(objVal == "CARREQTYPE002"){ // 자동차운전허가신청
        		// 전동차등록증 제출서류 안보여줌
        		this.divForm.form.sub_tit04.visible = false;
        		this.divForm.form.Div04.visible = false;

        		// 전동차등록증 제출사진 안보여줌
        		this.divForm.form.sub_tit05.visible = false;
        		this.divForm.form.Div05.visible = false;

        		// 운전허가증 제출사진 보여줌
        		this.divForm.form.sub_tit06.visible = true;
        		this.divForm.form.Div06.visible = true;

        		if(payPicCd == "1"){ // 납부담당자 동일 여부 신청자와동일하지않음 일때
        			this.divForm.form.Div07.form.pan01.visible = true; // 개인정보 수집/이용동의서 보여줌.
        			this.divForm.form.Div07.form.pan02.visible = true; // 개인정보 필수동의여부 보여줌.
        			this.divForm.form.Div07.form.pan03.visible = false; // 개인정보 선택동의여부 안보여줌.

        			// 같은 항목으로 동적바인딩 제거
        			this.removeChild(sItem);

        			// 바인딩 생성
        			bindObj.init(sItem, sCompid, "value", "dsList", "prvcClctEsntlAgreYn2");
        			this.addChild(sItem, bindObj);
        			bindObj.bind();

        		}

        		this.dsAplyKndList.filter("cdId == 'CARSVCTYPE003' || cdId == 'CARSVCTYPE004' || cdId == ''");

        		// this.rdoAplySe 가 1 일때만 초기화해줌.
        		if(this.rdoAplySe == "1"){
        			this.divForm.form.Div03.form.cboSrvcAplySe.index = 0;

        		}

        	}
        	this.resetScroll();
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
        		CTL11004	임시저장
        		CTL11005	신청
        		CTL11006	종료
        		CTL11007	재신청
        		CTL11008	재신청
        		CTL11009	미처리종료
        		CTL11010	접수
        		CTL11011	보완요청
        		CTL11012	보완요청
        		CTL11013	승인
        		CTL11014	담당자변경
        		CTL11015	미처리종료
        		CTL11016	제작완료
        		CTL11017	설문응답완료
        	*/

        	if(vBtnCd == "CTL11004"){ // 임시저장 버튼
        		this.vStrSvcId  = "elcttrAplyStrg";
        		this.vStrSvcUrl = "elcttr/elcttrAplyStrg.do";

        	}else if(vBtnCd == "CTL11005" || vBtnCd == "CTL11007" || vBtnCd == "CTL11008"){ // 신청서작성 - 신청, 신청서보완 - 재신청
        		// validation check
        		var res = this.fnValiChk();
        		if(!res){
        			return;

        		}

        		this.vStrSvcId  = "elcttrAplyStrg";
        		this.vStrSvcUrl = "elcttr/elcttrAplyStrg.do";

        	}else if(vBtnCd == "CTL11006" || vBtnCd == "CTL11009" || vBtnCd == "CTL11015"){ // 종료, 신청서보완 - 미처리종료, 담당자검토및승인 - 미처리종료
        		// 신규입력일때 종료 버튼 클릭 시 화면만 닫아줌.
        		if(this.dsList.getRowType(0) == Dataset.ROWTYPE_INSERT){
        			this.gfnConfirmMsg("endConfirm", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"], "", ["종료"]);

        			return;

        		}else{
        			this.vStrSvcId  = "elcttrAplyStrg";
        			this.vStrSvcUrl = "elcttr/elcttrAplyStrg.do";

        		}

        	}else if(vBtnCd == "CTL11010" || vBtnCd == "CTL11011"){ // 접수 - 접수, 접수 - 보완요청
        		this.vStrSvcId  = "elcttrAplyStrg";
        		this.vStrSvcUrl = "elcttr/elcttrAplyStrg.do";

        		// 서비스요청내용
        		if(this.gfnIsNull(this.dsList.getColumn(0, "srvcDmndCnIdntyYn"))){
        			this.divForm.form.Div07.form.rdoSrvcDmndCnYn.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["서비스요청내용확인 \n"]);
        			return;

        		}
        		// 보완요청 - 보완사유 체크
        		if(vBtnCd == "CTL11011"){
        			if(this.gfnIsNull(this.dsList.getColumn(0, "splmntDmndRsnCn"))){
        				this.divForm.form.Div07.form.txtSplmntDmndRsn.setFocus();
        				this.gfnAlertMsg("msg", "MSG_009", ["보완요청사유 \n"]);
        				return;

        			}
        		}
        	}else if(vBtnCd == "CTL11012" || vBtnCd == "CTL11013"){ // 담당자검토및승인 - 보완요청 || 승인
        		this.vStrSvcId  = "elcttrAplyStrg";
        		this.vStrSvcUrl = "elcttr/elcttrAplyStrg.do";

        		// 서비스신청정보
        		if(this.gfnIsNull(this.dsList.getColumn(0, "srvcAplyInfoIdntyYn"))){
        			this.divForm.form.Div07.form.rdoSrvcDmndCnYn.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["서비스신청정보확인 \n"]);
        			return;

        		}
        		// 보완요청 - 보완사유 체크
        		if(vBtnCd == "CTL11012"){
        			if(this.gfnIsNull(this.dsList.getColumn(0, "splmntDmndRsnCn"))){
        				this.divForm.form.Div07.form.txtSplmntDmndRsn.setFocus();
        				this.gfnAlertMsg("msg", "MSG_009", ["보완요청사유 \n"]);
        				return;

        			}
        		}
        	}else if(vBtnCd == "CTL11014"){ // 담당자변경
        		alert("담당자변경 팝업 완료 시 연결 예정!!");
        		return;

        	}else if(vBtnCd == "CTL11016"){ // 제작완료
        		this.vStrSvcId  = "elcttrAplyStrg";
        		this.vStrSvcUrl = "elcttr/elcttrAplyStrg.do";

        	}

        	// 넘겨줄 데이터 세팅
        	this.dsList.setColumn(0, "jobCd", wfInfo.nextStepJobPrcsPrgrsSeCd);
        	this.dsList.setColumn(0, "aplySeCd", this.aplySeCd);

        	if(this.gfnIsNull(this.dsList.getColumn(0, "docCd"))){
        		this.dsList.setColumn(0, "docCd", "TSPDOC900"); // 공통코드 TSPDOC900 : 전동차신청

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
        	if(this.gfnIsNull(this.dsList.getColumn(0, "aplyDt"))){
        		this.dsList.setColumn(0, "aplyDt", curDt);

        	}
        	if(this.gfnIsNull(this.dsMst.getColumn(0, "aplyDt"))){
        		this.dsMst.setColumn(0, "aplyDt", curDt);

        	}

        	// 종료, 신청서보완 - 미처리종료, 담당자검토및승인 - 미처리종료, 등록/허가증제작중 - 제작완료
        	if(vBtnCd == "CTL11006" || vBtnCd == "CTL11009" || vBtnCd == "CTL11015" || vBtnCd == "CTL11016"){
        		// 종료일자 세팅
        		this.dsList.setColumn(0, "endDt", curDt);
        		this.dsMst.setColumn(0, "endDt", curDt);

        	}

        	// 접수 - 접수
        	if(vBtnCd == "CTL11010"){
        		// 접수일자 세팅
        		this.dsList.setColumn(0, "rcptDt", curDt);
        		this.dsMst.setColumn(0, "rcptDt", curDt);

        	}

        	// 청구이메일 세팅
        	if(!this.gfnIsNull(this.dsList.getColumn(0, "clmEml1")) && !this.gfnIsNull(this.dsList.getColumn(0, "clmEml2"))){
        		var sClmEml = this.dsList.getColumn(0, "clmEml1") + "@" + this.dsList.getColumn(0, "clmEml2");

        		this.dsList.setColumn(0, "clmEml", sClmEml);

        	}

        	// 세금계산서이메일 세팅
        	if(!this.gfnIsNull(this.dsList.getColumn(0, "txivEml1")) && !this.gfnIsNull(this.dsList.getColumn(0, "txivEml2"))){
        		var sTxivEml = this.dsList.getColumn(0, "txivEml1") + "@" + this.dsList.getColumn(0, "txivEml2");

        		this.dsList.setColumn(0, "txivEml", sTxivEml);

        	}

        	// 등록일자는 기존의값이 없을때만 현재일시로 넣어줌.
        	if(this.gfnIsNull(this.dsList.getColumn(0, "regDt"))){
        		this.dsList.setColumn(0, "regDt", curDt);

        	}

        	// 납부담당자동일여부 - 동일하지않을때 서약서동의여부, 납부담당자 개인정보 수집/이용동의서 null로 넘겨줌.
        	if(this.dsList.getColumn(0, "payPicSmYn") == "0"){
        		this.cfnDelAtfl("payPicPrvcClctAgreFile"); // 파일있으면 삭제
        		this.dsList.setColumn(0, "wtohAgreYn", null);

        	}

        	// 청구방식 - 지로용지일때 청구메일 null로 넘겨줌.
        	if(this.dsList.getColumn(0, "clmMtdCd") == "0"){
        		this.dsList.setColumn(0, "clmEml", null);

        	}

        	// 신청종류코드 - 전동차등록/전동차운전허가 각각 불필요 파일경로 제거
        	if(this.dsList.getColumn(0, "aplyKndCd") == "CARREQTYPE001"){
        		this.cfnDelAtfl("prtcZoneAdpsFrtsdFile"); // 파일있으면 삭제
        		this.cfnDelAtfl("prtcZoneAdpsBaksdFile"); // 파일있으면 삭제
        		this.cfnDelAtfl("carLcnDpctFile"); // 파일있으면 삭제
        		this.cfnDelAtfl("bizcrdPhotoFile"); // 파일있으면 삭제

        	}else if(this.dsList.getColumn(0, "aplyKndCd") == "CARREQTYPE002"){
        		this.cfnDelAtfl("pblcnPrdctSpcfatFile"); // 파일있으면 삭제
        		this.cfnDelAtfl("insrncJoinPrdocFile"); // 파일있으면 삭제
        		this.cfnDelAtfl("elcttrFrtPhotoFile"); // 파일있으면 삭제
        		this.cfnDelAtfl("elcttrRarPhotoFile"); // 파일있으면 삭제
        		this.cfnDelAtfl("elcttrFlkPhotoFile"); // 파일있으면 삭제

        	}

        	// 납부담당자동일여부 - 동일하지 않을때 개인정보동의 항목 null 넣어줌.
        	if(this.dsList.getColumn(0, "payPicSmYn") == "1"){ // 동일하지않음
        		if(this.dsList.getColumn(0, "aplyKndCd") == "CARREQTYPE002"){
        			this.dsList.setColumn(0, "prvcClctEsntlAgreYn", null);
        			this.dsList.setColumn(0, "prvcClctChcAgreYn", null);

        		}else{
        			this.dsList.setColumn(0, "prvcClctEsntlAgreYn", null);
        			this.dsList.setColumn(0, "prvcClctEsntlAgreYn2", null);
        			this.dsList.setColumn(0, "prvcClctChcAgreYn", null);

        		}

        	}else if(this.dsList.getColumn(0, "payPicSmYn") == "0"){ // 동일함
        		this.dsList.setColumn(0, "prvcClctEsntlAgreYn2", null);

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

        	if(this.dsMst.getColumn(0, "clmZip") != this.dsList.getColumn(0, "clmZip")){
        		this.dsMst.setColumn(0, "clmZip", this.dsList.getColumn(0, "clmZip"));	// 우편번호

        	}
        	if(this.dsMst.getColumn(0, "clmAddr") != this.dsList.getColumn(0, "clmAddr")){
        		this.dsMst.setColumn(0, "clmAddr", this.dsList.getColumn(0, "clmZip"));	// 청구주소

        	}
        	if(this.dsMst.getColumn(0, "clmDtlAddr") != this.dsList.getColumn(0, "clmDtlAddr")){
        		this.dsMst.setColumn(0, "clmDtlAddr", this.dsList.getColumn(0, "clmDtlAddr"));		// 청구상세주소

        	}

        	// 수정된 내역이 있는지 체크
        	if(!this.gfnDsIsUpdated(this.dsList) && !this.gfnDsIsUpdated(this.dsAtfl) && !this.gfnDsIsUpdated(this.dsCnvyMttr)){
        		this.gfnAlertMsg("msg", "MSG_004", [""]);
        		return;

        	}

        	// 신청일때 팝업 호출
        	if(vBtnCd == "CTL11005"){
        		var sTitle = "전동차 안전운전 및 규정준수에 관한 서약서";

        		var objArg   = {
        			  paramInstNm : this.gvCoNm
        			, paramNm : this.gvUserNm
        		};

        		var objOption = {
        			popuptype: "modal"	//modal,modaless
        			, width: 720
        			, height: 580			//width,height 지정하지 않음 popup form size적용
        			, autosize: false
        			, title: sTitle
        			, resize: true
        			, titlebar: true
        		};
        		var sPopupCallBack = "fnPopupCallback";

        		this.gfnOpenPopup("wtohAgreYnPop", "work::LIF/TSC/LIF080P07.xfdl", objArg, sPopupCallBack, objOption);

        	}else if(vBtnCd == "CTL11006" || vBtnCd == "CTL11009" || vBtnCd == "CTL11015"){ // 종료, 신청서보완 - 미처리종료, 담당자검토및승인 - 미처리종료
        		this.gfnConfirmMsg("endSaveConfirm", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"], "", ["종료"]);

        	}else{
        		this.gfnConfirmMsg("save_confirm", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"]);

        	}
        }

        /**************************************************************************
         * @name : btnPop_onclick
         * @description : 우편번호찾기
         ***************************************************************************/
        this.btnPop_onclick = function(obj,e)
        {
        	alert("우편번호 찾기!!! 임시데이터");

        	this.dsList.setColumn(0, "clmZip", "11111");
        	this.dsList.setColumn(0, "clmAddr", "테스트 주소~");
        	this.dsList.setColumn(0, "clmDtlAddr", "101동101호");


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
         * @name : btnHstry_onclick
         * @description : 과거이력불러오기 버튼 클릭
         ***************************************************************************/
        this.btnHstry_onclick = function(obj,e)
        {
        	alert("LIF080P08?? LIF080P07?? 이력 조회 팝업 생성 완료 후 연결예정");
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

        	}else if(objNm == "btn06"){
        		objDiv = this.divForm.form.Div06;
        		objTit = this.divForm.form.sub_tit06;

        	}else if(objNm == "btn07"){
        		objDiv = this.divForm.form.Div07;
        		objTit = this.divForm.form.sub_tit07;

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
        		objEdt = this.divForm.form.Div02.form.edtAcuntEmlAddr2;

        	}else if(objNm == "cboTxivEmlAddr"){
        		objEdt = this.divForm.form.Div02.form.edtTxivEmlAddr2;

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
        		cboNm = this.divForm.form.Div02.form.cboAcuntEmlAddr;

        	}else if(objNm == "edtTxivEmlAddr2"){
        		cboNm = this.divForm.form.Div02.form.cboTxivEmlAddr;

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
         * @name : rdoSrvcDmndCnYn_onitemchanged
         * @description : 서비스요청내용 수정 완료 시
         ***************************************************************************/
        this.rdoSrvcDmndCnYn_onitemchanged = function(obj,e)
        {
        	var objVal = obj.value;

        	if(this.jobCd == "TAS10440"){ // 접수
        		if(objVal == "1"){ // 1 : 확인
        			/*
        			CTL11010	접수
        			CTL11011	보완요청
        			*/
        			Array.from(this.btnDiv.form.components).forEach(oComp => {
        				if(oComp.id == "CTL11010"){
        					oComp.visible = true;

        				}else{
        					oComp.visible = false;

        				}
        			});

        		}else{
        			Array.from(this.btnDiv.form.components).forEach(oComp => {
        				if(oComp.id == "CTL11011"){
        					oComp.visible = true;

        				}else{
        					oComp.visible = false;

        				}
        			});
        		}

        	}else if(this.jobCd == "TAS10441"){ // 담당자검토및승인
        		if(objVal == "1"){ // 1 : 확인
        			/*
        			CTL11012	보완요청
        			CTL11013	승인
        			*/
        			Array.from(this.btnDiv.form.components).forEach(oComp => {
        				if(oComp.id == "CTL11013"){
        					oComp.visible = true;

        				}else if(oComp.id == "CTL11012"){
        					oComp.visible = false;

        				}
        			});

        		}else{
        			Array.from(this.btnDiv.form.components).forEach(oComp => {
        				if(oComp.id == "CTL11012"){
        					oComp.visible = true;

        				}else if(oComp.id == "CTL11013"){
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

        /**************************************************************************
         * @name : rdoPayPicSmYn_onitemclick
         * @description : 납부담당자동일여부 라디오 클릭 시
         ***************************************************************************/
        this.rdoPayPicSmYn_onitemclick = function(obj,e)
        {
        	this.rdoPaySe = "1";

        };

        /**************************************************************************
         * @name : rdoAplyKnd_onitemclick
         * @description : 신청종류 라디오 클릭 시
         ***************************************************************************/
        this.rdoAplyKnd_onitemclick = function(obj,e)
        {
        	this.rdoAplySe = "1";
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onvscroll",this.form_onvscroll,this);
            this.divForm.form.divInfoGuide.form.btnSchClose.addEventHandler("onclick",this.divInfoGuide_btnSchClose_onclick,this);
            this.divForm.form.btnMinAplcntInfo.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.Div01.form.btnHstry.addEventHandler("onclick",this.btnHstry_onclick,this);
            this.divForm.form.btnMinClmInfo.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.Div02.form.btnPayPicPrvcClctAgreFile.addEventHandler("onclick",this.FileAtch_onclick,this);
            this.divForm.form.Div02.form.divEdtPop.form.btnPop.addEventHandler("onclick",this.btnPop_onclick,this);
            this.divForm.form.Div02.form.rdoClmSe.addEventHandler("onitemchanged",this.rdoClmSe_onitemchanged,this);
            this.divForm.form.Div02.form.edtAcuntEmlAddr2.addEventHandler("onchanged",this.edtEml_onchanged,this);
            this.divForm.form.Div02.form.cboAcuntEmlAddr.addEventHandler("onitemchanged",this.cboEml_onitemchanged,this);
            this.divForm.form.Div02.form.edtTxivEmlAddr2.addEventHandler("onchanged",this.edtEml_onchanged,this);
            this.divForm.form.Div02.form.cboTxivEmlAddr.addEventHandler("onitemchanged",this.cboEml_onitemchanged,this);
            this.divForm.form.Div02.form.rdoPayPicSmYn.addEventHandler("onitemchanged",this.rdoPayPicSmYn_onitemchanged,this);
            this.divForm.form.Div02.form.rdoPayPicSmYn.addEventHandler("onitemclick",this.rdoPayPicSmYn_onitemclick,this);
            this.divForm.form.Div02.form.grdPayPicPrvcClctAgre.addEventHandler("oncellclick",this.grd_oncellclick,this);
            this.divForm.form.Div02.form.grdPayPicPrvcClctAgre.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.btnMinAplyInfo.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.Div03.form.staSrvcAplySe.addEventHandler("onclick",this.Common_onclick,this);
            this.divForm.form.Div03.form.pan02_04_00.addEventHandler("onclick",this.Common_onclick,this);
            this.divForm.form.Div03.form.pan02_02_02_00.addEventHandler("onclick",this.Common_onclick,this);
            this.divForm.form.Div03.form.rdoAplyKnd.addEventHandler("onitemchanged",this.rdoAplyKnd_onitemchanged,this);
            this.divForm.form.Div03.form.rdoAplyKnd.addEventHandler("onitemclick",this.rdoAplyKnd_onitemclick,this);
            this.divForm.form.Div03.form.pan04.addEventHandler("onclick",this.Common_onclick,this);
            this.divForm.form.Div03.form.cboSrvcAplySe.addEventHandler("onitemchanged",this.cbo00_onitemchanged,this);
            this.divForm.form.Div03.form.cboBldg.addEventHandler("onitemchanged",this.cbo00_onitemchanged,this);
            this.divForm.form.btnMinDoc.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.Div04.form.btnInsrncJoinPrdocFile.addEventHandler("onclick",this.FileAtch_onclick,this);
            this.divForm.form.Div04.form.pan00.addEventHandler("onclick",this.Common_onclick,this);
            this.divForm.form.Div04.form.btnPblcnPrdctSpcfatFile.addEventHandler("onclick",this.FileAtch_onclick,this);
            this.divForm.form.Div04.form.grdPblcnPrdctSpcfat.addEventHandler("oncellclick",this.grd_oncellclick,this);
            this.divForm.form.Div04.form.grdPblcnPrdctSpcfat.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div04.form.grdInsrncJoinPrdoc.addEventHandler("oncellclick",this.grd_oncellclick,this);
            this.divForm.form.Div04.form.grdInsrncJoinPrdoc.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.btnMinPhoto.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.Div05.form.btnElcttrFrtPhotoFile.addEventHandler("onclick",this.FileAtch_onclick,this);
            this.divForm.form.Div05.form.grdElcttrFrtPhoto.addEventHandler("oncellclick",this.grd_oncellclick,this);
            this.divForm.form.Div05.form.grdElcttrFrtPhoto.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div05.form.pan00.addEventHandler("onclick",this.Common_onclick,this);
            this.divForm.form.Div05.form.btnElcttrRarPhotoFile.addEventHandler("onclick",this.FileAtch_onclick,this);
            this.divForm.form.Div05.form.grdElcttrRarPhoto.addEventHandler("oncellclick",this.grd_oncellclick,this);
            this.divForm.form.Div05.form.grdElcttrRarPhoto.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div05.form.pan01.addEventHandler("onclick",this.Common_onclick,this);
            this.divForm.form.Div05.form.btnElcttrFlkPhotoFile.addEventHandler("onclick",this.FileAtch_onclick,this);
            this.divForm.form.Div05.form.grdElcttrFlkPhoto.addEventHandler("oncellclick",this.grd_oncellclick,this);
            this.divForm.form.Div05.form.grdElcttrFlkPhoto.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div05.form.pan02.addEventHandler("onclick",this.Common_onclick,this);
            this.divForm.form.btnMinDrvn.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.Div06.form.btnPrtcZoneAdpsBaksdFile.addEventHandler("onclick",this.FileAtch_onclick,this);
            this.divForm.form.Div06.form.btnCarLcnDpctFile.addEventHandler("onclick",this.FileAtch_onclick,this);
            this.divForm.form.Div06.form.btnBizcrdPhotoFile.addEventHandler("onclick",this.FileAtch_onclick,this);
            this.divForm.form.Div06.form.pan00.addEventHandler("onclick",this.Common_onclick,this);
            this.divForm.form.Div06.form.pan01.addEventHandler("onclick",this.Common_onclick,this);
            this.divForm.form.Div06.form.grdPrtcZoneAdpsFrtsd.addEventHandler("oncellclick",this.grd_oncellclick,this);
            this.divForm.form.Div06.form.grdPrtcZoneAdpsFrtsd.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div06.form.grdPrtcZoneAdpsBaksd.addEventHandler("oncellclick",this.grd_oncellclick,this);
            this.divForm.form.Div06.form.grdPrtcZoneAdpsBaksd.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div06.form.grdCarLcnDpct.addEventHandler("oncellclick",this.grd_oncellclick,this);
            this.divForm.form.Div06.form.grdCarLcnDpct.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div06.form.grdBizcrdPhoto.addEventHandler("oncellclick",this.grd_oncellclick,this);
            this.divForm.form.Div06.form.grdBizcrdPhoto.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div06.form.btnPrtcZoneAdpsFrtsdFile.addEventHandler("onclick",this.FileAtch_onclick,this);
            this.divForm.form.btnMinAprvYn.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.Div07.form.TextArea00_01.addEventHandler("onchanged",this.divForm_Div03_TextArea00_onchanged,this);
            this.divForm.form.Div07.form.pan00.addEventHandler("onclick",this.Common_onclick,this);
            this.divForm.form.Div07.form.TextArea00.addEventHandler("onchanged",this.divForm_Div03_TextArea00_onchanged,this);
            this.divForm.form.Div07.form.rdoSrvcDmndCnYn.addEventHandler("onitemchanged",this.rdoSrvcDmndCnYn_onitemchanged,this);
            this.divForm.form.Div07.form.txtSplmntDmndRsn.addEventHandler("onchanged",this.divForm_Div03_TextArea00_onchanged,this);
            this.divForm.form.Div07.form.txtCnvyMttr.addEventHandler("onchanged",this.divForm_Div03_TextArea00_onchanged,this);
            this.divQuick.form.btn01.addEventHandler("onclick",this.btnQuick_onclick,this);
            this.divQuick.form.btn02.addEventHandler("onclick",this.btnQuick_onclick,this);
            this.divQuick.form.btn03.addEventHandler("onclick",this.btnQuick_onclick,this);
            this.divQuick.form.btn04.addEventHandler("onclick",this.btnQuick_onclick,this);
            this.divQuick.form.btn05.addEventHandler("onclick",this.btnQuick_onclick,this);
            this.divQuick.form.btn06.addEventHandler("onclick",this.btnQuick_onclick,this);
            this.divQuick.form.btn07.addEventHandler("onclick",this.btnQuick_onclick,this);
            this.divBtn.form.btn00_00.addEventHandler("onclick",this.divBtn_btn00_00_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsMain_onvaluechanged,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsMain_onvaluechanged,this);
            this.dsMst.addEventHandler("onvaluechanged",this.dsMst_onvaluechanged,this);
            this.dsMst.addEventHandler("onload",this.dsMst_onload,this);
            this.dsAtfl.addEventHandler("onload",this.dsAtfl_onload,this);
            this.dsAtflDown.addEventHandler("onload",this.dsAtfl_onload,this);
        };
        this.loadIncludeScript("LIF055M00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
