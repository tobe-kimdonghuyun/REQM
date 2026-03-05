(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM021M01");
            this.set_titletext("SLM 카탈로그 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsEvlYr", this);
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEvlNotn", this);
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"evlYr\" type=\"STRING\" size=\"256\"/><Column id=\"evlNotn\" type=\"STRING\" size=\"256\"/><Column id=\"ognzGroupId\" type=\"STRING\" size=\"256\"/><Column id=\"srvcGroupId\" type=\"STRING\" size=\"256\"/><Column id=\"scrGroupId\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGet", this);
            obj._setContents("<ColumnInfo><Column id=\"evlYr\" type=\"STRING\" size=\"256\"/><Column id=\"evlNotn\" type=\"STRING\" size=\"256\"/><Column id=\"evlBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"evlEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"notEvlScrCrtr\" type=\"STRING\" size=\"256\"/><Column id=\"notEvlScrVl\" type=\"STRING\" size=\"256\"/><Column id=\"ognzGroupId\" type=\"STRING\" size=\"256\"/><Column id=\"srvcGroupId\" type=\"STRING\" size=\"256\"/><Column id=\"scrGroupId\" type=\"STRING\" size=\"256\"/><Column id=\"evlAplcnYn\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNotEvlScrCrtr", this);
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdNm\">선택</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOgnzGroup", this);
            obj._setContents("<ColumnInfo><Column id=\"ognzGroupId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOgnzList", this);
            obj._setContents("<ColumnInfo><Column id=\"evlYr\" type=\"STRING\" size=\"256\"/><Column id=\"evlNotn\" type=\"STRING\" size=\"256\"/><Column id=\"ognzGroupId\" type=\"STRING\" size=\"256\"/><Column id=\"deptId\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"coSe\" type=\"STRING\" size=\"256\"/><Column id=\"upDeptId\" type=\"STRING\" size=\"256\"/><Column id=\"upDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"evlTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"deptWgvl\" type=\"STRING\" size=\"256\"/><Column id=\"scrRfltRt\" type=\"STRING\" size=\"256\"/><Column id=\"sbptNocs\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSlmCoSe", this);
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEvlMax", this);
            obj._setContents("<ColumnInfo><Column id=\"evlYr\" type=\"STRING\" size=\"256\"/><Column id=\"evlNotn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrvcList", this);
            obj._setContents("<ColumnInfo><Column id=\"srvcGroupId\" type=\"STRING\" size=\"256\"/><Column id=\"slmSrvcId\" type=\"STRING\" size=\"256\"/><Column id=\"taskFldId\" type=\"STRING\" size=\"256\"/><Column id=\"srvcFldId\" type=\"STRING\" size=\"256\"/><Column id=\"srvcNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcsTerm\" type=\"STRING\" size=\"256\"/><Column id=\"evlTrgtSe\" type=\"STRING\" size=\"256\"/><Column id=\"idctCnt\" type=\"STRING\" size=\"256\"/><Column id=\"taskNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrvcGroup", this);
            obj._setContents("<ColumnInfo><Column id=\"srvcGroupId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIdctList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"slmIdctId\" type=\"STRING\" size=\"256\"/><Column id=\"srvcViewNm\" type=\"STRING\" size=\"256\"/><Column id=\"srvcTrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"mngIdctNm\" type=\"STRING\" size=\"256\"/><Column id=\"msrmtMtdExpln\" type=\"STRING\" size=\"256\"/><Column id=\"indctMtdSe\" type=\"STRING\" size=\"256\"/><Column id=\"wgvl\" type=\"STRING\" size=\"256\"/><Column id=\"evlTrgtSe\" type=\"STRING\" size=\"256\"/><Column id=\"idctClfmlKnd\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSlmEvlTrgt", this);
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIndctMtdSe", this);
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsScrGroup", this);
            obj._setContents("<ColumnInfo><Column id=\"scrGroupId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsScrList", this);
            obj._setContents("<ColumnInfo><Column id=\"scrGroupId\" type=\"STRING\" size=\"256\"/><Column id=\"groupSn\" type=\"STRING\" size=\"256\"/><Column id=\"sortnMinVl\" type=\"STRING\" size=\"256\"/><Column id=\"sortnMaxVl\" type=\"STRING\" size=\"256\"/><Column id=\"scrVl\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","60",null,null,"60","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("divSch","0","0","100.00%","73",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("PanelLabel","20.00","14","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("0");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("50");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan01\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel01","1694.00","398","420","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01\"/><PanelItem id=\"PanelItem03\" componentid=\"cmbEvlYr\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01","0","0","110","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("1");
            obj.set_text("년도");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel02","0","0","110","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("3");
            obj.set_text("치수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel02","1694.00","398","420","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("4");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel02\"/><PanelItem id=\"PanelItem03\" componentid=\"cmbEvlNotn\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cmbEvlYr","788.00","145","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("5");
            obj.set_flexgrow("1");
            obj.set_innerdataset("dsEvlYr");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cmbEvlNotn","788.00","145","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("6");
            obj.set_flexgrow("1");
            obj.set_innerdataset("dsEvlNotn");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01","710","135","420","0",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("7");
            obj.set_flexgrow("1");
            obj._setContents("");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","805","25","420","0",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("8");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","divSch:20","100.00%","157",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"div00\"/><PanelItem id=\"PanelItem02\" componentid=\"divSch00\"/><PanelItem id=\"PanelItem03\" componentid=\"div01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Tab("tabSlm","0","Panel00:20","100.00%","60%",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.set_flexgrow("1");
            this.divForm.addChild(obj.name, obj);

            obj = new Tabpage("tpg01",this.divForm.form.tabSlm);
            obj.set_text("평가대상 조직");
            this.divForm.form.tabSlm.addChild(obj.name, obj);

            obj = new Panel("PanelLabel","0","10","100.00%","40",null,null,null,null,null,null,this.divForm.form.tabSlm.tpg01.form);
            obj.set_taborder("0");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("50");
            obj.set_fittocontents("height");
            obj.set_flexmainaxisalign("spacebetween");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02\"/></Contents>");
            this.divForm.form.tabSlm.tpg01.addChild(obj.name, obj);

            obj = new Grid("grpList","0","PanelLabel:10","100.00%",null,null,"0",null,null,null,null,this.divForm.form.tabSlm.tpg01.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsOgnzList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"450\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"70\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"조직코드\"/><Cell col=\"1\" text=\"조직명\"/><Cell col=\"2\" text=\"회사구분\"/><Cell col=\"3\" text=\"취합조직명\"/><Cell col=\"4\" text=\"감점건수\"/><Cell col=\"5\" text=\"평가대상여부\"/><Cell col=\"6\" colspan=\"2\" text=\"점수반영율\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:deptId\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:deptNm\"/><Cell col=\"2\" text=\"bind:coSe\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"dsSlmCoSe\" combocodecol=\"cdId\" combodatacol=\"cdNm\"/><Cell col=\"3\" text=\"bind:upDeptNm\"/><Cell col=\"4\" text=\"bind:sbptNocs\" textAlign=\"right\" displaytype=\"number\" edittype=\"expr:coSe != &apos;2&apos; ? &apos;text&apos; : &apos;none&apos;\" editmaxlength=\"3\" editinputtype=\"number\"/><Cell col=\"5\" text=\"bind:evlTrgtYn\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:scrRfltRt\" cssclass=\"CellEnd\" textAlign=\"right\" border=\"1px solid #dddddd, 0px solid #dddddd, 1px solid #dddddd, 1px solid #dddddd\"/><Cell col=\"7\" cssclass=\"CellEnd\" expr=\"scrRfltRt != &quot;&quot; ? &apos;%&apos; : &apos;&apos;\" textAlign=\"left\"/></Band></Format></Formats>");
            this.divForm.form.tabSlm.tpg01.addChild(obj.name, obj);

            obj = new Static("staLabel01","10","10","180","40",null,null,null,null,null,null,this.divForm.form.tabSlm.tpg01.form);
            obj.set_taborder("2");
            obj.set_text("평가대상 조직표 ID");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.tabSlm.tpg01.addChild(obj.name, obj);

            obj = new Combo("cmbOgnzGroup","140.00","10","360","40",null,null,null,null,null,null,this.divForm.form.tabSlm.tpg01.form);
            obj.set_taborder("3");
            obj.set_flexgrow("0");
            obj.set_innerdataset("dsOgnzGroup");
            obj.set_codecolumn("ognzGroupId");
            obj.set_datacolumn("ognzGroupId");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.tabSlm.tpg01.addChild(obj.name, obj);

            obj = new Panel("Panel01","10","10","480","40",null,null,null,null,null,null,this.divForm.form.tabSlm.tpg01.form);
            obj.set_taborder("4");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("none");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01\"/><PanelItem id=\"PanelItem03\" componentid=\"cmbOgnzGroup\"/></Contents>");
            this.divForm.form.tabSlm.tpg01.addChild(obj.name, obj);

            obj = new Panel("Panel02","830","23","138","40",null,null,null,null,null,null,this.divForm.form.tabSlm.tpg01.form);
            obj.set_taborder("5");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnPop\"/></Contents>");
            this.divForm.form.tabSlm.tpg01.addChild(obj.name, obj);

            obj = new Button("btnPop","775.00","0","138","34",null,null,null,null,null,null,this.divForm.form.tabSlm.tpg01.form);
            obj.set_taborder("6");
            obj.set_text("평가대상 조직표 관리");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_Small");
            this.divForm.form.tabSlm.tpg01.addChild(obj.name, obj);

            obj = new Tabpage("tpg02",this.divForm.form.tabSlm);
            obj.set_text("평가대상 서비스");
            this.divForm.form.tabSlm.addChild(obj.name, obj);

            obj = new Static("staLabel01","0","0","180","40",null,null,null,null,null,null,this.divForm.form.tabSlm.tpg02.form);
            obj.set_taborder("0");
            obj.set_text("평가대상 서비스 그룹");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.tabSlm.tpg02.addChild(obj.name, obj);

            obj = new Combo("cmbSrvcGroupId","130.00","0","360","40",null,null,null,null,null,null,this.divForm.form.tabSlm.tpg02.form);
            obj.set_taborder("1");
            obj.set_flexgrow("0");
            obj.set_innerdataset("dsSrvcGroup");
            obj.set_codecolumn("srvcGroupId");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.tabSlm.tpg02.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","20","550","40",null,null,null,null,null,null,this.divForm.form.tabSlm.tpg02.form);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01\"/><PanelItem id=\"PanelItem03\" componentid=\"cmbSrvcGroupId\"/></Contents>");
            this.divForm.form.tabSlm.tpg02.addChild(obj.name, obj);

            obj = new Button("btnPop01","599.00","0","162","34",null,null,null,null,null,null,this.divForm.form.tabSlm.tpg02.form);
            obj.set_taborder("3");
            obj.set_text("평가대상 서비스그룹 관리");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Small");
            this.divForm.form.tabSlm.tpg02.addChild(obj.name, obj);

            obj = new Button("btnPop02","775.00","0","154","34",null,null,null,null,null,null,this.divForm.form.tabSlm.tpg02.form);
            obj.set_taborder("4");
            obj.set_text("서비스별 지표 연결 관리");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_Small");
            this.divForm.form.tabSlm.tpg02.addChild(obj.name, obj);

            obj = new Panel("Panel02","470.00","0","326","40",null,null,null,null,null,null,this.divForm.form.tabSlm.tpg02.form);
            obj.set_taborder("5");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnPop01\"/><PanelItem id=\"PanelItem01\" componentid=\"btnPop02\"/></Contents>");
            this.divForm.form.tabSlm.tpg02.addChild(obj.name, obj);

            obj = new Panel("PanelLabel","0","10","100.00%","40",null,null,null,null,null,null,this.divForm.form.tabSlm.tpg02.form);
            obj.set_taborder("6");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("50");
            obj.set_fittocontents("height");
            obj.set_flexmainaxisalign("spacebetween");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02\"/></Contents>");
            this.divForm.form.tabSlm.tpg02.addChild(obj.name, obj);

            obj = new Grid("grpList","0","PanelLabel:10","100%",null,null,"0",null,null,null,null,this.divForm.form.tabSlm.tpg02.form);
            obj.set_taborder("7");
            obj.set_binddataset("dsSrvcList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"250\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"분야\"/><Cell col=\"1\" text=\"서비스\"/><Cell col=\"2\" text=\"서비스 분야\"/><Cell col=\"3\" text=\"처리기한(일)\"/><Cell col=\"4\" text=\"평가대상\"/><Cell col=\"5\" text=\"연결지표건수\"/><Cell col=\"6\" text=\"평가 구간\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:taskFldId\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"dsTaskFldId\" combocodecol=\"cdId\" combodatacol=\"cdNm\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"1\" text=\"bind:srvcNm\" textAlign=\"center\" suppress=\"2\" suppressalign=\"middle\"/><Cell col=\"2\" text=\"bind:srvcFldId\" combodataset=\"dsSrvcFldId\" combocodecol=\"cdId\" combodatacol=\"cdNm\" displaytype=\"combotext\" suppress=\"2\" suppressalign=\"middle\"/><Cell col=\"3\" text=\"bind:prcsTerm\" textAlign=\"center\" suppress=\"3\" suppressalign=\"middle\"/><Cell col=\"4\" text=\"bind:evlTrgtSe\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"dsSlmEvlTrgt\" combocodecol=\"cdId\" combodatacol=\"cdNm\" suppress=\"3\" suppressalign=\"middle\"/><Cell col=\"5\" text=\"bind:idctCnt\" textAlign=\"center\" suppress=\"3\" suppressalign=\"middle\"/><Cell col=\"6\" text=\"bind:taskNm\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.divForm.form.tabSlm.tpg02.addChild(obj.name, obj);

            obj = new Tabpage("tpg03",this.divForm.form.tabSlm);
            obj.set_text("관리지표");
            obj.set_enable("true");
            this.divForm.form.tabSlm.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","0","360","40",null,null,null,null,null,null,this.divForm.form.tabSlm.tpg03.form);
            obj.set_taborder("0");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_visible("false");
            obj._setContents("<Contents/>");
            this.divForm.form.tabSlm.tpg03.addChild(obj.name, obj);

            obj = new Button("btnPop","767.00","0","74","34",null,null,null,null,null,null,this.divForm.form.tabSlm.tpg03.form);
            obj.set_taborder("1");
            obj.set_text("지표 관리");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.tabSlm.tpg03.addChild(obj.name, obj);

            obj = new Panel("Panel02","470.00","0","74","40",null,null,null,null,null,null,this.divForm.form.tabSlm.tpg03.form);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_flexcrossaxisalign("end");
            obj.set_fittocontents("none");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnPop\"/></Contents>");
            this.divForm.form.tabSlm.tpg03.addChild(obj.name, obj);

            obj = new Panel("PanelLabel","0","10","100.00%","40",null,null,null,null,null,null,this.divForm.form.tabSlm.tpg03.form);
            obj.set_taborder("3");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("50");
            obj.set_fittocontents("height");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02\"/></Contents>");
            this.divForm.form.tabSlm.tpg03.addChild(obj.name, obj);

            obj = new Grid("grpList","0","PanelLabel:10","100.00%",null,null,"10",null,null,null,null,this.divForm.form.tabSlm.tpg03.form);
            obj.set_taborder("4");
            obj.set_binddataset("dsIdctList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"40\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"서비스관점\"/><Cell col=\"1\" text=\"서비스목표\"/><Cell col=\"2\" text=\"관리지표\"/><Cell col=\"3\" text=\"평가대상\"/><Cell col=\"4\" text=\"측정방식\"/><Cell col=\"5\" text=\"표현방식\"/><Cell col=\"6\" colspan=\"2\" text=\"가중치\"/></Band><Band id=\"body\"><Cell text=\"bind:srvcViewNm\" edittype=\"none\" editmaxlength=\"33\"/><Cell col=\"1\" text=\"bind:srvcTrgtNm\" editmaxlength=\"33\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:mngIdctNm\" editmaxlength=\"33\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:evlTrgtSe\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsSlmEvlTrgt\" combocodecol=\"cdId\" combodatacol=\"cdNm\"/><Cell col=\"4\" text=\"bind:msrmtMtdExpln\" editmaxlength=\"33\" edittype=\"none\"/><Cell col=\"5\" text=\"bind:indctMtdSe\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsIndctMtdSe\" combocodecol=\"cdId\" combodatacol=\"cdNm\"/><Cell col=\"6\" text=\"bind:wgvl\" edittype=\"none\" editmaxlength=\"5\" textAlign=\"right\" border=\"0px none, 0px none, 1px solid #dddddd\"/><Cell col=\"7\" expr=\"indctMtdSe == &apos;R&apos; ? (wgvl != &apos;&apos; ? &apos;%&apos; : &apos;&apos;) : &apos;&apos;\"/></Band></Format></Formats>");
            this.divForm.form.tabSlm.tpg03.addChild(obj.name, obj);

            obj = new Tabpage("tpg04",this.divForm.form.tabSlm);
            obj.set_text("구간별 점수표");
            this.divForm.form.tabSlm.addChild(obj.name, obj);

            obj = new Static("staLabel01","0","0","180","40",null,null,null,null,null,null,this.divForm.form.tabSlm.tpg04.form);
            obj.set_taborder("0");
            obj.set_text("단축률 구간별 점수표ID");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.tabSlm.tpg04.addChild(obj.name, obj);

            obj = new Combo("cmbScrGroupId","130.00","0","360","40",null,null,null,null,null,null,this.divForm.form.tabSlm.tpg04.form);
            obj.set_taborder("1");
            obj.set_flexgrow("0");
            obj.set_innerdataset("dsScrGroup");
            obj.set_codecolumn("scrGroupId");
            obj.set_datacolumn("scrGroupId");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.tabSlm.tpg04.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","20","550","40",null,null,null,null,null,null,this.divForm.form.tabSlm.tpg04.form);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01\"/><PanelItem id=\"PanelItem03\" componentid=\"cmbScrGroupId\"/></Contents>");
            this.divForm.form.tabSlm.tpg04.addChild(obj.name, obj);

            obj = new Button("btnPop","687","0","166","34",null,null,null,null,null,null,this.divForm.form.tabSlm.tpg04.form);
            obj.set_taborder("3");
            obj.set_text("단축률 구간별 점수표 관리");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_Small");
            this.divForm.form.tabSlm.tpg04.addChild(obj.name, obj);

            obj = new Panel("Panel02","470.00","0","166","40",null,null,null,null,null,null,this.divForm.form.tabSlm.tpg04.form);
            obj.set_taborder("4");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_flexcrossaxisalign("end");
            obj.set_fittocontents("none");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnPop\"/></Contents>");
            this.divForm.form.tabSlm.tpg04.addChild(obj.name, obj);

            obj = new Panel("PanelLabel","0","10","100.00%","40",null,null,null,null,null,null,this.divForm.form.tabSlm.tpg04.form);
            obj.set_taborder("5");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("50");
            obj.set_fittocontents("height");
            obj.set_flexmainaxisalign("spacebetween");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02\"/></Contents>");
            this.divForm.form.tabSlm.tpg04.addChild(obj.name, obj);

            obj = new Grid("grpList","0","PanelLabel:10","100.00%",null,null,"0",null,null,null,null,this.divForm.form.tabSlm.tpg04.form);
            obj.set_taborder("6");
            obj.set_binddataset("dsScrList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"단축률하한(이상)\"/><Cell col=\"1\" text=\"단축률상한(미만)\"/><Cell col=\"2\" text=\"점수\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:sortnMinVl\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:sortnMaxVl\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:scrVl\" cssclass=\"CellEnd\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divForm.form.tabSlm.tpg04.addChild(obj.name, obj);

            obj = new Button("Button00_00","10.00","10","165","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("6");
            obj.set_text("SLM 설정정보 저장");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_No");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00","564","862","197","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_text("신규 SLM 카탈로그 생성");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_No");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("div00","203","186","100.00%","35",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("8");
            obj.set_text("div00");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("Static06_01","0","0","164","34",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("0");
            obj.set_text("SLM 기본정보");
            obj.set_cssclass("sta_WF_Txt60018");
            obj.set_fittocontents("width");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Button("btnNew",null,"0","158","34","0",null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("신규 SLM 카탈로그 생성");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Small");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Div("divSch00","155.00","148","100.00%","68",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("PanelLabel","20.00","14","100%","40",null,null,null,null,null,null,this.divForm.form.divSch00.form);
            obj.set_taborder("0");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("30");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel02\"/><PanelItem id=\"PanelItem06\" componentid=\"Panel03\"/></Contents>");
            this.divForm.form.divSch00.addChild(obj.name, obj);

            obj = new Panel("Panel02","1694.00","398","420","40",null,null,null,null,null,null,this.divForm.form.divSch00.form);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02\"/><PanelItem id=\"PanelItem02\" componentid=\"PanelCal\"/></Contents>");
            this.divForm.form.divSch00.addChild(obj.name, obj);

            obj = new Static("staLabel02","0","0","110","40",null,null,null,null,null,null,this.divForm.form.divSch00.form);
            obj.set_taborder("1");
            obj.set_text("최근 평가 시행일");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch00.addChild(obj.name, obj);

            obj = new Panel("PanelCal","285","24","100%","40",null,null,null,null,null,null,this.divForm.form.divSch00.form);
            obj.set_taborder("6");
            obj.set_flexgrow("2");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"DivCal\"/></Contents>");
            this.divForm.form.divSch00.addChild(obj.name, obj);

            obj = new Static("staLabel03","0","0","170","40",null,null,null,null,null,null,this.divForm.form.divSch00.form);
            obj.set_taborder("3");
            obj.set_text("만족도 미평가 시 기본 점수");
            obj.set_cssclass("sta_WF_SchLabel_E");
            obj.set_flexshrink("0");
            this.divForm.form.divSch00.addChild(obj.name, obj);

            obj = new Panel("Panel03","1694.00","398","420","40",null,null,null,null,null,null,this.divForm.form.divSch00.form);
            obj.set_taborder("4");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03\"/><PanelItem id=\"PanelItem01\" componentid=\"DivCal03\"/></Contents>");
            this.divForm.form.divSch00.addChild(obj.name, obj);

            obj = new Panel("Panel01","1694.00","398","420","40",null,null,null,null,null,null,this.divForm.form.divSch00.form);
            obj.set_taborder("8");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel01\"/><PanelItem id=\"PanelItem01\" componentid=\"PanelCal00\"/></Contents>");
            this.divForm.form.divSch00.addChild(obj.name, obj);

            obj = new Div("DivCal","221.00","35","330","40",null,null,null,null,null,null,this.divForm.form.divSch00.form);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_flexgrow("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divSch00.addChild(obj.name, obj);

            obj = new Calendar("Calendar02","173","0","150","40",null,null,null,null,null,null,this.divForm.form.divSch00.form.DivCal.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("true");
            this.divForm.form.divSch00.form.DivCal.addChild(obj.name, obj);

            obj = new Static("staLabel01","0","0","110","40",null,null,null,null,null,null,this.divForm.form.divSch00.form);
            obj.set_taborder("7");
            obj.set_text("평가 기간");
            obj.set_cssclass("sta_WF_SchLabel_E");
            obj.set_flexshrink("0");
            this.divForm.form.divSch00.addChild(obj.name, obj);

            obj = new Div("DivCal00","221.00","35","100%","40",null,null,null,null,null,null,this.divForm.form.divSch00.form);
            obj.set_taborder("9");
            obj.set_text("Div00");
            obj.set_flexgrow("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divSch00.addChild(obj.name, obj);

            obj = new Calendar("calEvlBgngYmd","0","0","150","40",null,null,null,null,null,null,this.divForm.form.divSch00.form.DivCal00.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.divSch00.form.DivCal00.addChild(obj.name, obj);

            obj = new Static("StaticDash","calEvlBgngYmd:10","0","10","40",null,null,null,null,null,null,this.divForm.form.divSch00.form.DivCal00.form);
            obj.set_taborder("1");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_Dash");
            obj.set_flexshrink("0");
            this.divForm.form.divSch00.form.DivCal00.addChild(obj.name, obj);

            obj = new Calendar("calEvlEndYmd","StaticDash:10","0","150","40",null,null,null,null,null,null,this.divForm.form.divSch00.form.DivCal00.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.divSch00.form.DivCal00.addChild(obj.name, obj);

            obj = new Panel("PanelCal00","285","24","330","40",null,null,null,null,null,null,this.divForm.form.divSch00.form);
            obj.set_taborder("10");
            obj.set_flexgrow("0");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"DivCal00\"/></Contents>");
            this.divForm.form.divSch00.addChild(obj.name, obj);

            obj = new Div("DivCal03","221.00","35","1208","40",null,null,null,null,null,null,this.divForm.form.divSch00.form);
            obj.set_taborder("11");
            obj.set_text("Div00");
            obj.set_flexgrow("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divSch00.addChild(obj.name, obj);

            obj = new Combo("cmbNotEvlScrCrtr","788.00","145","100%","40",null,null,null,null,null,null,this.divForm.form.divSch00.form.DivCal03.form);
            obj.set_taborder("0");
            obj.set_flexgrow("1");
            obj.set_innerdataset("dsNotEvlScrCrtr");
            obj.set_datacolumn("cdNm");
            obj.set_codecolumn("cdId");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("0");
            this.divForm.form.divSch00.form.DivCal03.addChild(obj.name, obj);

            obj = new Edit("edtNotEvlScrVl","900.00","127","100%","40",null,null,null,null,null,null,this.divForm.form.divSch00.form.DivCal03.form);
            obj.set_taborder("1");
            obj.set_flexgrow("1");
            obj.set_readonly("true");
            this.divForm.form.divSch00.form.DivCal03.addChild(obj.name, obj);

            obj = new Div("div01","203","186","100.00%","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("7");
            obj.set_text("div00");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"0","130","34","0",null,null,null,null,null,this.divForm.form.div01.form);
            obj.set_taborder("1");
            obj.set_text("SLM 설정정보 저장");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Small");
            this.divForm.form.div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","0","800","100.00%","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("10");
            obj.set_flexmainaxisalign("center");
            obj.set_visible("false");
            obj.set_flexcrossaxisalign("start");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.divSch.form
            obj = new Layout("default","",0,0,this.divForm.form.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.PanelLabel.set_taborder("0");
                p.PanelLabel.set_verticalgap("8");
                p.PanelLabel.set_flexwrap("wrap");
                p.PanelLabel.set_spacing("0px 0px 10px 0px");
                p.PanelLabel.set_type("horizontal");
                p.PanelLabel.set_flexcrossaxisalign("start");
                p.PanelLabel.set_horizontalgap("50");
                p.PanelLabel.set_fittocontents("height");
                p.PanelLabel.set_maxheight("");
                p.PanelLabel.move("20.00","14","100%","40",null,null);

                p.Panel01.set_taborder("2");
                p.Panel01.set_type("horizontal");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_flexgrow("1");
                p.Panel01.set_maxheight("");
                p.Panel01.set_minwidth("");
                p.Panel01.move("1694.00","398","420","40",null,null);

                p.staLabel01.set_taborder("1");
                p.staLabel01.set_text("년도");
                p.staLabel01.set_cssclass("sta_WF_SchLabel");
                p.staLabel01.set_flexshrink("0");
                p.staLabel01.set_maxwidth("");
                p.staLabel01.move("0","0","110","40",null,null);

                p.staLabel02.set_taborder("3");
                p.staLabel02.set_text("치수");
                p.staLabel02.set_cssclass("sta_WF_SchLabel");
                p.staLabel02.set_flexshrink("0");
                p.staLabel02.set_maxwidth("");
                p.staLabel02.move("0","0","110","40",null,null);

                p.Panel02.set_taborder("4");
                p.Panel02.set_type("horizontal");
                p.Panel02.set_horizontalgap("10");
                p.Panel02.set_flexgrow("1");
                p.Panel02.set_minwidth("");
                p.Panel02.move("1694.00","398","420","40",null,null);

                p.cmbEvlYr.set_taborder("5");
                p.cmbEvlYr.set_flexgrow("1");
                p.cmbEvlYr.set_innerdataset("dsEvlYr");
                p.cmbEvlYr.set_codecolumn("cdId");
                p.cmbEvlYr.set_datacolumn("cdNm");
                p.cmbEvlYr.set_text("전체");
                p.cmbEvlYr.set_value("");
                p.cmbEvlYr.set_index("-1");
                p.cmbEvlYr.move("788.00","145","100%","40",null,null);

                p.cmbEvlNotn.set_taborder("6");
                p.cmbEvlNotn.set_flexgrow("1");
                p.cmbEvlNotn.set_innerdataset("dsEvlNotn");
                p.cmbEvlNotn.set_codecolumn("cdId");
                p.cmbEvlNotn.set_datacolumn("cdNm");
                p.cmbEvlNotn.set_text("전체");
                p.cmbEvlNotn.set_value("");
                p.cmbEvlNotn.set_index("-1");
                p.cmbEvlNotn.move("788.00","145","100%","40",null,null);

                p.pan01.set_taborder("7");
                p.pan01.set_flexgrow("1");
                p.pan01.move("710","135","420","0",null,null);

                p.Panel02_00.set_taborder("8");
                p.Panel02_00.set_type("horizontal");
                p.Panel02_00.set_horizontalgap("10");
                p.Panel02_00.set_flexgrow("1");
                p.Panel02_00.set_minwidth("");
                p.Panel02_00.move("805","25","420","0",null,null);
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
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            this.divForm.form.divSch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.tabSlm.tpg01.form
            obj = new Layout("default","",0,0,this.divForm.form.tabSlm.tpg01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.PanelLabel.set_taborder("0");
                p.PanelLabel.set_verticalgap("8");
                p.PanelLabel.set_flexwrap("wrap");
                p.PanelLabel.set_type("horizontal");
                p.PanelLabel.set_flexcrossaxisalign("start");
                p.PanelLabel.set_horizontalgap("50");
                p.PanelLabel.set_fittocontents("height");
                p.PanelLabel.set_flexmainaxisalign("spacebetween");
                p.PanelLabel.set_maxheight("");
                p.PanelLabel.move("0","10","100.00%","40",null,null);

                p.grpList.set_taborder("1");
                p.grpList.set_binddataset("dsOgnzList");
                p.grpList.set_autofittype("col");
                p.grpList.set_autoenter("select");
                p.grpList.move("0","PanelLabel:10","100.00%",null,null,"0");

                p.staLabel01.set_taborder("2");
                p.staLabel01.set_text("평가대상 조직표 ID");
                p.staLabel01.set_cssclass("sta_WF_SchLabel");
                p.staLabel01.set_flexshrink("0");
                p.staLabel01.set_maxwidth("");
                p.staLabel01.move("10","10","180","40",null,null);

                p.cmbOgnzGroup.set_taborder("3");
                p.cmbOgnzGroup.set_flexgrow("0");
                p.cmbOgnzGroup.set_innerdataset("dsOgnzGroup");
                p.cmbOgnzGroup.set_codecolumn("ognzGroupId");
                p.cmbOgnzGroup.set_datacolumn("ognzGroupId");
                p.cmbOgnzGroup.set_text("전체");
                p.cmbOgnzGroup.set_value("");
                p.cmbOgnzGroup.set_index("-1");
                p.cmbOgnzGroup.move("140.00","10","360","40",null,null);

                p.Panel01.set_taborder("4");
                p.Panel01.set_type("horizontal");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_flexgrow("1");
                p.Panel01.set_fittocontents("none");
                p.Panel01.set_maxheight("");
                p.Panel01.set_minwidth("");
                p.Panel01.move("10","10","480","40",null,null);

                p.Panel02.set_taborder("5");
                p.Panel02.set_type("horizontal");
                p.Panel02.set_horizontalgap("10");
                p.Panel02.set_flexgrow("1");
                p.Panel02.set_flexmainaxisalign("end");
                p.Panel02.set_flexcrossaxisalign("end");
                p.Panel02.set_maxheight("");
                p.Panel02.set_minwidth("");
                p.Panel02.move("830","23","138","40",null,null);

                p.btnPop.set_taborder("6");
                p.btnPop.set_text("평가대상 조직표 관리");
                p.btnPop.set_fittocontents("width");
                p.btnPop.set_visible("true");
                p.btnPop.set_cssclass("btn_WF_Small");
                p.btnPop.move("775.00","0","138","34",null,null);
            	}
            );
            this.divForm.form.tabSlm.tpg01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.tabSlm.tpg01.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.tabSlm.tpg01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grpList.set_autofittype("none");
            	}
            );
            this.divForm.form.tabSlm.tpg01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.tabSlm.tpg02.form
            obj = new Layout("default","",0,0,this.divForm.form.tabSlm.tpg02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel01.set_taborder("0");
                p.staLabel01.set_text("평가대상 서비스 그룹");
                p.staLabel01.set_cssclass("sta_WF_SchLabel");
                p.staLabel01.set_flexshrink("0");
                p.staLabel01.set_maxwidth("");
                p.staLabel01.move("0","0","180","40",null,null);

                p.cmbSrvcGroupId.set_taborder("1");
                p.cmbSrvcGroupId.set_flexgrow("0");
                p.cmbSrvcGroupId.set_innerdataset("dsSrvcGroup");
                p.cmbSrvcGroupId.set_codecolumn("srvcGroupId");
                p.cmbSrvcGroupId.set_text("전체");
                p.cmbSrvcGroupId.set_value("");
                p.cmbSrvcGroupId.set_index("-1");
                p.cmbSrvcGroupId.move("130.00","0","360","40",null,null);

                p.Panel01.set_taborder("2");
                p.Panel01.set_type("horizontal");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_flexgrow("1");
                p.Panel01.set_maxheight("");
                p.Panel01.set_minwidth("");
                p.Panel01.move("0","20","550","40",null,null);

                p.btnPop01.set_taborder("3");
                p.btnPop01.set_text("평가대상 서비스그룹 관리");
                p.btnPop01.set_fittocontents("width");
                p.btnPop01.set_cssclass("btn_WF_Small");
                p.btnPop01.move("599.00","0","162","34",null,null);

                p.btnPop02.set_taborder("4");
                p.btnPop02.set_text("서비스별 지표 연결 관리");
                p.btnPop02.set_fittocontents("width");
                p.btnPop02.set_visible("true");
                p.btnPop02.set_cssclass("btn_WF_Small");
                p.btnPop02.move("775.00","0","154","34",null,null);

                p.Panel02.set_taborder("5");
                p.Panel02.set_type("horizontal");
                p.Panel02.set_horizontalgap("10");
                p.Panel02.set_flexgrow("1");
                p.Panel02.set_flexmainaxisalign("end");
                p.Panel02.set_fittocontents("none");
                p.Panel02.set_flexcrossaxisalign("end");
                p.Panel02.set_maxheight("");
                p.Panel02.set_minwidth("");
                p.Panel02.move("470.00","0","326","40",null,null);

                p.PanelLabel.set_taborder("6");
                p.PanelLabel.set_verticalgap("8");
                p.PanelLabel.set_flexwrap("wrap");
                p.PanelLabel.set_type("horizontal");
                p.PanelLabel.set_flexcrossaxisalign("start");
                p.PanelLabel.set_horizontalgap("50");
                p.PanelLabel.set_fittocontents("height");
                p.PanelLabel.set_flexmainaxisalign("spacebetween");
                p.PanelLabel.set_maxheight("");
                p.PanelLabel.move("0","10","100.00%","40",null,null);

                p.grpList.set_taborder("7");
                p.grpList.set_binddataset("dsSrvcList");
                p.grpList.set_autofittype("col");
                p.grpList.move("0","PanelLabel:10","100%",null,null,"0");
            	}
            );
            this.divForm.form.tabSlm.tpg02.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.tabSlm.tpg02.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.tabSlm.tpg02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grpList.set_autofittype("none");
            	}
            );
            this.divForm.form.tabSlm.tpg02.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.tabSlm.tpg03.form
            obj = new Layout("default","",0,0,this.divForm.form.tabSlm.tpg03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel01.set_taborder("0");
                p.Panel01.set_type("horizontal");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_flexgrow("1");
                p.Panel01.set_visible("false");
                p.Panel01.set_maxheight("");
                p.Panel01.set_minwidth("");
                p.Panel01.move("0","0","360","40",null,null);

                p.btnPop.set_taborder("1");
                p.btnPop.set_text("지표 관리");
                p.btnPop.set_visible("true");
                p.btnPop.set_cssclass("btn_WF_Small");
                p.btnPop.set_fittocontents("width");
                p.btnPop.move("767.00","0","74","34",null,null);

                p.Panel02.set_taborder("2");
                p.Panel02.set_type("horizontal");
                p.Panel02.set_horizontalgap("10");
                p.Panel02.set_flexgrow("1");
                p.Panel02.set_flexmainaxisalign("end");
                p.Panel02.set_flexcrossaxisalign("end");
                p.Panel02.set_fittocontents("none");
                p.Panel02.set_maxheight("");
                p.Panel02.set_minwidth("");
                p.Panel02.move("470.00","0","74","40",null,null);

                p.PanelLabel.set_taborder("3");
                p.PanelLabel.set_verticalgap("8");
                p.PanelLabel.set_flexwrap("wrap");
                p.PanelLabel.set_type("horizontal");
                p.PanelLabel.set_flexcrossaxisalign("start");
                p.PanelLabel.set_horizontalgap("50");
                p.PanelLabel.set_fittocontents("height");
                p.PanelLabel.set_flexmainaxisalign("end");
                p.PanelLabel.set_maxheight("");
                p.PanelLabel.move("0","10","100.00%","40",null,null);

                p.grpList.set_taborder("4");
                p.grpList.set_binddataset("dsIdctList");
                p.grpList.set_autofittype("col");
                p.grpList.move("0","PanelLabel:10","100.00%",null,null,"10");
            	}
            );
            this.divForm.form.tabSlm.tpg03.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.tabSlm.tpg03.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.tabSlm.tpg03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grpList.set_autofittype("none");
            	}
            );
            this.divForm.form.tabSlm.tpg03.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.tabSlm.tpg04.form
            obj = new Layout("default","",0,0,this.divForm.form.tabSlm.tpg04.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel01.set_taborder("0");
                p.staLabel01.set_text("단축률 구간별 점수표ID");
                p.staLabel01.set_cssclass("sta_WF_SchLabel");
                p.staLabel01.set_flexshrink("0");
                p.staLabel01.set_maxwidth("");
                p.staLabel01.move("0","0","180","40",null,null);

                p.cmbScrGroupId.set_taborder("1");
                p.cmbScrGroupId.set_flexgrow("0");
                p.cmbScrGroupId.set_innerdataset("dsScrGroup");
                p.cmbScrGroupId.set_codecolumn("scrGroupId");
                p.cmbScrGroupId.set_datacolumn("scrGroupId");
                p.cmbScrGroupId.set_text("전체");
                p.cmbScrGroupId.set_value("");
                p.cmbScrGroupId.set_index("-1");
                p.cmbScrGroupId.move("130.00","0","360","40",null,null);

                p.Panel01.set_taborder("2");
                p.Panel01.set_type("horizontal");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_flexgrow("1");
                p.Panel01.set_maxheight("");
                p.Panel01.set_minwidth("");
                p.Panel01.move("0","20","550","40",null,null);

                p.btnPop.set_taborder("3");
                p.btnPop.set_text("단축률 구간별 점수표 관리");
                p.btnPop.set_fittocontents("width");
                p.btnPop.set_visible("true");
                p.btnPop.set_cssclass("btn_WF_Small");
                p.btnPop.move("687","0","166","34",null,null);

                p.Panel02.set_taborder("4");
                p.Panel02.set_type("horizontal");
                p.Panel02.set_horizontalgap("10");
                p.Panel02.set_flexgrow("1");
                p.Panel02.set_flexmainaxisalign("end");
                p.Panel02.set_flexcrossaxisalign("end");
                p.Panel02.set_fittocontents("none");
                p.Panel02.set_maxheight("");
                p.Panel02.set_minwidth("");
                p.Panel02.move("470.00","0","166","40",null,null);

                p.PanelLabel.set_taborder("5");
                p.PanelLabel.set_verticalgap("8");
                p.PanelLabel.set_flexwrap("wrap");
                p.PanelLabel.set_type("horizontal");
                p.PanelLabel.set_flexcrossaxisalign("start");
                p.PanelLabel.set_horizontalgap("50");
                p.PanelLabel.set_fittocontents("height");
                p.PanelLabel.set_flexmainaxisalign("spacebetween");
                p.PanelLabel.set_maxheight("");
                p.PanelLabel.move("0","10","100.00%","40",null,null);

                p.grpList.set_taborder("6");
                p.grpList.set_binddataset("dsScrList");
                p.grpList.set_autofittype("col");
                p.grpList.move("0","PanelLabel:10","100.00%",null,null,"0");
            	}
            );
            this.divForm.form.tabSlm.tpg04.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.tabSlm.tpg04.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.tabSlm.tpg04.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grpList.set_autofittype("col");
            	}
            );
            this.divForm.form.tabSlm.tpg04.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.div00.form
            obj = new Layout("default","",0,0,this.divForm.form.div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static06_01.set_taborder("0");
                p.Static06_01.set_text("SLM 기본정보");
                p.Static06_01.set_cssclass("sta_WF_Txt60018");
                p.Static06_01.set_fittocontents("width");
                p.Static06_01.move("0","0","164","34",null,null);

                p.btnNew.set_taborder("1");
                p.btnNew.set_text("신규 SLM 카탈로그 생성");
                p.btnNew.set_visible("true");
                p.btnNew.set_fittocontents("width");
                p.btnNew.set_cssclass("btn_WF_Small");
                p.btnNew.move(null,"0","158","34","0",null);
            	}
            );
            obj.set_type("default");
            this.divForm.form.div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.div00.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("default");
            this.divForm.form.div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divSch00.form.DivCal.form
            obj = new Layout("default","",0,0,this.divForm.form.divSch00.form.DivCal.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Calendar02.set_taborder("1");
                p.Calendar02.set_dateformat("yyyy-MM-dd");
                p.Calendar02.set_readonly("true");
                p.Calendar02.move("173","0","150","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divForm.form.divSch00.form.DivCal.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divSch00.form.DivCal.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divSch00.form.DivCal.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divForm.form.divSch00.form.DivCal.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divSch00.form.DivCal00.form
            obj = new Layout("default","",0,0,this.divForm.form.divSch00.form.DivCal00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.calEvlBgngYmd.set_taborder("0");
                p.calEvlBgngYmd.set_dateformat("yyyy-MM-dd");
                p.calEvlBgngYmd.move("0","0","150","40",null,null);

                p.StaticDash.set_taborder("1");
                p.StaticDash.set_text("~");
                p.StaticDash.set_cssclass("sta_WF_Dash");
                p.StaticDash.set_flexshrink("0");
                p.StaticDash.move("calEvlBgngYmd:10","0","10","40",null,null);

                p.calEvlEndYmd.set_taborder("2");
                p.calEvlEndYmd.set_dateformat("yyyy-MM-dd");
                p.calEvlEndYmd.move("StaticDash:10","0","150","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("5");
            this.divForm.form.divSch00.form.DivCal00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divSch00.form.DivCal00.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divSch00.form.DivCal00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("5");
            this.divForm.form.divSch00.form.DivCal00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divSch00.form.DivCal03.form
            obj = new Layout("default","",0,0,this.divForm.form.divSch00.form.DivCal03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.cmbNotEvlScrCrtr.set_taborder("0");
                p.cmbNotEvlScrCrtr.set_flexgrow("1");
                p.cmbNotEvlScrCrtr.set_innerdataset("dsNotEvlScrCrtr");
                p.cmbNotEvlScrCrtr.set_datacolumn("cdNm");
                p.cmbNotEvlScrCrtr.set_codecolumn("cdId");
                p.cmbNotEvlScrCrtr.set_text("선택");
                p.cmbNotEvlScrCrtr.set_value("");
                p.cmbNotEvlScrCrtr.set_index("0");
                p.cmbNotEvlScrCrtr.move("788.00","145","100%","40",null,null);

                p.edtNotEvlScrVl.set_taborder("1");
                p.edtNotEvlScrVl.set_flexgrow("1");
                p.edtNotEvlScrVl.set_readonly("true");
                p.edtNotEvlScrVl.move("900.00","127","100%","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divForm.form.divSch00.form.DivCal03.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divSch00.form.DivCal03.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divSch00.form.DivCal03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divForm.form.divSch00.form.DivCal03.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divSch00.form
            obj = new Layout("default","",0,0,this.divForm.form.divSch00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.PanelLabel.set_taborder("0");
                p.PanelLabel.set_verticalgap("8");
                p.PanelLabel.set_flexwrap("wrap");
                p.PanelLabel.set_spacing("0px 0px 10px 0px");
                p.PanelLabel.set_type("horizontal");
                p.PanelLabel.set_flexcrossaxisalign("start");
                p.PanelLabel.set_horizontalgap("30");
                p.PanelLabel.set_fittocontents("height");
                p.PanelLabel.set_maxheight("");
                p.PanelLabel.move("20.00","14","100%","40",null,null);

                p.Panel02.set_taborder("2");
                p.Panel02.set_type("horizontal");
                p.Panel02.set_horizontalgap("10");
                p.Panel02.set_flexgrow("1");
                p.Panel02.set_fittocontents("height");
                p.Panel02.set_maxheight("");
                p.Panel02.set_minwidth("");
                p.Panel02.move("1694.00","398","420","40",null,null);

                p.staLabel02.set_taborder("1");
                p.staLabel02.set_text("최근 평가 시행일");
                p.staLabel02.set_cssclass("sta_WF_SchLabel");
                p.staLabel02.set_flexshrink("0");
                p.staLabel02.set_maxwidth("");
                p.staLabel02.move("0","0","110","40",null,null);

                p.PanelCal.set_taborder("6");
                p.PanelCal.set_flexgrow("2");
                p.PanelCal.set_horizontalgap("10");
                p.PanelCal.set_flexwrap("wrap");
                p.PanelCal.set_verticalgap("8");
                p.PanelCal.set_fittocontents("height");
                p.PanelCal.move("285","24","100%","40",null,null);

                p.staLabel03.set_taborder("3");
                p.staLabel03.set_text("만족도 미평가 시 기본 점수");
                p.staLabel03.set_cssclass("sta_WF_SchLabel_E");
                p.staLabel03.set_flexshrink("0");
                p.staLabel03.set_maxwidth("");
                p.staLabel03.move("0","0","170","40",null,null);

                p.Panel03.set_taborder("4");
                p.Panel03.set_type("horizontal");
                p.Panel03.set_horizontalgap("10");
                p.Panel03.set_fittocontents("height");
                p.Panel03.set_flexgrow("1");
                p.Panel03.set_minwidth("");
                p.Panel03.move("1694.00","398","420","40",null,null);

                p.Panel01.set_taborder("8");
                p.Panel01.set_type("horizontal");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_flexgrow("1");
                p.Panel01.set_minwidth("");
                p.Panel01.move("1694.00","398","420","40",null,null);

                p.DivCal.set_taborder("5");
                p.DivCal.set_text("Div00");
                p.DivCal.set_flexgrow("1");
                p.DivCal.set_formscrollbartype("none none");
                p.DivCal.set_formscrolltype("none");
                p.DivCal.move("221.00","35","330","40",null,null);

                p.staLabel01.set_taborder("7");
                p.staLabel01.set_text("평가 기간");
                p.staLabel01.set_cssclass("sta_WF_SchLabel_E");
                p.staLabel01.set_flexshrink("0");
                p.staLabel01.set_maxwidth("");
                p.staLabel01.move("0","0","110","40",null,null);

                p.DivCal00.set_taborder("9");
                p.DivCal00.set_text("Div00");
                p.DivCal00.set_flexgrow("1");
                p.DivCal00.set_formscrollbartype("none none");
                p.DivCal00.set_formscrolltype("none");
                p.DivCal00.move("221.00","35","100%","40",null,null);

                p.PanelCal00.set_taborder("10");
                p.PanelCal00.set_flexgrow("0");
                p.PanelCal00.set_horizontalgap("10");
                p.PanelCal00.set_flexwrap("wrap");
                p.PanelCal00.set_verticalgap("8");
                p.PanelCal00.set_fittocontents("height");
                p.PanelCal00.move("285","24","330","40",null,null);

                p.DivCal03.set_taborder("11");
                p.DivCal03.set_text("Div00");
                p.DivCal03.set_flexgrow("1");
                p.DivCal03.set_formscrollbartype("none none");
                p.DivCal03.set_formscrolltype("none");
                p.DivCal03.move("221.00","35","1208","40",null,null);
            	}
            );
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            this.divForm.form.divSch00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divSch00.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divSch00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel01.set_flexwrap("wrap");
            	}
            );
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            this.divForm.form.divSch00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.div01.form
            obj = new Layout("default","",0,0,this.divForm.form.div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnSave.set_taborder("1");
                p.btnSave.set_text("SLM 설정정보 저장");
                p.btnSave.set_visible("true");
                p.btnSave.set_fittocontents("width");
                p.btnSave.set_cssclass("btn_WF_Small");
                p.btnSave.move(null,"0","130","34","0",null);
            	}
            );
            obj.set_type("default");
            this.divForm.form.div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.div01.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("default");
            this.divForm.form.div01.form.addLayout(obj.name, obj);
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
                p.divSch.move("0","0","100.00%","73",null,null);

                p.Panel00.set_taborder("1");
                p.Panel00.set_type("vertical");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_verticalgap("10");
                p.Panel00.move("0","divSch:20","100.00%","157",null,null);

                p.tabSlm.set_taborder("2");
                p.tabSlm.set_tabindex("0");
                p.tabSlm.set_flexgrow("1");
                p.tabSlm.move("0","Panel00:20","100.00%","60%",null,null);

                p.tabSlm.tpg01.set_text("평가대상 조직");
                p.tabSlm.tpg01.move("0","50","1420","718",null,null);

                p.tabSlm.tpg02.set_text("평가대상 서비스");
                p.tabSlm.tpg02.move("0","50","1420","718",null,null);

                p.tabSlm.tpg03.set_text("관리지표");
                p.tabSlm.tpg03.set_enable("true");
                p.tabSlm.tpg03.move("0","50","1420","718",null,null);

                p.tabSlm.tpg04.set_text("구간별 점수표");
                p.tabSlm.tpg04.move("0","50","1420","718",null,null);

                p.Button00_00.set_taborder("6");
                p.Button00_00.set_text("SLM 설정정보 저장");
                p.Button00_00.set_fittocontents("width");
                p.Button00_00.set_cssclass("btn_WF_No");
                p.Button00_00.move("10.00","10","165","40",null,null);

                p.Button00.set_taborder("5");
                p.Button00.set_text("신규 SLM 카탈로그 생성");
                p.Button00.set_fittocontents("width");
                p.Button00.set_cssclass("btn_WF_No");
                p.Button00.move("564","862","197","40",null,null);

                p.div00.set_taborder("8");
                p.div00.set_text("div00");
                p.div00.set_fittocontents("height");
                p.div00.move("203","186","100.00%","35",null,null);

                p.divSch00.set_taborder("4");
                p.divSch00.set_text("Div00");
                p.divSch00.set_cssclass("div_WF_SchBg");
                p.divSch00.set_formscrollbartype("none none");
                p.divSch00.set_formscrolltype("none");
                p.divSch00.set_fittocontents("height");
                p.divSch00.move("155.00","148","100.00%","68",null,null);

                p.div01.set_taborder("7");
                p.div01.set_text("div00");
                p.div01.set_fittocontents("height");
                p.div01.move("203","186","100.00%","34",null,null);

                p.Panel00_00.set_taborder("3");
                p.Panel00_00.set_horizontalgap("10");
                p.Panel00_00.set_flexmainaxisalign("center");
                p.Panel00_00.set_visible("false");
                p.Panel00_00.set_flexcrossaxisalign("start");
                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.move("0","800","100.00%","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_verticalgap("20");
            obj.set_flexwrap("wrap");
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
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_type("horizontal");
            obj.set_verticalgap("20");
            obj.set_flexwrap("wrap");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("SLM 카탈로그 관리");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.set_fittocontents("height");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","60",null,null,"60","0");

                p.divTitle.set_taborder("1");
                p.divTitle.set_text("");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.set_formscrolltype("none");
                p.divTitle.set_maxwidth("");
                p.divTitle.move("0","0",null,"50","60",null);
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
                p.divTitle.move("0","0",null,"50","0",null);

                p.divForm.move("0","60",null,null,"0","0");
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divTitle.form.divSch.form.divCal.form.calBgngYmd","value","dsSearch","sDate");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divTitle.form.divSch.form.divCal.form.calEndYmd","value","dsSearch","eDate");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divTitle.form.divSch.form.edtCtrtNo","value","dsSearch","ctrtNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divTitle.form.divSch.form.edtBrno","value","dsSearch","brno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divTitle.form.divSch.form.edtCtrtNm","value","dsSearch","ctrtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divTitle.form.divSch.form.edtCoNm","value","dsSearch","coNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divTitle.form.divSch.form.cmbMnlMngSeMnl","value","dsSearch","autoMnlRegSe");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divTitle.form.divGrd.form.staTotal01","text","dsPage","totalRecordCount");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.divSch.form.cmbEvlNotn","value","dsSearch","evlNotn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divForm.form.divSch.form.cmbEvlYr","value","dsSearch","evlYr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divForm.form.divSch00.form.DivCal00.form.calEvlBgngYmd","value","dsGet","evlBgngYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divForm.form.divSch00.form.DivCal00.form.calEvlEndYmd","value","dsGet","evlEndYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divForm.form.divSch00.form.DivCal.form.Calendar02","value","dsGet","frstRegDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divForm.form.divSch00.form.DivCal03.form.cmbNotEvlScrCrtr","value","dsGet","notEvlScrCrtr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divForm.form.divSch00.form.DivCal03.form.edtNotEvlScrVl","value","dsGet","notEvlScrVl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divForm.form.tabSlm.tpg01.form.cmbOgnzGroup","value","dsGet","ognzGroupId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divForm.form.tabSlm.tpg02.form.cmbSrvcGroupId","value","dsGet","srvcGroupId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divForm.form.tabSlm.tpg04.form.cmbScrGroupId","value","dsGet","scrGroupId");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.registerScript("COM021M01_ori250116.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	COM021M01.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2023/10/30
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2023/10/30			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();

        this.validateColumn = [];

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	this.param = this.gfnGetArgument("PARM");
        	if(this.gfnIsNull(this.param) != true) {
        		this.evlYr = this.param.evlYr;
        		this.evlNotn = this.param.evlNotn;
        	}

        	this.validateColumn.push({"title" : "평가시작일", "com": this.divForm.form.divSch00.form.DivCal00.form.calEvlBgngYmd});
        	this.validateColumn.push({"title" : "평가종료일", "com": this.divForm.form.divSch00.form.DivCal00.form.calEvlEndYmd});
        	this.validateColumn.push({"title" : "만족도 미평가 시 기본점수", "com": this.divForm.form.divSch00.form.DivCal03.form.cmbNotEvlScrCrtr});
        	//this.validateColumn.push({"title" : "만족도 미평가 시 기본점수", "com": this.divForm.form.divSch00.form.DivCal03.form.edtNotEvlScrVl});

        	this.fnInit();
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	this.getSearchTransaction();
        };

        //저장
        this.cfnSave = function ()
        {
        	if(this.gfnDsIsUpdated(this.dsGet) != true && this.gfnDsIsUpdated(this.dsOgnzList) != true) {
        		this.gfnAlertMsg("msg", "MSG_004");
        	} else {
        		if(this.gfnDsIsValidated(this.validateColumn)) {
        			if(this.dsGet.getColumn(0, "notEvlScrCrtr") == "VL" && this.gfnIsNull(this.dsGet.getColumn(0, "notEvlScrVl")) == true) {
        				this.gfnAlertMsg("validate", "CST_004", ["만족도 미평가 시 기본 점수"], "");
        				this.divForm.form.divSch00.form.DivCal03.form.edtNotEvlScrVl.setFocus();
        				return;
        			}

        			this.gfnConfirmMsg("save", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        		}
        	}
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
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        // 년도, 차수 조회
        this.getBaseSearchTransaction = function()
        {
        	var strSvcId    = "searchBase";
        	var strSvcUrl   = "slm/slmCatalogBaseInfoInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsEvlYr=dsEvlYr dsEvlNotn=dsEvlNotn dsEvlMax=dsEvlMax";
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

        // 차수 조회
        this.getEvlNotnSearchTransaction = function()
        {
        	var strSvcId    = "searchEvlNotn";
        	var strSvcUrl   = "slm/slmCatalogEvlNotnInfoInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsEvlNotn=dsEvlNotn";
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

        // 기본정보
        this.getSearchTransaction = function()
        {
        	var strSvcId    = "search";
        	var strSvcUrl   = "slm/slmCatalogInfoInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsGet=dsGet";
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
        this.getOgnzListSearchTransaction = function()
        {
        	var strSvcId    = "searchOgnz";
        	var strSvcUrl   = "slm/evlTrgtOgnzInfoInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsOgnzList=dsList";
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

        // 평가대상 서비스그룹 ID
        this.getSrvcGroupSearchTransaction = function()
        {
        	var strSvcId    = "searchSrvcGroupId";
        	var strSvcUrl   = "slm/slmEvlTrgtSrvcGroupIdInq.do";
        	var inData      = "";
        	var outData     = "dsSrvcGroup=dsList";
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

        // 평가대상 서비스그룹
        this.getSrvcListSearchTransaction = function()
        {
        	var strSvcId    = "searchSrvc";
        	var strSvcUrl   = "slm/evlTrgtSrvcInfoInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsSrvcList=dsList";
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

        // 서비스 분야 코드
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

        // 관리지표
        this.getIdctListSearchTransaction = function()
        {
        	var strSvcId    = "searchIdct";
        	var strSvcUrl   = "slm/slmIdctStngInfoInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsIdctList=dsList";
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

        // 단축률 구간별 점수표 ID
        this.getScrGroupSearchTransaction = function()
        {
        	var strSvcId    = "searchScrGroupId";
        	var strSvcUrl   = "slm/slmScrGroupIdInq.do";
        	var inData      = "";
        	var outData     = "dsScrGroup=dsList";
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

        // 상세현황
        this.getScrListSearchTransaction = function(scrGroupId)
        {
        	var strSvcId    = "searchScr";
        	var strSvcUrl   = "slm/slmScrTblInfoInq.do";
        	var inData      = "";
        	var outData     = "dsScrList=dsList";
        	var strArg      = "id=" + scrGroupId;
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
        	var strSvcUrl   = "slm/slmCatalogInfoStrg.do";
        	var inData      = "dsGet=dsGet:A dsOgnzList=dsOgnzList:A";
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
        		case "searchBase" :
        			this.divForm.form.divSch.form.cmbEvlYr.index = 0;

        			if(this.dsEvlMax.getRowCount() == 0) {
        				this.divForm.form.div01.form.btnSave.enable = false;
        				this.divForm.form.tabSlm.tpg01.form.btnPop.enable = false;
        			} else {
        				this.divForm.form.div01.form.btnSave.enable = true;
        				this.divForm.form.tabSlm.tpg01.form.btnPop.enable = true;
        			}

        			if(this.dsEvlNotn.getRowCount() > 0) {
        				this.divForm.form.divSch.form.cmbEvlNotn.index = 0;

        				if(this.gfnIsNull(this.evlYr) != true && this.gfnIsNull(this.evlNotn) != true) {
        					this.divForm.form.divSch.form.cmbEvlYr.value = this.evlYr;
        					this.divForm.form.divSch.form.cmbEvlNotn.value = this.evlNotn;
        				}

        				this.cfnSearch();
        			}
        			break;
        		case "searchEvlNotn" :
        			this.divForm.form.divSch.form.cmbEvlNotn.index = 0;
        			this.cfnSearch();
        			break;
        		case "search":
        			if(this.gfnIsNull(this.dsGet.getColumn(0, "frstRegDt")) != true) {
        				this.divForm.form.div01.form.btnSave.enable = false;
        				this.divForm.form.tabSlm.tpg01.form.cmbOgnzGroup.enable = false;
        				this.divForm.form.tabSlm.tpg01.form.grpList.enable = false;

        				this.divForm.form.tabSlm.tpg02.form.cmbSrvcGroupId.enable = false;

        				this.divForm.form.tabSlm.tpg04.form.cmbScrGroupId.enable = false;
        				this.divForm.form.tabSlm.tpg04.form.grpList.enable = false;
        			} else {
        				this.divForm.form.div01.form.btnSave.enable = true;
        				this.divForm.form.tabSlm.tpg01.form.cmbOgnzGroup.enable = true;
        				this.divForm.form.tabSlm.tpg01.form.grpList.enable = true;

        				this.divForm.form.tabSlm.tpg02.form.cmbSrvcGroupId.enable = true;

        				this.divForm.form.tabSlm.tpg04.form.cmbScrGroupId.enable = true;
        				this.divForm.form.tabSlm.tpg04.form.grpList.enable = true;
        			}

        			if(this.divForm.form.tabSlm.tabindex == 0) {
        				this.getOgnzGroupSearchTransaction();
        			} else if(this.divForm.form.tabSlm.tabindex == 1) {
        				this.getSrvcGroupSearchTransaction();
        			} else if(this.divForm.form.tabSlm.tabindex == 2) {
        				this.dsSearch.setColumn(0, "useYn", "Y");
        				this.getIdctListSearchTransaction();
        			} else if(this.divForm.form.tabSlm.tabindex == 3) {
        				this.getScrGroupSearchTransaction();
        			}
        			break;
        		case "searchOgnzGroup" :
        			if(this.dsOgnzGroup.getRowCount() > 0) {
        				if(this.gfnIsNull(this.dsGet.getColumn(0, "ognzGroupId")) != true) {
        					this.dsSearch.setColumn(0, "ognzGroupId", this.dsGet.getColumn(0, "ognzGroupId"));
        				} else {
        					this.divForm.form.tabSlm.tpg01.form.cmbOgnzGroup.index = 0;
        					this.dsSearch.setColumn(0, "ognzGroupId", this.divForm.form.tabSlm.tpg01.form.cmbOgnzGroup.value);
        				}

        				this.getOgnzListSearchTransaction();
        			}
        			break;
        		case "searchOgnz" :
        			break;
        		case "searchCode" :
        			this.dsSrvcKnd.filter("uprCd == ''");
        			this.dsTaskFldId.copyData(this.dsSrvcKnd, true);

        			this.dsSrvcKnd.filter("uprCd != ''");
        			this.dsSrvcFldId.copyData(this.dsSrvcKnd, true);
        			break;
        		case "searchSrvcGroupId" :
        			if(this.dsSrvcGroup.getRowCount() > 0) {
        				if(this.gfnIsNull(this.dsGet.getColumn(0, "srvcGroupId")) != true) {
        					this.dsSearch.setColumn(0, "srvcGroupId", this.dsGet.getColumn(0, "srvcGroupId"));
        				} else {
        					this.divForm.form.tabSlm.tpg02.form.cmbSrvcGroupId.index = 0;
        					this.dsSearch.setColumn(0, "srvcGroupId", this.divForm.form.tabSlm.tpg02.form.cmbSrvcGroupId.value);
        				}

        				this.getSrvcListSearchTransaction();
        			}
        			break;
        		case "searchSrvc" :
        			break;
        		case "searchIdct" :
        			break;
        		case "searchScrGroupId" :
        			if(this.dsScrGroup.getRowCount() > 0) {
        				this.getScrListSearchTransaction(this.divForm.form.tabSlm.tpg04.form.cmbScrGroupId.value);
        			}
        			break;
        		case "searchScr" :
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
        		this.cfnSearch();
        	}
        };

        this.fnPopupCallback = function(sPopupId, sRtn)
        {
        	if(sPopupId =="newSlmhPopup") {
        		if (this.gfnIsNull(sRtn)) return;
        		var objRtn = JSON.parse(sRtn);
        		if(objRtn.result == "Y") {
        			this.getBaseSearchTransaction();
        		}
        	}
        	else if(sPopupId =="ognzGroupPopup") {
        		if (this.gfnIsNull(sRtn)) return;
        		var objRtn = JSON.parse(sRtn);
        		if(objRtn.result == "Y") {
        			this.getOgnzGroupSearchTransaction();
        		}
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	this.gfnCmmCode("notEvlScrCrtr", "dsNotEvlScrCrtr", "NOT_EVL_SCR_CRTR", "S");
        	this.gfnCmmCode("slmCoSe", "dsSlmCoSe", "SLM_CO_SE", "S");
        	this.gfnCmmCode("slmEvlTrgt", "dsSlmEvlTrgt", "SLM_EVL_TRGT", "");
        	this.gfnCmmCode("indctMtdSe", "dsIndctMtdSe", "INDCT_MTD_SE", "");
        	this.divForm.form.divSch00.form.DivCal03.form.cmbNotEvlScrCrtr.index = 0;
        	this.getBaseSearchTransaction();
        	this.getComCodeSearchTransaction();
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // 신규생성 팝업
        this.divForm_div00_btnNew_onclick = function(obj,e)
        {
        	var sTitle = "신규 SLM 카탈로그 생성";
        	var objArg   = {};

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
         		//, width: 1221
         		//, height: 650			//width,height 지정하지 않음 popup form size적용
        		, autosize: true
        		, title: sTitle
        		, resize: false
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("newSlmhPopup", "work::COM/slm/COM021P01.xfdl", objArg, sPopupCallBack, objOption);
        };

        this.divForm_divSch00_DivCal03_cmbNotEvlScrCrtr_onitemchanged = function(obj,e)
        {
        	if(e.postvalue == "VL") {
        		this.divForm.form.divSch00.form.DivCal03.form.edtNotEvlScrVl.readonly = false;
        	} else {
        		this.dsGet.setColumn(0, "notEvlScrVl", "");
        		this.divForm.form.divSch00.form.DivCal03.form.edtNotEvlScrVl.readonly = true;
        	}
        };

        this.divForm_divSch_cmbEvlYr_onitemchanged = function(obj,e)
        {
        	if(this.gfnIsNull(e.postvalue) != true) {
        		this.getEvlNotnSearchTransaction();
        	}
        };

        this.divForm_divSch_cmbEvlNotn_onitemchanged = function(obj,e)
        {
        	if(this.gfnIsNull(e.postvalue) != true) {
        		this.cfnSearch();
        	}
        };

        this.divForm_tabSlm_onchanged = function(obj,e)
        {
        	if(e.postindex == 0) {
        		this.getOgnzGroupSearchTransaction();
        	}
        	else if(e.postindex == 1) {
        		this.getSrvcGroupSearchTransaction();
        	}
        	else if(e.postindex == 2) {
        		this.dsSearch.setColumn(0, "useYn", "Y");
        		this.getIdctListSearchTransaction();
        	}
        	else if(e.postindex == 3) {
        		this.getScrGroupSearchTransaction();
        	}
        };

        // 평가대상 조직 조회
        this.divForm_tabSlm_tpg01_cmbOgnzGroup_onitemchanged = function(obj,e)
        {
        	if(this.gfnIsNull(e.postvalue) != true) {
        		this.dsGet.setColumn(0, "ognzGroupId", e.postvalue);
        		this.dsSearch.setColumn(0, "ognzGroupId", e.postvalue);
        		this.getOgnzListSearchTransaction();
        	}
        };

        // 평가대상 서비스그룹 조회
        this.divForm_tabSlm_tpg02_cmbSrvcGroupId_onitemchanged = function(obj,e)
        {
        	if(this.gfnIsNull(e.postvalue) != true) {
        		this.dsGet.setColumn(0, "srvcGroupId", e.postvalue);
        		this.dsSearch.setColumn(0, "srvcGroupId", e.postvalue);
        		this.getSrvcListSearchTransaction();
        	}
        };

        // 평가대상 조직표 관리 팝업
        this.divForm_tabSlm_tpg01_btnPop_onclick = function(obj,e)
        {
        	var sTitle = "평가대상 조직표 관리";
        	var objArg   = { "ognzGroupId" : this.divForm.form.tabSlm.tpg01.form.cmbOgnzGroup.value // this.dsGet.getColumn(0, "ognzGroupId")
        	               , "evlYr" : this.dsEvlMax.getColumn(0, "evlYr")
        				   , "evlNotn" : this.dsEvlMax.getColumn(0, "evlNotn")
        				   };

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
        		//, width: 820
        		//, height: 600
        		, autosize: true
        		, title: sTitle
        		, resize: true
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("ognzGroupPopup", "work::COM/slm/COM021P02.xfdl", objArg, sPopupCallBack, objOption);
        };

        // 평가대상 서비스그룹 관리 팝업
        this.divForm_tabSlm_tpg02_btnPop01_onclick = function(obj,e)
        {
        	var sTitle = "평가대상 서비스그룹 관리";
        	var objArg   = { "srvcGroupId" : this.divForm.form.tabSlm.tpg02.form.cmbSrvcGroupId.value
        				   };

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
        		//, width: 820
        		//, height: 600
        		, autosize: true
        		, title: sTitle
        		, resize: true
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("srvcGroupPopup", "work::COM/slm/COM021P05.xfdl", objArg, sPopupCallBack, objOption);
        };

        // 서비스별 지표 연결 관리 팝업
        this.divForm_tabSlm_tpg02_btnPop02_onclick = function(obj,e)
        {
        	var sMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        	var sMenuUrl = 'work::COM/slm/COM021M06.xfdl';
        	var actNm = ' - 지표 연결 관리';
        	var objArg = {};
        	this.gfnPageOpen(sMenuId, sMenuUrl, actNm, objArg);
        };

        // 관리지표 관리 팝업
        this.divForm_tabSlm_tpg03_btnPop_onclick = function(obj,e)
        {
        	var sMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        	var sMenuUrl = 'work::COM/slm/COM021M04.xfdl';
        	var actNm = ' - 지표관리';
        	var objArg = {};
        	this.gfnPageOpen(sMenuId, sMenuUrl, actNm, objArg);
        };

        // 점수표 조회
        this.divForm_tabSlm_tpg04_cmbScrGroupId_onitemchanged = function(obj,e)
        {
        	if(this.gfnIsNull(e.postvalue) != true) {
        		this.getScrListSearchTransaction(e.postvalue);
        	}
        };

        // 단축률구간별 점수표 관리 팝업
        this.divForm_tabSlm_tpg04_btnPop_onclick = function(obj,e)
        {
        	var sTitle = "단축률구간별 점수표 관리";
        	var objArg   = { "scrGroupId" : this.divForm.form.tabSlm.tpg04.form.cmbScrGroupId.value
        				   };

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
        		//, width: 820
        		//, height: 600
        		, autosize: true
        		, title: sTitle
        		, resize: true
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("scrGroupPopup", "work::COM/slm/COM021P07.xfdl", objArg, sPopupCallBack, objOption);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divSch.form.cmbEvlYr.addEventHandler("onitemchanged",this.divForm_divSch_cmbEvlYr_onitemchanged,this);
            this.divForm.form.divSch.form.cmbEvlNotn.addEventHandler("onitemchanged",this.divForm_divSch_cmbEvlNotn_onitemchanged,this);
            this.divForm.form.tabSlm.addEventHandler("onchanged",this.divForm_tabSlm_onchanged,this);
            this.divForm.form.tabSlm.tpg01.form.cmbOgnzGroup.addEventHandler("onitemchanged",this.divForm_tabSlm_tpg01_cmbOgnzGroup_onitemchanged,this);
            this.divForm.form.tabSlm.tpg01.form.btnPop.addEventHandler("onclick",this.divForm_tabSlm_tpg01_btnPop_onclick,this);
            this.divForm.form.tabSlm.tpg02.form.cmbSrvcGroupId.addEventHandler("onitemchanged",this.divForm_tabSlm_tpg02_cmbSrvcGroupId_onitemchanged,this);
            this.divForm.form.tabSlm.tpg02.form.btnPop01.addEventHandler("onclick",this.divForm_tabSlm_tpg02_btnPop01_onclick,this);
            this.divForm.form.tabSlm.tpg02.form.btnPop02.addEventHandler("onclick",this.divForm_tabSlm_tpg02_btnPop02_onclick,this);
            this.divForm.form.tabSlm.tpg03.form.btnPop.addEventHandler("onclick",this.divForm_tabSlm_tpg03_btnPop_onclick,this);
            this.divForm.form.tabSlm.tpg04.form.cmbScrGroupId.addEventHandler("onitemchanged",this.divForm_tabSlm_tpg04_cmbScrGroupId_onitemchanged,this);
            this.divForm.form.tabSlm.tpg04.form.btnPop.addEventHandler("onclick",this.divForm_tabSlm_tpg04_btnPop_onclick,this);
            this.divForm.form.div00.form.btnNew.addEventHandler("onclick",this.divForm_div00_btnNew_onclick,this);
            this.divForm.form.divSch00.form.DivCal03.form.cmbNotEvlScrCrtr.addEventHandler("onitemchanged",this.divForm_divSch00_DivCal03_cmbNotEvlScrCrtr_onitemchanged,this);
            this.divForm.form.div01.form.btnSave.addEventHandler("onclick",this.cfnSave,this);
            this.dsIdctList.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
        };
        this.loadIncludeScript("COM021M01_ori250116.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
