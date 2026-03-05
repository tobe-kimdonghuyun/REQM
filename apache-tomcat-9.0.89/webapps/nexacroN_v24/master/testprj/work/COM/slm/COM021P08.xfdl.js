(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM021P08");
            this.set_titletext("SLM 서비스 분야별 매핑정보 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"srvcGroupId\" type=\"STRING\" size=\"256\"/><Column id=\"slmSrvcId\" type=\"STRING\" size=\"256\"/><Column id=\"taskFldId\" type=\"STRING\" size=\"256\"/><Column id=\"srvcFldId\" type=\"STRING\" size=\"256\"/><Column id=\"srvcNm\" type=\"STRING\" size=\"256\"/><Column id=\"evlSecNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTaskListS", this);
            obj._setContents("<ColumnInfo><Column id=\"srvcGroupId\" type=\"STRING\" size=\"256\"/><Column id=\"slmSrvcId\" type=\"STRING\" size=\"256\"/><Column id=\"bgngEndSe\" type=\"STRING\" size=\"256\"/><Column id=\"nowTaskId\" type=\"STRING\" size=\"256\"/><Column id=\"nextTaskId\" type=\"STRING\" size=\"256\"/><Column id=\"nowTaskNm\" type=\"STRING\" size=\"256\"/><Column id=\"nextTaskNm\" type=\"STRING\" size=\"256\"/><Column id=\"taskNmNow\" type=\"STRING\" size=\"256\"/><Column id=\"taskNmNext\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTaskListE", this);
            obj._setContents("<ColumnInfo><Column id=\"srvcGroupId\" type=\"STRING\" size=\"256\"/><Column id=\"slmSrvcId\" type=\"STRING\" size=\"256\"/><Column id=\"bgngEndSe\" type=\"STRING\" size=\"256\"/><Column id=\"nowTaskId\" type=\"STRING\" size=\"256\"/><Column id=\"nextTaskId\" type=\"STRING\" size=\"256\"/><Column id=\"nowTaskNm\" type=\"STRING\" size=\"256\"/><Column id=\"nextTaskNm\" type=\"STRING\" size=\"256\"/><Column id=\"taskNmNow\" type=\"STRING\" size=\"256\"/><Column id=\"taskNmNext\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTaskListC", this);
            obj._setContents("<ColumnInfo><Column id=\"srvcGroupId\" type=\"STRING\" size=\"256\"/><Column id=\"slmSrvcId\" type=\"STRING\" size=\"256\"/><Column id=\"bgngEndSe\" type=\"STRING\" size=\"256\"/><Column id=\"nowTaskId\" type=\"STRING\" size=\"256\"/><Column id=\"nextTaskId\" type=\"STRING\" size=\"256\"/><Column id=\"nowTaskNm\" type=\"STRING\" size=\"256\"/><Column id=\"nextTaskNm\" type=\"STRING\" size=\"256\"/><Column id=\"taskNmNow\" type=\"STRING\" size=\"256\"/><Column id=\"taskNmNext\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTaskFldId", this);
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrvcFldId", this);
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrvcKnd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdNm\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"srvcGroupId\" type=\"STRING\" size=\"256\"/><Column id=\"slmSrvcId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTask", this);
            obj._setContents("<ColumnInfo><Column id=\"taskId\" type=\"STRING\" size=\"256\"/><Column id=\"taskNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSecInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"srvcGroupId\" type=\"STRING\" size=\"256\"/><Column id=\"slmSrvcId\" type=\"STRING\" size=\"256\"/><Column id=\"evlSecNo\" type=\"STRING\" size=\"256\"/><Column id=\"evlSecNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Div("Div04_00","0","30","100%","800",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle","0","0","100.00%","50",null,null,null,null,null,null,this.divForm.form.Div04_00.form);
            obj.set_taborder("0");
            obj.set_text("평가대상 서비스그룹 [ SLM_SVG_2024_3 ]");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.form.Div04_00.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","409",null,null,null,null,null,null,this.divForm.form.Div04_00.form);
            obj.set_taborder("1");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divGrd\"/></Contents>");
            this.divForm.form.Div04_00.addChild(obj.name, obj);

            obj = new Div("divGrd","30.00","126","100%","398",null,null,null,null,null,null,this.divForm.form.Div04_00.form);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.Div04_00.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","194","34",null,null,null,null,null,null,this.divForm.form.Div04_00.form.divGrd.form);
            obj.set_taborder("7");
            obj.set_text("서비스 분야별 Task 매핑 정보");
            obj.set_cssclass("sta_WF_Txt60018");
            this.divForm.form.Div04_00.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("Panel00","5","44","100","34",null,null,null,null,null,null,this.divForm.form.Div04_00.form.divGrd.form);
            obj.set_taborder("8");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTotal\"/><PanelItem id=\"PanelItem01\" componentid=\"staTotal01\"/><PanelItem id=\"PanelItem02\" componentid=\"staTotal02\"/></Contents>");
            this.divForm.form.Div04_00.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn",null,"44","100","34","0",null,null,null,null,null,this.divForm.form.Div04_00.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("width");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnGrdDel\"/><PanelItem id=\"PanelItem00\" componentid=\"btnGrdRegi\"/></Contents>");
            this.divForm.form.Div04_00.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdList","0","88","100.00%","310",null,null,null,null,null,null,this.divForm.form.Div04_00.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"300\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"분야\"/><Cell col=\"1\" text=\"서비스\"/><Cell col=\"2\" text=\"서비스분야\"/><Cell col=\"3\" text=\"평가 구간\"/></Band><Band id=\"body\"><Cell text=\"bind:taskFldId\" displaytype=\"combotext\" combodataset=\"dsTaskFldId\" combocodecol=\"cdId\" combodatacol=\"cdNm\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:srvcNm\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:srvcFldId\" combodataset=\"dsSrvcFldId\" combocodecol=\"cdId\" combodatacol=\"cdNm\" displaytype=\"combotext\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:evlSecNm\" edittype=\"text\"/></Band></Format></Formats>");
            this.divForm.form.Div04_00.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","350.00","0","45","34",null,null,null,null,null,null,this.divForm.form.Div04_00.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("false");
            this.divForm.form.Div04_00.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdRegi","405.00","0","45","34",null,null,null,null,null,null,this.divForm.form.Div04_00.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_visible("false");
            this.divForm.form.Div04_00.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","75","0","30","34",null,null,null,null,null,null,this.divForm.form.Div04_00.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divForm.form.Div04_00.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal01","32","0","43","34",null,null,null,null,null,null,this.divForm.form.Div04_00.form.divGrd.form);
            obj.set_taborder("5");
            obj.set_text("1000");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.Div04_00.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","5","0","27","34",null,null,null,null,null,null,this.divForm.form.Div04_00.form.divGrd.form);
            obj.set_taborder("6");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.Div04_00.form.divGrd.addChild(obj.name, obj);

            obj = new Tab("tab00","0","563","100.00%","300",null,null,null,null,null,null,this.divForm.form.Div04_00.form);
            obj.set_taborder("3");
            obj.set_tabindex("0");
            this.divForm.form.Div04_00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.divForm.form.Div04_00.form.tab00);
            obj.set_text("시작 Task 매핑");
            this.divForm.form.Div04_00.form.tab00.addChild(obj.name, obj);

            obj = new Grid("grdList","20","54",null,null,"20","0",null,null,null,null,this.divForm.form.Div04_00.form.tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsTaskListS");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"250\"/><Column size=\"200\"/><Column size=\"250\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"현재 Task ID\"/><Cell col=\"1\" text=\"현재 Task 명\"/><Cell col=\"2\" text=\"다음 Task ID\"/><Cell col=\"3\" text=\"다음 Task 명\"/></Band><Band id=\"body\"><Cell text=\"bind:nowTaskId\" textAlign=\"left\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &apos;text&apos; : &apos;none&apos;\"/><Cell col=\"1\" text=\"bind:nowTaskNm\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:nextTaskId\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &apos;text&apos; : &apos;none&apos;\"/><Cell col=\"3\" text=\"bind:nextTaskNm\"/></Band></Format></Formats>");
            this.divForm.form.Div04_00.form.tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","350.00","0","45","34",null,null,null,null,null,null,this.divForm.form.Div04_00.form.tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("true");
            this.divForm.form.Div04_00.form.tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnGrdRegi","405.00","0","45","34",null,null,null,null,null,null,this.divForm.form.Div04_00.form.tab00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_visible("true");
            this.divForm.form.Div04_00.form.tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn",null,"10","100","34","20",null,null,null,null,null,this.divForm.form.Div04_00.form.tab00.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("start");
            obj.set_fittocontents("width");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnGrdDel\"/><PanelItem id=\"PanelItem00\" componentid=\"btnGrdRegi\"/></Contents>");
            this.divForm.form.Div04_00.form.tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staTotal02","20","10","200","34",null,null,null,null,null,null,this.divForm.form.Div04_00.form.tab00.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("시작 Task 매핑 정보");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Txt60018");
            this.divForm.form.Div04_00.form.tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.divForm.form.Div04_00.form.tab00);
            obj.set_text("종료 Task 매핑");
            this.divForm.form.Div04_00.form.tab00.addChild(obj.name, obj);

            obj = new Grid("grdList","20","54",null,null,"20","0",null,null,null,null,this.divForm.form.Div04_00.form.tab00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsTaskListE");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"250\"/><Column size=\"200\"/><Column size=\"250\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"현재 Task ID\"/><Cell col=\"1\" text=\"현재 Task 명\"/><Cell col=\"2\" text=\"다음 Task ID\"/><Cell col=\"3\" text=\"다음 Task 명\"/></Band><Band id=\"body\"><Cell text=\"bind:nowTaskId\" textAlign=\"left\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &apos;text&apos; : &apos;none&apos;\"/><Cell col=\"1\" text=\"bind:nowTaskNm\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:nextTaskId\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &apos;text&apos; : &apos;none&apos;\"/><Cell col=\"3\" text=\"bind:nextTaskNm\"/></Band></Format></Formats>");
            this.divForm.form.Div04_00.form.tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","350.00","0","45","34",null,null,null,null,null,null,this.divForm.form.Div04_00.form.tab00.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("true");
            this.divForm.form.Div04_00.form.tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btnGrdRegi","405.00","0","45","34",null,null,null,null,null,null,this.divForm.form.Div04_00.form.tab00.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_visible("true");
            this.divForm.form.Div04_00.form.tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn",null,"10","100","34","20",null,null,null,null,null,this.divForm.form.Div04_00.form.tab00.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("start");
            obj.set_fittocontents("width");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnGrdDel\"/><PanelItem id=\"PanelItem00\" componentid=\"btnGrdRegi\"/></Contents>");
            this.divForm.form.Div04_00.form.tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("staTotal02","20","10","200","34",null,null,null,null,null,null,this.divForm.form.Div04_00.form.tab00.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_text("종료 Task 매핑 정보");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Txt60018");
            this.divForm.form.Div04_00.form.tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Div("divPopBtn","0","550","100%","60",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnSave","457.00","30","68","40",null,null,null,null,null,null,this.divForm.form.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            this.divForm.form.divPopBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.Div04_00.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.Div04_00.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("7");
                p.Static00.set_text("서비스 분야별 Task 매핑 정보");
                p.Static00.set_cssclass("sta_WF_Txt60018");
                p.Static00.move("0","0","194","34",null,null);

                p.Panel00.set_taborder("8");
                p.Panel00.set_fittocontents("width");
                p.Panel00.move("5","44","100","34",null,null);

                p.PanelGrdBtn.set_taborder("3");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_fittocontents("width");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.set_flexgrow("1");
                p.PanelGrdBtn.move(null,"44","100","34","0",null);

                p.grdList.set_taborder("0");
                p.grdList.set_binddataset("dsList");
                p.grdList.set_autofittype("col");
                p.grdList.set_autoenter("select");
                p.grdList.move("0","88","100.00%","310",null,null);

                p.btnGrdDel.set_taborder("1");
                p.btnGrdDel.set_text("삭제");
                p.btnGrdDel.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel.set_visible("false");
                p.btnGrdDel.move("350.00","0","45","34",null,null);

                p.btnGrdRegi.set_taborder("2");
                p.btnGrdRegi.set_text("추가");
                p.btnGrdRegi.set_cssclass("btn_WF_SmallBlack");
                p.btnGrdRegi.set_visible("false");
                p.btnGrdRegi.move("405.00","0","45","34",null,null);

                p.staTotal02.set_taborder("4");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.move("75","0","30","34",null,null);

                p.staTotal01.set_taborder("5");
                p.staTotal01.set_text("1000");
                p.staTotal01.set_cssclass("sta_WF_Total");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.set_fittocontents("width");
                p.staTotal01.move("32","0","43","34",null,null);

                p.staTotal.set_taborder("6");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("5","0","27","34",null,null);
            	}
            );
            obj.set_verticalgap("10");
            obj.set_type("default");
            obj.set_flexwrap("wrap");
            this.divForm.form.Div04_00.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div04_00.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div04_00.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdList.set_autofittype("none");
                p.grdList.move("0","86","100.00%","310",null,null);

                p.btnGrdRegi.set_visible("false");

                p.btnGrdDel.set_visible("false");
            	}
            );
            obj.set_verticalgap("10");
            obj.set_type("default");
            obj.set_flexwrap("wrap");
            this.divForm.form.Div04_00.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div04_00.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div04_00.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("8");
            obj.set_type("default");
            obj.set_flexwrap("wrap");
            this.divForm.form.Div04_00.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div04_00.form.tab00.Tabpage1.form
            obj = new Layout("default","",0,0,this.divForm.form.Div04_00.form.tab00.Tabpage1.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdList.set_taborder("0");
                p.grdList.set_binddataset("dsTaskListS");
                p.grdList.set_autofittype("col");
                p.grdList.set_autoenter("select");
                p.grdList.move("20","54",null,null,"20","0");

                p.btnGrdDel.set_taborder("1");
                p.btnGrdDel.set_text("삭제");
                p.btnGrdDel.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel.set_visible("true");
                p.btnGrdDel.move("350.00","0","45","34",null,null);

                p.btnGrdRegi.set_taborder("2");
                p.btnGrdRegi.set_text("추가");
                p.btnGrdRegi.set_cssclass("btn_WF_SmallBlack");
                p.btnGrdRegi.set_visible("true");
                p.btnGrdRegi.move("405.00","0","45","34",null,null);

                p.PanelGrdBtn.set_taborder("3");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("start");
                p.PanelGrdBtn.set_fittocontents("width");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.move(null,"10","100","34","20",null);

                p.staTotal02.set_taborder("4");
                p.staTotal02.set_text("시작 Task 매핑 정보");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.set_cssclass("sta_WF_Txt60018");
                p.staTotal02.move("20","10","200","34",null,null);
            	}
            );
            this.divForm.form.Div04_00.form.tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div04_00.form.tab00.Tabpage1.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div04_00.form.tab00.Tabpage1.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdList.set_autofittype("none");
                p.grdList.move("20","52",null,null,"20","0");
            	}
            );
            this.divForm.form.Div04_00.form.tab00.Tabpage1.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div04_00.form.tab00.Tabpage2.form
            obj = new Layout("default","",0,0,this.divForm.form.Div04_00.form.tab00.Tabpage2.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdList.set_taborder("0");
                p.grdList.set_binddataset("dsTaskListE");
                p.grdList.set_autofittype("col");
                p.grdList.set_autoenter("select");
                p.grdList.move("20","54",null,null,"20","0");

                p.btnGrdDel.set_taborder("1");
                p.btnGrdDel.set_text("삭제");
                p.btnGrdDel.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel.set_visible("true");
                p.btnGrdDel.move("350.00","0","45","34",null,null);

                p.btnGrdRegi.set_taborder("2");
                p.btnGrdRegi.set_text("추가");
                p.btnGrdRegi.set_cssclass("btn_WF_SmallBlack");
                p.btnGrdRegi.set_visible("true");
                p.btnGrdRegi.move("405.00","0","45","34",null,null);

                p.PanelGrdBtn.set_taborder("3");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("start");
                p.PanelGrdBtn.set_fittocontents("width");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.move(null,"10","100","34","20",null);

                p.staTotal02.set_taborder("4");
                p.staTotal02.set_text("종료 Task 매핑 정보");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.set_cssclass("sta_WF_Txt60018");
                p.staTotal02.move("20","10","200","34",null,null);
            	}
            );
            this.divForm.form.Div04_00.form.tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div04_00.form.tab00.Tabpage2.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div04_00.form.tab00.Tabpage2.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdList.set_autofittype("none");
                p.grdList.move("20","52",null,null,"20","0");
            	}
            );
            this.divForm.form.Div04_00.form.tab00.Tabpage2.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div04_00.form
            obj = new Layout("default","",0,0,this.divForm.form.Div04_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staSubTitle.set_taborder("0");
                p.staSubTitle.set_text("평가대상 서비스그룹 [ SLM_SVG_2024_3 ]");
                p.staSubTitle.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle.move("0","0","100.00%","50",null,null);

                p.pan00.set_taborder("1");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("0","60","100.00%","409",null,null);

                p.divGrd.set_taborder("2");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("30.00","126","100%","398",null,null);

                p.tab00.set_taborder("3");
                p.tab00.set_tabindex("0");
                p.tab00.move("0","563","100.00%","300",null,null);

                p.tab00.Tabpage1.set_text("시작 Task 매핑");

                p.tab00.Tabpage2.set_text("종료 Task 매핑");
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            this.divForm.form.Div04_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div04_00.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div04_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            this.divForm.form.Div04_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divPopBtn.form
            obj = new Layout("default","",0,0,this.divForm.form.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnSave.set_taborder("1");
                p.btnSave.set_text("확인");
                p.btnSave.set_cssclass("btn_WF_Yes");
                p.btnSave.set_fittocontents("width");
                p.btnSave.move("457.00","30","68","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("20");
            this.divForm.form.divPopBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divPopBtn.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divPopBtn.form,
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
            this.divForm.form.divPopBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div04_00.set_taborder("0");
                p.Div04_00.set_text("Div00");
                p.Div04_00.set_cssclass("div_WF_Bg");
                p.Div04_00.set_fittocontents("height");
                p.Div04_00.move("0","30","100%","800",null,null);

                p.divPopBtn.set_taborder("1");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.move("0","550","100%","60",null,null);
            	}
            );
            obj.set_verticalgap("10");
            obj.set_type("vertical");
            obj.set_spacing("20px 20px 20px 20px");
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
            obj.set_verticalgap("10");
            obj.set_type("vertical");
            obj.set_spacing("20px 20px 20px 20px");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1000,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("SLM 서비스 분야별 매핑정보 관리");

                p.divForm.set_taborder("1");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("height");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.move("0","0",null,null,"0","0");
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",480,900,this,
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

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COM021P08.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	COM021P08.xfdl
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

        	this.srvcGroupId = this.getOwnerFrame().srvcGroupId;
        	this.divForm.form.Div04_00.form.staSubTitle.text = "평가대상 서비스그룹 [ " + this.srvcGroupId + " ]";

        	this.getComCodeSearchTransaction();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	this.getSrvcListSearchTransaction(this.srvcGroupId);
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
        this.getComCodeSearchTransaction = function()
        {
        	var strSvcId    = "searchCode";
        	var strSvcUrl   = "slm/slmComCodeSrvcKndInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsSrvcKnd=dsList";
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

        // 평가대상 서비스그룹 Task 현황
        this.getSrvcListSearchTransaction = function(srvcGroupId)
        {
        	this.dsTaskListS.clearData();
        	this.dsTaskListE.clearData();
        	this.dsTaskListC.clearData();

        	var strSvcId    = "search";
        	var strSvcUrl   = "slm/slmSrvcFldMpngListInq.do";
        	var inData      = "";
        	var outData     = "dsList=dsList dsSecInfo=dsSecInfo";
        	var strArg      = "id=" + srvcGroupId;
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

        // 평가대상 서비스그룹 Task 상세현황
        this.getTaskListSearchTransaction = function()
        {
        	var strSvcId    = "searchTask";
        	var strSvcUrl   = "slm/slmSrvcFldMpngInfoInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsTaskListS=dsTaskListS dsTaskListE=dsTaskListE dsTaskListC=dsTaskListC";
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

        // task 조회
        this.getTaskSearchTransaction = function(taskId)
        {
        	var strSvcId    = "task";
        	var strSvcUrl   = "slm/tspWfStngCsafInq.do";
        	var inData      = "";
        	var outData     = "dsTask=dsList";
        	var strArg      = "id=" + taskId;
        	var callBackFnc = "fnCallback";
        	var isAsync   	= false;

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
        	var strSvcUrl   = "slm/slmSrvcFldMpngInfoStrg.do";
        	var inData      = "dsSecInfo=dsSecInfo:U dsTaskListS=dsTaskListS:U dsTaskListE=dsTaskListE:U dsTaskListC=dsTaskListC:U";
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
        		case "searchCode" :
        			this.dsSrvcKnd.filter("uprCd == ''");
        			this.dsTaskFldId.copyData(this.dsSrvcKnd, true);

        			this.dsSrvcKnd.filter("uprCd != ''");
        			this.dsSrvcFldId.copyData(this.dsSrvcKnd, true);

        			this.cfnSearch();
        			break;
        		case "search" :
        			this.divForm.form.Div04_00.form.divGrd.form.staTotal01.text = this.dsList.getRowCount();
        			break;
        		case "searchTask" :
        			break;
        		case "task" :
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
        		var arr = {"result" : "Y"};
        		this.close(JSON.stringify(arr));
        	}
        	else if(sPopupId == "del_S") {
        		if(oRtn.result == "Y") {
        			this.dsTaskListS.deleteRow(this.dsTaskListS.rowposition);
        		}
        	}
        	else if(sPopupId == "del_E") {
        		if(oRtn.result == "Y") {
        			this.dsTaskListE.deleteRow(this.dsTaskListE.rowposition);
        		}
        	}
        	else if(sPopupId == "del_C") {
        		if(oRtn.result == "Y") {
        			this.dsTaskListC.deleteRow(this.dsTaskListC.rowposition);
        		}
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {

        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // task 상세조회
        this.dsList_onrowposchanged = function(obj,e)
        {
        	if(e.newrow > -1) {
        		this.dsSearch.setColumn(0, "srvcGroupId", obj.getColumn(e.newrow, "srvcGroupId"));
        		this.dsSearch.setColumn(0, "slmSrvcId", obj.getColumn(e.newrow, "slmSrvcId"));

        		this.getTaskListSearchTransaction();
        	}
        };

        // 시작 - 추가
        this.divForm_Div04_00_tab00_Tabpage1_btnGrdRegi_onclick = function(obj,e)
        {
        	var nRow = this.dsTaskListS.addRow();
        	this.dsTaskListS.setColumn(nRow, "bgngEndSe", "S");
        	this.dsTaskListS.setColumn(nRow, "srvcGroupId", this.srvcGroupId);
        	this.dsTaskListS.setColumn(nRow, "slmSrvcId", this.dsList.getColumn(this.dsList.rowposition, "slmSrvcId"));
        };

        // 시작 - 삭제
        this.divForm_Div04_00_tab00_Tabpage1_btnGrdDel_onclick = function(obj,e)
        {
        	if(this.dsTaskListS.rowposition > -1) {
        		this.gfnConfirmMsg("del_S", "MSG_005", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        	} else {
        		this.gfnAlertMsg("msg", "MSG_006");
        	}
        };

        // 종료 - 추가
        this.divForm_Div04_00_tab00_Tabpage2_btnGrdRegi_onclick = function(obj,e)
        {
        	var nRow = this.dsTaskListE.addRow();
        	this.dsTaskListE.setColumn(nRow, "bgngEndSe", "E");
        	this.dsTaskListE.setColumn(nRow, "srvcGroupId", this.srvcGroupId);
        	this.dsTaskListE.setColumn(nRow, "slmSrvcId", this.dsList.getColumn(this.dsList.rowposition, "slmSrvcId"));
        };

        // 종료 - 삭제
        this.divForm_Div04_00_tab00_Tabpage2_btnGrdDel_onclick = function(obj,e)
        {
        	if(this.dsTaskListE.rowposition > -1) {
        		this.gfnConfirmMsg("del_E", "MSG_005", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        	} else {
        		this.gfnAlertMsg("msg", "MSG_006");
        	}
        };

        // 취소 - 추가
        this.divForm_Div04_00_tab00_Tabpage4_btnGrdRegi_onclick = function(obj,e)
        {
        	var nRow = this.dsTaskListC.addRow();
        	this.dsTaskListC.setColumn(nRow, "bgngEndSe", "C");
        	this.dsTaskListC.setColumn(nRow, "srvcGroupId", this.srvcGroupId);
        	this.dsTaskListC.setColumn(nRow, "slmSrvcId", this.dsList.getColumn(this.dsList.rowposition, "slmSrvcId"));
        };

        // 취소 - 삭제
        this.divForm_Div04_00_tab00_Tabpage4_btnGrdDel_onclick = function(obj,e)
        {
        	if(this.dsTaskListC.rowposition > -1) {
        		this.gfnConfirmMsg("del_C", "MSG_005", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        	} else {
        		this.gfnAlertMsg("msg", "MSG_006");
        	}
        };

        // 저장
        this.divForm_divPopBtn_btnSave_onclick = function(obj,e)
        {
        	if(this.gfnDsIsUpdated(this.dsSecInfo) != true && this.gfnDsIsUpdated(this.dsTaskListS) != true && this.gfnDsIsUpdated(this.dsTaskListE) != true && this.gfnDsIsUpdated(this.dsTaskListC) != true) {
        		this.gfnAlertMsg("msg", "MSG_004");
        	} else {
        		var arr = [ { "id" : "nowTaskId", "title" : "현재 Task"}
        				  , { "id" : "nextTaskId", "title" : "다음 Task"}
        				  ];

        		if(this.fnGrdValidation(arr, this.divForm.form.Div04_00.form.tab00.Tabpage1.form.grdList) != true) {
        			return;
        		}

        		if(this.fnGrdValidation(arr, this.divForm.form.Div04_00.form.tab00.Tabpage2.form.grdList) != true) {
        			return;
        		}

        		this.gfnConfirmMsg("save", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        	}
        };

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

        this.dsTaskListS_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "nowTaskId") {
        		this.getTaskSearchTransaction(e.newvalue);

        		if(this.dsTask.getRowCount() > 0) {
        			obj.setColumn(e.row, "nowTaskNm", this.dsTask.getColumn(0, "taskNm"));
        		} else {
        			obj.setColumn(e.row, "nowTaskNm", "N/A");
        		}
        	} else if(e.columnid == "nextTaskId") {
        		this.getTaskSearchTransaction(e.newvalue);

        		if(this.dsTask.getRowCount() > 0) {
        			obj.setColumn(e.row, "nextTaskNm", this.dsTask.getColumn(0, "taskNm"));
        		} else {
        			obj.setColumn(e.row, "nextTaskNm", "N/A");
        		}
        	}
        };

        this.dsTaskListE_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "nowTaskId") {
        		this.getTaskSearchTransaction(e.newvalue);

        		if(this.dsTask.getRowCount() > 0) {
        			obj.setColumn(e.row, "nowTaskNm", this.dsTask.getColumn(0, "taskNm"));
        		} else {
        			obj.setColumn(e.row, "nowTaskNm", "N/A");
        		}
        	} else if(e.columnid == "nextTaskId") {
        		this.getTaskSearchTransaction(e.newvalue);

        		if(this.dsTask.getRowCount() > 0) {
        			obj.setColumn(e.row, "nextTaskNm", this.dsTask.getColumn(0, "taskNm"));
        		} else {
        			obj.setColumn(e.row, "nextTaskNm", "N/A");
        		}
        	}
        };

        this.dsTaskListC_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "nowTaskId") {
        		this.getTaskSearchTransaction(e.newvalue);

        		if(this.dsTask.getRowCount() > 0) {
        			obj.setColumn(e.row, "nowTaskNm", this.dsTask.getColumn(0, "taskNm"));
        		} else {
        			obj.setColumn(e.row, "nowTaskNm", "N/A");
        		}
        	} else if(e.columnid == "nextTaskId") {
        		this.getTaskSearchTransaction(e.newvalue);

        		if(this.dsTask.getRowCount() > 0) {
        			obj.setColumn(e.row, "nextTaskNm", this.dsTask.getColumn(0, "taskNm"));
        		} else {
        			obj.setColumn(e.row, "nextTaskNm", "N/A");
        		}
        	}
        };

        this.dsList_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "evlSecNm") {
        		var fRow = this.dsSecInfo.findRowExpr("srvcGroupId == '" + obj.getColumn(e.row, "srvcGroupId") + "' && slmSrvcId == '" + obj.getColumn(e.row, "slmSrvcId") + "'");
        		if(this.gfnIsNull(e.newvalue) == true) {
        			if(fRow > -1) {
        				this.dsSecInfo.deleteRow(fRow);
        			}
        		} else {
        			if(fRow < 0) {
        				var nRow = this.dsSecInfo.addRow();
        				this.dsSecInfo.setColumn(nRow, "srvcGroupId", obj.getColumn(e.row, "srvcGroupId"));
        				this.dsSecInfo.setColumn(nRow, "slmSrvcId", obj.getColumn(e.row, "slmSrvcId"));
        				this.dsSecInfo.setColumn(nRow, "evlSecNo", "1");
        				this.dsSecInfo.setColumn(nRow, "evlSecNm", obj.getColumn(e.row, "evlSecNm"));
        			} else {
        				this.dsSecInfo.setColumn(fRow, "evlSecNm", e.newvalue);
        			}
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.Div04_00.form.tab00.addEventHandler("onchanged",this.divForm_Div00_tab00_onchanged,this);
            this.divForm.form.Div04_00.form.tab00.Tabpage1.form.btnGrdDel.addEventHandler("onclick",this.divForm_Div04_00_tab00_Tabpage1_btnGrdDel_onclick,this);
            this.divForm.form.Div04_00.form.tab00.Tabpage1.form.btnGrdRegi.addEventHandler("onclick",this.divForm_Div04_00_tab00_Tabpage1_btnGrdRegi_onclick,this);
            this.divForm.form.Div04_00.form.tab00.Tabpage2.form.btnGrdDel.addEventHandler("onclick",this.divForm_Div04_00_tab00_Tabpage2_btnGrdDel_onclick,this);
            this.divForm.form.Div04_00.form.tab00.Tabpage2.form.btnGrdRegi.addEventHandler("onclick",this.divForm_Div04_00_tab00_Tabpage2_btnGrdRegi_onclick,this);
            this.divForm.form.divPopBtn.form.btnSave.addEventHandler("onclick",this.divForm_divPopBtn_btnSave_onclick,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsTaskListS.addEventHandler("oncolumnchanged",this.dsTaskListS_oncolumnchanged,this);
            this.dsTaskListE.addEventHandler("oncolumnchanged",this.dsTaskListE_oncolumnchanged,this);
            this.dsTaskListC.addEventHandler("oncolumnchanged",this.dsTaskListC_oncolumnchanged,this);
        };
        this.loadIncludeScript("COM021P08.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
