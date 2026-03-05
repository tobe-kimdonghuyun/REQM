(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST014P04");
            this.set_titletext("위해물품반출입상세내역");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"nowPgNo\" type=\"STRING\" size=\"256\"/><Column id=\"cntPrPg\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCPCODE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComcodeList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","0","100%",null,null,"60",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("default autoindicator");
            this.addChild(obj.name, obj);

            obj = new Div("divSch","30","530","100.00%","268",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","100%","170",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("0");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("50");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"pan02\"/><PanelItem id=\"PanelItem00\" componentid=\"pan03\"/><PanelItem id=\"PanelItem03\" componentid=\"pan02_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"panBlank\"/><PanelItem id=\"PanelItem05\" componentid=\"pan02_00_00_00\"/><PanelItem id=\"PanelItem06\" componentid=\"pan02_00_00_00_00\"/><PanelItem id=\"PanelItem08\" componentid=\"pan02_00_00_00_01_00\"/><PanelItem id=\"PanelItem07\" componentid=\"pan02_00_00_00_01\"/><PanelItem id=\"PanelItem09\" componentid=\"panBlank00\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtAplyNo","913","33","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("24");
            obj.set_readonly("true");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("Static02","832","38","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("23");
            obj.set_text("신청번호");
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

            obj = new Panel("pan02","1694.00","398","265","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("1");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static02\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAplyNo\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSch","570","192","112","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("6");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            obj.set_fittocontents("width");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panBlank","1694.00","398","265","1",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("8");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel02_00_00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("9");
            obj.set_text("작업구분");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan02_00_00","1694.00","398","265","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("10");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"cboAplySeCd\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtCstrnNm","290","140","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("22");
            obj.set_readonly("true");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("Static00","108","148","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("21");
            obj.set_text("공사명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan02_00_00_00","1694.00","398","265","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("11");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtCstrnNm\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel02_00_00_00_00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("12");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtCoNm","986","36","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan02_00_00_00_00","1694.00","398","265","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("14");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtCoNm\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel02_00_00_00_01","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("15");
            obj.set_text("접수일시");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtRcptDt","986","36","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("16");
            obj.set_readonly("true");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan02_00_00_00_01","1694.00","398","265","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("17");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02_00_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRcptDt\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel02_00_00_00_01_00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("18");
            obj.set_text("신청일시");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtAplyDt","986","36","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan02_00_00_00_01_00","1694.00","398","265","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("20");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02_00_00_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAplyDt\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panBlank00","995","150","265","1",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("26");
            obj.set_flexgrow("1");
            obj._setContents("");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan03","20.00","67","265","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03\"/><PanelItem id=\"PanelItem00\" componentid=\"cboChckpntId\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("7");
            obj.set_text("반출/입초소");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            obj.set_visible("true");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cboChckpntId","162","19","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("25");
            obj.set_readonly("true");
            obj.set_visible("true");
            obj.set_innerdataset("dsCPCODE");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cboAplySeCd","-80","54","100.00%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("27");
            obj.set_readonly("true");
            obj.set_visible("true");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_innerdataset("dsComcodeList");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","20","233","100%","350",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
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
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","staTotal01:0","0","30","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdList","0","44","100.00%",null,null,"0",null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"사진\"/><Cell col=\"2\" text=\"물품명\"/><Cell col=\"3\" text=\"규격\"/><Cell col=\"4\" text=\"단위\"/><Cell col=\"5\" text=\"신청수량\"/><Cell col=\"6\" text=\"반입수량\"/><Cell col=\"7\" text=\"반출수량\"/><Cell col=\"8\" text=\"미반출수량\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" textAlign=\"right\"/><Cell col=\"1\"/><Cell col=\"2\" text=\"bind:cmdtyNm\"/><Cell col=\"3\" text=\"bind:spcfctVl\"/><Cell col=\"4\" text=\"bind:unitVl\"/><Cell col=\"5\" displaytype=\"number\" textAlign=\"right\" text=\"bind:thldQty\"/><Cell col=\"6\" displaytype=\"number\" textAlign=\"right\" text=\"bind:crynQty\"/><Cell col=\"7\" displaytype=\"number\" textAlign=\"right\" text=\"bind:shpgotQty\"/><Cell col=\"8\" displaytype=\"number\" textAlign=\"right\" expr=\"crynQty - shpgotQty\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divPopBtn","0",null,"100%","60",null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.addChild(obj.name, obj);

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
                p.panLabel.set_taborder("0");
                p.panLabel.set_verticalgap("8");
                p.panLabel.set_flexwrap("wrap");
                p.panLabel.set_spacing("0px 0px 10px 0px");
                p.panLabel.set_type("horizontal");
                p.panLabel.set_flexcrossaxisalign("start");
                p.panLabel.set_horizontalgap("50");
                p.panLabel.set_fittocontents("height");
                p.panLabel.set_maxheight("");
                p.panLabel.move("20","14","100%","170",null,null);

                p.edtAplyNo.set_taborder("24");
                p.edtAplyNo.set_readonly("true");
                p.edtAplyNo.move("913","33","100%","40",null,null);

                p.Static02.set_taborder("23");
                p.Static02.set_text("신청번호");
                p.Static02.set_flexshrink("0");
                p.Static02.set_cssclass("sta_WF_SchLabel");
                p.Static02.move("832","38","100","40",null,null);

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
                p.pan02.move("1694.00","398","265","40",null,null);

                p.btnSch.set_taborder("6");
                p.btnSch.set_text("조회하기");
                p.btnSch.set_cssclass("btn_WF_Search");
                p.btnSch.set_fittocontents("width");
                p.btnSch.move("570","192","112","40",null,null);

                p.panBlank.set_taborder("8");
                p.panBlank.set_type("horizontal");
                p.panBlank.set_horizontalgap("10");
                p.panBlank.set_flexgrow("1");
                p.panBlank.set_minwidth("");
                p.panBlank.move("1694.00","398","265","1",null,null);

                p.staLabel02_00_00.set_taborder("9");
                p.staLabel02_00_00.set_text("작업구분");
                p.staLabel02_00_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel02_00_00.set_flexshrink("0");
                p.staLabel02_00_00.set_minwidth("");
                p.staLabel02_00_00.move("0","0","100","40",null,null);

                p.pan02_00_00.set_taborder("10");
                p.pan02_00_00.set_type("horizontal");
                p.pan02_00_00.set_horizontalgap("10");
                p.pan02_00_00.set_flexgrow("1");
                p.pan02_00_00.set_minwidth("");
                p.pan02_00_00.move("1694.00","398","265","40",null,null);

                p.edtCstrnNm.set_taborder("22");
                p.edtCstrnNm.set_readonly("true");
                p.edtCstrnNm.move("290","140","100%","40",null,null);

                p.Static00.set_taborder("21");
                p.Static00.set_text("공사명");
                p.Static00.set_cssclass("sta_WF_SchLabel");
                p.Static00.set_flexshrink("0");
                p.Static00.move("108","148","100","40",null,null);

                p.pan02_00_00_00.set_taborder("11");
                p.pan02_00_00_00.set_type("horizontal");
                p.pan02_00_00_00.set_horizontalgap("10");
                p.pan02_00_00_00.set_flexgrow("1");
                p.pan02_00_00_00.set_minwidth("");
                p.pan02_00_00_00.move("1694.00","398","265","40",null,null);

                p.staLabel02_00_00_00_00.set_taborder("12");
                p.staLabel02_00_00_00_00.set_text("회사명");
                p.staLabel02_00_00_00_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel02_00_00_00_00.set_flexshrink("0");
                p.staLabel02_00_00_00_00.set_minwidth("");
                p.staLabel02_00_00_00_00.move("0","0","100","40",null,null);

                p.edtCoNm.set_taborder("13");
                p.edtCoNm.set_readonly("true");
                p.edtCoNm.move("986","36","100%","40",null,null);

                p.pan02_00_00_00_00.set_taborder("14");
                p.pan02_00_00_00_00.set_type("horizontal");
                p.pan02_00_00_00_00.set_horizontalgap("10");
                p.pan02_00_00_00_00.set_flexgrow("1");
                p.pan02_00_00_00_00.set_minwidth("");
                p.pan02_00_00_00_00.move("1694.00","398","265","40",null,null);

                p.staLabel02_00_00_00_01.set_taborder("15");
                p.staLabel02_00_00_00_01.set_text("접수일시");
                p.staLabel02_00_00_00_01.set_cssclass("sta_WF_SchLabel");
                p.staLabel02_00_00_00_01.set_flexshrink("0");
                p.staLabel02_00_00_00_01.set_minwidth("");
                p.staLabel02_00_00_00_01.move("0","0","100","40",null,null);

                p.edtRcptDt.set_taborder("16");
                p.edtRcptDt.set_readonly("true");
                p.edtRcptDt.move("986","36","100%","40",null,null);

                p.pan02_00_00_00_01.set_taborder("17");
                p.pan02_00_00_00_01.set_type("horizontal");
                p.pan02_00_00_00_01.set_horizontalgap("10");
                p.pan02_00_00_00_01.set_flexgrow("1");
                p.pan02_00_00_00_01.set_minwidth("");
                p.pan02_00_00_00_01.move("1694.00","398","265","40",null,null);

                p.staLabel02_00_00_00_01_00.set_taborder("18");
                p.staLabel02_00_00_00_01_00.set_text("신청일시");
                p.staLabel02_00_00_00_01_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel02_00_00_00_01_00.set_flexshrink("0");
                p.staLabel02_00_00_00_01_00.set_minwidth("");
                p.staLabel02_00_00_00_01_00.move("0","0","100","40",null,null);

                p.edtAplyDt.set_taborder("19");
                p.edtAplyDt.set_readonly("true");
                p.edtAplyDt.move("986","36","100%","40",null,null);

                p.pan02_00_00_00_01_00.set_taborder("20");
                p.pan02_00_00_00_01_00.set_type("horizontal");
                p.pan02_00_00_00_01_00.set_horizontalgap("10");
                p.pan02_00_00_00_01_00.set_flexgrow("1");
                p.pan02_00_00_00_01_00.set_minwidth("");
                p.pan02_00_00_00_01_00.move("1694.00","398","265","40",null,null);

                p.panBlank00.set_taborder("26");
                p.panBlank00.set_flexgrow("1");
                p.panBlank00.move("995","150","265","1",null,null);

                p.pan03.set_taborder("2");
                p.pan03.set_type("horizontal");
                p.pan03.set_horizontalgap("10");
                p.pan03.set_fittocontents("height");
                p.pan03.set_flexgrow("1");
                p.pan03.set_verticalgap("4");
                p.pan03.set_minwidth("");
                p.pan03.move("20.00","67","265","40",null,null);

                p.staLabel03.set_taborder("7");
                p.staLabel03.set_text("반출/입초소");
                p.staLabel03.set_cssclass("sta_WF_SchLabel");
                p.staLabel03.set_flexshrink("0");
                p.staLabel03.set_visible("true");
                p.staLabel03.set_maxwidth("");
                p.staLabel03.move("0","0","100","40",null,null);

                p.cboChckpntId.set_taborder("25");
                p.cboChckpntId.set_readonly("true");
                p.cboChckpntId.set_visible("true");
                p.cboChckpntId.set_innerdataset("dsCPCODE");
                p.cboChckpntId.set_codecolumn("cdId");
                p.cboChckpntId.set_datacolumn("cdNm");
                p.cboChckpntId.set_value("");
                p.cboChckpntId.set_index("-1");
                p.cboChckpntId.move("162","19","100%","40",null,null);

                p.cboAplySeCd.set_taborder("27");
                p.cboAplySeCd.set_readonly("true");
                p.cboAplySeCd.set_visible("true");
                p.cboAplySeCd.set_codecolumn("cdId");
                p.cboAplySeCd.set_datacolumn("cdNm");
                p.cboAplySeCd.set_innerdataset("dsComcodeList");
                p.cboAplySeCd.set_value("");
                p.cboAplySeCd.set_index("-1");
                p.cboAplySeCd.move("-80","54","100.00%","40",null,null);
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
                p.staTotal01.set_text("0");
                p.staTotal01.set_cssclass("sta_WF_Total");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.set_fittocontents("width");
                p.staTotal01.move("staTotal:0","0","43","34",null,null);

                p.staTotal02.set_taborder("2");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.move("staTotal01:0","0","30","34",null,null);

                p.grdList.set_taborder("3");
                p.grdList.set_binddataset("dsList");
                p.grdList.set_autofittype("col");
                p.grdList.move("0","44","100.00%",null,null,"0");
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
                p.divSch.move("30","530","100.00%","268",null,null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.set_fittocontents("height");
                p.divGrd.move("20","233","100%","350",null,null);
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
            //-- Default Layout : this.divPopBtn.form
            obj = new Layout("default","",0,0,this.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
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
            obj = new Layout("mobile","",0,0,this.divPopBtn.form,
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
            obj = new Layout("default","Desktop_screen",1000,700,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("위해물품반출입상세내역");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("default autoindicator");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","0","100%",null,null,"60");

                p.divPopBtn.set_taborder("1");
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
            obj = new BindItem("item0","divForm.form.divSch.form.edtAplyNo","value","dsSearch","aplyNo");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CST014P04.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CST014P04.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	CST014P03.xfdl
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

        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;
        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/

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
        	var strSvcUrl   = "cst/sec/selectDgadsCmdtyVldCmdtyList.do";
        	var inData      = "dsIn=dsSearch";
        	var outData     = "dsList=dsCmdtyList";
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
        		default:
        			break;
        	}
        }

        //작업구분 공통코드 조회 CallBack
        this.fnComCallBack = function(svcId, errCd, errMsg)
        {
        	//부모 화면 내용으로 조회조건 세팅
        	this.gOFrame = this.getOwnerFrame();
        	this.divForm.form.divSch.form.cboChckpntId.value = this.gOFrame.chckpntId;  //반출입초소
        	this.divForm.form.divSch.form.cboAplySeCd.value = this.gOFrame.aplySeCd;  //작업구분
        	this.divForm.form.divSch.form.edtCstrnNm.value = this.gOFrame.cstrnNm;  //공사명(현재 없음)
        	this.divForm.form.divSch.form.edtCoNm.value = this.gOFrame.sprvsnCoNm;  //회사명
        	this.divForm.form.divSch.form.edtAplyDt.value = this.gOFrame.aplyDt;  //신청일시
        	this.divForm.form.divSch.form.edtRcptDt.value = this.gOFrame.rcptDt;  //접수일시

        	this.dsSearch.clearData();
        	this.dsSearch.setColumn(this.dsSearch.addRow(), "aplyNo", this.gOFrame.aplyNo);  //신청번호

        	this.fnSearch();
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function () {
        	// 공통코드 함수 호출
        	this.cfnComCdLoad({ id:"commonCodeSearch", cbf:"fnCallBack", dsCPCODE:"WAPWATCHBOX:B" });  //반입초소
        	this.cfnComCdLoad({ id:"commonCodeSearch", cbf:"fnComCallBack", dsComcodeList:"TSP:B" });  //작업구분

        	//공통코드 fnComCallBack 수행이후 Callback에서 조회 진행
        }
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divPopBtn_btnClose_onclick = function(obj,e)
        {
        	this.close();
        };

        this.divForm_divSch_btnSch_onclick = function(obj,e)
        {
        	this.fnSearch();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divSch.form.btnSchClose.addEventHandler("onclick",this.divForm_divSch_btnSchClose_onclick,this);
            this.divForm.form.divSch.form.btnSch.addEventHandler("onclick",this.divForm_divSch_btnSch_onclick,this);
            this.divForm.form.divSch.form.staLabel02_00_00.addEventHandler("onclick",this.divForm_Div00_sta00_00_01_01_onclick,this);
            this.divForm.form.divSch.form.staLabel02_00_00_00_00.addEventHandler("onclick",this.divForm_Div00_sta00_00_01_01_onclick,this);
            this.divForm.form.divSch.form.staLabel02_00_00_00_01.addEventHandler("onclick",this.divForm_Div00_sta00_00_01_01_onclick,this);
            this.divForm.form.divSch.form.staLabel02_00_00_00_01_00.addEventHandler("onclick",this.divForm_Div00_sta00_00_01_01_onclick,this);
            this.divPopBtn.form.btnClose.addEventHandler("onclick",this.divPopBtn_btnClose_onclick,this);
        };
        this.loadIncludeScript("CST014P04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
