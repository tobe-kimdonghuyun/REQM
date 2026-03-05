(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM022M01");
            this.set_titletext("공통코드관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,1170);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCdTyList", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTypeNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdTypeLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdTypeLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"cdTypeOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"1\"/><Column id=\"lyrYn\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCdList", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTypeNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdTypeUseYn\" type=\"STRING\" size=\"1\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdUseYn\" type=\"STRING\" size=\"1\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdId\">Y</Col><Col id=\"cdNm\">사용</Col></Row><Row><Col id=\"cdId\">N</Col><Col id=\"cdNm\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"48","60",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","divTitle:20",null,"1165","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("divSch","0","0","100%","220",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","100%","120",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("0");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("50");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"pan00\"/><PanelItem id=\"PanelItem00\" componentid=\"pan01\"/><PanelItem id=\"PanelItem03\" componentid=\"pan02\"/><PanelItem id=\"PanelItem04\" componentid=\"panLabel00\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01","1694.00","398","320","45",null,null,null,null,"45",null,this.divForm.form.divSch.form);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_01_00_00\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("1");
            obj.set_text("유형명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("3");
            obj.set_text("유형ID");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan00","1694.00","398","320","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("4");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_01_00\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel02","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("5");
            obj.set_text("유형사용여부");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan02","1694.00","398","320","45",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("6");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02\"/><PanelItem id=\"PanelItem02\" componentid=\"Combo01_00_00_01\"/></Contents>");
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

            obj = new Button("btnSch","570","192","120","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("10");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("Combo01_00_00_01","788.00","145","20.42%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("11");
            obj.set_flexgrow("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_divSch_form_Combo01_00_00_01_innerdataset = new nexacro.NormalDataset("divForm_form_divSch_form_Combo01_00_00_01_innerdataset", obj);
            divForm_form_divSch_form_Combo01_00_00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_divSch_form_Combo01_00_00_01_innerdataset);
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00","140.00","30","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("12");
            obj.set_flexgrow("1");
            obj.set_displaynulltext("검색어 입력");
            obj.set_text("");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00_00","140.00","30","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("13");
            obj.set_flexgrow("1");
            obj.set_displaynulltext("검색어 입력");
            obj.set_text("");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("14");
            obj.set_text("코드ID");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00_01","140.00","30","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("15");
            obj.set_flexgrow("1");
            obj.set_displaynulltext("검색어 입력");
            obj.set_text("");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan00_00","1694.00","398","320","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("16");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_01_00_01\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("17");
            obj.set_text("코드명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00_00_00","140.00","30","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("18");
            obj.set_flexgrow("1");
            obj.set_displaynulltext("검색어 입력");
            obj.set_text("");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01_00","1694.00","398","320","45",null,null,null,null,"45",null,this.divForm.form.divSch.form);
            obj.set_taborder("19");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_01_00_00_00\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel02_00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("20");
            obj.set_text("코드사용여부");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("Combo01_00_00_01_00","788.00","145","20.42%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("21");
            obj.set_flexgrow("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_divSch_form_Combo01_00_00_01_00_innerdataset = new nexacro.NormalDataset("divForm_form_divSch_form_Combo01_00_00_01_00_innerdataset", obj);
            divForm_form_divSch_form_Combo01_00_00_01_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"datacolumn\">사용</Col><Col id=\"codecolumn\">Y</Col></Row><Row><Col id=\"datacolumn\">미사용</Col><Col id=\"codecolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_divSch_form_Combo01_00_00_01_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan02_00","1694.00","398","320","45",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("22");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Combo01_00_00_01_00\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panLabel00","20","14","100%","60",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("23");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("50");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"pan00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"pan01_00\"/><PanelItem id=\"PanelItem03\" componentid=\"pan02_00\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","0","divSch:30","100.00%","424",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panGrdBtn",null,"40","550","34","0",null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("8");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"btnGrdDel\"/><PanelItem id=\"PanelItem00\" componentid=\"btnGrdRegi\"/><PanelItem id=\"PanelItem06\" componentid=\"btnGrdDw\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","panGrdBtn:10","100.00%","340",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsCdTyList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"코드유형ID\"/><Cell col=\"1\" text=\"코드유형명\"/><Cell col=\"2\" text=\"유형라벨\"/><Cell col=\"3\" text=\"사용여부\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:cdTypeId\" displaytype=\"expr:dataset.parent.fn_displayType(dataset, currow)\" edittype=\"expr:dataset.parent.fn_editType(dataset, currow)\"/><Cell col=\"1\" text=\"bind:cdTypeNm\" displaytype=\"expr:dataset.parent.fn_displayType(dataset, currow)\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:cdTypeLbl\" displaytype=\"expr:dataset.parent.fn_displayType(dataset, currow)\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:useYn\" cssclass=\"CellEnd\" displaytype=\"expr:dataset.parent.fn_displayComboType(dataset, currow)\" edittype=\"combo\" combotype=\"dropdown\" combodataset=\"dsUseYn\" combodatacol=\"cdNm\" combocodecol=\"cdId\" comboautoselect=\"true\" expr=\"expr:useYn == &quot;Y&quot; ? &quot;사용&quot; : &quot;미사용&quot;\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","40","27","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal01","staTotal:0","40","43","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","staTotal01:0","40","30","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","500","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_text("코드유형");
            obj.set_cssclass("sta_WF_Txt60018");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","316.00","0","90","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("5");
            obj.set_text("유형삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdRegi","371.00","0","90","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("6");
            obj.set_text("유형추가");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDw","426.00","0","124","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("7");
            obj.set_text("다운로드(엑셀)");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","40","100","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("9");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTotal\"/><PanelItem id=\"PanelItem01\" componentid=\"staTotal01\"/><PanelItem id=\"PanelItem02\" componentid=\"staTotal02\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("Panel00","167","662","100.00%","424",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divGrd\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01","118","681","100.00%","871.56",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem02\" componentid=\"divGrd00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divGrd00_00","0","30","100.00%","494",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panGrdBtn",null,"40","550","34","0",null,null,null,null,null,this.divForm.form.divGrd00_00.form);
            obj.set_taborder("2");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"btnGrdDel\"/><PanelItem id=\"PanelItem00\" componentid=\"btnGrdRegi\"/><PanelItem id=\"PanelItem02\" componentid=\"btnGrdDw00\"/></Contents>");
            this.divForm.form.divGrd00_00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","panGrdBtn:10","100.00%","410",null,null,null,null,null,null,this.divForm.form.divGrd00_00.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsCdList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"유형ID\"/><Cell col=\"1\" text=\"코드ID\"/><Cell col=\"2\" text=\"코드명\"/><Cell col=\"3\" text=\"코드순서\"/><Cell col=\"4\" text=\"사용여부\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:cdTypeId\" displaytype=\"normal\"/><Cell col=\"1\" text=\"bind:cdId\" displaytype=\"expr:dataset.parent.fn_displayType(dataset, currow)\" edittype=\"expr:dataset.parent.fn_editType(dataset,currow)\"/><Cell col=\"2\" text=\"bind:cdNm\" displaytype=\"expr:dataset.parent.fn_displayType(dataset, currow)\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:cdOrdr\" displaytype=\"expr:dataset.parent.fn_displayType(dataset, currow)\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:useYn\" cssclass=\"CellEnd\" displaytype=\"expr:dataset.parent.fn_displayComboType(dataset, currow)\" edittype=\"combo\" expr=\"expr:useYn == &quot;Y&quot; ? &quot;사용&quot; : &quot;미사용&quot;\" combodataset=\"dsUseYn\" combodatacol=\"cdNm\" combocodecol=\"cdId\"/></Band></Format></Formats>");
            this.divForm.form.divGrd00_00.addChild(obj.name, obj);

            obj = new Static("staTotal","0","40","27","34",null,null,null,null,null,null,this.divForm.form.divGrd00_00.form);
            obj.set_taborder("1");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd00_00.addChild(obj.name, obj);

            obj = new Static("staTotal01","staTotal:0","40","43","34",null,null,null,null,null,null,this.divForm.form.divGrd00_00.form);
            obj.set_taborder("3");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd00_00.addChild(obj.name, obj);

            obj = new Static("staTotal02","staTotal01:0","40","30","34",null,null,null,null,null,null,this.divForm.form.divGrd00_00.form);
            obj.set_taborder("4");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divForm.form.divGrd00_00.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","500","34",null,null,null,null,null,null,this.divForm.form.divGrd00_00.form);
            obj.set_taborder("5");
            obj.set_text("공통코드");
            obj.set_cssclass("sta_WF_Txt60018");
            this.divForm.form.divGrd00_00.addChild(obj.name, obj);

            obj = new Button("btnGrdRegi","371.00","0","90","34",null,null,null,null,null,null,this.divForm.form.divGrd00_00.form);
            obj.set_taborder("6");
            obj.set_text("코드추가");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd00_00.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","858.00","30","90","34",null,null,null,null,null,null,this.divForm.form.divGrd00_00.form);
            obj.set_taborder("7");
            obj.set_text("코드삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd00_00.addChild(obj.name, obj);

            obj = new Button("btnGrdDw00","1315.00","41","124","34",null,null,null,null,null,null,this.divForm.form.divGrd00_00.form);
            obj.set_taborder("8");
            obj.set_text("다운로드(엑셀)");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd00_00.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","40","100","34",null,null,null,null,null,null,this.divForm.form.divGrd00_00.form);
            obj.set_taborder("9");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTotal\"/><PanelItem id=\"PanelItem01\" componentid=\"staTotal01\"/><PanelItem id=\"PanelItem02\" componentid=\"staTotal02\"/></Contents>");
            this.divForm.form.divGrd00_00.addChild(obj.name, obj);

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

            obj = new Div("divPopBtn","0","divForm:20",null,"56","60",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","457.00","30","100","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Yes");
            this.divPopBtn.addChild(obj.name, obj);
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
                p.panLabel.move("20","14","100%","120",null,null);

                p.pan01.set_taborder("2");
                p.pan01.set_type("horizontal");
                p.pan01.set_horizontalgap("10");
                p.pan01.set_flexgrow("1");
                p.pan01.set_minheight("45");
                p.pan01.set_maxheight("");
                p.pan01.set_minwidth("");
                p.pan01.move("1694.00","398","320","45",null,null);

                p.staLabel01.set_taborder("1");
                p.staLabel01.set_text("유형명");
                p.staLabel01.set_cssclass("sta_WF_SchLabel");
                p.staLabel01.set_flexshrink("0");
                p.staLabel01.set_minwidth("");
                p.staLabel01.move("0","0","100","40",null,null);

                p.staLabel.set_taborder("3");
                p.staLabel.set_text("유형ID");
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
                p.staLabel02.set_text("유형사용여부");
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
                p.btnSch.move("570","192","120","40",null,null);

                p.Combo01_00_00_01.set_taborder("11");
                p.Combo01_00_00_01.set_flexgrow("1");
                p.Combo01_00_00_01.set_innerdataset(divForm_form_divSch_form_Combo01_00_00_01_innerdataset);
                p.Combo01_00_00_01.set_codecolumn("codecolumn");
                p.Combo01_00_00_01.set_datacolumn("datacolumn");
                p.Combo01_00_00_01.set_text("사용");
                p.Combo01_00_00_01.set_value("Y");
                p.Combo01_00_00_01.set_index("0");
                p.Combo01_00_00_01.move("788.00","145","20.42%","40",null,null);

                p.edt00_01_00.set_taborder("12");
                p.edt00_01_00.set_flexgrow("1");
                p.edt00_01_00.set_displaynulltext("검색어 입력");
                p.edt00_01_00.set_maxwidth("");
                p.edt00_01_00.move("140.00","30","100%","40",null,null);

                p.edt00_01_00_00.set_taborder("13");
                p.edt00_01_00_00.set_flexgrow("1");
                p.edt00_01_00_00.set_displaynulltext("검색어 입력");
                p.edt00_01_00_00.set_maxwidth("");
                p.edt00_01_00_00.move("140.00","30","100%","40",null,null);

                p.staLabel00.set_taborder("14");
                p.staLabel00.set_text("코드ID");
                p.staLabel00.set_cssclass("sta_WF_SchLabel");
                p.staLabel00.set_flexshrink("0");
                p.staLabel00.set_minwidth("");
                p.staLabel00.move("0","0","100","40",null,null);

                p.edt00_01_00_01.set_taborder("15");
                p.edt00_01_00_01.set_flexgrow("1");
                p.edt00_01_00_01.set_displaynulltext("검색어 입력");
                p.edt00_01_00_01.set_maxwidth("");
                p.edt00_01_00_01.move("140.00","30","100%","40",null,null);

                p.pan00_00.set_taborder("16");
                p.pan00_00.set_type("horizontal");
                p.pan00_00.set_horizontalgap("10");
                p.pan00_00.set_flexgrow("1");
                p.pan00_00.set_maxheight("");
                p.pan00_00.set_minwidth("");
                p.pan00_00.move("1694.00","398","320","40",null,null);

                p.staLabel01_00.set_taborder("17");
                p.staLabel01_00.set_text("코드명");
                p.staLabel01_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel01_00.set_flexshrink("0");
                p.staLabel01_00.set_minwidth("");
                p.staLabel01_00.move("0","0","100","40",null,null);

                p.edt00_01_00_00_00.set_taborder("18");
                p.edt00_01_00_00_00.set_flexgrow("1");
                p.edt00_01_00_00_00.set_displaynulltext("검색어 입력");
                p.edt00_01_00_00_00.set_maxwidth("");
                p.edt00_01_00_00_00.move("140.00","30","100%","40",null,null);

                p.pan01_00.set_taborder("19");
                p.pan01_00.set_type("horizontal");
                p.pan01_00.set_horizontalgap("10");
                p.pan01_00.set_flexgrow("1");
                p.pan01_00.set_minheight("45");
                p.pan01_00.set_maxheight("");
                p.pan01_00.set_minwidth("");
                p.pan01_00.move("1694.00","398","320","45",null,null);

                p.staLabel02_00.set_taborder("20");
                p.staLabel02_00.set_text("코드사용여부");
                p.staLabel02_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel02_00.set_flexshrink("0");
                p.staLabel02_00.set_minwidth("");
                p.staLabel02_00.move("0","0","100","40",null,null);

                p.Combo01_00_00_01_00.set_taborder("21");
                p.Combo01_00_00_01_00.set_flexgrow("1");
                p.Combo01_00_00_01_00.set_innerdataset(divForm_form_divSch_form_Combo01_00_00_01_00_innerdataset);
                p.Combo01_00_00_01_00.set_codecolumn("codecolumn");
                p.Combo01_00_00_01_00.set_datacolumn("datacolumn");
                p.Combo01_00_00_01_00.set_text("전체");
                p.Combo01_00_00_01_00.set_value("");
                p.Combo01_00_00_01_00.set_index("0");
                p.Combo01_00_00_01_00.move("788.00","145","20.42%","40",null,null);

                p.pan02_00.set_taborder("22");
                p.pan02_00.set_type("horizontal");
                p.pan02_00.set_horizontalgap("10");
                p.pan02_00.set_flexgrow("1");
                p.pan02_00.set_minwidth("");
                p.pan02_00.move("1694.00","398","320","45",null,null);

                p.panLabel00.set_taborder("23");
                p.panLabel00.set_verticalgap("8");
                p.panLabel00.set_flexwrap("wrap");
                p.panLabel00.set_spacing("0px 0px 10px 0px");
                p.panLabel00.set_type("horizontal");
                p.panLabel00.set_flexcrossaxisalign("start");
                p.panLabel00.set_horizontalgap("50");
                p.panLabel00.set_fittocontents("height");
                p.panLabel00.set_maxheight("");
                p.panLabel00.move("20","14","100%","60",null,null);
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
                p.panLabel.move("132","47","100%","288",null,null);

                p.pan02.set_horizontalgap("8");
                p.pan02.move("1694.00","398","100%","45",null,null);

                p.pan01.set_horizontalgap("8");
                p.pan01.move("1694.00","398","100%","40",null,null);

                p.pan00.set_type("horizontal");
                p.pan00.set_fittocontents("height");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_horizontalgap("8");
                p.pan00.move("1694.00","398","100%","80",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_spacing("14px 16px 12px 16px");
            obj.set_flexwrap("wrap");
            this.divForm.form.divSch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panGrdBtn.set_taborder("8");
                p.panGrdBtn.set_flexcrossaxisalign("start");
                p.panGrdBtn.set_flexcrossaxiswrapalign("start");
                p.panGrdBtn.set_flexmainaxisalign("end");
                p.panGrdBtn.set_horizontalgap("10");
                p.panGrdBtn.move(null,"40","550","34","0",null);

                p.Grid00.set_taborder("0");
                p.Grid00.set_binddataset("dsCdTyList");
                p.Grid00.set_autofittype("col");
                p.Grid00.move("0","panGrdBtn:10","100.00%","340",null,null);

                p.staTotal.set_taborder("1");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","40","27","34",null,null);

                p.staTotal01.set_taborder("2");
                p.staTotal01.set_text("0");
                p.staTotal01.set_cssclass("sta_WF_Total");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.set_fittocontents("width");
                p.staTotal01.move("staTotal:0","40","43","34",null,null);

                p.staTotal02.set_taborder("3");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.move("staTotal01:0","40","30","34",null,null);

                p.Static00.set_taborder("4");
                p.Static00.set_text("코드유형");
                p.Static00.set_cssclass("sta_WF_Txt60018");
                p.Static00.move("0","0","500","34",null,null);

                p.btnGrdDel.set_taborder("5");
                p.btnGrdDel.set_text("유형삭제");
                p.btnGrdDel.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel.set_visible("true");
                p.btnGrdDel.set_fittocontents("width");
                p.btnGrdDel.move("316.00","0","90","34",null,null);

                p.btnGrdRegi.set_taborder("6");
                p.btnGrdRegi.set_text("유형추가");
                p.btnGrdRegi.set_cssclass("btn_WF_SmallBlack");
                p.btnGrdRegi.set_visible("true");
                p.btnGrdRegi.set_fittocontents("width");
                p.btnGrdRegi.move("371.00","0","90","34",null,null);

                p.btnGrdDw.set_taborder("7");
                p.btnGrdDw.set_text("다운로드(엑셀)");
                p.btnGrdDw.set_cssclass("btn_WF_GrdDw");
                p.btnGrdDw.set_visible("true");
                p.btnGrdDw.set_fittocontents("width");
                p.btnGrdDw.move("426.00","0","124","34",null,null);

                p.Panel00.set_taborder("9");
                p.Panel00.move("0","40","100","34",null,null);
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
                p.Grid00.set_autofittype("none");
                p.Grid00.move("0","panGrdBtn:10","100.00%",null,null,"0");
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divGrd00_00.form
            obj = new Layout("default","",0,0,this.divForm.form.divGrd00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panGrdBtn.set_taborder("2");
                p.panGrdBtn.set_flexcrossaxisalign("start");
                p.panGrdBtn.set_flexcrossaxiswrapalign("start");
                p.panGrdBtn.set_flexmainaxisalign("end");
                p.panGrdBtn.set_horizontalgap("10");
                p.panGrdBtn.move(null,"40","550","34","0",null);

                p.Grid00.set_taborder("0");
                p.Grid00.set_binddataset("dsCdList");
                p.Grid00.set_autofittype("col");
                p.Grid00.move("0","panGrdBtn:10","100.00%","410",null,null);

                p.staTotal.set_taborder("1");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","40","27","34",null,null);

                p.staTotal01.set_taborder("3");
                p.staTotal01.set_text("0");
                p.staTotal01.set_cssclass("sta_WF_Total");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.set_fittocontents("width");
                p.staTotal01.move("staTotal:0","40","43","34",null,null);

                p.staTotal02.set_taborder("4");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.move("staTotal01:0","40","30","34",null,null);

                p.Static00.set_taborder("5");
                p.Static00.set_text("공통코드");
                p.Static00.set_cssclass("sta_WF_Txt60018");
                p.Static00.move("0","0","500","34",null,null);

                p.btnGrdRegi.set_taborder("6");
                p.btnGrdRegi.set_text("코드추가");
                p.btnGrdRegi.set_cssclass("btn_WF_SmallBlack");
                p.btnGrdRegi.set_visible("true");
                p.btnGrdRegi.set_fittocontents("width");
                p.btnGrdRegi.move("371.00","0","90","34",null,null);

                p.btnGrdDel.set_taborder("7");
                p.btnGrdDel.set_text("코드삭제");
                p.btnGrdDel.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel.set_visible("true");
                p.btnGrdDel.set_fittocontents("width");
                p.btnGrdDel.move("858.00","30","90","34",null,null);

                p.btnGrdDw00.set_taborder("8");
                p.btnGrdDw00.set_text("다운로드(엑셀)");
                p.btnGrdDw00.set_cssclass("btn_WF_GrdDw");
                p.btnGrdDw00.set_visible("true");
                p.btnGrdDw00.set_fittocontents("width");
                p.btnGrdDw00.move("1315.00","41","124","34",null,null);

                p.Panel00.set_taborder("9");
                p.Panel00.move("0","40","100","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            obj.set_spacing("");
            this.divForm.form.divGrd00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divGrd00_00.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divGrd00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Grid00.set_autofittype("none");
                p.Grid00.move("0","panGrdBtn:10","100.00%",null,null,"0");
            	}
            );
            obj.set_verticalgap("20");
            obj.set_spacing("");
            this.divForm.form.divGrd00_00.form.addLayout(obj.name, obj);
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
                p.divSch.move("0","0","100%","220",null,null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","divSch:30","100.00%","424",null,null);

                p.Panel00.set_taborder("2");
                p.Panel00.set_flexwrap("nowrap");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_verticalgap("0");
                p.Panel00.move("167","662","100.00%","424",null,null);

                p.Panel01.set_taborder("3");
                p.Panel01.set_type("vertical");
                p.Panel01.set_verticalgap("20");
                p.Panel01.set_fittocontents("height");
                p.Panel01.move("118","681","100.00%","871.56",null,null);

                p.divGrd00_00.set_taborder("4");
                p.divGrd00_00.set_text("Div01");
                p.divGrd00_00.set_fittocontents("height");
                p.divGrd00_00.set_formscrollbartype("none none");
                p.divGrd00_00.set_formscrolltype("none");
                p.divGrd00_00.move("0","30","100.00%","494",null,null);
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
                p.divGrd.move("0","divSch:50","100%","414",null,null);

                p.divSch.set_text("Div00");
                p.divSch.set_fittocontents("height");
                p.divSch.move("0","0","100%","386",null,null);

                p.Panel01.move("118","681","100%","871.57",null,null);

                p.Panel00.move("167","662","100%","414",null,null);

                p.divGrd00_00.move("0","30","100%","449.71",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_flexmainaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexcrossaxisalign("start");
            obj.set_verticalgap("30");
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
                p.Button00_00.set_taborder("1");
                p.Button00_00.set_text("저장");
                p.Button00_00.set_cssclass("btn_WF_Yes");
                p.Button00_00.move("457.00","30","100","40",null,null);
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
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,1170,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("공통코드관리");

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
                p.divForm.move("0","divTitle:20",null,"1165","60",null);

                p.divGuide.set_taborder("1");
                p.divGuide.set_text("div00");
                p.divGuide.set_visible("false");
                p.divGuide.set_cssclass("div_GD_Tip");
                p.divGuide.move("1590.00","135","450","385",null,null);

                p.divPopBtn.set_taborder("3");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.move("0","divForm:20",null,"56","60",null);
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
                p.divForm.set_cssclass("div_WF_QuickFrBgM");
                p.divForm.move("0","0",null,"1387.57","0",null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.divSch.form.edt00_01_00","value","dsSearch","cdTypeId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.divSch.form.edt00_01_00_00","value","dsSearch","cdTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.divSch.form.Combo01_00_00_01","value","dsSearch","cdTypeUseYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.divSch.form.edt00_01_00_01","value","dsSearch","cdId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.divSch.form.edt00_01_00_00_00","value","dsSearch","cdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.divSch.form.Combo01_00_00_01_00","value","dsSearch","cdUseYn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.registerScript("COM022M01.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	COM022M01.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/08/30
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/08/30				김완성						최초생성
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
        	this.getCodeTypeTransaction();
        };

        this.cfnClose = function() {
        	console.log('cfnClose');
        }
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.getCodeTypeTransaction = function() {

        	var strSvcId    = "codeTy";
        	var strSvcUrl   = "sysMng/comCdTypeListInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsCdTyList=dsCdTyList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        this.getCodeTransaction = function(cdTypeId) {

        	var strSvcId    = "code";
        	var strSvcUrl   = "sysMng/comCdInfoListInq.do";
        	var inData      = "";
        	var outData     = "dsCdList=dsCdList";
        	var strArg      = "cdTypeId=" + cdTypeId;
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        this.gridSaveTransaction = function() {

        	var strSvcId    = "save";
        	var strSvcUrl   = "sysMng/comCdTypeInfoStrg.do";
        	var inData      = "dsCdTyList=dsCdTyList:U dsCdList=dsCdList:U";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

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
        		case "codeTy":
        			this.divForm.form.divGrd.form.Grid00.selectRow(0);
        			this.divForm.form.divGrd.form.staTotal01.text = this.dsCdTyList.rowcount;
        			break;

        		case "code":
        			this.divForm.form.divGrd00_00.form.staTotal01.text = this.dsCdList.rowcount;
        			break;

        		case "save":
        			var gvRetMsg = this.objApp.getVariable("gvRetMsg");
        			this.gfnAlertMsg("msg", gvRetMsg);
        			break;

        		case "excel":
        			//다운로드
        			console.log(errorMsg);	// 다운로드 가능한 파일 URL
        			break;
        	}
        };

        this.msgCallback = function(sPopupId, sRtn) {
        	var oRtn = JSON.parse(sRtn);
        	if(sPopupId == "save_confirm") {
        		if(oRtn.result == "Y") {
        			this.gridSaveTransaction();
        		}
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function() {

        };

        this.fn_displayType = function(objDs, crow) {

        	if(objDs == null) {
        		objDs = this.dsCdTyList;
        	}

        	var rTy = objDs.getRowType(crow);

        	if(rTy != 2) {
        		return "normal";
        	} else {
        		return "editcontrol";
        	}
        };

        this.fn_displayComboType = function(objDs, crow) {

        	if(objDs == null) {
        		objDs = this.dsCdTyList;
        	}

        	var rTy = objDs.getRowType(crow);

        	if(rTy != 2) {
        		return "normal";
        	} else {
        		return "combocontrol";
        	}
        };

        this.fn_editType = function(objDs, crow) {

        	if(objDs == null) {
        		objDs = this.dsCdTyList;
        	}

        	var rTy = objDs.getRowType(crow);

        	if(rTy != 2) {
        		return "none";
        	} else {
        		return "text";
        	}
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divForm_divGrd_Grid00_onselectchanged = function(obj,e)
        {
        	var cdTypeId = this.dsCdTyList.getColumn(e.row, "cdTypeId");
        	var rTy = this.dsCdTyList.getRowType(e.row);

        	console.log(cdTypeId);
        	console.log(rTy);

        	if(cdTypeId != null && cdTypeId != "" && rTy != 2) {
        		this.getCodeTransaction(cdTypeId);
        	} else {
        		this.dsCdList.deleteAll();
        	}
        };


        this.divForm_divGrd_btnGrdRegi_onclick = function(obj,e)
        {
        	this.dsCdTyList.insertRow(0);
        	this.dsCdTyList.setColumn(0, "useYn", "Y");
        	this.dsCdList.deleteAll();
        };


        this.divForm_divGrd_btnGrdDel_onclick = function(obj,e)
        {
        	var rTy = this.dsCdTyList.getRowType(e.row);

        	if(rTy == 2) {
        		this.dsCdTyList.deleteRow(e.row);
        	} else {
        		this.gfnAlertMsg("msg", "MSG_011", ["사용중인 코드유형입니다."]);
        	}
        };

        this.divForm_divGrd00_00_btnGrdRegi_onclick = function(obj,e)
        {
        	var cRow = this.divForm.form.divGrd.form.Grid00.getSelectedDatasetRows();
        	var cdTypeId = this.dsCdTyList.getColumn(cRow, "cdTypeId");

        	if(cdTypeId != null && cdTypeId != '') {
        		this.dsCdList.insertRow(0);
        		this.dsCdList.setColumn(0, "cdTypeId", cdTypeId);
        		this.dsCdList.setColumn(0, "useYn", "Y");
        	} else {
        		this.gfnAlertMsg("msg", "MSG_011", ["존재하지 않는 코드유형입니다."]);
        	}
        };

        this.divForm_divGrd00_00_btnGrdDel_onclick = function(obj,e)
        {
        	var rTy = this.dsCdList.getRowType(e.row);

        	if(rTy == 2) {
        		this.dsCdList.deleteRow(e.row);
        	} else {
        		this.gfnAlertMsg("msg", "MSG_011", ["사용중인 공통코드입니다."]);
        	}
        };

        this.divForm_divGrd_btnGrdDw_onclick = function(obj,e)
        {
        	this.divForm.form.divGrd00_00.form.Grid00
        	this.exportObj = new ExcelExportObject();
        	var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.divForm.form.divGrd.form.Grid00, "Sheet1!A1");
        	this.exportObj.set_exporturl("svcUrl::/XExportImport.do");
        	this.exportObj.exportData();
        };

        this.divForm_divGrd00_00_btnGrdDw00_onclick = function(obj,e)
        {
        	this.exportObj = new ExcelExportObject();
        	var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.divForm.form.divGrd00_00.form.Grid00, "Sheet1!A1");
        	this.exportObj.set_exporturl("svcUrl::/XExportImport.do");
        	this.exportObj.exportData();
        };

        this.divForm_divGrd_Grid00_oncellposchanged = function(obj,e)
        {
        	console.log(e);
        	var cdTypeId = this.dsCdTyList.getColumn(e.row, "cdTypeId");
        	console.log(cdTypeId);

        // 	if(obj.getCellPos() == 0) {
        // 		var fRow = this.dsCdTyList.findRow("cdTypeId", cdTypeId);
        // 		console.log(fRow);
        // 		if(fRow > 0) {
        // 			console.log("중복값");
        // 		}
        // 	}
        };


        this.divForm_divSch_onkeyup = function(obj,e)
        {
        	if (e.keycode==13) {
        		this.getSearchTransaction();
        	}
        };

        this.divPopBtn_Button00_00_onclick = function(obj,e)
        {
        	if(this.gfnDsIsUpdated(this.dsCdTyList) != false || this.gfnDsIsUpdated(this.dsCdList) != false) {
        		this.gfnConfirmMsg("save_confirm", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        	} else {
        		this.gfnAlertMsg("msg", "MSG_021");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divSch.addEventHandler("onkeyup",this.divForm_divSch_onkeyup,this);
            this.divForm.form.divSch.form.staLabel.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.divSch.form.staLabel02.addEventHandler("onclick",this.divForm_Div00_sta00_00_01_01_onclick,this);
            this.divForm.form.divSch.form.btnSchClose.addEventHandler("onclick",this.divForm_divSch_btnSchClose_onclick,this);
            this.divForm.form.divSch.form.btnSch.addEventHandler("onclick",this.cfnSearch,this);
            this.divForm.form.divSch.form.Combo01_00_00_01.addEventHandler("onitemchanged",this.divForm_divSch_Combo01_onitemchanged,this);
            this.divForm.form.divSch.form.staLabel00.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.divSch.form.staLabel02_00.addEventHandler("onclick",this.divForm_Div00_sta00_00_01_01_onclick,this);
            this.divForm.form.divSch.form.Combo01_00_00_01_00.addEventHandler("onitemchanged",this.divForm_divSch_Combo01_onitemchanged,this);
            this.divForm.form.divGrd.form.Grid00.addEventHandler("onselectchanged",this.divForm_divGrd_Grid00_onselectchanged,this);
            this.divForm.form.divGrd.form.btnGrdDel.addEventHandler("onclick",this.divForm_divGrd_btnGrdDel_onclick,this);
            this.divForm.form.divGrd.form.btnGrdRegi.addEventHandler("onclick",this.divForm_divGrd_btnGrdRegi_onclick,this);
            this.divForm.form.divGrd.form.btnGrdDw.addEventHandler("onclick",this.divForm_divGrd_btnGrdDw_onclick,this);
            this.divForm.form.divGrd00_00.form.btnGrdRegi.addEventHandler("onclick",this.divForm_divGrd00_00_btnGrdRegi_onclick,this);
            this.divForm.form.divGrd00_00.form.btnGrdDel.addEventHandler("onclick",this.divForm_divGrd00_00_btnGrdDel_onclick,this);
            this.divForm.form.divGrd00_00.form.btnGrdDw00.addEventHandler("onclick",this.divForm_divGrd00_00_btnGrdDw00_onclick,this);
            this.divPopBtn.form.Button00_00.addEventHandler("onclick",this.divPopBtn_Button00_00_onclick,this);
        };
        this.loadIncludeScript("COM022M01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
