(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LIF064M00");
            this.set_titletext("전기소모품교체 신청서작성");
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
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobNm\" type=\"STRING\" size=\"256\"/><Column id=\"bfrJobCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeNm\" type=\"STRING\" size=\"256\"/><Column id=\"endCd\" type=\"STRING\" size=\"256\"/><Column id=\"endNm\" type=\"STRING\" size=\"256\"/><Column id=\"docCd\" type=\"STRING\" size=\"256\"/><Column id=\"docNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyDt\" type=\"STRING\" size=\"256\"/><Column id=\"rcptDt\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"actlEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"clrId\" type=\"STRING\" size=\"256\"/><Column id=\"clrNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrJobGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrJobGroup\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrJobGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrFrdpmtId\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrFrdpmtNm\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPrcrPbcprtId\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPrcrPbcprtNm\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtPrcrJobGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"rcptChcYn\" type=\"STRING\" size=\"256\"/><Column id=\"rcptHwrtInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntHwrtInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptAplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptCtrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptPstnInfoCn\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptClmZip\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptClmAddr\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptClmDtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptCoNm\" type=\"STRING\" size=\"256\"/><Column id=\"clmCustCd\" type=\"STRING\" size=\"256\"/><Column id=\"clmAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmZip\" type=\"STRING\" size=\"256\"/><Column id=\"clmDtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"pstnSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"bldgSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"pstnSeNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstnInfoRnb\" type=\"STRING\" size=\"256\"/><Column id=\"dptyRegYn\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnRspnsYn\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnRspnsDt\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclNm1\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclNm2\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclNm3\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnExmnCn1\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnExmnCn2\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnExmnCn3\" type=\"STRING\" size=\"256\"/><Column id=\"fileCnt\" type=\"STRING\" size=\"256\"/><Column id=\"cnvyMttrCn\" type=\"STRING\" size=\"256\"/><Column id=\"dtlPstnCn\" type=\"STRING\" size=\"256\"/><Column id=\"clmCd\" type=\"STRING\" size=\"256\"/><Column id=\"oprtrOgdpNm\" type=\"STRING\" size=\"256\"/><Column id=\"oprtrNm\" type=\"STRING\" size=\"256\"/><Column id=\"idfrOgdpNm\" type=\"STRING\" size=\"256\"/><Column id=\"idfrCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"idfrNm\" type=\"STRING\" size=\"256\"/><Column id=\"crtYmd\" type=\"STRING\" size=\"256\"/><Column id=\"rpmYmd\" type=\"STRING\" size=\"256\"/><Column id=\"jobDrctnNm\" type=\"STRING\" size=\"256\"/><Column id=\"rpmCn\" type=\"STRING\" size=\"256\"/><Column id=\"clmAmt\" type=\"STRING\" size=\"256\"/><Column id=\"erpInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"rpmCnfdocPath\" type=\"STRING\" size=\"256\"/><Column id=\"frdpmtCnvyMttrCn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsAtflArtclList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFlscLapAplyList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"listNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"prdctCd\" type=\"STRING\" size=\"256\"/><Column id=\"qty\" type=\"STRING\" size=\"256\"/><Column id=\"prdctUntprc\" type=\"STRING\" size=\"256\"/><Column id=\"lbrco\" type=\"STRING\" size=\"256\"/><Column id=\"tclmAmt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFlscLapKnd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","divTitle:10",null,"4159","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickFrBg");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Button("btnMinTitle","460","-55","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit00","955","18","100%","58",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("17");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staSubTitle02_00_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_03\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_03","0","-53","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("18");
            obj.set_text("서비스 흐름 및 작업방법 안내(타이틀미정)");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_03","505","-53","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("19");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinTitle\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divInfoGuide","1660.00","262","100%","300",null,null,null,null,"300",null,this.divForm.form);
            obj.set_taborder("4");
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
            obj.set_taborder("8");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div01","0","0","100%","835",null,null,null,null,null,null,this.divForm.form);
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

            obj = new Static("staAplcntNmHwrtInpt","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("33");
            obj.set_text("신청자(수기입력)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtAplcntNmHwrtInpt","42","47","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("34");
            obj.set_readonly("true");
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

            obj = new Panel("Panel05","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
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

            obj = new Div("divEdtPop","780.00","635","150","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("42");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtClmZip","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.Div01.form.divEdtPop.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            obj.set_displaynulltext("우편번호 검색");
            this.divForm.form.Div01.form.divEdtPop.addChild(obj.name, obj);

            obj = new Button("btnClmAddr","edtClmZip:-40","0","40","40",null,null,null,null,null,null,this.divForm.form.Div01.form.divEdtPop.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            obj.set_visible("true");
            this.divForm.form.Div01.form.divEdtPop.addChild(obj.name, obj);

            obj = new Edit("edtClmAddr2","360","637","305","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("43");
            obj.set_readonly("true");
            obj.set_flexgrow("2");
            obj.set_displaynulltext("주소");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("panAddress","200","641","100%","45",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("44");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divEdtPop\"/><PanelItem id=\"PanelItem02\" componentid=\"edtClmAddr2\"/></Contents>");
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

            obj = new Panel("Panel06","0","60","100.00%","162",null,null,null,null,null,null,this.divForm.form.Div01.form);
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

            obj = new Panel("sub_tit02","1630","674","100%","66",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("12");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div02","0","Div01:376.428","100%","1084",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
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

            obj = new Panel("Panel01","1008","-116","100.00%","95",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("5");
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

            obj = new Static("staRnb","1028","-20","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("6");
            obj.set_text("위치정보(룸번호)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtRnb","1028","26","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_01","1028","-20","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRnb\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRnb\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel02","1008","-20","100.00%","95",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("9");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staRnbHwrtInpt","1028","76","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("10");
            obj.set_text("위치정보(수기입력)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtRnbHwrtInpt","1028","121","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("11");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel07_00","1028","76","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRnbHwrtInpt\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRnbHwrtInpt\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel03","1008","76","100.00%","95",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("13");
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

            obj = new Button("btnGrdAdd","356","156","47","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("14");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","413","156","45","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("15");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panGrdBtn","-70","156","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("16");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 20px 0px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnGrdAdd\"/><PanelItem id=\"PanelItem01\" componentid=\"btnGrdDel\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Div("divGrd","0","30","100%","400",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("17");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Grid("grdCtrtInfoList","0","0","100.00%","360",null,null,null,null,null,null,this.divForm.form.Div02.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsFlscLapAplyList");
            obj.set_autofittype("none");
            obj.getSetter("uFunction").set("checkbox");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"59\"/><Column size=\"290\"/><Column size=\"320\"/><Column size=\"320\"/><Column size=\"370\"/><Column size=\"300\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"품명(규격)\"/><Cell col=\"2\" text=\"수량\"/><Cell col=\"3\" text=\"제품단가\"/><Cell col=\"4\" text=\"인건비\"/><Cell col=\"5\" text=\"합계(청구금액)(원)\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:prdctCd\" displaytype=\"combotext\" textAlign=\"center\" edittype=\"combo\" combodataset=\"dsFlscLapKnd\" combocodecol=\"cdId\" combodatacol=\"cdNm\"/><Cell col=\"2\" text=\"bind:qty\" displaytype=\"mask\" textAlign=\"center\" edittype=\"mask\" maskeditformat=\"###,###,###,###,##0\"/><Cell col=\"3\" text=\"bind:prdctUntprc\" displaytype=\"mask\" textAlign=\"right\" edittype=\"none\" maskeditformat=\"###,###,###,###,##0\"/><Cell col=\"4\" text=\"bind:lbrco\" displaytype=\"mask\" textAlign=\"right\" edittype=\"none\" maskeditformat=\"###,###,###,###,##0\"/><Cell col=\"5\" text=\"bind:tclmAmt\" textAlign=\"right\" displaytype=\"mask\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" edittype=\"none\" cssclass=\"CellEnd\" maskeditformat=\"###,###,###,###,##0\"/></Band></Format></Formats>");
            this.divForm.form.Div02.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("PanelGrd","0","60","100.00%","511",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("18");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("10");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"panGrdBtn\"/><PanelItem id=\"PanelItem00\" componentid=\"divGrd\"/><PanelItem id=\"PanelItem03\" componentid=\"sta00_00_00_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staAplcntInst","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("19");
            obj.set_text("신청자 소속");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtAplcntInst","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("20");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("21");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staAplcntInst\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAplcntInst\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staOprtrInst","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("22");
            obj.set_text("작업자 소속");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtOprtrInst","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("23");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("24");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staOprtrInst\"/><PanelItem id=\"PanelItem01\" componentid=\"edtOprtrInst\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel04","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("25");
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

            obj = new Static("staAplcntNm","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("26");
            obj.set_text("신청자 성명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtAplcntNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("27");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("28");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staAplcntNm\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAplcntNm\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staOprtrNm","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("29");
            obj.set_text("작업자 성명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtOprtrNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("30");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("31");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staOprtrNm\"/><PanelItem id=\"PanelItem01\" componentid=\"edtOprtrNm\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel05","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("32");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_01_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staAplcntTelno","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("33");
            obj.set_text("신청자 연락처");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtAplcntTelno","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("34");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("35");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staAplcntTelno\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAplcntTelno\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_00_01","10.00","98","305","0",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("36");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel06","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("37");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_01_00_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_01","20","20","100%","30",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("38");
            obj.set_text("<fc v=\'red\'>동일 일자 및 장소에 대해 같은 항목 3개를 초과하는 반복 작업일 경우, 초과분에 대하여는 노무비 50%만 적용</fc>");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("sub_tit03","1630","674","100%","66",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("16");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_02\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div03","0","30","100%","764",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staCnvyMttr","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("0");
            obj.set_text("전달사항");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new TextArea("txtCnvyMttr","43","1193","100%","100",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("내용입력");
            obj.set_readonly("false");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00","43.00","1193","100%","100",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("2");
            obj.set_background("#ffffff");
            obj.set_verticalgap("10");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"txtCnvyMttr\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_02_00","20.00","950","980","146",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCnvyMttr\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_01_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01","51","1527","100.00%","157",null,null,null,null,null,null,this.divForm.form.Div03.form);
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
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Div("divGrd00","0","30","100%","187",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("5");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Grid("grdCnvyMttr","0","0","100.00%","100%",null,null,null,null,null,null,this.divForm.form.Div03.form.divGrd00.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsCnvyMttr");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"81\"/><Column size=\"140\"/><Column size=\"103\"/><Column size=\"900\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"일시\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"내용\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:frstRegDt\" displaytype=\"mask\" maskeditformat=\"####-##-## ##:##:##\" textAlign=\"center\" maskedittype=\"string\"/><Cell col=\"2\" textAlign=\"center\" text=\"bind:frstRegNm\"/><Cell col=\"3\" cssclass=\"CellEnd\" text=\"bind:cnvyMttrCn\"/></Band></Format></Formats>");
            this.divForm.form.Div03.form.divGrd00.addChild(obj.name, obj);

            obj = new Static("Static00_00","15","238","96.91%","40",null,null,null,null,null,null,this.divForm.form.Div03.form.divGrd00.form);
            obj.set_taborder("1");
            obj.set_text("※ My Page -> 검토의견함 메뉴에서 내용 등록/수정/삭제 가능합니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Txt");
            obj.set_wordWrap("char");
            obj.set_fittocontents("height");
            this.divForm.form.Div03.form.divGrd00.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","60","100.00%","208",null,null,null,null,null,null,this.divForm.form.Div03.form);
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
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staJobDrctn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("7");
            obj.set_text("작업오더");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edtJobDrctn","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("8");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staJobDrctn\"/><PanelItem id=\"PanelItem01\" componentid=\"edtJobDrctn\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_00_00","10.00","98","305","0",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel03","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div03.form);
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
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_01_00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staRpmYmd","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("12");
            obj.set_text("교체일자");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Calendar("calRpmYmd","280","139","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("13");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel05_01_00_00_01","20.00","242","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("14");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRpmYmd\"/><PanelItem id=\"PanelItem03\" componentid=\"calRpmYmd\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staRpmDsctn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_text("교체내역");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edtRpmDsctn","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("16");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel07_00_00_00_00_00_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("17");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRpmDsctn\"/><PanelItem id=\"PanelItem02\" componentid=\"edtRpmDsctn\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel04","0","242","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("18");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel05_01_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel07_00_00_00_00_00_01\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staClmYn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("19");
            obj.set_text("청구유무");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Radio("rdoClmYmd","200.00","328","393","49.37",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div03_form_rdoClmYmd_innerdataset = new nexacro.NormalDataset("divForm_form_Div03_form_rdoClmYmd_innerdataset", obj);
            divForm_form_Div03_form_rdoClmYmd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">ELEFLAFEE001</Col><Col id=\"datacolumn\">청구</Col></Row><Row><Col id=\"codecolumn\">ELEFLAFEE002</Col><Col id=\"datacolumn\">미청구</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div03_form_rdoClmYmd_innerdataset);
            obj.set_text("공사건물");
            obj.set_value("1");
            obj.set_index("0");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","10.00","98","100%","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("21");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staClmYn\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoClmYmd\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel05","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div03.form);
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
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staRpmCnfdoc","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("23");
            obj.set_text("교체확인서");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btnRpmCnfdocFile","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("24");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnFile","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("25");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnRpmCnfdocFile\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panTitle","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("26");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRpmCnfdoc\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Grid("grdRpmCnfdoc","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("27");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:A110\" cssclass=\"expr:dataset.parent.gfnIsNull(A110) ? &quot;&quot; : &quot;CellFile&quot;\" cursor=\"pointer\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.gfnIsNull(A110) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.gfnIsNull(A110) ? &quot;none&quot; : &quot;button&quot;\" text=\"삭제\" cssclass=\"expr:dataset.parent.gfnIsNull(A110) ? &quot;&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00","192","1038","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("28");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grdRpmCnfdoc\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFile1","0","42","100.00%","111",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("29");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel01_00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staSubTitle01","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_text("신청자 정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinAplcntInfo","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("7");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinAplcntInfo\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_00","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("9");
            obj.set_text("신청 정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinAplyInfo","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_00","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("11");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinAplyInfo\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_02","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("13");
            obj.set_text("처리내역");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinPrcsDsctn","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_02","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("15");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinPrcsDsctn\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divQuick",null,"62","296","156","62",null,null,null,null,null,this);
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
            obj.set_text("신청 정보");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn03","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("2");
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
            //-- Default Layout : this.divForm.form.Div01.form.divEdtPop.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01.form.divEdtPop.form,
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
                p.btnClmAddr.set_visible("true");
                p.btnClmAddr.move("edtClmZip:-40","0","40","40",null,null);
            	}
            );
            this.divForm.form.Div01.form.divEdtPop.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div01.form.divEdtPop.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div01.form.divEdtPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.Div01.form.divEdtPop.form.addLayout(obj.name, obj);
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

                p.staAplcntNmHwrtInpt.set_taborder("33");
                p.staAplcntNmHwrtInpt.set_text("신청자(수기입력)");
                p.staAplcntNmHwrtInpt.set_cssclass("sta_WF_Label");
                p.staAplcntNmHwrtInpt.move("10","98","100%","46",null,null);

                p.edtAplcntNmHwrtInpt.set_taborder("34");
                p.edtAplcntNmHwrtInpt.set_readonly("true");
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

                p.Panel05.set_taborder("40");
                p.Panel05.set_horizontalgap("20");
                p.Panel05.set_flexcrossaxiswrapalign("start");
                p.Panel05.set_flexwrap("wrap");
                p.Panel05.set_fittocontents("height");
                p.Panel05.set_verticalgap("0");
                p.Panel05.set_spacing("0px 20px 10px 20px");
                p.Panel05.set_cssclass("pal_WF_DtlBg");
                p.Panel05.set_type("horizontal");
                p.Panel05.move("0","60","100.00%","96",null,null);

                p.staClmAddr.set_taborder("41");
                p.staClmAddr.set_text("청구지주소/우편번호");
                p.staClmAddr.set_cssclass("sta_WF_Label_E");
                p.staClmAddr.move("0","0","100%","46",null,null);

                p.divEdtPop.set_taborder("42");
                p.divEdtPop.set_text("Div00");
                p.divEdtPop.set_formscrollbartype("none none");
                p.divEdtPop.set_formscrolltype("none");
                p.divEdtPop.set_flexgrow("1");
                p.divEdtPop.move("780.00","635","150","40",null,null);

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

                p.Panel06.set_taborder("47");
                p.Panel06.set_horizontalgap("20");
                p.Panel06.set_flexcrossaxiswrapalign("start");
                p.Panel06.set_flexwrap("wrap");
                p.Panel06.set_fittocontents("height");
                p.Panel06.set_verticalgap("0");
                p.Panel06.set_spacing("0px 20px 10px 20px");
                p.Panel06.set_cssclass("pal_WF_DtlBg");
                p.Panel06.set_type("horizontal");
                p.Panel06.move("0","60","100.00%","162",null,null);
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
            //-- Default Layout : this.divForm.form.Div02.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.Div02.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdCtrtInfoList.set_taborder("0");
                p.grdCtrtInfoList.set_binddataset("dsFlscLapAplyList");
                p.grdCtrtInfoList.set_autofittype("none");
                p.grdCtrtInfoList.getSetter("uFunction").set("checkbox");
                p.grdCtrtInfoList.set_maxwidth("");
                p.grdCtrtInfoList.move("0","0","100.00%","360",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.Div02.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div02.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div02.form.divGrd.form,
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

                p.Panel01.set_taborder("5");
                p.Panel01.set_horizontalgap("20");
                p.Panel01.set_flexcrossaxiswrapalign("start");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_verticalgap("0");
                p.Panel01.set_spacing("0px 20px 10px 20px");
                p.Panel01.set_cssclass("pal_WF_DtlBg");
                p.Panel01.set_flexshrink("1");
                p.Panel01.set_fittocontents("height");
                p.Panel01.move("1008","-116","100.00%","95",null,null);

                p.staRnb.set_taborder("6");
                p.staRnb.set_text("위치정보(룸번호)");
                p.staRnb.set_cssclass("sta_WF_Label");
                p.staRnb.move("1028","-20","100%","46",null,null);

                p.edtRnb.set_taborder("7");
                p.edtRnb.set_readonly("true");
                p.edtRnb.move("1028","26","100%","40",null,null);

                p.Panel01_00_01.set_taborder("8");
                p.Panel01_00_01.set_type("vertical");
                p.Panel01_00_01.set_flexgrow("1");
                p.Panel01_00_01.move("1028","-20","305","86",null,null);

                p.Panel02.set_taborder("9");
                p.Panel02.set_horizontalgap("20");
                p.Panel02.set_flexcrossaxiswrapalign("start");
                p.Panel02.set_flexwrap("wrap");
                p.Panel02.set_fittocontents("height");
                p.Panel02.set_verticalgap("0");
                p.Panel02.set_spacing("0px 20px 10px 20px");
                p.Panel02.set_cssclass("pal_WF_DtlBg");
                p.Panel02.move("1008","-20","100.00%","95",null,null);

                p.staRnbHwrtInpt.set_taborder("10");
                p.staRnbHwrtInpt.set_text("위치정보(수기입력)");
                p.staRnbHwrtInpt.set_cssclass("sta_WF_Label");
                p.staRnbHwrtInpt.move("1028","76","100%","46",null,null);

                p.edtRnbHwrtInpt.set_taborder("11");
                p.edtRnbHwrtInpt.set_readonly("false");
                p.edtRnbHwrtInpt.move("1028","121","100%","40",null,null);

                p.Panel07_00.set_taborder("12");
                p.Panel07_00.set_type("vertical");
                p.Panel07_00.set_flexgrow("1");
                p.Panel07_00.move("1028","76","305","86",null,null);

                p.Panel03.set_taborder("13");
                p.Panel03.set_horizontalgap("20");
                p.Panel03.set_flexcrossaxiswrapalign("start");
                p.Panel03.set_flexwrap("wrap");
                p.Panel03.set_fittocontents("height");
                p.Panel03.set_verticalgap("0");
                p.Panel03.set_spacing("0px 20px 10px 20px");
                p.Panel03.set_cssclass("pal_WF_DtlBg");
                p.Panel03.set_visible("false");
                p.Panel03.move("1008","76","100.00%","95",null,null);

                p.btnGrdAdd.set_taborder("14");
                p.btnGrdAdd.set_text("추가");
                p.btnGrdAdd.set_cssclass("btn_WF_Small");
                p.btnGrdAdd.set_visible("true");
                p.btnGrdAdd.set_fittocontents("width");
                p.btnGrdAdd.move("356","156","47","34",null,null);

                p.btnGrdDel.set_taborder("15");
                p.btnGrdDel.set_text("삭제");
                p.btnGrdDel.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel.set_visible("true");
                p.btnGrdDel.set_fittocontents("width");
                p.btnGrdDel.move("413","156","45","34",null,null);

                p.panGrdBtn.set_taborder("16");
                p.panGrdBtn.set_flexcrossaxisalign("start");
                p.panGrdBtn.set_flexcrossaxiswrapalign("start");
                p.panGrdBtn.set_flexmainaxisalign("end");
                p.panGrdBtn.set_horizontalgap("10");
                p.panGrdBtn.set_spacing("0px 20px 0px 0px");
                p.panGrdBtn.move("-70","156","100%","40",null,null);

                p.divGrd.set_taborder("17");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","30","100%","400",null,null);

                p.PanelGrd.set_taborder("18");
                p.PanelGrd.set_horizontalgap("20");
                p.PanelGrd.set_flexcrossaxiswrapalign("start");
                p.PanelGrd.set_flexwrap("wrap");
                p.PanelGrd.set_fittocontents("height");
                p.PanelGrd.set_verticalgap("10");
                p.PanelGrd.set_spacing("10px 20px 10px 20px");
                p.PanelGrd.set_cssclass("pal_WF_DtlBg");
                p.PanelGrd.set_type("horizontal");
                p.PanelGrd.set_visible("false");
                p.PanelGrd.move("0","60","100.00%","511",null,null);

                p.staAplcntInst.set_taborder("19");
                p.staAplcntInst.set_text("신청자 소속");
                p.staAplcntInst.set_cssclass("sta_WF_Label_E");
                p.staAplcntInst.move("10","98","100%","46",null,null);

                p.edtAplcntInst.set_taborder("20");
                p.edtAplcntInst.set_readonly("false");
                p.edtAplcntInst.move("10.00","158","100%","40",null,null);

                p.Panel00_00_00.set_taborder("21");
                p.Panel00_00_00.set_type("vertical");
                p.Panel00_00_00.set_flexgrow("1");
                p.Panel00_00_00.set_minwidth("");
                p.Panel00_00_00.move("10.00","98","305","86",null,null);

                p.staOprtrInst.set_taborder("22");
                p.staOprtrInst.set_text("작업자 소속");
                p.staOprtrInst.set_cssclass("sta_WF_Label");
                p.staOprtrInst.move("10","98","100%","46",null,null);

                p.edtOprtrInst.set_taborder("23");
                p.edtOprtrInst.set_readonly("false");
                p.edtOprtrInst.move("10.00","158","100%","40",null,null);

                p.Panel00_00_01_00.set_taborder("24");
                p.Panel00_00_01_00.set_type("vertical");
                p.Panel00_00_01_00.set_flexgrow("1");
                p.Panel00_00_01_00.set_minwidth("");
                p.Panel00_00_01_00.move("10.00","98","305","86",null,null);

                p.Panel04.set_taborder("25");
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

                p.staAplcntNm.set_taborder("26");
                p.staAplcntNm.set_text("신청자 성명");
                p.staAplcntNm.set_cssclass("sta_WF_Label_E");
                p.staAplcntNm.move("10","98","100%","46",null,null);

                p.edtAplcntNm.set_taborder("27");
                p.edtAplcntNm.set_readonly("false");
                p.edtAplcntNm.move("10.00","158","100%","40",null,null);

                p.Panel00_00_00_00.set_taborder("28");
                p.Panel00_00_00_00.set_type("vertical");
                p.Panel00_00_00_00.set_flexgrow("1");
                p.Panel00_00_00_00.set_minwidth("");
                p.Panel00_00_00_00.move("10.00","98","305","86",null,null);

                p.staOprtrNm.set_taborder("29");
                p.staOprtrNm.set_text("작업자 성명");
                p.staOprtrNm.set_cssclass("sta_WF_Label");
                p.staOprtrNm.move("10","98","100%","46",null,null);

                p.edtOprtrNm.set_taborder("30");
                p.edtOprtrNm.set_readonly("false");
                p.edtOprtrNm.move("10.00","158","100%","40",null,null);

                p.Panel00_00_01_00_00.set_taborder("31");
                p.Panel00_00_01_00_00.set_type("vertical");
                p.Panel00_00_01_00_00.set_flexgrow("1");
                p.Panel00_00_01_00_00.set_minwidth("");
                p.Panel00_00_01_00_00.move("10.00","98","305","86",null,null);

                p.Panel05.set_taborder("32");
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

                p.staAplcntTelno.set_taborder("33");
                p.staAplcntTelno.set_text("신청자 연락처");
                p.staAplcntTelno.set_cssclass("sta_WF_Label_E");
                p.staAplcntTelno.move("10","98","100%","46",null,null);

                p.edtAplcntTelno.set_taborder("34");
                p.edtAplcntTelno.set_readonly("false");
                p.edtAplcntTelno.move("10.00","158","100%","40",null,null);

                p.Panel00_00_00_01.set_taborder("35");
                p.Panel00_00_00_01.set_type("vertical");
                p.Panel00_00_00_01.set_flexgrow("1");
                p.Panel00_00_00_01.set_minwidth("");
                p.Panel00_00_00_01.move("10.00","98","305","86",null,null);

                p.Panel00_00_01_00_01.set_taborder("36");
                p.Panel00_00_01_00_01.set_type("vertical");
                p.Panel00_00_01_00_01.set_flexgrow("1");
                p.Panel00_00_01_00_01.set_minwidth("");
                p.Panel00_00_01_00_01.move("10.00","98","305","0",null,null);

                p.Panel06.set_taborder("37");
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

                p.sta00_00_00_01.set_taborder("38");
                p.sta00_00_00_01.set_text("<fc v=\'red\'>동일 일자 및 장소에 대해 같은 항목 3개를 초과하는 반복 작업일 경우, 초과분에 대하여는 노무비 50%만 적용</fc>");
                p.sta00_00_00_01.set_cssclass("sta_WF_Des");
                p.sta00_00_00_01.set_fittocontents("height");
                p.sta00_00_00_01.set_usedecorate("true");
                p.sta00_00_00_01.move("20","20","100%","30",null,null);
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
            //-- Default Layout : this.divForm.form.Div03.form.divGrd00.form
            obj = new Layout("default","",0,0,this.divForm.form.Div03.form.divGrd00.form,
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
            this.divForm.form.Div03.form.divGrd00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div03.form.divGrd00.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div03.form.divGrd00.form,
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
            this.divForm.form.Div03.form.divGrd00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div03.form
            obj = new Layout("default","",0,0,this.divForm.form.Div03.form,
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

                p.staJobDrctn.set_taborder("7");
                p.staJobDrctn.set_text("작업오더");
                p.staJobDrctn.set_cssclass("sta_WF_Label_E");
                p.staJobDrctn.move("10","98","100%","46",null,null);

                p.edtJobDrctn.set_taborder("8");
                p.edtJobDrctn.set_readonly("false");
                p.edtJobDrctn.move("10.00","158","100%","40",null,null);

                p.Panel00_00_00_00.set_taborder("9");
                p.Panel00_00_00_00.set_type("vertical");
                p.Panel00_00_00_00.set_flexgrow("1");
                p.Panel00_00_00_00.set_minwidth("");
                p.Panel00_00_00_00.move("10.00","98","305","86",null,null);

                p.Panel00_00_01_00_00.set_taborder("10");
                p.Panel00_00_01_00_00.set_type("vertical");
                p.Panel00_00_01_00_00.set_flexgrow("1");
                p.Panel00_00_01_00_00.set_minwidth("");
                p.Panel00_00_01_00_00.move("10.00","98","305","0",null,null);

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
                p.Panel03.move("0","60","100.00%","96",null,null);

                p.staRpmYmd.set_taborder("12");
                p.staRpmYmd.set_text("교체일자");
                p.staRpmYmd.set_cssclass("sta_WF_Label_E");
                p.staRpmYmd.move("10","98","100%","46",null,null);

                p.calRpmYmd.set_taborder("13");
                p.calRpmYmd.move("280","139","100%","40",null,null);

                p.Panel05_01_00_00_01.set_taborder("14");
                p.Panel05_01_00_00_01.set_type("vertical");
                p.Panel05_01_00_00_01.set_flexgrow("1");
                p.Panel05_01_00_00_01.set_visible("true");
                p.Panel05_01_00_00_01.move("20.00","242","305","86",null,null);

                p.staRpmDsctn.set_taborder("15");
                p.staRpmDsctn.set_cssclass("sta_WF_Label_E");
                p.staRpmDsctn.set_text("교체내역");
                p.staRpmDsctn.move("10","98","100%","46",null,null);

                p.edtRpmDsctn.set_taborder("16");
                p.edtRpmDsctn.set_readonly("false");
                p.edtRpmDsctn.move("10.00","158","100%","40",null,null);

                p.Panel07_00_00_00_00_00_01.set_taborder("17");
                p.Panel07_00_00_00_00_00_01.set_type("vertical");
                p.Panel07_00_00_00_00_00_01.set_flexgrow("1");
                p.Panel07_00_00_00_00_00_01.set_minwidth("");
                p.Panel07_00_00_00_00_00_01.move("10.00","98","305","86",null,null);

                p.Panel04.set_taborder("18");
                p.Panel04.set_horizontalgap("20");
                p.Panel04.set_flexcrossaxiswrapalign("start");
                p.Panel04.set_flexwrap("wrap");
                p.Panel04.set_fittocontents("height");
                p.Panel04.set_verticalgap("0");
                p.Panel04.set_spacing("0px 20px 10px 20px");
                p.Panel04.set_cssclass("pal_WF_DtlBg");
                p.Panel04.set_visible("false");
                p.Panel04.move("0","242","100.00%","96",null,null);

                p.staClmYn.set_taborder("19");
                p.staClmYn.set_text("청구유무");
                p.staClmYn.set_cssclass("sta_WF_Label_E");
                p.staClmYn.move("10","98","100%","46",null,null);

                p.rdoClmYmd.set_taborder("20");
                p.rdoClmYmd.set_innerdataset(divForm_form_Div03_form_rdoClmYmd_innerdataset);
                p.rdoClmYmd.set_codecolumn("codecolumn");
                p.rdoClmYmd.set_datacolumn("datacolumn");
                p.rdoClmYmd.set_direction("vertical");
                p.rdoClmYmd.set_fittocontents("width");
                p.rdoClmYmd.set_value("1");
                p.rdoClmYmd.set_index("0");
                p.rdoClmYmd.move("200.00","328","393","49.37",null,null);

                p.Panel00_00.set_taborder("21");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.set_minwidth("");
                p.Panel00_00.move("10.00","98","100%","86",null,null);

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

                p.staRpmCnfdoc.set_taborder("23");
                p.staRpmCnfdoc.set_text("교체확인서");
                p.staRpmCnfdoc.set_cssclass("sta_WF_Label_E");
                p.staRpmCnfdoc.set_flexgrow("1");
                p.staRpmCnfdoc.move("0","44","305","46",null,null);

                p.btnRpmCnfdocFile.set_taborder("24");
                p.btnRpmCnfdocFile.set_text("파일선택");
                p.btnRpmCnfdocFile.set_cssclass("btn_WF_FileUp");
                p.btnRpmCnfdocFile.move("124","58","116","40",null,null);

                p.panBtnFile.set_taborder("25");
                p.panBtnFile.set_flexgrow("1");
                p.panBtnFile.set_flexcrossaxisalign("start");
                p.panBtnFile.set_flexmainaxisalign("end");
                p.panBtnFile.set_horizontalgap("10");
                p.panBtnFile.move("433","58","305","46",null,null);

                p.panTitle.set_taborder("26");
                p.panTitle.set_cssclass("pan_WF_FileTitle");
                p.panTitle.set_flexwrap("wrap");
                p.panTitle.set_fittocontents("height");
                p.panTitle.move("0","124","100%","46",null,null);

                p.grdRpmCnfdoc.set_taborder("27");
                p.grdRpmCnfdoc.set_binddataset("dsFile");
                p.grdRpmCnfdoc.set_autofittype("col");
                p.grdRpmCnfdoc.set_cssclass("grd_WF_FileAdd");
                p.grdRpmCnfdoc.set_scrollbartype("none none");
                p.grdRpmCnfdoc.move("20.00","114","100%","40",null,null);

                p.Panel01_00_00.set_taborder("28");
                p.Panel01_00_00.set_type("vertical");
                p.Panel01_00_00.set_verticalgap("10");
                p.Panel01_00_00.move("192","1038","100%","40",null,null);

                p.panFile1.set_taborder("29");
                p.panFile1.set_fittocontents("height");
                p.panFile1.set_spacing("10px 20px 10px 20px");
                p.panFile1.set_flexwrap("wrap");
                p.panFile1.set_cssclass("pal_WF_DtlBg");
                p.panFile1.set_verticalgap("4");
                p.panFile1.set_visible("false");
                p.panFile1.move("0","42","100.00%","111",null,null);
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
                p.btnMinTitle.set_taborder("20");
                p.btnMinTitle.set_cssclass("btn_WF_ACMinus");
                p.btnMinTitle.move("460","-55","34","34",null,null);

                p.sub_tit00.set_taborder("17");
                p.sub_tit00.set_background("#ffffff");
                p.sub_tit00.set_flexcrossaxisalign("end");
                p.sub_tit00.move("955","18","100%","58",null,null);

                p.staSubTitle02_00_03.set_taborder("18");
                p.staSubTitle02_00_03.set_text("서비스 흐름 및 작업방법 안내(타이틀미정)");
                p.staSubTitle02_00_03.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_03.move("0","-53","50%","50",null,null);

                p.Panel01_02_03.set_taborder("19");
                p.Panel01_02_03.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_03.set_spacing("0px 10px");
                p.Panel01_02_03.set_horizontalgap("10");
                p.Panel01_02_03.set_flexcrossaxisalign("center");
                p.Panel01_02_03.set_flexmainaxisalign("end");
                p.Panel01_02_03.move("505","-53","50%","50",null,null);

                p.divInfoGuide.set_taborder("4");
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

                p.sub_tit01.set_taborder("8");
                p.sub_tit01.set_background("#ffffff");
                p.sub_tit01.set_flexcrossaxisalign("end");
                p.sub_tit01.move("1630","674","100%","66",null,null);

                p.Div01.set_taborder("0");
                p.Div01.set_text("Div00");
                p.Div01.set_cssclass("div_WF_Bg");
                p.Div01.set_fittocontents("height");
                p.Div01.set_visible("false");
                p.Div01.move("0","0","100%","835",null,null);

                p.sub_tit02.set_taborder("12");
                p.sub_tit02.set_background("#ffffff");
                p.sub_tit02.set_flexcrossaxisalign("end");
                p.sub_tit02.move("1630","674","100%","66",null,null);

                p.Div02.set_taborder("2");
                p.Div02.set_text("Div00");
                p.Div02.set_cssclass("div_WF_Bg");
                p.Div02.set_fittocontents("height");
                p.Div02.set_visible("false");
                p.Div02.move("0","Div01:376.428","100%","1084",null,null);

                p.sub_tit03.set_taborder("16");
                p.sub_tit03.set_background("#ffffff");
                p.sub_tit03.set_flexcrossaxisalign("end");
                p.sub_tit03.move("1630","674","100%","66",null,null);

                p.Div03.set_taborder("3");
                p.Div03.set_text("Div00");
                p.Div03.set_cssclass("div_WF_Bg");
                p.Div03.set_fittocontents("height");
                p.Div03.set_visible("false");
                p.Div03.move("0","30","100%","764",null,null);

                p.staSubTitle01.set_taborder("5");
                p.staSubTitle01.set_text("신청자 정보");
                p.staSubTitle01.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle01.move("1630.00","690","50%","50",null,null);

                p.btnMinAplcntInfo.set_taborder("6");
                p.btnMinAplcntInfo.set_cssclass("btn_WF_ACMinus");
                p.btnMinAplcntInfo.move("2890.00","692","34","34",null,null);

                p.Panel01.set_taborder("7");
                p.Panel01.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01.set_spacing("0px 10px");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_flexcrossaxisalign("center");
                p.Panel01.set_flexmainaxisalign("end");
                p.Panel01.move("2340.00","690","50%","50",null,null);

                p.staSubTitle02_00_00.set_taborder("9");
                p.staSubTitle02_00_00.set_text("신청 정보");
                p.staSubTitle02_00_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_00.move("1630.00","690","50%","50",null,null);

                p.btnMinAplyInfo.set_taborder("10");
                p.btnMinAplyInfo.set_cssclass("btn_WF_ACMinus");
                p.btnMinAplyInfo.move("2890.00","692","34","34",null,null);

                p.Panel01_02_00.set_taborder("11");
                p.Panel01_02_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_00.set_spacing("0px 10px");
                p.Panel01_02_00.set_horizontalgap("10");
                p.Panel01_02_00.set_flexcrossaxisalign("center");
                p.Panel01_02_00.set_flexmainaxisalign("end");
                p.Panel01_02_00.move("2340.00","690","50%","50",null,null);

                p.staSubTitle02_00_02.set_taborder("13");
                p.staSubTitle02_00_02.set_text("처리내역");
                p.staSubTitle02_00_02.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_02.move("1630.00","690","50%","50",null,null);

                p.btnMinPrcsDsctn.set_taborder("14");
                p.btnMinPrcsDsctn.set_cssclass("btn_WF_ACMinus");
                p.btnMinPrcsDsctn.move("2890.00","692","34","34",null,null);

                p.Panel01_02_02.set_taborder("15");
                p.Panel01_02_02.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_02.set_spacing("0px 10px");
                p.Panel01_02_02.set_horizontalgap("10");
                p.Panel01_02_02.set_flexcrossaxisalign("center");
                p.Panel01_02_02.set_flexmainaxisalign("end");
                p.Panel01_02_02.move("2340.00","690","50%","50",null,null);
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
                p.btn02.set_text("신청 정보");
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
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("전기소모품교체 신청서작성");

                p.divTitle.set_taborder("3");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_cssclass("div_WF_QuickFrBg");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("height");
                p.divForm.move("0","divTitle:10",null,"4159","60",null);

                p.divQuick.set_taborder("1");
                p.divQuick.set_text("div00");
                p.divQuick.set_cssclass("div_WF_QuickMenu");
                p.divQuick.set_fittocontents("height");
                p.divQuick.move(null,"62","296","156","62",null);

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

            obj = new BindItem("item6","divForm.form.Div01.form.edtAplcntNm","value","dsEleMst","aplcntNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.Div01.form.edtAplcntMblTelno","value","dsEleMst","mblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.Div01.form.edtCtrtInstNm","value","dsEleMst","aplcntInstNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divForm.form.Div01.form.edtAplcntNmHwrtInpt","value","dsEleMst","hwrtInptAplcntNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.Div01.form.edtClmCustNo","value","dsEleMst","clmCustCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divForm.form.Div01.form.divEdtPop.form.edtClmZip","value","dsEleMst","clmZip");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divForm.form.Div01.form.edtClmAddr2","value","dsEleMst","clmAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divForm.form.Div01.form.edtClmAddrDtl2","value","dsEleMst","clmDtlAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divForm.form.Div02.form.cboRgn","value","dsEleMst","pstnSeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divForm.form.Div02.form.cboBldg","value","dsEleMst","bldgSeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divForm.form.Div02.form.edtRnb","value","dsEleMst","pstnInfoRnb");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divForm.form.Div02.form.edtRnbHwrtInpt","value","dsEleMst","hwrtInptPstnInfoCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divForm.form.Div02.form.edtAplcntInst","value","dsEleMst","idfrOgdpNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divForm.form.Div02.form.edtAplcntNm","value","dsEleMst","idfrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divForm.form.Div02.form.edtAplcntTelno","value","dsEleMst","idfrCtinfoNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divForm.form.Div02.form.edtOprtrInst","value","dsEleMst","oprtrOgdpNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divForm.form.Div02.form.edtOprtrNm","value","dsEleMst","oprtrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divForm.form.Div03.form.edtJobDrctn","value","dsEleMst","jobDrctnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divForm.form.Div03.form.calRpmYmd","value","dsEleMst","rpmYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divForm.form.Div03.form.edtRpmDsctn","value","dsEleMst","rpmCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divForm.form.Div03.form.rdoClmYmd","value","dsEleMst","clmCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divForm.form.Div03.form.txtCnvyMttr","value","dsEleMst","cnvyMttrCn");
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
        this.addIncludeScript("LIF064M00.xfdl","xjs::TaskCom.xjs");
        this.registerScript("LIF064M00.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	LIF064M00.xfdl
        *  @Creator 	CHG
        *  @CreateDate 	2025/01/09
        *  @Desction   생활 > 유틸리티신청/변경 > 전기신청 > 전기소모품교체 (램프등)
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2025/01/09				CHG							최초생성
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
        this.aplySeCd = "TSPELE006"; // 신청구분코드(전기사용(형광램프신청) : "TSPELE006")
        this.jobCd = "TAS00148"; // 작업코드(기본값 TAS00148 : 전기사용(형광램프신청) 신청서작성)

        this.btnDiv = this.divBtn; // 공통버튼영역 Div

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
        		this.divForm.form.Div02.visible = true;
        		this.divForm.form.Div03.visible = true;
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

        	console.log("this.objApp.gdsUser = " + this.objApp.gdsUser.saveXML());

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
        	// 218
        	if(e.pos == 0){
        		posTop1 = 62;
        		posTop2 = 218;

        	}else{
        		posTop1 = 12;
        		posTop2 = 168;

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

        	var strSvcId    = "elctyCsgdRpmAplcfmWrtInq";
        	var strSvcUrl   = "ele/elctyCsgdRpmAplcfmWrtInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsEleMst=dsEleMst dsFlscLapAplyList=dsFlscLapAplyList dsCnvyMttr=dsCnvyMttr dsAtfl=dsAtfl dsMst=dsMst";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /**************************************************************************
         * @name : fnSave
         * @description : 전기소모품교체 저장
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
         			          + " dsFlscLapAplyList=dsFlscLapAplyList:A"             // 형광램프신청 DS
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

        		case "tspFlscLapKnd" : // 형광램프조회
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
        				this.dsEleMst.setColumn(nRow, "hwrtInptAplcntNm", this.gvUserNm);	// 신청자명(수기입력)
        				this.dsEleMst.setColumn(nRow, "aplcntInstCd"	, this.gvCoId);		// 신청자기관코드
        				this.dsEleMst.setColumn(nRow, "aplcntInstNm"	, this.gvCoNm);		// 신청자기관명
        				this.dsEleMst.setColumn(nRow, "aplcntDeptCd"	, this.gvDeptId);	// 신청자부서코드
        				this.dsEleMst.setColumn(nRow, "aplcntDeptNm"	, this.gvDeptNm);	// 신청자부서명
        				this.dsEleMst.setColumn(nRow, "aplySeCd"		, this.aplySeCd);	// 신청구분코드
        				this.dsEleMst.setColumn(nRow, "mblTelno"		, this.gvMblTelNo);	// 휴대전화번호

        				// 해당 TASK ID로 버튼 자동 생성 -> 추후에 신청번호가 있는지 없는지 체크해서 task id 박아넣어줘야함. 현재는 신청서 작성으로 했음.
        				this.cfnBtnCrt({ crtTrgt:this.divBtn, cbf:"fnCallback", lnkgEvnt:this.btn_onclick, inqCnd : { jobPrcsPrgrsSeCd:this.jobCd} });

        			} else {
        				// 전기사용 조회
        				this.cfnSearch(this.aplyNo);

        			}

        			break;

        		case "elctyCsgdRpmAplcfmWrtInq" : // 조회
        			if(this.dsEleMst.getRowCount() > 0){
        				this.jobCd = this.dsEleMst.getColumn(0, "jobCd");
        				// this.aplySeCd = this.dsEleMst.getColumn(0, "aplySeCd");

        			}

        			// 해당 TASK ID로 버튼 자동 생성
        			// this.cfnGetAplySeNm({ id:"getAplySeNm", cbf:"fnCallback", aplySeCd:this.aplySeCd });
        			this.cfnBtnCrt({ crtTrgt:this.divBtn, cbf:"fnCallback", lnkgEvnt:this.btn_onclick, inqCnd : { jobPrcsPrgrsSeCd:this.jobCd} });

        			// 화면 세팅
        			this.fnScrnSetting();

        			break;

        		case "elctyCsgdRpmAplcfmWrtTmprStrg" :
        			this.gfnAlertMsg("saveAlert", this.objApp.getVariable("gvRetMsg"), "", "msgCallback");

        			break;

        		case "_cfnBtnCrt_" : // 버튼 생성 callback
        			// TAS00148 : 신규 신청일때는 신청취소 안보여줌.
        			if(this.jobCd == "TAS00148" && this.gfnIsNull(this.aplyNo)){
        				Array.from(this.btnDiv.form.components).forEach(oComp => {
        					if(oComp.id == "CTL01002"){
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
        			this.cfnComCdLoad({ id:"tspFlscLapKnd", cbf:"fnCallback", dsFlscLapKnd:"ELEFLACOST:S" }); // 형광램프종류

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

        		// 데이터셋 모든 자료 삭제
        		this.dsEleMst.deleteAll();
        		this.dsFlscLapAplyList.deleteAll();
        		this.dsCnvyMttr.deleteAll();
        		this.dsAtfl.deleteAll();
        		this.dsMst.deleteAll();

        		// 저장
        		this.cfnSave();

        	}else if(sPopupId == "delConfirm"){
        		if(oRtn.result == "Y") {
        			// 아래에서 부터 삭제
        			for(var i = this.dsFlscLapAplyList.getRowCount() - 1; i >= 0; i--){
        				if(this.dsFlscLapAplyList.getColumn(i, "chk") == "1"){
        					this.dsFlscLapAplyList.deleteRow(i);

        				}
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
        	var sRcptChcYn = this.dsEleMst.getColumn(0, "rcptChcYn"); // 계약선택구분

        	// 1 : 계약선택, 0 : 수기입력
        	if(this.gfnIsNull(sRcptChcYn)){ // 계약선택여부
        		this.divForm.form.Div01.form.rdoCtrtChcYn.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["계약선택여부 \n"]);
        		return false;
        	}

        	if(sRcptChcYn == "1"){
        		// 계약번호
        		if(this.gfnIsNull(this.dsEleMst.getColumn(0, "ctrtNo"))){ // 계약번호
        			this.divForm.form.Div01.form.divEdtPop00.form.btnCtrt.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["계약정보 \n"]);
        			return false;
        		}
        		// 청구고객번호
        		if(this.gfnIsNull(this.dsEleMst.getColumn(0, "clmCustCd"))){ // 청구고객번호
        			this.divForm.form.Div01.form.edtClmCustNo.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["청구고객번호 \n"]);
        			return false;
        		}
        		// 청구주소
        		if(this.gfnIsNull(this.dsEleMst.getColumn(0, "clmZip"))
        		  || this.gfnIsNull(this.dsEleMst.getColumn(0, "clmAddr"))
        		  || this.gfnIsNull(this.dsEleMst.getColumn(0, "clmDtlAddr"))){ // 청구주소
        			this.divForm.form.Div01.form.divEdtPop.form.btnClmAddr.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["청구주소 \n"]);
        			return false;
        		}

        	}else if(sRcptChcYn == "0"){
        		// 계약번호(수기입력)
        		if(this.gfnIsNull(this.dsEleMst.getColumn(0, "hwrtInptCtrtNo"))){ // 계약번호(수기입력)
        			this.divForm.form.Div01.form.edtCtrtNoHwrtInpt.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["계약정보(수기입력) \n"]);
        			return false;
        		}
        		// 위치정보(수기입력)
        		if(this.gfnIsNull(this.dsEleMst.getColumn(0, "hwrtInptPstnInfoCn"))){ // 위치정보(수기입력)
        			this.divForm.form.Div02.form.edtRnbHwrtInpt.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["위치정보(수기입력) \n"]);
        			return false;
        		}

        	}

        	// 위치구분
        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "pstnSeCd"))){ // 위치구분
        		this.divForm.form.Div02.form.cboRgn.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["위치구분 \n"]);
        		return false;
        	}
        	// 건물구분
        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "bldgSeCd"))){ // 건물구분
        		this.divForm.form.Div02.form.cboBldg.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["건물구분 \n"]);
        		return false;
        	}

        	return true;

        }

        /**************************************************************************
         * @name : fnValiChk2
         * @description : validation check2
         ***************************************************************************/
        this.fnValiChk2 = function(){
        	// 위치구분
        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "pstnSeCd"))){
        		this.divForm.form.Div02.form.cboRgn.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["위치구분 \n"]);
        		return false;
        	}
        	// 건물구분
        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "bldgSeCd"))){
        		this.divForm.form.Div02.form.cboBldg.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["건물구분 \n"]);
        		return false;
        	}

        	// 전기형광램프신청목록
        	if(this.dsFlscLapAplyList.getRowCount() < 1){
        		this.divForm.form.Div02.form.btnGrdAdd.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["전기형광램프신청목록 \n"]);
        		return false;

        	}

        	var cellIdx = -1;
        	for(var i = 0; i < this.dsFlscLapAplyList.getRowCount(); i++){
        		// 품명(규격)
        		if(this.gfnIsNull(this.dsFlscLapAplyList.getColumn(i, "prdctCd"))){
        			cellIdx = this.divForm.form.Div02.form.divGrd.form.grdCtrtInfoList.getBindCellIndex("body", "prdctCd");
        			this.divForm.form.Div02.form.divGrd.form.grdCtrtInfoList.setFocus();
        			this.divForm.form.Div02.form.divGrd.form.grdCtrtInfoList.setCellPos(cellIdx, i);
        			this.gfnAlertMsg("msg", "MSG_009", ["품명(규격) \n"]);
        			return false;

        		}
        		// 수량
        		if(nexacro.toNumber(this.dsFlscLapAplyList.getColumn(i, "qty"), 0) < 1){
        			cellIdx = this.divForm.form.Div02.form.divGrd.form.grdCtrtInfoList.getBindCellIndex("body", "qty");
        			this.divForm.form.Div02.form.divGrd.form.grdCtrtInfoList.setFocus();
        			this.divForm.form.Div02.form.divGrd.form.grdCtrtInfoList.setCellPos(cellIdx, i);
        			this.gfnAlertMsg("msg", "MSG_009", ["수량 \n"]);
        			return false;

        		}
        	}

        	// 신청자 소속
        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "idfrOgdpNm"))){
        		this.divForm.form.Div02.form.edtAplcntInst.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["신청자 소속 \n"]);
        		return false;
        	}
        	// 신청자 성명
        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "idfrNm"))){
        		this.divForm.form.Div02.form.edtAplcntNm.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["신청자 성명 \n"]);
        		return false;
        	}
        	// 신청자 연락처
        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "idfrCtinfoNo"))){
        		this.divForm.form.Div02.form.edtAplcntTelno.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["신청자 연락처 \n"]);
        		return false;
        	}

        	// 작업오더
        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "jobDrctnNm"))){
        		this.divForm.form.Div03.form.edtJobDrctn.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["작업오더 \n"]);
        		return false;
        	}
        	// 청구유무
        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "clmCd"))){
        		this.divForm.form.Div03.form.rdoClmYmd.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["청구유무 \n"]);
        		return false;
        	}

        	return true;

        }

        /**************************************************************************
         * @name : fnScrnSetting
         * @description : 조회 시 화면 세팅
         ***************************************************************************/
        this.fnScrnSetting = function(){
        	var sPstnSeCd = this.dsEleMst.getColumn(0, "pstnSeCd"); // 지역구분코드
        	var sRcptChcYn = this.dsEleMst.getColumn(0, "rcptChcYn"); // 계약선택여부

        	if(!this.gfnIsNull(sRcptChcYn)){
        		this.rdoCtrtChcYn_onitemchanged(this.divForm.form.Div01.form.rdoCtrtChcYn);

        	}
        	if(!this.gfnIsNull(sPstnSeCd)){
        		this.cboRgn_onitemchanged(this.divForm.form.Div02.form.cboRgn);

        	}

        	if(!this.gfnIsNull(this.aplyNo)){
        		this.divForm.form.Div01.form.Panel00.visible = true;
        		this.resetScroll();

        	}

        	// this.jobCd 가 TAS00148 : 신청 이라 이외에는 컴포넌트 readOnly 처리해줌.
        	if(this.jobCd != "TAS00148"){
        		// 신청서 작성 이후 화면 컴포넌트 활성화
        		this.divForm.form.Div02.form.PanelGrd.visible = true;
        		this.divForm.form.Div02.form.Panel04.visible = true;
        		this.divForm.form.Div02.form.Panel05.visible = true;
        		this.divForm.form.Div02.form.Panel06.visible = true;

        		this.divForm.form.Div03.form.Panel03.visible = true;
        		this.divForm.form.Div03.form.Panel04.visible = true;
        		this.divForm.form.Div03.form.Panel05.visible = true;
        		this.divForm.form.Div03.form.panFile1.visible = true;

        		this.resetScroll();

        		// 만족도 조사
        		if(this.jobCd == "TAS00273"){
        			this.divForm.form.divInfoGuide.visible = false;
        			this.divForm.form.divDgstfnExmn.visible = true;

        			this.resetScroll();

        		}

        		var sDivFrom = this.divForm.form;

        		var arrDivComps = [];

        		// 협력사 접수, 현업접수, 승인, 만족도조사 가 아닐때
        		if(this.jobCd != "TAS00150" && this.jobCd != "TAS00274" && this.jobCd != "TAS00152" && this.jobCd != "TAS00273"
        		  && this.jobCd != "TAS00156"){
        			arrDivComps = [sDivFrom.Div01, sDivFrom.Div03
        							, sDivFrom.Div01.form.divEdtPop00, sDivFrom.Div01.form.divEdtPop];

        		}else{
        			arrDivComps = [sDivFrom.Div01, sDivFrom.Div02, sDivFrom.Div03, sDivFrom.Div02.form.divGrd
        							, sDivFrom.Div01.form.divEdtPop00, sDivFrom.Div01.form.divEdtPop];

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
        					if(this.jobCd == "TAS00155" && oComp.id.indexOf("btnRpmCnfdocFile") > -1) return;
        					try {
        						// enable 처리할거
        						oComp.enable = bReadonly;

        						return;
        					} catch(e) {
        						trace ("enable속성없음");
        					}
        				}
        				if (oComp instanceof nexacro.Radio){
        					// 작업오더생성 일때 청구유무 활성화
        					if((this.jobCd == "TAS00151" || this.jobCd == "TAS00276")
        					  && oComp.id == "rdoClmYmd"){
        						return;

        					}

        				}
        				if (oComp instanceof nexacro.Edit){
        					// 작업오더생성, 승인 일때 작업오더 활성화
        					if((this.jobCd == "TAS00151" || this.jobCd == "TAS00152" || this.jobCd == "TAS00276" || this.jobCd == "TAS00153" || this.jobCd == "TAS00155")
        					  && oComp.id == "edtJobDrctn"){
        						return;

        					}

        					// 교체내역
        					if((this.jobCd == "TAS00153" || this.jobCd == "TAS00155") && oComp.id == "edtRpmDsctn"){
        						return;

        					}

        				}
        				if (oComp instanceof nexacro.Calendar){
        					// 교체일자
        					if((this.jobCd == "TAS00153" || this.jobCd == "TAS00155") && oComp.id == "calRpmYmd"){
        						return;

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
        	if(objNm == "btnMinTitle"){
        		objDiv = this.divForm.form.divInfoGuide;

        	}else if(objNm == "btnMinAplcntInfo"){
        		objDiv = this.divForm.form.Div01;

        	}else if(objNm == "btnMinAplyInfo"){
        		objDiv = this.divForm.form.Div02;

        	}else if(objNm == "btnMinPrcsDsctn"){
        		objDiv = this.divForm.form.Div03;

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
        		this.divForm.form.Div02.form.Panel02.visible = false;		// 위치정보(룸번호)
        		this.divForm.form.Div01.form.Panel04.visible = false; 		// 회사명
        		this.divForm.form.Div01.form.Panel00_00.visible = false;	// 신청자명

        		this.divForm.form.Div01.form.Panel01_01_02.visible = true;	// 계약번호(수기입력)
        		this.divForm.form.Div02.form.Panel03.visible = true;		// 위치정보(수기입력)
        		this.divForm.form.Div01.form.Panel00_00_02.visible = true;	// 신청자명(수기입력)

        		this.divForm.form.Div01.form.Panel05.visible = false;		// 청구고객번호
        		this.divForm.form.Div01.form.Panel06.visible = false;		// 청구지주소

        	}else {
        		this.divForm.form.Div01.form.Panel01_01.visible = true;
        		this.divForm.form.Div01.form.Panel01_01_00.visible = true;
        		this.divForm.form.Div02.form.Panel02.visible = true;
        		this.divForm.form.Div01.form.Panel04.visible = true;
        		this.divForm.form.Div01.form.Panel00_00.visible = true;

        		this.divForm.form.Div01.form.Panel01_01_02.visible = false;
        		this.divForm.form.Div02.form.Panel03.visible = false;
        		this.divForm.form.Div01.form.Panel00_00_02.visible = false;

        		this.divForm.form.Div01.form.Panel05.visible = true;
        		this.divForm.form.Div01.form.Panel06.visible = true;

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

        	this.dsEleMst.setColumn(0, "clmZip", "22222");
        	this.dsEleMst.setColumn(0, "clmAddr", "테스트 주소~");
        	this.dsEleMst.setColumn(0, "clmDtlAddr", "101동101호");

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
         * @name : divGrd_btnGrdAdd_onclick
         * @description : 그리드 추가 버튼 클릭
         ***************************************************************************/
        this.divGrd_btnGrdAdd_onclick = function(obj,e)
        {
        	var nRow = this.dsFlscLapAplyList.addRow();

        };

        /**************************************************************************
         * @name : divGrd_btnGrdDel_onclick
         * @description : 그리드 삭제 버튼 클릭
         ***************************************************************************/
        this.divGrd_btnGrdDel_onclick = function(obj,e)
        {
        	if(this.dsFlscLapAplyList.getRowCount() < 1){
        		this.gfnAlertMsg("msg", "MSG_011", ["삭제할 자료가 없습니다."]);
        		return;

        	}

        	var checkChk = this.dsFlscLapAplyList.findRow("chk", "1");

        	if(checkChk < 0){
        		this.gfnAlertMsg("msg", "MSG_011", ["체크박스를 체크하신 후 \n버튼을 클릭해 주세요."]);
        		return;

        	}

        	this.gfnConfirmMsg("delConfirm", "MSG_011", "msgCallback", ["확인", "취소"], ["Y", "N"], "", ["선택한 자료를 삭제 하시겠습니까?"]);

        };

        /**************************************************************************
         * @name : dsFlscLapAplyList_oncolumnchanged
         * @description : 그리드 컬럼 수정 시
         ***************************************************************************/
        this.dsFlscLapAplyList_oncolumnchanged = function(obj,e)
        {
        	var nRow = e.row;
        	var colId = e.columnid;
        	var newVal = e.newvalue;
        	if(colId == "prdctCd"){ // 제품 수정 시
        		// 제품이 없을때는 초기화 해준다.
        		if(this.gfnIsNull(obj.getColumn(nRow, "prdctCd"))){
        			obj.setColumn(nRow, "prdctUntprc", 0);
        			obj.setColumn(nRow, "lbrco", 0);
        			obj.setColumn(nRow, "tclmAmt", 0);
        			return;

        		}

        		var findRow = this.dsFlscLapKnd.findRow("cdId", newVal);
        		// 단가
        		var cdVl1 = nexacro.toNumber(nexacro.replaceAll(this.dsFlscLapKnd.getColumn(findRow, "cdVl"), ",", ""), 0);
        		// 인건비
        		var cdVl2 = nexacro.toNumber(nexacro.replaceAll(this.dsFlscLapKnd.getColumn(findRow, "cdVl01"), ",", ""), 0);
        		obj.setColumn(nRow, "prdctUntprc", cdVl1);
        		obj.setColumn(nRow, "lbrco", cdVl2);
        	}

        	// 제품명이 있을때만 계산
        	if(!this.gfnIsNull(obj.getColumn(nRow, "prdctCd"))){
        		var nQty = nexacro.toNumber(obj.getColumn(nRow, "qty"), 0); // 수량
        		var nAmt = nexacro.toNumber(obj.getColumn(nRow, "prdctUntprc"), 0); // 단가
        		var nLbrco = nexacro.toNumber(obj.getColumn(nRow, "lbrco"), 0); // 인건비
        		var totAmt = 0;

        		if(nQty > 0){
        			// 총 금액 = (단가 + 인건비) * 수량
        			totAmt = (nAmt + nLbrco) * nQty;
        			obj.setColumn(nRow, "tclmAmt", totAmt);

        		}else{
        			obj.setColumn(nRow, "tclmAmt", 0);

        		}
        	}

        };

        /**************************************************************************
         * @name : grdCtrtInfoList_oncloseup
         * @description : 그리드 수정 시 즉시 반영
         ***************************************************************************/
        this.grdCtrtInfoList_oncloseup = function(obj,e)
        {
        	obj.updateToDataset();
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
        	--------------------------------------------------------------------------
        		TAS00148	1611.신청서작성			CTL00230	신청
        		TAS00148	1611.신청서작성			CTL00755	임시저장
        		TAS00148	1611.신청서작성			CTL00819	종료
        		TAS00148	1611.신청서작성			CTL01002	신청취소
        		TAS00150	1621.협력사접수			CTL00233	접수
        		TAS00151	1631.작업오더생성			CTL00234	담당자변경
        		TAS00151	1631.작업오더생성			CTL00236	승인요청
        		TAS00151	1631.작업오더생성			CTL00874	미처리종료
        		TAS00152	1642.승인				CTL00238	보완요청
        		TAS00152	1642.승인				CTL00239	승인
        		TAS00152	1642.승인				CTL00877	미처리종료
        		TAS00274	1641.현업접수				CTL00237	접수
        		TAS00276	1632.작업오더수정			CTL00246	승인요청
        		TAS00276	1632.작업오더수정			CTL00876	미처리종료
        		TAS00153	1651.교체및청구안내			CTL00240	청구안내
        		TAS00153	1651.교체및청구안내			CTL00649	보완승인요청
        		TAS00153	1651.교체및청구안내			CTL00685	담당자변경
        		TAS00153	1651.교체및청구안내			CTL00878	미처리종료
        		TAS00155	1661.교체및청구완료			CTL00243	만족도요청			-- 미사용
        		TAS00155	1661.교체및청구완료			CTL00282	처리완료
        		TAS00155	1661.교체및청구완료			CTL00647	ERP담당자이관		-- 미사용
        		TAS00155	1661.교체및청구완료			CTL00686	담당자변경
        		TAS00156	종료
        		TAS00273	1681.만족도조사			CTL00244	설문응답완료
        	--------------------------------------------------------------------------
        	*/

        	// 임시저장, 신청취소, 접수, 보완요청
        	if(vBtnCd == "CTL00755" || vBtnCd == "CTL01002" || vBtnCd == "CTL00233" || vBtnCd == "CTL00237"
        	  || vBtnCd == "CTL00238" || vBtnCd == "CTL00649"){
        		this.vStrSvcId  = "elctyCsgdRpmAplcfmWrtTmprStrg";
        		this.vStrSvcUrl = "ele/elctyCsgdRpmAplcfmWrtTmprStrg.do";

        	}else if(vBtnCd == "CTL00230"){ // 신청
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

        		this.vStrSvcId  = "elctyCsgdRpmAplcfmWrtTmprStrg";
        		this.vStrSvcUrl = "ele/elctyCsgdRpmAplcfmWrtTmprStrg.do";

        	}else if(vBtnCd == "CTL00236" || vBtnCd == "CTL00239" || vBtnCd == "CTL00246" || vBtnCd == "CTL00240" || vBtnCd == "CTL00282"){ // 승인요청
        		// validation check
        		var res = this.fnValiChk2();
        		if(!res){
        			return;

        		}

        		if(vBtnCd == "CTL00240" || vBtnCd == "CTL00282"){
        			// 교체일자
        			if(this.gfnIsNull(this.dsEleMst.getColumn(0, "rpmYmd"))){
        				this.divForm.form.Div03.form.calRpmYmd.setFocus();
        				this.gfnAlertMsg("msg", "MSG_009", ["교체일자 \n"]);
        				return;
        			}
        			// 교체내역
        			if(this.gfnIsNull(this.dsEleMst.getColumn(0, "rpmCn"))){
        				this.divForm.form.Div03.form.edtRpmDsctn.setFocus();
        				this.gfnAlertMsg("msg", "MSG_009", ["교체내역 \n"]);
        				return;
        			}

        			if(vBtnCd == "CTL00282"){ // 처리완료
        				// 교체확인서
        				if(this.gfnIsNull(this.dsFile.getColumn(0, "A110"))){
        					this.divForm.form.Div03.form.grdRpmCnfdoc.setFocus();
        					this.gfnAlertMsg("msg", "MSG_011", ["교체확인서를 \n등록하여 주세요."]);
        					return;

        				}
        			}
        		}

        		this.vStrSvcId  = "elctyCsgdRpmAplcfmWrtTmprStrg";
        		this.vStrSvcUrl = "ele/elctyCsgdRpmAplcfmWrtTmprStrg.do";

        	}else if(vBtnCd == "CTL00819" || vBtnCd == "CTL00874" || vBtnCd == "CTL00877" || vBtnCd == "CTL00876"
        	  || vBtnCd == "CTL00878"){ // 종료, 미처리종료
        		// 신규입력일때 종료 버튼 클릭 시 화면만 닫아줌.
        		if(this.dsEleMst.getRowType(0) == Dataset.ROWTYPE_INSERT){
        			this.gfnConfirmMsg("endConfirm", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"], "", ["종료"]);

        			return;

        		}else{
        			this.vStrSvcId  = "elctyCsgdRpmAplcfmWrtTmprStrg";
        			this.vStrSvcUrl = "ele/elctyCsgdRpmAplcfmWrtTmprStrg.do";

        		}

        	}else if(vBtnCd == "CTL00234" || vBtnCd == "CTL00685" || vBtnCd == "CTL00686"){ // 담당자변경
        		alert("담당자변경 팝업 완료 시 연결 예정!!");
        		return;

        	}else if(vBtnCd == "CTL00244"){ // 설문응답완료
        		this.vStrSvcId  = "elctyCsgdRpmAplcfmWrtTmprStrg";
        		this.vStrSvcUrl = "ele/elctyCsgdRpmAplcfmWrtTmprStrg.do";

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

        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "docCd"))){
        		this.dsEleMst.setColumn(0, "docCd", "TSPDOC160");

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
        		this.dsMst.setColumn(0, "docCd", "TSPDOC160");

        	}

        	var curDt = this.gfnGetDate("time");
        	if(this.gfnIsNull(this.dsEleMst.getColumn(0, "aplyDt"))){
        		this.dsEleMst.setColumn(0, "aplyDt", curDt);

        	}
        	if(this.gfnIsNull(this.dsMst.getColumn(0, "aplyDt"))){
        		this.dsMst.setColumn(0, "aplyDt", curDt);

        	}

        	// 협력사 접수
        	if(vBtnCd == "CTL00233"){
        		// 접수일자 세팅
        		this.dsEleMst.setColumn(0, "rcptDt", curDt);
        		this.dsMst.setColumn(0, "rcptDt", curDt);

        	}

        	// 종료, 미처리종료, 처리완료
        	if(vBtnCd == "CTL00819" || vBtnCd == "CTL00874" || vBtnCd == "CTL00877" || vBtnCd == "CTL00876"
        	  || vBtnCd == "CTL00878" || vBtnCd == "CTL00282"){
        		// 종료일자 세팅
        		this.dsEleMst.setColumn(0, "endDt", curDt);
        		this.dsMst.setColumn(0, "endDt", curDt);

        	}

        	// 설문응답완료
        	if(vBtnCd == "CTL00244"){
        		this.dsEleMst.setColumn(0, "dgstfnRspnsDt", curDt);
        		this.dsEleMst.setColumn(0, "dgstfnRspnsYn", "1");

        	}

        	// 계약선택여부 1 : 계약선택, 0 : 수기입력
        	if(this.dsEleMst.getColumn(0, "rcptChcYn") == "1"){
        		// 계약번호(수기입력), 위치정보(수기입력) null 넣어줌.
        		this.dsEleMst.setColumn(0, "hwrtInptCtrtNo", null);
        		this.dsEleMst.setColumn(0, "hwrtInptAplcntNm", null);
        		this.dsEleMst.setColumn(0, "hwrtInptPstnInfoCn", null);

        	}else if(this.dsEleMst.getColumn(0, "rcptChcYn") == "0"){
        		// 계약번호, 계약명, 위치정보(룸번호) null 넣어줌.
        		this.dsEleMst.setColumn(0, "ctrtNo", null);
        		this.dsEleMst.setColumn(0, "ctrtNm", null);
        		this.dsEleMst.setColumn(0, "pstnInfoRnb", null);

        		this.dsEleMst.setColumn(0, "clmCustCd", null);

        		// 청구주소 null 넣어줌.
        		this.dsEleMst.setColumn(0, "clmZip", null);
        		this.dsEleMst.setColumn(0, "clmAddr", null);
        		this.dsEleMst.setColumn(0, "clmDtlAddr", null);

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

        	if(vBtnCd == "CTL01002"){ // 신청취소
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

        	if(objNm == "btnRpmCnfdocFile"){
        		objGrd = this.divForm.form.Div03.form.grdRpmCnfdoc;

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
        		// 교체및청구완료
        		if(this.jobCd == "TAS00155"){
        			// 첨부 파일 삭제
        			this.cfnSetAtflInfo(this.RaonkUpload, obj).cfnDelAtfl();

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
            this.divForm.form.Div01.form.divEdtPop.form.btnClmAddr.addEventHandler("onclick",this.btnClmAddr_onclick,this);
            this.divForm.form.Div02.form.cboRgn.addEventHandler("onitemchanged",this.cboRgn_onitemchanged,this);
            this.divForm.form.Div02.form.cboRgn.addEventHandler("onitemclick",this.cboRgn_onitemclick,this);
            this.divForm.form.Div02.form.btnGrdAdd.addEventHandler("onclick",this.divGrd_btnGrdAdd_onclick,this);
            this.divForm.form.Div02.form.btnGrdDel.addEventHandler("onclick",this.divGrd_btnGrdDel_onclick,this);
            this.divForm.form.Div02.form.divGrd.form.grdCtrtInfoList.addEventHandler("oncloseup",this.grdCtrtInfoList_oncloseup,this);
            this.divForm.form.Div03.form.divGrd00.form.Static00_00.addEventHandler("onclick",this.divForm_Div04_Static00_onclick,this);
            this.divForm.form.Div03.form.btnRpmCnfdocFile.addEventHandler("onclick",this.FileAtch_onclick,this);
            this.divForm.form.Div03.form.grdRpmCnfdoc.addEventHandler("oncellclick",this.grd_oncellclick,this);
            this.divForm.form.btnMinAplcntInfo.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.btnMinAplyInfo.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.btnMinPrcsDsctn.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divQuick.form.btn01.addEventHandler("onclick",this.btnQuick_onclick,this);
            this.divQuick.form.btn02.addEventHandler("onclick",this.btnQuick_onclick,this);
            this.divQuick.form.btn03.addEventHandler("onclick",this.btnQuick_onclick,this);
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
            this.dsFlscLapAplyList.addEventHandler("oncolumnchanged",this.dsFlscLapAplyList_oncolumnchanged,this);
        };
        this.loadIncludeScript("LIF064M00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
