(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BMT_02");
            this.set_titletext("그리드");
            if (Form == this.constructor)
            {
                this._setFormPosition(780,773);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPfCovRlrBcVo", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "parentIndex","type" : "INT","size" : "4"},{"id" : "rowIndex","type" : "INT","size" : "4"},{"id" : "seq","type" : "BIGDECIMAL","size" : "15"},{"id" : "covRelTpDivCd","type" : "STRING","size" : "256"},{"id" : "stdCovCd","type" : "STRING","size" : "256"},{"id" : "stdCovNm","type" : "STRING","size" : "256"},{"id" : "trgCovCd","type" : "STRING","size" : "256"},{"id" : "trgCovNm","type" : "STRING","size" : "256"},{"id" : "acpDivCd","type" : "STRING","size" : "256"},{"id" : "ctrObjSeq","type" : "BIGDECIMAL","size" : "15"},{"id" : "ctrObjTpSeq","type" : "BIGDECIMAL","size" : "15"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCovInspe", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "parentIndex","type" : "INT","size" : "4"},{"id" : "rowIndex","type" : "INT","size" : "4"},{"id" : "untPdCd","type" : "STRING","size" : "256"},{"id" : "covCd","type" : "STRING","size" : "256"},{"id" : "pdCovKorFrmuNm","type" : "STRING","size" : "256"},{"id" : "pdCovKorInfrmNm","type" : "STRING","size" : "256"},{"id" : "scrnExpsSq","type" : "INT","size" : "9"},{"id" : "xchgRduDivCd","type" : "STRING","size" : "256"},{"id" : "gndrCd","type" : "STRING","size" : "2"},{"id" : "salYn","type" : "STRING","size" : "256"},{"id" : "mdExpPoTrgYn","type" : "STRING","size" : "256"},{"id" : "lmpyCovYn","type" : "STRING","size" : "256"},{"id" : "mdtrSbcYn","type" : "STRING","size" : "256"},{"id" : "fetsSbcPsbYn","type" : "STRING","size" : "256"},{"id" : "premMnulInpYn","type" : "STRING","size" : "256"},{"id" : "premTpPyCd","type" : "STRING","size" : "256"},{"id" : "covCnvsDivCd","type" : "STRING","size" : "256"},{"id" : "covCnvsScr","type" : "BIGDECIMAL","size" : "20"},{"id" : "accmComsMltp","type" : "BIGDECIMAL","size" : "15"},{"id" : "welhRnwlPsbAge","type" : "STRING","size" : "256"},{"id" : "wltlfRnwlCovYn","type" : "STRING","size" : "256"},{"id" : "rnwlCycDivCd","type" : "STRING","size" : "256"},{"id" : "atRnwlYn","type" : "STRING","size" : "256"},{"id" : "dtgrLgctRtDivCd","type" : "STRING","size" : "256"},{"id" : "gurtConCd","type" : "STRING","size" : "3"},{"id" : "famtCovCd","type" : "STRING","size" : "256"},{"id" : "covCnvsStdAmt","type" : "BIGDECIMAL","size" : "20"},{"id" : "exprDdtCovCtgVal","type" : "STRING","size" : "256"},{"id" : "inspeSbcDivCd","type" : "STRING","size" : "256"},{"id" : "clsfictDivCd","type" : "STRING","size" : "1"},{"id" : "rnwlEdPrdCd","type" : "STRING","size" : "256"},{"id" : "pdCovLmDscCon","type" : "STRING","size" : "256"},{"id" : "cndSicAplTrgDivCd","type" : "STRING","size" : "256"},{"id" : "grupDcAplTrgYn","type" : "STRING","size" : "256"},{"id" : "covChrtCd","type" : "STRING","size" : "256"},{"id" : "covChrcCd","type" : "STRING","size" : "256"},{"id" : "cndSicChrcDivCd","type" : "STRING","size" : "256"},{"id" : "gurtAcuDivCd","type" : "STRING","size" : "1"},{"id" : "sbcAmtTpCd","type" : "STRING","size" : "256"},{"id" : "sbcAmtInpDivCd","type" : "STRING","size" : "256"},{"id" : "sbcAmtIndiTpCd","type" : "STRING","size" : "256"},{"id" : "sbcAmtCon","type" : "STRING","size" : "256"},{"id" : "untSbcAmt","type" : "BIGDECIMAL","size" : "20"},{"id" : "covSbcDsgCtgCd","type" : "STRING","size" : "256"},{"id" : "rsrvCovPsbYn","type" : "STRING","size" : "256"},{"id" : "owbrAmtYn","type" : "STRING","size" : "256"},{"id" : "lgtmDrvpeStatCd","type" : "STRING","size" : "256"},{"id" : "basSicDivCd","type" : "STRING","size" : "256"},{"id" : "psbAmt","type" : "BIGDECIMAL","size" : "20"},{"id" : "drvUsgDivCd","type" : "STRING","size" : "256"},{"id" : "rsrvCovAplAge","type" : "INT","size" : "9"},{"id" : "ctrCovDivCd","type" : "STRING","size" : "256"},{"id" : "tngDivCd","type" : "STRING","size" : "256"},{"id" : "lgtmObjDivCd","type" : "STRING","size" : "256"},{"id" : "annInsPrdTpCd","type" : "STRING","size" : "256"},{"id" : "pdCovDscCon","type" : "STRING","size" : "256"},{"id" : "insPrdCalTpCd","type" : "STRING","size" : "2"},{"id" : "covExceTpCd","type" : "STRING","size" : "256"},{"id" : "dplxHgrkCovCd","type" : "STRING","size" : "256"},{"id" : "endrAddCovYn","type" : "STRING","size" : "256"},{"id" : "seDdtInqTpCd","type" : "STRING","size" : "256"},{"id" : "convAgeCd","type" : "STRING","size" : "256"},{"id" : "inspeTpCd","type" : "STRING","size" : "256"},{"id" : "sbcShCd","type" : "STRING","size" : "256"},{"id" : "covInsStDt","type" : "STRING","size" : "256"},{"id" : "covInsEdDt","type" : "STRING","size" : "256"},{"id" : "indpSicCovYn","type" : "STRING","size" : "256"},{"id" : "rpsCovCd","type" : "STRING","size" : "256"},{"id" : "momCovCd","type" : "STRING","size" : "256"},{"id" : "ctrRnwlEdPrdCd","type" : "STRING","size" : "256"},{"id" : "covDtalsDivCd","type" : "STRING","size" : "256"},{"id" : "accmCovCd","type" : "STRING","size" : "6"},{"id" : "odLfNum","type" : "STRING","size" : "256"},{"id" : "pdCovDsgCtgCd","type" : "STRING","size" : "256"},{"id" : "dmgRtCovMctgCd","type" : "STRING","size" : "256"},{"id" : "bthAfCovCd","type" : "STRING","size" : "256"},{"id" : "bthBfAfCovDivCd","type" : "STRING","size" : "256"},{"id" : "bthAfAplPrem","type" : "STRING","size" : "256"},{"id" : "bthAfInsPrdTpCd","type" : "STRING","size" : "256"},{"id" : "bthAfInsPrd","type" : "STRING","size" : "256"},{"id" : "bthAfInsEdAge","type" : "STRING","size" : "256"},{"id" : "bthAfPyPrdTpCd","type" : "STRING","size" : "256"},{"id" : "bthAfPyPrd","type" : "STRING","size" : "256"},{"id" : "bthAfPyEdAge","type" : "STRING","size" : "256"},{"id" : "pyExemExptYn","type" : "STRING","size" : "256"},{"id" : "scrnExpsCovCd","type" : "STRING","size" : "256"},{"id" : "scrnExpsCovYn","type" : "STRING","size" : "256"},{"id" : "ctrObjSeq","type" : "BIGDECIMAL","size" : "256"},{"id" : "ctrObjTpSeq","type" : "BIGDECIMAL","size" : "256"},{"id" : "ctrCovId","type" : "STRING","size" : "256"},{"id" : "hisSeq","type" : "BIGDECIMAL","size" : "256"},{"id" : "ctrId","type" : "STRING","size" : "256"},{"id" : "ctrCovSeq","type" : "BIGDECIMAL","size" : "256"},{"id" : "pdCd","type" : "STRING","size" : "256"},{"id" : "prctrNo","type" : "STRING","size" : "256"},{"id" : "polNo","type" : "STRING","size" : "256"},{"id" : "ctrObjId","type" : "STRING","size" : "256"},{"id" : "covCndSeqCd","type" : "STRING","size" : "256"},{"id" : "ctrCovStatCd","type" : "STRING","size" : "256"},{"id" : "ctrCovStatDtlCd","type" : "STRING","size" : "256"},{"id" : "pyExemStDt","type" : "STRING","size" : "256"},{"id" : "insPrdTpCd","type" : "STRING","size" : "256"},{"id" : "pyPrdTpCd","type" : "STRING","size" : "256"},{"id" : "insPrd","type" : "INT","size" : "256"},{"id" : "pyPrd","type" : "INT","size" : "256"},{"id" : "insEdAge","type" : "INT","size" : "256"},{"id" : "pyEdAge","type" : "INT","size" : "256"},{"id" : "insBgnDt","type" : "STRING","size" : "256"},{"id" : "insEdDt","type" : "STRING","size" : "256"},{"id" : "pyStDt","type" : "STRING","size" : "256"},{"id" : "pyEdDt","type" : "STRING","size" : "256"},{"id" : "acntNum","type" : "INT","size" : "256"},{"id" : "insdAmt","type" : "BIGDECIMAL","size" : "256"},{"id" : "aplPrem","type" : "BIGDECIMAL","size" : "256"},{"id" : "insAge","type" : "INT","size" : "256"},{"id" : "rnwlEdPrdDivCd","type" : "STRING","size" : "256"},{"id" : "rnwlEdPrd","type" : "BIGDECIMAL","size" : "256"},{"id" : "rnwlEdAge","type" : "INT","size" : "256"},{"id" : "rnwlEdDt","type" : "STRING","size" : "256"},{"id" : "momPdCd","type" : "STRING","size" : "256"},{"id" : "keyCovSeq","type" : "BIGDECIMAL","size" : "256"},{"id" : "premKeyCnfgChtVal","type" : "STRING","size" : "256"},{"id" : "rdyAmtKeyCnfgChtVal","type" : "STRING","size" : "256"},{"id" : "bzExpKeyCnfgChtVal","type" : "STRING","size" : "256"},{"id" : "mdfRtKeyCnfgChtVal","type" : "STRING","size" : "256"},{"id" : "bizSysCd","type" : "STRING","size" : "256"},{"id" : "insdRto","type" : "BIGDECIMAL","size" : "256"},{"id" : "covGrpCd","type" : "STRING","size" : "256"},{"id" : "dtlPdCd","type" : "STRING","size" : "256"},{"id" : "wrdNprnYn","type" : "STRING","size" : "256"},{"id" : "chgdvInsdAmt","type" : "BIGDECIMAL","size" : "256"},{"id" : "chgdvAplPrem","type" : "BIGDECIMAL","size" : "256"},{"id" : "owbrAmt","type" : "BIGDECIMAL","size" : "256"},{"id" : "accmTrgRskCd","type" : "STRING","size" : "256"},{"id" : "atlCtrCovId","type" : "STRING","size" : "256"},{"id" : "atlHisSeq","type" : "BIGDECIMAL","size" : "256"},{"id" : "rowStat","type" : "STRING","size" : "256"},{"id" : "mdfPrem","type" : "BIGDECIMAL","size" : "256"},{"id" : "mdfPremRt","type" : "BIGDECIMAL","size" : "256"},{"id" : "nptdRdyAmt","type" : "BIGDECIMAL","size" : "256"},{"id" : "cntdRdyAmt","type" : "BIGDECIMAL","size" : "256"},{"id" : "acqExpDdcAmt","type" : "BIGDECIMAL","size" : "256"},{"id" : "rnwlTms","type" : "INT","size" : "256"},{"id" : "keyHisSeq","type" : "BIGDECIMAL","size" : "256"},{"id" : "insBgnTm","type" : "STRING","size" : "256"},{"id" : "insEdTm","type" : "STRING","size" : "256"},{"id" : "flag","type" : "INT","size" : "256"},{"id" : "rnwlPdCd","type" : "STRING","size" : "256"},{"id" : "ageAplDivCd","type" : "STRING","size" : "256"},{"id" : "nrmlClusDivCd","type" : "STRING","size" : "256"},{"id" : "acuPremDivCd","type" : "STRING","size" : "256"},{"id" : "premRddwUntCd","type" : "STRING","size" : "256"},{"id" : "dcXchgCmptDivCd","type" : "STRING","size" : "256"},{"id" : "basPrem","type" : "BIGDECIMAL","size" : "256"},{"id" : "sbcAmtIndiCon","type" : "STRING","size" : "256"},{"id" : "prctrCovStatCd","type" : "STRING","size" : "256"},{"id" : "endrNo","type" : "INT","size" : "256"},{"id" : "acdYn","type" : "STRING","size" : "256"},{"id" : "dtgrDcDivCd","type" : "STRING","size" : "256"},{"id" : "rnwlCovCd","type" : "STRING","size" : "256"},{"id" : "rnwlRskRtGrwTims","type" : "INT","size" : "256"},{"id" : "premFixDivCd","type" : "STRING","size" : "256"},{"id" : "slzPrem","type" : "BIGDECIMAL","size" : "256"},{"id" : "altnPyFincDivCd","type" : "STRING","size" : "256"},{"id" : "rnwlBctCovId","type" : "STRING","size" : "256"},{"id" : "ageGrwPrem","type" : "BIGDECIMAL","size" : "256"},{"id" : "rskPrem","type" : "BIGDECIMAL","size" : "256"},{"id" : "avgAge","type" : "INT","size" : "256"},{"id" : "covTrmChngDivCd","type" : "STRING","size" : "256"},{"id" : "indiSeq","type" : "INT","size" : "256"},{"id" : "cho","type" : "STRING","size" : "256"},{"id" : "tmnCnt","type" : "INT","size" : "256"},{"id" : "covAddPsbYn","type" : "STRING","size" : "256"},{"id" : "dpndSicDivCd","type" : "STRING","size" : "256"},{"id" : "bzccSbcAmt","type" : "STRING","size" : "256"},{"id" : "recmAmt","type" : "STRING","size" : "256"},{"id" : "oandsYn","type" : "STRING","size" : "256"},{"id" : "nwFamtCovDivCd","type" : "STRING","size" : "256"},{"id" : "ernRtDivCd","type" : "STRING","size" : "256"},{"id" : "pyPrdInsPrd","type" : "STRING","size" : "256"},{"id" : "bthBfPyPrdInsPrd","type" : "STRING","size" : "256"},{"id" : "pdCovScrnIndiNm","type" : "STRING","size" : "256"},{"id" : "covNmClickYn","type" : "STRING","size" : "256"},{"id" : "slideImg","type" : "STRING","size" : "256"},{"id" : "slideImgShow","type" : "STRING","size" : "256"},{"id" : "covColor","type" : "STRING","size" : "256"},{"id" : "covFont","type" : "STRING","size" : "256"},{"id" : "covCndShow","type" : "STRING","size" : "256"},{"id" : "sbcAmtBgColor","type" : "STRING","size" : "256"},{"id" : "premBgColor","type" : "STRING","size" : "256"},{"id" : "psbAmtBgColor","type" : "STRING","size" : "256"},{"id" : "covMdtrSbcYn","type" : "STRING","size" : "256"},{"id" : "premDisTp","type" : "STRING","size" : "256"},{"id" : "stupSbcAmt","type" : "STRING","size" : "256"},{"id" : "accmComsMltpVal","type" : "BIGDECIMAL","size" : "15"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("cdsCovSbcDdtCon", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "covCd","type" : "STRING","size" : "256"},{"id" : "codeNo","type" : "STRING","size" : "256"},{"id" : "codeName","type" : "STRING","size" : "256"},{"id" : "ctrObjSeq","type" : "STRING","size" : "256"},{"id" : "ctrObjTpSeq","type" : "STRING","size" : "256"}]},"Rows" : [{"codeNo" : "20,1,100,2","codeName" : "20년/100세"},{"codeNo" : "20,1,90,2","codeName" : "20년/90세"},{"codeNo" : "20,1,80,2","codeName" : "20년/80세"},{"codeNo" : "20,1,60,2","codeName" : "20년/60세"},{"codeNo" : "20,1,20,1","codeName" : "20년/20년"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTemp", this);
            obj._setContents({});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid01","20","93",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cellsizingtype("col");
            obj.set_extendsizetype("row");
            obj.set_autofittype("col");
            obj.set_binddataset("dsCovInspe");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"70\"/><Column size=\"30\"/><Column size=\"70\"/><Column size=\"145\"/><Column size=\"30\"/><Column size=\"70\"/><Column size=\"10\"/><Column size=\"30\"/><Column size=\"161\"/><Column size=\"161\"/><Column size=\"161\"/><Column size=\"180\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"radioitemcontrol\" edittype=\"radioitem\" radioitemcodevalue=\"1\" cssclass=\"cell_grd_RightNone\"/><Cell col=\"1\" text=\"선택담보\" cssclass=\"cell_grd_RightNone\"/><Cell col=\"2\" displaytype=\"radioitemcontrol\" edittype=\"radioitem\" radioitemcodevalue=\"1\" cssclass=\"cell_grd_RightNone\"/><Cell col=\"3\" text=\"미선택담보\" cssclass=\"cell_grd_RightNone\"/><Cell col=\"4\" displaytype=\"editcontrol\" edittype=\"normal\" cssclass=\"cell_grd_RightNone\"/><Cell col=\"5\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"cell_grd_RightNone, cell_grd_Refresh\"/><Cell col=\"6\" text=\"펼치기\" displaytype=\"buttoncontrol\" cssclass=\"cell_grd_RightNone, cell_grd_Expand\"/><Cell col=\"7\" cssclass=\"cell_grd_RightNone\"/><Cell col=\"8\"/><Cell col=\"9\" text=\"가입금액\"/><Cell col=\"10\" text=\"보험료\"/><Cell col=\"11\" text=\"가능금액\"/><Cell col=\"12\" text=\"납기/만기\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:dataset.parent.exprChkDpType(dataset,currow)\" edittype=\"expr:dataset.parent.exprChkEdtType(dataset,currow)\" text=\"bind:cho\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.exprCsnDpType(dataset,currow)\" text=\"bind:scrnExpsSq\" expandimage=\"bind:slideImg\" expandshow=\"bind:slideImgShow\" font=\"나눔고딕,10, antialias\" expandsize=\"40\"/><Cell col=\"2\" colspan=\"6\" text=\"bind:pdCovScrnIndiNm\"/><Cell col=\"8\" textAlign=\"center\" expandshow=\"bind:covCndShow\" expandimage=\"url(&apos;ct_img::btn_search.png&apos;)\"/><Cell col=\"9\" edittype=\"expr:dataset.parent.exprSubamoEdtType(dataset,currow)\" maskedittype=\"number\" maskeditformat=\"expr:dataset.parent.exprSubamoMask(dataset,currow)\" textAlign=\"right\" displaytype=\"mask\" font=\"normal bold 10pt/normal &quot;나눔고딕&quot;\" expr=\"dataset.parent.exprSubamoExpr(dataset,currow)\" text=\"bind:sbcAmtIndiCon\"/><Cell col=\"10\" text=\"bind:aplPrem\" font=\"normal 10pt/normal &quot;나눔고딕&quot;\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:psbAmt\" font=\"normal 9pt/normal &quot;나눔고딕&quot;\" textAlign=\"right\"/><Cell col=\"12\" text=\"bind:pyPrdInsPrd\" expandshow=\"expr:dataset.parent.exprSubamoExpandShow(dataset,currow)\" displaytype=\"combotext\" combodataset=\"cdsCovSbcDdtCon\" combodatacol=\"codeName\" combocodecol=\"codeNo\" padding=\"0px 0px 0px 10px\" expandimage=\"url(&apos;ct_img::btn_tab_dropdown_over.png&apos;)\" comboautoselect=\"true\" textAlign=\"left\" edittype=\"expr:dataset.parent.exprSubamoEditType(dataset, currow)\"/></Band></Format><Format id=\"layout2\"><Columns><Column size=\"30\"/><Column size=\"70\"/><Column size=\"30\"/><Column size=\"70\"/><Column size=\"145\"/><Column size=\"30\"/><Column size=\"70\"/><Column size=\"10\"/><Column size=\"30\"/><Column size=\"161\"/><Column size=\"161\"/><Column size=\"161\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell displaytype=\"radioitemcontrol\" edittype=\"radioitem\" radioitemcodevalue=\"1\" cssclass=\"cell_grd_RightNone\"/><Cell col=\"1\" text=\"선택담보\" cssclass=\"cell_grd_RightNone\"/><Cell col=\"2\" displaytype=\"radioitemcontrol\" edittype=\"radioitem\" radioitemcodevalue=\"1\" cssclass=\"cell_grd_RightNone\"/><Cell col=\"3\" text=\"미선택담보\" cssclass=\"cell_grd_RightNone\"/><Cell col=\"4\" displaytype=\"editcontrol\" edittype=\"normal\" cssclass=\"cell_grd_RightNone\"/><Cell col=\"5\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"cell_grd_RightNone, cell_grd_Refresh\"/><Cell col=\"6\" text=\"펼치기\" displaytype=\"buttoncontrol\" cssclass=\"cell_grd_RightNone, cell_grd_Expand\"/><Cell col=\"7\" cssclass=\"cell_grd_RightNone\"/><Cell col=\"8\"/><Cell col=\"9\" text=\"가입금액\"/><Cell col=\"10\" text=\"보험료\"/><Cell col=\"11\" text=\"가능금액\"/><Cell col=\"12\" text=\"납기/만기\"/><Cell col=\"13\" text=\"보험시기\"/><Cell col=\"14\" text=\"보험종기\"/><Cell col=\"15\" text=\"insdAmt\"/><Cell col=\"16\" text=\"covSbcDsgCtgCd\"/><Cell col=\"17\" text=\"exprDdtCovCtgVal\"/><Cell col=\"18\" text=\"ctrCovId\"/><Cell col=\"19\" text=\"ctrCovDivCd\"/><Cell col=\"20\" text=\"covCd\"/><Cell col=\"21\" text=\"covChrcCd\"/><Cell col=\"22\" text=\"ctrObjSeq\"/><Cell col=\"23\" text=\"ctrCovSeq\"/><Cell col=\"24\" text=\"basSicDivCd\"/><Cell col=\"25\" text=\"mdtrSbcYn\"/><Cell col=\"26\" text=\"sbcAmtTpCd\"/><Cell col=\"27\" text=\"sbcAmtCon\"/><Cell col=\"28\" text=\"insPrdCalTpCd\"/><Cell col=\"29\" text=\"lmpyCovYn\"/><Cell col=\"30\" text=\"insPrdTpCd\"/><Cell col=\"31\" text=\"pyPrdTpCd\"/><Cell col=\"32\" text=\"insPrd\"/><Cell col=\"33\" text=\"pyPrd\"/><Cell col=\"34\" text=\"insEdAge\"/><Cell col=\"35\" text=\"pyEdAge\"/><Cell col=\"36\" text=\"pyStDt\"/><Cell col=\"37\" text=\"pyEdDt\"/><Cell col=\"38\" text=\"rnwlEdPrdCd\"/><Cell col=\"39\" text=\"rnwlEdPrdDivCd\"/><Cell col=\"40\" text=\"rnwlEdAge\"/><Cell col=\"41\" text=\"rnwlEdDt\"/><Cell col=\"42\" text=\"mdExpPoTrgYn\"/><Cell col=\"43\" text=\"gurtConCd\"/><Cell col=\"44\" text=\"gurtAcuDivCd\"/><Cell col=\"45\" text=\"premMnulInpYn\"/><Cell col=\"46\" text=\"atlCtrCovId\"/><Cell col=\"47\" text=\"atlHisSeq\"/><Cell col=\"48\" text=\"premTpPyCd\"/><Cell col=\"49\" text=\"rskPrem\"/><Cell col=\"50\" text=\"covSbcDsgCtgCd\"/><Cell col=\"51\" text=\"aplPrem\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:dataset.parent.exprChkDpType(dataset,currow)\" edittype=\"expr:dataset.parent.exprChkEdtType(dataset,currow)\" text=\"bind:cho\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.exprCsnDpType(dataset,currow)\" text=\"bind:scrnExpsSq\" expandimage=\"bind:slideImg\" expandshow=\"bind:slideImgShow\" font=\"나눔고딕,10, antialias\" expandsize=\"40\"/><Cell col=\"2\" colspan=\"6\" text=\"bind:pdCovScrnIndiNm\"/><Cell col=\"8\" textAlign=\"center\" expandshow=\"bind:covCndShow\" expandimage=\"url(&apos;ct_img::btn_search.png&apos;)\"/><Cell col=\"9\" edittype=\"expr:dataset.parent.exprSubamoEdtType(dataset,currow)\" maskedittype=\"number\" maskeditformat=\"expr:dataset.parent.exprSubamoMask(dataset,currow)\" textAlign=\"right\" displaytype=\"mask\" font=\"normal bold 10pt/normal &quot;나눔고딕&quot;\" expr=\"dataset.parent.exprSubamoExpr(dataset,currow)\" text=\"bind:sbcAmtIndiCon\"/><Cell col=\"10\" text=\"bind:aplPrem\" font=\"normal 10pt/normal &quot;나눔고딕&quot;\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:psbAmt\" font=\"normal 9pt/normal &quot;나눔고딕&quot;\" textAlign=\"right\"/><Cell col=\"12\" text=\"bind:pyPrdInsPrd\" edittype=\"expr:dataset.parent.exprSubamoEditType(dataset,currow)\" expandshow=\"expr:dataset.parent.exprSubamoExpandShow(dataset,currow)\" displaytype=\"combotext\" combodataset=\"cdsCovSbcDdtCon\" combodatacol=\"codeName\" combocodecol=\"codeNo\" padding=\"0px 0px 0px 10px\" expandimage=\"url(&apos;ct_img::btn_tab_dropdown_over.png&apos;)\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:insBgnDt\"/><Cell col=\"14\" text=\"bind:insEdDt\"/><Cell col=\"15\" text=\"bind:insdAmt\"/><Cell col=\"16\" text=\"bind:covSbcDsgCtgCd\"/><Cell col=\"17\" text=\"bind:exprDdtCovCtgVal\"/><Cell col=\"18\" text=\"bind:ctrCovId\"/><Cell col=\"19\" text=\"bind:ctrCovDivCd\"/><Cell col=\"20\" text=\"bind:covCd\"/><Cell col=\"21\" text=\"bind:covChrcCd\"/><Cell col=\"22\" text=\"bind:ctrObjSeq\"/><Cell col=\"23\" text=\"bind:ctrCovSeq\"/><Cell col=\"24\" text=\"bind:basSicDivCd\"/><Cell col=\"25\" text=\"bind:mdtrSbcYn\"/><Cell col=\"26\" text=\"bind:sbcAmtTpCd\"/><Cell col=\"27\" text=\"bind:sbcAmtCon\"/><Cell col=\"28\" text=\"bind:insPrdCalTpCd\"/><Cell col=\"29\" text=\"bind:lmpyCovYn\"/><Cell col=\"30\" text=\"bind:insPrdTpCd\"/><Cell col=\"31\" text=\"bind:pyPrdTpCd\"/><Cell col=\"32\" text=\"bind:insPrd\"/><Cell col=\"33\" text=\"bind:pyPrd\"/><Cell col=\"34\" text=\"bind:insEdAge\"/><Cell col=\"35\" text=\"bind:pyEdAge\"/><Cell col=\"36\" text=\"bind:pyStDt\"/><Cell col=\"37\" text=\"bind:pyEdDt\"/><Cell col=\"38\" text=\"bind:rnwlEdPrdCd\"/><Cell col=\"39\" text=\"bind:rnwlEdPrdDivCd\"/><Cell col=\"40\" text=\"bind:rnwlEdAge\"/><Cell col=\"41\" text=\"bind:rnwlEdDt\"/><Cell col=\"42\" text=\"bind:mdExpPoTrgYn\"/><Cell col=\"43\" text=\"bind:gurtConCd\"/><Cell col=\"44\" text=\"bind:gurtAcuDivCd\"/><Cell col=\"45\" text=\"bind:premMnulInpYn\"/><Cell col=\"46\" text=\"bind:atlCtrCovId\"/><Cell col=\"47\" text=\"bind:atlHisSeq\"/><Cell col=\"48\" text=\"bind:premTpPyCd\"/><Cell col=\"49\" text=\"bind:rskPrem\"/><Cell col=\"50\" text=\"bind:covSbcDsgCtgCd\"/><Cell col=\"51\" text=\"bind:aplPrem\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","20","60","28","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_Change");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkFilter1","60","64","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("갱신형");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("N");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkFilter2","130","64","75","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("사망후유");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("N");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkFilter3","215","64","65","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("3대진단");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("N");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkFilter4","290","64","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("입원일당");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("N");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkFilter5","370","64","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("수술");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("N");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkFilter6","430","64","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("골절/화상");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("N");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkFilter7","520","64","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("운전/비용");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("N");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkFilter8","610","64","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("재물/배상");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("N");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkFilter9","700","64","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("기타");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("N");
            this.addChild(obj.name, obj);

            obj = new Button("btnTab1","20","20","170","35",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("피보험자1");
            this.addChild(obj.name, obj);

            obj = new Button("btnTab2","193","20","170","35",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("피보험자2");
            this.addChild(obj.name, obj);

            obj = new Button("btnTab3","366","20","170","35",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("피보험자3");
            this.addChild(obj.name, obj);

            obj = new Button("btnTabRefresh","539","20","40","35",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_background("url(\'theme::blue/images/cell_grd_Refresh.png\') no-repeat center center");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoGrdFormat",null,"27","122","20","20",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdoGrdFormat_innerdataset = new nexacro.NormalDataset("rdoGrdFormat_innerdataset", obj);
            rdoGrdFormat_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "1","datacolumn" : "기본"},{"codecolumn" : "2","datacolumn" : "상세"}]});
            obj.set_innerdataset(rdoGrdFormat_innerdataset);
            obj.set_text("기본");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",780,773,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("_BMT_02.xfdl", function() {
        /**
        *  Nexacro DEMO
        *  @FileName 	BMT_02.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2024/11/04
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/11/04			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.logger = nexacro.getApplication().formWork.logger;
        this.formAll = nexacro.getApplication().formAll;
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.BMT_02_test_onload = function(obj,e)
        {
        	this.fnSearch(this.formAll.Radio00.value);
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.fnSearch = function(mimetype)
        {
        	//[search00, search01] 병렬처리
        	this.gfn_transaction("search_dsCovInspe", "svc::tree-data.do", ""	,"dsCovInspe=dsCovInspe", "data=dsCovInspe."+mimetype)
        	.then((res) => {
        		this.collAllClose();
        	})

        	this.gfn_transaction("search_dsPfCovRlrBcVo", "svc::grid-data.do", ""	,"dsPfCovRlrBcVo=dsPfCovRlrBcVo", "data=dsPfCovRlrBcVo."+mimetype)
        	.then((res) => {
        	})

        };
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        /*========== Grid EXPR 처리 함수 Start ==========*/
        //체크박스 displaytype: scrnExpsCovCd 존재하고 scrnExpsCovYn [1]이 아니면 none, deault checkbox
        this.exprChkDpType = function(ds, row)
        {
        	const scrnExpsCovCd = ds.getColumn(row, "scrnExpsCovCd");
        	const scrnExpsCovYn = ds.getColumn(row, "scrnExpsCovYn");
        	if(!this.gfn_isNull(scrnExpsCovCd) && scrnExpsCovYn != 1) {
        		return "none";
        	} else {
        		return "checkboxcontrol";
        	}
        };

        //체크박스 edittype: scrnExpsCovCd 존재하고 scrnExpsCovYn [1]이 아니면 none, deault checkbox
        this.exprChkEdtType = function(ds, row)
        {
        	const scrnExpsCovCd = ds.getColumn(row, "scrnExpsCovCd");
        	const scrnExpsCovYn = ds.getColumn(row, "scrnExpsCovYn");
        	if(!this.gfn_isNull(scrnExpsCovCd) && scrnExpsCovYn != 1) {
        		return "none";
        	} else {
        		return "checkbox";
        	}
        };

        //담보순번 displaytype:  scrnExpsCovCd 존재하고 scrnExpsCovYn [1]이 아니면 none, default normal
        this.exprCsnDpType = function(ds, row)
        {
        	const scrnExpsCovCd = ds.getColumn(row, "scrnExpsCovCd");
        	const scrnExpsCovYn = ds.getColumn(row, "scrnExpsCovYn");

        	if(!this.gfn_isNull(scrnExpsCovCd) && scrnExpsCovYn != 1) {
        		return "none";
        	} else {
        		return "normal";
        	}
        };

        //가입금액 edittype: sbcAmtTpCd 기준 [1,2,3]이면 none, [4, 6]이면 masknumber, [5]이면 combo
        this.exprSubamoEdtType = function(ds, row)
        {
        	const sbcAmtTpCd = ds.getColumn(row, "sbcAmtTpCd");
        	switch(sbcAmtTpCd)
        	{
        		case '1':
        		case '2':
        		case '3':
        			return "none"
        			break;
        		case '4':
        		case '6':
        			return "mask"
        			break;
        		case '5':
        			return "combo"
        			break;
        		default:
        			return "none"
        	}
        };

        //가입금액 mask: covExceTpCd 기준 G15 = "", default = +#,###
        this.exprSubamoMask = function(ds, row)
        {
        	const covExceTpCd = ds.getColumn(row, "covExceTpCd");
        	if(covExceTpCd == "G15") {
        		return "";
        	} else {
        		return "+#,###";
        	}
        };

        //가입금액 EXPR: covExceTpCd가 G15면서 cho가 1인 경우 sbcAmtIndiCon = "간병인지원"
        //원래 expr properties에 거는건데 ""일경우 바인드된 데이터 나오지 않아 text에 검
        //!!!값을 변경할 수 있어야 하는데 변경이 안됨
        this.exprSubamoExpr = function(ds, row)
        {
        	const covExceTpCd = ds.getColumn(row, "covExceTpCd");
        	const cho = ds.getColumn(row, "cho");
        	if(covExceTpCd == "G15" && cho == 1) {
        		return "간병인지원";
        	}else {
        		return ds.getColumn(row, "sbcAmtIndiCon");
        	}
        };

        //납기/만기 edittype
        this.exprSubamoEditType = function(ds, row)
        {
        	//trace("ds = " + ds + " >>> " + row);
        	// 조건1 비교 변수
            const basSicDivCd = ds.getColumn(row, "basSicDivCd");
            const cho = ds.getColumn(row, "cho");
        	// 조건2 비교 변수
            const seDdtInqTpCd = ds.getColumn(row, "seDdtInqTpCd");
            const seDdtInqTpCdNoneValues = ["00", "01", "05", "10", "20"];
        	// 조건3 비교 변수
            const covSbcDsgCtgCd = ds.getColumn(row, "covSbcDsgCtgCd");
            const exprDdtCovCtgVal = ds.getColumn(row, "exprDdtCovCtgVal");
        	// 조건4 비교 변수
            const insPrdCalTpCd = ds.getColumn(row, "insPrdCalTpCd");
            const insPrdCalTpCdNoneValues = ["01", "02", "04", "07", "08", "09", "13"];
            const insPrdCalTpCdComboValues = ["03", "05", "06", "10", "11", "12"];

            /* 조건에 따른 edittype 설정
        	   조건 1: cho가 없거나 basSicDivCd가 1이면 none
        	   조건 2: seDdtInqTpCd 기준 [00, 01, 05, 10, 20]이면 none
        	   조건 3: covSbcDsgCtgCd 기준 [90]이면 none
        	   조건 4: exprDdtCovCtgVal가 없으면 none
        	   조건 5: insPrdCalTpCd 기준 [01, 02, 04, 07, 08, 09, 13]이면 none, [03, 05, 06, 10, 11, 12]이면 combo
        	*/
        	// Default to show
        	var editType = "combo";
        	// 상태 확인
        	if (this.gfn_isNull(cho) || basSicDivCd == "1" ||
        		seDdtInqTpCdNoneValues.includes(seDdtInqTpCd) ||
        		covSbcDsgCtgCd == "90" ||
        		this.gfn_isNull(exprDdtCovCtgVal) ||
        		insPrdCalTpCdNoneValues.includes(insPrdCalTpCd)) {

        		editType = "none";
        	}

        	if (insPrdCalTpCdComboValues.includes(insPrdCalTpCd)) {
        		editType = "combo";
        	}
        	// showHide 결과를 기반으로 그리드 셀에 expandshow 속성 적용
        	return editType;
        };

        //납기/만기 expandshow
        this.exprSubamoExpandShow = function(ds, row)
        {
            // 조건1 비교 변수
            const basSicDivCd = ds.getColumn(row, "basSicDivCd");
            const cho = ds.getColumn(row, "cho");
        	// 조건2 비교 변수
            const seDdtInqTpCd = ds.getColumn(row, "seDdtInqTpCd");
            const seDdtInqTpCdHideValues = ["00", "01", "05", "10", "20"];
        	// 조건3 비교 변수
            const covSbcDsgCtgCd = ds.getColumn(row, "covSbcDsgCtgCd");
        	// 조건4 비교 변수
            const exprDdtCovCtgVal = ds.getColumn(row, "exprDdtCovCtgVal");
        	// 조건5 비교 변수
            const insPrdCalTpCd = ds.getColumn(row, "insPrdCalTpCd");
            const insPrdCalTpCdHideValues = ["01", "02", "04", "07", "08", "09", "13"];
            const insPrdCalTpCdShowValues = ["03", "05", "06", "10", "11", "12"];

        	// Default to show
        	var showHide = "show";
        	// 상태 확인
        	if (this.gfn_isNull(cho) || basSicDivCd === "1" ||
        		seDdtInqTpCdHideValues.includes(seDdtInqTpCd) ||
        		covSbcDsgCtgCd === "90" ||
        		this.gfn_isNull(exprDdtCovCtgVal) ||
        		insPrdCalTpCdHideValues.includes(insPrdCalTpCd)) {

        		showHide = "hide";
        	}

        	if (insPrdCalTpCdShowValues.includes(insPrdCalTpCd)) {
        		showHide = "show";
        	}
        	// showHide 결과를 기반으로 그리드 셀에 expandshow 속성 적용
        	return showHide;
        };
        /*========== Grid EXPR 처리 함수 End   ==========*/

        //그리드 헤더의 라디오, edit등 값 변경 후 호출되는 함수
        this.grdHeadFilter = function (grd)
        {
        	const ds = grd.getBindDataset()
        	//0 선택담보 2 미선택담보 4 담보찾기
        	const optionalColl = grd.getCellProperty("head", 0, "text");
        	const excludedColl = grd.getCellProperty("head", 2, "text");
        	const collSearch = grd.getCellProperty("head", 4, "text");

        	this.logger.timestamp(`담보필터|시작|${optionalColl}|${excludedColl}|${collSearch}`, true);

        	let filterstr = "";

        	if(optionalColl == 1){
        		filterstr += "cho=='1'";
        	}else if(excludedColl == 1){
        		filterstr += "cho!='1'";
        	}

        	if(!this.gfn_isNull(collSearch)){
        		if(this.gfn_isNull(filterstr)){
        			filterstr += "pdCovScrnIndiNm.includes('"+collSearch+"')";
        		}else {
        			filterstr += " && pdCovScrnIndiNm.includes('"+collSearch+"')";
        		}
        	}
        	ds.filter(filterstr);
        	this.logger.timestamp(`담보필터|종료|${optionalColl}|${excludedColl}|${collSearch}`, true);
        };

        //최초 데이터 로딩시 연결된 row들이 펼쳐져있어서 연결된 row 모두 접는 함수
        this.collAllClose = function ()
        {
        	const grd = this.Grid01;
        	const mainDs = this.dsCovInspe;

        	grd.set_enableevent(false);
        	grd.set_enableredraw(false);

        	let collExpandRows = [];
        	for(let i=0; i<mainDs.getRowCountNF(); ++i){
        		let expandShow = mainDs.getColumn(i, "slideImgShow");
        		if(expandShow == "show"){
        			collExpandRows.push(i);
        		}
        	}

        	for(let i=0; i<collExpandRows.length; ++i){
        		let row = collExpandRows[i];
        		let covCd = mainDs.getColumnNF(row, "covCd");
        		mainDs.filter("scrnExpsCovCd=='"+covCd+"'");

        		let rowIdxNfs = [];
        		for(let j=0; j<mainDs.getRowCount(); ++j){
        			rowIdxNfs.push(mainDs.findNFRowIndex(j));
        		}
        		//성능에 문제가 되는 부분
        		for(let j=0; j<rowIdxNfs.length; ++j){
        			grd.setRealRowSize(rowIdxNfs[j], 0);
        		}
        		mainDs.filter("");
        	}

        	grd.set_enableevent(true);
        	grd.set_enableredraw(true);
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // ctrObjSeq의 값으로 각 피보험자 버튼(탭)에 맞게끔 필터 처리
        // 필터 조건: 피보험자 1 = ctrObjSeq "1", 피보험자 2 = ctrObjSeq "2", 피보험자 3 = ctrObjSeq "3"
        this.fnComBtnOnClick = function(obj,e)
        {
        	// 피보험자 버튼(탭) 동작과 필터 조건
        	switch (obj.name) {
        		case "btnTab1": // Tab 1: 피보험자 1
        			sFilterFlag = "1";
        			sLogFlag = "1번피보험자이동";
        			break;
        		case "btnTab2": // Tab 2: 피보험자 2
        			sFilterFlag = "2";
        			sLogFlag = "2번피보험자이동";
        			break;
        		case "btnTab3": // Tab 3: 피보험자 3
        			sFilterFlag = "3";
        			sLogFlag = "3번피보험자이동";
        			break;
        		case "btnTabRefresh": // Reset Filter
        			sFilterFlag = null;
        			sLogFlag = "초기화";
        			break;
        	}
        	this.logger.timestamp(`TAB이동|${sLogFlag}|${sFilterFlag}|시작|moveTabPage`, true);
        	// 데이터셋 필터 처리
        	if (sFilterFlag) {
        		this.dsCovInspe.filter("ctrObjSeq == '" + sFilterFlag + "'");
        	} else {
        		this.dsCovInspe.filter(""); // 필터 초기화
        	}
        	this.logger.timestamp(`TAB이동|${sLogFlag}|${sFilterFlag}|종료|moveTabPage`, true);
        };

        //그리드 필터 대상 컬럼: pdCovDsgCtgCd / covSbcDsgCtgCd(이건 뭔지 모르겠음)
        //그리드 필터 유효값: Z7 갱신형, A1 사망후유, A2 3대진단, Z8 기타, A4 수술, A3 입원일당, A5 골절/화상, A9 재물/배상, A8 운전/비용
        this.selectedConditions = []; //선택된 조건을 저장할 배열
        this.chkObjTxt = [];
        this.fnChkOnChanged = function(obj,e)
        {
        	//log 처리를 위한 대상 체크박스 Object
        	const chkObjVal = [this.chkFilter1.value, this.chkFilter2.value, this.chkFilter3.value, this.chkFilter4.value,
        					   this.chkFilter5.value, this.chkFilter6.value, this.chkFilter7.value, this.chkFilter8.value,
        					   this.chkFilter9.value];
        	const chkObjList = ["갱신형", "사망후유", "3대진단", "입원일당", "수술", "골절/화상", "운전/비용", "재물/배상", "기타"];

        	// 체크박스 선택/해제에 따라 조건 추가/삭제
        	const conditionCode = this.getConditionCode(obj.text);
        	// Log 찍기 위함
        	const conditionText = this.getConditionText(conditionCode);

        	if (!conditionCode) return; // 유효하지 않은 조건은 무시
        	if (!conditionText) return; // 유효하지 않은 조건은 무시

        	// 체크박스 상태에 따라 조건 배열 수정
        	if (e.postvalue === "Y") {
        		// 조건 추가 (중복 방지)
        		if (!this.selectedConditions.includes(conditionCode)) {
        			this.selectedConditions.push(conditionCode);
        		}
        		if (!this.chkObjTxt.includes(conditionText)) {
        			this.chkObjTxt.push(conditionText);
        		}
        	} else {
        		// 조건 제거
        		const index = this.selectedConditions.indexOf(conditionCode);
        		const indexTxt = this.chkObjTxt.indexOf(conditionText);
        		if (index > -1) {
        			this.selectedConditions.splice(index, 1);
        		}
        		if (indexTxt > -1) {
        			this.chkObjTxt.splice(indexTxt, 1);
        		}
        	}

        	// Log 조건 생성
        	let LogTxt;
        	let ChkLogStr = this.chkObjTxt.length > 0 ? this.chkObjTxt.map(function(cond) {
        			  return `${cond}`}).join(",") : "null";

        	this.logger.timestamp(`담보필터|${ChkLogStr}|시작|${chkObjList[0]}|${chkObjVal[0]}|${chkObjList[1]}|${chkObjVal[1]}|${chkObjList[2]}|${chkObjVal[2]}|${chkObjList[3]}|${chkObjVal[3]}|${chkObjList[4]}|${chkObjVal[4]}|${chkObjList[5]}|${chkObjVal[5]}|${chkObjList[6]}|${chkObjVal[6]}|${chkObjList[7]}|${chkObjVal[7]}|${chkObjList[8]}|${chkObjVal[8]}`, true);

        	// 필터 조건 생성
        	let ChkfilterStr = this.selectedConditions.length > 0 ? this.selectedConditions.map(function(cond) {
        			  return `pdCovDsgCtgCd == '${cond}'`;}).join(" || ") : "";

        //	trace(`필터 조건: ${ChkfilterStr}`);
        // 	trace(`필터 조건: ${ChkLogStr}`);

        	// dsCovInspe 데이터셋에 필터 적용
        	if (ChkfilterStr) {
        		this.dsCovInspe.filter(ChkfilterStr);
        	} else {
        		this.dsCovInspe.filter(""); // 필터 초기화
        		this.selectedConditions = []; //선택된 조건 저장 배열 초기화
        		this.chkObjTxt = []; //선택된 조건 저장 배열 초기화
        	}

        	this.logger.timestamp(`담보필터|${ChkLogStr}|종료|${chkObjList[0]}|${chkObjVal[0]}|${chkObjList[1]}|${chkObjVal[1]}|${chkObjList[2]}|${chkObjVal[2]}|${chkObjList[3]}|${chkObjVal[3]}|${chkObjList[4]}|${chkObjVal[4]}|${chkObjList[5]}|${chkObjVal[5]}|${chkObjList[6]}|${chkObjVal[6]}|${chkObjList[7]}|${chkObjVal[7]}|${chkObjList[8]}|${chkObjVal[8]}`, true);
        };

        // 그리드 상단 체크 박스 관련 함수: 조건 텍스트를 코드로 변환하는 함수
        this.getConditionCode = function(text)
        {
            switch (text) {
                case "갱신형": return "Z7";
                case "사망후유": return "A1";
                case "3대진단": return "A2";
                case "기타": return "Z8";
                case "수술": return "A4";
                case "입원일당": return "A3";
                case "골절/화상": return "A5";
                case "재물/배상": return "A9";
                case "운전/비용": return "A8";
                default: return null;
            }
        };

        // 그리드 상단 체크 박스 관련 함수: Log 찍기 위함
        this.getConditionText = function(text)
        {
            switch (text) {
                case "Z7": return "갱신형";
                case "A1": return "사망후유";
                case "A2": return "3대진단";
                case "Z8": return "기타";
                case "A4": return "수술";
                case "A3": return "입원일당";
                case "A5": return "골절/화상";
                case "A9": return "재물/배상";
                case "A8": return "운전/비용";
                default: return null;
            }
        };

        this.Grid01_onheadclick = function(obj,e)
        {
        	switch(e.cell) {
        	case 0:{ //선택담보 라디오 버튼
        			let radioval1 = obj.getCellProperty("head", 0, "text");
        			let result = (radioval1 == 0) ? 1 : (radioval1 == 1) ? 0 : 1;
        			let radioval2 = obj.getCellProperty("head", 2, "text");
        			if(result == 1 && radioval2 == 1){
        				obj.setCellProperty("head", 2, "text", 0);
        			}
        			obj.setCellProperty("head", 0, "text", result);
        			this.grdHeadFilter(obj);
        		}
        		break;

        	case 2:{ //미선택담보 라디오 버튼
        			let radioval1 = obj.getCellProperty("head", 2, "text");
        			let result = (radioval1 == 0) ? 1 : (radioval1 == 1) ? 0 : 1;
        			let radioval2 = obj.getCellProperty("head", 0, "text");
        			if(result == 1 && radioval2 == 1){
        				obj.setCellProperty("head", 0, "text", 0);
        			}
        			obj.setCellProperty("head", 2, "text", result);
        			this.grdHeadFilter(obj);
        		}
        		break;

        	case 5: //초기화?? 버튼
        		obj.setCellProperty("head", 0, "text", "");
        		obj.setCellProperty("head", 2, "text", "");
        		obj.setCellProperty("head", 4, "text", "");
        		this.grdHeadFilter(obj);
        		break;

        	case 6:{ //펼치기 닫기
        		let oldHeadVal = obj.getCellProperty("head", 6, "text");
        		let newHeadVal = (oldHeadVal == "펼치기") ? "접기" : "펼치기";
        		this.logger.timestamp(`그리드${newHeadVal}|시작|GridColMove|${oldHeadVal}버튼 -> ${newHeadVal}버튼`, true);

        		obj.setCellProperty("head", 6, "text", newHeadVal);

        		(newHeadVal == "펼치기") ? obj.setRealColSize("body",7, 10) : obj.setRealColSize("body",7, 100);

        		this.logger.timestamp(`그리드${newHeadVal}|종료|GridColMove|${oldHeadVal}버튼 -> ${newHeadVal}버튼`, true);

        		}break;
        	default:
        	}
        };

        this.Grid01_onheadvaluechanged = function(obj,e)
        {
        	if(e.cell == 4){ //담보찾는 edit박스
        		obj.setCellProperty("head", 4, "text", e.newvalue);
        		this.grdHeadFilter(obj);
        	}
        };

        this.dsCovInspe_oncolumnchanged = function(obj,e)
        {
        	//가입금액입력 조건 : 가입금액 쪽 데이터가 입력이 되면서 체크(담보선택)가 되어야함.(현재 입력된 곳 데이터를 지우면 체크를 해제하는건가? 일단 넣어놨음.)
        	let chkColumn = obj.getColID(e.col);
        	let sVal = obj.getColumn(e.row, e.col);

        	let covCd = obj.getColumn(e.row, "covCd");
        	let pdCovScrnIndiNm = obj.getColumn(e.row, "pdCovScrnIndiNm");

        	if (chkColumn == "sbcAmtIndiCon" && !this.gfn_isNull(sVal)) {
        		obj.setColumn(e.row, "cho" ,"1");
        		this.logger.timestamp(`가입금액입력|${covCd}|${pdCovScrnIndiNm}|시작|checkCho|동시가입담보${covCd}`, true);
        	} else if (chkColumn == "sbcAmtIndiCon" && this.gfn_isNull(sVal)) {
        		obj.setColumn(e.row, "cho" ,"0");
        		this.logger.timestamp(`가입금액해제|${covCd}|${pdCovScrnIndiNm}|종료|checkCho|동시가입담보${covCd}`, true);
        	}
        };

        this.Grid01_oncellclick = function(obj,e)
        {
        	if(e.cell == 0 && e.clickitem == "control"){ //첫번째 col, 체크박스 형태 일때
        		this.Grid01.set_enableredraw(false);
        		let row = this.dsCovInspe.rowposition;
        		let covCd = this.dsCovInspe.getColumn(row, "covCd");
        		let cho = this.dsCovInspe.getColumn(row,"cho");

        		const staStr = (cho == "1") ? "담보선택" : "담보선택해제";
        		let logStr = `${staStr}|${this.dsCovInspe.getColumn(row,"scrnExpsSq")}|${this.dsCovInspe.getColumn(row,"pdCovScrnIndiNm")}`;

        		this.dsPfCovRlrBcVo.filter("stdCovCd=='"+covCd+"'");
        		let trgRowCds = [];
        		//log에 동시담보가 있을경우 추가하기 위한 for 문 여기에 필터링까지 넣을 수 있으나, 그러면 log에 시작, 종료를 제대로 측정 못해서 분리
        		for(let i=0; i< this.dsPfCovRlrBcVo.getRowCount(); ++i){
        			let covRelTpDivCd = this.dsPfCovRlrBcVo.getColumn(i, "covRelTpDivCd");
        			let trgCovCd = this.dsPfCovRlrBcVo.getColumn(i, "trgCovCd");

        			if(covRelTpDivCd == "AND"){
        				trgRowCds.push("|동시가입담보");
        				trgRowCds.push(trgCovCd);
        				if(cho == "1"){
        					this.dsCovInspe.filter("covCd=='"+trgCovCd+"'");

        					for(let j=0; j<this.dsCovInspe.getRowCount(); ++j){
        						trgRowCds.push(this.dsCovInspe.getColumn(j, "trgCovCd"));
        					}

        					this.dsCovInspe.filter("");
        				}
        			}else if(covRelTpDivCd == "XOR"){
        				trgRowCds.push("|동시가입불가담보");
        				trgRowCds.push(trgCovCd);
        				if(cho == "1"){
        					this.dsCovInspe.filter("covCd=='"+trgCovCd+"'");
        					for(let j=0; j<this.dsCovInspe.getRowCount(); ++j){
        						trgRowCds.push(this.dsCovInspe.getColumn(j, "trgCovCd"));
        					}

        					this.dsCovInspe.filter("");
        				}
        			}
        		}

        		let uniquetrgRowCds = Array.from(new Set(trgRowCds));
        		let filterRowCds =  uniquetrgRowCds.filter(value => value);
        		let str = filterRowCds.join(",");

        		logStr += str;

        		this.logger.timestamp(logStr+"|시작", true);

        		//log찍은 후 실제 동시가입담보등 찾아서 선택 동작 for 문
        		for(let i=0; i< this.dsPfCovRlrBcVo.getRowCount(); ++i){
        			let covRelTpDivCd = this.dsPfCovRlrBcVo.getColumn(i, "covRelTpDivCd");
        			let trgCovCd = this.dsPfCovRlrBcVo.getColumn(i, "trgCovCd");


        			if(covRelTpDivCd == "AND"){
        				if(cho == "1"){
        					this.dsCovInspe.filter("covCd=='"+trgCovCd+"'");
        					let trgRows = [];

        					for(let j=0; j<this.dsCovInspe.getRowCount(); ++j){
        						trgRows.push(this.dsCovInspe.findNFRowIndex(j));
        					}
        					for(let j=0; j<trgRows.length; ++j){
        						let trgRowCho = this.dsCovInspe.getColumnNF(trgRows[j],"cho");

        						if(trgRowCho == "1"){
        							this.dsCovInspe.setColumnNF(trgRows[j],"cho", "1");
        						}
        					}
        					this.dsCovInspe.filter("");
        				}
        			}else if(covRelTpDivCd == "XOR"){
        				if(cho == "1"){
        					this.dsCovInspe.filter("covCd=='"+trgCovCd+"'");
        					let trgRows = [];
        					for(let j=0; j<this.dsCovInspe.getRowCount(); ++j){
        						trgRows.push(this.dsCovInspe.findNFRowIndex(j));
        					}
        					for(let j=0; j<trgRows.length; ++j){
        						let trgRowCho = this.dsCovInspe.getColumnNF(trgRows[j],"cho");

        						if(trgRowCho == "1"){
        							this.dsCovInspe.setColumnNF(trgRows[j],"cho", "0");
        						}
        					}
        					this.dsCovInspe.filter("");
        				}
        			}
        		}

        		this.dsPfCovRlrBcVo.filter("");

        		this.Grid01.set_enableredraw(true);

        		this.logger.timestamp(logStr+"|종료", true);
        	}

        	//담보 순번의 접기 펼치기 버튼 연결된 담보들을 접고, 펼쳐줌
        	if(e.cell == 1 && e.clickitem == "expandbutton"){
        		this.Grid01.set_enableredraw(false);
        		const mainDs = this.dsCovInspe;
        		const row = mainDs.rowposition;
        		const covCd = mainDs.getColumn(row, "covCd");
        		const orgExpandBtnImg = mainDs.getColumn(row, "slideImg");
        		const newExpandBtnImg = (orgExpandBtnImg == "ct_img::btn_slide_open.png") ? "ct_img::btn_slide_close.png" : "ct_img::btn_slide_open.png";
        		const newExpandBtnStr = (orgExpandBtnImg == "ct_img::btn_slide_open.png") ? "펼치기버튼클릭" : "접기버튼클릭";

        		this.logger.timestamp(`${newExpandBtnStr}|${mainDs.getColumn(row,"scrnExpsSq")}|${mainDs.getColumn(row,"pdCovScrnIndiNm")}|시작|slideBtnClick|${newExpandBtnImg} 이미지활성화`, true);

        		mainDs.setColumn(row, "slideImg", newExpandBtnImg);

        		mainDs.filter("scrnExpsCovCd=='"+covCd+"'");

        		let rowIdxNfs = [];
        		for(let i=0; i<mainDs.getRowCount(); ++i){
        			rowIdxNfs.push(mainDs.findNFRowIndex(i));
        		}

        		let rowSize = (orgExpandBtnImg == "ct_img::btn_slide_open.png") ? 35 : 0;
        		obj.set_enableredraw(false);
        		for(let i=0; i<rowIdxNfs.length; ++i){
        			obj.setRealRowSize(rowIdxNfs[i], rowSize);
        		}
        		obj.set_enableredraw(true);

        		this.logger.timestamp(`${newExpandBtnStr}|${mainDs.getColumn(row,"scrnExpsSq")}|${mainDs.getColumn(row,"pdCovScrnIndiNm")}|종료|slideBtnClick|${newExpandBtnImg} 이미지활성화`, true);
        		mainDs.filter("");

        		this.Grid01.set_enableredraw(true);
        	}

        	//납기/만기의 콤보박스 펼치기
        	if (e.cell == 7 && e.clickitem == "expandbutton") {
        		obj.set_autoenter("select");
        		//obj.showEditor(true);
        		obj.dropdownCombo();
        	}
        };

        this.rdoGrdFormat_onitemchanged = function(obj,e)
        {
        	if (e.postindex == 0) { // 기본 Grid Format
        		this.Grid01.set_formatid("default");
        		this.Grid01.set_autofittype("col");
        	} else { // 상세 Grid Format
        		this.Grid01.set_formatid("layout2");
        		this.Grid01.set_autofittype("none");
        	}
        };

        var thisForm = this;
        _pCellControl.on_apply_text = function () {
        	//기존 on_apply_text 함수가 실행되도록 함
        	this.on_apply_text_org();

        	if(this.parent.parent.parent.id == "Grid01"){
        		//별도 expr 적용하기 위한 코드 작성 시작
        		switch(this._cellidx) {
        		case 2: //담보명
        			this.set_color(thisForm.dsCovInspe.getColumn(this._rowidx,"covColor"));
        			//this.set_font(thisForm.dsCovInspe.getColumn(this._rowidx,"covFont"));
        			//normal 8pt/normal "나눔고딕" // 나눔고딕,8,&#32;antialias
        			//데이터는 나눔고딕,8,&#32;antialias 이런 형식으로 들어가있는데 그대로는 넥사크로에서 사용하지 못해서 고정(나눔고딕,8,&#32;antialias 이라는 데이터 1개만 존재)
        			if(!thisForm.gfn_isNull(thisForm.dsCovInspe.getColumn(this._rowidx,"covFont"))) {
        				this.set_font('normal 8pt/normal "나눔고딕"');
        			}
        			break;
        		case 4: //가입금액
        			if(thisForm.dsCovInspe.getColumn(this._rowidx,"cho") == 1){
        				//expr 조건에 cho가 1인경우 #ffffb3ff cssclass로 expr을 주면 여기서 properties를 변경하기때문에 안먹어서 추가
        				this.set_background("#ffffb3ff");
        			}else {
        				this.set_background(thisForm.dsCovInspe.getColumn(this._rowidx,"sbcAmtBgColor"));
        			}
        			break;
        		case 5: //보험료
        			this.set_background(thisForm.dsCovInspe.getColumn(this._rowidx,"premBgColor"));
        			break;
        		case 6: //가능금액
        			this.set_color(thisForm.dsCovInspe.getColumn(this._rowidx,"psbAmtBgColor"));
        			break;
        		default:
        		}
        		//별도 expr 적용하기 위한 코드 작성 종료
        	}
        };


        this.orgHPos = 0;

        this.Grid01_onhscroll = function(obj,e)
        {
        	this.orgHPos = e.pos;
        };

        this.Grid01_onvscroll = function(obj,e)
        {
        	obj.hscrollbar.set_pos(this.orgHPos-1);
        	obj.hscrollbar.set_pos(this.orgHPos+1);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.BMT_02_test_onload,this);
            this.Grid01.addEventHandler("onheadclick",this.Grid01_onheadclick,this);
            this.Grid01.addEventHandler("onheadvaluechanged",this.Grid01_onheadvaluechanged,this);
            this.Grid01.addEventHandler("oncellclick",this.Grid01_oncellclick,this);
            this.Grid01.addEventHandler("onhscroll",this.Grid01_onhscroll,this);
            this.Grid01.addEventHandler("onvscroll",this.Grid01_onvscroll,this);
            this.chkFilter1.addEventHandler("onchanged",this.fnChkOnChanged,this);
            this.chkFilter2.addEventHandler("onchanged",this.fnChkOnChanged,this);
            this.chkFilter3.addEventHandler("onchanged",this.fnChkOnChanged,this);
            this.chkFilter4.addEventHandler("onchanged",this.fnChkOnChanged,this);
            this.chkFilter5.addEventHandler("onchanged",this.fnChkOnChanged,this);
            this.chkFilter6.addEventHandler("onchanged",this.fnChkOnChanged,this);
            this.chkFilter7.addEventHandler("onchanged",this.fnChkOnChanged,this);
            this.chkFilter8.addEventHandler("onchanged",this.fnChkOnChanged,this);
            this.chkFilter9.addEventHandler("onchanged",this.fnChkOnChanged,this);
            this.btnTab1.addEventHandler("onclick",this.fnComBtnOnClick,this);
            this.btnTab2.addEventHandler("onclick",this.fnComBtnOnClick,this);
            this.btnTab3.addEventHandler("onclick",this.fnComBtnOnClick,this);
            this.btnTabRefresh.addEventHandler("onclick",this.fnComBtnOnClick,this);
            this.rdoGrdFormat.addEventHandler("onitemchanged",this.rdoGrdFormat_onitemchanged,this);
            this.dsCovInspe.addEventHandler("oncolumnchanged",this.dsCovInspe_oncolumnchanged,this);
        };
        this.loadIncludeScript("_BMT_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
