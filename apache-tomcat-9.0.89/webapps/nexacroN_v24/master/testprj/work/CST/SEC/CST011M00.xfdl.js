(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST011M00");
            this.set_titletext("신청서작성(보호구역)(Step)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMst", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrNm\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno1\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno2\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno3\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnPstnDtlInptCn\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"pstnInfoRnb\" type=\"STRING\" size=\"256\"/><Column id=\"clmCustCd\" type=\"STRING\" size=\"256\"/><Column id=\"clmAddr\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptAplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptCtrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntHwrtInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtHwrtInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"docCd\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"curJobCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/><Column id=\"taskCd\" type=\"STRING\" size=\"256\"/><Column id=\"nextTaskCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"endCd\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"chgPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"chgPrcrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclFstVl\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclSecdVl\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclThrVl\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclFstCn\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclSecdCn\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclThrCn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAply", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"scrtyDgadsCmdtyUseBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"scrtyDgadsCmdtyUseEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"scrtyDgadsCmdtyUsePrpsCn\" type=\"STRING\" size=\"256\"/><Column id=\"prtcZoneDgadsCmdtyMngNoOtptRcplSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"useBzentySmYn\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoMngRbprsn1SmYn\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoNm\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoTelno\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoTelno1\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoTelno2\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoTelno3\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoFxno\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoMngRbprsn1Nm\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoMngRbprsn1MblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoMngRbprsn1MblTelno1\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoMngRbprsn1MblTelno2\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoMngRbprsn1MblTelno3\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoMngRbprsn1PrvcClctUtztnWtcsPath\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoMngRbprsn2SmYn\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoMngRbprsn2Nm\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoMngRbprsn2MblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoMngRbprsn2MblTelno1\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoMngRbprsn2MblTelno2\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoMngRbprsn2MblTelno3\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoMngRbprsn2PrvcClctUtztnWtcsPath\" type=\"STRING\" size=\"256\"/><Column id=\"actlUseCoMngRbprsn1SmYn\" type=\"STRING\" size=\"256\"/><Column id=\"actlUseCoNm\" type=\"STRING\" size=\"256\"/><Column id=\"actlUseCoTelno\" type=\"STRING\" size=\"256\"/><Column id=\"actlUseCoTelno1\" type=\"STRING\" size=\"256\"/><Column id=\"actlUseCoTelno2\" type=\"STRING\" size=\"256\"/><Column id=\"actlUseCoTelno3\" type=\"STRING\" size=\"256\"/><Column id=\"actlUseCoFxno\" type=\"STRING\" size=\"256\"/><Column id=\"actlUseCoMngRbprsn1Nm\" type=\"STRING\" size=\"256\"/><Column id=\"actlUseCoRbprsn1MblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"actlUseCoRbprsn1MblTelno1\" type=\"STRING\" size=\"256\"/><Column id=\"actlUseCoRbprsn1MblTelno2\" type=\"STRING\" size=\"256\"/><Column id=\"actlUseCoRbprsn1MblTelno3\" type=\"STRING\" size=\"256\"/><Column id=\"actlUseCoMngRbprsn1PrvcClctUtztnWtcsPath\" type=\"STRING\" size=\"256\"/><Column id=\"actlUseCoMngRbprsn2SmYn\" type=\"STRING\" size=\"256\"/><Column id=\"actlUseCoMngRbprsn2Nm\" type=\"STRING\" size=\"256\"/><Column id=\"actlUseCoRbprsn2MblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"actlUseCoRbprsn2MblTelno1\" type=\"STRING\" size=\"256\"/><Column id=\"actlUseCoRbprsn2MblTelno2\" type=\"STRING\" size=\"256\"/><Column id=\"actlUseCoRbprsn2MblTelno3\" type=\"STRING\" size=\"256\"/><Column id=\"actlUseCoMngRbprsn2PrvcClctUtztnWtcsPath\" type=\"STRING\" size=\"256\"/><Column id=\"dgadsCmdtyUseCmpanAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"rczNm\" type=\"STRING\" size=\"256\"/><Column id=\"crtYmd\" type=\"STRING\" size=\"256\"/><Column id=\"rprsvNm\" type=\"STRING\" size=\"256\"/><Column id=\"prvcClctEsntlAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"prvcTdptyPvsnAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"prvcUseChcAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"cnvyMttrCn\" type=\"STRING\" size=\"256\"/><Column id=\"aprvYn\" type=\"STRING\" size=\"256\"/><Column id=\"prtcZoneDgadsCmdtyStkrOtptYn\" type=\"STRING\" size=\"256\"/><Column id=\"stkrPrntrNm\" type=\"STRING\" size=\"256\"/><Column id=\"prtcZoneDgadsCmdtyStkrRcvYn\" type=\"STRING\" size=\"256\"/><Column id=\"stkrRcvYmd\" type=\"STRING\" size=\"256\"/><Column id=\"stkrRcvDt\" type=\"STRING\" size=\"256\"/><Column id=\"stkrRcvDt2\" type=\"STRING\" size=\"256\"/><Column id=\"prtcZoneDgadsCmdtyLaserMarkgEngvgYn\" type=\"STRING\" size=\"256\"/><Column id=\"laserMarkgEngvrNm\" type=\"STRING\" size=\"256\"/><Column id=\"prtcZoneDgadsCmdtyLaserMarkgRcvYn\" type=\"STRING\" size=\"256\"/><Column id=\"laserMarkgCmdtyTrnsfDt\" type=\"STRING\" size=\"256\"/><Column id=\"laserMarkgCmdtyYmd\" type=\"STRING\" size=\"256\"/><Column id=\"laserMarkgCmdtyDt2\" type=\"STRING\" size=\"256\"/><Column id=\"laserMarkgRcvDt\" type=\"STRING\" size=\"256\"/><Column id=\"laserMarkgRcvYmd\" type=\"STRING\" size=\"256\"/><Column id=\"laserMarkgRcvDt2\" type=\"STRING\" size=\"256\"/><Column id=\"laserMarkgCmdtyAcptnDayPrnmntDt\" type=\"STRING\" size=\"256\"/><Column id=\"laserMarkgCmdtyAcptnYmd\" type=\"STRING\" size=\"256\"/><Column id=\"laserMarkgCmdtyAcptnDt2\" type=\"STRING\" size=\"256\"/><Column id=\"stkrPrntrDt\" type=\"STRING\" size=\"256\"/><Column id=\"laserMarkgPrntrDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCsaf", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"sn\" type=\"STRING\" size=\"256\"/><Column id=\"cmdtyPhotoPath\" type=\"STRING\" size=\"256\"/><Column id=\"cmdtyNm\" type=\"STRING\" size=\"256\"/><Column id=\"thldQty\" type=\"STRING\" size=\"256\"/><Column id=\"unitVl\" type=\"STRING\" size=\"256\"/><Column id=\"mngNo\" type=\"STRING\" size=\"256\"/><Column id=\"spcfctVl\" type=\"STRING\" size=\"256\"/><Column id=\"mngPlcCn\" type=\"STRING\" size=\"256\"/><Column id=\"otptMthdSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"flieUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"maxSeq\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"rtnCancel\" type=\"STRING\" size=\"256\"/><Column id=\"prcsSeCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCnvyMttrCn", this);
            obj._setContents("<ColumnInfo><Column id=\"cnvyMttrCn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtfl", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplcfmNo\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"jobSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobTycoSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"atchSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"atchDtlSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"bsnsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"workId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtn\" type=\"STRING\" size=\"256\"/><Column id=\"strgFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTerm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sprvsn01AtflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsn01FullName\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsn01OrgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsn01Flpth\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsn01FileSz\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsn01FileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsn02AtflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsn02FullName\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsn02OrgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsn02Flpth\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsn02FileSz\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsn02FileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"actl01AtflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"actl01FullName\" type=\"STRING\" size=\"256\"/><Column id=\"actl01OrgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"actl01Flpth\" type=\"STRING\" size=\"256\"/><Column id=\"actl01FileSz\" type=\"STRING\" size=\"256\"/><Column id=\"actl01FileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"actl02AtflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"actl02FullName\" type=\"STRING\" size=\"256\"/><Column id=\"actl02OrgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"actl02Flpth\" type=\"STRING\" size=\"256\"/><Column id=\"actl02FileSz\" type=\"STRING\" size=\"256\"/><Column id=\"actl02FileUniqueId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtchRslt", this);
            obj._setContents("<ColumnInfo><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCmdtyFile", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"mngNo\" type=\"STRING\" size=\"256\"/><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"maxSeq\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCmdtyAtfl", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplcfmNo\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"jobSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobTycoSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"atchSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"atchDtlSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"bsnsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"workId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtn\" type=\"STRING\" size=\"256\"/><Column id=\"strgFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTerm\" type=\"STRING\" size=\"256\"/><Column id=\"maxSeq\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCmdtyAtchRslt", this);
            obj._setContents("<ColumnInfo><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWfInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMstCopy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrNm\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno1\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno2\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno3\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnPstnDtlInptCn\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"pstnInfoRnb\" type=\"STRING\" size=\"256\"/><Column id=\"clmCustCd\" type=\"STRING\" size=\"256\"/><Column id=\"clmAddr\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptAplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptCtrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntHwrtInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtHwrtInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"docCd\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"curJobCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/><Column id=\"taskCd\" type=\"STRING\" size=\"256\"/><Column id=\"nextTaskCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"endCd\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"chgPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"chgPrcrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclFstVl\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclSecdVl\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclThrVl\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclFstCn\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclSecdCn\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclThrCn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAplyCopy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"scrtyDgadsCmdtyUseBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"scrtyDgadsCmdtyUseEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"scrtyDgadsCmdtyUsePrpsCn\" type=\"STRING\" size=\"256\"/><Column id=\"prtcZoneDgadsCmdtyMngNoOtptRcplSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"useBzentySmYn\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoMngRbprsn1SmYn\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoNm\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoTelno\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoTelno1\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoTelno2\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoTelno3\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoFxno\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoMngRbprsn1Nm\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoMngRbprsn1MblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoMngRbprsn1MblTelno1\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoMngRbprsn1MblTelno2\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoMngRbprsn1MblTelno3\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoMngRbprsn1PrvcClctUtztnWtcsPath\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoMngRbprsn2SmYn\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoMngRbprsn2Nm\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoMngRbprsn2MblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoMngRbprsn2MblTelno1\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoMngRbprsn2MblTelno2\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoMngRbprsn2MblTelno3\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoMngRbprsn2PrvcClctUtztnWtcsPath\" type=\"STRING\" size=\"256\"/><Column id=\"actlUseCoMngRbprsn1SmYn\" type=\"STRING\" size=\"256\"/><Column id=\"actlUseCoNm\" type=\"STRING\" size=\"256\"/><Column id=\"actlUseCoTelno\" type=\"STRING\" size=\"256\"/><Column id=\"actlUseCoTelno1\" type=\"STRING\" size=\"256\"/><Column id=\"actlUseCoTelno2\" type=\"STRING\" size=\"256\"/><Column id=\"actlUseCoTelno3\" type=\"STRING\" size=\"256\"/><Column id=\"actlUseCoFxno\" type=\"STRING\" size=\"256\"/><Column id=\"actlUseCoMngRbprsn1Nm\" type=\"STRING\" size=\"256\"/><Column id=\"actlUseCoRbprsn1MblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"actlUseCoRbprsn1MblTelno1\" type=\"STRING\" size=\"256\"/><Column id=\"actlUseCoRbprsn1MblTelno2\" type=\"STRING\" size=\"256\"/><Column id=\"actlUseCoRbprsn1MblTelno3\" type=\"STRING\" size=\"256\"/><Column id=\"actlUseCoMngRbprsn1PrvcClctUtztnWtcsPath\" type=\"STRING\" size=\"256\"/><Column id=\"actlUseCoMngRbprsn2SmYn\" type=\"STRING\" size=\"256\"/><Column id=\"actlUseCoMngRbprsn2Nm\" type=\"STRING\" size=\"256\"/><Column id=\"actlUseCoRbprsn2MblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"actlUseCoRbprsn2MblTelno1\" type=\"STRING\" size=\"256\"/><Column id=\"actlUseCoRbprsn2MblTelno2\" type=\"STRING\" size=\"256\"/><Column id=\"actlUseCoRbprsn2MblTelno3\" type=\"STRING\" size=\"256\"/><Column id=\"actlUseCoMngRbprsn2PrvcClctUtztnWtcsPath\" type=\"STRING\" size=\"256\"/><Column id=\"dgadsCmdtyUseCmpanAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"rczNm\" type=\"STRING\" size=\"256\"/><Column id=\"crtYmd\" type=\"STRING\" size=\"256\"/><Column id=\"rprsvNm\" type=\"STRING\" size=\"256\"/><Column id=\"prvcClctEsntlAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"prvcTdptyPvsnAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"prvcUseChcAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"cnvyMttrCn\" type=\"STRING\" size=\"256\"/><Column id=\"aprvYn\" type=\"STRING\" size=\"256\"/><Column id=\"prtcZoneDgadsCmdtyStkrOtptYn\" type=\"STRING\" size=\"256\"/><Column id=\"stkrPrntrNm\" type=\"STRING\" size=\"256\"/><Column id=\"prtcZoneDgadsCmdtyStkrRcvYn\" type=\"STRING\" size=\"256\"/><Column id=\"stkrRcvYmd\" type=\"STRING\" size=\"256\"/><Column id=\"stkrRcvDt\" type=\"STRING\" size=\"256\"/><Column id=\"stkrRcvDt2\" type=\"STRING\" size=\"256\"/><Column id=\"prtcZoneDgadsCmdtyLaserMarkgEngvgYn\" type=\"STRING\" size=\"256\"/><Column id=\"laserMarkgEngvrNm\" type=\"STRING\" size=\"256\"/><Column id=\"prtcZoneDgadsCmdtyLaserMarkgRcvYn\" type=\"STRING\" size=\"256\"/><Column id=\"laserMarkgCmdtyTrnsfDt\" type=\"STRING\" size=\"256\"/><Column id=\"laserMarkgCmdtyYmd\" type=\"STRING\" size=\"256\"/><Column id=\"laserMarkgCmdtyDt2\" type=\"STRING\" size=\"256\"/><Column id=\"laserMarkgRcvDt\" type=\"STRING\" size=\"256\"/><Column id=\"laserMarkgRcvYmd\" type=\"STRING\" size=\"256\"/><Column id=\"laserMarkgRcvDt2\" type=\"STRING\" size=\"256\"/><Column id=\"laserMarkgCmdtyAcptnDayPrnmntDt\" type=\"STRING\" size=\"256\"/><Column id=\"laserMarkgCmdtyAcptnYmd\" type=\"STRING\" size=\"256\"/><Column id=\"laserMarkgCmdtyAcptnDt2\" type=\"STRING\" size=\"256\"/><Column id=\"stkrPrntrDt\" type=\"STRING\" size=\"256\"/><Column id=\"laserMarkgPrntrDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCsafCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"sn\" type=\"STRING\" size=\"256\"/><Column id=\"cmdtyPhotoPath\" type=\"STRING\" size=\"256\"/><Column id=\"cmdtyNm\" type=\"STRING\" size=\"256\"/><Column id=\"thldQty\" type=\"STRING\" size=\"256\"/><Column id=\"unitVl\" type=\"STRING\" size=\"256\"/><Column id=\"mngNo\" type=\"STRING\" size=\"256\"/><Column id=\"spcfctVl\" type=\"STRING\" size=\"256\"/><Column id=\"mngPlcCn\" type=\"STRING\" size=\"256\"/><Column id=\"otptMthdSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"flieUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"maxSeq\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCnvyMttrCnCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"cnvyMttrCn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtflCopy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplcfmNo\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"jobSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobTycoSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"atchSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"atchDtlSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"bsnsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"workId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtn\" type=\"STRING\" size=\"256\"/><Column id=\"strgFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTerm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCmdtyAtflCopy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplcfmNo\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"jobSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobTycoSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"atchSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"atchDtlSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"bsnsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"workId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtn\" type=\"STRING\" size=\"256\"/><Column id=\"strgFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTerm\" type=\"STRING\" size=\"256\"/><Column id=\"maxSeq\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTempSeCd", this);
            obj._setContents("<ColumnInfo><Column id=\"tempPrcsSeCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Tab("tabStep","0","divTitle:10",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tabStep);
            obj.set_text("신청자정보");
            obj.set_formscrollbartype("default autoindicator");
            this.tabStep.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tabStep);
            obj.set_text("신청정보");
            obj.set_formscrollbartype("default autoindicator");
            this.tabStep.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.tabStep);
            obj.set_text("보안위해물품보유");
            obj.set_formscrollbartype("default autoindicator");
            this.tabStep.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.tabStep);
            obj.set_text("개인정보수집이용동의");
            obj.set_formscrollbartype("default autoindicator");
            this.tabStep.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.tabStep);
            obj.set_text("위해물품목록등록");
            obj.set_formscrollbartype("default autoindicator");
            this.tabStep.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage6",this.tabStep);
            obj.set_text("전달사항");
            obj.set_formscrollbartype("default autoindicator");
            this.tabStep.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage7",this.tabStep);
            obj.set_text("출력");
            this.tabStep.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage8",this.tabStep);
            obj.set_text("만족도 조사");
            this.tabStep.addChild(obj.name, obj);

            obj = new Div("divForm01","0","120",null,null,"60","60",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_formscrollbartype("auto autoindicator");
            obj.set_url("work::CST/SEC/CST011M00_01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divBtn","0",null,null,"60","60","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_CkBg");
            obj.set_formscrollbartype("auto none");
            this.addChild(obj.name, obj);

            obj = new Div("divForm02","0","50",null,null,"60","60",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_positionstep("1");
            obj.set_url("work::CST/SEC/CST011M00_02.xfdl");
            obj.set_formscrollbartype("auto autoindicator");
            this.addChild(obj.name, obj);

            obj = new Div("divForm03","0","50",null,null,"60","60",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div01");
            obj.set_positionstep("2");
            obj.set_url("work::CST/SEC/CST011M00_03.xfdl");
            obj.set_formscrollbartype("auto autoindicator");
            this.addChild(obj.name, obj);

            obj = new Div("divForm04","0","50",null,null,"60","60",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div02");
            obj.set_positionstep("3");
            obj.set_url("work::CST/SEC/CST011M00_04.xfdl");
            obj.set_formscrollbartype("auto autoindicator");
            this.addChild(obj.name, obj);

            obj = new Div("divForm05","0","50",null,null,"60","60",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div03");
            obj.set_positionstep("4");
            obj.set_url("work::CST/SEC/CST011M00_05.xfdl");
            obj.set_formscrollbartype("auto autoindicator");
            this.addChild(obj.name, obj);

            obj = new Div("divForm06","0","50",null,null,"60","60",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.set_positionstep("5");
            obj.set_url("work::CST/SEC/CST011M00_06.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","1270","60","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("임시팝업");
            this.addChild(obj.name, obj);

            obj = new Div("divForm07","0","50",null,null,"60","60",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("div00");
            obj.set_positionstep("6");
            obj.set_url("work::CST/SEC/CST011M00_07.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divForm08","0","50",null,null,"60","60",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("div00");
            obj.set_positionstep("7");
            obj.set_url("work::CST/SEC/CST011M00_08.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabStep.Tabpage1
            obj = new Layout("default","",0,0,this.tabStep.Tabpage1.form,function(p){});
            this.tabStep.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabStep.Tabpage2
            obj = new Layout("default","",0,0,this.tabStep.Tabpage2.form,function(p){});
            this.tabStep.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabStep.Tabpage3
            obj = new Layout("default","",0,0,this.tabStep.Tabpage3.form,function(p){});
            this.tabStep.Tabpage3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabStep.Tabpage4
            obj = new Layout("default","",0,0,this.tabStep.Tabpage4.form,function(p){});
            this.tabStep.Tabpage4.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabStep.Tabpage5
            obj = new Layout("default","",0,0,this.tabStep.Tabpage5.form,function(p){});
            this.tabStep.Tabpage5.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabStep.Tabpage6
            obj = new Layout("default","",0,0,this.tabStep.Tabpage6.form,function(p){});
            this.tabStep.Tabpage6.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabStep.Tabpage7.form
            obj = new Layout("default","",0,0,this.tabStep.Tabpage7.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.tabStep.Tabpage7.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.tabStep.Tabpage7.form
            obj = new Layout("mobile","",0,0,this.tabStep.Tabpage7.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.tabStep.Tabpage7.form.addLayout(obj.name, obj);
            //-- Default Layout : this.tabStep.Tabpage8.form
            obj = new Layout("default","",0,0,this.tabStep.Tabpage8.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.tabStep.Tabpage8.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.tabStep.Tabpage8.form
            obj = new Layout("mobile","",0,0,this.tabStep.Tabpage8.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.tabStep.Tabpage8.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm01
            obj = new Layout("default","",0,0,this.divForm01.form,function(p){});
            this.divForm01.form.addLayout(obj.name, obj);

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
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("10");
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
            obj.set_type("horizontal");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            this.divBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm02
            obj = new Layout("default","",0,0,this.divForm02.form,function(p){});
            this.divForm02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm03
            obj = new Layout("default","",0,0,this.divForm03.form,function(p){});
            this.divForm03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm04
            obj = new Layout("default","",0,0,this.divForm04.form,function(p){});
            this.divForm04.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm05
            obj = new Layout("default","",0,0,this.divForm05.form,function(p){});
            this.divForm05.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm06
            obj = new Layout("default","",0,0,this.divForm06.form,function(p){});
            this.divForm06.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm07
            obj = new Layout("default","",0,0,this.divForm07.form,function(p){});
            this.divForm07.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm08
            obj = new Layout("default","",0,0,this.divForm08.form,function(p){});
            this.divForm08.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("신청서작성(보호구역)(Step)");

                p.divTitle.set_taborder("9");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);

                p.tabStep.set_taborder("1");
                p.tabStep.set_tabindex("0");
                p.tabStep.move("0","divTitle:10",null,"50","60",null);

                p.tabStep.Tabpage1.set_text("신청자정보");
                p.tabStep.Tabpage1.set_formscrollbartype("default autoindicator");

                p.tabStep.Tabpage2.set_text("신청정보");
                p.tabStep.Tabpage2.set_formscrollbartype("default autoindicator");

                p.tabStep.Tabpage3.set_text("보안위해물품보유");
                p.tabStep.Tabpage3.set_formscrollbartype("default autoindicator");

                p.tabStep.Tabpage4.set_text("개인정보수집이용동의");
                p.tabStep.Tabpage4.set_formscrollbartype("default autoindicator");

                p.tabStep.Tabpage5.set_text("위해물품목록등록");
                p.tabStep.Tabpage5.set_formscrollbartype("default autoindicator");

                p.tabStep.Tabpage6.set_text("전달사항");
                p.tabStep.Tabpage6.set_formscrollbartype("default autoindicator");

                p.tabStep.Tabpage7.set_text("출력");

                p.tabStep.Tabpage8.set_text("만족도 조사");

                p.divForm01.set_taborder("0");
                p.divForm01.set_text("Div00");
                p.divForm01.set_formscrollbartype("auto autoindicator");
                p.divForm01.set_url("work::CST/SEC/CST011M00_01.xfdl");
                p.divForm01.move("0","120",null,null,"60","60");

                p.divBtn.set_taborder("2");
                p.divBtn.set_text("Div00");
                p.divBtn.set_cssclass("div_WF_CkBg");
                p.divBtn.set_formscrollbartype("auto none");
                p.divBtn.move("0",null,null,"60","60","0");

                p.divForm02.set_taborder("3");
                p.divForm02.set_text("Div00");
                p.divForm02.set_positionstep("1");
                p.divForm02.set_url("work::CST/SEC/CST011M00_02.xfdl");
                p.divForm02.set_formscrollbartype("auto autoindicator");
                p.divForm02.move("0","50",null,null,"60","60");

                p.divForm03.set_taborder("4");
                p.divForm03.set_text("Div01");
                p.divForm03.set_positionstep("2");
                p.divForm03.set_url("work::CST/SEC/CST011M00_03.xfdl");
                p.divForm03.set_formscrollbartype("auto autoindicator");
                p.divForm03.move("0","50",null,null,"60","60");

                p.divForm04.set_taborder("5");
                p.divForm04.set_text("Div02");
                p.divForm04.set_positionstep("3");
                p.divForm04.set_url("work::CST/SEC/CST011M00_04.xfdl");
                p.divForm04.set_formscrollbartype("auto autoindicator");
                p.divForm04.move("0","50",null,null,"60","60");

                p.divForm05.set_taborder("6");
                p.divForm05.set_text("Div03");
                p.divForm05.set_positionstep("4");
                p.divForm05.set_url("work::CST/SEC/CST011M00_05.xfdl");
                p.divForm05.set_formscrollbartype("auto autoindicator");
                p.divForm05.move("0","50",null,null,"60","60");

                p.divForm06.set_taborder("7");
                p.divForm06.set_text("Div00");
                p.divForm06.set_positionstep("5");
                p.divForm06.set_url("work::CST/SEC/CST011M00_06.xfdl");
                p.divForm06.move("0","50",null,null,"60","60");

                p.btn00.set_taborder("8");
                p.btn00.set_text("임시팝업");
                p.btn00.move("1270","60","120","40",null,null);

                p.divForm07.set_taborder("10");
                p.divForm07.set_text("div00");
                p.divForm07.set_positionstep("6");
                p.divForm07.set_url("work::CST/SEC/CST011M00_07.xfdl");
                p.divForm07.move("0","50",null,null,"60","60");

                p.divForm08.set_taborder("11");
                p.divForm08.set_text("div00");
                p.divForm08.set_positionstep("7");
                p.divForm08.set_url("work::CST/SEC/CST011M00_08.xfdl");
                p.divForm08.move("0","50",null,null,"60","60");
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("8");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divTitle.move("0","0",null,"50","0",null);

                p.tabStep.move("20","divTitle:10",null,"50","20",null);

                p.divForm01.move("20","120",null,null,"20","0");

                p.divForm02.move("20","50",null,null,"20","0");

                p.divForm03.move("20","50",null,null,"20","0");

                p.divForm04.move("20","50",null,null,"20","0");

                p.divForm06.move("20","50",null,null,"20","0");

                p.divBtn.move("0",null,null,"60","0","0");
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            obj.set_stepcount("8");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
            this._addPreloadList("fdl","work::CST/SEC/CST011M00_01.xfdl");
            this._addPreloadList("fdl","work::CST/SEC/CST011M00_02.xfdl");
            this._addPreloadList("fdl","work::CST/SEC/CST011M00_03.xfdl");
            this._addPreloadList("fdl","work::CST/SEC/CST011M00_04.xfdl");
            this._addPreloadList("fdl","work::CST/SEC/CST011M00_05.xfdl");
            this._addPreloadList("fdl","work::CST/SEC/CST011M00_06.xfdl");
            this._addPreloadList("fdl","work::CST/SEC/CST011M00_07.xfdl");
            this._addPreloadList("fdl","work::CST/SEC/CST011M00_08.xfdl");
        };
        
        // User Script
        this.addIncludeScript("CST011M00.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CST011M00.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	CST011M00.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/08/08
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/08/08			이규철    					최초생성
        *******************************************************************************
        */
        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvApp = nexacro.getApplication();
        this.fvJobTycoSeCd = "TSPSEC001"; // 51.위해물품및위험물사용신청
        this.fvJobTycoSeNm = "";
        this.fvCurDate = this.gfnGetDate();

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	//팝업으로 여는 경우 popSecDetail
        	if(this.getOwnerFrame().view == "popup") {
        		this.divTitle.destroy();  							// 프로그램 타이틀 제거
        		this.tabStep.top = 10;    							// tap 위치 조정
        		this.divForm01.top = parseInt(this.tabStep.top)
        			               + parseInt(this.tabStep.height)
        						   + 10;    						// 신청자 정보 div 위치 조정
        		this.btn00.visible = false;	//임시버튼 숨기기
        		this.resetScroll();
        	}

        	//팝업, 일반메뉴 공통
        	this.gfnFormOnload(obj); //필수함수

        	this.stepitemsize = 0; // 스텝이미지사이즈

        	this.fnInit();

        	// 화면에서 넘어온것이 존재하면 처리하자
        	// this.fnSearch();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	//TODO..
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
        	//TODO..
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.fnSearch = function (sAplyNo) {

        	trace("조회진행 sAplyNo = " + sAplyNo);

        	//결과(신청번호) 데이터셋이자 조회용 데이터셋
        	this.dsResult.clearData();
         	this.dsResult.addRow();
         	this.dsResult.setColumn(0, "aplyNo", sAplyNo);

        	//첨부파일 관련 세팅
        	this.dsFile.clearData();
        	this.dsFile.addRow();

        	//복사관련 데이터셋 clear
        	this.dsMstCopy.clearData();
        	this.dsAplyCopy.clearData();
        	this.dsCsafCopy.clearData();
        	this.dsCnvyMttrCnCopy.clearData();
        	this.dsAtflCopy.clearData();
        	this.dsCmdtyAtflCopy.clearData();

        	var strSvcId    = "search";
        	var strSvcUrl   = "cst/sec/selectPrtcZoneCmdtyList.do";
        	var inData      = "dsIn=dsResult";
        	var outData     = "dsMst=dsMst dsAply=dsAply dsCsaf=dsCsafList dsCnvyMttrCn=dsCnvyMttrCnList dsAtfl=dsAtfl dsCmdtyAtfl=dsCmdtyAtfl";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync); 		// 비동기통신 여부 [생략가능]
        }

        //저장 : 2024-12-03 첨부파일관련 dsAtfl=dsAtfl:U dsCmdtyAtfl=dsCmdtyAtfl:U 로 변경(기존 A)
        this.fnSave = function (sPrcsSeCd) {
        	var strSvcId    = "save";
        	var strSvcUrl   = "";
        	var inData      = "";
        	var outData     = "dsResult=dsResult";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	//inData설정(일반 저장과 재신청작성 구분)
        	if(this.gfnIsNull(sPrcsSeCd)) {
        		sPrcsSeCd = this.dsTempSeCd.getColumn(0, "tempPrcsSeCd");
        	}
        	if("CTL10776:재신청작성,CTL10964:재신청작성".indexOf(sPrcsSeCd) != -1) {
        		trace("재신청작성 진입!!!!");

        		inData      = "dsWfInfo=" + this.FV_DS_OTPT_WORK_FLOW_INFO + ":U"  	   // WorkFlow 정보
        	                + "dsMst=dsMstCopy:A"                                      // 시설운영마스터, 위해물품 마스터 : 복사
        					+ "dsAply=dsAplyCopy:A"                                    // 위해물품 사용신청 : 복사
        					+ "dsCsaf=dsCsafCopy:A"                                    // 위해물품 신청물품 : 복사
        					+ "dsCnvyMttrCn=dsCnvyMttrCnCopy:A"                        // 전달사항(공통) : 복사(내용 세팅 안 함)
        					+ "dsAtfl=dsAtflCopy:U"                                    // 위해물품 사용신청 첨부파일(동의서) : 복사
        					+ "dsCmdtyAtfl=dsCmdtyAtflCopy:U";                         // 위해물품 신청물품 첨부파일(물품사진) : 복사
        		strSvcUrl   = "cst/sec/insertPrtcZoneCmdtyList.do";
        	} else if("CTL10773:신청취소".indexOf(sPrcsSeCd) != -1) {
        		trace("신청취소 진입!!!!");
        		inData      = "dsWfInfo=" + this.FV_DS_OTPT_WORK_FLOW_INFO + ":U"  // WorkFlow 정보
        	                + "dsMst=dsMst:A"                                      // 시설운영마스터, 위해물품 마스터
        					+ "dsAply=dsAply:A"                                    // 위해물품 사용신청
        					+ "dsCsaf=dsCsaf:A"                                    // 위해물품 신청물품
        					+ "dsCnvyMttrCn=dsCnvyMttrCn:A"                        // 전달사항(공통)
        					+ "dsAtfl=dsAtfl:U"                                    // 위해물품 사용신청 첨부파일(동의서)
        					+ "dsCmdtyAtfl=dsCmdtyAtfl:U";                         // 위해물품 신청물품 첨부파일(물품사진)
        		strSvcUrl   = "cst/sec/deletePrtcZoneCmdtyList.do";
        	} else {

        		inData      = "dsWfInfo=" + this.FV_DS_OTPT_WORK_FLOW_INFO + ":U"  // WorkFlow 정보
        	                + "dsMst=dsMst:A"                                      // 시설운영마스터, 위해물품 마스터
        					+ "dsAply=dsAply:A"                                    // 위해물품 사용신청
        					+ "dsCsaf=dsCsaf:A"                                    // 위해물품 신청물품
        					+ "dsCnvyMttrCn=dsCnvyMttrCn:A"                        // 전달사항(공통)
        					+ "dsAtfl=dsAtfl:U"                                    // 위해물품 사용신청 첨부파일(동의서)
        					+ "dsCmdtyAtfl=dsCmdtyAtfl:U";                         // 위해물품 신청물품 첨부파일(물품사진)
        		strSvcUrl   = "cst/sec/insertPrtcZoneCmdtyList.do";
        	}

        	trace("fnSave [sPrcsSeCd] = " + sPrcsSeCd);
        	trace("fnSave [strSvcUrl] = " + strSvcUrl);

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync); 		// 비동기통신 여부 [생략가능]

        }

        //첨부파일(위해물품 사용신청 정,부 첨부파일) : 2024-12-03
        this.fnFileTransfer = function () {

        	var obj = { "thumnail"   : "Y"        // 썸네일 생성여부(첨부파일 중 이미지 파일이 있는 경우 "Y" 이면 썸네일 파일 생성)
        			  , "bsnsSeCd"   : "TSPSEC"   // 업무구분코드(보호구역위해물품)
        			  , "prgrmId"    : this.name  // 프로그램ID (화면 ID)
        	};

        	trace("fnFileTransfer 진입");
        	this.divForm03.form.RaonkUpload.AddFormData('params', JSON.stringify(obj));
        	this.divForm03.form.RaonkUpload.Transfer();
        }

        //첨부파일(위해물품 목록 첨부파일) : 2024-12-04
        this.fnFileTransferDtl = function () {

        	var obj = { "thumnail"   : "Y"        // 썸네일 생성여부(첨부파일 중 이미지 파일이 있는 경우 "Y" 이면 썸네일 파일 생성)
        			  , "bsnsSeCd"   : "TSPSEC"   // 업무구분코드(보호구역위해물품)
        			  , "prgrmId"    : this.name  // 프로그램ID (화면 ID)
        	};

        	trace("fnFileTransferDtl 진입");
        	this.divForm05.form.RaonkUpload.AddFormData('params', JSON.stringify(obj));
        	this.divForm05.form.RaonkUpload.Transfer();
        }

        //재신청 첨부파일(위해물품 사용신청 정,부 첨부파일)
        this.fnReFileTransfer = function () {

        	var obj = { "thumnail"   : "Y"        // 썸네일 생성여부(첨부파일 중 이미지 파일이 있는 경우 "Y" 이면 썸네일 파일 생성)
        			  , "bsnsSeCd"   : "TSPSEC"   // 업무구분코드(보호구역위해물품)
        			  , "prgrmId"    : this.name  // 프로그램ID (화면 ID)
        	};

        	trace("fnReFileTransfer 진입");
        	this.gvCopyFileBool = true;
        	trace("fnReFileTransfer gvCopyFileBool = " + this.gvCopyFileBool);
        	this.divForm03.form.RaonkUpload.AddFormData('params', JSON.stringify(obj));
        	this.divForm03.form.RaonkUpload.Transfer();
        }

        //재신청 첨부파일(위해물품 목록 첨부파일)
        this.fnReFileTransferDtl = function () {

        	var obj = { "thumnail"   : "Y"        // 썸네일 생성여부(첨부파일 중 이미지 파일이 있는 경우 "Y" 이면 썸네일 파일 생성)
        			  , "bsnsSeCd"   : "TSPSEC"   // 업무구분코드(보호구역위해물품)
        			  , "prgrmId"    : this.name  // 프로그램ID (화면 ID)
        	};

        	trace("fnReFileTransferDtl 진입");
        	this.gvCopyFileBool = true;
        	trace("fnReFileTransferDtl gvCopyFileBool = " + this.gvCopyFileBool);
        	this.divForm05.form.RaonkUpload.AddFormData('params', JSON.stringify(obj));
        	this.divForm05.form.RaonkUpload.Transfer();
        }

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        ******************************************************************************************************************************/
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "search": //조회
        			trace("조회 callback 진입!");

        			this.dsAply_oncolumnchanged(this.dsAply, {columnid : "useBzentySmYn", newvalue : this.dsAply.getColumn(0, "useBzentySmYn")});

        			const dsOtpt = this[this.FV_DS_OTPT_WORK_FLOW_INFO];
        			const oBtnForm = this.FV_ARGS_WORK_FLOW_INFO.crtTrgt.form;

        			for (let i=0; i<dsOtpt.getRowCount(); i++) {
        				const oBtn = oBtnForm[dsOtpt.getColumn(i, "prcsSeCd")]
        				oBtnForm.removeChild(oBtn.name);
        				oBtn.destroy();
        			}

        			//하단 버튼 세팅
        			this.cfnBtnCrt({ crtTrgt:this.divBtn, lnkgEvnt:this.Button_onclick, inqCnd : { jobPrcsPrgrsSeCd: this.gfnNvl(this.dsMst.getColumn(0, "jobCd"), "TAS00070") } });

        			//버튼 관련 visible 처리
        			this.fnSetBtn();

        			//신청번호 영역 표현
        			this.divForm01.form.fnSetAplyNo();

        			//신청자와동일, 동일하지 않음 셋팅
        			this.divForm03.form.fnSmYnVisible("search");

        			//위해물품목록 그리드에 파일과 관련된 orgnlFileNm 생성-조회 시 컬럼으로 가져오지 않아서 화면에서 생성
        			this.dsCsaf.addColumn("orgnlFileNm", "string");

        			//전달사항 그리드 표현
        			this.fnCnvyMttrCn();

        			//탭의 위치는 가장 처음의 신청자 정보로
        			this.setStepIndex(0);

        			//조회 시 상태값에 따라 readonly 설정
        			//담당자접수(TAS00072)-접수, 회수 버튼 존재 일 때는 모두 readonly
        			if(this.dsMst.getColumn(0, "jobCd") == "TAS00072") {
        				// [출력] 탭, [만족도 조사] 탭 숨기기
        				this.fnSetTabVisible();

        				//컴포넌트 readonly 설정 함수
        				this.fnCompReadOnly("btnDownSample");

        			} else if(this.dsMst.getColumn(0, "jobCd") == "TAS00075") {
        				//종료(TAS00075)-종료코드가 TSPCLO010 정상종료, TSPCLO020 대리등록 정상종료 일 때는 설정 해제
        				if(this.dsMst.getColumn(0, "endCd") == "TSPCLO010" || this.dsMst.getColumn(0, "endCd") == "TSPCLO020") {
        					trace("정상종료");
        					//정상종료 시 출력탭 설정
        					this.fnSetStepCloseChk();

        					//컴포넌트 readonly 설정 함수
        					this.fnCompReadOnly("btnDownSample");
        				} else {
        					// [출력] 탭, [만족도 조사] 탭 숨기기
        					this.fnSetTabVisible();

        					//컴포넌트 readonly 설정 함수
        					this.fnCompReadOnly("btnDownSample");

        				}

        			} else if(this.dsMst.getColumn(0, "jobCd") == "TAS00073" || this.dsMst.getColumn(0, "jobCd") == "TAS00485") {
        				// [출력] 탭, [만족도 조사] 탭 숨기기
        				this.fnSetTabVisible();

        				//위해물품검토, 현업확인 일 때에는 전달사항만 입력가능하도록 함
        				//컴포넌트 readonly 설정 함수
        				this.fnCompReadOnly("btnDownSample,txtCnvyMttrCn");

        			} else if(this.dsMst.getColumn(0, "jobCd") == "TAS00293") {
        				//만족도 조사(출력정보 입력여부 확인)
        				this.fnSetStepPrtcChk();

        				//컴포넌트 readonly 설정 함수
        				this.fnCompReadOnly("btnDownSample");
        			} else {
        				// [출력] 탭, [만족도 조사] 탭 숨기기
        				this.fnSetTabVisible();

        				//컴포넌트 readonly 설정 해제
        				this.fnCompNoneReadOnly();

        				//(컴포넌트 readonly 설정 해제 이후 다시)신청자와동일, 동일하지 않음 셋팅
        				this.divForm03.form.fnSmYnVisible("search");
        			}

        			break;

        		case "getAplySeNm" :  // 공통코드(신청구분)
        			this.fvJobTycoSeNm = this.cfnGvbkAplySeNm();

        			// 자식화면 함수를 호출한다.
        			for (let i=1; i<=this.tabStep.getTabpageCount(); i++) {

        				this["divForm0" + i].form.fnInit();
        			};

        			// this.divFrom.form.fnInit();

        			break;

        		case this.divForm03.form.RaonkUpload.RAONKUPLOAD_UploadComplete.name :
        			trace("2024-12-03 파일업로드 변경사항 적용 : divForm03");

        			// 파일 업로드 결과를 첨부파일 데이터셋에 설정
        			var sTempPrcsSeCd = this.dsTempSeCd.getColumn(0, "tempPrcsSeCd");
        			if("CTL10776:재신청작성,CTL10964:재신청작성".indexOf(sTempPrcsSeCd) != -1) {
        				trace("CTL10776:재신청작성,CTL10964:재신청작성 UploadComplete");
        				//재신청작성일 때
        				for(var i = 0; i < this.dsAtchRslt.rowcount; i++) {
        					trace("재신청작성 dsAtchRslt " + i + " : (atflMngNo) " + this.dsAtchRslt.getColumn(i, "atflMngNo"));
        					trace("재신청작성 dsAtchRslt " + i + " : (colId) " + this.dsAtchRslt.getColumn(i, "colId"));
        					// 첨부파일관리번호
        					var colId = this.dsAtchRslt.getColumn(i, "colId");
        					this.dsAtflCopy.setColumn(this.dsAtflCopy.findRow("colId", colId), "atflMngNo", this.dsAtchRslt.getColumn(i, "atflMngNo"));
        					if(colId == "sprvsn01OrgnlFileNm") {
        						//주관회사관리책임자1개인정보수집및이용동의서경로
        						this.dsAplyCopy.setColumn(0, "sprvsnCoMngRbprsn1PrvcClctUtztnWtcsPath", this.dsAtchRslt.getColumn(i, "atflMngNo"));  // 첨부파일관리번호
        					} else if(colId == "sprvsn02OrgnlFileNm") {
        						//주관회사관리책임자2개인정보수집및이용동의서경로
        						this.dsAplyCopy.setColumn(0, "sprvsnCoMngRbprsn2PrvcClctUtztnWtcsPath", this.dsAtchRslt.getColumn(i, "atflMngNo"));  // 첨부파일관리번호
        					} else if(colId == "actl01OrgnlFileNm") {
        						//실제사용회사관리책임자1개인정보수집및이용동의서경로
        						this.dsAplyCopy.setColumn(0, "actlUseCoMngRbprsn1PrvcClctUtztnWtcsPath", this.dsAtchRslt.getColumn(i, "atflMngNo"));  // 첨부파일관리번호
        					} else if(colId == "actl02OrgnlFileNm") {
        						//실제사용회사관리책임자2개인정보수집및이용동의서경로
        						this.dsAplyCopy.setColumn(0, "actlUseCoMngRbprsn2PrvcClctUtztnWtcsPath", this.dsAtchRslt.getColumn(i, "atflMngNo"));  // 첨부파일관리번호
        					}
        				}

        				/*
        				if (this.gfnDsIsUpdated(this.dsCmdtyAtflCopy)) {
        					this.fnReFileTransferDtl();
        				} else {
        					// 저장
        					this.fnSave();
        				}
        				*/
        				//divForm03의 RaonkUpload 처리하지 못해서 Dtl을 무조건 진행하도록 함
        				this.fnReFileTransferDtl();

        			} else {
        				//재신청작성 외
        				for(var i = 0; i < this.dsAtchRslt.rowcount; i++) {
        					// 첨부파일관리번호
        					var colId = this.dsAtchRslt.getColumn(i, "colId");
        					this.dsAtfl.setColumn(this.dsAtfl.findRow("colId", colId), "atflMngNo", this.dsAtchRslt.getColumn(i, "atflMngNo"));
        					if(colId == "sprvsn01OrgnlFileNm") {
        						//주관회사관리책임자1개인정보수집및이용동의서경로
        						this.dsAply.setColumn(0, "sprvsnCoMngRbprsn1PrvcClctUtztnWtcsPath", this.dsAtchRslt.getColumn(i, "atflMngNo"));  // 첨부파일관리번호
        					} else if(colId == "sprvsn02OrgnlFileNm") {
        						//주관회사관리책임자2개인정보수집및이용동의서경로
        						this.dsAply.setColumn(0, "sprvsnCoMngRbprsn2PrvcClctUtztnWtcsPath", this.dsAtchRslt.getColumn(i, "atflMngNo"));  // 첨부파일관리번호
        					} else if(colId == "actl01OrgnlFileNm") {
        						//실제사용회사관리책임자1개인정보수집및이용동의서경로
        						this.dsAply.setColumn(0, "actlUseCoMngRbprsn1PrvcClctUtztnWtcsPath", this.dsAtchRslt.getColumn(i, "atflMngNo"));  // 첨부파일관리번호
        					} else if(colId == "actl02OrgnlFileNm") {
        						//실제사용회사관리책임자2개인정보수집및이용동의서경로
        						this.dsAply.setColumn(0, "actlUseCoMngRbprsn2PrvcClctUtztnWtcsPath", this.dsAtchRslt.getColumn(i, "atflMngNo"));  // 첨부파일관리번호
        					}
        				}

        				if (this.gfnDsIsUpdated(this.dsCmdtyAtfl)) {
        					this.fnFileTransferDtl();
        				} else {
        					// 저장
        					this.fnSave();
        				}
        			}

        			break;

        		case "dtlFile" :
        			trace("2024-12-05 파일업로드 변경사항 적용 : divForm05");

        			// 파일 업로드 결과를 첨부파일 데이터셋에 설정
        			var sTempPrcsSeCd = this.dsTempSeCd.getColumn(0, "tempPrcsSeCd");
        			if("CTL10776:재신청작성,CTL10964:재신청작성".indexOf(sTempPrcsSeCd) != -1) {
        				trace("CTL10776:재신청작성,CTL10964:재신청작성 dtlFile");
        				//재신청작성의 목록 파일일 때
        				for(var i = 0; i < this.dsCmdtyAtchRslt.rowcount; i++) {
        					trace("재신청작성 dsCmdtyAtchRslt " + i + " : (atflMngNo) " + this.dsCmdtyAtchRslt.getColumn(i, "atflMngNo"));
        					trace("재신청작성 dsCmdtyAtchRslt " + i + " : (colId) " + this.dsCmdtyAtchRslt.getColumn(i, "colId"));
        					// 첨부파일관리번호
        					var colId = this.dsCmdtyAtchRslt.getColumn(i, "colId");
        					if(colId == "sprvsn01OrgnlFileNm") {
        						this.dsAtflCopy.setColumn(this.dsAtflCopy.findRow("colId", colId), "atflMngNo", this.dsCmdtyAtchRslt.getColumn(i, "atflMngNo"));
        						//주관회사관리책임자1개인정보수집및이용동의서경로
        						this.dsAplyCopy.setColumn(0, "sprvsnCoMngRbprsn1PrvcClctUtztnWtcsPath", this.dsCmdtyAtchRslt.getColumn(i, "atflMngNo"));  // 첨부파일관리번호
        					} else if(colId == "sprvsn02OrgnlFileNm") {
        						this.dsAtflCopy.setColumn(this.dsAtflCopy.findRow("colId", colId), "atflMngNo", this.dsCmdtyAtchRslt.getColumn(i, "atflMngNo"));
        						//주관회사관리책임자2개인정보수집및이용동의서경로
        						this.dsAplyCopy.setColumn(0, "sprvsnCoMngRbprsn2PrvcClctUtztnWtcsPath", this.dsCmdtyAtchRslt.getColumn(i, "atflMngNo"));  // 첨부파일관리번호
        					} else if(colId == "actl01OrgnlFileNm") {
        						this.dsAtflCopy.setColumn(this.dsAtflCopy.findRow("colId", colId), "atflMngNo", this.dsCmdtyAtchRslt.getColumn(i, "atflMngNo"));
        						//실제사용회사관리책임자1개인정보수집및이용동의서경로
        						this.dsAplyCopy.setColumn(0, "actlUseCoMngRbprsn1PrvcClctUtztnWtcsPath", this.dsCmdtyAtchRslt.getColumn(i, "atflMngNo"));  // 첨부파일관리번호
        					} else if(colId == "actl02OrgnlFileNm") {
        						this.dsAtflCopy.setColumn(this.dsAtflCopy.findRow("colId", colId), "atflMngNo", this.dsCmdtyAtchRslt.getColumn(i, "atflMngNo"));
        						//실제사용회사관리책임자2개인정보수집및이용동의서경로
        						this.dsAplyCopy.setColumn(0, "actlUseCoMngRbprsn2PrvcClctUtztnWtcsPath", this.dsCmdtyAtchRslt.getColumn(i, "atflMngNo"));  // 첨부파일관리번호
        					} else {
        						this.dsCmdtyAtflCopy.setColumn(this.dsCmdtyAtflCopy.findRow("colId", this.dsCmdtyAtchRslt.getColumn(i, "colId")), "atflMngNo", this.dsCmdtyAtchRslt.getColumn(i, "atflMngNo"));
        						this.dsCsafCopy.setColumn(this.dsCsafCopy.findRow("sn", this.dsCmdtyAtchRslt.getColumn(i, "colId")), "cmdtyPhotoPath", this.dsCmdtyAtchRslt.getColumn(i, "atflMngNo"));  // 물품사진경로:첨부파일관리번호
        					}

        				}


        			} else {
        				//재신청작성 외 목록 파일
        				for(var i = 0; i < this.dsCmdtyAtchRslt.rowcount; i++) {
        					// 첨부파일관리번호
        					this.dsCmdtyAtfl.setColumn(this.dsCmdtyAtfl.findRow("colId", this.dsCmdtyAtchRslt.getColumn(i, "colId")), "atflMngNo", this.dsCmdtyAtchRslt.getColumn(i, "atflMngNo"));
        					this.dsCsaf.setColumn(this.dsCsaf.findRow("sn", this.dsCmdtyAtchRslt.getColumn(i, "colId")), "cmdtyPhotoPath", this.dsCmdtyAtchRslt.getColumn(i, "atflMngNo"));  // 물품사진경로:첨부파일관리번호
        				}
        			}

                    // 저장
        			this.fnSave();

        			break;

        		case "save" :
        			//정상적으로 처리되었습니다.
        			this.gfnAlertMsg("saveMsg", "CST_003");

        			//저장 후 조회를 하거나 readonly 설정을 함
        			//this.fnCompReadOnly();

        			const sAplyNo = this.dsResult.getColumn(0, "aplyNo");
        			const sRtnCancel = this.dsResult.getColumn(0, "rtnCancel");
        			const sPrcsSeCd = this.dsResult.getColumn(0, "prcsSeCd");
        			trace("save callback(sAplyNo) = " + sAplyNo);
        			trace("save callback(sRtnCancel) = " + sRtnCancel);
        			trace("save callback(sPrcsSeCd) = " + sPrcsSeCd);

        			if (!this.gfnIsNull(sRtnCancel)) {
        				if(this.getOwnerFrame().view == "popup") {
        					//팝업일 때 현재 팝업창 닫기
        					this.close();
        				}
        			} else {
        				trace("신청취소가 아니면서 신청번호를 리턴받은 경우");
        				//신청취소가 아니면서 신청번호를 리턴받은 경우
        				//팝업으로 여는 경우 popSecDetail
        				if(this.getOwnerFrame().view == "popup") {
        					trace("팝업일 때");
        					//팝업일 때(재신청작성(CTL10776, CTL10964)) : 파일업로드 재세팅 위해 화면 reload
        					if(sPrcsSeCd == "CTL10776" || sPrcsSeCd == "CTL10964") {
        						if (!this.gfnIsNull(sAplyNo)) {
        							this.getOwnerFrame().pvAplyNo = sAplyNo;
        							this.reload();
        							trace("reload 후 sAplyNo = " + sAplyNo);
        						}
        					} else if(sPrcsSeCd == "CTL00771" || sPrcsSeCd == "CTL10770") {
        						//팝업일 때(임시 저장(CTL00771, CTL10770)일 때에는 조회)
        						if (!this.gfnIsNull(sAplyNo)) {
        							this.fnSearch(sAplyNo);
        						}
        					} else {
        						//팝업일 때(위의 상태 외에)현재 팝업창 닫기
        						//this.close();		//여기!! 팝업 닫기 없이 현재 상태 그대로
        					}

        				} else {
        					trace("팝업이 아닌 메인에서 저장한 경우");
        					//팝업이 아닐 때
        					//임시 저장일 때에는 저장한 내용 조회
        					if(sPrcsSeCd == "CTL00771") {
        						if (!this.gfnIsNull(sAplyNo)) {
        							this.fnSearch(sAplyNo);
        						}
        					} else {
        						//임시 저장 외의 저장, 종료 시에는 초기화
        						this.fnInit();
        						//탭의 위치는 가장 처음의 신청자 정보로
        						this.setStepIndex(0);
        					}
        				}
        			}
        			break;

        		default :
        			break;
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function () {

        	this.gvUserId = this.fvApp.gdsUser.getColumn(0,"userId");
        	this.gvUserNm = this.fvApp.gdsUser.getColumn(0,"userNm");
        	this.gvCoId   = this.fvApp.gdsUser.getColumn(0,"coId");
        	this.gvCoNm   = this.fvApp.gdsUser.getColumn(0,"coNm");
        	this.gvTelNo  = this.fvApp.gdsUser.getColumn(0,"userMblTelno");
        	this.gvDeptId = this.fvApp.gdsUser.getColumn(0,"deptId");			// 부서코드
        	this.gvDeptNm = this.fvApp.gdsUser.getColumn(0,"deptNm");			// 부서명
        	this.gvTelNo2 = this.fvApp.gdsUser.getColumn(0,"userTelno");		// 전화번호(회사번호)

        	// 마스터
        	this.dsMst.clearData();
        	this.dsMst.addRow();

        	// 신청내역
        	this.dsAply.clearData();
        	this.dsAply.addRow();

        	// 전달사항
        	this.dsCnvyMttrCn.clearData();
        	this.dsCnvyMttrCn.addRow();
        	//전달사항 그리드 표현
        	this.divForm06.form.fnGridSize();

        	// 위해물품 목록
        	this.dsCsaf.clearData();

        	// 파일업로드 관련 데이터셋
        	this.dsAtfl.clearData();
        	this.dsFile.clearData();
        	this.dsFile.addRow();
        	this.dsAtchRslt.clearData();
        	this.dsCmdtyFile.clearData();
        	this.dsCmdtyFile.addRow();
        	this.dsCmdtyAtfl.clearData();
        	this.dsCmdtyAtchRslt.clearData();

        	// 보호구역위해물품 > 위해물품및위험품사용신청 > 신청및보완 > 신청및보완(하단버튼 설정)
        	this.cfnBtnCrt({ crtTrgt:this.divBtn, lnkgEvnt:this.Button_onclick, inqCnd : { jobPrcsPrgrsSeCd: this.gfnNvl(this.dsMst.getColumn(0, "jobCd"), "TAS00070") } });

        	// 명칭
        	this.cfnGetAplySeNm({ id:"getAplySeNm", cbf:"fnCallback", aplySeCd:this.fvJobTycoSeCd });

        	// 초기설정
        	this.dsAply_oncolumnchanged(this.dsAply, {newvalue : ""});

        	// 작업공종
        	this.dsMst.setColumn(0, "aplySeCd", this.fvJobTycoSeCd);

        	// 위해물품사용 준수사항동의여부
        	this.dsAply.setColumn(0, "dgadsCmdtyUseCmpanAgreYn", "N");

        	// 팝업이면 실행
        	if(this.getOwnerFrame().view == "popup") {
        		var sAplyNo = this.getOwnerFrame().pvAplyNo;

        		//팝업으로 넘겨준 값으로 조회
        		this.fnSearch(sAplyNo);
        	} else {
        		trace("main일 때 탭 숨기기");
        		// [출력] 탭, [만족도 조사] 탭 숨기기
        		this.fnSetTabVisible();
        	}
        }

        // 전체 validation
        this.fnValidateAll = function (sPrcsSeCd) {
        	// 필수항목정의, + 스탭인덱스
        	let arrEssCols;
        	// 컬럼id, 컬럼명, 컴포넌트,
        	// ************************** 신청자정보 **************************
        	arrEssCols = [];
        	arrEssCols.push({type : "required", colId : "mblTelno1", colNm : "휴대폰번호", compId : this.divForm01.form.edtMblTelNo1, step : 0});
        	arrEssCols.push({type : "required", colId : "mblTelno2", colNm : "휴대폰번호", compId : this.divForm01.form.edtMblTelNo2, step : 0});
        	arrEssCols.push({type : "required", colId : "mblTelno3", colNm : "휴대폰번호", compId : this.divForm01.form.edtMblTelNo3, step : 0});
         	arrEssCols.push({type : "required,maxlengthb:500", colId : "cstrnPstnDtlInptCn", colNm : "공사위치 상세입력", compId : this.divForm01.form.edtCstrnPstnDtlInptCn, step : 0});
        	if (!this.fnDoNextValidate(this.dsMst, arrEssCols, sPrcsSeCd)) return false;

         	// ************************** 신청정보 **************************
        	arrEssCols = [];
        	arrEssCols.push({type : "required", colId : "scrtyDgadsCmdtyUseBgngYmd", colNm : "보안위해물품 사용시작일", compId : this.divForm02.form.calScrtyDgadsCmdtyUseBgngYmd, step : 1});
        	arrEssCols.push({type : "required", colId : "scrtyDgadsCmdtyUseEndYmd", colNm : "보안위해물품 사용종료일", compId : this.divForm02.form.calScrtyDgadsCmdtyUseEndYmd, step : 1});
        	arrEssCols.push({type : "required,maxlengthb:500", colId : "scrtyDgadsCmdtyUsePrpsCn", colNm : "사용목적", compId : this.divForm02.form.taScrtyDgadsCmdtyUsePrpsCn, step : 1});
        	arrEssCols.push({type : "required", colId : "prtcZoneDgadsCmdtyMngNoOtptRcplSeCd", colNm : "보호구역위해물품 관리번호출력물 수령지", compId : this.divForm02.form.rdoPrtcZoneDgadsCmdtyMngNoOtptRcplSeCd, step : 1});
        	arrEssCols.push({type : "required", colId : "useBzentySmYn", colNm : "사용업체 동일여부", compId : this.divForm02.form.rdoUseBzentySmYn, step : 1});

        	// ************************** 보안위해물품보유 **************************
        	arrEssCols.push({type : "required", colId : "sprvsnCoMngRbprsn1SmYn", colNm : "주관사 관리책임자(정)", compId : this.divForm03.form.raSprvsnCoMngRbprsn1SmYn, step : 2});
        	arrEssCols.push({type : "required,maxlengthb:100", colId : "sprvsnCoNm", colNm : "주관사 회사명", compId : this.divForm03.form.edtSprvsnCoNm, step : 2});
        	arrEssCols.push({type : "required,maxlengthb:100", colId : "sprvsnCoDeptNm", colNm : "주관사 부서명", compId : this.divForm03.form.edtSprvsnCoDeptNm, step : 2});
        	arrEssCols.push({type : "required", colId : "sprvsnCoTelno1", colNm : "주관사 회사번호", compId : this.divForm03.form.cboSprvsnCoTelno1, step : 2});
        	arrEssCols.push({type : "required,minlengthb:3", colId : "sprvsnCoTelno2", colNm : "주관사 회사번호", compId : this.divForm03.form.edtSprvsnCoTelno2, step : 2});
        	arrEssCols.push({type : "required,minlengthb:4", colId : "sprvsnCoTelno3", colNm : "주관사 회사번호", compId : this.divForm03.form.edtSprvsnCoTelno3, step : 2});
        	arrEssCols.push({type : "required,maxlengthb:100", colId : "sprvsnCoMngRbprsn1Nm", colNm : "주관사 관리책임자(정)", compId : this.divForm03.form.edtSprvsnCoMngRbprsn1Nm, step : 2});
        	arrEssCols.push({type : "required", colId : "sprvsnCoMngRbprsn1MblTelno1", colNm : "주관사 휴대전화번호(정)", compId : this.divForm03.form.cboSprvsnCoMngRbprsn1MblTelNo1, step : 2});
        	arrEssCols.push({type : "required,minlengthb:3", colId : "sprvsnCoMngRbprsn1MblTelno2", colNm : "주관사 휴대전화번호(정)", compId : this.divForm03.form.edtSprvsnCoMngRbprsn1MblTelNo2, step : 2});
        	arrEssCols.push({type : "required,minlengthb:4", colId : "sprvsnCoMngRbprsn1MblTelno3", colNm : "주관사 휴대전화번호(정)", compId : this.divForm03.form.edtSprvsnCoMngRbprsn1MblTelNo3, step : 2});
        	// 주관사 관리책임자(정) :: 신청자정보와동일하지않음 인 경우 => 따로
        	// arrEssCols.push({type : "conreq:sprvsnCoMngRbprsn1SmYn^0", colId : "sprvsnCoMngRbprsn1MblTelno3", colNm : "주관사 휴대전화번호(정)", compId : this.divForm03.form.edtSprvsnCoMngRbprsn1MblTelNo3, step : 2});

        	arrEssCols.push({type : "required", colId : "sprvsnCoMngRbprsn2SmYn", colNm : "주관사 관리책임자(부)", compId : this.divForm03.form.raSprvsnCoMngRbprsn2SmYn, step : 2});
        	arrEssCols.push({type : "required,maxlengthb:100", colId : "sprvsnCoMngRbprsn2Nm", colNm : "주관사 관리책임자(부)", compId : this.divForm03.form.edtSprvsnCoMngRbprsn2Nm, step : 2});
        	arrEssCols.push({type : "required", colId : "sprvsnCoMngRbprsn2MblTelno1", colNm : "주관사 휴대전화번호(부)", compId : this.divForm03.form.cboSprvsnCoMngRbprsn2MblTelNo1, step : 2});
        	arrEssCols.push({type : "required,minlengthb:3", colId : "sprvsnCoMngRbprsn2MblTelno2", colNm : "주관사 휴대전화번호(부)", compId : this.divForm03.form.edtSprvsnCoMngRbprsn2MblTelNo2, step : 2});
        	arrEssCols.push({type : "required,minlengthb:4", colId : "sprvsnCoMngRbprsn2MblTelno3", colNm : "주관사 휴대전화번호(부)", compId : this.divForm03.form.edtSprvsnCoMngRbprsn2MblTelNo3, step : 2});
        	// 주관사 관리책임자(부) :: 신청자정보와동일하지않음 인 경우 => 따로
        	// arrEssCols.push({type : "conreq:sprvsnCoMngRbprsn2SmYn^0", colId : "sprvsnCoMngRbprsn1MblTelno3", colNm : "주관사 휴대전화번호(정)", compId : this.divForm03.form.edtSprvsnCoMngRbprsn1MblTelNo3, step : 2});

        	// 실제사용자 :: 사용업체동일여부 "아니요" 인경우 설정한다.
        	if (this.dsAply.getColumn(0, "useBzentySmYn") == "N") {
        		arrEssCols.push({type : "required", colId : "actlUseCoMngRbprsn1SmYn", colNm : "실제사용자 관리책임자(정)", compId : this.divForm03.form.raActlUseCoMngRbprsn1SmYn, step : 2});
        		arrEssCols.push({type : "required", colId : "actlUseCoTelno1", colNm : "실제사용자 회사번호", compId : this.divForm03.form.cboActlUseCoTelno1, step : 2});
        		arrEssCols.push({type : "required,minlengthb:3", colId : "actlUseCoTelno2", colNm : "실제사용자 회사번호", compId : this.divForm03.form.edtActlUseCoTelno2, step : 2});
        		arrEssCols.push({type : "required,minlengthb:4", colId : "actlUseCoTelno3", colNm : "실제사용자 회사번호", compId : this.divForm03.form.edtActlUseCoTelno3, step : 2});
        		arrEssCols.push({type : "required,maxlengthb:100", colId : "actlUseCoNm", colNm : "실제사용자 회사명", compId : this.divForm03.form.edtActlUseCoNm, step : 2});
        		arrEssCols.push({type : "required,maxlengthb:100", colId : "actlUseCoMngRbprsn1Nm", colNm : "실제사용자 관리책임자(정)", compId : this.divForm03.form.edtActlUseCoMngRbprsn1Nm, step : 2});
        		arrEssCols.push({type : "required", colId : "actlUseCoRbprsn1MblTelno1", colNm : "실제사용자 휴대전화번호(정)", compId : this.divForm03.form.cboActlUseCoRbprsn1MblTelno1, step : 2});
        		arrEssCols.push({type : "required,minlengthb:3", colId : "actlUseCoRbprsn1MblTelno2", colNm : "실제사용자 휴대전화번호(정)", compId : this.divForm03.form.edtActlUseCoRbprsn1MblTelno2, step : 2});
        		arrEssCols.push({type : "required,minlengthb:4", colId : "actlUseCoRbprsn1MblTelno3", colNm : "실제사용자 휴대전화번호(정)", compId : this.divForm03.form.edtActlUseCoRbprsn1MblTelno3, step : 2});

        		// 주관사 관리책임자(정) :: 신청자정보와동일하지않음 인 경우 => 따로
         		//arrEssCols.push({type : "conreq:sprvsnCoMngRbprsn1SmYn^0", colId : "sprvsnCoMngRbprsn1MblTelno3", colNm : "주관사 휴대전화번호(정)", compId : this.divForm03.form.edtSprvsnCoMngRbprsn1MblTelNo3, step : 2});

        		arrEssCols.push({type : "required", colId : "actlUseCoMngRbprsn2SmYn", colNm : "주관사 관리책임자(부)", compId : this.divForm03.form.raActlUseCoMngRbprsn2SmYn, step : 2});
        		arrEssCols.push({type : "required,maxlengthb:100", colId : "actlUseCoMngRbprsn2Nm", colNm : "실제사용자 관리책임자(부)", compId : this.divForm03.form.edtActlUseCoMngRbprsn2Nm, step : 2});
        		arrEssCols.push({type : "required", colId : "actlUseCoRbprsn2MblTelno1", colNm : "실제사용자 휴대전화번호(부)", compId : this.divForm03.form.cboActlUseCoRbprsn2MblTelno1, step : 2});
        		arrEssCols.push({type : "required,minlengthb:3", colId : "actlUseCoRbprsn2MblTelno2", colNm : "실제사용자 휴대전화번호(부)", compId : this.divForm03.form.edtActlUseCoRbprsn2MblTelno2, step : 2});
        	 	arrEssCols.push({type : "required,minlengthb:4", colId : "actlUseCoRbprsn2MblTelno3", colNm : "실제사용자 휴대전화번호(부)", compId : this.divForm03.form.edtActlUseCoRbprsn2MblTelno3, step : 2});

        		// 주관사 관리책임자(부) :: 신청자정보와동일하지않음 인 경우 => 따로
        		//arrEssCols.push({type : "conreq:sprvsnCoMngRbprsn2SmYn^0", colId : "sprvsnCoMngRbprsn1MblTelno3", colNm : "주관사 휴대전화번호(정)", compId : this.divForm03.form.edtSprvsnCoMngRbprsn1MblTelNo3, step : 2});
        	}

        	// 위해물품사용 준수사항동의여부는 "동의함"으로 필수이다.
        	arrEssCols.push({type : "reqVal:Y^동의함", colId : "dgadsCmdtyUseCmpanAgreYn", colNm : "위해물품사용 준수사항동의여부", compId : this.divForm03.form.raDgadsCmdtyUseCmpanAgreYn, step : 2});

        	// ************************** 개인정보수입이용동의 탭 **************************
        	arrEssCols.push({type : "reqVal:Y^동의함", colId : "prvcClctEsntlAgreYn", colNm : "개인정보 수집 동의여부", compId : this.divForm04.form.raPrvcClctEsntlAgreYn, step : 3});

        	if (!this.fnDoNextValidate(this.dsAply, arrEssCols, sPrcsSeCd)) return false;

        	//사용시작일과 종료일 다시 한번 체크(재신청에서 데이터가 넘어온 경우 날짜체크 등 안맞는 경우 발생할 수 있어서 한번 더 체크)
        	if (!this.fnDateChkValidate(this.dsAply, arrEssCols, sPrcsSeCd)) return false;

        	// ************************** 위해물품목록등록 탭 **************************
        	if (this.dsCsaf.getRowCount() == 0) {
        		//fnCompSetFocus.call(this, 4);
        		this.setStepIndex(4);
        		this.divForm05.form.divGrd.form.grdCsafList.setFocus();

        		this.gfnAlertMsg("msg", "MSG_011", ["입력된 위해물품 내역이 없습니다."]);
        		return false;
        	}

        	arrEssCols = [];
        	// 순번 sn number 3, 물품명 cmdtyNm var 100, 총보유수량 thldQty 10, 3, 단위 unitVl var 20, 규격 spcfctVl var 20, 보관장소 mngPlcCn var 4000, 출력방법 otptMthdSeCd var 20
        	arrEssCols.push({type : "required,maxlengthb:22", colId : "sn", colNm : "순번", compId : this.divForm05.form.divGrd.form.grdCsafList, step : 4});
        	arrEssCols.push({type : "required,maxlengthb:100", colId : "cmdtyNm", colNm : "물품명", compId : this.divForm05.form.divGrd.form.grdCsafList, step : 4});
        	arrEssCols.push({type : "required,maxlengthb:10", colId : "thldQty", colNm : "총보유수량", compId : this.divForm05.form.divGrd.form.grdCsafList, step : 4});
        	arrEssCols.push({type : "required,maxlengthb:20", colId : "unitVl", colNm : "단위", compId : this.divForm05.form.divGrd.form.grdCsafList, step : 4});
        	arrEssCols.push({type : "required,maxlengthb:20", colId : "spcfctVl", colNm : "규격", compId : this.divForm05.form.divGrd.form.grdCsafList, step : 4});
        	arrEssCols.push({type : "required,maxlengthb:4000", colId : "mngPlcCn", colNm : "보관장소", compId : this.divForm05.form.divGrd.form.grdCsafList, step : 4});
        	arrEssCols.push({type : "required,maxlengthb:20", colId : "otptMthdSeCd", colNm : "출력방법", compId : this.divForm05.form.divGrd.form.grdCsafList, step : 4});

        	if (!this.fnDoNextValidate(this.dsCsaf, arrEssCols, sPrcsSeCd)) return false;

        	//순번의 유니크한 값 체크
        	if (!this.fnUniqValidate()) return false;

        	return true;
        }

        // 전체 validation
        this.fnValidateFile = function (sPrcsSeCd) {
        	// 주관사 관리책임자(정)
        	if (this.dsAply.getColumn(0, "sprvsnCoMngRbprsn1SmYn") != "Y") {
        		if (this.gfnIsNull(this.dsFile.getColumn(0, "sprvsn01OrgnlFileNm"))) {
        			this.setStepIndex(2);
        			//this.divForm02.form.divGrd.form.grdCsafList.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["주관사 관리책임자(정) 개인정보수집 및 \n이용동의서"]); /// {0} 을/를 입력해 주세요.
        			return false;
        		}
        	}

        	// 주관사 관리책임자(부)
        	if (this.dsAply.getColumn(0, "sprvsnCoMngRbprsn2SmYn") != "Y") {
        		if (this.gfnIsNull(this.dsFile.getColumn(0, "sprvsn02OrgnlFileNm"))) {
        			this.setStepIndex(2);
        			this.gfnAlertMsg("msg", "MSG_009", ["주관사 관리책임자(부) 개인정보수집 및 \n이용동의서"]); /// {0} 을/를 입력해 주세요.
        			return false;
        		}
        	}

        	// 실제사용사 관리책임자(정) actlUseCoMngRbprsn1SmYn
        	if (this.dsAply.getColumn(0, "useBzentySmYn") == "N" && this.dsAply.getColumn(0, "actlUseCoMngRbprsn1SmYn") != "Y") {
        		if (this.gfnIsNull(this.dsFile.getColumn(0, "actl01OrgnlFileNm"))) {
        			this.setStepIndex(2);
        			this.gfnAlertMsg("msg", "MSG_009", ["실제사용사 관리책임자(정) 개인정보수집 및 \n이용동의서"]); /// {0} 을/를 입력해 주세요.
        			return false;
        		}
        	}

        	// 실제사용사 관리책임자(부) actlUseCoMngRbprsn2SmYn
        	if (this.dsAply.getColumn(0, "useBzentySmYn") == "N" && this.dsAply.getColumn(0, "actlUseCoMngRbprsn2SmYn") != "Y") {
        		if (this.gfnIsNull(this.dsFile.getColumn(0, "actl02OrgnlFileNm"))) {
        			this.setStepIndex(2);
        			this.gfnAlertMsg("msg", "MSG_009", ["실제사용사 관리책임자(부) 개인정보수집 및 \n이용동의서"]); /// {0} 을/를 입력해 주세요.
        			return false;
        		}
        	}

        	return true;
        }

        // 필수체크 내부함수
        this.fnDoNextValidate = function (oTargetDs, arrEssCols, sPrcsSeCd) {
        	for (let x=0; x<oTargetDs.getRowCount(); x++) {
        		for (let i=0; i<arrEssCols.length; i++) {
        			const arrEss = arrEssCols[i];
        			const sChkVal = oTargetDs.getColumn(x, arrEss.colId);

        			// 필수체크
        			if (arrEss.type.indexOf("required") > -1) {
        				if (this.gfnIsNull(sChkVal)) {
        					fnCompSetFocus.call(this, arrEss.step, oTargetDs, x, arrEss.compId, arrEss.colId);
        					this.gfnAlertMsg("msg", "MSG_011", [arrEss.colNm + " 을/를 \n입력해 주세요."]); /// {0} 을/를 입력해 주세요.
        					return false;
        				}
        			}

        			// maxlength
        			if (arrEss.type.indexOf("maxlengthb") > -1) {
        				const nMaxLength = arrEss.type.substr(arrEss.type.indexOf("maxlengthb")).split(",")[0].split(":")[1];
        				if (this.gfn_lengthByte(sChkVal) > nMaxLength) {
        					fnCompSetFocus.call(this, arrEss.step, oTargetDs, x, arrEss.compId, arrEss.colId);
        					this.gfnAlertMsg("msg", "MSG_011", [arrEss.colNm + " 은/는 한글 " + nexacro.floor(nMaxLength / 2) + ", 영문 " + nMaxLength  + "자까지 \n쓰실 수 있습니다."]);
        					return false;
        				}
        			}

        			// minlength
        			if (arrEss.type.indexOf("minlengthb") > -1) {
        				const nMinLength = arrEss.type.substr(arrEss.type.indexOf("minlengthb")).split(",")[0].split(":")[1];
        				if (this.gfn_lengthByte(sChkVal) < nMinLength) {
        					fnCompSetFocus.call(this, arrEss.step, oTargetDs, x, arrEss.compId, arrEss.colId);
        					this.gfnAlertMsg("msg", "MSG_011", [arrEss.colNm + " 은/는 최소 " + nMinLength + "자 이상 \n입력해야 합니다."]);
        					return false;
        				}
        			}

        			// conreq
        			if (arrEss.type.indexOf("conreq") > -1) {
        				const sConColId = arrEss.type.substr(arrEss.type.indexOf("conreq")).split(",")[0].split(":")[1].split("^")[0];
        				const sConColVal = arrEss.type.substr(arrEss.type.indexOf("conreq")).split(",")[0].split(":")[1].split("^")[1];
        				if (oTargetDs.getColumn(i, sConColId) == sConColVal) {
        					fnCompSetFocus.call(this, arrEss.step, oTargetDs, x, arrEss.compId, arrEss.colId);
        					this.gfnAlertMsg("msg", "MSG_011", [arrEss.colNm + " 을/를 \n입력해 주세요."]); /// {0} 을/를 입력해 주세요.
        					return false;
        				}
        			}

        			// reqVal
        			if (arrEss.type.indexOf("reqVal") > -1) {
        				const sReqVal = arrEss.type.substr(arrEss.type.indexOf("reqVal")).split(",")[0].split(":")[1].split("^")[0];
        				const sReqNm = arrEss.type.substr(arrEss.type.indexOf("reqVal")).split(",")[0].split(":")[1].split("^")[1];
        				if (sChkVal != sReqVal) {
        					fnCompSetFocus.call(this, arrEss.step, oTargetDs, x, arrEss.compId, arrEss.colId);
        					this.gfnAlertMsg("msg", "MSG_011", [arrEss.colNm + "은 \n\"" + sReqNm + "\"" + " 을/를 입력해 주세요."]); /// {0} 을/를 입력해 주세요.
        					return false;
        				}
        			}
        		}
        	}

        	return true;


        	// 컴포넌트 포커스
        	function fnCompSetFocus (nStep, oDs, nRow, oComp, sColId) {
        		this.setStepIndex(nStep);

        		if (this.gfnIsNull(oDs)) return;

        		oDs.rowposition = nRow;

        		if (oComp instanceof nexacro.Grid) {
        			oComp.setFocus();
        			const nColIdx = oComp.getBindCellIndex("body", sColId);
        			oComp.setCellPos(nColIdx);
        			oComp.showEditor(true)
        		} else {
        			oComp.setFocus();
        		}
        	}
        }

        // 그리드 중복값 체크 함수
        this.fnUniqValidate = function () {
        	for (let i=0; i<this.dsCsaf.getRowCount(); i++) {
        		var sVal = this.dsCsaf.getColumn(i, "sn");
        		if(this.dsCsaf.extractRows("sn == '" + sVal + "'").length > 1) {
        			this.divForm05.form.divGrd.form.grdCsafList.setCellPos(1, i);
        			this.gfnAlertMsg("msg", "MSG_011", ["순번은 같은 값을 가질 수 없습니다."]);
        			return false;
        		}
        	}

        	return true;
        };

        //날짜 체크 함수(재신청에서 넘어온 데이터 체크용)
        this.fnDateChkValidate = function(oTargetDs, arrEssCols, sPrcsSeCd) {
        	// 보안위해물품사용시작일자
        	const sBgngYmd = oTargetDs.getColumn(0, "scrtyDgadsCmdtyUseBgngYmd");
        	const sEndYmd = oTargetDs.getColumn(0, "scrtyDgadsCmdtyUseEndYmd");

        	if (!this.gfnIsNull(sBgngYmd) && !this.gfnIsNull(sEndYmd)) {
        		if (this.gfn_getDiffDate(this.fvCurDate, sBgngYmd) < 0) {
        			this.setStepIndex(1);
        			this.gfnAlertMsg("msg", "MSG_011", ["사용 시작일은 오늘 이후 날짜만 가능합니다."]);
        			return false;
        		} else if (!this.gfnIsNull(sEndYmd) && sBgngYmd > sEndYmd) {
        			this.setStepIndex(1);
        			this.gfnAlertMsg("msg", "MSG_011", ["사용종료일 보다 같거나 작아야 합니다."]);
        			return false;
        		} else if (!this.gfnIsNull(sEndYmd) && this.gfn_getDiffDate(sBgngYmd, sEndYmd) < 30) {
        			this.setStepIndex(1);
        			this.gfnAlertMsg("msg", "MSG_011", ["사용일이 30일이 안될경우 작업신고서를 \n통해 사용 신청하시길 바랍니다."]);
        			return false;
        		} else if (!this.gfnIsNull(sBgngYmd) && this.gfn_getDiffDate(sBgngYmd, sEndYmd) > 1825) {
        			this.setStepIndex(1);
        			this.gfnAlertMsg("msg", "MSG_011", ["사용 종료일은 5년 이내만 가능합니다."]);
        			return false;
        		} else if (!this.gfnIsNull(sBgngYmd) && this.gfn_getDiffDate(sBgngYmd, sEndYmd) < 30) {
        			this.setStepIndex(1);
        			this.gfnAlertMsg("msg", "MSG_011", ["사용일이 30일이 안될경우 작업신고서를 \n통해 사용 신청하시길 바랍니다."]);
        			return false;
        		}
        	}

        	return true;
        };

        //출력 정보 체크(설문응답완료시 체크)
        this.fnValidatePrntr = function(sPrcsSeCd) {
        	// 필수항목정의, + 스탭인덱스
        	let arrEssCols;
        	arrEssCols = [];

        	var stkrYn = false;
        	var laserYn = false;
        	//물품정보(그리드)의 row정보 중 하나라도 출력방법 구분코드가 "스티커 출력"일 때
        	for(var i = 0; i < this.dsCsaf.getRowCount(); i++) {
        		if(this.dsCsaf.getColumn(i, "otptMthdSeCd") == "LABELTYPE10") {
        			stkrYn = true;
        			break;
        		}
        	}
        	//물품정보(그리드)의 row정보 중 하나라도 출력방법 구분코드가 "레이저 출력"일 때
        	for(var i = 0; i < this.dsCsaf.getRowCount(); i++) {
        		if(this.dsCsaf.getColumn(i, "otptMthdSeCd") == "LABELTYPE20") {
        			laserYn = true;
        			break;
        		}
        	}
        	// 컬럼id, 컬럼명, 컴포넌트,
        	// ************************** 출력 정보(스티커 출력이 있을 때) **************************
        	if(stkrYn) {
        		arrEssCols.push({type : "required", colId : "prtcZoneDgadsCmdtyStkrOtptYn", colNm : "스티커 출력여부", compId : this.divForm07.form.divStkr.form.rdoPrtcZoneDgadsCmdtyStkrOtptYn, step : 6});
        	}
        	//스티커 출력여부가 "예"일 때
        	if(this.dsAply.getColumn(0,"prtcZoneDgadsCmdtyStkrOtptYn") == "Y") {
        		arrEssCols.push({type : "required,maxlengthb:50", colId : "stkrPrntrNm", colNm : "스티커 출력자", compId : this.divForm07.form.divStkr.form.edtStkrPrntrNm, step : 6});
        		arrEssCols.push({type : "required", colId : "prtcZoneDgadsCmdtyStkrRcvYn", colNm : "스티커 수령여부", compId : this.divForm07.form.divStkr.form.rdoPrtcZoneDgadsCmdtyStkrRcvYn, step : 6});
        	}
        	//스티커 수령여부가 "예"일 때
        	if(this.dsAply.getColumn(0,"prtcZoneDgadsCmdtyStkrRcvYn") == "Y") {
        		arrEssCols.push({type : "required", colId : "stkrRcvYmd", colNm : "스티커 수령일자", compId : this.divForm07.form.divStkr.form.calStkrRcvYmd, step : 6});
        		arrEssCols.push({type : "required", colId : "stkrRcvDt2", colNm : "스티커 수령일시", compId : this.divForm07.form.divStkr.form.medtStkrRcvDt, step : 6});
        	}
        	// ************************** 출력 정보(레이저 출력이 있을 때) **************************
        	if(laserYn) {
        		arrEssCols.push({type : "required", colId : "prtcZoneDgadsCmdtyLaserMarkgEngvgYn", colNm : "레이져마킹각인 여부", compId : this.divForm07.form.divLaser.form.rdoPrtcZoneDgadsCmdtyLaserMarkgEngvgYn, step : 6});
        	}
        	//레이저 각인여부가 "예"일 때
        	if(this.dsAply.getColumn(0,"prtcZoneDgadsCmdtyLaserMarkgEngvgYn") == "Y") {
        		arrEssCols.push({type : "required,maxlengthb:50", colId : "laserMarkgEngvrNm", colNm : "레이져마킹 각인자", compId : this.divForm07.form.divLaser.form.edtLaserMarkgEngvrNm, step : 6});
        		arrEssCols.push({type : "required", colId : "prtcZoneDgadsCmdtyLaserMarkgRcvYn", colNm : "레이져마킹 수령여부", compId : this.divForm07.form.divLaser.form.rdoPrtcZoneDgadsCmdtyLaserMarkgRcvYn, step : 6});
        	}
        	//레이저 수령여부가 "예"일 때
        	if(this.dsAply.getColumn(0,"prtcZoneDgadsCmdtyLaserMarkgRcvYn") == "Y") {
        		arrEssCols.push({type : "required", colId : "laserMarkgCmdtyYmd", colNm : "레이져마킹 물품인도일자", compId : this.divForm07.form.divLaser.form.calLaserMarkgCmdtyYmd, step : 6});
        		arrEssCols.push({type : "required", colId : "laserMarkgCmdtyDt2", colNm : "레이져마킹 물품인도일시", compId : this.divForm07.form.divLaser.form.medtLaserMarkgCmdtyDt, step : 6});
        		arrEssCols.push({type : "required", colId : "laserMarkgRcvYmd", colNm : "레이져마킹 수령일자", compId : this.divForm07.form.divLaser.form.calLaserMarkgRcvYmd, step : 6});
        		arrEssCols.push({type : "required", colId : "laserMarkgRcvDt2", colNm : "레이져마킹 수령일시", compId : this.divForm07.form.divLaser.form.medtLaserMarkgRcvDt, step : 6});
        		arrEssCols.push({type : "required", colId : "laserMarkgCmdtyAcptnYmd", colNm : "레이져마킹 물품인수예정일자", compId : this.divForm07.form.divLaser.form.calLaserMarkgCmdtyAcptnYmd, step : 6});
        		arrEssCols.push({type : "required", colId : "laserMarkgCmdtyAcptnDt2", colNm : "레이져마킹 물품인수예정일시", compId : this.divForm07.form.divLaser.form.medtLaserMarkgCmdtyAcptnDt, step : 6});
        	}

        	if (!this.fnDoNextValidate(this.dsAply, arrEssCols, sPrcsSeCd)) return false;

        	//출력 정보 날짜(시간) 정합성 체크
        	if (!this.fnDateTimeChkValidate(this.dsAply, arrEssCols, sPrcsSeCd)) return false;

        	return true;
        };

        //출력 정보 날짜(시간) 정합성 체크
        this.fnDateTimeChkValidate = function(oTargetDs, arrEssCols, sPrcsSeCd) {
        	//현재날짜(시간까지)
        	var sDateTime = this.gfnGetDate("time");
        	var sDate = sDateTime.substring(0, 8);		//현재날짜 YYYYMMDD
        	var sTime = sDateTime.substring(8, 12);		//현재시간 HHmm
        	//스티커수령일시
        	var sStkrRcvYmd = oTargetDs.getColumn(0, "stkrRcvYmd");
        	var sStkrRcvDt2 = this.gfnTrim(oTargetDs.getColumn(0, "stkrRcvDt2"));		//마스크 에디터 타입이라 trim필요
        	//레이져마킹 물품인도일시
        	var sLaserMarkgCmdtyYmd = oTargetDs.getColumn(0, "laserMarkgCmdtyYmd");
        	var sLaserMarkgCmdtyDt2 = this.gfnTrim(oTargetDs.getColumn(0, "laserMarkgCmdtyDt2"));		//마스크 에디터 타입이라 trim필요
        	//레이저마킹 수령일시
        	var sLaserMarkgRcvYmd = oTargetDs.getColumn(0, "laserMarkgRcvYmd");
        	var sLaserMarkgRcvDt2 = this.gfnTrim(oTargetDs.getColumn(0, "laserMarkgRcvDt2"));			//마스크 에디터 타입이라 trim필요
        	//레이저마킹 물품인수예정일시
        	var sLaserMarkgCmdtyAcptnYmd = oTargetDs.getColumn(0, "laserMarkgCmdtyAcptnYmd");
        	var sLaserMarkgCmdtyAcptnDt2 = this.gfnTrim(oTargetDs.getColumn(0, "laserMarkgCmdtyAcptnDt2"));		//마스크 에디터 타입이라 trim필요

        	if(!this.gfnIsNull(sStkrRcvYmd)) {
        		if(!this.gfn_isDate(sStkrRcvYmd)) {
        			this.setStepIndex(6);
        			this.divForm07.form.divStkr.form.calStkrRcvYmd.setFocus();
        			this.gfnAlertMsg("msg", "MSG_011", ["스티커 수령일자를 날짜형태로 \n입력해주세요."]);
        			return false;
        		}
        	}
        	if(!this.gfnIsNull(sStkrRcvDt2)) {
        		//시간형태 별도 체크
        		if(!this.fnNumberTimeChk(sStkrRcvDt2)) {
        			this.setStepIndex(6);
        			this.divForm07.form.divStkr.form.medtStkrRcvDt.setFocus();
        			this.gfnAlertMsg("msg", "MSG_011", ["스티커 수령일시를 시간형태로 \n입력해주세요."]);
        			return false;
        		}
        	}
        	if(!this.gfnIsNull(sLaserMarkgCmdtyYmd)) {
        		if(!this.gfn_isDate(sLaserMarkgCmdtyYmd)) {
        			this.setStepIndex(6);
        			this.divForm07.form.divLaser.form.calLaserMarkgCmdtyYmd.setFocus();
        			this.gfnAlertMsg("msg", "MSG_011", ["레이져마킹 물품인도일자를 날짜형태로 \n입력해주세요."]);
        			return false;
        		}
        	}
        	if(!this.gfnIsNull(sLaserMarkgCmdtyDt2)) {
        		//시간형태 별도 체크
        		if(!this.fnNumberTimeChk(sLaserMarkgCmdtyDt2)) {
        			this.setStepIndex(6);
        			this.divForm07.form.divLaser.form.medtLaserMarkgCmdtyDt.setFocus();
        			this.gfnAlertMsg("msg", "MSG_011", ["레이져마킹 물품인도일시를 시간형태로 \n입력해주세요."]);
        			return false;
        		}
        	}
        	if(!this.gfnIsNull(sLaserMarkgRcvYmd)) {
        		if(!this.gfn_isDate(sLaserMarkgRcvYmd)) {
        			this.setStepIndex(6);
        			this.divForm07.form.divLaser.form.calLaserMarkgRcvYmd.setFocus();
        			this.gfnAlertMsg("msg", "MSG_011", ["레이져마킹 수령일자를 날짜형태로 \n입력해주세요."]);
        			return false;
        		}
        	}
        	if(!this.gfnIsNull(sLaserMarkgRcvDt2)) {
        		//시간형태 별도 체크
        		if(!this.fnNumberTimeChk(sLaserMarkgRcvDt2)) {
        			this.setStepIndex(6);
        			this.divForm07.form.divLaser.form.medtLaserMarkgRcvDt.setFocus();
        			this.gfnAlertMsg("msg", "MSG_011", ["레이져마킹 수령일시를 시간형태로 \n입력해주세요."]);
        			return false;
        		}
        	}
        	if(!this.gfnIsNull(sLaserMarkgCmdtyAcptnYmd)) {
        		if(!this.gfn_isDate(sLaserMarkgCmdtyAcptnYmd)) {
        			this.setStepIndex(6);
        			this.divForm07.form.divLaser.form.calLaserMarkgCmdtyAcptnYmd.setFocus();
        			this.gfnAlertMsg("msg", "MSG_011", ["레이져마킹 물품인수예정일자를 날짜형태로 \n입력해주세요."]);
        			return false;
        		}
        	}
        	if(!this.gfnIsNull(sLaserMarkgCmdtyAcptnDt2)) {
        		//시간형태 별도 체크
        		if(!this.fnNumberTimeChk(sLaserMarkgCmdtyAcptnDt2)) {
        			this.setStepIndex(6);
        			this.divForm07.form.divLaser.form.medtLaserMarkgCmdtyAcptnDt.setFocus();
        			this.gfnAlertMsg("msg", "MSG_011", ["레이져마킹 물품인수예정일시를 시간형태로 \n입력해주세요."]);
        			return false;
        		}
        	}

        	//현재시간 이후인지 체크(필요하면 하단 내용 주석 해제)
        	/*
        	if(!this.gfnIsNull(sStkrRcvYmd) && !this.gfnIsNull(sStkrRcvDt2)) {
        		if(sDateTime < (sStkrRcvYmd + "" + sStkrRcvDt2)) {
        			this.setStepIndex(6);
        			this.gfnAlertMsg("msg", "MSG_011", ["현재일시보다 이후일 수 없습니다."]);
        			return false;
        		}
        	}
        	*/

        	return true;
        };

        //마스크 에디터 타입이라 시간 체크 별도로 진행
        this.fnNumberTimeChk = function(strTime) {
        	if(strTime.length != 4) {
        		return false;
        	}
        	var s01 = this.gfnTrim(strTime.substring(0, 2));
        	var s02 = this.gfnTrim(strTime.substring(2, 4));
        	if(s01.length != 2) {
        		return false;
        	}
        	if(s02.length != 2) {
        		return false;
        	}

        	var t01 = Number(s01);
        	var t02 = Number(s02);
        	if((t01 < 0 || t01 > 23) || (t02 < 0 || t02 > 59)) {
        		return false;
        	} else {
        		return true;
        	}
        };

        //설문응답여부 체크(설문응답완료시 체크)
        this.fnValidateSurvey = function(sPrcsSeCd) {
        	// 필수항목정의, + 스탭인덱스
        	let arrEssCols;
        	arrEssCols = [];
        	// 컬럼id, 컬럼명, 컴포넌트,
        	// ************************** 설문응답 **************************
        	arrEssCols.push({type : "required", colId : "dgstfnArtclFstVl", colNm : "만족도조사 1번 항목", compId : this.divForm08.form.divFold.form.rdoDgstfnArtclFstVl, step : 7});
        	arrEssCols.push({type : "required", colId : "dgstfnArtclSecdVl", colNm : "만족도조사 2번 항목", compId : this.divForm08.form.divFold.form.rdoDgstfnArtclSecdVl, step : 7});
        	arrEssCols.push({type : "required", colId : "dgstfnArtclThrVl", colNm : "만족도조사 3번 항목", compId : this.divForm08.form.divFold.form.rdoDgstfnArtclThrVl, step : 7});

        	if (!this.fnDoNextValidate(this.dsMst, arrEssCols, sPrcsSeCd)) return false;

        	//기타의견 입력 시 20자 이상 입력 체크
        	var sDgstfnArtclFstCn = this.dsMst.getColumn(0, "dgstfnArtclFstCn");
        	var sDgstfnArtclSecdCn = this.dsMst.getColumn(0, "dgstfnArtclSecdCn");
        	var sDgstfnArtclThrCn = this.dsMst.getColumn(0, "dgstfnArtclThrCn");
        	if(!this.gfnIsNull(sDgstfnArtclFstCn)) {
        		if(this.gfn_lengthByte(sDgstfnArtclFstCn) < 20) {
        			this.setStepIndex(7);
        			this.divForm08.form.divFold.form.txtDgstfnArtclFstCn.setFocus();
        			this.gfnAlertMsg("msg", "MSG_011", ["기타의견은 20자 이상 입력하세요."]);
        			return false;
        		}
        	}
        	if(!this.gfnIsNull(sDgstfnArtclSecdCn)) {
        		if(this.gfn_lengthByte(sDgstfnArtclSecdCn) < 20) {
        			this.setStepIndex(7);
        			this.divForm08.form.divFold.form.txtDgstfnArtclSecdCn.setFocus();
        			this.gfnAlertMsg("msg", "MSG_011", ["기타의견은 20자 이상 입력하세요."]);
        			return false;
        		}
        	}
        	if(!this.gfnIsNull(sDgstfnArtclThrCn)) {
        		if(this.gfn_lengthByte(sDgstfnArtclThrCn) < 20) {
        			this.setStepIndex(7);
        			this.divForm08.form.divFold.form.txtDgstfnArtclThrCn.setFocus();
        			this.gfnAlertMsg("msg", "MSG_011", ["기타의견은 20자 이상 입력하세요."]);
        			return false;
        		}
        	}

        	return true;
        };

        //컴포넌트 readonly 설정 함수(exceptionId 설정 피하는 ID)
        this.fnCompReadOnly = function(exceptionId) {

        	//신청자정보, 신청정보, 보안위해물품보유주관사, 개인정보수집, 위해물품목록, 전달사항
        	const arrDivs = [this.divForm01, this.divForm02, this.divForm03, this.divForm04, this.divForm05, this.divForm06];
        	const arrReadonly = [nexacro.Edit, nexacro.Grid, nexacro.Radio, nexacro.Combo, nexacro.TextArea];
        	const arrEnable = [nexacro.Button];

        	arrDivs.forEach(oDiv => {
        		fnReadonly.call(this, oDiv.form.components);
        	})

        	function fnReadonly (arrComps) {
        		Array.from(arrComps).forEach(oComp => {

        			if (oComp instanceof nexacro.Div) {
        				fnReadonly.call(this, oComp.form.components);
        				return;
        			}

        			else if (oComp instanceof nexacro.Edit || oComp instanceof nexacro.Radio || oComp instanceof nexacro.Grid
        				|| oComp instanceof nexacro.Combo || oComp instanceof nexacro.TextArea || oComp instanceof nexacro.Calendar)  {
        				oComp.readonly = true;
        				if(exceptionId.indexOf(oComp.id) != -1) {
        					oComp.readonly = false;
        				}
        			}

        			else if (oComp instanceof nexacro.Button) {
        				//cssclass가 접고 여는 버튼이라면 에외처리
        				if(oComp.cssclass == "btn_WF_ACMinus" || oComp.cssclass == "btn_WF_ACPlus") {
        					oComp.enable = true;
        				} else {
        					oComp.enable = false;
        				}

        				if(exceptionId.indexOf(oComp.id) != -1) {
        					oComp.enable = true;
        				}
        			}
        		});
        	}

        	//보안위해물품주관사 이용동의서 버튼cell 영역 숨기기
        	this.divForm03.form.grdSprvsn01.setFormatColProperty(1, "size", 0);
        	this.divForm03.form.grdSprvsn02.setFormatColProperty(1, "size", 0);
        	this.divForm03.form.grdActl01.setFormatColProperty(1, "size", 0);
        	this.divForm03.form.grdActl02.setFormatColProperty(1, "size", 0);
        	this.divForm03.form.resetScroll();

        	//위해물품목록 파일업로드 버튼cell 영역 숨기기
        	this.divForm05.form.divGrd.form.grdCsafList.setFormatColProperty(3, "size", 0);
        	this.divForm05.form.resetScroll();

        	this.resetScroll();
        };

        //컴포넌트 readonly 설정 해제 함수
        this.fnCompNoneReadOnly = function() {
        	//신청자정보, 신청정보, 보안위해물품보유주관사, 개인정보수집, 위해물품목록, 전달사항
        	const arrDivs = [this.divForm01, this.divForm02, this.divForm03, this.divForm04, this.divForm05, this.divForm06];
        	const arrReadonly = [nexacro.Edit, nexacro.Grid, nexacro.Radio, nexacro.Combo, nexacro.TextArea];
        	const arrEnable = [nexacro.Button];

        	arrDivs.forEach(oDiv => {
        		if(oDiv == this.divForm01) {
        			//신청자 정보에 대해서 접기버튼과 공사위치 상세입력만 설정 해제 함
        			this.divForm01.form.divTaskPrcsFlw.form.btnFold.enable = true;
        			this.divForm01.form.edtCstrnPstnDtlInptCn.readonly = false;

        			this.divForm01.form.edtAplyNo.readonly = true;
        			this.divForm01.form.edtAplcntNm.readonly = true;
        			this.divForm01.form.edtAplcntCoNm.readonly = true;
        			this.divForm01.form.edtMblTelno1.readonly = true;
        			this.divForm01.form.edtMblTelno2.readonly = true;
        			this.divForm01.form.edtMblTelno3.readonly = true;
        			this.divForm01.form.edtRgtrNm.readonly = true;
        			this.divForm01.form.edtRgtrCoNm.readonly = true;
        		} else {
        			fnReadonlyNone.call(this, oDiv.form.components);
        		}
        	})

        	function fnReadonlyNone (arrComps) {
        		Array.from(arrComps).forEach(oComp => {

        			if (oComp instanceof nexacro.Div) {
        				fnReadonlyNone.call(this, oComp.form.components);
        				return;
        			}

        			else if (oComp instanceof nexacro.Edit || oComp instanceof nexacro.Radio || oComp instanceof nexacro.Grid
        				|| oComp instanceof nexacro.Combo || oComp instanceof nexacro.TextArea || oComp instanceof nexacro.Calendar)  {
        				oComp.readonly = false;
        			}

        			else if (oComp instanceof nexacro.Button) {
        				oComp.enable = true;
        			}
        		});
        	}

        	//보안위해물품주관사 이용동의서 버튼cell 영역 보이기
        	this.divForm03.form.grdSprvsn01.setFormatColProperty(1, "size", 110);
        	this.divForm03.form.grdSprvsn02.setFormatColProperty(1, "size", 110);
        	this.divForm03.form.grdActl01.setFormatColProperty(1, "size", 110);
        	this.divForm03.form.grdActl02.setFormatColProperty(1, "size", 110);

        	var control01 = "none";
        	var edit01 = "none";
        	var cssClass01 = "";
        	var text01 = "";
        	if(!this.gfnIsNull(this.dsFile.getColumn(0, "sprvsn01OrgnlFileNm"))) {
        		control01 = "buttoncontrol";
        		edit01 = "button";
        		cssClass01 = "CellFileDel";
        		text01 = "파일삭제";
        		trace("noneReadOnly 01 존재");
        	}
        	this.divForm03.form.grdSprvsn01.setCellProperty("body", 1, "displaytype", control01);
        	this.divForm03.form.grdSprvsn01.setCellProperty("body", 1, "edittype", edit01);
        	this.divForm03.form.grdSprvsn01.setCellProperty("body", 1, "cssclass", cssClass01);
        	this.divForm03.form.grdSprvsn01.setCellProperty("body", 1, "text", text01);

        	var control02 = "none";
        	var edit02 = "none";
        	var cssClass02 = "";
        	var text02 = "";
        	if(!this.gfnIsNull(this.dsFile.getColumn(0, "sprvsn02OrgnlFileNm"))) {
        		control02 = "buttoncontrol";
        		edit02 = "button";
        		cssClass02 = "CellFileDel";
        		text02 = "파일삭제";
        		trace("noneReadOnly 02 존재");
        	}
        	this.divForm03.form.grdSprvsn02.setCellProperty("body", 1, "displaytype", control02);
        	this.divForm03.form.grdSprvsn02.setCellProperty("body", 1, "edittype", edit02);
        	this.divForm03.form.grdSprvsn02.setCellProperty("body", 1, "cssclass", cssClass02);
        	this.divForm03.form.grdSprvsn02.setCellProperty("body", 1, "text", text02);

        	var control03 = "none";
        	var edit03 = "none";
        	var cssClass03 = "";
        	var text03 = "";
        	if(!this.gfnIsNull(this.dsFile.getColumn(0, "actl01OrgnlFileNm"))) {
        		control03 = "buttoncontrol";
        		edit03 = "button";
        		cssClass03 = "CellFileDel";
        		text03 = "파일삭제";
        		trace("noneReadOnly 03 존재");
        	}
        	this.divForm03.form.grdActl01.setCellProperty("body", 1, "displaytype", control03);
        	this.divForm03.form.grdActl01.setCellProperty("body", 1, "edittype", edit03);
        	this.divForm03.form.grdActl01.setCellProperty("body", 1, "cssclass", cssClass03);
        	this.divForm03.form.grdActl01.setCellProperty("body", 1, "text", text03);

        	var control04 = "none";
        	var edit04 = "none";
        	var cssClass04 = "";
        	var text04 = "";
        	if(!this.gfnIsNull(this.dsFile.getColumn(0, "actl02OrgnlFileNm"))) {
        		control04 = "buttoncontrol";
        		edit04 = "button";
        		cssClass04 = "CellFileDel";
        		text04 = "파일삭제";
        		trace("noneReadOnly 04 존재");
        	}
        	this.divForm03.form.grdActl02.setCellProperty("body", 1, "displaytype", control04);
        	this.divForm03.form.grdActl02.setCellProperty("body", 1, "edittype", edit04);
        	this.divForm03.form.grdActl02.setCellProperty("body", 1, "cssclass", cssClass04);
        	this.divForm03.form.grdActl02.setCellProperty("body", 1, "text", text04);

        	this.divForm03.form.resetScroll();

        	//위해물품목록 파일업로드 버튼cell 영역 보이기
        	this.divForm05.form.divGrd.form.grdCsafList.setFormatColProperty(3, "size", 106);
        	this.divForm05.form.divGrd.form.grdCsafList.getRealColSize(3);
        	this.divForm05.form.resetScroll();

        	this.resetScroll();
        };

        //버튼영역 hide,show함수
        this.fnSetBtn = function() {

        	const sJobCd = this.dsMst.getColumn(0, "jobCd");

        	// [TAS00072] 담당자접수
        	if(sJobCd == "TAS00072") {
        		//회수 CTL01040(등록자) 일 때
        		if(this.dsMst.getColumn(0, "aplcntId") != this.fvApp.gdsUser.getColumn(0,"userId")) {
        			this.divBtn.form.CTL01040.visible = false;	//회수
        		}

        		//접수 CTL00134(권한자) 일 때-권한자 확인 필요)

        	}

        	// [TAS00523] 신청서 회수

        	// [TAS00075] 종료
        	else if(sJobCd == "TAS00075") {
        		//저장 CTL11045(종료코드가 TSPCLO010-정상종료, TSPCLO020-대리등록 정상종료)일 때
        		if(this.dsMst.getColumn(0, "endCd") == "TSPCLO010" || this.dsMst.getColumn(0, "endCd") == "TSPCLO020") {
        			this.divBtn.form.CTL11045.visible = true;	//저장
        			this.divBtn.form.CTL10776.visible = false;	//재신청작성
        		}

        		//재신청작성 CTL10776
        		else {
        			this.divBtn.form.CTL11045.visible = false;	//저장
        			this.divBtn.form.CTL10776.visible = true;	//재신청작성
        		}

        	}

        	// [TAS00293] 만족도 조사 별도 처리-fnSetStepPrtcChk 내부에서 처리

        	this.divBtn.form.resetScroll();

        };

        //전달사항 그리드 표현
        this.fnCnvyMttrCn = function() {

        	//전달사항 내용 저장하지 않고 조회한 경우 신규 입력을 위해 row를 추가함
        	if(this.dsCnvyMttrCn.getRowCount() == 0) {
        		this.dsCnvyMttrCn.clearData();
        		this.dsCnvyMttrCn.addRow();
        	}

        	//전달사항 화면에 있는 function 호출
        	this.divForm06.form.fnGridSize();
        };

        //데이터셋을 copy데이터셋에 똑같이 복사하고 신규로 바꾸고 신청번호 컬럼이 존재한다면 빈 값으로 세팅(재신청작성 시 사용)
        this.fnDsInsert = function() {

        	this.dsMstCopy.clearData();
        	this.dsAplyCopy.clearData();
        	this.dsCsafCopy.clearData();
        	this.dsCnvyMttrCnCopy.clearData();
        	this.dsAtflCopy.clearData();
        	this.dsCmdtyAtflCopy.clearData();

        	for(var i = 0; i < this.dsMst.getRowCount(); i++) {
        		this.dsMstCopy.addRow();
        		this.dsMstCopy.copyRow(i, this.dsMst, i);
        		//신청번호 컬럼이 존재한다면 빈 값으로 세팅
        		if(this.dsMstCopy.getColumnInfo("aplyNo") != null) {
        			this.dsMstCopy.setColumn(i, "aplyNo", "");
        		}
        	}
        	for(var i = 0; i < this.dsAply.getRowCount(); i++) {
        		this.dsAplyCopy.addRow();
        		this.dsAplyCopy.copyRow(i, this.dsAply, i);
        		//신청번호 컬럼이 존재한다면 빈 값으로 세팅
        		if(this.dsAplyCopy.getColumnInfo("aplyNo") != null) {
        			this.dsAplyCopy.setColumn(i, "aplyNo", "");
        		}
        	}
        	for(var i = 0; i < this.dsCsaf.getRowCount(); i++) {
        		this.dsCsafCopy.addRow();
        		this.dsCsafCopy.copyRow(i, this.dsCsaf, i);
        		//신청번호 컬럼이 존재한다면 빈 값으로 세팅
        		if(this.dsCsafCopy.getColumnInfo("aplyNo") != null) {
        			this.dsCsafCopy.setColumn(i, "aplyNo", "");
        		}
        	}
        	//전달사항은 복사하지 않음(필요하다면 주석 해제)
        	/*
        	for(var i = 0; i < this.dsCnvyMttrCn.getRowCount(); i++) {
        		this.dsCnvyMttrCnCopy.addRow();
        		this.dsCnvyMttrCnCopy.copyRow(i, this.dsCnvyMttrCn, i);
        		//신청번호 컬럼이 존재한다면 빈 값으로 세팅
        		if(this.dsCnvyMttrCnCopy.getColumnInfo("aplyNo") != null) {
        			this.dsCnvyMttrCnCopy.setColumn(i, "aplyNo", "");
        		}
        	}
        	*/
        	for(var i = 0; i < this.dsAtfl.getRowCount(); i++) {
        		this.dsAtflCopy.addRow();
        		this.dsAtflCopy.copyRow(i, this.dsAtfl, i);
        	}
        	//동의서 보관함에서 세팅된 첨부파일은 복사하지 않도록 함
        	for(var i = this.dsAtflCopy.rowcount -1;  i >= 0; i--) {
        		if(this.dsAtflCopy.getColumn(i, "aplyNo").indexOf("SEC") == -1) {
        			this.dsAtflCopy.deleteRow(i);
        		}
        	}
        	for(var i = 0; i < this.dsAtflCopy.getRowCount(); i++) {
        		//신청번호 컬럼이 존재한다면 빈 값으로 세팅
        		this.dsAtflCopy.setColumn(i, "aplyNo", "");
        	}
        	for(var i = 0; i < this.dsCmdtyAtfl.getRowCount(); i++) {
        		this.dsCmdtyAtflCopy.addRow();
        		this.dsCmdtyAtflCopy.copyRow(i, this.dsCmdtyAtfl, i);
        		//신청번호 컬럼이 존재한다면 빈 값으로 세팅
        		if(this.dsCmdtyAtflCopy.getColumnInfo("aplyNo") != null) {
        			this.dsCmdtyAtflCopy.setColumn(i, "aplyNo", "");
        		}
        	}

        	//RaonkUpload 초기화
        	this.divForm03.form.RaonkUpload.ResetUpload();
        	this.divForm05.form.RaonkUpload.ResetUpload();

        	//첨부파일 파일리스트에 셋팅
        	//this.gfnDownloadSetting(this.divForm03.form.RaonkUpload, this.dsAtflCopy);
        	this.gfnDownloadSetting(this.divForm05.form.RaonkUpload, this.dsAtflCopy);
        	this.gfnDownloadSetting(this.divForm05.form.RaonkUpload, this.dsCmdtyAtflCopy);
        }

        //위해물품 목록에서 사진이 필수로 있는지 체크(위해물품 승인시에만 체크)
        this.fnValidatePhoto = function () {

        	for(var i = 0; i < this.dsCsaf.getRowCount(); i++) {
        		if(this.gfnIsNull(this.dsCsaf.getColumn(i, "orgnlFileNm"))) {
        			return false;
        		}
        	}

        	return true;
        };

        //저장 관련된 내용 반복적으로 사용되어서 별도로 분리(sPrcsSeCd : 진행버튼코드)
        this.fnSaveStep = function(sPrcsSeCd) {
        	if(this.gfnDsIsUpdated(this.dsAtfl)) {  // 첨부파일 변경시
        		trace("1. 첨부파일 저장");
        		// 첨부파일 저장
        		this.fnFileTransfer();
        	}
        	else if (this.gfnDsIsUpdated(this.dsCmdtyAtfl)) {
        		trace("2. 첨부파일 저장");
        		// 첨부파일 저장
        		this.fnFileTransferDtl();
        	}
        	else {
        		trace("3. fnSave이동");
        		this.fnSave(sPrcsSeCd);
        	}
        };

        //재신청 저장 분리처리(sPrcsSeCd : 진행버튼코드)
        this.fnReSaveStep = function(sPrcsSeCd) {
        	if(this.gfnDsIsUpdated(this.dsAtflCopy)) {  // 첨부파일 변경시
        		trace("re 1. 첨부파일 저장");
        		// 첨부파일 저장(재신청)
        		this.fnReFileTransfer();
        	}
        	else if (this.gfnDsIsUpdated(this.dsCmdtyAtflCopy)) {
        		trace("re 2. 첨부파일 저장");
        		// 첨부파일 저장(재신청)
        		this.fnReFileTransferDtl();
        	}
        	else {
        		trace("re 3. fnSave이동");
        		this.fnSave(sPrcsSeCd);
        	}
        };

        //만족도 조사 단계에서 출력 정보가 입력되었는지 확인
        this.fnSetStepPrtcChk = function() {
        	trace("fnSetStepPrtcChk 진입!");
        	var stkrYn = false;
        	var laserYn = false;

        	//물품정보(그리드)의 row정보 중 하나라도 출력방법 구분코드가 "스티커 출력"일 때
        	for(var i = 0; i < this.dsCsaf.getRowCount(); i++) {
        		if(this.dsCsaf.getColumn(i, "otptMthdSeCd") == "LABELTYPE10") {
        			stkrYn = true;
        			break;
        		}
        	}

        	//물품정보(그리드)의 row정보 중 하나라도 출력방법 구분코드가 "레이저 출력"일 때
        	for(var i = 0; i < this.dsCsaf.getRowCount(); i++) {
        		if(this.dsCsaf.getColumn(i, "otptMthdSeCd") == "LABELTYPE20") {
        			laserYn = true;
        			break;
        		}
        	}

        	if(stkrYn && laserYn) {
        		//이미 그려진 영역에서 하단의 레이저 출력만 다시 세팅하도록 함(divForm07에 정의)
        		this.divForm07.form.fnLaserVisible(laserYn);
        	} else {
        		//스티커 출력이 있을 경우 스티커 출력 영역 보이기(divForm07에 정의)
        		this.divForm07.form.fnStkrVisible(stkrYn);

        		//레이저 출력이 있을 경우 레이저 출력 영역 보이기(divForm07에 정의)
        		this.divForm07.form.fnLaserVisible(laserYn);
        	}

        	//!! 운영 실제 내용 확인 필요 !! 저장버튼만 보여야 하는지 모든 버튼이 보여야 하는지 등
        	//출력 정보가 입력되지 않았을 때-출력 탭으로 이동
        	var prtcInfoYn = true;
        	if(stkrYn) {
        		//스티커 출력일 때 스티커 출력 필수정보 중 하나라도 미입력 되어 있다면 입력필드 활성화, 저장버튼만 활성화
        		//츨력탭 보이고 만족도 조사 숨기기
        		if(this.gfnIsNull(this.dsAply.getColumn(0, "prtcZoneDgadsCmdtyStkrOtptYn")) || this.gfnIsNull(this.dsAply.getColumn(0, "stkrPrntrNm"))
        		 || this.gfnIsNull(this.dsAply.getColumn(0, "prtcZoneDgadsCmdtyStkrRcvYn")) || this.gfnIsNull(this.dsAply.getColumn(0, "stkrRcvYmd"))
        		 || this.gfnIsNull(this.dsAply.getColumn(0, "stkrRcvDt"))
        		) {
        			prtcInfoYn = false;
        		}
        	}

        	if(laserYn) {
        		//레이저 출력일 때 레이저 출력 필수정보 중 하나라도 미입력 되어 있다면 입력필드 활성화, 저장버튼만 활성화
        		//츨력탭 보이고 만족도 조사 숨기기
        		if(this.gfnIsNull(this.dsAply.getColumn(0, "prtcZoneDgadsCmdtyLaserMarkgEngvgYn")) || this.gfnIsNull(this.dsAply.getColumn(0, "laserMarkgEngvrNm"))
        		 || this.gfnIsNull(this.dsAply.getColumn(0, "prtcZoneDgadsCmdtyLaserMarkgRcvYn")) || this.gfnIsNull(this.dsAply.getColumn(0, "laserMarkgCmdtyTrnsfDt"))
        		 || this.gfnIsNull(this.dsAply.getColumn(0, "laserMarkgRcvDt")) || this.gfnIsNull(this.dsAply.getColumn(0, "laserMarkgCmdtyAcptnDayPrnmntDt"))
        		) {
        			prtcInfoYn = false;
        		}
        	}

        	//TODO : 확인필요!! 버튼 활성화 및 만족도 탭 보이기 처리 주석 내용으로 가야하는지 확인 필요(현재는 모든 버튼 보이고, 출력 및 만족도 탭 모두 보이고, 출력 탭으로 이동하도록 함)
        	var sEndDt = this.dsMst.getColumn(0, "endDt");
        	//출력여부에 따른 form 세팅
        	this.divForm07.form.fnPrtcSetForm("search");
        	//모든 활성화
        	//종료일자 확인 후 처리
        	if(!this.gfnIsNull(sEndDt)) {
        		if(sEndDt.substring(0, 8) < "20201007") {
        			//버튼세팅 divForm07에 정의
        			this.divForm07.form.fnSetbtnPrtcInfo(1);
        		} else {
        			//버튼세팅 divForm07에 정의
        			this.divForm07.form.fnSetbtnPrtcInfo(2);
        		}
        	} else {
        		//버튼 모두 비활성화(divForm07에 정의)
        		this.divForm07.form.fnSetEnablebtnPrtcInfo();
        	}
        	//스티커 출력 영역, 레이저 마킹 영역 줄어들지 않게 하기 위해 visible과 height 체크하여 영역 보존
        	this.divForm07.form.fnSetArea();
        	//출력 탭, 만족도 조사 탭 보이기
        	this.tabStep.Tabpage7.tabbuttonwidth = this.tabStep.Tabpage7.uptabbuttonwidth;
        	this.tabStep.Tabpage8.tabbuttonwidth = this.tabStep.Tabpage8.uptabbuttonwidth;
        	//출력 탭으로 이동
        	this.tabStep.tabindex = this.cfnGetTabIndex(this.tabStep, "Tabpage7");

        	/*
        	//세팅된 종료일자가 20201007 이전일 때 경우 처리
        	var sEndDt = this.dsMst.getColumn(0, "endDt");
        	if(!prtcInfoYn) {
        		//출력여부에 따른 form 세팅
        		this.divForm07.form.fnPrtcSetForm("search");

        		//저장버튼만 활성화
        		this.divBtn.form.CTL00307.visible = false;	//설문응답완료
        		this.divBtn.form.CTL10964.visible = false;	//재신청작성
        		this.divBtn.form.CTL11046.visible = true;	//저장
        		this.divBtn.form.resetScroll();

        		//종료일자 확인 후 처리
        		if(!this.gfnIsNull(sEndDt)) {
        			if(sEndDt.substring(0, 8) < "20201007") {
        				//버튼세팅 divForm07에 정의
        				this.divForm07.form.fnSetbtnPrtcInfo(1);
        			} else {
        				//버튼세팅 divForm07에 정의
        				this.divForm07.form.fnSetbtnPrtcInfo(2);
        			}
        		} else {
        			//버튼 모두 비활성화(divForm07에 정의)
        			this.divForm07.form.fnSetEnablebtnPrtcInfo();
        		}

        		//스티커 출력 영역, 레이저 마킹 영역 줄어들지 않게 하기 위해 visible과 height 체크하여 영역 보존
        		this.divForm07.form.fnSetArea();

        		//출력 탭 보이기
        		this.tabStep.Tabpage7.tabbuttonwidth = this.tabStep.Tabpage7.uptabbuttonwidth;

        		//만족도 탭 숨기기
        		this.tabStep.Tabpage8.uptabbuttonwidth = this.tabStep.Tabpage8.tabbuttonwidth;
        		this.tabStep.Tabpage8.tabbuttonwidth = 0;

        		//출력 탭으로 이동
        		this.tabStep.tabindex = this.cfnGetTabIndex(this.tabStep, "Tabpage7");
        	} else {
        		//출력여부에 따른 form 세팅
        		this.divForm07.form.fnPrtcSetForm("search");

        		//설문응답완료, 재신청작성 활성화
        		this.divBtn.form.CTL00307.visible = true;	//설문응답완료
        		this.divBtn.form.CTL10964.visible = true;	//재신청작성
        		this.divBtn.form.CTL11046.visible = false;	//저장
        		this.divBtn.form.resetScroll();

        		//종료일자 확인 후 처리
        		if(!this.gfnIsNull(sEndDt)) {
        			if(sEndDt.substring(0, 8) < "20201007") {
        				//버튼세팅 divForm07에 정의
        				this.divForm07.form.fnSetbtnPrtcInfo(1);
        			} else {
        				//버튼세팅 divForm07에 정의
        				this.divForm07.form.fnSetbtnPrtcInfo(2);
        			}
        		} else {
        			//버튼 모두 비활성화(divForm07에 정의)
        			this.divForm07.form.fnSetEnablebtnPrtcInfo();
        		}

        		//스티커 출력 영역, 레이저 마킹 영역 줄어들지 않게 하기 위해 visible과 height 체크하여 영역 보존
        		this.divForm07.form.fnSetArea();

        		//출력 정보가 입력된 경우-만족도 조사 탭으로 이동
        		//출력 탭, 만족도 조사 탭 보이기
        		this.tabStep.Tabpage7.tabbuttonwidth = this.tabStep.Tabpage7.uptabbuttonwidth;
        		this.tabStep.Tabpage8.tabbuttonwidth = this.tabStep.Tabpage8.uptabbuttonwidth;
        		//만족도 조사 탭으로 이동
        		this.tabStep.tabindex = this.cfnGetTabIndex(this.tabStep, "Tabpage8");
        	}
        	*/
        };

        //정상 종료 단계에서 출력 정보가 입력되었는지 확인
        this.fnSetStepCloseChk = function() {
        	var stkrYn = false;
        	var laserYn = false;

        	//물품정보(그리드)의 row정보 중 하나라도 출력방법 구분코드가 "스티커 출력"일 때
        	for(var i = 0; i < this.dsCsaf.getRowCount(); i++) {
        		if(this.dsCsaf.getColumn(i, "otptMthdSeCd") == "LABELTYPE10") {
        			stkrYn = true;
        			break;
        		}
        	}

        	//물품정보(그리드)의 row정보 중 하나라도 출력방법 구분코드가 "레이저 출력"일 때
        	for(var i = 0; i < this.dsCsaf.getRowCount(); i++) {
        		if(this.dsCsaf.getColumn(i, "otptMthdSeCd") == "LABELTYPE20") {
        			laserYn = true;
        			break;
        		}
        	}

        	if(stkrYn && laserYn) {
        		//이미 그려진 영역에서 하단의 레이저 출력만 다시 세팅하도록 함(divForm07에 정의)
        		this.divForm07.form.fnLaserVisible(laserYn);
        	} else {
        		//스티커 출력이 있을 경우 스티커 출력 영역 보이기(divForm07에 정의)
        		this.divForm07.form.fnStkrVisible(stkrYn);

        		//레이저 출력이 있을 경우 레이저 출력 영역 보이기(divForm07에 정의)
        		this.divForm07.form.fnLaserVisible(laserYn);
        	}

        	//!! 운영 실제 내용 확인 필요 !!
        	var prtcInfoYn = true;
        	if(stkrYn) {
        		//스티커 출력일 때 스티커 출력 필수정보 중 하나라도 미입력 되어 있다면 입력필드 활성화
        		if(this.gfnIsNull(this.dsAply.getColumn(0, "prtcZoneDgadsCmdtyStkrOtptYn")) || this.gfnIsNull(this.dsAply.getColumn(0, "stkrPrntrNm"))
        		 || this.gfnIsNull(this.dsAply.getColumn(0, "prtcZoneDgadsCmdtyStkrRcvYn")) || this.gfnIsNull(this.dsAply.getColumn(0, "stkrRcvYmd"))
        		 || this.gfnIsNull(this.dsAply.getColumn(0, "stkrRcvDt"))
        		) {
        			prtcInfoYn = false;
        		}
        	}

        	if(laserYn) {
        		//레이저 출력일 때 레이저 출력 필수정보 중 하나라도 미입력 되어 있다면 입력필드 활성화
        		if(this.gfnIsNull(this.dsAply.getColumn(0, "prtcZoneDgadsCmdtyLaserMarkgEngvgYn")) || this.gfnIsNull(this.dsAply.getColumn(0, "laserMarkgEngvrNm"))
        		 || this.gfnIsNull(this.dsAply.getColumn(0, "prtcZoneDgadsCmdtyLaserMarkgRcvYn")) || this.gfnIsNull(this.dsAply.getColumn(0, "laserMarkgCmdtyTrnsfDt"))
        		 || this.gfnIsNull(this.dsAply.getColumn(0, "laserMarkgRcvDt")) || this.gfnIsNull(this.dsAply.getColumn(0, "laserMarkgCmdtyAcptnDayPrnmntDt"))
        		) {
        			prtcInfoYn = false;
        		}
        	}

        	//종료일자 확인 후 처리
        	var sEndDt = this.dsMst.getColumn(0, "endDt");
        	if(!this.gfnIsNull(sEndDt)) {
        		if(sEndDt.substring(0, 8) < "20201007") {
        			//버튼세팅 divForm07에 정의
        			this.divForm07.form.fnSetbtnPrtcInfo(3);
        		} else {
        			//버튼세팅 divForm07에 정의
        			this.divForm07.form.fnSetbtnPrtcInfo(4);
        		}
        	} else {
        		//버튼 모두 비활성화(divForm07에 정의)
        		this.divForm07.form.fnSetEnablebtnPrtcInfo();
        	}

        	//출력 정보가 입력되지 않았을 때 입력가능 필드로 세팅
        	if(!prtcInfoYn) {
        		//종료단계 컴포넌트 readonly 설정 해제
        		this.fnCompNoneReadOnlyClose();

        		//readonly 설정 해제 이후-출력여부에 따른 form 세팅
        		this.divForm07.form.fnPrtcSetForm("search");

        	} else {
        		//출력여부에 따른 form 세팅
        		this.divForm07.form.fnPrtcSetForm("search");

        		//종료단계 컴포넌트 readonly 설정 함수
        		this.fnCompReadOnlyClose("btnPrtcInfo1,btnPrtcInfo2,btnPrtcInfo3,btnPrtcInfo4,btnStkrPrtc1,btnStkrPrtc2,btnStkrPrtc3,btnStkrPrtc4,btnLaserPrtc1,btnLaserPrtc2");
        	}

        	//스티커 출력 영역, 레이저 마킹 영역 줄어들지 않게 하기 위해 visible과 height 체크하여 영역 보존
        	this.divForm07.form.fnSetArea();

        	//출력영역 세팅
        	this.tabStep.Tabpage7.tabbuttonwidth = this.tabStep.Tabpage7.uptabbuttonwidth;
        	//만족도 탭 숨기기
        	this.tabStep.Tabpage8.uptabbuttonwidth = this.tabStep.Tabpage8.tabbuttonwidth;
        	this.tabStep.Tabpage8.tabbuttonwidth = 0;
        };

        //종료단계 컴포넌트 readonly 설정 함수(exceptionId 설정 피하는 ID)
        this.fnCompReadOnlyClose = function(exceptionId) {

        	const arrDivs = [this.divForm07];
        	const arrReadonly = [nexacro.Edit, nexacro.Grid, nexacro.Radio, nexacro.Combo, nexacro.TextArea];
        	const arrEnable = [nexacro.Button];

        	arrDivs.forEach(oDiv => {
        		fnReadonly.call(this, oDiv.form.components);
        	})

        	function fnReadonly (arrComps) {
        		Array.from(arrComps).forEach(oComp => {

        			if (oComp instanceof nexacro.Div) {
        				fnReadonly.call(this, oComp.form.components);
        				return;
        			}

        			else if (oComp instanceof nexacro.Edit || oComp instanceof nexacro.Radio || oComp instanceof nexacro.Grid
        				|| oComp instanceof nexacro.Combo || oComp instanceof nexacro.TextArea || oComp instanceof nexacro.Calendar)  {
        				oComp.readonly = true;
        				if(exceptionId.indexOf(oComp.id) != -1) {
        					oComp.readonly = false;
        				}
        			}

        			else if (oComp instanceof nexacro.Button) {
        				//cssclass가 접고 여는 버튼이라면 에외처리
        				if(oComp.cssclass == "btn_WF_ACMinus" || oComp.cssclass == "btn_WF_ACPlus") {
        					oComp.enable = true;
        				} else {
        					oComp.enable = false;
        				}
        				if(exceptionId.indexOf(oComp.id) != -1) {
        					oComp.enable = true;
        				}
        			}
        		});
        	}

        	this.resetScroll();

        };

        //종료단계 컴포넌트 readonly 설정 해제 함수
        this.fnCompNoneReadOnlyClose = function() {

        	const arrDivs = [this.divForm07];
        	const arrReadonly = [nexacro.Edit, nexacro.Grid, nexacro.Radio, nexacro.Combo, nexacro.TextArea];
        	const arrEnable = [nexacro.Button];

        	arrDivs.forEach(oDiv => {
        		fnReadonlyNone.call(this, oDiv.form.components);
        	})

        	function fnReadonlyNone (arrComps) {
        		Array.from(arrComps).forEach(oComp => {

        			if (oComp instanceof nexacro.Div) {
        				fnReadonlyNone.call(this, oComp.form.components);
        				return;
        			}

        			else if (oComp instanceof nexacro.Edit || oComp instanceof nexacro.Radio || oComp instanceof nexacro.Grid
        				|| oComp instanceof nexacro.Combo || oComp instanceof nexacro.TextArea || oComp instanceof nexacro.Calendar)  {
        				oComp.readonly = false;
        			}

        			else if (oComp instanceof nexacro.Button) {
        				oComp.enable = true;
        			}
        		});
        	}

        	this.resetScroll();
        };

        //(만족도조사, 정상 종료 외의)일반적인 상태에서 [출력] 탭, [만족도 조사] 탭 숨기기
        this.fnSetTabVisible = function() {
        	// [출력] 탭, [만족도 조사] 탭 숨기기
        	this.tabStep.Tabpage7.uptabbuttonwidth = this.tabStep.Tabpage7.tabbuttonwidth;
        	this.tabStep.Tabpage7.tabbuttonwidth = 0;
        	this.tabStep.Tabpage8.uptabbuttonwidth = this.tabStep.Tabpage8.tabbuttonwidth;
        	this.tabStep.Tabpage8.tabbuttonwidth = 0;
        };

        //정상 종료시의 위해물품목록 엑셀 다운로드
        this.fnExcelDownload = function() {
        	var objApp = nexacro.getApplication();
        	this.objSrv = nexacro.getEnvironment().services["svcUrl"];

        	var objWebBrowser;
        	var bRet = this.isValidObject("WebBrowser11");

        	if(bRet) {
        		objWebBrowser = this.lookup("WebBrowser11");
        	} else {
        		objWebBrowser = new WebBrowser();
        		objWebBrowser.init("WebBrowser11", 0, 0, 0, 0, null, null);
        		this.insertChild(-1, "WebBrowser11", objWebBrowser);
        		objWebBrowser.show();
        	}

        	var url = "cst/sec/selectPrtcZoneCmdtyCsafListDownload.do";
        	this.gfnWebBrowserSendPostDs(this, objWebBrowser, url, this.dsResult);
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.Button_onclick = function(obj,e)
        {
        	// [TAS00070 신청서작성] CTL00771 임시저장, CTL00131 신청, CTL00814 종료, CTL00997 신청종료-미사용
        	// [TAS00072 담당자 접수] CTL00134 접수, CTL01040 회수
        	// [TAS00523 신청서 회수] CTL01041 재신청, CTL10907 미처리종료
        	// [TAS00075 종료] CTL10776 재신청작성, CTL11045 저장, CTL00245 조회-미사용
        	// [TAS10344 재신청] CTL10770 임시저장, CTL10771 신청, CTL10772 종료, CTL10773 신청취소
        	// [TAS00073 위해물품 검토] CTL00135 담당자변경, CTL00136 보완요청, CTL00137 승인-미사용으로 체크되어 있음, CTL00862 미처리종료, CTL11127 위해물품승인
        	// [TAS00071 신청서 보완] CTL00132 재신청, CTL00133 미처리종료
        	// [TAS00485 현업확인] CTL00931 처리완료-현업확인 페이지를 현재 미사용으로 보고 있음
        	// [TAS00293 만족도조사] CTL00307 설문응답완료, CTL10964 재신청작성, CTL11046 저장
        	const wfInfo = this.cfnGetWfInfo(obj.name);
        	trace(JSON.stringify(wfInfo));

        	const sPrcsSeCd = wfInfo.prcsSeCd;
        	const sPrceSeNm = wfInfo.prcsSeCdNm;
        	const sNextPrcsSeCd = wfInfo.nextStepJobPrcsPrgrsSeCd;
        	//위해물품 승인시에는 사진이 필수로 있는지 체크 후 진행
        	var chkFlag = true;

        	// 임시저장, 종료 이럴때는 저장시 체크 조건 제외
        	// CTL00771:신청서작성>임시저장, CTL00814:신청서작성>종료, CTL01040:담당자접수>회수, CTL10907:신청서회수>미처리종료
        	// CTL10776:종료>재신청작성, CTL10770:재신청>임시저장, CTL10772:재신청>종료, CTL10773:재신청>신청취소
        	// CTL00135:위해물품검토>담당자변경, CTL00136:위해물품검토>보완요청, CTL00862:위해물품검토>미처리종료
        	// CTL00133:신청서보완>미처리종료, CTL11046:만족도조사>저장, CTL10964:만족도조사>재신청작성
        	var excepChkCd = "CTL00771:임시저장,CTL00814:종료,CTL01040:회수,CTL10907:미처리종료,CTL10776:재신청작성,CTL10770:임시저장,CTL10772:종료,CTL10773:신청취소"
        	               + ",CTL00135:담당자변경,CTL00136:보완요청,CTL00862:미처리종료,CTL00133:미처리종료,CTL11046:저장,CTL10964:재신청작성";
        	if(excepChkCd.indexOf(sPrcsSeCd) != -1) {
        		/*
        		if (!this.gfnDsIsUpdated(this.dsMst) && !this.gfnDsIsUpdated(this.dsAply)
        				&& !this.gfnDsIsUpdated(this.dsCsaf) && !this.gfnDsIsUpdated(this.dsCnvyMttrCn)
        				&& !this.gfnDsIsUpdated(this.dsAtfl)) {
        			this.gfnAlertMsg("msg", "MSG_004");	// 변경된 내역이 없습니다.
        			return;
        		}
        		*/
        	} else {
        		// CTL00131:신청서작성>신청, CTL00134:담당자접수>접수, CTL01041:신청서회수>재신청작성, CTL11045:종료>저장
        		// CTL10771:재신청>신청, CTL00137:위해물품 검토>승인, CTL11127:위해물품 검토>위해물품승인, CTL00132:신청서보완>재신청
        		// CTL00931:현업확인>처리완료, CTL00307:만족도조사>설문응답완료

        		//만족도조사의 설문응답완료일 때에는 유효성 검증, 개인정보수집 및 이용동의서를 넘어감(체크해야 한다면 위해물품승인처럼 아래에 추가 필요)
        		if("CTL00307:설문응답완료".indexOf(sPrcsSeCd) != -1) {
        			//설문응답완료 시에는 출력 관련 정보와 설문응답여부만 체크
        			//출력 정보 체크
        			if(!this.fnValidatePrntr(sPrcsSeCd)) return;

        			//설문응답여부 체크
        			if(!this.fnValidateSurvey(sPrcsSeCd)) return;

        		} else {
        			// 유효성 검증
        			if (!this.fnValidateAll(sPrcsSeCd)) return;

        			// 개인정보수집 및 이용동의서
        			if (!this.fnValidateFile(sPrcsSeCd)) return;

        			//위해물품 승인시에는 사진이 필수로 있는지 체크 후 진행
        			if("CTL11127:위해물품승인".indexOf(sPrcsSeCd) != -1) {
        				//전달사항 필수입력 확인(신규추가된 행 0번째만 체크)
        				if(this.gfnIsNull(this.dsCnvyMttrCn.getColumn(0, "cnvyMttrCn"))) {
        					this.setStepIndex(5);
        					this.gfnAlertMsg("msg", "MSG_009", ["전달사항"]); //{0} 을/를 입력해 주세요.
        					return false;
        				}
        				chkFlag = this.fnValidatePhoto();
        			}
        		}
        	}

        	//위해물품승인이 아니고 위해물품승인일 때에는 그리드에 사진이 모두 있을 때
        	if(chkFlag) {
        		// {0}(을)를 하시겠습니까?
        		this.gfnConfirmMsg("saveConfirm", "CST_001", function(sPopupId, sRtn) {
        			if(JSON.parse(sRtn).result == "Y") {
        				trace("저장진행");

        				this.dsMst.setColumn(0, "curJobCd", this.gfnNvl(sPrcsSeCd, "CTL00771"));
        				this.dsMst.setColumn(0, "jobCd", sNextPrcsSeCd);
        				this.dsMst.setColumn(0, "taskCd", wfInfo.jobPrcsPrgrsSeCd);	//현재업무코드
        				this.dsMst.setColumn(0, "nextTaskCd", sNextPrcsSeCd);	//다음업무코드
        				this.dsTempSeCd.clearData();
        				this.dsTempSeCd.addRow();
        				this.dsTempSeCd.setColumn(0, "tempPrcsSeCd", sPrcsSeCd);		//화면 스크립트 사용위해 처리구분 세팅

        				//CTL10773:재신청>신청취소 일 때에는 데이터 삭제 후 저장
        				if("CTL10773:신청취소".indexOf(sPrcsSeCd) != -1) {
        					trace("신청취소일 때에는 모두 삭제 필요");
        					// 위해물품 사용신청 첨부파일(동의서) dsAtfl
        					for(var i = this.dsAtfl.rowcount - 1; i >= 0; i--) {
        						trace("dsAtfl = " + this.dsAtfl.getColumn(i, "colId"));
        						if(this.dsAtfl.getColumn(i, "colId") == "sprvsn01OrgnlFileNm") {
        							this.cfnSetAtflInfo(this.divForm03.form.RaonkUpload, this.divForm03.form.grdSprvsn01).cfnDelAtfl();
        						} else if(this.dsAtfl.getColumn(i, "colId") == "sprvsn02OrgnlFileNm") {
        							this.cfnSetAtflInfo(this.divForm03.form.RaonkUpload, this.divForm03.form.grdSprvsn02).cfnDelAtfl();
        						} else if(this.dsAtfl.getColumn(i, "colId") == "actl01OrgnlFileNm") {
        							this.cfnSetAtflInfo(this.divForm03.form.RaonkUpload, this.divForm03.form.grdActl01).cfnDelAtfl();
        						} else if(this.dsAtfl.getColumn(i, "colId") == "actl02OrgnlFileNm") {
        							this.cfnSetAtflInfo(this.divForm03.form.RaonkUpload, this.divForm03.form.grdActl02).cfnDelAtfl();
        						}
        					}
        					// 위해물품 신청물품 첨부파일(물품사진) dsCmdtyAtfl
        					for(var k = this.dsCmdtyAtfl.rowcount - 1; k >= 0; k--) {
        						trace("dsCmdtyAtfl = " + this.dsCmdtyAtfl.getColumn(k, "colId"));
        						var colId = this.dsCmdtyAtfl.getColumn(k, "colId");

        						this.divForm05.form.RaonkUpload.upatflinfo = {colid : this.dsCmdtyAtfl.getColumn(k, "colId")};
        						this.divForm05.form.RaonkUpload.cfnDelAtfl();
        					}

        				} else if("CTL00307:설문응답완료".indexOf(sPrcsSeCd) != -1) {
        					//설문응답 완료일 때에는 출력 탭의 시간정보 확인하여 값 입력
        					var sStkrRcvDt2 = this.gfnTrim(this.dsAply.getColumn(0, "stkrRcvDt2"));		//마스크 에디터 타입이라 trim필요
        					var sLaserMarkgCmdtyDt2 = this.gfnTrim(this.dsAply.getColumn(0, "laserMarkgCmdtyDt2"));		//마스크 에디터 타입이라 trim필요
        					var sLaserMarkgRcvDt2 = this.gfnTrim(this.dsAply.getColumn(0, "laserMarkgRcvDt2"));			//마스크 에디터 타입이라 trim필요
        					var sLaserMarkgCmdtyAcptnDt2 = this.gfnTrim(this.dsAply.getColumn(0, "laserMarkgCmdtyAcptnDt2"));		//마스크 에디터 타입이라 trim필요

        					if(!this.gfnIsNull(sStkrRcvDt2)) {
        						//59초 세팅
        						this.dsAply.setColumn(0, "stkrRcvDt2", sStkrRcvDt2 + "59");
        					}
        					if(!this.gfnIsNull(sLaserMarkgCmdtyDt2)) {
        						//59초 세팅
        						this.dsAply.setColumn(0, "laserMarkgCmdtyDt2", sLaserMarkgCmdtyDt2 + "59");
        					}
        					if(!this.gfnIsNull(sLaserMarkgRcvDt2)) {
        						//59초 세팅
        						this.dsAply.setColumn(0, "laserMarkgRcvDt2", sLaserMarkgRcvDt2 + "59");
        					}
        					if(!this.gfnIsNull(sLaserMarkgCmdtyAcptnDt2)) {
        						//59초 세팅
        						this.dsAply.setColumn(0, "laserMarkgCmdtyAcptnDt2", sLaserMarkgCmdtyAcptnDt2 + "59");
        					}

        				} else if("CTL00135:담당자변경".indexOf(sPrcsSeCd) != -1) {
        					//담당자 변경일 때에는 별도의 팝업창 오픈 이후 전달되는 데이터가 있는 경우에만 후속조치 수행
        					var sTitle = "담당자변경/담당자찾기";
        					//파라미터 확인필요
        					var objArg   = {
        						"gubun" : "SEC"
        					};

        					var objOption = {
        						popuptype  : "modal"	//modal,modaless
        						, autosize : true
        						, title    : sTitle
        						, resize   : true
        						, titlebar : true
        					};

        					//담당자 변경 팝업(팝업url 확인 후 수정 필요할 수도)
        					this.gfnOpenPopup("chgPrcrIdPop", "work::CST/COM/CST006P20.xfdl", {}, (sPopId, sRtn) => {
        						if (this.gfnIsNull(sRtn)) return;

        						var objRtn = JSON.parse(sRtn);
        						var sUserId = objRtn.rUserId;
        						var sUserNm = objRtn.rUserNm;
        						this.dsMst.setColumn(0, "chgPrcrId", sUserId);

        						trace("담당자 변경 팝업오픈 후 리턴값 받았음!");

        						//저장 시 반복되는 내용들 별도로 분리
        						this.fnSaveStep(sPrcsSeCd);

        					}, objOption);

        					return;
        				} else if("CTL10776:재신청작성,CTL10964:재신청작성".indexOf(sPrcsSeCd) != -1) {
        					//재신청작성 시에는 기존 정보 복사해서 신규정보로 만들어서 세팅
        					this.fnDsInsert();

        					trace("CTL10776:재신청작성,CTL10964:재신청작성!");

        					//재신청작성 저장 별도 분리
        					this.fnReSaveStep(sPrcsSeCd);
        					return;
        				}

        				trace("담당자 변경, 재신청 작성 외의 상황들 저장");

        				//저장 시 반복되는 내용들 별도로 분리
        				this.fnSaveStep(sPrcsSeCd);
        			}
        		}, ["확인", "아니오"], ["Y", "N"], null, [obj.text]);

        	} else {
        		//위해물품 승인일 때 그리드 사진 첨부파일이 없을 경우
        		this.gfnConfirmMsg("saveConfirmAppr", "MSG_026", function(sPopupId, sRtn) {
        			if(JSON.parse(sRtn).result == "Y") {
        				trace("위해물품 승인 그리드 사진 첨부파일 없음");

        				this.dsMst.setColumn(0, "curJobCd", this.gfnNvl(sPrcsSeCd, "CTL00771"));
        				this.dsMst.setColumn(0, "jobCd", sNextPrcsSeCd);
        				this.dsMst.setColumn(0, "taskCd", wfInfo.jobPrcsPrgrsSeCd);	//현재업무코드
        				this.dsMst.setColumn(0, "nextTaskCd", sNextPrcsSeCd);	//다음업무코드
        				this.dsTempSeCd.clearData();
        				this.dsTempSeCd.addRow();
        				this.dsTempSeCd.setColumn(0, "tempPrcsSeCd", sPrcsSeCd);		//화면 스크립트 사용위해 처리구분 세팅

        				//저장 시 반복되는 내용들 별도로 분리
        				this.fnSaveStep(sPrcsSeCd);
        			}
        		}, ["확인", "아니오"], ["Y", "N"], null, ["[주의]위해물품 목록에 사진 누락이\n확인되었습니다. 일반 위해물품인 경우\n반드시 사진첨부가 되었는지 검토요청드리며\n항공기 정비물품일 경우 검토 후\n승인 진행하시길 바랍니다.\n승인하시겠습니까?"]);
        	}
        };

        this.tabStep_onchanged = function(obj,e)
        {
        	this.setStepIndex(obj.tabindex);
        };

        this.CST009M00_onstepchanged = function(obj,e)
        {
        	this.divBtn.positionstep  = e.postindex;  // 버튼
        	this.tabStep.positionstep = e.postindex;  // 스텝
        	this.tabStep.tabindex     = this.getStepIndex();

        	// 탭이 숨겨져 있는 경우 Skip
        	if(this.tabStep.tabpages[e.postindex].tabbuttonwidth == 0) {
        	    var idx = e.postindex + (Math.sign(e.postindex - e.preindex));
        		this.setStepIndex(idx > this.getStepCount() - 1 ? 0 : (idx == -1 ? 0 : idx));
        	}
        };

        this.CST009M00_onkeydown = function(obj,e)
        {
        	if(e.shiftkey && e.altkey) {
        		if(e.keycode == 37) {
        			this.setStepIndex(this.getStepIndex() == 0 ? this.getStepCount() - 1 : this.getStepIndex() - 1);
        		} else if(e.keycode == 39) {
        			this.setStepIndex(this.getStepIndex() == this.getStepCount() - 1 ? 0 : this.getStepIndex() + 1);
        		}
        	}
        };

        this.CST009M00_onsize = function(obj,e)
        {
        	this.resetScroll();
        };

        // 신청내역 변경 전
        this.dsAply_cancolumnchange = function(obj,e)
        {
        	// 보안위해물품사용시작일자
        	if (!this.gfnIsNull(e.newvalue) && e.columnid == "scrtyDgadsCmdtyUseBgngYmd") {
        		const sEndYmd = obj.getColumn(e.row, "scrtyDgadsCmdtyUseEndYmd");
        		if (this.gfn_getDiffDate(this.fvCurDate, e.newvalue) < 0) {
        			this.gfnAlertMsg("msg", "MSG_011", ["사용 시작일은 오늘 이후 날짜만 가능합니다."]);
        			return false;
        		} else if (!this.gfnIsNull(sEndYmd) && e.newvalue > sEndYmd) {
        			this.gfnAlertMsg("msg", "MSG_011", ["사용종료일 보다 같거나 작아야 합니다."]);
        			return false;
        		} else if (!this.gfnIsNull(sEndYmd) && this.gfn_getDiffDate(e.newvalue, sEndYmd) < 30) {
        			this.gfnAlertMsg("msg", "MSG_011", ["사용일이 30일이 안될경우 작업신고서를 \n통해 사용 신청하시길 바랍니다."]);
        			return false;
        		}
        	}

        	// 보안위해물품사용종료일자
        	else if (e.columnid == "scrtyDgadsCmdtyUseEndYmd") {
        		const sBgngYmd = obj.getColumn(e.row, "scrtyDgadsCmdtyUseBgngYmd");
        		//const nDiffDate = this.gfn_getDiffDate(this.fvCurDate, e.newvalue);
        		if (this.gfnIsNull(sBgngYmd)) {
        			this.gfnAlertMsg("msg", "MSG_011", ["사용 시작일 먼저 입력하세요."]);
        			return false;
        		} else if (sBgngYmd > e.newvalue) {
        			this.gfnAlertMsg("msg", "MSG_011", ["사용시작일 보다 같거나 커야 합니다."]);
        			return false;
        		} else if (!this.gfnIsNull(sBgngYmd) && this.gfn_getDiffDate(sBgngYmd, e.newvalue) > 1825) {
        			this.gfnAlertMsg("msg", "MSG_011", ["사용 종료일은 5년 이내만 가능합니다."]);
        			return false;
        		} else if (!this.gfnIsNull(sBgngYmd) && this.gfn_getDiffDate(sBgngYmd, e.newvalue) < 30) {
        			this.gfnAlertMsg("msg", "MSG_011", ["사용일이 30일이 안될경우 작업신고서를 \n통해 사용 신청하시길 바랍니다."]);
        			return false;
        		}
        	}

        	// 주관사 관리책임자 정, 부 validation
        	else if (e.columnid == "sprvsnCoMngRbprsn1SmYn" || e.columnid == "sprvsnCoMngRbprsn2SmYn") {
        		const sVal1 = e.columnid == "sprvsnCoMngRbprsn1SmYn" ? e.newvalue : obj.getColumn(e.row, "sprvsnCoMngRbprsn1SmYn");
        		const sVal2 = e.columnid == "sprvsnCoMngRbprsn2SmYn" ? e.newvalue : obj.getColumn(e.row, "sprvsnCoMngRbprsn2SmYn");

        		// 정, 부 : 신청자 정보와 동일 한 경우
        		if (sVal1 == "Y" && sVal1 == sVal2) {
        			this.gfnAlertMsg("msg", "MSG_011", ["국가항공보안계획에 따라 위해물품 \n관리책임자는 정/부 별도로 \n지정하시기 바랍니다."], () => {
        				obj.setColumn(e.row, e.columnid, "N");
        			});
        			return false;
        		}
        	}

        	return true;
        };

        // 신청정보 변경
        this.dsAply_oncolumnchanged = function(obj,e)
        {
        	// 사용업체 동일여부
        	if (e.columnid == "useBzentySmYn") {
        		// 실제사용영역 visible 처리
        		this.divForm03.form.fnActlVisible(this.gfnNvl(e.newvalue, "Y") == "N");
        	}

        	// 개인정보수접 1, 2, 3, 4 : [신청자정보와동일 || 신청자정보와동일하지않음]
        	else if (["sprvsnCoMngRbprsn1SmYn", "sprvsnCoMngRbprsn2SmYn", "actlUseCoMngRbprsn1SmYn", "actlUseCoMngRbprsn2SmYn"]
        				.includes(e.columnid)) {
        		// 컴포넌트는 대상화면 함수로
        		this.divForm03.form.fnSmYnVisible(e.columnid, e.newvalue);

        		// 데이터는 메인에서 =  관리책임자정, 회사명, 전화번호, 개인정보수집및이용동의서경로 초기화 후 동일하다면 세션정보 셋팅
        		if (e.columnid == "sprvsnCoMngRbprsn1SmYn") {
        			const arrTargetColId = ["sprvsnCoMngRbprsn1Nm", "sprvsnCoNm"
        			                      , "sprvsnCoMngRbprsn1MblTelno1", "sprvsnCoMngRbprsn1MblTelno2", "sprvsnCoMngRbprsn1MblTelno3"
        								  , "sprvsnCoDeptNm", "sprvsnCoTelno1", "sprvsnCoTelno2", "sprvsnCoTelno3", "sprvsnCoMngRbprsn1PrvcClctUtztnWtcsPath"];
        			// 값 초기화(전화번호 콤보박스 선택위해 별도 추가)
        			arrTargetColId.forEach(function(sColId){
        				if(sColId == "sprvsnCoMngRbprsn1MblTelno1" || sColId == "sprvsnCoTelno1" ) {
        					obj.setColumn(e.row, sColId, null);
        				} else {
        					obj.setColumn(e.row, sColId, "");
        				}
        			});
        //			arrTargetColId.forEach(sColId => obj.setColumn(e.row, sColId, ""));
        // 			arrTargetColId.forEach(function(sColId){
        // 				obj.setColumn(e.row, sColId, "");
        // 			});

        			//첨부파일 데이터 삭제
        			this.cfnSetAtflInfo(this.divForm03.form.RaonkUpload, this.divForm03.form.grdSprvsn01).cfnDelAtfl();

        			// 신청자정보와 동일하다면 세션정보를 넣어준다. : 주관사 관리책임자(정)
        			if (e.newvalue == "Y") {
        				obj.setColumn(e.row, "sprvsnCoNm", this.gvCoNm);
        				obj.setColumn(e.row, "sprvsnCoMngRbprsn1Nm", this.gvUserNm);
        				obj.setColumn(e.row, "sprvsnCoMngRbprsn1MblTelno1", "010");
        				obj.setColumn(e.row, "sprvsnCoMngRbprsn1MblTelno2", "1234");
        				obj.setColumn(e.row, "sprvsnCoMngRbprsn1MblTelno3", "5678");
        				// obj.setColumn(e.row, "cboSprvsnCoMngRbprsn1MblTelNo1", this.gvTelNo); // 세션에 정보가 없음
        				obj.setColumn(e.row, "sprvsnCoDeptNm", this.gvDeptNm);	// 부서명
        				obj.setColumn(e.row, "sprvsnCoTelno1", "032");
        				obj.setColumn(e.row, "sprvsnCoTelno2", "000");
        				obj.setColumn(e.row, "sprvsnCoTelno3", "9999");
        				// obj.setColumn(e.row, "sprvsnCoTelno1", this.gvTelNo2); // (회사번호)세션 정보 암복호화 필요
        			}
        		}

        		else if (e.columnid == "sprvsnCoMngRbprsn2SmYn") {
        			const arrTargetColId = ["sprvsnCoMngRbprsn2Nm", "sprvsnCoMngRbprsn2MblTelno1", "sprvsnCoMngRbprsn2MblTelno2", "sprvsnCoMngRbprsn2MblTelno3"
        			                       ,"sprvsnCoMngRbprsn2PrvcClctUtztnWtcsPath"];

        			//값 초기화(전화번호 콤보박스 선택위해 별도 추가)
        			//arrTargetColId.forEach(sColId => obj.setColumn(e.row, sColId, ""));
        			arrTargetColId.forEach(function(sColId){
        				if(sColId == "sprvsnCoMngRbprsn2MblTelno1") {
        					obj.setColumn(e.row, sColId, null);
        				} else {
        					obj.setColumn(e.row, sColId, "");
        				}
        			});

        			//첨부파일 데이터 삭제
        			this.cfnSetAtflInfo(this.divForm03.form.RaonkUpload, this.divForm03.form.grdSprvsn02).cfnDelAtfl();

        			// 신청자정보와 동일하다면 세션정보를 넣어준다. : 주관사 관리책임자(부)
        			if (e.newvalue == "Y") {
        				obj.setColumn(e.row, "sprvsnCoMngRbprsn2Nm", this.gvUserNm);
        				obj.setColumn(e.row, "sprvsnCoMngRbprsn2MblTelno1", "010");
        				obj.setColumn(e.row, "sprvsnCoMngRbprsn2MblTelno2", "1234");
        				obj.setColumn(e.row, "sprvsnCoMngRbprsn2MblTelno3", "5678");
        			}
        		}

        		else if (e.columnid == "actlUseCoMngRbprsn1SmYn") {
        			const arrTargetColId = ["actlUseCoTelno1", "actlUseCoTelno2", "actlUseCoTelno3"
        			                       ,"actlUseCoMngRbprsn1Nm", "actlUseCoNm", "actlUseCoRbprsn1MblTelno1", "actlUseCoRbprsn1MblTelno2", "actlUseCoRbprsn1MblTelno3"
        								   ,"actlUseCoMngRbprsn1PrvcClctUtztnWtcsPath"];

        			// 값 초기화(전화번호 콤보박스 선택위해 별도 추가)
        			//arrTargetColId.forEach(sColId => obj.setColumn(e.row, sColId, ""));
        			arrTargetColId.forEach(function(sColId){
        				if(sColId == "actlUseCoTelno1" || sColId == "actlUseCoRbprsn1MblTelno1" ) {
        					obj.setColumn(e.row, sColId, null);
        				} else {
        					obj.setColumn(e.row, sColId, "");
        				}
        			});

        			//첨부파일 데이터 삭제
        			this.cfnSetAtflInfo(this.divForm03.form.RaonkUpload, this.divForm03.form.grdActl01).cfnDelAtfl();

        			// 신청자정보와 동일하다면 세션정보를 넣어준다. : 실사용자 관리책임자(정)
        			if (e.newvalue == "Y") {
        				obj.setColumn(e.row, "actlUseCoNm", this.gvCoNm);
        				obj.setColumn(e.row, "actlUseCoMngRbprsn1Nm", this.gvUserNm);
        				obj.setColumn(e.row, "actlUseCoRbprsn1MblTelno1", "010");
        				obj.setColumn(e.row, "actlUseCoRbprsn1MblTelno2", "1234");
        				obj.setColumn(e.row, "actlUseCoRbprsn1MblTelno3", "5678");
        				obj.setColumn(e.row, "actlUseCoTelno1", "032");
        				obj.setColumn(e.row, "actlUseCoTelno2", "000");
        				obj.setColumn(e.row, "actlUseCoTelno3", "9999");
        				// obj.setColumn(e.row, "sprvsnCoTelno1", this.gvTelNo2); // (회사번호)세션 정보 암복호화 필요
        			}
        		}

        		else if (e.columnid == "actlUseCoMngRbprsn2SmYn") {
        			const arrTargetColId = ["actlUseCoMngRbprsn2Nm", "actlUseCoRbprsn2MblTelno1", "actlUseCoRbprsn2MblTelno2", "actlUseCoRbprsn2MblTelno3"
        			                       ,"actlUseCoMngRbprsn2PrvcClctUtztnWtcsPath"];

        			//값 초기화(전화번호 콤보박스 선택위해 별도 추가)
        			//arrTargetColId.forEach(sColId => obj.setColumn(e.row, sColId, ""));
        			arrTargetColId.forEach(function(sColId){
        				if(sColId == "actlUseCoRbprsn2MblTelno1") {
        					obj.setColumn(e.row, sColId, null);
        				} else {
        					obj.setColumn(e.row, sColId, "");
        				}
        			});

        			//첨부파일 데이터 삭제
        			this.cfnSetAtflInfo(this.divForm03.form.RaonkUpload, this.divForm03.form.grdActl02).cfnDelAtfl();

        			// 신청자정보와 동일하다면 세션정보를 넣어준다. : 실사용자 관리책임자(부)
        			if (e.newvalue == "Y") {
        				obj.setColumn(e.row, "actlUseCoMngRbprsn2Nm", this.gvUserNm);
        				obj.setColumn(e.row, "actlUseCoRbprsn2MblTelno1", "010");
        				obj.setColumn(e.row, "actlUseCoRbprsn2MblTelno2", "1234");
        				obj.setColumn(e.row, "actlUseCoRbprsn2MblTelno3", "5678");
        			}
        		}
        	}

        	// 스티커 출력, 레이저 마킹 출력
        	else if (["prtcZoneDgadsCmdtyStkrOtptYn", "prtcZoneDgadsCmdtyStkrRcvYn", "prtcZoneDgadsCmdtyLaserMarkgEngvgYn", "prtcZoneDgadsCmdtyLaserMarkgRcvYn"]
        				.includes(e.columnid)) {

        		// 컴포넌트는 대상화면 함수로
        		this.divForm07.form.fnPrtcSetForm(e.columnid, e.newvalue);

        		// 데이터는 메인에서
        		if (e.columnid == "prtcZoneDgadsCmdtyStkrOtptYn") {
        			const arrTargetColId = ["stkrPrntrNm", "prtcZoneDgadsCmdtyStkrRcvYn", "stkrRcvYmd", "stkrRcvDt", "stkrRcvDt2"];

        			if (e.newvalue == "N") {
        				//값 초기화
        				arrTargetColId.forEach(sColId => obj.setColumn(e.row, sColId, ""));
        			}
        		}

        		else if (e.columnid == "prtcZoneDgadsCmdtyStkrRcvYn") {
        			const arrTargetColId = ["stkrRcvYmd", "stkrRcvDt", "stkrRcvDt2"];

        			if (e.newvalue == "N") {
        				//값 초기화
        				arrTargetColId.forEach(sColId => obj.setColumn(e.row, sColId, ""));
        			}
        		}

        		else if (e.columnid == "prtcZoneDgadsCmdtyLaserMarkgEngvgYn") {
        			const arrTargetColId = ["laserMarkgEngvrNm", "prtcZoneDgadsCmdtyLaserMarkgRcvYn", "laserMarkgCmdtyTrnsfDt", "laserMarkgCmdtyYmd"
        			                       ,"laserMarkgCmdtyDt2", "laserMarkgRcvDt", "laserMarkgRcvYmd", "laserMarkgRcvDt2", "laserMarkgCmdtyAcptnDayPrnmntDt"
        								   ,"laserMarkgCmdtyAcptnYmd", "laserMarkgCmdtyAcptnDt2"];

        			if (e.newvalue == "N") {
        				//값 초기화
        				arrTargetColId.forEach(sColId => obj.setColumn(e.row, sColId, ""));
        			}
        		}

        		else if (e.columnid == "prtcZoneDgadsCmdtyLaserMarkgRcvYn") {
        			const arrTargetColId = ["laserMarkgCmdtyTrnsfDt", "laserMarkgCmdtyYmd"
        			                       ,"laserMarkgCmdtyDt2", "laserMarkgRcvDt", "laserMarkgRcvYmd", "laserMarkgRcvDt2", "laserMarkgCmdtyAcptnDayPrnmntDt"
        								   ,"laserMarkgCmdtyAcptnYmd", "laserMarkgCmdtyAcptnDt2"];

        			if (e.newvalue == "N") {
        				//값 초기화
        				arrTargetColId.forEach(sColId => obj.setColumn(e.row, sColId, ""));
        			}
        		}
        	}

        };

        // 물품정보 변경
        this.dsCsaf_oncolumnchanged = function(obj,e)
        {
        	var oldSn = e.oldvalue;  //기존의 값
        	var vSn   = this.dsCsaf.getColumn(e.row, "sn");  //변경된 값

        	//순번이 변경되면 1. 기존 내용과 중복되는지 확인(중복된다면 입력 안되도록) 2. 입력된 값으로 첨부파일과 관련된 데이터 셋 같이 변경
        	if(e.columnid == "sn") {
        		trace("기존 값 = " + oldSn + ", 신규 값 = " + vSn);

        		if(!this.gfnIsNull(vSn)) {
        			//기존값과 중복체크
        			for (let i=0; i<this.dsCsaf.getRowCount(); i++) {
        				if(this.dsCsaf.extractRows("sn == '" + vSn + "'").length > 1) {
        					if(this.gfnIsNull(oldSn)) {
        						this.dsCsaf.setColumn(e.row, "sn", "");
        					} else {
        						this.dsCsaf.setColumn(e.row, "sn", oldSn);
        					}
        					this.gfnAlertMsg("msg", "MSG_011", ["같은 값을 가진 순번이 있어\n변경할 수 없습니다."]);
        					return false;
        				}
        			}
        			// 존재하지 않으면 첨부파일 관련 변경 안 함
        			var nRow = this.dsCmdtyAtfl.findRow("colId", oldSn);
        			if(nRow == -1) { return; }

        			// 존재하면 신규내용으로 업데이트
        			this.dsCmdtyAtfl.setColumn(nRow, "colId", vSn);

        			// RaonkUpload mergeFile 수정
        			if(this.divForm05.form.RaonkUpload.GetListInfo().mergeFile) {
        				for(let i = 0; i < this.divForm05.form.RaonkUpload.GetListInfo().mergeFile.length; i++) {
        					//파일이 업로드되어 있다면 관련값 수정
        					//JSON.parse(this.divForm05.form.RaonkUpload.GetListInfo().mergeFile[i].customValue) 저장된 파일 변경,
        					//JSON.parse(this.divForm05.form.RaonkUpload.GetListInfo().mergeFile[i].customValue).strCustomValue 저장 전 파일 변경
        					if(JSON.parse(this.divForm05.form.RaonkUpload.GetListInfo().mergeFile[i].customValue) == oldSn
        					  || JSON.parse(this.divForm05.form.RaonkUpload.GetListInfo().mergeFile[i].customValue).strCustomValue == oldSn) {
        						this.divForm05.form.RaonkUpload.SetFileCustomValue(i, JSON.stringify({ "strCustomValue" : vSn }));
        					}
        				}
        			}

        		} else {
        			this.gfnAlertMsg("msg", "MSG_011", ["순번을 입력하세요."]);
        			return;
        		}
        	}
        };

        //첨부파일 관련(4개 파일)
        this.dsAtfl_onload = function(obj,e)
        {
        	// RaonkUpload 초기화
        	this.divForm03.form.RaonkUpload.ResetUpload();

        	// 첨부 파일 표출용 DS 설정
        	for(var i = 0; i < this.dsAtfl.rowcount; i++) {
        		// 첨부 파일 표출용 DS 설정
        		//var colId = this.dsAtfl.getColumn(i, "colId");
        		var colId = "";
        		if(this.dsAply.getColumn(0, "sprvsnCoMngRbprsn1PrvcClctUtztnWtcsPath") == this.dsAtfl.getColumn(i, "atflMngNo")) {
        			colId = "sprvsn01OrgnlFileNm";
        		} else if(this.dsAply.getColumn(0, "sprvsnCoMngRbprsn2PrvcClctUtztnWtcsPath") == this.dsAtfl.getColumn(i, "atflMngNo")) {
        			colId = "sprvsn02OrgnlFileNm";
        		} else if(this.dsAply.getColumn(0, "actlUseCoMngRbprsn1PrvcClctUtztnWtcsPath") == this.dsAtfl.getColumn(i, "atflMngNo")) {
        			colId = "actl01OrgnlFileNm";
        		} else if(this.dsAply.getColumn(0, "actlUseCoMngRbprsn2PrvcClctUtztnWtcsPath") == this.dsAtfl.getColumn(i, "atflMngNo")) {
        			colId = "actl02OrgnlFileNm";
        		}
        		this.dsAtfl.setColumn(i, "colId", colId);	//colId 세팅
        		this.dsFile.setColumn(0, colId , this.dsAtfl.getColumn(i, "orgnlFileNm") + '(' + this.dsAtfl.getColumn(i, "fileSz") + ')');  // 파일풀명
            };

        	// 데이터 조회 후 첨부파일 파일리스트에 셋팅
        	this.gfnDownloadSetting(this.divForm03.form.RaonkUpload, this.dsAtfl);

        	this.dsAtfl.applyChange();
        	this.resetScroll();

        };

        //첨부파일 관련(그리드)
        this.dsCmdtyAtfl_onload = function(obj,e)
        {
        	if(this.divForm05.form.RaonkUpload) {
        		if(this.dsCmdtyAtfl.rowcount > 0) {
        			//그리드의 orgnlFileNm 생성
        			this.dsCsaf.addColumn("orgnlFileNm", "string");
        		}
        	}

        	//첨부파일 정보 그리드의 orgnlFileNm에 세팅
        	for(var i = 0; i < this.dsCmdtyAtfl.rowcount; i++) {
        		//var colId = this.dsCmdtyAtfl.getColumn(i, "colId");
        		var colId = this.dsCmdtyAtfl.getColumn(i, "atflMngNo");
        		var orgnlFileNm = this.dsCmdtyAtfl.getColumn(i, "orgnlFileNm") + '(' + this.dsCmdtyAtfl.getColumn(i, "fileSz") + ')';

        		var row = this.dsCsaf.findRow("cmdtyPhotoPath", colId);
        		this.dsCsaf.setColumn(row, "orgnlFileNm", orgnlFileNm);

        		var sn = this.dsCsaf.getColumn(row, "sn");
        		this.dsCmdtyAtfl.setColumn(i, "colId", sn);  //colId 세팅
        	}

        	// 데이터 조회 후 첨부파일 파일리스트에 셋팅
        	if(this.divForm05.form.RaonkUpload) {
        		if(this.dsCmdtyAtfl.rowcount > 0) {
        			// RaonkUpload 초기화
        			this.divForm05.form.RaonkUpload.ResetUpload();
        			this.gfnDownloadSetting(this.divForm05.form.RaonkUpload, this.dsCmdtyAtfl);
        		}
        	}

        	//그리드 초기값 상태로 세팅
        	this.dsCsaf.applyChange();
        	this.dsCmdtyAtfl.applyChange();
        	this.resetScroll();
        };

        //테스트용 버튼(팝업 테스트용)
        this.btn00_onclick = function(obj,e)
        {
        	const sTitle = "보호구역위해물품(팝업)";
        	const objOption = {
        		  popuptype : "modal"	//modal,modaless
        		// , autosize  : true
        		, title     : sTitle
        		// , resize    : true
        		, titlebar  : true
        		, width     : 1300
        		, height    : 900
        	};
        	const oArg = {
        	      "pvAplyNo" : "SEC2501_00043"
        		 ,"pvJobCd" : ""
        		 ,"view" : "popup"
        	};

        	// const sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("popSecDetail", "work::CST/SEC/CST011M00.xfdl", oArg, (sPopId, sJsonStr) => {

        	}, objOption);

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.CST009M00_onsize,this);
            this.addEventHandler("onstepchanged",this.CST009M00_onstepchanged,this);
            this.addEventHandler("onkeydown",this.CST009M00_onkeydown,this);
            this.tabStep.addEventHandler("onchanged",this.tabStep_onchanged,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.dsAply.addEventHandler("cancolumnchange",this.dsAply_cancolumnchange,this);
            this.dsAply.addEventHandler("oncolumnchanged",this.dsAply_oncolumnchanged,this);
            this.dsCsaf.addEventHandler("oncolumnchanged",this.dsCsaf_oncolumnchanged,this);
            this.dsAtfl.addEventHandler("onload",this.dsAtfl_onload,this);
            this.dsCmdtyAtfl.addEventHandler("onload",this.dsCmdtyAtfl_onload,this);
            this.dsAplyCopy.addEventHandler("cancolumnchange",this.dsAply_cancolumnchange,this);
            this.dsAplyCopy.addEventHandler("oncolumnchanged",this.dsAply_oncolumnchanged,this);
            this.dsCsafCopy.addEventHandler("oncolumnchanged",this.dsCsaf_oncolumnchanged,this);
            this.dsAtflCopy.addEventHandler("onload",this.dsAtfl_onload,this);
            this.dsCmdtyAtflCopy.addEventHandler("onload",this.dsCmdtyAtfl_onload,this);
        };
        this.loadIncludeScript("CST011M00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
