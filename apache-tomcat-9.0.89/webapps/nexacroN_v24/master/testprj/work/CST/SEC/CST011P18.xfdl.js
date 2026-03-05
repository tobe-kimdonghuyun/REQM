(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST011P18");
            this.set_titletext("위해물품목록조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"gubun\" type=\"STRING\" size=\"256\"/><Column id=\"scrtyDgadsCmdtyUseBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"scrtyDgadsCmdtyUseEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoNm\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnPstnDtlInptCn\" type=\"STRING\" size=\"256\"/><Column id=\"mngPlcCn\" type=\"STRING\" size=\"256\"/><Column id=\"scrtyDgadsCmdtyUsePrpsCn\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nowPgNo\" type=\"STRING\" size=\"256\"/><Column id=\"cntPrPg\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"gubun\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMstList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCmdtyList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTotCnt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSch","0","60",null,"254","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","94.2%","125",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("0");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("50");
            obj.set_fittocontents("height");
            obj.set_tabletemplate("1* / 1*");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01\"/><PanelItem id=\"PanelItem04\" componentid=\"pan01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"pan01_00_01\"/><PanelItem id=\"PanelItem06\" componentid=\"pan01_00_00_00\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01","1694.00","398","480","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01\"/><PanelItem id=\"PanelItem02\" componentid=\"divCal\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01","0","0","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("1");
            obj.set_text("사용종료일");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","0","0","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("3");
            obj.set_text("공사위치");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01_00","860","30","480","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("4");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtCstrnPstnDtlInptCn\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Edit("edtCstrnPstnDtlInptCn","1024","31","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("14");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00","0","0","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("5");
            obj.set_text("주관사회사명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01_00_00","752.00","54","480","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("6");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtSprvsnCoNm\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Edit("edtSprvsnCoNm","994","35","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("11");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00","0","0","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("9");
            obj.set_text("사용목적");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_01","0","0","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("7");
            obj.set_text("보관장소");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01_00_01","860","30","480","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("8");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtMngPlcCn\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Edit("edtMngPlcCn","251","81","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("13");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01_00_00_00","755.00","65","480","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("10");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("2");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtScrtyDgadsCmdtyUsePrpsCn\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Edit("edtScrtyDgadsCmdtyUsePrpsCn","610","81","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("12");
            this.divSch.addChild(obj.name, obj);

            obj = new Div("divCal","132.00","66","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("15");
            obj.set_text("Div00");
            obj.set_flexgrow("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divSch.addChild(obj.name, obj);

            obj = new Calendar("calScrtyDgadsCmdtyUseBgngYmd","0","0","145","40",null,null,null,null,null,null,this.divSch.form.divCal.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Static("staDash","calScrtyDgadsCmdtyUseBgngYmd:10","0","10","40",null,null,null,null,null,null,this.divSch.form.divCal.form);
            obj.set_taborder("1");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_Dash");
            this.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Calendar("calScrtyDgadsCmdtyUseEndYmd","staDash:10","0","145","40",null,null,null,null,null,null,this.divSch.form.divCal.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Button("btnSchClose","1251","185","52","29",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_SchClose");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panClose","30","151","100%","30",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("17");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnSchClose\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Button("btnSch","570","192","112","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("18");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("19");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSch\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","0","divSch:20",null,"450","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Panel("panGrdBtn",null,"0","840","34","0",null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("2");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnExcel\"/><PanelItem id=\"PanelItem04\" componentid=\"btnGrdDel\"/></Contents>");
            this.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdMstList","0","panGrdBtn:10","100.00%",null,null,"0",null,null,null,null,this.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsMstList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"신청번호\"/><Cell col=\"2\" text=\"신청자\"/><Cell col=\"3\" text=\"작업명\"/><Cell col=\"4\" text=\"공사위치\"/><Cell col=\"5\" text=\"사용시작일\"/><Cell col=\"6\" text=\"사용종료일\"/><Cell col=\"7\" text=\"주관&#13;&#10;회사명\"/><Cell col=\"8\" text=\"주관&#13;&#10;회사번호\"/><Cell col=\"9\" text=\"관리책임자(정)\"/><Cell col=\"10\" text=\"관리책입자(부)\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" displaytype=\"text\" textAlign=\"right\"/><Cell col=\"1\" text=\"bind:aplyNo\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:aplcntNm\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:jobNm\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:cstrnPstnDtlInptCn\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:scrtyDgadsCmdtyUseBgngYmd\" displaytype=\"date\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:scrtyDgadsCmdtyUseEndYmd\" displaytype=\"date\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:sprvsnCoNm\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:sprvsnCoTelno\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:sprvsnCoMngRbprsn1Nm\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:sprvsnCoMngRbprsn2Nm\" displaytype=\"text\" cssclass=\"CellEnd\" textAlign=\"left\"/></Band></Format></Formats>");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","27","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal01","staTotal:0","0","43","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("4");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","staTotal01:0","0","30","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("5");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","804.00","10","36","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_GrdSet");
            obj.set_fittocontents("width");
            this.divGrd.addChild(obj.name, obj);

            obj = new Button("btnExcel","1106","6","124","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("6");
            obj.set_text("다운로드(엑셀)");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_fittocontents("width");
            this.divGrd.addChild(obj.name, obj);

            obj = new Div("divPage","0","divGrd:20",null,"36","60",null,null,null,"36",null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_url("work::COM/util/paging/paging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divGrd00","0","divPage:20",null,"505","60",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Panel("panGrdBtn",null,"0","840","34","0",null,null,null,null,null,this.divGrd00.form);
            obj.set_taborder("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Button00\"/><PanelItem id=\"PanelItem04\" componentid=\"btnGrdDel\"/></Contents>");
            this.divGrd00.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","270","34",null,null,null,null,null,null,this.divGrd00.form);
            obj.set_taborder("0");
            obj.set_text("위해물품 상세 목록");
            obj.set_cssclass("sta_WF_Txt50022");
            obj.set_usedecorate("true");
            this.divGrd00.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","804.00","10","36","34",null,null,null,null,null,null,this.divGrd00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_GrdSet");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divGrd00.addChild(obj.name, obj);

            obj = new Button("Button00","1106","6","124","34",null,null,null,null,null,null,this.divGrd00.form);
            obj.set_taborder("3");
            obj.set_text("다운로드(엑셀)");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divGrd00.addChild(obj.name, obj);

            obj = new Grid("grdDtlList","0","panGrdBtn:10","100.00%",null,null,"105",null,null,null,null,this.divGrd00.form);
            obj.set_taborder("4");
            obj.set_binddataset("dsCmdtyList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"130\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"180\"/><Column size=\"150\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"물품명\"/><Cell col=\"2\" text=\"반입수량\"/><Cell col=\"3\" text=\"반출수량\"/><Cell col=\"4\" text=\"물품사진\"/><Cell col=\"5\" text=\"총보유수량&#13;&#10;(장비 P/N)\"/><Cell col=\"6\" text=\"단위&#13;&#10;(관리번호)\"/><Cell col=\"7\" text=\"관리번호\"/><Cell col=\"8\" text=\"규격\"/><Cell col=\"9\" text=\"보관장소&#13;&#10;(구체적장소)\"/><Cell col=\"10\" text=\"출력방법\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" displaytype=\"text\" textAlign=\"right\"/><Cell col=\"1\" text=\"bind:cmdtyNm\" displaytype=\"text\" textAlign=\"left\" cssclass=\"expr:crynQty &gt; shpgotQty ? &quot;CellTxtRed&quot; : &quot;&quot;\"/><Cell col=\"2\" displaytype=\"number\" textAlign=\"right\" text=\"bind:crynQty\" cssclass=\"expr:crynQty &gt; shpgotQty ? &quot;CellTxtRed&quot; : &quot;&quot;\"/><Cell col=\"3\" displaytype=\"number\" textAlign=\"right\" text=\"bind:shpgotQty\" cssclass=\"expr:crynQty &gt; shpgotQty ? &quot;CellTxtRed&quot; : &quot;&quot;\"/><Cell col=\"4\" text=\"bind:건물명\" displaytype=\"text\" cssclass=\"expr:crynQty &gt; shpgotQty ? &quot;CellTxtRed&quot; : &quot;&quot;\"/><Cell col=\"5\" text=\"bind:thldQty\" displaytype=\"number\" cssclass=\"expr:crynQty &gt; shpgotQty ? &quot;CellTxtRed&quot; : &quot;&quot;\"/><Cell col=\"6\" text=\"bind:spcfctVl\" textAlign=\"left\" cssclass=\"expr:crynQty &gt; shpgotQty ? &quot;CellTxtRed&quot; : &quot;&quot;\"/><Cell col=\"7\" text=\"bind:mngNo\" textAlign=\"left\" cssclass=\"expr:crynQty &gt; shpgotQty ? &quot;CellTxtRed&quot; : &quot;&quot;\"/><Cell col=\"8\" text=\"bind:unitVl\" textAlign=\"left\" cssclass=\"expr:crynQty &gt; shpgotQty ? &quot;CellTxtRed&quot; : &quot;&quot;\"/><Cell col=\"9\" text=\"bind:mngPlcCn\" textAlign=\"left\" cssclass=\"expr:crynQty &gt; shpgotQty ? &quot;CellTxtRed&quot; : &quot;&quot;\"/><Cell col=\"10\" text=\"bind:otptMthdSeCdNm\" displaytype=\"text\" cssclass=\"expr:crynQty &gt; shpgotQty ? &quot;CellTxtRed CellEnd&quot; : &quot;CellEnd&quot;\"/></Band></Format></Formats>");
            this.divGrd00.addChild(obj.name, obj);

            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSch.form.divCal.form
            obj = new Layout("default","",0,0,this.divSch.form.divCal.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.calScrtyDgadsCmdtyUseBgngYmd.set_taborder("0");
                p.calScrtyDgadsCmdtyUseBgngYmd.set_dateformat("yyyy-MM-dd");
                p.calScrtyDgadsCmdtyUseBgngYmd.move("0","0","145","40",null,null);

                p.staDash.set_taborder("1");
                p.staDash.set_text("~");
                p.staDash.set_cssclass("sta_WF_Dash");
                p.staDash.move("calScrtyDgadsCmdtyUseBgngYmd:10","0","10","40",null,null);

                p.calScrtyDgadsCmdtyUseEndYmd.set_taborder("2");
                p.calScrtyDgadsCmdtyUseEndYmd.set_dateformat("yyyy-MM-dd");
                p.calScrtyDgadsCmdtyUseEndYmd.move("staDash:10","0","145","40",null,null);
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
                p.calScrtyDgadsCmdtyUseBgngYmd.move("0","0","45%","40",null,null);

                p.calScrtyDgadsCmdtyUseEndYmd.move("staDash:10","0","45%","40",null,null);
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
                p.panLabel.set_taborder("0");
                p.panLabel.set_verticalgap("8");
                p.panLabel.set_flexwrap("wrap");
                p.panLabel.set_spacing("0px 0px 10px 0px");
                p.panLabel.set_type("horizontal");
                p.panLabel.set_flexcrossaxisalign("start");
                p.panLabel.set_horizontalgap("50");
                p.panLabel.set_fittocontents("height");
                p.panLabel.set_tabletemplate("1* / 1*");
                p.panLabel.set_maxheight("");
                p.panLabel.move("20","14","94.2%","125",null,null);

                p.pan01.set_taborder("2");
                p.pan01.set_type("horizontal");
                p.pan01.set_horizontalgap("10");
                p.pan01.set_flexgrow("1");
                p.pan01.set_fittocontents("height");
                p.pan01.set_maxheight("");
                p.pan01.set_minwidth("");
                p.pan01.move("1694.00","398","480","40",null,null);

                p.staLabel01.set_taborder("1");
                p.staLabel01.set_text("사용종료일");
                p.staLabel01.set_cssclass("sta_WF_SchLabel");
                p.staLabel01.set_flexshrink("0");
                p.staLabel01.set_minwidth("");
                p.staLabel01.move("0","0","100","40",null,null);

                p.staLabel01_00.set_taborder("3");
                p.staLabel01_00.set_text("공사위치");
                p.staLabel01_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel01_00.set_flexshrink("0");
                p.staLabel01_00.set_minwidth("");
                p.staLabel01_00.move("0","0","100","40",null,null);

                p.pan01_00.set_taborder("4");
                p.pan01_00.set_type("horizontal");
                p.pan01_00.set_horizontalgap("10");
                p.pan01_00.set_flexgrow("1");
                p.pan01_00.set_fittocontents("height");
                p.pan01_00.set_maxheight("");
                p.pan01_00.set_minwidth("");
                p.pan01_00.move("860","30","480","40",null,null);

                p.edtCstrnPstnDtlInptCn.set_taborder("14");
                p.edtCstrnPstnDtlInptCn.move("1024","31","100%","40",null,null);

                p.staLabel01_00_00.set_taborder("5");
                p.staLabel01_00_00.set_text("주관사회사명");
                p.staLabel01_00_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel01_00_00.set_flexshrink("0");
                p.staLabel01_00_00.set_minwidth("");
                p.staLabel01_00_00.move("0","0","100","40",null,null);

                p.pan01_00_00.set_taborder("6");
                p.pan01_00_00.set_type("horizontal");
                p.pan01_00_00.set_horizontalgap("10");
                p.pan01_00_00.set_flexgrow("1");
                p.pan01_00_00.set_fittocontents("height");
                p.pan01_00_00.set_maxheight("");
                p.pan01_00_00.set_minwidth("");
                p.pan01_00_00.move("752.00","54","480","40",null,null);

                p.edtSprvsnCoNm.set_taborder("11");
                p.edtSprvsnCoNm.move("994","35","100%","40",null,null);

                p.staLabel01_00_00_00.set_taborder("9");
                p.staLabel01_00_00_00.set_text("사용목적");
                p.staLabel01_00_00_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel01_00_00_00.set_flexshrink("0");
                p.staLabel01_00_00_00.set_minwidth("");
                p.staLabel01_00_00_00.move("0","0","100","40",null,null);

                p.staLabel01_00_01.set_taborder("7");
                p.staLabel01_00_01.set_text("보관장소");
                p.staLabel01_00_01.set_cssclass("sta_WF_SchLabel");
                p.staLabel01_00_01.set_flexshrink("0");
                p.staLabel01_00_01.set_minwidth("");
                p.staLabel01_00_01.move("0","0","100","40",null,null);

                p.pan01_00_01.set_taborder("8");
                p.pan01_00_01.set_type("horizontal");
                p.pan01_00_01.set_horizontalgap("10");
                p.pan01_00_01.set_flexgrow("1");
                p.pan01_00_01.set_fittocontents("height");
                p.pan01_00_01.set_maxheight("");
                p.pan01_00_01.set_minwidth("");
                p.pan01_00_01.move("860","30","480","40",null,null);

                p.edtMngPlcCn.set_taborder("13");
                p.edtMngPlcCn.move("251","81","100%","40",null,null);

                p.pan01_00_00_00.set_taborder("10");
                p.pan01_00_00_00.set_type("horizontal");
                p.pan01_00_00_00.set_horizontalgap("10");
                p.pan01_00_00_00.set_flexgrow("2");
                p.pan01_00_00_00.set_fittocontents("height");
                p.pan01_00_00_00.set_maxheight("");
                p.pan01_00_00_00.set_minwidth("");
                p.pan01_00_00_00.move("755.00","65","480","40",null,null);

                p.edtScrtyDgadsCmdtyUsePrpsCn.set_taborder("12");
                p.edtScrtyDgadsCmdtyUsePrpsCn.move("610","81","100%","40",null,null);

                p.divCal.set_taborder("15");
                p.divCal.set_text("Div00");
                p.divCal.set_flexgrow("1");
                p.divCal.set_formscrollbartype("none none");
                p.divCal.set_formscrolltype("none");
                p.divCal.move("132.00","66","100%","40",null,null);

                p.btnSchClose.set_taborder("16");
                p.btnSchClose.set_cssclass("btn_WF_SchClose");
                p.btnSchClose.move("1251","185","52","29",null,null);

                p.panClose.set_taborder("17");
                p.panClose.set_type("vertical");
                p.panClose.set_cssclass("pal_WF_SchLine");
                p.panClose.set_flexcrossaxisalign("end");
                p.panClose.move("30","151","100%","30",null,null);

                p.btnSch.set_taborder("18");
                p.btnSch.set_text("조회하기");
                p.btnSch.set_cssclass("btn_WF_Search");
                p.btnSch.move("570","192","112","40",null,null);

                p.panSchBtn.set_taborder("19");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100%","40",null,null);
            	}
            );
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
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
                p.panGrdBtn.set_taborder("2");
                p.panGrdBtn.set_flexcrossaxisalign("start");
                p.panGrdBtn.set_flexcrossaxiswrapalign("start");
                p.panGrdBtn.set_flexmainaxisalign("end");
                p.panGrdBtn.set_horizontalgap("10");
                p.panGrdBtn.move(null,"0","840","34","0",null);

                p.grdMstList.set_taborder("0");
                p.grdMstList.set_binddataset("dsMstList");
                p.grdMstList.move("0","panGrdBtn:10","100.00%",null,null,"0");

                p.staTotal.set_taborder("1");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","0","27","34",null,null);

                p.staTotal01.set_taborder("4");
                p.staTotal01.set_text("0");
                p.staTotal01.set_cssclass("sta_WF_Total");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.set_fittocontents("width");
                p.staTotal01.move("staTotal:0","0","43","34",null,null);

                p.staTotal02.set_taborder("5");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.move("staTotal01:0","0","30","34",null,null);

                p.btnGrdDel.set_taborder("3");
                p.btnGrdDel.set_cssclass("btn_WF_GrdSet");
                p.btnGrdDel.set_fittocontents("width");
                p.btnGrdDel.move("804.00","10","36","34",null,null);

                p.btnExcel.set_taborder("6");
                p.btnExcel.set_text("다운로드(엑셀)");
                p.btnExcel.set_cssclass("btn_WF_GrdDw");
                p.btnExcel.set_fittocontents("width");
                p.btnExcel.move("1106","6","124","34",null,null);
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
            obj.set_verticalgap("20");
            this.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divPage
            obj = new Layout("default","",0,0,this.divPage.form,function(p){});
            this.divPage.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrd00.form
            obj = new Layout("default","",0,0,this.divGrd00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panGrdBtn.set_taborder("1");
                p.panGrdBtn.set_flexcrossaxisalign("start");
                p.panGrdBtn.set_flexcrossaxiswrapalign("start");
                p.panGrdBtn.set_flexmainaxisalign("end");
                p.panGrdBtn.set_horizontalgap("10");
                p.panGrdBtn.move(null,"0","840","34","0",null);

                p.staTotal.set_taborder("0");
                p.staTotal.set_text("위해물품 상세 목록");
                p.staTotal.set_cssclass("sta_WF_Txt50022");
                p.staTotal.set_usedecorate("true");
                p.staTotal.move("0","0","270","34",null,null);

                p.btnGrdDel.set_taborder("2");
                p.btnGrdDel.set_cssclass("btn_WF_GrdSet");
                p.btnGrdDel.set_fittocontents("width");
                p.btnGrdDel.set_visible("false");
                p.btnGrdDel.move("804.00","10","36","34",null,null);

                p.Button00.set_taborder("3");
                p.Button00.set_text("다운로드(엑셀)");
                p.Button00.set_cssclass("btn_WF_GrdDw");
                p.Button00.set_fittocontents("width");
                p.Button00.set_visible("false");
                p.Button00.move("1106","6","124","34",null,null);

                p.grdDtlList.set_taborder("4");
                p.grdDtlList.set_binddataset("dsCmdtyList");
                p.grdDtlList.set_autofittype("col");
                p.grdDtlList.move("0","panGrdBtn:10","100.00%",null,null,"105");
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
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,800,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("위해물품목록조회");

                p.divSch.set_taborder("0");
                p.divSch.set_text("Div00");
                p.divSch.set_cssclass("div_WF_SchBg");
                p.divSch.set_formscrollbartype("none none");
                p.divSch.set_formscrolltype("none");
                p.divSch.set_fittocontents("height");
                p.divSch.move("0","60",null,"254","60",null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","divSch:20",null,"450","60",null);

                p.divPage.set_taborder("3");
                p.divPage.set_text("Div00");
                p.divPage.set_url("work::COM/util/paging/paging.xfdl");
                p.divPage.set_formscrollbartype("none none");
                p.divPage.set_formscrolltype("none");
                p.divPage.set_visible("false");
                p.divPage.set_minheight("36");
                p.divPage.set_maxheight("");
                p.divPage.move("0","divGrd:20",null,"36","60",null);

                p.divGrd00.set_taborder("2");
                p.divGrd00.set_text("Div01");
                p.divGrd00.set_fittocontents("height");
                p.divGrd00.set_formscrollbartype("none none");
                p.divGrd00.set_formscrolltype("none");
                p.divGrd00.move("0","divPage:20",null,"505","60",null);

                p.divTitle.set_taborder("4");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_verticalgap("20");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divSch.move("20","60",null,"127","20",null);

                p.divGrd.move("20","divSch:30",null,"543","20",null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_verticalgap("20");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSch.form.divCal.form.calScrtyDgadsCmdtyUseBgngYmd","value","dsSearch","scrtyDgadsCmdtyUseBgngYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSch.form.divCal.form.calScrtyDgadsCmdtyUseEndYmd","value","dsSearch","scrtyDgadsCmdtyUseEndYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSch.form.edtSprvsnCoNm","value","dsSearch","sprvsnCoNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSch.form.edtCstrnPstnDtlInptCn","value","dsSearch","cstrnPstnDtlInptCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSch.form.edtMngPlcCn","value","dsSearch","mngPlcCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSch.form.edtScrtyDgadsCmdtyUsePrpsCn","value","dsSearch","scrtyDgadsCmdtyUsePrpsCn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","work::COM/util/paging/paging.xfdl");
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.addIncludeScript("CST011P18.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CST011P18.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	CST011P18.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/08/08
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/08/08			이규철						최초생성
        *******************************************************************************
        */

        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;
        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvCurDate = this.gfnGetDate();
        this.objApp = nexacro.getApplication();
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

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.fnSearch = function (pgNo = 1) {
        	this.dsCmdtyList.clearData();

        	this.dsSearch.setColumn(0, "nowPgNo", pgNo);  // 페이지번호

        	var strSvcId    = "search";
        	var strSvcUrl   = "cst/sec/selectDgadsCmdtyVldList.do";
        	var inData      = "dsIn=dsSearch";
        	var outData     = "dsMstList=dsMstList dsTotCnt=dsTotCnt";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync); 		// 비동기통신 여부 [생략가능]
        }

        this.fnSearchDtl = function () {
        	var strSvcId    = "searchDtl";
        	var strSvcUrl   = "cst/sec/selectDgadsCmdtyVldCmdtyList.do";
        	var inData      = "dsIn=dsSearch";
        	var outData     = "dsCmdtyList=dsCmdtyList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync); 		// 비동기통신 여부 [생략가능]
        }

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(svcId, errCd, errMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errCd != 0) { return; }

        	switch(svcId) {
        		case "search" :
        			this.divGrd.form.staTotal01.text = this.dsMstList.getRowCount();
        			this.divGrd.form.resetScroll();

        			this.fnPagingInit (this.dsSearch.getColumn(0, "nowPgNo"), this.dsTotCnt.getColumn(0, 0)) ;

        			break;

        		default:
        			break;
        	}
        }

        this.fnPgCallback = function(pgNo) {
        	this.fnSearch(pgNo);
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function () {
        	// 공통코드 함수 호출
        	// this.cfnComCdLoad({ id:"commonCodeSearch", cbf:"fnCallBack", dsAISVIOGUBUN:"AISVIOGUBUN:A" });

        	const date = new Date();
        	date.setDate(date.getDate() - 30);

        	const sYear = date.getFullYear().toString();
        	const sMonth = ((date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)).toString();
        	const sDate = date.getDate().toString();

        	this.dsSearch.setColumn(0, "scrtyDgadsCmdtyUseBgngYmd", sYear + sMonth + sDate);
        	this.dsSearch.setColumn(0, "scrtyDgadsCmdtyUseEndYmd", this.fvCurDate);
        	this.dsSearch.setColumn(0, "cntPrPg", 10); // 페이지당목록건수
        	this.dsSearch.setColumn(0, "type", "all");

        	this.cfnSetGrdPrztInfo();
        }

        this.fnPagingInit = function (nCurPag=0, nTotalCnt=0, nPageCnt=10, nListCnt=10) {
        	if (nTotalCnt > nPageCnt) this.divPage.visible = true;
        	this.divPage.form.initPages(nCurPag, nTotalCnt, nPageCnt, nListCnt, "fnPgCallback");
        }
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divSch_btnSch_onclick = function(obj,e)
        {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "scrtyDgadsCmdtyUseBgngYmd"))) {
        		this.divSch.form.divCal.form.calScrtyDgadsCmdtyUseBgngYmd.setFocus();
        		this.gfnAlertMsg("msg1", "MSG_009", ["사용시작일"]); //{0} 을/를 입력해 주세요.
        		return false;
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "scrtyDgadsCmdtyUseEndYmd"))) {
        		this.divSch.form.divCal.form.calScrtyDgadsCmdtyUseEndYmd.setFocus();
        		this.gfnAlertMsg("msg2", "MSG_009", ["사용종료일"]); //{0} 을/를 입력해 주세요.
        		return false;
        	}

        	if (this.dsSearch.getColumn(0, "scrtyDgadsCmdtyUseBgngYmd") > this.dsSearch.getColumn(0, "scrtyDgadsCmdtyUseEndYmd")) {
        		this.divSch.form.divCal.form.calScrtyDgadsCmdtyUseBgngYmd.setFocus();
        		this.gfnAlertMsg("msg3", "MSG_012", ["사용"]); //{0} 시작일자가 종료일자보다 큽니다.
        		return false;
        	}

        	this.fnSearch();
        };

        this.dsMstList_onrowposchanged = function(obj,e)
        {
        	if (e.newrow == -1) return;
        	this.dsSearch.setColumn(0, "aplyNo", obj.getColumn(e.newrow, "aplyNo"))
        	this.fnSearchDtl();
        };

        // 엑셀다운로드
        this.divGrd_btnExcel_onclick = function(obj,e)
        {
        	this.gfn_excelExport(this.divGrd.form.grdMstList, "위해물품목록조회", "위해물품목록조회");
        };

        //검색조건 row변경 버튼 이벤트
        this.divForm_divSch_btnSchClose_onclick = function(obj,e)
        {
        	if(this.divSch.form.btnSchClose.cssclass == "btn_WF_SchClose") {
        		this.divSch.form.panLabel.fittocontents="none";
        		this.divSch.form.panLabel.set_height("45px");
        		this.divSch.fittocontents="none";
        		this.divSch.set_height("145px");
        		this.divSch.form.btnSchClose.set_cssclass("btn_WF_SchOpen");
        		this.resetScroll();
        	} else {
        		this.divSch.form.panLabel.fittocontents="height";
        		this.divSch.form.panLabel.set_height("125px");
        		this.divSch.fittocontents="height";
        		this.divSch.set_height("254px");
        		this.divSch.form.btnSchClose.set_cssclass("btn_WF_SchClose");
        		this.resetScroll();
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSch.form.btnSchClose.addEventHandler("onclick",this.divForm_divSch_btnSchClose_onclick,this);
            this.divSch.form.btnSch.addEventHandler("onclick",this.divSch_btnSch_onclick,this);
            this.divGrd.form.btnExcel.addEventHandler("onclick",this.divGrd_btnExcel_onclick,this);
            this.dsMstList.addEventHandler("onrowposchanged",this.dsMstList_onrowposchanged,this);
        };
        this.loadIncludeScript("CST011P18.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
