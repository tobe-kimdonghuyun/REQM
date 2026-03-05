(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM021M04");
            this.set_titletext("SLM 지표 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"slmIdctId\" type=\"STRING\" size=\"256\"/><Column id=\"srvcViewNm\" type=\"STRING\" size=\"256\"/><Column id=\"srvcTrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"mngIdctNm\" type=\"STRING\" size=\"256\"/><Column id=\"msrmtMtdExpln\" type=\"STRING\" size=\"256\"/><Column id=\"indctMtdSe\" type=\"STRING\" size=\"256\"/><Column id=\"wgvl\" type=\"STRING\" size=\"256\"/><Column id=\"evlTrgtSe\" type=\"STRING\" size=\"256\"/><Column id=\"idctClfmlKnd\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIdctCalKnd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSlmEvlTrgt", this);
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIndctMtdSe", this);
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdId\">Y</Col><Col id=\"cdNm\">Y</Col></Row><Row><Col id=\"cdId\">N</Col><Col id=\"cdNm\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"useYn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","70",null,null,"60","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("divGrd","0","0","100.00%","754",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","100%","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("10");
            obj.set_text("SLM 지표 현황");
            obj.set_cssclass("sta_WF_Txt60018");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","40","100","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("11");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTotal\"/><PanelItem id=\"PanelItem01\" componentid=\"staTotal01\"/><PanelItem id=\"PanelItem02\" componentid=\"staTotal02\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("panGrdBtn","1021","40","399","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("6");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("none");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem04\" componentid=\"btnGrdDel\"/><PanelItem id=\"PanelItem05\" componentid=\"btnGrdRegi\"/><PanelItem id=\"PanelItem06\" componentid=\"btnGrdDw\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdList","0","88","100.00%","660",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"300\"/><Column size=\"100\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" text=\"SLM지표ID\"/><Cell col=\"2\" text=\"서비스관점\"/><Cell col=\"3\" text=\"서비스목표\"/><Cell col=\"4\" text=\"관리지표\"/><Cell col=\"5\" text=\"측정방식\"/><Cell col=\"6\" text=\"표현방식\"/><Cell col=\"7\" colspan=\"2\" text=\"가중치\"/><Cell col=\"9\" text=\"평가대상\"/><Cell col=\"10\" text=\"계산식\"/><Cell col=\"11\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"expr:dataset.getRowType(currow) != Dataset.ROWTYPE_INSERT ? &apos;none&apos; : &apos;checkbox&apos;\" text=\"bind:chk\" cssclass=\"expr:dataset.getRowType(currow) != Dataset.ROWTYPE_INSERT ? &apos;cellChk_D&apos; : &apos;&apos;\"/><Cell col=\"1\" text=\"bind:slmIdctId\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &apos;text&apos; : &apos;&apos;\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:srvcViewNm\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &apos;text&apos; : &apos;&apos;\" editmaxlength=\"33\"/><Cell col=\"3\" text=\"bind:srvcTrgtNm\" editmaxlength=\"33\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &apos;text&apos; : &apos;&apos;\"/><Cell col=\"4\" text=\"bind:mngIdctNm\" editmaxlength=\"33\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &apos;text&apos; : &apos;&apos;\"/><Cell col=\"5\" text=\"bind:msrmtMtdExpln\" editmaxlength=\"33\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &apos;text&apos; : &apos;&apos;\"/><Cell col=\"6\" text=\"bind:indctMtdSe\" displaytype=\"combotext\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &apos;combo&apos; : &apos;&apos;\" combodataset=\"dsIndctMtdSe\" combocodecol=\"cdId\" combodatacol=\"cdNm\"/><Cell col=\"7\" text=\"bind:wgvl\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &apos;text&apos; : &apos;&apos;\" editmaxlength=\"5\" textAlign=\"right\" border=\"0px none, 0px none, 1px solid #dddddd\"/><Cell col=\"8\" expr=\"indctMtdSe == &apos;R&apos; ? (wgvl != &apos;&apos; ? &apos;%&apos; : &apos;&apos;) : &apos;&apos;\"/><Cell col=\"9\" text=\"bind:evlTrgtSe\" displaytype=\"combotext\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &apos;combo&apos; : &apos;&apos;\" combodataset=\"dsSlmEvlTrgt\" combocodecol=\"cdId\" combodatacol=\"cdNm\"/><Cell col=\"10\" text=\"bind:idctClfmlKnd\" combodataset=\"dsIdctCalKnd\" combocodecol=\"cdId\" combodatacol=\"cdVl01\" displaytype=\"combotext\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &apos;combo&apos; : &apos;&apos;\"/><Cell col=\"11\" text=\"bind:useYn\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"dsUseYn\" combocodecol=\"cdId\" combodatacol=\"cdNm\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal00","94.00","60","65","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("목록수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Combo("cmbGrdList","169.00","60","80","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","316.00","60","45","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdRegi","1208.00","60","45","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDw","426.00","60","124","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("5");
            obj.set_text("다운로드(엑셀)");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","40","27","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("9");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal01","27","40","43","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("8");
            obj.set_text("1000");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","70","40","30","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("7");
            obj.set_text("건");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("Panel01","151","0","155","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("12");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTotal00\"/><PanelItem id=\"PanelItem01\" componentid=\"cmbGrdList\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btn00_01","290.00","20","70","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_No");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnSave","410.00","20","68","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panBtn","0","400","100%","60",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("none");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"btnSave\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("10");
                p.Static00.set_text("SLM 지표 현황");
                p.Static00.set_cssclass("sta_WF_Txt60018");
                p.Static00.move("0","0","100%","34",null,null);

                p.Panel00.set_taborder("11");
                p.Panel00.set_fittocontents("width");
                p.Panel00.move("0","40","100","34",null,null);

                p.panGrdBtn.set_taborder("6");
                p.panGrdBtn.set_flexcrossaxisalign("start");
                p.panGrdBtn.set_flexcrossaxiswrapalign("start");
                p.panGrdBtn.set_flexmainaxisalign("end");
                p.panGrdBtn.set_horizontalgap("10");
                p.panGrdBtn.set_fittocontents("none");
                p.panGrdBtn.set_flexgrow("1");
                p.panGrdBtn.move("1021","40","399","34",null,null);

                p.grdList.set_taborder("0");
                p.grdList.set_binddataset("dsList");
                p.grdList.set_autofittype("col");
                p.grdList.set_autoenter("select");
                p.grdList.move("0","88","100.00%","660",null,null);

                p.staTotal00.set_taborder("1");
                p.staTotal00.set_text("목록수");
                p.staTotal00.set_cssclass("sta_WF_SchLabel");
                p.staTotal00.set_fittocontents("width");
                p.staTotal00.set_visible("false");
                p.staTotal00.move("94.00","60","65","34",null,null);

                p.cmbGrdList.set_taborder("2");
                p.cmbGrdList.set_visible("false");
                p.cmbGrdList.set_text("10");
                p.cmbGrdList.set_value("");
                p.cmbGrdList.set_index("-1");
                p.cmbGrdList.move("169.00","60","80","34",null,null);

                p.btnGrdDel.set_taborder("3");
                p.btnGrdDel.set_text("삭제");
                p.btnGrdDel.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel.set_visible("true");
                p.btnGrdDel.set_fittocontents("width");
                p.btnGrdDel.move("316.00","60","45","34",null,null);

                p.btnGrdRegi.set_taborder("4");
                p.btnGrdRegi.set_text("추가");
                p.btnGrdRegi.set_cssclass("btn_WF_SmallBlack");
                p.btnGrdRegi.set_visible("true");
                p.btnGrdRegi.set_fittocontents("width");
                p.btnGrdRegi.move("1208.00","60","45","34",null,null);

                p.btnGrdDw.set_taborder("5");
                p.btnGrdDw.set_text("다운로드(엑셀)");
                p.btnGrdDw.set_cssclass("btn_WF_GrdDw");
                p.btnGrdDw.set_visible("false");
                p.btnGrdDw.set_fittocontents("width");
                p.btnGrdDw.move("426.00","60","124","34",null,null);

                p.staTotal.set_taborder("9");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","40","27","34",null,null);

                p.staTotal01.set_taborder("8");
                p.staTotal01.set_text("1000");
                p.staTotal01.set_cssclass("sta_WF_Total");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.set_fittocontents("width");
                p.staTotal01.move("27","40","43","34",null,null);

                p.staTotal02.set_taborder("7");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.set_fittocontents("width");
                p.staTotal02.move("70","40","30","34",null,null);

                p.Panel01.set_taborder("12");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_fittocontents("width");
                p.Panel01.move("151","0","155","34",null,null);
            	}
            );
            obj.set_verticalgap("10");
            obj.set_type("horizontal");
            obj.set_tabledirection("horizontal");
            obj.set_horizontalgap("0");
            obj.set_flexwrap("wrap");
            this.divForm.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdList.set_autofittype("none");
            	}
            );
            obj.set_verticalgap("8");
            obj.set_type("horizontal");
            obj.set_tabledirection("horizontal");
            obj.set_horizontalgap("0");
            obj.set_flexwrap("wrap");
            this.divForm.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divGrd.set_taborder("0");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","0","100.00%","754",null,null);

                p.btn00_01.set_taborder("1");
                p.btn00_01.set_text("닫기");
                p.btn00_01.set_cssclass("btn_WF_No");
                p.btn00_01.set_visible("false");
                p.btn00_01.set_fittocontents("width");
                p.btn00_01.move("290.00","20","70","40",null,null);

                p.btnSave.set_taborder("2");
                p.btnSave.set_text("확인");
                p.btnSave.set_cssclass("btn_WF_Yes");
                p.btnSave.set_fittocontents("width");
                p.btnSave.move("410.00","20","68","40",null,null);

                p.panBtn.set_taborder("3");
                p.panBtn.set_horizontalgap("10");
                p.panBtn.set_fittocontents("none");
                p.panBtn.set_flexmainaxisalign("center");
                p.panBtn.set_flexcrossaxisalign("center");
                p.panBtn.move("0","400","100%","60",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("10");
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
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("SLM 지표 관리");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.set_fittocontents("height");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","70",null,null,"60","0");

                p.divTitle.set_taborder("1");
                p.divTitle.set_text("");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.set_formscrolltype("none");
                p.divTitle.set_maxwidth("");
                p.divTitle.move("0","0",null,"50","60",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divTitle.move("0","0",null,"50","0",null);

                p.divForm.move("0","70",null,null,"0","0");
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divTitle.form.divSch.form.divCal.form.calBgngYmd","value","dsSearch","sDate");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divTitle.form.divSch.form.divCal.form.calEndYmd","value","dsSearch","eDate");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divTitle.form.divSch.form.edtCtrtNo","value","dsSearch","ctrtNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divTitle.form.divSch.form.edtBrno","value","dsSearch","brno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divTitle.form.divSch.form.edtCtrtNm","value","dsSearch","ctrtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divTitle.form.divSch.form.edtCoNm","value","dsSearch","coNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divTitle.form.divSch.form.cmbMnlMngSeMnl","value","dsSearch","autoMnlRegSe");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divTitle.form.divGrd.form.staTotal01","text","dsPage","totalRecordCount");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.registerScript("COM021M04.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	COM021M04.xfdl
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
        	var nRow = this.dsList.addRow();
        	this.dsList.setColumn(nRow, "chk", "1");
        	this.dsList.setColumn(nRow, "useYn", "Y");
        };

        //삭제
        this.cfnDel = function ()
        {
        	var fRow = this.dsList.findRow("chk", "1");
        	if(fRow > -1) {
        		this.gfnConfirmMsg("delete", "MSG_005", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        	} else {
        		this.gfnAlertMsg("msg", "MSG_006");
        	}
        };

        //저장
        this.cfnSave = function ()
        {
        	if(this.gfnDsIsUpdated(this.dsList) != true) {
        		this.gfnAlertMsg("msg", "MSG_004");
        	} else {
        		var arr = [ { "id" : "slmIdctId", "title" : "SLM지표ID"}
        				  , { "id" : "srvcViewNm", "title" : "서비스관점"}
        				  , { "id" : "srvcTrgtNm", "title" : "서비스목표"}
        				  , { "id" : "mngIdctNm", "title" : "관리지표"}
        				  , { "id" : "indctMtdSe", "title" : "표현방식"}
        				  , { "id" : "wgvl", "title" : "가중치"}
        				  , { "id" : "evlTrgtSe", "title" : "평가대상"}
        				  , { "id" : "idctClfmlKnd", "title" : "계산식"}
        				  , { "id" : "useYn", "title" : "사용여부"}
        				  ];
        		var grd = this.divForm.form.divGrd.form.grdList;

        		if(this.fnGrdValidation(arr, grd) != true) {
        			return;
        		}

        		this.gfnConfirmMsg("save", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        	}
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.getSearchTransaction = function()
        {
        	var strSvcId    = "search";
        	var strSvcUrl   = "slm/slmIdctStngInfoInq.do";
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

        // 데이터 저장
        this.saveTransaction = function()
        {
        	var strSvcId    = "save";
        	var strSvcUrl   = "slm/slmIdctStngInfoStrg.do";
        	var inData      = "dsList=dsList:U";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= false;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
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
        		case "save":
        			this.gfnAlertMsg("saveAfter", "MSG_001", "", "msgCallback");
        			break;
        	}
        };

        /**
        	sPopupId	// 페세지창을 구분하기 위한 ID
        	sRtn		// 메세지창에서 리턴 해주는 변수값 (JSON 형태의 스트링 리턴)
        **/
        this.msgCallback = function(sPopupId, sRtn)
        {
        	var oRtn = JSON.parse(sRtn);
        	if(sPopupId == "save") {
        		if(oRtn.result == "Y") {
        			this.saveTransaction();
        		}
        	}
        	else if(sPopupId == "saveAfter") {
        		this.cfnSearch();
        	}
        	else if(sPopupId == "delete") {
        		if(oRtn.result == "Y") {
        			var chk = this.dsList.extractRows("chk == " + 1);
        			if(chk.length > 0) {
        				this.dsList.deleteMultiRows(chk);
        			}
        		}
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	this.gfnCmmCode("idctCalKnd", "dsIdctCalKnd", "SLM_IDCT_CAL_TYPE", "");
        	this.gfnCmmCode("slmEvlTrgt", "dsSlmEvlTrgt", "SLM_EVL_TRGT", "");
        	this.gfnCmmCode("indctMtdSe", "dsIndctMtdSe", "INDCT_MTD_SE", "");
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.fnGrdValidation = function(arr, grd)
        {
        	var ds = eval("this." + grd.binddataset);
        	for(var a=0; a<arr.length; a++) {
        		var cell = grd.getBindCellIndex("body", arr[a].id);
        		for(var i=0; i<ds.getRowCount(); i++) {
        			if(ds.getRowType(i) == Dataset.ROWTYPE_INSERT || ds.getRowType(i) == Dataset.ROWTYPE_UPDATE) {
        				if(this.gfnIsNull(ds.getColumn(i, arr[a].id)) == true) {
        					grd.setCellPos(cell, i);
        					this.gfnAlertMsg("msg", "CST_004", [arr[a].title]);
        					return false;
        				}
        			}
        		}
        	}

        	return true;
        };

        // 신규 건만 선택 가능
        this.dsList_cancolumnchange = function(obj,e)
        {
        	if(e.columnid == "chk") {
        		if(e.newvalue == "1") {
        			if(obj.getRowType(e.row) != Dataset.ROWTYPE_INSERT) {
        				return false;
        			}
        		}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divGrd.form.btnGrdDel.addEventHandler("onclick",this.cfnDel,this);
            this.divForm.form.divGrd.form.btnGrdRegi.addEventHandler("onclick",this.cfnAdd,this);
            this.divForm.form.btnSave.addEventHandler("onclick",this.cfnSave,this);
            this.dsList.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
        };
        this.loadIncludeScript("COM021M04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
