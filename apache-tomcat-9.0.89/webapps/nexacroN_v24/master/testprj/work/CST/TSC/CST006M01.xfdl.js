(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST006M01");
            this.set_titletext("작업신고서");
            this.set_stepitemsize("0");
            this.set_stepalign("center bottom");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><ConstColumn id=\"RVW_TYPE_WORPL\" type=\"STRING\" size=\"30\" value=\"B110 dsRltnDeptStng\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"souId\" type=\"STRING\" size=\"256\"/><Column id=\"dtlProcsEtcCn\" type=\"STRING\" size=\"256\"/><Column id=\"endTaskCd\" type=\"STRING\" size=\"256\"/><Column id=\"souProcsId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"endTaskCd\">TAS00045</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMst", this);
            obj.set_useclientlayout("true");
            obj.set_enableevent("false");
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeNm\" type=\"STRING\" size=\"256\"/><Column id=\"taskCd\" type=\"STRING\" size=\"256\"/><Column id=\"nextTaskCd\" type=\"STRING\" size=\"256\"/><Column id=\"pstnSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyDt\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"endCd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstnInfoRnb\" type=\"STRING\" size=\"256\"/><Column id=\"clmZip\" type=\"STRING\" size=\"256\"/><Column id=\"clmAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmDtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmWholAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmCustCd\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"rcptDt\" type=\"STRING\" size=\"256\"/><Column id=\"clrId\" type=\"STRING\" size=\"256\"/><Column id=\"dptyRegYn\" type=\"STRING\" size=\"256\"/><Column id=\"dmndDt\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptAplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptCtrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptPstnInfoCn\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtHwrtInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntHwrtInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtMvmnRgnPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"docCd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtChcYn\" type=\"STRING\" size=\"256\"/><Column id=\"wholJobBgngDt\" type=\"STRING\" size=\"256\"/><Column id=\"wholJobEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobNm\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobRsnCn\" type=\"STRING\" size=\"256\"/><Column id=\"bldgSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoCtrtrNm\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoPicCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobFldCd\" type=\"STRING\" size=\"256\"/><Column id=\"arptCstrnPicId\" type=\"STRING\" size=\"256\"/><Column id=\"lbsvcPbcprtPicId\" type=\"STRING\" size=\"256\"/><Column id=\"lbsvcPbcprtPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"basctAplcfmInfoId\" type=\"STRING\" size=\"256\"/><Column id=\"lbsvcTaskAgtRlvtYn\" type=\"STRING\" size=\"256\"/><Column id=\"lbsvcTaskMdtrId\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptRnb\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclFstVl\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclFstCn\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclSecdVl\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclSecdCn\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclThrVl\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclThrCn\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnRspnsYn\" type=\"STRING\" size=\"256\"/><Column id=\"srvcAplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/><Column id=\"isEdtrPsblty\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"docCd\">TSPDOC740</Col><Col id=\"aplySeCd\">TSPTSC003</Col><Col id=\"taskCd\">TAS00039</Col><Col id=\"aplyNo\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJobWtpl", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobNm\" type=\"STRING\" size=\"256\"/><Column id=\"pbcprtPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoNm\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoFxno\" type=\"STRING\" size=\"256\"/><Column id=\"cnstrCoNm\" type=\"STRING\" size=\"256\"/><Column id=\"cnstrPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"cnstrCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"cnstrFxno\" type=\"STRING\" size=\"256\"/><Column id=\"jobPrpsCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobPrpsEtcCn\" type=\"STRING\" size=\"256\"/><Column id=\"jobCn\" type=\"STRING\" size=\"256\"/><Column id=\"rftJobYn\" type=\"STRING\" size=\"256\"/><Column id=\"acmlPrcsrtCn\" type=\"STRING\" size=\"256\"/><Column id=\"totalJobNope\" type=\"STRING\" size=\"256\"/><Column id=\"wrsPstnCn\" type=\"STRING\" size=\"256\"/><Column id=\"noiseVbrnOcrnYn\" type=\"STRING\" size=\"256\"/><Column id=\"flmatyTicBdsmlOcrnYn\" type=\"STRING\" size=\"256\"/><Column id=\"wdmchnUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobBfhdCnsltnYn\" type=\"STRING\" size=\"256\"/><Column id=\"pipJobWaterGasYn\" type=\"STRING\" size=\"256\"/><Column id=\"hpwYn\" type=\"STRING\" size=\"256\"/><Column id=\"putMtrlCn\" type=\"STRING\" size=\"256\"/><Column id=\"jobDtDayNghtSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobZoneCd\" type=\"STRING\" size=\"256\"/><Column id=\"bldgSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"exsFcltyFinmtDsolvRasblCd\" type=\"STRING\" size=\"256\"/><Column id=\"prvcClctEsntlAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"jobCnsltnYn\" type=\"STRING\" size=\"256\"/><Column id=\"rcvkeyYn\" type=\"STRING\" size=\"256\"/><Column id=\"jobBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"jobBgngHr\" type=\"STRING\" size=\"256\"/><Column id=\"jobEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"jobEndHr\" type=\"STRING\" size=\"256\"/><Column id=\"cnvyMttrCn\" type=\"STRING\" size=\"256\"/><Column id=\"jobSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobMn\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobPstnSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobCstrnPstnDtlCn\" type=\"STRING\" size=\"256\"/><Column id=\"incmgChckpntMvmnPathNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobRbprsn1Nm\" type=\"STRING\" size=\"256\"/><Column id=\"jobRbprsn1Telno\" type=\"STRING\" size=\"256\"/><Column id=\"jobRbprsn2Nm\" type=\"STRING\" size=\"256\"/><Column id=\"jobRbprsn2Telno\" type=\"STRING\" size=\"256\"/><Column id=\"clsgnNm\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobGrndsBlzeSafeCmpanVwsYn\" type=\"STRING\" size=\"256\"/><Column id=\"rltnInstBfhdCnsltnYn\" type=\"STRING\" size=\"256\"/><Column id=\"mvmnPathDsgnYn\" type=\"STRING\" size=\"256\"/><Column id=\"avtnInfoPvsnYn\" type=\"STRING\" size=\"256\"/><Column id=\"udgdEbmtItfeYn\" type=\"STRING\" size=\"256\"/><Column id=\"safeFcltyInstlYn\" type=\"STRING\" size=\"256\"/><Column id=\"jobCmpanAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"putMtrlToolKndCrynYn\" type=\"STRING\" size=\"256\"/><Column id=\"jobCoNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobCoPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobCoCntcNo\" type=\"STRING\" size=\"256\"/><Column id=\"jobCoFxno\" type=\"STRING\" size=\"256\"/><Column id=\"actlOprtrRglrAdpsPssnExnCd\" type=\"STRING\" size=\"256\"/><Column id=\"dgadsCmdtyUseCmpanAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"dgadsCmdtyMngSprvsnCoNm\" type=\"STRING\" size=\"256\"/><Column id=\"dgadsCmdtyMngSprvsnCoRbprsnNm\" type=\"STRING\" size=\"256\"/><Column id=\"dgadsCmdtyMngSprvsnCoRbprsnMblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"dgadsCmdtyMngCnstrNoNm\" type=\"STRING\" size=\"256\"/><Column id=\"dgadsCmdtyMngCnstrRbprsnNm\" type=\"STRING\" size=\"256\"/><Column id=\"dgadsCmdtyMngCnstrRbprsnMblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"dgadsCmdtyMngJobCoNm\" type=\"STRING\" size=\"256\"/><Column id=\"dgadsCmdtyMngJobCoRbprsnNm\" type=\"STRING\" size=\"256\"/><Column id=\"dgadsCmdtyMngJobCoRbprsnMblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"dgadsCmdtyLdrCoNm\" type=\"STRING\" size=\"256\"/><Column id=\"dgadsCmdtyLdrNm\" type=\"STRING\" size=\"256\"/><Column id=\"dgadsCmdtyLdrAdpsNo\" type=\"STRING\" size=\"256\"/><Column id=\"dgadsCmdtyLdrIncmgZoneCn\" type=\"STRING\" size=\"256\"/><Column id=\"dgadsCmdtyLdrCoTelno\" type=\"STRING\" size=\"256\"/><Column id=\"dgadsCmdtyLdrMblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"mvmnRgnJobAprvYn\" type=\"STRING\" size=\"256\"/><Column id=\"crynChckpntCd\" type=\"STRING\" size=\"256\"/><Column id=\"crynChckpntUpCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobCmptnCn\" type=\"STRING\" size=\"256\"/><Column id=\"dgadsCmdtyUseCmpanRczNm\" type=\"STRING\" size=\"256\"/><Column id=\"arcftInsdCrynPhbtCmdtyDocReadYn\" type=\"STRING\" size=\"256\"/><Column id=\"emrgYn\" type=\"STRING\" size=\"256\"/><Column id=\"prvcTdptyPvsnAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"chcRsnUsePrnmntChckpntCn\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobSeCd\" type=\"INT\" size=\"256\"/><Column id=\"arptPbcprtPicExnCd\" type=\"STRING\" size=\"256\"/><Column id=\"fcltyInstlChcRtosRltnJobYn\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoSmYn\" type=\"INT\" size=\"256\"/><Column id=\"cnstrSmYn\" type=\"INT\" size=\"256\"/><Column id=\"sprvsnCoPbcprtEmpYn\" type=\"INT\" size=\"256\"/><Column id=\"sprvsnCoPbcprtEmpId\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoPbcprtEmpNm\" type=\"STRING\" size=\"256\"/><Column id=\"rgnSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"basctAplcfmInfoNm\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoPrvcClctUtztnWtcsAtflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"cnstCoPrvcClctUtztnWtcsAtflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"aplyNo\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsArptCstrnPic", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"taskMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"picId\" type=\"STRING\" size=\"256\"/><Column id=\"picNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCnvyMttr", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/><Column id=\"cnvyMttrCn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJobList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"chc\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"cnstrNm\" type=\"STRING\" size=\"256\"/><Column id=\"rnb\" type=\"STRING\" size=\"256\"/><Column id=\"jobNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobYmd\" type=\"STRING\" size=\"256\"/><Column id=\"jobNope\" type=\"STRING\" size=\"256\"/><Column id=\"rmrkCn\" type=\"STRING\" size=\"256\"/><Column id=\"rowId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsArtclList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"jobYmd\" type=\"STRING\" size=\"256\"/><Column id=\"wdmchnGrdrUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"dsolvExsFcltyCdCn\" type=\"STRING\" size=\"256\"/><Column id=\"fcltyCdWil\" type=\"STRING\" size=\"256\"/><Column id=\"fcltyCdFlof\" type=\"STRING\" size=\"256\"/><Column id=\"fcltyCdCilin\" type=\"STRING\" size=\"256\"/><Column id=\"fcltyCdNone\" type=\"STRING\" size=\"256\"/><Column id=\"flmatyTicBdsmlOcrnYn\" type=\"STRING\" size=\"256\"/><Column id=\"noiseVbrnOcrnYn\" type=\"STRING\" size=\"256\"/><Column id=\"hpwYn\" type=\"STRING\" size=\"256\"/><Column id=\"pipJobYn\" type=\"STRING\" size=\"256\"/><Column id=\"rftJobYn\" type=\"STRING\" size=\"256\"/><Column id=\"wdmchnDayNghtSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"bgngTm\" type=\"STRING\" size=\"2\"/><Column id=\"endTm\" type=\"STRING\" size=\"2\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMtrlToolList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"chc\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"cmdtyNm\" type=\"STRING\" size=\"256\"/><Column id=\"qty\" type=\"STRING\" size=\"256\"/><Column id=\"unitVl\" type=\"STRING\" size=\"256\"/><Column id=\"spcfctVl\" type=\"STRING\" size=\"256\"/><Column id=\"rmrkCn\" type=\"STRING\" size=\"256\"/><Column id=\"rowId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPrcsCsaf", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"prcsDt\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobNm\" type=\"STRING\" size=\"256\"/><Column id=\"aprvYn\" type=\"STRING\" size=\"256\"/><Column id=\"prcsStts\" type=\"STRING\" size=\"256\"/><Column id=\"prcsSttsNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"emplNm\" type=\"STRING\" size=\"256\"/><Column id=\"userTelno\" type=\"STRING\" size=\"256\"/><Column id=\"prcsDsctn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtfl", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bsnsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtn\" type=\"STRING\" size=\"256\"/><Column id=\"strgFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTerm\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtchRslt", this);
            obj._setContents("<ColumnInfo><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"A110\" type=\"STRING\" size=\"256\"/><Column id=\"A120\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtrb", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><ConstColumn id=\"AplcfmWrt\" type=\"STRING\" size=\"500\" value=\"{&quot;description&quot;:&quot;신청서작성보완&quot;, &quot;editable&quot;:&quot;TAS00039:신청서작성,TAS00480:신청서보완&quot;, &quot;readonly&quot;:&quot;&quot;}\"/><ConstColumn id=\"AplcfmWrtRcpt\" type=\"STRING\" size=\"500\" value=\"{&quot;description&quot;:&quot;신청서작성보완접수&quot;, &quot;editable&quot;:&quot;TAS00039:신청서작성,TAS00480:신청서보완&quot;, &quot;readonly&quot;:&quot;TAS00043:담당자접수&quot;}\"/><ConstColumn id=\"CnvyMttr\" type=\"STRING\" size=\"30\" value=\"{&quot;description&quot;:&quot;전달사항&quot;, &quot;editable&quot;:&quot;TAS00039:신청서작성,TAS00480:신청서보완,TAS00043:담당자접수,TAS00044:관련부서설정,TAS00048:검토및협의&quot;, &quot;readonly&quot;:&quot;TAS00341:관련부서처리,TAS00272:만족도조사,TAS00045:종료&quot;}\"/><ConstColumn id=\"AtchCn\" type=\"STRING\" size=\"30\" value=\"{&quot;description&quot;:&quot;별첨목록&quot;, &quot;editable&quot;:&quot;&quot;, &quot;readonly&quot;:&quot;TAS00043:담당자접수,TAS00044:관련부서설정,TAS00048:검토및협의&quot;}\"/><ConstColumn id=\"RltnDeptStng\" type=\"STRING\" size=\"30\" value=\"{&quot;description&quot;:&quot;관련부서설정&quot;, &quot;editable&quot;:&quot;TAS00044:관련부서설정&quot;, &quot;readonly&quot;:&quot;TAS00341:관련부서처리,TAS00048:검토및협의,TAS00272:만족도조사,TAS00045:종료&quot;}\"/><ConstColumn id=\"RltnDeptStngEdtr\" type=\"STRING\" size=\"30\" value=\"{&quot;description&quot;:&quot;관련부서설정편집&quot;, &quot;editable&quot;:&quot;TAS00044:관련부서설정&quot;, &quot;readonly&quot;:&quot;&quot;}\"/><ConstColumn id=\"RltnDeptStngDeptEdtr\" type=\"STRING\" size=\"30\" value=\"{&quot;description&quot;:&quot;관련부서설정부서편집&quot;, &quot;editable&quot;:&quot;TAS00341:관련부서처리&quot;, &quot;readonly&quot;:&quot;&quot;}\"/><ConstColumn id=\"PrcsCsaf\" type=\"STRING\" size=\"30\" value=\"{&quot;description&quot;:&quot;처리현황&quot;, &quot;editable&quot;:&quot;&quot;, &quot;readonly&quot;:&quot;TAS00480:신청서보완,TAS00044:관련부서설정,TAS00341:관련부서처리&quot;}\"/><ConstColumn id=\"PrcsCsafGd\" type=\"STRING\" size=\"30\" value=\"{&quot;description&quot;:&quot;처리현황안내&quot;, &quot;editable&quot;:&quot;&quot;, &quot;readonly&quot;:&quot;TAS00044:관련부서설정,TAS00341:관련부서처리&quot;}\"/><ConstColumn id=\"DocOtpt\" type=\"STRING\" size=\"30\" value=\"{&quot;description&quot;:&quot;문서출력&quot;, &quot;editable&quot;:&quot;&quot;, &quot;readonly&quot;:&quot;TAS00272:만족도조사,TAS00045:종료&quot;}\"/><ConstColumn id=\"DgstfnExmn\" type=\"STRING\" size=\"30\" value=\"{&quot;description&quot;:&quot;만족도조사&quot;, &quot;editable&quot;:&quot;TAS00272:만족도조사&quot;, &quot;readonly&quot;:&quot;TAS00045:종료&quot;}\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTaskPrcsFlwWf", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRvwOpnn", this);
            obj._setContents("<ColumnInfo><Column id=\"opnnNo\" type=\"STRING\" size=\"256\"/><Column id=\"opnnNm\" type=\"STRING\" size=\"256\"/><Column id=\"opnnCn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtflArtclList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divBtn","0",null,null,"60","60","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_CkBg");
            obj.set_formscrollbartype("auto none");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbTest","298","20","150","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_visible("false");
            var divBtn_form_cmbTest_innerdataset = new nexacro.NormalDataset("divBtn_form_cmbTest_innerdataset", obj);
            divBtn_form_cmbTest_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">TAS00039</Col><Col id=\"datacolumn\">TAS00039 신청서작성</Col></Row><Row><Col id=\"codecolumn\">TAS00480</Col><Col id=\"datacolumn\">TAS00480 신청서보완</Col></Row><Row><Col id=\"codecolumn\">TAS00043</Col><Col id=\"datacolumn\">TAS00043 담당자접수</Col></Row><Row><Col id=\"codecolumn\">TAS00044</Col><Col id=\"datacolumn\">TAS00044 관련부서설정</Col></Row><Row><Col id=\"codecolumn\">TAS00341</Col><Col id=\"datacolumn\">TAS00341 관련부서처리</Col></Row><Row><Col id=\"codecolumn\">TAS00048</Col><Col id=\"datacolumn\">TAS00048 검토및협의</Col></Row><Row><Col id=\"codecolumn\">TAS00272</Col><Col id=\"datacolumn\">TAS00272 만족도조사</Col></Row><Row><Col id=\"codecolumn\">TAS00045</Col><Col id=\"datacolumn\">TAS00045 종료</Col></Row></Rows>");
            obj.set_innerdataset(divBtn_form_cmbTest_innerdataset);
            obj.set_text("Combo00");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btnTest","570","192","112","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("1");
            obj.set_text("팦업테스트");
            obj.set_cssclass("btn_WF_Search");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divBtn.addChild(obj.name, obj);

            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Tab("tabStep","0","divTitle:10",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tpgAplcntInfo",this.tabStep);
            obj.set_text("신청자정보");
            obj.set_formscrollbartype("default autoindicator");
            this.tabStep.addChild(obj.name, obj);

            obj = new Tabpage("tpgAplyInfo",this.tabStep);
            obj.set_text("협의/신청정보");
            obj.set_formscrollbartype("default autoindicator");
            this.tabStep.addChild(obj.name, obj);

            obj = new Tabpage("tpgPrcsDsctn",this.tabStep);
            obj.set_text("투입자재및공구류");
            obj.set_formscrollbartype("default autoindicator");
            this.tabStep.addChild(obj.name, obj);

            obj = new Tabpage("tpgDgstfnExmn",this.tabStep);
            obj.set_text("만족도조사");
            this.tabStep.addChild(obj.name, obj);

            obj = new Div("divForm","0","110",null,null,"60","70",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Step01");
            obj.set_visible("true");
            obj.set_formscrollbartype("auto autoindicator");
            obj.set_url("work::CST/TSC/CST006S01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","60",null,null,"60","70",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_positionstep("1");
            obj.set_formscrollbartype("auto autoindicator");
            obj.set_url("work::CST/TSC/CST006S02.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","0","60",null,null,"60","70",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div01");
            obj.set_positionstep("2");
            obj.set_formscrollbartype("auto autoindicator");
            obj.set_url("work::CST/TSC/CST006S03.xfdl");
            this.addChild(obj.name, obj);

            obj = new RaonkUpload("RaonkUpload","-1080","630","1020","200",null,null,null,null,null,null,this);
            obj.set_taborder("6");
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

            obj = new Div("divForm00_00_00","0","60",null,null,"60","70",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Step04");
            obj.set_visible("true");
            obj.set_formscrollbartype("auto autoindicator");
            obj.set_positionstep("3");
            obj.set_async("true");
            obj.set_url("work::CST/TSC/CST006P12.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBtn.form
            obj = new Layout("default","",0,0,this.divBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.cmbTest.set_taborder("0");
                p.cmbTest.set_innerdataset(divBtn_form_cmbTest_innerdataset);
                p.cmbTest.set_codecolumn("codecolumn");
                p.cmbTest.set_datacolumn("datacolumn");
                p.cmbTest.set_visible("false");
                p.cmbTest.set_text("Combo00");
                p.cmbTest.move("298","20","150","40",null,null);

                p.btnTest.set_taborder("1");
                p.btnTest.set_text("팦업테스트");
                p.btnTest.set_cssclass("btn_WF_Search");
                p.btnTest.set_fittocontents("width");
                p.btnTest.set_visible("false");
                p.btnTest.move("570","192","112","40",null,null);
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
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabStep.tpgAplcntInfo
            obj = new Layout("default","",0,0,this.tabStep.tpgAplcntInfo.form,function(p){});
            this.tabStep.tpgAplcntInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabStep.tpgAplyInfo
            obj = new Layout("default","",0,0,this.tabStep.tpgAplyInfo.form,function(p){});
            this.tabStep.tpgAplyInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabStep.tpgPrcsDsctn
            obj = new Layout("default","",0,0,this.tabStep.tpgPrcsDsctn.form,function(p){});
            this.tabStep.tpgPrcsDsctn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabStep.tpgDgstfnExmn.form
            obj = new Layout("default","",0,0,this.tabStep.tpgDgstfnExmn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.tabStep.tpgDgstfnExmn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.tabStep.tpgDgstfnExmn.form
            obj = new Layout("mobile","",0,0,this.tabStep.tpgDgstfnExmn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.tabStep.tpgDgstfnExmn.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm
            obj = new Layout("default","",0,0,this.divForm.form,function(p){});
            this.divForm.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm00_00_00
            obj = new Layout("default","",0,0,this.divForm00_00_00.form,function(p){});
            this.divForm00_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("작업신고서");
                p.set_stepitemsize("0");
                p.set_stepalign("center bottom");

                p.divBtn.set_taborder("0");
                p.divBtn.set_text("Div00");
                p.divBtn.set_cssclass("div_WF_CkBg");
                p.divBtn.set_formscrollbartype("auto none");
                p.divBtn.move("0",null,null,"60","60","0");

                p.divTitle.set_taborder("3");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);

                p.tabStep.set_taborder("2");
                p.tabStep.set_tabindex("0");
                p.tabStep.move("0","divTitle:10",null,"50","60",null);

                p.tabStep.tpgAplcntInfo.set_text("신청자정보");
                p.tabStep.tpgAplcntInfo.set_formscrollbartype("default autoindicator");

                p.tabStep.tpgAplyInfo.set_text("협의/신청정보");
                p.tabStep.tpgAplyInfo.set_formscrollbartype("default autoindicator");

                p.tabStep.tpgPrcsDsctn.set_text("투입자재및공구류");
                p.tabStep.tpgPrcsDsctn.set_formscrollbartype("default autoindicator");

                p.tabStep.tpgDgstfnExmn.set_text("만족도조사");

                p.divForm.set_taborder("1");
                p.divForm.set_text("Step01");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("auto autoindicator");
                p.divForm.set_url("work::CST/TSC/CST006S01.xfdl");
                p.divForm.move("0","110",null,null,"60","70");

                p.Div00.set_taborder("4");
                p.Div00.set_text("Div00");
                p.Div00.set_positionstep("1");
                p.Div00.set_formscrollbartype("auto autoindicator");
                p.Div00.set_url("work::CST/TSC/CST006S02.xfdl");
                p.Div00.move("0","60",null,null,"60","70");

                p.Div01.set_taborder("5");
                p.Div01.set_text("Div01");
                p.Div01.set_positionstep("2");
                p.Div01.set_formscrollbartype("auto autoindicator");
                p.Div01.set_url("work::CST/TSC/CST006S03.xfdl");
                p.Div01.move("0","60",null,null,"60","70");

                p.RaonkUpload.set_taborder("6");
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
                p.RaonkUpload.move("-1080","630","1020","200",null,null);

                p.divForm00_00_00.set_taborder("7");
                p.divForm00_00_00.set_text("Step04");
                p.divForm00_00_00.set_visible("true");
                p.divForm00_00_00.set_formscrollbartype("auto autoindicator");
                p.divForm00_00_00.set_positionstep("3");
                p.divForm00_00_00.set_async("true");
                p.divForm00_00_00.set_url("work::CST/TSC/CST006P12.xfdl");
                p.divForm00_00_00.move("0","60",null,null,"60","70");
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("4");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","",480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divTitle.move("0","0",null,"50","0",null);

                p.divForm.move("20","110",null,null,"20","70");

                p.divBtn.move("0",null,null,"60","0","0");

                p.Div00.move("20","110",null,null,"20","70");

                p.Div01.move("20","110",null,null,"20","70");

                p.tabStep.move("20","60",null,"50","20",null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            obj.set_stepcount("4");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divBtn.form.cmbTest","value","dsMst","taskCd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
            this._addPreloadList("fdl","work::CST/TSC/CST006S01.xfdl");
            this._addPreloadList("fdl","work::CST/TSC/CST006S02.xfdl");
            this._addPreloadList("fdl","work::CST/TSC/CST006S03.xfdl");
            this._addPreloadList("fdl","work::CST/TSC/CST006P12.xfdl");
        };
        
        // User Script
        this.addIncludeScript("CST006M01.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CST006M01.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	CST006M01.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/09/12
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/09/12			김주화					최초생성
        *******************************************************************************
        */

        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;  // 업무공통
        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp  = nexacro.getApplication();

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_oninit = function(obj,e)
        {
            // 첨부파일항목목록조회
        	//this.cfnEtcCdLoad({ id:this.dsAtflArtclList.name, cbf:"fnCallback", dsAtflArtclList:"{id:'selectTaskComListCd', cnd:{cdTyId:'ATFL_SE', note:'CST006M01'}}"});  // 첨부파일구분

        	// 만족도조사 탭 버튼
        	this.tabStep.tpgDgstfnExmn.uptabbuttonwidth = this.tabStep.tpgDgstfnExmn.tabbuttonwidth;
        	this.tabStep.tpgDgstfnExmn.tabbuttonwidth = 0;
        };

        this.form_onload = function(obj,e)
        {
            trace(this.name + "_LLLLLLLLLLLLLLLLLLLLLLLLLL_11111");

            // 팦업으로 실행시의 처리
         	if(this.getOwnerFrame().name == "popupJobWtpl") {
          	    this.divTitle.destroy();  // 프로그램 타이틀 제거
          	    this.tabStep.top = 10;    // tap 위치 조정
         		this.divForm.top = parseInt(this.tabStep.top)
        		                 + parseInt(this.tabStep.height)
        						 + 10;    // 신청자 정보 div 위치 조정
                this.resetScroll();
         	}

        	this.gfnFormOnload(obj);        // 필수함수
        	this.stepitemsize = 0;          // 스텝이미지사이즈

            // 전달받은 데이터 확인 및 처리
        	var pvAplyNo = this.getOwnerFrame().pvAplyNo || "TSC2501_00001";   // 신청번호
        	if (this.gfnIsNull(pvAplyNo)) {
        		// 버튼생성
        		this.dsMst_onload();
        		// 이벤트 발생용
        		this.dsJobWtpl.enableevent = false;
        		this.dsJobWtpl.enableevent = true;
        	} else {
        		this.dsSearch.setColumn(0, "aplyNo", pvAplyNo);  // 신청번호
        		this.dsSearch.setColumn(0, "souId" , pvAplyNo);  // 신청번호(착공승인검토조회용)
        		this.cfnSrvcCall("select");  // 조회
        	}

        	// Master DS 이벤트 활성화
        	this.dsMst.enableevent = true;

            // main 화면 자원 사용을 위한 처리
        	nexacro.main = this;

        	trace(this.name + "_LLLLLLLLLLLLLLLLLLLLLLLLLL_22222");
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //저장
        this.cfnSave = function()
        {
            // 저장
        	this.cfnSrvcCall("save");
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.cfnSrvcCall = function(srvcId) {
        	var strSrvcId   = srvcId;         // transaction을 구분하기 위한 svc id값
        	var strSvcUrl   = "";             // trabsaction을 요청할 주소
        	var inData      = "";             // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        	var outData     = "";             // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        	var strArg      = "";             // 입력값으로 보낼 arguments, strFormData="20120607"
        	var callBackFnc = "fnCallback";   // transaction의 결과를 받을 Function 이름
        	var isAsync   	= true;           // 비동기통신 여부 [생략가능]

        	switch(strSrvcId)
        	{
        		case "select" :  // 조회
        			strSvcUrl = "jobWtpl/selectJobWtpl.do";
        			inData    = "dsSearch=dsSearch";
        			outData   = "dsMst=dsMst dsJobWtpl=dsJobWtpl "
        			          + "dsArptCstrnPic=dsArptCstrnPic "
        					  + "dsCnvyMttr=dsCnvyMttr "
        					  + "dsJobList=dsJobList "
        					  + "dsArtclList=dsArtclList "
        					  + "dsMtrlToolList=dsMtrlToolList "
        					  + "dsPrcsCsaf=dsPrcsCsaf "
        					  + "dsAtfl=dsAtfl "
        					  + "dsTaskPrcsFlwWf=dsTaskPrcsFlwWf "
        					  + "dsRvwOpnn=dsRvwOpnn";
        			break;

        		case this.RaonkUpload.name :            // 첨부파일 저장
        			var obj = { "thumnail" : "N"        // 썸네일 생성여부(첨부파일 중 이미지 파일이 있는 경우 "Y" 이면 썸네일 파일 생성)
        			          , "bsnsSeCd" : "TSPTSC"   // 업무구분코드(입주자서비스)
        				      , "prgrmId"  : this.name  // 프로그램ID (화면 ID)
        			};

        			this.RaonkUpload.AddFormData('params', JSON.stringify(obj));
        			this.RaonkUpload.Transfer();

        			return;

        			break;

        		case "save" :  // 저장
        			strSvcUrl = "jobWtpl/saveJobWtpl.do";
        			inData    = "dsWfInfo=" + this.FV_DS_OTPT_WORK_FLOW_INFO + ":U"  // WorkFlow 정보
        			          + " dsMst=dsMst:A"                                     // Master DS
         			          + " dsJobWtpl=dsJobWtpl:A"                             // 작업계획서 DS
        					  + " dsArptCstrnPic=dsArptCstrnPic:U"                   // 공항공사담당자
        			          + " dsCnvyMttr=dsCnvyMttr:A"                           // 전달사항 DS
        					  + " dsJobList=dsJobList:U"                             // 다중작업목록 DS
        					  + " dsArtclList=dsArtclList:U"                         // 일별중요항목목록 DS
        					  + " dsMtrlToolList=dsMtrlToolList:U"                   // 투입자재및공구류목록
        			          + " dsAtfl=dsAtfl:U"                                   // 첨부파일 DS
        					  ;
        			outData   = "";

        			break;

        		default :

        			break;
        	}

        	this.gfnTransaction( strSrvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        this.cfnClose = function() {
        	console.log('cfnClose');
        }

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(srvcId, errCd, errMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errCd != 0) { return; }

        	switch(srvcId) {
        		case "select" :  // 조회

        			break;

        		case "save" :     // 저장
        		    // 정상적으로 처리되었습니다.
        			this.gfnAlertMsg("save", "CST_003");

        			break;

        		case this.RaonkUpload.RAONKUPLOAD_UploadComplete.name :
        			// 파일 업로드 결과를 첨부파일 데이터셋에 설정
        			for(var i = 0; i < this.dsAtchRslt.rowcount; i++) {
        			    // 첨부파일관리번호
        				var colId = this.dsAtchRslt.getColumn(i, "colId");
        				this.dsAtfl.setColumn(this.dsAtfl.findRow("colId", colId), "atflMngNo", this.dsAtchRslt.getColumn(i, "atflMngNo"));
        				if(colId == "A110") {
        					// 주관사개인정보수집이용동의서첨부파일관리번호
        					this.dsJobWtpl.setColumn(0, "sprvsnCoPrvcClctUtztnWtcsAtflMngNo", this.dsAtchRslt.getColumn(i, "atflMngNo"));  // 첨부파일관리번호
        				} else if(colId == "A120") {
        					// 시공사개인정보수집이용동의서첨부파일관리번호
        					this.dsJobWtpl.setColumn(0, "cnstCoPrvcClctUtztnWtcsAtflMngNo", this.dsAtchRslt.getColumn(i, "atflMngNo"));  // 첨부파일관리번호
        				}
        			}

                    // 저장
        			this.cfnSave();

        			break;

                case this.dsAtflArtclList.name : // 첨부파일항목목록조회
        			this.dsFile.clear();
        			for(var i = 0; i < this.dsAtflArtclList.rowcount; i++) {
        				this.dsFile.addColumn(this.dsAtflArtclList.getColumn(i, "cdId"), "STRING");
        			}
        			this.dsFile.addRow();

        			break;

        		case this.divBtn.name :  // 버튼생성

        			break;

        		default :
        			break;
        	}
        };

        //팝업에 관한 콜백 함수
        this.fnPopupCallback = function(sPopupId, oRtn)
        {
        	if(!oRtn) { return; };

        	switch(sPopupId) {
        		case "CTL00091" :  // 담당자변경
        		    if(!this.gfnIsNull(oRtn)) {
        			    oRtn = JSON.parse(oRtn);

        				this.dsMst.setColumn(0, "prcrJobGroupCd", oRtn.jobGroupId);  // 처리자작업그룹코드
        				this.dsMst.setColumn(0, "prcrId"        , oRtn.userId    );  // 처리자ID
        				this.dsMst.setColumn(0, "prcrDeptCd"    , oRtn.deptId    );  // 처리자부서코드
        			}

        			break;

        		default :
        			break;
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.Button_onclick = function(obj,e)
        {
            if(obj.name == "CTL00091") {  // 담당자변경
        		var oOption = { title:"담당자변경", titlebar:true, width:920, height:720 };
        	    var oArg    = { pvAplyNo:this.dsMst.getColumn(0, "aplyNo")
        		              , pvTaskCd:this.dsMst.getColumn(0, "taskCd")
        					  };
        		this.gfnOpenPopup(obj.name, "work::CST/TSC/CST006P21.xfdl", oArg, "fnPopupCallback", oOption);

        		return;
        	}

        	// WorkFlow 정보
        	var wfInfo = this.cfnGetWfInfo(obj.name);
        	this.dsMst.setColumn(0, "taskCd"    , wfInfo.jobPrcsPrgrsSeCd        );  // 현재업무코드
        	this.dsMst.setColumn(0, "nextTaskCd", wfInfo.nextStepJobPrcsPrgrsSeCd);  // 다음업무코드

        	// 데이터 변경 여부 및 데이터 정합성 점검
        	if("CTL00118:임시저장,CTL00995:신청취소,CTL00914:미처리종료,CTL00858:미처리종료,CTL00859:미처리종료,CTL00229:설문응답완료".indexOf(wfInfo.prcsSeCd) == -1) {
        		// 데이터 정합성 점검
        		for(var i = 0; i < this.components.length; i++) {
        			if(this.components[i] instanceof Div) {
        				if(this.components[i].form.cfnIsVldDat) {
        					if(!this.components[i].form.cfnIsVldDat()) {
        						return;
        					}
        				}
        			}
        		}
        	}

            // {0}을(를) 하시겠습니까?
        	this.gfnConfirmMsg("save_confirm", "CST_001", function(sPopupId, sRtn) {
        		if(JSON.parse(sRtn).result == "Y") {
        			if("[CTL00994:신청취소]".indexOf(wfInfo.prcsSeCd) != -1) {
        				this.dsMst.deleteAll();       // Master DS
        				this.dsJobWtpl.deleteAll();  // 원상회복(퇴거) DS
        		        this.dsCnvyMttr.deleteAll();  // 전달사항 DS
        				// 첨부파일 DS
        				for(var i = this.dsAtfl.rowcount - 1; i >= 0; i--) {
        				    this.RaonkUpload.cfnDelAtfl(this.dsAtfl.getColumn(i, "colId"));
        				}
        	        }

                    // 첨부파일 변경시 첨부파일부터 저장
        			if(this.gfnDsIsUpdated(this.dsAtfl)) {  // 첨부파일 변경시
        				// 첨부파일 저장
        				this.cfnSrvcCall(this.RaonkUpload.name);
        			} else {
        				// 저장
        				this.cfnSave();
        			}
        		}
        	}, ["확인", "취소"], ["Y" , "N" ], "", [wfInfo.prcsSeCdNm]);
        };

        this.tabStep_onchanged = function(obj,e)
        {
        	this.setStepIndex(obj.tabindex);
        };

        this.form_onstepchanged = function(obj,e)
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

        this.dsMst_onload = function(obj,e)
        {
            // 데스트용 임시 XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
            if(this.getFocus().name == this.divBtn.form.cmbTest.name) {
        		this.dsMst.setColumn(0, "taskCd", this.divBtn.form.cmbTest.value);
        	} else {
        		this.divBtn.form.cmbTest.value = this.dsMst.getColumn(0, "taskCd");
        	}
        	// 데스트용 임시 XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

        	// 업무코드
        	var taskCd = this.dsMst.getColumn(0, "taskCd");
        	// 신청번호
        	var aplyNo = this.dsMst.getColumn(0, "aplyNo");
        	// 편집가능여부
        	this.dsMst.isEdtrPsblty = this.dsMst.getColumn(0, "isEdtrPsblty") || this.gfnIsNull(aplyNo);
        	// 버튼 생성
        	// TAS00256:종료
        	if(taskCd == "TAS00045" || !this.dsMst.isEdtrPsblty) {
        		//this.divBtn.height = 0;
        	}

        	// 버튼생성
        	this.cfnBtnCrt({ crtTrgt:this.divBtn, lnkgEvnt:this.Button_onclick, id:this.divBtn.name, cbf:"fnCallback", inqCnd : { jobPrcsPrgrsSeCd:taskCd, aplyNo:aplyNo } });

        	// 속성 생성
            this.cfnAtrbCrt( this.dsAtrb, taskCd, this.dsMst.isEdtrPsblty);

        	// 만족도조사 탭 버튼
        	this.tabStep.tpgDgstfnExmn.tabbuttonwidth = 0;

        	// 만족도조사 탭 버튼 보이기
        	if(this.cfnGetAtrb("vsDgstfnExmn") || taskCd == "TAS00272") {  // 만족도조사
        		this.tabStep.tpgDgstfnExmn.tabbuttonwidth = this.tabStep.tpgDgstfnExmn.uptabbuttonwidth;
        	}

        	if(this.dsMst.isEdtrPsblty) {
        		if(this.cfnGetAtrb("vsAplcfmWrtRcpt")) {  // 신청서작성,보완,접수
        			this.tabStep.tabindex = this.cfnGetTabIndex(this.tabStep, "tpgAplcntInfo");  // 신청자정보
        		// TAS00272:만족도조사
        		} else if(this.cfnGetAtrb("vsDgstfnExmn")) {  // 만족도조사
        			this.tabStep.tabindex = this.cfnGetTabIndex(this.tabStep, "tpgDgstfnExmn");  // 만족도조사
        		} else {
        			this.tabStep.tabindex = this.cfnGetTabIndex(this.tabStep, "tpgPrcsDsctn");  // 처리내역
        		}
        	}
        };

        this.dsJobWtpl_onvaluechanged = function(obj,e)
        {
        	if(this.divBtn.form.CTL00084) {  // 신청(신청서작성)
        	    var rgnSeCd = obj.getColumn(0, "rgnSeCd");  // 지역구분
        	    this.divBtn.form.CTL00084.visible = this.gfnIsNull(rgnSeCd) || rgnSeCd == "1";  // 제1,2터미널지역/기타그외지역
        		this.divBtn.form.CTL11067.visible = rgnSeCd == "0";                             // 화물터미널지역/물류단지
        		// 신청취소(신청서작성)
        		this.divBtn.form.CTL00995.visible = !this.gfnIsNull(this.dsMst.getColumn(0, "aplyNo"));
        	} else if(this.divBtn.form.CTL10954) {  // 재신청(신청서보완)
        		var clrId   = this.dsMst.getColumn(0, "clrId");  // 접수자ID
        		var rgnSeCd = obj.getColumn(0, "rgnSeCd");       // 지역구분
        		this.divBtn.form.CTL10954.visible = this.gfnIsNull(clrId) && (this.gfnIsNull(rgnSeCd) || rgnSeCd == "1");  // 담당자접수(접수자ID 가 없고, 제1,2터미널지역/기타그외지역)
        		this.divBtn.form.CTL11068.visible = this.gfnIsNull(clrId) && rgnSeCd == "0";                               // 담당자접수(접수자ID 가 없고, 화물터미널지역/물류단지)
        		this.divBtn.form.CTL00840.visible = this.cfnIsExstTaskPrcsFlw({ seq:"999", jobCd:"TAS00044", nextJobCd:"TAS00480" });  // 관련부서설정(TAS00044:관련부서설정, TAS00480:신청서보완)
        		this.divBtn.form.CTL11071.visible = this.cfnIsExstTaskPrcsFlw({ seq:"999", jobCd:"TAS00341", nextJobCd:"TAS00480" });  // 관련부서처리(TAS00341:관련부서처리, TAS00480:신청서보완)
        	}

        	this.resetScroll();
        };

        this.RaonkUpload_RAONKUPLOAD_CreationComplete = function(obj,  paramObj)
        {
        	// 업로드 솔루션이 초기 생성시 업로드 할 경로를 지정해야 한다.
        	// /CMM/YYYY/MM/DD/  <<== CMM은 업무별 폴더 지정이고 기본적으로 /년도/월/일 의 폴더 구조를 갖는다.
        	this.RaonkUpload.SetConfig('FolderNameRule', '/CST/TSC/YYYY/MM/DD/');

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

        // 		console.log("RaonkUpload.GetListInfo().mergeFile========" + this.GetListInfo().mergeFile);
        // 		if(this.GetListInfo().mergeFile) {
        // 			console.log("RaonkUpload.GetListInfo().mergeFile.length=" + this.GetListInfo().mergeFile.length);
        // 		}

        		// 첨부파일 삭제
        		this.parent.dsAtfl.deleteRow(this.parent.dsAtfl.findRow("colId", this.upatflinfo.colid));

        		// 첨부 파일 표출용 DS 설정
        		this.parent.dsFile.setColumn(0, this.upatflinfo.colid, "");  // 파일풀명
        	};
        };

        this.RaonkUpload_RAONKUPLOAD_BeforeAddFile = function(obj, paramObj)
        {
        	return true;
        };

        this.RaonkUpload_Test_RAONKUPLOAD_CreationComplete = function(obj, e)
        {
        };

        this.RaonkUpload_RAONKUPLOAD_AfterAddFile = function(obj, e)
        {
        	// 첨부 파일 추가
        	obj.cfnAddAtfl(e);
        };

        this.RaonkUpload_RAONKUPLOAD_OnError = function(obj, paramObj)
        {
            // 파일 업로드 중 오류가 발생했습니다!
        	this.gfnAlertMsg(this.RaonkUpload.name, "CST_002", [paramObj.userdata.strMessage]);
        };

        this.RaonkUpload_RAONKUPLOAD_UploadComplete = function(obj, e)
        {
        	var allListArray = this.RaonkUpload.GetListInfo("json");
        	// 파일 업로드 후 첨부파일관리번호를 얻기 위한 함수
        	this.gfnUploadComplete(e.eventid, allListArray, "dsAtchRslt", "fnCallback");
        };

        this.dsAtfl_onload = function(obj,e)
        {
        	// 데이터 조회 후 첨부파일 파일리스트에 셋팅
        	this.gfnDownloadSetting(this.RaonkUpload, this.dsAtfl);

        	// 첨부 파일 표출용 DS 설정
        	for(var i = 0; i < this.dsAtfl.rowcount; i++) {
        		// 첨부 파일 표출용 DS 설정
        		var colId = this.dsJobWtpl.getColumn(0, "sprvsnCoPrvcClctUtztnWtcsAtflMngNo") == this.dsAtfl.getColumn(i, "atflMngNo") ? "A110" : "A120";
        		this.dsFile.setColumn(0, colId , this.dsAtfl.getColumn(i, "orgnlFileNm") + '(' + this.dsAtfl.getColumn(i, "fileSz") + ')');  // 파일풀명
            };

        	this.resetScroll();
        };

        this.dsCnvyMttr_onload = function(obj,e)
        {
        	if(obj.rowcount == 0) {
        		obj.addRow();
        		obj.applyChange();
        	}
        };

        // 이하는 테스트용
        // =============================================================================
        this.divBtn_btnTest_onclick = function(obj,e)
        {
        	var oArg    = { pvAplyNo:this.dsMst.getColumn(0, "aplyNo") };
        	var oOption = { title:"신청서 작성", titlebar:true, width:900, height:800 };
        	this.gfnOpenPopup("popupJobWtpl", "work::CST/TSC/CST006M01.xfdl", oArg, "", oOption);
        };

        this.divBtn_onlbuttondown = function(obj,e)
        {
        	if(e.ctrlkey) {
        		this.divBtn.form.btnTest.visible = !this.divBtn.form.btnTest.visible;
        	} else if(e.altkey) {
        		this.divBtn.form.cmbTest.visible = !this.divBtn.form.cmbTest.visible;
        	}
        };

        this.divBtn_Combo00_onitemchanged = function(obj,e)
        {
        	//this.dsMst_onload();
        	this.cfnSrvcCall("select");  // 조회
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onstepchanged",this.form_onstepchanged,this);
            this.divBtn.addEventHandler("onlbuttondown",this.divBtn_onlbuttondown,this);
            this.divBtn.form.cmbTest.addEventHandler("onitemchanged",this.divBtn_Combo00_onitemchanged,this);
            this.divBtn.form.btnTest.addEventHandler("onclick",this.divBtn_btnTest_onclick,this);
            this.tabStep.addEventHandler("onchanged",this.tabStep_onchanged,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddFile",this.RaonkUpload_RAONKUPLOAD_AfterAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_CreationComplete",this.RaonkUpload_RAONKUPLOAD_CreationComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_UploadComplete",this.RaonkUpload_RAONKUPLOAD_UploadComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_OnError",this.RaonkUpload_RAONKUPLOAD_OnError,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeAddFile",this.RaonkUpload_RAONKUPLOAD_BeforeAddFile,this);
            this.dsMst.addEventHandler("onload",this.dsMst_onload,this);
            this.dsJobWtpl.addEventHandler("onvaluechanged",this.dsJobWtpl_onvaluechanged,this);
            this.dsCnvyMttr.addEventHandler("onload",this.dsCnvyMttr_onload,this);
            this.dsAtfl.addEventHandler("onload",this.dsAtfl_onload,this);
        };
        this.loadIncludeScript("CST006M01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
