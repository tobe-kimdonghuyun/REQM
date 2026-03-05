(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("REN041P01");
            this.set_titletext("계약공간정보 선택(팝업)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,660);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"currentPageNo\" type=\"STRING\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"pRmnmNo\" type=\"STRING\" size=\"256\"/><Column id=\"pRentSpceNm\" type=\"STRING\" size=\"256\"/><Column id=\"pBldgCd\" type=\"STRING\" size=\"256\"/><Column id=\"pBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"pEndYmd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"recordCountPerPage\">99999999</Col><Col id=\"currentPageNo\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboBldgCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"chc\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"0\"/><Column id=\"polSpceId\" type=\"STRING\" size=\"0\"/><Column id=\"bldgCd\" type=\"STRING\" size=\"0\"/><Column id=\"bldgNm\" type=\"STRING\" size=\"256\"/><Column id=\"rentUsgGrpCd\" type=\"STRING\" size=\"0\"/><Column id=\"rentUsgCd\" type=\"STRING\" size=\"0\"/><Column id=\"rentUsgNm\" type=\"STRING\" size=\"256\"/><Column id=\"rmnmNo\" type=\"STRING\" size=\"0\"/><Column id=\"rentSpceAr\" type=\"STRING\" size=\"0\"/><Column id=\"ctrtBgngYmd\" type=\"STRING\" size=\"0\"/><Column id=\"ctrtEndYmd\" type=\"STRING\" size=\"0\"/><Column id=\"ctrtPrd\" type=\"STRING\" size=\"256\"/><Column id=\"userCnt\" type=\"STRING\" size=\"0\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","0","100%","100%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("divSch","0","0","100%","330",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            obj.set_cssclass("div_WF_SchBg");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panBzentyNm00","1694.00","398","300","45",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("17");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staBzentyNm00\"/><PanelItem id=\"PanelItem00\" componentid=\"edtRentSpceNm\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","100%","180",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("0");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("50");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"panRcptNo\"/><PanelItem id=\"PanelItem04\" componentid=\"panBzentyNm\"/><PanelItem id=\"PanelItem06\" componentid=\"panBzentyNm00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBldgCd\"/><PanelItem id=\"PanelItem05\" componentid=\"panYmd\"/><PanelItem id=\"PanelItem02\" componentid=\"panSchBtn\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staBzentyNm","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("4");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_SchLabel_E");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtBzentyNm","841","24","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("5");
            obj.set_flexgrow("1");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staRcptNo","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("9");
            obj.set_text("호실번호");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panRcptNo","90","13","300","27",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("11");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRcptNo\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRmnmNo\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtRmnmNo","200","20","82.80%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("10");
            obj.set_displaynulltext("호실번호 입력");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panBzentyNm","1694.00","398","300","45",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("1");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staBzentyNm\"/><PanelItem id=\"PanelItem00\" componentid=\"edtBzentyNm\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panBldgCd","1694.00","398","300","45",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("8");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staBldgCd\"/><PanelItem id=\"PanelItem00\" componentid=\"cboBldgCd\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("2");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSch\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSch","570","192","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("3");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_Search");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staBldgCd","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("6");
            obj.set_text("건물명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cboBldgCd","841","24","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("7");
            obj.set_flexgrow("1");
            obj.set_innerdataset("dsCboBldgCd");
            obj.set_datacolumn("cdNm");
            obj.set_codecolumn("cdId");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staYmd","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("12");
            obj.set_text("계약일자");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divCal","20.00","14","320","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("13");
            obj.set_text("Div00");
            obj.set_flexgrow("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Calendar("calBgngYmd","180.00","0","145","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divCal.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Static("staDash","160.00","0","10","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divCal.form);
            obj.set_taborder("0");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_Dash");
            this.divForm.form.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Calendar("calEndYmd","0","0","145","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divCal.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Panel("panYmd","1694.00","398","360","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("14");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staYmd\"/><PanelItem id=\"PanelItem02\" componentid=\"divCal\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staBzentyNm00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("15");
            obj.set_text("임대공간명");
            obj.set_cssclass("sta_WF_SchLabel_E");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtRentSpceNm","841","24","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("16");
            obj.set_flexgrow("1");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","0","divSch:30","100.00%","100%",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","0","100.00%","280",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"200\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"건물명\"/><Cell col=\"2\" text=\"호실\"/><Cell col=\"3\" text=\"사용용도\"/><Cell col=\"4\" text=\"면적\"/><Cell col=\"5\" text=\"계약기간\"/></Band><Band id=\"body\"><Cell text=\"bind:chc\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"1\" text=\"bind:bldgNm\"/><Cell col=\"2\" text=\"bind:rmnmNo\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:rentUsgNm\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:rentSpceAr\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:ctrtPrd\" textAlign=\"center\"/></Band></Format></Formats>");
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

            obj = new Button("btnCfmtn","420.00","550","100","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Yes");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.divSch.form.divCal.form
            obj = new Layout("default","",0,0,this.divForm.form.divSch.form.divCal.form,
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

                p.calEndYmd.set_taborder("2");
                p.calEndYmd.set_dateformat("yyyy-MM-dd");
                p.calEndYmd.move("0","0","145","40",null,null);
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
                p.panBzentyNm00.set_taborder("17");
                p.panBzentyNm00.set_type("horizontal");
                p.panBzentyNm00.set_horizontalgap("10");
                p.panBzentyNm00.set_fittocontents("height");
                p.panBzentyNm00.set_flexgrow("1");
                p.panBzentyNm00.set_minwidth("");
                p.panBzentyNm00.move("1694.00","398","300","45",null,null);

                p.panLabel.set_taborder("0");
                p.panLabel.set_verticalgap("8");
                p.panLabel.set_flexwrap("wrap");
                p.panLabel.set_spacing("0px 0px 10px 0px");
                p.panLabel.set_type("horizontal");
                p.panLabel.set_flexcrossaxisalign("start");
                p.panLabel.set_horizontalgap("50");
                p.panLabel.set_fittocontents("height");
                p.panLabel.set_maxheight("");
                p.panLabel.move("20","14","100%","180",null,null);

                p.staBzentyNm.set_taborder("4");
                p.staBzentyNm.set_text("업체명");
                p.staBzentyNm.set_cssclass("sta_WF_SchLabel_E");
                p.staBzentyNm.set_flexshrink("0");
                p.staBzentyNm.set_maxwidth("");
                p.staBzentyNm.move("0","0","100","40",null,null);

                p.edtBzentyNm.set_taborder("5");
                p.edtBzentyNm.set_flexgrow("1");
                p.edtBzentyNm.set_enable("true");
                p.edtBzentyNm.set_readonly("true");
                p.edtBzentyNm.move("841","24","100%","40",null,null);

                p.staRcptNo.set_taborder("9");
                p.staRcptNo.set_text("호실번호");
                p.staRcptNo.set_cssclass("sta_WF_SchLabel");
                p.staRcptNo.set_flexshrink("0");
                p.staRcptNo.set_maxwidth("");
                p.staRcptNo.move("0","0","100","40",null,null);

                p.panRcptNo.set_taborder("11");
                p.panRcptNo.set_type("horizontal");
                p.panRcptNo.set_horizontalgap("10");
                p.panRcptNo.set_fittocontents("height");
                p.panRcptNo.set_flexgrow("1");
                p.panRcptNo.set_minwidth("");
                p.panRcptNo.move("90","13","300","27",null,null);

                p.edtRmnmNo.set_taborder("10");
                p.edtRmnmNo.set_displaynulltext("호실번호 입력");
                p.edtRmnmNo.move("200","20","82.80%","40",null,null);

                p.panBzentyNm.set_taborder("1");
                p.panBzentyNm.set_type("horizontal");
                p.panBzentyNm.set_horizontalgap("10");
                p.panBzentyNm.set_fittocontents("height");
                p.panBzentyNm.set_flexgrow("1");
                p.panBzentyNm.set_minwidth("");
                p.panBzentyNm.move("1694.00","398","300","45",null,null);

                p.panBldgCd.set_taborder("8");
                p.panBldgCd.set_type("horizontal");
                p.panBldgCd.set_horizontalgap("10");
                p.panBldgCd.set_fittocontents("height");
                p.panBldgCd.set_flexgrow("1");
                p.panBldgCd.set_minwidth("");
                p.panBldgCd.move("1694.00","398","300","45",null,null);

                p.panSchBtn.set_taborder("2");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100","40",null,null);

                p.btnSch.set_taborder("3");
                p.btnSch.set_text("검색");
                p.btnSch.set_cssclass("btn_WF_Search");
                p.btnSch.move("570","192","100%","40",null,null);

                p.staBldgCd.set_taborder("6");
                p.staBldgCd.set_text("건물명");
                p.staBldgCd.set_cssclass("sta_WF_SchLabel");
                p.staBldgCd.set_flexshrink("0");
                p.staBldgCd.set_maxwidth("");
                p.staBldgCd.move("0","0","100","40",null,null);

                p.cboBldgCd.set_taborder("7");
                p.cboBldgCd.set_flexgrow("1");
                p.cboBldgCd.set_innerdataset("dsCboBldgCd");
                p.cboBldgCd.set_datacolumn("cdNm");
                p.cboBldgCd.set_codecolumn("cdId");
                p.cboBldgCd.move("841","24","100%","40",null,null);

                p.staYmd.set_taborder("12");
                p.staYmd.set_text("계약일자");
                p.staYmd.set_cssclass("sta_WF_SchLabel");
                p.staYmd.set_flexshrink("0");
                p.staYmd.set_maxwidth("");
                p.staYmd.move("0","0","100","40",null,null);

                p.divCal.set_taborder("13");
                p.divCal.set_text("Div00");
                p.divCal.set_flexgrow("1");
                p.divCal.set_formscrollbartype("none none");
                p.divCal.set_formscrolltype("none");
                p.divCal.move("20.00","14","320","40",null,null);

                p.panYmd.set_taborder("14");
                p.panYmd.set_type("horizontal");
                p.panYmd.set_horizontalgap("10");
                p.panYmd.set_flexgrow("1");
                p.panYmd.set_minwidth("");
                p.panYmd.move("1694.00","398","360","40",null,null);

                p.staBzentyNm00.set_taborder("15");
                p.staBzentyNm00.set_text("임대공간명");
                p.staBzentyNm00.set_cssclass("sta_WF_SchLabel_E");
                p.staBzentyNm00.set_flexshrink("0");
                p.staBzentyNm00.set_maxwidth("");
                p.staBzentyNm00.move("0","0","100","40",null,null);

                p.edtRentSpceNm.set_taborder("16");
                p.edtRentSpceNm.set_flexgrow("1");
                p.edtRentSpceNm.set_enable("true");
                p.edtRentSpceNm.set_readonly("false");
                p.edtRentSpceNm.move("841","24","100%","40",null,null);
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
                p.panLabel.move("132","47","100%","244",null,null);

                p.panBzentyNm.set_type("horizontal");
                p.panBzentyNm.set_fittocontents("height");
                p.panBzentyNm.set_horizontalgap("8");
                p.panBzentyNm.move("1694.00","398","100%","40",null,null);

                p.edtBzentyNm.move("841","24","65%","40",null,null);
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
                p.Grid00.set_taborder("0");
                p.Grid00.set_binddataset("dsList");
                p.Grid00.set_autofittype("none");
                p.Grid00.move("0","0","100.00%","280",null,null);
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
                p.Grid00.set_autofittype("none");
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
                p.divSch.set_formscrollbartype("none none");
                p.divSch.set_formscrolltype("none");
                p.divSch.set_fittocontents("height");
                p.divSch.set_cssclass("div_WF_SchBg");
                p.divSch.move("0","0","100%","330",null,null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","divSch:30","100.00%","100%",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("30");
            obj.set_spacing("10px");
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
                p.divSch.move("0","0","100%","342",null,null);
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
            obj = new Layout("default","Desktop_screen",1000,660,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("계약공간정보 선택(팝업)");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.set_fittocontents("height");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","0","100%","100%",null,null);

                p.divGuide.set_taborder("1");
                p.divGuide.set_text("div00");
                p.divGuide.set_visible("false");
                p.divGuide.set_cssclass("div_GD_Tip");
                p.divGuide.move("1590.00","135","450","385",null,null);

                p.btnCfmtn.set_taborder("2");
                p.btnCfmtn.set_text("확인");
                p.btnCfmtn.set_cssclass("btn_WF_Yes");
                p.btnCfmtn.move("420.00","550","100","32",null,null);
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
            obj = new BindItem("item0","divForm.form.divSch.form.edtBzentyNm","value","dsSearch","pBzentyNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.divSch.form.cboBldgCd","value","dsSearch","pBldgCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.divSch.form.divCal.form.calBgngYmd","value","dsSearch","pBgngYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.divSch.form.divCal.form.calEndYmd","value","dsSearch","pEndYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.divSch.form.edtRmnmNo","value","dsSearch","pRmnmNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.divSch.form.edtRentSpceNm","value","dsSearch","pRentSpceNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("REN041P01.xfdl","xjs::TaskCom.xjs");
        this.registerScript("REN041P01.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	REN043P01.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/12/10
        *  @Desction    변경임차의향서 선택(팝업)
        ************** 소스 수정 이력 *****************************************************
        * Date				Modifier		Description
        *******************************************************************************
        * 2024/12/26		hss				최초생성
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

        	this.fnInit();

        	this.cfnSearch();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function (page)
        {
        	// 일자 입력여부 체크
        	if (this.dsSearch.getColumn(0, "pBgngYmd") > this.dsSearch.getColumn(0, "pEndYmd")) {
        		this.gfnAlertMsg("msg", "MSG_012", [ "" ]);		//{0} 시작일자가 종료일자보다 큽니다.
        		return;
        	}

        	// 사용자정보 조회
        	const gdsUser = nexacro.getApplication().gdsUser;
        	this.dsSearch.setColumn(0, "userId"		,gdsUser.getColumn(0, "userId"));

        	this.getSearchTransaction();
        };

        this.cfnClose = function() {
        	console.log('cfnClose');
        }
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.getSearchTransaction = function() {

        	var strSvcId    = "search";
        	var strSvcUrl   = "ren/com/selectSapPolSpceInfo.do";
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
        		// 콤보조회
        		case "_cfnComCdLoad_":
        			this.divForm.form.divSch.form.cboBldgCd.set_index(0);
        			break;

        		case "search":
        			//페이징 폼의 ID가 변경 될 경우 맞춰서 변경 해야함
        			break;

        		case "excel":
        			//다운로드
        			console.log(errorMsg);	// 다운로드 가능한 파일 URL
        			break;
        	}
        };

        this.msgCallback = function(sPopupId, sRtn) {
        	if(sPopupId == "del_confirm") {
        		if(sRtn == "Y") {
        			//TODO..
        		}
        	} else if(sPopupId == "msg") {
        		//TODO..
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function() {
        	this.cfnComCdLoad({dsCboBldgCd:"RENT_ASN_BLDG:A"});
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // 확인 버튼 클릭시
        this.btnCfmtn_onclick = function(obj,e)
        {
        	var objRet = [];

        	for (var i=0; i<this.dsList.rowcount; i++) {
        		if (this.dsList.getColumn(i, "chc") == "1") {
        			objRet.push({
        				  polSpceId		: this.dsList.getColumn(i, "polSpceId")
        				, rmnmNo 		: this.dsList.getColumn(i, "rmnmNo")
        				, bldgCd 		: this.dsList.getColumn(i, "bldgCd")
        				, rentUsgCd 	: this.dsList.getColumn(i, "rentUsgCd")
        				, rentSpceAr 	: this.dsList.getColumn(i, "rentSpceAr")+""
        				, ctrtBgngYmd 	: this.dsList.getColumn(i, "ctrtBgngYmd")
        				, ctrtEndYmd 	: this.dsList.getColumn(i, "ctrtEndYmd")
        				, ctrtPrd 		: this.dsList.getColumn(i, "ctrtPrd")
        			});
        		}
        	}

        	this.close(JSON.stringify(objRet));
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divSch.form.btnSch.addEventHandler("onclick",this.cfnSearch,this);
            this.divForm.form.divSch.form.staYmd.addEventHandler("onclick",this.divForm_Div00_sta00_00_01_01_onclick,this);
            this.btnCfmtn.addEventHandler("onclick",this.btnCfmtn_onclick,this);
        };
        this.loadIncludeScript("REN041P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
