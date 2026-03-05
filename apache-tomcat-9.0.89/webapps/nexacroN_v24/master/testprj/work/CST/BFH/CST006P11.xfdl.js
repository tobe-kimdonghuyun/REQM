(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST006P11");
            this.set_titletext("작업신고서 공유 신청");
            this.set_scrollbartype("none none");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,530);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsComcodeList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"shrnAplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplyYmd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplyYmd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"shrnAprvYn\" type=\"STRING\" size=\"256\"/><Column id=\"shrnAprvCd\" type=\"STRING\" size=\"256\"/><Column id=\"shrnBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"shrnEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"shrnAutzrId\" type=\"STRING\" size=\"256\"/><Column id=\"shrnAprvYmd\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntCoId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntCoNm\" type=\"STRING\" size=\"256\"/><Column id=\"userBrdt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMsg", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAprv", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">전체</Col></Row><Row><Col id=\"code\">S</Col><Col id=\"name\">신청중</Col></Row><Row><Col id=\"code\">Y</Col><Col id=\"name\">승인</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"name\">반려</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchVad", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCntList", this);
            obj._setContents("<ColumnInfo><Column id=\"cnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divPopBtn","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            obj.set_formscrollbartype("default default");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","457.00","30","100","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Yes");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Button("btnAplySch","457.00","30","120","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("0");
            obj.set_text("작업신청서 조회");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Div("divForm","0","0","100%",null,null,"60",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0","0","100%","434",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("신청자정보");
            obj.set_fittocontents("height");
            obj.set_cssclass("div_WF_Bg");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle","0","0","100.00%","50",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("0");
            obj.set_text("작업신고서 공유 등록");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("신청구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","20.00","242","305","86",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"cmbAplySeCd\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("pan02","0","242","100.00%","96",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmbAplySeCd","62","113","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("32");
            obj.set_innerdataset("dsComcodeList");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_readonly("true");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_01","970","270","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("4");
            obj.set_text("작업신청번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Edit("edtJobAplcfmNo","970","315","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("5");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel02_01","970.00","270","305","86",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtJobAplcfmNo\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("7");
            obj.set_text("공유신청자 회사명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Edit("edtShrnCoNm","20.00","288","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("pan_04_00","20.00","242","305","86",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtShrnCoNm\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00","970","270","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("10");
            obj.set_text("공유신청자 성명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Edit("edtAplcntNm","970","315","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("pan04_01","970.00","270","305","86",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAplcntNm\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("pan03","0","242","100.00%","96",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("13");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan04_01\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("14");
            obj.set_text("공유신청자 생년월일");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("pan_04_00_00_00","20.00","242","305","86",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"calAplcntBrdt\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_01_00","970","270","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("16");
            obj.set_text("공유신청자 휴대전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Edit("edtMblTelno","970","315","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("17");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00_00","970.00","270","305","86",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("18");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtMblTelno\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("pan07","0","242","100.00%","96",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("19");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan04_01_00_00\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Calendar("calAplcntBrdt","101","397","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("20");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("true");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("21");
            obj.set_text("공유신청 승인여부");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("pan_04_00_00_00_00","20.00","242","305","86",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("22");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"cmbAprvYn\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00_00_00","970.00","270","305","86",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("23");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("pan07_00","0","242","100.00%","96",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("24");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan04_01_00_00_00\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("25");
            obj.set_text("공유 시작일자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Calendar("calShrnBgngYmd","101","397","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("26");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("pan_04_00_00_00_01","20.00","242","305","86",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("27");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"calShrnBgngYmd\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_01_00_01","970","270","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("28");
            obj.set_text("공유 종료일자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00_00_01","970.00","270","305","86",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("29");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_01_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"calShrnEndYmd\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("pan07_01","0","242","100.00%","96",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("30");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00_00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan04_01_00_00_01\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmbAprvYn","48","404","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("33");
            obj.set_innerdataset("dsAprv");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_readonly("true");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Calendar("calShrnEndYmd","101","397","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("31");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divPopBtn.form
            obj = new Layout("default","",0,0,this.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnSave.set_taborder("1");
                p.btnSave.set_text("저장");
                p.btnSave.set_cssclass("btn_WF_Yes");
                p.btnSave.move("457.00","30","100","40",null,null);

                p.btnAplySch.set_taborder("0");
                p.btnAplySch.set_text("작업신청서 조회");
                p.btnAplySch.move("457.00","30","120","40",null,null);
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
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("20");
            this.divPopBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.div00.form
            obj = new Layout("default","",0,0,this.divForm.form.div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staSubTitle.set_taborder("0");
                p.staSubTitle.set_text("작업신고서 공유 등록");
                p.staSubTitle.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle.move("0","0","100.00%","50",null,null);

                p.staLabel03_00.set_taborder("1");
                p.staLabel03_00.set_text("신청구분");
                p.staLabel03_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00.move("10","98","100%","46",null,null);

                p.Panel02_00.set_taborder("2");
                p.Panel02_00.set_type("vertical");
                p.Panel02_00.set_flexgrow("1");
                p.Panel02_00.move("20.00","242","305","86",null,null);

                p.pan02.set_taborder("3");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","242","100.00%","96",null,null);

                p.cmbAplySeCd.set_taborder("32");
                p.cmbAplySeCd.set_innerdataset("dsComcodeList");
                p.cmbAplySeCd.set_codecolumn("cdId");
                p.cmbAplySeCd.set_datacolumn("cdNm");
                p.cmbAplySeCd.set_readonly("true");
                p.cmbAplySeCd.set_value("");
                p.cmbAplySeCd.set_index("-1");
                p.cmbAplySeCd.move("62","113","100%","40",null,null);

                p.staLabel03_01.set_taborder("4");
                p.staLabel03_01.set_text("작업신청번호");
                p.staLabel03_01.set_cssclass("sta_WF_Label_E");
                p.staLabel03_01.move("970","270","100%","46",null,null);

                p.edtJobAplcfmNo.set_taborder("5");
                p.edtJobAplcfmNo.set_readonly("false");
                p.edtJobAplcfmNo.move("970","315","100%","40",null,null);

                p.Panel02_01.set_taborder("6");
                p.Panel02_01.set_type("vertical");
                p.Panel02_01.set_flexgrow("1");
                p.Panel02_01.move("970.00","270","305","86",null,null);

                p.staLabel03_00_00.set_taborder("7");
                p.staLabel03_00_00.set_text("공유신청자 회사명");
                p.staLabel03_00_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00_00.move("10","98","100%","46",null,null);

                p.edtShrnCoNm.set_taborder("8");
                p.edtShrnCoNm.set_readonly("true");
                p.edtShrnCoNm.move("20.00","288","100%","40",null,null);

                p.pan_04_00.set_taborder("9");
                p.pan_04_00.set_type("vertical");
                p.pan_04_00.set_flexgrow("1");
                p.pan_04_00.move("20.00","242","305","86",null,null);

                p.staLabel03_01_00.set_taborder("10");
                p.staLabel03_01_00.set_text("공유신청자 성명");
                p.staLabel03_01_00.set_cssclass("sta_WF_Label");
                p.staLabel03_01_00.move("970","270","100%","46",null,null);

                p.edtAplcntNm.set_taborder("11");
                p.edtAplcntNm.set_readonly("true");
                p.edtAplcntNm.move("970","315","100%","40",null,null);

                p.pan04_01.set_taborder("12");
                p.pan04_01.set_type("vertical");
                p.pan04_01.set_flexgrow("1");
                p.pan04_01.move("970.00","270","305","86",null,null);

                p.pan03.set_taborder("13");
                p.pan03.set_horizontalgap("20");
                p.pan03.set_flexcrossaxiswrapalign("start");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_fittocontents("height");
                p.pan03.set_verticalgap("0");
                p.pan03.set_spacing("0px 20px 10px 20px");
                p.pan03.set_cssclass("pal_WF_DtlBg");
                p.pan03.move("0","242","100.00%","96",null,null);

                p.staLabel03_00_00_01_00.set_taborder("14");
                p.staLabel03_00_00_01_00.set_text("공유신청자 생년월일");
                p.staLabel03_00_00_01_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00_00_01_00.move("10","98","100%","46",null,null);

                p.pan_04_00_00_00.set_taborder("15");
                p.pan_04_00_00_00.set_type("vertical");
                p.pan_04_00_00_00.set_flexgrow("1");
                p.pan_04_00_00_00.move("20.00","242","305","86",null,null);

                p.staLabel03_01_00_01_00.set_taborder("16");
                p.staLabel03_01_00_01_00.set_text("공유신청자 휴대전화번호");
                p.staLabel03_01_00_01_00.set_cssclass("sta_WF_Label");
                p.staLabel03_01_00_01_00.move("970","270","100%","46",null,null);

                p.edtMblTelno.set_taborder("17");
                p.edtMblTelno.set_readonly("true");
                p.edtMblTelno.move("970","315","100%","40",null,null);

                p.pan04_01_00_00.set_taborder("18");
                p.pan04_01_00_00.set_type("vertical");
                p.pan04_01_00_00.set_flexgrow("1");
                p.pan04_01_00_00.move("970.00","270","305","86",null,null);

                p.pan07.set_taborder("19");
                p.pan07.set_horizontalgap("20");
                p.pan07.set_flexcrossaxiswrapalign("start");
                p.pan07.set_flexwrap("wrap");
                p.pan07.set_fittocontents("height");
                p.pan07.set_verticalgap("0");
                p.pan07.set_spacing("0px 20px 10px 20px");
                p.pan07.set_cssclass("pal_WF_DtlBg");
                p.pan07.move("0","242","100.00%","96",null,null);

                p.calAplcntBrdt.set_taborder("20");
                p.calAplcntBrdt.set_dateformat("yyyy-MM-dd");
                p.calAplcntBrdt.set_readonly("true");
                p.calAplcntBrdt.move("101","397","100%","40",null,null);

                p.staLabel03_00_00_01_00_00.set_taborder("21");
                p.staLabel03_00_00_01_00_00.set_text("공유신청 승인여부");
                p.staLabel03_00_00_01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00_00_01_00_00.move("10","98","100%","46",null,null);

                p.pan_04_00_00_00_00.set_taborder("22");
                p.pan_04_00_00_00_00.set_type("vertical");
                p.pan_04_00_00_00_00.set_flexgrow("1");
                p.pan_04_00_00_00_00.move("20.00","242","305","86",null,null);

                p.pan04_01_00_00_00.set_taborder("23");
                p.pan04_01_00_00_00.set_type("vertical");
                p.pan04_01_00_00_00.set_flexgrow("1");
                p.pan04_01_00_00_00.move("970.00","270","305","86",null,null);

                p.pan07_00.set_taborder("24");
                p.pan07_00.set_horizontalgap("20");
                p.pan07_00.set_flexcrossaxiswrapalign("start");
                p.pan07_00.set_flexwrap("wrap");
                p.pan07_00.set_fittocontents("height");
                p.pan07_00.set_verticalgap("0");
                p.pan07_00.set_spacing("0px 20px 10px 20px");
                p.pan07_00.set_cssclass("pal_WF_DtlBg");
                p.pan07_00.move("0","242","100.00%","96",null,null);

                p.staLabel03_00_00_01_00_01.set_taborder("25");
                p.staLabel03_00_00_01_00_01.set_text("공유 시작일자");
                p.staLabel03_00_00_01_00_01.set_cssclass("sta_WF_Label");
                p.staLabel03_00_00_01_00_01.move("10","98","100%","46",null,null);

                p.calShrnBgngYmd.set_taborder("26");
                p.calShrnBgngYmd.set_dateformat("yyyy-MM-dd");
                p.calShrnBgngYmd.move("101","397","100%","40",null,null);

                p.pan_04_00_00_00_01.set_taborder("27");
                p.pan_04_00_00_00_01.set_type("vertical");
                p.pan_04_00_00_00_01.set_flexgrow("1");
                p.pan_04_00_00_00_01.move("20.00","242","305","86",null,null);

                p.staLabel03_01_00_01_00_01.set_taborder("28");
                p.staLabel03_01_00_01_00_01.set_text("공유 종료일자");
                p.staLabel03_01_00_01_00_01.set_cssclass("sta_WF_Label");
                p.staLabel03_01_00_01_00_01.move("970","270","100%","46",null,null);

                p.pan04_01_00_00_01.set_taborder("29");
                p.pan04_01_00_00_01.set_type("vertical");
                p.pan04_01_00_00_01.set_flexgrow("1");
                p.pan04_01_00_00_01.move("970.00","270","305","86",null,null);

                p.pan07_01.set_taborder("30");
                p.pan07_01.set_horizontalgap("20");
                p.pan07_01.set_flexcrossaxiswrapalign("start");
                p.pan07_01.set_flexwrap("wrap");
                p.pan07_01.set_fittocontents("height");
                p.pan07_01.set_verticalgap("0");
                p.pan07_01.set_spacing("0px 20px 10px 20px");
                p.pan07_01.set_cssclass("pal_WF_DtlBg");
                p.pan07_01.set_visible("true");
                p.pan07_01.move("0","242","100.00%","96",null,null);

                p.cmbAprvYn.set_taborder("33");
                p.cmbAprvYn.set_innerdataset("dsAprv");
                p.cmbAprvYn.set_codecolumn("code");
                p.cmbAprvYn.set_datacolumn("name");
                p.cmbAprvYn.set_readonly("true");
                p.cmbAprvYn.set_value("");
                p.cmbAprvYn.set_index("-1");
                p.cmbAprvYn.move("48","404","100%","40",null,null);

                p.calShrnEndYmd.set_taborder("31");
                p.calShrnEndYmd.set_dateformat("yyyy-MM-dd");
                p.calShrnEndYmd.move("101","397","100%","40",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexwrap("wrap");
            this.divForm.form.div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.div00.form
            obj = new Layout("mobile","",0,0,this.divForm.form.div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexwrap("wrap");
            this.divForm.form.div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.div00.set_taborder("0");
                p.div00.set_text("신청자정보");
                p.div00.set_fittocontents("height");
                p.div00.set_cssclass("div_WF_Bg");
                p.div00.move("0","0","100%","434",null,null);
            	}
            );
            obj.set_verticalgap("20");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_spacing("10px 20px 10px 20px");
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
            obj.set_verticalgap("20");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_spacing("10px 20px 10px 20px");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",800,530,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("작업신고서 공유 신청");
                p.set_scrollbartype("none none");
                p.set_scrolltype("none");

                p.divPopBtn.set_taborder("1");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.set_formscrollbartype("default default");
                p.divPopBtn.move("0",null,null,"60","0","0");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.move("0","0","100%",null,null,"60");
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,530,this,
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
            obj = new BindItem("item0","divForm.form.div00.form.cmbAplySeCd","value","dsList","aplySeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.div00.form.edtJobAplcfmNo","value","dsList","aplyNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.div00.form.edtShrnCoNm","value","dsList","aplcntCoNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.div00.form.edtAplcntNm","value","dsList","aplcntNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.div00.form.calAplcntBrdt","value","dsList","userBrdt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.div00.form.edtMblTelno","value","dsList","mblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.div00.form.cmbAprvYn","value","dsList","shrnAprvCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.div00.form.calShrnBgngYmd","value","dsList","shrnBgngYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.div00.form.calShrnEndYmd","value","dsList","shrnEndYmd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CST006P11.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CST006P11.xfdl", function() {
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
        * 2024/11/18			박상희					최초생성
        *******************************************************************************
        */

        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;
        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.fvCurDate = this.gfnGetDate();

        const coId = this.objApp.gdsUser.getColumn(0, "coId");
        const coNm = this.objApp.gdsUser.getColumn(0, "coNm");
        const userId = this.objApp.gdsUser.getColumn(0, "userId");
        const userNm = this.objApp.gdsUser.getColumn(0, "userNm");
        const userMblTelno = "01012345678";  //this.objApp.gdsUser.getColumn(0, "userMblTelno");  //암복호화 이슈로 제대로 값을 가져오지 못 함
        const userBrdt = "19800101";  //this.objApp.gdsUser.getColumn(0, "userBrdt");  //생년월일 세션에 없어서 undefined

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	//하단 버튼영역
        	this.divPopBtn.set_bottom("0");
        	this.divPopBtn.set_height("80");

        	//진입 함수
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
        //신청번호 유효성 확인
        this.fnVadSearch = function (sAplyNo) {
        	//유효성 조회용
        	this.dsSearchVad.clearData();
        	this.dsSearchVad.addRow();

        	this.dsSearchVad.setColumn(0, "aplyNo", sAplyNo);

        	var strSvcId    = "vadSearch";
        	var strSvcUrl   = "cst/bfh/selectJobWtntShrnMstVad.do";
        	var inData      = "dsIn=dsSearchVad";
        	var outData     = "dsCntList=dsCntList";
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
        }

        //조회
        this.fnSearch = function (sAplyNo, sAplySeCd, sAplcntId, sAplyYmd) {
        	this.dsSearch.clearData();
        	this.dsSearch.addRow();

        	//파라미터 정보로 세팅
        	this.dsSearch.setColumn(0, "aplyNo", sAplyNo);
        	this.dsSearch.setColumn(0, "aplySeCd", sAplySeCd);
        	this.dsSearch.setColumn(0, "shrnAplcntId", sAplcntId);  //공유등록자ID
        	this.dsSearch.setColumn(0, "aplyYmd", sAplyYmd);

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

        //저장
        this.fnSave = function () {
        	//메시지 DataSet 클리어
        	this.dsMsg.clearData();

        	var strSvcId    = "save";
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

        		case "vadSearch" :
        			//마스터 테이블에 존재하지 않는 신청번호로 등록하려면 오류처리
        			if(this.dsCntList.getRowCount() == 0) {
        				//공유 시작일자, 종료일자, 하단 버튼 visible 설정
        				this.divForm.form.div00.form.pan07_01.visible = false;
        				this.divPopBtn.form.btnAplySch.visible = false;
        				this.divForm.form.resetScroll();

        				this.divPopBtn.form.btnSave.enable = false;

        				this.gfnAlertMsg("error", "MSG_007", ["유효하지 않은 작업신청번호입니다.\n신청번호를 확인해주세요."]);
        			} else {
        				//조회 진행
        				//작업신청번호, 신청구분, 유저정보
        				this.fnSearch(this.divForm.form.div00.form.edtJobAplcfmNo.value, this.divForm.form.div00.form.cmbAplySeCd.value, userId, null);
        			}

        			break;
        		case "search" :

        			//조회 결과가 없으면 등록 상태로
        			if(this.dsList.getRowCount() == 0) {
        				this.divForm.form.div00.form.staSubTitle.text = "작업신고서 공유 등록";

        				//기본정보 세팅
        				this.dsList.clearData();
        				this.dsList.addRow();
        				this.dsList.setColumn(0, "aplcntId", userId);
        				this.dsList.setColumn(0, "aplyYmd", this.fvCurDate);
        				this.dsList.setColumn(0, "aplcntNm", userNm);
        				this.dsList.setColumn(0, "mblTelno", userMblTelno);
        				this.dsList.setColumn(0, "userBrdt", userBrdt);
        				this.dsList.setColumn(0, "aplcntCoId", coId);
        				this.dsList.setColumn(0, "aplcntCoNm", coNm);
        				this.dsList.setColumn(0, "shrnAprvCd", "S");  //S:신청중
        				this.dsList.setColumn(0, "aplySeCd", "");  //신청구분
        				this.dsList.setColumn(0, "aplyNo", this.dsSearch.getColumn(0, "aplyNo"));  //작업신청번호
        				this.dsList.setColumn(0, "aplySeCd", this.dsSearch.getColumn(0, "aplySeCd"));  //신청구분

        				//공유 시작일자, 종료일자, 하단 버튼 visible 설정
        				this.divForm.form.div00.form.pan07_01.visible = false;
        				this.divPopBtn.form.btnAplySch.visible = false;
        				this.divForm.form.resetScroll();

        				//저장버튼 활성화
        				this.divPopBtn.form.btnSave.enable = true;

        				return;
        			} else {
        				//조회 결과가 존재할 경우 수정 상태로
        				this.divForm.form.div00.form.staSubTitle.text = "작업신고서 공유 수정";

        				//신청구분, 작업신청번호 변경 불가
        				//this.divForm.form.div00.form.cmbAplySeCd.readonly = true;
        				//this.divForm.form.div00.form.edtJobAplcfmNo.readonly = true;

        				if(this.dsList.getColumn(0, "shrnAprvYn") == "Y") {
        					//승인 상태일 때 공유 시작일자, 종료일자, 하단 버튼 visible 설정
        					this.divForm.form.div00.form.pan07_01.visible = true;
        					this.divPopBtn.form.btnAplySch.visible = true;
        					this.divForm.form.resetScroll();
        				} else {
        					//공유 시작일자, 종료일자, 하단 버튼 visible 설정
        					this.divForm.form.div00.form.pan07_01.visible = false;
        					this.divPopBtn.form.btnAplySch.visible = false;
        					this.divForm.form.resetScroll();
        				}

        				//저장버튼 비활성화
        				this.divPopBtn.form.btnSave.enable = false;

        				return;

        			}

        			break;

        		case "save" :
        			if(this.gfnIsNull(this.dsMsg.getColumn(0, "msg"))) {
        				this.gfnAlertMsg("msg1", "MSG_001"); // 등록되었습니다.
        				//등록 후 조회
        				this.divForm.form.div00.form.staSubTitle.text = "작업신고서 공유 수정";
        				this.fnSearch(this.dsList.getColumn(0, "aplyNo"), this.dsList.getColumn(0, "aplySeCd"), this.dsList.getColumn(0, "aplcntId"), this.dsList.getColumn(0, "aplyYmd"));

        				//만약 등록 후 팝업 닫는다면 아래 내용으로 변경
        				//this.gfnClosePopup();
        			} else {
        				this.gfnAlertMsg("error", "MSG_011", [this.dsMsg.getColumn(0, "msg")]);	// 오류메시지 전달
        			}

        			break;

        		default:
        			break;
        	}

        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        //진입 함수
        this.fnInit = function() {

        	//공통코드 함수 호출(연결Dataset : 공통코드명, A-전체 S-선택)
        	this.cfnComCdLoad({ id:"commonCodeSearch", cbf:"fnCallBack", dsComcodeList:"TSP:S" });

        	//trace("세션정보 1. coId = " + coId + ", 2. coNm = " + coNm + ", 3. userId = " + userId + ", 4. userNm = " + userNm + ", 5. userMblTelno = " + userMblTelno +", 6. userBrdt = " + userBrdt);

        	//기본정보 세팅
        	this.dsList.clearData();
        	this.dsList.addRow();
        	this.dsList.setColumn(0, "aplcntId", userId);
        	this.dsList.setColumn(0, "aplyYmd", this.fvCurDate);
        	this.dsList.setColumn(0, "aplcntNm", userNm);
        	this.dsList.setColumn(0, "mblTelno", userMblTelno);
        	this.dsList.setColumn(0, "userBrdt", userBrdt);
        	this.dsList.setColumn(0, "aplcntCoId", coId);
        	this.dsList.setColumn(0, "aplcntCoNm", coNm);
        	this.dsList.setColumn(0, "shrnAprvCd", "S");  //S:신청중
        	this.dsList.setColumn(0, "aplySeCd", "TSPWOR040");  //신청구분-TSPWOR040:작업신고서 기본세팅

        	//저장버튼 비활성화
        	this.divPopBtn.form.btnSave.enable = false;
        	this.divForm.form.div00.form.cmbAplySeCd.setFocus();

        	//공유 시작일자, 종료일자, 하단 버튼 visible 설정
        	this.divForm.form.div00.form.pan07_01.visible = false;
        	this.divPopBtn.form.btnAplySch.visible = false;
        	this.divForm.form.resetScroll();
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        //신청구분 아이템 변경
        this.divForm_div00_cmbAplySeCd_onitemchanged = function(obj,e)
        {
        	//신청구분 "선택"이라면 조회 안 함
        	if(this.gfnIsNull(e.postvalue)) {
        		return;
        	}

        	//신청구분, 작업신청번호가 모두 입력된 경우에만 조회
        	if(!this.gfnIsNull(e.postvalue) && !this.gfnIsNull(this.divForm.form.div00.form.edtJobAplcfmNo.value)) {
        		//작업신청번호, 신청구분, 유저정보
        		//this.fnSearch(this.divForm.form.div00.form.edtJobAplcfmNo.value, e.postvalue, userId, null);

        		//조회말고 유효성 체크
        		this.fnVadSearch(this.divForm.form.div00.form.edtJobAplcfmNo.value);
        	}

        };

        //작업신청번호 엔터키 입력
        this.divForm_div00_edtJobAplcfmNo_onkeydown = function(obj,e)
        {
        	//엔터키 입력한 경우
        	if(e.keycode == 13) {
        		if(!this.gfnIsNull(this.divForm.form.div00.form.cmbAplySeCd.value) && !this.gfnIsNull(this.divForm.form.div00.form.edtJobAplcfmNo.value)) {
        			//작업신청번호, 신청구분, 유저정보
        			//this.fnSearch(this.divForm.form.div00.form.edtJobAplcfmNo.value, this.divForm.form.div00.form.cmbAplySeCd.value, userId, null);

        			//조회말고 유효성 체크
        			this.fnVadSearch(this.divForm.form.div00.form.edtJobAplcfmNo.value);
        		}
        	}

        };

        //저장 버튼
        this.divPopBtn_btnSave_onclick = function(obj,e)
        {
        	if (!this.gfnDsIsUpdated(this.dsList)) {
        		this.gfnAlertMsg("msg2", "MSG_004");	// 변경된 내역이 없습니다.
        		return;
        	}

        	if (this.gfnIsNull(this.dsList.getColumn(0, "aplySeCd"))) {
        		this.divForm.form.div00.form.cmbAplySeCd.setFocus();
        		this.gfnAlertMsg("req1", "MSG_022", ["신청구분"]);  //{0} 을/를 선택해주세요.
        		return;
        	}

        	if (this.gfnIsNull(this.dsList.getColumn(0, "aplyNo"))) {
        		this.divForm.form.div00.form.edtJobAplcfmNo.setFocus();
        		this.gfnAlertMsg("req2", "CST_004", ["작업신청번호"]);  //{0}는(은) 필수 항목입니다!
        		return;
        	}

        	//날짜비교 화면단 추가
        	if(!this.gfnIsNull(this.dsList.getColumn(0, "endDt")) && !this.gfnIsNull(this.dsList.getColumn(0, "shrnBgngYmd"))) {
        		const endDt = this.dsList.getColumn(0, "endDt");
        		const replaceEndDt = endDt.substring(0, 4) + "" + endDt.substring(5, 7) + "" + endDt.substring(8, 10);
        		const sYmd = this.dsList.getColumn(0, "shrnBgngYmd");

        		if (this.gfn_getDiffDate(replaceEndDt, sYmd) > 0) {
        			this.divForm.form.div00.form.calShrnBgngYmd.setFocus();
        			this.gfnAlertMsg("req3", "MSG_024", ["공유시작일자는 작업종료일자보다 \n클 수"]); // {0} 없습니다.
        			return false;
        		}
        	}

        	//공유종료일자는 없을 수 있어서 값이 있는 경우만 날짜비교
        	if(!this.gfnIsNull(this.dsList.getColumn(0, "shrnEndYmd"))) {
        		if (this.dsList.getColumn(0, "shrnBgngYmd") > this.dsList.getColumn(0, "shrnEndYmd")) {
        			this.divForm.form.div00.form.calShrnBgngYmd.setFocus();
        			this.gfnAlertMsg("req4", "MSG_024", ["공유시작일자는 공유종료일자보다 \n클 수"]); // {0} 없습니다.
        			return false;
        		}
        	}

        	//저장하시겠습니까?
        	this.gfnConfirmMsg("confirmSave", "MSG_003", (sPopId, oRtnVal) => {
        		if (!JSON.parse(oRtnVal).result) return;
        		this.fnSave();
        	});
        };

        //작업신청서 조회 버튼
        this.divPopBtn_btnAplySch_onclick = function(obj,e)
        {
        	//팝업 연결
        	const sTitle = "작업신고서 조회";
        	const objOption = {
        		  popuptype: "modal"	//modal,modaless
        		//, width: 1050
        		//, height: 850
        		, autosize: false
        		, title: sTitle
        		, resize: false
        		, titlebar: true
        	};

        	//작업신고서 조회 신청자 팝업으로 연결-다른 팝업일 경우 해당팝업 경로로 연결
        	this.gfnOpenPopup("aplySch", "work::CST/BFH/CST006P10_01.xfdl", {}, (sPopId, sJsonStr) => {

        		if (this.gfnIsNull(sJsonStr)) return false;
        		const oJson = JSON.parse(sJsonStr);


        	}, objOption);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divPopBtn.form.btnSave.addEventHandler("onclick",this.divPopBtn_btnSave_onclick,this);
            this.divPopBtn.form.btnAplySch.addEventHandler("onclick",this.divPopBtn_btnAplySch_onclick,this);
            this.divForm.form.div00.form.cmbAplySeCd.addEventHandler("onitemchanged",this.divForm_div00_cmbAplySeCd_onitemchanged,this);
            this.divForm.form.div00.form.edtJobAplcfmNo.addEventHandler("onkeydown",this.divForm_div00_edtJobAplcfmNo_onkeydown,this);
        };
        this.loadIncludeScript("CST006P11.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
