(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NFM_001M1");
            this.set_titletext("경영계획부 - 이력 - 상세");
            if (Form == this.constructor)
            {
                this._setFormPosition(1240,5606);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"wplbkNo\" type=\"STRING\" size=\"256\"/><Column id=\"bizDataTypeTpcd\" type=\"STRING\" size=\"256\"/><Column id=\"rqdocNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWplbkVO", this);
            obj._setContents("<ColumnInfo><Column id=\"wplbkNo\" type=\"STRING\" size=\"256\"/><Column id=\"wplarId\" type=\"STRING\" size=\"256\"/><Column id=\"nxtrmNo\" type=\"STRING\" size=\"256\"/><Column id=\"cmblcId\" type=\"STRING\" size=\"256\"/><Column id=\"sbltId\" type=\"STRING\" size=\"256\"/><Column id=\"spwodKindCd\" type=\"STRING\" size=\"256\"/><Column id=\"spwodDetlKindCd\" type=\"STRING\" size=\"256\"/><Column id=\"stlndArea\" type=\"STRING\" size=\"256\"/><Column id=\"blankArea\" type=\"STRING\" size=\"256\"/><Column id=\"nfrtldArea\" type=\"STRING\" size=\"256\"/><Column id=\"lfenvFrsrsrSkillTpcd\" type=\"STRING\" size=\"256\"/><Column id=\"ntrEnvrnFrsrsrSkillTpcd\" type=\"STRING\" size=\"256\"/><Column id=\"crparSkillTpcd\" type=\"STRING\" size=\"256\"/><Column id=\"dprrsSkillTpcd\" type=\"STRING\" size=\"256\"/><Column id=\"mnfrsRcrfrSkillTpcd\" type=\"STRING\" size=\"256\"/><Column id=\"tmbrPdfrtSkillTpcd\" type=\"STRING\" size=\"256\"/><Column id=\"goalFrtpCn\" type=\"STRING\" size=\"256\"/><Column id=\"addtnMttr\" type=\"STRING\" size=\"256\"/><Column id=\"bizBckgrCn\" type=\"STRING\" size=\"256\"/><Column id=\"jobDirctCn\" type=\"STRING\" size=\"256\"/><Column id=\"sbltHstry\" type=\"STRING\" size=\"256\"/><Column id=\"mngMttr\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileId\" type=\"STRING\" size=\"256\"/><Column id=\"mnfrsMcbtpYn\" type=\"STRING\" size=\"256\"/><Column id=\"bizDataTypeTpcd\" type=\"STRING\" size=\"256\"/><Column id=\"mthrSbltHstry1\" type=\"STRING\" size=\"256\"/><Column id=\"mthrSbltHstry2\" type=\"STRING\" size=\"256\"/><Column id=\"mthrSbltHstry3\" type=\"STRING\" size=\"256\"/><Column id=\"attchFiles\" type=\"STRING\" size=\"256\"/><Column id=\"wpalrNm\" type=\"STRING\" size=\"256\"/><Column id=\"instNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("codeSetArgs", this);
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\" prop=\"\"/><Column id=\"defaultData\" type=\"STRING\" size=\"256\"/><Column id=\"rds\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSpwodKindCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSpwodDetlKindCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("tempSpwodDetailKindCd1", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("tempSpwodDetailKindCd2", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBfrNxtrmWplbkNo", this);
            obj._setContents("<ColumnInfo><Column id=\"wplbkNo\" type=\"STRING\" size=\"256\"/><Column id=\"wplbkNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSbltLctn", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"lctnDaddr\" type=\"STRING\" size=\"256\"/><Column id=\"pnuCd\" type=\"STRING\" size=\"256\"/><Column id=\"wplbkNo\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"lctnNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSttyApwod", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"wplbkNo\" type=\"STRING\" size=\"256\"/><Column id=\"sttyApwodCd\" type=\"STRING\" size=\"256\"/><Column id=\"sttyApwodArea\" type=\"STRING\" size=\"256\"/><Column id=\"sortOrd\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSttyApwodCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGoalFrtp", this);
            obj._setContents("<ColumnInfo><Column id=\"koftrCd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsKoftrCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMnfrsExmn", this);
            obj._setContents("<ColumnInfo><Column id=\"wplbkNo\" type=\"STRING\" size=\"256\"/><Column id=\"orbrnCd\" type=\"STRING\" size=\"256\"/><Column id=\"grdntCd\" type=\"STRING\" size=\"256\"/><Column id=\"alttdMnmmVl\" type=\"STRING\" size=\"256\"/><Column id=\"alttdMxmmVl\" type=\"STRING\" size=\"256\"/><Column id=\"mnfrsExmnScstxCd\" type=\"STRING\" size=\"256\"/><Column id=\"vldSldptTpcd\" type=\"STRING\" size=\"256\"/><Column id=\"hgdgrTpcd\" type=\"STRING\" size=\"256\"/><Column id=\"pstonCd\" type=\"STRING\" size=\"256\"/><Column id=\"mnfrsExmnGgrphCd\" type=\"STRING\" size=\"256\"/><Column id=\"lwvgtCn\" type=\"STRING\" size=\"256\"/><Column id=\"frorCd\" type=\"STRING\" size=\"256\"/><Column id=\"frtpTpcd\" type=\"STRING\" size=\"256\"/><Column id=\"crdnsCd\" type=\"STRING\" size=\"256\"/><Column id=\"haPartyRealtAccmnArea\" type=\"STRING\" size=\"256\"/><Column id=\"realtAccmnTotlSum\" type=\"STRING\" size=\"256\"/><Column id=\"haPartySttyAccmnArea\" type=\"STRING\" size=\"256\"/><Column id=\"sttyAccmnTotlSum\" type=\"STRING\" size=\"256\"/><Column id=\"haPartyCanin\" type=\"STRING\" size=\"256\"/><Column id=\"caninTotlSum\" type=\"STRING\" size=\"256\"/><Column id=\"cairt\" type=\"STRING\" size=\"256\"/><Column id=\"spcfcFoprdNm\" type=\"STRING\" size=\"256\"/><Column id=\"dmtreTrhgh\" type=\"STRING\" size=\"256\"/><Column id=\"mnfrsExmnFomTpcd\" type=\"STRING\" size=\"256\"/><Column id=\"mfrbsNo\" type=\"STRING\" size=\"256\"/><Column id=\"sdgthTpcd\" type=\"STRING\" size=\"256\"/><Column id=\"sdgthPsbltyQntt\" type=\"STRING\" size=\"256\"/><Column id=\"sdgthKoftrCd\" type=\"STRING\" size=\"256\"/><Column id=\"dmtreFrag\" type=\"STRING\" size=\"256\"/><Column id=\"seedPckngPsbltyYn\" type=\"STRING\" size=\"256\"/><Column id=\"mnfrsExmnStind\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOrbrnCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrdntCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsScstxCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSldptTpcd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHgdgrTpcd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMnfrsExmnGgrphCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFrorCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFrtpTpcd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCrdnsCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsKoftrExmn", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"koftrCd\" type=\"STRING\" size=\"256\"/><Column id=\"mixtrRt\" type=\"STRING\" size=\"256\"/><Column id=\"avrgFrag\" type=\"STRING\" size=\"256\"/><Column id=\"mnmmFrag\" type=\"STRING\" size=\"256\"/><Column id=\"mxmmFrag\" type=\"STRING\" size=\"256\"/><Column id=\"avrgTrhgh\" type=\"STRING\" size=\"256\"/><Column id=\"lowstTrhgh\" type=\"STRING\" size=\"256\"/><Column id=\"topTrhgh\" type=\"STRING\" size=\"256\"/><Column id=\"avrgDmtr\" type=\"STRING\" size=\"256\"/><Column id=\"mainKoftrMnmmDmtr\" type=\"STRING\" size=\"256\"/><Column id=\"mainKoftrMxmmDmtr\" type=\"STRING\" size=\"256\"/><Column id=\"wplbkNo\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLwvgt", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"lwvgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"lwvgtCvdgr\" type=\"STRING\" size=\"256\"/><Column id=\"wplbkNo\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"lwvgtNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSdgthTpcd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSdgthKoftrCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAffrsWPLs", this);
            obj._setContents("<ColumnInfo><Column id=\"wplbkNo\" type=\"STRING\" size=\"256\"/><Column id=\"wplbkBizTpcd\" type=\"STRING\" size=\"256\"/><Column id=\"bizDataTypeTpcd\" type=\"STRING\" size=\"256\"/><Column id=\"wplbkBizSeq\" type=\"STRING\" size=\"256\"/><Column id=\"urgntCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizYr\" type=\"STRING\" size=\"256\"/><Column id=\"bizKindCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizArea\" type=\"STRING\" size=\"256\"/><Column id=\"bizQntt\" type=\"STRING\" size=\"256\"/><Column id=\"bizRsnCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizLbper\" type=\"STRING\" size=\"256\"/><Column id=\"bizAmt\" type=\"STRING\" size=\"256\"/><Column id=\"expndDay\" type=\"STRING\" size=\"256\"/><Column id=\"incmAmt\" type=\"STRING\" size=\"256\"/><Column id=\"incmDay\" type=\"STRING\" size=\"256\"/><Column id=\"mfrbsNo\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"koftrCd\" type=\"STRING\" size=\"256\"/><Column id=\"koftrNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFrestGrdnnWPLs", this);
            obj._setContents("<ColumnInfo><Column id=\"wplbkNo\" type=\"STRING\" size=\"256\"/><Column id=\"wplbkBizTpcd\" type=\"STRING\" size=\"256\"/><Column id=\"bizDataTypeTpcd\" type=\"STRING\" size=\"256\"/><Column id=\"wplbkBizSeq\" type=\"STRING\" size=\"256\"/><Column id=\"urgntCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizYr\" type=\"STRING\" size=\"256\"/><Column id=\"bizKindCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizArea\" type=\"STRING\" size=\"256\"/><Column id=\"bizQntt\" type=\"STRING\" size=\"256\"/><Column id=\"bizRsnCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizLbper\" type=\"STRING\" size=\"256\"/><Column id=\"bizAmt\" type=\"STRING\" size=\"256\"/><Column id=\"expndDay\" type=\"STRING\" size=\"256\"/><Column id=\"incmAmt\" type=\"STRING\" size=\"256\"/><Column id=\"incmDay\" type=\"STRING\" size=\"256\"/><Column id=\"mfrbsNo\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"koftrCd\" type=\"STRING\" size=\"256\"/><Column id=\"koftrNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizAccmlArea\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFrtrePrdctWPLs", this);
            obj._setContents("<ColumnInfo><Column id=\"wplbkNo\" type=\"STRING\" size=\"256\"/><Column id=\"wplbkBizTpcd\" type=\"STRING\" size=\"256\"/><Column id=\"bizDataTypeTpcd\" type=\"STRING\" size=\"256\"/><Column id=\"wplbkBizSeq\" type=\"STRING\" size=\"256\"/><Column id=\"urgntCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizYr\" type=\"STRING\" size=\"256\"/><Column id=\"bizKindCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizArea\" type=\"STRING\" size=\"256\"/><Column id=\"bizQntt\" type=\"STRING\" size=\"256\"/><Column id=\"bizRsnCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizLbper\" type=\"STRING\" size=\"256\"/><Column id=\"bizAmt\" type=\"STRING\" size=\"256\"/><Column id=\"expndDay\" type=\"STRING\" size=\"256\"/><Column id=\"incmAmt\" type=\"STRING\" size=\"256\"/><Column id=\"incmDay\" type=\"STRING\" size=\"256\"/><Column id=\"mfrbsNo\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"bizPrdctnWdvlm\" type=\"STRING\" size=\"256\"/><Column id=\"koftrNm\" type=\"STRING\" size=\"256\"/><Column id=\"totBizPrdctnWdvlm\" type=\"STRING\" size=\"256\"/><Column id=\"koftrCd\" type=\"STRING\" size=\"256\"/><Column id=\"frtrePrdctnFellyRt\" type=\"STRING\" size=\"256\"/><Column id=\"frtrePrdctnAssrtTpcd\" type=\"STRING\" size=\"0\"/><Column id=\"prdctnMthdCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFcltWPLs", this);
            obj._setContents("<ColumnInfo><Column id=\"wplbkNo\" type=\"STRING\" size=\"256\"/><Column id=\"wplbkBizTpcd\" type=\"STRING\" size=\"256\"/><Column id=\"bizDataTypeTpcd\" type=\"STRING\" size=\"256\"/><Column id=\"wplbkBizSeq\" type=\"STRING\" size=\"256\"/><Column id=\"urgntCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizYr\" type=\"STRING\" size=\"256\"/><Column id=\"bizKindCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizArea\" type=\"STRING\" size=\"256\"/><Column id=\"bizQntt\" type=\"STRING\" size=\"256\"/><Column id=\"bizRsnCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizLbper\" type=\"STRING\" size=\"256\"/><Column id=\"bizAmt\" type=\"STRING\" size=\"256\"/><Column id=\"expndDay\" type=\"STRING\" size=\"256\"/><Column id=\"incmAmt\" type=\"STRING\" size=\"256\"/><Column id=\"incmDay\" type=\"STRING\" size=\"256\"/><Column id=\"mfrbsNo\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"koftrCd\" type=\"STRING\" size=\"256\"/><Column id=\"koftrNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEarnWPLs", this);
            obj._setContents("<ColumnInfo><Column id=\"wplbkNo\" type=\"STRING\" size=\"256\"/><Column id=\"wplbkBizTpcd\" type=\"STRING\" size=\"256\"/><Column id=\"bizDataTypeTpcd\" type=\"STRING\" size=\"256\"/><Column id=\"wplbkBizSeq\" type=\"STRING\" size=\"256\"/><Column id=\"urgntCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizYr\" type=\"STRING\" size=\"256\"/><Column id=\"bizKindCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizArea\" type=\"STRING\" size=\"256\"/><Column id=\"bizQntt\" type=\"STRING\" size=\"256\"/><Column id=\"bizRsnCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizLbper\" type=\"STRING\" size=\"256\"/><Column id=\"bizAmt\" type=\"STRING\" size=\"256\"/><Column id=\"expndDay\" type=\"STRING\" size=\"256\"/><Column id=\"incmAmt\" type=\"STRING\" size=\"256\"/><Column id=\"incmDay\" type=\"STRING\" size=\"256\"/><Column id=\"mfrbsNo\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"koftrCd\" type=\"STRING\" size=\"256\"/><Column id=\"koftrNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizEtcKindNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFrtreWdvlms", this);
            obj._setContents("<ColumnInfo><Column id=\"koftrCd\" type=\"STRING\" size=\"256\"/><Column id=\"frtrePrdctWdvlm\" type=\"STRING\" size=\"256\"/><Column id=\"frtrePrdno\" type=\"STRING\" size=\"256\"/><Column id=\"koftrNm\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAffrsSpecsTpcd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUrgntCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAffrsRsnCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFrestGrdnnSpecsTpcd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSctslTpcd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFellyMthdCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPrdctnMthdCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFcltKindCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/><Column id=\"dtlCdExpln\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEarnSpecsClsfCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/><Column id=\"dtlCdExpln\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSdgthKoftrCd_S", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSdgthKoftrCd_P", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGoalFrtps", this);
            obj._setContents("<ColumnInfo><Column id=\"koftrCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBsnssUnprcList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBsnssUnprcVO", this);
            obj._setContents("<ColumnInfo><Column id=\"unprcAmt\" type=\"STRING\" size=\"256\"/><Column id=\"unprcBsnssTpcd\" type=\"STRING\" size=\"256\"/><Column id=\"unprcSlsysTpcd\" type=\"STRING\" size=\"256\"/><Column id=\"unprcUnitLbper\" type=\"STRING\" size=\"256\"/><Column id=\"unprcUnitNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMthrSbltHstry", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("<ColumnInfo><Column id=\"result\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle00","0","0","123","32",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("일반조사");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("divWplbk","0","staTitle00:36",null,"82","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("divWplbk");
            obj.set_cssclass("div_DA");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","0","11.05%","37",null,null,null,null,null,null,this.divWplbk.form);
            obj.set_taborder("0");
            obj.set_text("관리소");
            obj.set_cssclass("sta_DA_label_L");
            this.divWplbk.addChild(obj.name, obj);

            obj = new Static("sta01","0","sta00:0","11.05%","37",null,null,null,null,null,null,this.divWplbk.form);
            obj.set_taborder("7");
            obj.set_text("임반");
            obj.set_cssclass("sta_DA_label_L");
            this.divWplbk.addChild(obj.name, obj);

            obj = new Static("sta00_00","30%","0","11.05%","37",null,null,null,null,null,null,this.divWplbk.form);
            obj.set_taborder("2");
            obj.set_text("경영계획구");
            obj.set_cssclass("sta_DA_label_C");
            this.divWplbk.addChild(obj.name, obj);

            obj = new Static("instNm","sta00:10","4",null,"28","sta00_00:10",null,null,null,null,null,this.divWplbk.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_textAlign("left");
            this.divWplbk.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","60%","0","11.05%","37",null,null,null,null,null,null,this.divWplbk.form);
            obj.set_taborder("4");
            obj.set_text("전차기소반");
            obj.set_cssclass("sta_DA_label_C");
            this.divWplbk.addChild(obj.name, obj);

            obj = new Static("sta02","30%","sta00_00:0","11.05%","37",null,null,null,null,null,null,this.divWplbk.form);
            obj.set_taborder("9");
            obj.set_text("소반");
            obj.set_cssclass("sta_DA_label_C");
            this.divWplbk.addChild(obj.name, obj);

            obj = new Static("sta03","60%","sta00_00_00:0","11.05%","37",null,null,null,null,null,null,this.divWplbk.form);
            obj.set_taborder("11");
            obj.set_text("특수림 구분");
            obj.set_cssclass("sta_DA_label_C");
            this.divWplbk.addChild(obj.name, obj);

            obj = new Combo("cmbSpwodKindCd","sta03:10","40","14.52%","28",null,null,null,null,null,null,this.divWplbk.form);
            obj.set_taborder("12");
            obj.set_innerdataset("dsSpwodKindCd");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_visible("true");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            this.divWplbk.addChild(obj.name, obj);

            obj = new MaskEdit("edtSbltId","sta02:10","40",null,"28","sta03:10",null,null,null,null,null,this.divWplbk.form);
            obj.set_taborder("10");
            obj.set_maskchar("_");
            obj.set_format("###-###");
            obj.set_trimtype("none");
            obj.set_displaynulltext("___-___");
            obj.set_type("string");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            this.divWplbk.addChild(obj.name, obj);

            obj = new Combo("cmbSpwodDetlKindCd","cmbSpwodKindCd:6","40","11.29%","28",null,null,null,null,null,null,this.divWplbk.form);
            obj.set_taborder("13");
            obj.set_visible("true");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            obj.set_text("");
            this.divWplbk.addChild(obj.name, obj);

            obj = new Static("wplarNm","sta00_00:10","4",null,"28","sta00_00_00:10",null,null,null,null,null,this.divWplbk.form);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_textAlign("left");
            this.divWplbk.addChild(obj.name, obj);

            obj = new Combo("cmbMthrSbltHstry","sta00_00_00:10","4","200","28",null,null,null,null,null,null,this.divWplbk.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsMthrSbltHstry");
            obj.set_visible("true");
            obj.set_displaynulltext("선택");
            obj.set_codecolumn("value");
            obj.set_datacolumn("value");
            this.divWplbk.addChild(obj.name, obj);

            obj = new Button("btnMhrSbltHstry","cmbMthrSbltHstry:6","4","60","28",null,null,null,null,null,null,this.divWplbk.form);
            obj.set_taborder("6");
            obj.set_text("보기");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_searchTxt ");
            this.divWplbk.addChild(obj.name, obj);

            obj = new MaskEdit("edtCmblcId","sta01:10","40",null,"28","sta02:10",null,null,null,null,null,this.divWplbk.form);
            obj.set_taborder("8");
            obj.set_maskchar("_");
            obj.set_format("###-###");
            obj.set_trimtype("none");
            obj.set_displaynulltext("___-___");
            obj.set_type("string");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            this.divWplbk.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00","0","divWplbk:30","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("소재지");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSbltLctn","0","Static03_00_00_00:20",null,"142","0",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid0");
            obj.set_taborder("4");
            obj.set_autofittype("col");
            obj.set_binddataset("dsSbltLctn");
            obj.set_nodatatext("데이터가 없습니다!");
            obj.set_autoupdatetype("none");
            obj.set_scrollbartype("none auto");
            obj.set_cssclass("grd_detail");
            obj.set_enableevent("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"76\"/><Column size=\"528\"/><Column size=\"277\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"소재지\"/><Cell col=\"2\" text=\"PNU\"/></Band><Band id=\"body\"><Cell text=\"bind:lctnNo\"/><Cell col=\"1\" text=\"bind:lctnDaddr\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:pnuCd\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","0","grdSbltLctn:30","322","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("면적 및 기능");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divAreaSkill","0","Static03_00:20","710","268",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("div_DA");
            obj.set_text("divAreaSkill");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00","0","0","322","37",null,null,null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("0");
            obj.set_text("지종별 면적(ha)");
            obj.set_cssclass("sta_DA_label_L");
            obj.set_border("0px none,0px none,1px solid #e2e2e2");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new Static("staLabel01","0","37","170","74",null,null,null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("1");
            obj.set_text("합계");
            obj.set_cssclass("sta_DA_label_L");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new Static("Static10","45.21%","0","387",null,null,"8",null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_DA_row_R");
            obj.set_text("");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new Static("staLabel02","0","111","170","37",null,null,null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("4");
            obj.set_text("입목지");
            obj.set_cssclass("sta_DA_label_L");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new MaskEdit("stlndArea","staLabel02:10","115",null,"28","Static10:10.990999999999985",null,null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("5");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new Static("staLabel03","0","148","68","111",null,null,null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("6");
            obj.set_text("무립\r\n목지");
            obj.set_cssclass("sta_DA_label_L");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new Static("staLabel04","68","148","102","37",null,null,null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("7");
            obj.set_text("소계");
            obj.set_cssclass("sta_DA_label_L");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new MaskEdit("unfrtArea","staLabel04:10","152",null,"28","Static10:10.990999999999985",null,null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("8");
            obj.set_cssclass("display");
            obj.set_value("0.00");
            obj.set_readonly("true");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new Static("staLabel05","68","185","102","37",null,null,null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("9");
            obj.set_text("미립목지");
            obj.set_cssclass("sta_DA_label_L");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new MaskEdit("blankArea","staLabel05:10","190",null,"28","Static10:10.990999999999985",null,null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("10");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new Static("staLabel06","68","222","102","37",null,null,null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("11");
            obj.set_text("제지");
            obj.set_cssclass("sta_DA_label_L");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new MaskEdit("nfrtldArea","staLabel06:10","226",null,"28","Static10:10.990999999999985",null,null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("12");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new Static("staLabel07_00","45.21%","0","158","37",null,null,null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("14");
            obj.set_text("구분");
            obj.set_cssclass("sta_DA_label_R");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new Static("staLabel07_00_00","67.46%","0","118","37",null,null,null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("15");
            obj.set_text("주기능");
            obj.set_cssclass("sta_DA_label_R");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new Static("staLabel07_00_00_00","83.66%","0","116","37",null,null,null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("16");
            obj.set_text("보조기능");
            obj.set_cssclass("sta_DA_label_R");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new Static("sta00_00","49.01%","37","119","37",null,null,null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("17");
            obj.set_text("생활환경보존림");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","49.01%","74","119","37",null,null,null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("18");
            obj.set_text("자연환경보존림");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00","49.01%","110","119","37",null,null,null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("19");
            obj.set_text("수원함양림");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00","49.01%","147","119","37",null,null,null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("20");
            obj.set_text("산지재해방지림");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00_00","49.01%","183","119","37",null,null,null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("21");
            obj.set_text("산림휴양림");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00_00_00","49.01%","218","119","37",null,null,null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("23");
            obj.set_text("목재생산림");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new Radio("rdoSkill","74.37%","38","43","222",null,null,null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("22");
            obj.set_columncount("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("true");
            var divAreaSkill_form_rdoSkill_innerdataset = new nexacro.NormalDataset("divAreaSkill_form_rdoSkill_innerdataset", obj);
            divAreaSkill_form_rdoSkill_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">lfenvFrsrsrSkillTpcd</Col><Col id=\"datacolumn\"/></Row><Row><Col id=\"codecolumn\">ntrEnvrnFrsrsrSkillTpcd</Col><Col id=\"datacolumn\"/></Row><Row><Col id=\"codecolumn\">crparSkillTpcd</Col><Col id=\"datacolumn\"/></Row><Row><Col id=\"codecolumn\">dprrsSkillTpcd</Col><Col id=\"datacolumn\"/></Row><Row><Col id=\"datacolumn\"/><Col id=\"codecolumn\">mnfrsRcrfrSkillTpcd</Col></Row><Row><Col id=\"datacolumn\"/><Col id=\"codecolumn\">tmbrPdfrtSkillTpcd</Col></Row></Rows>");
            obj.set_innerdataset(divAreaSkill_form_rdoSkill_innerdataset);
            obj.set_text("");
            obj.set_value("");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new CheckBox("checkBox0","90.85%","41","21","28",null,null,null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("24");
            obj.set_visible("true");
            obj.set_readonly("true");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new CheckBox("checkBox1","90.85%","78","21","28",null,null,null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("25");
            obj.set_readonly("true");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new CheckBox("checkBox2","90.85%","117","21","28",null,null,null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("26");
            obj.set_readonly("true");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new CheckBox("checkBox3","90.85%","153","21","28",null,null,null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("27");
            obj.set_readonly("true");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new CheckBox("checkBox4","90.85%","189","21","28",null,null,null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("28");
            obj.set_readonly("true");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new CheckBox("checkBox5","90.85%","227","21","28",null,null,null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("29");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new Static("Static10_00","staLabel01:-1","37","151",null,null,"156",null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("sta_DA_row_R");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new MaskEdit("areaTotal","staLabel01:10","57",null,"28","Static10:10.990999999999985",null,null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("3");
            obj.set_cssclass("display");
            obj.set_value("0.00");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","730","grdSbltLctn:30","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("법정지정림");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSttyApwod","divAreaSkill:30","Static03_00_00:20",null,"260","0",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid0");
            obj.set_taborder("8");
            obj.set_autofittype("col");
            obj.set_binddataset("dsSttyApwod");
            obj.set_cssclass("grd_detail");
            obj.set_autoenter("select");
            obj.set_fillareatype("none");
            obj.set_border("1px solid #52aaa4,0px none,1px solid #e2e2e2");
            obj.set_readonly("true");
            obj.set_nodatatext("데이터가 없습니다!");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"249\"/><Column size=\"132\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell text=\"법정지정림\"/><Cell col=\"1\" text=\"면적\"/></Band><Band id=\"body\"><Cell displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsSttyApwodCd\" combocodecol=\"code\" combodatacol=\"data\" tooltiptype=\"hover\" text=\"bind:sttyApwodCd\" controlautosizingtype=\"both\" cssclass=\"display\" border=\"1px solid #e2e2e2\"/><Cell col=\"1\" text=\"expr:nexacro.round(sttyApwodArea,2)+&apos;ha&apos;\" displaytype=\"normal\" edittype=\"none\" border=\"1px solid #e2e2e2,0px none,1px solid #e2e2e2,1px solid #e2e2e2\" cssclass=\"display\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","divAreaSkill:30","123","32",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("목표임상");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("divGoalFrtp","0","staTitle01:20",null,"149","0",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("divGoalFrtp");
            obj.set_cssclass("div_DA");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_01","0","37",null,"111","0",null,null,null,null,null,this.divGoalFrtp.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_rowAll");
            this.divGoalFrtp.addChild(obj.name, obj);

            obj = new Static("staLabel00","0","0","315","37",null,null,null,null,null,null,this.divGoalFrtp.form);
            obj.set_taborder("0");
            obj.set_text("수종");
            obj.set_cssclass("sta_DA_label_L");
            this.divGoalFrtp.addChild(obj.name, obj);

            obj = new MultiCombo("mcbKoftr","staLabel00:10","4",null,"28","10",null,null,null,null,null,this.divGoalFrtp.form);
            obj.set_initvalueid("iv_MultiCombo0");
            obj.set_taborder("1");
            obj.set_displayrowcount("15");
            obj.set_datacolumn("data");
            obj.set_innerdataset("dsKoftrCd");
            obj.set_displaynulltext("선택");
            obj.set_textseparator(",");
            obj.set_readonly("true");
            obj.set_acceptvaluetype("allowinvalid");
            obj.set_codecolumn("code");
            obj.set_edittype("text");
            obj.set_cssclass("display");
            obj.set_text("");
            obj.set_index("-1");
            this.divGoalFrtp.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","0","37","315","111",null,null,null,null,null,null,this.divGoalFrtp.form);
            obj.set_taborder("3");
            obj.set_text("특이사항");
            obj.set_cssclass("sta_DA_label_L");
            this.divGoalFrtp.addChild(obj.name, obj);

            obj = new TextArea("goalFrtpCont","staLabel00_00:10","41",null,"102","10",null,null,null,null,null,this.divGoalFrtp.form);
            obj.set_taborder("4");
            obj.set_wordWrap("char");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            this.divGoalFrtp.addChild(obj.name, obj);

            obj = new Static("staTitle02","0","divGoalFrtp:30","123","32",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("산림조사");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_01","0","staTitle02:20","322","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("지세");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdShp","0","Static03_00_01:20","500","76",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid0");
            obj.set_taborder("13");
            obj.set_cssclass("grd_detail");
            obj.set_binddataset("dsMnfrsExmn");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_scrollbartype("none none");
            obj.set_selecttype("cell");
            obj.set_readonly("true");
            obj.set_nodatatext("데이터가 없습니다!");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"108\"/><Column size=\"220\"/><Column size=\"200\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell text=\"방위\"/><Cell col=\"1\" text=\"경사도\"/><Cell col=\"2\" text=\"표고(m)\"/></Band><Band id=\"body\"><Cell displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsOrbrnCd\" combocodecol=\"code\" combodatacol=\"data\" text=\"bind:orbrnCd\" cssclass=\"display\"/><Cell col=\"1\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsGrdntCd\" combocodecol=\"code\" combodatacol=\"data\" text=\"bind:grdntCd\" cssclass=\"display\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" border=\"1px solid #e2e2e2,0px none,1px solid #e2e2e2,1px solid #e2e2e2\" text=\"expr:alttdMnmmVl+&apos; ~ &apos;+alttdMxmmVl \"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_01_00","Static03_00_01:193","staTitle02:20","322","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("토양");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSoil","grdShp:30","Static03_00_01_00:20",null,"76","0",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid0");
            obj.set_taborder("15");
            obj.set_cssclass("grd_detail");
            obj.set_binddataset("dsMnfrsExmn");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_scrollbartype("none none");
            obj.set_selecttype("cell");
            obj.set_readonly("true");
            obj.set_nodatatext("데이터가 없습니다!");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"180\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell text=\"토성\"/><Cell col=\"1\" text=\"유효토심\"/><Cell col=\"2\" text=\"건습도\"/><Cell col=\"3\" text=\"지리\" cssclass=\"cell_end\"/></Band><Band id=\"body\"><Cell displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsScstxCd\" combocodecol=\"code\" combodatacol=\"data\" text=\"bind:mnfrsExmnScstxCd\" cssclass=\"display\"/><Cell col=\"1\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsSldptTpcd\" combocodecol=\"code\" combodatacol=\"data\" text=\"bind:vldSldptTpcd\" cssclass=\"display\"/><Cell col=\"2\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsHgdgrTpcd\" combocodecol=\"code\" combodatacol=\"data\" text=\"bind:hgdgrTpcd\" cssclass=\"display\"/><Cell col=\"3\" displaytype=\"combotext\" edittype=\"none\" cssclass=\"display\" combodataset=\"dsMnfrsExmnGgrphCd\" combocodecol=\"code\" combodatacol=\"data\" text=\"bind:mnfrsExmnGgrphCd\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdKoftrExmn","0","1231",null,"282","0",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid0");
            obj.set_taborder("17");
            obj.set_cssclass("grd_detail");
            obj.set_binddataset("dsKoftrExmn");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_scrollbartype("auto auto");
            obj.set_border("1px solid #52aaa4,0px none,1px solid #e2e2e2");
            obj.set_readonly("true");
            obj.set_nodatatext("데이터가 없습니다!");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"30\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"30\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"30\"/><Column size=\"80\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"수종\"/><Cell col=\"2\" text=\"혼효율(%)\"/><Cell col=\"3\" colspan=\"3\" text=\"임령(평균,최소~최대)\"/><Cell col=\"6\" text=\"영급\"/><Cell col=\"7\" colspan=\"3\" text=\"수고(평균,최소~최대)\"/><Cell col=\"10\" colspan=\"3\" text=\"경급(평균,최소~최대)\"/></Band><Band id=\"body\"><Cell expr=\"currow + 1\"/><Cell col=\"1\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsKoftrCd\" combocodecol=\"code\" combodatacol=\"data\" combodisplayrowcount=\"15\" text=\"bind:koftrCd\" cssclass=\"display\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"mask\" text=\"bind:mixtrRt\" maskeditformat=\"##0.#\"/><Cell col=\"3\" colspan=\"3\" displaytype=\"normal\" edittype=\"mask\" border=\"1px solid #e2e2e2\" text=\"expr:avrgFrag+&apos;, &apos;+mnmmFrag+&apos; ~ &apos;+mxmmFrag\"/><Cell col=\"6\" displaytype=\"normal\" cssclass=\"point\" text=\"bind:ageClass\" maskedittype=\"string\"/><Cell col=\"7\" colspan=\"3\" displaytype=\"normal\" edittype=\"mask\" border=\"1px solid #e2e2e2\" text=\"expr:avrgTrhgh+&apos;, &apos;+lowstTrhgh+&apos; ~ &apos;+topTrhgh\" maskeditformat=\"##0.#\"/><Cell col=\"10\" colspan=\"3\" displaytype=\"normal\" edittype=\"mask\" border=\"1px solid #e2e2e2\" text=\"expr:avrgDmtr+&apos;, &apos;+mainKoftrMnmmDmtr+&apos; ~ &apos;+mainKoftrMxmmDmtr\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_01_01","0","grdKoftrExmn:30","68","28",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("임황");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFrstt","0","Static03_00_01_01:20",null,"76","0",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid0");
            obj.set_taborder("19");
            obj.set_cssclass("grd_detail");
            obj.set_binddataset("dsMnfrsExmn");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_scrollbartype("none none");
            obj.set_selecttype("cell");
            obj.set_readonly("true");
            obj.set_nodatatext("데이터가 없습니다!");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell text=\"지위지수\"/><Cell col=\"1\" text=\"우세목 수고(m)\"/><Cell col=\"2\" text=\"우세목 임령\"/><Cell col=\"3\" text=\"임종\"/><Cell col=\"4\" text=\"임상\"/><Cell col=\"5\" text=\"소밀도\" cssclass=\"cell_end\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" cssclass=\"point\" text=\"bind:mnfrsExmnStind\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"mask\" text=\"bind:dmtreTrhgh\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"mask\" text=\"bind:dmtreFrag\"/><Cell col=\"3\" text=\"bind:frorCd\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsFrorCd\" combocodecol=\"code\" combodatacol=\"data\" cssclass=\"display\"/><Cell col=\"4\" text=\"bind:frtpTpcd\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsFrtpTpcd\" combocodecol=\"code\" combodatacol=\"data\" cssclass=\"display\"/><Cell col=\"5\" text=\"bind:crdnsCd\" displaytype=\"combotext\" edittype=\"none\" cssclass=\"cell_end display\" combodataset=\"dsCrdnsCd\" combocodecol=\"code\" combodatacol=\"data\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_01_01_01","0","grdFrstt:30","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("임목생장");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdAtmtcCscct","0","Static03_00_01_01_01:20",null,"119","0",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid0");
            obj.set_taborder("21");
            obj.set_cssclass("grd_detail");
            obj.set_binddataset("dsMnfrsExmn");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_readonly("true");
            obj.set_nodatatext("데이터가 없습니다!");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"140\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"140\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"현실축적\"/><Cell col=\"2\" colspan=\"2\" text=\"법정축적\" textAlign=\"center\" border=\"1px solid #e2e2e2\"/><Cell col=\"4\" colspan=\"4\" border=\"1px solid #e2e2e2\" text=\"연년생장률\"/><Cell row=\"1\" text=\"ha당 축적(㎥/㏊)\"/><Cell row=\"1\" col=\"1\" text=\"총축적(㎥)\"/><Cell row=\"1\" col=\"2\" text=\"ha당 축적(㎥/㏊)\"/><Cell row=\"1\" col=\"3\" text=\"총축적(㎥)\"/><Cell row=\"1\" col=\"4\" text=\"ha당 연간생장량(㎥/㏊)\"/><Cell row=\"1\" col=\"5\" colspan=\"2\" text=\"연간생장량(㎥)\"/><Cell row=\"1\" col=\"7\" text=\"생장율(%)\" cssclass=\"cell_end\" border=\"1px solid #e2e2e2\"/></Band><Band id=\"body\"><Cell text=\"bind:haPartyRealtAccmnArea\" displaytype=\"normal\" edittype=\"mask\"/><Cell col=\"1\" text=\"bind:realtAccmnTotlSum\" displaytype=\"normal\" edittype=\"none\" cssclass=\"point\"/><Cell col=\"2\" text=\"bind:haPartySttyAccmnArea\" displaytype=\"normal\" edittype=\"none\" cssclass=\"point\"/><Cell col=\"3\" text=\"bind:sttyAccmnTotlSum\" displaytype=\"normal\" edittype=\"none\" cssclass=\"point\"/><Cell col=\"4\" text=\"bind:haPartyCanin\" displaytype=\"normal\" edittype=\"none\" cssclass=\"point\"/><Cell col=\"5\" colspan=\"2\" text=\"bind:caninTotlSum\" displaytype=\"normal\" edittype=\"none\" cssclass=\"point\"/><Cell col=\"7\" text=\"bind:cairt\" displaytype=\"normal\" edittype=\"none\" cssclass=\"cell_end,point\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divHelp","0","grdAtmtcCscct:20",null,"90","0",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("divHelp");
            obj.set_cssclass("div_help");
            obj.set_formscrollbartype("none none");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","15","7","110","28",null,null,null,null,null,null,this.divHelp.form);
            obj.set_taborder("0");
            obj.set_text("화면도움말");
            obj.set_cssclass("sta_help_greenTitle");
            this.divHelp.addChild(obj.name, obj);

            obj = new Static("Static00","40","31","755","40",null,null,null,null,null,null,this.divHelp.form);
            obj.set_taborder("1");
            obj.set_text("입목지가 없거나 주요주종의 기준목이 치수림인 경우 축적은 0으로 입력됨\r\n치수림기준 혼효율 > 평균수고 > 평균임령 > 경급 순으로 수치가 더 높은 값으로 지정 모두 동일한 경우 1번째 주요수종으로 지정됨");
            obj.set_cssclass("sta_help_guide");
            this.divHelp.addChild(obj.name, obj);

            obj = new Static("Static03_00_01_01_01_00","0","divHelp:30","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("하층식생");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdLwvgt","0","Static03_00_01_01_01_00:20",null,"149","631",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid0");
            obj.set_taborder("24");
            obj.set_autoenter("select");
            obj.set_binddataset("dsLwvgt");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_detail");
            obj.set_fillareatype("none");
            obj.set_border("1px solid #52aaa4,0px none,1px solid #e2e2e2");
            obj.set_readonly("true");
            obj.set_nodatatext("데이터가 없습니다!");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"300\"/><Column size=\"140\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell text=\"명칭\"/><Cell col=\"1\" text=\"피복율(%)\"/></Band><Band id=\"body\"><Cell text=\"bind:lwvgtNm\" edittype=\"text\" displaytype=\"normal\"/><Cell col=\"1\" text=\"bind:lwvgtCvdgr\" displaytype=\"normal\" edittype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_01_01_01_00_00","grdLwvgt:20","divHelp:30","121","28",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("특정임산물");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divSpcfcFoprd","grdLwvgt:20","Static03_00_01_01_01_00_00:20",null,"165","0",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("div_DA");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0%","0","22.59%","37",null,null,null,null,null,null,this.divSpcfcFoprd.form);
            obj.set_taborder("0");
            obj.set_text("종자채취가능 여부");
            obj.set_cssclass("sta_DA_label_C");
            this.divSpcfcFoprd.addChild(obj.name, obj);

            obj = new Static("Static10_01","330","0",null,"148","0",null,null,null,null,null,this.divSpcfcFoprd.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_DA_row_R");
            this.divSpcfcFoprd.addChild(obj.name, obj);

            obj = new Static("sta00_00","0.00%","37","22.59%","37",null,null,null,null,null,null,this.divSpcfcFoprd.form);
            obj.set_taborder("2");
            obj.set_text("종류");
            obj.set_cssclass("sta_DA_label_C");
            this.divSpcfcFoprd.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","0.00%","74","22.59%","37",null,null,null,null,null,null,this.divSpcfcFoprd.form);
            obj.set_taborder("4");
            obj.set_text("수종");
            obj.set_cssclass("sta_DA_label_C");
            this.divSpcfcFoprd.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00","0.00%","111","22.59%","37",null,null,null,null,null,null,this.divSpcfcFoprd.form);
            obj.set_taborder("6");
            obj.set_text("가능량(kg)");
            obj.set_cssclass("sta_DA_label_C");
            this.divSpcfcFoprd.addChild(obj.name, obj);

            obj = new CheckBox("chkSeedPckngPsbltyYn","sta00:9.975999999999999","3","44","28",null,null,null,null,null,null,this.divSpcfcFoprd.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_readonly("true");
            obj.set_value("false");
            this.divSpcfcFoprd.addChild(obj.name, obj);

            obj = new Combo("sdgthTpcd","sta00_00:10","40",null,"28","Static10_01:10",null,null,null,null,null,this.divSpcfcFoprd.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            obj.set_innerdataset("dsSdgthTpcd");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            obj.set_text("");
            this.divSpcfcFoprd.addChild(obj.name, obj);

            obj = new Combo("cmbSdgthKoftrCd","sta00_00_00:10","77",null,"28","Static10_01:10",null,null,null,null,null,this.divSpcfcFoprd.form);
            obj.set_taborder("5");
            obj.set_enable("false");
            obj.set_innerdataset("dsSdgthKoftrCd");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_text("cbo01");
            this.divSpcfcFoprd.addChild(obj.name, obj);

            obj = new MaskEdit("sdgthPssblQntt","sta00_00_00_00:10","114",null,"28","Static10_01:10",null,null,null,null,null,this.divSpcfcFoprd.form);
            obj.set_taborder("7");
            obj.set_enable("false");
            obj.set_format("#0.#");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            this.divSpcfcFoprd.addChild(obj.name, obj);

            obj = new Static("staLabel07","330","0",null,"37","0",null,null,null,null,null,this.divSpcfcFoprd.form);
            obj.set_taborder("9");
            obj.set_text("특정임산물명");
            obj.set_cssclass("sta_DA_label_R");
            this.divSpcfcFoprd.addChild(obj.name, obj);

            obj = new TextArea("spcfcFoprdNm","340","staLabel07:6",null,"99","10",null,null,null,null,null,this.divSpcfcFoprd.form);
            obj.set_initvalueid("iv_TextArea0");
            obj.set_taborder("10");
            obj.set_wordWrap("char");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            this.divSpcfcFoprd.addChild(obj.name, obj);

            obj = new Static("Static03_00_01_01_01_00_01","0","grdLwvgt:30","187","28",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("야장첨부파일");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divAtchFile","0","Static03_00_01_01_01_00_01:20",null,"222","0",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("div_DA");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_01","0","0",null,"148","0",null,null,null,null,null,this.divAtchFile.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_row_R");
            this.divAtchFile.addChild(obj.name, obj);

            obj = new Static("staLabel00","0","0","160",null,null,"0",null,null,null,null,this.divAtchFile.form);
            obj.set_taborder("1");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_DA_label_L");
            this.divAtchFile.addChild(obj.name, obj);

            obj = new Div("divFileAdd","staLabel00:0","0",null,null,"0","0",null,null,null,null,this.divAtchFile.form);
            obj.set_taborder("2");
            obj.set_text("첨부파일 모듈영역");
            obj.set_cssclass("div_gridTable");
            obj.set_url("common::cmmInnorixUpload.xfdl");
            this.divAtchFile.addChild(obj.name, obj);

            obj = new Static("Static03_00_01_01_01_00_01_00","0","divAtchFile:30","187","28",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("추가사항");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divAddtnMttr","0","Static03_00_01_01_01_00_01_00:20",null,"140","0",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("div_DA");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_01","0","0",null,null,"0","0",null,null,null,null,this.divAddtnMttr.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_row_R");
            obj.set_text("");
            this.divAddtnMttr.addChild(obj.name, obj);

            obj = new Static("staLabel00","0","0","160",null,null,"0",null,null,null,null,this.divAddtnMttr.form);
            obj.set_taborder("1");
            obj.set_text("내용");
            obj.set_cssclass("sta_DA_label_L");
            this.divAddtnMttr.addChild(obj.name, obj);

            obj = new TextArea("addtnMtter","staLabel00:10","6",null,null,"10","6",null,null,null,null,this.divAddtnMttr.form);
            obj.set_initvalueid("iv_TextArea0");
            obj.set_taborder("2");
            obj.set_wordWrap("char");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            this.divAddtnMttr.addChild(obj.name, obj);

            obj = new Static("staTitle00_00","0","2848","200","32",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("계획수립배경");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("divPlanEtmtBckgr","0","staTitle00_00:20",null,"112","0",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("divPlanEtmtBckgr");
            obj.set_cssclass("div_DA");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_01","0","0",null,"111","0",null,null,null,null,null,this.divPlanEtmtBckgr.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_rowAll");
            this.divPlanEtmtBckgr.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","0","0","160",null,null,"0",null,null,null,null,this.divPlanEtmtBckgr.form);
            obj.set_taborder("1");
            obj.set_text("내용");
            obj.set_cssclass("sta_DA_label_L");
            this.divPlanEtmtBckgr.addChild(obj.name, obj);

            obj = new TextArea("bsnssBckgrCont","staLabel00_00:10","6",null,null,"10","6",null,null,null,null,this.divPlanEtmtBckgr.form);
            obj.set_taborder("2");
            obj.set_wordWrap("char");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            this.divPlanEtmtBckgr.addChild(obj.name, obj);

            obj = new Static("staTitle01_00","0","divPlanEtmtBckgr:30","141","32",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("작업지시서");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("divJobDirctDoc","0","staTitle01_00:20",null,"111","0",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_cssclass("div_DA");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_01","0","0",null,null,"0","0",null,null,null,null,this.divJobDirctDoc.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_row_R");
            this.divJobDirctDoc.addChild(obj.name, obj);

            obj = new Static("staLabel00","0","0","160",null,null,"0",null,null,null,null,this.divJobDirctDoc.form);
            obj.set_taborder("1");
            obj.set_text("내용");
            obj.set_cssclass("sta_DA_label_L");
            this.divJobDirctDoc.addChild(obj.name, obj);

            obj = new TextArea("opertDirctCont","staLabel00:10","6",null,null,"10","6",null,null,null,null,this.divJobDirctDoc.form);
            obj.set_initvalueid("iv_TextArea0");
            obj.set_taborder("2");
            obj.set_wordWrap("char");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            this.divJobDirctDoc.addChild(obj.name, obj);

            obj = new Static("staTitle02_00","0","divJobDirctDoc:30","123","32",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("소반연혁");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("divSbltHstr","0","staTitle02_00:20",null,"111","0",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_cssclass("div_DA");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_01","0","0",null,null,"0","0",null,null,null,null,this.divSbltHstr.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_rowAll");
            obj.set_text("");
            this.divSbltHstr.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","0","0","160",null,null,"0",null,null,null,null,this.divSbltHstr.form);
            obj.set_taborder("1");
            obj.set_text("내용");
            obj.set_cssclass("sta_DA_label_L");
            this.divSbltHstr.addChild(obj.name, obj);

            obj = new TextArea("sbltHstr","staLabel00_00:10","6",null,null,"10","6",null,null,null,null,this.divSbltHstr.form);
            obj.set_taborder("2");
            obj.set_wordWrap("char");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            this.divSbltHstr.addChild(obj.name, obj);

            obj = new Static("staTitle03_00","0","divSbltHstr:30","141","32",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("관리사항");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("divMngMttr","0","staTitle03_00:20",null,"111","0",null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_cssclass("div_DA");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_01","0","0",null,null,"0","0",null,null,null,null,this.divMngMttr.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_rowAll");
            this.divMngMttr.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","0","0","160",null,null,"0",null,null,null,null,this.divMngMttr.form);
            obj.set_taborder("1");
            obj.set_text("내용");
            obj.set_cssclass("sta_DA_label_L");
            this.divMngMttr.addChild(obj.name, obj);

            obj = new TextArea("mngmeMtter","staLabel00_00:10","6",null,null,"10","6",null,null,null,null,this.divMngMttr.form);
            obj.set_taborder("2");
            obj.set_wordWrap("char");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            this.divMngMttr.addChild(obj.name, obj);

            obj = new Static("staTitle00_01","0","divMngMttr:67","178","32",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("경영계획");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_01_01_01_00_01_01","0","staTitle00_01:20","187","28",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("조림");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdAffrs","0","Static03_00_01_01_01_00_01_01:20",null,"177","0",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid0");
            obj.set_taborder("44");
            obj.set_cssclass("grd_display");
            obj.set_binddataset("dsAffrsWPLs");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_scrollbartype("none auto");
            obj.set_fillareatype("none");
            obj.set_border("1px solid #52aaa4,0px none,1px solid #e2e2e2");
            obj.set_readonly("true");
            obj.set_nodatatext("데이터가 없습니다!");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"260\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"종별\"/><Cell col=\"2\" text=\"시급성\"/><Cell col=\"3\" text=\"면적(㏊)\"/><Cell col=\"4\" text=\"수종\"/><Cell col=\"5\" text=\"본수(본)\"/><Cell col=\"6\" text=\"조림사유\"/><Cell col=\"7\" text=\"노동력(명)\"/><Cell col=\"8\" text=\"사업비(천원)\"/></Band><Band id=\"body\"><Cell text=\"bind:wplbkBizSeq\" expr=\"currow + 1\"/><Cell col=\"1\" displaytype=\"combotext\" edittype=\"none\" combocodecol=\"code\" combodatacol=\"data\" text=\"bind:bizKindCd\" combodataset=\"dsAffrsSpecsTpcd\" cssclass=\"display\"/><Cell col=\"2\" displaytype=\"combotext\" edittype=\"none\" combocodecol=\"code\" combodatacol=\"data\" text=\"bind:urgntCd\" combodataset=\"dsUrgntCd\" cssclass=\"display\"/><Cell col=\"3\" text=\"bind:bizArea\" displaytype=\"normal\" edittype=\"none\" maskeditformat=\"#,##0.##\"/><Cell col=\"4\" displaytype=\"multicombocontrol\" edittype=\"none\" multicombodataset=\"dsKoftrCd\" multicombodatacol=\"data\" multicombocodecol=\"code\" text=\"bind:koftrCd\" multicombodisplayrowcount=\"28\" cssclass=\"display\"/><Cell col=\"5\" text=\"bind:bizQntt\" displaytype=\"normal\" edittype=\"none\" maskeditformat=\"###,###\"/><Cell col=\"6\" text=\"bind:bizRsnCd\" displaytype=\"combotext\" edittype=\"none\" combocodecol=\"code\" combodatacol=\"data\" combodataset=\"dsAffrsRsnCd\" cssclass=\"display\"/><Cell col=\"7\" text=\"bind:bizLbper\" displaytype=\"normal\" cssclass=\"point\" edittype=\"none\"/><Cell col=\"8\" text=\"bind:bizAmt\" displaytype=\"normal\" cssclass=\"point\" maskeditformat=\"###,###\" edittype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_01_01_01_00_01_01_00","0","grdAffrs:30","187","28",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("숲가꾸기");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFrestGrdnn","0","Static03_00_01_01_01_00_01_01_00:20",null,"177","0",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid0");
            obj.set_taborder("46");
            obj.set_cssclass("grd_display");
            obj.set_binddataset("dsFrestGrdnnWPLs");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_scrollbartype("none auto");
            obj.set_fillareatype("none");
            obj.set_border("1px solid #52aaa4,0px none,1px solid #e2e2e2");
            obj.set_readonly("true");
            obj.set_nodatatext("데이터가 없습니다!");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\" band=\"left\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"종별\"/><Cell col=\"2\" text=\"시급성\"/><Cell col=\"3\" text=\"면적(㏊)\"/><Cell col=\"4\" text=\"횟수\"/><Cell col=\"5\" text=\"누적면적(㏊)\"/><Cell col=\"6\" text=\"노동력(명)\"/><Cell col=\"7\" text=\"사업비(천원)\"/></Band><Band id=\"body\"><Cell text=\"bind:wplbkBizSeq\" expr=\"currow + 1\"/><Cell col=\"1\" text=\"bind:bizKindCd\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsFrestGrdnnSpecsTpcd\" combocodecol=\"code\" combodatacol=\"data\" cssclass=\"display\"/><Cell col=\"2\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsUrgntCd\" combocodecol=\"code\" combodatacol=\"data\" text=\"bind:urgntCd\" cssclass=\"display\"/><Cell col=\"3\" text=\"bind:bizArea\" displaytype=\"normal\" edittype=\"none\" maskeditformat=\"#,##0.##\"/><Cell col=\"4\" text=\"bind:bizQntt\" displaytype=\"normal\" edittype=\"none\" maskeditformat=\"###,###\"/><Cell col=\"5\" text=\"bind:bizAccmlArea\" displaytype=\"normal\" cssclass=\"point\" edittype=\"none\"/><Cell col=\"6\" text=\"bind:bizLbper\" displaytype=\"normal\" cssclass=\"point\" edittype=\"none\"/><Cell col=\"7\" text=\"bind:bizAmt\" displaytype=\"normal\" cssclass=\"point\" maskeditformat=\"###,###\" edittype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_01_01_01_00_01_01_00_00","0","grdFrestGrdnn:30","187","28",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("목재수확");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFrtrePrdct","0","Static03_00_01_01_01_00_01_01_00_00:20",null,"177","0",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid0");
            obj.set_taborder("48");
            obj.set_cssclass("grd_display");
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_scrollbartype("auto auto");
            obj.set_fillareatype("none");
            obj.set_binddataset("dsFrtrePrdctWPLs");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("row");
            obj.set_border("1px solid #52aaa4,0px none,1px solid #e2e2e2");
            obj.set_readonly("true");
            obj.set_nodatatext("데이터가 없습니다!");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\" band=\"left\"/><Column size=\"167\"/><Column size=\"124\"/><Column size=\"100\"/><Column size=\"167\"/><Column size=\"110\"/><Column size=\"133\"/><Column size=\"116\"/><Column size=\"100\"/><Column size=\"170\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"종별\"/><Cell col=\"2\" text=\"시급성\"/><Cell col=\"3\" text=\"면적(㏊)\"/><Cell col=\"4\" text=\"목재수확종\"/><Cell col=\"5\" text=\"목재수확률(%)\"/><Cell col=\"6\" colspan=\"2\" text=\"수종 및 목재수확재적(㎥)\"/><Cell col=\"8\" text=\"총재적(㎥)\"/><Cell col=\"9\" text=\"생산방법\"/><Cell col=\"10\" text=\"노동력(명)\"/><Cell col=\"11\" text=\"사업비(천원)\"/></Band><Band id=\"body\"><Cell text=\"bind:wplbkBizSeq\" expr=\"currow + 1\"/><Cell col=\"1\" text=\"bind:bizKindCd\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsSctslTpcd\" combocodecol=\"code\" combodatacol=\"data\" cssclass=\"display\"/><Cell col=\"2\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsUrgntCd\" combocodecol=\"code\" combodatacol=\"data\" text=\"bind:urgntCd\" cssclass=\"display\"/><Cell col=\"3\" text=\"bind:bizArea\" displaytype=\"normal\" edittype=\"none\" maskeditformat=\"#,##0.##\"/><Cell col=\"4\" text=\"bind:frtrePrdctnAssrtTpcd\" displaytype=\"combotext\" edittype=\"none\" combocodecol=\"code\" combodatacol=\"data\" combodataset=\"dsFellyMthdCd\" cssclass=\"display\"/><Cell col=\"5\" text=\"bind:frtrePrdctnFellyRt\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"6\" displaytype=\"normal\" multicombodataset=\"expr:comp.parent.parent.parent.parent.dsKoftrCd\" multicombodatacol=\"data\" multicombocodecol=\"code\" multicombodisplayrowcount=\"25\" edittype=\"none\" text=\"bind:koftrNm\" wordWrap=\"char\" textareascrolltype=\"vertical\" autosizerow=\"limitmin\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"none\" text=\"bind:bizPrdctnWdvlm\"/><Cell col=\"8\" text=\"bind:totBizPrdctnWdvlm\" displaytype=\"normal\" cssclass=\"point\" edittype=\"none\"/><Cell col=\"9\" text=\"bind:prdctnMthdCd\" displaytype=\"combotext\" edittype=\"none\" combocodecol=\"code\" combodatacol=\"data\" combodataset=\"dsPrdctnMthdCd\" cssclass=\"display\"/><Cell col=\"10\" text=\"bind:bizLbper\" displaytype=\"normal\" cssclass=\"point\" edittype=\"none\"/><Cell col=\"11\" text=\"bind:bizAmt\" displaytype=\"normal\" cssclass=\"point\" maskeditformat=\"###,###\" edittype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_01_01_01_00_01_01_00_00_00","0","grdFrtrePrdct:30","187","28",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("시설");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFclt","1","Static03_00_01_01_01_00_01_01_00_00_00:20",null,"177","0",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid0");
            obj.set_taborder("50");
            obj.set_cssclass("grd_display");
            obj.set_binddataset("dsFcltWPLs");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_scrollbartype("none auto");
            obj.set_fillareatype("none");
            obj.set_border("1px solid #52aaa4,0px none,1px solid #e2e2e2");
            obj.set_readonly("true");
            obj.set_nodatatext("데이터가 없습니다!");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"종별\"/><Cell col=\"2\" text=\"시급성\"/><Cell col=\"3\" text=\"물량\"/><Cell col=\"4\" text=\"노동력(명)\"/><Cell col=\"5\" text=\"사업비(천원)\"/></Band><Band id=\"body\"><Cell text=\"bind:wplbkBizSeq\" expr=\"currow + 1\"/><Cell col=\"1\" text=\"bind:bizKindCd\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsFcltKindCd\" combocodecol=\"code\" combodatacol=\"dtlCdExpln\" cssclass=\"display\"/><Cell col=\"2\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsUrgntCd\" combocodecol=\"code\" combodatacol=\"data\" text=\"bind:urgntCd\" cssclass=\"display\"/><Cell col=\"3\" text=\"bind:bizQntt\" displaytype=\"normal\" edittype=\"none\" maskeditformat=\"###,###\"/><Cell col=\"4\" text=\"bind:bizLbper\" displaytype=\"normal\" edittype=\"none\" maskeditformat=\"###,###\"/><Cell col=\"5\" text=\"bind:bizAmt\" displaytype=\"normal\" cssclass=\"point\" maskeditformat=\"###,###\" edittype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_01_01_01_00_01_01_00_00_00_00","0","grdFclt:30","187","28",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("소득");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdIncm","0","Static03_00_01_01_01_00_01_01_00_00_00_00:20",null,"177","0",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid0");
            obj.set_taborder("52");
            obj.set_cssclass("grd_display");
            obj.set_binddataset("dsEarnWPLs");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_scrollbartype("none auto");
            obj.set_fillareatype("none");
            obj.set_border("1px solid #52aaa4,0px none,1px solid #e2e2e2");
            obj.set_nodatatext("데이터가 없습니다!");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"종별\"/><Cell col=\"2\" text=\"시급성\"/><Cell col=\"3\" text=\"기타 소득종\"/><Cell col=\"4\" text=\"생산량\"/><Cell col=\"5\" text=\"노동력(명)\"/><Cell col=\"6\" text=\"사업비(천원)\"/></Band><Band id=\"body\"><Cell text=\"bind:wplbkBizSeq\" expr=\"currow + 1\"/><Cell col=\"1\" text=\"bind:bizKindCd\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsEarnSpecsClsfCd\" combocodecol=\"code\" combodatacol=\"dtlCdExpln\" cssclass=\"display\"/><Cell col=\"2\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsUrgntCd\" combocodecol=\"code\" combodatacol=\"data\" text=\"bind:urgntCd\" cssclass=\"display\"/><Cell col=\"3\" text=\"bind:bizEtcKinNm\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"4\" text=\"bind:bizQntt\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"5\" text=\"bind:bizLbper\" displaytype=\"normal\" edittype=\"none\" maskeditformat=\"###,###\"/><Cell col=\"6\" text=\"bind:bizAmt\" displaytype=\"normal\" edittype=\"none\" maskeditformat=\"###,###\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divBtn","0","grdIncm:30",null,"32","0",null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("divBtn");
            this.addChild(obj.name, obj);

            obj = new Button("btnList",null,"0","78","32","0",null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("3");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_common01");
            this.divBtn.addChild(obj.name, obj);

            obj = new Static("staTitle04_00","0","grdIncm:80","123","32",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("도면");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("divMap","0","staTitle04_00:20",null,"600","0",null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_cssclass("div_map");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("webFlrpln","0","0",null,null,"0","0",null,null,null,null,this.divMap.form);
            obj.set_taborder("0");
            this.divMap.addChild(obj.name, obj);

            obj = new Static("Static02",null,"5050","90","28","0",null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("신규 차기 경계");
            obj.set_cssclass("sta_WF_legend_text");
            this.addChild(obj.name, obj);

            obj = new Static("staLegend_orange",null,"5059","10","10","Static02:2",null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_legend_red");
            this.addChild(obj.name, obj);

            obj = new Static("sta_dotline1_00_00_00","0","3630",null,"16","0",null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("");
            obj.set_cssclass("sta_MG_dotline_H");
            this.addChild(obj.name, obj);

            obj = new Button("btnBfrNxtrm",null,"22","130","32","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("전차기소반지정");
            obj.set_cssclass("btn_WF_module_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_01_01_00","0","grdShp:30","157","28",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("주요 수종조사");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_dotline1_00_00","0","2761",null,"16","0",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("");
            obj.set_cssclass("sta_MG_dotline_H");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00_00_00","0","divAddtnMttr:67","200","32",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("계획수립정보");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divWplbk.form
            obj = new Layout("default","",0,0,this.divWplbk.form,function(p){});
            this.divWplbk.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divAreaSkill.form
            obj = new Layout("default","",0,0,this.divAreaSkill.form,function(p){});
            this.divAreaSkill.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGoalFrtp.form
            obj = new Layout("default","",0,0,this.divGoalFrtp.form,function(p){});
            this.divGoalFrtp.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divHelp.form
            obj = new Layout("default","",0,0,this.divHelp.form,function(p){});
            this.divHelp.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSpcfcFoprd.form
            obj = new Layout("default","",0,0,this.divSpcfcFoprd.form,function(p){});
            this.divSpcfcFoprd.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divAtchFile.form.divFileAdd
            obj = new Layout("default","",0,0,this.divAtchFile.form.divFileAdd.form,function(p){});
            this.divAtchFile.form.divFileAdd.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divAtchFile.form
            obj = new Layout("default","",0,0,this.divAtchFile.form,function(p){});
            this.divAtchFile.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divAddtnMttr.form
            obj = new Layout("default","",0,0,this.divAddtnMttr.form,function(p){});
            this.divAddtnMttr.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPlanEtmtBckgr.form
            obj = new Layout("default","",0,0,this.divPlanEtmtBckgr.form,function(p){});
            this.divPlanEtmtBckgr.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divJobDirctDoc.form
            obj = new Layout("default","",0,0,this.divJobDirctDoc.form,function(p){});
            this.divJobDirctDoc.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSbltHstr.form
            obj = new Layout("default","",0,0,this.divSbltHstr.form,function(p){});
            this.divSbltHstr.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMngMttr.form
            obj = new Layout("default","",0,0,this.divMngMttr.form,function(p){});
            this.divMngMttr.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBtn.form
            obj = new Layout("default","",0,0,this.divBtn.form,function(p){});
            this.divBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMap.form
            obj = new Layout("default","",0,0,this.divMap.form,function(p){});
            this.divMap.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1240,5606,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item13","divAreaSkill.form.stlndArea","value","dsWplbkVO","stlndArea");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divAreaSkill.form.blankArea","value","dsWplbkVO","blankArea");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divAreaSkill.form.nfrtldArea","value","dsWplbkVO","nfrtldArea");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divAreaSkill.form.checkBox0","value","dsWplbkVO","lfenvFrsrsrSkillTpcd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divAreaSkill.form.checkBox1","value","dsWplbkVO","ntrEnvrnFrsrsrSkillTpcd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divAreaSkill.form.checkBox2","value","dsWplbkVO","crparSkillTpcd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divAreaSkill.form.checkBox3","value","dsWplbkVO","dprrsSkillTpcd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divAreaSkill.form.checkBox4","value","dsWplbkVO","mnfrsRcrfrSkillTpcd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divAreaSkill.form.checkBox5","value","dsWplbkVO","tmbrPdfrtSkillTpcd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divGoalFrtp.form.goalFrtpCont","value","dsWplbkVO","goalFrtpCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divGoalFrtp.form.mcbKoftr","value","dsGoalFrtp","koftrCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSpcfcFoprd.form.spcfcFoprdNm","value","dsMnfrsExmn","spcfcFoprdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSpcfcFoprd.form.chkSeedPckngPsbltyYn","value","dsMnfrsExm","seedPckngPsbltyYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSpcfcFoprd.form.sdgthTpcd","value","dsMnfrsExmn","sdgthTpcd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSpcfcFoprd.form.cmbSdgthKoftrCd","value","dsMnfrsExmn","sdgthKoftrCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSpcfcFoprd.form.sdgthPssblQntt","value","dsMnfrsExmn","sdgthPsbltyQntt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSpcfcFoprd.form.sdgthPssblQntt","accessibilityaction","dsMnfrsExmnn","sdgthPssblQntt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divAddtnMttr.form.addtnMtter","value","dsWplbkVO","addtnMttr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divPlanEtmtBckgr.form.bsnssBckgrCont","value","dsWplbkVO","bizBckgrCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divJobDirctDoc.form.opertDirctCont","value","dsWplbkVO","jobDirctCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divSbltHstr.form.sbltHstr","value","dsWplbkVO","sbltHstry");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divMngMttr.form.mngmeMtter","value","dsWplbkVO","mngMttr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divWplbk.form.cmblcId","value","dsWplbkVO","cmblcId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divWplbk.form.edtSbltId","value","dsWplbkVO","sbltId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divWplbk.form.cmbSpwodKindCd","value","dsWplbkVO","spwodKindCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divWplbk.form.cmbSpwodDetlKindCd","value","dsWplbkVO","spwodDetlKindCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divWplbk.form.cmbCmblcId","value","dsWplbkVO","cmblcId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divWplbk.form.edtCmblcId","value","dsWplbkVO","cmblcId");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::cmmInnorixUpload.xfdl");
        };
        
        // User Script
        this.addIncludeScript("wplbkViewHstry.xfdl","lib::lib_nfm.xjs");
        this.addIncludeScript("wplbkViewHstry.xfdl","lib::libSrcDatMngme.xjs");
        this.registerScript("wplbkViewHstry.xfdl", function() {
        /**
        *  경영계획부 작성
        *  @MenuPath    경영계획 > 경영계획부 관리 > 경영계획부 상세조회
        *  @FileName 	wplbkSave.xfdl
        *  @Creator 	hdh
        *  @CreateDate 	2024.07.10
        *  @Desction         스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2024.07.10     		hdh(svn user) 	        최초 생성
        *  2024.07.10     		gmj(svn user) 	        수정
        *******************************************************************************
        */
        this.executeIncludeScript("lib::lib_nfm.xjs"); /*include "lib::lib_nfm.xjs"*/;
        this.executeIncludeScript("lib::libSrcDatMngme.xjs"); /*include "lib::libSrcDatMngme.xjs"*/;
        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        const publicArgs = this.gfnGetMdiRootDiv() ? this.gfnGetMdiRootDiv().arguments.menuParam : this.getOwnerFrame();

        // 지위지수
        this.mnfrsExmnStind = "";

        // 연년생장
        this.cairt = "";

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e) {
        	this.gfnFormOnLoad(obj,e); //필수함수

        	if(publicArgs.formType == 'POPUP') {
        		//버튼정리
        		this.divBtn.form.btnList.set_visible(false);
        		this.btnBfrNxtrm.set_visible(false);
        	}

        	var codeArgs = [//cdId, useYn, defaultData, rds
        		  {cdId:'SDGTH_KOFTR_CD', useYn:'', rds: 'dsSdgthKoftrCd_S', addtiAttrbCn1:'S', rdsId:'SdgthKoftrCd_S'}
        		, {cdId:'SDGTH_KOFTR_CD', useYn:'', rds: 'dsSdgthKoftrCd_P', addtiAttrbCn1:'P', rdsId:'SdgthKoftrCd_P'}
        		//, {cdId: 'FELLY_MTHD_CD', useYn:'Y', hrrchSrchYn : 'Y', upDtlCdId: '01'}
        		, ['SPWOD_KIND_CD', 'ORBRN_CD', 'GRDNT_CD', 'SCSTX_CD', 'SLDPT_TPCD'
        		, 'HGDGR_TPCD', 'MNFRS_EXMN_GGRPH_CD', 'FROR_CD', 'FRTP_TPCD', 'CRDNS_CD',
        		, 'SDGTH_TPCD', 'AFFRS_SPECS_TPCD', 'URGNT_CD', 'FELLY_MTHD_CD', 'AFFRS_RSN_CD'
        		, 'FREST_GRDNN_SPECS_TPCD', 'SCTSL_TPCD', 'PRDCT_MTHOD_CD', 'FCLT_KIND_CD'
        		, 'EARN_SPECS_CLSF_CD', 'SPWOD_DETL_KIND_CD', 'KOFTR_CD','STTY_APWOD_CD','PRDCTN_MTHD_CD']
        	];
        	this.nfmCodeSet(codeArgs); //코드세팅
        };

        this.fnCallback = function(svcID,errorCode,errorMsg) {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "codeSearch": //코드세팅
        			this.fnSearch(); //조회

        			break;
        		case "search": //조회
        				this.divAtchFile.form.divFileAdd.form.uploadInit({//첨부파일 세팅
        							  mode: 'down'
        							, data: this.dsWplbkVO.getColumn(0, 'attchFiles')
        							, maxFileCount: '5'
        							, width: '650'
        							, height: '150'
        							, maxTotalSize: '1000000000' // 1GB 총 파일
        							, maxFileSize: '1000000000' // 1GB 개별 파일
        							, group: 'wplbk' // 업무구분
        							, callback: 'uploadCallback'
        				});

        				var wplarId = this.dsWplbkVO.getColumn(0, 'wplarId');
        				var nxtrmNo = this.dsWplbkVO.getColumn(0, 'nxtrmNo');
        				var cmblcId = this.dsWplbkVO.getColumn(0, 'cmblcId');
        				var sbltId = this.dsWplbkVO.getColumn(0, 'sbltId');
        				var wplbkNo = this.dsWplbkVO.getColumn(0, 'wplbkNo');

        				this.fnPageSet(); //조회 후 페이지 세팅 함수
        				this.loadGis();
        			break;
        		case "calcSI":
        			this.dsMnfrsExmn.setColumn(0, "mnfrsExmnStind", this.mnfrsExmnStind);
        			break;
        	}
        }


        this.fnPageSet = function () {
        	// p : 경영계획(차기) text 세팅
        	//var wplarInfo = this.dsWplbkVO.getColumn(0, "wplarNm")+"("+this.dsWplbkVO.getColumn(0, "nxtrmNo")+")";
        	this.divWplbk.form.instNm.set_text(this.dsWplbkVO.getColumn(0, "instNm"));
        	this.divWplbk.form.wplarNm.set_text(this.dsWplbkVO.getColumn(0, "wplarNm") + " ("+ this.dsWplbkVO.getColumn(0, "nxtrmNo") +"차기)" );

        	//전차기 소반 없을때
        	if(this.gfnIsNull(this.dsWplbkVO.getColumn(0,"mthrSbltHstry1"))){
        		this.divWplbk.form.cmbMthrSbltHstry.set_enable(false);
        	}
        	//전차기 소반 있을때
        	if(!this.gfnIsNull(this.dsWplbkVO.getColumn(0,"mthrSbltHstry1"))){
        		this.dsMthrSbltHstry.addRow();
        		this.dsMthrSbltHstry.setColumn(0, "value", this.dsWplbkVO.getColumn(0, "mthrSbltHstry1"));
        	}
        	if(!this.gfnIsNull(this.dsWplbkVO.getColumn(0,"mthrSbltHstry2"))){
        		this.dsMthrSbltHstry.addRow();
        		this.dsMthrSbltHstry.setColumn(1, "value", this.dsWplbkVO.getColumn(0, "mthrSbltHstry2"));
        	}
        	if(!this.gfnIsNull(this.dsWplbkVO.getColumn(0,"mthrSbltHstry3"))){
        		this.dsMthrSbltHstry.addRow();
        		this.dsMthrSbltHstry.setColumn(2, "value", this.dsWplbkVO.getColumn(0, "mthrSbltHstry3"));
        	}

        	this.divWplbk.form.cmbMthrSbltHstry.set_innerdataset(this.dsMthrSbltHstry);

        	this.divWplbk_cmbSpwodKindCd_onitemchanged();

        	// p : 지종별 면적 계산
        	this.divAreaSkill_onArea_onchanged();

        	// p : 주기능 라디오 체크
        	var lfenvFrsrsrSkillTpcd = this.dsWplbkVO.getColumn(0, "lfenvFrsrsrSkillTpcd");
        	var ntrEnvrnFrsrsrSkillTpcd = this.dsWplbkVO.getColumn(0, "ntrEnvrnFrsrsrSkillTpcd");
        	var crparSkillTpcd = this.dsWplbkVO.getColumn(0, "crparSkillTpcd");
        	var dprrsSkillTpcd = this.dsWplbkVO.getColumn(0, "dprrsSkillTpcd");
        	var mnfrsRcrfrSkillTpcd = this.dsWplbkVO.getColumn(0, "mnfrsRcrfrSkillTpcd");
        	var tmbrPdfrtSkillTpcd = this.dsWplbkVO.getColumn(0, "tmbrPdfrtSkillTpcd");

        	var index;
        	if(lfenvFrsrsrSkillTpcd == "P") {
        		this.index = 0;
        	} else if(ntrEnvrnFrsrsrSkillTpcd == "P") {
        		this.index = 1;
        	} else if(crparSkillTpcd == "P") {
        		this.index = 2;
        	} else if(dprrsSkillTpcd == "P") {
        		this.index = 3;
        	} else if(mnfrsRcrfrSkillTpcd == "P") {
        		this.index = 4;
        	} else if(tmbrPdfrtSkillTpcd == "P") {
        		this.index = 5;
        	}

        	this.divAreaSkill.form.rdoSkill.set_index(this.index);

        	// p : 주기능으로 체크된 보조기능 체크박스 체크 해제 및 disable 처리
        	var e = {};
        	e['postindex'] = this.index;

        	this.divAreaSkill_rdoSkill_onitemchanged(this.divAreaSkill.form.rdoSkill, e)

        	// p : 보조기능 기능구분 N 인것들 중 체크 해제
        	if(this.dsWplbkVO.getColumn(0, "lfenvFrsrsrSkillTpcd") == "N"){
        		this.dsWplbkVO.setColumn(0, "lfenvFrsrsrSkillTpcd", "false");
        	}
        	if(this.dsWplbkVO.getColumn(0, "ntrEnvrnFrsrsrSkillTpcd") == "N"){
        		this.dsWplbkVO.setColumn(0, "ntrEnvrnFrsrsrSkillTpcd", "false");
        	}
        	if(this.dsWplbkVO.getColumn(0, "crparSkillTpcd") == "N"){
        		this.dsWplbkVO.setColumn(0, "crparSkillTpcd", "false");
        	}
        	if(this.dsWplbkVO.getColumn(0, "dprrsSkillTpcd") == "N"){
        		this.dsWplbkVO.setColumn(0, "dprrsSkillTpcd", "false");
        	}
        	if(this.dsWplbkVO.getColumn(0, "mnfrsRcrfrSkillTpcd") == "N"){
        		this.dsWplbkVO.setColumn(0, "mnfrsRcrfrSkillTpcd", "false");
        	}
        	if(this.dsWplbkVO.getColumn(0, "tmbrPdfrtSkillTpcd") == "N"){
        		this.dsWplbkVO.setColumn(0, "tmbrPdfrtSkillTpcd", "false");
        	}

        	// p : 목표임상 수종세팅
        	var goalFrtpsKoftrCd = "";
        	for(var i = 0; i < this.dsGoalFrtp.rowcount; i++){
        		goalFrtpsKoftrCd += this.dsGoalFrtp.getColumn(i, "koftrCd");
        		this.divGoalFrtp.form.mcbKoftr.set_value(goalFrtpsKoftrCd);
        		if(i < this.dsGoalFrtp.rowcount-1){
        			goalFrtpsKoftrCd += ",";
        		}
        	}

        	this.dsGoalFrtp.setColumn(0, "koftrCd", goalFrtpsKoftrCd);

        	// p : 산림조사 > 주요 수종조사 이벤트 호출
        	this.dsKoftrExmn_oncolumnchanged("", "");

        	// p : 산림조사 > 종자채취여부
        	if(this.dsMnfrsExmn.getColumn(0, "seedPckngPsbltyYn") == "Y"){
        		this.divSpcfcFoprd.form.chkSeedPckngPsbltyYn.set_value(true);
        	} else {
        		this.divSpcfcFoprd.form.chkSeedPckngPsbltyYn.set_value(false);
        	}

        	if(this.dsMnfrsExmn.getColumn(0, "sdgthTpcd") == "01"){
        		this.divSpcfcFoprd.form.cmbSdgthKoftrCd.set_innerdataset(this.dsSdgthKoftrCd_S);
        	}else if(this.dsMnfrsExmn.getColumn(0, "sdgthTpcd") == "02"){
        		this.divSpcfcFoprd.form.cmbSdgthKoftrCd.set_innerdataset(this.dsSdgthKoftrCd_p);
        	}
        }

        //조회
        this.fnSearch = function () {
        	this.dsWplbkVO.clearData();
        	if(this.dsSearch.getRowCount() == 0) {
        		this.dsSearch.addRow();
        	}
        	this.dsSearch.setColumn(0, "wplbkNo", publicArgs.wplbkNo);
        	this.dsSearch.setColumn(0, "rqdocNo", publicArgs.rqdocNo);
        	this.dsSearch.setColumn(0, "bizDataTypeTpcd", "01"); //경영계획

        	var strSvcId    = "search";
        	var strSvcUrl   = "nfm/wplbk/selectWplbkHstryView.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsWplbkVO=wplbkVO dsSbltLctn=sbltLctnList dsSttyApwod=sttyApwodList dsGoalFrtp=goalFrtpList dsMnfrsExmn=mnfrsExmn dsKoftrExmn=koftrExmn dsLwvgt=lwvgt ";
        	//경영계획
        	outData += "dsAffrsWPLs=affrsWPLs dsFrestGrdnnWPLs=frestGrdnnWPLs dsFrtrePrdctWPLs=frtrePrdctWPLs dsFcltWPLs=fcltWPLs dsEarnWPLs=earnWPLs dsResult=dsResult";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync, 		// 비동기통신 여부 [생략가능]
        						3);				// nDataType :: 3(JSON)
        };

        //특수림지정현황 셀렉트 변경 이벤트
        this.divWplbk_cmbSpwodKindCd_onitemchanged = function() {
        	var spwodKindCd = this.divWplbk.form.cmbSpwodKindCd.value;

        	var index = 0;
        	this.tempSpwodDetailKindCd1.clearData();
        	this.tempSpwodDetailKindCd2.clearData();

        	if(spwodKindCd == "02"){
        		this.divWplbk.form.cmbSpwodKindCd.set_visible(true);
        		var cnt = this.dsSpwodDetlKindCd.getRowCount();
        		for(var i = 1; i < cnt; i++){
        			var code = this.dsSpwodDetailKindCd.getColumn(i, "code");
        			if(code == "20" || code == "21" || code == "22" ){
        				this.tempSpwodDetailKindCd1.addRow();
        				this.tempSpwodDetailKindCd1.setColumn(index, "code", this.dsSpwodDetlKindCd.getColumn(i, "code"));
        				this.tempSpwodDetailKindCd1.setColumn(index, "data", this.dsSpwodDetlKindCd.getColumn(i, "data"));
        				index++;
        			}
        		}
        		this.divWplbk.form.cmbSpwodDetlKindCd.set_innerdataset(this.tempSpwodDetailKindCd1);
        	} else if(spwodKindCd == "04") {
        		this.divWplbk.form.cmbSpwodDetlKindCd.set_visible(true);
        		var cnt = this.dsSpwodDetlKindCd.getRowCount();
        		for(var i = 1; i < cnt; i++){
        			var code = this.dsSpwodDetlKindCd.getColumn(i, "code");
        			if(code != "20" && code != "21" && code != "22" ){
        				this.tempSpwodDetailKindCd2.addRow();
        				this.tempSpwodDetailKindCd2.setColumn(index, "code", this.dsSpwodDetlKindCd.getColumn(i, "code"));
        				this.tempSpwodDetailKindCd2.setColumn(index, "data", this.dsSpwodDetlKindCd.getColumn(i, "data"));
        				index++;
        			}
        		}
        		this.divWplbk.form.cmbSpwodDetlKindCd.set_innerdataset(this.tempSpwodDetailKindCd2);
        	} else {
        		this.divWplbk.form.cmbSpwodDetlKindCd.set_visible(false);
        	}

        	this.divWplbk.form.cmbSpwodDetlKindCd.set_index(0);
        };
        /*
        //전차기소반지정 버튼클릭 이벤트
        this.divWplbk_btnBfrNxtrmSbltDsgn_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        	var sTitle = "전차기소반지정";
        	var oArg   = { wplarId : this.dsWplbkVO.getColumn(0, "wplarId")
        				 , nxtrmNo : this.dsWplbkVO.getColumn(0, "nxtrmNo")
        				 , mthrSbltHstry1 : this.dsMthrSbltHstry.getColumn(0, "value")
        				 , mthrSbltHstry2 : this.dsMthrSbltHstry.getColumn(1, "value")
        				 , mthrSbltHstry3 : this.dsMthrSbltHstry.getColumn(2, "value")};
        	var oOption = {
        			popuptype:"modal"	//modal,modaless
        			,autosize:false
        			,title:sTitle
        			,resize:false
        			,titlebar:true
        	}

        	this.gfnOpenPopup("popupBfrNxtrm", "business::mngmtPlan/wplbk/bfrNxtrmSbltDsgnPopup.xfdl", oArg, function(sPopupId, sRtn){
        																										if(!this.gfnIsNull(sRtn)) {
        																											var objRtn = JSON.parse(sRtn);
        																											if(this.gfnIsNull(objRtn)) {
        																												return false;
        																											}

        																											this.dsMthrSbltHstry.clearData();

        																											var wplbkNoLength = objRtn.wplbkNo.length;

        																											for(var i = 0; i < wplbkNoLength; i++){
        																												this.dsMthrSbltHstry.addRow();
        																												this.dsMthrSbltHstry.setColumn(i, "value", objRtn.wplbkNo[i]);
        																											}
        																											this.divWplbk.form.cmbMthrSbltHstry.set_index(0);
        																										}
        																									}, oOption);
        };


        //전차기소반지정 보기 버튼클릭 이벤트
        this.divWplbk_btnMhrSbltHstry_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        	var mthrSbltHstry = this.divWplbk.form.cmbMthrSbltHstry.value;
        	var wplarId = mthrSbltHstry.substr(0, mthrSbltHstry.indexOf("_"));

        	var sTitle = "전차기 소반";
        	var oArg   = {wplbkNo : mthrSbltHstry, wplarId:wplarId, formType : "POPUP" };
        	var oOption = {
        		width:1215
        		,height:800			//모달리스는 width,height 필수지정
        		,popuptype:"modeless"
        		//,popuptype:"modal"
        		,autosize:false
        		,title:sTitle
        		,resize:false
        		,titlebar:true
        		};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("popupModaless", "business::mngmtPlan/wplbk/wplbkView.xfdl", oArg, sPopupCallBack, oOption);
        };
        */

        //지종별 면적 input 변경 이벤트
        this.divAreaSkill_onArea_onchanged = function(obj,e) {
        	var stlndArea = this.gfnIsNull(this.dsWplbkVO.getColumn(0, "stlndArea")) ? 0.00 : parseFloat(this.dsWplbkVO.getColumn(0, "stlndArea"));
        	var blankArea = this.gfnIsNull(this.dsWplbkVO.getColumn(0, "blankArea")) ? 0.00 : parseFloat(this.dsWplbkVO.getColumn(0, "blankArea"));
        	var nfrtldArea = this.gfnIsNull(this.dsWplbkVO.getColumn(0, "nfrtldArea")) ? 0.00 : parseFloat(this.dsWplbkVO.getColumn(0, "nfrtldArea"));

        	var areaTotal = (stlndArea + blankArea + nfrtldArea).toFixed(2);
        	this.divAreaSkill.form.areaTotal.set_value(areaTotal);

        	var unfrtArea = (blankArea + nfrtldArea).toFixed(2);
        	this.divAreaSkill.form.unfrtArea.set_value(unfrtArea);
        };

        //주기능 변경시 보조기능 체크 해제
        this.divAreaSkill_rdoSkill_onitemchanged = function(obj,e) {
        	var bValue = e.postindex;
        	var arrComp = this.divAreaSkill.form.components;

        	var objChk;
        	for(var i=0; i<6; i++) {
        		objChk = arrComp["checkBox"+i];
        		if(i == bValue){
        			objChk.set_enable(false);
        			objChk.set_value(false);
        		}else{
        			objChk.set_enable(true);
        		}
        	}
        };

        // 산림조사VO 변경 이벤트
        /*this.dsMnfrsExmn_oncolumnchanged = function(obj:nexacro.NormalDataset,e:nexacro.DSColChangeEventInfo)
        {
        	// 지위지수
        	if(e.columnid == "dmtreTrhgh" || e.columnid == "dmtreFrag") {
        		var dmtreTrhgh = this.dsMnfrsExmn.getColumn(0, "dmtreTrhgh");
        		var dmtreAge = this.dsMnfrsExmn.getColumn(0, "dmtreFrag");
        		var koftrCd = "";
        		var mixRt = 0;

        		for(var i = 0; i < this.dsKoftrExmnn.rowcount; i++){
        			if(mixRt < this.dsKoftrExmnn.getColumn(i, "mixtrRt")) {
        				mixRt = this.dsKoftrExmnn.getColumn(i, "mixtrRt")
        				koftrCd = this.dsKoftrExmnn.getColumn(i, "koftrCd")
        			}
        		}

        		if(!this.gfnIsNull(dmtreTrhgh) && !this.gfnIsNull(dmtreAge) && !this.gfnIsNull(koftrCd)){
        			var strSvcId    = "calcSI";
        			var strSvcUrl   = "common/calcSI.do";
        			var inData      = "";
        			var outData     = "";
        			var strArg      = "dmtreTrhgh="+ dmtreTrhgh + " dmtreAge=" + dmtreAge + " koftrCd=" +koftrCd;
        			var callBackFnc = "fnCallback";
        			var isAsync   	= true;

        			this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        								strSvcUrl , 	// trabsaction을 요청할 주소
        								inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        								outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        								strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        								callBackFnc, 	// transaction의 결과를 받을 Function 이름
        								isAsync, 		// 비동기통신 여부 [생략가능]
        								3);				// nDataType :: 3(JSON)

        		}else{
        			this.dsMnfrsExmn.setColumn(0, "mnfrsExmnStind", "");
        		}
        	}

        	// 임목생장 총축적계산
        	if(e.columnid == "haPartyRealtAccmnArea"){
        		var stlndArea = this.dsWplbkVO.getColumn(0, "stlndArea");

        		if(this.gfnIsNull(stlndArea)){
        			this.dsMnfrsExmn.getColumn(0, "haPartyRealtAccmnArea", "0");
        		}else{
        			var idx = this.getBaseTreeIndex();

        			if (idx != -1) {
        			// 치수림이면
        				if (parseFloat(this.dsKoftrExmnn.getColumn(idx, "avrgDmtr")) < 6.0) {
        					$('input[name="mnfrsExmnn.haPartyRealtAccmnArea"]').val(0);

        					// 현실축적 ,법정축적 (ha당, 총축적) 값을 0으로 설정
        				}
        			}
        		}
        		// 총축적 자동계산
        		var areaTot = this.divAreaSkill.form.areaTotal.value;
        		if (this.gfnIsNull(areaTot)) {

        		} else {
        			if (this.gfnIsNull(this.dsMnfrsExmn.getColumn(0, "haPartyRealtAccmnArea")))
        				return true;
        			var realtAccmnTotSum = parseFloat(this.dsMnfrsExmn.getColumn(0, "haPartyRealtAccmnArea")) * parseFloat(areaTot);
        			this.dsMnfrsExmn.setColumn(0, "realtAccmnTotlSum", Math.round(realtAccmnTotSum));
        		}
        	}
        };*/

        // 산림조사 > 주요수종조사 변경 이벤트
        this.dsKoftrExmn_oncolumnchanged = function(obj,e)
        {
        	this.dsKoftrExmn.addColumn("ageClass", "string", "256");
        	if(e.columnid == "avrgFrag") { //임령 항목 수정시
        		var age = this.dsKoftrExmn.getColumn(e.row, e.columnid);
        		var ageClassChar = this.getAgeClassChar(age);

        		this.dsKoftrExmn.setColumn(e.row, "ageClass", ageClassChar);
        	} else if(e == "") { //최초 세팅
        		var cnt = this.dsKoftrExmn.rowcount;
        		for(var i = 0; i < cnt; i++){
        			var age = this.dsKoftrExmn.getColumn(i, "avrgFrag");
        			var ageClassChar = this.getAgeClassChar(age);

        			this.dsKoftrExmn.setColumn(i, "ageClass", ageClassChar);
        		}
        	}
        };

        // 영급문자 반환 함수
        this.getAgeClassChar = function (age) {
        	if (age == null || age === undefined || isNaN(age))
        		return "";
        	else {

        		var a = Math.floor(age);
        		if (a <= 0)
        			return "";

        		// 영급 표시 문자
        		var ageClassChars = [ "Ⅰ", "Ⅱ", "Ⅲ", "Ⅳ", "Ⅴ", "Ⅵ", "Ⅶ", "Ⅷ", "Ⅸ", "Ⅹ" ];
        		var ageClass = Math.floor((age - 1) / 10);

        		if (ageClass > 9)
        			ageClass = 9;

        		return ageClassChars[ageClass];
        	}
        };
        /*
        // 기준목 index 반환
        this.getBaseTreeIndex = function()
        {
        	var size = this.dsKoftrExmnn.rowcount
        	if(size > 0){
        		// 주요수종이 하나만 있는 경우
        		if (size == 1) {
        			return 0;
        	}else{
        		// 주요수종이 2개 이상인 경우
        		var mixtrRtArr = new Array();
        		var avrgFragArr = new Array();
        		var avrgTrhghArr = new Array();
        		var avrgDmtrArr = new Array();

        		for (var i = 0; i < size; i++) {
        			mixtrRtArr.push(this.dsKoftrExmnn.getColumn(i, "mixtrRt"));
        			avrgFragArr.push(this.dsKoftrExmnn.getColumn(i, "avrgFrag"));
        			avrgTrhghArr.push(this.dsKoftrExmnn.getColumn(i, "avrgTrhgh"));
        			avrgDmtrArr.push(this.dsKoftrExmnn.getColumn(i, "avrgDmtr"));
        		}
        		// 혼요율이 가장 높은 수종
        			// 혼요율이 가장 높은 수종
        			var rst = this.getBiggerValue(mixtrRtArr);
        			if (rst > -1)
        				return rst;
        			// 수고가 가장 높은 수종
        			rst = this.getBiggerValue(avrgFragArr);
        			if (rst > -1)
        				return rst;
        			// 임령이 가장 높은 수종
        			rst = this.getBiggerValue(avrgTrhghArr);
        			if (rst > -1)
        				return rst;
        			// 경급이 가장 높은 수종
        			rst = this.getBiggerValue(avrgDmtrArr);
        			if (rst > -1)
        				return rst;
        			else
        				return 0;
        			// 위의 사항이 다 동일한 경우 1번째 인덱스 반환
        		}
        	}else{
        		return -1;
        	}
        };
        // 배열에서 가장 큰값의 인덱스 반환
        this.getBiggerValue = function(arr) {

        	var idx = 0;
        	var prev = 0;
        	var isSame = false;

        	for (var i = 0; i < arr.length; i++) {
        		if (prev < parseFloat(arr[i])) {
        			prev = parseFloat(arr[i]);
        			isSame = false;
        			idx = i;
        		} else if (prev == parseFloat(arr[i])) {
        			isSame = true;
        		} else {
        		}
        	}
        	if (isSame)
        		idx = -1;

        	return idx;
        }


        //노동력 자동계산 호출 함수
        this.area_cancolumnchange = function(obj:nexacro.NormalDataset,e:nexacro.DSColChangeEventInfo) {
        	if(e.columnid == "frestGrdnnArea"){
        		this.frestGrdnnAccmlArea(e.row, e.newvalue, this.dsFrestGrdnnWPLs.getColumn(e.row, "frestGrdnnNmtm"));
        	}else if(e.columnid == "frestGrdnnNmtm"){
        		this.frestGrdnnAccmlArea(e.row, this.dsFrestGrdnnWPLs.getColumn(e.row, "frestGrdnnArea"), e.newvalue);
        	}

        	if(e.columnid == "affrsPrfldArrnmArea" || e.columnid == "affrsArea" || e.columnid == "frestGrdnnArea" || e.columnid == "frtrePrdctWdvlm" || e.columnid == "fcltsQntt"){
        		var type;
        		if(e.columnid == "affrsPrfldArrnmArea") type = 0; //조림예정지 (삭제예정)
        		if(e.columnid == "affrsArea") type = 1; //조림
        		if(e.columnid == "frestGrdnnArea") type = 2; //숲가꾸기
        		if(e.columnid == "frtrePrdctWdvlm") type = 3; //임목생산
        		if(e.columnid == "fcltsQntt") type = 4; //시설
        		this.attachAreaBlur(e.newvalue, type, e.row);
        	}
        };
        */
        /*
        this.divBtn_btnList_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        	var oArg = {};
        	if(Object.keys(publicArgs).includes('backPage')) {
        		backPage = publicArgs['backPage'];
        	}
        	if(Object.keys(publicArgs).includes('searchParams')) {
        		oArg['searchParams'] = publicArgs['searchParams'];
        	}

        	this.gfnSetUrl(backPage, oArg);
        };
        */
        this.loadGis = function() {
        	var strReqParm = "callType=miniGis";
        	strReqParm += "&callMapWidth=" + this.divMap.form.webFlrpln.getOffsetWidth() + "px";
        	strReqParm += "&callMapHeight=" + this.divMap.form.webFlrpln.height + "px";

        	var reqParm = {			 	// GIS 인터페이스 파라미터
        		wplar_id : this.dsWplbkVO.getColumn(0, 'wplarId')
        		, nxtrm_no : this.dsWplbkVO.getColumn(0, 'nxtrmNo')
        		, cmblc_id : this.dsWplbkVO.getColumn(0, 'cmblcId')
        		, sblt_id : this.dsWplbkVO.getColumn(0, 'sbltId')
        		, isMove : true
        		, isOutput : true
        	};

        	strReqParm += "&callFunc=fgisNfmGisMoveIF.sbkfmGisMove";
        	strReqParm += "&callParm=";
        	strReqParm += encodeURIComponent(JSON.stringify(reqParm));

        	var urlPath = window.location.protocol + "//" + window.location.host; //localhost:8084까지 세팅
        	this.divMap.form.webFlrpln.set_url(urlPath+"/fgis/cmmn/fgisMain.do?"+strReqParm);
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divWplbk.form.cmbSpwodKindCd.addEventHandler("onitemchanged",this.divWplbk_cmbSpwodKindCd_onitemchanged,this);
            this.divWplbk.form.edtSbltId.addEventHandler("onkillfocus",this.divWplbk_edtSbltId_onkillfocus,this);
            this.divWplbk.form.btnMhrSbltHstry.addEventHandler("onclick",this.divWplbk_btnMhrSbltHstry_onclick,this);
            this.divWplbk.form.edtCmblcId.addEventHandler("onkillfocus",this.divWplbk_edtSbltId_onkillfocus,this);
            this.Static03_00_00_00.addEventHandler("onclick",this.Static03_00_onclick,this);
            this.Static03_00.addEventHandler("onclick",this.Static03_00_onclick,this);
            this.divAreaSkill.form.stlndArea.addEventHandler("onchanged",this.divAreaSkill_onArea_onchanged,this);
            this.divAreaSkill.form.blankArea.addEventHandler("onchanged",this.divAreaSkill_onArea_onchanged,this);
            this.divAreaSkill.form.nfrtldArea.addEventHandler("onchanged",this.divAreaSkill_onArea_onchanged,this);
            this.divAreaSkill.form.rdoSkill.addEventHandler("onitemchanged",this.divAreaSkill_rdoSkill_onitemchanged,this);
            this.Static03_00_00.addEventHandler("onclick",this.Static03_00_onclick,this);
            this.divGoalFrtp.form.mcbKoftr.addEventHandler("onitemchanged",this.divGoalFrtp_mcbKoftr_onitemchanged,this);
            this.divGoalFrtp.form.goalFrtpCont.addEventHandler("onchanged",this.divGoalFrtp_goalFrtpCont_onchanged,this);
            this.Static03_00_01.addEventHandler("onclick",this.Static03_00_onclick,this);
            this.Static03_00_01_00.addEventHandler("onclick",this.Static03_00_onclick,this);
            this.Static03_00_01_01.addEventHandler("onclick",this.Static03_00_onclick,this);
            this.Static03_00_01_01_01.addEventHandler("onclick",this.Static03_00_onclick,this);
            this.grdAtmtcCscct.addEventHandler("onheadclick",this.grd_onheadclick,this);
            this.Static03_00_01_01_01_00.addEventHandler("onclick",this.Static03_00_onclick,this);
            this.grdLwvgt.addEventHandler("onheadclick",this.grd_onheadclick,this);
            this.grdLwvgt.addEventHandler("oncellclick",this.grd_oncellclick,this);
            this.Static03_00_01_01_01_00_00.addEventHandler("onclick",this.Static03_00_onclick,this);
            this.divSpcfcFoprd.form.chkSeedPckngPsbltyYn.addEventHandler("onclick",this.divSpcfcFoprd_seedPckngPssblYn_onclick,this);
            this.Static03_00_01_01_01_00_01_01.addEventHandler("onclick",this.Static03_00_onclick,this);
            this.Static03_00_01_01_01_00_01_01_00.addEventHandler("onclick",this.Static03_00_onclick,this);
            this.Static03_00_01_01_01_00_01_01_00_00.addEventHandler("onclick",this.Static03_00_onclick,this);
            this.Static03_00_01_01_01_00_01_01_00_00_00.addEventHandler("onclick",this.Static03_00_onclick,this);
            this.Static03_00_01_01_01_00_01_01_00_00_00_00.addEventHandler("onclick",this.Static03_00_onclick,this);
            this.divBtn.form.btnList.addEventHandler("onclick",this.divBtn_btnList_onclick,this);
            this.btnBfrNxtrm.addEventHandler("onclick",this.divWplbk_btnBfrNxtrm_onclick,this);
            this.Static03_00_01_01_00.addEventHandler("onclick",this.Static03_00_onclick,this);
            this.dsMnfrsExmn.addEventHandler("oncolumnchanged",this.dsMnfrsExmn_oncolumnchanged,this);
            this.dsKoftrExmn.addEventHandler("oncolumnchanged",this.dsKoftrExmn_oncolumnchanged,this);
            this.dsAffrsWPLs.addEventHandler("cancolumnchange",this.area_cancolumnchange,this);
            this.dsFrestGrdnnWPLs.addEventHandler("cancolumnchange",this.area_cancolumnchange,this);
            this.dsFrtrePrdctWPLs.addEventHandler("cancolumnchange",this.area_cancolumnchange,this);
            this.dsFcltWPLs.addEventHandler("cancolumnchange",this.area_cancolumnchange,this);
            this.dsEarnWPLs.addEventHandler("cancolumnchange",this.area_cancolumnchange,this);
        };
        this.loadIncludeScript("wplbkViewHstry.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
