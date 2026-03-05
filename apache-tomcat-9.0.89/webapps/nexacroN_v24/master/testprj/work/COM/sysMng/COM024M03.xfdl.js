(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM024M03");
            this.set_titletext("권한 관리 목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,940);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"rno\" type=\"INT\" size=\"256\"/><Column id=\"authrtId\" type=\"STRING\" size=\"256\"/><Column id=\"authrtNm\" type=\"STRING\" size=\"256\"/><Column id=\"authrtCd\" type=\"STRING\" size=\"256\"/><Column id=\"authrtExpln\" type=\"STRING\" size=\"4000\"/><Column id=\"blngAuthrt\" type=\"STRING\" size=\"256\"/><Column id=\"ipRange\" type=\"STRING\" size=\"300\"/><Column id=\"rgnAuthrtUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"jobAuthrtInqYn\" type=\"STRING\" size=\"256\"/><Column id=\"jobAuthrtRcptYn\" type=\"STRING\" size=\"256\"/><Column id=\"jobAuthrtPrcsYn\" type=\"STRING\" size=\"256\"/><Column id=\"jobAuthrtMngYn\" type=\"STRING\" size=\"256\"/><Column id=\"jobAuthrtNm\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"currentPageNo\" type=\"STRING\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"STRING\" size=\"256\"/><Column id=\"searchText\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"jobAuthrtNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"recordCountPerPage\">10</Col><Col id=\"currentPageNo\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("<ColumnInfo><Column id=\"totalRecordCount\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Panel("panBtn","0",null,null,"60","60","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_horizontalgap("10");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Button00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","divTitle:10",null,null,"60","panBtn:10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Div("divSch","0","0","100%","160",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("10");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","100%","60",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("0");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("50");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel02\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel03\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel01","1694.00","398","360","45",null,null,null,null,"45",null,this.divForm.form.divSch.form);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01\"/><PanelItem id=\"PanelItem02\" componentid=\"divEdtPop\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("1");
            obj.set_text("권한명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel02","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("3");
            obj.set_text("작업권한");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel02","1694.00","398","360","45",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("4");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02\"/><PanelItem id=\"PanelItem02\" componentid=\"Combo01_00\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel03","1694.00","398","360","45",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("5");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Combo01_00_00\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panClose","30","151","100%","30",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnSchClose\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSchClose","1251","185","30","30",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_SchClose");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("8");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSch\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSch","570","192","112","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("9");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            obj.set_fittocontents("width");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divEdtPop","799.00","29","22.46%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("11");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("Edit00","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.divSch.form.divEdtPop.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            this.divForm.form.divSch.form.divEdtPop.addChild(obj.name, obj);

            obj = new Combo("Combo01_00","130.00","71","17.68%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("12");
            obj.set_flexgrow("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_divSch_form_Combo01_00_innerdataset = new nexacro.NormalDataset("divForm_form_divSch_form_Combo01_00_innerdataset", obj);
            divForm_form_divSch_form_Combo01_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"datacolumn\">조회</Col><Col id=\"codecolumn\">01</Col></Row><Row><Col id=\"datacolumn\">접수</Col><Col id=\"codecolumn\">02</Col></Row><Row><Col id=\"datacolumn\">처리</Col><Col id=\"codecolumn\">03</Col></Row><Row><Col id=\"datacolumn\">관리</Col><Col id=\"codecolumn\">04</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_divSch_form_Combo01_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("Combo01_00_00","870.00","65","17.68%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("13");
            obj.set_flexgrow("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_divSch_form_Combo01_00_00_innerdataset = new nexacro.NormalDataset("divForm_form_divSch_form_Combo01_00_00_innerdataset", obj);
            divForm_form_divSch_form_Combo01_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_divSch_form_Combo01_00_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","0","175","100.00%","635",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","40","150","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("12");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTotal\"/><PanelItem id=\"PanelItem01\" componentid=\"staTotal01\"/><PanelItem id=\"PanelItem02\" componentid=\"staTotal02\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("panGrdBtn",null,"40","400","34","0",null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("5");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexwrap("nowrap");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("Panel01","261","0","129","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("11");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnGrdDw\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("Panel00","81","0","190","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("10");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel04\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal00","0","0","100","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("목록수");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Combo("grdListCnt","90","0","89","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_divGrd_form_grdListCnt_innerdataset = new nexacro.NormalDataset("divForm_form_divGrd_form_grdListCnt_innerdataset", obj);
            divForm_form_divGrd_form_grdListCnt_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col><Col id=\"codecolumn\">0</Col></Row><Row><Col id=\"datacolumn\">10</Col><Col id=\"codecolumn\">10</Col></Row><Row><Col id=\"datacolumn\">20</Col><Col id=\"codecolumn\">20</Col></Row><Row><Col id=\"datacolumn\">50</Col><Col id=\"codecolumn\">50</Col></Row><Row><Col id=\"datacolumn\">100</Col><Col id=\"codecolumn\">100</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_divGrd_form_grdListCnt_innerdataset);
            obj.set_text("10");
            obj.set_value("10");
            obj.set_index("1");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDw","426.00","60","124","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_text("다운로드(엑셀)");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","40","27","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("8");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal01","staTotal:0","40","43","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("7");
            obj.set_text("1000");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","staTotal01:0","40","30","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("6");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","210","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("9");
            obj.set_text("권한 관리 목록");
            obj.set_cssclass("sta_WF_Txt60018");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("Panel03","0","40","100%","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("13");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02\"/><PanelItem id=\"PanelItem01\" componentid=\"panGrdBtn\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divPage","0",null,"100.00%","36",null,"0",null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("work::COM/util/paging/paging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","Panel03:10","100.00%",null,null,"divPage:10",null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"50\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"권한명\"/><Cell col=\"3\" text=\"권한코드\"/><Cell col=\"4\" text=\"권한설명\"/><Cell col=\"5\" text=\"사용여부\"/><Cell col=\"6\" text=\"IP권한\"/><Cell col=\"7\" text=\"작업권한\"/><Cell col=\"8\" text=\"소속권한\"/><Cell col=\"9\" text=\"위치권한\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"bind:rno\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:authrtNm\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:authrtCd\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:authrtExpln\" displaytype=\"decoratetext\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:useYn\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:ipRange\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:jobAuthrtNm\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:blngAuthrt\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:rgnAuthrtUseYn\" displaytype=\"text\" cssclass=\"CellEnd\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("Panel04","0","0","170","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("14");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTotal00\"/><PanelItem id=\"PanelItem01\" componentid=\"grdListCnt\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("Button00_00","660.00","0","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("권한등록");
            obj.set_cssclass("btn_WF_No");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divSch.form.divEdtPop.form
            obj = new Layout("default","",0,0,this.divForm.form.divSch.form.divEdtPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Edit00.set_taborder("0");
                p.Edit00.set_cssclass("edt_WF_EdtSch");
                p.Edit00.move("0","0",null,"40","0",null);
            	}
            );
            this.divForm.form.divSch.form.divEdtPop.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divSch.form.divEdtPop.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divSch.form.divEdtPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.divSch.form.divEdtPop.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divSch.form
            obj = new Layout("default","",0,0,this.divForm.form.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel01_00.set_taborder("10");
                p.staLabel01_00.set_text("사용여부");
                p.staLabel01_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel01_00.set_flexshrink("0");
                p.staLabel01_00.set_maxwidth("");
                p.staLabel01_00.move("0","0","100","40",null,null);

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

                p.Panel01.set_taborder("2");
                p.Panel01.set_type("horizontal");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_flexgrow("1");
                p.Panel01.set_minheight("45");
                p.Panel01.set_maxheight("");
                p.Panel01.set_minwidth("");
                p.Panel01.move("1694.00","398","360","45",null,null);

                p.staLabel01.set_taborder("1");
                p.staLabel01.set_text("권한명");
                p.staLabel01.set_cssclass("sta_WF_SchLabel");
                p.staLabel01.set_flexshrink("0");
                p.staLabel01.set_maxwidth("");
                p.staLabel01.move("0","0","100","40",null,null);

                p.staLabel02.set_taborder("3");
                p.staLabel02.set_text("작업권한");
                p.staLabel02.set_cssclass("sta_WF_SchLabel");
                p.staLabel02.set_flexshrink("0");
                p.staLabel02.set_maxwidth("");
                p.staLabel02.move("0","0","100","40",null,null);

                p.Panel02.set_taborder("4");
                p.Panel02.set_type("horizontal");
                p.Panel02.set_horizontalgap("10");
                p.Panel02.set_flexgrow("1");
                p.Panel02.set_minwidth("");
                p.Panel02.move("1694.00","398","360","45",null,null);

                p.Panel03.set_taborder("5");
                p.Panel03.set_type("horizontal");
                p.Panel03.set_horizontalgap("10");
                p.Panel03.set_fittocontents("height");
                p.Panel03.set_flexgrow("1");
                p.Panel03.set_minwidth("");
                p.Panel03.move("1694.00","398","360","45",null,null);

                p.panClose.set_taborder("7");
                p.panClose.set_type("vertical");
                p.panClose.set_cssclass("pal_WF_SchLine");
                p.panClose.set_flexcrossaxisalign("end");
                p.panClose.move("30","151","100%","30",null,null);

                p.btnSchClose.set_taborder("6");
                p.btnSchClose.set_cssclass("btn_WF_SchClose");
                p.btnSchClose.move("1251","185","30","30",null,null);

                p.panSchBtn.set_taborder("8");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100%","40",null,null);

                p.btnSch.set_taborder("9");
                p.btnSch.set_text("조회하기");
                p.btnSch.set_cssclass("btn_WF_Search");
                p.btnSch.set_fittocontents("width");
                p.btnSch.move("570","192","112","40",null,null);

                p.divEdtPop.set_taborder("11");
                p.divEdtPop.set_text("Div00");
                p.divEdtPop.set_formscrollbartype("none none");
                p.divEdtPop.set_formscrolltype("none");
                p.divEdtPop.set_flexgrow("1");
                p.divEdtPop.move("799.00","29","22.46%","40",null,null);

                p.Combo01_00.set_taborder("12");
                p.Combo01_00.set_flexgrow("1");
                p.Combo01_00.set_innerdataset(divForm_form_divSch_form_Combo01_00_innerdataset);
                p.Combo01_00.set_codecolumn("codecolumn");
                p.Combo01_00.set_datacolumn("datacolumn");
                p.Combo01_00.set_text("전체");
                p.Combo01_00.set_value("");
                p.Combo01_00.set_index("0");
                p.Combo01_00.move("130.00","71","17.68%","40",null,null);

                p.Combo01_00_00.set_taborder("13");
                p.Combo01_00_00.set_flexgrow("1");
                p.Combo01_00_00.set_innerdataset(divForm_form_divSch_form_Combo01_00_00_innerdataset);
                p.Combo01_00_00.set_codecolumn("codecolumn");
                p.Combo01_00_00.set_datacolumn("datacolumn");
                p.Combo01_00_00.set_text("전체");
                p.Combo01_00_00.set_value("");
                p.Combo01_00_00.set_index("0");
                p.Combo01_00_00.move("870.00","65","17.68%","40",null,null);
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
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_spacing("14px 20px 12px 20px");
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
                p.Panel02.set_taborder("12");
                p.Panel02.move("0","40","150","34",null,null);

                p.panGrdBtn.set_taborder("5");
                p.panGrdBtn.set_flexcrossaxisalign("start");
                p.panGrdBtn.set_flexcrossaxiswrapalign("start");
                p.panGrdBtn.set_flexmainaxisalign("end");
                p.panGrdBtn.set_horizontalgap("10");
                p.panGrdBtn.set_fittocontents("height");
                p.panGrdBtn.set_flexwrap("nowrap");
                p.panGrdBtn.set_verticalgap("4");
                p.panGrdBtn.move(null,"40","400","34","0",null);

                p.Panel01.set_taborder("11");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_fittocontents("width");
                p.Panel01.move("261","0","129","34",null,null);

                p.Panel00.set_taborder("10");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.set_fittocontents("width");
                p.Panel00.move("81","0","190","34",null,null);

                p.staTotal00.set_taborder("2");
                p.staTotal00.set_text("목록수");
                p.staTotal00.set_cssclass("sta_WF_SchLabel");
                p.staTotal00.move("0","0","100","34",null,null);

                p.grdListCnt.set_taborder("3");
                p.grdListCnt.set_innerdataset(divForm_form_divGrd_form_grdListCnt_innerdataset);
                p.grdListCnt.set_codecolumn("codecolumn");
                p.grdListCnt.set_datacolumn("datacolumn");
                p.grdListCnt.set_text("10");
                p.grdListCnt.set_value("10");
                p.grdListCnt.set_index("1");
                p.grdListCnt.move("90","0","89","34",null,null);

                p.btnGrdDw.set_taborder("4");
                p.btnGrdDw.set_text("다운로드(엑셀)");
                p.btnGrdDw.set_cssclass("btn_WF_GrdDw");
                p.btnGrdDw.set_visible("true");
                p.btnGrdDw.set_fittocontents("width");
                p.btnGrdDw.move("426.00","60","124","34",null,null);

                p.staTotal.set_taborder("8");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","40","27","34",null,null);

                p.staTotal01.set_taborder("7");
                p.staTotal01.set_text("1000");
                p.staTotal01.set_cssclass("sta_WF_Total");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.set_fittocontents("width");
                p.staTotal01.move("staTotal:0","40","43","34",null,null);

                p.staTotal02.set_taborder("6");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.move("staTotal01:0","40","30","34",null,null);

                p.Static00.set_taborder("9");
                p.Static00.set_text("권한 관리 목록");
                p.Static00.set_cssclass("sta_WF_Txt60018");
                p.Static00.move("0","0","210","34",null,null);

                p.Panel03.set_taborder("13");
                p.Panel03.set_flexmainaxisalign("spacebetween");
                p.Panel03.set_flexwrap("wrap");
                p.Panel03.set_verticalgap("4");
                p.Panel03.set_fittocontents("height");
                p.Panel03.move("0","40","100%","34",null,null);

                p.divPage.set_taborder("0");
                p.divPage.set_text("Div00");
                p.divPage.set_url("work::COM/util/paging/paging.xfdl");
                p.divPage.set_formscrollbartype("none none");
                p.divPage.set_formscrolltype("none");
                p.divPage.set_maxheight("");
                p.divPage.move("0",null,"100.00%","36",null,"0");

                p.Grid00.set_taborder("1");
                p.Grid00.set_binddataset("dsList");
                p.Grid00.set_autofittype("col");
                p.Grid00.move("0","Panel03:10","100.00%",null,null,"divPage:10");

                p.Panel04.set_taborder("14");
                p.Panel04.move("0","0","170","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            obj.set_type("default");
            this.divForm.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel03.set_flexwrap("nowrap");

                p.Grid00.set_autofittype("none");

                p.panGrdBtn.move(null,"40","550","34","0",null);

                p.Panel04.set_flexmainaxisalign("end");

                p.Panel00.move("1076","40","145","34",null,null);

                p.staTotal00.set_fittocontents("none");
                p.staTotal00.move("94.00","60","65","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            obj.set_type("default");
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
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.set_flexgrow("1");
                p.divGrd.move("0","175","100.00%","635",null,null);
            	}
            );
            obj.set_verticalgap("20");
            obj.set_spacing("");
            obj.set_type("vertical");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("Layout0","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divSch.move("0","0","100.00%","158",null,null);

                p.divGrd.set_fittocontents("height");
                p.divGrd.set_flexgrow("0");
                p.divGrd.move("0","175","100.00%","608.57",null,null);
            	}
            );
            obj.set_verticalgap("20");
            obj.set_spacing("");
            obj.set_type("vertical");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,940,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("권한 관리 목록");

                p.divTitle.set_taborder("1");
                p.divTitle.set_text("Div00");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);

                p.panBtn.set_taborder("3");
                p.panBtn.set_horizontalgap("10");
                p.panBtn.set_flexmainaxisalign("center");
                p.panBtn.set_flexcrossaxisalign("center");
                p.panBtn.move("0",null,null,"60","60","0");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","divTitle:10",null,null,"60","panBtn:10");

                p.Button00_00.set_taborder("2");
                p.Button00_00.set_text("권한등록");
                p.Button00_00.set_cssclass("btn_WF_No");
                p.Button00_00.move("660.00","0","100","40",null,null);
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
                p.divForm.set_fittocontents("height");
                p.divForm.move("20","divTitle:10",null,"780","20",null);

                p.divTitle.move("0","0",null,"50","0",null);

                p.panBtn.move("20",null,null,"60","20","0");
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.divGrd.form.staTotal01","text","dsPage","totalRecordCount");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.divSch.form.divEdtPop.form.Edit00","value","dsSearch","searchText");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.divSch.form.Combo01_00","value","dsSearch","jobAuthrtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.divSch.form.Combo01_00_00","value","dsSearch","useYn");
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
        this.registerScript("COM024M03.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	COM024M03.xfdl
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

        this.cfnClose = function() {
        	console.log('cfnClose');
        }
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.getSearchTransaction = function() {

        	var strSvcId    = "search";
        	var strSvcUrl   = "sysMng/authrtListInq.do";
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
        			break;

        		case "excel":
        			//다운로드
        			console.log(errorMsg);	// 다운로드 가능한 파일 URL
        			break;
        	}
        };

        this.msgCallback = function(sPopupId, sRtn) {
        	if(sPopupId == "del_confirm") {
        		if(sRtn == "Y") {
        			//TODO..
        		}
        	} else if(sPopupId == "msg") {
        		//TODO..
        	}
        };

        this.fnPopupCallback = function(sPopupId, sRtn)
        {
        	if(sPopupId =="popupSearch")
        	{
        		if (this.gfnIsNull(sRtn)) return;
        		var objRtn = JSON.parse(sRtn);
        		console.log(objRtn);
        		//TODO..
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function() {

        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divForm_divGrd_cmbGrdList_onitemchanged = function(obj,e)
        {
        	this.cfnSearch(1);
        };

        this.divForm_divSch_btnSch_onclick = function(obj,e)
        {
        	this.cfnSearch(1);
        };

        this.divForm_divGrd_Button00_00_onclick = function(obj,e)
        {
        	var sMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        	var sMenuUrl = 'work::COM/sysMng/COM024P031.xfdl';
        	var actNm = '추가/상세';
        	this.gfnPageOpen(sMenuId, sMenuUrl, actNm, null);
        };

        this.divForm_divGrd_Grid00_oncelldblclick = function(obj,e)
        {
        	if(e.cell == 3)
        	{
        		var objArg   = {
        			"id" : this.dsList.getColumn(e.row, "authrtId")
        		};

        		var sMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        		var sMenuUrl = 'work::COM/sysMng/COM024P031.xfdl';
        		var actNm = '추가/상세';
        		this.gfnPageOpen(sMenuId, sMenuUrl, actNm, objArg);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divSch.form.staLabel02.addEventHandler("onclick",this.divForm_Div00_sta00_00_01_01_onclick,this);
            this.divForm.form.divSch.form.btnSchClose.addEventHandler("onclick",this.divForm_divSch_btnSchClose_onclick,this);
            this.divForm.form.divSch.form.btnSch.addEventHandler("onclick",this.divForm_divSch_btnSch_onclick,this);
            this.divForm.form.divSch.form.Combo01_00.addEventHandler("onitemchanged",this.divForm_divSch_Combo01_onitemchanged,this);
            this.divForm.form.divSch.form.Combo01_00_00.addEventHandler("onitemchanged",this.divForm_divSch_Combo01_onitemchanged,this);
            this.divForm.form.divGrd.form.grdListCnt.addEventHandler("onitemchanged",this.divForm_divGrd_cmbGrdList_onitemchanged,this);
            this.divForm.form.divGrd.form.Grid00.addEventHandler("oncelldblclick",this.divForm_divGrd_Grid00_oncelldblclick,this);
            this.Button00_00.addEventHandler("onclick",this.divForm_divGrd_Button00_00_onclick,this);
        };
        this.loadIncludeScript("COM024M03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
