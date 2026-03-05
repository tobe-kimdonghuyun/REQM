(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM021M21");
            this.set_titletext("팀 KPI 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsEvlYr", this);
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"evlYr\" type=\"STRING\" size=\"256\"/><Column id=\"evlNotn\" type=\"STRING\" size=\"256\"/><Column id=\"evlCtgy\" type=\"STRING\" size=\"256\"/><Column id=\"evlBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"evlEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"notEvlScrCtrt\" type=\"STRING\" size=\"256\"/><Column id=\"notEvlScrVl\" type=\"STRING\" size=\"256\"/><Column id=\"ognzGroupId\" type=\"STRING\" size=\"256\"/><Column id=\"srvcGroupId\" type=\"STRING\" size=\"256\"/><Column id=\"scrGroupId\" type=\"STRING\" size=\"256\"/><Column id=\"evlAplcnYn\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPastList", this);
            obj._setContents("<ColumnInfo><Column id=\"score1\" type=\"STRING\" size=\"256\"/><Column id=\"score2\" type=\"STRING\" size=\"256\"/><Column id=\"score3\" type=\"STRING\" size=\"256\"/><Column id=\"score4\" type=\"STRING\" size=\"256\"/><Column id=\"score5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrvcList", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"srvcGroupId\" type=\"STRING\" size=\"256\"/><Column id=\"slmSrvcId\" type=\"STRING\" size=\"256\"/><Column id=\"taskFldId\" type=\"STRING\" size=\"256\"/><Column id=\"srvcFldId\" type=\"STRING\" size=\"256\"/><Column id=\"srvcNm\" type=\"STRING\" size=\"256\"/><Column id=\"evlSecNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcsTerm\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIdctList", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"srvcGroupId\" type=\"STRING\" size=\"256\"/><Column id=\"slmSrvcId\" type=\"STRING\" size=\"256\"/><Column id=\"slmIdctId\" type=\"STRING\" size=\"256\"/><Column id=\"srvcViewNm\" type=\"STRING\" size=\"256\"/><Column id=\"srvcTrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"mngIdctNm\" type=\"STRING\" size=\"256\"/><Column id=\"msrmtMtdExpln\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"year\" type=\"STRING\" size=\"256\"/><Column id=\"srvcGroupId\" type=\"STRING\" size=\"256\"/><Column id=\"slmSrvcId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"60","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","70",null,"1339","60",null,null,null,null,null,this);
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

            obj = new Panel("Panel01","1694.00","398","250","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01\"/><PanelItem id=\"PanelItem03\" componentid=\"cmbEvlYr\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("1");
            obj.set_text("년도");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel02","1694.00","398","200","0",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("3");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents/>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cmbEvlYr","788.00","145","150","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("4");
            obj.set_flexgrow("1");
            obj.set_innerdataset("dsEvlYr");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01","710","135","360","0",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("5");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","805","25","339","0",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("6");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents/>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","103","100.00%","126",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"divSch00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divSch00","155.00","148","100.00%","126",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","1694.00","398","480","40",null,null,null,null,null,null,this.divForm.form.divSch00.form);
            obj.set_taborder("10");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"PanelCal01\"/></Contents>");
            this.divForm.form.divSch00.addChild(obj.name, obj);

            obj = new Panel("PanelLabel","20.00","14","100%","98",null,null,null,null,null,null,this.divForm.form.divSch00.form);
            obj.set_taborder("0");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("50");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Panel02_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel02\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel01_00\"/><PanelItem id=\"PanelItem06\" componentid=\"Panel03\"/></Contents>");
            this.divForm.form.divSch00.addChild(obj.name, obj);

            obj = new Panel("Panel02","1694.00","398","480","40",null,null,null,null,null,null,this.divForm.form.divSch00.form);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02\"/><PanelItem id=\"PanelItem02\" componentid=\"PanelCal\"/></Contents>");
            this.divForm.form.divSch00.addChild(obj.name, obj);

            obj = new Static("staLabel02","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch00.form);
            obj.set_taborder("1");
            obj.set_text("평가시행일");
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

            obj = new Static("staLabel03","0","0","200","40",null,null,null,null,null,null,this.divForm.form.divSch00.form);
            obj.set_taborder("3");
            obj.set_text("만족도 미평가 시 기본 점수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch00.addChild(obj.name, obj);

            obj = new Panel("Panel03","1694.00","398","480","40",null,null,null,null,null,null,this.divForm.form.divSch00.form);
            obj.set_taborder("4");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03\"/><PanelItem id=\"PanelItem01\" componentid=\"DivCal03\"/></Contents>");
            this.divForm.form.divSch00.addChild(obj.name, obj);

            obj = new Div("DivCal","221.00","35","1208","40",null,null,null,null,null,null,this.divForm.form.divSch00.form);
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

            obj = new Div("DivCal03","221.00","35","1208","40",null,null,null,null,null,null,this.divForm.form.divSch00.form);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.set_flexgrow("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divSch00.addChild(obj.name, obj);

            obj = new Edit("edtNotEvlScrVl","900.00","127","100%","40",null,null,null,null,null,null,this.divForm.form.divSch00.form.DivCal03.form);
            obj.set_taborder("1");
            obj.set_flexgrow("1");
            obj.set_readonly("true");
            this.divForm.form.divSch00.form.DivCal03.addChild(obj.name, obj);

            obj = new Static("staLabel02_00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch00.form);
            obj.set_taborder("8");
            obj.set_text("SLM 카탈로그");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch00.addChild(obj.name, obj);

            obj = new Panel("PanelCal01","285","24","150","40",null,null,null,null,null,null,this.divForm.form.divSch00.form);
            obj.set_taborder("9");
            obj.set_flexgrow("2");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"edtNotEvlScrVl\"/></Contents>");
            this.divForm.form.divSch00.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch00.form);
            obj.set_taborder("11");
            obj.set_text("평가 기간");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch00.addChild(obj.name, obj);

            obj = new Div("DivCal00_00","221.00","35","1208","40",null,null,null,null,null,null,this.divForm.form.divSch00.form);
            obj.set_taborder("12");
            obj.set_text("Div00");
            obj.set_flexgrow("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divSch00.addChild(obj.name, obj);

            obj = new Calendar("calEvlBgngYmd","0","0","150","40",null,null,null,null,null,null,this.divForm.form.divSch00.form.DivCal00_00.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("true");
            this.divForm.form.divSch00.form.DivCal00_00.addChild(obj.name, obj);

            obj = new Static("StaticDash","calEvlBgngYmd:10","0","10","40",null,null,null,null,null,null,this.divForm.form.divSch00.form.DivCal00_00.form);
            obj.set_taborder("1");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_Dash");
            obj.set_flexshrink("0");
            this.divForm.form.divSch00.form.DivCal00_00.addChild(obj.name, obj);

            obj = new Calendar("calEvlEndYmd","StaticDash:10","0","150","40",null,null,null,null,null,null,this.divForm.form.divSch00.form.DivCal00_00.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("true");
            this.divForm.form.divSch00.form.DivCal00_00.addChild(obj.name, obj);

            obj = new Panel("PanelCal00_00","285","24","100%","40",null,null,null,null,null,null,this.divForm.form.divSch00.form);
            obj.set_taborder("13");
            obj.set_flexgrow("2");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"DivCal00_00\"/></Contents>");
            this.divForm.form.divSch00.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","1694.00","398","480","40",null,null,null,null,null,null,this.divForm.form.divSch00.form);
            obj.set_taborder("14");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"PanelCal00_00\"/></Contents>");
            this.divForm.form.divSch00.addChild(obj.name, obj);

            obj = new Edit("edtNotEvlScrVl","900.00","127","150","40",null,null,null,null,null,null,this.divForm.form.divSch00.form);
            obj.set_taborder("15");
            obj.set_flexgrow("1");
            obj.set_readonly("true");
            this.divForm.form.divSch00.addChild(obj.name, obj);

            obj = new Div("divGrd","0","208","100.00%","180",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","250","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("과거실적");
            obj.set_cssclass("sta_WF_Txt60018");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdList","0","44","100.00%",null,null,"0",null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsPastList");
            obj.set_autofittype("col");
            obj.set_useselcolor("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"실적\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/></Band><Band id=\"body\"><Cell text=\"달성률\" textAlign=\"center\"/><Cell col=\"1\" textAlign=\"center\" text=\"bind:score1\"/><Cell col=\"2\" textAlign=\"center\" text=\"bind:score2\"/><Cell col=\"3\" textAlign=\"center\" text=\"bind:score3\"/><Cell col=\"4\" textAlign=\"center\" text=\"bind:score4\"/><Cell col=\"5\" textAlign=\"center\" text=\"bind:score5\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divGrd00","0","208","100.00%","500",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","250","34",null,null,null,null,null,null,this.divForm.form.divGrd00.form);
            obj.set_taborder("1");
            obj.set_text("팀 KPI 대상 서비스 지정");
            obj.set_cssclass("sta_WF_Txt60018");
            this.divForm.form.divGrd00.addChild(obj.name, obj);

            obj = new Grid("grdList","0","44","100.00%",null,null,"0",null,null,null,null,this.divForm.form.divGrd00.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsSrvcList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"KPI선정&#13;&#10;여부\"/><Cell col=\"1\" text=\"분야\"/><Cell col=\"2\" text=\"서비스\"/><Cell col=\"3\" text=\"서비스 분야\"/><Cell col=\"4\" text=\"처리기한(일)\"/><Cell col=\"5\" text=\"평가 구간\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:chk\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:taskFldId\" displaytype=\"combotext\" combodataset=\"dsTaskFldId\" combocodecol=\"cdId\" combodatacol=\"cdNm\" cssclass=\"expr:chk == &apos;1&apos; ? &apos;CellSum04&apos; : &apos;&apos;\"/><Cell col=\"2\" text=\"bind:srvcNm\" cssclass=\"expr:chk == &apos;1&apos; ? &apos;CellSum04&apos; : &apos;&apos;\"/><Cell col=\"3\" text=\"bind:srvcFldId\" combodataset=\"dsSrvcFldId\" combocodecol=\"cdId\" combodatacol=\"cdNm\" displaytype=\"combotext\" cssclass=\"expr:chk == &apos;1&apos; ? &apos;CellSum04&apos; : &apos;&apos;\"/><Cell col=\"4\" text=\"bind:prcsTerm\" edittype=\"text\" editinputtype=\"number\" editmaxlength=\"3\" textAlign=\"center\" cssclass=\"expr:chk == &apos;1&apos; ? &apos;CellSum04&apos; : &apos;&apos;\"/><Cell col=\"5\" text=\"bind:evlSecNm\" cssclass=\"expr:chk == &apos;1&apos; ? &apos;CellSum04&apos; : &apos;&apos;\"/></Band></Format></Formats>");
            this.divForm.form.divGrd00.addChild(obj.name, obj);

            obj = new Div("divGrd01","0","208","100.00%","300",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","250","34",null,null,null,null,null,null,this.divForm.form.divGrd01.form);
            obj.set_taborder("1");
            obj.set_text("팀 KPI 대상 지표 지정");
            obj.set_cssclass("sta_WF_Txt60018");
            this.divForm.form.divGrd01.addChild(obj.name, obj);

            obj = new Grid("grdList","0","44","100.00%",null,null,"0",null,null,null,null,this.divForm.form.divGrd01.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsIdctList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"KPI선정&#13;&#10;여부\"/><Cell col=\"1\" text=\"관리지표\"/><Cell col=\"2\" text=\"서비스 목표\"/><Cell col=\"3\" text=\"서비스 관점\"/><Cell col=\"4\" text=\"측정 방식\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" text=\"bind:mngIdctNm\" cssclass=\"expr:chk == &apos;1&apos; ? &apos;CellSum04&apos; : &apos;&apos;\"/><Cell col=\"2\" text=\"bind:srvcTrgtNm\" cssclass=\"expr:chk == &apos;1&apos; ? &apos;CellSum04&apos; : &apos;&apos;\"/><Cell col=\"3\" text=\"bind:srvcViewNm\" cssclass=\"expr:chk == &apos;1&apos; ? &apos;CellSum04&apos; : &apos;&apos;\"/><Cell col=\"4\" text=\"bind:msrmtMtdExpln\" cssclass=\"expr:chk == &apos;1&apos; ? &apos;CellSum04&apos; : &apos;&apos;\"/></Band></Format></Formats>");
            this.divForm.form.divGrd01.addChild(obj.name, obj);

            obj = new Button("btnKpi","620.00","1075","115","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("6");
            obj.set_text("팀 KPI 산출");
            obj.set_cssclass("btn_WF_No");
            obj.set_fittocontents("width");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panBtn","-60","1070","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("7");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("none");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxisalign("start");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnKpi\"/><PanelItem id=\"PanelItem02\" componentid=\"btnSave\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnSave","620.00","1075","70","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("8");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            this.divForm.addChild(obj.name, obj);
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
                p.Panel01.move("1694.00","398","250","40",null,null);

                p.staLabel01.set_taborder("1");
                p.staLabel01.set_text("년도");
                p.staLabel01.set_cssclass("sta_WF_SchLabel");
                p.staLabel01.set_flexshrink("0");
                p.staLabel01.set_maxwidth("");
                p.staLabel01.move("0","0","100","40",null,null);

                p.Panel02.set_taborder("3");
                p.Panel02.set_type("horizontal");
                p.Panel02.set_horizontalgap("10");
                p.Panel02.set_flexgrow("1");
                p.Panel02.set_fittocontents("height");
                p.Panel02.set_minwidth("");
                p.Panel02.move("1694.00","398","200","0",null,null);

                p.cmbEvlYr.set_taborder("4");
                p.cmbEvlYr.set_flexgrow("1");
                p.cmbEvlYr.set_innerdataset("dsEvlYr");
                p.cmbEvlYr.set_codecolumn("cdId");
                p.cmbEvlYr.set_datacolumn("cdNm");
                p.cmbEvlYr.set_text("전체");
                p.cmbEvlYr.set_value("");
                p.cmbEvlYr.set_index("-1");
                p.cmbEvlYr.move("788.00","145","150","40",null,null);

                p.pan01.set_taborder("5");
                p.pan01.set_flexgrow("1");
                p.pan01.set_fittocontents("height");
                p.pan01.move("710","135","360","0",null,null);

                p.Panel02_00.set_taborder("6");
                p.Panel02_00.set_type("horizontal");
                p.Panel02_00.set_horizontalgap("10");
                p.Panel02_00.set_flexgrow("1");
                p.Panel02_00.set_fittocontents("height");
                p.Panel02_00.set_minwidth("");
                p.Panel02_00.move("805","25","339","0",null,null);
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
            //-- Default Layout : this.divForm.form.divSch00.form.DivCal03.form
            obj = new Layout("default","",0,0,this.divForm.form.divSch00.form.DivCal03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
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
            //-- Default Layout : this.divForm.form.divSch00.form.DivCal00_00.form
            obj = new Layout("default","",0,0,this.divForm.form.divSch00.form.DivCal00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.calEvlBgngYmd.set_taborder("0");
                p.calEvlBgngYmd.set_dateformat("yyyy-MM-dd");
                p.calEvlBgngYmd.set_readonly("true");
                p.calEvlBgngYmd.move("0","0","150","40",null,null);

                p.StaticDash.set_taborder("1");
                p.StaticDash.set_text("~");
                p.StaticDash.set_cssclass("sta_WF_Dash");
                p.StaticDash.set_flexshrink("0");
                p.StaticDash.move("calEvlBgngYmd:10","0","10","40",null,null);

                p.calEvlEndYmd.set_taborder("2");
                p.calEvlEndYmd.set_dateformat("yyyy-MM-dd");
                p.calEvlEndYmd.set_readonly("true");
                p.calEvlEndYmd.move("StaticDash:10","0","150","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divForm.form.divSch00.form.DivCal00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divSch00.form.DivCal00_00.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divSch00.form.DivCal00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divForm.form.divSch00.form.DivCal00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divSch00.form
            obj = new Layout("default","",0,0,this.divForm.form.divSch00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel02_00.set_taborder("10");
                p.Panel02_00.set_type("horizontal");
                p.Panel02_00.set_horizontalgap("10");
                p.Panel02_00.set_flexgrow("1");
                p.Panel02_00.set_fittocontents("height");
                p.Panel02_00.set_maxheight("");
                p.Panel02_00.set_minwidth("");
                p.Panel02_00.move("1694.00","398","480","40",null,null);

                p.PanelLabel.set_taborder("0");
                p.PanelLabel.set_verticalgap("8");
                p.PanelLabel.set_flexwrap("wrap");
                p.PanelLabel.set_spacing("0px 0px 10px 0px");
                p.PanelLabel.set_type("horizontal");
                p.PanelLabel.set_flexcrossaxisalign("start");
                p.PanelLabel.set_horizontalgap("50");
                p.PanelLabel.set_fittocontents("height");
                p.PanelLabel.set_maxheight("");
                p.PanelLabel.move("20.00","14","100%","98",null,null);

                p.Panel02.set_taborder("2");
                p.Panel02.set_type("horizontal");
                p.Panel02.set_horizontalgap("10");
                p.Panel02.set_flexgrow("1");
                p.Panel02.set_fittocontents("height");
                p.Panel02.set_maxheight("");
                p.Panel02.set_minwidth("");
                p.Panel02.move("1694.00","398","480","40",null,null);

                p.staLabel02.set_taborder("1");
                p.staLabel02.set_text("평가시행일");
                p.staLabel02.set_cssclass("sta_WF_SchLabel");
                p.staLabel02.set_flexshrink("0");
                p.staLabel02.set_maxwidth("");
                p.staLabel02.move("0","0","100","40",null,null);

                p.PanelCal.set_taborder("6");
                p.PanelCal.set_flexgrow("2");
                p.PanelCal.set_horizontalgap("10");
                p.PanelCal.set_flexwrap("wrap");
                p.PanelCal.set_verticalgap("8");
                p.PanelCal.set_fittocontents("height");
                p.PanelCal.move("285","24","100%","40",null,null);

                p.staLabel03.set_taborder("3");
                p.staLabel03.set_text("만족도 미평가 시 기본 점수");
                p.staLabel03.set_cssclass("sta_WF_SchLabel");
                p.staLabel03.set_flexshrink("0");
                p.staLabel03.set_maxwidth("");
                p.staLabel03.move("0","0","200","40",null,null);

                p.Panel03.set_taborder("4");
                p.Panel03.set_type("horizontal");
                p.Panel03.set_horizontalgap("10");
                p.Panel03.set_fittocontents("height");
                p.Panel03.set_flexgrow("1");
                p.Panel03.set_minwidth("");
                p.Panel03.move("1694.00","398","480","40",null,null);

                p.DivCal.set_taborder("5");
                p.DivCal.set_text("Div00");
                p.DivCal.set_flexgrow("1");
                p.DivCal.set_formscrollbartype("none none");
                p.DivCal.set_formscrolltype("none");
                p.DivCal.move("221.00","35","1208","40",null,null);

                p.DivCal03.set_taborder("7");
                p.DivCal03.set_text("Div00");
                p.DivCal03.set_flexgrow("1");
                p.DivCal03.set_formscrollbartype("none none");
                p.DivCal03.set_formscrolltype("none");
                p.DivCal03.move("221.00","35","1208","40",null,null);

                p.staLabel02_00.set_taborder("8");
                p.staLabel02_00.set_text("SLM 카탈로그");
                p.staLabel02_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel02_00.set_flexshrink("0");
                p.staLabel02_00.set_maxwidth("");
                p.staLabel02_00.move("0","0","100","40",null,null);

                p.PanelCal01.set_taborder("9");
                p.PanelCal01.set_flexgrow("2");
                p.PanelCal01.set_horizontalgap("10");
                p.PanelCal01.set_flexwrap("wrap");
                p.PanelCal01.set_verticalgap("8");
                p.PanelCal01.set_fittocontents("height");
                p.PanelCal01.move("285","24","150","40",null,null);

                p.staLabel01_00.set_taborder("11");
                p.staLabel01_00.set_text("평가 기간");
                p.staLabel01_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel01_00.set_flexshrink("0");
                p.staLabel01_00.set_maxwidth("");
                p.staLabel01_00.move("0","0","100","40",null,null);

                p.DivCal00_00.set_taborder("12");
                p.DivCal00_00.set_text("Div00");
                p.DivCal00_00.set_flexgrow("1");
                p.DivCal00_00.set_formscrollbartype("none none");
                p.DivCal00_00.set_formscrolltype("none");
                p.DivCal00_00.move("221.00","35","1208","40",null,null);

                p.PanelCal00_00.set_taborder("13");
                p.PanelCal00_00.set_flexgrow("2");
                p.PanelCal00_00.set_horizontalgap("10");
                p.PanelCal00_00.set_flexwrap("wrap");
                p.PanelCal00_00.set_verticalgap("8");
                p.PanelCal00_00.set_fittocontents("height");
                p.PanelCal00_00.move("285","24","100%","40",null,null);

                p.Panel01_00.set_taborder("14");
                p.Panel01_00.set_type("horizontal");
                p.Panel01_00.set_horizontalgap("10");
                p.Panel01_00.set_fittocontents("height");
                p.Panel01_00.set_flexgrow("1");
                p.Panel01_00.set_minwidth("");
                p.Panel01_00.move("1694.00","398","480","40",null,null);

                p.edtNotEvlScrVl.set_taborder("15");
                p.edtNotEvlScrVl.set_flexgrow("1");
                p.edtNotEvlScrVl.set_readonly("true");
                p.edtNotEvlScrVl.move("900.00","127","150","40",null,null);
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
                p.DivCal00_00.move("221.00","35","100%","40",null,null);

                p.PanelCal00_00.move("285","24","330","40",null,null);

                p.Panel01_00.set_flexwrap("wrap");
            	}
            );
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            this.divForm.form.divSch00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("1");
                p.Static00.set_text("과거실적");
                p.Static00.set_cssclass("sta_WF_Txt60018");
                p.Static00.move("0","0","250","34",null,null);

                p.grdList.set_taborder("0");
                p.grdList.set_binddataset("dsPastList");
                p.grdList.set_autofittype("col");
                p.grdList.set_useselcolor("false");
                p.grdList.move("0","44","100.00%",null,null,"0");
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
                p.grdList.set_autofittype("none");
            	}
            );
            obj.set_verticalgap("20");
            obj.set_type("default");
            this.divForm.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divGrd00.form
            obj = new Layout("default","",0,0,this.divForm.form.divGrd00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("1");
                p.Static00.set_text("팀 KPI 대상 서비스 지정");
                p.Static00.set_cssclass("sta_WF_Txt60018");
                p.Static00.move("0","0","250","34",null,null);

                p.grdList.set_taborder("0");
                p.grdList.set_binddataset("dsSrvcList");
                p.grdList.set_autofittype("col");
                p.grdList.set_autoenter("select");
                p.grdList.move("0","44","100.00%",null,null,"0");
            	}
            );
            obj.set_verticalgap("20");
            obj.set_type("default");
            this.divForm.form.divGrd00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divGrd00.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divGrd00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdList.set_autofittype("none");
            	}
            );
            obj.set_verticalgap("20");
            obj.set_type("default");
            this.divForm.form.divGrd00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divGrd01.form
            obj = new Layout("default","",0,0,this.divForm.form.divGrd01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("1");
                p.Static00.set_text("팀 KPI 대상 지표 지정");
                p.Static00.set_cssclass("sta_WF_Txt60018");
                p.Static00.move("0","0","250","34",null,null);

                p.grdList.set_taborder("0");
                p.grdList.set_binddataset("dsIdctList");
                p.grdList.set_autofittype("col");
                p.grdList.move("0","44","100.00%",null,null,"0");
            	}
            );
            obj.set_verticalgap("20");
            obj.set_type("default");
            this.divForm.form.divGrd01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divGrd01.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divGrd01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdList.set_autofittype("none");
            	}
            );
            obj.set_verticalgap("20");
            obj.set_type("default");
            this.divForm.form.divGrd01.form.addLayout(obj.name, obj);
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

                p.Panel00.set_taborder("2");
                p.Panel00.set_type("vertical");
                p.Panel00.set_fittocontents("height");
                p.Panel00.move("0","103","100.00%","126",null,null);

                p.divSch00.set_taborder("1");
                p.divSch00.set_text("Div00");
                p.divSch00.set_cssclass("div_WF_SchBg");
                p.divSch00.set_formscrollbartype("none none");
                p.divSch00.set_formscrolltype("none");
                p.divSch00.set_fittocontents("height");
                p.divSch00.move("155.00","148","100.00%","126",null,null);

                p.divGrd.set_taborder("3");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","208","100.00%","180",null,null);

                p.divGrd00.set_taborder("4");
                p.divGrd00.set_text("Div01");
                p.divGrd00.set_fittocontents("height");
                p.divGrd00.set_formscrollbartype("none none");
                p.divGrd00.set_formscrolltype("none");
                p.divGrd00.move("0","208","100.00%","500",null,null);

                p.divGrd01.set_taborder("5");
                p.divGrd01.set_text("Div01");
                p.divGrd01.set_fittocontents("height");
                p.divGrd01.set_formscrollbartype("none none");
                p.divGrd01.set_formscrolltype("none");
                p.divGrd01.move("0","208","100.00%","300",null,null);

                p.btnKpi.set_taborder("6");
                p.btnKpi.set_text("팀 KPI 산출");
                p.btnKpi.set_cssclass("btn_WF_No");
                p.btnKpi.set_fittocontents("width");
                p.btnKpi.move("620.00","1075","115","40",null,null);

                p.panBtn.set_taborder("7");
                p.panBtn.set_horizontalgap("10");
                p.panBtn.set_fittocontents("none");
                p.panBtn.set_flexmainaxisalign("center");
                p.panBtn.set_flexcrossaxisalign("start");
                p.panBtn.move("-60","1070","100%","50",null,null);

                p.btnSave.set_taborder("8");
                p.btnSave.set_text("확인");
                p.btnSave.set_cssclass("btn_WF_Yes");
                p.btnSave.set_fittocontents("width");
                p.btnSave.move("620.00","1075","70","40",null,null);
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

            	}
            );
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("팀 KPI 관리");

                p.divTitle.set_taborder("1");
                p.divTitle.set_text("");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.set_formscrolltype("none");
                p.divTitle.set_maxwidth("");
                p.divTitle.move("0","0",null,"60","60",null);

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.set_fittocontents("height");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","70",null,"1339","60",null);
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
                p.divTitle.move("0","0",null,"60","0",null);

                p.divForm.move("0","70",null,"10000","0",null);
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

            obj = new BindItem("item9","divForm.form.divSch.form.cmbEvlYr","value","dsSearch","year");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divForm.form.divSch00.form.DivCal.form.Calendar02","value","dsList","frstRegDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divForm.form.divSch00.form.DivCal03.form.edtNotEvlScrVl","value","dsList","notEvlScrVl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divForm.form.divSch00.form.edtNotEvlScrVl","value","dsList","evlCtgy");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.divSch00.form.DivCal00_00.form.calEvlBgngYmd","value","dsList","evlBgngYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divForm.form.divSch00.form.DivCal00_00.form.calEvlEndYmd","value","dsList","evlEndYmd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.registerScript("COM021M21.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	COM021M21.xfdl
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

        	var year = this.gfnGetDate().substr(0, 4);
        	for(var i=0; i<5; i++) {
        		var nRow = this.dsEvlYr.addRow();
        		this.dsEvlYr.setColumn(nRow, "cdId", year-i);
        		this.dsEvlYr.setColumn(nRow, "cdNm", year-i);
        	}
        	this.divForm.form.divSch.form.cmbEvlYr.index = 0;

        	this.fnInit();
        	this.cfnSearch();
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

        this.getSearchTransaction = function()
        {
        	this.dsPastList.clearData();
        	this.dsSrvcList.clearData();
        	this.dsIdctList.clearData();

        	var strSvcId    = "search";
        	var strSvcUrl   = "slm/teamKpiInfoInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsList=dsList";
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

        this.getSearchPastTransaction = function()
        {
        	var strSvcId    = "searchPast";
        	var strSvcUrl   = "slm/teamKpiPastInfoInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsPastList=dsList";
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

        this.getSearchSrvcTransaction = function()
        {
        	var strSvcId    = "searchSrvc";
        	var strSvcUrl   = "slm/teamKpiSrvcInfoInq.do";
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

        this.getSearchIdctTransaction = function()
        {
        	var strSvcId    = "searchIdct";
        	var strSvcUrl   = "slm/teamKpiIdctInfoInq.do";
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

        // 데이터 저장
        this.saveTransaction = function()
        {
        	var strSvcId    = "save";
        	var strSvcUrl   = "slm/teamKpiInfoStrg.do";
        	var inData      = "dsSrvcList=dsSrvcList:A dsIdctList=dsIdctList:A";
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
        			break;
        		case "search" :
        			this.fnSetGridHead(this.divForm.form.divSch.form.cmbEvlYr.value);

        			if(this.gfnIsNull(this.dsList.getColumn(0, "frstRegDt")) != true) {
        				//this.divForm.form.btnKpi.enable = false;
        				this.divForm.form.btnSave.enable = false;
        			}

        			if(this.dsList.getRowCount() > 0) {
        				this.getSearchPastTransaction();
        			}
        			break;
        		case "searchPast" :
        			this.dsSearch.setColumn(0, "srvcGroupId", this.dsList.getColumn(0, "srvcGroupId"));
        			this.getSearchSrvcTransaction();
        			break;
        		case "searchSrvc" :
        			break;
        		case "searchIdct" :
        			break;
        		case "save":
        			this.gfnAlertMsg("saveAfter", "MSG_001", "", "");
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
        	if(sPopupId == "save") {
        		if(oRtn.result == "Y") {
        			this.saveTransaction();
        		}
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	this.getComCodeSearchTransaction();
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.dsSrvcList_onrowposchanged = function(obj,e)
        {
        	this.dsSearch.setColumn(0, "slmSrvcId", obj.getColumn(e.newrow, "slmSrvcId"));
        	this.getSearchIdctTransaction();
        };

        this.fnSetGridHead = function(year)
        {
        	this.divForm.form.divGrd.form.grdList.setCellProperty("head", 1, "text", year-4);
        	this.divForm.form.divGrd.form.grdList.setCellProperty("head", 2, "text", year-3);
        	this.divForm.form.divGrd.form.grdList.setCellProperty("head", 3, "text", year-2);
        	this.divForm.form.divGrd.form.grdList.setCellProperty("head", 4, "text", year-1);
        	this.divForm.form.divGrd.form.grdList.setCellProperty("head", 5, "text", year);
        };

        this.divForm_divSch_cmbEvlYr_onitemchanged = function(obj,e)
        {
        	this.cfnSearch();
        };

        this.divForm_btnSave_onclick = function(obj,e)
        {
        	if(this.gfnDsIsUpdated(this.dsSrvcList) != true && this.gfnDsIsUpdated(this.dsIdctList) != true) {
        		this.gfnAlertMsg("msg", "MSG_004");
        	} else {
        		this.gfnConfirmMsg("save", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divSch.form.cmbEvlYr.addEventHandler("onitemchanged",this.divForm_divSch_cmbEvlYr_onitemchanged,this);
            this.divForm.form.divGrd.form.grdList.addEventHandler("oncellclick",this.divForm_divGrd_grdList_oncellclick,this);
            this.divForm.form.divGrd00.form.grdList.addEventHandler("oncellclick",this.divForm_divGrd_grdList_oncellclick,this);
            this.divForm.form.divGrd01.form.grdList.addEventHandler("oncellclick",this.divForm_divGrd_grdList_oncellclick,this);
            this.divForm.form.btnKpi.addEventHandler("onclick",this.divForm_btnPop_onclick,this);
            this.divForm.form.btnSave.addEventHandler("onclick",this.divForm_btnSave_onclick,this);
            this.dsSrvcList.addEventHandler("onrowposchanged",this.dsSrvcList_onrowposchanged,this);
        };
        this.loadIncludeScript("COM021M21.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
