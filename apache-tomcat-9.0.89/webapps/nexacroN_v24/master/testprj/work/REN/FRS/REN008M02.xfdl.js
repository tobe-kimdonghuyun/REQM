(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("REN008M02");
            this.set_titletext("임차의향서 접수목록(처리자)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1420,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"hireLoiNo\" type=\"STRING\" size=\"256\"/><Column id=\"rcptNo\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyNm\" type=\"STRING\" size=\"256\"/><Column id=\"bldgNm\" type=\"STRING\" size=\"256\"/><Column id=\"rentPrd\" type=\"STRING\" size=\"256\"/><Column id=\"rtfeYnNm\" type=\"STRING\" size=\"256\"/><Column id=\"mncoYnNm\" type=\"STRING\" size=\"256\"/><Column id=\"utltYnNm\" type=\"STRING\" size=\"256\"/><Column id=\"sbmsnDt\" type=\"STRING\" size=\"256\"/><Column id=\"prgrsSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrsSttsNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"currentPageNo\" type=\"STRING\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"STRING\" size=\"256\"/><Column id=\"pLoiSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"pRcptNo\" type=\"STRING\" size=\"256\"/><Column id=\"pBzentyNm\" type=\"STRING\" size=\"256\"/><Column id=\"pBldgCd\" type=\"STRING\" size=\"256\"/><Column id=\"pBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"pEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"pRmnmNo\" type=\"STRING\" size=\"256\"/><Column id=\"pSttsCd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"recordCountPerPage\">10</Col><Col id=\"currentPageNo\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("<ColumnInfo><Column id=\"totalRecordCount\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboBldgCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboPerPageCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboSttsCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divSch","0","70",null,"206","30",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","96.98%","108",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("0");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("50");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem05\" componentid=\"panRcptNo\"/><PanelItem id=\"PanelItem02\" componentid=\"panBzentyNm\"/><PanelItem id=\"PanelItem06\" componentid=\"panBldgCd\"/><PanelItem id=\"PanelItem04\" componentid=\"panRmnmNo\"/><PanelItem id=\"PanelItem01\" componentid=\"panSttsCd\"/><PanelItem id=\"PanelItem03\" componentid=\"panYmd\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panRmnmNo","1694.00","398","360","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("18");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staRmnmNo\"/><PanelItem id=\"PanelItem00\" componentid=\"edtRmnmNo\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panClose","30","151","100%","30",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnSchClose\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Button("btnSchClose","1251","185","30","30",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_SchClose");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("8");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSch\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Button("btnSch","570","192","112","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("10");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panYmd","1694.00","398","360","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("15");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staYmd\"/><PanelItem id=\"PanelItem02\" componentid=\"divCal\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staYmd","0","0","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("13");
            obj.set_text("제출일자");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Div("divCal","20.00","14","320","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("14");
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
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Panel("panSttsCd","1694.00","398","360","45",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("9");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSttsCd\"/><PanelItem id=\"PanelItem03\" componentid=\"cboSttsCd\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staSttsCd","0","0","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("16");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Combo("cboSttsCd","146","80","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsCboSttsCd");
            obj.set_datacolumn("cdNm");
            obj.set_codecolumn("cdId");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panBldgCd","1694.00","398","360","45",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("12");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staBldgCd\"/><PanelItem id=\"PanelItem03\" componentid=\"cboBldgCd\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staBldgCd","0","0","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("11");
            obj.set_text("건물명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
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

            obj = new Static("staRmnmNo","0","0","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("17");
            obj.set_text("호실번호");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Edit("edtRmnmNo","841","24","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("4");
            obj.set_displaynulltext("호실번호 입력");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staBzentyNm","0","0","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("19");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Edit("edtBzentyNm","841","24","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("2");
            obj.set_flexgrow("0");
            obj.set_displaynulltext("업체명 입력");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panBzentyNm","1694.00","398","360","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("20");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staBzentyNm\"/><PanelItem id=\"PanelItem02\" componentid=\"edtBzentyNm\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staRcptNo","0","0","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("21");
            obj.set_text("접수번호");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Edit("edtRcptNo","841","24","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("접수번호 입력");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panRcptNo","1694.00","398","360","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("22");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staRcptNo\"/><PanelItem id=\"PanelItem00\" componentid=\"edtRcptNo\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","0","divSch:30",null,null,"30","25",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Div("divPage","0","637","100.00%","36",null,null,null,null,"36",null,this.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_url("work::COM/util/paging/paging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divGrd.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn",null,"0","450","34","0",null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("5");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("width");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"staTotal00\"/><PanelItem id=\"PanelItem01\" componentid=\"grdListCnt\"/></Contents>");
            this.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdList","0","PanelGrdBtn:10","100.00%",null,null,"divPage:10",null,null,null,null,this.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"297\"/><Column size=\"297\"/><Column size=\"217\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"접수번호\"/><Cell col=\"1\" text=\"업체명\"/><Cell col=\"2\" text=\"건물명(호실번호)\"/><Cell col=\"3\" text=\"임차기간\"/><Cell col=\"4\" text=\"임대료\"/><Cell col=\"5\" text=\"관리비\"/><Cell col=\"6\" text=\"유틸리티\"/><Cell col=\"7\" text=\"제출일자\"/><Cell col=\"8\" text=\"상태\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" text=\"bind:rcptNo\"/><Cell col=\"1\" text=\"bind:bzentyNm\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:bldgNm\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:rentPrd\" textAlign=\"center\" displaytype=\"normal\" maskedittype=\"string\"/><Cell col=\"4\" text=\"bind:rtfeYnNm\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:mncoYnNm\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:utltYnNm\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:sbmsnDt\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"####-##-##\" maskedittype=\"string\" maskeditmaskchar=\" \"/><Cell col=\"8\" text=\"bind:prgrsSttsNm\" textAlign=\"left\"/></Band></Format></Formats>");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","30","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_textAlign("left");
            this.divGrd.addChild(obj.name, obj);

            obj = new Combo("grdListCnt","1230","0","80","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsCboPerPageCnt");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("");
            obj.set_value("50");
            obj.set_index("-1");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal00","1165","0","54","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("목록수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal01","staTotal:0","0","40","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("6");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_textAlign("right");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","staTotal01:0","0","30","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("7");
            obj.set_text("건");
            obj.set_usedecorate("true");
            obj.set_textAlign("left");
            this.divGrd.addChild(obj.name, obj);
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

                p.calEndYmd.set_taborder("7");
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
                p.panLabel.set_maxheight("");
                p.panLabel.move("20","14","96.98%","108",null,null);

                p.panRmnmNo.set_taborder("18");
                p.panRmnmNo.set_type("horizontal");
                p.panRmnmNo.set_horizontalgap("10");
                p.panRmnmNo.set_fittocontents("height");
                p.panRmnmNo.set_flexgrow("1");
                p.panRmnmNo.set_minwidth("");
                p.panRmnmNo.move("1694.00","398","360","40",null,null);

                p.panClose.set_taborder("7");
                p.panClose.set_type("vertical");
                p.panClose.set_cssclass("pal_WF_SchLine");
                p.panClose.set_flexcrossaxisalign("end");
                p.panClose.move("30","151","100%","30",null,null);

                p.btnSchClose.set_taborder("6");
                p.btnSchClose.set_cssclass("btn_WF_SchClose");
                p.btnSchClose.move("1251","185","30","30",null,null);

                p.panSchBtn.set_taborder("8");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100%","40",null,null);

                p.btnSch.set_taborder("10");
                p.btnSch.set_text("조회하기");
                p.btnSch.set_cssclass("btn_WF_Search");
                p.btnSch.move("570","192","112","40",null,null);

                p.panYmd.set_taborder("15");
                p.panYmd.set_type("horizontal");
                p.panYmd.set_horizontalgap("10");
                p.panYmd.set_flexgrow("1");
                p.panYmd.set_minwidth("");
                p.panYmd.move("1694.00","398","360","40",null,null);

                p.staYmd.set_taborder("13");
                p.staYmd.set_text("제출일자");
                p.staYmd.set_cssclass("sta_WF_SchLabel");
                p.staYmd.set_flexshrink("0");
                p.staYmd.set_maxwidth("");
                p.staYmd.move("0","0","100","40",null,null);

                p.divCal.set_taborder("14");
                p.divCal.set_text("Div00");
                p.divCal.set_flexgrow("1");
                p.divCal.set_formscrollbartype("none none");
                p.divCal.set_formscrolltype("none");
                p.divCal.move("20.00","14","320","40",null,null);

                p.panSttsCd.set_taborder("9");
                p.panSttsCd.set_type("horizontal");
                p.panSttsCd.set_horizontalgap("10");
                p.panSttsCd.set_flexgrow("1");
                p.panSttsCd.set_minwidth("");
                p.panSttsCd.move("1694.00","398","360","45",null,null);

                p.staSttsCd.set_taborder("16");
                p.staSttsCd.set_text("상태");
                p.staSttsCd.set_cssclass("sta_WF_SchLabel");
                p.staSttsCd.set_flexshrink("0");
                p.staSttsCd.set_maxwidth("");
                p.staSttsCd.move("0","0","100","40",null,null);

                p.cboSttsCd.set_taborder("5");
                p.cboSttsCd.set_innerdataset("dsCboSttsCd");
                p.cboSttsCd.set_datacolumn("cdNm");
                p.cboSttsCd.set_codecolumn("cdId");
                p.cboSttsCd.set_text("전체");
                p.cboSttsCd.set_value("");
                p.cboSttsCd.set_index("-1");
                p.cboSttsCd.move("146","80","100%","40",null,null);

                p.panBldgCd.set_taborder("12");
                p.panBldgCd.set_type("horizontal");
                p.panBldgCd.set_horizontalgap("10");
                p.panBldgCd.set_fittocontents("height");
                p.panBldgCd.set_flexgrow("1");
                p.panBldgCd.set_minwidth("");
                p.panBldgCd.move("1694.00","398","360","45",null,null);

                p.staBldgCd.set_taborder("11");
                p.staBldgCd.set_text("건물명");
                p.staBldgCd.set_cssclass("sta_WF_SchLabel");
                p.staBldgCd.set_flexshrink("0");
                p.staBldgCd.set_maxwidth("");
                p.staBldgCd.move("0","0","100","40",null,null);

                p.cboBldgCd.set_taborder("3");
                p.cboBldgCd.set_innerdataset("dsCboBldgCd");
                p.cboBldgCd.set_codecolumn("cdId");
                p.cboBldgCd.set_datacolumn("cdNm");
                p.cboBldgCd.set_text("전체");
                p.cboBldgCd.set_value("");
                p.cboBldgCd.set_index("-1");
                p.cboBldgCd.move("823","20","100%","40",null,null);

                p.staRmnmNo.set_taborder("17");
                p.staRmnmNo.set_text("호실번호");
                p.staRmnmNo.set_cssclass("sta_WF_SchLabel");
                p.staRmnmNo.set_flexshrink("0");
                p.staRmnmNo.set_maxwidth("");
                p.staRmnmNo.move("0","0","100","40",null,null);

                p.edtRmnmNo.set_taborder("4");
                p.edtRmnmNo.set_displaynulltext("호실번호 입력");
                p.edtRmnmNo.move("841","24","100%","40",null,null);

                p.staBzentyNm.set_taborder("19");
                p.staBzentyNm.set_text("업체명");
                p.staBzentyNm.set_cssclass("sta_WF_SchLabel");
                p.staBzentyNm.set_flexshrink("0");
                p.staBzentyNm.set_maxwidth("");
                p.staBzentyNm.move("0","0","100","40",null,null);

                p.edtBzentyNm.set_taborder("2");
                p.edtBzentyNm.set_flexgrow("0");
                p.edtBzentyNm.set_displaynulltext("업체명 입력");
                p.edtBzentyNm.move("841","24","100%","40",null,null);

                p.panBzentyNm.set_taborder("20");
                p.panBzentyNm.set_type("horizontal");
                p.panBzentyNm.set_horizontalgap("10");
                p.panBzentyNm.set_flexgrow("1");
                p.panBzentyNm.set_fittocontents("height");
                p.panBzentyNm.set_maxheight("");
                p.panBzentyNm.set_minwidth("");
                p.panBzentyNm.move("1694.00","398","360","40",null,null);

                p.staRcptNo.set_taborder("21");
                p.staRcptNo.set_text("접수번호");
                p.staRcptNo.set_cssclass("sta_WF_SchLabel");
                p.staRcptNo.set_flexshrink("0");
                p.staRcptNo.set_maxwidth("");
                p.staRcptNo.move("0","0","100","40",null,null);

                p.edtRcptNo.set_taborder("1");
                p.edtRcptNo.set_displaynulltext("접수번호 입력");
                p.edtRcptNo.move("841","24","100%","40",null,null);

                p.panRcptNo.set_taborder("22");
                p.panRcptNo.set_type("horizontal");
                p.panRcptNo.set_horizontalgap("10");
                p.panRcptNo.set_fittocontents("height");
                p.panRcptNo.set_flexgrow("1");
                p.panRcptNo.set_minwidth("");
                p.panRcptNo.move("1694.00","398","360","40",null,null);
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
            obj.set_verticalgap("20");
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            this.divSch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divGrd.form.divPage
            obj = new Layout("default","",0,0,this.divGrd.form.divPage.form,function(p){});
            this.divGrd.form.divPage.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrd.form
            obj = new Layout("default","",0,0,this.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divPage.set_taborder("1");
                p.divPage.set_text("Div00");
                p.divPage.set_url("work::COM/util/paging/paging.xfdl");
                p.divPage.set_formscrollbartype("none none");
                p.divPage.set_formscrolltype("none");
                p.divPage.set_minheight("36");
                p.divPage.set_maxheight("");
                p.divPage.move("0","637","100.00%","36",null,null);

                p.PanelGrdBtn.set_taborder("5");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_fittocontents("width");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.move(null,"0","450","34","0",null);

                p.grdList.set_taborder("0");
                p.grdList.set_binddataset("dsList");
                p.grdList.set_autofittype("none");
                p.grdList.move("0","PanelGrdBtn:10","100.00%",null,null,"divPage:10");

                p.staTotal.set_taborder("2");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_textAlign("left");
                p.staTotal.move("0","0","30","34",null,null);

                p.grdListCnt.set_taborder("4");
                p.grdListCnt.set_innerdataset("dsCboPerPageCnt");
                p.grdListCnt.set_codecolumn("cdId");
                p.grdListCnt.set_datacolumn("cdNm");
                p.grdListCnt.set_text("");
                p.grdListCnt.set_value("50");
                p.grdListCnt.set_index("-1");
                p.grdListCnt.move("1230","0","80","34",null,null);

                p.staTotal00.set_taborder("3");
                p.staTotal00.set_text("목록수");
                p.staTotal00.set_cssclass("sta_WF_SchLabel");
                p.staTotal00.set_fittocontents("width");
                p.staTotal00.move("1165","0","54","34",null,null);

                p.staTotal01.set_taborder("6");
                p.staTotal01.set_text("0");
                p.staTotal01.set_cssclass("sta_WF_Total");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.set_fittocontents("width");
                p.staTotal01.set_textAlign("right");
                p.staTotal01.move("staTotal:0","0","40","34",null,null);

                p.staTotal02.set_taborder("7");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.set_textAlign("left");
                p.staTotal02.move("staTotal01:0","0","30","34",null,null);
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
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1420,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("임차의향서 접수목록(처리자)");

                p.divTitle.set_taborder("2");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);

                p.divSch.set_taborder("0");
                p.divSch.set_text("Div00");
                p.divSch.set_cssclass("div_WF_SchBg");
                p.divSch.set_formscrollbartype("none none");
                p.divSch.set_formscrolltype("none");
                p.divSch.set_fittocontents("height");
                p.divSch.move("0","70",null,"206","30",null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","divSch:30",null,null,"30","25");
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

                p.divGrd.move("20","divSch:30",null,null,"20","25");

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

            obj = new BindItem("item3","divGrd.form.staTotal01","text","dsPage","totalRecordCount");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divGrd.form.grdListCnt","value","dsSearch","recordCountPerPage");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Edit01_00","value","dsSearch","pRcptNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Edit01_00_00","value","dsSearch","pBzentyNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","cboPstnCd","value","dsSearch","pPstnCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","cboPstnCd00","value","dsSearch","pSptIdntyCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divCal.form.Calendar01","value","dsSearch","pBgngYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divCal.form.Calendar02","value","dsSearch","pEndYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSch.form.divCal.form.calBgngYmd","value","dsSearch","pBgngYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSch.form.divCal.form.calEndYmd","value","dsSearch","pEndYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtRcptNo","value","dsSearch","pRcptNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edtBzentyNm","value","dsSearch","pBzentyNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSch.form.edtRcptNo","value","dsSearch","pRcptNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divSch.form.edtBzentyNm","value","dsSearch","pBzentyNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divSch.form.edtRmnmNo","value","dsSearch","pRmnmNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divSch.form.cboSttsCd","value","dsSearch","pSttsCd");
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
        this.addIncludeScript("REN008M02.xfdl","xjs::TaskCom.xjs");
        this.registerScript("REN008M02.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	REN008M02.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/10/28
        *  @Desction    임차의향서 접수목록(처리자)
        ******************** 소스 수정 이력 ***********************************************
        * Date			Modifier		Description
        *******************************************************************************
        * 2024/10/28	이루온			최초생성
        *******************************************************************************
        */

        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;  // 업무공통
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

        this.form_onkeyup = function(obj,e)
        {
        	if (e.keycode==13 && e.fromobject.id != "grdList") {
        		if (e.fromobject.taborder >= 1 && e.fromobject.taborder <= 4) {
        			this.divSch.form.btnSch.click();
        		}
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	this.dsSearch.setColumn(0, "pLoiSeCd"	, "A");		//의향서구분코드

        	this.cfnComCdLoad({dsCboPerPageCnt:"REN9000:S", dsCboBldgCd:"RENT_ASN_BLDG:A", dsCboSttsCd:"HIRE_ASN_STTS_CD:A"});

        	var vTdate 	= this.gfn_getDate("date");
        	var vFdate	= this.gfn_addMonth(vTdate, -1);
        	this.divSch.form.divCal.form.calBgngYmd.set_value(vFdate);
        	this.divSch.form.divCal.form.calEndYmd.set_value(vTdate);
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (fnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //검색 조회
        this.cfnSearch = function(page)
        {
        	if (this.dsSearch.getColumn(0, "pSptIdntyBgngYmd") > this.dsSearch.getColumn(0, "pSptIdntyEndYmd")) {
        		this.gfnAlertMsg("msg", "MSG_012", ["제출"]);		//{0} 시작일자가 종료일자보다 큽니다.
        		return;
        	}

        	//그리드 한 페이지에 게시되는 데이터건수
        	this.dsSearch.setColumn(0, "currentPageNo", page);

        	this.getSearchTransaction();
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //목록 조회 트랙젝션
        this.getSearchTransaction = function() {

        	this.dsList.clear();

        	var strSvcId    = "search";
        	var strSvcUrl   = "ren/frs/selectHireLoiRcptList.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsList=dsList dsPage=dsPage";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
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
        		//콤보조회
        		case "_cfnComCdLoad_":
        			this.dsCboSttsCd.filter("cdNm == '전체' || String(cdVl02).indexOf('REN008M02') >= 0");

        			this.divSch.form.cboBldgCd.set_index(0);	// 건물
        			this.divSch.form.cboSttsCd.set_index(0);	// 상태
        			this.divGrd.form.grdListCnt.set_index(1);	// 목록수

        			break;

        		//목록조회
        		case "search":
        			// 조회 한 후 페이징을 셋팅 하기 위한 초기 함수
         			this.divGrd.form.divPage.form.initPages(this.dsPage.getColumn(0, "currentPageNo"), this.dsPage.getColumn(0, "totalRecordCount"), this.dsPage.getColumn(0, "recordCountPerPage"), this.dsPage.getColumn(0, "pageSize"), "pagingCallback");

        			break;
        	}
        };

        //페이징 버튼 콜백함수
        this.pagingCallback = function(page) {
        	this.cfnSearch(page);
        };

        //팝업에 관한 콜백 함수
        this.fnPopupCallback = function(sPopupId, sRtn){};

        /*******************************************************************************************************************************
         * 조회 버튼 클릭시
        *******************************************************************************************************************************/
        this.divSch_btnSch_onclick = function(obj,e)
        {
        	this.fnSearch(1);
        };

        /*******************************************************************************************************************************
         * 조회건수 변경시
        *******************************************************************************************************************************/
        this.divGrd_grdListCnt_onitemchanged = function(obj,e)
        {
        	this.fnSearch(1);
        };


        /*******************************************************************************************************************************
         * 목록 그리드 클릭시
        *******************************************************************************************************************************/
        this.divGrd_grdList_oncellclick = function(obj,e)
        {
        	var hireLoiNo = this.dsList.getColumn(e.row, "hireLoiNo");

        	if (this.objApp.screenid == "Desktop_screen") {
        		/*****  MDI 에 추가하는 페이지 오픈을 위한 코드 *****/
        		var param = {
        			"status" : "detail"
        			,"hireLoiNo" : hireLoiNo
        		};

        		var sMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        		var sMenuUrl = 'work::REN/FRS/REN008M03.xfdl';
        		var actNm = '상세';

        		this.gfnPageOpen(sMenuId, sMenuUrl, actNm, param);
        		/*****  MDI 에 추가하는 페이지 오픈을 위한 코드 *****/
        	} else {
        		var sTitle = "상세";
        		var objArg   = {
        			"status" : "detail"
        			,"hireLoiNo" : hireLoiNo
        		};

        		var objOption = {
        			popuptype: "modal"	//modal,modaless
        			, autosize: true
        			, title: sTitle
        			, resize: true
        			, titlebar: true
        		};
        		var sPopupCallBack = "fnPopupCallback";

        		this.gfnOpenPopup("REN002M01", "work::REN/FRS/REN008M03.xfdl", objArg, sPopupCallBack, objOption);
        	}
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onkeyup",this.form_onkeyup,this);
            this.divSch.form.btnSchClose.addEventHandler("onclick",this.divForm_divSch_btnSchClose_onclick,this);
            this.divSch.form.btnSch.addEventHandler("onclick",this.divSch_btnSch_onclick,this);
            this.divSch.form.staYmd.addEventHandler("onclick",this.divForm_Div00_sta00_00_01_01_onclick,this);
            this.divSch.form.staSttsCd.addEventHandler("onclick",this.divForm_Div00_sta00_00_01_01_onclick,this);
            this.divGrd.form.grdList.addEventHandler("oncelldblclick",this.divGrd_grdList_oncellclick,this);
            this.divGrd.form.grdListCnt.addEventHandler("onitemchanged",this.divGrd_grdListCnt_onitemchanged,this);
        };
        this.loadIncludeScript("REN008M02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
