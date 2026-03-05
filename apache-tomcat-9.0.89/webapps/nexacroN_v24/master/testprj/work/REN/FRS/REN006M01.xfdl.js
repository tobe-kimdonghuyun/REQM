(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("REN006M01");
            this.set_titletext("현장확인일정 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,2000);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"hireLohNo\" type=\"STRING\" size=\"256\"/><Column id=\"rcptNo\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyClsfNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstnNm\" type=\"STRING\" size=\"256\"/><Column id=\"bldgNm\" type=\"STRING\" size=\"256\"/><Column id=\"rntar\" type=\"STRING\" size=\"256\"/><Column id=\"vstHpeYmd\" type=\"STRING\" size=\"256\"/><Column id=\"vstrNm\" type=\"STRING\" size=\"256\"/><Column id=\"sptIdntyYmd\" type=\"STRING\" size=\"256\"/><Column id=\"dtlUsgNm\" type=\"STRING\" size=\"256\"/><Column id=\"sptIdntyCd\" type=\"STRING\" size=\"256\"/><Column id=\"sptIdntyNm\" type=\"STRING\" size=\"256\"/><Column id=\"prgrsSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrsSttsNm\" type=\"STRING\" size=\"256\"/><Column id=\"ldrNeedYnNm\" type=\"STRING\" size=\"256\"/><Column id=\"sptIdntyPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntGdMttr\" type=\"STRING\" size=\"256\"/><Column id=\"vstrTelno\" type=\"STRING\" size=\"256\"/><Column id=\"schdlChgRsn\" type=\"STRING\" size=\"256\"/><Column id=\"prsnrId\" type=\"STRING\" size=\"256\"/><Column id=\"sptIdntyPicId\" type=\"STRING\" size=\"256\"/><Column id=\"prsnrMblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"sptIdntyMblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"rentAsnCtinfo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Div("divForm","0","60",null,"1310","60",null,null,null,null,null,this);
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
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel03\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00","46.00","46","100%","46",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel03","46.00","46","360","86",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_flexgrow("1");
            obj.set_type("vertical");
            obj.set_flexwrap("nowrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_01_01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Edit("edt00_01_01","46.00","90","100%","40",null,null,null,null,null,null,this.divForm.form);
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

            obj = new Panel("Panel01_00","396.00","70","360","86",null,null,null,null,null,null,this.divForm.form);
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

            obj = new Grid("grdList","0","140","100%","200",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("7");
            obj.set_binddataset("dsList");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"500\"/><Column size=\"500\"/><Column size=\"187\"/><Column size=\"160\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"위치\"/><Cell col=\"1\" text=\"건물명\"/><Cell col=\"2\" text=\"호실번호\"/><Cell col=\"3\" text=\"면적(m2)\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:pstnNm\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" cssclass=\"CellReadonly\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" cssclass=\"CellReadonly\" text=\"bind:bldgNm\"/><Cell col=\"2\" text=\"bind:rmnmNo\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" cssclass=\"CellReadonly\"/><Cell col=\"3\" text=\"bind:rntar\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" cssclass=\"CellReadonly CellEnd\"/></Band></Format></Formats>");
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

            obj = new Panel("panVstrNm","46.00","46","255","86",null,null,null,null,null,null,this.divForm.form);
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
            obj.getSetter("format").set("###-####-####");
            obj.getSetter("type").set("string");
            obj.getSetter("maskchar").set(" ");
            obj.set_text("");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panVstrTelno","396.00","70","255","86",null,null,null,null,null,null,this.divForm.form);
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
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"panSptIdntyNm\"/><PanelItem id=\"PanelItem05\" componentid=\"panLdrNeedYn\"/><PanelItem id=\"PanelItem03\" componentid=\"panVstHpeYmd\"/><PanelItem id=\"PanelItem00\" componentid=\"panVstrNm\"/><PanelItem id=\"PanelItem02\" componentid=\"panVstrTelno\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_01_01_00_00_00","80","620","100%","46",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("39");
            obj.set_text("변경사유");
            obj.set_cssclass("sta_WF_Label");
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
            obj.set_enable("true");
            obj.set_format("####-##-##");
            obj.set_type("string");
            obj.set_value("20241024");
            obj.set_textAlign("left");
            obj.set_maskchar(" ");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panVstHpeYmd","396.00","70","255","86",null,null,null,null,null,null,this.divForm.form);
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

            obj = new Panel("panSptIdntyNm","396.00","70","255","86",null,null,null,null,null,null,this.divForm.form);
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

            obj = new Panel("panLdrNeedYn","396.00","70","255","86",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("24");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLdrNeedYn\"/><PanelItem id=\"PanelItem01\" componentid=\"edtLdrNeedYn\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_01_01_00","396.00","70","100%","46",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("25");
            obj.set_text("현장확인일자");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel02_2_00_00","396.00","70","360","86",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("26");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_01_01_00\"/><PanelItem id=\"PanelItem03\" componentid=\"calSptIdntyYmd\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSptIdntyDtrNm","396.00","70","100%","46",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("27");
            obj.set_text("현장확인담당자");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel02_2_01_00","396.00","70","360","86",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("28");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSptIdntyDtrNm\"/><PanelItem id=\"PanelItem03\" componentid=\"divEdtPop\"/></Contents>");
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
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"Panel02_2_00_00\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel02_2_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"panSptIdntyOmsnYn\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel02_2_00_00_00_00","80","620","1380","196",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("41");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_01_01_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"TextArea00_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_00_00","80","666","100%","150",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("40");
            obj.set_readonly("false");
            obj.set_displaynulltext("내용 입력");
            obj.set_textAlign("left");
            this.divForm.addChild(obj.name, obj);

            obj = new Calendar("calSptIdntyYmd","200.00","728","100%","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("30");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20240702");
            obj.set_type("normal");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divEdtPop","799.00","29","100%","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("31");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.addChild(obj.name, obj);

            obj = new Edit("edtSptIdntyDtrNm","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.divEdtPop.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            this.divForm.form.divEdtPop.addChild(obj.name, obj);

            obj = new Button("btnSptIdntyDtrPop","edtSptIdntyDtrNm:-40","0","40","40",null,null,null,null,null,null,this.divForm.form.divEdtPop.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.divForm.form.divEdtPop.addChild(obj.name, obj);

            obj = new CheckBox("chkSptIdntyOmsnYn","200.00","160","100%","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("32");
            obj.set_text("현장확인 생략 전환");
            obj.set_falsevalue("1");
            obj.set_truevalue("2");
            obj.set_value("2");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panSptIdntyOmsnYn","396.00","70","360","86",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("33");
            obj.set_type("vertical");
            obj.set_flexgrow("2");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"chkSptIdntyOmsnYn\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_01_01_00_00","396.00","70","100%","46",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("34");
            obj.set_text("신청자 안내사항");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel02_2_00_00_00","396.00","70","1380","196",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("35");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_01_01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"TextArea00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00","136.00","100","100.00%","207",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("36");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"Panel02_2_00_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_00","171","111","100%","150",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("37");
            obj.set_readonly("false");
            obj.set_displaynulltext("내용 입력");
            obj.set_textAlign("left");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panSchdlChgRsn","60","620","100.00%","207",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("42");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_2_00_00_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divPopBtn","275","1048","100.00%","60",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("38");
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
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Yes");
            this.divForm.form.divPopBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divEdtPop.form
            obj = new Layout("default","",0,0,this.divForm.form.divEdtPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.edtSptIdntyDtrNm.set_taborder("0");
                p.edtSptIdntyDtrNm.set_cssclass("edt_WF_EdtSch");
                p.edtSptIdntyDtrNm.set_readonly("true");
                p.edtSptIdntyDtrNm.set_textAlign("left");
                p.edtSptIdntyDtrNm.move("0","0",null,"40","0",null);

                p.btnSptIdntyDtrPop.set_taborder("1");
                p.btnSptIdntyDtrPop.set_cssclass("btn_WF_EdtSch");
                p.btnSptIdntyDtrPop.move("edtSptIdntyDtrNm:-40","0","40","40",null,null);
            	}
            );
            this.divForm.form.divEdtPop.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divEdtPop.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divEdtPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.divEdtPop.form.addLayout(obj.name, obj);
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
                p.btnSave.set_text("저장");
                p.btnSave.set_cssclass("btn_WF_Yes");
                p.btnSave.move("457.00","30","100","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("end");
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

                p.staLabel01_00_00.set_taborder("1");
                p.staLabel01_00_00.set_text("업체명");
                p.staLabel01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00.move("46.00","46","100%","46",null,null);

                p.Panel03.set_taborder("3");
                p.Panel03.set_flexgrow("1");
                p.Panel03.set_type("vertical");
                p.Panel03.set_flexwrap("nowrap");
                p.Panel03.move("46.00","46","360","86",null,null);

                p.edt00_01_01.set_taborder("2");
                p.edt00_01_01.set_readonly("true");
                p.edt00_01_01.set_textAlign("left");
                p.edt00_01_01.move("46.00","90","100%","40",null,null);

                p.staRcptNo.set_taborder("4");
                p.staRcptNo.set_text("접수번호");
                p.staRcptNo.set_cssclass("sta_WF_Label");
                p.staRcptNo.move("396.00","70","100%","46",null,null);

                p.edtRcptNo.set_taborder("5");
                p.edtRcptNo.set_readonly("true");
                p.edtRcptNo.set_textAlign("left");
                p.edtRcptNo.move("396.00","114","100%","40",null,null);

                p.Panel01_00.set_taborder("6");
                p.Panel01_00.set_type("vertical");
                p.Panel01_00.set_flexgrow("1");
                p.Panel01_00.set_flexwrap("nowrap");
                p.Panel01_00.move("396.00","70","360","86",null,null);

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
                p.grdList.move("0","140","100%","200",null,null);

                p.staVstrNm.set_taborder("9");
                p.staVstrNm.set_text("방문자");
                p.staVstrNm.set_cssclass("sta_WF_Label");
                p.staVstrNm.move("46.00","46","100%","46",null,null);

                p.edtVstrNm.set_taborder("10");
                p.edtVstrNm.set_readonly("true");
                p.edtVstrNm.set_textAlign("left");
                p.edtVstrNm.move("46.00","90","100%","40",null,null);

                p.panVstrNm.set_taborder("11");
                p.panVstrNm.set_flexgrow("1");
                p.panVstrNm.set_type("vertical");
                p.panVstrNm.move("46.00","46","255","86",null,null);

                p.staVstrTelno.set_taborder("12");
                p.staVstrTelno.set_text("방문자 휴대폰");
                p.staVstrTelno.set_cssclass("sta_WF_Label");
                p.staVstrTelno.move("396.00","70","100%","46",null,null);

                p.edtVstrTelno.set_taborder("13");
                p.edtVstrTelno.set_readonly("true");
                p.edtVstrTelno.set_textAlign("left");
                p.edtVstrTelno.getSetter("format").set("###-####-####");
                p.edtVstrTelno.getSetter("type").set("string");
                p.edtVstrTelno.getSetter("maskchar").set(" ");
                p.edtVstrTelno.move("396.00","114","100%","40",null,null);

                p.panVstrTelno.set_taborder("14");
                p.panVstrTelno.set_type("vertical");
                p.panVstrTelno.set_flexgrow("1");
                p.panVstrTelno.move("396.00","70","255","86",null,null);

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

                p.staLabel01_00_01_01_00_00_00.set_taborder("39");
                p.staLabel01_00_01_01_00_00_00.set_text("변경사유");
                p.staLabel01_00_01_01_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_01_01_00_00_00.move("80","620","100%","46",null,null);

                p.staVstHpeYmd.set_taborder("16");
                p.staVstHpeYmd.set_text("방문희망일자");
                p.staVstHpeYmd.set_cssclass("sta_WF_Label");
                p.staVstHpeYmd.move("396.00","70","100%","46",null,null);

                p.edtVstHpeYmd.set_taborder("17");
                p.edtVstHpeYmd.set_readonly("true");
                p.edtVstHpeYmd.set_enable("true");
                p.edtVstHpeYmd.set_format("####-##-##");
                p.edtVstHpeYmd.set_type("string");
                p.edtVstHpeYmd.set_value("20241024");
                p.edtVstHpeYmd.set_textAlign("left");
                p.edtVstHpeYmd.set_maskchar(" ");
                p.edtVstHpeYmd.move("396.00","114","100%","40",null,null);

                p.panVstHpeYmd.set_taborder("18");
                p.panVstHpeYmd.set_type("vertical");
                p.panVstHpeYmd.set_flexgrow("1");
                p.panVstHpeYmd.move("396.00","70","255","86",null,null);

                p.staSptIdntyNm.set_taborder("19");
                p.staSptIdntyNm.set_text("확인구분");
                p.staSptIdntyNm.set_cssclass("sta_WF_Label");
                p.staSptIdntyNm.move("396.00","70","100%","46",null,null);

                p.edtSptIdntyNm.set_taborder("20");
                p.edtSptIdntyNm.set_readonly("true");
                p.edtSptIdntyNm.set_textAlign("left");
                p.edtSptIdntyNm.move("396.00","114","100%","40",null,null);

                p.panSptIdntyNm.set_taborder("21");
                p.panSptIdntyNm.set_type("vertical");
                p.panSptIdntyNm.set_flexgrow("1");
                p.panSptIdntyNm.move("396.00","70","255","86",null,null);

                p.staLdrNeedYn.set_taborder("22");
                p.staLdrNeedYn.set_text("인솔자 필요여부");
                p.staLdrNeedYn.set_cssclass("sta_WF_Label");
                p.staLdrNeedYn.move("396.00","70","100%","46",null,null);

                p.edtLdrNeedYn.set_taborder("23");
                p.edtLdrNeedYn.set_readonly("true");
                p.edtLdrNeedYn.set_textAlign("left");
                p.edtLdrNeedYn.move("396.00","114","100%","40",null,null);

                p.panLdrNeedYn.set_taborder("24");
                p.panLdrNeedYn.set_type("vertical");
                p.panLdrNeedYn.set_flexgrow("1");
                p.panLdrNeedYn.move("396.00","70","255","86",null,null);

                p.staLabel01_00_01_01_00.set_taborder("25");
                p.staLabel01_00_01_01_00.set_text("현장확인일자");
                p.staLabel01_00_01_01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel01_00_01_01_00.move("396.00","70","100%","46",null,null);

                p.Panel02_2_00_00.set_taborder("26");
                p.Panel02_2_00_00.set_type("vertical");
                p.Panel02_2_00_00.set_flexgrow("1");
                p.Panel02_2_00_00.move("396.00","70","360","86",null,null);

                p.staSptIdntyDtrNm.set_taborder("27");
                p.staSptIdntyDtrNm.set_text("현장확인담당자");
                p.staSptIdntyDtrNm.set_cssclass("sta_WF_Label_E");
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

                p.Panel02_2_00_00_00_00.set_taborder("41");
                p.Panel02_2_00_00_00_00.set_type("vertical");
                p.Panel02_2_00_00_00_00.set_flexgrow("1");
                p.Panel02_2_00_00_00_00.set_fittocontents("height");
                p.Panel02_2_00_00_00_00.move("80","620","1380","196",null,null);

                p.TextArea00_00_00.set_taborder("40");
                p.TextArea00_00_00.set_readonly("false");
                p.TextArea00_00_00.set_displaynulltext("내용 입력");
                p.TextArea00_00_00.set_textAlign("left");
                p.TextArea00_00_00.move("80","666","100%","150",null,null);

                p.calSptIdntyYmd.set_taborder("30");
                p.calSptIdntyYmd.set_dateformat("yyyy-MM-dd");
                p.calSptIdntyYmd.set_value("20240702");
                p.calSptIdntyYmd.set_type("normal");
                p.calSptIdntyYmd.move("200.00","728","100%","40",null,null);

                p.divEdtPop.set_taborder("31");
                p.divEdtPop.set_text("Div00");
                p.divEdtPop.set_formscrollbartype("none none");
                p.divEdtPop.set_formscrolltype("none");
                p.divEdtPop.set_flexgrow("1");
                p.divEdtPop.move("799.00","29","100%","40",null,null);

                p.chkSptIdntyOmsnYn.set_taborder("32");
                p.chkSptIdntyOmsnYn.set_text("현장확인 생략 전환");
                p.chkSptIdntyOmsnYn.set_falsevalue("1");
                p.chkSptIdntyOmsnYn.set_truevalue("2");
                p.chkSptIdntyOmsnYn.set_value("2");
                p.chkSptIdntyOmsnYn.move("200.00","160","100%","40",null,null);

                p.panSptIdntyOmsnYn.set_taborder("33");
                p.panSptIdntyOmsnYn.set_type("vertical");
                p.panSptIdntyOmsnYn.set_flexgrow("2");
                p.panSptIdntyOmsnYn.set_flexcrossaxisalign("start");
                p.panSptIdntyOmsnYn.set_flexmainaxisalign("end");
                p.panSptIdntyOmsnYn.move("396.00","70","360","86",null,null);

                p.staLabel01_00_01_01_00_00.set_taborder("34");
                p.staLabel01_00_01_01_00_00.set_text("신청자 안내사항");
                p.staLabel01_00_01_01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_01_01_00_00.move("396.00","70","100%","46",null,null);

                p.Panel02_2_00_00_00.set_taborder("35");
                p.Panel02_2_00_00_00.set_type("vertical");
                p.Panel02_2_00_00_00.set_flexgrow("1");
                p.Panel02_2_00_00_00.set_fittocontents("height");
                p.Panel02_2_00_00_00.move("396.00","70","1380","196",null,null);

                p.Panel02_00_00.set_taborder("36");
                p.Panel02_00_00.set_horizontalgap("20");
                p.Panel02_00_00.set_flexcrossaxiswrapalign("start");
                p.Panel02_00_00.set_flexwrap("wrap");
                p.Panel02_00_00.set_fittocontents("height");
                p.Panel02_00_00.set_verticalgap("0");
                p.Panel02_00_00.set_spacing("0px 20px 10px 20px");
                p.Panel02_00_00.set_cssclass("pal_WF_DtlBg");
                p.Panel02_00_00.set_type("horizontal");
                p.Panel02_00_00.move("136.00","100","100.00%","207",null,null);

                p.TextArea00_00.set_taborder("37");
                p.TextArea00_00.set_readonly("false");
                p.TextArea00_00.set_displaynulltext("내용 입력");
                p.TextArea00_00.set_textAlign("left");
                p.TextArea00_00.move("171","111","100%","150",null,null);

                p.panSchdlChgRsn.set_taborder("42");
                p.panSchdlChgRsn.set_horizontalgap("20");
                p.panSchdlChgRsn.set_flexcrossaxiswrapalign("start");
                p.panSchdlChgRsn.set_flexwrap("wrap");
                p.panSchdlChgRsn.set_fittocontents("height");
                p.panSchdlChgRsn.set_verticalgap("0");
                p.panSchdlChgRsn.set_spacing("0px 20px 10px 20px");
                p.panSchdlChgRsn.set_cssclass("pal_WF_DtlBg");
                p.panSchdlChgRsn.set_type("horizontal");
                p.panSchdlChgRsn.move("60","620","100.00%","207",null,null);

                p.divPopBtn.set_taborder("38");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.move("275","1048","100.00%","60",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("0");
            obj.set_verticalgap("0");
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
            obj.set_horizontalgap("0");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("mobile","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panSptIdntyOmsnYn.set_flexmainaxisalign("start");
                p.panSptIdntyOmsnYn.set_flexgrow("1");
                p.panSptIdntyOmsnYn.set_fittocontents("height");

                p.panSchdlChgRsn.set_flexgrow("1");

                p.Panel00.set_flexgrow("1");

                p.panList.set_flexgrow("1");

                p.Panel02.set_flexgrow("1");

                p.Panel02_00.set_flexgrow("1");

                p.Panel02_00_00.set_flexgrow("1");
            	}
            );
            obj.set_verticalgap("10");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("0");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,2000,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("현장확인일정 등록");

                p.divTitle.set_taborder("1");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("height");
                p.divForm.move("0","60",null,"1310","60",null);
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
                p.divForm.set_fittocontents("height");
                p.divForm.set_flexgrow("1");
                p.divForm.move("20","10",null,"750","20",null);

                p.divTitle.set_visible("false");
                p.divTitle.move("0","0",null,"50","0",null);
            	}
            );
            obj.set_mobileorientation("Portrait");
            obj.set_type("default");
            obj.set_flexwrap("nowrap");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.edt00_01_01","value","dsMaster","bzentyNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.edtRcptNo","value","dsMaster","rcptNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.edtSptIdntyNm","value","dsMaster","sptIdntyNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.edtLdrNeedYn","value","dsMaster","ldrNeedYnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.edtVstHpeYmd","value","dsMaster","vstHpeYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.edtVstrNm","value","dsMaster","vstrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.calSptIdntyYmd","value","dsMaster","sptIdntyYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.divEdtPop.form.edtSptIdntyDtrNm","value","dsMaster","sptIdntyPicNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divForm.form.TextArea00_00","value","dsMaster","aplcntGdMttr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divForm.form.edtVstrTelno","value","dsMaster","vstrTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.chkSptIdntyOmsnYn","value","dsMaster","sptIdntyCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divForm.form.TextArea00_00_00","value","dsMaster","schdlChgRsn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.addIncludeScript("REN006M01.xfdl","xjs::TaskCom.xjs");
        this.registerScript("REN006M01.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	REN006M01.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/10/23
        *  @Desction    현장확인일정 등록
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


        // 데이터 저장
        this.saveTransaction = function()
        {
        	this.dsMaster.setColumn(0, "prgrsSttsCd"	,"24");		// 상태코드: 22.추천전달 23.현장확인요청 24.현장확인일정등록 25.현장확인일정변경요청

        	var strSvcId    = "update";
        	var strSvcUrl   = "ren/frs/updateSptIdntySchdl.do";
        	var inData      = "dsMaster=dsMaster";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= false;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        }


        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        // Transaction 콜백 함수
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
        			this.divForm.form.divPopBtn.form.btnSave.visible = false;		// 저장
        			this.divForm.form.panSchdlChgRsn.visible = false;				// 변경사유

        			// 22.추천전달 23.현장확인요청 24.현장확인일정등록 25.현장확인일정변경요청
        			if (this.dsMaster.getColumn(0,"prgrsSttsCd") == "23" || this.dsMaster.getColumn(0,"prgrsSttsCd") == "24") {
        				this.divForm.form.divPopBtn.form.btnSave.visible = true;	// 저장
        			}

        			if (this.dsMaster.getColumn(0,"prgrsSttsCd") == "25") {
        				this.divForm.form.panSchdlChgRsn.visible = true;			// 변경사유
        				this.divForm.form.divPopBtn.form.btnSave.visible = true;	// 저장
        			}

        			this.divForm_chkSptIdntyOmsnYn_onclick();

        			break;

        		// 저장
        		case "update":
        			// 알림메시지 전송
        			//this.fnSmsSend();

        			this.gfnAlertMsg("alert_msg", this.objApp.getVariable("gvRetMsg"), null, "msgCallback");

        			break;
        	}
        };


        // 메시지 콜백 함수
        this.msgCallback = function(sPopupId, sRtn) {

        	var oRtn 		= JSON.parse(sRtn);

        	// 저장
        	if (sPopupId == "save_confirm" && oRtn.result == "Y") {

        		this.saveTransaction();

        	// 저장후 메시지
        	} else if (sPopupId == "alert_msg") {
        		// 목록화면으로 이동
        		var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        		this.gfnCloseMenu(cMenuId);
        		this._gfnOpenMenu(cMenuId.substring(0,14),"",true);
        	}
        };


        // 팝업 콜백 함수
        this.fnPopupCallback = function(sPopupId, sRtn)
        {
        	if(sPopupId =="userSearch")
        	{
        		if (this.gfnIsNull(sRtn)) return;
        		var objRtn = JSON.parse(sRtn);

        		for(var i=0;i<objRtn.empArr.length;i++) {
        			this.dsMaster.setColumn(0, "sptIdntyPicId", objRtn.empArr[i].userId);
        			this.dsMaster.setColumn(0, "sptIdntyPicNm", objRtn.empArr[i].userNm);
        		}
        	}
        };


        // Api 콜백 함수
        this.apiCallback = function(svcID, ret)
        {
        	console.log(svcID);
        	console.log(ret);

        	switch(svcID)
        	{
        		case "sms":
        			//this.gfnAlertMsg("insideMail", "MSG_027", "", "msgCallback");

        			break;
        	}
        }


        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	//this.cfnComCdLoad({dsCboLdrNeedYn:"REN0010:S"});	//인솔자필요여부
        };


        // 저장 버튼 클릭시
        this.divBtn_btnSave_onclick = function(obj,e)
        {
        	this.validateColumn = [];

        	this.validateColumn.push({"title" : "현장확인일자"		, "com": this.divForm.form.calSptIdntyYmd});
        	this.validateColumn.push({"title" : "현장확인담당자"		, "com": this.divForm.form.divEdtPop.form.edtSptIdntyDtrNm});

        	 if (this.gfnDsIsUpdated(this.dsMaster) == true) {
        		if (this.dsMaster.getColumn(0, "sptIdntyCd") == "2") {
        			// 현장확인생략 전환 일때
        			this.gfnConfirmMsg("save_confirm", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        		} else {
        			// 필수입력 여부 체크
        			if(this.gfnDsIsValidated(this.validateColumn)) {
        				this.gfnConfirmMsg("save_confirm", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        			}
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


        // 현장확인생략전환 체크시
        this.divForm_chkSptIdntyOmsnYn_onclick = function(obj,e)
        {
        	// 현장확인코드 : 0.현장확인생략 1.현장확인요청 2.현장확인생략전환
        	if (this.dsMaster.getColumn(0,"sptIdntyCd") == "2") {

        		this.dsMaster.setColumn(0, "sptIdntyYmd", "");
        		this.dsMaster.setColumn(0, "sptIdntyPicId", "");
        		this.dsMaster.setColumn(0, "sptIdntyPicNm", "");
        		this.divForm.form.calSptIdntyYmd.readonly	= true;
        		this.divForm.form.divEdtPop.form.btnSptIdntyDtrPop.enable = false;

        	} else {

        		this.divForm.form.calSptIdntyYmd.readonly	= false;
        		this.divForm.form.divEdtPop.form.btnSptIdntyDtrPop.enable = true;

        	};
        };


        // 현장확인담당자 팝업버튼 클릭시
        this.divForm_divEdtPop_btnSptIdntyDtrPop_onclick = function(obj,e)
        {
        	var sTitle = "담당자 선택";
        	//var objArg   = {"jobGroupId" : this.jobGroupId};
        	var objArg   = {"jobGroupId" : ""};

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
         		//, width: 1221
         		//, height: 650			//width,height 지정하지 않음 popup form size적용
        		, autosize: true
        		, title: sTitle
        		, resize: false
        		, titlebar: true
        	};

        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("userSearch", "work::COM/crtr/COM100P02.xfdl", objArg, sPopupCallBack, objOption);
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

        	var sndrMblTelno = this.gfn_allTrim(gdsUser.getColumn(0,"userMblTelno").replace(/-/g,""));		// 발송자휴대전화번호(사용자)
        	var rcvrMblTelno = this.gfn_allTrim(this.dsGet.getColumn(0,"prsnrMblTelno").replace(/-/g,""));	// 수신자휴대전화번호(임차희망서제출자)
        	var send_num = "82" + sndrMblTelno.substring(1,10);
        	var recipient_num = "82" + rcvrMblTelno.substring(1,10);;
        	var contentId = "REN140_01";	// 신규 현장확인일정 등록

        	this.dsSms.addColumn("접수번호", "STRING");
        	this.dsSms.addColumn("문의처연락처", "STRING");

        	this.dsSms.setColumn(0, "send_num", send_num);
        	this.dsSms.setColumn(0, "recipient_num", recipient_num);
        	this.dsSms.setColumn(0, "contentId", contentId);
        	this.dsSms.setColumn(0, "접수번호"	, this.dsGet.getColumn(0,"rcptNo"));
        	this.dsSms.setColumn(0, "문의처연락처", this.dsGet.getColumn(0,"rentAsnCtinfo"));

        	this.gfn_Api_sms(
        		 "sms"				// API ID
        		,"dsSms"			// 데이터셋명
        		,"apiCallback");	// 콜백명


        	var rcvrMblTelno = this.gfn_allTrim(this.dsGet.getColumn(0,"sptIdntyMblTelno").replace(/-/g,""));	// 수신자휴대전화번호(현장확인담당자)

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
            this.divForm.form.TextArea00_00_00.addEventHandler("onchanged",this.divForm_Div03_TextArea00_onchanged,this);
            this.divForm.form.divEdtPop.form.btnSptIdntyDtrPop.addEventHandler("onclick",this.divForm_divEdtPop_btnSptIdntyDtrPop_onclick,this);
            this.divForm.form.chkSptIdntyOmsnYn.addEventHandler("onclick",this.divForm_chkSptIdntyOmsnYn_onclick,this);
            this.divForm.form.TextArea00_00.addEventHandler("onchanged",this.divForm_Div03_TextArea00_onchanged,this);
            this.divForm.form.divPopBtn.form.btnCancel.addEventHandler("onclick",this.divBtn_btnCancel_onclick,this);
            this.divForm.form.divPopBtn.form.btnSave.addEventHandler("onclick",this.divBtn_btnSave_onclick,this);
        };
        this.loadIncludeScript("REN006M01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
