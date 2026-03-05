(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("REN006M04");
            this.set_titletext("현장확인일정 변경요청");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,2000);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"hireLohNo\" type=\"STRING\" size=\"256\"/><Column id=\"rcptNo\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyClsfNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstnNm\" type=\"STRING\" size=\"256\"/><Column id=\"bldgNm\" type=\"STRING\" size=\"256\"/><Column id=\"rntar\" type=\"STRING\" size=\"256\"/><Column id=\"vstHpeYmd\" type=\"STRING\" size=\"256\"/><Column id=\"vstrNm\" type=\"STRING\" size=\"256\"/><Column id=\"sptIdntyYmd\" type=\"STRING\" size=\"256\"/><Column id=\"dtlUsgNm\" type=\"STRING\" size=\"256\"/><Column id=\"sptIdntyCd\" type=\"STRING\" size=\"256\"/><Column id=\"sptIdntyNm\" type=\"STRING\" size=\"256\"/><Column id=\"prgrsSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrsSttsNm\" type=\"STRING\" size=\"256\"/><Column id=\"ldrNeedYnNm\" type=\"STRING\" size=\"256\"/><Column id=\"sptIdntyPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntGdMttr\" type=\"STRING\" size=\"256\"/><Column id=\"vstrTelno\" type=\"STRING\" size=\"256\"/><Column id=\"schdlChgRsn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"hireLohNo\" type=\"STRING\" size=\"256\"/><Column id=\"polSpceId\" type=\"STRING\" size=\"256\"/><Column id=\"prgrsSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"pstnNm\" type=\"STRING\" size=\"256\"/><Column id=\"bldgNm\" type=\"STRING\" size=\"256\"/><Column id=\"rmnmNo\" type=\"STRING\" size=\"256\"/><Column id=\"rntar\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"hireLohNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"hireLohNo\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","60",null,"1254","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","136.00","100","100.00%","96",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panBzentyNm\"/><PanelItem id=\"PanelItem02\" componentid=\"panRcptNo\"/><PanelItem id=\"PanelItem03\" componentid=\"panPrgsSttsNm\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staBzentyNm","46.00","46","100%","46",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panBzentyNm","46.00","46","360","86",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_flexgrow("1");
            obj.set_type("vertical");
            obj.set_flexwrap("nowrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staBzentyNm\"/><PanelItem id=\"PanelItem01\" componentid=\"edtBzentyNm\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Edit("edtBzentyNm","46.00","90","100%","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            obj.set_text("");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staRcptNo","396.00","70","100%","46",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_text("접수번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.addChild(obj.name, obj);

            obj = new Edit("edtRcptNo","396.00","114","100%","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            obj.set_text("");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panRcptNo","396.00","70","360","86",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_flexwrap("nowrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRcptNo\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRcptNo\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panList","0","776","100.00%","214",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("8");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("20");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grdList\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Grid("grdList","0","140","100%","203",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("7");
            obj.set_binddataset("dsList");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"400\"/><Column size=\"400\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"291\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"위치\"/><Cell col=\"1\" text=\"건물명\"/><Cell col=\"2\" text=\"호실번호\"/><Cell col=\"3\" text=\"면적(m2)\" cssclass=\"CellEnd\"/><Cell col=\"4\"/></Band><Band id=\"body\"><Cell text=\"bind:pstnNm\" displaytype=\"normal\" edittype=\"text\" textAlign=\"left\" cssclass=\"CellReadonly\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"text\" textAlign=\"left\" cssclass=\"CellReadonly\" text=\"bind:bldgNm\"/><Cell col=\"2\" text=\"bind:rmnmNo\" displaytype=\"normal\" edittype=\"text\" textAlign=\"center\" cssclass=\"CellReadonly\"/><Cell col=\"3\" text=\"bind:rntar\" displaytype=\"normal\" edittype=\"text\" textAlign=\"center\" cssclass=\"CellReadonly CellEnd\"/><Cell col=\"4\"/></Band></Format></Formats>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staVstrNm","46.00","46","100%","46",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("9");
            obj.set_text("방문자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.addChild(obj.name, obj);

            obj = new Edit("edtVstrNm","46.00","90","100%","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            obj.set_text("");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel02_1","46.00","46","255","86",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("11");
            obj.set_flexgrow("1");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staVstrNm\"/><PanelItem id=\"PanelItem01\" componentid=\"edtVstrNm\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staVstrTelno","396.00","70","100%","46",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("12");
            obj.set_text("방문자 휴대폰");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.addChild(obj.name, obj);

            obj = new Edit("edtVstrTelno","396.00","114","100%","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            obj.set_text("");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel02_2","396.00","70","255","86",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("14");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staVstrTelno\"/><PanelItem id=\"PanelItem01\" componentid=\"edtVstrTelno\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel02","136.00","100","100.00%","96",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("15");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"Panel02_2_00\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel02_2_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel02_3\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel02_1\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_2\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staVstHpeYmd","396.00","70","100%","46",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("16");
            obj.set_text("방문희망일자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.addChild(obj.name, obj);

            obj = new MaskEdit("edtVstHpeYmd","396.00","114","100%","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("17");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_format("####-##-##");
            obj.set_type("string");
            obj.set_value("20241024");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel02_3","396.00","70","255","86",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("18");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staVstHpeYmd\"/><PanelItem id=\"PanelItem01\" componentid=\"edtVstHpeYmd\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSptIdntyNm","396.00","70","100%","46",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("19");
            obj.set_text("확인구분");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.addChild(obj.name, obj);

            obj = new Edit("edtSptIdntyNm","396.00","114","100%","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("20");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            obj.set_text("");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel02_2_00","396.00","70","255","86",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("21");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSptIdntyNm\"/><PanelItem id=\"PanelItem01\" componentid=\"edtSptIdntyNm\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLdrNeedYn","396.00","70","100%","46",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("22");
            obj.set_text("인솔자 필요여부");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.addChild(obj.name, obj);

            obj = new Edit("edtLdrNeedYn","396.00","114","100%","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("23");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            obj.set_text("");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel02_2_01","396.00","70","255","86",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("24");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLdrNeedYn\"/><PanelItem id=\"PanelItem01\" componentid=\"edtLdrNeedYn\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSptIdntyYmd","396.00","70","100%","46",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("25");
            obj.set_text("현장확인일자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panSptIdntyYmd","396.00","70","360","86",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("26");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSptIdntyYmd\"/><PanelItem id=\"PanelItem01\" componentid=\"edtSptIdntyYmd\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSptIdntyDtrNm","396.00","70","100%","46",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("27");
            obj.set_text("현장확인담당자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel02_2_01_00","396.00","70","360","86",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("28");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSptIdntyDtrNm\"/><PanelItem id=\"PanelItem02\" componentid=\"edtSptIdntyDtrNm\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","136.00","100","100.00%","96",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("29");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_horizontalgap("20");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"panSptIdntyYmd\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel02_2_01_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staAplcntGdMttr","396.00","70","100%","46",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("30");
            obj.set_text("신청자 안내사항");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panAplcntGdMttr","396.00","70","1380","196",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("31");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staAplcntGdMttr\"/><PanelItem id=\"PanelItem02\" componentid=\"txtAplcntGdMttr\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00","136.00","100","100.00%","196",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("32");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"panAplcntGdMttr\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00","136.00","100","100.00%","196",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("43");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"panSchdlChgRsn\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new TextArea("txtAplcntGdMttr","171","111","100%","150",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("33");
            obj.set_readonly("true");
            obj.set_displaynulltext("내용 입력");
            obj.set_visible("true");
            obj.set_textAlign("left");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divPopBtn","275","1048","100.00%","60",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("34");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnCancel","200.00","365","100","40",null,null,null,null,null,null,this.divForm.form.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_No");
            this.divForm.form.divPopBtn.addChild(obj.name, obj);

            obj = new Button("btnSave","457.00","30","100","40",null,null,null,null,null,null,this.divForm.form.divPopBtn.form);
            obj.set_taborder("0");
            obj.set_text("변경요청");
            obj.set_cssclass("btn_WF_Yes");
            this.divForm.form.divPopBtn.addChild(obj.name, obj);

            obj = new Static("staPrgsSttsNm","396.00","70","100%","46",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("35");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.addChild(obj.name, obj);

            obj = new Edit("edtPrgsSttsNm","396.00","114","100%","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("36");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            obj.set_text("");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panPrgsSttsNm","396.00","70","360","86",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("37");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_flexwrap("nowrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPrgsSttsNm\"/><PanelItem id=\"PanelItem01\" componentid=\"edtPrgsSttsNm\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new MaskEdit("edtSptIdntyYmd","396.00","114","100%","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("38");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_format("####-##-##");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_value("20241024");
            this.divForm.addChild(obj.name, obj);

            obj = new Edit("edtSptIdntyDtrNm","396.00","114","100%","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("39");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            obj.set_text("");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSchdlChgRsn","396.00","70","100%","46",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("40");
            obj.set_text("변경사유");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.addChild(obj.name, obj);

            obj = new TextArea("txtSchdlChgRsn","171","111","100%","150",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("41");
            obj.set_readonly("false");
            obj.set_displaynulltext("변경사유 입력");
            obj.set_textAlign("left");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panSchdlChgRsn","396.00","70","1380","196",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("42");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSchdlChgRsn\"/><PanelItem id=\"PanelItem02\" componentid=\"txtSchdlChgRsn\"/></Contents>");
            this.divForm.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divPopBtn.form
            obj = new Layout("default","",0,0,this.divForm.form.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnCancel.set_taborder("1");
                p.btnCancel.set_text("취소");
                p.btnCancel.set_cssclass("btn_WF_No");
                p.btnCancel.move("200.00","365","100","40",null,null);

                p.btnSave.set_taborder("0");
                p.btnSave.set_text("변경요청");
                p.btnSave.set_cssclass("btn_WF_Yes");
                p.btnSave.move("457.00","30","100","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("20");
            obj.set_flexwrap("nowrap");
            obj.set_flexcrossaxiswrapalign("center");
            this.divForm.form.divPopBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divPopBtn.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_flexwrap("wrap");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("start");
            obj.set_type("horizontal");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("20");
            this.divForm.form.divPopBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_taborder("0");
                p.Panel00.set_horizontalgap("20");
                p.Panel00.set_flexcrossaxiswrapalign("start");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_verticalgap("0");
                p.Panel00.set_spacing("0px 20px 10px 20px");
                p.Panel00.set_cssclass("pal_WF_DtlBg");
                p.Panel00.set_type("horizontal");
                p.Panel00.move("136.00","100","100.00%","96",null,null);

                p.staBzentyNm.set_taborder("1");
                p.staBzentyNm.set_text("업체명");
                p.staBzentyNm.set_cssclass("sta_WF_Label");
                p.staBzentyNm.move("46.00","46","100%","46",null,null);

                p.panBzentyNm.set_taborder("3");
                p.panBzentyNm.set_flexgrow("1");
                p.panBzentyNm.set_type("vertical");
                p.panBzentyNm.set_flexwrap("nowrap");
                p.panBzentyNm.move("46.00","46","360","86",null,null);

                p.edtBzentyNm.set_taborder("2");
                p.edtBzentyNm.set_readonly("true");
                p.edtBzentyNm.set_textAlign("left");
                p.edtBzentyNm.move("46.00","90","100%","40",null,null);

                p.staRcptNo.set_taborder("4");
                p.staRcptNo.set_text("접수번호");
                p.staRcptNo.set_cssclass("sta_WF_Label");
                p.staRcptNo.move("396.00","70","100%","46",null,null);

                p.edtRcptNo.set_taborder("5");
                p.edtRcptNo.set_readonly("true");
                p.edtRcptNo.set_textAlign("left");
                p.edtRcptNo.move("396.00","114","100%","40",null,null);

                p.panRcptNo.set_taborder("6");
                p.panRcptNo.set_type("vertical");
                p.panRcptNo.set_flexgrow("1");
                p.panRcptNo.set_flexwrap("nowrap");
                p.panRcptNo.move("396.00","70","360","86",null,null);

                p.panList.set_taborder("8");
                p.panList.set_cssclass("pal_WF_DtlBg");
                p.panList.set_spacing("10px 20px 10px 20px");
                p.panList.set_fittocontents("height");
                p.panList.set_flexwrap("wrap");
                p.panList.set_horizontalgap("20");
                p.panList.move("0","776","100.00%","214",null,null);

                p.grdList.set_taborder("7");
                p.grdList.set_binddataset("dsList");
                p.grdList.set_autofittype("none");
                p.grdList.move("0","140","100%","203",null,null);

                p.staVstrNm.set_taborder("9");
                p.staVstrNm.set_text("방문자");
                p.staVstrNm.set_cssclass("sta_WF_Label");
                p.staVstrNm.move("46.00","46","100%","46",null,null);

                p.edtVstrNm.set_taborder("10");
                p.edtVstrNm.set_readonly("true");
                p.edtVstrNm.set_textAlign("left");
                p.edtVstrNm.move("46.00","90","100%","40",null,null);

                p.Panel02_1.set_taborder("11");
                p.Panel02_1.set_flexgrow("1");
                p.Panel02_1.set_type("vertical");
                p.Panel02_1.move("46.00","46","255","86",null,null);

                p.staVstrTelno.set_taborder("12");
                p.staVstrTelno.set_text("방문자 휴대폰");
                p.staVstrTelno.set_cssclass("sta_WF_Label");
                p.staVstrTelno.move("396.00","70","100%","46",null,null);

                p.edtVstrTelno.set_taborder("13");
                p.edtVstrTelno.set_readonly("true");
                p.edtVstrTelno.set_textAlign("left");
                p.edtVstrTelno.move("396.00","114","100%","40",null,null);

                p.Panel02_2.set_taborder("14");
                p.Panel02_2.set_type("vertical");
                p.Panel02_2.set_flexgrow("1");
                p.Panel02_2.move("396.00","70","255","86",null,null);

                p.Panel02.set_taborder("15");
                p.Panel02.set_horizontalgap("20");
                p.Panel02.set_flexcrossaxiswrapalign("start");
                p.Panel02.set_flexwrap("wrap");
                p.Panel02.set_fittocontents("height");
                p.Panel02.set_verticalgap("0");
                p.Panel02.set_spacing("0px 20px 10px 20px");
                p.Panel02.set_cssclass("pal_WF_DtlBg");
                p.Panel02.set_type("horizontal");
                p.Panel02.move("136.00","100","100.00%","96",null,null);

                p.staVstHpeYmd.set_taborder("16");
                p.staVstHpeYmd.set_text("방문희망일자");
                p.staVstHpeYmd.set_cssclass("sta_WF_Label");
                p.staVstHpeYmd.move("396.00","70","100%","46",null,null);

                p.edtVstHpeYmd.set_taborder("17");
                p.edtVstHpeYmd.set_readonly("true");
                p.edtVstHpeYmd.set_format("####-##-##");
                p.edtVstHpeYmd.set_type("string");
                p.edtVstHpeYmd.set_value("20241024");
                p.edtVstHpeYmd.move("396.00","114","100%","40",null,null);

                p.Panel02_3.set_taborder("18");
                p.Panel02_3.set_type("vertical");
                p.Panel02_3.set_flexgrow("1");
                p.Panel02_3.move("396.00","70","255","86",null,null);

                p.staSptIdntyNm.set_taborder("19");
                p.staSptIdntyNm.set_text("확인구분");
                p.staSptIdntyNm.set_cssclass("sta_WF_Label");
                p.staSptIdntyNm.move("396.00","70","100%","46",null,null);

                p.edtSptIdntyNm.set_taborder("20");
                p.edtSptIdntyNm.set_readonly("true");
                p.edtSptIdntyNm.set_textAlign("left");
                p.edtSptIdntyNm.move("396.00","114","100%","40",null,null);

                p.Panel02_2_00.set_taborder("21");
                p.Panel02_2_00.set_type("vertical");
                p.Panel02_2_00.set_flexgrow("1");
                p.Panel02_2_00.move("396.00","70","255","86",null,null);

                p.staLdrNeedYn.set_taborder("22");
                p.staLdrNeedYn.set_text("인솔자 필요여부");
                p.staLdrNeedYn.set_cssclass("sta_WF_Label");
                p.staLdrNeedYn.move("396.00","70","100%","46",null,null);

                p.edtLdrNeedYn.set_taborder("23");
                p.edtLdrNeedYn.set_readonly("true");
                p.edtLdrNeedYn.set_textAlign("left");
                p.edtLdrNeedYn.move("396.00","114","100%","40",null,null);

                p.Panel02_2_01.set_taborder("24");
                p.Panel02_2_01.set_type("vertical");
                p.Panel02_2_01.set_flexgrow("1");
                p.Panel02_2_01.move("396.00","70","255","86",null,null);

                p.staSptIdntyYmd.set_taborder("25");
                p.staSptIdntyYmd.set_text("현장확인일자");
                p.staSptIdntyYmd.set_cssclass("sta_WF_Label");
                p.staSptIdntyYmd.move("396.00","70","100%","46",null,null);

                p.panSptIdntyYmd.set_taborder("26");
                p.panSptIdntyYmd.set_type("vertical");
                p.panSptIdntyYmd.set_flexgrow("1");
                p.panSptIdntyYmd.move("396.00","70","360","86",null,null);

                p.staSptIdntyDtrNm.set_taborder("27");
                p.staSptIdntyDtrNm.set_text("현장확인담당자");
                p.staSptIdntyDtrNm.set_cssclass("sta_WF_Label");
                p.staSptIdntyDtrNm.move("396.00","70","100%","46",null,null);

                p.Panel02_2_01_00.set_taborder("28");
                p.Panel02_2_01_00.set_type("vertical");
                p.Panel02_2_01_00.set_flexgrow("1");
                p.Panel02_2_01_00.move("396.00","70","360","86",null,null);

                p.Panel02_00.set_taborder("29");
                p.Panel02_00.set_flexcrossaxiswrapalign("start");
                p.Panel02_00.set_flexwrap("wrap");
                p.Panel02_00.set_fittocontents("height");
                p.Panel02_00.set_verticalgap("0");
                p.Panel02_00.set_spacing("0px 20px 10px 20px");
                p.Panel02_00.set_cssclass("pal_WF_DtlBg");
                p.Panel02_00.set_type("horizontal");
                p.Panel02_00.set_horizontalgap("20");
                p.Panel02_00.move("136.00","100","100.00%","96",null,null);

                p.staAplcntGdMttr.set_taborder("30");
                p.staAplcntGdMttr.set_text("신청자 안내사항");
                p.staAplcntGdMttr.set_cssclass("sta_WF_Label");
                p.staAplcntGdMttr.move("396.00","70","100%","46",null,null);

                p.panAplcntGdMttr.set_taborder("31");
                p.panAplcntGdMttr.set_type("vertical");
                p.panAplcntGdMttr.set_flexgrow("1");
                p.panAplcntGdMttr.set_fittocontents("height");
                p.panAplcntGdMttr.move("396.00","70","1380","196",null,null);

                p.Panel02_00_00.set_taborder("32");
                p.Panel02_00_00.set_horizontalgap("20");
                p.Panel02_00_00.set_flexcrossaxiswrapalign("start");
                p.Panel02_00_00.set_flexwrap("wrap");
                p.Panel02_00_00.set_fittocontents("height");
                p.Panel02_00_00.set_verticalgap("0");
                p.Panel02_00_00.set_spacing("0px 20px 10px 20px");
                p.Panel02_00_00.set_cssclass("pal_WF_DtlBg");
                p.Panel02_00_00.set_type("horizontal");
                p.Panel02_00_00.move("136.00","100","100.00%","196",null,null);

                p.Panel02_00_00_00.set_taborder("43");
                p.Panel02_00_00_00.set_horizontalgap("20");
                p.Panel02_00_00_00.set_flexcrossaxiswrapalign("start");
                p.Panel02_00_00_00.set_flexwrap("wrap");
                p.Panel02_00_00_00.set_fittocontents("height");
                p.Panel02_00_00_00.set_verticalgap("0");
                p.Panel02_00_00_00.set_spacing("0px 20px 10px 20px");
                p.Panel02_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.Panel02_00_00_00.set_type("horizontal");
                p.Panel02_00_00_00.move("136.00","100","100.00%","196",null,null);

                p.txtAplcntGdMttr.set_taborder("33");
                p.txtAplcntGdMttr.set_readonly("true");
                p.txtAplcntGdMttr.set_displaynulltext("내용 입력");
                p.txtAplcntGdMttr.set_visible("true");
                p.txtAplcntGdMttr.set_textAlign("left");
                p.txtAplcntGdMttr.move("171","111","100%","150",null,null);

                p.divPopBtn.set_taborder("34");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.move("275","1048","100.00%","60",null,null);

                p.staPrgsSttsNm.set_taborder("35");
                p.staPrgsSttsNm.set_text("상태");
                p.staPrgsSttsNm.set_cssclass("sta_WF_Label");
                p.staPrgsSttsNm.move("396.00","70","100%","46",null,null);

                p.edtPrgsSttsNm.set_taborder("36");
                p.edtPrgsSttsNm.set_readonly("true");
                p.edtPrgsSttsNm.set_textAlign("left");
                p.edtPrgsSttsNm.move("396.00","114","100%","40",null,null);

                p.panPrgsSttsNm.set_taborder("37");
                p.panPrgsSttsNm.set_type("vertical");
                p.panPrgsSttsNm.set_flexgrow("1");
                p.panPrgsSttsNm.set_flexwrap("nowrap");
                p.panPrgsSttsNm.move("396.00","70","360","86",null,null);

                p.edtSptIdntyYmd.set_taborder("38");
                p.edtSptIdntyYmd.set_readonly("true");
                p.edtSptIdntyYmd.set_format("####-##-##");
                p.edtSptIdntyYmd.set_textAlign("left");
                p.edtSptIdntyYmd.set_type("string");
                p.edtSptIdntyYmd.set_value("20241024");
                p.edtSptIdntyYmd.move("396.00","114","100%","40",null,null);

                p.edtSptIdntyDtrNm.set_taborder("39");
                p.edtSptIdntyDtrNm.set_readonly("true");
                p.edtSptIdntyDtrNm.set_textAlign("left");
                p.edtSptIdntyDtrNm.move("396.00","114","100%","40",null,null);

                p.staSchdlChgRsn.set_taborder("40");
                p.staSchdlChgRsn.set_text("변경사유");
                p.staSchdlChgRsn.set_cssclass("sta_WF_Label_E");
                p.staSchdlChgRsn.move("396.00","70","100%","46",null,null);

                p.txtSchdlChgRsn.set_taborder("41");
                p.txtSchdlChgRsn.set_readonly("false");
                p.txtSchdlChgRsn.set_displaynulltext("변경사유 입력");
                p.txtSchdlChgRsn.set_textAlign("left");
                p.txtSchdlChgRsn.move("171","111","100%","150",null,null);

                p.panSchdlChgRsn.set_taborder("42");
                p.panSchdlChgRsn.set_type("vertical");
                p.panSchdlChgRsn.set_flexgrow("1");
                p.panSchdlChgRsn.set_fittocontents("height");
                p.panSchdlChgRsn.move("396.00","70","1380","196",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("Layout0","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div00.move("20","27.544","100%","745",null,null);

                p.Div01.move("0","Div00:50","100%","745",null,null);

                p.Div02.move("0","Div01:50","100%","176",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("0px 10px 0px 20px");
            obj.set_flexcrossaxisalign("start");
            obj.set_verticalgap("30");
            obj.set_flexwrap("wrap");
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
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,2000,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("현장확인일정 변경요청");

                p.divTitle.set_taborder("1");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("height");
                p.divForm.move("0","60",null,"1254","60",null);
            	}
            );
            obj.set_type("default");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.move("20","10",null,"1430","20",null);

                p.divTitle.set_visible("false");
                p.divTitle.move("0","0",null,"50","0",null);
            	}
            );
            obj.set_mobileorientation("Portrait");
            obj.set_type("default");
            obj.set_flexwrap("nowrap");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.edtBzentyNm","value","dsMaster","bzentyNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.edtRcptNo","value","dsMaster","rcptNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.edtPrgsSttsNm","value","dsMaster","prgrsSttsNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.edtSptIdntyNm","value","dsMaster","sptIdntyNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.edtLdrNeedYn","value","dsMaster","ldrNeedYnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.edtVstHpeYmd","value","dsMaster","vstHpeYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.edtVstrNm","value","dsMaster","vstrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.edtVstrTelno","value","dsMaster","vstrTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.edtSptIdntyYmd","value","dsMaster","sptIdntyYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divForm.form.edtSptIdntyDtrNm","value","dsMaster","sptIdntyPicNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divForm.form.txtAplcntGdMttr","value","dsMaster","aplcntGdMttr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divForm.form.txtSchdlChgRsn","value","dsMaster","schdlChgRsn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.addIncludeScript("REN006M04.xfdl","xjs::TaskCom.xjs");
        this.registerScript("REN006M04.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	REN006M04.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/10/23
        *  @Desction    현장확인일정 변경요청
        ******************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/10/23			이루온h						최초생성
        *******************************************************************************
        */

        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;  // 업무공통
        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.param;
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	if (this.opener) {
        		this.param = {
        			"status" : this.getOwnerFrame().status
        			,"hireLohNo" : this.getOwnerFrame().hireLohNo
        		}
        	} else {
        		this.param = this.getOwnerFrame().form.fvObjArgs;
        	}

        	if (this.param != null && this.param.hireLohNo != null && this.param.hireLohNo != '') {
        		//페이지 로딩시 처음에 실행 되는 함수
        		this.fnInit();

        		//상세조회
        		this.dsSearch.setColumn(0,"hireLohNo"	,this.param.hireLohNo);
        		this.selectTransaction();

        		//초기포커스 지정
        		//this.divForm.form.Div01.form.rdoSptIdntyCd.setFocus();
        	} else {
        		this.gfnAlertMsg("msg", "REN_004");	//임차희망서번호가 없습니다.
        	}
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        // 상세 조회
        this.selectTransaction = function()
        {
        	var strSvcId    = "select";
        	var strSvcUrl   = "ren/frs/selectSptIdntySchdl.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsMaster=dsMaster dsList=dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "combo":
        			break;

        		// 상세조회
        		case "select":
        			this.divForm.form.divPopBtn.form.btnSave.visible = false;	// 저장
        			this.divForm.form.txtSchdlChgRsn.readonly 		 = true;	// 변경사유

        			//22.추천전달 23.현장확인요청 24.현장확인일정등록 25.일정젼경요청
        			if (this.dsMaster.getColumn(0,"prgrsSttsCd") == "24" || this.dsMaster.getColumn(0,"prgrsSttsCd") == "25") {
        				this.divForm.form.divPopBtn.form.btnSave.visible = true;	// 저장
        				this.divForm.form.txtSchdlChgRsn.readonly 		 = false;	// 변경사유
        				this.divForm.form.txtSchdlChgRsn.setFocus();
        			}

        			break;

        		case "update":		//변경요청
        			this.gfnAlertMsg("alert_msg", this.objApp.getVariable("gvRetMsg"), null, "msgCallback");

        			break;
        	}
        };


        // 메시지 콜백 함수
        this.msgCallback = function(sPopupId, sRtn) {

        	var oRtn 		= JSON.parse(sRtn);

        	// 저장
        	if (sPopupId == "save_confirm" && oRtn.result == "Y") {

        		this.dsMaster.setColumn(0, "prgrsSttsCd"	,"25");		// 상태코드: 22.추천전달 23.현장확인요청 24.현장확인일정등록 25.현장확인일정변경요청

        		var strSvcId    = "update";
        		var strSvcUrl   = "ren/frs/updateSptIdntySchdlChgDmnd.do";
        		var inData      = "dsMaster=dsMaster:A";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";
        		var isAsync   	= false;

        		this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        	// 저장후 메시지
        	} else if (sPopupId == "alert_msg") {
        		// 목록화면으로 이동
        		var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        		this.gfnCloseMenu(cMenuId);
        		this._gfnOpenMenu(cMenuId.substring(0,14),"",true);
        	}
        };


        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	//this.cfnComCdLoad({dsCboLdrNeedYn:"REN0010:S"});	//인솔자필요여부
        };


        // 변경요청 버튼 클릭시
        this.divBtn_btnSave_onclick = function(obj,e)
        {
        	this.validateColumn = [];

        	this.validateColumn.push({"title" : "변경사유"		, "com": this.divForm.form.txtSchdlChgRsn});

        	 if (this.gfnDsIsUpdated(this.dsMaster) == true) {
        		// 필수입력 여부 체크
        		if(this.gfnDsIsValidated(this.validateColumn)) {
        			this.gfnConfirmMsg("save_confirm", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        		}
        	} else {
        		// 변경된 내용이 없습니다.
         		this.gfnAlertMsg("msg", "MSG_004");
         		return;
        	}
        };


        // 취소 버튼 클릭시
        this.divBtn_btnCancel_onclick = function(obj,e)
        {
        	var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        	this.gfnCloseMenu(cMenuId);
        	this._gfnOpenMenu(cMenuId.substring(0,14),"",true);
        };


        // 알림메시지 전송
        this.fnSmsSend = function()
        {
        	//	dsSms dataset
        	// 	send_num		// 보내는사람 전화번호
        	// 	recipient_num	// 받는사람 전화번호
        	// 	msg_cont_rep	// 제목
        	// 	template		// 내용 템플릿ID

        	// 사용자정보 조회
        	const gdsUser = nexacro.getApplication().gdsUser;

        	var sndrMblTelno = this.gfn_allTrim(gdsUser.getColumn(0,"userMblTelno").replace(/-/g,""));			// 발송자휴대전화번호(사용자)
        	var rcvrMblTelno = this.gfn_allTrim(this.dsGet.getColumn(0,"rcptUserMblTelno").replace(/-/g,""));	// 수신자휴대전화번호(접수사용자)
        	var send_num = "82" + sndrMblTelno.substring(1,10);
        	var recipient_num = "82" + rcvrMblTelno.substring(1,10);;
        	var contentId = "REN140_02";	// 신규 현장확인일정 변경

        	this.dsSms.addColumn("접수번호", "STRING");

        	this.dsSms.setColumn(0, "send_num", send_num);
        	this.dsSms.setColumn(0, "recipient_num", recipient_num);
        	this.dsSms.setColumn(0, "contentId", contentId);
        	this.dsSms.setColumn(0, "접수번호"	, this.dsGet.getColumn(0,"rcptNo"));

        	this.gfn_Api_sms(
        		 "sms"				// API ID
        		,"dsSms"			// 데이터셋명
        		,"apiCallback");	// 콜백명
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.txtAplcntGdMttr.addEventHandler("onchanged",this.divForm_Div03_TextArea00_onchanged,this);
            this.divForm.form.divPopBtn.form.btnCancel.addEventHandler("onclick",this.divBtn_btnCancel_onclick,this);
            this.divForm.form.divPopBtn.form.btnSave.addEventHandler("onclick",this.divBtn_btnSave_onclick,this);
        };
        this.loadIncludeScript("REN006M04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
