(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LIF036M00");
            this.set_titletext("이동지역 서비스처리목록(보안경비팀)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"crtrYmdSe\" type=\"STRING\" size=\"256\"/><Column id=\"bgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"endYmd\" type=\"STRING\" size=\"256\"/><Column id=\"coNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"pstnRnb\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplySe\" type=\"STRING\" size=\"256\"/><Column id=\"pstnSe\" type=\"STRING\" size=\"256\"/><Column id=\"cntPrPg\" type=\"STRING\" size=\"256\"/><Column id=\"nowPgNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrvcPrcsList", this);
            obj._setContents("<ColumnInfo><Column id=\"rno\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/><Column id=\"taskNm\" type=\"STRING\" size=\"256\"/><Column id=\"docCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeNm\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobNm\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobPstnSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobPstnSeNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobTnope\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobWeekNghtSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"dayNghtSeNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobCn\" type=\"STRING\" size=\"256\"/><Column id=\"trsClsgnNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobDt\" type=\"STRING\" size=\"256\"/><Column id=\"aplyDt\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"secTmPrcrDt\" type=\"STRING\" size=\"256\"/><Column id=\"endNm\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"allCnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAplyKndList", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","0",null,"1600","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("divSch","0","0","100.00%","300",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Edit("edtAplcntNm","130","110","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("21");
            obj.set_flexgrow("1");
            obj.set_displaynulltext("검색어 입력");
            obj.set_text("");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staRnb00_00","530","74","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("20");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel05","20","204","560","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("19");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRnb00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAplcntNm\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("PanelCal","285","24","350","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("9");
            obj.set_flexgrow("2");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"DivCal\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","100%","200",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("0");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("50");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel02\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel03\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel04\"/><PanelItem id=\"PanelItem06\" componentid=\"Panel05\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel06\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staCrtrYmd","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("1");
            obj.set_text("기준일자");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel00","1694.00","398","560","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_verticalgap("8");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCrtrYmd\"/><PanelItem id=\"PanelItem03\" componentid=\"PanelCal\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel04","790.00","127","560","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("15");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staAplcntNm\"/><PanelItem id=\"PanelItem01\" componentid=\"edtJobNm\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("DivCal","281","20","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("10");
            obj.set_text("Div00");
            obj.set_flexgrow("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Calendar("calBgngYmd","0","0","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form.DivCal.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.divSch.form.DivCal.addChild(obj.name, obj);

            obj = new Static("StaticDash","calBgngYmd:10","0","10","40",null,null,null,null,null,null,this.divForm.form.divSch.form.DivCal.form);
            obj.set_taborder("1");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_Dash");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.form.DivCal.addChild(obj.name, obj);

            obj = new Calendar("calEndYmd","StaticDash:10","0","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form.DivCal.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.divSch.form.DivCal.addChild(obj.name, obj);

            obj = new Panel("Panel02","1694.00","398","560","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("3");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtAplNo","602","76","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("12");
            obj.set_flexgrow("1");
            obj.set_displaynulltext("검색어 입력");
            obj.set_text("");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staRnb","530","74","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("11");
            obj.set_text("신청번호");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel03","1694.00","398","560","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("4");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staRnb\"/><PanelItem id=\"PanelItem02\" componentid=\"edtAplNo\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("PanelClose","30","151","100%","30",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnSchClose\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSchClose","1251","185","52","29",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_SchClose");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("PanelSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("7");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSch\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSch","570","192","112","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("8");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            obj.set_fittocontents("width");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staAplcntNm","0","0","120","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("13");
            obj.set_text("작업명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtJobNm","900.00","127","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("14");
            obj.set_displaynulltext("검색어 입력");
            obj.set_flexgrow("1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel06","1694.00","398","560","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("18");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staRnb00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtPrcrNm\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staRnb00","530","74","120","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("16");
            obj.set_text("보안경비팀처리자");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtPrcrNm","602","76","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("17");
            obj.set_flexgrow("1");
            obj.set_displaynulltext("검색어 입력");
            obj.set_text("");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","0","divSch:30","100.00%","1000",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divPage","0","637","100.00%","36",null,null,null,null,"36",null,this.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("work::COM/util/paging/paging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn",null,"0","450","34","0",null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("5");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("width");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"staTotal00\"/><PanelItem id=\"PanelItem01\" componentid=\"cmbCntPrPg\"/><PanelItem id=\"PanelItem05\" componentid=\"btnGrdDw\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdList","0","PanelGrdBtn:10","100.00%",null,null,"divPage:10",null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsSrvcPrcsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"196\"/><Column size=\"256\"/><Column size=\"214\"/><Column size=\"79\"/><Column size=\"112\"/><Column size=\"186\"/><Column size=\"121\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"신청번호\"/><Cell col=\"1\" text=\"단계\"/><Cell col=\"2\" text=\"서비스구분\"/><Cell col=\"3\" text=\"작업명\"/><Cell col=\"4\" text=\"작업장소\"/><Cell col=\"5\" text=\"작업인원\"/><Cell col=\"6\" text=\"작업구분\"/><Cell col=\"7\" text=\"작업내용\"/><Cell col=\"8\" text=\"호출부호\"/><Cell col=\"9\" text=\"회사\"/><Cell col=\"10\" text=\"신청자\"/><Cell col=\"11\" text=\"작업일\"/><Cell col=\"12\" text=\"신청일시\"/><Cell col=\"13\" text=\"보안경비팀&#13;&#10;처리일시\"/><Cell col=\"14\" text=\"처리자\"/><Cell col=\"15\" text=\"종료구분\"/><Cell col=\"16\" cssclass=\"CellEnd\" text=\"완료일시\"/></Band><Band id=\"body\"><Cell text=\"bind:aplyNo\" textAlign=\"center\" cssclass=\"CellLink\" cursor=\"pointer\"/><Cell col=\"1\" text=\"bind:taskNm\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:aplySeNm\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:cstrnJobNm\"/><Cell col=\"4\" text=\"bind:cstrnJobPstnSeNm\"/><Cell col=\"5\" text=\"bind:jobTnope\"/><Cell col=\"6\" text=\"bind:dayNghtSeNm\"/><Cell col=\"7\" text=\"bind:jobCn\"/><Cell col=\"8\" text=\"bind:trsClsgnNm\"/><Cell col=\"9\" text=\"bind:aplcntInstNm\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:aplcntNm\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:jobDt\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"####-##-##\" maskedittype=\"string\"/><Cell col=\"12\" text=\"bind:aplyDt\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"####-##-## ##:##\" maskedittype=\"string\"/><Cell col=\"13\" text=\"bind:secTmPrcrDt\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"####-##-## ##:##\" maskedittype=\"string\"/><Cell col=\"14\" text=\"bind:prcrNm\" textAlign=\"center\" tooltiptext=\"bind:prcrNm\"/><Cell col=\"15\" text=\"bind:endNm\" textAlign=\"center\" tooltiptext=\"bind:prcrTelno\"/><Cell col=\"16\" cssclass=\"CellEnd\" text=\"bind:endDt\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"####-##-## ##:##\" maskedittype=\"string\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","200","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("총 <fc v=\'#1e4ebe\'>0</fc>건");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Combo("cmbCntPrPg","1230","0","80","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_divGrd_form_cmbCntPrPg_innerdataset = new nexacro.NormalDataset("divForm_form_divGrd_form_cmbCntPrPg_innerdataset", obj);
            divForm_form_divGrd_form_cmbCntPrPg_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_divGrd_form_cmbCntPrPg_innerdataset);
            obj.set_text("10");
            obj.set_value("10");
            obj.set_index("0");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal00","1165","0","54","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("목록수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDw","1368","3","124","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("6");
            obj.set_text("다운로드(엑셀)");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_fittocontents("width");
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
            //-- Default Layout : this.divForm.form.divSch.form.DivCal.form
            obj = new Layout("default","",0,0,this.divForm.form.divSch.form.DivCal.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.calBgngYmd.set_taborder("0");
                p.calBgngYmd.set_dateformat("yyyy-MM-dd");
                p.calBgngYmd.move("0","0","100%","40",null,null);

                p.StaticDash.set_taborder("1");
                p.StaticDash.set_text("~");
                p.StaticDash.set_cssclass("sta_WF_Dash");
                p.StaticDash.set_flexshrink("0");
                p.StaticDash.move("calBgngYmd:10","0","10","40",null,null);

                p.calEndYmd.set_taborder("2");
                p.calEndYmd.set_dateformat("yyyy-MM-dd");
                p.calEndYmd.move("StaticDash:10","0","100%","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divForm.form.divSch.form.DivCal.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divSch.form.DivCal.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divSch.form.DivCal.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divForm.form.divSch.form.DivCal.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divSch.form
            obj = new Layout("default","",0,0,this.divForm.form.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.edtAplcntNm.set_taborder("21");
                p.edtAplcntNm.set_flexgrow("1");
                p.edtAplcntNm.set_displaynulltext("검색어 입력");
                p.edtAplcntNm.move("130","110","100%","40",null,null);

                p.staRnb00_00.set_taborder("20");
                p.staRnb00_00.set_text("신청자");
                p.staRnb00_00.set_cssclass("sta_WF_SchLabel");
                p.staRnb00_00.set_flexshrink("0");
                p.staRnb00_00.move("530","74","100","40",null,null);

                p.Panel05.set_taborder("19");
                p.Panel05.set_type("horizontal");
                p.Panel05.set_horizontalgap("10");
                p.Panel05.set_flexgrow("1");
                p.Panel05.set_minwidth("");
                p.Panel05.move("20","204","560","40",null,null);

                p.PanelCal.set_taborder("9");
                p.PanelCal.set_flexgrow("2");
                p.PanelCal.set_horizontalgap("10");
                p.PanelCal.set_flexwrap("wrap");
                p.PanelCal.set_verticalgap("8");
                p.PanelCal.set_fittocontents("height");
                p.PanelCal.move("285","24","350","40",null,null);

                p.panLabel.set_taborder("0");
                p.panLabel.set_verticalgap("8");
                p.panLabel.set_flexwrap("wrap");
                p.panLabel.set_spacing("0px 0px 10px 0px");
                p.panLabel.set_type("horizontal");
                p.panLabel.set_flexcrossaxisalign("start");
                p.panLabel.set_horizontalgap("50");
                p.panLabel.set_fittocontents("height");
                p.panLabel.set_maxheight("");
                p.panLabel.move("20","14","100%","200",null,null);

                p.staCrtrYmd.set_taborder("1");
                p.staCrtrYmd.set_text("기준일자");
                p.staCrtrYmd.set_cssclass("sta_WF_SchLabel");
                p.staCrtrYmd.set_flexshrink("0");
                p.staCrtrYmd.set_minwidth("");
                p.staCrtrYmd.move("0","0","100","40",null,null);

                p.Panel00.set_taborder("2");
                p.Panel00.set_type("horizontal");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.set_flexwrap("nowrap");
                p.Panel00.set_verticalgap("8");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_flexgrow("1");
                p.Panel00.set_maxheight("");
                p.Panel00.set_minwidth("");
                p.Panel00.move("1694.00","398","560","40",null,null);

                p.Panel04.set_taborder("15");
                p.Panel04.set_type("horizontal");
                p.Panel04.set_horizontalgap("10");
                p.Panel04.set_flexgrow("1");
                p.Panel04.set_minwidth("");
                p.Panel04.move("790.00","127","560","40",null,null);

                p.DivCal.set_taborder("10");
                p.DivCal.set_text("Div00");
                p.DivCal.set_flexgrow("1");
                p.DivCal.set_formscrollbartype("none none");
                p.DivCal.set_formscrolltype("none");
                p.DivCal.move("281","20","100%","40",null,null);

                p.Panel02.set_taborder("3");
                p.Panel02.set_type("horizontal");
                p.Panel02.set_horizontalgap("10");
                p.Panel02.set_flexgrow("1");
                p.Panel02.set_minwidth("");
                p.Panel02.move("1694.00","398","560","40",null,null);

                p.edtAplNo.set_taborder("12");
                p.edtAplNo.set_flexgrow("1");
                p.edtAplNo.set_displaynulltext("검색어 입력");
                p.edtAplNo.move("602","76","100%","40",null,null);

                p.staRnb.set_taborder("11");
                p.staRnb.set_text("신청번호");
                p.staRnb.set_cssclass("sta_WF_SchLabel");
                p.staRnb.set_flexshrink("0");
                p.staRnb.move("530","74","100","40",null,null);

                p.Panel03.set_taborder("4");
                p.Panel03.set_type("horizontal");
                p.Panel03.set_horizontalgap("10");
                p.Panel03.set_flexgrow("1");
                p.Panel03.set_minwidth("");
                p.Panel03.move("1694.00","398","560","40",null,null);

                p.PanelClose.set_taborder("6");
                p.PanelClose.set_type("vertical");
                p.PanelClose.set_cssclass("pal_WF_SchLine");
                p.PanelClose.set_flexcrossaxisalign("end");
                p.PanelClose.move("30","151","100%","30",null,null);

                p.btnSchClose.set_taborder("5");
                p.btnSchClose.set_cssclass("btn_WF_SchClose");
                p.btnSchClose.move("1251","185","52","29",null,null);

                p.PanelSchBtn.set_taborder("7");
                p.PanelSchBtn.set_flexmainaxisalign("center");
                p.PanelSchBtn.move("632","235","100%","40",null,null);

                p.btnSch.set_taborder("8");
                p.btnSch.set_text("조회하기");
                p.btnSch.set_cssclass("btn_WF_Search");
                p.btnSch.set_fittocontents("width");
                p.btnSch.move("570","192","112","40",null,null);

                p.staAplcntNm.set_taborder("13");
                p.staAplcntNm.set_text("작업명");
                p.staAplcntNm.set_cssclass("sta_WF_SchLabel");
                p.staAplcntNm.set_flexshrink("0");
                p.staAplcntNm.set_maxwidth("");
                p.staAplcntNm.move("0","0","120","40",null,null);

                p.edtJobNm.set_taborder("14");
                p.edtJobNm.set_displaynulltext("검색어 입력");
                p.edtJobNm.set_flexgrow("1");
                p.edtJobNm.move("900.00","127","100%","40",null,null);

                p.Panel06.set_taborder("18");
                p.Panel06.set_type("horizontal");
                p.Panel06.set_horizontalgap("10");
                p.Panel06.set_flexgrow("1");
                p.Panel06.set_minwidth("");
                p.Panel06.move("1694.00","398","560","40",null,null);

                p.staRnb00.set_taborder("16");
                p.staRnb00.set_text("보안경비팀처리자");
                p.staRnb00.set_cssclass("sta_WF_SchLabel");
                p.staRnb00.set_flexshrink("0");
                p.staRnb00.move("530","74","120","40",null,null);

                p.edtPrcrNm.set_taborder("17");
                p.edtPrcrNm.set_flexgrow("1");
                p.edtPrcrNm.set_displaynulltext("검색어 입력");
                p.edtPrcrNm.move("602","76","100%","40",null,null);
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
                p.PanelClose.move("30","151","100%","30",null,null);

                p.panLabel.set_horizontalgap("50");
                p.panLabel.set_verticalgap("8");
                p.panLabel.move("132","47","100%","305",null,null);

                p.Panel03.set_type("horizontal");
                p.Panel03.set_horizontalgap("8");
                p.Panel03.move("1694.00","398","100%","40",null,null);

                p.Panel02.set_horizontalgap("8");
                p.Panel02.move("1694.00","398","100%","45",null,null);

                p.Panel00.set_type("horizontal");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_horizontalgap("8");
                p.Panel00.set_flexgrow("1");
                p.Panel00.move("1694.00","398","100%","40",null,null);

                p.PanelCal.move("285","24","100%","40",null,null);
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
                p.divPage.set_taborder("0");
                p.divPage.set_text("Div00");
                p.divPage.set_url("work::COM/util/paging/paging.xfdl");
                p.divPage.set_formscrollbartype("none none");
                p.divPage.set_formscrolltype("none");
                p.divPage.set_minheight("36");
                p.divPage.set_maxheight("");
                p.divPage.move("0","637","100.00%","36",null,null);

                p.PanelGrdBtn.set_taborder("5");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_fittocontents("width");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.move(null,"0","450","34","0",null);

                p.grdList.set_taborder("1");
                p.grdList.set_binddataset("dsSrvcPrcsList");
                p.grdList.move("0","PanelGrdBtn:10","100.00%",null,null,"divPage:10");

                p.staTotal.set_taborder("2");
                p.staTotal.set_text("총 <fc v=\'#1e4ebe\'>0</fc>건");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.move("0","0","200","34",null,null);

                p.cmbCntPrPg.set_taborder("4");
                p.cmbCntPrPg.set_innerdataset(divForm_form_divGrd_form_cmbCntPrPg_innerdataset);
                p.cmbCntPrPg.set_codecolumn("codecolumn");
                p.cmbCntPrPg.set_datacolumn("datacolumn");
                p.cmbCntPrPg.set_text("10");
                p.cmbCntPrPg.set_value("10");
                p.cmbCntPrPg.set_index("0");
                p.cmbCntPrPg.move("1230","0","80","34",null,null);

                p.staTotal00.set_taborder("3");
                p.staTotal00.set_text("목록수");
                p.staTotal00.set_cssclass("sta_WF_SchLabel");
                p.staTotal00.set_fittocontents("width");
                p.staTotal00.move("1165","0","54","34",null,null);

                p.btnGrdDw.set_taborder("6");
                p.btnGrdDw.set_text("다운로드(엑셀)");
                p.btnGrdDw.set_cssclass("btn_WF_GrdDw");
                p.btnGrdDw.set_fittocontents("width");
                p.btnGrdDw.move("1368","3","124","34",null,null);
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
                p.divSch.move("0","0","100.00%","300",null,null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","divSch:30","100.00%","1000",null,null);
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
            obj = new Layout("default","Desktop_screen,Phone_screen",1480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("이동지역 서비스처리목록(보안경비팀)");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.set_fittocontents("height");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","0",null,"1600","60",null);

                p.divGuide.set_taborder("1");
                p.divGuide.set_text("div00");
                p.divGuide.set_visible("false");
                p.divGuide.set_cssclass("div_GD_Tip");
                p.divGuide.move("1590.00","135","450","385",null,null);
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
                p.divForm.set_cssclass("div_WF_QuickFrBgM");
                p.divForm.move("0","0","100.00%","1089",null,null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.divSch.form.DivCal.form.calBgngYmd","value","dsSearch","bgngYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.divSch.form.DivCal.form.calEndYmd","value","dsSearch","endYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.divSch.form.edtAplNo","value","dsSearch","aplyNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.divSch.form.edtJobNm","value","dsSearch","pstnRnb");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.divSch.form.edtAplcntNm","value","dsSearch","aplcntNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.divSch.form.edtPrcrNm","value","dsSearch","prcrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divForm.form.divGrd.form.cmbCntPrPg","value","dsSearch","cntPrPg");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","work::COM/util/paging/paging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("LIF036M00.xfdl","xjs::TaskCom.xjs");
        this.registerScript("LIF036M00.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	LIF007M00.xfdl
        *  @Creator 	김병조
        *  @CreateDate 	2024/10/17
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/10/17				김병조							최초생성
        *******************************************************************************
        */
        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;  // 업무공통
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

        	// 로그인 ID
        	this.gvUserId = this.objApp.gdsUser.getColumn(0,"userId");
        	this.cfnComCdLoad({ id:"aplyKndCdLoad", cbf:"fnCallback",dsAplyKndList:"TSP:S" } ); // 신청구분코드

        	// 기본값 세팅
        	this.dsSearch.addRow();
        	this.divForm.form.divGrd.form.cmbCntPrPg.index = 0;  // 기준일자
        	var curYmd = this.gfnGetDate();
        	this.divForm.form.divSch.form.DivCal.form.calBgngYmd.value = this.gfnAddMonth(curYmd, -1);
        	this.divForm.form.divSch.form.DivCal.form.calEndYmd.value = curYmd;


        	this.divForm.form.divGrd.form.divPage.visible = false;  // 페이지제어
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	//TODO..
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
        /**************************************************************************
         * @name : fnSearch
         * @description : 조회
         ***************************************************************************/
        this.fnSearch = function(pgNo)
        {
        	var srchFrm = this.divForm.form.divSch.form;
        	if ( this.gfnIsNull(srchFrm.DivCal.form.calBgngYmd.value)) {
        		this.gfnAlertMsg("msg", "CST_004", ["시작일자"]);
        		//srchFrm.DivCal.form.calBgngYmd.setFocus();
        		return;
        	}
        	if ( this.gfnIsNull(srchFrm.DivCal.form.calEndYmd.value)) {
        		this.gfnAlertMsg("msg", "CST_004", ["종료일자"]);
        		return;
        	}

        	if ( srchFrm.DivCal.form.calBgngYmd.value > srchFrm.DivCal.form.calEndYmd.value ) {
        		this.gfnAlertMsg("msg", "MSG_012", ["기준일자의 "]);		//{0} 시작일자가 종료일자보다 큽니다.
        		return;
        	}

        	//this.dsPstnSeList.filter("uprCd == 'TSPLOCTSC' && cdVl05 == '" + bldPstnSeCd + "'");
        	this.dsSearch.setColumn(0, "nowPgNo", pgNo);

        	var strSvcId    = "fnSearch";
        	var strSvcUrl   = "mvmnRgnSrvcPrcs/mvmnRgnSecTmSrvcPrcsListInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsSrvcPrcsList=dsSrvcPrcsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        /**************************************************************************
         * @name : fnCallback
         * @description : 서비스 콜백
         ***************************************************************************/
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "fnSearch": //조회
        			if ( this.dsSrvcPrcsList.rowcount > 0 ) {
        				this.divForm.form.divGrd.form.staTotal.text = "총 <fc v='#1e4ebe'>" + this.dsSrvcPrcsList.getColumn(0, "allCnt")  + "</fc>건";
        				this.divForm.form.divGrd.form.divPage.form.initPages( this.dsSearch.getColumn(0, "nowPgNo")
        			                                                    , this.dsSrvcPrcsList.getColumn(0, "allCnt") || 0
        																, this.dsSearch.getColumn(0, "cntPrPg")
        																 , 10
        																 , "cfnPgCallback"
        																);
        				this.divForm.form.divGrd.form.divPage.visible = true;
        			}
        			else {
        				this.divForm.form.divGrd.form.staTotal.text = "총 <fc v='#1e4ebe'>0</fc>건";
        				this.divForm.form.divGrd.form.divPage.visible = false;
        			}
        			break;
        		case "aplyKndCdLoad":
        			this.dsAplyKndList.filter("uprCd == 'TSPELE' && useYn == 'Y'");
        			trace("----"+ this.dsAplyKndList.rowcount );
        			break;

        		default :
        			break;
        	}
        };


        this.cfnPgCallback = function(pgNo) {
        trace("cfnPgCallback " + pgNo);
        	this.fnSearch(pgNo);

        }
        /**************************************************************************
         * @name : fnPopupCallback
         * @description : 팝업에 관한 콜백 함수
         ***************************************************************************/
        this.fnPopupCallback = function(sPopupId, sRtn)
        {
        	if (sPopupId == "")
        	{
        		if (this.gfnIsNull(sRtn)) return;
        		var objRtn = JSON.parse(sRtn);

        		var sUserId = objRtn.rUserId;
        		var sUserNm = objRtn.rUserNm;

        	}
        }

        /**************************************************************************
         * @name : msgCallback
         * @description : 얼럿창 콜백 함수
         ***************************************************************************/
        this.msgCallback = function(sPopupId, sRtn) {
        	var oRtn = JSON.parse(sRtn);
        	if(sPopupId == "") {
        		if(oRtn.result == "Y") {

        		}
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        /**************************************************************************
         * @name : btnSch_onclick
         * @description : 조회 버튼 클릭
         ***************************************************************************/
        this.btnSch_onclick = function(obj,e)
        {
        	// 조회
        	this.fnSearch(1);
        };

        /**************************************************************************
         * @name : grdList_oncellclick
         * @description : 그리드 클릭
         ***************************************************************************/
        this.grdList_oncellclick = function(obj,e)
        {

        	this.gfnAlert("개발중입니다.");
        	return;
        	// 신청번호 index값
        	var cellIdx = obj.getBindCellIndex("BODY", "aplyNo");

        	if(e.row > -1){
        		if(cellIdx == e.cell){
        			var sTitle = this.dsSrvcPrcsList.getColumn(e.row,"jobNm");
        			var objArg   = {
        				"aplyNo" : this.dsSrvcPrcsList.getColumn(e.row, "aplyNo"),
        				// "jobCd"  : this.dsList.getColumn(e.row, "jobCd"),
        				"view"   : "popup"
        			};

        			var objOption = {
        				popuptype: "modal"	//modal,modaless
        				, width: 1440
        				, height: 900			//width,height 지정하지 않음 popup form size적용
        				//, autosize: true
        				, title: sTitle
        				, resize: true
        				, titlebar: true
        			};
        			var sPopupCallBack = "fnPopupCallback";

        			this.gfnOpenPopup("popup", "work::LIF/TSC/LIF052M00.xfdl", objArg, sPopupCallBack, objOption);

        		}
        	}
        };


        this.divForm_divSch_cboAplyKnd_onitemchanged = function(obj,e)
        {
        	if ( this.gfnIsNull(obj.value) ) {
        		trace("----");
        		this.divForm.form.divSch.form.cboAplyKndSeCd.index = -1;
        		this.divForm.form.divSch.form.cboAplyKndSeCd.readonly = true;
        		return;
        	}
        	else {
        		this.divForm.form.divSch.form.cboAplyKndSeCd.readonly = false;
        	}


        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divSch.form.staCrtrYmd.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.divSch.form.btnSch.addEventHandler("onclick",this.btnSch_onclick,this);
            this.divForm.form.divGrd.form.grdList.addEventHandler("oncellclick",this.grdList_oncellclick,this);
        };
        this.loadIncludeScript("LIF036M00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
