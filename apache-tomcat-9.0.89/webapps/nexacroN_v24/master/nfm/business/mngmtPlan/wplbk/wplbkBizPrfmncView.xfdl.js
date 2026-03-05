(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("wplbkBizPrfmncView");
            this.set_titletext("경영계획부 - 사업실적");
            if (Form == this.constructor)
            {
                this._setFormPosition(1240,1812);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"wplarId\" type=\"STRING\" size=\"256\"/><Column id=\"nxtrmNo\" type=\"STRING\" size=\"256\"/><Column id=\"wplbkNo\" type=\"STRING\" size=\"256\"/><Column id=\"formType\" type=\"STRING\" size=\"256\"/><Column id=\"bizDataTypeTpcd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAffrsWPLs", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFrestGrdnnWPLs", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFrtrePrdctWPLs", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFcltWPLs", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIncmWPLs", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRecovrWPLs", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAffrsSpecsTpcd", this);
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


            obj = new Dataset("dsRecovrSpecsTpcd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWplbkVO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSbltLctn", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"lctnDaddr\" type=\"STRING\" size=\"256\"/><Column id=\"pnuCd\" type=\"STRING\" size=\"256\"/><Column id=\"wplbkNo\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"lctnNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnNxtrmActoPrfmnc",null,"0","130","32","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("차기별 실적조회");
            obj.set_cssclass("btn_WF_module_line");
            this.addChild(obj.name, obj);

            obj = new Static("StaticAffrs","0","10","187","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조림");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdAffrs","0","StaticAffrs:20",null,"217","0",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid0");
            obj.set_taborder("2");
            obj.set_cssclass("grd_display");
            obj.set_binddataset("dsAffrsWPLs");
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_scrollbartype("auto auto");
            obj.set_fillareatype("none");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("row");
            obj.set_border("1px solid #52aaa4,0px none,1px solid #e2e2e2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"90\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"번호\"/><Cell col=\"1\" rowspan=\"2\" text=\"연도\"/><Cell col=\"2\" rowspan=\"2\" text=\"종별\"/><Cell col=\"3\" rowspan=\"2\" text=\"면적(㏊)\"/><Cell col=\"4\" rowspan=\"2\" text=\"수종\"/><Cell col=\"5\" rowspan=\"2\" text=\"본수(본)\"/><Cell col=\"6\" rowspan=\"2\" text=\"조림사유\"/><Cell col=\"7\" rowspan=\"2\" text=\"노동력(명)\"/><Cell col=\"8\" colspan=\"2\" text=\"사업비(천원)\"/><Cell col=\"10\" colspan=\"4\" text=\"수입(천원)\"/><Cell row=\"1\" col=\"8\" text=\"지출액\"/><Cell row=\"1\" col=\"9\" text=\"지출일\"/><Cell row=\"1\" col=\"10\" colspan=\"2\" text=\"수종 및 목재수확재적(m³)\"/><Cell row=\"1\" col=\"12\" text=\"수입액\"/><Cell row=\"1\" col=\"13\" text=\"수입일\"/></Band><Band id=\"body\"><Cell expr=\"rowidx+1\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"bind:bizYr\" maskeditformat=\"####\" maskeditlimitbymask=\"both\" cssclass=\"readonly\"/><Cell col=\"2\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsAffrsSpecsTpcd\" combodatacol=\"data\" combocodecol=\"code\" text=\"bind:bizKindCd\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" text=\"bind:bizArea\"/><Cell col=\"4\" edittype=\"none\" displaytype=\"normal\" multicombodataset=\"expr:comp.parent.parent.parent.parent.dsKoftrCd\" multicombodatacol=\"data\" multicombocodecol=\"code\" text=\"bind:koftrNm\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" text=\"bind:bizQntt\"/><Cell col=\"6\" edittype=\"none\" displaytype=\"combotext\" combodataset=\"dsAffrsRsnCd\" combodatacol=\"data\" combocodecol=\"code\" text=\"bind:bizRsnCd\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"none\" text=\"bind:bizLbper\" maskeditformat=\"###,###\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"none\" text=\"bind:bizAmt\" maskeditformat=\"###,###\"/><Cell col=\"9\" edittype=\"none\" displaytype=\"normal\" cssclass=\"point\" text=\"bind:expndDay\"/><Cell col=\"10\" displaytype=\"normal\" wordWrap=\"char\" textareascrolltype=\"vertical\" autosizerow=\"limitmin\" text=\"expr:comp.parent.fnSplitLine(koftrNm)\"/><Cell col=\"11\" displaytype=\"normal\" autosizerow=\"limitmin\" wordWrap=\"char\" textareascrolltype=\"vertical\" text=\"expr:comp.parent.fnSplitLine(bizPrdctnWdvlm)\"/><Cell col=\"12\" displaytype=\"normal\" text=\"bind:incmAmt\" edittype=\"none\" maskeditformat=\"###,###\"/><Cell col=\"13\" displaytype=\"normal\" cssclass=\"point\" text=\"bind:incmDay\" edittype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("StaticFrestGrdnn","0","grdAffrs:30","187","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("숲가꾸기");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFrestGrdnn","0","StaticFrestGrdnn:20",null,"217","0",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid0");
            obj.set_taborder("4");
            obj.set_cssclass("grd_display");
            obj.set_binddataset("dsFrestGrdnnWPLs");
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_fillareatype("none");
            obj.set_scrollbartype("auto auto");
            obj.set_extendsizetype("row");
            obj.set_autosizingtype("row");
            obj.set_border("1px solid #52aaa4,0px none,1px solid #e2e2e2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"70\"/><Column size=\"170\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"90\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"번호\"/><Cell col=\"1\" rowspan=\"2\" text=\"연도\"/><Cell col=\"2\" rowspan=\"2\" text=\"종별\"/><Cell col=\"3\" rowspan=\"2\" text=\"면적(㏊)\"/><Cell col=\"4\" rowspan=\"2\" text=\"횟수\"/><Cell col=\"5\" rowspan=\"2\" text=\"누적면적(㏊)\"/><Cell col=\"6\" rowspan=\"2\" text=\"노동력(명)\"/><Cell col=\"7\" colspan=\"2\" text=\"사업비(천원)\"/><Cell col=\"9\" colspan=\"4\" text=\"수입(천원)\"/><Cell row=\"1\" col=\"7\" text=\"지출액\"/><Cell row=\"1\" col=\"8\" text=\"지출일\"/><Cell row=\"1\" col=\"9\" colspan=\"2\" text=\"수종 및 목재수확재적(m³)\"/><Cell row=\"1\" col=\"11\" text=\"수입액\"/><Cell row=\"1\" col=\"12\" text=\"수입일\"/></Band><Band id=\"body\"><Cell expr=\"rowidx+1\"/><Cell col=\"1\" displaytype=\"normal\" text=\"bind:bizYr\" edittype=\"none\" maskeditformat=\"####\" maskeditlimitbymask=\"both\"/><Cell col=\"2\" displaytype=\"combotext\" combodataset=\"dsFrestGrdnnSpecsTpcd\" combocodecol=\"code\" combodatacol=\"data\" text=\"bind:bizKindCd\" edittype=\"none\"/><Cell col=\"3\" displaytype=\"normal\" text=\"bind:bizArea\" edittype=\"none\" maskeditformat=\"###,###.##\"/><Cell col=\"4\" displaytype=\"normal\" text=\"bind:bizQntt\" edittype=\"none\" maskeditformat=\"#,###\" maskeditlimitbymask=\"both\"/><Cell col=\"5\" displaytype=\"normal\" cssclass=\"point\" text=\"bind:bizAccmlArea\" edittype=\"none\"/><Cell col=\"6\" displaytype=\"normal\" text=\"bind:bizLbper\" edittype=\"none\" maskeditformat=\"###,###.#\"/><Cell col=\"7\" displaytype=\"normal\" text=\"bind:bizAmt\" edittype=\"none\" maskeditformat=\"###,###\"/><Cell col=\"8\" displaytype=\"normal\" cssclass=\"point\" text=\"bind:expndDay\" edittype=\"none\"/><Cell col=\"9\" displaytype=\"normal\" text=\"expr:comp.parent.fnSplitLine(koftrNm)\" wordWrap=\"char\" textareascrolltype=\"vertical\" autosizerow=\"limitmin\"/><Cell col=\"10\" displaytype=\"normal\" text=\"expr:comp.parent.fnSplitLine(bizPrdctnWdvlm)\"/><Cell col=\"11\" displaytype=\"normal\" text=\"bind:incmAmt\" edittype=\"none\" maskeditformat=\"###,###\"/><Cell col=\"12\" displaytype=\"normal\" cssclass=\"point\" text=\"bind:incmDay\" edittype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("StaticFrtrePrdct","0","grdFrestGrdnn:30","187","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("목재수확");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFrtrePrdct","0","StaticFrtrePrdct:20",null,"217","0",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid0");
            obj.set_taborder("6");
            obj.set_cssclass("grd_display");
            obj.set_binddataset("dsFrtrePrdctWPLs");
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_scrollbartype("auto auto");
            obj.set_fillareatype("none");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("row");
            obj.set_border("1px solid #52aaa4,0px none,1px solid #e2e2e2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"70\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"110\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"90\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"번호\"/><Cell col=\"1\" rowspan=\"2\" text=\"연도\"/><Cell col=\"2\" rowspan=\"2\" text=\"종별\"/><Cell col=\"3\" rowspan=\"2\" text=\"면적(㏊)\"/><Cell col=\"4\" rowspan=\"2\" text=\"목재수확종\"/><Cell col=\"5\" rowspan=\"2\" text=\"목재수확률(%)\"/><Cell col=\"6\" rowspan=\"2\" colspan=\"2\" text=\"수종 및 목재수확재적(m³)\"/><Cell col=\"8\" rowspan=\"2\" text=\"총재적(m³)\"/><Cell col=\"9\" rowspan=\"2\" text=\"생산방법\"/><Cell col=\"10\" rowspan=\"2\" text=\"노동력(명)\"/><Cell col=\"11\" colspan=\"2\" text=\"사업비(천원)\"/><Cell col=\"13\" colspan=\"2\" text=\"수입(천원)\"/><Cell row=\"1\" col=\"11\" text=\"지출액\"/><Cell row=\"1\" col=\"12\" text=\"지출일\"/><Cell row=\"1\" col=\"13\" text=\"수입액\"/><Cell row=\"1\" col=\"14\" text=\"수입일\"/></Band><Band id=\"body\"><Cell expr=\"rowidx+1\"/><Cell col=\"1\" displaytype=\"normal\" text=\"bind:bizYr\" edittype=\"none\" maskeditformat=\"####\" maskeditlimitbymask=\"both\"/><Cell col=\"2\" displaytype=\"combotext\" combodataset=\"dsSctslTpcd\" combocodecol=\"code\" combodatacol=\"data\" text=\"bind:bizKindCd\" edittype=\"none\"/><Cell col=\"3\" displaytype=\"normal\" text=\"bind:bizArea\" edittype=\"none\" maskeditformat=\"###,###.##\"/><Cell col=\"4\" displaytype=\"combotext\" combodataset=\"dsFellyMthdCd\" combodatacol=\"data\" combocodecol=\"code\" text=\"bind:frtrePrdctnAssrtTpcd\" edittype=\"none\"/><Cell col=\"5\" displaytype=\"normal\" text=\"bind:frtrePrdctnFellyRt\" edittype=\"none\" maskeditformat=\"###.#\" maskeditlimitbymask=\"both\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" text=\"expr:comp.parent.fnSplitLine(koftrNm)\" wordWrap=\"char\" textareascrolltype=\"vertical\" autosizerow=\"limitmin\"/><Cell col=\"7\" displaytype=\"normal\" text=\"expr:comp.parent.fnSplitLine(bizPrdctnWdvlm)\" autosizerow=\"limitmin\" textareascrolltype=\"vertical\" wordWrap=\"char\"/><Cell col=\"8\" displaytype=\"normal\" cssclass=\"point\" edittype=\"none\" maskeditformat=\"###,###.##\" text=\"bind:totBizPrdctnWdvlm\"/><Cell col=\"9\" displaytype=\"combotext\" combodataset=\"dsPrdctnMthdCd\" combocodecol=\"code\" combodatacol=\"data\" text=\"bind:prdctnMthdCd\" edittype=\"none\"/><Cell col=\"10\" displaytype=\"normal\" text=\"bind:bizLbper\" edittype=\"none\" maskeditformat=\"###,###.#\"/><Cell col=\"11\" displaytype=\"normal\" text=\"bind:bizAmt\" edittype=\"none\" maskeditformat=\"###,###\"/><Cell col=\"12\" displaytype=\"normal\" cssclass=\"point\" text=\"bind:expndDay\" edittype=\"none\"/><Cell col=\"13\" displaytype=\"normal\" text=\"bind:incmAmt\" edittype=\"none\" maskeditformat=\"###,###\"/><Cell col=\"14\" displaytype=\"normal\" cssclass=\"point\" text=\"bind:incmDay\" edittype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("StaticFclt","0","grdFrtrePrdct:30","187","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("시설");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFclt","0","StaticFclt:20",null,"217","0",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid0");
            obj.set_taborder("8");
            obj.set_cssclass("grd_display");
            obj.set_binddataset("dsFcltWPLs");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_scrollbartype("auto auto");
            obj.set_fillareatype("none");
            obj.set_extendsizetype("row");
            obj.set_autosizingtype("none");
            obj.set_border("1px solid #52aaa4,0px none,1px solid #e2e2e2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"70\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"90\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"번호\"/><Cell col=\"1\" rowspan=\"2\" text=\"연도\"/><Cell col=\"2\" rowspan=\"2\" text=\"종별\"/><Cell col=\"3\" rowspan=\"2\" text=\"물량\"/><Cell col=\"4\" rowspan=\"2\" text=\"노동력(명)\"/><Cell col=\"5\" colspan=\"2\" text=\"사업비(천원)\"/><Cell col=\"7\" colspan=\"4\" text=\"수입(천원)\"/><Cell row=\"1\" col=\"5\" text=\"지출액\"/><Cell row=\"1\" col=\"6\" text=\"지출일\"/><Cell row=\"1\" col=\"7\" colspan=\"2\" text=\"수종 및 목재수확재적(m³)\"/><Cell row=\"1\" col=\"9\" text=\"수입액\"/><Cell row=\"1\" col=\"10\" text=\"수입일\"/></Band><Band id=\"body\"><Cell expr=\"rowidx+1\"/><Cell col=\"1\" displaytype=\"normal\" text=\"bind:bizYr\" edittype=\"none\" maskeditformat=\"####\" maskeditlimitbymask=\"both\"/><Cell col=\"2\" displaytype=\"combotext\" combodataset=\"dsFcltKindCd\" combodatacol=\"dtlCdExpln\" combocodecol=\"code\" text=\"bind:bizKindCd\" edittype=\"none\"/><Cell col=\"3\" displaytype=\"normal\" text=\"bind:bizQntt\" edittype=\"none\" maskeditformat=\"###,###.##\"/><Cell col=\"4\" displaytype=\"normal\" text=\"bind:bizLbper\" edittype=\"none\" maskeditformat=\"###,###.#\"/><Cell col=\"5\" displaytype=\"normal\" text=\"bind:bizAmt\" edittype=\"none\" maskeditformat=\"###,###\"/><Cell col=\"6\" displaytype=\"normal\" cssclass=\"point\" text=\"bind:expndDay\" edittype=\"none\"/><Cell col=\"7\" displaytype=\"normal\" autosizerow=\"limitmin\" textareascrolltype=\"vertical\" wordWrap=\"char\" text=\"expr:comp.parent.fnSplitLine(koftrNm)\" edittype=\"none\"/><Cell col=\"8\" displaytype=\"normal\" wordWrap=\"char\" autosizerow=\"limitmin\" textareascrolltype=\"vertical\" text=\"expr:comp.parent.fnSplitLine(bizPrdctnWdvlm)\" edittype=\"none\"/><Cell col=\"9\" displaytype=\"normal\" text=\"bind:incmAmt\" edittype=\"none\" maskeditformat=\"###,###\"/><Cell col=\"10\" displaytype=\"normal\" cssclass=\"point\" text=\"bind:incmDay\" edittype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("StaticIncm","0","grdFclt:30","180","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("소득");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdIncm","0","StaticIncm:20",null,"217","0",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid0");
            obj.set_taborder("10");
            obj.set_cssclass("grd_display");
            obj.set_binddataset("dsIncmWPLs");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_scrollbartype("auto auto");
            obj.set_fillareatype("none");
            obj.set_autosizingtype("none");
            obj.set_extendsizetype("row");
            obj.set_border("1px solid #52aaa4,0px none,1px solid #e2e2e2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\" band=\"left\"/><Column size=\"70\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"90\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"번호\"/><Cell col=\"1\" rowspan=\"2\" text=\"연도\"/><Cell col=\"2\" rowspan=\"2\" text=\"종별\"/><Cell col=\"3\" rowspan=\"2\" text=\"기타 소득종\"/><Cell col=\"4\" rowspan=\"2\" text=\"생산량\"/><Cell col=\"5\" rowspan=\"2\" text=\"노동력(명)\"/><Cell col=\"6\" colspan=\"2\" text=\"사업비(천원)\"/><Cell col=\"8\" colspan=\"2\" text=\"수입(천원)\"/><Cell row=\"1\" col=\"6\" text=\"지출액\"/><Cell row=\"1\" col=\"7\" text=\"지출일\"/><Cell row=\"1\" col=\"8\" text=\"수입액\"/><Cell row=\"1\" col=\"9\" text=\"수입일\"/></Band><Band id=\"body\"><Cell expr=\"rowidx+1\"/><Cell col=\"1\" displaytype=\"normal\" text=\"bind:bizYr\" edittype=\"none\" maskeditformat=\"####\" maskeditlimitbymask=\"both\"/><Cell col=\"2\" displaytype=\"combotext\" combodataset=\"dsEarnSpecsClsfCd\" combodatacol=\"dtlCdExpln\" combocodecol=\"code\" text=\"bind:bizKindCd\" edittype=\"none\"/><Cell col=\"3\" displaytype=\"normal\" cssclass=\"point\" text=\"bind:bizEtcKindNm\" edittype=\"none\"/><Cell col=\"4\" displaytype=\"normal\" text=\"bind:bizQntt\" edittype=\"none\" maskeditformat=\"###,###.#\"/><Cell col=\"5\" displaytype=\"normal\" text=\"bind:bizLbper\" edittype=\"none\" maskeditformat=\"###,###.#\"/><Cell col=\"6\" displaytype=\"normal\" text=\"bind:bizAmt\" edittype=\"none\" maskeditformat=\"###,###\"/><Cell col=\"7\" displaytype=\"normal\" cssclass=\"point\" text=\"bind:expndDay\" edittype=\"none\"/><Cell col=\"8\" displaytype=\"normal\" text=\"bind:incmAmt\" edittype=\"none\" maskeditformat=\"###,###\"/><Cell col=\"9\" displaytype=\"normal\" cssclass=\"point\" text=\"bind:incmDay\" edittype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("StaticRecovr","0","grdIncm:30","460","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("병충해방제 및 산림피해 복구");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdRecovr","0","StaticRecovr:20",null,"217","0",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid0");
            obj.set_taborder("12");
            obj.set_cssclass("grd_display");
            obj.set_binddataset("dsRecovrWPLs");
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_scrollbartype("auto auto");
            obj.set_fillareatype("none");
            obj.set_extendsizetype("row");
            obj.set_autosizingtype("row");
            obj.set_border("1px solid #52aaa4,0px none,1px solid #e2e2e2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"70\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"90\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"번호\"/><Cell col=\"1\" rowspan=\"2\" text=\"연도\"/><Cell col=\"2\" rowspan=\"2\" text=\"종별\"/><Cell col=\"3\" rowspan=\"2\" text=\"기타 복구종\"/><Cell col=\"4\" rowspan=\"2\" text=\"면적\"/><Cell col=\"5\" rowspan=\"2\" text=\"노동력(명)\"/><Cell col=\"6\" colspan=\"2\" text=\"사업비(천원)\"/><Cell col=\"8\" colspan=\"4\" text=\"수입(천원)\"/><Cell row=\"1\" col=\"6\" text=\"지출액\"/><Cell row=\"1\" col=\"7\" text=\"지출일\"/><Cell row=\"1\" col=\"8\" colspan=\"2\" text=\"수종 및 목재수확재적(m³)\"/><Cell row=\"1\" col=\"10\" text=\"수입액\"/><Cell row=\"1\" col=\"11\" text=\"수입일\"/></Band><Band id=\"body\"><Cell expr=\"rowidx+1\"/><Cell col=\"1\" displaytype=\"normal\" text=\"bind:bizYr\" edittype=\"none\" maskeditformat=\"####\" maskeditlimitbymask=\"both\"/><Cell col=\"2\" displaytype=\"combotext\" text=\"bind:bizKindCd\" combodataset=\"dsRecovrSpecsTpcd\" combodatacol=\"data\" combocodecol=\"code\" edittype=\"none\"/><Cell col=\"3\" displaytype=\"normal\" cssclass=\"point\" text=\"bind:bizEtcKindNm\" edittype=\"none\"/><Cell col=\"4\" displaytype=\"normal\" text=\"bind:bizArea\" edittype=\"none\" maskeditformat=\"###,###.##\"/><Cell col=\"5\" displaytype=\"normal\" text=\"bind:bizLbper\" edittype=\"none\" maskeditformat=\"###,###.#\"/><Cell col=\"6\" displaytype=\"normal\" text=\"bind:bizAmt\" edittype=\"none\" maskeditformat=\"###,###\"/><Cell col=\"7\" displaytype=\"normal\" cssclass=\"point\" text=\"bind:expndDay\" edittype=\"none\"/><Cell col=\"8\" displaytype=\"normal\" autosizerow=\"limitmin\" wordWrap=\"char\" textareascrolltype=\"vertical\" text=\"expr:comp.parent.fnSplitLine(koftrNm)\"/><Cell col=\"9\" displaytype=\"normal\" textareascrolltype=\"vertical\" autosizerow=\"limitmin\" wordWrap=\"char\" text=\"expr:comp.parent.fnSplitLine(bizPrdctnWdvlm)\"/><Cell col=\"10\" displaytype=\"normal\" text=\"bind:incmAmt\" edittype=\"none\" maskeditformat=\"###,###\"/><Cell col=\"11\" displaytype=\"normal\" cssclass=\"point\" text=\"bind:incmDay\" edittype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnList",null,"grdRecovr:30","78","32","0",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_common01");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1240,1812,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("wplbkBizPrfmncView.xfdl","lib::lib_nfm.xjs");
        this.registerScript("wplbkBizPrfmncView.xfdl", function() {
        /**
        *  경영계획부 사업실적 화면
        *  @MenuPath    경영계획 > 경영계획부 관리 > 경영계획부 상세조회 > 사업실적
        *  @FileName 	wplbkBizPrfmncView.xfdl
        *  @Creator 	hdh
        *  @CreateDate 	2024.08.30
        *  @Desction         스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2024.08.30     		hdh(svn user) 	        최초 생성
        *******************************************************************************
        */
        this.executeIncludeScript("lib::lib_nfm.xjs"); /*include "lib::lib_nfm.xjs"*/;
        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        const publicArgs = this.gfnGetMdiRootDiv() ? this.gfnGetMdiRootDiv().arguments.menuParam : this.getOwnerFrame();

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e) {
        	this.gfnFormOnLoad(obj,e); //필수함수


        	if(publicArgs.formType == 'POPUP') {	//버튼정리
        		this.btnNxtrmActoPrfmnc.set_visible(false);
        		this.btnList.set_visible(false);
        	}

        	var codeArgs = [//cdId, useYn, defaultData, rds
        		{cdId:'AFFRS_SPECS_TPCD', useYn:''}, {cdId:'AFFRS_RSN_CD', useYn:''}
        		, {cdId:'FREST_GRDNN_SPECS_TPCD', useYn:''}
        		, {cdId:'SCTSL_TPCD', useYn:''}, {cdId:'FELLY_MTHD_CD', useYn:''}, {cdId:'PRDCTN_MTHD_CD', useYn:''}
        		, {cdId:'FCLT_KIND_CD', useYn:''}
        		, {cdId:'EARN_SPECS_CLSF_CD', useYn:''}
        		, {cdId:'RECOVR_SPECS_TPCD', useYn:''}
        	];

        	this.nfmCodeSet(codeArgs); //코드세팅
        	//this.fnSearch(); //조회
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
        			this.fnWplbkSearch();
        			break;
        		case "search": //조회

        			break;
        		case "searchDtl": //상세조회

        			break;

        	}
        }

        //조회
        this.fnSearch = function () {
        	this.dsSearch.setColumn(0, "wplbkNo", publicArgs.wplbkNo);
        	this.dsSearch.setColumn(0, "bizDataTypeTpcd", "03");

        	var strSvcId    = "search";
        	var strSvcUrl   = "nfm/wplbkBiz/selectWplbkBizAllTypeList.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsAffrsWPLs=affrsWPLs dsFrestGrdnnWPLs=frestGrdnnWPLs dsFrtrePrdctWPLs=frtrePrdctWPLs dsFcltWPLs=fcltWPLs dsIncmWPLs=earnWPLs dsRecovrWPLs=recovrWPLs";
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

        //경영계획부 상세조회
        this.fnWplbkSearch = function () {
        	this.dsSearch.setColumn(0, "wplbkNo", publicArgs.wplbkNo);

        	var strSvcId    = "searchDtl";
        	var strSvcUrl   = "nfm/wplbk/selectWplbk.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsWplbkVO=wplbkVO dsSbltLctn=sbltLctnList";
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

        this.fnSplitLine = function (str) {
        	var strSplit = str.split(',');
        	if(strSplit.length == 1) {
        		return strSplit[0];
        	} else {
        		str = str.replaceAll(/,/g, '\n');
        		return str;
        	}
        }
        //목록버튼
        this.btnList_onclick = function(obj,e)
        {
        	var backPage = 'business::mngmtPlan/wplbk/wplbkList.xfdl';
        	if(Object.keys(publicArgs).includes('backPage')) {
        		backPage = publicArgs['backPage'];
        	}

        	this.gfnSetUrl(backPage, publicArgs);
        };

        this.btnNxtrmActoPrfmnc_onclick = function(obj,e)
        {
        	if(this.dsWplbkVO.getRowCount() > 0) {
        		var reqParmJson = {}

        		reqParmJson["callFunc"] = "fgisNfmGisMoveIF.bizPrfmncSearch";
        		reqParmJson["callParm"] = {
        									  inten_id : this.dsWplbkVO.getColumn(0, 'upInstId')
        									, mnoff_id : this.dsWplbkVO.getColumn(0, 'instId')
        									, wplar_id : this.dsWplbkVO.getColumn(0, 'wplarId')
        									, nxtrm_no : this.dsWplbkVO.getColumn(0, 'nxtrmNo')
        									, cmblc_id : this.dsWplbkVO.getColumn(0, 'cmblcId')
        									, sblt_id : this.dsWplbkVO.getColumn(0, 'sbltId')
        									, plan_bgdt : this.dsWplbkVO.getColumn(0, 'planBgdt').substring(0,4)
        									, plan_eddt : this.dsWplbkVO.getColumn(0, 'planEddt').substring(0,4)
        									, isMove:true
        									, isOutput:true
        								};

        		if(this.dsSbltLctn.getRowCount() > 0) {
        			var pnuCd = this.dsSbltLctn.getColumn(0, 'pnuCd');
        			if(typeof pnuCd !== 'undefined') {
        				reqParmJson["callParm"]['pnu_cd'] = pnuCd;
        			}
        		}

        		_pForm.openGisPopup(reqParmJson);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnNxtrmActoPrfmnc.addEventHandler("onclick",this.btnNxtrmActoPrfmnc_onclick,this);
            this.StaticAffrs.addEventHandler("onclick",this.Static03_00_onclick,this);
            this.grdAffrs.addEventHandler("onheadclick",this.grd_onheadclick,this);
            this.grdAffrs.addEventHandler("oncellclick",this.grd_oncellclick,this);
            this.StaticFrestGrdnn.addEventHandler("onclick",this.Static03_00_onclick,this);
            this.grdFrestGrdnn.addEventHandler("onheadclick",this.grd_onheadclick,this);
            this.grdFrestGrdnn.addEventHandler("oncellclick",this.grd_oncellclick,this);
            this.StaticFrtrePrdct.addEventHandler("onclick",this.Static03_00_onclick,this);
            this.grdFrtrePrdct.addEventHandler("onheadclick",this.grd_onheadclick,this);
            this.grdFrtrePrdct.addEventHandler("oncellclick",this.grd_oncellclick,this);
            this.StaticFclt.addEventHandler("onclick",this.Static03_00_onclick,this);
            this.grdFclt.addEventHandler("onheadclick",this.grd_onheadclick,this);
            this.grdFclt.addEventHandler("oncellclick",this.grd_oncellclick,this);
            this.StaticIncm.addEventHandler("onclick",this.Static03_00_onclick,this);
            this.grdIncm.addEventHandler("onheadclick",this.grd_onheadclick,this);
            this.grdIncm.addEventHandler("oncellclick",this.grd_oncellclick,this);
            this.StaticRecovr.addEventHandler("onclick",this.Static03_00_onclick,this);
            this.grdRecovr.addEventHandler("onheadclick",this.grd_onheadclick,this);
            this.grdRecovr.addEventHandler("oncellclick",this.grd_oncellclick,this);
            this.btnList.addEventHandler("onclick",this.btnList_onclick,this);
            this.dsAffrsWPLs.addEventHandler("cancolumnchange",this.area_cancolumnchange,this);
            this.dsFrestGrdnnWPLs.addEventHandler("cancolumnchange",this.area_cancolumnchange,this);
            this.dsFrtrePrdctWPLs.addEventHandler("cancolumnchange",this.area_cancolumnchange,this);
            this.dsFcltWPLs.addEventHandler("cancolumnchange",this.area_cancolumnchange,this);
            this.dsIncmWPLs.addEventHandler("cancolumnchange",this.area_cancolumnchange,this);
            this.dsRecovrWPLs.addEventHandler("cancolumnchange",this.area_cancolumnchange,this);
            this.dsWplbkVO.addEventHandler("cancolumnchange",this.area_cancolumnchange,this);
        };
        this.loadIncludeScript("wplbkBizPrfmncView.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
