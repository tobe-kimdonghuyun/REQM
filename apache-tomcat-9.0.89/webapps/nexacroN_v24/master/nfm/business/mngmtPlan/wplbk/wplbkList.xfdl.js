(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("wplbkList");
            this.set_titletext("경영계획부조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1240,780);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"upInstId\" type=\"STRING\" size=\"10\"/><Column id=\"instId\" type=\"STRING\" size=\"256\"/><Column id=\"wplarId\" type=\"STRING\" size=\"256\"/><Column id=\"nxtrmNo\" type=\"STRING\" size=\"256\"/><Column id=\"cmblcId\" type=\"STRING\" size=\"256\"/><Column id=\"sbltId\" type=\"STRING\" size=\"256\"/><Column id=\"nowNxtrmYn\" type=\"STRING\" size=\"256\"/><Column id=\"pageIndex\" type=\"STRING\" size=\"256\"/><Column id=\"pageUnit\" type=\"STRING\" size=\"256\"/><Column id=\"pageSize\" type=\"STRING\" size=\"256\"/><Column id=\"paging\" type=\"STRING\" size=\"256\"/><Column id=\"taskEndYn\" type=\"STRING\" size=\"256\"/><Column id=\"juso\" type=\"STRING\" size=\"256\"/><Column id=\"sido\" type=\"STRING\" size=\"256\"/><Column id=\"sigungu\" type=\"STRING\" size=\"256\"/><Column id=\"emd\" type=\"STRING\" size=\"256\"/><Column id=\"ri\" type=\"STRING\" size=\"256\"/><Column id=\"san\" type=\"STRING\" size=\"256\"/><Column id=\"bonbun\" type=\"STRING\" size=\"256\"/><Column id=\"bubun\" type=\"STRING\" size=\"256\"/><Column id=\"dtlSearchYn\" type=\"STRING\" size=\"256\"/><Column id=\"searchParam\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWplbk", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInten", this);
            obj._setContents("<Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"sname\" type=\"STRING\" size=\"256\"/>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNtfrtMnoff", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"sname\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWplar", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNxtrm", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCmblc", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSblt", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPaging", this);
            obj._setContents("<ColumnInfo><Column id=\"currentPageNo\" type=\"STRING\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"STRING\" size=\"256\"/><Column id=\"pageSize\" type=\"STRING\" size=\"256\"/><Column id=\"totalRecordCount\" type=\"STRING\" size=\"256\"/><Column id=\"totalPageCount\" type=\"STRING\" size=\"256\"/><Column id=\"firstPageNoOnPageList\" type=\"STRING\" size=\"256\"/><Column id=\"lastPageNoOnPageList\" type=\"STRING\" size=\"256\"/><Column id=\"firstRecordIndex\" type=\"STRING\" size=\"256\"/><Column id=\"lastRecordIndex\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSido", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSigungu", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEmd", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRi", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/><Column id=\"gubun\" type=\"STRING\" size=\"256\"/><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"upId\" type=\"STRING\" size=\"256\"/><Column id=\"searchCn\" type=\"STRING\" size=\"256\"/><Column id=\"searchQuery\" type=\"STRING\" size=\"256\"/><Column id=\"querySet\" type=\"STRING\" size=\"256\"/><Column id=\"clsfId\" type=\"STRING\" size=\"256\"/><Column id=\"groupDp\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSttyApwodCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/><Column id=\"dtlCdExpln\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWplbkExcelList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWplbkExcelDwlndList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAffrsExcelList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFrestGrdnnExcelList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFrtrePrdctnExcelList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFcltExcelList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEarnExcelList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"upInstId\" type=\"STRING\" size=\"256\"/><Column id=\"instId\" type=\"STRING\" size=\"256\"/><Column id=\"wplarId\" type=\"STRING\" size=\"256\"/><Column id=\"nxtrmNo\" type=\"STRING\" size=\"256\"/><Column id=\"cmblcId\" type=\"STRING\" size=\"256\"/><Column id=\"sbltId\" type=\"STRING\" size=\"256\"/><Column id=\"nowNxtrmYn\" type=\"STRING\" size=\"256\"/><Column id=\"pageIndex\" type=\"STRING\" size=\"256\"/><Column id=\"pageUnit\" type=\"STRING\" size=\"256\"/><Column id=\"pageSize\" type=\"STRING\" size=\"256\"/><Column id=\"paging\" type=\"STRING\" size=\"256\"/><Column id=\"taskEndYn\" type=\"STRING\" size=\"256\"/><Column id=\"juso\" type=\"STRING\" size=\"256\"/><Column id=\"sido\" type=\"STRING\" size=\"256\"/><Column id=\"sigungu\" type=\"STRING\" size=\"256\"/><Column id=\"emd\" type=\"STRING\" size=\"256\"/><Column id=\"ri\" type=\"STRING\" size=\"256\"/><Column id=\"san\" type=\"STRING\" size=\"256\"/><Column id=\"bonbun\" type=\"STRING\" size=\"256\"/><Column id=\"bubun\" type=\"STRING\" size=\"256\"/><Column id=\"dtlSearchYn\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/><Column id=\"gubun\" type=\"STRING\" size=\"256\"/><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"upId\" type=\"STRING\" size=\"256\"/><Column id=\"searchCn\" type=\"STRING\" size=\"256\"/><Column id=\"searchQuery\" type=\"STRING\" size=\"256\"/><Column id=\"querySet\" type=\"STRING\" size=\"256\"/><Column id=\"clsfId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAffrsExcelPrfmnc", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFrestGrdnnExcelPrfmnc", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFrtrePrdctnExcelPrfmnc", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFcltExcelPrfmnc", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEarnExcelPrfmnc", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRecovrExcelPrfmnc", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnWplbkUldDwnld",null,"247","210","32","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("경영계획부 내리기(업로드용)");
            obj.set_cssclass("btn_WF_module_line");
            this.addChild(obj.name, obj);

            obj = new Button("btnWplbkInqDwnld",null,"247","200","32","btnWplbkUldDwnld:10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("경영계획부 내리기(조회용)");
            obj.set_cssclass("btn_WF_module_line");
            this.addChild(obj.name, obj);

            obj = new Button("btnSpaceInfoDwnld",null,"247","148","32","btnWplbkInqDwnld:10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("공간정보 다운로드");
            obj.set_cssclass("btn_WF_module_line");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"215","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SA");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel_00","20","10","110","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("지방산림청");
            obj.set_cssclass("sta_SA_label");
            obj.set_accessibilitylabel("지방산림청");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmbUpInstId","staLabel_00:0","10","14.52%","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsInten");
            obj.set_codecolumn("value");
            obj.set_datacolumn("name");
            obj.set_accessibilitylabel("@staLabel_00");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staLabel_01","cmbUpInstId:10.00%","10","115","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("국유림관리소");
            obj.set_cssclass("sta_SA_label");
            obj.set_accessibilitylabel("국유림관리소");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmbInstId","staLabel_01:0","10","16%","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsNtfrtMnoff");
            obj.set_codecolumn("value");
            obj.set_datacolumn("name");
            obj.set_accessibilitylabel("@staLabel_01");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staLabel_02","cmbInstId:10%","10","102","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("경영계획구");
            obj.set_cssclass("sta_SA_label");
            obj.set_accessibilitylabel("경영계획구");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmbWplarId","staLabel_02:0","10","14.52%","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsWplar");
            obj.set_codecolumn("value");
            obj.set_datacolumn("name");
            obj.set_displayrowcount("6");
            obj.set_accessibilitylabel("@staLabel_02");
            obj.set_text("wplarId");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staLabel_03","cmbWplarId:10%","10","68","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("차기");
            obj.set_cssclass("sta_SA_label");
            obj.set_accessibilitylabel("차기");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staLabel_04","20","48","110","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("임반");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmbCmblcId","staLabel_04:0","48","14.52%","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_codecolumn("value");
            obj.set_datacolumn("name");
            obj.set_displayrowcount("6");
            obj.set_innerdataset("dsCmblc");
            obj.set_accessibilitylabel("@staLabel_04");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staLabel_05","cmbCmblcId:10%","48","115","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("소반");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBg_bottom","0",null,null,"50","0","0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_SA_comBG");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"7.1%","32","20","10",null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            obj.set_text("검색");
            obj.set_cssclass("btn_SA_search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmbNxtrmNo","staLabel_03:0","10",null,"28","20",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsNxtrm");
            obj.set_codecolumn("value");
            obj.set_datacolumn("name");
            obj.set_displayrowcount("6");
            obj.set_accessibilitylabel("@staLabel_03");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmbSbltId","staLabel_05:0","48","16%","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_codecolumn("value");
            obj.set_datacolumn("name");
            obj.set_displayrowcount("6");
            obj.set_innerdataset("dsSblt");
            obj.set_accessibilitylabel("@staLabel_05");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staLabel_05_00","cmbSbltId:10%","48","60","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_SA_label");
            obj.set_text("현차기");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkNowNxtrm","staLabel_05_00:0","48","50","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_accessibilitylabel("현차기");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staLabel_00_00","20","86","50","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_SA_label");
            obj.set_text("주소");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00","staLabel_00_00:0","86","110","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("소반 소재지");
            obj.set_cssclass("sta_SA_labelSub");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("rdoAddrType","Static00:10","80","24","78",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_columncount("2");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("2");
            obj.set_accessibilitylabel("@staLabel_00_00");
            var divSearch_form_rdoAddrType_innerdataset = new nexacro.NormalDataset("divSearch_form_rdoAddrType_innerdataset", obj);
            divSearch_form_rdoAddrType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">소반소재지</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">주소검색</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_rdoAddrType_innerdataset);
            obj.set_text("소반소재지");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmbSido","rdoAddrType:10","124","13%","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_readonly("false");
            obj.set_innerdataset("dsSido");
            obj.set_codecolumn("value");
            obj.set_datacolumn("name");
            obj.set_displayrowcount("10");
            obj.set_displaynulltext("시/도");
            obj.set_accessibilitylabel("@staLabel_01_00");
            obj.set_text("-선택-");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmbSigungu","cmbSido:10","124","13%","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_readonly("false");
            obj.set_innerdataset("dsSigungu");
            obj.set_codecolumn("value");
            obj.set_datacolumn("name");
            obj.set_displayrowcount("10");
            obj.set_displaynulltext("시/군/구");
            obj.set_accessibilitylabel("@staLabel_02_00");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmbEmd","cmbSigungu:10","124","10%","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_readonly("false");
            obj.set_innerdataset("dsEmd");
            obj.set_codecolumn("value");
            obj.set_datacolumn("name");
            obj.set_displayrowcount("10");
            obj.set_displaynulltext("읍/면/동");
            obj.set_accessibilitylabel("@staLabel_03_00");
            obj.set_text("-선택-");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmbRi","cmbEmd:10","124","10%","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_readonly("false");
            obj.set_innerdataset("dsRi");
            obj.set_codecolumn("value");
            obj.set_datacolumn("name");
            obj.set_displaynulltext("리");
            obj.set_accessibilitylabel("@staLabel_04_00");
            obj.set_text("-선택-");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtJuso","rdoAddrType:10","86",null,"28","20",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_accessibilitylabel("@Static00");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkMtn","cmbRi:20","124","50","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("산");
            obj.set_readonly("false");
            obj.set_accessibilitylabel("산");
            this.divSearch.addChild(obj.name, obj);

            obj = new MaskEdit("edtBonbun","chkMtn:6","124","60","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_readonly("false");
            obj.set_limitbymask("both");
            obj.set_format("!###.");
            obj.set_accessibilitylabel("본번");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUnit00_00","edtBonbun:0","124","30","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_text("-");
            obj.set_cssclass("sta_WF_unit");
            this.divSearch.addChild(obj.name, obj);

            obj = new MaskEdit("edtBubun","staUnit00_00:6","124","60","28",null,null,"40","60",null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_readonly("false");
            obj.set_format("!###");
            obj.set_limitbymask("both");
            obj.set_accessibilitylabel("부번");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","staLabel_00_00:0","124","110","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("주소검색");
            obj.set_cssclass("sta_SA_labelSub");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnDtlSearch",null,null,"9%","32","btnSearch:6","10",null,null,null,null,this.divSearch.form);
            obj.set_taborder("30");
            obj.set_text("상세검색");
            obj.set_cssclass("btn_SA_search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnDelAddr",null,null,"9.44%","32","btnDtlSearch:7.360000000000014","10",null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_text("주소 초기화");
            obj.set_cssclass("btn_SA_search");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("StaticDtlSttus","-1","divSearch:30","201","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("경영계획부 목록");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_accessibilitylabel("경영계획부 목록");
            this.addChild(obj.name, obj);

            obj = new Grid("grdWplbk","0","StaticDtlSttus:20",null,"386","0",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid0");
            obj.set_taborder("5");
            obj.set_autofittype("col");
            obj.set_binddataset("dsWplbk");
            obj.set_scrollbartype("none auto");
            obj.set_selecttype("row");
            obj.set_autoenter("none");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"310\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"지방산림청\"/><Cell col=\"2\" text=\"국유림관리소\"/><Cell col=\"3\" text=\"경영계획구\"/><Cell col=\"4\" text=\"차기\"/><Cell col=\"5\" text=\"임반\"/><Cell col=\"6\" text=\"소반\"/><Cell col=\"7\" text=\"소재지\"/><Cell col=\"8\" text=\"면적(ha)\"/><Cell col=\"9\" text=\"축적(m³)\"/><Cell col=\"10\" text=\"ha당 축적(m³)\"/></Band><Band id=\"body\"><Cell text=\"bind:rn\"/><Cell col=\"1\" text=\"bind:upInstNm\"/><Cell col=\"2\" text=\"bind:instAbbrvNm\"/><Cell col=\"3\" text=\"bind:wplarNm\"/><Cell col=\"4\" text=\"bind:nxtrmNo\"/><Cell col=\"5\" text=\"bind:cmblcId\"/><Cell col=\"6\" text=\"bind:sbltId\" cssclass=\"cell_linkTxt\"/><Cell col=\"7\" text=\"bind:lctnDaddrList\" displaytype=\"normal\" textAlign=\"left\" edittype=\"none\" autosizerow=\"limitmin\" textareaacceptsenter=\"true\" wordWrap=\"char\"/><Cell col=\"8\" text=\"expr:nexacro.round(nfrtldArea+blankArea+stlndArea,2)\" textAlign=\"right\"/><Cell col=\"9\" displaytype=\"normal\" edittype=\"none\" text=\"bind:realtAccmnTotlSum\" expr=\"nexacro.round(realtAccmnTotlSum,2) == &quot;NaN&quot; ? &quot;&quot; : nexacro.round(realtAccmnTotlSum,2)\" textAlign=\"right\"/><Cell col=\"10\" text=\"expr:nexacro.round(haPartyRealtAccmnArea,2)\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divPaging","0","grdWplbk:20",null,"28","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_url("common::cmmPaging.xfdl");
            obj.set_text("");
            obj.set_accessibilitylabel("페이징");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSttyApwod","7","791","45","45",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_autofittype("none");
            obj.set_binddataset("dsSttyApwodCd");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"76\"/><Column size=\"315\"/><Column size=\"161\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드\" background=\"#ccffff\"/><Cell col=\"1\" text=\"관련법\" background=\"#ccffff\"/><Cell col=\"2\" text=\"명칭\" background=\"#ccffff\"/></Band><Band id=\"body\"><Cell text=\"bind:code\"/><Cell col=\"1\" text=\"bind:dtlCdExpln\"/><Cell col=\"2\" text=\"bind:data\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdWplbkForUld","62","791","40","45",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("dsWplbkExcelList");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"70\"/><Column size=\"98\"/><Column size=\"98\"/><Column size=\"96\"/><Column size=\"125\"/><Column size=\"250\"/><Column size=\"250\"/><Column size=\"250\"/><Column size=\"250\"/><Column size=\"250\"/><Column size=\"250\"/><Column size=\"250\"/><Column size=\"250\"/><Column size=\"250\"/><Column size=\"250\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"152\"/><Column size=\"207\"/><Column size=\"617\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"152\"/><Column size=\"152\"/><Column size=\"453\"/><Column size=\"453\"/><Column size=\"453\"/><Column size=\"453\"/><Column size=\"343\"/><Column size=\"343\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"27\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"임반\" background=\"#ccffcc\"/><Cell col=\"1\" rowspan=\"2\" text=\"소반\" background=\"#ccffcc\"/><Cell col=\"2\" colspan=\"2\" text=\"GPS\" background=\"#ccffcc\"/><Cell col=\"4\" rowspan=\"2\" text=\"특수림\" background=\"#ccffcc\"/><Cell col=\"5\" rowspan=\"2\" text=\"특수림세부사항\" background=\"#ccffcc\"/><Cell col=\"6\" rowspan=\"2\" text=\"주소1\" background=\"#ccffcc\"/><Cell col=\"7\" rowspan=\"2\" text=\"주소2\" background=\"#ccffcc\"/><Cell col=\"8\" rowspan=\"2\" text=\"주소3\" background=\"#ccffcc\"/><Cell col=\"9\" rowspan=\"2\" text=\"주소4\" background=\"#ccffcc\"/><Cell col=\"10\" rowspan=\"2\" text=\"주소5\" background=\"#ccffcc\"/><Cell col=\"11\" rowspan=\"2\" text=\"주소6\" background=\"#ccffcc\"/><Cell col=\"12\" rowspan=\"2\" text=\"주소7\" background=\"#ccffcc\"/><Cell col=\"13\" rowspan=\"2\" text=\"주소8\" background=\"#ccffcc\"/><Cell col=\"14\" rowspan=\"2\" text=\"주소9\" background=\"#ccffcc\"/><Cell col=\"15\" rowspan=\"2\" text=\"주소10\" background=\"#ccffcc\"/><Cell col=\"16\" colspan=\"3\" text=\"면적\" background=\"#ccffcc\"/><Cell col=\"19\" colspan=\"6\" text=\"기능별\" background=\"#ccffcc\"/><Cell col=\"25\" rowspan=\"2\" text=\"법정지정림\" background=\"#ccffcc\"/><Cell col=\"26\" rowspan=\"2\" text=\"목표수종\" background=\"#ccffcc\"/><Cell col=\"27\" rowspan=\"2\" text=\"목표임상\" background=\"#ccffcc\"/><Cell col=\"28\" rowspan=\"2\" text=\"방위\" background=\"#ccffcc\"/><Cell col=\"29\" rowspan=\"2\" text=\"경사도\" background=\"#ccffcc\"/><Cell col=\"30\" rowspan=\"2\" text=\"표고&#13;&#10;최저\" background=\"#ccffcc\"/><Cell col=\"31\" rowspan=\"2\" text=\"표고&#13;&#10;최대\" background=\"#ccffcc\"/><Cell col=\"32\" rowspan=\"2\" text=\"토양형\" background=\"#ccffcc\"/><Cell col=\"33\" rowspan=\"2\" text=\"토심\" background=\"#ccffcc\"/><Cell col=\"34\" rowspan=\"2\" text=\"건습도\" background=\"#ccffcc\"/><Cell col=\"35\" rowspan=\"2\" text=\"지위지수\" background=\"#ccffcc\"/><Cell col=\"36\" rowspan=\"2\" text=\"우세목&#13;&#10;수고\" background=\"#ccffcc\"/><Cell col=\"37\" rowspan=\"2\" text=\"우세목&#13;&#10;임령\" background=\"#ccffcc\"/><Cell col=\"38\" rowspan=\"2\" text=\"지리\" background=\"#ccffcc\"/><Cell col=\"39\" rowspan=\"2\" text=\"임종\" background=\"#ccffcc\"/><Cell col=\"40\" rowspan=\"2\" text=\"임상\" background=\"#ccffcc\"/><Cell col=\"41\" rowspan=\"2\" text=\"소밀도\" background=\"#ccffcc\"/><Cell col=\"42\" rowspan=\"2\" text=\"현실축적&#13;&#10;(m³/ha)\" background=\"#ccffcc\"/><Cell col=\"43\" rowspan=\"2\" text=\"하층식생\" background=\"#ccffcc\"/><Cell col=\"44\" rowspan=\"2\" text=\"특정임산물\" background=\"#ccffcc\"/><Cell col=\"45\" rowspan=\"2\" text=\"사업계획 수립배경\" background=\"#ccffcc\"/><Cell col=\"46\" rowspan=\"2\" text=\"작업지시서\" background=\"#ccffcc\"/><Cell col=\"47\" rowspan=\"2\" text=\"소반연혁\" background=\"#ccffcc\"/><Cell col=\"48\" rowspan=\"2\" text=\"관리사항\" background=\"#ccffcc\"/><Cell col=\"49\" rowspan=\"2\" text=\"추가사항\" background=\"#ccffcc\"/><Cell col=\"50\" rowspan=\"2\" text=\"종자채취가능여부\" background=\"#ccffcc\"/><Cell col=\"51\" colspan=\"11\" text=\"주요수종1\" background=\"#ccffcc\"/><Cell col=\"62\" colspan=\"11\" text=\"주요수종2\" background=\"#ccffcc\"/><Cell col=\"73\" colspan=\"11\" text=\"주요수종3\" background=\"#ccffcc\"/><Cell col=\"84\" colspan=\"11\" text=\"주요수종4\" background=\"#ccffcc\"/><Cell col=\"95\" colspan=\"11\" text=\"주요수종5\" background=\"#ccffcc\"/><Cell col=\"106\" colspan=\"11\" text=\"주요수종6\" background=\"#ccffcc\"/><Cell col=\"117\" colspan=\"11\" text=\"주요수종7\" background=\"#ccffcc\"/><Cell col=\"128\" colspan=\"11\" text=\"주요수종8\" background=\"#ccffcc\"/><Cell col=\"139\" colspan=\"11\" text=\"주요수종9\" background=\"#ccffcc\"/><Cell col=\"150\" colspan=\"11\" text=\"주요수종10\" background=\"#ccffcc\"/><Cell col=\"161\" rowspan=\"2\" text=\"전자기소반지정1\" background=\"#ccffcc\"/><Cell col=\"162\" rowspan=\"2\" text=\"전자기소반지정2\" background=\"#ccffcc\"/><Cell col=\"163\" rowspan=\"2\" text=\"전자기소반지정3\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"2\" text=\"X\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"3\" text=\"Y\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"16\" text=\"입목지\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"17\" text=\"미립목지\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"18\" text=\"제지\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"19\" text=\"생활환경&#13;&#10;보전림\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"20\" text=\"자연환경&#13;&#10;보전림\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"21\" text=\"수원&#13;&#10;함양림\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"22\" text=\"산지재해&#13;&#10;방지림\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"23\" text=\"산림&#13;&#10;휴양림\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"24\" text=\"목재&#13;&#10;생산림\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"51\" text=\"수종\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"52\" text=\"혼효율\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"53\" text=\"최저임령\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"54\" text=\"평균임령\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"55\" text=\"최고임령\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"56\" text=\"최소수고\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"57\" text=\"평균수고\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"58\" text=\"최대수고\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"59\" text=\"최소경급\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"60\" text=\"평균경급\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"61\" text=\"최대경급\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"62\" text=\"수종\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"63\" text=\"혼효율\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"64\" text=\"최저임령\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"65\" text=\"평균임령\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"66\" text=\"최고임령\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"67\" text=\"최소수고\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"68\" text=\"평균수고\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"69\" text=\"최대수고\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"70\" text=\"최소경급\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"71\" text=\"평균경급\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"72\" text=\"최대경급\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"73\" text=\"수종\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"74\" text=\"혼효율\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"75\" text=\"최저임령\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"76\" text=\"평균임령\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"77\" text=\"최고임령\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"78\" text=\"최소수고\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"79\" text=\"평균수고\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"80\" text=\"최대수고\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"81\" text=\"최소경급\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"82\" text=\"평균경급\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"83\" text=\"최대경급\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"84\" text=\"수종\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"85\" text=\"혼효율\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"86\" text=\"최저임령\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"87\" text=\"평균임령\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"88\" text=\"최고임령\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"89\" text=\"최소수고\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"90\" text=\"평균수고\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"91\" text=\"최대수고\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"92\" text=\"최소경급\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"93\" text=\"평균경급\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"94\" text=\"최대경급\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"95\" text=\"수종\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"96\" text=\"혼효율\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"97\" text=\"최저임령\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"98\" text=\"평균임령\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"99\" text=\"최고임령\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"100\" text=\"최소수고\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"101\" text=\"평균수고\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"102\" text=\"최대수고\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"103\" text=\"최소경급\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"104\" text=\"평균경급\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"105\" text=\"최대경급\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"106\" text=\"수종\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"107\" text=\"혼효율\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"108\" text=\"최저임령\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"109\" text=\"평균임령\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"110\" text=\"최고임령\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"111\" text=\"최소수고\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"112\" text=\"평균수고\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"113\" text=\"최대수고\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"114\" text=\"최소경급\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"115\" text=\"평균경급\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"116\" text=\"최대경급\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"117\" text=\"수종\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"118\" text=\"혼효율\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"119\" text=\"최저임령\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"120\" text=\"평균임령\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"121\" text=\"최고임령\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"122\" text=\"최소수고\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"123\" text=\"평균수고\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"124\" text=\"최대수고\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"125\" text=\"최소경급\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"126\" text=\"평균경급\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"127\" text=\"최대경급\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"128\" text=\"수종\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"129\" text=\"혼효율\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"130\" text=\"최저임령\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"131\" text=\"평균임령\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"132\" text=\"최고임령\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"133\" text=\"최소수고\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"134\" text=\"평균수고\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"135\" text=\"최대수고\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"136\" text=\"최소경급\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"137\" text=\"평균경급\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"138\" text=\"최대경급\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"139\" text=\"수종\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"140\" text=\"혼효율\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"141\" text=\"최저임령\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"142\" text=\"평균임령\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"143\" text=\"최고임령\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"144\" text=\"최소수고\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"145\" text=\"평균수고\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"146\" text=\"최대수고\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"147\" text=\"최소경급\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"148\" text=\"평균경급\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"149\" text=\"최대경급\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"150\" text=\"수종\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"151\" text=\"혼효율\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"152\" text=\"최저임령\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"153\" text=\"평균임령\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"154\" text=\"최고임령\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"155\" text=\"최소수고\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"156\" text=\"평균수고\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"157\" text=\"최대수고\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"158\" text=\"최소경급\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"159\" text=\"평균경급\" background=\"#ccffcc\"/><Cell row=\"1\" col=\"160\" text=\"최대경급\" background=\"#ccffcc\"/></Band><Band id=\"body\"><Cell text=\"bind:cmblcId\" displaytype=\"normal\"/><Cell col=\"1\" text=\"bind:sbltId\" displaytype=\"normal\"/><Cell col=\"2\" text=\"bind:sbltGpsXcrd\" displaytype=\"normal\"/><Cell col=\"3\" text=\"bind:sbltGpsYcrd\" displaytype=\"normal\"/><Cell col=\"4\" text=\"bind:spwodKindCdNm\" displaytype=\"normal\" combodataset=\"dsSpwodKindCd\" combodatacol=\"data\" combocodecol=\"code\"/><Cell col=\"5\" text=\"bind:spwodDetlKindCdNm\" combodataset=\"dsSpwodDetailKindCd\" combodatacol=\"data\" combocodecol=\"code\" displaytype=\"normal\"/><Cell col=\"6\" text=\"bind:lctnDaddr1\" displaytype=\"normal\"/><Cell col=\"7\" text=\"bind:lctnDaddr2\" displaytype=\"normal\"/><Cell col=\"8\" text=\"bind:lctnDaddr3\" displaytype=\"normal\"/><Cell col=\"9\" text=\"bind:lctnDaddr4\" displaytype=\"normal\"/><Cell col=\"10\" text=\"bind:lctnDaddr5\" displaytype=\"normal\"/><Cell col=\"11\" text=\"bind:lctnDaddr6\" displaytype=\"normal\"/><Cell col=\"12\" text=\"bind:lctnDaddr7\" displaytype=\"normal\"/><Cell col=\"13\" text=\"bind:lctnDaddr8\" displaytype=\"normal\"/><Cell col=\"14\" text=\"bind:lctnDaddr9\" displaytype=\"normal\"/><Cell col=\"15\" text=\"bind:lctnDaddr10\" displaytype=\"normal\"/><Cell col=\"16\" text=\"bind:stlndArea\" displaytype=\"normal\"/><Cell col=\"17\" text=\"bind:blankArea\" displaytype=\"normal\"/><Cell col=\"18\" text=\"bind:nfrtldArea\" displaytype=\"normal\"/><Cell col=\"19\" text=\"bind:lfenvFrsrsrSkillTpcd\" displaytype=\"normal\"/><Cell col=\"20\" text=\"bind:ntrEnvrnFrsrsrSkillTpcd\" displaytype=\"normal\"/><Cell col=\"21\" text=\"bind:crparSkillTpcd\" displaytype=\"normal\"/><Cell col=\"22\" text=\"bind:dprrsSkillTpcd\" displaytype=\"normal\"/><Cell col=\"23\" text=\"bind:mnfrsRcrfrSkillTpcd\" displaytype=\"normal\"/><Cell col=\"24\" text=\"bind:tmbrPdfrtSkillTpcd\" displaytype=\"normal\"/><Cell col=\"25\" text=\"bind:sttyApwodCdNm\" displaytype=\"normal\"/><Cell col=\"26\" text=\"bind:goalKoftrCdNm\" displaytype=\"normal\"/><Cell col=\"27\" text=\"bind:goalFrtpCn\" displaytype=\"normal\"/><Cell col=\"28\" text=\"bind:orbrnCdNm\" displaytype=\"normal\" combodataset=\"dsOrbrnCd\" combodatacol=\"data\" combocodecol=\"code\"/><Cell col=\"29\" text=\"bind:grdntCdNm\" combodataset=\"dsGrdntCd\" combodatacol=\"data\" combocodecol=\"code\" displaytype=\"normal\"/><Cell col=\"30\" text=\"bind:alttdMnmmVl\" displaytype=\"normal\"/><Cell col=\"31\" text=\"bind:alttdMxmmVl\" displaytype=\"normal\"/><Cell col=\"32\" text=\"bind:mnfrsExmnScstxCdNm\" combodataset=\"dsMnfrsExmnnScstxCd\" combodatacol=\"data\" combocodecol=\"code\" displaytype=\"normal\"/><Cell col=\"33\" text=\"bind:vldSldptTpcdNm\" displaytype=\"normal\" combodataset=\"dsSldptTpcd\" combodatacol=\"data\" combocodecol=\"code\"/><Cell col=\"34\" text=\"bind:hgdgrTpcdNm\" combodataset=\"dsHgdgrTpcd\" combodatacol=\"data\" combocodecol=\"code\" displaytype=\"normal\"/><Cell col=\"35\" text=\"bind:mnfrsExmnStind\" displaytype=\"normal\"/><Cell col=\"36\" text=\"bind:dmtreTrhgh\" displaytype=\"normal\"/><Cell col=\"37\" text=\"bind:dmtreFrag\" displaytype=\"normal\"/><Cell col=\"38\" text=\"bind:mnfrsExmnGgrphCdNm\" combodataset=\"dsMnfrsExmnnGgrphCd\" combodatacol=\"data\" combocodecol=\"code\" displaytype=\"normal\"/><Cell col=\"39\" text=\"bind:frorCdNm\" displaytype=\"normal\" combodataset=\"dsFrorCd\" combodatacol=\"data\" combocodecol=\"code\"/><Cell col=\"40\" text=\"bind:frtpTpcdNm\" combodataset=\"dsFrtpTpcd\" combodatacol=\"data\" combocodecol=\"code\" displaytype=\"normal\"/><Cell col=\"41\" text=\"bind:crdnsCdNm\" combodataset=\"dsCrdnsCd\" combodatacol=\"data\" combocodecol=\"code\" displaytype=\"normal\"/><Cell col=\"42\" text=\"bind:haPartyRealtAccmnArea\" displaytype=\"normal\"/><Cell col=\"43\" text=\"bind:lwvgt\" displaytype=\"normal\"/><Cell col=\"44\" text=\"bind:spcfcFoprdNm\" displaytype=\"normal\"/><Cell col=\"45\" text=\"bind:bizBckgrCn\" displaytype=\"normal\"/><Cell col=\"46\" text=\"bind:jobDirctCn\" displaytype=\"normal\"/><Cell col=\"47\" text=\"bind:sbltHstry\" displaytype=\"normal\"/><Cell col=\"48\" text=\"bind:mngMttr\" displaytype=\"normal\"/><Cell col=\"49\" text=\"bind:addtnMttr\" displaytype=\"normal\"/><Cell col=\"50\" text=\"bind:seedPckngPsbltyYn\" displaytype=\"normal\"/><Cell col=\"51\" text=\"bind:koftrCdNm1\" displaytype=\"normal\"/><Cell col=\"52\" text=\"bind:mixtrRt1\" displaytype=\"normal\"/><Cell col=\"53\" text=\"bind:mnmmFrag1\" displaytype=\"normal\"/><Cell col=\"54\" text=\"bind:avrgFrag1\" displaytype=\"normal\"/><Cell col=\"55\" text=\"bind:mxmmFrag1\" displaytype=\"normal\"/><Cell col=\"56\" text=\"bind:lowstTrhgh1\" displaytype=\"normal\"/><Cell col=\"57\" text=\"bind:avrgTrhgh1\" displaytype=\"normal\"/><Cell col=\"58\" text=\"bind:topTrhgh1\" displaytype=\"normal\"/><Cell col=\"59\" text=\"bind:mainKoftrMnmmDmtr1\" displaytype=\"normal\"/><Cell col=\"60\" text=\"bind:avrgDmtr1\" displaytype=\"normal\"/><Cell col=\"61\" text=\"bind:mainKoftrMxmmDmtr1\" displaytype=\"normal\"/><Cell col=\"62\" text=\"bind:koftrCdNm2\" displaytype=\"normal\"/><Cell col=\"63\" text=\"bind:mixtrRt2\" displaytype=\"normal\"/><Cell col=\"64\" text=\"bind:mnmmFrag2\" displaytype=\"normal\"/><Cell col=\"65\" text=\"bind:avrgFrag2\" displaytype=\"normal\"/><Cell col=\"66\" text=\"bind:mxmmFrag2\" displaytype=\"normal\"/><Cell col=\"67\" text=\"bind:lowstTrhgh2\" displaytype=\"normal\"/><Cell col=\"68\" text=\"bind:avrgTrhgh2\" displaytype=\"normal\"/><Cell col=\"69\" text=\"bind:topTrhgh2\" displaytype=\"normal\"/><Cell col=\"70\" text=\"bind:mainKoftrMnmmDmtr2\" displaytype=\"normal\"/><Cell col=\"71\" text=\"bind:avrgDmtr2\" displaytype=\"normal\"/><Cell col=\"72\" text=\"bind:mainKoftrMxmmDmtr2\" displaytype=\"normal\"/><Cell col=\"73\" text=\"bind:koftrCdNm3\" displaytype=\"normal\"/><Cell col=\"74\" text=\"bind:mixtrRt3\" displaytype=\"normal\"/><Cell col=\"75\" text=\"bind:mnmmFrag3\" displaytype=\"normal\"/><Cell col=\"76\" text=\"bind:avrgFrag3\" displaytype=\"normal\"/><Cell col=\"77\" text=\"bind:mxmmFrag3\" displaytype=\"normal\"/><Cell col=\"78\" text=\"bind:lowstTrhgh3\" displaytype=\"normal\"/><Cell col=\"79\" text=\"bind:avrgTrhgh3\" displaytype=\"normal\"/><Cell col=\"80\" text=\"bind:topTrhgh3\" displaytype=\"normal\"/><Cell col=\"81\" text=\"bind:mainKoftrMnmmDmtr3\" displaytype=\"normal\"/><Cell col=\"82\" text=\"bind:avrgDmtr3\" displaytype=\"normal\"/><Cell col=\"83\" text=\"bind:mainKoftrMxmmDmtr3\" displaytype=\"normal\"/><Cell col=\"84\" text=\"bind:koftrCdNm4\" displaytype=\"normal\"/><Cell col=\"85\" text=\"bind:mixtrRt4\" displaytype=\"normal\"/><Cell col=\"86\" text=\"bind:mnmmFrag4\" displaytype=\"normal\"/><Cell col=\"87\" text=\"bind:avrgFrag4\" displaytype=\"normal\"/><Cell col=\"88\" text=\"bind:mxmmFrag4\" displaytype=\"normal\"/><Cell col=\"89\" text=\"bind:lowstTrhgh4\" displaytype=\"normal\"/><Cell col=\"90\" text=\"bind:avrgTrhgh4\" displaytype=\"normal\"/><Cell col=\"91\" text=\"bind:topTrhgh4\" displaytype=\"normal\"/><Cell col=\"92\" text=\"bind:mainKoftrMnmmDmtr4\" displaytype=\"normal\"/><Cell col=\"93\" text=\"bind:avrgDmtr4\" displaytype=\"normal\"/><Cell col=\"94\" text=\"bind:mainKoftrMxmmDmtr4\" displaytype=\"normal\"/><Cell col=\"95\" text=\"bind:koftrCdNm5\" displaytype=\"normal\"/><Cell col=\"96\" text=\"bind:mixtrRt5\" displaytype=\"normal\"/><Cell col=\"97\" text=\"bind:mnmmFrag5\" displaytype=\"normal\"/><Cell col=\"98\" text=\"bind:avrgFrag5\" displaytype=\"normal\"/><Cell col=\"99\" text=\"bind:mxmmFrag5\" displaytype=\"normal\"/><Cell col=\"100\" text=\"bind:lowstTrhgh5\" displaytype=\"normal\"/><Cell col=\"101\" text=\"bind:avrgTrhgh5\" displaytype=\"normal\"/><Cell col=\"102\" text=\"bind:topTrhgh5\" displaytype=\"normal\"/><Cell col=\"103\" text=\"bind:mainKoftrMnmmDmtr5\" displaytype=\"normal\"/><Cell col=\"104\" text=\"bind:avrgDmtr5\" displaytype=\"normal\"/><Cell col=\"105\" text=\"bind:mainKoftrMxmmDmtr5\" displaytype=\"normal\"/><Cell col=\"106\" text=\"bind:koftrCdNm6\" displaytype=\"normal\"/><Cell col=\"107\" text=\"bind:mixtrRt6\" displaytype=\"normal\"/><Cell col=\"108\" text=\"bind:mnmmFrag6\" displaytype=\"normal\"/><Cell col=\"109\" text=\"bind:avrgFrag6\" displaytype=\"normal\"/><Cell col=\"110\" text=\"bind:mxmmFrag6\" displaytype=\"normal\"/><Cell col=\"111\" text=\"bind:lowstTrhgh6\" displaytype=\"normal\"/><Cell col=\"112\" text=\"bind:avrgTrhgh6\" displaytype=\"normal\"/><Cell col=\"113\" text=\"bind:topTrhgh6\" displaytype=\"normal\"/><Cell col=\"114\" text=\"bind:mainKoftrMnmmDmtr6\" displaytype=\"normal\"/><Cell col=\"115\" text=\"bind:avrgDmtr6\" displaytype=\"normal\"/><Cell col=\"116\" text=\"bind:mainKoftrMxmmDmtr6\" displaytype=\"normal\"/><Cell col=\"117\" text=\"bind:koftrCdNm7\" displaytype=\"normal\"/><Cell col=\"118\" text=\"bind:mixtrRt7\" displaytype=\"normal\"/><Cell col=\"119\" text=\"bind:mnmmFrag7\" displaytype=\"normal\"/><Cell col=\"120\" text=\"bind:avrgFrag7\" displaytype=\"normal\"/><Cell col=\"121\" text=\"bind:mxmmFrag7\" displaytype=\"normal\"/><Cell col=\"122\" text=\"bind:lowstTrhgh7\" displaytype=\"normal\"/><Cell col=\"123\" text=\"bind:avrgTrhgh7\" displaytype=\"normal\"/><Cell col=\"124\" text=\"bind:topTrhgh7\" displaytype=\"normal\"/><Cell col=\"125\" text=\"bind:mainKoftrMnmmDmtr7\" displaytype=\"normal\"/><Cell col=\"126\" text=\"bind:avrgDmtr7\" displaytype=\"normal\"/><Cell col=\"127\" text=\"bind:mainKoftrMxmmDmtr7\" displaytype=\"normal\"/><Cell col=\"128\" text=\"bind:koftrCdNm8\" displaytype=\"normal\"/><Cell col=\"129\" text=\"bind:mixtrRt8\" displaytype=\"normal\"/><Cell col=\"130\" text=\"bind:mnmmFrag8\" displaytype=\"normal\"/><Cell col=\"131\" text=\"bind:avrgFrag8\" displaytype=\"normal\"/><Cell col=\"132\" text=\"bind:mxmmFrag8\" displaytype=\"normal\"/><Cell col=\"133\" text=\"bind:lowstTrhgh8\" displaytype=\"normal\"/><Cell col=\"134\" text=\"bind:avrgTrhgh8\" displaytype=\"normal\"/><Cell col=\"135\" text=\"bind:topTrhgh8\" displaytype=\"normal\"/><Cell col=\"136\" text=\"bind:mainKoftrMnmmDmtr8\" displaytype=\"normal\"/><Cell col=\"137\" text=\"bind:avrgDmtr8\" displaytype=\"normal\"/><Cell col=\"138\" text=\"bind:mainKoftrMxmmDmtr8\" displaytype=\"normal\"/><Cell col=\"139\" text=\"bind:koftrCdNm9\" displaytype=\"normal\"/><Cell col=\"140\" text=\"bind:mixtrRt9\" displaytype=\"normal\"/><Cell col=\"141\" text=\"bind:mnmmFrag9\" displaytype=\"normal\"/><Cell col=\"142\" text=\"bind:avrgFrag9\" displaytype=\"normal\"/><Cell col=\"143\" text=\"bind:mxmmFrag9\" displaytype=\"normal\"/><Cell col=\"144\" text=\"bind:lowstTrhgh9\" displaytype=\"normal\"/><Cell col=\"145\" text=\"bind:avrgTrhgh9\" displaytype=\"normal\"/><Cell col=\"146\" text=\"bind:topTrhgh9\" displaytype=\"normal\"/><Cell col=\"147\" text=\"bind:mainKoftrMnmmDmtr9\" displaytype=\"normal\"/><Cell col=\"148\" text=\"bind:avrgDmtr9\" displaytype=\"normal\"/><Cell col=\"149\" text=\"bind:mainKoftrMxmmDmtr9\" displaytype=\"normal\"/><Cell col=\"150\" text=\"bind:koftrCdNm10\" displaytype=\"normal\"/><Cell col=\"151\" text=\"bind:mixtrRt10\" displaytype=\"normal\"/><Cell col=\"152\" text=\"bind:mnmmFrag10\" displaytype=\"normal\"/><Cell col=\"153\" text=\"bind:avrgFrag10\" displaytype=\"normal\"/><Cell col=\"154\" text=\"bind:mxmmFrag10\" displaytype=\"normal\"/><Cell col=\"155\" text=\"bind:lowstTrhgh10\" displaytype=\"normal\"/><Cell col=\"156\" text=\"bind:avrgTrhgh10\" displaytype=\"normal\"/><Cell col=\"157\" text=\"bind:topTrhgh10\" displaytype=\"normal\"/><Cell col=\"158\" text=\"bind:mainKoftrMnmmDmtr10\" displaytype=\"normal\"/><Cell col=\"159\" text=\"bind:avrgDmtr10\" displaytype=\"normal\"/><Cell col=\"160\" text=\"bind:mainKoftrMxmmDmtr10\" displaytype=\"normal\"/><Cell col=\"161\" text=\"bind:mthrSbltHstry1\" displaytype=\"normal\"/><Cell col=\"162\" text=\"bind:mthrSbltHstry2\" displaytype=\"normal\"/><Cell col=\"163\" text=\"bind:mthrSbltHstry3\" displaytype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdAffrsExcelPlan","127","790","40","40",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_binddataset("dsAffrsExcelList");
            obj.set_taborder("9");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("none");
            obj.set_nodatatext("조회결과가 없습니다.");
            obj.set_cssclass("grd_display");
            obj.set_fillareatype("allrow");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/></Columns><Rows><Row size=\"36\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"임반\" background=\"darkorange\"/><Cell col=\"1\" text=\"소반\" background=\"darkorange\"/><Cell col=\"2\" text=\"종별\" background=\"darkorange\"/><Cell col=\"3\" text=\"시급성\" background=\"darkorange\"/><Cell col=\"4\" text=\"면적(㏊)\" background=\"darkorange\"/><Cell col=\"5\" text=\"수종\" background=\"darkorange\"/><Cell col=\"6\" text=\"본수(본)\" background=\"darkorange\"/><Cell col=\"7\" text=\"조림사유\" background=\"darkorange\"/><Cell col=\"8\" text=\"노동력(명)\" background=\"darkorange\"/><Cell col=\"9\" text=\"사업(천원)\" background=\"darkorange\"/></Band><Band id=\"body\"><Cell text=\"bind:cmblcId\"/><Cell col=\"1\" text=\"bind:sbltId\"/><Cell col=\"2\" text=\"bind:bizKindCdNm\"/><Cell col=\"3\" text=\"bind:urgntCdNm\"/><Cell col=\"4\" text=\"bind:bizArea\"/><Cell col=\"5\" text=\"bind:koftrCdNm\"/><Cell col=\"6\" text=\"bind:bizQntt\"/><Cell col=\"7\" text=\"bind:bizRsnCdNm\"/><Cell col=\"8\" text=\"bind:bizLbper\"/><Cell col=\"9\" text=\"bind:bizAmt\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFrestGrdnnExcelPlan","125","840","40","40",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_binddataset("dsFrestGrdnnExcelList");
            obj.set_taborder("10");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("none");
            obj.set_nodatatext("조회결과가 없습니다.");
            obj.set_cssclass("grd_display");
            obj.set_fillareatype("allrow");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/></Columns><Rows><Row size=\"36\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"임반\" background=\"darkorange\"/><Cell col=\"1\" text=\"소반\" background=\"darkorange\"/><Cell col=\"2\" text=\"종별\" background=\"darkorange\"/><Cell col=\"3\" text=\"시급성\" background=\"darkorange\"/><Cell col=\"4\" text=\"면적(㏊)\" background=\"darkorange\"/><Cell col=\"5\" text=\"횟수\" background=\"darkorange\"/><Cell col=\"6\" text=\"누적면적(㏊)\" background=\"darkorange\"/><Cell col=\"7\" text=\"노동력(명)\" background=\"darkorange\"/><Cell col=\"8\" text=\"사업(천원)\" background=\"darkorange\"/></Band><Band id=\"body\"><Cell text=\"bind:cmblcId\"/><Cell col=\"1\" text=\"bind:sbltId\"/><Cell col=\"2\" text=\"bind:bizKindCdNm\"/><Cell col=\"3\" text=\"bind:urgntCdNm\"/><Cell col=\"4\" text=\"bind:bizArea\"/><Cell col=\"5\" text=\"bind:bizQntt\"/><Cell col=\"6\" text=\"bind:bizAccmlArea\"/><Cell col=\"7\" text=\"bind:bizLbper\"/><Cell col=\"8\" text=\"bind:bizAmt\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFrtrePrdctnExcelPlan","124","886","40","40",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_binddataset("dsFrtrePrdctnExcelList");
            obj.set_taborder("11");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("none");
            obj.set_nodatatext("조회결과가 없습니다.");
            obj.set_cssclass("grd_display");
            obj.set_fillareatype("allrow");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"400\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/></Columns><Rows><Row size=\"36\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"임반\" background=\"darkorange\"/><Cell col=\"1\" text=\"소반\" background=\"darkorange\"/><Cell col=\"2\" text=\"종별\" background=\"darkorange\"/><Cell col=\"3\" text=\"시급성\" background=\"darkorange\"/><Cell col=\"4\" text=\"면적(㏊)\" background=\"darkorange\"/><Cell col=\"5\" text=\"목재수확종\" background=\"darkorange\"/><Cell col=\"6\" text=\"목재수확률(%)\" background=\"darkorange\"/><Cell col=\"7\" text=\"수종 및 목재수확재적\" background=\"darkorange\"/><Cell col=\"8\" text=\"총재적\" background=\"darkorange\"/><Cell col=\"9\" text=\"생산방법\" background=\"darkorange\"/><Cell col=\"10\" text=\"노동력(명)\" background=\"darkorange\"/><Cell col=\"11\" text=\"사업(천원)\" background=\"darkorange\"/></Band><Band id=\"body\"><Cell text=\"bind:cmblcId\"/><Cell col=\"1\" text=\"bind:sbltId\"/><Cell col=\"2\" text=\"bind:bizKindCdNm\"/><Cell col=\"3\" text=\"bind:urgntCdNm\"/><Cell col=\"4\" text=\"bind:bizArea\"/><Cell col=\"5\" text=\"bind:frtrePrdctnAssrtTpcdNm\"/><Cell col=\"6\" text=\"bind:frtrePrdctnFellyRt\"/><Cell col=\"7\" text=\"bind:koftrCdWdvlmNm\"/><Cell col=\"8\" text=\"bind:bizPrdctnWdvlmTot\"/><Cell col=\"9\" text=\"bind:prdctnMthdCdNm\"/><Cell col=\"10\" text=\"bind:bizLbper\"/><Cell col=\"11\" text=\"bind:bizAmt\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFcltExcelPlan","185","788","40","40",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_binddataset("dsFcltExcelList");
            obj.set_taborder("12");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("none");
            obj.set_nodatatext("조회결과가 없습니다.");
            obj.set_cssclass("grd_display");
            obj.set_fillareatype("allrow");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/></Columns><Rows><Row size=\"36\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"임반\" background=\"darkorange\"/><Cell col=\"1\" text=\"소반\" background=\"darkorange\"/><Cell col=\"2\" text=\"종별\" background=\"darkorange\"/><Cell col=\"3\" text=\"시급성\" background=\"darkorange\"/><Cell col=\"4\" text=\"물량\" background=\"darkorange\"/><Cell col=\"5\" text=\"노동력(명)\" background=\"darkorange\"/><Cell col=\"6\" text=\"사업(천원)\" background=\"darkorange\"/></Band><Band id=\"body\"><Cell text=\"bind:cmblcId\"/><Cell col=\"1\" text=\"bind:sbltId\"/><Cell col=\"2\" text=\"bind:bizKindCdNm\"/><Cell col=\"3\" text=\"bind:urgntCdNm\"/><Cell col=\"4\" text=\"bind:bizQntt\"/><Cell col=\"5\" text=\"bind:bizLbper\"/><Cell col=\"6\" text=\"bind:bizAmt\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdEarnExcelPlan","185","834","40","40",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_binddataset("dsEarnExcelList");
            obj.set_taborder("13");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("none");
            obj.set_nodatatext("조회결과가 없습니다.");
            obj.set_cssclass("grd_display");
            obj.set_fillareatype("allrow");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/></Columns><Rows><Row size=\"36\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"임반\" background=\"darkorange\"/><Cell col=\"1\" text=\"소반\" background=\"darkorange\"/><Cell col=\"2\" text=\"종별\" background=\"darkorange\"/><Cell col=\"3\" text=\"시급성\" background=\"darkorange\"/><Cell col=\"4\" text=\"기타소득\" background=\"darkorange\"/><Cell col=\"5\" text=\"생산량\" background=\"darkorange\"/><Cell col=\"6\" text=\"노동력(명)\" background=\"darkorange\"/><Cell col=\"7\" text=\"사업(천원)\" background=\"darkorange\"/></Band><Band id=\"body\"><Cell text=\"bind:cmblcId\"/><Cell col=\"1\" text=\"bind:sbltId\"/><Cell col=\"2\" text=\"bind:bizKindCdNm\"/><Cell col=\"3\" text=\"bind:urgntCdNm\"/><Cell col=\"4\" text=\"bind:bizEtcKindNm\"/><Cell col=\"5\" text=\"bind:bizQntt\"/><Cell col=\"6\" text=\"bind:bizLbper\"/><Cell col=\"7\" text=\"bind:bizAmt\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdWplbkForDwnld","35","960","471","60",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_taborder("14");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("none");
            obj.set_nodatatext("조회결과가 없습니다.");
            obj.set_cssclass("grd_display");
            obj.set_fillareatype("allrow");
            obj.set_scrollbartype("none none");
            obj.set_binddataset("dsWplbkExcelDwlndList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"251\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"200\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"300\"/><Column size=\"300\"/><Column size=\"300\"/><Column size=\"300\"/><Column size=\"70\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"70\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"70\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"70\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"70\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/></Columns><Rows><Row size=\"36\" band=\"head\"/><Row size=\"36\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"임반\" background=\"#b2e5c7\"/><Cell col=\"1\" rowspan=\"2\" text=\"소반\" background=\"#b2e5c7\"/><Cell col=\"2\" colspan=\"2\" text=\"임반\" background=\"#b2e5c7\"/><Cell col=\"4\" rowspan=\"2\" text=\"소재지\" background=\"#b2e5c7\"/><Cell col=\"5\" rowspan=\"2\" text=\"특수림\" background=\"#b2e5c7\"/><Cell col=\"6\" rowspan=\"2\" text=\"특수림 세부사항\" wordWrap=\"char\" background=\"#b2e5c7\"/><Cell col=\"7\" colspan=\"3\" text=\"면적\" background=\"#b2e5c7\"/><Cell col=\"10\" colspan=\"6\" text=\"기능별\" background=\"#b2e5c7\"/><Cell col=\"16\" rowspan=\"2\" text=\"법정지정림\" background=\"#b2e5c7\"/><Cell col=\"17\" rowspan=\"2\" text=\"목표수종\" background=\"#b2e5c7\"/><Cell col=\"18\" rowspan=\"2\" text=\"목표임상\" background=\"#b2e5c7\"/><Cell col=\"19\" rowspan=\"2\" text=\"방위\" background=\"#b2e5c7\"/><Cell col=\"20\" rowspan=\"2\" text=\"경사도\" background=\"#b2e5c7\"/><Cell col=\"21\" rowspan=\"2\" text=\"표고 최저\" background=\"#b2e5c7\"/><Cell col=\"22\" rowspan=\"2\" text=\"표고 최대\" background=\"#b2e5c7\"/><Cell col=\"23\" rowspan=\"2\" text=\"토양형\" background=\"#b2e5c7\"/><Cell col=\"24\" rowspan=\"2\" text=\"유효토심\" background=\"#b2e5c7\"/><Cell col=\"25\" rowspan=\"2\" text=\"건습도\" background=\"#b2e5c7\"/><Cell col=\"26\" rowspan=\"2\" text=\"지리\" background=\"#b2e5c7\"/><Cell col=\"27\" rowspan=\"2\" text=\"지위지수\" background=\"#b2e5c7\"/><Cell col=\"28\" rowspan=\"2\" text=\"우세목 수고\" background=\"#b2e5c7\"/><Cell col=\"29\" rowspan=\"2\" text=\"우세목 임령\" background=\"#b2e5c7\"/><Cell col=\"30\" rowspan=\"2\" text=\"임종\" background=\"#b2e5c7\"/><Cell col=\"31\" rowspan=\"2\" text=\"임상\" background=\"#b2e5c7\"/><Cell col=\"32\" rowspan=\"2\" text=\"소밀도\" background=\"#b2e5c7\"/><Cell col=\"33\" colspan=\"11\" text=\"주요수종\" background=\"#b2e5c7\"/><Cell col=\"44\" rowspan=\"2\" text=\"현실축적(㎥/㏊)\" wordWrap=\"char\" background=\"#b2e5c7\"/><Cell col=\"45\" rowspan=\"2\" text=\"현실축적총합(㎥)\" wordWrap=\"char\" background=\"#b2e5c7\"/><Cell col=\"46\" rowspan=\"2\" text=\"법정축적(㎥/㏊)\" wordWrap=\"char\" background=\"#b2e5c7\"/><Cell col=\"47\" rowspan=\"2\" text=\"법정축적총합(㎥)\" wordWrap=\"char\" background=\"#b2e5c7\"/><Cell col=\"48\" rowspan=\"2\" text=\"연년생장량(㎥/㏊)\" wordWrap=\"char\" background=\"#b2e5c7\"/><Cell col=\"49\" rowspan=\"2\" text=\"연년생장량총합(㎥)\" wordWrap=\"char\" background=\"#b2e5c7\"/><Cell col=\"50\" rowspan=\"2\" text=\"연년생장율(%)\" background=\"#b2e5c7\"/><Cell col=\"51\" rowspan=\"2\" text=\"하층식생\" background=\"#b2e5c7\"/><Cell col=\"52\" rowspan=\"2\" text=\"특정임산물\" background=\"#b2e5c7\"/><Cell col=\"53\" rowspan=\"2\" text=\"종자채취종류\" background=\"#b2e5c7\"/><Cell col=\"54\" rowspan=\"2\" text=\"종자채취수종\" background=\"#b2e5c7\"/><Cell col=\"55\" rowspan=\"2\" text=\"종자채취가능량\" background=\"#b2e5c7\"/><Cell col=\"56\" rowspan=\"2\" text=\"사업계획 수립배경\" background=\"#b2e5c7\"/><Cell col=\"57\" rowspan=\"2\" text=\"작업지시서\" background=\"#b2e5c7\"/><Cell col=\"58\" rowspan=\"2\" text=\"소반연혁\" background=\"#b2e5c7\"/><Cell col=\"59\" rowspan=\"2\" text=\"관리사항\" background=\"#b2e5c7\"/><Cell col=\"60\" colspan=\"5\" text=\"생장분석[조사시점]\" background=\"#b2e5c7\"/><Cell col=\"65\" colspan=\"5\" text=\"생장분석[5년후]\" background=\"#b2e5c7\"/><Cell col=\"70\" colspan=\"5\" text=\"생장분석[10년후]\" background=\"#b2e5c7\"/><Cell col=\"75\" colspan=\"5\" text=\"생장분석[15년후]\" background=\"#b2e5c7\"/><Cell col=\"80\" colspan=\"5\" text=\"생장분석[20년후]\" background=\"#b2e5c7\"/><Cell row=\"1\" col=\"2\" text=\"X\" background=\"#b2e5c7\"/><Cell row=\"1\" col=\"3\" text=\"Y\" background=\"#b2e5c7\"/><Cell row=\"1\" col=\"7\" text=\"입목지\" background=\"#b2e5c7\"/><Cell row=\"1\" col=\"8\" text=\"미립목지\" background=\"#b2e5c7\"/><Cell row=\"1\" col=\"9\" text=\"제지\" background=\"#b2e5c7\"/><Cell row=\"1\" col=\"10\" text=\"생활환경 보전림\" background=\"#b2e5c7\"/><Cell row=\"1\" col=\"11\" text=\"자연환경 보전림\" background=\"#b2e5c7\"/><Cell row=\"1\" col=\"12\" text=\"수원 함양림\" background=\"#b2e5c7\"/><Cell row=\"1\" col=\"13\" text=\"산지재해 방지림\" background=\"#b2e5c7\"/><Cell row=\"1\" col=\"14\" text=\"산림 휴양림\" background=\"#b2e5c7\"/><Cell row=\"1\" col=\"15\" text=\"목재 생산림\" background=\"#b2e5c7\"/><Cell row=\"1\" col=\"33\" text=\"수종\" background=\"#b2e5c7\"/><Cell row=\"1\" col=\"34\" text=\"혼효율\" background=\"#b2e5c7\"/><Cell row=\"1\" col=\"35\" text=\"최저임령\" background=\"#b2e5c7\"/><Cell row=\"1\" col=\"36\" text=\"평균임령\" background=\"#b2e5c7\"/><Cell row=\"1\" col=\"37\" text=\"최대임령\" background=\"#b2e5c7\"/><Cell row=\"1\" col=\"38\" text=\"최소수고\" background=\"#b2e5c7\"/><Cell row=\"1\" col=\"39\" text=\"평균수고\" background=\"#b2e5c7\"/><Cell row=\"1\" col=\"40\" text=\"최대수고\" background=\"#b2e5c7\"/><Cell row=\"1\" col=\"41\" text=\"최소경급\" background=\"#b2e5c7\"/><Cell row=\"1\" col=\"42\" text=\"평균경급\" background=\"#b2e5c7\"/><Cell row=\"1\" col=\"43\" text=\"최대경급\" background=\"#b2e5c7\"/><Cell row=\"1\" col=\"60\" text=\"년도\" background=\"#b2e5c7\"/><Cell row=\"1\" col=\"61\" text=\"생장률 기준 총축적(㎥)\" background=\"#b2e5c7\"/><Cell row=\"1\" col=\"62\" text=\"생장률 기준 축적(㎥)\" background=\"#b2e5c7\"/><Cell row=\"1\" col=\"63\" text=\"생장모델 총축적(㎥)\" background=\"#b2e5c7\"/><Cell row=\"1\" col=\"64\" text=\"생장모델 축적(㎥)\" background=\"#b2e5c7\"/><Cell row=\"1\" col=\"65\" text=\"년도\" background=\"#b2e5c7\"/><Cell row=\"1\" col=\"66\" text=\"생장률 기준 총축적(㎥)\" background=\"#b2e5c7\"/><Cell row=\"1\" col=\"67\" text=\"생장률 기준 축적(㎥)\" background=\"#b2e5c7\"/><Cell row=\"1\" col=\"68\" text=\"생장모델 총축적(㎥)\" background=\"#b2e5c7\"/><Cell row=\"1\" col=\"69\" text=\"생장모델 축적(㎥)\" background=\"#b2e5c7\"/><Cell row=\"1\" col=\"70\" text=\"년도\" background=\"#b2e5c7\"/><Cell row=\"1\" col=\"71\" text=\"생장률 기준 총축적(㎥)\" background=\"#b2e5c7\"/><Cell row=\"1\" col=\"72\" text=\"생장률 기준 축적(㎥)\" background=\"#b2e5c7\"/><Cell row=\"1\" col=\"73\" text=\"생장모델 총축적(㎥)\" background=\"#b2e5c7\"/><Cell row=\"1\" col=\"74\" text=\"생장모델 축적(㎥)\" background=\"#b2e5c7\"/><Cell row=\"1\" col=\"75\" text=\"년도\" background=\"#b2e5c7\"/><Cell row=\"1\" col=\"76\" text=\"생장률 기준 총축적(㎥)\" background=\"#b2e5c7\"/><Cell row=\"1\" col=\"77\" text=\"생장률 기준 축적(㎥)\" background=\"#b2e5c7\"/><Cell row=\"1\" col=\"78\" text=\"생장모델 총축적(㎥)\" background=\"#b2e5c7\"/><Cell row=\"1\" col=\"79\" text=\"생장모델 축적(㎥)\" background=\"#b2e5c7\"/><Cell row=\"1\" col=\"80\" text=\"년도\" background=\"#b2e5c7\"/><Cell row=\"1\" col=\"81\" text=\"생장률 기준 총축적(㎥)\" background=\"#b2e5c7\"/><Cell row=\"1\" col=\"82\" text=\"생장률 기준 축적(㎥)\" background=\"#b2e5c7\"/><Cell row=\"1\" col=\"83\" text=\"생장모델 총축적(㎥)\" background=\"#b2e5c7\"/><Cell row=\"1\" col=\"84\" text=\"생장모델 축적(㎥)\" background=\"#b2e5c7\"/></Band><Band id=\"body\"><Cell text=\"bind:cmblcId\"/><Cell col=\"1\" text=\"bind:sbltId\"/><Cell col=\"2\" text=\"bind:sbltGpsXcrd\"/><Cell col=\"3\" text=\"bind:sbltGpsYcrd\"/><Cell col=\"4\" text=\"bind:lctnDaddr\"/><Cell col=\"5\" text=\"bind:spwodKindCdNm\"/><Cell col=\"6\" text=\"bind:spwodDetlKindCdNm\"/><Cell col=\"7\" text=\"bind:stlndArea\"/><Cell col=\"8\" text=\"bind:blankArea\"/><Cell col=\"9\" text=\"bind:nfrtldArea\"/><Cell col=\"10\" text=\"bind:lfenvFrsrsrSkillTpcd\"/><Cell col=\"11\" text=\"bind:ntrEnvrnFrsrsrSkillTpcd\"/><Cell col=\"12\" text=\"bind:crparSkillTpcd\"/><Cell col=\"13\" text=\"bind:dprrsSkillTpcd\"/><Cell col=\"14\" text=\"bind:mnfrsRcrfrSkillTpcd\"/><Cell col=\"15\" text=\"bind:tmbrPdfrtSkillTpcd\"/><Cell col=\"16\" text=\"bind:sttyApwodCdNm\"/><Cell col=\"17\" text=\"bind:goalKoftrCdNm\"/><Cell col=\"18\" text=\"bind:goalFrtpCn\"/><Cell col=\"19\" text=\"bind:orbrnCdNm\"/><Cell col=\"20\" text=\"bind:grdntCdNm\"/><Cell col=\"21\" text=\"bind:alttdMnmmVl\"/><Cell col=\"22\" text=\"bind:alttdMxmmVl\"/><Cell col=\"23\" text=\"bind:mnfrsExmnScstxCdNm\"/><Cell col=\"24\" text=\"bind:vldSldptTpcdNm\"/><Cell col=\"25\" text=\"bind:hgdgrTpcdNm\"/><Cell col=\"26\" text=\"bind:mnfrsExmnGgrphCdNm\"/><Cell col=\"27\" text=\"bind:mnfrsExmnStind\"/><Cell col=\"28\" text=\"bind:dmtreTrhgh\"/><Cell col=\"29\" text=\"bind:dmtreFrag\"/><Cell col=\"30\" text=\"bind:frorCdNm\"/><Cell col=\"31\" text=\"bind:frtpTpcdNm\"/><Cell col=\"32\" text=\"bind:crdnsCdNm\"/><Cell col=\"33\" text=\"bind:koftrCdNm\"/><Cell col=\"34\" text=\"bind:mixtrRt\"/><Cell col=\"35\" text=\"bind:mnmmFrag\"/><Cell col=\"36\" text=\"bind:avrgFrag\"/><Cell col=\"37\" text=\"bind:mxmmFrag\"/><Cell col=\"38\" text=\"bind:lowstTrhgh\"/><Cell col=\"39\" text=\"bind:avrgTrhgh\"/><Cell col=\"40\" text=\"bind:topTrhgh\"/><Cell col=\"41\" text=\"bind:mainKoftrMnmmDmtr\"/><Cell col=\"42\" text=\"bind:avrgDmtr\"/><Cell col=\"43\" text=\"bind:mainKoftrMxmmDmtr\"/><Cell col=\"44\" text=\"bind:realtAccmnTotl\"/><Cell col=\"45\" text=\"bind:realtAccmnTotlSum\"/><Cell col=\"46\" text=\"bind:sttyAccmnTotl\"/><Cell col=\"47\" text=\"bind:sttyAccmnTotlSum\"/><Cell col=\"48\" text=\"bind:caninTotl\"/><Cell col=\"49\" text=\"bind:caninTotlSum\"/><Cell col=\"50\" text=\"bind:cairt\"/><Cell col=\"51\" text=\"bind:lwvgt\"/><Cell col=\"52\" text=\"bind:seedPckngPsbltyYn\"/><Cell col=\"53\" text=\"bind:sdgthTpcdNm\"/><Cell col=\"54\" text=\"bind:sdgthPsbltyQntt\"/><Cell col=\"55\" text=\"bind:sdgthKoftrCdNm\"/><Cell col=\"56\" text=\"bind:bizBckgrCn\"/><Cell col=\"57\" text=\"bind:jobDirctCn\"/><Cell col=\"58\" text=\"bind:sbltHstry\"/><Cell col=\"59\" text=\"bind:mngMttr\"/><Cell col=\"60\" text=\"bind:year1\"/><Cell col=\"61\" text=\"bind:caninTotlSum1\"/><Cell col=\"62\" text=\"bind:haPartyCanin1\"/><Cell col=\"63\" text=\"bind:modelCaninTotlSum1\"/><Cell col=\"64\" text=\"bind:modelHaPartyCanin1\"/><Cell col=\"65\" text=\"bind:year2\"/><Cell col=\"66\" text=\"bind:caninTotlSum2\"/><Cell col=\"67\" text=\"bind:haPartyCanin2\"/><Cell col=\"68\" text=\"bind:modelCaninTotlSum2\"/><Cell col=\"69\" text=\"bind:modelHaPartyCanin2\"/><Cell col=\"70\" text=\"bind:year3\"/><Cell col=\"71\" text=\"bind:caninTotlSum3\"/><Cell col=\"72\" text=\"bind:haPartyCanin3\"/><Cell col=\"73\" text=\"bind:modelCaninTotlSum3\"/><Cell col=\"74\" text=\"bind:modelHaPartyCanin3\"/><Cell col=\"75\" text=\"bind:year4\"/><Cell col=\"76\" text=\"bind:caninTotlSum4\"/><Cell col=\"77\" text=\"bind:haPartyCanin4\"/><Cell col=\"78\" text=\"bind:modelCaninTotlSum4\"/><Cell col=\"79\" text=\"bind:modelHaPartyCanin4\"/><Cell col=\"80\" text=\"bind:year5\"/><Cell col=\"81\" text=\"bind:caninTotlSum5\"/><Cell col=\"82\" text=\"bind:haPartyCanin5\"/><Cell col=\"83\" text=\"bind:modelCaninTotlSum5\"/><Cell col=\"84\" text=\"bind:modelHaPartyCanin5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdAffrsExcelPrfmnc","184","888","40","40",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_binddataset("dsAffrsExcelPrfmnc");
            obj.set_taborder("15");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("none");
            obj.set_nodatatext("조회결과가 없습니다.");
            obj.set_cssclass("grd_display");
            obj.set_fillareatype("allrow");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"119\"/><Column size=\"119\"/><Column size=\"80\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"180\"/><Column size=\"119\"/><Column size=\"119\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"35\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"임반\" background=\"darkorange\"/><Cell col=\"1\" rowspan=\"2\" text=\"소반\" background=\"darkorange\"/><Cell col=\"2\" rowspan=\"2\" text=\"연도\" background=\"darkorange\"/><Cell col=\"3\" rowspan=\"2\" text=\"종별\" background=\"darkorange\"/><Cell col=\"4\" rowspan=\"2\" text=\"면적(㏊)\" background=\"darkorange\"/><Cell col=\"5\" rowspan=\"2\" text=\"수종\" background=\"darkorange\"/><Cell col=\"6\" rowspan=\"2\" text=\"본수(본)\" background=\"darkorange\"/><Cell col=\"7\" rowspan=\"2\" text=\"조림사유\" background=\"darkorange\"/><Cell col=\"8\" rowspan=\"2\" text=\"노동력(명)\" background=\"darkorange\"/><Cell col=\"9\" colspan=\"2\" text=\"사업비(천원)\" background=\"darkorange\"/><Cell col=\"11\" colspan=\"3\" text=\"수입(천원)\" background=\"darkorange\"/><Cell row=\"1\" col=\"9\" text=\"지출액\" background=\"darkorange\"/><Cell row=\"1\" col=\"10\" text=\"지출일\" background=\"darkorange\"/><Cell row=\"1\" col=\"11\" text=\"수종 및 목재수확재적(m³)\" background=\"darkorange\"/><Cell row=\"1\" col=\"12\" text=\"수입액\" background=\"darkorange\"/><Cell row=\"1\" col=\"13\" text=\"수입일\" background=\"darkorange\"/></Band><Band id=\"body\"><Cell text=\"bind:cmblcId\"/><Cell col=\"1\" text=\"bind:sbltId\"/><Cell col=\"2\" text=\"bind:bizYr\"/><Cell col=\"3\" text=\"bind:bizKindCdNm\"/><Cell col=\"4\" text=\"bind:bizArea\"/><Cell col=\"5\" text=\"bind:koftrCdNm\"/><Cell col=\"6\" text=\"bind:bizQntt\"/><Cell col=\"7\" text=\"bind:bizRsnCdNm\"/><Cell col=\"8\" text=\"bind:bizLbper\"/><Cell col=\"9\" text=\"bind:bizAmt\"/><Cell col=\"10\" text=\"bind:expndDay\"/><Cell col=\"11\" text=\"bind:koftrCdWdvlmNm\"/><Cell col=\"12\" text=\"bind:incmAmt\"/><Cell col=\"13\" text=\"bind:incmDay\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFrestGrdnnExcelPrfmnc","245","788","40","40",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_binddataset("dsFrestGrdnnExcelPrfmnc");
            obj.set_taborder("16");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("none");
            obj.set_nodatatext("조회결과가 없습니다.");
            obj.set_cssclass("grd_display");
            obj.set_fillareatype("allrow");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"119\"/><Column size=\"119\"/><Column size=\"80\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"180\"/><Column size=\"119\"/><Column size=\"119\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"35\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"임반\" background=\"darkorange\"/><Cell col=\"1\" rowspan=\"2\" text=\"소반\" background=\"darkorange\"/><Cell col=\"2\" rowspan=\"2\" text=\"연도\" background=\"darkorange\"/><Cell col=\"3\" rowspan=\"2\" text=\"종별\" background=\"darkorange\"/><Cell col=\"4\" rowspan=\"2\" text=\"면적(㏊)\" background=\"darkorange\"/><Cell col=\"5\" rowspan=\"2\" text=\"횟수\" background=\"darkorange\"/><Cell col=\"6\" rowspan=\"2\" text=\"누적면적(㏊)\" background=\"darkorange\"/><Cell col=\"7\" rowspan=\"2\" text=\"노동력(명)\" background=\"darkorange\"/><Cell col=\"8\" colspan=\"2\" text=\"사업비(천원)\" background=\"darkorange\"/><Cell col=\"10\" colspan=\"3\" text=\"수입(천원)\" background=\"darkorange\"/><Cell row=\"1\" col=\"8\" text=\"지출액\" background=\"darkorange\"/><Cell row=\"1\" col=\"9\" text=\"지출일\" background=\"darkorange\"/><Cell row=\"1\" col=\"10\" text=\"수종 및 목재수확재적(m³)\" background=\"darkorange\"/><Cell row=\"1\" col=\"11\" text=\"수입액\" background=\"darkorange\"/><Cell row=\"1\" col=\"12\" text=\"수입일\" background=\"darkorange\"/></Band><Band id=\"body\"><Cell text=\"bind:cmblcId\"/><Cell col=\"1\" text=\"bind:sbltId\"/><Cell col=\"2\" text=\"bind:bizYr\"/><Cell col=\"3\" text=\"bind:bizKindCdNm\"/><Cell col=\"4\" text=\"bind:bizArea\"/><Cell col=\"5\" text=\"bind:bizQntt\"/><Cell col=\"6\" text=\"bind:bizAccmlArea\"/><Cell col=\"7\" text=\"bind:bizLbper\"/><Cell col=\"8\" text=\"bind:bizAmt\"/><Cell col=\"9\" text=\"bind:expndDay\"/><Cell col=\"10\" text=\"bind:koftrCdWdvlmNm\"/><Cell col=\"11\" text=\"bind:incmAmt\"/><Cell col=\"12\" text=\"bind:incmDay\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFrtrePrdctnExcelPrfmnc","245","836","40","40",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_binddataset("dsFrtrePrdctnExcelPrfmnc");
            obj.set_taborder("17");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("none");
            obj.set_nodatatext("조회결과가 없습니다.");
            obj.set_cssclass("grd_display");
            obj.set_fillareatype("allrow");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"119\"/><Column size=\"119\"/><Column size=\"80\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"400\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"35\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"임반\" background=\"darkorange\"/><Cell col=\"1\" rowspan=\"2\" text=\"소반\" background=\"darkorange\"/><Cell col=\"2\" rowspan=\"2\" text=\"연도\" background=\"darkorange\"/><Cell col=\"3\" rowspan=\"2\" text=\"종별\" background=\"darkorange\"/><Cell col=\"4\" rowspan=\"2\" text=\"면적(㏊)\" background=\"darkorange\"/><Cell col=\"5\" rowspan=\"2\" text=\"목재수확종\" background=\"darkorange\"/><Cell col=\"6\" rowspan=\"2\" text=\"목재수확률(%)\" background=\"darkorange\"/><Cell col=\"7\" rowspan=\"2\" text=\"수종 및 목재수확재적(m³)\" background=\"darkorange\"/><Cell col=\"8\" rowspan=\"2\" text=\"총재적(m³)\" background=\"darkorange\"/><Cell col=\"9\" rowspan=\"2\" text=\"생산방법\" background=\"darkorange\"/><Cell col=\"10\" rowspan=\"2\" text=\"노동력(명)\" background=\"darkorange\"/><Cell col=\"11\" colspan=\"2\" text=\"사업비(천원)\" background=\"darkorange\"/><Cell col=\"13\" colspan=\"2\" text=\"수입(천원)\" background=\"darkorange\"/><Cell row=\"1\" col=\"11\" text=\"지출액\" background=\"darkorange\"/><Cell row=\"1\" col=\"12\" text=\"지출일\" background=\"darkorange\"/><Cell row=\"1\" col=\"13\" text=\"수입액\" background=\"darkorange\"/><Cell row=\"1\" col=\"14\" text=\"수입일\" background=\"darkorange\"/></Band><Band id=\"body\"><Cell text=\"bind:cmblcId\"/><Cell col=\"1\" text=\"bind:sbltId\"/><Cell col=\"2\" text=\"bind:bizYr\"/><Cell col=\"3\" text=\"bind:bizKindCdNm\"/><Cell col=\"4\" text=\"bind:bizArea\"/><Cell col=\"5\" text=\"bind:frtrePrdctnAssrtTpcdNm\"/><Cell col=\"6\" text=\"bind:frtrePrdctnFellyRt\"/><Cell col=\"7\" text=\"bind:koftrCdWdvlmNm\"/><Cell col=\"8\" text=\"bind:bizPrdctnWdvlmTot\"/><Cell col=\"9\" text=\"bind:prdctnMthdCdNm\"/><Cell col=\"10\" text=\"bind:bizLbper\"/><Cell col=\"11\" text=\"bind:bizAmt\"/><Cell col=\"12\" text=\"bind:expndDay\"/><Cell col=\"13\" text=\"bind:incmAmt\"/><Cell col=\"14\" text=\"bind:incmDay\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFcltExcelPrfmnc","245","888","40","40",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_binddataset("dsFcltExcelPrfmnc");
            obj.set_taborder("18");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("none");
            obj.set_nodatatext("조회결과가 없습니다.");
            obj.set_cssclass("grd_display");
            obj.set_fillareatype("allrow");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"119\"/><Column size=\"119\"/><Column size=\"80\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"180\"/><Column size=\"119\"/><Column size=\"119\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"35\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"임반\" background=\"darkorange\"/><Cell col=\"1\" rowspan=\"2\" text=\"소반\" background=\"darkorange\"/><Cell col=\"2\" rowspan=\"2\" text=\"연도\" background=\"darkorange\"/><Cell col=\"3\" rowspan=\"2\" text=\"종별\" background=\"darkorange\"/><Cell col=\"4\" rowspan=\"2\" text=\"물량\" background=\"darkorange\"/><Cell col=\"5\" rowspan=\"2\" text=\"노동력(명)\" background=\"darkorange\"/><Cell col=\"6\" colspan=\"2\" text=\"사업비(천원)\" background=\"darkorange\"/><Cell col=\"8\" colspan=\"3\" background=\"darkorange\" text=\"수입(천원)\"/><Cell row=\"1\" col=\"6\" text=\"지출액\" background=\"darkorange\"/><Cell row=\"1\" col=\"7\" text=\"지출일\" background=\"darkorange\"/><Cell row=\"1\" col=\"8\" text=\"수종 및 목재수확재적(m³)\" background=\"darkorange\"/><Cell row=\"1\" col=\"9\" text=\"수입액\" background=\"darkorange\"/><Cell row=\"1\" col=\"10\" text=\"수입일\" background=\"darkorange\"/></Band><Band id=\"body\"><Cell text=\"bind:cmblcId\"/><Cell col=\"1\" text=\"bind:sbltId\"/><Cell col=\"2\" text=\"bind:bizYr\"/><Cell col=\"3\" text=\"bind:bizKindCdNm\"/><Cell col=\"4\" text=\"bind:bizQntt\"/><Cell col=\"5\" text=\"bind:bizLbper\"/><Cell col=\"6\" text=\"bind:bizAmt\"/><Cell col=\"7\" text=\"bind:expndDay\"/><Cell col=\"8\" text=\"bind:koftrCdWdvlmNm\"/><Cell col=\"9\" text=\"bind:incmAmt\"/><Cell col=\"10\" text=\"bind:incmDay\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdEarnExcelPrfmnc","307","890","40","40",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_binddataset("dsEarnExcelPrfmnc");
            obj.set_taborder("19");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("none");
            obj.set_nodatatext("조회결과가 없습니다.");
            obj.set_cssclass("grd_display");
            obj.set_fillareatype("allrow");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"119\"/><Column size=\"119\"/><Column size=\"80\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"35\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"임반\" background=\"darkorange\"/><Cell col=\"1\" rowspan=\"2\" text=\"소반\" background=\"darkorange\"/><Cell col=\"2\" rowspan=\"2\" text=\"연도\" background=\"darkorange\"/><Cell col=\"3\" rowspan=\"2\" text=\"종별\" background=\"darkorange\"/><Cell col=\"4\" rowspan=\"2\" text=\"기타소득\" background=\"darkorange\"/><Cell col=\"5\" rowspan=\"2\" text=\"생산량\" background=\"darkorange\"/><Cell col=\"6\" rowspan=\"2\" text=\"노동력(명)\" background=\"darkorange\"/><Cell col=\"7\" colspan=\"2\" text=\"사업비(천원)\" background=\"darkorange\"/><Cell col=\"9\" colspan=\"2\" text=\"수입(천원)\" background=\"darkorange\"/><Cell row=\"1\" col=\"7\" text=\"지출액\" background=\"darkorange\"/><Cell row=\"1\" col=\"8\" text=\"지출일\" background=\"darkorange\"/><Cell row=\"1\" col=\"9\" text=\"수입액\" background=\"darkorange\"/><Cell row=\"1\" col=\"10\" text=\"수입일\" background=\"darkorange\"/></Band><Band id=\"body\"><Cell text=\"bind:cmblcId\"/><Cell col=\"1\" text=\"bind:sbltId\"/><Cell col=\"2\" text=\"bind:bizYr\"/><Cell col=\"3\" text=\"bind:bizKindCdNm\"/><Cell col=\"4\" text=\"bind:bizEtcKindNm\"/><Cell col=\"5\" text=\"bind:bizQntt\"/><Cell col=\"6\" text=\"bind:bizLbper\"/><Cell col=\"7\" text=\"bind:bizAmt\"/><Cell col=\"8\" text=\"bind:expndDay\"/><Cell col=\"9\" text=\"bind:incmAmt\"/><Cell col=\"10\" text=\"bind:incmDay\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdRecovrExcelPrfmnc","305","834","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("grd_display");
            obj.set_binddataset("dsRecovrExcelPrfmnc");
            obj.set_autoenter("none");
            obj.set_autofittype("none");
            obj.set_scrollbartype("none none");
            obj.set_fillareatype("allrow");
            obj.set_extendsizetype("none");
            obj.set_autosizingtype("none");
            obj.set_border("1px solid #52aaa4,0px none,1px solid #e2e2e2");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"119\"/><Column size=\"119\"/><Column size=\"80\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"180\"/><Column size=\"119\"/><Column size=\"119\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"35\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"임반\" background=\"darkorange\"/><Cell col=\"1\" rowspan=\"2\" text=\"소반\" background=\"darkorange\"/><Cell col=\"2\" rowspan=\"2\" text=\"연도\" background=\"darkorange\"/><Cell col=\"3\" rowspan=\"2\" text=\"종별\" background=\"darkorange\"/><Cell col=\"4\" rowspan=\"2\" text=\"기타 복구종\" background=\"darkorange\"/><Cell col=\"5\" rowspan=\"2\" text=\"면적\" background=\"darkorange\"/><Cell col=\"6\" rowspan=\"2\" text=\"노동력(명)\" background=\"darkorange\"/><Cell col=\"7\" colspan=\"2\" text=\"사업비(천원)\" background=\"darkorange\"/><Cell col=\"9\" colspan=\"3\" text=\"수입(천원)\" background=\"darkorange\"/><Cell row=\"1\" col=\"7\" text=\"지출액\" background=\"darkorange\"/><Cell row=\"1\" col=\"8\" text=\"지출일\" background=\"darkorange\"/><Cell row=\"1\" col=\"9\" text=\"수종 및 목재수확재적(m³)\" background=\"darkorange\"/><Cell row=\"1\" col=\"10\" text=\"수입액\" background=\"darkorange\"/><Cell row=\"1\" col=\"11\" text=\"수입일\" background=\"darkorange\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" displaytype=\"normal\" text=\"bind:bizYr\" edittype=\"none\" maskeditformat=\"####\" maskeditlimitbymask=\"both\"/><Cell col=\"3\" displaytype=\"combotext\" text=\"bind:bizKindCd\" combodataset=\"dsRecovrSpecsTpcd\" combodatacol=\"data\" combocodecol=\"code\" edittype=\"none\"/><Cell col=\"4\" displaytype=\"normal\" cssclass=\"point\" text=\"bind:bizEtcKindNm\" edittype=\"none\"/><Cell col=\"5\" displaytype=\"normal\" text=\"bind:bizArea\" edittype=\"none\" maskeditformat=\"###,###.##\"/><Cell col=\"6\" displaytype=\"normal\" text=\"bind:bizLbper\" edittype=\"none\" maskeditformat=\"###,###.#\"/><Cell col=\"7\" displaytype=\"normal\" text=\"bind:bizAmt\" edittype=\"none\" maskeditformat=\"###,###\"/><Cell col=\"8\" displaytype=\"normal\" cssclass=\"point\" text=\"bind:expndDay\" edittype=\"none\"/><Cell col=\"9\" displaytype=\"normal\" autosizerow=\"limitmin\" wordWrap=\"char\" textareascrolltype=\"vertical\" text=\"bind:koftrCdWdvlmNm\"/><Cell col=\"10\" displaytype=\"normal\" text=\"bind:incmAmt\" edittype=\"none\" maskeditformat=\"###,###\"/><Cell col=\"11\" displaytype=\"normal\" cssclass=\"point\" text=\"bind:incmDay\" edittype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("wbGis","580","785","435","270",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPaging
            obj = new Layout("default","",0,0,this.divPaging.form,function(p){});
            this.divPaging.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1240,780,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cmbUpInstId","value","dsSearch","upInstId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cmbInstId","value","dsSearch","instId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cmbSido","value","dsSearch","sido");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.edtJuso","value","dsSearch","juso");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cmbSigungu","value","dsSearch","sigungu");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.cmbEmd","value","dsSearch","emd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.cmbRi","value","dsSearch","ri");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.chkMtn","value","dsSearch","san");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.edtBonbun","value","dsSearch","bonbun");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.edtBubun","value","dsSearch","bubun");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.cmbWplarId","value","dsSearch","wplarId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSearch.form.cmbNxtrmNo","value","dsSearch","nxtrmNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSearch.form.cmbCmblcId","value","dsSearch","cmblcId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divSearch.form.chkNowNxtrm","value","dsSearch","nowNxtrmYn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("wplbkList.xfdl","lib::lib_nfm.xjs");
        this.registerScript("wplbkList.xfdl", function() {
        /**
        *  경영계획부 조회
        *  @MenuPath    경영계획부 - 경영계획부 조회
        *  @FileName 	wplbkList.xfdl
        *  @Creator 	gmj
        *  @CreateDate 	240807
        *  @Desction      경영계획수립
        ************************ 소스 수정 이력 **************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  240807               hdh                     최초생성
        *******************************************************************************
        */
        this.executeIncludeScript("lib::lib_nfm.xjs"); /*include "lib::lib_nfm.xjs"*/;

        const publicArgs = this.gfnGetMdiRootDiv() ? this.gfnGetMdiRootDiv().arguments.menuParam : this.getOwnerFrame();

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this); //초기화[필수]

        	var codeArgs = [
        		 ['STTY_APWOD_CD']
        	];

        	this.nfmCodeSet(codeArgs); //코드세팅

        	this.nfmUserAuthrtSrchCndtnStng();

        	this.nfmCmmnSearch("SIDO", null);	// 산림경영 공통(시도 조회)

        	this.nfmCmmnJusoRdo_onitemchanged({value:'1'});

        	 if(typeof publicArgs === 'object') {
        		if(Object.keys(publicArgs).includes('viewPage')) {
        			if(publicArgs['viewPage'] == 'Y') {//상세페이지로 바로이동할때
        				var wplbkNo = '';
        				if(Object.keys(publicArgs).includes('gisYn')) {
        					if(publicArgs['gisYn'] == 'Y') {//GIS팝업에서 요청
        						wplbkNo = publicArgs['wplar_id']+'_'+publicArgs['nxtrm_no']+'_'+publicArgs['cmblc_id']+'_'+publicArgs['sblt_id'];
        					}
        				}

        				var wplarId = publicArgs['wplar_id'];
        				var nxtrmNo = publicArgs['nxtrm_no'];
        				var oArg = {wplbkNo : wplbkNo, wplarId : wplarId, nxtrmNo : nxtrmNo, backPage : "business::mngmtPlan/wplbk/wplbkList.xfdl"};

        				this.gfnSetUrl("business::mngmtPlan/wplbk/wplbkMaster.xfdl", oArg);
        			}
        		}

        		if(Object.keys(publicArgs).includes('searchParams')) {
        			if(this.dsSearch.getRowCount() == 0) {
        				this.dsSearch.addRow();
        			}

        			for(var key of Object.keys(publicArgs['searchParams'])) {
        				if(key == "nowNxtrmYn" && publicArgs['searchParams'][key] == "Y" ){
        					this.divSearch.form.chkNowNxtrm.value = true;
        				} else if(key == 'sbltId') {
        					this.dsSblt.addRow();

        					this.dsSblt.setColumn(0, 'value', publicArgs['searchParams'][key]);
        					this.dsSblt.setColumn(0, 'name', publicArgs['searchParams'][key]);

        					this.divSearch.form.cmbSbltId.set_index(0);
        				} else if(key == 'rdoAddrType') {
        					this.divSearch.form.rdoAddrType.set_value(publicArgs['searchParams'][key]);
        					this.nfmCmmnJusoRdo_onitemchanged({value:publicArgs['searchParams'][key]});
        				}
        				this.dsSearch.setColumn(0, key, publicArgs['searchParams'][key]);

        				if(key == 'sido') {
        					if(!this.gfnIsEmpty(publicArgs['searchParams'][key])) {
        						this.nfmCmmnSearch("SIGUNGU", {sid_cd : publicArgs['searchParams'][key]}, 'fnNfmCmmnCallback');
        					}
        				}
        				if(key == 'sigungu') {
        					if(!this.gfnIsEmpty(publicArgs['searchParams'][key])) {
        						this.nfmCmmnSearch("EMD", {sig_cd : publicArgs['searchParams'][key]}, 'fnNfmCmmnCallback');
        					}
        				}
        				if(key == 'emd') {
        					if(!this.gfnIsEmpty(publicArgs['searchParams'][key])) {
        						this.nfmCmmnSearch("RI", {emd_cd : publicArgs['searchParams'][key]}, 'fnNfmCmmnCallback');
        					}
        				}
        			}
        			var pageIndex = this.dsSearch.getColumn(0, 'pageIndex');
        			if(this.gfnIsEmpty(pageIndex)) {
        				pageIndex = 1;
        			}
        			this.fnSearch(pageIndex);
        		}
        	}
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
        this.fnCallback = function(svcID,errorCode,errorMsg){
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0){
        		return;
        	}
        	switch(svcID){

        		case "search":
        			//this.dsSearch.clearData();
        			//this.dsSearch.addRow();
        			//this.dsSearch.setColumn(0, "instId", this.dsSttus.getColumn(0,"instId"));
        			//this.fnDtlSearch();
        			/*if(this.dsSearch.getColumn(0, "searchParam") == "D"){
        				this.divPaging.form.fnCreatePage(this.grdWplbk, "setPageAfter_DtlSearch", this.dsPaging.getColumn(0, 'currentPageNo'), 0, this.dsPaging.getColumn(0, 'totalRecordCount'));
        			}else{
        				this.divPaging.form.fnCreatePage(this.grdWplbk, "setPageAfter", this.dsPaging.getColumn(0, 'currentPageNo'), 0, this.dsPaging.getColumn(0, 'totalRecordCount'));
        			}
        			*/
        			this.divPaging.form.fnCreatePage(this.grdWplbk, "setPageAfter", this.dsPaging.getColumn(0, 'currentPageNo'), 0, this.dsPaging.getColumn(0, 'totalRecordCount'));
        			var sbltIndex = this.dsSblt.findRow('name', this.dsSearch.getColumn(0, 'sbltId'));
        			if(sbltIndex == -1) {
        				this.divSearch.form.cmbSbltId.set_index(0);
        			} else {
        				this.divSearch.form.cmbSbltId.set_index(sbltIndex);
        			}

        			break;
        		case "downWplbkExcelForUld":
        			var sTitle = "(업로드용)경영계획부_"+this.dsWplbk.getColumn(0, "wplarNm")+"_"+this.dsWplbk.getColumn(0, "nxtrmNo")+"차_"+ this.gfnGetDate('milli');

        			var grdArr = new Array();
        			grdArr.push(this.grdSttyApwod); //법정지정림코드표
        			grdArr.push(this.grdWplbkForUld);

        			var subArr = ["법정지정림 코드표","경영계획부"];

        			// Excel Export 공통함수 호출
        			this.gfnExcelExport(grdArr, subArr , sTitle , "EXCEL", "", "", true, "");
        			break;
        		case "downWplbkExcelForDwnld":
        			var sTitle = "(조회용)경영계획부_"+this.dsWplbk.getColumn(0, "wplarNm")+"_"+this.dsWplbk.getColumn(0, "nxtrmNo")+"차_"+ this.gfnGetDate('milli');

        			var grdArr = new Array();
        			grdArr.push(this.grdSttyApwod); //법정지정림코드표
        			grdArr.push(this.grdWplbkForDwnld);
        			grdArr.push(this.grdAffrsExcelPlan);
        			grdArr.push(this.grdFrestGrdnnExcelPlan);
        			grdArr.push(this.grdFrtrePrdctnExcelPlan);
        			grdArr.push(this.grdFcltExcelPlan);
        			grdArr.push(this.grdEarnExcelPlan);
        			grdArr.push(this.grdAffrsExcelPrfmnc);
        			grdArr.push(this.grdFrestGrdnnExcelPrfmnc);
        			grdArr.push(this.grdFrtrePrdctnExcelPrfmnc);
        			grdArr.push(this.grdFcltExcelPrfmnc);
        			grdArr.push(this.grdEarnExcelPrfmnc);
        			grdArr.push(this.grdRecovrExcelPrfmnc);
        			var subArr = ["법정지정림 코드표","경영계획부","조림계획","숲가꾸기계획","임목생산계획","시설계획","소득계획","조림실적","숲가꾸기실적","임목생산실적","시설실적","소득실적","병충해방제및산림피해복구실적"];

        			// Excel Export 공통함수 호출
        			this.gfnExcelExport(grdArr, subArr , sTitle , "EXCEL", "", "", true, "");
        			break;
        	}
        };

        /**
         * @description 팝업 콜백
        */
        this.fnPopupCallback = function(strPopupID, strReturn){
        	if (strReturn == undefined) {
        		return;
        	}
        	switch (strPopupID) {
        		case "dtlSearchPopup":
        			if(strReturn) {
        				this.fnSearch(1);
        			}
        			break;
        	}
        }

        this.setPageAfter = function (pageIndex) {
        	this.fnSearch(pageIndex);
        }

        this.setPageAfter_DtlSearch = function (pageIndex) {
        	this.fnDtlSearch(pageIndex);
        }

        //경영계획부 조회
        this.fnSearch = function(pageIndex){
        	this.dsWplbk.clearData();

        	if(this.dsSearchList.getRowCount() > 0) {//상세검색목록이 있으면 상세검색으로 조회
        		this.fnDtlSearch(pageIndex);
        		return false;
        	}

        	if(this.dsSearch.getRowCount() == 0) {
        		this.dsSearch.addRow();
        	}
        	this.dsSearch.setColumn(0, "upInstId", this.divSearch.form.cmbUpInstId.value);
        	this.dsSearch.setColumn(0, "instId",  this.divSearch.form.cmbInstId.value);
        	this.dsSearch.setColumn(0, "wplarId", this.divSearch.form.cmbWplarId.value);
        	this.dsSearch.setColumn(0, "nxtrmNo", this.divSearch.form.cmbNxtrmNo.value);
        	this.dsSearch.setColumn(0, "cmblcId", this.divSearch.form.cmbCmblcId.value);

        	if(this.divSearch.form.cmbSbltId.text == '전체') {
        		this.dsSearch.setColumn(0, "sbltId", "");
        	} else {
        		this.dsSearch.setColumn(0, "sbltId", this.divSearch.form.cmbSbltId.text);
        	}

        	//경영계획부 조회
        	this.dsSearch.setColumn(0, "taskEndYn", "Y");

        	if(this.divSearch.form.chkMtn.isChecked()) {
        		this.dsSearch.setColumn(0, "san", "2");
        	} else {
        		this.dsSearch.setColumn(0, "san", "0");
        	}
        	this.dsSearch.setColumn(0, "bonbun", this.divSearch.form.edtBonbun.value);
        	this.dsSearch.setColumn(0, "bubun", this.divSearch.form.edtBubun.value);
        	this.dsSearch.setColumn(0, "juso", this.divSearch.form.edtJuso.value);

        	this.dsSearch.setColumn(0, "paging", "Y");
        	// 페이징 설정
        	this.dsSearch.setColumn(0, "pageIndex", pageIndex);
         	this.dsSearch.setColumn(0, "pageUnit", this.divPaging.form.cboCnt.value);
         	this.dsSearch.setColumn(0, "pageSize", 10);

        	var strSvcId    = "search";
        	var strSvcUrl   = "nfm/wplbk/selectWplbkList.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsWplbk=dsWplbk dsPaging=dsPaging";
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

        //경영계획부 조회
        this.fnDtlSearch = function(pageIndex){
        	this.dsSearch.setColumn(0, "searchParam", "D");
        	this.dsSearch.setColumn(0, "paging", "Y");
        	// 페이징 설정
        	this.dsSearch.setColumn(0, "pageIndex", pageIndex);
         	this.dsSearch.setColumn(0, "pageUnit", this.divPaging.form.cboCnt.value);
         	this.dsSearch.setColumn(0, "pageSize", 10);

        	var strSvcId    = "search";
        	var strSvcUrl   = "nfm/wplbk/selectWplbkDtlSearchList.do";
        	var inData      = "dsSearch=dsSearch dsSearchList=dsSearchList";
        	var outData     = "dsWplbk=dsWplbk dsPaging=dsPaging";
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

        this.fnDtlResetCallback = function (strId, strVal) {
        	if(strVal) {
        		this.dsSearchList.clearData();
        		this.fnSearch(1);
        	}
        }

        //검색
        this.divSearch_btnSearch_onclick = function(obj,e) {
        	if(this.dsSearchList.getRowCount() > 0) {
        		var sMsgId = "confirm.general";            		         //메세지ID
        		var arrArg = ["상세 검색조건이 있습니다.\n초기화 후 일반검색 하시겠습니까?"];                                                //메세지취환될값 배열[생략가능]
        		var sPopId = sMsgId;                                            //메세지팝업ID[생략가능]    *해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
        		var sMsgCallback = "fnDtlResetCallback";                             //메세지콜백[생략가능]         * confirm성 메시지를 사용 시 반드시 필요

        		this.gfnAlert(sMsgId, arrArg, sPopId, sMsgCallback, ["예", "아니오"], [true, false]);
        	} else {
        		this.fnSearch(1);
        	}
        };

        //검색조건 input keydown 이벤트
        this.divSearch_onkeydown = function(obj,e) {
        	if(e.keycode == 13) {
        		if(this.dsSearchList.getRowCount() > 0) {
        			var sMsgId = "confirm.general";            		         //메세지ID
        			var arrArg = ["상세 검색조건이 있습니다.\n초기화 후 일반검색 하시겠습니까?"];                                                //메세지취환될값 배열[생략가능]
        			var sPopId = sMsgId;                                            //메세지팝업ID[생략가능]    *해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
        			var sMsgCallback = "fnDtlResetCallback";                             //메세지콜백[생략가능]         * confirm성 메시지를 사용 시 반드시 필요

        			this.gfnAlert(sMsgId, arrArg, sPopId, sMsgCallback, ["예", "아니오"], [true, false]);
        		} else {
        			this.fnSearch(1);
        		}
        	}
        };

        this.grdWplbk_oncellclick = function(obj,e)
        {
        	if(e.cell == "6"){
        		var wplbkNo = this.dsWplbk.getColumn(e.row, "wplbkNo");
        		var wplarId = this.dsWplbk.getColumn(e.row, "wplarId");
        		var nxtrmNo = this.dsWplbk.getColumn(e.row, "nxtrmNo");
        		var oArg = {wplbkNo : wplbkNo, wplarId : wplarId, nxtrmNo : nxtrmNo, backPage : "business::mngmtPlan/wplbk/wplbkList.xfdl"};

        		var searchColcnt = this.dsSearch.getColCount();
        		var searchParams = {};
        		for(var i=0; i < searchColcnt; i++){
        			var tempCol = this.dsSearch.getColID(i);
        			var tempVal = this.dsSearch.getColumn(0, tempCol);
        			searchParams[tempCol] = tempVal;
        		}

        		searchParams['rdoAddrType'] = this.divSearch.form.rdoAddrType.value;
        		oArg['searchParams'] = searchParams;

        		this.gfnSetUrl("business::mngmtPlan/wplbk/wplbkMaster.xfdl", oArg);
        	}
        };

        //상세검색
        this.divSearch_btnDtlSearch_onclick = function(obj,e) {
        	var oArg   = {};
        	var sPopupCallBack = "fnPopupCallback";
        	var oOption = {
        			popuptype:"modal"	//modal,modaless
        		   , autosize:false
        		   , resize:false
        		   , titlebar:true
        	}
        	oOption['title'] = "경영계획부 상세검색";

        	this.gfnOpenPopup("dtlSearchPopup", "business::mngmtPlan/wplbk/wplbkDtlSearchPopup.xfdl", oArg, sPopupCallBack, oOption);
        };

        //공간정보 다운로드
        this.btnSpaceInfoDwnld_onclick = function(obj,e) {
        	var cmbUpInstId = this.divSearch.form.cmbUpInstId.value;
        	var cmbInstId = this.divSearch.form.cmbInstId.value;
        	var cmbWplarId = this.divSearch.form.cmbWplarId.value;
        	var cmbNxtrmNo = this.divSearch.form.cmbNxtrmNo.value;

        	if(typeof cmbUpInstId === 'undefined'
        		|| typeof cmbInstId === 'undefined'
        		|| typeof cmbWplarId === 'undefined'
        		|| typeof cmbNxtrmNo === 'undefined') {
        			this.gfnAlert("msg.general", ["차기까지 검색을 해주시기 바랍니다."]);
        			return false;
        		}

        	var v_wplarNm = this.divSearch.form.cmbWplarId.text;
        	var v_cmblcId = this.divSearch.form.cmbCmblcId.value;
        	var v_sbltId = this.divSearch.form.cmbSbltId.value;

        	if(this.gfnIsEmpty(v_cmblcId)) {
        		v_cmblcId = '';
        	}
        	if(this.gfnIsEmpty(v_sbltId)) {
        		v_sbltId = '';
        	}

        	var zipName = v_wplarNm+'('+cmbNxtrmNo+')_'+this.gfnGetDate('milli');

        	var strReqParm = "callType=miniGis";
        	strReqParm += "&callMapWidth=" + this.wbGis.width + "px";
        	strReqParm += "&callMapHeight=" + this.wbGis.height + "px";
        	strReqParm += "&callFunc=fgisNfmGisMoveIF.wplbkDownShp";
        	strReqParm += "&callParm=";
        	strReqParm += encodeURIComponent(JSON.stringify({zipName:zipName, wplarId:cmbWplarId,nxtrmNo:cmbNxtrmNo,cmblcId:v_cmblcId,sbltId:v_sbltId}));

        	var sUrl = window.location.protocol + "//" + window.location.host + "/fgis/cmmn/fgisMain.do?" + strReqParm;
        	this.wbGis.set_url(sUrl);
        };

        //경영계획부 내리기(업로드용)
        this.btnWplbkUploadDownload_onclick = function(obj,e)
        {
        	var cmbUpInstId = this.divSearch.form.cmbUpInstId.value;
        	var cmbInstId = this.divSearch.form.cmbInstId.value;
        	var cmbWplarId = this.divSearch.form.cmbWplarId.value;
        	var cmbNxtrmNo = this.divSearch.form.cmbNxtrmNo.value;
        	var chkNxtrmYn = this.divSearch.form.chkNowNxtrm.value;

        	if(!chkNxtrmYn){ //check false
        		if(typeof cmbUpInstId === 'undefined'|| typeof cmbInstId === 'undefined' || typeof cmbWplarId === 'undefined'|| typeof cmbNxtrmNo === 'undefined' ) {
        			this.gfnAlert("msg.general", ["차기까지 검색을 해주시기 바랍니다."]);
        			return false;
        		}
        	}else{
        		if(typeof cmbUpInstId === 'undefined' || typeof cmbInstId === 'undefined') {
        			this.gfnAlert("msg.general", ["관리소까지 검색해주시기 바랍니다."]);
        			return false;
        		}
        	}
        	/*if(typeof cmbUpInstId === 'undefined'|| typeof cmbInstId === 'undefined'	|| typeof cmbWplarId === 'undefined' || typeof cmbNxtrmNo === 'undefined') {
        			this.gfnAlert("msg.general", ["차기까지 검색을 해주시기 바랍니다."]);
        			return false;
        	}*/

        	if(this.dsSearch.getRowCount() == 0) {
        		this.dsSearch.addRow();
        	}
        	this.dsSearch.setColumn(0, "upInstId", this.divSearch.form.cmbUpInstId.value);
        	this.dsSearch.setColumn(0, "instId",  this.divSearch.form.cmbInstId.value);
        	this.dsSearch.setColumn(0, "wplarId", this.divSearch.form.cmbWplarId.value);
        	this.dsSearch.setColumn(0, "nxtrmNo", this.divSearch.form.cmbNxtrmNo.value);
        	this.dsSearch.setColumn(0, "cmblcId", this.divSearch.form.cmbCmblcId.value);
        	this.dsSearch.setColumn(0, "nowNxtrmYn", this.divSearch.form.chkNowNxtrm.value);

        	if(this.divSearch.form.cmbSbltId.text == '전체') {
        		this.dsSearch.setColumn(0, "sbltId", "");
        	} else {
        		this.dsSearch.setColumn(0, "sbltId", this.divSearch.form.cmbSbltId.text);
        	}

        	//경영계획부 조회
        	this.dsSearch.setColumn(0, "taskEndYn", "Y");

        	if(this.divSearch.form.chkMtn.isChecked()) {
        		this.dsSearch.setColumn(0, "san", "2");
        	} else {
        		this.dsSearch.setColumn(0, "san", "0");
        	}
        	this.dsSearch.setColumn(0, "bonbun", this.divSearch.form.edtBonbun.value);
        	this.dsSearch.setColumn(0, "bubun", this.divSearch.form.edtBubun.value);
        	this.dsSearch.setColumn(0, "juso", this.divSearch.form.edtJuso.value);

        	var strSvcId    = "downWplbkExcelForUld";
        	var strSvcUrl   = "nfm/wplbk/selectWplbkExcelForUld.do";
        	var inData      = "dsSearch=dsSearch dsSearchList=dsSearchList";
        	var outData     = "dsWplbkExcelList=dsWplbkExcelList";
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

        //경영계획부 내리기(조회용)
        this.btnWplbkSearchDownload_onclick = function(obj,e)
        {
        	var cmbUpInstId = this.divSearch.form.cmbUpInstId.value;
        	var cmbInstId = this.divSearch.form.cmbInstId.value;
        	var cmbWplarId = this.divSearch.form.cmbWplarId.value;
        	var cmbNxtrmNo = this.divSearch.form.cmbNxtrmNo.value;
        	var chkNxtrmYn = this.divSearch.form.chkNowNxtrm.value;

        	/*if(typeof cmbUpInstId === 'undefined'
        		|| typeof cmbInstId === 'undefined'
        		|| typeof cmbWplarId === 'undefined'
        		|| typeof cmbNxtrmNo === 'undefined') {
        			this.gfnAlert("msg.general", ["차기까지 검색을 해주시기 바랍니다."]);
        			return false;
        	}*/

        	if(!chkNxtrmYn){ //check false
        		if(typeof cmbUpInstId === 'undefined'|| typeof cmbInstId === 'undefined' || typeof cmbWplarId === 'undefined'|| typeof cmbNxtrmNo === 'undefined' ) {
        			this.gfnAlert("msg.general", ["차기까지 검색을 해주시기 바랍니다."]);
        			return false;
        		}
        	}else{
        		if(typeof cmbUpInstId === 'undefined' || typeof cmbInstId === 'undefined') {
        			this.gfnAlert("msg.general", ["관리소까지 검색해주시기 바랍니다."]);
        			return false;
        		}
        	}

        	if(this.dsSearchList.getRowCount() > 0) {//상세검색목록이 있으면 상세검색으로 조회
        		this.dsSearch.setColumn(0, "dtlSearchYn", "Y");
        	}else {
        		if(this.dsSearch.getRowCount() == 0) {
        			this.dsSearch.addRow();
        		}
        		this.dsSearch.setColumn(0, "upInstId", this.divSearch.form.cmbUpInstId.value);
        		this.dsSearch.setColumn(0, "instId",  this.divSearch.form.cmbInstId.value);
        		this.dsSearch.setColumn(0, "wplarId", this.divSearch.form.cmbWplarId.value);
        		this.dsSearch.setColumn(0, "nxtrmNo", this.divSearch.form.cmbNxtrmNo.value);
        		this.dsSearch.setColumn(0, "cmblcId", this.divSearch.form.cmbCmblcId.value);
        		this.dsSearch.setColumn(0, "nowNxtrmYn", this.divSearch.form.chkNowNxtrm.value);

        		if(this.divSearch.form.cmbSbltId.text == '전체') {
        			this.dsSearch.setColumn(0, "sbltId", "");
        		} else {
        			this.dsSearch.setColumn(0, "sbltId", this.divSearch.form.cmbSbltId.text);
        		}

        		//경영계획부 조회
        		this.dsSearch.setColumn(0, "taskEndYn", "Y");

        		if(this.divSearch.form.chkMtn.isChecked()) {
        			this.dsSearch.setColumn(0, "san", "2");
        		} else {
        			this.dsSearch.setColumn(0, "san", "0");
        		}
        		this.dsSearch.setColumn(0, "bonbun", this.divSearch.form.edtBonbun.value);
        		this.dsSearch.setColumn(0, "bubun", this.divSearch.form.edtBubun.value);
        		this.dsSearch.setColumn(0, "juso", this.divSearch.form.edtJuso.value);
        	}
        	var strSvcId    = "downWplbkExcelForDwnld";
        	var strSvcUrl   = "nfm/wplbk/selectWplbkExcelForDwnld.do";
        	var inData      = "dsSearch=dsSearch dsSearchList=dsSearchList";
        	var outData     = "dsWplbkExcelDwlndList=dsWplbkExcelList dsAffrsExcelList=dsAffrsExcelList dsFrestGrdnnExcelList=dsFrestGrdnnExcelList dsFrtrePrdctnExcelList=dsFrtrePrdctnExcelList dsFcltExcelList=dsFcltExcelList dsEarnExcelList=dsEarnExcelList "
        	outData += "dsAffrsExcelPrfmnc=dsAffrsExcelPrfmnc dsFrestGrdnnExcelPrfmnc=dsFrestGrdnnExcelPrfmnc dsFrtrePrdctnExcelPrfmnc=dsFrtrePrdctnExcelPrfmnc dsFcltExcelPrfmnc=dsFcltExcelPrfmnc dsEarnExcelPrfmnc=dsEarnExcelPrfmnc dsRecovrExcelPrfmnc=dsRecovrExcelPrfmnc";
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

        //주소 초기화
        this.divSearch_btnDelAddr_onclick = function(obj,e)
        {
        	if(this.divSearch.form.rdoAddrType.value == '1'){ //소반소재지
        		this[lib_nfm_opt.documentId].form.edtJuso.set_value('');
        	}else {
        		this[lib_nfm_opt.documentId].form.cmbSido.set_index(0);
        		this.nfmCmmndivSearch_onitemchanged({id:'cmbSido', value:''}, null);
        		this[lib_nfm_opt.documentId].form.edtBonbun.set_value('');
        		this[lib_nfm_opt.documentId].form.edtBubun.set_value('');
        		this[lib_nfm_opt.documentId].form.chkMtn.set_value(0);
        	}

        };
        //현차기
        this.divSearch_chkNowNxtrm_onchanged = function(obj,e)
        {
        	if(e.postvalue) {//체크
        		this.divSearch.form.cmbNxtrmNo.set_enable(false);
        	} else {//해제
        		this.divSearch.form.cmbNxtrmNo.set_enable(true);
        	}

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnWplbkUldDwnld.addEventHandler("onclick",this.btnWplbkUploadDownload_onclick,this);
            this.btnWplbkInqDwnld.addEventHandler("onclick",this.btnWplbkSearchDownload_onclick,this);
            this.btnSpaceInfoDwnld.addEventHandler("onclick",this.btnSpaceInfoDwnld_onclick,this);
            this.divSearch.form.cmbUpInstId.addEventHandler("onitemchanged",this.nfmCmmndivSearch_onitemchanged,this);
            this.divSearch.form.cmbInstId.addEventHandler("onitemchanged",this.nfmCmmndivSearch_onitemchanged,this);
            this.divSearch.form.cmbWplarId.addEventHandler("onitemchanged",this.nfmCmmndivSearch_onitemchanged,this);
            this.divSearch.form.cmbCmblcId.addEventHandler("onitemchanged",this.nfmCmmndivSearch_onitemchanged,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.divSearch.form.cmbNxtrmNo.addEventHandler("onitemchanged",this.nfmCmmndivSearch_onitemchanged,this);
            this.divSearch.form.chkNowNxtrm.addEventHandler("onchanged",this.divSearch_chkNowNxtrm_onchanged,this);
            this.divSearch.form.rdoAddrType.addEventHandler("onitemchanged",this.nfmCmmnJusoRdo_onitemchanged,this);
            this.divSearch.form.cmbSido.addEventHandler("onitemchanged",this.nfmCmmndivSearch_onitemchanged,this);
            this.divSearch.form.cmbSigungu.addEventHandler("onitemchanged",this.nfmCmmndivSearch_onitemchanged,this);
            this.divSearch.form.cmbEmd.addEventHandler("onitemchanged",this.nfmCmmndivSearch_onitemchanged,this);
            this.divSearch.form.cmbRi.addEventHandler("onitemchanged",this.divSearch_sadRi_onitemchanged,this);
            this.divSearch.form.edtJuso.addEventHandler("onchanged",this.divSearch_textDtadd_onchanged,this);
            this.divSearch.form.edtJuso.addEventHandler("onkeydown",this.divSearch_onkeydown,this);
            this.divSearch.form.edtBonbun.addEventHandler("onkeydown",this.divSearch_onkeydown,this);
            this.divSearch.form.edtBubun.addEventHandler("onkeydown",this.divSearch_onkeydown,this);
            this.divSearch.form.btnDtlSearch.addEventHandler("onclick",this.divSearch_btnDtlSearch_onclick,this);
            this.divSearch.form.btnDelAddr.addEventHandler("onclick",this.divSearch_btnDelAddr_onclick,this);
            this.grdWplbk.addEventHandler("oncellclick",this.grdWplbk_oncellclick,this);
            this.grdRecovrExcelPrfmnc.addEventHandler("onheadclick",this.grd_onheadclick,this);
            this.grdRecovrExcelPrfmnc.addEventHandler("oncellclick",this.grd_oncellclick,this);
        };
        this.loadIncludeScript("wplbkList.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
