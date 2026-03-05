(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM010M08");
            this.set_titletext("처리현황목록조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"currentPageNo\" type=\"STRING\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"STRING\" size=\"256\"/><Column id=\"askStts\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"currentPageNo\">1</Col><Col id=\"recordCountPerPage\">9999999</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"askInfoId\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userTelno\" type=\"STRING\" size=\"256\"/><Column id=\"userEml\" type=\"STRING\" size=\"256\"/><Column id=\"srvcSe\" type=\"STRING\" size=\"256\"/><Column id=\"aplySe\" type=\"STRING\" size=\"256\"/><Column id=\"etcMttr\" type=\"STRING\" size=\"256\"/><Column id=\"askCn\" type=\"STRING\" size=\"256\"/><Column id=\"ocrnYmd\" type=\"STRING\" size=\"256\"/><Column id=\"ocrnPstn\" type=\"STRING\" size=\"256\"/><Column id=\"trgtCoChcYn\" type=\"STRING\" size=\"256\"/><Column id=\"trgtCoId\" type=\"STRING\" size=\"256\"/><Column id=\"trgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"askStts\" type=\"STRING\" size=\"256\"/><Column id=\"clrId\" type=\"STRING\" size=\"256\"/><Column id=\"clrNm\" type=\"STRING\" size=\"256\"/><Column id=\"rcptDt\" type=\"STRING\" size=\"256\"/><Column id=\"rcptCn\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcsDt\" type=\"STRING\" size=\"256\"/><Column id=\"prcsCn\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("<ColumnInfo><Column id=\"totalRecordCount\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrvcSe", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdNm\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAplySe", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdNm\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAskStts", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"cnt\" type=\"STRING\" size=\"256\"/><Column id=\"totCnt\" type=\"STRING\" size=\"256\"/><Column id=\"clrCnt\" type=\"STRING\" size=\"256\"/><Column id=\"totClrCnt\" type=\"STRING\" size=\"256\"/><Column id=\"prcrCnt\" type=\"STRING\" size=\"256\"/><Column id=\"totPrcrCnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEscel", this);
            obj._setContents("<ColumnInfo><Column id=\"askInfoId\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userTelno\" type=\"STRING\" size=\"256\"/><Column id=\"userEml\" type=\"STRING\" size=\"256\"/><Column id=\"srvcSe\" type=\"STRING\" size=\"256\"/><Column id=\"aplySe\" type=\"STRING\" size=\"256\"/><Column id=\"etcMttr\" type=\"STRING\" size=\"256\"/><Column id=\"askCn\" type=\"STRING\" size=\"256\"/><Column id=\"ocrnYmd\" type=\"STRING\" size=\"256\"/><Column id=\"ocrnPstn\" type=\"STRING\" size=\"256\"/><Column id=\"trgtCoChcYn\" type=\"STRING\" size=\"256\"/><Column id=\"trgtCoId\" type=\"STRING\" size=\"256\"/><Column id=\"trgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"askStts\" type=\"STRING\" size=\"256\"/><Column id=\"clrId\" type=\"STRING\" size=\"256\"/><Column id=\"clrNm\" type=\"STRING\" size=\"256\"/><Column id=\"rcptDt\" type=\"STRING\" size=\"256\"/><Column id=\"rcptCn\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcsDt\" type=\"STRING\" size=\"256\"/><Column id=\"prcsCn\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","70",null,null,"60","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("divSch","0","0","100.00%","120",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divStepGroup","20","62","100%","100",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_fittocontents("height");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("palStepBox01","805","108","160","90",null,null,null,null,null,null,this.divForm.form.divSch.form.divStepGroup.form);
            obj.set_taborder("5");
            obj.set_cssclass("pal_WF_StepBox");
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("5");
            obj.set_spacing("0px 20px 0px 20px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staStepTit01\"/><PanelItem id=\"PanelItem02\" componentid=\"palStepBoxCon01\"/></Contents>");
            this.divForm.form.divSch.form.divStepGroup.addChild(obj.name, obj);

            obj = new Static("staStepTit01","58","143","100%","60",null,null,null,null,null,null,this.divForm.form.divSch.form.divStepGroup.form);
            obj.set_taborder("0");
            obj.set_text("신청");
            obj.set_cssclass("sta_WF_Boxtit");
            obj.set_fittocontents("width");
            this.divForm.form.divSch.form.divStepGroup.addChild(obj.name, obj);

            obj = new Button("btnCountP01","177.00","110","105","30",null,null,null,null,null,null,this.divForm.form.divSch.form.divStepGroup.form);
            obj.set_taborder("1");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divSch.form.divStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls01","55.00","0","15","30",null,null,null,null,null,null,this.divForm.form.divSch.form.divStepGroup.form);
            obj.set_taborder("2");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divSch.form.divStepGroup.addChild(obj.name, obj);

            obj = new Button("btnCountD01","75.00","0","105","30",null,null,null,null,null,null,this.divForm.form.divSch.form.divStepGroup.form);
            obj.set_taborder("3");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divSch.form.divStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBoxCon01","177.00","110","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divStepGroup.form);
            obj.set_taborder("4");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnCountP01\"/><PanelItem id=\"PanelItem01\" componentid=\"StepSls01\"/><PanelItem id=\"PanelItem03\" componentid=\"btnCountD01\"/></Contents>");
            this.divForm.form.divSch.form.divStepGroup.addChild(obj.name, obj);

            obj = new Static("BoxArw01","175","119","40","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divStepGroup.form);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_cssclass("sta_WF_BoxArw");
            obj.set_visible("true");
            this.divForm.form.divSch.form.divStepGroup.addChild(obj.name, obj);

            obj = new Static("staStepTit01_00","58","143","100%","60",null,null,null,null,null,null,this.divForm.form.divSch.form.divStepGroup.form);
            obj.set_taborder("7");
            obj.set_text("접수");
            obj.set_cssclass("sta_WF_Boxtit");
            obj.set_fittocontents("width");
            this.divForm.form.divSch.form.divStepGroup.addChild(obj.name, obj);

            obj = new Button("btnCountP01_00","177.00","110","105","30",null,null,null,null,null,null,this.divForm.form.divSch.form.divStepGroup.form);
            obj.set_taborder("8");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divSch.form.divStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls01_00","55.00","0","15","30",null,null,null,null,null,null,this.divForm.form.divSch.form.divStepGroup.form);
            obj.set_taborder("9");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divSch.form.divStepGroup.addChild(obj.name, obj);

            obj = new Button("btnCountD01_00","75.00","0","105","30",null,null,null,null,null,null,this.divForm.form.divSch.form.divStepGroup.form);
            obj.set_taborder("10");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divSch.form.divStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBoxCon01_00","177.00","110","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divStepGroup.form);
            obj.set_taborder("11");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnCountP01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"StepSls01_00\"/><PanelItem id=\"PanelItem03\" componentid=\"btnCountD01_00\"/></Contents>");
            this.divForm.form.divSch.form.divStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBox01_00","805","108","160","90",null,null,null,null,null,null,this.divForm.form.divSch.form.divStepGroup.form);
            obj.set_taborder("12");
            obj.set_cssclass("pal_WF_StepBox");
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("5");
            obj.set_spacing("0px 20px 0px 20px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staStepTit01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"palStepBoxCon01_00\"/></Contents>");
            this.divForm.form.divSch.form.divStepGroup.addChild(obj.name, obj);

            obj = new Static("BoxArw01_00","175","119","40","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divStepGroup.form);
            obj.set_taborder("13");
            obj.set_text("");
            obj.set_cssclass("sta_WF_BoxArw");
            obj.set_visible("true");
            this.divForm.form.divSch.form.divStepGroup.addChild(obj.name, obj);

            obj = new Static("staStepTit01_00_00","58","143","100%","60",null,null,null,null,null,null,this.divForm.form.divSch.form.divStepGroup.form);
            obj.set_taborder("14");
            obj.set_text("처리");
            obj.set_cssclass("sta_WF_Boxtit");
            obj.set_fittocontents("width");
            this.divForm.form.divSch.form.divStepGroup.addChild(obj.name, obj);

            obj = new Button("btnCountP01_00_00","177.00","110","105","30",null,null,null,null,null,null,this.divForm.form.divSch.form.divStepGroup.form);
            obj.set_taborder("15");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divSch.form.divStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls01_00_00","55.00","0","15","30",null,null,null,null,null,null,this.divForm.form.divSch.form.divStepGroup.form);
            obj.set_taborder("16");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divSch.form.divStepGroup.addChild(obj.name, obj);

            obj = new Button("btnCountD01_00_00","75.00","0","105","30",null,null,null,null,null,null,this.divForm.form.divSch.form.divStepGroup.form);
            obj.set_taborder("17");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divSch.form.divStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBoxCon01_00_00","177.00","110","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divStepGroup.form);
            obj.set_taborder("18");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnCountP01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"StepSls01_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"btnCountD01_00_00\"/></Contents>");
            this.divForm.form.divSch.form.divStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBox01_00_00","805","108","160","90",null,null,null,null,null,null,this.divForm.form.divSch.form.divStepGroup.form);
            obj.set_taborder("19");
            obj.set_cssclass("pal_WF_StepBox");
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("5");
            obj.set_spacing("0px 20px 0px 20px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staStepTit01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"palStepBoxCon01_00_00\"/></Contents>");
            this.divForm.form.divSch.form.divStepGroup.addChild(obj.name, obj);

            obj = new Div("divGrd","0","221.826","100.00%","690",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","100%","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("9");
            obj.set_text("처리목록");
            obj.set_cssclass("sta_WF_Txt60018");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","40","150","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("13");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTotal\"/><PanelItem id=\"PanelItem01\" componentid=\"staTotal01\"/><PanelItem id=\"PanelItem02\" componentid=\"staTotal02\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn","870","40","400","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem03\" componentid=\"btnGrdDel\"/><PanelItem id=\"PanelItem04\" componentid=\"btnGrdRegi\"/><PanelItem id=\"PanelItem01\" componentid=\"btnGrdDw\"/><PanelItem id=\"PanelItem02\" componentid=\"btnGrdDwAll\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDwAll","774.00","10","150","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("14");
            obj.set_text("전체다운로드(엑셀)");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdList","0","PanelGrdBtn:10","100.00%","538",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"신청번호\"/><Cell col=\"1\" text=\"신청유형\"/><Cell col=\"2\" text=\"서비스유형\"/><Cell col=\"3\" text=\"상태\"/><Cell col=\"4\" text=\"요청자명\"/><Cell col=\"5\" text=\"소속(요청자)\"/><Cell col=\"6\" text=\"발생일시\"/><Cell col=\"7\" text=\"등록일시\"/><Cell col=\"8\" text=\"접수일시\"/><Cell col=\"9\" text=\"처리자명\"/><Cell col=\"10\" text=\"처리완료일시\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:askInfoId\" cssclass=\"CellLink\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:aplySe\" displaytype=\"combotext\" textAlign=\"center\" combodataset=\"dsAplySe\" combocodecol=\"cdId\" combodatacol=\"cdNm\"/><Cell col=\"2\" text=\"bind:srvcSe\" combodataset=\"dsSrvcSe\" combocodecol=\"cdId\" combodatacol=\"cdNm\" textAlign=\"center\" displaytype=\"combotext\"/><Cell col=\"3\" text=\"bind:askStts\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"dsAskStts\" combocodecol=\"cdId\" combodatacol=\"cdNm\"/><Cell col=\"4\" text=\"bind:userNm\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:deptNm\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:ocrnYmd\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm\" calendardisplaynulltype=\"none\" calendareditformat=\"yyyy-MM-dd HH:mm\"/><Cell col=\"7\" text=\"bind:frstRegDt\" calendardateformat=\"yyyy-MM-dd HH:mm\" calendardisplaynulltype=\"none\" textAlign=\"center\" displaytype=\"date\" calendareditformat=\"yyyy-MM-dd HH:mm\"/><Cell col=\"8\" text=\"bind:rcptDt\" displaytype=\"date\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd HH:mm\" calendardisplaynulltype=\"none\" calendareditformat=\"yyyy-MM-dd HH:mm\"/><Cell col=\"9\" text=\"bind:prcrNm\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:prcsDt\" cssclass=\"CellEnd\" displaytype=\"date\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd HH:mm\" calendardisplaynulltype=\"none\" calendareditformat=\"yyyy-MM-dd HH:mm\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Combo("cmbGrdList","1230","0","80","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("3");
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

            obj = new Static("staTotal00","1165","0","65","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("목록수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDw","774.00","10","124","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("5");
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
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","316.00","0","45","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("10");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdRegi","371.00","0","45","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("11");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("Panel00","151","0","180","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("12");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTotal00\"/><PanelItem id=\"PanelItem01\" componentid=\"cmbGrdList\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divPage","0","633","100.00%","36",null,null,null,null,"36",null,this.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("work::COM/util/paging/paging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_visible("true");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Grid("grdExcel","1490","0","12.09%","142",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsEscel");
            obj.set_autofittype("none");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"신청번호\"/><Cell col=\"1\" text=\"신청유형\"/><Cell col=\"2\" text=\"서비스유형\"/><Cell col=\"3\" text=\"상태\"/><Cell col=\"4\" text=\"요청자명\"/><Cell col=\"5\" text=\"소속(요청자)\"/><Cell col=\"6\" text=\"발생일시\"/><Cell col=\"7\" text=\"등록일시\"/><Cell col=\"8\" text=\"접수일시\"/><Cell col=\"9\" text=\"처리자명\"/><Cell col=\"10\" text=\"처리완료일시\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:askInfoId\" cssclass=\"CellLink\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:aplySe\" displaytype=\"combotext\" textAlign=\"center\" combodataset=\"dsAplySe\" combocodecol=\"cdId\" combodatacol=\"cdNm\"/><Cell col=\"2\" text=\"bind:srvcSe\" combodataset=\"dsSrvcSe\" combocodecol=\"cdId\" combodatacol=\"cdNm\" textAlign=\"center\" displaytype=\"combotext\"/><Cell col=\"3\" text=\"bind:askStts\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"dsAskStts\" combocodecol=\"cdId\" combodatacol=\"cdNm\"/><Cell col=\"4\" text=\"bind:userNm\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:deptNm\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:ocrnYmd\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm\" calendardisplaynulltype=\"none\" calendareditformat=\"yyyy-MM-dd HH:mm\"/><Cell col=\"7\" text=\"bind:frstRegDt\" calendardateformat=\"yyyy-MM-dd HH:mm\" calendardisplaynulltype=\"none\" textAlign=\"center\" displaytype=\"date\" calendareditformat=\"yyyy-MM-dd HH:mm\"/><Cell col=\"8\" text=\"bind:rcptDt\" displaytype=\"date\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd HH:mm\" calendardisplaynulltype=\"none\" calendareditformat=\"yyyy-MM-dd HH:mm\"/><Cell col=\"9\" text=\"bind:prcrNm\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:prcsDt\" cssclass=\"CellEnd\" displaytype=\"date\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd HH:mm\" calendardisplaynulltype=\"none\" calendareditformat=\"yyyy-MM-dd HH:mm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.divSch.form.divStepGroup.form
            obj = new Layout("default","",0,0,this.divForm.form.divSch.form.divStepGroup.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.palStepBox01.set_taborder("5");
                p.palStepBox01.set_cssclass("pal_WF_StepBox");
                p.palStepBox01.set_type("vertical");
                p.palStepBox01.set_flexmainaxisalign("center");
                p.palStepBox01.set_flexcrossaxiswrapalign("center");
                p.palStepBox01.set_flexcrossaxisalign("center");
                p.palStepBox01.set_verticalgap("5");
                p.palStepBox01.set_spacing("0px 20px 0px 20px");
                p.palStepBox01.move("805","108","160","90",null,null);

                p.staStepTit01.set_taborder("0");
                p.staStepTit01.set_text("신청");
                p.staStepTit01.set_cssclass("sta_WF_Boxtit");
                p.staStepTit01.set_fittocontents("width");
                p.staStepTit01.move("58","143","100%","60",null,null);

                p.btnCountP01.set_taborder("1");
                p.btnCountP01.set_text("1");
                p.btnCountP01.set_cssclass("btn_WF_CountP");
                p.btnCountP01.set_textAlign("right");
                p.btnCountP01.set_letterSpacing("0px");
                p.btnCountP01.move("177.00","110","105","30",null,null);

                p.StepSls01.set_taborder("2");
                p.StepSls01.set_text("/");
                p.StepSls01.set_textAlign("center");
                p.StepSls01.move("55.00","0","15","30",null,null);

                p.btnCountD01.set_taborder("3");
                p.btnCountD01.set_text("0");
                p.btnCountD01.set_cssclass("btn_WF_CountD");
                p.btnCountD01.set_textAlign("left");
                p.btnCountD01.set_letterSpacing("0px");
                p.btnCountD01.move("75.00","0","105","30",null,null);

                p.palStepBoxCon01.set_taborder("4");
                p.palStepBoxCon01.set_fittocontents("width");
                p.palStepBoxCon01.set_flexcrossaxiswrapalign("center");
                p.palStepBoxCon01.set_flexmainaxisalign("center");
                p.palStepBoxCon01.set_horizontalgap("5");
                p.palStepBoxCon01.move("177.00","110","100%","40",null,null);

                p.BoxArw01.set_taborder("6");
                p.BoxArw01.set_text("");
                p.BoxArw01.set_cssclass("sta_WF_BoxArw");
                p.BoxArw01.set_visible("true");
                p.BoxArw01.move("175","119","40","40",null,null);

                p.staStepTit01_00.set_taborder("7");
                p.staStepTit01_00.set_text("접수");
                p.staStepTit01_00.set_cssclass("sta_WF_Boxtit");
                p.staStepTit01_00.set_fittocontents("width");
                p.staStepTit01_00.move("58","143","100%","60",null,null);

                p.btnCountP01_00.set_taborder("8");
                p.btnCountP01_00.set_text("1");
                p.btnCountP01_00.set_cssclass("btn_WF_CountP");
                p.btnCountP01_00.set_textAlign("right");
                p.btnCountP01_00.set_letterSpacing("0px");
                p.btnCountP01_00.move("177.00","110","105","30",null,null);

                p.StepSls01_00.set_taborder("9");
                p.StepSls01_00.set_text("/");
                p.StepSls01_00.set_textAlign("center");
                p.StepSls01_00.move("55.00","0","15","30",null,null);

                p.btnCountD01_00.set_taborder("10");
                p.btnCountD01_00.set_text("0");
                p.btnCountD01_00.set_cssclass("btn_WF_CountD");
                p.btnCountD01_00.set_textAlign("left");
                p.btnCountD01_00.set_letterSpacing("0px");
                p.btnCountD01_00.move("75.00","0","105","30",null,null);

                p.palStepBoxCon01_00.set_taborder("11");
                p.palStepBoxCon01_00.set_fittocontents("width");
                p.palStepBoxCon01_00.set_flexcrossaxiswrapalign("center");
                p.palStepBoxCon01_00.set_flexmainaxisalign("center");
                p.palStepBoxCon01_00.set_horizontalgap("5");
                p.palStepBoxCon01_00.move("177.00","110","100%","40",null,null);

                p.palStepBox01_00.set_taborder("12");
                p.palStepBox01_00.set_cssclass("pal_WF_StepBox");
                p.palStepBox01_00.set_type("vertical");
                p.palStepBox01_00.set_flexmainaxisalign("center");
                p.palStepBox01_00.set_flexcrossaxiswrapalign("center");
                p.palStepBox01_00.set_flexcrossaxisalign("center");
                p.palStepBox01_00.set_verticalgap("5");
                p.palStepBox01_00.set_spacing("0px 20px 0px 20px");
                p.palStepBox01_00.move("805","108","160","90",null,null);

                p.BoxArw01_00.set_taborder("13");
                p.BoxArw01_00.set_text("");
                p.BoxArw01_00.set_cssclass("sta_WF_BoxArw");
                p.BoxArw01_00.set_visible("true");
                p.BoxArw01_00.move("175","119","40","40",null,null);

                p.staStepTit01_00_00.set_taborder("14");
                p.staStepTit01_00_00.set_text("처리");
                p.staStepTit01_00_00.set_cssclass("sta_WF_Boxtit");
                p.staStepTit01_00_00.set_fittocontents("width");
                p.staStepTit01_00_00.move("58","143","100%","60",null,null);

                p.btnCountP01_00_00.set_taborder("15");
                p.btnCountP01_00_00.set_text("1");
                p.btnCountP01_00_00.set_cssclass("btn_WF_CountP");
                p.btnCountP01_00_00.set_textAlign("right");
                p.btnCountP01_00_00.set_letterSpacing("0px");
                p.btnCountP01_00_00.move("177.00","110","105","30",null,null);

                p.StepSls01_00_00.set_taborder("16");
                p.StepSls01_00_00.set_text("/");
                p.StepSls01_00_00.set_textAlign("center");
                p.StepSls01_00_00.move("55.00","0","15","30",null,null);

                p.btnCountD01_00_00.set_taborder("17");
                p.btnCountD01_00_00.set_text("0");
                p.btnCountD01_00_00.set_cssclass("btn_WF_CountD");
                p.btnCountD01_00_00.set_textAlign("left");
                p.btnCountD01_00_00.set_letterSpacing("0px");
                p.btnCountD01_00_00.move("75.00","0","105","30",null,null);

                p.palStepBoxCon01_00_00.set_taborder("18");
                p.palStepBoxCon01_00_00.set_fittocontents("width");
                p.palStepBoxCon01_00_00.set_flexcrossaxiswrapalign("center");
                p.palStepBoxCon01_00_00.set_flexmainaxisalign("center");
                p.palStepBoxCon01_00_00.set_horizontalgap("5");
                p.palStepBoxCon01_00_00.move("177.00","110","100%","40",null,null);

                p.palStepBox01_00_00.set_taborder("19");
                p.palStepBox01_00_00.set_cssclass("pal_WF_StepBox");
                p.palStepBox01_00_00.set_type("vertical");
                p.palStepBox01_00_00.set_flexmainaxisalign("center");
                p.palStepBox01_00_00.set_flexcrossaxiswrapalign("center");
                p.palStepBox01_00_00.set_flexcrossaxisalign("center");
                p.palStepBox01_00_00.set_verticalgap("5");
                p.palStepBox01_00_00.set_spacing("0px 20px 0px 20px");
                p.palStepBox01_00_00.move("805","108","160","90",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("4");
            this.divForm.form.divSch.form.divStepGroup.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divSch.form.divStepGroup.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divSch.form.divStepGroup.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.palStepBox01.move("0","0","160","90",null,null);

                p.BoxArw01.move("170","25","40","40",null,null);

                p.palStepBox01_00.move("220","0","160","90",null,null);

                p.BoxArw01_00.move("390","25","40","40",null,null);

                p.palStepBox01_00_00.move("440","0","160","90",null,null);
            	}
            );
            obj.set_type("default");
            obj.set_flexcrossaxisalign("center");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("4");
            this.divForm.form.divSch.form.divStepGroup.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divSch.form
            obj = new Layout("default","",0,0,this.divForm.form.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divStepGroup.set_taborder("0");
                p.divStepGroup.set_text("Div00");
                p.divStepGroup.set_fittocontents("height");
                p.divStepGroup.move("20","62","100%","100",null,null);
            	}
            );
            obj.set_spacing("0px 20px 10px 20px");
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
                p.divStepGroup.move("20","62","100%","120",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("0px");
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
                p.Static00.set_taborder("9");
                p.Static00.set_text("처리목록");
                p.Static00.set_cssclass("sta_WF_Txt60018");
                p.Static00.move("0","0","100%","34",null,null);

                p.Panel01.set_taborder("13");
                p.Panel01.set_fittocontents("width");
                p.Panel01.move("0","40","150","34",null,null);

                p.PanelGrdBtn.set_taborder("4");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.set_flexgrow("1");
                p.PanelGrdBtn.move("870","40","400","34",null,null);

                p.btnGrdDwAll.set_taborder("14");
                p.btnGrdDwAll.set_text("전체다운로드(엑셀)");
                p.btnGrdDwAll.set_cssclass("btn_WF_GrdDw");
                p.btnGrdDwAll.set_visible("true");
                p.btnGrdDwAll.set_fittocontents("width");
                p.btnGrdDwAll.move("774.00","10","150","34",null,null);

                p.grdList.set_taborder("1");
                p.grdList.set_binddataset("dsList");
                p.grdList.set_autofittype("none");
                p.grdList.move("0","PanelGrdBtn:10","100.00%","538",null,null);

                p.cmbGrdList.set_taborder("3");
                p.cmbGrdList.set_visible("true");
                p.cmbGrdList.set_innerdataset(divForm_form_divGrd_form_cmbGrdList_innerdataset);
                p.cmbGrdList.set_codecolumn("codecolumn");
                p.cmbGrdList.set_datacolumn("datacolumn");
                p.cmbGrdList.set_text("10");
                p.cmbGrdList.set_value("10");
                p.cmbGrdList.set_index("0");
                p.cmbGrdList.move("1230","0","80","34",null,null);

                p.staTotal00.set_taborder("2");
                p.staTotal00.set_text("목록수");
                p.staTotal00.set_cssclass("sta_WF_SchLabel");
                p.staTotal00.set_fittocontents("width");
                p.staTotal00.set_visible("true");
                p.staTotal00.move("1165","0","65","34",null,null);

                p.btnGrdDw.set_taborder("5");
                p.btnGrdDw.set_text("다운로드(엑셀)");
                p.btnGrdDw.set_cssclass("btn_WF_GrdDw");
                p.btnGrdDw.set_visible("true");
                p.btnGrdDw.set_fittocontents("width");
                p.btnGrdDw.move("774.00","10","124","34",null,null);

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
                p.staTotal02.set_fittocontents("width");
                p.staTotal02.move("staTotal01:0","40","30","34",null,null);

                p.btnGrdDel.set_taborder("10");
                p.btnGrdDel.set_text("삭제");
                p.btnGrdDel.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel.set_visible("false");
                p.btnGrdDel.set_fittocontents("width");
                p.btnGrdDel.move("316.00","0","45","34",null,null);

                p.btnGrdRegi.set_taborder("11");
                p.btnGrdRegi.set_text("등록");
                p.btnGrdRegi.set_cssclass("btn_WF_SmallBlack");
                p.btnGrdRegi.set_visible("false");
                p.btnGrdRegi.set_fittocontents("width");
                p.btnGrdRegi.move("371.00","0","45","34",null,null);

                p.Panel00.set_taborder("12");
                p.Panel00.set_flexmainaxisalign("end");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.set_fittocontents("width");
                p.Panel00.move("151","0","180","34",null,null);

                p.divPage.set_taborder("0");
                p.divPage.set_text("Div00");
                p.divPage.set_url("work::COM/util/paging/paging.xfdl");
                p.divPage.set_formscrollbartype("none none");
                p.divPage.set_formscrolltype("none");
                p.divPage.set_visible("true");
                p.divPage.set_minheight("36");
                p.divPage.set_maxheight("");
                p.divPage.move("0","633","100.00%","36",null,null);
            	}
            );
            obj.set_verticalgap("10");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            this.divForm.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdList.set_autofittype("none");

                p.btnGrdDw.set_visible("false");

                p.PanelGrdBtn.set_flexwrap("wrap");
                p.PanelGrdBtn.set_verticalgap("10");
                p.PanelGrdBtn.set_fittocontents("height");
                p.PanelGrdBtn.move("870","40","400","34",null,null);
            	}
            );
            obj.set_verticalgap("8");
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
                p.divSch.set_taborder("1");
                p.divSch.set_text("Div00");
                p.divSch.set_formscrollbartype("none none");
                p.divSch.set_formscrolltype("none");
                p.divSch.set_fittocontents("height");
                p.divSch.move("0","0","100.00%","120",null,null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","221.826","100.00%","690",null,null);
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
                p.divGrd.move("0","228","100%","714",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("0px 20px 0px 20px");
            obj.set_flexmainaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexcrossaxisalign("start");
            obj.set_verticalgap("20");
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
                p.set_titletext("처리현황목록조회");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.set_fittocontents("height");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","70",null,null,"60","0");

                p.divTitle.set_taborder("1");
                p.divTitle.set_text("");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.set_formscrolltype("none");
                p.divTitle.set_maxwidth("");
                p.divTitle.move("0","0",null,"50","60",null);

                p.grdExcel.set_taborder("2");
                p.grdExcel.set_binddataset("dsEscel");
                p.grdExcel.set_autofittype("none");
                p.grdExcel.set_visible("false");
                p.grdExcel.move("1490","0","12.09%","142",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",480,600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.set_cssclass("div_WF_QuickFrBgM");
                p.divForm.move("0","70","100.00%","864",null,null);

                p.divTitle.move("0","0",null,"50","0",null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.divGrd.form.staTotal01","text","dsPage","totalRecordCount");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.divSch.form.divStepGroup.form.btnCountP01","text","dsListCnt","cnt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.divSch.form.divStepGroup.form.btnCountD01","text","dsListCnt","totCnt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.divSch.form.divStepGroup.form.btnCountP01_00","text","dsListCnt","clrCnt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.divSch.form.divStepGroup.form.btnCountD01_00","text","dsListCnt","totClrCnt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.divSch.form.divStepGroup.form.btnCountP01_00_00","text","dsListCnt","prcrCnt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.divSch.form.divStepGroup.form.btnCountD01_00_00","text","dsListCnt","totPrcrCnt");
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
        this.registerScript("COM010M08.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	COM010M08.xfdl
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
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function (page)
        {
        	var recordCountPerPage = this.divForm.form.divGrd.form.cmbGrdList.value;
        	this.dsSearch.setColumn(0, "currentPageNo", page);
        	this.dsSearch.setColumn(0, "recordCountPerPage", recordCountPerPage);
        	this.getSearchTransaction();
        };

        //저장
        this.cfnSave = function ()
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

        //닫기
        this.cfnClose = function ()
        {
        	trace('cfnClose');
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.getSearchTransaction = function()
        {
        	var strSvcId    = "search";
        	var strSvcUrl   = "cic/prcsCsafInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsListCnt=dsListCnt dsList=dsList dsPage=dsPage";
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
        	var strSvcUrl   = "cic/prcsCsafInq.do";
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

        this.fnPopupCallback = function(sPopupId, sRtn)
        {
        	if(sPopupId =="askInfoPopup") {
        		if (this.gfnIsNull(sRtn)) return;
        		var objRtn = JSON.parse(sRtn);
        		if(objRtn.saveFlag == "Y") {
        			this.cfnSearch();
        		}
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	this.gfnCmmCode("srvcSe", "dsSrvcSe", "ASK_SRVC_SE", "");
        	this.gfnCmmCode("aplySe", "dsAplySe", "ASK_APLY_SE", "");
        	this.gfnCmmCode("askStts", "dsAskStts", "ASK_STTS", "");
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

        this.divForm_divGrd_grdList_oncellclick = function(obj,e)
        {
        	if(e.cell == 0) {
        		var sTitle = "신청정보확인";
        		var objArg   = {"askInfoId" : this.dsList.getColumn(e.row, "askInfoId")
        					   };

        		var objOption = {
        			popuptype: "modal"	//modal,modaless
        			//, width: 1200
        			//, height: 950
        			, autosize: true
        			, title: sTitle
        			, resize: true
        			, titlebar: true
        		};
        		var sPopupCallBack = "fnPopupCallback";

        		this.gfnOpenPopup("askInfoPopup", "work::COM/cic/COM010P051.xfdl", objArg, sPopupCallBack, objOption);
        	}
        };

        this.divForm_divSch_divStepGroup_StepSls01_onclick = function(obj,e)
        {
        	this.dsSearch.setColumn(0, "askStts", "1");
        	this.cfnSearch(1);
        };

        this.divForm_divSch_divStepGroup_StepSls01_00_onclick = function(obj,e)
        {
        	this.dsSearch.setColumn(0, "askStts", "2");
        	this.cfnSearch(1);
        };

        this.divForm_divSch_divStepGroup_StepSls01_00_00_onclick = function(obj,e)
        {
        	this.dsSearch.setColumn(0, "askStts", "3");
        	this.cfnSearch(1);
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
            this.divForm.form.divSch.form.divStepGroup.form.btnCountP01.addEventHandler("onclick",this.divForm_divSch_divStepGroup_StepSls01_onclick,this);
            this.divForm.form.divSch.form.divStepGroup.form.btnCountD01.addEventHandler("onclick",this.divForm_divSch_divStepGroup_StepSls01_onclick,this);
            this.divForm.form.divSch.form.divStepGroup.form.btnCountP01_00.addEventHandler("onclick",this.divForm_divSch_divStepGroup_StepSls01_00_onclick,this);
            this.divForm.form.divSch.form.divStepGroup.form.btnCountD01_00.addEventHandler("onclick",this.divForm_divSch_divStepGroup_StepSls01_00_onclick,this);
            this.divForm.form.divSch.form.divStepGroup.form.btnCountP01_00_00.addEventHandler("onclick",this.divForm_divSch_divStepGroup_StepSls01_00_00_onclick,this);
            this.divForm.form.divSch.form.divStepGroup.form.btnCountD01_00_00.addEventHandler("onclick",this.divForm_divSch_divStepGroup_StepSls01_00_00_onclick,this);
            this.divForm.form.divGrd.form.btnGrdDwAll.addEventHandler("onclick",this.divForm_divGrd_btnGrdDwAll_onclick,this);
            this.divForm.form.divGrd.form.grdList.addEventHandler("oncellclick",this.divForm_divGrd_grdList_oncellclick,this);
            this.divForm.form.divGrd.form.cmbGrdList.addEventHandler("onitemchanged",this.divForm_divGrd_cmbGrdList_onitemchanged,this);
            this.divForm.form.divGrd.form.btnGrdDw.addEventHandler("onclick",this.divForm_divGrd_btnGrdDw_onclick,this);
            this.grdExcel.addEventHandler("oncellclick",this.divForm_divGrd_grdList_oncellclick,this);
        };
        this.loadIncludeScript("COM010M08.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
