(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LIF082M01");
            this.set_titletext("구내영업안내메일전송용업로드");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,1050);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAplyKnd", this);
            obj._setContents("<ColumnInfo><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAplyKndList", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBldgSe", this);
            obj._setContents("<ColumnInfo><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBldgSeList", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPstnSe", this);
            obj._setContents("<ColumnInfo><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPstnSeList", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"prmsSalsGdBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"prmsSalsGdEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"bzmnNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"gdMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"bzmnNm\" type=\"STRING\" size=\"256\"/><Column id=\"rprsvNm\" type=\"STRING\" size=\"256\"/><Column id=\"bplcAddr\" type=\"STRING\" size=\"256\"/><Column id=\"bplcZip\" type=\"STRING\" size=\"256\"/><Column id=\"bplcDtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"bplcTelno\" type=\"STRING\" size=\"256\"/><Column id=\"emlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"prmsSalsGdYmd\" type=\"STRING\" size=\"256\"/><Column id=\"gdEmlTrsmDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","0",null,"1080","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("divSch","0","0","100.00%","148",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","100%","50",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("0");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("40");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01\"/><PanelItem id=\"PanelItem04\" componentid=\"pan04\"/><PanelItem id=\"PanelItem02\" componentid=\"pan04_00\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panClose","30","151","100%","30",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnSchClose\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSchClose","1251","185","52","29",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_SchClose");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("3");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSch\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSch","570","192","112","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("4");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            obj.set_fittocontents("width");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03_01","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("5");
            obj.set_text("안내일자");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divCal","1030","75","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.set_flexgrow("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Calendar("calPrmsSalsGdBgngYmd","0","0","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divCal.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Static("staDash","calPrmsSalsGdBgngYmd:10","0","10","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divCal.form);
            obj.set_taborder("1");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_Dash");
            obj.set_fittocontents("width");
            this.divForm.form.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Calendar("calPrmsSalsGdEndYmd","staDash:10","0","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divCal.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Panel("pan01","20.00","67","360","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("7");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03_01\"/><PanelItem id=\"PanelItem01\" componentid=\"divCal\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("8");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtBrno","140.00","30","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("9");
            obj.set_flexgrow("1");
            obj.set_displaynulltext("검색어 입력");
            obj.set_text("");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan04","1694.00","398","360","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("10");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel\"/><PanelItem id=\"PanelItem01\" componentid=\"edtBrno\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("11");
            obj.set_text("사업자명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtBzmnNm","140.00","30","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("12");
            obj.set_flexgrow("1");
            obj.set_displaynulltext("검색어 입력");
            obj.set_text("");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan04_00","1694.00","398","360","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("13");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtBzmnNm\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","0","30","100.00%","690",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.addChild(obj.name, obj);

            obj = new Grid("grdList","0","44","100.00%","600",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_nodatatext("데이타가 없습니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"130\"/><Column size=\"300\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"80\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"사업자등록번호\"/><Cell col=\"2\" text=\"사업자명\"/><Cell col=\"3\" text=\"대표자명\"/><Cell col=\"4\" text=\"사업장&#13;&#10;우편번호\"/><Cell col=\"5\" text=\"사업장주소\"/><Cell col=\"6\" text=\"사업장상세주소\"/><Cell col=\"7\" text=\"전화번호\"/><Cell col=\"8\" text=\"이메일주소\"/><Cell col=\"9\" text=\"구내영업&#13;&#10;안내일자\"/><Cell col=\"10\" text=\"안내메일&#13;&#10;전송일시\"/><Cell col=\"11\" text=\"처리일시\"/><Cell col=\"12\" text=\"처리자\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:brno\" textAlign=\"center\" cursor=\"pointer\"/><Cell col=\"2\" text=\"bind:bzmnNm\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:rprsvNm\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:bplcZip\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:bplcAddr\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:bplcDtlAddr\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:bplcTelno\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:emlAddr\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:prmsSalsGdYmd\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"10\" text=\"bind:gdEmlTrsmDt\" textAlign=\"center\" maskeditformat=\"####-##-## ##:##\" maskedittype=\"string\"/><Cell col=\"11\" text=\"bind:frstRegDt\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"####-##-## ##:##\" maskedittype=\"string\"/><Cell col=\"12\" text=\"bind:frstRegId\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divPage","0","grdList:10","100.00%","36",null,null,null,null,"36",null,this.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("work::COM/util/paging/paging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn",null,"0","550","34","0",null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("5");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("width");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"staTotal00\"/><PanelItem id=\"PanelItem01\" componentid=\"Combo00\"/><PanelItem id=\"PanelItem00\" componentid=\"btnExcelUpload\"/><PanelItem id=\"PanelItem05\" componentid=\"btnGrdDw\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","200","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("총 <fc v=\'#1e4ebe\'>0</fc> 건");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Combo("Combo00","1230","0","80","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal00","1165","0","54","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("목록수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnExcelUpload","774.00","10","130","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("6");
            obj.set_text("엑셀업로드");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_visible("true");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDw","1368","3","124","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("7");
            obj.set_text("다운로드(엑셀)");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_fittocontents("width");
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
                p.calPrmsSalsGdBgngYmd.set_taborder("0");
                p.calPrmsSalsGdBgngYmd.set_dateformat("yyyy-MM-dd");
                p.calPrmsSalsGdBgngYmd.move("0","0","100%","40",null,null);

                p.staDash.set_taborder("1");
                p.staDash.set_text("~");
                p.staDash.set_cssclass("sta_WF_Dash");
                p.staDash.set_fittocontents("width");
                p.staDash.move("calPrmsSalsGdBgngYmd:10","0","10","40",null,null);

                p.calPrmsSalsGdEndYmd.set_taborder("2");
                p.calPrmsSalsGdEndYmd.set_dateformat("yyyy-MM-dd");
                p.calPrmsSalsGdEndYmd.move("staDash:10","0","100%","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divForm.form.divSch.form.divCal.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divSch.form.divCal.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divSch.form.divCal.form,
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
                p.panLabel.move("20","14","100%","50",null,null);

                p.panClose.set_taborder("2");
                p.panClose.set_type("vertical");
                p.panClose.set_cssclass("pal_WF_SchLine");
                p.panClose.set_flexcrossaxisalign("end");
                p.panClose.move("30","151","100%","30",null,null);

                p.btnSchClose.set_taborder("1");
                p.btnSchClose.set_cssclass("btn_WF_SchClose");
                p.btnSchClose.move("1251","185","52","29",null,null);

                p.panSchBtn.set_taborder("3");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.set_horizontalgap("10");
                p.panSchBtn.move("632","235","100%","40",null,null);

                p.btnSch.set_taborder("4");
                p.btnSch.set_text("조회하기");
                p.btnSch.set_cssclass("btn_WF_Search");
                p.btnSch.set_fittocontents("width");
                p.btnSch.move("570","192","112","40",null,null);

                p.staLabel03_01.set_taborder("5");
                p.staLabel03_01.set_text("안내일자");
                p.staLabel03_01.set_cssclass("sta_WF_SchLabel");
                p.staLabel03_01.set_flexshrink("0");
                p.staLabel03_01.set_maxwidth("");
                p.staLabel03_01.move("0","0","100","40",null,null);

                p.divCal.set_taborder("6");
                p.divCal.set_text("Div00");
                p.divCal.set_flexgrow("1");
                p.divCal.set_formscrollbartype("none none");
                p.divCal.set_formscrolltype("none");
                p.divCal.move("1030","75","100%","40",null,null);

                p.pan01.set_taborder("7");
                p.pan01.set_type("horizontal");
                p.pan01.set_horizontalgap("10");
                p.pan01.set_flexwrap("nowrap");
                p.pan01.set_fittocontents("height");
                p.pan01.set_flexgrow("1");
                p.pan01.set_minwidth("");
                p.pan01.move("20.00","67","360","40",null,null);

                p.staLabel.set_taborder("8");
                p.staLabel.set_text("사업자등록번호");
                p.staLabel.set_cssclass("sta_WF_SchLabel");
                p.staLabel.set_flexshrink("0");
                p.staLabel.set_minwidth("");
                p.staLabel.move("0","0","100","40",null,null);

                p.edtBrno.set_taborder("9");
                p.edtBrno.set_flexgrow("1");
                p.edtBrno.set_displaynulltext("검색어 입력");
                p.edtBrno.set_maxwidth("");
                p.edtBrno.move("140.00","30","100%","40",null,null);

                p.pan04.set_taborder("10");
                p.pan04.set_type("horizontal");
                p.pan04.set_horizontalgap("10");
                p.pan04.set_flexgrow("1");
                p.pan04.set_fittocontents("height");
                p.pan04.set_maxheight("");
                p.pan04.set_minwidth("");
                p.pan04.move("1694.00","398","360","40",null,null);

                p.staLabel00.set_taborder("11");
                p.staLabel00.set_text("사업자명");
                p.staLabel00.set_cssclass("sta_WF_SchLabel");
                p.staLabel00.set_flexshrink("0");
                p.staLabel00.set_minwidth("");
                p.staLabel00.move("0","0","100","40",null,null);

                p.edtBzmnNm.set_taborder("12");
                p.edtBzmnNm.set_flexgrow("1");
                p.edtBzmnNm.set_displaynulltext("검색어 입력");
                p.edtBzmnNm.set_maxwidth("");
                p.edtBzmnNm.move("140.00","30","100%","40",null,null);

                p.pan04_00.set_taborder("13");
                p.pan04_00.set_type("horizontal");
                p.pan04_00.set_horizontalgap("10");
                p.pan04_00.set_flexgrow("1");
                p.pan04_00.set_fittocontents("height");
                p.pan04_00.set_maxheight("");
                p.pan04_00.set_minwidth("");
                p.pan04_00.move("1694.00","398","360","40",null,null);
            	}
            );
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            this.divForm.form.divSch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divSch.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divSch.form,
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
            this.divForm.form.divSch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divGrd.form.divPage
            obj = new Layout("default","",0,0,this.divForm.form.divGrd.form.divPage.form,function(p){});
            this.divForm.form.divGrd.form.divPage.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdList.set_taborder("1");
                p.grdList.set_binddataset("dsList");
                p.grdList.set_autofittype("col");
                p.grdList.set_cellsizingtype("col");
                p.grdList.set_nodatatext("데이타가 없습니다");
                p.grdList.move("0","44","100.00%","600",null,null);

                p.divPage.set_taborder("0");
                p.divPage.set_text("Div00");
                p.divPage.set_url("work::COM/util/paging/paging.xfdl");
                p.divPage.set_formscrollbartype("none none");
                p.divPage.set_formscrolltype("none");
                p.divPage.set_minheight("36");
                p.divPage.set_maxheight("");
                p.divPage.move("0","grdList:10","100.00%","36",null,null);

                p.PanelGrdBtn.set_taborder("5");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_fittocontents("width");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.move(null,"0","550","34","0",null);

                p.staTotal.set_taborder("2");
                p.staTotal.set_text("총 <fc v=\'#1e4ebe\'>0</fc> 건");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.move("0","0","200","34",null,null);

                p.Combo00.set_taborder("4");
                p.Combo00.set_text("10");
                p.Combo00.set_value("");
                p.Combo00.set_index("-1");
                p.Combo00.move("1230","0","80","34",null,null);

                p.staTotal00.set_taborder("3");
                p.staTotal00.set_text("목록수");
                p.staTotal00.set_cssclass("sta_WF_SchLabel");
                p.staTotal00.set_fittocontents("width");
                p.staTotal00.move("1165","0","54","34",null,null);

                p.btnExcelUpload.set_taborder("6");
                p.btnExcelUpload.set_text("엑셀업로드");
                p.btnExcelUpload.set_cssclass("btn_WF_FileUp");
                p.btnExcelUpload.set_visible("true");
                p.btnExcelUpload.move("774.00","10","130","34",null,null);

                p.btnGrdDw.set_taborder("7");
                p.btnGrdDw.set_text("다운로드(엑셀)");
                p.btnGrdDw.set_cssclass("btn_WF_GrdDw");
                p.btnGrdDw.set_fittocontents("width");
                p.btnGrdDw.move("1368","3","124","34",null,null);
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
                p.grdList.set_autofittype("none");

                p.btnExcelUpload.set_visible("false");
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
                p.divSch.move("0","0","100.00%","148",null,null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","30","100.00%","690",null,null);
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
            obj = new Layout("default","Desktop_screen,Phone_screen",1480,1050,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("구내영업안내메일전송용업로드");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.set_fittocontents("height");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","0",null,"1080","60",null);

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

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","work::COM/util/paging/paging.xfdl");
        };
        
        // User Script
        this.registerScript("LIF082M01.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	LIF082M01.xfdl
        *  @Creator 	김진섭
        *  @CreateDate 	2025/01/16
        *  @Desction    생활> 구내영업신청 > 구내영업안내메일전송용업로드
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2025/01/16				김진섭							최초생성
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

        	// 로그인 ID
        	this.gvUserId = this.objApp.gdsUser.getColumn(0,"userId");

        	// 공통 코드 조회
        	//this.fnAplyKndSrch();	// 신청종류
        	//this.fnBldgSrch();		// 건물구분
        	//this.fnPstnSrch();		// 구역구분

        	// 기본값 세팅
        	var curYmd = this.gfnGetDate();
        	//this.divForm.form.divSch.form.cboCrtrYmd.index = 0;
        	this.divForm.form.divSch.form.divCal.form.calPrmsSalsGdBgngYmd.value = this.gfnAddMonth(curYmd, -1);
        	this.divForm.form.divSch.form.divCal.form.calPrmsSalsGdEndYmd.value = curYmd;

        	//자동조회
        	this.fnSearch();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	//TODO..
        };

        //추가
        this.cfnAdd = function ()
        {
        	//TODO..
        };

        //삭제
        this.cfnDel = function ()
        {
        	//TODO..
        };

        //저장
        this.cfnSave = function ()
        {
        	//TODO..
        };

        //추가버튼1
        this.cfnbtnAdd1 = function ()
        {
        	this.gfnAlert("msg.confirm", ["추가버튼1입니다."]);
        	return;
        };

        //추가버튼2
        this.cfnbtnAdd2 = function ()
        {
        	this.gfnAlert("msg.confirm", ["추가버튼2입니다."]);
        	return;
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        /**************************************************************************
         * @name : fnAplyKndSrch
         * @description : 신청종류코드 조회
         ***************************************************************************/
        this.fnAplyKndSrch = function()
        {
        	if(this.dsAplyKnd.getRowCount() > 0){
        		this.dsAplyKnd.clearData();

        	}

        	this.dsAplyKnd.addRow();
        	this.dsAplyKnd.setColumn(0, "useYn", "Y");
        	this.dsAplyKnd.setColumn(0, "cdTypeId", "FACREQTYPE");


        	var strSvcId    = "fnAplyKndSrch";
        	var strSvcUrl   = "lifCom/selectComCd.do";
        	var inData      = "dsSearch=dsAplyKnd";
        	var outData     = "dsAplyKndList=dsCdList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /**************************************************************************
         * @name : fnBldgSrch
         * @description : 건물구분 조회
         ***************************************************************************/
        this.fnBldgSrch = function()
        {
        	if(this.dsBldgSe.getRowCount() > 0){
        		this.dsBldgSe.clearData();

        	}

        	this.dsBldgSe.addRow();
        	this.dsBldgSe.setColumn(0, "useYn", "Y");
        	this.dsBldgSe.setColumn(0, "cdTypeId", "TSPLOC");


        	var strSvcId    = "fnBldgSrch";
        	var strSvcUrl   = "lifCom/selectComCd.do";
        	var inData      = "dsSearch=dsBldgSe";
        	var outData     = "dsBldgSeList=dsCdList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /**************************************************************************
         * @name : fnPstnSrch
         * @description : 구역구분 조회
         ***************************************************************************/
        this.fnPstnSrch = function()
        {
        	if(this.dsPstnSe.getRowCount() > 0){
        		this.dsPstnSe.clearData();

        	}

        	this.dsPstnSe.addRow();
        	this.dsPstnSe.setColumn(0, "useYn", "Y");
        	this.dsPstnSe.setColumn(0, "cdTypeId", "TSCWPLARA");


        	var strSvcId    = "fnPstnSrch";
        	var strSvcUrl   = "lifCom/selectComCd.do";
        	var inData      = "dsSearch=dsPstnSe";
        	var outData     = "dsPstnSeList=dsCdList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /**************************************************************************
         * @name : fnSearch
         * @description : 리스트 조회
         ***************************************************************************/
        this.fnSearch = function()
        {
        	if(this.dsSearch.getRowCount() > 0){
        		this.dsSearch.clearData();

        	}

        	this.dsSearch.addRow();
        	this.dsSearch.setColumn(0, "prmsSalsGdBgngYmd", this.divForm.form.divSch.form.divCal.form.calPrmsSalsGdBgngYmd.value);
        	this.dsSearch.setColumn(0, "prmsSalsGdEndYmd", this.divForm.form.divSch.form.divCal.form.calPrmsSalsGdEndYmd.value);
        	this.dsSearch.setColumn(0, "brno", this.divForm.form.divSch.form.edtBrno.value);
        	this.dsSearch.setColumn(0, "bzmnNm", this.divForm.form.divSch.form.edtBzmnNm.value);

        	var strSvcId    = "fnSearch";
        	var strSvcUrl   = "prmsSals/selectPrmsSalsGdTrsmUpldList.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsList=dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        /**************************************************************************
         * @name : fnCallback
         * @description : 서비스 콜백
         ***************************************************************************/
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "fnAplyKndSrch" : // 신청종류 조회
        			// 전체 조회를 위해 [선택] 추가
        			this.dsAplyKndList.insertRow(0);
        			this.dsAplyKndList.setColumn(0, "cdId", "");
        			this.dsAplyKndList.setColumn(0, "cdNm", "[선택]");

        			break;

        		case "fnBldgSrch": // 건물구분 조회
        			// 건물구분 제한값 'TSPLOCTSC010', 'TSPLOCTSC070', 'TSPLOCTSC020'
        			this.dsBldgSeList.filter("cdId == 'TSPLOCTSC010' || cdId == 'TSPLOCTSC070' || cdId == 'TSPLOCTSC020'");

        			// 전체 조회를 위해 [선택] 추가
        			this.dsBldgSeList.insertRow(0);
        			this.dsBldgSeList.setColumn(0, "cdId", "");
        			this.dsBldgSeList.setColumn(0, "cdNm", "[선택]");

        			break;

        		case "fnPstnSrch" : // 구역구분 조회
        			// 전체 조회를 위해 [선택] 추가
        			this.dsPstnSeList.insertRow(0);
        			this.dsPstnSeList.setColumn(0, "cdId", "");
        			this.dsPstnSeList.setColumn(0, "cdNm", "[선택]");

        			break;

        		case "fnSearch" : // 리스트 조회
        			this.divForm.form.divGrd.form.staTotal.text = "총 <fc v='#1e4ebe'>" + this.dsList.getRowCount() + "</fc>건";

        			break;

        		default :
        			break;
        	}
        };

        /**************************************************************************
         * @name : fnPopupCallback
         * @description : 팝업에 관한 콜백 함수
         ***************************************************************************/
        this.fnPopupCallback = function(sPopupId, sRtn)
        {
        	if (sPopupId == "plcSch") // 담당자 찾기
        	{
        		if (this.gfnIsNull(sRtn)) return;
        		var objRtn = JSON.parse(sRtn);

        		var sUserId = objRtn.rUserId;
        		var sUserNm = objRtn.rUserNm;

        		if (!this.gfnIsNull(sUserId))
        		{
        			for(i=0; i < this.dsWfEmps.rowcount; i++)
        			{
        				var vDsUserId = this.dsWfEmps.getColumn(i,"wfeEmpId");
        				if(vDsUserId == sUserId)
        				{
        					this.divFrom01.form.divEdtPop01.form.mtiArptPicId.setSelect(i,true);
        					return;
        				}
        			}
        			nRow = this.dsWfEmps.addRow();
        			this.dsWfEmps.setColumn(nRow, "wfeEmpId" , sUserId);
        			this.dsWfEmps.setColumn(nRow, "userNm" , sUserNm);
        			/**수정해야함*/
        			this.dsWfEmps.setColumn(nRow, "wfeId" , "1000");
        			this.dsWfEmps.setColumn(nRow, "wfeJobCd" , "TAS10373");
        			this.dsWfEmps.setColumn(nRow, "wfeSrcEntId" , "CAD");
        			////////////////////////////////////////////////////////
        			this.divFrom01.form.divEdtPop01.form.mtiArptPicId.setSelect(nRow,true);
        		}
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
        			var vStrSvcId  = "flrplnAply";
        			var vStrSvcUrl = "cad/flrplnAply.do";//신청
        			this.fnSave(vStrSvcId, vStrSvcUrl);
        		}
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        /**************************************************************************
         * @name : btnSch_onclick
         * @description : 조회 버튼 클릭
         ***************************************************************************/
        this.divForm_divSch_btnSch_onclick = function(obj,e)
        {
        	// 조회
        	this.fnSearch();
        };

        /**************************************************************************
         * @name : grdList_oncellclick
         * @description : 그리드 클릭
         ***************************************************************************/
        this.grdList_oncellclick = function(obj,e)
        {
        	// 신청번호 index값
        // 	var cellIdx = obj.getBindCellIndex("BODY", "aplyNo");
        //
        // 	if(e.row > -1){
        // 		if(cellIdx == e.cell){
        // 			var sTitle = this.dsList.getColumn(e.row,"jobNm");
        // 			var objArg   = {
        // 				"aplyNo" : this.dsList.getColumn(e.row, "aplyNo"),
        // 				// "jobCd"  : this.dsList.getColumn(e.row, "jobCd"),
        // 				"view"   : "popup"
        // 			};
        //
        // 			var objOption = {
        // 				popuptype: "modal"	//modal,modaless
        // 				, width: 1440
        // 				, height: 900			//width,height 지정하지 않음 popup form size적용
        // 				//, autosize: true
        // 				, title: sTitle
        // 				, resize: true
        // 				, titlebar: true
        // 			};
        // 			var sPopupCallBack = "fnPopupCallback";
        //
        // 			this.gfnOpenPopup("popup", "work::LIF/FAC/LIF079M00.xfdl", objArg, sPopupCallBack, objOption);
        //
        // 		}
        // 	}
        };

        this.divForm_divGrd_btnExcelUpload_onclick = function(obj,e)
        {
        	const sTitle = "구내영업안내메일전송용업로드";
        	const oArg = {}
        	const objOption = {
        		  popuptype : "modal"	//modal,modaless
        		, title     : sTitle
        		, titlebar  : true
        		, width     : 1000
        		, height    : 820
        		// , autosize  : true
        		// , resize    : true
        	};

        	this.gfnOpenPopup("cmdtyExcel", "work::LIF/PRM/LIF082P08.xfdl", oArg, function (sPopupId, bRtn) {
        		if (!bRtn) {
        			return;
        		} else {
        			//자동 재조회
        			this.fnSearch();
        		}
        	}, objOption);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divSch.form.btnSchClose.addEventHandler("onclick",this.divForm_divSch_btnSchClose_onclick,this);
            this.divForm.form.divSch.form.btnSch.addEventHandler("onclick",this.divForm_divSch_btnSch_onclick,this);
            this.divForm.form.divSch.form.staLabel.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.divSch.form.staLabel00.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.divGrd.form.grdList.addEventHandler("oncellclick",this.grdList_oncellclick,this);
            this.divForm.form.divGrd.form.btnExcelUpload.addEventHandler("onclick",this.divForm_divGrd_btnExcelUpload_onclick,this);
        };
        this.loadIncludeScript("LIF082M01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
