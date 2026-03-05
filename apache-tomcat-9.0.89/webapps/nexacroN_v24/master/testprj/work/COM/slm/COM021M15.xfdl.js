(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM021M15");
            this.set_titletext("서비스 만족도/처리시간 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,880);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"listType\" type=\"STRING\" size=\"256\"/><Column id=\"sDate\" type=\"STRING\" size=\"256\"/><Column id=\"eDate\" type=\"STRING\" size=\"256\"/><Column id=\"item1\" type=\"STRING\" size=\"256\"/><Column id=\"item2\" type=\"STRING\" size=\"256\"/><Column id=\"deptId\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoId\" type=\"STRING\" size=\"256\"/><Column id=\"slmIdctId\" type=\"STRING\" size=\"256\"/><Column id=\"indTrgrSe\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"mngIdctNm\" type=\"STRING\" size=\"256\"/><Column id=\"stdTm\" type=\"STRING\" size=\"256\"/><Column id=\"prcsHr\" type=\"STRING\" size=\"256\"/><Column id=\"msrmtVl\" type=\"STRING\" size=\"256\"/><Column id=\"entLabel\" type=\"STRING\" size=\"256\"/><Column id=\"slmSrvcNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstnInfo\" type=\"STRING\" size=\"256\"/><Column id=\"regOrgNm\" type=\"STRING\" size=\"256\"/><Column id=\"reqEmpNm\" type=\"STRING\" size=\"256\"/><Column id=\"regEmpNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntHwrt\" type=\"STRING\" size=\"256\"/><Column id=\"reqDttm\" type=\"STRING\" size=\"256\"/><Column id=\"assEmpNm\" type=\"STRING\" size=\"256\"/><Column id=\"cloDttm\" type=\"STRING\" size=\"256\"/><Column id=\"wsoDptName\" type=\"STRING\" size=\"256\"/><Column id=\"ptnOrgName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","20","20",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("none");
            this.addChild(obj.name, obj);

            obj = new Div("divSch","0","0","100%","17.7%",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan00","20.00","14","440","45",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("1");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03\"/><PanelItem id=\"PanelItem01\" componentid=\"divCal\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","100%","45",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("0");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("40");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"pan00\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("6");
            obj.set_text("신청기간");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panClose","30","151","100%","30",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnSchClose\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSchClose","1251","185","30","30",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_SchClose");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("4");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSch\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSch","570","192","120","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("5");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divCal","1030","75","330","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.set_flexgrow("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","0","0","150","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divCal.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Static("staDash","Calendar00:10","0","10","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divCal.form);
            obj.set_taborder("1");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_Dash");
            this.divForm.form.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","staDash:10","0","150","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divCal.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Div("divGrd","0","divSch:30","100.00%","672",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("none");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","100%","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("11");
            obj.set_text("평가부서(공사부서) > 서비스 > 평가지표");
            obj.set_cssclass("sta_WF_Txt60018");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","44","79","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("13");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTotal\"/><PanelItem id=\"PanelItem01\" componentid=\"staTotal01\"/><PanelItem id=\"PanelItem02\" componentid=\"staTotal02\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn",null,"44","75%","34","0",null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_verticalgap("10");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem03\" componentid=\"btnGrdAdd\"/><PanelItem id=\"PanelItem04\" componentid=\"btnGrdDel\"/><PanelItem id=\"PanelItem05\" componentid=\"btnGrdRegi\"/><PanelItem id=\"PanelItem06\" componentid=\"btnGrdDw\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divPage","0",null,"100.00%","36",null,"0",null,null,"36",null,this.divForm.form.divGrd.form);
            obj.set_taborder("12");
            obj.set_text("Div00");
            obj.set_url("work::COM/util/paging/paging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_visible("false");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdList","0","PanelGrdBtn:10","100.00%",null,null,"divPage:10",null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"신청번호\"/><Cell col=\"1\" text=\"평가지표\"/><Cell col=\"2\" text=\"목표\"/><Cell col=\"3\" text=\"처리시간/만족도\"/><Cell col=\"4\" text=\"실측값\"/><Cell col=\"5\" text=\"신청구분\"/><Cell col=\"6\" text=\"서비스구분\"/><Cell col=\"7\" text=\"위치정보\"/><Cell col=\"8\" text=\"회사명\"/><Cell col=\"9\" text=\"신청자명\"/><Cell col=\"10\" text=\"등록자명\"/><Cell col=\"11\" text=\"신청자명(수기입력)\"/><Cell col=\"12\" text=\"신청일시\"/><Cell col=\"13\" text=\"처리자명\"/><Cell col=\"14\" text=\"완료일자\"/><Cell col=\"15\" text=\"담당공사부서명\"/><Cell col=\"16\" text=\"자회사명\"/></Band><Band id=\"body\"><Cell text=\"bind:aplyNo\" textAlign=\"center\" cssclass=\"CellLink,CellTxtBlue\"/><Cell col=\"1\" text=\"bind:mngIdctNm\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:stdTm\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:prcsHr\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:msrmtVl\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:entLabel\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:slmSrvcNm\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:pstnInfo\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:regOrgNm\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:reqEmpNm\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:regEmpNm\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:aplcntHwrt\" textAlign=\"center\"/><Cell col=\"12\" text=\"bind:reqDttm\" textAlign=\"center\"/><Cell col=\"13\" text=\"bind:assEmpNm\" textAlign=\"center\"/><Cell col=\"14\" text=\"bind:cloDttm\" textAlign=\"center\"/><Cell col=\"15\" text=\"bind:wsoDptName\" textAlign=\"center\"/><Cell col=\"16\" text=\"bind:ptnOrgName\" textAlign=\"center\"/></Band></Format><Format id=\"format3\"><Columns><Column size=\"200\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"신청번호\"/><Cell col=\"1\" text=\"평가지표\"/><Cell col=\"2\" text=\"목표\"/><Cell col=\"3\" text=\"처리시간/만족도\"/><Cell col=\"4\" text=\"실측값\"/><Cell col=\"5\" text=\"신청구분\"/><Cell col=\"6\" text=\"서비스구분\"/><Cell col=\"7\" text=\"위치정보\"/><Cell col=\"8\" text=\"회사명\"/><Cell col=\"9\" text=\"신청자명\"/><Cell col=\"10\" text=\"등록자명\"/><Cell col=\"11\" text=\"신청자명(수기입력)\"/><Cell col=\"12\" text=\"신청일시\"/><Cell col=\"13\" text=\"처리자명\"/><Cell col=\"14\" text=\"완료일자\"/><Cell col=\"15\" text=\"평가대상부서\"/></Band><Band id=\"body\"><Cell text=\"bind:aplyNo\" textAlign=\"center\" cssclass=\"CellLink\"/><Cell col=\"1\" text=\"bind:mngIdctNm\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:stdTm\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:prcsHr\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:msrmtVl\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:entLabel\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:slmSrvcNm\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:pstnInfo\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:regOrgNm\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:reqEmpNm\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:regEmpNm\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:aplcntHwrt\" textAlign=\"center\"/><Cell col=\"12\" text=\"bind:reqDttm\" textAlign=\"center\"/><Cell col=\"13\" text=\"bind:assEmpNm\" textAlign=\"center\"/><Cell col=\"14\" text=\"bind:cloDttm\" textAlign=\"center\"/><Cell col=\"15\" text=\"bind:wsoDptName\" textAlign=\"center\"/></Band></Format><Format id=\"format4\"><Columns><Column size=\"200\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"신청번호\"/><Cell col=\"1\" text=\"평가지표\"/><Cell col=\"2\" text=\"목표\"/><Cell col=\"3\" text=\"처리시간/만족도\"/><Cell col=\"4\" text=\"실측값\"/><Cell col=\"5\" text=\"신청구분\"/><Cell col=\"6\" text=\"서비스구분\"/><Cell col=\"7\" text=\"위치정보\"/><Cell col=\"8\" text=\"회사명\"/><Cell col=\"9\" text=\"신청자명\"/><Cell col=\"10\" text=\"등록자명\"/><Cell col=\"11\" text=\"신청자명(수기입력)\"/><Cell col=\"12\" text=\"신청일시\"/><Cell col=\"13\" text=\"처리자명\"/><Cell col=\"14\" text=\"완료일자\"/><Cell col=\"15\" text=\"평가자회사명\"/><Cell col=\"16\" text=\"담당공사부서명\"/></Band><Band id=\"body\"><Cell text=\"bind:aplyNo\" textAlign=\"center\" cssclass=\"CellLink\"/><Cell col=\"1\" text=\"bind:mngIdctNm\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:stdTm\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:prcsHr\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:msrmtVl\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:entLabel\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:slmSrvcNm\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:pstnInfo\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:regOrgNm\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:reqEmpNm\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:regEmpNm\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:aplcntHwrt\" textAlign=\"center\"/><Cell col=\"12\" text=\"bind:reqDttm\" textAlign=\"center\"/><Cell col=\"13\" text=\"bind:assEmpNm\" textAlign=\"center\"/><Cell col=\"14\" text=\"bind:cloDttm\" textAlign=\"center\"/><Cell col=\"15\" text=\"bind:ptnOrgName\" textAlign=\"center\"/><Cell col=\"16\" text=\"bind:wsoDptName\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","40","22","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("10");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal01","27","40","45","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("9");
            obj.set_text("1000");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","70","40","12","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("8");
            obj.set_text("건");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Combo("cmbGrdList","1230","0","80","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal00","1165","0","65","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("목록수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdAdd","774.00","10","47","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("6");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdRegi","774.00","10","45","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","804.00","10","45","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("7");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDw","774.00","10","124","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("5");
            obj.set_text("다운로드(엑셀)");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("Panel01","94","0","155","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("14");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTotal00\"/><PanelItem id=\"PanelItem01\" componentid=\"cmbGrdList\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.divSch.form.divCal.form
            obj = new Layout("default","",0,0,this.divForm.form.divSch.form.divCal.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Calendar00.set_taborder("0");
                p.Calendar00.set_dateformat("yyyy-MM-dd");
                p.Calendar00.move("0","0","150","40",null,null);

                p.staDash.set_taborder("1");
                p.staDash.set_text("~");
                p.staDash.set_cssclass("sta_WF_Dash");
                p.staDash.move("Calendar00:10","0","10","40",null,null);

                p.Calendar01.set_taborder("2");
                p.Calendar01.set_dateformat("yyyy-MM-dd");
                p.Calendar01.move("staDash:10","0","150","40",null,null);
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
                p.pan00.set_taborder("1");
                p.pan00.set_type("horizontal");
                p.pan00.set_horizontalgap("10");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_flexgrow("1");
                p.pan00.set_minwidth("");
                p.pan00.move("20.00","14","440","45",null,null);

                p.panLabel.set_taborder("0");
                p.panLabel.set_verticalgap("8");
                p.panLabel.set_flexwrap("wrap");
                p.panLabel.set_spacing("0px 0px 10px 0px");
                p.panLabel.set_type("horizontal");
                p.panLabel.set_flexcrossaxisalign("start");
                p.panLabel.set_horizontalgap("40");
                p.panLabel.set_fittocontents("height");
                p.panLabel.set_maxheight("");
                p.panLabel.move("20","14","100%","45",null,null);

                p.staLabel03.set_taborder("6");
                p.staLabel03.set_text("신청기간");
                p.staLabel03.set_cssclass("sta_WF_SchLabel");
                p.staLabel03.set_flexshrink("0");
                p.staLabel03.set_maxwidth("");
                p.staLabel03.move("0","0","100","40",null,null);

                p.panClose.set_taborder("3");
                p.panClose.set_type("vertical");
                p.panClose.set_cssclass("pal_WF_SchLine");
                p.panClose.set_flexcrossaxisalign("end");
                p.panClose.move("30","151","100%","30",null,null);

                p.btnSchClose.set_taborder("2");
                p.btnSchClose.set_cssclass("btn_WF_SchClose");
                p.btnSchClose.move("1251","185","30","30",null,null);

                p.panSchBtn.set_taborder("4");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100%","40",null,null);

                p.btnSch.set_taborder("5");
                p.btnSch.set_text("조회하기");
                p.btnSch.set_cssclass("btn_WF_Search");
                p.btnSch.move("570","192","120","40",null,null);

                p.divCal.set_taborder("7");
                p.divCal.set_text("Div00");
                p.divCal.set_flexgrow("1");
                p.divCal.set_formscrollbartype("none none");
                p.divCal.set_formscrolltype("none");
                p.divCal.move("1030","75","330","40",null,null);
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
                p.Static00.set_taborder("11");
                p.Static00.set_text("평가부서(공사부서) > 서비스 > 평가지표");
                p.Static00.set_cssclass("sta_WF_Txt60018");
                p.Static00.move("0","0","100%","34",null,null);

                p.Panel00.set_taborder("13");
                p.Panel00.set_fittocontents("width");
                p.Panel00.move("0","44","79","34",null,null);

                p.PanelGrdBtn.set_taborder("3");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_fittocontents("height");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.set_flexgrow("1");
                p.PanelGrdBtn.set_verticalgap("10");
                p.PanelGrdBtn.set_flexwrap("wrap");
                p.PanelGrdBtn.move(null,"44","75%","34","0",null);

                p.divPage.set_taborder("12");
                p.divPage.set_text("Div00");
                p.divPage.set_url("work::COM/util/paging/paging.xfdl");
                p.divPage.set_formscrollbartype("none none");
                p.divPage.set_formscrolltype("none");
                p.divPage.set_visible("false");
                p.divPage.set_minheight("36");
                p.divPage.set_maxheight("");
                p.divPage.move("0",null,"100.00%","36",null,"0");

                p.grdList.set_taborder("0");
                p.grdList.set_binddataset("dsList");
                p.grdList.set_autofittype("none");
                p.grdList.move("0","PanelGrdBtn:10","100.00%",null,null,"divPage:10");

                p.staTotal.set_taborder("10");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","40","22","34",null,null);

                p.staTotal01.set_taborder("9");
                p.staTotal01.set_text("1000");
                p.staTotal01.set_cssclass("sta_WF_Total");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.set_fittocontents("width");
                p.staTotal01.move("27","40","45","34",null,null);

                p.staTotal02.set_taborder("8");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.set_fittocontents("width");
                p.staTotal02.move("70","40","12","34",null,null);

                p.cmbGrdList.set_taborder("2");
                p.cmbGrdList.set_visible("false");
                p.cmbGrdList.set_text("10");
                p.cmbGrdList.set_value("");
                p.cmbGrdList.set_index("-1");
                p.cmbGrdList.move("1230","0","80","34",null,null);

                p.staTotal00.set_taborder("1");
                p.staTotal00.set_text("목록수");
                p.staTotal00.set_cssclass("sta_WF_SchLabel");
                p.staTotal00.set_fittocontents("width");
                p.staTotal00.set_visible("false");
                p.staTotal00.move("1165","0","65","34",null,null);

                p.btnGrdAdd.set_taborder("6");
                p.btnGrdAdd.set_text("추가");
                p.btnGrdAdd.set_cssclass("btn_WF_Small");
                p.btnGrdAdd.set_visible("false");
                p.btnGrdAdd.set_fittocontents("width");
                p.btnGrdAdd.move("774.00","10","47","34",null,null);

                p.btnGrdRegi.set_taborder("4");
                p.btnGrdRegi.set_text("등록");
                p.btnGrdRegi.set_cssclass("btn_WF_SmallBlack");
                p.btnGrdRegi.set_visible("false");
                p.btnGrdRegi.set_fittocontents("width");
                p.btnGrdRegi.move("774.00","10","45","34",null,null);

                p.btnGrdDel.set_taborder("7");
                p.btnGrdDel.set_text("삭제");
                p.btnGrdDel.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel.set_visible("false");
                p.btnGrdDel.set_fittocontents("width");
                p.btnGrdDel.move("804.00","10","45","34",null,null);

                p.btnGrdDw.set_taborder("5");
                p.btnGrdDw.set_text("다운로드(엑셀)");
                p.btnGrdDw.set_cssclass("btn_WF_GrdDw");
                p.btnGrdDw.set_visible("true");
                p.btnGrdDw.set_fittocontents("width");
                p.btnGrdDw.move("774.00","10","124","34",null,null);

                p.Panel01.set_taborder("14");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_fittocontents("width");
                p.Panel01.move("94","0","155","34",null,null);
            	}
            );
            obj.set_verticalgap("10");
            obj.set_type("default");
            obj.set_flexwrap("wrap");
            this.divForm.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel01.set_fittocontents("width");

                p.PanelGrdBtn.set_fittocontents("height");
                p.PanelGrdBtn.move(null,"44","75.00%","78","0",null);

                p.grdList.move("0","PanelGrdBtn:10","100.00%",null,null,"divPage:10");
            	}
            );
            obj.set_verticalgap("10");
            obj.set_type("default");
            obj.set_flexwrap("wrap");
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
                p.divSch.move("0","0","100%","17.7%",null,null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("none");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.set_flexgrow("1");
                p.divGrd.move("0","divSch:30","100.00%","672",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("20");
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
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,880,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("서비스 만족도/처리시간 조회");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.set_fittocontents("none");
                p.divForm.set_maxwidth("");
                p.divForm.move("20","20",null,null,"20","20");
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",480,880,this,
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
            obj = new BindItem("item0","divForm.form.divSch.form.divCal.form.Calendar00","value","dsSearch","sDate");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.divSch.form.divCal.form.Calendar01","value","dsSearch","eDate");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","work::COM/util/paging/paging.xfdl");
        };
        
        // User Script
        this.registerScript("COM021M15.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	COM021M15.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/08/08
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/08/08			김완성					최초생성
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
        	this.fnInit();
        	this.cfnSearch();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	this.getSearchTransaction();
        };

        //추가
        this.cfnAdd = function ()
        {

        };

        //삭제
        this.cfnDel = function ()
        {

        };

        //저장
        this.cfnSave = function ()
        {

        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.getSearchTransaction = function()
        {
        	var strSvcId    = "search";
        	var strSvcUrl   = "slm/srvcDgstfnPrcsHrInq.do";
        	var inData      = "dsSearch=dsSearch";
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
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "search" :
        			this.divForm.form.divGrd.form.staTotal01.text = this.dsList.getRowCount();
        			break;
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	var listType = this.getOwnerFrame().listType;
        	var sDate = this.getOwnerFrame().sDate;
        	var eDate = this.getOwnerFrame().eDate;
        	var item1 = this.getOwnerFrame().item1;
        	var item2 = this.getOwnerFrame().item2;
        	var deptId = this.getOwnerFrame().deptId;
        	var cpatcoId = this.getOwnerFrame().cpatcoId;
        	var slmIdctId = this.getOwnerFrame().slmIdctId;

        	this.dsSearch.setColumn(0, "listType", listType);
        	this.dsSearch.setColumn(0, "sDate", sDate);
        	this.dsSearch.setColumn(0, "eDate", eDate);
        	this.dsSearch.setColumn(0, "item1", item1);
        	this.dsSearch.setColumn(0, "item2", item2);
        	this.dsSearch.setColumn(0, "deptId", deptId);
        	this.dsSearch.setColumn(0, "cpatcoId", cpatcoId);
        	this.dsSearch.setColumn(0, "slmIdctId", slmIdctId);

        	if(listType == "1") {
        		this.divForm.form.divGrd.form.grdList.formatid == "default";
        	} else if(listType == "2") {
        		this.dsSearch.setColumn(0, "indTrgrSe", "PTN");
        		this.divForm.form.divGrd.form.grdList.formatid == "default";
        	} else if(listType == "3") {
        		this.dsSearch.setColumn(0, "indTrgrSe", "WSO");
        		this.divForm.form.divGrd.form.grdList.formatid == "format3";
        	} else if(listType == "4") {
        		this.dsSearch.setColumn(0, "indTrgrSe", "PTN");
        		this.divForm.form.divGrd.form.grdList.formatid == "format4";
        	}
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divForm_divGrd_btnGrdDw_onclick = function(obj,e)
        {
        	/*****  현재 그리드 화면을 엑셀로 다운로드 받음  *****/
        	this.exportObj = new ExcelExportObject();
        	var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.divForm.form.divGrd.form.grdList, "Sheet1!A1");
        	this.exportObj.set_exporturl("svcUrl::/XExportImport.do");
        	this.exportObj.exportData();
        	/*****  현재 그리드 화면을 엑셀로 다운로드 받음  *****/
        };

        this.divForm_divGrd_grdList_oncellclick = function(obj,e)
        {
        	if(e.cell == 0) {
        		var sTitle = "";
        		var objArg   = { "aplyNo" : this.dsList.getColumn(e.row, "aplyNo")
        		               };

        		var objOption = {
        			popuptype: "modal"	//modal,modaless
        			//, width: 820
        			//, height: 600
        			, autosize: true
        			, title: sTitle
        			, resize: true
        			, titlebar: true
        		};
        		var sPopupCallBack = "fnPopupCallback";

        		this.gfnOpenPopup("scrnInfoPopup", "work::COM/slm/COM021M16.xfdl", objArg, sPopupCallBack, objOption);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divSch.form.btnSchClose.addEventHandler("onclick",this.divForm_divSch_btnSchClose_onclick,this);
            this.divForm.form.divSch.form.btnSch.addEventHandler("onclick",this.cfnSearch,this);
            this.divForm.form.divGrd.form.grdList.addEventHandler("oncellclick",this.divForm_divGrd_grdList_oncellclick,this);
            this.divForm.form.divGrd.form.btnGrdDw.addEventHandler("onclick",this.divForm_divGrd_btnGrdDw_onclick,this);
        };
        this.loadIncludeScript("COM021M15.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
