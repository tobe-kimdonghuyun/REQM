(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LIF070M00");
            this.set_titletext("차량장비등록신청 차량등록수정");
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
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyKndCd\" type=\"STRING\" size=\"256\"/><Column id=\"docCd\" type=\"STRING\" size=\"256\"/><Column id=\"docNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobNm\" type=\"STRING\" size=\"256\"/><Column id=\"rcptMdaCd\" type=\"STRING\" size=\"256\"/><Column id=\"endCd\" type=\"STRING\" size=\"256\"/><Column id=\"endNm\" type=\"STRING\" size=\"256\"/><Column id=\"srvcCd\" type=\"STRING\" size=\"256\"/><Column id=\"srvcNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrJobGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"ownrId\" type=\"STRING\" size=\"256\"/><Column id=\"ownrNm\" type=\"STRING\" size=\"256\"/><Column id=\"ownrInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"ownrInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"ownrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"ownrDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"ownrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"ownrJobGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"mdfrId\" type=\"STRING\" size=\"256\"/><Column id=\"mdfrNm\" type=\"STRING\" size=\"256\"/><Column id=\"vhclInspClrId\" type=\"STRING\" size=\"256\"/><Column id=\"vhclInspClrNm\" type=\"STRING\" size=\"256\"/><Column id=\"vhclIncmgClrId\" type=\"STRING\" size=\"256\"/><Column id=\"vhclIncmgClrNm\" type=\"STRING\" size=\"256\"/><Column id=\"aprvSpvsrId\" type=\"STRING\" size=\"256\"/><Column id=\"aprvSpvsrNm\" type=\"STRING\" size=\"256\"/><Column id=\"avtnScrtyOfcPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"avtnScrtyOfcPrcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"avtnScrtyOfcJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"avtnScrtyOfcJobGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrJobGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntHwrtInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptAplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptCtrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptPstnInfoCn\" type=\"STRING\" size=\"256\"/><Column id=\"mvmnRgnNoExnCd\" type=\"STRING\" size=\"256\"/><Column id=\"lbsvcPbcprtPicExnCd\" type=\"STRING\" size=\"256\"/><Column id=\"lbsvcPbcprtPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPrcrJobGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPrcrPbcprtCd\" type=\"STRING\" size=\"256\"/><Column id=\"cpstArtclCd\" type=\"STRING\" size=\"256\"/><Column id=\"clmCustCd\" type=\"STRING\" size=\"256\"/><Column id=\"clmZip\" type=\"STRING\" size=\"256\"/><Column id=\"clmAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmDtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstnInfoRnb\" type=\"STRING\" size=\"256\"/><Column id=\"pstnInfoRnbNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyDt\" type=\"STRING\" size=\"256\"/><Column id=\"prcsDt\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"mdfcnDt\" type=\"STRING\" size=\"256\"/><Column id=\"acrdCmptnDt\" type=\"STRING\" size=\"256\"/><Column id=\"actlBgngDt\" type=\"STRING\" size=\"256\"/><Column id=\"actlEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"planBgngDt\" type=\"STRING\" size=\"256\"/><Column id=\"planEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"cmptnHpeDt\" type=\"STRING\" size=\"256\"/><Column id=\"vhclRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"vhclIncmgDt\" type=\"STRING\" size=\"256\"/><Column id=\"vhclInspRcptDt\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtHwrtInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"cnvyMttrCn\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnRspnsDt\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnRspnsYn\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclNm1\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclNm2\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclNm3\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnExmnCn1\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnExmnCn2\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnExmnCn3\" type=\"STRING\" size=\"256\"/><Column id=\"dptyRegYn\" type=\"STRING\" size=\"256\"/><Column id=\"tdptyPvsnAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"aplyTtlNm\" type=\"STRING\" size=\"256\"/><Column id=\"srvcDmndCn\" type=\"STRING\" size=\"256\"/><Column id=\"vinSn\" type=\"STRING\" size=\"256\"/><Column id=\"dsplmt\" type=\"STRING\" size=\"256\"/><Column id=\"mdlyrCn\" type=\"STRING\" size=\"256\"/><Column id=\"frmNm\" type=\"STRING\" size=\"256\"/><Column id=\"fuelKndCd\" type=\"STRING\" size=\"256\"/><Column id=\"newInspYmd\" type=\"STRING\" size=\"256\"/><Column id=\"safeInspTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"mnfctrNm\" type=\"STRING\" size=\"256\"/><Column id=\"maxLdcpct\" type=\"STRING\" size=\"256\"/><Column id=\"rdgNope\" type=\"STRING\" size=\"256\"/><Column id=\"vhclTwt\" type=\"STRING\" size=\"256\"/><Column id=\"hgtVl\" type=\"STRING\" size=\"256\"/><Column id=\"lenVl\" type=\"STRING\" size=\"256\"/><Column id=\"carRegYmd\" type=\"STRING\" size=\"256\"/><Column id=\"usgNm\" type=\"STRING\" size=\"256\"/><Column id=\"usgCd\" type=\"STRING\" size=\"256\"/><Column id=\"area\" type=\"STRING\" size=\"256\"/><Column id=\"vhrno\" type=\"STRING\" size=\"256\"/><Column id=\"vhclEqpmntTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"vhclEqpmntSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"vhclWt\" type=\"STRING\" size=\"256\"/><Column id=\"carmdlSclCd\" type=\"STRING\" size=\"256\"/><Column id=\"safeDvcEsntlVhclYn\" type=\"STRING\" size=\"256\"/><Column id=\"inspInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"safeDvcKndCd\" type=\"STRING\" size=\"256\"/><Column id=\"bilgCd\" type=\"STRING\" size=\"256\"/><Column id=\"ersrYmd\" type=\"STRING\" size=\"256\"/><Column id=\"aprvYmd\" type=\"STRING\" size=\"256\"/><Column id=\"ofcbzUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"ofcbzUnusdAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"batryId\" type=\"STRING\" size=\"256\"/><Column id=\"vhcleId\" type=\"STRING\" size=\"256\"/><Column id=\"safeDvcEtcKndNm\" type=\"STRING\" size=\"256\"/><Column id=\"eleChk\" type=\"STRING\" size=\"256\"/><Column id=\"vhclRegAprvYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCn", this);
            obj._setContents("<ColumnInfo><Column id=\"sysSe\" type=\"STRING\" size=\"256\"/><Column id=\"utztnArtcl\" type=\"STRING\" size=\"256\"/><Column id=\"prps\" type=\"STRING\" size=\"256\"/><Column id=\"prd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"sysSe\">입주자서비스\\n포털</Col><Col id=\"utztnArtcl\">[필수]납부담당자 이름, 납부담당자 일반전화번호&lt;br&gt;</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsVhclSe", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsVhclCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCarmdl", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUsg", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFuelKnd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSafeDvcKnd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInspInst", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsAtflArtclList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDgstfnExmn", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnTtl\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnCn\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnScr\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnExmnYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","20","divTitle:10",null,"5984","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickFrBg");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("sub_tit00","1536","1038","100%","57",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("9");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staSubTitle02_00_03\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel01_02_03\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_03","508","0","51.39%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("25");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinTitle\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinTitle","1204","8","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_03","-8","0","51.39%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("26");
            obj.set_text("서비스 흐름 및 작업방법 안내(타이틀미정)");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divInfoGuide","1660.00","262","100%","300",null,null,null,null,"300",null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_text("서비스 흐름 및 작업방법 안내");
            obj.set_cssclass("div_WF_InfoGuide");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnSchClose",null,"10","34","34","10",null,null,null,null,null,this.divForm.form.divInfoGuide.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_ACPlus");
            this.divForm.form.divInfoGuide.addChild(obj.name, obj);

            obj = new Div("divDgstfnExmn","1660.00","262","100%","920",null,null,null,null,"920",null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_fittocontents("height");
            obj.set_rtl("");
            obj.set_url("work::COM/util/dgstfnExmn/dgstfnExmn.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit01","1630","674","100%","66",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("6");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div01","0","0","100%","511",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Pan01","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staAplyNo","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("신청번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtAplyNo","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staAplyNo\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAplyNo\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staAplySe","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("4");
            obj.set_text("신청구분 ");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staAplySe\"/><PanelItem id=\"PanelItem02\" componentid=\"edtAplySe\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Pan02","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("6");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staAplcntNm","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("7");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staAplcntNm\"/><PanelItem id=\"PanelItem03\" componentid=\"edtAplcntNm\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staAplcntInstNm","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("9");
            obj.set_text("신청자 회사명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staAplcntInstNm\"/><PanelItem id=\"PanelItem03\" componentid=\"edtAplcntInstNm\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Pan03","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("11");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtAplySe","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtAplcntNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtAplcntInstNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staRgtrNm","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("15");
            obj.set_text("등록자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtRgtrNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("16");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_01_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("17");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRgtrNm\"/><PanelItem id=\"PanelItem03\" componentid=\"edtRgtrNm\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staRgtrInstNm","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("18");
            obj.set_text("등록자 회사명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtRgtrInstNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("20");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRgtrInstNm\"/><PanelItem id=\"PanelItem03\" componentid=\"edtRgtrInstNm\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Pan05","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("21");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00_00_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtMblTelno","10.00","158","100%","40",null,null,null,null,"40",null,this.divForm.form.Div01.form);
            obj.set_taborder("23");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staMblTelno","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("22");
            obj.set_text("휴대폰 번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_01_02","10.00","98","305","116",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("24");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staMblTelno\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel03\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_02","10.00","98","305","1",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("25");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Pan06","0","60","100.00%","127",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("26");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_01_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00_00_02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel03","30","630","100%","74",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("28");
            obj.set_type("vertical");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"edtMblTelno\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta00","200.00","383","100%","47",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("27");
            obj.set_text("전화번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 등록 및 수정이 가능합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staSubTitle02","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("18");
            obj.set_text("신청 정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_00_00_00","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("19");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnHstry\"/><PanelItem id=\"PanelItem00\" componentid=\"btnMinAplyInfo\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit02","1630","674","100%","66",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("20");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_00_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinAplyInfo","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnHstry","860","896","120","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("22");
            obj.set_text("제원불러오기");
            obj.set_fittocontents("width");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle01","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_text("신청자정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinAplcntInfo","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
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
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinAplcntInfo\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div02","0","0","100%","998",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Combo("cboVhclSe","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("27");
            obj.set_innerdataset("dsVhclSe");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_01_02","10.00","98","1000","50",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("0");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 0px 10px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staNewReg\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Pan01","0","60","100.00%","61",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("1");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_01_02\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staNewReg","20","20","100%","30",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("2");
            obj.set_text("인천국제공항 이동지역에 차량(장비)를 신규 등록 하신다면?<l v=\'atfl/등록절차.pdf\" download=\"등록절차.pdf\'> <u v=\'true\'><fc v=\'#1e4ebe\'>차량(장비) 신규등록 절차 보기</fc></u></l>");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staVhclSe","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("3");
            obj.set_text("차량(장비)구분");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_01_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staVhclSe\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staCarmdl","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("5");
            obj.set_text("차종규모");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCarmdl\"/><PanelItem id=\"PanelItem03\" componentid=\"cboCarmdl\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Pan02","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("7");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00_00_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staUsg","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("8");
            obj.set_text("용도");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_01_01_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staUsg\"/><PanelItem id=\"PanelItem02\" componentid=\"cboUsg\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staMnfctrNm","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("10");
            obj.set_text("제작사");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_01_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("11");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staMnfctrNm\"/><PanelItem id=\"PanelItem03\" componentid=\"edtMnfctrNm\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Pan03","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("12");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_01_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00_00_01_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staFrm","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("13");
            obj.set_text("형식");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtFrm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("14");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_01_01_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staFrm\"/><PanelItem id=\"PanelItem03\" componentid=\"edtFrm\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staMdlyr","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("16");
            obj.set_text("연식");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_01_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("17");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staMdlyr\"/><PanelItem id=\"PanelItem03\" componentid=\"edtMdlyr\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Pan04","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("18");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_01_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00_00_01_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staFuelKnd","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("19");
            obj.set_text("연료종류");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_01_00_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("20");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staFuelKnd\"/><PanelItem id=\"PanelItem02\" componentid=\"cboFuelKnd\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staVin","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("21");
            obj.set_text("차대/시리얼번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtVin","10.00","158","100%","40",null,null,null,null,"40",null,this.divForm.form.Div02.form);
            obj.set_taborder("22");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("sta00_00","200.00","383","100%","47",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("23");
            obj.set_text("자동차의 보닛을 열면 크로스 멤버나 대시 패널부에 부착되어 있습니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel03_00","30","630","100%","74",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("24");
            obj.set_type("vertical");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"edtVin\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_01_02_00_01","10.00","98","305","116",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("25");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staVin\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel03_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Combo("cboVhclCd","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("29");
            obj.set_innerdataset("dsVhclCd");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_displaynulltext("선택");
            obj.set_visible("false");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Pan05","0","60","100.00%","127",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("26");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Panel01_01_00_00_01_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_01_02_00_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00","392","115","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("34");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"cboVhclSe\"/><PanelItem id=\"PanelItem00\" componentid=\"cboVhclCd\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Combo("cboCarmdl","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("28");
            obj.set_innerdataset("dsCarmdl");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Combo("cboUsg","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("30");
            obj.set_innerdataset("dsUsg");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Combo("cboFuelKnd","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("31");
            obj.set_innerdataset("dsFuelKnd");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtMdlyr","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("32");
            obj.set_inputtype("digit");
            obj.set_maxlength("4");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtMnfctrNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("33");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staOfcbzUseYn","50","631","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("35");
            obj.set_text("공용충전기사용여부");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Radio("rdoOfcbzUseYn","50","676","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("36");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divForm_form_Div02_form_rdoOfcbzUseYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div02_form_rdoOfcbzUseYn_innerdataset", obj);
            divForm_form_Div02_form_rdoOfcbzUseYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div02_form_rdoOfcbzUseYn_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel03_00_00","30","630","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("37");
            obj.set_type("vertical");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"rdoOfcbzUseYn\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan06_01","50","631","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("38");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staOfcbzUseYn\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel03_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan06_02","50","631","305","1",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("39");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents/>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Pan06","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("40");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan06_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan06_02\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staElctyHdlEqpmntIdEvdncDcmnt","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("41");
            obj.set_text("전기조업장비ID증빙서류");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btnElctyHdlEqpmntIdEvdncDcmntSample","813","76","120","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("42");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btnElctyHdlEqpmntIdEvdncDcmntFile","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("43");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.getSetter("upcolid").set("elctyHdlEqpmntIdEvdncDcmntFile");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("44");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnElctyHdlEqpmntIdEvdncDcmntSample\"/><PanelItem id=\"PanelItem00\" componentid=\"btnElctyHdlEqpmntIdEvdncDcmntFile\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("45");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staElctyHdlEqpmntIdEvdncDcmnt\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Grid("grdElctyHdlEqpmntIdEvdncDcmnt","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("46");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:A110\" cssclass=\"expr:dataset.parent.gfnIsNull(A110) ? &quot;&quot; : &quot;CellFile&quot;\" cursor=\"pointer\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.gfnIsNull(A110) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.gfnIsNull(A110) ? &quot;none&quot; : &quot;button&quot;\" text=\"삭제\" cssclass=\"expr:dataset.parent.gfnIsNull(A110) ? &quot;&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00","192","1038","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("47");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grdElctyHdlEqpmntIdEvdncDcmnt\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panFile01","0","42","100.00%","111",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("48");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel01_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staBatryId","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("49");
            obj.set_text("Battery ID");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtBatryId","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("50");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_01_01_01_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("51");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staBatryId\"/><PanelItem id=\"PanelItem03\" componentid=\"edtBatryId\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staVhcleId","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("52");
            obj.set_text("Vehicle ID");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtVhcleId","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("53");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_01_01_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("54");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staVhcleId\"/><PanelItem id=\"PanelItem03\" componentid=\"edtVhcleId\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Pan07","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("55");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_01_01_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00_00_01_01_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staGdCn","20","20","100%","90",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("56");
            obj.set_text("<b v=\'true\'><인천국제공항 이동지역 내의 공용 충전기 사용 관련 안내></b>\r\n인천국제공항 이동지역 내의 공용 충전기에 대한 모든 권리는 <fc v=\'#1e4ebe\'>인천국제공항공사</fc>소유로서 공용충전기를 허가없이 <fc v=\'#ee2e5b\'>무단사용 및 도용, 훼손 등을 절대 금지</fc>합니다.\r\n사전허가된 장비 이외의 사용시에는 제재를 받을수 있음을 알려드립니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel08_01","10.00","98","1000","110",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("57");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 0px 10px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staGdCn\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Pan08","0","60","100.00%","121",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("58");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel08_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staOfcbzUnusdAgreYn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("59");
            obj.set_text("공용충전기 미사용 동의여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new CheckBox("chkOfcbzUnusdAgreYn","200.00","128","129","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("60");
            obj.set_fittocontents("width");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_value("0");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","100","1615","100%","50",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("61");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"chkOfcbzUnusdAgreYn\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_01_00_00_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("62");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staOfcbzUnusdAgreYn\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Pan09","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("63");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Panel01_01_00_00_01_00_00_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staSubTitle03","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("8");
            obj.set_text("제원");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinSpfa","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_00_00","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("10");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinSpfa\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit03","1630","674","100%","66",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("11");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle03\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div03","0","0","100%","2534",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("12");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staVhrno","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("0");
            obj.set_text("자동차등록번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edtVhrno","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_01_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staVhrno\"/><PanelItem id=\"PanelItem03\" componentid=\"edtVhrno\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staCarRegYmd","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("3");
            obj.set_text("자동차등록일자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCarRegYmd\"/><PanelItem id=\"PanelItem02\" componentid=\"calCarRegYmd\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Pan01","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("5");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00_00_01\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staVhclTwt","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("6");
            obj.set_text("차량총중량(Kg)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_01_02_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staVhclTwt\"/><PanelItem id=\"PanelItem02\" componentid=\"edtVhclTwt\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Pan02","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("8");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Panel01_01_00_00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_01_02_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLen","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("9");
            obj.set_text("길이(mm)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_01_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLen\"/><PanelItem id=\"PanelItem03\" componentid=\"edtLen\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edtLen","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("11");
            obj.set_inputfilter("none");
            obj.set_inputtype("number");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edtVhclTwt","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("12");
            obj.set_inputtype("number");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staArea","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("13");
            obj.set_text("너비(mm)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edtArea","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("14");
            obj.set_inputtype("number");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_01_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staArea\"/><PanelItem id=\"PanelItem03\" componentid=\"edtArea\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staMaxLdcpct","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("16");
            obj.set_text("최대적재량(Kg)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edtMaxLdcpct","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("17");
            obj.set_inputtype("number");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_01_02_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("18");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staMaxLdcpct\"/><PanelItem id=\"PanelItem02\" componentid=\"edtMaxLdcpct\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Pan03","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("19");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Panel01_01_00_00_01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_01_02_00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staHgt","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("20");
            obj.set_text("높이(mm)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edtHgt","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("21");
            obj.set_inputtype("number");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_01_00_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("22");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staHgt\"/><PanelItem id=\"PanelItem03\" componentid=\"edtHgt\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Pan04","0","60","100.00%","127",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("23");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Panel01_01_00_00_01_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_01_02_00_01\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staVhclWt","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("24");
            obj.set_text("차량중량(Kg)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edtVhclWt","10.00","158","100%","40",null,null,null,null,"40",null,this.divForm.form.Div03.form);
            obj.set_taborder("25");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("sta00_00","200.00","383","100%","47",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("26");
            obj.set_text("차량의 총중량 - 최대적재량 - (승차인원*65)를 계산한 값이 나타납니다");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel03_00","30","630","100%","74",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("27");
            obj.set_type("vertical");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"edtVhclWt\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_01_02_00_01","10.00","98","305","116",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("28");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staVhclWt\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel03_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staDsplmt","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("29");
            obj.set_text("배기량(cc)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edtDsplmt","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("30");
            obj.set_inputtype("number");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_01_00_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("31");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staDsplmt\"/><PanelItem id=\"PanelItem03\" componentid=\"edtDsplmt\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_01_02_00_00_00","10.00","98","305","1",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("32");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents/>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Pan05","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("33");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Panel01_01_00_00_01_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_01_02_00_00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staRdgNope","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("34");
            obj.set_text("승차인원");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edtRdgNope","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("35");
            obj.set_inputtype("digit");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_01_00_00_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("36");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRdgNope\"/><PanelItem id=\"PanelItem03\" componentid=\"edtRdgNope\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_01_02_00_00_00_00","10.00","98","305","1",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("37");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents/>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Pan06","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("38");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Panel01_01_00_00_01_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_01_02_00_00_00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Radio("rdoSafeInspTrgtYn","50","676","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("42");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divForm_form_Div03_form_rdoSafeInspTrgtYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div03_form_rdoSafeInspTrgtYn_innerdataset", obj);
            divForm_form_Div03_form_rdoSafeInspTrgtYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div03_form_rdoSafeInspTrgtYn_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staSafeInspTrgtYn","50","631","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("41");
            obj.set_text("안전검사대상여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan04_01","50","631","305","200",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("43");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSafeInspTrgtYn\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel03_00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Calendar("calCarRegYmd","0","0","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("39");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Pan07","0","60","100.00%","211",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("40");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan04_01_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staSafeInspTrgtCn","200.00","383","100%","140",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("44");
            obj.set_text("안전검사 비대상 차량/장비\r\n- 자동차등록증(건설기계등록증) 발급 차량(지게차 포함)\r\n- 무동력(엔진 등 동력장치가 없음) 장비\r\n- 원동기가 장착되어 있으나, 자력으로 움직일 수 없는 장비 (GPU, APU 등)\r\n- 전동카트 및 트랙터 잔디깍이 등 자관법이 적용되지 않는 농업기계");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel03_00_00","30","630","100%","174",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("45");
            obj.set_type("vertical");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"rdoSafeInspTrgtYn\"/><PanelItem id=\"PanelItem02\" componentid=\"staSafeInspTrgtCn\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staSafeDvcVhclYn","50","631","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("46");
            obj.set_text("안전장치의무부착차량여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Radio("rdoSafeDvcVhclYn","50","676","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("47");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divForm_form_Div03_form_rdoSafeDvcVhclYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div03_form_rdoSafeDvcVhclYn_innerdataset", obj);
            divForm_form_Div03_form_rdoSafeDvcVhclYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div03_form_rdoSafeDvcVhclYn_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staSafeDvcVhclCn","200.00","383","100%","140",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("48");
            obj.set_text("- 항공기에 접현하는 차량 : 후방영상장치, 근접 및 후진 경고음 장치\r\n· <fc v=\'#1e4ebe\'>접현차량</fc> : ACU트럭, GPU트럭, 급수차, 급유차량, 기내식차량, 라바토리트럭, 로더, 스텝카, 컨베이어벨트카, 토잉카 등\r\n-  특수·특장 차량 : 측면, 후면 외관에 반사띠 부착\r\n- 깔림사고가 발생 위험이 있는 토잉카 : 안전발판 설치");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel03_00_00_00","30","630","100%","174",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("49");
            obj.set_type("vertical");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"rdoSafeDvcVhclYn\"/><PanelItem id=\"PanelItem02\" componentid=\"staSafeDvcVhclCn\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00","50","631","305","200",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("50");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSafeDvcVhclYn\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel03_00_00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staInspInst","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("51");
            obj.set_text("검사기관");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Combo("cboInspInst","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("52");
            obj.set_innerdataset("dsInspInst");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_01_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("53");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staInspInst\"/><PanelItem id=\"PanelItem02\" componentid=\"cboInspInst\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staNewInspYmd","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("54");
            obj.set_text("신규검사일자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("55");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staNewInspYmd\"/><PanelItem id=\"PanelItem02\" componentid=\"calNewInspYmd\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Pan08","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("56");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00_00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Calendar("calNewInspYmd","0","0","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("57");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staCarRegctf","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("58");
            obj.set_text("자동차등록증");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btnCarRegctfSample","813","76","120","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("59");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btnCarRegctfFile","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("60");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.getSetter("upcolid").set("carRegctfFile");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("61");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnCarRegctfSample\"/><PanelItem id=\"PanelItem00\" componentid=\"btnCarRegctfFile\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panTitle00","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("62");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCarRegctf\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Grid("grdCarRegctf","20.00","114","100%","40",null,null,null,null,"40",null,this.divForm.form.Div03.form);
            obj.set_taborder("63");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:B110\" cssclass=\"expr:dataset.parent.gfnIsNull(B110) ? &quot;&quot; : &quot;CellFile&quot;\" cursor=\"pointer\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.gfnIsNull(B110) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.gfnIsNull(B110) ? &quot;none&quot; : &quot;button&quot;\" text=\"삭제\" cssclass=\"expr:dataset.parent.gfnIsNull(B110) ? &quot;&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staCarRegctfCn","20","20","100%","64",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("64");
            obj.set_text("자동차관리법 또는 건설기계관리법에 의한 등록증 또는 소유권 및 제원을 증명할 수 있는 서류\r\n1. 회사로고 및 회사명이 표시된 차량, 장비의 실제 전면 및 측면 사진 : <l v=\'atfl/이동지역안전지침 별표2.jpg\" download=\"이동지역안전지침 별표2.jpg\'><u v=\'true\'><fc v=\'#1e4ebe\'>(표시 방법은 ‘이동지역안전지침’ 별표2 참고)</fc></u></l>\r\n2. 차량의 높이 표시 양식 : <l v=\'atfl/높이 표시 이미지.png\" download=\"높이 표시 이미지.png\'><u v=\'true\'><fc v=\'#1e4ebe\'>(높이 2.5m 이상인 경우만 다운로드)</fc></u></l>");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","192","1038","100.00%","130",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("65");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grdCarRegctf\"/><PanelItem id=\"PanelItem02\" componentid=\"staCarRegctfCn\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFile01","0","42","100.00%","201",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("66");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel01_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staCarFrtsdPhoto","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("67");
            obj.set_text("차량/장비 사진(정면)");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btnCarFrtsdPhotoSample","813","76","120","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("68");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btnCarFrtsdPhotoFile","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("69");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.getSetter("upcolid").set("carFrtsdPhotoFile");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("70");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnCarFrtsdPhotoSample\"/><PanelItem id=\"PanelItem00\" componentid=\"btnCarFrtsdPhotoFile\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("71");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCarFrtsdPhoto\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Grid("grdCarFrtsdPhoto","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("72");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:B120\" cssclass=\"expr:dataset.parent.gfnIsNull(B120) ? &quot;&quot; : &quot;CellFile&quot;\" cursor=\"pointer\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.gfnIsNull(B120) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.gfnIsNull(B120) ? &quot;none&quot; : &quot;button&quot;\" text=\"삭제\" cssclass=\"expr:dataset.parent.gfnIsNull(B120) ? &quot;&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staCarFrtsdPhotoCn","20","20","100%","30",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("73");
            obj.set_text("JPG,JPEG,GIF,PNG,BMP만 첨부가능");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("false");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00","192","1038","100%","80",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("74");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grdCarFrtsdPhoto\"/><PanelItem id=\"PanelItem02\" componentid=\"staCarFrtsdPhotoCn\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFile02","0","42","100.00%","151",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("75");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel01_00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staCarFlkPhoto","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("76");
            obj.set_text("차량/장비 사진(측면)");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btnCarFlkPhotoSample","813","76","120","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("77");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btnCarFlkPhotoFile","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("78");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.getSetter("upcolid").set("carFlkPhotoFile");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00_01","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("79");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnCarFlkPhotoSample\"/><PanelItem id=\"PanelItem00\" componentid=\"btnCarFlkPhotoFile\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00_01","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("80");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCarFlkPhoto\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00_01\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Grid("grdCarFlkPhoto","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("81");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:B130\" cssclass=\"expr:dataset.parent.gfnIsNull(B130) ? &quot;&quot; : &quot;CellFile&quot;\" cursor=\"pointer\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.gfnIsNull(B130) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.gfnIsNull(B130) ? &quot;none&quot; : &quot;button&quot;\" text=\"삭제\" cssclass=\"expr:dataset.parent.gfnIsNull(B130) ? &quot;&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staCarFlkPhotoCn","20","20","100%","30",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("82");
            obj.set_text("JPG,JPEG,GIF,PNG,BMP만 첨부가능");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("false");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_01","192","1038","100%","80",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("83");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grdCarFlkPhoto\"/><PanelItem id=\"PanelItem02\" componentid=\"staCarFlkPhotoCn\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFile04","0","42","100.00%","151",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("84");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel01_00_00_01\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staSafeDvcKnd","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("85");
            obj.set_text("안전장치 종류");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Div("divSafeDvcKnd","-70","1328","100%","100",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("86");
            obj.set_text("Div00");
            obj.set_fittocontents("height");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_01_00_00_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("87");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSafeDvcKnd\"/><PanelItem id=\"PanelItem01\" componentid=\"divSafeDvcKnd\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Pan09","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("88");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Panel01_01_00_00_01_00_00_01\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staSafeDvcEtcKndNm","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("89");
            obj.set_text("안전장치 기타 종류");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edtSafeDvcEtcKndNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("90");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_01_00_00_00_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("91");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSafeDvcEtcKndNm\"/><PanelItem id=\"PanelItem03\" componentid=\"edtSafeDvcEtcKndNm\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Pan11","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("92");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Panel01_01_00_00_01_00_00_00_01\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staSafeDvcPhoto","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("93");
            obj.set_text("안전장치 사진");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btnSafeDvcPhotoSample","813","76","120","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("94");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btnSafeDvcPhotoFile","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("95");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.getSetter("upcolid").set("safeDvcPhotoFile");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00_00","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("96");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnSafeDvcPhotoSample\"/><PanelItem id=\"PanelItem00\" componentid=\"btnSafeDvcPhotoFile\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00_00","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("97");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSafeDvcPhoto\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Grid("grdSafeDvcPhoto","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("98");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:B140\" cssclass=\"expr:dataset.parent.gfnIsNull(B140) ? &quot;&quot; : &quot;CellFile&quot;\" cursor=\"pointer\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.gfnIsNull(B140) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.gfnIsNull(B140) ? &quot;none&quot; : &quot;button&quot;\" text=\"삭제\" cssclass=\"expr:dataset.parent.gfnIsNull(B140) ? &quot;&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staSafeDvcPhotoCn","20","20","100%","30",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("99");
            obj.set_text("JPG,JPEG,GIF,PNG,BMP만 첨부가능");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("false");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00","192","1038","100%","80",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("100");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grdSafeDvcPhoto\"/><PanelItem id=\"PanelItem02\" componentid=\"staSafeDvcPhotoCn\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFile03","0","42","100.00%","151",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("101");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel01_00_00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staNewInspRcdsht","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("102");
            obj.set_text("신규검사기록표");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btnNewInspRcdshtSample","813","76","120","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("103");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btnNewInspRcdshtFile","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("104");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.getSetter("upcolid").set("newInspRcdshtFile");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00_02","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("105");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnNewInspRcdshtSample\"/><PanelItem id=\"PanelItem00\" componentid=\"btnNewInspRcdshtFile\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00_02","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("106");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staNewInspRcdsht\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00_02\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Grid("grdNewInspRcdsht","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("107");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:B150\" cssclass=\"expr:dataset.parent.gfnIsNull(B150) ? &quot;&quot; : &quot;CellFile&quot;\" cursor=\"pointer\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.gfnIsNull(B150) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.gfnIsNull(B150) ? &quot;none&quot; : &quot;button&quot;\" text=\"삭제\" cssclass=\"expr:dataset.parent.gfnIsNull(B150) ? &quot;&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staNewInspRcdshtCn","20","20","100%","81",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("108");
            obj.set_text("안전검사 대상이 아닌 차량은 제출 불필요\r\n*신규검사기록표는 이동지역 내 안전검사장에서 검사 후 발급\r\n - 한국공항 검사장 : 032-742-2470\r\n - 아시아나에어포트 검사장 : 032-744-5055");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("false");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_02","192","1038","100%","131",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("109");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grdNewInspRcdsht\"/><PanelItem id=\"PanelItem02\" componentid=\"staNewInspRcdshtCn\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFile05","0","42","100.00%","202",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("110");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00_02\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel01_00_00_02\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLsct","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("111");
            obj.set_text("임대차계약서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btnLsctSample","813","76","120","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("112");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btnLsctFile","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("113");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.getSetter("upcolid").set("lsctFile");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00_03","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("114");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnLsctSample\"/><PanelItem id=\"PanelItem00\" componentid=\"btnLsctFile\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00_03","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("115");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLsct\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00_03\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Grid("grdLsct","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("116");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:B160\" cssclass=\"expr:dataset.parent.gfnIsNull(B160) ? &quot;&quot; : &quot;CellFile&quot;\" cursor=\"pointer\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.gfnIsNull(B160) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.gfnIsNull(B160) ? &quot;none&quot; : &quot;button&quot;\" text=\"삭제\" cssclass=\"expr:dataset.parent.gfnIsNull(B160) ? &quot;&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLsctCn","20","20","100%","30",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("117");
            obj.set_text("렌터카일 경우 임차인을 증명할 수 있는 임대차계약서 사본 1부.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("false");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_03","192","1038","100%","80",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("118");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grdLsct\"/><PanelItem id=\"PanelItem02\" componentid=\"staLsctCn\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFile06","0","42","100.00%","151",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("119");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00_03\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel01_00_00_03\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staCnvyMttr","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("120");
            obj.set_text("전달사항");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new TextArea("txtCnvyMttr","200.00","728","100%","150",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("121");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01","356","507","100%","150",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("122");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"txtCnvyMttr\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_01","10.00","98","305","196",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("123");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCnvyMttr\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Pan10","0","60","100.00%","207",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("124");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_01\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Div("divGrd00","0","30","100%","187",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("125");
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

            obj = new Panel("Pal03","0","60","100.00%","208",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("126");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divGrd00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staSubTitle04","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("13");
            obj.set_text("처리내역");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinPrcsCn","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_00_01","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("15");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinPrcsCn\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit04","1630","674","100%","66",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("16");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle04\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_00_01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div04","0","0","100%","400",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("17");
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

            obj = new Panel("Panel01_01_01","10.00","98","305","196",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("1");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCnvyMttr\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Pan01","0","60","100.00%","207",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("2");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_01\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staAprvYmd","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("3");
            obj.set_text("승인일자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_01_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staAprvYmd\"/><PanelItem id=\"PanelItem03\" componentid=\"calAprvYmd\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staErsrYmd","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("5");
            obj.set_text("말소일자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staErsrYmd\"/><PanelItem id=\"PanelItem03\" componentid=\"calErsrYmd\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Pan02","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("7");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00_00_01\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Calendar("calErsrYmd","524","242","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("17");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01","356","507","100%","150",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("8");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"txtCnvyMttr\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new TextArea("txtCnvyMttr","200.00","728","100%","150",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("9");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staBilgYn","50","631","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("10");
            obj.set_text("과금여부");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Radio("rdoBilgYn","50","676","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("11");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divForm_form_Div04_form_rdoBilgYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div04_form_rdoBilgYn_innerdataset", obj);
            divForm_form_Div04_form_rdoBilgYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">AISVERCHR001</Col><Col id=\"datacolumn\">과금대상</Col></Row><Row><Col id=\"codecolumn\">AISVERCHR002</Col><Col id=\"datacolumn\">비과금대상</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div04_form_rdoBilgYn_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel03_00_00","30","630","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"rdoBilgYn\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("pan04_01","50","631","305","86",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("13");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staBilgYn\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel03_00_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00","50","631","305","1",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("14");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents/>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Pan03","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("15");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan04_01_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Calendar("calAprvYmd","0","0","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("16");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Div("divQuick",null,"62","296","201","22",null,null,null,null,null,this);
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

            obj = new Button("btn01","17.00","btn00:0","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("1");
            obj.set_text("신청정보");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn02","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("2");
            obj.set_text("제원");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn03","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("3");
            obj.set_text("처리내역");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"divQuick:0","296","81","22",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickBtnBg");
            obj.set_fittocontents("height");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","7","20","100","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("0");
            obj.set_text("미처리종료");
            obj.set_cssclass("btn_WF_No");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btn00_00_00_00","10","20","100","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("1");
            obj.set_text("차량등록신청");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divBtn.addChild(obj.name, obj);

            obj = new Div("divGuide00","1600.00","145","450","385",null,null,null,null,null,null,this);
            obj.set_taborder("3");
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

            obj = new RaonkUpload("RaonkUpload","20","divForm:0","1020","200",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_DevelopLangage("JAVA");
            obj.set_ExtensionAllowOrLimit("1");
            obj.set_HandlerUrl("/common/uploadDownload.do");
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
            //-- Default Layout : this.divForm.form.divDgstfnExmn
            obj = new Layout("default","",0,0,this.divForm.form.divDgstfnExmn.form,function(p){});
            this.divForm.form.divDgstfnExmn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.Div01.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Pan01.set_taborder("0");
                p.Pan01.set_horizontalgap("20");
                p.Pan01.set_flexcrossaxiswrapalign("start");
                p.Pan01.set_flexwrap("wrap");
                p.Pan01.set_fittocontents("height");
                p.Pan01.set_verticalgap("0");
                p.Pan01.set_spacing("0px 20px 10px 20px");
                p.Pan01.set_cssclass("pal_WF_DtlBg");
                p.Pan01.set_visible("false");
                p.Pan01.move("0","60","100.00%","96",null,null);

                p.staAplyNo.set_taborder("1");
                p.staAplyNo.set_text("신청번호");
                p.staAplyNo.set_cssclass("sta_WF_Label");
                p.staAplyNo.move("10","98","100%","46",null,null);

                p.edtAplyNo.set_taborder("2");
                p.edtAplyNo.set_readonly("true");
                p.edtAplyNo.move("10.00","158","100%","40",null,null);

                p.Panel01_00.set_taborder("3");
                p.Panel01_00.set_type("vertical");
                p.Panel01_00.set_flexgrow("1");
                p.Panel01_00.move("10.00","98","305","86",null,null);

                p.staAplySe.set_taborder("4");
                p.staAplySe.set_text("신청구분 ");
                p.staAplySe.set_cssclass("sta_WF_Label");
                p.staAplySe.move("10","98","100%","46",null,null);

                p.Panel01_01.set_taborder("5");
                p.Panel01_01.set_type("vertical");
                p.Panel01_01.set_flexgrow("1");
                p.Panel01_01.move("10.00","98","305","86",null,null);

                p.Pan02.set_taborder("6");
                p.Pan02.set_horizontalgap("20");
                p.Pan02.set_flexcrossaxiswrapalign("start");
                p.Pan02.set_flexwrap("wrap");
                p.Pan02.set_verticalgap("0");
                p.Pan02.set_spacing("0px 20px 10px 20px");
                p.Pan02.set_cssclass("pal_WF_DtlBg");
                p.Pan02.set_flexshrink("1");
                p.Pan02.set_fittocontents("height");
                p.Pan02.move("0","60","100.00%","96",null,null);

                p.staAplcntNm.set_taborder("7");
                p.staAplcntNm.set_text("신청자");
                p.staAplcntNm.set_cssclass("sta_WF_Label");
                p.staAplcntNm.move("10","98","100%","46",null,null);

                p.Panel01_01_01.set_taborder("8");
                p.Panel01_01_01.set_type("vertical");
                p.Panel01_01_01.set_flexgrow("1");
                p.Panel01_01_01.move("10.00","98","305","86",null,null);

                p.staAplcntInstNm.set_taborder("9");
                p.staAplcntInstNm.set_text("신청자 회사명");
                p.staAplcntInstNm.set_cssclass("sta_WF_Label");
                p.staAplcntInstNm.move("10","98","100%","46",null,null);

                p.Panel01_01_00_00.set_taborder("10");
                p.Panel01_01_00_00.set_type("vertical");
                p.Panel01_01_00_00.set_flexgrow("1");
                p.Panel01_01_00_00.move("10.00","98","305","86",null,null);

                p.Pan03.set_taborder("11");
                p.Pan03.set_horizontalgap("20");
                p.Pan03.set_flexcrossaxiswrapalign("start");
                p.Pan03.set_flexwrap("wrap");
                p.Pan03.set_verticalgap("0");
                p.Pan03.set_spacing("0px 20px 10px 20px");
                p.Pan03.set_cssclass("pal_WF_DtlBg");
                p.Pan03.set_flexshrink("1");
                p.Pan03.set_fittocontents("height");
                p.Pan03.move("0","60","100.00%","96",null,null);

                p.edtAplySe.set_taborder("12");
                p.edtAplySe.set_readonly("true");
                p.edtAplySe.move("10.00","158","100%","40",null,null);

                p.edtAplcntNm.set_taborder("13");
                p.edtAplcntNm.set_readonly("true");
                p.edtAplcntNm.move("10.00","158","100%","40",null,null);

                p.edtAplcntInstNm.set_taborder("14");
                p.edtAplcntInstNm.set_readonly("true");
                p.edtAplcntInstNm.move("10.00","158","100%","40",null,null);

                p.staRgtrNm.set_taborder("15");
                p.staRgtrNm.set_text("등록자");
                p.staRgtrNm.set_cssclass("sta_WF_Label");
                p.staRgtrNm.move("10","98","100%","46",null,null);

                p.edtRgtrNm.set_taborder("16");
                p.edtRgtrNm.set_readonly("true");
                p.edtRgtrNm.move("10.00","158","100%","40",null,null);

                p.Panel01_01_01_01.set_taborder("17");
                p.Panel01_01_01_01.set_type("vertical");
                p.Panel01_01_01_01.set_flexgrow("1");
                p.Panel01_01_01_01.move("10.00","98","305","86",null,null);

                p.staRgtrInstNm.set_taborder("18");
                p.staRgtrInstNm.set_text("등록자 회사명");
                p.staRgtrInstNm.set_cssclass("sta_WF_Label");
                p.staRgtrInstNm.move("10","98","100%","46",null,null);

                p.edtRgtrInstNm.set_taborder("19");
                p.edtRgtrInstNm.set_readonly("true");
                p.edtRgtrInstNm.move("10.00","158","100%","40",null,null);

                p.Panel01_01_00_00_01.set_taborder("20");
                p.Panel01_01_00_00_01.set_type("vertical");
                p.Panel01_01_00_00_01.set_flexgrow("1");
                p.Panel01_01_00_00_01.move("10.00","98","305","86",null,null);

                p.Pan05.set_taborder("21");
                p.Pan05.set_horizontalgap("20");
                p.Pan05.set_flexcrossaxiswrapalign("start");
                p.Pan05.set_flexwrap("wrap");
                p.Pan05.set_verticalgap("0");
                p.Pan05.set_spacing("0px 20px 10px 20px");
                p.Pan05.set_cssclass("pal_WF_DtlBg");
                p.Pan05.set_flexshrink("1");
                p.Pan05.set_fittocontents("height");
                p.Pan05.set_visible("false");
                p.Pan05.move("0","60","100.00%","96",null,null);

                p.edtMblTelno.set_taborder("23");
                p.edtMblTelno.set_readonly("true");
                p.edtMblTelno.set_minheight("40");
                p.edtMblTelno.set_maxheight("");
                p.edtMblTelno.move("10.00","158","100%","40",null,null);

                p.staMblTelno.set_taborder("22");
                p.staMblTelno.set_text("휴대폰 번호");
                p.staMblTelno.set_cssclass("sta_WF_Label");
                p.staMblTelno.move("10","98","100%","46",null,null);

                p.Panel01_01_01_02.set_taborder("24");
                p.Panel01_01_01_02.set_type("vertical");
                p.Panel01_01_01_02.set_flexgrow("1");
                p.Panel01_01_01_02.set_fittocontents("height");
                p.Panel01_01_01_02.move("10.00","98","305","116",null,null);

                p.Panel01_01_00_00_02.set_taborder("25");
                p.Panel01_01_00_00_02.set_type("vertical");
                p.Panel01_01_00_00_02.set_flexgrow("1");
                p.Panel01_01_00_00_02.move("10.00","98","305","1",null,null);

                p.Pan06.set_taborder("26");
                p.Pan06.set_horizontalgap("20");
                p.Pan06.set_flexcrossaxiswrapalign("start");
                p.Pan06.set_flexwrap("wrap");
                p.Pan06.set_verticalgap("0");
                p.Pan06.set_spacing("0px 20px 10px 20px");
                p.Pan06.set_cssclass("pal_WF_DtlBg");
                p.Pan06.set_flexshrink("1");
                p.Pan06.set_fittocontents("height");
                p.Pan06.move("0","60","100.00%","127",null,null);

                p.Panel03.set_taborder("28");
                p.Panel03.set_type("vertical");
                p.Panel03.set_verticalgap("5");
                p.Panel03.set_fittocontents("height");
                p.Panel03.move("30","630","100%","74",null,null);

                p.sta00.set_taborder("27");
                p.sta00.set_text("전화번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 등록 및 수정이 가능합니다.");
                p.sta00.set_cssclass("sta_WF_Des");
                p.sta00.set_fittocontents("height");
                p.sta00.move("200.00","383","100%","47",null,null);
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
                p.cboVhclSe.set_taborder("27");
                p.cboVhclSe.set_innerdataset("dsVhclSe");
                p.cboVhclSe.set_codecolumn("cdId");
                p.cboVhclSe.set_datacolumn("cdNm");
                p.cboVhclSe.set_displaynulltext("선택");
                p.cboVhclSe.set_text("");
                p.cboVhclSe.set_index("-1");
                p.cboVhclSe.move("200.00","128","100%","40",null,null);

                p.Panel01_01_01_02.set_taborder("0");
                p.Panel01_01_01_02.set_type("vertical");
                p.Panel01_01_01_02.set_flexgrow("1");
                p.Panel01_01_01_02.set_fittocontents("height");
                p.Panel01_01_01_02.set_spacing("10px 0px 10px 0px");
                p.Panel01_01_01_02.move("10.00","98","1000","50",null,null);

                p.Pan01.set_taborder("1");
                p.Pan01.set_horizontalgap("20");
                p.Pan01.set_flexcrossaxiswrapalign("start");
                p.Pan01.set_flexwrap("wrap");
                p.Pan01.set_verticalgap("0");
                p.Pan01.set_spacing("0px 20px 10px 20px");
                p.Pan01.set_cssclass("pal_WF_DtlBg");
                p.Pan01.set_flexshrink("1");
                p.Pan01.set_fittocontents("height");
                p.Pan01.move("0","60","100.00%","61",null,null);

                p.staNewReg.set_taborder("2");
                p.staNewReg.set_text("인천국제공항 이동지역에 차량(장비)를 신규 등록 하신다면?<l v=\'atfl/등록절차.pdf\" download=\"등록절차.pdf\'> <u v=\'true\'><fc v=\'#1e4ebe\'>차량(장비) 신규등록 절차 보기</fc></u></l>");
                p.staNewReg.set_cssclass("sta_WF_Des");
                p.staNewReg.set_fittocontents("height");
                p.staNewReg.set_usedecorate("true");
                p.staNewReg.move("20","20","100%","30",null,null);

                p.staVhclSe.set_taborder("3");
                p.staVhclSe.set_text("차량(장비)구분");
                p.staVhclSe.set_cssclass("sta_WF_Label");
                p.staVhclSe.move("10","98","100%","46",null,null);

                p.Panel01_01_01_01.set_taborder("4");
                p.Panel01_01_01_01.set_type("vertical");
                p.Panel01_01_01_01.set_flexgrow("1");
                p.Panel01_01_01_01.move("10.00","98","305","86",null,null);

                p.staCarmdl.set_taborder("5");
                p.staCarmdl.set_text("차종규모");
                p.staCarmdl.set_cssclass("sta_WF_Label");
                p.staCarmdl.move("10","98","100%","46",null,null);

                p.Panel01_01_00_00_01.set_taborder("6");
                p.Panel01_01_00_00_01.set_type("vertical");
                p.Panel01_01_00_00_01.set_flexgrow("1");
                p.Panel01_01_00_00_01.move("10.00","98","305","86",null,null);

                p.Pan02.set_taborder("7");
                p.Pan02.set_horizontalgap("20");
                p.Pan02.set_flexcrossaxiswrapalign("start");
                p.Pan02.set_flexwrap("wrap");
                p.Pan02.set_verticalgap("0");
                p.Pan02.set_spacing("0px 20px 10px 20px");
                p.Pan02.set_cssclass("pal_WF_DtlBg");
                p.Pan02.set_flexshrink("1");
                p.Pan02.set_fittocontents("height");
                p.Pan02.move("0","60","100.00%","96",null,null);

                p.staUsg.set_taborder("8");
                p.staUsg.set_text("용도");
                p.staUsg.set_cssclass("sta_WF_Label");
                p.staUsg.move("10","98","100%","46",null,null);

                p.Panel01_01_01_01_00.set_taborder("9");
                p.Panel01_01_01_01_00.set_type("vertical");
                p.Panel01_01_01_01_00.set_flexgrow("1");
                p.Panel01_01_01_01_00.move("10.00","98","305","86",null,null);

                p.staMnfctrNm.set_taborder("10");
                p.staMnfctrNm.set_text("제작사");
                p.staMnfctrNm.set_cssclass("sta_WF_Label");
                p.staMnfctrNm.move("10","98","100%","46",null,null);

                p.Panel01_01_00_00_01_00.set_taborder("11");
                p.Panel01_01_00_00_01_00.set_type("vertical");
                p.Panel01_01_00_00_01_00.set_flexgrow("1");
                p.Panel01_01_00_00_01_00.move("10.00","98","305","86",null,null);

                p.Pan03.set_taborder("12");
                p.Pan03.set_horizontalgap("20");
                p.Pan03.set_flexcrossaxiswrapalign("start");
                p.Pan03.set_flexwrap("wrap");
                p.Pan03.set_verticalgap("0");
                p.Pan03.set_spacing("0px 20px 10px 20px");
                p.Pan03.set_cssclass("pal_WF_DtlBg");
                p.Pan03.set_flexshrink("1");
                p.Pan03.set_fittocontents("height");
                p.Pan03.move("0","60","100.00%","96",null,null);

                p.staFrm.set_taborder("13");
                p.staFrm.set_text("형식");
                p.staFrm.set_cssclass("sta_WF_Label");
                p.staFrm.move("10","98","100%","46",null,null);

                p.edtFrm.set_taborder("14");
                p.edtFrm.move("10.00","158","100%","40",null,null);

                p.Panel01_01_01_01_01.set_taborder("15");
                p.Panel01_01_01_01_01.set_type("vertical");
                p.Panel01_01_01_01_01.set_flexgrow("1");
                p.Panel01_01_01_01_01.move("10.00","98","305","86",null,null);

                p.staMdlyr.set_taborder("16");
                p.staMdlyr.set_text("연식");
                p.staMdlyr.set_cssclass("sta_WF_Label");
                p.staMdlyr.move("10","98","100%","46",null,null);

                p.Panel01_01_00_00_01_01.set_taborder("17");
                p.Panel01_01_00_00_01_01.set_type("vertical");
                p.Panel01_01_00_00_01_01.set_flexgrow("1");
                p.Panel01_01_00_00_01_01.move("10.00","98","305","86",null,null);

                p.Pan04.set_taborder("18");
                p.Pan04.set_horizontalgap("20");
                p.Pan04.set_flexcrossaxiswrapalign("start");
                p.Pan04.set_flexwrap("wrap");
                p.Pan04.set_verticalgap("0");
                p.Pan04.set_spacing("0px 20px 10px 20px");
                p.Pan04.set_cssclass("pal_WF_DtlBg");
                p.Pan04.set_flexshrink("1");
                p.Pan04.set_fittocontents("height");
                p.Pan04.move("0","60","100.00%","96",null,null);

                p.staFuelKnd.set_taborder("19");
                p.staFuelKnd.set_text("연료종류");
                p.staFuelKnd.set_cssclass("sta_WF_Label");
                p.staFuelKnd.move("10","98","100%","46",null,null);

                p.Panel01_01_00_00_01_00_01.set_taborder("20");
                p.Panel01_01_00_00_01_00_01.set_type("vertical");
                p.Panel01_01_00_00_01_00_01.set_flexgrow("1");
                p.Panel01_01_00_00_01_00_01.move("10.00","98","305","86",null,null);

                p.staVin.set_taborder("21");
                p.staVin.set_text("차대/시리얼번호");
                p.staVin.set_cssclass("sta_WF_Label");
                p.staVin.move("10","98","100%","46",null,null);

                p.edtVin.set_taborder("22");
                p.edtVin.set_minheight("40");
                p.edtVin.set_maxheight("");
                p.edtVin.move("10.00","158","100%","40",null,null);

                p.sta00_00.set_taborder("23");
                p.sta00_00.set_text("자동차의 보닛을 열면 크로스 멤버나 대시 패널부에 부착되어 있습니다.");
                p.sta00_00.set_cssclass("sta_WF_Des");
                p.sta00_00.set_fittocontents("height");
                p.sta00_00.move("200.00","383","100%","47",null,null);

                p.Panel03_00.set_taborder("24");
                p.Panel03_00.set_type("vertical");
                p.Panel03_00.set_verticalgap("5");
                p.Panel03_00.set_fittocontents("height");
                p.Panel03_00.move("30","630","100%","74",null,null);

                p.Panel01_01_01_02_00_01.set_taborder("25");
                p.Panel01_01_01_02_00_01.set_type("vertical");
                p.Panel01_01_01_02_00_01.set_flexgrow("1");
                p.Panel01_01_01_02_00_01.set_fittocontents("height");
                p.Panel01_01_01_02_00_01.move("10.00","98","305","116",null,null);

                p.cboVhclCd.set_taborder("29");
                p.cboVhclCd.set_innerdataset("dsVhclCd");
                p.cboVhclCd.set_codecolumn("cdId");
                p.cboVhclCd.set_datacolumn("cdNm");
                p.cboVhclCd.set_displaynulltext("선택");
                p.cboVhclCd.set_visible("false");
                p.cboVhclCd.set_text("");
                p.cboVhclCd.set_index("-1");
                p.cboVhclCd.move("200.00","128","100%","40",null,null);

                p.Pan05.set_taborder("26");
                p.Pan05.set_horizontalgap("20");
                p.Pan05.set_flexcrossaxiswrapalign("start");
                p.Pan05.set_flexwrap("wrap");
                p.Pan05.set_verticalgap("0");
                p.Pan05.set_spacing("0px 20px 10px 20px");
                p.Pan05.set_cssclass("pal_WF_DtlBg");
                p.Pan05.set_flexshrink("1");
                p.Pan05.set_fittocontents("height");
                p.Pan05.move("0","60","100.00%","127",null,null);

                p.Panel00.set_taborder("34");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.move("392","115","100%","40",null,null);

                p.cboCarmdl.set_taborder("28");
                p.cboCarmdl.set_innerdataset("dsCarmdl");
                p.cboCarmdl.set_codecolumn("cdId");
                p.cboCarmdl.set_datacolumn("cdNm");
                p.cboCarmdl.set_displaynulltext("선택");
                p.cboCarmdl.set_text("");
                p.cboCarmdl.set_index("-1");
                p.cboCarmdl.move("200.00","128","100%","40",null,null);

                p.cboUsg.set_taborder("30");
                p.cboUsg.set_innerdataset("dsUsg");
                p.cboUsg.set_codecolumn("cdId");
                p.cboUsg.set_datacolumn("cdNm");
                p.cboUsg.set_displaynulltext("선택");
                p.cboUsg.set_text("");
                p.cboUsg.set_index("-1");
                p.cboUsg.move("200.00","128","100%","40",null,null);

                p.cboFuelKnd.set_taborder("31");
                p.cboFuelKnd.set_innerdataset("dsFuelKnd");
                p.cboFuelKnd.set_codecolumn("cdId");
                p.cboFuelKnd.set_datacolumn("cdNm");
                p.cboFuelKnd.set_displaynulltext("선택");
                p.cboFuelKnd.set_text("");
                p.cboFuelKnd.set_index("-1");
                p.cboFuelKnd.move("200.00","128","100%","40",null,null);

                p.edtMdlyr.set_taborder("32");
                p.edtMdlyr.set_inputtype("digit");
                p.edtMdlyr.set_maxlength("4");
                p.edtMdlyr.move("10.00","158","100%","40",null,null);

                p.edtMnfctrNm.set_taborder("33");
                p.edtMnfctrNm.move("10.00","158","100%","40",null,null);

                p.staOfcbzUseYn.set_taborder("35");
                p.staOfcbzUseYn.set_text("공용충전기사용여부");
                p.staOfcbzUseYn.set_cssclass("sta_WF_Label");
                p.staOfcbzUseYn.move("50","631","100%","46",null,null);

                p.rdoOfcbzUseYn.set_taborder("36");
                p.rdoOfcbzUseYn.set_fittocontents("width");
                p.rdoOfcbzUseYn.set_codecolumn("codecolumn");
                p.rdoOfcbzUseYn.set_datacolumn("datacolumn");
                p.rdoOfcbzUseYn.set_direction("vertical");
                p.rdoOfcbzUseYn.set_innerdataset(divForm_form_Div02_form_rdoOfcbzUseYn_innerdataset);
                p.rdoOfcbzUseYn.set_index("-1");
                p.rdoOfcbzUseYn.move("50","676","100%","40",null,null);

                p.Panel03_00_00.set_taborder("37");
                p.Panel03_00_00.set_type("vertical");
                p.Panel03_00_00.set_verticalgap("5");
                p.Panel03_00_00.set_fittocontents("height");
                p.Panel03_00_00.move("30","630","100%","40",null,null);

                p.pan06_01.set_taborder("38");
                p.pan06_01.set_type("vertical");
                p.pan06_01.set_flexgrow("1");
                p.pan06_01.set_fittocontents("height");
                p.pan06_01.move("50","631","305","86",null,null);

                p.pan06_02.set_taborder("39");
                p.pan06_02.set_type("vertical");
                p.pan06_02.set_flexgrow("1");
                p.pan06_02.set_fittocontents("height");
                p.pan06_02.move("50","631","305","1",null,null);

                p.Pan06.set_taborder("40");
                p.Pan06.set_horizontalgap("20");
                p.Pan06.set_flexcrossaxiswrapalign("start");
                p.Pan06.set_flexwrap("wrap");
                p.Pan06.set_verticalgap("0");
                p.Pan06.set_spacing("0px 20px 10px 20px");
                p.Pan06.set_cssclass("pal_WF_DtlBg");
                p.Pan06.set_flexshrink("1");
                p.Pan06.set_fittocontents("height");
                p.Pan06.set_visible("false");
                p.Pan06.move("0","60","100.00%","97",null,null);

                p.staElctyHdlEqpmntIdEvdncDcmnt.set_taborder("41");
                p.staElctyHdlEqpmntIdEvdncDcmnt.set_text("전기조업장비ID증빙서류");
                p.staElctyHdlEqpmntIdEvdncDcmnt.set_cssclass("sta_WF_Label");
                p.staElctyHdlEqpmntIdEvdncDcmnt.set_flexgrow("1");
                p.staElctyHdlEqpmntIdEvdncDcmnt.move("0","44","305","46",null,null);

                p.btnElctyHdlEqpmntIdEvdncDcmntSample.set_taborder("42");
                p.btnElctyHdlEqpmntIdEvdncDcmntSample.set_text("샘플첨부파일명");
                p.btnElctyHdlEqpmntIdEvdncDcmntSample.set_cssclass("btn_WF_Small");
                p.btnElctyHdlEqpmntIdEvdncDcmntSample.set_fittocontents("width");
                p.btnElctyHdlEqpmntIdEvdncDcmntSample.move("813","76","120","40",null,null);

                p.btnElctyHdlEqpmntIdEvdncDcmntFile.set_taborder("43");
                p.btnElctyHdlEqpmntIdEvdncDcmntFile.set_text("파일선택");
                p.btnElctyHdlEqpmntIdEvdncDcmntFile.set_cssclass("btn_WF_FileUp");
                p.btnElctyHdlEqpmntIdEvdncDcmntFile.getSetter("upcolid").set("elctyHdlEqpmntIdEvdncDcmntFile");
                p.btnElctyHdlEqpmntIdEvdncDcmntFile.move("124","58","116","40",null,null);

                p.panBtnFile00_00.set_taborder("44");
                p.panBtnFile00_00.set_flexgrow("1");
                p.panBtnFile00_00.set_flexcrossaxisalign("start");
                p.panBtnFile00_00.set_flexmainaxisalign("end");
                p.panBtnFile00_00.set_horizontalgap("10");
                p.panBtnFile00_00.move("433","58","305","46",null,null);

                p.panTitle00_00.set_taborder("45");
                p.panTitle00_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00.set_flexwrap("wrap");
                p.panTitle00_00.set_fittocontents("height");
                p.panTitle00_00.move("0","124","100%","46",null,null);

                p.grdElctyHdlEqpmntIdEvdncDcmnt.set_taborder("46");
                p.grdElctyHdlEqpmntIdEvdncDcmnt.set_binddataset("dsFile");
                p.grdElctyHdlEqpmntIdEvdncDcmnt.set_autofittype("col");
                p.grdElctyHdlEqpmntIdEvdncDcmnt.set_cssclass("grd_WF_FileAdd");
                p.grdElctyHdlEqpmntIdEvdncDcmnt.set_scrollbartype("none none");
                p.grdElctyHdlEqpmntIdEvdncDcmnt.move("20.00","114","100%","40",null,null);

                p.Panel01_00_00.set_taborder("47");
                p.Panel01_00_00.set_type("vertical");
                p.Panel01_00_00.set_verticalgap("10");
                p.Panel01_00_00.move("192","1038","100%","40",null,null);

                p.panFile01.set_taborder("48");
                p.panFile01.set_fittocontents("height");
                p.panFile01.set_spacing("10px 20px 10px 20px");
                p.panFile01.set_flexwrap("wrap");
                p.panFile01.set_cssclass("pal_WF_DtlBg");
                p.panFile01.set_verticalgap("4");
                p.panFile01.set_visible("false");
                p.panFile01.move("0","42","100.00%","111",null,null);

                p.staBatryId.set_taborder("49");
                p.staBatryId.set_text("Battery ID");
                p.staBatryId.set_cssclass("sta_WF_Label");
                p.staBatryId.move("10","98","100%","46",null,null);

                p.edtBatryId.set_taborder("50");
                p.edtBatryId.move("10.00","158","100%","40",null,null);

                p.Panel01_01_01_01_01_00.set_taborder("51");
                p.Panel01_01_01_01_01_00.set_type("vertical");
                p.Panel01_01_01_01_01_00.set_flexgrow("1");
                p.Panel01_01_01_01_01_00.move("10.00","98","305","86",null,null);

                p.staVhcleId.set_taborder("52");
                p.staVhcleId.set_text("Vehicle ID");
                p.staVhcleId.set_cssclass("sta_WF_Label");
                p.staVhcleId.move("10","98","100%","46",null,null);

                p.edtVhcleId.set_taborder("53");
                p.edtVhcleId.move("10.00","158","100%","40",null,null);

                p.Panel01_01_00_00_01_01_00.set_taborder("54");
                p.Panel01_01_00_00_01_01_00.set_type("vertical");
                p.Panel01_01_00_00_01_01_00.set_flexgrow("1");
                p.Panel01_01_00_00_01_01_00.move("10.00","98","305","86",null,null);

                p.Pan07.set_taborder("55");
                p.Pan07.set_horizontalgap("20");
                p.Pan07.set_flexcrossaxiswrapalign("start");
                p.Pan07.set_flexwrap("wrap");
                p.Pan07.set_verticalgap("0");
                p.Pan07.set_spacing("0px 20px 10px 20px");
                p.Pan07.set_cssclass("pal_WF_DtlBg");
                p.Pan07.set_flexshrink("1");
                p.Pan07.set_fittocontents("height");
                p.Pan07.set_visible("false");
                p.Pan07.move("0","60","100.00%","96",null,null);

                p.staGdCn.set_taborder("56");
                p.staGdCn.set_text("<b v=\'true\'><인천국제공항 이동지역 내의 공용 충전기 사용 관련 안내></b>\r\n인천국제공항 이동지역 내의 공용 충전기에 대한 모든 권리는 <fc v=\'#1e4ebe\'>인천국제공항공사</fc>소유로서 공용충전기를 허가없이 <fc v=\'#ee2e5b\'>무단사용 및 도용, 훼손 등을 절대 금지</fc>합니다.\r\n사전허가된 장비 이외의 사용시에는 제재를 받을수 있음을 알려드립니다.");
                p.staGdCn.set_cssclass("sta_WF_Des");
                p.staGdCn.set_fittocontents("height");
                p.staGdCn.set_usedecorate("true");
                p.staGdCn.move("20","20","100%","90",null,null);

                p.Panel08_01.set_taborder("57");
                p.Panel08_01.set_type("vertical");
                p.Panel08_01.set_flexgrow("1");
                p.Panel08_01.set_fittocontents("height");
                p.Panel08_01.set_spacing("10px 0px 10px 0px");
                p.Panel08_01.move("10.00","98","1000","110",null,null);

                p.Pan08.set_taborder("58");
                p.Pan08.set_horizontalgap("20");
                p.Pan08.set_flexcrossaxiswrapalign("start");
                p.Pan08.set_flexwrap("wrap");
                p.Pan08.set_verticalgap("0");
                p.Pan08.set_spacing("0px 20px 10px 20px");
                p.Pan08.set_cssclass("pal_WF_DtlBg");
                p.Pan08.set_flexshrink("1");
                p.Pan08.set_fittocontents("height");
                p.Pan08.set_visible("false");
                p.Pan08.move("0","60","100.00%","121",null,null);

                p.staOfcbzUnusdAgreYn.set_taborder("59");
                p.staOfcbzUnusdAgreYn.set_text("공용충전기 미사용 동의여부");
                p.staOfcbzUnusdAgreYn.set_cssclass("sta_WF_Label_E");
                p.staOfcbzUnusdAgreYn.move("10","98","100%","46",null,null);

                p.chkOfcbzUnusdAgreYn.set_taborder("60");
                p.chkOfcbzUnusdAgreYn.set_fittocontents("width");
                p.chkOfcbzUnusdAgreYn.set_falsevalue("0");
                p.chkOfcbzUnusdAgreYn.set_truevalue("1");
                p.chkOfcbzUnusdAgreYn.set_value("0");
                p.chkOfcbzUnusdAgreYn.move("200.00","128","129","40",null,null);

                p.Panel00_00.set_taborder("61");
                p.Panel00_00.set_horizontalgap("10");
                p.Panel00_00.set_flexwrap("wrap");
                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.move("100","1615","100%","50",null,null);

                p.Panel01_01_00_00_01_00_00_01.set_taborder("62");
                p.Panel01_01_00_00_01_00_00_01.set_type("vertical");
                p.Panel01_01_00_00_01_00_00_01.set_flexgrow("1");
                p.Panel01_01_00_00_01_00_00_01.move("10.00","98","305","86",null,null);

                p.Pan09.set_taborder("63");
                p.Pan09.set_horizontalgap("20");
                p.Pan09.set_flexcrossaxiswrapalign("start");
                p.Pan09.set_flexwrap("wrap");
                p.Pan09.set_verticalgap("0");
                p.Pan09.set_spacing("0px 20px 10px 20px");
                p.Pan09.set_cssclass("pal_WF_DtlBg");
                p.Pan09.set_flexshrink("1");
                p.Pan09.set_fittocontents("height");
                p.Pan09.set_visible("false");
                p.Pan09.move("0","60","100.00%","97",null,null);
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
            //-- Default Layout : this.divForm.form.Div03.form.divSafeDvcKnd.form
            obj = new Layout("default","",0,0,this.divForm.form.Div03.form.divSafeDvcKnd.form,function(p){});
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("10");
            this.divForm.form.Div03.form.divSafeDvcKnd.form.addLayout(obj.name, obj);

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
                p.staVhrno.set_taborder("0");
                p.staVhrno.set_text("자동차등록번호");
                p.staVhrno.set_cssclass("sta_WF_Label");
                p.staVhrno.move("10","98","100%","46",null,null);

                p.edtVhrno.set_taborder("1");
                p.edtVhrno.move("10.00","158","100%","40",null,null);

                p.Panel01_01_01_01.set_taborder("2");
                p.Panel01_01_01_01.set_type("vertical");
                p.Panel01_01_01_01.set_flexgrow("1");
                p.Panel01_01_01_01.move("10.00","98","305","86",null,null);

                p.staCarRegYmd.set_taborder("3");
                p.staCarRegYmd.set_text("자동차등록일자");
                p.staCarRegYmd.set_cssclass("sta_WF_Label");
                p.staCarRegYmd.move("10","98","100%","46",null,null);

                p.Panel01_01_00_00_01.set_taborder("4");
                p.Panel01_01_00_00_01.set_type("vertical");
                p.Panel01_01_00_00_01.set_flexgrow("1");
                p.Panel01_01_00_00_01.move("10.00","98","305","86",null,null);

                p.Pan01.set_taborder("5");
                p.Pan01.set_horizontalgap("20");
                p.Pan01.set_flexcrossaxiswrapalign("start");
                p.Pan01.set_flexwrap("wrap");
                p.Pan01.set_verticalgap("0");
                p.Pan01.set_spacing("0px 20px 10px 20px");
                p.Pan01.set_cssclass("pal_WF_DtlBg");
                p.Pan01.set_flexshrink("1");
                p.Pan01.set_fittocontents("height");
                p.Pan01.move("0","60","100.00%","96",null,null);

                p.staVhclTwt.set_taborder("6");
                p.staVhclTwt.set_text("차량총중량(Kg)");
                p.staVhclTwt.set_cssclass("sta_WF_Label");
                p.staVhclTwt.move("10","98","100%","46",null,null);

                p.Panel01_01_01_02_00.set_taborder("7");
                p.Panel01_01_01_02_00.set_type("vertical");
                p.Panel01_01_01_02_00.set_flexgrow("1");
                p.Panel01_01_01_02_00.set_fittocontents("height");
                p.Panel01_01_01_02_00.move("10.00","98","305","86",null,null);

                p.Pan02.set_taborder("8");
                p.Pan02.set_horizontalgap("20");
                p.Pan02.set_flexcrossaxiswrapalign("start");
                p.Pan02.set_flexwrap("wrap");
                p.Pan02.set_verticalgap("0");
                p.Pan02.set_spacing("0px 20px 10px 20px");
                p.Pan02.set_cssclass("pal_WF_DtlBg");
                p.Pan02.set_flexshrink("1");
                p.Pan02.set_fittocontents("height");
                p.Pan02.move("0","60","100.00%","97",null,null);

                p.staLen.set_taborder("9");
                p.staLen.set_text("길이(mm)");
                p.staLen.set_cssclass("sta_WF_Label");
                p.staLen.move("10","98","100%","46",null,null);

                p.Panel01_01_00_00_01_00.set_taborder("10");
                p.Panel01_01_00_00_01_00.set_type("vertical");
                p.Panel01_01_00_00_01_00.set_flexgrow("1");
                p.Panel01_01_00_00_01_00.move("10.00","98","305","86",null,null);

                p.edtLen.set_taborder("11");
                p.edtLen.set_inputfilter("none");
                p.edtLen.set_inputtype("number");
                p.edtLen.move("10.00","158","100%","40",null,null);

                p.edtVhclTwt.set_taborder("12");
                p.edtVhclTwt.set_inputtype("number");
                p.edtVhclTwt.move("10.00","158","100%","40",null,null);

                p.staArea.set_taborder("13");
                p.staArea.set_text("너비(mm)");
                p.staArea.set_cssclass("sta_WF_Label");
                p.staArea.move("10","98","100%","46",null,null);

                p.edtArea.set_taborder("14");
                p.edtArea.set_inputtype("number");
                p.edtArea.move("10.00","158","100%","40",null,null);

                p.Panel01_01_00_00_01_00_00.set_taborder("15");
                p.Panel01_01_00_00_01_00_00.set_type("vertical");
                p.Panel01_01_00_00_01_00_00.set_flexgrow("1");
                p.Panel01_01_00_00_01_00_00.move("10.00","98","305","86",null,null);

                p.staMaxLdcpct.set_taborder("16");
                p.staMaxLdcpct.set_text("최대적재량(Kg)");
                p.staMaxLdcpct.set_cssclass("sta_WF_Label");
                p.staMaxLdcpct.move("10","98","100%","46",null,null);

                p.edtMaxLdcpct.set_taborder("17");
                p.edtMaxLdcpct.set_inputtype("number");
                p.edtMaxLdcpct.move("10.00","158","100%","40",null,null);

                p.Panel01_01_01_02_00_00.set_taborder("18");
                p.Panel01_01_01_02_00_00.set_type("vertical");
                p.Panel01_01_01_02_00_00.set_flexgrow("1");
                p.Panel01_01_01_02_00_00.set_fittocontents("height");
                p.Panel01_01_01_02_00_00.move("10.00","98","305","86",null,null);

                p.Pan03.set_taborder("19");
                p.Pan03.set_horizontalgap("20");
                p.Pan03.set_flexcrossaxiswrapalign("start");
                p.Pan03.set_flexwrap("wrap");
                p.Pan03.set_verticalgap("0");
                p.Pan03.set_spacing("0px 20px 10px 20px");
                p.Pan03.set_cssclass("pal_WF_DtlBg");
                p.Pan03.set_flexshrink("1");
                p.Pan03.set_fittocontents("height");
                p.Pan03.move("0","60","100.00%","97",null,null);

                p.staHgt.set_taborder("20");
                p.staHgt.set_text("높이(mm)");
                p.staHgt.set_cssclass("sta_WF_Label");
                p.staHgt.move("10","98","100%","46",null,null);

                p.edtHgt.set_taborder("21");
                p.edtHgt.set_inputtype("number");
                p.edtHgt.move("10.00","158","100%","40",null,null);

                p.Panel01_01_00_00_01_00_01.set_taborder("22");
                p.Panel01_01_00_00_01_00_01.set_type("vertical");
                p.Panel01_01_00_00_01_00_01.set_flexgrow("1");
                p.Panel01_01_00_00_01_00_01.move("10.00","98","305","86",null,null);

                p.Pan04.set_taborder("23");
                p.Pan04.set_horizontalgap("20");
                p.Pan04.set_flexcrossaxiswrapalign("start");
                p.Pan04.set_flexwrap("wrap");
                p.Pan04.set_verticalgap("0");
                p.Pan04.set_spacing("0px 20px 10px 20px");
                p.Pan04.set_cssclass("pal_WF_DtlBg");
                p.Pan04.set_flexshrink("1");
                p.Pan04.set_fittocontents("height");
                p.Pan04.move("0","60","100.00%","127",null,null);

                p.staVhclWt.set_taborder("24");
                p.staVhclWt.set_text("차량중량(Kg)");
                p.staVhclWt.set_cssclass("sta_WF_Label");
                p.staVhclWt.move("10","98","100%","46",null,null);

                p.edtVhclWt.set_taborder("25");
                p.edtVhclWt.set_readonly("true");
                p.edtVhclWt.set_minheight("40");
                p.edtVhclWt.set_maxheight("");
                p.edtVhclWt.move("10.00","158","100%","40",null,null);

                p.sta00_00.set_taborder("26");
                p.sta00_00.set_text("차량의 총중량 - 최대적재량 - (승차인원*65)를 계산한 값이 나타납니다");
                p.sta00_00.set_cssclass("sta_WF_Des");
                p.sta00_00.set_fittocontents("height");
                p.sta00_00.move("200.00","383","100%","47",null,null);

                p.Panel03_00.set_taborder("27");
                p.Panel03_00.set_type("vertical");
                p.Panel03_00.set_verticalgap("5");
                p.Panel03_00.set_fittocontents("height");
                p.Panel03_00.move("30","630","100%","74",null,null);

                p.Panel01_01_01_02_00_01.set_taborder("28");
                p.Panel01_01_01_02_00_01.set_type("vertical");
                p.Panel01_01_01_02_00_01.set_flexgrow("1");
                p.Panel01_01_01_02_00_01.set_fittocontents("height");
                p.Panel01_01_01_02_00_01.move("10.00","98","305","116",null,null);

                p.staDsplmt.set_taborder("29");
                p.staDsplmt.set_text("배기량(cc)");
                p.staDsplmt.set_cssclass("sta_WF_Label");
                p.staDsplmt.move("10","98","100%","46",null,null);

                p.edtDsplmt.set_taborder("30");
                p.edtDsplmt.set_inputtype("number");
                p.edtDsplmt.move("10.00","158","100%","40",null,null);

                p.Panel01_01_00_00_01_00_00_00.set_taborder("31");
                p.Panel01_01_00_00_01_00_00_00.set_type("vertical");
                p.Panel01_01_00_00_01_00_00_00.set_flexgrow("1");
                p.Panel01_01_00_00_01_00_00_00.move("10.00","98","305","86",null,null);

                p.Panel01_01_01_02_00_00_00.set_taborder("32");
                p.Panel01_01_01_02_00_00_00.set_type("vertical");
                p.Panel01_01_01_02_00_00_00.set_flexgrow("1");
                p.Panel01_01_01_02_00_00_00.set_fittocontents("height");
                p.Panel01_01_01_02_00_00_00.move("10.00","98","305","1",null,null);

                p.Pan05.set_taborder("33");
                p.Pan05.set_horizontalgap("20");
                p.Pan05.set_flexcrossaxiswrapalign("start");
                p.Pan05.set_flexwrap("wrap");
                p.Pan05.set_verticalgap("0");
                p.Pan05.set_spacing("0px 20px 10px 20px");
                p.Pan05.set_cssclass("pal_WF_DtlBg");
                p.Pan05.set_flexshrink("1");
                p.Pan05.set_fittocontents("height");
                p.Pan05.move("0","60","100.00%","97",null,null);

                p.staRdgNope.set_taborder("34");
                p.staRdgNope.set_text("승차인원");
                p.staRdgNope.set_cssclass("sta_WF_Label");
                p.staRdgNope.move("10","98","100%","46",null,null);

                p.edtRdgNope.set_taborder("35");
                p.edtRdgNope.set_inputtype("digit");
                p.edtRdgNope.move("10.00","158","100%","40",null,null);

                p.Panel01_01_00_00_01_00_00_00_00.set_taborder("36");
                p.Panel01_01_00_00_01_00_00_00_00.set_type("vertical");
                p.Panel01_01_00_00_01_00_00_00_00.set_flexgrow("1");
                p.Panel01_01_00_00_01_00_00_00_00.move("10.00","98","305","86",null,null);

                p.Panel01_01_01_02_00_00_00_00.set_taborder("37");
                p.Panel01_01_01_02_00_00_00_00.set_type("vertical");
                p.Panel01_01_01_02_00_00_00_00.set_flexgrow("1");
                p.Panel01_01_01_02_00_00_00_00.set_fittocontents("height");
                p.Panel01_01_01_02_00_00_00_00.move("10.00","98","305","1",null,null);

                p.Pan06.set_taborder("38");
                p.Pan06.set_horizontalgap("20");
                p.Pan06.set_flexcrossaxiswrapalign("start");
                p.Pan06.set_flexwrap("wrap");
                p.Pan06.set_verticalgap("0");
                p.Pan06.set_spacing("0px 20px 10px 20px");
                p.Pan06.set_cssclass("pal_WF_DtlBg");
                p.Pan06.set_flexshrink("1");
                p.Pan06.set_fittocontents("height");
                p.Pan06.move("0","60","100.00%","97",null,null);

                p.rdoSafeInspTrgtYn.set_taborder("42");
                p.rdoSafeInspTrgtYn.set_fittocontents("width");
                p.rdoSafeInspTrgtYn.set_innerdataset(divForm_form_Div03_form_rdoSafeInspTrgtYn_innerdataset);
                p.rdoSafeInspTrgtYn.set_codecolumn("codecolumn");
                p.rdoSafeInspTrgtYn.set_datacolumn("datacolumn");
                p.rdoSafeInspTrgtYn.set_direction("vertical");
                p.rdoSafeInspTrgtYn.set_index("-1");
                p.rdoSafeInspTrgtYn.move("50","676","100%","40",null,null);

                p.staSafeInspTrgtYn.set_taborder("41");
                p.staSafeInspTrgtYn.set_text("안전검사대상여부");
                p.staSafeInspTrgtYn.set_cssclass("sta_WF_Label_E");
                p.staSafeInspTrgtYn.move("50","631","100%","46",null,null);

                p.pan04_01.set_taborder("43");
                p.pan04_01.set_type("vertical");
                p.pan04_01.set_flexgrow("1");
                p.pan04_01.set_fittocontents("height");
                p.pan04_01.move("50","631","305","200",null,null);

                p.calCarRegYmd.set_taborder("39");
                p.calCarRegYmd.set_dateformat("yyyy-MM-dd");
                p.calCarRegYmd.move("0","0","100%","40",null,null);

                p.Pan07.set_taborder("40");
                p.Pan07.set_horizontalgap("20");
                p.Pan07.set_flexcrossaxiswrapalign("start");
                p.Pan07.set_flexwrap("wrap");
                p.Pan07.set_verticalgap("0");
                p.Pan07.set_spacing("0px 20px 10px 20px");
                p.Pan07.set_cssclass("pal_WF_DtlBg");
                p.Pan07.set_flexshrink("1");
                p.Pan07.set_fittocontents("height");
                p.Pan07.move("0","60","100.00%","211",null,null);

                p.staSafeInspTrgtCn.set_taborder("44");
                p.staSafeInspTrgtCn.set_text("안전검사 비대상 차량/장비\r\n- 자동차등록증(건설기계등록증) 발급 차량(지게차 포함)\r\n- 무동력(엔진 등 동력장치가 없음) 장비\r\n- 원동기가 장착되어 있으나, 자력으로 움직일 수 없는 장비 (GPU, APU 등)\r\n- 전동카트 및 트랙터 잔디깍이 등 자관법이 적용되지 않는 농업기계");
                p.staSafeInspTrgtCn.set_cssclass("sta_WF_Des");
                p.staSafeInspTrgtCn.set_fittocontents("height");
                p.staSafeInspTrgtCn.move("200.00","383","100%","140",null,null);

                p.Panel03_00_00.set_taborder("45");
                p.Panel03_00_00.set_type("vertical");
                p.Panel03_00_00.set_verticalgap("5");
                p.Panel03_00_00.set_fittocontents("height");
                p.Panel03_00_00.move("30","630","100%","174",null,null);

                p.staSafeDvcVhclYn.set_taborder("46");
                p.staSafeDvcVhclYn.set_text("안전장치의무부착차량여부");
                p.staSafeDvcVhclYn.set_cssclass("sta_WF_Label_E");
                p.staSafeDvcVhclYn.move("50","631","100%","46",null,null);

                p.rdoSafeDvcVhclYn.set_taborder("47");
                p.rdoSafeDvcVhclYn.set_fittocontents("width");
                p.rdoSafeDvcVhclYn.set_innerdataset(divForm_form_Div03_form_rdoSafeDvcVhclYn_innerdataset);
                p.rdoSafeDvcVhclYn.set_codecolumn("codecolumn");
                p.rdoSafeDvcVhclYn.set_datacolumn("datacolumn");
                p.rdoSafeDvcVhclYn.set_direction("vertical");
                p.rdoSafeDvcVhclYn.set_index("-1");
                p.rdoSafeDvcVhclYn.move("50","676","100%","40",null,null);

                p.staSafeDvcVhclCn.set_taborder("48");
                p.staSafeDvcVhclCn.set_text("- 항공기에 접현하는 차량 : 후방영상장치, 근접 및 후진 경고음 장치\r\n· <fc v=\'#1e4ebe\'>접현차량</fc> : ACU트럭, GPU트럭, 급수차, 급유차량, 기내식차량, 라바토리트럭, 로더, 스텝카, 컨베이어벨트카, 토잉카 등\r\n-  특수·특장 차량 : 측면, 후면 외관에 반사띠 부착\r\n- 깔림사고가 발생 위험이 있는 토잉카 : 안전발판 설치");
                p.staSafeDvcVhclCn.set_cssclass("sta_WF_Des");
                p.staSafeDvcVhclCn.set_fittocontents("height");
                p.staSafeDvcVhclCn.set_usedecorate("true");
                p.staSafeDvcVhclCn.move("200.00","383","100%","140",null,null);

                p.Panel03_00_00_00.set_taborder("49");
                p.Panel03_00_00_00.set_type("vertical");
                p.Panel03_00_00_00.set_verticalgap("5");
                p.Panel03_00_00_00.set_fittocontents("height");
                p.Panel03_00_00_00.move("30","630","100%","174",null,null);

                p.pan04_01_00.set_taborder("50");
                p.pan04_01_00.set_type("vertical");
                p.pan04_01_00.set_flexgrow("1");
                p.pan04_01_00.set_fittocontents("height");
                p.pan04_01_00.move("50","631","305","200",null,null);

                p.staInspInst.set_taborder("51");
                p.staInspInst.set_text("검사기관");
                p.staInspInst.set_cssclass("sta_WF_Label");
                p.staInspInst.move("10","98","100%","46",null,null);

                p.cboInspInst.set_taborder("52");
                p.cboInspInst.set_innerdataset("dsInspInst");
                p.cboInspInst.set_codecolumn("cdId");
                p.cboInspInst.set_datacolumn("cdNm");
                p.cboInspInst.set_displaynulltext("선택");
                p.cboInspInst.set_text("");
                p.cboInspInst.set_index("-1");
                p.cboInspInst.move("200.00","128","100%","40",null,null);

                p.Panel01_01_01_00.set_taborder("53");
                p.Panel01_01_01_00.set_type("vertical");
                p.Panel01_01_01_00.set_flexgrow("1");
                p.Panel01_01_01_00.move("10.00","98","305","86",null,null);

                p.staNewInspYmd.set_taborder("54");
                p.staNewInspYmd.set_text("신규검사일자");
                p.staNewInspYmd.set_cssclass("sta_WF_Label");
                p.staNewInspYmd.move("10","98","100%","46",null,null);

                p.Panel01_01_00_00_00.set_taborder("55");
                p.Panel01_01_00_00_00.set_type("vertical");
                p.Panel01_01_00_00_00.set_flexgrow("1");
                p.Panel01_01_00_00_00.move("10.00","98","305","86",null,null);

                p.Pan08.set_taborder("56");
                p.Pan08.set_horizontalgap("20");
                p.Pan08.set_flexcrossaxiswrapalign("start");
                p.Pan08.set_flexwrap("wrap");
                p.Pan08.set_verticalgap("0");
                p.Pan08.set_spacing("0px 20px 10px 20px");
                p.Pan08.set_cssclass("pal_WF_DtlBg");
                p.Pan08.set_flexshrink("1");
                p.Pan08.set_fittocontents("height");
                p.Pan08.set_visible("false");
                p.Pan08.move("0","60","100.00%","96",null,null);

                p.calNewInspYmd.set_taborder("57");
                p.calNewInspYmd.set_dateformat("yyyy-MM-dd");
                p.calNewInspYmd.move("0","0","100%","40",null,null);

                p.staCarRegctf.set_taborder("58");
                p.staCarRegctf.set_text("자동차등록증");
                p.staCarRegctf.set_cssclass("sta_WF_Label");
                p.staCarRegctf.set_flexgrow("1");
                p.staCarRegctf.move("0","44","305","46",null,null);

                p.btnCarRegctfSample.set_taborder("59");
                p.btnCarRegctfSample.set_text("샘플첨부파일명");
                p.btnCarRegctfSample.set_cssclass("btn_WF_Small");
                p.btnCarRegctfSample.set_fittocontents("width");
                p.btnCarRegctfSample.move("813","76","120","40",null,null);

                p.btnCarRegctfFile.set_taborder("60");
                p.btnCarRegctfFile.set_text("파일선택");
                p.btnCarRegctfFile.set_cssclass("btn_WF_FileUp");
                p.btnCarRegctfFile.getSetter("upcolid").set("carRegctfFile");
                p.btnCarRegctfFile.move("124","58","116","40",null,null);

                p.panBtnFile00.set_taborder("61");
                p.panBtnFile00.set_flexgrow("1");
                p.panBtnFile00.set_flexcrossaxisalign("start");
                p.panBtnFile00.set_flexmainaxisalign("end");
                p.panBtnFile00.set_horizontalgap("10");
                p.panBtnFile00.move("433","58","305","46",null,null);

                p.panTitle00.set_taborder("62");
                p.panTitle00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00.set_flexwrap("wrap");
                p.panTitle00.set_fittocontents("height");
                p.panTitle00.move("0","124","100%","46",null,null);

                p.grdCarRegctf.set_taborder("63");
                p.grdCarRegctf.set_binddataset("dsFile");
                p.grdCarRegctf.set_autofittype("col");
                p.grdCarRegctf.set_cssclass("grd_WF_FileAdd");
                p.grdCarRegctf.set_scrollbartype("none none");
                p.grdCarRegctf.set_minheight("40");
                p.grdCarRegctf.set_maxheight("");
                p.grdCarRegctf.move("20.00","114","100%","40",null,null);

                p.staCarRegctfCn.set_taborder("64");
                p.staCarRegctfCn.set_text("자동차관리법 또는 건설기계관리법에 의한 등록증 또는 소유권 및 제원을 증명할 수 있는 서류\r\n1. 회사로고 및 회사명이 표시된 차량, 장비의 실제 전면 및 측면 사진 : <l v=\'atfl/이동지역안전지침 별표2.jpg\" download=\"이동지역안전지침 별표2.jpg\'><u v=\'true\'><fc v=\'#1e4ebe\'>(표시 방법은 ‘이동지역안전지침’ 별표2 참고)</fc></u></l>\r\n2. 차량의 높이 표시 양식 : <l v=\'atfl/높이 표시 이미지.png\" download=\"높이 표시 이미지.png\'><u v=\'true\'><fc v=\'#1e4ebe\'>(높이 2.5m 이상인 경우만 다운로드)</fc></u></l>");
                p.staCarRegctfCn.set_cssclass("sta_WF_Des");
                p.staCarRegctfCn.set_fittocontents("height");
                p.staCarRegctfCn.set_usedecorate("true");
                p.staCarRegctfCn.move("20","20","100%","64",null,null);

                p.Panel01_00.set_taborder("65");
                p.Panel01_00.set_type("vertical");
                p.Panel01_00.set_verticalgap("10");
                p.Panel01_00.move("192","1038","100.00%","130",null,null);

                p.panFile01.set_taborder("66");
                p.panFile01.set_fittocontents("height");
                p.panFile01.set_spacing("10px 20px 10px 20px");
                p.panFile01.set_flexwrap("wrap");
                p.panFile01.set_cssclass("pal_WF_DtlBg");
                p.panFile01.set_verticalgap("4");
                p.panFile01.move("0","42","100.00%","201",null,null);

                p.staCarFrtsdPhoto.set_taborder("67");
                p.staCarFrtsdPhoto.set_text("차량/장비 사진(정면)");
                p.staCarFrtsdPhoto.set_cssclass("sta_WF_Label");
                p.staCarFrtsdPhoto.set_flexgrow("1");
                p.staCarFrtsdPhoto.move("0","44","305","46",null,null);

                p.btnCarFrtsdPhotoSample.set_taborder("68");
                p.btnCarFrtsdPhotoSample.set_text("샘플첨부파일명");
                p.btnCarFrtsdPhotoSample.set_cssclass("btn_WF_Small");
                p.btnCarFrtsdPhotoSample.set_fittocontents("width");
                p.btnCarFrtsdPhotoSample.move("813","76","120","40",null,null);

                p.btnCarFrtsdPhotoFile.set_taborder("69");
                p.btnCarFrtsdPhotoFile.set_text("파일선택");
                p.btnCarFrtsdPhotoFile.set_cssclass("btn_WF_FileUp");
                p.btnCarFrtsdPhotoFile.getSetter("upcolid").set("carFrtsdPhotoFile");
                p.btnCarFrtsdPhotoFile.move("124","58","116","40",null,null);

                p.panBtnFile00_00.set_taborder("70");
                p.panBtnFile00_00.set_flexgrow("1");
                p.panBtnFile00_00.set_flexcrossaxisalign("start");
                p.panBtnFile00_00.set_flexmainaxisalign("end");
                p.panBtnFile00_00.set_horizontalgap("10");
                p.panBtnFile00_00.move("433","58","305","46",null,null);

                p.panTitle00_00.set_taborder("71");
                p.panTitle00_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00.set_flexwrap("wrap");
                p.panTitle00_00.set_fittocontents("height");
                p.panTitle00_00.move("0","124","100%","46",null,null);

                p.grdCarFrtsdPhoto.set_taborder("72");
                p.grdCarFrtsdPhoto.set_binddataset("dsFile");
                p.grdCarFrtsdPhoto.set_autofittype("col");
                p.grdCarFrtsdPhoto.set_cssclass("grd_WF_FileAdd");
                p.grdCarFrtsdPhoto.set_scrollbartype("none none");
                p.grdCarFrtsdPhoto.move("20.00","114","100%","40",null,null);

                p.staCarFrtsdPhotoCn.set_taborder("73");
                p.staCarFrtsdPhotoCn.set_text("JPG,JPEG,GIF,PNG,BMP만 첨부가능");
                p.staCarFrtsdPhotoCn.set_cssclass("sta_WF_Des");
                p.staCarFrtsdPhotoCn.set_fittocontents("height");
                p.staCarFrtsdPhotoCn.set_usedecorate("false");
                p.staCarFrtsdPhotoCn.move("20","20","100%","30",null,null);

                p.Panel01_00_00.set_taborder("74");
                p.Panel01_00_00.set_type("vertical");
                p.Panel01_00_00.set_verticalgap("10");
                p.Panel01_00_00.move("192","1038","100%","80",null,null);

                p.panFile02.set_taborder("75");
                p.panFile02.set_fittocontents("height");
                p.panFile02.set_spacing("10px 20px 10px 20px");
                p.panFile02.set_flexwrap("wrap");
                p.panFile02.set_cssclass("pal_WF_DtlBg");
                p.panFile02.set_verticalgap("4");
                p.panFile02.move("0","42","100.00%","151",null,null);

                p.staCarFlkPhoto.set_taborder("76");
                p.staCarFlkPhoto.set_text("차량/장비 사진(측면)");
                p.staCarFlkPhoto.set_cssclass("sta_WF_Label");
                p.staCarFlkPhoto.set_flexgrow("1");
                p.staCarFlkPhoto.move("0","44","305","46",null,null);

                p.btnCarFlkPhotoSample.set_taborder("77");
                p.btnCarFlkPhotoSample.set_text("샘플첨부파일명");
                p.btnCarFlkPhotoSample.set_cssclass("btn_WF_Small");
                p.btnCarFlkPhotoSample.set_fittocontents("width");
                p.btnCarFlkPhotoSample.move("813","76","120","40",null,null);

                p.btnCarFlkPhotoFile.set_taborder("78");
                p.btnCarFlkPhotoFile.set_text("파일선택");
                p.btnCarFlkPhotoFile.set_cssclass("btn_WF_FileUp");
                p.btnCarFlkPhotoFile.getSetter("upcolid").set("carFlkPhotoFile");
                p.btnCarFlkPhotoFile.move("124","58","116","40",null,null);

                p.panBtnFile00_00_01.set_taborder("79");
                p.panBtnFile00_00_01.set_flexgrow("1");
                p.panBtnFile00_00_01.set_flexcrossaxisalign("start");
                p.panBtnFile00_00_01.set_flexmainaxisalign("end");
                p.panBtnFile00_00_01.set_horizontalgap("10");
                p.panBtnFile00_00_01.move("433","58","305","46",null,null);

                p.panTitle00_00_01.set_taborder("80");
                p.panTitle00_00_01.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00_01.set_flexwrap("wrap");
                p.panTitle00_00_01.set_fittocontents("height");
                p.panTitle00_00_01.move("0","124","100%","46",null,null);

                p.grdCarFlkPhoto.set_taborder("81");
                p.grdCarFlkPhoto.set_binddataset("dsFile");
                p.grdCarFlkPhoto.set_autofittype("col");
                p.grdCarFlkPhoto.set_cssclass("grd_WF_FileAdd");
                p.grdCarFlkPhoto.set_scrollbartype("none none");
                p.grdCarFlkPhoto.move("20.00","114","100%","40",null,null);

                p.staCarFlkPhotoCn.set_taborder("82");
                p.staCarFlkPhotoCn.set_text("JPG,JPEG,GIF,PNG,BMP만 첨부가능");
                p.staCarFlkPhotoCn.set_cssclass("sta_WF_Des");
                p.staCarFlkPhotoCn.set_fittocontents("height");
                p.staCarFlkPhotoCn.set_usedecorate("false");
                p.staCarFlkPhotoCn.move("20","20","100%","30",null,null);

                p.Panel01_00_00_01.set_taborder("83");
                p.Panel01_00_00_01.set_type("vertical");
                p.Panel01_00_00_01.set_verticalgap("10");
                p.Panel01_00_00_01.move("192","1038","100%","80",null,null);

                p.panFile04.set_taborder("84");
                p.panFile04.set_fittocontents("height");
                p.panFile04.set_spacing("10px 20px 10px 20px");
                p.panFile04.set_flexwrap("wrap");
                p.panFile04.set_cssclass("pal_WF_DtlBg");
                p.panFile04.set_verticalgap("4");
                p.panFile04.move("0","42","100.00%","151",null,null);

                p.staSafeDvcKnd.set_taborder("85");
                p.staSafeDvcKnd.set_text("안전장치 종류");
                p.staSafeDvcKnd.set_cssclass("sta_WF_Label_E");
                p.staSafeDvcKnd.move("10","98","100%","46",null,null);

                p.divSafeDvcKnd.set_taborder("86");
                p.divSafeDvcKnd.set_text("Div00");
                p.divSafeDvcKnd.set_fittocontents("height");
                p.divSafeDvcKnd.move("-70","1328","100%","100",null,null);

                p.Panel01_01_00_00_01_00_00_01.set_taborder("87");
                p.Panel01_01_00_00_01_00_00_01.set_type("vertical");
                p.Panel01_01_00_00_01_00_00_01.set_flexgrow("1");
                p.Panel01_01_00_00_01_00_00_01.set_fittocontents("height");
                p.Panel01_01_00_00_01_00_00_01.move("10.00","98","305","86",null,null);

                p.Pan09.set_taborder("88");
                p.Pan09.set_horizontalgap("20");
                p.Pan09.set_flexcrossaxiswrapalign("start");
                p.Pan09.set_flexwrap("wrap");
                p.Pan09.set_verticalgap("0");
                p.Pan09.set_spacing("0px 20px 10px 20px");
                p.Pan09.set_cssclass("pal_WF_DtlBg");
                p.Pan09.set_flexshrink("1");
                p.Pan09.set_fittocontents("height");
                p.Pan09.set_visible("false");
                p.Pan09.move("0","60","100.00%","97",null,null);

                p.staSafeDvcEtcKndNm.set_taborder("89");
                p.staSafeDvcEtcKndNm.set_text("안전장치 기타 종류");
                p.staSafeDvcEtcKndNm.set_cssclass("sta_WF_Label");
                p.staSafeDvcEtcKndNm.move("10","98","100%","46",null,null);

                p.edtSafeDvcEtcKndNm.set_taborder("90");
                p.edtSafeDvcEtcKndNm.move("10.00","158","100%","40",null,null);

                p.Panel01_01_00_00_01_00_00_00_01.set_taborder("91");
                p.Panel01_01_00_00_01_00_00_00_01.set_type("vertical");
                p.Panel01_01_00_00_01_00_00_00_01.set_flexgrow("1");
                p.Panel01_01_00_00_01_00_00_00_01.move("10.00","98","305","86",null,null);

                p.Pan11.set_taborder("92");
                p.Pan11.set_horizontalgap("20");
                p.Pan11.set_flexcrossaxiswrapalign("start");
                p.Pan11.set_flexwrap("wrap");
                p.Pan11.set_verticalgap("0");
                p.Pan11.set_spacing("0px 20px 10px 20px");
                p.Pan11.set_cssclass("pal_WF_DtlBg");
                p.Pan11.set_flexshrink("1");
                p.Pan11.set_fittocontents("height");
                p.Pan11.set_visible("false");
                p.Pan11.move("0","60","100.00%","97",null,null);

                p.staSafeDvcPhoto.set_taborder("93");
                p.staSafeDvcPhoto.set_text("안전장치 사진");
                p.staSafeDvcPhoto.set_cssclass("sta_WF_Label");
                p.staSafeDvcPhoto.set_flexgrow("1");
                p.staSafeDvcPhoto.move("0","44","305","46",null,null);

                p.btnSafeDvcPhotoSample.set_taborder("94");
                p.btnSafeDvcPhotoSample.set_text("샘플첨부파일명");
                p.btnSafeDvcPhotoSample.set_cssclass("btn_WF_Small");
                p.btnSafeDvcPhotoSample.set_fittocontents("width");
                p.btnSafeDvcPhotoSample.move("813","76","120","40",null,null);

                p.btnSafeDvcPhotoFile.set_taborder("95");
                p.btnSafeDvcPhotoFile.set_text("파일선택");
                p.btnSafeDvcPhotoFile.set_cssclass("btn_WF_FileUp");
                p.btnSafeDvcPhotoFile.getSetter("upcolid").set("safeDvcPhotoFile");
                p.btnSafeDvcPhotoFile.move("124","58","116","40",null,null);

                p.panBtnFile00_00_00.set_taborder("96");
                p.panBtnFile00_00_00.set_flexgrow("1");
                p.panBtnFile00_00_00.set_flexcrossaxisalign("start");
                p.panBtnFile00_00_00.set_flexmainaxisalign("end");
                p.panBtnFile00_00_00.set_horizontalgap("10");
                p.panBtnFile00_00_00.move("433","58","305","46",null,null);

                p.panTitle00_00_00.set_taborder("97");
                p.panTitle00_00_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00_00.set_flexwrap("wrap");
                p.panTitle00_00_00.set_fittocontents("height");
                p.panTitle00_00_00.move("0","124","100%","46",null,null);

                p.grdSafeDvcPhoto.set_taborder("98");
                p.grdSafeDvcPhoto.set_binddataset("dsFile");
                p.grdSafeDvcPhoto.set_autofittype("col");
                p.grdSafeDvcPhoto.set_cssclass("grd_WF_FileAdd");
                p.grdSafeDvcPhoto.set_scrollbartype("none none");
                p.grdSafeDvcPhoto.move("20.00","114","100%","40",null,null);

                p.staSafeDvcPhotoCn.set_taborder("99");
                p.staSafeDvcPhotoCn.set_text("JPG,JPEG,GIF,PNG,BMP만 첨부가능");
                p.staSafeDvcPhotoCn.set_cssclass("sta_WF_Des");
                p.staSafeDvcPhotoCn.set_fittocontents("height");
                p.staSafeDvcPhotoCn.set_usedecorate("false");
                p.staSafeDvcPhotoCn.move("20","20","100%","30",null,null);

                p.Panel01_00_00_00.set_taborder("100");
                p.Panel01_00_00_00.set_type("vertical");
                p.Panel01_00_00_00.set_verticalgap("10");
                p.Panel01_00_00_00.move("192","1038","100%","80",null,null);

                p.panFile03.set_taborder("101");
                p.panFile03.set_fittocontents("height");
                p.panFile03.set_spacing("10px 20px 10px 20px");
                p.panFile03.set_flexwrap("wrap");
                p.panFile03.set_cssclass("pal_WF_DtlBg");
                p.panFile03.set_verticalgap("4");
                p.panFile03.set_visible("false");
                p.panFile03.move("0","42","100.00%","151",null,null);

                p.staNewInspRcdsht.set_taborder("102");
                p.staNewInspRcdsht.set_text("신규검사기록표");
                p.staNewInspRcdsht.set_cssclass("sta_WF_Label");
                p.staNewInspRcdsht.set_flexgrow("1");
                p.staNewInspRcdsht.move("0","44","305","46",null,null);

                p.btnNewInspRcdshtSample.set_taborder("103");
                p.btnNewInspRcdshtSample.set_text("샘플첨부파일명");
                p.btnNewInspRcdshtSample.set_cssclass("btn_WF_Small");
                p.btnNewInspRcdshtSample.set_fittocontents("width");
                p.btnNewInspRcdshtSample.move("813","76","120","40",null,null);

                p.btnNewInspRcdshtFile.set_taborder("104");
                p.btnNewInspRcdshtFile.set_text("파일선택");
                p.btnNewInspRcdshtFile.set_cssclass("btn_WF_FileUp");
                p.btnNewInspRcdshtFile.getSetter("upcolid").set("newInspRcdshtFile");
                p.btnNewInspRcdshtFile.move("124","58","116","40",null,null);

                p.panBtnFile00_00_02.set_taborder("105");
                p.panBtnFile00_00_02.set_flexgrow("1");
                p.panBtnFile00_00_02.set_flexcrossaxisalign("start");
                p.panBtnFile00_00_02.set_flexmainaxisalign("end");
                p.panBtnFile00_00_02.set_horizontalgap("10");
                p.panBtnFile00_00_02.move("433","58","305","46",null,null);

                p.panTitle00_00_02.set_taborder("106");
                p.panTitle00_00_02.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00_02.set_flexwrap("wrap");
                p.panTitle00_00_02.set_fittocontents("height");
                p.panTitle00_00_02.move("0","124","100%","46",null,null);

                p.grdNewInspRcdsht.set_taborder("107");
                p.grdNewInspRcdsht.set_binddataset("dsFile");
                p.grdNewInspRcdsht.set_autofittype("col");
                p.grdNewInspRcdsht.set_cssclass("grd_WF_FileAdd");
                p.grdNewInspRcdsht.set_scrollbartype("none none");
                p.grdNewInspRcdsht.move("20.00","114","100%","40",null,null);

                p.staNewInspRcdshtCn.set_taborder("108");
                p.staNewInspRcdshtCn.set_text("안전검사 대상이 아닌 차량은 제출 불필요\r\n*신규검사기록표는 이동지역 내 안전검사장에서 검사 후 발급\r\n - 한국공항 검사장 : 032-742-2470\r\n - 아시아나에어포트 검사장 : 032-744-5055");
                p.staNewInspRcdshtCn.set_cssclass("sta_WF_Des");
                p.staNewInspRcdshtCn.set_fittocontents("height");
                p.staNewInspRcdshtCn.set_usedecorate("false");
                p.staNewInspRcdshtCn.move("20","20","100%","81",null,null);

                p.Panel01_00_00_02.set_taborder("109");
                p.Panel01_00_00_02.set_type("vertical");
                p.Panel01_00_00_02.set_verticalgap("10");
                p.Panel01_00_00_02.move("192","1038","100%","131",null,null);

                p.panFile05.set_taborder("110");
                p.panFile05.set_fittocontents("height");
                p.panFile05.set_spacing("10px 20px 10px 20px");
                p.panFile05.set_flexwrap("wrap");
                p.panFile05.set_cssclass("pal_WF_DtlBg");
                p.panFile05.set_verticalgap("4");
                p.panFile05.move("0","42","100.00%","202",null,null);

                p.staLsct.set_taborder("111");
                p.staLsct.set_text("임대차계약서");
                p.staLsct.set_cssclass("sta_WF_Label");
                p.staLsct.set_flexgrow("1");
                p.staLsct.move("0","44","305","46",null,null);

                p.btnLsctSample.set_taborder("112");
                p.btnLsctSample.set_text("샘플첨부파일명");
                p.btnLsctSample.set_cssclass("btn_WF_Small");
                p.btnLsctSample.set_fittocontents("width");
                p.btnLsctSample.move("813","76","120","40",null,null);

                p.btnLsctFile.set_taborder("113");
                p.btnLsctFile.set_text("파일선택");
                p.btnLsctFile.set_cssclass("btn_WF_FileUp");
                p.btnLsctFile.getSetter("upcolid").set("lsctFile");
                p.btnLsctFile.move("124","58","116","40",null,null);

                p.panBtnFile00_00_03.set_taborder("114");
                p.panBtnFile00_00_03.set_flexgrow("1");
                p.panBtnFile00_00_03.set_flexcrossaxisalign("start");
                p.panBtnFile00_00_03.set_flexmainaxisalign("end");
                p.panBtnFile00_00_03.set_horizontalgap("10");
                p.panBtnFile00_00_03.move("433","58","305","46",null,null);

                p.panTitle00_00_03.set_taborder("115");
                p.panTitle00_00_03.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00_03.set_flexwrap("wrap");
                p.panTitle00_00_03.set_fittocontents("height");
                p.panTitle00_00_03.move("0","124","100%","46",null,null);

                p.grdLsct.set_taborder("116");
                p.grdLsct.set_binddataset("dsFile");
                p.grdLsct.set_autofittype("col");
                p.grdLsct.set_cssclass("grd_WF_FileAdd");
                p.grdLsct.set_scrollbartype("none none");
                p.grdLsct.move("20.00","114","100%","40",null,null);

                p.staLsctCn.set_taborder("117");
                p.staLsctCn.set_text("렌터카일 경우 임차인을 증명할 수 있는 임대차계약서 사본 1부.");
                p.staLsctCn.set_cssclass("sta_WF_Des");
                p.staLsctCn.set_fittocontents("height");
                p.staLsctCn.set_usedecorate("false");
                p.staLsctCn.move("20","20","100%","30",null,null);

                p.Panel01_00_00_03.set_taborder("118");
                p.Panel01_00_00_03.set_type("vertical");
                p.Panel01_00_00_03.set_verticalgap("10");
                p.Panel01_00_00_03.move("192","1038","100%","80",null,null);

                p.panFile06.set_taborder("119");
                p.panFile06.set_fittocontents("height");
                p.panFile06.set_spacing("10px 20px 10px 20px");
                p.panFile06.set_flexwrap("wrap");
                p.panFile06.set_cssclass("pal_WF_DtlBg");
                p.panFile06.set_verticalgap("4");
                p.panFile06.move("0","42","100.00%","151",null,null);

                p.staCnvyMttr.set_taborder("120");
                p.staCnvyMttr.set_text("전달사항");
                p.staCnvyMttr.set_cssclass("sta_WF_Label");
                p.staCnvyMttr.move("10","98","100%","46",null,null);

                p.txtCnvyMttr.set_taborder("121");
                p.txtCnvyMttr.move("200.00","728","100%","150",null,null);

                p.Panel01.set_taborder("122");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.move("356","507","100%","150",null,null);

                p.Panel01_01_01.set_taborder("123");
                p.Panel01_01_01.set_type("vertical");
                p.Panel01_01_01.set_flexgrow("1");
                p.Panel01_01_01.move("10.00","98","305","196",null,null);

                p.Pan10.set_taborder("124");
                p.Pan10.set_horizontalgap("20");
                p.Pan10.set_flexcrossaxiswrapalign("start");
                p.Pan10.set_flexwrap("wrap");
                p.Pan10.set_verticalgap("0");
                p.Pan10.set_spacing("0px 20px 10px 20px");
                p.Pan10.set_cssclass("pal_WF_DtlBg");
                p.Pan10.set_flexshrink("1");
                p.Pan10.set_fittocontents("height");
                p.Pan10.move("0","60","100.00%","207",null,null);

                p.divGrd00.set_taborder("125");
                p.divGrd00.set_text("Div01");
                p.divGrd00.set_fittocontents("height");
                p.divGrd00.set_formscrollbartype("none none");
                p.divGrd00.set_formscrolltype("none");
                p.divGrd00.move("0","30","100%","187",null,null);

                p.Pal03.set_taborder("126");
                p.Pal03.set_horizontalgap("20");
                p.Pal03.set_flexcrossaxiswrapalign("start");
                p.Pal03.set_flexwrap("wrap");
                p.Pal03.set_fittocontents("height");
                p.Pal03.set_verticalgap("0");
                p.Pal03.set_spacing("10px 20px 10px 20px");
                p.Pal03.set_cssclass("pal_WF_DtlBg");
                p.Pal03.set_type("horizontal");
                p.Pal03.move("0","60","100.00%","208",null,null);
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
                p.staCnvyMttr.set_taborder("0");
                p.staCnvyMttr.set_text("전달사항");
                p.staCnvyMttr.set_cssclass("sta_WF_Label");
                p.staCnvyMttr.move("10","98","100%","46",null,null);

                p.Panel01_01_01.set_taborder("1");
                p.Panel01_01_01.set_type("vertical");
                p.Panel01_01_01.set_flexgrow("1");
                p.Panel01_01_01.move("10.00","98","305","196",null,null);

                p.Pan01.set_taborder("2");
                p.Pan01.set_horizontalgap("20");
                p.Pan01.set_flexcrossaxiswrapalign("start");
                p.Pan01.set_flexwrap("wrap");
                p.Pan01.set_verticalgap("0");
                p.Pan01.set_spacing("0px 20px 10px 20px");
                p.Pan01.set_cssclass("pal_WF_DtlBg");
                p.Pan01.set_flexshrink("1");
                p.Pan01.set_fittocontents("height");
                p.Pan01.set_visible("false");
                p.Pan01.move("0","60","100.00%","207",null,null);

                p.staAprvYmd.set_taborder("3");
                p.staAprvYmd.set_text("승인일자");
                p.staAprvYmd.set_cssclass("sta_WF_Label");
                p.staAprvYmd.move("10","98","100%","46",null,null);

                p.Panel01_01_01_01.set_taborder("4");
                p.Panel01_01_01_01.set_type("vertical");
                p.Panel01_01_01_01.set_flexgrow("1");
                p.Panel01_01_01_01.move("10.00","98","305","86",null,null);

                p.staErsrYmd.set_taborder("5");
                p.staErsrYmd.set_text("말소일자");
                p.staErsrYmd.set_cssclass("sta_WF_Label");
                p.staErsrYmd.move("10","98","100%","46",null,null);

                p.Panel01_01_00_00_01.set_taborder("6");
                p.Panel01_01_00_00_01.set_type("vertical");
                p.Panel01_01_00_00_01.set_flexgrow("1");
                p.Panel01_01_00_00_01.move("10.00","98","305","86",null,null);

                p.Pan02.set_taborder("7");
                p.Pan02.set_horizontalgap("20");
                p.Pan02.set_flexcrossaxiswrapalign("start");
                p.Pan02.set_flexwrap("wrap");
                p.Pan02.set_verticalgap("0");
                p.Pan02.set_spacing("0px 20px 10px 20px");
                p.Pan02.set_cssclass("pal_WF_DtlBg");
                p.Pan02.set_flexshrink("1");
                p.Pan02.set_fittocontents("height");
                p.Pan02.set_visible("true");
                p.Pan02.move("0","60","100.00%","96",null,null);

                p.calErsrYmd.set_taborder("17");
                p.calErsrYmd.set_dateformat("yyyy-MM-dd");
                p.calErsrYmd.move("524","242","100%","40",null,null);

                p.Panel01.set_taborder("8");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.move("356","507","100%","150",null,null);

                p.txtCnvyMttr.set_taborder("9");
                p.txtCnvyMttr.move("200.00","728","100%","150",null,null);

                p.staBilgYn.set_taborder("10");
                p.staBilgYn.set_text("과금여부");
                p.staBilgYn.set_cssclass("sta_WF_Label");
                p.staBilgYn.move("50","631","100%","46",null,null);

                p.rdoBilgYn.set_taborder("11");
                p.rdoBilgYn.set_fittocontents("width");
                p.rdoBilgYn.set_codecolumn("codecolumn");
                p.rdoBilgYn.set_datacolumn("datacolumn");
                p.rdoBilgYn.set_direction("vertical");
                p.rdoBilgYn.set_innerdataset(divForm_form_Div04_form_rdoBilgYn_innerdataset);
                p.rdoBilgYn.set_index("-1");
                p.rdoBilgYn.move("50","676","100%","40",null,null);

                p.Panel03_00_00.set_taborder("12");
                p.Panel03_00_00.set_type("vertical");
                p.Panel03_00_00.set_verticalgap("5");
                p.Panel03_00_00.set_fittocontents("height");
                p.Panel03_00_00.move("30","630","100%","40",null,null);

                p.pan04_01.set_taborder("13");
                p.pan04_01.set_type("vertical");
                p.pan04_01.set_flexgrow("1");
                p.pan04_01.set_fittocontents("height");
                p.pan04_01.move("50","631","305","86",null,null);

                p.pan04_01_00.set_taborder("14");
                p.pan04_01_00.set_type("vertical");
                p.pan04_01_00.set_flexgrow("1");
                p.pan04_01_00.set_fittocontents("height");
                p.pan04_01_00.move("50","631","305","1",null,null);

                p.Pan03.set_taborder("15");
                p.Pan03.set_horizontalgap("20");
                p.Pan03.set_flexcrossaxiswrapalign("start");
                p.Pan03.set_flexwrap("wrap");
                p.Pan03.set_verticalgap("0");
                p.Pan03.set_spacing("0px 20px 10px 20px");
                p.Pan03.set_cssclass("pal_WF_DtlBg");
                p.Pan03.set_flexshrink("1");
                p.Pan03.set_fittocontents("height");
                p.Pan03.set_visible("true");
                p.Pan03.move("0","60","100.00%","97",null,null);

                p.calAprvYmd.set_taborder("16");
                p.calAprvYmd.set_dateformat("yyyy-MM-dd");
                p.calAprvYmd.move("0","0","100%","40",null,null);
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
                p.sub_tit00.set_taborder("9");
                p.sub_tit00.set_background("#ffffff");
                p.sub_tit00.set_flexcrossaxisalign("end");
                p.sub_tit00.move("1536","1038","100%","57",null,null);

                p.Panel01_02_03.set_taborder("25");
                p.Panel01_02_03.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_03.set_spacing("0px 10px");
                p.Panel01_02_03.set_horizontalgap("10");
                p.Panel01_02_03.set_flexcrossaxisalign("center");
                p.Panel01_02_03.set_flexmainaxisalign("end");
                p.Panel01_02_03.move("508","0","51.39%","50",null,null);

                p.btnMinTitle.set_taborder("24");
                p.btnMinTitle.set_cssclass("btn_WF_ACMinus");
                p.btnMinTitle.move("1204","8","34","34",null,null);

                p.staSubTitle02_00_03.set_taborder("26");
                p.staSubTitle02_00_03.set_text("서비스 흐름 및 작업방법 안내(타이틀미정)");
                p.staSubTitle02_00_03.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_03.move("-8","0","51.39%","50",null,null);

                p.divInfoGuide.set_taborder("2");
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

                p.sub_tit01.set_taborder("6");
                p.sub_tit01.set_background("#ffffff");
                p.sub_tit01.set_flexcrossaxisalign("end");
                p.sub_tit01.move("1630","674","100%","66",null,null);

                p.Div01.set_taborder("1");
                p.Div01.set_text("Div00");
                p.Div01.set_cssclass("div_WF_Bg");
                p.Div01.set_fittocontents("height");
                p.Div01.set_visible("false");
                p.Div01.move("0","0","100%","511",null,null);

                p.staSubTitle02.set_taborder("18");
                p.staSubTitle02.set_text("신청 정보");
                p.staSubTitle02.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02.move("1630.00","690","50%","50",null,null);

                p.Panel01_02_00_00_00.set_taborder("19");
                p.Panel01_02_00_00_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_00_00_00.set_spacing("0px 10px");
                p.Panel01_02_00_00_00.set_horizontalgap("10");
                p.Panel01_02_00_00_00.set_flexcrossaxisalign("center");
                p.Panel01_02_00_00_00.set_flexmainaxisalign("end");
                p.Panel01_02_00_00_00.move("2340.00","690","50%","50",null,null);

                p.sub_tit02.set_taborder("20");
                p.sub_tit02.set_background("#ffffff");
                p.sub_tit02.set_flexcrossaxisalign("end");
                p.sub_tit02.move("1630","674","100%","66",null,null);

                p.btnMinAplyInfo.set_taborder("21");
                p.btnMinAplyInfo.set_cssclass("btn_WF_ACMinus");
                p.btnMinAplyInfo.move("2890.00","692","34","34",null,null);

                p.btnHstry.set_taborder("22");
                p.btnHstry.set_text("제원불러오기");
                p.btnHstry.set_fittocontents("width");
                p.btnHstry.move("860","896","120","40",null,null);

                p.staSubTitle01.set_taborder("3");
                p.staSubTitle01.set_text("신청자정보");
                p.staSubTitle01.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle01.move("1630.00","690","50%","50",null,null);

                p.btnMinAplcntInfo.set_taborder("4");
                p.btnMinAplcntInfo.set_cssclass("btn_WF_ACMinus");
                p.btnMinAplcntInfo.move("2890.00","692","34","34",null,null);

                p.Panel01_02.set_taborder("5");
                p.Panel01_02.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02.set_spacing("0px 10px");
                p.Panel01_02.set_horizontalgap("10");
                p.Panel01_02.set_flexcrossaxisalign("center");
                p.Panel01_02.set_flexmainaxisalign("end");
                p.Panel01_02.move("2340.00","690","50%","50",null,null);

                p.Div02.set_taborder("7");
                p.Div02.set_text("Div00");
                p.Div02.set_cssclass("div_WF_Bg");
                p.Div02.set_fittocontents("height");
                p.Div02.set_visible("false");
                p.Div02.move("0","0","100%","998",null,null);

                p.staSubTitle03.set_taborder("8");
                p.staSubTitle03.set_text("제원");
                p.staSubTitle03.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle03.move("1630.00","690","50%","50",null,null);

                p.btnMinSpfa.set_taborder("9");
                p.btnMinSpfa.set_cssclass("btn_WF_ACMinus");
                p.btnMinSpfa.move("2890.00","692","34","34",null,null);

                p.Panel01_02_00_00.set_taborder("10");
                p.Panel01_02_00_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_00_00.set_spacing("0px 10px");
                p.Panel01_02_00_00.set_horizontalgap("10");
                p.Panel01_02_00_00.set_flexcrossaxisalign("center");
                p.Panel01_02_00_00.set_flexmainaxisalign("end");
                p.Panel01_02_00_00.move("2340.00","690","50%","50",null,null);

                p.sub_tit03.set_taborder("11");
                p.sub_tit03.set_background("#ffffff");
                p.sub_tit03.set_flexcrossaxisalign("end");
                p.sub_tit03.move("1630","674","100%","66",null,null);

                p.Div03.set_taborder("12");
                p.Div03.set_text("Div00");
                p.Div03.set_cssclass("div_WF_Bg");
                p.Div03.set_fittocontents("height");
                p.Div03.set_visible("false");
                p.Div03.move("0","0","100%","2534",null,null);

                p.staSubTitle04.set_taborder("13");
                p.staSubTitle04.set_text("처리내역");
                p.staSubTitle04.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle04.move("1630.00","690","50%","50",null,null);

                p.btnMinPrcsCn.set_taborder("14");
                p.btnMinPrcsCn.set_cssclass("btn_WF_ACMinus");
                p.btnMinPrcsCn.move("2890.00","692","34","34",null,null);

                p.Panel01_02_00_01.set_taborder("15");
                p.Panel01_02_00_01.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_00_01.set_spacing("0px 10px");
                p.Panel01_02_00_01.set_horizontalgap("10");
                p.Panel01_02_00_01.set_flexcrossaxisalign("center");
                p.Panel01_02_00_01.set_flexmainaxisalign("end");
                p.Panel01_02_00_01.move("2340.00","690","50%","50",null,null);

                p.sub_tit04.set_taborder("16");
                p.sub_tit04.set_background("#ffffff");
                p.sub_tit04.set_flexcrossaxisalign("end");
                p.sub_tit04.set_visible("false");
                p.sub_tit04.move("1630","674","100%","66",null,null);

                p.Div04.set_taborder("17");
                p.Div04.set_text("Div00");
                p.Div04.set_cssclass("div_WF_Bg");
                p.Div04.set_fittocontents("height");
                p.Div04.set_visible("false");
                p.Div04.move("0","0","100%","400",null,null);
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

                p.btn01.set_taborder("1");
                p.btn01.set_text("신청정보");
                p.btn01.set_cssclass("btn_WF_Quick");
                p.btn01.move("17.00","btn00:0","100%","45",null,null);

                p.btn02.set_taborder("2");
                p.btn02.set_text("제원");
                p.btn02.set_cssclass("btn_WF_Quick");
                p.btn02.move("17.00","110","100%","45",null,null);

                p.btn03.set_taborder("3");
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
                p.btn00.set_taborder("0");
                p.btn00.set_text("미처리종료");
                p.btn00.set_cssclass("btn_WF_No");
                p.btn00.set_fittocontents("width");
                p.btn00.set_visible("false");
                p.btn00.move("7","20","100","40",null,null);

                p.btn00_00_00_00.set_taborder("1");
                p.btn00_00_00_00.set_text("차량등록신청");
                p.btn00_00_00_00.set_cssclass("btn_WF_Yes");
                p.btn00_00_00_00.set_fittocontents("width");
                p.btn00_00_00_00.set_visible("false");
                p.btn00_00_00_00.move("10","20","100","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
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
                p.set_titletext("차량장비등록신청 차량등록수정");

                p.divTitle.set_taborder("4");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_cssclass("div_WF_QuickFrBg");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("height");
                p.divForm.move("20","divTitle:10",null,"5984","20",null);

                p.divQuick.set_taborder("1");
                p.divQuick.set_text("div00");
                p.divQuick.set_cssclass("div_WF_QuickMenu");
                p.divQuick.set_fittocontents("height");
                p.divQuick.move(null,"62","296","201","22",null);

                p.divBtn.set_taborder("2");
                p.divBtn.set_text("div00");
                p.divBtn.set_cssclass("div_WF_QuickBtnBg");
                p.divBtn.set_fittocontents("height");
                p.divBtn.set_visible("true");
                p.divBtn.move(null,"divQuick:0","296","81","22",null);

                p.divGuide00.set_taborder("3");
                p.divGuide00.set_text("div00");
                p.divGuide00.set_visible("false");
                p.divGuide00.set_cssclass("div_GD_Tip");
                p.divGuide00.move("1600.00","145","450","385",null,null);

                p.RaonkUpload.set_taborder("5");
                p.RaonkUpload.set_DevelopLangage("JAVA");
                p.RaonkUpload.set_ExtensionAllowOrLimit("1");
                p.RaonkUpload.set_HandlerUrl("/common/uploadDownload.do");
                p.RaonkUpload.set_RunTimes("html5");
                p.RaonkUpload.set_ButtonBarView("0");
                p.RaonkUpload.set_AllowDuplicationFile("1");
                p.RaonkUpload.set_text("");
                p.RaonkUpload.set_DisableDeleteConfirm("1");
                p.RaonkUpload.set_positionstep("0");
                p.RaonkUpload.set_visible("false");
                p.RaonkUpload.move("20","divForm:0","1020","200",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,4800,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divQuick.set_cssclass("div_WF_QuickMenuM");
                p.divQuick.move("20","10",null,"60","20",null);

                p.divForm.set_fittocontents("none");
                p.divForm.set_cssclass("div_WF_QuickFrBgM");
                p.divForm.move("0","70",null,null,"0","100");

                p.divBtn.set_cssclass("div_WF_QuickBtnBgM");
                p.divBtn.set_fittocontents("none");
                p.divBtn.move("0",null,null,"80","0","0");
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Radio00_00_00","value","dsGet","emlRcptnYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.Div01.form.edtAplyNo","value","dsList","aplyNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.Div01.form.edtAplcntNm","value","dsList","aplcntNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.Div01.form.edtAplcntInstNm","value","dsList","aplcntInstNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.Div01.form.edtMblTelno","value","dsList","hwrtInptCtinfoNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.Div02.form.cboVhclSe","value","dsList","vhclEqpmntTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.Div02.form.cboVhclCd","value","dsList","vhclEqpmntSeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.Div02.form.cboCarmdl","value","dsList","carmdlSclCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divForm.form.Div02.form.cboUsg","value","dsList","usgCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divForm.form.Div02.form.edtMnfctrNm","value","dsList","mnfctrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divForm.form.Div02.form.edtFrm","value","dsList","frmNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divForm.form.Div02.form.edtMdlyr","value","dsList","mdlyrCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divForm.form.Div02.form.cboFuelKnd","value","dsList","fuelKndCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divForm.form.Div02.form.edtVin","value","dsList","vinSn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divForm.form.Div03.form.edtVhrno","value","dsList","vhrno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divForm.form.Div03.form.calCarRegYmd","value","dsList","carRegYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divForm.form.Div03.form.edtLen","value","dsList","lenVl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divForm.form.Div03.form.edtArea","value","dsList","area");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divForm.form.Div03.form.edtHgt","value","dsList","hgtVl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divForm.form.Div03.form.edtVhclTwt","value","dsList","vhclTwt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divForm.form.Div03.form.edtMaxLdcpct","value","dsList","maxLdcpct");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divForm.form.Div03.form.edtVhclWt","value","dsList","vhclWt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divForm.form.Div03.form.edtDsplmt","value","dsList","dsplmt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divForm.form.Div03.form.edtRdgNope","value","dsList","rdgNope");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divForm.form.Div03.form.rdoSafeInspTrgtYn","value","dsList","safeInspTrgtYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divForm.form.Div03.form.calNewInspYmd","value","dsList","newInspYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divForm.form.Div03.form.rdoSafeDvcVhclYn","value","dsList","safeDvcEsntlVhclYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divForm.form.Div03.form.cboInspInst","value","dsList","inspInstCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divForm.form.Div03.form.edtSafeDvcEtcKndNm","value","dsList","safeDvcEtcKndNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divForm.form.Div03.form.txtCnvyMttr","value","dsList","cnvyMttrCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divForm.form.Div02.form.rdoOfcbzUseYn","value","dsList","ofcbzUseYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divForm.form.Div02.form.edtBatryId","value","dsList","batryId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divForm.form.Div02.form.edtVhcleId","value","dsList","vhcleId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divForm.form.Div02.form.chkOfcbzUnusdAgreYn","value","dsList","ofcbzUnusdAgreYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.Div04.form.calAprvYmd","value","dsList","aprvYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divForm.form.Div04.form.calErsrYmd","value","dsList","ersrYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divForm.form.Div04.form.rdoBilgYn","value","dsList","bilgCd");
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
        this.addIncludeScript("LIF070M00.xfdl","xjs::TaskCom.xjs");
        this.registerScript("LIF070M00.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	LIF070M00.xfdl
        *  @Creator 	CHG
        *  @CreateDate 	2024/10/29
        *  @Desction    생활 > 이동지역 > 차량/장비등록신청
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/10/29				CHG							최초생성
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
        this.aplySeCd = "TSPAIS002"; // 신청구분코드(차량/장비등록신청 : "TSPAIS002")
        this.jobCd = "TAS00092"; // 작업코드(기본값 TAS00092 : 신청서작성)
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
        	// this.divForm.form.Div04.visible = true;
        	// this.divForm.form.Div03.visible = true;
        	// this.divForm.form.Div02.visible = true;
        	// this.divForm.form.Div01.visible = true;

        	nexacro._OnceCallbackTimer.callonce(this, function () {
        		this.divForm.form.Div03.visible = true;
        		this.divForm.form.Div02.visible = true;
        		this.divForm.form.Div01.visible = true;
        		this.resetScroll();
        	},50);
        	/* 화면처리 End */

            // main 화면 자원 사용을 위한 처리
        	nexacro.main = this;

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

        	// 첨부파일항목목록조회
        	this.cfnEtcCdLoad({ id:this.dsAtflArtclList.name, cbf:"fnCallback", dsAtflArtclList:"{id:'selectTaskComListCd', cnd:{cdTyId:'ATFL_SE', note:'" + obj.name + "'}}"});  // 첨부파일구분

        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function (paramAplyNo)
        {
        	// 전동차목록 조회
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
        this.cfnSave = function (vStrSvcId, vStrSvcUrl)
        {
        	this.fnSave(vStrSvcId, vStrSvcUrl);
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

        	var strSvcId    = "vhclEqpmntAplyInq";
        	var strSvcUrl   = "vhclEqpmnt/vhclEqpmntAplyInq.do";
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
        			this.divForm.form.Div01.form.edtAplySe.value = this.cfnGvbkAplySeNm();

        			this.cfnComCdLoad({ id:"comVhclSeSearch", cbf:"fnCallback", dsVhclSe:"AISVERVTY:S" }); // 차량/장비코드

        			break;

        		case "comVhclSeSearch" : // 차량/장비 조회
        			// 차량/장비 제한값 'AISVERVTY01', 'AISVERVTY02', 'AISVERVTY03' ,'AISVERVTY04'
        			this.dsVhclSe.filter("cdId == '' || cdId == 'AISVERVTY01' || cdId == 'AISVERVTY02' || cdId == 'AISVERVTY03' || cdId == 'AISVERVTY04'");

        			this.cfnComCdLoad({ id:"comVhclCdSearch", cbf:"fnCallback", dsVhclCd:"AISVERVTY:S" }); // 차량/장비코드

        			break;

        		case "comVhclCdSearch" : // 차량/장비 조회
        			this.cfnComCdLoad({ id:"comCarmdlSearch", cbf:"fnCallback", dsCarmdl:"AISVERVHDV:S" }); // 차종규모코드


        			break;

        		case "comCarmdlSearch" : // 차종규모 조회
        			this.cfnComCdLoad({ id:"comUsgSearch", cbf:"fnCallback", dsUsg:"AISVERVHUSE:S" }); // 용도코드

        			break;

        		case "comUsgSearch" : // 용도 조회
        			this.cfnComCdLoad({ id:"comFuelKndSearch", cbf:"fnCallback", dsFuelKnd:"AISVERFUE:S" }); // 연료종류코드

        			break;

        		case "comFuelKndSearch" : // 연료종류 조회
        			this.cfnComCdLoad({ id:"comSafeDvcKndSearch", cbf:"fnCallback", dsSafeDvcKnd:"AISVERVHSVMHTP:S" }); // 안전장치종류

        			break;

        		case "comSafeDvcKndSearch" : // 안전장치종류 조회
        			// 선택 제거
        			var sObjNm = "chkSafeDvcKnd";

        			for(var i = 0; i < this.dsSafeDvcKnd.getRowCount(); i++){
        				// 코드ID값이 빈 로우 삭제
        				if(this.gfnIsNull(this.dsSafeDvcKnd.getColumn(0, "cdId"))){
        					this.dsSafeDvcKnd.deleteRow(i);
        					i = i - 1;
        					continue;

        				}

        				var sCdId = this.dsSafeDvcKnd.getColumn(i, "cdId");
        				var sCdNm = this.dsSafeDvcKnd.getColumn(i, "cdNm");

        				// 체크박스 동적 생성
        				var newObj = new CheckBox(sObjNm + i,"200.00","128","129","40",null,null,null,null,null,null,this.divForm.form.Div03.form.divSafeDvcKnd.form);
        				newObj.set_text(sCdNm);
        				newObj.set_fittocontents("width");
        				newObj.set_falsevalue("0");
        				newObj.set_truevalue(sCdId);
        				newObj.addEventHandler("onchanged",this.chkSafeDvcKnd_onchanged,this);
        				this.divForm.form.Div03.form.divSafeDvcKnd.addChild(newObj.name, newObj);
        				newObj.show();

        			}

        			this.resetScroll();

        			this.cfnComCdLoad({ id:"comInspInstSearch", cbf:"fnCallback", dsInspInst:"AISSAFETY:S" }); // 검사기관

        			break;

        		case "comInspInstSearch" : // 검사기관 조회
        			// 신청서 번호 있는지 체크 없으면 신규등록
        			this.aplyNo = this.getOwnerFrame().pvAplyNo;   // 신청번호
        			// AIS2412_00005 ~ AIS2412_00008
        			// this.aplyNo = "AIS2412_00005";

        			this.collect = this.getOwnerFrame().collect; // 회수가능여부
        			// this.collect = "true"; // 회수가능여부

        			if (this.gfnIsNull(this.aplyNo)) {
        				var nRow = this.dsList.addRow();

        				this.dsList.setColumn(nRow, "aplcntId"			, this.gvUserId);	// 신청자id
        				this.dsList.setColumn(nRow, "aplcntNm"			, this.gvUserNm);	// 신청자명
        				this.dsList.setColumn(nRow, "aplcntInstCd"		, this.gvCoId);		// 신청자기관코드
        				this.dsList.setColumn(nRow, "aplcntInstNm"		, this.gvCoNm);		// 신청자기관명
        				this.dsList.setColumn(nRow, "aplcntDeptCd"		, this.gvDeptId);	// 신청자부서코드
        				this.dsList.setColumn(nRow, "aplySeCd"			, this.aplySeCd);	// 신청구분코드
        				this.dsList.setColumn(nRow, "hwrtInptCtinfoNo"	, this.gvMblTelNo);	// 휴대전화번호

        				// 해당 TASK ID로 버튼 자동 생성 -> 추후에 신청번호가 있는지 없는지 체크해서 task id 박아넣어줘야함. 현재는 신청서 작성으로 했음.
        				this.cfnBtnCrt({ crtTrgt:this.divBtn, cbf:"fnCallback", lnkgEvnt:this.btn_onclick, inqCnd : { jobPrcsPrgrsSeCd:this.jobCd} });

        			} else {
        				// 전동차목록 조회
        				this.cfnSearch(this.aplyNo);

        			}

        			break;

        		case "vhclEqpmntAplyInq": //조회
        			if(this.dsList.getRowCount() > 0){
        				this.jobCd = this.dsList.getColumn(0, "jobCd");

        			}else{
        				return;

        			}

        			// 해당 TASK ID로 버튼 자동 생성 -> 추후에 신청번호가 있는지 없는지 체크해서 task id 박아넣어줘야함. 현재는 신청서 작성으로 했음.
        			this.cfnBtnCrt({ crtTrgt:this.divBtn, cbf:"fnCallback", lnkgEvnt:this.btn_onclick, inqCnd : { jobPrcsPrgrsSeCd:this.jobCd} });

        			// 화면 세팅
        			this.fnScrnSetting();

        			// 해당 데이터가 있을때 동적으로 체크박스 체크해주기.
        			if(!this.gfnIsNull(this.dsList.getColumn(0, "safeDvcKndCd"))){
        				var safeDiv = this.divForm.form.Div03.form.divSafeDvcKnd;
        				var arrSafeDvcKndCd = this.dsList.getColumn(0, "safeDvcKndCd").split(",");

        				for(var i = 0; i < arrSafeDvcKndCd.length; i++){
        					Array.from(safeDiv.form.components).forEach(oComp => {
        						if(oComp.truevalue == arrSafeDvcKndCd[i]){
        							oComp.value = arrSafeDvcKndCd[i];

        						}
        					});
        				}
        			}

        			break;

        		case "vhclEqpmntAplyStrg" : // 저장
        			this.gfnAlertMsg("saveAlert", this.objApp.getVariable("gvRetMsg"), "", "msgCallback");

        			break;

        		case "_cfnBtnCrt_" : // 버튼 생성 callback
        			if(this.dsList.getRowCount() > 0){
        				this.fnSetAplyBtn("1", this.dsList.getColumn(0, "vhclEqpmntTypeCd"));

        			}

        			// 신청서작성 - 신청취소 : 신규 신청일때는 안보여줌.
        			if(this.jobCd == "TAS00092" && this.gfnIsNull(this.aplyNo)){
        				Array.from(this.btnDiv.form.components).forEach(oComp => {
        					if(oComp.id == "CTL01015"){
        						oComp.visible = false;

        					}
        				});
        			}

        			// TAS00168 : 이동지역접수, TAS10456 : 전력운영접수
        			if(this.jobCd == "TAS00168" || this.jobCd == "TAS10456"){
        				// 신청자ID가 로그인ID와 같을땐 회수버튼을 보여줌. 다를땐 접수 버튼
        				var sAplcntId = this.dsList.getColumn(0, "aplcntId");
        				Array.from(this.btnDiv.form.components).forEach(oComp => {
        					if(this.collect == "true" && sAplcntId == this.gvUserId){
        						if(oComp.id == "CTL00160" || oComp.id == "CTL11075"){
        							oComp.visible = false;

        						}

        					}else{
        						if(oComp.id == "CTL11092" || oComp.id == "CTL11091"){
        							oComp.visible = false;

        						}
        					}
        				});
        			}

        			this.resetScroll();

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
        			this.cfnSave(this.vStrSvcId, this.vStrSvcUrl);

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
        				this.cfnSave(this.vStrSvcId, this.vStrSvcUrl);
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
        						  , "bsnsSeCd" : "TSPAIS"   // 업무구분코드(입주자서비스)
        						  , "prgrmId"  : this.name  // 프로그램ID (화면 ID)
        				};

        				this.RaonkUpload.AddFormData('params', JSON.stringify(obj));
        				this.RaonkUpload.Transfer();
        				return;

        			} else {
        				// 저장
        				this.cfnSave(this.vStrSvcId, this.vStrSvcUrl);
        			}
        		}
        	}else if(sPopupId == "saveAlert"){
        		this.reload();

        	}else if(sPopupId == "aplyCancelConfirm"){
        		// 첨부파일 다 삭제
        		this.cfnSetAtflInfo(this.RaonkUpload, this.divForm.form.Div02.form.grdElctyHdlEqpmntIdEvdncDcmnt).cfnDelAtfl();
        		this.cfnSetAtflInfo(this.RaonkUpload, this.divForm.form.Div03.form.grdCarRegctf).cfnDelAtfl();
        		this.cfnSetAtflInfo(this.RaonkUpload, this.divForm.form.Div03.form.grdCarFrtsdPhoto).cfnDelAtfl();
        		this.cfnSetAtflInfo(this.RaonkUpload, this.divForm.form.Div03.form.grdCarFlkPhoto).cfnDelAtfl();
        		this.cfnSetAtflInfo(this.RaonkUpload, this.divForm.form.Div03.form.grdSafeDvcPhoto).cfnDelAtfl();
        		this.cfnSetAtflInfo(this.RaonkUpload, this.divForm.form.Div03.form.grdNewInspRcdsht).cfnDelAtfl();
        		this.cfnSetAtflInfo(this.RaonkUpload, this.divForm.form.Div03.form.grdLsct).cfnDelAtfl();

        		// 데이터셋 모든 자료 삭제
        		this.dsList.deleteAll();
        		this.dsCnvyMttr.deleteAll();
        		this.dsAtfl.deleteAll();
        		this.dsMst.deleteAll();

        		// 저장
        		this.cfnSave(this.vStrSvcId, this.vStrSvcUrl);
        	}else if(sPopupId == "endConfirm"){
        		if(oRtn.result == "Y") {
        			// 메뉴 ID
        			var sMenuId = this.objApp.gvFrmLeft.form.dsMenu.getColumn(this.objApp.gvFrmLeft.form.dsMenu.rowposition, this.FRAME_MENUCOLUMNS.menuId);

        			this.gfnCloseMenu(sMenuId);

        		}
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        /**************************************************************************
         * @name : fnSetAplyBtn
         * @description : 콤보별 신청버튼 분기 처리(sType : 1 = 차량/장비구분코드, 2 = 연료종류코드)
         ***************************************************************************/
        this.fnSetAplyBtn = function(sType, sVal){
        	// 신청버튼 : CTL00151, CTL11073
        	// 차량등록신청 : CTL00329, CTL11074
        	var sVal2 = "";

        	// 특장 특수 장비차량 전력운영팀 승인 후 이동지역에서 반려된 건인지 확인
        	// 해당 건일 경우 전력운영팀 안거치고 바로 이동지역 안전관리소로 이동
        	var nEleChk = nexacro.toNumber(this.dsList.getColumn(0, "eleChk"), 0);

        	if(sType == "1"){ // 차량장비구분코드
        		// var sCarTypeCd = "";// 차량유형코드가져오면됨.
        		if(sVal == "AISVERVTY03"){ // 특장/특수차
        			sVal2 = this.divForm.form.Div02.form.cboFuelKnd.value; // 연료종류코드
        			if(sVal2 == "AISVERFUE003"){ // 전기
        				// 전기차 관련 양식 표출, 전력 운영팀 전송 버튼 표출
        				// 공용충전기여부 라디오 노출 시킴
        				this.divForm.form.Div02.form.Pan06.visible = true;

        				// CTL11073 버튼 보여줌
        				// CTL00151 버튼 숨김
        				// CTL00329, CTL11074 처리
        				Array.from(this.btnDiv.form.components).forEach(oComp => {
        					if(oComp.id == "CTL11073"){
        						oComp.visible = true;

        					}else if(oComp.id == "CTL00151"){
        						oComp.visible = false;

        					}

        					if(nEleChk == 0){
        						if(oComp.id == "CTL11074"){
        							oComp.visible = true;

        						}else if(oComp.id == "CTL00329"){
        							oComp.visible = false;

        						}

        					}else {
        						if(oComp.id == "CTL00329"){
        							oComp.visible = true;

        						}else if(oComp.id == "CTL11074"){
        							oComp.visible = false;

        						}
        					}
        				});

        			}else{
        				// 전기차 관련 약식 숨김 및 운항안전팀 전송 버튼 표출
        				// 공용충전기여부 라디오 숨김
        				this.divForm.form.Div02.form.Pan06.visible = false;

        				// CTL11073 버튼 숨김
        				// CTL00151 버튼 보여줌
        				// CTL00329, CTL11074 처리
        				Array.from(this.btnDiv.form.components).forEach(oComp => {
        					if(oComp.id == "CTL11073"){
        						oComp.visible = false;

        					}else if(oComp.id == "CTL00151"){
        						oComp.visible = true;

        					}else if(oComp.id == "CTL00329"){
        						oComp.visible = true;

        					}else if(oComp.id == "CTL11074"){
        						oComp.visible = false;

        					}
        				});

        			}
        		}else{
        			// 전기차 관련 약식 숨김 및 운항안전팀 전송 버튼 표출
        			// 공용충전기여부 라디오 숨김
        			this.divForm.form.Div02.form.Pan06.visible = false;

        			// CTL11073 버튼 숨김
        			// CTL00151 버튼 보여줌
        			// CTL00329, CTL11074 처리
        			Array.from(this.btnDiv.form.components).forEach(oComp => {
        				if(oComp.id == "CTL11073"){
        					oComp.visible = false;

        				}else if(oComp.id == "CTL00151"){
        					oComp.visible = true;

        				}else if(oComp.id == "CTL00329"){
        					oComp.visible = true;

        				}else if(oComp.id == "CTL11074"){
        					oComp.visible = false;

        				}
        			});
        		}

        	}else if(sType == "2"){ // 연료종류코드
        		if(sVal == "AISVERFUE003"){ // 전기
        			sVal2 = this.divForm.form.Div02.form.cboVhclSe.value; // 차량장비유형코드
        			if(sVal2 == "AISVERVTY03"){ // 특장/특수차
        				// 전기차 관련 양식 표출, 전력 운영팀 전송 버튼 표출
        				// 공용충전기여부 라디오 노출 시킴
        				this.divForm.form.Div02.form.Pan06.visible = true;

        				// CTL11073 버튼 보여줌
        				// CTL00151 버튼 숨김
        				// CTL00329, CTL11074 처리
        				Array.from(this.btnDiv.form.components).forEach(oComp => {
        					if(oComp.id == "CTL11073"){
        						oComp.visible = true;

        					}else if(oComp.id == "CTL00151"){
        						oComp.visible = false;

        					}

        					if(nEleChk == 0){
        						if(oComp.id == "CTL11074"){
        							oComp.visible = true;

        						}else if(oComp.id == "CTL00329"){
        							oComp.visible = false;

        						}

        					}else {
        						if(oComp.id == "CTL00329"){
        							oComp.visible = true;

        						}else if(oComp.id == "CTL11074"){
        							oComp.visible = false;

        						}
        					}
        				});

        			}else{
        				// 전기차 관련 약식 숨김 및 운항안전팀 전송 버튼 표출
        				// 공용충전기여부 라디오 숨김
        				this.divForm.form.Div02.form.Pan06.visible = false;

        				// CTL11073 버튼 숨김
        				// CTL00151 버튼 보여줌
        				// CTL00329, CTL11074 처리
        				Array.from(this.btnDiv.form.components).forEach(oComp => {
        					if(oComp.id == "CTL11073"){
        						oComp.visible = false;

        					}else if(oComp.id == "CTL00151"){
        						oComp.visible = true;

        					}else if(oComp.id == "CTL00329"){
        						oComp.visible = true;

        					}else if(oComp.id == "CTL11074"){
        						oComp.visible = false;

        					}
        				});

        			}

        		}else{
        			// 전기차 관련 약식 숨김 및 운항안전팀 전송 버튼 표출
        			// 공용충전기여부 라디오 숨김
        			this.divForm.form.Div02.form.Pan06.visible = false;

        			// CTL11073 버튼 숨김
        			// CTL00151 버튼 보여줌
        			// CTL00329, CTL11074 처리
        			Array.from(this.btnDiv.form.components).forEach(oComp => {
        				if(oComp.id == "CTL11073"){
        					oComp.visible = false;

        				}else if(oComp.id == "CTL00151"){
        					oComp.visible = true;

        				}else if(oComp.id == "CTL00329"){
        					oComp.visible = true;

        				}else if(oComp.id == "CTL11074"){
        					oComp.visible = false;

        				}
        			});
        		}
        	}

        	this.resetScroll();
         }

        /**************************************************************************
         * @name : fnScrnSetting
         * @description : 조회 시 화면 세팅
         ***************************************************************************/
        this.fnScrnSetting = function(){
        	var sVhclSe = this.dsList.getColumn(0, "vhclEqpmntTypeCd"); // 차량장비구분코드
        	var sSafeInspTrgtYn = this.dsList.getColumn(0, "safeInspTrgtYn"); // 안전검사대상코드
        	var sSafeDvcVhclYn = this.dsList.getColumn(0, "safeDvcEsntlVhclYn"); // 안전장비의무부착차량여부
        	var sFuelKndCd = this.dsList.getColumn(0, "fuelKndCd"); // 연료종류코드
        	var sOfcbzUseYn = this.dsList.getColumn(0, "ofcbzUseYn"); // 공용충전기사용여부
        	var sSafeDvcKndCd = this.dsList.getColumn(0, "safeDvcKndCd"); // 안전장치종류코드

        	if(!this.gfnIsNull(sVhclSe)){
        		this.divForm.form.Div02.form.cboVhclCd.visible = true;

        		this.dsVhclCd.filter("uprCd == '" + sVhclSe + "' || cdId == ''");

        		this.resetScroll();

        	}else{
        		this.divForm.form.Div02.form.cboVhclCd.visible = false;

        		this.dsVhclCd.filter("");

        		this.resetScroll();

        	}
        	if(!this.gfnIsNull(sSafeInspTrgtYn)){
        		this.rdoSafeInspTrgtYn_onitemchanged(this.divForm.form.Div03.form.rdoSafeInspTrgtYn);

        	}
        	if(!this.gfnIsNull(sSafeDvcVhclYn)){
        		this.rdoSafeDvcVhclYn_onitemchanged(this.divForm.form.Div03.form.rdoSafeDvcVhclYn);

        	}
        	if(!this.gfnIsNull(sFuelKndCd)){
        		this.cboFuelKnd_onitemchanged(this.divForm.form.Div02.form.cboFuelKnd);

        	}
        	if(!this.gfnIsNull(sOfcbzUseYn)){
        		this.rdoOfcbzUseYn_onitemchanged(this.divForm.form.Div02.form.rdoOfcbzUseYn);

        	}
        	if(!this.gfnIsNull(sSafeDvcKndCd) && sSafeDvcKndCd.indexOf("AISVERVHSVMHTP004") > -1){
        		this.divForm.form.Div03.form.Pan11.visible = true;

        	}else{
        		this.divForm.form.Div03.form.Pan11.visible = false;

        	}

        	if(!this.gfnIsNull(this.aplyNo)){
        		this.divForm.form.Div01.form.Pan01.visible = true;
        		this.resetScroll();

        	}

        	// 신청서 신청이 아닐때는 처리내역도 보여줌
        	if(this.jobCd != "TAS00092" && this.jobCd != "TAS00297"){
        		this.divForm.form.sub_tit04.visible = true;
        		this.divForm.form.Div04.visible = true;

        	}

        	// TAS00295 : 만족도조사일떄
        	if(this.jobCd == "TAS00295"){
        		this.divForm.form.divDgstfnExmn.visible = true;

        	}

        	this.resetScroll();

        	// this.jobCd 가 TAS00092, TAS00297 일때는 차량등록 신청/수정 이라 이외에는 컴포넌트 readOnly 처리해줌.
        	if(this.jobCd != "TAS00092" && this.jobCd != "TAS00297"){
        		// 제원 불러오기 버튼 차량등록 신청일때만 노출
        		if(this.jobCd != "TAS00092"){
        			this.divForm.form.btnHstry.visible = false;

        		}

        		var sDivFrom = this.divForm.form;

        		var arrDivComps = [sDivFrom.Div01, sDivFrom.Div02, sDivFrom.Div03, sDivFrom.Div04];

        		arrDivComps.forEach(oDiv => {
        			if(oDiv.id == "Div04"){
        				// TAS00168 : 이동지역접수, TAS10456 : 전력운영접수
        				if(this.jobCd == "TAS00168" || this.jobCd == "TAS10456"){
        					// 신청자ID가 로그인ID와 같을땐 readOnly 처리해줌.
        					var sAplcntId = this.dsList.getColumn(0, "aplcntId");
        					if(this.collect != "true" || sAplcntId != this.gvUserId){
        						return;
        					}
        				}
        			}

        			Array.from(oDiv.form.components).forEach(oComp => {
        				fnReadonly.call(this, oComp);
        			});
        		});

        		// 내부함수호출
        		function fnReadonly (oComp, bReadonly) {
        			if (oComp instanceof nexacro.Div) {
        				Array.from(oComp.form.components).forEach(oComp2 => {
        					fnReadonly.call(this, oComp2);
        				});
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

        /**************************************************************************
         * @name : fnValiChk
         * @description : validation check
         ***************************************************************************/
        this.fnValiChk = function(){
        	var tmpVhclType = this.dsList.getColumn(0, "vhclEqpmntTypeCd"); // 차량/장비 유형 코드
        	var tmpFuelKndCd = this.dsList.getColumn(0, "fuelKndCd"); // 연료 종류 코드
        	var tmpOfcbzUseYn = this.dsList.getColumn(0, "ofcbzUseYn"); // 공용충전기사용여부
        	var tmpSafeInspTrgtYn = this.dsList.getColumn(0, "safeInspTrgtYn"); // 안전검사대상여부
        	var tmpSafeDvcEsntlVhclYn = this.dsList.getColumn(0, "safeDvcEsntlVhclYn"); // 안전장치의무부착여부

        	// 차량장비구분
        	if(this.gfnIsNull(tmpVhclType) || this.gfnIsNull(this.dsList.getColumn(0, "vhclEqpmntSeCd"))){
        		this.divForm.form.Div02.form.cboVhclSe.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["차량/장비구분 \n"]);
        		return false;

        	}
        	// 차종규모
        	if(this.gfnIsNull(this.dsList.getColumn(0, "carmdlSclCd"))){
        		this.divForm.form.Div02.form.cboCarmdl.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["차종규모 \n"]);
        		return false;

        	}
        	// 용도
        	if(this.gfnIsNull(this.dsList.getColumn(0, "usgCd"))){
        		this.divForm.form.Div02.form.cboUsg.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["용도 \n"]);
        		return false;

        	}
        	// 제작사
        	if(this.gfnIsNull(this.dsList.getColumn(0, "mnfctrNm"))){
        		this.divForm.form.Div02.form.edtMnfctrNm.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["제작사 \n"]);
        		return false;

        	}
        	// 형식
        	if(this.gfnIsNull(this.dsList.getColumn(0, "frmNm"))){
        		this.divForm.form.Div02.form.edtFrm.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["형식 \n"]);
        		return false;

        	}
        	// 연식
        	if(this.gfnIsNull(this.dsList.getColumn(0, "mdlyrCn"))){
        		this.divForm.form.Div02.form.edtMdlyr.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["연식 \n"]);
        		return false;

        	}
        	// 연료종류
        	if(this.gfnIsNull(tmpFuelKndCd)){
        		this.divForm.form.Div02.form.cboFuelKnd.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["연료종류 \n"]);
        		return false;

        	}
        	// 차대/시리얼번호
        	if(this.gfnIsNull(this.dsList.getColumn(0, "vinSn"))){
        		this.divForm.form.Div02.form.edtVin.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["차대/시리얼번호 \n"]);
        		return false;

        	}

        	// 차량/장비 유형코드 : 특장/특수차(AISVERVTY03), 연료종류 : 전기(AISVERFUE003)
        	if(tmpVhclType == "AISVERVTY03" && tmpFuelKndCd == "AISVERFUE003"){
        		// 공용충전기사용여부
        		if(this.gfnIsNull(tmpOfcbzUseYn)){
        			this.divForm.form.Div02.form.rdoOfcbzUseYn.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["공용충전기사용여부 \n"]);
        			return false;

        		}

        		if(tmpOfcbzUseYn == "1"){ // 예
        			// 전기조업장비ID증빙서류
        			if(this.gfnIsNull(this.dsFile.getColumn(0, "A110"))){
        				this.divForm.form.Div02.form.grdElctyHdlEqpmntIdEvdncDcmnt.setFocus();
        				this.gfnAlertMsg("msg", "MSG_011", ["전기조업장비ID증빙서류를 \n등록하여 주세요."]);
        				return false;

        			}
        			// BATTERY ID
        			if(this.gfnIsNull(this.dsList.getColumn(0, "batryId"))){
        				this.divForm.form.Div02.form.edtBatryId.setFocus();
        				this.gfnAlertMsg("msg", "MSG_009", ["BATTERY ID \n"]);
        				return false;

        			}
        			// VEHICLE ID
        			if(this.gfnIsNull(this.dsList.getColumn(0, "vhcleId"))){
        				this.divForm.form.Div02.form.edtVhcleId.setFocus();
        				this.gfnAlertMsg("msg", "MSG_009", ["VEHICLE ID \n"]);
        				return false;

        			}

        		}else if(tmpOfcbzUseYn == "0"){ // 아니요
        			// 공용충전기미사용동의여부
        			if(this.gfnIsNull(this.dsList.getColumn(0, "ofcbzUnusdAgreYn"))){
        				this.divForm.form.Div02.form.chkOfcbzUnusdAgreYn.setFocus();
        				this.gfnAlertMsg("msg", "MSG_009", ["공용충전기미사용동의여부 \n"]);
        				return false;

        			}
        		}
        	}
        	// 자동차등록번호
        	if(this.gfnIsNull(this.dsList.getColumn(0, "vhrno"))){
        		this.divForm.form.Div03.form.edtVhrno.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["자동차등록번호 \n"]);
        		return false;

        	}
        	// 자동차등록일자
        	if(this.gfnIsNull(this.dsList.getColumn(0, "carRegYmd"))){
        		this.divForm.form.Div03.form.calCarRegYmd.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["자동차등록일자 \n"]);
        		return false;

        	}
        	// 길이
        	if(this.gfnIsNull(this.dsList.getColumn(0, "lenVl"))){
        		this.divForm.form.Div03.form.edtLen.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["길이 \n"]);
        		return false;

        	}
        	// 너비
        	if(this.gfnIsNull(this.dsList.getColumn(0, "area"))){
        		this.divForm.form.Div03.form.edtArea.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["너비 \n"]);
        		return false;

        	}
        	// 높이
        	if(this.gfnIsNull(this.dsList.getColumn(0, "hgtVl"))){
        		this.divForm.form.Div03.form.edtHgt.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["높이 \n"]);
        		return false;

        	}
        	// 차량총중량
        	if(this.gfnIsNull(this.dsList.getColumn(0, "vhclTwt"))){
        		this.divForm.form.Div03.form.edtVhclTwt.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["차량총중량 \n"]);
        		return false;

        	}
        	// 최대적재량
        	if(this.gfnIsNull(this.dsList.getColumn(0, "maxLdcpct"))){
        		this.divForm.form.Div03.form.edtMaxLdcpct.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["최대적재량 \n"]);
        		return false;

        	}
        	// 차량중량
        	if(nexacro.toNumber(this.dsList.getColumn(0, "vhclWt"), -1) < 0){
        		this.divForm.form.Div03.form.edtVhclWt.setFocus();
        		this.gfnAlertMsg("msg", "MSG_011", ["차량중량은 0 이상입니다."]);
        		return false;

        	}
        	// 배기량
        	if(this.gfnIsNull(this.dsList.getColumn(0, "dsplmt"))){
        		this.divForm.form.Div03.form.edtDsplmt.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["배기량 \n"]);
        		return false;

        	}
        	// 승차인원
        	if(this.gfnIsNull(this.dsList.getColumn(0, "rdgNope"))){
        		this.divForm.form.Div03.form.edtRdgNope.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["승차인원 \n"]);
        		return false;

        	}
        	// 안전검사대상여부
        	if(this.gfnIsNull(tmpSafeInspTrgtYn)){
        		this.divForm.form.Div03.form.rdoSafeInspTrgtYn.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["안전검사대상여부 \n"]);
        		return false;

        	}else if(tmpSafeInspTrgtYn == "1"){ // 예
        		// 검사기관
        		if(this.gfnIsNull(this.dsList.getColumn(0, "inspInstCd"))){
        			this.divForm.form.Div03.form.cboInspInst.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["검사기관 \n"]);
        			return false;

        		}
        		// 신규검사일자
        		if(this.gfnIsNull(this.dsList.getColumn(0, "newInspYmd"))){
        			this.divForm.form.Div03.form.calNewInspYmd.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["신규검사일자 \n"]);
        			return false;

        		}
        	}
        	// 안전장치의무부착여부
        	if(this.gfnIsNull(tmpSafeDvcEsntlVhclYn)){
        		this.divForm.form.Div03.form.rdoSafeDvcVhclYn.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["안전장치의무부착여부 \n"]);
        		return false;

        	}else if(tmpSafeDvcEsntlVhclYn == "1"){ // 예
        		// 안전장치종류
        		var safeDiv = this.divForm.form.Div03.form.divSafeDvcKnd;
        		var chkCnt = 0;
        		var chkEtcCnt = 0;

        		Array.from(safeDiv.form.components).forEach(oComp => {
        			// 선택 시 해당 코드값, 선택 안됐을때 0
        			if(oComp.value != "0"){
        				if(oComp.value == "AISVERVHSVMHTP004"){
        					chkEtcCnt++;

        				}
        				chkCnt++;
        			}
        		});

        		if(chkCnt < 1){
        			safeDiv.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["안전장치종류 \n"]);
        			return false;

        		}

        		// 기타가 있을때
        		if(chkEtcCnt > 0){
        			// 안전장치기타종류
        			if(this.gfnIsNull(this.dsList.getColumn(0, "safeDvcEtcKndNm"))){
        				this.divForm.form.Div03.form.edtSafeDvcEtcKndNm.setFocus();
        				this.gfnAlertMsg("msg", "MSG_009", ["안전장치기타종류 \n"]);
        				return false;

        			}
        		}

        		// 안전장치사진
        		if(this.gfnIsNull(this.dsFile.getColumn(0, "B140"))){
        			this.divForm.form.Div03.form.btnSafeDvcPhotoFile.setFocus();
        			this.gfnAlertMsg("msg", "MSG_011", ["안전장치사진을 \n등록하여 주세요."]);
        			return false;

        		}
        	}
        	// 자동차등록증
        	if(this.gfnIsNull(this.dsFile.getColumn(0, "B110"))){
        		this.divForm.form.Div03.form.btnCarRegctfFile.setFocus();
        		this.gfnAlertMsg("msg", "MSG_011", ["자동차등록증을 \n등록하여 주세요."]);
        		return false;

        	}
        	// 차량/장비(정면)사진
        	if(this.gfnIsNull(this.dsFile.getColumn(0, "B120"))){
        		this.divForm.form.Div03.form.btnCarFrtsdPhotoFile.setFocus();
        		this.gfnAlertMsg("msg", "MSG_011", ["차량/장비(정면)사진을 \n등록하여 주세요."]);
        		return false;

        	}
        	// 차량/장비(측면)사진
        	if(this.gfnIsNull(this.dsFile.getColumn(0, "B130"))){
        		this.divForm.form.Div03.form.btnCarFlkPhotoFile.setFocus();
        		this.gfnAlertMsg("msg", "MSG_011", ["차량/장비(측면)사진을 \n등록하여 주세요."]);
        		return false;

        	}
        	// 신규검사기록표
        	if(this.gfnIsNull(this.dsFile.getColumn(0, "B150"))){
        		this.divForm.form.Div03.form.btnNewInspRcdshtFile.setFocus();
        		this.gfnAlertMsg("msg", "MSG_011", ["신규검사기록표를 \n등록하여 주세요."]);
        		return false;

        	}
        	// 임대차계약서
        	if(this.gfnIsNull(this.dsFile.getColumn(0, "B160"))){
        		this.divForm.form.Div03.form.btnLsctFile.setFocus();
        		this.gfnAlertMsg("msg", "MSG_011", ["임대차계약서를 \n등록하여 주세요."]);
        		return false;

        	}

        	return true;

        }

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        /**************************************************************************
         * @name : cboVhclSe_onitemchanged
         * @description : 차량유형 콤보 수정 시
         ***************************************************************************/
        this.cboVhclSe_onitemchanged = function(obj,e)
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
         * @name : rdoSafeInspTrgtYn_onitemchanged
         * @description : 안전검사대상여부 콤보 수정 시 (1 : 예, 0 : 아니오)
         ***************************************************************************/
        this.rdoSafeInspTrgtYn_onitemchanged = function(obj,e)
        {
        	var objVal = obj.value;

        	// 안전검사대상여부가 "예" 일때만 검사기관/신규검사일자 보여줌.
        	if(objVal == "1"){
        		this.divForm.form.Div03.form.Pan08.visible = true;

        	}else{
        		this.divForm.form.Div03.form.Pan08.visible = false;

        	}

        	this.resetScroll();

        };

        /**************************************************************************
         * @name : rdoSafeDvcVhclYn_onitemchanged
         * @description : 안전장치의무부착차량여부 콤보 수정 시 (1 : 예, 0 : 아니오)
         ***************************************************************************/
        this.rdoSafeDvcVhclYn_onitemchanged = function(obj,e)
        {
        	var objVal = obj.value;

        	// 안전장치의무부착차량여부 "예" 일때만 안전장치종류/안전장치사진 보여줌.
        	if(objVal == "1"){
        		this.divForm.form.Div03.form.Pan09.visible = true;
        		this.divForm.form.Div03.form.panFile03.visible = true;

        	}else{
        		this.divForm.form.Div03.form.Pan09.visible = false;
        		this.divForm.form.Div03.form.panFile03.visible = false;

        	}

        	this.resetScroll();

        };

        /**************************************************************************
         * @name : cboFuelKnd_onitemchanged
         * @description : 연료종류코드 수정 시
         ***************************************************************************/
        this.cboFuelKnd_onitemchanged = function(obj,e)
        {
        	var objVal = obj.value;

        	// 버튼 처리
        	this.fnSetAplyBtn("2", objVal);

        };

        /**************************************************************************
         * @name : rdoOfcbzUseYn_onitemchanged
         * @description : 공용충전기사용여부 수정 시
         ***************************************************************************/
        this.rdoOfcbzUseYn_onitemchanged = function(obj,e)
        {
        	var objVal = obj.value;

        	if(objVal == "1"){
        		this.divForm.form.Div02.form.panFile01.visible = true; // 전기조업장비증빙서류
        		this.divForm.form.Div02.form.Pan07.visible = true; // 배터리ID, VEHICLE ID

        		this.divForm.form.Div02.form.Pan08.visible = false; // 공용 충전기 관련 사용 안내
        		this.divForm.form.Div02.form.Pan09.visible = false; // 공용충전기미사용동의여부

        	}else if(objVal == "0"){
        		this.divForm.form.Div02.form.panFile01.visible = false; // 전기조업장비증빙서류
        		this.divForm.form.Div02.form.Pan07.visible = false; // 배터리ID, VEHICLE ID

        		this.divForm.form.Div02.form.Pan08.visible = true; // 공용 충전기 관련 사용 안내
        		this.divForm.form.Div02.form.Pan09.visible = true; // 공용충전기미사용동의여부

        	}else{
        		this.divForm.form.Div02.form.panFile01.visible = false; // 전기조업장비증빙서류
        		this.divForm.form.Div02.form.Pan07.visible = false; // 배터리ID, VEHICLE ID

        		this.divForm.form.Div02.form.Pan08.visible = false; // 공용 충전기 관련 사용 안내
        		this.divForm.form.Div02.form.Pan09.visible = false; // 공용충전기미사용동의여부

        	}

        	this.resetScroll();
        };

        /**************************************************************************
         * @name : chkSafeDvcKnd_onchanged
         * @description : 안전장치종류 체크 시
         ***************************************************************************/
        this.chkSafeDvcKnd_onchanged = function(obj,e)
        {
        	var safeDiv = this.divForm.form.Div03.form.divSafeDvcKnd;

        	var nChk = 0;

        	Array.from(safeDiv.form.components).forEach(oComp => {
        		// 기타일때
        		if(oComp.value == "AISVERVHSVMHTP004"){
        			nChk++;
        		}
        	});

        	// 기타가 체크되어 있을때만 보여줌.
        	if(nChk > 0){
        		this.divForm.form.Div03.form.Pan11.visible = true;

        	}else{
        		this.divForm.form.Div03.form.Pan11.visible = false;

        	}

        	this.resetScroll();

        };

        /**************************************************************************
         * @name : edtVhcl_onchanged
         * @description : 승차인원, 차량 총 중량, 최대적재량 수정 시
         ***************************************************************************/
        this.edtVhcl_onchanged = function(obj,e)
        {
        	// 소수점 두 자리까지만 표기
        	var objVal = nexacro.toNumber(obj.value, 0);
        	objVal = Math.round(objVal * 100) / 100;
        	obj.value = objVal;

        	var nVhclTwt = nexacro.toNumber(this.dsList.getColumn(0, "vhclTwt"), 0); // 차량총중량
        	var nMaxLdcpct = nexacro.toNumber(this.dsList.getColumn(0, "maxLdcpct"), 0); // 최대적재량
        	var nNope = nexacro.toNumber(this.dsList.getColumn(0, "rdgNope"), 0); // 승차인원
        	var nResWt = 0; // 계산된 차량중량.

        	// 차량중량 = 총중량 - 최대적재량 - (승차인원*65)
        	nResWt = (Math.round(nVhclTwt * 100) / 100) - (Math.round(nMaxLdcpct * 100) / 100) - (nNope * 65);

        	nResWt = Math.round(nResWt * 100) / 100;

        	this.dsList.setColumn(0, "vhclWt", nResWt);

        };

        /**************************************************************************
         * @name : btnMin_onclick
         * @description : - 버튼 클릭(접기 기능)
         ***************************************************************************/
        this.btnMin_onclick = function(obj,e)
        {
        	var objNm = obj.name;
        	var objClass = obj.cssclass;

        	if(objClass == "btn_WF_ACMinus"){
        		if(objNm == "btnMinAplcntInfo"){
        			this.divForm.form.Div01.visible = false;

        		}else if(objNm == "btnMinAplyInfo"){
        			this.divForm.form.Div02.visible = false;

        		}else if(objNm == "btnMinSpfa"){
        			this.divForm.form.Div03.visible = false;

        		}else if(objNm == "btnMinPrcsCn"){
        			this.divForm.form.Div04.visible = false;

        		}else if(objNm == "btnMinTitle"){
        			this.divForm.form.divInfoGuide.visible = false;

        		}

        		obj.cssclass = "btn_WF_ACPlus";

        	}else if(objClass == "btn_WF_ACPlus"){
        		if(objNm == "btnMinAplcntInfo"){
        			this.divForm.form.Div01.visible = true;

        		}else if(objNm == "btnMinAplyInfo"){
        			this.divForm.form.Div02.visible = true;

        		}else if(objNm == "btnMinSpfa"){
        			this.divForm.form.Div03.visible = true;

        		}else if(objNm == "btnMinPrcsCn"){
        			this.divForm.form.Div04.visible = true;

        		}else if(objNm == "btnMinTitle"){
        			this.divForm.form.divInfoGuide.visible = true;

        		}

        		obj.cssclass = "btn_WF_ACMinus";

        	}

        	this.resetScroll();

        };

        /**************************************************************************
         * @name : btn_onclick
         * @description : Button Click Event
         ***************************************************************************/
        this.btn_onclick = function(obj,e){
        	/*
        		TAS00092	6261.차량등록신청	CTL00151	신청
        		TAS00092	6261.차량등록신청	CTL00773	임시저장
        		TAS00092	6261.차량등록신청	CTL00831	종료
        		TAS00092	6261.차량등록신청	CTL01015	신청취소
        		TAS00092	6261.차량등록신청	CTL11073	신청
        		TAS00093	6272.등록검토승인	CTL00153	보완요청
        		TAS00093	6272.등록검토승인	CTL00154	승인
        		TAS00093	6272.등록검토승인	CTL00161	담당자변경
        		TAS00093	6272.등록검토승인	CTL00899	미처리종료
        		TAS00168	6271.이동지역접수	CTL00160	접수
        		TAS00168	6271.이동지역접수	CTL11092	회수
        		TAS00297	6262.차량등록수정	CTL00152	미처리종료
        		TAS00297	6262.차량등록수정	CTL00329	차량등록신청
        		TAS00297	6262.차량등록수정	CTL11074	차량등록신청
        		TAS10456	6269.전력운영접수	CTL11075	접수
        		TAS10456	6269.전력운영접수	CTL11091	회수
        		TAS10457	6270.등록검토승인	CTL11076	담당자변경
        		TAS10457	6270.등록검토승인	CTL11077	보완요청
        		TAS10457	6270.등록검토승인	CTL11078	승인
        		TAS10457	6270.등록검토승인	CTL11079	미처리종료
        		TAS00094	6281.등록번호출력	CTL00155	만족도응답
        		TAS00094	6281.등록번호출력	CTL00632	종료
        		TAS00098	종료	N/A	N/A
        		TAS00295	62A1.만족도조사	CTL00326	설문응답완료
        	*/
        	// WorkFlow 정보
        	var wfInfo = this.cfnGetWfInfo(obj.name);

        	var vBtnNm = wfInfo.prcsSeCdNm;
        	var vBtnCd = wfInfo.prcsSeCd; // 눌린 버튼 ID(obj.name과 같은 값임.)

        	if(vBtnCd == "CTL00773" || vBtnCd == "CTL01015" || vBtnCd == "CTL11092" || vBtnCd == "CTL11091"
        	 || vBtnCd == "CTL00152" || vBtnCd == "CTL00160" || vBtnCd == "CTL11075" || vBtnCd == "CTL11077"
        	 || vBtnCd == "CTL11078" || vBtnCd == "CTL00153" || vBtnCd == "CTL00154"){ // 임시저장, 신청취소, 회수, 미처리종료, 접수, 보완요청, 승인
        		this.vStrSvcId  = "vhclEqpmntAplyStrg";
        		this.vStrSvcUrl = "vhclEqpmnt/vhclEqpmntAplyStrg.do";

        	}else if(vBtnCd == "CTL00151" || vBtnCd == "CTL11073" || vBtnCd == "CTL00329" || vBtnCd == "CTL11074"){ // 신청, 차량등록신청
        		// validation check
        		var res = this.fnValiChk();
        		if(!res){
        			return;

        		}

        		if(vBtnCd == "CTL00151"){
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

        		this.vStrSvcId  = "vhclEqpmntAplyStrg";
        		this.vStrSvcUrl = "vhclEqpmnt/vhclEqpmntAplyStrg.do";

        	}else if(vBtnCd == "CTL00831" || vBtnCd == "CTL01015" || vBtnCd == "CTL11079" || vBtnCd == "CTL00899"){ // 신청서작성 - 종료, 신청취소 || 등록검토승인 - 미처리종료
        		// 신규입력일때 종료 버튼 클릭 시 화면만 닫아줌.
        		if(this.dsList.getRowType(0) == Dataset.ROWTYPE_INSERT){
        			this.gfnConfirmMsg("endConfirm", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"], "", ["종료"]);

        			return;

        		}else{
        			this.vStrSvcId  = "vhclEqpmntAplyStrg";
        			this.vStrSvcUrl = "vhclEqpmnt/vhclEqpmntAplyStrg.do";

        		}

        	}else if(vBtnCd == "CTL00161" || vBtnCd == "CTL11076"){ // 담당자변경
        		alert("담당자변경 팝업 완료 시 연결 예정!!");
        		return;

        	}else if(vBtnCd == "CTL00326"){ // 설문응답완료
        		this.vStrSvcId  = "vhclEqpmntAplyStrg";
        		this.vStrSvcUrl = "vhclEqpmnt/vhclEqpmntAplyStrg.do";

        		this.dsDgstfnExmn.copyData(this.divForm.form.divDgstfnExmn.form.dsDgstfn);

        		for(var i = 0; i < this.dsDgstfnExmn.getRowCount(); i++){
        			// 설문여부 Y값인경우에만 넣어줌.
        			if(!this.gfnIsNull(this.dsDgstfnExmn.getColumn(i, "dgstfnExmnYn")) && this.dsDgstfnExmn.getColumn(i, "dgstfnExmnYn") == "Y"){
        				var dgstfnNo = this.dsDgstfnExmn.getColumn(i, "no");
        				var dgstfnCn = this.dsDgstfnExmn.getColumn(i, "dgstfnCn");
        				var dgstfnScr = this.dsDgstfnExmn.getColumn(i, "dgstfnScr");

        				// 만족도 조사 항목 데이터 세팅
        				switch(dgstfnNo){
        					case "1" : this.dsList.setColumn(0, "dgstfnArtclNm1", dgstfnScr); break;
        					case "2" : this.dsList.setColumn(0, "dgstfnArtclNm2", dgstfnScr); break;
        					case "3" : this.dsList.setColumn(0, "dgstfnArtclNm3", dgstfnScr); break;
        					case "4" : this.dsList.setColumn(0, "dgstfnExmnCn1", dgstfnCn); break;
        					case "5" : this.dsList.setColumn(0, "dgstfnExmnCn2", dgstfnCn); break;
        					case "6" : this.dsList.setColumn(0, "dgstfnExmnCn3", dgstfnCn); break;

        					default :

        						break;
        				}
        			}
        		}

        	}else{
        		return;

        	}

        	// 넘겨줄 데이터 세팅
        	this.dsList.setColumn(0, "jobCd", wfInfo.nextStepJobPrcsPrgrsSeCd);
        	this.dsList.setColumn(0, "aplySeCd", this.aplySeCd);
        	this.dsList.setColumn(0, "docCd", "TSPDOC620"); // 공통코드 TSPDOC620 : 차량/장비 등록 신청

        	// 시설운영마스터 데이터 세팅
        	if(!this.gfnIsNull(this.aplyNo)){
        		this.dsMst.setColumn(0, "aplyNo", this.aplyNo);

        	}
        	this.dsMst.setColumn(0, "taskCd"    , wfInfo.jobPrcsPrgrsSeCd        );  // 현재업무코드
        	this.dsMst.setColumn(0, "nextTaskCd", wfInfo.nextStepJobPrcsPrgrsSeCd);  // 다음업무코드

        	this.dsMst.setColumn(0, "aplySeCd", this.aplySeCd);  // 신청구분코드
        	this.dsMst.setColumn(0, "docCd", "TSPDOC620"); // 공통코드 TSPDOC620 : 차량/장비 등록 신청

        	var curDt = this.gfnGetDate("time");
        	if(this.gfnIsNull(this.dsList.getColumn(0, "aplyDt"))){
        		this.dsList.setColumn(0, "aplyDt", curDt);

        	}
        	if(this.gfnIsNull(this.dsMst.getColumn(0, "aplyDt"))){
        		this.dsMst.setColumn(0, "aplyDt", curDt);

        	}

        	// 종료, 미처리종료, 승인
        	if(vBtnCd == "CTL00831" || vBtnCd == "CTL00152" || vBtnCd == "CTL11079" || vBtnCd == "CTL00899" || vBtnCd == "CTL00154"){
        		// 종료일자 세팅
        		this.dsList.setColumn(0, "endDt", curDt);
        		this.dsMst.setColumn(0, "endDt", curDt);

        	}

        	// 접수
        	if(vBtnCd == "CTL00160" || vBtnCd == "CTL11075"){
        		if(this.gfnIsNull(this.dsList.getColumn(0, "bilgCd"))){
        			this.divForm.form.Div04.form.rdoBilgYn.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["과금여부 \n"]);
        			return;

        		}

        		// 접수일자 세팅
        		this.dsList.setColumn(0, "vhclInspRcptDt", curDt);
        		this.dsMst.setColumn(0, "rcptDt", curDt);

        	}

        	// 설문응답완료
        	if(vBtnCd == "CTL00326"){
        		this.dsList.setColumn(0, "dgstfnRspnsDt", curDt);
        		this.dsList.setColumn(0, "dgstfnRspnsYn", "1");

        	}

        	// 차량장비구분 없을때 차량장비코드 null로 넘겨줌
        	if(this.gfnIsNull(this.dsList.getColumn(0, "vhclEqpmntTypeCd"))){
        		this.dsList.setColumn(0, "vhclEqpmntSeCd", "");

        	}

        	// 안전검사대상여부 예가 아닐때 검사기관/신규검사일자 null로 넘겨줌.
        	if(this.dsList.getColumn(0, "safeInspTrgtYn") != "1"){
        		this.dsList.setColumn(0, "inspInstCd", "");
        		this.dsList.setColumn(0, "newInspYmd", "");

        	}

        	// 차량장비유형이 특장/특수차(AISVERVTY03) 이고 연료종류가 전기(AISVERFUE003)일때.
        	var tmpVhclType = this.dsList.getColumn(0, "vhclEqpmntTypeCd");
        	var tmpFuelKndCd = this.dsList.getColumn(0, "fuelKndCd");

        	if(tmpVhclType == "AISVERVTY03" && tmpFuelKndCd == "AISVERFUE003"){
        		// 공용충전기 사용여부가 예일때는 공용충전기미사용동의여부 비워줌.
        		if(this.dsList.getColumn(0, "ofcbzUseYn") == "1"){
        			this.dsList.setColumn(0, "ofcbzUnusdAgreYn", ""); // 공용충전기미사용동의여부 비워줌.

        		}else if(this.dsList.getColumn(0, "ofcbzUseYn") == "0"){
        			// 공용충전기 사용여부가 아니오 일때는 전기조업장비ID증빙서류, BATTERY ID, VEHICLE ID 비워줌.
        			// 전기조업장비ID증빙서류 파일있으면 삭제
        			this.cfnSetAtflInfo(this.RaonkUpload, this.divForm.form.Div02.form.grdElctyHdlEqpmntIdEvdncDcmnt).cfnDelAtfl();
        			this.dsList.setColumn(0, "batryId", ""); // BATTERY ID 비워줌.
        			this.dsList.setColumn(0, "vhcleId", ""); // VEHICLE ID 비워줌.

        		}else{
        			// 전기조업장비ID증빙서류 파일있으면 삭제
        			this.cfnSetAtflInfo(this.RaonkUpload, this.divForm.form.Div02.form.grdElctyHdlEqpmntIdEvdncDcmnt).cfnDelAtfl();
        			this.dsList.setColumn(0, "batryId", ""); // BATTERY ID 비워줌.
        			this.dsList.setColumn(0, "vhcleId", ""); // VEHICLE ID 비워줌.
        			this.dsList.setColumn(0, "ofcbzUnusdAgreYn", ""); // 공용충전기미사용동의여부 비워줌.

        		}

        	}else{
        		this.dsList.setColumn(0, "ofcbzUseYn", ""); // 공용충전기사용여부 비워줌.
        		// 전기조업장비ID증빙서류 파일있으면 삭제
        		this.cfnSetAtflInfo(this.RaonkUpload, this.divForm.form.Div02.form.grdElctyHdlEqpmntIdEvdncDcmnt).cfnDelAtfl();
        		this.dsList.setColumn(0, "batryId", ""); // BATTERY ID 비워줌.
        		this.dsList.setColumn(0, "vhcleId", ""); // VEHICLE ID 비워줌.
        		this.dsList.setColumn(0, "ofcbzUnusdAgreYn", ""); // 공용충전기미사용동의여부 비워줌.

        	}

        	// 안전장치의무부착차량여부 예가 아닐때 안전장치종류/안전장치사진 null로 넘겨줌.
        	if(this.dsList.getColumn(0, "safeDvcEsntlVhclYn") != "1"){
        		this.dsList.setColumn(0, "safeDvcKndCd", "");
        		// 안전장치사진 파일있으면 삭제
        		this.cfnSetAtflInfo(this.RaonkUpload, this.divForm.form.Div03.form.grdSafeDvcPhoto).cfnDelAtfl();

        	}else{ // 안전장치종류코드 세팅
        		var safeDiv = this.divForm.form.Div03.form.divSafeDvcKnd;

        		var sSafeDvcKndCd = "";

        		Array.from(safeDiv.form.components).forEach(oComp => {
        			// 선택 시 해당 코드값, 선택 안됐을때 0
        			if(oComp.value != "0"){
        				if(this.gfnIsNull(sSafeDvcKndCd)){
        					sSafeDvcKndCd = oComp.value;

        				}else{
        					sSafeDvcKndCd += "," + oComp.value;

        				}
        			}
        		});

        		this.dsList.setColumn(0, "safeDvcKndCd", sSafeDvcKndCd);

        		// 체크된 항목 중 기타가 없을때 안전장치기타종류명 지워줌.
        		if(sSafeDvcKndCd.indexOf("AISVERVHSVMHTP004") < 0){
        			this.dsList.setColumn(0, "safeDvcEtcKndNm", "");

        		}
        	}

        	// 수정된 내역이 있는지 체크
        	if(!this.gfnDsIsUpdated(this.dsList) && !this.gfnDsIsUpdated(this.dsAtfl) && !this.gfnDsIsUpdated(this.dsCnvyMttr)){
        		this.gfnAlertMsg("msg", "MSG_004", [""]);
        		return;

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

        	if(vBtnCd == "CTL01015"){ // 신청취소
        		this.gfnConfirmMsg("aplyCancelConfirm", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"], "", [vBtnNm]);

        	}else{
        		this.gfnConfirmMsg("save_confirm", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"], "", [vBtnNm]);

        	}
        }







        // /**************************************************************************
        //  * @name : cfnAddAtfl
        //  * @description : 첨부 파일 추가
        //  ***************************************************************************/
        // this.cfnAddAtfl = function(oFile) {
        // 	// 이미 첨부된 파일이 있으면 기존 파일 삭제
        // 	this.cfnDelAtfl(oFile.upcolid);
        //
        // 	// RaonkUpload에 컬럼ID 설정
        // 	this.RaonkUpload.SetFileCustomValue(-1, JSON.stringify({ "strCustomValue" : oFile.upcolid }));
        //
        //     // 첨부파일 DS에 추가
        // 	var nRow = this.dsAtfl.findRow("colId", oFile.upcolid);
        //         nRow = Math.max(nRow, 0) ? nRow : this.dsAtfl.addRow();
        //
        // 	this.dsAtfl.setColumn(nRow, "jobSeCd"      , "AIS"                 );  // 작업구분
        // 	this.dsAtfl.setColumn(nRow, "jobTycoSeCd"  , this.aplySeCd         );  // 작업공종구분코드
        // 	this.dsAtfl.setColumn(nRow, "aplcfmNo"     , ""                    );  // 신청서번호(서비스에서설정)
        // 	this.dsAtfl.setColumn(nRow, "atchFileNm"   , oFile.userdata.strName);  // 첨부파일명
        // 	this.dsAtfl.setColumn(nRow, "atchFileMngNo", ""                    );  // 첨부파일관리번호(Main화면(CST002M00)에서 파일 업로드 후 설정)
        // 	this.dsAtfl.setColumn(nRow, "colId"        , oFile.upcolid         );  // 컬럼ID
        // 	this.dsAtfl.setColumn(nRow, "atchSeCd"     , oFile.upatchsecd      );  // 첨부파일구분코드
        // 	this.dsAtfl.setColumn(nRow, "atchDtlSeCd"  , oFile.upatchdtlsecd   );  // 첨부파일상세구분코드
        // 	this.dsAtfl.setColumn(nRow, "fileSz"  	   , oFile.userdata.nSize  );  // 파일크기
        //
        // 	// 첨부 파일 표출용 DS 설정
        //     this.cfnSetAtflExprs( oFile.userdata.strName + '(' + oFile.userdata.nSize + ')'  // 파일풀명
        // 	                    , oFile.userdata.strName                                     // 원본파일명
        // 						, oFile.userdata.nSize                                       // 파일크기
        // 						, oFile.upcolid                                              // 컬럼ID
        // 						);
        // };
        //
        // /**************************************************************************
        //  * @name : cfnDelAtfl
        //  * @description : 첨부 파일 삭제
        //  ***************************************************************************/
        // this.cfnDelAtfl = function(colId) {
        //     // 존재하지 않으면 돌아감
        // 	if(this.gfnIsNull(colId) || this.gfnIsNull(this.dsFile.getColumn(0, colId + "_orgnlFileNm"))) { return; }
        //
        //     // RaonkUpload mergeFile 삭제
        //     var oRaonkUpload = this.RaonkUpload;
        // 	if(oRaonkUpload.GetListInfo().mergeFile) {
        // 	    oRaonkUpload.GetListInfo().mergeFile.forEach(function(v, i, o) {
        // 			if(v.customValue == colId) {
        // 				oRaonkUpload.SetSelectFile(i, '0');
        // 				oRaonkUpload.DeleteSelectedFile();
        // 			}
        // 		});
        // 	}
        //
        // 	// 첨부파일 삭제
        // 	this.dsAtfl.deleteRow(this.dsAtfl.findRow("colId", colId));
        //
        // 	// 첨부 파일 표출용 DS 설정
        //     this.cfnSetAtflExprs("", "", "", colId);
        // };
        //
        // /**************************************************************************
        //  * @name : cfnSetAtflExprs
        //  * @description : 첨부 파일 표출용 DS 설정
        //  ***************************************************************************/
        // this.cfnSetAtflExprs = function(fullName, orgnlFileNm, fileSz, colId) {
        // 	// 화면에 표출할 파일정보를 그리드에 설정
        // 	this.dsFile.setColumn(0, colId + "_fullName"   , fullName   );  // 파일풀명
        // 	this.dsFile.setColumn(0, colId + "_orgnlFileNm", orgnlFileNm);  // 원본파일명
        // 	this.dsFile.setColumn(0, colId + "_fileSz"     , fileSz     );  // 파일크기
        // 	this.dsFile.setColumn(0, colId + "_colId"      , this.gfnIsNull(fullName) ? "" : colId);  // 컬럼ID
        // };
        //
        // /**************************************************************************
        //  * @name : FileAtch_onclick
        //  * @description : 파일선택 버튼 클릭
        //  ***************************************************************************/
        // this.FileAtch_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        // 	// 첨부파일 선택 창 열기
        // 	this.RaonkUpload.OpenFileDialog();
        // };
        //
        // /**************************************************************************
        //  * @name : RaonkUpload_RAONKUPLOAD_CreationComplete
        //  * @description : 업로드 객체가 생성이 완료 시 발생하는 이벤트
        //  ***************************************************************************/
        // this.RaonkUpload_RAONKUPLOAD_CreationComplete = function(obj:nexacro.RaonkUpload,  paramObj:nexacro.RaonkUploadEventInfo)
        // {
        // 	// 업로드 솔루션이 초기 생성시 업로드 할 경로를 지정해야 한다.
        // 	// /CMM/YYYY/MM/DD/  <<== CMM은 업무별 폴더 지정이고 기본적으로 /년도/월/일 의 폴더 구조를 갖는다.
        // 	this.RaonkUpload.SetConfig('FolderNameRule', '/LIF/AIS/YYYY/MM/DD/');
        // };
        //
        // /**************************************************************************
        //  * @name : RaonkUpload_RAONKUPLOAD_BeforeAddFile
        //  * @description : 파일이 추가 되기 이전에 발생하는 이벤트
        //  ***************************************************************************/
        // this.RaonkUpload_RAONKUPLOAD_BeforeAddFile = function(obj:nexacro.RaonkUpload, paramObj:nexacro.RaonkUploadEventInfo)
        // {
        // 	return true;
        // };
        //
        // /**************************************************************************
        //  * @name : RaonkUpload_RAONKUPLOAD_AfterAddFile
        //  * @description : 파일이 추가 되기 이후에 발생하는 이벤트
        //  ***************************************************************************/
        // this.RaonkUpload_RAONKUPLOAD_AfterAddFile = function(obj:nexacro.RaonkUpload, e:nexacro.RaonkUploadEventInfo)
        // {
        //     e.upcolid       = this.getFocus().upcolid       || "";  // 컬럼ID
        // 	e.upatchsecd    = this.getFocus().upatchsecd    || "";  // 첨부파일구분코드
        // 	e.upatchdtlsecd = this.getFocus().upatchdtlsecd || "";  // 첨부파일상세구분코드
        //
        // 	// 첨부 파일 추가
        // 	this.cfnAddAtfl(e);
        // };
        //
        // /**************************************************************************
        //  * @name : RaonkUpload_RAONKUPLOAD_UploadComplete
        //  * @description : 업로드 완료 시 발생하는 이벤트
        //  ***************************************************************************/
        // this.RaonkUpload_RAONKUPLOAD_UploadComplete = function(obj:nexacro.RaonkUpload, e:nexacro.RaonkUploadEventInfo)
        // {
        // 	var allListArray = this.RaonkUpload.GetListInfo("json");
        // 	// 파일 업로드 후 첨부파일관리번호를 얻기 위한 함수
        // 	this.gfnUploadComplete(e.eventid, allListArray, "dsAtchRslt", "fnCallback");
        //
        // };
        //
        // /**************************************************************************
        //  * @name : RaonkUpload_RAONKUPLOAD_OnError
        //  * @description : 업로드 오류 시 발생하는 이벤트
        //  ***************************************************************************/
        // this.RaonkUpload_RAONKUPLOAD_OnError = function(obj:nexacro.RaonkUpload, paramObj:nexacro.RaonkUploadEventInfo)
        // {
        //     // 파일 업로드 중 오류가 발생했습니다!
        // 	this.gfnAlertMsg(this.RaonkUpload.name, "CST_002", [paramObj.userdata.strMessage]);
        // };
        //
        // /**************************************************************************
        //  * @name : dsAtfl_onload
        //  * @description : 첨부파일 dataset load 완료 시 호출
        //  ***************************************************************************/
        // this.dsAtfl_onload = function(obj:nexacro.NormalDataset,e:nexacro.DSLoadEventInfo)
        // {
        // 	// 데이터 조회 후 첨부파일 파일리스트에 셋팅
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
        // };
        //
        // /**************************************************************************
        //  * @name : grd_oncellclick
        //  * @description : 그리드 셀 클릭 시
        //  ***************************************************************************/
        // this.grd_oncellclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
        // {
        // 	var objDs = obj.getBindDataset();
        //
        // 	var objFileId = obj.getCellProperty("body", 0, "text").replace("bind:", "").replace("_fullName", "");
        //
        // 	// 그리드 내의 삭제버튼 클릭
        //     if(e.fromobject.name == "cellbutton") {
        // 		// 차량등록 신청/수정 일때만 삭제 가능하게 수정
        // 		if(this.jobCd == "TAS00092" || this.jobCd == "TAS00297"){
        // 			// 첨부 파일 삭제
        // 			this.cfnDelAtfl(objFileId);
        //
        // 		}
        //
        // 	}else{
        // 		// 해당 로우 찾기
        // 		var copyRow = this.dsAtfl.findRow("colId", objFileId);
        //
        // 		if(copyRow < 0){
        // 			return;
        //
        // 		}
        //
        // 		// dataset 초기화
        // 		if(this.dsAtflDown.getRowCount() > 0){
        // 			this.dsAtflDown.clearData();
        //
        // 		}
        //
        // 		// dataset copy
        // 		var nRow = this.dsAtflDown.addRow();
        //
        // 		this.dsAtflDown.copyRow(nRow, this.dsAtfl, copyRow);
        //
        // 		// 첨부파일 다운로드
        // 		this.gfnDownloadFile(this.RaonkUpload, this.dsAtflDown, e);
        //
        // 	}
        // };
        //
        // /**************************************************************************
        //  * @name : btnHstry_onclick
        //  * @description : 제원불러오기 버튼 클릭 시
        //  ***************************************************************************/
        // this.btnHstry_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        // 	alert("!! 제원불러오기 팝업 완성 후 추후에 작업 예정");
        // };


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

        	if(objNm == "btnElctyHdlEqpmntIdEvdncDcmntFile"){
        		objGrd = this.divForm.form.Div02.form.grdElctyHdlEqpmntIdEvdncDcmnt;

        	}else if(objNm == "btnCarRegctfFile"){
        		objGrd = this.divForm.form.Div03.form.grdCarRegctf;

        	}else if(objNm == "btnCarFrtsdPhotoFile"){
        		objGrd = this.divForm.form.Div03.form.grdCarFrtsdPhoto;

        	}else if(objNm == "btnCarFlkPhotoFile"){
        		objGrd = this.divForm.form.Div03.form.grdCarFlkPhoto;

        	}else if(objNm == "btnSafeDvcPhotoFile"){
        		objGrd = this.divForm.form.Div03.form.grdSafeDvcPhoto;

        	}else if(objNm == "btnNewInspRcdshtFile"){
        		objGrd = this.divForm.form.Div03.form.grdNewInspRcdsht;

        	}else if(objNm == "btnLsctFile"){
        		objGrd = this.divForm.form.Div03.form.grdLsct;

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
        	this.RaonkUpload.SetConfig('FolderNameRule', '/LIF/AIS/YYYY/MM/DD/');

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
        		// 신청서작성, 신청서보완 일때만 삭제 가능하게 수정
        		if(this.jobCd == "TAS00092" || this.jobCd == "TAS00297"){
        			// 첨부 파일 삭제
        			this.cfnSetAtflInfo(this.RaonkUpload, obj).cfnDelAtfl();

        		}
        	}
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
        		objDiv = this.divForm.form.Div01;
        		objTit = this.divForm.form.sub_tit01;

        	}else if(objNm == "btn01"){
        		objDiv = this.divForm.form.Div02;
        		objTit = this.divForm.form.sub_tit02;

        	}else if(objNm == "btn02"){
        		objDiv = this.divForm.form.Div03;
        		objTit = this.divForm.form.sub_tit03;

        	}else if(objNm == "btn03"){
        		objDiv = this.divForm.form.Div04;
        		objTit = this.divForm.form.sub_tit04;

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
        		posTop2 = 263;

        	}else{
        		posTop1 = 12;
        		posTop2 = 214;

        	}

        	this.divQuick.top = e.pos + posTop1;
        	this.divBtn.top = e.pos + posTop2;
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onvscroll",this.form_onvscroll,this);
            this.divForm.form.btnMinTitle.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.divInfoGuide.form.btnSchClose.addEventHandler("onclick",this.divInfoGuide_btnSchClose_onclick,this);
            this.divForm.form.btnMinAplyInfo.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.btnHstry.addEventHandler("onclick",this.btnHstry_onclick,this);
            this.divForm.form.btnMinAplcntInfo.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.Div02.form.cboVhclSe.addEventHandler("onitemchanged",this.cboVhclSe_onitemchanged,this);
            this.divForm.form.Div02.form.cboCarmdl.addEventHandler("onitemchanged",this.cbo00_onitemchanged,this);
            this.divForm.form.Div02.form.cboUsg.addEventHandler("onitemchanged",this.cbo00_onitemchanged,this);
            this.divForm.form.Div02.form.cboFuelKnd.addEventHandler("onitemchanged",this.cboFuelKnd_onitemchanged,this);
            this.divForm.form.Div02.form.rdoOfcbzUseYn.addEventHandler("onitemchanged",this.rdoOfcbzUseYn_onitemchanged,this);
            this.divForm.form.Div02.form.btnElctyHdlEqpmntIdEvdncDcmntFile.addEventHandler("onclick",this.FileAtch_onclick,this);
            this.divForm.form.Div02.form.grdElctyHdlEqpmntIdEvdncDcmnt.addEventHandler("oncellclick",this.grd_oncellclick,this);
            this.divForm.form.Div02.form.grdElctyHdlEqpmntIdEvdncDcmnt.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.btnMinSpfa.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.Div03.form.edtVhclTwt.addEventHandler("onchanged",this.edtVhcl_onchanged,this);
            this.divForm.form.Div03.form.edtMaxLdcpct.addEventHandler("onchanged",this.edtVhcl_onchanged,this);
            this.divForm.form.Div03.form.edtRdgNope.addEventHandler("onchanged",this.edtVhcl_onchanged,this);
            this.divForm.form.Div03.form.rdoSafeInspTrgtYn.addEventHandler("onitemchanged",this.rdoSafeInspTrgtYn_onitemchanged,this);
            this.divForm.form.Div03.form.rdoSafeDvcVhclYn.addEventHandler("onitemchanged",this.rdoSafeDvcVhclYn_onitemchanged,this);
            this.divForm.form.Div03.form.cboInspInst.addEventHandler("onitemchanged",this.cbo00_onitemchanged,this);
            this.divForm.form.Div03.form.btnCarRegctfFile.addEventHandler("onclick",this.FileAtch_onclick,this);
            this.divForm.form.Div03.form.grdCarRegctf.addEventHandler("oncellclick",this.grd_oncellclick,this);
            this.divForm.form.Div03.form.grdCarRegctf.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div03.form.btnCarFrtsdPhotoFile.addEventHandler("onclick",this.FileAtch_onclick,this);
            this.divForm.form.Div03.form.grdCarFrtsdPhoto.addEventHandler("oncellclick",this.grd_oncellclick,this);
            this.divForm.form.Div03.form.grdCarFrtsdPhoto.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div03.form.btnCarFlkPhotoFile.addEventHandler("onclick",this.FileAtch_onclick,this);
            this.divForm.form.Div03.form.grdCarFlkPhoto.addEventHandler("oncellclick",this.grd_oncellclick,this);
            this.divForm.form.Div03.form.grdCarFlkPhoto.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div03.form.btnSafeDvcPhotoFile.addEventHandler("onclick",this.FileAtch_onclick,this);
            this.divForm.form.Div03.form.grdSafeDvcPhoto.addEventHandler("oncellclick",this.grd_oncellclick,this);
            this.divForm.form.Div03.form.grdSafeDvcPhoto.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div03.form.btnNewInspRcdshtFile.addEventHandler("onclick",this.FileAtch_onclick,this);
            this.divForm.form.Div03.form.grdNewInspRcdsht.addEventHandler("oncellclick",this.grd_oncellclick,this);
            this.divForm.form.Div03.form.grdNewInspRcdsht.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div03.form.btnLsctFile.addEventHandler("onclick",this.FileAtch_onclick,this);
            this.divForm.form.Div03.form.grdLsct.addEventHandler("oncellclick",this.grd_oncellclick,this);
            this.divForm.form.Div03.form.grdLsct.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div03.form.divGrd00.form.Static00_00.addEventHandler("onclick",this.divForm_Div04_Static00_onclick,this);
            this.divForm.form.btnMinPrcsCn.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divQuick.form.btn00.addEventHandler("onclick",this.btnQuick_onclick,this);
            this.divQuick.form.btn01.addEventHandler("onclick",this.btnQuick_onclick,this);
            this.divQuick.form.btn02.addEventHandler("onclick",this.btnQuick_onclick,this);
            this.divQuick.form.btn03.addEventHandler("onclick",this.btnQuick_onclick,this);
            this.divBtn.form.btn00_00_00_00.addEventHandler("onclick",this.divBtn_btn00_00_onclick,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddFile",this.RaonkUpload_RAONKUPLOAD_AfterAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_CreationComplete",this.RaonkUpload_RAONKUPLOAD_CreationComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_UploadComplete",this.RaonkUpload_RAONKUPLOAD_UploadComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_OnError",this.RaonkUpload_RAONKUPLOAD_OnError,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeAddFile",this.RaonkUpload_RAONKUPLOAD_BeforeAddFile,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsMain_onvaluechanged,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsMain_onvaluechanged,this);
            this.dsMst.addEventHandler("onvaluechanged",this.dsMst_onvaluechanged,this);
            this.dsMst.addEventHandler("onload",this.dsMst_onload,this);
            this.dsAtfl.addEventHandler("onload",this.dsAtfl_onload,this);
            this.dsAtflDown.addEventHandler("onload",this.dsAtfl_onload,this);
        };
        this.loadIncludeScript("LIF070M00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
