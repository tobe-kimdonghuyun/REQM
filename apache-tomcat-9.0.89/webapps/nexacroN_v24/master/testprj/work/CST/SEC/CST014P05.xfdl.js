(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST014P05");
            this.set_titletext("보호구역위해물품조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"scrtyDgadsCmdtyUseBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"scrtyDgadsCmdtyUseEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoNm\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnPstnDtlInptCn\" type=\"STRING\" size=\"256\"/><Column id=\"mngPlcCn\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"scrtyDgadsCmdtyUsePrpsCn\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nowPgNo\" type=\"STRING\" size=\"256\"/><Column id=\"cntPrPg\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMstList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTotCnt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","0",null,null,"0","60",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("default autoindicator");
            this.addChild(obj.name, obj);

            obj = new Div("divSch","0","0","100%","220",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel01","0","0","120","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("0");
            obj.set_text("사용종료일");
            obj.set_cssclass("sta_WF_SchLabel_E");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Calendar("calScrtyDgadsCmdtyUseEndYmd","130.00","14","50%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01","1694.00","398","340","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01\"/><PanelItem id=\"PanelItem01\" componentid=\"calScrtyDgadsCmdtyUseEndYmd\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00","0","0","120","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("3");
            obj.set_text("주관사회사명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtSprvsnCoNm","994","35","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("4");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01_00_00","752.00","54","340","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("5");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtSprvsnCoNm\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","0","0","120","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("6");
            obj.set_text("공사위치");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtCstrnPstnDtlInptCn","1024","31","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("7");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01_00","860","30","340","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("8");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtCstrnPstnDtlInptCn\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_01","0","0","120","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("9");
            obj.set_text("보관장소");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtMngPlcCn","251","81","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("10");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01_00_01","860","30","340","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("11");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtMngPlcCn\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00","0","0","120","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("12");
            obj.set_text("사용목적");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtScrtyDgadsCmdtyUsePrpsCn","610","81","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("13");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01_00_00_00","755.00","65","730","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("14");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtScrtyDgadsCmdtyUsePrpsCn\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel00","863","76","340","1",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("15");
            obj.set_flexgrow("1");
            obj._setContents("");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan02","1694.00","398","300","1",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("16");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents/>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan06","710","135","320","1",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("17");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan07","476","106","320","1",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("18");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","100%","150",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("19");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("50");
            obj.set_fittocontents("height");
            obj.set_tabletemplate("1* / 1* / 1*");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01\"/><PanelItem id=\"PanelItem04\" componentid=\"pan01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"pan01_00_01\"/><PanelItem id=\"PanelItem06\" componentid=\"pan01_00_00_00\"/><PanelItem id=\"PanelItem09\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem03\" componentid=\"pan02\"/><PanelItem id=\"PanelItem08\" componentid=\"pan06\"/><PanelItem id=\"PanelItem07\" componentid=\"pan07\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSch","570","192","112","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("20");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            obj.set_fittocontents("width");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("21");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSch\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","20.00","238","100%","400",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0",null,"34","833",null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal01","staTotal:10","0",null,"34","800",null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","staTotal01:5","0","20","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdMstList","0","44","100%",null,null,"0",null,null,"230",null,this.divForm.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_binddataset("dsMstList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"180\"/><Column size=\"180\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"신청번호\"/><Cell col=\"2\" text=\"신청자\"/><Cell col=\"3\" text=\"작업명\"/><Cell col=\"4\" text=\"공사위치\"/><Cell col=\"5\" text=\"사용시작일\"/><Cell col=\"6\" text=\"사용종료일\"/><Cell col=\"7\" text=\"주관사&#13;&#10;회사명\"/><Cell col=\"8\" text=\"주관사&#13;&#10;회사번호\"/><Cell col=\"9\" text=\"관리책임자(정)\"/><Cell col=\"10\" text=\"관리책입자(부)\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" displaytype=\"text\" textAlign=\"right\"/><Cell col=\"1\" text=\"bind:aplyNo\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:aplcntNm\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:jobNm\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:cstrnPstnDtlInptCn\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:scrtyDgadsCmdtyUseBgngYmd\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" calendardisplayinvalidtype=\"none\"/><Cell col=\"6\" text=\"bind:scrtyDgadsCmdtyUseEndYmd\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplayinvalidtype=\"none\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" text=\"bind:sprvsnCoNm\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:sprvsnCoTelno\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:sprvsnCoMngRbprsn1Nm\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:sprvsnCoMngRbprsn2Nm\" displaytype=\"text\" cssclass=\"CellEnd\" textAlign=\"left\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divPage","0","665",null,"36","0",null,null,null,"36",null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_url("work::COM/util/paging/paging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divPopBtn","0",null,"100%","60",null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk","457.00","30","100","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Yes");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Button("btnClose","457.00","30","100","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_No");
            this.divPopBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.divSch.form
            obj = new Layout("default","",0,0,this.divForm.form.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel01.set_taborder("0");
                p.staLabel01.set_text("사용종료일");
                p.staLabel01.set_cssclass("sta_WF_SchLabel_E");
                p.staLabel01.set_flexshrink("0");
                p.staLabel01.set_minwidth("");
                p.staLabel01.move("0","0","120","40",null,null);

                p.calScrtyDgadsCmdtyUseEndYmd.set_taborder("1");
                p.calScrtyDgadsCmdtyUseEndYmd.set_readonly("true");
                p.calScrtyDgadsCmdtyUseEndYmd.move("130.00","14","50%","40",null,null);

                p.pan01.set_taborder("2");
                p.pan01.set_type("horizontal");
                p.pan01.set_horizontalgap("10");
                p.pan01.set_flexgrow("1");
                p.pan01.set_fittocontents("height");
                p.pan01.set_maxheight("");
                p.pan01.set_minwidth("");
                p.pan01.move("1694.00","398","340","40",null,null);

                p.staLabel01_00_00.set_taborder("3");
                p.staLabel01_00_00.set_text("주관사회사명");
                p.staLabel01_00_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel01_00_00.set_flexshrink("0");
                p.staLabel01_00_00.set_minwidth("");
                p.staLabel01_00_00.move("0","0","120","40",null,null);

                p.edtSprvsnCoNm.set_taborder("4");
                p.edtSprvsnCoNm.move("994","35","100%","40",null,null);

                p.pan01_00_00.set_taborder("5");
                p.pan01_00_00.set_type("horizontal");
                p.pan01_00_00.set_horizontalgap("10");
                p.pan01_00_00.set_flexgrow("1");
                p.pan01_00_00.set_fittocontents("height");
                p.pan01_00_00.set_maxheight("");
                p.pan01_00_00.set_minwidth("");
                p.pan01_00_00.move("752.00","54","340","40",null,null);

                p.staLabel01_00.set_taborder("6");
                p.staLabel01_00.set_text("공사위치");
                p.staLabel01_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel01_00.set_flexshrink("0");
                p.staLabel01_00.set_minwidth("");
                p.staLabel01_00.move("0","0","120","40",null,null);

                p.edtCstrnPstnDtlInptCn.set_taborder("7");
                p.edtCstrnPstnDtlInptCn.move("1024","31","100%","40",null,null);

                p.pan01_00.set_taborder("8");
                p.pan01_00.set_type("horizontal");
                p.pan01_00.set_horizontalgap("10");
                p.pan01_00.set_flexgrow("1");
                p.pan01_00.set_fittocontents("height");
                p.pan01_00.set_maxheight("");
                p.pan01_00.set_minwidth("");
                p.pan01_00.move("860","30","340","40",null,null);

                p.staLabel01_00_01.set_taborder("9");
                p.staLabel01_00_01.set_text("보관장소");
                p.staLabel01_00_01.set_cssclass("sta_WF_SchLabel");
                p.staLabel01_00_01.set_flexshrink("0");
                p.staLabel01_00_01.set_minwidth("");
                p.staLabel01_00_01.move("0","0","120","40",null,null);

                p.edtMngPlcCn.set_taborder("10");
                p.edtMngPlcCn.move("251","81","100%","40",null,null);

                p.pan01_00_01.set_taborder("11");
                p.pan01_00_01.set_type("horizontal");
                p.pan01_00_01.set_horizontalgap("10");
                p.pan01_00_01.set_fittocontents("height");
                p.pan01_00_01.set_flexgrow("1");
                p.pan01_00_01.set_maxheight("");
                p.pan01_00_01.set_minwidth("");
                p.pan01_00_01.move("860","30","340","40",null,null);

                p.staLabel01_00_00_00.set_taborder("12");
                p.staLabel01_00_00_00.set_text("사용목적");
                p.staLabel01_00_00_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel01_00_00_00.set_flexshrink("0");
                p.staLabel01_00_00_00.set_minwidth("");
                p.staLabel01_00_00_00.move("0","0","120","40",null,null);

                p.edtScrtyDgadsCmdtyUsePrpsCn.set_taborder("13");
                p.edtScrtyDgadsCmdtyUsePrpsCn.move("610","81","100%","40",null,null);

                p.pan01_00_00_00.set_taborder("14");
                p.pan01_00_00_00.set_type("horizontal");
                p.pan01_00_00_00.set_horizontalgap("10");
                p.pan01_00_00_00.set_flexgrow("1");
                p.pan01_00_00_00.set_fittocontents("height");
                p.pan01_00_00_00.set_maxheight("");
                p.pan01_00_00_00.set_minwidth("");
                p.pan01_00_00_00.move("755.00","65","730","40",null,null);

                p.Panel00.set_taborder("15");
                p.Panel00.set_flexgrow("1");
                p.Panel00.move("863","76","340","1",null,null);

                p.pan02.set_taborder("16");
                p.pan02.set_type("horizontal");
                p.pan02.set_horizontalgap("10");
                p.pan02.set_flexgrow("1");
                p.pan02.set_fittocontents("height");
                p.pan02.set_minwidth("");
                p.pan02.move("1694.00","398","300","1",null,null);

                p.pan06.set_taborder("17");
                p.pan06.set_flexgrow("1");
                p.pan06.move("710","135","320","1",null,null);

                p.pan07.set_taborder("18");
                p.pan07.set_type("horizontal");
                p.pan07.set_horizontalgap("10");
                p.pan07.set_flexgrow("1");
                p.pan07.set_minwidth("");
                p.pan07.move("476","106","320","1",null,null);

                p.panLabel.set_taborder("19");
                p.panLabel.set_verticalgap("8");
                p.panLabel.set_flexwrap("wrap");
                p.panLabel.set_spacing("0px 0px 10px 0px");
                p.panLabel.set_type("horizontal");
                p.panLabel.set_flexcrossaxisalign("start");
                p.panLabel.set_horizontalgap("50");
                p.panLabel.set_fittocontents("height");
                p.panLabel.set_tabletemplate("1* / 1* / 1*");
                p.panLabel.set_maxheight("");
                p.panLabel.move("20","14","100%","150",null,null);

                p.btnSch.set_taborder("20");
                p.btnSch.set_text("조회하기");
                p.btnSch.set_cssclass("btn_WF_Search");
                p.btnSch.set_fittocontents("width");
                p.btnSch.move("570","192","112","40",null,null);

                p.panSchBtn.set_taborder("21");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100%","40",null,null);
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

                p.Edit00.move("140","80","65%","40",null,null);

                p.Edit01_00.move("841","24","65%","40",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("14px 16px 12px 16px");
            obj.set_flexwrap("wrap");
            this.divForm.form.divSch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divSch.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divSch.form,
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
            //-- Default Layout : this.divForm.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staTotal.set_taborder("0");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","0",null,"34","833",null);

                p.staTotal01.set_taborder("1");
                p.staTotal01.set_text("0");
                p.staTotal01.set_cssclass("sta_WF_Total");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.set_fittocontents("width");
                p.staTotal01.move("staTotal:10","0",null,"34","800",null);

                p.staTotal02.set_taborder("2");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.move("staTotal01:5","0","20","34",null,null);

                p.grdMstList.set_taborder("3");
                p.grdMstList.set_binddataset("dsMstList");
                p.grdMstList.set_minheight("230");
                p.grdMstList.set_maxheight("");
                p.grdMstList.move("0","44","100%",null,null,"0");
            	}
            );
            this.divForm.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divSch.set_taborder("1");
                p.divSch.set_text("Div00");
                p.divSch.set_cssclass("div_WF_SchBg");
                p.divSch.set_formscrollbartype("none none");
                p.divSch.set_fittocontents("height");
                p.divSch.move("0","0","100%","220",null,null);

                p.divGrd.set_taborder("0");
                p.divGrd.set_text("Div00");
                p.divGrd.set_visible("true");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.move("20.00","238","100%","400",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            obj.set_spacing("10px 20px 10px 20px");
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
            obj.set_verticalgap("20");
            obj.set_spacing("10px 20px 10px 20px");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divPage
            obj = new Layout("default","",0,0,this.divPage.form,function(p){});
            this.divPage.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPopBtn.form
            obj = new Layout("default","",0,0,this.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnOk.set_taborder("1");
                p.btnOk.set_text("확인");
                p.btnOk.set_cssclass("btn_WF_Yes");
                p.btnOk.move("457.00","30","100","40",null,null);

                p.btnClose.set_taborder("1");
                p.btnClose.set_text("닫기");
                p.btnClose.set_cssclass("btn_WF_No");
                p.btnClose.move("457.00","30","100","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("20");
            this.divPopBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divPopBtn.form
            obj = new Layout("Layout0","",0,0,this.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("20");
            this.divPopBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",900,670,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("보호구역위해물품조회");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("default autoindicator");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","0",null,null,"0","60");

                p.divPage.set_taborder("1");
                p.divPage.set_text("Div00");
                p.divPage.set_url("work::COM/util/paging/paging.xfdl");
                p.divPage.set_formscrollbartype("none none");
                p.divPage.set_formscrolltype("none");
                p.divPage.set_visible("false");
                p.divPage.set_minheight("36");
                p.divPage.set_maxheight("");
                p.divPage.move("0","665",null,"36","0",null);

                p.divPopBtn.set_taborder("2");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.move("0",null,"100%","60",null,"0");
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_type("default");
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
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.divSch.form.calScrtyDgadsCmdtyUseEndYmd","value","dsSearch","scrtyDgadsCmdtyUseEndYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.divSch.form.edtSprvsnCoNm","value","dsSearch","sprvsnCoNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.divSch.form.edtCstrnPstnDtlInptCn","value","dsSearch","cstrnPstnDtlInptCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.divSch.form.edtMngPlcCn","value","dsSearch","mngPlcCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.divSch.form.edtScrtyDgadsCmdtyUsePrpsCn","value","dsSearch","scrtyDgadsCmdtyUsePrpsCn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","work::COM/util/paging/paging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("CST014P05.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CST014P05.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	CST014P05.xfdl
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

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(svcId, errCd, errMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errCd != 0) { return; }

        	switch(svcId) {
        		case "search" :
        			this.divForm.form.divGrd.form.staTotal01.text = this.dsMstList.getRowCount();
        			this.divForm.form.divGrd.form.resetScroll();

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
        	this.dsSearch.setColumn(0, "scrtyDgadsCmdtyUseBgngYmd", "20241001");
        	this.dsSearch.setColumn(0, "scrtyDgadsCmdtyUseEndYmd", this.fvCurDate);
        	this.dsSearch.setColumn(0, "type", "con"); // 보관목록
        	this.dsSearch.setColumn(0, "cntPrPg", 10); // 페이지당목록건수

        	this.cfnSetGrdPrztInfo();
        	this.fnPagingInit();

        	this.resetScroll();
        }

        this.fnPagingInit = function (nCurPag=0, nTotalCnt=0, nPageCnt=10, nListCnt=10) {
        	if (nTotalCnt > nPageCnt) this.divPage.visible = true;
        	this.divPage.form.initPages(nCurPag, nTotalCnt, nPageCnt, nListCnt, "fnPgCallback");
        }

        this.fnSendData = function () {
        	// let arrData = [];
        	let rtnValue = {};
        	const oDs = this.dsMstList;
        	for (let i=0; i<oDs.getColCount(); i++) {
        		rtnValue[oDs.getColumnInfo(i).id] = new String(oDs.getColumn(oDs.rowposition, oDs.getColumnInfo(i).id));
        	// 	arrData.push(rtnValue);
        	}

        	this.gfnClosePopup(rtnValue);
        }
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/

        this.divSch_btnSch_onclick = function(obj,e)
        {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "scrtyDgadsCmdtyUseEndYmd"))) {
        		this.gfnAlertMsg("msg", "MSG_009", ["사용종료일"]); /// {0} 을/를 입력해 주세요.
        		return false;
        	}

        	this.fnSearch();
        };

        this.divForm_divGrd_grdMstList_oncelldblclick = function(obj,e)
        {
        	this.fnSendData();
        };

        this.divForm_divPopBtn_btnOk_onclick = function(obj,e)
        {
        	if (this.dsMstList.getRowCount() == 0 || this.dsMstList.rowposition == -1) {
        		this.gfnAlertMsg("msg", "MSG_011", ["선택된 내역이 존재하지 않습니다."]);
        		return;
        	}

        	this.fnSendData();
        };

        this.divForm_divPopBtn_btnClose_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divSch.form.btnSch.addEventHandler("onclick",this.divSch_btnSch_onclick,this);
            this.divForm.form.divGrd.form.grdMstList.addEventHandler("oncelldblclick",this.divForm_divGrd_grdMstList_oncelldblclick,this);
            this.divPopBtn.form.btnOk.addEventHandler("onclick",this.divForm_divPopBtn_btnOk_onclick,this);
            this.divPopBtn.form.btnClose.addEventHandler("onclick",this.divForm_divPopBtn_btnClose_onclick,this);
        };
        this.loadIncludeScript("CST014P05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
