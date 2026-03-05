(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST001P01");
            this.set_titletext("사전협의조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"fromDt\" type=\"STRING\" size=\"256\"/><Column id=\"toDt\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtPstnInfoCn\" type=\"STRING\" size=\"256\"/><Column id=\"coId\" type=\"STRING\" size=\"256\"/><Column id=\"coNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSch","0","0",null,"170","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Calendar("calFromDt","277","32","150","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("11");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel00","69","25","140","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("10");
            obj.set_text("협의일자(시작일)");
            obj.set_cssclass("sta_WF_SchLabel_E");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","0","0","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("9");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
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
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel02\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel03\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel01","1694.00","398","300","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01\"/><PanelItem id=\"PanelItem01\" componentid=\"calStDt\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01","0","0","140","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("1");
            obj.set_text("협의일자(종료일)");
            obj.set_cssclass("sta_WF_SchLabel_E");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel00","20.00","14","300","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("3");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexwrap("nowrap");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem01\" componentid=\"calFromDt\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Calendar("calStDt","961","34","150","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("12");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel02","0","0","150","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("4");
            obj.set_text("위치정보 (매장번호)");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel02","1694.00","398","22.27866473149492%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("5");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02\"/><PanelItem id=\"PanelItem01\" componentid=\"edtHwrtPstnInfoCn\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Edit("edtHwrtPstnInfoCn","936","40","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("14");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel03","1694.00","398","300","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("6");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"divEdtPop00\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("7");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSch\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Button("btnSch","570","192","112","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("8");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            obj.set_fittocontents("width");
            this.divSch.addChild(obj.name, obj);

            obj = new Div("divEdtPop00","928.00","74","34.93%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("13");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divSch.addChild(obj.name, obj);

            obj = new Edit("edtCoCd","0","0","100%","40",null,null,null,null,null,null,this.divSch.form.divEdtPop00.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            this.divSch.form.divEdtPop00.addChild(obj.name, obj);

            obj = new Button("btnPop","edtCoCd:-40","0","40","40",null,null,null,null,null,null,this.divSch.form.divEdtPop00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.divSch.form.divEdtPop00.addChild(obj.name, obj);

            obj = new Div("divGrd","0","divSch:30",null,null,"60","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("staTotal02","70","0","30","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal01","27","0",null,"34","staTotal02:0",null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0",null,"34","staTotal01:0",null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("0");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdList","5.00","44","100%",null,null,"0",null,null,null,null,this.divGrd.form);
            obj.set_taborder("3");
            obj.set_binddataset("dsList");
            obj.getSetter("uFunction").set("checkbox");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"150\"/><Column size=\"148\"/><Column size=\"140\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"120\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"사전협의번호\"/><Cell col=\"2\" text=\"처리구분\"/><Cell col=\"3\" text=\"사전협의일자\"/><Cell col=\"4\" text=\"회사명\"/><Cell col=\"5\" text=\"계약번호\"/><Cell col=\"6\" text=\"위치정보(룸번호)\"/><Cell col=\"7\" text=\"설치사유\"/><Cell col=\"8\" text=\"작업명\"/><Cell col=\"9\" text=\"협의내용\"/><Cell col=\"10\" text=\"체크리스트\"/><Cell col=\"11\" text=\"담당자\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:bfhdCnsltnNo\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:jobPrcsPrgrsSeCdNm\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:bfhdCnsltnYmd\" displaytype=\"date\"/><Cell col=\"4\" text=\"bind:coNm\"/><Cell col=\"5\" text=\"bind:ctrtNo\"/><Cell col=\"6\" text=\"bind:hwrtPstnInfoCn\"/><Cell col=\"7\" text=\"bind:instlRsnNm\"/><Cell col=\"8\" text=\"bind:jobNm\"/><Cell col=\"9\" text=\"bind:dsinCnsltnCn\"/><Cell col=\"10\" text=\"체크리스트\" displaytype=\"buttoncontrol\" edittype=\"button\"/><Cell col=\"11\" cssclass=\"CellEnd\" text=\"bind:dsinPicNm\"/></Band></Format></Formats>");
            this.divGrd.addChild(obj.name, obj);

            obj = new Button("btnOpen",null,"5","80","34","0",null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("4");
            obj.set_text("상세조회");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divGrd.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSch.form.divEdtPop00.form
            obj = new Layout("default","",0,0,this.divSch.form.divEdtPop00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.edtCoCd.set_taborder("0");
                p.edtCoCd.set_cssclass("edt_WF_EdtSch");
                p.edtCoCd.move("0","0","100%","40",null,null);

                p.btnPop.set_taborder("1");
                p.btnPop.set_cssclass("btn_WF_EdtSch");
                p.btnPop.move("edtCoCd:-40","0","40","40",null,null);
            	}
            );
            this.divSch.form.divEdtPop00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSch.form.divEdtPop00.form
            obj = new Layout("Layout0","",0,0,this.divSch.form.divEdtPop00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divSch.form.divEdtPop00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSch.form.divEdtPop00.form
            obj = new Layout("Layout0","",0,0,this.divSch.form.divEdtPop00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divSch.form.divEdtPop00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divSch.form
            obj = new Layout("default","",0,0,this.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.calFromDt.set_taborder("11");
                p.calFromDt.set_dateformat("yyyy-MM-dd");
                p.calFromDt.move("277","32","150","40",null,null);

                p.staLabel00.set_taborder("10");
                p.staLabel00.set_text("협의일자(시작일)");
                p.staLabel00.set_cssclass("sta_WF_SchLabel_E");
                p.staLabel00.set_flexshrink("0");
                p.staLabel00.move("69","25","140","40",null,null);

                p.staLabel01_00.set_taborder("9");
                p.staLabel01_00.set_text("회사명");
                p.staLabel01_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel01_00.set_flexshrink("0");
                p.staLabel01_00.set_maxwidth("");
                p.staLabel01_00.move("0","0","100","40",null,null);

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

                p.Panel01.set_taborder("2");
                p.Panel01.set_type("horizontal");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_flexgrow("1");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_maxheight("");
                p.Panel01.set_minwidth("");
                p.Panel01.move("1694.00","398","300","40",null,null);

                p.staLabel01.set_taborder("1");
                p.staLabel01.set_text("협의일자(종료일)");
                p.staLabel01.set_cssclass("sta_WF_SchLabel_E");
                p.staLabel01.set_flexshrink("0");
                p.staLabel01.set_maxwidth("");
                p.staLabel01.move("0","0","140","40",null,null);

                p.Panel00.set_taborder("3");
                p.Panel00.set_type("horizontal");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_flexwrap("nowrap");
                p.Panel00.set_flexgrow("1");
                p.Panel00.set_maxheight("");
                p.Panel00.set_minwidth("");
                p.Panel00.move("20.00","14","300","40",null,null);

                p.calStDt.set_taborder("12");
                p.calStDt.set_dateformat("yyyy-MM-dd");
                p.calStDt.move("961","34","150","40",null,null);

                p.staLabel02.set_taborder("4");
                p.staLabel02.set_text("위치정보 (매장번호)");
                p.staLabel02.set_cssclass("sta_WF_SchLabel");
                p.staLabel02.set_flexshrink("0");
                p.staLabel02.set_maxwidth("");
                p.staLabel02.move("0","0","150","40",null,null);

                p.Panel02.set_taborder("5");
                p.Panel02.set_type("horizontal");
                p.Panel02.set_horizontalgap("10");
                p.Panel02.set_flexgrow("1");
                p.Panel02.set_fittocontents("height");
                p.Panel02.set_minwidth("");
                p.Panel02.move("1694.00","398","22.27866473149492%","40",null,null);

                p.edtHwrtPstnInfoCn.set_taborder("14");
                p.edtHwrtPstnInfoCn.move("936","40","100%","40",null,null);

                p.Panel03.set_taborder("6");
                p.Panel03.set_type("horizontal");
                p.Panel03.set_horizontalgap("10");
                p.Panel03.set_fittocontents("height");
                p.Panel03.set_flexgrow("1");
                p.Panel03.set_minwidth("");
                p.Panel03.move("1694.00","398","300","40",null,null);

                p.panSchBtn.set_taborder("7");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100%","40",null,null);

                p.btnSch.set_taborder("8");
                p.btnSch.set_text("조회하기");
                p.btnSch.set_cssclass("btn_WF_Search");
                p.btnSch.set_fittocontents("width");
                p.btnSch.move("570","192","112","40",null,null);

                p.divEdtPop00.set_taborder("13");
                p.divEdtPop00.set_text("Div00");
                p.divEdtPop00.set_formscrollbartype("none none");
                p.divEdtPop00.set_formscrolltype("none");
                p.divEdtPop00.set_flexgrow("1");
                p.divEdtPop00.move("928.00","74","34.93%","40",null,null);
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
                p.panLabel.move("132","47","100%","244",null,null);

                p.Panel03.set_type("horizontal");
                p.Panel03.set_fittocontents("height");
                p.Panel03.set_horizontalgap("8");
                p.Panel03.move("1694.00","398","100%","40",null,null);

                p.Panel02.set_horizontalgap("8");
                p.Panel02.move("1694.00","398","100%","45",null,null);

                p.Panel01.set_horizontalgap("8");
                p.Panel01.move("1694.00","398","100%","40",null,null);

                p.Panel00.set_type("horizontal");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_horizontalgap("8");
                p.Panel00.move("1694.00","398","100%","80",null,null);

                p.edtHwrtPstnInfoCn.move("140","80","65%","40",null,null);

                p.Edit01_00.move("841","24","65%","40",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("14px 16px 12px 16px");
            obj.set_flexwrap("wrap");
            this.divSch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSch.form
            obj = new Layout("Layout0","",0,0,this.divSch.form,
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
                p.staTotal02.set_taborder("2");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.move("70","0","30","34",null,null);

                p.staTotal01.set_taborder("1");
                p.staTotal01.set_text("0");
                p.staTotal01.set_cssclass("sta_WF_Total");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.set_fittocontents("width");
                p.staTotal01.move("27","0",null,"34","staTotal02:0",null);

                p.staTotal.set_taborder("0");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","0",null,"34","staTotal01:0",null);

                p.grdList.set_taborder("3");
                p.grdList.set_binddataset("dsList");
                p.grdList.getSetter("uFunction").set("checkbox");
                p.grdList.move("5.00","44","100%",null,null,"0");

                p.btnOpen.set_taborder("4");
                p.btnOpen.set_text("상세조회");
                p.btnOpen.set_cssclass("btn_WF_Small");
                p.btnOpen.set_visible("true");
                p.btnOpen.set_fittocontents("width");
                p.btnOpen.move(null,"5","80","34","0",null);
            	}
            );
            this.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,700,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("사전협의조회");

                p.divSch.set_taborder("0");
                p.divSch.set_text("Div00");
                p.divSch.set_cssclass("div_WF_SchBg");
                p.divSch.set_formscrollbartype("none none");
                p.divSch.set_fittocontents("height");
                p.divSch.move("0","0",null,"170","60",null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div00");
                p.divGrd.set_visible("true");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.move("0","divSch:30",null,null,"60","0");
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_verticalgap("20");
            obj.set_spacing("0px 60px 0px 0px");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",480,700,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            obj.set_verticalgap("20");
            obj.set_spacing("0px 60px 0px 0px");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSch.form.calFromDt","value","dsSearch","fromDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSch.form.calStDt","value","dsSearch","toDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSch.form.edtHwrtPstnInfoCn","value","dsSearch","hwrtPstnInfoCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSch.form.divEdtPop00.form.edtCoCd","value","dsSearch","coNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CST001P01.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	CST001M00
        *  @Creator 	이규철
        *  @CreateDate 	2024/09/19
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/08/08			이규철					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvCurDate = this.gfnGetDate();

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	if (this.gfnIsNull(this.opener)) {
        		this.divGrd.form.grdList.uFunction = "";
        	}

        	this.gfnFormOnload(obj); //필수함수

        	this.fnInit();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {

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
        this.fnSearch = function () {
        	var strSvcId    = "search";
        	var strSvcUrl   = "cst/bfh/instlBfhdCnsltnListInq.do";
        	var inData      = "dsIn=dsSearch";
        	var outData     = "dsList=dsList";
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
        		this.divGrd.form.staTotal01.text = this.dsList.getRowCount();
        		break;

        	default:
        		break;
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function() {
        	this.divGrd.form.btnOpen.visible = this.gfnIsNull(this.opener);

        	// 유저정보를 셋팅한다.
        	const gdsUser = nexacro.getApplication().gdsUser;

        	// 초기데이터
        	this.dsSearch.clearData();
        	this.dsSearch.addRow();
        	this.dsSearch.setColumn(0, "fromDt", this.fvCurDate);
        	this.dsSearch.setColumn(0, "toDt", this.fvCurDate);
        };


        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divSch_btnSch_onclick = function(obj,e)
        {

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "fromDt"))) {
        		this.divSch.form.calFromDt.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["협의일자(시작일)"]);
        		return;
        	}
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "toDt"))) {
        		this.divSch.form.calStDt.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["협의일자(종료일)"]);
        		return;
        	}

        	if (this.dsSearch.getColumn(0, "fromDt") > this.dsSearch.getColumn(0, "toDt")) {
        		this.divSch.form.calFromDt.setFocus();
        		this.gfnAlertMsg("msg", "MSG_012", ["협의일자"]); // {0} 시작일자가 종료일자보다 큽니다.
        		return false;
        	}

        	this.fnSearch();
        };

        // 상세조회
        this.divForm_divGrd_btnGrdAdd_onclick = function(obj,e)
        {
        	const nRow = this.dsList.rowposition;
        	if (nRow == -1)  {
        		this.gfnAlertMsg("msg", "MSG_006");	//선택된 내용이 없습니다.
        		return;
        	}

        	const sTitle = "사전협의상세조회";
        	const objArg   = {
        	                    bfhdCnsltnNo : this.dsList.getColumn(nRow, "bfhdCnsltnNo")
        					 };
        	const objOption = {
                  width : 900
        		, height : 650
        		, popuptype : "modal"	//modal,modaless
        		, title     : sTitle
        		, resize    : true
        		, titlebar  : true
        	};
        	const sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("CST001P02", "work::CST/BFH/CST001P02.xfdl", objArg, sPopupCallBack, objOption);
        };

        this.divForm_divGrd_grdList_oncelldblclick = function(obj,e)
        {
        	const nRow = this.dsList.rowposition;
        	if (nRow == -1)  {
        		this.gfnAlertMsg("msg", "MSG_006");	//선택된 내용이 없습니다.
        		return;
        	}

        	const sTitle = "사전협의등록(팝업)";
        	const objArg   = { bfhdCnsltnNo : this.dsList.getColumn(e.row, "bfhdCnsltnNo") };
        	const objOption = {
                  width : 1150
        		, height : 900
        		, popuptype : "modal"	//modal,modaless
        		, title     : sTitle
        		, resize    : true
        		, titlebar  : true
        	};
        	const sPopupCallBack = "fnPopupCallback";
        	//this.gfnOpenPopup("CST001P04", "work::CST/BFH/CST001P04.xfdl", objArg, sPopupCallBack, objOption);
        	//main화면 직접 연결
        	this.gfnOpenPopup("CST001P04", "work::CST/BFH/CST001M00.xfdl", objArg, sPopupCallBack, objOption);

        };

        // 체크리스트
        this.divGrd_grdList_oncellclick = function(obj,e)
        {
        	const sEditType = obj.getCellProperty("body", e.cell, "edittype")
        	if (sEditType != "button") return;

        	const sBfhdCnsltnNo = this.dsList.getColumn(e.row, "bfhdCnsltnNo");

        	if (this.gfnIsNull(sBfhdCnsltnNo)) {
        		this.gfnAlertMsg("msg", "MSG_011", ["저장 후 자가체크리스트 작성 가능합니다."]);
        		return ;
        	}

        	const sTitle = "디자인 자가체크리스트";
        	const objArg   = { bfhdCnsltnNo : sBfhdCnsltnNo, bReadOnly : true};
        	const objOption = {
                  width : 1100
        		, height : 900
        		, popuptype : "modal"	//modal,modaless
        	//	, autosize  : true
        		, title     : sTitle
        		, resize    : true
        		, titlebar  : true
        	};

        	const sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("CST001P03", "work::CST/BFH/CST001P03.xfdl", objArg, sPopupCallBack, objOption);
        };

        //회사 조회
        this.divSch_divEdtPop00_btnPop_onclick = function(obj,e)
        {
        	const sTitle = "회사 목록";
        	const objOption = {
        		  popuptype: "modal"	//modal,modaless
        		//width, height 지정하지 않으면 popup form size적용
        		, autosize: false
        		, title: sTitle
        		, resize: false
        		, titlebar: true
        	};

        	this.gfnOpenPopup("aplyCoNmPop", "work::COM/crtr/COM100P01.xfdl", {}, (sPopId, sJsonStr) => {

        		if (this.gfnIsNull(sJsonStr)) return false;
        		const oJson = JSON.parse(sJsonStr);

        		this.dsSearch.setColumn(0, "coId", oJson.coId);
        		this.dsSearch.setColumn(0, "coNm", oJson.coNm);

        	}, objOption);
        };

        //회사명 변경
        this.divSch_divEdtPop00_edtCoCd_onchanged = function(obj,e)
        {
        	//회사명 팝업 검색이 아닌 임의로 입력 시 회사코드 초기화
        	this.dsSearch.setColumn(0, "coId", "");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSch.form.staLabel02.addEventHandler("onclick",this.divForm_Div00_sta00_00_01_01_onclick,this);
            this.divSch.form.btnSch.addEventHandler("onclick",this.divSch_btnSch_onclick,this);
            this.divSch.form.divEdtPop00.form.edtCoCd.addEventHandler("onchanged",this.divSch_divEdtPop00_edtCoCd_onchanged,this);
            this.divSch.form.divEdtPop00.form.btnPop.addEventHandler("onclick",this.divSch_divEdtPop00_btnPop_onclick,this);
            this.divGrd.form.grdList.addEventHandler("oncelldblclick",this.divForm_divGrd_grdList_oncelldblclick,this);
            this.divGrd.form.grdList.addEventHandler("oncellclick",this.divGrd_grdList_oncellclick,this);
            this.divGrd.form.btnOpen.addEventHandler("onclick",this.divForm_divGrd_btnGrdAdd_onclick,this);
        };
        this.loadIncludeScript("CST001P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
