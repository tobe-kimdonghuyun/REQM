(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LIF051M00");
            this.set_titletext("입주서비스 기본정보확인 및 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGet", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"acntAutzrId\" type=\"STRING\" size=\"256\"/><Column id=\"pswd\" type=\"STRING\" size=\"256\"/><Column id=\"eml\" type=\"STRING\" size=\"256\"/><Column id=\"userTelno\" type=\"STRING\" size=\"256\"/><Column id=\"userMblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"coId\" type=\"STRING\" size=\"256\"/><Column id=\"coNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptId\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"empExtNo\" type=\"STRING\" size=\"256\"/><Column id=\"emlRcptnYn\" type=\"STRING\" size=\"256\"/><Column id=\"smsRcptnPrgrsYn\" type=\"STRING\" size=\"256\"/><Column id=\"smsRcptnNewYn\" type=\"STRING\" size=\"256\"/><Column id=\"smsRcptnAcntYn\" type=\"STRING\" size=\"256\"/><Column id=\"flrplnPrmId\" type=\"STRING\" size=\"256\"/><Column id=\"iiacEmpYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCtrtInfo", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNm\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtType\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtTypeNm\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtYmd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtEndYmd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPstnInfoRnb", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"위치구분\" type=\"STRING\" size=\"256\"/><Column id=\"위치정보\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"위치정보\">3-40-31</Col><Col id=\"위치구분\">제1교통센터</Col><Col id=\"chk\">0</Col></Row><Row><Col id=\"위치정보\">3-40-32</Col><Col id=\"위치구분\">제1교통센터</Col><Col id=\"chk\">0</Col></Row><Row><Col id=\"위치정보\">3-40-33</Col><Col id=\"위치구분\">제1교통센터</Col><Col id=\"chk\">0</Col></Row><Row><Col id=\"위치정보\">3-40-34</Col><Col id=\"위치구분\">제2교통센터</Col><Col id=\"chk\">0</Col></Row><Row><Col id=\"위치정보\">3-40-35</Col><Col id=\"위치구분\">제2교통센터</Col><Col id=\"chk\">0</Col></Row><Row><Col id=\"위치정보\">3-40-36</Col><Col id=\"위치구분\">제2교통센터</Col><Col id=\"chk\">0</Col></Row><Row><Col id=\"위치정보\">4-30-20</Col><Col id=\"위치구분\">제1교통센터</Col><Col id=\"chk\">0</Col></Row><Row><Col id=\"위치정보\">4-30-21</Col><Col id=\"위치구분\">제1교통센터</Col><Col id=\"chk\">0</Col></Row><Row><Col id=\"위치정보\">4-30-22</Col><Col id=\"위치구분\">제1교통센터</Col><Col id=\"chk\">0</Col></Row><Row><Col id=\"위치정보\">4-30-23</Col><Col id=\"위치구분\">제2교통센터</Col><Col id=\"chk\">0</Col></Row><Row><Col id=\"위치정보\">4-30-24</Col><Col id=\"위치구분\">제2교통센터</Col><Col id=\"chk\">0</Col></Row><Row><Col id=\"위치정보\">4-30-25</Col><Col id=\"위치구분\">제2교통센터</Col><Col id=\"chk\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPstnInfoRnbList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"위치구분\" type=\"STRING\" size=\"256\"/><Column id=\"위치정보\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","0",null,"1463","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("sub_tit01","0","0","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div01","50.00","478","100.00%","194",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan00_02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan00_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem03\" componentid=\"divEdtPop00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("3");
            obj.set_text("휴대폰 번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtHphone","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan00_02","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtHphone\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_02","10.00","98","305","1",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtCoNm\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtCoNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_value("가나라다(주)");
            obj.set_text("가나라다(주)");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("6");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("10");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan01_02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Div("divEdtPop00","280","274","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("11");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtAplcnt","0","0","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form.divEdtPop00.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            this.divForm.form.Div01.form.divEdtPop00.addChild(obj.name, obj);

            obj = new Button("btnPop",null,"0","40","40","0",null,null,null,null,null,this.divForm.form.Div01.form.divEdtPop00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.divForm.form.Div01.form.divEdtPop00.addChild(obj.name, obj);

            obj = new Panel("sub_tit02","0","0","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("9");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div02","50.00","478","100.00%","363",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan00","0","560","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("1");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_horizontalgap("20");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan00_02\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("0");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtCtrtNo","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_value("ABC-123456");
            obj.set_text("ABC-123456");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan00_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtCtrtNo\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("4");
            obj.set_text("계약명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Div("divEdtPop00","280","274","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edtCtrtNm","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.Div02.form.divEdtPop00.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            obj.set_value("가나다라 인천국제공항 사무실 임대계약");
            obj.set_text("가나다라 인천국제공항 사무실 임대계약");
            this.divForm.form.Div02.form.divEdtPop00.addChild(obj.name, obj);

            obj = new Button("btnPop","edtCtrtNm:-40","0","40","40",null,null,null,null,null,null,this.divForm.form.Div02.form.divEdtPop00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.divForm.form.Div02.form.divEdtPop00.addChild(obj.name, obj);

            obj = new Panel("pan00_02","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"divEdtPop00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00","95","385","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("7");
            obj.set_text("위치정보");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","95.00","385","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("8");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Grid("grdPstnInfoRnb","730.00","173","100.00%","220",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("9");
            obj.set_binddataset("dsPstnInfoRnbList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"위치구분\"/><Cell col=\"2\" text=\"위치정보(룸번호)\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:위치구분\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:위치정보\" displaytype=\"text\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","10.00","98","305","266",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"grdPstnInfoRnb\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","60","100.00%","266",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("11");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00","30","50","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_text("신청자정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00","1390.00","18","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02","710.00","50","50.00%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 20px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_00","30","50","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("6");
            obj.set_text("신청위치 정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","1390.00","18","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_00","710.00","50","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("8");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 20px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle03","30","50","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("10");
            obj.set_text("고객정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button03_01","1390.00","18","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel03_01","710.00","50","50.00%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("12");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 20px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button03_01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit03","0","0","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("13");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle03\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel03_01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div03","50.00","478","100.00%","696",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("14");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan01_02","10.00","98","305","1",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan01_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_01\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edt00_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("0");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("4");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan01_02\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("5");
            obj.set_text("대표자성명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("6");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan02_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_01_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("8");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan02_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan02_02\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("9");
            obj.set_text("대표전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00_00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("10");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan02_02","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("11");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_01_00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("12");
            obj.set_text("사업자 등록번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("13");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan03_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("14");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_01_00_01\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("15");
            obj.set_text("법인등록번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00_00_00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("16");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan03_02","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("17");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_01_00_00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan03","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("18");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan03_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan03_02\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("19");
            obj.set_text("업종");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00_02","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("20");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan04_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("21");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_01_00_02\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("22");
            obj.set_text("업태");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00_00_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("23");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan04_02","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("24");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_01_00_00_01\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan04","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("25");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan04_02\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel00","0.00","0","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("26");
            obj.set_text("사업자등록주소/우편번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Div("divEdtPop","780.00","635","305","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("27");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit00","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.Div03.form.divEdtPop.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            this.divForm.form.Div03.form.divEdtPop.addChild(obj.name, obj);

            obj = new Button("btnPop","Edit00:-40","0","40","40",null,null,null,null,null,null,this.divForm.form.Div03.form.divEdtPop.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.divForm.form.Div03.form.divEdtPop.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00","360","637","305","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("28");
            obj.set_readonly("true");
            obj.set_flexgrow("2");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panAddress","200","641","100%","45",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("29");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divEdtPop\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Edit("edt00_00","0.00","46","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("30");
            obj.set_text("");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan05_01","20.00","0","980","136",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("31");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem03\" componentid=\"panAddress\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("pan05","193","631","100%","147",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("32");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan05_01\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("staLabel00_02","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("33");
            obj.set_text("사업자등록증");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("Button00","813","76","120","34",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("34");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_file_1","124","58","116","34",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("35");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnFile","433","58","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("36");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panTitle","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("37");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("38");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static01","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("39");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static02","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("40");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFileNum","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("41");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1","512","135","125","34",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("42");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panBtnDel","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("43");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_1\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("Panel00","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("44");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Grid("Grid00","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("45");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("panFile","0","42","100.00%","161",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("46");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Div("divPopBtn","0","divForm:0",null,"60","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","789.97","10","100","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Button("btnClose","789.97","10","100","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Div("divGuide00","1600.00","145","450","385",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_visible("false");
            obj.set_cssclass("div_GD_Tip");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","20.00","205","34","34",null,null,null,null,null,null,this.divGuide00.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.divGuide00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","64.00","205","34","34",null,null,null,null,null,null,this.divGuide00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divGuide00.addChild(obj.name, obj);

            obj = new Static("sta00_00","20.00","255","375","50",null,null,null,null,null,null,this.divGuide00.form);
            obj.set_taborder("2");
            obj.set_text("접혀있을때 class : btn_WF_ACPlus 로 접음");
            this.divGuide00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.Div01.form.divEdtPop00.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01.form.divEdtPop00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.edtAplcnt.set_taborder("0");
                p.edtAplcnt.set_cssclass("edt_WF_EdtSch");
                p.edtAplcnt.set_readonly("true");
                p.edtAplcnt.move("0","0","100%","40",null,null);

                p.btnPop.set_taborder("1");
                p.btnPop.set_cssclass("btn_WF_EdtSch");
                p.btnPop.move(null,"0","40","40","0",null);
            	}
            );
            this.divForm.form.Div01.form.divEdtPop00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div01.form.divEdtPop00.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div01.form.divEdtPop00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.Div01.form.divEdtPop00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div01.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.pan00.set_taborder("0");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("0","60","100.00%","97",null,null);

                p.staLabel00.set_taborder("1");
                p.staLabel00.set_text("신청자");
                p.staLabel00.set_cssclass("sta_WF_Label");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.pan00_01.set_taborder("2");
                p.pan00_01.set_type("vertical");
                p.pan00_01.set_flexgrow("1");
                p.pan00_01.set_minwidth("");
                p.pan00_01.move("10.00","98","305","86",null,null);

                p.staLabel00_01.set_taborder("3");
                p.staLabel00_01.set_text("휴대폰 번호");
                p.staLabel00_01.set_cssclass("sta_WF_Label");
                p.staLabel00_01.move("10","98","100%","46",null,null);

                p.edtHphone.set_taborder("4");
                p.edtHphone.set_readonly("true");
                p.edtHphone.move("10.00","158","100%","40",null,null);

                p.pan00_02.set_taborder("5");
                p.pan00_02.set_type("vertical");
                p.pan00_02.set_flexgrow("1");
                p.pan00_02.set_minwidth("");
                p.pan00_02.move("10.00","98","305","86",null,null);

                p.pan01_02.set_taborder("9");
                p.pan01_02.set_type("vertical");
                p.pan01_02.set_flexgrow("1");
                p.pan01_02.move("10.00","98","305","1",null,null);

                p.pan01_01.set_taborder("8");
                p.pan01_01.set_type("vertical");
                p.pan01_01.set_flexgrow("1");
                p.pan01_01.move("10.00","98","305","86",null,null);

                p.edtCoNm.set_taborder("7");
                p.edtCoNm.set_readonly("true");
                p.edtCoNm.set_value("가나라다(주)");
                p.edtCoNm.move("10.00","158","100%","40",null,null);

                p.staLabel01_00.set_taborder("6");
                p.staLabel01_00.set_text("회사명");
                p.staLabel01_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00.move("10","98","100%","46",null,null);

                p.pan01.set_taborder("10");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.set_flexshrink("1");
                p.pan01.set_fittocontents("height");
                p.pan01.move("0","60","100.00%","97",null,null);

                p.divEdtPop00.set_taborder("11");
                p.divEdtPop00.set_text("Div00");
                p.divEdtPop00.set_formscrollbartype("none none");
                p.divEdtPop00.set_formscrolltype("none");
                p.divEdtPop00.set_flexgrow("1");
                p.divEdtPop00.move("280","274","100%","40",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div01.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div02.form.divEdtPop00.form
            obj = new Layout("default","",0,0,this.divForm.form.Div02.form.divEdtPop00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.edtCtrtNm.set_taborder("0");
                p.edtCtrtNm.set_cssclass("edt_WF_EdtSch");
                p.edtCtrtNm.set_readonly("true");
                p.edtCtrtNm.set_value("가나다라 인천국제공항 사무실 임대계약");
                p.edtCtrtNm.move("0","0",null,"40","0",null);

                p.btnPop.set_taborder("1");
                p.btnPop.set_cssclass("btn_WF_EdtSch");
                p.btnPop.move("edtCtrtNm:-40","0","40","40",null,null);
            	}
            );
            this.divForm.form.Div02.form.divEdtPop00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div02.form.divEdtPop00.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div02.form.divEdtPop00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.Div02.form.divEdtPop00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div02.form
            obj = new Layout("default","",0,0,this.divForm.form.Div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.pan00.set_taborder("1");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.set_fittocontents("height");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexwrap("wrap");
                p.pan00.move("0","560","100.00%","97",null,null);

                p.staLabel00_00_00.set_taborder("0");
                p.staLabel00_00_00.set_text("계약번호");
                p.staLabel00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00_00.move("10","98","100%","46",null,null);

                p.edtCtrtNo.set_taborder("2");
                p.edtCtrtNo.set_readonly("true");
                p.edtCtrtNo.set_value("ABC-123456");
                p.edtCtrtNo.move("10.00","158","100%","40",null,null);

                p.pan00_01.set_taborder("3");
                p.pan00_01.set_type("vertical");
                p.pan00_01.set_flexgrow("1");
                p.pan00_01.set_minwidth("");
                p.pan00_01.move("10.00","98","305","86",null,null);

                p.staLabel00_00.set_taborder("4");
                p.staLabel00_00.set_text("계약명");
                p.staLabel00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00.move("10","98","100%","46",null,null);

                p.divEdtPop00.set_taborder("5");
                p.divEdtPop00.set_text("Div00");
                p.divEdtPop00.set_formscrollbartype("none none");
                p.divEdtPop00.set_formscrolltype("none");
                p.divEdtPop00.set_flexgrow("1");
                p.divEdtPop00.move("280","274","100%","40",null,null);

                p.pan00_02.set_taborder("6");
                p.pan00_02.set_type("vertical");
                p.pan00_02.set_flexgrow("1");
                p.pan00_02.set_minwidth("");
                p.pan00_02.move("10.00","98","305","86",null,null);

                p.staLabel01_00_00.set_taborder("7");
                p.staLabel01_00_00.set_text("위치정보");
                p.staLabel01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00.move("95","385","100%","46",null,null);

                p.Panel00_01.set_taborder("8");
                p.Panel00_01.set_background("#ffffff");
                p.Panel00_01.set_flexcrossaxisalign("center");
                p.Panel00_01.move("95.00","385","100%","46",null,null);

                p.grdPstnInfoRnb.set_taborder("9");
                p.grdPstnInfoRnb.set_binddataset("dsPstnInfoRnbList");
                p.grdPstnInfoRnb.set_autofittype("col");
                p.grdPstnInfoRnb.move("730.00","173","100.00%","220",null,null);

                p.Panel00_00_00.set_taborder("10");
                p.Panel00_00_00.set_type("vertical");
                p.Panel00_00_00.set_flexgrow("1");
                p.Panel00_00_00.move("10.00","98","305","266",null,null);

                p.Panel01.set_taborder("11");
                p.Panel01.set_horizontalgap("20");
                p.Panel01.set_flexcrossaxiswrapalign("start");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_verticalgap("0");
                p.Panel01.set_spacing("0px 20px 10px 20px");
                p.Panel01.set_cssclass("pal_WF_DtlBg");
                p.Panel01.move("0","60","100.00%","266",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div02.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div02.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div02.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div03.form.divEdtPop.form
            obj = new Layout("default","",0,0,this.divForm.form.Div03.form.divEdtPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Edit00.set_taborder("0");
                p.Edit00.set_cssclass("edt_WF_EdtSch");
                p.Edit00.set_readonly("true");
                p.Edit00.move("0","0",null,"40","0",null);

                p.btnPop.set_taborder("1");
                p.btnPop.set_cssclass("btn_WF_EdtSch");
                p.btnPop.move("Edit00:-40","0","40","40",null,null);
            	}
            );
            this.divForm.form.Div03.form.divEdtPop.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div03.form.divEdtPop.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div03.form.divEdtPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.Div03.form.divEdtPop.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div03.form
            obj = new Layout("default","",0,0,this.divForm.form.Div03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.pan01_02.set_taborder("3");
                p.pan01_02.set_type("vertical");
                p.pan01_02.set_flexgrow("1");
                p.pan01_02.move("10.00","98","305","1",null,null);

                p.pan01_01.set_taborder("2");
                p.pan01_01.set_type("vertical");
                p.pan01_01.set_flexgrow("1");
                p.pan01_01.move("10.00","98","305","86",null,null);

                p.edt00_01.set_taborder("1");
                p.edt00_01.move("10.00","158","100%","40",null,null);

                p.staLabel01_00.set_taborder("0");
                p.staLabel01_00.set_text("업체명");
                p.staLabel01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel01_00.move("10","98","100%","46",null,null);

                p.pan01.set_taborder("4");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.set_flexshrink("1");
                p.pan01.set_fittocontents("height");
                p.pan01.move("0","60","100.00%","97",null,null);

                p.staLabel01_00_00.set_taborder("5");
                p.staLabel01_00_00.set_text("대표자성명");
                p.staLabel01_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel01_00_00.move("10","98","100%","46",null,null);

                p.edt00_01_00.set_taborder("6");
                p.edt00_01_00.move("10.00","158","100%","40",null,null);

                p.pan02_01.set_taborder("7");
                p.pan02_01.set_type("vertical");
                p.pan02_01.set_flexgrow("1");
                p.pan02_01.move("10.00","98","305","86",null,null);

                p.pan02.set_taborder("8");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.set_flexshrink("1");
                p.pan02.set_fittocontents("height");
                p.pan02.move("0","60","100.00%","97",null,null);

                p.staLabel01_00_00_00.set_taborder("9");
                p.staLabel01_00_00_00.set_text("대표전화번호");
                p.staLabel01_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00_00.move("10","98","100%","46",null,null);

                p.edt00_01_00_00.set_taborder("10");
                p.edt00_01_00_00.move("10.00","158","100%","40",null,null);

                p.pan02_02.set_taborder("11");
                p.pan02_02.set_type("vertical");
                p.pan02_02.set_flexgrow("1");
                p.pan02_02.move("10.00","98","305","86",null,null);

                p.staLabel01_00_00_01.set_taborder("12");
                p.staLabel01_00_00_01.set_text("사업자 등록번호");
                p.staLabel01_00_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel01_00_00_01.move("10","98","100%","46",null,null);

                p.edt00_01_00_01.set_taborder("13");
                p.edt00_01_00_01.move("10.00","158","100%","40",null,null);

                p.pan03_01.set_taborder("14");
                p.pan03_01.set_type("vertical");
                p.pan03_01.set_flexgrow("1");
                p.pan03_01.move("10.00","98","305","86",null,null);

                p.staLabel01_00_00_00_00.set_taborder("15");
                p.staLabel01_00_00_00_00.set_text("법인등록번호");
                p.staLabel01_00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00_00_00.move("10","98","100%","46",null,null);

                p.edt00_01_00_00_00.set_taborder("16");
                p.edt00_01_00_00_00.move("10.00","158","100%","40",null,null);

                p.pan03_02.set_taborder("17");
                p.pan03_02.set_type("vertical");
                p.pan03_02.set_flexgrow("1");
                p.pan03_02.move("10.00","98","305","86",null,null);

                p.pan03.set_taborder("18");
                p.pan03.set_horizontalgap("20");
                p.pan03.set_flexcrossaxiswrapalign("start");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_verticalgap("0");
                p.pan03.set_spacing("0px 20px 10px 20px");
                p.pan03.set_cssclass("pal_WF_DtlBg");
                p.pan03.set_flexshrink("1");
                p.pan03.set_fittocontents("height");
                p.pan03.move("0","60","100.00%","97",null,null);

                p.staLabel01_00_00_02.set_taborder("19");
                p.staLabel01_00_00_02.set_text("업종");
                p.staLabel01_00_00_02.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00_02.move("10","98","100%","46",null,null);

                p.edt00_01_00_02.set_taborder("20");
                p.edt00_01_00_02.move("10.00","158","100%","40",null,null);

                p.pan04_01.set_taborder("21");
                p.pan04_01.set_type("vertical");
                p.pan04_01.set_flexgrow("1");
                p.pan04_01.move("10.00","98","305","86",null,null);

                p.staLabel01_00_00_00_01.set_taborder("22");
                p.staLabel01_00_00_00_01.set_text("업태");
                p.staLabel01_00_00_00_01.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00_00_01.move("10","98","100%","46",null,null);

                p.edt00_01_00_00_01.set_taborder("23");
                p.edt00_01_00_00_01.move("10.00","158","100%","40",null,null);

                p.pan04_02.set_taborder("24");
                p.pan04_02.set_type("vertical");
                p.pan04_02.set_flexgrow("1");
                p.pan04_02.move("10.00","98","305","86",null,null);

                p.pan04.set_taborder("25");
                p.pan04.set_horizontalgap("20");
                p.pan04.set_flexcrossaxiswrapalign("start");
                p.pan04.set_flexwrap("wrap");
                p.pan04.set_verticalgap("0");
                p.pan04.set_spacing("0px 20px 10px 20px");
                p.pan04.set_cssclass("pal_WF_DtlBg");
                p.pan04.set_flexshrink("1");
                p.pan04.set_fittocontents("height");
                p.pan04.move("0","60","100.00%","97",null,null);

                p.staLabel00.set_taborder("26");
                p.staLabel00.set_text("사업자등록주소/우편번호");
                p.staLabel00.set_cssclass("sta_WF_Label");
                p.staLabel00.move("0.00","0","100%","46",null,null);

                p.divEdtPop.set_taborder("27");
                p.divEdtPop.set_text("Div00");
                p.divEdtPop.set_formscrollbartype("none none");
                p.divEdtPop.set_formscrolltype("none");
                p.divEdtPop.set_flexgrow("1");
                p.divEdtPop.move("780.00","635","305","40",null,null);

                p.edt00_00_00.set_taborder("28");
                p.edt00_00_00.set_readonly("true");
                p.edt00_00_00.set_flexgrow("2");
                p.edt00_00_00.move("360","637","305","40",null,null);

                p.panAddress.set_taborder("29");
                p.panAddress.set_horizontalgap("10");
                p.panAddress.move("200","641","100%","45",null,null);

                p.edt00_00.set_taborder("30");
                p.edt00_00.move("0.00","46","100%","40",null,null);

                p.pan05_01.set_taborder("31");
                p.pan05_01.set_type("vertical");
                p.pan05_01.set_flexgrow("1");
                p.pan05_01.set_fittocontents("height");
                p.pan05_01.set_verticalgap("10");
                p.pan05_01.set_minwidth("");
                p.pan05_01.move("20.00","0","980","136",null,null);

                p.pan05.set_taborder("32");
                p.pan05.set_horizontalgap("20");
                p.pan05.set_flexcrossaxiswrapalign("start");
                p.pan05.set_flexwrap("wrap");
                p.pan05.set_fittocontents("height");
                p.pan05.set_verticalgap("0");
                p.pan05.set_spacing("0px 20px 10px 20px");
                p.pan05.set_cssclass("pal_WF_DtlBg");
                p.pan05.move("193","631","100%","147",null,null);

                p.staLabel00_02.set_taborder("33");
                p.staLabel00_02.set_text("사업자등록증");
                p.staLabel00_02.set_cssclass("sta_WF_Label_E");
                p.staLabel00_02.set_fittocontents("width");
                p.staLabel00_02.move("0","44","305","46",null,null);

                p.Button00.set_taborder("34");
                p.Button00.set_text("샘플첨부파일명");
                p.Button00.set_cssclass("btn_WF_Small");
                p.Button00.set_fittocontents("width");
                p.Button00.move("813","76","120","34",null,null);

                p.btn_file_1.set_taborder("35");
                p.btn_file_1.set_text("파일선택");
                p.btn_file_1.set_cssclass("btn_WF_FileUp");
                p.btn_file_1.set_fittocontents("width");
                p.btn_file_1.move("124","58","116","34",null,null);

                p.panBtnFile.set_taborder("36");
                p.panBtnFile.set_flexgrow("1");
                p.panBtnFile.set_flexmainaxisalign("end");
                p.panBtnFile.set_horizontalgap("10");
                p.panBtnFile.move("433","58","305","46",null,null);

                p.panTitle.set_taborder("37");
                p.panTitle.set_cssclass("pan_WF_FileTitle");
                p.panTitle.set_flexwrap("wrap");
                p.panTitle.set_fittocontents("height");
                p.panTitle.move("0","124","100%","46",null,null);

                p.Static00.set_taborder("38");
                p.Static00.set_text("파일수 : ");
                p.Static00.set_fittocontents("width");
                p.Static00.move("88","123","48","46",null,null);

                p.Static01.set_taborder("39");
                p.Static01.set_text("0");
                p.Static01.set_fittocontents("width");
                p.Static01.move("165","143","9","46",null,null);

                p.Static02.set_taborder("40");
                p.Static02.set_text("개");
                p.Static02.set_fittocontents("width");
                p.Static02.move("293","131","13","46",null,null);

                p.panFileNum.set_taborder("41");
                p.panFileNum.set_flexgrow("1");
                p.panFileNum.set_horizontalgap("4");
                p.panFileNum.move("20","190","305","46",null,null);

                p.btn_del_file_1.set_taborder("42");
                p.btn_del_file_1.set_text("전체파일삭제");
                p.btn_del_file_1.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_1.set_fittocontents("width");
                p.btn_del_file_1.move("512","135","125","34",null,null);

                p.panBtnDel.set_taborder("43");
                p.panBtnDel.set_flexcrossaxisalign("center");
                p.panBtnDel.set_flexmainaxisalign("end");
                p.panBtnDel.set_flexgrow("1");
                p.panBtnDel.move("517","141","305","46",null,null);

                p.Panel00.set_taborder("44");
                p.Panel00.move("20","51","100%","46",null,null);

                p.Grid00.set_taborder("45");
                p.Grid00.set_binddataset("dsFile1");
                p.Grid00.set_autofittype("col");
                p.Grid00.set_cssclass("grd_WF_FileAdd");
                p.Grid00.move("20.00","114","100%","40",null,null);

                p.panFile.set_taborder("46");
                p.panFile.set_fittocontents("height");
                p.panFile.set_spacing("10px 20px 10px 20px");
                p.panFile.set_flexwrap("wrap");
                p.panFile.set_cssclass("pal_WF_DtlBg");
                p.panFile.set_verticalgap("4");
                p.panFile.move("0","42","100.00%","161",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div03.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div03.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div03.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sub_tit01.set_taborder("5");
                p.sub_tit01.set_background("#ffffff");
                p.sub_tit01.set_flexcrossaxisalign("end");
                p.sub_tit01.set_minheight("70");
                p.sub_tit01.set_maxheight("");
                p.sub_tit01.move("0","0","100%","70",null,null);

                p.Div01.set_taborder("0");
                p.Div01.set_text("Div00");
                p.Div01.set_cssclass("div_WF_Bg");
                p.Div01.set_fittocontents("height");
                p.Div01.move("50.00","478","100.00%","194",null,null);

                p.sub_tit02.set_taborder("9");
                p.sub_tit02.set_background("#ffffff");
                p.sub_tit02.set_flexcrossaxisalign("end");
                p.sub_tit02.set_minheight("70");
                p.sub_tit02.set_maxheight("");
                p.sub_tit02.move("0","0","100%","70",null,null);

                p.Div02.set_taborder("1");
                p.Div02.set_text("Div00");
                p.Div02.set_cssclass("div_WF_Bg");
                p.Div02.set_fittocontents("height");
                p.Div02.move("50.00","478","100.00%","363",null,null);

                p.staSubTitle02_00.set_taborder("2");
                p.staSubTitle02_00.set_text("신청자정보");
                p.staSubTitle02_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00.move("30","50","50%","50",null,null);

                p.Button00_00.set_taborder("3");
                p.Button00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00.set_visible("false");
                p.Button00_00.move("1390.00","18","34","34",null,null);

                p.Panel01_02.set_taborder("4");
                p.Panel01_02.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02.set_spacing("0px 20px");
                p.Panel01_02.set_horizontalgap("10");
                p.Panel01_02.set_flexcrossaxisalign("center");
                p.Panel01_02.set_flexmainaxisalign("end");
                p.Panel01_02.move("710.00","50","50.00%","50",null,null);

                p.staSubTitle02_00_00.set_taborder("6");
                p.staSubTitle02_00_00.set_text("신청위치 정보");
                p.staSubTitle02_00_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_00.move("30","50","100%","50",null,null);

                p.Button00_00_00_00.set_taborder("7");
                p.Button00_00_00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_00_00.set_visible("false");
                p.Button00_00_00_00.move("1390.00","18","34","34",null,null);

                p.Panel01_02_00.set_taborder("8");
                p.Panel01_02_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_00.set_spacing("0px 20px");
                p.Panel01_02_00.set_horizontalgap("10");
                p.Panel01_02_00.set_flexcrossaxisalign("center");
                p.Panel01_02_00.set_flexmainaxisalign("end");
                p.Panel01_02_00.move("710.00","50","100%","50",null,null);

                p.staSubTitle03.set_taborder("10");
                p.staSubTitle03.set_text("고객정보");
                p.staSubTitle03.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle03.move("30","50","50%","50",null,null);

                p.Button03_01.set_taborder("11");
                p.Button03_01.set_cssclass("btn_WF_ACMinus");
                p.Button03_01.set_visible("false");
                p.Button03_01.move("1390.00","18","34","34",null,null);

                p.Panel03_01.set_taborder("12");
                p.Panel03_01.set_cssclass("pal_WF_TitBtnBg");
                p.Panel03_01.set_spacing("0px 20px");
                p.Panel03_01.set_horizontalgap("10");
                p.Panel03_01.set_flexcrossaxisalign("center");
                p.Panel03_01.set_flexmainaxisalign("end");
                p.Panel03_01.move("710.00","50","50.00%","50",null,null);

                p.sub_tit03.set_taborder("13");
                p.sub_tit03.set_background("#ffffff");
                p.sub_tit03.set_flexcrossaxisalign("end");
                p.sub_tit03.set_minheight("70");
                p.sub_tit03.set_maxheight("");
                p.sub_tit03.move("0","0","100%","70",null,null);

                p.Div03.set_taborder("14");
                p.Div03.set_text("Div00");
                p.Div03.set_cssclass("div_WF_Bg");
                p.Div03.set_fittocontents("height");
                p.Div03.move("50.00","478","100.00%","696",null,null);
            	}
            );
            obj.set_type("vertical");
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
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divPopBtn.form
            obj = new Layout("default","",0,0,this.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnSave.set_taborder("0");
                p.btnSave.set_text("저장");
                p.btnSave.set_cssclass("btn_WF_Yes");
                p.btnSave.set_fittocontents("width");
                p.btnSave.move("789.97","10","100","40",null,null);

                p.btnClose.set_taborder("1");
                p.btnClose.set_text("닫기");
                p.btnClose.set_cssclass("btn_WF_Yes");
                p.btnClose.set_fittocontents("width");
                p.btnClose.move("789.97","10","100","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
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
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            this.divPopBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divGuide00.form
            obj = new Layout("default","",0,0,this.divGuide00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00_00.set_taborder("0");
                p.Button00_00.set_cssclass("btn_WF_ACPlus");
                p.Button00_00.set_visible("false");
                p.Button00_00.move("20.00","205","34","34",null,null);

                p.Button00_00_00.set_taborder("1");
                p.Button00_00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_00.move("64.00","205","34","34",null,null);

                p.sta00_00.set_taborder("2");
                p.sta00_00.set_text("접혀있을때 class : btn_WF_ACPlus 로 접음");
                p.sta00_00.move("20.00","255","375","50",null,null);
            	}
            );
            this.divGuide00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGuide00.form
            obj = new Layout("mobile","",0,0,this.divGuide00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divGuide00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGuide00.form
            obj = new Layout("mobile","",0,0,this.divGuide00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divGuide00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("입주서비스 기본정보확인 및 등록");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("height");
                p.divForm.move("0","0",null,"1463","60",null);

                p.divPopBtn.set_taborder("1");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.move("0","divForm:0",null,"60","60",null);

                p.divGuide00.set_taborder("2");
                p.divGuide00.set_text("div00");
                p.divGuide00.set_visible("false");
                p.divGuide00.set_cssclass("div_GD_Tip");
                p.divGuide00.move("1600.00","145","450","385",null,null);
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
                p.divForm.move("20","50",null,"1122","20",null);

                p.divPopBtn.move("20","divForm:0",null,"80","20",null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divForm.form.Div01.form.edtHphone","value","dsGet","userMblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divForm.form.Div01.form.divEdtPop00.form.edtAplcnt","value","dsGet","userNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.Div02.form.edtCtrtNo","value","dsCtrtInfo","ctrtNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.Div02.form.divEdtPop00.form.edtCtrtNm","value","dsCtrtInfo","ctrtNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("LIF051M00.xfdl","xjs::TaskCom.xjs");
        this.registerScript("LIF051M00.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 통합정보 프로젝트
        *  @FileName 	LIF051M00.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/11/04
        *  @Desction    입주 > 입주서비스기본정보확인및등록
        *  @Author
        ************** 소스 수정 이력 ****************************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/11/07			김진섭						최초생성
        *******************************************************************************/
        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;  // 업무공통

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.userId;

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        	this.userId = this.objApp.gUser.userId;

        	//자동조회
        	this.cfnSearch();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	this.getSearchTransaction();
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
        	this.fnSave();
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.getSearchTransaction = function()
        {

        	var strSvcId    = "searchPrvsInq";
        	var strSvcUrl   = "member/prvsInq.do";
        	var inData      = "";
        	var outData     = "dsGet=dsGet dsCtrtInfo=dsCtrtInfoList dsPstnInfoRnbList=dsPstnInfoRnbList";
        	var strArg      = "id=" + this.userId;
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

        // 데이터 저장
        this.fnSave = function()
        {
        	var strSvcId    = "savePrvsStrg";
        	var strSvcUrl   = "member/prvsStrg.do";
        	var inData      = "dsGet=dsGet:A dsCtrtInfoList=dsCtrtInfo:U dsPstnInfoRnbList=dsPstnInfoRnbList:U";
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
        		case "searchPrvsInq":

        			if(this.dsCtrtInfo.rowcount == 0){
        				this.dsCtrtInfo.addRow();
        			}

        			// 공사직원은 탈퇴버튼 안보이기
        			//if(this.dsGet.getColumn(0, "iiacEmpYn") != "Y") {
        				//KJS임시막음 this.divForm.form.divPopBtn.form.btnWhdwl.visible = true;
        			//}
        			break;

        		case "savePrvsStrg" :
        			this.gfnAlertMsg("save", "MSG_001");
        			//this.cfnSearch();
        			break;
        	}
        };

        /**
        	sPopupId	// 페세지창을 구분하기 위한 ID
        	sRtn		// 메세지창에서 리턴 해주는 변수값 (JSON 형태의 스트링 리턴)
        **/
        // this.msgCallback = function(sPopupId, sRtn)
        // {
        // 	var oRtn = JSON.parse(sRtn);
        // 	if(sPopupId == "ctrt_del") {
        // 		if(oRtn.result == "Y") {
        // 			var chk = this.dsCtrtInfoList.extractRows("chk == " + 1);
        // 			if(chk.length > 0) {
        // 				this.dsCtrtInfoList.deleteMultiRows(chk);
        // 			}
        // 		}
        // 	}
        // 	else if(sPopupId == "saveBtn") {
        // 		if(oRtn.result == "Y") {
        // 			this.cfnSave();
        // 		}
        // 	}
        // };


        this.fnPopupCallback = function(sPopupId, oRtn)
        {
        	switch(sPopupId) {

        		case "btnCtrtChc_Popup" :  // 계약선택

        			trace("www111==>" + oRtn );
        			if(this.gfnIsNull(oRtn)) { return; }
        			oRtn = JSON.parse(oRtn);
        		    this.dsCtrtInfo.setColumn(0, "ctrtNo"     , oRtn.ctrtNo   );  // 계약번호
        			this.dsCtrtInfo.setColumn(0, "ctrtNm"     , oRtn.ctrtNm   );  // 계약명
        			//this.dsCstFcltOperMst.setColumn(0, "clmCustCd"  , oRtn.clmCustCd);  // 청구고객코드
        			//this.dsCstFcltOperMst.setColumn(0, "clmAddr"    , oRtn.clmAddr     );  // 청구주소
        			//this.dsCstFcltOperMst.setColumn(0, "pstnInfoRnb", oRtn.pstnInfoRnb     );  // 위치정보(룸번호)

        			break;

        // 		case "ctrtSearchPopup" :
        //
        // 			trace("www2222==>" + oRtn );
        // 			if(this.gfnIsNull(oRtn)) { return; }
        // 			oRtn = JSON.parse(oRtn);
        // 		    var nRow = this.dsCtrtInfoList.addRow();
        // 			this.dsCtrtInfoList.setColumn(nRow, "userId", this.userId);
        // 			this.dsCtrtInfoList.setColumn(nRow, "ctrtNo", objRtn.ctrtNo);
        // 			this.dsCtrtInfoList.setColumn(nRow, "ctrtNm", objRtn.ctrtNm);
        // 			this.dsCtrtInfoList.setColumn(nRow, "ctrtType", objRtn.ctrtType);
        // 			this.dsCtrtInfoList.setColumn(nRow, "ctrtTypeNm", objRtn.ctrtTypeNm);
        // 			this.dsCtrtInfoList.setColumn(nRow, "ctrtYmd", objRtn.ctrtYmd);
        // 			this.dsCtrtInfoList.setColumn(nRow, "ctrtBgngYmd", objRtn.ctrtBgngYmd);
        // 			this.dsCtrtInfoList.setColumn(nRow, "ctrtEndYmd", objRtn.ctrtEndYmd);
        //
        // 			break;

        		default :
        			break;
        	}
        }


        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        /*-----------------------------------------------------------------------------------------------*
        * @description : 닫기 버튼 클릭
        *-------------------------------------------------------------------------------------------------*/
        this.divPopBtn_btnClose_onclick = function(obj,e)
        {
        	this.close();
        };


        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // 계약정보 팝업
        // this.divForm_Div01_divGrd_btnGrdRegi_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        // 	var sTitle = "계약신청_계약정보 연결";
        // 	var objArg   = {};
        //
        // 	var objOption = {
        // 		popuptype: "modal"	//modal,modaless
        // 		, autosize: true
        // 		, title: sTitle
        // 		, resize: true
        // 		, titlebar: true
        // 	};
        // 	var sPopupCallBack = "fnPopupCallback";
        //
        // 	this.gfnOpenPopup("ctrtSearchPopup", "work::COM/sysMng/COM024P063.xfdl", objArg, sPopupCallBack, objOption);
        // };

        // 계정정보 삭제
        // this.divForm_Div01_divGrd_btnGrdDel_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        // 	var chk = this.dsCtrtInfoList.findRow("chk", 1);
        // 	if(chk != -1) {
        // 		this.gfnConfirmMsg("ctrt_del", "MSG_005", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        // 	} else {
        // 		this.gfnAlertMsg("msg", "MSG_006");
        // 	}
        // };

        // 기본정보등록 저장
        this.divBtn_btnSave_onclick = function(obj,e)
        {
        	//if(this.gfnDsIsUpdated(this.dsGet) != true && this.gfnDsIsUpdated(this.dsCtrtInfoList) != true) {
        	if(this.gfnDsIsUpdated(this.dsCtrtInfo) != true) {
        		this.gfnAlertMsg("msg", "MSG_004");
        	} else {
        		this.gfnConfirmMsg("saveBtn", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"], "", ["사용자 정보 변경"]);
        	}
        };

        this.divForm_divPopBtn_Button00_01_onclick = function(obj,e)
        {
        	var sMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        	var sMenuUrl = 'work::COM/sysMng/COM001P051.xfdl';
        	var actNm = '계정권한 신청';
        	this.gfnPageOpen(sMenuId, sMenuUrl, actNm, null);
        };


        /**************************************************************************
         * @name : divForm_Div02_divEdtPop00_btnPop_onclick
         * @description : 계약명 돋보기버튼 클릭
         ***************************************************************************/
        this.divForm_Div02_divEdtPop00_btnPop_onclick = function(obj,e)
        {
        	var oOption = { title:"계약선택", titlebar:true, width:900, height:700 };
        	this.gfnOpenPopup("btnCtrtChc_Popup", "work::CST/COM/CST002P01.xfdl", "", "fnPopupCallback", oOption);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.Div02.form.divEdtPop00.form.btnPop.addEventHandler("onclick",this.divForm_Div02_divEdtPop00_btnPop_onclick,this);
            this.divForm.form.Div03.form.btn_file_1.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.Div03.form.btn_del_file_1.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div03.form.Grid00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div03.form.Grid00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divPopBtn.form.btnSave.addEventHandler("onclick",this.divBtn_btnSave_onclick,this);
            this.divPopBtn.form.btnClose.addEventHandler("onclick",this.divPopBtn_btnClose_onclick,this);
        };
        this.loadIncludeScript("LIF051M00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
