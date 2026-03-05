(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("REN005M02");
            this.set_titletext("후보공간확인요청 목록 (처리자)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"hireLohNo\" type=\"STRING\" size=\"256\"/><Column id=\"rcptNo\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyClsfNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstnNm\" type=\"STRING\" size=\"256\"/><Column id=\"bldgNm\" type=\"STRING\" size=\"256\"/><Column id=\"rntar\" type=\"STRING\" size=\"256\"/><Column id=\"usgNm\" type=\"STRING\" size=\"256\"/><Column id=\"sptIdntyNm\" type=\"STRING\" size=\"256\"/><Column id=\"prgrsSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrsSttsNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList02", this);
            obj._setContents("<ColumnInfo><Column id=\"chc\" type=\"STRING\" size=\"256\"/><Column id=\"hireLohNo\" type=\"STRING\" size=\"256\"/><Column id=\"rcptNo\" type=\"STRING\" size=\"256\"/><Column id=\"pstnNm\" type=\"STRING\" size=\"256\"/><Column id=\"bldgNm\" type=\"STRING\" size=\"256\"/><Column id=\"rmnmNo\" type=\"STRING\" size=\"256\"/><Column id=\"rntar\" type=\"STRING\" size=\"256\"/><Column id=\"sptIdntyNm\" type=\"STRING\" size=\"256\"/><Column id=\"vstHpeYmd\" type=\"STRING\" size=\"256\"/><Column id=\"ldrNeedNm\" type=\"STRING\" size=\"256\"/><Column id=\"vstrNm\" type=\"STRING\" size=\"256\"/><Column id=\"prgrsSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrsSttsNm\" type=\"STRING\" size=\"256\"/><Column id=\"BzentyClsfNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"currentPageNo\" type=\"STRING\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"STRING\" size=\"256\"/><Column id=\"pRcptNo\" type=\"STRING\" size=\"256\"/><Column id=\"pBzentyNm\" type=\"STRING\" size=\"256\"/><Column id=\"pPstnCd\" type=\"STRING\" size=\"256\"/><Column id=\"pBldgCd\" type=\"STRING\" size=\"256\"/><Column id=\"pSptIdntyCd\" type=\"STRING\" size=\"256\"/><Column id=\"pSesDeptId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"recordCountPerPage\">10</Col><Col id=\"currentPageNo\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("<ColumnInfo><Column id=\"totalRecordCount\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboBldgCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboPstnCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboPerPageCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboSptIdntyCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch02", this);
            obj._setContents("<ColumnInfo><Column id=\"pHireLohNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divSch","0","divTitle:20",null,"206","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel02","0","0","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("10");
            obj.set_text("위치");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel03","1694.00","398","360","45",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("13");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem03\" componentid=\"cboBldgCd\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Combo("cboBldgCd","823","20","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsCboBldgCd");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divSch.addChild(obj.name, obj);

            obj = new Combo("cboPstnCd","146","80","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsCboPstnCd");
            obj.set_datacolumn("cdNm");
            obj.set_codecolumn("cdId");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel02","1694.00","398","360","45",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("11");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02\"/><PanelItem id=\"PanelItem03\" componentid=\"cboPstnCd\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","0","0","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("12");
            obj.set_text("건물명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staRcptNo","0","0","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("14");
            obj.set_text("접수번호");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staBzentyNm","0","0","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("16");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Edit("edtBzentyNm","841","24","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("2");
            obj.set_flexgrow("0");
            obj.set_displaynulltext("업체명 입력");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panBzentyNm","1694.00","398","360","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("17");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staBzentyNm\"/><PanelItem id=\"PanelItem02\" componentid=\"edtBzentyNm\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panRcptNo","1694.00","398","360","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("15");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staRcptNo\"/><PanelItem id=\"PanelItem00\" componentid=\"edtRcptNo\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Edit("edtRcptNo","841","24","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("접수번호 입력");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","100%","108",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("0");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("50");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panRcptNo\"/><PanelItem id=\"PanelItem02\" componentid=\"panBzentyNm\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel02\"/><PanelItem id=\"PanelItem06\" componentid=\"Panel03\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel02_00\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","1694.00","398","360","45",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("19");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02_00\"/><PanelItem id=\"PanelItem03\" componentid=\"cboSptIdntyCd\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panClose","30","151","100%","30",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnSchClose\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Button("btnSchClose","1251","185","30","30",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_SchClose");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("8");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSch\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Button("btnSch","570","192","112","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("9");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel02_00","0","0","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("18");
            obj.set_text("확인구분");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Combo("cboSptIdntyCd","146","80","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsCboSptIdntyCd");
            obj.set_datacolumn("cdNm");
            obj.set_codecolumn("cdId");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","0","divSch:30",null,null,"60","25",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn",null,"0","450","34","0",null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("4");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("width");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"staTotal00\"/><PanelItem id=\"PanelItem01\" componentid=\"grdListCnt\"/></Contents>");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","150","0","30","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("총");
            obj.set_cssclass("sta_WF");
            obj.set_usedecorate("true");
            obj.set_textAlign("left");
            this.divGrd.addChild(obj.name, obj);

            obj = new Combo("grdListCnt","1230","0","80","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsCboPerPageCnt");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("");
            obj.set_value("50");
            obj.set_index("-1");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal00","1165","0","54","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("목록수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal01","staTotal:0","0","43","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("5");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_textAlign("right");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","staTotal01:0","0","30","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("6");
            obj.set_text("건");
            obj.set_usedecorate("true");
            obj.set_textAlign("left");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staListTitle","0","0","150","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("7");
            obj.set_text("임차문의 업체");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            this.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdList","0","PanelGrdBtn:10","100.00%","300",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"210\"/><Column size=\"210\"/><Column size=\"210\"/><Column size=\"210\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"120\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"임차문의&#13;&#10;접수번호\"/><Cell col=\"1\" text=\"업체명\"/><Cell col=\"2\" text=\"업체분류\"/><Cell col=\"3\" text=\"희망위치\"/><Cell col=\"4\" text=\"희망건물명\"/><Cell col=\"5\" text=\"희망면적(m2)\"/><Cell col=\"6\" text=\"용도\"/><Cell col=\"7\" text=\"확인구분\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" text=\"bind:rcptNo\"/><Cell col=\"1\" suppressalign=\"middle\" textAlign=\"left\" text=\"bind:bzentyNm\"/><Cell col=\"2\" text=\"bind:bzentyClsfNm\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:pstnNm\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:bldgNm\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:rntar\"/><Cell col=\"6\" text=\"bind:usgNm\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:sptIdntyNm\" textAlign=\"left\"/></Band></Format></Formats>");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal03_00","0.00","366","250","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("9");
            obj.set_text("후보공간확인요청 등록 정보");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            this.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdList02","0","staTotal03_00:0","100.00%","200",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("8");
            obj.set_binddataset("dsList02");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"210\"/><Column size=\"210\"/><Column size=\"210\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"임차문의&#13;&#10;접수번호\"/><Cell col=\"1\" text=\"업체명\"/><Cell col=\"2\" text=\"위치\"/><Cell col=\"3\" text=\"건물명\"/><Cell col=\"4\" text=\"호실번호\"/><Cell col=\"5\" text=\"면적(m2)\"/><Cell col=\"6\" text=\"확인구분\"/><Cell col=\"7\" text=\"방문희망일자\"/><Cell col=\"8\" text=\"방문자/확인자\"/><Cell col=\"9\" text=\"인솔자\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" text=\"bind:rcptNo\"/><Cell col=\"1\" suppressalign=\"middle\" textAlign=\"left\" text=\"bind:bzentyNm\"/><Cell col=\"2\" text=\"bind:pstnNm\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:bldgNm\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:rmnmNo\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:rntar\"/><Cell col=\"6\" text=\"bind:sptIdntyNm\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:vstHpeYmd\" textAlign=\"center\" maskeditformat=\"####-##-##\" displaytype=\"mask\" maskedittype=\"string\"/><Cell col=\"8\" text=\"bind:vstrNm\" textAlign=\"left\"/><Cell col=\"9\" cssclass=\"CellEnd\" text=\"bind:ldrNeedNm\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divGrd.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSch.form
            obj = new Layout("default","",0,0,this.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel02.set_taborder("10");
                p.staLabel02.set_text("위치");
                p.staLabel02.set_cssclass("sta_WF_SchLabel");
                p.staLabel02.set_flexshrink("0");
                p.staLabel02.set_maxwidth("");
                p.staLabel02.move("0","0","100","40",null,null);

                p.Panel03.set_taborder("13");
                p.Panel03.set_type("horizontal");
                p.Panel03.set_horizontalgap("10");
                p.Panel03.set_fittocontents("height");
                p.Panel03.set_flexgrow("1");
                p.Panel03.set_minwidth("");
                p.Panel03.move("1694.00","398","360","45",null,null);

                p.cboBldgCd.set_taborder("4");
                p.cboBldgCd.set_innerdataset("dsCboBldgCd");
                p.cboBldgCd.set_codecolumn("cdId");
                p.cboBldgCd.set_datacolumn("cdNm");
                p.cboBldgCd.set_text("전체");
                p.cboBldgCd.set_value("");
                p.cboBldgCd.set_index("-1");
                p.cboBldgCd.move("823","20","100%","40",null,null);

                p.cboPstnCd.set_taborder("3");
                p.cboPstnCd.set_innerdataset("dsCboPstnCd");
                p.cboPstnCd.set_datacolumn("cdNm");
                p.cboPstnCd.set_codecolumn("cdId");
                p.cboPstnCd.set_text("전체");
                p.cboPstnCd.set_value("");
                p.cboPstnCd.set_index("-1");
                p.cboPstnCd.move("146","80","100%","40",null,null);

                p.Panel02.set_taborder("11");
                p.Panel02.set_type("horizontal");
                p.Panel02.set_horizontalgap("10");
                p.Panel02.set_flexgrow("1");
                p.Panel02.set_minwidth("");
                p.Panel02.move("1694.00","398","360","45",null,null);

                p.staLabel01_00.set_taborder("12");
                p.staLabel01_00.set_text("건물명");
                p.staLabel01_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel01_00.set_flexshrink("0");
                p.staLabel01_00.set_maxwidth("");
                p.staLabel01_00.move("0","0","100","40",null,null);

                p.staRcptNo.set_taborder("14");
                p.staRcptNo.set_text("접수번호");
                p.staRcptNo.set_cssclass("sta_WF_SchLabel");
                p.staRcptNo.set_flexshrink("0");
                p.staRcptNo.set_maxwidth("");
                p.staRcptNo.move("0","0","100","40",null,null);

                p.staBzentyNm.set_taborder("16");
                p.staBzentyNm.set_text("업체명");
                p.staBzentyNm.set_cssclass("sta_WF_SchLabel");
                p.staBzentyNm.set_flexshrink("0");
                p.staBzentyNm.set_maxwidth("");
                p.staBzentyNm.move("0","0","100","40",null,null);

                p.edtBzentyNm.set_taborder("2");
                p.edtBzentyNm.set_flexgrow("0");
                p.edtBzentyNm.set_displaynulltext("업체명 입력");
                p.edtBzentyNm.move("841","24","100%","40",null,null);

                p.panBzentyNm.set_taborder("17");
                p.panBzentyNm.set_type("horizontal");
                p.panBzentyNm.set_horizontalgap("10");
                p.panBzentyNm.set_flexgrow("1");
                p.panBzentyNm.set_fittocontents("height");
                p.panBzentyNm.set_maxheight("");
                p.panBzentyNm.set_minwidth("");
                p.panBzentyNm.move("1694.00","398","360","40",null,null);

                p.panRcptNo.set_taborder("15");
                p.panRcptNo.set_type("horizontal");
                p.panRcptNo.set_horizontalgap("10");
                p.panRcptNo.set_fittocontents("height");
                p.panRcptNo.set_flexgrow("1");
                p.panRcptNo.set_minwidth("");
                p.panRcptNo.move("1694.00","398","360","40",null,null);

                p.edtRcptNo.set_taborder("1");
                p.edtRcptNo.set_displaynulltext("접수번호 입력");
                p.edtRcptNo.move("841","24","100%","40",null,null);

                p.panLabel.set_taborder("0");
                p.panLabel.set_verticalgap("8");
                p.panLabel.set_flexwrap("wrap");
                p.panLabel.set_spacing("0px 0px 10px 0px");
                p.panLabel.set_type("horizontal");
                p.panLabel.set_flexcrossaxisalign("start");
                p.panLabel.set_horizontalgap("50");
                p.panLabel.set_fittocontents("height");
                p.panLabel.set_maxheight("");
                p.panLabel.move("20","14","100%","108",null,null);

                p.Panel02_00.set_taborder("19");
                p.Panel02_00.set_type("horizontal");
                p.Panel02_00.set_horizontalgap("10");
                p.Panel02_00.set_flexgrow("1");
                p.Panel02_00.set_minwidth("");
                p.Panel02_00.move("1694.00","398","360","45",null,null);

                p.panClose.set_taborder("7");
                p.panClose.set_type("vertical");
                p.panClose.set_cssclass("pal_WF_SchLine");
                p.panClose.set_flexcrossaxisalign("end");
                p.panClose.move("30","151","100%","30",null,null);

                p.btnSchClose.set_taborder("6");
                p.btnSchClose.set_cssclass("btn_WF_SchClose");
                p.btnSchClose.move("1251","185","30","30",null,null);

                p.panSchBtn.set_taborder("8");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100%","40",null,null);

                p.btnSch.set_taborder("9");
                p.btnSch.set_text("조회하기");
                p.btnSch.set_cssclass("btn_WF_Search");
                p.btnSch.move("570","192","112","40",null,null);

                p.staLabel02_00.set_taborder("18");
                p.staLabel02_00.set_text("확인구분");
                p.staLabel02_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel02_00.set_flexshrink("0");
                p.staLabel02_00.set_maxwidth("");
                p.staLabel02_00.move("0","0","100","40",null,null);

                p.cboSptIdntyCd.set_taborder("5");
                p.cboSptIdntyCd.set_innerdataset("dsCboSptIdntyCd");
                p.cboSptIdntyCd.set_datacolumn("cdNm");
                p.cboSptIdntyCd.set_codecolumn("cdId");
                p.cboSptIdntyCd.set_text("전체");
                p.cboSptIdntyCd.set_value("");
                p.cboSptIdntyCd.set_index("-1");
                p.cboSptIdntyCd.move("146","80","100%","40",null,null);
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
                p.panLabel.move("132","47","100%","305",null,null);

                p.pan03.set_type("horizontal");
                p.pan03.set_horizontalgap("8");
                p.pan03.move("1694.00","398","100%","40",null,null);

                p.pan02.set_horizontalgap("8");
                p.pan02.move("1694.00","398","100%","45",null,null);

                p.pan01.set_horizontalgap("8");
                p.pan01.move("1694.00","398","100%","40",null,null);

                p.pan03.set_type("horizontal");
                p.pan03.set_fittocontents("height");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_horizontalgap("8");
                p.pan03.set_flexgrow("1");
                p.pan03.move("1694.00","398","100%","40",null,null);

                p.Edit00.move("890","24","65%","40",null,null);

                p.Edit01.move("163","80","65%","40",null,null);

                p.pan04.move("1694.00","398","100%","45",null,null);

                p.cmbList.move("130","14","120","40",null,null);

                p.Edit03.move("977","85","65%","40",null,null);

                p.PanelCal.move("285","24","100%","40",null,null);
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

            	}
            );
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            this.divSch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divGrd.form
            obj = new Layout("default","",0,0,this.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.PanelGrdBtn.set_taborder("4");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_fittocontents("width");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.move(null,"0","450","34","0",null);

                p.staTotal.set_taborder("1");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_textAlign("left");
                p.staTotal.move("150","0","30","34",null,null);

                p.grdListCnt.set_taborder("3");
                p.grdListCnt.set_innerdataset("dsCboPerPageCnt");
                p.grdListCnt.set_codecolumn("cdId");
                p.grdListCnt.set_datacolumn("cdNm");
                p.grdListCnt.set_text("");
                p.grdListCnt.set_value("50");
                p.grdListCnt.set_index("-1");
                p.grdListCnt.move("1230","0","80","34",null,null);

                p.staTotal00.set_taborder("2");
                p.staTotal00.set_text("목록수");
                p.staTotal00.set_cssclass("sta_WF_SchLabel");
                p.staTotal00.set_fittocontents("width");
                p.staTotal00.move("1165","0","54","34",null,null);

                p.staTotal01.set_taborder("5");
                p.staTotal01.set_text("0");
                p.staTotal01.set_cssclass("sta_WF_Total");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.set_fittocontents("width");
                p.staTotal01.set_textAlign("right");
                p.staTotal01.move("staTotal:0","0","43","34",null,null);

                p.staTotal02.set_taborder("6");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.set_textAlign("left");
                p.staTotal02.move("staTotal01:0","0","30","34",null,null);

                p.staListTitle.set_taborder("7");
                p.staListTitle.set_text("임차문의 업체");
                p.staListTitle.set_cssclass("sta_WF_SchLabel");
                p.staListTitle.set_usedecorate("true");
                p.staListTitle.move("0","0","150","34",null,null);

                p.grdList.set_taborder("0");
                p.grdList.set_binddataset("dsList");
                p.grdList.set_autofittype("none");
                p.grdList.move("0","PanelGrdBtn:10","100.00%","300",null,null);

                p.staTotal03_00.set_taborder("9");
                p.staTotal03_00.set_text("후보공간확인요청 등록 정보");
                p.staTotal03_00.set_cssclass("sta_WF_SchLabel");
                p.staTotal03_00.set_usedecorate("true");
                p.staTotal03_00.move("0.00","366","250","34",null,null);

                p.grdList02.set_taborder("8");
                p.grdList02.set_binddataset("dsList02");
                p.grdList02.set_autofittype("none");
                p.grdList02.move("0","staTotal03_00:0","100.00%","200",null,null);
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

                p.btnGrdRegi.set_visible("false");

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
                p.set_titletext("후보공간확인요청 목록 (처리자)");

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
                p.divSch.move("0","divTitle:20",null,"206","60",null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","divSch:30",null,null,"60","25");
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divSch.move("20","divTitle:20",null,"153","20",null);

                p.divGrd.move("20","divSch:30",null,null,"20","25");

                p.divTitle.set_visible("true");
                p.divTitle.move("0","0",null,"50","0",null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSch.form.cboPstnCd","value","dsSearch","pPstnCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSch.form.cboBldgCd","value","dsSearch","pBldgCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divGrd.form.staTotal01","text","dsPage","totalRecordCount");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divGrd.form.grdListCnt","value","dsSearch","recordCountPerPage");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Edit01_00","value","dsSearch","pRcptNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Edit01_00_00","value","dsSearch","pBzentyNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","cboPstnCd","value","dsSearch","pPstnCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSch.form.cboSptIdntyCd","value","dsSearch","pSptIdntyCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSch.form.edtRcptNo","value","dsSearch","pRcptNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSch.form.edtBzentyNm","value","dsSearch","pBzentyNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","cboPstnCd00","value","dsSearch","pSptIdntyCd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.addIncludeScript("REN005M02.xfdl","xjs::TaskCom.xjs");
        this.registerScript("REN005M02.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	REN005M02.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/10/10
        *  @Desction    후보공간확인요청 목록(처리자)
        ******************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/10/10			이루온						최초생성
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

        	//페이지 로딩시 처음에 실행 되는 함수
        	this.fnInit();

        	//페이징을 위하여 검색 함수를 실행
        	this.cfnSearch(1);
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	// 사용자정보 조회
        	const gdsUser = nexacro.getApplication().gdsUser;
        	this.dsSearch.setColumn(0, "pSesDeptId", gdsUser.getColumn(0, "deptId"));

        	this.cfnComCdLoad({dsCboPerPageCnt:"REN9000:S", dsCboBldgCd:"RENT_ASN_BLDG:A", dsCboPstnCd:"ZONE_SE_CD:A", dsCboSptIdntyCd:"SPT_IDNTY_CD:A"});
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (fnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //검색 조회
        this.cfnSearch = function(page)
        {
        	//그리드 한 페이지에 게시되는 데이터건수
        	this.dsSearch.setColumn(0, "currentPageNo", page);

        	this.getSearchTransaction();
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //목록 조회 트랙젝션
        this.getSearchTransaction = function() {

        	this.dsList.clear();

        	var strSvcId    = "search";
        	var strSvcUrl   = "ren/frs/selectCnddSpceIdntyDmndPrcrList.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsList=dsList dsPage=dsPage";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //트랜젝션 콜백 함수
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		//콤보조회
        		case "_cfnComCdLoad_":
        			this.divSch.form.cboPstnCd.set_index(0);		// 위치
        			this.divSch.form.cboBldgCd.set_index(0);		// 건물
        			this.divSch.form.cboSptIdntyCd.set_index(0);	// 확인구분
        			this.divGrd.form.grdListCnt.set_index(1);		// 목록수
        			break;

        		//목록조회
        		case "search":
        			// 조회 한 후 페이징을 셋팅 하기 위한 초기 함수
        			//this.divGrd.form.divPage.form.initPages(this.dsPage.getColumn(0, "currentPageNo"), this.dsPage.getColumn(0, "totalRecordCount"), this.dsPage.getColumn(0, "recordCountPerPage"), this.dsPage.getColumn(0, "pageSize"), "pagingCallback");

        			break;
        	}
        };

        //페이징 버튼 콜백함수
        this.pagingCallback = function(page) {
        	this.cfnSearch(page);
        };

        //팝업에 관한 콜백 함수
        this.fnPopupCallback = function(sPopupId, sRtn){};

        /*******************************************************************************************************************************
         * 조회 버튼 클릭시
        *******************************************************************************************************************************/
        this.divSch_btnSch_onclick = function(obj,e)
        {
        	this.cfnSearch(1);
        };

        /*******************************************************************************************************************************
         * 조회건수 변경시
        *******************************************************************************************************************************/
        this.divGrd_grdListCnt_onitemchanged = function(obj,e)
        {
        	this.cfnSearch(1);
        };

        /*******************************************************************************************************************************
         * 목록 그리드 클릭시 세부목록 조회
        *******************************************************************************************************************************/
        this.divGrd_grdList_oncellclick = function(obj,e)
        {
        	//if (e.cell == 1) {
        		this.dsSearch02.setColumn(0,"pHireLohNo",this.dsList.getColumn(e.row, "hireLohNo"));

        		this.dsList02.clear();

        		var strSvcId    = "selectCnddSpceIdntyDmndPrcrDtlList";
        		var strSvcUrl   = "ren/frs/selectCnddSpceIdntyDmndPrcrDtlList.do";
        		var inData      = "dsSearch=dsSearch02";
        		var outData     = "dsList02=dsList";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";
        		var isAsync   	= true;

        		this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        	//};
        };


        this.form_onkeyup = function(obj,e)
        {
        	if (e.keycode==13 && e.fromobject.id != "grdList") {
        		if (e.fromobject.taborder >= 1 && e.fromobject.taborder <= 5) {
        			this.divSch.form.btnSch.click();
        		}
        	}
        };

        /*******************************************************************************************************************************
         * 위치코드 변경시
        *******************************************************************************************************************************/
        this.divSch_cboPstnCd_onitemchanged = function(obj,e)
        {
        	if (e.postvalue == "") {
        		this.dsCboBldgCd.filter("");
        		this.divSch.form.cboBldgCd.set_index(0);
        	} else {
        		this.dsCboBldgCd.filter("cdNm == '전체' || String(cdVl01).indexOf('" + e.postvalue + "') >= 0");
        	}
        };

        /*******************************************************************************************************************************
         * 세부목록 그리드 클릭시 상세화면 이동
        *******************************************************************************************************************************/
        this.divGrd_grdList02_oncellclick = function(obj,e)
        {
        	var hireLohNo = this.dsList.getColumn(e.row, "hireLohNo");

        	if (this.objApp.screenid == "Desktop_screen") {
        		/*****  MDI 에 추가하는 페이지 오픈을 위한 코드 *****/
        		var param = {
        			"status" : "detail"
        			,"hireLohNo" : hireLohNo
        		};

        		var sMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        		var sMenuUrl = 'work::REN/FRS/REN005M03.xfdl';
        		var actNm = '상세';

        		this.gfnPageOpen(sMenuId, sMenuUrl, actNm, param);
        		/*****  MDI 에 추가하는 페이지 오픈을 위한 코드 *****/
        	} else {
        		var sTitle = "상세";
        		var objArg   = {
        			"status" : "detail"
        			,"hireLohNo" : hireLohNo
        		};

        		var objOption = {
        			popuptype: "modal"	//modal,modaless
        			, autosize: true
        			, title: sTitle
        			, resize: true
        			, titlebar: true
        		};
        		var sPopupCallBack = "fnPopupCallback";

        		this.gfnOpenPopup("REN002M01", "work::REN/FRS/REN005M03.xfdl", objArg, sPopupCallBack, objOption);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onkeyup",this.form_onkeyup,this);
            this.divSch.form.staLabel02.addEventHandler("onclick",this.divForm_Div00_sta00_00_01_01_onclick,this);
            this.divSch.form.cboPstnCd.addEventHandler("onitemchanged",this.divSch_cboPstnCd_onitemchanged,this);
            this.divSch.form.btnSch.addEventHandler("onclick",this.divSch_btnSch_onclick,this);
            this.divSch.form.staLabel02_00.addEventHandler("onclick",this.divForm_Div00_sta00_00_01_01_onclick,this);
            this.divGrd.form.grdListCnt.addEventHandler("onitemchanged",this.divGrd_grdListCnt_onitemchanged,this);
            this.divGrd.form.grdList.addEventHandler("oncelldblclick",this.divGrd_grdList_oncellclick,this);
            this.divGrd.form.grdList02.addEventHandler("oncelldblclick",this.divGrd_grdList02_oncellclick,this);
        };
        this.loadIncludeScript("REN005M02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
