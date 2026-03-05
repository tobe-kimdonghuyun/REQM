(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("REN008M05");
            this.set_titletext("임차업무 연락처");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"chc\" type=\"STRING\" size=\"256\"/><Column id=\"hireLoiNo\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyClsfNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyNm\" type=\"STRING\" size=\"256\"/><Column id=\"picDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"picNm\" type=\"STRING\" size=\"256\"/><Column id=\"picJbpsNm\" type=\"STRING\" size=\"256\"/><Column id=\"picTelno\" type=\"STRING\" size=\"256\"/><Column id=\"picMblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"picEmlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"picFxno\" type=\"STRING\" size=\"256\"/><Column id=\"dtyBsnsNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"currentPageNo\" type=\"STRING\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"STRING\" size=\"256\"/><Column id=\"pBzentyClsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"pBzentyNm\" type=\"STRING\" size=\"256\"/><Column id=\"pPicDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"pPicNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"recordCountPerPage\">10</Col><Col id=\"currentPageNo\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("<ColumnInfo><Column id=\"totalRecordCount\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCbopBzentyClsfCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboPerPageCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divSch","0","70",null,"206","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","100%","108",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("0");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("50");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem05\" componentid=\"panBzentyClsfCd\"/><PanelItem id=\"PanelItem00\" componentid=\"panBzentyNm\"/><PanelItem id=\"PanelItem06\" componentid=\"panPicDeptNm\"/><PanelItem id=\"PanelItem03\" componentid=\"panPicNm\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panBzentyNm","1694.00","398","360","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("6");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staBzentyNm\"/><PanelItem id=\"PanelItem02\" componentid=\"edtBzentyNm\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staBzentyNm","0","0","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("5");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Edit("edtPicDeptNm","551","71","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("3");
            obj.set_value("");
            obj.getSetter("index").set("-1");
            obj.set_flexgrow("0");
            obj.getSetter("innerdataset").set("dsCboBldgCd");
            obj.getSetter("codecolumn").set("cdId");
            obj.getSetter("datacolumn").set("cdNm");
            obj.set_text("전체");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staPicDeptNm","486","77","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("14");
            obj.set_text("담당부서");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panPicDeptNm","637","65","360","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("13");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPicDeptNm\"/><PanelItem id=\"PanelItem02\" componentid=\"edtPicDeptNm\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panClose","30","151","100%","30",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnSchClose\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Button("btnSchClose","1251","185","52","29",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_SchClose");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("9");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSch\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Button("btnSch","570","192","128","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("10");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panBzentyClsfCd","20.00","14","360","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("12");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexwrap("nowrap");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staBzentyClsfCd\"/><PanelItem id=\"PanelItem01\" componentid=\"cboBzentyClsfCd\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staBzentyClsfCd","69","25","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("11");
            obj.set_text("업체분류");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Combo("cboBzentyClsfCd","140","27","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("1");
            obj.set_flexgrow("0");
            obj.set_innerdataset("dsCbopBzentyClsfCd");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staPicNm","486","77","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("15");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panPicNm","637","65","360","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("16");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPicNm\"/><PanelItem id=\"PanelItem02\" componentid=\"edtPicNm\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Edit("edtPicNm","551","71","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("4");
            obj.set_value("");
            obj.getSetter("index").set("-1");
            obj.set_flexgrow("0");
            obj.getSetter("innerdataset").set("dsCboSttsCd");
            obj.getSetter("codecolumn").set("cdId");
            obj.getSetter("datacolumn").set("cdNm");
            obj.set_text("전체");
            this.divSch.addChild(obj.name, obj);

            obj = new Edit("edtBzentyNm","841","24","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("2");
            obj.set_flexgrow("0");
            obj.set_displaynulltext("업체명 입력");
            this.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","0","divSch:30",null,null,"60","-52",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Div("divPage","0",null,"100.00%","36",null,"0",null,null,null,null,this.divGrd.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("work::COM/util/paging/paging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_visible("false");
            this.divGrd.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn",null,"0","550","34","0",null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("4");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staTotal00\"/><PanelItem id=\"PanelItem02\" componentid=\"grdListCnt\"/></Contents>");
            this.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdList","0","PanelGrdBtn:10","100.00%",null,null,"divPage:10",null,null,null,null,this.divGrd.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_autofittype("none");
            obj.set_readonly("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"150\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"업체분류\"/><Cell col=\"1\" text=\"업체명\"/><Cell col=\"2\" text=\"담당부서\"/><Cell col=\"3\" text=\"담당자\"/><Cell col=\"4\" text=\"직위(직급)\"/><Cell col=\"5\" text=\"전화(사무실)\"/><Cell col=\"6\" text=\"휴대폰\"/><Cell col=\"7\" text=\"이메일\"/><Cell col=\"8\" text=\"FAX\"/><Cell col=\"9\" text=\"담당업부\"/></Band><Band id=\"body\"><Cell text=\"bind:bzentyClsfNm\" textAlign=\"left\" edittype=\"none\" displaytype=\"normal\"/><Cell col=\"1\" text=\"bind:bzentyNm\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:picDeptNm\" displaytype=\"normal\" textAlign=\"left\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:picNm\" displaytype=\"normal\" edittype=\"none\" combodataset=\"ds_cbo\" combodatacol=\"mm\" combocodecol=\"code\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:picJbpsNm\" displaytype=\"normal\" cssclass=\"expr:state==&apos;0&apos;?&apos;CellTxtRed&apos;:&apos;CellTxtBlue&apos;\" textAlign=\"left\" edittype=\"none\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"none\" text=\"bind:picTelno\" textAlign=\"center\" maskeditformat=\"###-####-####\" maskeditmaskchar=\" \" maskedittype=\"string\"/><Cell col=\"6\" text=\"bind:picMblTelno\" textAlign=\"center\" displaytype=\"text\" maskeditformat=\"###-####-####\" maskedittype=\"string\" edittype=\"none\" maskeditmaskchar=\" \"/><Cell col=\"7\" text=\"bind:picEmlAddr\" textAlign=\"left\" edittype=\"none\"/><Cell col=\"8\" text=\"bind:picFxno\" textAlign=\"left\" edittype=\"none\" maskeditformat=\"###-####-####\"/><Cell col=\"9\" text=\"bind:dtyBsnsNm\" textAlign=\"left\" edittype=\"none\"/></Band></Format></Formats>");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","27","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("7");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal01","staTotal:0","0","43","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("6");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","staTotal01:0","0","30","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("5");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divGrd.addChild(obj.name, obj);

            obj = new Combo("grdListCnt","1230","0","80","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsCboPerPageCnt");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("10");
            obj.set_value("10");
            obj.set_index("0");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal00","1165","0","65","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("목록수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
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

                p.panBzentyNm.set_taborder("6");
                p.panBzentyNm.set_type("horizontal");
                p.panBzentyNm.set_horizontalgap("10");
                p.panBzentyNm.set_flexgrow("1");
                p.panBzentyNm.set_fittocontents("height");
                p.panBzentyNm.set_maxheight("");
                p.panBzentyNm.set_minwidth("");
                p.panBzentyNm.move("1694.00","398","360","40",null,null);

                p.staBzentyNm.set_taborder("5");
                p.staBzentyNm.set_text("업체명");
                p.staBzentyNm.set_cssclass("sta_WF_SchLabel");
                p.staBzentyNm.set_flexshrink("0");
                p.staBzentyNm.set_maxwidth("");
                p.staBzentyNm.move("0","0","100","40",null,null);

                p.edtPicDeptNm.set_taborder("3");
                p.edtPicDeptNm.set_value("");
                p.edtPicDeptNm.getSetter("index").set("-1");
                p.edtPicDeptNm.set_flexgrow("0");
                p.edtPicDeptNm.getSetter("innerdataset").set("dsCboBldgCd");
                p.edtPicDeptNm.getSetter("codecolumn").set("cdId");
                p.edtPicDeptNm.getSetter("datacolumn").set("cdNm");
                p.edtPicDeptNm.move("551","71","100%","40",null,null);

                p.staPicDeptNm.set_taborder("14");
                p.staPicDeptNm.set_text("담당부서");
                p.staPicDeptNm.set_cssclass("sta_WF_SchLabel");
                p.staPicDeptNm.set_flexshrink("0");
                p.staPicDeptNm.move("486","77","100","40",null,null);

                p.panPicDeptNm.set_taborder("13");
                p.panPicDeptNm.set_horizontalgap("10");
                p.panPicDeptNm.set_flexgrow("1");
                p.panPicDeptNm.set_fittocontents("height");
                p.panPicDeptNm.move("637","65","360","40",null,null);

                p.panClose.set_taborder("8");
                p.panClose.set_type("vertical");
                p.panClose.set_cssclass("pal_WF_SchLine");
                p.panClose.set_flexcrossaxisalign("end");
                p.panClose.move("30","151","100%","30",null,null);

                p.btnSchClose.set_taborder("7");
                p.btnSchClose.set_cssclass("btn_WF_SchClose");
                p.btnSchClose.move("1251","185","52","29",null,null);

                p.panSchBtn.set_taborder("9");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100%","40",null,null);

                p.btnSch.set_taborder("10");
                p.btnSch.set_text("조회하기");
                p.btnSch.set_cssclass("btn_WF_Search");
                p.btnSch.move("570","192","128","40",null,null);

                p.panBzentyClsfCd.set_taborder("12");
                p.panBzentyClsfCd.set_type("horizontal");
                p.panBzentyClsfCd.set_horizontalgap("10");
                p.panBzentyClsfCd.set_fittocontents("height");
                p.panBzentyClsfCd.set_flexwrap("nowrap");
                p.panBzentyClsfCd.set_flexgrow("1");
                p.panBzentyClsfCd.set_maxheight("");
                p.panBzentyClsfCd.set_minwidth("");
                p.panBzentyClsfCd.move("20.00","14","360","40",null,null);

                p.staBzentyClsfCd.set_taborder("11");
                p.staBzentyClsfCd.set_text("업체분류");
                p.staBzentyClsfCd.set_cssclass("sta_WF_SchLabel");
                p.staBzentyClsfCd.set_flexshrink("0");
                p.staBzentyClsfCd.move("69","25","100","40",null,null);

                p.cboBzentyClsfCd.set_taborder("1");
                p.cboBzentyClsfCd.set_flexgrow("0");
                p.cboBzentyClsfCd.set_innerdataset("dsCbopBzentyClsfCd");
                p.cboBzentyClsfCd.set_codecolumn("cdId");
                p.cboBzentyClsfCd.set_datacolumn("cdNm");
                p.cboBzentyClsfCd.set_text("전체");
                p.cboBzentyClsfCd.set_value("");
                p.cboBzentyClsfCd.set_index("-1");
                p.cboBzentyClsfCd.move("140","27","100%","40",null,null);

                p.staPicNm.set_taborder("15");
                p.staPicNm.set_text("담당자");
                p.staPicNm.set_cssclass("sta_WF_SchLabel");
                p.staPicNm.set_flexshrink("0");
                p.staPicNm.move("486","77","100","40",null,null);

                p.panPicNm.set_taborder("16");
                p.panPicNm.set_horizontalgap("10");
                p.panPicNm.set_flexgrow("1");
                p.panPicNm.move("637","65","360","40",null,null);

                p.edtPicNm.set_taborder("4");
                p.edtPicNm.set_value("");
                p.edtPicNm.getSetter("index").set("-1");
                p.edtPicNm.set_flexgrow("0");
                p.edtPicNm.getSetter("innerdataset").set("dsCboSttsCd");
                p.edtPicNm.getSetter("codecolumn").set("cdId");
                p.edtPicNm.getSetter("datacolumn").set("cdNm");
                p.edtPicNm.move("551","71","100%","40",null,null);

                p.edtBzentyNm.set_taborder("2");
                p.edtBzentyNm.set_flexgrow("0");
                p.edtBzentyNm.set_displaynulltext("업체명 입력");
                p.edtBzentyNm.move("841","24","100%","40",null,null);
            	}
            );
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            this.divSch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSch.form
            obj = new Layout("mobile","",0,0,this.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staBzentyClsfCd.move("69","25","76","40",null,null);

                p.staBzentyNm.move("0","0","76","40",null,null);

                p.staPicDeptNm.move("486","77","76","40",null,null);

                p.staPicNm.move("486","77","76","40",null,null);

                p.panLabel.move("20","14","100%","386",null,null);
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

            	}
            );
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
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
            obj.set_spacing("10px 16px 12px 16px");
            obj.set_verticalgap("20");
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
                p.divPage.set_taborder("0");
                p.divPage.set_text("Div00");
                p.divPage.set_url("work::COM/util/paging/paging.xfdl");
                p.divPage.set_formscrollbartype("none none");
                p.divPage.set_formscrolltype("none");
                p.divPage.set_visible("false");
                p.divPage.set_maxheight("");
                p.divPage.move("0",null,"100.00%","36",null,"0");

                p.PanelGrdBtn.set_taborder("4");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_fittocontents("height");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.move(null,"0","550","34","0",null);

                p.grdList.set_taborder("1");
                p.grdList.set_binddataset("dsList");
                p.grdList.set_autofittype("none");
                p.grdList.set_readonly("false");
                p.grdList.move("0","PanelGrdBtn:10","100.00%",null,null,"divPage:10");

                p.staTotal.set_taborder("7");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","0","27","34",null,null);

                p.staTotal01.set_taborder("6");
                p.staTotal01.set_text("0");
                p.staTotal01.set_cssclass("sta_WF_Total");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.set_fittocontents("width");
                p.staTotal01.move("staTotal:0","0","43","34",null,null);

                p.staTotal02.set_taborder("5");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.move("staTotal01:0","0","30","34",null,null);

                p.grdListCnt.set_taborder("3");
                p.grdListCnt.set_innerdataset("dsCboPerPageCnt");
                p.grdListCnt.set_codecolumn("cdId");
                p.grdListCnt.set_datacolumn("cdNm");
                p.grdListCnt.set_text("10");
                p.grdListCnt.set_value("10");
                p.grdListCnt.set_index("0");
                p.grdListCnt.move("1230","0","80","34",null,null);

                p.staTotal00.set_taborder("2");
                p.staTotal00.set_text("목록수");
                p.staTotal00.set_cssclass("sta_WF_SchLabel");
                p.staTotal00.set_fittocontents("width");
                p.staTotal00.move("1165","0","65","34",null,null);
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

                p.btnGrdAdd.set_visible("false");

                p.btnGrdRegi.set_visible("false");

                p.btnGrdDel.set_visible("false");

                p.btnGrdDw.set_visible("false");
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
                p.set_titletext("임차업무 연락처");

                p.divTitle.set_taborder("2");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);

                p.divSch.set_taborder("0");
                p.divSch.set_cssclass("div_WF_SchBg");
                p.divSch.set_formscrollbartype("none none");
                p.divSch.set_formscrolltype("none");
                p.divSch.set_fittocontents("height");
                p.divSch.move("0","70",null,"206","60",null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","divSch:30",null,null,"60","-52");
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
                p.divSch.move("20","70",null,"153","20",null);

                p.divGrd.move("20","divSch:30",null,null,"20","-52");

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
            obj = new BindItem("item0","divSch.form.edtPicNm","value","dsSearch","pPrgsSttsCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSch.form.cboBzentyClsfCd","value","dsSearch","pBzentyClsfCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSch.form.edtPicDeptNm","value","dsSearch","pBldgCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSch.form.edtBzentyNm","value","dsSearch","pBzentyNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divGrd.form.staTotal01","text","dsPage","totalRecordCount");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divGrd.form.grdListCnt","value","dsSearch","recordCountPerPage");
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
        this.addIncludeScript("REN008M05.xfdl","xjs::TaskCom.xjs");
        this.registerScript("REN008M05.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	REN008M05.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/11/07
        *  @Desction    임차업무 연락처
        ******************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/11/07			이루온						최초생성
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

        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function() {

        	this.cfnComCdLoad({dsCbopBzentyClsfCd:"BZENTY_CLSF_CD:A", dsCboPerPageCnt:"REN9000:S"});
        	//this.cfnComCdLoad({ id:"commonCodeSearch", cbf:"fnCallBack", dsCboPerPageCnt:"REN9000:S" });	//목록수 조회

        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //검색 조회
        this.cfnSearch = function (page)
        {
        	//그리드 한 페이지에 게시되는 데이터건수
        	this.dsSearch.setColumn(0, "currentPageNo", page);

        	//목록 조회
        	this.getSearchTransaction();
        };

        this.cfnClose = function() {
        	console.log('cfnClose');
        }

        /*******************************************************************************************************************************
         * 조회조건 입력 후 Enter Key 클릭시
        *******************************************************************************************************************************/
        this.form_onkeyup = function(obj,e)
        {
        	if (e.keycode==13 && e.fromobject.id != "grdList") {
        		if (e.fromobject.taborder >= 1 && e.fromobject.taborder <= 4) {
        			this.divSch.form.btnSch.click();
        		}
        	}
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //목록 조회
        this.getSearchTransaction = function() {

        	this.dsList.clear();

        	var strSvcId    = "search";
        	var strSvcUrl   = "ren/frs/selectHireBsnsDtrList.do";
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
        			this.divSch.form.cboBzentyClsfCd.set_index(0);	// 업체분류
        			this.divGrd.form.grdListCnt.set_index(1);		// 목록수
        			break;

        		//콤보조회
        		case "commonCodeSearch":
        			this.divGrd.form.grdListCnt.set_index(1);

        			//페이징을 위하여 검색 함수를 실행
        			this.cfnSearch(1);

        			break;

        		//목록조회
        		case "search":
        			// 조회 한 후 페이징을 셋팅 하기 위한 초기 함수
        			this.divGrd.form.divPage.form.initPages(this.dsPage.getColumn(0, "currentPageNo"), this.dsPage.getColumn(0, "totalRecordCount"), this.dsPage.getColumn(0, "recordCountPerPage"), this.dsPage.getColumn(0, "pageSize"), "pagingCallback");
        			this.divGrd.form.resetScroll();

        			if (this.divGrd.form.grdListCnt.value > this.dsPage.getColumn(0, "totalRecordCount")) {
        				this.divGrd.form.divPage.set_visible(false);
        			}

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


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onkeyup",this.form_onkeyup,this);
            this.divSch.form.btnSchClose.addEventHandler("onclick",this.divForm_divSch_btnSchClose_onclick,this);
            this.divSch.form.btnSch.addEventHandler("onclick",this.divSch_btnSch_onclick,this);
            this.divGrd.form.grdListCnt.addEventHandler("onitemchanged",this.divGrd_grdListCnt_onitemchanged,this);
        };
        this.loadIncludeScript("REN008M05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
