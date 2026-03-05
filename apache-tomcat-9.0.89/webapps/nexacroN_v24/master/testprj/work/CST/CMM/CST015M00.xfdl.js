(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST009M00");
            this.set_titletext("신청서작성(통신실작업)(tab)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cbo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"hh\" type=\"STRING\" size=\"256\"/><Column id=\"mm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"hh\">선택</Col><Col id=\"code\">0</Col><Col id=\"mm\">선택</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"hh\">01</Col><Col id=\"mm\">5</Col></Row><Row><Col id=\"hh\">02</Col><Col id=\"code\">2</Col><Col id=\"mm\">10</Col></Row><Row><Col id=\"hh\">03</Col><Col id=\"code\">3</Col><Col id=\"mm\">15</Col></Row><Row><Col id=\"hh\">04</Col><Col id=\"code\">4</Col><Col id=\"mm\">20</Col></Row><Row><Col id=\"hh\">05</Col><Col id=\"code\">5</Col><Col id=\"mm\">25</Col></Row><Row><Col id=\"hh\">06</Col><Col id=\"code\">6</Col><Col id=\"mm\">30</Col></Row><Row><Col id=\"hh\">07</Col><Col id=\"code\">7</Col><Col id=\"mm\">35</Col></Row><Row><Col id=\"hh\">08</Col><Col id=\"code\">8</Col><Col id=\"mm\">40</Col></Row><Row><Col id=\"hh\">09</Col><Col id=\"code\">9</Col><Col id=\"mm\">45</Col></Row><Row><Col id=\"hh\">10</Col><Col id=\"code\">10</Col><Col id=\"mm\">50</Col></Row><Row><Col id=\"hh\">11</Col><Col id=\"code\">11</Col><Col id=\"mm\">60</Col></Row><Row><Col id=\"hh\">12</Col><Col id=\"code\">12</Col></Row><Row><Col id=\"hh\">13</Col><Col id=\"code\">13</Col></Row><Row><Col id=\"hh\">14</Col><Col id=\"code\">14</Col></Row><Row><Col id=\"code\">15</Col><Col id=\"hh\">15</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCmnctIncmgJobWtpl", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoNm\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"cnstrCoNm\" type=\"STRING\" size=\"256\"/><Column id=\"cnstrPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"cnstrCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"rgnSeNm\" type=\"STRING\" size=\"256\"/><Column id=\"bldgSeNm\" type=\"STRING\" size=\"256\"/><Column id=\"comurmPstnCn\" type=\"STRING\" size=\"256\"/><Column id=\"trgtSysEqpmntNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobTnope\" type=\"STRING\" size=\"256\"/><Column id=\"jobBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"jobEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"jobBgngHr\" type=\"STRING\" size=\"256\"/><Column id=\"jobEndHr\" type=\"STRING\" size=\"256\"/><Column id=\"incmgJobNm\" type=\"STRING\" size=\"256\"/><Column id=\"incmgJobCn\" type=\"STRING\" size=\"256\"/><Column id=\"wdmchnUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"exsFcltyFinmtDslovRasblCd\" type=\"STRING\" size=\"256\"/><Column id=\"flmatyTicBdsmlOcrnYn\" type=\"STRING\" size=\"256\"/><Column id=\"noiseVbrnOcrnYn\" type=\"STRING\" size=\"256\"/><Column id=\"vstPrdocNeedYn\" type=\"STRING\" size=\"256\"/><Column id=\"posplyJobYn\" type=\"STRING\" size=\"256\"/><Column id=\"arptPbcprtPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"prvcClctAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"prvcTdptyPvsnAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"cnvyMttrCn\" type=\"STRING\" size=\"256\"/><Column id=\"vstrLstFilePath\" type=\"STRING\" size=\"256\"/><Column id=\"wtohPath\" type=\"STRING\" size=\"256\"/><Column id=\"putMtrlToolCrynListFilePath\" type=\"STRING\" size=\"256\"/><Column id=\"elctyRltnNtnTechCrtfctDpctPath\" type=\"STRING\" size=\"256\"/><Column id=\"etcAtflPath\" type=\"STRING\" size=\"256\"/><Column id=\"splmntDmndRsnCn\" type=\"STRING\" size=\"256\"/><Column id=\"bilgYn\" type=\"STRING\" size=\"256\"/><Column id=\"etrntDeptDcsnCn\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoRvwOpnnCn\" type=\"STRING\" size=\"256\"/><Column id=\"aprvYn\" type=\"STRING\" size=\"256\"/><Column id=\"pbcprtCurbizRvwOpnnCn\" type=\"STRING\" size=\"256\"/><Column id=\"ipTelActypCn\" type=\"STRING\" size=\"256\"/><Column id=\"ipTelActypChgYn\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoPbcprtEmpYn\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoSmYn\" type=\"STRING\" size=\"256\"/><Column id=\"cnstrSmYn\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoPrvcClctUtztnWtcsPath\" type=\"STRING\" size=\"256\"/><Column id=\"cnstrPrvcClctUtztnWtcsPath\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoPbcprtEmpNm\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"isFileAtch\" type=\"INT\" size=\"256\"/><Column id=\"atflMngInfo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCmnctIncmgDtl", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"cmnctAplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"sn\" type=\"STRING\" size=\"256\"/><Column id=\"cnstrNm\" type=\"STRING\" size=\"256\"/><Column id=\"incmgJobCn\" type=\"STRING\" size=\"256\"/><Column id=\"jobYmd\" type=\"STRING\" size=\"256\"/><Column id=\"rmrkCn\" type=\"STRING\" size=\"256\"/><Column id=\"jobNope\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"mdfcnDt\" type=\"STRING\" size=\"256\"/><Column id=\"mdfrId\" type=\"STRING\" size=\"256\"/><Column id=\"pstnInfoRnb\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFcltOperMst", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"taskCd\" type=\"STRING\" size=\"256\"/><Column id=\"nextTaskCd\" type=\"STRING\" size=\"256\"/><Column id=\"pstnSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyDt\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"endCd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstnInfoRnb\" type=\"STRING\" size=\"256\"/><Column id=\"clmZip\" type=\"STRING\" size=\"256\"/><Column id=\"clmAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmDtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmWholAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmCustCd\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"rcptDt\" type=\"STRING\" size=\"256\"/><Column id=\"clrId\" type=\"STRING\" size=\"256\"/><Column id=\"dptyRegYn\" type=\"STRING\" size=\"256\"/><Column id=\"dmndDt\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptAplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptCtrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptPstnInfoCn\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtHwrtInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntHwrtInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtMvmnRgnPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"docCd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtChcYn\" type=\"STRING\" size=\"256\"/><Column id=\"wholJobBgngDt\" type=\"STRING\" size=\"256\"/><Column id=\"wholJobEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobNm\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobRsnCn\" type=\"STRING\" size=\"256\"/><Column id=\"bldgSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoCtrtrNm\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoPicCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobFldCd\" type=\"STRING\" size=\"256\"/><Column id=\"arptCstrnPicId\" type=\"STRING\" size=\"256\"/><Column id=\"lbsvcPbcprtPicId\" type=\"STRING\" size=\"256\"/><Column id=\"basctAplcfmInfoId\" type=\"STRING\" size=\"256\"/><Column id=\"lbsvcTaskAgtRlvtYn\" type=\"STRING\" size=\"256\"/><Column id=\"lbsvcTaskMdtrId\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptRnb\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclFstVl\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclFstCn\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclSecdVl\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclSecdCn\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclThrVl\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclThrCn\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnRspnsYn\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/><Column id=\"isEdtrPsblty\" type=\"INT\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsCnvyMttrCn", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"seqNo\" type=\"STRING\" size=\"256\"/><Column id=\"cnvyMttrCn\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWorkFlow", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCmmcla", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTspClo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSampleCont", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSampeLocal", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCmmCust", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTspDoc", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTspLoc", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTscWplara", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTscWplBld", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTscWplMat", this);
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
            obj.set_url("work::CST/CMM/CST015M01.xfdl");
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
            obj.set_url("work::CST/CMM/CST015M02.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","0","110",null,null,"60","70",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div02");
            obj.set_positionstep("2");
            obj.set_url("work::CST/CMM/CST015M03.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","0","110",null,null,"60","70",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div03");
            obj.set_positionstep("3");
            obj.set_url("work::CST/CMM/CST015M04.xfdl");
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
            obj = new Layout("Layout0","",0,0,this.divBtn.form,
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
                p.set_titletext("신청서작성(통신실작업)(tab)");

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
                p.Div00.set_url("work::CST/CMM/CST015M01.xfdl");
                p.Div00.move("0","110",null,null,"60","70");

                p.divTitle.set_taborder("3");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);

                p.Div01.set_taborder("4");
                p.Div01.set_text("Div01");
                p.Div01.set_positionstep("1");
                p.Div01.set_url("work::CST/CMM/CST015M02.xfdl");
                p.Div01.move("0","110",null,null,"60","70");

                p.Div02.set_taborder("5");
                p.Div02.set_text("Div02");
                p.Div02.set_positionstep("2");
                p.Div02.set_url("work::CST/CMM/CST015M03.xfdl");
                p.Div02.move("0","110",null,null,"60","70");

                p.Div03.set_taborder("6");
                p.Div03.set_text("Div03");
                p.Div03.set_positionstep("3");
                p.Div03.set_url("work::CST/CMM/CST015M04.xfdl");
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
            obj = new Layout("Layout0","Phone_screen",480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divTitle.move("0","0",null,"50","0",null);

                p.Div00.move("0","110",null,null,"0","70");

                p.divBtn.move("0",null,null,"60","0","0");

                p.Div01.move("0","110",null,null,"0","70");

                p.Div02.move("0","110",null,null,"0","70");

                p.Div03.move("0","110",null,null,"0","70");

                p.tabStep.move("20","60",null,"50","20",null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            obj.set_stepcount("4");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","work::CST/CMM/CST015M01.xfdl");
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
            this._addPreloadList("fdl","work::CST/CMM/CST015M02.xfdl");
            this._addPreloadList("fdl","work::CST/CMM/CST015M03.xfdl");
            this._addPreloadList("fdl","work::CST/CMM/CST015M04.xfdl");
        };
        
        // User Script
        this.addIncludeScript("CST015M00.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CST015M00.xfdl", function() {
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
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
            // 팝업으로 실행시의 처리
         	if(this.getOwnerFrame().name == "popupCmnctIncmgJobWtpl") {
          	    this.divTitle.destroy();  								// 프로그램 타이틀 제거
          	    this.tabStep.top 	= 10;    							// tap 위치 조정
         		this.Div00.top 		= parseInt(this.tabStep.top)
        							+ parseInt(this.tabStep.height)
        							+ 10;    							// 신청자 정보 div 위치 조정
                this.resetScroll();
         	}

        	this.gfnFormOnload(obj); 									//필수함수
        	this.stepitemsize 		= 0;   								//스텝이미지사이즈
        	var pvJobCd 			= this.getOwnerFrame().jobCd;		//taskCd
        	this.pvView 			= this.getOwnerFrame().view;		//view mode

        	if (this.gfnIsNull(pvJobCd)){pvJobCd = "TAS00491"} else {pvJobCd};
        	this.cfnBtnCrt({ crtTrgt:this.divBtn, lnkgEvnt:this.Button_onclick, inqCnd : { jobPrcsPrgrsSeCd:pvJobCd} });

        	//공통코드 함수 호출
        	this.cfnComCdLoad({ id:"commonCodeSearch", cbf:"fnCallBack", dsCmmcla:"CMMCLA:A" });			//[ICT]서비스구분
        	this.cfnComCdLoad({ id:"commonCodeSearch", cbf:"fnCallBack", dsTspClo:"TSPCLO:A" });			//[입주자지원포탈]종료코드
        	this.cfnComCdLoad({ id:"commonCodeSearch", cbf:"fnCallBack", dsSampleCont:"SAMPLECONT:A" });	//[샘플]계약정보
        	this.cfnComCdLoad({ id:"commonCodeSearch", cbf:"fnCallBack", dsSampeLocal:"SAMPLELOCAL:A" });	//[샘플]위치정보
        	this.cfnComCdLoad({ id:"commonCodeSearch", cbf:"fnCallBack", dsCmmCust:"CMMCUST:A" });			//[통신]고객유형
        	this.cfnComCdLoad({ id:"commonCodeSearch", cbf:"fnCallBack", dsTspDoc:"TSPDOC:A" });			//[TSP]프로세스별 문서명
        	this.cfnComCdLoad({ id:"commonCodeSearch", cbf:"fnCallBack", dsTspLoc:"TSPLOC:A" });			//입주자지원_신청위치구분

        	this.cfnComCdLoad({ id:"commonCodeSearch", cbf:"fnCallBack", dsTscWplara:"TSCWPLARA:A" });		//[시설관리/작업계획서]작업지역구분
        	this.cfnComCdLoad({ id:"commonCodeSearch", cbf:"fnCallBack", dsTscWplBld:"TSCWPLBLD:A" });		//TSCWPLBLD [시설관리/작업계획서]건물구분
        	this.cfnComCdLoad({ id:"commonCodeSearch", cbf:"fnCallBack", dsTscWplMat:"TSCWPLMAT:A" });		//TSCWPLMAT [시설관리/작업계획서]기존시설물구분

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
        	this.cfnEtcCdLoad({ id:this.dsAtflArtclList.name, cbf:"fnCallback", dsAtflArtclList:"{id:'selectTaskComListCd', cnd:{cdTyId:'ATFL_SE', note:'CST015M00'}}"});  // 첨부파일구분
        	this.cfnGetAplySeNm({ id:"getAplySeNm", cbf:"fnCallback", aplySeCd:"TSPCMM007" });

        	this.gvUserId 	= this.objApp.gdsUser.getColumn(0, "userId");
        	this.gvUserNm 	= this.objApp.gdsUser.getColumn(0, "userNm");
        	this.gvCoId   	= this.objApp.gdsUser.getColumn(0, "coId");
        	this.gvCoNm   	= this.objApp.gdsUser.getColumn(0, "coNm");
        	this.gvTelNo  	= this.objApp.gdsUser.getColumn(0, "userMblTelno");

        	// 파라미터 확인
        	var pvAplyNo 	= this.getOwnerFrame().pvAplyNo;   // 신청번호
        	//pvAplyNo 		= "CMM2412_00014";
        	trace(":: aplyNo :: " + pvAplyNo);

        	if (this.gfnIsNull(pvAplyNo) ) {

        		this.dsFcltOperMst.addRow();													//메인정보
        		this.dsFcltOperMst.setColumn(0, "aplySeCd"    		, "TSPCMM007");				//신청구분/범주(cmm_cat_cd)
        		this.dsFcltOperMst.setColumn(0, "taskCd"      		, "TAS00491");				//업무코드 taskCd
        		this.dsFcltOperMst.setColumn(0, "nextTaskCd"  		, "TAS00491");				//업무코드 nextTask

        		this.dsFcltOperMst.setColumn(0, "aplcntId"    		, this.gvUserId);			//신청자ID
        		this.dsFcltOperMst.setColumn(0, "aplcntNm"    		, this.gvUserNm);			//신청자명
        		this.dsFcltOperMst.setColumn(0, "aplcntInstCd"		, this.gvCoId);				//신청자기관코드
        		this.dsFcltOperMst.setColumn(0, "aplcntInstNm"		, this.gvCoNm);				//신청자기관코드명
        		this.dsFcltOperMst.setColumn(0, "aplcntDeptCd"		, this.gvCoId);				//신청자부서코드
        		this.dsFcltOperMst.setColumn(0, "mblTelno"    		, this.gvTelNo);			//휴대전화번호
        		this.dsFcltOperMst.setColumn(0, "ctrtChcYn"			, 1);						//계약선택여부

        		this.dsCmnctIncmgJobWtpl.addRow();												//통신실출입작업신청 마스터

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
        	//조회할떄 IP정보를 가져올까..... 공통에서 넘겨주나......
        	var strSvcId    = "search";
        	var strSvcUrl   = "cmm/selectComurmTmprInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsFcltOperMst=dsFcltOperMst"
        					+ " dsCmnctIncmgJobWtpl=dsCmnctIncmgJobWtpl"
        					+ " dsCmnctIncmgDtl=dsCmnctIncmgDtl"
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
        	var strSvcId    = strSvcId;
        	var strSvcUrl   = strSvcUrl;
        	var inData      = "dsWfInfo=" + this.FV_DS_OTPT_WORK_FLOW_INFO + ":U"	//WorkFlow 정보
        					+ " dsFcltOperMst=dsFcltOperMst:A"						//시설운영마스터
        					+ " dsCmnctIncmgJobWtpl=dsCmnctIncmgJobWtpl:A"			//통신실출입작업마스터
        					+ " dsCmnctIncmgDtl=dsCmnctIncmgDtl"					//통신실출입작업 내역상세
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
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0) {
        		return;
        	}

        	switch(svcID) {

        		case "search": //조회

        			this.cfnGetAplySeNm({ id:"getAplySeNm", cbf:"fnCallback", aplySeCd:"TSPCMM007" });

        			if(this.dsCmnctIncmgJobWtpl.getRowCount() == 0) {
        				this.dsCmnctIncmgJobWtpl.addRow();
        			}

        			this.fnStepCtrl();	//task별 화면제어

        			break;

        		case this.RaonkUpload.RAONKUPLOAD_UploadComplete.name :

        			// 파일 업로드 결과를 첨부파일 데이터셋에 설정
        			for(var i = 0; i < this.dsAtchRslt.rowcount; i++) {
        			    // 첨부파일관리번호
        				this.dsAtfl.setColumn(this.dsAtfl.findRow("colId", this.dsAtchRslt.getColumn(i, "colId")), "atflMngNo", this.dsAtchRslt.getColumn(i, "atflMngNo"));
        			}

        			//정보저장
        			var vStrSvcId  = "saveComurmAply";
        			var vStrSvcUrl = "cmm/saveComurmAply.do";
        			this.fnSave(vStrSvcId, vStrSvcUrl);

        			break;

        		case this.dsAtflArtclList.name : // 첨부파일항목목록조회
        			this.dsFile.clear();
        			for(var i = 0; i < this.dsAtflArtclList.rowcount; i++) {
        				this.dsFile.addColumn(this.dsAtflArtclList.getColumn(i, "cdId"), "STRING");
        			}
        			this.dsFile.addRow();

        			break;

        		case "getAplySeNm" :  // 공통코드(신청구분)

        			this.dsSearch.setColumn(0, "aplySeCd", "TSPCMM007");
        			this.dsSearch.setColumn(0, "aplySeNm", this.cfnGvbkAplySeNm());
        			this.Div00.form.div00.form.edtAplySeNm.set_value(this.dsSearch.getColumn(0, "aplySeNm"));

        			break;

        		case "comurmTmprStrg" :				//임시저장

        			this.gfnAlertMsg("save", "CST_003");	//정상적으로 처리되었습니다.
        			this.gfnCloseMenu("MNG_0000000309");	//통신실출입작업 신청화면
        			this.gfnCloseMenu("MNG_0000000223");	//통신서비스처리 목록
        			this.fnMovePage('MNG_0000000309', 'MNG_0000000223', 'work::SVC/CMM/LIF030M00.xfdl');
        			if(this.pvView == "popup")this.close("reflash");

        			break;

        		case "comurmAply" :					//신청

        			this.gfnAlertMsg("save", "CST_003");	//정상적으로 처리되었습니다.
        			this.gfnCloseMenu("MNG_0000000309");	//통신실출입작업 신청화면
        			this.gfnCloseMenu("MNG_0000000223");	//통신서비스처리 목록
        			this.fnMovePage('MNG_0000000309', 'MNG_0000000223', 'work::SVC/CMM/LIF030M00.xfdl');
        			if(this.pvView == "popup")this.close("reflash");

        			break;

        		case "comurmAplyRtrcn" :					//신청취소

        			this.gfnAlertMsg("save", "CST_003");	//정상적으로 처리되었습니다.
        			this.gfnCloseMenu("MNG_0000000309");	//통신실출입작업 신청화면
        			this.gfnCloseMenu("MNG_0000000223");	//통신서비스처리 목록
        			this.fnMovePage('MNG_0000000309', 'MNG_0000000223', 'work::SVC/CMM/LIF030M00.xfdl');
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
        	//신청서비스구분 필수항목
        	var vAplySeCd = this.dsFcltOperMst.getColumn(0, "aplySeCd");					//신청서비스구분
        	if(this.gfnIsNull(vAplySeCd)) {
        		this.gfnAlertMsg("msg", "CST_004", ["신청서비스구분"]);							//{0}은 필수입력항목입니다.
        		this.setStepIndex(0);
        		return false;
        	}


        	/*********************** 작업개요 start*************************************/





        	/*********************** 개인정보동의 start*************************************/
        	var vCurrYmdHs  = (this.gfnGetDate("time")).substr(0, 12);	//현재일시
        	var vCurDate = this.gfnGetDate();
        	//작업시작일과 종료일은 1주일 이내만 가능합니다.
        	this.dsCmnctIncmgJobWtpl.getColumn(0, "jobBgngYmd");	//작업시작일
        	this.dsCmnctIncmgJobWtpl.getColumn(0, "jobEndYmd");		///작업종료일


        	//작업시작시간은 현재시간 이후만 가능합니다.




        	/*********************** 작업내용 start*************************************/





        };

        /**************************************************************************
         * @name : fnStepCtrl
         * @description : workflow 별 화면 제어
         ***************************************************************************/
        this.fnStepCtrl = function()
        {
        	var curTaskCd = this.dsFcltOperMst.getColumn(0, "taskCd");
        	switch(curTaskCd) {
        		case "TAS00491":	//3711.신청서작성

        			break;
        		case "TAS00492":	//3712.신청서보완

        			break;
        		case "TAS00493":	//3721.담당자접수

        			break;
        		case "TAS00509":	//3722.과금여부확인

        			break;
        		case "TAS00510":	//3723.서류및입회부서결정

        			break;
        		case "TAS00511":	//3724.입회부서결정

        			break;
        		case "TAS00512":	//3725.검토및확인

        			break;
        		case "TAS00516":	//3731.관련부서설정

        			break;
        		case "TAS00515":	//3732.관련부서처리

        			break;
        		case "TAS00494":	//3733.검토및승인

        			break;
        		case "TAS00499":	//3191.만족도조사

        			break;
        		case "TAS00497":	//종료

        			break;
        		default:
        	}
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
        	this.dsFcltOperMst.setColumn(0, "taskCd"    , wfInfo.jobPrcsPrgrsSeCd        );  // 현재업무코드
        	this.dsFcltOperMst.setColumn(0, "nextTaskCd", wfInfo.nextStepJobPrcsPrgrsSeCd);  // 다음업무코드

        	var vBtnNm = wfInfo.prcsSeCdNm;
        	var vBtnId = wfInfo.prcsSeCd;

        	if("CTL00962:임시저장,CTL01013:신청취소,CTL00951:미처리종료,CTL01023:미처리종료,CTL01024:미처리종료".indexOf(wfInfo.prcsSeCd) == -1) {
        		if(!this.fnValiChk()){return;}
        	}

        	var vStrSvcId  = "saveComurmAply";
        	var vStrSvcUrl = "cmm/saveComurmAply.do";

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

        this.CST015M00_onstepchanged = function(obj,e)
        {
        	this.divBtn.positionstep     = e.postindex;  // 버튼
        	this.tabStep.positionstep    = e.postindex;  // 스텝
        	this.tabStep.tabindex        = this.getStepIndex();
        };

        this.CST015M00_onkeydown = function(obj,e)
        {
        	if(e.shiftkey && e.altkey) {
        		if(e.keycode == 37) {
        			this.setStepIndex(this.getStepIndex() == 0 ? this.getStepCount() - 1 : this.getStepIndex() - 1);
        		} else if(e.keycode == 39) {
        			this.setStepIndex(this.getStepIndex() == this.getStepCount() - 1 ? 0 : this.getStepIndex() + 1);
        		}
        	}
        };

        this.CST015M00_onsize = function(obj,e)
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
        			var oRow = this.parent.dsCmnctIncmgJobWtpl.findRow("colId", this.upatflinfo.colid);
        			this.parent.dsCmnctIncmgJobWtpl.setColumn(oRow, "atflMngInfo", oFile.userdata.strName + '(' + oFile.userdata.nSize + ')');
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

        			var oRow = this.parent.dsCmnctIncmgJobWtpl.findRow("colId", this.upatflinfo.colid);
        			this.parent.dsCmnctIncmgJobWtpl.setColumn(oRow, "atflMngInfo", "");
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

        			var oRow = this.dsCmnctIncmgJobWtpl.findRow("colId", colId);
        			this.dsCmnctIncmgJobWtpl.setColumn(oRow, "atflMngInfo", this.dsAtfl.getColumn(i, "orgnlFileNm") + '(' + this.dsAtfl.getColumn(i, "fileSz") + ')');	// 파일풀명
        		}
            };
        	this.resetScroll();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.CST015M00_onsize,this);
            this.addEventHandler("onstepchanged",this.CST015M00_onstepchanged,this);
            this.addEventHandler("onkeydown",this.CST015M00_onkeydown,this);
            this.tabStep.addEventHandler("onchanged",this.tabStep_onchanged,this);
            this.tabStep.addEventHandler("onkeydown",this.CST015M00_onkeydown,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddFile",this.RaonkUpload_RAONKUPLOAD_AfterAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_CreationComplete",this.RaonkUpload_RAONKUPLOAD_CreationComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_UploadComplete",this.RaonkUpload_RAONKUPLOAD_UploadComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_OnError",this.RaonkUpload_RAONKUPLOAD_OnError,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeAddFile",this.RaonkUpload_RAONKUPLOAD_BeforeAddFile,this);
            this.dsAtfl.addEventHandler("onload",this.dsAtfl_onload,this);
            this.dsCnvyMttrCn.addEventHandler("onload",this.dsCnvyMttrCn_onload,this);
        };
        this.loadIncludeScript("CST015M00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
