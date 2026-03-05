(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM024M12");
            this.set_titletext("사용자 계정변경 알람 정보관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"alrmArtclId\" type=\"STRING\" size=\"256\"/><Column id=\"alrmArtclNm\" type=\"STRING\" size=\"256\"/><Column id=\"alrmMsgCn\" type=\"STRING\" size=\"256\"/><Column id=\"sqlCn\" type=\"STRING\" size=\"256\"/><Column id=\"alrmTrgt\" type=\"STRING\" size=\"256\"/><Column id=\"crtrVwpnt\" type=\"STRING\" size=\"256\"/><Column id=\"prd\" type=\"STRING\" size=\"256\"/><Column id=\"intrv\" type=\"STRING\" size=\"256\"/><Column id=\"reptYn\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo1", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo2", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo3", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo4", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo5", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdTypeId\">REPT_YN</Col><Col id=\"cdId\">Y</Col><Col id=\"cdNm\">반복</Col></Row><Row><Col id=\"cdTypeId\">REPT_YN</Col><Col id=\"cdId\">N</Col><Col id=\"cdNm\">1회</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo6", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdTypeId\">USE_YN</Col><Col id=\"cdId\">Y</Col><Col id=\"cdNm\">사용</Col></Row><Row><Col id=\"cdTypeId\">USE_YN</Col><Col id=\"cdId\">N</Col><Col id=\"cdNm\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,"50",null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","divTitle:10",null,"540","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("sub_tit01","0","0","100%","60",null,null,null,null,"60",null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div01","50.00","478","100.00%","480",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("Static00","1406","315","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("9");
            obj.set_text("(한글 500자 이내)");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_LoginInfo02");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Div("divGrd","0","30","100%","354",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn",null,"0","450","34","0",null,null,null,null,null,this.divForm.form.Div01.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("width");
            obj.set_horizontalgap("10");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"staTotal00\"/><PanelItem id=\"PanelItem01\" componentid=\"Combo00\"/></Contents>");
            this.divForm.form.Div01.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","PanelGrdBtn:10","100.00%","310",null,null,null,null,null,null,this.divForm.form.Div01.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.getSetter("verticalAlign").set("top");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"알람대상\"/><Cell col=\"1\" text=\"알람항목ID\"/><Cell col=\"2\" text=\"알람항목명\"/><Cell col=\"3\" text=\"기준시점\"/><Cell col=\"4\" text=\"개월\"/><Cell col=\"5\" text=\"주기\"/><Cell col=\"6\" text=\"반복여부\"/><Cell col=\"7\" text=\"사용여부\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:alrmTrgt\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"dsCombo2\" combocodecol=\"cdId\" combodatacol=\"cdNm\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:alrmArtclId\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:alrmArtclNm\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:crtrVwpnt\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"dsCombo3\" combocodecol=\"cdId\" combodatacol=\"cdNm\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:intrv\" textAlign=\"center\" edittype=\"normal\"/><Cell col=\"5\" text=\"bind:prd\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"dsCombo4\" combocodecol=\"cdId\" combodatacol=\"cdNm\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:reptYn\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"dsCombo5\" combocodecol=\"cdId\" combodatacol=\"cdNm\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:useYn\" cssclass=\"CellEnd\" edittype=\"combo\" displaytype=\"combotext\" combodataset=\"dsCombo6\" combocodecol=\"cdId\" combodatacol=\"cdNm\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divForm.form.Div01.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","200","34",null,null,null,null,null,null,this.divForm.form.Div01.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("총 <fc v=\'#1e4ebe\'>100</fc>건");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            this.divForm.form.Div01.form.divGrd.addChild(obj.name, obj);

            obj = new Combo("Combo00","1230","0","80","34",null,null,null,null,null,null,this.divForm.form.Div01.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div01.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal00","1165","0","54","34",null,null,null,null,null,null,this.divForm.form.Div01.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("목록수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divForm.form.Div01.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("pan01_01","10.00","98","950","354",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("1");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divGrd\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100%","375",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("2");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staMsgCn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("3");
            obj.set_text("알람 메시지 내용");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan02_01","10.00","98","100%","100%",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staMsgCn\"/><PanelItem id=\"PanelItem03\" componentid=\"txaMsgCn\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100.00%","163.87",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("5");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan02_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Static00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staSqlCn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("6");
            obj.set_text("SQL 내용 (알람정보 생성용 SQL)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan03_01","10.00","98","100%","100%",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSqlCn\"/><PanelItem id=\"PanelItem03\" componentid=\"txaSqlCn\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan03","0","60","100%","200",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("8");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan03_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new TextArea("txaMsgCn","200.00","728","100%","120",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("10");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new TextArea("txaSqlCn","200.00","728","100%","120",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("11");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00","30","50","80%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("사용자 계정변경 알람 관리 항목");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinAlrm","1390.00","18","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("true");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02","710.00","50","20%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 20px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnMinAlrm\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divPopBtn","0","divForm:20",null,"60","60",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","457.00","30","200","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            this.divPopBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.Div01.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.PanelGrdBtn.set_taborder("4");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_fittocontents("width");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.set_visible("false");
                p.PanelGrdBtn.move(null,"0","450","34","0",null);

                p.Grid00.set_taborder("0");
                p.Grid00.set_binddataset("dsList");
                p.Grid00.getSetter("verticalAlign").set("top");
                p.Grid00.set_autofittype("col");
                p.Grid00.move("0","PanelGrdBtn:10","100.00%","310",null,null);

                p.staTotal.set_taborder("1");
                p.staTotal.set_text("총 <fc v=\'#1e4ebe\'>100</fc>건");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.move("0","0","200","34",null,null);

                p.Combo00.set_taborder("3");
                p.Combo00.set_text("10");
                p.Combo00.set_value("");
                p.Combo00.set_index("-1");
                p.Combo00.move("1230","0","80","34",null,null);

                p.staTotal00.set_taborder("2");
                p.staTotal00.set_text("목록수");
                p.staTotal00.set_cssclass("sta_WF_SchLabel");
                p.staTotal00.set_fittocontents("width");
                p.staTotal00.move("1165","0","54","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.Div01.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div01.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div01.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Grid00.set_autofittype("none");

                p.btnGrdRegi.set_visible("false");

                p.btnGrdDel.set_visible("false");
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.Div01.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div01.form.divGrd.form
            obj = new Layout("Phone_screen","",0,0,this.divForm.form.Div01.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Grid00.set_autofittype("none");
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.Div01.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div01.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("9");
                p.Static00.set_text("(한글 500자 이내)");
                p.Static00.set_textAlign("right");
                p.Static00.set_cssclass("sta_WF_LoginInfo02");
                p.Static00.move("1406","315","100%","40",null,null);

                p.divGrd.set_taborder("0");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","30","100%","354",null,null);

                p.pan01_01.set_taborder("1");
                p.pan01_01.set_type("vertical");
                p.pan01_01.set_flexgrow("1");
                p.pan01_01.set_minwidth("");
                p.pan01_01.move("10.00","98","950","354",null,null);

                p.pan01.set_taborder("2");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_fittocontents("height");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("10px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.move("0","60","100%","375",null,null);

                p.staMsgCn.set_taborder("3");
                p.staMsgCn.set_text("알람 메시지 내용");
                p.staMsgCn.set_cssclass("sta_WF_Label");
                p.staMsgCn.move("10","98","100%","46",null,null);

                p.pan02_01.set_taborder("4");
                p.pan02_01.set_type("vertical");
                p.pan02_01.set_flexgrow("1");
                p.pan02_01.set_minwidth("");
                p.pan02_01.move("10.00","98","100%","100%",null,null);

                p.pan02.set_taborder("5");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","60","100.00%","163.87",null,null);

                p.staSqlCn.set_taborder("6");
                p.staSqlCn.set_text("SQL 내용 (알람정보 생성용 SQL)");
                p.staSqlCn.set_cssclass("sta_WF_Label");
                p.staSqlCn.move("10","98","100%","46",null,null);

                p.pan03_01.set_taborder("7");
                p.pan03_01.set_type("vertical");
                p.pan03_01.set_flexgrow("1");
                p.pan03_01.set_minwidth("");
                p.pan03_01.move("10.00","98","100%","100%",null,null);

                p.pan03.set_taborder("8");
                p.pan03.set_horizontalgap("20");
                p.pan03.set_flexcrossaxiswrapalign("start");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_fittocontents("height");
                p.pan03.set_verticalgap("0");
                p.pan03.set_spacing("0px 20px 10px 20px");
                p.pan03.set_cssclass("pal_WF_DtlBg");
                p.pan03.move("0","60","100%","200",null,null);

                p.txaMsgCn.set_taborder("10");
                p.txaMsgCn.move("200.00","728","100%","120",null,null);

                p.txaSqlCn.set_taborder("11");
                p.txaSqlCn.move("200.00","728","100%","120",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div01.form
            obj = new Layout("Phone_screen","",0,0,this.divForm.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sub_tit01.set_taborder("4");
                p.sub_tit01.set_background("#ffffff");
                p.sub_tit01.set_flexcrossaxisalign("end");
                p.sub_tit01.set_minheight("60");
                p.sub_tit01.set_maxheight("");
                p.sub_tit01.move("0","0","100%","60",null,null);

                p.Div01.set_taborder("0");
                p.Div01.set_text("Div00");
                p.Div01.set_cssclass("div_WF_Bg");
                p.Div01.set_fittocontents("height");
                p.Div01.move("50.00","478","100.00%","480",null,null);

                p.staSubTitle02_00.set_taborder("1");
                p.staSubTitle02_00.set_text("사용자 계정변경 알람 관리 항목");
                p.staSubTitle02_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00.move("30","50","80%","50",null,null);

                p.btnMinAlrm.set_taborder("2");
                p.btnMinAlrm.set_cssclass("btn_WF_ACMinus");
                p.btnMinAlrm.set_visible("true");
                p.btnMinAlrm.move("1390.00","18","34","34",null,null);

                p.Panel01_02.set_taborder("3");
                p.Panel01_02.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02.set_spacing("0px 20px");
                p.Panel01_02.set_horizontalgap("10");
                p.Panel01_02.set_flexcrossaxisalign("center");
                p.Panel01_02.set_flexmainaxisalign("end");
                p.Panel01_02.move("710.00","50","20%","50",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("Phone_screen","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_type("vertical");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divPopBtn.form
            obj = new Layout("default","",0,0,this.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00_00.set_taborder("0");
                p.Button00_00.set_text("확인");
                p.Button00_00.set_cssclass("btn_WF_Yes");
                p.Button00_00.set_fittocontents("width");
                p.Button00_00.move("457.00","30","200","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("20");
            obj.set_spacing("0 20px");
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
            obj.set_flexmainaxisalign("center");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_horizontalgap("20");
            obj.set_spacing("0 20px");
            this.divPopBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divPopBtn.form
            obj = new Layout("Phone_screen","",0,0,this.divPopBtn.form,
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
            obj.set_spacing("0 20px");
            this.divPopBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("사용자 계정변경 알람 정보관리");

                p.divTitle.set_taborder("0");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.set_minheight("50");
                p.divTitle.set_maxheight("");
                p.divTitle.move("0","0",null,"50","60",null);

                p.divForm.set_taborder("1");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("height");
                p.divForm.move("0","divTitle:10",null,"540","60",null);

                p.divPopBtn.set_taborder("2");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.move("0","divForm:20",null,"60","60",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Phone_screen","Phone_screen",480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.move("0","divTitle:10",null,"540","0",null);

                p.divTitle.move("0","0",null,"50","0",null);

                p.divPopBtn.move("0","divForm:20",null,"60","0",null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.registerScript("COM024M12.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	test.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/08/08
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/12/02			조규완					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.nRow;
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
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.getSearchTransaction = function()
        {
        	var strSvcId    = "search";
        	var strSvcUrl   = "sysMng/userAcntChgEnvInq.do";
        	var inData      = "";
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
        	var strSvcUrl   = "sysMng/userAcntChgEnvStrg.do";
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
        		case "search":
        			var msgCn = this.dsList.getColumn(0, "alrmMsgCn");
        			var sqlCn = this.dsList.getColumn(0, "sqlCn");
        			this.divForm.form.Div01.form.txaMsgCn.value = msgCn;
        			this.divForm.form.Div01.form.txaSqlCn.value = sqlCn;
        			this.divForm.form.Div01.form.divGrd.form.staTotal.text = "총 " + this.dsList.rowcount + "건";
        			break;
        		case "save" :
        			this.gfnAlertMsg("save", "MSG_001");
        			this.cfnSearch();
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
        	if(sPopupId == "save_confirm") {
        		if(oRtn.result == "Y") {
        			this.saveTransaction();
        		}
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	this.gfnCmmCode("combo1", "dsCombo1", "ALRM_ARTCL", "");
        	this.gfnCmmCode("combo2", "dsCombo2", "ALRM_TRGT", "");
        	this.gfnCmmCode("combo3", "dsCombo3", "CRTR_VWPNT", "");
        	this.gfnCmmCode("combo4", "dsCombo4", "PRD_SE", "");
        }
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divForm_Div01_divGrd_Grid00_oncellclick = function(obj,e)
        {
        	this.nRow = e.row;

        	var msgCn = this.dsList.getColumn(this.nRow, "alrmMsgCn");
        	var sqlCn = this.dsList.getColumn(this.nRow, "sqlCn");
        	this.divForm.form.Div01.form.txaMsgCn.value = msgCn;
        	this.divForm.form.Div01.form.txaSqlCn.value = sqlCn;
        };

        this.divForm_Div01_txaMsgCn_onkillfocus = function(obj,e)
        {
        	this.dsList.setColumn(this.nRow, "alrmMsgCn", obj.value);
        };

        this.divForm_Div01_txaSqlCn_onkillfocus = function(obj,e)
        {
        	this.dsList.setColumn(this.nRow, "sqlCn", obj.value);
        };

        this.divPopBtn_Button00_00_onclick = function(obj,e)
        {
        	this.gfnConfirmMsg("save_confirm", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        };

        this.btnMin_onclick = function(obj,e)
        {
        	var objNm = obj.name;
        	var objClass = obj.cssclass;
        	var objDiv = null;
        	var divVisible = false;

        	// 해당 div 찾아줌.
        	if(objNm == "btnMinAlrm") {
        		objDiv = this.divForm.form.Div01;
        	} else{
        		return;
        	}

        	if (objClass == "btn_WF_ACMinus") { // - 버튼 일때
        		divVisible = false; // visible 세팅
        		obj.cssclass = "btn_WF_ACPlus"; // 클래스 수정
        	} else if (objClass == "btn_WF_ACPlus") { // + 버튼 일때
        		divVisible = true; // visible 세팅
        		obj.cssclass = "btn_WF_ACMinus";
        	}

        	objDiv.visible = divVisible;
        	this.resetScroll();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.Div01.form.divGrd.form.Grid00.addEventHandler("oncellclick",this.divForm_Div01_divGrd_Grid00_oncellclick,this);
            this.divForm.form.Div01.form.txaMsgCn.addEventHandler("onkillfocus",this.divForm_Div01_txaMsgCn_onkillfocus,this);
            this.divForm.form.Div01.form.txaSqlCn.addEventHandler("onkillfocus",this.divForm_Div01_txaSqlCn_onkillfocus,this);
            this.divForm.form.btnMinAlrm.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divPopBtn.form.Button00_00.addEventHandler("onclick",this.divPopBtn_Button00_00_onclick,this);
        };
        this.loadIncludeScript("COM024M12.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
