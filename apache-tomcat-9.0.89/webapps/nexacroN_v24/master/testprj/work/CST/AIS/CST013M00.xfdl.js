(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST013M00");
            this.set_titletext("신청서작성(이동지역)tab");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtfl", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bsnsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtn\" type=\"STRING\" size=\"256\"/><Column id=\"strgFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTerm\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj._setContents("<ColumnInfo><Column id=\"A110\" type=\"STRING\" size=\"256\"/><Column id=\"B110\" type=\"STRING\" size=\"256\"/><Column id=\"C110\" type=\"STRING\" size=\"256\"/><Column id=\"D110\" type=\"STRING\" size=\"256\"/><Column id=\"E110\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtchRslt", this);
            obj._setContents("<ColumnInfo><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtflArtclList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWorkFlow", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMvmnRgnMst", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"srvcCd\" type=\"STRING\" size=\"256\"/><Column id=\"cpstArtclCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyKndCd\" type=\"STRING\" size=\"256\"/><Column id=\"rcptMdaCd\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/><Column id=\"aplyDt\" type=\"STRING\" size=\"256\"/><Column id=\"prcsDt\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"planBgngDt\" type=\"STRING\" size=\"256\"/><Column id=\"planEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"actlBgngDt\" type=\"STRING\" size=\"256\"/><Column id=\"actlEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrNm\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"ownrId\" type=\"STRING\" size=\"256\"/><Column id=\"ownrInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"ownrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"mdfcnDt\" type=\"STRING\" size=\"256\"/><Column id=\"mdfrId\" type=\"STRING\" size=\"256\"/><Column id=\"endCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyTtlNm\" type=\"STRING\" size=\"256\"/><Column id=\"srvcDmndCn\" type=\"STRING\" size=\"256\"/><Column id=\"drvnTranCnfdocPath\" type=\"STRING\" size=\"256\"/><Column id=\"cnvyMttrCn\" type=\"STRING\" size=\"256\"/><Column id=\"ownrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"pstnInfoRnb\" type=\"STRING\" size=\"256\"/><Column id=\"clmCustCd\" type=\"STRING\" size=\"256\"/><Column id=\"clmAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmDtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmZip\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPrcrPbcprtCd\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"vhclInspRcptDt\" type=\"STRING\" size=\"256\"/><Column id=\"vhclInspClrId\" type=\"STRING\" size=\"256\"/><Column id=\"aprvSpvsrId\" type=\"STRING\" size=\"256\"/><Column id=\"vhclIncmgClrId\" type=\"STRING\" size=\"256\"/><Column id=\"vhclRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"vhclIncmgDt\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclNm1\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnExmnCn1\" type=\"STRING\" size=\"256\"/><Column id=\"dptyRegYn\" type=\"STRING\" size=\"256\"/><Column id=\"avtnScrtyOfcPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"avtnScrtyOfcJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"acrdCmptnDt\" type=\"STRING\" size=\"256\"/><Column id=\"cmptnHpeDt\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnRspnsYn\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnRspnsDt\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptAplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptCtrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptPstnInfoCn\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtHwrtInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntHwrtInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"docCd\" type=\"STRING\" size=\"256\"/><Column id=\"mvmnRgnNoExnYn\" type=\"STRING\" size=\"256\"/><Column id=\"tdptyPvsnAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"lbsvcPbcprtPicExnYn\" type=\"STRING\" size=\"256\"/><Column id=\"lbsvcPbcprtPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclNm2\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclNm3\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnExmnCn2\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnExmnCn3\" type=\"STRING\" size=\"256\"/><Column id=\"rsvtCol1\" type=\"STRING\" size=\"256\"/><Column id=\"rsvtCol2\" type=\"STRING\" size=\"256\"/><Column id=\"rsvtCol3\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCstJobAprv", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"jobRbprsn1Nm\" type=\"STRING\" size=\"256\"/><Column id=\"jobRbprsn2Nm\" type=\"STRING\" size=\"256\"/><Column id=\"jobRbprsn1Telno\" type=\"STRING\" size=\"256\"/><Column id=\"jobRbprsn2Telno\" type=\"STRING\" size=\"256\"/><Column id=\"udgdEbmtItfeYn\" type=\"STRING\" size=\"256\"/><Column id=\"avtnInfoPvsnYn\" type=\"STRING\" size=\"256\"/><Column id=\"mvmnPathDsgnYn\" type=\"STRING\" size=\"256\"/><Column id=\"oprtrSafeEduYn\" type=\"STRING\" size=\"256\"/><Column id=\"safeFcltyInstlYn\" type=\"STRING\" size=\"256\"/><Column id=\"rltnInstBfhdCnsltnYn\" type=\"STRING\" size=\"256\"/><Column id=\"actlJobEndHr\" type=\"STRING\" size=\"256\"/><Column id=\"arcftInsdCrynPhbtCmdtyDocReadYn\" type=\"STRING\" size=\"256\"/><Column id=\"jobEndHr\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobNm\" type=\"STRING\" size=\"256\"/><Column id=\"dgadsCmdtyUseCmpanAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"jobPrpsEtcCn\" type=\"STRING\" size=\"256\"/><Column id=\"jobPrpsCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobRtrcnRsnCn\" type=\"STRING\" size=\"256\"/><Column id=\"dgadsCmdtyMngRbprsn1Nm\" type=\"STRING\" size=\"256\"/><Column id=\"incmgChckpntMvmnPathNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobDt\" type=\"STRING\" size=\"256\"/><Column id=\"jobBgngHr\" type=\"STRING\" size=\"256\"/><Column id=\"crynChckpntCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobTnope\" type=\"STRING\" size=\"256\"/><Column id=\"trsClsgnNm\" type=\"STRING\" size=\"256\"/><Column id=\"dgadsCmdtyMngRbprsn2Nm\" type=\"STRING\" size=\"256\"/><Column id=\"emrgYn\" type=\"STRING\" size=\"256\"/><Column id=\"lbsvcTkcgDeptTaskPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobAprvYn\" type=\"STRING\" size=\"256\"/><Column id=\"dgadsCmdtyAprvYn\" type=\"STRING\" size=\"256\"/><Column id=\"cnvyMttrCn\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobWeekNghtSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobPstnSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prvcClctEsntlAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"jobCmpanAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobPstnFlrplnAtchPath\" type=\"STRING\" size=\"256\"/><Column id=\"putEqpmntCn\" type=\"STRING\" size=\"256\"/><Column id=\"coNm\" type=\"STRING\" size=\"256\"/><Column id=\"ctinfo\" type=\"STRING\" size=\"256\"/><Column id=\"jobDays\" type=\"STRING\" size=\"256\"/><Column id=\"putMtrlToolKndCrynYn\" type=\"STRING\" size=\"256\"/><Column id=\"jobCstrnPstnDtlCn\" type=\"STRING\" size=\"256\"/><Column id=\"jobCmptnCn\" type=\"STRING\" size=\"256\"/><Column id=\"regFilePath\" type=\"STRING\" size=\"256\"/><Column id=\"jobPrdBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"jobPrdEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"jobCn\" type=\"STRING\" size=\"256\"/><Column id=\"chcRsnUtztnPrnmntChckpntCn\" type=\"STRING\" size=\"256\"/><Column id=\"jobRbprsn1SmYn\" type=\"STRING\" size=\"256\"/><Column id=\"jobRbprsn2SmYn\" type=\"STRING\" size=\"256\"/><Column id=\"jobRbprsn1PrvcClctUtztnTdptyPvsnWtcsPath\" type=\"STRING\" size=\"256\"/><Column id=\"jobRbprsn2PrvcClctUtztnTdptyPvsnWtcsPath\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/><Column id=\"jobTnopeOrg\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAisWapDnn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAisWapObj", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWapWatchBox", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAisWapLoc", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCnvyMttrCn", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"seqNo\" type=\"STRING\" size=\"256\"/><Column id=\"cnvyMttrCn\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWapWatchBoxDtl", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Tab("tabStep","0","60",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tabStep);
            obj.set_text("신청자정보");
            obj.set_formscrollbartype("default autoindicator");
            this.tabStep.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tabStep);
            obj.set_text("공사(작업)내역");
            obj.set_formscrollbartype("default autoindicator");
            this.tabStep.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.tabStep);
            obj.set_text("작업현장연락처");
            obj.set_formscrollbartype("default autoindicator");
            this.tabStep.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.tabStep);
            obj.set_text("이동지역내 작업시 준수사항");
            obj.set_formscrollbartype("default autoindicator");
            this.tabStep.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.tabStep);
            obj.set_text("투입자재 및 공구류");
            obj.set_formscrollbartype("default autoindicator");
            this.tabStep.addChild(obj.name, obj);

            obj = new Div("divForm","0","110",null,null,"60","70",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_url("work::CST/AIS/CST013M01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divForm01","0","110",null,null,"60","70",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_url("work::CST/AIS/CST013M02.xfdl");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Div("divForm02","0","110",null,null,"60","70",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_url("work::CST/AIS/CST013M03.xfdl");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Div("divForm03","0","110",null,null,"60","70",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.set_url("work::CST/AIS/CST013M04.xfdl");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Div("divForm04","0","110",null,null,"60","70",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div01");
            obj.set_url("work::CST/AIS/CST013M05.xfdl");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new RaonkUpload("RaonkUpload","-1080","630","1020","200",null,null,null,null,null,null,this);
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

            obj = new Div("divBtn","0",null,null,"60","60","0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("div_WF_CkBg");
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

            //-- Default Layout : this.divForm
            obj = new Layout("default","",0,0,this.divForm.form,function(p){});
            this.divForm.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm01
            obj = new Layout("default","",0,0,this.divForm01.form,function(p){});
            this.divForm01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm02
            obj = new Layout("default","",0,0,this.divForm02.form,function(p){});
            this.divForm02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm03
            obj = new Layout("default","",0,0,this.divForm03.form,function(p){});
            this.divForm03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm04
            obj = new Layout("default","",0,0,this.divForm04.form,function(p){});
            this.divForm04.form.addLayout(obj.name, obj);

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
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,800,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("신청서작성(이동지역)tab");

                p.divTitle.set_taborder("0");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);

                p.tabStep.set_taborder("1");
                p.tabStep.set_tabindex("0");
                p.tabStep.move("0","60",null,"50","60",null);

                p.tabStep.Tabpage1.set_text("신청자정보");
                p.tabStep.Tabpage1.set_formscrollbartype("default autoindicator");

                p.tabStep.Tabpage2.set_text("공사(작업)내역");
                p.tabStep.Tabpage2.set_formscrollbartype("default autoindicator");

                p.tabStep.Tabpage3.set_text("작업현장연락처");
                p.tabStep.Tabpage3.set_formscrollbartype("default autoindicator");

                p.tabStep.Tabpage4.set_text("이동지역내 작업시 준수사항");
                p.tabStep.Tabpage4.set_formscrollbartype("default autoindicator");

                p.tabStep.Tabpage5.set_text("투입자재 및 공구류");
                p.tabStep.Tabpage5.set_formscrollbartype("default autoindicator");

                p.divForm.set_taborder("2");
                p.divForm.set_text("Div00");
                p.divForm.set_url("work::CST/AIS/CST013M01.xfdl");
                p.divForm.move("0","110",null,null,"60","70");

                p.divForm01.set_taborder("3");
                p.divForm01.set_text("Div00");
                p.divForm01.set_url("work::CST/AIS/CST013M02.xfdl");
                p.divForm01.set_positionstep("1");
                p.divForm01.move("0","110",null,null,"60","70");

                p.divForm02.set_taborder("4");
                p.divForm02.set_text("Div00");
                p.divForm02.set_url("work::CST/AIS/CST013M03.xfdl");
                p.divForm02.set_positionstep("2");
                p.divForm02.move("0","110",null,null,"60","70");

                p.divForm03.set_taborder("6");
                p.divForm03.set_text("Div00");
                p.divForm03.set_url("work::CST/AIS/CST013M04.xfdl");
                p.divForm03.set_positionstep("3");
                p.divForm03.move("0","110",null,null,"60","70");

                p.divForm04.set_taborder("7");
                p.divForm04.set_text("Div01");
                p.divForm04.set_url("work::CST/AIS/CST013M05.xfdl");
                p.divForm04.set_positionstep("4");
                p.divForm04.move("0","110",null,null,"60","70");

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
                p.RaonkUpload.move("-1080","630","1020","200",null,null);

                p.divBtn.set_taborder("8");
                p.divBtn.set_cssclass("div_WF_CkBg");
                p.divBtn.move("0",null,null,"60","60","0");
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("5");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",480,800,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divTitle.move("0","0",null,"50","0",null);

                p.tabStep.move("20","60",null,"50","20",null);

                p.divForm.move("0","110",null,null,"0","70");

                p.divForm01.move("0","110",null,null,"0","70");

                p.divForm02.move("0","110",null,null,"0","70");

                p.divForm03.move("0","110",null,null,"0","70");

                p.divForm04.move("0","110",null,null,"0","70");
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            obj.set_stepcount("5");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divBtn","text","dsFcltOperMst","aplcntHwrtInptYn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
            this._addPreloadList("fdl","work::CST/AIS/CST013M01.xfdl");
            this._addPreloadList("fdl","work::CST/AIS/CST013M02.xfdl");
            this._addPreloadList("fdl","work::CST/AIS/CST013M03.xfdl");
            this._addPreloadList("fdl","work::CST/AIS/CST013M04.xfdl");
            this._addPreloadList("fdl","work::CST/AIS/CST013M05.xfdl");
        };
        
        // User Script
        this.addIncludeScript("CST013M00.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CST013M00.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	test.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/08/08
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/08/08			김완성					최초생성
        *******************************************************************************
        */
        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;  // 업무공통
        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); 									//필수함수
        	// 팝업으로 실행시의 처리
         	//if(this.getOwnerFrame().name == "popupMvmnRgnJobWtpl") {
        	if(this.getOwnerFrame().view == "popup") {
          	    this.divTitle.destroy();  								// 프로그램 타이틀 제거
          	    this.tabStep.top 	= 10;    							// tap 위치 조정
         		this.divForm.top 	= parseInt(this.tabStep.top)
        							+ parseInt(this.tabStep.height)
        							+ 10;    							// 신청자 정보 div 위치 조정
                this.resetScroll();
         	}

        	this.stepitemsize 		= 0;   								//스텝이미지사이즈
        	this.pvJobCd 			= this.getOwnerFrame().pvJobCd;		//taskCd
        	this.pvView 			= this.getOwnerFrame().view;		//view mode

        	if (this.gfnIsNull(this.pvJobCd)){this.pvJobCd = "TAS00077"} else {this.pvJobCd};
        	this.cfnBtnCrt({ crtTrgt:this.divBtn, lnkgEvnt:this.Button_onclick, inqCnd : { jobPrcsPrgrsSeCd:this.pvJobCd} });

        	//공통코드 함수 호출
        	this.cfnComCdLoad({ id:"commonCodeSearch", cbf:"fnCallBack", dsAisWapDnn:"AISWAPDNN:A" });			//[이동지역/작업승인]작업시간구분
        	this.cfnComCdLoad({ id:"commonCodeSearch", cbf:"fnCallBack", dsAisWapObj:"AISWAPOBJ:A" });			//[이동지역/작업승인]작업목적
        	this.cfnComCdLoad({ id:"commonCodeSearch", cbf:"fnCallBack", dsWapWatchBox:"WAPWATCHBOX:S" });		//[이동지역/작업승인]반입초소
        	this.cfnComCdLoad({ id:"commonCodeSearch", cbf:"fnCallBack", dsWapWatchBoxDtl:"WAPWATCHBOX:A" });	//[이동지역/작업승인]반입초소
        	this.cfnComCdLoad({ id:"commonCodeSearch", cbf:"fnCallBack", dsAisWapLoc:"AISWAPLOC:A" });			//[이동지역/작업승인]작업/공사위치

        	//필수항목 체크
        	//this.validateColumn.push({"title" : "연락처", "com": this.divForm.form.Div00.form.edtUserTelno});
        	this.fnInit();	//초기화
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

        this.cfnClose = function() {};

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        /**************************************************************************
         * @name : fnInit
         * @description : 초기화
         ***************************************************************************/
        this.fnInit = function()
        {
            // 첨부파일항목목록조회
        	this.cfnEtcCdLoad({ id:this.dsAtflArtclList.name, cbf:"fnCallback", dsAtflArtclList:"{id:'selectTaskComListCd', cnd:{cdTyId:'ATFL_SE', note:'CST013M00'}}"});  // 첨부파일구분
        	this.cfnGetAplySeNm({ id:"getAplySeNm", cbf:"fnCallback", aplySeCd:"TSPAIS001" });

        	this.gvUserId 	= this.objApp.gdsUser.getColumn(0, "userId");
        	this.gvUserNm 	= this.objApp.gdsUser.getColumn(0, "userNm");
        	this.gvCoId   	= this.objApp.gdsUser.getColumn(0, "coId");
        	this.gvCoNm   	= this.objApp.gdsUser.getColumn(0, "coNm");
        	this.gvTelNo  	= this.objApp.gdsUser.getColumn(0, "userMblTelno");

        	this.dsWapWatchBox.filter("uprCd == '' ");			//반입초소 목록

        	// 파라미터 확인
        	var pvAplyNo 	= this.getOwnerFrame().pvAplyNo;	// 신청번호
        	//pvAplyNo 		= "AIS1504_01068";
        	//trace(":: aplyNo :: " + pvAplyNo);

        	var vCurDate = this.gfnGetDate();
        	if (this.gfnIsNull(pvAplyNo) ) {

        		this.dsMvmnRgnMst.addRow();														//메인정보
        		this.dsMvmnRgnMst.setColumn(0, "aplySeCd"    		, "TSPAIS001");				//신청구분/범주(cmm_cat_cd)
        		this.dsMvmnRgnMst.setColumn(0, "taskCd"      		, "TAS00077");				//업무코드 taskCd
        		this.dsMvmnRgnMst.setColumn(0, "nextTaskCd"  		, "TAS00077");				//업무코드 nextTask

        		this.dsMvmnRgnMst.setColumn(0, "aplcntId"    		, this.gvUserId);			//신청자ID
        		this.dsMvmnRgnMst.setColumn(0, "aplcntNm"    		, this.gvUserNm);			//신청자명
        		this.dsMvmnRgnMst.setColumn(0, "rgtrId"    			, this.gvUserId);			//등록자
        		this.dsMvmnRgnMst.setColumn(0, "rgtrNm"    			, this.gvUserNm);			//등록자명

        		this.dsMvmnRgnMst.setColumn(0, "aplcntInstCd"		, this.gvCoId);				//신청자기관코드
        		this.dsMvmnRgnMst.setColumn(0, "aplcntInstNm"		, this.gvCoNm);				//신청자기관코드명
        		this.dsMvmnRgnMst.setColumn(0, "aplcntDeptCd"		, this.gvCoId);				//신청자부서코드
        		this.dsMvmnRgnMst.setColumn(0, "hwrtInptCtinfoNo"   , this.gvTelNo);			//휴대전화번호

        		this.dsCstJobAprv.addRow();														//이동지역작업계획서 작업승인
        		this.dsCstJobAprv.setColumn(0, "jobPrdBgngYmd"		, vCurDate);				//작업기간(시작일)
        		this.dsCstJobAprv.setColumn(0, "jobPrdEndYmd"		, vCurDate);				//작업기간(종료일)
        		this.dsCstJobAprv.setColumn(0, "jobDt"				, vCurDate);				//작업일

        		this.resetScroll();

        		this.fnStepCtrl();

        	} else {

        		this.divForm.top 	= parseInt(this.tabStep.top)
        							+ parseInt(this.tabStep.height)
        							+ 10;    							// 신청자정보 div 위치 조정
        		this.divForm01.top	= parseInt(this.tabStep.top)
        							+ parseInt(this.tabStep.height)
        							+ 10;    							// 공사(작업)내역 div 위치 조정
        		this.divForm02.top	= parseInt(this.tabStep.top)
        							+ parseInt(this.tabStep.height)
        							+ 10;    							// 작업현장연락처 위치 조정
        		this.divForm03.top	= parseInt(this.tabStep.top)
        							+ parseInt(this.tabStep.height)
        							+ 10;    							// 이동지역내작업시준수사항 위치 조정
        		this.divForm04.top	= parseInt(this.tabStep.top)
        							+ parseInt(this.tabStep.height)
        							+ 10;    							// 투입자재및공구류 위치 조정
        		this.resetScroll();

        		this.dsSearch.setColumn(0, "aplyNo", pvAplyNo);
        		this.fnSearch();										// 조회
        	}
        };

        /**************************************************************************
         * @name : fnSearch
         * @description : 조회
         ***************************************************************************/
        this.fnSearch = function()
        {
        	var strSvcId    = "search";
        	var strSvcUrl   = "ais/selectMvmnRgnAplcfmTmprInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsMvmnRgnMst=dsMvmnRgnMst"
        					+ " dsCstJobAprv=dsCstJobAprv"
        					+ " dsCnvyMttrCn=dsCnvyMttrCn"
        					+ " dsAtfl=dsAtfl";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /**************************************************************************
         * @name : fnSave
         * @description : 신청 및 임시저장
         ***************************************************************************/
        this.fnSave = function()
        {
        	var strSvcId    = "save";
        	var strSvcUrl   = "ais/saveMvmnRgnAply.do";
        	var inData      = "dsWfInfo=" + this.FV_DS_OTPT_WORK_FLOW_INFO + ":U"	//WorkFlow 정보
        					+ " dsMvmnRgnMst=dsMvmnRgnMst:A"						//이동지역 마스터
        					+ " dsCstJobAprv=dsCstJobAprv:A"						//이동지역작업계획서 작업승인
        					+ " dsCnvyMttrCn=dsCnvyMttrCn:A"						//전달의견
        					+ " dsAtfl=dsAtfl:U";									//첨부파일DS
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	//trace("callBack :: " +svcID);
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0) {
        		return;
        	}

        	switch(svcID) {

        		case "search": //조회

        			this.cfnGetAplySeNm({ id:"getAplySeNm", cbf:"fnCallback", aplySeCd:"TSPAIS001" });
        			this.fnStepCtrl();	//task별 화면제어

        			break;

        		case this.RaonkUpload.RAONKUPLOAD_UploadComplete.name :

        			// 파일 업로드 결과를 첨부파일 데이터셋에 설정
        			for(var i = 0; i < this.dsAtchRslt.rowcount; i++) {
        			    // 첨부파일관리번호
        				this.dsAtfl.setColumn(this.dsAtfl.findRow("colId", this.dsAtchRslt.getColumn(i, "colId")), "atflMngNo", this.dsAtchRslt.getColumn(i, "atflMngNo"));
        			}

        			//정보저장
        			//var vStrSvcId  = "saveMvmnRgnAply";
        			//var vStrSvcUrl = "ais/saveMvmnRgnAply.do";
        			this.fnSave();

        			break;

        		case this.dsAtflArtclList.name : // 첨부파일항목목록조회
        			this.dsFile.clear();
        			for(var i = 0; i < this.dsAtflArtclList.rowcount; i++) {
        				this.dsFile.addColumn(this.dsAtflArtclList.getColumn(i, "cdId"), "STRING");
        			}
        			this.dsFile.addRow();

        			break;

        		case "getAplySeNm" :  // 공통코드(신청구분)

        			this.dsSearch.setColumn(0, "aplySeCd", "TSPAIS001");
        			this.dsSearch.setColumn(0, "aplySeNm", this.cfnGvbkAplySeNm());
        			this.divForm.form.div00.form.edtAplySeNm.set_value(this.dsSearch.getColumn(0, "aplySeNm"));

        			//버튼제어
        			//공항공사 담당자(감독자) 유무
        			var vLbsvcPbcprtPicExnYn = this.dsMvmnRgnMst.getColumn(0, "lbsvcPbcprtPicExnYn");
        			if(vLbsvcPbcprtPicExnYn == "1") {
        				//예
        				this.divForm01.form.div00_01_02.form.pan00_01_02.visible = true;	//용역담당자 패널
        				this.divBtn.form.CTL00532.visible = true;							//용역담당자확인 show(CTL00532)
        				this.divBtn.form.CTL00333.visible = false;							//6115.신청	hide(CTL00333)
        				this.divBtn.form.CTL00794.visible = false;							//6117.신청	hide(CTL00794)
        			} else {
        				//아니오
        				this.divForm01.form.div00_01_02.form.pan00_01_02.visible = false;	//용역담당자 패널
        				var seccarry_yn =  this.dsCstJobAprv.getColumn(0, "putMtrlToolKndCrynYn");	//투입자재 및 공구류 반입여부
        				if(seccarry_yn == "1") {
        					this.divBtn.form.CTL00333.visible = true;						//show(CTL00333);	//6115.신청
        					this.divBtn.form.CTL00794.visible = false;						//hide(CTL00794);	//6117.신청
        				} else {
        					this.divBtn.form.CTL00333.visible = false;						//hide(CTL00333);	//6115.신청
        					this.divBtn.form.CTL00794.visible = true;						//show(CTL00794);	//6117.신청
        				}
        			}
        			break;

        		case "mvmnRgnAplcfmTmprStrg" :				//임시저장

        			this.gfnAlertMsg("save", "CST_003");	//정상적으로 처리되었습니다.
        			/*
        			this.gfnCloseMenu("MNG_0000000309");	//
        			this.gfnCloseMenu("MNG_0000000223");	//
        			this.fnMovePage('MNG_0000000309', 'MNG_0000000223', 'work::SVC/CMM/LIF030M00.xfdl');
        			*/
        			if(this.pvView == "popup")this.close("reflash");

        			break;

        		case "mvmnRgnAply" :					//신청

        			this.gfnAlertMsg("save", "CST_003");	//정상적으로 처리되었습니다.
        			/*
        			this.gfnCloseMenu("MNG_0000000309");	//
        			this.gfnCloseMenu("MNG_0000000223");	//
        			this.fnMovePage('MNG_0000000309', 'MNG_0000000223', 'work::SVC/CMM/LIF030M00.xfdl');
        			*/
        			if(this.pvView == "popup")this.close("reflash");

        			break;

        		case "mvmnRgnAplcfmAplyRtrcn" :					//신청취소

        			this.gfnAlertMsg("save", "CST_003");	//정상적으로 처리되었습니다.
        			/*
        			this.gfnCloseMenu("MNG_0000000309");	//
        			this.gfnCloseMenu("MNG_0000000223");	//
        			this.fnMovePage('MNG_0000000309', 'MNG_0000000223', 'work::SVC/CMM/LIF030M00.xfdl');
        			*/
        			if(this.pvView == "popup")this.close("reflash");

        			break;

        		default :
        			break;
        	}
        };

        /**************************************************************************
         * @name : fnSaveFile
         * @description : 신청 및 임시저장
         ***************************************************************************/
        this.fnSaveFile = function()
        {
        	//case this.RaonkUpload.name :      // 첨부파일 저장
        	var obj = { "thumnail" : "N"        // 썸네일 생성여부(첨부파일 중 이미지 파일이 있는 경우 "Y" 이면 썸네일 파일 생성)
        			  , "bsnsSeCd" : "TSPCMM"   // 업무구분코드(입주자서비스)
        			  , "prgrmId"  : this.name  // 프로그램ID (화면 ID)
        	};

        	this.RaonkUpload.AddFormData('params', JSON.stringify(obj));
        	this.RaonkUpload.Transfer();
        };

        /**************************************************************************
         * @name : msgCallback
         * @description : 얼럿창 콜백 함수
         ***************************************************************************/
        this.msgCallback = function(sPopupId, sRtn) {

        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        /**************************************************************************
         * @name : fnValiChk
         * @description : Validation Check
         ***************************************************************************/
        this.fnValiChk = function()
        {
        	/*********************** 신청자정보 start*************************************/
        	//신청서비스구분
        	if(this.gfnIsNull(this.dsMvmnRgnMst.getColumn(0, "aplySeCd"))) {
        		this.gfnAlertMsg("msg", "CST_004", ["신청서비스구분"]);							//{0}은 필수입력항목입니다.
        		this.setStepIndex(0);
        		return false;
        	}
        	//신청자
        	if(this.gfnIsNull(this.dsMvmnRgnMst.getColumn(0, "aplcntId"))) {
        		this.gfnAlertMsg("msg", "CST_004", ["신청자"]);								//{0}은 필수입력항목입니다.
        		this.setStepIndex(0);
        		return false;
        	}
        	//휴대폰번호
        	/*
        	if(this.gfnIsNull(this.dsMvmnRgnMst.getColumn(0, "hwrtInptCtinfoNo"))) {
        		this.gfnAlertMsg("msg", "CST_004", ["휴대폰번호"]);							//{0}은 필수입력항목입니다.
        		this.setStepIndex(0);
        		return false;
        	}
        	*/
        	/*********************** 공사(작업)내역 start*************************************/
        	//작업(공사)명
        	if(this.gfnIsNull(this.dsCstJobAprv.getColumn(0, "cstrnJobNm"))) {
        		this.gfnAlertMsg("msg", "CST_004", ["작업(공사)명"]);							//{0}은 필수입력항목입니다.
        		this.setStepIndex(0);
        		return false;
        	}
        	///작업기간(시작일)
        	if(this.gfnIsNull(this.dsCstJobAprv.getColumn(0, "jobPrdBgngYmd"))) {
        		this.gfnAlertMsg("msg", "CST_004", ["작업기간(시작일)"]);						//{0}은 필수입력항목입니다.
        		this.setStepIndex(0);
        		return false;
        	}
        	//작업기간(종료일)
        	if(this.gfnIsNull(this.dsCstJobAprv.getColumn(0, "jobPrdEndYmd"))) {
        		this.gfnAlertMsg("msg", "CST_004", ["작업기간(종료일)"]);						//{0}은 필수입력항목입니다.
        		this.setStepIndex(0);
        		return false;
        	}
        	//작업(공사)시간구분
        	if(this.gfnIsNull(this.dsCstJobAprv.getColumn(0, "cstrnJobWeekNghtSeCd"))) {
        		this.gfnAlertMsg("msg", "CST_004", ["작업(공사)시간구분"]);						//{0}은 필수입력항목입니다.
        		this.setStepIndex(0);
        		return false;
        	}
        	//작업일
        	if(this.gfnIsNull(this.dsCstJobAprv.getColumn(0, "jobDt"))) {
        		this.gfnAlertMsg("msg", "CST_004", ["작업일"]);								//{0}은 필수입력항목입니다.
        		this.setStepIndex(0);
        		return false;
        	}
        	//작업시작시간
        	if(this.gfnIsNull(this.dsCstJobAprv.getColumn(0, "jobBgngHr"))) {
        		this.gfnAlertMsg("msg", "CST_004", ["작업시작시간"]);							//{0}은 필수입력항목입니다.
        		this.setStepIndex(0);
        		return false;
        	}
        	//작업종료시간
        	if(this.gfnIsNull(this.dsCstJobAprv.getColumn(0, "jobEndHr"))) {
        		this.gfnAlertMsg("msg", "CST_004", ["작업종료시간"]);							//{0}은 필수입력항목입니다.
        		this.setStepIndex(0);
        		return false;
        	}
        	//작업목적
        	if(this.gfnIsNull(this.dsCstJobAprv.getColumn(0, "jobPrpsCd"))) {
        		this.gfnAlertMsg("msg", "CST_004", ["작업목적"]);								//{0}은 필수입력항목입니다.
        		this.setStepIndex(0);
        		return false;
        	}
        	//작업내용
        	if(this.gfnIsNull(this.dsCstJobAprv.getColumn(0, "jobCn"))) {
        		this.gfnAlertMsg("msg", "CST_004", ["작업내용"]);								//{0}은 필수입력항목입니다.
        		this.setStepIndex(0);
        		return false;
        	}
        	//this.dsCstJobAprv.getColumn(0, "");											//작업(공사위치)구분

        	//작업(공사위치)상세
        	if(this.gfnIsNull(this.dsCstJobAprv.getColumn(0, "jobCstrnPstnDtlCn"))) {
        		this.gfnAlertMsg("msg", "CST_004", ["작업(공사위치)상세"]);						//{0}은 필수입력항목입니다.
        		this.setStepIndex(0);
        		return false;
        	}
        	//출입초소 및 이동경로
        	if(this.gfnIsNull(this.dsCstJobAprv.getColumn(0, "incmgChckpntMvmnPathNm"))) {
        		this.gfnAlertMsg("msg", "CST_004", ["출입초소 및 이동경로"]);					//{0}은 필수입력항목입니다.
        		this.setStepIndex(0);
        		return false;
        	}
        	//공항공사 담당자(감독자)유무
        	if(this.gfnIsNull(this.dsMvmnRgnMst.getColumn(0, "lbsvcPbcprtPicExnYn"))) {
        		this.gfnAlertMsg("msg", "CST_004", ["공항공사 담당자(감독자)유무"]);				//{0}은 필수입력항목입니다.
        		this.setStepIndex(0);
        		return false;
        	}
        	//공항공사담당자(감독자)
        	if(this.gfnIsNull(this.dsMvmnRgnMst.getColumn(0, "lbsvcPbcprtPicNm"))) {
        		this.gfnAlertMsg("msg", "CST_004", ["공항공사담당자(감독자)"]);					//{0}은 필수입력항목입니다.
        		this.setStepIndex(0);
        		return false;
        	}

        	/*********************** 작업현장연락처 start*************************************/
        	//작업책임자1 동일여부
        	if(this.gfnIsNull(this.dsCstJobAprv.getColumn(0, "jobRbprsn1SmYn"))) {
        		this.gfnAlertMsg("msg", "CST_004", ["작업책임자1 동일여부"]);					//{0}은 필수입력항목입니다.
        		this.setStepIndex(0);
        		return false;
        	}
        	//작업책임자1
        	if(this.gfnIsNull(this.dsCstJobAprv.getColumn(0, "jobRbprsn1Nm"))) {
        		this.gfnAlertMsg("msg", "CST_004", ["작업책임자1"]);							//{0}은 필수입력항목입니다.
        		this.setStepIndex(0);
        		return false;
        	}
        	//작업책임자2 동일여부
        	if(this.gfnIsNull(this.dsCstJobAprv.getColumn(0, "jobRbprsn2SmYn"))) {
        		this.gfnAlertMsg("msg", "CST_004", ["작업책임자2 동일여부"]);					//{0}은 필수입력항목입니다.
        		this.setStepIndex(0);
        		return false;
        	}
        	//작업책임자2
        	if(this.gfnIsNull(this.dsCstJobAprv.getColumn(0, "jobRbprsn2Nm"))) {
        		this.gfnAlertMsg("msg", "CST_004", ["작업책임자2"]);							//{0}은 필수입력항목입니다.
        		this.setStepIndex(0);
        		return false;
        	}

        	//작업자안전교육여부
        	if(this.gfnIsNull(this.dsCstJobAprv.getColumn(0, "oprtrSafeEduYn"))) {
        		this.gfnAlertMsg("msg", "CST_004", ["작업자안전교육여부"]);						//{0}은 필수입력항목입니다.
        		this.setStepIndex(0);
        		return false;
        	}
        	//관련기관사전협의
        	if(this.gfnIsNull(this.dsCstJobAprv.getColumn(0, "rltnInstBfhdCnsltnYn"))) {
        		this.gfnAlertMsg("msg", "CST_004", ["관련기관사전협의"]);						//{0}은 필수입력항목입니다.
        		this.setStepIndex(0);
        		return false;
        	}
        	//이동경로지정
        	if(this.gfnIsNull(this.dsCstJobAprv.getColumn(0, "mvmnPathDsgnYn"))) {
        		this.gfnAlertMsg("msg", "CST_004", ["이동경로지정"]);							//{0}은 필수입력항목입니다.
        		this.setStepIndex(0);
        		return false;
        	}
        	//항공정보제공
        	if(this.gfnIsNull(this.dsCstJobAprv.getColumn(0, "avtnInfoPvsnYn"))) {
        		this.gfnAlertMsg("msg", "CST_004", ["항공정보제공"]);							//{0}은 필수입력항목입니다.
        		this.setStepIndex(0);
        		return false;
        	}
        	//지하매설물간섭
        	if(this.gfnIsNull(this.dsCstJobAprv.getColumn(0, "udgdEbmtItfeYn"))) {
        		this.gfnAlertMsg("msg", "CST_004", ["지하매설물간섭"]);							//{0}은 필수입력항목입니다.
        		this.setStepIndex(0);
        		return false;
        	}
        	//안전시설물설치
        	if(this.gfnIsNull(this.dsCstJobAprv.getColumn(0, "safeFcltyInstlYn"))) {
        		this.gfnAlertMsg("msg", "CST_004", ["안전시설물설치"]);							//{0}은 필수입력항목입니다.
        		this.setStepIndex(0);
        		return false;
        	}

        	/*********************** 이동지역내 작업시 준수사항 start*************************************/


        	/*********************** 투입자재 및 공구류 start*************************************/
        	//투입자재 및 공구류반입여부
        	if(this.gfnIsNull(this.dsCstJobAprv.getColumn(0, "putMtrlToolKndCrynYn"))) {
        		this.gfnAlertMsg("msg", "CST_004", ["투입자재 및 공구류반입여부"]);				//{0}은 필수입력항목입니다.
        		this.setStepIndex(0);
        		return false;
        	}
        	//[이동지역]작업신청(위해물품반입)
        	if(this.gfnIsNull(this.dsCstJobAprv.getColumn(0, "dgadsCmdtyUseCmpanAgreYn"))) {
        		this.gfnAlertMsg("msg", "CST_004", ["[이동지역]작업신청(위해물품반입)"]);			//{0}은 필수입력항목입니다.
        		this.setStepIndex(0);
        		return false;
        	}
        	//반입초소
        	if(this.gfnIsNull(this.dsCstJobAprv.getColumn(0, "crynChckpntCd"))) {
        		this.gfnAlertMsg("msg", "CST_004", ["반입초소"]);								//{0}은 필수입력항목입니다.
        		this.setStepIndex(0);
        		return false;
        	}
        	//반입초소 상세
        	if(this.gfnIsNull(this.dsCstJobAprv.getColumn(0, "chcRsnUtztnPrnmntChckpntCn"))) {
        		this.gfnAlertMsg("msg", "CST_004", ["반입초소 상세"]);							//{0}은 필수입력항목입니다.
        		this.setStepIndex(0);
        		return false;
        	}
        	//전달사항
        	if(this.gfnIsNull(this.dsCnvyMttrCn.getColumn(0, "cnvyMttrCn"))) {
        		this.gfnAlertMsg("msg", "CST_004", ["전달사항"]);								//{0}은 필수입력항목입니다.
        		this.setStepIndex(0);
        		return false;
        	}
        };

        /**************************************************************************
         * @name : fnStepCtrl
         * @description : workflow 별 화면 제어
         ***************************************************************************/
        this.fnStepCtrl = function()
        {
        	var curTaskCd = this.dsMvmnRgnMst.getColumn(0, "taskCd");

        	this.fnSetButton();					//버튼설정

        	this.divForm04.form.fnSetComp();	//투입자재 및 공구류 화면셋팅


        	switch(curTaskCd) {

        		case "TAS00077":	//6111.신청서작성


        			break;
        		case "TAS00084":	//6112.신청서보완


        			break;
        		case "TAS00078":	//6113.신청서보완


        			break;
        		case "TAS00368":	//6114.용역담당부서확인/공사담당부서


        			break;
        		case "TAS00081":	//6115.보안경비팀접수대기/보안경비팀


        			break;
        		case "TAS00082":	//6116.보안경비팀확인/보안경비팀


        			break;
        		case "TAS00079":	//6117.이동지역접수대기/운항안전팀


        			break;
        		case "TAS00080":	//6118.이동지역확인/운항안전팀


        			break;
        		case "TAS10405":	//6119.신청서회수


        			break;
        		case "TAS10406":	//6120.재신청


        			break;
        		case "TAS00208":	//6151.승인문서출력


        			break;
        		case "TAS00300":	//6161.만족도조사


        			break;
        		case "TAS00210":	//종료


        			break;
        		default:
        	}
        };

        /**************************************************************************
         * @name : fnSetButton
         * @description : 버튼제어
         ***************************************************************************/
        this.fnSetButton = function()
        {
        	//공항공사 담당자(감독자) 유무
        	var vLbsvcPbcprtPicExnYn = this.dsMvmnRgnMst.getColumn(0, "lbsvcPbcprtPicExnYn");
        	if (vLbsvcPbcprtPicExnYn == "1") {

        		this.divForm01.form.div00_01_02.form.pan00_01_02.visible =  true;
        		this.divBtn.form.CTL00532.visible = true;		//신청-->6114.용역담당부서확인
        		this.divBtn.form.CTL00333.visible = false;		//신청-->6115.보안경비팀접수대기
        		this.divBtn.form.CTL00794.visible = false;		//신청-->6117.이동지역접수대기

        	} else {

        		this.divForm01.form.div00_01_02.form.pan00_01_02.visible =  false;
        		this.divBtn.form.CTL00532.visible = false;		//신청-->6114.용역담당부서확인

        		var vPutMtrlToolKndCrynYn = this.dsCstJobAprv.getColumn(0, "putMtrlToolKndCrynYn");		//투입자재 및 공구류 반입여부
        		if (vPutMtrlToolKndCrynYn == 1) {
        			this.divBtn.form.CTL00333.visible = true;	//신청-->6115.보안경비팀접수대기
        			this.divBtn.form.CTL00794.visible = false;	//신청-->6117.이동지역접수대기
        		} else {
        			this.divBtn.form.CTL00333.visible = false;	//신청-->6115.보안경비팀접수대기
        			this.divBtn.form.CTL00794.visible = true;	//신청-->6117.이동지역접수대기
        		}

        		this.divBtn.form.CTL00333.visible = false;		//신청-->6115.보안경비팀접수대기
        		this.divBtn.form.CTL00794.visible = false;		//신청-->6117.이동지역접수대기
        	}
        	this.divBtn.form.CTL01014.visible = false;			//신청취소
        	this.resetScroll();
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        /**************************************************************************
         * @name : Button_onclick
         * @description : Button Click Event
         ***************************************************************************/
        this.Button_onclick = function(obj,e)
        {
        	// WorkFlow 정보
        	var wfInfo = this.cfnGetWfInfo(obj.name);
        	this.dsMvmnRgnMst.setColumn(0, "taskCd"    , wfInfo.jobPrcsPrgrsSeCd        );  // 현재업무코드
        	this.dsMvmnRgnMst.setColumn(0, "nextTaskCd", wfInfo.nextStepJobPrcsPrgrsSeCd);  // 다음업무코드

        	var vBtnNm = wfInfo.prcsSeCdNm;
        	var vBtnId = wfInfo.prcsSeCd;
        	if("CTL00772:임시저장,CTL10915:임시저장,CTL01014:신청취소,CTL10917:신청취소,CTL00897:미처리종료,CTL00898:미처리종료,CTL10910:미처리종료,CTL00354:미처리종료,CTL00353:미처리종료".indexOf(wfInfo.prcsSeCd) == -1) {
        		if(!this.fnValiChk()){return;}
        	}
        	// {0}을(를) 하시겠습니까?
        	this.gfnConfirmMsg("save_confirm", "CST_001", function(sPopupId, sRtn) {
        		if(JSON.parse(sRtn).result == "Y") {
                    // 첨부파일 변경시 첨부파일부터 저장
        			if(this.gfnDsIsUpdated(this.dsAtfl)) {  // 첨부파일 변경시
        				// 첨부파일 저장
        				this.fnSaveFile();
        			} else {
        				// 저장
        				this.fnSave();
        			}
        		}
        	}, ["확인", "취소"], ["Y" , "N" ], "", [wfInfo.prcsSeCdNm]);

        };

        this.tabStep_onchanged = function(obj,e)
        {
        	this.setStepIndex(obj.tabindex);
        };

        this.CST013M00_onstepchanged = function(obj,e)
        {
        	this.divBtn.positionstep     = e.postindex;  // 버튼
        	this.tabStep.positionstep    = e.postindex;  // 스텝
        	this.tabStep.tabindex        = this.getStepIndex();
        };

        this.CST013M00_onkeydown = function(obj,e)
        {
        	if(e.shiftkey && e.altkey) {
        		if(e.keycode == 37) {
        			this.setStepIndex(this.getStepIndex() == 0 ? this.getStepCount() - 1 : this.getStepIndex() - 1);
        		} else if(e.keycode == 39) {
        			this.setStepIndex(this.getStepIndex() == this.getStepCount() - 1 ? 0 : this.getStepIndex() + 1);
        		}
        	}
        };

        this.CST013M00_onsize = function(obj,e)
        {
        	this.resetScroll();
        };

        /*******************************************************************************************************************************
         * 첨부파일 관련
        *******************************************************************************************************************************/
        /**************************************************************************
         * @name :
         * @description : 작업내역 탭 첨부파일
         ***************************************************************************/
        this.RaonkUpload_RAONKUPLOAD_CreationComplete = function(obj,  paramObj)
        {
        	// 업로드 솔루션이 초기 생성시 업로드 할 경로를 지정해야 한다.
        	// /CMM/YYYY/MM/DD/  <<== CMM은 업무별 폴더 지정이고 기본적으로 /년도/월/일 의 폴더 구조를 갖는다.
        	this.RaonkUpload.SetConfig('FolderNameRule', '/CST/AIS/YYYY/MM/DD/');

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

        		if (this.upatflinfo.colid == "A110" || this.upatflinfo.colid == "B110" || this.upatflinfo.colid == "C110"
        			|| this.upatflinfo.colid == "D110" ||this.upatflinfo.colid =="E110") {

        			// 첨부 파일 표출용 DS 설정
        			this.parent.dsFile.setColumn(0, this.upatflinfo.colid, oFile.userdata.strName + '(' + oFile.userdata.nSize + ')');  // 파일풀명
        		} else {
        			// 첨부 파일 표출용 DS 설정
        			var oRow = this.parent.dsCstJobAprv.findRow("colId", this.upatflinfo.colid);
        			this.parent.dsCstJobAprv.setColumn(oRow, "atflMngInfo", oFile.userdata.strName + '(' + oFile.userdata.nSize + ')');
        		}
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
        				if(cfnGetCustomValue(v.customValue) == RaonkUpload.upatflinfo.colid) {
        					RaonkUpload.SetSelectFile(i, '0');
        					RaonkUpload.DeleteSelectedFile();
        				}
        			});
        		}

        		// 첨부파일 삭제
        		this.parent.dsAtfl.deleteRow(this.parent.dsAtfl.findRow("colId", this.upatflinfo.colid));

        		if (this.upatflinfo.colid == "A110" || this.upatflinfo.colid == "B110" || this.upatflinfo.colid == "C110"
        			|| this.upatflinfo.colid == "D110" ||this.upatflinfo.colid =="E110") {

        			// 첨부 파일 표출용 DS 설정
        			this.parent.dsFile.setColumn(0, this.upatflinfo.colid, "");  // 파일풀명
        		} else {

        			var oRow = this.parent.dsCstJobAprv.findRow("colId", this.upatflinfo.colid);
        			this.parent.dsCstJobAprv.setColumn(oRow, "atflMngInfo", "");
        		}
        	};
        };

        this.RaonkUpload_RAONKUPLOAD_BeforeAddFile = function(obj, paramObj)
        {
        	return true;
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

        /**************************************************************************
         * @name : dsAtfl_onload
         * @description : 작업서 관련 첨부파일
         ***************************************************************************/
        this.dsAtfl_onload = function(obj,e)
        {
        	// 데이터 조회 후 첨부파일 파일리스트에 셋팅
        	this.gfnDownloadSetting(this.RaonkUpload, this.dsAtfl);
        	// 첨부 파일 표출용 DS 설정
        	for(var i = 0; i < this.dsAtfl.rowcount; i++) {
        		// 첨부 파일 표출용 DS 설정
        		var colId = this.dsAtfl.getColumn(i, "colId");
        		if (colId == "A110" || colId == "B110" || colId == "C110" || colId == "D110" || colId =="E110") {

        			this.dsFile.setColumn(0, colId , this.dsAtfl.getColumn(i, "orgnlFileNm") + '(' + this.dsAtfl.getColumn(i, "fileSz") + ')');  // 파일풀명
        		} else {

        			var oRow = this.dsCstJobAprv.findRow("colId", colId);
        			this.dsCstJobAprv.setColumn(oRow, "atflMngInfo", this.dsAtfl.getColumn(i, "orgnlFileNm") + '(' + this.dsAtfl.getColumn(i, "fileSz") + ')');	// 파일풀명
        		}
            };
        	this.resetScroll();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.CST013M00_onsize,this);
            this.addEventHandler("onstepchanged",this.CST013M00_onstepchanged,this);
            this.addEventHandler("onkeydown",this.CST013M00_onkeydown,this);
            this.tabStep.addEventHandler("onchanged",this.tabStep_onchanged,this);
            this.tabStep.addEventHandler("onkeydown",this.CST013M00_onkeydown,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddFile",this.RaonkUpload_RAONKUPLOAD_AfterAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_CreationComplete",this.RaonkUpload_RAONKUPLOAD_CreationComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_UploadComplete",this.RaonkUpload_RAONKUPLOAD_UploadComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_OnError",this.RaonkUpload_RAONKUPLOAD_OnError,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeAddFile",this.RaonkUpload_RAONKUPLOAD_BeforeAddFile,this);
            this.dsAtfl.addEventHandler("onload",this.dsAtfl_onload,this);
            this.dsCnvyMttrCn.addEventHandler("onload",this.dsCnvyMttrCn_onload,this);
        };
        this.loadIncludeScript("CST013M00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
