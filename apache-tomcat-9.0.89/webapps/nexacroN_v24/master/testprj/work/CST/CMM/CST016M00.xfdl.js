(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST016M00");
            this.set_titletext("신청자정보(전산실작업)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cbo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"hh\" type=\"STRING\" size=\"256\"/><Column id=\"mm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"hh\">선택</Col><Col id=\"code\">0</Col><Col id=\"mm\">선택</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"hh\">01</Col><Col id=\"mm\">5</Col></Row><Row><Col id=\"hh\">02</Col><Col id=\"code\">2</Col><Col id=\"mm\">10</Col></Row><Row><Col id=\"hh\">03</Col><Col id=\"code\">3</Col><Col id=\"mm\">15</Col></Row><Row><Col id=\"hh\">04</Col><Col id=\"code\">4</Col><Col id=\"mm\">20</Col></Row><Row><Col id=\"hh\">05</Col><Col id=\"code\">5</Col><Col id=\"mm\">25</Col></Row><Row><Col id=\"hh\">06</Col><Col id=\"code\">6</Col><Col id=\"mm\">30</Col></Row><Row><Col id=\"hh\">07</Col><Col id=\"code\">7</Col><Col id=\"mm\">35</Col></Row><Row><Col id=\"hh\">08</Col><Col id=\"code\">8</Col><Col id=\"mm\">40</Col></Row><Row><Col id=\"hh\">09</Col><Col id=\"code\">9</Col><Col id=\"mm\">45</Col></Row><Row><Col id=\"hh\">10</Col><Col id=\"code\">10</Col><Col id=\"mm\">50</Col></Row><Row><Col id=\"hh\">11</Col><Col id=\"code\">11</Col><Col id=\"mm\">60</Col></Row><Row><Col id=\"hh\">12</Col><Col id=\"code\">12</Col></Row><Row><Col id=\"hh\">13</Col><Col id=\"code\">13</Col></Row><Row><Col id=\"hh\">14</Col><Col id=\"code\">14</Col></Row><Row><Col id=\"code\">15</Col><Col id=\"hh\">15</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCmproMst", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"jobApvsrId\" type=\"STRING\" size=\"256\"/><Column id=\"jobApvsrNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobApvsrCoNm\" type=\"STRING\" size=\"256\"/><Column id=\"rprsOprtrNm\" type=\"STRING\" size=\"256\"/><Column id=\"rprsOprtrInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"rprsOprtrCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"cmproJobNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobBssCn\" type=\"STRING\" size=\"256\"/><Column id=\"jobSmryCn\" type=\"STRING\" size=\"256\"/><Column id=\"jobBgngDt\" type=\"STRING\" size=\"256\"/><Column id=\"jobEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"jobBgngDt1\" type=\"STRING\" size=\"256\"/><Column id=\"jobEndDt1\" type=\"STRING\" size=\"256\"/><Column id=\"jobBgngHr\" type=\"STRING\" size=\"256\"/><Column id=\"jobEndHr\" type=\"STRING\" size=\"256\"/><Column id=\"nghtJobYn\" type=\"STRING\" size=\"256\"/><Column id=\"jobApvsrEtrntYn\" type=\"STRING\" size=\"256\"/><Column id=\"jobPrpsNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobPrpsEtcCn\" type=\"STRING\" size=\"256\"/><Column id=\"jobTnope\" type=\"STRING\" size=\"256\"/><Column id=\"trgtSysInflncExnCd\" type=\"STRING\" size=\"256\"/><Column id=\"trgtSysInflncCn\" type=\"STRING\" size=\"256\"/><Column id=\"otherSysInflncExnCd\" type=\"STRING\" size=\"256\"/><Column id=\"otherSysInflncCn\" type=\"STRING\" size=\"256\"/><Column id=\"otherDeptJobAvtsmtIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"crynItemCn\" type=\"STRING\" size=\"256\"/><Column id=\"shpgotItemCn\" type=\"STRING\" size=\"256\"/><Column id=\"infoPrtcWtohPrvcWtcsPath\" type=\"STRING\" size=\"256\"/><Column id=\"edpEqpmntCrynShpgotAplcfmPath\" type=\"STRING\" size=\"256\"/><Column id=\"spfaWritgPath\" type=\"STRING\" size=\"256\"/><Column id=\"dtlJobStmtPath\" type=\"STRING\" size=\"256\"/><Column id=\"sysInstlWtplPath\" type=\"STRING\" size=\"256\"/><Column id=\"jobWtntPath\" type=\"STRING\" size=\"256\"/><Column id=\"cnvyMttrCn\" type=\"STRING\" size=\"256\"/><Column id=\"rvwRsltCn\" type=\"STRING\" size=\"256\"/><Column id=\"mngrRvwRsltCn\" type=\"STRING\" size=\"256\"/><Column id=\"trgtSysCn\" type=\"STRING\" size=\"256\"/><Column id=\"dageJobYn\" type=\"STRING\" size=\"256\"/><Column id=\"jobBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"jobEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"dladtYn\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCmproDtl", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"oprtrCoNm\" type=\"STRING\" size=\"256\"/><Column id=\"oprtrNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobYmd\" type=\"STRING\" size=\"256\"/><Column id=\"jobBgngHr\" type=\"STRING\" size=\"256\"/><Column id=\"jobEndHr\" type=\"STRING\" size=\"256\"/><Column id=\"otlnCn\" type=\"STRING\" size=\"256\"/><Column id=\"jobCn\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"mdfcnDt\" type=\"STRING\" size=\"256\"/><Column id=\"mdfrId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWorkFlow", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCprEqp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCprBld", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFcltOperMst", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"taskCd\" type=\"STRING\" size=\"256\"/><Column id=\"nextTaskCd\" type=\"STRING\" size=\"256\"/><Column id=\"pstnSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyDt\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"endCd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstnInfoRnb\" type=\"STRING\" size=\"256\"/><Column id=\"clmZip\" type=\"STRING\" size=\"256\"/><Column id=\"clmAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmDtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmWholAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmCustCd\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"rcptDt\" type=\"STRING\" size=\"256\"/><Column id=\"clrId\" type=\"STRING\" size=\"256\"/><Column id=\"dptyRegYn\" type=\"STRING\" size=\"256\"/><Column id=\"dmndDt\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptAplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptCtrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptPstnInfoCn\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtHwrtInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntHwrtInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtMvmnRgnPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"docCd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtChcYn\" type=\"STRING\" size=\"256\"/><Column id=\"wholJobBgngDt\" type=\"STRING\" size=\"256\"/><Column id=\"wholJobEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobNm\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobRsnCn\" type=\"STRING\" size=\"256\"/><Column id=\"bldgSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoCtrtrNm\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoPicCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobFldCd\" type=\"STRING\" size=\"256\"/><Column id=\"arptCstrnPicId\" type=\"STRING\" size=\"256\"/><Column id=\"lbsvcPbcprtPicId\" type=\"STRING\" size=\"256\"/><Column id=\"basctAplcfmInfoId\" type=\"STRING\" size=\"256\"/><Column id=\"lbsvcTaskAgtRlvtYn\" type=\"STRING\" size=\"256\"/><Column id=\"lbsvcTaskMdtrId\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptRnb\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclFstVl\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclFstCn\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclSecdVl\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclSecdCn\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclThrVl\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclThrCn\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnRspnsYn\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/><Column id=\"isEdtrPsblty\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPrvcClctAgreMst", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"ConstColumn0\" type=\"STRING\" size=\"30\"/><Column id=\"utztnAgreRgtr\" type=\"STRING\" size=\"256\"/><Column id=\"brdt\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"agreBgngDt\" type=\"STRING\" size=\"256\"/><Column id=\"agreEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"vwsBgngDt\" type=\"STRING\" size=\"256\"/><Column id=\"vwsEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngInfo\" type=\"STRING\" size=\"256\"/><Column id=\"regYmd\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPrvcClctAgreRslt", this);
            obj._setContents("<ColumnInfo><Column id=\"utztnAgreRgtr\" type=\"STRING\" size=\"256\"/><Column id=\"brdt\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"agreBgngDt\" type=\"STRING\" size=\"256\"/><Column id=\"agreEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"vwsBgngDt\" type=\"STRING\" size=\"256\"/><Column id=\"vwsEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"regYmd\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPrvcClctAgreInq", this);
            obj._setContents("<ColumnInfo><Column id=\"utztnAgreRgtr\" type=\"STRING\" size=\"256\"/><Column id=\"brdt\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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


            obj = new Dataset("dsAtflDn", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bsnsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtn\" type=\"STRING\" size=\"256\"/><Column id=\"strgFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTerm\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCmproIncmgOprtrNmMst", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"utztnAgreRgtr\" type=\"STRING\" size=\"256\"/><Column id=\"brdt\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"agreBgngDt\" type=\"STRING\" size=\"256\"/><Column id=\"agreEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"vwsBgngDt\" type=\"STRING\" size=\"256\"/><Column id=\"vwsEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"regYmd\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"isFileAtch\" type=\"INT\" size=\"256\"/><Column id=\"atflMngInfo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCnvyMttrCn", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"seqNo\" type=\"STRING\" size=\"256\"/><Column id=\"cnvyMttrCn\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtflArtclList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tabStep","0","60",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tabStep);
            obj.set_text("신청자정보");
            obj.set_formscrollbartype("default autoindicator");
            this.tabStep.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tabStep);
            obj.set_text("작업개요");
            obj.set_formscrollbartype("default autoindicator");
            this.tabStep.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.tabStep);
            obj.set_text("개인정보동의");
            obj.set_formscrollbartype("default autoindicator");
            this.tabStep.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.tabStep);
            obj.set_text("작업내용");
            obj.set_formscrollbartype("default autoindicator");
            this.tabStep.addChild(obj.name, obj);

            obj = new Div("divBtn","0",null,null,"60","60","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_CkBg");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","110",null,null,"60","70",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_url("work::CST/CMM/CST016M01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","0","110",null,null,"60","70",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div01");
            obj.set_positionstep("1");
            obj.set_url("work::CST/CMM/CST016M02.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","0","110",null,null,"60","70",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div02");
            obj.set_positionstep("2");
            obj.set_url("work::CST/CMM/CST016M03.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","0","110",null,null,"60","70",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div03");
            obj.set_positionstep("3");
            obj.set_url("work::CST/CMM/CST016M04.xfdl");
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
            // Layout Functions
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
            //-- Default Layout : this.Div00
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div02
            obj = new Layout("default","",0,0,this.Div02.form,function(p){});
            this.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div03
            obj = new Layout("default","",0,0,this.Div03.form,function(p){});
            this.Div03.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("신청자정보(전산실작업)");

                p.tabStep.set_taborder("0");
                p.tabStep.set_tabindex("0");
                p.tabStep.move("0","60",null,"50","60",null);

                p.tabStep.Tabpage1.set_text("신청자정보");
                p.tabStep.Tabpage1.set_formscrollbartype("default autoindicator");

                p.tabStep.Tabpage2.set_text("작업개요");
                p.tabStep.Tabpage2.set_formscrollbartype("default autoindicator");

                p.tabStep.Tabpage3.set_text("개인정보동의");
                p.tabStep.Tabpage3.set_formscrollbartype("default autoindicator");

                p.tabStep.Tabpage4.set_text("작업내용");
                p.tabStep.Tabpage4.set_formscrollbartype("default autoindicator");

                p.divBtn.set_taborder("1");
                p.divBtn.set_cssclass("div_WF_CkBg");
                p.divBtn.move("0",null,null,"60","60","0");

                p.Div00.set_taborder("2");
                p.Div00.set_text("Div00");
                p.Div00.set_url("work::CST/CMM/CST016M01.xfdl");
                p.Div00.move("0","110",null,null,"60","70");

                p.divTitle.set_taborder("3");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);

                p.Div01.set_taborder("4");
                p.Div01.set_text("Div01");
                p.Div01.set_positionstep("1");
                p.Div01.set_url("work::CST/CMM/CST016M02.xfdl");
                p.Div01.move("0","110",null,null,"60","70");

                p.Div02.set_taborder("5");
                p.Div02.set_text("Div02");
                p.Div02.set_positionstep("2");
                p.Div02.set_url("work::CST/CMM/CST016M03.xfdl");
                p.Div02.move("0","110",null,null,"60","70");

                p.Div03.set_taborder("6");
                p.Div03.set_text("Div03");
                p.Div03.set_positionstep("3");
                p.Div03.set_url("work::CST/CMM/CST016M04.xfdl");
                p.Div03.move("0","110",null,null,"60","70");

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
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("4");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divTitle.move("0","0",null,"50","0",null);

                p.tabStep.move("20","60",null,"50","20",null);

                p.divBtn.move("0",null,null,"60","0","0");

                p.Div00.move("0","120",null,null,"0","70");

                p.Div01.move("0","120",null,null,"0","70");

                p.Div02.move("0","120",null,null,"0","70");

                p.Div03.move("0","120",null,null,"0","70");
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            obj.set_stepcount("4");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divBtn","text","dsFcltOperMst","aplcntHwrtInptYn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","work::CST/CMM/CST016M01.xfdl");
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
            this._addPreloadList("fdl","work::CST/CMM/CST016M02.xfdl");
            this._addPreloadList("fdl","work::CST/CMM/CST016M03.xfdl");
            this._addPreloadList("fdl","work::CST/CMM/CST016M04.xfdl");
        };
        
        // User Script
        this.addIncludeScript("CST016M00.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CST016M00.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	CST009M00.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/09/11
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/09/11			Ajh							최초생성
        *******************************************************************************
        */
        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;  // 업무공통
        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.validateColumn = [];
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
            // 팝업으로 실행시의 처리
         	if(this.getOwnerFrame().name == "popupCmproIncmgJobWtnt") {
          	    this.divTitle.destroy();  								// 프로그램 타이틀 제거
          	    this.tabStep.top 	= 10;    							// tap 위치 조정
         		this.Div00.top 		= parseInt(this.tabStep.top)
        							+ parseInt(this.tabStep.height)
        							+ 10;    							// 신청자 정보 div 위치 조정
                this.resetScroll();
         	}

        	this.gfnFormOnload(obj); 									//필수함수
        	this.stepitemsize 		= 0;   								// 스텝이미지사이즈
        	var pvJobCd 			= this.getOwnerFrame().jobCd;		//taskCd
        	this.pvView 			= this.getOwnerFrame().view;		//view mode

        	if (this.gfnIsNull(pvJobCd)){pvJobCd = "TAS10459"} else {pvJobCd};

        	this.cfnBtnCrt({ crtTrgt:this.divBtn, lnkgEvnt:this.Button_onclick, inqCnd : { jobPrcsPrgrsSeCd:pvJobCd} });

        	//공통코드 함수 호출
        	this.cfnComCdLoad({ id:"commonCodeSearch", cbf:"fnCallBack", dsCprEqp:"CPREQP:A" });		//전산장비 반출입 코드(반입,반출,해당없음)
        	this.cfnComCdLoad({ id:"commonCodeSearch", cbf:"fnCallBack", dsCprBld:"CPRBLD:A" });		//작업장위치코드(ICT샌터,AICC,기타)

        	//필수항목 체크
        	//this.validateColumn.push({"title" : "연락처", "com": this.divForm.form.Div00.form.edtUserTelno});
        	this.fnInit();	//초기화
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //검색 조회
        this.cfnSearch = function (page)
        {
        	//그리드 한 페이지에 게시되는 데이터건수
        	/*
        	var recordCountPerPage = this.divGrd.form.grdListCnt.value;
        	this.dsSearch.setColumn(0, "currentPageNo", page);
        	this.dsSearch.setColumn(0, "recordCountPerPage", recordCountPerPage);
        	this.dsList.clear();
        	this.getSearchTransaction();
        	*/
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
        	this.cfnEtcCdLoad({ id:this.dsAtflArtclList.name, cbf:"fnCallback", dsAtflArtclList:"{id:'selectTaskComListCd', cnd:{cdTyId:'ATFL_SE', note:'CST016M00'}}"});  // 첨부파일구분

        	this.cfnGetAplySeNm({ id:"getAplySeNm", cbf:"fnCallback", aplySeCd:"TSPCMM008" });

        	this.gvUserId 	= this.objApp.gdsUser.getColumn(0, "userId");
        	this.gvUserNm 	= this.objApp.gdsUser.getColumn(0, "userNm");
        	this.gvCoId   	= this.objApp.gdsUser.getColumn(0, "coId");
        	this.gvCoNm   	= this.objApp.gdsUser.getColumn(0, "coNm");
        	this.gvTelNo  	= this.objApp.gdsUser.getColumn(0, "userMblTelno");

        	// 파라미터 확인
        	var pvAplyNo 	= this.getOwnerFrame().pvAplyNo;   // 신청번호

        	if (this.gfnIsNull(pvAplyNo) ) {

        		this.dsFcltOperMst.addRow();													//메인정보
        		this.dsFcltOperMst.setColumn(0, "aplySeCd"    		, "TSPCMM008");				//신청구분/범주(cmm_cat_cd)
        		this.dsFcltOperMst.setColumn(0, "taskCd"      		, "TAS10459");				//업무코드 taskCd
        		this.dsFcltOperMst.setColumn(0, "nextTaskCd"  		, "TAS10459");				//업무코드 nextTask

        		this.dsFcltOperMst.setColumn(0, "aplcntId"    		, this.gvUserId);			//신청자ID
        		this.dsFcltOperMst.setColumn(0, "aplcntNm"    		, this.gvUserNm);			//신청자명
        		this.dsFcltOperMst.setColumn(0, "aplcntInstCd"		, this.gvCoId);				//신청자기관코드
        		this.dsFcltOperMst.setColumn(0, "aplcntInstNm"		, this.gvCoNm);				//신청자기관코드명
        		this.dsFcltOperMst.setColumn(0, "aplcntDeptCd"		, this.gvCoId);				//신청자부서코드
        		this.dsFcltOperMst.setColumn(0, "mblTelno"    		, this.gvTelNo);			//휴대전화번호
        		this.dsFcltOperMst.setColumn(0, "aplcntHwrtInptYn"	, 1);						//신청자,감독자 동일여부

        		this.dsCmproMst.addRow();														//전산실출입작업신청 마스터
        		//신청자전달사항
        		this.Div03.form.Panel01_01.visible 	= false;
        		this.Div03.form.div03.visible 		= false;
        		//작업감독자검토의견
        		this.Div03.form.Panel06_01.visible 	= false;
        		this.Div03.form.div04.visible 		= false;
        		//운영자회사담당자검토의견
        		this.Div03.form.Panel07_01.visible 	= false;
        		this.Div03.form.div05.visible 		= false;
        		//전산실감독자검토의견
        		this.Div03.form.Panel08_01.visible 	= false;
        		this.Div03.form.div06.visible 		= false;
        		//전달사항
        		this.Div03.form.Panel09_01.visible 	= true;
        		this.Div03.form.div07.visible 		= true;

        		this.resetScroll();

        		this.fnStepCtrl();

        	} else {

        		this.Div00.top 	= parseInt(this.tabStep.top)
        						+ parseInt(this.tabStep.height)
        						+ 10;    							// 신청자정보 div 위치 조정
        		this.Div01.top	= parseInt(this.tabStep.top)
        						+ parseInt(this.tabStep.height)
        						+ 10;    							// 작업개요 div 위치 조정
        		this.Div02.top	= parseInt(this.tabStep.top)
        						+ parseInt(this.tabStep.height)
        						+ 10;    							// 개인정보수집동의 div 위치 조정
        		this.Div03.top	= parseInt(this.tabStep.top)
        						+ parseInt(this.tabStep.height)
        						+ 10;    							// 작업내용 div 위치 조정
        		this.resetScroll();

        		this.dsSearch.setColumn(0, "aplyNo", pvAplyNo);
        		this.fnSearch();									// 조회
        	}
        };

        /**************************************************************************
         * @name : fnSearch
         * @description : 조회
         ***************************************************************************/
        this.fnSearch = function()
        {
        	var strSvcId    = "search";
        	var strSvcUrl   = "cmm/selectCmproAplcfmTmprInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsFcltOperMst=dsFcltOperMst"
        					+ " dsCmproMst=dsCmproMst"
        					+ " dsCmproDtl=dsCmproDtl"
        					+ " dsCmproIncmgOprtrNmMst=dsCmproIncmgOprtrNmMst"
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
        this.fnSave = function(strSvcId, strSvcUrl)
        {
        	//작업장위치
        	var arrPstnSeCd = new Array();
        	if (this.Div01.form.div00.form.chkCPRBLD101.isChecked() ) {
        		arrPstnSeCd.push("CPRBLD101");
        	}
        	if (this.Div01.form.div00.form.chkCPRBLD102.isChecked() ) {
        		arrPstnSeCd.push("CPRBLD102");
        	}
        	if (this.Div01.form.div00.form.chkCPRBLD201.isChecked() ) {
        		arrPstnSeCd.push("CPRBLD201");
        	}
        	if (this.Div01.form.div00.form.chkCPRBLD301.isChecked() ) {
        		arrPstnSeCd.push("CPRBLD301");
        	}
        	this.dsFcltOperMst.setColumn(0, "pstnSeCd", arrPstnSeCd);				//작업장위치 설정

        	var strSvcId    = strSvcId;
        	var strSvcUrl   = strSvcUrl;
        	var inData      = "dsWfInfo=" + this.FV_DS_OTPT_WORK_FLOW_INFO + ":U"	//WorkFlow 정보
        					+ " dsFcltOperMst=dsFcltOperMst:A"						//시설운영마스터
        					+ " dsCmproMst=dsCmproMst:A"							//전산실출입작업마스터
        					+ " dsCmproDtl=dsCmproDtl:A"							//전산실출입작업 내역상세
        					+ " dsCmproIncmgOprtrNmMst=dsCmproIncmgOprtrNmMst:A"	//전산실출입작업자관리
        					+ " dsCnvyMttrCn=dsCnvyMttrCn:A"						//전달의견
        					+ " dsAtfl=dsAtfl:U";									//첨부파일DS
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
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
         * @name : fnSearChPrvcClctAgre
         * @description : 개인정보 서약서 첨부파일 검색
         ***************************************************************************/
        this.fnSearchPrvcClctAgre = function()
        {
        	var strSvcId    = "searchPrvcClctAgre";
        	var strSvcUrl   = "cmm/selectPrvcClctAgreInq.do";
        	var inData      = "dsPrvcClctAgreInq=dsPrvcClctAgreInq";
        	var outData     = "dsPrvcClctAgreRslt=dsPrvcClctAgreRslt";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0) {
        		return;
        	}
        	switch(svcID) {

        		case "search": //조회

        			var vJobCd = this.dsFcltOperMst.getColumn(0, "taskCd");
        			/*
        			if(vArptPbcprtPicChcYn == 0) {
        				this.divFrom01.form.div00.form.pan06_00.visible = true;
        				for(i=0; i < this.dsWfEmps.rowcount; i++) {
        					this.divFrom01.form.div00.form.divEdtPop01.form.mtiArptPicId.setSelect(i,true);
        				}
        			}
        			*/
        			//작업장위치 셋팅
        			var vPstnSeCd = this.dsFcltOperMst.getColumn(0, "pstnSeCd");
        			if(!this.gfnIsNull(vPstnSeCd) ) {
        				var arrPstnSeCd = vPstnSeCd.split(",");
        				for(var i = 0; i < arrPstnSeCd.length; i++) {
        					var chkObj = "chk"+arrPstnSeCd[i];
        					this.Div01.form.div00.form.lookup(chkObj).value = true;
        				}
        			}

        			//작업시작시간
        			var vJobBgngHr= this.dsCmproMst.getColumn(0, "jobBgngHr");
        			if(!this.gfnIsNull(vPstnSeCd) && vJobBgngHr.length == 4) {
        				this.Div01.form.div00.form.cmbJobBgngDt1.value = vJobBgngHr.substr(0,2);
        				this.Div01.form.div00.form.cmbJobBgngDt2.value = vJobBgngHr.substr(2,2);
        			}
        			//작업종료시간
        			var vJobEndHr= this.dsCmproMst.getColumn(0, "jobEndHr");
        			if(!this.gfnIsNull(vPstnSeCd) && vJobEndHr.length == 4) {
        				this.Div01.form.div00.form.cmbJobEndDt1.value = vJobEndHr.substr(0,2);
        				this.Div01.form.div00.form.cmbJobEndDt2.value = vJobEndHr.substr(2,2);
        			}

        			//신청, 임시저장
        			/*
        			if(vJobCd != "TAS10459" && vJobCd != "TAS10460" && vJobCd != "TAS10461" ) {
        				//this.fnFormEnable();
        			}
        			*/

        			this.cfnGetAplySeNm({ id:"getAplySeNm", cbf:"fnCallback", aplySeCd:"TSPCMM008" });

        			this.fnStepCtrl();

        			break;

        		case this.RaonkUpload.RAONKUPLOAD_UploadComplete.name :

        			// 파일 업로드 결과를 첨부파일 데이터셋에 설정
        			for(var i = 0; i < this.dsAtchRslt.rowcount; i++) {
        			    // 첨부파일관리번호
        				this.dsAtfl.setColumn(this.dsAtfl.findRow("colId", this.dsAtchRslt.getColumn(i, "colId")), "atflMngNo", this.dsAtchRslt.getColumn(i, "atflMngNo"));
        			}

        			//정보저장
        			var vStrSvcId  = "saveCmproJobSpvsrAply";
        			var vStrSvcUrl = "cmm/saveCmproJobSpvsrAply.do";
        			this.fnSave(vStrSvcId, vStrSvcUrl);

        			break;

        		case this.dsAtflArtclList.name : // 첨부파일항목목록조회
        			this.dsFile.clear();
        			for(var i = 0; i < this.dsAtflArtclList.rowcount; i++) {
        				this.dsFile.addColumn(this.dsAtflArtclList.getColumn(i, "cdId"), "STRING");
        			}
        			this.dsFile.addRow();

        			break;

        		case "getAplySeNm" :  						// 공통코드(신청구분)

        			this.dsSearch.setColumn(0, "aplySeCd", "TSPCMM008");
        			this.dsSearch.setColumn(0, "aplySeNm", this.cfnGvbkAplySeNm());
        			this.Div00.form.div00.form.edtAplySeCdNm.set_value(this.dsSearch.getColumn(0, "aplySeNm"));

        			//버튼숨김
        			if (this.divBtn.form.isValidObject("CTL11103") && this.divBtn.form.isValidObject("CTL11105")) {
        				this.divBtn.form.CTL11103.visible = false;
        				this.divBtn.form.CTL11105.visible = false;
        			}

        			this.fnChgBtn();

        			break;

        		case "cmproAplcfmTmprStrg" :				//임시저장

        			this.gfnAlertMsg("save", "CST_003");	//정상적으로 처리되었습니다.
        			this.gfnCloseMenu("MNG_0000000226");	//전산출입작업 신청화면
        			this.gfnCloseMenu("MNG_0000000307");	//전산서비스처리 목록
        			this.fnMovePage('MNG_0000000226', 'MNG_0000000307', 'work::CST/CMM/CST016M02.xfdl');
        			if(this.pvView == "popup")this.close("reflash");

        			break;

        		case "cmproJobSpvsrAply" :					//신청

        			this.gfnAlertMsg("save", "CST_003");	//정상적으로 처리되었습니다.
        			this.gfnCloseMenu("MNG_0000000226");	//전산출입작업 신청화면
        			this.gfnCloseMenu("MNG_0000000307");	//전산서비스처리 목록
        			this.fnMovePage('MNG_0000000226', 'MNG_0000000307', 'work::CST/CMM/CST016M02.xfdl');
        			if(this.pvView == "popup")this.close("reflash");

        			break;

        		case "cmproAplcfmAplyRtrcn" :				//신청취소

        			this.gfnAlertMsg("save", "CST_003");	//정상적으로 처리되었습니다.
        			this.gfnCloseMenu("MNG_0000000307");	//전산서비스처리 목록
        			this.fnMovePage('MNG_0000000226', 'MNG_0000000307', 'work::CST/CMM/CST016M02.xfdl');
        			if(this.pvView == "popup")this.close("reflash");

        			break;

        		case "searchPrvcClctAgre" :					//서약서 기등록자 검색

        			if(this.dsPrvcClctAgreRslt.getRowCount() > 0) {

        				var utztnAgreRgtr = this.dsPrvcClctAgreRslt.getColumn(0, "utztnAgreRgtr");
        				var brdt          = this.dsPrvcClctAgreRslt.getColumn(0, "brdt");
        				var mblTelno      = this.dsPrvcClctAgreRslt.getColumn(0, "mblTelno");
        				var regYm         = this.dsPrvcClctAgreRslt.getColumn(0, "regYmd");
        				//대상자 찾기
        				var oRow = this.dsCmproIncmgOprtrNmMst.findRowExpr("utztnAgreRgtr == '"+utztnAgreRgtr+"' && brdt == '"+brdt+"' && mblTelno == '"+mblTelno+"'");
        				if(oRow > -1) {
        					//기등록된 서약서 파일정보 설정
        					this.dsCmproIncmgOprtrNmMst.setColumn(oRow, "agreBgngDt" , this.dsPrvcClctAgreRslt.getColumn(0, "agreBgngDt"));
        					this.dsCmproIncmgOprtrNmMst.setColumn(oRow, "agreEndDt"  , this.dsPrvcClctAgreRslt.getColumn(0, "agreEndDt"));
        					this.dsCmproIncmgOprtrNmMst.setColumn(oRow, "vwsBgngDt"  , this.dsPrvcClctAgreRslt.getColumn(0, "vwsBgngDt"));
        					this.dsCmproIncmgOprtrNmMst.setColumn(oRow, "vwsEndDt"   , this.dsPrvcClctAgreRslt.getColumn(0, "vwsEndDt"));
        					this.dsCmproIncmgOprtrNmMst.setColumn(oRow, "atflMngNo"  , this.dsPrvcClctAgreRslt.getColumn(0, "atflMngNo"));
        					this.dsCmproIncmgOprtrNmMst.setColumn(oRow, "atflMngInfo", this.dsPrvcClctAgreRslt.getColumn(0, "atflMngInfo"));
        				} else	{
        					alert("입력항목 확인");
        					return;
        				}
        			} else {
        				//첨부파일 등록필요
        				//this.gfnAlertMsg("msg", "CST_004", ["첨부파일"]);		//{0}은 필수입력항목입니다.
        				return;
        			}

        			break;

        		default :
        			break;
        	}
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
        	/*********************** 신청자 정보 start*************************************/
        	//신청서비스구분 필수항목
        	var vAplySeCd = this.dsFcltOperMst.getColumn(0, "aplySeCd");					//신청서비스구분
        	if(this.gfnIsNull(vAplySeCd)) {
        		this.gfnAlertMsg("msg", "CST_004", ["신청서비스구분"]);							//{0}은 필수입력항목입니다.
        		this.setStepIndex(0);
        		return false;
        	}

        	//신청자/감독자동일여부 필수항목
        	var vAplcntHwrtInptYn = this.dsFcltOperMst.getColumn(0, "aplcntHwrtInptYn");	//신청자/감독자 동일여부
        	if(this.gfnIsNull(vAplcntHwrtInptYn)) {
        		this.gfnAlertMsg("msg", "CST_004", ["신청자/감독자 동일여부"]);					//{0}은 필수입력항목입니다.
        		this.setStepIndex(0);
        		return false;
        	}

        	//신청자Id,신청자성명 필수항목
        	var vRgtrId = this.dsFcltOperMst.getColumn(0, "aplcntId");						//신청자Id
        	var vRgtrIdNm = this.dsFcltOperMst.getColumn(0, "aplcntNm");					//신청자명
        	if(this.gfnIsNull(vRgtrId) || this.gfnIsNull(vRgtrIdNm)) {
        		this.gfnAlertMsg("msg", "CST_004", ["신청자/신청자명"]);						//{0}은 필수입력항목입니다.
        		this.setStepIndex(0);
        		return false;
        	}

        	//작업감독자 필수항목
        	var vJobApvsrId = this.dsCmproMst.getColumn(0, "jobApvsrId");
        	var vJobApvsrNm = this.dsCmproMst.getColumn(0, "jobApvsrNm");
        	if(this.gfnIsNull(vJobApvsrNm) || this.gfnIsNull(vJobApvsrNm)) {
        		this.gfnAlertMsg("msg", "CST_004", ["작업감독자/작업감독자명"]);					//{0}은 필수입력항목입니다.
        		this.setStepIndex(0);
        		return false;
        	}

        	//신청자 연락처 검증
        	var vTelNo = this.dsFcltOperMst.getColumn(0, "mblTelno");
        	if(this.gfnIsNull(vTelNo)) {
        		this.gfnAlertMsg("msg", "CST_004", ["신청자 연락처:"]);							//{0}은 필수입력항목입니다.
        		return false;
        	} else {
        		/*
        		if(nexacro.replaceAll(vTelNo, "-", "").length < 9) {
        			this.gfnAlertMsg("msg", "MSG_019", ["유효하지 않습니다[신청자 연락처]:"+vTelNo]);		//{0}
        			//return false;
        		}
        		*/
        	}
        	/*********************** 신청자 정보 end*************************************/
        	//trace("신청자 정보 end");
        	/*********************** 작업개요 start*************************************/
        	var vCmproJobNm = this.dsCmproMst.getColumn(0, "cmproJobNm");					//전산실 작업명
        	if(this.gfnIsNull(vCmproJobNm)) {
        		this.gfnAlertMsg("msg", "CST_004", ["전산실 작업명"]);							//{0}은 필수입력항목입니다.
        		this.setStepIndex(1);
        		return false;
        	}

        	var vJobBssCn = this.dsCmproMst.getColumn(0, "jobBssCn");						//작업근거
        	if(this.gfnIsNull(vCmproJobNm)) {
        		this.gfnAlertMsg("msg", "CST_004", ["작업근거"]);								//{0}은 필수입력항목입니다.
        		this.setStepIndex(1);
        		return false;
        	}

        	var varJobSmryCn = this.dsCmproMst.getColumn(0, "jobSmryCn");	//작업내용 요약
        	if(this.gfnIsNull(vCmproJobNm)) {
        		this.gfnAlertMsg("msg", "CST_004", ["작업내용 요약"]);		//{0}은 필수입력항목입니다.
        		this.setStepIndex(1);
        		return false;
        	}

        	var vTrgtSysCn = this.dsCmproMst.getColumn(0, "trgtSysCn");	//대상시스템
        	if(this.gfnIsNull(vCmproJobNm)) {
        		this.gfnAlertMsg("msg", "CST_004", ["대상시스템"]);		//{0}은 필수입력항목입니다.
        		this.setStepIndex(1);
        		return false;
        	}

        	var vPstnSeCd = this.dsFcltOperMst.getColumn(0, "pstnSeCd");	//작업장위치(위치구분코드)
        	if(this.gfnIsNull(vPstnSeCd)) {
        		this.gfnAlertMsg("msg", "CST_004", ["작업장위치"]);		//{0}은 필수입력항목입니다.
        		return false;
        	}

        	var vJobApvsrEtrntYn = this.dsCmproMst.getColumn(0, "jobApvsrEtrntYn");	//작업감독자 입회여부
        	if(this.gfnIsNull(vCmproJobNm)) {
        		this.gfnAlertMsg("msg", "CST_004", ["작업감독자 입회여부"]);		//{0}은 필수입력항목입니다.
        		this.setStepIndex(1);
        		return false;
        	}

        	var vJobPrpsNm = this.dsCmproMst.getColumn(0, "jobPrpsNm");	//작업목적
        	if(this.gfnIsNull(vCmproJobNm)) {
        		this.gfnAlertMsg("msg", "CST_004", ["작업목적"]);		//{0}은 필수입력항목입니다.
        		this.setStepIndex(1);
        		return false;
        	}

        	var vJobPrpsEtcCn = this.dsCmproMst.getColumn(0, "jobPrpsEtcCn");	//작업목적 기타내용
        	if(this.gfnIsNull(vCmproJobNm)) {
        		this.gfnAlertMsg("msg", "CST_004", ["작업목적 기타내용"]);		//{0}은 필수입력항목입니다.
        		this.setStepIndex(1);
        		return false;
        	}

        	var vDladtYn= this.dsCmproMst.getColumn(0, "dladtYn");	//일상점검 여부
        	if(this.gfnIsNull(vCmproJobNm)) {
        		this.gfnAlertMsg("msg", "CST_004", ["일상점검 여부"]);		//{0}은 필수입력항목입니다.
        		this.setStepIndex(1);
        		return false;
        	}

        	var vJobBgngDt = this.dsCmproMst.getColumn(0, "jobBgngDt");	//작업시작일시
        	if(this.gfnIsNull(vCmproJobNm)) {
        		this.gfnAlertMsg("msg", "CST_004", ["작업시작일시"]);		//{0}은 필수입력항목입니다.
        		this.setStepIndex(1);
        		return false;
        	}

        	var vJobEndDt = this.dsCmproMst.getColumn(0, "jobEndDt");	//작업종료일시
        	if(this.gfnIsNull(vCmproJobNm)) {
        		this.gfnAlertMsg("msg", "CST_004", ["작업종료일시"]);		//{0}은 필수입력항목입니다.
        		this.setStepIndex(1);
        		return false;
        	}

        	var vNghtJobYn = this.dsCmproMst.getColumn(0, "nghtJobYn");	//야간작업
        	if(this.gfnIsNull(vCmproJobNm)) {
        		this.gfnAlertMsg("msg", "CST_004", ["야간작업"]);		//{0}은 필수입력항목입니다.
        		this.setStepIndex(1);
        		return false;
        	}

        	var vDageJobYn = this.dsCmproMst.getColumn(0, "dageJobYn");	//위험작업 여부
        	if(this.gfnIsNull(vCmproJobNm)) {
        		this.gfnAlertMsg("msg", "CST_004", ["위험작업 여부"]);		//{0}은 필수입력항목입니다.
        		this.setStepIndex(1);
        		return false;
        	}

        	var vRprsOprtrNm = this.dsCmproMst.getColumn(0, "rprsOprtrNm");	//대표작업자 성함
        	if(this.gfnIsNull(vCmproJobNm)) {
        		this.gfnAlertMsg("msg", "CST_004", ["대표작업자 성함"]);		//{0}은 필수입력항목입니다.
        		this.setStepIndex(1);
        		return false;
        	}

        	var vRprsOprtrInstNm = this.dsCmproMst.getColumn(0, "rprsOprtrInstNm");	//대표작업자 소속
        	if(this.gfnIsNull(vCmproJobNm)) {
        		this.gfnAlertMsg("msg", "CST_004", ["대표작업자 소속"]);		//{0}은 필수입력항목입니다.
        		this.setStepIndex(1);
        		return false;
        	}

        	var vRprsOprtrCtinfoNo = this.dsCmproMst.getColumn(0, "rprsOprtrCtinfoNo");	//대표작업자 연락처
        	if(this.gfnIsNull(vCmproJobNm)) {
        		this.gfnAlertMsg("msg", "CST_004", ["대표작업자 연락처"]);		//{0}은 필수입력항목입니다.
        		this.setStepIndex(1);
        		return false;
        	}

        	var vJobTnope = this.dsCmproMst.getColumn(0, "jobTnope");	//총 작업인원
        	if(this.gfnIsNull(vCmproJobNm)) {
        		this.gfnAlertMsg("msg", "CST_004", ["총 작업인원"]);		//{0}은 필수입력항목입니다.
        		this.setStepIndex(1);
        		return false;
        	}

        	var vTrgtSysInflncExnCd = this.dsCmproMst.getColumn(0, "trgtSysInflncExnCd");	//대상 시스템 영향
        	if(this.gfnIsNull(vCmproJobNm)) {
        		this.gfnAlertMsg("msg", "CST_004", ["대상 시스템 영향"]);		//{0}은 필수입력항목입니다.
        		this.setStepIndex(1);
        		return false;
        	}

        	var vTrgtSysInflncCn = this.dsCmproMst.getColumn(0, "trgtSysInflncCn");	//대상 시스템 영향도
        	if(this.gfnIsNull(vCmproJobNm)) {
        		this.gfnAlertMsg("msg", "CST_004", ["대상 시스템 영향도"]);		//{0}은 필수입력항목입니다.
        		this.setStepIndex(1);
        		return false;
        	}

        	var vOtherSysInflncExnCd = this.dsCmproMst.getColumn(0, "otherSysInflncExnCd");	//타 시스템 영향
        	if(this.gfnIsNull(vCmproJobNm)) {
        		this.gfnAlertMsg("msg", "CST_004", ["타 시스템 영향"]);		//{0}은 필수입력항목입니다.
        		this.setStepIndex(1);
        		return false;
        	}

        	var vOtherSysInflncCn= this.dsCmproMst.getColumn(0, "otherSysInflncCn");	//타 시스템 영향도
        	if(this.gfnIsNull(vCmproJobNm)) {
        		this.gfnAlertMsg("msg", "CST_004", ["타 시스템 영향도"]);		//{0}은 필수입력항목입니다.
        		this.setStepIndex(1);
        		return false;
        	}

        	var vCrynItemCn = this.dsCmproMst.getColumn(0, "crynItemCn");	//반입 품목
        	if(this.gfnIsNull(vCmproJobNm)) {
        		this.gfnAlertMsg("msg", "CST_004", ["반입 품목"]);		//{0}은 필수입력항목입니다.
        		this.setStepIndex(1);
        		return false;
        	}

        	var vShpgotItemCn = this.dsCmproMst.getColumn(0, "shpgotItemCn");	//반출 품목
        	if(this.gfnIsNull(vCmproJobNm)) {
        		this.gfnAlertMsg("msg", "CST_004", ["반출 품목"]);		//{0}은 필수입력항목입니다.
        		this.setStepIndex(1);
        		return false;
        	}

        	//작업기간
        	//var vJobBgngYmd = this.dsCmproMst.getColumn(0, "jobBgngYmd");		//작업시작일자
        	//var vJobEndYmd  = this.dsCmproMst.getColumn(0, "jobEndYmd");		//작업종료일자

        	var vJobBgngDt  = this.dsCmproMst.getColumn(0, "jobBgngDt");		//작업시작일시
        	var vJobEndDt   = this.dsCmproMst.getColumn(0, "jobEndDt");			//작업종료일시
        	var vCurrYmdHs  = (this.gfnGetDate("time")).substr(0, 12);

        	if(this.gfnIsNull(vJobBgngDt) || this.gfnIsNull(vJobEndDt) ) {
        		this.gfnAlertMsg("msg", "CST_004", ["작업기간"]);
        		return false;
        	}else{
        		//작업시작일시 현재보다 이후 검증
        		if(this.gfnGetDate() > vJobBgngDt ) {
        			this.gfnAlertMsg("msg", "MSG_013", ["작업시작일", "현재"]);	//{0}은 {1}보다 이후일시여야 합니다.
        			return false;
        		}
        		//작업종료일시는 작업시작일시보다 이후 검증
        		if(vJobBgngDt > vJobEndDt ) {
        			this.gfnAlertMsg("msg", "MSG_013", ["작업종료일", "작업시작일"]);	//{0}은 {1}보다 이후일시여야 합니다.
        			return false;
        		}
        	}

        	//두 일자간의 차이 일수 계산
        	//trace("diff:"+this.gfn_getDiffDate(vJobBgngYmd, vJobEndYmd));
        	if(this.gfn_getDiffDate(vJobBgngDt.substr(0,8), vJobEndDt.substr(0,8)) > 90 ) {
        		this.gfnAlertMsg("msg", "CMM_001", ["작업일", "90"]);	//{0}은 최대{1}일까지 지정 가능합니다.
        	}
        	/*********************** 작업개요 end*************************************/

        	/*********************** 개인정보동의 start*************************************/
        	//var vPrvcClctEsntlAgreYn = this.dsCmnctMst.getCloumn(0, "prvcClctEsntlAgreYn");	//개인정보 수집.이용 동의여부
        	var vPrvcClctEsntlAgreYn = this.Div02.form.div00.form.rdoPrvcClctEsntlAgreYn.value;
        	if(this.gfnIsNull(vPrvcClctEsntlAgreYn) ) {
        		this.gfnAlertMsg("msg", "CST_004", ["개인정보 수집.이용 동의여부"]);		//{0}은 필수입력항목입니다.
        		this.setStepIndex(2);
        		return false;
        	}
        	/*********************** 개인정보동의 end*************************************/

        	/*********************** 작업내용 start*************************************/
        	var vOotherDeptJobAvtsmtIdntyYn = this.dsCmproMst.getColumn(0, "otherDeptJobAvtsmtIdntyYn");	//타부서 작업통지 확인여부
        	if(this.gfnIsNull(vOotherDeptJobAvtsmtIdntyYn) ) {
        		this.gfnAlertMsg("msg", "CST_004", ["타부서 작업통지 확인여부"]);		//{0}은 필수입력항목입니다.
        		this.setStepIndex(3);
        		return false;
        	}
        	/*
        	//첨부파일
        	this.dsCmproMst.getCloumn(0, "");	//작업신고서
        	this.dsCmproMst.getCloumn(0, "");	//전산장비반출입 신청서
        	this.dsCmproMst.getCloumn(0, "");	//제원조사서
        	this.dsCmproMst.getCloumn(0, "");	//시스템설치계획서
        	this.dsCmproMst.getCloumn(0, "");	//세부작업내역서
        	this.dsCmproMst.getCloumn(0, "");	//전달사항
        	*/
        	/*********************** 작업내용 end*************************************/
        	return true;
        };

        /**************************************************************************
         * @name : fnValiChkFile
         * @description : 첨부파일 필수 체크
         ***************************************************************************/
        this.fnValiChkFile = function()
        {
        	for(var i = 0; i < this.dsCmproIncmgOprtrNmMst.getRowCount(); i++) {

        		if(this.gfnIsNull(this.dsCmproIncmgOprtrNmMst.getColumn(i, "atflMngNo")) ) {

        			this.gfnAlertMsg("msg", "CST_004", [(i+1)+"라인 첨부파일"]);		//{0}은 필수입력항목입니다.
        			return;
        		}
        	}
        };

        /**************************************************************************
         * @name : fnChgBtn
         * @description : 신청자/감독자 동일여부별 버튼 처리
         ***************************************************************************/
        this.fnChgBtn = function()
        {
        	var vAplcntHwrtInptYn = this.dsFcltOperMst.getColumn(0, "aplcntHwrtInptYn");	//신청자/감독자 동일여부
        	//신청자에 따른 작업감독자 동일 여부 컨트롤
        	if(vAplcntHwrtInptYn == 1) {

        		//공사직원일 경우 동일 선택 작업감독자 접수 버튼 숨김
        		if (this.divBtn.form.isValidObject("CTL11103") && this.divBtn.form.isValidObject("CTL11105")) {
        			this.divBtn.form.CTL11103.visible = false;
        			this.divBtn.form.CTL11105.visible = true;
        		}

        		//신청자 정보 동일하게 작업감독자에 입력
        		this.dsCmproMst.setColumn(0, "jobApvsrId"   , this.gvUserId);
        		this.dsCmproMst.setColumn(0, "jobApvsrNm"   , this.gvUserNm);
        		this.dsCmproMst.setColumn(0, "jobApvsrCoNm" , this.gvCoNm);

        		//this.Div00.form.Div00.form.edtJobApvsrNm.set_readonly(true);			//작업감독자
        		//this.Div00.form.Div00.form.btnPop.set_visible(false);					//감독자찾기

        	} else {

        		//자회사 경우 선택칸 차단 및 전산실 운영자 접수 버튼 숨김
        		if (this.divBtn.form.isValidObject("CTL11103") && this.divBtn.form.isValidObject("CTL11105")) {
        			this.divBtn.form.CTL11103.visible = true;
        			this.divBtn.form.CTL11105.visible = false;
        		}
        	}
        };

        /**************************************************************************
         * @name : fnStepCtrl
         * @description : workflow 별 화면 제어
         ***************************************************************************/
        this.fnStepCtrl = function()
        {
        	var curTaskCd = this.dsFcltOperMst.getColumn(0, "taskCd");
        	switch(curTaskCd) {
        		case "TAS10459":	//3811.신청서작성

        			this.Div00.form.div00.form.rdoAplcntHwrtInptYn.readonly = true;	//신청자,감독자 동일여부
        			this.Div00.form.div00.form.edtRgtrNm.readonly = true;	//신청자

        			this.Div03.form.Panel01_01.visible = false;		//신청자전달사항
        			this.Div03.form.div03.visible = false;			//신청자전달사항

        			this.Div03.form.Panel06_01.visible = false;		//작업감독자검토
        			this.Div03.form.div04.visible = false;			//작업감독자검토

        			this.Div03.form.Panel07_01.visible = false;		//운영자회사담당자검토의견
        			this.Div03.form.div05.visible = false;			//운영자회사담당자검토의견

        			this.Div03.form.Panel08_01.visible = false;		//전산실감독자검토의견
        			this.Div03.form.div06.visible = false;			//전산실감독자검토의견

        			this.Div03.form.Panel09_01.visible = true;		//전달사항
        			this.Div03.form.div07.visible = true;			//전달사항

        			break;
        		case "TAS10460":	//3812.신청서보완

        			this.Div00.form.div00.form.rdoAplcntHwrtInptYn.readonly = true;	//신청자,감독자 동일여부
        			this.Div00.form.div00.form.edtRgtrNm.readonly = true;	//신청자

        			this.Div03.form.Panel01_01.visible = false;		//신청자전달사항
        			this.Div03.form.div03.visible = false;			//신청자전달사항

        			this.Div03.form.Panel06_01.visible = false;		//작업감독자검토
        			this.Div03.form.div04.visible = false;			//작업감독자검토

        			this.Div03.form.Panel07_01.visible = false;		//운영자회사담당자검토의견
        			this.Div03.form.div05.visible = false;			//운영자회사담당자검토의견

        			this.Div03.form.Panel08_01.visible = false;		//전산실감독자검토의견
        			this.Div03.form.div06.visible = false;			//전산실감독자검토의견

        			this.Div03.form.Panel09_01.visible = true;		//전달사항
        			this.Div03.form.div07.visible = true;			//전달사항

        			break;
        		case "TAS10461":	//3813.재신청작성

        			this.Div00.form.div00.form.rdoAplcntHwrtInptYn.readonly = true;	//신청자,감독자 동일여부
        			this.Div00.form.div00.form.edtRgtrNm.readonly = true;	//신청자

        			this.Div03.form.Panel01_01.visible = false;		//신청자전달사항
        			this.Div03.form.div03.visible = false;			//신청자전달사항

        			this.Div03.form.Panel06_01.visible = false;		//작업감독자검토
        			this.Div03.form.div04.visible = false;			//작업감독자검토

        			this.Div03.form.Panel07_01.visible = false;		//운영자회사담당자검토의견
        			this.Div03.form.div05.visible = false;			//운영자회사담당자검토의견

        			this.Div03.form.Panel08_01.visible = false;		//전산실감독자검토의견
        			this.Div03.form.div06.visible = false;			//전산실감독자검토의견

        			this.Div03.form.Panel09_01.visible = true;		//전달사항
        			this.Div03.form.div07.visible = true;			//전달사항
        			this.Div03.form.div07.form.txtCnvyMttrCn.readonly = false;

        			break;
        		case "TAS10462":	//3814.작업감독자검토

        			this.fnFormEnable();

        			this.Div03.form.Panel01_01.visible = true;						//신청자전달사항
        			this.Div03.form.div03.visible = true;							//신청자전달사항
        			this.Div03.form.div03.form.TextArea01.readonly = true;

        			this.Div03.form.Panel06_01.visible = true;						//작업감독자검토
        			this.Div03.form.div04.visible = true;							//작업감독자검토
        			this.Div03.form.div04.form.TextArea06_02_01.readonly = false;

        			this.Div03.form.Panel07_01.visible = true;						//운영자회사담당자검토의견
        			this.Div03.form.div05.visible = true;							//운영자회사담당자검토의견
        			this.Div03.form.div05.form.TextArea07_02_01.readonly = true;

        			this.Div03.form.Panel08_01.visible = true;						//전산실감독자검토의견
        			this.Div03.form.div06.visible = true;							//전산실감독자검토의견
        			this.Div03.form.div06.form.TextArea08_02_01.readonly = true;

        			this.Div03.form.Panel09_01.visible = false;						//전달사항
        			this.Div03.form.div07.visible = false;							//전달사항
        			this.Div03.form.div07.form.txtCnvyMttrCn.readonly = true;

        			break;
        		case "TAS10463":	//3815.운영자회사담당자검토

        			this.fnFormEnable();

        			this.Div03.form.Panel01_01.visible = true;						//신청자전달사항
        			this.Div03.form.div03.visible = true;							//신청자전달사항
        			this.Div03.form.div03.form.TextArea01.readonly = true;

        			this.Div03.form.Panel06_01.visible = true;						//작업감독자검토
        			this.Div03.form.div04.visible = true;							//작업감독자검토
        			this.Div03.form.div04.form.TextArea06_02_01.readonly = true;

        			this.Div03.form.Panel07_01.visible = true;						//운영자회사담당자검토의견
        			this.Div03.form.div05.visible = true;							//운영자회사담당자검토의견
        			this.Div03.form.div05.form.TextArea07_02_01.readonly = false;

        			this.Div03.form.Panel08_01.visible = true;						//전산실감독자검토의견
        			this.Div03.form.div06.visible = true;							//전산실감독자검토의견
        			this.Div03.form.div06.form.TextArea08_02_01.readonly = true;

        			this.Div03.form.Panel09_01.visible = false;						//전달사항
        			this.Div03.form.div07.visible = false;							//전달사항
        			this.Div03.form.div07.form.txtCnvyMttrCn.readonly = true;

        			break;
        		case "TAS10464":	//3816.전산실감독자최종검토

        			this.fnFormEnable();

        			this.Div03.form.Panel01_01.visible = true;						//신청자전달사항
        			this.Div03.form.div03.visible = true;							//신청자전달사항
        			this.Div03.form.div03.form.TextArea01.readonly = true;

        			this.Div03.form.Panel06_01.visible = true;						//작업감독자검토
        			this.Div03.form.div04.visible = true;							//작업감독자검토
        			this.Div03.form.div04.form.TextArea06_02_01.readonly = true;

        			this.Div03.form.Panel07_01.visible = true;						//운영자회사담당자검토의견
        			this.Div03.form.div05.visible = true;							//운영자회사담당자검토의견
        			this.Div03.form.div05.form.TextArea07_02_01.readonly = false;

        			this.Div03.form.Panel08_01.visible = true;						//전산실감독자검토의견
        			this.Div03.form.div06.visible = true;							//전산실감독자검토의견
        			this.Div03.form.div06.form.TextArea08_02_01.readonly = true;

        			this.Div03.form.Panel09_01.visible = false;						//전달사항
        			this.Div03.form.div07.visible = false;							//전달사항
        			this.Div03.form.div07.form.txtCnvyMttrCn.readonly = true;

        			break;
        		case "TAS10465":	//종료

        			this.fnFormEnable();
        			this.Div03.form.Panel01_01.visible = true;						//신청자전달사항
        			this.Div03.form.div03.visible = true;							//신청자전달사항
        			this.Div03.form.div03.form.TextArea01.readonly = true;

        			this.Div03.form.Panel06_01.visible = true;						//작업감독자검토
        			this.Div03.form.div04.visible = true;							//작업감독자검토
        			this.Div03.form.div04.form.TextArea06_02_01.readonly = true;

        			this.Div03.form.Panel07_01.visible = true;						//운영자회사담당자검토의견
        			this.Div03.form.div05.visible = true;							//운영자회사담당자검토의견
        			this.Div03.form.div05.form.TextArea07_02_01.readonly = true;

        			this.Div03.form.Panel08_01.visible = true;						//전산실감독자검토의견
        			this.Div03.form.div06.visible = true;							//전산실감독자검토의견
        			this.Div03.form.div06.form.TextArea08_02_01.readonly = true;

        			this.Div03.form.Panel09_01.visible = false;						//전달사항
        			this.Div03.form.div07.visible = false;							//전달사항

        			break;
        		default:
        	}
        };

        /**************************************************************************
         * @name : fnFormEnable
         * @description : 화면Components 비활성화
         ***************************************************************************/
        this.fnFormEnable = function()
        {
        	[this.Div00, this.Div01, this.Div02, this.Div03].forEach(oDiv => {
         		fnEnable.call(this, oDiv.form, true);
        	});

        	// 내부함수호출
        	function fnEnable (oComps, bEnable) {
        		Array.from(oComps.components).forEach(oComp => {
         			if (oComp instanceof nexacro.Div) {
        				fnEnable.call(this, oComp.form, true);
        			} else {
        				if (oComp instanceof nexacro.Static) return;
        				if (oComp instanceof nexacro.Panel) return;
        				if (oComp instanceof nexacro.TextArea) return;
        				if (oComp.name == "btnFold") return;

        				try {
        					if (oComp instanceof nexacro.Button) {
        						oComp.enable = false;
        					} else {
        						oComp.readonly = bEnable;
        					}
        				} catch(e) {
        					trace ("enable속성없음");
        				}
        			}
        		});
        	}
        }

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
        	this.dsFcltOperMst.setColumn(0, "taskCd"    , wfInfo.jobPrcsPrgrsSeCd        );  // 현재업무코드
        	this.dsFcltOperMst.setColumn(0, "nextTaskCd", wfInfo.nextStepJobPrcsPrgrsSeCd);  // 다음업무코드

        	var vBtnNm = wfInfo.prcsSeCdNm;
        	var vBtnId = wfInfo.prcsSeCd;

        	if("CTL11104:임시저장,CTL11106:신청취소,CTL11109:신청취소,CTL11110:임시저장,CTL11113:신청취소,CTL11116:미처리종료,CTL11118:미처리종료,CTL11121:미처리종료".indexOf(wfInfo.prcsSeCd) == -1) {
        		if(!this.fnValiChk()){return;}
        	}

        	var vStrSvcId  = "cmproJobSpvsrAply";
        	var vStrSvcUrl = "cmm/saveCmproJobSpvsrAply.do";

        	// {0}을(를) 하시겠습니까?
        	this.gfnConfirmMsg("save_confirm", "CST_001", function(sPopupId, sRtn) {
        		if(JSON.parse(sRtn).result == "Y") {
                    // 첨부파일 변경시 첨부파일부터 저장
        			if(this.gfnDsIsUpdated(this.dsAtfl)) {  // 첨부파일 변경시
        				// 첨부파일 저장
        				this.fnSaveFile();
        			} else {
        				// 저장
        				this.fnSave(vStrSvcId, vStrSvcUrl);
        			}
        		}
        	}, ["확인", "취소"], ["Y" , "N" ], "", [wfInfo.prcsSeCdNm]);

        };

        this.tabStep_onchanged = function(obj,e)
        {
        	this.setStepIndex(obj.tabindex);
        };

        this.CST016M00_onstepchanged = function(obj,e)
        {
        	this.divBtn.positionstep     = e.postindex;  // 버튼
        	this.tabStep.positionstep    = e.postindex;  // 스텝
        	this.tabStep.tabindex        = this.getStepIndex();
        };

        this.CST016M00_onkeydown = function(obj,e)
        {
        	if(e.shiftkey && e.altkey) {
        		if(e.keycode == 37) {
        			this.setStepIndex(this.getStepIndex() == 0 ? this.getStepCount() - 1 : this.getStepIndex() - 1);
        		} else if(e.keycode == 39) {
        			this.setStepIndex(this.getStepIndex() == this.getStepCount() - 1 ? 0 : this.getStepIndex() + 1);
        		}
        	}
        };

        this.CST016M00_onsize = function(obj,e)
        {
        	this.resetScroll();
        };

        /*
        this.dsCnvyMttrCn_onload = function(obj:nexacro.NormalDataset,e:nexacro.DSLoadEventInfo)
        {
        	this.divFrom04.form.fnGridSize();
        };

        this.dsRltwfCadList_onload = function(obj:nexacro.NormalDataset,e:nexacro.DSLoadEventInfo)
        {
        	//this.divFrom02.form.fnListSize();
        };
        */

        /**************************************************************************
         * @name :
         * @description : dsCmproMst_oncolumnchanged Event
         ***************************************************************************/
        this.dsCmproMst_oncolumnchanged = function(obj,e)
        {
        	//버튼제어-신청자/감독자일치여부에 따른 nextStep 버튼 변경
        	var aplcntHwrtInptYn = this.dsFcltOperMst.getColumn(0, "aplcntHwrtInptYn");

        	if (this.divBtn.form.isValidObject("CTL11103") && this.divBtn.form.isValidObject("CTL11105") ) {
        		this.divBtn.form.CTL11103.set_visible(false);
        		this.divBtn.form.CTL11105.set_visible(false);
        	}

        	if (aplcntHwrtInptYn == 1) {
        		if (this.divBtn.form.isValidObject("CTL11103") && this.divBtn.form.isValidObject("CTL11105") ) {
        			this.divBtn.form.CTL11103.set_visible(false);
        			this.divBtn.form.CTL11105.set_visible(true);
        		}
        	} else {
        		if (this.divBtn.form.isValidObject("CTL11103") && this.divBtn.form.isValidObject("CTL11105") ) {
        			this.divBtn.form.CTL11103.set_visible(true);
        			this.divBtn.form.CTL11105.set_visible(false);
        		}
        	}

        	//작업시작시간 변경시
        	if(e.columnid == "jobBgngDt1" || e.columnid == "jobBgngHr") {
        		var jobBgngDt = this.dsCmproMst.getColumn(0,"jobBgngDt1")+this.dsCmproMst.getColumn(0,"jobBgngHr");
        		this.dsCmproMst.setColumn(0, "jobBgngDt", jobBgngDt);
        	}
        	//작업종료시간 변경시
        	if(e.columnid == "jobEndDt1" || e.columnid == "jobEndHr") {
        		var jobEndDt = this.dsCmproMst.getColumn(0,"jobEndDt1")+this.dsCmproMst.getColumn(0,"jobEndHr");
        		this.dsCmproMst.setColumn(0, "jobEndDt", jobEndDt);
        	}
        };

        /**************************************************************************
         * @name : 작업내용 상세 데이터셋 변경
         * @description : dsCmproDtl_oncolumnchanged
         ***************************************************************************/
        this.dsCmproDtl_oncolumnchanged = function(obj,e)
        {
        	var jobYmd 		= this.dsCmproDtl.getColumn(e.row, "jobYmd");		//작업일
        	var jobBgngHr 	= this.dsCmproDtl.getColumn(e.row, "jobBgngHr");	//시작시간

        	for(var i = 0; i < this.dsCmproDtl.getRowCount(); i++) {
        		if(i != e.row) {

        			if((this.dsCmproDtl.getColumn(i, "jobYmd") == jobYmd) && (this.dsCmproDtl.getColumn(i, "jobBgngHr") == jobBgngHr) ) {

        				this.gfnAlertMsg("msg", "CST_005", ["작업일/작업시작시간"]);	//이미 등록(추가)된 {0}입니다.
        				this.dsCmproDtl.setColumn(e.row, "jobYmd", "");
        				this.dsCmproDtl.setColumn(e.row, "jobBgngHr", "");
        				return;
        			}
        		}
        	}
        };

        /**************************************************************************
         * @name : 서약서데이터셋 변경
         * @description : dsPrvcClctAgreMst_oncolumnchanged Event
         ***************************************************************************/
        this.dsCmproIncmgOprtrNmMst_oncolumnchanged = function(obj,e)
        {
        	var vUtztnAgreRgtr = this.dsCmproIncmgOprtrNmMst.getColumn(e.row, "utztnAgreRgtr");
        	var vBrdt          = this.dsCmproIncmgOprtrNmMst.getColumn(e.row, "brdt");
        	var vMblTelno      = this.dsCmproIncmgOprtrNmMst.getColumn(e.row, "mblTelno");

        	if(e.columnid == "utztnAgreRgtr" || e.columnid == "brdt" || e.columnid == "mblTelno") {

        		if(!this.gfnIsNull(vUtztnAgreRgtr) && !this.gfnIsNull(vBrdt) && !this.gfnIsNull(vMblTelno) ) {

        			this.dsPrvcClctAgreInq.setColumn(0, "utztnAgreRgtr", vUtztnAgreRgtr);
        			this.dsPrvcClctAgreInq.setColumn(0, "brdt", vBrdt) ;
        			this.dsPrvcClctAgreInq.setColumn(0, "mblTelno", vMblTelno);
        			this.dsCmproIncmgOprtrNmMst.setColumn(e.row, "colId", vBrdt + "_" + vMblTelno);
        			this.fnSearchPrvcClctAgre();
        		}
        	}
        	if(!this.gfnIsNull(this.dsCmproIncmgOprtrNmMst.getColumn(e.row, "agreBgngDt")) ) {

        		this.dsCmproIncmgOprtrNmMst.setColumn(e.row, "agreEndDt", this.gfnAddMonth(this.dsCmproIncmgOprtrNmMst.getColumn(e.row, "agreBgngDt"), 36));
        	}
        	if(!this.gfnIsNull(this.dsCmproIncmgOprtrNmMst.getColumn(e.row, "vwsBgngDt")) ) {

        		this.dsCmproIncmgOprtrNmMst.setColumn(e.row, "vwsEndDt", this.gfnAddMonth(this.dsCmproIncmgOprtrNmMst.getColumn(e.row, "vwsBgngDt"), 24));
        	}
        };

        /**************************************************************************
         * @name : 전달의견
         * @description : dsCnvyMttrCn_onload Event
         ***************************************************************************/
        this.dsCnvyMttrCn_onload = function(obj,e)
        {
        	if(obj.rowcount == 0) {
        		obj.addRow();
        		obj.applyChange();
        	}
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
        	this.RaonkUpload.SetConfig('FolderNameRule', '/CST/CMM/YYYY/MM/DD/');

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
        			var oRow = this.parent.dsCmproIncmgOprtrNmMst.findRow("colId", this.upatflinfo.colid);
        			this.parent.dsCmproIncmgOprtrNmMst.setColumn(oRow, "atflMngInfo", oFile.userdata.strName + '(' + oFile.userdata.nSize + ')');
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

        			var oRow = this.parent.dsCmproIncmgOprtrNmMst.findRow("colId", this.upatflinfo.colid);
        			this.parent.dsCmproIncmgOprtrNmMst.setColumn(oRow, "atflMngInfo", "");
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

        			var oRow = this.dsCmproIncmgOprtrNmMst.findRow("colId", colId);
        			this.dsCmproIncmgOprtrNmMst.setColumn(oRow, "atflMngInfo", this.dsAtfl.getColumn(i, "orgnlFileNm") + '(' + this.dsAtfl.getColumn(i, "fileSz") + ')');	// 파일풀명
        		}
            };
        	this.resetScroll();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.CST016M00_onsize,this);
            this.addEventHandler("onstepchanged",this.CST016M00_onstepchanged,this);
            this.addEventHandler("onkeydown",this.CST016M00_onkeydown,this);
            this.tabStep.addEventHandler("onchanged",this.tabStep_onchanged,this);
            this.tabStep.addEventHandler("onkeydown",this.CST016M00_onkeydown,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddFile",this.RaonkUpload_RAONKUPLOAD_AfterAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_CreationComplete",this.RaonkUpload_RAONKUPLOAD_CreationComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_UploadComplete",this.RaonkUpload_RAONKUPLOAD_UploadComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_OnError",this.RaonkUpload_RAONKUPLOAD_OnError,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeAddFile",this.RaonkUpload_RAONKUPLOAD_BeforeAddFile,this);
            this.dsCmproMst.addEventHandler("oncolumnchanged",this.dsCmproMst_oncolumnchanged,this);
            this.dsCmproDtl.addEventHandler("oncolumnchanged",this.dsCmproDtl_oncolumnchanged,this);
            this.dsAtfl.addEventHandler("onload",this.dsAtfl_onload,this);
            this.dsCmproIncmgOprtrNmMst.addEventHandler("oncolumnchanged",this.dsCmproIncmgOprtrNmMst_oncolumnchanged,this);
            this.dsCnvyMttrCn.addEventHandler("onload",this.dsCnvyMttrCn_onload,this);
        };
        this.loadIncludeScript("CST016M00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
