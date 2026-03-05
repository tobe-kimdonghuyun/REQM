(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("REN900M00");
            this.set_titletext("공지사항 및 게시내용 목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"bbsNo\" type=\"STRING\" size=\"256\"/><Column id=\"cmntNo\" type=\"STRING\" size=\"256\"/><Column id=\"bbsSe\" type=\"STRING\" size=\"256\"/><Column id=\"bbsTtl\" type=\"STRING\" size=\"256\"/><Column id=\"bbsCn\" type=\"STRING\" size=\"256\"/><Column id=\"bbsAtfl\" type=\"BLOB\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgNm\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"currentPageNo\" type=\"STRING\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"STRING\" size=\"256\"/><Column id=\"pBbsSe\" type=\"STRING\" size=\"256\"/><Column id=\"pBbsTtl\" type=\"STRING\" size=\"256\"/><Column id=\"pBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"pEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"pBbsNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"recordCountPerPage\">10</Col><Col id=\"currentPageNo\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("<ColumnInfo><Column id=\"totalRecordCount\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdId\">10</Col><Col id=\"cdNm\">공지사항</Col></Row><Row><Col id=\"cdId\">20</Col><Col id=\"cdNm\">자유게시판</Col></Row><Row><Col id=\"cdId\">31</Col><Col id=\"cdNm\">공통기능(API)</Col></Row><Row><Col id=\"cdId\">32</Col><Col id=\"cdNm\">공통화면</Col></Row><Row><Col id=\"cdId\">33</Col><Col id=\"cdNm\">표준문서</Col></Row><Row><Col id=\"cdId\">34</Col><Col id=\"cdNm\">참고문서</Col></Row><Row><Col id=\"cdId\">41</Col><Col id=\"cdNm\">공통사용테이블</Col></Row><Row><Col id=\"cdId\">42</Col><Col id=\"cdNm\">공사작업테이블</Col></Row><Row><Col id=\"cdId\">43</Col><Col id=\"cdNm\">임대배정테이블</Col></Row><Row><Col id=\"cdId\">44</Col><Col id=\"cdNm\">TSP개선테이블</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo2", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCmntList", this);
            obj._setContents("<ColumnInfo><Column id=\"bbsNo\" type=\"STRING\" size=\"256\"/><Column id=\"cmntNo\" type=\"STRING\" size=\"256\"/><Column id=\"cmntCn\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgNm\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList01", this);
            obj._setContents("<ColumnInfo><Column id=\"bbsNo\" type=\"STRING\" size=\"256\"/><Column id=\"cmntNo\" type=\"STRING\" size=\"256\"/><Column id=\"bbsSe\" type=\"STRING\" size=\"256\"/><Column id=\"bbsTtl\" type=\"STRING\" size=\"256\"/><Column id=\"bbsCn\" type=\"STRING\" size=\"256\"/><Column id=\"bbsAtfl\" type=\"BLOB\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgNm\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/><Column id=\"allCnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList02", this);
            obj._setContents("<ColumnInfo><Column id=\"bbsNo\" type=\"STRING\" size=\"256\"/><Column id=\"cmntNo\" type=\"STRING\" size=\"256\"/><Column id=\"bbsSe\" type=\"STRING\" size=\"256\"/><Column id=\"bbsTtl\" type=\"STRING\" size=\"256\"/><Column id=\"bbsCn\" type=\"STRING\" size=\"256\"/><Column id=\"bbsAtfl\" type=\"BLOB\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgNm\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/><Column id=\"allCnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList03", this);
            obj._setContents("<ColumnInfo><Column id=\"bbsNo\" type=\"STRING\" size=\"256\"/><Column id=\"cmntNo\" type=\"STRING\" size=\"256\"/><Column id=\"bbsSe\" type=\"STRING\" size=\"256\"/><Column id=\"bbsTtl\" type=\"STRING\" size=\"256\"/><Column id=\"bbsCn\" type=\"STRING\" size=\"256\"/><Column id=\"bbsAtfl\" type=\"BLOB\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgNm\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/><Column id=\"allCnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList04", this);
            obj._setContents("<ColumnInfo><Column id=\"bbsNo\" type=\"STRING\" size=\"256\"/><Column id=\"cmntNo\" type=\"STRING\" size=\"256\"/><Column id=\"bbsSe\" type=\"STRING\" size=\"256\"/><Column id=\"bbsTtl\" type=\"STRING\" size=\"256\"/><Column id=\"bbsCn\" type=\"STRING\" size=\"256\"/><Column id=\"bbsAtfl\" type=\"BLOB\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgNm\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/><Column id=\"allCnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList05", this);
            obj._setContents("<ColumnInfo><Column id=\"bbsNo\" type=\"STRING\" size=\"256\"/><Column id=\"cmntNo\" type=\"STRING\" size=\"256\"/><Column id=\"bbsSe\" type=\"STRING\" size=\"256\"/><Column id=\"bbsTtl\" type=\"STRING\" size=\"256\"/><Column id=\"bbsCn\" type=\"STRING\" size=\"256\"/><Column id=\"bbsAtfl\" type=\"BLOB\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgNm\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/><Column id=\"allCnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList06", this);
            obj._setContents("<ColumnInfo><Column id=\"bbsNo\" type=\"STRING\" size=\"256\"/><Column id=\"cmntNo\" type=\"STRING\" size=\"256\"/><Column id=\"bbsSe\" type=\"STRING\" size=\"256\"/><Column id=\"bbsTtl\" type=\"STRING\" size=\"256\"/><Column id=\"bbsCn\" type=\"STRING\" size=\"256\"/><Column id=\"bbsAtfl\" type=\"BLOB\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgNm\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/><Column id=\"allCnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList07", this);
            obj._setContents("<ColumnInfo><Column id=\"bbsNo\" type=\"STRING\" size=\"256\"/><Column id=\"cmntNo\" type=\"STRING\" size=\"256\"/><Column id=\"bbsSe\" type=\"STRING\" size=\"256\"/><Column id=\"bbsTtl\" type=\"STRING\" size=\"256\"/><Column id=\"bbsCn\" type=\"STRING\" size=\"256\"/><Column id=\"bbsAtfl\" type=\"BLOB\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgNm\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/><Column id=\"allCnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","0",null,"900","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Tab("tabMain","-1.00","195","1440","860",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_background("border-box");
            this.divForm.addChild(obj.name, obj);

            obj = new Tabpage("tpgWord",this.divForm.form.tabMain);
            obj.set_text("공지사항");
            this.divForm.form.tabMain.addChild(obj.name, obj);

            obj = new Div("divForm","0","0",null,"900","20",null,null,null,null,null,this.divForm.form.tabMain.tpgWord.form);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.form.tabMain.tpgWord.addChild(obj.name, obj);

            obj = new Div("divSch","0","0","100%","198",null,null,null,null,null,null,this.divForm.form.tabMain.tpgWord.form.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.form.tabMain.tpgWord.form.divForm.addChild(obj.name, obj);

            obj = new Panel("panLabel","20.00","14","97.04%","53",null,null,null,null,null,null,this.divForm.form.tabMain.tpgWord.form.divForm.form.divSch.form);
            obj.set_taborder("5");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("40");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"pan00\"/><PanelItem id=\"PanelItem04\" componentid=\"pan01\"/><PanelItem id=\"PanelItem03\" componentid=\"pan03\"/><PanelItem id=\"PanelItem05\" componentid=\"pan01_00\"/></Contents>");
            this.divForm.form.tabMain.tpgWord.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel","0","0","100","40",null,null,null,null,null,null,this.divForm.form.tabMain.tpgWord.form.divForm.form.divSch.form);
            obj.set_taborder("6");
            obj.set_text("등록일자");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.tabMain.tpgWord.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01","1694.00","398","430","40",null,null,null,null,null,null,this.divForm.form.tabMain.tpgWord.form.divForm.form.divSch.form);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staLabel\"/><PanelItem id=\"PanelItem02\" componentid=\"Calendar00\"/><PanelItem id=\"PanelItem04\" componentid=\"staDash\"/><PanelItem id=\"PanelItem03\" componentid=\"Calendar01\"/></Contents>");
            this.divForm.form.tabMain.tpgWord.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan03","1694.00","398","430","45",null,null,null,null,null,null,this.divForm.form.tabMain.tpgWord.form.divForm.form.divSch.form);
            obj.set_taborder("3");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divForm.form.tabMain.tpgWord.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan00","20.00","67","430","45",null,null,null,null,null,null,this.divForm.form.tabMain.tpgWord.form.divForm.form.divSch.form);
            obj.set_taborder("7");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03\"/><PanelItem id=\"PanelItem01\" componentid=\"edtTrmNm\"/></Contents>");
            this.divForm.form.tabMain.tpgWord.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtTrmNm","1270","10","320","40",null,null,null,null,null,null,this.divForm.form.tabMain.tpgWord.form.divForm.form.divSch.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_displaynulltext("[%]검색어[%]");
            this.divForm.form.tabMain.tpgWord.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03","0","0","100","40",null,null,null,null,null,null,this.divForm.form.tabMain.tpgWord.form.divForm.form.divSch.form);
            obj.set_taborder("11");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.tabMain.tpgWord.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panClose","30","151","100%","30",null,null,null,null,null,null,this.divForm.form.tabMain.tpgWord.form.divForm.form.divSch.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnInqClose\"/></Contents>");
            this.divForm.form.tabMain.tpgWord.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnInqClose","1251","185","52","29",null,null,null,null,null,null,this.divForm.form.tabMain.tpgWord.form.divForm.form.divSch.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_SchClose");
            this.divForm.form.tabMain.tpgWord.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divForm.form.tabMain.tpgWord.form.divForm.form.divSch.form);
            obj.set_taborder("10");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnTrmInq\"/></Contents>");
            this.divForm.form.tabMain.tpgWord.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnTrmInq","653.00","146","126","40",null,null,null,null,null,null,this.divForm.form.tabMain.tpgWord.form.divForm.form.divSch.form);
            obj.set_taborder("1");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            this.divForm.form.tabMain.tpgWord.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01_00","490.00","67","269","40",null,null,null,null,null,null,this.divForm.form.tabMain.tpgWord.form.divForm.form.divSch.form);
            obj.set_taborder("4");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divForm.form.tabMain.tpgWord.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","0","0","145","40",null,null,null,null,null,null,this.divForm.form.tabMain.tpgWord.form.divForm.form.divSch.form);
            obj.set_taborder("12");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.tabMain.tpgWord.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staDash","0","0","10","40",null,null,null,null,null,null,this.divForm.form.tabMain.tpgWord.form.divForm.form.divSch.form);
            obj.set_taborder("13");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_Dash");
            this.divForm.form.tabMain.tpgWord.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","295.00","71","145","40",null,null,null,null,null,null,this.divForm.form.tabMain.tpgWord.form.divForm.form.divSch.form);
            obj.set_taborder("14");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.tabMain.tpgWord.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","0","30","100.00%","700",null,null,null,null,null,null,this.divForm.form.tabMain.tpgWord.form.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.form.tabMain.tpgWord.form.divForm.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn","0","0","100%","34",null,null,null,null,null,null,this.divForm.form.tabMain.tpgWord.form.divForm.form.divGrd.form);
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staTotal00\"/><PanelItem id=\"PanelItem00\" componentid=\"cmbTrmCntPrPg\"/><PanelItem id=\"PanelItem04\" componentid=\"btnBbsGrdAdd\"/><PanelItem id=\"PanelItem03\" componentid=\"btnBbsGrdDtl\"/></Contents>");
            this.divForm.form.tabMain.tpgWord.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","27","34",null,null,null,null,null,null,this.divForm.form.tabMain.tpgWord.form.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.tabMain.tpgWord.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTrmTnocs","staTotal:0","0","43","34",null,null,null,null,null,null,this.divForm.form.tabMain.tpgWord.form.divForm.form.divGrd.form);
            obj.set_taborder("9");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_textAlign("center");
            obj.set_fittocontents("width");
            this.divForm.form.tabMain.tpgWord.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","staTrmTnocs:0","0","30","34",null,null,null,null,null,null,this.divForm.form.tabMain.tpgWord.form.divForm.form.divGrd.form);
            obj.set_taborder("11");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divForm.form.tabMain.tpgWord.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Combo("cmbTrmCntPrPg","1230","0","80","34",null,null,null,null,null,null,this.divForm.form.tabMain.tpgWord.form.divForm.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_tabMain_tpgWord_form_divForm_form_divGrd_form_cmbTrmCntPrPg_innerdataset = new nexacro.NormalDataset("divForm_form_tabMain_tpgWord_form_divForm_form_divGrd_form_cmbTrmCntPrPg_innerdataset", obj);
            divForm_form_tabMain_tpgWord_form_divForm_form_divGrd_form_cmbTrmCntPrPg_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row><Row><Col id=\"codecolumn\">10000</Col><Col id=\"datacolumn\">전체(만건)</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_tabMain_tpgWord_form_divForm_form_divGrd_form_cmbTrmCntPrPg_innerdataset);
            obj.set_text("10");
            obj.set_value("10");
            obj.set_index("0");
            this.divForm.form.tabMain.tpgWord.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal00","1165","0","65","34",null,null,null,null,null,null,this.divForm.form.tabMain.tpgWord.form.divForm.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("목록수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divForm.form.tabMain.tpgWord.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnBbsGrdDtl","1410.00","2","96","34",null,null,null,null,null,null,this.divForm.form.tabMain.tpgWord.form.divForm.form.divGrd.form);
            obj.set_taborder("8");
            obj.set_text("상세");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.tabMain.tpgWord.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnBbsGrdAdd","1304.00","2","96","34",null,null,null,null,null,null,this.divForm.form.tabMain.tpgWord.form.divForm.form.divGrd.form);
            obj.set_taborder("9");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.tabMain.tpgWord.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","PanelGrdBtn:10","100.00%","624",null,null,null,null,null,null,this.divForm.form.tabMain.tpgWord.form.divForm.form.divGrd.form);
            obj.set_taborder("9");
            obj.set_binddataset("dsList01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"67\"/><Column size=\"889\"/><Column size=\"121\"/><Column size=\"174\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"등록자\"/><Cell col=\"3\" text=\"등록일시\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" expr=\"rowidx + 1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:bbsTtl\" displaytype=\"text\" edittype=\"none\" combodataset=\"dsCombo2\" combodatacol=\"cdNm\" combocodecol=\"cdId\" textAlign=\"left\"/><Cell col=\"2\" displaytype=\"text\" text=\"bind:lastChgNm\" textAlign=\"center\"/><Cell col=\"3\" displaytype=\"mask\" text=\"bind:lastChgDt\" cssclass=\"CellEnd\" textAlign=\"center\" maskeditformat=\"####-##-## ##:##:##\" maskedittype=\"string\"/></Band></Format></Formats>");
            this.divForm.form.tabMain.tpgWord.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Tabpage("tpgTrm",this.divForm.form.tabMain);
            obj.set_text("자유게시판");
            this.divForm.form.tabMain.addChild(obj.name, obj);

            obj = new Div("divForm","0","0",null,null,"20","0",null,null,null,null,this.divForm.form.tabMain.tpgTrm.form);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.form.tabMain.tpgTrm.addChild(obj.name, obj);

            obj = new Div("divSch","0","0","100%","198",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrm.form.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.form.tabMain.tpgTrm.form.divForm.addChild(obj.name, obj);

            obj = new Panel("panLabel","20.00","14","97.04%","53",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrm.form.divForm.form.divSch.form);
            obj.set_taborder("3");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("40");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"pan00\"/><PanelItem id=\"PanelItem04\" componentid=\"pan01\"/></Contents>");
            this.divForm.form.tabMain.tpgTrm.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel","0","0","100","40",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrm.form.divForm.form.divSch.form);
            obj.set_taborder("4");
            obj.set_text("등록일자");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.tabMain.tpgTrm.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01","1694.00","398","430","40",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrm.form.divForm.form.divSch.form);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staLabel\"/><PanelItem id=\"PanelItem02\" componentid=\"Calendar00\"/><PanelItem id=\"PanelItem04\" componentid=\"staDash\"/><PanelItem id=\"PanelItem03\" componentid=\"Calendar01\"/></Contents>");
            this.divForm.form.tabMain.tpgTrm.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan00","20.00","67","430","45",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrm.form.divForm.form.divSch.form);
            obj.set_taborder("5");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03\"/><PanelItem id=\"PanelItem01\" componentid=\"edtTrmNm\"/></Contents>");
            this.divForm.form.tabMain.tpgTrm.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtTrmNm","1270","10","320","40",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrm.form.divForm.form.divSch.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_displaynulltext("[%]검색어[%]");
            this.divForm.form.tabMain.tpgTrm.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03","0","0","100","40",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrm.form.divForm.form.divSch.form);
            obj.set_taborder("9");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.tabMain.tpgTrm.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panClose","30","151","100%","30",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrm.form.divForm.form.divSch.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnInqClose\"/></Contents>");
            this.divForm.form.tabMain.tpgTrm.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnInqClose","1251","185","52","29",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrm.form.divForm.form.divSch.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_SchClose");
            this.divForm.form.tabMain.tpgTrm.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrm.form.divForm.form.divSch.form);
            obj.set_taborder("8");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnTrmInq\"/></Contents>");
            this.divForm.form.tabMain.tpgTrm.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnTrmInq","653.00","146","126","40",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrm.form.divForm.form.divSch.form);
            obj.set_taborder("1");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            this.divForm.form.tabMain.tpgTrm.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","0","0","145","40",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrm.form.divForm.form.divSch.form);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.tabMain.tpgTrm.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staDash","0","0","10","40",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrm.form.divForm.form.divSch.form);
            obj.set_taborder("11");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_Dash");
            this.divForm.form.tabMain.tpgTrm.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","295.00","71","145","40",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrm.form.divForm.form.divSch.form);
            obj.set_taborder("12");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.tabMain.tpgTrm.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","0","divSch:30","100%","800",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrm.form.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.tabMain.tpgTrm.form.divForm.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn",null,"0","100%","34","0",null,null,null,null,null,this.divForm.form.tabMain.tpgTrm.form.divForm.form.divGrd.form);
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staTotal00\"/><PanelItem id=\"PanelItem00\" componentid=\"cmbTrmCntPrPg\"/><PanelItem id=\"PanelItem04\" componentid=\"btnBbsGrdAdd\"/><PanelItem id=\"PanelItem03\" componentid=\"btnBbsGrdDtl\"/></Contents>");
            this.divForm.form.tabMain.tpgTrm.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("PanelCmntGrdBtn",null,"428","100%","34","0",null,null,null,null,null,this.divForm.form.tabMain.tpgTrm.form.divForm.form.divGrd.form);
            obj.set_taborder("13");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("width");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnCmntGrdAdd\"/><PanelItem id=\"PanelItem01\" componentid=\"btnCmntGrdDtl\"/><PanelItem id=\"PanelItem02\" componentid=\"btnBbsGrdDtl00\"/></Contents>");
            this.divForm.form.tabMain.tpgTrm.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","27","34",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrm.form.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.tabMain.tpgTrm.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTrmTnocs","staTotal:0","0","43","34",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrm.form.divForm.form.divGrd.form);
            obj.set_taborder("9");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_textAlign("center");
            obj.set_fittocontents("width");
            this.divForm.form.tabMain.tpgTrm.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","staTrmTnocs:0","0","30","34",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrm.form.divForm.form.divGrd.form);
            obj.set_taborder("11");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divForm.form.tabMain.tpgTrm.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal03","4","418","1100","34",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrm.form.divForm.form.divGrd.form);
            obj.set_taborder("10");
            obj.set_text("댓글 리스트");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.tabMain.tpgTrm.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnCmntGrdAdd","898.00","0","96","34",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrm.form.divForm.form.divGrd.form);
            obj.set_taborder("11");
            obj.set_text("댓글등록");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.tabMain.tpgTrm.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnCmntGrdDtl","1004.00","0","96","34",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrm.form.divForm.form.divGrd.form);
            obj.set_taborder("12");
            obj.set_text("상세");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.tabMain.tpgTrm.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","PanelGrdBtn:10","100%","300",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrm.form.divForm.form.divGrd.form);
            obj.set_taborder("9");
            obj.set_binddataset("dsList02");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"67\"/><Column size=\"889\"/><Column size=\"121\"/><Column size=\"174\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"등록자\"/><Cell col=\"3\" text=\"등록일시\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" expr=\"rowidx + 1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:bbsTtl\" displaytype=\"text\" edittype=\"none\" combodataset=\"dsCombo2\" combodatacol=\"cdNm\" combocodecol=\"cdId\" textAlign=\"left\"/><Cell col=\"2\" displaytype=\"text\" text=\"bind:lastChgNm\" textAlign=\"center\"/><Cell col=\"3\" displaytype=\"mask\" text=\"bind:lastChgDt\" cssclass=\"CellEnd\" textAlign=\"center\" maskeditformat=\"####-##-## ##:##:##\" maskedittype=\"string\"/></Band></Format></Formats>");
            this.divForm.form.tabMain.tpgTrm.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("Grid02","0","PanelCmntGrdBtn:10","100%","300",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrm.form.divForm.form.divGrd.form);
            obj.set_taborder("9");
            obj.set_binddataset("dsCmntList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"67\"/><Column size=\"889\"/><Column size=\"121\"/><Column size=\"174\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"댓글\"/><Cell col=\"2\" text=\"등록자\"/><Cell col=\"3\" text=\"등록일시\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" expr=\"rowidx + 1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:cmntCn\" displaytype=\"text\" edittype=\"none\" combodataset=\"dsCombo2\" combodatacol=\"cdNm\" combocodecol=\"cdId\" textAlign=\"left\"/><Cell col=\"2\" displaytype=\"text\" text=\"bind:lastChgNm\" textAlign=\"center\"/><Cell col=\"3\" displaytype=\"mask\" text=\"bind:lastChgDt\" cssclass=\"CellEnd\" textAlign=\"center\" maskeditformat=\"####-##-## ##:##:##\" maskedittype=\"string\"/></Band></Format></Formats>");
            this.divForm.form.tabMain.tpgTrm.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Combo("cmbTrmCntPrPg","1230","0","80","34",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrm.form.divForm.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_tabMain_tpgTrm_form_divForm_form_divGrd_form_cmbTrmCntPrPg_innerdataset = new nexacro.NormalDataset("divForm_form_tabMain_tpgTrm_form_divForm_form_divGrd_form_cmbTrmCntPrPg_innerdataset", obj);
            divForm_form_tabMain_tpgTrm_form_divForm_form_divGrd_form_cmbTrmCntPrPg_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row><Row><Col id=\"codecolumn\">10000</Col><Col id=\"datacolumn\">전체(만건)</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_tabMain_tpgTrm_form_divForm_form_divGrd_form_cmbTrmCntPrPg_innerdataset);
            obj.set_text("10");
            obj.set_value("10");
            obj.set_index("0");
            this.divForm.form.tabMain.tpgTrm.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal00","1165","0","65","34",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrm.form.divForm.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("목록수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divForm.form.tabMain.tpgTrm.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnBbsGrdDtl","1410.00","2","96","34",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrm.form.divForm.form.divGrd.form);
            obj.set_taborder("8");
            obj.set_text("상세");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.tabMain.tpgTrm.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnBbsGrdAdd","1304.00","2","96","34",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrm.form.divForm.form.divGrd.form);
            obj.set_taborder("9");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.tabMain.tpgTrm.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Tabpage("tpgDmn",this.divForm.form.tabMain);
            obj.set_text("공통기능(API)");
            this.divForm.form.tabMain.addChild(obj.name, obj);

            obj = new Div("divForm","0","0",null,"900","20",null,null,null,null,null,this.divForm.form.tabMain.tpgDmn.form);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.form.tabMain.tpgDmn.addChild(obj.name, obj);

            obj = new Div("divSch","0","0","100%","198",null,null,null,null,null,null,this.divForm.form.tabMain.tpgDmn.form.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.form.tabMain.tpgDmn.form.divForm.addChild(obj.name, obj);

            obj = new Panel("panLabel","20.00","14","97.04%","53",null,null,null,null,null,null,this.divForm.form.tabMain.tpgDmn.form.divForm.form.divSch.form);
            obj.set_taborder("5");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("40");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"pan00\"/><PanelItem id=\"PanelItem04\" componentid=\"pan01\"/><PanelItem id=\"PanelItem03\" componentid=\"pan03\"/><PanelItem id=\"PanelItem05\" componentid=\"pan01_00\"/></Contents>");
            this.divForm.form.tabMain.tpgDmn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel","0","0","100","40",null,null,null,null,null,null,this.divForm.form.tabMain.tpgDmn.form.divForm.form.divSch.form);
            obj.set_taborder("6");
            obj.set_text("등록일자");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.tabMain.tpgDmn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01","1694.00","398","430","40",null,null,null,null,null,null,this.divForm.form.tabMain.tpgDmn.form.divForm.form.divSch.form);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staLabel\"/><PanelItem id=\"PanelItem02\" componentid=\"Calendar00\"/><PanelItem id=\"PanelItem04\" componentid=\"staDash\"/><PanelItem id=\"PanelItem03\" componentid=\"Calendar01\"/></Contents>");
            this.divForm.form.tabMain.tpgDmn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan03","1694.00","398","430","45",null,null,null,null,null,null,this.divForm.form.tabMain.tpgDmn.form.divForm.form.divSch.form);
            obj.set_taborder("3");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divForm.form.tabMain.tpgDmn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan00","20.00","67","430","45",null,null,null,null,null,null,this.divForm.form.tabMain.tpgDmn.form.divForm.form.divSch.form);
            obj.set_taborder("7");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03\"/><PanelItem id=\"PanelItem01\" componentid=\"edtTrmNm\"/></Contents>");
            this.divForm.form.tabMain.tpgDmn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtTrmNm","1270","10","320","40",null,null,null,null,null,null,this.divForm.form.tabMain.tpgDmn.form.divForm.form.divSch.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_displaynulltext("[%]검색어[%]");
            this.divForm.form.tabMain.tpgDmn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03","0","0","100","40",null,null,null,null,null,null,this.divForm.form.tabMain.tpgDmn.form.divForm.form.divSch.form);
            obj.set_taborder("11");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.tabMain.tpgDmn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panClose","30","151","100%","30",null,null,null,null,null,null,this.divForm.form.tabMain.tpgDmn.form.divForm.form.divSch.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnInqClose\"/></Contents>");
            this.divForm.form.tabMain.tpgDmn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnInqClose","1251","185","52","29",null,null,null,null,null,null,this.divForm.form.tabMain.tpgDmn.form.divForm.form.divSch.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_SchClose");
            this.divForm.form.tabMain.tpgDmn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divForm.form.tabMain.tpgDmn.form.divForm.form.divSch.form);
            obj.set_taborder("10");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnTrmInq\"/></Contents>");
            this.divForm.form.tabMain.tpgDmn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnTrmInq","653.00","146","126","40",null,null,null,null,null,null,this.divForm.form.tabMain.tpgDmn.form.divForm.form.divSch.form);
            obj.set_taborder("1");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            this.divForm.form.tabMain.tpgDmn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01_00","490.00","67","269","40",null,null,null,null,null,null,this.divForm.form.tabMain.tpgDmn.form.divForm.form.divSch.form);
            obj.set_taborder("4");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divForm.form.tabMain.tpgDmn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","0","0","145","40",null,null,null,null,null,null,this.divForm.form.tabMain.tpgDmn.form.divForm.form.divSch.form);
            obj.set_taborder("12");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.tabMain.tpgDmn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staDash","0","0","10","40",null,null,null,null,null,null,this.divForm.form.tabMain.tpgDmn.form.divForm.form.divSch.form);
            obj.set_taborder("13");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_Dash");
            this.divForm.form.tabMain.tpgDmn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","295.00","71","145","40",null,null,null,null,null,null,this.divForm.form.tabMain.tpgDmn.form.divForm.form.divSch.form);
            obj.set_taborder("14");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.tabMain.tpgDmn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","0","30","100.00%","700",null,null,null,null,null,null,this.divForm.form.tabMain.tpgDmn.form.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.tabMain.tpgDmn.form.divForm.addChild(obj.name, obj);

            obj = new Div("divPage","0","567","100.00%","36",null,null,null,null,"36",null,this.divForm.form.tabMain.tpgDmn.form.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("work::COM/util/paging/paging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.tabMain.tpgDmn.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn","0","0","100%","34",null,null,null,null,null,null,this.divForm.form.tabMain.tpgDmn.form.divForm.form.divGrd.form);
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staTotal00\"/><PanelItem id=\"PanelItem00\" componentid=\"cmbTrmCntPrPg\"/><PanelItem id=\"PanelItem04\" componentid=\"btnBbsGrdAdd\"/><PanelItem id=\"PanelItem03\" componentid=\"btnBbsGrdDtl\"/></Contents>");
            this.divForm.form.tabMain.tpgDmn.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","27","34",null,null,null,null,null,null,this.divForm.form.tabMain.tpgDmn.form.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.tabMain.tpgDmn.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTrmTnocs","staTotal:0","0","43","34",null,null,null,null,null,null,this.divForm.form.tabMain.tpgDmn.form.divForm.form.divGrd.form);
            obj.set_taborder("9");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_textAlign("center");
            obj.set_fittocontents("width");
            this.divForm.form.tabMain.tpgDmn.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","staTrmTnocs:0","0","30","34",null,null,null,null,null,null,this.divForm.form.tabMain.tpgDmn.form.divForm.form.divGrd.form);
            obj.set_taborder("11");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divForm.form.tabMain.tpgDmn.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Combo("cmbTrmCntPrPg","1230","0","80","34",null,null,null,null,null,null,this.divForm.form.tabMain.tpgDmn.form.divForm.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_tabMain_tpgDmn_form_divForm_form_divGrd_form_cmbTrmCntPrPg_innerdataset = new nexacro.NormalDataset("divForm_form_tabMain_tpgDmn_form_divForm_form_divGrd_form_cmbTrmCntPrPg_innerdataset", obj);
            divForm_form_tabMain_tpgDmn_form_divForm_form_divGrd_form_cmbTrmCntPrPg_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row><Row><Col id=\"codecolumn\">10000</Col><Col id=\"datacolumn\">전체(만건)</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_tabMain_tpgDmn_form_divForm_form_divGrd_form_cmbTrmCntPrPg_innerdataset);
            obj.set_text("10");
            obj.set_value("10");
            obj.set_index("0");
            this.divForm.form.tabMain.tpgDmn.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal00","1165","0","65","34",null,null,null,null,null,null,this.divForm.form.tabMain.tpgDmn.form.divForm.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("목록수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divForm.form.tabMain.tpgDmn.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnBbsGrdDtl","1410.00","2","96","34",null,null,null,null,null,null,this.divForm.form.tabMain.tpgDmn.form.divForm.form.divGrd.form);
            obj.set_taborder("8");
            obj.set_text("상세");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.tabMain.tpgDmn.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnBbsGrdAdd","1304.00","2","96","34",null,null,null,null,null,null,this.divForm.form.tabMain.tpgDmn.form.divForm.form.divGrd.form);
            obj.set_taborder("9");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.tabMain.tpgDmn.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","34","100.00%",null,null,"369",null,null,null,null,this.divForm.form.tabMain.tpgDmn.form.divForm.form.divGrd.form);
            obj.set_taborder("9");
            obj.set_binddataset("dsList03");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"67\"/><Column size=\"889\"/><Column size=\"121\"/><Column size=\"174\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"등록자\"/><Cell col=\"3\" text=\"등록일시\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" expr=\"rowidx + 1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:bbsTtl\" displaytype=\"text\" edittype=\"none\" combodataset=\"dsCombo2\" combodatacol=\"cdNm\" combocodecol=\"cdId\" textAlign=\"left\"/><Cell col=\"2\" displaytype=\"text\" text=\"bind:lastChgNm\" textAlign=\"center\"/><Cell col=\"3\" displaytype=\"mask\" text=\"bind:lastChgDt\" cssclass=\"CellEnd\" textAlign=\"center\" maskeditformat=\"####-##-## ##:##:##\" maskedittype=\"string\"/></Band></Format></Formats>");
            this.divForm.form.tabMain.tpgDmn.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Tabpage("tpgTrmDfn",this.divForm.form.tabMain);
            obj.set_text("공통화면");
            this.divForm.form.tabMain.addChild(obj.name, obj);

            obj = new Div("divForm","0","0",null,"900","20",null,null,null,null,null,this.divForm.form.tabMain.tpgTrmDfn.form);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.form.tabMain.tpgTrmDfn.addChild(obj.name, obj);

            obj = new Div("divSch","0","0","100%","198",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.form.tabMain.tpgTrmDfn.form.divForm.addChild(obj.name, obj);

            obj = new Panel("panLabel","20.00","14","97.04%","53",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divSch.form);
            obj.set_taborder("5");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("40");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"pan00\"/><PanelItem id=\"PanelItem04\" componentid=\"pan01\"/><PanelItem id=\"PanelItem03\" componentid=\"pan03\"/><PanelItem id=\"PanelItem05\" componentid=\"pan01_00\"/></Contents>");
            this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel","0","0","100","40",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divSch.form);
            obj.set_taborder("6");
            obj.set_text("등록일자");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01","1694.00","398","430","40",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divSch.form);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staLabel\"/><PanelItem id=\"PanelItem02\" componentid=\"Calendar00\"/><PanelItem id=\"PanelItem04\" componentid=\"staDash\"/><PanelItem id=\"PanelItem03\" componentid=\"Calendar01\"/></Contents>");
            this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan03","1694.00","398","430","45",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divSch.form);
            obj.set_taborder("3");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan00","20.00","67","430","45",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divSch.form);
            obj.set_taborder("7");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03\"/><PanelItem id=\"PanelItem01\" componentid=\"edtTrmNm\"/></Contents>");
            this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtTrmNm","1270","10","320","40",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divSch.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_displaynulltext("[%]검색어[%]");
            this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03","0","0","100","40",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divSch.form);
            obj.set_taborder("11");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panClose","30","151","100%","30",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divSch.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnInqClose\"/></Contents>");
            this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnInqClose","1251","185","52","29",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divSch.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_SchClose");
            this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divSch.form);
            obj.set_taborder("10");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnTrmInq\"/></Contents>");
            this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnTrmInq","653.00","146","126","40",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divSch.form);
            obj.set_taborder("1");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01_00","490.00","67","269","40",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divSch.form);
            obj.set_taborder("4");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","0","0","145","40",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divSch.form);
            obj.set_taborder("12");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staDash","0","0","10","40",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divSch.form);
            obj.set_taborder("13");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_Dash");
            this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","295.00","71","145","40",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divSch.form);
            obj.set_taborder("14");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","0","30","100.00%","700",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.tabMain.tpgTrmDfn.form.divForm.addChild(obj.name, obj);

            obj = new Div("divPage","0","567","100.00%","36",null,null,null,null,"36",null,this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("work::COM/util/paging/paging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn","0","0","100%","34",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form);
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staTotal00\"/><PanelItem id=\"PanelItem00\" componentid=\"cmbTrmCntPrPg\"/><PanelItem id=\"PanelItem04\" componentid=\"btnBbsGrdAdd\"/><PanelItem id=\"PanelItem03\" componentid=\"btnBbsGrdDtl\"/></Contents>");
            this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","27","34",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTrmTnocs","staTotal:0","0","43","34",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form);
            obj.set_taborder("9");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_textAlign("center");
            obj.set_fittocontents("width");
            this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","staTrmTnocs:0","0","30","34",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form);
            obj.set_taborder("11");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Combo("cmbTrmCntPrPg","1230","0","80","34",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_tabMain_tpgTrmDfn_form_divForm_form_divGrd_form_cmbTrmCntPrPg_innerdataset = new nexacro.NormalDataset("divForm_form_tabMain_tpgTrmDfn_form_divForm_form_divGrd_form_cmbTrmCntPrPg_innerdataset", obj);
            divForm_form_tabMain_tpgTrmDfn_form_divForm_form_divGrd_form_cmbTrmCntPrPg_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row><Row><Col id=\"codecolumn\">10000</Col><Col id=\"datacolumn\">전체(만건)</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_tabMain_tpgTrmDfn_form_divForm_form_divGrd_form_cmbTrmCntPrPg_innerdataset);
            obj.set_text("10");
            obj.set_value("10");
            obj.set_index("0");
            this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal00","1165","0","65","34",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("목록수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnBbsGrdDtl","1410.00","2","96","34",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form);
            obj.set_taborder("8");
            obj.set_text("상세");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnBbsGrdAdd","1304.00","2","96","34",null,null,null,null,null,null,this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form);
            obj.set_taborder("9");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","34","100.00%",null,null,"369",null,null,null,null,this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form);
            obj.set_taborder("9");
            obj.set_binddataset("dsList04");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"67\"/><Column size=\"889\"/><Column size=\"121\"/><Column size=\"174\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"등록자\"/><Cell col=\"3\" text=\"등록일시\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" expr=\"rowidx + 1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:bbsTtl\" displaytype=\"text\" edittype=\"none\" combodataset=\"dsCombo2\" combodatacol=\"cdNm\" combocodecol=\"cdId\" textAlign=\"left\"/><Cell col=\"2\" displaytype=\"text\" text=\"bind:lastChgNm\" textAlign=\"center\"/><Cell col=\"3\" displaytype=\"mask\" text=\"bind:lastChgDt\" cssclass=\"CellEnd\" textAlign=\"center\" maskeditformat=\"####-##-## ##:##:##\" maskedittype=\"string\"/></Band></Format></Formats>");
            this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.divForm.form.tabMain);
            obj.set_text("표준문서");
            this.divForm.form.tabMain.addChild(obj.name, obj);

            obj = new Div("divSch","0","0","98.61%","191",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.form.tabMain.Tabpage1.addChild(obj.name, obj);

            obj = new Panel("panLabel","20.00","14","97.04%","53",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage1.form.divSch.form);
            obj.set_taborder("5");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("40");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"pan00\"/><PanelItem id=\"PanelItem04\" componentid=\"pan01\"/><PanelItem id=\"PanelItem03\" componentid=\"pan03\"/><PanelItem id=\"PanelItem05\" componentid=\"pan01_00\"/></Contents>");
            this.divForm.form.tabMain.Tabpage1.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel","0","0","100","40",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage1.form.divSch.form);
            obj.set_taborder("6");
            obj.set_text("등록일자");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.tabMain.Tabpage1.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01","1694.00","398","430","40",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage1.form.divSch.form);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staLabel\"/><PanelItem id=\"PanelItem02\" componentid=\"Calendar00\"/><PanelItem id=\"PanelItem04\" componentid=\"staDash\"/><PanelItem id=\"PanelItem03\" componentid=\"Calendar01\"/></Contents>");
            this.divForm.form.tabMain.Tabpage1.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan03","1694.00","398","430","45",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage1.form.divSch.form);
            obj.set_taborder("3");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divForm.form.tabMain.Tabpage1.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan00","20.00","67","430","45",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage1.form.divSch.form);
            obj.set_taborder("7");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03\"/><PanelItem id=\"PanelItem01\" componentid=\"edtTrmNm\"/></Contents>");
            this.divForm.form.tabMain.Tabpage1.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtTrmNm","1270","10","320","40",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage1.form.divSch.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_displaynulltext("[%]검색어[%]");
            this.divForm.form.tabMain.Tabpage1.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03","0","0","100","40",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage1.form.divSch.form);
            obj.set_taborder("11");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.tabMain.Tabpage1.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panClose","30","151","100%","30",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage1.form.divSch.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnInqClose\"/></Contents>");
            this.divForm.form.tabMain.Tabpage1.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnInqClose","1251","185","52","29",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage1.form.divSch.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_SchClose");
            this.divForm.form.tabMain.Tabpage1.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage1.form.divSch.form);
            obj.set_taborder("10");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnTrmInq\"/></Contents>");
            this.divForm.form.tabMain.Tabpage1.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnTrmInq","653.00","146","126","40",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage1.form.divSch.form);
            obj.set_taborder("1");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            this.divForm.form.tabMain.Tabpage1.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01_00","490.00","67","269","40",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage1.form.divSch.form);
            obj.set_taborder("4");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divForm.form.tabMain.Tabpage1.form.divSch.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","0","0","145","40",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage1.form.divSch.form);
            obj.set_taborder("12");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.tabMain.Tabpage1.form.divSch.addChild(obj.name, obj);

            obj = new Static("staDash","0","0","10","40",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage1.form.divSch.form);
            obj.set_taborder("13");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_Dash");
            this.divForm.form.tabMain.Tabpage1.form.divSch.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","295.00","71","145","40",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage1.form.divSch.form);
            obj.set_taborder("14");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.tabMain.Tabpage1.form.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","0","221","98.61%","678",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.tabMain.Tabpage1.addChild(obj.name, obj);

            obj = new Div("divPage","0","567","100.00%","36",null,null,null,null,"36",null,this.divForm.form.tabMain.Tabpage1.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("work::COM/util/paging/paging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.tabMain.Tabpage1.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn","0","0","100%","34",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage1.form.divGrd.form);
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staTotal00\"/><PanelItem id=\"PanelItem00\" componentid=\"cmbTrmCntPrPg\"/><PanelItem id=\"PanelItem04\" componentid=\"btnBbsGrdAdd\"/><PanelItem id=\"PanelItem03\" componentid=\"btnBbsGrdDtl\"/></Contents>");
            this.divForm.form.tabMain.Tabpage1.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","27","34",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage1.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.tabMain.Tabpage1.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTrmTnocs","staTotal:0","0","43","34",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage1.form.divGrd.form);
            obj.set_taborder("9");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_textAlign("center");
            obj.set_fittocontents("width");
            this.divForm.form.tabMain.Tabpage1.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","staTrmTnocs:0","0","30","34",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage1.form.divGrd.form);
            obj.set_taborder("11");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divForm.form.tabMain.Tabpage1.form.divGrd.addChild(obj.name, obj);

            obj = new Combo("cmbTrmCntPrPg","1230","0","80","34",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage1.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_tabMain_Tabpage1_form_divGrd_form_cmbTrmCntPrPg_innerdataset = new nexacro.NormalDataset("divForm_form_tabMain_Tabpage1_form_divGrd_form_cmbTrmCntPrPg_innerdataset", obj);
            divForm_form_tabMain_Tabpage1_form_divGrd_form_cmbTrmCntPrPg_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row><Row><Col id=\"codecolumn\">10000</Col><Col id=\"datacolumn\">전체(만건)</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_tabMain_Tabpage1_form_divGrd_form_cmbTrmCntPrPg_innerdataset);
            obj.set_text("10");
            obj.set_value("10");
            obj.set_index("0");
            this.divForm.form.tabMain.Tabpage1.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal00","1165","0","65","34",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage1.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("목록수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divForm.form.tabMain.Tabpage1.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnBbsGrdDtl","1410.00","2","96","34",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage1.form.divGrd.form);
            obj.set_taborder("8");
            obj.set_text("상세");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.tabMain.Tabpage1.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnBbsGrdAdd","1304.00","2","96","34",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage1.form.divGrd.form);
            obj.set_taborder("9");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.tabMain.Tabpage1.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","34","100.00%",null,null,"369",null,null,null,null,this.divForm.form.tabMain.Tabpage1.form.divGrd.form);
            obj.set_taborder("9");
            obj.set_binddataset("dsList05");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"67\"/><Column size=\"889\"/><Column size=\"121\"/><Column size=\"174\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"등록자\"/><Cell col=\"3\" text=\"등록일시\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" expr=\"rowidx + 1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:bbsTtl\" displaytype=\"text\" edittype=\"none\" combodataset=\"dsCombo2\" combodatacol=\"cdNm\" combocodecol=\"cdId\" textAlign=\"left\"/><Cell col=\"2\" displaytype=\"text\" text=\"bind:lastChgNm\" textAlign=\"center\"/><Cell col=\"3\" displaytype=\"mask\" text=\"bind:lastChgDt\" cssclass=\"CellEnd\" textAlign=\"center\" maskeditformat=\"####-##-## ##:##:##\" maskedittype=\"string\"/></Band></Format></Formats>");
            this.divForm.form.tabMain.Tabpage1.form.divGrd.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.divForm.form.tabMain);
            obj.set_text("참조문서");
            this.divForm.form.tabMain.addChild(obj.name, obj);

            obj = new Div("divSch","0","0","98.61%","191",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.form.tabMain.Tabpage2.addChild(obj.name, obj);

            obj = new Panel("panLabel","20.00","14","97.04%","53",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage2.form.divSch.form);
            obj.set_taborder("5");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("40");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"pan00\"/><PanelItem id=\"PanelItem04\" componentid=\"pan01\"/><PanelItem id=\"PanelItem03\" componentid=\"pan03\"/><PanelItem id=\"PanelItem05\" componentid=\"pan01_00\"/></Contents>");
            this.divForm.form.tabMain.Tabpage2.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel","0","0","100","40",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage2.form.divSch.form);
            obj.set_taborder("6");
            obj.set_text("등록일자");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.tabMain.Tabpage2.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01","1694.00","398","430","40",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage2.form.divSch.form);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staLabel\"/><PanelItem id=\"PanelItem02\" componentid=\"Calendar00\"/><PanelItem id=\"PanelItem04\" componentid=\"staDash\"/><PanelItem id=\"PanelItem03\" componentid=\"Calendar01\"/></Contents>");
            this.divForm.form.tabMain.Tabpage2.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan03","1694.00","398","430","45",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage2.form.divSch.form);
            obj.set_taborder("3");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divForm.form.tabMain.Tabpage2.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan00","20.00","67","430","45",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage2.form.divSch.form);
            obj.set_taborder("7");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03\"/><PanelItem id=\"PanelItem01\" componentid=\"edtTrmNm\"/></Contents>");
            this.divForm.form.tabMain.Tabpage2.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtTrmNm","1270","10","320","40",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage2.form.divSch.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_displaynulltext("[%]검색어[%]");
            this.divForm.form.tabMain.Tabpage2.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03","0","0","100","40",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage2.form.divSch.form);
            obj.set_taborder("11");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.tabMain.Tabpage2.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panClose","30","151","100%","30",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage2.form.divSch.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnInqClose\"/></Contents>");
            this.divForm.form.tabMain.Tabpage2.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnInqClose","1251","185","52","29",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage2.form.divSch.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_SchClose");
            this.divForm.form.tabMain.Tabpage2.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage2.form.divSch.form);
            obj.set_taborder("10");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnTrmInq\"/></Contents>");
            this.divForm.form.tabMain.Tabpage2.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnTrmInq","653.00","146","126","40",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage2.form.divSch.form);
            obj.set_taborder("1");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            this.divForm.form.tabMain.Tabpage2.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01_00","490.00","67","269","40",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage2.form.divSch.form);
            obj.set_taborder("4");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divForm.form.tabMain.Tabpage2.form.divSch.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","0","0","145","40",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage2.form.divSch.form);
            obj.set_taborder("12");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.tabMain.Tabpage2.form.divSch.addChild(obj.name, obj);

            obj = new Static("staDash","0","0","10","40",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage2.form.divSch.form);
            obj.set_taborder("13");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_Dash");
            this.divForm.form.tabMain.Tabpage2.form.divSch.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","295.00","71","145","40",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage2.form.divSch.form);
            obj.set_taborder("14");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.tabMain.Tabpage2.form.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","0","221","98.61%","678",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.tabMain.Tabpage2.addChild(obj.name, obj);

            obj = new Div("divPage","0","567","100.00%","36",null,null,null,null,"36",null,this.divForm.form.tabMain.Tabpage2.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("work::COM/util/paging/paging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.tabMain.Tabpage2.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn","0","0","100%","34",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage2.form.divGrd.form);
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staTotal00\"/><PanelItem id=\"PanelItem00\" componentid=\"cmbTrmCntPrPg\"/><PanelItem id=\"PanelItem04\" componentid=\"btnBbsGrdAdd\"/><PanelItem id=\"PanelItem03\" componentid=\"btnBbsGrdDtl\"/></Contents>");
            this.divForm.form.tabMain.Tabpage2.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","27","34",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage2.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.tabMain.Tabpage2.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTrmTnocs","staTotal:0","0","43","34",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage2.form.divGrd.form);
            obj.set_taborder("9");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_textAlign("center");
            obj.set_fittocontents("width");
            this.divForm.form.tabMain.Tabpage2.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","staTrmTnocs:0","0","30","34",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage2.form.divGrd.form);
            obj.set_taborder("11");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divForm.form.tabMain.Tabpage2.form.divGrd.addChild(obj.name, obj);

            obj = new Combo("cmbTrmCntPrPg","1230","0","80","34",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage2.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_tabMain_Tabpage2_form_divGrd_form_cmbTrmCntPrPg_innerdataset = new nexacro.NormalDataset("divForm_form_tabMain_Tabpage2_form_divGrd_form_cmbTrmCntPrPg_innerdataset", obj);
            divForm_form_tabMain_Tabpage2_form_divGrd_form_cmbTrmCntPrPg_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row><Row><Col id=\"codecolumn\">10000</Col><Col id=\"datacolumn\">전체(만건)</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_tabMain_Tabpage2_form_divGrd_form_cmbTrmCntPrPg_innerdataset);
            obj.set_text("10");
            obj.set_value("10");
            obj.set_index("0");
            this.divForm.form.tabMain.Tabpage2.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal00","1165","0","65","34",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage2.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("목록수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divForm.form.tabMain.Tabpage2.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnBbsGrdDtl","1410.00","2","96","34",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage2.form.divGrd.form);
            obj.set_taborder("8");
            obj.set_text("상세");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.tabMain.Tabpage2.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnBbsGrdAdd","1304.00","2","96","34",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage2.form.divGrd.form);
            obj.set_taborder("9");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.tabMain.Tabpage2.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","34","100.00%",null,null,"369",null,null,null,null,this.divForm.form.tabMain.Tabpage2.form.divGrd.form);
            obj.set_taborder("9");
            obj.set_binddataset("dsList06");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"67\"/><Column size=\"889\"/><Column size=\"121\"/><Column size=\"174\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"등록자\"/><Cell col=\"3\" text=\"등록일시\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" expr=\"rowidx + 1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:bbsTtl\" displaytype=\"text\" edittype=\"none\" combodataset=\"dsCombo2\" combodatacol=\"cdNm\" combocodecol=\"cdId\" textAlign=\"left\"/><Cell col=\"2\" displaytype=\"text\" text=\"bind:lastChgNm\" textAlign=\"center\"/><Cell col=\"3\" displaytype=\"mask\" text=\"bind:lastChgDt\" cssclass=\"CellEnd\" textAlign=\"center\" maskeditformat=\"####-##-## ##:##:##\" maskedittype=\"string\"/></Band></Format></Formats>");
            this.divForm.form.tabMain.Tabpage2.form.divGrd.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.divForm.form.tabMain);
            obj.set_text("테이블");
            this.divForm.form.tabMain.addChild(obj.name, obj);

            obj = new Div("divSch","0","0","98.61%","191",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.form.tabMain.Tabpage3.addChild(obj.name, obj);

            obj = new Panel("panLabel","20.00","14","97.04%","53",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage3.form.divSch.form);
            obj.set_taborder("5");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("40");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"pan00\"/><PanelItem id=\"PanelItem04\" componentid=\"pan01\"/><PanelItem id=\"PanelItem03\" componentid=\"pan03\"/><PanelItem id=\"PanelItem05\" componentid=\"pan01_00\"/></Contents>");
            this.divForm.form.tabMain.Tabpage3.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel","0","0","100","40",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage3.form.divSch.form);
            obj.set_taborder("6");
            obj.set_text("등록일자");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.tabMain.Tabpage3.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01","1694.00","398","430","40",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage3.form.divSch.form);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staLabel\"/><PanelItem id=\"PanelItem02\" componentid=\"Calendar00\"/><PanelItem id=\"PanelItem04\" componentid=\"staDash\"/><PanelItem id=\"PanelItem03\" componentid=\"Calendar01\"/></Contents>");
            this.divForm.form.tabMain.Tabpage3.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan03","1694.00","398","430","45",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage3.form.divSch.form);
            obj.set_taborder("3");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divForm.form.tabMain.Tabpage3.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan00","20.00","67","430","45",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage3.form.divSch.form);
            obj.set_taborder("7");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03\"/><PanelItem id=\"PanelItem01\" componentid=\"edtTrmNm\"/></Contents>");
            this.divForm.form.tabMain.Tabpage3.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtTrmNm","1270","10","320","40",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage3.form.divSch.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_displaynulltext("[%]검색어[%]");
            this.divForm.form.tabMain.Tabpage3.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03","0","0","100","40",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage3.form.divSch.form);
            obj.set_taborder("11");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.tabMain.Tabpage3.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panClose","30","151","100%","30",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage3.form.divSch.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnInqClose\"/></Contents>");
            this.divForm.form.tabMain.Tabpage3.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnInqClose","1251","185","52","29",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage3.form.divSch.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_SchClose");
            this.divForm.form.tabMain.Tabpage3.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage3.form.divSch.form);
            obj.set_taborder("10");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnTrmInq\"/></Contents>");
            this.divForm.form.tabMain.Tabpage3.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnTrmInq","653.00","146","126","40",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage3.form.divSch.form);
            obj.set_taborder("1");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            this.divForm.form.tabMain.Tabpage3.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01_00","490.00","67","269","40",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage3.form.divSch.form);
            obj.set_taborder("4");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divForm.form.tabMain.Tabpage3.form.divSch.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","0","0","145","40",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage3.form.divSch.form);
            obj.set_taborder("12");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.tabMain.Tabpage3.form.divSch.addChild(obj.name, obj);

            obj = new Static("staDash","0","0","10","40",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage3.form.divSch.form);
            obj.set_taborder("13");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_Dash");
            this.divForm.form.tabMain.Tabpage3.form.divSch.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","295.00","71","145","40",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage3.form.divSch.form);
            obj.set_taborder("14");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.tabMain.Tabpage3.form.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","0","221","98.61%","678",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.tabMain.Tabpage3.addChild(obj.name, obj);

            obj = new Div("divPage","0","567","100.00%","36",null,null,null,null,"36",null,this.divForm.form.tabMain.Tabpage3.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("work::COM/util/paging/paging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.tabMain.Tabpage3.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn","0","0","100%","34",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage3.form.divGrd.form);
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staTotal00\"/><PanelItem id=\"PanelItem00\" componentid=\"cmbTrmCntPrPg\"/><PanelItem id=\"PanelItem04\" componentid=\"btnBbsGrdAdd\"/><PanelItem id=\"PanelItem03\" componentid=\"btnBbsGrdDtl\"/></Contents>");
            this.divForm.form.tabMain.Tabpage3.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","27","34",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage3.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.tabMain.Tabpage3.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTrmTnocs","staTotal:0","0","43","34",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage3.form.divGrd.form);
            obj.set_taborder("9");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_textAlign("center");
            obj.set_fittocontents("width");
            this.divForm.form.tabMain.Tabpage3.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","staTrmTnocs:0","0","30","34",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage3.form.divGrd.form);
            obj.set_taborder("11");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divForm.form.tabMain.Tabpage3.form.divGrd.addChild(obj.name, obj);

            obj = new Combo("cmbTrmCntPrPg","1230","0","80","34",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage3.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_tabMain_Tabpage3_form_divGrd_form_cmbTrmCntPrPg_innerdataset = new nexacro.NormalDataset("divForm_form_tabMain_Tabpage3_form_divGrd_form_cmbTrmCntPrPg_innerdataset", obj);
            divForm_form_tabMain_Tabpage3_form_divGrd_form_cmbTrmCntPrPg_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row><Row><Col id=\"codecolumn\">10000</Col><Col id=\"datacolumn\">전체(만건)</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_tabMain_Tabpage3_form_divGrd_form_cmbTrmCntPrPg_innerdataset);
            obj.set_text("10");
            obj.set_value("10");
            obj.set_index("0");
            this.divForm.form.tabMain.Tabpage3.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal00","1165","0","65","34",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage3.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("목록수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divForm.form.tabMain.Tabpage3.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnBbsGrdDtl","1410.00","2","96","34",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage3.form.divGrd.form);
            obj.set_taborder("8");
            obj.set_text("상세");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.tabMain.Tabpage3.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnBbsGrdAdd","1304.00","2","96","34",null,null,null,null,null,null,this.divForm.form.tabMain.Tabpage3.form.divGrd.form);
            obj.set_taborder("9");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.tabMain.Tabpage3.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","34","100.00%",null,null,"369",null,null,null,null,this.divForm.form.tabMain.Tabpage3.form.divGrd.form);
            obj.set_taborder("9");
            obj.set_binddataset("dsList07");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"67\"/><Column size=\"889\"/><Column size=\"121\"/><Column size=\"174\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"등록자\"/><Cell col=\"3\" text=\"등록일시\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" expr=\"rowidx + 1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:bbsTtl\" displaytype=\"text\" edittype=\"none\" combodataset=\"dsCombo2\" combodatacol=\"cdNm\" combocodecol=\"cdId\" textAlign=\"left\"/><Cell col=\"2\" displaytype=\"text\" text=\"bind:lastChgNm\" textAlign=\"center\"/><Cell col=\"3\" displaytype=\"mask\" text=\"bind:lastChgDt\" cssclass=\"CellEnd\" textAlign=\"center\" maskeditformat=\"####-##-## ##:##:##\" maskedittype=\"string\"/></Band></Format></Formats>");
            this.divForm.form.tabMain.Tabpage3.form.divGrd.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.tabMain.tpgWord.form.divForm.form.divSch.form
            obj = new Layout("default","",0,0,this.divForm.form.tabMain.tpgWord.form.divForm.form.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panLabel.set_taborder("5");
                p.panLabel.set_verticalgap("8");
                p.panLabel.set_flexwrap("wrap");
                p.panLabel.set_spacing("0px 0px 10px 0px");
                p.panLabel.set_type("horizontal");
                p.panLabel.set_flexcrossaxisalign("start");
                p.panLabel.set_horizontalgap("40");
                p.panLabel.set_fittocontents("height");
                p.panLabel.set_maxheight("");
                p.panLabel.move("20.00","14","97.04%","53",null,null);

                p.staLabel.set_taborder("6");
                p.staLabel.set_text("등록일자");
                p.staLabel.set_cssclass("sta_WF_SchLabel");
                p.staLabel.set_flexshrink("0");
                p.staLabel.set_minwidth("");
                p.staLabel.move("0","0","100","40",null,null);

                p.pan01.set_taborder("2");
                p.pan01.set_type("horizontal");
                p.pan01.set_horizontalgap("10");
                p.pan01.set_maxheight("");
                p.pan01.set_minwidth("");
                p.pan01.move("1694.00","398","430","40",null,null);

                p.pan03.set_taborder("3");
                p.pan03.set_type("horizontal");
                p.pan03.set_horizontalgap("10");
                p.pan03.set_minwidth("");
                p.pan03.move("1694.00","398","430","45",null,null);

                p.pan00.set_taborder("7");
                p.pan00.set_type("horizontal");
                p.pan00.set_horizontalgap("10");
                p.pan00.set_flexwrap("nowrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_minwidth("");
                p.pan00.move("20.00","67","430","45",null,null);

                p.edtTrmNm.set_taborder("0");
                p.edtTrmNm.set_cssclass("edt_WF_EdtSch");
                p.edtTrmNm.set_displaynulltext("[%]검색어[%]");
                p.edtTrmNm.move("1270","10","320","40",null,null);

                p.staLabel03.set_taborder("11");
                p.staLabel03.set_text("제목");
                p.staLabel03.set_cssclass("sta_WF_SchLabel");
                p.staLabel03.set_flexshrink("0");
                p.staLabel03.set_maxwidth("");
                p.staLabel03.move("0","0","100","40",null,null);

                p.panClose.set_taborder("9");
                p.panClose.set_type("vertical");
                p.panClose.set_cssclass("pal_WF_SchLine");
                p.panClose.set_flexcrossaxisalign("end");
                p.panClose.move("30","151","100%","30",null,null);

                p.btnInqClose.set_taborder("8");
                p.btnInqClose.set_cssclass("btn_WF_SchClose");
                p.btnInqClose.move("1251","185","52","29",null,null);

                p.panSchBtn.set_taborder("10");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100%","40",null,null);

                p.btnTrmInq.set_taborder("1");
                p.btnTrmInq.set_text("조회하기");
                p.btnTrmInq.set_cssclass("btn_WF_Search");
                p.btnTrmInq.move("653.00","146","126","40",null,null);

                p.pan01_00.set_taborder("4");
                p.pan01_00.set_type("horizontal");
                p.pan01_00.set_horizontalgap("10");
                p.pan01_00.set_maxheight("");
                p.pan01_00.set_minwidth("");
                p.pan01_00.move("490.00","67","269","40",null,null);

                p.Calendar00.set_taborder("12");
                p.Calendar00.set_dateformat("yyyy-MM-dd");
                p.Calendar00.move("0","0","145","40",null,null);

                p.staDash.set_taborder("13");
                p.staDash.set_text("~");
                p.staDash.set_cssclass("sta_WF_Dash");
                p.staDash.move("0","0","10","40",null,null);

                p.Calendar01.set_taborder("14");
                p.Calendar01.set_dateformat("yyyy-MM-dd");
                p.Calendar01.move("295.00","71","145","40",null,null);
            	}
            );
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            this.divForm.form.tabMain.tpgWord.form.divForm.form.divSch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.tabMain.tpgWord.form.divForm.form.divSch.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.tabMain.tpgWord.form.divForm.form.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panClose.move("30","151","100%","30",null,null);

                p.panLabel.set_horizontalgap("50");
                p.panLabel.set_verticalgap("8");
                p.panLabel.move("132","47","100%","288",null,null);

                p.pan00.set_type("horizontal");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_horizontalgap("8");
                p.pan00.move("1694.00","398","99.99963967469833%","80",null,null);

                p.pan03.set_horizontalgap("8");
                p.pan03.move("1694.00","398","100%","45",null,null);

                p.pan01.set_type("horizontal");
                p.pan01.set_fittocontents("height");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_horizontalgap("8");
                p.pan01.move("1694.00","398","100%","80",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("14px 16px 12px 16px");
            obj.set_flexwrap("wrap");
            this.divForm.form.tabMain.tpgWord.form.divForm.form.divSch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.tabMain.tpgWord.form.divForm.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.tabMain.tpgWord.form.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.move("0","0","100%","34",null,null);

                p.staTotal.set_taborder("2");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","0","27","34",null,null);

                p.staTrmTnocs.set_taborder("9");
                p.staTrmTnocs.set_text("0");
                p.staTrmTnocs.set_cssclass("sta_WF_Total");
                p.staTrmTnocs.set_usedecorate("true");
                p.staTrmTnocs.set_textAlign("center");
                p.staTrmTnocs.set_fittocontents("width");
                p.staTrmTnocs.move("staTotal:0","0","43","34",null,null);

                p.staTotal02.set_taborder("11");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.move("staTrmTnocs:0","0","30","34",null,null);

                p.cmbTrmCntPrPg.set_taborder("4");
                p.cmbTrmCntPrPg.set_innerdataset(divForm_form_tabMain_tpgWord_form_divForm_form_divGrd_form_cmbTrmCntPrPg_innerdataset);
                p.cmbTrmCntPrPg.set_codecolumn("codecolumn");
                p.cmbTrmCntPrPg.set_datacolumn("datacolumn");
                p.cmbTrmCntPrPg.set_text("10");
                p.cmbTrmCntPrPg.set_value("10");
                p.cmbTrmCntPrPg.set_index("0");
                p.cmbTrmCntPrPg.move("1230","0","80","34",null,null);

                p.staTotal00.set_taborder("3");
                p.staTotal00.set_text("목록수");
                p.staTotal00.set_cssclass("sta_WF_SchLabel");
                p.staTotal00.set_fittocontents("width");
                p.staTotal00.move("1165","0","65","34",null,null);

                p.btnBbsGrdDtl.set_taborder("8");
                p.btnBbsGrdDtl.set_text("상세");
                p.btnBbsGrdDtl.set_cssclass("btn_WF_Small");
                p.btnBbsGrdDtl.set_visible("true");
                p.btnBbsGrdDtl.set_fittocontents("width");
                p.btnBbsGrdDtl.move("1410.00","2","96","34",null,null);

                p.btnBbsGrdAdd.set_taborder("9");
                p.btnBbsGrdAdd.set_text("등록");
                p.btnBbsGrdAdd.set_cssclass("btn_WF_Small");
                p.btnBbsGrdAdd.set_visible("true");
                p.btnBbsGrdAdd.set_fittocontents("width");
                p.btnBbsGrdAdd.move("1304.00","2","96","34",null,null);

                p.Grid00.set_taborder("9");
                p.Grid00.set_binddataset("dsList01");
                p.Grid00.move("0","PanelGrdBtn:10","100.00%","624",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.tabMain.tpgWord.form.divForm.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.tabMain.tpgWord.form.divForm.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.tabMain.tpgWord.form.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.tabMain.tpgWord.form.divForm.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.tabMain.tpgWord.form.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form.tabMain.tpgWord.form.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divSch.set_taborder("0");
                p.divSch.set_text("Div00");
                p.divSch.set_cssclass("div_WF_SchBg");
                p.divSch.set_formscrollbartype("none none");
                p.divSch.set_formscrolltype("none");
                p.divSch.set_fittocontents("height");
                p.divSch.move("0","0","100%","198",null,null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.set_fittocontents("height");
                p.divGrd.move("0","30","100.00%","700",null,null);
            	}
            );
            obj.set_verticalgap("30");
            obj.set_type("vertical");
            this.divForm.form.tabMain.tpgWord.form.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.tabMain.tpgWord.form.divForm.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.tabMain.tpgWord.form.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("0px 10px 0px 20px");
            obj.set_flexmainaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexcrossaxisalign("start");
            obj.set_verticalgap("30");
            this.divForm.form.tabMain.tpgWord.form.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.tabMain.tpgWord.form
            obj = new Layout("default","",0,0,this.divForm.form.tabMain.tpgWord.form,function(p){});
            this.divForm.form.tabMain.tpgWord.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.tabMain.tpgTrm.form.divForm.form.divSch.form
            obj = new Layout("default","",0,0,this.divForm.form.tabMain.tpgTrm.form.divForm.form.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panLabel.set_taborder("3");
                p.panLabel.set_verticalgap("8");
                p.panLabel.set_flexwrap("wrap");
                p.panLabel.set_spacing("0px 0px 10px 0px");
                p.panLabel.set_type("horizontal");
                p.panLabel.set_flexcrossaxisalign("start");
                p.panLabel.set_horizontalgap("40");
                p.panLabel.set_fittocontents("height");
                p.panLabel.set_maxheight("");
                p.panLabel.move("20.00","14","97.04%","53",null,null);

                p.staLabel.set_taborder("4");
                p.staLabel.set_text("등록일자");
                p.staLabel.set_cssclass("sta_WF_SchLabel");
                p.staLabel.set_flexshrink("0");
                p.staLabel.set_minwidth("");
                p.staLabel.move("0","0","100","40",null,null);

                p.pan01.set_taborder("2");
                p.pan01.set_type("horizontal");
                p.pan01.set_horizontalgap("10");
                p.pan01.set_maxheight("");
                p.pan01.set_minwidth("");
                p.pan01.move("1694.00","398","430","40",null,null);

                p.pan00.set_taborder("5");
                p.pan00.set_type("horizontal");
                p.pan00.set_horizontalgap("10");
                p.pan00.set_flexwrap("nowrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_minwidth("");
                p.pan00.move("20.00","67","430","45",null,null);

                p.edtTrmNm.set_taborder("0");
                p.edtTrmNm.set_cssclass("edt_WF_EdtSch");
                p.edtTrmNm.set_displaynulltext("[%]검색어[%]");
                p.edtTrmNm.move("1270","10","320","40",null,null);

                p.staLabel03.set_taborder("9");
                p.staLabel03.set_text("제목");
                p.staLabel03.set_cssclass("sta_WF_SchLabel");
                p.staLabel03.set_flexshrink("0");
                p.staLabel03.set_maxwidth("");
                p.staLabel03.move("0","0","100","40",null,null);

                p.panClose.set_taborder("7");
                p.panClose.set_type("vertical");
                p.panClose.set_cssclass("pal_WF_SchLine");
                p.panClose.set_flexcrossaxisalign("end");
                p.panClose.move("30","151","100%","30",null,null);

                p.btnInqClose.set_taborder("6");
                p.btnInqClose.set_cssclass("btn_WF_SchClose");
                p.btnInqClose.move("1251","185","52","29",null,null);

                p.panSchBtn.set_taborder("8");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100%","40",null,null);

                p.btnTrmInq.set_taborder("1");
                p.btnTrmInq.set_text("조회하기");
                p.btnTrmInq.set_cssclass("btn_WF_Search");
                p.btnTrmInq.move("653.00","146","126","40",null,null);

                p.Calendar00.set_taborder("10");
                p.Calendar00.set_dateformat("yyyy-MM-dd");
                p.Calendar00.move("0","0","145","40",null,null);

                p.staDash.set_taborder("11");
                p.staDash.set_text("~");
                p.staDash.set_cssclass("sta_WF_Dash");
                p.staDash.move("0","0","10","40",null,null);

                p.Calendar01.set_taborder("12");
                p.Calendar01.set_dateformat("yyyy-MM-dd");
                p.Calendar01.move("295.00","71","145","40",null,null);
            	}
            );
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            this.divForm.form.tabMain.tpgTrm.form.divForm.form.divSch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.tabMain.tpgTrm.form.divForm.form.divSch.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.tabMain.tpgTrm.form.divForm.form.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panClose.move("30","151","100%","30",null,null);

                p.panLabel.set_horizontalgap("50");
                p.panLabel.set_verticalgap("8");
                p.panLabel.move("132","47","100%","288",null,null);

                p.pan00.set_type("horizontal");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_horizontalgap("8");
                p.pan00.move("1694.00","398","99.99963967469833%","80",null,null);

                p.pan01.set_type("horizontal");
                p.pan01.set_fittocontents("height");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_horizontalgap("8");
                p.pan01.move("1694.00","398","100%","80",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("14px 16px 12px 16px");
            obj.set_flexwrap("wrap");
            this.divForm.form.tabMain.tpgTrm.form.divForm.form.divSch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.tabMain.tpgTrm.form.divForm.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.tabMain.tpgTrm.form.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.move(null,"0","100%","34","0",null);

                p.PanelCmntGrdBtn.set_taborder("13");
                p.PanelCmntGrdBtn.set_flexcrossaxisalign("start");
                p.PanelCmntGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelCmntGrdBtn.set_flexmainaxisalign("end");
                p.PanelCmntGrdBtn.set_fittocontents("width");
                p.PanelCmntGrdBtn.set_horizontalgap("10");
                p.PanelCmntGrdBtn.move(null,"428","100%","34","0",null);

                p.staTotal.set_taborder("2");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","0","27","34",null,null);

                p.staTrmTnocs.set_taborder("9");
                p.staTrmTnocs.set_text("0");
                p.staTrmTnocs.set_cssclass("sta_WF_Total");
                p.staTrmTnocs.set_usedecorate("true");
                p.staTrmTnocs.set_textAlign("center");
                p.staTrmTnocs.set_fittocontents("width");
                p.staTrmTnocs.move("staTotal:0","0","43","34",null,null);

                p.staTotal02.set_taborder("11");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.move("staTrmTnocs:0","0","30","34",null,null);

                p.staTotal03.set_taborder("10");
                p.staTotal03.set_text("댓글 리스트");
                p.staTotal03.set_cssclass("sta_WF_SchLabel");
                p.staTotal03.set_usedecorate("true");
                p.staTotal03.set_fittocontents("width");
                p.staTotal03.move("4","418","1100","34",null,null);

                p.btnCmntGrdAdd.set_taborder("11");
                p.btnCmntGrdAdd.set_text("댓글등록");
                p.btnCmntGrdAdd.set_cssclass("btn_WF_Small");
                p.btnCmntGrdAdd.set_visible("true");
                p.btnCmntGrdAdd.set_fittocontents("width");
                p.btnCmntGrdAdd.move("898.00","0","96","34",null,null);

                p.btnCmntGrdDtl.set_taborder("12");
                p.btnCmntGrdDtl.set_text("상세");
                p.btnCmntGrdDtl.set_cssclass("btn_WF_Small");
                p.btnCmntGrdDtl.set_visible("true");
                p.btnCmntGrdDtl.set_fittocontents("width");
                p.btnCmntGrdDtl.move("1004.00","0","96","34",null,null);

                p.Grid00.set_taborder("9");
                p.Grid00.set_binddataset("dsList02");
                p.Grid00.move("0","PanelGrdBtn:10","100%","300",null,null);

                p.Grid02.set_taborder("9");
                p.Grid02.set_binddataset("dsCmntList");
                p.Grid02.move("0","PanelCmntGrdBtn:10","100%","300",null,null);

                p.cmbTrmCntPrPg.set_taborder("4");
                p.cmbTrmCntPrPg.set_innerdataset(divForm_form_tabMain_tpgTrm_form_divForm_form_divGrd_form_cmbTrmCntPrPg_innerdataset);
                p.cmbTrmCntPrPg.set_codecolumn("codecolumn");
                p.cmbTrmCntPrPg.set_datacolumn("datacolumn");
                p.cmbTrmCntPrPg.set_text("10");
                p.cmbTrmCntPrPg.set_value("10");
                p.cmbTrmCntPrPg.set_index("0");
                p.cmbTrmCntPrPg.move("1230","0","80","34",null,null);

                p.staTotal00.set_taborder("3");
                p.staTotal00.set_text("목록수");
                p.staTotal00.set_cssclass("sta_WF_SchLabel");
                p.staTotal00.set_fittocontents("width");
                p.staTotal00.move("1165","0","65","34",null,null);

                p.btnBbsGrdDtl.set_taborder("8");
                p.btnBbsGrdDtl.set_text("상세");
                p.btnBbsGrdDtl.set_cssclass("btn_WF_Small");
                p.btnBbsGrdDtl.set_visible("true");
                p.btnBbsGrdDtl.set_fittocontents("width");
                p.btnBbsGrdDtl.move("1410.00","2","96","34",null,null);

                p.btnBbsGrdAdd.set_taborder("9");
                p.btnBbsGrdAdd.set_text("등록");
                p.btnBbsGrdAdd.set_cssclass("btn_WF_Small");
                p.btnBbsGrdAdd.set_visible("true");
                p.btnBbsGrdAdd.set_fittocontents("width");
                p.btnBbsGrdAdd.move("1304.00","2","96","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            obj.set_type("default");
            this.divForm.form.tabMain.tpgTrm.form.divForm.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.tabMain.tpgTrm.form.divForm.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.tabMain.tpgTrm.form.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            obj.set_type("default");
            this.divForm.form.tabMain.tpgTrm.form.divForm.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.tabMain.tpgTrm.form.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form.tabMain.tpgTrm.form.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divSch.set_taborder("1");
                p.divSch.set_text("Div00");
                p.divSch.set_cssclass("div_WF_SchBg");
                p.divSch.set_formscrollbartype("none none");
                p.divSch.set_formscrolltype("none");
                p.divSch.set_fittocontents("height");
                p.divSch.move("0","0","100%","198",null,null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","divSch:30","100%","800",null,null);
            	}
            );
            obj.set_verticalgap("30");
            obj.set_type("vertical");
            this.divForm.form.tabMain.tpgTrm.form.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.tabMain.tpgTrm.form.divForm.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.tabMain.tpgTrm.form.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("0px 10px 0px 20px");
            obj.set_flexmainaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexcrossaxisalign("start");
            obj.set_verticalgap("30");
            this.divForm.form.tabMain.tpgTrm.form.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.tabMain.tpgTrm.form
            obj = new Layout("default","",0,0,this.divForm.form.tabMain.tpgTrm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.set_fittocontents("height");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","0",null,null,"20","0");
            	}
            );
            this.divForm.form.tabMain.tpgTrm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.tabMain.tpgTrm.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.tabMain.tpgTrm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.tabMain.tpgTrm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.tabMain.tpgDmn.form.divForm.form.divSch.form
            obj = new Layout("default","",0,0,this.divForm.form.tabMain.tpgDmn.form.divForm.form.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panLabel.set_taborder("5");
                p.panLabel.set_verticalgap("8");
                p.panLabel.set_flexwrap("wrap");
                p.panLabel.set_spacing("0px 0px 10px 0px");
                p.panLabel.set_type("horizontal");
                p.panLabel.set_flexcrossaxisalign("start");
                p.panLabel.set_horizontalgap("40");
                p.panLabel.set_fittocontents("height");
                p.panLabel.set_maxheight("");
                p.panLabel.move("20.00","14","97.04%","53",null,null);

                p.staLabel.set_taborder("6");
                p.staLabel.set_text("등록일자");
                p.staLabel.set_cssclass("sta_WF_SchLabel");
                p.staLabel.set_flexshrink("0");
                p.staLabel.set_minwidth("");
                p.staLabel.move("0","0","100","40",null,null);

                p.pan01.set_taborder("2");
                p.pan01.set_type("horizontal");
                p.pan01.set_horizontalgap("10");
                p.pan01.set_maxheight("");
                p.pan01.set_minwidth("");
                p.pan01.move("1694.00","398","430","40",null,null);

                p.pan03.set_taborder("3");
                p.pan03.set_type("horizontal");
                p.pan03.set_horizontalgap("10");
                p.pan03.set_minwidth("");
                p.pan03.move("1694.00","398","430","45",null,null);

                p.pan00.set_taborder("7");
                p.pan00.set_type("horizontal");
                p.pan00.set_horizontalgap("10");
                p.pan00.set_flexwrap("nowrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_minwidth("");
                p.pan00.move("20.00","67","430","45",null,null);

                p.edtTrmNm.set_taborder("0");
                p.edtTrmNm.set_cssclass("edt_WF_EdtSch");
                p.edtTrmNm.set_displaynulltext("[%]검색어[%]");
                p.edtTrmNm.move("1270","10","320","40",null,null);

                p.staLabel03.set_taborder("11");
                p.staLabel03.set_text("제목");
                p.staLabel03.set_cssclass("sta_WF_SchLabel");
                p.staLabel03.set_flexshrink("0");
                p.staLabel03.set_maxwidth("");
                p.staLabel03.move("0","0","100","40",null,null);

                p.panClose.set_taborder("9");
                p.panClose.set_type("vertical");
                p.panClose.set_cssclass("pal_WF_SchLine");
                p.panClose.set_flexcrossaxisalign("end");
                p.panClose.move("30","151","100%","30",null,null);

                p.btnInqClose.set_taborder("8");
                p.btnInqClose.set_cssclass("btn_WF_SchClose");
                p.btnInqClose.move("1251","185","52","29",null,null);

                p.panSchBtn.set_taborder("10");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100%","40",null,null);

                p.btnTrmInq.set_taborder("1");
                p.btnTrmInq.set_text("조회하기");
                p.btnTrmInq.set_cssclass("btn_WF_Search");
                p.btnTrmInq.move("653.00","146","126","40",null,null);

                p.pan01_00.set_taborder("4");
                p.pan01_00.set_type("horizontal");
                p.pan01_00.set_horizontalgap("10");
                p.pan01_00.set_maxheight("");
                p.pan01_00.set_minwidth("");
                p.pan01_00.move("490.00","67","269","40",null,null);

                p.Calendar00.set_taborder("12");
                p.Calendar00.set_dateformat("yyyy-MM-dd");
                p.Calendar00.move("0","0","145","40",null,null);

                p.staDash.set_taborder("13");
                p.staDash.set_text("~");
                p.staDash.set_cssclass("sta_WF_Dash");
                p.staDash.move("0","0","10","40",null,null);

                p.Calendar01.set_taborder("14");
                p.Calendar01.set_dateformat("yyyy-MM-dd");
                p.Calendar01.move("295.00","71","145","40",null,null);
            	}
            );
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            this.divForm.form.tabMain.tpgDmn.form.divForm.form.divSch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.tabMain.tpgDmn.form.divForm.form.divSch.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.tabMain.tpgDmn.form.divForm.form.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panClose.move("30","151","100%","30",null,null);

                p.panLabel.set_horizontalgap("50");
                p.panLabel.set_verticalgap("8");
                p.panLabel.move("132","47","100%","288",null,null);

                p.pan00.set_type("horizontal");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_horizontalgap("8");
                p.pan00.move("1694.00","398","99.99963967469833%","80",null,null);

                p.pan03.set_horizontalgap("8");
                p.pan03.move("1694.00","398","100%","45",null,null);

                p.pan01.set_type("horizontal");
                p.pan01.set_fittocontents("height");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_horizontalgap("8");
                p.pan01.move("1694.00","398","100%","80",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("14px 16px 12px 16px");
            obj.set_flexwrap("wrap");
            this.divForm.form.tabMain.tpgDmn.form.divForm.form.divSch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.tabMain.tpgDmn.form.divForm.form.divGrd.form.divPage
            obj = new Layout("default","",0,0,this.divForm.form.tabMain.tpgDmn.form.divForm.form.divGrd.form.divPage.form,function(p){});
            this.divForm.form.tabMain.tpgDmn.form.divForm.form.divGrd.form.divPage.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.tabMain.tpgDmn.form.divForm.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.tabMain.tpgDmn.form.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divPage.set_taborder("0");
                p.divPage.set_text("Div00");
                p.divPage.set_url("work::COM/util/paging/paging.xfdl");
                p.divPage.set_formscrollbartype("none none");
                p.divPage.set_formscrolltype("none");
                p.divPage.set_minheight("36");
                p.divPage.set_maxheight("");
                p.divPage.move("0","567","100.00%","36",null,null);

                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.move("0","0","100%","34",null,null);

                p.staTotal.set_taborder("2");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","0","27","34",null,null);

                p.staTrmTnocs.set_taborder("9");
                p.staTrmTnocs.set_text("0");
                p.staTrmTnocs.set_cssclass("sta_WF_Total");
                p.staTrmTnocs.set_usedecorate("true");
                p.staTrmTnocs.set_textAlign("center");
                p.staTrmTnocs.set_fittocontents("width");
                p.staTrmTnocs.move("staTotal:0","0","43","34",null,null);

                p.staTotal02.set_taborder("11");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.move("staTrmTnocs:0","0","30","34",null,null);

                p.cmbTrmCntPrPg.set_taborder("4");
                p.cmbTrmCntPrPg.set_innerdataset(divForm_form_tabMain_tpgDmn_form_divForm_form_divGrd_form_cmbTrmCntPrPg_innerdataset);
                p.cmbTrmCntPrPg.set_codecolumn("codecolumn");
                p.cmbTrmCntPrPg.set_datacolumn("datacolumn");
                p.cmbTrmCntPrPg.set_text("10");
                p.cmbTrmCntPrPg.set_value("10");
                p.cmbTrmCntPrPg.set_index("0");
                p.cmbTrmCntPrPg.move("1230","0","80","34",null,null);

                p.staTotal00.set_taborder("3");
                p.staTotal00.set_text("목록수");
                p.staTotal00.set_cssclass("sta_WF_SchLabel");
                p.staTotal00.set_fittocontents("width");
                p.staTotal00.move("1165","0","65","34",null,null);

                p.btnBbsGrdDtl.set_taborder("8");
                p.btnBbsGrdDtl.set_text("상세");
                p.btnBbsGrdDtl.set_cssclass("btn_WF_Small");
                p.btnBbsGrdDtl.set_visible("true");
                p.btnBbsGrdDtl.set_fittocontents("width");
                p.btnBbsGrdDtl.move("1410.00","2","96","34",null,null);

                p.btnBbsGrdAdd.set_taborder("9");
                p.btnBbsGrdAdd.set_text("등록");
                p.btnBbsGrdAdd.set_cssclass("btn_WF_Small");
                p.btnBbsGrdAdd.set_visible("true");
                p.btnBbsGrdAdd.set_fittocontents("width");
                p.btnBbsGrdAdd.move("1304.00","2","96","34",null,null);

                p.Grid00.set_taborder("9");
                p.Grid00.set_binddataset("dsList03");
                p.Grid00.move("0","34","100.00%",null,null,"369");
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.tabMain.tpgDmn.form.divForm.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.tabMain.tpgDmn.form.divForm.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.tabMain.tpgDmn.form.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.tabMain.tpgDmn.form.divForm.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.tabMain.tpgDmn.form.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form.tabMain.tpgDmn.form.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divSch.set_taborder("0");
                p.divSch.set_text("Div00");
                p.divSch.set_cssclass("div_WF_SchBg");
                p.divSch.set_formscrollbartype("none none");
                p.divSch.set_formscrolltype("none");
                p.divSch.set_fittocontents("height");
                p.divSch.move("0","0","100%","198",null,null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","30","100.00%","700",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("30");
            this.divForm.form.tabMain.tpgDmn.form.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.tabMain.tpgDmn.form.divForm.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.tabMain.tpgDmn.form.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("0px 10px 0px 20px");
            obj.set_flexmainaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexcrossaxisalign("start");
            obj.set_verticalgap("30");
            this.divForm.form.tabMain.tpgDmn.form.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.tabMain.tpgDmn.form
            obj = new Layout("default","",0,0,this.divForm.form.tabMain.tpgDmn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.set_fittocontents("height");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","0",null,"900","20",null);
            	}
            );
            this.divForm.form.tabMain.tpgDmn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.tabMain.tpgDmn.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.tabMain.tpgDmn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.tabMain.tpgDmn.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divSch.form
            obj = new Layout("default","",0,0,this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panLabel.set_taborder("5");
                p.panLabel.set_verticalgap("8");
                p.panLabel.set_flexwrap("wrap");
                p.panLabel.set_spacing("0px 0px 10px 0px");
                p.panLabel.set_type("horizontal");
                p.panLabel.set_flexcrossaxisalign("start");
                p.panLabel.set_horizontalgap("40");
                p.panLabel.set_fittocontents("height");
                p.panLabel.set_maxheight("");
                p.panLabel.move("20.00","14","97.04%","53",null,null);

                p.staLabel.set_taborder("6");
                p.staLabel.set_text("등록일자");
                p.staLabel.set_cssclass("sta_WF_SchLabel");
                p.staLabel.set_flexshrink("0");
                p.staLabel.set_minwidth("");
                p.staLabel.move("0","0","100","40",null,null);

                p.pan01.set_taborder("2");
                p.pan01.set_type("horizontal");
                p.pan01.set_horizontalgap("10");
                p.pan01.set_maxheight("");
                p.pan01.set_minwidth("");
                p.pan01.move("1694.00","398","430","40",null,null);

                p.pan03.set_taborder("3");
                p.pan03.set_type("horizontal");
                p.pan03.set_horizontalgap("10");
                p.pan03.set_minwidth("");
                p.pan03.move("1694.00","398","430","45",null,null);

                p.pan00.set_taborder("7");
                p.pan00.set_type("horizontal");
                p.pan00.set_horizontalgap("10");
                p.pan00.set_flexwrap("nowrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_minwidth("");
                p.pan00.move("20.00","67","430","45",null,null);

                p.edtTrmNm.set_taborder("0");
                p.edtTrmNm.set_cssclass("edt_WF_EdtSch");
                p.edtTrmNm.set_displaynulltext("[%]검색어[%]");
                p.edtTrmNm.move("1270","10","320","40",null,null);

                p.staLabel03.set_taborder("11");
                p.staLabel03.set_text("제목");
                p.staLabel03.set_cssclass("sta_WF_SchLabel");
                p.staLabel03.set_flexshrink("0");
                p.staLabel03.set_maxwidth("");
                p.staLabel03.move("0","0","100","40",null,null);

                p.panClose.set_taborder("9");
                p.panClose.set_type("vertical");
                p.panClose.set_cssclass("pal_WF_SchLine");
                p.panClose.set_flexcrossaxisalign("end");
                p.panClose.move("30","151","100%","30",null,null);

                p.btnInqClose.set_taborder("8");
                p.btnInqClose.set_cssclass("btn_WF_SchClose");
                p.btnInqClose.move("1251","185","52","29",null,null);

                p.panSchBtn.set_taborder("10");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100%","40",null,null);

                p.btnTrmInq.set_taborder("1");
                p.btnTrmInq.set_text("조회하기");
                p.btnTrmInq.set_cssclass("btn_WF_Search");
                p.btnTrmInq.move("653.00","146","126","40",null,null);

                p.pan01_00.set_taborder("4");
                p.pan01_00.set_type("horizontal");
                p.pan01_00.set_horizontalgap("10");
                p.pan01_00.set_maxheight("");
                p.pan01_00.set_minwidth("");
                p.pan01_00.move("490.00","67","269","40",null,null);

                p.Calendar00.set_taborder("12");
                p.Calendar00.set_dateformat("yyyy-MM-dd");
                p.Calendar00.move("0","0","145","40",null,null);

                p.staDash.set_taborder("13");
                p.staDash.set_text("~");
                p.staDash.set_cssclass("sta_WF_Dash");
                p.staDash.move("0","0","10","40",null,null);

                p.Calendar01.set_taborder("14");
                p.Calendar01.set_dateformat("yyyy-MM-dd");
                p.Calendar01.move("295.00","71","145","40",null,null);
            	}
            );
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divSch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divSch.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panClose.move("30","151","100%","30",null,null);

                p.panLabel.set_horizontalgap("50");
                p.panLabel.set_verticalgap("8");
                p.panLabel.move("132","47","100%","288",null,null);

                p.pan00.set_type("horizontal");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_horizontalgap("8");
                p.pan00.move("1694.00","398","99.99963967469833%","80",null,null);

                p.pan03.set_horizontalgap("8");
                p.pan03.move("1694.00","398","100%","45",null,null);

                p.pan01.set_type("horizontal");
                p.pan01.set_fittocontents("height");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_horizontalgap("8");
                p.pan01.move("1694.00","398","100%","80",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("14px 16px 12px 16px");
            obj.set_flexwrap("wrap");
            this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divSch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form.divPage
            obj = new Layout("default","",0,0,this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form.divPage.form,function(p){});
            this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form.divPage.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divPage.set_taborder("0");
                p.divPage.set_text("Div00");
                p.divPage.set_url("work::COM/util/paging/paging.xfdl");
                p.divPage.set_formscrollbartype("none none");
                p.divPage.set_formscrolltype("none");
                p.divPage.set_minheight("36");
                p.divPage.set_maxheight("");
                p.divPage.move("0","567","100.00%","36",null,null);

                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.move("0","0","100%","34",null,null);

                p.staTotal.set_taborder("2");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","0","27","34",null,null);

                p.staTrmTnocs.set_taborder("9");
                p.staTrmTnocs.set_text("0");
                p.staTrmTnocs.set_cssclass("sta_WF_Total");
                p.staTrmTnocs.set_usedecorate("true");
                p.staTrmTnocs.set_textAlign("center");
                p.staTrmTnocs.set_fittocontents("width");
                p.staTrmTnocs.move("staTotal:0","0","43","34",null,null);

                p.staTotal02.set_taborder("11");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.move("staTrmTnocs:0","0","30","34",null,null);

                p.cmbTrmCntPrPg.set_taborder("4");
                p.cmbTrmCntPrPg.set_innerdataset(divForm_form_tabMain_tpgTrmDfn_form_divForm_form_divGrd_form_cmbTrmCntPrPg_innerdataset);
                p.cmbTrmCntPrPg.set_codecolumn("codecolumn");
                p.cmbTrmCntPrPg.set_datacolumn("datacolumn");
                p.cmbTrmCntPrPg.set_text("10");
                p.cmbTrmCntPrPg.set_value("10");
                p.cmbTrmCntPrPg.set_index("0");
                p.cmbTrmCntPrPg.move("1230","0","80","34",null,null);

                p.staTotal00.set_taborder("3");
                p.staTotal00.set_text("목록수");
                p.staTotal00.set_cssclass("sta_WF_SchLabel");
                p.staTotal00.set_fittocontents("width");
                p.staTotal00.move("1165","0","65","34",null,null);

                p.btnBbsGrdDtl.set_taborder("8");
                p.btnBbsGrdDtl.set_text("상세");
                p.btnBbsGrdDtl.set_cssclass("btn_WF_Small");
                p.btnBbsGrdDtl.set_visible("true");
                p.btnBbsGrdDtl.set_fittocontents("width");
                p.btnBbsGrdDtl.move("1410.00","2","96","34",null,null);

                p.btnBbsGrdAdd.set_taborder("9");
                p.btnBbsGrdAdd.set_text("등록");
                p.btnBbsGrdAdd.set_cssclass("btn_WF_Small");
                p.btnBbsGrdAdd.set_visible("true");
                p.btnBbsGrdAdd.set_fittocontents("width");
                p.btnBbsGrdAdd.move("1304.00","2","96","34",null,null);

                p.Grid00.set_taborder("9");
                p.Grid00.set_binddataset("dsList04");
                p.Grid00.move("0","34","100.00%",null,null,"369");
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divSch.set_taborder("0");
                p.divSch.set_text("Div00");
                p.divSch.set_cssclass("div_WF_SchBg");
                p.divSch.set_formscrollbartype("none none");
                p.divSch.set_formscrolltype("none");
                p.divSch.set_fittocontents("height");
                p.divSch.move("0","0","100%","198",null,null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","30","100.00%","700",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("30");
            this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("0px 10px 0px 20px");
            obj.set_flexmainaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexcrossaxisalign("start");
            obj.set_verticalgap("30");
            this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.tabMain.tpgTrmDfn.form
            obj = new Layout("default","",0,0,this.divForm.form.tabMain.tpgTrmDfn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.set_fittocontents("height");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","0",null,"900","20",null);
            	}
            );
            this.divForm.form.tabMain.tpgTrmDfn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.tabMain.tpgTrmDfn.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.tabMain.tpgTrmDfn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.tabMain.tpgTrmDfn.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.tabMain.Tabpage1.form.divSch.form
            obj = new Layout("default","",0,0,this.divForm.form.tabMain.Tabpage1.form.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panLabel.set_taborder("5");
                p.panLabel.set_verticalgap("8");
                p.panLabel.set_flexwrap("wrap");
                p.panLabel.set_spacing("0px 0px 10px 0px");
                p.panLabel.set_type("horizontal");
                p.panLabel.set_flexcrossaxisalign("start");
                p.panLabel.set_horizontalgap("40");
                p.panLabel.set_fittocontents("height");
                p.panLabel.set_maxheight("");
                p.panLabel.move("20.00","14","97.04%","53",null,null);

                p.staLabel.set_taborder("6");
                p.staLabel.set_text("등록일자");
                p.staLabel.set_cssclass("sta_WF_SchLabel");
                p.staLabel.set_flexshrink("0");
                p.staLabel.set_minwidth("");
                p.staLabel.move("0","0","100","40",null,null);

                p.pan01.set_taborder("2");
                p.pan01.set_type("horizontal");
                p.pan01.set_horizontalgap("10");
                p.pan01.set_maxheight("");
                p.pan01.set_minwidth("");
                p.pan01.move("1694.00","398","430","40",null,null);

                p.pan03.set_taborder("3");
                p.pan03.set_type("horizontal");
                p.pan03.set_horizontalgap("10");
                p.pan03.set_minwidth("");
                p.pan03.move("1694.00","398","430","45",null,null);

                p.pan00.set_taborder("7");
                p.pan00.set_type("horizontal");
                p.pan00.set_horizontalgap("10");
                p.pan00.set_flexwrap("nowrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_minwidth("");
                p.pan00.move("20.00","67","430","45",null,null);

                p.edtTrmNm.set_taborder("0");
                p.edtTrmNm.set_cssclass("edt_WF_EdtSch");
                p.edtTrmNm.set_displaynulltext("[%]검색어[%]");
                p.edtTrmNm.move("1270","10","320","40",null,null);

                p.staLabel03.set_taborder("11");
                p.staLabel03.set_text("제목");
                p.staLabel03.set_cssclass("sta_WF_SchLabel");
                p.staLabel03.set_flexshrink("0");
                p.staLabel03.set_maxwidth("");
                p.staLabel03.move("0","0","100","40",null,null);

                p.panClose.set_taborder("9");
                p.panClose.set_type("vertical");
                p.panClose.set_cssclass("pal_WF_SchLine");
                p.panClose.set_flexcrossaxisalign("end");
                p.panClose.move("30","151","100%","30",null,null);

                p.btnInqClose.set_taborder("8");
                p.btnInqClose.set_cssclass("btn_WF_SchClose");
                p.btnInqClose.move("1251","185","52","29",null,null);

                p.panSchBtn.set_taborder("10");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100%","40",null,null);

                p.btnTrmInq.set_taborder("1");
                p.btnTrmInq.set_text("조회하기");
                p.btnTrmInq.set_cssclass("btn_WF_Search");
                p.btnTrmInq.move("653.00","146","126","40",null,null);

                p.pan01_00.set_taborder("4");
                p.pan01_00.set_type("horizontal");
                p.pan01_00.set_horizontalgap("10");
                p.pan01_00.set_maxheight("");
                p.pan01_00.set_minwidth("");
                p.pan01_00.move("490.00","67","269","40",null,null);

                p.Calendar00.set_taborder("12");
                p.Calendar00.set_dateformat("yyyy-MM-dd");
                p.Calendar00.move("0","0","145","40",null,null);

                p.staDash.set_taborder("13");
                p.staDash.set_text("~");
                p.staDash.set_cssclass("sta_WF_Dash");
                p.staDash.move("0","0","10","40",null,null);

                p.Calendar01.set_taborder("14");
                p.Calendar01.set_dateformat("yyyy-MM-dd");
                p.Calendar01.move("295.00","71","145","40",null,null);
            	}
            );
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            this.divForm.form.tabMain.Tabpage1.form.divSch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.tabMain.Tabpage1.form.divSch.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.tabMain.Tabpage1.form.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panClose.move("30","151","100%","30",null,null);

                p.panLabel.set_horizontalgap("50");
                p.panLabel.set_verticalgap("8");
                p.panLabel.move("132","47","100%","288",null,null);

                p.pan00.set_type("horizontal");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_horizontalgap("8");
                p.pan00.move("1694.00","398","99.99963967469833%","80",null,null);

                p.pan03.set_horizontalgap("8");
                p.pan03.move("1694.00","398","100%","45",null,null);

                p.pan01.set_type("horizontal");
                p.pan01.set_fittocontents("height");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_horizontalgap("8");
                p.pan01.move("1694.00","398","100%","80",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("14px 16px 12px 16px");
            obj.set_flexwrap("wrap");
            this.divForm.form.tabMain.Tabpage1.form.divSch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.tabMain.Tabpage1.form.divGrd.form.divPage
            obj = new Layout("default","",0,0,this.divForm.form.tabMain.Tabpage1.form.divGrd.form.divPage.form,function(p){});
            this.divForm.form.tabMain.Tabpage1.form.divGrd.form.divPage.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.tabMain.Tabpage1.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.tabMain.Tabpage1.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divPage.set_taborder("0");
                p.divPage.set_text("Div00");
                p.divPage.set_url("work::COM/util/paging/paging.xfdl");
                p.divPage.set_formscrollbartype("none none");
                p.divPage.set_formscrolltype("none");
                p.divPage.set_minheight("36");
                p.divPage.set_maxheight("");
                p.divPage.move("0","567","100.00%","36",null,null);

                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.move("0","0","100%","34",null,null);

                p.staTotal.set_taborder("2");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","0","27","34",null,null);

                p.staTrmTnocs.set_taborder("9");
                p.staTrmTnocs.set_text("0");
                p.staTrmTnocs.set_cssclass("sta_WF_Total");
                p.staTrmTnocs.set_usedecorate("true");
                p.staTrmTnocs.set_textAlign("center");
                p.staTrmTnocs.set_fittocontents("width");
                p.staTrmTnocs.move("staTotal:0","0","43","34",null,null);

                p.staTotal02.set_taborder("11");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.move("staTrmTnocs:0","0","30","34",null,null);

                p.cmbTrmCntPrPg.set_taborder("4");
                p.cmbTrmCntPrPg.set_innerdataset(divForm_form_tabMain_Tabpage1_form_divGrd_form_cmbTrmCntPrPg_innerdataset);
                p.cmbTrmCntPrPg.set_codecolumn("codecolumn");
                p.cmbTrmCntPrPg.set_datacolumn("datacolumn");
                p.cmbTrmCntPrPg.set_text("10");
                p.cmbTrmCntPrPg.set_value("10");
                p.cmbTrmCntPrPg.set_index("0");
                p.cmbTrmCntPrPg.move("1230","0","80","34",null,null);

                p.staTotal00.set_taborder("3");
                p.staTotal00.set_text("목록수");
                p.staTotal00.set_cssclass("sta_WF_SchLabel");
                p.staTotal00.set_fittocontents("width");
                p.staTotal00.move("1165","0","65","34",null,null);

                p.btnBbsGrdDtl.set_taborder("8");
                p.btnBbsGrdDtl.set_text("상세");
                p.btnBbsGrdDtl.set_cssclass("btn_WF_Small");
                p.btnBbsGrdDtl.set_visible("true");
                p.btnBbsGrdDtl.set_fittocontents("width");
                p.btnBbsGrdDtl.move("1410.00","2","96","34",null,null);

                p.btnBbsGrdAdd.set_taborder("9");
                p.btnBbsGrdAdd.set_text("등록");
                p.btnBbsGrdAdd.set_cssclass("btn_WF_Small");
                p.btnBbsGrdAdd.set_visible("true");
                p.btnBbsGrdAdd.set_fittocontents("width");
                p.btnBbsGrdAdd.move("1304.00","2","96","34",null,null);

                p.Grid00.set_taborder("9");
                p.Grid00.set_binddataset("dsList05");
                p.Grid00.move("0","34","100.00%",null,null,"369");
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.tabMain.Tabpage1.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.tabMain.Tabpage1.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.tabMain.Tabpage1.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.tabMain.Tabpage1.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.tabMain.Tabpage1.form
            obj = new Layout("default","",0,0,this.divForm.form.tabMain.Tabpage1.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divSch.set_taborder("0");
                p.divSch.set_text("Div00");
                p.divSch.set_cssclass("div_WF_SchBg");
                p.divSch.set_formscrollbartype("none none");
                p.divSch.set_formscrolltype("none");
                p.divSch.set_fittocontents("height");
                p.divSch.move("0","0","98.61%","191",null,null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","221","98.61%","678",null,null);
            	}
            );
            this.divForm.form.tabMain.Tabpage1.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.tabMain.Tabpage1.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.tabMain.Tabpage1.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.tabMain.Tabpage1.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.tabMain.Tabpage2.form.divSch.form
            obj = new Layout("default","",0,0,this.divForm.form.tabMain.Tabpage2.form.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panLabel.set_taborder("5");
                p.panLabel.set_verticalgap("8");
                p.panLabel.set_flexwrap("wrap");
                p.panLabel.set_spacing("0px 0px 10px 0px");
                p.panLabel.set_type("horizontal");
                p.panLabel.set_flexcrossaxisalign("start");
                p.panLabel.set_horizontalgap("40");
                p.panLabel.set_fittocontents("height");
                p.panLabel.set_maxheight("");
                p.panLabel.move("20.00","14","97.04%","53",null,null);

                p.staLabel.set_taborder("6");
                p.staLabel.set_text("등록일자");
                p.staLabel.set_cssclass("sta_WF_SchLabel");
                p.staLabel.set_flexshrink("0");
                p.staLabel.set_minwidth("");
                p.staLabel.move("0","0","100","40",null,null);

                p.pan01.set_taborder("2");
                p.pan01.set_type("horizontal");
                p.pan01.set_horizontalgap("10");
                p.pan01.set_maxheight("");
                p.pan01.set_minwidth("");
                p.pan01.move("1694.00","398","430","40",null,null);

                p.pan03.set_taborder("3");
                p.pan03.set_type("horizontal");
                p.pan03.set_horizontalgap("10");
                p.pan03.set_minwidth("");
                p.pan03.move("1694.00","398","430","45",null,null);

                p.pan00.set_taborder("7");
                p.pan00.set_type("horizontal");
                p.pan00.set_horizontalgap("10");
                p.pan00.set_flexwrap("nowrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_minwidth("");
                p.pan00.move("20.00","67","430","45",null,null);

                p.edtTrmNm.set_taborder("0");
                p.edtTrmNm.set_cssclass("edt_WF_EdtSch");
                p.edtTrmNm.set_displaynulltext("[%]검색어[%]");
                p.edtTrmNm.move("1270","10","320","40",null,null);

                p.staLabel03.set_taborder("11");
                p.staLabel03.set_text("제목");
                p.staLabel03.set_cssclass("sta_WF_SchLabel");
                p.staLabel03.set_flexshrink("0");
                p.staLabel03.set_maxwidth("");
                p.staLabel03.move("0","0","100","40",null,null);

                p.panClose.set_taborder("9");
                p.panClose.set_type("vertical");
                p.panClose.set_cssclass("pal_WF_SchLine");
                p.panClose.set_flexcrossaxisalign("end");
                p.panClose.move("30","151","100%","30",null,null);

                p.btnInqClose.set_taborder("8");
                p.btnInqClose.set_cssclass("btn_WF_SchClose");
                p.btnInqClose.move("1251","185","52","29",null,null);

                p.panSchBtn.set_taborder("10");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100%","40",null,null);

                p.btnTrmInq.set_taborder("1");
                p.btnTrmInq.set_text("조회하기");
                p.btnTrmInq.set_cssclass("btn_WF_Search");
                p.btnTrmInq.move("653.00","146","126","40",null,null);

                p.pan01_00.set_taborder("4");
                p.pan01_00.set_type("horizontal");
                p.pan01_00.set_horizontalgap("10");
                p.pan01_00.set_maxheight("");
                p.pan01_00.set_minwidth("");
                p.pan01_00.move("490.00","67","269","40",null,null);

                p.Calendar00.set_taborder("12");
                p.Calendar00.set_dateformat("yyyy-MM-dd");
                p.Calendar00.move("0","0","145","40",null,null);

                p.staDash.set_taborder("13");
                p.staDash.set_text("~");
                p.staDash.set_cssclass("sta_WF_Dash");
                p.staDash.move("0","0","10","40",null,null);

                p.Calendar01.set_taborder("14");
                p.Calendar01.set_dateformat("yyyy-MM-dd");
                p.Calendar01.move("295.00","71","145","40",null,null);
            	}
            );
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            this.divForm.form.tabMain.Tabpage2.form.divSch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.tabMain.Tabpage2.form.divSch.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.tabMain.Tabpage2.form.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panClose.move("30","151","100%","30",null,null);

                p.panLabel.set_horizontalgap("50");
                p.panLabel.set_verticalgap("8");
                p.panLabel.move("132","47","100%","288",null,null);

                p.pan00.set_type("horizontal");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_horizontalgap("8");
                p.pan00.move("1694.00","398","99.99963967469833%","80",null,null);

                p.pan03.set_horizontalgap("8");
                p.pan03.move("1694.00","398","100%","45",null,null);

                p.pan01.set_type("horizontal");
                p.pan01.set_fittocontents("height");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_horizontalgap("8");
                p.pan01.move("1694.00","398","100%","80",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("14px 16px 12px 16px");
            obj.set_flexwrap("wrap");
            this.divForm.form.tabMain.Tabpage2.form.divSch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.tabMain.Tabpage2.form.divGrd.form.divPage
            obj = new Layout("default","",0,0,this.divForm.form.tabMain.Tabpage2.form.divGrd.form.divPage.form,function(p){});
            this.divForm.form.tabMain.Tabpage2.form.divGrd.form.divPage.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.tabMain.Tabpage2.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.tabMain.Tabpage2.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divPage.set_taborder("0");
                p.divPage.set_text("Div00");
                p.divPage.set_url("work::COM/util/paging/paging.xfdl");
                p.divPage.set_formscrollbartype("none none");
                p.divPage.set_formscrolltype("none");
                p.divPage.set_minheight("36");
                p.divPage.set_maxheight("");
                p.divPage.move("0","567","100.00%","36",null,null);

                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.move("0","0","100%","34",null,null);

                p.staTotal.set_taborder("2");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","0","27","34",null,null);

                p.staTrmTnocs.set_taborder("9");
                p.staTrmTnocs.set_text("0");
                p.staTrmTnocs.set_cssclass("sta_WF_Total");
                p.staTrmTnocs.set_usedecorate("true");
                p.staTrmTnocs.set_textAlign("center");
                p.staTrmTnocs.set_fittocontents("width");
                p.staTrmTnocs.move("staTotal:0","0","43","34",null,null);

                p.staTotal02.set_taborder("11");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.move("staTrmTnocs:0","0","30","34",null,null);

                p.cmbTrmCntPrPg.set_taborder("4");
                p.cmbTrmCntPrPg.set_innerdataset(divForm_form_tabMain_Tabpage2_form_divGrd_form_cmbTrmCntPrPg_innerdataset);
                p.cmbTrmCntPrPg.set_codecolumn("codecolumn");
                p.cmbTrmCntPrPg.set_datacolumn("datacolumn");
                p.cmbTrmCntPrPg.set_text("10");
                p.cmbTrmCntPrPg.set_value("10");
                p.cmbTrmCntPrPg.set_index("0");
                p.cmbTrmCntPrPg.move("1230","0","80","34",null,null);

                p.staTotal00.set_taborder("3");
                p.staTotal00.set_text("목록수");
                p.staTotal00.set_cssclass("sta_WF_SchLabel");
                p.staTotal00.set_fittocontents("width");
                p.staTotal00.move("1165","0","65","34",null,null);

                p.btnBbsGrdDtl.set_taborder("8");
                p.btnBbsGrdDtl.set_text("상세");
                p.btnBbsGrdDtl.set_cssclass("btn_WF_Small");
                p.btnBbsGrdDtl.set_visible("true");
                p.btnBbsGrdDtl.set_fittocontents("width");
                p.btnBbsGrdDtl.move("1410.00","2","96","34",null,null);

                p.btnBbsGrdAdd.set_taborder("9");
                p.btnBbsGrdAdd.set_text("등록");
                p.btnBbsGrdAdd.set_cssclass("btn_WF_Small");
                p.btnBbsGrdAdd.set_visible("true");
                p.btnBbsGrdAdd.set_fittocontents("width");
                p.btnBbsGrdAdd.move("1304.00","2","96","34",null,null);

                p.Grid00.set_taborder("9");
                p.Grid00.set_binddataset("dsList06");
                p.Grid00.move("0","34","100.00%",null,null,"369");
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.tabMain.Tabpage2.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.tabMain.Tabpage2.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.tabMain.Tabpage2.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.tabMain.Tabpage2.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.tabMain.Tabpage2.form
            obj = new Layout("default","",0,0,this.divForm.form.tabMain.Tabpage2.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divSch.set_taborder("0");
                p.divSch.set_text("Div00");
                p.divSch.set_cssclass("div_WF_SchBg");
                p.divSch.set_formscrollbartype("none none");
                p.divSch.set_formscrolltype("none");
                p.divSch.set_fittocontents("height");
                p.divSch.move("0","0","98.61%","191",null,null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","221","98.61%","678",null,null);
            	}
            );
            this.divForm.form.tabMain.Tabpage2.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.tabMain.Tabpage2.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.tabMain.Tabpage2.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.tabMain.Tabpage2.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.tabMain.Tabpage3.form.divSch.form
            obj = new Layout("default","",0,0,this.divForm.form.tabMain.Tabpage3.form.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panLabel.set_taborder("5");
                p.panLabel.set_verticalgap("8");
                p.panLabel.set_flexwrap("wrap");
                p.panLabel.set_spacing("0px 0px 10px 0px");
                p.panLabel.set_type("horizontal");
                p.panLabel.set_flexcrossaxisalign("start");
                p.panLabel.set_horizontalgap("40");
                p.panLabel.set_fittocontents("height");
                p.panLabel.set_maxheight("");
                p.panLabel.move("20.00","14","97.04%","53",null,null);

                p.staLabel.set_taborder("6");
                p.staLabel.set_text("등록일자");
                p.staLabel.set_cssclass("sta_WF_SchLabel");
                p.staLabel.set_flexshrink("0");
                p.staLabel.set_minwidth("");
                p.staLabel.move("0","0","100","40",null,null);

                p.pan01.set_taborder("2");
                p.pan01.set_type("horizontal");
                p.pan01.set_horizontalgap("10");
                p.pan01.set_maxheight("");
                p.pan01.set_minwidth("");
                p.pan01.move("1694.00","398","430","40",null,null);

                p.pan03.set_taborder("3");
                p.pan03.set_type("horizontal");
                p.pan03.set_horizontalgap("10");
                p.pan03.set_minwidth("");
                p.pan03.move("1694.00","398","430","45",null,null);

                p.pan00.set_taborder("7");
                p.pan00.set_type("horizontal");
                p.pan00.set_horizontalgap("10");
                p.pan00.set_flexwrap("nowrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_minwidth("");
                p.pan00.move("20.00","67","430","45",null,null);

                p.edtTrmNm.set_taborder("0");
                p.edtTrmNm.set_cssclass("edt_WF_EdtSch");
                p.edtTrmNm.set_displaynulltext("[%]검색어[%]");
                p.edtTrmNm.move("1270","10","320","40",null,null);

                p.staLabel03.set_taborder("11");
                p.staLabel03.set_text("제목");
                p.staLabel03.set_cssclass("sta_WF_SchLabel");
                p.staLabel03.set_flexshrink("0");
                p.staLabel03.set_maxwidth("");
                p.staLabel03.move("0","0","100","40",null,null);

                p.panClose.set_taborder("9");
                p.panClose.set_type("vertical");
                p.panClose.set_cssclass("pal_WF_SchLine");
                p.panClose.set_flexcrossaxisalign("end");
                p.panClose.move("30","151","100%","30",null,null);

                p.btnInqClose.set_taborder("8");
                p.btnInqClose.set_cssclass("btn_WF_SchClose");
                p.btnInqClose.move("1251","185","52","29",null,null);

                p.panSchBtn.set_taborder("10");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100%","40",null,null);

                p.btnTrmInq.set_taborder("1");
                p.btnTrmInq.set_text("조회하기");
                p.btnTrmInq.set_cssclass("btn_WF_Search");
                p.btnTrmInq.move("653.00","146","126","40",null,null);

                p.pan01_00.set_taborder("4");
                p.pan01_00.set_type("horizontal");
                p.pan01_00.set_horizontalgap("10");
                p.pan01_00.set_maxheight("");
                p.pan01_00.set_minwidth("");
                p.pan01_00.move("490.00","67","269","40",null,null);

                p.Calendar00.set_taborder("12");
                p.Calendar00.set_dateformat("yyyy-MM-dd");
                p.Calendar00.move("0","0","145","40",null,null);

                p.staDash.set_taborder("13");
                p.staDash.set_text("~");
                p.staDash.set_cssclass("sta_WF_Dash");
                p.staDash.move("0","0","10","40",null,null);

                p.Calendar01.set_taborder("14");
                p.Calendar01.set_dateformat("yyyy-MM-dd");
                p.Calendar01.move("295.00","71","145","40",null,null);
            	}
            );
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            this.divForm.form.tabMain.Tabpage3.form.divSch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.tabMain.Tabpage3.form.divSch.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.tabMain.Tabpage3.form.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panClose.move("30","151","100%","30",null,null);

                p.panLabel.set_horizontalgap("50");
                p.panLabel.set_verticalgap("8");
                p.panLabel.move("132","47","100%","288",null,null);

                p.pan00.set_type("horizontal");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_horizontalgap("8");
                p.pan00.move("1694.00","398","99.99963967469833%","80",null,null);

                p.pan03.set_horizontalgap("8");
                p.pan03.move("1694.00","398","100%","45",null,null);

                p.pan01.set_type("horizontal");
                p.pan01.set_fittocontents("height");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_horizontalgap("8");
                p.pan01.move("1694.00","398","100%","80",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("14px 16px 12px 16px");
            obj.set_flexwrap("wrap");
            this.divForm.form.tabMain.Tabpage3.form.divSch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.tabMain.Tabpage3.form.divGrd.form.divPage
            obj = new Layout("default","",0,0,this.divForm.form.tabMain.Tabpage3.form.divGrd.form.divPage.form,function(p){});
            this.divForm.form.tabMain.Tabpage3.form.divGrd.form.divPage.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.tabMain.Tabpage3.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.tabMain.Tabpage3.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divPage.set_taborder("0");
                p.divPage.set_text("Div00");
                p.divPage.set_url("work::COM/util/paging/paging.xfdl");
                p.divPage.set_formscrollbartype("none none");
                p.divPage.set_formscrolltype("none");
                p.divPage.set_minheight("36");
                p.divPage.set_maxheight("");
                p.divPage.move("0","567","100.00%","36",null,null);

                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.move("0","0","100%","34",null,null);

                p.staTotal.set_taborder("2");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","0","27","34",null,null);

                p.staTrmTnocs.set_taborder("9");
                p.staTrmTnocs.set_text("0");
                p.staTrmTnocs.set_cssclass("sta_WF_Total");
                p.staTrmTnocs.set_usedecorate("true");
                p.staTrmTnocs.set_textAlign("center");
                p.staTrmTnocs.set_fittocontents("width");
                p.staTrmTnocs.move("staTotal:0","0","43","34",null,null);

                p.staTotal02.set_taborder("11");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.move("staTrmTnocs:0","0","30","34",null,null);

                p.cmbTrmCntPrPg.set_taborder("4");
                p.cmbTrmCntPrPg.set_innerdataset(divForm_form_tabMain_Tabpage3_form_divGrd_form_cmbTrmCntPrPg_innerdataset);
                p.cmbTrmCntPrPg.set_codecolumn("codecolumn");
                p.cmbTrmCntPrPg.set_datacolumn("datacolumn");
                p.cmbTrmCntPrPg.set_text("10");
                p.cmbTrmCntPrPg.set_value("10");
                p.cmbTrmCntPrPg.set_index("0");
                p.cmbTrmCntPrPg.move("1230","0","80","34",null,null);

                p.staTotal00.set_taborder("3");
                p.staTotal00.set_text("목록수");
                p.staTotal00.set_cssclass("sta_WF_SchLabel");
                p.staTotal00.set_fittocontents("width");
                p.staTotal00.move("1165","0","65","34",null,null);

                p.btnBbsGrdDtl.set_taborder("8");
                p.btnBbsGrdDtl.set_text("상세");
                p.btnBbsGrdDtl.set_cssclass("btn_WF_Small");
                p.btnBbsGrdDtl.set_visible("true");
                p.btnBbsGrdDtl.set_fittocontents("width");
                p.btnBbsGrdDtl.move("1410.00","2","96","34",null,null);

                p.btnBbsGrdAdd.set_taborder("9");
                p.btnBbsGrdAdd.set_text("등록");
                p.btnBbsGrdAdd.set_cssclass("btn_WF_Small");
                p.btnBbsGrdAdd.set_visible("true");
                p.btnBbsGrdAdd.set_fittocontents("width");
                p.btnBbsGrdAdd.move("1304.00","2","96","34",null,null);

                p.Grid00.set_taborder("9");
                p.Grid00.set_binddataset("dsList07");
                p.Grid00.move("0","34","100.00%",null,null,"369");
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.tabMain.Tabpage3.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.tabMain.Tabpage3.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.tabMain.Tabpage3.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.tabMain.Tabpage3.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.tabMain.Tabpage3.form
            obj = new Layout("default","",0,0,this.divForm.form.tabMain.Tabpage3.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divSch.set_taborder("0");
                p.divSch.set_text("Div00");
                p.divSch.set_cssclass("div_WF_SchBg");
                p.divSch.set_formscrollbartype("none none");
                p.divSch.set_formscrolltype("none");
                p.divSch.set_fittocontents("height");
                p.divSch.move("0","0","98.61%","191",null,null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","221","98.61%","678",null,null);
            	}
            );
            this.divForm.form.tabMain.Tabpage3.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.tabMain.Tabpage3.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.tabMain.Tabpage3.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.tabMain.Tabpage3.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.tabMain.set_taborder("1");
                p.tabMain.set_tabindex("0");
                p.tabMain.set_background("border-box");
                p.tabMain.move("-1.00","195","1440","860",null,null);

                p.tabMain.tpgWord.set_text("공지사항");

                p.tabMain.tpgTrm.set_text("자유게시판");

                p.tabMain.tpgDmn.set_text("공통기능(API)");

                p.tabMain.tpgTrmDfn.set_text("공통화면");

                p.tabMain.Tabpage1.set_text("표준문서");

                p.tabMain.Tabpage2.set_text("참조문서");

                p.tabMain.Tabpage3.set_text("테이블");
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("30");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("Layout0","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("0px 10px 0px 20px");
            obj.set_flexmainaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexcrossaxisalign("start");
            obj.set_verticalgap("30");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("공지사항 및 게시내용 목록");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.set_fittocontents("height");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","0",null,"900","60",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",390,600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.set_cssclass("div_WF_QuickFrBgM");
                p.divForm.move("0","0","100.00%","1089",null,null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divForm.form.tabMain.tpgWord.form.divForm.form.divSch.form.edtTrmNm","value","dsSearch","pBbsTtl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.tabMain.tpgWord.form.divForm.form.divSch.form.Calendar00","value","dsSearch","pBgngYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.tabMain.tpgDmn.form.divForm.form.divSch.form.edtTrmNm","value","dsSearch","pBbsTtl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.tabMain.tpgDmn.form.divForm.form.divSch.form.Calendar00","value","dsSearch","pBgngYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divSch.form.edtTrmNm","value","dsSearch","pBbsTtl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divSch.form.Calendar00","value","dsSearch","pBgngYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.tabMain.Tabpage1.form.divSch.form.edtTrmNm","value","dsSearch","pBbsTtl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divForm.form.tabMain.Tabpage1.form.divSch.form.Calendar00","value","dsSearch","pBgngYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divForm.form.tabMain.Tabpage2.form.divSch.form.edtTrmNm","value","dsSearch","pBbsTtl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divForm.form.tabMain.Tabpage2.form.divSch.form.Calendar00","value","dsSearch","pBgngYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divForm.form.tabMain.Tabpage3.form.divSch.form.edtTrmNm","value","dsSearch","pBbsTtl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divForm.form.tabMain.Tabpage3.form.divSch.form.Calendar00","value","dsSearch","pBgngYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divForm.form.tabMain.tpgTrm.form.divForm.form.divSch.form.edtTrmNm","value","dsSearch","pBbsTtl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.tabMain.tpgTrm.form.divForm.form.divSch.form.Calendar00","value","dsSearch","pBgngYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divForm.form.tabMain.tpgWord.form.divForm.form.divGrd.form.staTrmTnocs","text","dsList01","allCnt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divForm.form.tabMain.tpgTrm.form.divForm.form.divGrd.form.staTrmTnocs","text","dsList02","allCnt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divForm.form.tabMain.tpgDmn.form.divForm.form.divGrd.form.staTrmTnocs","text","dsList03","allCnt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form.staTrmTnocs","text","dsList04","allCnt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divForm.form.tabMain.Tabpage1.form.divGrd.form.staTrmTnocs","text","dsList05","allCnt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divForm.form.tabMain.Tabpage2.form.divGrd.form.staTrmTnocs","text","dsList06","allCnt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divForm.form.tabMain.Tabpage3.form.divGrd.form.staTrmTnocs","text","dsList07","allCnt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divForm.form.tabMain.Tabpage3.form.divSch.form.Calendar01","value","dsSearch","pEndYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divForm.form.tabMain.Tabpage2.form.divSch.form.Calendar01","value","dsSearch","pEndYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divForm.form.tabMain.Tabpage1.form.divSch.form.Calendar01","value","dsSearch","pEndYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divSch.form.Calendar01","value","dsSearch","pEndYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divForm.form.tabMain.tpgDmn.form.divForm.form.divSch.form.Calendar01","value","dsSearch","pEndYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divForm.form.tabMain.tpgTrm.form.divForm.form.divSch.form.Calendar01","value","dsSearch","pEndYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divForm.form.tabMain.tpgWord.form.divForm.form.divSch.form.Calendar01","value","dsSearch","pEndYmd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","work::COM/util/paging/paging.xfdl");
        };
        
        // User Script
        this.registerScript("REN900M03.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	REN900M00.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/09/23
        *  @Desction   ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/09/10			박영수						최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	trace(">>form_onload<<");
        	this.gfnFormOnload(obj); //필수함수

        	//페이지 로딩시 처음에 실행 되는 함수
        	this.fnInit();

        	//페이징을 위하여 검색 함수를 실행
        	this.cfnSearch(1);
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //검색 조회
        this.cfnSearch = function (page)
        {
        	console.log("cfnSearch");
        	//그리드 한 페이지에 게시되는 데이터건수
        	//var recordCountPerPage = this.divForm.form.divGrd.form.grdListCnt.value;
        	//this.dsSearch.setColumn(0, "currentPageNo", page);
        	//this.dsSearch.setColumn(0, "recordCountPerPage", recordCountPerPage);
        	this.getSearchTransaction();
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        /**
        	strSvcId 		// transaction을 구분하기 위한 svc id값
        	strSvcUrl 		// trabsaction을 요청할 주소
        	inData 			// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        	outData 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        	strArg 			// 입력값으로 보낼 arguments, strFormData="20120607"
        	callBackFnc 	// transaction의 결과를 받을 Function 이름
        	isAsync 		// 비동기통신 여부 [생략가능]
        **/

        //목록 조회 트랙젝션
        this.getSearchTransaction = function() {

        	trace(">>getSearchTransaction tabindex<<"+this.divForm.form.tabMain.tabindex);

        	var vBbsSe = this.fn_getBbsSe();
        	this.dsSearch.setColumn(0,"pBbsSe",vBbsSe);

        	var vOutData = "";

        	if ((this.divForm.form.tabMain.tabindex) == 0) {
        		vOutData = "dsList01=dsList dsPage=dsPage";	//공지사항
        	} else 	if ((this.divForm.form.tabMain.tabindex) == 1) {
        		vOutData = "dsList02=dsList dsPage=dsPage";	//자유게시판
        	} else 	if ((this.divForm.form.tabMain.tabindex) == 2) {
        		vOutData = "dsList03=dsList dsPage=dsPage";	//공통기능(API)
        	} else 	if ((this.divForm.form.tabMain.tabindex) == 3) {
        		vOutData = "dsList04=dsList dsPage=dsPage";	//공통화면
        	} else 	if ((this.divForm.form.tabMain.tabindex) == 4) {
        		vOutData = "dsList05=dsList dsPage=dsPage";	//표준문서
        	} else 	if ((this.divForm.form.tabMain.tabindex) == 5) {
        		vOutData = "dsList06=dsList dsPage=dsPage";	//참조문서
        	} else 	if ((this.divForm.form.tabMain.tabindex) == 6) {
        		vOutData = "dsList07=dsList dsPage=dsPage";	//테이블
        	};

        	var strSvcId    = "selectRenBbsList";
        	var strSvcUrl   = "renBbs/selectRenBbsList.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = vOutData;
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };


        //페이지 로딩시 필요한 공통코드 트랜젝션
        this.getComboTransaction = function() {
        	var strSvcId    = "combo";
        	var strSvcUrl   = "common/cmmCode.do";
        	var inData      = "";
        	var outData     = "dsCombo=dsCombo";
        	var strArg      = "cdTypeId=TSPLOC comboTy=A";		//comboTy=A (전체), comboTy=S ()선택
        	var callBackFnc = "fnCallback";
        	var isAsync   	= false;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        /**
        	svcID			// 트랜잭션을 구분하기 위한 ID
        	errorCode		// 트랜잭션 성공 유무 코드 (0:정상, 0이 아니면 오류)
        	errorMsg		// 에러 발생히 메시지 (커스텀으로 일반 메세지 리턴 가능)
        **/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "selectRenBbsList":
        			this.divForm_tabMain_onchanged();
        			if ((this.divForm.form.tabMain.tabindex) == 1) {
        				this.dsSearch.setColumn(0,"pBbsNo",this.dsList.getColumn(0, "bbsNo"));
        				this.fn_selectRenBbsCmntList();
        			}

        			trace(">>allCnt 5<<"+this.dsList01.getColumn(0,"allCnt"));

        			// 조회 한 후 페이징을 셋팅 하기 위한 초기 함수
        			//this.divForm.form.divGrd.form.divPage.form.initPages(this.dsPage.getColumn(0, "currentPageNo"), this.dsPage.getColumn(0, "totalRecordCount"), this.dsPage.getColumn(0, "recordCountPerPage"), this.dsPage.getColumn(0, "pageSize"), this.pagingCallback);
        			break;

        		case "selectRenBbsCmntList":
        			//댓글 목록 조회
        			break;

        		case "combo":
        			break;

        	}
        };

        /**
        	page	//페이지 번호 리턴
        **/
        //페이징 버튼 콜백함수
        this.pagingCallback = function(page) {
        	this.cfnSearch(page);
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function() {

        	var vDate 	= this.gfn_getDate("date");
        	this.divForm.form.tabMain.tpgWord.form.divForm.form.divSch.form.Calendar01.set_value(vDate);
        	this.divForm.form.tabMain.tpgTrm.form.divForm.form.divSch.form.Calendar01.set_value(vDate);
        	this.divForm.form.tabMain.tpgDmn.form.divForm.form.divSch.form.Calendar01.set_value(vDate);
        	this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divSch.form.Calendar01.set_value(vDate);
        	this.divForm.form.tabMain.Tabpage1.form.divSch.form.Calendar01.set_value(vDate);
        	this.divForm.form.tabMain.Tabpage2.form.divSch.form.Calendar01.set_value(vDate);
        	this.divForm.form.tabMain.Tabpage3.form.divSch.form.Calendar01.set_value(vDate);

        	var vFdate	= this.gfn_addMonth(vDate, -1);

        	this.divForm.form.tabMain.tpgWord.form.divForm.form.divSch.form.Calendar00.set_value(vFdate);
        	this.divForm.form.tabMain.tpgTrm.form.divForm.form.divSch.form.Calendar00.set_value(vFdate);
        	this.divForm.form.tabMain.tpgDmn.form.divForm.form.divSch.form.Calendar00.set_value(vFdate);
        	this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divSch.form.Calendar00.set_value(vFdate);
        	this.divForm.form.tabMain.Tabpage1.form.divSch.form.Calendar00.set_value(vFdate);
        	this.divForm.form.tabMain.Tabpage2.form.divSch.form.Calendar00.set_value(vFdate);
        	this.divForm.form.tabMain.Tabpage3.form.divSch.form.Calendar00.set_value(vFdate);

        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divForm_divGrd_grdListCnt_onitemchanged = function(obj,e)
        {
        	this.cfnSearch(1);
        };


        this.divForm_divSch_btnSch_onclick = function(obj,e)
        {
        	this.cfnSearch(1);
        };


        /*******************************************************************************************************************************
         * 목록 등록버튼 클릭시
        *******************************************************************************************************************************/
        this.divForm_divGrd_btnBbsGrdAdd_onclick = function(obj,e)
        {
        	/*****  MDI 에 추가하는 페이지 오픈을 위한 코드 *****/
        	var vBbsSe = this.fn_getBbsSe();

        	var param = {
        		"status" : "reg"
        		,"bbsSe" : vBbsSe
        	};

        	var sMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        	var sMenuUrl = 'work::REN/BBS/REN900M01.xfdl';
        	var actNm = '등록';

        	this.gfnPageOpen(sMenuId, sMenuUrl, actNm, param);
        	/*****  MDI 에 추가하는 페이지 오픈을 위한 코드 *****/
        };


        /*******************************************************************************************************************************
         * 목록 상세버튼 클릭시
        *******************************************************************************************************************************/
        this.divForm_divGrd_btnBbsGrdDtl_onclick = function(obj,e)
        {
        	/*****  MDI 에 추가하는 페이지 오픈을 위한 코드 *****/
        	var param = {
        		"status" : "detail"
        		,"bbsNo" : this.dsList.getColumn(this.dsList.rowposition, "bbsNo")
        	};

        	var sMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        	var sMenuUrl = 'work::REN/BBS/REN900M01.xfdl';
        	var actNm = '상세';

        	this.gfnPageOpen(sMenuId, sMenuUrl, actNm, param);
        	/*****  MDI 에 추가하는 페이지 오픈을 위한 코드 *****/
        };


        /*******************************************************************************************************************************
         * 게시판 목록 클릭시
        *******************************************************************************************************************************/
        this.divForm_divGrd_Grid00_oncellclick = function(obj,e)
        {
        	this.dsSearch.setColumn(0,"pBbsNo",this.dsList.getColumn(e.row, "bbsNo"));
        	this.fn_selectRenBbsCmntList();
        };


        this.fn_selectRenBbsCmntList = function() {

        	var strSvcId    = "selectRenBbsCmntList";
        	var strSvcUrl   = "renBbs/selectRenBbsCmntList.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsCmntList=dsCmntList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /*******************************************************************************************************************************
         * 댓글 등록 버튼 클릭시
        *******************************************************************************************************************************/
        this.divForm_divGrd_btnCmntGrdAdd_onclick = function(obj,e)
        {
        	/*****  MDI 에 추가하는 페이지 오픈을 위한 코드 *****/
        	var param = {
        		"status" : "reg"
        		,"bbsNo"   : this.dsList.getColumn(e.row, "bbsNo")
        		,"bbsSe"   : this.dsList.getColumn(e.row, "bbsSe")
        		,"bbsTtl"  : this.dsList.getColumn(e.row, "bbsTtl")
        		,"bbsCn"   : this.dsList.getColumn(e.row, "bbsCn")
        		,"bbsAtfl" : this.dsList.getColumn(e.row, "bbsAtfl")
        	};

        	var sMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        	var sMenuUrl = 'work::REN/BBS/REN900M02.xfdl';
        	var actNm = '등록';

        	this.gfnPageOpen(sMenuId, sMenuUrl, actNm, param);
        	/*****  MDI 에 추가하는 페이지 오픈을 위한 코드 *****/
        };

        /*******************************************************************************************************************************
         * 댓글 상세 버튼 클릭시
        *******************************************************************************************************************************/
        this.divForm_divGrd_btnCmntGrdDtl_onclick = function(obj,e)
        {

        	 if (this.gfnIsNull(this.dsCmntList.getColumn(this.dsCmntList.rowposition, "cmntNo"))) {
        		alert("조회된 데이터가 없습니다.");
        		return;
        	 }

        	/*****  MDI 에 추가하는 페이지 오픈을 위한 코드 *****/
        	var param = {
        		"status" : "detail"
        		,"bbsNo" : this.dsList.getColumn(this.dsList.rowposition, "bbsNo")
        		,"cmntNo" : this.dsCmntList.getColumn(this.dsCmntList.rowposition, "cmntNo")
        	};

        	var sMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        	var sMenuUrl = 'work::REN/BBS/REN900M02.xfdl';
        	var actNm = '상세';

        	this.gfnPageOpen(sMenuId, sMenuUrl, actNm, param);
        	/*****  MDI 에 추가하는 페이지 오픈을 위한 코드 *****/
        };

        this.divForm_divSch_divCal_Combo00_onitemchanged = function(obj,e)
        {

        	if (this.dsSearch.getColumn(0, "pBbsSe") == "20") {
        		this.divForm.form.divGrd.form.Grid00.bottom = "369px";
        	} else {
        		this.divForm.form.divGrd.form.Grid00.bottom = "19px";
        	};
        	this.getSearchTransaction();
        };


        this.fn_selectList = function(obj,e)
        {
        	this.cfnSearch(1);
        };

        this.fn_getBbsSe = function() {

        	trace(">>5-1<<");

        	if ((this.divForm.form.tabMain.tabindex) == 0) {
        		vBbsSe = "10";	//공지사항
        	} else 	if ((this.divForm.form.tabMain.tabindex) == 1) {
        		vBbsSe = "20";	//자유게시판
        	} else 	if ((this.divForm.form.tabMain.tabindex) == 2) {
        		vBbsSe = "31";	//공통기능(API)
        	} else 	if ((this.divForm.form.tabMain.tabindex) == 3) {
        		vBbsSe = "32";	//공통화면
        	} else 	if ((this.divForm.form.tabMain.tabindex) == 4) {
        		vBbsSe = "33";	//표준문서
        	} else 	if ((this.divForm.form.tabMain.tabindex) == 5) {
        		vBbsSe = "34";	//참조문서
        	} else 	if ((this.divForm.form.tabMain.tabindex) == 6) {
        		vBbsSe = "40";	//테이블
        	};

        	trace(">>5-9<<");

        	return vBbsSe;
        }


        this.divForm_tabMain_onchanged = function(obj,e)
        {
        	trace(">>6-1<<");

        	if ((this.divForm.form.tabMain.tabindex) == 0) {
        		this.dsList.copyData(this.dsList01);	//공지사항
        	} else 	if ((this.divForm.form.tabMain.tabindex) == 1) {
        		this.dsList.copyData(this.dsList02);	//자유게시판
        	} else 	if ((this.divForm.form.tabMain.tabindex) == 2) {
        		this.dsList.copyData(this.dsList03);	//공통기능(API)
        	} else 	if ((this.divForm.form.tabMain.tabindex) == 3) {
        		this.dsList.copyData(this.dsList04);	//공통화면
        	} else 	if ((this.divForm.form.tabMain.tabindex) == 4) {
        		this.dsList.copyData(this.dsList05);	//표준문서
        	} else 	if ((this.divForm.form.tabMain.tabindex) == 5) {
        		this.dsList.copyData(this.dsList06);	//참조문서
        	} else 	if ((this.divForm.form.tabMain.tabindex) == 6) {
        		this.dsList.copyData(this.dsList07);	//테이블
        	};

        	trace(">>6-9<<");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.tabMain.addEventHandler("onchanged",this.divForm_tabMain_onchanged,this);
            this.divForm.form.tabMain.tpgWord.form.divForm.form.divSch.form.staLabel.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.tabMain.tpgWord.form.divForm.form.divSch.form.edtTrmNm.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.divForm.form.tabMain.tpgWord.form.divForm.form.divSch.form.staLabel03.addEventHandler("onclick",this.divForm_tabMain_tpgTrm_divForm_divSch_staLabel03_onclick,this);
            this.divForm.form.tabMain.tpgWord.form.divForm.form.divSch.form.btnInqClose.addEventHandler("onclick",this.divForm_divSch_btnSchClose_onclick,this);
            this.divForm.form.tabMain.tpgWord.form.divForm.form.divSch.form.btnTrmInq.addEventHandler("onclick",this.fn_selectList,this);
            this.divForm.form.tabMain.tpgWord.form.divForm.form.divGrd.form.cmbTrmCntPrPg.addEventHandler("onitemchanged",this.tabMain_tpgTrm_divForm_divGrd_cmbTrmCntPrPg_onitemchanged,this);
            this.divForm.form.tabMain.tpgWord.form.divForm.form.divGrd.form.btnBbsGrdDtl.addEventHandler("onclick",this.divForm_divGrd_btnBbsGrdDtl_onclick,this);
            this.divForm.form.tabMain.tpgWord.form.divForm.form.divGrd.form.btnBbsGrdAdd.addEventHandler("onclick",this.divForm_divGrd_btnBbsGrdAdd_onclick,this);
            this.divForm.form.tabMain.tpgWord.form.divForm.form.divGrd.form.Grid00.addEventHandler("oncellclick",this.divForm_divGrd_Grid00_oncellclick,this);
            this.divForm.form.tabMain.tpgTrm.form.divForm.form.divSch.form.staLabel.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.tabMain.tpgTrm.form.divForm.form.divSch.form.edtTrmNm.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.divForm.form.tabMain.tpgTrm.form.divForm.form.divSch.form.staLabel03.addEventHandler("onclick",this.divForm_tabMain_tpgTrm_divForm_divSch_staLabel03_onclick,this);
            this.divForm.form.tabMain.tpgTrm.form.divForm.form.divSch.form.btnInqClose.addEventHandler("onclick",this.divForm_divSch_btnSchClose_onclick,this);
            this.divForm.form.tabMain.tpgTrm.form.divForm.form.divSch.form.btnTrmInq.addEventHandler("onclick",this.fn_selectList,this);
            this.divForm.form.tabMain.tpgTrm.form.divForm.form.divGrd.form.staTotal03.addEventHandler("onclick",this.divForm_divGrd_staTotal03_onclick,this);
            this.divForm.form.tabMain.tpgTrm.form.divForm.form.divGrd.form.btnCmntGrdAdd.addEventHandler("onclick",this.divForm_divGrd_btnCmntGrdAdd_onclick,this);
            this.divForm.form.tabMain.tpgTrm.form.divForm.form.divGrd.form.btnCmntGrdDtl.addEventHandler("onclick",this.divForm_divGrd_btnCmntGrdDtl_onclick,this);
            this.divForm.form.tabMain.tpgTrm.form.divForm.form.divGrd.form.Grid00.addEventHandler("oncellclick",this.divForm_divGrd_Grid00_oncellclick,this);
            this.divForm.form.tabMain.tpgTrm.form.divForm.form.divGrd.form.Grid02.addEventHandler("oncellclick",this.divForm_divGrd_Grid02_oncellclick,this);
            this.divForm.form.tabMain.tpgTrm.form.divForm.form.divGrd.form.cmbTrmCntPrPg.addEventHandler("onitemchanged",this.tabMain_tpgTrm_divForm_divGrd_cmbTrmCntPrPg_onitemchanged,this);
            this.divForm.form.tabMain.tpgTrm.form.divForm.form.divGrd.form.btnBbsGrdDtl.addEventHandler("onclick",this.divForm_divGrd_btnBbsGrdDtl_onclick,this);
            this.divForm.form.tabMain.tpgTrm.form.divForm.form.divGrd.form.btnBbsGrdAdd.addEventHandler("onclick",this.divForm_divGrd_btnBbsGrdAdd_onclick,this);
            this.divForm.form.tabMain.tpgDmn.form.divForm.form.divSch.form.staLabel.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.tabMain.tpgDmn.form.divForm.form.divSch.form.edtTrmNm.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.divForm.form.tabMain.tpgDmn.form.divForm.form.divSch.form.staLabel03.addEventHandler("onclick",this.divForm_tabMain_tpgTrm_divForm_divSch_staLabel03_onclick,this);
            this.divForm.form.tabMain.tpgDmn.form.divForm.form.divSch.form.btnInqClose.addEventHandler("onclick",this.divForm_divSch_btnSchClose_onclick,this);
            this.divForm.form.tabMain.tpgDmn.form.divForm.form.divSch.form.btnTrmInq.addEventHandler("onclick",this.fn_selectList,this);
            this.divForm.form.tabMain.tpgDmn.form.divForm.form.divGrd.form.cmbTrmCntPrPg.addEventHandler("onitemchanged",this.tabMain_tpgTrm_divForm_divGrd_cmbTrmCntPrPg_onitemchanged,this);
            this.divForm.form.tabMain.tpgDmn.form.divForm.form.divGrd.form.btnBbsGrdDtl.addEventHandler("onclick",this.divForm_divGrd_btnBbsGrdDtl_onclick,this);
            this.divForm.form.tabMain.tpgDmn.form.divForm.form.divGrd.form.btnBbsGrdAdd.addEventHandler("onclick",this.divForm_divGrd_btnBbsGrdAdd_onclick,this);
            this.divForm.form.tabMain.tpgDmn.form.divForm.form.divGrd.form.Grid00.addEventHandler("oncellclick",this.divForm_divGrd_Grid00_oncellclick,this);
            this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divSch.form.staLabel.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divSch.form.edtTrmNm.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divSch.form.staLabel03.addEventHandler("onclick",this.divForm_tabMain_tpgTrm_divForm_divSch_staLabel03_onclick,this);
            this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divSch.form.btnInqClose.addEventHandler("onclick",this.divForm_divSch_btnSchClose_onclick,this);
            this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divSch.form.btnTrmInq.addEventHandler("onclick",this.fn_selectList,this);
            this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form.cmbTrmCntPrPg.addEventHandler("onitemchanged",this.tabMain_tpgTrm_divForm_divGrd_cmbTrmCntPrPg_onitemchanged,this);
            this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form.btnBbsGrdDtl.addEventHandler("onclick",this.divForm_divGrd_btnBbsGrdDtl_onclick,this);
            this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form.btnBbsGrdAdd.addEventHandler("onclick",this.divForm_divGrd_btnBbsGrdAdd_onclick,this);
            this.divForm.form.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form.Grid00.addEventHandler("oncellclick",this.divForm_divGrd_Grid00_oncellclick,this);
            this.divForm.form.tabMain.Tabpage1.form.divSch.form.staLabel.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.tabMain.Tabpage1.form.divSch.form.edtTrmNm.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.divForm.form.tabMain.Tabpage1.form.divSch.form.staLabel03.addEventHandler("onclick",this.divForm_tabMain_tpgTrm_divForm_divSch_staLabel03_onclick,this);
            this.divForm.form.tabMain.Tabpage1.form.divSch.form.btnInqClose.addEventHandler("onclick",this.divForm_divSch_btnSchClose_onclick,this);
            this.divForm.form.tabMain.Tabpage1.form.divSch.form.btnTrmInq.addEventHandler("onclick",this.fn_selectList,this);
            this.divForm.form.tabMain.Tabpage1.form.divGrd.form.cmbTrmCntPrPg.addEventHandler("onitemchanged",this.tabMain_tpgTrm_divForm_divGrd_cmbTrmCntPrPg_onitemchanged,this);
            this.divForm.form.tabMain.Tabpage1.form.divGrd.form.btnBbsGrdDtl.addEventHandler("onclick",this.divForm_divGrd_btnBbsGrdDtl_onclick,this);
            this.divForm.form.tabMain.Tabpage1.form.divGrd.form.btnBbsGrdAdd.addEventHandler("onclick",this.divForm_divGrd_btnBbsGrdAdd_onclick,this);
            this.divForm.form.tabMain.Tabpage1.form.divGrd.form.Grid00.addEventHandler("oncellclick",this.divForm_divGrd_Grid00_oncellclick,this);
            this.divForm.form.tabMain.Tabpage2.form.divSch.form.staLabel.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.tabMain.Tabpage2.form.divSch.form.edtTrmNm.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.divForm.form.tabMain.Tabpage2.form.divSch.form.staLabel03.addEventHandler("onclick",this.divForm_tabMain_tpgTrm_divForm_divSch_staLabel03_onclick,this);
            this.divForm.form.tabMain.Tabpage2.form.divSch.form.btnInqClose.addEventHandler("onclick",this.divForm_divSch_btnSchClose_onclick,this);
            this.divForm.form.tabMain.Tabpage2.form.divSch.form.btnTrmInq.addEventHandler("onclick",this.fn_selectList,this);
            this.divForm.form.tabMain.Tabpage2.form.divGrd.form.cmbTrmCntPrPg.addEventHandler("onitemchanged",this.tabMain_tpgTrm_divForm_divGrd_cmbTrmCntPrPg_onitemchanged,this);
            this.divForm.form.tabMain.Tabpage2.form.divGrd.form.btnBbsGrdDtl.addEventHandler("onclick",this.divForm_divGrd_btnBbsGrdDtl_onclick,this);
            this.divForm.form.tabMain.Tabpage2.form.divGrd.form.btnBbsGrdAdd.addEventHandler("onclick",this.divForm_divGrd_btnBbsGrdAdd_onclick,this);
            this.divForm.form.tabMain.Tabpage2.form.divGrd.form.Grid00.addEventHandler("oncellclick",this.divForm_divGrd_Grid00_oncellclick,this);
            this.divForm.form.tabMain.Tabpage3.form.divSch.form.staLabel.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.tabMain.Tabpage3.form.divSch.form.edtTrmNm.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.divForm.form.tabMain.Tabpage3.form.divSch.form.staLabel03.addEventHandler("onclick",this.divForm_tabMain_tpgTrm_divForm_divSch_staLabel03_onclick,this);
            this.divForm.form.tabMain.Tabpage3.form.divSch.form.btnInqClose.addEventHandler("onclick",this.divForm_divSch_btnSchClose_onclick,this);
            this.divForm.form.tabMain.Tabpage3.form.divSch.form.btnTrmInq.addEventHandler("onclick",this.fn_selectList,this);
            this.divForm.form.tabMain.Tabpage3.form.divGrd.form.cmbTrmCntPrPg.addEventHandler("onitemchanged",this.tabMain_tpgTrm_divForm_divGrd_cmbTrmCntPrPg_onitemchanged,this);
            this.divForm.form.tabMain.Tabpage3.form.divGrd.form.btnBbsGrdDtl.addEventHandler("onclick",this.divForm_divGrd_btnBbsGrdDtl_onclick,this);
            this.divForm.form.tabMain.Tabpage3.form.divGrd.form.btnBbsGrdAdd.addEventHandler("onclick",this.divForm_divGrd_btnBbsGrdAdd_onclick,this);
            this.divForm.form.tabMain.Tabpage3.form.divGrd.form.Grid00.addEventHandler("oncellclick",this.divForm_divGrd_Grid00_oncellclick,this);
        };
        this.loadIncludeScript("REN900M03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
