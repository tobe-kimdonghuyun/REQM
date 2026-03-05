(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LIF086M00");
            this.set_titletext("전기해지신청서작성");
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


            obj = new Dataset("dsPstnSe", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEmlList", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEleAplySe", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtflArtclList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","divTitle:10",null,"7544.32","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickFrBg");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Button("btnMinTitle","460","-55","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit00","955","18","100%","58",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("27");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staSubTitle02_00_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_03\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_03","0","-53","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("28");
            obj.set_text("서비스 흐름 및 작업방법 안내(타이틀미정)");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_03","505","-53","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("29");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinTitle\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divInfoGuide","1660.00","262","100%","300",null,null,null,null,"300",null,this.divForm.form);
            obj.set_taborder("6");
            obj.set_text("서비스 흐름 및 작업방법 안내");
            obj.set_cssclass("div_WF_InfoGuide");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divDgstfnExmn","1660.00","262","100%","920",null,null,null,null,"920",null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_fittocontents("height");
            obj.set_rtl("");
            obj.set_url("work::COM/util/dgstfnExmn/dgstfnExmn.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit01","1630","674","100%","66",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("10");
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
            obj.set_taborder("14");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div02","0","Div01:376.428","100%","285",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
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
            obj.set_text("위치정보(수기입력)");
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
            obj.set_taborder("18");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div03","0","Div02:422.856","100%","702",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
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
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:A110\" cssclass=\"expr:dataset.parent.gfnIsNull(A110) ? &quot;&quot; : &quot;CellFile&quot;\" cursor=\"pointer\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.gfnIsNull(A110) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.gfnIsNull(A110) ? &quot;none&quot; : &quot;button&quot;\" text=\"삭제\" cssclass=\"expr:dataset.parent.gfnIsNull(A110) ? &quot;&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
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
            obj.set_taborder("22");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_02\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div04","0","30","100%","1649.35",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
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

            obj = new Panel("Panel02_00_00","0","-3166","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("83");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staIrglrClmYn\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staIrglrClmYn","0","-3170","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("84");
            obj.set_text("비정기 청구 여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Radio("rdoIrglrClmYn","0","-3124","393","49.37",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("85");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div04_form_rdoIrglrClmYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div04_form_rdoIrglrClmYn_innerdataset", obj);
            divForm_form_Div04_form_rdoIrglrClmYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div04_form_rdoIrglrClmYn_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_05_00","20","-3166","980","125.37",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("82");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoIrglrClmYn\"/><PanelItem id=\"PanelItem03\" componentid=\"sta00_00_00_01_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_04_00","-518","-58","100.00%","136.37",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("81");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_05_00\"/></Contents>");
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
            divForm_form_Div04_form_rdoClmMtd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">이메일</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">지로</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div04_form_rdoClmMtd_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staClmAddr","0.00","0","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("27");
            obj.set_text("청구지주소/우편번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Div("divEdtPop002","780.00","635","150","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("28");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edtClmZip","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.Div04.form.divEdtPop002.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            obj.set_displaynulltext("우편번호 검색");
            this.divForm.form.Div04.form.divEdtPop002.addChild(obj.name, obj);

            obj = new Button("btnClmAddr","edtClmZip:-40","0","40","40",null,null,null,null,null,null,this.divForm.form.Div04.form.divEdtPop002.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            obj.set_visible("false");
            this.divForm.form.Div04.form.divEdtPop002.addChild(obj.name, obj);

            obj = new Edit("edtClmAddr2","360","637","305","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("29");
            obj.set_readonly("true");
            obj.set_flexgrow("2");
            obj.set_displaynulltext("주소");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panAddress","200","641","100%","45",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("30");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divEdtPop002\"/><PanelItem id=\"PanelItem02\" componentid=\"edtClmAddr2\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edtClmAddrDtl2","0.00","46","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("31");
            obj.set_displaynulltext("상세주소");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01","20.00","0","100%","151",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("32");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staClmAddr\"/><PanelItem id=\"PanelItem03\" componentid=\"panAddress\"/><PanelItem id=\"PanelItem01\" componentid=\"edtClmAddrDtl2\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_03_00","0","60","100%","353",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("33");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00_01_03\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staPrvcClctAgre","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("34");
            obj.set_text("개인정보 수집·이용 안내");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_04","10.00","98","100%","127.42",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("35");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"sta00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_03_00_00_00","10.00","98","100%","169.98",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("36");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("10");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPrvcClctAgre\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel00_00_04\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel09","0","60","100.00%","220.98",null,null,null,null,null,null,this.divForm.form.Div04.form);
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

            obj = new Panel("Panel00_10","10.00","98","100%","130",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("41");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"sta00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel10","0","60","100.00%","221",null,null,null,null,null,null,this.divForm.form.Div04.form);
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
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:B110\" cssclass=\"expr:dataset.parent.gfnIsNull(B110) ? &quot;&quot; : &quot;CellFile&quot;\" cursor=\"pointer\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.gfnIsNull(B110) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.gfnIsNull(B110) ? &quot;none&quot; : &quot;button&quot;\" text=\"삭제\" cssclass=\"expr:dataset.parent.gfnIsNull(B110) ? &quot;&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
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

            obj = new Static("sta00","20","20","100%","200",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("55");
            obj.set_text("1. 개인정보의 수집ㆍ이용 목적\r\n ○ 입주자서비스포털 전기 신청 작성건의 접수와 처리\r\n ○ 인터넷청구시스템 공항시설사용료 청구 및 납부처리\r\n2. 수집하려는 개인정보의 항목\r\n ○ 입주자서비스포털 필수항목 : 납부담당자이름, 납부담당자 일반전화번호, \r\n                                          납부담당자 휴대전화번호, 청구지 주소\r\n ○ 인터넷청구시스템 필수항목 : 납부담당자이름, 납부담당자 일반전화번호, \r\n                                          납부담당자 휴대전화번호, 청구지 주소\r\n3. 개인정보의 보유 및 이용 기간\r\n  계약종료 후 3년, 회원탈퇴 시까지");
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

            obj = new Static("staClmAddr00","0","0","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("74");
            obj.set_text("청구주소(수기입력)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Div("divEdtPop","780.00","635","150","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("75");
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
            obj.set_taborder("76");
            obj.set_readonly("true");
            obj.set_flexgrow("2");
            obj.set_displaynulltext("주소");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panAddress00","200","641","100%","45",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("77");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divEdtPop\"/><PanelItem id=\"PanelItem02\" componentid=\"edtClmAddr\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Edit("edtClmAddrDtl","0","46","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("78");
            obj.set_displaynulltext("상세주소");
            obj.set_text("");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_01_00_00","20","20","100%","30",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("79");
            obj.set_text("비정기 청구 여부가“Y”로 선택 시 다음 달 정기 청구일에 해지일까지 사용된 사용료가 합산되어 청구 ");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Des");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_03","20.00","0","100%","191",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("80");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staClmAddr00\"/><PanelItem id=\"PanelItem03\" componentid=\"panAddress00\"/><PanelItem id=\"PanelItem04\" componentid=\"edtClmAddrDtl\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00_00_00_01_00_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_01_00_00_00","20","20","100%","30",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("86");
            obj.set_text("“계약선택여부”가 “계약선택”시 청구지주소 수정이 필요하거나 “계약선택여부”가 “수기입력”일 경우에 입력");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("sub_tit05","1630","674","100%","66",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("26");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_02_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div05","0","30","100.00%","1834.97",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staBldgPsnSe","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("0");
            obj.set_text("건물소유구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Radio("rdoBldgPsnSe","200.00","328","393","49.37",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div05_form_rdoBldgPsnSe_innerdataset = new nexacro.NormalDataset("divForm_form_Div05_form_rdoBldgPsnSe_innerdataset", obj);
            divForm_form_Div05_form_rdoBldgPsnSe_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">공사건물</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">공사미소유건물/옥외</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div05_form_rdoBldgPsnSe_innerdataset);
            obj.set_text("공사건물");
            obj.set_value("1");
            obj.set_index("0");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","10.00","98","100%","86",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staBldgPsnSe\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoBldgPsnSe\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("3");
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
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staRmtqtAgreYn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("4");
            obj.set_text("검침값동의여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Radio("rdoRmtqtAgreYn","200.00","328","393","49.37",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div05_form_rdoRmtqtAgreYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div05_form_rdoRmtqtAgreYn_innerdataset", obj);
            divForm_form_Div05_form_rdoRmtqtAgreYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">동의함</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">동의하지않음</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div05_form_rdoRmtqtAgreYn_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","10.00","98","100%","109.97",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRmtqtAgreYn\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoRmtqtAgreYn\"/><PanelItem id=\"PanelItem03\" componentid=\"sta00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","60","100.00%","120.97",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("7");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("sta00","20","20","100%","65",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("8");
            obj.set_text("계량기 검침값 정보를 APIS(원격검침시스템) 데이터로 대신하여 이용하는 것에 동의합니다.\r\n(동의하지 않을 경우 초기 계량기 검침값을 공사담당자가 사진으로 첨부합니다.)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staDtlPstn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("9");
            obj.set_text("상세위치");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Edit("edtDtlPstn","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("10");
            obj.set_text("");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("11");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staDtlPstn\"/><PanelItem id=\"PanelItem01\" componentid=\"edtDtlPstn\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("12");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staCtrtElpwr","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_text("계약전력(KW)");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Edit("edtCtrtElpwr","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("14");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel03_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCtrtElpwr\"/><PanelItem id=\"PanelItem01\" componentid=\"edtCtrtElpwr\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel03","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("16");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel03_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel04_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel04_00","740","244","305","86",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("86");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staElctyUseMtd\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoElctyUseMtd\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Radio("rdoElctyUseMtd","740","290","100%","49",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("85");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div05_form_rdoElctyUseMtd_innerdataset = new nexacro.NormalDataset("divForm_form_Div05_form_rdoElctyUseMtd_innerdataset", obj);
            divForm_form_Div05_form_rdoElctyUseMtd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">EEAEleType001</Col><Col id=\"datacolumn\">종량제</Col></Row><Row><Col id=\"codecolumn\">EEAEleType002</Col><Col id=\"datacolumn\">정액제</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div05_form_rdoElctyUseMtd_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staElctyUseMtd","740","244","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("84");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_text("전기사용방식");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staElctyPosplyMtd","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_text("전기전원방식");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel04_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("18");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staElctyPosplyMtd\"/><PanelItem id=\"PanelItem03\" componentid=\"rdoElctyPosplyMtd\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Radio("rdoElctyPosplyMtd","200.00","328","100%","49.37",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("19");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div05_form_rdoElctyPosplyMtd_innerdataset = new nexacro.NormalDataset("divForm_form_Div05_form_rdoElctyPosplyMtd_innerdataset", obj);
            divForm_form_Div05_form_rdoElctyPosplyMtd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">EEAEleGb001</Col><Col id=\"datacolumn\">일반</Col></Row><Row><Col id=\"codecolumn\">EEAEleGb002</Col><Col id=\"datacolumn\">임시</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div05_form_rdoElctyPosplyMtd_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staUsePrdBgngYmd","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("20");
            obj.set_text("사용기간시작일");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Calendar("calUsePrdBgngYmd","280","139","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("21");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel05_00","20.00","242","305","86",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("22");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staUsePrdBgngYmd\"/><PanelItem id=\"PanelItem02\" componentid=\"calUsePrdBgngYmd\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staUsePrdEndYmd","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("23");
            obj.set_text("사용기간종료일");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel05_01","20.00","242","305","86",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("24");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staUsePrdEndYmd\"/><PanelItem id=\"PanelItem03\" componentid=\"calUsePrdEndYmd\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel05","0","242","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("25");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel05_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel05_01\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Calendar("calUsePrdEndYmd","280","139","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("26");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staPosplyPutYmd","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("27");
            obj.set_text("전원차단일");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Calendar("calPosplyPutYmd","280","139","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("28");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel05_01_00","20.00","242","305","86",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("29");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPosplyPutYmd\"/><PanelItem id=\"PanelItem03\" componentid=\"calPosplyPutYmd\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel06","0","242","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("30");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Panel04_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel05_01_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staSpadPt","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_text("수급지점");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel07_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("32");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSpadPt\"/><PanelItem id=\"PanelItem02\" componentid=\"edtSpadPt\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staSpadPtEmgc","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_text("수급지점(비상)");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Edit("edtSpadPtEmgc","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("34");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel07_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("35");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSpadPtEmgc\"/><PanelItem id=\"PanelItem01\" componentid=\"edtSpadPtEmgc\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel07","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("36");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel07_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel07_01\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Edit("edtSpadPt","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("37");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staGageNo","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_text("계량기번호");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Edit("edtGageNo","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("39");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel07_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("40");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staGageNo\"/><PanelItem id=\"PanelItem02\" componentid=\"edtGageNo\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staGageNoEmgc","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_text("계량기번호(비상)");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Edit("edtGageNoEmgc","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("42");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel07_01_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("43");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staGageNoEmgc\"/><PanelItem id=\"PanelItem01\" componentid=\"edtGageNoEmgc\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel08","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div05.form);
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
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel07_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel07_01_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staGageMngNo","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_text("계량기관리번호");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Edit("edtGageMngNo","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("46");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel07_00_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("47");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staGageMngNo\"/><PanelItem id=\"PanelItem02\" componentid=\"edtGageMngNo\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staGageMngNoEmgc","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_text("계량기관리번호(비상)");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Edit("edtGageMngNoEmgc","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("49");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel07_01_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("50");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staGageMngNoEmgc\"/><PanelItem id=\"PanelItem01\" componentid=\"edtGageMngNoEmgc\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel09","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("51");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel07_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel07_01_00_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staRmtqt","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_text("검침값");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Edit("edtRmtqt","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("53");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel07_00_00_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("54");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRmtqt\"/><PanelItem id=\"PanelItem02\" componentid=\"edtRmtqt\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staRmtqtEmgc","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_text("검침값(비상)");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Edit("edtRmtqtEmgc","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("56");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel07_01_00_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("57");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRmtqtEmgc\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRmtqtEmgc\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel10","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div05.form);
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
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel07_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel07_01_00_00_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staGageMnfct","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_text("계량기배율");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Edit("edtGageMnfct","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("60");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel07_00_00_00_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("61");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staGageMnfct\"/><PanelItem id=\"PanelItem02\" componentid=\"edtGageMnfct\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staGageMnfctEmgc","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_text("계량기배율(비상)");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Edit("edtGageMnfctEmgc","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("63");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel07_01_00_00_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("64");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staGageMnfctEmgc\"/><PanelItem id=\"PanelItem01\" componentid=\"edtGageMnfctEmgc\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel11","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("65");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel07_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel07_01_00_00_00_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staRmtqtPhoto","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("66");
            obj.set_text("검침값 사진");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("btnRmtqtPhotoSample","64.00","0","190","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("67");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_FileDw02");
            obj.set_fittocontents("width");
            obj.set_enable("true");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("btnRmtqtPhotoFile","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("68");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panBtnFile","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("69");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnRmtqtPhotoSample\"/><PanelItem id=\"PanelItem00\" componentid=\"btnRmtqtPhotoFile\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panTitle","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("70");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRmtqtPhoto\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Grid("grdRmtqtPhoto","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("71");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:C110\" cssclass=\"expr:dataset.parent.gfnIsNull(C110) ? &quot;&quot; : &quot;CellFile&quot;\" cursor=\"pointer\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.gfnIsNull(C110) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.gfnIsNull(C110) ? &quot;none&quot; : &quot;button&quot;\" text=\"삭제\" cssclass=\"expr:dataset.parent.gfnIsNull(C110) ? &quot;&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_01","20","20","100%","30",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("72");
            obj.set_text("JPG,PNG,BMP,PDF만 첨부가능");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00","192","1038","100.00%","80",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("73");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grdRmtqtPhoto\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00_00_00_01\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panFile1","0","42","100.00%","151",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("74");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel01_00_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staRmtqtEmgcPhoto","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("75");
            obj.set_text("검침값(비상) 사진");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("btnRmtqtEmgcPhotoSample","64.00","0","190","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("76");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_FileDw02");
            obj.set_fittocontents("width");
            obj.set_enable("true");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("btnRmtqtEmgcPhotoFile","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("77");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("78");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnRmtqtEmgcPhotoSample\"/><PanelItem id=\"PanelItem00\" componentid=\"btnRmtqtEmgcPhotoFile\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panTitle00","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("79");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRmtqtEmgcPhoto\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Grid("grdRmtqtEmgcPhoto","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("80");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:C120\" cssclass=\"expr:dataset.parent.gfnIsNull(C120) ? &quot;&quot; : &quot;CellFile&quot;\" cursor=\"pointer\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.gfnIsNull(C120) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.gfnIsNull(C120) ? &quot;none&quot; : &quot;button&quot;\" text=\"삭제\" cssclass=\"expr:dataset.parent.gfnIsNull(C120) ? &quot;&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_01_00","20","20","100%","30",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("81");
            obj.set_text("JPG,PNG,BMP,PDF만 첨부가능");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00","192","1038","100.00%","80",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("82");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grdRmtqtEmgcPhoto\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00_00_00_01_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panFile2","0","42","100.00%","151",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("83");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel01_00_00_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staCncltnRsn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("87");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_text("해지사유");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Radio("rdoCncltnRsn","200.00","328","100%","49.37",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("88");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div05_form_rdoCncltnRsn_innerdataset = new nexacro.NormalDataset("divForm_form_Div05_form_rdoCncltnRsn_innerdataset", obj);
            divForm_form_Div05_form_rdoCncltnRsn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">ELEEETCAN001</Col><Col id=\"datacolumn\">계약만료</Col></Row><Row><Col id=\"codecolumn\">ELEEETCAN002</Col><Col id=\"datacolumn\">전기사용기간 만료</Col></Row><Row><Col id=\"codecolumn\">ELEEETCAN003</Col><Col id=\"datacolumn\">전력량계 교체</Col></Row><Row><Col id=\"codecolumn\">ELEEETCAN004</Col><Col id=\"datacolumn\">기타</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div05_form_rdoCncltnRsn_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel04_01_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("89");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCncltnRsn\"/><PanelItem id=\"PanelItem03\" componentid=\"rdoCncltnRsn\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel12","0","242","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("90");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Panel04_01_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staCncltnRsnEtc","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("91");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_text("해지사유(기타)");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Edit("edtCncltnRsnEtc","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("92");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel07_00_00_00_00_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("93");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCncltnRsnEtc\"/><PanelItem id=\"PanelItem02\" componentid=\"edtCncltnRsnEtc\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel13","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("94");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel07_00_00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel04_01_00_00","10.00","98","305","0",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("95");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_visible("true");
            obj._setContents("<Contents/>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staOrgnstRstrIdntyYmd","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("96");
            obj.set_text("원상복구확인완료일");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Calendar("calOrgnstRstrIdntyYmd","280","139","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("97");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel05_01_00_00_00","20.00","242","305","86",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("98");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staOrgnstRstrIdntyYmd\"/><PanelItem id=\"PanelItem03\" componentid=\"calOrgnstRstrIdntyYmd\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel14","0","242","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("99");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel05_01_00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel04_01_00_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("sta00_00_02","20","20","100%","47",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("100");
            obj.set_cssclass("sta_WF_Des004");
            obj.set_fittocontents("height");
            obj.set_text("※ 전기 및 전기시설사용해지신청서를 제출함에 있어 인천국제공항 전기사용 약관에 동의하며, 수급지점 이후 당사에서 설치한 시설물에 대한 원상복구를 성실히 이행할 것을 서약합니다.");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel15","0","265","100.00%","68",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("101");
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_horizontalgap("20");
            obj.set_flexwrap("nowrap");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"sta00_00_02\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staCrtYmd","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("102");
            obj.set_text("생성일");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Calendar("calCrtYmd","280","139","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("103");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel05_01_00_00_01","20.00","242","305","86",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("104");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCrtYmd\"/><PanelItem id=\"PanelItem03\" componentid=\"calCrtYmd\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel16","0","242","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("105");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel05_01_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel07_00_00_00_00_00_01\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staRprsvNm","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("106");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_text("대표자명");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Edit("edtRprsvNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("107");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel07_00_00_00_00_00_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("108");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRprsvNm\"/><PanelItem id=\"PanelItem02\" componentid=\"edtRprsvNm\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staSubTitle01","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("7");
            obj.set_text("신청자 정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinAplcntInfo","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("9");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinAplcntInfo\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_00","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("11");
            obj.set_text("신청위치 정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinAplyPstn","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_00","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("13");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinAplyPstn\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_01","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("15");
            obj.set_text("고객정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinCustInfo","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_01","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("17");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinCustInfo\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_02","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("19");
            obj.set_text("청구정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinClmInfo","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_02","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("21");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinClmInfo\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_02_00","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("23");
            obj.set_text("전기 해지신청정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinElctyAplyInfo","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_02_00","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("25");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinElctyAplyInfo\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_02_00_00_00","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("31");
            obj.set_text("처리내역");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinPrcsDsctn","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("32");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_02_00_00_00","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("33");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinPrcsDsctn\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit06","1630","674","100%","66",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("34");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_02_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_02_00_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div06","0","376.428","100%","822",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("35");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staCnvyMttr","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("0");
            obj.set_text("전달사항");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new TextArea("txtCnvyMttr","43","1193","100%","100",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("내용입력");
            obj.set_readonly("false");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00","43.00","1193","100%","100",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("2");
            obj.set_background("#ffffff");
            obj.set_verticalgap("10");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"txtCnvyMttr\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("Panel00_02_00","20.00","950","980","146",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCnvyMttr\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_01_00\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("Panel01","51","1527","100.00%","157",null,null,null,null,null,null,this.divForm.form.Div06.form);
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
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Div("divGrd00","0","30","100%","187",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("5");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Grid("grdCnvyMttr","0","0","100.00%","100%",null,null,null,null,null,null,this.divForm.form.Div06.form.divGrd00.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsCnvyMttr");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"81\"/><Column size=\"140\"/><Column size=\"103\"/><Column size=\"900\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"일시\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"내용\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:frstRegDt\" displaytype=\"mask\" maskeditformat=\"####-##-## ##:##:##\" textAlign=\"center\" maskedittype=\"string\"/><Cell col=\"2\" textAlign=\"center\" text=\"bind:frstRegNm\"/><Cell col=\"3\" cssclass=\"CellEnd\" text=\"bind:cnvyMttrCn\"/></Band></Format></Formats>");
            this.divForm.form.Div06.form.divGrd00.addChild(obj.name, obj);

            obj = new Static("Static00_00","15","238","96.91%","40",null,null,null,null,null,null,this.divForm.form.Div06.form.divGrd00.form);
            obj.set_taborder("1");
            obj.set_text("※ My Page -> 검토의견함 메뉴에서 내용 등록/수정/삭제 가능합니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Txt");
            obj.set_wordWrap("char");
            obj.set_fittocontents("height");
            this.divForm.form.Div06.form.divGrd00.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","60","100.00%","208",null,null,null,null,null,null,this.divForm.form.Div06.form);
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
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Static("sta00_00_02","20","20","100%","47",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Des004");
            obj.set_fittocontents("height");
            obj.set_text("사무실 열쇠는 전기투입일에 꼭 필요합니다.(입주자가 문개방)\r\n각 단계의 처리자 전달사항에 저장되므로 이전 단계의 처리자 전달사항 확인이 가능");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("Panel03","0","265","100.00%","68",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_horizontalgap("20");
            obj.set_flexwrap("nowrap");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"sta00_00_02\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Static("staKepcoJntCtrtYn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_text("한전공동계약여부");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Radio("rdoKepcoJntCtrtYn","200.00","328","100%","49.37",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div06_form_rdoKepcoJntCtrtYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div06_form_rdoKepcoJntCtrtYn_innerdataset", obj);
            divForm_form_Div06_form_rdoKepcoJntCtrtYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div06_form_rdoKepcoJntCtrtYn_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("Panel04_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("11");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staKepcoJntCtrtYn\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoKepcoJntCtrtYn\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("Panel04_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_visible("false");
            obj._setContents("<Contents/>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("Panel04","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div06.form);
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
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel04_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel04_01\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Static("staRmtqt","1028","76","100%","46",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("14");
            obj.set_text("검침값");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Edit("edtRmtqt","1028","121","100%","40",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("15");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","1028","76","305","86",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRmtqt\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRmtqt\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("Panel05","1008","76","100.00%","95",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("17");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Static("staGageDmltnYn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_text("계량기철거여부");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Radio("rdoGageDmltnYn","200.00","328","100%","49.37",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("19");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div06_form_rdoGageDmltnYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div06_form_rdoGageDmltnYn_innerdataset", obj);
            divForm_form_Div06_form_rdoGageDmltnYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div06_form_rdoGageDmltnYn_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("Panel04_00_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("20");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staGageDmltnYn\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoGageDmltnYn\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("Panel04_01_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("21");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_visible("false");
            obj._setContents("<Contents/>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("Panel06","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div06.form);
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
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel04_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel04_01_01\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Static("sta00_00_02_00","20","20","100%","81",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_Des004");
            obj.set_fittocontents("height");
            obj.set_text("문의처\r\n터미널 및 탑승동 : 동우공영㈜ 전기팀 741-7545\r\n교톤센터: ㈜우리피앤에스 전기팀 741-7410\r\n부대건물: 한전산업개발(주) 기술팀 741-7878");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("Panel07","0","265","100.00%","102",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("24");
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_horizontalgap("20");
            obj.set_flexwrap("nowrap");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"sta00_00_02_00\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Div("divQuick",null,"62","296","291","62",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickMenu");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","17","20","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("0");
            obj.set_text("신청자 정보");
            obj.set_cssclass("btn_WF_Quick_S");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn02","17.00","btn01:0","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("1");
            obj.set_text("신청위치 정보");
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
            obj.set_text("전기 해지신청정보");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn07","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("5");
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
                p.staWtspUsePstn.set_text("위치정보(수기입력)");
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
                p.grdBuilc.set_binddataset("dsFile");
                p.grdBuilc.set_autofittype("col");
                p.grdBuilc.set_cssclass("grd_WF_FileAdd");
                p.grdBuilc.set_scrollbartype("none none");
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
            //-- Default Layout : this.divForm.form.Div04.form.divEdtPop002.form
            obj = new Layout("default","",0,0,this.divForm.form.Div04.form.divEdtPop002.form,
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
            this.divForm.form.Div04.form.divEdtPop002.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div04.form.divEdtPop002.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div04.form.divEdtPop002.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.Div04.form.divEdtPop002.form.addLayout(obj.name, obj);
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

                p.Panel02_00_00.set_taborder("83");
                p.Panel02_00_00.set_flexcrossaxisalign("end");
                p.Panel02_00_00.move("0","-3166","100%","46",null,null);

                p.staIrglrClmYn.set_taborder("84");
                p.staIrglrClmYn.set_text("비정기 청구 여부");
                p.staIrglrClmYn.set_cssclass("sta_WF_Label_E");
                p.staIrglrClmYn.move("0","-3170","100%","46",null,null);

                p.rdoIrglrClmYn.set_taborder("85");
                p.rdoIrglrClmYn.set_innerdataset(divForm_form_Div04_form_rdoIrglrClmYn_innerdataset);
                p.rdoIrglrClmYn.set_codecolumn("codecolumn");
                p.rdoIrglrClmYn.set_datacolumn("datacolumn");
                p.rdoIrglrClmYn.set_direction("vertical");
                p.rdoIrglrClmYn.set_fittocontents("width");
                p.rdoIrglrClmYn.set_index("-1");
                p.rdoIrglrClmYn.move("0","-3124","393","49.37",null,null);

                p.Panel00_00_05_00.set_taborder("82");
                p.Panel00_00_05_00.set_type("vertical");
                p.Panel00_00_05_00.set_flexgrow("1");
                p.Panel00_00_05_00.set_fittocontents("height");
                p.Panel00_00_05_00.set_minwidth("");
                p.Panel00_00_05_00.move("20","-3166","980","125.37",null,null);

                p.Panel00_04_00.set_taborder("81");
                p.Panel00_04_00.set_horizontalgap("20");
                p.Panel00_04_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_04_00.set_flexwrap("wrap");
                p.Panel00_04_00.set_fittocontents("height");
                p.Panel00_04_00.set_verticalgap("0");
                p.Panel00_04_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_04_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_04_00.set_type("horizontal");
                p.Panel00_04_00.move("-518","-58","100.00%","136.37",null,null);

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

                p.divEdtPop002.set_taborder("28");
                p.divEdtPop002.set_text("Div00");
                p.divEdtPop002.set_formscrollbartype("none none");
                p.divEdtPop002.set_formscrolltype("none");
                p.divEdtPop002.set_flexgrow("1");
                p.divEdtPop002.move("780.00","635","150","40",null,null);

                p.edtClmAddr2.set_taborder("29");
                p.edtClmAddr2.set_readonly("true");
                p.edtClmAddr2.set_flexgrow("2");
                p.edtClmAddr2.set_displaynulltext("주소");
                p.edtClmAddr2.move("360","637","305","40",null,null);

                p.panAddress.set_taborder("30");
                p.panAddress.set_horizontalgap("10");
                p.panAddress.move("200","641","100%","45",null,null);

                p.edtClmAddrDtl2.set_taborder("31");
                p.edtClmAddrDtl2.set_displaynulltext("상세주소");
                p.edtClmAddrDtl2.set_readonly("true");
                p.edtClmAddrDtl2.move("0.00","46","100%","40",null,null);

                p.Panel00_00_01.set_taborder("32");
                p.Panel00_00_01.set_type("vertical");
                p.Panel00_00_01.set_flexgrow("1");
                p.Panel00_00_01.set_fittocontents("height");
                p.Panel00_00_01.set_verticalgap("10");
                p.Panel00_00_01.set_minwidth("");
                p.Panel00_00_01.move("20.00","0","100%","151",null,null);

                p.Panel00_03_00.set_taborder("33");
                p.Panel00_03_00.set_horizontalgap("20");
                p.Panel00_03_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_03_00.set_flexwrap("wrap");
                p.Panel00_03_00.set_fittocontents("height");
                p.Panel00_03_00.set_verticalgap("0");
                p.Panel00_03_00.set_spacing("0px 20px 10px 20px");
                p.Panel00_03_00.set_cssclass("pal_WF_DtlBg");
                p.Panel00_03_00.set_type("horizontal");
                p.Panel00_03_00.move("0","60","100%","353",null,null);

                p.staPrvcClctAgre.set_taborder("34");
                p.staPrvcClctAgre.set_text("개인정보 수집·이용 안내");
                p.staPrvcClctAgre.set_cssclass("sta_WF_Label");
                p.staPrvcClctAgre.move("10","98","100%","46",null,null);

                p.Panel00_00_04.set_taborder("35");
                p.Panel00_00_04.set_type("vertical");
                p.Panel00_00_04.set_fittocontents("height");
                p.Panel00_00_04.set_minwidth("");
                p.Panel00_00_04.move("10.00","98","100%","127.42",null,null);

                p.Panel00_00_03_00_00_00.set_taborder("36");
                p.Panel00_00_03_00_00_00.set_type("vertical");
                p.Panel00_00_03_00_00_00.set_flexgrow("1");
                p.Panel00_00_03_00_00_00.set_verticalgap("10");
                p.Panel00_00_03_00_00_00.set_fittocontents("height");
                p.Panel00_00_03_00_00_00.set_minwidth("");
                p.Panel00_00_03_00_00_00.move("10.00","98","100%","169.98",null,null);

                p.Panel09.set_taborder("37");
                p.Panel09.set_horizontalgap("20");
                p.Panel09.set_flexcrossaxiswrapalign("start");
                p.Panel09.set_flexwrap("wrap");
                p.Panel09.set_fittocontents("height");
                p.Panel09.set_verticalgap("0");
                p.Panel09.set_spacing("0px 20px 10px 20px");
                p.Panel09.set_cssclass("pal_WF_DtlBg");
                p.Panel09.set_type("horizontal");
                p.Panel09.move("0","60","100.00%","220.98",null,null);

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
                p.Panel00_10.move("10.00","98","100%","130",null,null);

                p.Panel10.set_taborder("42");
                p.Panel10.set_horizontalgap("20");
                p.Panel10.set_flexcrossaxiswrapalign("start");
                p.Panel10.set_flexwrap("wrap");
                p.Panel10.set_fittocontents("height");
                p.Panel10.set_spacing("0px 20px 10px 20px");
                p.Panel10.set_cssclass("pal_WF_DtlBg");
                p.Panel10.set_type("horizontal");
                p.Panel10.move("0","60","100.00%","221",null,null);

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
                p.grdPayPicPrvcClctUtztnWtcs.set_binddataset("dsFile");
                p.grdPayPicPrvcClctUtztnWtcs.set_autofittype("col");
                p.grdPayPicPrvcClctUtztnWtcs.set_cssclass("grd_WF_FileAdd");
                p.grdPayPicPrvcClctUtztnWtcs.set_scrollbartype("none none");
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
                p.sta00.set_text("1. 개인정보의 수집ㆍ이용 목적\r\n ○ 입주자서비스포털 전기 신청 작성건의 접수와 처리\r\n ○ 인터넷청구시스템 공항시설사용료 청구 및 납부처리\r\n2. 수집하려는 개인정보의 항목\r\n ○ 입주자서비스포털 필수항목 : 납부담당자이름, 납부담당자 일반전화번호, \r\n                                          납부담당자 휴대전화번호, 청구지 주소\r\n ○ 인터넷청구시스템 필수항목 : 납부담당자이름, 납부담당자 일반전화번호, \r\n                                          납부담당자 휴대전화번호, 청구지 주소\r\n3. 개인정보의 보유 및 이용 기간\r\n  계약종료 후 3년, 회원탈퇴 시까지");
                p.sta00.set_fittocontents("height");
                p.sta00.set_cssclass("sta_WF_Des004");
                p.sta00.move("20","20","100%","200",null,null);

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

                p.staClmAddr00.set_taborder("74");
                p.staClmAddr00.set_text("청구주소(수기입력)");
                p.staClmAddr00.set_cssclass("sta_WF_Label_E");
                p.staClmAddr00.move("0","0","100%","46",null,null);

                p.divEdtPop.set_taborder("75");
                p.divEdtPop.set_text("Div00");
                p.divEdtPop.set_formscrollbartype("none none");
                p.divEdtPop.set_formscrolltype("none");
                p.divEdtPop.set_flexgrow("1");
                p.divEdtPop.move("780.00","635","150","40",null,null);

                p.edtClmAddr.set_taborder("76");
                p.edtClmAddr.set_readonly("true");
                p.edtClmAddr.set_flexgrow("2");
                p.edtClmAddr.set_displaynulltext("주소");
                p.edtClmAddr.move("360","637","305","40",null,null);

                p.panAddress00.set_taborder("77");
                p.panAddress00.set_horizontalgap("10");
                p.panAddress00.move("200","641","100%","45",null,null);

                p.edtClmAddrDtl.set_taborder("78");
                p.edtClmAddrDtl.set_displaynulltext("상세주소");
                p.edtClmAddrDtl.move("0","46","100%","40",null,null);

                p.sta00_00_00_01_00_00.set_taborder("79");
                p.sta00_00_00_01_00_00.set_text("비정기 청구 여부가“Y”로 선택 시 다음 달 정기 청구일에 해지일까지 사용된 사용료가 합산되어 청구 ");
                p.sta00_00_00_01_00_00.set_fittocontents("height");
                p.sta00_00_00_01_00_00.set_cssclass("sta_WF_Des");
                p.sta00_00_00_01_00_00.move("20","20","100%","30",null,null);

                p.Panel00_00_01_03.set_taborder("80");
                p.Panel00_00_01_03.set_type("vertical");
                p.Panel00_00_01_03.set_flexgrow("1");
                p.Panel00_00_01_03.set_fittocontents("height");
                p.Panel00_00_01_03.set_verticalgap("10");
                p.Panel00_00_01_03.set_minwidth("");
                p.Panel00_00_01_03.move("20.00","0","100%","191",null,null);

                p.sta00_00_00_01_00_00_00.set_taborder("86");
                p.sta00_00_00_01_00_00_00.set_text("“계약선택여부”가 “계약선택”시 청구지주소 수정이 필요하거나 “계약선택여부”가 “수기입력”일 경우에 입력");
                p.sta00_00_00_01_00_00_00.set_cssclass("sta_WF_Des");
                p.sta00_00_00_01_00_00_00.set_fittocontents("height");
                p.sta00_00_00_01_00_00_00.move("20","20","100%","30",null,null);
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
                p.staBldgPsnSe.set_taborder("0");
                p.staBldgPsnSe.set_text("건물소유구분");
                p.staBldgPsnSe.set_cssclass("sta_WF_Label_E");
                p.staBldgPsnSe.move("10","98","100%","46",null,null);

                p.rdoBldgPsnSe.set_taborder("1");
                p.rdoBldgPsnSe.set_innerdataset(divForm_form_Div05_form_rdoBldgPsnSe_innerdataset);
                p.rdoBldgPsnSe.set_codecolumn("codecolumn");
                p.rdoBldgPsnSe.set_datacolumn("datacolumn");
                p.rdoBldgPsnSe.set_direction("vertical");
                p.rdoBldgPsnSe.set_fittocontents("width");
                p.rdoBldgPsnSe.set_value("1");
                p.rdoBldgPsnSe.set_index("0");
                p.rdoBldgPsnSe.move("200.00","328","393","49.37",null,null);

                p.Panel00_00.set_taborder("2");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.set_minwidth("");
                p.Panel00_00.move("10.00","98","100%","86",null,null);

                p.Panel00.set_taborder("3");
                p.Panel00.set_horizontalgap("20");
                p.Panel00.set_flexcrossaxiswrapalign("start");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_verticalgap("0");
                p.Panel00.set_spacing("0px 20px 10px 20px");
                p.Panel00.set_cssclass("pal_WF_DtlBg");
                p.Panel00.set_type("horizontal");
                p.Panel00.set_visible("true");
                p.Panel00.move("0","60","100.00%","96",null,null);

                p.staRmtqtAgreYn.set_taborder("4");
                p.staRmtqtAgreYn.set_text("검침값동의여부");
                p.staRmtqtAgreYn.set_cssclass("sta_WF_Label_E");
                p.staRmtqtAgreYn.move("10","98","100%","46",null,null);

                p.rdoRmtqtAgreYn.set_taborder("5");
                p.rdoRmtqtAgreYn.set_innerdataset(divForm_form_Div05_form_rdoRmtqtAgreYn_innerdataset);
                p.rdoRmtqtAgreYn.set_codecolumn("codecolumn");
                p.rdoRmtqtAgreYn.set_datacolumn("datacolumn");
                p.rdoRmtqtAgreYn.set_direction("vertical");
                p.rdoRmtqtAgreYn.set_fittocontents("width");
                p.rdoRmtqtAgreYn.set_index("-1");
                p.rdoRmtqtAgreYn.move("200.00","328","393","49.37",null,null);

                p.Panel01_00.set_taborder("6");
                p.Panel01_00.set_type("vertical");
                p.Panel01_00.set_flexgrow("1");
                p.Panel01_00.set_fittocontents("height");
                p.Panel01_00.set_minwidth("");
                p.Panel01_00.move("10.00","98","100%","109.97",null,null);

                p.Panel01.set_taborder("7");
                p.Panel01.set_horizontalgap("20");
                p.Panel01.set_flexcrossaxiswrapalign("start");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_verticalgap("0");
                p.Panel01.set_spacing("0px 20px 10px 20px");
                p.Panel01.set_cssclass("pal_WF_DtlBg");
                p.Panel01.set_type("horizontal");
                p.Panel01.set_visible("true");
                p.Panel01.move("0","60","100.00%","120.97",null,null);

                p.sta00.set_taborder("8");
                p.sta00.set_text("계량기 검침값 정보를 APIS(원격검침시스템) 데이터로 대신하여 이용하는 것에 동의합니다.\r\n(동의하지 않을 경우 초기 계량기 검침값을 공사담당자가 사진으로 첨부합니다.)");
                p.sta00.set_cssclass("sta_WF_Des");
                p.sta00.set_fittocontents("height");
                p.sta00.move("20","20","100%","65",null,null);

                p.staDtlPstn.set_taborder("9");
                p.staDtlPstn.set_text("상세위치");
                p.staDtlPstn.set_cssclass("sta_WF_Label_E");
                p.staDtlPstn.move("10","98","100%","46",null,null);

                p.edtDtlPstn.set_taborder("10");
                p.edtDtlPstn.move("10.00","158","100%","40",null,null);

                p.Panel02_00.set_taborder("11");
                p.Panel02_00.set_type("vertical");
                p.Panel02_00.set_flexgrow("1");
                p.Panel02_00.set_minwidth("");
                p.Panel02_00.move("10.00","98","305","86",null,null);

                p.Panel02.set_taborder("12");
                p.Panel02.set_horizontalgap("20");
                p.Panel02.set_flexcrossaxiswrapalign("start");
                p.Panel02.set_flexwrap("wrap");
                p.Panel02.set_fittocontents("height");
                p.Panel02.set_verticalgap("0");
                p.Panel02.set_spacing("0px 20px 10px 20px");
                p.Panel02.set_cssclass("pal_WF_DtlBg");
                p.Panel02.set_type("horizontal");
                p.Panel02.set_visible("false");
                p.Panel02.move("0","60","100.00%","96",null,null);

                p.staCtrtElpwr.set_taborder("13");
                p.staCtrtElpwr.set_cssclass("sta_WF_Label_E");
                p.staCtrtElpwr.set_text("계약전력(KW)");
                p.staCtrtElpwr.move("10","98","100%","46",null,null);

                p.edtCtrtElpwr.set_taborder("14");
                p.edtCtrtElpwr.set_readonly("false");
                p.edtCtrtElpwr.move("10.00","158","100%","40",null,null);

                p.Panel03_01.set_taborder("15");
                p.Panel03_01.set_type("vertical");
                p.Panel03_01.set_flexgrow("1");
                p.Panel03_01.set_minwidth("");
                p.Panel03_01.move("10.00","98","305","86",null,null);

                p.Panel03.set_taborder("16");
                p.Panel03.set_horizontalgap("20");
                p.Panel03.set_flexcrossaxiswrapalign("start");
                p.Panel03.set_flexwrap("wrap");
                p.Panel03.set_fittocontents("height");
                p.Panel03.set_verticalgap("0");
                p.Panel03.set_spacing("0px 20px 10px 20px");
                p.Panel03.set_cssclass("pal_WF_DtlBg");
                p.Panel03.set_type("horizontal");
                p.Panel03.set_visible("false");
                p.Panel03.move("0","60","100.00%","96",null,null);

                p.Panel04_00.set_taborder("86");
                p.Panel04_00.set_type("vertical");
                p.Panel04_00.set_flexgrow("1");
                p.Panel04_00.set_minwidth("");
                p.Panel04_00.move("740","244","305","86",null,null);

                p.rdoElctyUseMtd.set_taborder("85");
                p.rdoElctyUseMtd.set_innerdataset(divForm_form_Div05_form_rdoElctyUseMtd_innerdataset);
                p.rdoElctyUseMtd.set_codecolumn("codecolumn");
                p.rdoElctyUseMtd.set_datacolumn("datacolumn");
                p.rdoElctyUseMtd.set_direction("vertical");
                p.rdoElctyUseMtd.set_fittocontents("width");
                p.rdoElctyUseMtd.set_index("-1");
                p.rdoElctyUseMtd.move("740","290","100%","49",null,null);

                p.staElctyUseMtd.set_taborder("84");
                p.staElctyUseMtd.set_cssclass("sta_WF_Label_E");
                p.staElctyUseMtd.set_text("전기사용방식");
                p.staElctyUseMtd.move("740","244","100%","46",null,null);

                p.staElctyPosplyMtd.set_taborder("17");
                p.staElctyPosplyMtd.set_cssclass("sta_WF_Label_E");
                p.staElctyPosplyMtd.set_text("전기전원방식");
                p.staElctyPosplyMtd.move("10","98","100%","46",null,null);

                p.Panel04_01.set_taborder("18");
                p.Panel04_01.set_type("vertical");
                p.Panel04_01.set_flexgrow("1");
                p.Panel04_01.set_minwidth("");
                p.Panel04_01.move("10.00","98","305","86",null,null);

                p.rdoElctyPosplyMtd.set_taborder("19");
                p.rdoElctyPosplyMtd.set_innerdataset(divForm_form_Div05_form_rdoElctyPosplyMtd_innerdataset);
                p.rdoElctyPosplyMtd.set_codecolumn("codecolumn");
                p.rdoElctyPosplyMtd.set_datacolumn("datacolumn");
                p.rdoElctyPosplyMtd.set_direction("vertical");
                p.rdoElctyPosplyMtd.set_fittocontents("width");
                p.rdoElctyPosplyMtd.set_index("-1");
                p.rdoElctyPosplyMtd.move("200.00","328","100%","49.37",null,null);

                p.staUsePrdBgngYmd.set_taborder("20");
                p.staUsePrdBgngYmd.set_text("사용기간시작일");
                p.staUsePrdBgngYmd.set_cssclass("sta_WF_Label_E");
                p.staUsePrdBgngYmd.move("10","98","100%","46",null,null);

                p.calUsePrdBgngYmd.set_taborder("21");
                p.calUsePrdBgngYmd.move("280","139","100%","40",null,null);

                p.Panel05_00.set_taborder("22");
                p.Panel05_00.set_type("vertical");
                p.Panel05_00.set_flexgrow("1");
                p.Panel05_00.move("20.00","242","305","86",null,null);

                p.staUsePrdEndYmd.set_taborder("23");
                p.staUsePrdEndYmd.set_text("사용기간종료일");
                p.staUsePrdEndYmd.set_cssclass("sta_WF_Label_E");
                p.staUsePrdEndYmd.move("10","98","100%","46",null,null);

                p.Panel05_01.set_taborder("24");
                p.Panel05_01.set_type("vertical");
                p.Panel05_01.set_flexgrow("1");
                p.Panel05_01.move("20.00","242","305","86",null,null);

                p.Panel05.set_taborder("25");
                p.Panel05.set_horizontalgap("20");
                p.Panel05.set_flexcrossaxiswrapalign("start");
                p.Panel05.set_flexwrap("wrap");
                p.Panel05.set_fittocontents("height");
                p.Panel05.set_verticalgap("0");
                p.Panel05.set_spacing("0px 20px 10px 20px");
                p.Panel05.set_cssclass("pal_WF_DtlBg");
                p.Panel05.set_visible("false");
                p.Panel05.move("0","242","100.00%","96",null,null);

                p.calUsePrdEndYmd.set_taborder("26");
                p.calUsePrdEndYmd.move("280","139","100%","40",null,null);

                p.staPosplyPutYmd.set_taborder("27");
                p.staPosplyPutYmd.set_text("전원차단일");
                p.staPosplyPutYmd.set_cssclass("sta_WF_Label_E");
                p.staPosplyPutYmd.move("10","98","100%","46",null,null);

                p.calPosplyPutYmd.set_taborder("28");
                p.calPosplyPutYmd.move("280","139","100%","40",null,null);

                p.Panel05_01_00.set_taborder("29");
                p.Panel05_01_00.set_type("vertical");
                p.Panel05_01_00.set_flexgrow("1");
                p.Panel05_01_00.move("20.00","242","305","86",null,null);

                p.Panel06.set_taborder("30");
                p.Panel06.set_horizontalgap("20");
                p.Panel06.set_flexcrossaxiswrapalign("start");
                p.Panel06.set_flexwrap("wrap");
                p.Panel06.set_fittocontents("height");
                p.Panel06.set_verticalgap("0");
                p.Panel06.set_spacing("0px 20px 10px 20px");
                p.Panel06.set_cssclass("pal_WF_DtlBg");
                p.Panel06.set_visible("false");
                p.Panel06.move("0","242","100.00%","96",null,null);

                p.staSpadPt.set_taborder("31");
                p.staSpadPt.set_cssclass("sta_WF_Label_E");
                p.staSpadPt.set_text("수급지점");
                p.staSpadPt.move("10","98","100%","46",null,null);

                p.Panel07_00.set_taborder("32");
                p.Panel07_00.set_type("vertical");
                p.Panel07_00.set_flexgrow("1");
                p.Panel07_00.set_minwidth("");
                p.Panel07_00.move("10.00","98","305","86",null,null);

                p.staSpadPtEmgc.set_taborder("33");
                p.staSpadPtEmgc.set_cssclass("sta_WF_Label_E");
                p.staSpadPtEmgc.set_text("수급지점(비상)");
                p.staSpadPtEmgc.move("10","98","100%","46",null,null);

                p.edtSpadPtEmgc.set_taborder("34");
                p.edtSpadPtEmgc.set_readonly("false");
                p.edtSpadPtEmgc.move("10.00","158","100%","40",null,null);

                p.Panel07_01.set_taborder("35");
                p.Panel07_01.set_type("vertical");
                p.Panel07_01.set_flexgrow("1");
                p.Panel07_01.set_minwidth("");
                p.Panel07_01.move("10.00","98","305","86",null,null);

                p.Panel07.set_taborder("36");
                p.Panel07.set_horizontalgap("20");
                p.Panel07.set_flexcrossaxiswrapalign("start");
                p.Panel07.set_flexwrap("wrap");
                p.Panel07.set_fittocontents("height");
                p.Panel07.set_verticalgap("0");
                p.Panel07.set_spacing("0px 20px 10px 20px");
                p.Panel07.set_cssclass("pal_WF_DtlBg");
                p.Panel07.set_type("horizontal");
                p.Panel07.set_visible("false");
                p.Panel07.move("0","60","100.00%","96",null,null);

                p.edtSpadPt.set_taborder("37");
                p.edtSpadPt.set_readonly("false");
                p.edtSpadPt.move("10.00","158","100%","40",null,null);

                p.staGageNo.set_taborder("38");
                p.staGageNo.set_cssclass("sta_WF_Label_E");
                p.staGageNo.set_text("계량기번호");
                p.staGageNo.move("10","98","100%","46",null,null);

                p.edtGageNo.set_taborder("39");
                p.edtGageNo.set_readonly("false");
                p.edtGageNo.move("10.00","158","100%","40",null,null);

                p.Panel07_00_00.set_taborder("40");
                p.Panel07_00_00.set_type("vertical");
                p.Panel07_00_00.set_flexgrow("1");
                p.Panel07_00_00.set_minwidth("");
                p.Panel07_00_00.move("10.00","98","305","86",null,null);

                p.staGageNoEmgc.set_taborder("41");
                p.staGageNoEmgc.set_cssclass("sta_WF_Label_E");
                p.staGageNoEmgc.set_text("계량기번호(비상)");
                p.staGageNoEmgc.move("10","98","100%","46",null,null);

                p.edtGageNoEmgc.set_taborder("42");
                p.edtGageNoEmgc.set_readonly("false");
                p.edtGageNoEmgc.move("10.00","158","100%","40",null,null);

                p.Panel07_01_00.set_taborder("43");
                p.Panel07_01_00.set_type("vertical");
                p.Panel07_01_00.set_flexgrow("1");
                p.Panel07_01_00.set_minwidth("");
                p.Panel07_01_00.move("10.00","98","305","86",null,null);

                p.Panel08.set_taborder("44");
                p.Panel08.set_horizontalgap("20");
                p.Panel08.set_flexcrossaxiswrapalign("start");
                p.Panel08.set_flexwrap("wrap");
                p.Panel08.set_fittocontents("height");
                p.Panel08.set_verticalgap("0");
                p.Panel08.set_spacing("0px 20px 10px 20px");
                p.Panel08.set_cssclass("pal_WF_DtlBg");
                p.Panel08.set_type("horizontal");
                p.Panel08.set_visible("false");
                p.Panel08.move("0","60","100.00%","96",null,null);

                p.staGageMngNo.set_taborder("45");
                p.staGageMngNo.set_cssclass("sta_WF_Label_E");
                p.staGageMngNo.set_text("계량기관리번호");
                p.staGageMngNo.move("10","98","100%","46",null,null);

                p.edtGageMngNo.set_taborder("46");
                p.edtGageMngNo.set_readonly("false");
                p.edtGageMngNo.move("10.00","158","100%","40",null,null);

                p.Panel07_00_00_00.set_taborder("47");
                p.Panel07_00_00_00.set_type("vertical");
                p.Panel07_00_00_00.set_flexgrow("1");
                p.Panel07_00_00_00.set_minwidth("");
                p.Panel07_00_00_00.move("10.00","98","305","86",null,null);

                p.staGageMngNoEmgc.set_taborder("48");
                p.staGageMngNoEmgc.set_cssclass("sta_WF_Label_E");
                p.staGageMngNoEmgc.set_text("계량기관리번호(비상)");
                p.staGageMngNoEmgc.move("10","98","100%","46",null,null);

                p.edtGageMngNoEmgc.set_taborder("49");
                p.edtGageMngNoEmgc.set_readonly("false");
                p.edtGageMngNoEmgc.move("10.00","158","100%","40",null,null);

                p.Panel07_01_00_00.set_taborder("50");
                p.Panel07_01_00_00.set_type("vertical");
                p.Panel07_01_00_00.set_flexgrow("1");
                p.Panel07_01_00_00.set_minwidth("");
                p.Panel07_01_00_00.move("10.00","98","305","86",null,null);

                p.Panel09.set_taborder("51");
                p.Panel09.set_horizontalgap("20");
                p.Panel09.set_flexcrossaxiswrapalign("start");
                p.Panel09.set_flexwrap("wrap");
                p.Panel09.set_fittocontents("height");
                p.Panel09.set_verticalgap("0");
                p.Panel09.set_spacing("0px 20px 10px 20px");
                p.Panel09.set_cssclass("pal_WF_DtlBg");
                p.Panel09.set_type("horizontal");
                p.Panel09.set_visible("false");
                p.Panel09.move("0","60","100.00%","96",null,null);

                p.staRmtqt.set_taborder("52");
                p.staRmtqt.set_cssclass("sta_WF_Label_E");
                p.staRmtqt.set_text("검침값");
                p.staRmtqt.move("10","98","100%","46",null,null);

                p.edtRmtqt.set_taborder("53");
                p.edtRmtqt.set_readonly("false");
                p.edtRmtqt.move("10.00","158","100%","40",null,null);

                p.Panel07_00_00_00_00.set_taborder("54");
                p.Panel07_00_00_00_00.set_type("vertical");
                p.Panel07_00_00_00_00.set_flexgrow("1");
                p.Panel07_00_00_00_00.set_minwidth("");
                p.Panel07_00_00_00_00.move("10.00","98","305","86",null,null);

                p.staRmtqtEmgc.set_taborder("55");
                p.staRmtqtEmgc.set_cssclass("sta_WF_Label_E");
                p.staRmtqtEmgc.set_text("검침값(비상)");
                p.staRmtqtEmgc.move("10","98","100%","46",null,null);

                p.edtRmtqtEmgc.set_taborder("56");
                p.edtRmtqtEmgc.set_readonly("false");
                p.edtRmtqtEmgc.move("10.00","158","100%","40",null,null);

                p.Panel07_01_00_00_00.set_taborder("57");
                p.Panel07_01_00_00_00.set_type("vertical");
                p.Panel07_01_00_00_00.set_flexgrow("1");
                p.Panel07_01_00_00_00.set_minwidth("");
                p.Panel07_01_00_00_00.move("10.00","98","305","86",null,null);

                p.Panel10.set_taborder("58");
                p.Panel10.set_horizontalgap("20");
                p.Panel10.set_flexcrossaxiswrapalign("start");
                p.Panel10.set_flexwrap("wrap");
                p.Panel10.set_fittocontents("height");
                p.Panel10.set_verticalgap("0");
                p.Panel10.set_spacing("0px 20px 10px 20px");
                p.Panel10.set_cssclass("pal_WF_DtlBg");
                p.Panel10.set_type("horizontal");
                p.Panel10.set_visible("false");
                p.Panel10.move("0","60","100.00%","96",null,null);

                p.staGageMnfct.set_taborder("59");
                p.staGageMnfct.set_cssclass("sta_WF_Label_E");
                p.staGageMnfct.set_text("계량기배율");
                p.staGageMnfct.move("10","98","100%","46",null,null);

                p.edtGageMnfct.set_taborder("60");
                p.edtGageMnfct.set_readonly("false");
                p.edtGageMnfct.move("10.00","158","100%","40",null,null);

                p.Panel07_00_00_00_00_00.set_taborder("61");
                p.Panel07_00_00_00_00_00.set_type("vertical");
                p.Panel07_00_00_00_00_00.set_flexgrow("1");
                p.Panel07_00_00_00_00_00.set_minwidth("");
                p.Panel07_00_00_00_00_00.move("10.00","98","305","86",null,null);

                p.staGageMnfctEmgc.set_taborder("62");
                p.staGageMnfctEmgc.set_cssclass("sta_WF_Label_E");
                p.staGageMnfctEmgc.set_text("계량기배율(비상)");
                p.staGageMnfctEmgc.move("10","98","100%","46",null,null);

                p.edtGageMnfctEmgc.set_taborder("63");
                p.edtGageMnfctEmgc.set_readonly("false");
                p.edtGageMnfctEmgc.move("10.00","158","100%","40",null,null);

                p.Panel07_01_00_00_00_00.set_taborder("64");
                p.Panel07_01_00_00_00_00.set_type("vertical");
                p.Panel07_01_00_00_00_00.set_flexgrow("1");
                p.Panel07_01_00_00_00_00.set_minwidth("");
                p.Panel07_01_00_00_00_00.move("10.00","98","305","86",null,null);

                p.Panel11.set_taborder("65");
                p.Panel11.set_horizontalgap("20");
                p.Panel11.set_flexcrossaxiswrapalign("start");
                p.Panel11.set_flexwrap("wrap");
                p.Panel11.set_fittocontents("height");
                p.Panel11.set_verticalgap("0");
                p.Panel11.set_spacing("0px 20px 10px 20px");
                p.Panel11.set_cssclass("pal_WF_DtlBg");
                p.Panel11.set_type("horizontal");
                p.Panel11.set_visible("false");
                p.Panel11.move("0","60","100.00%","96",null,null);

                p.staRmtqtPhoto.set_taborder("66");
                p.staRmtqtPhoto.set_text("검침값 사진");
                p.staRmtqtPhoto.set_cssclass("sta_WF_Label_E");
                p.staRmtqtPhoto.set_flexgrow("1");
                p.staRmtqtPhoto.move("0","44","305","46",null,null);

                p.btnRmtqtPhotoSample.set_taborder("67");
                p.btnRmtqtPhotoSample.set_text("동의서 양식 다운로드");
                p.btnRmtqtPhotoSample.set_cssclass("btn_WF_FileDw02");
                p.btnRmtqtPhotoSample.set_fittocontents("width");
                p.btnRmtqtPhotoSample.set_enable("true");
                p.btnRmtqtPhotoSample.move("64.00","0","190","40",null,null);

                p.btnRmtqtPhotoFile.set_taborder("68");
                p.btnRmtqtPhotoFile.set_text("파일선택");
                p.btnRmtqtPhotoFile.set_cssclass("btn_WF_FileUp");
                p.btnRmtqtPhotoFile.move("124","58","116","40",null,null);

                p.panBtnFile.set_taborder("69");
                p.panBtnFile.set_flexgrow("1");
                p.panBtnFile.set_flexcrossaxisalign("start");
                p.panBtnFile.set_flexmainaxisalign("end");
                p.panBtnFile.set_horizontalgap("10");
                p.panBtnFile.move("433","58","305","46",null,null);

                p.panTitle.set_taborder("70");
                p.panTitle.set_cssclass("pan_WF_FileTitle");
                p.panTitle.set_flexwrap("wrap");
                p.panTitle.set_fittocontents("height");
                p.panTitle.move("0","124","100%","46",null,null);

                p.grdRmtqtPhoto.set_taborder("71");
                p.grdRmtqtPhoto.set_binddataset("dsFile");
                p.grdRmtqtPhoto.set_autofittype("col");
                p.grdRmtqtPhoto.set_cssclass("grd_WF_FileAdd");
                p.grdRmtqtPhoto.set_scrollbartype("none none");
                p.grdRmtqtPhoto.move("20.00","114","100%","40",null,null);

                p.sta00_00_00_01.set_taborder("72");
                p.sta00_00_00_01.set_text("JPG,PNG,BMP,PDF만 첨부가능");
                p.sta00_00_00_01.set_cssclass("sta_WF_Des");
                p.sta00_00_00_01.set_fittocontents("height");
                p.sta00_00_00_01.move("20","20","100%","30",null,null);

                p.Panel01_00_00.set_taborder("73");
                p.Panel01_00_00.set_type("vertical");
                p.Panel01_00_00.set_verticalgap("10");
                p.Panel01_00_00.move("192","1038","100.00%","80",null,null);

                p.panFile1.set_taborder("74");
                p.panFile1.set_fittocontents("height");
                p.panFile1.set_spacing("10px 20px 10px 20px");
                p.panFile1.set_flexwrap("wrap");
                p.panFile1.set_cssclass("pal_WF_DtlBg");
                p.panFile1.set_verticalgap("4");
                p.panFile1.set_visible("false");
                p.panFile1.move("0","42","100.00%","151",null,null);

                p.staRmtqtEmgcPhoto.set_taborder("75");
                p.staRmtqtEmgcPhoto.set_text("검침값(비상) 사진");
                p.staRmtqtEmgcPhoto.set_cssclass("sta_WF_Label_E");
                p.staRmtqtEmgcPhoto.set_flexgrow("1");
                p.staRmtqtEmgcPhoto.move("0","44","305","46",null,null);

                p.btnRmtqtEmgcPhotoSample.set_taborder("76");
                p.btnRmtqtEmgcPhotoSample.set_text("동의서 양식 다운로드");
                p.btnRmtqtEmgcPhotoSample.set_cssclass("btn_WF_FileDw02");
                p.btnRmtqtEmgcPhotoSample.set_fittocontents("width");
                p.btnRmtqtEmgcPhotoSample.set_enable("true");
                p.btnRmtqtEmgcPhotoSample.move("64.00","0","190","40",null,null);

                p.btnRmtqtEmgcPhotoFile.set_taborder("77");
                p.btnRmtqtEmgcPhotoFile.set_text("파일선택");
                p.btnRmtqtEmgcPhotoFile.set_cssclass("btn_WF_FileUp");
                p.btnRmtqtEmgcPhotoFile.move("124","58","116","40",null,null);

                p.panBtnFile00.set_taborder("78");
                p.panBtnFile00.set_flexgrow("1");
                p.panBtnFile00.set_flexcrossaxisalign("start");
                p.panBtnFile00.set_flexmainaxisalign("end");
                p.panBtnFile00.set_horizontalgap("10");
                p.panBtnFile00.move("433","58","305","46",null,null);

                p.panTitle00.set_taborder("79");
                p.panTitle00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00.set_flexwrap("wrap");
                p.panTitle00.set_fittocontents("height");
                p.panTitle00.move("0","124","100%","46",null,null);

                p.grdRmtqtEmgcPhoto.set_taborder("80");
                p.grdRmtqtEmgcPhoto.set_binddataset("dsFile");
                p.grdRmtqtEmgcPhoto.set_autofittype("col");
                p.grdRmtqtEmgcPhoto.set_cssclass("grd_WF_FileAdd");
                p.grdRmtqtEmgcPhoto.set_scrollbartype("none none");
                p.grdRmtqtEmgcPhoto.move("20.00","114","100%","40",null,null);

                p.sta00_00_00_01_00.set_taborder("81");
                p.sta00_00_00_01_00.set_text("JPG,PNG,BMP,PDF만 첨부가능");
                p.sta00_00_00_01_00.set_cssclass("sta_WF_Des");
                p.sta00_00_00_01_00.set_fittocontents("height");
                p.sta00_00_00_01_00.move("20","20","100%","30",null,null);

                p.Panel01_00_00_00.set_taborder("82");
                p.Panel01_00_00_00.set_type("vertical");
                p.Panel01_00_00_00.set_verticalgap("10");
                p.Panel01_00_00_00.move("192","1038","100.00%","80",null,null);

                p.panFile2.set_taborder("83");
                p.panFile2.set_fittocontents("height");
                p.panFile2.set_spacing("10px 20px 10px 20px");
                p.panFile2.set_flexwrap("wrap");
                p.panFile2.set_cssclass("pal_WF_DtlBg");
                p.panFile2.set_verticalgap("4");
                p.panFile2.set_visible("false");
                p.panFile2.move("0","42","100.00%","151",null,null);

                p.staCncltnRsn.set_taborder("87");
                p.staCncltnRsn.set_cssclass("sta_WF_Label_E");
                p.staCncltnRsn.set_text("해지사유");
                p.staCncltnRsn.move("10","98","100%","46",null,null);

                p.rdoCncltnRsn.set_taborder("88");
                p.rdoCncltnRsn.set_innerdataset(divForm_form_Div05_form_rdoCncltnRsn_innerdataset);
                p.rdoCncltnRsn.set_codecolumn("codecolumn");
                p.rdoCncltnRsn.set_datacolumn("datacolumn");
                p.rdoCncltnRsn.set_direction("vertical");
                p.rdoCncltnRsn.set_fittocontents("width");
                p.rdoCncltnRsn.set_index("-1");
                p.rdoCncltnRsn.move("200.00","328","100%","49.37",null,null);

                p.Panel04_01_00.set_taborder("89");
                p.Panel04_01_00.set_type("vertical");
                p.Panel04_01_00.set_flexgrow("1");
                p.Panel04_01_00.set_minwidth("");
                p.Panel04_01_00.move("10.00","98","305","86",null,null);

                p.Panel12.set_taborder("90");
                p.Panel12.set_horizontalgap("20");
                p.Panel12.set_flexcrossaxiswrapalign("start");
                p.Panel12.set_flexwrap("wrap");
                p.Panel12.set_fittocontents("height");
                p.Panel12.set_verticalgap("0");
                p.Panel12.set_spacing("0px 20px 10px 20px");
                p.Panel12.set_cssclass("pal_WF_DtlBg");
                p.Panel12.set_visible("true");
                p.Panel12.move("0","242","100.00%","96",null,null);

                p.staCncltnRsnEtc.set_taborder("91");
                p.staCncltnRsnEtc.set_cssclass("sta_WF_Label_E");
                p.staCncltnRsnEtc.set_text("해지사유(기타)");
                p.staCncltnRsnEtc.move("10","98","100%","46",null,null);

                p.edtCncltnRsnEtc.set_taborder("92");
                p.edtCncltnRsnEtc.set_readonly("false");
                p.edtCncltnRsnEtc.move("10.00","158","100%","40",null,null);

                p.Panel07_00_00_00_00_00_00.set_taborder("93");
                p.Panel07_00_00_00_00_00_00.set_type("vertical");
                p.Panel07_00_00_00_00_00_00.set_flexgrow("1");
                p.Panel07_00_00_00_00_00_00.set_minwidth("");
                p.Panel07_00_00_00_00_00_00.move("10.00","98","305","86",null,null);

                p.Panel13.set_taborder("94");
                p.Panel13.set_horizontalgap("20");
                p.Panel13.set_flexcrossaxiswrapalign("start");
                p.Panel13.set_flexwrap("wrap");
                p.Panel13.set_fittocontents("height");
                p.Panel13.set_verticalgap("0");
                p.Panel13.set_spacing("0px 20px 10px 20px");
                p.Panel13.set_cssclass("pal_WF_DtlBg");
                p.Panel13.set_type("horizontal");
                p.Panel13.set_visible("false");
                p.Panel13.move("0","60","100.00%","96",null,null);

                p.Panel04_01_00_00.set_taborder("95");
                p.Panel04_01_00_00.set_type("vertical");
                p.Panel04_01_00_00.set_flexgrow("1");
                p.Panel04_01_00_00.set_visible("true");
                p.Panel04_01_00_00.set_minwidth("");
                p.Panel04_01_00_00.move("10.00","98","305","0",null,null);

                p.staOrgnstRstrIdntyYmd.set_taborder("96");
                p.staOrgnstRstrIdntyYmd.set_text("원상복구확인완료일");
                p.staOrgnstRstrIdntyYmd.set_cssclass("sta_WF_Label_E");
                p.staOrgnstRstrIdntyYmd.move("10","98","100%","46",null,null);

                p.calOrgnstRstrIdntyYmd.set_taborder("97");
                p.calOrgnstRstrIdntyYmd.move("280","139","100%","40",null,null);

                p.Panel05_01_00_00_00.set_taborder("98");
                p.Panel05_01_00_00_00.set_type("vertical");
                p.Panel05_01_00_00_00.set_flexgrow("1");
                p.Panel05_01_00_00_00.move("20.00","242","305","86",null,null);

                p.Panel14.set_taborder("99");
                p.Panel14.set_horizontalgap("20");
                p.Panel14.set_flexcrossaxiswrapalign("start");
                p.Panel14.set_flexwrap("wrap");
                p.Panel14.set_fittocontents("height");
                p.Panel14.set_verticalgap("0");
                p.Panel14.set_spacing("0px 20px 10px 20px");
                p.Panel14.set_cssclass("pal_WF_DtlBg");
                p.Panel14.set_visible("false");
                p.Panel14.move("0","242","100.00%","96",null,null);

                p.sta00_00_02.set_taborder("100");
                p.sta00_00_02.set_cssclass("sta_WF_Des004");
                p.sta00_00_02.set_fittocontents("height");
                p.sta00_00_02.set_text("※ 전기 및 전기시설사용해지신청서를 제출함에 있어 인천국제공항 전기사용 약관에 동의하며, 수급지점 이후 당사에서 설치한 시설물에 대한 원상복구를 성실히 이행할 것을 서약합니다.");
                p.sta00_00_02.move("20","20","100%","47",null,null);

                p.Panel15.set_taborder("101");
                p.Panel15.set_type("vertical");
                p.Panel15.set_verticalgap("20");
                p.Panel15.set_fittocontents("height");
                p.Panel15.set_cssclass("pal_WF_DtlBg");
                p.Panel15.set_spacing("10px 20px 10px 20px");
                p.Panel15.set_horizontalgap("20");
                p.Panel15.set_flexwrap("nowrap");
                p.Panel15.set_visible("true");
                p.Panel15.move("0","265","100.00%","68",null,null);

                p.staCrtYmd.set_taborder("102");
                p.staCrtYmd.set_text("생성일");
                p.staCrtYmd.set_cssclass("sta_WF_Label_E");
                p.staCrtYmd.move("10","98","100%","46",null,null);

                p.calCrtYmd.set_taborder("103");
                p.calCrtYmd.move("280","139","100%","40",null,null);

                p.Panel05_01_00_00_01.set_taborder("104");
                p.Panel05_01_00_00_01.set_type("vertical");
                p.Panel05_01_00_00_01.set_flexgrow("1");
                p.Panel05_01_00_00_01.set_visible("false");
                p.Panel05_01_00_00_01.move("20.00","242","305","86",null,null);

                p.Panel16.set_taborder("105");
                p.Panel16.set_horizontalgap("20");
                p.Panel16.set_flexcrossaxiswrapalign("start");
                p.Panel16.set_flexwrap("wrap");
                p.Panel16.set_fittocontents("height");
                p.Panel16.set_verticalgap("0");
                p.Panel16.set_spacing("0px 20px 10px 20px");
                p.Panel16.set_cssclass("pal_WF_DtlBg");
                p.Panel16.set_visible("true");
                p.Panel16.move("0","242","100.00%","96",null,null);

                p.staRprsvNm.set_taborder("106");
                p.staRprsvNm.set_cssclass("sta_WF_Label_E");
                p.staRprsvNm.set_text("대표자명");
                p.staRprsvNm.move("10","98","100%","46",null,null);

                p.edtRprsvNm.set_taborder("107");
                p.edtRprsvNm.set_readonly("false");
                p.edtRprsvNm.move("10.00","158","100%","40",null,null);

                p.Panel07_00_00_00_00_00_01.set_taborder("108");
                p.Panel07_00_00_00_00_00_01.set_type("vertical");
                p.Panel07_00_00_00_00_00_01.set_flexgrow("1");
                p.Panel07_00_00_00_00_00_01.set_minwidth("");
                p.Panel07_00_00_00_00_00_01.move("10.00","98","305","86",null,null);
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
            //-- Default Layout : this.divForm.form.Div06.form.divGrd00.form
            obj = new Layout("default","",0,0,this.divForm.form.Div06.form.divGrd00.form,
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
            this.divForm.form.Div06.form.divGrd00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div06.form.divGrd00.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div06.form.divGrd00.form,
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
            this.divForm.form.Div06.form.divGrd00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div06.form
            obj = new Layout("default","",0,0,this.divForm.form.Div06.form,
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

                p.sta00_00_02.set_taborder("7");
                p.sta00_00_02.set_cssclass("sta_WF_Des004");
                p.sta00_00_02.set_fittocontents("height");
                p.sta00_00_02.set_text("사무실 열쇠는 전기투입일에 꼭 필요합니다.(입주자가 문개방)\r\n각 단계의 처리자 전달사항에 저장되므로 이전 단계의 처리자 전달사항 확인이 가능");
                p.sta00_00_02.move("20","20","100%","47",null,null);

                p.Panel03.set_taborder("8");
                p.Panel03.set_type("vertical");
                p.Panel03.set_verticalgap("20");
                p.Panel03.set_fittocontents("height");
                p.Panel03.set_cssclass("pal_WF_DtlBg");
                p.Panel03.set_spacing("10px 20px 10px 20px");
                p.Panel03.set_horizontalgap("20");
                p.Panel03.set_flexwrap("nowrap");
                p.Panel03.set_visible("true");
                p.Panel03.move("0","265","100.00%","68",null,null);

                p.staKepcoJntCtrtYn.set_taborder("9");
                p.staKepcoJntCtrtYn.set_cssclass("sta_WF_Label_E");
                p.staKepcoJntCtrtYn.set_text("한전공동계약여부");
                p.staKepcoJntCtrtYn.move("10","98","100%","46",null,null);

                p.rdoKepcoJntCtrtYn.set_taborder("10");
                p.rdoKepcoJntCtrtYn.set_innerdataset(divForm_form_Div06_form_rdoKepcoJntCtrtYn_innerdataset);
                p.rdoKepcoJntCtrtYn.set_codecolumn("codecolumn");
                p.rdoKepcoJntCtrtYn.set_datacolumn("datacolumn");
                p.rdoKepcoJntCtrtYn.set_direction("vertical");
                p.rdoKepcoJntCtrtYn.set_fittocontents("width");
                p.rdoKepcoJntCtrtYn.set_index("-1");
                p.rdoKepcoJntCtrtYn.move("200.00","328","100%","49.37",null,null);

                p.Panel04_00.set_taborder("11");
                p.Panel04_00.set_type("vertical");
                p.Panel04_00.set_flexgrow("1");
                p.Panel04_00.set_minwidth("");
                p.Panel04_00.move("10.00","98","305","86",null,null);

                p.Panel04_01.set_taborder("12");
                p.Panel04_01.set_type("vertical");
                p.Panel04_01.set_flexgrow("1");
                p.Panel04_01.set_visible("false");
                p.Panel04_01.set_minwidth("");
                p.Panel04_01.move("10.00","98","305","86",null,null);

                p.Panel04.set_taborder("13");
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

                p.staRmtqt.set_taborder("14");
                p.staRmtqt.set_text("검침값");
                p.staRmtqt.set_cssclass("sta_WF_Label_E");
                p.staRmtqt.move("1028","76","100%","46",null,null);

                p.edtRmtqt.set_taborder("15");
                p.edtRmtqt.set_readonly("false");
                p.edtRmtqt.move("1028","121","100%","40",null,null);

                p.Panel00_00.set_taborder("16");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.move("1028","76","305","86",null,null);

                p.Panel05.set_taborder("17");
                p.Panel05.set_horizontalgap("20");
                p.Panel05.set_flexcrossaxiswrapalign("start");
                p.Panel05.set_flexwrap("wrap");
                p.Panel05.set_fittocontents("height");
                p.Panel05.set_verticalgap("0");
                p.Panel05.set_spacing("0px 20px 10px 20px");
                p.Panel05.set_cssclass("pal_WF_DtlBg");
                p.Panel05.set_visible("false");
                p.Panel05.move("1008","76","100.00%","95",null,null);

                p.staGageDmltnYn.set_taborder("18");
                p.staGageDmltnYn.set_cssclass("sta_WF_Label_E");
                p.staGageDmltnYn.set_text("계량기철거여부");
                p.staGageDmltnYn.move("10","98","100%","46",null,null);

                p.rdoGageDmltnYn.set_taborder("19");
                p.rdoGageDmltnYn.set_innerdataset(divForm_form_Div06_form_rdoGageDmltnYn_innerdataset);
                p.rdoGageDmltnYn.set_codecolumn("codecolumn");
                p.rdoGageDmltnYn.set_datacolumn("datacolumn");
                p.rdoGageDmltnYn.set_direction("vertical");
                p.rdoGageDmltnYn.set_fittocontents("width");
                p.rdoGageDmltnYn.set_index("-1");
                p.rdoGageDmltnYn.move("200.00","328","100%","49.37",null,null);

                p.Panel04_00_01.set_taborder("20");
                p.Panel04_00_01.set_type("vertical");
                p.Panel04_00_01.set_flexgrow("1");
                p.Panel04_00_01.set_minwidth("");
                p.Panel04_00_01.move("10.00","98","305","86",null,null);

                p.Panel04_01_01.set_taborder("21");
                p.Panel04_01_01.set_type("vertical");
                p.Panel04_01_01.set_flexgrow("1");
                p.Panel04_01_01.set_visible("false");
                p.Panel04_01_01.set_minwidth("");
                p.Panel04_01_01.move("10.00","98","305","86",null,null);

                p.Panel06.set_taborder("22");
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

                p.sta00_00_02_00.set_taborder("23");
                p.sta00_00_02_00.set_cssclass("sta_WF_Des004");
                p.sta00_00_02_00.set_fittocontents("height");
                p.sta00_00_02_00.set_text("문의처\r\n터미널 및 탑승동 : 동우공영㈜ 전기팀 741-7545\r\n교톤센터: ㈜우리피앤에스 전기팀 741-7410\r\n부대건물: 한전산업개발(주) 기술팀 741-7878");
                p.sta00_00_02_00.move("20","20","100%","81",null,null);

                p.Panel07.set_taborder("24");
                p.Panel07.set_type("vertical");
                p.Panel07.set_verticalgap("20");
                p.Panel07.set_fittocontents("height");
                p.Panel07.set_cssclass("pal_WF_DtlBg");
                p.Panel07.set_spacing("10px 20px 10px 20px");
                p.Panel07.set_horizontalgap("20");
                p.Panel07.set_flexwrap("nowrap");
                p.Panel07.set_visible("false");
                p.Panel07.move("0","265","100.00%","102",null,null);
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
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnMinTitle.set_taborder("30");
                p.btnMinTitle.set_cssclass("btn_WF_ACMinus");
                p.btnMinTitle.move("460","-55","34","34",null,null);

                p.sub_tit00.set_taborder("27");
                p.sub_tit00.set_background("#ffffff");
                p.sub_tit00.set_flexcrossaxisalign("end");
                p.sub_tit00.move("955","18","100%","58",null,null);

                p.staSubTitle02_00_03.set_taborder("28");
                p.staSubTitle02_00_03.set_text("서비스 흐름 및 작업방법 안내(타이틀미정)");
                p.staSubTitle02_00_03.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_03.move("0","-53","50%","50",null,null);

                p.Panel01_02_03.set_taborder("29");
                p.Panel01_02_03.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_03.set_spacing("0px 10px");
                p.Panel01_02_03.set_horizontalgap("10");
                p.Panel01_02_03.set_flexcrossaxisalign("center");
                p.Panel01_02_03.set_flexmainaxisalign("end");
                p.Panel01_02_03.move("505","-53","50%","50",null,null);

                p.divInfoGuide.set_taborder("6");
                p.divInfoGuide.set_text("서비스 흐름 및 작업방법 안내");
                p.divInfoGuide.set_cssclass("div_WF_InfoGuide");
                p.divInfoGuide.set_minheight("300");
                p.divInfoGuide.set_maxheight("");
                p.divInfoGuide.move("1660.00","262","100%","300",null,null);

                p.divDgstfnExmn.set_taborder("1");
                p.divDgstfnExmn.set_fittocontents("height");
                p.divDgstfnExmn.set_url("work::COM/util/dgstfnExmn/dgstfnExmn.xfdl");
                p.divDgstfnExmn.set_formscrollbartype("none none");
                p.divDgstfnExmn.set_visible("false");
                p.divDgstfnExmn.set_minheight("920");
                p.divDgstfnExmn.set_maxheight("");
                p.divDgstfnExmn.move("1660.00","262","100%","920",null,null);

                p.sub_tit01.set_taborder("10");
                p.sub_tit01.set_background("#ffffff");
                p.sub_tit01.set_flexcrossaxisalign("end");
                p.sub_tit01.move("1630","674","100%","66",null,null);

                p.Div01.set_taborder("0");
                p.Div01.set_text("Div00");
                p.Div01.set_cssclass("div_WF_Bg");
                p.Div01.set_fittocontents("height");
                p.Div01.set_visible("false");
                p.Div01.move("0","0","100%","577",null,null);

                p.sub_tit02.set_taborder("14");
                p.sub_tit02.set_background("#ffffff");
                p.sub_tit02.set_flexcrossaxisalign("end");
                p.sub_tit02.move("1630","674","100%","66",null,null);

                p.Div02.set_taborder("2");
                p.Div02.set_text("Div00");
                p.Div02.set_cssclass("div_WF_Bg");
                p.Div02.set_fittocontents("height");
                p.Div02.set_visible("false");
                p.Div02.move("0","Div01:376.428","100%","285",null,null);

                p.sub_tit03.set_taborder("18");
                p.sub_tit03.set_background("#ffffff");
                p.sub_tit03.set_flexcrossaxisalign("end");
                p.sub_tit03.move("1630","674","100%","66",null,null);

                p.Div03.set_taborder("3");
                p.Div03.set_text("Div00");
                p.Div03.set_cssclass("div_WF_Bg");
                p.Div03.set_fittocontents("height");
                p.Div03.set_visible("false");
                p.Div03.move("0","Div02:422.856","100%","702",null,null);

                p.sub_tit04.set_taborder("22");
                p.sub_tit04.set_background("#ffffff");
                p.sub_tit04.set_flexcrossaxisalign("end");
                p.sub_tit04.move("1630","674","100%","66",null,null);

                p.Div04.set_taborder("4");
                p.Div04.set_text("Div00");
                p.Div04.set_cssclass("div_WF_Bg");
                p.Div04.set_fittocontents("height");
                p.Div04.set_visible("false");
                p.Div04.move("0","30","100%","1649.35",null,null);

                p.sub_tit05.set_taborder("26");
                p.sub_tit05.set_background("#ffffff");
                p.sub_tit05.set_flexcrossaxisalign("end");
                p.sub_tit05.move("1630","674","100%","66",null,null);

                p.Div05.set_taborder("5");
                p.Div05.set_text("Div00");
                p.Div05.set_cssclass("div_WF_Bg");
                p.Div05.set_fittocontents("height");
                p.Div05.set_visible("false");
                p.Div05.move("0","30","100.00%","1834.97",null,null);

                p.staSubTitle01.set_taborder("7");
                p.staSubTitle01.set_text("신청자 정보");
                p.staSubTitle01.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle01.move("1630.00","690","50%","50",null,null);

                p.btnMinAplcntInfo.set_taborder("8");
                p.btnMinAplcntInfo.set_cssclass("btn_WF_ACMinus");
                p.btnMinAplcntInfo.move("2890.00","692","34","34",null,null);

                p.Panel01.set_taborder("9");
                p.Panel01.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01.set_spacing("0px 10px");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_flexcrossaxisalign("center");
                p.Panel01.set_flexmainaxisalign("end");
                p.Panel01.move("2340.00","690","50%","50",null,null);

                p.staSubTitle02_00_00.set_taborder("11");
                p.staSubTitle02_00_00.set_text("신청위치 정보");
                p.staSubTitle02_00_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_00.move("1630.00","690","50%","50",null,null);

                p.btnMinAplyPstn.set_taborder("12");
                p.btnMinAplyPstn.set_cssclass("btn_WF_ACMinus");
                p.btnMinAplyPstn.move("2890.00","692","34","34",null,null);

                p.Panel01_02_00.set_taborder("13");
                p.Panel01_02_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_00.set_spacing("0px 10px");
                p.Panel01_02_00.set_horizontalgap("10");
                p.Panel01_02_00.set_flexcrossaxisalign("center");
                p.Panel01_02_00.set_flexmainaxisalign("end");
                p.Panel01_02_00.move("2340.00","690","50%","50",null,null);

                p.staSubTitle02_00_01.set_taborder("15");
                p.staSubTitle02_00_01.set_text("고객정보");
                p.staSubTitle02_00_01.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_01.move("1630.00","690","50%","50",null,null);

                p.btnMinCustInfo.set_taborder("16");
                p.btnMinCustInfo.set_cssclass("btn_WF_ACMinus");
                p.btnMinCustInfo.move("2890.00","692","34","34",null,null);

                p.Panel01_02_01.set_taborder("17");
                p.Panel01_02_01.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_01.set_spacing("0px 10px");
                p.Panel01_02_01.set_horizontalgap("10");
                p.Panel01_02_01.set_flexcrossaxisalign("center");
                p.Panel01_02_01.set_flexmainaxisalign("end");
                p.Panel01_02_01.move("2340.00","690","50%","50",null,null);

                p.staSubTitle02_00_02.set_taborder("19");
                p.staSubTitle02_00_02.set_text("청구정보");
                p.staSubTitle02_00_02.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_02.move("1630.00","690","50%","50",null,null);

                p.btnMinClmInfo.set_taborder("20");
                p.btnMinClmInfo.set_cssclass("btn_WF_ACMinus");
                p.btnMinClmInfo.move("2890.00","692","34","34",null,null);

                p.Panel01_02_02.set_taborder("21");
                p.Panel01_02_02.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_02.set_spacing("0px 10px");
                p.Panel01_02_02.set_horizontalgap("10");
                p.Panel01_02_02.set_flexcrossaxisalign("center");
                p.Panel01_02_02.set_flexmainaxisalign("end");
                p.Panel01_02_02.move("2340.00","690","50%","50",null,null);

                p.staSubTitle02_00_02_00.set_taborder("23");
                p.staSubTitle02_00_02_00.set_text("전기 해지신청정보");
                p.staSubTitle02_00_02_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_02_00.move("1630.00","690","50%","50",null,null);

                p.btnMinElctyAplyInfo.set_taborder("24");
                p.btnMinElctyAplyInfo.set_cssclass("btn_WF_ACMinus");
                p.btnMinElctyAplyInfo.move("2890.00","692","34","34",null,null);

                p.Panel01_02_02_00.set_taborder("25");
                p.Panel01_02_02_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_02_00.set_spacing("0px 10px");
                p.Panel01_02_02_00.set_horizontalgap("10");
                p.Panel01_02_02_00.set_flexcrossaxisalign("center");
                p.Panel01_02_02_00.set_flexmainaxisalign("end");
                p.Panel01_02_02_00.move("2340.00","690","50%","50",null,null);

                p.staSubTitle02_00_02_00_00_00.set_taborder("31");
                p.staSubTitle02_00_02_00_00_00.set_text("처리내역");
                p.staSubTitle02_00_02_00_00_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_02_00_00_00.move("1630.00","690","50%","50",null,null);

                p.btnMinPrcsDsctn.set_taborder("32");
                p.btnMinPrcsDsctn.set_cssclass("btn_WF_ACMinus");
                p.btnMinPrcsDsctn.move("2890.00","692","34","34",null,null);

                p.Panel01_02_02_00_00_00.set_taborder("33");
                p.Panel01_02_02_00_00_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_02_00_00_00.set_spacing("0px 10px");
                p.Panel01_02_02_00_00_00.set_horizontalgap("10");
                p.Panel01_02_02_00_00_00.set_flexcrossaxisalign("center");
                p.Panel01_02_02_00_00_00.set_flexmainaxisalign("end");
                p.Panel01_02_02_00_00_00.move("2340.00","690","50%","50",null,null);

                p.sub_tit06.set_taborder("34");
                p.sub_tit06.set_background("#ffffff");
                p.sub_tit06.set_flexcrossaxisalign("end");
                p.sub_tit06.set_visible("false");
                p.sub_tit06.move("1630","674","100%","66",null,null);

                p.Div06.set_taborder("35");
                p.Div06.set_text("Div00");
                p.Div06.set_cssclass("div_WF_Bg");
                p.Div06.set_fittocontents("height");
                p.Div06.set_visible("false");
                p.Div06.move("0","376.428","100%","822",null,null);
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
                p.btn01.set_text("신청자 정보");
                p.btn01.set_cssclass("btn_WF_Quick_S");
                p.btn01.move("17","20","100%","45",null,null);

                p.btn02.set_taborder("1");
                p.btn02.set_text("신청위치 정보");
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
                p.btn05.set_text("전기 해지신청정보");
                p.btn05.set_cssclass("btn_WF_Quick");
                p.btn05.move("17.00","110","100%","45",null,null);

                p.btn07.set_taborder("5");
                p.btn07.set_text("처리내역");
                p.btn07.set_cssclass("btn_WF_Quick");
                p.btn07.move("17.00","110","100%","45",null,null);
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
                p.set_titletext("전기해지신청서작성");

                p.divTitle.set_taborder("3");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_cssclass("div_WF_QuickFrBg");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("height");
                p.divForm.move("0","divTitle:10",null,"7544.32","60",null);

                p.divQuick.set_taborder("1");
                p.divQuick.set_text("div00");
                p.divQuick.set_cssclass("div_WF_QuickMenu");
                p.divQuick.set_fittocontents("height");
                p.divQuick.move(null,"62","296","291","62",null);

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

            obj = new BindItem("item13","divForm.form.Div03.form.edtCustInstNm","value","dsEleMst","bzentyNm7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divForm.form.Div03.form.edtRprsvNm","value","dsEleMst","rprsvNm3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divForm.form.Div03.form.edtRprsTelno","value","dsEleMst","rprsTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divForm.form.Div03.form.edtBrno","value","dsEleMst","brno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divForm.form.Div03.form.edtCrno","value","dsEleMst","crno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divForm.form.Div03.form.edtTpbiz","value","dsEleMst","tpbizNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divForm.form.Div03.form.edtBzstat","value","dsEleMst","bzcndNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divForm.form.Div03.form.divEdtPop2.form.edtBuilcZip","value","dsEleMst","custZip");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divForm.form.Div03.form.edtBuilcAddr","value","dsEleMst","custAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divForm.form.Div03.form.edtBuilcAddrDtl","value","dsEleMst","custDtlAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divForm.form.Div04.form.rdoPayPicSmYn","value","dsEleMst","payPicSmYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divForm.form.Div04.form.edtPayPicNm","value","dsEleMst","payPicNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divForm.form.Div04.form.edtPayPicDeptNm","value","dsEleMst","payPicDeptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divForm.form.Div04.form.edtPayPicTelno","value","dsEleMst","payPicTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divForm.form.Div04.form.edtPayPicMblTelno","value","dsEleMst","payPicMblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divForm.form.Div04.form.edtClmCustNo","value","dsEleMst","clmCustCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divForm.form.Div04.form.rdoClmMtd","value","dsEleMst","clmMtdCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divForm.form.Div04.form.divEdtPop002.form.edtClmZip","value","dsEleMst","clmZip");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divForm.form.Div04.form.edtClmAddr2","value","dsEleMst","clmAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divForm.form.Div04.form.edtClmAddrDtl2","value","dsEleMst","clmDtlAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divForm.form.Div04.form.chkPrvcEsntlClctAgreYn","value","dsEleMst","prvcClctEsntlAgreYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divForm.form.Div04.form.rdoPrvcChcClctAgreYn","value","dsEleMst","prvcClctChcAgreYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divForm.form.Div04.form.edtAcuntEmlAddr1","value","dsEleMst","acuntEml1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divForm.form.Div04.form.edtAcuntEmlAddr2","value","dsEleMst","acuntEml2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divForm.form.Div04.form.edtTxivEmlAddr1","value","dsEleMst","etxivEmlAddr1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","divForm.form.Div04.form.edtTxivEmlAddr2","value","dsEleMst","etxivEmlAddr2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.Div01.form.edtAplcntNm","value","dsEleMst","aplcntNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.Div01.form.edtAplcntMblTelno","value","dsEleMst","mblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.Div02.form.cboRgn","value","dsEleMst","pstnSeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divForm.form.Div02.form.cboBldg","value","dsEleMst","bldgSeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divForm.form.Div02.form.cboPstn","value","dsWtspMst","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divForm.form.Div02.form.edtRnb","value","dsEleMst","pstnInfoRnb");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divForm.form.Div02.form.edtWtspUsePstn","value","dsEleMst","hwrtInptPstnInfoCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.Div01.form.edtCtrtInstNm","value","dsEleMst","aplcntInstNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divForm.form.Div05.form.rdoBldgPsnSe","value","dsEleMst","pbcprtPsnYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divForm.form.Div05.form.rdoRmtqtAgreYn","value","dsEleMst","rmtqtAgreYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divForm.form.Div05.form.edtDtlPstn","value","dsEleMst","dtlPstnCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divForm.form.Div05.form.edtCtrtElpwr","value","dsEleMst","ctrtElpwrVl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","divForm.form.Div05.form.rdoElctyPosplyMtd","value","dsEleMst","elctyPosplyMtdCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","divForm.form.Div05.form.calUsePrdBgngYmd","value","dsEleMst","usePrdBgngYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","divForm.form.Div05.form.calUsePrdEndYmd","value","dsEleMst","usePrdEndYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","divForm.form.Div05.form.calPosplyPutYmd","value","dsEleMst","posplyShtotYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","divForm.form.Div05.form.edtSpadPt","value","dsEleMst","spadptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","divForm.form.Div05.form.edtSpadPtEmgc","value","dsEleMst","emgcSpadptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","divForm.form.Div05.form.edtGageNo","value","dsEleMst","gageNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","divForm.form.Div05.form.edtGageNoEmgc","value","dsEleMst","emgcGageNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","divForm.form.Div05.form.edtGageMngNo","value","dsEleMst","gageMngNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","divForm.form.Div05.form.edtGageMngNoEmgc","value","dsEleMst","emgcGageMngNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","divForm.form.Div05.form.edtRmtqt","value","dsEleMst","aplyRmtqt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","divForm.form.Div05.form.edtRmtqtEmgc","value","dsEleMst","emgcRmtqt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","divForm.form.Div05.form.edtGageMnfct","value","dsEleMst","gageMnfct");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","divForm.form.Div05.form.edtGageMnfctEmgc","value","dsEleMst","emgcGageMnfct");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item81","divForm.form.Div04.form.edtClmAddrDtl","value","dsEleMst","hwrtInptClmDtlAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divForm.form.Div04.form.divEdtPop.form.edtClmZip","value","dsEleMst","hwrtInptClmZip");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item80","divForm.form.Div04.form.edtClmAddr","value","dsEleMst","hwrtInptClmAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divForm.form.Div04.form.rdoIrglrClmYn","value","dsEleMst","irglrClmYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divForm.form.Div05.form.rdoElctyUseMtd","value","dsEleMst","elctyUseMtdCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divForm.form.Div05.form.rdoCncltnRsn","value","dsEleMst","cncltnRsnCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divForm.form.Div05.form.edtCncltnRsnEtc","value","dsEleMst","cncltnRsnEtcCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","divForm.form.Div05.form.calOrgnstRstrIdntyYmd","value","dsEleMst","rtosIdntyCmptnYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","divForm.form.Div05.form.calCrtYmd","value","dsEleMst","crtYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","divForm.form.Div06.form.rdoKepcoJntCtrtYn","value","dsEleMst","kepcoJntCtrtYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","divForm.form.Div06.form.edtRmtqt","value","dsEleMst","prcsRmtqt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","divForm.form.Div06.form.rdoGageDmltnYn","value","dsEleMst","gageDmltnYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","divForm.form.Div06.form.txtCnvyMttr","value","dsEleMst","cnvyMttrCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","divForm.form.Div05.form.edtRprsvNm","value","dsEleMst","rprsvNm");
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
        this.addIncludeScript("LIF086M00.xfdl","xjs::TaskCom.xjs");
        this.registerScript("LIF086M00.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	LIF086M00.xfdl
        *  @Creator 	CHG
        *  @CreateDate 	2025/01/03
        *  @Desction   퇴거 > 유틸리티해지신청 > 전기해지신청(공사소유,공사미소유,옥외)
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2025/01/03				CHG							최초생성
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
        this.aplySeCd = "TSPELE003"; // 신청구분코드([공사소유건물]전기해지신청 : "TSPELE003", [공사미소유건물]전기해지신청 : "TSPELE004")
        this.jobCd = "TAS00127"; // 작업코드(기본값 TAS00127 : [공사소유건물]신청서작성, TAS00133 : [공사미소유건물]신청서작성)

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

            // main 화면 자원 사용을 위한 처리
        	nexacro.main = this;

        	nexacro._OnceCallbackTimer.callonce(this, function () {
        		this.divForm.form.Div01.visible = true;
        		this.divForm.form.Div03.visible = true;
        		this.divForm.form.Div04.visible = true;
        		this.divForm.form.Div05.visible = true;
        		this.divForm.form.Div06.visible = true;
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
        		posTop2 = 353;

        	}else{
        		posTop1 = 12;
        		posTop2 = 303;

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

        		case "comMailSearch" : // 메일코드 조회
        			this.cfnComCdLoad({ id:"comEleAplySeSearch", cbf:"fnCallback", dsEleAplySe:"ELEEEACLA:S" }); // 신청구분

        			break;

        		case "comEleAplySeSearch" : // 전기신청구분
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
        			if(this.jobCd == "TAS00127" && this.gfnIsNull(this.aplyNo)){
        				Array.from(this.btnDiv.form.components).forEach(oComp => {
        					if(oComp.id == "CTL01000"){
        						oComp.visible = false;

        					}
        				});
        			}else if(this.jobCd == "TAS00133" && this.gfnIsNull(this.aplyNo)){ // 신청및접수 - 신청취소 : 신규 신청일때는 안보여줌.
        				Array.from(this.btnDiv.form.components).forEach(oComp => {
        					if(oComp.id == "CTL01001"){
        						oComp.visible = false;

        					}
        				});
        			}else if(this.jobCd == "TAS00131" || this.jobCd == "TAS00140"){ // 완료처리일때
        				/*
        					대리등록여부 : AS-IS 기준 TAS00129(신청서작성), TAS00136(한전계약확인) 신청서작성완료 버튼
        							신청자와 등록자가 다를때 1 같을때 0을 넣어줌.
        							TO-BE 에서 등록자 빼기로 정의되서 추후에 대리등록 여부
        							체크는 정해지면 구현 해야함.
        					ERP등록여부 : TAS00131, TAS00140(완료처리) 에서 ERP담당자이관 버튼 클릭 시 1을 넣어준다.

        					따라서 현재 TO-BE에서는 TAS00131, TAS00140 화면에서 ERP담당자이관 버튼을 클릭 후에는
        					ERP담당자이관 버튼 안보이게 임시로 구현해둠.
        				*/
        				// var sDptyRegYn = this.dsEleMst.getColumn(0, "dptyRegYn");
        				var sDptyRegYn = this.gfnIsNull(this.dsEleMst.getColumn(0, "dptyRegYn")) ? "1" : this.dsEleMst.getColumn(0, "dptyRegYn");
        				var sErpInptYn = this.dsEleMst.getColumn(0, "erpInptYn");

        				Array.from(this.btnDiv.form.components).forEach(oComp => {
        					if(sDptyRegYn == "1" && sErpInptYn == "1"){
        						if(oComp.id == "CTL00642" || oComp.id == "CTL00646"){ // ERP담당자이관
        							oComp.visible = false;

        						}
        					}else if(sDptyRegYn == "1" && sErpInptYn == "0"){
        						if(oComp.id == "CTL00642" || oComp.id == "CTL00646"){ // ERP담당자이관
        							oComp.visible = false;

        						}
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
        			this.cfnComCdLoad({ id:"comMailSearch", cbf:"fnCallback", dsEmlList:"EML_TY:S" }); // 이메일

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
        		this.cfnSetAtflInfo(this.RaonkUpload, this.divForm.form.Div03.form.grdBuilc).cfnDelAtfl();
        		this.cfnSetAtflInfo(this.RaonkUpload, this.divForm.form.Div04.form.grdPayPicPrvcClctUtztnWtcs).cfnDelAtfl();

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
        	if(this.gfnIsNull(sRcptChcYn)){ // 계약선택여부
        		this.divForm.form.Div01.form.rdoCtrtChcYn.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["계약선택여부 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "pstnSeCd"))){ // 위치구분코드
        		this.divForm.form.Div02.form.cboRgn.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["위치구분코드 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "bldgSeCd"))){ // 위치구분코드
        		this.divForm.form.Div02.form.cboBldg.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["위치구분코드 \n"]);
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

        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "irglrClmYn"))){ // 비정기청구여부
        		this.divForm.form.Div04.form.rdoIrglrClmYn.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["비정기청구 여부 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(sPayPicSmYn)){ // 납부담당자 동일여부
        		this.divForm.form.Div04.form.rdoPayPicSmYn.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["납부담당자 동일여부 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "payPicNm"))){ // 납부담당자 성명
        		this.divForm.form.Div04.form.edtPayPicNm.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["납부담당자 성명 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "payPicTelno"))){ // 납부담당자 전화번호
        		this.divForm.form.Div04.form.edtPayPicTelno.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["납부담당자 전화번호 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "payPicMblTelno"))){ // 납부담당자 휴대전화번호
        		this.divForm.form.Div04.form.edtPayPicMblTelno.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["납부담당자 휴대전화번호 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "clmCustCd"))){ // 청구고객코드
        		this.divForm.form.Div04.form.edtClmCustNo.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["청구고객코드 \n"]);
        		return false;
        	}
        	if(sPayPicSmYn == "0"){
        		// 납부담당자 개인정보 수집이용동의서
        		if(this.gfnIsNull(this.dsFile.getColumn(0, "B110"))){
        			this.divForm.form.Div04.form.btnPayPicPrvcClctUtztnWtcsFile.setFocus();
        			this.gfnAlertMsg("msg", "MSG_011", ["납부담당자 개인정보 수집이용동의서를 \n등록하여 주세요."]);
        			return false;

        		}
        	}

        	if(this.gfnIsNull(sClmMtdCd)){ // 청구방식코드
        		this.divForm.form.Div04.form.rdoClmMtd.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["청구방식코드 \n"]);
        		return false;
        	}else if(sClmMtdCd == "1"){ // 이메일일때
        		if(this.gfnIsNull(this.dsEleMst.getColumn(0, "acuntEml1"))){ // 청구서용이메일
        			this.divForm.form.Div04.form.edtAcuntEmlAddr1.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["청구서용이메일 \n"]);
        			return false;
        		}
        		if(this.gfnIsNull(this.dsEleMst.getColumn(0, "acuntEml2"))){ // 청구서용이메일주소
        			this.divForm.form.Div04.form.edtAcuntEmlAddr2.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["청구서용이메일주소 \n"]);
        			return false;
        		}

        	}
        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "etxivEmlAddr1"))){ // 전자세금계산서이메일
        		this.divForm.form.Div04.form.edtTxivEmlAddr1.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["전자세금계산서이메일 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "etxivEmlAddr2"))){ // 전자세금계산서이메일주소
        		this.divForm.form.Div04.form.edtTxivEmlAddr2.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["전자세금계산서이메일주소 \n"]);
        		return false;
        	}

        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "hwrtInptClmZip"))){ // 청구지우편번호
        		this.divForm.form.Div04.form.divEdtPop.form.edtClmZip.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["청구지우편번호 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "hwrtInptClmAddr"))){ // 청구지주소
        		this.divForm.form.Div04.form.edtClmAddr.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["청구지주소 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "hwrtInptClmDtlAddr"))){ // 청구지상세주소
        		this.divForm.form.Div04.form.edtClmAddrDtl.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["청구지상세주소 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "prvcClctEsntlAgreYn"))){ // 개인정보수집필수동의여부
        		this.divForm.form.Div04.form.chkPrvcEsntlClctAgreYn.setFocus();
        		this.gfnAlertMsg("msg", "MSG_011", ["개인정보수집필수동의여부를 \n체크하여 주세요."]);
        		return false;
        	}
        	if(this.dsEleMst.getColumn(0, "prvcClctEsntlAgreYn") == "0"){
        		this.divForm.form.Div04.form.chkPrvcEsntlClctAgreYn.setFocus();
        		this.gfnAlertMsg("msg", "MSG_011", ["개인정보수집필수동의여부를 \n체크하여 주세요."]);
        		return false;

        	}
        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "prvcClctChcAgreYn"))){ // 개인정보수집선택동의여부
        		this.divForm.form.Div04.form.rdoPrvcChcClctAgreYn.setFocus();
        		this.gfnAlertMsg("msg", "MSG_011", ["개인정보수집선택동의여부를 \n체크하여 주세요."]);
        		return false;
        	}

        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "pbcprtPsnYn"))){ // 건물소유구분
        		this.divForm.form.Div05.form.rdoBldgPsnSe.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["건물소유구분 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "rmtqtAgreYn"))){ // 검침값동의여부
        		this.divForm.form.Div05.form.rdoRmtqtAgreYn.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["검침값동의여부 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "cncltnRsnCd"))){ // 해지사유
        		this.divForm.form.Div05.form.rdoCncltnRsn.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["해지사유 \n"]);
        		return false;
        	}
        	if(this.dsEleMst.getColumn(0, "cncltnRsnCd") == "ELEEETCAN004"){ // 해지사유가 기타일떄
        		if(this.gfnIsNull(this.dsEleMst.getColumn(0, "cncltnRsnEtcCn"))){ // 기타 해지사유
        			this.divForm.form.Div05.form.edtCncltnRsnEtc.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["기타 해지사유 \n"]);
        			return false;
        		}
        	}
        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "rprsvNm"))){ // 대표자명
        		this.divForm.form.Div05.form.edtRprsvNm.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["대표자명 \n"]);
        		return false;
        	}

        	return true;

        }

        /**************************************************************************
         * @name : fnValiChk2
         * @description : validation check2
         ***************************************************************************/
        this.fnValiChk2 = function(){
        	var sPbcprtPsnYn = this.dsEleMst.getColumn(0, "pbcprtPsnYn");
        	var sRcptChcYn = this.dsEleMst.getColumn(0, "rcptChcYn");

        	// 수기입력일때 위치정보(수기입력 체크)
        	if(sRcptChcYn == "0"){
        		if(this.gfnIsNull(this.dsEleMst.getColumn(0, "hwrtInptPstnInfoCn"))){ // 위치정보(수기입력)
        			this.divForm.form.Div02.form.edtWtspUsePstn.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["위치정보(수기입력) \n"]);
        			return false;

        		}
        	}

        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "dtlPstnCn"))){ // 상세위치
        		this.divForm.form.Div05.form.edtDtlPstn.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["상세위치 \n"]);
        		return false;

        	}
        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "ctrtElpwrVl"))){ // 계약전력(KW)
        		this.divForm.form.Div05.form.edtCtrtElpwr.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["계약전력(KW) \n"]);
        		return false;

        	}
        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "elctyUseMtdCd"))){ // 전기사용방식
        		this.divForm.form.Div05.form.rdoElctyUseMtd.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["전기사용방식 \n"]);
        		return false;

        	}
        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "usePrdBgngYmd"))){ // 사용기간시작일
        		this.divForm.form.Div05.form.calUsePrdBgngYmd.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["사용기간시작일 \n"]);
        		return false;

        	}
        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "usePrdEndYmd"))){ // 사용기간종료일
        		this.divForm.form.Div05.form.calUsePrdEndYmd.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["사용기간종료일 \n"]);
        		return false;

        	}
        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "elctyPosplyMtdCd"))){ // 전기전원방식
        		this.divForm.form.Div05.form.rdoElctyPosplyMtd.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["전기전원방식 \n"]);
        		return false;

        	}
        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "posplyShtotYmd"))){ // 전원차단일
        		this.divForm.form.Div05.form.calPosplyPutYmd.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["전원차단일 \n"]);
        		return false;

        	}
        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "spadptNm"))){ // 수급지점
        		this.divForm.form.Div05.form.edtSpadPt.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["수급지점 \n"]);
        		return false;

        	}
        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "emgcSpadptNm"))){ // 수급지점(비상)
        		this.divForm.form.Div05.form.edtSpadPtEmgc.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["수급지점(비상) \n"]);
        		return false;

        	}
        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "gageNo"))){ // 계량기번호
        		this.divForm.form.Div05.form.edtGageNo.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["계량기번호 \n"]);
        		return false;

        	}
        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "emgcGageNo"))){ // 계량기번호(비상)
        		this.divForm.form.Div05.form.edtGageNoEmgc.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["계량기번호(비상) \n"]);
        		return false;

        	}
        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "gageMngNo"))){ // 계량기관리번호
        		this.divForm.form.Div05.form.edtGageMngNo.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["계량기관리번호 \n"]);
        		return false;

        	}
        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "emgcGageMngNo"))){ // 계량기관리번호(비상)
        		this.divForm.form.Div05.form.edtGageMngNoEmgc.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["계량기관리번호(비상) \n"]);
        		return false;

        	}
        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "aplyRmtqt"))){ // 검침값
        		this.divForm.form.Div05.form.edtRmtqt.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["검침값 \n"]);
        		return false;

        	}
        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "emgcRmtqt"))){ // 검침값(비상)
        		this.divForm.form.Div05.form.edtRmtqtEmgc.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["검침값(비상) \n"]);
        		return false;

        	}
        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "gageMnfct"))){ // 계량기배율
        		this.divForm.form.Div05.form.edtGageMnfct.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["계량기배율 \n"]);
        		return false;

        	}
        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "emgcGageMnfct"))){ // 계량기배율(비상)
        		this.divForm.form.Div05.form.edtGageMnfctEmgc.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["계량기배율(비상) \n"]);
        		return false;

        	}

        	if(this.gfnIsNull(this.dsFile.getColumn(0, "C110"))){
        		this.divForm.form.Div05.form.btnRmtqtPhotoFile.setFocus();
        		this.gfnAlertMsg("msg", "MSG_011", ["검침값 사진을 \n등록하여 주세요."]);
        		return false;

        	}
        	if(this.gfnIsNull(this.dsFile.getColumn(0, "C120"))){
        		this.divForm.form.Div05.form.btnRmtqtEmgcPhotoFile.setFocus();
        		this.gfnAlertMsg("msg", "MSG_011", ["검침값(비상) 사진을 \n등록하여 주세요."]);
        		return false;

        	}

        	// 해지사유가 기타일때
        	if(this.dsEleMst.getColumn(0, "cncltnRsnCd") == "ELEEETCAN004"){
        		if(this.gfnIsNull(this.dsEleMst.getColumn(0, "cncltnRsnEtcCn"))){ // 기타 해지사유
        			this.divForm.form.Div05.form.edtCncltnRsnEtc.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["기타 해지사유 \n"]);
        			return false;
        		}
        	}
        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "rprsvNm"))){ // 대표자명
        		this.divForm.form.Div05.form.edtRprsvNm.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["대표자명 \n"]);
        		return false;
        	}

        	// 공사미소유건물
        	if(sPbcprtPsnYn == "0"){
        		if(this.gfnIsNull(this.dsEleMst.getColumn(0, "rtosIdntyCmptnYmd"))){ // 원상복구확인완료일
        			this.divForm.form.Div05.form.calOrgnstRstrIdntyYmd.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["원상복구확인완료일 \n"]);
        			return false;
        		}
        		if(this.gfnIsNull(this.dsEleMst.getColumn(0, "crtYmd"))){ // 생성일
        			this.divForm.form.Div05.form.calCrtYmd.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["생성일 \n"]);
        			return false;
        		}
        		if(this.gfnIsNull(this.dsEleMst.getColumn(0, "kepcoJntCtrtYn"))){ // 한전공동계약여부
        			this.divForm.form.Div06.form.rdoKepcoJntCtrtYn.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["한전공동계약여부 \n"]);
        			return false;
        		}

        		// 한전계약확인이 아닐때 계량기철거여부 체크
        		if(this.jobCd != "TAS00136"){
        			if(this.gfnIsNull(this.dsEleMst.getColumn(0, "gageDmltnYn"))){ // 계량기철거여부
        				this.divForm.form.Div06.form.rdoGageDmltnYn.setFocus();
        				this.gfnAlertMsg("msg", "MSG_009", ["계량기철거여부 \n"]);
        				return false;
        			}
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

        	// this.jobCd 가 TAS00127, TAS00133 : 신청 이라 이외에는 컴포넌트 readOnly 처리해줌.
        	if(this.jobCd != "TAS00127" && this.jobCd != "TAS00133"){
        		// 신청서 작성 이후 화면 컴포넌트 활성화
        		this.divForm.form.Div05.form.Panel02.visible = true;
        		this.divForm.form.Div05.form.Panel03.visible = true;
        		this.divForm.form.Div05.form.Panel05.visible = true;
        		this.divForm.form.Div05.form.Panel06.visible = true;
        		this.divForm.form.Div05.form.Panel07.visible = true;
        		this.divForm.form.Div05.form.Panel08.visible = true;
        		this.divForm.form.Div05.form.Panel09.visible = true;
        		this.divForm.form.Div05.form.Panel10.visible = true;
        		this.divForm.form.Div05.form.Panel11.visible = true;

        		this.divForm.form.Div05.form.panFile1.visible = true;
        		this.divForm.form.Div05.form.panFile2.visible = true;

        		// 협력사접수가 아닐때
        		if(this.jobCd != "TAS00128"){
        			// 처리내역
        			this.divForm.form.sub_tit06.visible = true;

        		}

        		// 공사 미소유건물
        		if(this.aplySeCd == "TSPELE004"){
        			this.divForm.form.Div05.form.Panel14.visible = true; // 원상복구확인완료일
        			this.divForm.form.Div05.form.Panel05_01_00_00_01.visible = true; // 생성일

        			this.divForm.form.Div06.form.Panel04.visible = true;
        			// this.divForm.form.Div06.form.Panel05.visible = true;
        			this.divForm.form.Div06.form.Panel06.visible = true;

        		}

        		this.resetScroll();

        		// 만족도 조사
        		if(this.jobCd == "TAS00285" || this.jobCd == "TAS00268"){
        			this.divForm.form.divInfoGuide.visible = false;
        			this.divForm.form.divDgstfnExmn.visible = true;

        			this.resetScroll();

        		}

        		var sDivFrom = this.divForm.form;

        		var arrDivComps = [];

        		// TAS00129 : 신청서 작성, TAS00131 : 완료처리, TAS00518 : ERP담당자처리 일때 컴포넌트 입력 가능하게 열어줌.
        		// TAS00136 : 한전계약확인, TAS00140 : 완료처리
        		if(this.jobCd == "TAS00129" || this.jobCd == "TAS00131" || this.jobCd == "TAS00518"
        		  || this.jobCd == "TAS00136" || this.jobCd == "TAS00140"){
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
        					if((this.jobCd == "TAS00136" || this.jobCd == "TAS00140") && oComp.id == "rdoKepcoJntCtrtYn"){
        						return;

        					}
        					// 완료처리 일때 계량기철거여부 활성화
        					if(this.jobCd == "TAS00140" && oComp.id == "rdoGageDmltnYn"){
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

        	}else if(objNm == "btnMinAplcntInfo"){
        		objDiv = this.divForm.form.Div01;

        	}else if(objNm == "btnMinAplyPstn"){
        		objDiv = this.divForm.form.Div02;

        	}else if(objNm == "btnMinCustInfo"){
        		objDiv = this.divForm.form.Div03;

        	}else if(objNm == "btnMinClmInfo"){
        		objDiv = this.divForm.form.Div04;

        	}else if(objNm == "btnMinElctyAplyInfo"){
        		objDiv = this.divForm.form.Div05;

        	}else if(objNm == "btnMinPrcsDsctn"){
        		objDiv = this.divForm.form.Div06;

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

        	}else if(objNm == "btn07"){
        		objDiv = this.divForm.form.Div06;
        		objTit = this.divForm.form.sub_tit06;

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
         * @name : rdoPayPicSmYn_onitemclick
         * @description : 납부담당자동일여부 아이템 클릭 시
         ***************************************************************************/
        this.rdoPayPicSmYn_onitemclick = function(obj,e)
        {
        	this.rdoPaySe = "1";
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
         * @name : rdoBldgPsnSe_onitemchanged
         * @description : 건물소유구분 라디오 수정 시
         ***************************************************************************/
        this.rdoBldgPsnSe_onitemchanged = function(obj,e)
        {
        	var objVal = e.postvalue;

        	if(!this.gfnIsNull(objVal)){
        		// 신청구분코드([공사소유건물]전기해지신청 : "TSPELE003", [공사미소유건물]전기해지신청 : "TSPELE004")
        		// 작업코드(기본값 TAS00127 : [공사소유건물]신청서작성, TAS00133 : [공사미소유건물]신청서작성)
        		if(this.gfnDecode(this.jobCd, "TAS00127", "1", "TAS00133", "1", "0") == "1"){
        			if(objVal == "1"){ // 공사건물
        				this.aplySeCd = "TSPELE003";
        				this.jobCd = "TAS00127";

        			}else if(objVal == "0"){ // 공사미소유
        				this.aplySeCd = "TSPELE004";
        				this.jobCd = "TAS00133";

        			}
        			// 신청구분코드 세팅
        			this.dsEleMst.setColumn(0, "aplySeCd", this.aplySeCd);

        			// 신청구분명, 버튼 조회
        			this.cfnGetAplySeNm({ id:"getAplySeNm", cbf:"fnCallback", aplySeCd:this.aplySeCd });
        			this.cfnBtnCrt({ crtTrgt:this.divBtn, cbf:"fnCallback", lnkgEvnt:this.btn_onclick, inqCnd : { jobPrcsPrgrsSeCd:this.jobCd} });

        		}
        	}
        };

        /**************************************************************************
         * @name : rdoCncltnRsn_onitemchanged
         * @description : 해지사유 라디오 수정 시
         ***************************************************************************/
        this.rdoCncltnRsn_onitemchanged = function(obj,e)
        {
        	var objVal = obj.value;

        	// 해지 사유가 기타 일때
        	if(objVal == "ELEEETCAN004"){
        		this.divForm.form.Div05.form.Panel13.visible = true;

        	}else{
        		this.divForm.form.Div05.form.Panel13.visible = false;

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
        	---------------------------- 공사 소유 ------------------------------------
        		ACT00022		신청및접수		TAS00127	1311.신청			CTL00198	신청
        		ACT00022		신청및접수		TAS00127	1311.신청			CTL00752	임시저장
        		ACT00022		신청및접수		TAS00127	1311.신청			CTL00817	종료
        		ACT00022		신청및접수		TAS00127	1311.신청			CTL01000	신청취소
        		ACT00022		신청및접수		TAS00128	1321.협력사접수		CTL00199	접수
        		ACT00023		원상회복		TAS00129	1331.신청서작성		CTL00200	담당자변경
        		ACT00023		원상회복		TAS00129	1331.신청서작성		CTL00201	신청서작성완료
        		ACT00023		원상회복		TAS00129	1331.신청서작성		CTL00872	미처리종료
        		ACT00023		원상회복		TAS00129	1331.신청서작성		CTL00915	임시저장
        		ACT00024		완료처리		TAS00131	1351.완료처리			CTL00205	처리완료
        		ACT00024		완료처리		TAS00131	1351.완료처리			CTL00275	만족도요청			// 미사용
        		ACT00024		완료처리		TAS00131	1351.완료처리			CTL00642	ERP담당자이관
        		ACT00024		완료처리		TAS00131	1351.완료처리			CTL00933	임시저장
        		ACT00024		완료처리		TAS00518	1352.ERP담당자처리		CTL01029	처리완료
        		ACT00024		완료처리		TAS00518	1352.ERP담당자처리		CTL01030	임시저장
        		ACT00025		종료			TAS00132	종료
        		ACT00140		만족도조사		TAS00285	1361.만족도조사		CTL00274	설문응답완료
        	--------------------------------------------------------------------------
        	---------------------------- 공사 미소유 ------------------------------------
        		ACT00026		신청및접수		TAS00133	1411.신청			CTL00206	신청
        		ACT00026		신청및접수		TAS00133	1411.신청			CTL00753	임시저장
        		ACT00026		신청및접수		TAS00133	1411.신청			CTL00818	종료
        		ACT00026		신청및접수		TAS00133	1411.신청			CTL01001	신청취소
        		ACT00026		신청및접수		TAS00135	1421.협력사접수		CTL00207	접수
        		ACT00026		신청및접수		TAS00136	1422.한전계약확인		CTL00210	담당자변경
        		ACT00026		신청및접수		TAS00136	1422.한전계약확인		CTL00211	신청서작성완료
        		ACT00026		신청및접수		TAS00136	1422.한전계약확인		CTL00873	미처리종료
        		ACT00028		검침및단전		TAS00138	1451.계량기철거		CTL00216	완료요청			// 미사용
        		ACT00028		검침및단전		TAS00138	1451.계량기철거		CTL00754	이의신청			// 미사용
        		ACT00028		검침및단전		TAS00139	1441.검침및단전		CTL00783	계량기철거요청		// 미사용
        		ACT00029		완료처리		TAS00140	1471.완료처리			CTL00217	만족도요청			// 미사용
        		ACT00029		완료처리		TAS00140	1471.완료처리			CTL00281	처리완료
        		ACT00029		완료처리		TAS00140	1471.완료처리			CTL00646	ERP담당자이관
        		ACT00029		완료처리		TAS00140	1471.완료처리			CTL00648	반려				// 미사용
        		ACT00030		종료			TAS00141	종료
        		ACT00142		만족도조사		TAS00268	1491.만족도조사		CTL00218	설문응답완료
        	--------------------------------------------------------------------------
        	*/

        	// 임시저장, 신청취소, 접수
        	if(vBtnCd == "CTL00752" || vBtnCd == "CTL00753" || vBtnCd == "CTL00915" || vBtnCd == "CTL00933" || vBtnCd == "CTL01030"
        	  || vBtnCd == "CTL01000" || vBtnCd == "CTL00199" || vBtnCd == "CTL01001" || vBtnCd == "CTL00207"){
        		this.vStrSvcId  = "eleUseAplcfmWrtTmprStrg";
        		this.vStrSvcUrl = "ele/eleUseAplcfmWrtTmprStrg.do";

        	}else if(vBtnCd == "CTL00198" || vBtnCd == "CTL00206"){ // 신청
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

        	}else if(vBtnCd == "CTL00201" || vBtnCd == "CTL00642" || vBtnCd == "CTL00205" || vBtnCd == "CTL01029"
        	  || vBtnCd == "CTL00211" || vBtnCd == "CTL00646" || vBtnCd == "CTL00281"){ // 신청서작성완료, ERP담당자이관, 처리완료
        		// 신청서작성완료
        		// validation check
        		var res = this.fnValiChk2();
        		if(!res){
        			return;

        		}

        		this.vStrSvcId  = "eleUseAplcfmWrtTmprStrg";
        		this.vStrSvcUrl = "ele/eleUseAplcfmWrtTmprStrg.do";

        	}else if(vBtnCd == "CTL00817" || vBtnCd == "CTL00872" || vBtnCd == "CTL00818" || vBtnCd == "CTL00873"){ // 종료, 미처리종료
        		// 신규입력일때 종료 버튼 클릭 시 화면만 닫아줌.
        		if(this.dsEleMst.getRowType(0) == Dataset.ROWTYPE_INSERT){
        			this.gfnConfirmMsg("endConfirm", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"], "", ["종료"]);

        			return;

        		}else{
        			this.vStrSvcId  = "eleUseAplcfmWrtTmprStrg";
        			this.vStrSvcUrl = "ele/eleUseAplcfmWrtTmprStrg.do";

        		}

        	}else if(vBtnCd == "CTL00200" || vBtnCd == "CTL00210"){ // 담당자변경
        		alert("담당자변경 팝업 완료 시 연결 예정!!");
        		return;

        	}else if(vBtnCd == "CTL00274" || vBtnCd == "CTL00218"){ // 설문응답완료
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
        			TSPDOC130 : 전기 및 전기시설 사용해지[공사건물]
        			TSPDOC140 : 전기 및 전기시설 사용해지(변압기 공동이용 고저압수용가)[공사미소유건물]
        		*/
        		if(sPbcprtPsnYn == "1"){
        			sDocCd = "TSPDOC130";

        		}else if(sPbcprtPsnYn == "0"){
        			sDocCd = "TSPDOC140";

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
        	if(vBtnCd == "CTL00199" || vBtnCd == "CTL00207"){
        		// 접수일자 세팅
        		this.dsEleMst.setColumn(0, "rcptDt", curDt);
        		this.dsMst.setColumn(0, "rcptDt", curDt);

        	}

        	// 종료, 미처리종료, 처리완료
        	if(vBtnCd == "CTL00817" || vBtnCd == "CTL00872" || vBtnCd == "CTL00205" || vBtnCd == "CTL01029" || vBtnCd == "CTL00818"
        	  || vBtnCd == "CTL00873" || vBtnCd == "CTL00281"){
        		// 종료일자 세팅
        		this.dsEleMst.setColumn(0, "endDt", curDt);
        		this.dsMst.setColumn(0, "endDt", curDt);

        	}

        	// 설문응답완료
        	if(vBtnCd == "CTL00274" || vBtnCd == "CTL00218"){
        		this.dsEleMst.setColumn(0, "dgstfnRspnsDt", curDt);
        		this.dsEleMst.setColumn(0, "dgstfnRspnsYn", "1");

        	}

        	// ERP담당자이관
        	if(vBtnCd == "CTL00642" || vBtnCd == "CTL00646"){
        		this.dsEleMst.setColumn(0, "erpInptYn", "1");

        	}

        	// 청구이메일 세팅
        	if(!this.gfnIsNull(this.dsEleMst.getColumn(0, "acuntEml1")) && !this.gfnIsNull(this.dsEleMst.getColumn(0, "acuntEml2"))){
        		var sAcuntEml = this.dsEleMst.getColumn(0, "acuntEml1") + "@" + this.dsEleMst.getColumn(0, "acuntEml2");

        		this.dsEleMst.setColumn(0, "acuntEml", sAcuntEml);

        	}

        	// 세금계산서이메일 세팅
        	if(!this.gfnIsNull(this.dsEleMst.getColumn(0, "etxivEmlAddr1")) && !this.gfnIsNull(this.dsEleMst.getColumn(0, "etxivEmlAddr2"))){
        		var sTxivEml = this.dsEleMst.getColumn(0, "etxivEmlAddr1") + "@" + this.dsEleMst.getColumn(0, "etxivEmlAddr2");

        		this.dsEleMst.setColumn(0, "etxivEmlAddr", sTxivEml);

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

        	if(vBtnCd == "CTL01000" || vBtnCd == "CTL01001"){ // 신청취소
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
        			if(this.jobCd == "TAS00127" || this.jobCd == "TAS00133"){
        				// 첨부 파일 삭제
        				this.cfnSetAtflInfo(this.RaonkUpload, obj).cfnDelAtfl();

        			}
        		}else{ // 그외의 첨부파일
        			// 신청서작성, 완료처리, ERP담당자처리 일때만 삭제
        			if(this.jobCd == "TAS00129" || this.jobCd == "TAS00131" || this.jobCd == "TAS00518"
        			  || this.jobCd == "TAS00136" || this.jobCd == "TAS00140"){
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
            this.divForm.form.Div01.form.rdoCtrtChcYn.addEventHandler("onitemchanged",this.rdoCtrtChcYn_onitemchanged,this);
            this.divForm.form.Div01.form.divEdtPop00.form.btnCtrt.addEventHandler("onclick",this.btnCtrt_onclick,this);
            this.divForm.form.Div02.form.cboRgn.addEventHandler("onitemchanged",this.cboRgn_onitemchanged,this);
            this.divForm.form.Div02.form.cboRgn.addEventHandler("onitemclick",this.cboRgn_onitemclick,this);
            this.divForm.form.Div03.form.divEdtPop2.form.btnBuilcAddr.addEventHandler("onclick",this.btnBuilcAddr_onclick,this);
            this.divForm.form.Div03.form.btnBuilcFile.addEventHandler("onclick",this.FileAtch_onclick,this);
            this.divForm.form.Div03.form.grdBuilc.addEventHandler("oncellclick",this.grd_oncellclick,this);
            this.divForm.form.Div04.form.rdoPayPicSmYn.addEventHandler("onitemchanged",this.rdoPayPicSmYn_onitemchanged,this);
            this.divForm.form.Div04.form.rdoPayPicSmYn.addEventHandler("onitemclick",this.rdoPayPicSmYn_onitemclick,this);
            this.divForm.form.Div04.form.rdoClmMtd.addEventHandler("onitemchanged",this.rdoClmMtd_onitemchanged,this);
            this.divForm.form.Div04.form.divEdtPop002.form.btnClmAddr.addEventHandler("onclick",this.btnClmAddr_onclick,this);
            this.divForm.form.Div04.form.sta00_00.addEventHandler("onclick",this.divForm_Div05_sta00_onclick,this);
            this.divForm.form.Div04.form.btnClmInfo.addEventHandler("onclick",this.btnClmInfo_onclick,this);
            this.divForm.form.Div04.form.btnPayPicPrvcClctUtztnWtcsFile.addEventHandler("onclick",this.FileAtch_onclick,this);
            this.divForm.form.Div04.form.grdPayPicPrvcClctUtztnWtcs.addEventHandler("oncellclick",this.grd_oncellclick,this);
            this.divForm.form.Div04.form.sta00.addEventHandler("onclick",this.divForm_Div05_sta00_onclick,this);
            this.divForm.form.Div04.form.edtAcuntEmlAddr2.addEventHandler("onchanged",this.edtEml_onchanged,this);
            this.divForm.form.Div04.form.cboAcuntEmlAddr.addEventHandler("onitemchanged",this.cboEml_onitemchanged,this);
            this.divForm.form.Div04.form.edtTxivEmlAddr2.addEventHandler("onchanged",this.edtEml_onchanged,this);
            this.divForm.form.Div04.form.cboTxivEmlAddr.addEventHandler("onitemchanged",this.cboEml_onitemchanged,this);
            this.divForm.form.Div04.form.divEdtPop.form.btnClmAddr.addEventHandler("onclick",this.btnClmAddr_onclick,this);
            this.divForm.form.Div05.form.rdoBldgPsnSe.addEventHandler("onitemchanged",this.rdoBldgPsnSe_onitemchanged,this);
            this.divForm.form.Div05.form.btnRmtqtPhotoFile.addEventHandler("onclick",this.FileAtch_onclick,this);
            this.divForm.form.Div05.form.grdRmtqtPhoto.addEventHandler("oncellclick",this.grd_oncellclick,this);
            this.divForm.form.Div05.form.btnRmtqtEmgcPhotoFile.addEventHandler("onclick",this.FileAtch_onclick,this);
            this.divForm.form.Div05.form.grdRmtqtEmgcPhoto.addEventHandler("oncellclick",this.grd_oncellclick,this);
            this.divForm.form.Div05.form.rdoCncltnRsn.addEventHandler("onitemchanged",this.rdoCncltnRsn_onitemchanged,this);
            this.divForm.form.Div05.form.sta00_00_02.addEventHandler("onclick",this.divForm_Div05_sta00_onclick,this);
            this.divForm.form.btnMinAplcntInfo.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.btnMinAplyPstn.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.btnMinCustInfo.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.btnMinClmInfo.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.btnMinElctyAplyInfo.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.btnMinPrcsDsctn.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.Div06.form.divGrd00.form.Static00_00.addEventHandler("onclick",this.divForm_Div04_Static00_onclick,this);
            this.divForm.form.Div06.form.sta00_00_02.addEventHandler("onclick",this.divForm_Div05_sta00_onclick,this);
            this.divForm.form.Div06.form.sta00_00_02_00.addEventHandler("onclick",this.divForm_Div05_sta00_onclick,this);
            this.divQuick.form.btn01.addEventHandler("onclick",this.btnQuick_onclick,this);
            this.divQuick.form.btn02.addEventHandler("onclick",this.btnQuick_onclick,this);
            this.divQuick.form.btn03.addEventHandler("onclick",this.btnQuick_onclick,this);
            this.divQuick.form.btn04.addEventHandler("onclick",this.btnQuick_onclick,this);
            this.divQuick.form.btn05.addEventHandler("onclick",this.btnQuick_onclick,this);
            this.divQuick.form.btn07.addEventHandler("onclick",this.btnQuick_onclick,this);
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
        this.loadIncludeScript("LIF086M00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
