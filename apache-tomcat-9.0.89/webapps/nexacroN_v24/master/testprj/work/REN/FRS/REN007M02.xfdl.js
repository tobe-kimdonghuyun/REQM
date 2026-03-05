(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("REN007M02");
            this.set_titletext("임차확정등록 목록(처리자)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,1200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"currentPageNo\" type=\"STRING\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"STRING\" size=\"256\"/><Column id=\"pRcptNo\" type=\"STRING\" size=\"256\"/><Column id=\"pBzentyNm\" type=\"STRING\" size=\"256\"/><Column id=\"pBzentyNm2\" type=\"STRING\" size=\"256\"/><Column id=\"pBldgCd\" type=\"STRING\" size=\"256\"/><Column id=\"pHireYnCd\" type=\"STRING\" size=\"256\"/><Column id=\"pBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"pEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"pBzentyNm2\" type=\"STRING\" size=\"256\"/><Column id=\"pPrcsDeptCd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"recordCountPerPage\">10</Col><Col id=\"currentPageNo\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHireAskBzentyList", this);
            obj._setContents("<ColumnInfo><Column id=\"hireLohNo\" type=\"STRING\" size=\"256\"/><Column id=\"rcptNo\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyClsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"pstnCd\" type=\"STRING\" size=\"256\"/><Column id=\"bldgCd\" type=\"STRING\" size=\"256\"/><Column id=\"rntar\" type=\"STRING\" size=\"256\"/><Column id=\"dtlUsgCd\" type=\"STRING\" size=\"256\"/><Column id=\"hireYnRegDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHireCfmtnRegList", this);
            obj._setContents("<ColumnInfo><Column id=\"cnt\" type=\"STRING\" size=\"256\"/><Column id=\"hireLohNo\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstnCd\" type=\"STRING\" size=\"256\"/><Column id=\"hireWtngNtfctnDt\" type=\"STRING\" size=\"256\"/><Column id=\"polSpceId\" type=\"STRING\" size=\"256\"/><Column id=\"bldgCd\" type=\"STRING\" size=\"256\"/><Column id=\"rmnmNo\" type=\"STRING\" size=\"256\"/><Column id=\"rntar\" type=\"STRING\" size=\"256\"/><Column id=\"hireYnCd\" type=\"STRING\" size=\"256\"/><Column id=\"hireRfsRsn\" type=\"STRING\" size=\"256\"/><Column id=\"ntfctnYn\" type=\"STRING\" size=\"256\"/><Column id=\"hireYnRgstt\" type=\"STRING\" size=\"256\"/><Column id=\"hireYnRegDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("<ColumnInfo><Column id=\"totalRecordCount\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboPstnCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboBldgCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboDtlUsgCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboBzentyClsfCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divSch","0","divTitle:20",null,"210","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel01","0","0","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("18");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel01","582","46","255","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("19");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtHirerNm\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Edit("edtHirerNm","692","46","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("2");
            obj.set_flexgrow("1");
            obj.set_displaynulltext("검색 단어 입력");
            obj.set_maxlength("20");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","100%","102",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("0");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("50");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel03\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel04\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Combo("cboHireYnCd","140","27","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSch_form_cboHireYnCd_innerdataset = new nexacro.NormalDataset("divSch_form_cboHireYnCd_innerdataset", obj);
            divSch_form_cboHireYnCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">미등록</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">임차확정</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">임차거부</Col></Row><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row></Rows>");
            obj.set_innerdataset(divSch_form_cboHireYnCd_innerdataset);
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03","69","25","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("12");
            obj.set_text("임차여부");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel03","20.00","14","255","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("9");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexwrap("nowrap");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03\"/><PanelItem id=\"PanelItem01\" componentid=\"cboHireYnCd\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel02","1694.00","398","255","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("6");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02\"/><PanelItem id=\"PanelItem02\" componentid=\"cboBldgCd\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel02","0","0","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("5");
            obj.set_text("건물명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Combo("cboBldgCd","851","24","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsCboBldgCd");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel04","0","0","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("10");
            obj.set_text("등록일자");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel04","1694.00","398","560","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("11");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("2");
            obj.set_fittocontents("height");
            obj.set_flexwrap("nowrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel04\"/><PanelItem id=\"PanelItem02\" componentid=\"divCal\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Div("divCal","20.00","14","320","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("13");
            obj.set_text("Div00");
            obj.set_flexgrow("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divSch.addChild(obj.name, obj);

            obj = new Calendar("calBgngYmd","180.00","0","145","40",null,null,null,null,null,null,this.divSch.form.divCal.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Static("staDash","160.00","0","10","40",null,null,null,null,null,null,this.divSch.form.divCal.form);
            obj.set_taborder("0");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_Dash");
            this.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Calendar("calEndYmd","0","0","145","40",null,null,null,null,null,null,this.divSch.form.divCal.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Button("btnSchClose","1251","185","30","30",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_SchClose");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panClose","30","151","100%","30",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("14");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnSchClose\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Button("btnSch","570","192","112","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("8");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("15");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSch\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel00","0","0","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("16");
            obj.set_text("접수번호");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Edit("edtRcptNo","841","24","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("1");
            obj.set_flexgrow("1");
            obj.set_displaynulltext("접수번호 입력");
            obj.set_maxlength("20");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel00","1694.00","398","255","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("17");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem00\" componentid=\"edtRcptNo\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panGrd","0","divSch:30",null,"880","60",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divGrd00\"/><PanelItem id=\"PanelItem01\" componentid=\"divGrd01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("divGrd01","0","277.397","100%","350",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("PanelTtlCnt01","0","0","300","34",null,null,null,null,null,null,this.divGrd01.form);
            obj.set_taborder("0");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staListTitle01\"/><PanelItem id=\"PanelItem00\" componentid=\"staTotal03\"/><PanelItem id=\"PanelItem02\" componentid=\"staTnocs01\"/><PanelItem id=\"PanelItem03\" componentid=\"staTotal04\"/></Contents>");
            this.divGrd01.addChild(obj.name, obj);

            obj = new Static("staTotal04","190","0","30","34",null,null,null,null,null,null,this.divGrd01.form);
            obj.set_taborder("3");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divGrd01.addChild(obj.name, obj);

            obj = new Static("staTnocs01","147","0","30","34",null,null,null,null,null,null,this.divGrd01.form);
            obj.set_taborder("2");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("none");
            obj.set_textAlign("center");
            this.divGrd01.addChild(obj.name, obj);

            obj = new Static("staTotal03","120","0","20","34",null,null,null,null,null,null,this.divGrd01.form);
            obj.set_taborder("1");
            obj.set_text("총");
            obj.set_usedecorate("true");
            this.divGrd01.addChild(obj.name, obj);

            obj = new Static("staListTitle01","0","0","100","34",null,null,null,null,null,null,this.divGrd01.form);
            obj.set_taborder("4");
            obj.set_text("임차확정등록");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            this.divGrd01.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn",null,"0","450","34","0",null,null,null,null,null,this.divGrd01.form);
            obj.set_taborder("5");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("width");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnGrdRegi\"/></Contents>");
            this.divGrd01.addChild(obj.name, obj);

            obj = new Grid("grdList01","0","PanelGrdBtn:10","100.00%",null,null,"25",null,null,null,null,this.divGrd01.form);
            obj.set_taborder("13");
            obj.set_binddataset("dsHireCfmtnRegList");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"업체명\"/><Cell col=\"1\" text=\"위치\"/><Cell col=\"2\" text=\"건물명\"/><Cell col=\"3\" text=\"호실번호\"/><Cell col=\"4\" text=\"면적(m2)\"/><Cell col=\"5\" text=\"임차여부\"/><Cell col=\"6\" text=\"등록자\"/><Cell col=\"7\" text=\"등록일자\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:bzentyNm\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:pstnCd\" displaytype=\"combotext\" combodataset=\"dsCboPstnCd\" combodatacol=\"cdNm\" combocodecol=\"cdId\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:bldgCd\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsCboBldgCd\" combodatacol=\"cdNm\" combocodecol=\"cdId\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:rmnmNo\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:rntar\" displaytype=\"text\" combodataset=\"dsCombo\" combocodecol=\"cdId\" combotype=\"dropdown\" comboautoselect=\"true\" combodatacol=\"cdNm\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:hireYnCd\" displaytype=\"text\" edittype=\"none\" expr=\"hireYnCd == 1 ? &quot;임차확정&quot; : hireYnCd  == 2 ? &quot;임차거부&quot; : &quot;&quot;\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:hireYnRgstt\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:hireYnRegDt\" displaytype=\"text\" edittype=\"none\" maskedittype=\"string\" textAlign=\"center\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.divGrd01.addChild(obj.name, obj);

            obj = new Button("btnGrdRegi","405","0","45","34",null,null,null,null,null,null,this.divGrd01.form);
            obj.set_taborder("6");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_visible("true");
            this.divGrd01.addChild(obj.name, obj);

            obj = new Div("divGrd00","0","340","100%","500",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Combo("grdListCnt","315","0","80","34",null,null,null,null,null,null,this.divGrd00.form);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divGrd00_form_grdListCnt_innerdataset = new nexacro.NormalDataset("divGrd00_form_grdListCnt_innerdataset", obj);
            divGrd00_form_grdListCnt_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row></Rows>");
            obj.set_innerdataset(divGrd00_form_grdListCnt_innerdataset);
            obj.set_text("10");
            obj.set_value("10");
            obj.set_index("0");
            this.divGrd00.addChild(obj.name, obj);

            obj = new Static("staTotal00","251","0","54","34",null,null,null,null,null,null,this.divGrd00.form);
            obj.set_taborder("0");
            obj.set_text("목록수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divGrd00.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn",null,"0","450","34","0",null,null,null,null,null,this.divGrd00.form);
            obj.set_taborder("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("width");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staTotal00\"/><PanelItem id=\"PanelItem02\" componentid=\"grdListCnt\"/></Contents>");
            this.divGrd00.addChild(obj.name, obj);

            obj = new Static("staTotal01","120","0","20","34",null,null,null,null,null,null,this.divGrd00.form);
            obj.set_taborder("3");
            obj.set_text("총");
            obj.set_usedecorate("true");
            this.divGrd00.addChild(obj.name, obj);

            obj = new Static("staListTitle00","0","0","100","34",null,null,null,null,null,null,this.divGrd00.form);
            obj.set_taborder("4");
            obj.set_text("임차문의 업체");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            this.divGrd00.addChild(obj.name, obj);

            obj = new Panel("PanelTtlCnt00","0","0","300","34",null,null,null,null,null,null,this.divGrd00.form);
            obj.set_taborder("2");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staListTitle00\"/><PanelItem id=\"PanelItem00\" componentid=\"staTotal01\"/><PanelItem id=\"PanelItem02\" componentid=\"staTnocs00\"/><PanelItem id=\"PanelItem03\" componentid=\"Static00\"/></Contents>");
            this.divGrd00.addChild(obj.name, obj);

            obj = new Grid("grdList00","0","PanelGrdBtn:10","100.00%","400",null,null,null,null,null,null,this.divGrd00.form);
            obj.set_taborder("9");
            obj.set_binddataset("dsHireAskBzentyList");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"접수번호\"/><Cell col=\"1\" text=\"업체명\"/><Cell col=\"2\" text=\"업체분류\"/><Cell col=\"3\" text=\"희망위치\"/><Cell col=\"4\" text=\"희망건물명\"/><Cell col=\"5\" text=\"희망면적(m2)\"/><Cell col=\"6\" text=\"용도\"/><Cell col=\"7\" text=\"임차확정등록일자\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:rcptNo\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:bzentyNm\" displaytype=\"text\" edittype=\"none\" maskeditformat=\"####-##-##\"/><Cell col=\"2\" text=\"bind:bzentyClsfCd\" displaytype=\"combotext\" combodataset=\"dsCboBzentyClsfCd\" combodatacol=\"cdNm\" combocodecol=\"cdId\"/><Cell col=\"3\" text=\"bind:pstnCd\" displaytype=\"combotext\" combodataset=\"dsCboPstnCd\" combodatacol=\"cdNm\" combocodecol=\"cdId\"/><Cell col=\"4\" text=\"bind:bldgCd\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsCboBldgCd\" combodatacol=\"cdNm\" combocodecol=\"cdId\"/><Cell col=\"5\" text=\"bind:rntar\" displaytype=\"text\" combodataset=\"dsCombo\" combocodecol=\"cdId\" combotype=\"dropdown\" comboautoselect=\"true\" combodatacol=\"cdNm\"/><Cell col=\"6\" text=\"bind:dtlUsgCd\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsCboDtlUsgCd\" combocodecol=\"cdId\" combodatacol=\"cdNm\"/><Cell col=\"7\" text=\"bind:hireYnRegDt\" displaytype=\"text\" edittype=\"none\" maskedittype=\"string\" textAlign=\"center\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.divGrd00.addChild(obj.name, obj);

            obj = new Div("divPage","0","grdList00:20","100%","36",null,null,null,null,"36",null,this.divGrd00.form);
            obj.set_taborder("9");
            obj.set_text("Div00");
            obj.set_url("work::COM/util/paging/paging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divGrd00.addChild(obj.name, obj);

            obj = new Static("staTnocs00","147","0","30","34",null,null,null,null,null,null,this.divGrd00.form);
            obj.set_taborder("5");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("none");
            obj.set_textAlign("center");
            this.divGrd00.addChild(obj.name, obj);

            obj = new Static("Static00","213","17","30","34",null,null,null,null,null,null,this.divGrd00.form);
            obj.set_taborder("6");
            obj.set_text("건");
            this.divGrd00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSch.form.divCal.form
            obj = new Layout("default","",0,0,this.divSch.form.divCal.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.calBgngYmd.set_taborder("1");
                p.calBgngYmd.set_dateformat("yyyy-MM-dd");
                p.calBgngYmd.move("180.00","0","145","40",null,null);

                p.staDash.set_taborder("0");
                p.staDash.set_text("~");
                p.staDash.set_cssclass("sta_WF_Dash");
                p.staDash.move("160.00","0","10","40",null,null);

                p.calEndYmd.set_taborder("6");
                p.calEndYmd.set_dateformat("yyyy-MM-dd");
                p.calEndYmd.move("0","0","145","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divSch.form.divCal.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSch.form.divCal.form
            obj = new Layout("Layout0","",0,0,this.divSch.form.divCal.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divSch.form.divCal.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSch.form.divCal.form
            obj = new Layout("mobile","",0,0,this.divSch.form.divCal.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.calBgngYmd.move("180.00","0","150","40",null,null);

                p.calEndYmd.move("0","0","150","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divSch.form.divCal.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divSch.form
            obj = new Layout("default","",0,0,this.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel01.set_taborder("18");
                p.staLabel01.set_text("업체명");
                p.staLabel01.set_cssclass("sta_WF_SchLabel");
                p.staLabel01.set_flexshrink("0");
                p.staLabel01.set_maxwidth("");
                p.staLabel01.move("0","0","100","40",null,null);

                p.Panel01.set_taborder("19");
                p.Panel01.set_type("horizontal");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_flexgrow("1");
                p.Panel01.set_minwidth("");
                p.Panel01.move("582","46","255","40",null,null);

                p.edtHirerNm.set_taborder("2");
                p.edtHirerNm.set_flexgrow("1");
                p.edtHirerNm.set_displaynulltext("검색 단어 입력");
                p.edtHirerNm.set_maxlength("20");
                p.edtHirerNm.move("692","46","100%","40",null,null);

                p.panLabel.set_taborder("0");
                p.panLabel.set_verticalgap("8");
                p.panLabel.set_flexwrap("wrap");
                p.panLabel.set_spacing("0px 0px 10px 0px");
                p.panLabel.set_type("horizontal");
                p.panLabel.set_flexcrossaxisalign("start");
                p.panLabel.set_horizontalgap("50");
                p.panLabel.set_fittocontents("height");
                p.panLabel.set_maxheight("");
                p.panLabel.move("20","14","100%","102",null,null);

                p.cboHireYnCd.set_taborder("4");
                p.cboHireYnCd.set_innerdataset(divSch_form_cboHireYnCd_innerdataset);
                p.cboHireYnCd.set_codecolumn("codecolumn");
                p.cboHireYnCd.set_datacolumn("datacolumn");
                p.cboHireYnCd.set_text("전체");
                p.cboHireYnCd.set_value("");
                p.cboHireYnCd.set_index("-1");
                p.cboHireYnCd.move("140","27","100%","40",null,null);

                p.staLabel03.set_taborder("12");
                p.staLabel03.set_text("임차여부");
                p.staLabel03.set_cssclass("sta_WF_SchLabel");
                p.staLabel03.set_flexshrink("0");
                p.staLabel03.move("69","25","100","40",null,null);

                p.Panel03.set_taborder("9");
                p.Panel03.set_type("horizontal");
                p.Panel03.set_horizontalgap("10");
                p.Panel03.set_fittocontents("height");
                p.Panel03.set_flexwrap("nowrap");
                p.Panel03.set_flexgrow("1");
                p.Panel03.set_maxheight("");
                p.Panel03.set_minwidth("");
                p.Panel03.move("20.00","14","255","40",null,null);

                p.Panel02.set_taborder("6");
                p.Panel02.set_type("horizontal");
                p.Panel02.set_horizontalgap("10");
                p.Panel02.set_flexgrow("1");
                p.Panel02.set_maxheight("");
                p.Panel02.set_minwidth("");
                p.Panel02.move("1694.00","398","255","40",null,null);

                p.staLabel02.set_taborder("5");
                p.staLabel02.set_text("건물명");
                p.staLabel02.set_cssclass("sta_WF_SchLabel");
                p.staLabel02.set_flexshrink("0");
                p.staLabel02.set_maxwidth("");
                p.staLabel02.move("0","0","100","40",null,null);

                p.cboBldgCd.set_taborder("3");
                p.cboBldgCd.set_innerdataset("dsCboBldgCd");
                p.cboBldgCd.set_codecolumn("cdId");
                p.cboBldgCd.set_datacolumn("cdNm");
                p.cboBldgCd.set_text("전체");
                p.cboBldgCd.set_value("");
                p.cboBldgCd.set_index("-1");
                p.cboBldgCd.move("851","24","100%","40",null,null);

                p.staLabel04.set_taborder("10");
                p.staLabel04.set_text("등록일자");
                p.staLabel04.set_cssclass("sta_WF_SchLabel");
                p.staLabel04.set_flexshrink("0");
                p.staLabel04.set_maxwidth("");
                p.staLabel04.move("0","0","100","40",null,null);

                p.Panel04.set_taborder("11");
                p.Panel04.set_type("horizontal");
                p.Panel04.set_horizontalgap("10");
                p.Panel04.set_flexgrow("2");
                p.Panel04.set_fittocontents("height");
                p.Panel04.set_flexwrap("nowrap");
                p.Panel04.set_minwidth("");
                p.Panel04.move("1694.00","398","560","40",null,null);

                p.divCal.set_taborder("13");
                p.divCal.set_text("Div00");
                p.divCal.set_flexgrow("1");
                p.divCal.set_formscrollbartype("none none");
                p.divCal.set_formscrolltype("none");
                p.divCal.move("20.00","14","320","40",null,null);

                p.btnSchClose.set_taborder("7");
                p.btnSchClose.set_cssclass("btn_WF_SchClose");
                p.btnSchClose.move("1251","185","30","30",null,null);

                p.panClose.set_taborder("14");
                p.panClose.set_type("vertical");
                p.panClose.set_cssclass("pal_WF_SchLine");
                p.panClose.set_flexcrossaxisalign("end");
                p.panClose.move("30","151","100%","30",null,null);

                p.btnSch.set_taborder("8");
                p.btnSch.set_text("조회하기");
                p.btnSch.set_cssclass("btn_WF_Search");
                p.btnSch.move("570","192","112","40",null,null);

                p.panSchBtn.set_taborder("15");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100%","40",null,null);

                p.staLabel00.set_taborder("16");
                p.staLabel00.set_text("접수번호");
                p.staLabel00.set_cssclass("sta_WF_SchLabel");
                p.staLabel00.set_flexshrink("0");
                p.staLabel00.set_maxwidth("");
                p.staLabel00.move("0","0","100","40",null,null);

                p.edtRcptNo.set_taborder("1");
                p.edtRcptNo.set_flexgrow("1");
                p.edtRcptNo.set_displaynulltext("접수번호 입력");
                p.edtRcptNo.set_maxlength("20");
                p.edtRcptNo.move("841","24","100%","40",null,null);

                p.Panel00.set_taborder("17");
                p.Panel00.set_type("horizontal");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_flexgrow("1");
                p.Panel00.set_minwidth("");
                p.Panel00.move("1694.00","398","255","40",null,null);
            	}
            );
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_horizontalgap("50");
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
                p.panLabel.move("132","47","100%","244",null,null);

                p.Panel01.set_type("horizontal");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_horizontalgap("8");
                p.Panel01.move("1694.00","398","100%","40",null,null);

                p.Panel04.set_horizontalgap("8");
                p.Panel04.move("1694.00","398","100%","45",null,null);

                p.Panel02.set_horizontalgap("8");
                p.Panel02.move("1694.00","398","100%","40",null,null);

                p.Panel03.set_type("horizontal");
                p.Panel03.set_fittocontents("height");
                p.Panel03.set_flexwrap("wrap");
                p.Panel03.set_horizontalgap("8");
                p.Panel03.move("1694.00","398","100%","80",null,null);

                p.Edit00.move("140","80","65%","40",null,null);

                p.edtHirerNm.move("841","24","65%","40",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("14px 16px 12px 16px");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("50");
            this.divSch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSch.form
            obj = new Layout("mobile","",0,0,this.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel03.move("69","25","100","40",null,null);

                p.staLabel02.move("0","0","100","40",null,null);

                p.staLabel04.move("0","0","100","40",null,null);

                p.Panel04.set_type("vertical");

                p.panLabel.move("20","14","100%","242",null,null);

                p.divCal.move("20.00","14","100%","40",null,null);
            	}
            );
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_horizontalgap("50");
            this.divSch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divGrd01.form
            obj = new Layout("default","",0,0,this.divGrd01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.PanelTtlCnt01.set_taborder("0");
                p.PanelTtlCnt01.set_fittocontents("width");
                p.PanelTtlCnt01.move("0","0","300","34",null,null);

                p.staTotal04.set_taborder("3");
                p.staTotal04.set_text("건");
                p.staTotal04.set_usedecorate("true");
                p.staTotal04.move("190","0","30","34",null,null);

                p.staTnocs01.set_taborder("2");
                p.staTnocs01.set_text("0");
                p.staTnocs01.set_cssclass("sta_WF_Total");
                p.staTnocs01.set_usedecorate("true");
                p.staTnocs01.set_fittocontents("none");
                p.staTnocs01.set_textAlign("center");
                p.staTnocs01.move("147","0","30","34",null,null);

                p.staTotal03.set_taborder("1");
                p.staTotal03.set_text("총");
                p.staTotal03.set_usedecorate("true");
                p.staTotal03.move("120","0","20","34",null,null);

                p.staListTitle01.set_taborder("4");
                p.staListTitle01.set_text("임차확정등록");
                p.staListTitle01.set_cssclass("sta_WF_SchLabel");
                p.staListTitle01.set_usedecorate("true");
                p.staListTitle01.move("0","0","100","34",null,null);

                p.PanelGrdBtn.set_taborder("5");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_fittocontents("width");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.move(null,"0","450","34","0",null);

                p.grdList01.set_taborder("13");
                p.grdList01.set_binddataset("dsHireCfmtnRegList");
                p.grdList01.set_autofittype("none");
                p.grdList01.set_minheight("");
                p.grdList01.move("0","PanelGrdBtn:10","100.00%",null,null,"25");

                p.btnGrdRegi.set_taborder("6");
                p.btnGrdRegi.set_text("등록");
                p.btnGrdRegi.set_cssclass("btn_WF_SmallBlack");
                p.btnGrdRegi.set_visible("true");
                p.btnGrdRegi.move("405","0","45","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divGrd01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGrd01.form
            obj = new Layout("Layout0","",0,0,this.divGrd01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdList01.set_autofittype("none");

                p.btnGrdRegi.set_visible("false");

                p.btnGrdDel.set_visible("false");
            	}
            );
            obj.set_verticalgap("20");
            this.divGrd01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGrd01.form
            obj = new Layout("mobile","",0,0,this.divGrd01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.divGrd01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divGrd00.form.divPage
            obj = new Layout("default","",0,0,this.divGrd00.form.divPage.form,function(p){});
            this.divGrd00.form.divPage.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrd00.form
            obj = new Layout("default","",0,0,this.divGrd00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdListCnt.set_taborder("7");
                p.grdListCnt.set_innerdataset(divGrd00_form_grdListCnt_innerdataset);
                p.grdListCnt.set_codecolumn("codecolumn");
                p.grdListCnt.set_datacolumn("datacolumn");
                p.grdListCnt.set_text("10");
                p.grdListCnt.set_value("10");
                p.grdListCnt.set_index("0");
                p.grdListCnt.move("315","0","80","34",null,null);

                p.staTotal00.set_taborder("0");
                p.staTotal00.set_text("목록수");
                p.staTotal00.set_cssclass("sta_WF_SchLabel");
                p.staTotal00.set_fittocontents("width");
                p.staTotal00.move("251","0","54","34",null,null);

                p.PanelGrdBtn.set_taborder("1");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_fittocontents("width");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.move(null,"0","450","34","0",null);

                p.staTotal01.set_taborder("3");
                p.staTotal01.set_text("총");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.move("120","0","20","34",null,null);

                p.staListTitle00.set_taborder("4");
                p.staListTitle00.set_text("임차문의 업체");
                p.staListTitle00.set_cssclass("sta_WF_SchLabel");
                p.staListTitle00.set_usedecorate("true");
                p.staListTitle00.move("0","0","100","34",null,null);

                p.PanelTtlCnt00.set_taborder("2");
                p.PanelTtlCnt00.set_fittocontents("width");
                p.PanelTtlCnt00.move("0","0","300","34",null,null);

                p.grdList00.set_taborder("9");
                p.grdList00.set_binddataset("dsHireAskBzentyList");
                p.grdList00.set_autofittype("none");
                p.grdList00.set_maxheight("");
                p.grdList00.move("0","PanelGrdBtn:10","100.00%","400",null,null);

                p.divPage.set_taborder("9");
                p.divPage.set_text("Div00");
                p.divPage.set_url("work::COM/util/paging/paging.xfdl");
                p.divPage.set_formscrollbartype("none none");
                p.divPage.set_formscrolltype("none");
                p.divPage.set_minheight("36");
                p.divPage.set_maxheight("");
                p.divPage.move("0","grdList00:20","100%","36",null,null);

                p.staTnocs00.set_taborder("5");
                p.staTnocs00.set_text("0");
                p.staTnocs00.set_cssclass("sta_WF_Total");
                p.staTnocs00.set_usedecorate("true");
                p.staTnocs00.set_fittocontents("none");
                p.staTnocs00.set_textAlign("center");
                p.staTnocs00.move("147","0","30","34",null,null);

                p.Static00.set_taborder("6");
                p.Static00.set_text("건");
                p.Static00.move("213","17","30","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divGrd00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGrd00.form
            obj = new Layout("Layout0","",0,0,this.divGrd00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdList00.set_autofittype("none");

                p.btnGrdRegi.set_visible("false");

                p.btnGrdDel.set_visible("false");
            	}
            );
            obj.set_verticalgap("20");
            this.divGrd00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGrd00.form
            obj = new Layout("mobile","",0,0,this.divGrd00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.divGrd00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,1200,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("임차확정등록 목록(처리자)");

                p.divTitle.set_taborder("0");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);

                p.divSch.set_taborder("1");
                p.divSch.set_text("Div00");
                p.divSch.set_cssclass("div_WF_SchBg");
                p.divSch.set_formscrollbartype("none none");
                p.divSch.set_formscrolltype("none");
                p.divSch.set_fittocontents("height");
                p.divSch.move("0","divTitle:20",null,"210","60",null);

                p.panGrd.set_taborder("4");
                p.panGrd.set_type("vertical");
                p.panGrd.set_verticalgap("20");
                p.panGrd.set_fittocontents("height");
                p.panGrd.move("0","divSch:30",null,"880","60",null);

                p.divGrd01.set_taborder("3");
                p.divGrd01.set_text("Div01");
                p.divGrd01.set_formscrollbartype("none none");
                p.divGrd01.set_formscrolltype("none");
                p.divGrd01.set_fittocontents("height");
                p.divGrd01.set_minheight("");
                p.divGrd01.move("0","277.397","100%","350",null,null);

                p.divGrd00.set_taborder("2");
                p.divGrd00.set_text("Div01");
                p.divGrd00.set_formscrollbartype("none none");
                p.divGrd00.set_formscrolltype("none");
                p.divGrd00.set_fittocontents("height");
                p.divGrd00.set_maxheight("");
                p.divGrd00.move("0","340","100%","500",null,null);
            	}
            );
            obj.set_horizontalgap("0");
            obj.set_mobileorientation("landscape");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divTitle.move("0","0",null,"50","0",null);

                p.divSch.move("20","divTitle:20",null,"196","20",null);

                p.panGrd.move("20","divSch:20",null,"800","20",null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            obj.set_horizontalgap("0");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item4","staTnocs","text","dsPage","totalRecordCount");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divCal.form.calBgngYmd","value","dsSearch","pBgngYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divCal.form.calEndYmd","value","dsSearch","pEndYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edtHireLohNo","value","dsSearch","pHireLohNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divTitle.form.divCal.form.calBgngYmd","value","dsSearch","pBgngYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divTitle.form.divCal.form.calEndYmd","value","dsSearch","pEndYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divGrd00.form.staTnocs01","text","dsPage","totalRecordCount");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divGrd00.form.staTnocs00","text","dsPage","totalRecordCount");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divGrd01.form.staTnocs01","text","dsHireCfmtnRegList","cnt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSch.form.edtHirerNm","value","dsSearch","pBzentyNm2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSch.form.cboBldgCd","value","dsSearch","pBldgCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSch.form.cboHireYnCd","value","dsSearch","pHireYnCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSch.form.divCal.form.calBgngYmd","value","dsSearch","pBgngYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSch.form.divCal.form.calEndYmd","value","dsSearch","pEndYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divSch.form.edtRcptNo","value","dsSearch","pRcptNo");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
            this._addPreloadList("fdl","work::COM/util/paging/paging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("REN007M02.xfdl","xjs::TaskCom.xjs");
        this.registerScript("REN007M02.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	REN007M02.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/10/30
        *  @Desction   ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/10/30			박영수						최초생성
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
        this.cfnSearch = function (page)
        {
        	//그리드 한 페이지에 게시되는 데이터건수
        	var recordCountPerPage = this.divGrd00.form.grdListCnt.value;
        	this.dsSearch.setColumn(0, "currentPageNo", page);
        	this.dsSearch.setColumn(0, "recordCountPerPage", recordCountPerPage);
        	this.getSearchTransaction();
        };

        this.cfnClose = function (){};

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //목록 조회 트랜젝션
        this.getSearchTransaction = function()
        {
        	var strSvcId    = "search";
        	var strSvcUrl   = "ren/frs/selectHireAskBzentyList.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsHireAskBzentyList=dsHireAskBzentyList dsPage=dsPage";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 임차확정등록 목록 조회
        this.hireCfmntRegListTransaction = function()
        {
        	var strSvcId    = "hireCfmntReg";
        	var strSvcUrl   = "ren/frs/selectHireCfmtnRegList.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsHireCfmtnRegList=dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        // 트랜젝션 콜백 함수
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if (errorCode != 0)	{
        		return;
        	}

        	switch (svcID) {
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

        			if (deptCd > 0) {
        				this.dsCboBldgCd.filter("grp2CdId == '" + deptCd + "' || cdNm == '전체' ");
        			}

        			this.dsSearch.setColumn(0, "pPrcsDeptCd", deptCd);

        			this.divSch.form.cboBldgCd.set_index(0);
        			this.divSch.form.cboHireYnCd.set_index(0);

        			// 페이징을 위하여 검색 함수를 실행
        			this.cfnSearch(1);
        			break;

        		case "search":
        			// 조회 한 후 페이징을 셋팅 하기 위한 초기 함수
        			this.divGrd00.form.divPage.form.initPages(this.dsPage.getColumn(0, "currentPageNo"), this.dsPage.getColumn(0, "totalRecordCount"), this.dsPage.getColumn(0, "recordCountPerPage"), this.dsPage.getColumn(0, "pageSize"), "pagingCallback");

        			if (!this.gfnIsNull(this.dsHireAskBzentyList.getColumn(0,"bzentyNm"))) {
        				this.dsSearch.setColumn(0, "pBzentyNm", this.dsHireAskBzentyList.getColumn(0,"bzentyNm"));
        				this.hireCfmntRegListTransaction();
        			} else {
        				this.dsHireCfmtnRegList.clear();
        				this.divGrd01.form.staTnocs01.text = "0";
        			}

        			break;

        		case "hireCfmntReg":
        			break;
        	}
        };

        // 페이징 버튼 콜백함수
        this.pagingCallback = function(page) {
        	this.cfnSearch(page);
        };

        // 팝업에 관한 콜백 함수
        this.fnPopupCallback = function(sPopupId, sRtn){};

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	// 공통코드 함수 호출
        	this.cfnComCdLoad({dsCboBzentyClsfCd:"BZENTY_CLSF_CD:", dsCboPstnCd:"ZONE_SE_CD:"});
        	this.cfnEtcCdLoad({dsCboBldgCd:"{id:'selectTaskComListCd', cnd:{cdTyId:'RENT_ASN_BLDG'}, opt:'A:cdNm'}"
        					  ,dsCboDtlUsgCd:"{id:'selectTaskComListCd', cnd:{cdTyId:'RENT_USE'}, opt:'B:cdNm'}"});
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // 조회
        this.divSch_btnSch_onclick = function(obj,e){
        	this.cfnSearch(1);
        };

        // Enter 입력
        this.form_onkeyup = function(obj,e)
        {
        	var focus = this.getFocus();

        	if (e.keycode == 13 && focus.taborder < 9 ) {
        		this.divSch.form.btnSch.click();
        	}
        };

        // 목록수
        this.divGrd00_grdListCnt_onitemchanged = function(obj,e)
        {
        	this.cfnSearch(1);
        };

        // 등록페이지
        this.divGrd00_btnGrdRegi_onclick = function(obj,e)
        {
        	var bzentyNm = this.dsHireCfmtnRegList.getColumn(e.row, "bzentyNm");

        	if (this.gfnIsNull(bzentyNm)){
        		this.gfnAlertMsg("msg", "MSG_011", ["검색된 업체가 없습니다."]);
        		return;
        	}

        	if (this.objApp.screenid == "Desktop_screen") {
        		/*****  MDI 에 추가하는 페이지 오픈을 위한 코드 *****/
        		var param = {
        			"status" : "reg"
        			,"bzentyNm" : bzentyNm
        		};

        		var sMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        		var sMenuUrl = 'work::REN/FRS/REN007M01.xfdl';
        		var actNm = '처리자 등록';

        		this.gfnPageOpen(sMenuId, sMenuUrl, actNm, param);
        		/*****  MDI 에 추가하는 페이지 오픈을 위한 코드 *****/
        	} else {
        		var sTitle = "처리자 등록";
        		var objArg   = {
        			"status" : "reg"
        			,"bzentyNm" : bzentyNm
        		};

        		var objOption = {
        			popuptype: "modal"	// modal,modaless
        			, autosize: true
        			, title: sTitle
        			, resize: true
        			, titlebar: true
        		};
        		var sPopupCallBack = "fnPopupCallback";

        		this.gfnOpenPopup("REN007M01", "work::REN/FRS/REN007M01.xfdl", objArg, sPopupCallBack, objOption);
        	}
        };

        // 상세
        this.divGrd01_grdList01_oncelldblclick = function(obj,e)
        {
        	var bzentyNm = this.dsHireCfmtnRegList.getColumn(e.row, "bzentyNm");

        	if (this.objApp.screenid == "Desktop_screen") {
        		/*****  MDI 에 추가하는 페이지 오픈을 위한 코드 *****/
        		var param = {
        			"status" : "detail"
        			,"bzentyNm" : bzentyNm
        		};

        		var sMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        		var sMenuUrl = 'work::REN/FRS/REN007M01.xfdl';
        		var actNm = '처리자 상세';

        		this.gfnPageOpen(sMenuId, sMenuUrl, actNm, param);
        		/*****  MDI 에 추가하는 페이지 오픈을 위한 코드 *****/
        	} else {
        		var sTitle = "처리자 상세";
        		var objArg   = {
        			"status" : "detail"
        			,"bzentyNm" : bzentyNm
        		};

        		var objOption = {
        			popuptype: "modal"	// modal,modaless
        			, autosize: true
        			, title: sTitle
        			, resize: true
        			, titlebar: true
        		};
        		var sPopupCallBack = "fnPopupCallback";

        		this.gfnOpenPopup("REN007M01", "work::REN/FRS/REN007M01.xfdl", objArg, sPopupCallBack, objOption);
        	}
        };

        this.divGrd00_grdList00_oncellclick = function(obj,e)
        {
        	this.dsSearch.setColumn(0,"pBzentyNm",this.dsHireAskBzentyList.getColumn(e.row,"bzentyNm"));
        	this.hireCfmntRegListTransaction();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onkeyup",this.form_onkeyup,this);
            this.divSch.form.cboHireYnCd.addEventHandler("onitemchanged",this.divSch_cboPstnCd_onitemchanged,this);
            this.divSch.form.cboBldgCd.addEventHandler("onitemchanged",this.divSch_bldgCombo_onitemchanged,this);
            this.divSch.form.staLabel04.addEventHandler("onclick",this.divForm_Div00_sta00_00_01_01_onclick,this);
            this.divSch.form.btnSch.addEventHandler("onclick",this.divSch_btnSch_onclick,this);
            this.divGrd01.form.grdList01.addEventHandler("oncelldblclick",this.divGrd01_grdList01_oncelldblclick,this);
            this.divGrd01.form.btnGrdRegi.addEventHandler("onclick",this.divGrd00_btnGrdRegi_onclick,this);
            this.divGrd00.form.grdListCnt.addEventHandler("onitemchanged",this.divGrd00_grdListCnt_onitemchanged,this);
            this.divGrd00.form.grdList00.addEventHandler("oncellclick",this.divGrd00_grdList00_oncellclick,this);
        };
        this.loadIncludeScript("REN007M02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
