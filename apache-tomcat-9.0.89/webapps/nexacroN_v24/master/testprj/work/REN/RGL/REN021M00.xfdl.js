(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("REN021M00");
            this.set_titletext("갱신대상조회및통보 목록");
            this.getSetter("uFunction").set("checkbox");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"currentPageNo\" type=\"STRING\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"STRING\" size=\"256\"/><Column id=\"pBzentyNm\" type=\"STRING\" size=\"256\"/><Column id=\"pPrgrsSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"pNtfctn\" type=\"STRING\" size=\"256\"/><Column id=\"pYmd\" type=\"STRING\" size=\"256\"/><Column id=\"pBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"pEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"pDeptId\" type=\"STRING\" size=\"256\"/><Column id=\"pPrcsDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"pGrp1CdId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"recordCountPerPage\">10</Col><Col id=\"currentPageNo\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"INT\" size=\"256\"/><Column id=\"ctrtUpdtNo\" type=\"STRING\" size=\"256\"/><Column id=\"updtCnddInqDt\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyNm\" type=\"STRING\" size=\"256\"/><Column id=\"rentBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"rentEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"picNm\" type=\"STRING\" size=\"256\"/><Column id=\"updtTrgtDsgnYn\" type=\"STRING\" size=\"256\"/><Column id=\"updtTrgtDsgnId\" type=\"STRING\" size=\"256\"/><Column id=\"updtNtfctnYn\" type=\"STRING\" size=\"256\"/><Column id=\"updtNtfctnId\" type=\"STRING\" size=\"256\"/><Column id=\"prgrsSttsCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("<ColumnInfo><Column id=\"totalRecordCount\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboPrgrsSttsCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divSch","0","divTitle:20",null,"210","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","100%","100",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("0");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("50");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel02\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel03\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel04\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel01","1694.00","398","300","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("4");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel01\"/><PanelItem id=\"PanelItem00\" componentid=\"edtBzentyNm\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel02","1694.00","398","300","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("5");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel02\"/><PanelItem id=\"PanelItem00\" componentid=\"cboPrgrsSttsCd\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel03","1694.00","398","300","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("6");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03\"/><PanelItem id=\"PanelItem01\" componentid=\"edtNtfctn\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Button("btnSchClose","1251","185","30","30",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_SchClose");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panClose","30","151","100%","30",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnSchClose\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Button("btnSch","570","192","112","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("8");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("10");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSch\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel04","0","0","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("11");
            obj.set_text("일자");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Div("divCal","20.00","14","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("12");
            obj.set_text("Div00");
            obj.set_flexgrow("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divSch.addChild(obj.name, obj);

            obj = new Combo("cboYmd","-59","7","180","40",null,null,null,null,null,null,this.divSch.form.divCal.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_flexgrow("1");
            var divSch_form_divCal_form_cboYmd_innerdataset = new nexacro.NormalDataset("divSch_form_divCal_form_cboYmd_innerdataset", obj);
            divSch_form_divCal_form_cboYmd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">조회일자</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">갱신통보일자</Col></Row></Rows>");
            obj.set_innerdataset(divSch_form_divCal_form_cboYmd_innerdataset);
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Panel("Panel00","160","0","100%","40",null,null,null,null,null,null,this.divSch.form.divCal.form);
            obj.set_taborder("1");
            obj.set_flexgrow("2");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"calBgngYmd\"/><PanelItem id=\"PanelItem01\" componentid=\"staDash\"/><PanelItem id=\"PanelItem02\" componentid=\"calEndYmd\"/></Contents>");
            this.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Calendar("calBgngYmd","180.00","0","200","40",null,null,null,null,null,null,this.divSch.form.divCal.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Static("staDash","160.00","0","20","40",null,null,null,null,null,null,this.divSch.form.divCal.form);
            obj.set_taborder("0");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_Dash");
            this.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Calendar("calEndYmd","0","0","200","40",null,null,null,null,null,null,this.divSch.form.divCal.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Panel("Panel04","1694.00","398","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("13");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel04\"/><PanelItem id=\"PanelItem02\" componentid=\"divCal\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Combo("cboPrgrsSttsCd","140","27","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsCboPrgrsSttsCd");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel02","69","25","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("14");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03","0","0","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("15");
            obj.set_text("통보자");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01","0","0","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("16");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Edit("edtBzentyNm","841","24","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("1");
            obj.set_flexgrow("1");
            obj.set_displaynulltext("검색 단어 입력");
            obj.set_maxlength("20");
            this.divSch.addChild(obj.name, obj);

            obj = new Edit("edtNtfctn","841","24","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("3");
            obj.set_flexgrow("1");
            obj.set_displaynulltext("검색 단어 입력");
            obj.set_maxlength("20");
            this.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","0","divSch:20",null,"600","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Div("divPage","0","537","100.00%","36",null,null,null,null,"40",null,this.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_url("work::COM/util/paging/paging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdList","0","44","100.00%",null,null,"divPage:20",null,null,null,null,this.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"180\"/><Column size=\"250\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"120\"/><Column size=\"180\"/><Column size=\"130\"/><Column size=\"150\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"조회일자\"/><Cell col=\"2\" text=\"업체명\"/><Cell col=\"3\" text=\"계약시작일자\"/><Cell col=\"4\" text=\"계약종료일자\"/><Cell col=\"5\" text=\"업체담당자\"/><Cell col=\"6\" text=\"갱신통보일자\"/><Cell col=\"7\" text=\"통보자\"/><Cell col=\"8\" text=\"상태\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:chk\" edittype=\"checkbox\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" combodataset=\"dsCboBzentyClsfCd\" combocodecol=\"cdId\" combodatacol=\"cdNm\" text=\"bind:updtCnddInqDt\"/><Cell col=\"2\" text=\"bind:bzentyNm\" displaytype=\"text\"/><Cell col=\"3\" text=\"bind:rentBgngYmd\" displaytype=\"text\" edittype=\"none\" maskedittype=\"string\" maskeditformat=\"####-##-##\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:rentEndYmd\" displaytype=\"text\" edittype=\"none\" maskedittype=\"string\" maskeditformat=\"####-##-##\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:picNm\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:updtNtfctnDt\" displaytype=\"text\" edittype=\"none\" maskedittype=\"string\" maskeditformat=\"####-##-##\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:updtNtfctnId\" textAlign=\"center\"/><Cell col=\"8\" displaytype=\"combotext\" text=\"bind:prgrsSttsCd\" cssclass=\"CellEnd\" combodataset=\"dsCboPrgrsSttsCd\" combocodecol=\"cdId\" combodatacol=\"cdNm\"/></Band></Format></Formats>");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","1165","0","54","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("목록수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divGrd.addChild(obj.name, obj);

            obj = new Combo("grdListCnt","1230","0","80","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divGrd_form_grdListCnt_innerdataset = new nexacro.NormalDataset("divGrd_form_grdListCnt_innerdataset", obj);
            divGrd_form_grdListCnt_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row></Rows>");
            obj.set_innerdataset(divGrd_form_grdListCnt_innerdataset);
            obj.set_text("10");
            obj.set_value("10");
            obj.set_index("0");
            this.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdInq","774.00","10","80","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("4");
            obj.set_text("갱신후보조회");
            obj.set_cssclass("btn_WF_SmallGray");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDsgn","417","12","80","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("5");
            obj.set_text("갱신대상지정");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDsgnRmv","382","12","80","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("6");
            obj.set_text("갱신대상 지정해제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdNtfctn","292","12","80","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("7");
            obj.set_text("갱신통보");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divGrd.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn",null,"7","50.00%","34","2",null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("8");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"staTotal02\"/><PanelItem id=\"PanelItem01\" componentid=\"grdListCnt\"/><PanelItem id=\"PanelItem00\" componentid=\"btnGrdInq\"/><PanelItem id=\"PanelItem03\" componentid=\"btnGrdDsgn\"/><PanelItem id=\"PanelItem05\" componentid=\"btnGrdDsgnRmv\"/><PanelItem id=\"PanelItem06\" componentid=\"btnGrdNtfctn\"/></Contents>");
            this.divGrd.addChild(obj.name, obj);

            obj = new Panel("PanelTtlCnt","0","0","272","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("9");
            obj.set_fittocontents("none");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTotal\"/><PanelItem id=\"PanelItem03\" componentid=\"staTnocs\"/><PanelItem id=\"PanelItem02\" componentid=\"staTotal01\"/></Contents>");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","27","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("10");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("none");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTnocs","27","0","34","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("11");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("none");
            obj.set_textAlign("center");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal01","0","0","30","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("12");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divGrd.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSch.form.divCal.form
            obj = new Layout("default","",0,0,this.divSch.form.divCal.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.cboYmd.set_taborder("2");
                p.cboYmd.set_innerdataset(divSch_form_divCal_form_cboYmd_innerdataset);
                p.cboYmd.set_codecolumn("codecolumn");
                p.cboYmd.set_datacolumn("datacolumn");
                p.cboYmd.set_flexgrow("1");
                p.cboYmd.set_text("전체");
                p.cboYmd.set_value("");
                p.cboYmd.set_index("-1");
                p.cboYmd.move("-59","7","180","40",null,null);

                p.Panel00.set_taborder("1");
                p.Panel00.set_flexgrow("2");
                p.Panel00.move("160","0","100%","40",null,null);

                p.calBgngYmd.set_taborder("3");
                p.calBgngYmd.set_dateformat("yyyy-MM-dd");
                p.calBgngYmd.move("180.00","0","200","40",null,null);

                p.staDash.set_taborder("0");
                p.staDash.set_text("~");
                p.staDash.set_cssclass("sta_WF_Dash");
                p.staDash.move("160.00","0","20","40",null,null);

                p.calEndYmd.set_taborder("6");
                p.calEndYmd.set_dateformat("yyyy-MM-dd");
                p.calEndYmd.move("0","0","200","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divSch.form.divCal.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSch.form.divCal.form
            obj = new Layout("Layout0","",0,0,this.divSch.form.divCal.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divSch.form.divCal.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSch.form.divCal.form
            obj = new Layout("mobile","",0,0,this.divSch.form.divCal.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.cboYmd.move("-59","7","200","40",null,null);

                p.calBgngYmd.move("180.00","0","170","40",null,null);

                p.calEndYmd.move("0","0","170","40",null,null);


                p.Panel00.set_flexgrow("3");
                p.Panel00.set_verticalgap("8");
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_horizontalgap("10");
            this.divSch.form.divCal.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divSch.form
            obj = new Layout("default","",0,0,this.divSch.form,
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
                p.panLabel.move("20","14","100%","100",null,null);

                p.Panel01.set_taborder("4");
                p.Panel01.set_type("horizontal");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_flexgrow("1");
                p.Panel01.set_maxheight("");
                p.Panel01.set_minwidth("");
                p.Panel01.move("1694.00","398","300","40",null,null);

                p.Panel02.set_taborder("5");
                p.Panel02.set_type("horizontal");
                p.Panel02.set_horizontalgap("10");
                p.Panel02.set_flexgrow("1");
                p.Panel02.set_minwidth("");
                p.Panel02.move("1694.00","398","300","40",null,null);

                p.Panel03.set_taborder("6");
                p.Panel03.set_type("horizontal");
                p.Panel03.set_horizontalgap("10");
                p.Panel03.set_fittocontents("height");
                p.Panel03.set_flexgrow("1");
                p.Panel03.set_minwidth("");
                p.Panel03.move("1694.00","398","300","40",null,null);

                p.btnSchClose.set_taborder("7");
                p.btnSchClose.set_cssclass("btn_WF_SchClose");
                p.btnSchClose.move("1251","185","30","30",null,null);

                p.panClose.set_taborder("9");
                p.panClose.set_type("vertical");
                p.panClose.set_cssclass("pal_WF_SchLine");
                p.panClose.set_flexcrossaxisalign("end");
                p.panClose.move("30","151","100%","30",null,null);

                p.btnSch.set_taborder("8");
                p.btnSch.set_text("조회하기");
                p.btnSch.set_cssclass("btn_WF_Search");
                p.btnSch.move("570","192","112","40",null,null);

                p.panSchBtn.set_taborder("10");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100%","40",null,null);

                p.staLabel04.set_taborder("11");
                p.staLabel04.set_text("일자");
                p.staLabel04.set_cssclass("sta_WF_SchLabel");
                p.staLabel04.set_flexshrink("0");
                p.staLabel04.set_maxwidth("");
                p.staLabel04.move("0","0","100","40",null,null);

                p.divCal.set_taborder("12");
                p.divCal.set_text("Div00");
                p.divCal.set_flexgrow("1");
                p.divCal.set_formscrollbartype("none none");
                p.divCal.set_formscrolltype("none");
                p.divCal.move("20.00","14","100%","40",null,null);

                p.Panel04.set_taborder("13");
                p.Panel04.set_type("horizontal");
                p.Panel04.set_horizontalgap("10");
                p.Panel04.set_flexgrow("1");
                p.Panel04.set_minwidth("");
                p.Panel04.move("1694.00","398","100%","40",null,null);

                p.cboPrgrsSttsCd.set_taborder("2");
                p.cboPrgrsSttsCd.set_innerdataset("dsCboPrgrsSttsCd");
                p.cboPrgrsSttsCd.set_codecolumn("cdId");
                p.cboPrgrsSttsCd.set_datacolumn("cdNm");
                p.cboPrgrsSttsCd.set_text("전체");
                p.cboPrgrsSttsCd.set_value("");
                p.cboPrgrsSttsCd.set_index("-1");
                p.cboPrgrsSttsCd.move("140","27","100%","40",null,null);

                p.staLabel02.set_taborder("14");
                p.staLabel02.set_text("상태");
                p.staLabel02.set_cssclass("sta_WF_SchLabel");
                p.staLabel02.set_flexshrink("0");
                p.staLabel02.move("69","25","100","40",null,null);

                p.staLabel03.set_taborder("15");
                p.staLabel03.set_text("통보자");
                p.staLabel03.set_cssclass("sta_WF_SchLabel");
                p.staLabel03.set_flexshrink("0");
                p.staLabel03.set_maxwidth("");
                p.staLabel03.move("0","0","100","40",null,null);

                p.staLabel01.set_taborder("16");
                p.staLabel01.set_text("업체명");
                p.staLabel01.set_cssclass("sta_WF_SchLabel");
                p.staLabel01.set_flexshrink("0");
                p.staLabel01.set_maxwidth("");
                p.staLabel01.move("0","0","100","40",null,null);

                p.edtBzentyNm.set_taborder("1");
                p.edtBzentyNm.set_flexgrow("1");
                p.edtBzentyNm.set_displaynulltext("검색 단어 입력");
                p.edtBzentyNm.set_maxlength("20");
                p.edtBzentyNm.move("841","24","100%","40",null,null);

                p.edtNtfctn.set_taborder("3");
                p.edtNtfctn.set_flexgrow("1");
                p.edtNtfctn.set_displaynulltext("검색 단어 입력");
                p.edtNtfctn.set_maxlength("20");
                p.edtNtfctn.move("841","24","100%","40",null,null);
            	}
            );
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            this.divSch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSch.form
            obj = new Layout("Layout0","",0,0,this.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panClose.move("30","151","100%","30",null,null);

                p.panLabel.set_horizontalgap("50");
                p.panLabel.set_verticalgap("8");
                p.panLabel.move("132","47","100%","244",null,null);

                p.Panel03.set_type("horizontal");
                p.Panel03.set_fittocontents("height");
                p.Panel03.set_horizontalgap("8");
                p.Panel03.move("1694.00","398","100%","40",null,null);

                p.Panel02.set_horizontalgap("8");
                p.Panel02.move("1694.00","398","100%","45",null,null);

                p.Panel01.set_horizontalgap("8");
                p.Panel01.move("1694.00","398","100%","40",null,null);

                p.Panel00.set_type("horizontal");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_horizontalgap("8");
                p.Panel00.move("1694.00","398","100%","80",null,null);

                p.Edit00.move("140","80","65%","40",null,null);

                p.edtHireLohNo.move("841","24","65%","40",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("14px 16px 12px 16px");
            obj.set_flexwrap("wrap");
            this.divSch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSch.form
            obj = new Layout("mobile","",0,0,this.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel04.set_type("horizontal");
                p.Panel04.set_fittocontents("height");
                p.Panel04.set_verticalgap("8");

                p.staLabel04.getSetter("flexwrap").set("wrap");
                p.staLabel04.move("0","0","100","40",null,null);

                p.divCal.set_fittocontents("height");
            	}
            );
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            this.divSch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divGrd.form.divPage
            obj = new Layout("default","",0,0,this.divGrd.form.divPage.form,function(p){});
            this.divGrd.form.divPage.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrd.form
            obj = new Layout("default","",0,0,this.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divPage.set_taborder("1");
                p.divPage.set_text("Div00");
                p.divPage.set_url("work::COM/util/paging/paging.xfdl");
                p.divPage.set_formscrollbartype("none none");
                p.divPage.set_formscrolltype("none");
                p.divPage.set_minheight("40");
                p.divPage.set_maxheight("");
                p.divPage.move("0","537","100.00%","36",null,null);

                p.grdList.set_taborder("0");
                p.grdList.set_binddataset("dsList");
                p.grdList.set_autofittype("none");
                p.grdList.move("0","44","100.00%",null,null,"divPage:20");

                p.staTotal02.set_taborder("2");
                p.staTotal02.set_text("목록수");
                p.staTotal02.set_cssclass("sta_WF_SchLabel");
                p.staTotal02.set_fittocontents("width");
                p.staTotal02.move("1165","0","54","34",null,null);

                p.grdListCnt.set_taborder("3");
                p.grdListCnt.set_innerdataset(divGrd_form_grdListCnt_innerdataset);
                p.grdListCnt.set_codecolumn("codecolumn");
                p.grdListCnt.set_datacolumn("datacolumn");
                p.grdListCnt.set_text("10");
                p.grdListCnt.set_value("10");
                p.grdListCnt.set_index("0");
                p.grdListCnt.move("1230","0","80","34",null,null);

                p.btnGrdInq.set_taborder("4");
                p.btnGrdInq.set_text("갱신후보조회");
                p.btnGrdInq.set_cssclass("btn_WF_SmallGray");
                p.btnGrdInq.set_visible("true");
                p.btnGrdInq.set_fittocontents("width");
                p.btnGrdInq.move("774.00","10","80","34",null,null);

                p.btnGrdDsgn.set_taborder("5");
                p.btnGrdDsgn.set_text("갱신대상지정");
                p.btnGrdDsgn.set_cssclass("btn_WF_SmallBlack");
                p.btnGrdDsgn.set_visible("true");
                p.btnGrdDsgn.set_fittocontents("width");
                p.btnGrdDsgn.move("417","12","80","34",null,null);

                p.btnGrdDsgnRmv.set_taborder("6");
                p.btnGrdDsgnRmv.set_text("갱신대상 지정해제");
                p.btnGrdDsgnRmv.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDsgnRmv.set_visible("true");
                p.btnGrdDsgnRmv.set_fittocontents("width");
                p.btnGrdDsgnRmv.move("382","12","80","34",null,null);

                p.btnGrdNtfctn.set_taborder("7");
                p.btnGrdNtfctn.set_text("갱신통보");
                p.btnGrdNtfctn.set_cssclass("btn_WF_SmallBlack");
                p.btnGrdNtfctn.set_visible("true");
                p.btnGrdNtfctn.set_fittocontents("width");
                p.btnGrdNtfctn.move("292","12","80","34",null,null);

                p.PanelGrdBtn.set_taborder("8");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_fittocontents("height");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.set_flexwrap("nowrap");
                p.PanelGrdBtn.move(null,"7","50.00%","34","2",null);

                p.PanelTtlCnt.set_taborder("9");
                p.PanelTtlCnt.set_fittocontents("none");
                p.PanelTtlCnt.move("0","0","272","34",null,null);

                p.staTotal.set_taborder("10");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("none");
                p.staTotal.move("0","0","27","34",null,null);

                p.staTnocs.set_taborder("11");
                p.staTnocs.set_text("0");
                p.staTnocs.set_cssclass("sta_WF_Total");
                p.staTnocs.set_usedecorate("true");
                p.staTnocs.set_fittocontents("none");
                p.staTnocs.set_textAlign("center");
                p.staTnocs.move("27","0","34","34",null,null);

                p.staTotal01.set_taborder("12");
                p.staTotal01.set_text("건");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.move("0","0","30","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdList.set_autofittype("none");

                p.btnGrdInq.set_visible("false");

                p.btnGrdDel.set_visible("false");
            	}
            );
            obj.set_verticalgap("20");
            this.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGrd.form
            obj = new Layout("mobile","",0,0,this.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdList.set_flexgrow("1");
                p.grdList.move("0","44","100%",null,null,"divPage:10");

                p.divPage.move("0","552","100.00%","36",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("갱신대상조회및통보 목록");
                p.getSetter("uFunction").set("checkbox");

                p.divTitle.set_taborder("2");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);

                p.divSch.set_taborder("0");
                p.divSch.set_text("Div00");
                p.divSch.set_cssclass("div_WF_SchBg");
                p.divSch.set_formscrollbartype("none none");
                p.divSch.set_formscrolltype("none");
                p.divSch.set_fittocontents("height");
                p.divSch.move("0","divTitle:20",null,"210","60",null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.set_flexgrow("1");
                p.divGrd.move("0","divSch:20",null,"600","60",null);
            	}
            );
            obj.set_horizontalgap("0");
            obj.set_mobileorientation("landscape");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divSch.move("20","70",null,"198","20",null);

                p.divGrd.move("20","divSch:20",null,null,"20","40");

                p.divTitle.move("0","0",null,"50","0",null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            obj.set_horizontalgap("0");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item4","staTnocs","text","dsPage","totalRecordCount");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divCal.form.calBgngYmd","value","dsSearch","pBgngYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divCal.form.calEndYmd","value","dsSearch","pEndYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSch.form.staLabel01","value","dsSearch","pHireLohNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSch.form.edtBzentyNm","value","dsSearch","pBzentyNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSch.form.divCal.form.calBgngYmd","value","dsSearch","pBgngYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSch.form.divCal.form.calEndYmd","value","dsSearch","pEndYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSch.form.cboPrgrsSttsCd","value","dsSearch","pPrgrsSttsCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSch.form.edtNtfctn","value","dsSearch","pNtfctn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSch.form.divCal.form.cboYmd","value","dsSearch","pYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divGrd.form.staTnocs","text","dsPage","totalRecordCount");
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
        this.addIncludeScript("REN021M00.xfdl","xjs::TaskCom.xjs");
        this.registerScript("REN021M00.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	REN021M00.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/11/04
        *  @Desction   ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/11/04			pys						최초생성
        *******************************************************************************
        */

        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;  // 업무공통
        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        const gdsUser = nexacro.getApplication().gdsUser;

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
        // 검색 조회
        this.cfnSearch = function (page)
        {
        	// 그리드 한 페이지에 게시되는 데이터건수
        	var recordCountPerPage = this.divGrd.form.grdListCnt.value;
        	this.dsSearch.setColumn(0, "currentPageNo", page);
        	this.dsSearch.setColumn(0, "recordCountPerPage", recordCountPerPage);
        	this.getSearchTransaction();
        };

        this.cfnClose = function (){};

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        // 목록 조회 트랜젝션
        this.getSearchTransaction = function()
        {
        	var strSvcId    = "search";
        	var strSvcUrl   = "ren/rgl/selectUpdtTrgtInqNtfctnList.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsList=dsList dsPage=dsPage";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 갱신후보조회
        this.cnddInqTransaction = function()
        {
        	var strSvcId    = "cnddInq";
        	var strSvcUrl   = "ren/rgl/insertUpdtCnddInq.do";
        	var inData      = "dsSearch=dsSearch ";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= false;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 갱신대상 지정 및 해제
        this.dsgnTransaction = function()
        {
        	var strSvcId    = "dsgn";
        	var strSvcUrl   = "ren/rgl/updateUpdtTrgDsgn.do";
        	var inData      = "dsList=dsList:U ";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= false;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 갱신대상 통보
        this.ntfctnTransaction = function()
        {
        	var strSvcId    = "ntfctn";
        	var strSvcUrl   = "ren/rgl/updateUpdtTrgNtfctn.do";
        	var inData      = "dsList=dsList:U ";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= false;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        // 트랜젝션 콜백 함수
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if (errorCode != 0)	{
        		return;
        	}

        	switch (svcID) {
        		case "_cfnComCdLoad_":
        			var deptId = gdsUser.getColumn(0, "deptId");
        			var deptCd = "";

        			if (deptId == "41000086") { 	   // 운영기획팀
        				deptCd = 1;
        			} else if (deptId == "41000094") { // 교통운영팀
        				deptCd = 2;
        			} else if (deptId == "41000095") { // 물류운영팀
        				deptCd = 3;
        			} else if (deptId == "41000040") { // 재무팀
        				deptCd = 4;
        			}

        			this.dsSearch.setColumn(0, "pGrp1CdId", "DPT0" + deptCd);
        			this.dsSearch.setColumn(0, "pPrcsDeptCd", deptCd);
        			this.dsSearch.setColumn(0, "pDeptId", deptId);

        			this.divSch.form.cboPrgrsSttsCd.set_index(0);

        			this.cfnSearch(1);
        			break;

        		case "search":
        			// 조회 한 후 페이징을 셋팅 하기 위한 초기 함수
        			this.divGrd.form.divPage.form.initPages(this.dsPage.getColumn(0, "currentPageNo"), this.dsPage.getColumn(0, "totalRecordCount"), this.dsPage.getColumn(0, "recordCountPerPage"), this.dsPage.getColumn(0, "pageSize"), "pagingCallback");
        			this.divGrd.form.staTnocs.fittocontents="width";
        			break;

        		case "cnddInq":
        			this.gfnAlertMsg("msg", "MSG_007", [ this.objApp.getVariable("gvRetMsg") ]);
        			this.cfnSearch(1);
        			break;

        		case "dsgn":
        			this.gfnAlertMsg("msg", "MSG_007", [ this.objApp.getVariable("gvRetMsg") ]);
        			this.cfnSearch(1);
        			break;

        		case "ntfctn":
        			this.gfnAlertMsg("msg", "MSG_007", [ this.objApp.getVariable("gvRetMsg") ]);
        			this.cfnSearch(1);
        			break;
        	}
        };

        // 페이징 버튼 콜백함수
        this.pagingCallback = function(page) {
        	this.cfnSearch(page);
        };

        // 얼럿창 콜백 함수
        this.msgCallback = function(sPopupId, sRtn)
        {
        	var oRtn = JSON.parse(sRtn);

        	if (sPopupId == "cnddInq_confirm" && oRtn.result == "Y") {
        		this.cnddInqTransaction();
        	} else if (sPopupId == "dsgn_confirm" && oRtn.result == "Y") {
        		var chk = this.dsList.findRow("chk", 1);

        		if (chk != -1) {
        			for (var i=0; i < this.dsList.rowcount; i++)
        			{
        				if(this.dsList.getColumn(i, "chk") == 1) {
        					this.dsList.setColumn(i, "prgrsSttsCd", "2");
        					this.dsList.setColumn(i, "updtTrgtDsgnYn", "Y");
        					this.dsList.setColumn(i, "rowSttsCd", "U");
        				}
        			}
        		}

        		this.dsgnTransaction();
        	} else if (sPopupId == "dsgnRmv_confirm" && oRtn.result == "Y") {
        		var chk = this.dsList.findRow("chk", 1);

        		if (chk != -1) {
        			for (var i=0; i < this.dsList.rowcount; i++)
        			{
        				if(this.dsList.getColumn(i, "chk") == 1) {
        					this.dsList.setColumn(i, "prgrsSttsCd", "1");
        					this.dsList.setColumn(i, "updtTrgtDsgnYn", "N");
        					this.dsList.setColumn(i, "rowSttsCd", "U");
        				}
        			}
        		}

        		this.dsgnTransaction();
        	} else if (sPopupId == "ntfctn_confirm" && oRtn.result == "Y") {

        		var chk = this.dsList.findRow("chk", 1);

        		if (chk != -1) {
        			for (var i=0; i < this.dsList.rowcount; i++)
        			{
        				if(this.dsList.getColumn(i, "chk") == 1) {
        					this.dsList.setColumn(i, "prgrsSttsCd", "3");
        					this.dsList.setColumn(i, "updtNtfctnYn", "Y");
        					this.dsList.setColumn(i, "rowSttsCd", "U");
        				}
        			}
        		}

        		this.ntfctnTransaction();
        	}
        };

        // 팝업에 관한 콜백 함수
        this.fnPopupCallback = function(sPopupId, sRtn){};

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	// 공통코드 함수 호출
        	this.cfnComCdLoad({dsCboPrgrsSttsCd:"UPDT_STTS_CD:A" });

        	var vTdate = this.gfn_getDate("date");
        	var vFdate = this.gfn_addMonth(vTdate, -1);
        	this.divSch.form.divCal.form.calBgngYmd.set_value(vFdate);
        	this.divSch.form.divCal.form.calEndYmd.set_value(vTdate);
        	this.divSch.form.divCal.form.cboYmd.set_index(0);
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // 조회
        this.divSch_btnSch_onclick = function(obj,e)
        {
        	if (this.divSch.form.divCal.form.calBgngYmd.value > this.divSch.form.divCal.form.calEndYmd.value) {
        		this.gfnAlertMsg("msg", "MSG_011", ["시작일자가 종료일자보다 큽니다."]);
        		return;
        	}

        	this.cfnSearch(1);
        };

        // Enter 입력
        this.form_onkeyup = function(obj,e)
        {
        	var focus = this.getFocus();

        	if (e.keycode == 13 && focus.taborder < 9 ) {
        		this.divSch.form.btnSch.click();
        	}
        };

        // 목록수
        this.divGrd_grdListCnt_onitemchanged = function(obj,e)
        {
        	this.cfnSearch(1);
        };

        // 갱신후보조회
        this.divGrd_btnGrdInq_onclick = function(obj,e)
        {
        	this.gfnConfirmMsg("cnddInq_confirm", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"], "", ["갱신후보조회"]);
        };

        // 갱신대상지정
        this.divGrd_btnGrdDsgn_onclick = function(obj,e)
        {
        	if (this.dsList.findRow("chk", 1) != -1) {
        		for (var i=0; i < this.dsList.rowcount; i++) {
        			if (this.dsList.getColumn(i, "chk") == 1) {
        				if (this.dsList.getColumn(i, "prgrsSttsCd") != "1") {
        					this.gfnAlertMsg("msg", "MSG_011", [i+1 + "행은 후보 상태가 아닙니다."]);
        					return;
        				}
        			}
        		}

        		this.gfnConfirmMsg("dsgn_confirm", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"], "", ["갱신대상 지정"]);
        	} else {
        		this.gfnAlertMsg("msg", "MSG_011", ["체크된 데이터가 없습니다."]);
        	}
        };

        // 갱신대상지정해제
        this.divGrd_btnGrdDsgnRmv_onclick = function(obj,e)
        {
        	if (this.dsList.findRow("chk", 1) != -1) {
        		for (var i=0; i < this.dsList.rowcount; i++) {
        			if (this.dsList.getColumn(i, "chk") == 1) {
        				if (this.dsList.getColumn(i, "prgrsSttsCd") != "2") {
        					this.gfnAlertMsg("msg", "MSG_011", [i+1 + "행은 대상 상태가 아닙니다."]);
        					return;
        				}
        			}
        		}

        		this.gfnConfirmMsg("dsgnRmv_confirm", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"], "", ["갱신대상 지정해제"]);
        	} else {
        		this.gfnAlertMsg("msg", "MSG_011", ["체크된 데이터가 없습니다."]);
        	}
        };

        // 갱신통보
        this.divGrd_btnGrdNtfctn_onclick = function(obj,e)
        {
        	if (this.dsList.findRow("chk", 1) != -1) {
        		for (var i=0; i < this.dsList.rowcount; i++) {
        			if (this.dsList.getColumn(i, "chk") == 1) {
        				if (this.dsList.getColumn(i, "prgrsSttsCd") != "2") {
        					this.gfnAlertMsg("msg", "MSG_011", [i+1 + "행은 대상 상태가 아닙니다."]);
        					return;
        				}
        			}
        		}

        		this.gfnConfirmMsg("ntfctn_confirm", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"], "", ["갱신통보"]);
        	} else {
        		this.gfnAlertMsg("msg", "MSG_011", ["체크된 데이터가 없습니다."]);
        	}
        };

        // 상세페이지
        this.divGrd_grdList_oncelldblclick = function(obj,e)
        {
        	if (obj.getCellPos() != 0){
        		var bzentyNm = this.dsList.getColumn(e.row, "bzentyNm");
        		var ctrtUpdtNo = this.dsList.getColumn(e.row, "ctrtUpdtNo");
        		var grp2CdId = this.dsSearch.getColumn(0, "pGrp2CdId");

        		/*****  모달 팝업으로 페이지 오픈을 위한 코드 *****/
        		var sTitle = "갱신대상조회및통보 상세";
        		var param   = {
        			"bzentyNm" : bzentyNm
        			,"ctrtUpdtNo" : ctrtUpdtNo
        			,"grp2CdId" : grp2CdId
        		};

        		var objOption = {
        			popuptype: "modal"	// modal,modaless
        			, autosize: true
        			, title: sTitle
        			, resize: true
        			, titlebar: true
        		};
        		var sPopupCallback = "fnPopupCallback";

        		this.gfnOpenPopup("REN021P01", "work::REN/RGL/REN021P01.xfdl", param, sPopupCallback, objOption);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onkeyup",this.form_onkeyup,this);
            this.divSch.form.btnSch.addEventHandler("onclick",this.divSch_btnSch_onclick,this);
            this.divSch.form.staLabel04.addEventHandler("onclick",this.divForm_Div00_sta00_00_01_01_onclick,this);
            this.divSch.form.divCal.form.cboYmd.addEventHandler("onitemchanged",this.divSch_cboPstnCd_onitemchanged,this);
            this.divGrd.form.grdList.addEventHandler("oncelldblclick",this.divGrd_grdList_oncelldblclick,this);
            this.divGrd.form.grdListCnt.addEventHandler("onitemchanged",this.divGrd_grdListCnt_onitemchanged,this);
            this.divGrd.form.btnGrdInq.addEventHandler("onclick",this.divGrd_btnGrdInq_onclick,this);
            this.divGrd.form.btnGrdDsgn.addEventHandler("onclick",this.divGrd_btnGrdDsgn_onclick,this);
            this.divGrd.form.btnGrdDsgnRmv.addEventHandler("onclick",this.divGrd_btnGrdDsgnRmv_onclick,this);
            this.divGrd.form.btnGrdNtfctn.addEventHandler("onclick",this.divGrd_btnGrdNtfctn_onclick,this);
        };
        this.loadIncludeScript("REN021M00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
