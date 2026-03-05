(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LIF081M06");
            this.set_titletext("행사용시설사용접수요청및신청");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"dmndNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEvntFcltDmndMst", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"dmndNo\" type=\"STRING\" size=\"256\"/><Column id=\"evntFcltSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"rgnSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrNo\" type=\"STRING\" size=\"256\"/><Column id=\"secNo\" type=\"STRING\" size=\"256\"/><Column id=\"evntNm\" type=\"STRING\" size=\"256\"/><Column id=\"evntHstNm\" type=\"STRING\" size=\"256\"/><Column id=\"useBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"useEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"sttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"zip\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyNm\" type=\"STRING\" size=\"256\"/><Column id=\"wrdTelNo\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelNo\" type=\"STRING\" size=\"256\"/><Column id=\"rprsvNm\" type=\"STRING\" size=\"256\"/><Column id=\"crno\" type=\"STRING\" size=\"256\"/><Column id=\"faxTel\" type=\"STRING\" size=\"256\"/><Column id=\"emlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"cnvyMttrCn\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/><Column id=\"endCd\" type=\"STRING\" size=\"256\"/><Column id=\"splmntDmndRsnCn\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"clrId\" type=\"STRING\" size=\"256\"/><Column id=\"schdlMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBldgSeList", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMst", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeNm\" type=\"STRING\" size=\"256\"/><Column id=\"taskCd\" type=\"STRING\" size=\"256\"/><Column id=\"nextTaskCd\" type=\"STRING\" size=\"256\"/><Column id=\"pstnSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyDt\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"endCd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstnInfoRnb\" type=\"STRING\" size=\"256\"/><Column id=\"clmZip\" type=\"STRING\" size=\"256\"/><Column id=\"clmAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmDtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmWholAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmCustCd\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"rcptDt\" type=\"STRING\" size=\"256\"/><Column id=\"clrId\" type=\"STRING\" size=\"256\"/><Column id=\"dptyRegYn\" type=\"STRING\" size=\"256\"/><Column id=\"dmndDt\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptAplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptCtrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptPstnInfoCn\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtHwrtInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntHwrtInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtMvmnRgnPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"docCd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtChcYn\" type=\"STRING\" size=\"256\"/><Column id=\"wholJobBgngDt\" type=\"STRING\" size=\"256\"/><Column id=\"wholJobEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobNm\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobRsnCn\" type=\"STRING\" size=\"256\"/><Column id=\"bldgSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoCtrtrNm\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoPicCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobFldCd\" type=\"STRING\" size=\"256\"/><Column id=\"arptCstrnPicId\" type=\"STRING\" size=\"256\"/><Column id=\"lbsvcPbcprtPicId\" type=\"STRING\" size=\"256\"/><Column id=\"basctAplcfmInfoId\" type=\"STRING\" size=\"256\"/><Column id=\"lbsvcTaskAgtRlvtYn\" type=\"STRING\" size=\"256\"/><Column id=\"lbsvcTaskMdtrId\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptRnb\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"docCd\"/><Col id=\"aplySeCd\"/><Col id=\"taskCd\"/><Col id=\"aplyNo\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"carRegctfFile_fullName\" type=\"STRING\" size=\"256\"/><Column id=\"carRegctfFile_orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"carRegctfFile_fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"carRegctfFile_colId\" type=\"STRING\" size=\"256\"/><Column id=\"carFrtsdPhotoFile_fullName\" type=\"STRING\" size=\"256\"/><Column id=\"carFrtsdPhotoFile_orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"carFrtsdPhotoFile_fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"carFrtsdPhotoFile_colId\" type=\"STRING\" size=\"256\"/><Column id=\"safeDvcPhotoFile_fullName\" type=\"STRING\" size=\"256\"/><Column id=\"safeDvcPhotoFile_orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"safeDvcPhotoFile_fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"safeDvcPhotoFile_colId\" type=\"STRING\" size=\"256\"/><Column id=\"carFlkPhotoFile_fullName\" type=\"STRING\" size=\"256\"/><Column id=\"carFlkPhotoFile_orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"carFlkPhotoFile_fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"carFlkPhotoFile_colId\" type=\"STRING\" size=\"256\"/><Column id=\"newInspRcdshtFile_fullName\" type=\"STRING\" size=\"256\"/><Column id=\"newInspRcdshtFile_orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"newInspRcdshtFile_fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"newInspRcdshtFile_colId\" type=\"STRING\" size=\"256\"/><Column id=\"lsctFile_fullName\" type=\"STRING\" size=\"256\"/><Column id=\"lsctFile_orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"lsctFile_fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"lsctFile_colId\" type=\"STRING\" size=\"256\"/><Column id=\"elctyHdlEqpmntIdEvdncDcmntFile_fullName\" type=\"STRING\" size=\"256\"/><Column id=\"elctyHdlEqpmntIdEvdncDcmntFile_orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"elctyHdlEqpmntIdEvdncDcmntFile_fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"elctyHdlEqpmntIdEvdncDcmntFile_colId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtfl", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplcfmNo\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"jobSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobTycoSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"atchSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"atchDtlSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"bsnsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"workId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtn\" type=\"STRING\" size=\"256\"/><Column id=\"strgFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTerm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAplyKndCdList", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRenUseList", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCustTypeCdList", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsZoneCdList", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrvcAplySeList", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCnvyMttr", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/><Column id=\"cnvyMttrCn\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","divTitle:10",null,"4000","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickFrBg");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("divInfoGuide","1660.00","262","100%","300",null,null,null,null,"300",null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("서비스 흐름 및 작업방법 안내");
            obj.set_cssclass("div_WF_InfoGuide");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnSchClose",null,"10","34","34","10",null,null,null,null,null,this.divForm.form.divInfoGuide.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_ACPlus");
            this.divForm.form.divInfoGuide.addChild(obj.name, obj);

            obj = new Panel("sub_tit01","1630","674","100%","70",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div01","0","0","100%","529",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan01_AplyNo","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_aplyNo\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00","20","-429","980","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("24");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAplySeNm\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("23");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabelNo","10","98","65","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("요청번호");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtAplySeNm11","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_aplyNo","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Panel03\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAplySeNm11\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtAplySeNm","0","-378","100%","34",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("27");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00","0","-427","65","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("26");
            obj.set_text("신청구분 ");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel03_00","0","-429","100%","51",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("25");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_spacing("10px 0px 10px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel03","78","37","100%","60",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("11");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_spacing("10px 0px 10px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabelNo\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("4");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02\"/><PanelItem id=\"PanelItem02\" componentid=\"edtAplcntNm\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("6");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("7");
            obj.set_text("신청자 회사명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"divEdtPop00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtAplcntNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Div("divEdtPop00","280","274","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("10");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtAplcntInstNm","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.Div01.form.divEdtPop00.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            this.divForm.form.Div01.form.divEdtPop00.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_02_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("12");
            obj.set_text("등록자 전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtRgtrTelno","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_02_00","10.00","98","305","130",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("14");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_00_01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("15");
            obj.set_text("등록자 휴대폰 번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_01_00","10.00","98","305","130",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan04","0","60","100.00%","141",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("17");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00_01_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta00","200.00","383","100%","47",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("18");
            obj.set_text("전화번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 등록 및 수정이 가능합니다.");
            obj.set_cssclass("sta_WF_TxtRed");
            obj.set_fittocontents("height");
            obj.set_wordWrap("char");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel02","104","417","100%","94",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("19");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"edtRgtrTelno\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtRgtrMblTelno","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("20");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta00_00","200.00","383","100%","47",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("21");
            obj.set_text("휴대폰번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 등록 및 수정이 가능합니다.");
            obj.set_cssclass("sta_WF_TxtRed");
            obj.set_fittocontents("height");
            obj.set_wordWrap("char");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","104","417","100%","94",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("22");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"edtRgtrMblTelno\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("sub_tit02","1630","674","100%","70",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("9");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_text("신청자정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_00","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("6");
            obj.set_text("신청정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_00","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("8");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div02","50.00","478","100%","600",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("10");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("0");
            obj.set_text("행사용시설구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Radio("radEvntFcltSeCd","127","203","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("1");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divForm_form_Div02_form_radEvntFcltSeCd_innerdataset = new nexacro.NormalDataset("divForm_form_Div02_form_radEvntFcltSeCd_innerdataset", obj);
            divForm_form_Div02_form_radEvntFcltSeCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">영접카운터</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">가로등배너</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div02_form_radEvntFcltSeCd_innerdataset);
            obj.set_text("계약선택");
            obj.set_value("0");
            obj.set_index("0");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan04_01","10.00","98","200","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"radEvntFcltSeCd\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan04","0","60","100%","120",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("4");
            obj.set_text("행사명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtEvntNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("5");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan02_01_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtEvntNm\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("7");
            obj.set_text("행사주최자");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtEvntHstNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("8");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan02_02_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtEvntHstNm\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan05","0","60","100%","150",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("10");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan02_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan02_02_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01","931","619","100%","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("22");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan02_01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan02_01_00_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00","406","593","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("18");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"cboRgnSeCd\"/><PanelItem id=\"PanelItem02\" componentid=\"cboCtrNo\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("11");
            obj.set_text("영접카운터번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan02_01_00_00","10.00","98","225","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("13");
            obj.set_text("사용기간");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan02_02_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("14");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"divCal\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan06","0","60","100.00%","141",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("15");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel02\"/><PanelItem id=\"PanelItem02\" componentid=\"pan02_02_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("sta00","200.00","383","100%","30",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("23");
            obj.set_text("행사용시설 사용 가이드 문서 참고");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel02","234","597","305","130",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("24");
            obj.set_flexgrow("1");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Div("divCal","1030","75","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("16");
            obj.set_text("Div00");
            obj.set_flexgrow("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Calendar("calBgngYmd","0","0","150","40",null,null,null,null,null,null,this.divForm.form.Div02.form.divCal.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.Div02.form.divCal.addChild(obj.name, obj);

            obj = new Static("staDash","calBgngYmd:10","0","10","40",null,null,null,null,null,null,this.divForm.form.Div02.form.divCal.form);
            obj.set_taborder("1");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_Dash");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.form.divCal.addChild(obj.name, obj);

            obj = new Calendar("calEndYmd","staDash:10","0","150","40",null,null,null,null,null,null,this.divForm.form.Div02.form.divCal.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.Div02.form.divCal.addChild(obj.name, obj);

            obj = new Button("btnEvntSchdl","472","20","120","40",null,null,null,null,null,null,this.divForm.form.Div02.form.divCal.form);
            obj.set_taborder("3");
            obj.set_text("행사일정현황조회");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_enable("true");
            this.divForm.form.Div02.form.divCal.addChild(obj.name, obj);

            obj = new Combo("cboRgnSeCd","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("17");
            obj.set_displaynulltext("선택");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_Div02_form_cboRgnSeCd_innerdataset = new nexacro.NormalDataset("divForm_form_Div02_form_cboRgnSeCd_innerdataset", obj);
            divForm_form_Div02_form_cboRgnSeCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">T1</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">T2</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div02_form_cboRgnSeCd_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Combo("cboCtrNo","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("19");
            obj.set_displaynulltext("선택");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_Div02_form_cboCtrNo_innerdataset = new nexacro.NormalDataset("divForm_form_Div02_form_cboCtrNo_innerdataset", obj);
            divForm_form_Div02_form_cboCtrNo_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">T117</Col><Col id=\"datacolumn\">17번</Col></Row><Row><Col id=\"codecolumn\">T118</Col><Col id=\"datacolumn\">18번</Col></Row><Row><Col id=\"codecolumn\">T119</Col><Col id=\"datacolumn\">19번</Col></Row><Row><Col id=\"codecolumn\">T122</Col><Col id=\"datacolumn\">22번</Col></Row><Row><Col id=\"codecolumn\">T136</Col><Col id=\"datacolumn\">36번</Col></Row><Row><Col id=\"codecolumn\">T139</Col><Col id=\"datacolumn\">39번</Col></Row><Row><Col id=\"codecolumn\">T144</Col><Col id=\"datacolumn\">44번</Col></Row><Row><Col id=\"codecolumn\">T161</Col><Col id=\"datacolumn\">61번</Col></Row><Row><Col id=\"codecolumn\">T172</Col><Col id=\"datacolumn\">72번</Col></Row><Row><Col id=\"codecolumn\">T173</Col><Col id=\"datacolumn\">73번</Col></Row><Row><Col id=\"codecolumn\">T216</Col><Col id=\"datacolumn\">16(B01)번</Col></Row><Row><Col id=\"codecolumn\">T217</Col><Col id=\"datacolumn\">17(B02)번</Col></Row><Row><Col id=\"codecolumn\">T218</Col><Col id=\"datacolumn\">18(B03)번</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div02_form_cboCtrNo_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("20");
            obj.set_text("구간번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan02_01_00_00_00","10.00","98","80","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("21");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"cboSecNo\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Combo("cboSecNo","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("25");
            obj.set_displaynulltext("선택");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_Div02_form_cboSecNo_innerdataset = new nexacro.NormalDataset("divForm_form_Div02_form_cboSecNo_innerdataset", obj);
            divForm_form_Div02_form_cboSecNo_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">1구간</Col><Col id=\"codecolumn\">T101</Col></Row><Row><Col id=\"datacolumn\">2구간</Col><Col id=\"codecolumn\">T102</Col></Row><Row><Col id=\"datacolumn\">3구간</Col><Col id=\"codecolumn\">T103</Col></Row><Row><Col id=\"datacolumn\">4구간</Col><Col id=\"codecolumn\">T104</Col></Row><Row><Col id=\"datacolumn\">5구간</Col><Col id=\"codecolumn\">T105</Col></Row><Row><Col id=\"datacolumn\">6구간</Col><Col id=\"codecolumn\">T106</Col></Row><Row><Col id=\"datacolumn\">1구간</Col><Col id=\"codecolumn\">T201</Col></Row><Row><Col id=\"datacolumn\">2구간</Col><Col id=\"codecolumn\">T202</Col></Row><Row><Col id=\"datacolumn\">3구간</Col><Col id=\"codecolumn\">T203</Col></Row><Row><Col id=\"datacolumn\">4구간</Col><Col id=\"codecolumn\">T204</Col></Row><Row><Col id=\"datacolumn\">5구간</Col><Col id=\"codecolumn\">T205</Col></Row><Row><Col id=\"datacolumn\">6구간</Col><Col id=\"codecolumn\">T206</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div02_form_cboSecNo_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("26");
            obj.set_text("요청상태");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Combo("cboDmndSttsCd","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("27");
            obj.set_displaynulltext("선택");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_Div02_form_cboDmndSttsCd_innerdataset = new nexacro.NormalDataset("divForm_form_Div02_form_cboDmndSttsCd_innerdataset", obj);
            divForm_form_Div02_form_cboDmndSttsCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">요청중</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">요청승인완료</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">요청보안처리중</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div02_form_cboDmndSttsCd_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","406","593","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("28");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"cboDmndSttsCd\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan02_01_00_00_01","10.00","98","225","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("29");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","931","619","100%","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("30");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan02_01_00_00_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","234","597","305","130",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("31");
            obj.set_flexgrow("1");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan06_00","0","60","100.00%","141",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("32");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel02_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_01","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("11");
            obj.set_text("처리내역");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00_01","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_01","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("13");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit03","1630","674","100%","70",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("14");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div03","0","0","100%","2300",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("15");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staPrvcClctChcAgreYn01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("0");
            obj.set_text("서비스요청내용확인");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Radio("rdoSrvcDmndCnYn","200.00","328","490","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div03_form_rdoSrvcDmndCnYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div03_form_rdoSrvcDmndCnYn_innerdataset", obj);
            divForm_form_Div03_form_rdoSrvcDmndCnYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">승인</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">보완</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">미승인</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div03_form_rdoSrvcDmndCnYn_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_03_00_00_00_00_00_00","64.00","495","980","96",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPrvcClctChcAgreYn01\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoSrvcDmndCnYn\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan07","0","60","100.00%","107",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_03_00_00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staSplmntDmndRsn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("4");
            obj.set_text("보완요청사유");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new TextArea("txtSplmntDmndRsn","18","1593","100%","100",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("5");
            obj.set_readonly("false");
            obj.set_displaynulltext("내용입력");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan08","0","60","100.00%","177",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("6");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_fittocontents("height");
            obj.set_verticalgap("10");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("vertical");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staSplmntDmndRsn\"/><PanelItem id=\"PanelItem01\" componentid=\"txtSplmntDmndRsn\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Grid("grdSplmnt","18","1715","100%","150",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("7");
            obj.set_binddataset("dataSet00");
            obj.set_autofittype("col");
            obj.set_nodatatext("등록된 협조 및 처리 내용이 존재하지 않습니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"별칭\"/><Cell col=\"1\" text=\"내용\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:별칭\"/><Cell col=\"1\" text=\"bind:내용\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00_00_00","18","1865","100%","30",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("8");
            obj.set_text("My Page -> 검토의견함 메뉴에서 내용 등록/수정/삭제 가능합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan09","0","60","100.00%","201",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("9");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grdSplmnt\"/><PanelItem id=\"PanelItem01\" componentid=\"sta00_00_01_00_00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staCnvyMttr","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("10");
            obj.set_text("전달사항");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new TextArea("txtCnvyMttr","18","1593","100%","100",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("11");
            obj.set_readonly("false");
            obj.set_displaynulltext("내용입력");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan10","0","60","100.00%","177",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("12");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_fittocontents("height");
            obj.set_verticalgap("10");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staCnvyMttr\"/><PanelItem id=\"PanelItem01\" componentid=\"txtCnvyMttr\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Grid("grdCnvyMttr00","18","1715","100%","150",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("13");
            obj.set_binddataset("dataSet00");
            obj.set_autofittype("col");
            obj.set_nodatatext("등록된 협조 및 처리 내용이 존재하지 않습니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"별칭\"/><Cell col=\"1\" text=\"내용\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:별칭\"/><Cell col=\"1\" text=\"bind:내용\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00_00_00_00_00","18","1865","100%","30",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("14");
            obj.set_text("My Page -> 검토의견함 메뉴에서 내용 등록/수정/삭제 가능합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan11","0","60","100.00%","201",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("15");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grdCnvyMttr00\"/><PanelItem id=\"PanelItem01\" componentid=\"sta00_00_01_00_00_00_00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Grid("grdCnvyMttr","20","873","100%","300",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("16");
            obj.set_binddataset("dsCnvyMttr");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_autosizingtype("none");
            obj.set_scrollbarsize("15");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"170\"/><Column size=\"90\"/><Column size=\"650\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"일시\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"내용\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:frstRegDt\" displaytype=\"mask\" maskeditformat=\"####-##-## ##:##:##\" maskedittype=\"string\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:frstRegNm\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:cnvyMttrCn\" cssclass=\"CellEnd\" textAlign=\"left\" tooltiptext=\"bind:cnvyMttrCn\"/></Band></Format></Formats>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan12","0","60","100.00%","300",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("17");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grdCnvyMttr\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel00_02","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("18");
            obj.set_text("행사용시설 사용신청서");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("Button00","813","76","120","34",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("19");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_file_1","124","58","116","34",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("20");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnFile","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("21");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panTitle","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("22");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("23");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static01","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("24");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static02","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("25");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFileNum","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("26");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1","512","135","125","34",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("27");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnDel","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("28");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_1\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("29");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Grid("Grid00","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("30");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFile","0","42","100.00%","161",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("31");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("32");
            obj.set_text("행사계획서");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("Button00_00","813","76","120","34",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("33");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_file_1_00","124","58","116","34",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("34");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("35");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panTitle00","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("36");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static00_00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("37");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_00","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("38");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_00","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("39");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFileNum00","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("40");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1_00","512","135","125","34",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("41");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnDel00","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("42");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_1_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("43");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("44");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFile00","0","42","100.00%","161",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("45");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("46");
            obj.set_text("사업자등록증");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("Button00_01","813","76","120","34",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("47");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_file_1_01","124","58","116","34",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("48");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnFile01","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("49");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_01\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_01\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panTitle01","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("50");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile01\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static00_01","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("51");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_01","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("52");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_01","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("53");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFileNum01","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("54");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_01\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1_01","512","135","125","34",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("55");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnDel01","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("56");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_1_01\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("57");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum01\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel01\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Grid("Grid00_01","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("58");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFile01","0","42","100.00%","161",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("59");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_01\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_02","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("60");
            obj.set_text("통장사본");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("Button00_02","813","76","120","34",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("61");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_file_1_02","124","58","116","34",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("62");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnFile02","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("63");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_02\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_02\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panTitle02","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("64");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_02\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile02\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static00_02","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("65");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_02","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("66");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_02","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("67");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFileNum02","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("68");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_02\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1_02","512","135","125","34",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("69");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnDel02","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("70");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_1_02\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_03","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("71");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum02\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel02\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Grid("Grid00_02","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("72");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFile02","0","42","100.00%","161",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("73");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_03\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_02\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_03","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("74");
            obj.set_text("디지털 사이니지 표출 미디어파일");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("Button00_03","813","76","120","34",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("75");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_file_1_03","124","58","116","34",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("76");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnFile03","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("77");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_03\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_03\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panTitle03","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("78");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_03\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile03\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static00_03","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("79");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_03","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("80");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_03","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("81");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFileNum03","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("82");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_03\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_03\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1_03","512","135","125","34",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("83");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnDel03","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("84");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_1_03\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_04","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("85");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum03\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel03\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Grid("Grid00_03","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("86");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFile03","0","42","100.00%","161",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("87");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle03\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_04\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_03\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_04","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("88");
            obj.set_text("가로등배너 시안 미디어파일");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("Button00_04","813","76","120","34",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("89");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_file_1_04","124","58","116","34",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("90");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnFile04","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("91");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_04\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_04\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panTitle04","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("92");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_04\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile04\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static00_04","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("93");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_04","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("94");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_04","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("95");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFileNum04","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("96");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_04\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_04\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_04\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1_04","512","135","125","34",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("97");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnDel04","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("98");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_1_04\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00_05","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("99");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum04\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel04\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Grid("Grid00_04","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("100");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFile04","0","42","100.00%","161",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("101");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle04\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_05\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_04\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Div("divQuick",null,"62","296","156","62",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickMenu");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","17","20","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("0");
            obj.set_text("신청자정보");
            obj.set_cssclass("btn_WF_Quick_S");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn02","17.00","btn01:0","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("1");
            obj.set_text("신청정보");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn03","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("2");
            obj.set_text("처리내역");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"divQuick:0","296","131","62",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickBtnBg");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("divGuide00","1600.00","145","450","385",null,null,null,null,null,null,this);
            obj.set_taborder("4");
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
            //-- Default Layout : this.divForm.form.Div01.form.divEdtPop00.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01.form.divEdtPop00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.edtAplcntInstNm.set_taborder("0");
                p.edtAplcntInstNm.set_cssclass("edt_WF_EdtSch");
                p.edtAplcntInstNm.set_readonly("true");
                p.edtAplcntInstNm.move("0","0",null,"40","0",null);
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
                p.pan01_AplyNo.set_taborder("0");
                p.pan01_AplyNo.set_horizontalgap("20");
                p.pan01_AplyNo.set_flexcrossaxiswrapalign("start");
                p.pan01_AplyNo.set_flexwrap("wrap");
                p.pan01_AplyNo.set_fittocontents("height");
                p.pan01_AplyNo.set_verticalgap("0");
                p.pan01_AplyNo.set_spacing("0px 20px 10px 20px");
                p.pan01_AplyNo.set_cssclass("pal_WF_DtlBg");
                p.pan01_AplyNo.set_visible("false");
                p.pan01_AplyNo.move("0","60","100.00%","96",null,null);

                p.Panel01_00_00.set_taborder("24");
                p.Panel01_00_00.set_type("vertical");
                p.Panel01_00_00.set_flexgrow("1");
                p.Panel01_00_00.move("20","-429","980","86",null,null);

                p.pan01_00.set_taborder("23");
                p.pan01_00.set_horizontalgap("20");
                p.pan01_00.set_flexcrossaxiswrapalign("start");
                p.pan01_00.set_flexwrap("wrap");
                p.pan01_00.set_fittocontents("height");
                p.pan01_00.set_verticalgap("0");
                p.pan01_00.set_spacing("0px 20px 10px 20px");
                p.pan01_00.set_cssclass("pal_WF_DtlBg");
                p.pan01_00.move("0","60","100.00%","96",null,null);

                p.staLabelNo.set_taborder("1");
                p.staLabelNo.set_text("요청번호");
                p.staLabelNo.set_cssclass("sta_WF_Label");
                p.staLabelNo.set_fittocontents("width");
                p.staLabelNo.move("10","98","65","46",null,null);

                p.edtAplySeNm11.set_taborder("2");
                p.edtAplySeNm11.set_readonly("true");
                p.edtAplySeNm11.move("10.00","158","100%","40",null,null);

                p.Panel01_aplyNo.set_taborder("3");
                p.Panel01_aplyNo.set_type("vertical");
                p.Panel01_aplyNo.set_flexgrow("1");
                p.Panel01_aplyNo.set_visible("true");
                p.Panel01_aplyNo.move("10.00","98","305","86",null,null);

                p.edtAplySeNm.set_taborder("27");
                p.edtAplySeNm.set_readonly("true");
                p.edtAplySeNm.move("0","-378","100%","34",null,null);

                p.staLabel01_00_00.set_taborder("26");
                p.staLabel01_00_00.set_text("신청구분 ");
                p.staLabel01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00.set_fittocontents("width");
                p.staLabel01_00_00.move("0","-427","65","46",null,null);

                p.Panel03_00.set_taborder("25");
                p.Panel03_00.set_flexcrossaxisalign("center");
                p.Panel03_00.set_flexmainaxisalign("spacebetween");
                p.Panel03_00.set_spacing("10px 0px 10px 0px");
                p.Panel03_00.move("0","-429","100%","51",null,null);

                p.Panel03.set_taborder("11");
                p.Panel03.set_flexcrossaxisalign("center");
                p.Panel03.set_flexmainaxisalign("spacebetween");
                p.Panel03.set_spacing("10px 0px 10px 0px");
                p.Panel03.move("78","37","100%","60",null,null);

                p.staLabel01_02.set_taborder("4");
                p.staLabel01_02.set_text("신청자");
                p.staLabel01_02.set_cssclass("sta_WF_Label");
                p.staLabel01_02.move("10","98","100%","46",null,null);

                p.Panel01_01.set_taborder("5");
                p.Panel01_01.set_type("vertical");
                p.Panel01_01.set_flexgrow("1");
                p.Panel01_01.move("10.00","98","305","86",null,null);

                p.pan02.set_taborder("6");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.set_flexshrink("1");
                p.pan02.set_fittocontents("height");
                p.pan02.move("0","60","100.00%","96",null,null);

                p.staLabel01_02_00.set_taborder("7");
                p.staLabel01_02_00.set_text("신청자 회사명");
                p.staLabel01_02_00.set_cssclass("sta_WF_Label");
                p.staLabel01_02_00.move("10","98","100%","46",null,null);

                p.Panel01_01_00.set_taborder("8");
                p.Panel01_01_00.set_type("vertical");
                p.Panel01_01_00.set_flexgrow("1");
                p.Panel01_01_00.move("10.00","98","305","86",null,null);

                p.edtAplcntNm.set_taborder("9");
                p.edtAplcntNm.set_readonly("true");
                p.edtAplcntNm.move("10.00","158","100%","40",null,null);

                p.divEdtPop00.set_taborder("10");
                p.divEdtPop00.set_text("Div00");
                p.divEdtPop00.set_formscrollbartype("none none");
                p.divEdtPop00.set_formscrolltype("none");
                p.divEdtPop00.set_flexgrow("1");
                p.divEdtPop00.move("280","274","100%","40",null,null);

                p.staLabel01_02_02_00.set_taborder("12");
                p.staLabel01_02_02_00.set_text("등록자 전화번호");
                p.staLabel01_02_02_00.set_cssclass("sta_WF_Label");
                p.staLabel01_02_02_00.move("10","98","100%","46",null,null);

                p.edtRgtrTelno.set_taborder("13");
                p.edtRgtrTelno.set_readonly("true");
                p.edtRgtrTelno.move("10.00","158","100%","40",null,null);

                p.Panel01_01_02_00.set_taborder("14");
                p.Panel01_01_02_00.set_type("vertical");
                p.Panel01_01_02_00.set_flexgrow("1");
                p.Panel01_01_02_00.set_fittocontents("height");
                p.Panel01_01_02_00.move("10.00","98","305","130",null,null);

                p.staLabel01_02_00_01_00.set_taborder("15");
                p.staLabel01_02_00_01_00.set_text("등록자 휴대폰 번호");
                p.staLabel01_02_00_01_00.set_cssclass("sta_WF_Label");
                p.staLabel01_02_00_01_00.move("10","98","100%","46",null,null);

                p.Panel01_01_00_01_00.set_taborder("16");
                p.Panel01_01_00_01_00.set_type("vertical");
                p.Panel01_01_00_01_00.set_flexgrow("1");
                p.Panel01_01_00_01_00.set_fittocontents("height");
                p.Panel01_01_00_01_00.move("10.00","98","305","130",null,null);

                p.pan04.set_taborder("17");
                p.pan04.set_horizontalgap("20");
                p.pan04.set_flexcrossaxiswrapalign("start");
                p.pan04.set_flexwrap("wrap");
                p.pan04.set_verticalgap("0");
                p.pan04.set_spacing("0px 20px 10px 20px");
                p.pan04.set_cssclass("pal_WF_DtlBg");
                p.pan04.set_flexshrink("1");
                p.pan04.set_fittocontents("height");
                p.pan04.move("0","60","100.00%","141",null,null);

                p.sta00.set_taborder("18");
                p.sta00.set_text("전화번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 등록 및 수정이 가능합니다.");
                p.sta00.set_cssclass("sta_WF_TxtRed");
                p.sta00.set_fittocontents("height");
                p.sta00.set_wordWrap("char");
                p.sta00.move("200.00","383","100%","47",null,null);

                p.Panel02.set_taborder("19");
                p.Panel02.set_type("vertical");
                p.Panel02.set_verticalgap("10");
                p.Panel02.set_fittocontents("height");
                p.Panel02.move("104","417","100%","94",null,null);

                p.edtRgtrMblTelno.set_taborder("20");
                p.edtRgtrMblTelno.set_readonly("true");
                p.edtRgtrMblTelno.move("10.00","158","100%","40",null,null);

                p.sta00_00.set_taborder("21");
                p.sta00_00.set_text("휴대폰번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 등록 및 수정이 가능합니다.");
                p.sta00_00.set_cssclass("sta_WF_TxtRed");
                p.sta00_00.set_fittocontents("height");
                p.sta00_00.set_wordWrap("char");
                p.sta00_00.move("200.00","383","100%","47",null,null);

                p.Panel02_00.set_taborder("22");
                p.Panel02_00.set_type("vertical");
                p.Panel02_00.set_verticalgap("10");
                p.Panel02_00.set_fittocontents("height");
                p.Panel02_00.move("104","417","100%","94",null,null);
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
            //-- Default Layout : this.divForm.form.Div02.form.divCal.form
            obj = new Layout("default","",0,0,this.divForm.form.Div02.form.divCal.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.calBgngYmd.set_taborder("0");
                p.calBgngYmd.set_dateformat("yyyy-MM-dd");
                p.calBgngYmd.move("0","0","150","40",null,null);

                p.staDash.set_taborder("1");
                p.staDash.set_text("~");
                p.staDash.set_cssclass("sta_WF_Dash");
                p.staDash.set_fittocontents("width");
                p.staDash.move("calBgngYmd:10","0","10","40",null,null);

                p.calEndYmd.set_taborder("2");
                p.calEndYmd.set_dateformat("yyyy-MM-dd");
                p.calEndYmd.move("staDash:10","0","150","40",null,null);

                p.btnEvntSchdl.set_taborder("3");
                p.btnEvntSchdl.set_text("행사일정현황조회");
                p.btnEvntSchdl.set_cssclass("btn_WF_SmallRed");
                p.btnEvntSchdl.set_enable("true");
                p.btnEvntSchdl.move("472","20","120","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divForm.form.Div02.form.divCal.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div02.form.divCal.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div02.form.divCal.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divForm.form.Div02.form.divCal.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div02.form
            obj = new Layout("default","",0,0,this.divForm.form.Div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel03_00_01.set_taborder("0");
                p.staLabel03_00_01.set_text("행사용시설구분");
                p.staLabel03_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_01.move("10","98","100%","46",null,null);

                p.radEvntFcltSeCd.set_taborder("1");
                p.radEvntFcltSeCd.set_fittocontents("width");
                p.radEvntFcltSeCd.set_innerdataset(divForm_form_Div02_form_radEvntFcltSeCd_innerdataset);
                p.radEvntFcltSeCd.set_codecolumn("codecolumn");
                p.radEvntFcltSeCd.set_datacolumn("datacolumn");
                p.radEvntFcltSeCd.set_direction("vertical");
                p.radEvntFcltSeCd.set_value("0");
                p.radEvntFcltSeCd.set_index("0");
                p.radEvntFcltSeCd.move("127","203","100%","40",null,null);

                p.pan04_01.set_taborder("2");
                p.pan04_01.set_type("vertical");
                p.pan04_01.set_flexgrow("1");
                p.pan04_01.move("10.00","98","200","86",null,null);

                p.pan04.set_taborder("3");
                p.pan04.set_horizontalgap("20");
                p.pan04.set_flexcrossaxiswrapalign("start");
                p.pan04.set_flexwrap("wrap");
                p.pan04.set_fittocontents("height");
                p.pan04.set_verticalgap("0");
                p.pan04.set_spacing("0px 20px 10px 20px");
                p.pan04.set_cssclass("pal_WF_DtlBg");
                p.pan04.move("0","60","100%","120",null,null);

                p.staLabel03_00_00.set_taborder("4");
                p.staLabel03_00_00.set_text("행사명");
                p.staLabel03_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00.move("10","98","100%","46",null,null);

                p.edtEvntNm.set_taborder("5");
                p.edtEvntNm.set_readonly("false");
                p.edtEvntNm.move("10.00","158","100%","40",null,null);

                p.pan02_01_00.set_taborder("6");
                p.pan02_01_00.set_type("vertical");
                p.pan02_01_00.set_flexgrow("1");
                p.pan02_01_00.move("10.00","98","305","86",null,null);

                p.staLabel03_01_00.set_taborder("7");
                p.staLabel03_01_00.set_text("행사주최자");
                p.staLabel03_01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_01_00.move("10","98","100%","46",null,null);

                p.edtEvntHstNm.set_taborder("8");
                p.edtEvntHstNm.set_readonly("false");
                p.edtEvntHstNm.move("10.00","158","100%","40",null,null);

                p.pan02_02_00.set_taborder("9");
                p.pan02_02_00.set_type("vertical");
                p.pan02_02_00.set_flexgrow("1");
                p.pan02_02_00.move("10.00","98","305","86",null,null);

                p.pan05.set_taborder("10");
                p.pan05.set_horizontalgap("20");
                p.pan05.set_flexcrossaxiswrapalign("start");
                p.pan05.set_flexwrap("wrap");
                p.pan05.set_fittocontents("height");
                p.pan05.set_verticalgap("0");
                p.pan05.set_spacing("0px 20px 10px 20px");
                p.pan05.set_cssclass("pal_WF_DtlBg");
                p.pan05.move("0","60","100%","150",null,null);

                p.Panel01.set_taborder("22");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.move("931","619","100%","86",null,null);

                p.Panel00.set_taborder("18");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.move("406","593","100%","40",null,null);

                p.staLabel03_00_00_00.set_taborder("11");
                p.staLabel03_00_00_00.set_text("영접카운터번호");
                p.staLabel03_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_00.move("10","98","100%","46",null,null);

                p.pan02_01_00_00.set_taborder("12");
                p.pan02_01_00_00.set_type("vertical");
                p.pan02_01_00_00.set_flexgrow("1");
                p.pan02_01_00_00.move("10.00","98","225","86",null,null);

                p.staLabel03_01_00_00.set_taborder("13");
                p.staLabel03_01_00_00.set_text("사용기간");
                p.staLabel03_01_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_01_00_00.move("10","98","100%","46",null,null);

                p.pan02_02_00_00.set_taborder("14");
                p.pan02_02_00_00.set_type("vertical");
                p.pan02_02_00_00.set_flexgrow("1");
                p.pan02_02_00_00.move("10.00","98","305","86",null,null);

                p.pan06.set_taborder("15");
                p.pan06.set_horizontalgap("20");
                p.pan06.set_flexcrossaxiswrapalign("start");
                p.pan06.set_flexwrap("wrap");
                p.pan06.set_fittocontents("height");
                p.pan06.set_verticalgap("0");
                p.pan06.set_spacing("0px 20px 10px 20px");
                p.pan06.set_cssclass("pal_WF_DtlBg");
                p.pan06.move("0","60","100.00%","141",null,null);

                p.sta00.set_taborder("23");
                p.sta00.set_text("행사용시설 사용 가이드 문서 참고");
                p.sta00.set_cssclass("sta_WF_Des");
                p.sta00.set_fittocontents("height");
                p.sta00.move("200.00","383","100%","30",null,null);

                p.Panel02.set_taborder("24");
                p.Panel02.set_flexgrow("1");
                p.Panel02.set_type("vertical");
                p.Panel02.set_verticalgap("10");
                p.Panel02.set_fittocontents("height");
                p.Panel02.move("234","597","305","130",null,null);

                p.divCal.set_taborder("16");
                p.divCal.set_text("Div00");
                p.divCal.set_flexgrow("1");
                p.divCal.set_formscrollbartype("none none");
                p.divCal.set_formscrolltype("none");
                p.divCal.move("1030","75","100%","40",null,null);

                p.cboRgnSeCd.set_taborder("17");
                p.cboRgnSeCd.set_displaynulltext("선택");
                p.cboRgnSeCd.set_innerdataset(divForm_form_Div02_form_cboRgnSeCd_innerdataset);
                p.cboRgnSeCd.set_codecolumn("codecolumn");
                p.cboRgnSeCd.set_datacolumn("datacolumn");
                p.cboRgnSeCd.set_text("");
                p.cboRgnSeCd.set_index("-1");
                p.cboRgnSeCd.move("200.00","128","100%","40",null,null);

                p.cboCtrNo.set_taborder("19");
                p.cboCtrNo.set_displaynulltext("선택");
                p.cboCtrNo.set_innerdataset(divForm_form_Div02_form_cboCtrNo_innerdataset);
                p.cboCtrNo.set_codecolumn("codecolumn");
                p.cboCtrNo.set_datacolumn("datacolumn");
                p.cboCtrNo.set_text("");
                p.cboCtrNo.set_index("-1");
                p.cboCtrNo.move("200.00","128","100%","40",null,null);

                p.staLabel03_00_00_00_00.set_taborder("20");
                p.staLabel03_00_00_00_00.set_text("구간번호");
                p.staLabel03_00_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_00_00.move("10","98","100%","46",null,null);

                p.pan02_01_00_00_00.set_taborder("21");
                p.pan02_01_00_00_00.set_type("vertical");
                p.pan02_01_00_00_00.set_flexgrow("1");
                p.pan02_01_00_00_00.move("10.00","98","80","86",null,null);

                p.cboSecNo.set_taborder("25");
                p.cboSecNo.set_displaynulltext("선택");
                p.cboSecNo.set_innerdataset(divForm_form_Div02_form_cboSecNo_innerdataset);
                p.cboSecNo.set_codecolumn("codecolumn");
                p.cboSecNo.set_datacolumn("datacolumn");
                p.cboSecNo.set_text("");
                p.cboSecNo.set_index("-1");
                p.cboSecNo.move("200.00","128","100%","40",null,null);

                p.staLabel03_00_00_00_01.set_taborder("26");
                p.staLabel03_00_00_00_01.set_text("요청상태");
                p.staLabel03_00_00_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_00_01.move("10","98","100%","46",null,null);

                p.cboDmndSttsCd.set_taborder("27");
                p.cboDmndSttsCd.set_displaynulltext("선택");
                p.cboDmndSttsCd.set_innerdataset(divForm_form_Div02_form_cboDmndSttsCd_innerdataset);
                p.cboDmndSttsCd.set_codecolumn("codecolumn");
                p.cboDmndSttsCd.set_datacolumn("datacolumn");
                p.cboDmndSttsCd.set_text("");
                p.cboDmndSttsCd.set_index("-1");
                p.cboDmndSttsCd.move("200.00","128","100%","40",null,null);

                p.Panel00_00.set_taborder("28");
                p.Panel00_00.set_horizontalgap("10");
                p.Panel00_00.move("406","593","100%","40",null,null);

                p.pan02_01_00_00_01.set_taborder("29");
                p.pan02_01_00_00_01.set_type("vertical");
                p.pan02_01_00_00_01.set_flexgrow("1");
                p.pan02_01_00_00_01.move("10.00","98","225","86",null,null);

                p.Panel01_00.set_taborder("30");
                p.Panel01_00.set_horizontalgap("10");
                p.Panel01_00.move("931","619","100%","86",null,null);

                p.Panel02_00.set_taborder("31");
                p.Panel02_00.set_flexgrow("1");
                p.Panel02_00.set_type("vertical");
                p.Panel02_00.set_verticalgap("10");
                p.Panel02_00.set_fittocontents("height");
                p.Panel02_00.move("234","597","305","130",null,null);

                p.pan06_00.set_taborder("32");
                p.pan06_00.set_horizontalgap("20");
                p.pan06_00.set_flexcrossaxiswrapalign("start");
                p.pan06_00.set_flexwrap("wrap");
                p.pan06_00.set_fittocontents("height");
                p.pan06_00.set_verticalgap("0");
                p.pan06_00.set_spacing("0px 20px 10px 20px");
                p.pan06_00.set_cssclass("pal_WF_DtlBg");
                p.pan06_00.move("0","60","100.00%","141",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div02.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div02.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div02.form,
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
                p.staPrvcClctChcAgreYn01.set_taborder("0");
                p.staPrvcClctChcAgreYn01.set_text("서비스요청내용확인");
                p.staPrvcClctChcAgreYn01.set_cssclass("sta_WF_Label");
                p.staPrvcClctChcAgreYn01.move("10","98","100%","46",null,null);

                p.rdoSrvcDmndCnYn.set_taborder("1");
                p.rdoSrvcDmndCnYn.set_innerdataset(divForm_form_Div03_form_rdoSrvcDmndCnYn_innerdataset);
                p.rdoSrvcDmndCnYn.set_codecolumn("codecolumn");
                p.rdoSrvcDmndCnYn.set_datacolumn("datacolumn");
                p.rdoSrvcDmndCnYn.set_direction("vertical");
                p.rdoSrvcDmndCnYn.set_fittocontents("width");
                p.rdoSrvcDmndCnYn.set_index("-1");
                p.rdoSrvcDmndCnYn.move("200.00","328","490","40",null,null);

                p.Panel00_00_03_00_00_00_00_00_00.set_taborder("2");
                p.Panel00_00_03_00_00_00_00_00_00.set_type("vertical");
                p.Panel00_00_03_00_00_00_00_00_00.set_flexgrow("1");
                p.Panel00_00_03_00_00_00_00_00_00.set_verticalgap("10");
                p.Panel00_00_03_00_00_00_00_00_00.set_minwidth("");
                p.Panel00_00_03_00_00_00_00_00_00.move("64.00","495","980","96",null,null);

                p.pan07.set_taborder("3");
                p.pan07.set_horizontalgap("20");
                p.pan07.set_flexcrossaxiswrapalign("start");
                p.pan07.set_flexwrap("wrap");
                p.pan07.set_fittocontents("height");
                p.pan07.set_verticalgap("0");
                p.pan07.set_spacing("0px 20px 10px 20px");
                p.pan07.set_cssclass("pal_WF_DtlBg");
                p.pan07.set_type("horizontal");
                p.pan07.set_visible("false");
                p.pan07.move("0","60","100.00%","107",null,null);

                p.staSplmntDmndRsn.set_taborder("4");
                p.staSplmntDmndRsn.set_text("보완요청사유");
                p.staSplmntDmndRsn.set_cssclass("sta_WF_Label");
                p.staSplmntDmndRsn.move("10","98","100%","46",null,null);

                p.txtSplmntDmndRsn.set_taborder("5");
                p.txtSplmntDmndRsn.set_readonly("false");
                p.txtSplmntDmndRsn.set_displaynulltext("내용입력");
                p.txtSplmntDmndRsn.move("18","1593","100%","100",null,null);

                p.pan08.set_taborder("6");
                p.pan08.set_flexcrossaxiswrapalign("start");
                p.pan08.set_fittocontents("height");
                p.pan08.set_verticalgap("10");
                p.pan08.set_spacing("10px 20px 10px 20px");
                p.pan08.set_cssclass("pal_WF_DtlBg");
                p.pan08.set_type("vertical");
                p.pan08.set_visible("true");
                p.pan08.move("0","60","100.00%","177",null,null);

                p.grdSplmnt.set_taborder("7");
                p.grdSplmnt.set_binddataset("dataSet00");
                p.grdSplmnt.set_autofittype("col");
                p.grdSplmnt.set_nodatatext("등록된 협조 및 처리 내용이 존재하지 않습니다");
                p.grdSplmnt.move("18","1715","100%","150",null,null);

                p.sta00_00_01_00_00_00.set_taborder("8");
                p.sta00_00_01_00_00_00.set_text("My Page -> 검토의견함 메뉴에서 내용 등록/수정/삭제 가능합니다.");
                p.sta00_00_01_00_00_00.set_cssclass("sta_WF_Des");
                p.sta00_00_01_00_00_00.set_fittocontents("height");
                p.sta00_00_01_00_00_00.move("18","1865","100%","30",null,null);

                p.pan09.set_taborder("9");
                p.pan09.set_flexcrossaxiswrapalign("start");
                p.pan09.set_flexwrap("wrap");
                p.pan09.set_fittocontents("height");
                p.pan09.set_verticalgap("0");
                p.pan09.set_spacing("10px 20px 10px 20px");
                p.pan09.set_cssclass("pal_WF_DtlBg");
                p.pan09.set_type("horizontal");
                p.pan09.set_visible("false");
                p.pan09.move("0","60","100.00%","201",null,null);

                p.staCnvyMttr.set_taborder("10");
                p.staCnvyMttr.set_text("전달사항");
                p.staCnvyMttr.set_cssclass("sta_WF_Label");
                p.staCnvyMttr.move("10","98","100%","46",null,null);

                p.txtCnvyMttr.set_taborder("11");
                p.txtCnvyMttr.set_readonly("false");
                p.txtCnvyMttr.set_displaynulltext("내용입력");
                p.txtCnvyMttr.move("18","1593","100%","100",null,null);

                p.pan10.set_taborder("12");
                p.pan10.set_flexcrossaxiswrapalign("start");
                p.pan10.set_fittocontents("height");
                p.pan10.set_verticalgap("10");
                p.pan10.set_spacing("10px 20px 10px 20px");
                p.pan10.set_cssclass("pal_WF_DtlBg");
                p.pan10.set_type("vertical");
                p.pan10.move("0","60","100.00%","177",null,null);

                p.grdCnvyMttr00.set_taborder("13");
                p.grdCnvyMttr00.set_binddataset("dataSet00");
                p.grdCnvyMttr00.set_autofittype("col");
                p.grdCnvyMttr00.set_nodatatext("등록된 협조 및 처리 내용이 존재하지 않습니다");
                p.grdCnvyMttr00.move("18","1715","100%","150",null,null);

                p.sta00_00_01_00_00_00_00_00.set_taborder("14");
                p.sta00_00_01_00_00_00_00_00.set_text("My Page -> 검토의견함 메뉴에서 내용 등록/수정/삭제 가능합니다.");
                p.sta00_00_01_00_00_00_00_00.set_cssclass("sta_WF_Des");
                p.sta00_00_01_00_00_00_00_00.set_fittocontents("height");
                p.sta00_00_01_00_00_00_00_00.move("18","1865","100%","30",null,null);

                p.pan11.set_taborder("15");
                p.pan11.set_flexcrossaxiswrapalign("start");
                p.pan11.set_flexwrap("wrap");
                p.pan11.set_fittocontents("height");
                p.pan11.set_verticalgap("0");
                p.pan11.set_spacing("10px 20px 10px 20px");
                p.pan11.set_cssclass("pal_WF_DtlBg");
                p.pan11.set_type("horizontal");
                p.pan11.set_visible("false");
                p.pan11.move("0","60","100.00%","201",null,null);

                p.grdCnvyMttr.set_taborder("16");
                p.grdCnvyMttr.set_binddataset("dsCnvyMttr");
                p.grdCnvyMttr.set_autofittype("col");
                p.grdCnvyMttr.set_cellsizingtype("col");
                p.grdCnvyMttr.set_autosizingtype("none");
                p.grdCnvyMttr.set_scrollbarsize("15");
                p.grdCnvyMttr.move("20","873","100%","300",null,null);

                p.pan12.set_taborder("17");
                p.pan12.set_flexcrossaxiswrapalign("start");
                p.pan12.set_flexwrap("wrap");
                p.pan12.set_fittocontents("height");
                p.pan12.set_verticalgap("0");
                p.pan12.set_spacing("10px 20px 10px 20px");
                p.pan12.set_cssclass("pal_WF_DtlBg");
                p.pan12.set_type("horizontal");
                p.pan12.set_visible("true");
                p.pan12.move("0","60","100.00%","300",null,null);

                p.staLabel00_02.set_taborder("18");
                p.staLabel00_02.set_text("행사용시설 사용신청서");
                p.staLabel00_02.set_cssclass("sta_WF_Label_E");
                p.staLabel00_02.set_fittocontents("width");
                p.staLabel00_02.move("0","44","305","46",null,null);

                p.Button00.set_taborder("19");
                p.Button00.set_text("샘플첨부파일명");
                p.Button00.set_cssclass("btn_WF_Small");
                p.Button00.set_fittocontents("width");
                p.Button00.move("813","76","120","34",null,null);

                p.btn_file_1.set_taborder("20");
                p.btn_file_1.set_text("파일선택");
                p.btn_file_1.set_cssclass("btn_WF_FileUp");
                p.btn_file_1.set_fittocontents("width");
                p.btn_file_1.move("124","58","116","34",null,null);

                p.panBtnFile.set_taborder("21");
                p.panBtnFile.set_flexgrow("1");
                p.panBtnFile.set_flexmainaxisalign("end");
                p.panBtnFile.set_horizontalgap("10");
                p.panBtnFile.move("433","58","305","46",null,null);

                p.panTitle.set_taborder("22");
                p.panTitle.set_cssclass("pan_WF_FileTitle");
                p.panTitle.set_flexwrap("wrap");
                p.panTitle.set_fittocontents("height");
                p.panTitle.move("0","124","100%","46",null,null);

                p.Static00.set_taborder("23");
                p.Static00.set_text("파일수 : ");
                p.Static00.set_fittocontents("width");
                p.Static00.move("88","123","48","46",null,null);

                p.Static01.set_taborder("24");
                p.Static01.set_text("0");
                p.Static01.set_fittocontents("width");
                p.Static01.move("165","143","9","46",null,null);

                p.Static02.set_taborder("25");
                p.Static02.set_text("개");
                p.Static02.set_fittocontents("width");
                p.Static02.move("293","131","13","46",null,null);

                p.panFileNum.set_taborder("26");
                p.panFileNum.set_flexgrow("1");
                p.panFileNum.set_horizontalgap("4");
                p.panFileNum.move("20","190","305","46",null,null);

                p.btn_del_file_1.set_taborder("27");
                p.btn_del_file_1.set_text("전체파일삭제");
                p.btn_del_file_1.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_1.set_fittocontents("width");
                p.btn_del_file_1.move("512","135","125","34",null,null);

                p.panBtnDel.set_taborder("28");
                p.panBtnDel.set_flexcrossaxisalign("center");
                p.panBtnDel.set_flexmainaxisalign("end");
                p.panBtnDel.set_flexgrow("1");
                p.panBtnDel.move("517","141","305","46",null,null);

                p.Panel00_00.set_taborder("29");
                p.Panel00_00.move("20","51","100%","46",null,null);

                p.Grid00.set_taborder("30");
                p.Grid00.set_binddataset("dsFile1");
                p.Grid00.set_autofittype("col");
                p.Grid00.set_cssclass("grd_WF_FileAdd");
                p.Grid00.move("20.00","114","100%","40",null,null);

                p.panFile.set_taborder("31");
                p.panFile.set_fittocontents("height");
                p.panFile.set_spacing("10px 20px 10px 20px");
                p.panFile.set_flexwrap("wrap");
                p.panFile.set_cssclass("pal_WF_DtlBg");
                p.panFile.set_verticalgap("4");
                p.panFile.move("0","42","100.00%","161",null,null);

                p.staLabel00_02_00.set_taborder("32");
                p.staLabel00_02_00.set_text("행사계획서");
                p.staLabel00_02_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_02_00.set_fittocontents("width");
                p.staLabel00_02_00.move("0","44","305","46",null,null);

                p.Button00_00.set_taborder("33");
                p.Button00_00.set_text("샘플첨부파일명");
                p.Button00_00.set_cssclass("btn_WF_Small");
                p.Button00_00.set_fittocontents("width");
                p.Button00_00.move("813","76","120","34",null,null);

                p.btn_file_1_00.set_taborder("34");
                p.btn_file_1_00.set_text("파일선택");
                p.btn_file_1_00.set_cssclass("btn_WF_FileUp");
                p.btn_file_1_00.set_fittocontents("width");
                p.btn_file_1_00.move("124","58","116","34",null,null);

                p.panBtnFile00.set_taborder("35");
                p.panBtnFile00.set_flexgrow("1");
                p.panBtnFile00.set_flexmainaxisalign("end");
                p.panBtnFile00.set_horizontalgap("10");
                p.panBtnFile00.move("433","58","305","46",null,null);

                p.panTitle00.set_taborder("36");
                p.panTitle00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00.set_flexwrap("wrap");
                p.panTitle00.set_fittocontents("height");
                p.panTitle00.move("0","124","100%","46",null,null);

                p.Static00_00.set_taborder("37");
                p.Static00_00.set_text("파일수 : ");
                p.Static00_00.set_fittocontents("width");
                p.Static00_00.move("88","123","48","46",null,null);

                p.Static01_00.set_taborder("38");
                p.Static01_00.set_text("0");
                p.Static01_00.set_fittocontents("width");
                p.Static01_00.move("165","143","9","46",null,null);

                p.Static02_00.set_taborder("39");
                p.Static02_00.set_text("개");
                p.Static02_00.set_fittocontents("width");
                p.Static02_00.move("293","131","13","46",null,null);

                p.panFileNum00.set_taborder("40");
                p.panFileNum00.set_flexgrow("1");
                p.panFileNum00.set_horizontalgap("4");
                p.panFileNum00.move("20","190","305","46",null,null);

                p.btn_del_file_1_00.set_taborder("41");
                p.btn_del_file_1_00.set_text("전체파일삭제");
                p.btn_del_file_1_00.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_1_00.set_fittocontents("width");
                p.btn_del_file_1_00.move("512","135","125","34",null,null);

                p.panBtnDel00.set_taborder("42");
                p.panBtnDel00.set_flexcrossaxisalign("center");
                p.panBtnDel00.set_flexmainaxisalign("end");
                p.panBtnDel00.set_flexgrow("1");
                p.panBtnDel00.move("517","141","305","46",null,null);

                p.Panel00_01.set_taborder("43");
                p.Panel00_01.move("20","51","100%","46",null,null);

                p.Grid00_00.set_taborder("44");
                p.Grid00_00.set_binddataset("dsFile1");
                p.Grid00_00.set_autofittype("col");
                p.Grid00_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00.move("20.00","114","100%","40",null,null);

                p.panFile00.set_taborder("45");
                p.panFile00.set_fittocontents("height");
                p.panFile00.set_spacing("10px 20px 10px 20px");
                p.panFile00.set_flexwrap("wrap");
                p.panFile00.set_cssclass("pal_WF_DtlBg");
                p.panFile00.set_verticalgap("4");
                p.panFile00.move("0","42","100.00%","161",null,null);

                p.staLabel00_02_01.set_taborder("46");
                p.staLabel00_02_01.set_text("사업자등록증");
                p.staLabel00_02_01.set_cssclass("sta_WF_Label_E");
                p.staLabel00_02_01.set_fittocontents("width");
                p.staLabel00_02_01.move("0","44","305","46",null,null);

                p.Button00_01.set_taborder("47");
                p.Button00_01.set_text("샘플첨부파일명");
                p.Button00_01.set_cssclass("btn_WF_Small");
                p.Button00_01.set_fittocontents("width");
                p.Button00_01.move("813","76","120","34",null,null);

                p.btn_file_1_01.set_taborder("48");
                p.btn_file_1_01.set_text("파일선택");
                p.btn_file_1_01.set_cssclass("btn_WF_FileUp");
                p.btn_file_1_01.set_fittocontents("width");
                p.btn_file_1_01.move("124","58","116","34",null,null);

                p.panBtnFile01.set_taborder("49");
                p.panBtnFile01.set_flexgrow("1");
                p.panBtnFile01.set_flexmainaxisalign("end");
                p.panBtnFile01.set_horizontalgap("10");
                p.panBtnFile01.move("433","58","305","46",null,null);

                p.panTitle01.set_taborder("50");
                p.panTitle01.set_cssclass("pan_WF_FileTitle");
                p.panTitle01.set_flexwrap("wrap");
                p.panTitle01.set_fittocontents("height");
                p.panTitle01.move("0","124","100%","46",null,null);

                p.Static00_01.set_taborder("51");
                p.Static00_01.set_text("파일수 : ");
                p.Static00_01.set_fittocontents("width");
                p.Static00_01.move("88","123","48","46",null,null);

                p.Static01_01.set_taborder("52");
                p.Static01_01.set_text("0");
                p.Static01_01.set_fittocontents("width");
                p.Static01_01.move("165","143","9","46",null,null);

                p.Static02_01.set_taborder("53");
                p.Static02_01.set_text("개");
                p.Static02_01.set_fittocontents("width");
                p.Static02_01.move("293","131","13","46",null,null);

                p.panFileNum01.set_taborder("54");
                p.panFileNum01.set_flexgrow("1");
                p.panFileNum01.set_horizontalgap("4");
                p.panFileNum01.move("20","190","305","46",null,null);

                p.btn_del_file_1_01.set_taborder("55");
                p.btn_del_file_1_01.set_text("전체파일삭제");
                p.btn_del_file_1_01.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_1_01.set_fittocontents("width");
                p.btn_del_file_1_01.move("512","135","125","34",null,null);

                p.panBtnDel01.set_taborder("56");
                p.panBtnDel01.set_flexcrossaxisalign("center");
                p.panBtnDel01.set_flexmainaxisalign("end");
                p.panBtnDel01.set_flexgrow("1");
                p.panBtnDel01.move("517","141","305","46",null,null);

                p.Panel00_02.set_taborder("57");
                p.Panel00_02.move("20","51","100%","46",null,null);

                p.Grid00_01.set_taborder("58");
                p.Grid00_01.set_binddataset("dsFile1");
                p.Grid00_01.set_autofittype("col");
                p.Grid00_01.set_cssclass("grd_WF_FileAdd");
                p.Grid00_01.move("20.00","114","100%","40",null,null);

                p.panFile01.set_taborder("59");
                p.panFile01.set_fittocontents("height");
                p.panFile01.set_spacing("10px 20px 10px 20px");
                p.panFile01.set_flexwrap("wrap");
                p.panFile01.set_cssclass("pal_WF_DtlBg");
                p.panFile01.set_verticalgap("4");
                p.panFile01.move("0","42","100.00%","161",null,null);

                p.staLabel00_02_02.set_taborder("60");
                p.staLabel00_02_02.set_text("통장사본");
                p.staLabel00_02_02.set_cssclass("sta_WF_Label_E");
                p.staLabel00_02_02.set_fittocontents("width");
                p.staLabel00_02_02.move("0","44","305","46",null,null);

                p.Button00_02.set_taborder("61");
                p.Button00_02.set_text("샘플첨부파일명");
                p.Button00_02.set_cssclass("btn_WF_Small");
                p.Button00_02.set_fittocontents("width");
                p.Button00_02.move("813","76","120","34",null,null);

                p.btn_file_1_02.set_taborder("62");
                p.btn_file_1_02.set_text("파일선택");
                p.btn_file_1_02.set_cssclass("btn_WF_FileUp");
                p.btn_file_1_02.set_fittocontents("width");
                p.btn_file_1_02.move("124","58","116","34",null,null);

                p.panBtnFile02.set_taborder("63");
                p.panBtnFile02.set_flexgrow("1");
                p.panBtnFile02.set_flexmainaxisalign("end");
                p.panBtnFile02.set_horizontalgap("10");
                p.panBtnFile02.move("433","58","305","46",null,null);

                p.panTitle02.set_taborder("64");
                p.panTitle02.set_cssclass("pan_WF_FileTitle");
                p.panTitle02.set_flexwrap("wrap");
                p.panTitle02.set_fittocontents("height");
                p.panTitle02.move("0","124","100%","46",null,null);

                p.Static00_02.set_taborder("65");
                p.Static00_02.set_text("파일수 : ");
                p.Static00_02.set_fittocontents("width");
                p.Static00_02.move("88","123","48","46",null,null);

                p.Static01_02.set_taborder("66");
                p.Static01_02.set_text("0");
                p.Static01_02.set_fittocontents("width");
                p.Static01_02.move("165","143","9","46",null,null);

                p.Static02_02.set_taborder("67");
                p.Static02_02.set_text("개");
                p.Static02_02.set_fittocontents("width");
                p.Static02_02.move("293","131","13","46",null,null);

                p.panFileNum02.set_taborder("68");
                p.panFileNum02.set_flexgrow("1");
                p.panFileNum02.set_horizontalgap("4");
                p.panFileNum02.move("20","190","305","46",null,null);

                p.btn_del_file_1_02.set_taborder("69");
                p.btn_del_file_1_02.set_text("전체파일삭제");
                p.btn_del_file_1_02.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_1_02.set_fittocontents("width");
                p.btn_del_file_1_02.move("512","135","125","34",null,null);

                p.panBtnDel02.set_taborder("70");
                p.panBtnDel02.set_flexcrossaxisalign("center");
                p.panBtnDel02.set_flexmainaxisalign("end");
                p.panBtnDel02.set_flexgrow("1");
                p.panBtnDel02.move("517","141","305","46",null,null);

                p.Panel00_03.set_taborder("71");
                p.Panel00_03.move("20","51","100%","46",null,null);

                p.Grid00_02.set_taborder("72");
                p.Grid00_02.set_binddataset("dsFile1");
                p.Grid00_02.set_autofittype("col");
                p.Grid00_02.set_cssclass("grd_WF_FileAdd");
                p.Grid00_02.move("20.00","114","100%","40",null,null);

                p.panFile02.set_taborder("73");
                p.panFile02.set_fittocontents("height");
                p.panFile02.set_spacing("10px 20px 10px 20px");
                p.panFile02.set_flexwrap("wrap");
                p.panFile02.set_cssclass("pal_WF_DtlBg");
                p.panFile02.set_verticalgap("4");
                p.panFile02.move("0","42","100.00%","161",null,null);

                p.staLabel00_02_03.set_taborder("74");
                p.staLabel00_02_03.set_text("디지털 사이니지 표출 미디어파일");
                p.staLabel00_02_03.set_cssclass("sta_WF_Label_E");
                p.staLabel00_02_03.set_fittocontents("width");
                p.staLabel00_02_03.move("0","44","305","46",null,null);

                p.Button00_03.set_taborder("75");
                p.Button00_03.set_text("샘플첨부파일명");
                p.Button00_03.set_cssclass("btn_WF_Small");
                p.Button00_03.set_fittocontents("width");
                p.Button00_03.move("813","76","120","34",null,null);

                p.btn_file_1_03.set_taborder("76");
                p.btn_file_1_03.set_text("파일선택");
                p.btn_file_1_03.set_cssclass("btn_WF_FileUp");
                p.btn_file_1_03.set_fittocontents("width");
                p.btn_file_1_03.move("124","58","116","34",null,null);

                p.panBtnFile03.set_taborder("77");
                p.panBtnFile03.set_flexgrow("1");
                p.panBtnFile03.set_flexmainaxisalign("end");
                p.panBtnFile03.set_horizontalgap("10");
                p.panBtnFile03.move("433","58","305","46",null,null);

                p.panTitle03.set_taborder("78");
                p.panTitle03.set_cssclass("pan_WF_FileTitle");
                p.panTitle03.set_flexwrap("wrap");
                p.panTitle03.set_fittocontents("height");
                p.panTitle03.move("0","124","100%","46",null,null);

                p.Static00_03.set_taborder("79");
                p.Static00_03.set_text("파일수 : ");
                p.Static00_03.set_fittocontents("width");
                p.Static00_03.move("88","123","48","46",null,null);

                p.Static01_03.set_taborder("80");
                p.Static01_03.set_text("0");
                p.Static01_03.set_fittocontents("width");
                p.Static01_03.move("165","143","9","46",null,null);

                p.Static02_03.set_taborder("81");
                p.Static02_03.set_text("개");
                p.Static02_03.set_fittocontents("width");
                p.Static02_03.move("293","131","13","46",null,null);

                p.panFileNum03.set_taborder("82");
                p.panFileNum03.set_flexgrow("1");
                p.panFileNum03.set_horizontalgap("4");
                p.panFileNum03.move("20","190","305","46",null,null);

                p.btn_del_file_1_03.set_taborder("83");
                p.btn_del_file_1_03.set_text("전체파일삭제");
                p.btn_del_file_1_03.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_1_03.set_fittocontents("width");
                p.btn_del_file_1_03.move("512","135","125","34",null,null);

                p.panBtnDel03.set_taborder("84");
                p.panBtnDel03.set_flexcrossaxisalign("center");
                p.panBtnDel03.set_flexmainaxisalign("end");
                p.panBtnDel03.set_flexgrow("1");
                p.panBtnDel03.move("517","141","305","46",null,null);

                p.Panel00_04.set_taborder("85");
                p.Panel00_04.move("20","51","100%","46",null,null);

                p.Grid00_03.set_taborder("86");
                p.Grid00_03.set_binddataset("dsFile1");
                p.Grid00_03.set_autofittype("col");
                p.Grid00_03.set_cssclass("grd_WF_FileAdd");
                p.Grid00_03.move("20.00","114","100%","40",null,null);

                p.panFile03.set_taborder("87");
                p.panFile03.set_fittocontents("height");
                p.panFile03.set_spacing("10px 20px 10px 20px");
                p.panFile03.set_flexwrap("wrap");
                p.panFile03.set_cssclass("pal_WF_DtlBg");
                p.panFile03.set_verticalgap("4");
                p.panFile03.move("0","42","100.00%","161",null,null);

                p.staLabel00_02_04.set_taborder("88");
                p.staLabel00_02_04.set_text("가로등배너 시안 미디어파일");
                p.staLabel00_02_04.set_cssclass("sta_WF_Label_E");
                p.staLabel00_02_04.set_fittocontents("width");
                p.staLabel00_02_04.move("0","44","305","46",null,null);

                p.Button00_04.set_taborder("89");
                p.Button00_04.set_text("샘플첨부파일명");
                p.Button00_04.set_cssclass("btn_WF_Small");
                p.Button00_04.set_fittocontents("width");
                p.Button00_04.move("813","76","120","34",null,null);

                p.btn_file_1_04.set_taborder("90");
                p.btn_file_1_04.set_text("파일선택");
                p.btn_file_1_04.set_cssclass("btn_WF_FileUp");
                p.btn_file_1_04.set_fittocontents("width");
                p.btn_file_1_04.move("124","58","116","34",null,null);

                p.panBtnFile04.set_taborder("91");
                p.panBtnFile04.set_flexgrow("1");
                p.panBtnFile04.set_flexmainaxisalign("end");
                p.panBtnFile04.set_horizontalgap("10");
                p.panBtnFile04.move("433","58","305","46",null,null);

                p.panTitle04.set_taborder("92");
                p.panTitle04.set_cssclass("pan_WF_FileTitle");
                p.panTitle04.set_flexwrap("wrap");
                p.panTitle04.set_fittocontents("height");
                p.panTitle04.move("0","124","100%","46",null,null);

                p.Static00_04.set_taborder("93");
                p.Static00_04.set_text("파일수 : ");
                p.Static00_04.set_fittocontents("width");
                p.Static00_04.move("88","123","48","46",null,null);

                p.Static01_04.set_taborder("94");
                p.Static01_04.set_text("0");
                p.Static01_04.set_fittocontents("width");
                p.Static01_04.move("165","143","9","46",null,null);

                p.Static02_04.set_taborder("95");
                p.Static02_04.set_text("개");
                p.Static02_04.set_fittocontents("width");
                p.Static02_04.move("293","131","13","46",null,null);

                p.panFileNum04.set_taborder("96");
                p.panFileNum04.set_flexgrow("1");
                p.panFileNum04.set_horizontalgap("4");
                p.panFileNum04.move("20","190","305","46",null,null);

                p.btn_del_file_1_04.set_taborder("97");
                p.btn_del_file_1_04.set_text("전체파일삭제");
                p.btn_del_file_1_04.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_1_04.set_fittocontents("width");
                p.btn_del_file_1_04.move("512","135","125","34",null,null);

                p.panBtnDel04.set_taborder("98");
                p.panBtnDel04.set_flexcrossaxisalign("center");
                p.panBtnDel04.set_flexmainaxisalign("end");
                p.panBtnDel04.set_flexgrow("1");
                p.panBtnDel04.move("517","141","305","46",null,null);

                p.Panel00_05.set_taborder("99");
                p.Panel00_05.move("20","51","100%","46",null,null);

                p.Grid00_04.set_taborder("100");
                p.Grid00_04.set_binddataset("dsFile1");
                p.Grid00_04.set_autofittype("col");
                p.Grid00_04.set_cssclass("grd_WF_FileAdd");
                p.Grid00_04.move("20.00","114","100%","40",null,null);

                p.panFile04.set_taborder("101");
                p.panFile04.set_fittocontents("height");
                p.panFile04.set_spacing("10px 20px 10px 20px");
                p.panFile04.set_flexwrap("wrap");
                p.panFile04.set_cssclass("pal_WF_DtlBg");
                p.panFile04.set_verticalgap("4");
                p.panFile04.move("0","42","100.00%","161",null,null);
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
                p.divInfoGuide.set_taborder("1");
                p.divInfoGuide.set_text("서비스 흐름 및 작업방법 안내");
                p.divInfoGuide.set_cssclass("div_WF_InfoGuide");
                p.divInfoGuide.set_minheight("300");
                p.divInfoGuide.set_maxheight("");
                p.divInfoGuide.move("1660.00","262","100%","300",null,null);

                p.sub_tit01.set_taborder("5");
                p.sub_tit01.set_background("#ffffff");
                p.sub_tit01.set_flexcrossaxisalign("end");
                p.sub_tit01.move("1630","674","100%","70",null,null);

                p.Div01.set_taborder("0");
                p.Div01.set_text("Div00");
                p.Div01.set_cssclass("div_WF_Bg");
                p.Div01.set_fittocontents("height");
                p.Div01.move("0","0","100%","529",null,null);

                p.sub_tit02.set_taborder("9");
                p.sub_tit02.set_background("#ffffff");
                p.sub_tit02.set_flexcrossaxisalign("end");
                p.sub_tit02.move("1630","674","100%","70",null,null);

                p.staSubTitle02_00.set_taborder("2");
                p.staSubTitle02_00.set_text("신청자정보");
                p.staSubTitle02_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00.move("1630.00","690","50%","50",null,null);

                p.Button00_00.set_taborder("3");
                p.Button00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00.move("2890.00","692","34","34",null,null);

                p.Panel01_02.set_taborder("4");
                p.Panel01_02.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02.set_spacing("0px 10px");
                p.Panel01_02.set_horizontalgap("10");
                p.Panel01_02.set_flexcrossaxisalign("center");
                p.Panel01_02.set_flexmainaxisalign("end");
                p.Panel01_02.move("2340.00","690","50%","50",null,null);

                p.staSubTitle02_00_00.set_taborder("6");
                p.staSubTitle02_00_00.set_text("신청정보");
                p.staSubTitle02_00_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_00.move("1630.00","690","50%","50",null,null);

                p.Button00_00_00.set_taborder("7");
                p.Button00_00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_00.move("2890.00","692","34","34",null,null);

                p.Panel01_02_00.set_taborder("8");
                p.Panel01_02_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_00.set_spacing("0px 10px");
                p.Panel01_02_00.set_horizontalgap("10");
                p.Panel01_02_00.set_flexcrossaxisalign("center");
                p.Panel01_02_00.set_flexmainaxisalign("end");
                p.Panel01_02_00.move("2340.00","690","50%","50",null,null);

                p.Div02.set_taborder("10");
                p.Div02.set_text("Div00");
                p.Div02.set_cssclass("div_WF_Bg");
                p.Div02.set_fittocontents("height");
                p.Div02.move("50.00","478","100%","600",null,null);

                p.staSubTitle02_00_01.set_taborder("11");
                p.staSubTitle02_00_01.set_text("처리내역");
                p.staSubTitle02_00_01.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_01.move("1630.00","690","50%","50",null,null);

                p.Button00_00_01.set_taborder("12");
                p.Button00_00_01.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_01.move("2890.00","692","34","34",null,null);

                p.Panel01_02_01.set_taborder("13");
                p.Panel01_02_01.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_01.set_spacing("0px 10px");
                p.Panel01_02_01.set_horizontalgap("10");
                p.Panel01_02_01.set_flexcrossaxisalign("center");
                p.Panel01_02_01.set_flexmainaxisalign("end");
                p.Panel01_02_01.move("2340.00","690","50%","50",null,null);

                p.sub_tit03.set_taborder("14");
                p.sub_tit03.set_background("#ffffff");
                p.sub_tit03.set_flexcrossaxisalign("end");
                p.sub_tit03.move("1630","674","100%","70",null,null);

                p.Div03.set_taborder("15");
                p.Div03.set_text("Div00");
                p.Div03.set_cssclass("div_WF_Bg");
                p.Div03.set_fittocontents("height");
                p.Div03.move("0","0","100%","2300",null,null);
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
                p.btn01.set_text("신청자정보");
                p.btn01.set_cssclass("btn_WF_Quick_S");
                p.btn01.move("17","20","100%","45",null,null);

                p.btn02.set_taborder("1");
                p.btn02.set_text("신청정보");
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
                p.set_titletext("행사용시설사용접수요청및신청");

                p.divTitle.set_taborder("3");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_cssclass("div_WF_QuickFrBg");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("height");
                p.divForm.move("0","divTitle:10",null,"4000","60",null);

                p.divQuick.set_taborder("1");
                p.divQuick.set_text("div00");
                p.divQuick.set_cssclass("div_WF_QuickMenu");
                p.divQuick.set_fittocontents("height");
                p.divQuick.move(null,"62","296","156","62",null);

                p.divBtn.set_taborder("2");
                p.divBtn.set_text("div00");
                p.divBtn.set_cssclass("div_WF_QuickBtnBg");
                p.divBtn.set_fittocontents("height");
                p.divBtn.move(null,"divQuick:0","296","131","62",null);

                p.divGuide00.set_taborder("4");
                p.divGuide00.set_text("div00");
                p.divGuide00.set_visible("false");
                p.divGuide00.set_cssclass("div_GD_Tip");
                p.divGuide00.move("1600.00","145","450","385",null,null);
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
            obj = new BindItem("item0","divForm.form.Div01.form.edtAplySeNm11","value","dsEvntFcltDmndMst","dmndNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.Div03.form.txtSplmntDmndRsn","value","dsEvntFcltDmndMst","splmntDmndRsnCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divForm.form.Div03.form.txtCnvyMttr","value","dsEvntFcltDmndMst","cnvyMttrCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.Div02.form.edtEvntNm","value","dsEvntFcltDmndMst","evntNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.Div02.form.edtEvntHstNm","value","dsEvntFcltDmndMst","evntHstNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.Div02.form.cboRgnSeCd","value","dsEvntFcltDmndMst","rgnSeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divForm.form.Div02.form.cboCtrNo","value","dsEvntFcltDmndMst","ctrNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divForm.form.Div02.form.cboSecNo","value","dsEvntFcltDmndMst","secNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divForm.form.Div02.form.divCal.form.calBgngYmd","value","dsEvntFcltDmndMst","useBgngYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divForm.form.Div02.form.divCal.form.calEndYmd","value","dsEvntFcltDmndMst","useEndYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.Div02.form.radEvntFcltSeCd","value","dsEvntFcltDmndMst","evntFcltSeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.Div02.form.cboDmndSttsCd","value","dsEvntFcltDmndMst","sttsCd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.addIncludeScript("LIF081M06.xfdl","xjs::TaskCom.xjs");
        this.registerScript("LIF081M06.xfdl", function() {
        /******************************************************************************
        *  PcMdi 프로젝트
        *  @FileName 	LIF081M06.xfdl
        *  @Creator 	김진섭
        *  @CreateDate 	2024/12/19
        *  @Desction    생활 > 행사용시설신청 > 행사용시설사용접수요청및신청
        ******************* 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/12/19				김진섭							최초생성
        ********************************************************************************/
        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;  // 업무공통

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.objVrbl = { isWrtSplmntStep : false    // 신청서 작성 및 보완 단계 여부
                       , isWrtStep       : false    // 신청서 작성 단계 여부
                       };

        this.dmndNo 	= "";	// 신청서번호(화면 로드시 신청서 번호가 없으면 신규등록 가능)
        this.aplyNo     = "";
        this.schdlMngNo = "";  // 일정등록관리번호
        this.aplySeCd 	= "TSPEVN001"; // 신청구분코드
        this.jobCd 		= "TAS10470"; // 작업코드(기본값 TAS10470 : 요청서작성)

        this.vStrSvcId  = ""; // 서비스ID
        this.vStrSvcUrl = ""; // 서비스URL
        this.param;

        this.btnDiv = this.divBtn; // 공통버튼영역 Div

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	// 전달받은 파라메터 팝업창과 페이지오픈으로 파라메터 불러오는 방식이 달라짐
        	trace("this.opener==>" + this.opener);
        	//this.aplyNo = this.getOwnerFrame().aplyNo;   // 신청번호
        	//trace("this.aplyNo1122==>" + this.getOwnerFrame().aplyNo);
        	trace("this.aplyNo223344==>" + this.getOwnerFrame().form.fvObjArgs);

        	//if(this.opener)
        	if(this.getOwnerFrame().form.fvObjArgs == undefined)
        	{
        		trace("11122");
        		this.param = {
        			"aplyNo"     : ""
        			//"schdlMngNo" : this.getOwnerFrame().schdlMngNo
        		}

        	} else
        	{
        		trace("22233");
        		this.param = this.getOwnerFrame().form.fvObjArgs;
        		trace("this.param==>" + this.param.aplyNo);
        	}

        	this.fnInit();

        };

        /*******************************************************************************************************************************
         * fnInit Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {

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
        	//this.cfnComCdLoad({ id:"comBldgSeSearch", cbf:"fnCallback", dsBldgSeList:"TSPLOC:S" }); // 건물구분코드(S:"선택"추가 옵션)
        	//this.cfnComCdLoad({ id:"comAplyKndCdSearch", cbf:"fnCallback", dsAplyKndCdList:"FACREQTYPE:" }); // 신청종류코드
        	//this.cfnComCdLoad({ id:"comRenUseCdSearch", cbf:"fnCallback", dsRenUseList:"RENUSE:" }); // 시설구분코드
        	//this.cfnComCdLoad({ id:"comCustTypeCdSearch", cbf:"fnCallback", dsCustTypeCdList:"FACCOMTYPE:" }); // 고객유형코드
        	//this.cfnComCdLoad({ id:"comZoneCdSearch", cbf:"fnCallback", dsZoneCdList:"TSCWPLARA:" }); // 구역구분코드
        	//this.cfnComCdLoad({ id:"comSrvcAplySeCdSearch", cbf:"fnCallback", dsSrvcAplySeList:"FACSVCTYPE:" }); // 서비스신청구분코드

        	//this.dmndNo = "EVN2412_00006";   // 요청일련번호
        	//this.dmndNo = this.param.aplyNo;   // 요청일련번호
        	//this.schdlMngNo = this.param.schdlMngNo;  // 일정등록관리번호
        	this.dmndNo = this.param.aplyNo;   // 요청일련번호

        	//신청자정보 영역
        	this.divForm.form.Div01.form.edtAplcntNm.value = this.gvUserNm;//신청자명
        	this.divForm.form.Div01.form.divEdtPop00.form.edtAplcntInstNm.value = this.gvCoNm;// 신청자기관명
        	this.divForm.form.Div01.form.edtRgtrTelno.value = this.gvTelNo;//신청자 전화번호
        	this.divForm.form.Div01.form.edtRgtrMblTelno.value = this.gvMblTelNo;//신청자휴대전화번호

        	trace("a44_dmndNo==>" + this.dmndNo);
        	trace("a44_schdlMngNo==>" + this.schdlMngNo);
        	if (this.gfnIsNull(this.dmndNo)) {
        	    var nRow = this.dsEvntFcltDmndMst.addRow();

        		//설치요청기간 set
        		var vFdate 	= this.gfn_getDate("date");
        		var vTdate	= this.gfn_addMonth(vFdate, 1);
        		//this.divForm.form.Div02.form.divCal.form.calBgngYmd.set_value(vFdate);
        		//this.divForm.form.Div02.form.divCal.form.calEndYmd.set_value(vTdate);

        		//상업용시설 행사용시설사용접수요청 신청내역 리스트 영역
        		//this.divForm.form.Div02.form.pan05.set_visible(false);
        		this.divForm.form.Div02.form.pan02_01_00_00_00.visible = false;//구간번호

        		// 해당 TASK ID로 버튼 자동 생성 -> 추후에 신청번호가 있는지 없는지 체크해서 task id 박아넣어줘야함. 현재는 신청서 작성으로 했음.
        		this.cfnBtnCrt({ crtTrgt:this.divBtn, cbf:"fnCallback", lnkgEvnt:this.btn_onclick, inqCnd : { jobPrcsPrgrsSeCd:this.jobCd} });

        	} else {

        		// 행사용시설사용접수요청 마스터 조회
        		this.fnSearch(this.dmndNo);
        	}

        	trace("정상!!!");
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
        		posTop1 = 83;
        		posTop2 = 239;

        	}else{
        		posTop1 = 22;
        		posTop2 = 178;
        	}

        	this.divQuick.top = e.pos + posTop1;
        	this.divBtn.top = e.pos + posTop2;
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

        	console.log("objNm = " + objNm);

        	if(objNm == "btn01"){//신청자정보
        		objDiv = this.divForm.form.Div01;
        		objTit = this.divForm.form.sub_tit01;

        	}else if(objNm == "btn02"){//신청정보
        		objDiv = this.divForm.form.Div02;
        		objTit = this.divForm.form.sub_tit02;

        	}else if(objNm == "btn03"){//처리결과
        		objDiv = this.divForm.form.Div03;
        		objTit = this.divForm.form.sub_tit03;

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
         * @name : btn_onclick
         * @description : Button Click Event
         ***************************************************************************/
        this.btn_onclick = function(obj,e)
        {
        	// WorkFlow 정보
        	var wfInfo = this.cfnGetWfInfo(obj.name);

        	trace("bb11");
        	var vBtnNm = wfInfo.prcsSeCdNm;
        	var vBtnCd = wfInfo.prcsSeCd; // 눌린 버튼 ID(obj.name과 같은 값임.)

        	/* vBtnCd 정보
        		CTL11216	요청 임시저장
        		CTL11201	요청
        		CTL11202	승인(요청)
        		CTL11203	보완요청(요청)
        		CTL11219	신청
        		CTL11226	보완요청(신청)
        		CTL11221	재신청
        		CTL11227	승인(신청)
        		CTL11231	설문응답완료
        	*/

        	trace("vBtnCd===>" + vBtnCd);

        	//행사용시설요청마스터(1)	EVNT_FCLT_DMND_MST
        	//01:요청중, 02:요청승인완료, 03:요청보완요청중
        	if(vBtnCd == "CTL11201"){
        		this.dsEvntFcltDmndMst.setColumn(0, "sttsCd", "01");
        	}else if(vBtnCd == "CTL11202"){
        		this.dsEvntFcltDmndMst.setColumn(0, "sttsCd", "02");
        	}else if(vBtnCd == "CTL11203"){
        		this.dsEvntFcltDmndMst.setColumn(0, "sttsCd", "03");
        	}

        	if(vBtnCd == "CTL11216"){ // 임시저장 버튼
        		this.vStrSvcId  = "saveEvntFcltUseRcptDmndStrg";
        		this.vStrSvcUrl = "evntFcltUseRcptDmnd/saveEvntFcltUseRcptDmndStrg.do";

        	}else if(vBtnCd == "CTL11201" || vBtnCd == "CTL11002"
        	                              || vBtnCd == "CTL11219" || vBtnCd == "CTL11221"){
        		// validation check
        		var res = this.fnValiChk();
        		if(!res){
        			return;

        		}

        		//TODO GDS에서 사업자등록번호를 받아야 함
        		//사업자등록번호
        		//this.dsEvntFcltDmndMst.setColumn(0, "brno", "1098133068");
        		this.dsEvntFcltDmndMst.setColumn(0, "brno", "2152213166");
        		this.dsEvntFcltDmndMst.setColumn(0, "schdlMngNo", this.schdlMngNo);

        		this.vStrSvcId  = "saveEvntFcltUseRcptDmndStrg";
        		this.vStrSvcUrl = "evntFcltUseRcptDmnd/saveEvntFcltUseRcptDmndStrg.do";

        	}else if(vBtnCd == "CTL10993" || vBtnCd == "CTL10995" || vBtnCd == "CTL11000"){ // 종료, 신청서보완 - 미처리종료, 담당자검토및승인 - 미처리종료
        		// 신규입력일때 종료 버튼 클릭 시 화면만 닫아줌.
        		if(this.dsEvntFcltDmndMst.getRowType(0) == Dataset.ROWTYPE_INSERT){
        			this.gfnConfirmMsg("endConfirm", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"], "", ["종료"]);
        			return;

        		}else{
        			this.vStrSvcId  = "saveEvntFcltUseRcptDmndStrg";
        			this.vStrSvcUrl = "evntFcltUseRcptDmnd/saveEvntFcltUseRcptDmndStrg.do";

        		}

        	}else if(vBtnCd == "CTL10996" || vBtnCd == "CTL11203" || vBtnCd == "CTL11226"){ // 접수 - 접수, 접수 - 보완요청
        		this.vStrSvcId  = "saveEvntFcltUseRcptDmndStrg";
        		this.vStrSvcUrl = "evntFcltUseRcptDmnd/saveEvntFcltUseRcptDmndStrg.do";

        		// 보완요청 - 보완사유 체크
        		if(vBtnCd == "CTL11203" || vBtnCd == "CTL11226"){
        			if(this.gfnIsNull(this.dsEvntFcltDmndMst.getColumn(0, "splmntDmndRsnCn"))){
        				this.divForm.form.Div03.form.txtSplmntDmndRsn.setFocus();
        				this.gfnAlertMsg("msg", "MSG_009", ["보완요청 사유 \n"]);
        				return;

        			}
        		}

        	}else if(vBtnCd == "CTL11202" || vBtnCd == "CTL11227"
        	          || vBtnCd == "CTL11231"){ // 담당자검토및승인 - 보완요청 || 승인 || 설문응답완료

        		this.dsEvntFcltDmndMst.setColumn(0, "schdlMngNo", this.schdlMngNo);

        		this.vStrSvcId  = "saveEvntFcltUseRcptDmndStrg";
        		this.vStrSvcUrl = "evntFcltUseRcptDmnd/saveEvntFcltUseRcptDmndStrg.do";

        	}else if(vBtnCd == "CTL10999"){ // 담당자변경
        		alert("담당자변경 팝업 완료 시 연결 예정!!");
        		return;

        	}

        	// 넘겨줄 데이터 세팅
        	this.dsEvntFcltDmndMst.setColumn(0, "jobCd", wfInfo.nextStepJobPrcsPrgrsSeCd);
        	this.dsEvntFcltDmndMst.setColumn(0, "aplySeCd", this.aplySeCd);

        	if(this.gfnIsNull(this.dsEvntFcltDmndMst.getColumn(0, "docCd"))){
        		this.dsEvntFcltDmndMst.setColumn(0, "docCd", "TSPDOC900"); // 공통코드 TSPDOC900 : 전동차신청

        	}

        	// 시설운영마스터 데이터 세팅
        	if(!this.gfnIsNull(this.dmndNo)){
        		this.dsMst.setColumn(0, "aplyNo", this.dmndNo);

        	}
        	this.dsMst.setColumn(0, "taskCd"    , wfInfo.jobPrcsPrgrsSeCd        );  // 현재업무코드
        	this.dsMst.setColumn(0, "nextTaskCd", wfInfo.nextStepJobPrcsPrgrsSeCd);  // 다음업무코드

        	this.dsMst.setColumn(0, "aplySeCd", this.aplySeCd);  // 신청구분코드

        	if(this.gfnIsNull(this.dsMst.getColumn(0, "docCd"))){
        		this.dsMst.setColumn(0, "docCd", "TSPDOC900"); // 공통코드 TSPDOC900 : 전동차신청

        	}

        // 	var curDt = this.gfnGetDate("time");
        // 	if(this.gfnIsNull(this.dsEvntFcltDmndMst.getColumn(0, "aplyDt"))){
        // 		this.dsEvntFcltDmndMst.setColumn(0, "aplyDt", curDt);
        //
        // 	}
        // 	if(this.gfnIsNull(this.dsMst.getColumn(0, "aplyDt"))){
        // 		this.dsMst.setColumn(0, "aplyDt", curDt);
        //
        // 	}

        	// 수정된 내역이 있는지 체크
        	if(!this.gfnDsIsUpdated(this.dsEvntFcltDmndMst) && !this.gfnDsIsUpdated(this.dsAtfl) && !this.gfnDsIsUpdated(this.dsCnvyMttr)){
        		this.gfnAlertMsg("msg", "MSG_004", [""]);
        		return;
        	}

        	if(vBtnCd == "CTL10993" || vBtnCd == "CTL10995" || vBtnCd == "CTL11000"){ // 종료, 신청서보완 - 미처리종료, 담당자검토및승인 - 미처리종료
        		trace("sssss==>" + vBtnCd );
        		this.gfnConfirmMsg("endSaveConfirm", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"], "", ["종료"]);

        	}else if(vBtnCd == "CTL11201") { // 신청
        		this.gfnConfirmMsg("aply_confirm", "MSG_025", "msgCallback", ["확인", "취소"], ["Y", "N"]);

        	}else{
        		this.gfnConfirmMsg("save_confirm", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"]);

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
        	}else if(sPopupId == "endConfirm"){
        		if(oRtn.result == "Y") {
        			// 메뉴 ID
        			var sMenuId = this.objApp.gvFrmLeft.form.dsMenu.getColumn(this.objApp.gvFrmLeft.form.dsMenu.rowposition, this.FRAME_MENUCOLUMNS.menuId);

        			this.gfnCloseMenu(sMenuId);

        		}
        	}else if(sPopupId == "endSaveConfirm"){
        	alert("gggg==>" + oRtn.result);
        		if(oRtn.result == "Y") {
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
        			alert("gggg2222==>" + oRtn.result);
        				// 저장
        				this.cfnSave();
        			}
        		}
        	}else if(sPopupId == "saveAlert"){
        		this.reload();

        		// this.gfnCloseMenu("MNG_0000000295");
        		// this.fnMovePage('MNG_0000000021', 'MNG_0000000144', 'work::CST/CAD/CST009M01.xfdl');

        	}else if(sPopupId == "imsi_saveAlert"){
        		//this.alert("임시저장 되었습니다.");
        		//this.close();

        		// this.gfnCloseMenu("MNG_0000000295");
        		// this.fnMovePage('MNG_0000000021', 'MNG_0000000144', 'work::CST/CAD/CST009M01.xfdl');

        	}else if(sPopupId == "aply_confirm"){
        		if(oRtn.result == "Y") {

        			// 저장
        			this.cfnSave();
        // 			// 메뉴 ID
        // 			var sMenuId = this.objApp.gvFrmLeft.form.dsMenu.getColumn(this.objApp.gvFrmLeft.form.dsMenu.rowposition, this.FRAME_MENUCOLUMNS.menuId);
        //
        // 			this.gfnCloseMenu(sMenuId);

        		}
        	}
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

        /**************************************************************************
         * @name : fnValiChk
         * @description : validation check
         ***************************************************************************/
        this.fnValiChk = function(){

        	// 행사용시설구분
        	if(this.gfnIsNull(this.divForm.form.Div02.form.radEvntFcltSeCd.value)){
        		this.divForm.form.Div02.form.radEvntFcltSeCd.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["[ 행사용시설구분 ] \n"]);
        		return false;
        	}

        	// 행사명
        	if(this.gfnIsNull(this.divForm.form.Div02.form.edtEvntNm.value)){
        		this.divForm.form.Div02.form.edtEvntNm.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["[ 행사명 ] \n"]);
        		return false;
        	}

        	// 행사주최자
        	if(this.gfnIsNull(this.divForm.form.Div02.form.edtEvntHstNm.value)){
        		this.divForm.form.Div02.form.edtEvntHstNm.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["[ 행사주최자 ] \n"]);
        		return false;
        	}

        	// 지역
        	if(this.gfnIsNull(this.divForm.form.Div02.form.cboRgnSeCd.value)){
        		this.divForm.form.Div02.form.cboRgnSeCd.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["[ 지역 ]\n"]);
        		return false;
        	}

        	if(this.divForm.form.Div02.form.radEvntFcltSeCd.value == "01"){//01:영접카운터
        		// 영접카운터번호
        		if(this.gfnIsNull(this.divForm.form.Div02.form.cboCtrNo.value)){
        			this.divForm.form.Div02.form.cboCtrNo.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["[ 영접카운터번호 ]\n"]);
        			return false;
        		}
        	}

        	if(this.divForm.form.Div02.form.radEvntFcltSeCd.value == "02"){//02:가로등배너
        		// 구간번호
        		if(this.gfnIsNull(this.divForm.form.Div02.form.cboSecNo.value)){
        			this.divForm.form.Div02.form.cboSecNo.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["[ 구간번호 ]\n"]);
        			return false;
        		}
        	}

        	// 사용시작일자
        	if(this.gfnIsNull(this.divForm.form.Div02.form.divCal.form.calBgngYmd.value)){
        		this.divForm.form.Div02.form.divCal.form.calBgngYmd.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["[ 사용시작일자 ]\n"]);
        		return false;
        	}

        	// 사용종료일자
        	if(this.gfnIsNull(this.divForm.form.Div02.form.divCal.form.calEndYmd.value)){
        		this.divForm.form.Div02.form.divCal.form.calEndYmd.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["[ 사용종료일자 ]\n"]);
        		return false;
        	}

        	//TODO 첨부파일 필수체크,20241228
        	// 행사용시설 사용신청서 파일첨부 체크
        	// 행사계획 파일첨부 체크
        	// 사업자등록증 파일첨부 체크
        	// 통장사본 파일첨부 체크
        	// 디지탈 서이니지 표출 미디어 파일
        	// 가로등배너 시안 미디어파일

        	return true;
        }

        /**************************************************************************
         * @name : fnScrnSetting
         * @description : 조회 시 화면 세팅
         ***************************************************************************/
        this.fnScrnSetting = function()
        {

        	//TAS10488 : 신청 상태
        	//TAS10489 : 재신청 상태
        	if(this.jobCd == "TAS10488" || this.jobCd == "TAS10489"){
        		// text 세팅`
		this.divForm.form.Div01.form.staLabelNo.text = "신청번호";
        		// 사용기간 from 항목
        		this.divForm.form.Div02.form.divCal.form.calBgngYmd.readonly = true;
        		// 사용기간 to 항목
        		this.divForm.form.Div02.form.divCal.form.calEndYmd.readonly = true;
        		// 행사일정현황조회 버튼
        		this.divForm.form.Div02.form.divCal.form.btnEvntSchdl.enable = false;
        	}

        	// TAS10434 : 담당자접수, TAS10435 : 담당자검토및승인
        	//TODO
        	//서비스목록화면에서 팝업 오픈인지, 처리자 로그인 후 메인화면의 처리목록에 팝업 오픈인지 구분 필요
        	//KJS,20241120
        	if(this.jobCd == "TAS10434" || this.jobCd == "TAS10435"){
        //alert("bb33222");
        		//this.divForm.form.Div02.form.pan07.visible = true; //서비스요청내용확인 radio
        		this.divForm.form.Div03.form.pan08.visible = true; //보완요청사유
        		this.divForm.form.Div03.form.pan09.visible = true; //별칭내용
        		this.divForm.form.Div03.form.pan10.visible = true; //전달사항
        		this.divForm.form.Div03.form.pan11.visible = true; //별칭내용
        		this.divForm.form.Div03.form.pan12.visible = true; //처리내용이력

        		this.resetScroll();//화면에서 스크롤을 길게 보이게 해주는 기능
        	}

        	//TAS10471 : 신청서보완
        	if(this.jobCd == "TAS10471"){
        		this.divForm.form.Div03.form.pan08.visible = true; //보완요청사유
        		this.divForm.form.Div03.form.pan10.visible = true; //전달사항
        		this.divForm.form.Div03.form.pan12.visible = true; //처리내용이력

        		this.resetScroll();//화면에서 스크롤을 길게 보이게 해주는 기능
        	}

        	//TAS10436 : 만족조조사
        	if(this.jobCd == "TAS10436"){
        	    this.divForm.form.Div03.form.pan10.visible = false; //처리내역
        		this.divForm.form.Div03.form.pan12.visible = true; //처리내용이력

        		this.resetScroll();//화면에서 스크롤을 길게 보이게 해주는 기능
        	}
        //alert("bb44");
        	// 담당자접수 (조회 거래) 시 readyOnly 처리
        // 	if(this.jobCd == "TAS10434"){
        // 		this.divForm.form.Div02.form.rdoSrvcDmndCnYn.readonly = true;
        // 		this.divForm.form.Div02.form.txtSplmntDmndRsn.readonly = true;
        // 	}

        	// 신청서 보완 시 보완내역 readyOnly 처리
        // 	if(this.jobCd == "TAS10471"){
        // 		this.divForm.form.Div03.form.rdoSrvcDmndCnYn.readonly = true;
        // 		this.divForm.form.Div03.form.txtSplmntDmndRsn.readonly = true;
        // 		this.divForm.form.Div03.form.grdSplmnt.readonly = true;
        // 		this.divForm.form.Div03.form.grdCnvyMttr.readonly = true;
        //
        // 		this.resetScroll();
        //
        // 	}

        	trace("(fn_ScrnSetting)this.jobCd ====>" + this.jobCd);

        	// TAS10437 : 종료 일때
        	if(this.jobCd == "TAS10437"){
        		var sBfrJobCd = this.dsEvntFcltDmndMst.getColumn(0, "bfrJobCd");
        		trace("sBfrJobCd_ff==>" + sBfrJobCd);
        		// TAS10470 : 요청서작성, TAS10471 : 신청서보완
        		if(sBfrJobCd == "TAS10470"){


        		}else if(sBfrJobCd == "TAS10471"){
        			// 신청서보완에서 미처리 종료된 경우 보완 내역을 보여준다.
        			//this.divForm.form.Div03.form.pan07.visible = true;
        			this.divForm.form.Div03.form.pan08.visible = true;
        			this.divForm.form.Div03.form.pan09.visible = true;
        			// this.divForm.form.Div07.form.pan07.visible = true;
        			//this.divForm.form.Div07.form.pan08.visible = true;

        			this.resetScroll();

        		}
        	}
        //alert("bb555==>" + this.jobCd);
        	// this.jobCd 가 TAS10470, TAS10471 일때는 신청서 작성/보완 이라 이외에는 컴포넌트 readOnly 처리해줌.
        	if(this.jobCd != "TAS10470" && this.jobCd != "TAS10471"){

        //alert("bb66622==>" + this.jobCd);
        		// 컨포넌트 enable, readonly 처리
        		var sDivFrom = this.divForm.form;

        		var arrDivComps = [sDivFrom.Div01, sDivFrom.Div02];

        		arrDivComps.forEach(oDiv => {
        			Array.from(oDiv.form.components).forEach(oComp => {
        				fnReadonly.call(this, oComp);
        			});
        		});
        //alert("bb66633==>" + this.jobCd);
        		// 내부함수호출
        		function fnReadonly (oComp, bReadonly) {
        			if (oComp instanceof nexacro.Div) {
        				fnReadonly.call(this, oComp.form);
        			} else {
        				if (oComp instanceof nexacro.Static) return;
        				if (oComp instanceof nexacro.Panel) return;
        				if (oComp instanceof nexacro.TextArea){
        					// TAS10437 : 종료가 아닐땐 textArea 수정가능하게 해줌.
        					if(this.jobCd != "TAS10437"){
        						return;

        					}
        				}
        				if (oComp instanceof nexacro.Button) {
        					if(oComp.id.indexOf("btnMin") > -1) return;
        					try {
        						// enable 처리할거
        						oComp.enable = bReadonly;

        						return;
        					} catch(e) {
        						trace ("enable속성없음");
        					}
        				}
        //alert("bb8888");

        				try {
        					// 접수단계 || 담당자검토및승인
        					if(this.jobCd == "TAS10434" || this.jobCd == "TAS10435"){
        						// "rdoSrvcDmndCnYn", "grdSplmnt", "grdCnvyMttr"
        						if(this.gfnDecode(oComp.id, "rdoSrvcDmndCnYn", "1", "grdSplmnt", "1", "grdCnvyMttr", "1", "0") == "1"){
        							return;

        						}

        					}

        					// readonly 처리할거
        					oComp.readonly = !bReadonly;

        				} catch(e) {
        					trace ("readonly 속성없음");
        				}
        			}
        		}
        	}

        	//alert("bb9999");
        }

        /************************************************************************************************************
         * @name : fnCallback
         * @description : 팝업에 관한 콜백 함수
         ***********************************************************************************************************/
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
            trace("@@fnCallback errorCode==>" + errorCode + " ; " +"svcID==>" + svcID + " ; " + "errorMsg==>" + errorMsg);

        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "selectEvntFcltUseRcptDmndInq" : // 행사용시설사용접수요청 마스터 조회
        			//alert("마스터 정상조회!!!");
        			if(this.dsEvntFcltDmndMst.getRowCount() > 0){
        				this.jobCd = this.dsEvntFcltDmndMst.getColumn(0, "jobCd");
        			}

        			//@서비스목록 화면에서 팝업조회시 버튼 생성 막음(kjs, 20241119)
        			// 해당 TASK ID로 버튼 자동 생성 -> 추후에 신청번호가 있는지 없는지 체크해서 task id 박아넣어줘야함. 현재는 신청서 작성으로 했음.
        			this.cfnBtnCrt({ crtTrgt:this.divBtn, cbf:"fnCallback", lnkgEvnt:this.btn_onclick, inqCnd : { jobPrcsPrgrsSeCd:this.jobCd} });

        			// 화면 세팅
        			this.fnScrnSetting();

        			//요청번호
        			this.divForm.form.Div01.form.pan01_AplyNo.visible = true;

        			//행사용시설구분코드 라디오버튼 변경시
        			this.divForm_Div02_radEvntFcltSeCd_onitemchanged();

        			alert("조회가 완료되었습니다");

        			break;

        		case "getAplySeNm" : // 신청구분명 조회
        			// 신청구분명 set
        			var v_AplySeNm = this.cfnGvbkAplySeNm();
        			trace("this.cfnGvbkAplySeNm()_v_AplySeNm==>" + v_AplySeNm);
        			this.divForm.form.Div01.form.edtAplySeNm.value = v_AplySeNm;

        			break;

        		case "comAplyKndCdSearch" : // 신청종류코드 조회
        			this.dsAplyKndCdList.filter("cdId == 'FACREQTYPE001' || cdId == 'FACREQTYPE002'");
        			this.divForm.form.Div02.form.rdoAplyKndCd.set_index(0);

        			break;

        		case "comRenUseCdSearch" : // 시설구분코드 조회

        			this.divForm.form.Div02.form.rdoFcltSe.set_index(0);

        			break;

        		case "comSrvcAplySeCdSearch" : // 서비스신청구분코드 조회

        			// 전체 조회를 위해 [선택] 추가
        			this.dsSrvcAplySeList.insertRow(0);
        			this.dsSrvcAplySeList.setColumn(0, "cdId", "");
        			this.dsSrvcAplySeList.setColumn(0, "cdNm", "[서비스신청구분]");

        			this.divForm.form.Div02.form.cboSrvcAplySe.set_index(0);

        			break;

        		case "comBldgSeSearch" : // 건물구분 조회
        			// 건물구분 제한값 'TSPLOCTSC010', 'TSPLOCTSC070', 'TSPLOCTSC020' ,'TSPLOCTSC030' ,'TSPLOCTSC090'
        			this.dsBldgSeList.filter("cdId == 'TSPLOCTSC010' || cdId == 'TSPLOCTSC020' || cdId == 'TSPLOCTSC070'");

        			// 전체 조회를 위해 [선택] 추가
        			this.dsBldgSeList.insertRow(0);
        			this.dsBldgSeList.setColumn(0, "cdId", "");
        			this.dsBldgSeList.setColumn(0, "cdNm", "[건물구분]");

        			this.divForm.form.Div02.form.cboBldgSe.set_index(0);

        			break;

        		case "comAplyKndSearch" : // 신청구분 조회
        			this.divForm.form.Div03.form.cboSrvcAplySe.set_index(0);

        			break;

        		case "_cfnBtnCrt_" : // 버튼 생성 callback
        			// 접수 || 담당자검토및승인
        			if(this.jobCd == "TAS10434" || this.jobCd == "TAS10435"){
        				this.rdoSrvcDmndCnYn_onitemchanged(this.divForm.form.Div02.form.rdoSrvcDmndCnYn);

        			}else if(this.jobCd == "TAS10471"){ // 신청서보완
        				var sClrId = this.dsEvntFcltDmndMst.getColumn(0, "clrId");
        				console.log("sClrId = " + sClrId);
        				if(this.gfnIsNull(sClrId)){ // 접수자ID가 없을때 담당자접수 에서 넘어온 자료
        					Array.from(this.btnDiv.form.components).forEach(oComp => {
        						if(oComp.id == "CTL10994"){
        							oComp.visible = false;

        						}else if(oComp.id == "CTL11002"){
        							oComp.visible = true;
        							console.log("CTL11002");

        						}
        					});

        				}else{
        					Array.from(this.btnDiv.form.components).forEach(oComp => {
        						if(oComp.id == "CTL10994"){
        							oComp.visible = true;
        							console.log("CTL10994");

        						}else if(oComp.id == "CTL11002"){
        							oComp.visible = false;

        						}
        					});
        				}
        			}

        			break;

        		case "saveEvntFcltUseRcptDmndStrg" : // 임시저장, 신청

        			alert("저장 처리가 정상적으로 완료되었습니다");
        			this.reload();

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

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function (paramDmndNo)
        {
        	this.fnSearch(paramDmndNo);
        };

        /*=================================================================================*
         * @name : fnSearch
         * @description : 조회
         *=================================================================================*/
        this.fnSearch = function(paramDmndNo)
        {
        	if(this.dsSearch.getRowCount() > 0){
        		this.dsSearch.clearData();

        	}

        	this.dsSearch.addRow();
        	this.dsSearch.setColumn(0, "aplyNo", paramDmndNo);//lifComDao.selectFcltyInstMstr 때문에
        	this.dsSearch.setColumn(0, "dmndNo", paramDmndNo);
        	//TODO GDS에서 사업자등록번호를 받아야 함
        	//this.dsSearch.setColumn(0, "brno", "1098133068");
        	this.dsSearch.setColumn(0, "brno", "2152213166");

        	var strSvcId    = "selectEvntFcltUseRcptDmndInq";
        	var strSvcUrl   = "evntFcltUseRcptDmnd/selectEvntFcltUseRcptDmndInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsEvntFcltDmndMst=dsEvntFcltDmndMst dsCnvyMttr=dsCnvyMttr dsAtfl=dsAtfl dsMst=dsMst";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /*=============================================================================*
         * @name : cfnSave
         * @description : 저장
         *=============================================================================*/
        this.cfnSave = function ()
        {
        	this.fn_Save(this.vStrSvcId, this.vStrSvcUrl);
        };

        this.fn_Save = function(vStrSvcId, vStrSvcUrl)
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
        			          + " dsMst=dsMst:U"                                     // Master DS
         			          + " dsEvntFcltDmndMst=dsEvntFcltDmndMst:U"     		 // 행사용시설사용접수요청 마스터 DS
        			          + " dsCnvyMttr=dsCnvyMttr"                           // 전달사항 DS
        			          + " dsAtfl=dsAtfl:U";                                   // 첨부파일 DS

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        /**************************************************************************
         * @name : rdoSrvcDmndCnYn_onitemchanged
         * @description : 서비스요청내용 수정 완료 시
         ***************************************************************************/
        this.rdoSrvcDmndCnYn_onitemchanged = function(obj,e)
        {
        	var objVal = obj.value;

        	if(this.jobCd == "TAS10434"){ // 담당자접수
        	//alert("objVal11==>" + objVal);
        		if(objVal == "1"){ // 1 : 확인
        			/*
        			CTL10996	접수
        			CTL11203	보완요청
        			CTL11020	미처리종료
        			*/
        			Array.from(this.btnDiv.form.components).forEach(oComp => {
        				if(oComp.id == "CTL10996"){
        					oComp.visible = true;

        				}else{
        					oComp.visible = false;

        				}
        			});

        		}else if(objVal == "2"){ // 2 : 미처리종료
        			/*
        			CTL10996	접수
        			CTL11203	보완요청
        			CTL11020	미처리종료
        			*/
        			Array.from(this.btnDiv.form.components).forEach(oComp => {
        			//trace("oComp.id_1111==>" + oComp.id);
        				if(oComp.id == "CTL11020"){
        					oComp.visible = true;

        				}else{
        					oComp.visible = false;

        				}
        			});

        		}else{
        			Array.from(this.btnDiv.form.components).forEach(oComp => {
        				if(oComp.id == "CTL11203"){
        					oComp.visible = true;

        				}else{
        					oComp.visible = false;

        				}
        			});
        		}

        	}else if(this.jobCd == "TAS10435"){ // 담당자검토및승인
        	//alert("objVal==>" + objVal);
        		if(objVal == "1"){ // 1 : 확인
        			/*
        			CTL10997	보완요청
        			CTL10998	승인
        			*/
        			Array.from(this.btnDiv.form.components).forEach(oComp => {
        				if(oComp.id == "CTL10998"){
        					oComp.visible = true;

        				}else if(oComp.id == "CTL10997"){
        					oComp.visible = false;

        				}
        			});

        		}else if(objVal == "2"){ // 2 : 미처리종료
        			/*
        			CTL10997	보완요청
        			CTL10998	승인
        			*/
        			Array.from(this.btnDiv.form.components).forEach(oComp => {
        			//trace("oComp.id_1111==>" + oComp.id);
        				if(oComp.id == "CTL11020"){
        					oComp.visible = true;

        				}else{
        					oComp.visible = false;

        				}
        			});

        		}else{
        			Array.from(this.btnDiv.form.components).forEach(oComp => {
        				if(oComp.id == "CTL11203"){
        					oComp.visible = true;

        				}else{
        					oComp.visible = false;

        				}
        			});
        		}
        	}

        	// 1 : 확인 일때 보완요청사유를 지워준다.
        	if(objVal == "1"){
        		// this.dsList.setColumn(0, "splmntDmndRsnCn", "");

        	}
        };

        /*=============================================================================*
         * @name : divForm_Div02_radEvntFcltSeCd_onitemchanged
         * @description : 행사용시설구분코드 변경 시
         *=============================================================================*/
        this.divForm_Div02_radEvntFcltSeCd_onitemchanged = function(obj,e)
        {
        	//alert("eee==>" + this.divForm.form.Div02.form.radEvntFcltSeCd.value);

        	if(this.divForm.form.Div02.form.radEvntFcltSeCd.value == "02"){//02:가로등배너
        		this.divForm.form.Div02.form.cboCtrNo.visible = false;//영접카운터번호
        		this.divForm.form.Div02.form.pan02_01_00_00_00.visible = true;//구간번호
        	}else{
        		this.divForm.form.Div02.form.cboCtrNo.visible = true;//영접카운터번호
        		this.divForm.form.Div02.form.pan02_01_00_00_00.visible = false;//구간번호
        	}
        };

        this.divForm_Div02_divCal_btnEvntSchdl_onclick = function(obj,e)
        {
        	var sTitle = "영접카운터사용일정현황 팝업";

        	var objArg   = {
        		  paramInstNm : this.gvCoNm
        		, paramNm : this.gvUserNm
        	};

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
        		, width: 1750
        		, height: 850		//width,height 지정하지 않음 popup form size적용
        		, autosize: false
        		, title: sTitle
        		, resize: true
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("aplyHstryPop", "work::LIF/EVN/LIF081M01.xfdl", objArg, sPopupCallBack, objOption);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onvscroll",this.form_onvscroll,this);
            this.divForm.form.divInfoGuide.form.btnSchClose.addEventHandler("onclick",this.divInfoGuide_btnSchClose_onclick,this);
            this.divForm.form.Div01.form.sta00_00.addEventHandler("onclick",this.divForm_Div01_sta00_00_onclick,this);
            this.divForm.form.Div02.form.radEvntFcltSeCd.addEventHandler("onitemchanged",this.divForm_Div02_radEvntFcltSeCd_onitemchanged,this);
            this.divForm.form.Div02.form.divCal.form.btnEvntSchdl.addEventHandler("onclick",this.divForm_Div02_divCal_btnEvntSchdl_onclick,this);
            this.divForm.form.Div03.form.rdoSrvcDmndCnYn.addEventHandler("onitemchanged",this.rdoSrvcDmndCnYn_onitemchanged,this);
            this.divForm.form.Div03.form.txtSplmntDmndRsn.addEventHandler("onchanged",this.divForm_Div03_TextArea00_onchanged,this);
            this.divForm.form.Div03.form.txtCnvyMttr.addEventHandler("onchanged",this.divForm_Div03_TextArea00_onchanged,this);
            this.divForm.form.Div03.form.btn_file_1.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.Div03.form.btn_del_file_1.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div03.form.Grid00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div03.form.Grid00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div03.form.btn_file_1_00.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.Div03.form.btn_del_file_1_00.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div03.form.Grid00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div03.form.Grid00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div03.form.btn_file_1_01.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.Div03.form.btn_del_file_1_01.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div03.form.Grid00_01.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div03.form.Grid00_01.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div03.form.btn_file_1_02.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.Div03.form.btn_del_file_1_02.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div03.form.Grid00_02.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div03.form.Grid00_02.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div03.form.btn_file_1_03.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.Div03.form.btn_del_file_1_03.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div03.form.Grid00_03.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div03.form.Grid00_03.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div03.form.btn_file_1_04.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.Div03.form.btn_del_file_1_04.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div03.form.Grid00_04.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div03.form.Grid00_04.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divQuick.form.btn01.addEventHandler("onclick",this.btnQuick_onclick,this);
            this.divQuick.form.btn02.addEventHandler("onclick",this.btnQuick_onclick,this);
            this.divQuick.form.btn03.addEventHandler("onclick",this.btnQuick_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsMain_onvaluechanged,this);
            this.dsMst.addEventHandler("onvaluechanged",this.dsMst_onvaluechanged,this);
            this.dsMst.addEventHandler("onload",this.dsMst_onload,this);
            this.dsAtfl.addEventHandler("onload",this.dsAtfl_onload,this);
        };
        this.loadIncludeScript("LIF081M06.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
