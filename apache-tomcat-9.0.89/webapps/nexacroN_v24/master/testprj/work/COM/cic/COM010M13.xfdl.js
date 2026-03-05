(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM010M13");
            this.set_titletext("업체별통계");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"year\" type=\"STRING\" size=\"256\"/><Column id=\"trgtCoId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"trgtCoId\" type=\"STRING\" size=\"256\"/><Column id=\"coNm\" type=\"STRING\" size=\"256\"/><Column id=\"srvc0101\" type=\"INT\" size=\"256\"/><Column id=\"srvc0102\" type=\"INT\" size=\"256\"/><Column id=\"srvc0103\" type=\"INT\" size=\"256\"/><Column id=\"srvc0104\" type=\"INT\" size=\"256\"/><Column id=\"srvc0201\" type=\"INT\" size=\"256\"/><Column id=\"srvc0202\" type=\"INT\" size=\"256\"/><Column id=\"srvc0203\" type=\"INT\" size=\"256\"/><Column id=\"srvc0204\" type=\"INT\" size=\"256\"/><Column id=\"srvc0301\" type=\"INT\" size=\"256\"/><Column id=\"srvc0302\" type=\"INT\" size=\"256\"/><Column id=\"srvc0303\" type=\"INT\" size=\"256\"/><Column id=\"srvc0304\" type=\"INT\" size=\"256\"/><Column id=\"srvc0401\" type=\"INT\" size=\"256\"/><Column id=\"srvc0402\" type=\"INT\" size=\"256\"/><Column id=\"srvc0403\" type=\"INT\" size=\"256\"/><Column id=\"srvc0404\" type=\"INT\" size=\"256\"/><Column id=\"srvc0501\" type=\"INT\" size=\"256\"/><Column id=\"srvc0502\" type=\"INT\" size=\"256\"/><Column id=\"srvc0503\" type=\"INT\" size=\"256\"/><Column id=\"srvc0504\" type=\"INT\" size=\"256\"/><Column id=\"srvc0601\" type=\"INT\" size=\"256\"/><Column id=\"srvc0602\" type=\"INT\" size=\"256\"/><Column id=\"srvc0603\" type=\"INT\" size=\"256\"/><Column id=\"srvc0604\" type=\"INT\" size=\"256\"/><Column id=\"srvc0701\" type=\"INT\" size=\"256\"/><Column id=\"srvc0702\" type=\"INT\" size=\"256\"/><Column id=\"srvc0703\" type=\"INT\" size=\"256\"/><Column id=\"srvc0704\" type=\"INT\" size=\"256\"/><Column id=\"srvc0801\" type=\"INT\" size=\"256\"/><Column id=\"srvc0802\" type=\"INT\" size=\"256\"/><Column id=\"srvc0803\" type=\"INT\" size=\"256\"/><Column id=\"srvc0804\" type=\"INT\" size=\"256\"/><Column id=\"srvc0901\" type=\"INT\" size=\"256\"/><Column id=\"srvc0902\" type=\"INT\" size=\"256\"/><Column id=\"srvc0903\" type=\"INT\" size=\"256\"/><Column id=\"srvc0904\" type=\"INT\" size=\"256\"/><Column id=\"srvc1001\" type=\"INT\" size=\"256\"/><Column id=\"srvc1002\" type=\"INT\" size=\"256\"/><Column id=\"srvc1003\" type=\"INT\" size=\"256\"/><Column id=\"srvc1004\" type=\"INT\" size=\"256\"/><Column id=\"srvc1101\" type=\"INT\" size=\"256\"/><Column id=\"srvc1102\" type=\"INT\" size=\"256\"/><Column id=\"srvc1103\" type=\"INT\" size=\"256\"/><Column id=\"srvc1104\" type=\"INT\" size=\"256\"/><Column id=\"srvc1201\" type=\"INT\" size=\"256\"/><Column id=\"srvc1202\" type=\"INT\" size=\"256\"/><Column id=\"srvc1203\" type=\"INT\" size=\"256\"/><Column id=\"srvc1204\" type=\"INT\" size=\"256\"/><Column id=\"sum01\" type=\"INT\" size=\"256\"/><Column id=\"sum02\" type=\"INT\" size=\"256\"/><Column id=\"sum03\" type=\"INT\" size=\"256\"/><Column id=\"sum04\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYear", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","70",null,null,"60","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Div("divSch","0","0","100.00%","148",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel00","20.00","14","300","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("7");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03\"/><PanelItem id=\"PanelItem02\" componentid=\"cmbYear\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","100%","50",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("0");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("50");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem00\" componentid=\"pan02\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan02","1694.00","398","300","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("1");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"divEdtPop\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panClose","30","151","100%","30",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnSchClose\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSchClose","1251","185","30","30",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_SchClose");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("4");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSch\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSch","570","192","112","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("5");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            obj.set_fittocontents("width");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("6");
            obj.set_text("연기간");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cmbYear","788.00","145","20.42%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("8");
            obj.set_flexgrow("1");
            obj.set_innerdataset("dsYear");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("9");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divEdtPop","43.00","393","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("10");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtCoNm","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.divSch.form.divEdtPop.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("false");
            this.divForm.form.divSch.form.divEdtPop.addChild(obj.name, obj);

            obj = new Button("btnPop","edtCoNm:-40","0","40","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divEdtPop.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            obj.set_visible("true");
            this.divForm.form.divSch.form.divEdtPop.addChild(obj.name, obj);

            obj = new Div("divGrd","0","30","100.00%","650",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panGrdBtn","870","0","100%","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem04\" componentid=\"btnGrdDel\"/><PanelItem id=\"PanelItem05\" componentid=\"btnGrdRegi\"/><PanelItem id=\"PanelItem06\" componentid=\"btnGrdDw\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdList","0","54","100.00%","567",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_autofittype("none");
            obj.set_flexgrow("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\" band=\"head\"/><Row size=\"44\"/><Row size=\"44\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"업체명\"/><Cell col=\"1\" colspan=\"4\" text=\"1월\"/><Cell col=\"5\" colspan=\"4\" text=\"2월\"/><Cell col=\"9\" colspan=\"4\" text=\"3월\"/><Cell col=\"13\" colspan=\"4\" text=\"4월\"/><Cell col=\"17\" colspan=\"4\" text=\"5월\"/><Cell col=\"21\" colspan=\"4\" text=\"6월\"/><Cell col=\"25\" colspan=\"4\" text=\"7월\"/><Cell col=\"29\" colspan=\"4\" text=\"8월\"/><Cell col=\"33\" colspan=\"4\" text=\"9월\"/><Cell col=\"37\" colspan=\"4\" text=\"10월\"/><Cell col=\"41\" colspan=\"4\" text=\"11월\"/><Cell col=\"45\" colspan=\"4\" text=\"12월\"/><Cell col=\"49\" colspan=\"4\" text=\"합계\"/><Cell row=\"1\" col=\"1\" text=\"제안접수\"/><Cell row=\"1\" col=\"2\" text=\"불편문의\"/><Cell row=\"1\" col=\"3\" text=\"칭찬신청\"/><Cell row=\"1\" col=\"4\" text=\"부패신고\"/><Cell row=\"1\" col=\"5\" text=\"제안접수\"/><Cell row=\"1\" col=\"6\" text=\"불편문의\"/><Cell row=\"1\" col=\"7\" text=\"칭찬신청\"/><Cell row=\"1\" col=\"8\" text=\"부패신고\"/><Cell row=\"1\" col=\"9\" text=\"제안접수\"/><Cell row=\"1\" col=\"10\" text=\"불편문의\"/><Cell row=\"1\" col=\"11\" text=\"칭찬신청\"/><Cell row=\"1\" col=\"12\" text=\"부패신고\"/><Cell row=\"1\" col=\"13\" text=\"제안접수\"/><Cell row=\"1\" col=\"14\" text=\"불편문의\"/><Cell row=\"1\" col=\"15\" text=\"칭찬신청\"/><Cell row=\"1\" col=\"16\" text=\"부패신고\"/><Cell row=\"1\" col=\"17\" text=\"제안접수\"/><Cell row=\"1\" col=\"18\" text=\"불편문의\"/><Cell row=\"1\" col=\"19\" text=\"칭찬신청\"/><Cell row=\"1\" col=\"20\" text=\"부패신고\"/><Cell row=\"1\" col=\"21\" text=\"제안접수\"/><Cell row=\"1\" col=\"22\" text=\"불편문의\"/><Cell row=\"1\" col=\"23\" text=\"칭찬신청\"/><Cell row=\"1\" col=\"24\" text=\"부패신고\"/><Cell row=\"1\" col=\"25\" text=\"제안접수\"/><Cell row=\"1\" col=\"26\" text=\"불편문의\"/><Cell row=\"1\" col=\"27\" text=\"칭찬신청\"/><Cell row=\"1\" col=\"28\" text=\"부패신고\"/><Cell row=\"1\" col=\"29\" text=\"제안접수\"/><Cell row=\"1\" col=\"30\" text=\"불편문의\"/><Cell row=\"1\" col=\"31\" text=\"칭찬신청\"/><Cell row=\"1\" col=\"32\" text=\"부패신고\"/><Cell row=\"1\" col=\"33\" text=\"제안접수\"/><Cell row=\"1\" col=\"34\" text=\"불편문의\"/><Cell row=\"1\" col=\"35\" text=\"칭찬신청\"/><Cell row=\"1\" col=\"36\" text=\"부패신고\"/><Cell row=\"1\" col=\"37\" text=\"제안접수\"/><Cell row=\"1\" col=\"38\" text=\"불편문의\"/><Cell row=\"1\" col=\"39\" text=\"칭찬신청\"/><Cell row=\"1\" col=\"40\" text=\"부패신고\"/><Cell row=\"1\" col=\"41\" text=\"제안접수\"/><Cell row=\"1\" col=\"42\" text=\"불편문의\"/><Cell row=\"1\" col=\"43\" text=\"칭찬신청\"/><Cell row=\"1\" col=\"44\" text=\"부패신고\"/><Cell row=\"1\" col=\"45\" text=\"제안접수\"/><Cell row=\"1\" col=\"46\" text=\"불편문의\"/><Cell row=\"1\" col=\"47\" text=\"칭찬신청\"/><Cell row=\"1\" col=\"48\" text=\"부패신고\"/><Cell row=\"1\" col=\"49\" text=\"제안접수\"/><Cell row=\"1\" col=\"50\" text=\"불편문의\"/><Cell row=\"1\" col=\"51\" text=\"칭찬신청\"/><Cell row=\"1\" col=\"52\" text=\"부패신고\"/></Band><Band id=\"body\"><Cell text=\"bind:coNm\"/><Cell col=\"1\" text=\"bind:srvc0101\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:srvc0101 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"2\" text=\"bind:srvc0102\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:srvc0102 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"3\" text=\"bind:srvc0103\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:srvc0103 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"4\" text=\"bind:srvc0104\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:srvc0104 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"5\" text=\"bind:srvc0201\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:srvc0201 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"6\" text=\"bind:srvc0202\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:srvc0202 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"7\" text=\"bind:srvc0203\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:srvc0203 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"8\" text=\"bind:srvc0204\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:srvc0204 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"9\" text=\"bind:srvc0301\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:srvc0301 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"10\" text=\"bind:srvc0302\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:srvc0302 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"11\" text=\"bind:srvc0303\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:srvc0303 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"12\" text=\"bind:srvc0304\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:srvc0304 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"13\" text=\"bind:srvc0401\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:srvc0401 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"14\" text=\"bind:srvc0402\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:srvc0402 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"15\" text=\"bind:srvc0403\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:srvc0403 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"16\" text=\"bind:srvc0404\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:srvc0404 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"17\" text=\"bind:srvc0501\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:srvc0501 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"18\" text=\"bind:srvc0502\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:srvc0502 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"19\" text=\"bind:srvc0503\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:srvc0503 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"20\" text=\"bind:srvc0504\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:srvc0504 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"21\" text=\"bind:srvc0601\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:srvc0601 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"22\" text=\"bind:srvc0602\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:srvc0602 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"23\" text=\"bind:srvc0603\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:srvc0603 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"24\" text=\"bind:srvc0604\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:srvc0604 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"25\" text=\"bind:srvc0701\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:srvc0701 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"26\" text=\"bind:srvc0702\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:srvc0702 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"27\" text=\"bind:srvc0703\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:srvc0703 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"28\" text=\"bind:srvc0704\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:srvc0704 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"29\" text=\"bind:srvc0801\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:srvc0801 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"30\" text=\"bind:srvc0802\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:srvc0802 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"31\" text=\"bind:srvc0803\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:srvc0803 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"32\" text=\"bind:srvc0804\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:srvc0804 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"33\" text=\"bind:srvc0901\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:srvc0901 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"34\" text=\"bind:srvc0902\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:srvc0902 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"35\" text=\"bind:srvc0903\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:srvc0903 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"36\" text=\"bind:srvc0904\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:srvc0904 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"37\" text=\"bind:srvc1001\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:srvc1001 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"38\" text=\"bind:srvc1002\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:srvc1002 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"39\" text=\"bind:srvc1003\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:srvc1003 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"40\" text=\"bind:srvc1004\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:srvc1004 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"41\" text=\"bind:srvc1101\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:srvc1101 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"42\" text=\"bind:srvc1102\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:srvc1102 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"43\" text=\"bind:srvc1103\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:srvc1103 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"44\" text=\"bind:srvc1104\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:srvc1104 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"45\" text=\"bind:srvc1201\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:srvc1201 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"46\" text=\"bind:srvc1202\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:srvc1202 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"47\" text=\"bind:srvc1203\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:srvc1203 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"48\" text=\"bind:srvc1204\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:srvc1204 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"49\" text=\"bind:sum01\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:sum01 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"50\" text=\"bind:sum02\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:sum02 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"51\" text=\"bind:sum03\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:sum03 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/><Cell col=\"52\" text=\"bind:sum04\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:sum04 != 0 ? &apos;CellTxtBlue, CellLink&apos; : &apos;&apos;\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" expr=\"dataset.getSum(&apos;srvc0101&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"2\" expr=\"dataset.getSum(&apos;srvc0102&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"3\" expr=\"dataset.getSum(&apos;srvc0103&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"4\" expr=\"dataset.getSum(&apos;srvc0104&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"5\" expr=\"dataset.getSum(&apos;srvc0201&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"6\" expr=\"dataset.getSum(&apos;srvc0202&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"7\" expr=\"dataset.getSum(&apos;srvc0203&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"8\" expr=\"dataset.getSum(&apos;srvc0204&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"9\" expr=\"dataset.getSum(&apos;srvc0301&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"10\" expr=\"dataset.getSum(&apos;srvc0302&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"11\" expr=\"dataset.getSum(&apos;srvc0303&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"12\" expr=\"dataset.getSum(&apos;srvc0304&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"13\" expr=\"dataset.getSum(&apos;srvc0401&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"14\" expr=\"dataset.getSum(&apos;srvc0402&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"15\" expr=\"dataset.getSum(&apos;srvc0403&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"16\" expr=\"dataset.getSum(&apos;srvc0404&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"17\" expr=\"dataset.getSum(&apos;srvc0501&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"18\" expr=\"dataset.getSum(&apos;srvc0502&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"19\" expr=\"dataset.getSum(&apos;srvc0503&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"20\" expr=\"dataset.getSum(&apos;srvc0504&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"21\" expr=\"dataset.getSum(&apos;srvc0601&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"22\" expr=\"dataset.getSum(&apos;srvc0602&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"23\" expr=\"dataset.getSum(&apos;srvc0603&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"24\" expr=\"dataset.getSum(&apos;srvc0604&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"25\" expr=\"dataset.getSum(&apos;srvc0701&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"26\" expr=\"dataset.getSum(&apos;srvc0702&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"27\" expr=\"dataset.getSum(&apos;srvc0703&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"28\" expr=\"dataset.getSum(&apos;srvc0704&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"29\" expr=\"dataset.getSum(&apos;srvc0801&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"30\" expr=\"dataset.getSum(&apos;srvc0802&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"31\" expr=\"dataset.getSum(&apos;srvc0803&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"32\" expr=\"dataset.getSum(&apos;srvc0804&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"33\" expr=\"dataset.getSum(&apos;srvc0901&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"34\" expr=\"dataset.getSum(&apos;srvc0902&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"35\" expr=\"dataset.getSum(&apos;srvc0903&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"36\" expr=\"dataset.getSum(&apos;srvc0904&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"37\" expr=\"dataset.getSum(&apos;srvc1001&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"38\" expr=\"dataset.getSum(&apos;srvc1002&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"39\" expr=\"dataset.getSum(&apos;srvc1003&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"40\" expr=\"dataset.getSum(&apos;srvc1004&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"41\" expr=\"dataset.getSum(&apos;srvc1101&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"42\" expr=\"dataset.getSum(&apos;srvc1102&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"43\" expr=\"dataset.getSum(&apos;srvc1103&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"44\" expr=\"dataset.getSum(&apos;srvc1104&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"45\" expr=\"dataset.getSum(&apos;srvc1201&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"46\" expr=\"dataset.getSum(&apos;srvc1202&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"47\" expr=\"dataset.getSum(&apos;srvc1203&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"48\" expr=\"dataset.getSum(&apos;srvc1204&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"49\" expr=\"dataset.getSum(&apos;sum01&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"50\" expr=\"dataset.getSum(&apos;sum02&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"51\" expr=\"dataset.getSum(&apos;sum03&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"52\" expr=\"dataset.getSum(&apos;sum04&apos;)\" displaytype=\"number\" textAlign=\"right\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","316.00","0","45","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("false");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdRegi","371.00","0","45","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDw","426.00","0","124","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("다운로드(엑셀)");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal00","151.00","0","65","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("5");
            obj.set_text("목록수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Combo("cmbGrdList","226.00","0","80","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("6");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("Panel00","151","0","180","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("7");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTotal00\"/><PanelItem id=\"PanelItem01\" componentid=\"cmbGrdList\"/></Contents>");
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

            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.divSch.form.divEdtPop.form
            obj = new Layout("default","",0,0,this.divForm.form.divSch.form.divEdtPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.edtCoNm.set_taborder("0");
                p.edtCoNm.set_cssclass("edt_WF_EdtSch");
                p.edtCoNm.set_readonly("false");
                p.edtCoNm.move("0","0",null,"40","0",null);

                p.btnPop.set_taborder("1");
                p.btnPop.set_cssclass("btn_WF_EdtSch");
                p.btnPop.set_visible("true");
                p.btnPop.move("edtCoNm:-40","0","40","40",null,null);
            	}
            );
            this.divForm.form.divSch.form.divEdtPop.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divSch.form.divEdtPop.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divSch.form.divEdtPop.form,
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
                p.Panel00.set_taborder("7");
                p.Panel00.set_type("horizontal");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_flexgrow("1");
                p.Panel00.set_maxheight("");
                p.Panel00.set_minwidth("");
                p.Panel00.move("20.00","14","300","40",null,null);

                p.panLabel.set_taborder("0");
                p.panLabel.set_verticalgap("8");
                p.panLabel.set_flexwrap("wrap");
                p.panLabel.set_spacing("0px 0px 10px 0px");
                p.panLabel.set_type("horizontal");
                p.panLabel.set_flexcrossaxisalign("start");
                p.panLabel.set_horizontalgap("50");
                p.panLabel.set_fittocontents("height");
                p.panLabel.set_maxheight("");
                p.panLabel.move("20","14","100%","50",null,null);

                p.pan02.set_taborder("1");
                p.pan02.set_type("horizontal");
                p.pan02.set_horizontalgap("10");
                p.pan02.set_flexgrow("1");
                p.pan02.set_fittocontents("height");
                p.pan02.set_minwidth("");
                p.pan02.move("1694.00","398","300","40",null,null);

                p.panClose.set_taborder("3");
                p.panClose.set_type("vertical");
                p.panClose.set_cssclass("pal_WF_SchLine");
                p.panClose.set_flexcrossaxisalign("end");
                p.panClose.move("30","151","100%","30",null,null);

                p.btnSchClose.set_taborder("2");
                p.btnSchClose.set_cssclass("btn_WF_SchClose");
                p.btnSchClose.move("1251","185","30","30",null,null);

                p.panSchBtn.set_taborder("4");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100%","40",null,null);

                p.btnSch.set_taborder("5");
                p.btnSch.set_text("조회하기");
                p.btnSch.set_cssclass("btn_WF_Search");
                p.btnSch.set_fittocontents("width");
                p.btnSch.move("570","192","112","40",null,null);

                p.staLabel03.set_taborder("6");
                p.staLabel03.set_text("연기간");
                p.staLabel03.set_cssclass("sta_WF_SchLabel");
                p.staLabel03.set_flexshrink("0");
                p.staLabel03.set_maxwidth("");
                p.staLabel03.move("0","0","100","40",null,null);

                p.cmbYear.set_taborder("8");
                p.cmbYear.set_flexgrow("1");
                p.cmbYear.set_innerdataset("dsYear");
                p.cmbYear.set_codecolumn("cdId");
                p.cmbYear.set_datacolumn("cdNm");
                p.cmbYear.set_text("선택");
                p.cmbYear.set_value("");
                p.cmbYear.set_index("-1");
                p.cmbYear.move("788.00","145","20.42%","40",null,null);

                p.staLabel03_00.set_taborder("9");
                p.staLabel03_00.set_text("업체명");
                p.staLabel03_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel03_00.set_flexshrink("0");
                p.staLabel03_00.set_maxwidth("");
                p.staLabel03_00.move("0","0","100","40",null,null);

                p.divEdtPop.set_taborder("10");
                p.divEdtPop.set_text("Div00");
                p.divEdtPop.set_formscrollbartype("none none");
                p.divEdtPop.set_formscrolltype("none");
                p.divEdtPop.set_flexgrow("1");
                p.divEdtPop.move("43.00","393","100%","40",null,null);
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
                p.panLabel.move("132","47","100%","108",null,null);

                p.pan02.set_horizontalgap("8");
                p.pan02.move("1694.00","398","100%","45",null,null);

                p.Panel00.move("20.00","14","316","45",null,null);
            	}
            );
            obj.set_type("vertical");
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
                p.panGrdBtn.set_taborder("4");
                p.panGrdBtn.set_flexcrossaxisalign("start");
                p.panGrdBtn.set_flexcrossaxiswrapalign("start");
                p.panGrdBtn.set_flexmainaxisalign("end");
                p.panGrdBtn.set_horizontalgap("10");
                p.panGrdBtn.move("870","0","100%","34",null,null);

                p.grdList.set_taborder("0");
                p.grdList.set_binddataset("dsList");
                p.grdList.set_autofittype("none");
                p.grdList.set_flexgrow("1");
                p.grdList.move("0","54","100.00%","567",null,null);

                p.btnGrdDel.set_taborder("1");
                p.btnGrdDel.set_text("삭제");
                p.btnGrdDel.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel.set_visible("false");
                p.btnGrdDel.move("316.00","0","45","34",null,null);

                p.btnGrdRegi.set_taborder("2");
                p.btnGrdRegi.set_text("등록");
                p.btnGrdRegi.set_cssclass("btn_WF_SmallBlack");
                p.btnGrdRegi.set_visible("false");
                p.btnGrdRegi.set_fittocontents("width");
                p.btnGrdRegi.move("371.00","0","45","34",null,null);

                p.btnGrdDw.set_taborder("3");
                p.btnGrdDw.set_text("다운로드(엑셀)");
                p.btnGrdDw.set_cssclass("btn_WF_GrdDw");
                p.btnGrdDw.set_visible("true");
                p.btnGrdDw.set_fittocontents("width");
                p.btnGrdDw.move("426.00","0","124","34",null,null);

                p.staTotal00.set_taborder("5");
                p.staTotal00.set_text("목록수");
                p.staTotal00.set_cssclass("sta_WF_SchLabel");
                p.staTotal00.set_fittocontents("width");
                p.staTotal00.set_visible("false");
                p.staTotal00.move("151.00","0","65","34",null,null);

                p.cmbGrdList.set_taborder("6");
                p.cmbGrdList.set_visible("false");
                p.cmbGrdList.set_text("10");
                p.cmbGrdList.set_value("");
                p.cmbGrdList.set_index("-1");
                p.cmbGrdList.move("226.00","0","80","34",null,null);

                p.Panel00.set_taborder("7");
                p.Panel00.set_flexmainaxisalign("end");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.set_fittocontents("width");
                p.Panel00.move("151","0","180","34",null,null);
            	}
            );
            obj.set_verticalgap("10");
            obj.set_type("vertical");
            this.divForm.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdList.set_autofittype("none");

                p.panGrdBtn.set_flexwrap("wrap");
                p.panGrdBtn.set_verticalgap("10");
                p.panGrdBtn.move("870","0","100.00%","34",null,null);
            	}
            );
            obj.set_verticalgap("8");
            obj.set_type("vertical");
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
                p.divSch.move("0","0","100.00%","148",null,null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","30","100.00%","650",null,null);
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
                p.divSch.set_text("Div00");
                p.divSch.set_fittocontents("height");
                p.divSch.move("0","0","100%","206",null,null);

                p.divGrd.set_flexgrow("1");
                p.divGrd.move("0","30","100%","611",null,null);
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
                p.set_titletext("업체별통계");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","70",null,null,"60","0");

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
                p.divTitle.move("0","0",null,"50","60",null);
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
                p.divForm.move("0","70","100%","886",null,null);

                p.divTitle.move("0","0",null,"50","0",null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.divSch.form.cmbYear","value","dsSearch","year");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.registerScript("COM010M13.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	COM010M12.xfdl
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

        	var year = this.gfnGetDate("date").substr(0, 4);
        	for(var i=0; i<5; i++) {
        		var nRow = this.dsYear.addRow();
        		this.dsYear.setColumn(nRow, "cdId", nexacro.toNumber(year) + i);
        		this.dsYear.setColumn(nRow, "cdNm", nexacro.toNumber(year) + i);
        	}
        	this.divForm.form.divSch.form.cmbYear.index = 0;
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
        this.getSearchTransaction = function()
        {
        	var strSvcId    = "search";
        	var strSvcUrl   = "cic/statsPerBzentyInq.do";
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
        			break;
        	}
        };

        this.fnPopupCallback = function(sPopupId, sRtn)
        {
        	if(sPopupId =="coIdSearchPopup") {
        		if (this.gfnIsNull(sRtn)) return;
        		var objRtn = JSON.parse(sRtn);
        		this.dsSearch.setColumn(0, "trgtCoId", objRtn.coId);
        		this.divForm.form.divSch.form.divEdtPop.form.edtCoNm.value = objRtn.coNm;
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
        // 엑셀다운
        this.divForm_divGrd_btnGrdDw_onclick = function(obj,e)
        {
        	/*****  현재 그리드 화면을 엑셀로 다운로드 받음  *****/
        	this.exportObj = new ExcelExportObject();
        	var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.divForm.form.divGrd.form.grdList, "Sheet1!A1");
        	this.exportObj.set_exporturl("svcUrl::/XExportImport.do");
        	this.exportObj.exportData();
        	/*****  현재 그리드 화면을 엑셀로 다운로드 받음  *****/
        };

        // 처리목록 오픈
        this.divForm_divGrd_grdList_oncellclick = function(obj,e)
        {
        	if(e.cell != 0) {
        		if(obj.getCellValue(e.row, e.cell) != 0) {
        			var sMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        			var sMenuUrl = 'work::COM/cic/COM010M07.xfdl';
        			var actNm = '처리목록조회';
        			var objArg = {};
        			this.gfnPageOpen(sMenuId, sMenuUrl, actNm, objArg);
        		}
        	}
        };

        // 회사 팝업
        this.divForm_Div00_divEdtPop_btnPop_onclick = function(obj,e)
        {
        	var sTitle = "회사 목록";
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

        	this.gfnOpenPopup("coIdSearchPopup", "work::COM/crtr/COM100P01.xfdl", objArg, sPopupCallBack, objOption);
        };

        this.divForm_divSch_divEdtPop_edtCoNm_onchanged = function(obj,e)
        {
        	this.dsSearch.setColumn(0, "trgtCoId", "");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divSch.form.btnSchClose.addEventHandler("onclick",this.divForm_divSch_btnSchClose_onclick,this);
            this.divForm.form.divSch.form.btnSch.addEventHandler("onclick",this.cfnSearch,this);
            this.divForm.form.divSch.form.divEdtPop.form.edtCoNm.addEventHandler("onchanged",this.divForm_divSch_divEdtPop_edtCoNm_onchanged,this);
            this.divForm.form.divSch.form.divEdtPop.form.btnPop.addEventHandler("onclick",this.divForm_Div00_divEdtPop_btnPop_onclick,this);
            this.divForm.form.divGrd.form.grdList.addEventHandler("oncellclick",this.divForm_divGrd_grdList_oncellclick,this);
            this.divForm.form.divGrd.form.btnGrdDw.addEventHandler("onclick",this.divForm_divGrd_btnGrdDw_onclick,this);
        };
        this.loadIncludeScript("COM010M13.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
