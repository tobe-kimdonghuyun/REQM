(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM001M04");
            this.set_titletext("검토의견함");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"key\" type=\"STRING\" size=\"256\"/><Column id=\"opnnNo\" type=\"STRING\" size=\"256\"/><Column id=\"rvwOpnnSeq\" type=\"STRING\" size=\"256\"/><Column id=\"opnnNm\" type=\"STRING\" size=\"256\"/><Column id=\"opnnCn\" type=\"STRING\" size=\"256\"/><Column id=\"srvcSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"wcmSerNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"currentPageNo\" type=\"STRING\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"STRING\" size=\"256\"/><Column id=\"opnnNm\" type=\"STRING\" size=\"256\"/><Column id=\"srvcSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"opnnCn\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"currentPageNo\">1</Col><Col id=\"recordCountPerPage\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("<ColumnInfo><Column id=\"totalRecordCount\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo1", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"48","60",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","divTitle:20",null,"900","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("divSch","0","0","100%","160",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","100%","60",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("0");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("50");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"pan00\"/><PanelItem id=\"PanelItem00\" componentid=\"pan01\"/><PanelItem id=\"PanelItem03\" componentid=\"pan02\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01","1694.00","398","320","45",null,null,null,null,"45",null,this.divForm.form.divSch.form);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01\"/><PanelItem id=\"PanelItem02\" componentid=\"Combo01_00_00_00\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("1");
            obj.set_text("서비스유형");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("3");
            obj.set_text("별칭");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan00","1694.00","398","320","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("4");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel\"/><PanelItem id=\"PanelItem02\" componentid=\"Edit01_00\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel02","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("5");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan02","1694.00","398","320","45",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("6");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02\"/><PanelItem id=\"PanelItem02\" componentid=\"Edit01_00_00\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panClose","30","151","100%","30",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnSchClose\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSchClose","1251","185","30","30",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_SchClose");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("9");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSch\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSch","570","192","112","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("10");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            obj.set_fittocontents("width");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("Combo01_00_00_00","788.00","145","20.42%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("11");
            obj.set_flexgrow("1");
            obj.set_innerdataset("dsCombo");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("Edit01_00","841","24","65%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("12");
            obj.set_flexgrow("1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("Edit01_00_00","841","24","65%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("13");
            obj.set_flexgrow("1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","0","divSch:30","100.00%","634",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","0","200","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("14");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTotal\"/><PanelItem id=\"PanelItem01\" componentid=\"staTotal01\"/><PanelItem id=\"PanelItem02\" componentid=\"staTotal02\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("panGrdBtn","870","0","500","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("5");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem00\" componentid=\"btnGrdDel\"/><PanelItem id=\"PanelItem05\" componentid=\"btnGrdRegi\"/><PanelItem id=\"PanelItem03\" componentid=\"btnGrdAdd\"/><PanelItem id=\"PanelItem06\" componentid=\"btnGrdDw\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","panGrdBtn:10","100.00%","450",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.getSetter("uFunction").set("checkbox");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"70\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"서비스유형\"/><Cell col=\"3\" text=\"별칭\"/><Cell col=\"4\" text=\"내용\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:chk\"/><Cell col=\"1\" text=\"bind:rno\" textAlign=\"center\" edittype=\"none\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:srvcSeCd\" textAlign=\"center\" edittype=\"combo\" displaytype=\"combocontrol\" combodataset=\"dsCombo1\" combocodecol=\"cdId\" combodatacol=\"cdNm\"/><Cell col=\"3\" text=\"bind:opnnNm\" textAlign=\"left\" edittype=\"text\" displaytype=\"editcontrol\"/><Cell col=\"4\" text=\"bind:opnnCn\" cssclass=\"CellEnd\" edittype=\"text\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","27","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Combo("grdListCnt","1230","0","80","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_divGrd_form_grdListCnt_innerdataset = new nexacro.NormalDataset("divForm_form_divGrd_form_grdListCnt_innerdataset", obj);
            divForm_form_divGrd_form_grdListCnt_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"datacolumn\">10</Col><Col id=\"codecolumn\">10</Col></Row><Row><Col id=\"datacolumn\">20</Col><Col id=\"codecolumn\">20</Col></Row><Row><Col id=\"datacolumn\">50</Col><Col id=\"codecolumn\">50</Col></Row><Row><Col id=\"datacolumn\">100</Col><Col id=\"codecolumn\">100</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_divGrd_form_grdListCnt_innerdataset);
            obj.set_text("10");
            obj.set_value("10");
            obj.set_index("1");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal00","1165","0","65","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("목록수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdAdd","774.00","10","47","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("7");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDw","774.00","10","124","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("6");
            obj.set_text("다운로드(엑셀)");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal01","staTotal:0","0","43","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("8");
            obj.set_text("1000");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","staTotal01:0","0","30","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("9");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","316.00","0","45","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("10");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdRegi","371.00","0","45","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("11");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("Button00_00","610.00","0","68","40",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("12");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("Panel01","94","0","180","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("15");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTotal00\"/><PanelItem id=\"PanelItem01\" componentid=\"grdListCnt\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divPage","0","583","100.00%","36",null,null,null,null,"36",null,this.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("work::COM/util/paging/paging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("panBtn","0","650","100.00%","40",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("13");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("none");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Button00_00\"/></Contents>");
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
                p.panLabel.set_taborder("0");
                p.panLabel.set_verticalgap("8");
                p.panLabel.set_flexwrap("wrap");
                p.panLabel.set_spacing("0px 0px 10px 0px");
                p.panLabel.set_type("horizontal");
                p.panLabel.set_flexcrossaxisalign("start");
                p.panLabel.set_horizontalgap("50");
                p.panLabel.set_fittocontents("height");
                p.panLabel.set_maxheight("");
                p.panLabel.move("20","14","100%","60",null,null);

                p.pan01.set_taborder("2");
                p.pan01.set_type("horizontal");
                p.pan01.set_horizontalgap("10");
                p.pan01.set_flexgrow("1");
                p.pan01.set_minheight("45");
                p.pan01.set_maxheight("");
                p.pan01.set_minwidth("");
                p.pan01.move("1694.00","398","320","45",null,null);

                p.staLabel01.set_taborder("1");
                p.staLabel01.set_text("서비스유형");
                p.staLabel01.set_cssclass("sta_WF_SchLabel");
                p.staLabel01.set_flexshrink("0");
                p.staLabel01.set_minwidth("");
                p.staLabel01.move("0","0","100","40",null,null);

                p.staLabel.set_taborder("3");
                p.staLabel.set_text("별칭");
                p.staLabel.set_cssclass("sta_WF_SchLabel");
                p.staLabel.set_flexshrink("0");
                p.staLabel.set_minwidth("");
                p.staLabel.move("0","0","100","40",null,null);

                p.pan00.set_taborder("4");
                p.pan00.set_type("horizontal");
                p.pan00.set_horizontalgap("10");
                p.pan00.set_flexgrow("1");
                p.pan00.set_maxheight("");
                p.pan00.set_minwidth("");
                p.pan00.move("1694.00","398","320","40",null,null);

                p.staLabel02.set_taborder("5");
                p.staLabel02.set_text("내용");
                p.staLabel02.set_cssclass("sta_WF_SchLabel");
                p.staLabel02.set_flexshrink("0");
                p.staLabel02.set_minwidth("");
                p.staLabel02.move("0","0","100","40",null,null);

                p.pan02.set_taborder("6");
                p.pan02.set_type("horizontal");
                p.pan02.set_horizontalgap("10");
                p.pan02.set_flexgrow("1");
                p.pan02.set_minwidth("");
                p.pan02.move("1694.00","398","320","45",null,null);

                p.panClose.set_taborder("8");
                p.panClose.set_type("vertical");
                p.panClose.set_cssclass("pal_WF_SchLine");
                p.panClose.set_flexcrossaxisalign("end");
                p.panClose.move("30","151","100%","30",null,null);

                p.btnSchClose.set_taborder("7");
                p.btnSchClose.set_cssclass("btn_WF_SchClose");
                p.btnSchClose.move("1251","185","30","30",null,null);

                p.panSchBtn.set_taborder("9");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100%","40",null,null);

                p.btnSch.set_taborder("10");
                p.btnSch.set_text("조회하기");
                p.btnSch.set_cssclass("btn_WF_Search");
                p.btnSch.set_fittocontents("width");
                p.btnSch.move("570","192","112","40",null,null);

                p.Combo01_00_00_00.set_taborder("11");
                p.Combo01_00_00_00.set_flexgrow("1");
                p.Combo01_00_00_00.set_innerdataset("dsCombo");
                p.Combo01_00_00_00.set_codecolumn("cdId");
                p.Combo01_00_00_00.set_datacolumn("cdNm");
                p.Combo01_00_00_00.set_text("선택");
                p.Combo01_00_00_00.set_value("");
                p.Combo01_00_00_00.set_index("-1");
                p.Combo01_00_00_00.move("788.00","145","20.42%","40",null,null);

                p.Edit01_00.set_taborder("12");
                p.Edit01_00.set_flexgrow("1");
                p.Edit01_00.move("841","24","65%","40",null,null);

                p.Edit01_00_00.set_taborder("13");
                p.Edit01_00_00.set_flexgrow("1");
                p.Edit01_00_00.move("841","24","65%","40",null,null);
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
                p.panClose.move("30","151","100%","30",null,null);

                p.panLabel.set_horizontalgap("50");
                p.panLabel.set_verticalgap("8");
                p.panLabel.move("132","47","100%","156",null,null);

                p.pan02.set_horizontalgap("8");
                p.pan02.set_flexgrow("0");
                p.pan02.move("1694.00","398","100%","45",null,null);

                p.pan01.set_horizontalgap("8");
                p.pan01.set_flexgrow("0");
                p.pan01.move("1694.00","398","100%","40",null,null);

                p.pan00.set_type("horizontal");
                p.pan00.set_fittocontents("height");
                p.pan00.set_flexwrap("nowrap");
                p.pan00.set_horizontalgap("8");
                p.pan00.set_flexgrow("0");
                p.pan00.move("1694.00","398","100%","40",null,null);

                p.Edit01_00.move("841","24","100%","40",null,null);

                p.Edit01_00_00.move("841","24","100%","40",null,null);

                p.Combo01_00_00_00.move("788.00","145","100%","40",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("14px 16px 12px 16px");
            obj.set_flexwrap("wrap");
            this.divForm.form.divSch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divGrd.form.divPage
            obj = new Layout("default","",0,0,this.divForm.form.divGrd.form.divPage.form,function(p){});
            this.divForm.form.divGrd.form.divPage.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_taborder("14");
                p.Panel00.set_fittocontents("width");
                p.Panel00.move("0","0","200","34",null,null);

                p.panGrdBtn.set_taborder("5");
                p.panGrdBtn.set_flexcrossaxisalign("start");
                p.panGrdBtn.set_flexcrossaxiswrapalign("start");
                p.panGrdBtn.set_flexmainaxisalign("end");
                p.panGrdBtn.set_horizontalgap("10");
                p.panGrdBtn.set_fittocontents("width");
                p.panGrdBtn.move("870","0","500","34",null,null);

                p.Grid00.set_taborder("1");
                p.Grid00.set_binddataset("dsList");
                p.Grid00.set_autofittype("col");
                p.Grid00.getSetter("uFunction").set("checkbox");
                p.Grid00.move("0","panGrdBtn:10","100.00%","450",null,null);

                p.staTotal.set_taborder("2");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","0","27","34",null,null);

                p.grdListCnt.set_taborder("4");
                p.grdListCnt.set_innerdataset(divForm_form_divGrd_form_grdListCnt_innerdataset);
                p.grdListCnt.set_codecolumn("codecolumn");
                p.grdListCnt.set_datacolumn("datacolumn");
                p.grdListCnt.set_text("10");
                p.grdListCnt.set_value("10");
                p.grdListCnt.set_index("1");
                p.grdListCnt.move("1230","0","80","34",null,null);

                p.staTotal00.set_taborder("3");
                p.staTotal00.set_text("목록수");
                p.staTotal00.set_cssclass("sta_WF_SchLabel");
                p.staTotal00.set_fittocontents("width");
                p.staTotal00.move("1165","0","65","34",null,null);

                p.btnGrdAdd.set_taborder("7");
                p.btnGrdAdd.set_text("추가");
                p.btnGrdAdd.set_cssclass("btn_WF_Small");
                p.btnGrdAdd.set_visible("true");
                p.btnGrdAdd.set_fittocontents("width");
                p.btnGrdAdd.move("774.00","10","47","34",null,null);

                p.btnGrdDw.set_taborder("6");
                p.btnGrdDw.set_text("다운로드(엑셀)");
                p.btnGrdDw.set_cssclass("btn_WF_GrdDw");
                p.btnGrdDw.set_visible("true");
                p.btnGrdDw.set_fittocontents("width");
                p.btnGrdDw.move("774.00","10","124","34",null,null);

                p.staTotal01.set_taborder("8");
                p.staTotal01.set_text("1000");
                p.staTotal01.set_cssclass("sta_WF_Total");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.set_fittocontents("width");
                p.staTotal01.move("staTotal:0","0","43","34",null,null);

                p.staTotal02.set_taborder("9");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.move("staTotal01:0","0","30","34",null,null);

                p.btnGrdDel.set_taborder("10");
                p.btnGrdDel.set_text("삭제");
                p.btnGrdDel.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel.set_visible("true");
                p.btnGrdDel.set_fittocontents("width");
                p.btnGrdDel.move("316.00","0","45","34",null,null);

                p.btnGrdRegi.set_taborder("11");
                p.btnGrdRegi.set_text("등록");
                p.btnGrdRegi.set_cssclass("btn_WF_SmallBlack");
                p.btnGrdRegi.set_visible("false");
                p.btnGrdRegi.set_fittocontents("width");
                p.btnGrdRegi.move("371.00","0","45","34",null,null);

                p.Button00_00.set_taborder("12");
                p.Button00_00.set_text("확인");
                p.Button00_00.set_cssclass("btn_WF_Yes");
                p.Button00_00.set_fittocontents("width");
                p.Button00_00.move("610.00","0","68","40",null,null);

                p.Panel01.set_taborder("15");
                p.Panel01.set_flexmainaxisalign("end");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.move("94","0","180","34",null,null);

                p.divPage.set_taborder("0");
                p.divPage.set_text("Div00");
                p.divPage.set_url("work::COM/util/paging/paging.xfdl");
                p.divPage.set_formscrollbartype("none none");
                p.divPage.set_formscrolltype("none");
                p.divPage.set_minheight("36");
                p.divPage.set_maxheight("");
                p.divPage.move("0","583","100.00%","36",null,null);

                p.panBtn.set_taborder("13");
                p.panBtn.set_horizontalgap("10");
                p.panBtn.set_fittocontents("none");
                p.panBtn.set_flexmainaxisalign("center");
                p.panBtn.set_flexcrossaxisalign("center");
                p.panBtn.move("0","650","100.00%","40",null,null);
            	}
            );
            obj.set_verticalgap("10");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("spacebetween");
            this.divForm.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Grid00.set_autofittype("none");

                p.btnGrdAdd.set_visible("false");

                p.btnGrdDw.set_visible("false");

                p.Panel00.set_fittocontents("none");
                p.Panel00.move("0","0","100%","34",null,null);

                p.panGrdBtn.set_flexwrap("wrap");
                p.panGrdBtn.set_verticalgap("10");
                p.panGrdBtn.set_fittocontents("height");
                p.panGrdBtn.move("870","0","100.00%","78",null,null);

                p.Panel01.move("100","84","173","34",null,null);

                p.panBtn.move("0","650","100.00%","60",null,null);
            	}
            );
            obj.set_verticalgap("8");
            obj.set_flexmainaxisalign("start");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            this.divForm.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divSch.set_taborder("0");
                p.divSch.set_text("Div00");
                p.divSch.set_cssclass("div_WF_SchBg");
                p.divSch.set_formscrollbartype("none none");
                p.divSch.set_formscrolltype("none");
                p.divSch.set_fittocontents("height");
                p.divSch.move("0","0","100%","160",null,null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","divSch:30","100.00%","634",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("Layout0","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divGrd.move("0","divSch:50","100%","732",null,null);

                p.divSch.set_text("Div00");
                p.divSch.set_fittocontents("height");
                p.divSch.move("0","0","100%","254",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("0px 20px 0px 20px");
            obj.set_flexmainaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexcrossaxisalign("start");
            obj.set_verticalgap("20");
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
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("검토의견함");

                p.divTitle.set_taborder("2");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"48","60",null);

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.set_fittocontents("height");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","divTitle:20",null,"900","60",null);

                p.divGuide.set_taborder("1");
                p.divGuide.set_text("div00");
                p.divGuide.set_visible("false");
                p.divGuide.set_cssclass("div_GD_Tip");
                p.divGuide.move("1590.00","135","450","385",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",480,600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.set_cssclass("div_WF_QuickFrBgM");
                p.divForm.move("0","divTitle:10","100.00%","1006",null,null);

                p.divTitle.move("0","0",null,"48","0",null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","divForm.form.divSch.form.Edit01_00","value","dsSearch","opnnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divForm.form.divSch.form.Combo01_00_00_00","value","dsSearch","srvcSeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.divSch.form.Edit01_00_00","value","dsSearch","opnnCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.divGrd.form.staTotal01","text","dsPage","totalRecordCount");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
            this._addPreloadList("fdl","work::COM/util/paging/paging.xfdl");
        };
        
        // User Script
        this.registerScript("COM001M04.xfdl", function() {
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
        	this.cfnSearch(1);
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function (page)
        {
        	var recordCountPerPage = this.divForm.form.divGrd.form.grdListCnt.value;
        	this.dsSearch.setColumn(0, "currentPageNo", page);
        	this.dsSearch.setColumn(0, "recordCountPerPage", recordCountPerPage);
        	this.getSearchTransaction();
        };
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.getSearchTransaction = function() {

        	var rgtrId = this.objApp.gdsUser.getColumn(0, "userId");
        	this.dsSearch.setColumn(0, "rgtrId", rgtrId);

        	var strSvcId    = "search";
        	var strSvcUrl   = "doc/rvwOpnnListInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsList=dsList dsPage=dsPage";
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

        this.gridSaveTransaction = function()
        {
        	var strSvcId    = "save";
        	var strSvcUrl   = "doc/rvwOpnnInfoStrg.do";
        	var inData      = "dsList=dsList:U";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= false;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        this.getAllExcelTransaction = function() {
        	var strSvcId    = "excel";
        	var strSvcUrl   = "***/***.do";
        	var inData      = "dsSearch=dsSearch";
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
        			//페이징 폼의 ID가 변경 될 경우 맞춰서 변경 해야함
        			this.divForm.form.divGrd.form.divPage.form.initPages(this.dsPage.getColumn(0, "currentPageNo"), this.dsPage.getColumn(0, "totalRecordCount"), this.dsPage.getColumn(0, "recordCountPerPage"), this.dsPage.getColumn(0, "pageSize"), "cfnSearch");
        			this.divForm.form.divGrd.form.resetScroll();
        			break;

        		case "save":
        			var gvRetMsg = this.objApp.getVariable("gvRetMsg");
        			this.gfnAlertMsg("save_complete", gvRetMsg, null, "msgCallback");
        			break;

        		case "excel":
        			//다운로드
        			console.log(errorMsg);	// 다운로드 가능한 파일 URL
        			break;

        		case "combo":
        			this.dsCombo.filter("uprCd != '' || cdOrdr == -1");
        			this.divForm.form.divSch.form.Combo01_00_00_00.index = 0;
        			break;

        		case "combo1":
        			this.dsCombo1.filter("uprCd != '' || cdOrdr == -1");
        			break;
        	}
        };

        //페이징 버튼 콜백함수
        this.pagingCallback = function(page) {
        	this.cfnSearch(page);
        };

        //얼럿창 콜백 함수
        this.msgCallback = function(sPopupId, sRtn) {
        	console.log(sPopupId);

        	var oRtn = JSON.parse(sRtn);
        	if(sPopupId == "del_confirm") {
        		if(oRtn.result == "Y") {
        			var chk = this.dsList.extractRows("chk == " + 1);
        			if(chk.length > 0) {
        				this.dsList.deleteMultiRows(chk);
        			}
        		}
        	} else if(sPopupId == "save") {
        		this.gridSaveTransaction();
        	} else if(sPopupId == "save_complete")  {

        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function() {
        	this.gfnCmmCode("combo", "dsCombo", "SRVC_KND", "A");
        	this.gfnCmmCode("combo1", "dsCombo1", "SRVC_KND", "S");

        	this.divForm.form.divSch.form.Combo01_00_00_00.set_index(0);
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divForm_divGrd_grdListCnt_onitemchanged = function(obj,e)
        {
        	this.cfnSearch(1);
        };

        this.divForm_divSch_btnSch_onclick = function(obj,e)
        {
        	this.cfnSearch(1);
        };

        this.divForm_divGrd_btnGrdExcel_onclick = function(obj,e)
        {
        	/*****  현재 그리드 화면을 엑셀로 다운로드 받음  *****/
        	this.exportObj = new ExcelExportObject();
        	var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.divForm.form.divGrd.form.Grid00, "Sheet1!A1");
        	this.exportObj.set_exporturl("svcUrl::/XExportImport.do");
        	this.exportObj.exportData();
        	/*****  현재 그리드 화면을 엑셀로 다운로드 받음  *****/
        };

        // 엑셀 전체 다운로드
        this.divForm_divGrd_btnGrdExcel01_onclick = function(obj,e)
        {
        	this.getAllExcelTransaction();
        };

        this.divForm_divGrd_btnGrdDel_onclick = function(obj,e)
        {
        	var chk = this.dsList.findRow("chk", 1);
        	if(chk != -1) {
        		this.gfnConfirmMsg("del_confirm", "MSG_005", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        	} else {
        		this.gfnAlertMsg("del_error", "MSG_006");
        	}
        };

        this.divForm_divGrd_btnGrdAdd_onclick = function(obj,e)
        {
        	this.dsList.insertRow(0);
        };

        this.divForm_divGrd_Button00_00_onclick = function(obj,e)
        {
        	if (this.gfnDsIsUpdated(this.dsList) == false) {
        		this.gfnAlertMsg("msg", "MSG_004");
        	} else {
        		this.gfnConfirmMsg("save", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"], null);
        	}
        };


        this.divForm_divGrd_btnGrdDw_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divSch.form.staLabel.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.divSch.form.staLabel02.addEventHandler("onclick",this.divForm_Div00_sta00_00_01_01_onclick,this);
            this.divForm.form.divSch.form.btnSchClose.addEventHandler("onclick",this.divForm_divSch_btnSchClose_onclick,this);
            this.divForm.form.divSch.form.btnSch.addEventHandler("onclick",this.divForm_divSch_btnSch_onclick,this);
            this.divForm.form.divSch.form.Combo01_00_00_00.addEventHandler("onitemchanged",this.divForm_divSch_Combo01_onitemchanged,this);
            this.divForm.form.divGrd.form.Grid00.addEventHandler("onheadclick",this.divForm_divGrd_Grid00_onheadclick,this);
            this.divForm.form.divGrd.form.grdListCnt.addEventHandler("onitemchanged",this.divForm_divGrd_grdListCnt_onitemchanged,this);
            this.divForm.form.divGrd.form.btnGrdAdd.addEventHandler("onclick",this.divForm_divGrd_btnGrdAdd_onclick,this);
            this.divForm.form.divGrd.form.btnGrdDw.addEventHandler("onclick",this.divForm_divGrd_btnGrdDw_onclick,this);
            this.divForm.form.divGrd.form.btnGrdDel.addEventHandler("onclick",this.divForm_divGrd_btnGrdDel_onclick,this);
            this.divForm.form.divGrd.form.btnGrdRegi.addEventHandler("onclick",this.divForm_divGrd_btnGrdRegi_onclick,this);
            this.divForm.form.divGrd.form.Button00_00.addEventHandler("onclick",this.divForm_divGrd_Button00_00_onclick,this);
        };
        this.loadIncludeScript("COM001M04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
