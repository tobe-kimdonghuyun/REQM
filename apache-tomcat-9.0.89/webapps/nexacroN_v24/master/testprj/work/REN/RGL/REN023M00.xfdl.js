(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("REN023M00");
            this.set_titletext("임대배정확정(정기) 목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,1100);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"currentPageNo\" type=\"STRING\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"STRING\" size=\"256\"/><Column id=\"pLoiSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"pRcptNo\" type=\"STRING\" size=\"256\"/><Column id=\"pBzentyNm\" type=\"STRING\" size=\"256\"/><Column id=\"pPstnCd\" type=\"STRING\" size=\"256\"/><Column id=\"pBldgCd\" type=\"STRING\" size=\"256\"/><Column id=\"pPrgrsSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"pHireLoiNo\" type=\"STRING\" size=\"256\"/><Column id=\"pPrcsDeptCd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"recordCountPerPage\">10</Col><Col id=\"currentPageNo\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch02", this);
            obj._setContents("<ColumnInfo><Column id=\"pHireLoiNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("<ColumnInfo><Column id=\"totalRecordCount\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"hireLoiNo\" type=\"STRING\" size=\"256\"/><Column id=\"prgrsSttsCd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"hireLoiNo\" type=\"STRING\" size=\"256\"/><Column id=\"chc\" type=\"STRING\" size=\"256\"/><Column id=\"rcptNo\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyNm\" type=\"STRING\" size=\"256\"/><Column id=\"bldgNm\" type=\"STRING\" size=\"256\"/><Column id=\"rtfeYnCd\" type=\"STRING\" size=\"256\"/><Column id=\"mncoYnCd\" type=\"STRING\" size=\"256\"/><Column id=\"utltYnCd\" type=\"STRING\" size=\"256\"/><Column id=\"sbmsnDt\" type=\"STRING\" size=\"256\"/><Column id=\"asnCfmtnDt\" type=\"STRING\" size=\"256\"/><Column id=\"prgrsSttsCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList02", this);
            obj._setContents("<ColumnInfo><Column id=\"cnt\" type=\"STRING\" size=\"256\"/><Column id=\"hireLoiNo\" type=\"STRING\" size=\"256\"/><Column id=\"rcptNo\" type=\"STRING\" size=\"256\"/><Column id=\"bldgCd\" type=\"STRING\" size=\"256\"/><Column id=\"rmnmNo\" type=\"STRING\" size=\"256\"/><Column id=\"rntar\" type=\"STRING\" size=\"256\"/><Column id=\"cfmtnRmnmNo\" type=\"STRING\" size=\"256\"/><Column id=\"cfmtnRntar\" type=\"STRING\" size=\"256\"/><Column id=\"cfmtnRentBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"cfmtnRentEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboBldgCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboPrgrsSttsCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSch","0","70",null,"153","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","1694.00","398","265","45",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("10");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staBldgCd\"/><PanelItem id=\"PanelItem03\" componentid=\"cboBldgCd\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Combo("cboBldgCd","823","20","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsCboBldgCd");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staBldgCd","0","0","90","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("9");
            obj.set_text("건물명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staRcptNo","0","0","90","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("11");
            obj.set_text("접수번호");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staBzentyNm","0","0","90","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("13");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Edit("edtBzentyNm","841","24","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("2");
            obj.set_flexgrow("0");
            obj.set_displaynulltext("업체명 입력");
            obj.set_maxlength("20");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel01","1694.00","398","265","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("14");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staBzentyNm\"/><PanelItem id=\"PanelItem02\" componentid=\"edtBzentyNm\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel00","1694.00","398","265","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("12");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staRcptNo\"/><PanelItem id=\"PanelItem00\" componentid=\"edtRcptNo\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Edit("edtRcptNo","841","24","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("접수번호 입력");
            obj.set_maxlength("20");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","100%","55",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("0");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("50");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem06\" componentid=\"Panel02\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel03\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel03","1694.00","398","265","45",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("16");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSttsCd\"/><PanelItem id=\"PanelItem03\" componentid=\"cboPrgrsSttsCd\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panClose","30","151","100%","30",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnSchClose\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Button("btnSchClose","1251","185","30","30",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_SchClose");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("8");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSch\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Button("btnSch","570","192","112","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("6");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staSttsCd","0","0","90","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("15");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Combo("cboPrgrsSttsCd","146","80","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsCboPrgrsSttsCd");
            obj.set_datacolumn("cdNm");
            obj.set_codecolumn("cdId");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","0","divSch:20",null,null,"60","25",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","0","263","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("14");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staListTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"staTotal01\"/><PanelItem id=\"PanelItem02\" componentid=\"staTnocs00\"/><PanelItem id=\"PanelItem03\" componentid=\"staTotal02\"/></Contents>");
            this.divGrd.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn",null,"0","450","34","0",null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("2");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("width");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"staTotal00\"/><PanelItem id=\"PanelItem01\" componentid=\"grdListCnt\"/><PanelItem id=\"PanelItem02\" componentid=\"btnSapSend\"/></Contents>");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staListTitle","0","0","140","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("5");
            obj.set_text("임차의향서 제출 업체");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal01","staListTitle:0","0","20","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("0");
            obj.set_text("총");
            obj.set_cssclass("sta_WF");
            obj.set_usedecorate("true");
            obj.set_textAlign("left");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal00","1165","0","54","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("목록수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTnocs00","170","0","30","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("none");
            obj.set_textAlign("center");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","staTnocs00:0","0","30","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("4");
            obj.set_text("건");
            obj.set_usedecorate("true");
            obj.set_textAlign("left");
            this.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdList","0","PanelGrdBtn:10","100.00%","300",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("6");
            obj.set_binddataset("dsList");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"120\"/><Column size=\"210\"/><Column size=\"250\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"접수번호&#13;&#10;(의향서)\"/><Cell col=\"2\" text=\"업체명\"/><Cell col=\"3\" text=\"건물명(호실번호)\"/><Cell col=\"4\" text=\"임대료\"/><Cell col=\"5\" text=\"관리비\"/><Cell col=\"6\" text=\"유틸리티\"/><Cell col=\"7\" text=\"임차의향서&#13;&#10;제출일자\"/><Cell col=\"8\" text=\"임대배정&#13;&#10;확정일자\"/><Cell col=\"9\" text=\"상태\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" text=\"bind:chc\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" textAlign=\"center\" text=\"bind:rcptNo\"/><Cell col=\"2\" suppressalign=\"middle\" textAlign=\"center\" text=\"bind:bzentyNm\"/><Cell col=\"3\" text=\"bind:bldgNm\" textAlign=\"center\"/><Cell col=\"4\" text=\"expr:rtfeYnCd == 1 ? &apos;유상&apos; : &apos;무상&apos;\" textAlign=\"center\" displaytype=\"normal\"/><Cell col=\"5\" text=\"expr:mncoYnCd == 1 ? &apos;유상&apos; : &apos;무상&apos;\" textAlign=\"center\" displaytype=\"normal\"/><Cell col=\"6\" text=\"expr:utltYnCd == 1 ? &apos;유상&apos; : &apos;무상&apos;\" textAlign=\"center\" displaytype=\"normal\"/><Cell col=\"7\" text=\"bind:sbmsnDt\" textAlign=\"center\" displaytype=\"normal\" maskeditformat=\"####-##-##\" maskeditmaskchar=\" \" maskedittype=\"string\" edittype=\"none\"/><Cell col=\"8\" text=\"bind:asnCfmtnDt\" textAlign=\"center\" displaytype=\"normal\" maskeditformat=\"####-##-##\" maskeditmaskchar=\" \" maskedittype=\"string\"/><Cell col=\"9\" textAlign=\"center\" cssclass=\"CellEnd\" displaytype=\"combotext\" text=\"bind:prgrsSttsCd\" combodataset=\"dsCboPrgrsSttsCd\" combocodecol=\"cdId\" combodatacol=\"cdNm\"/></Band></Format></Formats>");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal03","0","366","140","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("9");
            obj.set_text("업체별 임차요청사항");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal04","staTotal03:0","364","20","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("11");
            obj.set_text("총");
            obj.set_cssclass("sta_WF");
            obj.set_usedecorate("true");
            obj.set_textAlign("left");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTnocs01","170","364","30","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("12");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("none");
            obj.set_textAlign("center");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal06","staTnocs01:0","364","30","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("13");
            obj.set_text("건");
            obj.set_usedecorate("true");
            obj.set_textAlign("left");
            this.divGrd.addChild(obj.name, obj);

            obj = new Button("btnCfmtn","0","0","76","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("7");
            obj.set_text("확정");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_fittocontents("width");
            this.divGrd.addChild(obj.name, obj);

            obj = new Button("btnCfmtnCancel","84","0","76","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("8");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_SmallGray");
            obj.set_fittocontents("width");
            this.divGrd.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","366","263","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("15");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTotal03\"/><PanelItem id=\"PanelItem01\" componentid=\"staTotal04\"/><PanelItem id=\"PanelItem02\" componentid=\"staTnocs01\"/><PanelItem id=\"PanelItem03\" componentid=\"staTotal06\"/></Contents>");
            this.divGrd.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn00",null,"371","450","34","0",null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("16");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("width");
            obj.set_horizontalgap("8");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnCfmtn\"/><PanelItem id=\"PanelItem00\" componentid=\"btnCfmtnCancel\"/></Contents>");
            this.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdList02","0","410","100.00%","300",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("10");
            obj.set_binddataset("dsList02");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"160\"/><Column size=\"160\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"접수번호&#13;&#10;(의향서)\"/><Cell col=\"1\" text=\"업체명\"/><Cell col=\"2\" text=\"건물명\"/><Cell col=\"3\" text=\"호실번호\"/><Cell col=\"4\" text=\"면적(m2)\"/><Cell col=\"5\" text=\"임대공간번호\" cssclass=\"CellHead_E\"/><Cell col=\"6\" text=\"임대면적(m2)\" cssclass=\"CellHead_E\"/><Cell col=\"7\" text=\"계약시작일자\" cssclass=\"CellHead_E\"/><Cell col=\"8\" text=\"계약종료일자\" cssclass=\"CellHead_E\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" text=\"bind:rcptNo\"/><Cell col=\"1\" suppressalign=\"middle\" textAlign=\"center\" text=\"bind:bzentyNm\" cssclass=\"CellLink\"/><Cell col=\"2\" text=\"bind:bldgCd\" textAlign=\"center\" combodataset=\"dsCboBldgCd\" combocodecol=\"cdId\" combodatacol=\"cdNm\" displaytype=\"combotext\"/><Cell col=\"3\" text=\"bind:rmnmNo\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:rntar\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:cfmtnRmnmNo\" textAlign=\"center\" edittype=\"text\"/><Cell col=\"6\" text=\"bind:cfmtnRntar\" edittype=\"normal\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:cfmtnRentBgngYmd\" textAlign=\"center\" maskeditformat=\"####-##-##\" displaytype=\"calendarcontrol\" maskedittype=\"string\" maskeditmaskchar=\" \" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"8\" text=\"bind:cfmtnRentEndYmd\" textAlign=\"center\" maskeditformat=\"####-##-##\" displaytype=\"calendarcontrol\" maskedittype=\"string\" maskeditmaskchar=\" \" edittype=\"date\" cssclass=\"cellEnd\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.divGrd.addChild(obj.name, obj);

            obj = new Combo("grdListCnt","315","0","80","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("17");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divGrd_form_grdListCnt_innerdataset = new nexacro.NormalDataset("divGrd_form_grdListCnt_innerdataset", obj);
            divGrd_form_grdListCnt_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row></Rows>");
            obj.set_innerdataset(divGrd_form_grdListCnt_innerdataset);
            obj.set_text("10");
            obj.set_value("10");
            obj.set_index("0");
            this.divGrd.addChild(obj.name, obj);

            obj = new Button("btnSapSend","0","0","89","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("18");
            obj.set_text("SAP전송");
            obj.set_cssclass("btn_WF_SmallGray");
            obj.set_fittocontents("width");
            this.divGrd.addChild(obj.name, obj);

            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSch.form
            obj = new Layout("default","",0,0,this.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel02.set_taborder("10");
                p.Panel02.set_type("horizontal");
                p.Panel02.set_horizontalgap("10");
                p.Panel02.set_fittocontents("height");
                p.Panel02.set_flexgrow("1");
                p.Panel02.set_minwidth("");
                p.Panel02.move("1694.00","398","265","45",null,null);

                p.cboBldgCd.set_taborder("3");
                p.cboBldgCd.set_innerdataset("dsCboBldgCd");
                p.cboBldgCd.set_codecolumn("cdId");
                p.cboBldgCd.set_datacolumn("cdNm");
                p.cboBldgCd.set_text("전체");
                p.cboBldgCd.set_value("");
                p.cboBldgCd.set_index("-1");
                p.cboBldgCd.move("823","20","100%","40",null,null);

                p.staBldgCd.set_taborder("9");
                p.staBldgCd.set_text("건물명");
                p.staBldgCd.set_cssclass("sta_WF_SchLabel");
                p.staBldgCd.set_flexshrink("0");
                p.staBldgCd.set_maxwidth("");
                p.staBldgCd.move("0","0","90","40",null,null);

                p.staRcptNo.set_taborder("11");
                p.staRcptNo.set_text("접수번호");
                p.staRcptNo.set_cssclass("sta_WF_SchLabel");
                p.staRcptNo.set_flexshrink("0");
                p.staRcptNo.set_maxwidth("");
                p.staRcptNo.move("0","0","90","40",null,null);

                p.staBzentyNm.set_taborder("13");
                p.staBzentyNm.set_text("업체명");
                p.staBzentyNm.set_cssclass("sta_WF_SchLabel");
                p.staBzentyNm.set_flexshrink("0");
                p.staBzentyNm.set_maxwidth("");
                p.staBzentyNm.move("0","0","90","40",null,null);

                p.edtBzentyNm.set_taborder("2");
                p.edtBzentyNm.set_flexgrow("0");
                p.edtBzentyNm.set_displaynulltext("업체명 입력");
                p.edtBzentyNm.set_maxlength("20");
                p.edtBzentyNm.move("841","24","100%","40",null,null);

                p.Panel01.set_taborder("14");
                p.Panel01.set_type("horizontal");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_flexgrow("1");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_maxheight("");
                p.Panel01.set_minwidth("");
                p.Panel01.move("1694.00","398","265","40",null,null);

                p.Panel00.set_taborder("12");
                p.Panel00.set_type("horizontal");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_flexgrow("1");
                p.Panel00.set_minwidth("");
                p.Panel00.move("1694.00","398","265","40",null,null);

                p.edtRcptNo.set_taborder("1");
                p.edtRcptNo.set_displaynulltext("접수번호 입력");
                p.edtRcptNo.set_maxlength("20");
                p.edtRcptNo.move("841","24","100%","40",null,null);

                p.panLabel.set_taborder("0");
                p.panLabel.set_verticalgap("8");
                p.panLabel.set_flexwrap("wrap");
                p.panLabel.set_spacing("0px 0px 10px 0px");
                p.panLabel.set_type("horizontal");
                p.panLabel.set_flexcrossaxisalign("start");
                p.panLabel.set_horizontalgap("50");
                p.panLabel.set_fittocontents("height");
                p.panLabel.set_maxheight("");
                p.panLabel.move("20","14","100%","55",null,null);

                p.Panel03.set_taborder("16");
                p.Panel03.set_type("horizontal");
                p.Panel03.set_horizontalgap("10");
                p.Panel03.set_flexgrow("1");
                p.Panel03.set_minwidth("");
                p.Panel03.move("1694.00","398","265","45",null,null);

                p.panClose.set_taborder("7");
                p.panClose.set_type("vertical");
                p.panClose.set_cssclass("pal_WF_SchLine");
                p.panClose.set_flexcrossaxisalign("end");
                p.panClose.move("30","151","100%","30",null,null);

                p.btnSchClose.set_taborder("5");
                p.btnSchClose.set_cssclass("btn_WF_SchClose");
                p.btnSchClose.move("1251","185","30","30",null,null);

                p.panSchBtn.set_taborder("8");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100%","40",null,null);

                p.btnSch.set_taborder("6");
                p.btnSch.set_text("조회하기");
                p.btnSch.set_cssclass("btn_WF_Search");
                p.btnSch.move("570","192","112","40",null,null);

                p.staSttsCd.set_taborder("15");
                p.staSttsCd.set_text("상태");
                p.staSttsCd.set_cssclass("sta_WF_SchLabel");
                p.staSttsCd.set_flexshrink("0");
                p.staSttsCd.set_maxwidth("");
                p.staSttsCd.move("0","0","90","40",null,null);

                p.cboPrgrsSttsCd.set_taborder("4");
                p.cboPrgrsSttsCd.set_innerdataset("dsCboPrgrsSttsCd");
                p.cboPrgrsSttsCd.set_datacolumn("cdNm");
                p.cboPrgrsSttsCd.set_codecolumn("cdId");
                p.cboPrgrsSttsCd.set_text("전체");
                p.cboPrgrsSttsCd.set_value("");
                p.cboPrgrsSttsCd.set_index("-1");
                p.cboPrgrsSttsCd.move("146","80","100%","40",null,null);
            	}
            );
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            this.divSch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSch.form
            obj = new Layout("Layout0","",0,0,this.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panClose.move("30","151","100%","30",null,null);

                p.panLabel.set_horizontalgap("50");
                p.panLabel.set_verticalgap("8");
                p.panLabel.move("132","47","100%","305",null,null);

                p.pan03.set_type("horizontal");
                p.pan03.set_horizontalgap("8");
                p.pan03.move("1694.00","398","100%","40",null,null);

                p.pan02.set_horizontalgap("8");
                p.pan02.move("1694.00","398","100%","45",null,null);

                p.pan01.set_horizontalgap("8");
                p.pan01.move("1694.00","398","100%","40",null,null);

                p.pan03.set_type("horizontal");
                p.pan03.set_fittocontents("height");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_horizontalgap("8");
                p.pan03.set_flexgrow("1");
                p.pan03.move("1694.00","398","100%","40",null,null);

                p.Edit00.move("890","24","65%","40",null,null);

                p.Edit01.move("163","80","65%","40",null,null);

                p.pan04.move("1694.00","398","100%","45",null,null);

                p.cmbList.move("130","14","120","40",null,null);

                p.Edit03.move("977","85","65%","40",null,null);

                p.PanelCal.move("285","24","100%","40",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("14px 16px 12px 16px");
            obj.set_flexwrap("wrap");
            this.divSch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSch.form
            obj = new Layout("mobile","",0,0,this.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            this.divSch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divGrd.form
            obj = new Layout("default","",0,0,this.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_taborder("14");
                p.Panel00.move("0","0","263","34",null,null);

                p.PanelGrdBtn.set_taborder("2");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_fittocontents("width");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.move(null,"0","450","34","0",null);

                p.staListTitle.set_taborder("5");
                p.staListTitle.set_text("임차의향서 제출 업체");
                p.staListTitle.set_cssclass("sta_WF_SchLabel");
                p.staListTitle.set_usedecorate("true");
                p.staListTitle.move("0","0","140","34",null,null);

                p.staTotal01.set_taborder("0");
                p.staTotal01.set_text("총");
                p.staTotal01.set_cssclass("sta_WF");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.set_textAlign("left");
                p.staTotal01.move("staListTitle:0","0","20","34",null,null);

                p.staTotal00.set_taborder("1");
                p.staTotal00.set_text("목록수");
                p.staTotal00.set_cssclass("sta_WF_SchLabel");
                p.staTotal00.set_fittocontents("width");
                p.staTotal00.move("1165","0","54","34",null,null);

                p.staTnocs00.set_taborder("3");
                p.staTnocs00.set_text("0");
                p.staTnocs00.set_cssclass("sta_WF_Total");
                p.staTnocs00.set_usedecorate("true");
                p.staTnocs00.set_fittocontents("none");
                p.staTnocs00.set_textAlign("center");
                p.staTnocs00.move("170","0","30","34",null,null);

                p.staTotal02.set_taborder("4");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.set_textAlign("left");
                p.staTotal02.move("staTnocs00:0","0","30","34",null,null);

                p.grdList.set_taborder("6");
                p.grdList.set_binddataset("dsList");
                p.grdList.set_autofittype("none");
                p.grdList.move("0","PanelGrdBtn:10","100.00%","300",null,null);

                p.staTotal03.set_taborder("9");
                p.staTotal03.set_text("업체별 임차요청사항");
                p.staTotal03.set_cssclass("sta_WF_SchLabel");
                p.staTotal03.set_usedecorate("true");
                p.staTotal03.move("0","366","140","34",null,null);

                p.staTotal04.set_taborder("11");
                p.staTotal04.set_text("총");
                p.staTotal04.set_cssclass("sta_WF");
                p.staTotal04.set_usedecorate("true");
                p.staTotal04.set_textAlign("left");
                p.staTotal04.move("staTotal03:0","364","20","34",null,null);

                p.staTnocs01.set_taborder("12");
                p.staTnocs01.set_text("0");
                p.staTnocs01.set_cssclass("sta_WF_Total");
                p.staTnocs01.set_usedecorate("true");
                p.staTnocs01.set_fittocontents("none");
                p.staTnocs01.set_textAlign("center");
                p.staTnocs01.move("170","364","30","34",null,null);

                p.staTotal06.set_taborder("13");
                p.staTotal06.set_text("건");
                p.staTotal06.set_usedecorate("true");
                p.staTotal06.set_textAlign("left");
                p.staTotal06.move("staTnocs01:0","364","30","34",null,null);

                p.btnCfmtn.set_taborder("7");
                p.btnCfmtn.set_text("확정");
                p.btnCfmtn.set_cssclass("btn_WF_SmallBlack");
                p.btnCfmtn.set_fittocontents("width");
                p.btnCfmtn.move("0","0","76","34",null,null);

                p.btnCfmtnCancel.set_taborder("8");
                p.btnCfmtnCancel.set_text("초기화");
                p.btnCfmtnCancel.set_cssclass("btn_WF_SmallGray");
                p.btnCfmtnCancel.set_fittocontents("width");
                p.btnCfmtnCancel.move("84","0","76","34",null,null);

                p.Panel01.set_taborder("15");
                p.Panel01.move("0","366","263","34",null,null);

                p.PanelGrdBtn00.set_taborder("16");
                p.PanelGrdBtn00.set_flexcrossaxisalign("start");
                p.PanelGrdBtn00.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn00.set_flexmainaxisalign("end");
                p.PanelGrdBtn00.set_fittocontents("width");
                p.PanelGrdBtn00.set_horizontalgap("8");
                p.PanelGrdBtn00.set_verticalgap("0");
                p.PanelGrdBtn00.move(null,"371","450","34","0",null);

                p.grdList02.set_taborder("10");
                p.grdList02.set_binddataset("dsList02");
                p.grdList02.set_autofittype("none");
                p.grdList02.set_autoenter("select");
                p.grdList02.move("0","410","100.00%","300",null,null);

                p.grdListCnt.set_taborder("17");
                p.grdListCnt.set_innerdataset(divGrd_form_grdListCnt_innerdataset);
                p.grdListCnt.set_codecolumn("codecolumn");
                p.grdListCnt.set_datacolumn("datacolumn");
                p.grdListCnt.set_text("10");
                p.grdListCnt.set_value("10");
                p.grdListCnt.set_index("0");
                p.grdListCnt.move("315","0","80","34",null,null);

                p.btnSapSend.set_taborder("18");
                p.btnSapSend.set_text("SAP전송");
                p.btnSapSend.set_cssclass("btn_WF_SmallGray");
                p.btnSapSend.set_fittocontents("width");
                p.btnSapSend.move("0","0","89","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdList.set_autofittype("none");

                p.btnGrdRegi.set_visible("false");

                p.btnGrdDel.set_visible("false");
            	}
            );
            obj.set_verticalgap("20");
            this.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGrd.form
            obj = new Layout("mobile","",0,0,this.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.PanelGrdBtn.move("-10","0","450","34",null,null);

                p.PanelGrdBtn00.move("-10","371","450","34",null,null);

                p.Panel00.move("0","0","263","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGrd.form
            obj = new Layout("mobile","",0,0,this.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            this.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,1100,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("임대배정확정(정기) 목록");

                p.divSch.set_taborder("0");
                p.divSch.set_text("Div00");
                p.divSch.set_cssclass("div_WF_SchBg");
                p.divSch.set_formscrollbartype("none none");
                p.divSch.set_formscrolltype("none");
                p.divSch.set_fittocontents("height");
                p.divSch.move("0","70",null,"153","60",null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","divSch:20",null,null,"60","25");

                p.divTitle.set_taborder("2");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divSch.move("20","70",null,"153","20",null);

                p.divGrd.set_fittocontents("height");
                p.divGrd.move("20","divSch:20",null,null,"20","25");

                p.divTitle.move("0","0",null,"50","0",null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSch.form.cboBldgCd","value","dsSearch","pBldgCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divGrd.form.staTnocs00","text","dsPage","totalRecordCount");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Edit01_00","value","dsSearch","pRcptNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Edit01_00_00","value","dsSearch","pbzentyNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","cboPstnCd","value","dsSearch","pPstnCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSch.form.cboPrgrsSttsCd","value","dsSearch","pPrgrsSttsCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSch.form.edtRcptNo","value","dsSearch","pRcptNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSch.form.edtBzentyNm","value","dsSearch","pBzentyNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","cboPstnCd00","value","dsSearch","pSptIdntyCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divGrd.form.staTnocs01","text","dsList02","cnt");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.addIncludeScript("REN023M00.xfdl","xjs::TaskCom.xjs");
        this.registerScript("REN023M00.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	REN023M00.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/11/13
        *  @Desction    임대배정확정(정기) 목록
        ******************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/11/13			pys						최초생성
        *******************************************************************************
        */

        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;  // 업무공통
        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        const gdsUser = nexacro.getApplication().gdsUser;

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	this.fnInit();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        // 검색 조회
        this.cfnSearch = function(page)
        {
        	//그리드 한 페이지에 게시되는 데이터건수
        	this.dsSearch.setColumn(0, "currentPageNo", page);

        	this.selectHireLoiSbmsnBzentyList();
        };

        this.cfnClose = function (){};

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        // 임차의향서 제출
        this.selectHireLoiSbmsnBzentyList = function() {
        	this.dsSearch.setColumn(0, "pLoiSeCd", "R"); // 의향서구분코드

        	var strSvcId    = "selectHireLoiSbmsnBzentyList";
        	var strSvcUrl   = "ren/rgl/selectHireLoiSbmsnBzentyList.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsList=dsList dsPage=dsPage";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 업체별 임차요청사항
        this.selectBzentyHireDmndMttrList = function() {
        	var strSvcId    = "selectBzentyHireDmndMttrList";
        	var strSvcUrl   = "ren/rgl/selectBzentyHireDmndMttrList.do";
        	var inData      = "dsSearch=dsSearch02";
        	var outData     = "dsList02=dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // sap 전송
        this.updateRentAsnSapTrsm = function() {
        	var strSvcId    = "updateRentAsnSapTrsm";
        	var strSvcUrl   = "ren/rgl/updateRentAsnSapTrsm.do";
        	var inData      = "dsList=dsList:U";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= false;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 확정
        this.updateRentAsnCfmtnRmnmNo = function() {
        	var strSvcId    = "updateRentAsnCfmtnRmnmNo";
        	var strSvcUrl   = "ren/rgl/updateRentAsnCfmtnRmnmNo.do";
        	var inData      = "dsMaster=dsMaster:A dsSpceList=dsList02:U";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= false;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        // 트랜젝션 콜백 함수
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "_cfnComCdLoad_":
        			var deptId = gdsUser.getColumn(0, "deptId");
        			var deptCd = "";

        			if (deptId == "41000086") { 	   // 운영기획팀
        				deptCd = 1;
        			} else if (deptId == "41000094") { // 교통운영팀
        				deptCd = 2;
        			} else if (deptId == "41000095") { // 물류운영팀
        				deptCd = 3;
        			} else if (deptId == "41000040") { // 재무팀
        				deptCd = 4;
        			}

        			this.dsSearch.setColumn(0, "pPrcsDeptCd", deptCd);

        			if (deptCd > 0) {
        				this.dsCboBldgCd.filter("grp2CdId == '" + deptCd + "' || cdNm == '전체' ");
        			}

        			this.dsCboPrgrsSttsCd.filter("cdId == '32' || cdId == '34' || cdId == '35' || cdNm == '전체' ");

        			this.divSch.form.cboBldgCd.set_index(0);
        			this.divSch.form.cboPrgrsSttsCd.set_index(0);

        			// 페이징을 위하여 검색 함수를 실행
        			this.cfnSearch(1);
        			break;

        		// 임차의향서 제출 업체 조회
        		case "selectHireLoiSbmsnBzentyList":
        			this.divGrd.form.btnCfmtn.enable = false;			// 확정
        			this.divGrd.form.btnCfmtnCancel.enable = false;		// 취소

        			if (!this.gfnIsNull(this.dsList)){
        				this.dsSearch02.setColumn(0,"pHireLoiNo", this.dsList.getColumn(0, "hireLoiNo"));
        				this.dsList02.clear();

        				this.selectBzentyHireDmndMttrList();
        			} else {
        				this.dsList02.clear();
        				this.divGrd.form.staTnocs01.text = "0";
        			}

        			break;

        		// 업체별 임차요청사항 조회
        		case "selectBzentyHireDmndMttrList":
        			this.divGrd.form.btnCfmtn.enable = false;			// 확정
        			this.divGrd.form.btnCfmtnCancel.enable = false;		// 취소

        			// 30.작성중 31.제출 32.접수 33.반려 34.배정확정 35.SAP전송
        			if (this.dsList.getColumn(this.dsList.rowposition, "prgrsSttsCd") == "32") {
        				this.divGrd.form.btnCfmtn.enable = true;		// 확정
        			} else if (this.dsList.getColumn(this.dsList.rowposition, "prgrsSttsCd") == "34") {
        				this.divGrd.form.btnCfmtnCancel.enable = true;	// 취소
        			}

        			break;

        		case "updateRentAsnSapTrsm":
        		case "updateRentAsnCfmtnRmnmNo": // 확정 또는 확정취소
        			this.gfnAlertMsg("msg", "MSG_007", [ this.objApp.getVariable("gvRetMsg") ]);
        			this.cfnSearch(1);
        			break;
        	}
        };

        // 얼럿창 콜백 함수
        this.msgCallback = function(sPopupId, sRtn) {
        	var oRtn = JSON.parse(sRtn);

        	if (oRtn.result == "Y") {
        		if (sPopupId == "sapTrsm_confirm") {
        			for (var i = 0; i < this.dsList.rowcount; i++) {
        				if (this.dsList.getColumn(i, "chc") == "1") {
        					// 34.확정 35.Sap전송
        					if (this.dsList.getColumn(i, "prgrsSttsCd") == "34" ||
        						this.dsList.getColumn(i, "prgrsSttsCd") == "35") {
        						this.dsList.setColumn(i, "prgrsSttsCd", "35");
        					} else {
        						// 배정확정 또는 SAP전송 자료만 처리할 수 있습니다.
        						this.gfnAlertMsg("msg", "REN_010");
        						return;
        					}
        				}
        			}

        			this.updateRentAsnSapTrsm();
        		} else {
        			this.dsMaster.setColumn(0,"hireLoiNo", this.dsList.getColumn(this.dsList.rowposition,"hireLoiNo"));	// 임차의향서번호

        			if (sPopupId == "cfmtn_confirm") {
        				this.dsMaster.setColumn(0,"prgrsSttsCd", "34"); // 32.접수 34.확정

        				for (var i = 0; i < this.dsList02.rowcount; i++) {
        					if (this.dsList02.getColumn(i, "cfmtnRentBgngYmd") > this.dsList02.getColumn(i, "cfmtnRentEndYmd")) {
        						this.gfnAlertMsg("msg", "MSG_012", ["임대"]); // {0} 시작일자가 종료일자보다 큽니다.
        						return;
        					}
        				}

        			} else if (sPopupId == "cfmtnCancel_confirm") {
        				this.dsMaster.setColumn(0,"prgrsSttsCd", "32"); // 32.접수 34.확정

        				for (var i = 0; i < this.dsList02.rowcount; i++) {
        					this.dsList02.setColumn(i, "cfmtnRmnmNo"	 , "");	// 확정호실번호
        					this.dsList02.setColumn(i, "cfmtnRntar"	 	 , "");	// 확정임대면적
        					this.dsList02.setColumn(i, "cfmtnRentBgngYmd", "");	// 확정임대시작일자
        					this.dsList02.setColumn(i, "cfmtnRentEndYmd" , "");	// 확정임대종료일자
        				}
        			}

        			this.updateRentAsnCfmtnRmnmNo();
        		}
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	this.cfnComCdLoad({dsCboPrgrsSttsCd:"HIRE_ASN_STTS_CD:A"});
        	this.cfnEtcCdLoad({dsCboBldgCd:"{id:'selectTaskComListCd', cnd:{cdTyId:'RENT_ASN_BLDG'}, opt:'A:cdNm'}"});
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // 조회
        this.divSch_btnSch_onclick = function(obj,e)
        {
        	this.cfnSearch(1);
        };

        // 목록수
        this.divGrd_grdListCnt_onitemchanged = function(obj,e)
        {
        	this.cfnSearch(1);
        };

        // Enter 입력
        this.form_onkeyup = function(obj,e)
        {
        	var focus = this.getFocus();

        	if (e.keycode == 13 && focus.taborder < 7 ) {
        		this.divSch.form.btnSch.click();
        	}
        };

        // 목록 그리드 더블 클릭시 세부목록 조회
        this.divGrd_grdList_oncelldblclick = function(obj,e)
        {
        	if (e.cell != "0") {
        		this.dsSearch02.setColumn(0,"pHireLoiNo", this.dsList.getColumn(e.row, "hireLoiNo"));
        		this.dsList02.clear();

        		this.selectBzentyHireDmndMttrList();
        	}
        };

        // 확정
        this.divGrd_btnCfmtn_onclick = function(obj,e)
        {
        	if (this.gfnDsIsUpdated(this.dsList02) == true) {
        		if (this.cfnGrdIsValidated(this.divGrd.form.grdList02) == false) {
        			return;
        		}
        	 	this.gfnConfirmMsg("cfmtn_confirm", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"],"",["확정"]);
        	} else {
        		this.gfnAlertMsg("msg", "MSG_004");
        		return;
        	}
        };

        // 확정취소
        this.divGrd_btnCfmtnCancel_onclick = function(obj,e)
        {
        	 if (this.gfnDsIsUpdated(this.dsList02) == true) {
        		// 수정된 내용이 있습니다. 그래도 확정취소 하시겠습니까?
        	 	this.gfnConfirmMsg("cfmtnCancel_confirm", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"],"",["수정된 내용이 있습니다. \n그래도 확정취소"]);
        	} else {
        		// 확정취소 하시겠습니까?
        	 	this.gfnConfirmMsg("cfmtnCancel_confirm", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"],"",["확정취소"]);
        	}
        };

        // 상세페이지
        this.divGrd_grdList02_oncelldblclick = function(obj,e)
        {
        	if (e.cell < 5) {
        		var hireLoiNo = this.dsList02.getColumn(e.row, "hireLoiNo");
        		var polSpceId = this.dsList02.getColumn(e.row, "polSpceId");

        		if (this.objApp.screenid == "Desktop_screen") {
        			/*****  MDI 에 추가하는 페이지 오픈을 위한 코드 *****/
        			var param = {
        				"status" : "detail"
        				,"hireLoiNo" : hireLoiNo
        				,"polSpceId" : polSpceId
        			};

        			var sMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        			var sMenuUrl = 'work::REN/RGL/REN023M01.xfdl';
        			var actNm = '상세';

        			this.gfnPageOpen(sMenuId, sMenuUrl, actNm, param);
        			/*****  MDI 에 추가하는 페이지 오픈을 위한 코드 *****/
        		} else {
        				var sTitle = "상세";
        				var objArg   = {
        					"status" : "detail"
        					,"hireLoiNo" : hireLoiNo
        					,"polSpceId" : polSpceId
        				};

        				var objOption = {
        					popuptype: "modal"	//modal,modaless
        					, autosize: true
        					, title: sTitle
        					, resize: true
        					, titlebar: true
        				};
        				var sPopupCallBack = "fnPopupCallback";

        				this.gfnOpenPopup("REN023M01", "work::REN/RGL/REN023M01.xfdl", objArg, sPopupCallBack, objOption);
        		}
        	}
        };

        // SAP전송
        this.divGrd_btnSapSend_onclick = function(obj,e)
        {
        	 if (this.gfnDsIsUpdated(this.dsList) == true) {
        		// SAP전송 하시겠습니까?
        	 	this.gfnConfirmMsg("sapTrsm_confirm", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"],"",["SAP전송"]);
        	} else {
        		this.gfnAlertMsg("msg", "MSG_004");
         		return;
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onkeyup",this.form_onkeyup,this);
            this.divSch.form.btnSch.addEventHandler("onclick",this.divSch_btnSch_onclick,this);
            this.divSch.form.staSttsCd.addEventHandler("onclick",this.divForm_Div00_sta00_00_01_01_onclick,this);
            this.divGrd.form.grdList.addEventHandler("oncelldblclick",this.divGrd_grdList_oncelldblclick,this);
            this.divGrd.form.btnCfmtn.addEventHandler("onclick",this.divGrd_btnCfmtn_onclick,this);
            this.divGrd.form.btnCfmtnCancel.addEventHandler("onclick",this.divGrd_btnCfmtnCancel_onclick,this);
            this.divGrd.form.grdList02.addEventHandler("oncelldblclick",this.divGrd_grdList02_oncelldblclick,this);
            this.divGrd.form.grdListCnt.addEventHandler("onitemchanged",this.divGrd_grdListCnt_onitemchanged,this);
            this.divGrd.form.btnSapSend.addEventHandler("onclick",this.divGrd_btnSapSend_onclick,this);
        };
        this.loadIncludeScript("REN023M00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
