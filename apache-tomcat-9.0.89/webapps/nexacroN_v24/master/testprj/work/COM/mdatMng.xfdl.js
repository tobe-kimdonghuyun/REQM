(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("mdatMng");
            this.set_titletext("메타정보관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"wordNm\" type=\"STRING\" size=\"256\"/><Column id=\"wordEngAbbrNm\" type=\"STRING\" size=\"256\"/><Column id=\"wordEngNm\" type=\"STRING\" size=\"256\"/><Column id=\"wordExpln\" type=\"STRING\" size=\"256\"/><Column id=\"wordRowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"wordNowPgNo\" type=\"STRING\" size=\"256\"/><Column id=\"wordCntPrPg\" type=\"STRING\" size=\"256\"/><Column id=\"trmNm\" type=\"STRING\" size=\"256\"/><Column id=\"trmEngAbbrNm\" type=\"STRING\" size=\"256\"/><Column id=\"trmEngNm\" type=\"STRING\" size=\"256\"/><Column id=\"trmExpln\" type=\"STRING\" size=\"256\"/><Column id=\"trmRowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"trmNowPgNo\" type=\"STRING\" size=\"256\"/><Column id=\"trmCntPrPg\" type=\"STRING\" size=\"256\"/><Column id=\"dmnGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"dmnClsfNm\" type=\"STRING\" size=\"256\"/><Column id=\"dmnNm\" type=\"STRING\" size=\"256\"/><Column id=\"dmnExpln\" type=\"STRING\" size=\"256\"/><Column id=\"dmnRowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"dmnNowPgNo\" type=\"STRING\" size=\"256\"/><Column id=\"dmnCntPrPg\" type=\"STRING\" size=\"256\"/><Column id=\"dfnKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"dfnEngAbbrNm\" type=\"STRING\" size=\"256\"/><Column id=\"dfnEngNm\" type=\"STRING\" size=\"256\"/><Column id=\"dfnNowPgNo\" type=\"STRING\" size=\"256\"/><Column id=\"dfnCntPrPg\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"wordCntPrPg\">100</Col><Col id=\"wordNowPgNo\">1</Col><Col id=\"trmNowPgNo\">1</Col><Col id=\"trmCntPrPg\">100</Col><Col id=\"dmnNowPgNo\">1</Col><Col id=\"dmnCntPrPg\">100</Col><Col id=\"dfnNowPgNo\">1</Col><Col id=\"dfnCntPrPg\">100</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWordList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"chc\" type=\"INT\" size=\"1\"/><Column id=\"wordNm\" type=\"STRING\" size=\"256\"/><Column id=\"engAbbrNm\" type=\"STRING\" size=\"256\"/><Column id=\"engNm\" type=\"STRING\" size=\"256\"/><Column id=\"wordExpln\" type=\"STRING\" size=\"256\"/><Column id=\"synmList\" type=\"STRING\" size=\"256\"/><Column id=\"phbtList\" type=\"STRING\" size=\"256\"/><Column id=\"frmWordYn\" type=\"STRING\" size=\"256\"/><Column id=\"comStdDmnClsfNm\" type=\"STRING\" size=\"256\"/><Column id=\"stdSe\" type=\"STRING\" size=\"256\"/><Column id=\"tpcTrty\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/><Column id=\"allCnt\" type=\"STRING\" size=\"256\"/><Column id=\"rowId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTrmList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"chc\" type=\"INT\" size=\"1\"/><Column id=\"trmNm\" type=\"STRING\" size=\"256\"/><Column id=\"engAbbrNm\" type=\"STRING\" size=\"256\"/><Column id=\"engNm\" type=\"STRING\" size=\"256\"/><Column id=\"trmExpln\" type=\"STRING\" size=\"256\"/><Column id=\"synmList\" type=\"STRING\" size=\"256\"/><Column id=\"dmnNm\" type=\"STRING\" size=\"256\"/><Column id=\"prmVl\" type=\"STRING\" size=\"256\"/><Column id=\"strgFrm\" type=\"STRING\" size=\"256\"/><Column id=\"exprsFrm\" type=\"STRING\" size=\"256\"/><Column id=\"pbadmsStdCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"stdSe\" type=\"STRING\" size=\"256\"/><Column id=\"tpcTrty\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/><Column id=\"allCnt\" type=\"STRING\" size=\"256\"/><Column id=\"rowId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDmnList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"chc\" type=\"INT\" size=\"1\"/><Column id=\"groupNm\" type=\"STRING\" size=\"256\"/><Column id=\"clsfNm\" type=\"STRING\" size=\"256\"/><Column id=\"dmnNm\" type=\"STRING\" size=\"256\"/><Column id=\"dmnExpln\" type=\"STRING\" size=\"256\"/><Column id=\"datType\" type=\"STRING\" size=\"256\"/><Column id=\"datLen\" type=\"STRING\" size=\"256\"/><Column id=\"datDcptLen\" type=\"STRING\" size=\"256\"/><Column id=\"prmVl\" type=\"STRING\" size=\"256\"/><Column id=\"strgFrm\" type=\"STRING\" size=\"256\"/><Column id=\"exprsFrm\" type=\"STRING\" size=\"256\"/><Column id=\"unit\" type=\"STRING\" size=\"256\"/><Column id=\"stdSe\" type=\"STRING\" size=\"256\"/><Column id=\"pbadmsStdCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/><Column id=\"allCnt\" type=\"STRING\" size=\"256\"/><Column id=\"rowId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTrmDfnList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"trmNm\" type=\"STRING\" size=\"256\"/><Column id=\"dfnNm\" type=\"STRING\" size=\"256\"/><Column id=\"engNm\" type=\"STRING\" size=\"256\"/><Column id=\"cmlNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTrmDfnRow", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"trmNm\" type=\"STRING\" size=\"256\"/><Column id=\"dfnNm\" type=\"STRING\" size=\"256\"/><Column id=\"engNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWordListDfn", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"chc\" type=\"INT\" size=\"1\"/><Column id=\"wordNm\" type=\"STRING\" size=\"256\"/><Column id=\"engAbbrNm\" type=\"STRING\" size=\"256\"/><Column id=\"engNm\" type=\"STRING\" size=\"256\"/><Column id=\"wordExpln\" type=\"STRING\" size=\"256\"/><Column id=\"synmList\" type=\"STRING\" size=\"256\"/><Column id=\"phbtList\" type=\"STRING\" size=\"256\"/><Column id=\"frmWordYn\" type=\"STRING\" size=\"256\"/><Column id=\"comStdDmnClsfNm\" type=\"STRING\" size=\"256\"/><Column id=\"stdSe\" type=\"STRING\" size=\"256\"/><Column id=\"tpcTrty\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/><Column id=\"allCnt\" type=\"STRING\" size=\"256\"/><Column id=\"rowId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTrmListDfn", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"chc\" type=\"INT\" size=\"1\"/><Column id=\"trmNm\" type=\"STRING\" size=\"256\"/><Column id=\"engAbbrNm\" type=\"STRING\" size=\"256\"/><Column id=\"engNm\" type=\"STRING\" size=\"256\"/><Column id=\"trmExpln\" type=\"STRING\" size=\"256\"/><Column id=\"synmList\" type=\"STRING\" size=\"256\"/><Column id=\"dmnNm\" type=\"STRING\" size=\"256\"/><Column id=\"prmVl\" type=\"STRING\" size=\"256\"/><Column id=\"strgFrm\" type=\"STRING\" size=\"256\"/><Column id=\"exprsFrm\" type=\"STRING\" size=\"256\"/><Column id=\"pbadmsStdCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"stdSe\" type=\"STRING\" size=\"256\"/><Column id=\"tpcTrty\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRowSttsCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"rowSttsNm\">전체</Col></Row><Row><Col id=\"rowSttsCd\">I</Col><Col id=\"rowSttsNm\">신규</Col></Row><Row><Col id=\"rowSttsCd\">U</Col><Col id=\"rowSttsNm\">적용</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tabMain","20","20",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_background("border-box");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tpgWord",this.tabMain);
            obj.set_text("단어관리");
            this.tabMain.addChild(obj.name, obj);

            obj = new Div("divForm","0","0",null,"900","20",null,null,null,null,null,this.tabMain.tpgWord.form);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.tabMain.tpgWord.addChild(obj.name, obj);

            obj = new Div("divSch","0","0","100%","198",null,null,null,null,null,null,this.tabMain.tpgWord.form.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.tabMain.tpgWord.form.divForm.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","100%","102",null,null,null,null,null,null,this.tabMain.tpgWord.form.divForm.form.divSch.form);
            obj.set_taborder("12");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("40");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"pan00\"/><PanelItem id=\"PanelItem04\" componentid=\"pan01\"/><PanelItem id=\"PanelItem00\" componentid=\"pan02\"/><PanelItem id=\"PanelItem03\" componentid=\"pan03\"/><PanelItem id=\"PanelItem05\" componentid=\"pan01_00\"/></Contents>");
            this.tabMain.tpgWord.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan02","1694.00","398","430","45",null,null,null,null,"45",null,this.tabMain.tpgWord.form.divForm.form.divSch.form);
            obj.set_taborder("8");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtEngNm\"/></Contents>");
            this.tabMain.tpgWord.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01","0","0","100","40",null,null,null,null,null,null,this.tabMain.tpgWord.form.divForm.form.divSch.form);
            obj.set_taborder("13");
            obj.set_text("영문명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.tabMain.tpgWord.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel","0","0","100","40",null,null,null,null,null,null,this.tabMain.tpgWord.form.divForm.form.divSch.form);
            obj.set_taborder("14");
            obj.set_text("영문약어명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.tabMain.tpgWord.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01","1694.00","398","430","40",null,null,null,null,null,null,this.tabMain.tpgWord.form.divForm.form.divSch.form);
            obj.set_taborder("7");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staLabel\"/><PanelItem id=\"PanelItem00\" componentid=\"edtEngAbbrNm\"/></Contents>");
            this.tabMain.tpgWord.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel02","0","0","100","40",null,null,null,null,null,null,this.tabMain.tpgWord.form.divForm.form.divSch.form);
            obj.set_taborder("15");
            obj.set_text("단어설명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.tabMain.tpgWord.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan03","1694.00","398","430","45",null,null,null,null,null,null,this.tabMain.tpgWord.form.divForm.form.divSch.form);
            obj.set_taborder("9");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02\"/><PanelItem id=\"PanelItem01\" componentid=\"edtWordExpln\"/></Contents>");
            this.tabMain.tpgWord.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtEngAbbrNm","619.00","14","100%","40",null,null,null,null,null,null,this.tabMain.tpgWord.form.divForm.form.divSch.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("[%]검색어[%]");
            this.tabMain.tpgWord.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtEngNm","1070","14","100%","40",null,null,null,null,null,null,this.tabMain.tpgWord.form.divForm.form.divSch.form);
            obj.set_taborder("2");
            obj.set_displaynulltext("[%]검색어[%]");
            this.tabMain.tpgWord.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtWordExpln","130","67","100%","40",null,null,null,null,null,null,this.tabMain.tpgWord.form.divForm.form.divSch.form);
            obj.set_taborder("3");
            obj.set_displaynulltext("[%]검색어[%]");
            this.tabMain.tpgWord.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan00","20.00","67","430","45",null,null,null,null,null,null,this.tabMain.tpgWord.form.divForm.form.divSch.form);
            obj.set_taborder("16");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03\"/><PanelItem id=\"PanelItem01\" componentid=\"edtWordNm\"/></Contents>");
            this.tabMain.tpgWord.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03","0","0","100","40",null,null,null,null,null,null,this.tabMain.tpgWord.form.divForm.form.divSch.form);
            obj.set_taborder("19");
            obj.set_text("단어명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.tabMain.tpgWord.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panClose","30","151","100%","30",null,null,null,null,null,null,this.tabMain.tpgWord.form.divForm.form.divSch.form);
            obj.set_taborder("18");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnInqClose\"/></Contents>");
            this.tabMain.tpgWord.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnInqClose","1251","185","52","29",null,null,null,null,null,null,this.tabMain.tpgWord.form.divForm.form.divSch.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_SchClose");
            this.tabMain.tpgWord.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.tabMain.tpgWord.form.divForm.form.divSch.form);
            obj.set_taborder("11");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnWordInq\"/></Contents>");
            this.tabMain.tpgWord.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnWordInq","653.00","146","126","40",null,null,null,null,null,null,this.tabMain.tpgWord.form.divForm.form.divSch.form);
            obj.set_taborder("5");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            this.tabMain.tpgWord.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel00","0","0","100","40",null,null,null,null,null,null,this.tabMain.tpgWord.form.divForm.form.divSch.form);
            obj.set_taborder("6");
            obj.set_text("상태코드");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.tabMain.tpgWord.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01_00","490.00","67","269","40",null,null,null,null,null,null,this.tabMain.tpgWord.form.divForm.form.divSch.form);
            obj.set_taborder("10");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem00\" componentid=\"Combo00\"/></Contents>");
            this.tabMain.tpgWord.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("Combo00","792","88","150","40",null,null,null,null,null,null,this.tabMain.tpgWord.form.divForm.form.divSch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsRowSttsCd");
            obj.set_codecolumn("rowSttsCd");
            obj.set_datacolumn("rowSttsNm");
            obj.set_text("Combo00");
            this.tabMain.tpgWord.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtWordNm","130.00","14","100%","40",null,null,null,null,null,null,this.tabMain.tpgWord.form.divForm.form.divSch.form);
            obj.set_taborder("0");
            obj.set_displaynulltext("[%]검색어[%]");
            this.tabMain.tpgWord.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","0","divSch:30","100.00%","700",null,null,null,null,null,null,this.tabMain.tpgWord.form.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.tabMain.tpgWord.form.divForm.addChild(obj.name, obj);

            obj = new Div("divPage","0","567","100.00%","36",null,null,null,null,"36",null,this.tabMain.tpgWord.form.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("work::COM/util/paging/paging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.tabMain.tpgWord.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn","0","0","100%","34",null,null,null,null,null,null,this.tabMain.tpgWord.form.divForm.form.divGrd.form);
            obj.set_taborder("5");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTotal00\"/><PanelItem id=\"PanelItem01\" componentid=\"cmbWordCntPrPg\"/><PanelItem id=\"PanelItem03\" componentid=\"btnWordAdd\"/><PanelItem id=\"PanelItem07\" componentid=\"btnWordDel\"/><PanelItem id=\"PanelItem04\" componentid=\"btnWordStrg\"/><PanelItem id=\"PanelItem06\" componentid=\"btnWordDwnldExcel\"/><PanelItem id=\"PanelItem05\" componentid=\"btnStng\"/></Contents>");
            this.tabMain.tpgWord.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdWordList","0","PanelGrdBtn:20","100.00%",null,null,"divPage:30",null,null,null,null,this.tabMain.tpgWord.form.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsWordList");
            obj.set_autofittype("col");
            obj.set_extendsizetype("row");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"151\"/><Column size=\"105\"/><Column size=\"200\"/><Column size=\"374\"/><Column size=\"141\"/><Column size=\"100\"/><Column size=\"142\"/><Column size=\"188\"/><Column size=\"93\"/><Column size=\"89\"/><Column size=\"12\"/><Column size=\"200\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" text=\"단어명\"/><Cell col=\"2\" text=\"영문약어명\"/><Cell col=\"3\" text=\"영문명\"/><Cell col=\"4\" text=\"단어설명\"/><Cell col=\"5\" text=\"이음동의어목록\"/><Cell col=\"6\" text=\"금칙어목록\"/><Cell col=\"7\" text=\"형식단어여부\"/><Cell col=\"8\" text=\"공통표준도메인분류명\"/><Cell col=\"9\" text=\"표준구분\"/><Cell col=\"10\" text=\"주제영역\"/><Cell col=\"11\" text=\"상태코드\"/><Cell col=\"12\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chc\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:wordNm\"/><Cell col=\"2\" text=\"bind:engAbbrNm\" displaytype=\"normal\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:engNm\" displaytype=\"normal\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:wordExpln\" displaytype=\"text\" edittype=\"text\" textareascrolltype=\"none\" textareascrollbartype=\"default default\"/><Cell col=\"5\" text=\"bind:synmList\" displaytype=\"normal\" edittype=\"normal\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:phbtList\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:frmWordYn\" displaytype=\"normal\" edittype=\"normal\"/><Cell col=\"8\" edittype=\"normal\" displaytype=\"normal\" text=\"bind:comStdDmnClsfNm\"/><Cell col=\"9\" edittype=\"normal\" displaytype=\"normal\" text=\"bind:stdSe\"/><Cell col=\"10\" edittype=\"normal\" displaytype=\"normal\" text=\"bind:tpcTrty\"/><Cell col=\"11\" text=\"bind:rowSttsCd\" displaytype=\"combotext\" combodataset=\"dsRowSttsCd\" combocodecol=\"rowSttsCd\" combodatacol=\"rowSttsNm\"/><Cell col=\"12\" displaytype=\"normal\" edittype=\"textarea\"/></Band></Format></Formats>");
            this.tabMain.tpgWord.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","27","34",null,null,null,null,null,null,this.tabMain.tpgWord.form.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.tabMain.tpgWord.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staWordTnocs","staTotal:0","0","43","34",null,null,null,null,null,null,this.tabMain.tpgWord.form.divForm.form.divGrd.form);
            obj.set_taborder("9");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_textAlign("center");
            obj.set_fittocontents("width");
            obj.set_expr("comp.parent.parent.parent.parent.parent.parent.parent.parent.dsWordList.getColumn(0, \"allCnt\") || 0");
            this.tabMain.tpgWord.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","staWordTnocs:0","0","30","34",null,null,null,null,null,null,this.tabMain.tpgWord.form.divForm.form.divGrd.form);
            obj.set_taborder("11");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.tabMain.tpgWord.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Combo("cmbWordCntPrPg","1230","0","80","34",null,null,null,null,null,null,this.tabMain.tpgWord.form.divForm.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var tabMain_tpgWord_form_divForm_form_divGrd_form_cmbWordCntPrPg_innerdataset = new nexacro.NormalDataset("tabMain_tpgWord_form_divForm_form_divGrd_form_cmbWordCntPrPg_innerdataset", obj);
            tabMain_tpgWord_form_divForm_form_divGrd_form_cmbWordCntPrPg_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row><Row><Col id=\"codecolumn\">10000</Col><Col id=\"datacolumn\">전체(만건)</Col></Row></Rows>");
            obj.set_innerdataset(tabMain_tpgWord_form_divForm_form_divGrd_form_cmbWordCntPrPg_innerdataset);
            obj.set_text("10");
            obj.set_value("10");
            obj.set_index("0");
            this.tabMain.tpgWord.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal00","1165","0","65","34",null,null,null,null,null,null,this.tabMain.tpgWord.form.divForm.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("목록수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.tabMain.tpgWord.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnWordAdd","980.00","0","96","34",null,null,null,null,null,null,this.tabMain.tpgWord.form.divForm.form.divGrd.form);
            obj.set_taborder("7");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.tabMain.tpgWord.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnWordStrg","804.00","10","96","34",null,null,null,null,null,null,this.tabMain.tpgWord.form.divForm.form.divGrd.form);
            obj.set_taborder("8");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.tabMain.tpgWord.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnWordDwnldExcel","1280.00","0","100","34",null,null,null,null,null,null,this.tabMain.tpgWord.form.divForm.form.divGrd.form);
            obj.set_taborder("6");
            obj.set_text("다운로드");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.tabMain.tpgWord.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnWordDel","1080.00","0","96","34",null,null,null,null,null,null,this.tabMain.tpgWord.form.divForm.form.divGrd.form);
            obj.set_taborder("10");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.tabMain.tpgWord.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnStng","1411","8","96","34",null,null,null,null,null,null,this.tabMain.tpgWord.form.divForm.form.divGrd.form);
            obj.set_taborder("12");
            obj.set_text("설정");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.tabMain.tpgWord.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Tabpage("tpgTrm",this.tabMain);
            obj.set_text("용어관리");
            this.tabMain.addChild(obj.name, obj);

            obj = new Div("divForm","0","0",null,"900","20",null,null,null,null,null,this.tabMain.tpgTrm.form);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.tabMain.tpgTrm.addChild(obj.name, obj);

            obj = new Div("divSch","0","0","100%","198",null,null,null,null,null,null,this.tabMain.tpgTrm.form.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.tabMain.tpgTrm.form.divForm.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","100%","102",null,null,null,null,null,null,this.tabMain.tpgTrm.form.divForm.form.divSch.form);
            obj.set_taborder("10");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("40");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"pan00\"/><PanelItem id=\"PanelItem04\" componentid=\"pan01\"/><PanelItem id=\"PanelItem00\" componentid=\"pan02\"/><PanelItem id=\"PanelItem03\" componentid=\"pan03\"/><PanelItem id=\"PanelItem05\" componentid=\"pan01_00\"/></Contents>");
            this.tabMain.tpgTrm.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan02","1694.00","398","430","45",null,null,null,null,"45",null,this.tabMain.tpgTrm.form.divForm.form.divSch.form);
            obj.set_taborder("7");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtEngNm\"/></Contents>");
            this.tabMain.tpgTrm.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01","0","0","100","40",null,null,null,null,null,null,this.tabMain.tpgTrm.form.divForm.form.divSch.form);
            obj.set_taborder("11");
            obj.set_text("영문명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.tabMain.tpgTrm.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel","0","0","100","40",null,null,null,null,null,null,this.tabMain.tpgTrm.form.divForm.form.divSch.form);
            obj.set_taborder("12");
            obj.set_text("영문약어명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.tabMain.tpgTrm.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01","1694.00","398","430","40",null,null,null,null,null,null,this.tabMain.tpgTrm.form.divForm.form.divSch.form);
            obj.set_taborder("6");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staLabel\"/><PanelItem id=\"PanelItem00\" componentid=\"edtEngAbbrNm\"/></Contents>");
            this.tabMain.tpgTrm.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel02","0","0","100","40",null,null,null,null,null,null,this.tabMain.tpgTrm.form.divForm.form.divSch.form);
            obj.set_taborder("13");
            obj.set_text("용어설명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.tabMain.tpgTrm.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan03","1694.00","398","430","45",null,null,null,null,null,null,this.tabMain.tpgTrm.form.divForm.form.divSch.form);
            obj.set_taborder("8");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02\"/><PanelItem id=\"PanelItem01\" componentid=\"edtWordExpln\"/></Contents>");
            this.tabMain.tpgTrm.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtEngAbbrNm","130","67","320","40",null,null,null,null,null,null,this.tabMain.tpgTrm.form.divForm.form.divSch.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("[%]검색어[%]");
            this.tabMain.tpgTrm.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtEngNm","1070","14","359","40",null,null,null,null,null,null,this.tabMain.tpgTrm.form.divForm.form.divSch.form);
            obj.set_taborder("2");
            obj.set_displaynulltext("[%]검색어[%]");
            this.tabMain.tpgTrm.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtWordExpln","130","67","369","40",null,null,null,null,null,null,this.tabMain.tpgTrm.form.divForm.form.divSch.form);
            obj.set_taborder("3");
            obj.set_displaynulltext("[%]검색어[%]");
            this.tabMain.tpgTrm.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan00","20.00","67","430","45",null,null,null,null,null,null,this.tabMain.tpgTrm.form.divForm.form.divSch.form);
            obj.set_taborder("14");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03\"/><PanelItem id=\"PanelItem01\" componentid=\"edtTrmNm\"/></Contents>");
            this.tabMain.tpgTrm.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtTrmNm","1270","10","320","40",null,null,null,null,null,null,this.tabMain.tpgTrm.form.divForm.form.divSch.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_displaynulltext("[%]검색어[%]");
            this.tabMain.tpgTrm.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03","0","0","100","40",null,null,null,null,null,null,this.tabMain.tpgTrm.form.divForm.form.divSch.form);
            obj.set_taborder("18");
            obj.set_text("용어명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.tabMain.tpgTrm.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panClose","30","151","100%","30",null,null,null,null,null,null,this.tabMain.tpgTrm.form.divForm.form.divSch.form);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnInqClose\"/></Contents>");
            this.tabMain.tpgTrm.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnInqClose","1251","185","52","29",null,null,null,null,null,null,this.tabMain.tpgTrm.form.divForm.form.divSch.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_SchClose");
            this.tabMain.tpgTrm.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.tabMain.tpgTrm.form.divForm.form.divSch.form);
            obj.set_taborder("17");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnTrmInq\"/></Contents>");
            this.tabMain.tpgTrm.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnTrmInq","653.00","146","126","40",null,null,null,null,null,null,this.tabMain.tpgTrm.form.divForm.form.divSch.form);
            obj.set_taborder("5");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            this.tabMain.tpgTrm.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel00","0","0","100","40",null,null,null,null,null,null,this.tabMain.tpgTrm.form.divForm.form.divSch.form);
            obj.set_taborder("19");
            obj.set_text("상태코드");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.tabMain.tpgTrm.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("Combo00","792","88","150","40",null,null,null,null,null,null,this.tabMain.tpgTrm.form.divForm.form.divSch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsRowSttsCd");
            obj.set_codecolumn("rowSttsCd");
            obj.set_datacolumn("rowSttsNm");
            obj.set_text("Combo00");
            this.tabMain.tpgTrm.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01_00","490.00","67","269","40",null,null,null,null,null,null,this.tabMain.tpgTrm.form.divForm.form.divSch.form);
            obj.set_taborder("9");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem00\" componentid=\"Combo00\"/></Contents>");
            this.tabMain.tpgTrm.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","0","divSch:30","100.00%","700",null,null,null,null,null,null,this.tabMain.tpgTrm.form.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.tabMain.tpgTrm.form.divForm.addChild(obj.name, obj);

            obj = new Div("divPage","0","567","100.00%","36",null,null,null,null,"36",null,this.tabMain.tpgTrm.form.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("work::COM/util/paging/paging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.tabMain.tpgTrm.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn","0","0","100%","34",null,null,null,null,null,null,this.tabMain.tpgTrm.form.divForm.form.divGrd.form);
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTotal00\"/><PanelItem id=\"PanelItem01\" componentid=\"cmbTrmCntPrPg\"/><PanelItem id=\"PanelItem03\" componentid=\"btnTrmAdd\"/><PanelItem id=\"PanelItem07\" componentid=\"btnTrmDel\"/><PanelItem id=\"PanelItem04\" componentid=\"btnTrmStrg\"/><PanelItem id=\"PanelItem06\" componentid=\"btnTrmDwnldExcel\"/></Contents>");
            this.tabMain.tpgTrm.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdTrmList","0","PanelGrdBtn:20","100.00%",null,null,"divPage:30",null,null,null,null,this.tabMain.tpgTrm.form.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsTrmList");
            obj.set_autofittype("col");
            obj.set_extendsizetype("row");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"151\"/><Column size=\"105\"/><Column size=\"200\"/><Column size=\"374\"/><Column size=\"141\"/><Column size=\"100\"/><Column size=\"142\"/><Column size=\"138\"/><Column size=\"93\"/><Column size=\"133\"/><Column size=\"88\"/><Column size=\"89\"/><Column size=\"82\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"용어명\"/><Cell col=\"2\" text=\"영문약어명\"/><Cell col=\"3\" text=\"영문명\"/><Cell col=\"4\" text=\"용어설명\"/><Cell col=\"5\" text=\"이음동의어목록\"/><Cell col=\"6\" text=\"도메인명\"/><Cell col=\"7\" text=\"허용값\"/><Cell col=\"8\" text=\"저장형식\"/><Cell col=\"9\" text=\"표현형식\"/><Cell col=\"10\" text=\"행정표준코드명\"/><Cell col=\"11\" text=\"표준구분\"/><Cell col=\"12\" text=\"주제영역\"/><Cell col=\"13\" text=\"상태코드\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chc\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:trmNm\"/><Cell col=\"2\" text=\"bind:engAbbrNm\" displaytype=\"normal\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:engNm\" displaytype=\"normal\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:trmExpln\" displaytype=\"normal\" edittype=\"textarea\" textareascrolltype=\"none\" textareascrollbartype=\"none none\"/><Cell col=\"5\" text=\"bind:synmList\" displaytype=\"normal\" edittype=\"normal\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:dmnNm\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:prmVl\" displaytype=\"normal\" edittype=\"normal\"/><Cell col=\"8\" edittype=\"normal\" displaytype=\"normal\" text=\"bind:strgFrm\"/><Cell col=\"9\" edittype=\"normal\" displaytype=\"normal\" text=\"bind:exprsFrm\"/><Cell col=\"10\" text=\"bind:pbadmsStdCdNm\"/><Cell col=\"11\" text=\"bind:stdSe\"/><Cell col=\"12\" edittype=\"normal\" displaytype=\"normal\" text=\"bind:tpcTrty\"/><Cell col=\"13\" text=\"bind:rowSttsCd\" displaytype=\"combotext\" combodataset=\"dsRowSttsCd\" combocodecol=\"rowSttsCd\" combodatacol=\"rowSttsNm\"/></Band></Format></Formats>");
            this.tabMain.tpgTrm.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","27","34",null,null,null,null,null,null,this.tabMain.tpgTrm.form.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.tabMain.tpgTrm.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTrmTnocs","staTotal:0","0","43","34",null,null,null,null,null,null,this.tabMain.tpgTrm.form.divForm.form.divGrd.form);
            obj.set_taborder("9");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_textAlign("center");
            obj.set_fittocontents("width");
            obj.set_expr("comp.parent.parent.parent.parent.parent.parent.parent.parent.dsTrmList.getColumn(0, \"allCnt\") || 0");
            this.tabMain.tpgTrm.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","staTrmTnocs:0","0","30","34",null,null,null,null,null,null,this.tabMain.tpgTrm.form.divForm.form.divGrd.form);
            obj.set_taborder("11");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.tabMain.tpgTrm.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Combo("cmbTrmCntPrPg","1230","0","80","34",null,null,null,null,null,null,this.tabMain.tpgTrm.form.divForm.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var tabMain_tpgTrm_form_divForm_form_divGrd_form_cmbTrmCntPrPg_innerdataset = new nexacro.NormalDataset("tabMain_tpgTrm_form_divForm_form_divGrd_form_cmbTrmCntPrPg_innerdataset", obj);
            tabMain_tpgTrm_form_divForm_form_divGrd_form_cmbTrmCntPrPg_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row><Row><Col id=\"codecolumn\">10000</Col><Col id=\"datacolumn\">전체(만건)</Col></Row></Rows>");
            obj.set_innerdataset(tabMain_tpgTrm_form_divForm_form_divGrd_form_cmbTrmCntPrPg_innerdataset);
            obj.set_text("10");
            obj.set_value("10");
            obj.set_index("0");
            this.tabMain.tpgTrm.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal00","1165","0","65","34",null,null,null,null,null,null,this.tabMain.tpgTrm.form.divForm.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("목록수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.tabMain.tpgTrm.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnTrmAdd","980.00","0","96","34",null,null,null,null,null,null,this.tabMain.tpgTrm.form.divForm.form.divGrd.form);
            obj.set_taborder("7");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.tabMain.tpgTrm.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnTrmStrg","804.00","10","96","34",null,null,null,null,null,null,this.tabMain.tpgTrm.form.divForm.form.divGrd.form);
            obj.set_taborder("8");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.tabMain.tpgTrm.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnTrmDwnldExcel","1280.00","0","100","34",null,null,null,null,null,null,this.tabMain.tpgTrm.form.divForm.form.divGrd.form);
            obj.set_taborder("6");
            obj.set_text("다운로드");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.tabMain.tpgTrm.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnTrmDel","1080.00","0","96","34",null,null,null,null,null,null,this.tabMain.tpgTrm.form.divForm.form.divGrd.form);
            obj.set_taborder("10");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.tabMain.tpgTrm.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Tabpage("tpgDmn",this.tabMain);
            obj.set_text("도메인관리");
            this.tabMain.addChild(obj.name, obj);

            obj = new Div("divForm","0","0",null,"900","20",null,null,null,null,null,this.tabMain.tpgDmn.form);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.tabMain.tpgDmn.addChild(obj.name, obj);

            obj = new Div("divSch","0","0","100%","198",null,null,null,null,null,null,this.tabMain.tpgDmn.form.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.tabMain.tpgDmn.form.divForm.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","100%","102",null,null,null,null,null,null,this.tabMain.tpgDmn.form.divForm.form.divSch.form);
            obj.set_taborder("10");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("40");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"pan00\"/><PanelItem id=\"PanelItem04\" componentid=\"pan01\"/><PanelItem id=\"PanelItem00\" componentid=\"pan02\"/><PanelItem id=\"PanelItem03\" componentid=\"pan03\"/><PanelItem id=\"PanelItem05\" componentid=\"pan01_00\"/></Contents>");
            this.tabMain.tpgDmn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan02","1694.00","398","430","45",null,null,null,null,"45",null,this.tabMain.tpgDmn.form.divForm.form.divSch.form);
            obj.set_taborder("7");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtEngNm\"/></Contents>");
            this.tabMain.tpgDmn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01","0","0","100","40",null,null,null,null,null,null,this.tabMain.tpgDmn.form.divForm.form.divSch.form);
            obj.set_taborder("11");
            obj.set_text("도메인명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.tabMain.tpgDmn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel","0","0","100","40",null,null,null,null,null,null,this.tabMain.tpgDmn.form.divForm.form.divSch.form);
            obj.set_taborder("12");
            obj.set_text("분류명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.tabMain.tpgDmn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01","1694.00","398","430","40",null,null,null,null,null,null,this.tabMain.tpgDmn.form.divForm.form.divSch.form);
            obj.set_taborder("6");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staLabel\"/><PanelItem id=\"PanelItem00\" componentid=\"edtEngAbbrNm\"/></Contents>");
            this.tabMain.tpgDmn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel02","0","0","100","40",null,null,null,null,null,null,this.tabMain.tpgDmn.form.divForm.form.divSch.form);
            obj.set_taborder("13");
            obj.set_text("도메인설명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.tabMain.tpgDmn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan03","1694.00","398","430","45",null,null,null,null,null,null,this.tabMain.tpgDmn.form.divForm.form.divSch.form);
            obj.set_taborder("8");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02\"/><PanelItem id=\"PanelItem01\" componentid=\"edtWordExpln\"/></Contents>");
            this.tabMain.tpgDmn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtEngAbbrNm","130","67","320","40",null,null,null,null,null,null,this.tabMain.tpgDmn.form.divForm.form.divSch.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("[%]검색어[%]");
            this.tabMain.tpgDmn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtEngNm","1070","14","359","40",null,null,null,null,null,null,this.tabMain.tpgDmn.form.divForm.form.divSch.form);
            obj.set_taborder("2");
            obj.set_displaynulltext("[%]검색어[%]");
            this.tabMain.tpgDmn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtWordExpln","130","67","369","40",null,null,null,null,null,null,this.tabMain.tpgDmn.form.divForm.form.divSch.form);
            obj.set_taborder("3");
            obj.set_displaynulltext("[%]검색어[%]");
            this.tabMain.tpgDmn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan00","20.00","67","430","45",null,null,null,null,null,null,this.tabMain.tpgDmn.form.divForm.form.divSch.form);
            obj.set_taborder("14");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03\"/><PanelItem id=\"PanelItem01\" componentid=\"edtDmnNm\"/></Contents>");
            this.tabMain.tpgDmn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtDmnNm","1390","20","320","40",null,null,null,null,null,null,this.tabMain.tpgDmn.form.divForm.form.divSch.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_displaynulltext("[%]검색어[%]");
            this.tabMain.tpgDmn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03","0","0","100","40",null,null,null,null,null,null,this.tabMain.tpgDmn.form.divForm.form.divSch.form);
            obj.set_taborder("18");
            obj.set_text("그룹명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.tabMain.tpgDmn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panClose","30","151","100%","30",null,null,null,null,null,null,this.tabMain.tpgDmn.form.divForm.form.divSch.form);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnInqClose\"/></Contents>");
            this.tabMain.tpgDmn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnInqClose","1251","185","52","29",null,null,null,null,null,null,this.tabMain.tpgDmn.form.divForm.form.divSch.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_SchClose");
            this.tabMain.tpgDmn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.tabMain.tpgDmn.form.divForm.form.divSch.form);
            obj.set_taborder("17");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnDmnInq\"/></Contents>");
            this.tabMain.tpgDmn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnDmnInq","653.00","146","126","40",null,null,null,null,null,null,this.tabMain.tpgDmn.form.divForm.form.divSch.form);
            obj.set_taborder("5");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            this.tabMain.tpgDmn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel00","0","0","100","40",null,null,null,null,null,null,this.tabMain.tpgDmn.form.divForm.form.divSch.form);
            obj.set_taborder("19");
            obj.set_text("상태코드");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.tabMain.tpgDmn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("Combo00","792","88","150","40",null,null,null,null,null,null,this.tabMain.tpgDmn.form.divForm.form.divSch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsRowSttsCd");
            obj.set_codecolumn("rowSttsCd");
            obj.set_datacolumn("rowSttsNm");
            obj.set_text("Combo00");
            this.tabMain.tpgDmn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01_00","490.00","67","269","40",null,null,null,null,null,null,this.tabMain.tpgDmn.form.divForm.form.divSch.form);
            obj.set_taborder("9");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem00\" componentid=\"Combo00\"/></Contents>");
            this.tabMain.tpgDmn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","0","divSch:30","100.00%","700",null,null,null,null,null,null,this.tabMain.tpgDmn.form.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.tabMain.tpgDmn.form.divForm.addChild(obj.name, obj);

            obj = new Div("divPage","0","567","100.00%","36",null,null,null,null,"36",null,this.tabMain.tpgDmn.form.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("work::COM/util/paging/paging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.tabMain.tpgDmn.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn","0","0","100%","34",null,null,null,null,null,null,this.tabMain.tpgDmn.form.divForm.form.divGrd.form);
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTotal00\"/><PanelItem id=\"PanelItem01\" componentid=\"cmbDmnCntPrPg\"/><PanelItem id=\"PanelItem03\" componentid=\"btnDmnAdd\"/><PanelItem id=\"PanelItem07\" componentid=\"btnDmnDel\"/><PanelItem id=\"PanelItem04\" componentid=\"btnDmnStrg\"/><PanelItem id=\"PanelItem06\" componentid=\"btnDmnDwnldExcel\"/></Contents>");
            this.tabMain.tpgDmn.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdDmnList","0","PanelGrdBtn:20","100.00%",null,null,"divPage:30",null,null,null,null,this.tabMain.tpgDmn.form.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsDmnList");
            obj.set_autofittype("col");
            obj.set_extendsizetype("row");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"151\"/><Column size=\"105\"/><Column size=\"200\"/><Column size=\"374\"/><Column size=\"141\"/><Column size=\"100\"/><Column size=\"142\"/><Column size=\"131\"/><Column size=\"138\"/><Column size=\"93\"/><Column size=\"66\"/><Column size=\"88\"/><Column size=\"169\"/><Column size=\"82\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"그룹명\"/><Cell col=\"2\" text=\"분류명\"/><Cell col=\"3\" text=\"도메인명\"/><Cell col=\"4\" text=\"도메인설명\"/><Cell col=\"5\" text=\"데이터타입\"/><Cell col=\"6\" text=\"데이터길이\"/><Cell col=\"7\" text=\"데이터소수점길이\"/><Cell col=\"8\" text=\"허용값\"/><Cell col=\"9\" text=\"저장형식\"/><Cell col=\"10\" text=\"표현형식\"/><Cell col=\"11\" text=\"단위\"/><Cell col=\"12\" text=\"표준구분\"/><Cell col=\"13\" text=\"행정표준코드명\"/><Cell col=\"14\" text=\"상태코드\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chc\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:groupNm\"/><Cell col=\"2\" text=\"bind:clsfNm\" displaytype=\"normal\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:dmnNm\" displaytype=\"normal\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:dmnExpln\" displaytype=\"normal\" edittype=\"textarea\" textareascrolltype=\"none\" textareascrollbartype=\"none none\"/><Cell col=\"5\" text=\"bind:datType\" displaytype=\"normal\" edittype=\"normal\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:datLen\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:datDcptLen\" displaytype=\"normal\" edittype=\"normal\"/><Cell col=\"8\" text=\"bind:prmVl\"/><Cell col=\"9\" edittype=\"normal\" displaytype=\"normal\" text=\"bind:strgFrm\"/><Cell col=\"10\" edittype=\"normal\" displaytype=\"normal\" text=\"bind:exprsFrm\"/><Cell col=\"11\" text=\"bind:unit\"/><Cell col=\"12\" text=\"bind:stdSe\"/><Cell col=\"13\" edittype=\"normal\" displaytype=\"normal\" text=\"bind:pbadmsStdCdNm\"/><Cell col=\"14\" text=\"bind:rowSttsCd\" displaytype=\"combotext\" combodataset=\"dsRowSttsCd\" combocodecol=\"rowSttsCd\" combodatacol=\"rowSttsNm\"/></Band></Format></Formats>");
            this.tabMain.tpgDmn.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","27","34",null,null,null,null,null,null,this.tabMain.tpgDmn.form.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.tabMain.tpgDmn.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staDmnTnocs","staTotal:0","0","43","34",null,null,null,null,null,null,this.tabMain.tpgDmn.form.divForm.form.divGrd.form);
            obj.set_taborder("9");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_textAlign("center");
            obj.set_fittocontents("width");
            obj.set_expr("comp.parent.parent.parent.parent.parent.parent.parent.parent.dsDmnList.getColumn(0, \"allCnt\") || 0");
            this.tabMain.tpgDmn.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","staDmnTnocs:0","0","30","34",null,null,null,null,null,null,this.tabMain.tpgDmn.form.divForm.form.divGrd.form);
            obj.set_taborder("11");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.tabMain.tpgDmn.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Combo("cmbDmnCntPrPg","1230","0","80","34",null,null,null,null,null,null,this.tabMain.tpgDmn.form.divForm.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var tabMain_tpgDmn_form_divForm_form_divGrd_form_cmbDmnCntPrPg_innerdataset = new nexacro.NormalDataset("tabMain_tpgDmn_form_divForm_form_divGrd_form_cmbDmnCntPrPg_innerdataset", obj);
            tabMain_tpgDmn_form_divForm_form_divGrd_form_cmbDmnCntPrPg_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row><Row><Col id=\"codecolumn\">10000</Col><Col id=\"datacolumn\">전체(만건)</Col></Row></Rows>");
            obj.set_innerdataset(tabMain_tpgDmn_form_divForm_form_divGrd_form_cmbDmnCntPrPg_innerdataset);
            obj.set_text("10");
            obj.set_value("10");
            obj.set_index("0");
            this.tabMain.tpgDmn.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal00","1165","0","65","34",null,null,null,null,null,null,this.tabMain.tpgDmn.form.divForm.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("목록수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.tabMain.tpgDmn.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnDmnAdd","980.00","0","96","34",null,null,null,null,null,null,this.tabMain.tpgDmn.form.divForm.form.divGrd.form);
            obj.set_taborder("7");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.tabMain.tpgDmn.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnDmnStrg","804.00","10","96","34",null,null,null,null,null,null,this.tabMain.tpgDmn.form.divForm.form.divGrd.form);
            obj.set_taborder("8");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.tabMain.tpgDmn.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnDmnDwnldExcel","1280.00","0","100","34",null,null,null,null,null,null,this.tabMain.tpgDmn.form.divForm.form.divGrd.form);
            obj.set_taborder("6");
            obj.set_text("다운로드");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.tabMain.tpgDmn.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnDmnDel","1080.00","0","96","34",null,null,null,null,null,null,this.tabMain.tpgDmn.form.divForm.form.divGrd.form);
            obj.set_taborder("10");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.tabMain.tpgDmn.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Tabpage("tpgTrmDfn",this.tabMain);
            obj.set_text("용어정의");
            this.tabMain.addChild(obj.name, obj);

            obj = new Div("divForm","0","0",null,"900","20",null,null,null,null,null,this.tabMain.tpgTrmDfn.form);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.tabMain.tpgTrmDfn.addChild(obj.name, obj);

            obj = new Div("divSch","0","0","100%","198",null,null,null,null,null,null,this.tabMain.tpgTrmDfn.form.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.tabMain.tpgTrmDfn.form.divForm.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","100%","102",null,null,null,null,null,null,this.tabMain.tpgTrmDfn.form.divForm.form.divSch.form);
            obj.set_taborder("7");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("40");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"pan00\"/><PanelItem id=\"PanelItem04\" componentid=\"pan01\"/><PanelItem id=\"PanelItem00\" componentid=\"pan02\"/></Contents>");
            this.tabMain.tpgTrmDfn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan02","1694.00","398","430","45",null,null,null,null,"45",null,this.tabMain.tpgTrmDfn.form.divForm.form.divSch.form);
            obj.set_taborder("6");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtEngNm\"/></Contents>");
            this.tabMain.tpgTrmDfn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01","0","0","100","40",null,null,null,null,null,null,this.tabMain.tpgTrmDfn.form.divForm.form.divSch.form);
            obj.set_taborder("8");
            obj.set_text("영문명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.tabMain.tpgTrmDfn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel","0","0","100","40",null,null,null,null,null,null,this.tabMain.tpgTrmDfn.form.divForm.form.divSch.form);
            obj.set_taborder("9");
            obj.set_text("영문약어명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.tabMain.tpgTrmDfn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01","1694.00","398","430","40",null,null,null,null,null,null,this.tabMain.tpgTrmDfn.form.divForm.form.divSch.form);
            obj.set_taborder("5");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staLabel\"/><PanelItem id=\"PanelItem00\" componentid=\"edtEngAbbrNm\"/></Contents>");
            this.tabMain.tpgTrmDfn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtEngAbbrNm","130","67","320","40",null,null,null,null,null,null,this.tabMain.tpgTrmDfn.form.divForm.form.divSch.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("[%]검색어[%]");
            this.tabMain.tpgTrmDfn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtEngNm","1070","14","359","40",null,null,null,null,null,null,this.tabMain.tpgTrmDfn.form.divForm.form.divSch.form);
            obj.set_taborder("2");
            obj.set_displaynulltext("[%]검색어[%]");
            this.tabMain.tpgTrmDfn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan00","20.00","67","430","45",null,null,null,null,null,null,this.tabMain.tpgTrmDfn.form.divForm.form.divSch.form);
            obj.set_taborder("4");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03\"/><PanelItem id=\"PanelItem01\" componentid=\"edtDfnKornNm\"/></Contents>");
            this.tabMain.tpgTrmDfn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtDfnKornNm","1340","0","320","40",null,null,null,null,null,null,this.tabMain.tpgTrmDfn.form.divForm.form.divSch.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_displaynulltext("[%]검색어[%]");
            this.tabMain.tpgTrmDfn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03","0","0","100","40",null,null,null,null,null,null,this.tabMain.tpgTrmDfn.form.divForm.form.divSch.form);
            obj.set_taborder("13");
            obj.set_text("한글명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.tabMain.tpgTrmDfn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panClose","30","151","100%","30",null,null,null,null,null,null,this.tabMain.tpgTrmDfn.form.divForm.form.divSch.form);
            obj.set_taborder("11");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnInqClose\"/></Contents>");
            this.tabMain.tpgTrmDfn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnInqClose","1251","185","52","29",null,null,null,null,null,null,this.tabMain.tpgTrmDfn.form.divForm.form.divSch.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_SchClose");
            this.tabMain.tpgTrmDfn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.tabMain.tpgTrmDfn.form.divForm.form.divSch.form);
            obj.set_taborder("12");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnDfnInq\"/></Contents>");
            this.tabMain.tpgTrmDfn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnDfnInq","653.00","146","126","40",null,null,null,null,null,null,this.tabMain.tpgTrmDfn.form.divForm.form.divSch.form);
            obj.set_taborder("3");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            this.tabMain.tpgTrmDfn.form.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","0","divSch:30","100.00%","700",null,null,null,null,null,null,this.tabMain.tpgTrmDfn.form.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.tabMain.tpgTrmDfn.form.divForm.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn","0","0","100%","34",null,null,null,null,null,null,this.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form);
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem06\" componentid=\"btnWordDwnldExcel\"/></Contents>");
            this.tabMain.tpgTrmDfn.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new TextArea("tarTrmDfn","0","248","279","100%",null,null,null,null,null,null,this.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form);
            obj.set_taborder("8");
            obj.set_displaynulltext("여기에 용어 목록을 붙여넣기를 하고, Ctrl+Enter 키를 누르세요. 붙여넣기 후 마우스로 단어를 선택하면 선택한 단어를 자동으로 조회합니다.(우측 용어정의목록의 용어분석명도 같은 기능) 또한, Ctrl+Alt 키를 누르면 용어정의목록의 결과를 Camel 형식으로 변환하여 여기로 돌려줍니다.");
            this.tabMain.tpgTrmDfn.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdTrmDfnList","280","268","26.69%","100%",null,null,null,null,null,null,this.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form);
            obj.set_taborder("7");
            obj.set_binddataset("dsTrmDfnList");
            obj.set_autofittype("col");
            obj.set_extendsizetype("row");
            obj.set_autosizingtype("row");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"140\"/><Column size=\"120\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell colspan=\"3\" text=\"용어정의목록\"/><Cell row=\"1\" text=\"용어명\"/><Cell row=\"1\" col=\"1\" text=\"용어분석명\"/><Cell row=\"1\" col=\"2\" text=\"용어영문명\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" text=\"bind:trmNm\"/><Cell col=\"1\" text=\"bind:dfnNm\" displaytype=\"normal\" edittype=\"normal\"/><Cell col=\"2\" displaytype=\"normal\" text=\"bind:engNm\"/></Band></Format></Formats>");
            this.tabMain.tpgTrmDfn.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdWordList","658","268","26.69%","100%",null,null,null,null,null,null,this.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsWordListDfn");
            obj.set_autofittype("col");
            obj.set_extendsizetype("row");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell colspan=\"3\" text=\"단어목록\"/><Cell row=\"1\" text=\"단어명\"/><Cell row=\"1\" col=\"1\" text=\"영문약어명\"/><Cell row=\"1\" col=\"2\" text=\"표준구분\"/></Band><Band id=\"body\"><Cell text=\"bind:wordNm\"/><Cell col=\"1\" text=\"bind:engAbbrNm\"/><Cell col=\"2\" text=\"bind:stdSe\"/></Band></Format></Formats>");
            this.tabMain.tpgTrmDfn.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","27","34",null,null,null,null,null,null,this.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.tabMain.tpgTrmDfn.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staDfnTnocs","staTotal:0","0","43","34",null,null,null,null,null,null,this.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_textAlign("center");
            obj.set_fittocontents("width");
            obj.set_expr("comp.parent.parent.parent.parent.parent.parent.parent.parent.dsTrmDfnList.rowcount");
            this.tabMain.tpgTrmDfn.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","staDfnTnocs:0","0","30","34",null,null,null,null,null,null,this.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form);
            obj.set_taborder("5");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.tabMain.tpgTrmDfn.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnWordDwnldExcel","1231.00","0","189","34",null,null,null,null,null,null,this.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("용어정의목록다운로드");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.tabMain.tpgTrmDfn.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdTrmList","1036","268","26.69%","100%",null,null,null,null,null,null,this.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form);
            obj.set_taborder("6");
            obj.set_binddataset("dsTrmListDfn");
            obj.set_autofittype("col");
            obj.set_extendsizetype("row");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell colspan=\"3\" text=\"용어목록\"/><Cell row=\"1\" text=\"용어명\"/><Cell row=\"1\" col=\"1\" text=\"영문약어명\"/><Cell row=\"1\" col=\"2\" text=\"표준구분\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" text=\"bind:trmNm\"/><Cell col=\"1\" text=\"bind:engAbbrNm\" displaytype=\"normal\"/><Cell col=\"2\" text=\"bind:stdSe\"/></Band></Format></Formats>");
            this.tabMain.tpgTrmDfn.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","54","100.00%","544",null,null,null,null,null,null,this.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form);
            obj.set_taborder("9");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01\"/></Contents>");
            this.tabMain.tpgTrmDfn.form.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("Panel01","20","181","100%","100%",null,null,null,null,null,null,this.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form);
            obj.set_taborder("10");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"tarTrmDfn\"/><PanelItem id=\"PanelItem01\" componentid=\"grdTrmDfnList\"/><PanelItem id=\"PanelItem02\" componentid=\"grdWordList\"/><PanelItem id=\"PanelItem03\" componentid=\"grdTrmList\"/></Contents>");
            this.tabMain.tpgTrmDfn.form.divForm.form.divGrd.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.tabMain.tpgWord.form.divForm.form.divSch.form
            obj = new Layout("default","",0,0,this.tabMain.tpgWord.form.divForm.form.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panLabel.set_taborder("12");
                p.panLabel.set_verticalgap("8");
                p.panLabel.set_flexwrap("wrap");
                p.panLabel.set_spacing("0px 0px 10px 0px");
                p.panLabel.set_type("horizontal");
                p.panLabel.set_flexcrossaxisalign("start");
                p.panLabel.set_horizontalgap("40");
                p.panLabel.set_fittocontents("height");
                p.panLabel.set_maxheight("");
                p.panLabel.move("20","14","100%","102",null,null);

                p.pan02.set_taborder("8");
                p.pan02.set_type("horizontal");
                p.pan02.set_horizontalgap("10");
                p.pan02.set_minheight("45");
                p.pan02.set_maxheight("");
                p.pan02.set_minwidth("");
                p.pan02.move("1694.00","398","430","45",null,null);

                p.staLabel01.set_taborder("13");
                p.staLabel01.set_text("영문명");
                p.staLabel01.set_cssclass("sta_WF_SchLabel");
                p.staLabel01.set_flexshrink("0");
                p.staLabel01.set_minwidth("");
                p.staLabel01.move("0","0","100","40",null,null);

                p.staLabel.set_taborder("14");
                p.staLabel.set_text("영문약어명");
                p.staLabel.set_cssclass("sta_WF_SchLabel");
                p.staLabel.set_flexshrink("0");
                p.staLabel.set_minwidth("");
                p.staLabel.move("0","0","100","40",null,null);

                p.pan01.set_taborder("7");
                p.pan01.set_type("horizontal");
                p.pan01.set_horizontalgap("10");
                p.pan01.set_maxheight("");
                p.pan01.set_minwidth("");
                p.pan01.move("1694.00","398","430","40",null,null);

                p.staLabel02.set_taborder("15");
                p.staLabel02.set_text("단어설명");
                p.staLabel02.set_cssclass("sta_WF_SchLabel");
                p.staLabel02.set_flexshrink("0");
                p.staLabel02.set_minwidth("");
                p.staLabel02.move("0","0","100","40",null,null);

                p.pan03.set_taborder("9");
                p.pan03.set_type("horizontal");
                p.pan03.set_horizontalgap("10");
                p.pan03.set_minwidth("");
                p.pan03.move("1694.00","398","430","45",null,null);

                p.edtEngAbbrNm.set_taborder("1");
                p.edtEngAbbrNm.set_displaynulltext("[%]검색어[%]");
                p.edtEngAbbrNm.move("619.00","14","100%","40",null,null);

                p.edtEngNm.set_taborder("2");
                p.edtEngNm.set_displaynulltext("[%]검색어[%]");
                p.edtEngNm.move("1070","14","100%","40",null,null);

                p.edtWordExpln.set_taborder("3");
                p.edtWordExpln.set_displaynulltext("[%]검색어[%]");
                p.edtWordExpln.move("130","67","100%","40",null,null);

                p.pan00.set_taborder("16");
                p.pan00.set_type("horizontal");
                p.pan00.set_horizontalgap("10");
                p.pan00.set_flexwrap("nowrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_minwidth("");
                p.pan00.move("20.00","67","430","45",null,null);

                p.staLabel03.set_taborder("19");
                p.staLabel03.set_text("단어명");
                p.staLabel03.set_cssclass("sta_WF_SchLabel");
                p.staLabel03.set_flexshrink("0");
                p.staLabel03.set_maxwidth("");
                p.staLabel03.move("0","0","100","40",null,null);

                p.panClose.set_taborder("18");
                p.panClose.set_type("vertical");
                p.panClose.set_cssclass("pal_WF_SchLine");
                p.panClose.set_flexcrossaxisalign("end");
                p.panClose.move("30","151","100%","30",null,null);

                p.btnInqClose.set_taborder("17");
                p.btnInqClose.set_cssclass("btn_WF_SchClose");
                p.btnInqClose.move("1251","185","52","29",null,null);

                p.panSchBtn.set_taborder("11");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100%","40",null,null);

                p.btnWordInq.set_taborder("5");
                p.btnWordInq.set_text("조회하기");
                p.btnWordInq.set_cssclass("btn_WF_Search");
                p.btnWordInq.move("653.00","146","126","40",null,null);

                p.staLabel00.set_taborder("6");
                p.staLabel00.set_text("상태코드");
                p.staLabel00.set_cssclass("sta_WF_SchLabel");
                p.staLabel00.set_flexshrink("0");
                p.staLabel00.set_minwidth("");
                p.staLabel00.move("0","0","100","40",null,null);

                p.pan01_00.set_taborder("10");
                p.pan01_00.set_type("horizontal");
                p.pan01_00.set_horizontalgap("10");
                p.pan01_00.set_maxheight("");
                p.pan01_00.set_minwidth("");
                p.pan01_00.move("490.00","67","269","40",null,null);

                p.Combo00.set_taborder("4");
                p.Combo00.set_innerdataset("dsRowSttsCd");
                p.Combo00.set_codecolumn("rowSttsCd");
                p.Combo00.set_datacolumn("rowSttsNm");
                p.Combo00.set_text("Combo00");
                p.Combo00.move("792","88","150","40",null,null);

                p.edtWordNm.set_taborder("0");
                p.edtWordNm.set_displaynulltext("[%]검색어[%]");
                p.edtWordNm.move("130.00","14","100%","40",null,null);
            	}
            );
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            this.tabMain.tpgWord.form.divForm.form.divSch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.tabMain.tpgWord.form.divForm.form.divSch.form
            obj = new Layout("Layout0","",0,0,this.tabMain.tpgWord.form.divForm.form.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panClose.move("30","151","100%","30",null,null);

                p.panLabel.set_horizontalgap("50");
                p.panLabel.set_verticalgap("8");
                p.panLabel.move("132","47","100%","288",null,null);

                p.pan00.set_type("horizontal");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_horizontalgap("8");
                p.pan00.move("1694.00","398","99.99963967469833%","80",null,null);

                p.pan03.set_horizontalgap("8");
                p.pan03.move("1694.00","398","100%","45",null,null);

                p.pan02.set_horizontalgap("8");
                p.pan02.move("1694.00","398","100%","40",null,null);

                p.pan01.set_type("horizontal");
                p.pan01.set_fittocontents("height");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_horizontalgap("8");
                p.pan01.move("1694.00","398","100%","80",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("14px 16px 12px 16px");
            obj.set_flexwrap("wrap");
            this.tabMain.tpgWord.form.divForm.form.divSch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.tabMain.tpgWord.form.divForm.form.divGrd.form.divPage
            obj = new Layout("default","",0,0,this.tabMain.tpgWord.form.divForm.form.divGrd.form.divPage.form,function(p){});
            this.tabMain.tpgWord.form.divForm.form.divGrd.form.divPage.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabMain.tpgWord.form.divForm.form.divGrd.form
            obj = new Layout("default","",0,0,this.tabMain.tpgWord.form.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divPage.set_taborder("0");
                p.divPage.set_text("Div00");
                p.divPage.set_url("work::COM/util/paging/paging.xfdl");
                p.divPage.set_formscrollbartype("none none");
                p.divPage.set_formscrolltype("none");
                p.divPage.set_minheight("36");
                p.divPage.set_maxheight("");
                p.divPage.move("0","567","100.00%","36",null,null);

                p.PanelGrdBtn.set_taborder("5");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.move("0","0","100%","34",null,null);

                p.grdWordList.set_taborder("1");
                p.grdWordList.set_binddataset("dsWordList");
                p.grdWordList.set_autofittype("col");
                p.grdWordList.set_extendsizetype("row");
                p.grdWordList.set_autosizingtype("row");
                p.grdWordList.move("0","PanelGrdBtn:20","100.00%",null,null,"divPage:30");

                p.staTotal.set_taborder("2");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","0","27","34",null,null);

                p.staWordTnocs.set_taborder("9");
                p.staWordTnocs.set_text("0");
                p.staWordTnocs.set_cssclass("sta_WF_Total");
                p.staWordTnocs.set_usedecorate("true");
                p.staWordTnocs.set_textAlign("center");
                p.staWordTnocs.set_fittocontents("width");
                p.staWordTnocs.set_expr("comp.parent.parent.parent.parent.parent.parent.parent.parent.dsWordList.getColumn(0, \"allCnt\") || 0");
                p.staWordTnocs.move("staTotal:0","0","43","34",null,null);

                p.staTotal02.set_taborder("11");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.move("staWordTnocs:0","0","30","34",null,null);

                p.cmbWordCntPrPg.set_taborder("4");
                p.cmbWordCntPrPg.set_innerdataset(tabMain_tpgWord_form_divForm_form_divGrd_form_cmbWordCntPrPg_innerdataset);
                p.cmbWordCntPrPg.set_codecolumn("codecolumn");
                p.cmbWordCntPrPg.set_datacolumn("datacolumn");
                p.cmbWordCntPrPg.set_text("10");
                p.cmbWordCntPrPg.set_value("10");
                p.cmbWordCntPrPg.set_index("0");
                p.cmbWordCntPrPg.move("1230","0","80","34",null,null);

                p.staTotal00.set_taborder("3");
                p.staTotal00.set_text("목록수");
                p.staTotal00.set_cssclass("sta_WF_SchLabel");
                p.staTotal00.set_fittocontents("width");
                p.staTotal00.move("1165","0","65","34",null,null);

                p.btnWordAdd.set_taborder("7");
                p.btnWordAdd.set_text("추가");
                p.btnWordAdd.set_cssclass("btn_WF_Small");
                p.btnWordAdd.set_visible("true");
                p.btnWordAdd.set_fittocontents("width");
                p.btnWordAdd.move("980.00","0","96","34",null,null);

                p.btnWordStrg.set_taborder("8");
                p.btnWordStrg.set_text("저장");
                p.btnWordStrg.set_cssclass("btn_WF_SmallRed");
                p.btnWordStrg.set_visible("true");
                p.btnWordStrg.set_fittocontents("width");
                p.btnWordStrg.move("804.00","10","96","34",null,null);

                p.btnWordDwnldExcel.set_taborder("6");
                p.btnWordDwnldExcel.set_text("다운로드");
                p.btnWordDwnldExcel.set_cssclass("btn_WF_GrdDw");
                p.btnWordDwnldExcel.set_visible("true");
                p.btnWordDwnldExcel.set_fittocontents("width");
                p.btnWordDwnldExcel.move("1280.00","0","100","34",null,null);

                p.btnWordDel.set_taborder("10");
                p.btnWordDel.set_text("삭제");
                p.btnWordDel.set_cssclass("btn_WF_Small");
                p.btnWordDel.set_visible("true");
                p.btnWordDel.set_fittocontents("width");
                p.btnWordDel.move("1080.00","0","96","34",null,null);

                p.btnStng.set_taborder("12");
                p.btnStng.set_text("설정");
                p.btnStng.set_cssclass("btn_WF_Small");
                p.btnStng.set_fittocontents("width");
                p.btnStng.move("1411","8","96","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.tabMain.tpgWord.form.divForm.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.tabMain.tpgWord.form.divForm.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.tabMain.tpgWord.form.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdWordList.set_autofittype("none");

                p.btnWordAdd.set_visible("false");

                p.btnWordStrg.set_visible("false");

                p.btnWordDwnldExcel.set_visible("false");
            	}
            );
            obj.set_verticalgap("20");
            this.tabMain.tpgWord.form.divForm.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.tabMain.tpgWord.form.divForm.form
            obj = new Layout("default","",0,0,this.tabMain.tpgWord.form.divForm.form,
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
                p.divSch.move("0","0","100%","198",null,null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","divSch:30","100.00%","700",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("30");
            this.tabMain.tpgWord.form.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.tabMain.tpgWord.form.divForm.form
            obj = new Layout("Layout0","",0,0,this.tabMain.tpgWord.form.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divGrd.move("0","divSch:50","100%","673",null,null);

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
            this.tabMain.tpgWord.form.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.tabMain.tpgWord.form
            obj = new Layout("default","",0,0,this.tabMain.tpgWord.form,function(p){});
            this.tabMain.tpgWord.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabMain.tpgTrm.form.divForm.form.divSch.form
            obj = new Layout("default","",0,0,this.tabMain.tpgTrm.form.divForm.form.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panLabel.set_taborder("10");
                p.panLabel.set_verticalgap("8");
                p.panLabel.set_flexwrap("wrap");
                p.panLabel.set_spacing("0px 0px 10px 0px");
                p.panLabel.set_type("horizontal");
                p.panLabel.set_flexcrossaxisalign("start");
                p.panLabel.set_horizontalgap("40");
                p.panLabel.set_fittocontents("height");
                p.panLabel.set_maxheight("");
                p.panLabel.move("20","14","100%","102",null,null);

                p.pan02.set_taborder("7");
                p.pan02.set_type("horizontal");
                p.pan02.set_horizontalgap("10");
                p.pan02.set_minheight("45");
                p.pan02.set_maxheight("");
                p.pan02.set_minwidth("");
                p.pan02.move("1694.00","398","430","45",null,null);

                p.staLabel01.set_taborder("11");
                p.staLabel01.set_text("영문명");
                p.staLabel01.set_cssclass("sta_WF_SchLabel");
                p.staLabel01.set_flexshrink("0");
                p.staLabel01.set_minwidth("");
                p.staLabel01.move("0","0","100","40",null,null);

                p.staLabel.set_taborder("12");
                p.staLabel.set_text("영문약어명");
                p.staLabel.set_cssclass("sta_WF_SchLabel");
                p.staLabel.set_flexshrink("0");
                p.staLabel.set_minwidth("");
                p.staLabel.move("0","0","100","40",null,null);

                p.pan01.set_taborder("6");
                p.pan01.set_type("horizontal");
                p.pan01.set_horizontalgap("10");
                p.pan01.set_maxheight("");
                p.pan01.set_minwidth("");
                p.pan01.move("1694.00","398","430","40",null,null);

                p.staLabel02.set_taborder("13");
                p.staLabel02.set_text("용어설명");
                p.staLabel02.set_cssclass("sta_WF_SchLabel");
                p.staLabel02.set_flexshrink("0");
                p.staLabel02.set_minwidth("");
                p.staLabel02.move("0","0","100","40",null,null);

                p.pan03.set_taborder("8");
                p.pan03.set_type("horizontal");
                p.pan03.set_horizontalgap("10");
                p.pan03.set_minwidth("");
                p.pan03.move("1694.00","398","430","45",null,null);

                p.edtEngAbbrNm.set_taborder("1");
                p.edtEngAbbrNm.set_displaynulltext("[%]검색어[%]");
                p.edtEngAbbrNm.move("130","67","320","40",null,null);

                p.edtEngNm.set_taborder("2");
                p.edtEngNm.set_displaynulltext("[%]검색어[%]");
                p.edtEngNm.move("1070","14","359","40",null,null);

                p.edtWordExpln.set_taborder("3");
                p.edtWordExpln.set_displaynulltext("[%]검색어[%]");
                p.edtWordExpln.move("130","67","369","40",null,null);

                p.pan00.set_taborder("14");
                p.pan00.set_type("horizontal");
                p.pan00.set_horizontalgap("10");
                p.pan00.set_flexwrap("nowrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_minwidth("");
                p.pan00.move("20.00","67","430","45",null,null);

                p.edtTrmNm.set_taborder("0");
                p.edtTrmNm.set_cssclass("edt_WF_EdtSch");
                p.edtTrmNm.set_displaynulltext("[%]검색어[%]");
                p.edtTrmNm.move("1270","10","320","40",null,null);

                p.staLabel03.set_taborder("18");
                p.staLabel03.set_text("용어명");
                p.staLabel03.set_cssclass("sta_WF_SchLabel");
                p.staLabel03.set_flexshrink("0");
                p.staLabel03.set_maxwidth("");
                p.staLabel03.move("0","0","100","40",null,null);

                p.panClose.set_taborder("16");
                p.panClose.set_type("vertical");
                p.panClose.set_cssclass("pal_WF_SchLine");
                p.panClose.set_flexcrossaxisalign("end");
                p.panClose.move("30","151","100%","30",null,null);

                p.btnInqClose.set_taborder("15");
                p.btnInqClose.set_cssclass("btn_WF_SchClose");
                p.btnInqClose.move("1251","185","52","29",null,null);

                p.panSchBtn.set_taborder("17");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100%","40",null,null);

                p.btnTrmInq.set_taborder("5");
                p.btnTrmInq.set_text("조회하기");
                p.btnTrmInq.set_cssclass("btn_WF_Search");
                p.btnTrmInq.move("653.00","146","126","40",null,null);

                p.staLabel00.set_taborder("19");
                p.staLabel00.set_text("상태코드");
                p.staLabel00.set_cssclass("sta_WF_SchLabel");
                p.staLabel00.set_flexshrink("0");
                p.staLabel00.set_minwidth("");
                p.staLabel00.move("0","0","100","40",null,null);

                p.Combo00.set_taborder("4");
                p.Combo00.set_innerdataset("dsRowSttsCd");
                p.Combo00.set_codecolumn("rowSttsCd");
                p.Combo00.set_datacolumn("rowSttsNm");
                p.Combo00.set_text("Combo00");
                p.Combo00.move("792","88","150","40",null,null);

                p.pan01_00.set_taborder("9");
                p.pan01_00.set_type("horizontal");
                p.pan01_00.set_horizontalgap("10");
                p.pan01_00.set_maxheight("");
                p.pan01_00.set_minwidth("");
                p.pan01_00.move("490.00","67","269","40",null,null);
            	}
            );
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            this.tabMain.tpgTrm.form.divForm.form.divSch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.tabMain.tpgTrm.form.divForm.form.divSch.form
            obj = new Layout("Layout0","",0,0,this.tabMain.tpgTrm.form.divForm.form.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panClose.move("30","151","100%","30",null,null);

                p.panLabel.set_horizontalgap("50");
                p.panLabel.set_verticalgap("8");
                p.panLabel.move("132","47","100%","288",null,null);

                p.pan00.set_type("horizontal");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_horizontalgap("8");
                p.pan00.move("1694.00","398","99.99963967469833%","80",null,null);

                p.pan03.set_horizontalgap("8");
                p.pan03.move("1694.00","398","100%","45",null,null);

                p.pan02.set_horizontalgap("8");
                p.pan02.move("1694.00","398","100%","40",null,null);

                p.pan01.set_type("horizontal");
                p.pan01.set_fittocontents("height");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_horizontalgap("8");
                p.pan01.move("1694.00","398","100%","80",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("14px 16px 12px 16px");
            obj.set_flexwrap("wrap");
            this.tabMain.tpgTrm.form.divForm.form.divSch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.tabMain.tpgTrm.form.divForm.form.divGrd.form.divPage
            obj = new Layout("default","",0,0,this.tabMain.tpgTrm.form.divForm.form.divGrd.form.divPage.form,function(p){});
            this.tabMain.tpgTrm.form.divForm.form.divGrd.form.divPage.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabMain.tpgTrm.form.divForm.form.divGrd.form
            obj = new Layout("default","",0,0,this.tabMain.tpgTrm.form.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divPage.set_taborder("0");
                p.divPage.set_text("Div00");
                p.divPage.set_url("work::COM/util/paging/paging.xfdl");
                p.divPage.set_formscrollbartype("none none");
                p.divPage.set_formscrolltype("none");
                p.divPage.set_minheight("36");
                p.divPage.set_maxheight("");
                p.divPage.move("0","567","100.00%","36",null,null);

                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.move("0","0","100%","34",null,null);

                p.grdTrmList.set_taborder("1");
                p.grdTrmList.set_binddataset("dsTrmList");
                p.grdTrmList.set_autofittype("col");
                p.grdTrmList.set_extendsizetype("row");
                p.grdTrmList.set_autosizingtype("row");
                p.grdTrmList.move("0","PanelGrdBtn:20","100.00%",null,null,"divPage:30");

                p.staTotal.set_taborder("2");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","0","27","34",null,null);

                p.staTrmTnocs.set_taborder("9");
                p.staTrmTnocs.set_text("0");
                p.staTrmTnocs.set_cssclass("sta_WF_Total");
                p.staTrmTnocs.set_usedecorate("true");
                p.staTrmTnocs.set_textAlign("center");
                p.staTrmTnocs.set_fittocontents("width");
                p.staTrmTnocs.set_expr("comp.parent.parent.parent.parent.parent.parent.parent.parent.dsTrmList.getColumn(0, \"allCnt\") || 0");
                p.staTrmTnocs.move("staTotal:0","0","43","34",null,null);

                p.staTotal02.set_taborder("11");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.move("staTrmTnocs:0","0","30","34",null,null);

                p.cmbTrmCntPrPg.set_taborder("4");
                p.cmbTrmCntPrPg.set_innerdataset(tabMain_tpgTrm_form_divForm_form_divGrd_form_cmbTrmCntPrPg_innerdataset);
                p.cmbTrmCntPrPg.set_codecolumn("codecolumn");
                p.cmbTrmCntPrPg.set_datacolumn("datacolumn");
                p.cmbTrmCntPrPg.set_text("10");
                p.cmbTrmCntPrPg.set_value("10");
                p.cmbTrmCntPrPg.set_index("0");
                p.cmbTrmCntPrPg.move("1230","0","80","34",null,null);

                p.staTotal00.set_taborder("3");
                p.staTotal00.set_text("목록수");
                p.staTotal00.set_cssclass("sta_WF_SchLabel");
                p.staTotal00.set_fittocontents("width");
                p.staTotal00.move("1165","0","65","34",null,null);

                p.btnTrmAdd.set_taborder("7");
                p.btnTrmAdd.set_text("추가");
                p.btnTrmAdd.set_cssclass("btn_WF_Small");
                p.btnTrmAdd.set_visible("true");
                p.btnTrmAdd.set_fittocontents("width");
                p.btnTrmAdd.move("980.00","0","96","34",null,null);

                p.btnTrmStrg.set_taborder("8");
                p.btnTrmStrg.set_text("저장");
                p.btnTrmStrg.set_cssclass("btn_WF_SmallRed");
                p.btnTrmStrg.set_visible("true");
                p.btnTrmStrg.set_fittocontents("width");
                p.btnTrmStrg.move("804.00","10","96","34",null,null);

                p.btnTrmDwnldExcel.set_taborder("6");
                p.btnTrmDwnldExcel.set_text("다운로드");
                p.btnTrmDwnldExcel.set_cssclass("btn_WF_GrdDw");
                p.btnTrmDwnldExcel.set_visible("true");
                p.btnTrmDwnldExcel.set_fittocontents("width");
                p.btnTrmDwnldExcel.move("1280.00","0","100","34",null,null);

                p.btnTrmDel.set_taborder("10");
                p.btnTrmDel.set_text("삭제");
                p.btnTrmDel.set_cssclass("btn_WF_Small");
                p.btnTrmDel.set_visible("true");
                p.btnTrmDel.set_fittocontents("width");
                p.btnTrmDel.move("1080.00","0","96","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.tabMain.tpgTrm.form.divForm.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.tabMain.tpgTrm.form.divForm.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.tabMain.tpgTrm.form.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdTrmList.set_autofittype("none");

                p.btnTrmAdd.set_visible("false");

                p.btnTrmStrg.set_visible("false");

                p.btnTrmDwnldExcel.set_visible("false");
            	}
            );
            obj.set_verticalgap("20");
            this.tabMain.tpgTrm.form.divForm.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.tabMain.tpgTrm.form.divForm.form
            obj = new Layout("default","",0,0,this.tabMain.tpgTrm.form.divForm.form,
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
                p.divSch.move("0","0","100%","198",null,null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","divSch:30","100.00%","700",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("30");
            this.tabMain.tpgTrm.form.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.tabMain.tpgTrm.form.divForm.form
            obj = new Layout("Layout0","",0,0,this.tabMain.tpgTrm.form.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divGrd.move("0","divSch:50","100%","673",null,null);

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
            this.tabMain.tpgTrm.form.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.tabMain.tpgTrm.form
            obj = new Layout("default","",0,0,this.tabMain.tpgTrm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.set_fittocontents("height");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","0",null,"900","20",null);
            	}
            );
            this.tabMain.tpgTrm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.tabMain.tpgTrm.form
            obj = new Layout("Layout0","",0,0,this.tabMain.tpgTrm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.tabMain.tpgTrm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.tabMain.tpgDmn.form.divForm.form.divSch.form
            obj = new Layout("default","",0,0,this.tabMain.tpgDmn.form.divForm.form.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panLabel.set_taborder("10");
                p.panLabel.set_verticalgap("8");
                p.panLabel.set_flexwrap("wrap");
                p.panLabel.set_spacing("0px 0px 10px 0px");
                p.panLabel.set_type("horizontal");
                p.panLabel.set_flexcrossaxisalign("start");
                p.panLabel.set_horizontalgap("40");
                p.panLabel.set_fittocontents("height");
                p.panLabel.set_maxheight("");
                p.panLabel.move("20","14","100%","102",null,null);

                p.pan02.set_taborder("7");
                p.pan02.set_type("horizontal");
                p.pan02.set_horizontalgap("10");
                p.pan02.set_minheight("45");
                p.pan02.set_maxheight("");
                p.pan02.set_minwidth("");
                p.pan02.move("1694.00","398","430","45",null,null);

                p.staLabel01.set_taborder("11");
                p.staLabel01.set_text("도메인명");
                p.staLabel01.set_cssclass("sta_WF_SchLabel");
                p.staLabel01.set_flexshrink("0");
                p.staLabel01.set_minwidth("");
                p.staLabel01.move("0","0","100","40",null,null);

                p.staLabel.set_taborder("12");
                p.staLabel.set_text("분류명");
                p.staLabel.set_cssclass("sta_WF_SchLabel");
                p.staLabel.set_flexshrink("0");
                p.staLabel.set_minwidth("");
                p.staLabel.move("0","0","100","40",null,null);

                p.pan01.set_taborder("6");
                p.pan01.set_type("horizontal");
                p.pan01.set_horizontalgap("10");
                p.pan01.set_maxheight("");
                p.pan01.set_minwidth("");
                p.pan01.move("1694.00","398","430","40",null,null);

                p.staLabel02.set_taborder("13");
                p.staLabel02.set_text("도메인설명");
                p.staLabel02.set_cssclass("sta_WF_SchLabel");
                p.staLabel02.set_flexshrink("0");
                p.staLabel02.set_minwidth("");
                p.staLabel02.move("0","0","100","40",null,null);

                p.pan03.set_taborder("8");
                p.pan03.set_type("horizontal");
                p.pan03.set_horizontalgap("10");
                p.pan03.set_minwidth("");
                p.pan03.move("1694.00","398","430","45",null,null);

                p.edtEngAbbrNm.set_taborder("1");
                p.edtEngAbbrNm.set_displaynulltext("[%]검색어[%]");
                p.edtEngAbbrNm.move("130","67","320","40",null,null);

                p.edtEngNm.set_taborder("2");
                p.edtEngNm.set_displaynulltext("[%]검색어[%]");
                p.edtEngNm.move("1070","14","359","40",null,null);

                p.edtWordExpln.set_taborder("3");
                p.edtWordExpln.set_displaynulltext("[%]검색어[%]");
                p.edtWordExpln.move("130","67","369","40",null,null);

                p.pan00.set_taborder("14");
                p.pan00.set_type("horizontal");
                p.pan00.set_horizontalgap("10");
                p.pan00.set_flexwrap("nowrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_minwidth("");
                p.pan00.move("20.00","67","430","45",null,null);

                p.edtDmnNm.set_taborder("0");
                p.edtDmnNm.set_cssclass("edt_WF_EdtSch");
                p.edtDmnNm.set_displaynulltext("[%]검색어[%]");
                p.edtDmnNm.move("1390","20","320","40",null,null);

                p.staLabel03.set_taborder("18");
                p.staLabel03.set_text("그룹명");
                p.staLabel03.set_cssclass("sta_WF_SchLabel");
                p.staLabel03.set_flexshrink("0");
                p.staLabel03.set_maxwidth("");
                p.staLabel03.move("0","0","100","40",null,null);

                p.panClose.set_taborder("16");
                p.panClose.set_type("vertical");
                p.panClose.set_cssclass("pal_WF_SchLine");
                p.panClose.set_flexcrossaxisalign("end");
                p.panClose.move("30","151","100%","30",null,null);

                p.btnInqClose.set_taborder("15");
                p.btnInqClose.set_cssclass("btn_WF_SchClose");
                p.btnInqClose.move("1251","185","52","29",null,null);

                p.panSchBtn.set_taborder("17");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100%","40",null,null);

                p.btnDmnInq.set_taborder("5");
                p.btnDmnInq.set_text("조회하기");
                p.btnDmnInq.set_cssclass("btn_WF_Search");
                p.btnDmnInq.move("653.00","146","126","40",null,null);

                p.staLabel00.set_taborder("19");
                p.staLabel00.set_text("상태코드");
                p.staLabel00.set_cssclass("sta_WF_SchLabel");
                p.staLabel00.set_flexshrink("0");
                p.staLabel00.set_minwidth("");
                p.staLabel00.move("0","0","100","40",null,null);

                p.Combo00.set_taborder("4");
                p.Combo00.set_innerdataset("dsRowSttsCd");
                p.Combo00.set_codecolumn("rowSttsCd");
                p.Combo00.set_datacolumn("rowSttsNm");
                p.Combo00.set_text("Combo00");
                p.Combo00.move("792","88","150","40",null,null);

                p.pan01_00.set_taborder("9");
                p.pan01_00.set_type("horizontal");
                p.pan01_00.set_horizontalgap("10");
                p.pan01_00.set_maxheight("");
                p.pan01_00.set_minwidth("");
                p.pan01_00.move("490.00","67","269","40",null,null);
            	}
            );
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            this.tabMain.tpgDmn.form.divForm.form.divSch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.tabMain.tpgDmn.form.divForm.form.divSch.form
            obj = new Layout("Layout0","",0,0,this.tabMain.tpgDmn.form.divForm.form.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panClose.move("30","151","100%","30",null,null);

                p.panLabel.set_horizontalgap("50");
                p.panLabel.set_verticalgap("8");
                p.panLabel.move("132","47","100%","288",null,null);

                p.pan00.set_type("horizontal");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_horizontalgap("8");
                p.pan00.move("1694.00","398","99.99963967469833%","80",null,null);

                p.pan03.set_horizontalgap("8");
                p.pan03.move("1694.00","398","100%","45",null,null);

                p.pan02.set_horizontalgap("8");
                p.pan02.move("1694.00","398","100%","40",null,null);

                p.pan01.set_type("horizontal");
                p.pan01.set_fittocontents("height");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_horizontalgap("8");
                p.pan01.move("1694.00","398","100%","80",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("14px 16px 12px 16px");
            obj.set_flexwrap("wrap");
            this.tabMain.tpgDmn.form.divForm.form.divSch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.tabMain.tpgDmn.form.divForm.form.divGrd.form.divPage
            obj = new Layout("default","",0,0,this.tabMain.tpgDmn.form.divForm.form.divGrd.form.divPage.form,function(p){});
            this.tabMain.tpgDmn.form.divForm.form.divGrd.form.divPage.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabMain.tpgDmn.form.divForm.form.divGrd.form
            obj = new Layout("default","",0,0,this.tabMain.tpgDmn.form.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divPage.set_taborder("0");
                p.divPage.set_text("Div00");
                p.divPage.set_url("work::COM/util/paging/paging.xfdl");
                p.divPage.set_formscrollbartype("none none");
                p.divPage.set_formscrolltype("none");
                p.divPage.set_minheight("36");
                p.divPage.set_maxheight("");
                p.divPage.move("0","567","100.00%","36",null,null);

                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.move("0","0","100%","34",null,null);

                p.grdDmnList.set_taborder("1");
                p.grdDmnList.set_binddataset("dsDmnList");
                p.grdDmnList.set_autofittype("col");
                p.grdDmnList.set_extendsizetype("row");
                p.grdDmnList.set_autosizingtype("row");
                p.grdDmnList.move("0","PanelGrdBtn:20","100.00%",null,null,"divPage:30");

                p.staTotal.set_taborder("2");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","0","27","34",null,null);

                p.staDmnTnocs.set_taborder("9");
                p.staDmnTnocs.set_text("0");
                p.staDmnTnocs.set_cssclass("sta_WF_Total");
                p.staDmnTnocs.set_usedecorate("true");
                p.staDmnTnocs.set_textAlign("center");
                p.staDmnTnocs.set_fittocontents("width");
                p.staDmnTnocs.set_expr("comp.parent.parent.parent.parent.parent.parent.parent.parent.dsDmnList.getColumn(0, \"allCnt\") || 0");
                p.staDmnTnocs.move("staTotal:0","0","43","34",null,null);

                p.staTotal02.set_taborder("11");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.move("staDmnTnocs:0","0","30","34",null,null);

                p.cmbDmnCntPrPg.set_taborder("4");
                p.cmbDmnCntPrPg.set_innerdataset(tabMain_tpgDmn_form_divForm_form_divGrd_form_cmbDmnCntPrPg_innerdataset);
                p.cmbDmnCntPrPg.set_codecolumn("codecolumn");
                p.cmbDmnCntPrPg.set_datacolumn("datacolumn");
                p.cmbDmnCntPrPg.set_text("10");
                p.cmbDmnCntPrPg.set_value("10");
                p.cmbDmnCntPrPg.set_index("0");
                p.cmbDmnCntPrPg.move("1230","0","80","34",null,null);

                p.staTotal00.set_taborder("3");
                p.staTotal00.set_text("목록수");
                p.staTotal00.set_cssclass("sta_WF_SchLabel");
                p.staTotal00.set_fittocontents("width");
                p.staTotal00.move("1165","0","65","34",null,null);

                p.btnDmnAdd.set_taborder("7");
                p.btnDmnAdd.set_text("추가");
                p.btnDmnAdd.set_cssclass("btn_WF_Small");
                p.btnDmnAdd.set_visible("true");
                p.btnDmnAdd.set_fittocontents("width");
                p.btnDmnAdd.move("980.00","0","96","34",null,null);

                p.btnDmnStrg.set_taborder("8");
                p.btnDmnStrg.set_text("저장");
                p.btnDmnStrg.set_cssclass("btn_WF_SmallRed");
                p.btnDmnStrg.set_visible("true");
                p.btnDmnStrg.set_fittocontents("width");
                p.btnDmnStrg.move("804.00","10","96","34",null,null);

                p.btnDmnDwnldExcel.set_taborder("6");
                p.btnDmnDwnldExcel.set_text("다운로드");
                p.btnDmnDwnldExcel.set_cssclass("btn_WF_GrdDw");
                p.btnDmnDwnldExcel.set_visible("true");
                p.btnDmnDwnldExcel.set_fittocontents("width");
                p.btnDmnDwnldExcel.move("1280.00","0","100","34",null,null);

                p.btnDmnDel.set_taborder("10");
                p.btnDmnDel.set_text("삭제");
                p.btnDmnDel.set_cssclass("btn_WF_Small");
                p.btnDmnDel.set_visible("true");
                p.btnDmnDel.set_fittocontents("width");
                p.btnDmnDel.move("1080.00","0","96","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.tabMain.tpgDmn.form.divForm.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.tabMain.tpgDmn.form.divForm.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.tabMain.tpgDmn.form.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdDmnList.set_autofittype("none");

                p.btnDmnAdd.set_visible("false");

                p.btnDmnStrg.set_visible("false");

                p.btnDmnDwnldExcel.set_visible("false");
            	}
            );
            obj.set_verticalgap("20");
            this.tabMain.tpgDmn.form.divForm.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.tabMain.tpgDmn.form.divForm.form
            obj = new Layout("default","",0,0,this.tabMain.tpgDmn.form.divForm.form,
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
                p.divSch.move("0","0","100%","198",null,null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","divSch:30","100.00%","700",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("30");
            this.tabMain.tpgDmn.form.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.tabMain.tpgDmn.form.divForm.form
            obj = new Layout("Layout0","",0,0,this.tabMain.tpgDmn.form.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divGrd.move("0","divSch:50","100%","673",null,null);

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
            this.tabMain.tpgDmn.form.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.tabMain.tpgDmn.form
            obj = new Layout("default","",0,0,this.tabMain.tpgDmn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.set_fittocontents("height");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","0",null,"900","20",null);
            	}
            );
            this.tabMain.tpgDmn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.tabMain.tpgDmn.form
            obj = new Layout("Layout0","",0,0,this.tabMain.tpgDmn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.tabMain.tpgDmn.form.addLayout(obj.name, obj);
            //-- Default Layout : this.tabMain.tpgTrmDfn.form.divForm.form.divSch.form
            obj = new Layout("default","",0,0,this.tabMain.tpgTrmDfn.form.divForm.form.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panLabel.set_taborder("7");
                p.panLabel.set_verticalgap("8");
                p.panLabel.set_flexwrap("wrap");
                p.panLabel.set_spacing("0px 0px 10px 0px");
                p.panLabel.set_type("horizontal");
                p.panLabel.set_flexcrossaxisalign("start");
                p.panLabel.set_horizontalgap("40");
                p.panLabel.set_fittocontents("height");
                p.panLabel.set_maxheight("");
                p.panLabel.move("20","14","100%","102",null,null);

                p.pan02.set_taborder("6");
                p.pan02.set_type("horizontal");
                p.pan02.set_horizontalgap("10");
                p.pan02.set_minheight("45");
                p.pan02.set_maxheight("");
                p.pan02.set_minwidth("");
                p.pan02.move("1694.00","398","430","45",null,null);

                p.staLabel01.set_taborder("8");
                p.staLabel01.set_text("영문명");
                p.staLabel01.set_cssclass("sta_WF_SchLabel");
                p.staLabel01.set_flexshrink("0");
                p.staLabel01.set_minwidth("");
                p.staLabel01.move("0","0","100","40",null,null);

                p.staLabel.set_taborder("9");
                p.staLabel.set_text("영문약어명");
                p.staLabel.set_cssclass("sta_WF_SchLabel");
                p.staLabel.set_flexshrink("0");
                p.staLabel.set_minwidth("");
                p.staLabel.move("0","0","100","40",null,null);

                p.pan01.set_taborder("5");
                p.pan01.set_type("horizontal");
                p.pan01.set_horizontalgap("10");
                p.pan01.set_maxheight("");
                p.pan01.set_minwidth("");
                p.pan01.move("1694.00","398","430","40",null,null);

                p.edtEngAbbrNm.set_taborder("1");
                p.edtEngAbbrNm.set_displaynulltext("[%]검색어[%]");
                p.edtEngAbbrNm.move("130","67","320","40",null,null);

                p.edtEngNm.set_taborder("2");
                p.edtEngNm.set_displaynulltext("[%]검색어[%]");
                p.edtEngNm.move("1070","14","359","40",null,null);

                p.pan00.set_taborder("4");
                p.pan00.set_type("horizontal");
                p.pan00.set_horizontalgap("10");
                p.pan00.set_flexwrap("nowrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_minwidth("");
                p.pan00.move("20.00","67","430","45",null,null);

                p.edtDfnKornNm.set_taborder("0");
                p.edtDfnKornNm.set_cssclass("edt_WF_EdtSch");
                p.edtDfnKornNm.set_displaynulltext("[%]검색어[%]");
                p.edtDfnKornNm.move("1340","0","320","40",null,null);

                p.staLabel03.set_taborder("13");
                p.staLabel03.set_text("한글명");
                p.staLabel03.set_cssclass("sta_WF_SchLabel");
                p.staLabel03.set_flexshrink("0");
                p.staLabel03.set_maxwidth("");
                p.staLabel03.move("0","0","100","40",null,null);

                p.panClose.set_taborder("11");
                p.panClose.set_type("vertical");
                p.panClose.set_cssclass("pal_WF_SchLine");
                p.panClose.set_flexcrossaxisalign("end");
                p.panClose.move("30","151","100%","30",null,null);

                p.btnInqClose.set_taborder("10");
                p.btnInqClose.set_cssclass("btn_WF_SchClose");
                p.btnInqClose.move("1251","185","52","29",null,null);

                p.panSchBtn.set_taborder("12");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100%","40",null,null);

                p.btnDfnInq.set_taborder("3");
                p.btnDfnInq.set_text("조회하기");
                p.btnDfnInq.set_cssclass("btn_WF_Search");
                p.btnDfnInq.move("653.00","146","126","40",null,null);
            	}
            );
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            this.tabMain.tpgTrmDfn.form.divForm.form.divSch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.tabMain.tpgTrmDfn.form.divForm.form.divSch.form
            obj = new Layout("Layout0","",0,0,this.tabMain.tpgTrmDfn.form.divForm.form.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panClose.move("30","151","100%","30",null,null);

                p.panLabel.set_horizontalgap("50");
                p.panLabel.set_verticalgap("8");
                p.panLabel.move("132","47","100%","288",null,null);

                p.pan00.set_type("horizontal");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_horizontalgap("8");
                p.pan00.move("1694.00","398","99.99963967469833%","80",null,null);

                p.pan02.set_horizontalgap("8");
                p.pan02.move("1694.00","398","100%","40",null,null);

                p.pan01.set_type("horizontal");
                p.pan01.set_fittocontents("height");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_horizontalgap("8");
                p.pan01.move("1694.00","398","100%","80",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("14px 16px 12px 16px");
            obj.set_flexwrap("wrap");
            this.tabMain.tpgTrmDfn.form.divForm.form.divSch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form
            obj = new Layout("default","",0,0,this.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.move("0","0","100%","34",null,null);

                p.tarTrmDfn.set_taborder("8");
                p.tarTrmDfn.set_displaynulltext("여기에 용어 목록을 붙여넣기를 하고, Ctrl+Enter 키를 누르세요. 붙여넣기 후 마우스로 단어를 선택하면 선택한 단어를 자동으로 조회합니다.(우측 용어정의목록의 용어분석명도 같은 기능) 또한, Ctrl+Alt 키를 누르면 용어정의목록의 결과를 Camel 형식으로 변환하여 여기로 돌려줍니다.");
                p.tarTrmDfn.move("0","248","279","100%",null,null);

                p.grdTrmDfnList.set_taborder("7");
                p.grdTrmDfnList.set_binddataset("dsTrmDfnList");
                p.grdTrmDfnList.set_autofittype("col");
                p.grdTrmDfnList.set_extendsizetype("row");
                p.grdTrmDfnList.set_autosizingtype("row");
                p.grdTrmDfnList.set_selecttype("area");
                p.grdTrmDfnList.move("280","268","26.69%","100%",null,null);

                p.grdWordList.set_taborder("0");
                p.grdWordList.set_binddataset("dsWordListDfn");
                p.grdWordList.set_autofittype("col");
                p.grdWordList.set_extendsizetype("row");
                p.grdWordList.set_autosizingtype("row");
                p.grdWordList.move("658","268","26.69%","100%",null,null);

                p.staTotal.set_taborder("1");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","0","27","34",null,null);

                p.staDfnTnocs.set_taborder("4");
                p.staDfnTnocs.set_text("0");
                p.staDfnTnocs.set_cssclass("sta_WF_Total");
                p.staDfnTnocs.set_usedecorate("true");
                p.staDfnTnocs.set_textAlign("center");
                p.staDfnTnocs.set_fittocontents("width");
                p.staDfnTnocs.set_expr("comp.parent.parent.parent.parent.parent.parent.parent.parent.dsTrmDfnList.rowcount");
                p.staDfnTnocs.move("staTotal:0","0","43","34",null,null);

                p.staTotal02.set_taborder("5");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.move("staDfnTnocs:0","0","30","34",null,null);

                p.btnWordDwnldExcel.set_taborder("3");
                p.btnWordDwnldExcel.set_text("용어정의목록다운로드");
                p.btnWordDwnldExcel.set_cssclass("btn_WF_GrdDw");
                p.btnWordDwnldExcel.set_visible("true");
                p.btnWordDwnldExcel.set_fittocontents("width");
                p.btnWordDwnldExcel.move("1231.00","0","189","34",null,null);

                p.grdTrmList.set_taborder("6");
                p.grdTrmList.set_binddataset("dsTrmListDfn");
                p.grdTrmList.set_autofittype("col");
                p.grdTrmList.set_extendsizetype("row");
                p.grdTrmList.set_autosizingtype("row");
                p.grdTrmList.move("1036","268","26.69%","100%",null,null);

                p.Panel00.set_taborder("9");
                p.Panel00.set_horizontalgap("5");
                p.Panel00.move("0","54","100.00%","544",null,null);

                p.Panel01.set_taborder("10");
                p.Panel01.set_horizontalgap("5");
                p.Panel01.move("20","181","100%","100%",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdWordList.set_autofittype("none");

                p.btnWordDwnldExcel.set_visible("false");
            	}
            );
            obj.set_verticalgap("20");
            this.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.tabMain.tpgTrmDfn.form.divForm.form
            obj = new Layout("default","",0,0,this.tabMain.tpgTrmDfn.form.divForm.form,
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
                p.divSch.move("0","0","100%","198",null,null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","divSch:30","100.00%","700",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("30");
            this.tabMain.tpgTrmDfn.form.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.tabMain.tpgTrmDfn.form.divForm.form
            obj = new Layout("Layout0","",0,0,this.tabMain.tpgTrmDfn.form.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divGrd.move("0","divSch:50","100%","673",null,null);

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
            this.tabMain.tpgTrmDfn.form.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.tabMain.tpgTrmDfn.form
            obj = new Layout("default","",0,0,this.tabMain.tpgTrmDfn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.set_fittocontents("height");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","0",null,"900","20",null);
            	}
            );
            this.tabMain.tpgTrmDfn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.tabMain.tpgTrmDfn.form
            obj = new Layout("Layout0","",0,0,this.tabMain.tpgTrmDfn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.tabMain.tpgTrmDfn.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("메타정보관리");

                p.tabMain.set_taborder("0");
                p.tabMain.set_tabindex("0");
                p.tabMain.set_background("border-box");
                p.tabMain.move("20","20",null,null,"20","20");

                p.tabMain.tpgWord.set_text("단어관리");

                p.tabMain.tpgTrm.set_text("용어관리");

                p.tabMain.tpgDmn.set_text("도메인관리");

                p.tabMain.tpgTrmDfn.set_text("용어정의");
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",390,600,this,
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
            obj = new BindItem("item0","tabMain.tpgWord.form.divForm.form.divSch.form.edtEngAbbrNm","value","dsSearch","wordEngAbbrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tabMain.tpgWord.form.divForm.form.divSch.form.edtEngNm","value","dsSearch","wordEngNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tabMain.tpgWord.form.divForm.form.divSch.form.edtWordExpln","value","dsSearch","wordExpln");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tabMain.tpgWord.form.divForm.form.divGrd.form.cmbWordCntPrPg","value","dsSearch","wordCntPrPg");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","tabMain.tpgTrm.form.divForm.form.divGrd.form.cmbTrmCntPrPg","value","dsSearch","trmCntPrPg");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","tabMain.tpgTrm.form.divForm.form.divSch.form.edtEngAbbrNm","value","dsSearch","trmEngAbbrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","tabMain.tpgTrm.form.divForm.form.divSch.form.edtEngNm","value","dsSearch","trmEngNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","tabMain.tpgTrm.form.divForm.form.divSch.form.edtWordExpln","value","dsSearch","trmExpln");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","tabMain.tpgDmn.form.divForm.form.divSch.form.edtEngAbbrNm","value","dsSearch","dmnClsfNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","tabMain.tpgDmn.form.divForm.form.divSch.form.edtEngNm","value","dsSearch","dmnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","tabMain.tpgDmn.form.divForm.form.divSch.form.edtWordExpln","value","dsSearch","dmnExpln");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","tabMain.tpgTrmDfn.form.divForm.form.divSch.form.edtEngAbbrNm","value","dsSearch","dfnEngAbbrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","tabMain.tpgTrmDfn.form.divForm.form.divSch.form.edtEngNm","value","dsSearch","dfnEngNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","edtEngAbbrNm","value","dsSearch","wordEngAbbrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","tabMain.tpgWord.form.divForm.form.divSch.form.Combo00","value","dsSearch","wordRowSttsCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","Combo00","value","dsSearch","trmRowSttsCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","tabMain.tpgTrm.form.divForm.form.divSch.form.Combo00","value","dsSearch","trmRowSttsCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","tabMain.tpgDmn.form.divForm.form.divSch.form.Combo00","value","dsSearch","dmnRowSttsCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tabMain.tpgWord.form.divForm.form.divSch.form.edtWordNm","value","dsSearch","wordNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","tabMain.tpgTrm.form.divForm.form.divSch.form.edtTrmNm","value","dsSearch","trmNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","tabMain.tpgDmn.form.divForm.form.divSch.form.edtDmnNm","value","dsSearch","dmnGroupNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","tabMain.tpgTrmDfn.form.divForm.form.divSch.form.edtDfnKornNm","value","dsSearch","dfnKornNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","tabMain.tpgTrmDfn.form.divForm.form.divGrd.form.staDfnTnocs","text","dsTrmDfnList","trmNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","tabMain.tpgDmn.form.divForm.form.divGrd.form.staDmnTnocs","text","dsDmnList","groupNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","tabMain.tpgTrm.form.divForm.form.divGrd.form.staTrmTnocs","text","dsTrmList","trmNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tabMain.tpgWord.form.divForm.form.divGrd.form.staWordTnocs","text","dsWordList","allCnt");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","work::COM/util/paging/paging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("mdatMng.xfdl","xjs::TaskCom.xjs");
        this.registerScript("mdatMng.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	mdatMng.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/08/16
        *  @Desction   ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/08/16		    김주화						최초생성
        *******************************************************************************
        */

        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;
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
        	//this.cfnSearch(1);
        };

        /*******************************************************************************************************************************
         * 공통함수영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.cfnSrvcCall = function(srvcId, pgNo) {
        	var strSrvcId   = srvcId;         // transaction을 구분하기 위한 svc id값
        	var strSvcUrl   = "";             // trabsaction을 요청할 주소
        	var inData      = "";             // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        	var outData     = "";             // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        	var strArg      = "";             // 입력값으로 보낼 arguments, strFormData="20120607"
        	var callBackFnc = "fnCallback";   // transaction의 결과를 받을 Function 이름
        	var isAsync   	= true;           // 비동기통신 여부 [생략가능]

        	switch(strSrvcId)
        	{
        		case this.tabMain.tpgWord.form.divForm.form.divSch.form.btnWordInq.name :  // 단어조회
        			this.dsSearch.setColumn(0, "wordNowPgNo", pgNo || 1);                      // 페이지번호
        			strSvcUrl = "mdatMng/inqWordList.do";
        			inData    = "dsSearch=dsSearch";
        			outData   = "dsWordList=dsWordList";
        			break;

        		case this.tabMain.tpgWord.form.divForm.form.divGrd.form.btnWordStrg.name :  // 단어저장
        			strSvcUrl = "mdatMng/strgWordList.do";
        			inData    = "dsWordList=dsWordList:U";
        			break;

        		case this.tabMain.tpgTrm.form.divForm.form.divSch.form.btnTrmInq.name :     // 용어조회
        			this.dsSearch.setColumn(0, "trmNowPgNo", pgNo || 1);                    // 페이지번호
        			strSvcUrl = "mdatMng/inqTrmList.do";
        			inData    = "dsSearch=dsSearch";
        			outData   = "dsTrmList=dsTrmList";
        			break;

        		case this.tabMain.tpgTrm.form.divForm.form.divGrd.form.btnTrmStrg.name :    // 용어저장
        			strSvcUrl = "mdatMng/strgTrmList.do";
        			inData    = "dsTrmList=dsTrmList:U";
        			break;

        		case this.tabMain.tpgDmn.form.divForm.form.divSch.form.btnDmnInq.name :     // 도메인조회
        			this.dsSearch.setColumn(0, "dmnNowPgNo", pgNo || 1);                    // 페이지번호
        			strSvcUrl = "mdatMng/inqDmnList.do";
        			inData    = "dsSearch=dsSearch";
        			outData   = "dsDmnList=dsDmnList";
        			break;

        		case this.tabMain.tpgDmn.form.divForm.form.divGrd.form.btnDmnStrg.name :    // 도메인저장
        			strSvcUrl = "mdatMng/strgDmnList.do";
        			inData    = "dsDmnList=dsDmnList:U";
        			break;

        		case this.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form.tarTrmDfn.name :      // 용어정의조회
        			strSvcUrl = "mdatMng/inqTrmDfnList.do";
        			inData    = "dsTrmDfnList=dsTrmDfnList:U";
        			outData   = "dsTrmDfnList=dsTrmDfnList";
        			break;

        		case this.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form.grdTrmDfnList.name :  // 행수정시
        			strSvcUrl = "mdatMng/inqTrmDfnList.do";
        			inData    = "dsTrmDfnList=dsTrmDfnRow";
        			outData   = "dsTrmDfnRow=dsTrmDfnList";
        			break;

        		case this.tabMain.tpgTrmDfn.form.divForm.form.divSch.form.btnDfnInq.name :  // 용어정의조회
        			strSvcUrl = "mdatMng/inqTrmDfnRfrncList.do";
        			inData    = "dsSearch=dsSearch";
        			outData   = "dsWordListDfn=dsWordListDfn dsTrmListDfn=dsTrmListDfn";
        			break;
        	}

        	this.gfnTransaction( strSrvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(srvcId, errCd, errMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errCd != 0) { return; }

        	switch(srvcId) {
        		case this.tabMain.tpgWord.form.divForm.form.divSch.form.btnWordInq.name :  // 단어조회
        			this.tabMain.tpgWord.form.divForm.form.divGrd.form.divPage.form.initPages( this.dsSearch.getColumn(0, "wordNowPgNo")
        			                                                                         , this.dsWordList.getColumn(0, "allCnt") || 0
        																					 , this.dsSearch.getColumn(0, "wordCntPrPg")
        																					 , 10
        																					 , "cfnPgCallback"
        																					 );
        			break;

        		case this.tabMain.tpgWord.form.divForm.form.divGrd.form.btnWordStrg.name :  // 단어저장
        			this.gfnAlertMsg("저장", this.objApp.getVariable("gvRetMsg"));
        			this.tabMain.tpgWord.form.divForm.form.divSch.form.btnWordInq.click();  // 조회
        			break;

        		case this.tabMain.tpgTrm.form.divForm.form.divSch.form.btnTrmInq.name :     // 용어조회
        			this.tabMain.tpgTrm.form.divForm.form.divGrd.form.divPage.form.initPages( this.dsSearch.getColumn(0, "trmNowPgNo")
        			                                                                        , this.dsTrmList.getColumn(0, "allCnt") || 0
        																					, this.dsSearch.getColumn(0, "trmCntPrPg")
        																			   	    , 10
        																				    , "cfnPgCallback"
        																					);
        			break;

        		case this.tabMain.tpgTrm.form.divForm.form.divGrd.form.btnTrmStrg.name :    // 용어저장
        			this.gfnAlertMsg("저장", this.objApp.getVariable("gvRetMsg"));
        			this.tabMain.tpgTrm.form.divForm.form.divSch.form.btnTrmInq.click();    // 조회
        			break;

        		case this.tabMain.tpgDmn.form.divForm.form.divSch.form.btnDmnInq.name :     // 도메인조회
        			this.tabMain.tpgDmn.form.divForm.form.divGrd.form.divPage.form.initPages( this.dsSearch.getColumn(0, "dmnNowPgNo")
        			                                                                        , this.dsDmnList.getColumn(0, "allCnt") || 0
        																					, this.dsSearch.getColumn(0, "dmnCntPrPg")
        																			   	    , 10
        																				    , "cfnPgCallback"
        																					);
        			break;

        		case this.tabMain.tpgDmn.form.divForm.form.divGrd.form.btnDmnStrg.name :    // 도메인저장
        			this.gfnAlertMsg("저장", this.objApp.getVariable("gvRetMsg"));
        			this.tabMain.tpgDmn.form.divForm.form.divSch.form.btnDmnInq.click();    // 조회
        			break;

        		case this.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form.tarTrmDfn.name :  // 용어정의조회
        			break;
        	}

            // reset
            this.tabMain[this.tabMain.tabpages.get_id(this.tabMain.tabindex)].form.divForm.form.divGrd.form.resetScroll();
        };

        this.cfnPgCallback = function(pgNo) {
        	if(this.tabMain.tabindex == 0) {
        		this.cfnSrvcCall(this.tabMain.tpgWord.form.divForm.form.divSch.form.btnWordInq.name, pgNo);
        	} else if(this.tabMain.tabindex == 1) {
        	    this.cfnSrvcCall(this.tabMain.tpgTrm.form.divForm.form.divSch.form.btnTrmInq.name, pgNo);
        	} else if(this.tabMain.tabindex == 2) {
        	    this.cfnSrvcCall(this.tabMain.tpgDmn.form.divForm.form.divSch.form.btnDmnInq.name, pgNo);
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function() {
        	this.cfnSetGrdPrztInfo();

        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // 조회버튼(단어)
        this.tabMain_tpgWord_divForm_divSch_btnWordInq_onclick = function(obj,e)
        {
        	this.cfnSrvcCall(obj.name, 1);
        };

        // 목록수(단어)
        this.tabMain_tpgWord_divForm_divGrd_cmbWordCntPrPg_onitemchanged = function(obj,e)
        {
            // 조회
        	this.tabMain.tpgWord.form.divForm.form.divSch.form.btnWordInq.click();
        };

        // 추가(단어)
        this.tabMain_tpgWord_divForm_divGrd_btnWordAdd_onclick = function(obj,e)
        {
        	this.dsWordList.setColumn(this.dsWordList.insertRow(0), "rowSttsCd", "I");
        };

        // 삭제(단어)
        this.tabMain_tpgWord_divForm_divGrd_btnWordDel_onclick = function(obj,e)
        {
        	if(this.dsWordList.findRow("chc", 1) != -1) {
        		this.gfnConfirmMsg( this.tabMain.tpgWord.form.divForm.form.divGrd.form.btnWordDel.name
        		                  , "MSG_005"   // 삭제하시겠습니까?
        						  , function(id, val) {
        						        if(JSON.parse(val).result == "Y") {
        			                        this.dsWordList.deleteMultiRows(this.dsWordList.extractRows("chc == " + 1));
        									this.dsWordList_oncolumnchanged();
        		                        }
        		                    }
        						  , ["확인", "취소"]
        						  , ["Y"  , "N" ]
        						  );
        	} else {
        	    // 선택된 내용이 없습니다.
        		this.gfnAlertMsg("msg", "MSG_006", "");
        	}
        };

        // 저장(단어)
        this.tabMain_tpgWord_divForm_divGrd_btnWordStrg_onclick = function(obj,e)
        {
        	if (this.gfnDsIsUpdated(this.dsWordList) == false) {
        		this.gfnAlertMsg("MSG_003", "MSG_003");   // 변경 내역이 없습니다.
        	} else {
        		this.gfnConfirmMsg( this.tabMain.tpgWord.form.divForm.form.divGrd.form.btnWordStrg.name
        		                  , "MSG_004"  // 저장하시겠습니까?
        						  , function (id, val) {
        						        if(JSON.parse(val).result == "Y") {
        								    if(this.tabMain.tpgWord.form.divForm.form.divGrd.form.btnWordStrg.text  == "적용") {
        										var nRows = this.dsWordList.extractRows("chc == 1");
        										for(var i = 0; i < nRows.length; i++) {
        											this.dsWordList.setColumn(nRows[i], "rowSttsCd", "U");
        										}
        									}

                                            this.cfnSrvcCall(this.tabMain.tpgWord.form.divForm.form.divGrd.form.btnWordStrg.name); // 단어저장
        								}
        							}
        						  , ["확인", "취소"]
        						  , ["Y" , "N"]
        						  );
        	}
        };

        // 엑셀다운로드(단어)
        this.tabMain_tpgWord_divForm_divGrd_btnWordDwnldExcel_onclick = function(obj,e)
        {
        	this.exportObj = new ExcelExportObject();
        	var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.tabMain.tpgWord.form.divForm.form.divGrd.form.grdWordList, "Sheet1!A1");
        	this.exportObj.set_exporturl("svcUrl::/XExportImport.do");
        	this.exportObj.exportData();
        };

        // 조회버튼(용어)
        this.tabMain_tpgTrm_divForm_divSch_btnTrmInq_onclick = function(obj,e)
        {
        	this.cfnSrvcCall(obj.name, 1);
        };

        // 목록수(용어)
        this.tabMain_tpgTrm_divForm_divGrd_cmbTrmCntPrPg_onitemchanged = function(obj,e)
        {
            // 조회
        	this.tabMain.tpgTrm.form.divForm.form.divSch.form.btnTrmInq.click();
        };

        // 추가(용어)
        this.tabMain_tpgTrm_divForm_divGrd_btnTrmAdd_onclick = function(obj,e)
        {
        	this.dsTrmList.setColumn(this.dsTrmList.insertRow(0), "rowSttsCd", "I");
        };

        // 삭제(용어)
        this.tabMain_tpgTrm_divForm_divGrd_btnTrmDel_onclick = function(obj,e)
        {
        	if(this.dsTrmList.findRow("chc", 1) != -1) {
        		this.gfnConfirmMsg( this.tabMain.tpgTrm.form.divForm.form.divGrd.form.btnTrmDel.name
        		                  , "MSG_005"  // 삭제하시겠습니까?
        						  , function(id, val) {
        						        if(JSON.parse(val).result == "Y") {
        			                        this.dsTrmList.deleteMultiRows(this.dsTrmList.extractRows("chc == " + 1));
        		                        }
        		                    }
        						  , ["확인", "취소"]
        						  , ["Y" , "N"]
        						  );
        	} else {
        	    // 선택된 내용이 없습니다.
        		this.gfnAlertMsg("msg", "MSG_006", "");
        	}
        };

        // 저장(용어)
        this.tabMain_tpgTrm_divForm_divGrd_btnTrmStrg_onclick = function(obj,e)
        {
        	if (this.gfnDsIsUpdated(this.dsTrmList) == false) {
        		this.gfnAlertMsg("msg", "MSG_004", "");  // 변경된 내용이 없습니다.
        	} else {
        		this.gfnConfirmMsg( this.tabMain.tpgTrm.form.divForm.form.divGrd.form.btnTrmStrg.name
        		                  , "MSG_003"  // 저장하시겠습니까?
        						  , function (id, val) {
        						        if(JSON.parse(val).result == "Y") {
        								    if(this.tabMain.tpgTrm.form.divForm.form.divGrd.form.btnTrmStrg.text  == "적용") {
        										var nRows = this.dsTrmList.extractRows("chc == 1");
        										for(var i = 0; i < nRows.length; i++) {
        											this.dsTrmList.setColumn(nRows[i], "rowSttsCd", "U");
        										}
        									}

                                            this.cfnSrvcCall(this.tabMain.tpgTrm.form.divForm.form.divGrd.form.btnTrmStrg.name); // 용어저장
        								}
        							}
        						  , ["확인", "취소"]
        						  , ["Y" , "N"]
        						  );
        	}
        };

        // 엑셀다운로드(용어)
        this.tabMain_tpgTrm_divForm_divGrd_btnTrmDwnldExcel_onclick = function(obj,e)
        {
        	this.exportObj = new ExcelExportObject();
        	var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.tabMain.tpgTrm.form.divForm.form.divGrd.form.grdTrmList, "Sheet1!A1");
        	this.exportObj.set_exporturl("svcUrl::/XExportImport.do");
        	this.exportObj.exportData();
        };


        // 조회버튼(도메인)
        this.tabMain_tpgDmn_divForm_divSch_btnDmnInq_onclick = function(obj,e)
        {
        	this.cfnSrvcCall(obj.name, 1);
        };

        // 목록수(도메인)
        this.tabMain_tpgDmn_divForm_divGrd_cmbDmnCntPrPg_onitemchanged = function(obj,e)
        {
            // 조회
        	this.tabMain.tpgDmn.form.divForm.form.divSch.form.btnDmnInq.click();
        };

        // 추가(도메인)
        this.tabMain_tpgDmn_divForm_divGrd_btnDmnAdd_onclick = function(obj,e)
        {
        	this.dsDmnList.setColumn(this.dsDmnList.insertRow(0), "rowSttsCd", "I");
        };

        // 삭제(도메인)
        this.tabMain_tpgDmn_divForm_divGrd_btnDmnDel_onclick = function(obj,e)
        {
        	if(this.dsDmnList.findRow("chc", 1) != -1) {
        		this.gfnConfirmMsg( this.tabMain.tpgDmn.form.divForm.form.divGrd.form.btnDmnDel.name
        		                  , "MSG_005"  // 삭제하시겠습니까?
        						  , function(id, val) {
        						        if(JSON.parse(val).result == "Y") {
        			                        this.dsDmnList.deleteMultiRows(this.dsDmnList.extractRows("chc == " + 1));
        		                        }
        		                    }
        						  , ["확인", "취소"]
        						  , ["Y" , "N"]
        						  );
        	} else {
        		// 선택된 내용이 없습니다.
        		this.gfnAlertMsg("msg", "MSG_006", "");
        	}
        };

        // 저장(도메인)
        this.tabMain_tpgDmn_divForm_divGrd_btnDmnStrg_onclick = function(obj,e)
        {
        	if (this.gfnDsIsUpdated(this.dsDmnList) == false) {
        		this.gfnAlertMsg("msg", "변경 내역이 없습니다.", "");
        	} else {
        		this.gfnConfirmMsg( this.tabMain.tpgDmn.form.divForm.form.divGrd.form.btnDmnStrg.name
        		                  , "MSG_003"  // 저장하시겠습니까?
        						  , function (id, val) {
        						        if(JSON.parse(val).result == "Y") {
        									if(this.tabMain.tpgDmn.form.divForm.form.divGrd.form.btnDmnStrg.text  == "적용") {
        										var nRows = this.dsDmnList.extractRows("chc == 1");
        										for(var i = 0; i < nRows.length; i++) {
        											this.dsDmnList.setColumn(nRows[i], "rowSttsCd", "U");
        										}
        									}

                                            this.cfnSrvcCall(this.tabMain.tpgDmn.form.divForm.form.divGrd.form.btnDmnStrg.name); // 도메인저장
        								}
        							}
        						  , ["확인", "취소"]
        						  , ["Y" , "N"]
        						  );
        	}
        };

        // 엑셀다운로드(도메인)
        this.tabMain_tpgDmn_divForm_divGrd_btnDmnDwnldExcel_onclick = function(obj,e)
        {
        	this.exportObj = new ExcelExportObject();
        	var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.tabMain.tpgDmn.form.divForm.form.divGrd.form.grdDmnList, "Sheet1!A1");
        	this.exportObj.set_exporturl("svcUrl::/XExportImport.do");
        	this.exportObj.exportData();
        };

        // TextArea(용어정의)
        this.tabMain_tpgTrmDfn_divForm_divGrd_TextArea00_onkeydown = function(obj,e)
        {
            // Ctrl(Alt) + Enter 확인
        	if((!e.ctrlkey && !e.altkey) || e.keycode != 13) { return; }

            if(e.ctrlkey) {
        		this.dsTrmDfnList.clearData();
        		var trms = obj.value.split("\n").filter(e => e.length > 0);
        		for(var i = 0; i < trms.length; i++) {
        			this.dsTrmDfnList.setColumn(this.dsTrmDfnList.addRow(), "trmNm", trms[i].split(" ").join(""));
        		}

        		// 용어정의조회
        		this.cfnSrvcCall(this.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form.tarTrmDfn.name);
        	} else if(e.altkey) {
        	    for(var i = 0; i < this.dsTrmDfnList.rowcount; i++) {
        		    var engNms = this.dsTrmDfnList.getColumn(i, "engNm").split("_");
        			engNms.forEach(function (v, j) {
        				if(nexacro.isAlpha(v)) {
        					engNms[j] = v.split("").map(function (w, k) {
        						return k == 0 && j != 0 ? w.toUpperCase() : w.toLowerCase();
        					}).join("");
        				}
        			});

        			this.dsTrmDfnList.setColumn(i, "cmlNm", engNms.join(""));
        		}

        		var engNmMaxLen = 0;
        		var cmlNmMaxLen = 0;
        		for(var i = 0; i < this.dsTrmDfnList.rowcount; i++) {
        			engNmMaxLen = this.dsTrmDfnList.getColumn(i, "engNm").length > engNmMaxLen ? this.dsTrmDfnList.getColumn(i, "engNm").length : engNmMaxLen;
        		    cmlNmMaxLen = this.dsTrmDfnList.getColumn(i, "cmlNm").length > cmlNmMaxLen ? this.dsTrmDfnList.getColumn(i, "cmlNm").length : cmlNmMaxLen;
        		}

        	    var txt = "";
        		for(var i = 0; i < this.dsTrmDfnList.rowcount; i++) {
        			txt += this.dsTrmDfnList.getColumn(i, "cmlNm").padEnd(cmlNmMaxLen + 4, " ")
        				 + this.dsTrmDfnList.getColumn(i, "engNm").padEnd(engNmMaxLen + 4, " ")
        				 + this.dsTrmDfnList.getColumn(i, "trmNm")
        				 + "\n"
        				 ;
        	   }


        		this.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form.tarTrmDfn.value = txt;
        	}
        };

        // 용어정의목록(용어분석명)
        this.dsTrmDfnList_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "dfnNm") {
        		// 용어정의조회
        		this.dsTrmDfnRow.clearData();
        		this.dsTrmDfnRow.copyRow(this.dsTrmDfnRow.addRow(), this.dsTrmDfnList, this.dsTrmDfnList.rowposition);
        	    this.cfnSrvcCall(this.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form.grdTrmDfnList.name);
        	}
        };

        this.dsTrmDfnRow_onload = function(obj,e)
        {
        	if(this.dsTrmDfnRow.rowcount > 0) {
        		this.dsTrmDfnList.copyRow(this.dsTrmDfnList.rowposition, this.dsTrmDfnRow, 0);
        	}
        };

        // 조회버튼(용어정의)
        this.tabMain_tpgTrmDfn_divForm_divSch_btnDfnInq_onclick = function(obj,e)
        {
        	this.cfnSrvcCall(obj.name, 1);
        };

        // 엑셀다운로드(용어정의)
        this.tabMain_tpgTrmDfn_divForm_divGrd_btnWordDwnldExcel_onclick = function(obj,e)
        {
        	this.exportObj = new ExcelExportObject();
        	var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form.grdTrmDfnList, "Sheet1!A1");
        	this.exportObj.set_exporturl("svcUrl::/XExportImport.do");
        	this.exportObj.exportData();
        };

        // TextArea 마우스 클릭(용어정의)
        this.tabMain_tpgTrmDfn_divForm_divGrd_tarTrmDfn_onlbuttonup = function(obj,e)
        {
        	var txt = obj.getSelectedText();
        	if(txt.length > 0) {
        		// 용어정의조회
        		this.dsSearch.setColumn(0, "dfnKornNm", "%" + txt + "%");
        		this.cfnSrvcCall(this.tabMain.tpgTrmDfn.form.divForm.form.divSch.form.btnDfnInq.name);
        	}
        };

        // 그리드 마우스 클릭(용어정의)
        this.tabMain_tpgTrmDfn_divForm_divGrd_grdTrmDfnList_onlbuttonup = function(obj,e)
        {
        	if(e.col == obj.getBindCellIndex("body", "dfnNm")) {
        		var txt = obj.getEditSelectedText();
        		if(txt.length > 0) {
        			// 용어정의조회
        			this.dsSearch.setColumn(0, "dfnKornNm", "%" + txt.split("_").join("") + "%");
        			this.cfnSrvcCall(this.tabMain.tpgTrmDfn.form.divForm.form.divSch.form.btnDfnInq.name);
        		}
        	}
        };

        // 데이터변경(단어)
        this.dsWordList_onvaluechanged = function(obj,e)
        {
        	this.tabMain.tpgWord.form.divForm.form.divGrd.form.btnWordStrg.text =
        	this.dsWordList.getDeletedRowCount() == 0 && this.dsWordList.getCaseCount('chc == 1') > 0 && this.dsWordList.getCaseCount('chc == 1') == this.dsWordList.getCaseCount('chc == 1 && rowSttsCd == "I"') ? "적용" : "저장";
        };

        // 데이터변경(용어)
        this.dsTrmList_onvaluechanged = function(obj,e)
        {
        	this.tabMain.tpgTrm.form.divForm.form.divGrd.form.btnTrmStrg.text =
        	this.dsTrmList.getDeletedRowCount() == 0 && this.dsTrmList.getCaseCount('chc == 1') > 0 && this.dsTrmList.getCaseCount('chc == 1') == this.dsTrmList.getCaseCount('chc == 1 && rowSttsCd == "I"') ? "적용" : "저장";
        };

        // 데이터변경(도메인)
        this.dsDmnList_onvaluechanged = function(obj,e)
        {
        	this.tabMain.tpgDmn.form.divForm.form.divGrd.form.btnDmnStrg.text =
        	this.dsDmnList.getDeletedRowCount() == 0 && this.dsDmnList.getCaseCount('chc == 1') > 0 && this.dsDmnList.getCaseCount('chc == 1') == this.dsDmnList.getCaseCount('chc == 1 && rowSttsCd == "I"') ? "적용" : "저장";
        };

        // 조회조건 Enter시
        this.Edit_onkeydown = function(obj,e)
        {
            if(e.keycode == 13) {
        		obj.updateToDataset();
        		if(obj.parent.lookup(this.tabMain.tpgWord.form.divForm.form.divSch.form.btnWordInq.name)) {         // 단어조회
        			this.cfnSrvcCall(this.tabMain.tpgWord.form.divForm.form.divSch.form.btnWordInq.name, 1);
        		} else if(obj.parent.lookup(this.tabMain.tpgTrm.form.divForm.form.divSch.form.btnTrmInq.name)) {    // 용어조회
        			this.cfnSrvcCall(this.tabMain.tpgTrm.form.divForm.form.divSch.form.btnTrmInq.name, 1);
        		} else if(obj.parent.lookup(this.tabMain.tpgDmn.form.divForm.form.divSch.form.btnDmnInq.name)) {    // 도메인조회
        			this.cfnSrvcCall(this.tabMain.tpgDmn.form.divForm.form.divSch.form.btnDmnInq.name, 1);
        		} else if(obj.parent.lookup(this.tabMain.tpgTrmDfn.form.divForm.form.divSch.form.btnDfnInq.name)) { // 용어정의조회
        			this.cfnSrvcCall(this.tabMain.tpgTrmDfn.form.divForm.form.divSch.form.btnDfnInq.name, 1);
        		}
        	}
        };

        this.tabMain_tpgWord_divForm_divGrd_btnStng_onclick = function(obj,e)
        {
        	var oArg    = { pvObjtId:"tabMain.tpgWord.form.divForm.form.divGrd.form.grdWordList" };
        	var oOption = { title:"그리드 개인화", titlebar:true };
        	this.gfnOpenPopup("popupModalDefault", "work::CST/COM/setGridFormat.xfdl", oArg, "", oOption);
        };

        this.divForm_divSch_btnSchClose_onclick = function(obj,e)
        {
            var isVisible = !this.tabMain[this.tabMain.tabpages.get_id(this.tabMain.tabindex)].form.divForm.form.divSch.form.panLabel.visible;
        	this.tabMain[this.tabMain.tabpages.get_id(this.tabMain.tabindex)].form.divForm.form.divSch.form.panLabel.visible     = isVisible;
        	this.tabMain[this.tabMain.tabpages.get_id(this.tabMain.tabindex)].form.divForm.form.divSch.form.panSchBtn.visible    = isVisible;
        	this.tabMain[this.tabMain.tabpages.get_id(this.tabMain.tabindex)].form.divForm.form.divSch.form.btnInqClose.cssclass = isVisible ? "btn_WF_SchClose" : "btn_WF_SchOpen";
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.tabMain.tpgWord.form.divForm.form.divSch.form.edtEngAbbrNm.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.tabMain.tpgWord.form.divForm.form.divSch.form.edtEngNm.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.tabMain.tpgWord.form.divForm.form.divSch.form.edtWordExpln.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.tabMain.tpgWord.form.divForm.form.divSch.form.btnInqClose.addEventHandler("onclick",this.divForm_divSch_btnSchClose_onclick,this);
            this.tabMain.tpgWord.form.divForm.form.divSch.form.btnWordInq.addEventHandler("onclick",this.tabMain_tpgWord_divForm_divSch_btnWordInq_onclick,this);
            this.tabMain.tpgWord.form.divForm.form.divSch.form.Combo00.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.tabMain.tpgWord.form.divForm.form.divSch.form.edtWordNm.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.tabMain.tpgWord.form.divForm.form.divGrd.form.cmbWordCntPrPg.addEventHandler("onitemchanged",this.tabMain_tpgWord_divForm_divGrd_cmbWordCntPrPg_onitemchanged,this);
            this.tabMain.tpgWord.form.divForm.form.divGrd.form.btnWordAdd.addEventHandler("onclick",this.tabMain_tpgWord_divForm_divGrd_btnWordAdd_onclick,this);
            this.tabMain.tpgWord.form.divForm.form.divGrd.form.btnWordStrg.addEventHandler("onclick",this.tabMain_tpgWord_divForm_divGrd_btnWordStrg_onclick,this);
            this.tabMain.tpgWord.form.divForm.form.divGrd.form.btnWordDwnldExcel.addEventHandler("onclick",this.tabMain_tpgWord_divForm_divGrd_btnWordDwnldExcel_onclick,this);
            this.tabMain.tpgWord.form.divForm.form.divGrd.form.btnWordDel.addEventHandler("onclick",this.tabMain_tpgWord_divForm_divGrd_btnWordDel_onclick,this);
            this.tabMain.tpgWord.form.divForm.form.divGrd.form.btnStng.addEventHandler("onclick",this.tabMain_tpgWord_divForm_divGrd_btnStng_onclick,this);
            this.tabMain.tpgTrm.form.divForm.form.divSch.form.staLabel.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.tabMain.tpgTrm.form.divForm.form.divSch.form.staLabel02.addEventHandler("onclick",this.divForm_Div00_sta00_00_01_01_onclick,this);
            this.tabMain.tpgTrm.form.divForm.form.divSch.form.edtEngAbbrNm.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.tabMain.tpgTrm.form.divForm.form.divSch.form.edtEngNm.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.tabMain.tpgTrm.form.divForm.form.divSch.form.edtWordExpln.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.tabMain.tpgTrm.form.divForm.form.divSch.form.edtTrmNm.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.tabMain.tpgTrm.form.divForm.form.divSch.form.btnInqClose.addEventHandler("onclick",this.divForm_divSch_btnSchClose_onclick,this);
            this.tabMain.tpgTrm.form.divForm.form.divSch.form.btnTrmInq.addEventHandler("onclick",this.tabMain_tpgTrm_divForm_divSch_btnTrmInq_onclick,this);
            this.tabMain.tpgTrm.form.divForm.form.divSch.form.Combo00.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.tabMain.tpgTrm.form.divForm.form.divGrd.form.cmbTrmCntPrPg.addEventHandler("onitemchanged",this.tabMain_tpgTrm_divForm_divGrd_cmbTrmCntPrPg_onitemchanged,this);
            this.tabMain.tpgTrm.form.divForm.form.divGrd.form.btnTrmAdd.addEventHandler("onclick",this.tabMain_tpgTrm_divForm_divGrd_btnTrmAdd_onclick,this);
            this.tabMain.tpgTrm.form.divForm.form.divGrd.form.btnTrmStrg.addEventHandler("onclick",this.tabMain_tpgTrm_divForm_divGrd_btnTrmStrg_onclick,this);
            this.tabMain.tpgTrm.form.divForm.form.divGrd.form.btnTrmDwnldExcel.addEventHandler("onclick",this.tabMain_tpgTrm_divForm_divGrd_btnTrmDwnldExcel_onclick,this);
            this.tabMain.tpgTrm.form.divForm.form.divGrd.form.btnTrmDel.addEventHandler("onclick",this.tabMain_tpgTrm_divForm_divGrd_btnTrmDel_onclick,this);
            this.tabMain.tpgDmn.form.divForm.form.divSch.form.staLabel.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.tabMain.tpgDmn.form.divForm.form.divSch.form.staLabel02.addEventHandler("onclick",this.divForm_Div00_sta00_00_01_01_onclick,this);
            this.tabMain.tpgDmn.form.divForm.form.divSch.form.edtEngAbbrNm.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.tabMain.tpgDmn.form.divForm.form.divSch.form.edtEngNm.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.tabMain.tpgDmn.form.divForm.form.divSch.form.edtWordExpln.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.tabMain.tpgDmn.form.divForm.form.divSch.form.edtDmnNm.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.tabMain.tpgDmn.form.divForm.form.divSch.form.btnInqClose.addEventHandler("onclick",this.divForm_divSch_btnSchClose_onclick,this);
            this.tabMain.tpgDmn.form.divForm.form.divSch.form.btnDmnInq.addEventHandler("onclick",this.tabMain_tpgDmn_divForm_divSch_btnDmnInq_onclick,this);
            this.tabMain.tpgDmn.form.divForm.form.divSch.form.Combo00.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.tabMain.tpgDmn.form.divForm.form.divGrd.form.cmbDmnCntPrPg.addEventHandler("onitemchanged",this.tabMain_tpgDmn_divForm_divGrd_cmbDmnCntPrPg_onitemchanged,this);
            this.tabMain.tpgDmn.form.divForm.form.divGrd.form.btnDmnAdd.addEventHandler("onclick",this.tabMain_tpgDmn_divForm_divGrd_btnDmnAdd_onclick,this);
            this.tabMain.tpgDmn.form.divForm.form.divGrd.form.btnDmnStrg.addEventHandler("onclick",this.tabMain_tpgDmn_divForm_divGrd_btnDmnStrg_onclick,this);
            this.tabMain.tpgDmn.form.divForm.form.divGrd.form.btnDmnDwnldExcel.addEventHandler("onclick",this.tabMain_tpgDmn_divForm_divGrd_btnDmnDwnldExcel_onclick,this);
            this.tabMain.tpgDmn.form.divForm.form.divGrd.form.btnDmnDel.addEventHandler("onclick",this.tabMain_tpgDmn_divForm_divGrd_btnDmnDel_onclick,this);
            this.tabMain.tpgTrmDfn.form.divForm.form.divSch.form.staLabel.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.tabMain.tpgTrmDfn.form.divForm.form.divSch.form.edtEngAbbrNm.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.tabMain.tpgTrmDfn.form.divForm.form.divSch.form.edtEngNm.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.tabMain.tpgTrmDfn.form.divForm.form.divSch.form.edtDfnKornNm.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.tabMain.tpgTrmDfn.form.divForm.form.divSch.form.btnInqClose.addEventHandler("onclick",this.divForm_divSch_btnSchClose_onclick,this);
            this.tabMain.tpgTrmDfn.form.divForm.form.divSch.form.btnDfnInq.addEventHandler("onclick",this.tabMain_tpgTrmDfn_divForm_divSch_btnDfnInq_onclick,this);
            this.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form.tarTrmDfn.addEventHandler("onkeydown",this.tabMain_tpgTrmDfn_divForm_divGrd_TextArea00_onkeydown,this);
            this.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form.tarTrmDfn.addEventHandler("onlbuttonup",this.tabMain_tpgTrmDfn_divForm_divGrd_tarTrmDfn_onlbuttonup,this);
            this.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form.grdTrmDfnList.addEventHandler("onlbuttonup",this.tabMain_tpgTrmDfn_divForm_divGrd_grdTrmDfnList_onlbuttonup,this);
            this.tabMain.tpgTrmDfn.form.divForm.form.divGrd.form.btnWordDwnldExcel.addEventHandler("onclick",this.tabMain_tpgTrmDfn_divForm_divGrd_btnWordDwnldExcel_onclick,this);
            this.dsWordList.addEventHandler("onvaluechanged",this.dsWordList_onvaluechanged,this);
            this.dsTrmList.addEventHandler("onvaluechanged",this.dsTrmList_onvaluechanged,this);
            this.dsDmnList.addEventHandler("onvaluechanged",this.dsDmnList_onvaluechanged,this);
            this.dsTrmDfnList.addEventHandler("oncolumnchanged",this.dsTrmDfnList_oncolumnchanged,this);
            this.dsTrmDfnRow.addEventHandler("onload",this.dsTrmDfnRow_onload,this);
        };
        this.loadIncludeScript("mdatMng.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
