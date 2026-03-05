(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("wplbkSave");
            this.set_titletext("경영계획부 저장 및 변경");
            if (Form == this.constructor)
            {
                this._setFormPosition(1240,5740);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"wplarId\" type=\"STRING\" size=\"256\"/><Column id=\"nxtrmNo\" type=\"STRING\" size=\"256\"/><Column id=\"wplbkNo\" type=\"STRING\" size=\"256\"/><Column id=\"formType\" type=\"STRING\" size=\"256\"/><Column id=\"bizDataTypeTpcd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWplbkVO", this);
            obj._setContents("<ColumnInfo><Column id=\"wplbkNo\" type=\"STRING\" size=\"256\"/><Column id=\"wplarId\" type=\"STRING\" size=\"256\"/><Column id=\"nxtrmNo\" type=\"STRING\" size=\"256\"/><Column id=\"cmblcId\" type=\"STRING\" size=\"256\"/><Column id=\"sbltId\" type=\"STRING\" size=\"256\"/><Column id=\"spwodKindCd\" type=\"STRING\" size=\"256\"/><Column id=\"spwodDetlKindCd\" type=\"STRING\" size=\"256\"/><Column id=\"stlndArea\" type=\"STRING\" size=\"256\"/><Column id=\"blankArea\" type=\"STRING\" size=\"256\"/><Column id=\"nfrtldArea\" type=\"STRING\" size=\"256\"/><Column id=\"lfenvFrsrsrSkillTpcd\" type=\"STRING\" size=\"256\"/><Column id=\"ntrEnvrnFrsrsrSkillTpcd\" type=\"STRING\" size=\"256\"/><Column id=\"crparSkillTpcd\" type=\"STRING\" size=\"256\"/><Column id=\"dprrsSkillTpcd\" type=\"STRING\" size=\"256\"/><Column id=\"mnfrsRcrfrSkillTpcd\" type=\"STRING\" size=\"256\"/><Column id=\"tmbrPdfrtSkillTpcd\" type=\"STRING\" size=\"256\"/><Column id=\"goalFrtpCn\" type=\"STRING\" size=\"256\"/><Column id=\"addtnMttr\" type=\"STRING\" size=\"256\"/><Column id=\"bizBckgrCn\" type=\"STRING\" size=\"256\"/><Column id=\"jobDirctCn\" type=\"STRING\" size=\"256\"/><Column id=\"sbltHstry\" type=\"STRING\" size=\"256\"/><Column id=\"mngMttr\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileId\" type=\"STRING\" size=\"256\"/><Column id=\"mnfrsMcbtpYn\" type=\"STRING\" size=\"256\"/><Column id=\"bizDataTypeTpcd\" type=\"STRING\" size=\"256\"/><Column id=\"mthrSbltHstry1\" type=\"STRING\" size=\"256\"/><Column id=\"mthrSbltHstry2\" type=\"STRING\" size=\"256\"/><Column id=\"mthrSbltHstry3\" type=\"STRING\" size=\"256\"/><Column id=\"attchFiles\" type=\"STRING\" size=\"256\"/><Column id=\"wpalrNm\" type=\"STRING\" size=\"256\"/><Column id=\"instNm\" type=\"STRING\" size=\"256\"/><Column id=\"chgWplbkNo\" type=\"STRING\" size=\"256\"/><Column id=\"orgWplbkNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"koftrCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizPrdctnWdvlm\" type=\"STRING\" size=\"256\"/><Column id=\"wplbkBizSeq\" type=\"STRING\" size=\"256\"/><Column id=\"koftrNm\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsCmblc", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBizUntprList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMngmtPlanBizUntprcVO", this);
            obj._setContents("<ColumnInfo><Column id=\"pjtco\" type=\"STRING\" size=\"256\"/><Column id=\"bsnkdTpcd\" type=\"STRING\" size=\"256\"/><Column id=\"slsysCd\" type=\"STRING\" size=\"256\"/><Column id=\"lbperVl\" type=\"STRING\" size=\"256\"/><Column id=\"bsvlUnitCrtrCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bsvlUnitCrtrCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMthrSbltHstry", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("<ColumnInfo><Column id=\"wplbkNo\" type=\"STRING\" size=\"256\"/><Column id=\"rqdocNo\" type=\"STRING\" size=\"256\"/><Column id=\"result\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnBfrNxtrmSbltDsgn",null,"22","130","32","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("전차기소반지정");
            obj.set_cssclass("btn_WF_module_line");
            this.addChild(obj.name, obj);

            obj = new Button("btnList",null,"22","70","32","btnBfrNxtrmSbltDsgn:6",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_common01");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","0","123","32",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("일반조사");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("divWplbk","0","staTitle00:36",null,"82","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("divWplbk");
            obj.set_cssclass("div_DA");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","0","11.05%",null,null,"44",null,null,null,null,this.divWplbk.form);
            obj.set_taborder("0");
            obj.set_text("관리소");
            obj.set_cssclass("sta_DA_label_L");
            this.divWplbk.addChild(obj.name, obj);

            obj = new Static("sta01","0","sta00:0","11.05%",null,null,"7",null,null,null,null,this.divWplbk.form);
            obj.set_taborder("7");
            obj.set_text("임반");
            obj.set_cssclass("sta_DA_label_L");
            this.divWplbk.addChild(obj.name, obj);

            obj = new Static("sta00_00","30%","0","11.05%",null,null,"44",null,null,null,null,this.divWplbk.form);
            obj.set_taborder("2");
            obj.set_text("경영계획구");
            obj.set_cssclass("sta_DA_label_C");
            this.divWplbk.addChild(obj.name, obj);

            obj = new Static("instNm","sta00:10","4",null,"28","sta00_00:10",null,null,null,null,null,this.divWplbk.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_textAlign("left");
            this.divWplbk.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","60%","0","11.05%",null,null,"44",null,null,null,null,this.divWplbk.form);
            obj.set_taborder("4");
            obj.set_text("전차기소반");
            obj.set_cssclass("sta_DA_label_C");
            this.divWplbk.addChild(obj.name, obj);

            obj = new Static("sta02","30%","sta00_00:0","11.05%",null,null,"7",null,null,null,null,this.divWplbk.form);
            obj.set_taborder("9");
            obj.set_text("소반");
            obj.set_cssclass("sta_DA_label_C");
            this.divWplbk.addChild(obj.name, obj);

            obj = new Static("sta03","60%","sta00_00_00:0","11.05%",null,null,"7",null,null,null,null,this.divWplbk.form);
            obj.set_taborder("11");
            obj.set_text("특수림 구분");
            obj.set_cssclass("sta_DA_label_C");
            this.divWplbk.addChild(obj.name, obj);

            obj = new Combo("cmbSpwodKindCd","sta03:10","40","180","28",null,null,null,null,null,null,this.divWplbk.form);
            obj.set_taborder("12");
            obj.set_innerdataset("dsSpwodKindCd");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_visible("true");
            obj.set_displaynulltext("선택");
            this.divWplbk.addChild(obj.name, obj);

            obj = new MaskEdit("edtSbltId","sta02:10","40",null,"28","sta03:10",null,null,null,null,null,this.divWplbk.form);
            obj.set_taborder("10");
            obj.set_maskchar("_");
            obj.set_format("###-###");
            obj.set_trimtype("none");
            obj.set_displaynulltext("___-___");
            obj.set_type("string");
            this.divWplbk.addChild(obj.name, obj);

            obj = new Combo("cmbSpwodDetlKindCd","cmbSpwodKindCd:6","40","130","28",null,null,null,null,null,null,this.divWplbk.form);
            obj.set_taborder("13");
            obj.set_visible("false");
            obj.set_displaynulltext("선택");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_text("");
            this.divWplbk.addChild(obj.name, obj);

            obj = new Static("wplarNm","sta00_00:10","4",null,"28","sta00_00_00:10",null,null,null,null,null,this.divWplbk.form);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_textAlign("left");
            this.divWplbk.addChild(obj.name, obj);

            obj = new Combo("cmbCmblcId","sta01:10","40",null,"28","sta02:10",null,null,null,null,null,this.divWplbk.form);
            obj.set_taborder("8");
            obj.set_displaynulltext("선택");
            obj.set_innerdataset("dsCmblc");
            obj.set_codecolumn("value");
            obj.set_datacolumn("name");
            obj.set_value("");
            obj.set_index("-1");
            this.divWplbk.addChild(obj.name, obj);

            obj = new Combo("cmbMthrSbltHstry","sta00_00_00:10","4","200","28",null,null,null,null,null,null,this.divWplbk.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsMthrSbltHstry");
            obj.set_visible("true");
            obj.set_displaynulltext("선택");
            obj.set_codecolumn("value");
            obj.set_datacolumn("value");
            obj.set_text("");
            this.divWplbk.addChild(obj.name, obj);

            obj = new Button("btnMhrSbltHstry","cmbMthrSbltHstry:6","4","60","28",null,null,null,null,null,null,this.divWplbk.form);
            obj.set_taborder("6");
            obj.set_text("보기");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_searchTxt ");
            this.divWplbk.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00","0","divWplbk:30","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("소재지");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btnLctnDel",null,"divWplbk:32","78","32","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_module_line");
            this.addChild(obj.name, obj);

            obj = new Button("btnLctnAddtn",null,"divWplbk:32","100","32","btnLctnDel:6",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("소재지추가");
            obj.set_cssclass("btn_WF_module_line");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSbltLctn","0","Static03_00_00_00:20",null,"142","0",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid0");
            obj.set_taborder("6");
            obj.set_autofittype("col");
            obj.set_binddataset("dsSbltLctn");
            obj.set_nodatatext("\"소재지 추가\"버튼을 클릭하여 소재지를 추가하십시오.");
            obj.set_autoupdatetype("none");
            obj.set_scrollbartype("none auto");
            obj.set_cssclass("grd_detail");
            obj.set_enableevent("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"58\"/><Column size=\"76\"/><Column size=\"528\"/><Column size=\"277\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"번호\"/><Cell col=\"2\" text=\"소재지\"/><Cell col=\"3\" text=\"PNU\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" expr=\"currow + 1\"/><Cell col=\"2\" text=\"bind:lctnDaddr\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:pnuCd\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","0","grdSbltLctn:30","322","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("면적 및 기능");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divAreaSkill","0","Static03_00:20","710","268",null,null,null,null,null,null,this);
            obj.set_taborder("9");
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
            obj.set_taborder("27");
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
            obj.set_format("0.####");
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
            obj.set_cssclass("point");
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
            obj.set_format("0.####");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new Static("staLabel06","68","222","102","37",null,null,null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("11");
            obj.set_text("제지");
            obj.set_cssclass("sta_DA_label_L");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new MaskEdit("nfrtldArea","staLabel06:10","226",null,"28","Static10:10.990999999999985",null,null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("12");
            obj.set_format("0.####");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new Static("staLabel07_00","45.21%","0","160","37",null,null,null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("13");
            obj.set_text("구분");
            obj.set_cssclass("sta_DA_label_R");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new Static("staLabel07_00_00","67.46%","0","118","37",null,null,null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("14");
            obj.set_text("주기능");
            obj.set_cssclass("sta_DA_label_R");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new Static("staLabel07_00_00_00","83.66%","0","116","37",null,null,null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("15");
            obj.set_text("보조기능");
            obj.set_cssclass("sta_DA_label_R");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new Static("sta00_00","49.01%","37","119","37",null,null,null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("16");
            obj.set_text("생활환경보존림");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","49.01%","74","119","37",null,null,null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("17");
            obj.set_text("자연환경보존림");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00","49.01%","110","119","37",null,null,null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("18");
            obj.set_text("수원함양림");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00","49.01%","147","119","37",null,null,null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("19");
            obj.set_text("산지재해방지림");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00_00","49.01%","183","119","37",null,null,null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("20");
            obj.set_text("산림휴양림");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00_00_00","49.01%","218","119","37",null,null,null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("21");
            obj.set_text("목재생산림");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new Radio("rdoSkill","74.37%","38","43","222",null,null,null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("22");
            obj.set_columncount("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divAreaSkill_form_rdoSkill_innerdataset = new nexacro.NormalDataset("divAreaSkill_form_rdoSkill_innerdataset", obj);
            divAreaSkill_form_rdoSkill_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">lfenvFrsrsrSkillTpcd</Col><Col id=\"datacolumn\"/></Row><Row><Col id=\"codecolumn\">ntrEnvrnFrsrsrSkillTpcd</Col><Col id=\"datacolumn\"/></Row><Row><Col id=\"codecolumn\">crparSkillTpcd</Col><Col id=\"datacolumn\"/></Row><Row><Col id=\"codecolumn\">dprrsSkillTpcd</Col><Col id=\"datacolumn\"/></Row><Row><Col id=\"codecolumn\">mnfrsRcrfrSkillTpcd</Col><Col id=\"datacolumn\"/></Row><Row><Col id=\"codecolumn\">tmbrPdfrtSkillTpcd</Col><Col id=\"datacolumn\"/></Row></Rows>");
            obj.set_innerdataset(divAreaSkill_form_rdoSkill_innerdataset);
            obj.set_text("");
            obj.set_value("");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new CheckBox("checkBox0","90.85%","41","21","28",null,null,null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("23");
            obj.set_visible("true");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new CheckBox("checkBox1","90.85%","78","21","28",null,null,null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("24");
            obj.set_text("");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new CheckBox("checkBox2","90.85%","117","21","28",null,null,null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("25");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new CheckBox("checkBox3","90.85%","153","21","28",null,null,null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("26");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new CheckBox("checkBox4","90.85%","189","21","28",null,null,null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("29");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new CheckBox("checkBox5","90.85%","227","21","28",null,null,null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("28");
            obj.set_enable("true");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new Static("Static10_00","staLabel01:-1","37","151",null,null,"156",null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("sta_DA_row_R");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new MaskEdit("areaTotal","staLabel01:10","60",null,"28","Static10:10",null,null,null,null,null,this.divAreaSkill.form);
            obj.set_taborder("3");
            obj.set_cssclass("point");
            obj.set_value("0.00");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.divAreaSkill.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","730","grdSbltLctn:30","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("법정지정림");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSttyApwod","divAreaSkill:30","Static03_00_00:20",null,"260","0",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid0");
            obj.set_taborder("12");
            obj.set_autofittype("col");
            obj.set_binddataset("dsSttyApwod");
            obj.set_cssclass("grd_detail");
            obj.set_autoenter("select");
            obj.set_fillareatype("none");
            obj.set_border("1px solid #52aaa4,0px none,1px solid #e2e2e2");
            obj.set_nodatatext("데이터가 없습니다!");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"76\"/><Column size=\"249\"/><Column size=\"132\"/><Column size=\"48\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"법정지정림\"/><Cell col=\"2\" colspan=\"2\" text=\"면적\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" border=\"1px solid #e2e2e2,0px none,1px solid #e2e2e2,1px solid #e2e2e2\" tooltiptype=\"hover\" text=\"bind:chk\" controlautosizingtype=\"both\"/><Cell col=\"1\" displaytype=\"combocontrol\" edittype=\"combo\" border=\"1px solid #e2e2e2,0px none,1px solid #e2e2e2,1px solid #e2e2e2\" combodataset=\"dsSttyApwodCd\" combocodecol=\"code\" combodatacol=\"data\" tooltiptype=\"hover\" text=\"bind:sttyApwodCd\" controlautosizingtype=\"both\"/><Cell col=\"2\" text=\"bind:sttyApwodArea\" displaytype=\"maskeditcontrol\" edittype=\"mask\" border=\"1px solid #e2e2e2,0px none,1px solid #e2e2e2,1px solid #e2e2e2\" maskeditformat=\"##,###0.##\"/><Cell col=\"3\" cssclass=\"cell_unit\" text=\"ha\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnSttyApwodDel",null,"grdSbltLctn:32","78","32","0",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_module_line");
            this.addChild(obj.name, obj);

            obj = new Button("btnSttyApwodAddtn",null,"grdSbltLctn:32","78","32","btnSttyApwodDel:6",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_module_line");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","divAreaSkill:30","123","32",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("목표임상");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("divGoalFrtp","0","staTitle01:20",null,"149","0",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("divGoalFrtp");
            obj.set_cssclass("div_DA");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_01","0","37",null,"111","0",null,null,null,null,null,this.divGoalFrtp.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_DA_rowAll");
            this.divGoalFrtp.addChild(obj.name, obj);

            obj = new Static("staLabel00","0","0","170","37",null,null,null,null,null,null,this.divGoalFrtp.form);
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
            obj.set_readonly("false");
            obj.set_acceptvaluetype("allowinvalid");
            obj.set_codecolumn("code");
            obj.set_edittype("text");
            obj.set_text("");
            obj.set_index("-1");
            this.divGoalFrtp.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","0","37","170","111",null,null,null,null,null,null,this.divGoalFrtp.form);
            obj.set_taborder("2");
            obj.set_text("특이사항");
            obj.set_cssclass("sta_DA_label_L");
            this.divGoalFrtp.addChild(obj.name, obj);

            obj = new TextArea("goalFrtpCn","staLabel00_00:10","41",null,"102","10",null,null,null,null,null,this.divGoalFrtp.form);
            obj.set_taborder("3");
            obj.set_wordWrap("char");
            this.divGoalFrtp.addChild(obj.name, obj);

            obj = new Static("staTitle02","0","divGoalFrtp:30","123","32",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("산림조사");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_01","0","staTitle02:20","322","28",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("지세");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdShp","0","Static03_00_01:20","500","76",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid0");
            obj.set_taborder("18");
            obj.set_cssclass("grd_detail");
            obj.set_binddataset("dsMnfrsExmn");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_scrollbartype("none none");
            obj.set_selecttype("cell");
            obj.set_nodatatext("데이터가 없습니다!");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"108\"/><Column size=\"190\"/><Column size=\"100\"/><Column size=\"30\"/><Column size=\"100\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell text=\"방위\"/><Cell col=\"1\" text=\"경사도\"/><Cell col=\"2\" colspan=\"3\" text=\"표고 (m)\"/></Band><Band id=\"body\"><Cell displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsOrbrnCd\" combocodecol=\"code\" combodatacol=\"data\" text=\"bind:orbrnCd\" combodisplaynulltext=\"선택\"/><Cell col=\"1\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsGrdntCd\" combocodecol=\"code\" combodatacol=\"data\" text=\"bind:grdntCd\" combodisplaynulltext=\"선택\"/><Cell col=\"2\" displaytype=\"maskeditcontrol\" edittype=\"mask\" padding=\"4px 4px 4px 10px\" border=\"1px solid #e2e2e2,0px none,1px solid #e2e2e2,1px solid #e2e2e2\" text=\"bind:alttdMnmmVl\" maskeditlimitbymask=\"integer\"/><Cell col=\"3\" text=\"~\" padding=\"0px\" border=\"1px solid #e2e2e2,0px none,1px solid #e2e2e2,1px solid #e2e2e2\"/><Cell col=\"4\" displaytype=\"maskeditcontrol\" edittype=\"mask\" padding=\"4px 10px 4px 4px\" text=\"bind:alttdMxmmVl\" maskeditlimitbymask=\"integer\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_01_00","Static03_00_01:193","staTitle02:20","322","28",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("토양");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSoil","grdShp:30","Static03_00_01_00:20",null,"76","0",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid0");
            obj.set_taborder("20");
            obj.set_cssclass("grd_detail");
            obj.set_binddataset("dsMnfrsExmn");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_scrollbartype("none none");
            obj.set_selecttype("cell");
            obj.set_nodatatext("데이터가 없습니다!");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"180\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell text=\"토성\"/><Cell col=\"1\" text=\"유효토심\"/><Cell col=\"2\" text=\"건습도\"/><Cell col=\"3\" text=\"지리\" cssclass=\"cell_end\"/></Band><Band id=\"body\"><Cell displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsScstxCd\" combocodecol=\"code\" combodatacol=\"data\" text=\"bind:mnfrsExmnScstxCd\" combodisplaynulltext=\"선택\"/><Cell col=\"1\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsSldptTpcd\" combocodecol=\"code\" combodatacol=\"data\" text=\"bind:vldSldptTpcd\" combodisplaynulltext=\"선택\"/><Cell col=\"2\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsHgdgrTpcd\" combocodecol=\"code\" combodatacol=\"data\" text=\"bind:hgdgrTpcd\" combodisplaynulltext=\"선택\"/><Cell col=\"3\" displaytype=\"combocontrol\" edittype=\"combo\" cssclass=\"cell_end\" combodataset=\"dsMnfrsExmnGgrphCd\" combocodecol=\"code\" combodatacol=\"data\" text=\"bind:mnfrsExmnGgrphCd\" combodisplaynulltext=\"선택\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdKoftrExmn","0","1231",null,"282","0",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid0");
            obj.set_taborder("23");
            obj.set_cssclass("grd_detail");
            obj.set_binddataset("dsKoftrExmn");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_scrollbartype("auto auto");
            obj.set_border("1px solid #52aaa4,0px none,1px solid #e2e2e2");
            obj.set_nodatatext("데이터가 없습니다!");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"50\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"20\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"20\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"20\"/><Column size=\"80\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"번호\"/><Cell col=\"2\" text=\"수종\"/><Cell col=\"3\" text=\"혼효율(%)\"/><Cell col=\"4\" colspan=\"3\" text=\"임령(평균, 최소~최대)\"/><Cell col=\"7\" text=\"영급\"/><Cell col=\"8\" colspan=\"3\" text=\"수고(평균, 최소~최대)\"/><Cell col=\"11\" colspan=\"3\" text=\"경급(평균, 최소~최대)\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" rowspan=\"2\" expr=\"currow + 1\"/><Cell col=\"2\" rowspan=\"2\" displaytype=\"combocontrol\" edittype=\"combo\" padding=\"20px 10px\" combodataset=\"dsKoftrCd\" combocodecol=\"code\" combodatacol=\"data\" combodisplayrowcount=\"15\" text=\"bind:koftrCd\" combodisplaynulltext=\"선택\"/><Cell col=\"3\" rowspan=\"2\" displaytype=\"maskeditcontrol\" edittype=\"mask\" padding=\"20px 10px\" text=\"bind:mixtrRt\" maskeditformat=\"##0.#\" editmaxlength=\"3\" maskeditlimitbymask=\"both\"/><Cell col=\"4\" colspan=\"3\" displaytype=\"maskeditcontrol\" edittype=\"mask\" border=\"1px solid #e2e2e2,1px solid #e2e2e2,0px none\" padding=\"6px 10px 2px\" text=\"bind:avrgFrag\" maskeditformat=\"##0\" maskeditlimitbymask=\"integer\"/><Cell col=\"7\" rowspan=\"2\" displaytype=\"textareacontrol\" cssclass=\"point\" text=\"bind:ageClass\" maskedittype=\"string\" padding=\"20px 10px\" textAlign=\"center\"/><Cell col=\"8\" colspan=\"3\" displaytype=\"maskeditcontrol\" edittype=\"mask\" border=\"1px solid #e2e2e2,1px solid #e2e2e2,0px none\" padding=\"6px 10px 2px\" text=\"bind:avrgTrhgh\" maskeditformat=\"##,##0\" maskeditlimitbymask=\"integer\"/><Cell col=\"11\" colspan=\"3\" displaytype=\"maskeditcontrol\" edittype=\"mask\" border=\"1px solid #e2e2e2,1px solid #e2e2e2,0px none\" padding=\"6px 10px 2px\" text=\"bind:avrgDmtr\" maskeditformat=\"##0\" maskeditlimitbymask=\"integer\"/><Cell row=\"1\" col=\"4\" text=\"bind:mnmmFrag\" displaytype=\"maskeditcontrol\" edittype=\"mask\" padding=\"2px 0px 6px 10px\" border=\"1px solid #e2e2e2,0px none,1px solid #e2e2e2,1px solid #e2e2e2\" maskeditformat=\"##0\" maskeditlimitbymask=\"integer\"/><Cell row=\"1\" col=\"5\" text=\"~\" padding=\"0px 0px 2px\" border=\"1px solid #e2e2e2,0px none,1px solid #e2e2e2,1px solid #e2e2e2\"/><Cell row=\"1\" col=\"6\" text=\"bind:mxmmFrag\" displaytype=\"maskeditcontrol\" edittype=\"mask\" padding=\"2px 10px 6px 0px\" maskeditlimitbymask=\"integer\" maskeditformat=\"#,##0\"/><Cell row=\"1\" col=\"8\" text=\"bind:lowstTrhgh\" border=\"1px solid #e2e2e2,0px none,1px solid #e2e2e2,1px solid #e2e2e2\" padding=\"2px 0px 6px 10px\" displaytype=\"maskeditcontrol\" edittype=\"mask\" maskeditformat=\"##,##0\" maskeditlimitbymask=\"integer\"/><Cell row=\"1\" col=\"9\" text=\"~\" padding=\"0px 0px 2px\" border=\"1px solid #e2e2e2,0px none,1px solid #e2e2e2,1px solid #e2e2e2\"/><Cell row=\"1\" col=\"10\" text=\"bind:topTrhgh\" padding=\"2px 10px 6px 0px\" displaytype=\"maskeditcontrol\" edittype=\"mask\" maskeditformat=\"##,##0\" maskeditlimitbymask=\"integer\"/><Cell row=\"1\" col=\"11\" text=\"bind:mainKoftrMnmmDmtr\" border=\"1px solid #e2e2e2,0px none,1px solid #e2e2e2,1px solid #e2e2e2\" padding=\"2px 0px 6px 10px\" displaytype=\"maskeditcontrol\" edittype=\"mask\" maskeditformat=\"##0\" maskeditlimitbymask=\"integer\"/><Cell row=\"1\" col=\"12\" text=\"~\" padding=\"0px 0px 2px\" border=\"1px solid #e2e2e2,0px none,1px solid #e2e2e2,1px solid #e2e2e2\"/><Cell row=\"1\" col=\"13\" text=\"bind:mainKoftrMxmmDmtr\" padding=\"2px 10px 6px 0px\" displaytype=\"maskeditcontrol\" edittype=\"mask\" maskeditformat=\"##0\" maskeditlimitbymask=\"integer\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_01_01","0","grdKoftrExmn:30","70","28",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("임황");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFrstt","0","Static03_00_01_01:20",null,"76","0",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid0");
            obj.set_taborder("27");
            obj.set_cssclass("grd_detail");
            obj.set_binddataset("dsMnfrsExmn");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_scrollbartype("none none");
            obj.set_selecttype("cell");
            obj.set_nodatatext("데이터가 없습니다!");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell text=\"지위지수\"/><Cell col=\"1\" text=\"우세목 수고(m)\"/><Cell col=\"2\" text=\"우세목 임령\"/><Cell col=\"3\" text=\"임종\"/><Cell col=\"4\" text=\"임상\"/><Cell col=\"5\" text=\"소밀도\" cssclass=\"cell_end\"/></Band><Band id=\"body\"><Cell displaytype=\"maskeditcontrol\" cssclass=\"point\" text=\"bind:mnfrsExmnStind\"/><Cell col=\"1\" displaytype=\"maskeditcontrol\" edittype=\"mask\" text=\"bind:dmtreTrhgh\" maskeditformat=\"##,##0.##\" maskeditlimitbymask=\"both\"/><Cell col=\"2\" displaytype=\"maskeditcontrol\" edittype=\"mask\" text=\"bind:dmtreFrag\" maskeditformat=\"#,##0\" maskeditlimitbymask=\"integer\"/><Cell col=\"3\" text=\"bind:frorCd\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsFrorCd\" combocodecol=\"code\" combodatacol=\"data\" combodisplaynulltext=\"선택\"/><Cell col=\"4\" text=\"bind:frtpTpcd\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsFrtpTpcd\" combocodecol=\"code\" combodatacol=\"data\" combodisplaynulltext=\"선택\"/><Cell col=\"5\" text=\"bind:crdnsCd\" displaytype=\"combocontrol\" edittype=\"combo\" cssclass=\"cell_end\" combodataset=\"dsCrdnsCd\" combocodecol=\"code\" combodatacol=\"data\" combodisplaynulltext=\"선택\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","Static03_00_01_01:16","grdKoftrExmn:30","314","32",null,null,"314",null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("입목지가 없는 경우 입력내용이 적용되지 않음");
            obj.set_color("#2a6fce");
            obj.set_cssclass("sta_help_linebox_green");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_01_01_00","0","grdShp:30","157","28",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("주요 수종조사");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btnKoftrExmnDel",null,"grdSoil:32","78","32","0",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_module_line");
            this.addChild(obj.name, obj);

            obj = new Button("btnKoftrExmnAddtn",null,"grdSoil:32","78","32","btnKoftrExmnDel:6",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_module_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_01_01_01","0","grdFrstt:30","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("임목생장");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","Static03_00_01_01_01:16","grdFrstt:30","314","32",null,null,"314",null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("입목지가 없는 경우 입력내용이 적용되지 않음");
            obj.set_color("#2a6fce");
            obj.set_cssclass("sta_help_linebox_green");
            this.addChild(obj.name, obj);

            obj = new Grid("grdAtmtcCscct","0","Static03_00_01_01_01:20",null,"119","0",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid0");
            obj.set_taborder("30");
            obj.set_cssclass("grd_detail");
            obj.set_binddataset("dsMnfrsExmn");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"현실축적\"/><Cell col=\"2\" colspan=\"2\" text=\"법정축적\" textAlign=\"center\" border=\"1px solid #e2e2e2\"/><Cell col=\"4\" colspan=\"3\" border=\"1px solid #e2e2e2\" text=\"연년생장률\"/><Cell row=\"1\" text=\"ha당 축적(㎥/㏊)\"/><Cell row=\"1\" col=\"1\" text=\"총축적(㎥)\"/><Cell row=\"1\" col=\"2\" text=\"ha당 축적(㎥/㏊)\"/><Cell row=\"1\" col=\"3\" text=\"총축적(㎥)\"/><Cell row=\"1\" col=\"4\" text=\"ha당 연간생장량(㎥/㏊)\"/><Cell row=\"1\" col=\"5\" text=\"연간생장량(㎥)\"/><Cell row=\"1\" col=\"6\" text=\"생장율(%)\" cssclass=\"cell_end\"/></Band><Band id=\"body\"><Cell text=\"bind:haPartyRealtAccmnArea\" displaytype=\"maskeditcontrol\" edittype=\"mask\" textAlign=\"right\" maskeditformat=\"###,###.##\" expr=\"nexacro.round(haPartyRealtAccmnArea,2)\"/><Cell col=\"1\" text=\"expr:nexacro.round(realtAccmnTotlSum,0)\" displaytype=\"textareacontrol\" edittype=\"none\" cssclass=\"point\" textAlign=\"right\"/><Cell col=\"2\" text=\"bind:haPartySttyAccmnArea\" displaytype=\"textareacontrol\" edittype=\"none\" cssclass=\"point\" textAlign=\"right\"/><Cell col=\"3\" text=\"bind:sttyAccmnTotlSum\" displaytype=\"textareacontrol\" edittype=\"none\" cssclass=\"point\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:haPartyCanin\" displaytype=\"textareacontrol\" edittype=\"none\" cssclass=\"point\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:caninTotlSum\" displaytype=\"textareacontrol\" edittype=\"none\" cssclass=\"point\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:cairt\" displaytype=\"textareacontrol\" edittype=\"none\" cssclass=\"cell_end,point\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAtmtcCscct",null,"grdFrstt:32","90","32","0",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("자동계산");
            obj.set_cssclass("btn_WF_module_line");
            this.addChild(obj.name, obj);

            obj = new Div("divHelp","0","grdAtmtcCscct:20",null,"90","0",null,null,null,null,null,this);
            obj.set_taborder("32");
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
            obj.set_taborder("33");
            obj.set_text("하층식생");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdLwvgt","0","Static03_00_01_01_01_00:20",null,"149","631",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid0");
            obj.set_taborder("35");
            obj.set_autoenter("select");
            obj.set_binddataset("dsLwvgt");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_detail");
            obj.set_fillareatype("none");
            obj.set_border("1px solid #52aaa4,0px none,1px solid #e2e2e2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"300\"/><Column size=\"140\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"명칭\"/><Cell col=\"2\" text=\"피복율(%)\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:chk\"/><Cell col=\"1\" text=\"bind:lwvgtNm\" edittype=\"text\" displaytype=\"editcontrol\"/><Cell col=\"2\" text=\"bind:lwvgtCvdgr\" expandsize=\"40\" expandshow=\"show\" expandchar=\"%\" displaytype=\"maskeditcontrol\" edittype=\"mask\" maskeditlimitbymask=\"integer\" maskeditformat=\"##0\" maskedittype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnLwvgtDel",null,"divHelp:32","78","32","636",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_module_line");
            this.addChild(obj.name, obj);

            obj = new Button("btnLwvgtAddtn",null,"divHelp:32","78","32","btnLwvgtDel:6",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_module_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_01_01_01_00_00","btnLwvgtDel:6","divHelp:30","121","28",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("특정임산물");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divSpcfcFoprd","grdLwvgt:20","Static03_00_01_01_01_00_00:20",null,"149","0",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_cssclass("div_DA");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0%","0","25.70%","37",null,null,null,null,null,null,this.divSpcfcFoprd.form);
            obj.set_taborder("0");
            obj.set_text("종자채취가능 여부");
            obj.set_cssclass("sta_DA_label_C");
            this.divSpcfcFoprd.addChild(obj.name, obj);

            obj = new Static("Static10_01",null,"0","311","148","0",null,null,null,null,null,this.divSpcfcFoprd.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_DA_row_R");
            obj.set_text("");
            this.divSpcfcFoprd.addChild(obj.name, obj);

            obj = new Static("sta00_00","0","37","25.70%","37",null,null,null,null,null,null,this.divSpcfcFoprd.form);
            obj.set_taborder("2");
            obj.set_text("종류");
            obj.set_cssclass("sta_DA_label_C");
            this.divSpcfcFoprd.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","0","74","25.70%","37",null,null,null,null,null,null,this.divSpcfcFoprd.form);
            obj.set_taborder("4");
            obj.set_text("수종");
            obj.set_cssclass("sta_DA_label_C");
            this.divSpcfcFoprd.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00","0","111","25.70%","37",null,null,null,null,null,null,this.divSpcfcFoprd.form);
            obj.set_taborder("6");
            obj.set_text("가능량(kg)");
            obj.set_cssclass("sta_DA_label_C");
            this.divSpcfcFoprd.addChild(obj.name, obj);

            obj = new CheckBox("chkSeedPckngPsbltyYn","sta00:10","3","42","28",null,null,null,null,null,null,this.divSpcfcFoprd.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_value("false");
            this.divSpcfcFoprd.addChild(obj.name, obj);

            obj = new Combo("cmbSdgthTpcd","sta00_00:10","41",null,"28","Static10_01:10",null,null,null,null,null,this.divSpcfcFoprd.form);
            obj.set_taborder("3");
            obj.set_displaynulltext("선택");
            obj.set_enable("false");
            obj.set_innerdataset("dsSdgthTpcd");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_text("");
            this.divSpcfcFoprd.addChild(obj.name, obj);

            obj = new Combo("cmbSdgthKoftrCd","sta00_00_00:10","78",null,"28","Static10_01:10",null,null,null,null,null,this.divSpcfcFoprd.form);
            obj.set_taborder("5");
            obj.set_displaynulltext("선택");
            obj.set_enable("false");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            this.divSpcfcFoprd.addChild(obj.name, obj);

            obj = new MaskEdit("edtsdgthPsbltyQntt","sta00_00_00_00:10","115",null,"28","Static10_01:10",null,null,null,null,null,this.divSpcfcFoprd.form);
            obj.set_taborder("7");
            obj.set_enable("false");
            obj.set_format("#,##0.#");
            obj.set_limitbymask("both");
            this.divSpcfcFoprd.addChild(obj.name, obj);

            obj = new Static("staLabel07",null,"0","311","37","0",null,null,null,null,null,this.divSpcfcFoprd.form);
            obj.set_taborder("9");
            obj.set_text("특정임산물명");
            obj.set_cssclass("sta_DA_label_R");
            this.divSpcfcFoprd.addChild(obj.name, obj);

            obj = new TextArea("txtSpcfcFoprdNm",null,"staLabel07:6","290","99","10",null,null,null,null,null,this.divSpcfcFoprd.form);
            obj.set_initvalueid("iv_TextArea0");
            obj.set_taborder("10");
            obj.set_wordWrap("char");
            this.divSpcfcFoprd.addChild(obj.name, obj);

            obj = new Static("Static03_00_01_01_01_00_01","0","grdLwvgt:30","187","28",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("야장첨부파일");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divAtchFile","0","Static03_00_01_01_01_00_01:20",null,"222","0",null,null,null,null,null,this);
            obj.set_taborder("40");
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
            obj.set_taborder("41");
            obj.set_text("추가사항");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divAddtnMttr","0","Static03_00_01_01_01_00_01_00:20",null,"140","0",null,null,null,null,null,this);
            obj.set_taborder("42");
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

            obj = new TextArea("txtAddtnMttr","staLabel00:10","6",null,null,"10","6",null,null,null,null,this.divAddtnMttr.form);
            obj.set_initvalueid("iv_TextArea0");
            obj.set_taborder("2");
            obj.set_wordWrap("char");
            this.divAddtnMttr.addChild(obj.name, obj);

            obj = new Static("staTitle00_00_00","0","divAddtnMttr:67","200","32",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("계획수립정보");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00_00","0","staTitle00_00_00:20","200","32",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("계획수립배경");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("divPlanEtmtBckgr","0","staTitle00_00:20",null,"112","0",null,null,null,null,null,this);
            obj.set_taborder("46");
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

            obj = new TextArea("txtBizBckgrCn","staLabel00_00:10","6",null,null,"10","6",null,null,null,null,this.divPlanEtmtBckgr.form);
            obj.set_taborder("2");
            obj.set_wordWrap("char");
            this.divPlanEtmtBckgr.addChild(obj.name, obj);

            obj = new Static("staTitle01_00","0","divPlanEtmtBckgr:30","141","32",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("작업지시서");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("divJobDirctDoc","0","staTitle01_00:20",null,"111","0",null,null,null,null,null,this);
            obj.set_taborder("48");
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

            obj = new TextArea("txtJobDirctCn","staLabel00:10","6",null,null,"10","6",null,null,null,null,this.divJobDirctDoc.form);
            obj.set_initvalueid("iv_TextArea0");
            obj.set_taborder("2");
            obj.set_wordWrap("char");
            this.divJobDirctDoc.addChild(obj.name, obj);

            obj = new Static("staTitle02_00","0","divJobDirctDoc:30","123","32",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("소반연혁");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("divSbltHstr","0","staTitle02_00:20",null,"111","0",null,null,null,null,null,this);
            obj.set_taborder("50");
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

            obj = new TextArea("txtSbltHstry","staLabel00_00:10","6",null,null,"10","6",null,null,null,null,this.divSbltHstr.form);
            obj.set_taborder("2");
            obj.set_wordWrap("char");
            this.divSbltHstr.addChild(obj.name, obj);

            obj = new Static("staTitle03_00","0","divSbltHstr:30","141","32",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("관리사항");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("divMngMttr","0","staTitle03_00:20",null,"111","0",null,null,null,null,null,this);
            obj.set_taborder("52");
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

            obj = new TextArea("txtMngMttr","staLabel00_00:10","6",null,null,"10","6",null,null,null,null,this.divMngMttr.form);
            obj.set_taborder("2");
            obj.set_wordWrap("char");
            this.divMngMttr.addChild(obj.name, obj);

            obj = new Static("staTitle00_01","0","divMngMttr:67","178","32",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("경영계획");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_01_01_01_00_01_01","0","staTitle00_01:20","187","28",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("조림");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdAffrs","0","Static03_00_01_01_01_00_01_01:20",null,"177","0",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid0");
            obj.set_taborder("57");
            obj.set_cssclass("grd_display");
            obj.set_binddataset("dsAffrsWPLs");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_scrollbartype("none auto");
            obj.set_fillareatype("none");
            obj.set_border("1px solid #52aaa4,0px none,1px solid #e2e2e2");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"240\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"90\"/><Column size=\"120\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"번호\"/><Cell col=\"2\" text=\"종별\"/><Cell col=\"3\" text=\"시급성\"/><Cell col=\"4\" text=\"면적(㏊)\"/><Cell col=\"5\" text=\"수종\"/><Cell col=\"6\" text=\"본수(본)\"/><Cell col=\"7\" text=\"조림사유\"/><Cell col=\"8\" text=\"노동력(명)\"/><Cell col=\"9\" text=\"사업비(천원)\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:chk\"/><Cell col=\"1\" expr=\"currow + 1\"/><Cell col=\"2\" displaytype=\"combocontrol\" edittype=\"combo\" combocodecol=\"code\" combodatacol=\"data\" text=\"bind:bizKindCd\" combodataset=\"dsAffrsSpecsTpcd\" combodisplaynulltext=\"선택\" expr=\"dataset.parent.grdAffrs_setDisplayType(dataset, currow,5)\"/><Cell col=\"3\" displaytype=\"combocontrol\" edittype=\"combo\" combocodecol=\"code\" combodatacol=\"data\" text=\"bind:urgntCd\" combodataset=\"dsUrgntCd\" combodisplaynulltext=\"선택\"/><Cell col=\"4\" text=\"bind:bizArea\" displaytype=\"maskeditcontrol\" edittype=\"mask\" maskeditformat=\"#,##0.##\"/><Cell col=\"5\" displaytype=\"expr:bizKindCd == &apos;50&apos; ? &apos;none&apos; : &apos;multicombocontrol&apos;\" multicombodataset=\"dsKoftrCd\" multicombodatacol=\"data\" multicombocodecol=\"code\" text=\"bind:koftrCd\" multicombodisplayrowcount=\"28\" combodisplaynulltext=\"선택\" edittype=\"expr:dataset.parent.fnAffrsSetDisplay(currow,this.col)\" cssclass=\"expr:bizKindCd == &apos;50&apos; ? &apos;cell_bg_grayLight&apos; : &apos;none&apos;\" wordWrap=\"char\" autosizerow=\"limitmin\"/><Cell col=\"6\" text=\"bind:bizQntt\" displaytype=\"expr:bizKindCd == &apos;50&apos; ? &apos;none&apos; : &apos;maskeditcontrol&apos;\" edittype=\"expr:dataset.parent.fnAffrsSetDisplay(currow,this.col)\" maskeditformat=\"###,##0\" cssclass=\"expr:bizKindCd == &apos;50&apos; ? &apos;cell_bg_grayLight&apos; : &apos;none&apos;\" maskeditlimitbymask=\"integer\"/><Cell col=\"7\" text=\"bind:bizRsnCd\" displaytype=\"expr:bizKindCd == &apos;50&apos; ? &apos;none&apos; : &apos;combocontrol&apos;\" edittype=\"expr:dataset.parent.fnAffrsSetDisplay(currow,this.col)\" combocodecol=\"code\" combodatacol=\"data\" combodataset=\"dsAffrsRsnCd\" combodisplaynulltext=\"선택\" cssclass=\"expr:bizKindCd == &apos;50&apos; ? &apos;cell_bg_grayLight&apos; : &apos;none&apos;\"/><Cell col=\"8\" text=\"bind:bizLbper\" displaytype=\"maskeditcontrol\" cssclass=\"point\" edittype=\"mask\" maskeditformat=\"###,##0\"/><Cell col=\"9\" text=\"bind:bizAmt\" displaytype=\"maskeditcontrol\" cssclass=\"point\" maskeditformat=\"###,##0\" edittype=\"mask\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAffrsDel",null,"3699","78","32","0",null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_module_line");
            this.addChild(obj.name, obj);

            obj = new Button("btnAffrsAddtn",null,"3699","78","32","btnAffrsDel:6",null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_module_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_01_01_01_00_01_01_00","0","grdAffrs:30","187","28",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("숲가꾸기");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btnFrestGrdnnDel",null,"3954","78","32","0",null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_module_line");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFrestGrdnn","0","Static03_00_01_01_01_00_01_01_00:20",null,"177","0",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid0");
            obj.set_taborder("61");
            obj.set_cssclass("grd_display");
            obj.set_binddataset("dsFrestGrdnnWPLs");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_scrollbartype("none auto");
            obj.set_fillareatype("none");
            obj.set_border("1px solid #52aaa4,0px none,1px solid #e2e2e2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"번호\"/><Cell col=\"2\" text=\"종별\"/><Cell col=\"3\" text=\"시급성\"/><Cell col=\"4\" text=\"횟수\"/><Cell col=\"5\" text=\"면적(㏊)\"/><Cell col=\"6\" text=\"누적면적(㏊)\"/><Cell col=\"7\" text=\"노동력(명)\"/><Cell col=\"8\" text=\"사업비(천원)\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" expr=\"currow + 1\"/><Cell col=\"2\" text=\"bind:bizKindCd\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsFrestGrdnnSpecsTpcd\" combocodecol=\"code\" combodatacol=\"data\" combodisplaynulltext=\"선택\"/><Cell col=\"3\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsUrgntCd\" combocodecol=\"code\" combodatacol=\"data\" text=\"bind:urgntCd\" combodisplaynulltext=\"선택\"/><Cell col=\"4\" text=\"bind:bizQntt\" displaytype=\"maskeditcontrol\" edittype=\"mask\" maskeditformat=\"###,##0\" maskeditlimitbymask=\"integer\"/><Cell col=\"5\" text=\"bind:bizArea\" displaytype=\"maskeditcontrol\" edittype=\"mask\" maskeditformat=\"#,##0.##\"/><Cell col=\"6\" text=\"bind:bizAccmlArea\" displaytype=\"maskeditcontrol\" cssclass=\"point\" edittype=\"mask\" maskeditformat=\"#,##0.##\"/><Cell col=\"7\" text=\"bind:bizLbper\" displaytype=\"maskeditcontrol\" cssclass=\"point\" edittype=\"mask\" maskeditformat=\"###,##0\"/><Cell col=\"8\" text=\"bind:bizAmt\" displaytype=\"maskeditcontrol\" cssclass=\"point\" maskeditformat=\"###,##0\" edittype=\"mask\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnFrestGrdnnAddtn",null,"3954","78","32","btnFrestGrdnnDel:6",null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_module_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_01_01_01_00_01_01_00_00","0","grdFrestGrdnn:30","187","28",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("목재수확");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFrtrePrdct","0","Static03_00_01_01_01_00_01_01_00_00:20",null,"177","0",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid0");
            obj.set_taborder("65");
            obj.set_cssclass("grd_display");
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_scrollbartype("auto auto");
            obj.set_fillareatype("none");
            obj.set_binddataset("dsFrtrePrdctWPLs");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("row");
            obj.set_border("1px solid #52aaa4,0px none,1px solid #e2e2e2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"167\"/><Column size=\"124\"/><Column size=\"100\"/><Column size=\"167\"/><Column size=\"110\"/><Column size=\"133\"/><Column size=\"116\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"170\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"번호\"/><Cell col=\"2\" text=\"종별\"/><Cell col=\"3\" text=\"시급성\"/><Cell col=\"4\" text=\"면적(㏊)\"/><Cell col=\"5\" text=\"목재수확종\"/><Cell col=\"6\" text=\"목재수확률(%)\"/><Cell col=\"7\" colspan=\"3\" text=\"수종 및 목재수확재적(㎥)\"/><Cell col=\"10\" text=\"총재적(㎥)\"/><Cell col=\"11\" text=\"생산방법\"/><Cell col=\"12\" text=\"노동력(명)\"/><Cell col=\"13\" text=\"사업비(천원)\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" expr=\"currow + 1\"/><Cell col=\"2\" text=\"bind:bizKindCd\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsSctslTpcd\" combocodecol=\"code\" combodatacol=\"data\" combodisplaynulltext=\"선택\" combobuttonsize=\"35\"/><Cell col=\"3\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsUrgntCd\" combocodecol=\"code\" combodatacol=\"data\" text=\"bind:urgntCd\" combodisplaynulltext=\"선택\" combobuttonsize=\"35\"/><Cell col=\"4\" text=\"bind:bizArea\" displaytype=\"maskeditcontrol\" edittype=\"mask\" maskeditformat=\"#,##0.##\"/><Cell col=\"5\" text=\"bind:frtrePrdctnAssrtTpcd\" displaytype=\"combocontrol\" edittype=\"expr:dataset.parent.fnFrtrePrdctSetDisplay(currow, this.col)\" combocodecol=\"code\" combodatacol=\"data\" combodataset=\"dsFellyMthdCd\" combodisplaynulltext=\"선택\" combobuttonsize=\"35\"/><Cell col=\"6\" text=\"bind:frtrePrdctnFellyRt\" displaytype=\"maskeditcontrol\" edittype=\"expr:dataset.parent.fnFrtrePrdctSetDisplay(currow, this.col)\" maskeditformat=\"##0\" maskeditlimitbymask=\"integer\"/><Cell col=\"7\" displaytype=\"textareacontrol\" multicombodataset=\"expr:comp.parent.parent.parent.parent.dsKoftrCd\" multicombodatacol=\"data\" multicombocodecol=\"code\" multicombodisplayrowcount=\"25\" edittype=\"readonly\" text=\"expr:comp.parent.fnSplitLine(koftrNm)\" wordWrap=\"char\" textareascrolltype=\"vertical\" autosizerow=\"limitmin\"/><Cell col=\"8\" displaytype=\"textareacontrol\" edittype=\"readonly\" text=\"expr:comp.parent.fnSplitLine(bizPrdctnWdvlm)\"/><Cell col=\"9\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"cell_btn_field01\" text=\"추가\"/><Cell col=\"10\" text=\"bind:totBizPrdctnWdvlm\" displaytype=\"maskeditcontrol\" cssclass=\"point\" edittype=\"mask\" maskeditformat=\"#,##0.##\"/><Cell col=\"11\" text=\"bind:prdctnMthdCd\" displaytype=\"combocontrol\" edittype=\"combo\" combocodecol=\"code\" combodatacol=\"data\" combodataset=\"dsPrdctnMthdCd\" combodisplaynulltext=\"선택\" combobuttonsize=\"35\"/><Cell col=\"12\" text=\"bind:bizLbper\" displaytype=\"maskeditcontrol\" cssclass=\"point\" edittype=\"mask\" maskeditformat=\"###,##0\"/><Cell col=\"13\" text=\"bind:bizAmt\" displaytype=\"maskeditcontrol\" cssclass=\"point\" maskeditformat=\"###,##0\" edittype=\"mask\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_01_01_01_00_01_01_00_00_00","0","grdFrtrePrdct:30","187","28",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("시설");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFclt","0","Static03_00_01_01_01_00_01_01_00_00_00:20",null,"177","0",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid0");
            obj.set_taborder("69");
            obj.set_cssclass("grd_display");
            obj.set_binddataset("dsFcltWPLs");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_scrollbartype("none auto");
            obj.set_fillareatype("none");
            obj.set_border("1px solid #52aaa4,0px none,1px solid #e2e2e2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"번호\"/><Cell col=\"2\" text=\"종별\"/><Cell col=\"3\" text=\"시급성\"/><Cell col=\"4\" text=\"물량\"/><Cell col=\"5\" text=\"노동력(명)\"/><Cell col=\"6\" text=\"사업비(천원)\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" expr=\"currow + 1\"/><Cell col=\"2\" text=\"bind:bizKindCd\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsFcltKindCd\" combocodecol=\"code\" combodatacol=\"dtlCdExpln\" combodisplaynulltext=\"선택\"/><Cell col=\"3\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsUrgntCd\" combocodecol=\"code\" combodatacol=\"data\" text=\"bind:urgntCd\" combodisplaynulltext=\"선택\"/><Cell col=\"4\" text=\"bind:bizQntt\" displaytype=\"maskeditcontrol\" edittype=\"mask\" maskeditformat=\"###,##0.##\"/><Cell col=\"5\" text=\"bind:bizLbper\" displaytype=\"maskeditcontrol\" edittype=\"mask\" maskeditformat=\"###,##0\" cssclass=\"point\"/><Cell col=\"6\" text=\"bind:bizAmt\" displaytype=\"maskeditcontrol\" cssclass=\"point\" maskeditformat=\"###,##0\" edittype=\"mask\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_01_01_01_00_01_01_00_00_00_00","0","grdFclt:30","187","28",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("소득");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdEarn","0","Static03_00_01_01_01_00_01_01_00_00_00_00:20",null,"177","0",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid0");
            obj.set_taborder("73");
            obj.set_cssclass("grd_display");
            obj.set_binddataset("dsEarnWPLs");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_scrollbartype("none auto");
            obj.set_fillareatype("none");
            obj.set_border("1px solid #52aaa4,0px none,1px solid #e2e2e2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"번호\"/><Cell col=\"2\" text=\"종별\"/><Cell col=\"3\" text=\"시급성\"/><Cell col=\"4\" text=\"기타 소득종\"/><Cell col=\"5\" text=\"생산량\"/><Cell col=\"6\" text=\"노동력(명)\"/><Cell col=\"7\" text=\"사업비(천원)\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" expr=\"currow + 1\"/><Cell col=\"2\" text=\"bind:bizKindCd\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsEarnSpecsClsfCd\" combocodecol=\"code\" combodatacol=\"dtlCdExpln\" combodisplaynulltext=\"선택\"/><Cell col=\"3\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsUrgntCd\" combocodecol=\"code\" combodatacol=\"data\" text=\"bind:urgntCd\" combodisplaynulltext=\"선택\"/><Cell col=\"4\" text=\"bind:bizEtcKindNm\" displaytype=\"expr:bizKindCd==&quot;99&quot;?&quot;textareacontrol&quot;:&quot;none&quot;\" edittype=\"expr:bizKindCd==&quot;99&quot;?&quot;text&quot;:&quot;none&quot;\" cssclass=\"expr:bizKindCd == &apos;99&apos; ?  &apos;none&apos; : &apos;cell_bg_grayLight&apos;\"/><Cell col=\"5\" text=\"bind:bizQntt\" displaytype=\"maskeditcontrol\" edittype=\"mask\" maskeditformat=\"###,##0.##\"/><Cell col=\"6\" text=\"bind:bizLbper\" displaytype=\"maskeditcontrol\" edittype=\"mask\" maskeditformat=\"###,##0.#\" maskeditlimitbymask=\"decimal\"/><Cell col=\"7\" text=\"bind:bizAmt\" displaytype=\"maskeditcontrol\" edittype=\"mask\" maskeditformat=\"###,##0\" maskeditlimitbymask=\"decimal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnFrtrePrdctDel",null,"4209","78","32","0",null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_module_line");
            this.addChild(obj.name, obj);

            obj = new Button("btnFrtrePrdctAddtn",null,"4209","78","32","btnFrtrePrdctDel:6",null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_module_line");
            this.addChild(obj.name, obj);

            obj = new Button("btnFcltDel",null,"4464","78","32","0",null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_module_line");
            this.addChild(obj.name, obj);

            obj = new Button("btnFcltAddtn",null,"4464","78","32","btnFcltDel:6",null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_module_line");
            this.addChild(obj.name, obj);

            obj = new Button("btnIncmDel",null,"4719","78","32","0",null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_module_line");
            this.addChild(obj.name, obj);

            obj = new Button("btnIncmAddtn",null,"4719","78","32","btnIncmDel:6",null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_module_line");
            this.addChild(obj.name, obj);

            obj = new Div("divBtn","0","grdEarn:30",null,"32","0",null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("divBtn");
            this.addChild(obj.name, obj);

            obj = new Button("btnList",null,"0","78","32","0",null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("3");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_common01");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"0","78","32","btnList:6",null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_common01");
            obj.set_visible("true");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"0","78","32","btnDel:6",null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_common01");
            this.divBtn.addChild(obj.name, obj);

            obj = new Grid("grdMngmt","0","divBtn:30",null,"0","0",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid0");
            obj.set_taborder("76");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_grd00");
            obj.set_cssclass("grd_display");
            obj.set_border("1px solid #52aaa4,0px none,1px solid #e2e2e2");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"80\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell text=\"경영계획\"/><Cell col=\"1\" text=\"임반/소반\"/><Cell col=\"2\" text=\"경영계획구\"/><Cell col=\"3\" text=\"임반도\"/><Cell col=\"4\" text=\"소반도\"/><Cell col=\"5\" text=\"비고\" cssclass=\"cell_end\"/></Band><Band id=\"body\"><Cell text=\"bind:경영계획\"/><Cell col=\"1\" text=\"bind:임반소반\"/><Cell col=\"2\" text=\"bind:경영계획구\"/><Cell col=\"3\" text=\"bind:임반도\"/><Cell col=\"4\" text=\"bind:소반도\"/><Cell col=\"5\" cssclass=\"cell_end,cell_btn_field01\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"보기\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle04_00","0","grdMngmt:30","123","32",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("도면");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("divMap","0","staTitle04_00:20",null,"600","0",null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_cssclass("div_map");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("webFlrpln","0","0",null,null,"0","0",null,null,null,null,this.divMap.form);
            obj.set_taborder("0");
            this.divMap.addChild(obj.name, obj);

            obj = new Static("Static02",null,"grdMngmt:40","90","28","0",null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("신규 차기 경계");
            obj.set_cssclass("sta_WF_legend_text");
            this.addChild(obj.name, obj);

            obj = new Static("staLegend_orange",null,"5087","9","10","Static02:2",null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_cssclass("sta_WF_legend_red");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdivFrtrePrdct","1281","4123","460","452",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("pdiv_POP");
            this.addChild(obj.name, obj);

            obj = new Button("btnSavePopup",null,null,"68","34","94","20",null,null,null,null,this.pdivFrtrePrdct.form);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_cssclass("btn_POP_yes");
            this.pdivFrtrePrdct.addChild(obj.name, obj);

            obj = new Grid("grdFrtrePrdctPop","20","75",null,null,"20","btnSavePopup:20",null,null,null,null,this.pdivFrtrePrdct.form);
            obj.set_initvalueid("iv_Grid0");
            obj.set_taborder("2");
            obj.set_cssclass("grd_display");
            obj.set_binddataset("dsFrtreWdvlms");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/><Column size=\"150\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"수종\"/><Cell col=\"2\" text=\"목재수확재적(㎥)\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" combodataset=\"dsKoftrCd\" combodatacol=\"data\" combocodecol=\"code\" text=\"bind:chk\" combodisplayrowcount=\"15\"/><Cell col=\"1\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsKoftrCd\" combodatacol=\"data\" combocodecol=\"code\" text=\"bind:koftrCd\" combodisplayrowcount=\"15\"/><Cell col=\"2\" displaytype=\"maskeditcontrol\" edittype=\"mask\" text=\"bind:bizPrdctnWdvlm\" maskeditformat=\"#,##0.##\"/></Band></Format></Formats>");
            this.pdivFrtrePrdct.addChild(obj.name, obj);

            obj = new Button("btnFrtrePrdctPopDel",null,"20","70","35","20",null,null,null,null,null,this.pdivFrtrePrdct.form);
            obj.set_taborder("3");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_module_line");
            this.pdivFrtrePrdct.addChild(obj.name, obj);

            obj = new Button("btnFrtrePrdctPopAdd",null,"20","70",null,"btnFrtrePrdctPopDel:6","grdFrtrePrdctPop:20",null,null,null,null,this.pdivFrtrePrdct.form);
            obj.set_taborder("1");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_module_line");
            this.pdivFrtrePrdct.addChild(obj.name, obj);

            obj = new Button("btnRtrcn",null,null,"68","34","20","20",null,null,null,null,this.pdivFrtrePrdct.form);
            obj.set_taborder("5");
            obj.set_text("취소");
            obj.set_cssclass("btn_POP_no");
            this.pdivFrtrePrdct.addChild(obj.name, obj);

            obj = new Edit("wplbkBizSeq","20",null,"140","28",null,"20",null,null,null,null,this.pdivFrtrePrdct.form);
            obj.set_taborder("0");
            obj.set_visible("false");
            this.pdivFrtrePrdct.addChild(obj.name, obj);

            obj = new Static("sta_dotline1_00_00","0","divAddtnMttr:42",null,"16","0",null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("");
            obj.set_cssclass("sta_MG_dotline_H");
            this.addChild(obj.name, obj);

            obj = new Static("sta_dotline1_00_00_00","0","divMngMttr:41",null,"16","0",null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("");
            obj.set_cssclass("sta_MG_dotline_H");
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

            //-- Default Layout : this.pdivFrtrePrdct.form
            obj = new Layout("default","",0,0,this.pdivFrtrePrdct.form,function(p){});
            this.pdivFrtrePrdct.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1240,5740,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divWplbk.form.cmblcId","value","dsWplbkVO","cmblcId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divWplbk.form.edtSbltId","value","dsWplbkVO","sbltId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divWplbk.form.cmbSpwodKindCd","value","dsWplbkVO","spwodKindCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divWplbk.form.cmbSpwodDetlKindCd","value","dsWplbkVO","spwodDetlKindCd");
            this.addChild(obj.name, obj);
            obj.bind();

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

            obj = new BindItem("item4","divGoalFrtp.form.goalFrtpCn","value","dsWplbkVO","goalFrtpCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divGoalFrtp.form.mcbKoftr","value","dsGoalFrtp","koftrCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSpcfcFoprd.form.txtSpcfcFoprdNm","value","dsMnfrsExmn","spcfcFoprdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSpcfcFoprd.form.chkSeedPckngPsbltyYn","value","dsMnfrsExmn","seedPckngPsbltyYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSpcfcFoprd.form.cmbSdgthTpcd","value","dsMnfrsExmn","sdgthTpcd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSpcfcFoprd.form.cmbSdgthKoftrCd","value","dsMnfrsExmn","sdgthKoftrCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSpcfcFoprd.form.edtsdgthPsbltyQntt","value","dsMnfrsExmn","sdgthPsbltyQntt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSpcfcFoprd.form.edtsdgthPsbltyQntt","accessibilityaction","dsMnfrsExmn","sdgthPssblQntt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divAddtnMttr.form.txtAddtnMttr","value","dsWplbkVO","addtnMttr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divPlanEtmtBckgr.form.txtBizBckgrCn","value","dsWplbkVO","bizBckgrCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divJobDirctDoc.form.txtJobDirctCn","value","dsWplbkVO","jobDirctCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divSbltHstr.form.txtSbltHstry","value","dsWplbkVO","sbltHstry");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divMngMttr.form.txtMngMttr","value","dsWplbkVO","mngMttr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divWplbk.form.cmbCmblcId","value","dsWplbkVO","cmblcId");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::cmmInnorixUpload.xfdl");
        };
        
        // User Script
        this.addIncludeScript("wplbkSave.xfdl","lib::lib_nfm.xjs");
        this.addIncludeScript("wplbkSave.xfdl","lib::libAtmtcCscct.xjs");
        this.registerScript("wplbkSave.xfdl", function() {
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
        this.executeIncludeScript("lib::libAtmtcCscct.xjs"); /*include "lib::libAtmtcCscct.xjs"*/;

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        const publicArgs = this.gfnGetMdiRootDiv() ? this.gfnGetMdiRootDiv().arguments.menuParam : this.getOwnerFrame().objArg;

        // 지위지수
        this.mnfrsExmnStind = "";

        // 연년생장
        this.cairt = "";

        // 새 경영계획부 작성 시 이미 등록된 소반이 존재 하는지 체크
        this.result = "";

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e) {

        	//console.log(obj.parent);

        	this.gfnFormOnLoad(obj,e); //필수함수

        	var codeArgs = [//cdId, useYn, defaultData, rds, addtiAttrbCn1
        		{cdId:'SDGTH_KOFTR_CD', useYn:'', rds: 'dsSdgthKoftrCd_S', addtiAttrbCn1:'S', rdsId:'SdgthKoftrCd_S', defaultData : '선택'}
        		, {cdId:'SDGTH_KOFTR_CD', useYn:'', rds: 'dsSdgthKoftrCd_P', addtiAttrbCn1:'P', rdsId:'SdgthKoftrCd_P', defaultData : '선택'}
        		, {cdId:'STTY_APWOD_CD', useYn:'', defaultData : '선택'}
        		, {cdId:'KOFTR_CD', useYn:'', defaultData : '선택'}
        		//, {cdId: 'FELLY_MTHD_CD', useYn:'Y', hrrchSrchYn : 'Y', upDtlCdId: '01'}
        		, ['SPWOD_KIND_CD', 'ORBRN_CD', 'GRDNT_CD', 'SCSTX_CD', 'SLDPT_TPCD'
        		, 'HGDGR_TPCD', 'MNFRS_EXMN_GGRPH_CD', 'FROR_CD', 'FRTP_TPCD', 'CRDNS_CD'
        		, 'SDGTH_TPCD', 'AFFRS_SPECS_TPCD', 'URGNT_CD', 'FELLY_MTHD_CD', 'AFFRS_RSN_CD'
        		, 'FREST_GRDNN_SPECS_TPCD', 'SCTSL_TPCD', 'PRDCT_MTHOD_CD', 'FCLT_KIND_CD'
        		, 'EARN_SPECS_CLSF_CD', 'SPWOD_DETL_KIND_CD', 'PRDCTN_MTHD_CD']
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
        			this.nfmCmmnService('CMBLC', {'wplarId' : publicArgs.wplarId, 'nxtrmNo' : publicArgs.nxtrmNo}, 'fnCallback');

        			if(this.gfnIsNull(publicArgs.wplbkNo) || this.gfnIsEmpty(publicArgs.wplbkNo)){ //
        				this.divWplbk.form.instNm.set_text(publicArgs.instNm);
        				this.divWplbk.form.wplarNm.set_text(publicArgs.wplarNm + " (" + publicArgs.nxtrmNo + "차기)");

        				this.dsWplbkVO.addRow();
        				this.dsMnfrsExmn.addRow();

        				this.divAtchFile.form.divFileAdd.form.uploadInit({ //첨부파일 세팅
                				  mode: 'upload'
                				, data: this.dsWplbkVO.getColumn(0, 'attchFiles')
                				, maxFileCount: '5'
                				, width: '650'
                				, height: '150'
                				, maxTotalSize: '1000000000' // 1GB 총 파일
                				, maxFileSize: '1000000000' // 1GB 개별 파일
                				, group: 'wplbk' // 업무구분
                				, callback: 'uploadCallback'
                			});

        				this.getMngmtPlanBizUntprList(); //경영계획 노동/사업비 세팅

        				this.loadGis();
        			}else {
        				this.fnSearch(); //조회
        			}

        			break;

        		case "search": //조회
        			this.divAtchFile.form.divFileAdd.form.uploadInit({ //첨부파일 세팅
        				  mode: 'upload'
        				, data: this.dsWplbkVO.getColumn(0, 'attchFiles')
        				, maxFileCount: '5'
        				, width: '650'
        				, height: '150'
        				, maxTotalSize: '1000000000' // 1GB 총 파일
        				, maxFileSize: '1000000000' // 1GB 개별 파일
        				, group: 'wplbk' // 업무구분
        				, callback: 'uploadCallback'
        			});

        			this.fnPageSet(); //조회 후 페이지 세팅 함수


        			var wplarId = this.dsWplbkVO.getColumn(0, 'wplarId');
        			var nxtrmNo = this.dsWplbkVO.getColumn(0, 'nxtrmNo');
        			var cmblcId = this.dsWplbkVO.getColumn(0, 'cmblcId');
        			var sbltId = this.dsWplbkVO.getColumn(0, 'sbltId');
        			var wplbkNo = this.dsWplbkVO.getColumn(0, 'wplbkNo');
        			//this.dsWplbkVO.setColumn(0, 'orgWplbkNo', wplbkNo);

        			this.getMngmtPlanBizUntprList(); //경영계획 노동/사업비 세팅

        			this.loadGis();

        			break;

        		case "bizUntprSearch":
        			break;

        		case "save": //저장
        			result = this.dsResult.getColumn(0, 'result');
        			if(result == 'ok') {
        				this.gfnAlert("msg.save.success");
        				var oArg = { wplarId : publicArgs.wplarId
        							, nxtrmNo :  publicArgs.nxtrmNo };
        				var backPage = 'business::mngmtPlan/mngmtPlanEtmt/mngmtPlanEtmtView.xfdl';
        				if(Object.keys(publicArgs).includes('backPage')) {
        					backPage = publicArgs['backPage'];
        				}
        				this.gfnSetUrl(backPage, oArg);
        			} else {
        				this.gfnAlert("msg.database.error");
        				return false;
        			}
        			break;
        		case "calcSI":
        			this.dsMnfrsExmn.setColumn(0, "mnfrsExmnStind", parseInt(this.mnfrsExmnStind));
        			break;
        		case "checkWplbk":
        			if(this.result != "0"){
        				//this.dsWplbkVO.setColumn(0,"cmblcId","");
        				this.divWplbk.form.edtSbltId.set_value("");
        				this.gfnAlert("msg.general", ["기존소반이 존재하거나\n이미 변경신청중인 소반입니다."]);
        			}/*else{
        				var wplarId = this.dsWplbkVO.getColumn(0, "wplarId");
        				var nxtrmNo = this.dsWplbkVO.getColumn(0,"nxtrmNo");
        				this.dsWplbkVO.setColumn(0, "sbltId", this.divWplbk.form.edtSbltId.text);
        				var newWplbkNo = this.dsWplbkVO.getColumn(0, "wplarId") + "_"+this.dsWplbkVO.getColumn(0,"nxtrmNo") +"_"+this.dsWplbkVO.getColumn(0,"cmblcId")+"_"+this.divWplbk.form.edtSbltId.text;
        				this.dsWplbkVO.setColumn(0 ,"chgWplbkNo", newWplbkNo);

        			}*/
        			break;
        		case "delete" :
        			result = this.dsResult.getColumn(0, 'result');
        			if(result == 'ok') {
        				this.gfnAlert("msg.delete.success");
        				var oArg = { wplarId : publicArgs.wplarId
        							, nxtrmNo :  publicArgs.nxtrmNo };
        				var backPage = 'business::mngmtPlan/mngmtPlanEtmt/mngmtPlanEtmtView.xfdl';
        				if(Object.keys(publicArgs).includes('backPage')) {
        					backPage = publicArgs['backPage'];
        				}
        				this.gfnSetUrl(backPage, oArg);
        			} else {
        				this.gfnAlert("msg.database.error");
        			}
        			break;
        	}
        }

        /**
         * @description 메세지 콜백
        */
        this.fnMsgCallback = function (strId, strVal) {
        	if(strId == "confirm.before.changesave") {
                //trace("strVal : " + strVal);
                if(strVal) {
        			this.fnSave();
                }
            }

        	if(strId == "confirm.before.delete") {
                //trace("strVal : " + strVal);
                if(strVal) {
        			this.fnDelete();
                }
            }
        }

        /**
         * @description 팝업 콜백
        */
        this.fnPopupCallback = function(strPopupID, strReturn){
        	if (strReturn == undefined) {
        		return;
        	}
        	switch (strPopupID) {
        		case "popupModalDefault":
        			if(strReturn) {
        				this.fnSearch();
        			}
        			break;
        	}
        }

        //삭제예정
        this.btnList_onclick = function(obj,e) {
        	//this.gfnSetUrl("business::nfrmnPlan/wplarStatus_new.xfdl", publicArgs);
        	this.gfnSetUrl("business::mngmtPlan/wplbk/wplbkSave.xfdl", publicArgs);
        };

        //조회
        this.fnSearch = function () {
        	this.dsWplbkVO.clearData();
        	if(this.dsSearch.getRowCount() == 0) {
        		this.dsSearch.addRow();
        	}
        	this.dsSearch.setColumn(0, "wplarId", publicArgs.wplarId);
        	this.dsSearch.setColumn(0, "nxtrmNo", publicArgs.nxtrmNo);
        	this.dsSearch.setColumn(0, "wplbkNo", publicArgs.wplbkNo);
        	this.dsSearch.setColumn(0, "formType",publicArgs.formType);
        	this.dsSearch.setColumn(0, "bizDataTypeTpcd", "01"); //경영계획

        	var strSvcId    = "search";
        	var strSvcUrl   = "nfm/wplbk/selectWplbkView.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsWplbkVO=wplbkVO dsSbltLctn=sbltLctnList dsSttyApwod=sttyApwodList dsGoalFrtp=goalFrtpList dsMnfrsExmn=mnfrsExmn dsKoftrExmn=koftrExmn dsLwvgt=lwvgt ";
        	//경영계획
        	outData += "dsAffrsWPLs=affrsWPLs dsFrestGrdnnWPLs=frestGrdnnWPLs dsFrtrePrdctWPLs=frtrePrdctWPLs dsFcltWPLs=fcltWPLs dsEarnWPLs=earnWPLs";
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

        //경영계획 사업비/노동력
        this.getMngmtPlanBizUntprList = function(){

        	var strSvcId    = "bizUntprSearch";
        	var strSvcUrl   = "nfm/mngmtPlan/selectMngmtPlanBizUntprList.do";
        	var inData      = "";
        	var outData     = "dsBizUntprList=bizUntprList";
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
        }

        this.fnPageSet = function () {
        	// p : 경영계획(차기) text 세팅
        	this.divWplbk.form.instNm.set_text(this.dsWplbkVO.getColumn(0, "instNm"));
        	this.divWplbk.form.wplarNm.set_text(this.dsWplbkVO.getColumn(0, "wplarNm") + " (" + this.dsWplbkVO.getColumn(0, "nxtrmNo") + "차기)");

        	this.divWplbk.form.cmbCmblcId.set_readonly(true);
        	this.divWplbk.form.edtSbltId.set_readonly(true);

        	if(!this.gfnIsNull(this.dsWplbkVO.getColumn(0,"mthrSbltHstry1"))){
        		this.dsMthrSbltHstry.addRow();
        		this.dsMthrSbltHstry.setColumn(0, "value", this.dsWplbkVO.getColumn(0, "mthrSbltHstry1"));
        		this.divWplbk.form.cmbMthrSbltHstry.set_index(0);
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

        	this.divAreaSkill_rdoSkill_onitemchanged(this.divAreaSkill.form.rdoSkill, e);

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
        	if(this.dsGoalFrtp.rowcount == 0){
        		this.dsGoalFrtp.addRow();
        	}else{
        		for(var i = 0; i < this.dsGoalFrtp.rowcount; i++){
        			goalFrtpsKoftrCd += this.dsGoalFrtp.getColumn(i, "koftrCd");
        			this.divGoalFrtp.form.mcbKoftr.set_value(goalFrtpsKoftrCd);
        			if(i < this.dsGoalFrtp.rowcount-1){
        				goalFrtpsKoftrCd += ",";
        			}
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

        	this.divSpcfcFoprd_seedPckngPssblYn_onclick(this.divSpcfcFoprd.form.chkSeedPckngPsbltyYn, "");
        	if(this.dsMnfrsExmn.getColumn(0, "sdgthTpcd") == "01"){
        		this.divSpcfcFoprd.form.cmbSdgthKoftrCd.set_innerdataset(this.dsSdgthKoftrCd_S);
        	}else if(this.dsMnfrsExmn.getColumn(0, "sdgthTpcd") == "02"){
        		this.divSpcfcFoprd.form.cmbSdgthKoftrCd.set_innerdataset(this.dsSdgthKoftrCd_p);
        	}else {
        		this.divSpcfcFoprd_cmbSdgthTpcd_onitemchanged(this.divSpcfcFoprd.form.cmbSdgthTpcd, "");
        	}

        }

        //저장
        this.fnSave = function() {
        	if(publicArgs.formType == "NEW"){
        		this.dsWplbkVO.setColumn(0, "wplarId", publicArgs.wplarId);
        		this.dsWplbkVO.setColumn(0, "nxtrmNo", publicArgs.nxtrmNo);
        		this.dsWplbkVO.setColumn(0, "cmblcId", this.divWplbk.form.cmbCmblcId.text);
        		this.dsWplbkVO.setColumn(0, "sbltId", this.divWplbk.form.edtSbltId.text);
        	}

        	var wplarId = this.dsWplbkVO.getColumn(0, "wplarId");
        	var nxtrmNo = this.dsWplbkVO.getColumn(0,"nxtrmNo");
        	//var sbltId = this.dsWplbkVO.getColumn(0, "sbltId").substring(0,3) + "-" +this.dsWplbkVO.getColumn(0, "sbltId").substring(3);
        	//this.dsWplbkVO.setColumn(0, "sbltId", this.divWplbk.form.edtSbltId.text);

        	var wplbkNo = wplarId + "_" + nxtrmNo + "_" +this.dsWplbkVO.getColumn(0,"cmblcId")+"_"+ this.dsWplbkVO.getColumn(0, "sbltId");
        	this.dsWplbkVO.setColumn(0, "wplbkNo", wplbkNo);
        	this.dsWplbkVO.setColumn(0, "useYn", "Y");
        	this.dsWplbkVO.setColumn(0, "bizDataTypeTpcd", "01"); //경영계획
        	//전차기소반
        	this.dsWplbkVO.setColumn(0, "mthrSbltHstry1", this.dsMthrSbltHstry.getColumn(0, "value"));
        	this.dsWplbkVO.setColumn(0, "mthrSbltHstry2", this.dsMthrSbltHstry.getColumn(1, "value"));
        	this.dsWplbkVO.setColumn(0, "mthrSbltHstry3", this.dsMthrSbltHstry.getColumn(2, "value"));


        	//P : 보조기능 기능구분 check 된 것들 N으로 세팅
        	if(this.dsWplbkVO.getColumn(0, "lfenvFrsrsrSkillTpcd") == "false" || this.gfnIsNull(this.dsWplbkVO.getColumn(0, "lfenvFrsrsrSkillTpcd"))){
        		this.dsWplbkVO.setColumn(0, "lfenvFrsrsrSkillTpcd", "N");
        	}else{
        		this.dsWplbkVO.setColumn(0, "lfenvFrsrsrSkillTpcd", "Y");
        	}
        	if(this.dsWplbkVO.getColumn(0, "ntrEnvrnFrsrsrSkillTpcd") == "false" || this.gfnIsNull(this.dsWplbkVO.getColumn(0, "ntrEnvrnFrsrsrSkillTpcd"))){
        		this.dsWplbkVO.setColumn(0, "ntrEnvrnFrsrsrSkillTpcd", "N");
        	}else{
        		this.dsWplbkVO.setColumn(0, "ntrEnvrnFrsrsrSkillTpcd", "Y");
        	}
        	if(this.dsWplbkVO.getColumn(0, "crparSkillTpcd") == "false" || this.gfnIsNull(this.dsWplbkVO.getColumn(0, "crparSkillTpcd"))){
        		this.dsWplbkVO.setColumn(0, "crparSkillTpcd", "N");
        	}else{
        		this.dsWplbkVO.setColumn(0, "crparSkillTpcd", "Y");
        	}
        	if(this.dsWplbkVO.getColumn(0, "dprrsSkillTpcd") == "false" || this.gfnIsNull(this.dsWplbkVO.getColumn(0, "dprrsSkillTpcd"))){
        		this.dsWplbkVO.setColumn(0, "dprrsSkillTpcd", "N");
        	}else{
        		this.dsWplbkVO.setColumn(0, "dprrsSkillTpcd", "Y");
        	}
        	if(this.dsWplbkVO.getColumn(0, "mnfrsRcrfrSkillTpcd") == "false" || this.gfnIsNull(this.dsWplbkVO.getColumn(0, "mnfrsRcrfrSkillTpcd"))){
        		this.dsWplbkVO.setColumn(0, "mnfrsRcrfrSkillTpcd", "N");
        	}else{
        		this.dsWplbkVO.setColumn(0, "mnfrsRcrfrSkillTpcd", "Y");
        	}
        	if(this.dsWplbkVO.getColumn(0, "tmbrPdfrtSkillTpcd") == "false" || this.gfnIsNull(this.dsWplbkVO.getColumn(0, "tmbrPdfrtSkillTpcd"))){
        		this.dsWplbkVO.setColumn(0, "tmbrPdfrtSkillTpcd", "N");
        	}else{
        		this.dsWplbkVO.setColumn(0, "tmbrPdfrtSkillTpcd", "Y");
        	}

        	// p : 주기능 라디오 체크
        	var rdoVal = this.divAreaSkill.form.rdoSkill.value;
        	this.dsWplbkVO.setColumn(0, rdoVal, "P");

        	//종자채취가능여부
        	if(this.divSpcfcFoprd.form.chkSeedPckngPsbltyYn.isChecked() == true) {
        		this.dsMnfrsExmn.setColumn(0,"seedPckngPsbltyYn","Y");
        	}else{
        		this.dsMnfrsExmn.setColumn(0, "seedPckngPsbltyYn", "N");
        		this.dsMnfrsExmn.setColumn(0, "sdgthTpcd", "");
        		this.dsMnfrsExmn.setColumn(0, "sdgthKoftrCd", "");
        		this.dsMnfrsExmn.setColumn(0, "sdgthPsbltyQntt", 0);
        	}
        	//목표임상
        	var goalFrtpIndex = 0;
        	if(!this.gfnIsNull(this.dsGoalFrtp.getColumn(0, "koftrCd"))){
        		var koftrCds = this.dsGoalFrtp.getColumn(0, "koftrCd").split(",");
        		this.dsGoalFrtps.clearData();
        		for(var i = 0 ; i < koftrCds.length; i++){
        			this.dsGoalFrtps.addRow();
        			this.dsGoalFrtps.setColumn(goalFrtpIndex, "koftrCd", koftrCds[i]);
        			goalFrtpIndex++;
        		}
        	}

        	var streFileNms = this.divAtchFile.form.divFileAdd.upload();

        	this.dsWplbkVO.setColumn(0, 'attchFiles', streFileNms);

        	var strSvcId    = "save";
        	var strSvcUrl   = "nfm/wplbk/saveWplbk.do";
        	var inData      = "wplbkVO=dsWplbkVO sbltLctnList=dsSbltLctn sttyApwodList=dsSttyApwod goalFrtpList=dsGoalFrtps mnfrsExmn=dsMnfrsExmn koftrExmn=dsKoftrExmn lwvgt=dsLwvgt ";
        	inData += "affrsWPLs=dsAffrsWPLs frestGrdnnWPLs=dsFrestGrdnnWPLs frtrePrdctWPLs=dsFrtrePrdctWPLs fcltWPLs=dsFcltWPLs earnWPLs=dsEarnWPLs";
        	var outData     = "dsResult=dsResult";
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
        }

        this.fnDelete = function(){
        	var wplarId = this.dsWplbkVO.getColumn(0, "wplarId");
        	var nxtrmNo = this.dsWplbkVO.getColumn(0,"nxtrmNo");

        	var wplbkNo = wplarId + "_" + nxtrmNo + "_" +this.dsWplbkVO.getColumn(0,"cmblcId")+"_"+ this.dsWplbkVO.getColumn(0, "sbltId");
        	this.dsWplbkVO.setColumn(0, "wplbkNo", wplbkNo);

        	var strSvcId    = "delete";
        	var strSvcUrl   = "nfm/wplbk/deleteWplbk.do";
        	var inData      = "dsWplbkVO=dsWplbkVO";
        	var outData     = "dsResult=dsResult";
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
        }

        //그리드 행 삭제 공통 함수
        this.fnComRowDel = function(ele, delId, delVal) {
        	//체크대상 row를 배열로 저장
        	var delRows = [];
        	var grdRowCount = ele.getRowCount();
        	for(var i = 0; i < grdRowCount; i++) {
        		var chk = ele.getColumn(i, delId);
        		if(chk == delVal) {
        			delRows.push(i);
        		}
        	}

        	//역순으로 삭제
        	var reserseDelRows = delRows.reverse();
        	for(var i = 0; i < reserseDelRows.length; i++) {
        		ele.deleteRow(reserseDelRows[i]);
        	}
        }

        //특수림지정현황 셀렉트 변경 이벤트
        this.divWplbk_cmbSpwodKindCd_onitemchanged = function() {
        	var spwodKindCd = this.divWplbk.form.cmbSpwodKindCd.value;

        	var index = 0;
        	this.tempSpwodDetailKindCd1.clearData();
        	this.tempSpwodDetailKindCd2.clearData();

        	if(spwodKindCd == "02"){
        		this.divWplbk.form.cmbSpwodDetlKindCd.set_visible(true);
        		var cnt = this.dsSpwodDetlKindCd.getRowCount();
        		for(var i = 1; i < cnt; i++){
        			var code = this.dsSpwodDetlKindCd.getColumn(i, "code");
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


        //전차기소반지정 버튼클릭 이벤트
        this.divWplbk_btnBfrNxtrmSbltDsgn_onclick = function(obj,e) {
        	var sTitle = "전차기소반지정";
        	var oArg  = {};
        	if(this.gfnIsNull(this.dsWplbkVO.getColumn(0, "wplarId")) || this.gfnIsEmpty(this.dsWplbkVO.getColumn(0, "wplarId"))){
        		oArg   = { wplarId : publicArgs.wplarId
        				 , nxtrmNo : publicArgs.nxtrmNo
        				 , mthrSbltHstry : [this.dsMthrSbltHstry.getColumn(0, "value"), this.dsMthrSbltHstry.getColumn(1, "value"), this.dsMthrSbltHstry.getColumn(2, "value")]	};
        	}else{
        		oArg   = { wplarId : this.dsWplbkVO.getColumn(0, "wplarId")
        				 , nxtrmNo : this.dsWplbkVO.getColumn(0, "nxtrmNo")
        				 , mthrSbltHstry : [this.dsMthrSbltHstry.getColumn(0, "value"), this.dsMthrSbltHstry.getColumn(1, "value"), this.dsMthrSbltHstry.getColumn(2, "value")]	};
        	}
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
        this.divWplbk_btnMhrSbltHstry_onclick = function(obj,e) {
        	var mthrSbltHstry = this.divWplbk.form.cmbMthrSbltHstry.value;
        	var wplarId = mthrSbltHstry.substr(0, mthrSbltHstry.indexOf("_"));

        	var sTitle = "전차기 소반";
        	var oArg   = {wplbkNo : mthrSbltHstry, wplarId:wplarId, formType : "POPUP", callView : "V" };
        	var oOption = {
        		width:1215
        		,height:940			//모달리스는 width,height 필수지정
        		,popuptype:"modeless"
        		//,popuptype:"modal"
        		,autosize:false
        		,title:sTitle
        		,resize:false
        		,titlebar:true
        		};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("popupModaless", "business::mngmtPlan/wplbk/popup/wplbkPopup.xfdl", oArg, sPopupCallBack, oOption);
        	//this.gfnOpenPopup("popupModaless", "business::mngmtPlan/wplbk/wplbkView.xfdl", oArg, sPopupCallBack, oOption);
        };


        //소반소재지 추가 버튼 클릭
        this.btnLctnAddtn_onclick = function(obj,e) {
        	var sTitle = "소반 소재지 추가";
        	var oArg   = {};
        	var oOption = {
        			popuptype:"modal"	//modal,modaless
        			,autosize:false
        			,title:sTitle
        			,resize:false
        			,titlebar:true
        	}
        	this.gfnOpenPopup("popupLctnAdd", "business::mngmtPlan/wplbk/sbltLctnRegPopup.xfdl", oArg, function(sPopupId, sRtn){
        																									if(!this.gfnIsNull(sRtn))
        																									{
        																										var objRtn = JSON.parse(sRtn);
        																										if(this.gfnIsNull(objRtn)) return;

        																										if(!this.gfnIsNull(objRtn.lctnDaddr))
        																										{
        																											//trace(" 1. textAddr : " + objRtn.textAddr);
        																											var row = this.dsSbltLctn.addRow();
        																											this.dsSbltLctn.setColumn(row, "lctnDaddr", objRtn.lctnDaddr);
        																											this.dsSbltLctn.setColumn(row, "pnuCd", objRtn.pnuCd);
        																											this.dsSbltLctn.setColumn(row, "wplbkNo", "");
        																											this.dsSbltLctn.setColumn(row, "useYn", "Y");
        																											this.dsSbltLctn.setColumn(row, "lctnNo", row+1);
        																										}
        																									}
        																								}, oOption);
        };

        //소재지 행삭제 버튼 클릭
        this.btnLctnDel_onclick = function(obj,e) {
        	this.fnComRowDel(this.dsSbltLctn, "chk", 1);

        	grdRowCount = this.dsSbltLctn.getRowCount();
        	for(var i = 0; i < grdRowCount; i++){
        		this.dsSbltLctn.setColumn(i, "lctnNo", i+1);
        	}
        };

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

        //법정지정림 행추가 버튼클릭
        this.btnSttyApwodAddtn_onclick = function(obj,e) {
        	if(this.dsSttyApwod.rowcount > 0){
        		//법정지정림 코드 중복 불가
        		if(this.dsSttyApwod.getColumn(this.grdSttyApwod.currentrow-1,"sttyApwodCd") == this.dsSttyApwod.getColumn(this.grdSttyApwod.currentrow,"sttyApwodCd")){
        			this.grdSttyApwod.setCellPos(1, this.dsSttyApwod.rowposition);
        			this.grdSttyApwod.showEditor(); //focus
        			this.gfnAlert("msg.general", ["법정지정림은 중복 선택할 수 없습니다."]);
        			return false;
        		}
        		//법정지정림 코드 유효성 체크
        		if(this.gfnIsNull(this.dsSttyApwod.getColumn(this.grdSttyApwod.currentrow,"sttyApwodCd")) || this.gfnIsEmpty(this.dsSttyApwod.getColumn(this.grdSttyApwod.currentrow,"sttyApwodCd"))){
        			this.grdSttyApwod.setCellPos(1, this.dsSttyApwod.rowposition);
        			this.grdSttyApwod.showEditor(); //focus
        			this.gfnAlert("msg.general", ["법정지정림을 선택해주세요."]);
        			return false;
        		}
        		//면적 유효성 체크
        		let sttyApwodArea = parseFloat(this.dsSttyApwod.getColumn(this.grdSttyApwod.currentrow,"sttyApwodArea"));
        		if(sttyApwodArea < 0){
        			this.grdSttyApwod.setCellPos(2, this.dsSttyApwod.rowposition);
        			this.grdSttyApwod.showEditor(); //focus
        			this.gfnAlert("msg.general", ["면적은 0 이상입니다."]);
        			return false;
        		}
        		if(sttyApwodArea > this.divAreaSkill.form.areaTotal.value){
        			this.grdSttyApwod.setCellPos(2, this.dsSttyApwod.rowposition);
        			this.grdSttyApwod.showEditor(); //focus
        			this.gfnAlert("msg.general", ["해당면적이 면적 합계보다\n작거나 같아야합니다."]);
        			return false;
        		}
        	}
        	this.dsSttyApwod.addRow();
        	this.dsSttyApwod.setColumn(this.grdSttyApwod.currentrow,"sttyApwodCd", this.dsSttyApwodCd.getColumn(0,'code'));
        	this.dsSttyApwod.setColumn(this.grdSttyApwod.currentrow,"sttyApwodArea", "0");

        };

        //법정지정림 행삭제 버튼클릭
        this.btnSttyApwodDel_onclick = function(obj,e) {
        	this.fnComRowDel(this.dsSttyApwod, "chk", 1);
        };

        // 산림조사VO 변경 이벤트
        this.dsMnfrsExmn_oncolumnchanged = function(obj,e) {
        	//표고 최소~최대
        	let alttdMnmmVl = parseInt(this.dsMnfrsExmn.getColumn(0, "alttdMnmmVl"));
        	let alttdMxmmVl = parseInt(this.dsMnfrsExmn.getColumn(0, "alttdMxmmVl"));
        	if(e.columnid == "alttdMnmmVl"){
        		if(alttdMnmmVl < 0 ){
        			//this.grdShp.setCellPos(this.grdShp.getCellPos());
        			//this.grdShp.showEditor(); //focus
        			this.grdShp.setCellPos(2);
        			this.grdShp.showEditor();
        			this.gfnAlert("msg.general", ["표고 최소는 0 이상이여야합니다."]);
        			return false;
        		}
        	}
        	if(e.columnid == "alttdMxmmVl"){
        		if(alttdMxmmVl < 0 ){
        			this.grdShp.setCellPos(4);
        			this.grdShp.showEditor(); //focus
        			this.gfnAlert("msg.general", ["표고 최대는 0 이상입니다."]);
        			return false;
        		}
        		if(alttdMxmmVl < alttdMnmmVl){
        			this.grdShp.setCellPos(4);
        			this.grdShp.showEditor(); //focus
        			this.gfnAlert("msg.general", ["표고 최대는 표고 최소값보다 커야합니다."]);
        			return false;
        		}
        	}
        	// 지위지수
        	if(e.columnid == "dmtreTrhgh" || e.columnid == "dmtreFrag") {
        		var dmtreTrhgh = this.dsMnfrsExmn.getColumn(0, "dmtreTrhgh");
        		var dmtreAge = this.dsMnfrsExmn.getColumn(0, "dmtreFrag");
        		var koftrCd = "";
        		var mixRt = 0;

        		//우세목수고 유효성 체크
        		if(dmtreTrhgh < 0){
        			this.grdFrstt.setCellPos(1);
        			this.grdFrstt.showEditor(); //focus
        			this.gfnAlert("msg.general", ["우세목 수고는 0~100000 사이의 값입니다."]);
        			return false;
        		}
        		//우세목임령 유효성 체크
        		if(dmtreAge < 0 ){
        			this.grdFrstt.setCellPos(2);
        			this.grdFrstt.showEditor(); //focus
        			this.gfnAlert("msg.general", ["우세목 임령은 1~999 사이의 값입니다."]);
        			return false;
        		}
        		// 지위지수
        		for(var i = 0; i < this.dsKoftrExmn.rowcount; i++){
        			if(mixRt < this.dsKoftrExmn.getColumn(i, "mixtrRt")) {
        				mixRt = this.dsKoftrExmn.getColumn(i, "mixtrRt")
        				koftrCd = this.dsKoftrExmn.getColumn(i, "koftrCd")
        			}
        		}
        		if(!this.gfnIsNull(dmtreTrhgh) && !this.gfnIsNull(dmtreAge) && !this.gfnIsNull(koftrCd)){
        			var strSvcId    = "calcSI";
        			var strSvcUrl   = "nfm/wplbk/calcSI.do";
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
        			this.dsMnfrsExmn.setColumn(0, "mnfrsExmnStind", 0);
        		}

        	}

        	// 임목생장: 현실축적의 총축적계산
        	if(e.columnid == "haPartyRealtAccmnArea"){
        		var stlndArea = this.dsWplbkVO.getColumn(0, "stlndArea");

        		if(this.gfnIsNull(stlndArea)){
        			this.dsMnfrsExmn.setColumn(0, "haPartyRealtAccmnArea", "0");
        		}else{
        			var idx = this.getBaseTreeIndex();

        			if (idx != -1) {
        			// 치수림이면
        				if (parseFloat(this.dsKoftrExmn.getColumn(idx, "avrgDmtr")) < 6.0) {
        					//$('input[name="mnfrsExmnn.realtAccmnTotlSum"]').val(0);
        					this.dsMnfrsExmn.setColumn(0, "haPartyRealtAccmnArea", "0");
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
        			var realtAccmnTotlSum = parseFloat(this.dsMnfrsExmn.getColumn(0, "haPartyRealtAccmnArea")) * parseFloat(areaTot);
        			this.dsMnfrsExmn.setColumn(0, "realtAccmnTotlSum", Math.round(realtAccmnTotlSum));
        		}
        	}

        	if(e.columnid == "sdgthPsbltyQntt"){
        		if(this.dsMnfrsExmn.getColumn(0,"seedPckngPsbltyYn") == true || this.dsMnfrsExmn.getColumn(0,"seedPckngPsbltyYn") == 'Y'){
        			let sdgthPsbltyQntt = parseFloat(this.dsMnfrsExmn.getColumn(0, "sdgthPsbltyQntt"));
        			if( sdgthPsbltyQntt <= 0  && typeof this.dsMnfrsExmn.getColumn(0, "sdgthPsbltyQntt") != "undefined") {
        				this.divSpcfcFoprd.form.edtsdgthPsbltyQntt.setFocus();
        				this.gfnAlert("msg.general", ["가능량은 1~9999.9사이의 값입니다."]);
        				return false;
        			}
        		}
        	}
        };

        //주요수종조사 행추가 버튼클릭
        this.btnKoftrExmnAddtn_onclick = function(obj,e) {
        	if(this.dsKoftrExmn.rowcount > 0){
        		//수종코드 중복 불가
        		if(this.dsKoftrExmn.getColumn(this.grdKoftrExmn.currentrow-1,"koftrCd") == this.dsKoftrExmn.getColumn(this.grdKoftrExmn.currentrow,"koftrCd")){
        			this.grdKoftrExmn.setCellPos(2, this.dsKoftrExmn.rowposition);
        			this.grdKoftrExmn.showEditor(); //focus
        			this.gfnAlert("msg.general", ["수종은 중복 선택할 수 없습니다."]);
        			return false;
        		}
        		//수종코드 유효성 체크
        		if(this.gfnIsNull(this.dsKoftrExmn.getColumn(this.grdKoftrExmn.currentrow,"koftrCd")) || this.gfnIsEmpty(this.dsKoftrExmn.getColumn(this.grdKoftrExmn.currentrow,"koftrCd"))){
        			this.grdKoftrExmn.setCellPos(2, this.dsKoftrExmn.rowposition);
        			this.grdKoftrExmn.showEditor(); //focus
        			this.gfnAlert("msg.general", ["수종을 선택해주세요."]);
        			return false;
        		}
        		//혼효율 유효성 체크
        		if(parseFloat(this.dsKoftrExmn.getColumn(this.grdKoftrExmn.currentrow,"mixtrRt")) > 100 || parseFloat(this.dsKoftrExmn.getColumn(this.grdKoftrExmn.currentrow,"mixtrRt")) < 0){
        			this.grdKoftrExmn.setCellPos(3, this.dsKoftrExmn.rowposition);
        			this.dsKoftrExmn.setColumn(this.grdKoftrExmn.currentrow,"mixtrRt", 0);
        			this.grdKoftrExmn.showEditor(); //focus
        			this.gfnAlert("msg.general", ["혼효율은 0~100 사이의 값입니다."]);
        			return false;
        		}

        		//임령 유효성 체크
        		let avrgFrag =  parseInt(this.dsKoftrExmn.getColumn(this.dsKoftrExmn.currentrow,"avrgFrag"));
        		let mnmmFrag =  parseInt(this.dsKoftrExmn.getColumn(this.dsKoftrExmn.currentrow,"mnmmFrag"));
        		let mxmmFrag =  parseInt(this.dsKoftrExmn.getColumn(this.dsKoftrExmn.currentrow,"mxmmFrag"));
        		//최소임령
        		if(mnmmFrag < 0 || mnmmFrag > 1000){
        			this.grdKoftrExmn.setCellPos(8, this.dsKoftrExmn.rowposition);
        			this.grdKoftrExmn.showEditor(); //focus
        			this.gfnAlert("msg.general", ["임령은 0~1000 사이의 값입니다."]);
        			return false;
        		}
        		//최대임령
        		if(mxmmFrag < 0 || mxmmFrag > 1000){
        			this.grdKoftrExmn.setCellPos(10, this.dsKoftrExmn.rowposition);
        			this.grdKoftrExmn.showEditor(); //focus
        			this.gfnAlert("msg.general", ["임령은 0~1000 사이의 값입니다."]);
        			return false;
        		}
        		//최대임령
        		if(mxmmFrag < mnmmFrag) {
        			this.grdKoftrExmn.setCellPos(10, this.dsKoftrExmn.rowposition);
        			this.grdKoftrExmn.showEditor(); //focus
        			this.gfnAlert("msg.general", ["최대임령 값은 최소임령 값보다 커야합니다."]);
        			return false;
        		}
        		if(avrgFrag > 0 && (typeof this.dsKoftrExmn.getColumn(this.dsKoftrExmn.rowposition, "mxmmFrag") == "undefined" || typeof this.dsKoftrExmn.getColumn(this.dsKoftrExmn.rowposition, "mnmmFrag") == "undefined")){
        			this.grdKoftrExmn.setCellPos(8, obj.currentrow);
        			this.gfnAlert("msg.general", ["최소임령/최대임령을 입력해주세요."]);
        			return false;
        		}
        		//평균임령
        		if(avrgFrag < 0){
        			this.grdKoftrExmn.setCellPos(4, obj.currentrow);
        			this.gfnAlert("msg.general", ["평균임령은 0~1000 사이의 값입니다."]);
        			return false;
        		}
        		if(avrgFrag < mnmmFrag || avrgFrag > mxmmFrag) {
        			this.grdKoftrExmn.setCellPos(4, this.dsKoftrExmn.rowposition);
        			this.grdKoftrExmn.showEditor(); //focus
        			this.gfnAlert("msg.general", ["평균임령은\n최소임령과 최대임령 사이어야 합니다."]);
        			return false;
        		}

        		//수고 유효성 체크
        		let avrgTrhgh = parseInt(this.dsKoftrExmn.getColumn(this.dsKoftrExmn.currentrow,"avrgTrhgh"));
        		let lowstTrhgh = parseInt(this.dsKoftrExmn.getColumn(this.dsKoftrExmn.currentrow,"lowstTrhgh"));
        		let topTrhgh = parseInt(this.dsKoftrExmn.getColumn(this.dsKoftrExmn.currentrow,"topTrhgh"));
        		//최소수고
        		if(lowstTrhgh < 0 || lowstTrhgh > 10000){
        			this.grdKoftrExmn.setCellPos(11, this.dsKoftrExmn.rowposition+1);
        			this.grdKoftrExmn.showEditor(); //focus
        			this.gfnAlert("msg.general", ["수고는 0~10000 사이의 값입니다."]);
        			return false;
        		}
        		//최대수고
        		if(topTrhgh < 0 || topTrhgh > 10000){
        			this.grdKoftrExmn.setCellPos(13, this.dsKoftrExmn.rowposition);
        			this.grdKoftrExmn.showEditor(); //focus
        			this.gfnAlert("msg.general", ["수고는 0~10000 사이의 값입니다."]);
        			return false;
        		}
        		//최대수고
        		if(topTrhgh < lowstTrhgh) {
        			this.grdKoftrExmn.setCellPos(13, this.dsKoftrExmn.rowposition);
        			this.grdKoftrExmn.showEditor(); //focus
        			this.gfnAlert("msg.general", ["최대수고 값은\n최소수고 값보다 같거나 커야합니다."]);
        			return false;
        		}
        		if(avrgTrhgh > 0 && (typeof this.dsKoftrExmn.getColumn(this.dsKoftrExmn.rowposition, "lowstTrhgh") == "undefined" || typeof this.dsKoftrExmn.getColumn(this.dsKoftrExmn.rowposition, "topTrhgh") == "undefined")){
        			this.grdKoftrExmn.setCellPos(8, obj.currentrow);
        			this.gfnAlert("msg.general", ["최소수고/최대수고를 입력해주세요."]);
        			return false;
        		}
        		//평균수고
        		if(avrgTrhgh < 0) {
        			this.grdKoftrExmn.setCellPos(6, this.dsKoftrExmn.rowposition);
        			this.grdKoftrExmn.showEditor(); //focus
        			this.gfnAlert("msg.general", ["평균수고는0~10000 사이의 값입니다."]);
        			return false;
        		}
        		if(avrgTrhgh < lowstTrhgh || avrgTrhgh > topTrhgh) {
        			this.grdKoftrExmn.setCellPos(6, this.dsKoftrExmn.rowposition);
        			this.grdKoftrExmn.showEditor(); //focus
        			this.gfnAlert("msg.general", ["평균수고는\n최소수고과 최대수고 사이어야 합니다."]);
        			return false;
        		}
        		//경급 유효성 체크
        		let avrgDmtr = parseInt(this.dsKoftrExmn.getColumn(this.dsKoftrExmn.currentrow,"avrgDmtr"));
        		let mainKoftrMnmmDmtr = parseInt(this.dsKoftrExmn.getColumn(this.dsKoftrExmn.currentrow,"mainKoftrMnmmDmtr"));
        		let mainKoftrMxmmDmtr = parseInt(this.dsKoftrExmn.getColumn(this.dsKoftrExmn.currentrow,"mainKoftrMxmmDmtr"));
        		//최소경급
        		if(mainKoftrMnmmDmtr < 0 || mainKoftrMnmmDmtr > 100){
        			this.grdKoftrExmn.setCellPos(14, this.dsKoftrExmn.rowposition+1);
        			this.grdKoftrExmn.showEditor(); //focus
        			this.gfnAlert("msg.general", ["경급은 0~100 사이의 값입니다."]);
        			return false;
        		}
        		//최대경급
        		if(mainKoftrMxmmDmtr < 0 || mainKoftrMxmmDmtr > 100){
        			this.grdKoftrExmn.setCellPos(16, this.dsKoftrExmn.rowposition);
        			this.grdKoftrExmn.showEditor(); //focus
        			this.gfnAlert("msg.general", ["경급은 0~100 사이의 값입니다."]);
        			return false;
        		}
        		//최대경급
        		if(mainKoftrMxmmDmtr < mainKoftrMnmmDmtr) {
        			this.grdKoftrExmn.setCellPos(16, this.dsKoftrExmn.rowposition);
        			this.grdKoftrExmn.showEditor(); //focus
        			this.gfnAlert("msg.general", ["최대경급 값은\n최소경급 값보다 같거나 커야합니다."]);
        			return false;
        		}
        		if(avrgDmtr > 0 && (typeof this.dsKoftrExmn.getColumn(this.dsKoftrExmn.rowposition, "mainKoftrMxmmDmtr") == "undefined" || typeof this.dsKoftrExmn.getColumn(this.dsKoftrExmn.rowposition, "mainKoftrMnmmDmtr") == "undefined")){
        			this.grdKoftrExmn.setCellPos(8, obj.currentrow);
        			this.gfnAlert("msg.general", ["최소경급/최대경급을 입력해주세요."]);
        			return false;
        		}
        		//평균경급
        		if(avrgDmtr <0) {
        			this.grdKoftrExmn.setCellPos(7, this.dsKoftrExmn.rowposition);
        			this.grdKoftrExmn.showEditor(); //focus
        			this.gfnAlert("msg.general", ["평균경급는 0~100 사이의 값입니다."]);
        			return false;
        		}
        		if(avrgDmtr < mainKoftrMnmmDmtr || avrgDmtr > mainKoftrMxmmDmtr) {
        			this.grdKoftrExmn.setCellPos(7, this.dsKoftrExmn.rowposition);
        			this.grdKoftrExmn.showEditor(); //focus
        			this.gfnAlert("msg.general", ["평균경급는\n최소경급과 최대경급 사이어야 합니다."]);
        			return false;
        		}
        	}
        	this.dsKoftrExmn.addRow();
        	this.dsKoftrExmn.setColumn(this.grdKoftrExmn.currentrow,"koftrCd", this.dsKoftrCd.getColumn(0, 'code'));
        	this.dsKoftrExmn.setColumn(this.grdKoftrExmn.currentrow,"mixtrRt", 0);
        };

        //주요수종조사 행삭제 버튼클릭
        this.btnKoftrExmnDel_onclick = function(obj,e) {
        	this.fnComRowDel(this.dsKoftrExmn, "chk", 1);
        };

        // 산림조사 > 주요수종조사 변경 이벤트
        this.dsKoftrExmn_oncolumnchanged = function(obj,e)
        {
        	this.dsKoftrExmn.addColumn("ageClass", "string", "256");
        	var age = 0;
        	if(e.columnid == "avrgFrag") { //임령 항목 수정시
        		age = this.dsKoftrExmn.getColumn(e.row, e.columnid);
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

        // 기준목 index 반환
        this.getBaseTreeIndex = function()
        {
        	var size = this.dsKoftrExmn.rowcount;
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
        			mixtrRtArr.push(this.dsKoftrExmn.getColumn(i, "mixtrRt"));
        			avrgFragArr.push(this.dsKoftrExmn.getColumn(i, "avrgFrag"));
        			avrgTrhghArr.push(this.dsKoftrExmn.getColumn(i, "avrgTrhgh"));
        			avrgDmtrArr.push(this.dsKoftrExmn.getColumn(i, "avrgDmtr"));
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

        //임목생장 자동계산 버튼 클릭
        this.btnAtmtcCscct_onclick = function(obj,e) {//lib::libAtmtcCscct.xjs
        	// 법정축적
        	this.requestCalculateByDmntTreeJS();
        	// 연년생장률
        	this.requestCalculateCairt();
        };

        //하층식생 행추가 버튼 클릭
        this.btnLwvgtAddtn_onclick = function(obj,e) {
        	if(this.dsLwvgt.rowcount > 0){
        		let lwvgtNm = this.dsLwvgt.getColumn(this.grdLwvgt.currentrow,"lwvgtNm");
        		let lwvgtCvdgr = parseInt(this.dsLwvgt.getColumn(this.grdLwvgt.currentrow,"lwvgtCvdgr"));
        		if(this.gfnIsNull( this.dsLwvgt.getColumn(this.grdLwvgt.currentrow,"lwvgtNm")) || this.gfnIsEmpty(this.dsLwvgt.getColumn(this.grdLwvgt.currentrow,"lwvgtNm"))){
        			this.grdLwvgt.setCellPos(1, this.dsLwvgt.rowposition);
        			this.grdLwvgt.showEditor(); //focus
        			this.gfnAlert("msg.general", ["하층식생 명칭을 입력해주세요."]);
        			return false;
        		}
        		if(lwvgtCvdgr < 0 || lwvgtCvdgr > 100){
        			this.grdLwvgt.setCellPos(2, this.dsLwvgt.rowposition);
        			this.grdLwvgt.showEditor(); //focus
        			this.gfnAlert("msg.general", ["피복율은 0~100 사이의 값입니다."]);
        			return false;
        		}
        	}
        	this.dsLwvgt.addRow();
        };

        //하층식생 행삭제 버튼 클릭
        this.btnLwvgtDel_onclick = function(obj,e) {
        	this.fnComRowDel(this.dsLwvgt, "chk", 1);
        };

        //종자채취가능여부 클릭 이벤트
        this.divSpcfcFoprd_seedPckngPssblYn_onclick = function(obj,e){
        	if(obj.isChecked() == true){
        		this.divSpcfcFoprd.form.cmbSdgthTpcd.set_enable(true);
        		this.divSpcfcFoprd.form.cmbSdgthKoftrCd.set_enable(true);
        		this.divSpcfcFoprd.form.edtsdgthPsbltyQntt.set_enable(true);
        	}else{
        		this.divSpcfcFoprd.form.cmbSdgthTpcd.set_index(-1);
        		this.divSpcfcFoprd.form.cmbSdgthTpcd.set_enable(false);
        		this.divSpcfcFoprd.form.cmbSdgthKoftrCd.set_index(0);
        		this.divSpcfcFoprd.form.cmbSdgthKoftrCd.set_enable(false);
        		//this.divSpcfcFoprd.form.edtsdgthPsbltyQntt.set_value(0);
        		this.divSpcfcFoprd.form.edtsdgthPsbltyQntt.set_enable(false);
        	}

        };

        // 특정임산물 종류 선택 시 데이터셋 바인딩 이벤트
        this.divSpcfcFoprd_cmbSdgthTpcd_onitemchanged = function(obj,e)
        {
        	if(obj.value == '01'){
        		this.divSpcfcFoprd.form.cmbSdgthKoftrCd.set_innerdataset(this.dsSdgthKoftrCd_S);
        	}else{
        		this.divSpcfcFoprd.form.cmbSdgthKoftrCd.set_innerdataset(this.dsSdgthKoftrCd_P);
        	}
        	this.divSpcfcFoprd.form.cmbSdgthKoftrCd.set_index(0);
        };

        //사업계획 > 조림 행추가 버튼 클릭
        this.btnAffrsAddtn_onclick = function(obj,e) {

        	if(this.dsAffrsWPLs.rowcount > 0){
        		if(this.gfnIsNull(this.dsAffrsWPLs.getColumn(this.grdAffrs.currentrow,"bizKindCd")) || this.gfnIsEmpty(this.dsAffrsWPLs.getColumn(this.grdAffrs.currentrow,"bizKindCd")) ){
        			this.grdAffrs.setCellPos(2, this.dsAffrsWPLs.rowposition);
        			this.grdAffrs.showEditor(); //focus
        			this.gfnAlert("msg.general", ["조림 종별 구분을 선택해주세요."]);
        			return false;
        		}
        		if(this.dsAffrsWPLs.getColumn(this.grdAffrs.currentrow-1,"bizKindCd") == this.dsAffrsWPLs.getColumn(this.grdAffrs.currentrow,"bizKindCd")){
        			this.grdAffrs.setCellPos(2, this.dsAffrsWPLs.rowposition);
        			this.grdAffrs.showEditor(); //focus
        			this.gfnAlert("msg.general", ["조림 종별 구분은 중복 선택할 수 없습니다."]);
        			return false;
        		}
        		let affrsArea = parseFloat(this.dsAffrsWPLs.getColumn(this.grdAffrs.currentrow, "bizArea"));
        		let araTotal = parseFloat(this.divAreaSkill.form.areaTotal.value);
        		if(affrsArea < 0){
        			this.grdAffrs.setCellPos(4, this.dsAffrsWPLs.rowposition);
        			this.grdAffrs.showEditor(); //focus
        			this.gfnAlert("msg.general", ["계획면적은 0 이상 입니다."]);
        			return false;
        		}
        		if(affrsArea > araTotal){
        			this.grdAffrs.setCellPos(4, this.dsAffrsWPLs.rowposition);
        			this.grdAffrs.showEditor(); //focus
        			this.gfnAlert("msg.general", ["계획면적은 지종별 면적 합계("+this.divAreaSkill.form.areaTotal.value+")와\n같거나 작아야합니다."]);
        			return false;
        		}
        		if(parseInt(this.dsAffrsWPLs.getColumn(this.grdAffrs.currentrow, "bizQntt")) < 0){
        			this.grdAffrs.setCellPos(6, this.dsAffrsWPLs.rowposition);
        			this.grdAffrs.showEditor(); //focus
        			this.gfnAlert("msg.general", ["본수는 0 이상 입니다."]);
        			return false;
        		}
        	}
        	this.dsAffrsWPLs.addRow();
        };

        //사업계획 > 조림 행삭제 버튼 클릭
        this.btnAffrsDel_onclick = function(obj,e) {
        	this.fnComRowDel(this.dsAffrsWPLs, "chk", 1);
        };

        //사업계획 > 숲가꾸기 행추가 버튼 클릭
        this.btnFrestGrdnnAddtn_onclick = function(obj,e) {

        	if(this.dsFrestGrdnnWPLs.rowcount > 0){
        		if(this.gfnIsNull(this.dsFrestGrdnnWPLs.getColumn(this.grdFrestGrdnn.currentrow,"bizKindCd")) || this.gfnIsEmpty(this.dsFrestGrdnnWPLs.getColumn(this.grdFrestGrdnn.currentrow,"bizKindCd")) ){
        			this.grdFrestGrdnn.setCellPos(2, this.dsFrestGrdnnWPLs.rowposition);
        			this.grdFrestGrdnn.showEditor(); //focus
        			this.gfnAlert("msg.general", ["숲가꾸기 종별 구분을 선택해주세요."]);
        			return false;
        		}
        		if(this.dsFrestGrdnnWPLs.getColumn(this.grdFrestGrdnn.currentrow-1,"bizKindCd") == this.dsFrestGrdnnWPLs.getColumn(this.grdFrestGrdnn.currentrow,"bizKindCd")){
        			this.grdFrestGrdnn.setCellPos(2, this.dsFrestGrdnnWPLs.rowposition);
        			this.grdFrestGrdnn.showEditor(); //focus
        			this.gfnAlert("msg.general", ["숲가꾸기 종별 구분은 중복 선택할 수 없습니다."]);
        			return false;
        		}
        		if(parseInt(this.dsFrestGrdnnWPLs.getColumn(this.grdFrestGrdnn.currentrow, "bizQntt")) < 0){
        			this.grdFrestGrdnn.setCellPos(4, this.dsFrestGrdnnWPLs.rowposition);
        			this.grdFrestGrdnn.showEditor(); //focus
        			this.gfnAlert("msg.general", ["횟수는 0 이상입니다."]);
        			return false;
        		}
        		let frestGrdnnArea = parseFloat(this.dsFrestGrdnnWPLs.getColumn(this.grdFrestGrdnn.currentrow, "bizArea"));
        		let araTotal = parseFloat(this.divAreaSkill.form.areaTotal.value);
        		if(frestGrdnnArea < 0){
        			this.grdFrestGrdnn.setCellPos(5, this.dsFrestGrdnnWPLs.rowposition);
        			this.grdFrestGrdnn.showEditor(); //focus
        			this.gfnAlert("msg.general", ["계획면적은 0 이상입니다."]);
        			return false;
        		}
        		if(frestGrdnnArea > araTotal){
        			this.grdFrestGrdnn.setCellPos(5, this.dsFrestGrdnnWPLs.rowposition);
        			this.grdFrestGrdnn.showEditor(); //focus
        			this.gfnAlert("msg.general", ["계획면적은 지종별 면적 합계("+this.divAreaSkill.form.areaTotal.value+")와\n같거나 작아야합니다."]);
        			return false;
        		}
        	}
        	this.dsFrestGrdnnWPLs.addRow();
        };

        //사업계획 > 숲가꾸기 행삭제 버튼 클릭
        this.btnFrestGrdnnDel_onclick = function(obj,e) {
        	this.fnComRowDel(this.dsFrestGrdnnWPLs, "chk", 1);
        };

        //사업계획 > 목재수확(임목생산) 행추가 버튼 클릭
        this.btnFrtrePrdctAddtn_onclick = function(obj,e) {
        	if(this.dsFrtrePrdctWPLs.rowcount > 0){
        		if(this.gfnIsNull(this.dsFrtrePrdctWPLs.getColumn(this.grdFrtrePrdct.currentrow,"bizKindCd")) || this.gfnIsEmpty(this.dsFrtrePrdctWPLs.getColumn(this.grdFrtrePrdct.currentrow,"bizKindCd")) ){
        			this.grdFrtrePrdct.setCellPos(2, this.dsFrtrePrdctWPLs.rowposition);
        			this.grdFrtrePrdct.showEditor(); //focus
        			this.gfnAlert("msg.general", ["목재수확 종별 구분을 선택해주세요."]);
        			return false;
        		}
        		if(this.dsFrtrePrdctWPLs.getColumn(this.grdFrtrePrdct.currentrow-1,"bizKindCd") == this.dsFrtrePrdctWPLs.getColumn(this.grdFrtrePrdct.currentrow,"bizKindCd")){
        			this.grdFrtrePrdct.setCellPos(2, this.dsFrtrePrdctWPLs.rowposition);
        			this.grdFrtrePrdct.showEditor(); //focus
        			this.gfnAlert("msg.general", ["목재수확 종별 구분은 중복 선택할 수 없습니다."]);
        			return false;
        		}
        		let frestGrdnnArea = parseFloat(this.dsFrtrePrdctWPLs.getColumn(this.grdFrtrePrdct.currentrow, "bizArea"));
        		let araTotal = parseFloat(this.divAreaSkill.form.areaTotal.value);
        		if(frestGrdnnArea < 0){
        			this.grdFrtrePrdct.setCellPos(4, this.dsFrtrePrdctWPLs.rowposition);
        			this.grdFrtrePrdct.showEditor(); //focus
        			this.gfnAlert("msg.general", ["계획면적은 0 이상 입니다."]);
        			return false;
        		}
        		if(frestGrdnnArea > araTotal){
        			this.grdFrtrePrdct.setCellPos(4, this.dsFrtrePrdctWPLs.rowposition);
        			this.grdFrtrePrdct.showEditor(); //focus
        			this.gfnAlert("msg.general", ["계획면적은 지종별 면적 합계("+this.divAreaSkill.form.areaTotal.value+")와\n같거나 작아야합니다."]);
        			return false;
        		}
        		let frtrePrdctnFellyRt = parseInt(this.dsFrtrePrdctWPLs.getColumn(this.grdFrtrePrdct.currentrow, "frtrePrdctnFellyRt"));
        		if( frtrePrdctnFellyRt <= 0 || frtrePrdctnFellyRt > 100){
        			this.grdFrtrePrdct.setCellPos(6, this.dsFrtrePrdctWPLs.rowposition);
        			this.grdFrtrePrdct.showEditor(); //focus
        			this.gfnAlert("msg.general", ["목재수확률은 1~100사이 값입니다."]);
        			return false;
        		}
        	}
        	this.dsFrtrePrdctWPLs.addRow();
        };

        //사업계획 > 목재수확(임목생산) 행삭제 버튼 클릭
        this.btnFrtrePrdctDel_onclick = function(obj,e) {
        	this.fnComRowDel(this.dsFrtrePrdctWPLs, "chk", 1);
        };

        //사업계획 > 시설 행추가 버튼 클릭
        this.btnFcltAddtn_onclick = function(obj,e) {
        	if(this.dsFcltWPLs.rowcount > 0){
        		if(this.gfnIsNull(this.dsFcltWPLs.getColumn(this.grdFclt.currentrow,"bizKindCd")) || this.gfnIsEmpty(this.dsFcltWPLs.getColumn(this.grdFclt.currentrow,"bizKindCd")) ){
        			this.grdFclt.setCellPos(2, this.dsFcltWPLs.rowposition);
        			this.grdFclt.showEditor(); //focus
        			this.gfnAlert("msg.general", ["시설 종별 구분을 선택해주세요."]);
        			return false;
        		}
        		if(this.dsFcltWPLs.getColumn(this.grdFclt.currentrow-1,"bizKindCd") == this.dsFcltWPLs.getColumn(this.grdFclt.currentrow,"bizKindCd")){
        			this.grdFclt.setCellPos(2, this.dsFcltWPLs.rowposition);
        			this.grdFclt.showEditor(); //focus
        			this.gfnAlert("msg.general", ["시설 종별 구분은 중복 선택할 수 없습니다."]);
        			return false;
        		}
        		let fcltQntt = parseFloat(this.dsFcltWPLs.getColumn(this.grdFclt.currentrow, "bizQntt"));
        		let araTotal = parseFloat(this.divAreaSkill.form.areaTotal.value);
        		if(fcltQntt < 0){
        			this.grdFclt.setCellPos(4, this.dsFcltWPLs.rowposition);
        			this.grdFclt.showEditor(); //focus
        			this.gfnAlert("msg.general", ["계획물량은 0 이상 입니다."]);
        			return false;

        		}
        		if(fcltQntt > araTotal){
        			this.grdFclt.setCellPos(4, this.dsFcltWPLs.rowposition);
        			this.grdFclt.showEditor(); //focus
        			this.gfnAlert("msg.general", ["계획물량은 지종별 면적 합계("+this.divAreaSkill.form.areaTotal.value+")와\n같거나 작아야합니다."]);
        			return false;
        		}
        	}
        	this.dsFcltWPLs.addRow();
        };

        //사업계획 > 시설 행삭제 버튼 클릭
        this.btnFcltDel_onclick = function(obj,e) {
        	this.fnComRowDel(this.dsFcltWPLs, "chk", 1);
        };

        //사업계획 > 소득 행추가 버튼 클릭
        this.btnIncmAddtn_onclick = function(obj,e) {
        	if(this.dsEarnWPLs.rowcount > 0){
        		if(this.gfnIsNull(this.dsEarnWPLs.getColumn(this.grdEarn.currentrow,"bizKindCd")) || this.gfnIsEmpty(this.dsEarnWPLs.getColumn(this.grdEarn.currentrow,"bizKindCd")) ){
        			this.grdEarn.setCellPos(2, this.dsEarnWPLs.rowposition);
        			this.grdEarn.showEditor(); //focus
        			this.gfnAlert("msg.general", ["소득 종별 구분을 선택해주세요."]);
        			return false;
        		}
        		if(this.dsEarnWPLs.getColumn(this.grdEarn.currentrow-1,"bizKindCd") == this.dsEarnWPLs.getColumn(this.grdEarn.currentrow,"bizKindCd")){
        			this.grdEarn.setCellPos(2, this.dsEarnWPLs.rowposition);
        			this.grdEarn.showEditor(); //focus
        			this.gfnAlert("msg.general", ["소득 종별 구분은 중복 선택할 수 없습니다."]);
        			return false;
        		}
        		let incmQntt = parseFloat(this.dsEarnWPLs.getColumn(this.grdEarn.currentrow, "bizQntt"));
        		let araTotal = parseFloat(this.divAreaSkill.form.areaTotal.value);
        		if(incmQntt < 0){
        			this.grdEarn.setCellPos(5, this.dsEarnWPLs.rowposition);
        			this.grdEarn.showEditor(); //focus
        			this.gfnAlert("msg.general", ["계획물량은 0이상 입니다."]);
        			return false;
        		}
        		if(incmQntt > araTotal){
        			this.grdEarn.setCellPos(5, this.dsEarnWPLs.rowposition);
        			this.grdEarn.showEditor(); //focus
        			this.gfnAlert("msg.general", ["계획물량은 지종별 면적 합계("+this.divAreaSkill.form.areaTotal.value+")와\n같거나 작아야합니다."]);
        			return false;
        		}
        		if(this.gfnIsNull(this.dsEarnWPLs.getColumn(this.grdEarn.currentrow,"bizLbper")) || this.gfnIsEmpty(this.dsEarnWPLs.getColumn(this.grdEarn.currentrow,"bizLbper"))){
        			this.grdEarn.setCellPos(6, this.dsEarnWPLs.rowposition);
        			this.grdEarn.showEditor(); //focus
        			this.gfnAlert("msg.general", ["노동력(명)을 입력해주세요."]);
        			return false;
        		}
        		if(parseFloat(this.dsEarnWPLs.getColumn(this.grdEarn.currentrow,"bizLbper")) < 0){
        			this.grdEarn.setCellPos(6, this.dsEarnWPLs.rowposition);
        			this.grdEarn.showEditor(); //focus
        			this.gfnAlert("msg.general", ["노동력(명)은 0이상 입니다."]);
        			return false;
        		}
        		if(parseInt(this.dsEarnWPLs.getColumn(this.grdEarn.currentrow,"bizAmt")) <0){
        			this.grdEarn.setCellPos(7, this.dsEarnWPLs.rowposition);
        			this.grdEarn.showEditor(); //focus
        			this.gfnAlert("msg.general", ["사업비(천원)는 0이상 입니다."]);
        			return false;
        		}
        		if(this.gfnIsNull(this.dsEarnWPLs.getColumn(this.grdEarn.currentrow,"bizAmt")) || this.gfnIsEmpty(this.dsEarnWPLs.getColumn(this.grdEarn.currentrow,"bizAmt"))){
        			this.grdEarn.setCellPos(7, this.dsEarnWPLs.rowposition);
        			this.grdEarn.showEditor(); //focus
        			this.gfnAlert("msg.general", ["사업비(천원)를 입력해주세요."]);
        			return false;
        		}
        	}
        	this.dsEarnWPLs.addRow();
        };

        //사업계획 > 소득 행삭제 버튼 클릭
        this.btnIncmDel_onclick = function(obj,e) {
        	this.fnComRowDel(this.dsEarnWPLs, "chk", 1);
        };

        //노동력 자동계산 호출 함수
        this.area_cancolumnchange = function(obj,e) {

        	if(obj.name == "dsFrestGrdnnWPLs" && e.columnid == "bizArea"){
        		this.frestGrdnnAccmlArea(e.row, e.newvalue, this.dsFrestGrdnnWPLs.getColumn(e.row, "bizQntt"));
        	}else if(obj.name == "dsFrestGrdnnWPLs" && e.columnid == "bizQntt"){
        		this.frestGrdnnAccmlArea(e.row, this.dsFrestGrdnnWPLs.getColumn(e.row, "bizArea"), e.newvalue);
        	}

        	if(e.columnid == "bizArea" || e.columnid == "totBizPrdctnWdvlm" || (obj.name == "dsFcltWPLs" && e.columnid == "bizQntt") || (obj.name == "dsEarnWPLs" && e.columnid == "bizQntt")){
        		var type;
        		if(obj.name == "dsAffrsWPLs") type = 1;
        		if(obj.name == "dsFrestGrdnnWPLs") type = 2;
        		if(obj.name == "dsFrtrePrdctWPLs") type = 3;
        		if(obj.name == "dsFcltWPLs") type = 4;
        		//if(obj.name == "dsEarnWPLs") type = 5;
        		this.attachAreaBlur(e.newvalue, type, e.row);
        	}
        }

        this.grd_oncellclick = function(obj,e) {

        	if (obj.id == "grdFrtrePrdct" && e.cell == "9"){
        		this.dsFrtreWdvlms.clearData();

        		var koftrCd = this[obj.binddataset].getColumn(e.row, "koftrCd");
        		var bizPrdctnWdvlm = this[obj.binddataset].getColumn(e.row, "bizPrdctnWdvlm");
        		var wplbkBizSeq = this[obj.binddataset].getColumn(e.row, "wplbkBizSeq");
        		var koftrNm = this[obj.binddataset].getColumn(e.row, "koftrNm");

        		if(typeof wplbkBizSeq === 'undefined') {
        			wplbkBizSeq = e.row+1;
        			this[obj.binddataset].setColumn(e.row, "wplbkBizSeq", e.row+1);
        		}


        		if(!this.gfnIsNull(koftrCd)){
        			var koftrCdArr = koftrCd.split(",");
        			var bizPrdctnWdvlmArr = bizPrdctnWdvlm.split(",");
        			var koftrNmArr = koftrNm.split(",");
        			for(var i = 0; i < koftrCdArr.length; i++){
        				this.dsFrtreWdvlms.addRow();
        				this.dsFrtreWdvlms.setColumn(i, "koftrCd", koftrCdArr[i]);
        				this.dsFrtreWdvlms.setColumn(i, "bizPrdctnWdvlm", bizPrdctnWdvlmArr[i].replace("\r\n", ""));
        				this.dsFrtreWdvlms.setColumn(i, "wplbkBizSeq", wplbkBizSeq);
        				this.dsFrtreWdvlms.setColumn(i, "koftrNm", koftrNmArr[i].replace("\r\n", ""));
        			}
        		}

        		this.pdivFrtrePrdct.form.wplbkBizSeq.set_value(wplbkBizSeq);

        		var nX = parseInt(e.clientx)-400; // 마우스 또는 터치 위치의 x 좌표값
        		var nY = parseInt(e.clienty)-200; // 마우스 또는 터치 위치의 y 좌표값

        		this.pdivFrtrePrdct.trackPopupByComponent(obj, nX, nY); // obj(그리드) 중심으로 x,y 좌표값 설정
        	}
        };

        //목재수확(임목생산) 수종 추가 팝업 > 행추가 버튼 클릭
        this.pdivFrtrePrdct_btnFrtrePrdctPopAdd_onclick = function(obj,e) {
        	this.dsFrtreWdvlms.addRow();
        };

        //목재수확(임목생산) 수종 추가 팝업 > 행삭제 버튼 클릭
        this.pdivFrtrePrdct_btnFrtrePrdctPopDel_onclick = function(obj,e) {
        	this.fnComRowDel(this.dsFrtreWdvlms, "chk", 1);
        };

        //목재수확(임목생산) 수종 저장 버튼 클릭
        this.pdivFrtrePrdct_btnFrtrePrdctPopSave_onclick = function(obj,e) {
        	var frtreWdvlmscnt = this.dsFrtreWdvlms.rowcount;
        	var wplbkBizSeq = this.pdivFrtrePrdct.form.wplbkBizSeq.value;
        	var koftrCd = "";
        	var bizPrdctnWdvlm = "";
        	var koftrNm = "";

        	// 중복 수종검사
        	for(var i = 0; i < frtreWdvlmscnt; i++){
        		var koftrCd1 = this.dsFrtreWdvlms.getColumn(i, "koftrCd");
        		for(var j = i+1; j < frtreWdvlmscnt; j++){
        			var koftrCd2 = this.dsFrtreWdvlms.getColumn(j, "koftrCd");
        			if(koftrCd1 == koftrCd2){
        				this.gfnAlert("msg.general", ["동일한 수종이 있습니다."]);
        				return false;
        			}
        		}
        	}

        	// 목재수확(목재수확)재적
        	this.gfnClearValidation(this.dsFrtreWdvlms);

        	this.gfnSetValidation(this.dsFrtreWdvlms, "bizPrdctnWdvlm", "목재수확재적(㎥)", "required,range:0:10000000000");

        	if(!this.gfnValidation(this.dsFrtreWdvlms, "A")) {
        		return false;
        	}

        	// 목재수확(임목생산)총재적
        	var totBizPrdctnWdvlm = 0.0;
        	for(var i = 0; i < frtreWdvlmscnt; i++){
        		koftrCd += this.dsFrtreWdvlms.getColumn(i, "koftrCd");
        		bizPrdctnWdvlm += this.dsFrtreWdvlms.getColumn(i, "bizPrdctnWdvlm");

        		totBizPrdctnWdvlm += parseFloat(this.dsFrtreWdvlms.getColumn(i, "bizPrdctnWdvlm"));

        		var index = this.dsKoftrCd.findRow("code", this.dsFrtreWdvlms.getColumn(i, "koftrCd"));
        		koftrNm += this.dsKoftrCd.getColumn(index, "data");

        		if(i < frtreWdvlmscnt-1){
        			koftrCd += ",";
        			bizPrdctnWdvlm += ",";
        			koftrNm += ",";
        		}
        	}

        	var frtrePrdctWPLsCnt = this.dsFrtrePrdctWPLs.rowcount;

        	for(var i = 0; i < frtrePrdctWPLsCnt; i++){
        		var prdctNo = this.dsFrtrePrdctWPLs.getColumn(i, "wplbkBizSeq");

        		if(prdctNo == wplbkBizSeq){
        			this.dsFrtrePrdctWPLs.setColumn(i, "koftrCd", koftrCd);
        			this.dsFrtrePrdctWPLs.setColumn(i, "bizPrdctnWdvlm", bizPrdctnWdvlm);
        			this.dsFrtrePrdctWPLs.setColumn(i, "koftrNm", koftrNm);
        		}
        	}

        	// 목재수확(임목생산) 총재적
        	this.dsFrtrePrdctWPLs.setColumn(wplbkBizSeq-1, "totBizPrdctnWdvlm", totBizPrdctnWdvlm.toFixed(2));

        	this.pdivFrtrePrdct.closePopup();
        }

        //저장버튼
        this.btnSave_onclick = function(obj,e) {
        	if(this.gfnIsNull(this.dsWplbkVO.getColumn(0, "cmblcId")) || this.gfnIsEmpty(this.dsWplbkVO.getColumn(0, "cmblcId"))){
        		this.divWplbk.form.edtSbltId.setFocus();
        		this.gfnAlert("임반은 필수 값입니다.");
        		return false;
        	}

        	if(this.gfnIsNull(this.divWplbk.form.edtSbltId.value) || this.gfnIsEmpty(this.divWplbk.form.edtSbltId.value)){
        		this.divWplbk.form.edtSbltId.setFocus();
        		this.gfnAlert("소반은 필수 값입니다.");
        		return false;
        	}
        	if(this.gfnDsIsUpdated(this.dsWplbkVO) == false && this.gfnDsIsUpdated(this.dsSbltLctn) == false
        		&& this.gfnDsIsUpdated(this.dsSttyApwod) == false && this.gfnDsIsUpdated(this.dsGoalFrtp) == false
        		&& this.gfnDsIsUpdated(this.dsMnfrsExmn) == false && this.gfnDsIsUpdated(this.dsKoftrExmn) == false
        		&& this.gfnDsIsUpdated(this.dsLwvgt) == false && this.gfnDsIsUpdated(this.dsAffrsWPLs) == false
        		&& this.gfnDsIsUpdated(this.dsFrestGrdnnWPLs) == false && this.gfnDsIsUpdated(this.dsFrtrePrdctWPLs) == false
        		&& this.gfnDsIsUpdated(this.dsFcltWPLs) == false && this.gfnDsIsUpdated(this.dsEarnWPLs) == false) {
        		// 변경된 내역이 없습니다.
        		this.gfnAlert("msg.save.nochange");
        		return false;
        	}
        	//입목지가 존재할때
        	if(parseFloat(this.dsWplbkVO.getColumn(0, "stlndArea")) > 0){
        		if(this.gfnIsNull(this.dsMnfrsExmn.getColumn(0 , "frorCd")) || this.gfnIsEmpty(this.dsMnfrsExmn.getColumn(0 , "frorCd"))){
        			this.grdFrstt.setCellPos(3);
        			this.grdFrstt.showEditor(); //focus
        			this.gfnAlert("임종은 필수 값입니다.");
        			return false;
        		}
        		if(this.gfnIsNull(this.dsMnfrsExmn.getColumn(0 , "frtpTpcd")) || this.gfnIsEmpty(this.dsMnfrsExmn.getColumn(0 , "frtpTpcd"))){
        			this.grdFrstt.setCellPos(4);
        			this.grdFrstt.showEditor(); //focus
        			this.gfnAlert("임상은 필수 값입니다.");
        			return false;
        		}
        		if(this.gfnIsNull(this.dsMnfrsExmn.getColumn(0 , "crdnsCd")) || this.gfnIsEmpty(this.dsMnfrsExmn.getColumn(0 , "crdnsCd"))){
        			this.grdFrstt.setCellPos(5);
        			this.grdFrstt.showEditor(); //focus
        			this.gfnAlert("소밀도는 필수 값입니다.");
        			return false;
        		}
        	}
        	//입목지가 0일때
        	let cntYoungTree = 0;
        	for(let k = 0; k < this.dsKoftrExmn.rowcount; k++){
        		if(parseFloat(this.dsKoftrExmn.getColumn(k, "avrgDmtr")) < 6.0){
        			cntYoungTree++;
        		}
        	}
        	//법정지정림
        	for(let k = 0 ; k < this.dsSttyApwod.rowcount; k++){
        		let sttyApwodArea = parseFloat(this.dsSttyApwod.getColumn(k,"sttyApwodArea"));
        		if(k > 0){
        			if(this.dsSttyApwod.getColumn(k-1,"sttyApwodCd") == this.dsSttyApwod.getColumn(k,"sttyApwodCd")){
        				this.grdSttyApwod.setCellPos(1, k);
        				this.grdSttyApwod.showEditor(); //focus
        				this.gfnAlert((k)+"행 법정지정림은 중복될 수 없습니다.");
        				return false;
        			}
        		}
        		if(sttyApwodArea < 0){
        			this.grdSttyApwod.setCellPos(2, k);
        			this.grdSttyApwod.showEditor(); //focus
        			this.gfnAlert((k+1)+"행 법정지정림 면적은 0 이상입니다.");
        			return false;
        		}
        		if(sttyApwodArea > parseFloat(this.divAreaSkill.form.areaTotal.value)){
        			this.grdSttyApwod.setCellPos(2, k);
        			this.grdSttyApwod.showEditor(); //focus
        			this.gfnAlert((k+1)+"행 법정지정림 면적은\n지종별 면적 합계보다 클 수 없습니다.");
        			return false;
        		}
        	}

        	if(parseFloat(this.dsWplbkVO.getColumn(0, "stlndArea")) == 0 || cntYoungTree > 0){
        		if(this.gfnIsNull(this.dsMnfrsExmn.getColumn(0 , "dmtreTrhgh")) || this.gfnIsEmpty(this.dsMnfrsExmn.getColumn(0 , "dmtreTrhgh"))){
        			this.grdFrstt.setCellPos(1);
        			this.grdFrstt.showEditor(); //focus
        			this.gfnAlert("우세목수고는 필수 값입니다.");
        			return false;
        		}
        		if(this.gfnIsNull(this.dsMnfrsExmn.getColumn(0 , "dmtreFrag")) || this.gfnIsEmpty(this.dsMnfrsExmn.getColumn(0 , "dmtreFrag"))){
        			this.grdFrstt.setCellPos(2);
        			this.grdFrstt.showEditor(); //focus
        			this.gfnAlert("우세목임령은 필수 값입니다.");
        			return false;
        		}
        	}
        	//표고 최대최소 비교
        	let alttdMnmmVl = parseInt(this.dsMnfrsExmn.getColumn(0, "alttdMnmmVl"));
        	let alttdMxmmVl = parseInt(this.dsMnfrsExmn.getColumn(0, "alttdMxmmVl"));
        	if(alttdMxmmVl < alttdMnmmVl){
        		this.grdShp.setCellPos(4);
        		this.grdShp.showEditor(); //focus
        		this.gfnAlert("msg.general", ["표고 최대는 표고 최소값보다 커야합니다."]);
        		return false;
        	}

        	if(this.gfnDsIsUpdated(this.dsKoftrExmn)){
        		let koftrArr = [];
        		var rowCnt = this.dsKoftrExmn.rowcount;
        		for(var i = 0 ; i < rowCnt; i++){
        			if(this.gfnIsNull(this.dsKoftrExmn.getColumn(i, "mixtrRt")) || this.gfnIsNull(this.dsKoftrExmn.getColumn(i, "avrgFrag"))
        				|| this.gfnIsNull(this.dsKoftrExmn.getColumn(i, "avrgTrhgh")) || this.gfnIsNull(this.dsKoftrExmn.getColumn(i, "avrgDmtr"))
        				|| this.gfnIsNull(this.dsKoftrExmn.getColumn(i, "mxmmFrag")) || this.gfnIsNull(this.dsKoftrExmn.getColumn(i, "mnmmFrag"))
        				|| this.gfnIsNull(this.dsKoftrExmn.getColumn(i, "topTrhgh")) || this.gfnIsNull(this.dsKoftrExmn.getColumn(i, "lowstTrhgh"))
        				|| this.gfnIsNull(this.dsKoftrExmn.getColumn(i, "mainKoftrMxmmDmtr")) || this.gfnIsNull(this.dsKoftrExmn.getColumn(i, "mainKoftrMnmmDmtr"))){
        				this.grdKoftrExmn.setCellPos(i);
        				this.gfnAlert("주요 수종조사 내용을 입력해주세요.");
        				return false;
        			}

        			if(parseFloat(this.dsKoftrExmn.getColumn(i,"mixtrRt")) > 100 || parseFloat(this.dsKoftrExmn.getColumn(i,"mixtrRt")) < 0){
        				this.grdKoftrExmn.setCellPos(3, i);
        				this.dsKoftrExmn.setColumn(this.dsKoftrExmn.rowposition,"mixtrRt", 0);
        				this.gfnAlert("msg.general", ["혼효율은 0~100 사이의 값입니다."]);
        				return false;
        			}

        			//최소임령
        			if(parseInt(this.dsKoftrExmn.getColumn(i, "mnmmFrag")) < 0 || parseInt(this.dsKoftrExmn.getColumn(i, "mnmmFrag")) > 1000){ //8,10
        				this.grdKoftrExmn.setCellPos(8, i);
        				this.gfnAlert("msg.general", ["임령은 0~1000 사이의 값입니다."]);
        				return false;
        			}
        			//최대임령
        			if(parseInt(this.dsKoftrExmn.getColumn(i, "mxmmFrag")) < 0 || parseInt(this.dsKoftrExmn.getColumn(i, "mxmmFrag")) > 1000){ //8,10
        				this.grdKoftrExmn.setCellPos(10, i);
        				this.gfnAlert("msg.general", ["임령은 0~1000 사이의 값입니다."]);
        				return false;
        			}
        			if(parseInt(this.dsKoftrExmn.getColumn(i, "mxmmFrag")) < parseInt(this.dsKoftrExmn.getColumn(i, "mnmmFrag"))){
        				this.grdKoftrExmn.setCellPos(10, i);
        				this.gfnAlert("msg.general", ["최대임령은 최소임령 값보다 커야합니다."]);
        				return false;
        			}
        			if(parseInt(this.dsKoftrExmn.getColumn(i, "avrgFrag")) > 0 && (typeof this.dsKoftrExmn.getColumn(i, "mxmmFrag") == "undefined" || typeof this.dsKoftrExmn.getColumn(i, "mnmmFrag") == "undefined")){
        				this.grdKoftrExmn.setCellPos(8, i);
        				this.gfnAlert("msg.general", ["최소임령/최대임령을 입력해주세요."]);
        				return false;
        			}
        			//평균임령
        			if(parseInt(this.dsKoftrExmn.getColumn(i, "avrgFrag")) < 0 || parseInt(this.dsKoftrExmn.getColumn(i, "avrgFrag")) >1000){
        				this.grdKoftrExmn.setCellPos(4, i);
        				this.gfnAlert("msg.general", ["평균임령은 0~1000 사이의 값입니다."]);
        				return false;
        			}
        			if(parseInt(this.dsKoftrExmn.getColumn(i, "avrgFrag")) > parseInt(this.dsKoftrExmn.getColumn(i, "mxmmFrag"))
        				|| parseInt(this.dsKoftrExmn.getColumn(i, "avrgFrag")) < parseInt(this.dsKoftrExmn.getColumn(i, "mnmmFrag"))){
        				this.grdKoftrExmn.setCellPos(4, i);
        				this.gfnAlert("msg.general", ["평균임령은\n최소임령과 최대임령 사이어야 합니다."]);
        				return false;
        			}

        			//최소수고
        		   if(parseInt(this.dsKoftrExmn.getColumn(i, "lowstTrhgh")) < 0 || parseInt(this.dsKoftrExmn.getColumn(i, "lowstTrhgh")) > 10000){
        				this.grdKoftrExmn.setCellPos(11, i);
        				this.gfnAlert("msg.general", ["수고는 0~10000 사이의 값입니다."]);
        				return false;
        			}
        			//최대수고
        			if(parseInt(this.dsKoftrExmn.getColumn(i, "topTrhgh")) < 0 || parseInt(this.dsKoftrExmn.getColumn(i, "topTrhgh")) > 10000){
        				this.grdKoftrExmn.setCellPos(13, i);
        				this.gfnAlert("msg.general", ["수고는 0~10000 사이의 값입니다."]);
        				return false;
        			}
        			if(parseInt(this.dsKoftrExmn.getColumn(i, "topTrhgh")) < parseInt(this.dsKoftrExmn.getColumn(i, "lowstTrhgh"))) {
        				this.grdKoftrExmn.setCellPos(13, i);
        				this.gfnAlert("msg.general", ["최대수고 값은\n최소수고 값보다 같거나 커야합니다."]);
        				return false;
        			}
        			if(parseInt(this.dsKoftrExmn.getColumn(i, "avrgTrhgh")) > 0
        				&& (typeof this.dsKoftrExmn.getColumn(i, "topTrhgh") == "undefined" || typeof this.dsKoftrExmn.getColumn(i, "lowstTrhgh") == "undefined")){
        				this.grdKoftrExmn.setCellPos(11, i);
        				this.gfnAlert("msg.general", ["최소수고/최대수고를 입력해주세요."]);
        				return false;
        			}
        			//평균수고
        				if(parseInt(this.dsKoftrExmn.getColumn(i, "avrgTrhgh")) < 0 || parseInt(this.dsKoftrExmn.getColumn(i, "avrgTrhgh")) > 10000) {
        				this.grdKoftrExmn.setCellPos(6, i);
        				this.gfnAlert("msg.general", ["평균수고는 0~10000 사이의 값입니다."]);
        				return false;
        			}
        			if(parseInt(this.dsKoftrExmn.getColumn(i, "avrgTrhgh")) <  parseInt(this.dsKoftrExmn.getColumn(i, "lowstTrhgh"))
        				|| parseInt(this.dsKoftrExmn.getColumn(i, "avrgTrhgh")) > parseInt(this.dsKoftrExmn.getColumn(i, "topTrhgh"))) {
        				this.grdKoftrExmn.setCellPos(6, i);
        				this.gfnAlert("msg.general", ["평균수고는\n최소수고과 최대수고 사이어야 합니다."]);
        				return false;
        			}

        			//최소경급
        			if(parseInt(this.dsKoftrExmn.getColumn(i, "mainKoftrMnmmDmtr")) < 0 || parseInt(this.dsKoftrExmn.getColumn(i, "mainKoftrMnmmDmtr")) > 100){
        				this.grdKoftrExmn.setCellPos(14, i);
        				this.gfnAlert("msg.general", ["경급은 0~100 사이의 값입니다."]);
        				return false;
        			}
        			//최대경급
        			if(parseInt(this.dsKoftrExmn.getColumn(i, "mainKoftrMxmmDmtr")) < 0 || parseInt(this.dsKoftrExmn.getColumn(i, "mainKoftrMxmmDmtr")) > 100){
        				this.grdKoftrExmn.setCellPos(16, i);
        				this.gfnAlert("msg.general", ["경급은 0~100 사이의 값입니다."]);
        				return false;
        			}
        			//최대경급
        			if(parseInt(this.dsKoftrExmn.getColumn(i, "mainKoftrMxmmDmtr")) < parseInt(this.dsKoftrExmn.getColumn(i, "mainKoftrMnmmDmtr"))) {
        				this.grdKoftrExmn.setCellPos(16, i);
        				this.gfnAlert("msg.general", ["최대경급 값은\n최소경급 값보다 같거나 커야합니다."]);
        				return false;
        			}
        			if(parseInt(this.dsKoftrExmn.getColumn(i, "avrgDmtr")) > 0 && (typeof this.dsKoftrExmn.getColumn(i, "mainKoftrMxmmDmtr") == "undefined" || typeof this.dsKoftrExmn.getColumn(i, "mainKoftrMnmmDmtr") == "undefined")){
        				this.grdKoftrExmn.setCellPos(14, i);
        				this.gfnAlert("msg.general", ["최소경급/최대경급을 입력해주세요."]);
        				return false;
        			}
        			//평균경급
        			if(parseInt(this.dsKoftrExmn.getColumn(i, "avrgDmtr")) < 0 || parseInt(this.dsKoftrExmn.getColumn(i, "avrgDmtr")) > 100) {
        				this.grdKoftrExmn.setCellPos(7, i);
        				this.gfnAlert("msg.general", ["평균경급는 0~100 사이의 값입니다."]);
        				return false;
        			}
        			if(parseInt(this.dsKoftrExmn.getColumn(i, "avrgDmtr")) < parseInt(this.dsKoftrExmn.getColumn(i, "mainKoftrMnmmDmtr")) || parseInt(this.dsKoftrExmn.getColumn(i, "avrgDmtr")) > parseInt(this.dsKoftrExmn.getColumn(i, "mainKoftrMxmmDmtr"))) {
        				this.grdKoftrExmn.setCellPos(7, i);
        				this.gfnAlert("msg.general", ["평균경급는\n최소경급과 최대경급 사이어야 합니다."]);
        				return false;
        			}

        			if(i>0){
        				if(this.dsKoftrExmn.getColumn(i-1, "koftrCd") == this.dsKoftrExmn.getColumn(i, "koftrCd")){
        					this.grdKoftrExmn.setCellPos(i);
        					this.gfnAlert("주요 수종조사 수종은 중복될 수 없습니다.");
        					return false;
        				}
        			}
        			var location = this.dsKoftrCd.findRow("code", this.dsKoftrExmn.getColumn(i, "koftrCd"));
        			koftrArr.push(this.dsKoftrCd.getColumn(location, "upDtlCdId"));
        		}
        		let sumMixtrRt = 0.0;
        		for(let t = 0 ; t <this.dsKoftrExmn.rowcount; t++){
        			sumMixtrRt += parseFloat(this.dsKoftrExmn.getColumn(t, "mixtrRt"));
        		}
        		if(parseFloat(sumMixtrRt) != 100){
        			this.grdSttyApwod.setCellPos(3, 0);
        			this.grdSttyApwod.showEditor(); //focus
        			this.gfnAlert("msg.general", ["주요수종의 혼효율\n총 합은 100이 되어야합니다."]);
        			return false;
        		}

        		//임상 유효성체크
        		if(koftrArr.length > 0){
        			if(koftrArr.includes('10') && koftrArr.includes('20')){
        				if(this.dsMnfrsExmn.getColumn(0, "frtpTpcd") != "30"){
        					this.grdFrstt.setCellPos(4);
        					this.grdSttyApwod.showEditor(); //focus
        					this.gfnAlert("msg.general", ["임상은 혼효림이여야합니다."]);
        					return false;
        				}
        				this.dsMnfrsExmn.setColumn(0, "frtpTpcd", "30");
        			}else if(koftrArr.includes('10')){
        				if(this.dsMnfrsExmn.getColumn(0, "frtpTpcd") != "10"){
        					this.grdFrstt.setCellPos(4);
        					this.grdSttyApwod.showEditor(); //focus
        					this.gfnAlert("msg.general", ["임상은 침엽수림이여야합니다."]);
        					return false;
        				}
        				this.dsMnfrsExmn.setColumn(0, "frtpTpcd", "10");
        			}else if(koftrArr.includes('20')){
        				if(this.dsMnfrsExmn.getColumn(0, "frtpTpcd") != "20"){
        					this.grdFrstt.setCellPos(4);
        					this.grdSttyApwod.showEditor(); //focus
        					this.gfnAlert("msg.general", ["임상은 활엽수림이여야합니다."]);
        					return false;
        				}
        				this.dsMnfrsExmn.setColumn(0, "frtpTpcd", "20");
        			}
        		}
        	}

        	if(this.gfnDsIsUpdated(this.dsMnfrsExmn)){
        		if(this.gfnIsNull(this.dsMnfrsExmn.getColumn(0, "haPartyRealtAccmnArea"))){
        			this.grdAtmtcCscct.setCellPos(0);
        			this.gfnAlert("ha당 현실축적 값을 입력해주세요.");
        			return false;
        		}
        		if(parseFloat(this.dsMnfrsExmn.getColumn(0, "haPartyRealtAccmnArea"))< 0){
        			this.grdAtmtcCscct.setCellPos(0);
        			this.gfnAlert("ha당 현실축적 값은 0 이상 입니다.");
        			return false;
        		}

        	}

        	if(this.gfnDsIsUpdated(this.dsLwvgt)){
        		var rowCnt = this.dsLwvgt.rowcount;
        		for(var i = 0 ; i < rowCnt; i++){
        			if(this.gfnIsNull(this.dsLwvgt.getColumn(i, "lwvgtNm"))|| this.gfnIsNull(this.dsLwvgt.getColumn(i, "lwvgtCvdgr"))){
        				this.grdLwvgt.setCellPos(i);
        				this.gfnAlert("하층식생 내용을 입력해주세요.");
        				return false;
        			}
        			if(this.gfnIsNull(this.dsLwvgt.getColumn(i, "lwvgtCvdgr"))){
        				this.dsLwvgt.setColumn(i, "lwvgtCvdgr", "0");
        			}
        			if(parseFloat(this.dsLwvgt.getColumn(i, "lwvgtCvdgr")) < 0 || parseFloat(this.dsLwvgt.getColumn(i, "lwvgtCvdgr")) > 100){
        				this.grdLwvgt.setCellPos(i);
        				this.gfnAlert("하층식생 피복율은 0~100 사이값입니다..");
        				return false;
        			}
        		}
        	}
        	if(this.dsMnfrsExmn.getColumn(0,"seedPckngPsbltyYn") == true || this.dsMnfrsExmn.getColumn(0,"seedPckngPsbltyYn") =='Y'){
        		if(this.gfnIsNull(this.dsMnfrsExmn.getColumn(0, "sdgthTpcd")) || this.gfnIsEmpty(this.dsMnfrsExmn.getColumn(0, "sdgthTpcd"))){
        			this.divSpcfcFoprd.form.cmbSdgthTpcd.setFocus();
        			this.gfnAlert("msg.general", ["특정임산물 종류를 선택해주세요."]);
        			return false;
        		}
        		if(this.gfnIsNull(this.dsMnfrsExmn.getColumn(0, "sdgthKoftrCd")) || this.gfnIsEmpty(this.dsMnfrsExmn.getColumn(0, "sdgthKoftrCd"))){
        			this.divSpcfcFoprd.form.cmbSdgthKoftrCd.setFocus();
        			this.gfnAlert("msg.general", ["특정임산물 수종을 선택해주세요."]);
        			return false;
        		}
        		let sdgthPsbltyQntt = parseFloat(this.dsMnfrsExmn.getColumn(0, "sdgthPsbltyQntt"));
        		if( sdgthPsbltyQntt <= 0){
        			this.divSpcfcFoprd.form.edtsdgthPsbltyQntt.setFocus();
        			this.gfnAlert("msg.general", ["가능량은 1~9999.9사이의 값입니다."]);
        			return false;
        		}
        	}
        	if(this.gfnDsIsUpdated(this.dsAffrsWPLs)){
        		var rowCnt = this.dsAffrsWPLs.rowcount;
        		for(var i = 0 ; i < rowCnt; i++){
        			if(this.dsAffrsWPLs.getColumn(i, "bizKindCd") == "50"){
        				if(this.gfnIsNull(this.dsAffrsWPLs.getColumn(i, "urgntCd")) || this.gfnIsNull(this.dsAffrsWPLs.getColumn(i, "bizKindCd"))
        					|| this.gfnIsNull(this.dsAffrsWPLs.getColumn(i, "bizArea")) ){
        					this.grdAffrs.setCellPos(i);
        					this.gfnAlert("조림예정지정리 내용을 입력해주세요.");
        					return false;
        				}
        				if(parseFloat(this.dsAffrsWPLs.getColumn(i,"bizArea")) < 0){
        					this.grdAffrs.setCellPos(4, this.dsAffrsWPLs.rowposition);
        					this.gfnAlert("msg.general", ["조림 면적은 0 이상입니다."]);
        					return false;
        				}
        				if(parseFloat(this.dsAffrsWPLs.getColumn(i,"bizArea")) > parseFloat(this.divAreaSkill.form.areaTotal.value)){
        					this.grdAffrs.setCellPos(4, this.dsAffrsWPLs.rowposition);
        					this.gfnAlert("msg.general", ["조림 면적은\n지종별면적 합계보다 클 수 없습니다."]);
        					return false;
        				}
        				if(parseInt(this.dsAffrsWPLs.getColumn(i,"bizQntt")) < 0){
        					this.grdAffrs.setCellPos(6, this.dsAffrsWPLs.rowposition);
        					this.gfnAlert("msg.general", ["조림 본수는 0이상입니다."]);
        					return false;
        				}
        			}else {
        				if(this.gfnIsNull(this.dsAffrsWPLs.getColumn(i, "urgntCd")) || this.gfnIsNull(this.dsAffrsWPLs.getColumn(i, "bizKindCd"))
        					|| this.gfnIsNull(this.dsAffrsWPLs.getColumn(i, "koftrCd")) || this.gfnIsNull(this.dsAffrsWPLs.getColumn(i, "bizRsnCd"))
        					|| this.gfnIsNull(this.dsAffrsWPLs.getColumn(i, "bizQntt")) || this.gfnIsNull(this.dsAffrsWPLs.getColumn(i, "bizArea")) ){
        					this.grdAffrs.setCellPos(i);
        					this.gfnAlert("조림 내용을 입력해주세요.");
        					return false;
        				}
        				if(parseFloat(this.dsAffrsWPLs.getColumn(i,"bizArea")) < 0){
        					this.grdAffrs.setCellPos(4, this.dsAffrsWPLs.rowposition);
        					this.gfnAlert("msg.general", ["조림 면적은 0 이상입니다."]);
        					return false;
        				}
        				if(parseFloat(this.dsAffrsWPLs.getColumn(i,"bizArea")) > parseFloat(this.divAreaSkill.form.areaTotal.value)){
        					this.grdAffrs.setCellPos(4, this.dsAffrsWPLs.rowposition);
        					this.gfnAlert("msg.general", ["조림 면적은\n지종별면적 합계보다 클 수 없습니다."]);
        					return false;
        				}
        				if(parseInt(this.dsAffrsWPLs.getColumn(i,"bizQntt")) < 0){
        					this.grdAffrs.setCellPos(6, this.dsAffrsWPLs.rowposition);
        					this.gfnAlert("msg.general", ["조림 본수는 0이상입니다."]);
        					return false;
        				}
        			}
        		}
        	}
        	if(this.gfnDsIsUpdated(this.dsFrestGrdnnWPLs)){
        		var rowCnt = this.dsFrestGrdnnWPLs.rowcount;
        		for(var i = 0 ; i < rowCnt; i++){
        			if(this.gfnIsNull(this.dsFrestGrdnnWPLs.getColumn(i, "urgntCd")) || this.gfnIsNull(this.dsFrestGrdnnWPLs.getColumn(i, "bizKindCd"))
        				|| this.gfnIsNull(this.dsFrestGrdnnWPLs.getColumn(i, "bizQntt")) || this.gfnIsNull(this.dsFrestGrdnnWPLs.getColumn(i, "bizArea"))){
        				this.grdFrestGrdnn.setCellPos(i);
        				this.gfnAlert("숲가꾸기 내용을 입력해주세요.");
        				return false;
        			}
        			if(parseInt(this.dsFrestGrdnnWPLs.getColumn(i,"bizQntt")) < 0){
        					this.grdFrestGrdnn.setCellPos(4, this.dsFrestGrdnnWPLs.rowposition);
        					this.gfnAlert("msg.general", ["숲가꾸기 횟수는 0 이상입니다."]);
        					return false;
        			}
        			if(parseFloat(this.dsFrestGrdnnWPLs.getColumn(i,"bizArea")) < 0){
        					this.grdFrestGrdnn.setCellPos(5, this.dsFrestGrdnnWPLs.rowposition);
        					this.gfnAlert("msg.general", ["숲가꾸기 면적은 0 이상입니다."]);
        					return false;
        			}
        			if(parseFloat(this.dsFrestGrdnnWPLs.getColumn(i,"bizArea")) > parseFloat(this.divAreaSkill.form.areaTotal.value)){
        				this.grdFrestGrdnn.setCellPos(5, this.dsFrestGrdnnWPLs.rowposition);
        				this.gfnAlert("msg.general", ["숲가꾸기 면적은\n지종별면적 합계보다 클 수 없습니다."]);
        				return false;
        			}
        		}
        	}

        	if(this.gfnDsIsUpdated(this.dsFrtrePrdctWPLs)){
        		var rowCnt = this.dsFrtrePrdctWPLs.rowcount;
        		for(var i = 0 ; i < rowCnt; i++){
        			if(this.dsFrtrePrdctWPLs.getColumn(i, "bizKindCd") == "01"){
        				if(this.gfnIsNull(this.dsFrtrePrdctWPLs.getColumn(i, "urgntCd")) || this.gfnIsNull(this.dsFrtrePrdctWPLs.getColumn(i, "bizKindCd"))
        					|| this.gfnIsNull(this.dsFrtrePrdctWPLs.getColumn(i, "bizArea")) || this.gfnIsNull(this.dsFrtrePrdctWPLs.getColumn(i, "frtrePrdctnAssrtTpcd"))
        					 || this.gfnIsNull(this.dsFrtrePrdctWPLs.getColumn(i, "frtrePrdctnFellyRt")) || this.gfnIsNull(this.dsFrtrePrdctWPLs.getColumn(i, "prdctnMthdCd"))
        					 || this.gfnIsNull(this.dsFrtrePrdctWPLs.getColumn(i, "totBizPrdctnWdvlm"))){
        					this.grdFrtrePrdct.setCellPos(i);
        					this.gfnAlert("목재수확(주벌) 내용을 입력해주세요.");
        					return false;
        				}
        				if(parseFloat(this.dsFrtrePrdctWPLs.getColumn(i,"bizArea")) < 0){
        					this.grdFrtrePrdct.setCellPos(4, this.dsFrtrePrdctWPLs.rowposition);
        					this.gfnAlert("msg.general", ["목재수확 면적은 0 이상입니다."]);
        					return false;
        				}
        				if(parseFloat(this.dsFrtrePrdctWPLs.getColumn(i,"bizArea")) > parseFloat(this.divAreaSkill.form.areaTotal.value)){
        					this.grdFrtrePrdct.setCellPos(4, this.dsFrtrePrdctWPLs.rowposition);
        					this.gfnAlert("msg.general", ["목재수확 면적은\n지종별면적 합계보다 클 수 없습니다."]);
        					return false;
        				}
        				if(parseInt(this.dsFrtrePrdctWPLs.getColumn(i,"frtrePrdctnFellyRt")) < 1 || parseInt(this.dsFrtrePrdctWPLs.getColumn(i,"frtrePrdctnFellyRt")) > 100){
        					this.grdFrtrePrdct.setCellPos(6, this.dsFrtrePrdctWPLs.rowposition);
        					this.gfnAlert("msg.general", ["목재수확률은 1~100 사이값 입니다."]);
        					return false;
        				}
        			}else{
        				if(this.gfnIsNull(this.dsFrtrePrdctWPLs.getColumn(i, "urgntCd")) || this.gfnIsNull(this.dsFrtrePrdctWPLs.getColumn(i, "bizKindCd"))
        					|| this.gfnIsNull(this.dsFrtrePrdctWPLs.getColumn(i, "bizQntt")) || this.gfnIsNull(this.dsFrtrePrdctWPLs.getColumn(i, "bizArea"))
        					|| this.gfnIsNull(this.dsFrtrePrdctWPLs.getColumn(i, "prdctnMthdCd")) || this.gfnIsNull(this.dsFrtrePrdctWPLs.getColumn(i, "totBizPrdctnWdvlm"))){
        					this.grdFrtrePrdct.setCellPos(i);
        					this.gfnAlert("목재수확 내용을 입력해주세요.");
        					return false;
        				}
        				if(parseFloat(this.dsFrtrePrdctWPLs.getColumn(i,"bizArea")) < 0){
        					this.grdFrtrePrdct.setCellPos(4, this.dsFrtrePrdctWPLs.rowposition);
        					this.gfnAlert("msg.general", ["목재수확 면적은 0 이상입니다."]);
        					return false;
        				}
        				if(parseFloat(this.dsFrtrePrdctWPLs.getColumn(i,"bizArea")) > parseFloat(this.divAreaSkill.form.areaTotal.value)){
        					this.grdFrtrePrdct.setCellPos(4, this.dsFrtrePrdctWPLs.rowposition);
        					this.gfnAlert("msg.general", ["목재수확 면적은\n지종별면적 합계보다 클 수 없습니다."]);
        					return false;
        				}
        				if(parseInt(this.dsFrtrePrdctWPLs.getColumn(i,"frtrePrdctnFellyRt")) < 1 || parseInt(this.dsFrtrePrdctWPLs.getColumn(i,"frtrePrdctnFellyRt")) > 100){
        					this.grdFrtrePrdct.setCellPos(6, this.dsFrtrePrdctWPLs.rowposition);
        					this.gfnAlert("msg.general", ["목재수확률은 1~100 사이값 입니다."]);
        					return false;
        				}
        			}
        		}
        	}
        	if(this.gfnDsIsUpdated(this.dsFcltWPLs)){
        		var rowCnt = this.dsFcltWPLs.rowcount;
        		for(var i = 0 ; i < rowCnt; i++){
        			if(this.gfnIsNull(this.dsFcltWPLs.getColumn(i, "urgntCd")) || this.gfnIsNull(this.dsFcltWPLs.getColumn(i, "bizKindCd"))
        				|| this.gfnIsNull(this.dsFcltWPLs.getColumn(i, "bizQntt"))){
        				this.grdFclt.setCellPos(i);
        				this.gfnAlert("시설 내용을 입력해주세요.");
        				return false;
        			}
        			if(parseFloat(this.dsFcltWPLs.getColumn(i,"bizQntt")) < 0){
        					this.grdFclt.setCellPos(4, this.dsFcltWPLs.rowposition);
        					this.gfnAlert("msg.general", ["시설 물량은 0 이상입니다."]);
        					return false;
        			}
        			if(parseFloat(this.dsFcltWPLs.getColumn(i,"bizQntt")) > parseFloat(this.divAreaSkill.form.areaTotal.value)){
        				this.grdFclt.setCellPos(4, this.dsFcltWPLs.rowposition);
        				this.gfnAlert("msg.general", ["시설 물량은\n지종별면적 합계보다 클 수 없습니다."]);
        				return false;
        			}
        		}
        	}
        	if(this.gfnDsIsUpdated(this.dsEarnWPLs)){
        		var rowCnt = this.dsEarnWPLs.rowcount;
        		for(var i = 0 ; i < rowCnt; i++){
        			if(this.dsEarnWPLs.getColumn(i, "bizKindCd") == "99"){
        				if(this.gfnIsNull(this.dsEarnWPLs.getColumn(i, "urgntCd")) || this.gfnIsNull(this.dsEarnWPLs.getColumn(i, "bizKindCd"))
        				||this.gfnIsNull(this.dsEarnWPLs.getColumn(i, "bizEtcKindNm")) || this.gfnIsNull(this.dsEarnWPLs.getColumn(i, "bizQntt")|| this.gfnIsNull(this.dsEarnWPLs.getColumn(i, "bizLbper"))||this.gfnIsNull(this.dsEarnWPLs.getColumn(i, "bizAmt")))){
        						this.grdEarn.setCellPos(i);
        						this.gfnAlert("소득(기타) 내용을 입력해주세요.");
        						return false;
        				}
        				if(parseFloat(this.dsEarnWPLs.getColumn(i,"bizQntt")) < 0){
        					this.grdEarn.setCellPos(5, this.dsEarnWPLs.rowposition);
        					this.gfnAlert("msg.general", ["소득 생산량은 0 이상입니다."]);
        					return false;
        				}
        				if(parseFloat(this.dsEarnWPLs.getColumn(i,"bizQntt")) > parseFloat(this.divAreaSkill.form.areaTotal.value)){
        					this.grdEarn.setCellPos(5, this.dsEarnWPLs.rowposition);
        					this.gfnAlert("msg.general", ["소득 물량은\n지종별면적 합계보다 클 수 없습니다."]);
        					return false;
        				}
        				if(parseFloat(this.dsEarnWPLs.getColumn(i,"bizLbper")) < 0){
        					this.grdEarn.setCellPos(6, this.dsEarnWPLs.rowposition);
        					this.gfnAlert("msg.general", ["소득 노동력은 0 이상입니다."]);
        					return false;
        				}
        				if(parseFloat(this.dsEarnWPLs.getColumn(i,"bizAmt")) < 0){
        					this.grdEarn.setCellPos(7, this.dsEarnWPLs.rowposition);
        					this.gfnAlert("msg.general", ["소득 사업비는 0 이상입니다."]);
        					return false;
        				}
        				let earnBizAmt = parseInt(this.dsEarnWPLs.getColumn(i, "bizAmt")) > 0 ? this.dsEarnWPLs.getColumn(i, "bizAmt") : 0;
        				this.dsEarnWPLs.setColumn(i, "bizAmt", this.dsEarnWPLs.getColumn(i, "bizAmt")*1000);

        			}else{
        				if(this.gfnIsNull(this.dsEarnWPLs.getColumn(i, "urgntCd")) || this.gfnIsNull(this.dsEarnWPLs.getColumn(i, "bizKindCd"))
        					|| this.gfnIsNull(this.dsEarnWPLs.getColumn(i, "bizQntt")) || this.gfnIsNull(this.dsEarnWPLs.getColumn(i, "bizLbper"))||this.gfnIsNull(this.dsEarnWPLs.getColumn(i, "bizAmt"))){
        						this.grdEarn.setCellPos(i);
        						this.gfnAlert("소득 내용을 입력해주세요.");
        						return false;
        				}
        				if(parseFloat(this.dsEarnWPLs.getColumn(i,"bizQntt")) < 0){
        					this.grdEarn.setCellPos(5, this.dsEarnWPLs.rowposition);
        					this.gfnAlert("msg.general", ["소득 생산량은 0 이상입니다."]);
        					return false;
        				}
        				if(parseFloat(this.dsEarnWPLs.getColumn(i,"bizQntt")) > parseFloat(this.divAreaSkill.form.areaTotal.value)){
        					this.grdEarn.setCellPos(5, this.dsEarnWPLs.rowposition);
        					this.gfnAlert("msg.general", ["소득 물량은\n지종별면적 합계보다 클 수 없습니다."]);
        					return false;
        				}
        				if(parseFloat(this.dsEarnWPLs.getColumn(i,"bizLbper")) < 0){
        					this.grdEarn.setCellPos(6, this.dsEarnWPLs.rowposition);
        					this.gfnAlert("msg.general", ["소득 노동력은 0 이상입니다."]);
        					return false;
        				}
        				if(parseFloat(this.dsEarnWPLs.getColumn(i,"bizAmt")) < 0){
        					this.grdEarn.setCellPos(7, this.dsEarnWPLs.rowposition);
        					this.gfnAlert("msg.general", ["소득 사업비는 0 이상입니다."]);
        					return false;
        				}
        				let earnBizAmt = parseInt(this.dsEarnWPLs.getColumn(i, "bizAmt")) > 0 ? this.dsEarnWPLs.getColumn(i, "bizAmt") : 0;
        				this.dsEarnWPLs.setColumn(i, "bizAmt", this.dsEarnWPLs.getColumn(i, "bizAmt")*1000);

        			}
        		}
        	}

        	/*var lwvgtCn = this.dsLwvgt.getRowCount();
        	if(lwvgtCn > 0){
        		for(var i = 0 ; i< lwvgtCn; i++){
        			if(parseInt(this.dsLwvgt.getColumn(i, "lwvgtCvdgr")) > 100){
        				this.grdLwvgt.setCellPos(2, i);
        				this.gfnAlert((i+1)+"번째 행의 피복율은\n0 ~ 100 사이 값입니다.");
        				return false;
        			}
        		}
        	}*/

        	var sMsgId = "confirm.before.changesave";                       //메세지ID
        	var arrArg = "";                                                //메세지취환될값 배열[생략가능]
        	var sPopId = sMsgId;                                            //메세지팝업ID[생략가능]    *해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
        	var sMsgCallback = "fnMsgCallback";                             //메세지콜백[생략가능]         * confirm성 메시지를 사용 시 반드시 필요

        	// 변경된 내역을 저장 하시겠습니까?
        	this.gfnAlert(sMsgId, arrArg, sPopId, sMsgCallback);
        };

        //삭제버튼
        this.btnDel_onclick = function(obj,e)
        {
        	var sMsgId = "confirm.before.delete";            		         //메세지ID
        	var arrArg = "";                                                //메세지취환될값 배열[생략가능]
        	var sPopId = sMsgId;                                            //메세지팝업ID[생략가능]    *해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
        	var sMsgCallback = "fnMsgCallback";                             //메세지콜백[생략가능]         * confirm성 메시지를 사용 시 반드시 필요

        	this.gfnAlert(sMsgId, arrArg, sPopId, sMsgCallback, ["예", "아니오"], [true, false]);
        };

        //이전 화면으로 이동 (등록.수정.조회 : 경영계획수립현황 /조회 : 경영계획부 목록) 으로 추가 개발해야함
        this.divBtn_btnList_onclick = function(obj,e) {
        	var backPage = 'business::mngmtPlan/mngmtPlanEtmt/mngmtPlanEtmtView.xfdl';
        	if(Object.keys(publicArgs).includes('backPage')) {
        		backPage = publicArgs['backPage'];
        	}

        	this.gfnSetUrl(backPage, publicArgs);
        };

        //목재수확(임목생산) 팝업 닫기
        this.pdivFrtrePrdct_btnRtrcn_onclick = function(obj,e)
        {
        	this.pdivFrtrePrdct.closePopup();
        };

        //소반 ID 규칙 점검
        this.divWplbk_edtSbltId_onkillfocus = function(obj,e)
        {
        	//var cmblcId = '999-999';
        	var cmblcId = this.dsWplbkVO.getColumn(0, "cmblcId");
        	var wplarId = "";
        	var nxtrmNo = "";

        	var regex = /^\d{3}-\d{3}$/;
        	if(!this.gfnIsEmpty(obj.value) || !this.gfnIsNull(obj.value)) {
        		if(!regex.test(obj.text)){
        			this.divWplbk.form.edtSbltId.setFocus();
        			this.gfnAlert("msg.general", ["소반 번호 규칙에 맞지 않습니다."]);
        			return false;
        		}
        	}

        	if(this.gfnIsEmpty(publicArgs.wplbkNo) ||this.gfnIsNull(publicArgs.wplbkNo)){
        		wplarId = publicArgs.wplarId;
        		nxtrmNo = publicArgs.nxtrmNo;
        	}else{
        		wplarId = this.dsWplbkVO.getColumn(0, "wplarId");
        		nxtrmNo = this.dsWplbkVO.getColumn(0, "nxtrmNo");
        	}

        	var sbltId = obj.text;

        	var wplbkNo = wplarId + "_" + nxtrmNo + "_" + cmblcId + "_" + sbltId;

        	if(!this.gfnIsNull(cmblcId) && !this.gfnIsNull(sbltId)){
        		var strSvcId    = "checkWplbk";
        		var strSvcUrl   = "nfm/wplbk/checkWplbk.do";
        		var inData      = "";
        		var outData     = "";
        		var strArg      = "wplbkNo="+ wplbkNo;
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
        	}
        };

        //조림_edittype 수정
        this.fnAffrsSetDisplay = function(currow, col){
        	//조림예정지정리일때
        	if(this.dsAffrsWPLs.getColumn(currow, "bizKindCd") == "50"){
        		return "none";
        	}else{
        		if(col == "5"){
        			return "multicombo";
        		}else if(col == "6"){
        			return "mask";
        		}else if(col == "7"){
        			return "combo";
        		}
        	}
        }

        //목재수확_edittype 수정
        this.fnFrtrePrdctSetDisplay = function(currow, col){
        	//주벌일때
        	if(this.dsFrtrePrdctWPLs.getColumn(currow, "bizKindCd") == "01"){
        		if(col == "5"){
        			return "combo";
        		}
        		else if(col == "6"){
        			return "mask";
        		}
        	}else{
        		return "none";
        	}
        }

        this.fnSplitLine = function (str) {
        	var strSplit = str.split(',');
        	if(strSplit.length == 1) {
        		return strSplit[0];
        	} else {
        		str = str.replaceAll(/,/g, '\n');
        		return str;
        	}
        }

        // 숲가꾸기 누적면적 처리
        this.frestGrdnnAccmlArea = function(row, bizArea, bizQntt){
        	var rst = parseFloat(bizArea) * parseInt(bizQntt);
        	this.dsFrestGrdnnWPLs.set_enableevent(false);
        	this.dsFrestGrdnnWPLs.setColumn(row, "bizAccmlArea" , rst.toFixed(1))
        	this.dsFrestGrdnnWPLs.set_enableevent(true);
        }


        // 노동력, 사업비 자동계산 이벤트 핸들러
        this.attachAreaBlur = function(bizArea, type, row) {

        	var bsnssUnprc = null;
        	var bsnssKind = null;
        	var detailKind = null;
        	var bizKindCd = "";

        	switch (type) {
        		case 1:
        			// 조림
        			wplbkBizTpcd = '01';

        			if (!this.gfnIsNull(this.dsAffrsWPLs.getColumn(row, "bizKindCd"))) {

        				bizKindCd = this.dsAffrsWPLs.getColumn(row, "bizKindCd");
        				this.getSvcbsUntprcTable(wplbkBizTpcd, bizKindCd);

        				// 자동계산 전 COMMA 삭제/
        				//$('.comma').each(function() { uncomma($(this)); } );

        				var affrsLbper = nexacro.round(this.dsMngmtPlanBizUntprcVO.getColumn(0, "lbperVl") * bizArea, 1);
        				var affrsAmt = nexacro.round(this.dsMngmtPlanBizUntprcVO.getColumn(0, "pjtco") * 1000 * bizArea , 0);
        				//var affrsAmt = nexacro.round(this.dsMngmtPlanBizUntprcVO.getColumn(0, "pjtco") * 1000 * bizArea , 1);\

				this.dsAffrsWPLs.set_enableevent(false);
        				this.dsAffrsWPLs.setColumn(row, "bizLbper", affrsLbper);
        				this.dsAffrsWPLs.setColumn(row, "bizAmt", affrsAmt);
        				this.dsAffrsWPLs.set_enableevent(true);

        				// 자동계산 후 COMMA 추가 /
        				//$('.comma').each(function() { incomma($(this)); } );
        			}
        			break;
        		case 2:
        			// 숲가꾸기
        			wplbkBizTpcd = '02';

        			if (!this.gfnIsNull(this.dsFrestGrdnnWPLs.getColumn(row, "bizKindCd"))) {

        				bizKindCd = this.dsFrestGrdnnWPLs.getColumn(row, "bizKindCd");
        				this.getSvcbsUntprcTable(wplbkBizTpcd, bizKindCd);

        				var bizAccmlArea = this.dsFrestGrdnnWPLs.getColumn(row, "bizAccmlArea");

        				var frestGrdnnLbper = nexacro.round(this.dsMngmtPlanBizUntprcVO.getColumn(0, "lbperVl") * bizAccmlArea, 1);
        				var frestGrdnnWrcst =  nexacro.round(this.dsMngmtPlanBizUntprcVO.getColumn(0, "pjtco") * 1000 * bizAccmlArea, 0);
        				//var frestGrdnnWrcst =  nexacro.round(this.dsMngmtPlanBizUntprcVO.getColumn(0, "pjtco") * 1000 * bizAccmlArea, 1);

        				this.dsFrestGrdnnWPLs.set_enableevent(false);
        				this.dsFrestGrdnnWPLs.setColumn(row, "bizLbper", frestGrdnnLbper);
        				this.dsFrestGrdnnWPLs.setColumn(row, "bizAmt", frestGrdnnWrcst);
        				this.dsFrestGrdnnWPLs.set_enableevent(true);
        			}
        			break;
        		case 3:
        			// 목재수확(임목생산)
        			wplbkBizTpcd = '03';

        			if (!this.gfnIsNull(this.dsFrtrePrdctWPLs.getColumn(row, "bizKindCd"))) {

        				bizKindCd = this.dsFrtrePrdctWPLs.getColumn(row, "bizKindCd")
        				this.getSvcbsUntprcTable(wplbkBizTpcd, bizKindCd);

        				var frtrePrdctLbper = nexacro.round(this.dsMngmtPlanBizUntprcVO.getColumn(0, "lbperVl") * bizArea, 1);
        				//var frtrePrdctWrcst = nexacro.round(this.dsMngmtPlanBizUntprcVO.getColumn(0, "pjtco") * 1000 * bizArea,1);
        				var frtrePrdctWrcst = nexacro.round(this.dsMngmtPlanBizUntprcVO.getColumn(0, "pjtco") * 1000 * bizArea,0);

        				this.dsFrtrePrdctWPLs.set_enableevent(false);
        				this.dsFrtrePrdctWPLs.setColumn(row, "bizLbper", frtrePrdctLbper);
        				this.dsFrtrePrdctWPLs.setColumn(row, "bizAmt", frtrePrdctWrcst);
        				this.dsFrtrePrdctWPLs.set_enableevent(true);

        			}
        			break;
        		case 4:
        			// 시설
        			wplbkBizTpcd = '04';
        			var fcltLbper = 0 ;
        			if (!this.gfnIsNull(this.dsFcltWPLs.getColumn(row, "bizKindCd"))) {

        				bizKindCd = this.dsFcltWPLs.getColumn(row, "bizKindCd");
        				this.getSvcbsUntprcTable(wplbkBizTpcd, bizKindCd);

        				if( bizKindCd == "02" || bizKindCd == "03" || bizKindCd == "13" || bizKindCd == "14" || bizKindCd == "15"){
        					fcltLbper = nexacro.round(this.dsMngmtPlanBizUntprcVO.getColumn(0, "lbperVl") * bizArea, 1)
        				}else{
        					fcltLbper = 0;
        				}
        				//var fcltWrcst = nexacro.round(this.dsMngmtPlanBizUntprcVO.getColumn(0, "pjtco")* 1000 * bizArea, 2);
        				var fcltWrcst = nexacro.round(this.dsMngmtPlanBizUntprcVO.getColumn(0, "pjtco")* 1000 * bizArea, 0);

        				this.dsFcltWPLs.set_enableevent(false);
        				this.dsFcltWPLs.setColumn(row, "bizLbper", fcltLbper);
        				this.dsFcltWPLs.setColumn(row, "bizAmt", fcltWrcst);
        				this.dsFcltWPLs.set_enableevent(true);
        			}
        			break;
        		/*case 5:
        			// 소득
        			wplbkBizTpcd = '05';
        			if (!this.gfnIsNull(this.dsEarnWPLs.getColumn(row, "bizKindCd"))) {

        				bizKindCd = this.dsEarnWPLs.getColumn(row, "bizKindCd");
        				this.getSvcbsUntprcTable(wplbkBizTpcd, bizKindCd);
        				//var earnWrcst = nexacro.round(this.dsMngmtPlanBizUntprcVO.getColumn(0, "pjtco")* 1000 * bizArea, 2);
        				var earnWrcst = nexacro.round(this.dsMngmtPlanBizUntprcVO.getColumn(0, "pjtco")* 1000 * bizArea, 0);

        				this.dsEarnWPLs.set_enableevent(false);

        				if("x"+earnWrcst == "xNaN"){
        					earnWrcst = "" ;
        				}
        				this.dsEarnWPLs.setColumn(row, "bizAmt", earnWrcst); //사업비
        				this.dsEarnWPLs.set_enableevent(true);
        			}
        			break;*/
        	}

        }

        // 용역사업단가표 가져오기 함수
        this.getSvcbsUntprcTable = function(wplbkBizTpcd, bizKindCd) {

        	this.dsMngmtPlanBizUntprcVO.clearData();

        	for (var i = 0; i < this.dsBizUntprList.rowcount; i++) {

        		var pjtco = this.dsBizUntprList.getColumn(i, "pjtco"); //단가금액
        		var bsnkdTpcd = this.dsBizUntprList.getColumn(i, "bsnkdTpcd"); //단가사업구분코드
        		var slsysCd = this.dsBizUntprList.getColumn(i, "slsysCd"); //단가작업종구분코드
        		var lbperVl = this.dsBizUntprList.getColumn(i, "lbperVl"); //단가단위노동력
        		var bsvlUnitCrtrCdNm = this.dsBizUntprList.getColumn(i, "bsvlUnitCrtrCdNm"); //단가단위명

        		if (bsnkdTpcd == wplbkBizTpcd && slsysCd == bizKindCd) {
        			this.dsMngmtPlanBizUntprcVO.addRow();
        			this.dsMngmtPlanBizUntprcVO.setColumn(0, "pjtco", pjtco);
        			this.dsMngmtPlanBizUntprcVO.setColumn(0, "bsnkdTpcd", bsnkdTpcd);
        			this.dsMngmtPlanBizUntprcVO.setColumn(0, "slsysCd", slsysCd);
        			this.dsMngmtPlanBizUntprcVO.setColumn(0, "lbperVl", lbperVl);
        			this.dsMngmtPlanBizUntprcVO.setColumn(0, "bsvlUnitCrtrCdNm", bsvlUnitCrtrCdNm);
        		}
        	}
        }

        this.loadGis = function() {
        	var strReqParm = "callType=miniGis";
        	strReqParm += "&callMapWidth=" + this.divMap.form.webFlrpln.getOffsetWidth() + "px";
        	strReqParm += "&callMapHeight=" + this.divMap.form.webFlrpln.height + "px";
        	if(!this.gfnIsNull(publicArgs.wplbkNo) && !this.gfnIsEmpty(publicArgs.wplbkNo)){
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
        	}

        	var urlPath = window.location.protocol + "//" + window.location.host; //localhost:8084까지 세팅
        	this.divMap.form.webFlrpln.set_url(urlPath+"/fgis/cmmn/fgisMain.do?"+strReqParm);
        }

        //표고 최소-최대 유효성
        this.grdShp_onkillfocus = function(obj,e)
        {
        	let alttdMnmmVl = parseInt(this.dsMnfrsExmn.getColumn(0, "alttdMnmmVl"));
        	let alttdMxmmVl = parseInt(this.dsMnfrsExmn.getColumn(0, "alttdMxmmVl"));
        	if(alttdMnmmVl < 0 ){
        		this.grdShp.setCellPos(2);
        		this.grdShp.showEditor();
        		this.gfnAlert("msg.general", ["표고 최소는 0 이상이여야합니다."]);
        		return false;
        	}
        	if(alttdMxmmVl < 0){
        		this.grdShp.setCellPos(4);
        		this.grdShp.showEditor(); //focus
        		this.gfnAlert("msg.general", ["표고 최대는 0 이상입니다."]);
        		return false;
        	}
        	if(alttdMxmmVl < alttdMnmmVl){
        		this.grdShp.setCellPos(4);
        		this.grdShp.showEditor(); //focus
        		this.gfnAlert("msg.general", ["표고 최대는 표고 최소값보다 커야합니다."]);
        		return false;
        	}
        };

        //임황 유효성 (우세목 수고, 우세목 임령)
        this.grdFrstt_onkillfocus = function(obj,e)
        {
        	var dmtreTrhgh = this.dsMnfrsExmn.getColumn(0, "dmtreTrhgh");
        	var dmtreAge = this.dsMnfrsExmn.getColumn(0, "dmtreFrag");

        	//우세목수고 유효성 체크
        	if(dmtreTrhgh < 0.00){
        		this.grdFrstt.setCellPos(1);
        		this.grdFrstt.showEditor(); //focus
        		this.gfnAlert("msg.general", ["우세목 수고는 0~100000 사이의 값입니다."]);
        		return false;
        	}
        	if(dmtreAge < 0 ){
        		this.grdFrstt.setCellPos(2);
        		this.grdFrstt.showEditor(); //focus
        		this.gfnAlert("msg.general", ["우세목 수고는 1~999 사이의 값입니다."]);
        		return false;
        		}
        };

        //종자채취여부_가능량 유효성 체크
        this.divSpcfcFoprd_edtsdgthPsbltyQntt_onkillfocus = function(obj,e)
        {
        	if(this.dsMnfrsExmn.getColumn(0,"seedPckngPsbltyYn") == true || this.dsMnfrsExmn.getColumn(0,"seedPckngPsbltyYn") == 'Y'){
        		let sdgthPsbltyQntt = parseFloat(this.dsMnfrsExmn.getColumn(0, "sdgthPsbltyQntt"));
        		if( sdgthPsbltyQntt <= 0 && typeof this.dsMnfrsExmn.getColumn(0, "sdgthPsbltyQntt") != "undefined"){
        			this.divSpcfcFoprd.form.edtsdgthPsbltyQntt.setFocus();
        			this.gfnAlert("msg.general", ["가능량은 1~9999.9사이의 값입니다."]);
        			return false;
        		}
        	}
        };

        //입목지,미립목지,제지 유효성 체크
        this.divAreaSkill_onArea_canchange = function(obj,e)
        {
        	if(parseFloat(obj.value) < 0){
        		obj.setFocus();
        		this.gfnAlert("msg.general", ["면적은 양수값을 입력해주세요."]);
        		return false;
        	}
        };

        //법정지정림 면적 유효성 체크
        this.grdSttyApwod_onenterdown = function(obj,e)
        {
        	if(this.grdSttyApwod.currentrow == obj.currentrow){
        		if(this.grdSttyApwod.currentrow > 0 &&  this.dsSttyApwod.getColumn(obj.currentrow-1, "sttyApwodCd") == this.dsSttyApwod.getColumn(obj.currentrow, "sttyApwodCd")){
        			this.grdSttyApwod.setCellPos(1, this.dsSttyApwod.rowposition);
        			this.gfnAlert("msg.general", ["법정지정림은 중복될 수 없습니다."]);
        			return false;
        		}
        	}
        	if(this.grdSttyApwod.currentrow == obj.currentrow && obj.currentcol == 2){
        		if(parseFloat(this.grdSttyApwod.getCellText(obj.currentrow,2)) < 0 ){
        			this.grdSttyApwod.setCellPos(2, this.dsSttyApwod.rowposition);
        			this.gfnAlert("msg.general", ["법정지정림 면적은 0 이상입니다."]);
        			return false;
        		}
        		if(parseFloat(this.divAreaSkill.form.areaTotal.value) < parseFloat(this.grdSttyApwod.getCellText(obj.currentrow,2))){
        			this.grdSttyApwod.setCellPos(2, this.dsSttyApwod.rowposition);
        			this.gfnAlert("msg.general", ["법정지정림 면적은\n지종별면적 합계보다 클 수 없습니다."]);
        			return false;
        		}
        	}
        };

        //주요수종조사 유효성체크
        this.grdKoftrExmn_onenterdown = function(obj,e)
        {
        	//혼효율
        	if(parseFloat(this.dsKoftrExmn.getColumn(obj.currentrow,"mixtrRt")) > 100 || parseFloat(this.dsKoftrExmn.getColumn(obj.currentrow,"mixtrRt")) < 0){
        		this.grdKoftrExmn.setCellPos(3, obj.currentrow);
        		this.dsKoftrExmn.setColumn(this.grdKoftrExmn.currentrow,"mixtrRt", 0);
        		this.gfnAlert("msg.general", ["혼효율은 0~100 사이의 값입니다."]);
        		return false;
        	}

        	//최소임령
        	if(parseInt(this.dsKoftrExmn.getColumn(obj.currentrow, "mnmmFrag")) < 0 || parseInt(this.dsKoftrExmn.getColumn(obj.currentrow, "mnmmFrag")) > 1000){ //8,10
        		this.grdKoftrExmn.setCellPos(8, obj.currentrow);
        		this.gfnAlert("msg.general", ["임령은 0~1000 사이의 값입니다."]);
        		return false;
        	}
        	//최대임령
        	if(parseInt(this.dsKoftrExmn.getColumn(obj.currentrow, "mxmmFrag")) < 0 || parseInt(this.dsKoftrExmn.getColumn(obj.currentrow, "mxmmFrag")) > 1000){ //8,10
        		this.grdKoftrExmn.setCellPos(10, obj.currentrow);
        		this.gfnAlert("msg.general", ["임령은 0~1000 사이의 값입니다."]);
        		return false;
        	}
        	if(parseInt(this.dsKoftrExmn.getColumn(obj.currentrow, "mxmmFrag")) < parseInt(this.dsKoftrExmn.getColumn(obj.currentrow, "mnmmFrag"))){
        		this.grdKoftrExmn.setCellPos(10, obj.currentrow);
        		this.gfnAlert("msg.general", ["최대임령은 최소임령 값보다 커야합니다."]);
        		return false;
        	}
        	if(parseInt(this.dsKoftrExmn.getColumn(obj.currentrow, "avrgFrag")) > 0 && (typeof this.dsKoftrExmn.getColumn(obj.currentrow, "mxmmFrag") == "undefined" || typeof this.dsKoftrExmn.getColumn(obj.currentrow, "mnmmFrag") == "undefined")){
        		this.grdKoftrExmn.setCellPos(8, obj.currentrow);
        		this.gfnAlert("msg.general", ["최소임령/최대임령을 입력해주세요."]);
        		return false;
        	}
        	//평균임령
        	if(parseInt(this.dsKoftrExmn.getColumn(obj.currentrow, "avrgFrag")) < 0 || parseInt(this.dsKoftrExmn.getColumn(obj.currentrow, "avrgFrag")) >1000){
        		this.grdKoftrExmn.setCellPos(4, obj.currentrow);
        		this.gfnAlert("msg.general", ["평균임령은 0~1000 사이의 값입니다."]);
        		return false;
        	}
        	if(parseInt(this.dsKoftrExmn.getColumn(obj.currentrow, "avrgFrag")) > parseInt(this.dsKoftrExmn.getColumn(obj.currentrow, "mxmmFrag"))
        		|| parseInt(this.dsKoftrExmn.getColumn(obj.currentrow, "avrgFrag")) < parseInt(this.dsKoftrExmn.getColumn(obj.currentrow, "mnmmFrag"))){
        		this.grdKoftrExmn.setCellPos(4, obj.currentrow);
        		this.gfnAlert("msg.general", ["평균임령은\n최소임령과 최대임령 사이어야 합니다."]);
        		return false;
        	}

        	//최소수고
        	if(parseInt(this.dsKoftrExmn.getColumn(obj.currentrow, "lowstTrhgh")) < 0 || parseInt(this.dsKoftrExmn.getColumn(obj.currentrow, "lowstTrhgh")) > 10000){
        		this.grdKoftrExmn.setCellPos(11, obj.currentrow);
        		this.gfnAlert("msg.general", ["수고는 0~10000 사이의 값입니다."]);
        		return false;
        	}
        	//최대수고
        	if(parseInt(this.dsKoftrExmn.getColumn(obj.currentrow, "topTrhgh")) < 0 || parseInt(this.dsKoftrExmn.getColumn(obj.currentrow, "topTrhgh")) > 10000){
        		this.grdKoftrExmn.setCellPos(13, obj.currentrow);
        		this.gfnAlert("msg.general", ["수고는 0~10000 사이의 값입니다."]);
        		return false;
        	}
        	if(parseInt(this.dsKoftrExmn.getColumn(obj.currentrow, "topTrhgh")) < parseInt(this.dsKoftrExmn.getColumn(obj.currentrow, "lowstTrhgh"))) {
        		this.grdKoftrExmn.setCellPos(13, obj.currentrow);
        		this.gfnAlert("msg.general", ["최대수고 값은\n최소수고 값보다 같거나 커야합니다."]);
        		return false;
        	}
        	if(parseInt(this.dsKoftrExmn.getColumn(obj.currentrow, "avrgTrhgh")) > 0
        		&& (typeof this.dsKoftrExmn.getColumn(obj.currentrow, "topTrhgh") == "undefined" || typeof this.dsKoftrExmn.getColumn(obj.currentrow, "lowstTrhgh") == "undefined")){
        		this.grdKoftrExmn.setCellPos(11, obj.currentrow);
        		this.gfnAlert("msg.general", ["최소수고/최대수고를 입력해주세요."]);
        		return false;
        	}
        	//평균수고
        	if(parseInt(this.dsKoftrExmn.getColumn(obj.currentrow, "avrgTrhgh")) < 0 || parseInt(this.dsKoftrExmn.getColumn(obj.currentrow, "avrgTrhgh")) > 10000) {
        		this.grdKoftrExmn.setCellPos(6, obj.currentrow);
        		this.gfnAlert("msg.general", ["평균수고는 0~10000 사이의 값입니다."]);
        		return false;
        	}
        	if(parseInt(this.dsKoftrExmn.getColumn(obj.currentrow, "avrgTrhgh")) <  parseInt(this.dsKoftrExmn.getColumn(obj.currentrow, "lowstTrhgh"))
        		|| parseInt(this.dsKoftrExmn.getColumn(obj.currentrow, "avrgTrhgh")) > parseInt(this.dsKoftrExmn.getColumn(obj.currentrow, "topTrhgh"))) {
        		this.grdKoftrExmn.setCellPos(6, obj.currentrow);
        		this.gfnAlert("msg.general", ["평균수고는\n최소수고과 최대수고 사이어야 합니다."]);
        		return false;
        	}

        	//최소경급
        	if(parseInt(this.dsKoftrExmn.getColumn(obj.currentrow, "mainKoftrMnmmDmtr")) < 0 || parseInt(this.dsKoftrExmn.getColumn(obj.currentrow, "mainKoftrMnmmDmtr")) > 100){
        		this.grdKoftrExmn.setCellPos(14, obj.currentrow);
        		this.gfnAlert("msg.general", ["경급은 0~100 사이의 값입니다."]);
        		return false;
        	}
        	//최대경급
        	if(parseInt(this.dsKoftrExmn.getColumn(obj.currentrow, "mainKoftrMxmmDmtr")) < 0 || parseInt(this.dsKoftrExmn.getColumn(obj.currentrow, "mainKoftrMxmmDmtr")) > 100){
        		this.grdKoftrExmn.setCellPos(16, obj.currentrow);
        		this.gfnAlert("msg.general", ["경급은 0~100 사이의 값입니다."]);
        		return false;
        	}
        	//최대경급
        	if(parseInt(this.dsKoftrExmn.getColumn(obj.currentrow, "mainKoftrMxmmDmtr")) < parseInt(this.dsKoftrExmn.getColumn(obj.currentrow, "mainKoftrMnmmDmtr"))) {
        		this.grdKoftrExmn.setCellPos(16, obj.currentrow);
        		this.gfnAlert("msg.general", ["최대경급 값은\n최소경급 값보다 같거나 커야합니다."]);
        		return false;
        	}
        	if(parseInt(this.dsKoftrExmn.getColumn(obj.currentrow, "avrgDmtr")) > 0 && (typeof this.dsKoftrExmn.getColumn(this.dsKoftrExmn.rowposition, "mainKoftrMxmmDmtr") == "undefined" || typeof this.dsKoftrExmn.getColumn(this.dsKoftrExmn.rowposition, "mainKoftrMnmmDmtr") == "undefined")){
        		this.grdKoftrExmn.setCellPos(14, obj.currentrow);
        		this.gfnAlert("msg.general", ["최소경급/최대경급을 입력해주세요."]);
        		return false;
        	}
        	//평균경급
        	if(parseInt(this.dsKoftrExmn.getColumn(obj.currentrow, "avrgDmtr")) < 0 || parseInt(this.dsKoftrExmn.getColumn(obj.currentrow, "avrgDmtr")) > 100) {
        		this.grdKoftrExmn.setCellPos(7, obj.currentrow);
        		this.gfnAlert("msg.general", ["평균경급는 0~100 사이의 값입니다."]);
        		return false;
        	}
        	if(parseInt(this.dsKoftrExmn.getColumn(obj.currentrow, "avrgDmtr")) < parseInt(this.dsKoftrExmn.getColumn(obj.currentrow, "mainKoftrMnmmDmtr")) || parseInt(this.dsKoftrExmn.getColumn(obj.currentrow, "avrgDmtr")) > parseInt(this.dsKoftrExmn.getColumn(obj.currentrow, "mainKoftrMxmmDmtr"))) {
        		this.grdKoftrExmn.setCellPos(7, obj.currentrow);
        		this.gfnAlert("msg.general", ["평균경급는\n최소경급과 최대경급 사이어야 합니다."]);
        		return false;
        	}
        };

        //ha당현실축적 유효성체크
        this.grdAtmtcCscct_onenterdown = function(obj,e)
        {
        	if(obj.getCellPos() == 0){ //ha당 현실축적
        		if(e.value < 0){
        			this.grdAtmtcCscct.setCellPos(0);
        			this.gfnAlert("msg.general", ["ha당 현실축적은 0 이상 입니다."]);
        			return false;
        		}

        	}
        };

        //하층식생 유효성체크
        this.grdLwvgt_onenterdown = function(obj,e)
        {
        	if(parseFloat(this.dsLwvgt.getColumn(obj.currentrow,"lwvgtCvdgr")) > 100 || parseFloat(this.dsLwvgt.getColumn(obj.currentrow,"lwvgtCvdgr")) < 0){
        		this.grdLwvgt.setCellPos(2, obj.currentrow);
        		this.dsLwvgt.setColumn(obj.currentrow, "lwvgtCvdgr", 0);
        		this.gfnAlert("msg.general", ["피복율은 0~100 사이의 값입니다."]);
        		return false;
        	}
        };

        //조림 유효성체크
        this.grdAffrs_onenterdown = function(obj,e)
        {
        	if(parseFloat(this.dsAffrsWPLs.getColumn(obj.currentrow,"bizArea")) < 0){
        		this.grdAffrs.setCellPos(4, obj.currentrow);
        		this.gfnAlert("msg.general", ["조림 면적은 0 이상입니다."]);
        		return false;
        	}
        	if(parseFloat(this.dsAffrsWPLs.getColumn(obj.currentrow,"bizArea")) > parseFloat(this.divAreaSkill.form.areaTotal.value)){
        		this.grdAffrs.setCellPos(4, obj.currentrow);
        		this.gfnAlert("msg.general", ["조림 면적은\n지종별면적 합계보다 클 수 없습니다."]);
        		return false;
        	}
        };
        //숲가꾸기 유효성체크
        this.grdFrestGrdnn_onenterdown = function(obj,e)
        {
        	if(parseFloat(this.dsFrestGrdnnWPLs.getColumn(obj.currentrow,"bizArea")) < 0){
        		this.grdFrestGrdnn.setCellPos(5, obj.currentrow);
        		this.gfnAlert("msg.general", ["숲가꾸기 면적은 0 이상입니다."]);
        		return false;
        	}
        	if(parseFloat(this.dsFrestGrdnnWPLs.getColumn(obj.currentrow,"bizArea")) > parseFloat(this.divAreaSkill.form.areaTotal.value)){
        		this.grdFrestGrdnn.setCellPos(5, obj.currentrow);
        		this.gfnAlert("msg.general", ["숲가꾸기 면적은\n지종별면적 합계보다 클 수 없습니다."]);
        		return false;
        	}
        };

        //목재수확 유효성체크
        this.grdFrtrePrdct_onenterdown = function(obj,e)
        {
        	if(parseFloat(this.dsFrtrePrdctWPLs.getColumn(obj.currentrow,"bizArea")) < 0){
        		this.grdFrtrePrdct.setCellPos(4, obj.currentrow);
        		this.gfnAlert("msg.general", ["목재수확 면적은 0 이상입니다."]);
        		return false;
        	}
        	if(parseFloat(this.dsFrtrePrdctWPLs.getColumn(obj.currentrow,"bizArea")) > parseFloat(this.divAreaSkill.form.areaTotal.value)){
        		this.grdFrtrePrdct.setCellPos(4, obj.currentrow);
        		this.gfnAlert("msg.general", ["목재수확 면적은\n지종별면적 합계보다 클 수 없습니다."]);
        		return false;
        	}
        };

        //시설 유효성체크
        this.grdFclt_onenterdown = function(obj,e)
        {
        	if(parseFloat(this.dsFcltWPLs.getColumn(obj.currentrow,"bizQntt")) < 0){
        		this.grdFclt.setCellPos(4, obj.currentrow);
        		this.gfnAlert("msg.general", ["시설 물량은 0 이상입니다."]);
        		return false;
        	}
        	if(parseFloat(this.dsFcltWPLs.getColumn(obj.currentrow,"bizQntt")) > parseFloat(this.divAreaSkill.form.areaTotal.value)){
        		this.grdFclt.setCellPos(4, obj.currentrow);
        		this.gfnAlert("msg.general", ["시설 물량은\n지종별면적 합계보다 클 수 없습니다."]);
        		return false;
        	}
        };

        //소득 유효성체크
        this.grdEarn_onenterdown = function(obj,e)
        {
        	if(parseFloat(this.dsEarnWPLs.getColumn(obj.currentrow,"bizQntt")) < 0){
        		this.grdEarn.setCellPos(5, obj.currentrow);
        		this.gfnAlert("msg.general", ["소득 생산량은 0 이상입니다."]);
        		return false;
        	}
        	if(parseFloat(this.dsEarnWPLs.getColumn(obj.currentrow,"bizQntt")) > parseFloat(this.divAreaSkill.form.areaTotal.value)){
        		this.grdEarn.setCellPos(5, obj.currentrow);
        		this.gfnAlert("msg.general", ["소득 생산량은\n지종별면적 합계보다 클 수 없습니다."]);
        		return false;
        	}
        	if(parseFloat(this.dsEarnWPLs.getColumn(obj.currentrow,"bizLbper")) < 0){
        		this.grdEarn.setCellPos(6, obj.currentrow);
        		this.gfnAlert("msg.general", ["소득 노동력은 0 이상입니다."]);
        		return false;
        	}
        	if(parseFloat(this.dsEarnWPLs.getColumn(obj.currentrow,"bizAmt")) < 0){
        		this.grdEarn.setCellPos(7, obj.currentrow);
        		this.gfnAlert("msg.general", ["소득 사업비는 0 이상입니다."]);
        		return false;
        	}
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onvscroll",this.NFM_001M1_onvscroll,this);
            this.btnBfrNxtrmSbltDsgn.addEventHandler("onclick",this.divWplbk_btnBfrNxtrmSbltDsgn_onclick,this);
            this.btnList.addEventHandler("onclick",this.btnList_onclick,this);
            this.divWplbk.form.cmbSpwodKindCd.addEventHandler("onitemchanged",this.divWplbk_cmbSpwodKindCd_onitemchanged,this);
            this.divWplbk.form.edtSbltId.addEventHandler("onkillfocus",this.divWplbk_edtSbltId_onkillfocus,this);
            this.divWplbk.form.btnMhrSbltHstry.addEventHandler("onclick",this.divWplbk_btnMhrSbltHstry_onclick,this);
            this.Static03_00_00_00.addEventHandler("onclick",this.Static03_00_onclick,this);
            this.btnLctnDel.addEventHandler("onclick",this.btnLctnDel_onclick,this);
            this.btnLctnAddtn.addEventHandler("onclick",this.btnLctnAddtn_onclick,this);
            this.Static03_00.addEventHandler("onclick",this.Static03_00_onclick,this);
            this.divAreaSkill.form.stlndArea.addEventHandler("onchanged",this.divAreaSkill_onArea_onchanged,this);
            this.divAreaSkill.form.stlndArea.addEventHandler("canchange",this.divAreaSkill_onArea_canchange,this);
            this.divAreaSkill.form.blankArea.addEventHandler("onchanged",this.divAreaSkill_onArea_onchanged,this);
            this.divAreaSkill.form.blankArea.addEventHandler("canchange",this.divAreaSkill_onArea_canchange,this);
            this.divAreaSkill.form.nfrtldArea.addEventHandler("onchanged",this.divAreaSkill_onArea_onchanged,this);
            this.divAreaSkill.form.nfrtldArea.addEventHandler("canchange",this.divAreaSkill_onArea_canchange,this);
            this.divAreaSkill.form.rdoSkill.addEventHandler("onitemchanged",this.divAreaSkill_rdoSkill_onitemchanged,this);
            this.Static03_00_00.addEventHandler("onclick",this.Static03_00_onclick,this);
            this.grdSttyApwod.addEventHandler("onenterdown",this.grdSttyApwod_onenterdown,this);
            this.grdSttyApwod.addEventHandler("onkillfocus",this.grdSttyApwod_onenterdown,this);
            this.btnSttyApwodDel.addEventHandler("onclick",this.btnSttyApwodDel_onclick,this);
            this.btnSttyApwodAddtn.addEventHandler("onclick",this.btnSttyApwodAddtn_onclick,this);
            this.Static03_00_01.addEventHandler("onclick",this.Static03_00_onclick,this);
            this.grdShp.addEventHandler("onkillfocus",this.grdShp_onkillfocus,this);
            this.Static03_00_01_00.addEventHandler("onclick",this.Static03_00_onclick,this);
            this.grdKoftrExmn.addEventHandler("onenterdown",this.grdKoftrExmn_onenterdown,this);
            this.Static03_00_01_01.addEventHandler("onclick",this.Static03_00_onclick,this);
            this.grdFrstt.addEventHandler("onkillfocus",this.grdFrstt_onkillfocus,this);
            this.sta00.addEventHandler("onclick",this.sta00_onclick,this);
            this.Static03_00_01_01_00.addEventHandler("onclick",this.Static03_00_onclick,this);
            this.btnKoftrExmnDel.addEventHandler("onclick",this.btnKoftrExmnDel_onclick,this);
            this.btnKoftrExmnAddtn.addEventHandler("onclick",this.btnKoftrExmnAddtn_onclick,this);
            this.Static03_00_01_01_01.addEventHandler("onclick",this.Static03_00_onclick,this);
            this.grdAtmtcCscct.addEventHandler("onheadclick",this.grd_onheadclick,this);
            this.grdAtmtcCscct.addEventHandler("onenterdown",this.grdAtmtcCscct_onenterdown,this);
            this.btnAtmtcCscct.addEventHandler("onclick",this.btnAtmtcCscct_onclick,this);
            this.Static03_00_01_01_01_00.addEventHandler("onclick",this.Static03_00_onclick,this);
            this.grdLwvgt.addEventHandler("onheadclick",this.grd_onheadclick,this);
            this.grdLwvgt.addEventHandler("oncellclick",this.grd_oncellclick,this);
            this.grdLwvgt.addEventHandler("onenterdown",this.grdLwvgt_onenterdown,this);
            this.btnLwvgtDel.addEventHandler("onclick",this.btnLwvgtDel_onclick,this);
            this.btnLwvgtAddtn.addEventHandler("onclick",this.btnLwvgtAddtn_onclick,this);
            this.Static03_00_01_01_01_00_00.addEventHandler("onclick",this.Static03_00_onclick,this);
            this.divSpcfcFoprd.form.chkSeedPckngPsbltyYn.addEventHandler("onclick",this.divSpcfcFoprd_seedPckngPssblYn_onclick,this);
            this.divSpcfcFoprd.form.cmbSdgthTpcd.addEventHandler("oncloseup",this.divSpcfcFoprd_cmbSdgthTpcd_onitemchanged,this);
            this.divSpcfcFoprd.form.edtsdgthPsbltyQntt.addEventHandler("onkillfocus",this.divSpcfcFoprd_edtsdgthPsbltyQntt_onkillfocus,this);
            this.Static03_00_01_01_01_00_01_01.addEventHandler("onclick",this.Static03_00_onclick,this);
            this.grdAffrs.addEventHandler("onenterdown",this.grdAffrs_onenterdown,this);
            this.btnAffrsDel.addEventHandler("onclick",this.btnAffrsDel_onclick,this);
            this.btnAffrsAddtn.addEventHandler("onclick",this.btnAffrsAddtn_onclick,this);
            this.Static03_00_01_01_01_00_01_01_00.addEventHandler("onclick",this.Static03_00_onclick,this);
            this.btnFrestGrdnnDel.addEventHandler("onclick",this.btnFrestGrdnnDel_onclick,this);
            this.grdFrestGrdnn.addEventHandler("onenterdown",this.grdFrestGrdnn_onenterdown,this);
            this.btnFrestGrdnnAddtn.addEventHandler("onclick",this.btnFrestGrdnnAddtn_onclick,this);
            this.Static03_00_01_01_01_00_01_01_00_00.addEventHandler("onclick",this.Static03_00_onclick,this);
            this.grdFrtrePrdct.addEventHandler("oncellclick",this.grd_oncellclick,this);
            this.grdFrtrePrdct.addEventHandler("onenterdown",this.grdFrtrePrdct_onenterdown,this);
            this.Static03_00_01_01_01_00_01_01_00_00_00.addEventHandler("onclick",this.Static03_00_onclick,this);
            this.grdFclt.addEventHandler("onenterdown",this.grdFclt_onenterdown,this);
            this.Static03_00_01_01_01_00_01_01_00_00_00_00.addEventHandler("onclick",this.Static03_00_onclick,this);
            this.grdEarn.addEventHandler("onenterdown",this.grdEarn_onenterdown,this);
            this.btnFrtrePrdctDel.addEventHandler("onclick",this.btnFrtrePrdctDel_onclick,this);
            this.btnFrtrePrdctAddtn.addEventHandler("onclick",this.btnFrtrePrdctAddtn_onclick,this);
            this.btnFcltDel.addEventHandler("onclick",this.btnFcltDel_onclick,this);
            this.btnFcltAddtn.addEventHandler("onclick",this.btnFcltAddtn_onclick,this);
            this.btnIncmDel.addEventHandler("onclick",this.btnIncmDel_onclick,this);
            this.btnIncmAddtn.addEventHandler("onclick",this.btnIncmAddtn_onclick,this);
            this.divBtn.form.btnList.addEventHandler("onclick",this.divBtn_btnList_onclick,this);
            this.divBtn.form.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.divBtn.form.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.pdivFrtrePrdct.addEventHandler("onpopup",this.pdivFrtrePrdct_onpopup,this);
            this.pdivFrtrePrdct.form.btnSavePopup.addEventHandler("onclick",this.pdivFrtrePrdct_btnFrtrePrdctPopSave_onclick,this);
            this.pdivFrtrePrdct.form.grdFrtrePrdctPop.addEventHandler("oncellclick",this.grd_oncellclick,this);
            this.pdivFrtrePrdct.form.btnFrtrePrdctPopDel.addEventHandler("onclick",this.pdivFrtrePrdct_btnFrtrePrdctPopDel_onclick,this);
            this.pdivFrtrePrdct.form.btnFrtrePrdctPopAdd.addEventHandler("onclick",this.pdivFrtrePrdct_btnFrtrePrdctPopAdd_onclick,this);
            this.pdivFrtrePrdct.form.btnRtrcn.addEventHandler("onclick",this.pdivFrtrePrdct_btnRtrcn_onclick,this);
            this.dsMnfrsExmn.addEventHandler("oncolumnchanged",this.dsMnfrsExmn_oncolumnchanged,this);
            this.dsKoftrExmn.addEventHandler("oncolumnchanged",this.dsKoftrExmn_oncolumnchanged,this);
            this.dsAffrsWPLs.addEventHandler("cancolumnchange",this.area_cancolumnchange,this);
            this.dsFrestGrdnnWPLs.addEventHandler("cancolumnchange",this.area_cancolumnchange,this);
            this.dsFrtrePrdctWPLs.addEventHandler("cancolumnchange",this.area_cancolumnchange,this);
            this.dsFcltWPLs.addEventHandler("cancolumnchange",this.area_cancolumnchange,this);
        };
        this.loadIncludeScript("wplbkSave.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
