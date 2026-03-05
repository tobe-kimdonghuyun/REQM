(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LIF080M00");
            this.set_titletext("신청서작성");
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
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobNm\" type=\"STRING\" size=\"256\"/><Column id=\"cpstArtclCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyKndCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyKndNm\" type=\"STRING\" size=\"256\"/><Column id=\"endCd\" type=\"STRING\" size=\"256\"/><Column id=\"endNm\" type=\"STRING\" size=\"256\"/><Column id=\"docCd\" type=\"STRING\" size=\"256\"/><Column id=\"docNm\" type=\"STRING\" size=\"256\"/><Column id=\"srvcCd\" type=\"STRING\" size=\"256\"/><Column id=\"srvcNm\" type=\"STRING\" size=\"256\"/><Column id=\"srvcAplyInfoIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"rcptMdaCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsDt\" type=\"STRING\" size=\"256\"/><Column id=\"actlEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"actlBgngDt\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/><Column id=\"aplyDt\" type=\"STRING\" size=\"256\"/><Column id=\"rcptDt\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"mdfcnDt\" type=\"STRING\" size=\"256\"/><Column id=\"dmndPrdBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"dmndPrdEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"acrdCmptnDt\" type=\"STRING\" size=\"256\"/><Column id=\"planBgngDt\" type=\"STRING\" size=\"256\"/><Column id=\"planEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"cmptnHpeDt\" type=\"STRING\" size=\"256\"/><Column id=\"custTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"custTypeNm\" type=\"STRING\" size=\"256\"/><Column id=\"bldgSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"bldgSeNm\" type=\"STRING\" size=\"256\"/><Column id=\"zoneSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"zoneSeNm\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstnInfoRnb\" type=\"STRING\" size=\"256\"/><Column id=\"pstnInfoRnbNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyTtlNm\" type=\"STRING\" size=\"256\"/><Column id=\"actnPlanCn\" type=\"STRING\" size=\"256\"/><Column id=\"srvcDmndCnIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"srvcDmndCn\" type=\"STRING\" size=\"256\"/><Column id=\"srvcAplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"srvcAplySeNm\" type=\"STRING\" size=\"256\"/><Column id=\"splmntDmndRsnCn\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtChcYn\" type=\"STRING\" size=\"256\"/><Column id=\"prvcClctEsntlAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"prvcClctEsntlAgreYn2\" type=\"STRING\" size=\"256\"/><Column id=\"wtohAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"dptyRegYn\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtHwrtInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"prvcClctChcAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntHwrtInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptAplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptPstnInfoCn\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptCtrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrNm\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrTelno\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrMblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"ownrId\" type=\"STRING\" size=\"256\"/><Column id=\"ownrNm\" type=\"STRING\" size=\"256\"/><Column id=\"ownrInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"ownrInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"ownrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"ownrDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"ownrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"ownrJobGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrJobGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrJobGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtPrcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtPrcrJobGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"clrId\" type=\"STRING\" size=\"256\"/><Column id=\"clrNm\" type=\"STRING\" size=\"256\"/><Column id=\"mdfrId\" type=\"STRING\" size=\"256\"/><Column id=\"mdfrNm\" type=\"STRING\" size=\"256\"/><Column id=\"payPicSmYn\" type=\"STRING\" size=\"256\"/><Column id=\"payPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"payPicTelno\" type=\"STRING\" size=\"256\"/><Column id=\"payPicMblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"clmMtdCd\" type=\"STRING\" size=\"256\"/><Column id=\"clmCustCd\" type=\"STRING\" size=\"256\"/><Column id=\"clmZip\" type=\"STRING\" size=\"256\"/><Column id=\"clmAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmDtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmEml\" type=\"STRING\" size=\"256\"/><Column id=\"clmEml1\" type=\"STRING\" size=\"256\"/><Column id=\"clmEml2\" type=\"STRING\" size=\"256\"/><Column id=\"txivEml\" type=\"STRING\" size=\"256\"/><Column id=\"txivEml1\" type=\"STRING\" size=\"256\"/><Column id=\"txivEml2\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnRspnsYn\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnRspnsDt\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclNm1\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclNm2\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnArtclNm3\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnExmnCn1\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnExmnCn2\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnExmnCn3\" type=\"STRING\" size=\"256\"/><Column id=\"cnvyMttrCn\" type=\"STRING\" size=\"256\"/><Column id=\"prtcZoneAdpsDpctFrtsdPath\" type=\"STRING\" size=\"256\"/><Column id=\"prtcZoneAdpsDpctBaksdPath\" type=\"STRING\" size=\"256\"/><Column id=\"carDrvnLcnDpctPath\" type=\"STRING\" size=\"256\"/><Column id=\"bizcrdPhotoFilePath\" type=\"STRING\" size=\"256\"/><Column id=\"fbctnDcmntPblcnPrdctSpcfatPath\" type=\"STRING\" size=\"256\"/><Column id=\"insrncJoinPrdocPath\" type=\"STRING\" size=\"256\"/><Column id=\"elcttrFrtPhotoPath\" type=\"STRING\" size=\"256\"/><Column id=\"elcttrRarPhotoPath\" type=\"STRING\" size=\"256\"/><Column id=\"elcttrFlkPhotoPath\" type=\"STRING\" size=\"256\"/><Column id=\"payPicPrvcClctUtztnWtcsPath\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCn", this);
            obj._setContents("<ColumnInfo><Column id=\"sysSe\" type=\"STRING\" size=\"256\"/><Column id=\"utztnArtcl\" type=\"STRING\" size=\"256\"/><Column id=\"prps\" type=\"STRING\" size=\"256\"/><Column id=\"prd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"sysSe\">입주자서비스\\n포털</Col><Col id=\"utztnArtcl\">[필수]납부담당자 이름, 납부담당자 일반전화번호&lt;br&gt;</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAplyKndList", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBldgSeList", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCnvyMttr", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/><Column id=\"cnvyMttrCn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"btnPayPicPrvcClctAgreFile_fullName\" type=\"STRING\" size=\"256\"/><Column id=\"btnPayPicPrvcClctAgreFile_orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"btnPayPicPrvcClctAgreFile_fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"btnPayPicPrvcClctAgreFile_colId\" type=\"STRING\" size=\"256\"/><Column id=\"btnPblcnPrdctSpcfatFile_fullName\" type=\"STRING\" size=\"256\"/><Column id=\"btnPblcnPrdctSpcfatFile_orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"btnPblcnPrdctSpcfatFile_fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"btnPblcnPrdctSpcfatFile_colId\" type=\"STRING\" size=\"256\"/><Column id=\"btnInsrncJoinPrdocFile_fullName\" type=\"STRING\" size=\"256\"/><Column id=\"btnInsrncJoinPrdocFile_orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"btnInsrncJoinPrdocFile_fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"btnInsrncJoinPrdocFile_colId\" type=\"STRING\" size=\"256\"/><Column id=\"btnElcttrFrtPhotoFile_fullName\" type=\"STRING\" size=\"256\"/><Column id=\"btnElcttrFrtPhotoFile_orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"btnElcttrFrtPhotoFile_fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"btnElcttrFrtPhotoFile_colId\" type=\"STRING\" size=\"256\"/><Column id=\"btnElcttrRarPhotoFile_fullName\" type=\"STRING\" size=\"256\"/><Column id=\"btnElcttrRarPhotoFile_orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"btnElcttrRarPhotoFile_fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"btnElcttrRarPhotoFile_colId\" type=\"STRING\" size=\"256\"/><Column id=\"btnElcttrFlkPhotoFile_fullName\" type=\"STRING\" size=\"256\"/><Column id=\"btnElcttrFlkPhotoFile_orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"btnElcttrFlkPhotoFile_fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"btnElcttrFlkPhotoFile_colId\" type=\"STRING\" size=\"256\"/><Column id=\"btnPrtcZoneAdpsFrtsdFile_fullName\" type=\"STRING\" size=\"256\"/><Column id=\"btnPrtcZoneAdpsFrtsdFile_orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"btnPrtcZoneAdpsFrtsdFile_fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"btnPrtcZoneAdpsFrtsdFile_colId\" type=\"STRING\" size=\"256\"/><Column id=\"btnPrtcZoneAdpsBaksdFile_fullName\" type=\"STRING\" size=\"256\"/><Column id=\"btnPrtcZoneAdpsBaksdFile_orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"btnPrtcZoneAdpsBaksdFile_fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"btnPrtcZoneAdpsBaksdFile_colId\" type=\"STRING\" size=\"256\"/><Column id=\"btnCarLcnDpctFile_fullName\" type=\"STRING\" size=\"256\"/><Column id=\"btnCarLcnDpctFile_orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"btnCarLcnDpctFile_fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"btnCarLcnDpctFile_colId\" type=\"STRING\" size=\"256\"/><Column id=\"btnBizcrdPhotoFile_fullName\" type=\"STRING\" size=\"256\"/><Column id=\"btnBizcrdPhotoFile_orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"btnBizcrdPhotoFile_fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"btnBizcrdPhotoFile_colId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divGuide","1590.00","135","450","385",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("false");
            obj.set_cssclass("div_GD_Tip");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","18.00","15","262","45",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_cssclass("btn_WF_Quick");
            this.divGuide.addChild(obj.name, obj);

            obj = new Static("sta00","18.00","122","375","50",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("1");
            obj.set_text("선택했을때 class : btn_WF_Quick_S 적용");
            this.divGuide.addChild(obj.name, obj);

            obj = new Button("btn00_00","18.00","68","262","45",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("2");
            obj.set_text("기본정보");
            obj.set_cssclass("btn_WF_Quick_S");
            this.divGuide.addChild(obj.name, obj);

            obj = new Button("Button00_00","20.00","205","34","34",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.divGuide.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","64.00","205","34","34",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divGuide.addChild(obj.name, obj);

            obj = new Static("sta00_00","20.00","255","375","50",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("5");
            obj.set_text("접혀있을때 class : btn_WF_ACPlus 로 접음");
            this.divGuide.addChild(obj.name, obj);

            obj = new Div("divTitle","0","0","1420","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","divTitle:10",null,"5167","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickFrBg");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("divInfoGuide","1660.00","262","100%","300",null,null,null,null,"300",null,this.divForm.form);
            obj.set_taborder("8");
            obj.set_text("서비스 흐름 및 작업방법 안내");
            obj.set_cssclass("div_WF_InfoGuide");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnSchClose",null,"10","34","34","10",null,null,null,null,null,this.divForm.form.divInfoGuide.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_ACPlus");
            this.divForm.form.divInfoGuide.addChild(obj.name, obj);

            obj = new Div("Div00","0","0","100%","509",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan03_01","10.00","98","300","144",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("18");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRgtrTelno\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel04_02_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan03_02","10.00","98","300","144",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("20");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRgtrMblTelno\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel04_02_00_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtRgtrTelno","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("25");
            obj.set_readonly("true");
            obj.set_value("02-123-4567");
            obj.set_text("02-123-4567");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan02_","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRgtrNm\"/><PanelItem id=\"PanelItem02\" componentid=\"edtRgtrNm\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00","30","50","100%","50",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("30");
            obj.set_text("신청자정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan02_02","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRgtrInstNm\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRgtrInstNm\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staRgtrTelno","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("17");
            obj.set_text("등록자 전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Button("btnMinAplcntInfo","1390.00","18","34","34",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("31");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel01_02","710.00","50","100%","50",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("32");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnMinAplcntInfo\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("sub_tit01","0","0","100%","50",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("33");
            obj.set_background("#ffffff");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staAplySeNm","10","98","300","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("신청구분 ");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Button("btnHstry","48","62","120","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("23");
            obj.set_text("과거신청이력불러오기");
            obj.set_fittocontents("width");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00","763","63","100%","56",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("22");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("spacebetween");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staAplySeNm\"/><PanelItem id=\"PanelItem01\" componentid=\"btnHstry\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_01","10.00","98","100%","101",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAplySeNm\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","112",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan00_01\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staAplcntNm","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtAplcntNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_value("신청자 성명");
            obj.set_text("신청자 성명");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("10");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan01_02\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan01_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staAplcntNm\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAplcntNm\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtAplySeNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staRgtrNm","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("11");
            obj.set_text("등록자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staAplcntInstNm","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("7");
            obj.set_text("신청자 회사명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtAplcntInstNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_value("회사명");
            obj.set_text("회사명");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan01_02","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staAplcntInstNm\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAplcntInstNm\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("sta00_00","20","20","100%","48",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("26");
            obj.set_text("전화번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 등록 및 수정이 가능합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel04_02_00","0","685","100%","98",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("24");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"edtRgtrTelno\"/><PanelItem id=\"PanelItem01\" componentid=\"sta00_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staRgtrInstNm","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("13");
            obj.set_text("등록자 회사명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("16");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan02_\"/><PanelItem id=\"PanelItem02\" componentid=\"pan02_02\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtRgtrInstNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            obj.set_value("회사명");
            obj.set_text("회사명");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staRgtrMblTelno","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("19");
            obj.set_text("등록자 휴대폰 번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtRgtrMblTelno","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("27");
            obj.set_readonly("true");
            obj.set_value("010-123-4567");
            obj.set_text("010-123-4567");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","20","20","100%","48",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("28");
            obj.set_text("휴대폰번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 등록 및 수정이 가능합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan03","0","60","100.00%","155",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("21");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan03_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan03_02\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtRgtrNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("34");
            obj.set_readonly("true");
            obj.set_value("등록자 성명");
            obj.set_text("등록자 성명");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel04_02_00_00","0","685","100%","98",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("29");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"edtRgtrMblTelno\"/><PanelItem id=\"PanelItem01\" componentid=\"sta00_00_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","0","Div00:30","100%","988",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staPayPicSmYn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("납부담당자  동일여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan00_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPayPicSmYn\"/><PanelItem id=\"PanelItem03\" componentid=\"rdoPayPicSmYn\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staPayPicNm","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("3");
            obj.set_text("납부담당자 이름");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_01","10.00","98","300","126",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPayPicNm\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel04_02_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_02","10.00","98","300","1",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtPayPicNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("8");
            obj.set_readonly("false");
            obj.set_displaynulltext("납부담당자 성명  입력");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan03_01","10.00","98","300","144",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPayPicTelno\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel04_02_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staPayPicTelno","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("11");
            obj.set_text("납부담당자 일반전화번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staMblPayPicTelno","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("16");
            obj.set_text("납부담당자 휴대전화번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtPayPicTelno","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("12");
            obj.set_readonly("false");
            obj.set_displaynulltext("전화번호 입력");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel04_02_00_00","0","685","100%","98",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("14");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"edtPayPicTelno\"/><PanelItem id=\"PanelItem01\" componentid=\"sta00_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtPayPicMblTelno","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("17");
            obj.set_readonly("false");
            obj.set_displaynulltext("휴대전화번호 입력");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel04_02_00_00_00","0","685","100%","98",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("19");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"edtPayPicMblTelno\"/><PanelItem id=\"PanelItem01\" componentid=\"sta00_00_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan03_02","10.00","98","300","144",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("20");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staMblPayPicTelno\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel04_02_00_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staPayPicPrvcClctAgre","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("22");
            obj.set_text("납부담당자의 개인정보 수집 및  이용 동의서");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Button("btnPayPicPrvcClctAgreSample","813","76","120","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("23");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Button("btnPayPicPrvcClctAgreFile","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("24");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.getSetter("upcolid").set("payPicPrvcClctAgreFile");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("panBtnFile","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("25");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnPayPicPrvcClctAgreSample\"/><PanelItem id=\"PanelItem00\" componentid=\"btnPayPicPrvcClctAgreFile\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("panTitle","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("26");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPayPicPrvcClctAgre\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("27");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staPayPicPrvcClctAgreCnt","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("28");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("29");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("panFileNum","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("30");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem01\" componentid=\"staPayPicPrvcClctAgreCnt\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Button("btnPayPicPrvcClctAgreDel","512","135","125","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("31");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("panBtnDel","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("32");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnPayPicPrvcClctAgreDel\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staAddr","0.00","0","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("35");
            obj.set_text("청구지우편번호/청구지주소");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Div("divEdtPop","780.00","635","305","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("36");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtZip","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.Div01.form.divEdtPop.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            obj.set_displaynulltext("우편번호 검색");
            this.divForm.form.Div01.form.divEdtPop.addChild(obj.name, obj);

            obj = new Button("btnPop","edtZip:-40","0","40","40",null,null,null,null,null,null,this.divForm.form.Div01.form.divEdtPop.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.divForm.form.Div01.form.divEdtPop.addChild(obj.name, obj);

            obj = new Edit("edtAddr","360","637","305","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("37");
            obj.set_readonly("true");
            obj.set_flexgrow("2");
            obj.set_displaynulltext("주소");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtDtlAddr","0.00","46","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("39");
            obj.set_displaynulltext("상세주소");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staClmSe","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("42");
            obj.set_text("청구방식");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan02_","10.00","98","300","110",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("43");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staClmSe\"/><PanelItem id=\"PanelItem03\" componentid=\"rdoClmSe\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Radio("rdoClmSe","127","203","100%","80",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("45");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("horizontal");
            var divForm_form_Div01_form_rdoClmSe_innerdataset = new nexacro.NormalDataset("divForm_form_Div01_form_rdoClmSe_innerdataset", obj);
            divForm_form_Div01_form_rdoClmSe_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">이메일(청구서스캔본송부)</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">지로용지(청구서원본방문수령)</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div01_form_rdoClmSe_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static03","507","1122","14","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("54");
            obj.set_text("@");
            obj.set_fittocontents("width");
            obj.set_textAlign("center");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel03","551","1140","300","172",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("46");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan02_02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan02_02_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staAcuntEmlAddr","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("47");
            obj.set_text("청구서 이메일주소");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan02_02_00","10.00","98","100%","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("48");
            obj.set_type("vertical");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staAcuntEmlAddr\"/><PanelItem id=\"PanelItem03\" componentid=\"panEmail\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtAcuntEmlAddr2","10.00","158","30%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("53");
            obj.set_readonly("false");
            obj.set_displaynulltext("이메일 주소 입력");
            obj.set_flexgrow("1");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staTxivEmlAddr","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("49");
            obj.set_text("세금계산서 이메일주소");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cboAcuntEmlAddr","200.00","128","30%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("55");
            obj.set_innerdataset("ds_cbo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan02_02_00_00","10.00","98","100%","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("50");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTxivEmlAddr\"/><PanelItem id=\"PanelItem03\" componentid=\"panEmail00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtAcuntEmlAddr1","10.00","158","30%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("52");
            obj.set_readonly("false");
            obj.set_displaynulltext("이메일 주소 입력");
            obj.set_flexgrow("1");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("panEmail","386","1172","100%","50",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("51");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"edtAcuntEmlAddr1\"/><PanelItem id=\"PanelItem03\" componentid=\"Static03\"/><PanelItem id=\"PanelItem02\" componentid=\"edtAcuntEmlAddr2\"/><PanelItem id=\"PanelItem04\" componentid=\"cboAcuntEmlAddr\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtTxivEmlAddr1","10.00","158","30%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("56");
            obj.set_readonly("false");
            obj.set_displaynulltext("이메일 주소 입력");
            obj.set_flexgrow("1");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static03_00","507","1122","14","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("57");
            obj.set_text("@");
            obj.set_fittocontents("width");
            obj.set_textAlign("center");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtTxivEmlAddr2","10.00","158","30%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("58");
            obj.set_readonly("false");
            obj.set_displaynulltext("이메일 주소 입력");
            obj.set_flexgrow("1");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cboTxivEmlAddr","200.00","128","30%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("59");
            obj.set_innerdataset("ds_cbo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("panEmail00","386","1172","100%","50",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("60");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"edtTxivEmlAddr1\"/><PanelItem id=\"PanelItem03\" componentid=\"Static03_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtTxivEmlAddr2\"/><PanelItem id=\"PanelItem04\" componentid=\"cboTxivEmlAddr\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00","30","50","100%","50",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("61");
            obj.set_text("청구 정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00","1362.00","10","34","34",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("62");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Button("btnMinClmInfo","1390.00","18","34","34",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("63");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_02","710.00","50","100%","50",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("64");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"btnMinClmInfo\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("sub_tit01","0","0","100%","50",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("65");
            obj.set_background("#ffffff");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan00_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","137",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("6");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan01_02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100.00%","155",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("21");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan03_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan03_02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("panFile","0","42","100%","201",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("34");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan03","0","60","100.00%","166",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("41");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan04","0","60","100.00%","183",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("44");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan02_\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel03\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta00_00","20","20","100%","30",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("9");
            obj.set_text("신청자정보와 동일시 신청자명 자동입력");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","20","20","100%","48",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("13");
            obj.set_text("신청자정보와 동일시 전화번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 입력하세요.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00","20","20","100%","48",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("18");
            obj.set_text("신청자정보와 동일시 휴대전화번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 입력하세요.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("33");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("panAddress","200","641","100%","45",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("38");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divEdtPop\"/><PanelItem id=\"PanelItem02\" componentid=\"edtAddr\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01","20.00","0","980","156",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("40");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staAddr\"/><PanelItem id=\"PanelItem03\" componentid=\"panAddress\"/><PanelItem id=\"PanelItem01\" componentid=\"edtDtlAddr\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Radio("rdoPayPicSmYn","127","203","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("7");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divForm_form_Div01_form_rdoPayPicSmYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div01_form_rdoPayPicSmYn_innerdataset", obj);
            divForm_form_Div01_form_rdoPayPicSmYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">신청자와 동일하지 않음</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">신청자와 동일</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div01_form_rdoPayPicSmYn_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel04_02_00","0","685","100%","80",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("10");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"edtPayPicNm\"/><PanelItem id=\"PanelItem01\" componentid=\"sta00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Grid("grdPayPicPrvcClctAgre","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("66");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:btnPayPicPrvcClctAgreFile_fullName\" cssclass=\"expr:dataset.parent.gfnIsNull(btnPayPicPrvcClctAgreFile_fullName) ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.gfnIsNull(btnPayPicPrvcClctAgreFile_fullName) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.dsAtrb.getColumn(0, &quot;roWrtSplmntStep&quot;)|| dataset.parent.gfnIsNull(btnPayPicPrvcClctAgreFile_fullName) ? &quot;none&quot; : &quot;button&quot;\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_01","20","20","100%","30",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("67");
            obj.set_text("JPG,PNG,BMP,PDF만 첨부가능");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01","192","1038","100.00%","80",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("68");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grdPayPicPrvcClctAgre\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00_00_00_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Div("Div02","0","Div01:30","100%","563",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan02_01","10.00","98","100%","116",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCustType\"/><PanelItem id=\"PanelItem03\" componentid=\"rdoCustType\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan02_02","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00","325","437","100%","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("11");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan02_02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan02_02_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan02_02_01","10.00","98","300","1",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staDmndBgngYmd","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("13");
            obj.set_text("요청기간시작일자");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan02_02_00","10.00","98","100%","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staDmndBgngYmd\"/><PanelItem id=\"PanelItem02\" componentid=\"calDmndBgngYmd\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan02_02_00_00","10.00","98","100%","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("18");
            obj.set_type("vertical");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"cal00_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("16");
            obj.set_text("요청기간종료일자(유효기간)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staSrvcAplySe","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("19");
            obj.set_text("서비스신청구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan02_04_00","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("20");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSrvcAplySe\"/><PanelItem id=\"PanelItem03\" componentid=\"cboSrvcAplySe\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan02_02_02_00","10.00","98","300","1",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("21");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00","30","50","100%","50",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("24");
            obj.set_text("신청 정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btnMinAplyInfo","1390.00","18","34","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_02","710.00","50","100%","50",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("26");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnMinAplyInfo\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("sub_tit01","0","0","100%","50",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("27");
            obj.set_background("#ffffff");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan02_\"/><PanelItem id=\"PanelItem02\" componentid=\"pan02_03\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","127",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("7");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan02_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("10");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan02_02\"/><PanelItem id=\"PanelItem03\" componentid=\"pan02_02_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staAplyKnd","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("0");
            obj.set_text("신청종류");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Radio("rdoAplyKnd","127","203","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("1");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divForm_form_Div02_form_rdoAplyKnd_innerdataset = new nexacro.NormalDataset("divForm_form_Div02_form_rdoAplyKnd_innerdataset", obj);
            divForm_form_Div02_form_rdoAplyKnd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">CARREQTYPE001</Col><Col id=\"datacolumn\">전동차등록신청</Col></Row><Row><Col id=\"codecolumn\">CARREQTYPE002</Col><Col id=\"datacolumn\">전동차운전허가신청</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div02_form_rdoAplyKnd_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staCustType","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("4");
            obj.set_text("고객유형");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Radio("rdoCustType","127","203","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("5");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divForm_form_Div02_form_rdoCustType_innerdataset = new nexacro.NormalDataset("divForm_form_Div02_form_rdoCustType_innerdataset", obj);
            divForm_form_Div02_form_rdoCustType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">CARCOMTYPE001</Col><Col id=\"datacolumn\">공항공사</Col></Row><Row><Col id=\"codecolumn\">CARCOMTYPE002</Col><Col id=\"datacolumn\">자회사</Col></Row><Row><Col id=\"datacolumn\">항공사</Col><Col id=\"codecolumn\">CARCOMTYPE003</Col></Row><Row><Col id=\"datacolumn\">공항철도</Col><Col id=\"codecolumn\">CARCOMTYPE004</Col></Row><Row><Col id=\"datacolumn\">기타 고객</Col><Col id=\"codecolumn\">CARCOMTYPE005</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div02_form_rdoCustType_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("sta00_00","20","20","100%","30",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("8");
            obj.set_text("1회 신청 시, 요청기간 시작일을 기준으로 유효기간은 2년이며 연장하는 경우 2년 단위로 갱신 신청");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staBldg","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("28");
            obj.set_text("건물구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan01_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("29");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staBldg\"/><PanelItem id=\"PanelItem03\" componentid=\"cboBldg\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staZone","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("30");
            obj.set_text("구역구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan01_02","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("31");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staZone\"/><PanelItem id=\"PanelItem03\" componentid=\"rdoZone\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan03","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("32");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan01_02\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan04","0","60","100%","96",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("22");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan02_04_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan02_02_02_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Radio("rdoZone","127","203","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("33");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divForm_form_Div02_form_rdoZone_innerdataset = new nexacro.NormalDataset("divForm_form_Div02_form_rdoZone_innerdataset", obj);
            divForm_form_Div02_form_rdoZone_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">TSCWPLARA001</Col><Col id=\"datacolumn\">A/S보호구역</Col></Row><Row><Col id=\"codecolumn\">TSCWPLARA002</Col><Col id=\"datacolumn\">L/S일반구역</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div02_form_rdoZone_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Calendar("calDmndBgngYmd","200.00","728","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("14");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20240702");
            obj.set_type("normal");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Calendar("cal00_00_00","200.00","728","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("17");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20240702");
            obj.set_type("normal");
            obj.set_readonly("true");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Combo("cboSrvcAplySe","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("23");
            obj.set_innerdataset("dsAplyKndList");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan02_","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staAplyKnd\"/><PanelItem id=\"PanelItem03\" componentid=\"rdoAplyKnd\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan02_03","10.00","98","300","1",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("34");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Combo("cboBldg","-191.00","391","100.00%","39",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("35");
            obj.set_innerdataset("dsBldgSeList");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Div("Div03","0","30","100%","257",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staPblcnPrdctSpcfat","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("0");
            obj.set_text("재직서 발행제품 사양서");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnFile","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("3");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnPblcnPrdctSpcfatSample\"/><PanelItem id=\"PanelItem00\" componentid=\"btnPblcnPrdctSpcfatFile\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panTitle","0","124","100%","92",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("4");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPblcnPrdctSpcfat\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("5");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staPblcnPrdctSpcfatCnt","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("6");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static02","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("7");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFileNum","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("8");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem01\" componentid=\"staPblcnPrdctSpcfatCnt\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnDel","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnPblcnPrdctSpcfatDel\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFile","0","42","300","196",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("12");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 0px 0px 0px");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("4");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem03\" componentid=\"grdPblcnPrdctSpcfat\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staInsrncJoinPrdoc","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("14");
            obj.set_text("보험가입증서");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btnInsrncJoinPrdocSample","813","76","120","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("15");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btnInsrncJoinPrdocFile","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("16");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.getSetter("upcolid").set("insrncJoinPrdocFile");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("17");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnInsrncJoinPrdocSample\"/><PanelItem id=\"PanelItem00\" componentid=\"btnInsrncJoinPrdocFile\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panTitle00","0","124","100%","92",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("18");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staInsrncJoinPrdoc\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static00_00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("19");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staInsrncJoinPrdocCnt","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("20");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_00","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("21");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFileNum00","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("22");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"staInsrncJoinPrdocCnt\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btnInsrncJoinPrdocDel","512","135","125","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("23");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnDel00","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("24");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnInsrncJoinPrdocDel\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFile00","0","42","300","196",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("27");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 0px 0px 0px");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("4");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"grdInsrncJoinPrdoc\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00","30","50","100%","50",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("29");
            obj.set_text("전동차등록증 제출서류");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btnMinDoc","1390.00","18","34","34",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel01_02","710.00","50","100%","50",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("31");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnMinDoc\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("sub_tit01","0","0","100%","50",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("32");
            obj.set_background("#ffffff");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","207",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("28");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFile\"/><PanelItem id=\"PanelItem02\" componentid=\"panFile00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btnPblcnPrdctSpcfatSample","813","76","120","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("1");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btnPblcnPrdctSpcfatFile","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("2");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.getSetter("upcolid").set("pblcnPrdctSpcfatFile");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btnPblcnPrdctSpcfatDel","512","135","125","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("9");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Grid("grdPblcnPrdctSpcfat","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("13");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:btnPblcnPrdctSpcfatFile_fullName\" cssclass=\"expr:dataset.parent.gfnIsNull(btnPblcnPrdctSpcfatFile_fullName) ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:expr:dataset.parent.gfnIsNull(btnPblcnPrdctSpcfatFile_fullName) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:expr:dataset.parent.dsAtrb.getColumn(0, &quot;roWrtSplmntStep&quot;)|| dataset.parent.gfnIsNull(btnPblcnPrdctSpcfatFile_fullName) ? &quot;none&quot; : &quot;button&quot;\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("11");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("25");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Grid("grdInsrncJoinPrdoc","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("26");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:btnInsrncJoinPrdocFile_fullName\" cssclass=\"expr:dataset.parent.gfnIsNull(insrncJoinPrdocFile_fullName) ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:expr:dataset.parent.gfnIsNull(btnInsrncJoinPrdocFile_fullName) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:expr:dataset.parent.dsAtrb.getColumn(0, &quot;roWrtSplmntStep&quot;)|| dataset.parent.gfnIsNull(btnInsrncJoinPrdocFile_fullName) ? &quot;none&quot; : &quot;button&quot;\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Div("Div04","0","30","100%","671",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00","30","50","100%","50",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("0");
            obj.set_text("전동차등록증 제출사진");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Button("btnMinPhoto","1390.00","18","34","34",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01_02","710.00","50","100%","50",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("2");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnMinPhoto\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("sub_tit01","0","0","100%","50",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("3");
            obj.set_background("#ffffff");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staElcttrFrtPhoto","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("4");
            obj.set_text("전동차 전면 사진");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Button("btnElcttrFrtPhotoSample","813","76","120","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("5");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Button("btnElcttrFrtPhotoFile","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("6");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.getSetter("upcolid").set("elcttrFrtPhotoFile");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panBtnFile02","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("7");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnElcttrFrtPhotoSample\"/><PanelItem id=\"PanelItem00\" componentid=\"btnElcttrFrtPhotoFile\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panTitle02","0","124","100%","92",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("8");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staElcttrFrtPhoto\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile02\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("Static00_02","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("9");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staElcttrFrtPhotoCnt","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("10");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("Static02_02","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("11");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panFileNum02","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("12");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"staElcttrFrtPhotoCnt\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_02\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Button("btnElcttrFrtPhotoDel","512","135","125","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("13");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panBtnDel02","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("14");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnElcttrFrtPhotoDel\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("15");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum02\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel02\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Grid("grdElcttrFrtPhoto","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("16");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:btnElcttrFrtPhotoFile_fullName\" cssclass=\"expr:dataset.parent.gfnIsNull(elcttrFrtPhotoFile_fullName) ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:expr:dataset.parent.gfnIsNull(elcttrFrtPhotoFile_fullName) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:expr:dataset.parent.dsAtrb.getColumn(0, &quot;roWrtSplmntStep&quot;)|| dataset.parent.gfnIsNull(elcttrFrtPhotoFile_fullName) ? &quot;none&quot; : &quot;button&quot;\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panFile02","0","42","300","196",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("17");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 0px 0px 0px");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("4");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_02\"/><PanelItem id=\"PanelItem03\" componentid=\"grdElcttrFrtPhoto\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","207",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("18");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFile02\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staElcttrRarPhoto","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("19");
            obj.set_text("전동차 후면 사진");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Button("btnElcttrRarPhotoSample","813","76","120","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("20");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Button("btnElcttrRarPhotoFile","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("21");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.getSetter("upcolid").set("elcttrRarPhotoFile");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panBtnFile02_00","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("22");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnElcttrRarPhotoSample\"/><PanelItem id=\"PanelItem00\" componentid=\"btnElcttrRarPhotoFile\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panTitle02_00","0","124","100%","92",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("23");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staElcttrRarPhoto\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile02_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("24");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staElcttrRarPhotoCnt","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("25");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("Static02_02_00","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("26");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panFileNum02_00","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("27");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"staElcttrRarPhotoCnt\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_02_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Button("btnElcttrRarPhotoDel","512","135","125","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("28");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panBtnDel02_00","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("29");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnElcttrRarPhotoDel\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_02_00","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("30");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel02_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Grid("grdElcttrRarPhoto","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("31");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:btnElcttrRarPhotoFile_fullName\" cssclass=\"expr:dataset.parent.gfnIsNull(elcttrRarPhotoFile_fullName) ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:expr:dataset.parent.gfnIsNull(elcttrRarPhotoFile_fullName) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:expr:dataset.parent.dsAtrb.getColumn(0, &quot;roWrtSplmntStep&quot;)|| dataset.parent.gfnIsNull(elcttrRarPhotoFile_fullName) ? &quot;none&quot; : &quot;button&quot;\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panFile02_00","0","42","300","196",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("32");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 0px 0px 0px");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("4");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_02_00\"/><PanelItem id=\"PanelItem03\" componentid=\"grdElcttrRarPhoto\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","207",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("33");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFile02_00\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staElcttrFlkPhoto","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("34");
            obj.set_text("전동차 측면 사진");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Button("btnElcttrFlkPhotoSample","813","76","120","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("35");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Button("btnElcttrFlkPhotoFile","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("36");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.getSetter("upcolid").set("elcttrFlkPhotoFile");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panBtnFile02_01","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("37");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnElcttrFlkPhotoSample\"/><PanelItem id=\"PanelItem00\" componentid=\"btnElcttrFlkPhotoFile\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panTitle02_01","0","124","100%","92",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("38");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staElcttrFlkPhoto\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile02_01\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("Static00_02_01","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("39");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("staElcttrFlkPhotoCnt","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("40");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Static("Static02_02_01","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("41");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panFileNum02_01","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("42");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"staElcttrFlkPhotoCnt\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_02_01\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Button("btnElcttrFlkPhotoDel","512","135","125","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("43");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panBtnDel02_01","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("44");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnElcttrFlkPhotoDel\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel00_02_01","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("45");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel02_01\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Grid("grdElcttrFlkPhoto","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("46");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("panFile02_01","0","42","300","196",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("47");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 0px 0px 0px");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("4");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_02_01\"/><PanelItem id=\"PanelItem03\" componentid=\"grdElcttrFlkPhoto\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100.00%","207",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("48");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFile02_01\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Div("Div05","0","30","100%","532",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staPrtcZoneAdpsFrtsd","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("0");
            obj.set_text("보호구역 출입증 사본(앞면)");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("btnPrtcZoneAdpsFrtsdSample","813","76","120","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("1");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panBtnFile","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("3");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnPrtcZoneAdpsFrtsdSample\"/><PanelItem id=\"PanelItem00\" componentid=\"btnPrtcZoneAdpsFrtsdFile\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panTitle","0","124","100%","92",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("4");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPrtcZoneAdpsFrtsd\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("Static00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("5");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staPrtcZoneAdpsFrtsdCnt","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("6");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("Static02","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("7");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panFileNum","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("8");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem01\" componentid=\"staPrtcZoneAdpsFrtsdCnt\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("btnPrtcZoneAdpsFrtsdDel","512","135","125","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("9");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panBtnDel","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnPrtcZoneAdpsFrtsdDel\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panFile","0","42","300","230",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("12");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 0px 0px 0px");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("4");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem03\" componentid=\"grdPrtcZoneAdpsFrtsd\"/><PanelItem id=\"PanelItem04\" componentid=\"sta00_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staPrtcZoneAdpsBaksd","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("14");
            obj.set_text("보호구역 출입증 사본(뒷면)");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("btnPrtcZoneAdpsBaksdSample","813","76","120","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("15");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("btnPrtcZoneAdpsBaksdFile","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("16");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.getSetter("upcolid").set("prtcZoneAdpsBaksdFile");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("17");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnPrtcZoneAdpsBaksdSample\"/><PanelItem id=\"PanelItem00\" componentid=\"btnPrtcZoneAdpsBaksdFile\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panTitle00","0","124","100%","92",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("18");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPrtcZoneAdpsBaksd\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("Static00_00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("19");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staPrtcZoneAdpsBaksdCnt","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("20");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("Static02_00","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("21");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panFileNum00","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("22");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"staPrtcZoneAdpsBaksdCnt\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("btnPrtcZoneAdpsBaksdDel","512","135","125","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("23");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panBtnDel00","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("24");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnPrtcZoneAdpsBaksdDel\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panFile00","520","0","300","230",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("27");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 0px 0px 0px");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("4");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"grdPrtcZoneAdpsBaksd\"/><PanelItem id=\"PanelItem04\" componentid=\"sta00_00_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staCarLcnDpct","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("31");
            obj.set_text("자동차 운전면허증 사본");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("btnCarLcnDpctSample","813","76","120","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("32");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("btnCarLcnDpctFile","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("33");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.getSetter("upcolid").set("carLcnDpctFile");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panBtnFile01","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("34");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnCarLcnDpctSample\"/><PanelItem id=\"PanelItem00\" componentid=\"btnCarLcnDpctFile\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panTitle01","0","124","100%","92",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("35");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCarLcnDpct\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile01\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("Static00_01","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("36");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staCarLcnDpctCnt","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("37");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("Static02_01","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("38");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panFileNum01","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("39");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"staCarLcnDpctCnt\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_01\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("btnCarLcnDpctDel","512","135","125","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("40");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panBtnDel01","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("41");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnCarLcnDpctDel\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panFile01","0","42","300","230",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("45");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 0px 0px 0px");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("4");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_01\"/><PanelItem id=\"PanelItem03\" componentid=\"grdCarLcnDpct\"/><PanelItem id=\"PanelItem04\" componentid=\"sta00_00_01\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staBizcrdPhoto","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("46");
            obj.set_text("번명함 사진 파일");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("btnBizcrdPhotoSample","813","76","120","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("47");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("btnBizcrdPhotoFile","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("48");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.getSetter("upcolid").set("bizcrdPhotoFile");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("49");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnBizcrdPhotoSample\"/><PanelItem id=\"PanelItem00\" componentid=\"btnBizcrdPhotoFile\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00","0","124","100%","92",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("50");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staBizcrdPhoto\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("51");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staBizcrdPhotoCnt","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("52");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("53");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panFileNum00_00","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("54");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"staBizcrdPhotoCnt\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_00_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("btnBizcrdPhotoDel","512","135","125","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("55");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panBtnDel00_00","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("56");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnBizcrdPhotoDel\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("panFile00_00","520","0","300","230",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("60");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 0px 0px 0px");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("4");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"grdBizcrdPhoto\"/><PanelItem id=\"PanelItem04\" componentid=\"sta00_00_00_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00","30","50","100%","50",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("62");
            obj.set_text("운전허가증 제출사진");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("btnMinDrvn","1390.00","18","34","34",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("63");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel01_02","710.00","50","100%","50",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("64");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnMinDrvn\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("sub_tit01","0","0","100%","50",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("65");
            obj.set_background("#ffffff");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","241",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("28");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFile\"/><PanelItem id=\"PanelItem02\" componentid=\"panFile00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","241",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("61");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFile01\"/><PanelItem id=\"PanelItem02\" componentid=\"panFile00_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel00","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("11");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Grid("grdPrtcZoneAdpsFrtsd","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("13");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("25");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Grid("grdPrtcZoneAdpsBaksd","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("26");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("sta00_00","20","20","100%","30",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("29");
            obj.set_text("주민번호 뒷자리 및 출입증 발급번호 마스킹");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","20","20","100%","30",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("30");
            obj.set_text("주민번호 뒷자리 및 출입증 발급번호 마스킹");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("42");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum01\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel01\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Grid("grdCarLcnDpct","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("43");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("sta00_00_01","20","20","100%","30",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("44");
            obj.set_text("주민번호 뒷자리 및 출입증 발급번호 마스킹");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("57");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel00_00\"/></Contents>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Grid("grdBizcrdPhoto","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("58");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00","20","20","100%","30",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("59");
            obj.set_text("354x472 [해상도 200dpi이상]");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Button("btnPrtcZoneAdpsFrtsdFile","124","58","116","40",null,null,null,null,null,null,this.divForm.form.Div05.form);
            obj.set_taborder("2");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.getSetter("upcolid").set("prtcZoneAdpsFrtsdFile");
            this.divForm.form.Div05.addChild(obj.name, obj);

            obj = new Div("Div06","0","30","100%","1016",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_01","-10.00","372","100%","47",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("9");
            obj.set_text("위의 개인정보 수집ㆍ이용에 대한 동의를 거부할 권리가 있습니다. 그러나 필수 항목 수집ㆍ이용 동의를 거부할 경우 전동차 등록 및 운전허가 신청을 할 수 있습니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00_00","-10.00","421","100%","47",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("10");
            obj.set_text("필수 항목 수집ㆍ이용 동의를 거부하실 경우 전동차 등록 및 운전허가 신청을 하실수 없으시나,\r\n선택항목 수집ㆍ이용 동의를 거부하셔도 전동차 등록 및 운전허가 신청에는 제한이 없습니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_01","171","111","100%","180",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_value("전동차 운전허가증 제출목록: 보호구역 출입증 사본, 자동차 운전면허증 사본, 반명함 사진파일\n운전허가증 사진의 경우 반명함 사이즈 픽셀 354x472 [해상도 200dpi 이상]\n보호구역 출입증의 경우 앞,뒷면 모두 제출\n운전면허증의 경우 주민번호 뒷자리와 운전면허번호는 삭제한 후 제출\n전동차 등록증 제출서류: 제작서 발행제품 사양서(전동차 제원), 보험가입증서, 전동차 전,후,측면 사진\n보험가입증서의 경우 기간 내의 유효한 영업배상책임보험이어야 함\n전동차 등록번호 및 운전허가증 유효기간 : 24개월");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00","30","50","100%","50",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("2");
            obj.set_text("전동차 등록 및 운전허가 승인 및 운영 기준");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Button("btnMinAprvYn","1390.00","18","34","34",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("Panel01_02","710.00","50","100%","50",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("4");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnMinAprvYn\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("sub_tit01","0","0","100%","50",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("5");
            obj.set_background("#ffffff");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","201",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"TextArea00_01\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Static("staLabel00_03_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("6");
            obj.set_text("전동차 등록 및 운전허가 신청을 위한 개인정보 수집ㆍ이용 동의서");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","0.00","285","100.00%","60",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_value("입주자서비스포털은 전동차 등록 및 운전허가에대한 전동차 등록 및 운전허가 신청 서비스 제공을 위해 아래와 같이 개인정보를 수집ㆍ이용하고자 합니다.\n내용을 자세히 읽으신 후 여부를 결정하여 주시길 바랍니다.");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Grid("grdCn","500.00","4747","100.00%","140",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("8");
            obj.set_autofittype("col");
            obj.set_readonly("true");
            obj.set_binddataset("dsCn");
            obj.set_autosizingtype("none");
            obj.set_extendsizetype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"300\"/><Column size=\"600\"/><Column size=\"300\"/><Column size=\"300\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"72\"/></Rows><Band id=\"head\"><Cell text=\"시스템구분\"/><Cell col=\"1\" text=\"수집ㆍ이용 항목\"/><Cell col=\"2\" text=\"수집목적\"/><Cell col=\"3\" text=\"보유기간\"/></Band><Band id=\"body\"><Cell text=\"입주자서비스&#13;&#10;포털\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"text\" autosizerow=\"none\" textAlign=\"center\" text=\"[필수]납부담당자 이름, 납부담당자 일반전화번호&#13;&#10;납부담당자 휴대전화번호, 청구지주소, 생년월일&#13;&#10;[선택]청구서 이메일주소, 세금계산서 이메일주소&#13;&#10;※단, 청구방식&quot;이메일&quot; 선택 시 청구서 이메일주소 필수&#13;&#10;\" controlautosizingtype=\"none\"/><Cell col=\"2\" text=\"전동차 등록 및 운전허가 관련&#13;&#10;서비스 신청, 민원처리, 사후처리\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"3\" text=\"계약종료 후 3년,&#13;&#10;회원탈퇴 시까지\" displaytype=\"text\" textAlign=\"center\" cssclass=\"CellLink, CellTxtBlue\"/></Band></Format></Formats>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_03_00_00_00","10.00","98","100%","380",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("11");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("10");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_03_00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"TextArea00\"/><PanelItem id=\"PanelItem01\" componentid=\"grdCn\"/><PanelItem id=\"PanelItem05\" componentid=\"sta00_00_01_01\"/><PanelItem id=\"PanelItem04\" componentid=\"sta00_00_01_00_00\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","391",null,null,null,null,null,null,this.divForm.form.Div06.form);
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
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_03_00_00_00\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Static("staPrvcClctEsntlAgreYn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("13");
            obj.set_text("개인정보 수집(필수) 동의여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new CheckBox("chkPrvcClctEsntlAgreYn","274.00","355","150","46",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("14");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_value("0");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Static("sta00_00_01","20","20","100%","30",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("15");
            obj.set_text("신청자의 개인정보수집 및 이용동의여부(필수항목)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_03_00_00_00_00","64.00","495","980","176",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("10");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPrvcClctEsntlAgreYn\"/><PanelItem id=\"PanelItem01\" componentid=\"chkPrvcClctEsntlAgreYn\"/><PanelItem id=\"PanelItem03\" componentid=\"sta00_00_01\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100.00%","187",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("17");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_03_00_00_00_00\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Static("staPrvcClctChcAgreYn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("18");
            obj.set_text("개인정보 수집(선택) 동의여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Radio("rdoPrvcClctChcAgreYn","200.00","328","490","40",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("19");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div06_form_rdoPrvcClctChcAgreYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div06_form_rdoPrvcClctChcAgreYn_innerdataset", obj);
            divForm_form_Div06_form_rdoPrvcClctChcAgreYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">동의함</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">동의하지 않음(동의하지 않아도 서비스신청 가능합니다.</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div06_form_rdoPrvcClctChcAgreYn_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00","20","20","100%","30",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("20");
            obj.set_text("신청자의 개인정보수집 및 이용동의여부(선택항목)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00_01","20","20","100%","30",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("21");
            obj.set_text("선택항목에 해당하는 정보를 입력하지 않으셔도 서비스 이용에는 제한이 없습니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_03_00_00_00_00_00","64.00","495","980","176",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("22");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPrvcClctChcAgreYn\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoPrvcClctChcAgreYn\"/><PanelItem id=\"PanelItem03\" componentid=\"sta00_00_01_00\"/><PanelItem id=\"PanelItem04\" componentid=\"sta00_00_01_00_01\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Panel("pan03","0","60","100.00%","187",null,null,null,null,null,null,this.divForm.form.Div06.form);
            obj.set_taborder("23");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_03_00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div06.addChild(obj.name, obj);

            obj = new Div("Div07","0","30","100%","171",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new TextArea("txtCnvyMttr","171","111","100%","100",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("1");
            obj.set_readonly("false");
            obj.set_displaynulltext("내용입력");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00","30","50","100%","50",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("2");
            obj.set_text("전달사항");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Button("btnMinMttr","1390.00","18","34","34",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("Panel01_02","710.00","50","100%","50",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("4");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnMinMttr\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("sub_tit01","0","0","100%","50",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("5");
            obj.set_background("#ffffff");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","121",null,null,null,null,null,null,this.divForm.form.Div07.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"txtCnvyMttr\"/></Contents>");
            this.divForm.form.Div07.addChild(obj.name, obj);

            obj = new Div("divQuick","1122","62","296","255",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickMenu");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","17","20","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("0");
            obj.set_text("신청자정보");
            obj.set_cssclass("btn_WF_Quick_S");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn02","17.00","btn00:0","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("1");
            obj.set_text("청구 정보");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn03","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("2");
            obj.set_text("신청 정보");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn04","17.00","155","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("3");
            obj.set_text("전동차등록증 제출서류");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn05","17.00","200","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("4");
            obj.set_text("전동차등록증 제출사진");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn06","17.00","200","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("5");
            obj.set_text("운전허가증 제출사진");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn07","17.00","200","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("6");
            obj.set_text("전동차 등록 및 운전허가\r\n승인 및 운영 기준");
            obj.set_cssclass("btn_WF_Quick");
            obj.set_fittocontents("height");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn08","17.00","200","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("7");
            obj.set_text("전달사항");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Div("divBtn","1122","divQuick:0","296","131",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            obj.set_fittocontents("height");
            obj.set_cssclass("div_WF_QuickBtnBg");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","7","20","100","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("0");
            obj.set_text("임시저장");
            obj.set_cssclass("btn_WF_No");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btn00_01","7","20","100","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("2");
            obj.set_text("종료");
            obj.set_cssclass("btn_WF_No");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btn00_00","btn00:10","20","100","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("1");
            obj.set_text("신청");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divBtn.addChild(obj.name, obj);

            obj = new RaonkUpload("RaonkUpload","0","5230","1020","200",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_DevelopLangage("JAVA");
            obj.set_ExtensionAllowOrLimit("1");
            obj.set_HandlerUrl("http://localhost:8080/common/uploadDownload.do");
            obj.set_RunTimes("html5");
            obj.set_ButtonBarView("0");
            obj.set_AllowDuplicationFile("1");
            obj.set_text("");
            obj.set_DisableDeleteConfirm("1");
            obj.set_positionstep("0");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","210","36","102","46",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divGuide.form
            obj = new Layout("default","",0,0,this.divGuide.form,
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
            this.divGuide.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGuide.form
            obj = new Layout("mobile","",0,0,this.divGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divGuide.form.addLayout(obj.name, obj);
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
            //-- Default Layout : this.divForm.form.Div00.form
            obj = new Layout("default","",0,0,this.divForm.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.pan03_01.set_taborder("18");
                p.pan03_01.set_type("vertical");
                p.pan03_01.set_flexgrow("1");
                p.pan03_01.move("10.00","98","300","144",null,null);

                p.pan03_02.set_taborder("20");
                p.pan03_02.set_type("vertical");
                p.pan03_02.set_flexgrow("1");
                p.pan03_02.move("10.00","98","300","144",null,null);

                p.edtRgtrTelno.set_taborder("25");
                p.edtRgtrTelno.set_readonly("true");
                p.edtRgtrTelno.set_value("02-123-4567");
                p.edtRgtrTelno.move("10.00","158","100%","40",null,null);

                p.pan02_.set_taborder("12");
                p.pan02_.set_type("vertical");
                p.pan02_.set_flexgrow("1");
                p.pan02_.move("10.00","98","300","86",null,null);

                p.staSubTitle02_00.set_taborder("30");
                p.staSubTitle02_00.set_text("신청자정보");
                p.staSubTitle02_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00.move("30","50","100%","50",null,null);

                p.pan02_02.set_taborder("15");
                p.pan02_02.set_type("vertical");
                p.pan02_02.set_flexgrow("1");
                p.pan02_02.move("10.00","98","300","86",null,null);

                p.staRgtrTelno.set_taborder("17");
                p.staRgtrTelno.set_text("등록자 전화번호");
                p.staRgtrTelno.set_cssclass("sta_WF_Label");
                p.staRgtrTelno.move("10","98","100%","46",null,null);

                p.btnMinAplcntInfo.set_taborder("31");
                p.btnMinAplcntInfo.set_cssclass("btn_WF_ACMinus");
                p.btnMinAplcntInfo.move("1390.00","18","34","34",null,null);

                p.Panel01_02.set_taborder("32");
                p.Panel01_02.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02.set_spacing("0px 10px");
                p.Panel01_02.set_horizontalgap("10");
                p.Panel01_02.set_flexcrossaxisalign("center");
                p.Panel01_02.set_flexmainaxisalign("end");
                p.Panel01_02.move("710.00","50","100%","50",null,null);

                p.sub_tit01.set_taborder("33");
                p.sub_tit01.set_background("#ffffff");
                p.sub_tit01.move("0","0","100%","50",null,null);

                p.staAplySeNm.set_taborder("1");
                p.staAplySeNm.set_text("신청구분 ");
                p.staAplySeNm.set_cssclass("sta_WF_Label");
                p.staAplySeNm.set_flexgrow("1");
                p.staAplySeNm.move("10","98","300","46",null,null);

                p.btnHstry.set_taborder("23");
                p.btnHstry.set_text("과거신청이력불러오기");
                p.btnHstry.set_fittocontents("width");
                p.btnHstry.move("48","62","120","40",null,null);

                p.Panel00.set_taborder("22");
                p.Panel00.set_flexcrossaxisalign("center");
                p.Panel00.set_flexmainaxisalign("spacebetween");
                p.Panel00.move("763","63","100%","56",null,null);

                p.pan00_01.set_taborder("3");
                p.pan00_01.set_type("vertical");
                p.pan00_01.set_flexgrow("1");
                p.pan00_01.set_verticalgap("5");
                p.pan00_01.set_minwidth("");
                p.pan00_01.move("10.00","98","100%","101",null,null);

                p.pan00.set_taborder("0");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("0","60","100.00%","112",null,null);

                p.staAplcntNm.set_taborder("4");
                p.staAplcntNm.set_text("신청자");
                p.staAplcntNm.set_cssclass("sta_WF_Label");
                p.staAplcntNm.move("10","98","100%","46",null,null);

                p.edtAplcntNm.set_taborder("5");
                p.edtAplcntNm.set_readonly("true");
                p.edtAplcntNm.set_value("신청자 성명");
                p.edtAplcntNm.move("10.00","158","100%","40",null,null);

                p.pan01.set_taborder("10");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.set_flexshrink("1");
                p.pan01.set_fittocontents("height");
                p.pan01.move("0","60","100.00%","96",null,null);

                p.pan01_01.set_taborder("6");
                p.pan01_01.set_type("vertical");
                p.pan01_01.set_flexgrow("1");
                p.pan01_01.move("10.00","98","300","86",null,null);

                p.edtAplySeNm.set_taborder("2");
                p.edtAplySeNm.set_readonly("true");
                p.edtAplySeNm.move("10.00","158","100%","40",null,null);

                p.staRgtrNm.set_taborder("11");
                p.staRgtrNm.set_text("등록자");
                p.staRgtrNm.set_cssclass("sta_WF_Label");
                p.staRgtrNm.move("10","98","100%","46",null,null);

                p.staAplcntInstNm.set_taborder("7");
                p.staAplcntInstNm.set_text("신청자 회사명");
                p.staAplcntInstNm.set_cssclass("sta_WF_Label");
                p.staAplcntInstNm.move("10","98","100%","46",null,null);

                p.edtAplcntInstNm.set_taborder("8");
                p.edtAplcntInstNm.set_readonly("true");
                p.edtAplcntInstNm.set_value("회사명");
                p.edtAplcntInstNm.move("10.00","158","100%","40",null,null);

                p.pan01_02.set_taborder("9");
                p.pan01_02.set_type("vertical");
                p.pan01_02.set_flexgrow("1");
                p.pan01_02.move("10.00","98","300","86",null,null);

                p.sta00_00.set_taborder("26");
                p.sta00_00.set_text("전화번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 등록 및 수정이 가능합니다.");
                p.sta00_00.set_cssclass("sta_WF_Des");
                p.sta00_00.set_fittocontents("height");
                p.sta00_00.move("20","20","100%","48",null,null);

                p.Panel04_02_00.set_taborder("24");
                p.Panel04_02_00.set_fittocontents("height");
                p.Panel04_02_00.set_type("vertical");
                p.Panel04_02_00.set_verticalgap("10");
                p.Panel04_02_00.move("0","685","100%","98",null,null);

                p.staRgtrInstNm.set_taborder("13");
                p.staRgtrInstNm.set_text("등록자 회사명");
                p.staRgtrInstNm.set_cssclass("sta_WF_Label");
                p.staRgtrInstNm.move("10","98","100%","46",null,null);

                p.pan02.set_taborder("16");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","60","100%","96",null,null);

                p.edtRgtrInstNm.set_taborder("14");
                p.edtRgtrInstNm.set_readonly("true");
                p.edtRgtrInstNm.set_value("회사명");
                p.edtRgtrInstNm.move("10.00","158","100%","40",null,null);

                p.staRgtrMblTelno.set_taborder("19");
                p.staRgtrMblTelno.set_text("등록자 휴대폰 번호");
                p.staRgtrMblTelno.set_cssclass("sta_WF_Label");
                p.staRgtrMblTelno.move("10","98","100%","46",null,null);

                p.edtRgtrMblTelno.set_taborder("27");
                p.edtRgtrMblTelno.set_readonly("true");
                p.edtRgtrMblTelno.set_value("010-123-4567");
                p.edtRgtrMblTelno.move("10.00","158","100%","40",null,null);

                p.sta00_00_00.set_taborder("28");
                p.sta00_00_00.set_text("휴대폰번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 등록 및 수정이 가능합니다.");
                p.sta00_00_00.set_cssclass("sta_WF_Des");
                p.sta00_00_00.set_fittocontents("height");
                p.sta00_00_00.move("20","20","100%","48",null,null);

                p.pan03.set_taborder("21");
                p.pan03.set_horizontalgap("20");
                p.pan03.set_flexcrossaxiswrapalign("start");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_fittocontents("height");
                p.pan03.set_verticalgap("0");
                p.pan03.set_spacing("0px 20px 10px 20px");
                p.pan03.set_cssclass("pal_WF_DtlBg");
                p.pan03.move("0","60","100.00%","155",null,null);

                p.edtRgtrNm.set_taborder("34");
                p.edtRgtrNm.set_readonly("true");
                p.edtRgtrNm.set_value("등록자 성명");
                p.edtRgtrNm.move("10.00","158","100%","40",null,null);

                p.Panel04_02_00_00.set_taborder("29");
                p.Panel04_02_00_00.set_fittocontents("height");
                p.Panel04_02_00_00.set_type("vertical");
                p.Panel04_02_00_00.set_verticalgap("10");
                p.Panel04_02_00_00.move("0","685","100%","98",null,null);
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
            //-- Default Layout : this.divForm.form.Div01.form.divEdtPop.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01.form.divEdtPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.edtZip.set_taborder("0");
                p.edtZip.set_cssclass("edt_WF_EdtSch");
                p.edtZip.set_readonly("true");
                p.edtZip.set_displaynulltext("우편번호 검색");
                p.edtZip.move("0","0",null,"40","0",null);

                p.btnPop.set_taborder("1");
                p.btnPop.set_cssclass("btn_WF_EdtSch");
                p.btnPop.move("edtZip:-40","0","40","40",null,null);
            	}
            );
            this.divForm.form.Div01.form.divEdtPop.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div01.form.divEdtPop.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div01.form.divEdtPop.form,
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
                p.staPayPicSmYn.set_taborder("1");
                p.staPayPicSmYn.set_text("납부담당자  동일여부");
                p.staPayPicSmYn.set_cssclass("sta_WF_Label_E");
                p.staPayPicSmYn.move("10","98","100%","46",null,null);

                p.pan00_01.set_taborder("2");
                p.pan00_01.set_type("vertical");
                p.pan00_01.set_flexgrow("1");
                p.pan00_01.move("10.00","98","300","86",null,null);

                p.staPayPicNm.set_taborder("3");
                p.staPayPicNm.set_text("납부담당자 이름");
                p.staPayPicNm.set_cssclass("sta_WF_Label_E");
                p.staPayPicNm.move("10","98","100%","46",null,null);

                p.pan01_01.set_taborder("4");
                p.pan01_01.set_type("vertical");
                p.pan01_01.set_flexgrow("1");
                p.pan01_01.move("10.00","98","300","126",null,null);

                p.pan01_02.set_taborder("5");
                p.pan01_02.set_type("vertical");
                p.pan01_02.set_flexgrow("1");
                p.pan01_02.move("10.00","98","300","1",null,null);

                p.edtPayPicNm.set_taborder("8");
                p.edtPayPicNm.set_readonly("false");
                p.edtPayPicNm.set_displaynulltext("납부담당자 성명  입력");
                p.edtPayPicNm.move("10.00","158","100%","40",null,null);

                p.pan03_01.set_taborder("15");
                p.pan03_01.set_type("vertical");
                p.pan03_01.set_flexgrow("1");
                p.pan03_01.move("10.00","98","300","144",null,null);

                p.staPayPicTelno.set_taborder("11");
                p.staPayPicTelno.set_text("납부담당자 일반전화번호");
                p.staPayPicTelno.set_cssclass("sta_WF_Label_E");
                p.staPayPicTelno.move("10","98","100%","46",null,null);

                p.staMblPayPicTelno.set_taborder("16");
                p.staMblPayPicTelno.set_text("납부담당자 휴대전화번호");
                p.staMblPayPicTelno.set_cssclass("sta_WF_Label_E");
                p.staMblPayPicTelno.move("10","98","100%","46",null,null);

                p.edtPayPicTelno.set_taborder("12");
                p.edtPayPicTelno.set_readonly("false");
                p.edtPayPicTelno.set_displaynulltext("전화번호 입력");
                p.edtPayPicTelno.move("10.00","158","100%","40",null,null);

                p.Panel04_02_00_00.set_taborder("14");
                p.Panel04_02_00_00.set_fittocontents("height");
                p.Panel04_02_00_00.set_type("vertical");
                p.Panel04_02_00_00.set_verticalgap("10");
                p.Panel04_02_00_00.move("0","685","100%","98",null,null);

                p.edtPayPicMblTelno.set_taborder("17");
                p.edtPayPicMblTelno.set_readonly("false");
                p.edtPayPicMblTelno.set_displaynulltext("휴대전화번호 입력");
                p.edtPayPicMblTelno.move("10.00","158","100%","40",null,null);

                p.Panel04_02_00_00_00.set_taborder("19");
                p.Panel04_02_00_00_00.set_fittocontents("height");
                p.Panel04_02_00_00_00.set_type("vertical");
                p.Panel04_02_00_00_00.set_verticalgap("10");
                p.Panel04_02_00_00_00.move("0","685","100%","98",null,null);

                p.pan03_02.set_taborder("20");
                p.pan03_02.set_type("vertical");
                p.pan03_02.set_flexgrow("1");
                p.pan03_02.move("10.00","98","300","144",null,null);

                p.staPayPicPrvcClctAgre.set_taborder("22");
                p.staPayPicPrvcClctAgre.set_text("납부담당자의 개인정보 수집 및  이용 동의서");
                p.staPayPicPrvcClctAgre.set_cssclass("sta_WF_Label_E");
                p.staPayPicPrvcClctAgre.set_flexgrow("1");
                p.staPayPicPrvcClctAgre.move("0","44","305","46",null,null);

                p.btnPayPicPrvcClctAgreSample.set_taborder("23");
                p.btnPayPicPrvcClctAgreSample.set_text("샘플첨부파일명");
                p.btnPayPicPrvcClctAgreSample.set_cssclass("btn_WF_Small");
                p.btnPayPicPrvcClctAgreSample.set_fittocontents("width");
                p.btnPayPicPrvcClctAgreSample.move("813","76","120","40",null,null);

                p.btnPayPicPrvcClctAgreFile.set_taborder("24");
                p.btnPayPicPrvcClctAgreFile.set_text("파일선택");
                p.btnPayPicPrvcClctAgreFile.set_cssclass("btn_WF_FileUp");
                p.btnPayPicPrvcClctAgreFile.getSetter("upcolid").set("payPicPrvcClctAgreFile");
                p.btnPayPicPrvcClctAgreFile.move("124","58","116","40",null,null);

                p.panBtnFile.set_taborder("25");
                p.panBtnFile.set_flexgrow("1");
                p.panBtnFile.set_flexcrossaxisalign("start");
                p.panBtnFile.set_flexmainaxisalign("end");
                p.panBtnFile.set_horizontalgap("10");
                p.panBtnFile.move("433","58","305","46",null,null);

                p.panTitle.set_taborder("26");
                p.panTitle.set_cssclass("pan_WF_FileTitle");
                p.panTitle.set_flexwrap("wrap");
                p.panTitle.set_visible("true");
                p.panTitle.move("0","124","100%","46",null,null);

                p.Static00.set_taborder("27");
                p.Static00.set_text("파일수 : ");
                p.Static00.set_fittocontents("width");
                p.Static00.move("88","123","48","46",null,null);

                p.staPayPicPrvcClctAgreCnt.set_taborder("28");
                p.staPayPicPrvcClctAgreCnt.set_text("0");
                p.staPayPicPrvcClctAgreCnt.set_fittocontents("width");
                p.staPayPicPrvcClctAgreCnt.move("165","143","9","46",null,null);

                p.Static02.set_taborder("29");
                p.Static02.set_text("개");
                p.Static02.set_fittocontents("width");
                p.Static02.move("293","131","13","46",null,null);

                p.panFileNum.set_taborder("30");
                p.panFileNum.set_flexgrow("1");
                p.panFileNum.set_horizontalgap("4");
                p.panFileNum.move("20","190","305","46",null,null);

                p.btnPayPicPrvcClctAgreDel.set_taborder("31");
                p.btnPayPicPrvcClctAgreDel.set_text("전체파일삭제");
                p.btnPayPicPrvcClctAgreDel.set_cssclass("btn_WF_FileDel");
                p.btnPayPicPrvcClctAgreDel.set_fittocontents("width");
                p.btnPayPicPrvcClctAgreDel.move("512","135","125","40",null,null);

                p.panBtnDel.set_taborder("32");
                p.panBtnDel.set_flexcrossaxisalign("center");
                p.panBtnDel.set_flexmainaxisalign("end");
                p.panBtnDel.set_flexgrow("1");
                p.panBtnDel.move("517","141","305","46",null,null);

                p.staAddr.set_taborder("35");
                p.staAddr.set_text("청구지우편번호/청구지주소");
                p.staAddr.set_cssclass("sta_WF_Label_E");
                p.staAddr.move("0.00","0","100%","46",null,null);

                p.divEdtPop.set_taborder("36");
                p.divEdtPop.set_text("Div00");
                p.divEdtPop.set_formscrollbartype("none none");
                p.divEdtPop.set_formscrolltype("none");
                p.divEdtPop.set_flexgrow("1");
                p.divEdtPop.move("780.00","635","305","40",null,null);

                p.edtAddr.set_taborder("37");
                p.edtAddr.set_readonly("true");
                p.edtAddr.set_flexgrow("2");
                p.edtAddr.set_displaynulltext("주소");
                p.edtAddr.move("360","637","305","40",null,null);

                p.edtDtlAddr.set_taborder("39");
                p.edtDtlAddr.set_displaynulltext("상세주소");
                p.edtDtlAddr.move("0.00","46","100%","40",null,null);

                p.staClmSe.set_taborder("42");
                p.staClmSe.set_text("청구방식");
                p.staClmSe.set_cssclass("sta_WF_Label_E");
                p.staClmSe.move("10","98","100%","46",null,null);

                p.pan02_.set_taborder("43");
                p.pan02_.set_type("vertical");
                p.pan02_.set_flexgrow("1");
                p.pan02_.move("10.00","98","300","110",null,null);

                p.rdoClmSe.set_taborder("45");
                p.rdoClmSe.set_fittocontents("width");
                p.rdoClmSe.set_innerdataset(divForm_form_Div01_form_rdoClmSe_innerdataset);
                p.rdoClmSe.set_codecolumn("codecolumn");
                p.rdoClmSe.set_datacolumn("datacolumn");
                p.rdoClmSe.set_direction("horizontal");
                p.rdoClmSe.set_index("-1");
                p.rdoClmSe.move("127","203","100%","80",null,null);

                p.Static03.set_taborder("54");
                p.Static03.set_text("@");
                p.Static03.set_fittocontents("width");
                p.Static03.set_textAlign("center");
                p.Static03.move("507","1122","14","40",null,null);

                p.Panel03.set_taborder("46");
                p.Panel03.set_type("vertical");
                p.Panel03.set_flexgrow("1");
                p.Panel03.move("551","1140","300","172",null,null);

                p.staAcuntEmlAddr.set_taborder("47");
                p.staAcuntEmlAddr.set_text("청구서 이메일주소");
                p.staAcuntEmlAddr.set_cssclass("sta_WF_Label");
                p.staAcuntEmlAddr.move("10","98","100%","46",null,null);

                p.pan02_02_00.set_taborder("48");
                p.pan02_02_00.set_type("vertical");
                p.pan02_02_00.set_visible("false");
                p.pan02_02_00.move("10.00","98","100%","86",null,null);

                p.edtAcuntEmlAddr2.set_taborder("53");
                p.edtAcuntEmlAddr2.set_readonly("false");
                p.edtAcuntEmlAddr2.set_displaynulltext("이메일 주소 입력");
                p.edtAcuntEmlAddr2.set_flexgrow("1");
                p.edtAcuntEmlAddr2.move("10.00","158","30%","40",null,null);

                p.staTxivEmlAddr.set_taborder("49");
                p.staTxivEmlAddr.set_text("세금계산서 이메일주소");
                p.staTxivEmlAddr.set_cssclass("sta_WF_Label");
                p.staTxivEmlAddr.move("10","98","100%","46",null,null);

                p.cboAcuntEmlAddr.set_taborder("55");
                p.cboAcuntEmlAddr.set_innerdataset("ds_cbo");
                p.cboAcuntEmlAddr.set_codecolumn("code");
                p.cboAcuntEmlAddr.set_datacolumn("data");
                p.cboAcuntEmlAddr.set_displaynulltext("선택");
                p.cboAcuntEmlAddr.set_text("");
                p.cboAcuntEmlAddr.set_index("-1");
                p.cboAcuntEmlAddr.move("200.00","128","30%","40",null,null);

                p.pan02_02_00_00.set_taborder("50");
                p.pan02_02_00_00.set_type("vertical");
                p.pan02_02_00_00.move("10.00","98","100%","86",null,null);

                p.edtAcuntEmlAddr1.set_taborder("52");
                p.edtAcuntEmlAddr1.set_readonly("false");
                p.edtAcuntEmlAddr1.set_displaynulltext("이메일 주소 입력");
                p.edtAcuntEmlAddr1.set_flexgrow("1");
                p.edtAcuntEmlAddr1.move("10.00","158","30%","40",null,null);

                p.panEmail.set_taborder("51");
                p.panEmail.set_horizontalgap("5");
                p.panEmail.move("386","1172","100%","50",null,null);

                p.edtTxivEmlAddr1.set_taborder("56");
                p.edtTxivEmlAddr1.set_readonly("false");
                p.edtTxivEmlAddr1.set_displaynulltext("이메일 주소 입력");
                p.edtTxivEmlAddr1.set_flexgrow("1");
                p.edtTxivEmlAddr1.move("10.00","158","30%","40",null,null);

                p.Static03_00.set_taborder("57");
                p.Static03_00.set_text("@");
                p.Static03_00.set_fittocontents("width");
                p.Static03_00.set_textAlign("center");
                p.Static03_00.move("507","1122","14","40",null,null);

                p.edtTxivEmlAddr2.set_taborder("58");
                p.edtTxivEmlAddr2.set_readonly("false");
                p.edtTxivEmlAddr2.set_displaynulltext("이메일 주소 입력");
                p.edtTxivEmlAddr2.set_flexgrow("1");
                p.edtTxivEmlAddr2.move("10.00","158","30%","40",null,null);

                p.cboTxivEmlAddr.set_taborder("59");
                p.cboTxivEmlAddr.set_innerdataset("ds_cbo");
                p.cboTxivEmlAddr.set_codecolumn("code");
                p.cboTxivEmlAddr.set_datacolumn("data");
                p.cboTxivEmlAddr.set_displaynulltext("선택");
                p.cboTxivEmlAddr.set_text("");
                p.cboTxivEmlAddr.set_index("-1");
                p.cboTxivEmlAddr.move("200.00","128","30%","40",null,null);

                p.panEmail00.set_taborder("60");
                p.panEmail00.set_horizontalgap("5");
                p.panEmail00.move("386","1172","100%","50",null,null);

                p.staSubTitle02_00.set_taborder("61");
                p.staSubTitle02_00.set_text("청구 정보");
                p.staSubTitle02_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00.move("30","50","100%","50",null,null);

                p.Button00_00.set_taborder("62");
                p.Button00_00.set_cssclass("btn_WF_ACPlus");
                p.Button00_00.set_visible("false");
                p.Button00_00.move("1362.00","10","34","34",null,null);

                p.btnMinClmInfo.set_taborder("63");
                p.btnMinClmInfo.set_cssclass("btn_WF_ACMinus");
                p.btnMinClmInfo.move("1390.00","18","34","34",null,null);

                p.Panel01_02.set_taborder("64");
                p.Panel01_02.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02.set_spacing("0px 10px");
                p.Panel01_02.set_horizontalgap("10");
                p.Panel01_02.set_flexcrossaxisalign("center");
                p.Panel01_02.set_flexmainaxisalign("end");
                p.Panel01_02.move("710.00","50","100%","50",null,null);

                p.sub_tit01.set_taborder("65");
                p.sub_tit01.set_background("#ffffff");
                p.sub_tit01.move("0","0","100%","50",null,null);

                p.pan00.set_taborder("0");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.set_type("horizontal");
                p.pan00.move("0","60","100.00%","96",null,null);

                p.pan01.set_taborder("6");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_fittocontents("height");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.move("0","60","100.00%","137",null,null);

                p.pan02.set_taborder("21");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","60","100.00%","155",null,null);

                p.panFile.set_taborder("34");
                p.panFile.set_fittocontents("height");
                p.panFile.set_spacing("10px 20px 10px 20px");
                p.panFile.set_flexwrap("wrap");
                p.panFile.set_cssclass("pal_WF_DtlBg");
                p.panFile.set_verticalgap("4");
                p.panFile.set_visible("false");
                p.panFile.move("0","42","100%","201",null,null);

                p.pan03.set_taborder("41");
                p.pan03.set_horizontalgap("20");
                p.pan03.set_flexcrossaxiswrapalign("start");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_fittocontents("height");
                p.pan03.set_verticalgap("0");
                p.pan03.set_spacing("0px 20px 10px 20px");
                p.pan03.set_cssclass("pal_WF_DtlBg");
                p.pan03.set_type("horizontal");
                p.pan03.move("0","60","100.00%","166",null,null);

                p.pan04.set_taborder("44");
                p.pan04.set_horizontalgap("20");
                p.pan04.set_flexcrossaxiswrapalign("start");
                p.pan04.set_flexwrap("wrap");
                p.pan04.set_fittocontents("height");
                p.pan04.set_verticalgap("0");
                p.pan04.set_spacing("0px 20px 10px 20px");
                p.pan04.set_cssclass("pal_WF_DtlBg");
                p.pan04.move("0","60","100.00%","183",null,null);

                p.sta00_00.set_taborder("9");
                p.sta00_00.set_text("신청자정보와 동일시 신청자명 자동입력");
                p.sta00_00.set_cssclass("sta_WF_Des");
                p.sta00_00.set_fittocontents("height");
                p.sta00_00.move("20","20","100%","30",null,null);

                p.sta00_00_00.set_taborder("13");
                p.sta00_00_00.set_text("신청자정보와 동일시 전화번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 입력하세요.");
                p.sta00_00_00.set_cssclass("sta_WF_Des");
                p.sta00_00_00.set_fittocontents("height");
                p.sta00_00_00.move("20","20","100%","48",null,null);

                p.sta00_00_00_00.set_taborder("18");
                p.sta00_00_00_00.set_text("신청자정보와 동일시 휴대전화번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 입력하세요.");
                p.sta00_00_00_00.set_cssclass("sta_WF_Des");
                p.sta00_00_00_00.set_fittocontents("height");
                p.sta00_00_00_00.move("20","20","100%","48",null,null);

                p.Panel00.set_taborder("33");
                p.Panel00.move("20","51","100%","46",null,null);

                p.panAddress.set_taborder("38");
                p.panAddress.set_horizontalgap("10");
                p.panAddress.move("200","641","100%","45",null,null);

                p.Panel00_00_01.set_taborder("40");
                p.Panel00_00_01.set_type("vertical");
                p.Panel00_00_01.set_flexgrow("1");
                p.Panel00_00_01.set_fittocontents("height");
                p.Panel00_00_01.set_verticalgap("10");
                p.Panel00_00_01.set_minwidth("");
                p.Panel00_00_01.move("20.00","0","980","156",null,null);

                p.rdoPayPicSmYn.set_taborder("7");
                p.rdoPayPicSmYn.set_fittocontents("width");
                p.rdoPayPicSmYn.set_innerdataset(divForm_form_Div01_form_rdoPayPicSmYn_innerdataset);
                p.rdoPayPicSmYn.set_codecolumn("codecolumn");
                p.rdoPayPicSmYn.set_datacolumn("datacolumn");
                p.rdoPayPicSmYn.set_direction("vertical");
                p.rdoPayPicSmYn.set_index("-1");
                p.rdoPayPicSmYn.move("127","203","100%","40",null,null);

                p.Panel04_02_00.set_taborder("10");
                p.Panel04_02_00.set_fittocontents("height");
                p.Panel04_02_00.set_type("vertical");
                p.Panel04_02_00.set_verticalgap("10");
                p.Panel04_02_00.move("0","685","100%","80",null,null);

                p.grdPayPicPrvcClctAgre.set_taborder("66");
                p.grdPayPicPrvcClctAgre.set_binddataset("dsFile");
                p.grdPayPicPrvcClctAgre.set_autofittype("col");
                p.grdPayPicPrvcClctAgre.set_cssclass("grd_WF_FileAdd");
                p.grdPayPicPrvcClctAgre.move("20.00","114","100%","40",null,null);

                p.sta00_00_00_01.set_taborder("67");
                p.sta00_00_00_01.set_text("JPG,PNG,BMP,PDF만 첨부가능");
                p.sta00_00_00_01.set_cssclass("sta_WF_Des");
                p.sta00_00_00_01.set_fittocontents("height");
                p.sta00_00_00_01.move("20","20","100%","30",null,null);

                p.Panel01.set_taborder("68");
                p.Panel01.set_type("vertical");
                p.Panel01.set_verticalgap("10");
                p.Panel01.move("192","1038","100.00%","80",null,null);
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
                p.pan02_01.set_taborder("6");
                p.pan02_01.set_type("vertical");
                p.pan02_01.set_flexgrow("1");
                p.pan02_01.move("10.00","98","100%","116",null,null);

                p.pan02_02.set_taborder("9");
                p.pan02_02.set_type("vertical");
                p.pan02_02.set_flexgrow("1");
                p.pan02_02.move("10.00","98","300","86",null,null);

                p.Panel00.set_taborder("11");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.move("325","437","100%","86",null,null);

                p.pan02_02_01.set_taborder("12");
                p.pan02_02_01.set_type("vertical");
                p.pan02_02_01.set_flexgrow("1");
                p.pan02_02_01.move("10.00","98","300","1",null,null);

                p.staDmndBgngYmd.set_taborder("13");
                p.staDmndBgngYmd.set_text("요청기간시작일자");
                p.staDmndBgngYmd.set_cssclass("sta_WF_Label_E");
                p.staDmndBgngYmd.move("10","98","100%","46",null,null);

                p.pan02_02_00.set_taborder("15");
                p.pan02_02_00.set_type("vertical");
                p.pan02_02_00.move("10.00","98","100%","86",null,null);

                p.pan02_02_00_00.set_taborder("18");
                p.pan02_02_00_00.set_type("vertical");
                p.pan02_02_00_00.set_visible("false");
                p.pan02_02_00_00.move("10.00","98","100%","86",null,null);

                p.staLabel03_00_01_00_00.set_taborder("16");
                p.staLabel03_00_01_00_00.set_text("요청기간종료일자(유효기간)");
                p.staLabel03_00_01_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_01_00_00.move("10","98","100%","46",null,null);

                p.staSrvcAplySe.set_taborder("19");
                p.staSrvcAplySe.set_text("서비스신청구분");
                p.staSrvcAplySe.set_cssclass("sta_WF_Label_E");
                p.staSrvcAplySe.move("10","98","100%","46",null,null);

                p.pan02_04_00.set_taborder("20");
                p.pan02_04_00.set_type("vertical");
                p.pan02_04_00.set_flexgrow("1");
                p.pan02_04_00.move("10.00","98","300","86",null,null);

                p.pan02_02_02_00.set_taborder("21");
                p.pan02_02_02_00.set_type("vertical");
                p.pan02_02_02_00.set_flexgrow("1");
                p.pan02_02_02_00.move("10.00","98","300","1",null,null);

                p.staSubTitle02_00.set_taborder("24");
                p.staSubTitle02_00.set_text("신청 정보");
                p.staSubTitle02_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00.move("30","50","100%","50",null,null);

                p.btnMinAplyInfo.set_taborder("25");
                p.btnMinAplyInfo.set_cssclass("btn_WF_ACMinus");
                p.btnMinAplyInfo.move("1390.00","18","34","34",null,null);

                p.Panel01_02.set_taborder("26");
                p.Panel01_02.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02.set_spacing("0px 10px");
                p.Panel01_02.set_horizontalgap("10");
                p.Panel01_02.set_flexcrossaxisalign("center");
                p.Panel01_02.set_flexmainaxisalign("end");
                p.Panel01_02.move("710.00","50","100%","50",null,null);

                p.sub_tit01.set_taborder("27");
                p.sub_tit01.set_background("#ffffff");
                p.sub_tit01.move("0","0","100%","50",null,null);

                p.pan00.set_taborder("3");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("0","60","100.00%","97",null,null);

                p.pan01.set_taborder("7");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_fittocontents("height");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.move("0","60","100.00%","127",null,null);

                p.pan02.set_taborder("10");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","60","100.00%","97",null,null);

                p.staAplyKnd.set_taborder("0");
                p.staAplyKnd.set_text("신청종류");
                p.staAplyKnd.set_cssclass("sta_WF_Label_E");
                p.staAplyKnd.move("10","98","100%","46",null,null);

                p.rdoAplyKnd.set_taborder("1");
                p.rdoAplyKnd.set_fittocontents("width");
                p.rdoAplyKnd.set_innerdataset(divForm_form_Div02_form_rdoAplyKnd_innerdataset);
                p.rdoAplyKnd.set_codecolumn("codecolumn");
                p.rdoAplyKnd.set_datacolumn("datacolumn");
                p.rdoAplyKnd.set_direction("vertical");
                p.rdoAplyKnd.set_index("-1");
                p.rdoAplyKnd.move("127","203","100%","40",null,null);

                p.staCustType.set_taborder("4");
                p.staCustType.set_text("고객유형");
                p.staCustType.set_cssclass("sta_WF_Label_E");
                p.staCustType.move("10","98","100%","46",null,null);

                p.rdoCustType.set_taborder("5");
                p.rdoCustType.set_fittocontents("width");
                p.rdoCustType.set_innerdataset(divForm_form_Div02_form_rdoCustType_innerdataset);
                p.rdoCustType.set_codecolumn("codecolumn");
                p.rdoCustType.set_datacolumn("datacolumn");
                p.rdoCustType.set_direction("vertical");
                p.rdoCustType.set_index("-1");
                p.rdoCustType.move("127","203","100%","40",null,null);

                p.sta00_00.set_taborder("8");
                p.sta00_00.set_text("1회 신청 시, 요청기간 시작일을 기준으로 유효기간은 2년이며 연장하는 경우 2년 단위로 갱신 신청");
                p.sta00_00.set_cssclass("sta_WF_Des");
                p.sta00_00.set_fittocontents("height");
                p.sta00_00.move("20","20","100%","30",null,null);

                p.staBldg.set_taborder("28");
                p.staBldg.set_text("건물구분");
                p.staBldg.set_cssclass("sta_WF_Label_E");
                p.staBldg.move("10","98","100%","46",null,null);

                p.pan01_01.set_taborder("29");
                p.pan01_01.set_type("vertical");
                p.pan01_01.set_flexgrow("1");
                p.pan01_01.move("10.00","98","300","86",null,null);

                p.staZone.set_taborder("30");
                p.staZone.set_text("구역구분");
                p.staZone.set_cssclass("sta_WF_Label_E");
                p.staZone.move("10","98","100%","46",null,null);

                p.pan01_02.set_taborder("31");
                p.pan01_02.set_type("vertical");
                p.pan01_02.set_flexgrow("1");
                p.pan01_02.move("10.00","98","300","86",null,null);

                p.pan03.set_taborder("32");
                p.pan03.set_horizontalgap("20");
                p.pan03.set_flexcrossaxiswrapalign("start");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_verticalgap("0");
                p.pan03.set_spacing("0px 20px 10px 20px");
                p.pan03.set_cssclass("pal_WF_DtlBg");
                p.pan03.set_flexshrink("1");
                p.pan03.set_fittocontents("height");
                p.pan03.move("0","60","100.00%","96",null,null);

                p.pan04.set_taborder("22");
                p.pan04.set_horizontalgap("20");
                p.pan04.set_flexcrossaxiswrapalign("start");
                p.pan04.set_flexwrap("wrap");
                p.pan04.set_fittocontents("height");
                p.pan04.set_verticalgap("0");
                p.pan04.set_spacing("0px 20px 10px 20px");
                p.pan04.set_cssclass("pal_WF_DtlBg");
                p.pan04.move("0","60","100%","96",null,null);

                p.rdoZone.set_taborder("33");
                p.rdoZone.set_fittocontents("width");
                p.rdoZone.set_innerdataset(divForm_form_Div02_form_rdoZone_innerdataset);
                p.rdoZone.set_codecolumn("codecolumn");
                p.rdoZone.set_datacolumn("datacolumn");
                p.rdoZone.set_direction("vertical");
                p.rdoZone.set_index("-1");
                p.rdoZone.move("127","203","100%","40",null,null);

                p.calDmndBgngYmd.set_taborder("14");
                p.calDmndBgngYmd.set_dateformat("yyyy-MM-dd");
                p.calDmndBgngYmd.set_value("20240702");
                p.calDmndBgngYmd.set_type("normal");
                p.calDmndBgngYmd.move("200.00","728","100%","40",null,null);

                p.cal00_00_00.set_taborder("17");
                p.cal00_00_00.set_dateformat("yyyy-MM-dd");
                p.cal00_00_00.set_value("20240702");
                p.cal00_00_00.set_type("normal");
                p.cal00_00_00.set_readonly("true");
                p.cal00_00_00.move("200.00","728","100%","40",null,null);

                p.cboSrvcAplySe.set_taborder("23");
                p.cboSrvcAplySe.set_innerdataset("dsAplyKndList");
                p.cboSrvcAplySe.set_codecolumn("cdId");
                p.cboSrvcAplySe.set_datacolumn("cdNm");
                p.cboSrvcAplySe.set_displaynulltext("선택");
                p.cboSrvcAplySe.set_text("");
                p.cboSrvcAplySe.set_index("-1");
                p.cboSrvcAplySe.move("200.00","128","100%","40",null,null);

                p.pan02_.set_taborder("2");
                p.pan02_.set_type("vertical");
                p.pan02_.set_flexgrow("1");
                p.pan02_.move("10.00","98","300","86",null,null);

                p.pan02_03.set_taborder("34");
                p.pan02_03.set_type("vertical");
                p.pan02_03.set_flexgrow("1");
                p.pan02_03.move("10.00","98","300","1",null,null);

                p.cboBldg.set_taborder("35");
                p.cboBldg.set_innerdataset("dsBldgSeList");
                p.cboBldg.set_codecolumn("cdId");
                p.cboBldg.set_datacolumn("cdNm");
                p.cboBldg.set_displaynulltext("선택");
                p.cboBldg.set_text("");
                p.cboBldg.set_index("-1");
                p.cboBldg.move("-191.00","391","100.00%","39",null,null);
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
            //-- Default Layout : this.divForm.form.Div03.form
            obj = new Layout("default","",0,0,this.divForm.form.Div03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staPblcnPrdctSpcfat.set_taborder("0");
                p.staPblcnPrdctSpcfat.set_text("재직서 발행제품 사양서");
                p.staPblcnPrdctSpcfat.set_cssclass("sta_WF_Label_E");
                p.staPblcnPrdctSpcfat.set_flexgrow("1");
                p.staPblcnPrdctSpcfat.move("0","44","305","46",null,null);

                p.panBtnFile.set_taborder("3");
                p.panBtnFile.set_flexgrow("1");
                p.panBtnFile.set_flexcrossaxisalign("start");
                p.panBtnFile.set_flexmainaxisalign("end");
                p.panBtnFile.set_horizontalgap("10");
                p.panBtnFile.move("433","58","305","46",null,null);

                p.panTitle.set_taborder("4");
                p.panTitle.set_cssclass("pan_WF_FileTitle");
                p.panTitle.set_flexwrap("wrap");
                p.panTitle.set_fittocontents("height");
                p.panTitle.move("0","124","100%","92",null,null);

                p.Static00.set_taborder("5");
                p.Static00.set_text("파일수 : ");
                p.Static00.set_fittocontents("width");
                p.Static00.move("88","123","48","46",null,null);

                p.staPblcnPrdctSpcfatCnt.set_taborder("6");
                p.staPblcnPrdctSpcfatCnt.set_text("0");
                p.staPblcnPrdctSpcfatCnt.set_fittocontents("width");
                p.staPblcnPrdctSpcfatCnt.move("165","143","9","46",null,null);

                p.Static02.set_taborder("7");
                p.Static02.set_text("개");
                p.Static02.set_fittocontents("width");
                p.Static02.move("293","131","13","46",null,null);

                p.panFileNum.set_taborder("8");
                p.panFileNum.set_flexgrow("1");
                p.panFileNum.set_horizontalgap("4");
                p.panFileNum.move("20","190","305","46",null,null);

                p.panBtnDel.set_taborder("10");
                p.panBtnDel.set_flexcrossaxisalign("center");
                p.panBtnDel.set_flexmainaxisalign("end");
                p.panBtnDel.set_flexgrow("1");
                p.panBtnDel.move("517","141","305","46",null,null);

                p.panFile.set_taborder("12");
                p.panFile.set_fittocontents("height");
                p.panFile.set_spacing("10px 0px 0px 0px");
                p.panFile.set_flexwrap("wrap");
                p.panFile.set_verticalgap("4");
                p.panFile.set_flexgrow("1");
                p.panFile.move("0","42","300","196",null,null);

                p.staInsrncJoinPrdoc.set_taborder("14");
                p.staInsrncJoinPrdoc.set_text("보험가입증서");
                p.staInsrncJoinPrdoc.set_cssclass("sta_WF_Label_E");
                p.staInsrncJoinPrdoc.set_flexgrow("1");
                p.staInsrncJoinPrdoc.move("0","44","305","46",null,null);

                p.btnInsrncJoinPrdocSample.set_taborder("15");
                p.btnInsrncJoinPrdocSample.set_text("샘플첨부파일명");
                p.btnInsrncJoinPrdocSample.set_cssclass("btn_WF_Small");
                p.btnInsrncJoinPrdocSample.set_fittocontents("width");
                p.btnInsrncJoinPrdocSample.move("813","76","120","40",null,null);

                p.btnInsrncJoinPrdocFile.set_taborder("16");
                p.btnInsrncJoinPrdocFile.set_text("파일선택");
                p.btnInsrncJoinPrdocFile.set_cssclass("btn_WF_FileUp");
                p.btnInsrncJoinPrdocFile.getSetter("upcolid").set("insrncJoinPrdocFile");
                p.btnInsrncJoinPrdocFile.move("124","58","116","40",null,null);

                p.panBtnFile00.set_taborder("17");
                p.panBtnFile00.set_flexgrow("1");
                p.panBtnFile00.set_flexcrossaxisalign("start");
                p.panBtnFile00.set_flexmainaxisalign("end");
                p.panBtnFile00.set_horizontalgap("10");
                p.panBtnFile00.move("433","58","305","46",null,null);

                p.panTitle00.set_taborder("18");
                p.panTitle00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00.set_flexwrap("wrap");
                p.panTitle00.set_fittocontents("height");
                p.panTitle00.move("0","124","100%","92",null,null);

                p.Static00_00.set_taborder("19");
                p.Static00_00.set_text("파일수 : ");
                p.Static00_00.set_fittocontents("width");
                p.Static00_00.move("88","123","48","46",null,null);

                p.staInsrncJoinPrdocCnt.set_taborder("20");
                p.staInsrncJoinPrdocCnt.set_text("0");
                p.staInsrncJoinPrdocCnt.set_fittocontents("width");
                p.staInsrncJoinPrdocCnt.move("165","143","9","46",null,null);

                p.Static02_00.set_taborder("21");
                p.Static02_00.set_text("개");
                p.Static02_00.set_fittocontents("width");
                p.Static02_00.move("293","131","13","46",null,null);

                p.panFileNum00.set_taborder("22");
                p.panFileNum00.set_flexgrow("1");
                p.panFileNum00.set_horizontalgap("4");
                p.panFileNum00.move("20","190","305","46",null,null);

                p.btnInsrncJoinPrdocDel.set_taborder("23");
                p.btnInsrncJoinPrdocDel.set_text("전체파일삭제");
                p.btnInsrncJoinPrdocDel.set_cssclass("btn_WF_FileDel");
                p.btnInsrncJoinPrdocDel.set_fittocontents("width");
                p.btnInsrncJoinPrdocDel.move("512","135","125","40",null,null);

                p.panBtnDel00.set_taborder("24");
                p.panBtnDel00.set_flexcrossaxisalign("center");
                p.panBtnDel00.set_flexmainaxisalign("end");
                p.panBtnDel00.set_flexgrow("1");
                p.panBtnDel00.move("517","141","305","46",null,null);

                p.panFile00.set_taborder("27");
                p.panFile00.set_fittocontents("height");
                p.panFile00.set_spacing("10px 0px 0px 0px");
                p.panFile00.set_flexwrap("wrap");
                p.panFile00.set_verticalgap("4");
                p.panFile00.set_flexgrow("1");
                p.panFile00.move("0","42","300","196",null,null);

                p.staSubTitle02_00.set_taborder("29");
                p.staSubTitle02_00.set_text("전동차등록증 제출서류");
                p.staSubTitle02_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00.move("30","50","100%","50",null,null);

                p.btnMinDoc.set_taborder("30");
                p.btnMinDoc.set_cssclass("btn_WF_ACMinus");
                p.btnMinDoc.move("1390.00","18","34","34",null,null);

                p.Panel01_02.set_taborder("31");
                p.Panel01_02.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02.set_spacing("0px 10px");
                p.Panel01_02.set_horizontalgap("10");
                p.Panel01_02.set_flexcrossaxisalign("center");
                p.Panel01_02.set_flexmainaxisalign("end");
                p.Panel01_02.move("710.00","50","100%","50",null,null);

                p.sub_tit01.set_taborder("32");
                p.sub_tit01.set_background("#ffffff");
                p.sub_tit01.move("0","0","100%","50",null,null);

                p.pan00.set_taborder("28");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("0","60","100.00%","207",null,null);

                p.btnPblcnPrdctSpcfatSample.set_taborder("1");
                p.btnPblcnPrdctSpcfatSample.set_text("샘플첨부파일명");
                p.btnPblcnPrdctSpcfatSample.set_cssclass("btn_WF_Small");
                p.btnPblcnPrdctSpcfatSample.set_fittocontents("width");
                p.btnPblcnPrdctSpcfatSample.move("813","76","120","40",null,null);

                p.btnPblcnPrdctSpcfatFile.set_taborder("2");
                p.btnPblcnPrdctSpcfatFile.set_text("파일선택");
                p.btnPblcnPrdctSpcfatFile.set_cssclass("btn_WF_FileUp");
                p.btnPblcnPrdctSpcfatFile.getSetter("upcolid").set("pblcnPrdctSpcfatFile");
                p.btnPblcnPrdctSpcfatFile.move("124","58","116","40",null,null);

                p.btnPblcnPrdctSpcfatDel.set_taborder("9");
                p.btnPblcnPrdctSpcfatDel.set_text("전체파일삭제");
                p.btnPblcnPrdctSpcfatDel.set_cssclass("btn_WF_FileDel");
                p.btnPblcnPrdctSpcfatDel.set_fittocontents("width");
                p.btnPblcnPrdctSpcfatDel.move("512","135","125","40",null,null);

                p.grdPblcnPrdctSpcfat.set_taborder("13");
                p.grdPblcnPrdctSpcfat.set_binddataset("dsFile");
                p.grdPblcnPrdctSpcfat.set_autofittype("col");
                p.grdPblcnPrdctSpcfat.set_cssclass("grd_WF_FileAdd");
                p.grdPblcnPrdctSpcfat.move("20.00","114","100%","40",null,null);

                p.Panel00.set_taborder("11");
                p.Panel00.move("20","51","100%","46",null,null);

                p.Panel00_00.set_taborder("25");
                p.Panel00_00.move("20","51","100%","46",null,null);

                p.grdInsrncJoinPrdoc.set_taborder("26");
                p.grdInsrncJoinPrdoc.set_binddataset("dsFile");
                p.grdInsrncJoinPrdoc.set_autofittype("col");
                p.grdInsrncJoinPrdoc.set_cssclass("grd_WF_FileAdd");
                p.grdInsrncJoinPrdoc.move("20.00","114","100%","40",null,null);
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
                p.staSubTitle02_00.set_taborder("0");
                p.staSubTitle02_00.set_text("전동차등록증 제출사진");
                p.staSubTitle02_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00.move("30","50","100%","50",null,null);

                p.btnMinPhoto.set_taborder("1");
                p.btnMinPhoto.set_cssclass("btn_WF_ACMinus");
                p.btnMinPhoto.move("1390.00","18","34","34",null,null);

                p.Panel01_02.set_taborder("2");
                p.Panel01_02.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02.set_spacing("0px 10px");
                p.Panel01_02.set_horizontalgap("10");
                p.Panel01_02.set_flexcrossaxisalign("center");
                p.Panel01_02.set_flexmainaxisalign("end");
                p.Panel01_02.move("710.00","50","100%","50",null,null);

                p.sub_tit01.set_taborder("3");
                p.sub_tit01.set_background("#ffffff");
                p.sub_tit01.move("0","0","100%","50",null,null);

                p.staElcttrFrtPhoto.set_taborder("4");
                p.staElcttrFrtPhoto.set_text("전동차 전면 사진");
                p.staElcttrFrtPhoto.set_cssclass("sta_WF_Label_E");
                p.staElcttrFrtPhoto.set_flexgrow("1");
                p.staElcttrFrtPhoto.move("0","44","305","46",null,null);

                p.btnElcttrFrtPhotoSample.set_taborder("5");
                p.btnElcttrFrtPhotoSample.set_text("샘플첨부파일명");
                p.btnElcttrFrtPhotoSample.set_cssclass("btn_WF_Small");
                p.btnElcttrFrtPhotoSample.set_fittocontents("width");
                p.btnElcttrFrtPhotoSample.move("813","76","120","40",null,null);

                p.btnElcttrFrtPhotoFile.set_taborder("6");
                p.btnElcttrFrtPhotoFile.set_text("파일선택");
                p.btnElcttrFrtPhotoFile.set_cssclass("btn_WF_FileUp");
                p.btnElcttrFrtPhotoFile.getSetter("upcolid").set("elcttrFrtPhotoFile");
                p.btnElcttrFrtPhotoFile.move("124","58","116","40",null,null);

                p.panBtnFile02.set_taborder("7");
                p.panBtnFile02.set_flexgrow("1");
                p.panBtnFile02.set_flexcrossaxisalign("start");
                p.panBtnFile02.set_flexmainaxisalign("end");
                p.panBtnFile02.set_horizontalgap("10");
                p.panBtnFile02.move("433","58","305","46",null,null);

                p.panTitle02.set_taborder("8");
                p.panTitle02.set_cssclass("pan_WF_FileTitle");
                p.panTitle02.set_flexwrap("wrap");
                p.panTitle02.set_fittocontents("height");
                p.panTitle02.move("0","124","100%","92",null,null);

                p.Static00_02.set_taborder("9");
                p.Static00_02.set_text("파일수 : ");
                p.Static00_02.set_fittocontents("width");
                p.Static00_02.move("88","123","48","46",null,null);

                p.staElcttrFrtPhotoCnt.set_taborder("10");
                p.staElcttrFrtPhotoCnt.set_text("0");
                p.staElcttrFrtPhotoCnt.set_fittocontents("width");
                p.staElcttrFrtPhotoCnt.move("165","143","9","46",null,null);

                p.Static02_02.set_taborder("11");
                p.Static02_02.set_text("개");
                p.Static02_02.set_fittocontents("width");
                p.Static02_02.move("293","131","13","46",null,null);

                p.panFileNum02.set_taborder("12");
                p.panFileNum02.set_flexgrow("1");
                p.panFileNum02.set_horizontalgap("4");
                p.panFileNum02.move("20","190","305","46",null,null);

                p.btnElcttrFrtPhotoDel.set_taborder("13");
                p.btnElcttrFrtPhotoDel.set_text("전체파일삭제");
                p.btnElcttrFrtPhotoDel.set_cssclass("btn_WF_FileDel");
                p.btnElcttrFrtPhotoDel.set_fittocontents("width");
                p.btnElcttrFrtPhotoDel.move("512","135","125","40",null,null);

                p.panBtnDel02.set_taborder("14");
                p.panBtnDel02.set_flexcrossaxisalign("center");
                p.panBtnDel02.set_flexmainaxisalign("end");
                p.panBtnDel02.set_flexgrow("1");
                p.panBtnDel02.move("517","141","305","46",null,null);

                p.Panel00_02.set_taborder("15");
                p.Panel00_02.move("20","51","100%","46",null,null);

                p.grdElcttrFrtPhoto.set_taborder("16");
                p.grdElcttrFrtPhoto.set_binddataset("dsFile");
                p.grdElcttrFrtPhoto.set_autofittype("col");
                p.grdElcttrFrtPhoto.set_cssclass("grd_WF_FileAdd");
                p.grdElcttrFrtPhoto.move("20.00","114","100%","40",null,null);

                p.panFile02.set_taborder("17");
                p.panFile02.set_fittocontents("height");
                p.panFile02.set_spacing("10px 0px 0px 0px");
                p.panFile02.set_flexwrap("wrap");
                p.panFile02.set_verticalgap("4");
                p.panFile02.set_flexgrow("1");
                p.panFile02.move("0","42","300","196",null,null);

                p.pan00.set_taborder("18");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("0","60","100.00%","207",null,null);

                p.staElcttrRarPhoto.set_taborder("19");
                p.staElcttrRarPhoto.set_text("전동차 후면 사진");
                p.staElcttrRarPhoto.set_cssclass("sta_WF_Label_E");
                p.staElcttrRarPhoto.set_flexgrow("1");
                p.staElcttrRarPhoto.move("0","44","305","46",null,null);

                p.btnElcttrRarPhotoSample.set_taborder("20");
                p.btnElcttrRarPhotoSample.set_text("샘플첨부파일명");
                p.btnElcttrRarPhotoSample.set_cssclass("btn_WF_Small");
                p.btnElcttrRarPhotoSample.set_fittocontents("width");
                p.btnElcttrRarPhotoSample.move("813","76","120","40",null,null);

                p.btnElcttrRarPhotoFile.set_taborder("21");
                p.btnElcttrRarPhotoFile.set_text("파일선택");
                p.btnElcttrRarPhotoFile.set_cssclass("btn_WF_FileUp");
                p.btnElcttrRarPhotoFile.getSetter("upcolid").set("elcttrRarPhotoFile");
                p.btnElcttrRarPhotoFile.move("124","58","116","40",null,null);

                p.panBtnFile02_00.set_taborder("22");
                p.panBtnFile02_00.set_flexgrow("1");
                p.panBtnFile02_00.set_flexcrossaxisalign("start");
                p.panBtnFile02_00.set_flexmainaxisalign("end");
                p.panBtnFile02_00.set_horizontalgap("10");
                p.panBtnFile02_00.move("433","58","305","46",null,null);

                p.panTitle02_00.set_taborder("23");
                p.panTitle02_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle02_00.set_flexwrap("wrap");
                p.panTitle02_00.set_fittocontents("height");
                p.panTitle02_00.move("0","124","100%","92",null,null);

                p.Static00_02_00.set_taborder("24");
                p.Static00_02_00.set_text("파일수 : ");
                p.Static00_02_00.set_fittocontents("width");
                p.Static00_02_00.move("88","123","48","46",null,null);

                p.staElcttrRarPhotoCnt.set_taborder("25");
                p.staElcttrRarPhotoCnt.set_text("0");
                p.staElcttrRarPhotoCnt.set_fittocontents("width");
                p.staElcttrRarPhotoCnt.move("165","143","9","46",null,null);

                p.Static02_02_00.set_taborder("26");
                p.Static02_02_00.set_text("개");
                p.Static02_02_00.set_fittocontents("width");
                p.Static02_02_00.move("293","131","13","46",null,null);

                p.panFileNum02_00.set_taborder("27");
                p.panFileNum02_00.set_flexgrow("1");
                p.panFileNum02_00.set_horizontalgap("4");
                p.panFileNum02_00.move("20","190","305","46",null,null);

                p.btnElcttrRarPhotoDel.set_taborder("28");
                p.btnElcttrRarPhotoDel.set_text("전체파일삭제");
                p.btnElcttrRarPhotoDel.set_cssclass("btn_WF_FileDel");
                p.btnElcttrRarPhotoDel.set_fittocontents("width");
                p.btnElcttrRarPhotoDel.move("512","135","125","40",null,null);

                p.panBtnDel02_00.set_taborder("29");
                p.panBtnDel02_00.set_flexcrossaxisalign("center");
                p.panBtnDel02_00.set_flexmainaxisalign("end");
                p.panBtnDel02_00.set_flexgrow("1");
                p.panBtnDel02_00.move("517","141","305","46",null,null);

                p.Panel00_02_00.set_taborder("30");
                p.Panel00_02_00.move("20","51","100%","46",null,null);

                p.grdElcttrRarPhoto.set_taborder("31");
                p.grdElcttrRarPhoto.set_binddataset("dsFile");
                p.grdElcttrRarPhoto.set_autofittype("col");
                p.grdElcttrRarPhoto.set_cssclass("grd_WF_FileAdd");
                p.grdElcttrRarPhoto.move("20.00","114","100%","40",null,null);

                p.panFile02_00.set_taborder("32");
                p.panFile02_00.set_fittocontents("height");
                p.panFile02_00.set_spacing("10px 0px 0px 0px");
                p.panFile02_00.set_flexwrap("wrap");
                p.panFile02_00.set_verticalgap("4");
                p.panFile02_00.set_flexgrow("1");
                p.panFile02_00.move("0","42","300","196",null,null);

                p.pan01.set_taborder("33");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_fittocontents("height");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.move("0","60","100.00%","207",null,null);

                p.staElcttrFlkPhoto.set_taborder("34");
                p.staElcttrFlkPhoto.set_text("전동차 측면 사진");
                p.staElcttrFlkPhoto.set_cssclass("sta_WF_Label_E");
                p.staElcttrFlkPhoto.set_flexgrow("1");
                p.staElcttrFlkPhoto.move("0","44","305","46",null,null);

                p.btnElcttrFlkPhotoSample.set_taborder("35");
                p.btnElcttrFlkPhotoSample.set_text("샘플첨부파일명");
                p.btnElcttrFlkPhotoSample.set_cssclass("btn_WF_Small");
                p.btnElcttrFlkPhotoSample.set_fittocontents("width");
                p.btnElcttrFlkPhotoSample.move("813","76","120","40",null,null);

                p.btnElcttrFlkPhotoFile.set_taborder("36");
                p.btnElcttrFlkPhotoFile.set_text("파일선택");
                p.btnElcttrFlkPhotoFile.set_cssclass("btn_WF_FileUp");
                p.btnElcttrFlkPhotoFile.getSetter("upcolid").set("elcttrFlkPhotoFile");
                p.btnElcttrFlkPhotoFile.move("124","58","116","40",null,null);

                p.panBtnFile02_01.set_taborder("37");
                p.panBtnFile02_01.set_flexgrow("1");
                p.panBtnFile02_01.set_flexcrossaxisalign("start");
                p.panBtnFile02_01.set_flexmainaxisalign("end");
                p.panBtnFile02_01.set_horizontalgap("10");
                p.panBtnFile02_01.move("433","58","305","46",null,null);

                p.panTitle02_01.set_taborder("38");
                p.panTitle02_01.set_cssclass("pan_WF_FileTitle");
                p.panTitle02_01.set_flexwrap("wrap");
                p.panTitle02_01.set_fittocontents("height");
                p.panTitle02_01.move("0","124","100%","92",null,null);

                p.Static00_02_01.set_taborder("39");
                p.Static00_02_01.set_text("파일수 : ");
                p.Static00_02_01.set_fittocontents("width");
                p.Static00_02_01.move("88","123","48","46",null,null);

                p.staElcttrFlkPhotoCnt.set_taborder("40");
                p.staElcttrFlkPhotoCnt.set_text("0");
                p.staElcttrFlkPhotoCnt.set_fittocontents("width");
                p.staElcttrFlkPhotoCnt.move("165","143","9","46",null,null);

                p.Static02_02_01.set_taborder("41");
                p.Static02_02_01.set_text("개");
                p.Static02_02_01.set_fittocontents("width");
                p.Static02_02_01.move("293","131","13","46",null,null);

                p.panFileNum02_01.set_taborder("42");
                p.panFileNum02_01.set_flexgrow("1");
                p.panFileNum02_01.set_horizontalgap("4");
                p.panFileNum02_01.move("20","190","305","46",null,null);

                p.btnElcttrFlkPhotoDel.set_taborder("43");
                p.btnElcttrFlkPhotoDel.set_text("전체파일삭제");
                p.btnElcttrFlkPhotoDel.set_cssclass("btn_WF_FileDel");
                p.btnElcttrFlkPhotoDel.set_fittocontents("width");
                p.btnElcttrFlkPhotoDel.move("512","135","125","40",null,null);

                p.panBtnDel02_01.set_taborder("44");
                p.panBtnDel02_01.set_flexcrossaxisalign("center");
                p.panBtnDel02_01.set_flexmainaxisalign("end");
                p.panBtnDel02_01.set_flexgrow("1");
                p.panBtnDel02_01.move("517","141","305","46",null,null);

                p.Panel00_02_01.set_taborder("45");
                p.Panel00_02_01.move("20","51","100%","46",null,null);

                p.grdElcttrFlkPhoto.set_taborder("46");
                p.grdElcttrFlkPhoto.set_binddataset("dsFile");
                p.grdElcttrFlkPhoto.set_autofittype("col");
                p.grdElcttrFlkPhoto.set_cssclass("grd_WF_FileAdd");
                p.grdElcttrFlkPhoto.move("20.00","114","100%","40",null,null);

                p.panFile02_01.set_taborder("47");
                p.panFile02_01.set_fittocontents("height");
                p.panFile02_01.set_spacing("10px 0px 0px 0px");
                p.panFile02_01.set_flexwrap("wrap");
                p.panFile02_01.set_verticalgap("4");
                p.panFile02_01.set_flexgrow("1");
                p.panFile02_01.move("0","42","300","196",null,null);

                p.pan02.set_taborder("48");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","60","100.00%","207",null,null);
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
                p.staPrtcZoneAdpsFrtsd.set_taborder("0");
                p.staPrtcZoneAdpsFrtsd.set_text("보호구역 출입증 사본(앞면)");
                p.staPrtcZoneAdpsFrtsd.set_cssclass("sta_WF_Label_E");
                p.staPrtcZoneAdpsFrtsd.set_flexgrow("1");
                p.staPrtcZoneAdpsFrtsd.move("0","44","305","46",null,null);

                p.btnPrtcZoneAdpsFrtsdSample.set_taborder("1");
                p.btnPrtcZoneAdpsFrtsdSample.set_text("샘플첨부파일명");
                p.btnPrtcZoneAdpsFrtsdSample.set_cssclass("btn_WF_Small");
                p.btnPrtcZoneAdpsFrtsdSample.set_fittocontents("width");
                p.btnPrtcZoneAdpsFrtsdSample.move("813","76","120","40",null,null);

                p.panBtnFile.set_taborder("3");
                p.panBtnFile.set_flexgrow("1");
                p.panBtnFile.set_flexcrossaxisalign("start");
                p.panBtnFile.set_flexmainaxisalign("end");
                p.panBtnFile.set_horizontalgap("10");
                p.panBtnFile.move("433","58","305","46",null,null);

                p.panTitle.set_taborder("4");
                p.panTitle.set_cssclass("pan_WF_FileTitle");
                p.panTitle.set_flexwrap("wrap");
                p.panTitle.set_fittocontents("height");
                p.panTitle.move("0","124","100%","92",null,null);

                p.Static00.set_taborder("5");
                p.Static00.set_text("파일수 : ");
                p.Static00.set_fittocontents("width");
                p.Static00.move("88","123","48","46",null,null);

                p.staPrtcZoneAdpsFrtsdCnt.set_taborder("6");
                p.staPrtcZoneAdpsFrtsdCnt.set_text("0");
                p.staPrtcZoneAdpsFrtsdCnt.set_fittocontents("width");
                p.staPrtcZoneAdpsFrtsdCnt.move("165","143","9","46",null,null);

                p.Static02.set_taborder("7");
                p.Static02.set_text("개");
                p.Static02.set_fittocontents("width");
                p.Static02.move("293","131","13","46",null,null);

                p.panFileNum.set_taborder("8");
                p.panFileNum.set_flexgrow("1");
                p.panFileNum.set_horizontalgap("4");
                p.panFileNum.move("20","190","305","46",null,null);

                p.btnPrtcZoneAdpsFrtsdDel.set_taborder("9");
                p.btnPrtcZoneAdpsFrtsdDel.set_text("전체파일삭제");
                p.btnPrtcZoneAdpsFrtsdDel.set_cssclass("btn_WF_FileDel");
                p.btnPrtcZoneAdpsFrtsdDel.set_fittocontents("width");
                p.btnPrtcZoneAdpsFrtsdDel.move("512","135","125","40",null,null);

                p.panBtnDel.set_taborder("10");
                p.panBtnDel.set_flexcrossaxisalign("center");
                p.panBtnDel.set_flexmainaxisalign("end");
                p.panBtnDel.set_flexgrow("1");
                p.panBtnDel.move("517","141","305","46",null,null);

                p.panFile.set_taborder("12");
                p.panFile.set_fittocontents("height");
                p.panFile.set_spacing("10px 0px 0px 0px");
                p.panFile.set_flexwrap("wrap");
                p.panFile.set_verticalgap("4");
                p.panFile.set_flexgrow("1");
                p.panFile.move("0","42","300","230",null,null);

                p.staPrtcZoneAdpsBaksd.set_taborder("14");
                p.staPrtcZoneAdpsBaksd.set_text("보호구역 출입증 사본(뒷면)");
                p.staPrtcZoneAdpsBaksd.set_cssclass("sta_WF_Label_E");
                p.staPrtcZoneAdpsBaksd.set_flexgrow("1");
                p.staPrtcZoneAdpsBaksd.move("0","44","305","46",null,null);

                p.btnPrtcZoneAdpsBaksdSample.set_taborder("15");
                p.btnPrtcZoneAdpsBaksdSample.set_text("샘플첨부파일명");
                p.btnPrtcZoneAdpsBaksdSample.set_cssclass("btn_WF_Small");
                p.btnPrtcZoneAdpsBaksdSample.set_fittocontents("width");
                p.btnPrtcZoneAdpsBaksdSample.move("813","76","120","40",null,null);

                p.btnPrtcZoneAdpsBaksdFile.set_taborder("16");
                p.btnPrtcZoneAdpsBaksdFile.set_text("파일선택");
                p.btnPrtcZoneAdpsBaksdFile.set_cssclass("btn_WF_FileUp");
                p.btnPrtcZoneAdpsBaksdFile.getSetter("upcolid").set("prtcZoneAdpsBaksdFile");
                p.btnPrtcZoneAdpsBaksdFile.move("124","58","116","40",null,null);

                p.panBtnFile00.set_taborder("17");
                p.panBtnFile00.set_flexgrow("1");
                p.panBtnFile00.set_flexcrossaxisalign("start");
                p.panBtnFile00.set_flexmainaxisalign("end");
                p.panBtnFile00.set_horizontalgap("10");
                p.panBtnFile00.move("433","58","305","46",null,null);

                p.panTitle00.set_taborder("18");
                p.panTitle00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00.set_flexwrap("wrap");
                p.panTitle00.set_fittocontents("height");
                p.panTitle00.move("0","124","100%","92",null,null);

                p.Static00_00.set_taborder("19");
                p.Static00_00.set_text("파일수 : ");
                p.Static00_00.set_fittocontents("width");
                p.Static00_00.move("88","123","48","46",null,null);

                p.staPrtcZoneAdpsBaksdCnt.set_taborder("20");
                p.staPrtcZoneAdpsBaksdCnt.set_text("0");
                p.staPrtcZoneAdpsBaksdCnt.set_fittocontents("width");
                p.staPrtcZoneAdpsBaksdCnt.move("165","143","9","46",null,null);

                p.Static02_00.set_taborder("21");
                p.Static02_00.set_text("개");
                p.Static02_00.set_fittocontents("width");
                p.Static02_00.move("293","131","13","46",null,null);

                p.panFileNum00.set_taborder("22");
                p.panFileNum00.set_flexgrow("1");
                p.panFileNum00.set_horizontalgap("4");
                p.panFileNum00.move("20","190","305","46",null,null);

                p.btnPrtcZoneAdpsBaksdDel.set_taborder("23");
                p.btnPrtcZoneAdpsBaksdDel.set_text("전체파일삭제");
                p.btnPrtcZoneAdpsBaksdDel.set_cssclass("btn_WF_FileDel");
                p.btnPrtcZoneAdpsBaksdDel.set_fittocontents("width");
                p.btnPrtcZoneAdpsBaksdDel.move("512","135","125","40",null,null);

                p.panBtnDel00.set_taborder("24");
                p.panBtnDel00.set_flexcrossaxisalign("center");
                p.panBtnDel00.set_flexmainaxisalign("end");
                p.panBtnDel00.set_flexgrow("1");
                p.panBtnDel00.move("517","141","305","46",null,null);

                p.panFile00.set_taborder("27");
                p.panFile00.set_fittocontents("height");
                p.panFile00.set_spacing("10px 0px 0px 0px");
                p.panFile00.set_flexwrap("wrap");
                p.panFile00.set_verticalgap("4");
                p.panFile00.set_flexgrow("1");
                p.panFile00.move("520","0","300","230",null,null);

                p.staCarLcnDpct.set_taborder("31");
                p.staCarLcnDpct.set_text("자동차 운전면허증 사본");
                p.staCarLcnDpct.set_cssclass("sta_WF_Label_E");
                p.staCarLcnDpct.set_flexgrow("1");
                p.staCarLcnDpct.move("0","44","305","46",null,null);

                p.btnCarLcnDpctSample.set_taborder("32");
                p.btnCarLcnDpctSample.set_text("샘플첨부파일명");
                p.btnCarLcnDpctSample.set_cssclass("btn_WF_Small");
                p.btnCarLcnDpctSample.set_fittocontents("width");
                p.btnCarLcnDpctSample.move("813","76","120","40",null,null);

                p.btnCarLcnDpctFile.set_taborder("33");
                p.btnCarLcnDpctFile.set_text("파일선택");
                p.btnCarLcnDpctFile.set_cssclass("btn_WF_FileUp");
                p.btnCarLcnDpctFile.getSetter("upcolid").set("carLcnDpctFile");
                p.btnCarLcnDpctFile.move("124","58","116","40",null,null);

                p.panBtnFile01.set_taborder("34");
                p.panBtnFile01.set_flexgrow("1");
                p.panBtnFile01.set_flexcrossaxisalign("start");
                p.panBtnFile01.set_flexmainaxisalign("end");
                p.panBtnFile01.set_horizontalgap("10");
                p.panBtnFile01.move("433","58","305","46",null,null);

                p.panTitle01.set_taborder("35");
                p.panTitle01.set_cssclass("pan_WF_FileTitle");
                p.panTitle01.set_flexwrap("wrap");
                p.panTitle01.set_fittocontents("height");
                p.panTitle01.move("0","124","100%","92",null,null);

                p.Static00_01.set_taborder("36");
                p.Static00_01.set_text("파일수 : ");
                p.Static00_01.set_fittocontents("width");
                p.Static00_01.move("88","123","48","46",null,null);

                p.staCarLcnDpctCnt.set_taborder("37");
                p.staCarLcnDpctCnt.set_text("0");
                p.staCarLcnDpctCnt.set_fittocontents("width");
                p.staCarLcnDpctCnt.move("165","143","9","46",null,null);

                p.Static02_01.set_taborder("38");
                p.Static02_01.set_text("개");
                p.Static02_01.set_fittocontents("width");
                p.Static02_01.move("293","131","13","46",null,null);

                p.panFileNum01.set_taborder("39");
                p.panFileNum01.set_flexgrow("1");
                p.panFileNum01.set_horizontalgap("4");
                p.panFileNum01.move("20","190","305","46",null,null);

                p.btnCarLcnDpctDel.set_taborder("40");
                p.btnCarLcnDpctDel.set_text("전체파일삭제");
                p.btnCarLcnDpctDel.set_cssclass("btn_WF_FileDel");
                p.btnCarLcnDpctDel.set_fittocontents("width");
                p.btnCarLcnDpctDel.move("512","135","125","40",null,null);

                p.panBtnDel01.set_taborder("41");
                p.panBtnDel01.set_flexcrossaxisalign("center");
                p.panBtnDel01.set_flexmainaxisalign("end");
                p.panBtnDel01.set_flexgrow("1");
                p.panBtnDel01.move("517","141","305","46",null,null);

                p.panFile01.set_taborder("45");
                p.panFile01.set_fittocontents("height");
                p.panFile01.set_spacing("10px 0px 0px 0px");
                p.panFile01.set_flexwrap("wrap");
                p.panFile01.set_verticalgap("4");
                p.panFile01.set_flexgrow("1");
                p.panFile01.move("0","42","300","230",null,null);

                p.staBizcrdPhoto.set_taborder("46");
                p.staBizcrdPhoto.set_text("번명함 사진 파일");
                p.staBizcrdPhoto.set_cssclass("sta_WF_Label_E");
                p.staBizcrdPhoto.set_flexgrow("1");
                p.staBizcrdPhoto.move("0","44","305","46",null,null);

                p.btnBizcrdPhotoSample.set_taborder("47");
                p.btnBizcrdPhotoSample.set_text("샘플첨부파일명");
                p.btnBizcrdPhotoSample.set_cssclass("btn_WF_Small");
                p.btnBizcrdPhotoSample.set_fittocontents("width");
                p.btnBizcrdPhotoSample.move("813","76","120","40",null,null);

                p.btnBizcrdPhotoFile.set_taborder("48");
                p.btnBizcrdPhotoFile.set_text("파일선택");
                p.btnBizcrdPhotoFile.set_cssclass("btn_WF_FileUp");
                p.btnBizcrdPhotoFile.getSetter("upcolid").set("bizcrdPhotoFile");
                p.btnBizcrdPhotoFile.move("124","58","116","40",null,null);

                p.panBtnFile00_00.set_taborder("49");
                p.panBtnFile00_00.set_flexgrow("1");
                p.panBtnFile00_00.set_flexcrossaxisalign("start");
                p.panBtnFile00_00.set_flexmainaxisalign("end");
                p.panBtnFile00_00.set_horizontalgap("10");
                p.panBtnFile00_00.move("433","58","305","46",null,null);

                p.panTitle00_00.set_taborder("50");
                p.panTitle00_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00.set_flexwrap("wrap");
                p.panTitle00_00.set_fittocontents("height");
                p.panTitle00_00.move("0","124","100%","92",null,null);

                p.Static00_00_00.set_taborder("51");
                p.Static00_00_00.set_text("파일수 : ");
                p.Static00_00_00.set_fittocontents("width");
                p.Static00_00_00.move("88","123","48","46",null,null);

                p.staBizcrdPhotoCnt.set_taborder("52");
                p.staBizcrdPhotoCnt.set_text("0");
                p.staBizcrdPhotoCnt.set_fittocontents("width");
                p.staBizcrdPhotoCnt.move("165","143","9","46",null,null);

                p.Static02_00_00.set_taborder("53");
                p.Static02_00_00.set_text("개");
                p.Static02_00_00.set_fittocontents("width");
                p.Static02_00_00.move("293","131","13","46",null,null);

                p.panFileNum00_00.set_taborder("54");
                p.panFileNum00_00.set_flexgrow("1");
                p.panFileNum00_00.set_horizontalgap("4");
                p.panFileNum00_00.move("20","190","305","46",null,null);

                p.btnBizcrdPhotoDel.set_taborder("55");
                p.btnBizcrdPhotoDel.set_text("전체파일삭제");
                p.btnBizcrdPhotoDel.set_cssclass("btn_WF_FileDel");
                p.btnBizcrdPhotoDel.set_fittocontents("width");
                p.btnBizcrdPhotoDel.move("512","135","125","40",null,null);

                p.panBtnDel00_00.set_taborder("56");
                p.panBtnDel00_00.set_flexcrossaxisalign("center");
                p.panBtnDel00_00.set_flexmainaxisalign("end");
                p.panBtnDel00_00.set_flexgrow("1");
                p.panBtnDel00_00.move("517","141","305","46",null,null);

                p.panFile00_00.set_taborder("60");
                p.panFile00_00.set_fittocontents("height");
                p.panFile00_00.set_spacing("10px 0px 0px 0px");
                p.panFile00_00.set_flexwrap("wrap");
                p.panFile00_00.set_verticalgap("4");
                p.panFile00_00.set_flexgrow("1");
                p.panFile00_00.move("520","0","300","230",null,null);

                p.staSubTitle02_00.set_taborder("62");
                p.staSubTitle02_00.set_text("운전허가증 제출사진");
                p.staSubTitle02_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00.move("30","50","100%","50",null,null);

                p.btnMinDrvn.set_taborder("63");
                p.btnMinDrvn.set_cssclass("btn_WF_ACMinus");
                p.btnMinDrvn.move("1390.00","18","34","34",null,null);

                p.Panel01_02.set_taborder("64");
                p.Panel01_02.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02.set_spacing("0px 10px");
                p.Panel01_02.set_horizontalgap("10");
                p.Panel01_02.set_flexcrossaxisalign("center");
                p.Panel01_02.set_flexmainaxisalign("end");
                p.Panel01_02.move("710.00","50","100%","50",null,null);

                p.sub_tit01.set_taborder("65");
                p.sub_tit01.set_background("#ffffff");
                p.sub_tit01.move("0","0","100%","50",null,null);

                p.pan00.set_taborder("28");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("0","60","100.00%","241",null,null);

                p.pan01.set_taborder("61");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_fittocontents("height");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.move("0","60","100.00%","241",null,null);

                p.Panel00.set_taborder("11");
                p.Panel00.move("20","51","100%","46",null,null);

                p.grdPrtcZoneAdpsFrtsd.set_taborder("13");
                p.grdPrtcZoneAdpsFrtsd.set_binddataset("dsFile");
                p.grdPrtcZoneAdpsFrtsd.set_autofittype("col");
                p.grdPrtcZoneAdpsFrtsd.set_cssclass("grd_WF_FileAdd");
                p.grdPrtcZoneAdpsFrtsd.move("20.00","114","100%","40",null,null);

                p.Panel00_00.set_taborder("25");
                p.Panel00_00.move("20","51","100%","46",null,null);

                p.grdPrtcZoneAdpsBaksd.set_taborder("26");
                p.grdPrtcZoneAdpsBaksd.set_binddataset("dsFile");
                p.grdPrtcZoneAdpsBaksd.set_autofittype("col");
                p.grdPrtcZoneAdpsBaksd.set_cssclass("grd_WF_FileAdd");
                p.grdPrtcZoneAdpsBaksd.move("20.00","114","100%","40",null,null);

                p.sta00_00.set_taborder("29");
                p.sta00_00.set_text("주민번호 뒷자리 및 출입증 발급번호 마스킹");
                p.sta00_00.set_cssclass("sta_WF_Des");
                p.sta00_00.set_fittocontents("height");
                p.sta00_00.move("20","20","100%","30",null,null);

                p.sta00_00_00.set_taborder("30");
                p.sta00_00_00.set_text("주민번호 뒷자리 및 출입증 발급번호 마스킹");
                p.sta00_00_00.set_cssclass("sta_WF_Des");
                p.sta00_00_00.set_fittocontents("height");
                p.sta00_00_00.move("20","20","100%","30",null,null);

                p.Panel00_01.set_taborder("42");
                p.Panel00_01.move("20","51","100%","46",null,null);

                p.grdCarLcnDpct.set_taborder("43");
                p.grdCarLcnDpct.set_binddataset("dsFile");
                p.grdCarLcnDpct.set_autofittype("col");
                p.grdCarLcnDpct.set_cssclass("grd_WF_FileAdd");
                p.grdCarLcnDpct.move("20.00","114","100%","40",null,null);

                p.sta00_00_01.set_taborder("44");
                p.sta00_00_01.set_text("주민번호 뒷자리 및 출입증 발급번호 마스킹");
                p.sta00_00_01.set_cssclass("sta_WF_Des");
                p.sta00_00_01.set_fittocontents("height");
                p.sta00_00_01.move("20","20","100%","30",null,null);

                p.Panel00_00_00.set_taborder("57");
                p.Panel00_00_00.move("20","51","100%","46",null,null);

                p.grdBizcrdPhoto.set_taborder("58");
                p.grdBizcrdPhoto.set_binddataset("dsFile");
                p.grdBizcrdPhoto.set_autofittype("col");
                p.grdBizcrdPhoto.set_cssclass("grd_WF_FileAdd");
                p.grdBizcrdPhoto.move("20.00","114","100%","40",null,null);

                p.sta00_00_00_00.set_taborder("59");
                p.sta00_00_00_00.set_text("354x472 [해상도 200dpi이상]");
                p.sta00_00_00_00.set_cssclass("sta_WF_Des");
                p.sta00_00_00_00.set_fittocontents("height");
                p.sta00_00_00_00.move("20","20","100%","30",null,null);

                p.btnPrtcZoneAdpsFrtsdFile.set_taborder("2");
                p.btnPrtcZoneAdpsFrtsdFile.set_text("파일선택");
                p.btnPrtcZoneAdpsFrtsdFile.set_cssclass("btn_WF_FileUp");
                p.btnPrtcZoneAdpsFrtsdFile.getSetter("upcolid").set("prtcZoneAdpsFrtsdFile");
                p.btnPrtcZoneAdpsFrtsdFile.move("124","58","116","40",null,null);
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
            //-- Default Layout : this.divForm.form.Div06.form
            obj = new Layout("default","",0,0,this.divForm.form.Div06.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sta00_00_01_01.set_taborder("9");
                p.sta00_00_01_01.set_text("위의 개인정보 수집ㆍ이용에 대한 동의를 거부할 권리가 있습니다. 그러나 필수 항목 수집ㆍ이용 동의를 거부할 경우 전동차 등록 및 운전허가 신청을 할 수 있습니다.");
                p.sta00_00_01_01.set_cssclass("sta_WF_Des");
                p.sta00_00_01_01.set_fittocontents("height");
                p.sta00_00_01_01.move("-10.00","372","100%","47",null,null);

                p.sta00_00_01_00_00.set_taborder("10");
                p.sta00_00_01_00_00.set_text("필수 항목 수집ㆍ이용 동의를 거부하실 경우 전동차 등록 및 운전허가 신청을 하실수 없으시나,\r\n선택항목 수집ㆍ이용 동의를 거부하셔도 전동차 등록 및 운전허가 신청에는 제한이 없습니다.");
                p.sta00_00_01_00_00.set_cssclass("sta_WF_Des");
                p.sta00_00_01_00_00.set_fittocontents("height");
                p.sta00_00_01_00_00.move("-10.00","421","100%","47",null,null);

                p.TextArea00_01.set_taborder("1");
                p.TextArea00_01.set_readonly("true");
                p.TextArea00_01.set_value("전동차 운전허가증 제출목록: 보호구역 출입증 사본, 자동차 운전면허증 사본, 반명함 사진파일\n운전허가증 사진의 경우 반명함 사이즈 픽셀 354x472 [해상도 200dpi 이상]\n보호구역 출입증의 경우 앞,뒷면 모두 제출\n운전면허증의 경우 주민번호 뒷자리와 운전면허번호는 삭제한 후 제출\n전동차 등록증 제출서류: 제작서 발행제품 사양서(전동차 제원), 보험가입증서, 전동차 전,후,측면 사진\n보험가입증서의 경우 기간 내의 유효한 영업배상책임보험이어야 함\n전동차 등록번호 및 운전허가증 유효기간 : 24개월");
                p.TextArea00_01.move("171","111","100%","180",null,null);

                p.staSubTitle02_00.set_taborder("2");
                p.staSubTitle02_00.set_text("전동차 등록 및 운전허가 승인 및 운영 기준");
                p.staSubTitle02_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00.move("30","50","100%","50",null,null);

                p.btnMinAprvYn.set_taborder("3");
                p.btnMinAprvYn.set_cssclass("btn_WF_ACMinus");
                p.btnMinAprvYn.move("1390.00","18","34","34",null,null);

                p.Panel01_02.set_taborder("4");
                p.Panel01_02.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02.set_spacing("0px 10px");
                p.Panel01_02.set_horizontalgap("10");
                p.Panel01_02.set_flexcrossaxisalign("center");
                p.Panel01_02.set_flexmainaxisalign("end");
                p.Panel01_02.move("710.00","50","100%","50",null,null);

                p.sub_tit01.set_taborder("5");
                p.sub_tit01.set_background("#ffffff");
                p.sub_tit01.move("0","0","100%","50",null,null);

                p.pan00.set_taborder("0");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("10px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("0","60","100.00%","201",null,null);

                p.staLabel00_03_00_00_00.set_taborder("6");
                p.staLabel00_03_00_00_00.set_text("전동차 등록 및 운전허가 신청을 위한 개인정보 수집ㆍ이용 동의서");
                p.staLabel00_03_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_03_00_00_00.move("10","98","100%","46",null,null);

                p.TextArea00.set_taborder("7");
                p.TextArea00.set_readonly("true");
                p.TextArea00.set_value("입주자서비스포털은 전동차 등록 및 운전허가에대한 전동차 등록 및 운전허가 신청 서비스 제공을 위해 아래와 같이 개인정보를 수집ㆍ이용하고자 합니다.\n내용을 자세히 읽으신 후 여부를 결정하여 주시길 바랍니다.");
                p.TextArea00.move("0.00","285","100.00%","60",null,null);

                p.grdCn.set_taborder("8");
                p.grdCn.set_autofittype("col");
                p.grdCn.set_readonly("true");
                p.grdCn.set_binddataset("dsCn");
                p.grdCn.set_autosizingtype("none");
                p.grdCn.set_extendsizetype("none");
                p.grdCn.move("500.00","4747","100.00%","140",null,null);

                p.Panel00_00_03_00_00_00.set_taborder("11");
                p.Panel00_00_03_00_00_00.set_type("vertical");
                p.Panel00_00_03_00_00_00.set_flexgrow("1");
                p.Panel00_00_03_00_00_00.set_verticalgap("10");
                p.Panel00_00_03_00_00_00.set_fittocontents("height");
                p.Panel00_00_03_00_00_00.set_minwidth("");
                p.Panel00_00_03_00_00_00.move("10.00","98","100%","380",null,null);

                p.pan01.set_taborder("12");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_fittocontents("height");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.set_type("horizontal");
                p.pan01.set_visible("false");
                p.pan01.move("0","60","100.00%","391",null,null);

                p.staPrvcClctEsntlAgreYn.set_taborder("13");
                p.staPrvcClctEsntlAgreYn.set_text("개인정보 수집(필수) 동의여부");
                p.staPrvcClctEsntlAgreYn.set_cssclass("sta_WF_Label_E");
                p.staPrvcClctEsntlAgreYn.move("10","98","100%","46",null,null);

                p.chkPrvcClctEsntlAgreYn.set_taborder("14");
                p.chkPrvcClctEsntlAgreYn.set_truevalue("1");
                p.chkPrvcClctEsntlAgreYn.set_falsevalue("0");
                p.chkPrvcClctEsntlAgreYn.set_value("0");
                p.chkPrvcClctEsntlAgreYn.move("274.00","355","150","46",null,null);

                p.sta00_00_01.set_taborder("15");
                p.sta00_00_01.set_text("신청자의 개인정보수집 및 이용동의여부(필수항목)");
                p.sta00_00_01.set_cssclass("sta_WF_Des");
                p.sta00_00_01.set_fittocontents("height");
                p.sta00_00_01.move("20","20","100%","30",null,null);

                p.Panel00_00_03_00_00_00_00.set_taborder("16");
                p.Panel00_00_03_00_00_00_00.set_type("vertical");
                p.Panel00_00_03_00_00_00_00.set_flexgrow("1");
                p.Panel00_00_03_00_00_00_00.set_verticalgap("10");
                p.Panel00_00_03_00_00_00_00.set_fittocontents("height");
                p.Panel00_00_03_00_00_00_00.set_minwidth("");
                p.Panel00_00_03_00_00_00_00.move("64.00","495","980","176",null,null);

                p.pan02.set_taborder("17");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.set_type("horizontal");
                p.pan02.set_visible("false");
                p.pan02.move("0","60","100.00%","187",null,null);

                p.staPrvcClctChcAgreYn.set_taborder("18");
                p.staPrvcClctChcAgreYn.set_text("개인정보 수집(선택) 동의여부");
                p.staPrvcClctChcAgreYn.set_cssclass("sta_WF_Label_E");
                p.staPrvcClctChcAgreYn.move("10","98","100%","46",null,null);

                p.rdoPrvcClctChcAgreYn.set_taborder("19");
                p.rdoPrvcClctChcAgreYn.set_innerdataset(divForm_form_Div06_form_rdoPrvcClctChcAgreYn_innerdataset);
                p.rdoPrvcClctChcAgreYn.set_codecolumn("codecolumn");
                p.rdoPrvcClctChcAgreYn.set_datacolumn("datacolumn");
                p.rdoPrvcClctChcAgreYn.set_direction("vertical");
                p.rdoPrvcClctChcAgreYn.set_fittocontents("width");
                p.rdoPrvcClctChcAgreYn.set_index("-1");
                p.rdoPrvcClctChcAgreYn.move("200.00","328","490","40",null,null);

                p.sta00_00_01_00.set_taborder("20");
                p.sta00_00_01_00.set_text("신청자의 개인정보수집 및 이용동의여부(선택항목)");
                p.sta00_00_01_00.set_cssclass("sta_WF_Des");
                p.sta00_00_01_00.set_fittocontents("height");
                p.sta00_00_01_00.move("20","20","100%","30",null,null);

                p.sta00_00_01_00_01.set_taborder("21");
                p.sta00_00_01_00_01.set_text("선택항목에 해당하는 정보를 입력하지 않으셔도 서비스 이용에는 제한이 없습니다.");
                p.sta00_00_01_00_01.set_cssclass("sta_WF_Des");
                p.sta00_00_01_00_01.set_fittocontents("height");
                p.sta00_00_01_00_01.move("20","20","100%","30",null,null);

                p.Panel00_00_03_00_00_00_00_00.set_taborder("22");
                p.Panel00_00_03_00_00_00_00_00.set_type("vertical");
                p.Panel00_00_03_00_00_00_00_00.set_flexgrow("1");
                p.Panel00_00_03_00_00_00_00_00.set_verticalgap("10");
                p.Panel00_00_03_00_00_00_00_00.set_minwidth("");
                p.Panel00_00_03_00_00_00_00_00.move("64.00","495","980","176",null,null);

                p.pan03.set_taborder("23");
                p.pan03.set_horizontalgap("20");
                p.pan03.set_flexcrossaxiswrapalign("start");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_fittocontents("height");
                p.pan03.set_verticalgap("0");
                p.pan03.set_spacing("0px 20px 10px 20px");
                p.pan03.set_cssclass("pal_WF_DtlBg");
                p.pan03.set_type("horizontal");
                p.pan03.set_visible("false");
                p.pan03.move("0","60","100.00%","187",null,null);
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
            //-- Default Layout : this.divForm.form.Div07.form
            obj = new Layout("default","",0,0,this.divForm.form.Div07.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.txtCnvyMttr.set_taborder("1");
                p.txtCnvyMttr.set_readonly("false");
                p.txtCnvyMttr.set_displaynulltext("내용입력");
                p.txtCnvyMttr.move("171","111","100%","100",null,null);

                p.staSubTitle02_00.set_taborder("2");
                p.staSubTitle02_00.set_text("전달사항");
                p.staSubTitle02_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00.move("30","50","100%","50",null,null);

                p.btnMinMttr.set_taborder("3");
                p.btnMinMttr.set_cssclass("btn_WF_ACMinus");
                p.btnMinMttr.move("1390.00","18","34","34",null,null);

                p.Panel01_02.set_taborder("4");
                p.Panel01_02.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02.set_spacing("0px 10px");
                p.Panel01_02.set_horizontalgap("10");
                p.Panel01_02.set_flexcrossaxisalign("center");
                p.Panel01_02.set_flexmainaxisalign("end");
                p.Panel01_02.move("710.00","50","100%","50",null,null);

                p.sub_tit01.set_taborder("5");
                p.sub_tit01.set_background("#ffffff");
                p.sub_tit01.move("0","0","100%","50",null,null);

                p.pan00.set_taborder("0");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("10px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.set_type("horizontal");
                p.pan00.move("0","60","100.00%","121",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div07.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div07.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div07.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div07.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divInfoGuide.set_taborder("8");
                p.divInfoGuide.set_text("서비스 흐름 및 작업방법 안내");
                p.divInfoGuide.set_cssclass("div_WF_InfoGuide");
                p.divInfoGuide.set_minheight("300");
                p.divInfoGuide.set_maxheight("");
                p.divInfoGuide.move("1660.00","262","100%","300",null,null);

                p.Div00.set_taborder("0");
                p.Div00.set_text("Div00");
                p.Div00.set_cssclass("div_WF_Bg");
                p.Div00.set_fittocontents("height");
                p.Div00.move("0","0","100%","509",null,null);

                p.Div01.set_taborder("1");
                p.Div01.set_text("Div00");
                p.Div01.set_cssclass("div_WF_Bg");
                p.Div01.set_fittocontents("height");
                p.Div01.set_visible("false");
                p.Div01.move("0","Div00:30","100%","988",null,null);

                p.Div02.set_taborder("2");
                p.Div02.set_text("Div00");
                p.Div02.set_cssclass("div_WF_Bg");
                p.Div02.set_fittocontents("height");
                p.Div02.set_visible("false");
                p.Div02.move("0","Div01:30","100%","563",null,null);

                p.Div03.set_taborder("3");
                p.Div03.set_text("Div00");
                p.Div03.set_cssclass("div_WF_Bg");
                p.Div03.set_fittocontents("height");
                p.Div03.set_visible("false");
                p.Div03.move("0","30","100%","257",null,null);

                p.Div04.set_taborder("4");
                p.Div04.set_text("Div00");
                p.Div04.set_cssclass("div_WF_Bg");
                p.Div04.set_fittocontents("height");
                p.Div04.set_visible("false");
                p.Div04.move("0","30","100%","671",null,null);

                p.Div05.set_taborder("5");
                p.Div05.set_text("Div00");
                p.Div05.set_cssclass("div_WF_Bg");
                p.Div05.set_fittocontents("height");
                p.Div05.set_visible("false");
                p.Div05.move("0","30","100%","532",null,null);

                p.Div06.set_taborder("6");
                p.Div06.set_text("Div00");
                p.Div06.set_cssclass("div_WF_Bg");
                p.Div06.set_fittocontents("height");
                p.Div06.set_visible("false");
                p.Div06.move("0","30","100%","1016",null,null);

                p.Div07.set_taborder("7");
                p.Div07.set_text("Div00");
                p.Div07.set_cssclass("div_WF_Bg");
                p.Div07.set_fittocontents("height");
                p.Div07.set_visible("false");
                p.Div07.move("0","30","100%","171",null,null);
            	}
            );
            obj.set_verticalgap("20");
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
            obj.set_verticalgap("20");
            obj.set_type("vertical");
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

                p.btn02.set_taborder("1");
                p.btn02.set_text("청구 정보");
                p.btn02.set_cssclass("btn_WF_Quick");
                p.btn02.move("17.00","btn00:0","100%","45",null,null);

                p.btn03.set_taborder("2");
                p.btn03.set_text("신청 정보");
                p.btn03.set_cssclass("btn_WF_Quick");
                p.btn03.move("17.00","110","100%","45",null,null);

                p.btn04.set_taborder("3");
                p.btn04.set_text("전동차등록증 제출서류");
                p.btn04.set_cssclass("btn_WF_Quick");
                p.btn04.move("17.00","155","100%","45",null,null);

                p.btn05.set_taborder("4");
                p.btn05.set_text("전동차등록증 제출사진");
                p.btn05.set_cssclass("btn_WF_Quick");
                p.btn05.move("17.00","200","100%","45",null,null);

                p.btn06.set_taborder("5");
                p.btn06.set_text("운전허가증 제출사진");
                p.btn06.set_cssclass("btn_WF_Quick");
                p.btn06.move("17.00","200","100%","45",null,null);

                p.btn07.set_taborder("6");
                p.btn07.set_text("전동차 등록 및 운전허가\r\n승인 및 운영 기준");
                p.btn07.set_cssclass("btn_WF_Quick");
                p.btn07.set_fittocontents("height");
                p.btn07.move("17.00","200","100%","45",null,null);

                p.btn08.set_taborder("7");
                p.btn08.set_text("전달사항");
                p.btn08.set_cssclass("btn_WF_Quick");
                p.btn08.move("17.00","200","100%","45",null,null);
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
                p.btn00.move(null,null,"460",null,null,null);

                p.btn02.set_cssclass("btn_WF_QuickM");
                p.btn02.set_fittocontents("width");

                p.btn03.set_cssclass("btn_WF_QuickM");
                p.btn03.set_fittocontents("width");

                p.btn04.set_cssclass("btn_WF_QuickM");
                p.btn04.set_fittocontents("width");

                p.btn05.set_cssclass("btn_WF_QuickM");
                p.btn05.set_fittocontents("width");

                p.btn06.set_cssclass("btn_WF_QuickM");
                p.btn06.set_fittocontents("width");

                p.btn07.set_cssclass("btn_WF_QuickM");
                p.btn07.set_fittocontents("width");

                p.btn08.set_cssclass("btn_WF_QuickM");
                p.btn08.set_fittocontents("width");
            	}
            );
            obj.set_type("horizontal");
            obj.set_spacing("0px 0px  0px  0px");
            this.divQuick.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divBtn.form
            obj = new Layout("default","",0,0,this.divBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btn00.set_taborder("0");
                p.btn00.set_text("임시저장");
                p.btn00.set_cssclass("btn_WF_No");
                p.btn00.set_fittocontents("width");
                p.btn00.set_visible("false");
                p.btn00.move("7","20","100","40",null,null);

                p.btn00_01.set_taborder("2");
                p.btn00_01.set_text("종료");
                p.btn00_01.set_cssclass("btn_WF_No");
                p.btn00_01.set_fittocontents("width");
                p.btn00_01.set_visible("false");
                p.btn00_01.move("7","20","100","40",null,null);

                p.btn00_00.set_taborder("1");
                p.btn00_00.set_text("신청");
                p.btn00_00.set_cssclass("btn_WF_Yes");
                p.btn00_00.set_fittocontents("width");
                p.btn00_00.set_visible("false");
                p.btn00_00.move("btn00:10","20","100","40",null,null);
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
                p.btn00.set_fittocontents("width");

                p.btn00_01.set_fittocontents("width");

                p.btn00_00.set_fittocontents("width");
            	}
            );
            obj.set_flexwrap("nowrap");
            obj.set_flexmainaxisalign("start");
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
                p.set_titletext("신청서작성");

                p.divGuide.set_taborder("0");
                p.divGuide.set_text("div00");
                p.divGuide.set_visible("false");
                p.divGuide.set_cssclass("div_GD_Tip");
                p.divGuide.move("1590.00","135","450","385",null,null);

                p.divTitle.set_taborder("3");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0","1420","50",null,null);

                p.divForm.set_taborder("1");
                p.divForm.set_text("div00");
                p.divForm.set_cssclass("div_WF_QuickFrBg");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("height");
                p.divForm.move("0","divTitle:10",null,"5167","60",null);

                p.divQuick.set_taborder("2");
                p.divQuick.set_text("div00");
                p.divQuick.set_cssclass("div_WF_QuickMenu");
                p.divQuick.set_fittocontents("height");
                p.divQuick.move("1122","62","296","255",null,null);

                p.divBtn.set_taborder("4");
                p.divBtn.set_text("div00");
                p.divBtn.set_fittocontents("height");
                p.divBtn.set_cssclass("div_WF_QuickBtnBg");
                p.divBtn.move("1122","divQuick:0","296","131",null,null);

                p.RaonkUpload.set_taborder("5");
                p.RaonkUpload.set_DevelopLangage("JAVA");
                p.RaonkUpload.set_ExtensionAllowOrLimit("1");
                p.RaonkUpload.set_HandlerUrl("http://localhost:8080/common/uploadDownload.do");
                p.RaonkUpload.set_RunTimes("html5");
                p.RaonkUpload.set_ButtonBarView("0");
                p.RaonkUpload.set_AllowDuplicationFile("1");
                p.RaonkUpload.set_text("");
                p.RaonkUpload.set_DisableDeleteConfirm("1");
                p.RaonkUpload.set_positionstep("0");
                p.RaonkUpload.set_visible("false");
                p.RaonkUpload.move("0","5230","1020","200",null,null);

                p.btn00.set_taborder("6");
                p.btn00.set_text("btn00");
                p.btn00.move("210","36","102","46",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,1800,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divQuick.set_cssclass("div_WF_QuickMenuM");
                p.divQuick.move("20","60",null,"60","0",null);

                p.divBtn.set_cssclass("div_WF_QuickBtnBgM");
                p.divBtn.set_fittocontents("none");
                p.divBtn.move("0",null,null,"80","0","0");

                p.divForm.set_cssclass("div_WF_QuickFrBgM");
                p.divForm.set_fittocontents("none");
                p.divForm.move("0","120",null,null,"0","60");

                p.divTitle.move("0","0",null,"50","0",null);

                p.divGuide.move("1190.00","156","450","385",null,null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.Div01.form.rdoPayPicSmYn","value","dsList","payPicSmYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.Div01.form.rdoClmSe","value","dsList","clmMtdCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.Div01.form.edtPayPicNm","value","dsList","payPicNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.Div01.form.edtPayPicTelno","value","dsList","payPicTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.Div01.form.edtPayPicMblTelno","value","dsList","payPicMblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.Div01.form.divEdtPop.form.edtZip","value","dsList","clmZip");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.Div01.form.edtAddr","value","dsList","clmAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.Div01.form.edtDtlAddr","value","dsList","clmDtlAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.Div01.form.edtAcuntEmlAddr1","value","dsList","clmEml1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divForm.form.Div01.form.edtTxivEmlAddr1","value","dsList","txivEml1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divForm.form.Div01.form.edtAcuntEmlAddr2","value","dsList","clmEml2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divForm.form.Div01.form.edtTxivEmlAddr2","value","dsList","txivEml2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divForm.form.Div02.form.rdoAplyKnd","value","dsList","aplyKndCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divForm.form.Div02.form.rdoCustType","value","dsList","custTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divForm.form.Div02.form.calDmndBgngYmd","value","dsList","dmndPrdBgngYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divForm.form.Div02.form.cal00_00_00","value","dsList","dmndPrdEndYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divForm.form.Div02.form.cboBldg","value","dsList","bldgSeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divForm.form.Div02.form.cboSrvcAplySe","value","dsList","srvcAplySeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divForm.form.Div02.form.rdoZone","value","dsList","zoneSeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divForm.form.Div06.form.chkPrvcClctEsntlAgreYn","value","dsList","prvcClctEsntlAgreYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divForm.form.Div06.form.rdoPrvcClctChcAgreYn","value","dsList","prvcClctChcAgreYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divForm.form.Div07.form.txtCnvyMttr","value","dsList","cnvyMttrCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divForm.form.Div00.form.edtAplcntNm","value","dsList","aplcntNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divForm.form.Div00.form.edtAplcntInstNm","value","dsList","aplcntInstNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divForm.form.Div00.form.edtRgtrNm","value","dsList","rgtrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divForm.form.Div00.form.edtRgtrInstNm","value","dsList","rgtrInstNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divForm.form.Div00.form.edtRgtrTelno","value","dsList","rgtrTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divForm.form.Div00.form.edtRgtrMblTelno","value","dsList","rgtrMblTelno");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.addIncludeScript("LIF080M00.xfdl","xjs::TaskCom.xjs");
        this.registerScript("LIF080M00.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	LIF080M00.xfdl
        *  @Creator 	CHG
        *  @CreateDate 	2024/10/18
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/10/18				CHG							최초생성
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
        this.aplySeCd = "TSPCAR001"; // 신청구분코드(전동차신청 : "TSPCAR001")
        this.jobCd = "TAS10438"; // 작업코드(기본값 TAS10438 : 신청서작성)


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
        	this.divForm.form.Div07.visible = true;
        	this.divForm.form.Div06.visible = true;
        	// this.divForm.form.Div05.visible = true;
        	// this.divForm.form.Div04.visible = true;
        	// this.divForm.form.Div03.visible = true;
        	this.divForm.form.Div00.visible = true;

        	nexacro._OnceCallbackTimer.callonce(this, function () {
        		this.divForm.form.Div02.visible = true;
        		this.divForm.form.Div01.visible = true;
        		this.resetScroll();
        	},50);
        	/* 화면처리 End */

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

        	// 공통코드 함수 호출
        	this.cfnComCdLoad({ id:"comAplyKndSearch", cbf:"fnCallback", dsAplyKndList:"CARSVCTYPE:S" }); // 신청구분코드
        	this.cfnComCdLoad({ id:"comBldgSeSearch", cbf:"fnCallback", dsBldgSeList:"TSPLOC:S" }); // 건물코드코드

        	// 신청서 번호 있는지 체크 없으면 신규등록
        	this.aplyNo = this.getOwnerFrame().aplyNo;   // 신청번호
        	if (this.gfnIsNull(this.aplyNo)) {
        	    var nRow = this.dsList.addRow();

        		this.dsList.setColumn(nRow, "rgtrId"		, this.gvUserId);	// 등록자id
        		this.dsList.setColumn(nRow, "rgtrNm"		, this.gvUserNm);	// 등록자명
        		this.dsList.setColumn(nRow, "rgtrInstCd"	, this.gvCoId);		// 등록자기관코드
        		this.dsList.setColumn(nRow, "rgtrInstNm"	, this.gvCoNm);		// 등록자기관명
        		this.dsList.setColumn(nRow, "rgtrDeptCd"	, this.gvDeptId);	// 등록자부서코드
        		this.dsList.setColumn(nRow, "rgtrTelno"		, this.gvTelNo);	// 등록자전화번호
        		this.dsList.setColumn(nRow, "rgtrMblTelno"	, this.gvMblTelNo);	// 등록자휴대전화번호
        		this.dsList.setColumn(nRow, "aplcntId"		, this.gvUserId);	// 신청자id
        		this.dsList.setColumn(nRow, "aplcntNm"		, this.gvUserNm);	// 신청자명
        		this.dsList.setColumn(nRow, "aplcntInstCd"	, this.gvCoId);		// 신청자기관코드
        		this.dsList.setColumn(nRow, "aplcntInstNm"	, this.gvCoNm);		// 신청자기관명
        		this.dsList.setColumn(nRow, "aplcntDeptCd"	, this.gvDeptId);	// 신청자부서코드
        		this.dsList.setColumn(nRow, "aplySeCd"		, this.aplySeCd);	// 신청구분코드

        		// 해당 TASK ID로 버튼 자동 생성 -> 추후에 신청번호가 있는지 없는지 체크해서 task id 박아넣어줘야함. 현재는 신청서 작성으로 했음.
        		this.cfnBtnCrt({ crtTrgt:this.divBtn, lnkgEvnt:this.btn_onclick, inqCnd : { jobPrcsPrgrsSeCd:this.jobCd} });

        	} else {
        		// 전동차목록 조회
        		this.fnSearch(this.aplyNo);

        	}
        	this.resetScroll();

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

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        /**************************************************************************
         * @name : fnSearch
         * @description : 전동차목록 조회
         ***************************************************************************/
        this.fnSearch = function(paramAplyNo)
        {
        	if(this.dsSearch.getRowCount() > 0){
        		this.dsSearch.clearData();

        	}

        	this.dsSearch.addRow();
        	this.dsSearch.setColumn(0, "aplyNo", paramAplyNo);

        	var strSvcId    = "elcttrAplyInq";
        	var strSvcUrl   = "elcttr/elcttrAplyInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsList=dsList dsCnvyMttr=dsCnvyMttr dsAtfl=dsAtfl";
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

        	var strSvcId    = vStrSvcId;
        	var strSvcUrl   = vStrSvcUrl;
        	var inData      = "dsList=dsList";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

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
        			this.divForm.form.Div00.form.edtAplySeNm.value = this.cfnGvbkAplySeNm();

        			break;

        		case "comBldgSeSearch" : // 건물구분 조회
        			// 건물구분 제한값 'TSPLOCTSC010', 'TSPLOCTSC070', 'TSPLOCTSC020' ,'TSPLOCTSC030' ,'TSPLOCTSC090'
        			this.dsBldgSeList.filter("cdId == 'TSPLOCTSC010' || cdId == 'TSPLOCTSC070' || cdId == 'TSPLOCTSC020' || cdId == 'TSPLOCTSC030' || cdId == 'TSPLOCTSC090'");

        			// 전체 조회를 위해 [선택] 추가
        			this.dsBldgSeList.insertRow(0);
        			this.dsBldgSeList.setColumn(0, "cdId", "");
        			this.dsBldgSeList.setColumn(0, "cdNm", "선택");

        			this.divForm.form.Div02.form.cboBldg.index = 0;

        			break;

        		case "comAplyKndSearch" : // 신청구분 조회
        			this.divForm.form.Div02.form.cboSrvcAplySe.index = 0;

        			break;

        		case "fnSearch": // 조회
        			// this.divForm.form.divGrd.form.staTotal.text = "총 <fc v='#1e4ebe'>" + this.dsList.getRowCount() + "</fc>건";

        			break;

        		case "elcttrAplyStrg" : // 임시저장, 신청
        			this.gfnAlertMsg("저장", this.objApp.getVariable("gvRetMsg"));
        			// this.gfnCloseMenu("MNG_0000000295");
        			// this.fnMovePage('MNG_0000000021', 'MNG_0000000144', 'work::CST/CAD/CST009M01.xfdl');

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
        	if (sPopupId == "wtohAgreYnPop")
        	{
        		if (this.gfnIsNull(sRtn)) return;
        		var objRtn = JSON.parse(sRtn);

        		var strWtohAgreYn = objRtn.wtohAgreYn;

        		if(!this.gfnIsNull(strWtohAgreYn) && strWtohAgreYn == "1"){
        			this.dsList.setColumn(0, "wtohAgreYn", strWtohAgreYn);

        			// 저장
        			this.fnSave(this.vStrSvcId, this.vStrSvcUrl);

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
        			this.fnSave(this.vStrSvcId, this.vStrSvcUrl);

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
        	var sPayPicSmYn = this.dsList.getColumn(0, "payPicSmYn"); // 납부담당자동일여부
        	var sClmMtdCd = this.dsList.getColumn(0, "clmMtdCd"); // 청구방식
        	var sAplyKndCd = this.dsList.getColumn(0, "aplyKndCd"); // 신청종류코드

        	if(this.gfnIsNull(sPayPicSmYn)){ // 납부담당자동일여부
        		this.divForm.form.Div01.form.rdoPayPicSmYn.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["납부담당자동일여부 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsList.getColumn(0, "payPicNm"))){ // 납부담당자명
        		this.divForm.form.Div01.form.edtPayPicNm.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["납부담당자명 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsList.getColumn(0, "payPicTelno"))){ // 납부담당자전화번호
        		this.divForm.form.Div01.form.edtPayPicTelno.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["납부담당자전화번호 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsList.getColumn(0, "payPicMblTelno"))){ // 납부담당자휴대전화번호
        		this.divForm.form.Div01.form.edtPayPicMblTelno.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["납부담당자휴대전화번호 \n"]);
        		return false;
        	}
        	// 납부담당자동일여부 - 동일하지않을때
        	if(sPayPicSmYn == "0"){
        		// payPicPrvcClctUtztnWtcsPath, wtohAgreYn 서약서동의여부, 납부담당자 개인정보 수집/이용동의서 추후에 추가

        	}

        	/* 우편번호 및 주소 우선 주석 -> 팝업완료 시 해제
        	if(this.gfnIsNull(this.dsList.getColumn(0, "clmZip"))){ // 청구우편번호
        		this.divForm.form.Div01.form.divEdtPop.form.edtZip.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["청구우편번호 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsList.getColumn(0, "clmAddr"))){ // 청구주소
        		this.divForm.form.Div01.form.edtAddr.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["청구주소 \n"]);
        		return false;
        	}
        	*/
        	if(this.gfnIsNull(this.dsList.getColumn(0, "clmDtlAddr"))){ // 청구상세주소
        		this.divForm.form.Div01.form.edtDtlAddr.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["청구상세주소 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(sClmMtdCd)){ // 청구방식
        		this.divForm.form.Div01.form.rdoClmSe.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["청구방식 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsList.getColumn(0, "txivEml1"))){ // 세금계산서이메일
        		this.divForm.form.Div01.form.edtTxivEmlAddr1.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["세금계산서이메일 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsList.getColumn(0, "txivEml2"))){ // 세금계산서이메일주소
        		this.divForm.form.Div01.form.edtTxivEmlAddr2.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["세금계산서이메일주소 \n"]);
        		return false;
        	}
        	// 청구방식 - 이메일일때 청구서이메일주소 체크
        	if(sClmMtdCd == "1"){
        		if(this.gfnIsNull(this.dsList.getColumn(0, "clmEml1"))){ // 청구서이메일
        			this.divForm.form.Div01.form.edtAcuntEmlAddr1.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["청구서이메일 \n"]);
        			return false;
        		}
        		if(this.gfnIsNull(this.dsList.getColumn(0, "clmEml2"))){ // 청구서이메일주소
        			this.divForm.form.Div01.form.edtAcuntEmlAddr2.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["청구서이메일주소 \n"]);
        			return false;
        		}

        	}

        	if(this.gfnIsNull(sAplyKndCd)){ // 신청종류
        		this.divForm.form.Div02.form.rdoAplyKnd.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["신청종류 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsList.getColumn(0, "custTypeCd"))){ // 고객유형코드
        		this.divForm.form.Div02.form.rdoCustType.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["고객유형 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsList.getColumn(0, "dmndPrdBgngYmd"))){ // 요청기간시작일자
        		this.divForm.form.Div02.form.calDmndBgngYmd.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["요청기간시작일자 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsList.getColumn(0, "bldgSeCd"))){ // 건물구분코드
        		this.divForm.form.Div02.form.cboBldg.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["건물구분 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsList.getColumn(0, "zoneSeCd"))){ // 구역구분코드
        		this.divForm.form.Div02.form.rdoZone.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["구역구분 \n"]);
        		return false;
        	}
        	if(this.gfnIsNull(this.dsList.getColumn(0, "srvcAplySeCd"))){ // 서비스신청구분코드
        		this.divForm.form.Div02.form.cboSrvcAplySe.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["서비스신청구분 \n"]);
        		return false;
        	}

        	/* 첨부파일 관련 체크 추 후에 수정 작업예정, 포커스도 추가해줘야함.
        	if(sAplyKndCd == "CARREQTYPE001"){ // 신청종류코드 - 전동차등록
        		if(this.gfnIsNull(this.dsList.getColumn(0, "fbctnDcmntPblcnPrdctSpcfatPath"))){ // 제작서류발행제품사양서경로
        			// this.divForm.form.Div01.form.edtAcuntEmlAddr2.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["제작서류발행제품사양서 \n"]);
        			return false;
        		}
        		if(this.gfnIsNull(this.dsList.getColumn(0, "insrncJoinPrdocPath"))){ // 보험가입증명서경로
        			// this.divForm.form.Div01.form.edtAcuntEmlAddr2.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["보험가입증명서 \n"]);
        			return false;
        		}
        		if(this.gfnIsNull(this.dsList.getColumn(0, "elcttrFrtPhotoPath"))){ // 전동차전면사진경로
        			// this.divForm.form.Div01.form.edtAcuntEmlAddr2.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["전동차전면사진 \n"]);
        			return false;
        		}
        		if(this.gfnIsNull(this.dsList.getColumn(0, "elcttrRarPhotoPath"))){ // 전동차후면사진경로
        			// this.divForm.form.Div01.form.edtAcuntEmlAddr2.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["전동차후면사진 \n"]);
        			return false;
        		}
        		if(this.gfnIsNull(this.dsList.getColumn(0, "elcttrFlkPhotoPath"))){ // 전동차측면사진경로
        			// this.divForm.form.Div01.form.edtAcuntEmlAddr2.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["전동차측면사진 \n"]);
        			return false;
        		}

        	}else if(sAplyKndCd == "CARREQTYPE002"){ // 신청종류코드 - 전동차운전허가
        		if(this.gfnIsNull(this.dsList.getColumn(0, "prtcZoneAdpsDpctFrtsdPath"))){ // 보호구역출입증사본앞면경로
        			// this.divForm.form.Div01.form.edtAcuntEmlAddr2.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["보호구역출입증사본앞면 \n"]);
        			return false;
        		}
        		if(this.gfnIsNull(this.dsList.getColumn(0, "prtcZoneAdpsDpctBaksdPath"))){ // 보호구역출입증사본뒷면경로
        			// this.divForm.form.Div01.form.edtAcuntEmlAddr2.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["보호구역출입증사본뒷면 \n"]);
        			return false;
        		}
        		if(this.gfnIsNull(this.dsList.getColumn(0, "carDrvnLcnDpctPath"))){ // 자동차운전면허증사본경로
        			// this.divForm.form.Div01.form.edtAcuntEmlAddr2.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["자동차운전면허증사본 \n"]);
        			return false;
        		}
        		if(this.gfnIsNull(this.dsList.getColumn(0, "bizcrdPhotoFilePath"))){ // 반명함사진파일경로
        			// this.divForm.form.Div01.form.edtAcuntEmlAddr2.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["반명함사진 \n"]);
        			return false;
        		}

        	}
        	*/

        	if(sPayPicSmYn == "1"){ // 납부담당자동일여부 - 동일하지않음
        		if(sAplyKndCd == "CARREQTYPE002"){ // 신청종류코드 - 전동차운전허가
        			if(this.gfnIsNull(this.dsList.getColumn(0, "prvcClctEsntlAgreYn2"))){ // 개인정보수집필수동의여부
        				this.divForm.form.Div06.form.chkPrvcClctEsntlAgreYn.setFocus();
        				this.gfnAlertMsg("msg", "MSG_011", ["개인정보수집필수동의여부를 \n체크하여 주세요."]);
        				return false;
        			}
        			if(this.dsList.getColumn(0, "prvcClctEsntlAgreYn2") == "0"){
        				this.divForm.form.Div06.form.chkPrvcClctEsntlAgreYn.setFocus();
        				this.gfnAlertMsg("msg", "MSG_011", ["개인정보수집필수동의여부를 \n체크하여 주세요."]);
        				return false;

        			}
        		}

        	}else if(sPayPicSmYn == "0"){ // 납부담당자동일여부 - 동일함
        		if(this.gfnIsNull(this.dsList.getColumn(0, "prvcClctEsntlAgreYn"))){ // 개인정보수집필수동의여부
        			this.divForm.form.Div06.form.chkPrvcClctEsntlAgreYn.setFocus();
        			this.gfnAlertMsg("msg", "MSG_011", ["개인정보수집필수동의여부를 \n체크하여 주세요."]);
        			return false;
        		}
        		if(this.dsList.getColumn(0, "prvcClctEsntlAgreYn") == "0"){
        			this.divForm.form.Div06.form.chkPrvcClctEsntlAgreYn.setFocus();
        			this.gfnAlertMsg("msg", "MSG_011", ["개인정보수집필수동의여부를 \n체크하여 주세요."]);
        			return false;

        		}
        		if(this.gfnIsNull(this.dsList.getColumn(0, "prvcClctChcAgreYn"))){ // 개인정보수집선택동의여부
        			this.divForm.form.Div06.form.rdoPrvcClctChcAgreYn.setFocus();
        			this.gfnAlertMsg("msg", "MSG_011", ["개인정보수집선택동의여부를 \n체크하여 주세요."]);
        			return false;
        		}

        	}

        	return true;

        }

        /**************************************************************************
         * @name : cfnAddAtfl
         * @description : 첨부 파일 추가
         ***************************************************************************/
        this.cfnAddAtfl = function(oFile) {
        	// 이미 첨부된 파일이 있으면 기존 파일 삭제
        	this.cfnDelAtfl(oFile.upcolid);
        	console.log("oFile.upcolid = " + oFile.upcolid);
        	// RaonkUpload에 컬럼ID 설정
        	this.RaonkUpload.SetFileCustomValue(-1, JSON.stringify({ "strCustomValue" : oFile.upcolid }));

            // 첨부파일 DS에 추가
        	var nRow = this.dsAtfl.findRow("colId", oFile.upcolid);
                nRow = Math.max(nRow, 0) ? nRow : this.dsAtfl.addRow();

        	this.dsAtfl.setColumn(nRow, "jobSeCd"      , "TSC"                 );  // 작업구분
        	this.dsAtfl.setColumn(nRow, "jobTycoSeCd"  , "TSPTSC001"           );  // 작업공종구분코드
        	this.dsAtfl.setColumn(nRow, "aplcfmNo"     , ""                    );  // 신청서번호(서비스에서설정)
        	this.dsAtfl.setColumn(nRow, "atchFileNm"   , oFile.userdata.strName);  // 첨부파일명
        	this.dsAtfl.setColumn(nRow, "atchFileMngNo", ""                    );  // 첨부파일관리번호(Main화면(CST002M00)에서 파일 업로드 후 설정)
        	this.dsAtfl.setColumn(nRow, "colId"        , oFile.upcolid         );  // 컬럼ID
        	this.dsAtfl.setColumn(nRow, "atchSeCd"     , oFile.upatchsecd      );  // 첨부파일구분코드
        	this.dsAtfl.setColumn(nRow, "atchDtlSeCd"  , oFile.upatchdtlsecd   );  // 첨부파일상세구분코드

        	// 첨부 파일 표출용 DS 설정
            this.cfnSetAtflExprs( oFile.userdata.strName + '(' + oFile.userdata.nSize + ')'  // 파일풀명
        	                    , oFile.userdata.strName                                     // 원본파일명
        						, oFile.userdata.nSize                                       // 파일크기
        						, oFile.upcolid                                              // 컬럼ID
        						);
        };

        /**************************************************************************
         * @name : cfnDelAtfl
         * @description : 첨부 파일 삭제
         ***************************************************************************/
        this.cfnDelAtfl = function(colId) {
            // 존재하지 않으면 돌아감
        	if(this.gfnIsNull(colId) || this.gfnIsNull(this.dsFile.getColumn(0, colId + "_orgnlFileNm"))) { return; }

            // RaonkUpload mergeFile 삭제
            var oRaonkUpload = this.RaonkUpload;
        	if(oRaonkUpload.GetListInfo().mergeFile) {
        	    oRaonkUpload.GetListInfo().mergeFile.forEach(function(v, i, o) {
        			if(v.customValue == colId) {
        				oRaonkUpload.SetSelectFile(i, '0');
        				oRaonkUpload.DeleteSelectedFile();
        			}
        		});
        	}

        	// 첨부파일 삭제
        	this.dsAtfl.deleteRow(this.dsAtfl.findRow("colId", colId));

        	// 첨부 파일 표출용 DS 설정
            this.cfnSetAtflExprs("", "", "", colId);
        };

        /**************************************************************************
         * @name : cfnSetAtflExprs
         * @description : 첨부 파일 표출용 DS 설정
         ***************************************************************************/
        this.cfnSetAtflExprs = function(fullName, orgnlFileNm, fileSz, colId) {
        	// 화면에 표출할 파일정보를 그리드에 설정
        	this.dsFile.setColumn(0, colId + "_fullName"   , fullName   );  // 파일풀명
        	this.dsFile.setColumn(0, colId + "_orgnlFileNm", orgnlFileNm);  // 원본파일명
        	this.dsFile.setColumn(0, colId + "_fileSz"     , fileSz     );  // 파일크기
        	this.dsFile.setColumn(0, colId + "_colId"      , this.gfnIsNull(fullName) ? "" : colId);  // 컬럼ID
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        /**************************************************************************
         * @name : btnMinAplyInfo_onclick
         * @description : 화면 접기/펼치기 기능
         ***************************************************************************/
        this.btnMin_onclick = function(obj,e)
        {
        	var objNm = obj.name;
        	var objClass = obj.cssclass;

        	if(objClass == "btn_WF_ACMinus"){
        		if(objNm == "btnMinAplcntInfo"){
        			this.divForm.form.Div00.form.pan00.visible = false;
        			this.divForm.form.Div00.form.pan01.visible = false;
        			this.divForm.form.Div00.form.pan02.visible = false;
        			this.divForm.form.Div00.form.pan03.visible = false;

        		}else if(objNm == "btnMinClmInfo"){
        			this.divForm.form.Div01.form.pan00.visible = false
        			this.divForm.form.Div01.form.pan01.visible = false;
        			this.divForm.form.Div01.form.pan02.visible = false;
        			this.divForm.form.Div01.form.panFile.visible = false;
        			this.divForm.form.Div01.form.pan03.visible = false;
        			this.divForm.form.Div01.form.pan04.visible = false;

        		}else if(objNm == "btnMinAplyInfo"){
        			this.divForm.form.Div02.form.pan00.visible = false;
        			this.divForm.form.Div02.form.pan01.visible = false;
        			this.divForm.form.Div02.form.pan02.visible = false;
        			this.divForm.form.Div02.form.pan03.visible = false;
        			this.divForm.form.Div02.form.pan04.visible = false;

        		}else if(objNm == "btnMinDoc"){
        			this.divForm.form.Div03.form.pan00.visible = false;

        		}else if(objNm == "btnMinPhoto"){
        			this.divForm.form.Div04.form.pan00.visible = false;
        			this.divForm.form.Div04.form.pan01.visible = false;
        			this.divForm.form.Div04.form.pan02.visible = false;

        		}else if(objNm == "btnMinDrvn"){
        			this.divForm.form.Div05.form.pan00.visible = false;
        			this.divForm.form.Div05.form.pan01.visible = false;

        		}else if(objNm == "btnMinAprvYn"){
        			this.divForm.form.Div06.form.pan00.visible = false;
        			this.divForm.form.Div06.form.pan01.visible = false;
        			this.divForm.form.Div06.form.pan02.visible = false;
        			this.divForm.form.Div06.form.pan03.visible = false;

        		}else if(objNm == "btnMinMttr"){
        			this.divForm.form.Div07.form.pan00.visible = false;

        		}

        		obj.cssclass = "btn_WF_ACPlus";

        	}else if(objClass == "btn_WF_ACPlus"){
        		if(objNm == "btnMinAplcntInfo"){
        			this.divForm.form.Div00.form.pan00.visible = true;
        			this.divForm.form.Div00.form.pan01.visible = true;
        			this.divForm.form.Div00.form.pan02.visible = true;
        			this.divForm.form.Div00.form.pan03.visible = true;

        		}else if(objNm == "btnMinClmInfo"){
        			this.divForm.form.Div01.form.pan00.visible = true
        			this.divForm.form.Div01.form.pan01.visible = true;
        			this.divForm.form.Div01.form.pan02.visible = true;
        			this.divForm.form.Div01.form.panFile.visible = true;
        			this.divForm.form.Div01.form.pan03.visible = true;
        			this.divForm.form.Div01.form.pan04.visible = true;

        		}else if(objNm == "btnMinAplyInfo"){
        			this.divForm.form.Div02.form.pan00.visible = true;
        			this.divForm.form.Div02.form.pan01.visible = true;
        			this.divForm.form.Div02.form.pan02.visible = true;
        			this.divForm.form.Div02.form.pan03.visible = true;
        			this.divForm.form.Div02.form.pan04.visible = true;

        		}else if(objNm == "btnMinDoc"){
        			this.divForm.form.Div03.form.pan00.visible = true;

        		}else if(objNm == "btnMinPhoto"){
        			this.divForm.form.Div04.form.pan00.visible = true;
        			this.divForm.form.Div04.form.pan01.visible = true;
        			this.divForm.form.Div04.form.pan02.visible = true;

        		}else if(objNm == "btnMinDrvn"){
        			this.divForm.form.Div05.form.pan00.visible = true;
        			this.divForm.form.Div05.form.pan01.visible = true;

        		}else if(objNm == "btnMinAprvYn"){
        			this.divForm.form.Div06.form.pan00.visible = true;
        			this.divForm.form.Div06.form.pan01.visible = true;
        			this.divForm.form.Div06.form.pan02.visible = true;
        			this.divForm.form.Div06.form.pan03.visible = true;

        		}else if(objNm == "btnMinMttr"){
        			this.divForm.form.Div07.form.pan00.visible = true;

        		}

        		obj.cssclass = "btn_WF_ACMinus";

        	}

        	this.resetScroll();

        };

        /**************************************************************************
         * @name : rdoPayPicSmYn_onitemchanged
         * @description : 납부담당자 라디오 수정 완료 시
         ***************************************************************************/
        this.rdoPayPicSmYn_onitemchanged = function(obj,e)
        {
        	var objVal = obj.value;

        	var aplySeCd = this.divForm.form.Div02.form.rdoAplyKnd.value;

        	// 기본 바인딩 세팅
        	// 개인정보 필수동의
        	var sCompid = "divForm.form.Div06.form.chkPrvcClctEsntlAgreYn";
        	var sItem = "";

        	for(var i = 0; i < this.binds.length; i++){
        		if(this.binds[i].compid == sCompid){
        			sItem = this.binds[i].name;
        			break;

        		}

        	}

        	// 같은 항목으로 동적바인딩 제거
        	this.removeChild(sItem);

        	// 바인딩 생성
        	var bindObj = new BindItem();
        	bindObj.init(sItem, sCompid, "value", "dsList", "prvcClctEsntlAgreYn");
        	this.addChild(sItem, bindObj);
        	bindObj.bind();

        	if(objVal == "1"){ // 신청자와동일하지않음 - 납부담당자 개인정보 이용 동의서 보여줌
        		this.divForm.form.Div01.form.panFile.visible = true;

        		if(aplySeCd == "CARREQTYPE002"){ // 신청종류가 자동차운전허가신청일때
        			this.divForm.form.Div06.form.pan01.visible = true; // 개인정보 수집/이용동의서 보여줌.
        			this.divForm.form.Div06.form.pan02.visible = true; // 개인정보 필수동의여부 보여줌.
        			this.divForm.form.Div06.form.pan03.visible = false; // 개인정보 선택동의여부 안보여줌.

        			// 같은 항목으로 동적바인딩 제거
        			this.removeChild(sItem);

        			// 바인딩 생성
        			bindObj.init(sItem, sCompid, "value", "dsList", "prvcClctEsntlAgreYn2");
        			this.addChild(sItem, bindObj);
        			bindObj.bind();

        		}else {
        			this.divForm.form.Div06.form.pan01.visible = false; // 개인정보 수집/이용동의서 안보여줌.
        			this.divForm.form.Div06.form.pan02.visible = false; // 개인정보 필수동의여부 안보여줌.
        			this.divForm.form.Div06.form.pan03.visible = false; // 개인정보 선택동의여부 안보여줌.

        		}

        		// 납부담당자 이름, 전화번호 등 입력가능하게 readonly 풀어줌.
        		this.divForm.form.Div01.form.edtPayPicNm.readonly = false;
        		this.divForm.form.Div01.form.edtPayPicTelno.readonly = false;
        		this.divForm.form.Div01.form.edtPayPicMblTelno.readonly = false;

        		// value 초기화
        		this.divForm.form.Div01.form.edtPayPicNm.value = "";
        		this.divForm.form.Div01.form.edtPayPicTelno.value = "";
        		this.divForm.form.Div01.form.edtPayPicMblTelno.value = "";

        	}else if(objVal == "0"){ // 신청자와동일 - 납부담당자 개인정보 이용 동의서 안보여줌
        		this.divForm.form.Div01.form.panFile.visible = false;

        		this.divForm.form.Div06.form.pan01.visible = true; // 개인정보 수집/이용동의서 보여줌.
        		this.divForm.form.Div06.form.pan02.visible = true; // 개인정보 필수동의여부 보여줌.
        		this.divForm.form.Div06.form.pan03.visible = true; // 개인정보 선택동의여부 보여줌.

        		// 납부담당자 이름, 전화번호 등 입력 불가능하게 readonly 처히해줌.
        		this.divForm.form.Div01.form.edtPayPicNm.readonly = true;
        		this.divForm.form.Div01.form.edtPayPicTelno.readonly = true;
        		this.divForm.form.Div01.form.edtPayPicMblTelno.readonly = true;

        		// value 세션값 세팅
        		this.divForm.form.Div01.form.edtPayPicNm.value = this.gvUserNm;
        		this.divForm.form.Div01.form.edtPayPicTelno.value = this.gvTelNo;
        		this.divForm.form.Div01.form.edtPayPicMblTelno.value = this.gvMblTelNo;

        	}
        	this.resetScroll();

        };

        /**************************************************************************
         * @name : rdoClmSe_onitemchanged
         * @description : 청구방식 라디오 수정 완료 시
         ***************************************************************************/
        this.rdoClmSe_onitemchanged = function(obj,e)
        {
        	var objVal = obj.value;

        	if(objVal == "1"){ // 이메일 - 청구서이메일주소 보여줌
        		this.divForm.form.Div01.form.pan02_02_00.visible = true;

        	}else if(objVal == "0"){ // 지로용지 - 청구서이메일주소 안보여줌
        		this.divForm.form.Div01.form.pan02_02_00.visible = false;

        	}
        	this.resetScroll();

        };

        /**************************************************************************
         * @name : rdoAplyKnd_onitemchanged
         * @description : 신청종류 라디오 수정 완료 시
         ***************************************************************************/
        this.rdoAplyKnd_onitemchanged = function(obj,e)
        {
        	var objVal = obj.value;

        	var payPicCd = this.divForm.form.Div01.form.rdoPayPicSmYn.value;

        	// 기본 바인딩 세팅
        	// 개인정보 필수동의
        	var sCompid = "divForm.form.Div06.form.chkPrvcClctEsntlAgreYn";
        	var sItem = "";

        	for(var i = 0; i < this.binds.length; i++){
        		if(this.binds[i].compid == sCompid){
        			sItem = this.binds[i].name;
        			break;

        		}

        	}

        	// 같은 항목으로 동적바인딩 제거
        	this.removeChild(sItem);

        	// 바인딩 생성
        	var bindObj = new BindItem();
        	bindObj.init(sItem, sCompid, "value", "dsList", "prvcClctEsntlAgreYn");
        	this.addChild(sItem, bindObj);
        	bindObj.bind();

        	if(objVal == "CARREQTYPE001"){ // 자동차등록신청
        		this.divForm.form.Div03.visible = true; // 전동차등록증 제출서류 보여줌
        		this.divForm.form.Div04.visible = true; // 전동차등록증 제출사진 보여줌

        		this.divForm.form.Div05.visible = false; // 운전허가증 제출사진 안보여줌

        		if(payPicCd == "1"){ // 납부담당자 동일 여부 신청자와동일하지않음 일때
        			this.divForm.form.Div06.form.pan01.visible = false; // 개인정보 수집/이용동의서 안보여줌.
        			this.divForm.form.Div06.form.pan02.visible = false; // 개인정보 필수동의여부 안보여줌.
        			this.divForm.form.Div06.form.pan03.visible = false; // 개인정보 선택동의여부 안보여줌.

        		}

        		this.dsAplyKndList.filter("cdId == 'CARSVCTYPE001' || cdId == 'CARSVCTYPE002' || cdId == ''");
        		this.divForm.form.Div02.form.cboSrvcAplySe.index = 0;

        	}else if(objVal == "CARREQTYPE002"){ // 자동차운전허가신청
        		this.divForm.form.Div03.visible = false; // 전동차등록증 제출서류 안보여줌
        		this.divForm.form.Div04.visible = false; // 전동차등록증 제출사진 안보여줌

        		this.divForm.form.Div05.visible = true; // 운전허가증 제출사진 보여줌

        		if(payPicCd == "1"){ // 납부담당자 동일 여부 신청자와동일하지않음 일때
        			this.divForm.form.Div06.form.pan01.visible = true; // 개인정보 수집/이용동의서 보여줌.
        			this.divForm.form.Div06.form.pan02.visible = true; // 개인정보 필수동의여부 보여줌.
        			this.divForm.form.Div06.form.pan03.visible = false; // 개인정보 선택동의여부 안보여줌.

        			// 같은 항목으로 동적바인딩 제거
        			this.removeChild(sItem);

        			// 바인딩 생성
        			bindObj.init(sItem, sCompid, "value", "dsList", "prvcClctEsntlAgreYn2");
        			this.addChild(sItem, bindObj);
        			bindObj.bind();

        		}

        		this.dsAplyKndList.filter("cdId == 'CARSVCTYPE003' || cdId == 'CARSVCTYPE004' || cdId == ''");
        		this.divForm.form.Div02.form.cboSrvcAplySe.index = 0;

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

        	// 수정된 내역이 있는지 체크
        	if(!this.gfnDsIsUpdated(this.dsList)){
        		this.gfnAlertMsg("msg", "MSG_004", [""]);
        		return;

        	}

        	if(vBtnNm == "임시저장"){ // 임시저장 버튼
        		// 임시저장 시 처리자에 자기 자신을 넣어줌.
        		this.dsList.setColumn(0, "prcrId", this.gvUserId);

        		this.vStrSvcId  = "elcttrAplyStrg";
        		this.vStrSvcUrl = "elcttr/elcttrAplyStrg.do";

        	}else if(vBtnNm == "신청"){ // 신청 버튼
        		// 신청 시 처리자작업그룹 넣어줌.
        		this.dsList.setColumn(0, "prcrJobGroupCd", "WOGFACWSO020"); // WOGFACWSO020 : 전동차관리

        		// validation check
        		var res = this.fnValiChk();
        		if(!res){
        			return;

        		}

        		this.vStrSvcId  = "elcttrAplyStrg";
        		this.vStrSvcUrl = "elcttr/elcttrAplyStrg.do";

        	}

        	// 넘겨줄 데이터 세팅
        	this.dsList.setColumn(0, "jobCd", wfInfo.nextStepJobPrcsPrgrsSeCd);
        	this.dsList.setColumn(0, "aplySeCd", this.aplySeCd);
        	this.dsList.setColumn(0, "docCd", "TSPDOC900"); // 공통코드 TSPDOC900 : 전동차신청

        	var curDt = this.gfnGetDate("time");
        	this.dsList.setColumn(0, "aplyDt", curDt);

        	// 청구이메일 세팅
        	if(!this.gfnIsNull(this.dsList.getColumn(0, "clmEml1")) && !this.gfnIsNull(this.dsList.getColumn(0, "clmEml2"))){
        		var sClmEml = this.dsList.getColumn(0, "clmEml1") + "@" + this.dsList.getColumn(0, "clmEml2");

        		this.dsList.setColumn(0, "clmEml", sClmEml);

        	}

        	// 세금계산서이메일 세팅
        	if(!this.gfnIsNull(this.dsList.getColumn(0, "txivEml1")) && !this.gfnIsNull(this.dsList.getColumn(0, "txivEml2"))){
        		var sTxivEml = this.dsList.getColumn(0, "txivEml1") + "@" + this.dsList.getColumn(0, "txivEml2");

        		this.dsList.setColumn(0, "txivEml", sTxivEml);

        	}

        	// 등록일자는 기존의값이 없을때만 현재일시로 넣어줌.
        	if(this.gfnIsNull(this.dsList.getColumn(0, "regDt"))){
        		this.dsList.setColumn(0, "regDt", curDt);

        	}

        	// 납부담당자동일여부 - 동일하지않을때 서약서동의여부, 납부담당자 개인정보 수집/이용동의서 null로 넘겨줌.
        	if(this.dsList.getColumn(0, "payPicSmYn") == "0"){
        		this.dsList.setColumn(0, "payPicPrvcClctUtztnWtcsPath", null);
        		this.dsList.setColumn(0, "wtohAgreYn", null);

        	}

        	// 청구방식 - 지로용지일때 청구메일 null로 넘겨줌.
        	if(this.dsList.getColumn(0, "clmMtdCd") == "0"){
        		this.dsList.setColumn(0, "clmEml", null);

        	}

        	// 신청종류코드 - 전동차등록/전동차운전허가 각각 불필요 파일경로 제거
        	/* 확인해봐야함. 등록된 파일도 제거 해야하는거 아님? */
        	if(this.dsList.getColumn(0, "aplyKndCd") == "CARREQTYPE001"){
        		this.dsList.setColumn(0, "prtcZoneAdpsDpctFrtsdPath", null);
        		this.dsList.setColumn(0, "prtcZoneAdpsDpctBaksdPath", null);
        		this.dsList.setColumn(0, "carDrvnLcnDpctPath", null);
        		this.dsList.setColumn(0, "bizcrdPhotoFilePath", null);

        	}else if(this.dsList.getColumn(0, "aplyKndCd") == "CARREQTYPE002"){
        		this.dsList.setColumn(0, "fbctnDcmntPblcnPrdctSpcfatPath", null);
        		this.dsList.setColumn(0, "insrncJoinPrdocPath", null);
        		this.dsList.setColumn(0, "elcttrFrtPhotoPath", null);
        		this.dsList.setColumn(0, "elcttrRarPhotoPath", null);
        		this.dsList.setColumn(0, "elcttrFlkPhotoPath", null);

        	}

        	// 납부담당자동일여부 - 동일하지 않을때 개인정보동의 항목 null 넣어줌.
        	if(this.dsList.getColumn(0, "payPicSmYn") == "1"){ // 동일하지않음
        		if(this.dsList.getColumn(0, "aplyKndCd") == "CARREQTYPE002"){
        			this.dsList.setColumn(0, "prvcClctEsntlAgreYn", null);
        			this.dsList.setColumn(0, "prvcClctChcAgreYn", null);

        		}else{
        			this.dsList.setColumn(0, "prvcClctEsntlAgreYn", null);
        			this.dsList.setColumn(0, "prvcClctEsntlAgreYn2", null);
        			this.dsList.setColumn(0, "prvcClctChcAgreYn", null);

        		}

        	}else if(this.dsList.getColumn(0, "payPicSmYn") == "0"){ // 동일함
        		this.dsList.setColumn(0, "prvcClctEsntlAgreYn2", null);

        	}

        	/* - 추가 필요시 추가해줘야함.
        	, #{bfrPrcrId}
        	, #{bfrPrcrJobGroupCd}
        	, #{prcrId}
        	, #{prcrJobGroupCd}
        	*/

        	// 신청일때 팝업 호출
        	if(vBtnNm == "신청"){
        		var sTitle = "전동차 안전운전 및 규정준수에 관한 서약서";

        		var objArg   = {
        			  paramInstNm : this.gvCoNm
        			, paramNm : this.gvUserNm
        		};

        		var objOption = {
        			popuptype: "modal"	//modal,modaless
        			, width: 720
        			, height: 580			//width,height 지정하지 않음 popup form size적용
        			, autosize: false
        			, title: sTitle
        			, resize: true
        			, titlebar: true
        		};
        		var sPopupCallBack = "fnPopupCallback";

        		this.gfnOpenPopup("wtohAgreYnPop", "work::LIF/TSC/LIF080P07.xfdl", objArg, sPopupCallBack, objOption);

        	}else{
        		this.gfnConfirmMsg("save_confirm", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"]);

        	}
        }

        /**************************************************************************
         * @name : btnPop_onclick
         * @description : 우편번호찾기
         ***************************************************************************/
        this.btnPop_onclick = function(obj,e)
        {
        	alert("우편번호 찾기!!! 임시데이터");

        	this.dsList.setColumn(0, "clmZip", "11111");
        	this.dsList.setColumn(0, "clmAddr", "테스트 주소~");
        	this.dsList.setColumn(0, "clmDtlAddr", "101동101호");


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
         * @name : FileAtch_onclick
         * @description : 파일선택 버튼 클릭
         ***************************************************************************/
        this.FileAtch_onclick = function(obj,e)
        {
        	console.log("==========================");
        	// 첨부파일 선택 창 열기
        	this.RaonkUpload.OpenFileDialog();
        };

        /**************************************************************************
         * @name : RaonkUpload_RAONKUPLOAD_CreationComplete
         * @description : 업로드 객체가 생성이 완료 시 발생하는 이벤트
         ***************************************************************************/
        this.RaonkUpload_RAONKUPLOAD_CreationComplete = function(obj,  paramObj)
        {
        	console.log("000000000000000");
        	// 업로드 솔루션이 초기 생성시 업로드 할 경로를 지정해야 한다.
        	// /CMM/YYYY/MM/DD/  <<== CMM은 업무별 폴더 지정이고 기본적으로 /년도/월/일 의 폴더 구조를 갖는다.
        	this.RaonkUpload.SetConfig('FolderNameRule', '/LIF/TSC/YYYY/MM/DD/');
        };

        /**************************************************************************
         * @name : RaonkUpload_RAONKUPLOAD_BeforeAddFile
         * @description : 파일이 추가 되기 이전에 발생하는 이벤트
         ***************************************************************************/
        this.RaonkUpload_RAONKUPLOAD_BeforeAddFile = function(obj, paramObj)
        {
        	console.log("111111111111111111111");
        	return true;
        };

        /**************************************************************************
         * @name : RaonkUpload_RAONKUPLOAD_AfterAddFile
         * @description : 파일이 추가 되기 이후에 발생하는 이벤트
         ***************************************************************************/
        this.RaonkUpload_RAONKUPLOAD_AfterAddFile = function(obj, e)
        {
        	console.log("222222222222222222222");
            e.upcolid       = this.getFocus().upcolid       || "";  // 컬럼ID
        	e.upatchsecd    = this.getFocus().upatchsecd    || "";  // 첨부파일구분코드
        	e.upatchdtlsecd = this.getFocus().upatchdtlsecd || "";  // 첨부파일상세구분코드

        	// 첨부 파일 추가
        	this.cfnAddAtfl(e);
        };

        /**************************************************************************
         * @name : RaonkUpload_RAONKUPLOAD_UploadComplete
         * @description : 업로드 완료 시 발생하는 이벤트
         ***************************************************************************/
        this.RaonkUpload_RAONKUPLOAD_UploadComplete = function(obj, e)
        {
        	console.log("3333333333333333333");
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
        	console.log("4444444444444444444");
            // 파일 업로드 중 오류가 발생했습니다!
        	this.gfnAlertMsg(this.RaonkUpload.name, "CST_002", [paramObj.userdata.strMessage]);
        };

        /**************************************************************************
         * @name : btnPop_onclick
         * @description : 우편번호찾기
         ***************************************************************************/
        this.dsAtfl_onload = function(obj,e)
        {
        	// 데이터 조회 후 첨부파일 파일리스트에 셋팅
        	this.gfnDownloadSetting(this.RaonkUpload, this.dsAtfl);

        	// 첨부 파일 표출용 DS 설정
        	for(var i = 0; i < this.dsAtfl.rowcount; i++) {
        		// 첨부 파일 표출용 DS 설정
        		this.cfnSetAtflExprs( this.dsAtfl.getColumn(i, "orgnlFileNm")
        		                    + '(' + this.dsAtfl.getColumn(i, "fileSz") + ')'  // 파일풀명
        							, this.dsAtfl.getColumn(i, "orgnlFileNm")         // 원본파일명
        							, this.dsAtfl.getColumn(i, "fileSz"     )         // 파일크기
        							, this.dsAtfl.getColumn(i, "colId"      )         // 컬럼ID
        							);
        	}
        };


        this.btn00_onclick = function(obj,e)
        {
        	this.resetScroll();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divInfoGuide.form.btnSchClose.addEventHandler("onclick",this.divInfoGuide_btnSchClose_onclick,this);
            this.divForm.form.Div00.form.btnMinAplcntInfo.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.Div01.form.btnPayPicPrvcClctAgreFile.addEventHandler("onclick",this.FileAtch_onclick,this);
            this.divForm.form.Div01.form.btnPayPicPrvcClctAgreDel.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div01.form.divEdtPop.form.btnPop.addEventHandler("onclick",this.btnPop_onclick,this);
            this.divForm.form.Div01.form.rdoClmSe.addEventHandler("onitemchanged",this.rdoClmSe_onitemchanged,this);
            this.divForm.form.Div01.form.cboAcuntEmlAddr.addEventHandler("onitemchanged",this.cbo00_onitemchanged,this);
            this.divForm.form.Div01.form.cboTxivEmlAddr.addEventHandler("onitemchanged",this.cbo00_onitemchanged,this);
            this.divForm.form.Div01.form.btnMinClmInfo.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.Div01.form.rdoPayPicSmYn.addEventHandler("onitemchanged",this.rdoPayPicSmYn_onitemchanged,this);
            this.divForm.form.Div01.form.grdPayPicPrvcClctAgre.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div01.form.grdPayPicPrvcClctAgre.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div02.form.staSrvcAplySe.addEventHandler("onclick",this.Common_onclick,this);
            this.divForm.form.Div02.form.pan02_04_00.addEventHandler("onclick",this.Common_onclick,this);
            this.divForm.form.Div02.form.pan02_02_02_00.addEventHandler("onclick",this.Common_onclick,this);
            this.divForm.form.Div02.form.btnMinAplyInfo.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.Div02.form.rdoAplyKnd.addEventHandler("onitemchanged",this.rdoAplyKnd_onitemchanged,this);
            this.divForm.form.Div02.form.pan04.addEventHandler("onclick",this.Common_onclick,this);
            this.divForm.form.Div02.form.cboSrvcAplySe.addEventHandler("onitemchanged",this.cbo00_onitemchanged,this);
            this.divForm.form.Div02.form.cboBldg.addEventHandler("onitemchanged",this.cbo00_onitemchanged,this);
            this.divForm.form.Div03.form.btnInsrncJoinPrdocFile.addEventHandler("onclick",this.FileAtch_onclick,this);
            this.divForm.form.Div03.form.btnInsrncJoinPrdocDel.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div03.form.btnMinDoc.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.Div03.form.pan00.addEventHandler("onclick",this.Common_onclick,this);
            this.divForm.form.Div03.form.btnPblcnPrdctSpcfatFile.addEventHandler("onclick",this.FileAtch_onclick,this);
            this.divForm.form.Div03.form.btnPblcnPrdctSpcfatDel.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div03.form.grdPblcnPrdctSpcfat.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div03.form.grdPblcnPrdctSpcfat.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div03.form.grdInsrncJoinPrdoc.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div03.form.grdInsrncJoinPrdoc.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div04.form.btnMinPhoto.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.Div04.form.btnElcttrFrtPhotoFile.addEventHandler("onclick",this.FileAtch_onclick,this);
            this.divForm.form.Div04.form.btnElcttrFrtPhotoDel.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div04.form.grdElcttrFrtPhoto.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div04.form.grdElcttrFrtPhoto.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div04.form.pan00.addEventHandler("onclick",this.Common_onclick,this);
            this.divForm.form.Div04.form.btnElcttrRarPhotoFile.addEventHandler("onclick",this.FileAtch_onclick,this);
            this.divForm.form.Div04.form.btnElcttrRarPhotoDel.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div04.form.grdElcttrRarPhoto.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div04.form.grdElcttrRarPhoto.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div04.form.pan01.addEventHandler("onclick",this.Common_onclick,this);
            this.divForm.form.Div04.form.btnElcttrFlkPhotoFile.addEventHandler("onclick",this.FileAtch_onclick,this);
            this.divForm.form.Div04.form.btnElcttrFlkPhotoDel.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div04.form.grdElcttrFlkPhoto.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div04.form.grdElcttrFlkPhoto.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div04.form.pan02.addEventHandler("onclick",this.Common_onclick,this);
            this.divForm.form.Div05.form.btnPrtcZoneAdpsFrtsdDel.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div05.form.btnPrtcZoneAdpsBaksdFile.addEventHandler("onclick",this.FileAtch_onclick,this);
            this.divForm.form.Div05.form.btnPrtcZoneAdpsBaksdDel.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div05.form.btnCarLcnDpctFile.addEventHandler("onclick",this.FileAtch_onclick,this);
            this.divForm.form.Div05.form.btnCarLcnDpctDel.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div05.form.btnBizcrdPhotoFile.addEventHandler("onclick",this.FileAtch_onclick,this);
            this.divForm.form.Div05.form.btnBizcrdPhotoDel.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div05.form.btnMinDrvn.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.Div05.form.pan00.addEventHandler("onclick",this.Common_onclick,this);
            this.divForm.form.Div05.form.pan01.addEventHandler("onclick",this.Common_onclick,this);
            this.divForm.form.Div05.form.grdPrtcZoneAdpsFrtsd.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div05.form.grdPrtcZoneAdpsFrtsd.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div05.form.grdPrtcZoneAdpsBaksd.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div05.form.grdPrtcZoneAdpsBaksd.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div05.form.grdCarLcnDpct.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div05.form.grdCarLcnDpct.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div05.form.grdBizcrdPhoto.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div05.form.grdBizcrdPhoto.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div05.form.btnPrtcZoneAdpsFrtsdFile.addEventHandler("onclick",this.FileAtch_onclick,this);
            this.divForm.form.Div06.form.TextArea00_01.addEventHandler("onchanged",this.divForm_Div03_TextArea00_onchanged,this);
            this.divForm.form.Div06.form.btnMinAprvYn.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.Div06.form.pan00.addEventHandler("onclick",this.Common_onclick,this);
            this.divForm.form.Div06.form.TextArea00.addEventHandler("onchanged",this.divForm_Div03_TextArea00_onchanged,this);
            this.divForm.form.Div07.form.txtCnvyMttr.addEventHandler("onchanged",this.divForm_Div03_TextArea00_onchanged,this);
            this.divForm.form.Div07.form.btnMinMttr.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divBtn.form.btn00_00.addEventHandler("onclick",this.divBtn_btn00_00_onclick,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddFile",this.RaonkUpload_RAONKUPLOAD_AfterAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_CreationComplete",this.RaonkUpload_RAONKUPLOAD_CreationComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_UploadComplete",this.RaonkUpload_RAONKUPLOAD_UploadComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_OnError",this.RaonkUpload_RAONKUPLOAD_OnError,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeAddFile",this.RaonkUpload_RAONKUPLOAD_BeforeAddFile,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsMain_onvaluechanged,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsMain_onvaluechanged,this);
            this.dsAtfl.addEventHandler("onload",this.dsAtfl_onload,this);
        };
        this.loadIncludeScript("LIF080M00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
