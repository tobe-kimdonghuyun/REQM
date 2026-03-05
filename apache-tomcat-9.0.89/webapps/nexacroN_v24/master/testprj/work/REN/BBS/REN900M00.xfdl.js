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
            
            // UI Components Initialize
            obj = new Div("divForm","0","0",null,"900","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("divSch","0","0","100%","198",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","100%","102",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("0");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("40");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"pan00\"/><PanelItem id=\"PanelItem04\" componentid=\"pan01\"/><PanelItem id=\"PanelItem01\" componentid=\"pan02\"/><PanelItem id=\"PanelItem00\" componentid=\"pan03\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan02","1694.00","398","430","45",null,null,null,null,"45",null,this.divForm.form.divSch.form);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01\"/><PanelItem id=\"PanelItem03\" componentid=\"Calendar00\"/><PanelItem id=\"PanelItem04\" componentid=\"staDash\"/><PanelItem id=\"PanelItem02\" componentid=\"Calendar01\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staDash","0","0","10","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("13");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_Dash");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("1");
            obj.set_text("등록일자");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("3");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01","1694.00","398","430","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("4");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("none");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staLabel\"/><PanelItem id=\"PanelItem03\" componentid=\"Edit00\"/><PanelItem id=\"PanelItem02\" componentid=\"Edit00_00\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","0","0","145","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan03","1694.00","398","430","45",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("5");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan00","20.00","67","430","45",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("6");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03\"/><PanelItem id=\"PanelItem01\" componentid=\"divCal\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            obj.set_taborder("8");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("7");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSch\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSch","570","192","112","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("9");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divCal","1030","75","320","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("11");
            obj.set_text("Div00");
            obj.set_flexgrow("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("Combo00","0.00","8","72.19%","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divCal.form);
            obj.set_taborder("1");
            obj.set_flexgrow("1");
            obj.set_innerdataset("dsCombo");
            obj.set_datacolumn("cdNm");
            obj.set_codecolumn("cdId");
            obj.set_autoselect("true");
            obj.set_text("공지사항");
            obj.set_value("10");
            obj.set_index("0");
            this.divForm.form.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","staDash:295.00","71","145","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("12");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","130.00","70","320","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("14");
            obj.set_cssclass("edt_WF_EdtSch");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","0","divSch:30","100.00%","700",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("PanelBbsGrdBtn",null,"0","1100","34","0",null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("width");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staTotal00\"/><PanelItem id=\"PanelItem00\" componentid=\"grdListCnt\"/><PanelItem id=\"PanelItem04\" componentid=\"btnBbsGrdAdd\"/><PanelItem id=\"PanelItem03\" componentid=\"btnBbsGrdDtl\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","27","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal01","staTotal:0","0","43","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("5");
            obj.set_text("1000");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_textAlign("center");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","staTotal01:0","0","30","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("6");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Combo("grdListCnt","1230","0","80","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_divGrd_form_grdListCnt_innerdataset = new nexacro.NormalDataset("divForm_form_divGrd_form_grdListCnt_innerdataset", obj);
            divForm_form_divGrd_form_grdListCnt_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_divGrd_form_grdListCnt_innerdataset);
            obj.set_text("10");
            obj.set_value("10");
            obj.set_index("0");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal00","1165","0","65","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("목록수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnBbsGrdDtl","980.00","0","96","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_text("상세");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("Grid02","0","394","100.00%",null,null,"19",null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("7");
            obj.set_binddataset("dsCmntList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"67\"/><Column size=\"889\"/><Column size=\"121\"/><Column size=\"174\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"댓글\"/><Cell col=\"2\" text=\"등록자\"/><Cell col=\"3\" text=\"등록일시\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" expr=\"rowidx + 1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:cmntCn\" displaytype=\"text\" edittype=\"none\" combodataset=\"dsCombo2\" combodatacol=\"cdNm\" combocodecol=\"cdId\" textAlign=\"left\"/><Cell col=\"2\" displaytype=\"text\" text=\"bind:lastChgNm\" textAlign=\"center\"/><Cell col=\"3\" displaytype=\"mask\" text=\"bind:lastChgDt\" cssclass=\"CellEnd\" textAlign=\"center\" maskeditformat=\"####-##-## ##:##:##\" maskedittype=\"string\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnCmntGrdAdd","1314.00","318","96","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("8");
            obj.set_text("댓글등록");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal03","0","352","133","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("9");
            obj.set_text("댓글 리스트");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","34","100.00%",null,null,"369",null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("10");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"67\"/><Column size=\"889\"/><Column size=\"121\"/><Column size=\"174\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"등록자\"/><Cell col=\"3\" text=\"등록일시\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" expr=\"rowidx + 1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:bbsTtl\" displaytype=\"text\" edittype=\"none\" combodataset=\"dsCombo2\" combodatacol=\"cdNm\" combocodecol=\"cdId\" textAlign=\"left\"/><Cell col=\"2\" displaytype=\"text\" text=\"bind:lastChgNm\" textAlign=\"center\"/><Cell col=\"3\" displaytype=\"mask\" text=\"bind:lastChgDt\" cssclass=\"CellEnd\" textAlign=\"center\" maskeditformat=\"####-##-## ##:##:##\" maskedittype=\"string\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnBbsGrdAdd","1265.00","-1","96","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("11");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnCmntGrdDtl","1392","314","96","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("12");
            obj.set_text("상세");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("PanelCmntGrdBtn",null,"360","1100","34","12",null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("13");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("width");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnCmntGrdAdd\"/><PanelItem id=\"PanelItem01\" componentid=\"btnCmntGrdDtl\"/><PanelItem id=\"PanelItem02\" componentid=\"btnBbsGrdDtl00\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divGuide","1590.00","135","450","385",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_visible("false");
            obj.set_cssclass("div_GD_Tip");
            this.addChild(obj.name, obj);

            obj = new Button("btnSchClose","24.00","55","52","30",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_SchClose");
            this.divGuide.addChild(obj.name, obj);

            obj = new Button("btnSchOpen","100.00","55","52","30",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_SchOpen");
            this.divGuide.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.divSch.form.divCal.form
            obj = new Layout("default","",0,0,this.divForm.form.divSch.form.divCal.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Combo00.set_taborder("1");
                p.Combo00.set_flexgrow("1");
                p.Combo00.set_innerdataset("dsCombo");
                p.Combo00.set_datacolumn("cdNm");
                p.Combo00.set_codecolumn("cdId");
                p.Combo00.set_autoselect("true");
                p.Combo00.set_text("공지사항");
                p.Combo00.set_value("10");
                p.Combo00.set_index("0");
                p.Combo00.move("0.00","8","72.19%","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divForm.form.divSch.form.divCal.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divSch.form.divCal.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divSch.form.divCal.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divForm.form.divSch.form.divCal.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divSch.form
            obj = new Layout("default","",0,0,this.divForm.form.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panLabel.set_taborder("0");
                p.panLabel.set_verticalgap("8");
                p.panLabel.set_flexwrap("wrap");
                p.panLabel.set_spacing("0px 0px 10px 0px");
                p.panLabel.set_type("horizontal");
                p.panLabel.set_flexcrossaxisalign("start");
                p.panLabel.set_horizontalgap("40");
                p.panLabel.set_fittocontents("height");
                p.panLabel.set_maxheight("");
                p.panLabel.move("20","14","100%","102",null,null);

                p.pan02.set_taborder("2");
                p.pan02.set_type("horizontal");
                p.pan02.set_horizontalgap("10");
                p.pan02.set_minheight("45");
                p.pan02.set_maxheight("");
                p.pan02.set_minwidth("");
                p.pan02.move("1694.00","398","430","45",null,null);

                p.staDash.set_taborder("13");
                p.staDash.set_text("~");
                p.staDash.set_cssclass("sta_WF_Dash");
                p.staDash.move("0","0","10","40",null,null);

                p.staLabel01.set_taborder("1");
                p.staLabel01.set_text("등록일자");
                p.staLabel01.set_cssclass("sta_WF_SchLabel");
                p.staLabel01.set_flexshrink("0");
                p.staLabel01.set_minwidth("");
                p.staLabel01.move("0","0","100","40",null,null);

                p.staLabel.set_taborder("3");
                p.staLabel.set_text("제목");
                p.staLabel.set_cssclass("sta_WF_SchLabel");
                p.staLabel.set_flexshrink("0");
                p.staLabel.set_minwidth("");
                p.staLabel.move("0","0","100","40",null,null);

                p.pan01.set_taborder("4");
                p.pan01.set_type("horizontal");
                p.pan01.set_horizontalgap("10");
                p.pan01.set_fittocontents("none");
                p.pan01.set_maxheight("");
                p.pan01.set_minwidth("");
                p.pan01.move("1694.00","398","430","40",null,null);

                p.Calendar00.set_taborder("10");
                p.Calendar00.set_dateformat("yyyy-MM-dd");
                p.Calendar00.move("0","0","145","40",null,null);

                p.pan03.set_taborder("5");
                p.pan03.set_type("horizontal");
                p.pan03.set_horizontalgap("10");
                p.pan03.set_minwidth("");
                p.pan03.move("1694.00","398","430","45",null,null);

                p.pan00.set_taborder("6");
                p.pan00.set_type("horizontal");
                p.pan00.set_horizontalgap("10");
                p.pan00.set_flexwrap("nowrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_minwidth("");
                p.pan00.move("20.00","67","430","45",null,null);

                p.staLabel03.set_text("구분");
                p.staLabel03.set_cssclass("sta_WF_SchLabel");
                p.staLabel03.set_flexshrink("0");
                p.staLabel03.set_taborder("8");
                p.staLabel03.set_maxwidth("");
                p.staLabel03.move("0","0","100","40",null,null);

                p.panSchBtn.set_taborder("7");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100%","40",null,null);

                p.btnSch.set_taborder("9");
                p.btnSch.set_text("조회하기");
                p.btnSch.set_cssclass("btn_WF_Search");
                p.btnSch.move("570","192","112","40",null,null);

                p.divCal.set_taborder("11");
                p.divCal.set_text("Div00");
                p.divCal.set_flexgrow("1");
                p.divCal.set_formscrollbartype("none none");
                p.divCal.set_formscrolltype("none");
                p.divCal.move("1030","75","320","40",null,null);

                p.Calendar01.set_taborder("12");
                p.Calendar01.set_dateformat("yyyy-MM-dd");
                p.Calendar01.move("staDash:295.00","71","145","40",null,null);

                p.Edit00_00.set_taborder("14");
                p.Edit00_00.set_cssclass("edt_WF_EdtSch");
                p.Edit00_00.move("130.00","70","320","40",null,null);
            	}
            );
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            this.divForm.form.divSch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divSch.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
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

                p.pan02.set_horizontalgap("8");
                p.pan02.move("1694.00","398","100%","40",null,null);

                p.pan01.set_type("horizontal");
                p.pan01.set_fittocontents("height");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_horizontalgap("8");
                p.pan01.move("1694.00","398","100%","80",null,null);

                p.divCal.move(null,null,"100%",null,null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("14px 16px 12px 16px");
            obj.set_flexwrap("wrap");
            this.divForm.form.divSch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.PanelBbsGrdBtn.set_taborder("3");
                p.PanelBbsGrdBtn.set_flexcrossaxisalign("start");
                p.PanelBbsGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelBbsGrdBtn.set_flexmainaxisalign("end");
                p.PanelBbsGrdBtn.set_fittocontents("width");
                p.PanelBbsGrdBtn.set_horizontalgap("10");
                p.PanelBbsGrdBtn.move(null,"0","1100","34","0",null);

                p.staTotal.set_taborder("0");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","0","27","34",null,null);

                p.staTotal01.set_taborder("5");
                p.staTotal01.set_text("1000");
                p.staTotal01.set_cssclass("sta_WF_Total");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.set_fittocontents("width");
                p.staTotal01.set_textAlign("center");
                p.staTotal01.move("staTotal:0","0","43","34",null,null);

                p.staTotal02.set_taborder("6");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.move("staTotal01:0","0","30","34",null,null);

                p.grdListCnt.set_taborder("2");
                p.grdListCnt.set_innerdataset(divForm_form_divGrd_form_grdListCnt_innerdataset);
                p.grdListCnt.set_codecolumn("codecolumn");
                p.grdListCnt.set_datacolumn("datacolumn");
                p.grdListCnt.set_text("10");
                p.grdListCnt.set_value("10");
                p.grdListCnt.set_index("0");
                p.grdListCnt.move("1230","0","80","34",null,null);

                p.staTotal00.set_taborder("1");
                p.staTotal00.set_text("목록수");
                p.staTotal00.set_cssclass("sta_WF_SchLabel");
                p.staTotal00.set_fittocontents("width");
                p.staTotal00.move("1165","0","65","34",null,null);

                p.btnBbsGrdDtl.set_taborder("4");
                p.btnBbsGrdDtl.set_text("상세");
                p.btnBbsGrdDtl.set_cssclass("btn_WF_Small");
                p.btnBbsGrdDtl.set_visible("true");
                p.btnBbsGrdDtl.set_fittocontents("width");
                p.btnBbsGrdDtl.move("980.00","0","96","34",null,null);

                p.Grid02.set_taborder("7");
                p.Grid02.set_binddataset("dsCmntList");
                p.Grid02.move("0","394","100.00%",null,null,"19");

                p.btnCmntGrdAdd.set_taborder("8");
                p.btnCmntGrdAdd.set_text("댓글등록");
                p.btnCmntGrdAdd.set_cssclass("btn_WF_Small");
                p.btnCmntGrdAdd.set_visible("true");
                p.btnCmntGrdAdd.set_fittocontents("width");
                p.btnCmntGrdAdd.move("1314.00","318","96","34",null,null);

                p.staTotal03.set_taborder("9");
                p.staTotal03.set_text("댓글 리스트");
                p.staTotal03.set_cssclass("sta_WF_SchLabel");
                p.staTotal03.set_usedecorate("true");
                p.staTotal03.set_fittocontents("width");
                p.staTotal03.move("0","352","133","34",null,null);

                p.Grid00.set_taborder("10");
                p.Grid00.set_binddataset("dsList");
                p.Grid00.move("0","34","100.00%",null,null,"369");

                p.btnBbsGrdAdd.set_taborder("11");
                p.btnBbsGrdAdd.set_text("등록");
                p.btnBbsGrdAdd.set_cssclass("btn_WF_Small");
                p.btnBbsGrdAdd.set_visible("true");
                p.btnBbsGrdAdd.set_fittocontents("width");
                p.btnBbsGrdAdd.move("1265.00","-1","96","34",null,null);

                p.btnCmntGrdDtl.set_taborder("12");
                p.btnCmntGrdDtl.set_text("상세");
                p.btnCmntGrdDtl.set_cssclass("btn_WF_Small");
                p.btnCmntGrdDtl.set_visible("true");
                p.btnCmntGrdDtl.set_fittocontents("width");
                p.btnCmntGrdDtl.move("1392","314","96","34",null,null);

                p.PanelCmntGrdBtn.set_taborder("13");
                p.PanelCmntGrdBtn.set_flexcrossaxisalign("start");
                p.PanelCmntGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelCmntGrdBtn.set_flexmainaxisalign("end");
                p.PanelCmntGrdBtn.set_fittocontents("width");
                p.PanelCmntGrdBtn.set_horizontalgap("10");
                p.PanelCmntGrdBtn.move(null,"360","1100","34","12",null);
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnBbsGrdDtl.set_visible("false");
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
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
                p.divGrd.move("0","divSch:30","100.00%","700",null,null);
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
                p.divGrd.move("0","divSch:50","100%","673",null,null);

                p.divSch.set_text("Div00");
                p.divSch.set_fittocontents("height");
                p.divSch.move("0","0","100%","386",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("0px 10px 0px 20px");
            obj.set_flexmainaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexcrossaxisalign("start");
            obj.set_verticalgap("30");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divGuide.form
            obj = new Layout("default","",0,0,this.divGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnSchClose.set_taborder("0");
                p.btnSchClose.set_cssclass("btn_WF_SchClose");
                p.btnSchClose.move("24.00","55","52","30",null,null);

                p.btnSchOpen.set_taborder("1");
                p.btnSchOpen.set_cssclass("btn_WF_SchOpen");
                p.btnSchOpen.move("100.00","55","52","30",null,null);
            	}
            );
            this.divGuide.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGuide.form
            obj = new Layout("Layout0","",0,0,this.divGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divGuide.form.addLayout(obj.name, obj);
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

                p.divGuide.set_taborder("1");
                p.divGuide.set_text("div00");
                p.divGuide.set_visible("false");
                p.divGuide.set_cssclass("div_GD_Tip");
                p.divGuide.move("1590.00","135","450","385",null,null);
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
            obj = new BindItem("item4","divForm.form.divGrd.form.staTotal01","text","dsPage","totalRecordCount");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divForm.form.divSch.form.divCal.form.Combo00","value","dsSearch","pBbsSe");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.divSch.form.Calendar01","value","dsSearch","pEndYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.divSch.form.Calendar00","value","dsSearch","pBgngYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.divSch.form.Edit00_00","value","dsSearch","pBbsTtl");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("REN900M00.xfdl", function() {
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
        	var recordCountPerPage = this.divForm.form.divGrd.form.grdListCnt.value;
        	this.dsSearch.setColumn(0, "currentPageNo", page);
        	this.dsSearch.setColumn(0, "recordCountPerPage", recordCountPerPage);
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

        	var strSvcId    = "selectRenBbsList";
        	var strSvcUrl   = "renBbs/selectRenBbsList.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsList=dsList dsPage=dsPage";
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

        //트랜젝션 콜백 함수
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
        			this.dsSearch.setColumn(0,"pBbsNo",this.dsList.getColumn(0, "bbsNo"));
        			this.fn_selectRenBbsCmntList();
        			// 조회 한 후 페이징을 셋팅 하기 위한 초기 함수
        			this.divForm.form.divGrd.form.divPage.form.initPages(this.dsPage.getColumn(0, "currentPageNo"), this.dsPage.getColumn(0, "totalRecordCount"), this.dsPage.getColumn(0, "recordCountPerPage"), this.dsPage.getColumn(0, "pageSize"), this.pagingCallback);
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


        this.divForm_divGrd_btnBbsGrdAdd_onclick = function(obj,e)
        {
        	/*****  MDI 에 추가하는 페이지 오픈을 위한 코드 *****/
        	var param = {
        		"status" : "reg"
        	};

        	var sMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        	var sMenuUrl = 'work::REN/BBS/REN900M01.xfdl';
        	var actNm = '등록';

        	this.gfnPageOpen(sMenuId, sMenuUrl, actNm, param);
        	/*****  MDI 에 추가하는 페이지 오픈을 위한 코드 *****/
        };


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
         * 댓글등록 버튼 클릭시
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




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divSch.form.staLabel.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.divSch.form.btnSch.addEventHandler("onclick",this.divForm_divSch_btnSch_onclick,this);
            this.divForm.form.divSch.form.divCal.form.Combo00.addEventHandler("onitemchanged",this.divForm_divSch_divCal_Combo00_onitemchanged,this);
            this.divForm.form.divGrd.form.grdListCnt.addEventHandler("onitemchanged",this.divForm_divGrd_grdListCnt_onitemchanged,this);
            this.divForm.form.divGrd.form.btnBbsGrdDtl.addEventHandler("onclick",this.divForm_divGrd_btnBbsGrdDtl_onclick,this);
            this.divForm.form.divGrd.form.Grid02.addEventHandler("oncellclick",this.divForm_divGrd_Grid02_oncellclick,this);
            this.divForm.form.divGrd.form.btnCmntGrdAdd.addEventHandler("onclick",this.divForm_divGrd_btnCmntGrdAdd_onclick,this);
            this.divForm.form.divGrd.form.staTotal03.addEventHandler("onclick",this.divForm_divGrd_staTotal03_onclick,this);
            this.divForm.form.divGrd.form.Grid00.addEventHandler("oncellclick",this.divForm_divGrd_Grid00_oncellclick,this);
            this.divForm.form.divGrd.form.btnBbsGrdAdd.addEventHandler("onclick",this.divForm_divGrd_btnBbsGrdAdd_onclick,this);
            this.divForm.form.divGrd.form.btnCmntGrdDtl.addEventHandler("onclick",this.divForm_divGrd_btnCmntGrdDtl_onclick,this);
        };
        this.loadIncludeScript("REN900M00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
