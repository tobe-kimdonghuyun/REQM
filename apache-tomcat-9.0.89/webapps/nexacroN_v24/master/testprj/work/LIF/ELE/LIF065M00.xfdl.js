(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LIF065M00");
            this.set_titletext("난로사용신청서작성");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cbo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"hh\" type=\"STRING\" size=\"256\"/><Column id=\"mm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"hh\">선택</Col><Col id=\"code\">0</Col><Col id=\"mm\">선택</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"hh\">01</Col><Col id=\"mm\">5</Col></Row><Row><Col id=\"hh\">02</Col><Col id=\"code\">2</Col><Col id=\"mm\">10</Col></Row><Row><Col id=\"hh\">03</Col><Col id=\"code\">3</Col><Col id=\"mm\">15</Col></Row><Row><Col id=\"hh\">04</Col><Col id=\"code\">4</Col><Col id=\"mm\">20</Col></Row><Row><Col id=\"hh\">05</Col><Col id=\"code\">5</Col><Col id=\"mm\">25</Col></Row><Row><Col id=\"hh\">06</Col><Col id=\"code\">6</Col><Col id=\"mm\">30</Col></Row><Row><Col id=\"hh\">07</Col><Col id=\"code\">7</Col><Col id=\"mm\">35</Col></Row><Row><Col id=\"hh\">08</Col><Col id=\"code\">8</Col><Col id=\"mm\">40</Col></Row><Row><Col id=\"hh\">09</Col><Col id=\"code\">9</Col><Col id=\"mm\">45</Col></Row><Row><Col id=\"hh\">10</Col><Col id=\"code\">10</Col><Col id=\"mm\">50</Col></Row><Row><Col id=\"hh\">11</Col><Col id=\"code\">11</Col><Col id=\"mm\">60</Col></Row><Row><Col id=\"hh\">12</Col><Col id=\"code\">12</Col></Row><Row><Col id=\"hh\">13</Col><Col id=\"code\">13</Col></Row><Row><Col id=\"hh\">14</Col><Col id=\"code\">14</Col></Row><Row><Col id=\"code\">15</Col><Col id=\"hh\">15</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds00", this);
            obj._setContents("<ColumnInfo><Column id=\"체크\" type=\"STRING\" size=\"256\"/><Column id=\"작업일\" type=\"STRING\" size=\"256\"/><Column id=\"작업시작시간\" type=\"STRING\" size=\"256\"/><Column id=\"작업종료시간\" type=\"STRING\" size=\"256\"/><Column id=\"개요\" type=\"STRING\" size=\"256\"/><Column id=\"작업내역\" type=\"STRING\" size=\"256\"/><Column id=\"작업자회사\" type=\"STRING\" size=\"256\"/><Column id=\"신청자\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"inqSeCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEleMst", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobNm\" type=\"STRING\" size=\"256\"/><Column id=\"bfrJobCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeNm\" type=\"STRING\" size=\"256\"/><Column id=\"endCd\" type=\"STRING\" size=\"256\"/><Column id=\"endNm\" type=\"STRING\" size=\"256\"/><Column id=\"docCd\" type=\"STRING\" size=\"256\"/><Column id=\"docNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyDt\" type=\"STRING\" size=\"256\"/><Column id=\"rcptDt\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"actlEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"clrId\" type=\"STRING\" size=\"256\"/><Column id=\"clrNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrJobGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrJobGroup\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrJobGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrFrdpmtId\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrFrdpmtNm\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPrcrPbcprtId\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPrcrPbcprtNm\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtPrcrJobGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"rcptChcYn\" type=\"STRING\" size=\"256\"/><Column id=\"rcptHwrtInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntHwrtInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptAplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptCtrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptPstnInfoCn\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptClmZip\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptClmAddr\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptClmDtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptCoNm\" type=\"STRING\" size=\"256\"/><Column id=\"clmCustCd\" type=\"STRING\" size=\"256\"/><Column id=\"clmAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmZip\" type=\"STRING\" size=\"256\"/><Column id=\"clmDtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"pstnSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"bldgSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"pstnSeNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstnInfoRnb\" type=\"STRING\" size=\"256\"/><Column id=\"dptyRegYn\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnRspnsYn\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnRspnsDt\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclNm1\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclNm2\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclNm3\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnExmnCn1\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnExmnCn2\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnExmnCn3\" type=\"STRING\" size=\"256\"/><Column id=\"fileCnt\" type=\"STRING\" size=\"256\"/><Column id=\"cnvyMttrCn\" type=\"STRING\" size=\"256\"/><Column id=\"pbcprtPsnYn\" type=\"STRING\" size=\"256\"/><Column id=\"dtlPstnCn\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtElpwrVl\" type=\"STRING\" size=\"256\"/><Column id=\"usePrdBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"usePrdEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"elctyUseMtdCd\" type=\"STRING\" size=\"256\"/><Column id=\"elctyPosplyMtdCd\" type=\"STRING\" size=\"256\"/><Column id=\"posplyShtotYmd\" type=\"STRING\" size=\"256\"/><Column id=\"spadptNm\" type=\"STRING\" size=\"256\"/><Column id=\"emgcSpadptNm\" type=\"STRING\" size=\"256\"/><Column id=\"gageNo\" type=\"STRING\" size=\"256\"/><Column id=\"emgcGageNo\" type=\"STRING\" size=\"256\"/><Column id=\"gageMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"emgcGageMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"gageMnfct\" type=\"STRING\" size=\"256\"/><Column id=\"emgcGageMnfct\" type=\"STRING\" size=\"256\"/><Column id=\"rprsvNm\" type=\"STRING\" size=\"256\"/><Column id=\"crtYmd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyRmtqt\" type=\"STRING\" size=\"256\"/><Column id=\"emgcRmtqt\" type=\"STRING\" size=\"256\"/><Column id=\"rmtqtAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"erpInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"rtosIdntyCmptnYmd\" type=\"STRING\" size=\"256\"/><Column id=\"cncltnRsnCd\" type=\"STRING\" size=\"256\"/><Column id=\"cncltnRsnEtcCn\" type=\"STRING\" size=\"256\"/><Column id=\"kepcoElctyCncltnYn\" type=\"STRING\" size=\"256\"/><Column id=\"kepcoJntCtrtYn\" type=\"STRING\" size=\"256\"/><Column id=\"gageDmltnYn\" type=\"STRING\" size=\"256\"/><Column id=\"rtosYn\" type=\"STRING\" size=\"256\"/><Column id=\"prcsRmtqt\" type=\"STRING\" size=\"256\"/><Column id=\"elctyUseAplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"bscInfoRegNo\" type=\"STRING\" size=\"256\"/><Column id=\"rtpyrClmInfoRegNo\" type=\"STRING\" size=\"256\"/><Column id=\"prvcClctEsntlAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"prvcClctChcAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyNm4\" type=\"STRING\" size=\"256\"/><Column id=\"agreYn\" type=\"STRING\" size=\"256\"/><Column id=\"rprsCustCrgNpmntCncltnMthdCd\" type=\"STRING\" size=\"256\"/><Column id=\"jntUtztnCtrtElpwrVl\" type=\"STRING\" size=\"256\"/><Column id=\"jntUtztnCustAddr\" type=\"STRING\" size=\"256\"/><Column id=\"jntUtztnCustZip\" type=\"STRING\" size=\"256\"/><Column id=\"jntUtztnCustDtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"jntUtztnCustNm\" type=\"STRING\" size=\"256\"/><Column id=\"jntUtztnMeurVltgVl\" type=\"STRING\" size=\"256\"/><Column id=\"faltCn\" type=\"STRING\" size=\"256\"/><Column id=\"cnvsCpctSumVl\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtElpwrVl6\" type=\"STRING\" size=\"256\"/><Column id=\"trsfmQty\" type=\"STRING\" size=\"256\"/><Column id=\"trsfmInclCtrtElpwrVl\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileNo\" type=\"STRING\" size=\"256\"/><Column id=\"atchSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"bscInfoRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyNm7\" type=\"STRING\" size=\"256\"/><Column id=\"bzcndNm\" type=\"STRING\" size=\"256\"/><Column id=\"tpbizNm\" type=\"STRING\" size=\"256\"/><Column id=\"custZip\" type=\"STRING\" size=\"256\"/><Column id=\"custAddr\" type=\"STRING\" size=\"256\"/><Column id=\"custDtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"rprsvNm3\" type=\"STRING\" size=\"256\"/><Column id=\"rprsTelno\" type=\"STRING\" size=\"256\"/><Column id=\"crno\" type=\"STRING\" size=\"256\"/><Column id=\"clmMtdCd\" type=\"STRING\" size=\"256\"/><Column id=\"etxivEmlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"etxivEmlAddr1\" type=\"STRING\" size=\"256\"/><Column id=\"etxivEmlAddr2\" type=\"STRING\" size=\"256\"/><Column id=\"acuntEml\" type=\"STRING\" size=\"256\"/><Column id=\"acuntEml1\" type=\"STRING\" size=\"256\"/><Column id=\"acuntEml2\" type=\"STRING\" size=\"256\"/><Column id=\"payPicSmYn\" type=\"STRING\" size=\"256\"/><Column id=\"payPicDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"payPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"payPicTelno\" type=\"STRING\" size=\"256\"/><Column id=\"payPicMblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"irglrClmYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("");
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


            obj = new Dataset("dsEleCpctLoad", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtflArtclList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"수집이용항목\" type=\"STRING\" size=\"256\"/><Column id=\"수집목적\" type=\"STRING\" size=\"256\"/><Column id=\"보유기간\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","divTitle:10",null,"9361.93","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickFrBg");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Button("btnMinTitle","460","-55","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit00","955","18","100%","58",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staSubTitle02_00_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_03\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_03","0","-53","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_text("서비스 흐름 및 작업방법 안내(타이틀미정)");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_03","505","-53","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinTitle\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divInfoGuide","1660.00","262","100%","300",null,null,null,null,"300",null,this.divForm.form);
            obj.set_taborder("1");
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

            obj = new Static("staSubTitle02_00_00_00","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("6");
            obj.set_text("반려확인/난로해지");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinCncltn","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_00_00","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("8");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinCncltn\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit","1630","674","100%","66",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("9");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div00","0","30","100%","658",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("10");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("sta00_00","-235","870","100%","217",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("◎ 문의처\r\n  ○여객터미널 : 741-7545 동우공영(주)전기팀\r\n  ○탑승동      : 741-7545 동우공영(주)전기팀\r\n ○교통센터    : 714-7410 (주)우리피앤에스 전기팀\r\n ○자유무역지역\r\n     사업/행정 지원센터 : 741-1303 (주)원봉기업 전기담당\r\n ○화물터미널 C동 :  741-1303 (주)원봉기업 전기담당\r\n ○북측항공화물창고 :  741-1303 (주)원봉기업 전기담당\r\n ○부대건물\r\n    - 일반지역 : 741-6123 한전산업개발(주)\r\n    - 보호구역 : 741-7016 한전산업개발(주)\r\n    - 보호구역(이동지역) : 741-7026 (주) 서광종합개발");
            obj.set_cssclass("sta_WF_Des004");
            obj.set_fittocontents("height");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_10","10.00","98","100%","237",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("1");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"sta00_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","60","100.00%","248",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("2");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_10\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staHetrCncltnYmd","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("3");
            obj.set_text("난로해지일");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("calHetrCncltnYmd","280","139","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("4");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel05_00","20.00","242","305","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staHetrCncltnYmd\"/><PanelItem id=\"PanelItem02\" componentid=\"calHetrCncltnYmd\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel05_01","20.00","242","305","0",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","242","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("7");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel05_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel05_01\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staHetrCncltnRsn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("8");
            obj.set_text("난로해지사유");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new TextArea("txtHetrCncltnRsn","43","1193","100%","100",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("9");
            obj.set_displaynulltext("내용입력");
            obj.set_readonly("false");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00","43.00","1193","100%","100",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("10");
            obj.set_background("#ffffff");
            obj.set_verticalgap("10");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"txtHetrCncltnRsn\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_02_00","20.00","950","980","146",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("11");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staHetrCncltnRsn\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_01_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel03","51","1527","100.00%","157",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("12");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_02_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staCncltnPrcsCn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("13");
            obj.set_text("해지처리내용");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new TextArea("txtCncltnPrcsCn","43","1193","100%","100",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("14");
            obj.set_displaynulltext("내용입력");
            obj.set_readonly("false");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00_00","43.00","1193","100%","100",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("15");
            obj.set_background("#ffffff");
            obj.set_verticalgap("10");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"txtCncltnPrcsCn\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_02_00_00","20.00","950","980","146",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCncltnPrcsCn\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_01_00_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel04","51","1527","100.00%","157",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("17");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_02_00_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staSubTitle01","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("11");
            obj.set_text("신청자 정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinAplcntInfo","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("13");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinAplcntInfo\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit01","1630","674","100%","66",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("14");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div01","0","0","100%","1377",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("15");
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

            obj = new Panel("Panel04","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("28");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel00_00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_01\"/></Contents>");
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

            obj = new Panel("Panel05","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
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

            obj = new Static("staAplcntNmHwrtInpt","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("33");
            obj.set_text("신청자(수기입력)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtAplcntNmHwrtInpt","42","47","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("34");
            obj.set_readonly("false");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_02","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("35");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staAplcntNmHwrtInpt\"/><PanelItem id=\"PanelItem02\" componentid=\"edtAplcntNmHwrtInpt\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staClmCustNo","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("36");
            obj.set_text("청구고객번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtClmCustNo","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("37");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_03","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("38");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staClmCustNo\"/><PanelItem id=\"PanelItem01\" componentid=\"edtClmCustNo\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_02","10.00","98","305","0",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("39");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel06","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("40");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_03\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_01_02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staClmAddr","0","0","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("41");
            obj.set_text("청구지주소/우편번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Div("divEdtPop002","780.00","635","150","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("42");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtClmZip","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.Div01.form.divEdtPop002.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            obj.set_displaynulltext("우편번호 검색");
            this.divForm.form.Div01.form.divEdtPop002.addChild(obj.name, obj);

            obj = new Button("btnClmAddr","edtClmZip:-40","0","40","40",null,null,null,null,null,null,this.divForm.form.Div01.form.divEdtPop002.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            obj.set_visible("false");
            this.divForm.form.Div01.form.divEdtPop002.addChild(obj.name, obj);

            obj = new Edit("edtClmAddr2","360","637","305","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("43");
            obj.set_readonly("true");
            obj.set_flexgrow("2");
            obj.set_displaynulltext("주소");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("panAddress","200","641","100%","45",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("44");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divEdtPop002\"/><PanelItem id=\"PanelItem02\" componentid=\"edtClmAddr2\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtClmAddrDtl2","0","46","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("45");
            obj.set_displaynulltext("상세주소");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_00","20.00","0","100%","151",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("46");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staClmAddr\"/><PanelItem id=\"PanelItem03\" componentid=\"panAddress\"/><PanelItem id=\"PanelItem01\" componentid=\"edtClmAddrDtl2\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel07","0","60","100.00%","162",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("47");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_01_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staRnb","1028","-20","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("48");
            obj.set_text("위치정보(룸번호)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtRnb","1028","26","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("49");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_01","1028","-20","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("50");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRnb\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRnb\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel08","1008","-20","100.00%","95",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("51");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staPstnHwrtInpt","1028","76","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("52");
            obj.set_text("위치정보(수기입력)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtPstnHwrtInpt","1028","121","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("53");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel07_00","1028","76","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("54");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPstnHwrtInpt\"/><PanelItem id=\"PanelItem01\" componentid=\"edtPstnHwrtInpt\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel09","1008","76","100.00%","95",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("55");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel07_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staPrvcClctAgre","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("56");
            obj.set_text("난로신청안내문");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta00","20","20","100%","285",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("57");
            obj.set_text("◎ 난로신청 안내\r\n  1. 신청대상:전기스토브, 전기히터, 석유난로\r\n      ※ 전기제품은 난로신청 불필요\r\n       (예:온풍기(고정식 캐비넷형), 라지에터, 전기방식, 커피포트, 전자렌지 등) \r\n 2. 난로사용 금지장소 및 승인된 난로 이동금지\r\n     - 사용금지 장소 : 위험물이 근접한 장소, 다량의 습기가 발생하는 장소 등\r\n 3. 승인기간 : 11.1 ~ 3.31(기온 급강하 등 필요한 경우 승인기간 조정 가능)\r\n 4. 사용기간 : 11.1 ~ 2.28\r\n      ※ 재해약자가 사용하는 장소는 11.1 ~ 3.31일까지 사용 가능\r\n 5. 난로 1개당 신청서 1건으로 작성 바랍니다.\r\n 6. 사진첨부관련\r\n     - 위치도 첨부, 제품사진첨부 시 gif,jpeg,bmp,png 등 그림파일만 첨부가 가능하고 크기는 600*800(예) 이하로 첨부하여 주시길 바랍니다.(hwp,pdf 등 사용불가)\r\n 7. 난로사용승인 신청 후 현장확인이 가능하도록 위치에 난로를 비치하여 주시길 바랍니다.\r\n \r\n소방대 안전행정반 / 032-741-2142");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Des004");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_04","10.00","98","100%","285",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("58");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"sta00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_03_00_00_00","10.00","98","100%","341",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("59");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("10");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPrvcClctAgre\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel00_00_04\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel10","0","60","100.00%","352",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("60");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_03_00_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_00","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("16");
            obj.set_text("신청 정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinAplyPstn","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_00","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("18");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinAplyPstn\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit02","1630","674","100%","66",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("19");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div02","0","376.428","100%","2786.94",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("20");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staPstnSe","1028","-116","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("0");
            obj.set_text("위치구분");
            obj.set_cssclass("sta_WF_Label_E");
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

            obj = new Panel("Panel00_01_00","1028","-70","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"cboRgn\"/><PanelItem id=\"PanelItem01\" componentid=\"cboBldg\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_01","1028","-116","100%","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPstnSe\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_01_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel08","0","86","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("145");
            obj.set_spacing("10px 0px 0px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00_00_01_00_00_00_01_00_00_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel17","0","86","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("146");
            obj.set_spacing("10px 0px 0px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00_00_01_00_00_00_01_00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel18","0","86","100%","57",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("147");
            obj.set_spacing("10px 0px 0px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00_00_00_01_01_00_00_00_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01","1008","-116","100.00%","142",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("5");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00_00_00_01_00_00_00","0","97","100%","30",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("6");
            obj.set_text("위치구분 시 동 신청서 하단의 위치별(건물)문의처를 참고해 주시고 해당연락처로 상담도 가능합니다.");
            obj.set_cssclass("sta_WF_Des, sta_WF_TxtBlue");
            obj.set_usedecorate("true");
            obj.set_fittocontents("height");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00","20","86","100%","45",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("7");
            obj.set_spacing("10px 0px 0px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00_00_01_00_00_00_01_00_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staPstnExpln","1028","76","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("8");
            obj.set_text("위치설명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtPstnExpln","1028","121","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("9");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel07_00","1028","76","980","115.97",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPstnExpln\"/><PanelItem id=\"PanelItem01\" componentid=\"edtPstnExpln\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel08\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel02","1008","76","100.00%","126.97",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("11");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel07_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00_00_00_01_00_00_00_00","0","97","100%","30",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("12");
            obj.set_text("여객터미널 1층 12번 출입문 앞 안내데스크, 3번 활주로 끝단 등");
            obj.set_cssclass("sta_WF_Des");
            obj.set_usedecorate("true");
            obj.set_fittocontents("height");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLctnmp","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("13");
            obj.set_text("위치도 첨부");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btnLctnmpFile","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("14");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panBtnFile","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("15");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnLctnmpFile\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panTitle","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("16");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLctnmp\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Grid("grdLctnmp","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("17");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:B110\" cssclass=\"expr:dataset.parent.gfnIsNull(B110) ? &quot;&quot; : &quot;CellFile&quot;\" cursor=\"pointer\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.gfnIsNull(B110) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.gfnIsNull(B110) ? &quot;none&quot; : &quot;button&quot;\" text=\"삭제\" cssclass=\"expr:dataset.parent.gfnIsNull(B110) ? &quot;&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_01","20","20","100%","47",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("18");
            obj.set_text("설치장소 확인용입니다.\r\n<b v=\'true\'>* 그림파일만 첨부가 가능하며 크기는 600*800 이하로 첨부하여 주시기 바랍니다.(hwp,pdf 등 사용불가)</b>");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","192","1038","100%","97",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("19");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grdLctnmp\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00_00_00_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panFile1","0","42","100.00%","168",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("20");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel01_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staPrdctNm","1028","76","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("21");
            obj.set_text("제품명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtPrdctNm","1028","121","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("22");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00_00_00_01_00_00_00_00_00","0","97","100%","30",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("23");
            obj.set_text("예) 전기스토브, 전기히터, 기름난로, 원적외선난방기, 온풍기(이동형)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_usedecorate("true");
            obj.set_fittocontents("height");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel07_00_00","1028","76","980","115.97",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("24");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPrdctNm\"/><PanelItem id=\"PanelItem01\" componentid=\"edtPrdctNm\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel17\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel03","1008","76","100.00%","126.97",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("25");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel07_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staPrdctPhoto","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("26");
            obj.set_text("제품사진 첨부");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btnPrdctPhotoFile","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("27");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("28");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnPrdctPhotoFile\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panTitle00","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("29");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPrdctPhoto\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Grid("grdPrdctPhoto","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("30");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:B110\" cssclass=\"expr:dataset.parent.gfnIsNull(B110) ? &quot;&quot; : &quot;CellFile&quot;\" cursor=\"pointer\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.gfnIsNull(B110) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.gfnIsNull(B110) ? &quot;none&quot; : &quot;button&quot;\" text=\"삭제\" cssclass=\"expr:dataset.parent.gfnIsNull(B110) ? &quot;&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_01_00","20","20","100%","47",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("31");
            obj.set_text("KS마크 및 제품제원(라벨) 보이도록 제품사진 촬영바랍니다.\r\n<b v=\'true\'>* 그림파일만 첨부가 가능하며 크기는 600*800 이하로 첨부하여 주시기 바랍니다.(hwp,pdf 등 사용불가)</b>");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00","192","1038","100%","97",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("32");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grdPrdctPhoto\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00_00_00_01_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panFile2","0","42","100.00%","168",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("33");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel01_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("34");
            obj.set_text("<b v=\'true\'>전기용량 검토기준</b>(단상 220V 기준)");
            obj.set_cssclass("sta_WF_Label");
            obj.set_usedecorate("true");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Grid("Grid00","20.00","94","40%","179",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("35");
            obj.set_autofittype("col");
            obj.set_scrollbartype("none");
            obj.set_fillareatype("allrow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"270\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/><Row size=\"44\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"용량\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"A등급\" textAlign=\"center\"/><Cell col=\"1\" text=\"500W 이하\" textAlign=\"center\" cssclass=\"CellEnd\"/><Cell row=\"1\" textAlign=\"center\" text=\"B등급\"/><Cell row=\"1\" col=\"1\" textAlign=\"center\" cssclass=\"CellEnd\" text=\"500W 초과 ~ 3000W\"/><Cell row=\"2\" textAlign=\"center\" text=\"C등급\"/><Cell row=\"2\" col=\"1\" textAlign=\"center\" cssclass=\"CellEnd\" text=\"3000W 초과\"/></Band></Format></Formats>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_02","20.00","50","970","230",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("36");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem01\" componentid=\"Grid00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel04","0","46","100.00%","241",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("37");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_02\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staElctyCpctSe","0","0","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("38");
            obj.set_text("전기용량구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Combo("cboElctyCpctSe","0","46","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("39");
            obj.set_readonly("true");
            obj.set_innerdataset("dsEleCpctLoad");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_01_01_00","20","0","310","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("40");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staElctyCpctSe\"/><PanelItem id=\"PanelItem01\" componentid=\"cboElctyCpctSe\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_01_00_01_00_01","945","256","310","0",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("41");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel05","0","194","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("42");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_01_01_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel01_00_01_00_01_00_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staAprvNo","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("43");
            obj.set_text("승인번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtAprvNo","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("44");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("45");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staAprvNo\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAprvNo\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staElctyTeamMngNo","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("46");
            obj.set_text("전기팀관리번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtElctyTeamMngNo","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("47");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("48");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staElctyTeamMngNo\"/><PanelItem id=\"PanelItem01\" componentid=\"edtElctyTeamMngNo\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel06","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("49");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_01_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staFireamHdrppsSmYn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("50");
            obj.set_text("화기책임자(정) 동일여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","187","7","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("51");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staFireamHdrppsSmYn\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Radio("rdoFireamHdrppsSmYn","200.00","328","393","49.37",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("52");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div02_form_rdoFireamHdrppsSmYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div02_form_rdoFireamHdrppsSmYn_innerdataset", obj);
            divForm_form_Div02_form_rdoFireamHdrppsSmYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">신청자정보와 동일</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">신청자정보와 동일하지 않음</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div02_form_rdoFireamHdrppsSmYn_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("53");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Panel02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoFireamHdrppsSmYn\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel07","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("54");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staFireamHdrppsNm","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("55");
            obj.set_text("화기책임자(정)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtFireamHdrppsNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("56");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("57");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staFireamHdrppsNm\"/><PanelItem id=\"PanelItem01\" componentid=\"edtFireamHdrppsNm\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staFireamHdrppsTelno","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("58");
            obj.set_text("연락처(정)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtFireamHdrppsTelno","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("59");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("60");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staFireamHdrppsTelno\"/><PanelItem id=\"PanelItem01\" componentid=\"edtFireamHdrppsTelno\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_08","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("61");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_01_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staFireamHdrppsWtcs","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("62");
            obj.set_text("화기책임자(정) 개인정보수집 및 이용동의서");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btnFireamHdrppsWtcsSample","64.00","0","190","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("63");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_FileDw02");
            obj.set_fittocontents("width");
            obj.set_enable("true");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btnFireamHdrppsWtcsFile1","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("64");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panBtnFile01","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("65");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnFireamHdrppsWtcsSample\"/><PanelItem id=\"PanelItem02\" componentid=\"btnFireamHdrppsWtcsFile2\"/><PanelItem id=\"PanelItem00\" componentid=\"btnFireamHdrppsWtcsFile1\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panTitle01","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("66");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staFireamHdrppsWtcs\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Grid("grdFireamHdrppsWtcs","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("67");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:B110\" cssclass=\"expr:dataset.parent.gfnIsNull(B110) ? &quot;&quot; : &quot;CellFile&quot;\" cursor=\"pointer\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.gfnIsNull(B110) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.gfnIsNull(B110) ? &quot;none&quot; : &quot;button&quot;\" text=\"삭제\" cssclass=\"expr:dataset.parent.gfnIsNull(B110) ? &quot;&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_01_01","20","20","100%","30",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("68");
            obj.set_text("JPG,PNG,BMP,PDF만 첨부가능");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_01","192","1038","100.00%","80",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("69");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grdFireamHdrppsWtcs\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00_00_00_01_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panFile3","0","42","100.00%","151",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("70");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel01_00_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btnFireamHdrppsWtcsFile2","124","58","140","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("71");
            obj.set_text("동의서보관함");
            obj.set_cssclass("btn_WF_FileUp");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staFireamDprppsSmYn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("72");
            obj.set_text("화기책임자(부) 동일여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00","187","7","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("73");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staFireamDprppsSmYn\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Radio("rdoFireamDprppsSmYn","200.00","328","393","49.37",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("74");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div02_form_rdoFireamDprppsSmYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div02_form_rdoFireamDprppsSmYn_innerdataset", obj);
            divForm_form_Div02_form_rdoFireamDprppsSmYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">신청자정보와 동일</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">신청자정보와 동일하지 않음</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div02_form_rdoFireamDprppsSmYn_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("75");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Panel02_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoFireamDprppsSmYn\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel09","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("76");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staFireamDprppsNm","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("77");
            obj.set_text("화기책임자(부)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtFireamDprppsNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("78");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("79");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staFireamDprppsNm\"/><PanelItem id=\"PanelItem01\" componentid=\"edtFireamDprppsNm\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_00_00_00","10.00","98","305","0",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("80");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel10","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("81");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_01_00_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staFireamDprppsWtcs","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("82");
            obj.set_text("화기책임자(부) 개인정보수집 및 이용동의서");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btnFireamDprppsWtcsSample","64.00","0","190","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("83");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_FileDw02");
            obj.set_fittocontents("width");
            obj.set_enable("true");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btnFireamDprppsWtcsFile2","124","58","140","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("84");
            obj.set_text("동의서보관함");
            obj.set_cssclass("btn_WF_FileUp");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btnFireamDprppsWtcsFile1","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("85");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panBtnFile01_00","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("86");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnFireamDprppsWtcsSample\"/><PanelItem id=\"PanelItem02\" componentid=\"btnFireamDprppsWtcsFile2\"/><PanelItem id=\"PanelItem00\" componentid=\"btnFireamDprppsWtcsFile1\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panTitle01_00","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("87");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staFireamDprppsWtcs\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile01_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Grid("grdFireamDprppsWtcs","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("88");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:B110\" cssclass=\"expr:dataset.parent.gfnIsNull(B110) ? &quot;&quot; : &quot;CellFile&quot;\" cursor=\"pointer\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.gfnIsNull(B110) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.gfnIsNull(B110) ? &quot;none&quot; : &quot;button&quot;\" text=\"삭제\" cssclass=\"expr:dataset.parent.gfnIsNull(B110) ? &quot;&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_01_01_00","20","20","100%","30",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("89");
            obj.set_text("JPG,PNG,BMP,PDF만 첨부가능");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_01_00","192","1038","100.00%","80",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("90");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grdFireamDprppsWtcs\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00_00_00_01_01_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panFile4","0","42","100.00%","151",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("91");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel01_00_01_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staUsePrdBgngYmd","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("92");
            obj.set_text("사용기간시작일");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Calendar("calUsePrdBgngYmd","280","139","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("93");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel05_00","20.00","242","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("94");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staUsePrdBgngYmd\"/><PanelItem id=\"PanelItem02\" componentid=\"calUsePrdBgngYmd\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel11","0","242","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("95");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel05_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel04_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staUsePrdEndYmd","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("96");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_text("사용기간종료일");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Radio("rdoUsePrdEndYmd","200.00","328","100%","49.37",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("97");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div02_form_rdoUsePrdEndYmd_innerdataset = new nexacro.NormalDataset("divForm_form_Div02_form_rdoUsePrdEndYmd_innerdataset", obj);
            divForm_form_Div02_form_rdoUsePrdEndYmd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">EEAEleGb001</Col><Col id=\"datacolumn\">일반(~2월)</Col></Row><Row><Col id=\"codecolumn\">EEAEleGb002</Col><Col id=\"datacolumn\">재해약자(~3월)</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div02_form_rdoUsePrdEndYmd_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel04_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("98");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staUsePrdEndYmd\"/><PanelItem id=\"PanelItem03\" componentid=\"rdoUsePrdEndYmd\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staRtdVltg","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("99");
            obj.set_text("정격전압(V)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtRtdVltg","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("100");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00_01_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("101");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRtdVltg\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRtdVltg\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staSn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("102");
            obj.set_text("일련번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtSn","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("103");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_00_00_01_01","10.00","98","305","143",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("104");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSn\"/><PanelItem id=\"PanelItem01\" componentid=\"edtSn\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel18\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel16","0","60","100.00%","154",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("105");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00_01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_01_00_00_01_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staInstlPlc","1028","76","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("106");
            obj.set_text("설치장소");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtInstlPlc","1028","121","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("107");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel07_00_01","1028","76","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("108");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staInstlPlc\"/><PanelItem id=\"PanelItem01\" componentid=\"edtInstlPlc\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel12","1008","76","100.00%","95",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("109");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel07_00_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staSafeCertNo","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("110");
            obj.set_text("안전인증번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtSafeCertNo","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("111");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("112");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSafeCertNo\"/><PanelItem id=\"PanelItem01\" componentid=\"edtSafeCertNo\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staRtdCnsmElpwr","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("113");
            obj.set_text("정격소비전력(W)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtRtdCnsmElpwr","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("114");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_00_00_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("115");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRtdCnsmElpwr\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRtdCnsmElpwr\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel13","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("116");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_01_00_00_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staMnftrYmd","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("117");
            obj.set_text("제조년월일");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Calendar("calMnftrYmd","280","139","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("118");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel05_00_00","20.00","242","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("119");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staMnftrYmd\"/><PanelItem id=\"PanelItem02\" componentid=\"calMnftrYmd\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staMkr","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("120");
            obj.set_text("제조사");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtMkr","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("121");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00_01_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("122");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staMkr\"/><PanelItem id=\"PanelItem01\" componentid=\"edtMkr\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel14","0","242","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("123");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel05_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_00_00_01_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staRmrk","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("124");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtRmrk","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("125");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_00_00_01_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("126");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRmrk\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRmrk\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel15","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("127");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_01_00_00_01_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staInshtPhoto","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("128");
            obj.set_text("검사표사진");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btnInshtPhotoFile","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("129");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panBtnFile01_00_00","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("130");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnInshtPhotoFile\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panTitle01_00_00","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("131");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staInshtPhoto\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile01_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Grid("grdInshtPhoto","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("132");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:B110\" cssclass=\"expr:dataset.parent.gfnIsNull(B110) ? &quot;&quot; : &quot;CellFile&quot;\" cursor=\"pointer\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.gfnIsNull(B110) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.gfnIsNull(B110) ? &quot;none&quot; : &quot;button&quot;\" text=\"삭제\" cssclass=\"expr:dataset.parent.gfnIsNull(B110) ? &quot;&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_01_01_00_00","20","20","100%","30",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("133");
            obj.set_text("검사표 확인이 가능한 난로사진 입니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_01_00_00","192","1038","100.00%","80",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("134");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grdInshtPhoto\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00_00_00_01_01_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panFile5","0","42","100.00%","151",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("135");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel01_00_01_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staHetrWholPhoto","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("136");
            obj.set_text("난로전체사진");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btnHetrWholPhotoFile","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("137");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panBtnFile01_00_00_00","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("138");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnHetrWholPhotoFile\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panTitle01_00_00_00","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("139");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staHetrWholPhoto\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile01_00_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Grid("grdHetrWholPhoto","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("140");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:B110\" cssclass=\"expr:dataset.parent.gfnIsNull(B110) ? &quot;&quot; : &quot;CellFile&quot;\" cursor=\"pointer\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.gfnIsNull(B110) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.gfnIsNull(B110) ? &quot;none&quot; : &quot;button&quot;\" text=\"삭제\" cssclass=\"expr:dataset.parent.gfnIsNull(B110) ? &quot;&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_01_01_00_00_00","20","20","100%","30",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("141");
            obj.set_text("검사표 확인이 가능한 난로사진 입니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_01_00_00_00","192","1038","100.00%","80",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("142");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grdHetrWholPhoto\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00_00_00_01_01_00_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panFile6","0","42","100.00%","151",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("143");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01_00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel01_00_01_00_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_01_01_00_00_00_01","20","20","100%","47",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("144");
            obj.set_text("일련번호 = 제조번호 = 시리얼넘버\r\n  없으면 ‘없음’ 표기");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_02","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("21");
            obj.set_text("전기난로 용량검토서");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinRvw","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_02","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("23");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinRvw\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit03","1630","674","100%","66",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("24");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_02\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div03","0","30","100%","1555",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("25");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel00","20","0","100%","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel04_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel04_01_00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("0");
            obj.set_text("<b v=\'true\'>1. 적합여부</b>");
            obj.set_cssclass("sta_WF_Label");
            obj.set_usedecorate("true");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staSafeCertYn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_text("안전인증 여부");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Radio("rdoSafeCertYn","200.00","328","100%","49.37",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div03_form_rdoSafeCertYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div03_form_rdoSafeCertYn_innerdataset", obj);
            divForm_form_Div03_form_rdoSafeCertYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">O</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">X</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div03_form_rdoSafeCertYn_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel04_01_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSafeCertYn\"/><PanelItem id=\"PanelItem03\" componentid=\"rdoSafeCertYn\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staSafeCertCpatcoYn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_text("안전인증[구(전)]마크 협력사");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Radio("rdoSafeCertCpatcoYn","200.00","328","100%","49.37",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div03_form_rdoSafeCertCpatcoYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div03_form_rdoSafeCertCpatcoYn_innerdataset", obj);
            divForm_form_Div03_form_rdoSafeCertCpatcoYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">O</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">X</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div03_form_rdoSafeCertCpatcoYn_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel04_01_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSafeCertCpatcoYn\"/><PanelItem id=\"PanelItem03\" componentid=\"rdoSafeCertCpatcoYn\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","242","100.00%","143",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("7");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("9");
            obj.set_text("<b v=\'true\'>2. 접지형 제품여부</b>");
            obj.set_cssclass("sta_WF_Label");
            obj.set_usedecorate("true");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staGrndtpPrdctYn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_text("접지형 제품 여부");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Radio("rdoGrndtpPrdctYn","200.00","328","100%","49.37",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div03_form_rdoGrndtpPrdctYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div03_form_rdoGrndtpPrdctYn_innerdataset", obj);
            divForm_form_Div03_form_rdoGrndtpPrdctYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">O</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">X</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div03_form_rdoGrndtpPrdctYn_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel04_01_01_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staGrndtpPrdctYn\"/><PanelItem id=\"PanelItem03\" componentid=\"rdoGrndtpPrdctYn\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel04_01_00_00_00","10.00","98","305","0",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("13");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","20","0","100%","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("14");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel04_01_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel04_01_00_00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","242","100.00%","143",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("15");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("16");
            obj.set_text("<b v=\'true\'>3. 선로용량 검토</b>");
            obj.set_cssclass("sta_WF_Label");
            obj.set_usedecorate("true");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staTrckCpctRvwYn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_text("선로용량 검토");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Radio("rdoTrckCpctRvwYn","200.00","328","100%","49.37",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("18");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div03_form_rdoTrckCpctRvwYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div03_form_rdoTrckCpctRvwYn_innerdataset", obj);
            divForm_form_Div03_form_rdoTrckCpctRvwYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">O</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">X</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div03_form_rdoTrckCpctRvwYn_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel04_01_01_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("19");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTrckCpctRvwYn\"/><PanelItem id=\"PanelItem03\" componentid=\"rdoTrckCpctRvwYn\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel04_01_00_00_00_00","10.00","98","305","0",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("20");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","20","0","100%","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("21");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel04_01_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel04_01_00_00_00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel03","0","242","100.00%","143",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("22");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btnGrdAdd","356","156","47","34",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("23");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","413","156","45","34",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("24");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panGrdBtn","-70","156","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("25");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 20px 0px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnGrdAdd\"/><PanelItem id=\"PanelItem01\" componentid=\"btnGrdDel\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Div("divGrd","0","30","100%","400",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("26");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Grid("grdElctyTrckCpctRvw","0","0","100.00%","360",null,null,null,null,null,null,this.divForm.form.Div03.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsFlscLapAplyList");
            obj.set_autofittype("none");
            obj.getSetter("uFunction").set("checkbox");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"59\"/><Column size=\"340\"/><Column size=\"220\"/><Column size=\"320\"/><Column size=\"300\"/><Column size=\"420\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"사용중인기기명\"/><Cell col=\"2\" text=\"용량(kW)\"/><Cell col=\"3\" text=\"용도\"/><Cell col=\"4\" text=\"현장확인\"/><Cell col=\"5\" text=\"비고\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:prdctCd\" displaytype=\"normal\" textAlign=\"left\" edittype=\"text\" combodataset=\"dsFlscLapKnd\" combocodecol=\"cdId\" combodatacol=\"cdNm\"/><Cell col=\"2\" text=\"bind:qty\" displaytype=\"normal\" textAlign=\"center\" edittype=\"text\" maskeditformat=\"###,###,###,###,##0\"/><Cell col=\"3\" text=\"bind:prdctUntprc\" displaytype=\"normal\" textAlign=\"center\" edittype=\"text\" maskeditformat=\"###,###,###,###,##0\"/><Cell col=\"4\" text=\"bind:lbrco\" displaytype=\"normal\" textAlign=\"left\" edittype=\"text\" maskeditformat=\"###,###,###,###,##0\"/><Cell col=\"5\" text=\"bind:tclmAmt\" textAlign=\"left\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" edittype=\"text\" cssclass=\"CellEnd\" maskeditformat=\"###,###,###,###,##0\"/></Band></Format></Formats>");
            this.divForm.form.Div03.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("PanelGrd","0","60","100.00%","527",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("27");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("10");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"panGrdBtn\"/><PanelItem id=\"PanelItem00\" componentid=\"divGrd\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("28");
            obj.set_text("<b v=\'true\'>4. 전기선로 용량검토</b>(B등급인 경우)");
            obj.set_cssclass("sta_WF_Label");
            obj.set_usedecorate("true");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staRadmFbctn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_text("상표없이 임의제작 또는 구조변경 협력사");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Radio("edtRadmFbctn","200.00","328","100%","49.37",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("30");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div03_form_edtRadmFbctn_innerdataset = new nexacro.NormalDataset("divForm_form_Div03_form_edtRadmFbctn_innerdataset", obj);
            divForm_form_Div03_form_edtRadmFbctn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">O</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">X</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div03_form_edtRadmFbctn_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel04_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("31");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRadmFbctn\"/><PanelItem id=\"PanelItem03\" componentid=\"edtRadmFbctn\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel04","0","242","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("32");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel04_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00_01_00_00_01_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staRvwrMntnMdng","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("33");
            obj.set_text("검토자 유지보수업체");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edtRvwrMntnMdng","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("34");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_00_00_01_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("35");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRvwrMntnMdng\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRvwrMntnMdng\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel050401","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("36");
            obj.set_text("난로 사용 신청을 위한 개인정보 수집〮이용 동의서");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static00","36","382","93.07%","38",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("37");
            obj.set_text("입주자서비스포털은 <fc v=\'#1e4ebe\'>닌로 사용</fc>에 대한 <fc v=\'#1e4ebe\'>난로 사용  신청</fc> 서비스 제공을 위해 아래와 같이 개인정보를 수집·이용 하고자 합니다.\r\n내용을 자세히 읽으신 후 동의 여부를 결정하여 주시길 바랍니다. ");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            obj.set_wordWrap("char");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static01","88","596","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("38");
            obj.set_text("▶ 개인정보 수집·이용 내역");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_02","86","552","100%","160",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("39");
            obj.set_binddataset("Dataset01");
            obj.set_autofittype("col");
            obj.set_useselcolor("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"350\"/><Column size=\"350\"/><Column size=\"240\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"100\"/></Rows><Band id=\"head\"><Cell text=\"수집이용항목\"/><Cell col=\"1\" text=\"수집목적\"/><Cell col=\"2\" text=\"보유기간\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"화기책임자(정), 화기책임자 연락처(정),&#13;&#10;화기책임자(부)\" textAlign=\"center\" cssclass=\"CellTxtBlue\" wordWrap=\"char\"/><Cell col=\"1\" text=\"난로 사용 서비스 신청,&#13;&#10;민원처리, 사후관리\" textAlign=\"center\" wordWrap=\"char\"/><Cell col=\"2\" text=\"계약종료 후 3년,&#13;&#10; 회원탈퇴 시까지\" textAlign=\"center\" cssclass=\"CellTxtBlue, CellLink, CellEnd\" wordWrap=\"char\"/></Band></Format></Formats>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01_01","218","688","100%","200",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("40");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Static01\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_02\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static00_00_02","36","382","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("41");
            obj.set_text("※ 위의 개인정보 수집 〮이용에 대한 거부할 권리가 있습니다., 그러나 동의를 거부할 경우 난로 사용 신청을 할 수 없습니다");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_TxtRed");
            obj.set_wordWrap("char");
            obj.set_fittocontents("height");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Pnl05040101","20.00","374","100%","336",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("42");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_TxtAreaBox");
            obj.set_spacing("8px 15px 8px 15px");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Static00_00_02\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Pnl050401","10.00","98","970","392",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("43");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel050401\"/><PanelItem id=\"PanelItem05\" componentid=\"Pnl05040101\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel05","0","60","100.00%","403",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("44");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Pnl050401\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staPrvcEsntlClctAgreYn","876","150","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("45");
            obj.set_text("개인정보(필수) 수집이용 동의여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new CheckBox("chkPrvcEsntlClctAgreYn","107","1400","150","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("46");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_01_00_00_01_00_00","20","0","980","89",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("47");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPrvcEsntlClctAgreYn\"/><PanelItem id=\"PanelItem03\" componentid=\"chkPrvcEsntlClctAgreYn\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel06","0","1370","100.00%","100",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("48");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_00_00_01_00_00_01_00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_02_00","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("26");
            obj.set_text("처리내역");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinPrcsDsctn","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("27");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_02_00","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("28");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinPrcsDsctn\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit04","1630","674","100%","66",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("29");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_02_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div04","0","30","100%","1377",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("30");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staCnvyMttr","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("0");
            obj.set_text("전달사항");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new TextArea("txtCnvyMttr","43","1193","100%","100",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("내용입력");
            obj.set_readonly("false");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00","43.00","1193","100%","100",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("2");
            obj.set_background("#ffffff");
            obj.set_verticalgap("10");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"txtCnvyMttr\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_02_00","20.00","950","980","146",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCnvyMttr\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_01_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01","51","1527","100.00%","157",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("4");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_02_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Div("divGrd00","0","30","100%","187",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("5");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Grid("grdCnvyMttr","0","0","100.00%","100%",null,null,null,null,null,null,this.divForm.form.Div04.form.divGrd00.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsCnvyMttr");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"81\"/><Column size=\"140\"/><Column size=\"103\"/><Column size=\"900\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"일시\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"내용\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:frstRegDt\" displaytype=\"mask\" maskeditformat=\"####-##-## ##:##:##\" textAlign=\"center\" maskedittype=\"string\"/><Cell col=\"2\" textAlign=\"center\" text=\"bind:frstRegNm\"/><Cell col=\"3\" cssclass=\"CellEnd\" text=\"bind:cnvyMttrCn\"/></Band></Format></Formats>");
            this.divForm.form.Div04.form.divGrd00.addChild(obj.name, obj);

            obj = new Static("Static00_00","15","238","96.91%","40",null,null,null,null,null,null,this.divForm.form.Div04.form.divGrd00.form);
            obj.set_taborder("1");
            obj.set_text("※ My Page -> 검토의견함 메뉴에서 내용 등록/수정/삭제 가능합니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Txt");
            obj.set_wordWrap("char");
            obj.set_fittocontents("height");
            this.divForm.form.Div04.form.divGrd00.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","60","100.00%","208",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("6");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divGrd00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staFrdpmtCnvyMttr","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("7");
            obj.set_text("소방대전달사항");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new TextArea("txtFrdpmtCnvyMttr","43","1193","100%","100",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("8");
            obj.set_displaynulltext("내용입력");
            obj.set_readonly("false");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00_00","43.00","1193","100%","100",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("9");
            obj.set_background("#ffffff");
            obj.set_verticalgap("10");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"txtFrdpmtCnvyMttr\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_02_00_00","20.00","950","980","146",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staFrdpmtCnvyMttr\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_01_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel03","51","1527","100.00%","157",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("11");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_02_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staCpatcoPrcr","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("12");
            obj.set_text("협력사처리자");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edtCpatcoPrcr","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("13");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("14");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCpatcoPrcr\"/><PanelItem id=\"PanelItem01\" componentid=\"edtCpatcoPrcr\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staCpatcoPrcrFrdpmt","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("15");
            obj.set_text("협력사처리자(소방대)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edtCpatcoPrcrFrdpmt","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("16");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_00_00_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("17");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCpatcoPrcrFrdpmt\"/><PanelItem id=\"PanelItem01\" componentid=\"edtCpatcoPrcrFrdpmt\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel04","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div04.form);
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
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_01_00_00_01\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staGrndsVrfc","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("19");
            obj.set_text("현장점검내역");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edtGrndsVrfc","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("20");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00_01_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("21");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staGrndsVrfc\"/><PanelItem id=\"PanelItem01\" componentid=\"edtGrndsVrfc\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel05","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("22");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00_01_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staElctblLevyYn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_text("전기료 부과여부");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Radio("rdoElctblLevyYn","200.00","328","100%","49.37",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("24");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div04_form_rdoElctblLevyYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div04_form_rdoElctblLevyYn_innerdataset", obj);
            divForm_form_Div04_form_rdoElctblLevyYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div04_form_rdoElctblLevyYn_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel04_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("25");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staElctblLevyYn\"/><PanelItem id=\"PanelItem03\" componentid=\"rdoElctblLevyYn\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel06","0","242","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("26");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel04_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel04_01_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staAprvYn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_text("승인여부");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Radio("rdoAprvYn","200.00","328","100%","49.37",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("28");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div04_form_rdoAprvYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div04_form_rdoAprvYn_innerdataset", obj);
            divForm_form_Div04_form_rdoAprvYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div04_form_rdoAprvYn_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel04_01_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("29");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staAprvYn\"/><PanelItem id=\"PanelItem03\" componentid=\"rdoAprvYn\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staCpctRvwPassYn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_text("용량검토 합격여부");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Radio("rdoCpctRvwPassYn","200.00","328","100%","49.37",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("31");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div04_form_rdoCpctRvwPassYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div04_form_rdoCpctRvwPassYn_innerdataset", obj);
            divForm_form_Div04_form_rdoCpctRvwPassYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">합격</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">불합격</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div04_form_rdoCpctRvwPassYn_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel04_01_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("32");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCpctRvwPassYn\"/><PanelItem id=\"PanelItem03\" componentid=\"rdoCpctRvwPassYn\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel04_01_00_00","10.00","98","305","0",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("33");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel07","0","242","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("34");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel04_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel04_01_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staHtwrYn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_text("열선유무");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Radio("rdoHtwrYn","200.00","328","100%","49.37",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("36");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div04_form_rdoHtwrYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div04_form_rdoHtwrYn_innerdataset", obj);
            divForm_form_Div04_form_rdoHtwrYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div04_form_rdoHtwrYn_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel04_01_02","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("37");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staHtwrYn\"/><PanelItem id=\"PanelItem03\" componentid=\"rdoHtwrYn\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel04_01_00_01","10.00","98","305","0",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("38");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel08","0","242","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("39");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel04_01_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel04_01_00_01\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staPayPicPrvcClctUtztnWtcs01_00","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("40");
            obj.set_text("흠~뭐지?승인내역출력..?");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Button("btnPayPicPrvcClctUtztnWtcsSample00","64.00","0","190","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("41");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_FileDw02");
            obj.set_fittocontents("width");
            obj.set_enable("true");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Button("btnPayPicPrvcClctUtztnWtcsFile01_01","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("42");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panBtnFile01_00","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("43");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnPayPicPrvcClctUtztnWtcsSample00\"/><PanelItem id=\"PanelItem00\" componentid=\"btnPayPicPrvcClctUtztnWtcsFile01_01\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panTitle01_00","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("44");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPayPicPrvcClctUtztnWtcs01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile01_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Grid("grdPayPicPrvcClctUtztnWtcs01_00","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("45");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:B110\" cssclass=\"expr:dataset.parent.gfnIsNull(B110) ? &quot;&quot; : &quot;CellFile&quot;\" cursor=\"pointer\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.gfnIsNull(B110) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.gfnIsNull(B110) ? &quot;none&quot; : &quot;button&quot;\" text=\"삭제\" cssclass=\"expr:dataset.parent.gfnIsNull(B110) ? &quot;&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_01_01_00","20","20","100%","30",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("46");
            obj.set_text("JPG,PNG,BMP,PDF만 첨부가능");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_01_00","192","1038","100.00%","80",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("47");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grdPayPicPrvcClctUtztnWtcs01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00_00_00_01_01_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panFile1","0","42","100.00%","151",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("48");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel01_00_01_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staDocOtpt","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("49");
            obj.set_text("문서출력");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Button("btnDocOtpt","64.00","0","190","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("50");
            obj.set_text("난로사용 승인서 출력");
            obj.set_cssclass("btn_WF_FileDw02");
            obj.set_fittocontents("width");
            obj.set_enable("true");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panBtnFile01_00_00","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("51");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnDocOtpt\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panTitle01_00_00","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("52");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staDocOtpt\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile01_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panFile2","0","42","100.00%","67",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("53");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staMtlyAcinspDsctn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("54");
            obj.set_text("월별실사내역");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new TextArea("txtMtlyAcinspDsctn","43","1193","100%","100",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("55");
            obj.set_displaynulltext("내용입력");
            obj.set_readonly("false");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00_00_00","43.00","1193","100%","100",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("56");
            obj.set_background("#ffffff");
            obj.set_verticalgap("10");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"txtMtlyAcinspDsctn\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_02_00_00_00","20.00","950","980","146",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("57");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staMtlyAcinspDsctn\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_01_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel09","51","1527","100.00%","157",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("58");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_02_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Div("divQuick",null,"62","296","246","62",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickMenu");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","17","20","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("0");
            obj.set_text("반려확인/난로해지");
            obj.set_cssclass("btn_WF_Quick");
            obj.set_visible("false");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn01","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("1");
            obj.set_text("신청자정보");
            obj.set_cssclass("btn_WF_Quick_S");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn02","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("2");
            obj.set_text("신청정보");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn03","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("3");
            obj.set_text("전기난로 용량검토서");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn04","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("4");
            obj.set_text("처리내역");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"divQuick:0","296","181","62",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickBtnBg");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new RaonkUpload("RaonkUpload","0","divForm:10","1020","200",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_DevelopLangage("JAVA");
            obj.set_ExtensionAllowOrLimit("1");
            obj.set_HandlerUrl("http://10.180.1.229:8080/common/uploadDownload.do");
            obj.set_RunTimes("html5");
            obj.set_ButtonBarView("0");
            obj.set_AllowDuplicationFile("1");
            obj.set_text("");
            obj.set_DisableDeleteConfirm("1");
            obj.set_positionstep("0");
            obj.set_visible("false");
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

            //-- Default Layout : this.divForm.form.Div00.form
            obj = new Layout("default","",0,0,this.divForm.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sta00_00.set_taborder("0");
                p.sta00_00.set_text("◎ 문의처\r\n  ○여객터미널 : 741-7545 동우공영(주)전기팀\r\n  ○탑승동      : 741-7545 동우공영(주)전기팀\r\n ○교통센터    : 714-7410 (주)우리피앤에스 전기팀\r\n ○자유무역지역\r\n     사업/행정 지원센터 : 741-1303 (주)원봉기업 전기담당\r\n ○화물터미널 C동 :  741-1303 (주)원봉기업 전기담당\r\n ○북측항공화물창고 :  741-1303 (주)원봉기업 전기담당\r\n ○부대건물\r\n    - 일반지역 : 741-6123 한전산업개발(주)\r\n    - 보호구역 : 741-7016 한전산업개발(주)\r\n    - 보호구역(이동지역) : 741-7026 (주) 서광종합개발");
                p.sta00_00.set_cssclass("sta_WF_Des004");
                p.sta00_00.set_fittocontents("height");
                p.sta00_00.move("-235","870","100%","217",null,null);

                p.Panel00_10.set_taborder("1");
                p.Panel00_10.set_type("vertical");
                p.Panel00_10.set_fittocontents("height");
                p.Panel00_10.set_spacing("10px 0px");
                p.Panel00_10.set_minwidth("");
                p.Panel00_10.move("10.00","98","100%","237",null,null);

                p.Panel01.set_taborder("2");
                p.Panel01.set_horizontalgap("20");
                p.Panel01.set_flexcrossaxiswrapalign("start");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_spacing("0px 20px 10px 20px");
                p.Panel01.set_cssclass("pal_WF_DtlBg");
                p.Panel01.set_type("horizontal");
                p.Panel01.move("0","60","100.00%","248",null,null);

                p.staHetrCncltnYmd.set_taborder("3");
                p.staHetrCncltnYmd.set_text("난로해지일");
                p.staHetrCncltnYmd.set_cssclass("sta_WF_Label_E");
                p.staHetrCncltnYmd.move("10","98","100%","46",null,null);

                p.calHetrCncltnYmd.set_taborder("4");
                p.calHetrCncltnYmd.move("280","139","100%","40",null,null);

                p.Panel05_00.set_taborder("5");
                p.Panel05_00.set_type("vertical");
                p.Panel05_00.set_flexgrow("1");
                p.Panel05_00.move("20.00","242","305","86",null,null);

                p.Panel05_01.set_taborder("6");
                p.Panel05_01.set_type("vertical");
                p.Panel05_01.set_flexgrow("1");
                p.Panel05_01.move("20.00","242","305","0",null,null);

                p.Panel02.set_taborder("7");
                p.Panel02.set_horizontalgap("20");
                p.Panel02.set_flexcrossaxiswrapalign("start");
                p.Panel02.set_flexwrap("wrap");
                p.Panel02.set_fittocontents("height");
                p.Panel02.set_verticalgap("0");
                p.Panel02.set_spacing("0px 20px 10px 20px");
                p.Panel02.set_cssclass("pal_WF_DtlBg");
                p.Panel02.set_visible("false");
                p.Panel02.move("0","242","100.00%","96",null,null);

                p.staHetrCncltnRsn.set_taborder("8");
                p.staHetrCncltnRsn.set_text("난로해지사유");
                p.staHetrCncltnRsn.set_cssclass("sta_WF_Label_E");
                p.staHetrCncltnRsn.move("10","98","100%","46",null,null);

                p.txtHetrCncltnRsn.set_taborder("9");
                p.txtHetrCncltnRsn.set_displaynulltext("내용입력");
                p.txtHetrCncltnRsn.set_readonly("false");
                p.txtHetrCncltnRsn.move("43","1193","100%","100",null,null);

                p.Panel00_01_00.set_taborder("10");
                p.Panel00_01_00.set_background("#ffffff");
                p.Panel00_01_00.set_verticalgap("10");
                p.Panel00_01_00.set_type("vertical");
                p.Panel00_01_00.set_fittocontents("height");
                p.Panel00_01_00.move("43.00","1193","100%","100",null,null);

                p.Panel00_02_00.set_taborder("11");
                p.Panel00_02_00.set_type("vertical");
                p.Panel00_02_00.set_flexgrow("1");
                p.Panel00_02_00.set_fittocontents("height");
                p.Panel00_02_00.set_minwidth("");
                p.Panel00_02_00.move("20.00","950","980","146",null,null);

                p.Panel03.set_taborder("12");
                p.Panel03.set_horizontalgap("20");
                p.Panel03.set_flexcrossaxiswrapalign("start");
                p.Panel03.set_flexwrap("wrap");
                p.Panel03.set_fittocontents("height");
                p.Panel03.set_verticalgap("0");
                p.Panel03.set_spacing("0px 20px 10px 20px");
                p.Panel03.set_cssclass("pal_WF_DtlBg");
                p.Panel03.set_type("horizontal");
                p.Panel03.set_visible("true");
                p.Panel03.move("51","1527","100.00%","157",null,null);

                p.staCncltnPrcsCn.set_taborder("13");
                p.staCncltnPrcsCn.set_text("해지처리내용");
                p.staCncltnPrcsCn.set_cssclass("sta_WF_Label_E");
                p.staCncltnPrcsCn.move("10","98","100%","46",null,null);

                p.txtCncltnPrcsCn.set_taborder("14");
                p.txtCncltnPrcsCn.set_displaynulltext("내용입력");
                p.txtCncltnPrcsCn.set_readonly("false");
                p.txtCncltnPrcsCn.move("43","1193","100%","100",null,null);

                p.Panel00_01_00_00.set_taborder("15");
                p.Panel00_01_00_00.set_background("#ffffff");
                p.Panel00_01_00_00.set_verticalgap("10");
                p.Panel00_01_00_00.set_type("vertical");
                p.Panel00_01_00_00.set_fittocontents("height");
                p.Panel00_01_00_00.move("43.00","1193","100%","100",null,null);

                p.Panel00_02_00_00.set_taborder("16");
                p.Panel00_02_00_00.set_type("vertical");
                p.Panel00_02_00_00.set_flexgrow("1");
                p.Panel00_02_00_00.set_fittocontents("height");
                p.Panel00_02_00_00.set_minwidth("");
                p.Panel00_02_00_00.move("20.00","950","980","146",null,null);

                p.Panel04.set_taborder("17");
                p.Panel04.set_horizontalgap("20");
                p.Panel04.set_flexcrossaxiswrapalign("start");
                p.Panel04.set_flexwrap("wrap");
                p.Panel04.set_fittocontents("height");
                p.Panel04.set_verticalgap("0");
                p.Panel04.set_spacing("0px 20px 10px 20px");
                p.Panel04.set_cssclass("pal_WF_DtlBg");
                p.Panel04.set_type("horizontal");
                p.Panel04.set_visible("true");
                p.Panel04.move("51","1527","100.00%","157",null,null);
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

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div00.form.addLayout(obj.name, obj);
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
            //-- Default Layout : this.divForm.form.Div01.form.divEdtPop002.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01.form.divEdtPop002.form,
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
                p.btnClmAddr.set_visible("false");
                p.btnClmAddr.move("edtClmZip:-40","0","40","40",null,null);
            	}
            );
            this.divForm.form.Div01.form.divEdtPop002.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div01.form.divEdtPop002.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div01.form.divEdtPop002.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.Div01.form.divEdtPop002.form.addLayout(obj.name, obj);
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

                p.Panel04.set_taborder("28");
                p.Panel04.set_horizontalgap("20");
                p.Panel04.set_flexcrossaxiswrapalign("start");
                p.Panel04.set_flexwrap("wrap");
                p.Panel04.set_fittocontents("height");
                p.Panel04.set_verticalgap("0");
                p.Panel04.set_spacing("0px 20px 10px 20px");
                p.Panel04.set_cssclass("pal_WF_DtlBg");
                p.Panel04.set_type("horizontal");
                p.Panel04.move("0","60","100.00%","96",null,null);

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

                p.Panel05.set_taborder("32");
                p.Panel05.set_horizontalgap("20");
                p.Panel05.set_flexcrossaxiswrapalign("start");
                p.Panel05.set_flexwrap("wrap");
                p.Panel05.set_fittocontents("height");
                p.Panel05.set_verticalgap("0");
                p.Panel05.set_spacing("0px 20px 10px 20px");
                p.Panel05.set_cssclass("pal_WF_DtlBg");
                p.Panel05.move("0","60","100.00%","96",null,null);

                p.staAplcntNmHwrtInpt.set_taborder("33");
                p.staAplcntNmHwrtInpt.set_text("신청자(수기입력)");
                p.staAplcntNmHwrtInpt.set_cssclass("sta_WF_Label");
                p.staAplcntNmHwrtInpt.move("10","98","100%","46",null,null);

                p.edtAplcntNmHwrtInpt.set_taborder("34");
                p.edtAplcntNmHwrtInpt.set_readonly("false");
                p.edtAplcntNmHwrtInpt.move("42","47","100%","40",null,null);

                p.Panel00_00_02.set_taborder("35");
                p.Panel00_00_02.set_type("vertical");
                p.Panel00_00_02.set_flexgrow("1");
                p.Panel00_00_02.set_visible("false");
                p.Panel00_00_02.set_minwidth("");
                p.Panel00_00_02.move("10.00","98","305","86",null,null);

                p.staClmCustNo.set_taborder("36");
                p.staClmCustNo.set_text("청구고객번호");
                p.staClmCustNo.set_cssclass("sta_WF_Label_E");
                p.staClmCustNo.move("10","98","100%","46",null,null);

                p.edtClmCustNo.set_taborder("37");
                p.edtClmCustNo.move("10.00","158","100%","40",null,null);

                p.Panel00_00_03.set_taborder("38");
                p.Panel00_00_03.set_type("vertical");
                p.Panel00_00_03.set_flexgrow("1");
                p.Panel00_00_03.set_minwidth("");
                p.Panel00_00_03.move("10.00","98","305","86",null,null);

                p.Panel00_00_01_02.set_taborder("39");
                p.Panel00_00_01_02.set_type("vertical");
                p.Panel00_00_01_02.set_flexgrow("1");
                p.Panel00_00_01_02.set_minwidth("");
                p.Panel00_00_01_02.move("10.00","98","305","0",null,null);

                p.Panel06.set_taborder("40");
                p.Panel06.set_horizontalgap("20");
                p.Panel06.set_flexcrossaxiswrapalign("start");
                p.Panel06.set_flexwrap("wrap");
                p.Panel06.set_fittocontents("height");
                p.Panel06.set_verticalgap("0");
                p.Panel06.set_spacing("0px 20px 10px 20px");
                p.Panel06.set_cssclass("pal_WF_DtlBg");
                p.Panel06.set_type("horizontal");
                p.Panel06.move("0","60","100.00%","96",null,null);

                p.staClmAddr.set_taborder("41");
                p.staClmAddr.set_text("청구지주소/우편번호");
                p.staClmAddr.set_cssclass("sta_WF_Label_E");
                p.staClmAddr.move("0","0","100%","46",null,null);

                p.divEdtPop002.set_taborder("42");
                p.divEdtPop002.set_text("Div00");
                p.divEdtPop002.set_formscrollbartype("none none");
                p.divEdtPop002.set_formscrolltype("none");
                p.divEdtPop002.set_flexgrow("1");
                p.divEdtPop002.move("780.00","635","150","40",null,null);

                p.edtClmAddr2.set_taborder("43");
                p.edtClmAddr2.set_readonly("true");
                p.edtClmAddr2.set_flexgrow("2");
                p.edtClmAddr2.set_displaynulltext("주소");
                p.edtClmAddr2.move("360","637","305","40",null,null);

                p.panAddress.set_taborder("44");
                p.panAddress.set_horizontalgap("10");
                p.panAddress.move("200","641","100%","45",null,null);

                p.edtClmAddrDtl2.set_taborder("45");
                p.edtClmAddrDtl2.set_displaynulltext("상세주소");
                p.edtClmAddrDtl2.set_readonly("true");
                p.edtClmAddrDtl2.move("0","46","100%","40",null,null);

                p.Panel00_00_01_00.set_taborder("46");
                p.Panel00_00_01_00.set_type("vertical");
                p.Panel00_00_01_00.set_flexgrow("1");
                p.Panel00_00_01_00.set_fittocontents("height");
                p.Panel00_00_01_00.set_verticalgap("10");
                p.Panel00_00_01_00.set_minwidth("");
                p.Panel00_00_01_00.move("20.00","0","100%","151",null,null);

                p.Panel07.set_taborder("47");
                p.Panel07.set_horizontalgap("20");
                p.Panel07.set_flexcrossaxiswrapalign("start");
                p.Panel07.set_flexwrap("wrap");
                p.Panel07.set_fittocontents("height");
                p.Panel07.set_verticalgap("0");
                p.Panel07.set_spacing("0px 20px 10px 20px");
                p.Panel07.set_cssclass("pal_WF_DtlBg");
                p.Panel07.set_type("horizontal");
                p.Panel07.move("0","60","100.00%","162",null,null);

                p.staRnb.set_taborder("48");
                p.staRnb.set_text("위치정보(룸번호)");
                p.staRnb.set_cssclass("sta_WF_Label");
                p.staRnb.move("1028","-20","100%","46",null,null);

                p.edtRnb.set_taborder("49");
                p.edtRnb.set_readonly("true");
                p.edtRnb.move("1028","26","100%","40",null,null);

                p.Panel01_00_01.set_taborder("50");
                p.Panel01_00_01.set_type("vertical");
                p.Panel01_00_01.set_flexgrow("1");
                p.Panel01_00_01.move("1028","-20","305","86",null,null);

                p.Panel08.set_taborder("51");
                p.Panel08.set_horizontalgap("20");
                p.Panel08.set_flexcrossaxiswrapalign("start");
                p.Panel08.set_flexwrap("wrap");
                p.Panel08.set_fittocontents("height");
                p.Panel08.set_verticalgap("0");
                p.Panel08.set_spacing("0px 20px 10px 20px");
                p.Panel08.set_cssclass("pal_WF_DtlBg");
                p.Panel08.set_visible("true");
                p.Panel08.move("1008","-20","100.00%","95",null,null);

                p.staPstnHwrtInpt.set_taborder("52");
                p.staPstnHwrtInpt.set_text("위치정보(수기입력)");
                p.staPstnHwrtInpt.set_cssclass("sta_WF_Label");
                p.staPstnHwrtInpt.move("1028","76","100%","46",null,null);

                p.edtPstnHwrtInpt.set_taborder("53");
                p.edtPstnHwrtInpt.set_readonly("false");
                p.edtPstnHwrtInpt.move("1028","121","100%","40",null,null);

                p.Panel07_00.set_taborder("54");
                p.Panel07_00.set_type("vertical");
                p.Panel07_00.set_flexgrow("1");
                p.Panel07_00.move("1028","76","305","86",null,null);

                p.Panel09.set_taborder("55");
                p.Panel09.set_horizontalgap("20");
                p.Panel09.set_flexcrossaxiswrapalign("start");
                p.Panel09.set_flexwrap("wrap");
                p.Panel09.set_fittocontents("height");
                p.Panel09.set_verticalgap("0");
                p.Panel09.set_spacing("0px 20px 10px 20px");
                p.Panel09.set_cssclass("pal_WF_DtlBg");
                p.Panel09.set_visible("true");
                p.Panel09.move("1008","76","100.00%","95",null,null);

                p.staPrvcClctAgre.set_taborder("56");
                p.staPrvcClctAgre.set_text("난로신청안내문");
                p.staPrvcClctAgre.set_cssclass("sta_WF_Label");
                p.staPrvcClctAgre.move("10","98","100%","46",null,null);

                p.sta00.set_taborder("57");
                p.sta00.set_text("◎ 난로신청 안내\r\n  1. 신청대상:전기스토브, 전기히터, 석유난로\r\n      ※ 전기제품은 난로신청 불필요\r\n       (예:온풍기(고정식 캐비넷형), 라지에터, 전기방식, 커피포트, 전자렌지 등) \r\n 2. 난로사용 금지장소 및 승인된 난로 이동금지\r\n     - 사용금지 장소 : 위험물이 근접한 장소, 다량의 습기가 발생하는 장소 등\r\n 3. 승인기간 : 11.1 ~ 3.31(기온 급강하 등 필요한 경우 승인기간 조정 가능)\r\n 4. 사용기간 : 11.1 ~ 2.28\r\n      ※ 재해약자가 사용하는 장소는 11.1 ~ 3.31일까지 사용 가능\r\n 5. 난로 1개당 신청서 1건으로 작성 바랍니다.\r\n 6. 사진첨부관련\r\n     - 위치도 첨부, 제품사진첨부 시 gif,jpeg,bmp,png 등 그림파일만 첨부가 가능하고 크기는 600*800(예) 이하로 첨부하여 주시길 바랍니다.(hwp,pdf 등 사용불가)\r\n 7. 난로사용승인 신청 후 현장확인이 가능하도록 위치에 난로를 비치하여 주시길 바랍니다.\r\n \r\n소방대 안전행정반 / 032-741-2142");
                p.sta00.set_fittocontents("height");
                p.sta00.set_cssclass("sta_WF_Des004");
                p.sta00.move("20","20","100%","285",null,null);

                p.Panel00_00_04.set_taborder("58");
                p.Panel00_00_04.set_type("vertical");
                p.Panel00_00_04.set_fittocontents("height");
                p.Panel00_00_04.set_minwidth("");
                p.Panel00_00_04.move("10.00","98","100%","285",null,null);

                p.Panel00_00_03_00_00_00.set_taborder("59");
                p.Panel00_00_03_00_00_00.set_type("vertical");
                p.Panel00_00_03_00_00_00.set_flexgrow("1");
                p.Panel00_00_03_00_00_00.set_verticalgap("10");
                p.Panel00_00_03_00_00_00.set_fittocontents("height");
                p.Panel00_00_03_00_00_00.set_minwidth("");
                p.Panel00_00_03_00_00_00.move("10.00","98","100%","341",null,null);

                p.Panel10.set_taborder("60");
                p.Panel10.set_horizontalgap("20");
                p.Panel10.set_flexcrossaxiswrapalign("start");
                p.Panel10.set_flexwrap("wrap");
                p.Panel10.set_fittocontents("height");
                p.Panel10.set_verticalgap("0");
                p.Panel10.set_spacing("0px 20px 10px 20px");
                p.Panel10.set_cssclass("pal_WF_DtlBg");
                p.Panel10.set_type("horizontal");
                p.Panel10.set_visible("true");
                p.Panel10.move("0","60","100.00%","352",null,null);
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
                p.staPstnSe.set_taborder("0");
                p.staPstnSe.set_text("위치구분");
                p.staPstnSe.set_cssclass("sta_WF_Label_E");
                p.staPstnSe.move("1028","-116","100%","46",null,null);

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

                p.Panel00_01_00.set_taborder("3");
                p.Panel00_01_00.set_horizontalgap("20");
                p.Panel00_01_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_01_00.set_flexwrap("wrap");
                p.Panel00_01_00.set_fittocontents("height");
                p.Panel00_01_00.set_verticalgap("10");
                p.Panel00_01_00.move("1028","-70","100%","40",null,null);

                p.Panel01_01_01.set_taborder("4");
                p.Panel01_01_01.set_type("vertical");
                p.Panel01_01_01.set_flexgrow("1");
                p.Panel01_01_01.set_fittocontents("height");
                p.Panel01_01_01.move("1028","-116","100%","86",null,null);

                p.Panel08.set_taborder("145");
                p.Panel08.set_spacing("10px 0px 0px 0px");
                p.Panel08.move("0","86","100%","40",null,null);

                p.Panel17.set_taborder("146");
                p.Panel17.set_spacing("10px 0px 0px 0px");
                p.Panel17.move("0","86","100%","40",null,null);

                p.Panel18.set_taborder("147");
                p.Panel18.set_spacing("10px 0px 0px 0px");
                p.Panel18.move("0","86","100%","57",null,null);

                p.Panel01.set_taborder("5");
                p.Panel01.set_horizontalgap("20");
                p.Panel01.set_flexcrossaxiswrapalign("start");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_verticalgap("0");
                p.Panel01.set_spacing("0px 20px 10px 20px");
                p.Panel01.set_cssclass("pal_WF_DtlBg");
                p.Panel01.set_flexshrink("1");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_visible("true");
                p.Panel01.move("1008","-116","100.00%","142",null,null);

                p.sta00_00_01_00_00_00_01_00_00_00.set_taborder("6");
                p.sta00_00_01_00_00_00_01_00_00_00.set_text("위치구분 시 동 신청서 하단의 위치별(건물)문의처를 참고해 주시고 해당연락처로 상담도 가능합니다.");
                p.sta00_00_01_00_00_00_01_00_00_00.set_cssclass("sta_WF_Des, sta_WF_TxtBlue");
                p.sta00_00_01_00_00_00_01_00_00_00.set_usedecorate("true");
                p.sta00_00_01_00_00_00_01_00_00_00.set_fittocontents("height");
                p.sta00_00_01_00_00_00_01_00_00_00.move("0","97","100%","30",null,null);

                p.Panel00.set_taborder("7");
                p.Panel00.set_spacing("10px 0px 0px 0px");
                p.Panel00.move("20","86","100%","45",null,null);

                p.staPstnExpln.set_taborder("8");
                p.staPstnExpln.set_text("위치설명");
                p.staPstnExpln.set_cssclass("sta_WF_Label");
                p.staPstnExpln.move("1028","76","100%","46",null,null);

                p.edtPstnExpln.set_taborder("9");
                p.edtPstnExpln.set_readonly("false");
                p.edtPstnExpln.move("1028","121","100%","40",null,null);

                p.Panel07_00.set_taborder("10");
                p.Panel07_00.set_type("vertical");
                p.Panel07_00.set_flexgrow("1");
                p.Panel07_00.move("1028","76","980","115.97",null,null);

                p.Panel02.set_taborder("11");
                p.Panel02.set_horizontalgap("20");
                p.Panel02.set_flexcrossaxiswrapalign("start");
                p.Panel02.set_flexwrap("wrap");
                p.Panel02.set_fittocontents("height");
                p.Panel02.set_verticalgap("0");
                p.Panel02.set_spacing("0px 20px 10px 20px");
                p.Panel02.set_cssclass("pal_WF_DtlBg");
                p.Panel02.set_visible("true");
                p.Panel02.move("1008","76","100.00%","126.97",null,null);

                p.sta00_00_01_00_00_00_01_00_00_00_00.set_taborder("12");
                p.sta00_00_01_00_00_00_01_00_00_00_00.set_text("여객터미널 1층 12번 출입문 앞 안내데스크, 3번 활주로 끝단 등");
                p.sta00_00_01_00_00_00_01_00_00_00_00.set_cssclass("sta_WF_Des");
                p.sta00_00_01_00_00_00_01_00_00_00_00.set_usedecorate("true");
                p.sta00_00_01_00_00_00_01_00_00_00_00.set_fittocontents("height");
                p.sta00_00_01_00_00_00_01_00_00_00_00.move("0","97","100%","30",null,null);

                p.staLctnmp.set_taborder("13");
                p.staLctnmp.set_text("위치도 첨부");
                p.staLctnmp.set_cssclass("sta_WF_Label_E");
                p.staLctnmp.set_flexgrow("1");
                p.staLctnmp.move("0","44","305","46",null,null);

                p.btnLctnmpFile.set_taborder("14");
                p.btnLctnmpFile.set_text("파일선택");
                p.btnLctnmpFile.set_cssclass("btn_WF_FileUp");
                p.btnLctnmpFile.move("124","58","116","40",null,null);

                p.panBtnFile.set_taborder("15");
                p.panBtnFile.set_flexgrow("1");
                p.panBtnFile.set_flexcrossaxisalign("start");
                p.panBtnFile.set_flexmainaxisalign("end");
                p.panBtnFile.set_horizontalgap("10");
                p.panBtnFile.move("433","58","305","46",null,null);

                p.panTitle.set_taborder("16");
                p.panTitle.set_cssclass("pan_WF_FileTitle");
                p.panTitle.set_flexwrap("wrap");
                p.panTitle.set_fittocontents("height");
                p.panTitle.move("0","124","100%","46",null,null);

                p.grdLctnmp.set_taborder("17");
                p.grdLctnmp.set_binddataset("dsFile");
                p.grdLctnmp.set_autofittype("col");
                p.grdLctnmp.set_cssclass("grd_WF_FileAdd");
                p.grdLctnmp.set_scrollbartype("none none");
                p.grdLctnmp.move("20.00","114","100%","40",null,null);

                p.sta00_00_00_01.set_taborder("18");
                p.sta00_00_00_01.set_text("설치장소 확인용입니다.\r\n<b v=\'true\'>* 그림파일만 첨부가 가능하며 크기는 600*800 이하로 첨부하여 주시기 바랍니다.(hwp,pdf 등 사용불가)</b>");
                p.sta00_00_00_01.set_cssclass("sta_WF_Des");
                p.sta00_00_00_01.set_fittocontents("height");
                p.sta00_00_00_01.set_usedecorate("true");
                p.sta00_00_00_01.move("20","20","100%","47",null,null);

                p.Panel01_00.set_taborder("19");
                p.Panel01_00.set_type("vertical");
                p.Panel01_00.set_verticalgap("10");
                p.Panel01_00.move("192","1038","100%","97",null,null);

                p.panFile1.set_taborder("20");
                p.panFile1.set_fittocontents("height");
                p.panFile1.set_spacing("10px 20px 10px 20px");
                p.panFile1.set_flexwrap("wrap");
                p.panFile1.set_cssclass("pal_WF_DtlBg");
                p.panFile1.set_verticalgap("4");
                p.panFile1.set_visible("true");
                p.panFile1.move("0","42","100.00%","168",null,null);

                p.staPrdctNm.set_taborder("21");
                p.staPrdctNm.set_text("제품명");
                p.staPrdctNm.set_cssclass("sta_WF_Label");
                p.staPrdctNm.move("1028","76","100%","46",null,null);

                p.edtPrdctNm.set_taborder("22");
                p.edtPrdctNm.set_readonly("false");
                p.edtPrdctNm.move("1028","121","100%","40",null,null);

                p.sta00_00_01_00_00_00_01_00_00_00_00_00.set_taborder("23");
                p.sta00_00_01_00_00_00_01_00_00_00_00_00.set_text("예) 전기스토브, 전기히터, 기름난로, 원적외선난방기, 온풍기(이동형)");
                p.sta00_00_01_00_00_00_01_00_00_00_00_00.set_cssclass("sta_WF_Des");
                p.sta00_00_01_00_00_00_01_00_00_00_00_00.set_usedecorate("true");
                p.sta00_00_01_00_00_00_01_00_00_00_00_00.set_fittocontents("height");
                p.sta00_00_01_00_00_00_01_00_00_00_00_00.move("0","97","100%","30",null,null);

                p.Panel07_00_00.set_taborder("24");
                p.Panel07_00_00.set_type("vertical");
                p.Panel07_00_00.set_flexgrow("1");
                p.Panel07_00_00.move("1028","76","980","115.97",null,null);

                p.Panel03.set_taborder("25");
                p.Panel03.set_horizontalgap("20");
                p.Panel03.set_flexcrossaxiswrapalign("start");
                p.Panel03.set_flexwrap("wrap");
                p.Panel03.set_fittocontents("height");
                p.Panel03.set_verticalgap("0");
                p.Panel03.set_spacing("0px 20px 10px 20px");
                p.Panel03.set_cssclass("pal_WF_DtlBg");
                p.Panel03.set_visible("true");
                p.Panel03.move("1008","76","100.00%","126.97",null,null);

                p.staPrdctPhoto.set_taborder("26");
                p.staPrdctPhoto.set_text("제품사진 첨부");
                p.staPrdctPhoto.set_cssclass("sta_WF_Label_E");
                p.staPrdctPhoto.set_flexgrow("1");
                p.staPrdctPhoto.move("0","44","305","46",null,null);

                p.btnPrdctPhotoFile.set_taborder("27");
                p.btnPrdctPhotoFile.set_text("파일선택");
                p.btnPrdctPhotoFile.set_cssclass("btn_WF_FileUp");
                p.btnPrdctPhotoFile.move("124","58","116","40",null,null);

                p.panBtnFile00.set_taborder("28");
                p.panBtnFile00.set_flexgrow("1");
                p.panBtnFile00.set_flexcrossaxisalign("start");
                p.panBtnFile00.set_flexmainaxisalign("end");
                p.panBtnFile00.set_horizontalgap("10");
                p.panBtnFile00.move("433","58","305","46",null,null);

                p.panTitle00.set_taborder("29");
                p.panTitle00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00.set_flexwrap("wrap");
                p.panTitle00.set_fittocontents("height");
                p.panTitle00.move("0","124","100%","46",null,null);

                p.grdPrdctPhoto.set_taborder("30");
                p.grdPrdctPhoto.set_binddataset("dsFile");
                p.grdPrdctPhoto.set_autofittype("col");
                p.grdPrdctPhoto.set_cssclass("grd_WF_FileAdd");
                p.grdPrdctPhoto.set_scrollbartype("none none");
                p.grdPrdctPhoto.move("20.00","114","100%","40",null,null);

                p.sta00_00_00_01_00.set_taborder("31");
                p.sta00_00_00_01_00.set_text("KS마크 및 제품제원(라벨) 보이도록 제품사진 촬영바랍니다.\r\n<b v=\'true\'>* 그림파일만 첨부가 가능하며 크기는 600*800 이하로 첨부하여 주시기 바랍니다.(hwp,pdf 등 사용불가)</b>");
                p.sta00_00_00_01_00.set_cssclass("sta_WF_Des");
                p.sta00_00_00_01_00.set_fittocontents("height");
                p.sta00_00_00_01_00.set_usedecorate("true");
                p.sta00_00_00_01_00.move("20","20","100%","47",null,null);

                p.Panel01_00_00.set_taborder("32");
                p.Panel01_00_00.set_type("vertical");
                p.Panel01_00_00.set_verticalgap("10");
                p.Panel01_00_00.move("192","1038","100%","97",null,null);

                p.panFile2.set_taborder("33");
                p.panFile2.set_fittocontents("height");
                p.panFile2.set_spacing("10px 20px 10px 20px");
                p.panFile2.set_flexwrap("wrap");
                p.panFile2.set_cssclass("pal_WF_DtlBg");
                p.panFile2.set_verticalgap("4");
                p.panFile2.set_visible("true");
                p.panFile2.move("0","42","100.00%","168",null,null);

                p.staLabel00.set_taborder("34");
                p.staLabel00.set_text("<b v=\'true\'>전기용량 검토기준</b>(단상 220V 기준)");
                p.staLabel00.set_cssclass("sta_WF_Label");
                p.staLabel00.set_usedecorate("true");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.Grid00.set_taborder("35");
                p.Grid00.set_autofittype("col");
                p.Grid00.set_scrollbartype("none");
                p.Grid00.set_fillareatype("allrow");
                p.Grid00.move("20.00","94","40%","179",null,null);

                p.Panel00_00_02.set_taborder("36");
                p.Panel00_00_02.set_type("vertical");
                p.Panel00_00_02.set_flexgrow("1");
                p.Panel00_00_02.set_minwidth("");
                p.Panel00_00_02.move("20.00","50","970","230",null,null);

                p.Panel04.set_taborder("37");
                p.Panel04.set_horizontalgap("20");
                p.Panel04.set_flexcrossaxiswrapalign("start");
                p.Panel04.set_flexwrap("wrap");
                p.Panel04.set_fittocontents("height");
                p.Panel04.set_verticalgap("0");
                p.Panel04.set_spacing("0px 20px 10px 20px");
                p.Panel04.set_cssclass("pal_WF_DtlBg");
                p.Panel04.set_type("horizontal");
                p.Panel04.move("0","46","100.00%","241",null,null);

                p.staElctyCpctSe.set_taborder("38");
                p.staElctyCpctSe.set_text("전기용량구분");
                p.staElctyCpctSe.set_cssclass("sta_WF_Label_E");
                p.staElctyCpctSe.move("0","0","100%","46",null,null);

                p.cboElctyCpctSe.set_taborder("39");
                p.cboElctyCpctSe.set_readonly("true");
                p.cboElctyCpctSe.set_innerdataset("dsEleCpctLoad");
                p.cboElctyCpctSe.set_codecolumn("cdId");
                p.cboElctyCpctSe.set_datacolumn("cdNm");
                p.cboElctyCpctSe.set_value("");
                p.cboElctyCpctSe.set_index("-1");
                p.cboElctyCpctSe.move("0","46","100%","40",null,null);

                p.Panel01_00_01_01_00.set_taborder("40");
                p.Panel01_00_01_01_00.set_type("vertical");
                p.Panel01_00_01_01_00.set_flexgrow("1");
                p.Panel01_00_01_01_00.move("20","0","310","86",null,null);

                p.Panel01_00_01_00_01_00_01.set_taborder("41");
                p.Panel01_00_01_00_01_00_01.set_type("vertical");
                p.Panel01_00_01_00_01_00_01.set_flexgrow("1");
                p.Panel01_00_01_00_01_00_01.move("945","256","310","0",null,null);

                p.Panel05.set_taborder("42");
                p.Panel05.set_horizontalgap("20");
                p.Panel05.set_flexcrossaxiswrapalign("start");
                p.Panel05.set_flexwrap("wrap");
                p.Panel05.set_fittocontents("height");
                p.Panel05.set_verticalgap("0");
                p.Panel05.set_spacing("0px 20px 10px 20px");
                p.Panel05.set_cssclass("pal_WF_DtlBg");
                p.Panel05.move("0","194","100.00%","97",null,null);

                p.staAprvNo.set_taborder("43");
                p.staAprvNo.set_text("승인번호");
                p.staAprvNo.set_cssclass("sta_WF_Label_E");
                p.staAprvNo.move("10","98","100%","46",null,null);

                p.edtAprvNo.set_taborder("44");
                p.edtAprvNo.set_readonly("true");
                p.edtAprvNo.move("10.00","158","100%","40",null,null);

                p.Panel00_00_00.set_taborder("45");
                p.Panel00_00_00.set_type("vertical");
                p.Panel00_00_00.set_flexgrow("1");
                p.Panel00_00_00.set_minwidth("");
                p.Panel00_00_00.move("10.00","98","305","86",null,null);

                p.staElctyTeamMngNo.set_taborder("46");
                p.staElctyTeamMngNo.set_text("전기팀관리번호");
                p.staElctyTeamMngNo.set_cssclass("sta_WF_Label_E");
                p.staElctyTeamMngNo.move("10","98","100%","46",null,null);

                p.edtElctyTeamMngNo.set_taborder("47");
                p.edtElctyTeamMngNo.set_readonly("true");
                p.edtElctyTeamMngNo.move("10.00","158","100%","40",null,null);

                p.Panel00_00_01_00.set_taborder("48");
                p.Panel00_00_01_00.set_type("vertical");
                p.Panel00_00_01_00.set_flexgrow("1");
                p.Panel00_00_01_00.set_minwidth("");
                p.Panel00_00_01_00.move("10.00","98","305","86",null,null);

                p.Panel06.set_taborder("49");
                p.Panel06.set_horizontalgap("20");
                p.Panel06.set_flexcrossaxiswrapalign("start");
                p.Panel06.set_flexwrap("wrap");
                p.Panel06.set_fittocontents("height");
                p.Panel06.set_verticalgap("0");
                p.Panel06.set_spacing("0px 20px 10px 20px");
                p.Panel06.set_cssclass("pal_WF_DtlBg");
                p.Panel06.set_type("horizontal");
                p.Panel06.set_visible("false");
                p.Panel06.move("0","60","100.00%","96",null,null);

                p.staFireamHdrppsSmYn.set_taborder("50");
                p.staFireamHdrppsSmYn.set_text("화기책임자(정) 동일여부");
                p.staFireamHdrppsSmYn.set_cssclass("sta_WF_Label_E");
                p.staFireamHdrppsSmYn.move("10","98","100%","46",null,null);

                p.Panel02_00.set_taborder("51");
                p.Panel02_00.set_flexcrossaxisalign("end");
                p.Panel02_00.move("187","7","100%","46",null,null);

                p.rdoFireamHdrppsSmYn.set_taborder("52");
                p.rdoFireamHdrppsSmYn.set_innerdataset(divForm_form_Div02_form_rdoFireamHdrppsSmYn_innerdataset);
                p.rdoFireamHdrppsSmYn.set_codecolumn("codecolumn");
                p.rdoFireamHdrppsSmYn.set_datacolumn("datacolumn");
                p.rdoFireamHdrppsSmYn.set_direction("vertical");
                p.rdoFireamHdrppsSmYn.set_fittocontents("width");
                p.rdoFireamHdrppsSmYn.set_index("-1");
                p.rdoFireamHdrppsSmYn.move("200.00","328","393","49.37",null,null);

                p.Panel00_00.set_taborder("53");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.set_minwidth("");
                p.Panel00_00.move("10.00","98","305","86",null,null);

                p.Panel07.set_taborder("54");
                p.Panel07.set_horizontalgap("20");
                p.Panel07.set_flexcrossaxiswrapalign("start");
                p.Panel07.set_flexwrap("wrap");
                p.Panel07.set_fittocontents("height");
                p.Panel07.set_verticalgap("0");
                p.Panel07.set_spacing("0px 20px 10px 20px");
                p.Panel07.set_cssclass("pal_WF_DtlBg");
                p.Panel07.set_type("horizontal");
                p.Panel07.set_visible("true");
                p.Panel07.move("0","60","100.00%","96",null,null);

                p.staFireamHdrppsNm.set_taborder("55");
                p.staFireamHdrppsNm.set_text("화기책임자(정)");
                p.staFireamHdrppsNm.set_cssclass("sta_WF_Label_E");
                p.staFireamHdrppsNm.move("10","98","100%","46",null,null);

                p.edtFireamHdrppsNm.set_taborder("56");
                p.edtFireamHdrppsNm.set_readonly("false");
                p.edtFireamHdrppsNm.move("10.00","158","100%","40",null,null);

                p.Panel00_00_00_00.set_taborder("57");
                p.Panel00_00_00_00.set_type("vertical");
                p.Panel00_00_00_00.set_flexgrow("1");
                p.Panel00_00_00_00.set_minwidth("");
                p.Panel00_00_00_00.move("10.00","98","305","86",null,null);

                p.staFireamHdrppsTelno.set_taborder("58");
                p.staFireamHdrppsTelno.set_text("연락처(정)");
                p.staFireamHdrppsTelno.set_cssclass("sta_WF_Label_E");
                p.staFireamHdrppsTelno.move("10","98","100%","46",null,null);

                p.edtFireamHdrppsTelno.set_taborder("59");
                p.edtFireamHdrppsTelno.set_readonly("false");
                p.edtFireamHdrppsTelno.move("10.00","158","100%","40",null,null);

                p.Panel00_00_01_00_00.set_taborder("60");
                p.Panel00_00_01_00_00.set_type("vertical");
                p.Panel00_00_01_00_00.set_flexgrow("1");
                p.Panel00_00_01_00_00.set_minwidth("");
                p.Panel00_00_01_00_00.move("10.00","98","305","86",null,null);

                p.Panel00_08.set_taborder("61");
                p.Panel00_08.set_horizontalgap("20");
                p.Panel00_08.set_flexcrossaxiswrapalign("start");
                p.Panel00_08.set_flexwrap("wrap");
                p.Panel00_08.set_fittocontents("height");
                p.Panel00_08.set_verticalgap("0");
                p.Panel00_08.set_spacing("0px 20px 10px 20px");
                p.Panel00_08.set_cssclass("pal_WF_DtlBg");
                p.Panel00_08.set_type("horizontal");
                p.Panel00_08.set_visible("true");
                p.Panel00_08.move("0","60","100.00%","96",null,null);

                p.staFireamHdrppsWtcs.set_taborder("62");
                p.staFireamHdrppsWtcs.set_text("화기책임자(정) 개인정보수집 및 이용동의서");
                p.staFireamHdrppsWtcs.set_cssclass("sta_WF_Label_E");
                p.staFireamHdrppsWtcs.set_flexgrow("1");
                p.staFireamHdrppsWtcs.move("0","44","305","46",null,null);

                p.btnFireamHdrppsWtcsSample.set_taborder("63");
                p.btnFireamHdrppsWtcsSample.set_text("동의서 양식 다운로드");
                p.btnFireamHdrppsWtcsSample.set_cssclass("btn_WF_FileDw02");
                p.btnFireamHdrppsWtcsSample.set_fittocontents("width");
                p.btnFireamHdrppsWtcsSample.set_enable("true");
                p.btnFireamHdrppsWtcsSample.move("64.00","0","190","40",null,null);

                p.btnFireamHdrppsWtcsFile1.set_taborder("64");
                p.btnFireamHdrppsWtcsFile1.set_text("파일선택");
                p.btnFireamHdrppsWtcsFile1.set_cssclass("btn_WF_FileUp");
                p.btnFireamHdrppsWtcsFile1.move("124","58","116","40",null,null);

                p.panBtnFile01.set_taborder("65");
                p.panBtnFile01.set_flexgrow("1");
                p.panBtnFile01.set_flexcrossaxisalign("start");
                p.panBtnFile01.set_flexmainaxisalign("end");
                p.panBtnFile01.set_horizontalgap("10");
                p.panBtnFile01.move("433","58","305","46",null,null);

                p.panTitle01.set_taborder("66");
                p.panTitle01.set_cssclass("pan_WF_FileTitle");
                p.panTitle01.set_flexwrap("wrap");
                p.panTitle01.set_fittocontents("height");
                p.panTitle01.move("0","124","100%","46",null,null);

                p.grdFireamHdrppsWtcs.set_taborder("67");
                p.grdFireamHdrppsWtcs.set_binddataset("dsFile");
                p.grdFireamHdrppsWtcs.set_autofittype("col");
                p.grdFireamHdrppsWtcs.set_cssclass("grd_WF_FileAdd");
                p.grdFireamHdrppsWtcs.set_scrollbartype("none none");
                p.grdFireamHdrppsWtcs.move("20.00","114","100%","40",null,null);

                p.sta00_00_00_01_01.set_taborder("68");
                p.sta00_00_00_01_01.set_text("JPG,PNG,BMP,PDF만 첨부가능");
                p.sta00_00_00_01_01.set_cssclass("sta_WF_Des");
                p.sta00_00_00_01_01.set_fittocontents("height");
                p.sta00_00_00_01_01.move("20","20","100%","30",null,null);

                p.Panel01_00_01.set_taborder("69");
                p.Panel01_00_01.set_type("vertical");
                p.Panel01_00_01.set_verticalgap("10");
                p.Panel01_00_01.move("192","1038","100.00%","80",null,null);

                p.panFile3.set_taborder("70");
                p.panFile3.set_fittocontents("height");
                p.panFile3.set_spacing("10px 20px 10px 20px");
                p.panFile3.set_flexwrap("wrap");
                p.panFile3.set_cssclass("pal_WF_DtlBg");
                p.panFile3.set_verticalgap("4");
                p.panFile3.set_visible("true");
                p.panFile3.move("0","42","100.00%","151",null,null);

                p.btnFireamHdrppsWtcsFile2.set_taborder("71");
                p.btnFireamHdrppsWtcsFile2.set_text("동의서보관함");
                p.btnFireamHdrppsWtcsFile2.set_cssclass("btn_WF_FileUp");
                p.btnFireamHdrppsWtcsFile2.move("124","58","140","40",null,null);

                p.staFireamDprppsSmYn.set_taborder("72");
                p.staFireamDprppsSmYn.set_text("화기책임자(부) 동일여부");
                p.staFireamDprppsSmYn.set_cssclass("sta_WF_Label_E");
                p.staFireamDprppsSmYn.move("10","98","100%","46",null,null);

                p.Panel02_00_00.set_taborder("73");
                p.Panel02_00_00.set_flexcrossaxisalign("end");
                p.Panel02_00_00.move("187","7","100%","46",null,null);

                p.rdoFireamDprppsSmYn.set_taborder("74");
                p.rdoFireamDprppsSmYn.set_innerdataset(divForm_form_Div02_form_rdoFireamDprppsSmYn_innerdataset);
                p.rdoFireamDprppsSmYn.set_codecolumn("codecolumn");
                p.rdoFireamDprppsSmYn.set_datacolumn("datacolumn");
                p.rdoFireamDprppsSmYn.set_direction("vertical");
                p.rdoFireamDprppsSmYn.set_fittocontents("width");
                p.rdoFireamDprppsSmYn.set_index("-1");
                p.rdoFireamDprppsSmYn.move("200.00","328","393","49.37",null,null);

                p.Panel00_00_01.set_taborder("75");
                p.Panel00_00_01.set_type("vertical");
                p.Panel00_00_01.set_flexgrow("1");
                p.Panel00_00_01.set_minwidth("");
                p.Panel00_00_01.move("10.00","98","305","86",null,null);

                p.Panel09.set_taborder("76");
                p.Panel09.set_horizontalgap("20");
                p.Panel09.set_flexcrossaxiswrapalign("start");
                p.Panel09.set_flexwrap("wrap");
                p.Panel09.set_fittocontents("height");
                p.Panel09.set_verticalgap("0");
                p.Panel09.set_spacing("0px 20px 10px 20px");
                p.Panel09.set_cssclass("pal_WF_DtlBg");
                p.Panel09.set_type("horizontal");
                p.Panel09.set_visible("true");
                p.Panel09.move("0","60","100.00%","96",null,null);

                p.staFireamDprppsNm.set_taborder("77");
                p.staFireamDprppsNm.set_text("화기책임자(부)");
                p.staFireamDprppsNm.set_cssclass("sta_WF_Label_E");
                p.staFireamDprppsNm.move("10","98","100%","46",null,null);

                p.edtFireamDprppsNm.set_taborder("78");
                p.edtFireamDprppsNm.set_readonly("false");
                p.edtFireamDprppsNm.move("10.00","158","100%","40",null,null);

                p.Panel00_00_00_00_00.set_taborder("79");
                p.Panel00_00_00_00_00.set_type("vertical");
                p.Panel00_00_00_00_00.set_flexgrow("1");
                p.Panel00_00_00_00_00.set_minwidth("");
                p.Panel00_00_00_00_00.move("10.00","98","305","86",null,null);

                p.Panel00_00_01_00_00_00.set_taborder("80");
                p.Panel00_00_01_00_00_00.set_type("vertical");
                p.Panel00_00_01_00_00_00.set_flexgrow("1");
                p.Panel00_00_01_00_00_00.set_minwidth("");
                p.Panel00_00_01_00_00_00.move("10.00","98","305","0",null,null);

                p.Panel10.set_taborder("81");
                p.Panel10.set_horizontalgap("20");
                p.Panel10.set_flexcrossaxiswrapalign("start");
                p.Panel10.set_flexwrap("wrap");
                p.Panel10.set_fittocontents("height");
                p.Panel10.set_verticalgap("0");
                p.Panel10.set_spacing("0px 20px 10px 20px");
                p.Panel10.set_cssclass("pal_WF_DtlBg");
                p.Panel10.set_type("horizontal");
                p.Panel10.set_visible("true");
                p.Panel10.move("0","60","100.00%","96",null,null);

                p.staFireamDprppsWtcs.set_taborder("82");
                p.staFireamDprppsWtcs.set_text("화기책임자(부) 개인정보수집 및 이용동의서");
                p.staFireamDprppsWtcs.set_cssclass("sta_WF_Label_E");
                p.staFireamDprppsWtcs.set_flexgrow("1");
                p.staFireamDprppsWtcs.move("0","44","305","46",null,null);

                p.btnFireamDprppsWtcsSample.set_taborder("83");
                p.btnFireamDprppsWtcsSample.set_text("동의서 양식 다운로드");
                p.btnFireamDprppsWtcsSample.set_cssclass("btn_WF_FileDw02");
                p.btnFireamDprppsWtcsSample.set_fittocontents("width");
                p.btnFireamDprppsWtcsSample.set_enable("true");
                p.btnFireamDprppsWtcsSample.move("64.00","0","190","40",null,null);

                p.btnFireamDprppsWtcsFile2.set_taborder("84");
                p.btnFireamDprppsWtcsFile2.set_text("동의서보관함");
                p.btnFireamDprppsWtcsFile2.set_cssclass("btn_WF_FileUp");
                p.btnFireamDprppsWtcsFile2.move("124","58","140","40",null,null);

                p.btnFireamDprppsWtcsFile1.set_taborder("85");
                p.btnFireamDprppsWtcsFile1.set_text("파일선택");
                p.btnFireamDprppsWtcsFile1.set_cssclass("btn_WF_FileUp");
                p.btnFireamDprppsWtcsFile1.move("124","58","116","40",null,null);

                p.panBtnFile01_00.set_taborder("86");
                p.panBtnFile01_00.set_flexgrow("1");
                p.panBtnFile01_00.set_flexcrossaxisalign("start");
                p.panBtnFile01_00.set_flexmainaxisalign("end");
                p.panBtnFile01_00.set_horizontalgap("10");
                p.panBtnFile01_00.move("433","58","305","46",null,null);

                p.panTitle01_00.set_taborder("87");
                p.panTitle01_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle01_00.set_flexwrap("wrap");
                p.panTitle01_00.set_fittocontents("height");
                p.panTitle01_00.move("0","124","100%","46",null,null);

                p.grdFireamDprppsWtcs.set_taborder("88");
                p.grdFireamDprppsWtcs.set_binddataset("dsFile");
                p.grdFireamDprppsWtcs.set_autofittype("col");
                p.grdFireamDprppsWtcs.set_cssclass("grd_WF_FileAdd");
                p.grdFireamDprppsWtcs.set_scrollbartype("none none");
                p.grdFireamDprppsWtcs.move("20.00","114","100%","40",null,null);

                p.sta00_00_00_01_01_00.set_taborder("89");
                p.sta00_00_00_01_01_00.set_text("JPG,PNG,BMP,PDF만 첨부가능");
                p.sta00_00_00_01_01_00.set_cssclass("sta_WF_Des");
                p.sta00_00_00_01_01_00.set_fittocontents("height");
                p.sta00_00_00_01_01_00.move("20","20","100%","30",null,null);

                p.Panel01_00_01_00.set_taborder("90");
                p.Panel01_00_01_00.set_type("vertical");
                p.Panel01_00_01_00.set_verticalgap("10");
                p.Panel01_00_01_00.move("192","1038","100.00%","80",null,null);

                p.panFile4.set_taborder("91");
                p.panFile4.set_fittocontents("height");
                p.panFile4.set_spacing("10px 20px 10px 20px");
                p.panFile4.set_flexwrap("wrap");
                p.panFile4.set_cssclass("pal_WF_DtlBg");
                p.panFile4.set_verticalgap("4");
                p.panFile4.set_visible("true");
                p.panFile4.move("0","42","100.00%","151",null,null);

                p.staUsePrdBgngYmd.set_taborder("92");
                p.staUsePrdBgngYmd.set_text("사용기간시작일");
                p.staUsePrdBgngYmd.set_cssclass("sta_WF_Label_E");
                p.staUsePrdBgngYmd.move("10","98","100%","46",null,null);

                p.calUsePrdBgngYmd.set_taborder("93");
                p.calUsePrdBgngYmd.move("280","139","100%","40",null,null);

                p.Panel05_00.set_taborder("94");
                p.Panel05_00.set_type("vertical");
                p.Panel05_00.set_flexgrow("1");
                p.Panel05_00.move("20.00","242","305","86",null,null);

                p.Panel11.set_taborder("95");
                p.Panel11.set_horizontalgap("20");
                p.Panel11.set_flexcrossaxiswrapalign("start");
                p.Panel11.set_flexwrap("wrap");
                p.Panel11.set_fittocontents("height");
                p.Panel11.set_verticalgap("0");
                p.Panel11.set_spacing("0px 20px 10px 20px");
                p.Panel11.set_cssclass("pal_WF_DtlBg");
                p.Panel11.set_visible("true");
                p.Panel11.move("0","242","100.00%","96",null,null);

                p.staUsePrdEndYmd.set_taborder("96");
                p.staUsePrdEndYmd.set_cssclass("sta_WF_Label_E");
                p.staUsePrdEndYmd.set_text("사용기간종료일");
                p.staUsePrdEndYmd.move("10","98","100%","46",null,null);

                p.rdoUsePrdEndYmd.set_taborder("97");
                p.rdoUsePrdEndYmd.set_innerdataset(divForm_form_Div02_form_rdoUsePrdEndYmd_innerdataset);
                p.rdoUsePrdEndYmd.set_codecolumn("codecolumn");
                p.rdoUsePrdEndYmd.set_datacolumn("datacolumn");
                p.rdoUsePrdEndYmd.set_direction("vertical");
                p.rdoUsePrdEndYmd.set_fittocontents("width");
                p.rdoUsePrdEndYmd.set_index("-1");
                p.rdoUsePrdEndYmd.move("200.00","328","100%","49.37",null,null);

                p.Panel04_01.set_taborder("98");
                p.Panel04_01.set_type("vertical");
                p.Panel04_01.set_flexgrow("1");
                p.Panel04_01.set_minwidth("");
                p.Panel04_01.move("10.00","98","305","86",null,null);

                p.staRtdVltg.set_taborder("99");
                p.staRtdVltg.set_text("정격전압(V)");
                p.staRtdVltg.set_cssclass("sta_WF_Label_E");
                p.staRtdVltg.move("10","98","100%","46",null,null);

                p.edtRtdVltg.set_taborder("100");
                p.edtRtdVltg.set_readonly("false");
                p.edtRtdVltg.move("10.00","158","100%","40",null,null);

                p.Panel00_00_00_00_01_01.set_taborder("101");
                p.Panel00_00_00_00_01_01.set_type("vertical");
                p.Panel00_00_00_00_01_01.set_flexgrow("1");
                p.Panel00_00_00_00_01_01.set_minwidth("");
                p.Panel00_00_00_00_01_01.move("10.00","98","305","86",null,null);

                p.staSn.set_taborder("102");
                p.staSn.set_text("일련번호");
                p.staSn.set_cssclass("sta_WF_Label_E");
                p.staSn.move("10","98","100%","46",null,null);

                p.edtSn.set_taborder("103");
                p.edtSn.set_readonly("false");
                p.edtSn.move("10.00","158","100%","40",null,null);

                p.Panel00_00_01_00_00_01_01.set_taborder("104");
                p.Panel00_00_01_00_00_01_01.set_type("vertical");
                p.Panel00_00_01_00_00_01_01.set_flexgrow("1");
                p.Panel00_00_01_00_00_01_01.set_minwidth("");
                p.Panel00_00_01_00_00_01_01.move("10.00","98","305","143",null,null);

                p.Panel16.set_taborder("105");
                p.Panel16.set_horizontalgap("20");
                p.Panel16.set_flexcrossaxiswrapalign("start");
                p.Panel16.set_flexwrap("wrap");
                p.Panel16.set_fittocontents("height");
                p.Panel16.set_verticalgap("0");
                p.Panel16.set_spacing("0px 20px 10px 20px");
                p.Panel16.set_cssclass("pal_WF_DtlBg");
                p.Panel16.set_type("horizontal");
                p.Panel16.set_visible("true");
                p.Panel16.move("0","60","100.00%","154",null,null);

                p.staInstlPlc.set_taborder("106");
                p.staInstlPlc.set_text("설치장소");
                p.staInstlPlc.set_cssclass("sta_WF_Label");
                p.staInstlPlc.move("1028","76","100%","46",null,null);

                p.edtInstlPlc.set_taborder("107");
                p.edtInstlPlc.set_readonly("false");
                p.edtInstlPlc.move("1028","121","100%","40",null,null);

                p.Panel07_00_01.set_taborder("108");
                p.Panel07_00_01.set_type("vertical");
                p.Panel07_00_01.set_flexgrow("1");
                p.Panel07_00_01.move("1028","76","305","86",null,null);

                p.Panel12.set_taborder("109");
                p.Panel12.set_horizontalgap("20");
                p.Panel12.set_flexcrossaxiswrapalign("start");
                p.Panel12.set_flexwrap("wrap");
                p.Panel12.set_fittocontents("height");
                p.Panel12.set_verticalgap("0");
                p.Panel12.set_spacing("0px 20px 10px 20px");
                p.Panel12.set_cssclass("pal_WF_DtlBg");
                p.Panel12.set_visible("true");
                p.Panel12.move("1008","76","100.00%","95",null,null);

                p.staSafeCertNo.set_taborder("110");
                p.staSafeCertNo.set_text("안전인증번호");
                p.staSafeCertNo.set_cssclass("sta_WF_Label_E");
                p.staSafeCertNo.move("10","98","100%","46",null,null);

                p.edtSafeCertNo.set_taborder("111");
                p.edtSafeCertNo.set_readonly("false");
                p.edtSafeCertNo.move("10.00","158","100%","40",null,null);

                p.Panel00_00_00_00_01.set_taborder("112");
                p.Panel00_00_00_00_01.set_type("vertical");
                p.Panel00_00_00_00_01.set_flexgrow("1");
                p.Panel00_00_00_00_01.set_minwidth("");
                p.Panel00_00_00_00_01.move("10.00","98","305","86",null,null);

                p.staRtdCnsmElpwr.set_taborder("113");
                p.staRtdCnsmElpwr.set_text("정격소비전력(W)");
                p.staRtdCnsmElpwr.set_cssclass("sta_WF_Label_E");
                p.staRtdCnsmElpwr.move("10","98","100%","46",null,null);

                p.edtRtdCnsmElpwr.set_taborder("114");
                p.edtRtdCnsmElpwr.set_readonly("false");
                p.edtRtdCnsmElpwr.move("10.00","158","100%","40",null,null);

                p.Panel00_00_01_00_00_01.set_taborder("115");
                p.Panel00_00_01_00_00_01.set_type("vertical");
                p.Panel00_00_01_00_00_01.set_flexgrow("1");
                p.Panel00_00_01_00_00_01.set_minwidth("");
                p.Panel00_00_01_00_00_01.move("10.00","98","305","86",null,null);

                p.Panel13.set_taborder("116");
                p.Panel13.set_horizontalgap("20");
                p.Panel13.set_flexcrossaxiswrapalign("start");
                p.Panel13.set_flexwrap("wrap");
                p.Panel13.set_fittocontents("height");
                p.Panel13.set_verticalgap("0");
                p.Panel13.set_spacing("0px 20px 10px 20px");
                p.Panel13.set_cssclass("pal_WF_DtlBg");
                p.Panel13.set_type("horizontal");
                p.Panel13.set_visible("true");
                p.Panel13.move("0","60","100.00%","96",null,null);

                p.staMnftrYmd.set_taborder("117");
                p.staMnftrYmd.set_text("제조년월일");
                p.staMnftrYmd.set_cssclass("sta_WF_Label_E");
                p.staMnftrYmd.move("10","98","100%","46",null,null);

                p.calMnftrYmd.set_taborder("118");
                p.calMnftrYmd.move("280","139","100%","40",null,null);

                p.Panel05_00_00.set_taborder("119");
                p.Panel05_00_00.set_type("vertical");
                p.Panel05_00_00.set_flexgrow("1");
                p.Panel05_00_00.move("20.00","242","305","86",null,null);

                p.staMkr.set_taborder("120");
                p.staMkr.set_text("제조사");
                p.staMkr.set_cssclass("sta_WF_Label_E");
                p.staMkr.move("10","98","100%","46",null,null);

                p.edtMkr.set_taborder("121");
                p.edtMkr.set_readonly("false");
                p.edtMkr.move("10.00","158","100%","40",null,null);

                p.Panel00_00_00_00_01_00.set_taborder("122");
                p.Panel00_00_00_00_01_00.set_type("vertical");
                p.Panel00_00_00_00_01_00.set_flexgrow("1");
                p.Panel00_00_00_00_01_00.set_minwidth("");
                p.Panel00_00_00_00_01_00.move("10.00","98","305","86",null,null);

                p.Panel14.set_taborder("123");
                p.Panel14.set_horizontalgap("20");
                p.Panel14.set_flexcrossaxiswrapalign("start");
                p.Panel14.set_flexwrap("wrap");
                p.Panel14.set_fittocontents("height");
                p.Panel14.set_verticalgap("0");
                p.Panel14.set_spacing("0px 20px 10px 20px");
                p.Panel14.set_cssclass("pal_WF_DtlBg");
                p.Panel14.set_visible("true");
                p.Panel14.move("0","242","100.00%","96",null,null);

                p.staRmrk.set_taborder("124");
                p.staRmrk.set_text("비고");
                p.staRmrk.set_cssclass("sta_WF_Label");
                p.staRmrk.move("10","98","100%","46",null,null);

                p.edtRmrk.set_taborder("125");
                p.edtRmrk.set_readonly("false");
                p.edtRmrk.move("10.00","158","100%","40",null,null);

                p.Panel00_00_01_00_00_01_00.set_taborder("126");
                p.Panel00_00_01_00_00_01_00.set_type("vertical");
                p.Panel00_00_01_00_00_01_00.set_flexgrow("1");
                p.Panel00_00_01_00_00_01_00.set_minwidth("");
                p.Panel00_00_01_00_00_01_00.move("10.00","98","305","86",null,null);

                p.Panel15.set_taborder("127");
                p.Panel15.set_horizontalgap("20");
                p.Panel15.set_flexcrossaxiswrapalign("start");
                p.Panel15.set_flexwrap("wrap");
                p.Panel15.set_fittocontents("height");
                p.Panel15.set_verticalgap("0");
                p.Panel15.set_spacing("0px 20px 10px 20px");
                p.Panel15.set_cssclass("pal_WF_DtlBg");
                p.Panel15.set_type("horizontal");
                p.Panel15.set_visible("true");
                p.Panel15.move("0","60","100.00%","96",null,null);

                p.staInshtPhoto.set_taborder("128");
                p.staInshtPhoto.set_text("검사표사진");
                p.staInshtPhoto.set_cssclass("sta_WF_Label_E");
                p.staInshtPhoto.set_flexgrow("1");
                p.staInshtPhoto.move("0","44","305","46",null,null);

                p.btnInshtPhotoFile.set_taborder("129");
                p.btnInshtPhotoFile.set_text("파일선택");
                p.btnInshtPhotoFile.set_cssclass("btn_WF_FileUp");
                p.btnInshtPhotoFile.move("124","58","116","40",null,null);

                p.panBtnFile01_00_00.set_taborder("130");
                p.panBtnFile01_00_00.set_flexgrow("1");
                p.panBtnFile01_00_00.set_flexcrossaxisalign("start");
                p.panBtnFile01_00_00.set_flexmainaxisalign("end");
                p.panBtnFile01_00_00.set_horizontalgap("10");
                p.panBtnFile01_00_00.move("433","58","305","46",null,null);

                p.panTitle01_00_00.set_taborder("131");
                p.panTitle01_00_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle01_00_00.set_flexwrap("wrap");
                p.panTitle01_00_00.set_fittocontents("height");
                p.panTitle01_00_00.move("0","124","100%","46",null,null);

                p.grdInshtPhoto.set_taborder("132");
                p.grdInshtPhoto.set_binddataset("dsFile");
                p.grdInshtPhoto.set_autofittype("col");
                p.grdInshtPhoto.set_cssclass("grd_WF_FileAdd");
                p.grdInshtPhoto.set_scrollbartype("none none");
                p.grdInshtPhoto.move("20.00","114","100%","40",null,null);

                p.sta00_00_00_01_01_00_00.set_taborder("133");
                p.sta00_00_00_01_01_00_00.set_text("검사표 확인이 가능한 난로사진 입니다.");
                p.sta00_00_00_01_01_00_00.set_cssclass("sta_WF_Des");
                p.sta00_00_00_01_01_00_00.set_fittocontents("height");
                p.sta00_00_00_01_01_00_00.move("20","20","100%","30",null,null);

                p.Panel01_00_01_00_00.set_taborder("134");
                p.Panel01_00_01_00_00.set_type("vertical");
                p.Panel01_00_01_00_00.set_verticalgap("10");
                p.Panel01_00_01_00_00.move("192","1038","100.00%","80",null,null);

                p.panFile5.set_taborder("135");
                p.panFile5.set_fittocontents("height");
                p.panFile5.set_spacing("10px 20px 10px 20px");
                p.panFile5.set_flexwrap("wrap");
                p.panFile5.set_cssclass("pal_WF_DtlBg");
                p.panFile5.set_verticalgap("4");
                p.panFile5.set_visible("true");
                p.panFile5.move("0","42","100.00%","151",null,null);

                p.staHetrWholPhoto.set_taborder("136");
                p.staHetrWholPhoto.set_text("난로전체사진");
                p.staHetrWholPhoto.set_cssclass("sta_WF_Label_E");
                p.staHetrWholPhoto.set_flexgrow("1");
                p.staHetrWholPhoto.move("0","44","305","46",null,null);

                p.btnHetrWholPhotoFile.set_taborder("137");
                p.btnHetrWholPhotoFile.set_text("파일선택");
                p.btnHetrWholPhotoFile.set_cssclass("btn_WF_FileUp");
                p.btnHetrWholPhotoFile.move("124","58","116","40",null,null);

                p.panBtnFile01_00_00_00.set_taborder("138");
                p.panBtnFile01_00_00_00.set_flexgrow("1");
                p.panBtnFile01_00_00_00.set_flexcrossaxisalign("start");
                p.panBtnFile01_00_00_00.set_flexmainaxisalign("end");
                p.panBtnFile01_00_00_00.set_horizontalgap("10");
                p.panBtnFile01_00_00_00.move("433","58","305","46",null,null);

                p.panTitle01_00_00_00.set_taborder("139");
                p.panTitle01_00_00_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle01_00_00_00.set_flexwrap("wrap");
                p.panTitle01_00_00_00.set_fittocontents("height");
                p.panTitle01_00_00_00.move("0","124","100%","46",null,null);

                p.grdHetrWholPhoto.set_taborder("140");
                p.grdHetrWholPhoto.set_binddataset("dsFile");
                p.grdHetrWholPhoto.set_autofittype("col");
                p.grdHetrWholPhoto.set_cssclass("grd_WF_FileAdd");
                p.grdHetrWholPhoto.set_scrollbartype("none none");
                p.grdHetrWholPhoto.move("20.00","114","100%","40",null,null);

                p.sta00_00_00_01_01_00_00_00.set_taborder("141");
                p.sta00_00_00_01_01_00_00_00.set_text("검사표 확인이 가능한 난로사진 입니다.");
                p.sta00_00_00_01_01_00_00_00.set_cssclass("sta_WF_Des");
                p.sta00_00_00_01_01_00_00_00.set_fittocontents("height");
                p.sta00_00_00_01_01_00_00_00.move("20","20","100%","30",null,null);

                p.Panel01_00_01_00_00_00.set_taborder("142");
                p.Panel01_00_01_00_00_00.set_type("vertical");
                p.Panel01_00_01_00_00_00.set_verticalgap("10");
                p.Panel01_00_01_00_00_00.move("192","1038","100.00%","80",null,null);

                p.panFile6.set_taborder("143");
                p.panFile6.set_fittocontents("height");
                p.panFile6.set_spacing("10px 20px 10px 20px");
                p.panFile6.set_flexwrap("wrap");
                p.panFile6.set_cssclass("pal_WF_DtlBg");
                p.panFile6.set_verticalgap("4");
                p.panFile6.set_visible("true");
                p.panFile6.move("0","42","100.00%","151",null,null);

                p.sta00_00_00_01_01_00_00_00_01.set_taborder("144");
                p.sta00_00_00_01_01_00_00_00_01.set_text("일련번호 = 제조번호 = 시리얼넘버\r\n  없으면 ‘없음’ 표기");
                p.sta00_00_00_01_01_00_00_00_01.set_cssclass("sta_WF_Des");
                p.sta00_00_00_01_01_00_00_00_01.set_fittocontents("height");
                p.sta00_00_00_01_01_00_00_00_01.move("20","20","100%","47",null,null);
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
            //-- Default Layout : this.divForm.form.Div03.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.Div03.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdElctyTrckCpctRvw.set_taborder("0");
                p.grdElctyTrckCpctRvw.set_binddataset("dsFlscLapAplyList");
                p.grdElctyTrckCpctRvw.set_autofittype("none");
                p.grdElctyTrckCpctRvw.getSetter("uFunction").set("checkbox");
                p.grdElctyTrckCpctRvw.set_maxwidth("");
                p.grdElctyTrckCpctRvw.move("0","0","100.00%","360",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.Div03.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div03.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div03.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdElctyTrckCpctRvw.set_autofittype("none");

                p.btnGrdRegi.set_visible("false");

                p.btnGrdDel.set_visible("false");
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.Div03.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div03.form.divGrd.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div03.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.Div03.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div03.form
            obj = new Layout("default","",0,0,this.divForm.form.Div03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_taborder("8");
                p.Panel00.move("20","0","100%","86",null,null);

                p.staLabel00.set_taborder("0");
                p.staLabel00.set_text("<b v=\'true\'>1. 적합여부</b>");
                p.staLabel00.set_cssclass("sta_WF_Label");
                p.staLabel00.set_usedecorate("true");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.staSafeCertYn.set_taborder("1");
                p.staSafeCertYn.set_cssclass("sta_WF_Label_E");
                p.staSafeCertYn.set_text("안전인증 여부");
                p.staSafeCertYn.move("10","98","100%","46",null,null);

                p.rdoSafeCertYn.set_taborder("2");
                p.rdoSafeCertYn.set_innerdataset(divForm_form_Div03_form_rdoSafeCertYn_innerdataset);
                p.rdoSafeCertYn.set_codecolumn("codecolumn");
                p.rdoSafeCertYn.set_datacolumn("datacolumn");
                p.rdoSafeCertYn.set_direction("vertical");
                p.rdoSafeCertYn.set_fittocontents("width");
                p.rdoSafeCertYn.set_index("-1");
                p.rdoSafeCertYn.move("200.00","328","100%","49.37",null,null);

                p.Panel04_01_01.set_taborder("3");
                p.Panel04_01_01.set_type("vertical");
                p.Panel04_01_01.set_flexgrow("1");
                p.Panel04_01_01.set_minwidth("");
                p.Panel04_01_01.move("10.00","98","305","86",null,null);

                p.staSafeCertCpatcoYn.set_taborder("4");
                p.staSafeCertCpatcoYn.set_cssclass("sta_WF_Label_E");
                p.staSafeCertCpatcoYn.set_text("안전인증[구(전)]마크 협력사");
                p.staSafeCertCpatcoYn.move("10","98","100%","46",null,null);

                p.rdoSafeCertCpatcoYn.set_taborder("5");
                p.rdoSafeCertCpatcoYn.set_innerdataset(divForm_form_Div03_form_rdoSafeCertCpatcoYn_innerdataset);
                p.rdoSafeCertCpatcoYn.set_codecolumn("codecolumn");
                p.rdoSafeCertCpatcoYn.set_datacolumn("datacolumn");
                p.rdoSafeCertCpatcoYn.set_direction("vertical");
                p.rdoSafeCertCpatcoYn.set_fittocontents("width");
                p.rdoSafeCertCpatcoYn.set_index("-1");
                p.rdoSafeCertCpatcoYn.move("200.00","328","100%","49.37",null,null);

                p.Panel04_01_00_00.set_taborder("6");
                p.Panel04_01_00_00.set_type("vertical");
                p.Panel04_01_00_00.set_flexgrow("1");
                p.Panel04_01_00_00.set_minwidth("");
                p.Panel04_01_00_00.move("10.00","98","305","86",null,null);

                p.Panel01.set_taborder("7");
                p.Panel01.set_horizontalgap("20");
                p.Panel01.set_flexcrossaxiswrapalign("start");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_verticalgap("0");
                p.Panel01.set_spacing("0px 20px 10px 20px");
                p.Panel01.set_cssclass("pal_WF_DtlBg");
                p.Panel01.set_visible("false");
                p.Panel01.move("0","242","100.00%","143",null,null);

                p.staLabel00_00.set_taborder("9");
                p.staLabel00_00.set_text("<b v=\'true\'>2. 접지형 제품여부</b>");
                p.staLabel00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00.set_usedecorate("true");
                p.staLabel00_00.move("10","98","100%","46",null,null);

                p.staGrndtpPrdctYn.set_taborder("10");
                p.staGrndtpPrdctYn.set_cssclass("sta_WF_Label_E");
                p.staGrndtpPrdctYn.set_text("접지형 제품 여부");
                p.staGrndtpPrdctYn.move("10","98","100%","46",null,null);

                p.rdoGrndtpPrdctYn.set_taborder("11");
                p.rdoGrndtpPrdctYn.set_innerdataset(divForm_form_Div03_form_rdoGrndtpPrdctYn_innerdataset);
                p.rdoGrndtpPrdctYn.set_codecolumn("codecolumn");
                p.rdoGrndtpPrdctYn.set_datacolumn("datacolumn");
                p.rdoGrndtpPrdctYn.set_direction("vertical");
                p.rdoGrndtpPrdctYn.set_fittocontents("width");
                p.rdoGrndtpPrdctYn.set_index("-1");
                p.rdoGrndtpPrdctYn.move("200.00","328","100%","49.37",null,null);

                p.Panel04_01_01_00.set_taborder("12");
                p.Panel04_01_01_00.set_type("vertical");
                p.Panel04_01_01_00.set_flexgrow("1");
                p.Panel04_01_01_00.set_minwidth("");
                p.Panel04_01_01_00.move("10.00","98","305","86",null,null);

                p.Panel04_01_00_00_00.set_taborder("13");
                p.Panel04_01_00_00_00.set_type("vertical");
                p.Panel04_01_00_00_00.set_flexgrow("1");
                p.Panel04_01_00_00_00.set_minwidth("");
                p.Panel04_01_00_00_00.move("10.00","98","305","0",null,null);

                p.Panel00_00.set_taborder("14");
                p.Panel00_00.move("20","0","100%","86",null,null);

                p.Panel02.set_taborder("15");
                p.Panel02.set_horizontalgap("20");
                p.Panel02.set_flexcrossaxiswrapalign("start");
                p.Panel02.set_flexwrap("wrap");
                p.Panel02.set_fittocontents("height");
                p.Panel02.set_verticalgap("0");
                p.Panel02.set_spacing("0px 20px 10px 20px");
                p.Panel02.set_cssclass("pal_WF_DtlBg");
                p.Panel02.set_visible("false");
                p.Panel02.move("0","242","100.00%","143",null,null);

                p.staLabel00_00_00.set_taborder("16");
                p.staLabel00_00_00.set_text("<b v=\'true\'>3. 선로용량 검토</b>");
                p.staLabel00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00_00.set_usedecorate("true");
                p.staLabel00_00_00.move("10","98","100%","46",null,null);

                p.staTrckCpctRvwYn.set_taborder("17");
                p.staTrckCpctRvwYn.set_cssclass("sta_WF_Label_E");
                p.staTrckCpctRvwYn.set_text("선로용량 검토");
                p.staTrckCpctRvwYn.move("10","98","100%","46",null,null);

                p.rdoTrckCpctRvwYn.set_taborder("18");
                p.rdoTrckCpctRvwYn.set_innerdataset(divForm_form_Div03_form_rdoTrckCpctRvwYn_innerdataset);
                p.rdoTrckCpctRvwYn.set_codecolumn("codecolumn");
                p.rdoTrckCpctRvwYn.set_datacolumn("datacolumn");
                p.rdoTrckCpctRvwYn.set_direction("vertical");
                p.rdoTrckCpctRvwYn.set_fittocontents("width");
                p.rdoTrckCpctRvwYn.set_index("-1");
                p.rdoTrckCpctRvwYn.move("200.00","328","100%","49.37",null,null);

                p.Panel04_01_01_00_00.set_taborder("19");
                p.Panel04_01_01_00_00.set_type("vertical");
                p.Panel04_01_01_00_00.set_flexgrow("1");
                p.Panel04_01_01_00_00.set_minwidth("");
                p.Panel04_01_01_00_00.move("10.00","98","305","86",null,null);

                p.Panel04_01_00_00_00_00.set_taborder("20");
                p.Panel04_01_00_00_00_00.set_type("vertical");
                p.Panel04_01_00_00_00_00.set_flexgrow("1");
                p.Panel04_01_00_00_00_00.set_minwidth("");
                p.Panel04_01_00_00_00_00.move("10.00","98","305","0",null,null);

                p.Panel00_00_00.set_taborder("21");
                p.Panel00_00_00.move("20","0","100%","86",null,null);

                p.Panel03.set_taborder("22");
                p.Panel03.set_horizontalgap("20");
                p.Panel03.set_flexcrossaxiswrapalign("start");
                p.Panel03.set_flexwrap("wrap");
                p.Panel03.set_fittocontents("height");
                p.Panel03.set_verticalgap("0");
                p.Panel03.set_spacing("0px 20px 10px 20px");
                p.Panel03.set_cssclass("pal_WF_DtlBg");
                p.Panel03.set_visible("false");
                p.Panel03.move("0","242","100.00%","143",null,null);

                p.btnGrdAdd.set_taborder("23");
                p.btnGrdAdd.set_text("추가");
                p.btnGrdAdd.set_cssclass("btn_WF_Small");
                p.btnGrdAdd.set_visible("true");
                p.btnGrdAdd.set_fittocontents("width");
                p.btnGrdAdd.move("356","156","47","34",null,null);

                p.btnGrdDel.set_taborder("24");
                p.btnGrdDel.set_text("삭제");
                p.btnGrdDel.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel.set_visible("true");
                p.btnGrdDel.set_fittocontents("width");
                p.btnGrdDel.move("413","156","45","34",null,null);

                p.panGrdBtn.set_taborder("25");
                p.panGrdBtn.set_flexcrossaxisalign("start");
                p.panGrdBtn.set_flexcrossaxiswrapalign("start");
                p.panGrdBtn.set_flexmainaxisalign("end");
                p.panGrdBtn.set_horizontalgap("10");
                p.panGrdBtn.set_spacing("0px 20px 0px 0px");
                p.panGrdBtn.move("-70","156","100%","40",null,null);

                p.divGrd.set_taborder("26");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","30","100%","400",null,null);

                p.PanelGrd.set_taborder("27");
                p.PanelGrd.set_horizontalgap("20");
                p.PanelGrd.set_flexcrossaxiswrapalign("start");
                p.PanelGrd.set_flexwrap("wrap");
                p.PanelGrd.set_fittocontents("height");
                p.PanelGrd.set_verticalgap("10");
                p.PanelGrd.set_spacing("10px 20px 10px 20px");
                p.PanelGrd.set_cssclass("pal_WF_DtlBg");
                p.PanelGrd.set_type("horizontal");
                p.PanelGrd.set_visible("false");
                p.PanelGrd.move("0","60","100.00%","527",null,null);

                p.staLabel00_00_00_00.set_taborder("28");
                p.staLabel00_00_00_00.set_text("<b v=\'true\'>4. 전기선로 용량검토</b>(B등급인 경우)");
                p.staLabel00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00_00_00.set_usedecorate("true");
                p.staLabel00_00_00_00.move("10","98","100%","46",null,null);

                p.staRadmFbctn.set_taborder("29");
                p.staRadmFbctn.set_cssclass("sta_WF_Label_E");
                p.staRadmFbctn.set_text("상표없이 임의제작 또는 구조변경 협력사");
                p.staRadmFbctn.move("10","98","100%","46",null,null);

                p.edtRadmFbctn.set_taborder("30");
                p.edtRadmFbctn.set_innerdataset(divForm_form_Div03_form_edtRadmFbctn_innerdataset);
                p.edtRadmFbctn.set_codecolumn("codecolumn");
                p.edtRadmFbctn.set_datacolumn("datacolumn");
                p.edtRadmFbctn.set_direction("vertical");
                p.edtRadmFbctn.set_fittocontents("width");
                p.edtRadmFbctn.set_index("-1");
                p.edtRadmFbctn.move("200.00","328","100%","49.37",null,null);

                p.Panel04_01.set_taborder("31");
                p.Panel04_01.set_type("vertical");
                p.Panel04_01.set_flexgrow("1");
                p.Panel04_01.set_minwidth("");
                p.Panel04_01.move("10.00","98","305","86",null,null);

                p.Panel04.set_taborder("32");
                p.Panel04.set_horizontalgap("20");
                p.Panel04.set_flexcrossaxiswrapalign("start");
                p.Panel04.set_flexwrap("wrap");
                p.Panel04.set_fittocontents("height");
                p.Panel04.set_verticalgap("0");
                p.Panel04.set_spacing("0px 20px 10px 20px");
                p.Panel04.set_cssclass("pal_WF_DtlBg");
                p.Panel04.set_visible("false");
                p.Panel04.move("0","242","100.00%","96",null,null);

                p.staRvwrMntnMdng.set_taborder("33");
                p.staRvwrMntnMdng.set_text("검토자 유지보수업체");
                p.staRvwrMntnMdng.set_cssclass("sta_WF_Label_E");
                p.staRvwrMntnMdng.move("10","98","100%","46",null,null);

                p.edtRvwrMntnMdng.set_taborder("34");
                p.edtRvwrMntnMdng.set_readonly("false");
                p.edtRvwrMntnMdng.move("10.00","158","100%","40",null,null);

                p.Panel00_00_01_00_00_01_00.set_taborder("35");
                p.Panel00_00_01_00_00_01_00.set_type("vertical");
                p.Panel00_00_01_00_00_01_00.set_flexgrow("1");
                p.Panel00_00_01_00_00_01_00.set_minwidth("");
                p.Panel00_00_01_00_00_01_00.move("10.00","98","305","86",null,null);

                p.staLabel050401.set_taborder("36");
                p.staLabel050401.set_text("난로 사용 신청을 위한 개인정보 수집〮이용 동의서");
                p.staLabel050401.set_cssclass("sta_WF_Label");
                p.staLabel050401.move("10","98","100%","46",null,null);

                p.Static00.set_taborder("37");
                p.Static00.set_text("입주자서비스포털은 <fc v=\'#1e4ebe\'>닌로 사용</fc>에 대한 <fc v=\'#1e4ebe\'>난로 사용  신청</fc> 서비스 제공을 위해 아래와 같이 개인정보를 수집·이용 하고자 합니다.\r\n내용을 자세히 읽으신 후 동의 여부를 결정하여 주시길 바랍니다. ");
                p.Static00.set_fittocontents("height");
                p.Static00.set_usedecorate("true");
                p.Static00.set_wordWrap("char");
                p.Static00.move("36","382","93.07%","38",null,null);

                p.Static01.set_taborder("38");
                p.Static01.set_text("▶ 개인정보 수집·이용 내역");
                p.Static01.move("88","596","100%","40",null,null);

                p.Grid00_00_02.set_taborder("39");
                p.Grid00_00_02.set_binddataset("Dataset01");
                p.Grid00_00_02.set_autofittype("col");
                p.Grid00_00_02.set_useselcolor("false");
                p.Grid00_00_02.move("86","552","100%","160",null,null);

                p.Panel01_01.set_taborder("40");
                p.Panel01_01.set_type("vertical");
                p.Panel01_01.move("218","688","100%","200",null,null);

                p.Static00_00_02.set_taborder("41");
                p.Static00_00_02.set_text("※ 위의 개인정보 수집 〮이용에 대한 거부할 권리가 있습니다., 그러나 동의를 거부할 경우 난로 사용 신청을 할 수 없습니다");
                p.Static00_00_02.set_usedecorate("true");
                p.Static00_00_02.set_cssclass("sta_WF_TxtRed");
                p.Static00_00_02.set_wordWrap("char");
                p.Static00_00_02.set_fittocontents("height");
                p.Static00_00_02.move("36","382","100%","40",null,null);

                p.Pnl05040101.set_taborder("42");
                p.Pnl05040101.set_type("vertical");
                p.Pnl05040101.set_cssclass("pal_WF_TxtAreaBox");
                p.Pnl05040101.set_spacing("8px 15px 8px 15px");
                p.Pnl05040101.set_verticalgap("10");
                p.Pnl05040101.set_minwidth("");
                p.Pnl05040101.move("20.00","374","100%","336",null,null);

                p.Pnl050401.set_taborder("43");
                p.Pnl050401.set_type("vertical");
                p.Pnl050401.set_flexgrow("1");
                p.Pnl050401.set_verticalgap("10");
                p.Pnl050401.set_minwidth("");
                p.Pnl050401.move("10.00","98","970","392",null,null);

                p.Panel05.set_taborder("44");
                p.Panel05.set_horizontalgap("20");
                p.Panel05.set_flexcrossaxiswrapalign("start");
                p.Panel05.set_flexwrap("wrap");
                p.Panel05.set_fittocontents("height");
                p.Panel05.set_verticalgap("0");
                p.Panel05.set_spacing("0px 20px 10px 20px");
                p.Panel05.set_cssclass("pal_WF_DtlBg");
                p.Panel05.set_type("horizontal");
                p.Panel05.set_visible("true");
                p.Panel05.move("0","60","100.00%","403",null,null);

                p.staPrvcEsntlClctAgreYn.set_taborder("45");
                p.staPrvcEsntlClctAgreYn.set_text("개인정보(필수) 수집이용 동의여부");
                p.staPrvcEsntlClctAgreYn.set_cssclass("sta_WF_Label_E");
                p.staPrvcEsntlClctAgreYn.move("876","150","100%","46",null,null);

                p.chkPrvcEsntlClctAgreYn.set_taborder("46");
                p.chkPrvcEsntlClctAgreYn.move("107","1400","150","40",null,null);

                p.Panel01_01_00_00_01_00_00_01_00_00.set_taborder("47");
                p.Panel01_01_00_00_01_00_00_01_00_00.set_type("vertical");
                p.Panel01_01_00_00_01_00_00_01_00_00.set_fittocontents("height");
                p.Panel01_01_00_00_01_00_00_01_00_00.move("20","0","980","89",null,null);

                p.Panel06.set_taborder("48");
                p.Panel06.set_horizontalgap("20");
                p.Panel06.set_flexcrossaxiswrapalign("start");
                p.Panel06.set_flexwrap("wrap");
                p.Panel06.set_fittocontents("height");
                p.Panel06.set_verticalgap("0");
                p.Panel06.set_spacing("0px 20px 10px 20px");
                p.Panel06.set_cssclass("pal_WF_DtlBg");
                p.Panel06.set_type("horizontal");
                p.Panel06.move("0","1370","100.00%","100",null,null);
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
            //-- Default Layout : this.divForm.form.Div04.form.divGrd00.form
            obj = new Layout("default","",0,0,this.divForm.form.Div04.form.divGrd00.form,
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
            this.divForm.form.Div04.form.divGrd00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div04.form.divGrd00.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div04.form.divGrd00.form,
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
            this.divForm.form.Div04.form.divGrd00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div04.form
            obj = new Layout("default","",0,0,this.divForm.form.Div04.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staCnvyMttr.set_taborder("0");
                p.staCnvyMttr.set_text("전달사항");
                p.staCnvyMttr.set_cssclass("sta_WF_Label");
                p.staCnvyMttr.move("10","98","100%","46",null,null);

                p.txtCnvyMttr.set_taborder("1");
                p.txtCnvyMttr.set_displaynulltext("내용입력");
                p.txtCnvyMttr.set_readonly("false");
                p.txtCnvyMttr.move("43","1193","100%","100",null,null);

                p.Panel00_01_00.set_taborder("2");
                p.Panel00_01_00.set_background("#ffffff");
                p.Panel00_01_00.set_verticalgap("10");
                p.Panel00_01_00.set_type("vertical");
                p.Panel00_01_00.set_fittocontents("height");
                p.Panel00_01_00.move("43.00","1193","100%","100",null,null);

                p.Panel00_02_00.set_taborder("3");
                p.Panel00_02_00.set_type("vertical");
                p.Panel00_02_00.set_flexgrow("1");
                p.Panel00_02_00.set_fittocontents("height");
                p.Panel00_02_00.set_minwidth("");
                p.Panel00_02_00.move("20.00","950","980","146",null,null);

                p.Panel01.set_taborder("4");
                p.Panel01.set_horizontalgap("20");
                p.Panel01.set_flexcrossaxiswrapalign("start");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_verticalgap("0");
                p.Panel01.set_spacing("0px 20px 10px 20px");
                p.Panel01.set_cssclass("pal_WF_DtlBg");
                p.Panel01.set_type("horizontal");
                p.Panel01.set_visible("true");
                p.Panel01.move("51","1527","100.00%","157",null,null);

                p.divGrd00.set_taborder("5");
                p.divGrd00.set_text("Div01");
                p.divGrd00.set_fittocontents("height");
                p.divGrd00.set_formscrollbartype("none none");
                p.divGrd00.set_formscrolltype("none");
                p.divGrd00.move("0","30","100%","187",null,null);

                p.Panel02.set_taborder("6");
                p.Panel02.set_horizontalgap("20");
                p.Panel02.set_flexcrossaxiswrapalign("start");
                p.Panel02.set_flexwrap("wrap");
                p.Panel02.set_fittocontents("height");
                p.Panel02.set_verticalgap("0");
                p.Panel02.set_spacing("10px 20px 10px 20px");
                p.Panel02.set_cssclass("pal_WF_DtlBg");
                p.Panel02.set_type("horizontal");
                p.Panel02.set_visible("true");
                p.Panel02.move("0","60","100.00%","208",null,null);

                p.staFrdpmtCnvyMttr.set_taborder("7");
                p.staFrdpmtCnvyMttr.set_text("소방대전달사항");
                p.staFrdpmtCnvyMttr.set_cssclass("sta_WF_Label");
                p.staFrdpmtCnvyMttr.move("10","98","100%","46",null,null);

                p.txtFrdpmtCnvyMttr.set_taborder("8");
                p.txtFrdpmtCnvyMttr.set_displaynulltext("내용입력");
                p.txtFrdpmtCnvyMttr.set_readonly("false");
                p.txtFrdpmtCnvyMttr.move("43","1193","100%","100",null,null);

                p.Panel00_01_00_00.set_taborder("9");
                p.Panel00_01_00_00.set_background("#ffffff");
                p.Panel00_01_00_00.set_verticalgap("10");
                p.Panel00_01_00_00.set_type("vertical");
                p.Panel00_01_00_00.set_fittocontents("height");
                p.Panel00_01_00_00.move("43.00","1193","100%","100",null,null);

                p.Panel00_02_00_00.set_taborder("10");
                p.Panel00_02_00_00.set_type("vertical");
                p.Panel00_02_00_00.set_flexgrow("1");
                p.Panel00_02_00_00.set_fittocontents("height");
                p.Panel00_02_00_00.set_minwidth("");
                p.Panel00_02_00_00.move("20.00","950","980","146",null,null);

                p.Panel03.set_taborder("11");
                p.Panel03.set_horizontalgap("20");
                p.Panel03.set_flexcrossaxiswrapalign("start");
                p.Panel03.set_flexwrap("wrap");
                p.Panel03.set_fittocontents("height");
                p.Panel03.set_verticalgap("0");
                p.Panel03.set_spacing("0px 20px 10px 20px");
                p.Panel03.set_cssclass("pal_WF_DtlBg");
                p.Panel03.set_type("horizontal");
                p.Panel03.set_visible("false");
                p.Panel03.move("51","1527","100.00%","157",null,null);

                p.staCpatcoPrcr.set_taborder("12");
                p.staCpatcoPrcr.set_text("협력사처리자");
                p.staCpatcoPrcr.set_cssclass("sta_WF_Label_E");
                p.staCpatcoPrcr.move("10","98","100%","46",null,null);

                p.edtCpatcoPrcr.set_taborder("13");
                p.edtCpatcoPrcr.set_readonly("false");
                p.edtCpatcoPrcr.move("10.00","158","100%","40",null,null);

                p.Panel00_00_00_00_01.set_taborder("14");
                p.Panel00_00_00_00_01.set_type("vertical");
                p.Panel00_00_00_00_01.set_flexgrow("1");
                p.Panel00_00_00_00_01.set_minwidth("");
                p.Panel00_00_00_00_01.move("10.00","98","305","86",null,null);

                p.staCpatcoPrcrFrdpmt.set_taborder("15");
                p.staCpatcoPrcrFrdpmt.set_text("협력사처리자(소방대)");
                p.staCpatcoPrcrFrdpmt.set_cssclass("sta_WF_Label_E");
                p.staCpatcoPrcrFrdpmt.move("10","98","100%","46",null,null);

                p.edtCpatcoPrcrFrdpmt.set_taborder("16");
                p.edtCpatcoPrcrFrdpmt.set_readonly("false");
                p.edtCpatcoPrcrFrdpmt.move("10.00","158","100%","40",null,null);

                p.Panel00_00_01_00_00_01.set_taborder("17");
                p.Panel00_00_01_00_00_01.set_type("vertical");
                p.Panel00_00_01_00_00_01.set_flexgrow("1");
                p.Panel00_00_01_00_00_01.set_minwidth("");
                p.Panel00_00_01_00_00_01.move("10.00","98","305","86",null,null);

                p.Panel04.set_taborder("18");
                p.Panel04.set_horizontalgap("20");
                p.Panel04.set_flexcrossaxiswrapalign("start");
                p.Panel04.set_flexwrap("wrap");
                p.Panel04.set_fittocontents("height");
                p.Panel04.set_verticalgap("0");
                p.Panel04.set_spacing("0px 20px 10px 20px");
                p.Panel04.set_cssclass("pal_WF_DtlBg");
                p.Panel04.set_type("horizontal");
                p.Panel04.set_visible("false");
                p.Panel04.move("0","60","100.00%","96",null,null);

                p.staGrndsVrfc.set_taborder("19");
                p.staGrndsVrfc.set_text("현장점검내역");
                p.staGrndsVrfc.set_cssclass("sta_WF_Label_E");
                p.staGrndsVrfc.move("10","98","100%","46",null,null);

                p.edtGrndsVrfc.set_taborder("20");
                p.edtGrndsVrfc.set_readonly("false");
                p.edtGrndsVrfc.move("10.00","158","100%","40",null,null);

                p.Panel00_00_00_00_01_00.set_taborder("21");
                p.Panel00_00_00_00_01_00.set_type("vertical");
                p.Panel00_00_00_00_01_00.set_flexgrow("1");
                p.Panel00_00_00_00_01_00.set_minwidth("");
                p.Panel00_00_00_00_01_00.move("10.00","98","305","86",null,null);

                p.Panel05.set_taborder("22");
                p.Panel05.set_horizontalgap("20");
                p.Panel05.set_flexcrossaxiswrapalign("start");
                p.Panel05.set_flexwrap("wrap");
                p.Panel05.set_fittocontents("height");
                p.Panel05.set_verticalgap("0");
                p.Panel05.set_spacing("0px 20px 10px 20px");
                p.Panel05.set_cssclass("pal_WF_DtlBg");
                p.Panel05.set_type("horizontal");
                p.Panel05.set_visible("false");
                p.Panel05.move("0","60","100.00%","96",null,null);

                p.staElctblLevyYn.set_taborder("23");
                p.staElctblLevyYn.set_cssclass("sta_WF_Label_E");
                p.staElctblLevyYn.set_text("전기료 부과여부");
                p.staElctblLevyYn.move("10","98","100%","46",null,null);

                p.rdoElctblLevyYn.set_taborder("24");
                p.rdoElctblLevyYn.set_innerdataset(divForm_form_Div04_form_rdoElctblLevyYn_innerdataset);
                p.rdoElctblLevyYn.set_codecolumn("codecolumn");
                p.rdoElctblLevyYn.set_datacolumn("datacolumn");
                p.rdoElctblLevyYn.set_direction("vertical");
                p.rdoElctblLevyYn.set_fittocontents("width");
                p.rdoElctblLevyYn.set_index("-1");
                p.rdoElctblLevyYn.move("200.00","328","100%","49.37",null,null);

                p.Panel04_01.set_taborder("25");
                p.Panel04_01.set_type("vertical");
                p.Panel04_01.set_flexgrow("1");
                p.Panel04_01.set_minwidth("");
                p.Panel04_01.move("10.00","98","305","86",null,null);

                p.Panel06.set_taborder("26");
                p.Panel06.set_horizontalgap("20");
                p.Panel06.set_flexcrossaxiswrapalign("start");
                p.Panel06.set_flexwrap("wrap");
                p.Panel06.set_fittocontents("height");
                p.Panel06.set_verticalgap("0");
                p.Panel06.set_spacing("0px 20px 10px 20px");
                p.Panel06.set_cssclass("pal_WF_DtlBg");
                p.Panel06.set_visible("false");
                p.Panel06.move("0","242","100.00%","96",null,null);

                p.staAprvYn.set_taborder("27");
                p.staAprvYn.set_cssclass("sta_WF_Label_E");
                p.staAprvYn.set_text("승인여부");
                p.staAprvYn.move("10","98","100%","46",null,null);

                p.rdoAprvYn.set_taborder("28");
                p.rdoAprvYn.set_innerdataset(divForm_form_Div04_form_rdoAprvYn_innerdataset);
                p.rdoAprvYn.set_codecolumn("codecolumn");
                p.rdoAprvYn.set_datacolumn("datacolumn");
                p.rdoAprvYn.set_direction("vertical");
                p.rdoAprvYn.set_fittocontents("width");
                p.rdoAprvYn.set_index("-1");
                p.rdoAprvYn.move("200.00","328","100%","49.37",null,null);

                p.Panel04_01_00.set_taborder("29");
                p.Panel04_01_00.set_type("vertical");
                p.Panel04_01_00.set_flexgrow("1");
                p.Panel04_01_00.set_minwidth("");
                p.Panel04_01_00.move("10.00","98","305","86",null,null);

                p.staCpctRvwPassYn.set_taborder("30");
                p.staCpctRvwPassYn.set_cssclass("sta_WF_Label_E");
                p.staCpctRvwPassYn.set_text("용량검토 합격여부");
                p.staCpctRvwPassYn.move("10","98","100%","46",null,null);

                p.rdoCpctRvwPassYn.set_taborder("31");
                p.rdoCpctRvwPassYn.set_innerdataset(divForm_form_Div04_form_rdoCpctRvwPassYn_innerdataset);
                p.rdoCpctRvwPassYn.set_codecolumn("codecolumn");
                p.rdoCpctRvwPassYn.set_datacolumn("datacolumn");
                p.rdoCpctRvwPassYn.set_direction("vertical");
                p.rdoCpctRvwPassYn.set_fittocontents("width");
                p.rdoCpctRvwPassYn.set_index("-1");
                p.rdoCpctRvwPassYn.move("200.00","328","100%","49.37",null,null);

                p.Panel04_01_01.set_taborder("32");
                p.Panel04_01_01.set_type("vertical");
                p.Panel04_01_01.set_flexgrow("1");
                p.Panel04_01_01.set_minwidth("");
                p.Panel04_01_01.move("10.00","98","305","86",null,null);

                p.Panel04_01_00_00.set_taborder("33");
                p.Panel04_01_00_00.set_type("vertical");
                p.Panel04_01_00_00.set_flexgrow("1");
                p.Panel04_01_00_00.set_minwidth("");
                p.Panel04_01_00_00.move("10.00","98","305","0",null,null);

                p.Panel07.set_taborder("34");
                p.Panel07.set_horizontalgap("20");
                p.Panel07.set_flexcrossaxiswrapalign("start");
                p.Panel07.set_flexwrap("wrap");
                p.Panel07.set_fittocontents("height");
                p.Panel07.set_verticalgap("0");
                p.Panel07.set_spacing("0px 20px 10px 20px");
                p.Panel07.set_cssclass("pal_WF_DtlBg");
                p.Panel07.set_visible("false");
                p.Panel07.move("0","242","100.00%","96",null,null);

                p.staHtwrYn.set_taborder("35");
                p.staHtwrYn.set_cssclass("sta_WF_Label_E");
                p.staHtwrYn.set_text("열선유무");
                p.staHtwrYn.move("10","98","100%","46",null,null);

                p.rdoHtwrYn.set_taborder("36");
                p.rdoHtwrYn.set_innerdataset(divForm_form_Div04_form_rdoHtwrYn_innerdataset);
                p.rdoHtwrYn.set_codecolumn("codecolumn");
                p.rdoHtwrYn.set_datacolumn("datacolumn");
                p.rdoHtwrYn.set_direction("vertical");
                p.rdoHtwrYn.set_fittocontents("width");
                p.rdoHtwrYn.set_index("-1");
                p.rdoHtwrYn.move("200.00","328","100%","49.37",null,null);

                p.Panel04_01_02.set_taborder("37");
                p.Panel04_01_02.set_type("vertical");
                p.Panel04_01_02.set_flexgrow("1");
                p.Panel04_01_02.set_minwidth("");
                p.Panel04_01_02.move("10.00","98","305","86",null,null);

                p.Panel04_01_00_01.set_taborder("38");
                p.Panel04_01_00_01.set_type("vertical");
                p.Panel04_01_00_01.set_flexgrow("1");
                p.Panel04_01_00_01.set_minwidth("");
                p.Panel04_01_00_01.move("10.00","98","305","0",null,null);

                p.Panel08.set_taborder("39");
                p.Panel08.set_horizontalgap("20");
                p.Panel08.set_flexcrossaxiswrapalign("start");
                p.Panel08.set_flexwrap("wrap");
                p.Panel08.set_fittocontents("height");
                p.Panel08.set_verticalgap("0");
                p.Panel08.set_spacing("0px 20px 10px 20px");
                p.Panel08.set_cssclass("pal_WF_DtlBg");
                p.Panel08.set_visible("false");
                p.Panel08.move("0","242","100.00%","96",null,null);

                p.staPayPicPrvcClctUtztnWtcs01_00.set_taborder("40");
                p.staPayPicPrvcClctUtztnWtcs01_00.set_text("흠~뭐지?승인내역출력..?");
                p.staPayPicPrvcClctUtztnWtcs01_00.set_cssclass("sta_WF_Label_E");
                p.staPayPicPrvcClctUtztnWtcs01_00.set_flexgrow("1");
                p.staPayPicPrvcClctUtztnWtcs01_00.move("0","44","305","46",null,null);

                p.btnPayPicPrvcClctUtztnWtcsSample00.set_taborder("41");
                p.btnPayPicPrvcClctUtztnWtcsSample00.set_text("동의서 양식 다운로드");
                p.btnPayPicPrvcClctUtztnWtcsSample00.set_cssclass("btn_WF_FileDw02");
                p.btnPayPicPrvcClctUtztnWtcsSample00.set_fittocontents("width");
                p.btnPayPicPrvcClctUtztnWtcsSample00.set_enable("true");
                p.btnPayPicPrvcClctUtztnWtcsSample00.move("64.00","0","190","40",null,null);

                p.btnPayPicPrvcClctUtztnWtcsFile01_01.set_taborder("42");
                p.btnPayPicPrvcClctUtztnWtcsFile01_01.set_text("파일선택");
                p.btnPayPicPrvcClctUtztnWtcsFile01_01.set_cssclass("btn_WF_FileUp");
                p.btnPayPicPrvcClctUtztnWtcsFile01_01.move("124","58","116","40",null,null);

                p.panBtnFile01_00.set_taborder("43");
                p.panBtnFile01_00.set_flexgrow("1");
                p.panBtnFile01_00.set_flexcrossaxisalign("start");
                p.panBtnFile01_00.set_flexmainaxisalign("end");
                p.panBtnFile01_00.set_horizontalgap("10");
                p.panBtnFile01_00.move("433","58","305","46",null,null);

                p.panTitle01_00.set_taborder("44");
                p.panTitle01_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle01_00.set_flexwrap("wrap");
                p.panTitle01_00.set_fittocontents("height");
                p.panTitle01_00.move("0","124","100%","46",null,null);

                p.grdPayPicPrvcClctUtztnWtcs01_00.set_taborder("45");
                p.grdPayPicPrvcClctUtztnWtcs01_00.set_binddataset("dsFile");
                p.grdPayPicPrvcClctUtztnWtcs01_00.set_autofittype("col");
                p.grdPayPicPrvcClctUtztnWtcs01_00.set_cssclass("grd_WF_FileAdd");
                p.grdPayPicPrvcClctUtztnWtcs01_00.set_scrollbartype("none none");
                p.grdPayPicPrvcClctUtztnWtcs01_00.move("20.00","114","100%","40",null,null);

                p.sta00_00_00_01_01_00.set_taborder("46");
                p.sta00_00_00_01_01_00.set_text("JPG,PNG,BMP,PDF만 첨부가능");
                p.sta00_00_00_01_01_00.set_cssclass("sta_WF_Des");
                p.sta00_00_00_01_01_00.set_fittocontents("height");
                p.sta00_00_00_01_01_00.move("20","20","100%","30",null,null);

                p.Panel01_00_01_00.set_taborder("47");
                p.Panel01_00_01_00.set_type("vertical");
                p.Panel01_00_01_00.set_verticalgap("10");
                p.Panel01_00_01_00.move("192","1038","100.00%","80",null,null);

                p.panFile1.set_taborder("48");
                p.panFile1.set_fittocontents("height");
                p.panFile1.set_spacing("10px 20px 10px 20px");
                p.panFile1.set_flexwrap("wrap");
                p.panFile1.set_cssclass("pal_WF_DtlBg");
                p.panFile1.set_verticalgap("4");
                p.panFile1.set_visible("false");
                p.panFile1.move("0","42","100.00%","151",null,null);

                p.staDocOtpt.set_taborder("49");
                p.staDocOtpt.set_text("문서출력");
                p.staDocOtpt.set_cssclass("sta_WF_Label_E");
                p.staDocOtpt.set_flexgrow("1");
                p.staDocOtpt.move("0","44","305","46",null,null);

                p.btnDocOtpt.set_taborder("50");
                p.btnDocOtpt.set_text("난로사용 승인서 출력");
                p.btnDocOtpt.set_cssclass("btn_WF_FileDw02");
                p.btnDocOtpt.set_fittocontents("width");
                p.btnDocOtpt.set_enable("true");
                p.btnDocOtpt.move("64.00","0","190","40",null,null);

                p.panBtnFile01_00_00.set_taborder("51");
                p.panBtnFile01_00_00.set_flexgrow("1");
                p.panBtnFile01_00_00.set_flexcrossaxisalign("start");
                p.panBtnFile01_00_00.set_flexmainaxisalign("end");
                p.panBtnFile01_00_00.set_horizontalgap("10");
                p.panBtnFile01_00_00.move("433","58","305","46",null,null);

                p.panTitle01_00_00.set_taborder("52");
                p.panTitle01_00_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle01_00_00.set_flexwrap("wrap");
                p.panTitle01_00_00.set_fittocontents("height");
                p.panTitle01_00_00.move("0","124","100%","46",null,null);

                p.panFile2.set_taborder("53");
                p.panFile2.set_fittocontents("height");
                p.panFile2.set_spacing("10px 20px 10px 20px");
                p.panFile2.set_flexwrap("wrap");
                p.panFile2.set_cssclass("pal_WF_DtlBg");
                p.panFile2.set_verticalgap("4");
                p.panFile2.set_visible("false");
                p.panFile2.move("0","42","100.00%","67",null,null);

                p.staMtlyAcinspDsctn.set_taborder("54");
                p.staMtlyAcinspDsctn.set_text("월별실사내역");
                p.staMtlyAcinspDsctn.set_cssclass("sta_WF_Label_E");
                p.staMtlyAcinspDsctn.move("10","98","100%","46",null,null);

                p.txtMtlyAcinspDsctn.set_taborder("55");
                p.txtMtlyAcinspDsctn.set_displaynulltext("내용입력");
                p.txtMtlyAcinspDsctn.set_readonly("false");
                p.txtMtlyAcinspDsctn.move("43","1193","100%","100",null,null);

                p.Panel00_01_00_00_00.set_taborder("56");
                p.Panel00_01_00_00_00.set_background("#ffffff");
                p.Panel00_01_00_00_00.set_verticalgap("10");
                p.Panel00_01_00_00_00.set_type("vertical");
                p.Panel00_01_00_00_00.set_fittocontents("height");
                p.Panel00_01_00_00_00.move("43.00","1193","100%","100",null,null);

                p.Panel00_02_00_00_00.set_taborder("57");
                p.Panel00_02_00_00_00.set_type("vertical");
                p.Panel00_02_00_00_00.set_flexgrow("1");
                p.Panel00_02_00_00_00.set_fittocontents("height");
                p.Panel00_02_00_00_00.set_minwidth("");
                p.Panel00_02_00_00_00.move("20.00","950","980","146",null,null);

                p.Panel09.set_taborder("58");
                p.Panel09.set_horizontalgap("20");
                p.Panel09.set_flexcrossaxiswrapalign("start");
                p.Panel09.set_flexwrap("wrap");
                p.Panel09.set_fittocontents("height");
                p.Panel09.set_verticalgap("0");
                p.Panel09.set_spacing("0px 20px 10px 20px");
                p.Panel09.set_cssclass("pal_WF_DtlBg");
                p.Panel09.set_type("horizontal");
                p.Panel09.set_visible("false");
                p.Panel09.move("51","1527","100.00%","157",null,null);
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
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnMinTitle.set_taborder("5");
                p.btnMinTitle.set_cssclass("btn_WF_ACMinus");
                p.btnMinTitle.move("460","-55","34","34",null,null);

                p.sub_tit00.set_taborder("2");
                p.sub_tit00.set_background("#ffffff");
                p.sub_tit00.set_flexcrossaxisalign("end");
                p.sub_tit00.move("955","18","100%","58",null,null);

                p.staSubTitle02_00_03.set_taborder("3");
                p.staSubTitle02_00_03.set_text("서비스 흐름 및 작업방법 안내(타이틀미정)");
                p.staSubTitle02_00_03.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_03.move("0","-53","50%","50",null,null);

                p.Panel01_02_03.set_taborder("4");
                p.Panel01_02_03.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_03.set_spacing("0px 10px");
                p.Panel01_02_03.set_horizontalgap("10");
                p.Panel01_02_03.set_flexcrossaxisalign("center");
                p.Panel01_02_03.set_flexmainaxisalign("end");
                p.Panel01_02_03.move("505","-53","50%","50",null,null);

                p.divInfoGuide.set_taborder("1");
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

                p.staSubTitle02_00_00_00.set_taborder("6");
                p.staSubTitle02_00_00_00.set_text("반려확인/난로해지");
                p.staSubTitle02_00_00_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_00_00.move("1630.00","690","50%","50",null,null);

                p.btnMinCncltn.set_taborder("7");
                p.btnMinCncltn.set_cssclass("btn_WF_ACMinus");
                p.btnMinCncltn.move("2890.00","692","34","34",null,null);

                p.Panel01_02_00_00.set_taborder("8");
                p.Panel01_02_00_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_00_00.set_spacing("0px 10px");
                p.Panel01_02_00_00.set_horizontalgap("10");
                p.Panel01_02_00_00.set_flexcrossaxisalign("center");
                p.Panel01_02_00_00.set_flexmainaxisalign("end");
                p.Panel01_02_00_00.move("2340.00","690","50%","50",null,null);

                p.sub_tit.set_taborder("9");
                p.sub_tit.set_background("#ffffff");
                p.sub_tit.set_flexcrossaxisalign("end");
                p.sub_tit.set_visible("false");
                p.sub_tit.move("1630","674","100%","66",null,null);

                p.Div00.set_taborder("10");
                p.Div00.set_text("Div00");
                p.Div00.set_cssclass("div_WF_Bg");
                p.Div00.set_fittocontents("height");
                p.Div00.set_visible("false");
                p.Div00.move("0","30","100%","658",null,null);

                p.staSubTitle01.set_taborder("11");
                p.staSubTitle01.set_text("신청자 정보");
                p.staSubTitle01.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle01.move("1630.00","690","50%","50",null,null);

                p.btnMinAplcntInfo.set_taborder("12");
                p.btnMinAplcntInfo.set_cssclass("btn_WF_ACMinus");
                p.btnMinAplcntInfo.move("2890.00","692","34","34",null,null);

                p.Panel01.set_taborder("13");
                p.Panel01.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01.set_spacing("0px 10px");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_flexcrossaxisalign("center");
                p.Panel01.set_flexmainaxisalign("end");
                p.Panel01.move("2340.00","690","50%","50",null,null);

                p.sub_tit01.set_taborder("14");
                p.sub_tit01.set_background("#ffffff");
                p.sub_tit01.set_flexcrossaxisalign("end");
                p.sub_tit01.move("1630","674","100%","66",null,null);

                p.Div01.set_taborder("15");
                p.Div01.set_text("Div00");
                p.Div01.set_cssclass("div_WF_Bg");
                p.Div01.set_fittocontents("height");
                p.Div01.set_visible("false");
                p.Div01.move("0","0","100%","1377",null,null);

                p.staSubTitle02_00_00.set_taborder("16");
                p.staSubTitle02_00_00.set_text("신청 정보");
                p.staSubTitle02_00_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_00.move("1630.00","690","50%","50",null,null);

                p.btnMinAplyPstn.set_taborder("17");
                p.btnMinAplyPstn.set_cssclass("btn_WF_ACMinus");
                p.btnMinAplyPstn.move("2890.00","692","34","34",null,null);

                p.Panel01_02_00.set_taborder("18");
                p.Panel01_02_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_00.set_spacing("0px 10px");
                p.Panel01_02_00.set_horizontalgap("10");
                p.Panel01_02_00.set_flexcrossaxisalign("center");
                p.Panel01_02_00.set_flexmainaxisalign("end");
                p.Panel01_02_00.move("2340.00","690","50%","50",null,null);

                p.sub_tit02.set_taborder("19");
                p.sub_tit02.set_background("#ffffff");
                p.sub_tit02.set_flexcrossaxisalign("end");
                p.sub_tit02.move("1630","674","100%","66",null,null);

                p.Div02.set_taborder("20");
                p.Div02.set_text("Div00");
                p.Div02.set_cssclass("div_WF_Bg");
                p.Div02.set_fittocontents("height");
                p.Div02.set_visible("false");
                p.Div02.move("0","376.428","100%","2786.94",null,null);

                p.staSubTitle02_00_02.set_taborder("21");
                p.staSubTitle02_00_02.set_text("전기난로 용량검토서");
                p.staSubTitle02_00_02.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_02.move("1630.00","690","50%","50",null,null);

                p.btnMinRvw.set_taborder("22");
                p.btnMinRvw.set_cssclass("btn_WF_ACMinus");
                p.btnMinRvw.move("2890.00","692","34","34",null,null);

                p.Panel01_02_02.set_taborder("23");
                p.Panel01_02_02.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_02.set_spacing("0px 10px");
                p.Panel01_02_02.set_horizontalgap("10");
                p.Panel01_02_02.set_flexcrossaxisalign("center");
                p.Panel01_02_02.set_flexmainaxisalign("end");
                p.Panel01_02_02.move("2340.00","690","50%","50",null,null);

                p.sub_tit03.set_taborder("24");
                p.sub_tit03.set_background("#ffffff");
                p.sub_tit03.set_flexcrossaxisalign("end");
                p.sub_tit03.set_visible("false");
                p.sub_tit03.move("1630","674","100%","66",null,null);

                p.Div03.set_taborder("25");
                p.Div03.set_text("Div00");
                p.Div03.set_cssclass("div_WF_Bg");
                p.Div03.set_fittocontents("height");
                p.Div03.set_visible("false");
                p.Div03.move("0","30","100%","1555",null,null);

                p.staSubTitle02_00_02_00.set_taborder("26");
                p.staSubTitle02_00_02_00.set_text("처리내역");
                p.staSubTitle02_00_02_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_02_00.move("1630.00","690","50%","50",null,null);

                p.btnMinPrcsDsctn.set_taborder("27");
                p.btnMinPrcsDsctn.set_cssclass("btn_WF_ACMinus");
                p.btnMinPrcsDsctn.move("2890.00","692","34","34",null,null);

                p.Panel01_02_02_00.set_taborder("28");
                p.Panel01_02_02_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_02_00.set_spacing("0px 10px");
                p.Panel01_02_02_00.set_horizontalgap("10");
                p.Panel01_02_02_00.set_flexcrossaxisalign("center");
                p.Panel01_02_02_00.set_flexmainaxisalign("end");
                p.Panel01_02_02_00.move("2340.00","690","50%","50",null,null);

                p.sub_tit04.set_taborder("29");
                p.sub_tit04.set_background("#ffffff");
                p.sub_tit04.set_flexcrossaxisalign("end");
                p.sub_tit04.set_visible("false");
                p.sub_tit04.move("1630","674","100%","66",null,null);

                p.Div04.set_taborder("30");
                p.Div04.set_text("Div00");
                p.Div04.set_cssclass("div_WF_Bg");
                p.Div04.set_fittocontents("height");
                p.Div04.set_visible("false");
                p.Div04.move("0","30","100%","1377",null,null);
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
                p.btn00.set_text("반려확인/난로해지");
                p.btn00.set_cssclass("btn_WF_Quick");
                p.btn00.set_visible("false");
                p.btn00.move("17","20","100%","45",null,null);

                p.btn01.set_taborder("1");
                p.btn01.set_text("신청자정보");
                p.btn01.set_cssclass("btn_WF_Quick_S");
                p.btn01.move("17.00","110","100%","45",null,null);

                p.btn02.set_taborder("2");
                p.btn02.set_text("신청정보");
                p.btn02.set_cssclass("btn_WF_Quick");
                p.btn02.move("17.00","110","100%","45",null,null);

                p.btn03.set_taborder("3");
                p.btn03.set_text("전기난로 용량검토서");
                p.btn03.set_cssclass("btn_WF_Quick");
                p.btn03.move("17.00","110","100%","45",null,null);

                p.btn04.set_taborder("4");
                p.btn04.set_text("처리내역");
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
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("난로사용신청서작성");

                p.divTitle.set_taborder("3");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_cssclass("div_WF_QuickFrBg");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("height");
                p.divForm.move("0","divTitle:10",null,"9361.93","60",null);

                p.divQuick.set_taborder("1");
                p.divQuick.set_text("div00");
                p.divQuick.set_cssclass("div_WF_QuickMenu");
                p.divQuick.set_fittocontents("height");
                p.divQuick.move(null,"62","296","246","62",null);

                p.divBtn.set_taborder("2");
                p.divBtn.set_text("div00");
                p.divBtn.set_cssclass("div_WF_QuickBtnBg");
                p.divBtn.set_fittocontents("height");
                p.divBtn.move(null,"divQuick:0","296","181","62",null);

                p.RaonkUpload.set_taborder("4");
                p.RaonkUpload.set_DevelopLangage("JAVA");
                p.RaonkUpload.set_ExtensionAllowOrLimit("1");
                p.RaonkUpload.set_HandlerUrl("http://10.180.1.229:8080/common/uploadDownload.do");
                p.RaonkUpload.set_RunTimes("html5");
                p.RaonkUpload.set_ButtonBarView("0");
                p.RaonkUpload.set_AllowDuplicationFile("1");
                p.RaonkUpload.set_text("");
                p.RaonkUpload.set_DisableDeleteConfirm("1");
                p.RaonkUpload.set_positionstep("0");
                p.RaonkUpload.set_visible("false");
                p.RaonkUpload.move("0","divForm:10","1020","200",null,null);
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
            obj = new BindItem("item0","divForm.form.Div01.form.edtAplyNo","value","dsEleMst","aplyNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.Div01.form.rdoCtrtChcYn","value","dsEleMst","rcptChcYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.Div01.form.edtCtrtNo","value","dsEleMst","ctrtNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.Div01.form.edtCtrtNoHwrtInpt","value","dsEleMst","hwrtInptCtrtNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.Div01.form.divEdtPop00.form.edtCtrtNm","value","dsEleMst","ctrtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.Div01.form.edtAplcntNm","value","dsEleMst","aplcntNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.Div01.form.edtAplcntMblTelno","value","dsEleMst","mblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.Div01.form.edtCtrtInstNm","value","dsEleMst","aplcntInstNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.Div01.form.edtAplcntNmHwrtInpt","value","dsEleMst","aplcntNm");
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
        this.addIncludeScript("LIF065M00.xfdl","xjs::TaskCom.xjs");
        this.registerScript("LIF065M00.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	LIF065M00.xfdl
        *  @Creator 	CHG
        *  @CreateDate 	2025/01/13
        *  @Desction   퇴거 > 유틸리티해지신청 > 난로사용신청
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2025/01/13				CHG							최초생성
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
        this.collect = "";  // 회수가능여부
        this.aplySeCd = "TSPELE007"; // 신청구분코드(TSPELE007 : 사용신청(난로사용신청))
        this.jobCd = "TAS00157"; // 작업코드(기본값 TAS00157 : 난로사용신청)

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

            // main 화면 자원 사용을 위한 처리
        	nexacro.main = this;

        	nexacro._OnceCallbackTimer.callonce(this, function () {
        		this.divForm.form.Div01.visible = true;
        		this.divForm.form.Div02.visible = true;
        		this.divForm.form.Div03.visible = true;
        		this.divForm.form.Div04.visible = true;
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

        	// 신청구분명 조회
        	this.cfnGetAplySeNm({ id:"getAplySeNm", cbf:"fnCallback", aplySeCd:this.aplySeCd });

        	// 첨부파일항목목록조회
        	this.cfnEtcCdLoad({ id:this.dsAtflArtclList.name, cbf:"fnCallback", dsAtflArtclList:"{id:'selectTaskComListCd', cnd:{cdTyId:'ATFL_SE', note:'" + obj.name + "'}}"});  // 첨부파일구분

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
        	// 398
        	if(e.pos == 0){
        		posTop1 = 62;
        		posTop2 = 263;

        	}else{
        		posTop1 = 12;
        		posTop2 = 213;

        	}

        	this.divQuick.top = e.pos + posTop1;
        	this.divBtn.top = e.pos + posTop2;
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
        	// 저장
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
        	this.dsSearch.setColumn(0, "inqSeCd", "2"); // 1 : 사용, 2 : 해지

        	var strSvcId    = "elctyAplyRcptInq";
        	var strSvcUrl   = "ele/elctyAplyRcptInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsEleMst=dsEleMst dsEleLodFcltList=dsEleLodFcltList dsCnvyMttr=dsCnvyMttr dsAtfl=dsAtfl dsMst=dsMst";
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
         			          + " dsEleMst=dsEleMst:A"                           	 // 전기사용 DS
         			          + " dsEleLodFcltList=dsEleLodFcltList:A"               // 전기부하시설목록 DS
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
        		case "getAplySeNm" : // 신청구분명조회
        			// 신청정보 세팅
        			this.divForm.form.Div01.form.edtAplySe.value = this.cfnGvbkAplySeNm();

        			break;

        		case "eleCpctLoad" : // 전기용량구분
        			// 공통코드 함수 호출
        			this.cfnComCdLoad({ id:"tspLocCdLoad", cbf:"fnCallback", dsTspLocCd:"TSPLOC:S" }); // 지역구분코드


        			break;

        		case "tspLocCdLoad" :
        			this.dsBldgSeList.copyData(this.dsTspLocCd);
        			this.dsBldgSeList.filter("cdId == ''");
        			this.dsTspLocCd.filter("uprCd == 'TSPLOCELE' || cdId == ''");

        			// 신청서 번호 있는지 체크 없으면 신규등록
        			this.aplyNo = this.getOwnerFrame().pvAplyNo;   // 신청번호

        			this.collect = this.getOwnerFrame().collect; // 회수가능여부
        			// this.collect = "true"; // 회수가능여부

        			if (this.gfnIsNull(this.aplyNo)) {
        				var nRow = this.dsEleMst.addRow();

        				this.dsEleMst.setColumn(nRow, "aplcntId"		, this.gvUserId);	// 신청자id
        				this.dsEleMst.setColumn(nRow, "aplcntNm"		, this.gvUserNm);	// 신청자명
        				this.dsEleMst.setColumn(nRow, "aplcntInstCd"	, this.gvCoId);		// 신청자기관코드
        				this.dsEleMst.setColumn(nRow, "aplcntInstNm"	, this.gvCoNm);		// 신청자기관명
        				this.dsEleMst.setColumn(nRow, "aplcntDeptCd"	, this.gvDeptId);	// 신청자부서코드
        				this.dsEleMst.setColumn(nRow, "aplcntDeptNm"	, this.gvDeptNm);	// 신청자부서명
        				this.dsEleMst.setColumn(nRow, "aplySeCd"		, this.aplySeCd);	// 신청구분코드
        				this.dsEleMst.setColumn(nRow, "mblTelno"		, this.gvMblTelNo);	// 휴대전화번호
        				this.dsEleMst.setColumn(nRow, "pbcprtPsnYn"		, "1");				// 공사소유건물 기본값

        				// 해당 TASK ID로 버튼 자동 생성 -> 추후에 신청번호가 있는지 없는지 체크해서 task id 박아넣어줘야함. 현재는 신청서 작성으로 했음.
        				this.cfnBtnCrt({ crtTrgt:this.divBtn, cbf:"fnCallback", lnkgEvnt:this.btn_onclick, inqCnd : { jobPrcsPrgrsSeCd:this.jobCd} });

        			} else {
        				// 수도사용 조회
        				this.cfnSearch(this.aplyNo);

        			}

        			break;

        		case "elctyAplyRcptInq" : // 조회
        			if(this.dsEleMst.getRowCount() > 0){
        				this.jobCd = this.dsEleMst.getColumn(0, "jobCd");
        				this.aplySeCd = this.dsEleMst.getColumn(0, "aplySeCd");

        			}

        			// 해당 TASK ID로 버튼 자동 생성
        			this.cfnGetAplySeNm({ id:"getAplySeNm", cbf:"fnCallback", aplySeCd:this.aplySeCd });
        			this.cfnBtnCrt({ crtTrgt:this.divBtn, cbf:"fnCallback", lnkgEvnt:this.btn_onclick, inqCnd : { jobPrcsPrgrsSeCd:this.jobCd} });

        			// 화면 세팅
        			this.fnScrnSetting();

        			break;

        		case "eleUseAplcfmWrtTmprStrg" :
        			this.gfnAlertMsg("saveAlert", this.objApp.getVariable("gvRetMsg"), "", "msgCallback");

        			break;

        		case "_cfnBtnCrt_" : // 버튼 생성 callback
        			// 신청및접수 - 신청취소 : 신규 신청일때는 안보여줌.
        			if(this.jobCd == "" && this.gfnIsNull(this.aplyNo)){
        				Array.from(this.btnDiv.form.components).forEach(oComp => {
        					if(oComp.id == ""){
        						oComp.visible = false;

        					}
        				});
        			}

        			break;

        		case this.dsAtflArtclList.name :

        			this.dsFile.clear();
        			for(var i = 0; i < this.dsAtflArtclList.getRowCount(); i++) {
        				this.dsFile.addColumn(this.dsAtflArtclList.getColumn(i, "cdId"), "STRING");
        			}
        			this.dsFile.addRow();

        			// 공통코드 함수 호출
        			this.cfnComCdLoad({ id:"eleCpctLoad", cbf:"fnCallback", dsEleCpctLoad:"STAPWR:S" }); // 전기용량구분

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
        	if (sPopupId == ""){
        		// if (this.gfnIsNull(sRtn)) return;
        		var objRtn = JSON.parse(sRtn);

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
        						  , "bsnsSeCd" : "TSPELE"   // 업무구분코드(입주자서비스)
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

        	}else if(sPopupId == "aplyCancelConfirm"){
        		// 첨부파일 다 삭제
        		// this.cfnSetAtflInfo(this.RaonkUpload, this.divForm.form.Div03.form.grdBuilc).cfnDelAtfl();
        		// this.cfnSetAtflInfo(this.RaonkUpload, this.divForm.form.Div04.form.grdPayPicPrvcClctUtztnWtcs).cfnDelAtfl();

        		// 데이터셋 모든 자료 삭제
        		this.dsEleMst.deleteAll();
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
        	var sPayPicSmYn = this.dsEleMst.getColumn(0, "payPicSmYn"); // 납부담당자 동일 여부
        	var sClmMtdCd = this.dsEleMst.getColumn(0, "clmMtdCd"); // 청구방식코드
        	var sPbcprtPsnYn = this.dsEleMst.getColumn(0, "pbcprtPsnYn"); // 건물소유구분코드
        	var sRcptChcYn = this.dsEleMst.getColumn(0, "rcptChcYn"); // 계약선택구분








        	if(this.gfnIsNull(sPbcprtPsnYn)){ // 건물소유구분
        		this.divForm.form.Div05.form.rdoBldgPsnSe.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["건물소유구분 \n"]);
        		return false;

        	}
        	// 계약선택 시 체크
        	if(sRcptChcYn == "1"){
        		if(this.gfnIsNull(this.dsEleMst.getColumn(0, "bzentyNm7"))){ // 업체명
        			this.divForm.form.Div03.form.edtCustInstNm.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["업체명 \n"]);
        			return false;
        		}
        		if(this.gfnIsNull(this.dsEleMst.getColumn(0, "rprsvNm3"))){ // 대표자성명
        			this.divForm.form.Div03.form.edtRprsvNm.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["대표자성명 \n"]);
        			return false;
        		}

        		// 사업자등록증
        		if(this.gfnIsNull(this.dsFile.getColumn(0, "A110"))){
        			this.divForm.form.Div03.form.btnBuilcFile.setFocus();
        			this.gfnAlertMsg("msg", "MSG_011", ["사업자등록증을 \n등록하여 주세요."]);
        			return false;

        		}
        	}

        	return true;

        }

        /**************************************************************************
         * @name : fnValiChk2
         * @description : validation check2
         ***************************************************************************/
        this.fnValiChk2 = function(){
        	var sPayPicSmYn = this.dsEleMst.getColumn(0, "payPicSmYn"); // 납부담당자 동일 여부
        	var sClmMtdCd = this.dsEleMst.getColumn(0, "clmMtdCd"); // 청구방식코드
        	var sPbcprtPsnYn = this.dsEleMst.getColumn(0, "pbcprtPsnYn"); // 건물소유구분코드
        	var sRcptChcYn = this.dsEleMst.getColumn(0, "rcptChcYn"); // 계약선택구분








        	if(this.gfnIsNull(sPbcprtPsnYn)){ // 건물소유구분
        		this.divForm.form.Div05.form.rdoBldgPsnSe.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["건물소유구분 \n"]);
        		return false;

        	}
        	// 계약선택 시 체크
        	if(sRcptChcYn == "1"){
        		if(this.gfnIsNull(this.dsEleMst.getColumn(0, "bzentyNm7"))){ // 업체명
        			this.divForm.form.Div03.form.edtCustInstNm.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["업체명 \n"]);
        			return false;
        		}
        		if(this.gfnIsNull(this.dsEleMst.getColumn(0, "rprsvNm3"))){ // 대표자성명
        			this.divForm.form.Div03.form.edtRprsvNm.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["대표자성명 \n"]);
        			return false;
        		}

        		// 사업자등록증
        		if(this.gfnIsNull(this.dsFile.getColumn(0, "A110"))){
        			this.divForm.form.Div03.form.btnBuilcFile.setFocus();
        			this.gfnAlertMsg("msg", "MSG_011", ["사업자등록증을 \n등록하여 주세요."]);
        			return false;

        		}
        	}

        	return true;

        }

        /**************************************************************************
         * @name : fnScrnSetting
         * @description : 조회 시 화면 세팅
         ***************************************************************************/
        this.fnScrnSetting = function(){
        	var sPayPicSmYn = this.dsEleMst.getColumn(0, "payPicSmYn"); // 납부담당자 동일 여부
        	var sClmMtdCd = this.dsEleMst.getColumn(0, "clmMtdCd"); // 청구방식코드
        	var sPbcprtPsnYn = this.dsEleMst.getColumn(0, "pbcprtPsnYn"); // 건물소유구분코드

        	var sPstnSeCd = this.dsEleMst.getColumn(0, "pstnSeCd"); // 지역구분코드
        	var sClmEml2 = this.dsEleMst.getColumn(0, "acuntEml2"); // 청구이메일
        	var sTxivEml2 = this.dsEleMst.getColumn(0, "etxivEmlAddr2"); // 세금계산서이메일

        	var sRcptChcYn = this.dsEleMst.getColumn(0, "rcptChcYn"); // 계약선택여부
        	var sCncltnRsnCd = this.dsEleMst.getColumn(0, "cncltnRsnCd"); // 해지사유코드

        	if(!this.gfnIsNull(sRcptChcYn)){
        		this.rdoCtrtChcYn_onitemchanged(this.divForm.form.Div01.form.rdoCtrtChcYn);

        	}
        	if(!this.gfnIsNull(sPayPicSmYn)){
        		this.rdoPayPicSmYn_onitemchanged(this.divForm.form.Div04.form.rdoPayPicSmYn);

        	}
        	if(!this.gfnIsNull(sClmMtdCd)){
        		this.rdoClmMtd_onitemchanged(this.divForm.form.Div04.form.rdoClmMtd);

        	}
        	if(!this.gfnIsNull(sPbcprtPsnYn)){
        		this.rdoBldgPsnSe_onitemchanged(this.divForm.form.Div05.form.rdoBldgPsnSe, {postvalue:sPbcprtPsnYn});

        	}

        	if(!this.gfnIsNull(sPstnSeCd)){
        		this.cboRgn_onitemchanged(this.divForm.form.Div02.form.cboRgn);

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
        	if(!this.gfnIsNull(sCncltnRsnCd)){
        		this.rdoCncltnRsn_onitemchanged(this.divForm.form.Div05.form.rdoCncltnRsn);

        	}

        	// this.jobCd 가 ,  : 신청 이라 이외에는 컴포넌트 readOnly 처리해줌.
        	if(this.jobCd != "" && this.jobCd != ""){
        		// 신청서 작성 이후 화면 컴포넌트 활성화

        		this.resetScroll();

        		// 만족도 조사
        		if(this.jobCd == "" || this.jobCd == ""){
        			this.divForm.form.divInfoGuide.visible = false;
        			this.divForm.form.divDgstfnExmn.visible = true;

        			this.resetScroll();

        		}

        		var sDivFrom = this.divForm.form;

        		var arrDivComps = [];

        		// TAS00129 : 신청서 작성, TAS00131 : 완료처리
        		if(this.jobCd == "" || this.jobCd == ""){
        			arrDivComps = [sDivFrom.Div01, sDivFrom.Div03, sDivFrom.Div04
        							, sDivFrom.Div06, sDivFrom.Div01.form.divEdtPop00
        							, sDivFrom.Div03.form.divEdtPop2, sDivFrom.Div04.form.divEdtPop];

        			// 건물소유구분 수정 못하게 처리
        			this.divForm.form.Div05.form.rdoBldgPsnSe.readonly = true;

        		}else{
        			arrDivComps = [sDivFrom.Div01, sDivFrom.Div02, sDivFrom.Div03, sDivFrom.Div04, sDivFrom.Div05
        							, sDivFrom.Div06, sDivFrom.Div01.form.divEdtPop00
        							, sDivFrom.Div03.form.divEdtPop2, sDivFrom.Div04.form.divEdtPop];

        		}

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
        				if (oComp instanceof nexacro.TextArea) return;
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
        				if (oComp instanceof nexacro.Radio){
        					// 한전계약확인, 완료처리 일때 한전공동계약여부 활성화
        					if((this.jobCd == "" || this.jobCd == "") && oComp.id == "rdoKepcoJntCtrtYn"){
        						return;

        					}

        				}
        				if (oComp instanceof nexacro.Edit){

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
        	if(objNm == "btnMinTitle"){
        		objDiv = this.divForm.form.divInfoGuide;

        	}else if(objNm == "btnMinCncltn"){
        		objDiv = this.divForm.form.Div00;

        	}else if(objNm == "btnMinAplcntInfo"){
        		objDiv = this.divForm.form.Div01;

        	}else if(objNm == "btnMinAplyPstn"){
        		objDiv = this.divForm.form.Div02;

        	}else if(objNm == "btnMinRvw"){
        		objDiv = this.divForm.form.Div03;

        	}else if(objNm == "btnMinPrcsDsctn"){
        		objDiv = this.divForm.form.Div04;

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

        	if(objNm == "btn00"){
        		objDiv = this.divForm.form.Div00;
        		objTit = this.divForm.form.sub_tit;

        	}else if(objNm == "btn01"){
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

        	}

        	// 해당 DIV가 현재 숨겨져 있으면 이동 안함.
        	if(!objDiv.visible || !objTit.visible){
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

        		this.divForm.form.Div01.form.Panel01_01_02.visible = true;	// 계약번호(수기입력)
        		this.divForm.form.Div02.form.Panel07.visible = true;		// 위치정보(수기입력)

        		// 고객정보 비활성화
        		this.divForm.form.sub_tit03.visible = false;
        		this.divForm.form.Div03.visible = false;

        		this.divForm.form.Div04.form.Panel00_00_01.visible = false;	// 청구지주소

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

        		this.divForm.form.Div04.form.Panel00_00_01.visible = true;	// 청구지주소

        	}

        	this.resetScroll();

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
         * @name : cboRgn_onitemclick
         * @description : 지역구분콤보 아이템 클릭 시
         ***************************************************************************/
        this.cboRgn_onitemclick = function(obj,e)
        {
        	this.cboRgnSe = "1";
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
         * @name : btnCtrt_onclick
         * @description : 계약찾기 버튼 클릭 시
         ***************************************************************************/
        this.btnCtrt_onclick = function(obj,e)
        {
        	alert("계약선택 팝업 추후에 연결 예정");

        	this.dsEleMst.setColumn(0, "ctrtNo", "1234");
        	this.dsEleMst.setColumn(0, "ctrtNm", "테스트 계약명~");
        	this.dsEleMst.setColumn(0, "pstnInfoRnb", "룸번호~1-2-3");

        	this.dsEleMst.setColumn(0, "bzentyNm7", "업체명");
        	this.dsEleMst.setColumn(0, "rprsvNm3", "대표자명");
        	this.dsEleMst.setColumn(0, "rprsTelno", "010-9999-9999");
        	this.dsEleMst.setColumn(0, "brno", "brno-test");
        	this.dsEleMst.setColumn(0, "crno", "crno-test");
        	this.dsEleMst.setColumn(0, "tpbizNm", "업종명");
        	this.dsEleMst.setColumn(0, "bzcndNm", "업태명");
        };

        /**************************************************************************
         * @name : btnBuilcAddr_onclick
         * @description : 주소찾기 버튼 클릭 시
         ***************************************************************************/
        this.btnBuilcAddr_onclick = function(obj,e)
        {
        	alert("우편번호 찾기!!! 임시데이터");

        	this.dsEleMst.setColumn(0, "custZip", "11111");
        	this.dsEleMst.setColumn(0, "custAddr", "테스트 주소~");
        	this.dsEleMst.setColumn(0, "custDtlAddr", "101동101호");

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

        	this.dsEleMst.setColumn(0, "hwrtInptClmZip", "22222");
        	this.dsEleMst.setColumn(0, "hwrtInptClmAddr", "테스트 주소~");
        	this.dsEleMst.setColumn(0, "hwrtInptClmDtlAddr", "101동101호");

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
        	---------------------------- 공사 소유 ------------------------------------
        		TAS00157	1711.신청서작성		CTL00250	신청
        		TAS00157	1711.신청서작성		CTL00630	신청
        		TAS00157	1711.신청서작성		CTL00758	임시저장
        		TAS00157	1711.신청서작성		CTL00820	미처리종료
        		TAS00157	1711.신청서작성		CTL01003	신청취소
        		TAS00158	1712.신청서보완		CTL00255	재신청
        		TAS00158	1712.신청서보완		CTL00991	미처리종료
        		TAS00159	1721.담당자접수		CTL00256	접수
        		TAS00160	1723.소방대접수		CTL00257	접수
        		TAS00161	1724.담당자지정		CTL00258	담당자변경
        		TAS00161	1724.담당자지정		CTL00260	승인
        		TAS00161	1724.담당자지정		CTL00365	신청자보완요청
        		TAS00161	1724.담당자지정		CTL00843	(X)승인
        		TAS00161	1724.담당자지정		CTL00880	미처리종료
        		TAS00161	1724.담당자지정		CTL01039	전기팀보완요청
        		TAS00163	1722.담당자지정		CTL00263	담당자변경
        		TAS00163	1722.담당자지정		CTL00364	보완요청
        		TAS00163	1722.담당자지정		CTL00626	완료
        		TAS00163	1722.담당자지정		CTL00627	반려
        		TAS00163	1722.담당자지정		CTL00628	소방대통보
        		TAS00163	1722.담당자지정		CTL00879	미처리종료
        		TAS00163	1722.담당자지정		CTL00932	임시저장
        		TAS00303	1713.신청서보완		CTL00363	재신청
        		TAS00303	1713.신청서보완		CTL00992	미처리종료
        		TAS00522	1714.전기팀신청서보완	CTL01037	소방대통보
        		TAS00522	1714.전기팀신청서보완	CTL01038	미처리종료
        		TAS00162	1731.반려확인			CTL00261	이의신청
        		TAS00162	1731.반려확인			CTL00262	미처리종료
        		TAS00164	1732.전기료부과확인		CTL00267	이의신청
        		TAS00164	1732.전기료부과확인		CTL00268	만족도요청
        		TAS00164	1732.전기료부과확인		CTL00269	종료
        		TAS00165	1733.검토내역확인		CTL00270	만족도응답
        		TAS00165	1733.검토내역확인		CTL00271	처리완료
        		TAS00166	종료					CTL10897	해지신청
        		TAS10403	해지신청				CTL10899	해지신청
        		TAS10403	해지신청				CTL10901	해지완료(직권)
        		TAS00167	1761.월별실사점검
        		TAS00280	1751.만족도조사		CTL00272	설문응답완료
        		TAS10402	1781.해지처리			CTL10900 	해지완료
        	--------------------------------------------------------------------------
        	*/

        	// 임시저장
        	if(vBtnCd == ""){
        		this.vStrSvcId  = "eleUseAplcfmWrtTmprStrg";
        		this.vStrSvcUrl = "ele/eleUseAplcfmWrtTmprStrg.do";

        	}else if(vBtnCd == ""){ // 신청
        		// validation check
        		var res = this.fnValiChk();
        		if(!res){
        			return;

        		}

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

        		this.vStrSvcId  = "eleUseAplcfmWrtTmprStrg";
        		this.vStrSvcUrl = "ele/eleUseAplcfmWrtTmprStrg.do";

        	}else if(vBtnCd == ""){ // 신청서작성완료
        		// 신청서작성완료
        		// validation check
        		var res = this.fnValiChk2();
        		if(!res){
        			return;

        		}

        		this.vStrSvcId  = "eleUseAplcfmWrtTmprStrg";
        		this.vStrSvcUrl = "ele/eleUseAplcfmWrtTmprStrg.do";

        	}else if(vBtnCd == ""){ // 종료, 미처리종료
        		// 신규입력일때 종료 버튼 클릭 시 화면만 닫아줌.
        		if(this.dsEleMst.getRowType(0) == Dataset.ROWTYPE_INSERT){
        			this.gfnConfirmMsg("endConfirm", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"], "", ["종료"]);

        			return;

        		}else{
        			this.vStrSvcId  = "eleUseAplcfmWrtTmprStrg";
        			this.vStrSvcUrl = "ele/eleUseAplcfmWrtTmprStrg.do";

        		}

        	}else if(vBtnCd == "" || vBtnCd == ""){ // 담당자변경
        		alert("담당자변경 팝업 완료 시 연결 예정!!");
        		return;

        	}else if(vBtnCd == ""){ // 설문응답완료
        		this.vStrSvcId  = "eleUseAplcfmWrtTmprStrg";
        		this.vStrSvcUrl = "ele/eleUseAplcfmWrtTmprStrg.do";

        		this.dsDgstfnExmn.copyData(this.divForm.form.divDgstfnExmn.form.dsDgstfn);

        		for(var i = 0; i < this.dsDgstfnExmn.getRowCount(); i++){
        			// 설문여부 Y값인경우에만 넣어줌.
        			if(!this.gfnIsNull(this.dsDgstfnExmn.getColumn(i, "dgstfnExmnYn")) && this.dsDgstfnExmn.getColumn(i, "dgstfnExmnYn") == "Y"){
        				var dgstfnNo = this.dsDgstfnExmn.getColumn(i, "no");
        				var dgstfnCn = this.dsDgstfnExmn.getColumn(i, "dgstfnCn");
        				var dgstfnScr = this.dsDgstfnExmn.getColumn(i, "dgstfnScr");

        				// 만족도 조사 항목 데이터 세팅
        				switch(dgstfnNo){
        					case "1" : this.dsEleMst.setColumn(0, "dgstfnArtclNm1", dgstfnScr); break;
        					case "2" : this.dsEleMst.setColumn(0, "dgstfnArtclNm2", dgstfnScr); break;
        					case "3" : this.dsEleMst.setColumn(0, "dgstfnArtclNm3", dgstfnScr); break;
        					case "4" : this.dsEleMst.setColumn(0, "dgstfnExmnCn1", dgstfnCn); break;
        					case "5" : this.dsEleMst.setColumn(0, "dgstfnExmnCn2", dgstfnCn); break;
        					case "6" : this.dsEleMst.setColumn(0, "dgstfnExmnCn3", dgstfnCn); break;

        					default :

        						break;
        				}
        			}
        		}
        	}else{
        		return;

        	}

        	var curTasId = wfInfo.jobPrcsPrgrsSeCd;

        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "bfrJobCd"))){
        		this.dsEleMst.setColumn(0, "bfrJobCd", curTasId);

        	}

        	// 넘겨줄 데이터 세팅
        	this.dsEleMst.setColumn(0, "jobCd", wfInfo.nextStepJobPrcsPrgrsSeCd);
        	this.dsEleMst.setColumn(0, "aplySeCd", this.aplySeCd);

        	// 건물소유여부
        	var sPbcprtPsnYn = this.dsEleMst.getColumn(0, "pbcprtPsnYn");
        	var sDocCd = "";

        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "docCd"))){
        		/*
        			 : 전기 및 전기시설 사용해지[공사건물]
        			 : 전기 및 전기시설 사용해지(변압기 공동이용 고저압수용가)[공사미소유건물]
        		*/
        		if(sPbcprtPsnYn == "1"){
        			sDocCd = "";

        		}else if(sPbcprtPsnYn == "0"){
        			sDocCd = "";

        		}

        		this.dsEleMst.setColumn(0, "docCd", sDocCd);

        	}

        	// 위치구분코드
        	// 건물코드가 있을땐 건물코드, 건물코드가 없고 위치코드가 있을때 위치코드, 둘 다 없을때 TSPLOCWAT(기본값)
        	var sPstnSeCd = "";
        	if(!this.gfnIsNull(this.dsEleMst.getColumn(0, "bldgSeCd"))){
        		sPstnSeCd = this.dsEleMst.getColumn(0, "bldgSeCd");

        	}else if(!this.gfnIsNull(this.dsEleMst.getColumn(0, "pstnSeCd"))){
        		sPstnSeCd = this.dsEleMst.getColumn(0, "pstnSeCd");

        	}else{
        		sPstnSeCd = "TSPLOCELE";

        	}

        	if(!this.gfnIsNull(sPstnSeCd)){
        		this.dsEleMst.addColumn("savePstn", "string");
        		this.dsEleMst.setColumn(0, "savePstn", sPstnSeCd);
        	}

        	// 시설운영마스터 데이터 세팅
        	if(!this.gfnIsNull(this.aplyNo)){
        		this.dsMst.setColumn(0, "aplyNo", this.aplyNo);

        	}
        	this.dsMst.setColumn(0, "taskCd"    , wfInfo.jobPrcsPrgrsSeCd        );  // 현재업무코드
        	this.dsMst.setColumn(0, "nextTaskCd", wfInfo.nextStepJobPrcsPrgrsSeCd);  // 다음업무코드

        	this.dsMst.setColumn(0, "aplySeCd", this.aplySeCd);  // 신청구분코드

        	if(this.gfnIsNull(this.dsMst.getColumn(0, "docCd"))){
        		this.dsMst.setColumn(0, "docCd", sDocCd);

        	}

        	var curDt = this.gfnGetDate("time");
        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "aplyDt"))){
        		this.dsEleMst.setColumn(0, "aplyDt", curDt);

        	}
        	if(this.gfnIsNull(this.dsMst.getColumn(0, "aplyDt"))){
        		this.dsMst.setColumn(0, "aplyDt", curDt);

        	}

        	// 협력사 접수
        	if(vBtnCd == "" || vBtnCd == ""){
        		// 접수일자 세팅
        		this.dsEleMst.setColumn(0, "rcptDt", curDt);
        		this.dsMst.setColumn(0, "rcptDt", curDt);

        	}

        	// 종료, 미처리종료, 처리완료
        	if(vBtnCd == ""){
        		// 종료일자 세팅
        		this.dsEleMst.setColumn(0, "endDt", curDt);
        		this.dsMst.setColumn(0, "endDt", curDt);

        	}

        	// 설문응답완료
        	if(vBtnCd == ""){
        		this.dsEleMst.setColumn(0, "dgstfnRspnsDt", curDt);
        		this.dsEleMst.setColumn(0, "dgstfnRspnsYn", "1");

        	}

        	// ERP담당자이관
        	if(vBtnCd == ""){
        		this.dsEleMst.setColumn(0, "erpInptYn", "1");

        	}

        	// 계약선택여부 1 : 계약선택, 0 : 수기입력
        	if(this.dsEleMst.getColumn(0, "rcptChcYn") == "1"){
        		// 계약번호(수기입력), 위치정보(수기입력) null 넣어줌.
        		this.dsEleMst.setColumn(0, "hwrtInptCtrtNo", null);
        		this.dsEleMst.setColumn(0, "hwrtInptPstnInfoCn", null);

        	}else if(this.dsEleMst.getColumn(0, "rcptChcYn") == "0"){
        		// 계약번호, 계약명, 위치정보(룸번호) null 넣어줌.
        		this.dsEleMst.setColumn(0, "ctrtNo", null);
        		this.dsEleMst.setColumn(0, "ctrtNm", null);
        		this.dsEleMst.setColumn(0, "pstnInfoRnb", null);

        		// 청구주소 null 넣어줌.
        		this.dsEleMst.setColumn(0, "clmZip", null);
        		this.dsEleMst.setColumn(0, "clmAddr", null);
        		this.dsEleMst.setColumn(0, "clmDtlAddr", null);

        		// 수기입력 시 고객정보 null 넣어줌
        		this.dsEleMst.setColumn(0, "bzentyNm7", null);
        		this.dsEleMst.setColumn(0, "rprsvNm3", null);
        		this.dsEleMst.setColumn(0, "rprsTelno", null);
        		this.dsEleMst.setColumn(0, "brno", null);
        		this.dsEleMst.setColumn(0, "crno", null);
        		this.dsEleMst.setColumn(0, "tpbizNm", null);
        		this.dsEleMst.setColumn(0, "bzcndNm", null);
        		this.dsEleMst.setColumn(0, "custZip", null);
        		this.dsEleMst.setColumn(0, "custAddr", null);
        		this.dsEleMst.setColumn(0, "custDtlAddr", null);
        		// 사업자등록증 삭제.
        		this.cfnSetAtflInfo(this.RaonkUpload, this.divForm.form.Div03.form.grdBuilc).cfnDelAtfl();

        	}

        	// 1 : 신청자정보와 동일
        	if(this.dsEleMst.getColumn(0, "payPicSmYn") == "1"){
        		// 납부담당자개인정보수집이용동의서 삭제.
        		this.cfnSetAtflInfo(this.RaonkUpload, this.divForm.form.Div04.form.grdPayPicPrvcClctUtztnWtcs).cfnDelAtfl();

        	}

        	// 청구방식 - 지로용지일때 청구메일 null로 넘겨줌.
        	if(this.dsEleMst.getColumn(0, "clmMtdCd") == "0"){
        		this.dsEleMst.setColumn(0, "acuntEml", null);

        	}

        	// 해지사유 처리(기타가 아닐땐 해지사유 기타 지워줌.)
        	if(this.dsEleMst.getColumn(0, "cncltnRsnCd") != "ELEEETCAN004"){
        		this.dsEleMst.setColumn(0, "cncltnRsnEtcCn", null);

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

        	if(this.dsMst.getColumn(0, "clmZip") != this.dsEleMst.getColumn(0, "hwrtInptClmZip")){
        		this.dsMst.setColumn(0, "clmZip", this.dsEleMst.getColumn(0, "hwrtInptClmZip"));	// 우편번호

        	}
        	if(this.dsMst.getColumn(0, "clmAddr") != this.dsEleMst.getColumn(0, "hwrtInptClmAddr")){
        		this.dsMst.setColumn(0, "clmAddr", this.dsEleMst.getColumn(0, "hwrtInptClmAddr"));	// 청구주소

        	}
        	if(this.dsMst.getColumn(0, "clmDtlAddr") != this.dsEleMst.getColumn(0, "hwrtInptClmDtlAddr")){
        		this.dsMst.setColumn(0, "clmDtlAddr", this.dsEleMst.getColumn(0, "hwrtInptClmDtlAddr"));		// 청구상세주소

        	}

        	// 수정된 내역이 있는지 체크
        	if(!this.gfnDsIsUpdated(this.dsEleMst) && !this.gfnDsIsUpdated(this.dsAtfl) && !this.gfnDsIsUpdated(this.dsCnvyMttr)){
        		this.gfnAlertMsg("msg", "MSG_004", [""]);
        		return;

        	}

        	if(vBtnCd == "" || vBtnCd == ""){ // 신청취소
        		this.gfnConfirmMsg("aplyCancelConfirm", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"], "", [vBtnNm]);

        	}else{
        		this.gfnConfirmMsg("save_confirm", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"], "", [vBtnNm]);

        	}
        }

        /**************************************************************************
         * @name : btnClmInfo_onclick
         * @description : 청구정보찾기 버튼 클릭
         ***************************************************************************/
        this.btnClmInfo_onclick = function(obj,e)
        {
        	alert("청구정보찾기!! 추후에 개발 예정\n(임시로 청구주소만 넣어줌.)");

        	this.dsEleMst.setColumn(0, "clmZip", "99999");
        	this.dsEleMst.setColumn(0, "clmAddr", "청구주소!");
        	this.dsEleMst.setColumn(0, "clmDtlAddr", "청구주소상세!");

        };



        /**************************************************************************/
        /******************************** 첨부파일 **********************************/
        /**************************************************************************/
        /**************************************************************************
         * @name : FileAtch_onclick
         * @description : 파일선택 버튼 클릭
         ***************************************************************************/
        this.FileAtch_onclick = function(obj,e)
        {
        	var objGrd = null;
        	var objNm = obj.name;

        	if(objNm == "btnBuilcFile"){
        		objGrd = this.divForm.form.Div03.form.grdBuilc;

        	}else if(objNm == "btnPayPicPrvcClctUtztnWtcsFile"){
        		objGrd = this.divForm.form.Div04.form.grdPayPicPrvcClctUtztnWtcs;

        	}else if(objNm == "btnRmtqtPhotoFile"){
        		objGrd = this.divForm.form.Div05.form.grdRmtqtPhoto;

        	}else if(objNm == "btnRmtqtEmgcPhotoFile"){
        		objGrd = this.divForm.form.Div05.form.grdRmtqtEmgcPhoto;

        	}else if(objNm == "btnFuctFaltSgldFile"){
        		objGrd = this.divForm.form.Div05.form.grdFuctFaltSgld;

        	}else if(objNm == "btnTkprgsFile"){
        		objGrd = this.divForm.form.Div05.form.grdTkprgs;

        	}else if(objNm == "btnPrtcRlyMdfcnBllFile"){
        		objGrd = this.divForm.form.Div05.form.grdPrtcRlyMdfcnBll;

        	}else if(objNm == "btnElctySafeMngPicSnrMhcrfFile"){
        		objGrd = this.divForm.form.Div05.form.grdElctySafeMngPicSnrMhcrf;

        	}else if(objNm == "btnMngAgtCotrtFile"){
        		objGrd = this.divForm.form.Div05.form.grdMngAgtCotrt;

        	}else if(objNm == "btnSpadptCnsltnMutFile"){
        		objGrd = this.divForm.form.Div05.form.grdSpadptCnsltnMut;

        	}else if(objNm == "btnSafeFaltMedicfFile"){
        		objGrd = this.divForm.form.Div05.form.grdSafeFaltMedicf;

        	}else if(objNm == "btnGageDataFile"){
        		objGrd = this.divForm.form.Div05.form.grdGageData;

        	}else if(objNm == "btnBfruseInspMhcrfFile"){
        		objGrd = this.divForm.form.Div05.form.grdBfruseInspMhcrf;

        	}else if(objNm == "btnFlrplnFile"){
        		objGrd = this.divForm.form.Div05.form.grdFlrpln;

        	}else if(objNm == "btnBuilcFile2"){
        		objGrd = this.divForm.form.Div05.form.grdBuilc;

        	}else if(objNm == "btnCustInfoCnfdocFile"){
        		objGrd = this.divForm.form.Div06.form.grdCustInfoCnfdoc;

        	}

        	// 첨부파일 선택 창 열기
        	this.cfnSetAtflInfo(this.RaonkUpload, objGrd).OpenFileDialog();
        };

        /**************************************************************************
         * @name : RaonkUpload_RAONKUPLOAD_CreationComplete
         * @description : 업로드 객체가 생성이 완료 시 발생하는 이벤트
         ***************************************************************************/
        this.RaonkUpload_RAONKUPLOAD_CreationComplete = function(obj,  paramObj)
        {
        	// 업로드 솔루션이 초기 생성시 업로드 할 경로를 지정해야 한다.
        	// /CMM/YYYY/MM/DD/  <<== CMM은 업무별 폴더 지정이고 기본적으로 /년도/월/일 의 폴더 구조를 갖는다.
        	this.RaonkUpload.SetConfig('FolderNameRule', '/LIF/ELE/YYYY/MM/DD/');

        	// 첨부 파일 추가 함수
            obj.cfnAddAtfl = function(oFile) {
        		// 이미 첨부된 파일이 있으면 기존 파일 삭제
        		this.cfnDelAtfl();

        		// RaonkUpload에 컬럼ID 설정
        		this.SetFileCustomValue(-1, JSON.stringify({ "strCustomValue" : this.upatflinfo.colid }));

        		// 첨부파일 DS에 추가
        		var nRow = this.parent.dsAtfl.findRow("colId", this.upatflinfo.colid);
        		nRow = Math.max(nRow, 0) ? nRow : this.parent.dsAtfl.addRow();

        		this.parent.dsAtfl.setColumn(nRow, "colId", this.upatflinfo.colid);  // 컬럼ID

        		// 첨부 파일 표출용 DS 설정
        		this.parent.dsFile.setColumn(0, this.upatflinfo.colid, oFile.userdata.strName + '(' + oFile.userdata.nSize + ')');  // 파일풀명
        	};

        	// 첨부 파일 삭제
            obj.cfnDelAtfl = function() {
        	    // 존재하지 않으면 돌아감
        		var nRow = this.parent.dsAtfl.findRow("colId", this.upatflinfo.colid);
        		if(nRow == -1) { return; }

        		// RaonkUpload mergeFile 삭제
        		if(this.GetListInfo().mergeFile) {
        		    var RaonkUpload       = this;
        			var cfnGetCustomValue = this.parent.cfnGetCustomValue;

        			this.GetListInfo().mergeFile.forEach(function(v, i, o) {
        			    // nexacro.main.gfnIsNull(v.uniqKey) 조건은 이력을 위해 기존 건은 삭제하지 않기 위함
        				if(nexacro.main.gfnIsNull(v.uniqKey) && cfnGetCustomValue(v.customValue) == RaonkUpload.upatflinfo.colid) {
        					RaonkUpload.SetSelectFile(i, '0');
        					RaonkUpload.DeleteSelectedFile();
        				}
        			});
        		}

        		// 첨부파일 삭제
        		this.parent.dsAtfl.deleteRow(this.parent.dsAtfl.findRow("colId", this.upatflinfo.colid));

        		// 첨부 파일 표출용 DS 설정
        		this.parent.dsFile.setColumn(0, this.upatflinfo.colid, "");  // 파일풀명
        	};

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
        	// 첨부 파일 추가
        	obj.cfnAddAtfl(e);
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
        		var colId = this.dsAtfl.getColumn(i, "colId");
        		this.dsFile.setColumn(0, colId , this.dsAtfl.getColumn(i, "orgnlFileNm") + '(' + this.dsAtfl.getColumn(i, "fileSz") + ')');  // 파일풀명
            };

        	this.resetScroll();
        };

        /**************************************************************************
         * @name : grd_oncellclick
         * @description : 그리드 셀 클릭 시
         ***************************************************************************/
        this.grd_oncellclick = function(obj,e)
        {
        	var objDs = obj.getBindDataset();

        	var objFileId = obj.getCellProperty("body", 0, "text").replace("bind:", "");

        	if(e.cell == 0){
        		// 파일이 있을 경우
        		if(obj.getCellPropertyValue(0, 0, "cssclass") == "CellFile") {
        			this.cfnFileDwnld(this.RaonkUpload, this.dsAtfl, objFileId, e);

        		}

        	}else if(e.cell == 1){
        		if(this.gfnDecode(obj.name, "grdBuilc", "1", "grdPayPicPrvcClctUtztnWtcs", "1", "0") == "1"){ // 사업자등록증, 납부담당자 개인정보 수집이용동의서
        			// 신청 단계일때만 삭제
        			if(this.jobCd == "" || this.jobCd == ""){
        				// 첨부 파일 삭제
        				this.cfnSetAtflInfo(this.RaonkUpload, obj).cfnDelAtfl();

        			}
        		}else{ // 그외의 첨부파일
        			// 신청서작성 일때만 삭제
        			if(this.jobCd == ""){
        				// 첨부 파일 삭제
        				this.cfnSetAtflInfo(this.RaonkUpload, obj).cfnDelAtfl();

        			}
        		}
        	}
        };



















        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onvscroll",this.form_onvscroll,this);
            this.divForm.form.btnMinTitle.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.btnMinCncltn.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.Div00.form.sta00_00.addEventHandler("onclick",this.divForm_Div05_sta00_onclick,this);
            this.divForm.form.btnMinAplcntInfo.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.Div01.form.rdoCtrtChcYn.addEventHandler("onitemchanged",this.rdoCtrtChcYn_onitemchanged,this);
            this.divForm.form.Div01.form.divEdtPop00.form.btnCtrt.addEventHandler("onclick",this.btnCtrt_onclick,this);
            this.divForm.form.Div01.form.divEdtPop002.form.btnClmAddr.addEventHandler("onclick",this.btnClmAddr_onclick,this);
            this.divForm.form.Div01.form.sta00.addEventHandler("onclick",this.divForm_Div05_sta00_onclick,this);
            this.divForm.form.btnMinAplyPstn.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.Div02.form.cboRgn.addEventHandler("onitemchanged",this.cboRgn_onitemchanged,this);
            this.divForm.form.Div02.form.cboRgn.addEventHandler("onitemclick",this.cboRgn_onitemclick,this);
            this.divForm.form.Div02.form.btnLctnmpFile.addEventHandler("onclick",this.FileAtch_onclick,this);
            this.divForm.form.Div02.form.grdLctnmp.addEventHandler("oncellclick",this.grd_oncellclick,this);
            this.divForm.form.Div02.form.btnPrdctPhotoFile.addEventHandler("onclick",this.FileAtch_onclick,this);
            this.divForm.form.Div02.form.grdPrdctPhoto.addEventHandler("oncellclick",this.grd_oncellclick,this);
            this.divForm.form.Div02.form.btnFireamHdrppsWtcsFile1.addEventHandler("onclick",this.FileAtch_onclick,this);
            this.divForm.form.Div02.form.grdFireamHdrppsWtcs.addEventHandler("oncellclick",this.grd_oncellclick,this);
            this.divForm.form.Div02.form.btnFireamHdrppsWtcsFile2.addEventHandler("onclick",this.FileAtch_onclick,this);
            this.divForm.form.Div02.form.btnFireamDprppsWtcsFile2.addEventHandler("onclick",this.FileAtch_onclick,this);
            this.divForm.form.Div02.form.btnFireamDprppsWtcsFile1.addEventHandler("onclick",this.FileAtch_onclick,this);
            this.divForm.form.Div02.form.grdFireamDprppsWtcs.addEventHandler("oncellclick",this.grd_oncellclick,this);
            this.divForm.form.Div02.form.btnInshtPhotoFile.addEventHandler("onclick",this.FileAtch_onclick,this);
            this.divForm.form.Div02.form.grdInshtPhoto.addEventHandler("oncellclick",this.grd_oncellclick,this);
            this.divForm.form.Div02.form.btnHetrWholPhotoFile.addEventHandler("onclick",this.FileAtch_onclick,this);
            this.divForm.form.Div02.form.grdHetrWholPhoto.addEventHandler("oncellclick",this.grd_oncellclick,this);
            this.divForm.form.btnMinRvw.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.Div03.form.btnGrdAdd.addEventHandler("onclick",this.divGrd_btnGrdAdd_onclick,this);
            this.divForm.form.Div03.form.btnGrdDel.addEventHandler("onclick",this.divGrd_btnGrdDel_onclick,this);
            this.divForm.form.Div03.form.divGrd.form.grdElctyTrckCpctRvw.addEventHandler("oncloseup",this.grdCtrtInfoList_oncloseup,this);
            this.divForm.form.Div03.form.Static00.addEventHandler("onclick",this.divForm_Div04_Static00_onclick,this);
            this.divForm.form.Div03.form.Static01.addEventHandler("onclick",this.divForm_Div04_Static01_onclick,this);
            this.divForm.form.Div03.form.Static00_00_02.addEventHandler("onclick",this.divForm_Div04_Static00_onclick,this);
            this.divForm.form.btnMinPrcsDsctn.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.Div04.form.divGrd00.form.Static00_00.addEventHandler("onclick",this.divForm_Div04_Static00_onclick,this);
            this.divForm.form.Div04.form.btnPayPicPrvcClctUtztnWtcsFile01_01.addEventHandler("onclick",this.FileAtch_onclick,this);
            this.divForm.form.Div04.form.grdPayPicPrvcClctUtztnWtcs01_00.addEventHandler("oncellclick",this.grd_oncellclick,this);
            this.divQuick.form.btn00.addEventHandler("onclick",this.btnQuick_onclick,this);
            this.divQuick.form.btn01.addEventHandler("onclick",this.btnQuick_onclick,this);
            this.divQuick.form.btn02.addEventHandler("onclick",this.btnQuick_onclick,this);
            this.divQuick.form.btn03.addEventHandler("onclick",this.btnQuick_onclick,this);
            this.divQuick.form.btn04.addEventHandler("onclick",this.btnQuick_onclick,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddFile",this.RaonkUpload_RAONKUPLOAD_AfterAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_CreationComplete",this.RaonkUpload_RAONKUPLOAD_CreationComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_UploadComplete",this.RaonkUpload_RAONKUPLOAD_UploadComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_OnError",this.RaonkUpload_RAONKUPLOAD_OnError,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeAddFile",this.RaonkUpload_RAONKUPLOAD_BeforeAddFile,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsMain_onvaluechanged,this);
            this.dsEleMst.addEventHandler("onvaluechanged",this.dsMain_onvaluechanged,this);
            this.dsMst.addEventHandler("onvaluechanged",this.dsMst_onvaluechanged,this);
            this.dsMst.addEventHandler("onload",this.dsMst_onload,this);
            this.dsAtfl.addEventHandler("onload",this.dsAtfl_onload,this);
            this.dsAtflDown.addEventHandler("onload",this.dsAtfl_onload,this);
            this.dsHstryInfo.addEventHandler("onvaluechanged",this.dsMain_onvaluechanged,this);
        };
        this.loadIncludeScript("LIF065M00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
