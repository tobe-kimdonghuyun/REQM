(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST006P10");
            this.set_titletext("작업신고서 조회 및 작업공유 (승인자) ");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsComcodeList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplyStDt\" type=\"STRING\" size=\"256\"/><Column id=\"aplyEdDt\" type=\"STRING\" size=\"256\"/><Column id=\"shrnAprvYn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplyYmd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"shrnAprvYn\" type=\"STRING\" size=\"256\"/><Column id=\"shrnAprvCd\" type=\"STRING\" size=\"256\"/><Column id=\"shrnBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"shrnEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"shrnAutzrId\" type=\"STRING\" size=\"256\"/><Column id=\"shrnAprvYmd\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntCoId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntCoNm\" type=\"STRING\" size=\"256\"/><Column id=\"userBrdt\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeNm\" type=\"STRING\" size=\"256\"/><Column id=\"shrnAutzrNm\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMsg", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAprv", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">전체</Col></Row><Row><Col id=\"code\">S</Col><Col id=\"name\">신청중</Col></Row><Row><Col id=\"code\">Y</Col><Col id=\"name\">승인</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"name\">반려</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","60",null,null,"60","70",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("divSch","50","85","100%","175",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","100%","107",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("0");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("50");
            obj.set_fittocontents("height");
            obj.set_tabletemplate("1* / 1*");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01\"/><PanelItem id=\"PanelItem04\" componentid=\"pan01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan01_00\"/><PanelItem id=\"PanelItem06\" componentid=\"pan01_00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"pan02\"/><PanelItem id=\"PanelItem08\" componentid=\"pan06\"/><PanelItem id=\"PanelItem07\" componentid=\"pan07\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01","1694.00","398","480","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01\"/><PanelItem id=\"PanelItem02\" componentid=\"cmbAplySeCd\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01","0","0","120","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("1");
            obj.set_text("작업구분");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan06","710","135","320","1",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("7");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan02","1694.00","398","300","1",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("3");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents/>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","0","0","120","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("9");
            obj.set_text("공유신청일자");
            obj.set_cssclass("sta_WF_SchLabel_E");
            obj.set_flexshrink("0");
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

            obj = new Panel("pan07","476","106","320","1",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("6");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01_00","860","30","480","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("10");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"divCal\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00","0","0","120","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("11");
            obj.set_text("작업신청서번호");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01_00_00","752.00","54","480","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("12");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAplyNo\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtAplyNo","994","35","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("16");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00","0","0","120","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("13");
            obj.set_text("승인여부");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cmbShrnAprvYn","865.00","65","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("14");
            obj.set_innerdataset("dsAprv");
            obj.set_datacolumn("name");
            obj.set_codecolumn("code");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01_00_00_00","755.00","65","480","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("15");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"cmbShrnAprvYn\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cmbAplySeCd","150","14","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("8");
            obj.set_innerdataset("dsComcodeList");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_readonly("true");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divCal","1030","75","320","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("17");
            obj.set_text("Div00");
            obj.set_flexgrow("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Calendar("calAplyStDt","0","0","145","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divCal.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Static("staDash","calAplyStDt:10","0","10","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divCal.form);
            obj.set_taborder("1");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_Dash");
            this.divForm.form.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Calendar("calAplyEdDt","staDash:10","0","145","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divCal.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Div("divGrd","1452","385","100%","450",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panGrdBtn",null,"0","70%","34","0",null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj._setContents("<Contents/>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","panGrdBtn:44","100.00%",null,null,"0",null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.getSetter("uFunction").set("checkbox");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"50\"/><Column size=\"250\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"작업구분\"/><Cell col=\"3\" text=\"작업신청서번호\"/><Cell col=\"4\" text=\"신청일자\"/><Cell col=\"5\" text=\"공유시작일자\"/><Cell col=\"6\" text=\"공유종료일자\"/><Cell col=\"7\" text=\"신청자\"/><Cell col=\"8\" text=\"승인여부\"/><Cell col=\"9\" text=\"승인일자\"/><Cell col=\"10\" text=\"승인자\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" displaytype=\"text\" textAlign=\"right\" text=\"expr:currow+1\"/><Cell col=\"2\" text=\"bind:aplySeNm\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:aplyNo\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"4\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" text=\"bind:aplyYmd\"/><Cell col=\"5\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\" text=\"bind:shrnBgngYmd\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"6\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" text=\"bind:shrnEndYmd\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"7\" textAlign=\"center\" text=\"bind:aplcntNm\"/><Cell col=\"8\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"dsAprv\" combocodecol=\"code\" combodatacol=\"name\" text=\"bind:shrnAprvCd\"/><Cell col=\"9\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\" text=\"bind:shrnAprvYmd\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"10\" cssclass=\"CellEnd\" textAlign=\"center\" text=\"bind:shrnAutzrNm\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","27","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal01","staTotal:0","0","43","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","staTotal01:0","0","30","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divPopBtn00","0","divForm:10",null,"60","60",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.addChild(obj.name, obj);

            obj = new Button("btnAprv","457.00","30","100","40",null,null,null,null,null,null,this.divPopBtn00.form);
            obj.set_taborder("1");
            obj.set_text("승인");
            obj.set_cssclass("btn_WF_Yes");
            this.divPopBtn00.addChild(obj.name, obj);

            obj = new Button("btnRjct","457.00","30","100","40",null,null,null,null,null,null,this.divPopBtn00.form);
            obj.set_taborder("1");
            obj.set_text("반려");
            obj.set_cssclass("btn_WF_Yes");
            this.divPopBtn00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divSch.form.divCal.form
            obj = new Layout("default","",0,0,this.divForm.form.divSch.form.divCal.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.calAplyStDt.set_taborder("0");
                p.calAplyStDt.set_dateformat("yyyy-MM-dd");
                p.calAplyStDt.move("0","0","145","40",null,null);

                p.staDash.set_taborder("1");
                p.staDash.set_text("~");
                p.staDash.set_cssclass("sta_WF_Dash");
                p.staDash.move("calAplyStDt:10","0","10","40",null,null);

                p.calAplyEdDt.set_taborder("2");
                p.calAplyEdDt.set_dateformat("yyyy-MM-dd");
                p.calAplyEdDt.move("staDash:10","0","145","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divForm.form.divSch.form.divCal.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divSch.form.divCal.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divSch.form.divCal.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divForm.form.divSch.form.divCal.form.addLayout(obj.name, obj);
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
                p.panLabel.set_horizontalgap("50");
                p.panLabel.set_fittocontents("height");
                p.panLabel.set_tabletemplate("1* / 1*");
                p.panLabel.set_maxheight("");
                p.panLabel.move("20","14","100%","107",null,null);

                p.pan01.set_taborder("2");
                p.pan01.set_type("horizontal");
                p.pan01.set_horizontalgap("10");
                p.pan01.set_flexgrow("1");
                p.pan01.set_fittocontents("height");
                p.pan01.set_maxheight("");
                p.pan01.set_minwidth("");
                p.pan01.move("1694.00","398","480","40",null,null);

                p.staLabel01.set_taborder("1");
                p.staLabel01.set_text("작업구분");
                p.staLabel01.set_cssclass("sta_WF_SchLabel");
                p.staLabel01.set_flexshrink("0");
                p.staLabel01.set_minwidth("");
                p.staLabel01.move("0","0","120","40",null,null);

                p.pan06.set_taborder("7");
                p.pan06.set_flexgrow("1");
                p.pan06.move("710","135","320","1",null,null);

                p.pan02.set_taborder("3");
                p.pan02.set_type("horizontal");
                p.pan02.set_horizontalgap("10");
                p.pan02.set_flexgrow("1");
                p.pan02.set_fittocontents("height");
                p.pan02.set_minwidth("");
                p.pan02.move("1694.00","398","300","1",null,null);

                p.staLabel01_00.set_taborder("9");
                p.staLabel01_00.set_text("공유신청일자");
                p.staLabel01_00.set_cssclass("sta_WF_SchLabel_E");
                p.staLabel01_00.set_flexshrink("0");
                p.staLabel01_00.set_minwidth("");
                p.staLabel01_00.move("0","0","120","40",null,null);

                p.panSchBtn.set_taborder("4");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100%","40",null,null);

                p.btnSch.set_taborder("5");
                p.btnSch.set_text("조회하기");
                p.btnSch.set_cssclass("btn_WF_Search");
                p.btnSch.set_fittocontents("width");
                p.btnSch.move("570","192","112","40",null,null);

                p.pan07.set_taborder("6");
                p.pan07.set_type("horizontal");
                p.pan07.set_horizontalgap("10");
                p.pan07.set_flexgrow("1");
                p.pan07.set_minwidth("");
                p.pan07.move("476","106","320","1",null,null);

                p.pan01_00.set_taborder("10");
                p.pan01_00.set_type("horizontal");
                p.pan01_00.set_horizontalgap("10");
                p.pan01_00.set_flexgrow("1");
                p.pan01_00.set_fittocontents("height");
                p.pan01_00.set_maxheight("");
                p.pan01_00.set_minwidth("");
                p.pan01_00.move("860","30","480","40",null,null);

                p.staLabel01_00_00.set_taborder("11");
                p.staLabel01_00_00.set_text("작업신청서번호");
                p.staLabel01_00_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel01_00_00.set_flexshrink("0");
                p.staLabel01_00_00.set_minwidth("");
                p.staLabel01_00_00.move("0","0","120","40",null,null);

                p.pan01_00_00.set_taborder("12");
                p.pan01_00_00.set_type("horizontal");
                p.pan01_00_00.set_horizontalgap("10");
                p.pan01_00_00.set_flexgrow("1");
                p.pan01_00_00.set_fittocontents("height");
                p.pan01_00_00.set_maxheight("");
                p.pan01_00_00.set_minwidth("");
                p.pan01_00_00.move("752.00","54","480","40",null,null);

                p.edtAplyNo.set_taborder("16");
                p.edtAplyNo.move("994","35","100%","40",null,null);

                p.staLabel01_00_00_00.set_taborder("13");
                p.staLabel01_00_00_00.set_text("승인여부");
                p.staLabel01_00_00_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel01_00_00_00.set_flexshrink("0");
                p.staLabel01_00_00_00.set_minwidth("");
                p.staLabel01_00_00_00.move("0","0","120","40",null,null);

                p.cmbShrnAprvYn.set_taborder("14");
                p.cmbShrnAprvYn.set_innerdataset("dsAprv");
                p.cmbShrnAprvYn.set_datacolumn("name");
                p.cmbShrnAprvYn.set_codecolumn("code");
                p.cmbShrnAprvYn.set_value("");
                p.cmbShrnAprvYn.set_index("-1");
                p.cmbShrnAprvYn.move("865.00","65","100%","40",null,null);

                p.pan01_00_00_00.set_taborder("15");
                p.pan01_00_00_00.set_type("horizontal");
                p.pan01_00_00_00.set_horizontalgap("10");
                p.pan01_00_00_00.set_flexgrow("1");
                p.pan01_00_00_00.set_fittocontents("height");
                p.pan01_00_00_00.set_maxheight("");
                p.pan01_00_00_00.set_minwidth("");
                p.pan01_00_00_00.move("755.00","65","480","40",null,null);

                p.cmbAplySeCd.set_taborder("8");
                p.cmbAplySeCd.set_innerdataset("dsComcodeList");
                p.cmbAplySeCd.set_codecolumn("cdId");
                p.cmbAplySeCd.set_datacolumn("cdNm");
                p.cmbAplySeCd.set_readonly("true");
                p.cmbAplySeCd.set_minwidth("");
                p.cmbAplySeCd.set_value("");
                p.cmbAplySeCd.set_index("-1");
                p.cmbAplySeCd.move("150","14","100%","40",null,null);

                p.divCal.set_taborder("17");
                p.divCal.set_text("Div00");
                p.divCal.set_flexgrow("1");
                p.divCal.set_formscrollbartype("none none");
                p.divCal.set_formscrolltype("none");
                p.divCal.move("1030","75","320","40",null,null);
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
            //-- Default Layout : this.divForm.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panGrdBtn.set_taborder("2");
                p.panGrdBtn.set_flexmainaxisalign("end");
                p.panGrdBtn.set_horizontalgap("10");
                p.panGrdBtn.set_flexwrap("wrap");
                p.panGrdBtn.set_fittocontents("height");
                p.panGrdBtn.set_verticalgap("8");
                p.panGrdBtn.move(null,"0","70%","34","0",null);

                p.Grid00.set_taborder("0");
                p.Grid00.set_binddataset("dsList");
                p.Grid00.getSetter("uFunction").set("checkbox");
                p.Grid00.set_autofittype("col");
                p.Grid00.move("0","panGrdBtn:44","100.00%",null,null,"0");

                p.staTotal.set_taborder("1");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","0","27","34",null,null);

                p.staTotal01.set_taborder("3");
                p.staTotal01.set_text("0");
                p.staTotal01.set_cssclass("sta_WF_Total");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.set_fittocontents("width");
                p.staTotal01.move("staTotal:0","0","43","34",null,null);

                p.staTotal02.set_taborder("4");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.move("staTotal01:0","0","30","34",null,null);
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
                p.divSch.move("50","85","100%","175",null,null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.set_fittocontents("height");
                p.divGrd.move("1452","385","100%","450",null,null);
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
                p.divGrd.set_fittocontents("height");
            	}
            );
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divPopBtn00.form
            obj = new Layout("default","",0,0,this.divPopBtn00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnAprv.set_taborder("1");
                p.btnAprv.set_text("승인");
                p.btnAprv.set_cssclass("btn_WF_Yes");
                p.btnAprv.move("457.00","30","100","40",null,null);

                p.btnRjct.set_taborder("1");
                p.btnRjct.set_text("반려");
                p.btnRjct.set_cssclass("btn_WF_Yes");
                p.btnRjct.move("457.00","30","100","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("20");
            this.divPopBtn00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divPopBtn00.form
            obj = new Layout("mobile","",0,0,this.divPopBtn00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("20");
            this.divPopBtn00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divPopBtn00.form
            obj = new Layout("mobile","",0,0,this.divPopBtn00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("20");
            this.divPopBtn00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,700,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("작업신고서 조회 및 작업공유 (승인자) ");

                p.divTitle.set_taborder("0");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.set_maxheight("");
                p.divTitle.move("0","0",null,"50","60",null);

                p.divForm.set_taborder("1");
                p.divForm.set_text("div00");
                p.divForm.set_fittocontents("height");
                p.divForm.move("0","60",null,null,"60","70");

                p.divPopBtn00.set_taborder("2");
                p.divPopBtn00.set_text("Div00");
                p.divPopBtn00.set_cssclass("div_WF_PopBtn");
                p.divPopBtn00.move("0","divForm:10",null,"60","60",null);
            	}
            );
            obj.set_verticalgap("20");
            obj.set_spacing("0px 60px 0px 0px");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,700,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divTitle.move("0","0",null,"50","0",null);

                p.divForm.set_fittocontents("none");
                p.divForm.move("0","50",null,null,"0","60");

                p.divPopBtn00.move("0",null,null,"60","0","0");
            	}
            );
            obj.set_type("default");
            obj.set_verticalgap("20");
            obj.set_spacing("0px 60px 0px 0px");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.divSch.form.divCal.form.calAplyStDt","value","dsSearch","aplyStDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.divSch.form.divCal.form.calAplyEdDt","value","dsSearch","aplyEdDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.divSch.form.cmbAplySeCd","value","dsSearch","aplySeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.divSch.form.edtAplyNo","value","dsSearch","aplyNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.divSch.form.cmbShrnAprvYn","value","dsSearch","shrnAprvYn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.addIncludeScript("CST006P10.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CST006P10.xfdl", function() {
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
        * 2024/11/20			박상희					최초생성
        *******************************************************************************
        */

        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;
        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.fvCurDate = this.gfnGetDate();
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        	this.divForm.form.divSch.set_width("100%");
        	this.divForm.form.divSch.fittocontents = "height";

        	//최초 진입 함수
        	this.fnInit();
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
        //조회
        this.fnSearch = function () {

        	var aplyNo = this.divForm.form.divSch.form.edtAplyNo.value;
        	this.dsSearch.setColumn(0, "aplyNo", aplyNo);

        	var strSvcId    = "search";
        	var strSvcUrl   = "cst/bfh/selectJobWtntShrn.do";
        	var inData      = "dsIn=dsSearch";
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

        //승인, 반려
        this.fnSave = function (AprvYn) {

        	for(let i=0; i < this.dsList.getRowCount(); i++) {

        		if(this.dsList.getColumn(i, "chk") == "1") {
        			//승인여부, 승인자ID, 승인일자 세팅
        			this.dsList.setColumn(i, "shrnAprvYn", AprvYn);
        			this.dsList.setColumn(i, "shrnAutzrId", this.objApp.gdsUser.getColumn(0, "userId"));
        			this.dsList.setColumn(i, "shrnAprvYmd", this.fvCurDate);
        			if(AprvYn == "Y") {
        				//승인일 때 공유시작일자 넣어줌
        				this.dsList.setColumn(i, "shrnBgngYmd", this.fvCurDate);
        			}
        		}
        	}

        	//메시지 DataSet 클리어
        	this.dsMsg.clearData();

        	var strSvcId    = "save" + AprvYn;
        	var strSvcUrl   = "cst/bfh/insertJobWtntShrn.do";
        	var inData      = "dsList=dsList:U";
        	var outData     = "dsMsg=dsMsg";
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
        //기본 Callback
        this.fnCallback = function(svcId, errCd, errMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errCd != 0) { return; }

        	switch(svcId) {
        		case "commonCodeSearch" :
        			break;

        		case "search" :
        			this.divForm.form.divGrd.form.staTotal01.text = this.dsList.getRowCount();
        			this.divForm.form.divGrd.form.resetScroll();
        			break;

        		case "saveY" :
        			if(this.gfnIsNull(this.dsMsg.getColumn(0, "msg"))) {
        				this.gfnAlertMsg("msgSaveY", "MSG_007", ["승인처리 되었습니다."]);
        				//승인 후 조회
        				this.fnSearch();

        			} else {
        				this.gfnAlertMsg("error1", "MSG_011", [this.dsMsg.getColumn(0, "msg")]);	// 오류메시지 전달
        			}
        			break;

        		case "saveN" :
        			if(this.gfnIsNull(this.dsMsg.getColumn(0, "msg"))) {
        				this.gfnAlertMsg("msgSaveN", "MSG_007", ["반려처리 되었습니다."]);
        				//반려 후 조회
        				this.fnSearch();

        			} else {
        				this.gfnAlertMsg("error2", "MSG_011", [this.dsMsg.getColumn(0, "msg")]);	// 오류메시지 전달
        			}
        			break;

        		default:
        			break;
        	}

        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        //최초 진입함수
        this.fnInit = function() {

        	//공통코드 함수 호출(연결Dataset : 공통코드명, A-전체 S-선택)
        	this.cfnComCdLoad({ id:"commonCodeSearch", cbf:"fnCallBack", dsComcodeList:"TSP:A" });

        	//작업구분 세팅
        	this.dsSearch.setColumn(0, "aplySeCd", "TSPWOR040");  //작업구분-TSPWOR040:작업신고서 기본세팅

        	//신청자정보 세팅(신청자ID가 같은 경우만 조회 가능) : 승인자 페이지(시설물 마스터 등록한 신청자)
        	this.dsSearch.setColumn(0, "aplcntId", this.objApp.gdsUser.getColumn(0, "userId"));

        	//공유신청일자 세팅
        	const date = new Date();
        	date.setDate(date.getDate() - 7);

        	const sYear = date.getFullYear().toString();
        	const sMonth = ((date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)).toString();
        	const sDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate().toString();
        	this.dsSearch.setColumn(0, "aplyStDt", sYear + sMonth + sDate);
        	this.dsSearch.setColumn(0, "aplyEdDt", this.fvCurDate);

        	//개인화정보
        	this.cfnSetGrdPrztInfo();
        };


        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        //조회버튼 클릭
        this.divForm_divSch_btnSch_onclick = function(obj,e)
        {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "aplyStDt"))) {
        		this.divForm.form.divSch.form.divCal.form.calAplyStDt.setFocus();
        		this.gfnAlertMsg("msg1", "MSG_009", ["공유신청 시작일"]); // {0} 을/를 입력해 주세요.
        		return false;
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "aplyEdDt"))) {
        		this.divForm.form.divSch.form.divCal.form.calAplyEdDt.setFocus();
        		this.gfnAlertMsg("msg2", "MSG_009", ["공유신청 종료일"]); // {0} 을/를 입력해 주세요.
        		return false;
        	}

        	if (this.dsSearch.getColumn(0, "aplyStDt") > this.dsSearch.getColumn(0, "aplyEdDt")) {
        		this.divForm.form.divSch.form.divCal.form.calAplyStDt.setFocus();
        		this.gfnAlertMsg("msg3", "MSG_012", ["공유신청"]); // {0} 시작일자가 종료일자보다 큽니다.
        		return false;
        	}

        	if (this.dsSearch.getColumn(0, "aplyEdDt") > this.fvCurDate) {
        		this.divForm.form.divSch.form.divCal.form.calAplyEdDt.setFocus();
        		this.gfnAlertMsg("msg4", "MSG_024", ["공유신청 종료일자는 오늘 날짜보다 \n클 수"]); // {0} 없습니다.
        		return false;
        	}

        	this.fnSearch();
        };

        //조회조건 Enter시
        this.Edit_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13) {
        		this.divForm_divSch_btnSch_onclick();
        	}
        };

        //승인버튼 클릭
        this.divPopBtn00_btnAprv_onclick = function(obj,e)
        {
        	if (this.dsList.findRow("chk", "1") == -1) {
        		this.gfnAlertMsg("msg5", "MSG_011", ["선택된 정보가 없습니다."]);
        		return;
        	}

        	for(let i=0; i < this.dsList.getRowCount(); i++) {

        		if(this.dsList.getColumn(i, "chk") == "1") {
        			//기존에 승인 또는 반려가 된 항목 선택한 경우
        			if(!this.gfnIsNull(this.dsList.getColumn(i, "shrnAprvYn"))) {
        				this.dsList.rowposition = i;
        				this.gfnAlertMsg("req1", "MSG_024", ["이미 승인 또는 반려처리된 항목입니다. \n승인할 수"]); // {0} 없습니다.
        				return false;
        			}

        			//시설물 작업종료일자보다 승인일자=공유시작일자가 이후일 수 없음
        			if(!this.gfnIsNull(this.dsList.getColumn(i, "endDt"))){
        				var endDt = this.dsList.getColumn(i, "endDt");
        				var replaceEndDt = endDt.substring(0, 4) + "" + endDt.substring(5, 7) + "" + endDt.substring(8, 10);

        				if (this.gfn_getDiffDate(replaceEndDt, this.fvCurDate) > 0) {
        					this.dsList.rowposition = i;
        					this.gfnAlertMsg("req2", "MSG_024", ["승인인자는 작업종료일자보다 \n클 수"]); // {0} 없습니다.
        					return false;
        				}
        			}
        		}
        	}

        	//승인 을(를) 하시겠습니까?
        	this.gfnConfirmMsg("confirmAprv", "CST_001", (sPopId, oRtnVal) => {
        		if (!JSON.parse(oRtnVal).result) return;
        		this.fnSave("Y");
        	}, null, null, null, ["승인"]);

        };

        //반려버튼 클릭
        this.divPopBtn00_btnRjct_onclick = function(obj,e)
        {
        	if (this.dsList.findRow("chk", "1") == -1) {
        		this.gfnAlertMsg("msg6", "MSG_011", ["선택된 정보가 없습니다."]);
        		return;
        	}

        	for(let i=0; i < this.dsList.getRowCount(); i++) {
        		//기존에 승인 또는 반려가 된 항목 선택한 경우
        		if(this.dsList.getColumn(i, "chk") == "1") {
        			//기존에 승인 또는 반려가 된 항목 선택한 경우
        			if(!this.gfnIsNull(this.dsList.getColumn(i, "shrnAprvYn"))) {
        				this.dsList.rowposition = i;
        				this.gfnAlertMsg("req3", "MSG_024", ["이미 승인 또는 반려처리된 항목입니다. \n반려할 수"]); // {0} 없습니다.
        				return false;
        			}
        		}
        	}

        	//반려 을(를) 하시겠습니까?
        	this.gfnConfirmMsg("confirmRjct", "CST_001", (sPopId, oRtnVal) => {
        		if (!JSON.parse(oRtnVal).result) return;
        		this.fnSave("N");
        	}, null, null, null, ["반려"]);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divSch.form.btnSch.addEventHandler("onclick",this.divForm_divSch_btnSch_onclick,this);
            this.divForm.form.divSch.form.edtAplyNo.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.divForm.form.divSch.form.divCal.form.calAplyStDt.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.divForm.form.divSch.form.divCal.form.calAplyEdDt.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.divPopBtn00.form.btnAprv.addEventHandler("onclick",this.divPopBtn00_btnAprv_onclick,this);
            this.divPopBtn00.form.btnRjct.addEventHandler("onclick",this.divPopBtn00_btnRjct_onclick,this);
        };
        this.loadIncludeScript("CST006P10.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
