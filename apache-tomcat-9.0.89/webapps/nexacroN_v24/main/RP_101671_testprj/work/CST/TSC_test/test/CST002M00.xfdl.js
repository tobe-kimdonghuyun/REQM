(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST002M00");
            this.set_titletext("신청서작성(시설물설치)");
            this.set_stepitemsize("1");
            this.set_stepalign("center bottom");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><ConstColumn id=\"RVW_TYPE_FICA\" type=\"STRING\" size=\"30\" value=\"I110 dsBgncstAprvRvw\"/><ConstColumn id=\"RVW_TYPE_COMA\" type=\"STRING\" size=\"30\" value=\"J110 dsCmcnInspRvw\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"souId\" type=\"STRING\" size=\"256\"/><Column id=\"dtlProcsEtcCn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMst", this);
            obj.set_useclientlayout("true");
            obj.set_enableevent("false");
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeNm\" type=\"STRING\" size=\"256\"/><Column id=\"taskCd\" type=\"STRING\" size=\"256\"/><Column id=\"nextTaskCd\" type=\"STRING\" size=\"256\"/><Column id=\"pstnSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyDt\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"endCd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstnInfoRnb\" type=\"STRING\" size=\"256\"/><Column id=\"clmZip\" type=\"STRING\" size=\"256\"/><Column id=\"clmAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmDtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmWholAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmCustCd\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"rcptDt\" type=\"STRING\" size=\"256\"/><Column id=\"clrId\" type=\"STRING\" size=\"256\"/><Column id=\"dptyRegYn\" type=\"STRING\" size=\"256\"/><Column id=\"dmndDt\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptAplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptCtrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptPstnInfoCn\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtHwrtInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntHwrtInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtMvmnRgnPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"docCd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtChcYn\" type=\"STRING\" size=\"256\"/><Column id=\"wholJobBgngDt\" type=\"STRING\" size=\"256\"/><Column id=\"wholJobEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobNm\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobRsnCn\" type=\"STRING\" size=\"256\"/><Column id=\"bldgSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoCtrtrNm\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoPicCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobFldCd\" type=\"STRING\" size=\"256\"/><Column id=\"arptCstrnPicId\" type=\"STRING\" size=\"256\"/><Column id=\"lbsvcPbcprtPicId\" type=\"STRING\" size=\"256\"/><Column id=\"basctAplcfmInfoId\" type=\"STRING\" size=\"256\"/><Column id=\"lbsvcTaskAgtRlvtYn\" type=\"STRING\" size=\"256\"/><Column id=\"lbsvcTaskMdtrId\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptRnb\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclFstVl\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclFstCn\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclSecdVl\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclSecdCn\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclThrVl\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclThrCn\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnRspnsYn\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/><Column id=\"isEdtrPsblty\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"docCd\">TSPDOC720</Col><Col id=\"aplySeCd\">TSPTSC001</Col><Col id=\"taskCd\">TAS00233</Col><Col id=\"aplyNo\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInstlChg", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"cmcnPrnmntYmd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcnYmd\" type=\"STRING\" size=\"256\"/><Column id=\"rntar\" type=\"STRING\" size=\"256\"/><Column id=\"bgncstPrnmntYmd\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnPrdEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnPrdBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"bfhdMtgCn\" type=\"STRING\" size=\"256\"/><Column id=\"otstMtgNeedYn\" type=\"STRING\" size=\"256\"/><Column id=\"otstMtgCn\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnCmptnYn\" type=\"STRING\" size=\"256\"/><Column id=\"cmcnInspYmd\" type=\"STRING\" size=\"256\"/><Column id=\"naplyRsnCn\" type=\"STRING\" size=\"256\"/><Column id=\"chgFcltCstrnCn\" type=\"STRING\" size=\"256\"/><Column id=\"instlRsnCn\" type=\"STRING\" size=\"256\"/><Column id=\"flrplnAplcnYn\" type=\"STRING\" size=\"256\"/><Column id=\"cycl1BfhdMetgCn\" type=\"STRING\" size=\"256\"/><Column id=\"cycl2BfhdMetgCn\" type=\"STRING\" size=\"256\"/><Column id=\"cycl3BfhdMetgCn\" type=\"STRING\" size=\"256\"/><Column id=\"cycl1BfhdMetgYmd\" type=\"STRING\" size=\"256\"/><Column id=\"cycl2BfhdMetgYmd\" type=\"STRING\" size=\"256\"/><Column id=\"cycl3BfhdMetgYmd\" type=\"STRING\" size=\"256\"/><Column id=\"inspRsltCd\" type=\"STRING\" size=\"256\"/><Column id=\"cmcnInspHr\" type=\"STRING\" size=\"256\"/><Column id=\"tatPicSmYn\" type=\"STRING\" size=\"256\"/><Column id=\"mvnPicCoNm\" type=\"STRING\" size=\"256\"/><Column id=\"grndsAgtCoNm\" type=\"STRING\" size=\"256\"/><Column id=\"archFldCoNm\" type=\"STRING\" size=\"256\"/><Column id=\"mchnFldCoNm\" type=\"STRING\" size=\"256\"/><Column id=\"elctyFldCoNm\" type=\"STRING\" size=\"256\"/><Column id=\"cmnctFldCoNm\" type=\"STRING\" size=\"256\"/><Column id=\"fiftFldCoNm\" type=\"STRING\" size=\"256\"/><Column id=\"safeMngrDayCoNm\" type=\"STRING\" size=\"256\"/><Column id=\"safeMngrNghtCoNm\" type=\"STRING\" size=\"256\"/><Column id=\"mvnPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"grndsAgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"archFldPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"mchnFldPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"elctyFldPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"cmnctFldPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"fiftFldPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"safeMngrDayNm\" type=\"STRING\" size=\"256\"/><Column id=\"safeMngrNghtNm\" type=\"STRING\" size=\"256\"/><Column id=\"instlRsnCd\" type=\"STRING\" size=\"256\"/><Column id=\"prvcClctEsntlAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"prvcClctChcAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"instlRsnEtcCn\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnOtlnCn\" type=\"STRING\" size=\"256\"/><Column id=\"grndsAgtBstrPicSmYn\" type=\"STRING\" size=\"256\"/><Column id=\"safeMngrDayBstrPicSmYn\" type=\"STRING\" size=\"256\"/><Column id=\"safeMngrNghtBstrPicSmYn\" type=\"STRING\" size=\"256\"/><Column id=\"grndsAgtSmFldChcCd\" type=\"STRING\" size=\"256\"/><Column id=\"daySafeMngrSmFldChcCd\" type=\"STRING\" size=\"256\"/><Column id=\"nghtSafeMngrSmFldChcCd\" type=\"STRING\" size=\"256\"/><Column id=\"cmcnInspMtgCn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCnvyMttr", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/><Column id=\"cnvyMttrCn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtrb", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><ConstColumn id=\"AplcfmWrtRcpt\" type=\"STRING\" size=\"500\" value=\"{&quot;description&quot;:&quot;신청서작성보완접수&quot;, &quot;editable&quot;:&quot;TAS00233:신청서작성,TAS10431:신청서보완&quot;, &quot;readonly&quot;:&quot;TAS00235:담당자접수&quot;}\"/><ConstColumn id=\"CmcnInspDmnd\" type=\"STRING\" size=\"30\" value=\"{&quot;description&quot;:&quot;준공검사요청&quot;, &quot;editable&quot;:&quot;TAS10404:준공검사요청,TAS00340:준공검사&quot;, &quot;readonly&quot;:&quot;TAS10414:관련부서처리,TAS10430:신청자조치사항보완,TAS10453:조건부완료,TAS00489:도면및서류최종검토,TAS00333:만족도조사,TAS00245:종료&quot;}\"/><ConstColumn id=\"BfhdMetgDsctn\" type=\"STRING\" size=\"30\" value=\"{&quot;description&quot;:&quot;사전미팅내역&quot;, &quot;editable&quot;:&quot;TAS00336:착공승인검토,TAS00340:준공검사,TAS10453:조건부완료,TAS00489:도면및서류최종검토&quot;, &quot;readonly&quot;:&quot;TAS10415:관련부서처리,TAS10404:준공검사요청,TAS10414:관련부서처리,TAS10430:신청자조치사항보완,TAS00333:만족도조사,TAS00245:종료&quot;}\"/><ConstColumn id=\"PrcsDsctnTtl\" type=\"STRING\" size=\"30\" value=\"{&quot;description&quot;:&quot;처리내역제목&quot;, &quot;editable&quot;:&quot;TAS00336:착공승인검토&quot;, &quot;readonly&quot;:&quot;TAS10415:관련부서처리,TAS10404:준공검사요청,TAS00340:준공검사,TAS10414:관련부서처리,TAS10430:신청자조치사항보완,TAS10453:조건부완료,TAS00489:도면및서류최종검토,TAS00333:만족도조사,TAS00245:종료&quot;}\"/><ConstColumn id=\"CmcnInspDsctn\" type=\"STRING\" size=\"30\" value=\"{&quot;description&quot;:&quot;준공검사내역&quot;, &quot;editable&quot;:&quot;TAS00336:착공승인검토&quot;, &quot;readonly&quot;:&quot;TAS10415:관련부서처리,TAS10404:준공검사요청,TAS00340:준공검사,TAS10414:관련부서처리,TAS10430:신청자조치사항보완,TAS10453:조건부완료,TAS00489:도면및서류최종검토,TAS00333:만족도조사,TAS00245:종료&quot;}\"/><ConstColumn id=\"CmcnInspYmd\" type=\"STRING\" size=\"30\" value=\"{&quot;description&quot;:&quot;준공검사날짜&quot;, &quot;editable&quot;:&quot;TAS00340:준공검사,TAS10453:조건부완료,TAS00489:도면및서류최종검토&quot;, &quot;readonly&quot;:&quot;TAS00336:착공승인검토,TAS10415:관련부서처리,TAS10404:준공검사요청,TAS10414:관련부서처리,TAS10430:신청자조치사항보완,TAS00333:만족도조사,TAS00245:종료&quot;}\"/><ConstColumn id=\"CmcnInspRslt\" type=\"STRING\" size=\"30\" value=\"{&quot;description&quot;:&quot;준공검사결과,내역&quot;, &quot;editable&quot;:&quot;TAS00340:준공검사,TAS10453:조건부완료,TAS00489:도면및서류최종검토&quot;, &quot;readonly&quot;:&quot;TAS10404:준공검사요청,TAS10414:관련부서처리,TAS10430:신청자조치사항보완,TAS00333:만족도조사,TAS00245:종료&quot;}\"/><ConstColumn id=\"DocOtpt1\" type=\"STRING\" size=\"30\" value=\"{&quot;description&quot;:&quot;문서출력(승인신청서)&quot;, &quot;editable&quot;:&quot;&quot;, &quot;readonly&quot;:&quot;TAS00336:착공승인검토,TAS10415:관련부서처리,TAS10404:준공검사요청,TAS00340:준공검사,TAS10414:관련부서처리,TAS10430:신청자조치사항보완,TAS10453:조건부완료,TAS00489:도면및서류최종검토,TAS00333:만족도조사,TAS00245:종료&quot;}\"/><ConstColumn id=\"DocOtpt2\" type=\"STRING\" size=\"30\" value=\"{&quot;description&quot;:&quot;문서출력(준공검사서,승인정보)&quot;, &quot;editable&quot;:&quot;&quot;, &quot;readonly&quot;:&quot;TAS00340:준공검사,TAS10414:관련부서처리,TAS10430:신청자조치사항보완,TAS10453:조건부완료,TAS00489:도면및서류최종검토,TAS00333:만족도조사,TAS00245:종료&quot;}\"/><ConstColumn id=\"FlrplnAplcnYn\" type=\"STRING\" size=\"30\" value=\"{&quot;description&quot;:&quot;도면및서류최종검토&quot;, &quot;editable&quot;:&quot;TAS00489:도면및서류최종검토&quot;, &quot;readonly&quot;:&quot;TAS00333:만족도조사,TAS00245:종료&quot;}\"/><ConstColumn id=\"CoprPrcs\" type=\"STRING\" size=\"30\" value=\"{&quot;description&quot;:&quot;협조처리&quot;, &quot;editable&quot;:&quot;TAS00336:착공승인검토&quot;, &quot;readonly&quot;:&quot;TAS10415:관련부서처리,TAS10404:준공검사요청,TAS00340:준공검사,TAS10414:관련부서처리,TAS10430:신청자조치사항보완,TAS10453:조건부완료,TAS00489:도면및서류최종검토,TAS00333:만족도조사,TAS00245:종료&quot;}\"/><ConstColumn id=\"BgncstAprvRvw\" type=\"STRING\" size=\"30\" value=\"{&quot;description&quot;:&quot;착공승인검토&quot;, &quot;editable&quot;:&quot;TAS00336:착공승인검토&quot;, &quot;readonly&quot;:&quot;TAS10415:관련부서처리,TAS10404:준공검사요청,TAS00340:준공검사,TAS10414:관련부서처리,TAS10430:신청자조치사항보완,TAS10453:조건부완료,TAS00489:도면및서류최종검토,TAS00333:만족도조사,TAS00245:종료&quot;}\"/><ConstColumn id=\"BgncstAprvRvwEdtr\" type=\"STRING\" size=\"30\" value=\"{&quot;description&quot;:&quot;착공승인검토편집&quot;, &quot;editable&quot;:&quot;TAS00336:착공승인검토&quot;, &quot;readonly&quot;:&quot;&quot;}\"/><ConstColumn id=\"BgncstAprvRvwDeptEdtr\" type=\"STRING\" size=\"30\" value=\"{&quot;description&quot;:&quot;착공승인검토부서편집&quot;, &quot;editable&quot;:&quot;TAS10415:관련부서처리&quot;, &quot;readonly&quot;:&quot;&quot;}\"/><ConstColumn id=\"CmcnInspRvw\" type=\"STRING\" size=\"30\" value=\"{&quot;description&quot;:&quot;준공검사&quot;, &quot;editable&quot;:&quot;TAS00340:준공검사&quot;, &quot;readonly&quot;:&quot;TAS10404:준공검사요청,TAS10414:관련부서처리,TAS10430:신청자조치사항보완,TAS10453:조건부완료,TAS00489:도면및서류최종검토,TAS00333:만족도조사,TAS00245:종료&quot;}\"/><ConstColumn id=\"CmcnInspRvwEdtr\" type=\"STRING\" size=\"30\" value=\"{&quot;description&quot;:&quot;준공검사편집&quot;, &quot;editable&quot;:&quot;TAS00340 준공검사&quot;, &quot;readonly&quot;:&quot;&quot;}\"/><ConstColumn id=\"CmcnInspRvwDeptEdtr\" type=\"STRING\" size=\"30\" value=\"{&quot;description&quot;:&quot;준공검사부서편집&quot;, &quot;editable&quot;:&quot;TAS10414:관련부서처리&quot;, &quot;readonly&quot;:&quot;&quot;}\"/><ConstColumn id=\"DgstfnExmn\" type=\"STRING\" size=\"30\" value=\"{&quot;description&quot;:&quot;만족도조사&quot;, &quot;editable&quot;:&quot;TAS00333:만족도조사&quot;, &quot;readonly&quot;:&quot;TAS00245:종료&quot;}\"/><ConstColumn id=\"CnvyMttr\" type=\"STRING\" size=\"30\" value=\"{&quot;description&quot;:&quot;전달사항&quot;, &quot;editable&quot;:&quot;TAS00233:신청서작성,TAS10431:신청서보완,TAS00336:착공승인검토,TAS10404:준공검사요청,TAS00340:준공검사,TAS10430:신청자조치사항보완,TAS10453:조건부완료,TAS00489:도면및서류최종검토&quot;, &quot;readonly&quot;:&quot;&quot;}\"/><ConstColumn id=\"AtchCn\" type=\"STRING\" size=\"30\" value=\"{&quot;description&quot;:&quot;별첨목록&quot;, &quot;editable&quot;:&quot;&quot;, &quot;readonly&quot;:&quot;TAS00336:착공승인검토,TAS10404:준공검사요청,TAS00340:준공검사,TAS10430:신청자조치사항보완,TAS10453:조건부완료,TAS00489:도면및서류최종검토&quot;}\"/></ColumnInfo>");
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
            this.addChild(obj.name, obj);

            obj = new Combo("cmbTest","298","20","150","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_visible("false");
            var divBtn_form_cmbTest_innerdataset = new nexacro.NormalDataset("divBtn_form_cmbTest_innerdataset", obj);
            divBtn_form_cmbTest_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">TAS00233</Col><Col id=\"datacolumn\">TAS00233_신청서작성</Col></Row><Row><Col id=\"codecolumn\">TAS10431</Col><Col id=\"datacolumn\">TAS10431_신청서보완</Col></Row><Row><Col id=\"codecolumn\">TAS00235</Col><Col id=\"datacolumn\">TAS00235_담당자접수</Col></Row><Row><Col id=\"codecolumn\">TAS00336</Col><Col id=\"datacolumn\">TAS00336_착공승인검토</Col></Row><Row><Col id=\"codecolumn\">TAS10415</Col><Col id=\"datacolumn\">TAS10415 관련부서처리</Col></Row><Row><Col id=\"codecolumn\">TAS10404</Col><Col id=\"datacolumn\">TAS10404 준공검사요청</Col></Row><Row><Col id=\"codecolumn\">TAS00340</Col><Col id=\"datacolumn\">TAS00340 준공검사</Col></Row><Row><Col id=\"codecolumn\">TAS10414</Col><Col id=\"datacolumn\">TAS10414 관련부서처리</Col></Row><Row><Col id=\"codecolumn\">TAS10430</Col><Col id=\"datacolumn\">TAS10430 신청자조치사항보완</Col></Row><Row><Col id=\"codecolumn\">TAS10453</Col><Col id=\"datacolumn\">TAS10453 조건부완료</Col></Row><Row><Col id=\"codecolumn\">TAS00489</Col><Col id=\"datacolumn\">TAS00489 도면및서류최종검토</Col></Row><Row><Col id=\"codecolumn\">TAS00333</Col><Col id=\"datacolumn\">TAS00333 만족도조사</Col></Row><Row><Col id=\"codecolumn\">TAS00245</Col><Col id=\"datacolumn\">TAS00245 종료</Col></Row></Rows>");
            obj.set_innerdataset(divBtn_form_cmbTest_innerdataset);
            obj.set_text("Combo00");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btnTest","570","192","112","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("0");
            obj.set_text("팦업테스트");
            obj.set_cssclass("btn_WF_Search");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divBtn.addChild(obj.name, obj);

            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Tab("tabStep","0","divTitle:10",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tpgAplcntInfo",this.tabStep);
            obj.set_text("신청자정보");
            obj.set_formscrollbartype("default autoindicator");
            this.tabStep.addChild(obj.name, obj);

            obj = new Tabpage("tpgAplyInfo",this.tabStep);
            obj.set_text("신청정보");
            obj.set_formscrollbartype("default autoindicator");
            this.tabStep.addChild(obj.name, obj);

            obj = new Tabpage("tpgPicInfo",this.tabStep);
            obj.set_text("담당자정보");
            obj.set_formscrollbartype("default autoindicator");
            this.tabStep.addChild(obj.name, obj);

            obj = new Tabpage("tpgPrcsDsctn",this.tabStep);
            obj.set_text("처리내역");
            obj.set_formscrollbartype("default autoindicator");
            this.tabStep.addChild(obj.name, obj);

            obj = new Tabpage("tpgDgstfnExmn",this.tabStep);
            obj.set_text("만족도조사");
            this.tabStep.addChild(obj.name, obj);

            obj = new Div("divForm","0","110",null,null,"60","divBtn:10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Step01");
            obj.set_visible("true");
            obj.set_formscrollbartype("auto autoindicator");
            obj.set_async("true");
            obj.set_url("work::CST/TSC/CST002S01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divForm00","0","60",null,null,"60","70",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Step02");
            obj.set_visible("true");
            obj.set_formscrollbartype("auto autoindicator");
            obj.set_positionstep("1");
            obj.set_async("true");
            this.addChild(obj.name, obj);

            obj = new Div("divForm00_00","0","60",null,null,"60","70",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Step03");
            obj.set_visible("true");
            obj.set_formscrollbartype("auto autoindicator");
            obj.set_positionstep("2");
            obj.set_async("true");
            this.addChild(obj.name, obj);

            obj = new Div("divForm00_00_00","0","60",null,null,"60","70",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Step04");
            obj.set_visible("true");
            obj.set_formscrollbartype("auto autoindicator");
            obj.set_positionstep("4");
            obj.set_async("true");
            this.addChild(obj.name, obj);

            obj = new RaonkUpload("RaonkUpload","-1080","630","1020","200",null,null,null,null,null,null,this);
            obj.set_taborder("6");
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

            obj = new Div("divForm00_00_00_00","0","60",null,null,"60","70",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Step04");
            obj.set_visible("true");
            obj.set_formscrollbartype("auto autoindicator");
            obj.set_positionstep("3");
            obj.set_async("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBtn.form
            obj = new Layout("default","",0,0,this.divBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.cmbTest.set_taborder("1");
                p.cmbTest.set_innerdataset(divBtn_form_cmbTest_innerdataset);
                p.cmbTest.set_codecolumn("codecolumn");
                p.cmbTest.set_datacolumn("datacolumn");
                p.cmbTest.set_visible("false");
                p.cmbTest.set_text("Combo00");
                p.cmbTest.move("298","20","150","40",null,null);

                p.btnTest.set_taborder("0");
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
            obj.set_flexmainaxisalign("start");
            obj.set_type("horizontal");
            obj.set_spacing("10px 20px 10px 20px");
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

            //-- Default Layout : this.tabStep.tpgPicInfo
            obj = new Layout("default","",0,0,this.tabStep.tpgPicInfo.form,function(p){});
            this.tabStep.tpgPicInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabStep.tpgPrcsDsctn.form
            obj = new Layout("default","",0,0,this.tabStep.tpgPrcsDsctn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.tabStep.tpgPrcsDsctn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.tabStep.tpgPrcsDsctn.form
            obj = new Layout("mobile","",0,0,this.tabStep.tpgPrcsDsctn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
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

            //-- Default Layout : this.divForm00
            obj = new Layout("default","",0,0,this.divForm00.form,function(p){});
            this.divForm00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm00_00
            obj = new Layout("default","",0,0,this.divForm00_00.form,function(p){});
            this.divForm00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm00_00_00
            obj = new Layout("default","",0,0,this.divForm00_00_00.form,function(p){});
            this.divForm00_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm00_00_00_00
            obj = new Layout("default","",0,0,this.divForm00_00_00_00.form,function(p){});
            this.divForm00_00_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("신청서작성(시설물설치)");
                p.set_stepitemsize("1");
                p.set_stepalign("center bottom");

                p.divBtn.set_taborder("0");
                p.divBtn.set_text("Div00");
                p.divBtn.set_cssclass("div_WF_CkBg");
                p.divBtn.move("0",null,null,"60","60","0");

                p.divTitle.set_taborder("7");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);

                p.tabStep.set_taborder("5");
                p.tabStep.set_tabindex("0");
                p.tabStep.move("0","divTitle:10",null,"50","60",null);

                p.tabStep.tpgAplcntInfo.set_text("신청자정보");
                p.tabStep.tpgAplcntInfo.set_formscrollbartype("default autoindicator");

                p.tabStep.tpgAplyInfo.set_text("신청정보");
                p.tabStep.tpgAplyInfo.set_formscrollbartype("default autoindicator");

                p.tabStep.tpgPicInfo.set_text("담당자정보");
                p.tabStep.tpgPicInfo.set_formscrollbartype("default autoindicator");

                p.tabStep.tpgPrcsDsctn.set_text("처리내역");
                p.tabStep.tpgPrcsDsctn.set_formscrollbartype("default autoindicator");

                p.tabStep.tpgDgstfnExmn.set_text("만족도조사");

                p.divForm.set_taborder("1");
                p.divForm.set_text("Step01");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("auto autoindicator");
                p.divForm.set_async("true");
                p.divForm.set_url("work::CST/TSC/CST002S01.xfdl");
                p.divForm.move("0","110",null,null,"60","divBtn:10");

                p.divForm00.set_taborder("2");
                p.divForm00.set_text("Step02");
                p.divForm00.set_visible("true");
                p.divForm00.set_formscrollbartype("auto autoindicator");
                p.divForm00.set_positionstep("1");
                p.divForm00.set_async("true");
                p.divForm00.move("0","60",null,null,"60","70");

                p.divForm00_00.set_taborder("3");
                p.divForm00_00.set_text("Step03");
                p.divForm00_00.set_visible("true");
                p.divForm00_00.set_formscrollbartype("auto autoindicator");
                p.divForm00_00.set_positionstep("2");
                p.divForm00_00.set_async("true");
                p.divForm00_00.move("0","60",null,null,"60","70");

                p.divForm00_00_00.set_taborder("4");
                p.divForm00_00_00.set_text("Step04");
                p.divForm00_00_00.set_visible("true");
                p.divForm00_00_00.set_formscrollbartype("auto autoindicator");
                p.divForm00_00_00.set_positionstep("4");
                p.divForm00_00_00.set_async("true");
                p.divForm00_00_00.move("0","60",null,null,"60","70");

                p.RaonkUpload.set_taborder("6");
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
                p.RaonkUpload.move("-1080","630","1020","200",null,null);

                p.divForm00_00_00_00.set_taborder("8");
                p.divForm00_00_00_00.set_text("Step04");
                p.divForm00_00_00_00.set_visible("true");
                p.divForm00_00_00_00.set_formscrollbartype("auto autoindicator");
                p.divForm00_00_00_00.set_positionstep("3");
                p.divForm00_00_00_00.set_async("true");
                p.divForm00_00_00_00.move("0","60",null,null,"60","70");
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("5");
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

                p.divForm.move("20","120",null,null,"20","70");

                p.divForm00.move("20","50",null,null,"20","70");

                p.divForm00_00.move("20","50",null,null,"20","70");

                p.divForm00_00_00.move("20","50",null,null,"20","70");

                p.divBtn.move("0",null,null,"60","0","0");
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            obj.set_stepcount("5");
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
            this._addPreloadList("fdl","work::CST/TSC/CST002S01.xfdl");
        };
        
        // User Script
        this.registerScript("CST002M00.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	CST002M00.xfdl
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

        //include "xjs::TaskCom.xjs";  // 업무공통
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
        	this.cfnEtcCdLoad({ id:this.dsAtflArtclList.name, cbf:"fnCallback", dsAtflArtclList:"{id:'selectTaskComListCd', cnd:{cdTyId:'ATFL_SE', note:'CST002M00'}}"});  // 첨부파일구분

        	// 준공검사 탭 버튼
        	//this.tabStep.tpgCmcnInsp.uptabbuttonwidth = this.tabStep.tpgCmcnInsp.tabbuttonwidth;
        	//this.tabStep.tpgCmcnInsp.tabbuttonwidth = 0;

        	// 만족도조사 탭 버튼
        	this.tabStep.tpgDgstfnExmn.uptabbuttonwidth = this.tabStep.tpgDgstfnExmn.tabbuttonwidth;
        	this.tabStep.tpgDgstfnExmn.tabbuttonwidth = 0;
        };

        this.form_onload = function(obj,e)
        {
            trace(this.name + "_LLLLLLLLLLLLLLLLLLLLLLLLLL_11111");

            // 팦업으로 실행시의 처리
         	if(this.getOwnerFrame().name == "popupFcltyInstlChg") {
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
        	var pvAplyNo = this.getOwnerFrame().pvAplyNo || "TSC2411_00022"; // || "TSC2410_00001";   // 신청번호
        	if (this.gfnIsNull(pvAplyNo)) {
        		// 버튼생성
        		this.dsMst_onload();
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
        			strSvcUrl = "fcltyInstlChg/selectFcltyInstlChg.do";
        			inData    = "dsSearch=dsSearch";
        			outData   = "dsMst=dsMst dsInstlChg=dsInstlChg dsCnvyMttr=dsCnvyMttr dsAtfl=dsAtfl dsTaskPrcsFlwWf=dsTaskPrcsFlwWf dsRvwOpnn=dsRvwOpnn";
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
        			strSvcUrl = "fcltyInstlChg/saveFcltyInstlChg.do";
        			inData    = "dsWfInfo=" + this.FV_DS_OTPT_WORK_FLOW_INFO + ":U"  // WorkFlow 정보
        			          + " dsMst=dsMst:A"                                     // Master DS
         			          + " dsInstlChg=dsInstlChg:A"                           // 시설물 설치(변경) DS
        			          + " dsCnvyMttr=dsCnvyMttr:A"                           // 전달사항 DS
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
        				this.dsAtfl.setColumn(this.dsAtfl.findRow("colId", this.dsAtchRslt.getColumn(i, "colId")), "atflMngNo", this.dsAtchRslt.getColumn(i, "atflMngNo"));
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
        		    // 준공검사요청 화면에서...
        		    if(this.divBtn.form.CTL11043) {
        				var isExst = this.cfnIsExstTaskPrcsFlw({ seq:"999", jobCd:"TAS10453", nextJobCd:"TAS00340" }); // TAS10453:조건부완료, TAS10404:준공검사요청
        				this.divBtn.form.CTL11035.visible = !isExst;  // 준공검사요청 -> 준공검사
        				this.divBtn.form.CTL11043.visible = isExst;   // 준공검사요청 -> 조건부완료
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
        	// WorkFlow 정보
        	var wfInfo = this.cfnGetWfInfo(obj.name);
        	this.dsMst.setColumn(0, "taskCd"    , wfInfo.jobPrcsPrgrsSeCd        );  // 현재업무코드
        	this.dsMst.setColumn(0, "nextTaskCd", wfInfo.nextStepJobPrcsPrgrsSeCd);  // 다음업무코드

        	// 데이터 변경 여부 및 데이터 정합성 점검
        	// CTL00778:임시저장,CTL11136:임시저장,CTL11044:임시저장,CTL00929:임시저장,CTL00945:임시저장,CTL00993:신청취소,CTL00810:종료,CTL00851:미처리종료,CTL10988:미처리종료,CTL00485:설문응답완료
        	if("CTL00778:임시저장,CTL11136:임시저장,CTL11044:임시저장,CTL00929:임시저장,CTL00945:임시저장,CTL00993:신청취소,CTL00810:종료,CTL00851:미처리종료,CTL10988:미처리종료,CTL00485:설문응답완료".indexOf(wfInfo.prcsSeCd) == -1) {
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
        			if("[CTL00993:신청취소]".indexOf(wfInfo.prcsSeCd) != -1) {
        				this.dsMst.deleteAll();       // Master DS
        				this.dsInstlChg.deleteAll();  // 시설물 설치(변경) DS
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
        	// TAS00245:종료
        	if(taskCd == "TAS00245" || !this.dsMst.isEdtrPsblty) {
        		this.divBtn.height = 0;
        	} else {
        		this.cfnBtnCrt({ crtTrgt:this.divBtn, lnkgEvnt:this.Button_onclick, id:this.divBtn.name, cbf:"fnCallback", inqCnd : { jobPrcsPrgrsSeCd:taskCd, aplyNo:aplyNo } });
        	}

        	// 속성 생성
            this.cfnAtrbCrt( this.dsAtrb, taskCd, this.dsMst.isEdtrPsblty);

        	// 만족도조사 탭 버튼
        	this.tabStep.tpgDgstfnExmn.tabbuttonwidth = 0;

        	// 만족도조사 탭 버튼 보이기
        	if(this.cfnGetAtrb("vsDgstfnExmn")) {  // 만족도조사
        		this.tabStep.tpgDgstfnExmn.tabbuttonwidth = this.tabStep.tpgDgstfnExmn.uptabbuttonwidth;
        	}

        	if(this.dsMst.isEdtrPsblty) {
        		if(this.cfnGetAtrb("vsAplcfmWrtRcpt")) {  // 신청서작성,보완,접수
        			this.tabStep.tabindex = this.cfnGetTabIndex(this.tabStep, "tpgAplcntInfo");  // 신청자정보
        		// TAS00333:만족도조사
        		} else if(this.cfnGetAtrb("vsDgstfnExmn")) {  // 만족도조사
        			this.tabStep.tabindex = this.cfnGetTabIndex(this.tabStep, "tpgDgstfnExmn");  // 만족도조사
        		} else {
        			this.tabStep.tabindex = this.cfnGetTabIndex(this.tabStep, "tpgPrcsDsctn");  // 처리내역
        		}
        	}
        };

        this.dsInstlChg_onvaluechanged = function(obj,e)
        {
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
        		var colId = this.dsAtfl.getColumn(i, "colId");
        		this.dsFile.setColumn(0, colId , this.dsAtfl.getColumn(i, "orgnlFileNm") + '(' + this.dsAtfl.getColumn(i, "fileSz") + ')');  // 파일풀명
            };

        	this.resetScroll();
        };

        // 이하는 테스트용
        // =============================================================================
        this.divBtn_btnTest_onclick = function(obj,e)
        {
        	var oArg    = { pvAplyNo:"TSC2410_00001" };
        	var oOption = { title:"신청서 작성", titlebar:true, width:900, height:800 };
        	this.gfnOpenPopup("popupFcltyInstlChg", "work::CST/TSC/CST002M00.xfdl", oArg, "", oOption);
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

        this.dsCnvyMttr_onload = function(obj,e)
        {
        	if(obj.rowcount == 0) {
        		obj.addRow();
        		obj.applyChange();
        	}
        };








        //test
        /**
        *  입주자 서비스 플랫폼 구축(업무공통)
        *  @FileName 	TaskCom.xjs
        *  @Creator 	김주화
        *  @CreateDate 	2024/08/27
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        * 2024/08/27			김주화	T				업무공통 Library
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.FV_DS_INPT_GRD_PRZT_INFO  = "dsInptGrdPrztInfo"  ;  // 개인화정보관련 입력 데이터셋
        this.FV_DS_OTPT_GRD_PRZT_INFO  = "dsOtptGrdPrztInfo"  ;  // 개인화정보관련 출력 데이터셋
        this.FV_DS_INPT_WORK_FLOW_INFO = "dsInptWorkFlowInfo" ;  // 워크플로우 입력 데이터셋
        this.FV_DS_OTPT_WORK_FLOW_INFO = "dsOtptWorkFlowInfo" ;  // 워크플로우 출력 데이터셋
        this.FV_DS_OTPT_TASK_FLOW_INFO = "dsOtptTaskPrcsFlwWf";  // 업무처리흐름 출력 데이터셋
        this.FV_DS_OTPT_GET_APLY_SE_NM = "dsOtptGetAplySeNm"  ;  // 신청구분명 가져오기 출력 데이터셋
        this.FV_DS_ATRB_NAME           = "dsAtrb"             ;  // 속성 데이터셋
        this.FV_DS_FILE_DWNLD          = "dsFileDwnld"        ;  // 파일 다운로드용 데이터셋
        this.FV_ARGS_WORK_FLOW_INFO    = "";                     // 워크플로우 조회 조건


        /**
        * @class grid 필수입력여부 체크하기
        * @param objGrid : 그리드 정보
        * @return true/false
        * @example if (this.cfnGrdIsValidated(this.divGrd.form.grdList) == false) return
        */
        this.cfnGrdIsValidated = function(objGrid) {

        	for (var i = 0; i < objGrid.rowcount; i++) {
        		for (var j = 0; j < objGrid.getCellCount("head"); j++) {
        			if (objGrid.getCellPropertyValue(-1,j,"cssclass" ) == "CellHead_E") {
        				if (objGrid.getCellPropertyValue(i,j,"edittype" ) == "date") {
        					if (!this.gfn_isYMD(objGrid.getCellValue(i,j))) {
        						// {0} 날짜 오류입니다.
        						this.gfnAlertMsg("msg", "REN_013", [(i+1) + "라인에 " + objGrid.getHeadValue(j) ]);
        						//objGrid.setFocusRow(i);
        						objGrid.setCellPos(j, i);
        						//objGrid.showEditor(true);

        						return false;
        					}
        				} else {
        					if (this.gfnIsNull(objGrid.getCellValue(i,j))) {
        						//{0} 을(를) 입력하십시오.
        						this.gfnAlertMsg("msg", "MSG_009", [(i+1) + "라인에 " + objGrid.getHeadValue(j) ]);
        						//objGrid.setFocusRow(i);
        						objGrid.setCellPos(j, i);
        						//objGrid.showEditor(true);

        						return false;
        					}
        				}
        			}
        		}
        	}

        	return true;
        };

        /**
        * @class 공통코드 불러오기
        * @param objJson : 공통코드 정보
        * @return 없음
        * @example this.cfnComCdLoad({ id:"commonCodeSearch", cbf:"fn_callBack", dsCd1:"EMPTIT:A", dsCd2:"SVCCD:S", dsCd3:"Y10:B", dsCd4:"COMPROC" });
        *          :A = "전체", :S = "선택", :B 또는 : = ""
        *
        */
        this.cfnComCdLoad = function(objJson) {
            var strSvcId    = objJson.id || "_cfnComCdLoad_";
        	var strSvcUrl   = "com/comCdLoad.do";
        	var inData      = "";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = objJson.cbf;
        	var isASync     = true;

        	for(key in objJson) {
        		if(key.startsWith("ds")) {
        			strArg  += " " + key + ":" + objJson[key];
        			outData += " " + key + "=" + key;
        		}
        	}

        	strArg   = "inData=" + nexacro.wrapQuote(strArg.trim());
        	outData = outData.trim();

            this.gfnTransaction (strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isASync);
        };

        /**
        * @class 기타코드 불러오기
        * @param objJson : 기타코드 정보
        * @return 없음
        * @example this.cfnEtcCdLoad({ id:"etcCodeSearch", cbf:"fn_callBack", dsCd1:"selectEtcCode:A", dsCd2:"selectEtcCode2:S", dsCd3:"selectEtcCode3:B", dsCd4:"selectEtcCode4" });
        *          :A = "전체", :S = "선택", :B 또는 : = ""
        *
        */
        this.cfnEtcCdLoad = function(objJson) {
            var strSvcId    = objJson.id || "_cfnEtcCdLoad_";
        	var strSvcUrl   = "com/etcCdLoad.do";
        	var inData      = "";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = objJson.cbf;
        	var isASync     = true;

        	for(key in objJson) {
        		if(key.startsWith("ds")) {
        			strArg  += "|" + key + ";" + objJson[key];
        			outData += " " + key + "=" + key;
        		}
        	}

        	strArg   = "inData=" + nexacro.wrapQuote(strArg.trim());
        	outData = outData.trim();

            this.gfnTransaction (strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isASync);
        };

        /**
        * @class 개인화정보 불러오기
        * @param objJson : 그리드ID 정보
        * @return 없음
        * @example this.cfnSetGrdPrztInfo({ userId:"admin", scrnId:"CST002M00" });
        *          this.cfnSetGrdPrztInfo();
        */
        this.cfnSetGrdPrztInfo = function(objJson) {
            objJson = objJson ? objJson : {};

            // 입력 데이터셋
        	this[this.FV_DS_INPT_GRD_PRZT_INFO] = new Dataset(this.FV_DS_INPT_GRD_PRZT_INFO);
        	this[this.FV_DS_INPT_GRD_PRZT_INFO].addColumn("userId", 'String');
        	this[this.FV_DS_INPT_GRD_PRZT_INFO].addColumn("scrnId", 'String');

        	var nRow = this[this.FV_DS_INPT_GRD_PRZT_INFO].addRow();
        	this[this.FV_DS_INPT_GRD_PRZT_INFO].setColumn(nRow, "userId", this.objApp.gdsUser.getColumn(0,"userId") || objJson.userId || "test");
        	this[this.FV_DS_INPT_GRD_PRZT_INFO].setColumn(nRow, "scrnId", this.name || objJson.scrnId || "TEST");

            // 출력 데이터셋
        	this[this.FV_DS_OTPT_GRD_PRZT_INFO] = new Dataset(this.FV_DS_OTPT_GRD_PRZT_INFO);

            // 서비스 호출
            var strSvcId    = "_cfnSetGrdPrztInfo_";
        	var strSvcUrl   = "com/comGrdPrztInfoLoad.do";
        	var inData      = this.FV_DS_INPT_GRD_PRZT_INFO + "=" + this.FV_DS_INPT_GRD_PRZT_INFO;
        	var outData     = this.FV_DS_OTPT_GRD_PRZT_INFO + "=" + this.FV_DS_OTPT_GRD_PRZT_INFO;
        	var strArg      = "";
        	var callBackFnc = "cbfComGrdPrztInfo";
        	var isASync     = true;

            this.gfnTransaction (strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isASync);
        };

        /**
        * @class 개인화정보 저장
        * @param objJson : 그리드ID 정보
        * @return 없음
        * @example this.cfnStrgGrdPrztInfo({ userId:"admin", scrnId:"CST002M00", objtId:"grdList", prztInfo:"그리드format" });
        *          this.cfnStrgGrdPrztInfo({ userId:"admin", scrnId:"CST002M00", objtId:"this.tabMain.tpgWord.form.divForm.form.divGrd.form.grdList", prztInfo:"그리드format" });
        *
        */
        this.cfnStrgGrdPrztInfo = function(objJson) {
            // 입력 데이터셋
        	this[this.FV_DS_INPT_GRD_PRZT_INFO] = new Dataset(this.FV_DS_INPT_GRD_PRZT_INFO);
        	this[this.FV_DS_INPT_GRD_PRZT_INFO].addColumn("userId"  , 'String');
        	this[this.FV_DS_INPT_GRD_PRZT_INFO].addColumn("scrnId"  , 'String');
        	this[this.FV_DS_INPT_GRD_PRZT_INFO].addColumn("objtId"  , 'String');
        	this[this.FV_DS_INPT_GRD_PRZT_INFO].addColumn("prztInfo", 'String');

        	var nRow = this[this.FV_DS_INPT_GRD_PRZT_INFO].addRow();
        	this[this.FV_DS_INPT_GRD_PRZT_INFO].setColumn(nRow, "userId"  , this.objApp.gdsUser.getColumn(0,"userId") || objJson.userId || "test");
        	this[this.FV_DS_INPT_GRD_PRZT_INFO].setColumn(nRow, "scrnId"  , objJson.scrnId || this.name || "TEST");
        	this[this.FV_DS_INPT_GRD_PRZT_INFO].setColumn(nRow, "objtId"  , objJson.objtId);
        	this[this.FV_DS_INPT_GRD_PRZT_INFO].setColumn(nRow, "prztInfo", objJson.prztInfo);

            // 서비스 호출
            var strSvcId    = "_cfnStrgGrdPrztInfo_";
        	var strSvcUrl   = "com/comGrdPrztInfoStrg.do";
        	var inData      = this.FV_DS_INPT_GRD_PRZT_INFO + "=" + this.FV_DS_INPT_GRD_PRZT_INFO;
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "cbfComGrdPrztInfo";
        	var isASync     = true;

            this.gfnTransaction (strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isASync);
        };

        /**
        * @class 개인화정보 불러오기 콜백함수
        * @param
        * @return 없음
        * @example
        *
        */
        this.cbfComGrdPrztInfo = function(srvcId, errCd, errMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errCd != 0) { return; }

        	if(srvcId == "_cfnSetGrdPrztInfo_") {   // 개인화정보 조회
        		if(this[this.FV_DS_OTPT_GRD_PRZT_INFO].rowcount == 0) { return; };

        		for(var i = 0; i < this[this.FV_DS_OTPT_GRD_PRZT_INFO].rowcount; i++) {
        			var objGrd = [this, this[this.FV_DS_OTPT_GRD_PRZT_INFO].getColumn(i, "objtId").split(".")].map(function(v, i, o) { if(i == 0) { for(var x of o[1]) { v = v[x]; } return v; } })[0];
        			objGrd["orgnlFrm"] = objGrd.getFormatString();  // 원본 형식을 저장
        			objGrd.set_formats(this[this.FV_DS_OTPT_GRD_PRZT_INFO].getColumn(i, "prztInfo"));
        		}

        		if(this.isValidObject(this.FV_DS_OTPT_GRD_PRZT_INFO)) this.removeChild(this.FV_DS_OTPT_GRD_PRZT_INFO);
        		if(this.isValidObject(this.FV_DS_OTPT_GRD_PRZT_INFO)) this.removeChild(this.FV_DS_OTPT_GRD_PRZT_INFO);
        	} else if(srvcId == "_cfnStrgGrdPrztInfo_") {  // 개인화정보 저장

        	}
        };

        /**
        * @class 버튼생성
        * @param objJson : 조회조건(조회 조건 중 필요한 항목만 전달하면 됨)
        * @return 없음
        * @example this.cfnBtnCrt({ crtTrgt:this.divBtn, lnkgEvnt:this.Button_onclick, cbf:"fnCallback", inqCnd : { jobSeCd:"TSC", jobTycoSeCd:"TSPTSC003", taskPrcsStepSeCd:"ACT10135", jobPrcsPrgrsSeCd:"TAS10397", prcsSeCd:"CTL10875", nextStepJobPrcsPrgrsSeCd:"TAS10397"} });
        *
        */
        this.cfnBtnCrt = function(objJson) {
            this.FV_ARGS_WORK_FLOW_INFO = objJson;  // 조회조건 저장

            // 입력 데이터셋
        	this[this.FV_DS_INPT_WORK_FLOW_INFO] = new Dataset(this.FV_DS_INPT_WORK_FLOW_INFO);

        	// 컬럼생성
        	for(key in objJson.inqCnd) {
        	    this[this.FV_DS_INPT_WORK_FLOW_INFO].addColumn(key, 'String');
        	}

        	var nRow = this[this.FV_DS_INPT_WORK_FLOW_INFO].addRow();
        	// 컬럼값 지정
        	for(key in objJson.inqCnd) {
        		this[this.FV_DS_INPT_WORK_FLOW_INFO].setColumn(nRow, key, objJson.inqCnd[key]);
        	}

        	// 출력 데이터셋
        	this[this.FV_DS_OTPT_WORK_FLOW_INFO] = new Dataset(this.FV_DS_OTPT_WORK_FLOW_INFO);
        	this[this.FV_DS_OTPT_TASK_FLOW_INFO] = new Dataset(this.FV_DS_OTPT_TASK_FLOW_INFO);

            // 서비스 호출
            var strSvcId    = this.FV_ARGS_WORK_FLOW_INFO.id || "_cfnBtnCrt_";
        	var strSvcUrl   = "com/workFlowLoad.do";
        	var inData      = this.FV_DS_INPT_WORK_FLOW_INFO + "=" + this.FV_DS_INPT_WORK_FLOW_INFO;
        	var outData     = this.FV_DS_OTPT_WORK_FLOW_INFO + "=" + this.FV_DS_OTPT_WORK_FLOW_INFO + " "
        	                + this.FV_DS_OTPT_TASK_FLOW_INFO + "=" + this.FV_DS_OTPT_TASK_FLOW_INFO
        					;
        	var strArg      = "";
        	var callBackFnc = "cbfBtnCrt";
        	var isASync     = false;

            this.gfnTransaction (strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isASync);
        };

        /**
        * @class 버튼생성 콜백함수
        * @param
        * @return 없음
        * @example
        *
        */
        this.cbfBtnCrt = function(srvcId, errCd, errMsg)
        {
        	// 버튼을 생성할 대상이 있으면...
        	if(this.FV_ARGS_WORK_FLOW_INFO.crtTrgt) {
        		// 기존 버튼 제거
        		Array.from(this.FV_ARGS_WORK_FLOW_INFO.crtTrgt.form.components).forEach(function(v) {
        			if(v.name.startsWith("CTL")) { v.destroy(); v = null; }
        		});

        		// 에러 시 화면 처리 내역
        		if(errCd != 0) { return; }

        		var dsOtpt = this[this.FV_DS_OTPT_WORK_FLOW_INFO];
        		for(var i = 0; i < dsOtpt.rowcount; i++) {
        			var btnNew = new nexacro.Button;
        			var btnId  = dsOtpt.getColumn(i, "prcsSeCd");
        			var btnNm  = dsOtpt.getColumn(i, "prcsSeCdNm");

        			btnNew.init(btnId, 0, 0, 0, 40);          // 초기화
        			btnNew.fittocontents = "width";           // 넓이 자동조절
        			btnNew.text          = btnNm;             // 버튼 문자
        			btnNew.cssclass      = dsOtpt.getColumn(i, "cssClass") || "btn_WF_No";
        			btnNew.addEventHandler("onclick", this.FV_ARGS_WORK_FLOW_INFO.lnkgEvnt, this);
        			this.FV_ARGS_WORK_FLOW_INFO.crtTrgt.addChild(btnId, btnNew);
        			btnNew.expr = dsOtpt.getColumn(i, "exclCnd");

        			if(this.FV_ARGS_WORK_FLOW_INFO.crtTrgt.form.isValidObject(btnId)) {
        				btnNew.show();
        			} else {
        				this.FV_ARGS_WORK_FLOW_INFO.crtTrgt.form[btnId] = null;
        			}
        		}
        	}

        	if(this.isValidObject(this.FV_DS_INPT_WORK_FLOW_INFO)) { this.removeChild(this.FV_DS_INPT_WORK_FLOW_INFO) };
        	//if(this.isValidObject(this.FV_DS_OTPT_WORK_FLOW_INFO)) { this.removeChild(this.FV_DS_OTPT_WORK_FLOW_INFO) };

        	if(this.FV_ARGS_WORK_FLOW_INFO.cbf) {
        		this.lookupFunc(this.FV_ARGS_WORK_FLOW_INFO.cbf).call(srvcId, errCd, errMsg);
        	}

        	// 버튼 Div
        	this.FV_ARGS_WORK_FLOW_INFO.crtTrgt.form.resetScroll();
        };

        /**
        * @class 신청구분명 불러오기
        * @param objJson : 신청구분 정보
        * @return 없음
        * @example this.cfnGetAplySeNm({ id:"getAplySeNm", cbf:"fnCallBack", aplySeCd:"TSPTSC001" });
        *
        */
        this.cfnGetAplySeNm = function(objJson) {
            var strSvcId    = objJson.id || "_cfnGetAplySeNm_";
        	var strSvcUrl   = "com/getAplySeNm.do";
        	var inData      = "";
        	var outData     = this.FV_DS_OTPT_GET_APLY_SE_NM + "=" + this.FV_DS_OTPT_GET_APLY_SE_NM;
        	var strArg      = "inData=" + nexacro.wrapQuote(objJson.aplySeCd);
        	var callBackFnc = objJson.cbf;
        	var isASync     = true;

        	// 출력 데이터셋
        	this[this.FV_DS_OTPT_GET_APLY_SE_NM] = new Dataset(this.FV_DS_OTPT_GET_APLY_SE_NM);

            this.gfnTransaction (strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isASync);
        };

        /**
        * @class 신청구분명 돌려주기
        * @param
        * @return aplySeNm : 신청구분명
        * @example this.cfnGvbkAplySeNm();
        *
        */
        this.cfnGvbkAplySeNm = function()
        {
            var aplySeNm = "";

            if(this[this.FV_DS_OTPT_GET_APLY_SE_NM].rowcount > 0) {
        		aplySeNm = this[this.FV_DS_OTPT_GET_APLY_SE_NM].getColumn(0, "aplySeNm");
        	}

        	if(this.isValidObject(this.FV_DS_OTPT_GET_APLY_SE_NM)) this.removeChild(this.FV_DS_OTPT_GET_APLY_SE_NM);

        	return aplySeNm;
        };

        /**
        * @class panel의 Items의 항목을 배열로 반환한다.
        * @param pan : panel
        * @return 배열
        * @example this.cfnToArray(this.panel);
        *
        */
        this.cfnToArray = function(pan)
        {
            var oArry = new Array();
            if(!pan || !pan.items || !pan.items.length) { return oArry; }

        	for(var i = 0; i < pan.items.length; i++) {
        		oArry.push(pan.parent[pan.items[i].componentid]);
        	}

        	return oArry;
        };

        /**
        * @class 현재 사용자의 공사 직원 여부를 반환한다.
        * @param
        * @return boolean
        * @example this.cfnIsCstrnEmp();
        *
        */
        this.cfnIsCstrnEmp = function()
        {
            return this.objApp.gdsUser.getColumn(0, "iiacEmpYn") == "1";  // 공사직원여부
        };

        /**
        * @class 현재 사용자의 처리자 직원 여부를 반환한다.
        * @param
        * @return boolean
        * @example this.cfnIsPrcrEmp();
        *
        */
        this.cfnIsPrcrEmp = function()
        {
            return this.objApp.gdsUser.getColumn(0, "cpatcoEmpYn") == "1";  // 협력사직원여부
        };

        /**
        * @class 현재 사용자의 공사 직원 및 처리자 직원 여부를 반환한다.
        * @param
        * @return boolean
        * @example this.cfnIsEmp();
        *
        */
        this.cfnIsEmp = function()
        {
            return this.cfnIsCstrnEmp() || this.cfnIsPrcrEmp();  // 공사직원 Or 협력사직원
        };

        /**
        * @class 화면에서 접기(펼침) 버튼 클릭시 접기 또는 펼침 기능 수행
        * @param  obj : 버튼
        * @return
        * @example this.cfnFold(obj);
        *
        */
        this.cfnFold = function(obj, ctrlkey)
        {
            // 서브 타이틀 그룹
            if(this.getPanel(obj)) {
        		var oForm = this;
        		var oDiv = this["div" + obj.name.substr(3)];
        		obj.cssclass = obj.cssclass == "btn_WF_ACPlus" ? "btn_WF_ACMinus" : "btn_WF_ACPlus";  // +,- css 변경
        		oDiv.visible = obj.cssclass != "btn_WF_ACPlus";

        		if(ctrlkey) {
        			this.cfnToArray(this.panForm).forEach(function(v) {
        				if(oForm["pan" + v.name.substr(3)]) {
        					if(v.name == oDiv.name || v instanceof Panel) { return; }
        					if(oForm["pan" + v.name.substr(3)].visible) {
        						v.visible = oDiv.visible;
        						oForm["btn" + v.name.substr(3)].cssclass = obj.cssclass;
        					}
        				}
        			});
        		}
        	// Div(가이드, 업무처리흐름도...)
        	} else {
        	    obj.parent.parent.upheight        = !obj.parent.parent.upheight        ? obj.parent.parent.height        : obj.parent.parent.upheight       ;  // div height 저장
        	    obj.parent.parent.upfittocontents = !obj.parent.parent.upfittocontents ? obj.parent.parent.fittocontents : obj.parent.parent.upfittocontents;  // div fittocontents 저장
        		obj.parent.parent.height          = obj.cssclass == "btn_WF_ACPlus" ? obj.parent.parent.upheight        : "54"  ;  // div height 변경
        		obj.parent.parent.fittocontents   = obj.cssclass == "btn_WF_ACPlus" ? obj.parent.parent.upfittocontents : "none";  // div fittocontents 변경
        		obj.cssclass = obj.cssclass == "btn_WF_ACPlus" ? "btn_WF_ACMinus" : "btn_WF_ACPlus";             // +,- css 변경
        	}
        };

        /**
        * @class Left Menu 및 화면전환
        * @param oItems : 화면ID
        * @return
        * @example this.fnMovePage(Left MenuID, 화면ID, 화면Url);
        *          this.fnMovePage("MNG_0000000021", "MNG_0000000144", "work::CST/CAD/CST009M01.xfdl");
        */
        this.fnMovePage = function(leftId, menuId, menuUrl)
        {
        	var objArg   = {};
        	this.objApp.gvVfrs.set_separatesize("108,*,0,0");

        	this.gfnLeftMenuCreate(leftId);
        	this.gfnMenuFocus(leftId);
        	this.gfnLeftTit(leftId);

        	var actNm = '';
        	this.gfnPageOpen(menuId, menuUrl, actNm, objArg);
        };

        /**
        * @class Dataset의 현재 행 정보를 JSON 형태로 변환하여 돌려준다
        * @param  obj : Dataset
        * @return
        * @example this.cfnFold(obj);
        *
        */
        this.cfnGetToJson = function(obj) {
        	var oJson = {};
        	for(var i = 0; i < obj.getColCount(); i++) {
        		oJson[obj.getColID(i)] = obj.getColumn(obj.rowposition, obj.getColID(i));
        	}

        	return oJson;
        };

        /**
        * @class obj 그룹 내의 Grid를 찾아 바인딩된 첫번째 컬럼명(colId)을 돌려준다
        * @param  ru : RaonkUpload, obj : Object
        * @return
        * @example this.cfnSetAtflInfo(this.RaonkUpload, obj).OpenFileDialog();
        *
        */
        this.cfnSetAtflInfo = function(ru, obj) {
        	// Grid 에서 찾기
        	if(obj instanceof Grid) {
        		ru.upatflinfo = { colid:obj.getCellProperty("body", 0, "text").substr(5) };
        		return ru;
            // PANEL 에서 찾기
        	} else if(this.getPanel(obj) instanceof Panel) {
        		for(var i = 0, obj = this.getPanel(obj); i <= 5; i++) {
        			var grd = null;
        			Array.from(obj.items).forEach(function(v) { if(obj.parent[v.componentid] instanceof Grid) { grd = obj.parent[v.componentid]; }});
        			if(grd) {
        				ru.upatflinfo = { colid:grd.getCellProperty("body", 0, "text").substr(5) };
        				return ru;
        			} else {
        				obj = this.getPanel(obj);
        			}
        		}
        	}

        	return null;
        };

        /**
        * @class RaonkUpload용 customValue를 돌려준다.
        * @param  str : String("bgncstAprvRvwY06110" 또는 JSON.stringify({ "strCustomValue" : "bgncstAprvRvwY06110" }))
        * @return customValue
        * @example this.cfnGetCustomValue(JSON.stringify({ "strCustomValue" : colid }));
        *
        */
        this.cfnGetCustomValue = function(str) {
            try {
        	    return JSON.parse(str).strCustomValue;
        	} catch (e) {
        	    return str;
        	}
        };

        /**
        * @class obj 그룹 내의 특정 유형을 찾아 돌려준다
        * @param  obj : Object, type : 컴포넌트 유형
        * @return  Object
        * @example this.cfnSetObjInGroup(obj, Div);
        *
        */
        this.cfnFindObjByAtrb = function(obj, atrb, name) {
         	for(var i = 0, comps = obj.components; i <= 20; i++) {
        	    var obj = Array.from(comps).filter(function(v) {
        			return v[atrb]  == name; })[0];
        		if(obj) { return obj; };
        	}

        	return null;
        };

        /**
        * @class 현재 단계의 속성 값을 생성한다
        * @param dsAtrb:속성DS, taskCd:현재업무코드, isEdtrPsblty:정보편집권한여부
        * @return 없음
        * @example this.cfnAtrbCrt(dsAtrb, taskCd, isEdtrPsblty);
        */
        this.cfnAtrbCrt = function(ds, taskCd, isEdtrPsblty) {
            this.FV_DS_ATRB_NAME = ds.name;  // 속성 DS 명

        	ds.enableevent = false;
        	ds.clearData();
            // DS 컬럼 초기화
        	for(var i = ds.colcount - 1; i >= 0; i--) { ds.deleteColumn(i);	}

            // 데이터셋 컬럼 생성
        	for(var i = 0; i < ds.getConstCount(); i++) {
        		var colId = ds.getConstColID(i);
        		ds.addColumn("vs" + colId, "INT"   );  // visible
        		ds.addColumn("ro" + colId, "INT"   );  // readonly
        		ds.addColumn("cc" + colId, "STRING");  // cssclass
        	}
        	ds.addRow();

        	// 데이터셋 컬럼 값 생성
        	for(var i = 0; i < ds.getConstCount(); i++) {
        		var colId = ds.getConstColID(i);
        		var json  = JSON.parse(ds.getConstColumn(i));
        		var isEditable = json.editable.indexOf(taskCd) != -1;  // 편집가능여부
        		var isReadonly = json.readonly.indexOf(taskCd) != -1;  // 읽기전용여부

                // 이미 처리된 단계 여부 확인
        	    var bIsPrcs = this[this.FV_DS_OTPT_TASK_FLOW_INFO] && this[this.FV_DS_OTPT_TASK_FLOW_INFO].findRowExpr(nexacro.wrapQuote(json.editable) + ".indexOf(jobCd) != -1") != -1;

        		ds.setColumn(0, "vs" + colId, !isEdtrPsblty && (colId.endsWith("Edtr") || !bIsPrcs) ? false : !isEdtrPsblty || isEditable || isReadonly);
        		ds.setColumn(0, "ro" + colId, !isEdtrPsblty && (colId.endsWith("Edtr") || !bIsPrcs) ? true  : !isEdtrPsblty || !isEditable);
        		ds.setColumn(0, "cc" + colId, "sta_WF_Label" + (isEdtrPsblty && isEditable ? "_E" : ""));
        	}

        	ds.enableevent = true;
        };


        /**
        * @class 워크플로우 정보 가져오기
        * @param prcsSeCd : 기능ID(버튼ID)
        * @return 워크플로우 정보(JSON)
        * @example this.getWfInfo("CTL00459");
        *
        */
        this.cfnGetWfInfo = function(prcsSeCd) {
        	this[this.FV_DS_OTPT_WORK_FLOW_INFO].updatecontrol = false;
        	this[this.FV_DS_OTPT_WORK_FLOW_INFO].rowposition = this[this.FV_DS_OTPT_WORK_FLOW_INFO].findRow("prcsSeCd", prcsSeCd);
        	this[this.FV_DS_OTPT_WORK_FLOW_INFO].setRowType(this[this.FV_DS_OTPT_WORK_FLOW_INFO].rowposition, Dataset.ROWTYPE_UPDATE);
        	this[this.FV_DS_OTPT_WORK_FLOW_INFO].updatecontrol = true;

        	return this.cfnGetToJson(this[this.FV_DS_OTPT_WORK_FLOW_INFO]);
        };

        // Main 화면의 함수만 호출하기 위한 처리
        // -------------------------------------
        if(this.parent.name == "divWork") {
        	/**
        	* @class 단계의 속성 값을 돌려준다
        	* @param colId : 속성 컬럼 ID
        	* @return 없음
        	* @example this.cfnGetAtrb(colId);
        	*/
        	this.cfnGetAtrb = function(colId) {
        		var ds = this[this.FV_DS_ATRB_NAME];
        		return colId.split(",").filter(function(v) { return ds.getColumn(0, v); }).length > 0;
        	};

        	/**
        	* @class 업무처리흐름 정보 유무 확인
        	* @param cnd : 조건
        	* @return 여부
        	* @example this.cfnIsExstTaskPrcsFlw({ seq:"999", jobCd:"TAS10453", nextJobCd:"TAS10404" }));
        	*
        	*/
        	this.cfnIsExstTaskPrcsFlw = function(cnd) {
        		if(this.isValidObject(this.FV_DS_OTPT_TASK_FLOW_INFO)) {
        			return this[this.FV_DS_OTPT_TASK_FLOW_INFO].findRowExpr(Object.keys(cnd).map(function(k) { return (k + " == '" + cnd[k] + "'"); }).join(" && ")) != -1;
        		}

        		return false;
        	};
        }

        /**
        * @class 탭페이지 Index 찾기
        * @param this.tab : Tab Object, name : TabPageName
        * @return TabPageName의 Index
        * @example this.cfnGetTabIndex(this.tab, tappagename);
        *
        */
        this.cfnGetTabIndex = function(obj, name) {
            return Array.from(obj.tabpages).map(function(v) { return v.name; }).indexOf(name);
        };

        /**
        * @class 첨부파일 다운로드
        * @param ru : RaonkUpload, ds : dataset, colId : 다운로드 대상 column ID, e : event
        * @return
        * @example this.cfnFileDwnld(RaonkUpload, ds, colId, e);
        *
        */
        this.cfnFileDwnld = function(ru, ds, colId, e) {
            this[this.FV_DS_FILE_DWNLD] = new Dataset(this.FV_DS_FILE_DWNLD);  // 데이터셋 생성
        	var dsFile = this[this.FV_DS_FILE_DWNLD];
        	dsFile.copyData(ds);  // 데이터셋 형식 복사를 위한 처리
        	dsFile.clearData();   // 데이터셋 행 삭제
        	dsFile.copyRow(dsFile.addRow(), ds, ds.findRow("colId", colId));  // 다운로드 대상 파일 정보 복사
        	//console.log(dsFile.saveXML());
            this.gfnDownloadFile(ru, dsFile, e);  // 다운로드
        };





        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onstepchanged",this.form_onstepchanged,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("oninit",this.form_oninit,this);
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
            this.dsInstlChg.addEventHandler("onvaluechanged",this.dsInstlChg_onvaluechanged,this);
            this.dsCnvyMttr.addEventHandler("onload",this.dsCnvyMttr_onload,this);
            this.dsAtfl.addEventHandler("onload",this.dsAtfl_onload,this);
        };
        this.loadIncludeScript("CST002M00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
