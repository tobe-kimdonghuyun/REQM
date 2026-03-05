(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM022M03");
            this.set_titletext("휴일 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"calYmd\" type=\"STRING\" size=\"256\"/><Column id=\"hldyDesc\" type=\"STRING\" size=\"256\"/><Column id=\"dowCd\" type=\"STRING\" size=\"256\"/><Column id=\"hldyCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"year\" type=\"STRING\" size=\"256\"/><Column id=\"month\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYear", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMonth", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdTypeId\">MONTH</Col><Col id=\"cdId\">01</Col><Col id=\"cdNm\">01</Col></Row><Row><Col id=\"cdTypeId\">MONTH</Col><Col id=\"cdId\">02</Col><Col id=\"cdNm\">02</Col></Row><Row><Col id=\"cdTypeId\">MONTH</Col><Col id=\"cdId\">03</Col><Col id=\"cdNm\">03</Col></Row><Row><Col id=\"cdTypeId\">MONTH</Col><Col id=\"cdId\">04</Col><Col id=\"cdNm\">04</Col></Row><Row><Col id=\"cdTypeId\">MONTH</Col><Col id=\"cdId\">05</Col><Col id=\"cdNm\">05</Col></Row><Row><Col id=\"cdTypeId\">MONTH</Col><Col id=\"cdId\">06</Col><Col id=\"cdNm\">06</Col></Row><Row><Col id=\"cdTypeId\">MONTH</Col><Col id=\"cdId\">07</Col><Col id=\"cdNm\">07</Col></Row><Row><Col id=\"cdTypeId\">MONTH</Col><Col id=\"cdId\">08</Col><Col id=\"cdNm\">08</Col></Row><Row><Col id=\"cdTypeId\">MONTH</Col><Col id=\"cdId\">09</Col><Col id=\"cdNm\">09</Col></Row><Row><Col id=\"cdTypeId\">MONTH</Col><Col id=\"cdId\">10</Col><Col id=\"cdNm\">10</Col></Row><Row><Col id=\"cdTypeId\">MONTH</Col><Col id=\"cdId\">11</Col><Col id=\"cdNm\">11</Col></Row><Row><Col id=\"cdTypeId\">MONTH</Col><Col id=\"cdId\">12</Col><Col id=\"cdNm\">12</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo1", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo2", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("<ColumnInfo><Column id=\"totalRecordCount\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFlList", this);
            obj._setContents("<ColumnInfo><Column id=\"calYmd\" type=\"STRING\" size=\"256\"/><Column id=\"hldyDesc\" type=\"STRING\" size=\"256\"/><Column id=\"dowCd\" type=\"STRING\" size=\"256\"/><Column id=\"hldyCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"48","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","divTitle:20",null,"868","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("divSch","0","0","100.00%","148",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","100%","50",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("0");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("40");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"pan00\"/><PanelItem id=\"PanelItem03\" componentid=\"pan01\"/><PanelItem id=\"PanelItem00\" componentid=\"pan02\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan02","1694.00","398","360","1",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("1");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan00","20.00","67","360","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03\"/><PanelItem id=\"PanelItem01\" componentid=\"cboYear\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("7");
            obj.set_text("년도");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panClose","30","151","100%","30",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnSchClose\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSchClose","1251","185","52","29",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_SchClose");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("5");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSch\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSch","570","192","112","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("6");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            obj.set_fittocontents("width");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cboYear","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("8");
            obj.set_innerdataset("dsYear");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("9");
            obj.set_text("월");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cboMonth","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("10");
            obj.set_innerdataset("dsMonth");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01","20.00","67","360","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("11");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"cboMonth\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","0","divSch:30","100.00%","634",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.addChild(obj.name, obj);

            obj = new Grid("grdHoliday","0","44","100%","500",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("9");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"300\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"일자\"/><Cell col=\"1\" text=\"요일\"/><Cell col=\"2\" text=\"평일/휴일\"/><Cell col=\"3\" text=\"설명\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" cssclass=\"expr:hldyCd==&apos;HODTYP02&apos;?&apos;CellTxtRed&apos;:&apos;&apos;\" displaytype=\"normal\" maskeditformat=\"aaaa-aa-aa\" text=\"expr:calYmd.substring(0, 4) + &quot;-&quot; + calYmd.substring(4, 6) + &quot;-&quot; + calYmd.substring(6, 8)\"/><Cell col=\"1\" text=\"bind:dowCd\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"dsCombo1\" combodatacol=\"cdNm\" combocodecol=\"cdId\" textAlign=\"center\" combopopuptype=\"normal\" cssclass=\"expr:hldyCd==&apos;HODTYP02&apos;?&apos;CellTxtRed&apos;:&apos;&apos;\"/><Cell col=\"2\" text=\"bind:hldyCd\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"dsCombo2\" combocodecol=\"cdId\" combodatacol=\"cdNm\" textAlign=\"center\" combopopuptype=\"normal\" cssclass=\"expr:hldyCd==&apos;HODTYP02&apos;?&apos;CellTxtRed&apos;:&apos;&apos;\"/><Cell col=\"3\" text=\"bind:hldyDesc\" cssclass=\"expr:hldyCd==&apos;HODTYP02&apos;?&apos;CellTxtRed&apos;:&apos;&apos;\" edittype=\"normal\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn",null,"0","550","34","0",null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("width");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staTotal00\"/><PanelItem id=\"PanelItem02\" componentid=\"grdListCnt\"/><PanelItem id=\"PanelItem03\" componentid=\"btnGrdDel\"/><PanelItem id=\"PanelItem04\" componentid=\"btnGrdRegi\"/><PanelItem id=\"PanelItem06\" componentid=\"btnGrdExcel\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdExcel","774.00","10","124","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("다운로드(엑셀)");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","27","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("6");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal01","staTotal:0","0","25","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("5");
            obj.set_text("99");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","staTotal01:0","0","30","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","316.00","0","45","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("7");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdRegi","371.00","0","45","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("8");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Combo("grdListCnt","1230","0","80","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_divGrd_form_grdListCnt_innerdataset = new nexacro.NormalDataset("divForm_form_divGrd_form_grdListCnt_innerdataset", obj);
            divForm_form_divGrd_form_grdListCnt_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_divGrd_form_grdListCnt_innerdataset);
            obj.set_text("10");
            obj.set_value("10");
            obj.set_index("1");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal00","1165","0","65","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_text("목록수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divPage","0","grdHoliday:10","100%","36",null,null,null,null,"36",null,this.divForm.form.divGrd.form);
            obj.set_taborder("10");
            obj.set_text("Div00");
            obj.set_url("work::COM/util/paging/paging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divPage","0","Grid00_00:1","1420","36",null,null,null,null,"36",null,this.divForm.form.divGrd.form.divPage.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("work::COM/util/paging/paging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divGrd.form.divPage.addChild(obj.name, obj);

            obj = new Div("divPopBtn","0","divForm:20",null,"60","60",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.addChild(obj.name, obj);

            obj = new Button("btnYearReset","200.00","365","100","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("0");
            obj.set_text("연간 휴일정보 초기화");
            obj.set_cssclass("btn_WF_No");
            obj.set_fittocontents("width");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Button("btnMonthReset","200.00","365","100","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("2");
            obj.set_text("월간 휴일정보 초기화");
            obj.set_cssclass("btn_WF_No");
            obj.set_fittocontents("width");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Button("btnOmission","200.00","365","100","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("3");
            obj.set_text("누락된 일자 자동 채움");
            obj.set_cssclass("btn_WF_No");
            obj.set_fittocontents("width");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Button("btnYes","457.00","30","100","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Div("divGuide","1590.00","135","450","385",null,null,null,null,null,null,this);
            obj.set_taborder("3");
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
                p.panLabel.set_horizontalgap("40");
                p.panLabel.set_fittocontents("height");
                p.panLabel.set_maxheight("");
                p.panLabel.move("20","14","100%","50",null,null);

                p.pan02.set_taborder("1");
                p.pan02.set_type("horizontal");
                p.pan02.set_horizontalgap("10");
                p.pan02.set_flexgrow("1");
                p.pan02.set_maxheight("");
                p.pan02.set_minwidth("");
                p.pan02.move("1694.00","398","360","1",null,null);

                p.pan00.set_taborder("2");
                p.pan00.set_type("horizontal");
                p.pan00.set_horizontalgap("10");
                p.pan00.set_flexwrap("nowrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_flexgrow("1");
                p.pan00.set_minwidth("");
                p.pan00.move("20.00","67","360","40",null,null);

                p.staLabel03.set_taborder("7");
                p.staLabel03.set_text("년도");
                p.staLabel03.set_cssclass("sta_WF_SchLabel");
                p.staLabel03.set_flexshrink("0");
                p.staLabel03.set_maxwidth("");
                p.staLabel03.move("0","0","100","40",null,null);

                p.panClose.set_taborder("4");
                p.panClose.set_type("vertical");
                p.panClose.set_cssclass("pal_WF_SchLine");
                p.panClose.set_flexcrossaxisalign("end");
                p.panClose.move("30","151","100%","30",null,null);

                p.btnSchClose.set_taborder("3");
                p.btnSchClose.set_cssclass("btn_WF_SchClose");
                p.btnSchClose.move("1251","185","52","29",null,null);

                p.panSchBtn.set_taborder("5");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100%","40",null,null);

                p.btnSch.set_taborder("6");
                p.btnSch.set_text("조회하기");
                p.btnSch.set_cssclass("btn_WF_Search");
                p.btnSch.set_fittocontents("width");
                p.btnSch.move("570","192","112","40",null,null);

                p.cboYear.set_taborder("8");
                p.cboYear.set_innerdataset("dsYear");
                p.cboYear.set_codecolumn("cdId");
                p.cboYear.set_datacolumn("cdNm");
                p.cboYear.set_displaynulltext("선택");
                p.cboYear.set_text("");
                p.cboYear.set_index("-1");
                p.cboYear.move("200.00","128","100%","40",null,null);

                p.staLabel03_00.set_taborder("9");
                p.staLabel03_00.set_text("월");
                p.staLabel03_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel03_00.set_flexshrink("0");
                p.staLabel03_00.set_maxwidth("");
                p.staLabel03_00.move("0","0","100","40",null,null);

                p.cboMonth.set_taborder("10");
                p.cboMonth.set_innerdataset("dsMonth");
                p.cboMonth.set_codecolumn("cdId");
                p.cboMonth.set_datacolumn("cdNm");
                p.cboMonth.set_displaynulltext("선택");
                p.cboMonth.set_text("");
                p.cboMonth.set_index("-1");
                p.cboMonth.move("200.00","128","100%","40",null,null);

                p.pan01.set_taborder("11");
                p.pan01.set_type("horizontal");
                p.pan01.set_horizontalgap("10");
                p.pan01.set_flexwrap("nowrap");
                p.pan01.set_fittocontents("height");
                p.pan01.set_flexgrow("1");
                p.pan01.set_minwidth("");
                p.pan01.move("20.00","67","360","40",null,null);
            	}
            );
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            this.divForm.form.divSch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divSch.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divSch.form,
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
            //-- Default Layout : this.divForm.form.divGrd.form.divPage.form.divPage
            obj = new Layout("default","",0,0,this.divForm.form.divGrd.form.divPage.form.divPage.form,function(p){});
            this.divForm.form.divGrd.form.divPage.form.divPage.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divGrd.form.divPage.form
            obj = new Layout("default","",0,0,this.divForm.form.divGrd.form.divPage.form,function(p){});
            this.divForm.form.divGrd.form.divPage.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdHoliday.set_taborder("9");
                p.grdHoliday.set_binddataset("dsList");
                p.grdHoliday.set_autofittype("col");
                p.grdHoliday.move("0","44","100%","500",null,null);

                p.PanelGrdBtn.set_taborder("2");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_fittocontents("width");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.move(null,"0","550","34","0",null);

                p.btnGrdExcel.set_taborder("3");
                p.btnGrdExcel.set_text("다운로드(엑셀)");
                p.btnGrdExcel.set_cssclass("btn_WF_GrdDw");
                p.btnGrdExcel.set_visible("true");
                p.btnGrdExcel.set_fittocontents("width");
                p.btnGrdExcel.move("774.00","10","124","34",null,null);

                p.staTotal.set_taborder("6");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","0","27","34",null,null);

                p.staTotal01.set_taborder("5");
                p.staTotal01.set_text("99");
                p.staTotal01.set_cssclass("sta_WF_Total");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.set_fittocontents("width");
                p.staTotal01.move("staTotal:0","0","25","34",null,null);

                p.staTotal02.set_taborder("4");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.move("staTotal01:0","0","30","34",null,null);

                p.btnGrdDel.set_taborder("7");
                p.btnGrdDel.set_text("삭제");
                p.btnGrdDel.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel.set_visible("false");
                p.btnGrdDel.set_fittocontents("width");
                p.btnGrdDel.move("316.00","0","45","34",null,null);

                p.btnGrdRegi.set_taborder("8");
                p.btnGrdRegi.set_text("등록");
                p.btnGrdRegi.set_cssclass("btn_WF_SmallBlack");
                p.btnGrdRegi.set_visible("false");
                p.btnGrdRegi.set_fittocontents("width");
                p.btnGrdRegi.move("371.00","0","45","34",null,null);

                p.grdListCnt.set_taborder("1");
                p.grdListCnt.set_visible("false");
                p.grdListCnt.set_innerdataset(divForm_form_divGrd_form_grdListCnt_innerdataset);
                p.grdListCnt.set_codecolumn("codecolumn");
                p.grdListCnt.set_datacolumn("datacolumn");
                p.grdListCnt.set_text("10");
                p.grdListCnt.set_value("10");
                p.grdListCnt.set_index("1");
                p.grdListCnt.move("1230","0","80","34",null,null);

                p.staTotal00.set_taborder("0");
                p.staTotal00.set_text("목록수");
                p.staTotal00.set_cssclass("sta_WF_SchLabel");
                p.staTotal00.set_fittocontents("width");
                p.staTotal00.set_visible("false");
                p.staTotal00.move("1165","0","65","34",null,null);

                p.divPage.set_taborder("10");
                p.divPage.set_text("Div00");
                p.divPage.set_url("work::COM/util/paging/paging.xfdl");
                p.divPage.set_formscrollbartype("none none");
                p.divPage.set_formscrolltype("none");
                p.divPage.set_minheight("36");
                p.divPage.set_maxheight("");
                p.divPage.move("0","grdHoliday:10","100%","36",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divGrd.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

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
                p.divSch.move("0","0","100.00%","148",null,null);

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
            obj = new Layout("mobile","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divPopBtn.form
            obj = new Layout("default","",0,0,this.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnYearReset.set_taborder("0");
                p.btnYearReset.set_text("연간 휴일정보 초기화");
                p.btnYearReset.set_cssclass("btn_WF_No");
                p.btnYearReset.set_fittocontents("width");
                p.btnYearReset.move("200.00","365","100","40",null,null);

                p.btnMonthReset.set_taborder("2");
                p.btnMonthReset.set_text("월간 휴일정보 초기화");
                p.btnMonthReset.set_cssclass("btn_WF_No");
                p.btnMonthReset.set_fittocontents("width");
                p.btnMonthReset.move("200.00","365","100","40",null,null);

                p.btnOmission.set_taborder("3");
                p.btnOmission.set_text("누락된 일자 자동 채움");
                p.btnOmission.set_cssclass("btn_WF_No");
                p.btnOmission.set_fittocontents("width");
                p.btnOmission.move("200.00","365","100","40",null,null);

                p.btnYes.set_taborder("1");
                p.btnYes.set_text("확인");
                p.btnYes.set_cssclass("btn_WF_Yes");
                p.btnYes.set_fittocontents("width");
                p.btnYes.move("457.00","30","100","40",null,null);
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
            obj.set_spacing("10px 20px 10px 20px");
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
            obj.set_spacing("0px 20px 0px  20px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("20");
            this.divPopBtn.form.addLayout(obj.name, obj);
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
            obj = new Layout("mobile","",0,0,this.divGuide.form,
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
                p.set_titletext("휴일 관리");

                p.divTitle.set_taborder("1");
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
                p.divForm.move("0","divTitle:20",null,"868","60",null);

                p.divPopBtn.set_taborder("2");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.move("0","divForm:20",null,"60","60",null);

                p.divGuide.set_taborder("3");
                p.divGuide.set_text("div00");
                p.divGuide.set_visible("false");
                p.divGuide.set_cssclass("div_GD_Tip");
                p.divGuide.move("1590.00","135","450","385",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","",480,600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divPopBtn.move("0","divForm:20",null,"60","0",null);

                p.divForm.move("20","divTitle:20",null,"868","20",null);

                p.divTitle.move("0","0",null,"48","0",null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.divSch.form.cboYear","value","dsSearch","year");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.divSch.form.cboMonth","value","dsSearch","month");
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
        this.registerScript("COM022M03.xfdl", function() {
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
        * 2024/10/28			조규완						최초생성
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
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.getSearchTransaction = function() {

        	var strSvcId    = "search";
        	var strSvcUrl   = "sysMng/dailyHldyYnInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsList=dsList dsFlList=dsFlList dsYear=dsYear";
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
        	var strSvcUrl   = "sysMng/dailyHldyYnStrg.do";
        	var inData      = "dsList=dsList:U";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= false;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        this.gridResetTransaction = function()
        {
        	var strSvcId    = "reset";
        	var strSvcUrl   = "sysMng/resetHldyInfoStrg.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsResult=dsResult";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= false;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        this.gridAddOmissionTransaction = function()
        {
        	var strSvcId    = "omission";
        	var strSvcUrl   = "sysMng/addOmissionDay.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsResult=dsResult";
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
        			this.fnSearchSetting();
        			this.divForm.form.divGrd.form.resetScroll();
        			break;

        		case "save":
        			var gvRetMsg = this.objApp.getVariable("gvRetMsg");
        			this.gfnAlertMsg("save_complete", gvRetMsg, null, "msgCallback");
        			break;

        		case "reset":
        			this.getSearchTransaction();
        			break;

        		case "omission":
        			this.getSearchTransaction();
        			break;

        		case "excel":
        			//다운로드
        			console.log(errorMsg);	// 다운로드 가능한 파일 URL
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
        			console.log(chk);
        			if(chk.length > 0) {
        				this.dsList.deleteMultiRows(chk);
        			}
        			this.gridSaveTransaction();
        		}
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	this.gfnCmmCode("combo", "dsCombo1", "DOW_CD", "");
        	this.gfnCmmCode("combo", "dsCombo2", "WKDY_HLDY_SE", "");

        	this.fnSetSearchHldyInfo();
        };

        // 오늘 날짜목록 가져오기
        this.fnSetSearchHldyInfo = function()
        {
        	var objDate = new Date();
        	var tYear = objDate.getFullYear().toString();
        	var tMonth = (objDate.getMonth() + 1).toString().padLeft(2, "0");

        	// 년, 월 index값 찾아서 default값 세팅하기
        	this.dsSearch.setColumn(0, "year", tYear);
        	this.dsSearch.setColumn(0, "month", tMonth);

        	this.getSearchTransaction();
        }

        this.fnSearchSetting = function()
        {
        	var month = this.dsSearch.getColumn(0, "month");
        	this.divForm.form.divGrd.form.staTotal01.set_text(this.dsList.rowcount);

        	for (var i = 1; i <= 12; i++) {
        		var btnCnt = i.toString().padLeft(2, "0");
        		var btnId = "btn" + btnCnt;
        		if (btnCnt == month) {
        			this.divForm.form.divGrd.form.divPage.form.components[btnId].set_cssclass("btn_WF_PageNum_S");
        		} else {
        			this.divForm.form.divGrd.form.divPage.form.components[btnId].set_cssclass("btn_WF_PageNum");
        		}
        	}

        	this.dsSearch.setColumn(0, "type", "");
        }

        this.fnPaginationSearch = function(sPage)
        {
        	var year = this.dsSearch.getColumn(0, "year");
        	var month = this.dsSearch.getColumn(0, "month");

        	switch(sPage) {
        		case "First":
        			var calYmd = this.dsFlList.getColumn(0, "calYmd");
        			year = calYmd.substring(0, 4);
        			month = calYmd.substring(4, 6);
        			break;
        		case "Last":
        			var calYmd = this.dsFlList.getColumn(1, "calYmd");
        			year = calYmd.substring(0, 4);
        			month = calYmd.substring(4, 6);
        			break;
        		case "Prev":
        			if (month == "01") {
        				year = (nexacro.toNumber(year) - 1).toString();
        				month = "12"
        			} else {
        				month = (nexacro.toNumber(month) -1).toString();
        				if (month.length == 1) {
        					month = "0" + month;
        				}
        			}
        			break;
        		case "Next":
        			if (month == "12") {
        				year = (nexacro.toNumber(year) + 1).toString();
        				month = "01"
        			} else {
        				month = (nexacro.toNumber(month) + 1).toString();
        				if (month.length == 1) {
        					month = "0" + month;
        				}
        			}
        			break;
        		default:
        			break;
        	}

        	var yearRow = this.dsYear.findRow("cdNm", year);

        	console.log(yearRow);

        	if (yearRow == -1) {
        		var nRow = this.dsYear.addRow();
        		this.dsYear.setColumn(nRow, "cdTypeId", "YEAR");
        		this.dsYear.setColumn(nRow, "cdId", year);
        		this.dsYear.setColumn(nRow, "cdNm", year);
        		console.log(nRow);
        		this.divForm.form.divSch.form.cboYear.set_index(nRow);
        	}

        	this.dsSearch.setColumn(0, "year", year);
        	this.dsSearch.setColumn(0, "month", month);
        	this.getSearchTransaction();
        }

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // 검색 버튼
        this.divForm_divSch_btnSch_onclick = function(obj,e)
        {
        	this.getSearchTransaction();
        };

        // 엑셀 다운 버튼
        this.divForm_divGrd_btnGrdExcel_onclick = function(obj,e)
        {
        	/*****  현재 그리드 화면을 엑셀로 다운로드 받음  *****/
        	this.exportObj = new ExcelExportObject();
        	var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.divForm.form.divGrd.form.grdHoliday, "Sheet1!A1");
        	this.exportObj.set_exporturl("svcUrl::/XExportImport.do");
        	this.exportObj.exportData();
        	/*****  현재 그리드 화면을 엑셀로 다운로드 받음  *****/
        };

        // 연간 휴일정보 초기화
        this.divPopBtn_btnYearReset_onclick = function(obj,e)
        {
        	this.dsSearch.setColumn(0, "type", "year");
        	this.gridResetTransaction();
        };

        // 월간 휴일정보 초기화
        this.divPopBtn_btnMonthReset_onclick = function(obj,e)
        {
        	this.dsSearch.setColumn(0, "type", "month");
        	this.gridResetTransaction();
        };

        // 누락일자 자동추가
        this.divPopBtn_btnOmission_onclick = function(obj,e)
        {
        	this.gridAddOmissionTransaction();
        };

        this.divPopBtn_btnYes_onclick = function(obj,e)
        {
        	this.gridSaveTransaction();
        };

        this.Button_onclick = function(obj,e)
        {
        	//클릭된 버튼의 구분 값 가져오기(First, Prev, Next, Last)
        	var sPage = obj.name.replace("btn", "");

        	//페이지 이동 함수 호출
        	this.fnPaginationSearch(sPage);
        };

        this.BtnNum_onclick = function(obj,e)
        {
        	//클릭된 버튼의 페이지 번호 가져오기
        	var sPage = obj.text.toString().padLeft(2, "0");
        	//페이지 이동 함수 호출
        	this.dsSearch.setColumn(0, "month", sPage);
        	this.getSearchTransaction();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divSch.form.btnSchClose.addEventHandler("onclick",this.divForm_divSch_btnSchClose_onclick,this);
            this.divForm.form.divSch.form.btnSch.addEventHandler("onclick",this.divForm_divSch_btnSch_onclick,this);
            this.divForm.form.divSch.form.cboYear.addEventHandler("onitemchanged",this.cbo00_onitemchanged,this);
            this.divForm.form.divSch.form.cboMonth.addEventHandler("onitemchanged",this.cbo00_onitemchanged,this);
            this.divForm.form.divGrd.form.btnGrdExcel.addEventHandler("onclick",this.divForm_divGrd_btnGrdExcel_onclick,this);
            this.divPopBtn.form.btnYearReset.addEventHandler("onclick",this.divPopBtn_btnYearReset_onclick,this);
            this.divPopBtn.form.btnMonthReset.addEventHandler("onclick",this.divPopBtn_btnMonthReset_onclick,this);
            this.divPopBtn.form.btnOmission.addEventHandler("onclick",this.divPopBtn_btnOmission_onclick,this);
            this.divPopBtn.form.btnYes.addEventHandler("onclick",this.divPopBtn_btnYes_onclick,this);
        };
        this.loadIncludeScript("COM022M03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
