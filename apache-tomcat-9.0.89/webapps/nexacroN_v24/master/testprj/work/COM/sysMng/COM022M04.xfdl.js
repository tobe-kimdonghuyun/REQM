(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM022M04");
            this.set_titletext("담당자연락처 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"currentPageNo\" type=\"STRING\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"STRING\" size=\"256\"/><Column id=\"telnoTaskClsf\" type=\"STRING\" size=\"256\"/><Column id=\"telnoSvcClsf\" type=\"STRING\" size=\"256\"/><Column id=\"telnoSe\" type=\"STRING\" size=\"256\"/><Column id=\"seNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"currentPageNo\">1</Col><Col id=\"recordCountPerPage\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"telnoSno\" type=\"STRING\" size=\"256\"/><Column id=\"telnoTaskClsf\" type=\"STRING\" size=\"256\"/><Column id=\"telnoSvcClsf\" type=\"STRING\" size=\"256\"/><Column id=\"clsfSeNm\" type=\"STRING\" size=\"256\"/><Column id=\"rgnTaskNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptPstnNm\" type=\"STRING\" size=\"256\"/><Column id=\"picTelno\" type=\"STRING\" size=\"256\"/><Column id=\"telnoRmrk\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTaskClsf", this);
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrvcFld", this);
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSe", this);
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdNm\">전체</Col></Row><Row><Col id=\"cdId\">01</Col><Col id=\"cdNm\">구분</Col></Row><Row><Col id=\"cdId\">02</Col><Col id=\"cdNm\">지역 및 업무</Col></Row><Row><Col id=\"cdId\">03</Col><Col id=\"cdNm\">담당부서/위치</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTaskClsfGrd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrvcFldGrd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"telnoSno\" type=\"STRING\" size=\"256\"/><Column id=\"telnoTaskClsf\" type=\"STRING\" size=\"256\"/><Column id=\"telnoSvcClsf\" type=\"STRING\" size=\"256\"/><Column id=\"clsfSeNm\" type=\"STRING\" size=\"256\"/><Column id=\"rgnTaskNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptPstnNm\" type=\"STRING\" size=\"256\"/><Column id=\"picTelno\" type=\"STRING\" size=\"256\"/><Column id=\"telnoRmrk\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("<ColumnInfo><Column id=\"totalRecordCount\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","70",null,"900","60",null,null,null,null,null,this);
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
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01\"/><PanelItem id=\"PanelItem02\" componentid=\"cmbTelnoSvcClsf\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("1");
            obj.set_text("서비스분야");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("3");
            obj.set_text("업무분류");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan00","1694.00","398","320","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("4");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel\"/><PanelItem id=\"PanelItem02\" componentid=\"cmbTelnoTaskClsf\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan02","1694.00","398","320","45",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("5");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"cmbSe\"/><PanelItem id=\"PanelItem01\" componentid=\"edtSeNm\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panClose","30","151","100%","30",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnSchClose\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSchClose","1251","185","52","29",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_SchClose");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("8");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSch\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSch","570","192","120","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("9");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cmbTelnoTaskClsf","788.00","145","20.42%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("10");
            obj.set_flexgrow("1");
            obj.set_innerdataset("dsTaskClsf");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cmbTelnoSvcClsf","788.00","145","20.42%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("11");
            obj.set_flexgrow("1");
            obj.set_innerdataset("dsSrvcFld");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cmbSe","788.00","145","15%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("12");
            obj.set_flexgrow("1");
            obj.set_innerdataset("dsSe");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtSeNm","140.00","30","50%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("13");
            obj.set_flexgrow("1");
            obj.set_displaynulltext("검색어 입력");
            obj.set_text("");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","0","190","100.00%","637",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panGrdBtn",null,"40","600","34","0",null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("7");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem05\" componentid=\"staTotal00\"/><PanelItem id=\"PanelItem03\" componentid=\"cmbGrdList\"/><PanelItem id=\"PanelItem00\" componentid=\"btnGrdDel\"/><PanelItem id=\"PanelItem02\" componentid=\"btnGrdRegi\"/><PanelItem id=\"PanelItem01\" componentid=\"btnGrdDw\"/><PanelItem id=\"PanelItem04\" componentid=\"btnGrdDwAll\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdList","0","panGrdBtn:10","100.00%",null,null,"96",null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.getSetter("uFunction").set("checkbox");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"업무분류\"/><Cell col=\"1\" text=\"서비스분야\"/><Cell col=\"2\" text=\"구분\"/><Cell col=\"3\" text=\"지역 및 업무\"/><Cell col=\"4\" text=\"담당부서 / 위치\"/><Cell col=\"5\" text=\"전화번호\"/><Cell col=\"6\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:telnoTaskClsf\" textAlign=\"center\" combodataset=\"dsTaskClsfGrd\" combocodecol=\"cdId\" combodatacol=\"cdNm\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"1\" text=\"bind:telnoSvcClsf\" textAlign=\"center\" combodataset=\"dsSrvcFldGrd\" combocodecol=\"cdId\" combodatacol=\"cdNm\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"2\" text=\"bind:clsfSeNm\" edittype=\"text\" editmaxlength=\"20\"/><Cell col=\"3\" text=\"bind:rgnTaskNm\" edittype=\"text\" editmaxlength=\"65\"/><Cell col=\"4\" text=\"bind:deptPstnNm\" edittype=\"text\" editmaxlength=\"65\"/><Cell col=\"5\" text=\"bind:picTelno\" textAlign=\"center\" edittype=\"normal\" editmaxlength=\"20\"/><Cell col=\"6\" text=\"bind:telnoRmrk\" edittype=\"normal\" editmaxlength=\"65\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divPage","0","grdList:10","100.00%","36",null,null,null,null,"36",null,this.divForm.form.divGrd.form);
            obj.set_taborder("11");
            obj.set_text("Div00");
            obj.set_url("work::COM/util/paging/paging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_visible("false");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("panBtn",null,"divPage:10","100%","40","0",null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("5");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("none");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnSave\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","40","27","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal01","staTotal:0","40","43","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("1000");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","staTotal01:0","40","30","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnSave","1260.00","512","100","40",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_text("확인");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","296.00","0","65","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("6");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","500","40",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("8");
            obj.set_text("담당자 연락처");
            obj.set_cssclass("sta_WF_Txt50022");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDw","1450.00","-12","124","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("9");
            obj.set_text("다운로드(엑셀)");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdRegi","361.00","0","65","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("10");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDwAll","436","10","150","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("12");
            obj.set_text("전체다운로드(엑셀)");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal00","25","0","65","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("13");
            obj.set_text("목록수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Combo("cmbGrdList","100","0","80","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("14");
            obj.set_visible("true");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_divGrd_form_cmbGrdList_innerdataset = new nexacro.NormalDataset("divForm_form_divGrd_form_cmbGrdList_innerdataset", obj);
            divForm_form_divGrd_form_cmbGrdList_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_divGrd_form_cmbGrdList_innerdataset);
            obj.set_text("10");
            obj.set_value("10");
            obj.set_index("0");
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

            obj = new Div("divTitle","0","0",null,"60","60",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Grid("grdExcel","1487","-1","12.09%",null,null,"775",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsExcel");
            obj.set_autofittype("none");
            obj.getSetter("uFunction").set("checkbox");
            obj.set_autoenter("select");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"업무분류\"/><Cell col=\"1\" text=\"서비스분야\"/><Cell col=\"2\" text=\"구분\"/><Cell col=\"3\" text=\"지역 및 업무\"/><Cell col=\"4\" text=\"담당부서 / 위치\"/><Cell col=\"5\" text=\"전화번호\"/><Cell col=\"6\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:telnoTaskClsf\" textAlign=\"center\" combodataset=\"dsTaskClsfGrd\" combocodecol=\"cdId\" combodatacol=\"cdNm\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"1\" text=\"bind:telnoSvcClsf\" textAlign=\"center\" combodataset=\"dsSrvcFldGrd\" combocodecol=\"cdId\" combodatacol=\"cdNm\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"2\" text=\"bind:clsfSeNm\" edittype=\"text\" editmaxlength=\"20\"/><Cell col=\"3\" text=\"bind:rgnTaskNm\" edittype=\"text\" editmaxlength=\"65\"/><Cell col=\"4\" text=\"bind:deptPstnNm\" edittype=\"text\" editmaxlength=\"65\"/><Cell col=\"5\" text=\"bind:picTelno\" textAlign=\"center\" edittype=\"normal\" editmaxlength=\"20\"/><Cell col=\"6\" text=\"bind:telnoRmrk\" edittype=\"normal\" editmaxlength=\"65\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
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
                p.staLabel01.set_text("서비스분야");
                p.staLabel01.set_cssclass("sta_WF_SchLabel");
                p.staLabel01.set_flexshrink("0");
                p.staLabel01.set_minwidth("");
                p.staLabel01.move("0","0","100","40",null,null);

                p.staLabel.set_taborder("3");
                p.staLabel.set_text("업무분류");
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

                p.pan02.set_taborder("5");
                p.pan02.set_type("horizontal");
                p.pan02.set_horizontalgap("10");
                p.pan02.set_flexgrow("1");
                p.pan02.set_minwidth("");
                p.pan02.move("1694.00","398","320","45",null,null);

                p.panClose.set_taborder("7");
                p.panClose.set_type("vertical");
                p.panClose.set_cssclass("pal_WF_SchLine");
                p.panClose.set_flexcrossaxisalign("end");
                p.panClose.move("30","151","100%","30",null,null);

                p.btnSchClose.set_taborder("6");
                p.btnSchClose.set_cssclass("btn_WF_SchClose");
                p.btnSchClose.move("1251","185","52","29",null,null);

                p.panSchBtn.set_taborder("8");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100%","40",null,null);

                p.btnSch.set_taborder("9");
                p.btnSch.set_text("조회하기");
                p.btnSch.set_cssclass("btn_WF_Search");
                p.btnSch.move("570","192","120","40",null,null);

                p.cmbTelnoTaskClsf.set_taborder("10");
                p.cmbTelnoTaskClsf.set_flexgrow("1");
                p.cmbTelnoTaskClsf.set_innerdataset("dsTaskClsf");
                p.cmbTelnoTaskClsf.set_codecolumn("cdId");
                p.cmbTelnoTaskClsf.set_datacolumn("cdNm");
                p.cmbTelnoTaskClsf.set_text("선택");
                p.cmbTelnoTaskClsf.set_value("");
                p.cmbTelnoTaskClsf.set_index("-1");
                p.cmbTelnoTaskClsf.move("788.00","145","20.42%","40",null,null);

                p.cmbTelnoSvcClsf.set_taborder("11");
                p.cmbTelnoSvcClsf.set_flexgrow("1");
                p.cmbTelnoSvcClsf.set_innerdataset("dsSrvcFld");
                p.cmbTelnoSvcClsf.set_codecolumn("cdId");
                p.cmbTelnoSvcClsf.set_datacolumn("cdNm");
                p.cmbTelnoSvcClsf.set_text("선택");
                p.cmbTelnoSvcClsf.set_value("");
                p.cmbTelnoSvcClsf.set_index("-1");
                p.cmbTelnoSvcClsf.move("788.00","145","20.42%","40",null,null);

                p.cmbSe.set_taborder("12");
                p.cmbSe.set_flexgrow("1");
                p.cmbSe.set_innerdataset("dsSe");
                p.cmbSe.set_codecolumn("cdId");
                p.cmbSe.set_datacolumn("cdNm");
                p.cmbSe.set_text("전체");
                p.cmbSe.set_value("");
                p.cmbSe.set_index("0");
                p.cmbSe.move("788.00","145","15%","40",null,null);

                p.edtSeNm.set_taborder("13");
                p.edtSeNm.set_flexgrow("1");
                p.edtSeNm.set_displaynulltext("검색어 입력");
                p.edtSeNm.set_maxwidth("");
                p.edtSeNm.move("140.00","30","50%","40",null,null);
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
                p.panGrdBtn.set_taborder("7");
                p.panGrdBtn.set_flexcrossaxisalign("start");
                p.panGrdBtn.set_flexcrossaxiswrapalign("start");
                p.panGrdBtn.set_flexmainaxisalign("end");
                p.panGrdBtn.set_horizontalgap("10");
                p.panGrdBtn.set_fittocontents("width");
                p.panGrdBtn.move(null,"40","600","34","0",null);

                p.grdList.set_taborder("0");
                p.grdList.set_binddataset("dsList");
                p.grdList.set_autofittype("col");
                p.grdList.getSetter("uFunction").set("checkbox");
                p.grdList.set_autoenter("select");
                p.grdList.move("0","panGrdBtn:10","100.00%",null,null,"96");

                p.divPage.set_taborder("11");
                p.divPage.set_text("Div00");
                p.divPage.set_url("work::COM/util/paging/paging.xfdl");
                p.divPage.set_formscrollbartype("none none");
                p.divPage.set_formscrolltype("none");
                p.divPage.set_visible("false");
                p.divPage.set_minheight("36");
                p.divPage.set_maxheight("");
                p.divPage.move("0","grdList:10","100.00%","36",null,null);

                p.panBtn.set_taborder("5");
                p.panBtn.set_horizontalgap("10");
                p.panBtn.set_fittocontents("none");
                p.panBtn.set_flexmainaxisalign("center");
                p.panBtn.move(null,"divPage:10","100%","40","0",null);

                p.staTotal.set_taborder("3");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","40","27","34",null,null);

                p.staTotal01.set_taborder("2");
                p.staTotal01.set_text("1000");
                p.staTotal01.set_cssclass("sta_WF_Total");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.set_fittocontents("width");
                p.staTotal01.move("staTotal:0","40","43","34",null,null);

                p.staTotal02.set_taborder("1");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.move("staTotal01:0","40","30","34",null,null);

                p.btnSave.set_taborder("4");
                p.btnSave.set_text("확인");
                p.btnSave.move("1260.00","512","100","40",null,null);

                p.btnGrdDel.set_taborder("6");
                p.btnGrdDel.set_text("행삭제");
                p.btnGrdDel.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel.set_visible("true");
                p.btnGrdDel.set_fittocontents("width");
                p.btnGrdDel.move("296.00","0","65","34",null,null);

                p.Static00.set_taborder("8");
                p.Static00.set_text("담당자 연락처");
                p.Static00.set_cssclass("sta_WF_Txt50022");
                p.Static00.move("0","0","500","40",null,null);

                p.btnGrdDw.set_taborder("9");
                p.btnGrdDw.set_text("다운로드(엑셀)");
                p.btnGrdDw.set_cssclass("btn_WF_GrdDw");
                p.btnGrdDw.set_visible("true");
                p.btnGrdDw.set_fittocontents("width");
                p.btnGrdDw.move("1450.00","-12","124","34",null,null);

                p.btnGrdRegi.set_taborder("10");
                p.btnGrdRegi.set_text("행추가");
                p.btnGrdRegi.set_cssclass("btn_WF_SmallBlack");
                p.btnGrdRegi.set_visible("true");
                p.btnGrdRegi.set_fittocontents("width");
                p.btnGrdRegi.move("361.00","0","65","34",null,null);

                p.btnGrdDwAll.set_taborder("12");
                p.btnGrdDwAll.set_text("전체다운로드(엑셀)");
                p.btnGrdDwAll.set_cssclass("btn_WF_GrdDw");
                p.btnGrdDwAll.set_visible("true");
                p.btnGrdDwAll.set_fittocontents("width");
                p.btnGrdDwAll.move("436","10","150","34",null,null);

                p.staTotal00.set_taborder("13");
                p.staTotal00.set_text("목록수");
                p.staTotal00.set_cssclass("sta_WF_SchLabel");
                p.staTotal00.set_fittocontents("width");
                p.staTotal00.set_visible("true");
                p.staTotal00.move("25","0","65","34",null,null);

                p.cmbGrdList.set_taborder("14");
                p.cmbGrdList.set_visible("true");
                p.cmbGrdList.set_innerdataset(divForm_form_divGrd_form_cmbGrdList_innerdataset);
                p.cmbGrdList.set_codecolumn("codecolumn");
                p.cmbGrdList.set_datacolumn("datacolumn");
                p.cmbGrdList.set_text("10");
                p.cmbGrdList.set_value("10");
                p.cmbGrdList.set_index("0");
                p.cmbGrdList.move("100","0","80","34",null,null);
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
                p.grdList.set_autofittype("none");
            	}
            );
            obj.set_verticalgap("20");
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
                p.divGrd.move("0","190","100.00%","637",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("30");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("Layout0","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divSch.set_text("Div00");
                p.divSch.set_fittocontents("height");
                p.divSch.move("0","0","100%","386",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("0px 10px 0px 20px");
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
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("담당자연락처 관리");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.set_fittocontents("height");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","70",null,"900","60",null);

                p.divGuide.set_taborder("1");
                p.divGuide.set_text("div00");
                p.divGuide.set_visible("false");
                p.divGuide.set_cssclass("div_GD_Tip");
                p.divGuide.move("1590.00","135","450","385",null,null);

                p.divTitle.set_taborder("2");
                p.divTitle.set_text("");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.set_formscrolltype("none");
                p.divTitle.set_maxwidth("");
                p.divTitle.move("0","0",null,"60","60",null);

                p.grdExcel.set_taborder("3");
                p.grdExcel.set_binddataset("dsExcel");
                p.grdExcel.set_autofittype("none");
                p.grdExcel.getSetter("uFunction").set("checkbox");
                p.grdExcel.set_autoenter("select");
                p.grdExcel.set_visible("false");
                p.grdExcel.move("1487","-1","12.09%",null,null,"775");
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",390,600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.set_cssclass("div_WF_QuickFrBgM");
                p.divForm.move("0","0","100.00%","1089",null,null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.divSch.form.cmbTelnoTaskClsf","value","dsSearch","telnoTaskClsf");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.divSch.form.cmbTelnoSvcClsf","value","dsSearch","telnoSvcClsf");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.divSch.form.cmbSe","value","dsSearch","telnoSe");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.divSch.form.edtSeNm","value","dsSearch","seNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.divGrd.form.staTotal01","text","dsPage","totalRecordCount");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","work::COM/util/paging/paging.xfdl");
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.registerScript("COM022M04.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	COM022M04.xfdl
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
        	var recordCountPerPage = this.divForm.form.divGrd.form.cmbGrdList.value;
        	this.dsSearch.setColumn(0, "currentPageNo", page);
        	this.dsSearch.setColumn(0, "recordCountPerPage", recordCountPerPage);
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

        this.cfnClose = function()
        {
        	console.log('cfnClose');
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.getSearchTransaction = function() {

        	var strSvcId    = "search";
        	var strSvcUrl   = "sysMng/picCtinfoInq.do";
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

        this.getAllSearchTransaction = function()
        {
        	this.dsSearch.setColumn(0, "currentPageNo", "1");
        	this.dsSearch.setColumn(0, "recordCountPerPage", "9999999");

        	var strSvcId    = "excel";
        	var strSvcUrl   = "sysMng/picCtinfoInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsExcel=dsList";
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
        	var strSvcUrl   = "sysMng/picCtinfoStrg.do";
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
        			this.divForm.form.divGrd.form.divPage.form.initPages(this.dsPage.getColumn(0, "currentPageNo"), this.dsPage.getColumn(0, "totalRecordCount"), this.dsPage.getColumn(0, "recordCountPerPage"), this.dsPage.getColumn(0, "pageSize"), "cfnSearch");
        			break;
        		case "save":
        			this.gfnAlertMsg("msg", "CST_003");
        			this.cfnSearch(1);
        			break;
        		case "taskClsf":
        			this.dsTaskClsf.filter("uprCd == ''");
        			this.dsSrvcFld.copyData(this.dsTaskClsf);
        			this.dsSrvcFld.filter("cdId == ''");
        			this.divForm.form.divSch.form.cmbTelnoSvcClsf.index = 0;
        			break;
        		case "taskClsfGrd":
        			this.dsTaskClsfGrd.filter("uprCd == ''");
        			this.dsSrvcFldGrd.copyData(this.dsTaskClsf);
        			this.dsSrvcFldGrd.filter("cdId == ''");
        			break;
        		case "excel" :
        			/*****  현재 그리드 화면을 엑셀로 다운로드 받음  *****/
        			this.exportObj = new ExcelExportObject();
        			var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.grdExcel, "Sheet1!A1");
        			this.exportObj.set_exporturl("svcUrl::/XExportImport.do");
        			this.exportObj.exportData();
        			/*****  현재 그리드 화면을 엑셀로 다운로드 받음  *****/
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
        			this.gridSaveTransaction();
        		}
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

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	this.gfnCmmCode("taskClsf", "dsTaskClsf", "CTGRY_CD", "A");
        	this.gfnCmmCode("taskClsfGrd", "dsTaskClsfGrd", "CTGRY_CD", "S");
        	this.divForm.form.divSch.form.cmbTelnoTaskClsf.index = 0;
        	this.divForm.form.divSch.form.cmbTelnoSvcClsf.index = 0;
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divForm_divSch_btnSch_onclick = function(obj,e)
        {
        	this.cfnSearch(1);
        };

        this.divForm_divGrd_btnGrdDw_onclick = function(obj,e)
        {
        	/*****  현재 그리드 화면을 엑셀로 다운로드 받음  *****/
        	this.exportObj = new ExcelExportObject();
        	var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.divForm.form.divGrd.form.grdList, "Sheet1!A1");
        	this.exportObj.set_exporturl("svcUrl::/XExportImport.do");
        	this.exportObj.exportData();
        	/*****  현재 그리드 화면을 엑셀로 다운로드 받음  *****/
        };

        // 행추가
        this.divForm_divGrd_btnGrdRegi_onclick = function(obj,e)
        {
        	if(this.dsList.getRowCount() > 0) {
        		var nRow = this.dsList.rowposition;
        		var addRow = this.dsList.insertRow(nRow + 1);
        		this.dsList.copyRow(addRow, this.dsList, nRow);
        		this.dsList.setColumn(addRow, "chk", "1");
        	} else {
        		var nRow = this.dsList.addRow();
        		this.dsList.setColumn(nRow, "chk", "1");
        	}
        };

        // 행삭제
        this.divForm_divGrd_btnGrdDel_onclick = function(obj,e)
        {
        	var chk = this.dsList.findRow("chk", 1);
        	if(chk != -1) {
        		this.gfnConfirmMsg("del_confirm", "MSG_005", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        	} else {
        		this.gfnAlertMsg("msg", "MSG_006");
        	}
        };

        this.divForm_divGrd_grdList_oncellclick = function(obj,e)
        {
        	var nVal = this.dsList.getColumn(e.row, "telnoTaskClsf");

        	if(e.postvalue != '') {
        		this.dsSrvcFldGrd.filter("uprCd == '"+nVal+"'");
        	} else {
        		this.dsSrvcFldGrd.filter("cdId == ''");
        	}

        };

        // 저장
        this.divForm_divGrd_btnSave_onclick = function(obj,e)
        {
        	if(this.gfnDsIsUpdated(this.dsList) != true) {
        		this.gfnAlertMsg("msg", "MSG_004");
        	} else {
        		var arr = [{ "id" : "telnoTaskClsf", "title" : "업무분류"}
        		          ,{ "id" : "telnoSvcClsf", "title" : "서비스분야"}
        		          ];

        		if(this.fnGrdValidation(arr) != true) {
        			return;
        		}

        		this.gfnConfirmMsg("save", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        	}
        };

        // 필수입력체크
        this.fnGrdValidation = function(arr)
        {
        	for(var a=0; a<arr.length; a++) {
        		var cell = this.divForm.form.divGrd.form.grdList.getBindCellIndex("body", arr[a].id);
        		for(var i=0; i<this.dsList.getRowCount(); i++) {
        			if(this.dsList.getRowType(i) == Dataset.ROWTYPE_INSERT || this.dsList.getRowType(i) == Dataset.ROWTYPE_UPDATE) {
        				if(this.gfnIsNull(this.dsList.getColumn(i, arr[a].id)) == true) {
        					this.divForm.form.divGrd.form.grdList.setCellPos(cell, i);
        					this.gfnAlertMsg("msg", "CST_004", [arr[a].title]);
        					return false;
        				}
        			}
        		}
        	}

        	return true;
        };

        this.divForm_divSch_Combo01_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != '') {
        		this.dsSrvcFld.filter("uprCd == '"+e.postvalue+"'");
        		this.dsSrvcFld.insertRow(0);
        		this.dsSrvcFld.setColumn(0, "cdTypeId", "");
        		this.dsSrvcFld.setColumn(0, "cdId", "");
        		this.dsSrvcFld.setColumn(0, "cdNm", "전체");
        	} else {
        		this.dsSrvcFld.filter("cdId == ''");
        	}

        	this.divForm.form.divSch.form.cmbTelnoSvcClsf.index = 0;
        };


        this.dsList_oncolumnchanged = function(obj,e)
        {
        	if(e.postvalue != '') {
        		this.dsSrvcFldGrd.filter("uprCd == '"+e.newvalue+"'");
        	} else {
        		this.dsSrvcFldGrd.filter("cdId == ''");
        	}
        };

        this.divForm_divGrd_btnGrdDwAll_onclick = function(obj,e)
        {
        	this.getAllSearchTransaction();
        };

        this.divForm_divGrd_cmbGrdList_onitemchanged = function(obj,e)
        {
        	this.cfnSearch(1);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divSch.form.staLabel.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.divSch.form.btnSchClose.addEventHandler("onclick",this.divForm_divSch_btnSchClose_onclick,this);
            this.divForm.form.divSch.form.btnSch.addEventHandler("onclick",this.divForm_divSch_btnSch_onclick,this);
            this.divForm.form.divSch.form.cmbTelnoTaskClsf.addEventHandler("onitemchanged",this.divForm_divSch_Combo01_onitemchanged,this);
            this.divForm.form.divSch.form.cmbSe.addEventHandler("onitemchanged",this.divForm_divSch_Combo01_onitemchanged,this);
            this.divForm.form.divGrd.form.grdList.addEventHandler("oncellclick",this.divForm_divGrd_grdList_oncellclick,this);
            this.divForm.form.divGrd.form.btnSave.addEventHandler("onclick",this.divForm_divGrd_btnSave_onclick,this);
            this.divForm.form.divGrd.form.btnGrdDel.addEventHandler("onclick",this.divForm_divGrd_btnGrdDel_onclick,this);
            this.divForm.form.divGrd.form.Static00.addEventHandler("onclick",this.divForm_divGrd_grdList_oncellclick,this);
            this.divForm.form.divGrd.form.btnGrdDw.addEventHandler("onclick",this.divForm_divGrd_btnGrdDw_onclick,this);
            this.divForm.form.divGrd.form.btnGrdRegi.addEventHandler("onclick",this.divForm_divGrd_btnGrdRegi_onclick,this);
            this.divForm.form.divGrd.form.btnGrdDwAll.addEventHandler("onclick",this.divForm_divGrd_btnGrdDwAll_onclick,this);
            this.divForm.form.divGrd.form.cmbGrdList.addEventHandler("onitemchanged",this.divForm_divGrd_cmbGrdList_onitemchanged,this);
            this.grdExcel.addEventHandler("oncellclick",this.divForm_divGrd_grdList_oncellclick,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsExcel.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
        };
        this.loadIncludeScript("COM022M04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
