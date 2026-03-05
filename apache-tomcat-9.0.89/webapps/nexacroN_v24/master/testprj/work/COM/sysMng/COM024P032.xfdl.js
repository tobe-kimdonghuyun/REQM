(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM024P032");
            this.set_titletext("변경메뉴목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,580);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCurrMenu", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MODULE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAY_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UP_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRGRM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRGRM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRGRM_KORN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_EXPLN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuthMenuList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","0","100%",null,null,"60",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail",null,"20","300",null,"20","0",null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.divDetail.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan00_01\"/></Contents>");
            this.divForm.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("메뉴경로");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.divDetail.addChild(obj.name, obj);

            obj = new Edit("edt00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.divDetail.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.divDetail.addChild(obj.name, obj);

            obj = new Panel("pan00_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.divDetail.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00\"/></Contents>");
            this.divForm.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.divDetail.form);
            obj.set_taborder("4");
            obj.set_text("메뉴명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.divDetail.addChild(obj.name, obj);

            obj = new Edit("edt00_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.divDetail.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.divDetail.addChild(obj.name, obj);

            obj = new Panel("pan01_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.divDetail.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_01\"/></Contents>");
            this.divForm.form.divDetail.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.divDetail.form);
            obj.set_taborder("7");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01_01\"/></Contents>");
            this.divForm.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.divDetail.form);
            obj.set_taborder("8");
            obj.set_text("프로그램한글명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.divDetail.addChild(obj.name, obj);

            obj = new Edit("edt00_02","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.divDetail.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.divDetail.addChild(obj.name, obj);

            obj = new Panel("pan02_","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.divDetail.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02\"/></Contents>");
            this.divForm.form.divDetail.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100%","96",null,null,null,null,null,null,this.divForm.form.divDetail.form);
            obj.set_taborder("11");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan02_\"/></Contents>");
            this.divForm.form.divDetail.addChild(obj.name, obj);

            obj = new Div("divGrd00","20","20",null,null,"divDetail:20","0",null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_formscrollbartype("none none");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panGrdBtn",null,"0","262","34","0",null,null,null,null,null,this.divForm.form.divGrd00.form);
            obj.set_taborder("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("width");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnGrdRegi00\"/><PanelItem id=\"PanelItem04\" componentid=\"btnGrdDel\"/></Contents>");
            this.divForm.form.divGrd00.addChild(obj.name, obj);

            obj = new Static("staTotal01","0","0","200","34",null,null,null,null,null,null,this.divForm.form.divGrd00.form);
            obj.set_taborder("2");
            obj.set_text("메뉴 목록");
            obj.set_cssclass("sta_WF_Txt60018");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd00.addChild(obj.name, obj);

            obj = new Grid("grd03","0","96","100%","412",null,null,null,null,null,null,this.divForm.form.divGrd00.form);
            obj.set_taborder("4");
            obj.set_binddataset("dsCurrMenu");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseimage("true");
            obj.set_treeusecheckbox("true");
            obj.set_treeuseexpandkey("false");
            obj.set_treeusebutton("use");
            obj.set_treeuseline("true");
            obj.set_treeasynctoggle("false");
            obj.set_cssclass("grd_WF_Tree");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"140\"/></Columns><Rows><Row size=\"40\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NM\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:MENU_LVL\" suppress=\"0\" treecheck=\"bind:CHK\"/></Band></Format></Formats>");
            this.divForm.form.divGrd00.addChild(obj.name, obj);

            obj = new Static("Static00","192","223","100%","46",null,null,null,null,null,null,this.divForm.form.divGrd00.form);
            obj.set_taborder("5");
            obj.set_text("전체메뉴");
            obj.set_cssclass("sta_WF_TreeTitle");
            this.divForm.form.divGrd00.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","44","100%",null,null,"0",null,null,null,null,this.divForm.form.divGrd00.form);
            obj.set_taborder("6");
            obj.set_flexgrow("1");
            obj.set_cssclass("pan_WF_Tree");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Static00\"/><PanelItem id=\"PanelItem00\" componentid=\"grd03\"/></Contents>");
            this.divForm.form.divGrd00.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","316.00","0","69","34",null,null,null,null,null,null,this.divForm.form.divGrd00.form);
            obj.set_taborder("0");
            obj.set_text("전체해제");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd00.addChild(obj.name, obj);

            obj = new Button("btnGrdRegi00","515.00","10","71","34",null,null,null,null,null,null,this.divForm.form.divGrd00.form);
            obj.set_taborder("3");
            obj.set_text("전체선택");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd00.addChild(obj.name, obj);

            obj = new Div("divPopBtn","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","457.00","30","68","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            this.divPopBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.divDetail.form
            obj = new Layout("default","",0,0,this.divForm.form.divDetail.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.pan00.set_taborder("0");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("0","60","100.00%","96",null,null);

                p.staLabel00.set_taborder("1");
                p.staLabel00.set_text("메뉴경로");
                p.staLabel00.set_cssclass("sta_WF_Label");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.edt00.set_taborder("2");
                p.edt00.set_readonly("true");
                p.edt00.move("10.00","158","100%","40",null,null);

                p.pan00_01.set_taborder("3");
                p.pan00_01.set_type("vertical");
                p.pan00_01.set_flexgrow("1");
                p.pan00_01.set_minwidth("");
                p.pan00_01.move("10.00","98","300","86",null,null);

                p.staLabel01_00.set_taborder("4");
                p.staLabel01_00.set_text("메뉴명");
                p.staLabel01_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00.move("10","98","100%","46",null,null);

                p.edt00_01.set_taborder("5");
                p.edt00_01.set_readonly("true");
                p.edt00_01.move("10.00","158","100%","40",null,null);

                p.pan01_01.set_taborder("6");
                p.pan01_01.set_type("vertical");
                p.pan01_01.set_flexgrow("1");
                p.pan01_01.move("10.00","98","300","86",null,null);

                p.pan01.set_taborder("7");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.set_flexshrink("1");
                p.pan01.set_fittocontents("height");
                p.pan01.move("0","60","100.00%","96",null,null);

                p.staLabel03_00.set_taborder("8");
                p.staLabel03_00.set_text("프로그램한글명");
                p.staLabel03_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00.move("10","98","100%","46",null,null);

                p.edt00_02.set_taborder("9");
                p.edt00_02.set_readonly("true");
                p.edt00_02.move("10.00","158","100%","40",null,null);

                p.pan02_.set_taborder("10");
                p.pan02_.set_type("vertical");
                p.pan02_.set_flexgrow("1");
                p.pan02_.move("10.00","98","300","86",null,null);

                p.pan02.set_taborder("11");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","60","100%","96",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.divDetail.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divDetail.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divDetail.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.divDetail.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divDetail.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divDetail.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.divDetail.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divGrd00.form
            obj = new Layout("default","",0,0,this.divForm.form.divGrd00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panGrdBtn.set_taborder("1");
                p.panGrdBtn.set_flexcrossaxisalign("start");
                p.panGrdBtn.set_flexcrossaxiswrapalign("start");
                p.panGrdBtn.set_flexmainaxisalign("end");
                p.panGrdBtn.set_fittocontents("width");
                p.panGrdBtn.set_horizontalgap("10");
                p.panGrdBtn.move(null,"0","262","34","0",null);

                p.staTotal01.set_taborder("2");
                p.staTotal01.set_text("메뉴 목록");
                p.staTotal01.set_cssclass("sta_WF_Txt60018");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.set_fittocontents("width");
                p.staTotal01.move("0","0","200","34",null,null);

                p.grd03.set_taborder("4");
                p.grd03.set_binddataset("dsCurrMenu");
                p.grd03.set_autofittype("col");
                p.grd03.set_treeinitstatus("expand,all");
                p.grd03.set_treeuseimage("true");
                p.grd03.set_treeusecheckbox("true");
                p.grd03.set_treeuseexpandkey("false");
                p.grd03.set_treeusebutton("use");
                p.grd03.set_treeuseline("true");
                p.grd03.set_treeasynctoggle("false");
                p.grd03.set_cssclass("grd_WF_Tree");
                p.grd03.move("0","96","100%","412",null,null);

                p.Static00.set_taborder("5");
                p.Static00.set_text("전체메뉴");
                p.Static00.set_cssclass("sta_WF_TreeTitle");
                p.Static00.move("192","223","100%","46",null,null);

                p.Panel00.set_taborder("6");
                p.Panel00.set_flexgrow("1");
                p.Panel00.set_cssclass("pan_WF_Tree");
                p.Panel00.set_type("vertical");
                p.Panel00.move("0","44","100%",null,null,"0");

                p.btnGrdDel.set_taborder("0");
                p.btnGrdDel.set_text("전체해제");
                p.btnGrdDel.set_cssclass("btn_WF_Small");
                p.btnGrdDel.set_visible("true");
                p.btnGrdDel.set_fittocontents("width");
                p.btnGrdDel.move("316.00","0","69","34",null,null);

                p.btnGrdRegi00.set_taborder("3");
                p.btnGrdRegi00.set_text("전체선택");
                p.btnGrdRegi00.set_cssclass("btn_WF_Small");
                p.btnGrdRegi00.set_visible("true");
                p.btnGrdRegi00.set_fittocontents("width");
                p.btnGrdRegi00.move("515.00","10","71","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divGrd00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divGrd00.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divGrd00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grd03.move("0","96","100%","300",null,null);

                p.Panel00.move("0","44","100.00%","348",null,"108");
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divGrd00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divDetail.set_taborder("1");
                p.divDetail.set_text("Div00");
                p.divDetail.set_cssclass("div_WF_Bg");
                p.divDetail.set_fittocontents("height");
                p.divDetail.set_flexgrow("1");
                p.divDetail.move(null,"20","300",null,"20","0");

                p.divGrd00.set_taborder("0");
                p.divGrd00.set_text("Div01");
                p.divGrd00.set_formscrollbartype("none none");
                p.divGrd00.move("20","20",null,null,"divDetail:20","0");
            	}
            );
            obj.set_verticalgap("30");
            obj.set_horizontalgap("20");
            obj.set_flexwrap("wrap");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("Layout0","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divGrd00.move("20","20",null,"392","20",null);

                p.divDetail.move("20","432",null,"288","20",null);
            	}
            );
            obj.set_verticalgap("30");
            obj.set_horizontalgap("20");
            obj.set_flexwrap("wrap");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divPopBtn.form
            obj = new Layout("default","",0,0,this.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00_00.set_taborder("1");
                p.Button00_00.set_text("확인");
                p.Button00_00.set_cssclass("btn_WF_Yes");
                p.Button00_00.set_fittocontents("width");
                p.Button00_00.move("457.00","30","68","40",null,null);
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
            obj = new Layout("default","Desktop_screen",900,580,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("변경메뉴목록");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrolltype("none");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","0","100%",null,null,"60");

                p.divPopBtn.set_taborder("1");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.move("0",null,null,"60","0","0");
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",480,580,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.set_formscrollbartype("default default");
                p.divForm.set_formscrolltype("both");
                p.divForm.move("0","0","100.00%",null,null,"60");

                p.divPopBtn.move("0",null,null,"60","0","0");
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

        };
        
        // User Script
        this.registerScript("COM024P032.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	COM024P032.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/09/06
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/09/06				김완성						최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.authorMenus;

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
        this.cfnClose = function() {
        	console.log('cfnClose');
        }
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.getSearchTransaction = function() {

        	var strSvcId    = "search";
        	var strSvcUrl   = "sysMng/menuListInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsCurrMenu=dsCurrMenu";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

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
        			this.dsCurrMenu.set_enableevent(false);
        			for(var i=0;i<this.dsAuthMenuList.rowcount;i++) {
        				var sRow = this.dsCurrMenu.findRow("MENU_ID", this.dsAuthMenuList.getColumn(i, "authrtMenuId"));
        				this.dsCurrMenu.setColumn(sRow, "CHK", 1);
        			}
        			this.dsCurrMenu.set_enableevent(true);
        			break;
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function() {
        	this.authorMenus = this.getOwnerFrame().authorMenus;
        	this.dsAuthMenuList.copyData(this.authorMenus);

        	this.getSearchTransaction();
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divPopBtn_Button00_00_onclick = function(obj,e)
        {
        	var objRet = {};
        	var menuArr = [];

        	for(var i=0;i<this.dsCurrMenu.rowcount;i++) {
        		var chk = this.dsCurrMenu.getColumn(i, "CHK");
        		if(chk == 1) {
        			var menuId = this.dsCurrMenu.getColumn(i, "MENU_ID");
        			var menuNm = this.dsCurrMenu.getColumn(i, "MENU_NM");
        			var menuUrl = this.dsCurrMenu.getColumn(i, "MENU_URL");
        			var menu = {
        				'menuId' : menuId,
        				'menuNm' : menuNm,
        				'menuUrl' : menuUrl
        			};
        			menuArr.push(menu);
        		}
        	}
        	objRet = {
        		'menuArr' : menuArr
        	}

        	this.close(JSON.stringify(objRet));
        };

        this.dsCurrMenu_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "CHK")
        	{
        		var nRow = e.row;

        		var nTargetLevel = nexacro.toNumber(obj.getColumn(nRow, "MENU_LVL"));
        		var nUpMenuId = obj.getColumn(nRow, "UP_MENU_ID");
        		var nMenuId = obj.getColumn(nRow, "MENU_ID");
        		var nMoDuleCd = obj.getColumn(nRow, "MODULE_CD");
        		var sValue = e.newvalue;

        		if(nTargetLevel == 0) {
        			var arr = obj.extractRows("MODULE_CD == '" + nMoDuleCd + "'");
        			for(var i=0;i<arr.length;i++) {
        				obj.setColumn(arr[i], "CHK", sValue);
        			}
        		} else if(nTargetLevel == 1) {
        			var ing = true;

        			if(sValue == 0) {
        				var arr = obj.extractRows("MODULE_CD == '" + nMoDuleCd + "' && UP_MENU_ID == '" + nUpMenuId + "'");
        				for(var i=0;i<arr.length;i++) {
        					var chk = obj.getColumn(arr[i], "CHK");
        					if(chk == 1) {
        						ing = false;
        						break;
        					}
        				}
        			}

        			var arr = obj.extractRows("MODULE_CD == '" + nMoDuleCd + "' && MENU_LVL == 2 && UP_MENU_ID == '" + nMenuId + "'");
        			for(var i=0;i<arr.length;i++) {
        				obj.setColumn(arr[i], "CHK", sValue);
        			}

        			if(ing) {
        				var sRow = obj.findRow("MENU_ID", nUpMenuId);
        				obj.setColumn(sRow, "CHK", sValue);
        			}

        		} else if(nTargetLevel == 2) {
        			var ing = true;

        			if(sValue == 0) {
        				var arr = obj.extractRows("MODULE_CD == '" + nMoDuleCd + "' && UP_MENU_ID == '" + nUpMenuId + "'");
        				for(var i=0;i<arr.length;i++) {
        					var chk = obj.getColumn(arr[i], "CHK");
        					if(chk == 1) {
        						ing = false;
        						break;
        					}
        				}
        			}

        			if(ing) {
        				var sRow = obj.findRow("MENU_ID", nUpMenuId);
        				obj.setColumn(sRow, "CHK", sValue);

        				var sing = true;

        				var subUpMenuId = obj.getColumn(sRow, "UP_MENU_ID");

        				if(sValue == 0) {
        					var arr = obj.extractRows("MODULE_CD == '" + nMoDuleCd + "' && UP_MENU_ID == '" + subUpMenuId + "'");
        					for(var i=0;i<arr.length;i++) {
        						var chk = obj.getColumn(arr[i], "CHK");
        						if(chk == 1) {
        							sing = false;
        							break;
        						}
        					}
        				}

        				if(sing) {
        					var subSRow = obj.findRow("MENU_ID", subUpMenuId);
        					obj.setColumn(subSRow, "CHK", sValue);
        				}
        			}
        		}
        	}
        };

        this.divForm_divGrd00_btnGrdRegi00_onclick = function(obj,e)
        {
        	for(var i=0;i<this.dsCurrMenu.rowcount;i++) {
        		this.dsCurrMenu.setColumn(i, "CHK", 1);
        	}
        };

        this.divForm_divGrd00_btnGrdDel_onclick = function(obj,e)
        {
        	for(var i=0;i<this.dsCurrMenu.rowcount;i++) {
        		this.dsCurrMenu.setColumn(i, "CHK", "");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divGrd00.form.btnGrdDel.addEventHandler("onclick",this.divForm_divGrd00_btnGrdDel_onclick,this);
            this.divForm.form.divGrd00.form.btnGrdRegi00.addEventHandler("onclick",this.divForm_divGrd00_btnGrdRegi00_onclick,this);
            this.divPopBtn.form.Button00_00.addEventHandler("onclick",this.divPopBtn_Button00_00_onclick,this);
            this.dsCurrMenu.addEventHandler("oncolumnchanged",this.dsCurrMenu_oncolumnchanged,this);
        };
        this.loadIncludeScript("COM024P032.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
