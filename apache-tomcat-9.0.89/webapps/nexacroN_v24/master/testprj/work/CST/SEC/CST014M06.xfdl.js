(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST014M03");
            this.set_titletext("초소별위해물품반출입현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCPCODE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"chckpntId\" type=\"STRING\" size=\"256\"/><Column id=\"scrtyDgadsCmdtyUseBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"scrtyDgadsCmdtyUseEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"jobSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobTycoSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"chckpntId\"/><Col id=\"jobSeCd\"/><Col id=\"jobTycoSeCd\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJobSeCd", this);
            obj._setContents("<ColumnInfo><Column id=\"jobSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobSeCdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJobTycoSeCd", this);
            obj._setContents("<ColumnInfo><Column id=\"jobSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobSeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobTycoSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobTycoSeCdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","60",null,"830","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Div("divSch","30","530","100.00%","250",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Combo("cboChckpntId","162","19","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("15");
            obj.set_innerdataset("dsCPCODE");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","100%","98",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("0");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("50");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"pan03\"/><PanelItem id=\"PanelItem01\" componentid=\"pan02\"/><PanelItem id=\"PanelItem03\" componentid=\"pan02_00_00\"/><PanelItem id=\"PanelItem05\" componentid=\"pan02_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan02_00\"/><PanelItem id=\"PanelItem08\" componentid=\"pan02_00_00_00_01_00\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan03","20.00","67","480","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staLabel02_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"calScrtyDgadsCmdtyUseBgngYmd\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cboJobSeCd","638","35","50%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("16");
            obj.set_displaynulltext("작업구분");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("Static02","832","38","120","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("14");
            obj.set_text("작업구분");
            obj.set_flexshrink("0");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panClose","30","151","100%","30",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnSchClose\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSchClose","1251","185","52","29",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_SchClose");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("5");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSch\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan02","1694.00","398","480","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("1");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Static00\"/><PanelItem id=\"PanelItem02\" componentid=\"calScrtyDgadsCmdtyUseEndYmd\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cboJobTycdSeCd","790","32","50%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("17");
            obj.set_displaynulltext("작업공종");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("Static01","1000","41","120","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("18");
            obj.set_text("신청서번호");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSch","570","192","112","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("6");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            obj.set_fittocontents("width");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan02_00","1694.00","398","480","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("8");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staLabel03\"/><PanelItem id=\"PanelItem02\" componentid=\"edtSprvsnCoNm\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel02_00_00_01","0","0","120","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("22");
            obj.set_text("반/출입초소");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Calendar("calScrtyDgadsCmdtyUseBgngYmd","167","73","150","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("19");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel02_00_00","0","0","120","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("9");
            obj.set_text("시작일자");
            obj.set_cssclass("sta_WF_SchLabel_E");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan02_00_00","1694.00","398","480","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("10");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staLabel02_00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"cboChckpntId\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Calendar("calScrtyDgadsCmdtyUseEndYmd","653","79","150","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("20");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("Static00","108","148","120","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("13");
            obj.set_text("종료일자");
            obj.set_cssclass("sta_WF_SchLabel_E");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan02_00_00_00","1694.00","398","480","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("11");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static02\"/><PanelItem id=\"PanelItem02\" componentid=\"cboJobSeCd\"/><PanelItem id=\"PanelItem03\" componentid=\"cboJobTycdSeCd\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan02_00_00_00_01_00","1694.00","398","480","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("12");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01\"/><PanelItem id=\"PanelItem02\" componentid=\"edtSprvsnCoNm00\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03","0","0","120","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("7");
            obj.set_text("주관사회사명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtSprvsnCoNm","1015","15","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("21");
            obj.set_cssclass("edt_WF_EdtSch");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtSprvsnCoNm00","1071.00","10","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("23");
            obj.set_cssclass("edt_WF_EdtSch");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","0","298","100.00%","460",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","27","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal01","staTotal:0","0","43","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_text("0");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","staTotal01:0","0","30","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdList","0","44","100.00%",null,null,"0",null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"210\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"135\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"초소명\"/><Cell col=\"2\" text=\"회사명\"/><Cell col=\"3\" text=\"작업구분\"/><Cell col=\"4\" text=\"신청번호\"/><Cell col=\"5\" text=\"반출입구분\"/><Cell col=\"6\" text=\"총수량&#13;&#10;(신청/반입)\"/><Cell col=\"7\" text=\"미처리수량\"/><Cell col=\"8\" text=\"물품수\"/><Cell col=\"9\" text=\"일자\"/><Cell col=\"10\" text=\"스캔수량\"/><Cell col=\"11\" text=\"육안확인수량\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" displaytype=\"text\" textAlign=\"right\"/><Cell col=\"1\" text=\"bind:chckpntNm\" textAlign=\"left\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"2\" text=\"bind:sprvsnCoNm\" textAlign=\"left\" suppress=\"2\" suppressalign=\"middle\"/><Cell col=\"3\" text=\"bind:jobSeCdNm\" textAlign=\"center\" suppress=\"3\" suppressalign=\"middle\"/><Cell col=\"4\" text=\"bind:aplyNo\" suppress=\"4\" suppressalign=\"middle\" textAlign=\"center\" cssclass=\"CellLink\" cursor=\"pointer\"/><Cell col=\"5\" calendardateformat=\"yyyy-MM-dd\" textAlign=\"center\" text=\"bind:type\" suppress=\"4\" cssclass=\"CellLink\" cursor=\"pointer\"/><Cell col=\"6\" displaytype=\"number\" textAlign=\"right\" suppress=\"5\" text=\"bind:totalQty\" suppressalign=\"middle\"/><Cell col=\"7\" cssclass=\"expr:missQty != 0 ? &quot;CellTxtRed&quot; : &quot;&quot;\" displaytype=\"number\" textAlign=\"right\" suppress=\"5\" text=\"bind:missQty\" suppressalign=\"middle\"/><Cell col=\"8\" displaytype=\"number\" textAlign=\"right\" text=\"bind:cmdtyQty\"/><Cell col=\"9\" text=\"bind:dt\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" textAlign=\"center\"/><Cell col=\"10\" displaytype=\"number\" textAlign=\"right\" text=\"bind:autoAprvQty\"/><Cell col=\"11\" cssclass=\"CellEnd\" displaytype=\"number\" textAlign=\"right\" text=\"bind:mnlAprvQty\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divSch.form
            obj = new Layout("default","",0,0,this.divForm.form.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.cboChckpntId.set_taborder("15");
                p.cboChckpntId.set_innerdataset("dsCPCODE");
                p.cboChckpntId.set_codecolumn("cdId");
                p.cboChckpntId.set_datacolumn("cdNm");
                p.cboChckpntId.set_text("선택");
                p.cboChckpntId.set_value("");
                p.cboChckpntId.set_index("-1");
                p.cboChckpntId.move("162","19","100%","40",null,null);

                p.panLabel.set_taborder("0");
                p.panLabel.set_verticalgap("8");
                p.panLabel.set_flexwrap("wrap");
                p.panLabel.set_spacing("0px 0px 10px 0px");
                p.panLabel.set_type("horizontal");
                p.panLabel.set_flexcrossaxisalign("start");
                p.panLabel.set_horizontalgap("50");
                p.panLabel.set_fittocontents("height");
                p.panLabel.set_maxheight("");
                p.panLabel.move("20","14","100%","98",null,null);

                p.pan03.set_taborder("2");
                p.pan03.set_type("horizontal");
                p.pan03.set_horizontalgap("10");
                p.pan03.set_fittocontents("height");
                p.pan03.set_flexgrow("1");
                p.pan03.set_verticalgap("4");
                p.pan03.set_minwidth("");
                p.pan03.move("20.00","67","480","40",null,null);

                p.cboJobSeCd.set_taborder("16");
                p.cboJobSeCd.set_displaynulltext("작업구분");
                p.cboJobSeCd.set_value("");
                p.cboJobSeCd.set_index("-1");
                p.cboJobSeCd.move("638","35","50%","40",null,null);

                p.Static02.set_taborder("14");
                p.Static02.set_text("작업구분");
                p.Static02.set_flexshrink("0");
                p.Static02.set_cssclass("sta_WF_SchLabel");
                p.Static02.move("832","38","120","40",null,null);

                p.panClose.set_taborder("4");
                p.panClose.set_type("vertical");
                p.panClose.set_cssclass("pal_WF_SchLine");
                p.panClose.set_flexcrossaxisalign("end");
                p.panClose.move("30","151","100%","30",null,null);

                p.btnSchClose.set_taborder("3");
                p.btnSchClose.set_cssclass("btn_WF_SchClose");
                p.btnSchClose.move("1251","185","52","29",null,null);

                p.panSchBtn.set_taborder("5");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100%","40",null,null);

                p.pan02.set_taborder("1");
                p.pan02.set_type("horizontal");
                p.pan02.set_horizontalgap("10");
                p.pan02.set_flexgrow("1");
                p.pan02.set_minwidth("");
                p.pan02.move("1694.00","398","480","40",null,null);

                p.cboJobTycdSeCd.set_taborder("17");
                p.cboJobTycdSeCd.set_displaynulltext("작업공종");
                p.cboJobTycdSeCd.set_value("");
                p.cboJobTycdSeCd.set_index("-1");
                p.cboJobTycdSeCd.move("790","32","50%","40",null,null);

                p.Static01.set_taborder("18");
                p.Static01.set_text("신청서번호");
                p.Static01.set_cssclass("sta_WF_SchLabel");
                p.Static01.set_flexshrink("0");
                p.Static01.move("1000","41","120","40",null,null);

                p.btnSch.set_taborder("6");
                p.btnSch.set_text("조회하기");
                p.btnSch.set_cssclass("btn_WF_Search");
                p.btnSch.set_fittocontents("width");
                p.btnSch.move("570","192","112","40",null,null);

                p.pan02_00.set_taborder("8");
                p.pan02_00.set_type("horizontal");
                p.pan02_00.set_horizontalgap("10");
                p.pan02_00.set_flexgrow("1");
                p.pan02_00.set_minwidth("");
                p.pan02_00.move("1694.00","398","480","40",null,null);

                p.staLabel02_00_00_01.set_taborder("22");
                p.staLabel02_00_00_01.set_text("반/출입초소");
                p.staLabel02_00_00_01.set_cssclass("sta_WF_SchLabel");
                p.staLabel02_00_00_01.set_flexshrink("0");
                p.staLabel02_00_00_01.set_minwidth("");
                p.staLabel02_00_00_01.move("0","0","120","40",null,null);

                p.calScrtyDgadsCmdtyUseBgngYmd.set_taborder("19");
                p.calScrtyDgadsCmdtyUseBgngYmd.set_dateformat("yyyy-MM-dd");
                p.calScrtyDgadsCmdtyUseBgngYmd.move("167","73","150","40",null,null);

                p.staLabel02_00_00.set_taborder("9");
                p.staLabel02_00_00.set_text("시작일자");
                p.staLabel02_00_00.set_cssclass("sta_WF_SchLabel_E");
                p.staLabel02_00_00.set_flexshrink("0");
                p.staLabel02_00_00.set_minwidth("");
                p.staLabel02_00_00.move("0","0","120","40",null,null);

                p.pan02_00_00.set_taborder("10");
                p.pan02_00_00.set_type("horizontal");
                p.pan02_00_00.set_horizontalgap("10");
                p.pan02_00_00.set_flexgrow("1");
                p.pan02_00_00.set_minwidth("");
                p.pan02_00_00.move("1694.00","398","480","40",null,null);

                p.calScrtyDgadsCmdtyUseEndYmd.set_taborder("20");
                p.calScrtyDgadsCmdtyUseEndYmd.set_dateformat("yyyy-MM-dd");
                p.calScrtyDgadsCmdtyUseEndYmd.move("653","79","150","40",null,null);

                p.Static00.set_taborder("13");
                p.Static00.set_text("종료일자");
                p.Static00.set_cssclass("sta_WF_SchLabel_E");
                p.Static00.set_flexshrink("0");
                p.Static00.move("108","148","120","40",null,null);

                p.pan02_00_00_00.set_taborder("11");
                p.pan02_00_00_00.set_type("horizontal");
                p.pan02_00_00_00.set_horizontalgap("10");
                p.pan02_00_00_00.set_flexgrow("1");
                p.pan02_00_00_00.set_minwidth("");
                p.pan02_00_00_00.move("1694.00","398","480","40",null,null);

                p.pan02_00_00_00_01_00.set_taborder("12");
                p.pan02_00_00_00_01_00.set_type("horizontal");
                p.pan02_00_00_00_01_00.set_horizontalgap("10");
                p.pan02_00_00_00_01_00.set_flexgrow("1");
                p.pan02_00_00_00_01_00.set_minwidth("");
                p.pan02_00_00_00_01_00.move("1694.00","398","480","40",null,null);

                p.staLabel03.set_taborder("7");
                p.staLabel03.set_text("주관사회사명");
                p.staLabel03.set_cssclass("sta_WF_SchLabel");
                p.staLabel03.set_flexshrink("0");
                p.staLabel03.set_maxwidth("");
                p.staLabel03.move("0","0","120","40",null,null);

                p.edtSprvsnCoNm.set_taborder("21");
                p.edtSprvsnCoNm.set_cssclass("edt_WF_EdtSch");
                p.edtSprvsnCoNm.move("1015","15","100%","40",null,null);

                p.edtSprvsnCoNm00.set_taborder("23");
                p.edtSprvsnCoNm00.set_cssclass("edt_WF_EdtSch");
                p.edtSprvsnCoNm00.move("1071.00","10","100%","40",null,null);
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
                p.staTotal.move("0","0","27","34",null,null);

                p.staTotal01.set_taborder("1");
                p.staTotal01.set_cssclass("sta_WF_Total");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.set_fittocontents("width");
                p.staTotal01.set_text("0");
                p.staTotal01.move("staTotal:0","0","43","34",null,null);

                p.staTotal02.set_taborder("2");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.move("staTotal01:0","0","30","34",null,null);

                p.grdList.set_taborder("3");
                p.grdList.set_binddataset("dsList");
                p.grdList.move("0","44","100.00%",null,null,"0");
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divGrd.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

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
                p.divSch.set_taborder("1");
                p.divSch.set_text("Div00");
                p.divSch.set_cssclass("div_WF_SchBg");
                p.divSch.set_formscrollbartype("none none");
                p.divSch.set_formscrolltype("none");
                p.divSch.set_fittocontents("height");
                p.divSch.move("30","530","100.00%","250",null,null);

                p.divGrd.set_taborder("0");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","298","100.00%","460",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("mobile","",0,0,this.divForm.form,
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
            obj = new Layout("default","Desktop_screen",1480,700,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("초소별위해물품반출입현황");

                p.divTitle.set_taborder("1");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","60",null,"830","60",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,700,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divTitle.move("0","0",null,"50","0",null);

                p.divForm.move("20","60",null,"830","20",null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.divSch.form.cboChckpntId","value","dsSearch","chckpntId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.divSch.form.calScrtyDgadsCmdtyUseBgngYmd","value","dsSearch","scrtyDgadsCmdtyUseBgngYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.divSch.form.calScrtyDgadsCmdtyUseEndYmd","value","dsSearch","scrtyDgadsCmdtyUseEndYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.divSch.form.cboJobSeCd","value","dsSearch","jobSeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.divSch.form.cboJobTycdSeCd","value","dsSearch","jobTycoSeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.divSch.form.edtSprvsnCoNm","value","dsSearch","sprvsnCoNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.divSch.form.edtSprvsnCoNm00","value","dsSearch","aplyNo");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.addIncludeScript("CST014M06.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CST014M06.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	CST014M06.xfdl
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
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	this.divForm.form.divSch.set_width("100%");
        	this.divForm.form.divSch.fittocontents = "height";

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
        this.fnSearch = function () {
        	var strSvcId    = "search";
        	var strSvcUrl   = "cst/sec/selectDgadsCmdtyChckpntCrynShpgotList.do";
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

        this.fnSearchJobSeCd = function () {
        	var strSvcId    = "searchJobSeCd";
        	var strSvcUrl   = "cst/sec/selectJobSeCd.do";
        	var inData      = "";
        	var outData     = "dsJobTycoSeCd=dsJobTycoSeCd";
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
        			this.divForm.form.divGrd.form.staTotal01.text = this.dsList.getRowCount();
        			this.divForm.form.divGrd.form.resetScroll();
        			break;
        		case "searchJobSeCd" :
        			if (this.dsJobTycoSeCd.getRowCount() == 0) return;

        			this.dsJobTycoSeCd.set_keystring("G:+jobSeCd+jobSeCdNm");

        			for (let i=0; i<this.dsJobTycoSeCd.getRowCount(); i++) {
        				if (this.dsJobTycoSeCd.getRowLevel(i) == 0) continue;
        				const nAddRow = this.dsJobSeCd.addRow();
        				this.dsJobSeCd.setColumn(nAddRow, "jobSeCd", this.dsJobTycoSeCd.getColumn(i, "jobSeCd"));
        				this.dsJobSeCd.setColumn(nAddRow, "jobSeCdNm", this.dsJobTycoSeCd.getColumn(i, "jobSeCdNm"));
        			}

        			this.dsJobSeCd.insertRow(0);
        			this.dsJobSeCd.setColumn(0, "jobSeCd", "");
        			this.dsJobSeCd.setColumn(0, "jobSeCdNm", "전체");

        			this.dsJobTycoSeCd.set_keystring("");
        			this.dsJobTycoSeCd.insertRow(0);
        			this.dsJobTycoSeCd.setColumn(0, "jobTycoSeCd", "");
        			this.dsJobTycoSeCd.setColumn(0, "jobTycoSeCdNm", "전체");

        			this.divForm.form.divSch.form.cboJobSeCd.innerdataset = "dsJobSeCd";
        			this.divForm.form.divSch.form.cboJobSeCd.codecolumn = "jobSeCd";
        			this.divForm.form.divSch.form.cboJobSeCd.datacolumn = "jobSeCdNm";

        			this.divForm.form.divSch.form.cboJobTycdSeCd.innerdataset = "dsJobTycoSeCd";
        			this.divForm.form.divSch.form.cboJobTycdSeCd.codecolumn = "jobTycoSeCd";
        			this.divForm.form.divSch.form.cboJobTycdSeCd.datacolumn = "jobTycoSeCdNm";

        			// 이벤트호출
        			this.dsSearch_oncolumnchanged (this.dsSearch, {columnid : "jobSeCd", newvalue : ""});

        			break;

        		default:
        			break;
        	}
        }
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function () {
        	// 공통코드 함수 호출
        	this.cfnComCdLoad({ id:"commonCodeSearch", cbf:"fnCallBack", dsCPCODE:"WAPWATCHBOX:A" });

        	const date = new Date();
        	date.setDate(date.getDate() - 30);

        	const sYear = date.getFullYear().toString();
        	const sMonth = ((date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)).toString();
        	const sDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate().toString();

        	this.dsSearch.setColumn(0, "scrtyDgadsCmdtyUseBgngYmd", sYear + sMonth + sDate);
        	this.dsSearch.setColumn(0, "scrtyDgadsCmdtyUseEndYmd", this.fvCurDate);
        	// this.dsSearch.setColumn(0, "cntPrPg", 10); // 페이지당목록건수
        	// this.dsSearch.setColumn(0, "type", "all");

        	// 작업구분 / 작업공종 조회
        	this.fnSearchJobSeCd();
        }
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.dsSearch_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "jobSeCd") {
        		this.dsJobTycoSeCd.filter(`dataset.parent.gfnIsNull(jobTycoSeCd) || jobSeCd == '${e.newvalue}'`);
        		this.divForm.form.divSch.form.cboJobTycdSeCd.index = 0;
        	}
        };

        this.divForm_divSch_btnSch_onclick = function(obj,e)
        {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "scrtyDgadsCmdtyUseBgngYmd"))) {
        		this.divForm.form.divSch.form.calScrtyDgadsCmdtyUseBgngYmd.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["사용시작일"]); /// {0} 을/를 입력해 주세요.
        		return false;
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "scrtyDgadsCmdtyUseEndYmd"))) {
        		this.divForm.form.divSch.form.calScrtyDgadsCmdtyUseEndYmd.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["사용종료일"]); /// {0} 을/를 입력해 주세요.
        		return false;
        	}

        	if (this.dsSearch.getColumn(0, "scrtyDgadsCmdtyUseBgngYmd") > this.dsSearch.getColumn(0, "scrtyDgadsCmdtyUseEndYmd")) {
        		this.divForm.form.divSch.form.calScrtyDgadsCmdtyUseBgngYmd.setFocus();
        		this.gfnAlertMsg("msg3", "MSG_012", ["사용"]); //{0} 시작일자가 종료일자보다 큽니다.
        		return false;
        	}

        	this.fnSearch();
        };

        this.divForm_divGrd_grdList_oncellclick = function(obj,e)
        {
        	const sColId = obj.getCellProperty("body", e.cell, "text").replace("bind:", "");
        	const sType = obj.getBindDataset().getColumn(e.row, sColId);
        	let sTitle = "";
        	let sUrl = "";

        	if (sColId == "aplyNo") {
        		sTitle = "위해물품반출입상세내역";
        		sUrl ="work::CST/SEC/CST014P04.xfdl";
        	} else if (sColId == "type") {
        		sTitle = sType == "반입" ? "위해물품반입상세내역" : "위해물품반출상세내역";
        		sUrl = sType == "반입" ? "work::CST/SEC/CST014P02.xfdl" : "work::CST/SEC/CST014P03.xfdl";
        	} else {
        		return ;
        	}

        	const objArg   = {
        	      aplyNo : obj.getBindDataset().getColumn(e.row, "aplyNo")
        		 ,chckpntId : obj.getBindDataset().getColumn(e.row, "chckpntId")
        		 ,aplySeCd : obj.getBindDataset().getColumn(e.row, "aplySeCd")
        		 ,cstrnNm : obj.getBindDataset().getColumn(e.row, "cstrnNm")
        		 ,sprvsnCoNm : obj.getBindDataset().getColumn(e.row, "sprvsnCoNm")
        		 ,aplyDt : obj.getBindDataset().getColumn(e.row, "aplyDt")
        		 ,rcptDt : obj.getBindDataset().getColumn(e.row, "rcptDt")
        	};
        	const objOption = {
        			  width : 950
        			, height : 850
        			, popuptype : "modal"	//modal,modaless
        		//	, autosize  : true
        			, title     : sTitle
        		//	, resize    : true
        			, titlebar  : true
        		};
        	const sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("pop", sUrl, objArg, sPopupCallBack, objOption);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divSch.form.btnSchClose.addEventHandler("onclick",this.divForm_divSch_btnSchClose_onclick,this);
            this.divForm.form.divSch.form.btnSch.addEventHandler("onclick",this.divForm_divSch_btnSch_onclick,this);
            this.divForm.form.divSch.form.staLabel02_00_00_01.addEventHandler("onclick",this.divForm_Div00_sta00_00_01_01_onclick,this);
            this.divForm.form.divSch.form.staLabel02_00_00.addEventHandler("onclick",this.divForm_Div00_sta00_00_01_01_onclick,this);
            this.divForm.form.divGrd.form.grdList.addEventHandler("oncellclick",this.divForm_divGrd_grdList_oncellclick,this);
            this.dsSearch.addEventHandler("oncolumnchanged",this.dsSearch_oncolumnchanged,this);
            this.dsList.addEventHandler("onrowsetchanged",this.dsList_onrowsetchanged,this);
            this.dsList.addEventHandler("onload",this.dsList_onload,this);
        };
        this.loadIncludeScript("CST014M06.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
