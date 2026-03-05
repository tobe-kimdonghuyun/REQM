(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM021P02");
            this.set_titletext("SLM 평가대상 조직표 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,877);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"evlYr\" type=\"STRING\" size=\"256\"/><Column id=\"evlNotn\" type=\"STRING\" size=\"256\"/><Column id=\"ognzGroupId\" type=\"STRING\" size=\"256\"/><Column id=\"deptId\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"coSe\" type=\"STRING\" size=\"256\"/><Column id=\"upDeptId\" type=\"STRING\" size=\"256\"/><Column id=\"upDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"evlTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"deptWgvl\" type=\"STRING\" size=\"256\"/><Column id=\"scrRfltRt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOgnzGroup", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"ognzGroupId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSlmCoSe", this);
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"ognzGroupId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYn", this);
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdId\">Y</Col><Col id=\"cdNm\">Y</Col></Row><Row><Col id=\"cdId\">N</Col><Col id=\"cdNm\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcnYn", this);
            obj._setContents("<ColumnInfo><Column id=\"ognzGroupId\" type=\"STRING\" size=\"256\"/><Column id=\"excnYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"evlYr\" type=\"STRING\" size=\"256\"/><Column id=\"evlNotn\" type=\"STRING\" size=\"256\"/><Column id=\"ognzGroupId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","0",null,"817","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_fittocontents("none");
            obj.set_formscrollbartype("default default");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","0","100.00%","157",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","157",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan00_01\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("참조대상 조직표 ID");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_01","20","0","100%","146",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("0");
            obj.set_verticalgap("10");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel04_02_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel04_02_00","0","685","100%","90",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("4");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("start");
            obj.set_type("horizontal");
            obj.set_verticalgap("10");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem01\" componentid=\"sta00_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00","628","48","400","90",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"cmbOgnzGroup\"/><PanelItem id=\"PanelItem02\" componentid=\"btnCopy\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("sta00_00","20","20","600","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("3");
            obj.set_text("지표값 계산에 사용된 적 있는 조직그룹ID는 수정/삭제 불가합니다. 변경 필요 시, 신규 생성 후 수정/삭제 바랍니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_color("red");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Button("btnCopy","457.00","30","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("5");
            obj.set_text("조직표 복사 생성");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_flexgrow("0");
            obj.set_enable("true");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Combo("cmbOgnzGroup","0","40","100.00%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("7");
            obj.set_flexgrow("0");
            obj.set_innerdataset("dsOgnzGroup");
            obj.set_codecolumn("ognzGroupId");
            obj.set_datacolumn("ognzGroupId");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div04_00","0","230","100.00%","640",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle","0","0","100.00%","50",null,null,null,null,null,null,this.divForm.form.Div04_00.form);
            obj.set_taborder("0");
            obj.set_text("평가대상 조직표");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.form.Div04_00.addChild(obj.name, obj);

            obj = new Panel("pan00","0","50","100.00%","590",null,null,null,null,null,null,this.divForm.form.Div04_00.form);
            obj.set_taborder("1");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divGrd\"/></Contents>");
            this.divForm.form.Div04_00.addChild(obj.name, obj);

            obj = new Div("divGrd","20","10","100%","570",null,null,null,null,null,null,this.divForm.form.Div04_00.form);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.Div04_00.addChild(obj.name, obj);

            obj = new Panel("Panel00","5","0","100","34",null,null,null,null,null,null,this.divForm.form.Div04_00.form.divGrd.form);
            obj.set_taborder("7");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTotal\"/><PanelItem id=\"PanelItem01\" componentid=\"staTotal01\"/><PanelItem id=\"PanelItem02\" componentid=\"staTotal02\"/></Contents>");
            this.divForm.form.Div04_00.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn","1040","0","100","34",null,null,null,null,null,null,this.divForm.form.Div04_00.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("none");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnGrdDel\"/><PanelItem id=\"PanelItem00\" componentid=\"btnGrdRegi\"/></Contents>");
            this.divForm.form.Div04_00.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdList","0","40","100.00%","530",null,null,null,null,null,null,this.divForm.form.Div04_00.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.getSetter("uFunction").set("checkbox");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/><Column size=\"130\"/><Column size=\"200\"/><Column size=\"30\"/><Column size=\"200\"/><Column size=\"30\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"40\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"조직코드\"/><Cell col=\"1\" text=\"회사구분\"/><Cell col=\"2\" colspan=\"2\" text=\"조직명\"/><Cell col=\"4\" colspan=\"2\" text=\"취합 조직명\"/><Cell col=\"6\" text=\"부서가중치\"/><Cell col=\"7\" text=\"평가대상 여부\"/><Cell col=\"8\" colspan=\"2\" text=\"점수 반영율\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:deptId\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:coSe\" displaytype=\"combotext\" edittype=\"combo\" textAlign=\"center\" combodataset=\"dsSlmCoSe\" combocodecol=\"cdId\" combodatacol=\"cdNm\"/><Cell col=\"2\" text=\"bind:deptNm\" border=\"0px none, 0px none, 1px solid #dddddd\"/><Cell col=\"3\" displaytype=\"normal\" expandshow=\"show\" expandsize=\"30\"/><Cell col=\"4\" text=\"bind:upDeptNm\" textAlign=\"left\" border=\"0px none, 0px none, 1px solid #dddddd\"/><Cell col=\"5\" expandshow=\"show\" expandsize=\"30\"/><Cell col=\"6\" text=\"bind:deptWgvl\" textAlign=\"center\" edittype=\"mask\" displaytype=\"mask\" maskeditformat=\"##.##\" editmaxlength=\"5\"/><Cell col=\"7\" text=\"bind:evlTrgtYn\" textAlign=\"center\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"dsYn\" combocodecol=\"cdId\" combodatacol=\"cdNm\"/><Cell col=\"8\" text=\"bind:scrRfltRt\" textAlign=\"right\" edittype=\"text\" editmaxlength=\"3\" editinputtype=\"number\" border=\"0px none, 0px none, 1px solid #dddddd\"/><Cell col=\"9\" cssclass=\"CellEnd\" textAlign=\"left\" expr=\"scrRfltRt != &apos;&apos; ? &apos;%&apos; : &apos;&apos;\"/></Band></Format></Formats>");
            this.divForm.form.Div04_00.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","350.00","0","45","34",null,null,null,null,null,null,this.divForm.form.Div04_00.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("true");
            this.divForm.form.Div04_00.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdRegi","405.00","0","45","34",null,null,null,null,null,null,this.divForm.form.Div04_00.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_visible("true");
            this.divForm.form.Div04_00.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","75","0","30","34",null,null,null,null,null,null,this.divForm.form.Div04_00.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_text("건");
            obj.set_usedecorate("true");
            obj.set_visible("false");
            this.divForm.form.Div04_00.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal01","32","0","43","34",null,null,null,null,null,null,this.divForm.form.Div04_00.form.divGrd.form);
            obj.set_taborder("5");
            obj.set_text("1000");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divForm.form.Div04_00.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","5","0","27","34",null,null,null,null,null,null,this.divForm.form.Div04_00.form.divGrd.form);
            obj.set_taborder("6");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divForm.form.Div04_00.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divPopBtn","0","divForm:0",null,"60","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","457.00","30","68","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            this.divPopBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.Div00.form
            obj = new Layout("default","",0,0,this.divForm.form.Div00.form,
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
                p.pan00.move("0","60","100.00%","157",null,null);

                p.staLabel00.set_taborder("1");
                p.staLabel00.set_text("참조대상 조직표 ID");
                p.staLabel00.set_cssclass("sta_WF_Label");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.pan00_01.set_taborder("2");
                p.pan00_01.set_type("vertical");
                p.pan00_01.set_flexgrow("0");
                p.pan00_01.set_verticalgap("10");
                p.pan00_01.set_fittocontents("height");
                p.pan00_01.set_minwidth("");
                p.pan00_01.move("20","0","100%","146",null,null);

                p.Panel04_02_00.set_taborder("4");
                p.Panel04_02_00.set_fittocontents("height");
                p.Panel04_02_00.set_flexcrossaxisalign("start");
                p.Panel04_02_00.set_type("horizontal");
                p.Panel04_02_00.set_verticalgap("10");
                p.Panel04_02_00.set_horizontalgap("10");
                p.Panel04_02_00.set_flexwrap("wrap");
                p.Panel04_02_00.move("0","685","100%","90",null,null);

                p.Panel00.set_taborder("6");
                p.Panel00.set_type("vertical");
                p.Panel00.set_verticalgap("10");
                p.Panel00.set_flexgrow("1");
                p.Panel00.move("628","48","400","90",null,null);

                p.sta00_00.set_taborder("3");
                p.sta00_00.set_text("지표값 계산에 사용된 적 있는 조직그룹ID는 수정/삭제 불가합니다. 변경 필요 시, 신규 생성 후 수정/삭제 바랍니다.");
                p.sta00_00.set_cssclass("sta_WF_Des");
                p.sta00_00.set_fittocontents("height");
                p.sta00_00.set_flexgrow("1");
                p.sta00_00.set_color("red");
                p.sta00_00.move("20","20","600","40",null,null);

                p.btnCopy.set_taborder("5");
                p.btnCopy.set_text("조직표 복사 생성");
                p.btnCopy.set_cssclass("btn_WF_Yes");
                p.btnCopy.set_flexgrow("0");
                p.btnCopy.set_enable("true");
                p.btnCopy.move("457.00","30","100%","40",null,null);

                p.cmbOgnzGroup.set_taborder("7");
                p.cmbOgnzGroup.set_flexgrow("0");
                p.cmbOgnzGroup.set_innerdataset("dsOgnzGroup");
                p.cmbOgnzGroup.set_codecolumn("ognzGroupId");
                p.cmbOgnzGroup.set_datacolumn("ognzGroupId");
                p.cmbOgnzGroup.set_text("전체");
                p.cmbOgnzGroup.set_value("");
                p.cmbOgnzGroup.set_index("-1");
                p.cmbOgnzGroup.move("0","40","100.00%","40",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div00.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div04_00.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.Div04_00.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_taborder("7");
                p.Panel00.set_fittocontents("width");
                p.Panel00.move("5","0","100","34",null,null);

                p.PanelGrdBtn.set_taborder("3");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_fittocontents("none");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.set_flexgrow("1");
                p.PanelGrdBtn.move("1040","0","100","34",null,null);

                p.grdList.set_taborder("0");
                p.grdList.set_binddataset("dsList");
                p.grdList.set_autofittype("col");
                p.grdList.getSetter("uFunction").set("checkbox");
                p.grdList.set_autoenter("select");
                p.grdList.move("0","40","100.00%","530",null,null);

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

                p.staTotal02.set_taborder("4");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.set_visible("false");
                p.staTotal02.move("75","0","30","34",null,null);

                p.staTotal01.set_taborder("5");
                p.staTotal01.set_text("1000");
                p.staTotal01.set_cssclass("sta_WF_Total");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.set_fittocontents("width");
                p.staTotal01.set_visible("false");
                p.staTotal01.move("32","0","43","34",null,null);

                p.staTotal.set_taborder("6");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.set_visible("false");
                p.staTotal.move("5","0","27","34",null,null);
            	}
            );
            obj.set_verticalgap("10");
            obj.set_type("horizontal");
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

                p.btnGrdRegi.set_visible("false");

                p.btnGrdDel.set_visible("false");
            	}
            );
            obj.set_verticalgap("10");
            obj.set_type("horizontal");
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
            obj.set_verticalgap("10");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            this.divForm.form.Div04_00.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div04_00.form
            obj = new Layout("default","",0,0,this.divForm.form.Div04_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staSubTitle.set_taborder("0");
                p.staSubTitle.set_text("평가대상 조직표");
                p.staSubTitle.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle.move("0","0","100.00%","50",null,null);

                p.pan00.set_taborder("1");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("10px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("0","50","100.00%","590",null,null);

                p.divGrd.set_taborder("2");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("20","10","100%","570",null,null);
            	}
            );
            obj.set_type("vertical");
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
            this.divForm.form.Div04_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div00.set_taborder("0");
                p.Div00.set_text("Div00");
                p.Div00.set_cssclass("div_WF_Bg");
                p.Div00.set_fittocontents("height");
                p.Div00.move("0","0","100.00%","157",null,null);

                p.Div04_00.set_taborder("1");
                p.Div04_00.set_text("Div00");
                p.Div04_00.set_cssclass("div_WF_Bg");
                p.Div04_00.set_fittocontents("height");
                p.Div04_00.move("0","230","100.00%","640",null,null);
            	}
            );
            obj.set_verticalgap("20");
            obj.set_type("vertical");
            obj.set_spacing("0px 20px 0px 20px");
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
            obj.set_verticalgap("20");
            obj.set_type("vertical");
            obj.set_spacing("0px 20px 0px 20px");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divPopBtn.form
            obj = new Layout("default","",0,0,this.divPopBtn.form,
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
            obj = new Layout("default","Desktop_screen",1200,877,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("SLM 평가대상 조직표 관리");

                p.divForm.set_taborder("1");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("none");
                p.divForm.set_formscrollbartype("default default");
                p.divForm.set_formscrolltype("both");
                p.divForm.move("0","0",null,"817","0",null);

                p.divPopBtn.set_taborder("1");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.move("0","divForm:0",null,"60","0",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",480,877,this,
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
            obj = new BindItem("item0","divForm.form.Div00.form.cmbOgnzGroup","value","dsSearch","ognzGroupId");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COM021P02.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	COM021P02.xfdl
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

        this.ognzGroupId = "";

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        	this.fnInit();

        	this.evlYr = this.getOwnerFrame().evlYr;
        	this.evlNotn = this.getOwnerFrame().evlNotn;
        	this.excnYn = this.getOwnerFrame().excnYn;

        	if(this.gfnIsNull(this.getOwnerFrame().ognzGroupId) != true) {
        		this.ognzGroupId = this.getOwnerFrame().ognzGroupId;
        		this.getOgnzGroupSearchTransaction();
        	} else {
        		this.fnSetCompCntr(true);
        		this.divForm.form.Div00.form.btnCopy.enable = false;
        	}
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
        // 평가대상 조직표 ID
        this.getOgnzGroupSearchTransaction = function()
        {
        	var strSvcId    = "searchOgnzGroup";
        	var strSvcUrl   = "slm/slmEvlTrgtOgnzGroupInfoInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsOgnzGroup=dsList";
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

        // 평가대상 조직표
        this.getSearchTransaction = function()
        {
        	var strSvcId    = "search";
        	var strSvcUrl   = "slm/slmEvlTrgtOgnzTblInfoInq.do";
        	var inData      = "";
        	var outData     = "dsList=dsList dsExcnYn=dsExcnYn";
        	var strArg      = "id=" + this.ognzGroupId;
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
        	var strSvcUrl   = "slm/slmEvlTrgtOgnzTblInfoStrg.do";
        	var inData      = "dsList=dsList:U";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= false;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 데이터 저장
        this.saveCopyTransaction = function()
        {
        	var strSvcId    = "save";
        	var strSvcUrl   = "slm/slmEvlTrgtOgnzTblInfoCopyStrg.do";
        	var inData      = "dsCopy=dsCopy:A";
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
        		case "searchOgnzGroup" :
        			if(this.dsOgnzGroup.getRowCount() > 0) {
        				this.divForm.form.Div00.form.cmbOgnzGroup.value = this.ognzGroupId;
        			} else {
        				this.divForm.form.Div00.form.btnCopy.enable = false;
        			}

        			this.cfnSearch();
        			break;
        		case "search":
        			this.divForm.form.Div04_00.form.staSubTitle.text = "평가대상 조직표 [ " + this.dsExcnYn.getColumn(0, "ognzGroupId") + " ]";
        			if(this.dsExcnYn.getRowCount() > 0) {
        				if(this.dsExcnYn.getColumn(0, "excnYn") == "Y") {
        					this.fnSetCompCntr(true);
        				} else {
        					this.fnSetCompCntr(false);
        					this.divForm.form.Div00.form.btnCopy.enable = true;
        				}
        			}
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
        	if(sPopupId == "copy") {
        		if(oRtn.result == "Y") {
        			this.saveCopyTransaction();
        		}
        	}
        	else if(sPopupId == "saveAfter") {
        		var arr = {"result" : "Y"};
        		this.close(JSON.stringify(arr));
        	}
        	else if(sPopupId == "del_confirm") {
        		if(oRtn.result == "Y") {
        			var chk = this.dsList.extractRows("chk == " + 1);
        			if(chk.length > 0) {
        				this.dsList.deleteMultiRows(chk);
        			}
        		}
        	}
        };

        this.fnPopupCallback = function(sPopupId, sRtn)
        {
        	if(sPopupId =="deptSearchPopup") {
        		if (this.gfnIsNull(sRtn)) return;
        		var objRtn = JSON.parse(sRtn);
        		this.dsList.setColumn(this.dsList.rowposition, "deptId", objRtn.deptId);
        		this.dsList.setColumn(this.dsList.rowposition, "deptNm", objRtn.deptNm);
        	}
        	else if(sPopupId =="upDeptSearchPopup") {
        		if (this.gfnIsNull(sRtn)) return;
        		var objRtn = JSON.parse(sRtn);
        		this.dsList.setColumn(this.dsList.rowposition, "upDeptId", objRtn.deptId);
        		this.dsList.setColumn(this.dsList.rowposition, "upDeptNm", objRtn.deptNm);
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	this.gfnCmmCode("slmCoSe", "dsSlmCoSe", "SLM_CO_SE", "");
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // 부서 팝업
        this.divForm_Div04_00_divGrd_Grid00_onexpanddown = function(obj,e)
        {
        	// 조직 팝업
        	if(e.cell == 4) {
        		this.fnCallDeptPopup("deptSearchPopup");
        	}
        	// 취합 조직 팝업
        	else if(e.cell == 6) {
        		this.fnCallDeptPopup("upDeptSearchPopup");
        	}
        };

        this.fnCallDeptPopup = function(popId)
        {
        	var sTitle = "부서 목록";
        	var objArg   = {};

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
         		, width: 1221
         		, height: 650			//width,height 지정하지 않음 popup form size적용
        		, autosize: false
        		, title: sTitle
        		, resize: false
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup(popId, "work::COM/crtr/COM100P03.xfdl", objArg, sPopupCallBack, objOption);
        };

        // 추가
        this.divForm_Div04_00_divGrd_btnGrdRegi_onclick = function(obj,e)
        {
        	var nRow = this.dsList.addRow();
        	this.dsList.setColumn(nRow, "chk", "1");
        	this.dsList.setColumn(nRow, "ognzGroupId", this.ognzGroupId);
        	this.dsList.setColumn(nRow, "evlYr", this.evlYr);
        	this.dsList.setColumn(nRow, "evlNotn", this.evlNotn);
        	this.dsList.setColumn(nRow, "evlTrgtYn", "Y");
        };

        // 삭제
        this.divForm_Div04_00_divGrd_btnGrdDel_onclick = function(obj,e)
        {
        	var chk = this.dsList.findRow("chk", 1);
        	if(chk != -1) {
        		this.gfnConfirmMsg("del_confirm", "MSG_005", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        	} else {
        		this.gfnAlertMsg("msg", "MSG_006");
        	}
        };

        // 저장
        this.divForm_divPopBtn_btnSave_onclick = function(obj,e)
        {
        	var arr = [ { "id" : "deptId", "title" : "조직"}
        	          , { "id" : "upDeptId", "title" : "취합 조직"}
        			  , { "id" : "coSe", "title" : "회사구분"}
        			  , { "id" : "deptWgvl", "title" : "부서가중치"}
        			  , { "id" : "scrRfltRt", "title" : "점수반영율"}
        			  ];
        	var grd = this.divForm.form.Div04_00.form.divGrd.form.grdList;

        	if(this.fnGrdValidation(arr, grd) != true) {
        		return;
        	}

        	this.gfnConfirmMsg("save", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        };

        this.fnGrdValidation = function(arr, grd)
        {
        	var ds = eval("this." + grd.binddataset);
        	for(var i=0; i<ds.getRowCount(); i++) {
        		for(var a=0; a<arr.length; a++) {
        			var cell = grd.getBindCellIndex("body", arr[a].id);
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

        // 복사
        this.divForm_Div00_btnCopy_onclick = function(obj,e)
        {
        	if(this.gfnIsNull(this.divForm.form.Div00.form.cmbOgnzGroup.value) == true) {
        		this.gfnAlertMsg("msg", "MSG_019", ["복사 할 대상 ID 가 없습니다."]);
        		return;
        	}

        	this.dsCopy.clearData();
        	this.dsCopy.addRow();
        	this.dsCopy.setColumn(0, "ognzGroupId", this.divForm.form.Div00.form.cmbOgnzGroup.value);

        	this.gfnConfirmMsg("copy", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        };

        // 버튼 제어
        this.divForm_Div00_cmbOgnzGroup_onitemchanged = function(obj,e)
        {
        	this.ognzGroupId = this.divForm.form.Div00.form.cmbOgnzGroup.value;
        	this.getSearchTransaction();
        };

        this.fnSetCompCntr = function(flag)
        {
        	this.divForm.form.Div00.form.btnCopy.enable = flag;
        	this.divForm.form.Div04_00.form.divGrd.form.btnGrdDel.enable = flag;
        	this.divForm.form.Div04_00.form.divGrd.form.btnGrdRegi.enable = flag;
        	this.divPopBtn.form.btnSave.enable = flag;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.Div00.form.btnCopy.addEventHandler("onclick",this.divForm_Div00_btnCopy_onclick,this);
            this.divForm.form.Div00.form.cmbOgnzGroup.addEventHandler("onitemchanged",this.divForm_Div00_cmbOgnzGroup_onitemchanged,this);
            this.divForm.form.Div04_00.form.divGrd.form.grdList.addEventHandler("onexpanddown",this.divForm_Div04_00_divGrd_Grid00_onexpanddown,this);
            this.divForm.form.Div04_00.form.divGrd.form.btnGrdDel.addEventHandler("onclick",this.divForm_Div04_00_divGrd_btnGrdDel_onclick,this);
            this.divForm.form.Div04_00.form.divGrd.form.btnGrdRegi.addEventHandler("onclick",this.divForm_Div04_00_divGrd_btnGrdRegi_onclick,this);
            this.divPopBtn.form.btnSave.addEventHandler("onclick",this.divForm_divPopBtn_btnSave_onclick,this);
        };
        this.loadIncludeScript("COM021P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
