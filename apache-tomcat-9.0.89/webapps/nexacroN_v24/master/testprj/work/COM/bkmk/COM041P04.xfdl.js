(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM041P04");
            this.set_titletext("즐겨찾기 관리 (팝업)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1100,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"grpId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrpList", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"grpId\" type=\"STRING\" size=\"256\"/><Column id=\"grpNm\" type=\"STRING\" size=\"256\"/><Column id=\"grpOrdr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenuList", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"grpId\" type=\"STRING\" size=\"256\"/><Column id=\"procId\" type=\"STRING\" size=\"256\"/><Column id=\"menuId\" type=\"STRING\" size=\"256\"/><Column id=\"menuNm\" type=\"STRING\" size=\"256\"/><Column id=\"menuOrdr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuthMenuList", this);
            obj._setContents("<ColumnInfo><Column id=\"authrtMenuId\" type=\"STRING\" size=\"256\"/><Column id=\"authrtMenuNm\" type=\"STRING\" size=\"256\"/><Column id=\"authrtId\" type=\"STRING\" size=\"256\"/><Column id=\"authrtNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","20","10",null,null,"20","60",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","200.00","383","100.00%","47",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("선택하신 [담당자 연락처 (COM022M04)] 메뉴를 즐겨찾기에 등록합니다.\r\n배치하고자 하는 “즐겨찾기 그룹”을 선택하시기 바랍니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel00","388","263","100.00%","494",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_horizontalgap("20");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divGrd\"/><PanelItem id=\"PanelItem02\" componentid=\"divGrd00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divGrd","0","54","49%","450",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn",null,"0","550","34","0",null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("width");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnGrdDel\"/><PanelItem id=\"PanelItem04\" componentid=\"btnGrdRegi\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdGrpList","0","PanelGrdBtn:10","100%",null,null,"0",null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_binddataset("dsGrpList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"600\"/><Column size=\"50\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"즐겨찾기그룹\"/><Cell col=\"1\" text=\"순서\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:grpNm\" editmaxlength=\"30\" edittype=\"text\"/><Cell col=\"1\" text=\"bind:grpOrdr\" cssclass=\"CellEnd\" textAlign=\"center\" displaytype=\"number\" edittype=\"text\" editmaxlength=\"3\" editinputtype=\"number\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","200","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("즐겨찾기 그룹");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","316.00","0","69","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("그룹삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            obj.set_enable("false");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdRegi","371.00","0","69","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("그룹추가");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divGrd00","0","54","49%","450",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn",null,"0","550","34","0",null,null,null,null,null,this.divForm.form.divGrd00.form);
            obj.set_taborder("0");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("width");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnGrdDel\"/><PanelItem id=\"PanelItem04\" componentid=\"btnGrdRegi\"/></Contents>");
            this.divForm.form.divGrd00.addChild(obj.name, obj);

            obj = new Grid("grdMenuList","0","PanelGrdBtn:10","100%",null,null,"0",null,null,null,null,this.divForm.form.divGrd00.form);
            obj.set_taborder("4");
            obj.set_binddataset("dsMenuList");
            obj.set_autofittype("col");
            obj.getSetter("uFunction").set("checkbox");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"600\"/><Column size=\"50\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"즐겨찾기메뉴\"/><Cell col=\"2\" text=\"순서\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" text=\"bind:menuNm\"/><Cell col=\"2\" text=\"bind:menuOrdr\" cssclass=\"CellEnd\" textAlign=\"center\" edittype=\"text\" editmaxlength=\"3\" editinputtype=\"number\"/></Band></Format></Formats>");
            this.divForm.form.divGrd00.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","200","34",null,null,null,null,null,null,this.divForm.form.divGrd00.form);
            obj.set_taborder("1");
            obj.set_text("그룹별 메뉴");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd00.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","316.00","0","69","34",null,null,null,null,null,null,this.divForm.form.divGrd00.form);
            obj.set_taborder("2");
            obj.set_text("메뉴삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd00.addChild(obj.name, obj);

            obj = new Button("btnGrdRegi","371.00","0","69","34",null,null,null,null,null,null,this.divForm.form.divGrd00.form);
            obj.set_taborder("3");
            obj.set_text("메뉴추가");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd00.addChild(obj.name, obj);

            obj = new Div("divPopBtn","20",null,null,"60","20","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.addChild(obj.name, obj);

            obj = new Button("btnWhdwl","217.00","10","120","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Button("btnSave","457.00","30","120","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Div("divGuide00","1600.00","145","450","385",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_visible("false");
            obj.set_cssclass("div_GD_Tip");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","20.00","205","34","34",null,null,null,null,null,null,this.divGuide00.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.divGuide00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","64.00","205","34","34",null,null,null,null,null,null,this.divGuide00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divGuide00.addChild(obj.name, obj);

            obj = new Static("sta00_00","20.00","255","375","50",null,null,null,null,null,null,this.divGuide00.form);
            obj.set_taborder("2");
            obj.set_text("접혀있을때 class : btn_WF_ACPlus 로 접음");
            this.divGuide00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.PanelGrdBtn.set_taborder("0");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_fittocontents("width");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.move(null,"0","550","34","0",null);

                p.grdGrpList.set_taborder("4");
                p.grdGrpList.set_binddataset("dsGrpList");
                p.grdGrpList.set_autofittype("col");
                p.grdGrpList.set_autoenter("select");
                p.grdGrpList.move("0","PanelGrdBtn:10","100%",null,null,"0");

                p.staTotal.set_taborder("1");
                p.staTotal.set_text("즐겨찾기 그룹");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","0","200","34",null,null);

                p.btnGrdDel.set_taborder("2");
                p.btnGrdDel.set_text("그룹삭제");
                p.btnGrdDel.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel.set_visible("true");
                p.btnGrdDel.set_fittocontents("width");
                p.btnGrdDel.set_enable("false");
                p.btnGrdDel.move("316.00","0","69","34",null,null);

                p.btnGrdRegi.set_taborder("3");
                p.btnGrdRegi.set_text("그룹추가");
                p.btnGrdRegi.set_cssclass("btn_WF_SmallBlack");
                p.btnGrdRegi.set_visible("true");
                p.btnGrdRegi.set_fittocontents("width");
                p.btnGrdRegi.move("371.00","0","69","34",null,null);
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
            //-- Default Layout : this.divForm.form.divGrd00.form
            obj = new Layout("default","",0,0,this.divForm.form.divGrd00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.PanelGrdBtn.set_taborder("0");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_fittocontents("width");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.move(null,"0","550","34","0",null);

                p.grdMenuList.set_taborder("4");
                p.grdMenuList.set_binddataset("dsMenuList");
                p.grdMenuList.set_autofittype("col");
                p.grdMenuList.getSetter("uFunction").set("checkbox");
                p.grdMenuList.set_autoenter("select");
                p.grdMenuList.move("0","PanelGrdBtn:10","100%",null,null,"0");

                p.staTotal.set_taborder("1");
                p.staTotal.set_text("그룹별 메뉴");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","0","200","34",null,null);

                p.btnGrdDel.set_taborder("2");
                p.btnGrdDel.set_text("메뉴삭제");
                p.btnGrdDel.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel.set_visible("true");
                p.btnGrdDel.set_fittocontents("width");
                p.btnGrdDel.move("316.00","0","69","34",null,null);

                p.btnGrdRegi.set_taborder("3");
                p.btnGrdRegi.set_text("메뉴추가");
                p.btnGrdRegi.set_cssclass("btn_WF_SmallBlack");
                p.btnGrdRegi.set_visible("true");
                p.btnGrdRegi.set_fittocontents("width");
                p.btnGrdRegi.move("371.00","0","69","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divGrd00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divGrd00.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divGrd00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

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
                p.sta00.set_taborder("0");
                p.sta00.set_text("선택하신 [담당자 연락처 (COM022M04)] 메뉴를 즐겨찾기에 등록합니다.\r\n배치하고자 하는 “즐겨찾기 그룹”을 선택하시기 바랍니다.");
                p.sta00.set_cssclass("sta_WF_Des");
                p.sta00.set_fittocontents("height");
                p.sta00.set_visible("false");
                p.sta00.move("200.00","383","100.00%","47",null,null);

                p.Panel00.set_taborder("1");
                p.Panel00.set_horizontalgap("20");
                p.Panel00.set_fittocontents("height");
                p.Panel00.move("388","263","100.00%","494",null,null);

                p.divGrd.set_taborder("2");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","54","49%","450",null,null);

                p.divGrd00.set_taborder("3");
                p.divGrd00.set_text("Div01");
                p.divGrd00.set_fittocontents("height");
                p.divGrd00.set_formscrollbartype("none none");
                p.divGrd00.set_formscrolltype("none");
                p.divGrd00.move("0","54","49%","450",null,null);
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
                p.Panel00.set_flexwrap("wrap");
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divPopBtn.form
            obj = new Layout("default","",0,0,this.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnWhdwl.set_taborder("1");
                p.btnWhdwl.set_text("취소");
                p.btnWhdwl.set_fittocontents("width");
                p.btnWhdwl.set_visible("false");
                p.btnWhdwl.move("217.00","10","120","40",null,null);

                p.btnSave.set_taborder("0");
                p.btnSave.set_text("확인");
                p.btnSave.set_cssclass("btn_WF_Yes");
                p.btnSave.set_fittocontents("width");
                p.btnSave.move("457.00","30","120","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("10");
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
            this.divPopBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divGuide00.form
            obj = new Layout("default","",0,0,this.divGuide00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00_00.set_taborder("0");
                p.Button00_00.set_cssclass("btn_WF_ACPlus");
                p.Button00_00.set_visible("false");
                p.Button00_00.move("20.00","205","34","34",null,null);

                p.Button00_00_00.set_taborder("1");
                p.Button00_00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_00.move("64.00","205","34","34",null,null);

                p.sta00_00.set_taborder("2");
                p.sta00_00.set_text("접혀있을때 class : btn_WF_ACPlus 로 접음");
                p.sta00_00.move("20.00","255","375","50",null,null);
            	}
            );
            this.divGuide00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGuide00.form
            obj = new Layout("mobile","",0,0,this.divGuide00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divGuide00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGuide00.form
            obj = new Layout("mobile","",0,0,this.divGuide00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divGuide00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1100,600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("즐겨찾기 관리 (팝업)");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.move("20","10",null,null,"20","60");

                p.divPopBtn.set_taborder("1");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.move("20",null,null,"60","20","0");

                p.divGuide00.set_taborder("2");
                p.divGuide00.set_text("div00");
                p.divGuide00.set_visible("false");
                p.divGuide00.set_cssclass("div_GD_Tip");
                p.divGuide00.move("1600.00","145","450","385",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","",480,600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.move("20",null,null,"80","20","0");

                p.divForm.move("20","10",null,null,"20","90");
            	}
            );
            obj.set_mobileorientation("Portrait");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COM041P04.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	COM041P04.xfdl
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
        this.userId;

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	this.userId = this.objApp.gdsUser.getColumn(0, "userId");
        	this.dsSearch.setColumn(0, "userId", this.userId);
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
        	var strSvcUrl   = "bkmk/indivBkmkListInq.do";
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

        this.getSearchMenuTransaction = function()
        {
        	var strSvcId    = "searchMenu";
        	var strSvcUrl   = "bkmk/indivBkmkMenuListInq.do";
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
        	var strSvcUrl   = "bkmk/indivBkmkInfoStrg.do";
        	var inData      = "dsGrpList=dsGrpList:A dsMenuList=dsMenuList:A";
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
        			break;
        		case "searchMenu":
        			if(this.dsMenuList.getRowCount() > 0) {
        				this.divForm.form.divGrd.form.btnGrdDel.enable = false;
        			} else {
        				this.divForm.form.divGrd.form.btnGrdDel.enable = true;
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
        					this.dsMenuList.setColumn(nRow, "userId", this.userId);
        					this.dsMenuList.setColumn(nRow, "menuId", menuArr[i].menuId);
        					this.dsMenuList.setColumn(nRow, "menuNm", menuArr[i].menuNm);

        					if(this.gfnIsNull(this.dsGrpList.getColumn(this.dsGrpList.rowposition, "grpId")) != true) {
        						this.dsMenuList.setColumn(nRow, "grpId", this.dsGrpList.getColumn(this.dsGrpList.rowposition, "grpId"));
        					}

        					// 고정값
        					this.dsMenuList.setColumn(nRow, "procId", "BKMK_PROC_ID");
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
        this.divForm_divGrd_btnGrdRegi_onclick = function(obj,e)
        {
        	var nRow = this.dsGrpList.addRow();
        	this.dsGrpList.setColumn(nRow, "userId", this.userId);
        };

        // 그룹삭제
        this.divForm_divGrd_btnGrdDel_onclick = function(obj,e)
        {
        	if(this.dsGrpList.rowposition > -1) {
        		this.gfnConfirmMsg("del_grp", "MSG_005", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        	} else {
        		this.gfnAlertMsg("msg", "MSG_006");
        	}
        };

        // 메뉴추가
        this.divForm_divGrd00_btnGrdRegi_onclick = function(obj,e)
        {
        	if(this.dsGrpList.getRowCount() == 0) {
        		this.gfnAlertMsg("msg", "MSG_011", ["그룹메뉴 정보가 없습니다."]);
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
        this.divForm_divGrd00_btnGrdDel_onclick = function(obj,e)
        {
        	var chk = this.dsMenuList.findRow("chk", 1);
        	if(chk != -1) {
        		this.gfnConfirmMsg("del_menu", "MSG_005", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        	} else {
        		this.gfnAlertMsg("msg", "MSG_006");
        	}
        };

        // 저장
        this.divPopBtn_btnSave_onclick = function(obj,e)
        {
        	if(this.gfnDsIsUpdated(this.dsGrpList) != true && this.gfnDsIsUpdated(this.dsMenuList) != true) {
        		this.gfnAlertMsg("msg", "MSG_004");
        	} else {
        		// 그룹메뉴 체크
        		var arr = [{ "id" : "grpNm", "title" : "그룹메뉴명"}
        		          ,{ "id" : "grpOrdr", "title" : "그룹순서"}
        		          ];
        		var ds = this.dsGrpList;
        		var grd = this.divForm.form.divGrd.form.grdGrpList;

        		if(this.fnGrdValidation(arr, ds, grd) != true) {
        			return;
        		}

        		// 메뉴 체크
        		var arr = [{ "id" : "menuOrdr", "title" : "메뉴순서"}
        		          ];
        		var ds = this.dsMenuList;
        		var grd = this.divForm.form.divGrd00.form.grdMenuList;

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

        this.dsGrpList_onrowposchanged = function(obj,e)
        {
        	if(obj.getRowCount() > 0) {
        		this.dsSearch.setColumn(0, "grpId", obj.getColumn(e.newrow, "grpId"));
        		this.getSearchMenuTransaction();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divGrd.form.btnGrdDel.addEventHandler("onclick",this.divForm_divGrd_btnGrdDel_onclick,this);
            this.divForm.form.divGrd.form.btnGrdRegi.addEventHandler("onclick",this.divForm_divGrd_btnGrdRegi_onclick,this);
            this.divForm.form.divGrd00.form.btnGrdDel.addEventHandler("onclick",this.divForm_divGrd00_btnGrdDel_onclick,this);
            this.divForm.form.divGrd00.form.btnGrdRegi.addEventHandler("onclick",this.divForm_divGrd00_btnGrdRegi_onclick,this);
            this.divPopBtn.form.btnSave.addEventHandler("onclick",this.divPopBtn_btnSave_onclick,this);
            this.dsGrpList.addEventHandler("onrowposchanged",this.dsGrpList_onrowposchanged,this);
        };
        this.loadIncludeScript("COM041P04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
