(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST014P01");
            this.set_titletext("위해물품수량일괄등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
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

            obj = new Div("divSch","30","530","100%","148",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("Static01","51","35","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("22");
            obj.set_text("반출/입초소");
            obj.set_flexshrink("0");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel00","17","65","265","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("21");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01\"/><PanelItem id=\"PanelItem01\" componentid=\"cboChckpntId\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","100%","130",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("0");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("50");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem00\" componentid=\"pan02\"/><PanelItem id=\"PanelItem03\" componentid=\"pan02_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"panBlank\"/><PanelItem id=\"PanelItem05\" componentid=\"pan02_00_00_00\"/><PanelItem id=\"PanelItem06\" componentid=\"pan02_00_00_00_00\"/><PanelItem id=\"PanelItem08\" componentid=\"pan02_00_00_00_01_00\"/><PanelItem id=\"PanelItem07\" componentid=\"pan02_00_00_00_01\"/><PanelItem id=\"PanelItem09\" componentid=\"panBlank00\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtAplyNo","913","33","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("Static02","832","38","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("18");
            obj.set_text("신청번호");
            obj.set_flexshrink("0");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("2");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents/>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan02","1694.00","398","265","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("1");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static02\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAplyNo\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cboChckpntId","111","42","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("23");
            obj.set_flexgrow("1");
            obj.set_readonly("true");
            obj.set_innerdataset("dsCPCODE");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panBlank","1694.00","398","265","1",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("3");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel02_00_00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("4");
            obj.set_text("작업구분");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan02_00_00","1694.00","398","265","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("5");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"cboAplySeCd\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cboAplySeCd","129","59","83.33%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("24");
            obj.set_flexgrow("1");
            obj.set_readonly("true");
            obj.set_innerdataset("dsComcodeList");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtCstrnNm","290","140","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("17");
            obj.set_readonly("true");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("Static00","108","148","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("16");
            obj.set_text("공사명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan02_00_00_00","1694.00","398","265","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("6");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtCstrnNm\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel02_00_00_00_00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("7");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtCoNm","986","36","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan02_00_00_00_00","1694.00","398","265","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("9");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtCoNm\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel02_00_00_00_01","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("10");
            obj.set_text("접수일시");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtRcptDt","986","36","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan02_00_00_00_01","1694.00","398","265","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("12");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02_00_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRcptDt\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel02_00_00_00_01_00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("13");
            obj.set_text("신청일시");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtAplyDt","986","36","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan02_00_00_00_01_00","1694.00","398","265","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("15");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02_00_00_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAplyDt\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panBlank00","995","150","265","1",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("20");
            obj.set_flexgrow("1");
            obj._setContents("");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","0","298","100.00%","350",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panGrdBtn",null,"0","800","34","0",null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem05\" componentid=\"btnGrdRegi\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdRegi","774.00","10","80","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("일괄등록");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","27","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal01","staTotal:0","0","43","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","staTotal01:0","0","30","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdList","0","44",null,null,"0","8",null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("5");
            obj.set_binddataset("dsList");
            obj.set_autoenter("select");
            obj.set_cellclickbound("cell");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/><Row size=\"48\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"사진\"/><Cell col=\"2\" text=\"물품명\"/><Cell col=\"3\" text=\"규격\"/><Cell col=\"4\" text=\"단위\"/><Cell col=\"5\" text=\"신청수량\"/><Cell col=\"6\" text=\"반입수량\"/><Cell col=\"7\" text=\"스캔수량\"/><Cell col=\"8\" text=\"육안확인&#13;&#10;수량\"/><Cell col=\"9\" text=\"수량합계\"/><Cell col=\"10\" text=\"정산(과오)&#13;&#10;수량\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"right\"/><Cell col=\"1\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:cmdtyNm\" textAlign=\"left\"/><Cell col=\"3\" textAlign=\"left\" text=\"bind:spcfctVl\"/><Cell col=\"4\" textAlign=\"left\" text=\"bind:unitVl\"/><Cell col=\"5\" textAlign=\"right\" text=\"bind:thldQty\" displaytype=\"number\"/><Cell col=\"6\" displaytype=\"number\" textAlign=\"right\" text=\"bind:crynQty\"/><Cell col=\"7\" textAlign=\"right\" text=\"bind:autoInptQty\" displaytype=\"number\" edittype=\"none\" editinputtype=\"digit\" editmaxlength=\"10\" editautoselect=\"true\"/><Cell col=\"8\" textAlign=\"right\" text=\"bind:mnlInptQty\" displaytype=\"number\" edittype=\"none\" editinputtype=\"digit\" editmaxlength=\"10\" editautoselect=\"true\"/><Cell col=\"9\" textAlign=\"right\" text=\"bind:hstryCrynQty\" displaytype=\"number\"/><Cell col=\"10\" cssclass=\"expr:errQty != 0 ? &quot;CellEnd CellTxtRed&quot; : &quot;CellEnd&quot;\" textAlign=\"right\" text=\"bind:errQty\" displaytype=\"number\" font=\"bold 17px/normal &quot;pretendard&quot;\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\" colspan=\"2\"/><Cell col=\"9\"/><Cell col=\"10\"/></Band></Format></Formats>");
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

            obj = new Div("divPopBtn","0",null,"100%","60",null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","457.00","30","100","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_No");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Button("btnOk","457.00","30","100","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("0");
            obj.set_text("적용");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_visible("true");
            this.divPopBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.divSch.form
            obj = new Layout("default","",0,0,this.divForm.form.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static01.set_taborder("22");
                p.Static01.set_text("반출/입초소");
                p.Static01.set_flexshrink("0");
                p.Static01.set_cssclass("sta_WF_SchLabel");
                p.Static01.move("51","35","100","40",null,null);

                p.Panel00.set_taborder("21");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.set_flexgrow("1");
                p.Panel00.move("17","65","265","40",null,null);

                p.panLabel.set_taborder("0");
                p.panLabel.set_verticalgap("8");
                p.panLabel.set_flexwrap("wrap");
                p.panLabel.set_spacing("0px 0px 10px 0px");
                p.panLabel.set_type("horizontal");
                p.panLabel.set_flexcrossaxisalign("start");
                p.panLabel.set_horizontalgap("50");
                p.panLabel.set_fittocontents("height");
                p.panLabel.set_maxheight("");
                p.panLabel.move("20","14","100%","130",null,null);

                p.edtAplyNo.set_taborder("19");
                p.edtAplyNo.set_readonly("true");
                p.edtAplyNo.move("913","33","100%","40",null,null);

                p.Static02.set_taborder("18");
                p.Static02.set_text("신청번호");
                p.Static02.set_flexshrink("0");
                p.Static02.set_cssclass("sta_WF_SchLabel");
                p.Static02.move("832","38","100","40",null,null);

                p.panSchBtn.set_taborder("2");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100%","40",null,null);

                p.pan02.set_taborder("1");
                p.pan02.set_type("horizontal");
                p.pan02.set_horizontalgap("10");
                p.pan02.set_flexgrow("1");
                p.pan02.set_minwidth("");
                p.pan02.move("1694.00","398","265","40",null,null);

                p.cboChckpntId.set_taborder("23");
                p.cboChckpntId.set_flexgrow("1");
                p.cboChckpntId.set_readonly("true");
                p.cboChckpntId.set_innerdataset("dsCPCODE");
                p.cboChckpntId.set_codecolumn("cdId");
                p.cboChckpntId.set_datacolumn("cdNm");
                p.cboChckpntId.set_text("선택");
                p.cboChckpntId.set_value("");
                p.cboChckpntId.set_index("-1");
                p.cboChckpntId.move("111","42","100%","40",null,null);

                p.panBlank.set_taborder("3");
                p.panBlank.set_type("horizontal");
                p.panBlank.set_horizontalgap("10");
                p.panBlank.set_flexgrow("1");
                p.panBlank.set_minwidth("");
                p.panBlank.move("1694.00","398","265","1",null,null);

                p.staLabel02_00_00.set_taborder("4");
                p.staLabel02_00_00.set_text("작업구분");
                p.staLabel02_00_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel02_00_00.set_flexshrink("0");
                p.staLabel02_00_00.set_minwidth("");
                p.staLabel02_00_00.move("0","0","100","40",null,null);

                p.pan02_00_00.set_taborder("5");
                p.pan02_00_00.set_type("horizontal");
                p.pan02_00_00.set_horizontalgap("10");
                p.pan02_00_00.set_flexgrow("1");
                p.pan02_00_00.set_minwidth("");
                p.pan02_00_00.move("1694.00","398","265","40",null,null);

                p.cboAplySeCd.set_taborder("24");
                p.cboAplySeCd.set_flexgrow("1");
                p.cboAplySeCd.set_readonly("true");
                p.cboAplySeCd.set_innerdataset("dsComcodeList");
                p.cboAplySeCd.set_codecolumn("cdId");
                p.cboAplySeCd.set_datacolumn("cdNm");
                p.cboAplySeCd.set_text("선택");
                p.cboAplySeCd.set_value("");
                p.cboAplySeCd.set_index("-1");
                p.cboAplySeCd.move("129","59","83.33%","40",null,null);

                p.edtCstrnNm.set_taborder("17");
                p.edtCstrnNm.set_readonly("true");
                p.edtCstrnNm.move("290","140","100%","40",null,null);

                p.Static00.set_taborder("16");
                p.Static00.set_text("공사명");
                p.Static00.set_cssclass("sta_WF_SchLabel");
                p.Static00.set_flexshrink("0");
                p.Static00.move("108","148","100","40",null,null);

                p.pan02_00_00_00.set_taborder("6");
                p.pan02_00_00_00.set_type("horizontal");
                p.pan02_00_00_00.set_horizontalgap("10");
                p.pan02_00_00_00.set_flexgrow("1");
                p.pan02_00_00_00.set_minwidth("");
                p.pan02_00_00_00.move("1694.00","398","265","40",null,null);

                p.staLabel02_00_00_00_00.set_taborder("7");
                p.staLabel02_00_00_00_00.set_text("회사명");
                p.staLabel02_00_00_00_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel02_00_00_00_00.set_flexshrink("0");
                p.staLabel02_00_00_00_00.set_minwidth("");
                p.staLabel02_00_00_00_00.move("0","0","100","40",null,null);

                p.edtCoNm.set_taborder("8");
                p.edtCoNm.set_readonly("true");
                p.edtCoNm.move("986","36","100%","40",null,null);

                p.pan02_00_00_00_00.set_taborder("9");
                p.pan02_00_00_00_00.set_type("horizontal");
                p.pan02_00_00_00_00.set_horizontalgap("10");
                p.pan02_00_00_00_00.set_flexgrow("1");
                p.pan02_00_00_00_00.set_minwidth("");
                p.pan02_00_00_00_00.move("1694.00","398","265","40",null,null);

                p.staLabel02_00_00_00_01.set_taborder("10");
                p.staLabel02_00_00_00_01.set_text("접수일시");
                p.staLabel02_00_00_00_01.set_cssclass("sta_WF_SchLabel");
                p.staLabel02_00_00_00_01.set_flexshrink("0");
                p.staLabel02_00_00_00_01.set_minwidth("");
                p.staLabel02_00_00_00_01.move("0","0","100","40",null,null);

                p.edtRcptDt.set_taborder("11");
                p.edtRcptDt.set_readonly("true");
                p.edtRcptDt.move("986","36","100%","40",null,null);

                p.pan02_00_00_00_01.set_taborder("12");
                p.pan02_00_00_00_01.set_type("horizontal");
                p.pan02_00_00_00_01.set_horizontalgap("10");
                p.pan02_00_00_00_01.set_flexgrow("1");
                p.pan02_00_00_00_01.set_minwidth("");
                p.pan02_00_00_00_01.move("1694.00","398","265","40",null,null);

                p.staLabel02_00_00_00_01_00.set_taborder("13");
                p.staLabel02_00_00_00_01_00.set_text("신청일시");
                p.staLabel02_00_00_00_01_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel02_00_00_00_01_00.set_flexshrink("0");
                p.staLabel02_00_00_00_01_00.set_minwidth("");
                p.staLabel02_00_00_00_01_00.move("0","0","100","40",null,null);

                p.edtAplyDt.set_taborder("14");
                p.edtAplyDt.set_readonly("true");
                p.edtAplyDt.move("986","36","100%","40",null,null);

                p.pan02_00_00_00_01_00.set_taborder("15");
                p.pan02_00_00_00_01_00.set_type("horizontal");
                p.pan02_00_00_00_01_00.set_horizontalgap("10");
                p.pan02_00_00_00_01_00.set_flexgrow("1");
                p.pan02_00_00_00_01_00.set_minwidth("");
                p.pan02_00_00_00_01_00.move("1694.00","398","265","40",null,null);

                p.panBlank00.set_taborder("20");
                p.panBlank00.set_flexgrow("1");
                p.panBlank00.move("995","150","265","1",null,null);
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
                p.panGrdBtn.set_taborder("0");
                p.panGrdBtn.set_flexcrossaxisalign("start");
                p.panGrdBtn.set_flexcrossaxiswrapalign("start");
                p.panGrdBtn.set_flexmainaxisalign("end");
                p.panGrdBtn.set_horizontalgap("10");
                p.panGrdBtn.move(null,"0","800","34","0",null);

                p.btnGrdRegi.set_taborder("1");
                p.btnGrdRegi.set_text("일괄등록");
                p.btnGrdRegi.set_cssclass("btn_WF_SmallBlack");
                p.btnGrdRegi.set_visible("true");
                p.btnGrdRegi.set_fittocontents("width");
                p.btnGrdRegi.move("774.00","10","80","34",null,null);

                p.staTotal.set_taborder("2");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","0","27","34",null,null);

                p.staTotal01.set_taborder("3");
                p.staTotal01.set_text("0");
                p.staTotal01.set_cssclass("sta_WF_Total");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.set_fittocontents("width");
                p.staTotal01.move("staTotal:0","0","43","34",null,null);

                p.staTotal02.set_taborder("4");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.move("staTotal01:0","0","30","34",null,null);

                p.grdList.set_taborder("5");
                p.grdList.set_binddataset("dsList");
                p.grdList.set_autoenter("select");
                p.grdList.set_cellclickbound("cell");
                p.grdList.set_autofittype("col");
                p.grdList.move("0","44",null,null,"0","8");
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
                p.divSch.move("30","530","100%","148",null,null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","298","100.00%","350",null,null);
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

                p.btnOk.set_taborder("0");
                p.btnOk.set_text("적용");
                p.btnOk.set_cssclass("btn_WF_Yes");
                p.btnOk.set_visible("true");
                p.btnOk.move("457.00","30","100","40",null,null);
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
                p.set_titletext("위해물품수량일괄등록");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("default autoindicator");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","0","100%",null,null,"60");

                p.divGuide.set_taborder("1");
                p.divGuide.set_text("div00");
                p.divGuide.set_visible("false");
                p.divGuide.set_cssclass("div_GD_Tip");
                p.divGuide.move("1590.00","135","450","385",null,null);

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
            obj = new BindItem("item0","divForm.form.divSch.form.cboChckpntId","value","dsSearch","chckpntId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.divSch.form.edtAplyNo","value","dsSearch","aplyNo");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CST014P01.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CST014P01.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	CST014P01.xfdl
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

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function () {
        	// 공통코드 함수 호출
        	this.cfnComCdLoad({ id:"commonCodeSearch", cbf:"fnCallBack", dsCPCODE:"WAPWATCHBOX:B" });  //반입초소
        	this.cfnComCdLoad({ id:"commonCodeSearch", cbf:"fnCallBack", dsComcodeList:"TSP:B" });  //작업구분

        	//부모 화면 내용으로 조회조건 세팅
        	this.gOFrame = this.getOwnerFrame();
        	this.divForm.form.divSch.form.edtAplyNo.value = this.gOFrame.aplyNo;  //신청번호
        	this.divForm.form.divSch.form.cboChckpntId.value = this.gOFrame.chckpntId;  //반출입초소
        	this.divForm.form.divSch.form.cboAplySeCd.value = this.gOFrame.aplySeCd;  //작업구분
        	this.divForm.form.divSch.form.edtCstrnNm.value = this.gOFrame.cstrnNm;  //공사명(현재 없음)
        	this.divForm.form.divSch.form.edtCoNm.value = this.gOFrame.sprvsnCoNm;  //회사명
        	this.divForm.form.divSch.form.edtAplyDt.value = this.gOFrame.aplyDt;  //신청일시
        	this.divForm.form.divSch.form.edtRcptDt.value = this.gOFrame.rcptDt;  //접수일시

        	//부모 화면의 조회 데이터 그대로 복사
        	this.dsList.copyData(this.opener.dsList, true);

        	//데이터 개수 표현
        	this.divForm.form.divGrd.form.staTotal01.text = this.dsList.getRowCount();

        	//부모의 반입, 반출에 따라 그리드 표현 바꿈
        	if(this.gOFrame.gubun == "in") {
        		this.divForm.form.divGrd.form.grdList.setRealColSize("head", 6, 0, false);
        		this.divForm.form.divGrd.form.grdList.setRealColSize("body", 6, 0, false);
        		this.divForm.form.divGrd.form.grdList.setCellProperty("summary", 7, "text", "반입합계수량");
        		this.divForm.form.divGrd.form.grdList.setCellProperty("summary", 8, "text", this.gfn_appendComma(this.dsList.getSum('hstryCrynQty')) + " / " + this.gfn_appendComma(this.dsList.getSum('thldQty')));
        		//dataset.parent.gfn_appendComma(dataset.getSum('hstryCrynQty')) + " / " + dataset.parent.gfn_appendComma(dataset.getSum('thldQty'))
        	} else {
        		this.divForm.form.divGrd.form.grdList.setRealColSize("head", 5, 0, false);
        		this.divForm.form.divGrd.form.grdList.setRealColSize("body", 5, 0, false);
        		this.divForm.form.divGrd.form.grdList.setCellProperty("summary", 7, "text", "반출합계수량");
        		this.divForm.form.divGrd.form.grdList.setCellProperty("summary", 8, "text", this.gfn_appendComma(this.dsList.getSum('allRegQty')) + " / " + this.gfn_appendComma(this.dsList.getSum('crynQty')));
        		//dataset.parent.gfn_appendComma(dataset.getSum('allRegQty')) + " / " + dataset.parent.gfn_appendComma(dataset.getSum('crynQty'))
        	}

        	this.resetScroll();
        }

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // 일괄등록
        this.divForm_divGrd_btnGrdRegi_onclick = function(obj,e)
        {
        	//팝업ID, 메세지ID, 팝업콜백 (confirm성 메시지를 사용시 반드시 필요), 확인 창에서 버튼의 명칭 배열, 확인 창에서 버튼 클릭시 리턴할 값 배열, sArg, 메시지치환
        	//일괄등록을 하시겠습니까?
        	this.gfnConfirmMsg("confirmRegi", "CST_001", (sMsgId, oRet) => {
        			if (!JSON.parse(oRet).result) {
        				return false;
        			} else {
        				this.dsList.enableevent = false;
        				this.divForm.form.divGrd.form.grdList.enableredraw = false;

        				this.gOFrame = this.getOwnerFrame();
        				//부모의 반입, 반출에 따라 그리드 표현 바꿈
        				if(this.gOFrame.gubun == "in") {
        					for (let i=0; i<this.dsList.getRowCount(); i++) {
        						const nThldQty   = nexacro.toNumber(this.dsList.getColumn(i, "thldQty"), 0);
        						const nAllRegQty = nexacro.toNumber(this.dsList.getColumn(i, "allRegQty"), 0);

        						if (nThldQty == nAllRegQty) continue;

        				// 		trace(nThldQty);
        				// 		trace(nAllRegQty);
        				// 		trace(nThldQty + " // " + nAllRegQty + " == " + (nThldQty == nAllRegQty));

        						this.dsList.setColumn(i, "mnlInptQty", nThldQty - nAllRegQty);
        						this.dsList.setColumn(i, "hstryCrynQty", nThldQty - nAllRegQty);
        						this.dsList.setColumn(i, "errQty", "0");
        					}

        					this.divForm.form.divGrd.form.grdList.setCellProperty("summary", 8, "text", this.gfn_appendComma(this.dsList.getSum('hstryCrynQty')) + " / " + this.gfn_appendComma(this.dsList.getSum('thldQty')));

        				} else {
        					for (let i=0; i<this.dsList.getRowCount(); i++) {
        						const nCryndQty   = nexacro.toNumber(this.dsList.getColumn(i, "crynQty"), 0);
        						const nAllRegQty = nexacro.toNumber(this.dsList.getColumn(i, "allRegQty"), 0);	//저장한 Qty

        						if (nCryndQty == nAllRegQty) continue;

        				// 		trace(nCryndQty);
        				// 		trace(nAllRegQty);
        				// 		trace(nCryndQty + " // " + nAllRegQty + " == " + (nCryndQty == nAllRegQty));

        						this.dsList.setColumn(i, "mnlInptQty", nCryndQty - nAllRegQty);
        						this.dsList.setColumn(i, "hstryCrynQty", nCryndQty - nAllRegQty);
        						this.dsList.setColumn(i, "errQty", "0");
        					}

        					this.divForm.form.divGrd.form.grdList.setCellProperty("summary", 8, "text", this.gfn_appendComma(this.dsList.getSum('hstryCrynQty')) + " / " + this.gfn_appendComma(this.dsList.getSum('crynQty')));
        				}
        				this.divForm.form.divGrd.form.grdList.enableredraw = true;
        				this.dsList.enableevent = true;
        			}

        		}, null, null, null, ["일괄등록"]);


        };

        //닫기
        this.divPopBtn_btnClose_onclick = function(obj,e)
        {
        	this.close();
        };

        //적용
        this.divPopBtn_btnOk_onclick = function(obj,e)
        {
        	if (!this.gfnDsIsUpdated(this.dsList)) {
        		this.gfnAlertMsg("msg", "MSG_011", ["변경된 내역이 존재하지 않습니다."]);
        		return false;
        	}

        	//팝업ID, 메세지ID, 팝업콜백 (confirm성 메시지를 사용시 반드시 필요), 확인 창에서 버튼의 명칭 배열, 확인 창에서 버튼 클릭시 리턴할 값 배열, sArg, 메시지치환
        	//메인화면에 일괄적용을 하시겠습니까?
        	this.gfnConfirmMsg("confirmRegi", "CST_001", (sMsgId, oRet) => {
        			if (!JSON.parse(oRet).result) {
        				return false;
        			} else {
        				this.close(this.dsList.saveXML());
        			}

        		}, null, null, null, ["메인화면에 일괄적용"]);


        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divSch.form.staLabel02_00_00.addEventHandler("onclick",this.divForm_Div00_sta00_00_01_01_onclick,this);
            this.divForm.form.divSch.form.staLabel02_00_00_00_00.addEventHandler("onclick",this.divForm_Div00_sta00_00_01_01_onclick,this);
            this.divForm.form.divSch.form.staLabel02_00_00_00_01.addEventHandler("onclick",this.divForm_Div00_sta00_00_01_01_onclick,this);
            this.divForm.form.divSch.form.staLabel02_00_00_00_01_00.addEventHandler("onclick",this.divForm_Div00_sta00_00_01_01_onclick,this);
            this.divForm.form.divGrd.form.btnGrdRegi.addEventHandler("onclick",this.divForm_divGrd_btnGrdRegi_onclick,this);
            this.divForm.form.divGrd.form.grdList.addEventHandler("onkeydown",this.divForm_divGrd_grdList_onkeydown,this);
            this.divPopBtn.form.btnClose.addEventHandler("onclick",this.divPopBtn_btnClose_onclick,this);
            this.divPopBtn.form.btnOk.addEventHandler("onclick",this.divPopBtn_btnOk_onclick,this);
        };
        this.loadIncludeScript("CST014P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
