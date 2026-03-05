(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM041M01");
            this.set_titletext("그룹메뉴 정보 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"grpId\" type=\"STRING\" size=\"256\"/><Column id=\"procId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrpList", this);
            obj._setContents("<ColumnInfo><Column id=\"bkmkUserSe\" type=\"STRING\" size=\"256\"/><Column id=\"grpId\" type=\"STRING\" size=\"256\"/><Column id=\"grpNm\" type=\"STRING\" size=\"256\"/><Column id=\"grpIcon\" type=\"STRING\" size=\"256\"/><Column id=\"grpOrdr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProcList", this);
            obj._setContents("<ColumnInfo><Column id=\"bkmkUserSe\" type=\"STRING\" size=\"256\"/><Column id=\"grpId\" type=\"STRING\" size=\"256\"/><Column id=\"procId\" type=\"STRING\" size=\"256\"/><Column id=\"procNm\" type=\"STRING\" size=\"256\"/><Column id=\"procImg\" type=\"STRING\" size=\"256\"/><Column id=\"procOrdr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenuList", this);
            obj._setContents("<ColumnInfo><Column id=\"bkmkUserSe\" type=\"STRING\" size=\"256\"/><Column id=\"grpId\" type=\"STRING\" size=\"256\"/><Column id=\"procId\" type=\"STRING\" size=\"256\"/><Column id=\"menuId\" type=\"STRING\" size=\"256\"/><Column id=\"menuNm\" type=\"STRING\" size=\"256\"/><Column id=\"menuIcon\" type=\"STRING\" size=\"256\"/><Column id=\"menuOrdr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuthMenuList", this);
            obj._setContents("<ColumnInfo><Column id=\"authrtMenuId\" type=\"STRING\" size=\"256\"/><Column id=\"authrtMenuNm\" type=\"STRING\" size=\"256\"/><Column id=\"authrtId\" type=\"STRING\" size=\"256\"/><Column id=\"authrtNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divGuide","1590.00","135","450","385",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("false");
            obj.set_cssclass("div_GD_Tip");
            this.addChild(obj.name, obj);

            obj = new Div("divTitle","0","0",null,"60","60",null,null,null,"50",null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","70",null,"728","60",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","0","30","100.00%","728",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divGrd00","390.00","34","100%","724",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","0","100%","34",null,null,null,null,null,null,this.divForm.form.Div01.form.divGrd00.form);
            obj.set_taborder("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staTotal\"/><PanelItem id=\"PanelItem01\" componentid=\"PanelGrdBtn\"/></Contents>");
            this.divForm.form.Div01.form.divGrd00.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn","313.00","34","50%","34",null,null,null,null,null,null,this.divForm.form.Div01.form.divGrd00.form);
            obj.set_taborder("0");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"btnGrdDel\"/><PanelItem id=\"PanelItem02\" componentid=\"btnGrdRegi\"/></Contents>");
            this.divForm.form.Div01.form.divGrd00.addChild(obj.name, obj);

            obj = new Grid("grdGrpList","178","Panel00:0","100.00%","680",null,null,null,null,null,null,this.divForm.form.Div01.form.divGrd00.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsGrpList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"50\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"그룹메뉴명\"/><Cell col=\"1\" text=\"그룹메뉴아이콘\"/><Cell col=\"2\" text=\"순서\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:grpNm\" edittype=\"text\" editmaxlength=\"30\"/><Cell col=\"1\" text=\"bind:grpIcon\" editmaxlength=\"30\" edittype=\"text\" cssclass=\"CellLink\"/><Cell col=\"2\" text=\"bind:grpOrdr\" cssclass=\"CellEnd\" textAlign=\"center\" displaytype=\"number\" edittype=\"text\" editmaxlength=\"3\" editinputtype=\"number\"/></Band></Format></Formats>");
            this.divForm.form.Div01.form.divGrd00.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","316.00","0","84","34",null,null,null,null,null,null,this.divForm.form.Div01.form.divGrd00.form);
            obj.set_taborder("3");
            obj.set_text("그룹삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            obj.set_enable("false");
            this.divForm.form.Div01.form.divGrd00.addChild(obj.name, obj);

            obj = new Button("btnGrdRegi","371.00","0","84","34",null,null,null,null,null,null,this.divForm.form.Div01.form.divGrd00.form);
            obj.set_taborder("4");
            obj.set_text("그룹추가");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.Div01.form.divGrd00.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","50%","34",null,null,null,null,null,null,this.divForm.form.Div01.form.divGrd00.form);
            obj.set_taborder("5");
            obj.set_text("그룹메뉴 목록");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_flexgrow("1");
            this.divForm.form.Div01.form.divGrd00.addChild(obj.name, obj);

            obj = new Panel("Panel00","1063","720","100%","728",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divGrd00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"divGrd00_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Div("divGrd00_00","390.00","34","100%","404",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","0","0","100.00%","34",null,null,null,null,null,null,this.divForm.form.Div01.form.divGrd00_00.form);
            obj.set_taborder("1");
            obj.set_flexwrap("nowrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staTotal\"/><PanelItem id=\"PanelItem01\" componentid=\"PanelGrdBtn00\"/></Contents>");
            this.divForm.form.Div01.form.divGrd00_00.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn00","99","0","50%","34",null,null,null,null,null,null,this.divForm.form.Div01.form.divGrd00_00.form);
            obj.set_taborder("0");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"btnGrdDel\"/><PanelItem id=\"PanelItem02\" componentid=\"btnGrdRegi\"/></Contents>");
            this.divForm.form.Div01.form.divGrd00_00.addChild(obj.name, obj);

            obj = new Grid("grdProcList","0","44","100.00%","360",null,null,null,null,null,null,this.divForm.form.Div01.form.divGrd00_00.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsProcList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"50\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"처리절차명\"/><Cell col=\"1\" text=\"처리절차안내이미지\"/><Cell col=\"2\" text=\"순서\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:procNm\" edittype=\"text\" editmaxlength=\"30\"/><Cell col=\"1\" text=\"설정\" edittype=\"button\" editmaxlength=\"30\" cssclass=\"CellLink\" displaytype=\"buttoncontrol\"/><Cell col=\"2\" text=\"bind:procOrdr\" cssclass=\"CellEnd\" textAlign=\"center\" edittype=\"text\" displaytype=\"number\" editmaxlength=\"3\" editinputtype=\"number\"/></Band></Format></Formats>");
            this.divForm.form.Div01.form.divGrd00_00.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","316.00","0","84","34",null,null,null,null,null,null,this.divForm.form.Div01.form.divGrd00_00.form);
            obj.set_taborder("3");
            obj.set_text("절차삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            obj.set_enable("false");
            this.divForm.form.Div01.form.divGrd00_00.addChild(obj.name, obj);

            obj = new Button("btnGrdRegi","371.00","0","84","34",null,null,null,null,null,null,this.divForm.form.Div01.form.divGrd00_00.form);
            obj.set_taborder("4");
            obj.set_text("절차추가");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.Div01.form.divGrd00_00.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","50%","34",null,null,null,null,null,null,this.divForm.form.Div01.form.divGrd00_00.form);
            obj.set_taborder("5");
            obj.set_text("처리절차 목록");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_flexgrow("1");
            this.divForm.form.Div01.form.divGrd00_00.addChild(obj.name, obj);

            obj = new Div("divGrd00_00_00","390.00","34","100%","314",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","0","0","100.00%","34",null,null,null,null,null,null,this.divForm.form.Div01.form.divGrd00_00_00.form);
            obj.set_taborder("1");
            obj.set_flexwrap("nowrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staTotal\"/><PanelItem id=\"PanelItem01\" componentid=\"PanelGrdBtn00\"/></Contents>");
            this.divForm.form.Div01.form.divGrd00_00_00.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn00","99","0","50%","34",null,null,null,null,null,null,this.divForm.form.Div01.form.divGrd00_00_00.form);
            obj.set_taborder("0");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"btnGrdDel\"/><PanelItem id=\"PanelItem02\" componentid=\"btnGrdRegi\"/></Contents>");
            this.divForm.form.Div01.form.divGrd00_00_00.addChild(obj.name, obj);

            obj = new Grid("grdMenuList","0","44","100.00%","270",null,null,null,null,null,null,this.divForm.form.Div01.form.divGrd00_00_00.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsMenuList");
            obj.set_autofittype("col");
            obj.getSetter("uFunction").set("checkbox");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"50\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"메뉴ID\"/><Cell col=\"2\" text=\"메뉴명\"/><Cell col=\"3\" text=\"메뉴아이콘\"/><Cell col=\"4\" text=\"순서\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" text=\"bind:menuId\"/><Cell col=\"2\" text=\"bind:menuNm\"/><Cell col=\"3\" text=\"bind:menuIcon\" edittype=\"text\" editmaxlength=\"30\" cssclass=\"CellLink\"/><Cell col=\"4\" text=\"bind:menuOrdr\" cssclass=\"CellEnd\" textAlign=\"center\" edittype=\"text\" displaytype=\"number\" editmaxlength=\"3\" editinputtype=\"number\"/></Band></Format></Formats>");
            this.divForm.form.Div01.form.divGrd00_00_00.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","316.00","0","84","34",null,null,null,null,null,null,this.divForm.form.Div01.form.divGrd00_00_00.form);
            obj.set_taborder("3");
            obj.set_text("메뉴삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.Div01.form.divGrd00_00_00.addChild(obj.name, obj);

            obj = new Button("btnGrdRegi","371.00","0","84","34",null,null,null,null,null,null,this.divForm.form.Div01.form.divGrd00_00_00.form);
            obj.set_taborder("4");
            obj.set_text("메뉴추가");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.Div01.form.divGrd00_00_00.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","50%","34",null,null,null,null,null,null,this.divForm.form.Div01.form.divGrd00_00_00.form);
            obj.set_taborder("5");
            obj.set_text("시스템등록 목록");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_flexgrow("1");
            this.divForm.form.Div01.form.divGrd00_00_00.addChild(obj.name, obj);

            obj = new Div("divPopBtn","0","divForm:20",null,"80","60",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","789.97","10","120","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Yes");
            this.divPopBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divGuide.form
            obj = new Layout("default","",0,0,this.divGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divGuide.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGuide.form
            obj = new Layout("mobile","",0,0,this.divGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divGuide.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.Div01.form.divGrd00.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01.form.divGrd00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_taborder("1");
                p.Panel00.move("0","0","100%","34",null,null);

                p.PanelGrdBtn.set_taborder("0");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.set_flexgrow("1");
                p.PanelGrdBtn.move("313.00","34","50%","34",null,null);

                p.grdGrpList.set_taborder("2");
                p.grdGrpList.set_binddataset("dsGrpList");
                p.grdGrpList.set_autofittype("col");
                p.grdGrpList.set_autoenter("select");
                p.grdGrpList.move("178","Panel00:0","100.00%","680",null,null);

                p.btnGrdDel.set_taborder("3");
                p.btnGrdDel.set_text("그룹삭제");
                p.btnGrdDel.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel.set_visible("true");
                p.btnGrdDel.set_fittocontents("width");
                p.btnGrdDel.set_enable("false");
                p.btnGrdDel.move("316.00","0","84","34",null,null);

                p.btnGrdRegi.set_taborder("4");
                p.btnGrdRegi.set_text("그룹추가");
                p.btnGrdRegi.set_cssclass("btn_WF_SmallBlack");
                p.btnGrdRegi.set_visible("true");
                p.btnGrdRegi.set_fittocontents("width");
                p.btnGrdRegi.move("371.00","0","84","34",null,null);

                p.staTotal.set_taborder("5");
                p.staTotal.set_text("그룹메뉴 목록");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_flexgrow("1");
                p.staTotal.move("0","0","50%","34",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            this.divForm.form.Div01.form.divGrd00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div01.form.divGrd00.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div01.form.divGrd00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            this.divForm.form.Div01.form.divGrd00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div01.form.divGrd00.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div01.form.divGrd00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            this.divForm.form.Div01.form.divGrd00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div01.form.divGrd00_00.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01.form.divGrd00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00_00.set_taborder("1");
                p.Panel00_00.set_flexwrap("nowrap");
                p.Panel00_00.move("0","0","100.00%","34",null,null);

                p.PanelGrdBtn00.set_taborder("0");
                p.PanelGrdBtn00.set_flexcrossaxisalign("start");
                p.PanelGrdBtn00.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn00.set_flexmainaxisalign("end");
                p.PanelGrdBtn00.set_horizontalgap("10");
                p.PanelGrdBtn00.set_flexgrow("1");
                p.PanelGrdBtn00.move("99","0","50%","34",null,null);

                p.grdProcList.set_taborder("2");
                p.grdProcList.set_binddataset("dsProcList");
                p.grdProcList.set_autofittype("col");
                p.grdProcList.set_autoenter("select");
                p.grdProcList.move("0","44","100.00%","360",null,null);

                p.btnGrdDel.set_taborder("3");
                p.btnGrdDel.set_text("절차삭제");
                p.btnGrdDel.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel.set_visible("true");
                p.btnGrdDel.set_fittocontents("width");
                p.btnGrdDel.set_enable("false");
                p.btnGrdDel.move("316.00","0","84","34",null,null);

                p.btnGrdRegi.set_taborder("4");
                p.btnGrdRegi.set_text("절차추가");
                p.btnGrdRegi.set_cssclass("btn_WF_SmallBlack");
                p.btnGrdRegi.set_visible("true");
                p.btnGrdRegi.set_fittocontents("width");
                p.btnGrdRegi.move("371.00","0","84","34",null,null);

                p.staTotal.set_taborder("5");
                p.staTotal.set_text("처리절차 목록");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_flexgrow("1");
                p.staTotal.move("0","0","50%","34",null,null);
            	}
            );
            obj.set_verticalgap("10");
            obj.set_type("vertical");
            this.divForm.form.Div01.form.divGrd00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div01.form.divGrd00_00.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div01.form.divGrd00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("10");
            obj.set_type("vertical");
            this.divForm.form.Div01.form.divGrd00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div01.form.divGrd00_00.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div01.form.divGrd00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("10");
            obj.set_type("vertical");
            this.divForm.form.Div01.form.divGrd00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div01.form.divGrd00_00_00.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01.form.divGrd00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00_00.set_taborder("1");
                p.Panel00_00.set_flexwrap("nowrap");
                p.Panel00_00.move("0","0","100.00%","34",null,null);

                p.PanelGrdBtn00.set_taborder("0");
                p.PanelGrdBtn00.set_flexcrossaxisalign("start");
                p.PanelGrdBtn00.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn00.set_flexmainaxisalign("end");
                p.PanelGrdBtn00.set_horizontalgap("10");
                p.PanelGrdBtn00.set_flexgrow("1");
                p.PanelGrdBtn00.move("99","0","50%","34",null,null);

                p.grdMenuList.set_taborder("2");
                p.grdMenuList.set_binddataset("dsMenuList");
                p.grdMenuList.set_autofittype("col");
                p.grdMenuList.getSetter("uFunction").set("checkbox");
                p.grdMenuList.set_autoenter("select");
                p.grdMenuList.move("0","44","100.00%","270",null,null);

                p.btnGrdDel.set_taborder("3");
                p.btnGrdDel.set_text("메뉴삭제");
                p.btnGrdDel.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel.set_visible("true");
                p.btnGrdDel.set_fittocontents("width");
                p.btnGrdDel.move("316.00","0","84","34",null,null);

                p.btnGrdRegi.set_taborder("4");
                p.btnGrdRegi.set_text("메뉴추가");
                p.btnGrdRegi.set_cssclass("btn_WF_SmallBlack");
                p.btnGrdRegi.set_visible("true");
                p.btnGrdRegi.set_fittocontents("width");
                p.btnGrdRegi.move("371.00","0","84","34",null,null);

                p.staTotal.set_taborder("5");
                p.staTotal.set_text("시스템등록 목록");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_flexgrow("1");
                p.staTotal.move("0","0","50%","34",null,null);
            	}
            );
            obj.set_verticalgap("10");
            obj.set_type("vertical");
            this.divForm.form.Div01.form.divGrd00_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div01.form.divGrd00_00_00.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div01.form.divGrd00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("10");
            obj.set_type("vertical");
            this.divForm.form.Div01.form.divGrd00_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div01.form.divGrd00_00_00.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div01.form.divGrd00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("10");
            obj.set_type("vertical");
            this.divForm.form.Div01.form.divGrd00_00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div01.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divGrd00.set_taborder("0");
                p.divGrd00.set_text("Div01");
                p.divGrd00.set_fittocontents("height");
                p.divGrd00.set_formscrollbartype("none none");
                p.divGrd00.set_formscrolltype("none");
                p.divGrd00.move("390.00","34","100%","724",null,null);

                p.Panel00.set_taborder("2");
                p.Panel00.set_type("vertical");
                p.Panel00.set_verticalgap("10");
                p.Panel00.move("1063","720","100%","728",null,null);

                p.divGrd00_00.set_taborder("1");
                p.divGrd00_00.set_text("Div01");
                p.divGrd00_00.set_fittocontents("height");
                p.divGrd00_00.set_formscrollbartype("none none");
                p.divGrd00_00.set_formscrolltype("none");
                p.divGrd00_00.move("390.00","34","100%","404",null,null);

                p.divGrd00_00_00.set_taborder("3");
                p.divGrd00_00_00.set_text("Div01");
                p.divGrd00_00_00.set_fittocontents("height");
                p.divGrd00_00_00.set_formscrollbartype("none none");
                p.divGrd00_00_00.set_formscrolltype("none");
                p.divGrd00_00_00.move("390.00","34","100%","314",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexwrap("nowrap");
            obj.set_horizontalgap("20");
            this.divForm.form.Div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div01.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_horizontalgap("20");
            this.divForm.form.Div01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div01.set_taborder("1");
                p.Div01.set_text("Div01");
                p.Div01.set_fittocontents("height");
                p.Div01.move("0","30","100.00%","728",null,null);
            	}
            );
            obj.set_type("vertical");
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
                p.Button00_00.move("789.97","10","120","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
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
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            this.divPopBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("그룹메뉴 정보 관리");

                p.divGuide.set_taborder("0");
                p.divGuide.set_text("div00");
                p.divGuide.set_visible("false");
                p.divGuide.set_cssclass("div_GD_Tip");
                p.divGuide.move("1590.00","135","450","385",null,null);

                p.divTitle.set_taborder("1");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.set_minheight("50");
                p.divTitle.set_maxheight("");
                p.divTitle.move("0","0",null,"60","60",null);

                p.divForm.set_taborder("2");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("height");
                p.divForm.move("0","70",null,"728","60",null);

                p.divPopBtn.set_taborder("3");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.move("0","divForm:20",null,"80","60",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","",480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divPopBtn.move("20",null,null,"80","20","0");

                p.divForm.set_fittocontents("none");
                p.divForm.move("20","divTitle:20",null,null,"20","80");

                p.divTitle.move("0","0",null,"50","0",null);
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
        this.registerScript("COM041M01.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	COM041M01.xfdl
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

        	if(this.opener)
        	{
        		if(this.getOwnerFrame().titlebar) {
        			this.divTitle.visible = false;
        		}
        	}

        	this.cfnSearch();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	this.getSearchGrpTransaction();
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
        this.getSearchGrpTransaction = function()
        {
        	var strSvcId    = "searchGrp";
        	var strSvcUrl   = "bkmk/groupMenuListInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsGrpList=dsGrpList";
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

        this.getSearchProcTransaction = function()
        {
        	this.dsMenuList.clearData();

        	var strSvcId    = "searchProc";
        	var strSvcUrl   = "bkmk/bscProcBkmInfoInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsProcList=dsProcList";
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

        this.getSearchMenuTransaction = function()
        {
        	var strSvcId    = "searchMenu";
        	var strSvcUrl   = "bkmk/bscMenuBkmInfoInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsMenuList=dsMenuList";
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
        	var strSvcUrl   = "bkmk/groupMenuInfoStrg.do";
        	var inData      = "dsGrpList=dsGrpList:A dsProcList=dsProcList:A dsMenuList=dsMenuList:A";
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
        		case "searchGrp":
        			if(this.dsGrpList.getRowCount() > 0) {
        // 				this.dsSearch.setColumn(0, "grpId", this.dsGrpList.getColumn(0, "grpId"));
        // 				this.getSearchProcTransaction();
        			} else {
        				var cell = this.dsMenuList.getColIndex("chk");
        				if(cell < 0) {
        					this.dsMenuList.addColumn("chk");
        				}
        			}
        			break;
        		case "searchProc":
        			if(this.dsProcList.getRowCount() > 0) {
        				this.divForm.form.Div01.form.divGrd00.form.btnGrdDel.enable = false;
        			} else {
        				this.divForm.form.Div01.form.divGrd00.form.btnGrdDel.enable = true;
        				var cell = this.dsMenuList.getColIndex("chk");
        				if(cell < 0) {
        					this.dsMenuList.addColumn("chk");
        				}
        			}
        			break;
        		case "searchMenu":
        			if(this.dsMenuList.getRowCount() > 0) {
        				this.divForm.form.Div01.form.divGrd00_00.form.btnGrdDel.enable = false;
        			} else {
        				this.divForm.form.Div01.form.divGrd00_00.form.btnGrdDel.enable = true;
        			}
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
        	if(sPopupId == "del_grp") {
        		if(oRtn.result == "Y") {
        			this.dsGrpList.deleteRow(this.dsGrpList.rowposition);
        		}
        	}
        	else if(sPopupId == "del_proc") {
        		if(oRtn.result == "Y") {
        			this.dsProcList.deleteRow(this.dsProcList.rowposition);
        		}
        	}
        	else if(sPopupId == "del_menu") {
        		if(oRtn.result == "Y") {
        			var chk = this.dsMenuList.extractRows("chk == " + 1);
        			if(chk.length > 0) {
        				this.dsMenuList.deleteMultiRows(chk);
        			}
        		}
        	}
        	else if(sPopupId == "save") {
        		if(oRtn.result == "Y") {
        			this.saveTransaction();
        		}
        	}
        };

        this.fnPopupCallback = function(sPopupId, sRtn)
        {
        	if(sPopupId == "menuPopupSearch") {
        		if (this.gfnIsNull(sRtn)) return;
        		var objRtn = JSON.parse(sRtn);
        		var menuArr = objRtn.menuArr;
        		for(var i=0; i<menuArr.length; i++) {
        			if(this.gfnIsNull(menuArr[i].menuUrl) != true) {
        				var fRow = this.dsMenuList.findRow("menuId", menuArr[i].menuId);
        				if(fRow < 0) {
        					var nRow = this.dsMenuList.addRow();
        					this.dsMenuList.setColumn(nRow, "chk", "1");
        					this.dsMenuList.setColumn(nRow, "menuId", menuArr[i].menuId);
        					this.dsMenuList.setColumn(nRow, "menuNm", menuArr[i].menuNm);

        					if(this.gfnIsNull(this.dsProcList.getColumn(this.dsProcList.rowposition, "grpId")) != true) {
        						this.dsMenuList.setColumn(nRow, "grpId", this.dsProcList.getColumn(this.dsProcList.rowposition, "grpId"));
        					}
        					if(this.gfnIsNull(this.dsProcList.getColumn(this.dsProcList.rowposition, "procId")) != true) {
        						this.dsMenuList.setColumn(nRow, "procId", this.dsProcList.getColumn(this.dsProcList.rowposition, "procId"));
        					}
        				}
        			}
        		}
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // 그룹추가
        this.divForm_Div01_divGrd00_btnGrdRegi_onclick = function(obj,e)
        {
        	this.dsGrpList.addRow();
        };

        // 그룹삭제
        this.divForm_Div01_divGrd00_btnGrdDel_onclick = function(obj,e)
        {
        	if(this.dsGrpList.rowposition > -1) {
        		this.gfnConfirmMsg("del_grp", "MSG_005", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        	} else {
        		this.gfnAlertMsg("msg", "MSG_006");
        	}
        };

        // 절차추가
        this.divForm_Div01_divGrd00_00_btnGrdRegi_onclick = function(obj,e)
        {
        	if(this.dsGrpList.getRowCount() == 0) {
        		this.gfnAlertMsg("msg", "MSG_011", ["그룹메뉴 정보가 없습니다."]);
        		return;
        	}

        	var nRow = this.dsProcList.addRow();

        	if(this.gfnIsNull(this.dsGrpList.getColumn(this.dsGrpList.rowposition, "grpId")) != true) {
        		this.dsProcList.setColumn(nRow, "grpId", this.dsGrpList.getColumn(this.dsGrpList.rowposition, "grpId"));
        	}
        };

        // 절차삭제
        this.divForm_Div01_divGrd00_00_btnGrdDel_onclick = function(obj,e)
        {
        	if(this.dsProcList.rowposition > -1) {
        		this.gfnConfirmMsg("del_proc", "MSG_005", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        	} else {
        		this.gfnAlertMsg("msg", "MSG_006");
        	}
        };

        // 메뉴추가
        this.divForm_Div01_divGrd00_00_00_btnGrdRegi_onclick = function(obj,e)
        {
        	if(this.dsProcList.getRowCount() == 0) {
        		this.gfnAlertMsg("msg", "MSG_011", ["처리절차 정보가 없습니다."]);
        		return;
        	}

        	this.dsAuthMenuList.clearData();
        	for(var i=0; i<this.dsMenuList.getRowCount(); i++) {
        		var nRow = this.dsAuthMenuList.addRow();
        		this.dsAuthMenuList.setColumn(nRow, "authrtMenuId", this.dsMenuList.getColumn(i, "menuId"));
        		this.dsAuthMenuList.setColumn(nRow, "authrtMenuNm", this.dsMenuList.getColumn(i, "menuNm"));
        	}

        	var sTitle = "메뉴 선택 팝업";
        	var objArg = {
        		authorMenus : this.dsAuthMenuList
        	};

        	var sPopupCallBack = "fnPopupCallback";
        	var objOption = {
        		popuptype:"modal"	//modal,modaless
         		//,width:
         		//,height:			//width,height 지정하지 않음 popup form size적용
        		,autosize:false
        		,title:sTitle
        		,resize:false
        		,titlebar:true};

        	this.gfnOpenPopup("menuPopupSearch", "work::COM/sysMng/COM024P032.xfdl", objArg, sPopupCallBack, objOption);
        };

        // 메뉴삭제
        this.divForm_Div01_divGrd00_00_00_btnGrdDel_onclick = function(obj,e)
        {
        	var chk = this.dsMenuList.findRow("chk", 1);
        	if(chk != -1) {
        		this.gfnConfirmMsg("del_menu", "MSG_005", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        	} else {
        		this.gfnAlertMsg("msg", "MSG_006");
        	}
        };

        // 저장
        this.divBtn_btnSave_onclick = function(obj,e)
        {
        	if(this.gfnDsIsUpdated(this.dsGrpList) != true && this.gfnDsIsUpdated(this.dsProcList) != true && this.gfnDsIsUpdated(this.dsMenuList) != true) {
        		this.gfnAlertMsg("msg", "MSG_004");
        	} else {
        		// 그룹메뉴 체크
        		var arr = [{ "id" : "grpNm", "title" : "그룹메뉴명"}
        		          ,{ "id" : "grpOrdr", "title" : "그룹순서"}
        		          ];
        		var ds = this.dsGrpList;
        		var grd = this.divForm.form.Div01.form.divGrd00.form.grdGrpList;

        		if(this.fnGrdValidation(arr, ds, grd) != true) {
        			return;
        		}

        		// 처리절차 체크
        		var arr = [{ "id" : "procNm", "title" : "처리절차명"}
        		          ,{ "id" : "procOrdr", "title" : "처리절차순서"}
        		          ];
        		var ds = this.dsProcList;
        		var grd = this.divForm.form.Div01.form.divGrd00_00.form.grdProcList;

        		if(this.fnGrdValidation(arr, ds, grd) != true) {
        			return;
        		}

        		// 메뉴 체크
        		var arr = [{ "id" : "menuOrdr", "title" : "메뉴순서"}
        		          ];
        		var ds = this.dsMenuList;
        		var grd = this.divForm.form.Div01.form.divGrd00_00_00.form.grdMenuList;

        		if(this.fnGrdValidation(arr, ds, grd) != true) {
        			return;
        		}

        		this.gfnConfirmMsg("save", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        	}
        };

        this.fnGrdValidation = function(arr, ds, grd)
        {
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

        // 이미지 팝업
        this.divForm_Div01_divGrd00_Grid00_oncellclick = function(obj,e)
        {
        	if(e.cell == 1) {
        		var grpIcon = this.dsGrpList.getColumn(e.row, "grpIcon");
        		if(this.gfnIsNull(grpIcon) != true) {
        			this.fnImageViewer(grpIcon);
        		}
        	}
        };

        this.divForm_Div01_divGrd00_00_grdProcList_oncellclick = function(obj,e)
        {
        	if(e.cell == 1) {
        // 		var procImg = this.dsProcList.getColumn(e.row, "procImg");
        // 		if(this.gfnIsNull(procImg) != true) {
        // 			this.fnImageViewer(procImg);
        // 		}

        		var sTitle = "처리절차이미지";
        		var objArg   = {
        			"procId" : this.dsProcList.getColumn(e.row, "procId")
        		};

        		var objOption = {
        			popuptype: "modal"	//modal,modaless
        	// 		, width: 1440
        	// 		, height: 800			//width,height 지정하지 않음 popup form size적용
        			, autosize: true
        			, title: sTitle
        			, resize: true
        			, titlebar: true
        		};
        		var sPopupCallBack = "fnPopupCallback";

        		this.gfnOpenPopup("COM041P05", "work::COM/bkmk/COM041P05.xfdl", objArg, sPopupCallBack, objOption);
        	}
        };

        this.divForm_Div01_divGrd00_00_00_grdMenuList_oncellclick = function(obj,e)
        {
        	if(e.cell == 3) {
        		var menuIcon = this.dsMenuList.getColumn(e.row, "menuIcon");
        		if(this.gfnIsNull(menuIcon) != true) {
        			this.fnImageViewer(menuIcon);
        		}
        	}
        };

        this.fnImageViewer = function(imgUrl)
        {
        	var sTitle = "이미지 미리보기";
        	var objArg = {"imgUrl" : imgUrl};

        	var sPopupCallBack = "fnPopupCallback";
        	var objOption = {
        		popuptype:"modal"	//modal,modaless
        		//,width:
        		//,height:			//width,height 지정하지 않음 popup form size적용
        		,autosize:false
        		,title:sTitle
        		,resize:false
        		,titlebar:true};

        	this.gfnOpenPopup("image", "work::COM/bkmk/COM041P01.xfdl", objArg, sPopupCallBack, objOption);
        };

        this.dsGrpList_onrowposchanged = function(obj,e)
        {
        	if(obj.getRowCount() > 0) {
        		this.dsSearch.setColumn(0, "grpId", obj.getColumn(e.newrow, "grpId"));
        		this.getSearchProcTransaction();
        	}
        };

        this.dsProcList_onrowposchanged = function(obj,e)
        {
        	if(obj.getRowCount() > 0) {
        		this.dsSearch.setColumn(0, "procId", obj.getColumn(e.newrow, "procId"));
        		this.getSearchMenuTransaction();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.Div01.form.divGrd00.form.grdGrpList.addEventHandler("oncellclick",this.divForm_Div01_divGrd00_Grid00_oncellclick,this);
            this.divForm.form.Div01.form.divGrd00.form.btnGrdDel.addEventHandler("onclick",this.divForm_Div01_divGrd00_btnGrdDel_onclick,this);
            this.divForm.form.Div01.form.divGrd00.form.btnGrdRegi.addEventHandler("onclick",this.divForm_Div01_divGrd00_btnGrdRegi_onclick,this);
            this.divForm.form.Div01.form.divGrd00_00.form.grdProcList.addEventHandler("oncellclick",this.divForm_Div01_divGrd00_00_grdProcList_oncellclick,this);
            this.divForm.form.Div01.form.divGrd00_00.form.btnGrdDel.addEventHandler("onclick",this.divForm_Div01_divGrd00_00_btnGrdDel_onclick,this);
            this.divForm.form.Div01.form.divGrd00_00.form.btnGrdRegi.addEventHandler("onclick",this.divForm_Div01_divGrd00_00_btnGrdRegi_onclick,this);
            this.divForm.form.Div01.form.divGrd00_00_00.form.grdMenuList.addEventHandler("oncellclick",this.divForm_Div01_divGrd00_00_00_grdMenuList_oncellclick,this);
            this.divForm.form.Div01.form.divGrd00_00_00.form.btnGrdDel.addEventHandler("onclick",this.divForm_Div01_divGrd00_00_00_btnGrdDel_onclick,this);
            this.divForm.form.Div01.form.divGrd00_00_00.form.btnGrdRegi.addEventHandler("onclick",this.divForm_Div01_divGrd00_00_00_btnGrdRegi_onclick,this);
            this.divPopBtn.form.Button00_00.addEventHandler("onclick",this.divBtn_btnSave_onclick,this);
            this.dsGrpList.addEventHandler("onrowposchanged",this.dsGrpList_onrowposchanged,this);
            this.dsProcList.addEventHandler("onrowposchanged",this.dsProcList_onrowposchanged,this);
        };
        this.loadIncludeScript("COM041M01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
