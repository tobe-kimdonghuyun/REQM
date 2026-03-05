(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM001M05");
            this.set_titletext("개인정보 수정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGet", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"acntAutzrId\" type=\"STRING\" size=\"256\"/><Column id=\"acntAutzrNm\" type=\"STRING\" size=\"256\"/><Column id=\"pswd\" type=\"STRING\" size=\"256\"/><Column id=\"eml\" type=\"STRING\" size=\"256\"/><Column id=\"userTelno\" type=\"STRING\" size=\"256\"/><Column id=\"userMblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"coId\" type=\"STRING\" size=\"256\"/><Column id=\"coNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptId\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"empExtNo\" type=\"STRING\" size=\"256\"/><Column id=\"emlRcptnYn\" type=\"STRING\" size=\"256\"/><Column id=\"smsRcptnPrgrsYn\" type=\"STRING\" size=\"256\"/><Column id=\"smsRcptnNewYn\" type=\"STRING\" size=\"256\"/><Column id=\"smsRcptnAcntYn\" type=\"STRING\" size=\"256\"/><Column id=\"flrplnPrmIp\" type=\"STRING\" size=\"256\"/><Column id=\"iiacEmpYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCtrtInfoList", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNm\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtType\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtTypeNm\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtYmd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtEndYmd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIpBand", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdNm\">사용안함</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPw", this);
            obj._setContents("<ColumnInfo><Column id=\"nowPswd\" type=\"STRING\" size=\"256\"/><Column id=\"newPswd01\" type=\"STRING\" size=\"256\"/><Column id=\"newPswd02\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divGuide","1590.00","135","450","385",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("false");
            obj.set_cssclass("div_GD_Tip");
            this.addChild(obj.name, obj);

            obj = new Div("divTitle","0","0",null,"60","60",null,null,null,"50",null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","70",null,"1112","60",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","50.00","478","100.00%","530",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02","710.00","50","100%","50",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("54");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button00_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00","1390.00","18","34","34",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("53");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("false");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","1362.00","10","34","34",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("52");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00","30","50","100%","50",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("51");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("sub_tit01","0","0","100%","50",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("55");
            obj.set_background("#ffffff");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan00_02\"/><PanelItem id=\"PanelItem03\" componentid=\"pan00_03\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtUserId","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("아이디");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtUserId\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("5");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_02","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtUserNm\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("19");
            obj.set_text("계정관리자(승인자)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_03","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("21");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAcntAutzrId\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtAcntAutzrId","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("20");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("14");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan02_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem02\" componentid=\"divEdtPop00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan03_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("34");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan01_01_01_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan03_03","10.00","98","305","1",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("50");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan03_02","10.00","98","305","1",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("49");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel01_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("10");
            obj.set_text("휴대전화번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan01_01_01_00","20.00","95","100%","48",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("33");
            obj.set_type("horizontal");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"cmbIpBand\"/><PanelItem id=\"PanelItem02\" componentid=\"edtFlrplnPrmIp01\"/><PanelItem id=\"PanelItem05\" componentid=\"staLabel01_00_01_00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"edtFlrplnPrmIp02\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtFlrplnPrmIp02","180.00","114","30%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("32");
            obj.set_readonly("true");
            obj.set_flexgrow("1");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_01_00_00_00","10","98","6","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("31");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtFlrplnPrmIp01","180.00","114","30%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("30");
            obj.set_readonly("true");
            obj.set_flexgrow("1");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Combo("cmbIpBand","-60.00","65","30%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("29");
            obj.set_flexgrow("1");
            obj.set_innerdataset("dsIpBand");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("사용안함");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("28");
            obj.set_text("도면허용 IP");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan02_03","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("26");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtEmpExtNo\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtEmpExtNo","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("27");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtUserMblTelno","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("11");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan01_02","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02\"/><PanelItem id=\"PanelItem01\" componentid=\"edtUserMblTelno\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("22");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtUserTelno","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("23");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan01_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtEml\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtEml","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("8");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("7");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan01_03","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("24");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtUserTelno\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("16");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan02_02","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("17");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01\"/><PanelItem id=\"PanelItem02\" componentid=\"divEdtPop\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("25");
            obj.set_text("내선번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("36");
            obj.set_text("서비스진행상황(이메일)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Radio("rdoEmlRcptnYn","127","203","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("43");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divForm_form_Div00_form_rdoEmlRcptnYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div00_form_rdoEmlRcptnYn_innerdataset", obj);
            divForm_form_Div00_form_rdoEmlRcptnYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div00_form_rdoEmlRcptnYn_innerdataset);
            obj.set_text("계약선택");
            obj.set_value("0");
            obj.set_index("0");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan04_01","10.00","98","200","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("37");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoEmlRcptnYn\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("44");
            obj.set_text("서비스진행상황(SMS)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Radio("rdoSmsRcptnPrgrsYn","127","203","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("46");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divForm_form_Div00_form_rdoSmsRcptnPrgrsYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div00_form_rdoSmsRcptnPrgrsYn_innerdataset", obj);
            divForm_form_Div00_form_rdoSmsRcptnPrgrsYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div00_form_rdoSmsRcptnPrgrsYn_innerdataset);
            obj.set_text("계약선택");
            obj.set_value("0");
            obj.set_index("0");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan04_02","10.00","98","200","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("45");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoSmsRcptnPrgrsYn\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("38");
            obj.set_text("뉴스 및 이벤트(SMS)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Radio("rdoSmsRcptnNewYn","127","203","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("47");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divForm_form_Div00_form_rdoSmsRcptnNewYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div00_form_rdoSmsRcptnNewYn_innerdataset", obj);
            divForm_form_Div00_form_rdoSmsRcptnNewYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div00_form_rdoSmsRcptnNewYn_innerdataset);
            obj.set_text("계약선택");
            obj.set_value("0");
            obj.set_index("0");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan04_03","10.00","98","200","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("39");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoSmsRcptnNewYn\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("40");
            obj.set_text("승인요청");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Radio("rdoSmsRcptnAcntYn","127","203","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("48");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divForm_form_Div00_form_rdoSmsRcptnAcntYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div00_form_rdoSmsRcptnAcntYn_innerdataset", obj);
            divForm_form_Div00_form_rdoSmsRcptnAcntYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div00_form_rdoSmsRcptnAcntYn_innerdataset);
            obj.set_text("계약선택");
            obj.set_value("0");
            obj.set_index("0");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan04_04","10.00","98","200","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("41");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoSmsRcptnAcntYn\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("13");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan01_02\"/><PanelItem id=\"PanelItem03\" componentid=\"pan01_03\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("18");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan02_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan02_02\"/><PanelItem id=\"PanelItem03\" componentid=\"pan02_03\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan03","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("35");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"pan03_01\"/><PanelItem id=\"PanelItem01\" componentid=\"pan03_02\"/><PanelItem id=\"PanelItem02\" componentid=\"pan03_03\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan04","0","60","100%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("42");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_01\"/><PanelItem id=\"PanelItem04\" componentid=\"pan04_02\"/><PanelItem id=\"PanelItem02\" componentid=\"pan04_03\"/><PanelItem id=\"PanelItem03\" componentid=\"pan04_04\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Div("divEdtPop00","43.00","393","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("56");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtCoNm","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.Div00.form.divEdtPop00.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            this.divForm.form.Div00.form.divEdtPop00.addChild(obj.name, obj);

            obj = new Button("btnPop","edtCoNm:-40","0","40","40",null,null,null,null,null,null,this.divForm.form.Div00.form.divEdtPop00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.divForm.form.Div00.form.divEdtPop00.addChild(obj.name, obj);

            obj = new Div("divEdtPop","43.00","393","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("57");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtDeptNm","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.Div00.form.divEdtPop.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            this.divForm.form.Div00.form.divEdtPop.addChild(obj.name, obj);

            obj = new Button("btnPop","edtDeptNm:-40","0","40","40",null,null,null,null,null,null,this.divForm.form.Div00.form.divEdtPop.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.divForm.form.Div00.form.divEdtPop.addChild(obj.name, obj);

            obj = new Div("Div01","50.00","478","100.00%","200",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit01","0","0","100%","50",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("18");
            obj.set_background("#ffffff");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel05_01","10","98","305","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("변경비밀번호확인");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan00","0","560","100%","146",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 0px 10px 0px ");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel04_02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel04_02","0","685","100%","42",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("4");
            obj.set_spacing("0px 20px 0px 20px");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("20");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00\"/><PanelItem id=\"PanelItem03\" componentid=\"btnChangePw\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Button("btnChangePw","1268","158","120","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("12");
            obj.set_text("변경");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan00_01_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtNewPswd01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtNewPswd01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("11");
            obj.set_readonly("false");
            obj.set_password("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("6");
            obj.set_text("변경비밀번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan00_01_00_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtNowPswd\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtNowPswd","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("9");
            obj.set_readonly("false");
            obj.set_password("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("8");
            obj.set_text("현재비밀번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtNewPswd02","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("13");
            obj.set_readonly("false");
            obj.set_password("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_02","710.00","50","100%","50",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("17");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button00_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","1390.00","18","34","34",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("false");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00","1362.00","10","34","34",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00","30","50","100%","50",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("14");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan04_02","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("1");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtNewPswd02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan04","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("2");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"pan00_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"pan00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan04_02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta00","20","20","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("3");
            obj.set_text("비밀번호는 9자리 이상이며, 반드시 특수문자를 포함해야 합니다.  [ ! @ # $ % ^ & * ( ) ]");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Div("Div02","50.00","508","100.00%","342",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit01","0","0","100%","50",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("7");
            obj.set_background("#ffffff");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","292",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("10");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divGrd\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("Button00_00","1362.00","10","34","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00","30","50","100%","50",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("3");
            obj.set_text("계약정보 목록");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","1390.00","18","34","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("false");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_02","710.00","50","100%","50",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("6");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button00_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Div("divGrd","0","30","100%","204",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn",null,"0","450","34","0",null,null,null,null,null,this.divForm.form.Div02.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("width");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnGrdDel\"/><PanelItem id=\"PanelItem00\" componentid=\"btnGrdRegi\"/></Contents>");
            this.divForm.form.Div02.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdCtrtInfoList","0","44","100.00%","160",null,null,null,null,null,null,this.divForm.form.Div02.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsCtrtInfoList");
            obj.set_autofittype("col");
            obj.getSetter("uFunction").set("checkbox");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"59\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"계약번호\"/><Cell col=\"2\" text=\"계약명\"/><Cell col=\"3\" text=\"계약상태\"/><Cell col=\"4\" text=\"계약유형명\"/><Cell col=\"5\" text=\"계약일\"/><Cell col=\"6\" text=\"계약시작일\"/><Cell col=\"7\" text=\"계약종료일\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:ctrtNo\" displaytype=\"text\" textAlign=\"center\" cssclass=\"CellLink\"/><Cell col=\"2\" text=\"bind:ctrtNm\" displaytype=\"text\" textAlign=\"left\" tooltiptext=\"bind:ctrtNm\"/><Cell col=\"3\" text=\"bind:계약상태\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:ctrtTypeNm\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:ctrtYmd\" displaytype=\"date\" cssclass=\"expr:state==&apos;0&apos;?&apos;CellTxtRed&apos;:&apos;CellTxtBlue&apos;\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" text=\"bind:ctrtBgngYmd\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" text=\"bind:ctrtEndYmd\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.divForm.form.Div02.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","804.00","10","45","34",null,null,null,null,null,null,this.divForm.form.Div02.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("true");
            this.divForm.form.Div02.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdRegi","774.00","10","45","34",null,null,null,null,null,null,this.divForm.form.Div02.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("연결");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_visible("true");
            this.divForm.form.Div02.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","200","34",null,null,null,null,null,null,this.divForm.form.Div02.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("총 <fc v=\'#1e4ebe\'>100</fc>건");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            this.divForm.form.Div02.form.divGrd.addChild(obj.name, obj);

            obj = new Static("sta00","20","20","100%","57",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("1");
            obj.set_text("일반사용자계정은 계정관리자가 연결한 계약명만 연결이 가능합니다. (계정관리자가 계약 연결 및 지정시 계약내용 안보임)\r\n계약연결 미지정시에는 서비스신청시 수기등록을 선택하여 신청이 가능합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Div("divPopBtn","0","1540","99.99577482641578%","60",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnWhdwl","217.00","10","120","40",null,null,null,null,null,null,this.divForm.form.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("탈퇴하기");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.divForm.form.divPopBtn.addChild(obj.name, obj);

            obj = new Button("Button00_01","217.00","10","120","40",null,null,null,null,null,null,this.divForm.form.divPopBtn.form);
            obj.set_taborder("2");
            obj.set_text("권한신청");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.divForm.form.divPopBtn.addChild(obj.name, obj);

            obj = new Button("Button00_00","btnWhdwl:10","10","100","40",null,null,null,null,null,null,this.divForm.form.divPopBtn.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            this.divForm.form.divPopBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divGuide.form
            obj = new Layout("default","",0,0,this.divGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

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
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.Div00.form.divEdtPop00.form
            obj = new Layout("default","",0,0,this.divForm.form.Div00.form.divEdtPop00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.edtCoNm.set_taborder("0");
                p.edtCoNm.set_cssclass("edt_WF_EdtSch");
                p.edtCoNm.set_readonly("true");
                p.edtCoNm.move("0","0",null,"40","0",null);

                p.btnPop.set_taborder("1");
                p.btnPop.set_cssclass("btn_WF_EdtSch");
                p.btnPop.move("edtCoNm:-40","0","40","40",null,null);
            	}
            );
            this.divForm.form.Div00.form.divEdtPop00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div00.form.divEdtPop00.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div00.form.divEdtPop00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.Div00.form.divEdtPop00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div00.form.divEdtPop.form
            obj = new Layout("default","",0,0,this.divForm.form.Div00.form.divEdtPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.edtDeptNm.set_taborder("0");
                p.edtDeptNm.set_cssclass("edt_WF_EdtSch");
                p.edtDeptNm.set_readonly("true");
                p.edtDeptNm.move("0","0",null,"40","0",null);

                p.btnPop.set_taborder("1");
                p.btnPop.set_cssclass("btn_WF_EdtSch");
                p.btnPop.move("edtDeptNm:-40","0","40","40",null,null);
            	}
            );
            this.divForm.form.Div00.form.divEdtPop.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div00.form.divEdtPop.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div00.form.divEdtPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.Div00.form.divEdtPop.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div00.form.divEdtPop.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div00.form.divEdtPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.Div00.form.divEdtPop.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div00.form
            obj = new Layout("default","",0,0,this.divForm.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel01_02.set_taborder("54");
                p.Panel01_02.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02.set_spacing("0px 10px");
                p.Panel01_02.set_horizontalgap("10");
                p.Panel01_02.set_flexcrossaxisalign("center");
                p.Panel01_02.set_flexmainaxisalign("end");
                p.Panel01_02.move("710.00","50","100%","50",null,null);

                p.Button00_00.set_taborder("53");
                p.Button00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00.set_visible("false");
                p.Button00_00.move("1390.00","18","34","34",null,null);

                p.Button00.set_taborder("52");
                p.Button00.set_cssclass("btn_WF_ACPlus");
                p.Button00.set_visible("false");
                p.Button00.move("1362.00","10","34","34",null,null);

                p.staSubTitle02_00.set_taborder("51");
                p.staSubTitle02_00.set_text("기본정보");
                p.staSubTitle02_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00.move("30","50","100%","50",null,null);

                p.sub_tit01.set_taborder("55");
                p.sub_tit01.set_background("#ffffff");
                p.sub_tit01.move("0","0","100%","50",null,null);

                p.pan00.set_taborder("0");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("0","60","100.00%","96",null,null);

                p.edtUserId.set_taborder("2");
                p.edtUserId.set_readonly("true");
                p.edtUserId.move("10.00","158","100%","40",null,null);

                p.staLabel00.set_taborder("1");
                p.staLabel00.set_text("아이디");
                p.staLabel00.set_cssclass("sta_WF_Label");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.pan00_01.set_taborder("3");
                p.pan00_01.set_type("vertical");
                p.pan00_01.set_flexgrow("1");
                p.pan00_01.set_minwidth("");
                p.pan00_01.move("10.00","98","305","86",null,null);

                p.staLabel00_01.set_taborder("4");
                p.staLabel00_01.set_text("성명");
                p.staLabel00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel00_01.move("10","98","100%","46",null,null);

                p.edtUserNm.set_taborder("5");
                p.edtUserNm.set_readonly("false");
                p.edtUserNm.move("10.00","158","100%","40",null,null);

                p.pan00_02.set_taborder("6");
                p.pan00_02.set_type("vertical");
                p.pan00_02.set_flexgrow("1");
                p.pan00_02.set_minwidth("");
                p.pan00_02.move("10.00","98","305","86",null,null);

                p.staLabel01_00_00.set_taborder("19");
                p.staLabel01_00_00.set_text("계정관리자(승인자)");
                p.staLabel01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00.move("10","98","100%","46",null,null);

                p.pan00_03.set_taborder("21");
                p.pan00_03.set_type("vertical");
                p.pan00_03.set_flexgrow("1");
                p.pan00_03.move("10.00","98","305","86",null,null);

                p.edtAcntAutzrId.set_taborder("20");
                p.edtAcntAutzrId.set_readonly("true");
                p.edtAcntAutzrId.move("10.00","158","100%","40",null,null);

                p.staLabel03_00.set_taborder("14");
                p.staLabel03_00.set_text("회사명");
                p.staLabel03_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00.move("10","98","100%","46",null,null);

                p.pan02_01.set_taborder("15");
                p.pan02_01.set_type("vertical");
                p.pan02_01.set_flexgrow("1");
                p.pan02_01.move("10.00","98","305","86",null,null);

                p.pan03_01.set_taborder("34");
                p.pan03_01.set_type("vertical");
                p.pan03_01.set_flexgrow("1");
                p.pan03_01.move("10.00","98","305","86",null,null);

                p.pan03_03.set_taborder("50");
                p.pan03_03.set_type("vertical");
                p.pan03_03.set_flexgrow("1");
                p.pan03_03.move("10.00","98","305","1",null,null);

                p.pan03_02.set_taborder("49");
                p.pan03_02.set_type("vertical");
                p.pan03_02.set_flexgrow("1");
                p.pan03_02.move("10.00","98","305","1",null,null);

                p.staLabel01_02.set_taborder("10");
                p.staLabel01_02.set_text("휴대전화번호");
                p.staLabel01_02.set_cssclass("sta_WF_Label_E");
                p.staLabel01_02.move("10","98","100%","46",null,null);

                p.pan01_01_01_00.set_taborder("33");
                p.pan01_01_01_00.set_type("horizontal");
                p.pan01_01_01_00.set_flexgrow("1");
                p.pan01_01_01_00.set_horizontalgap("5");
                p.pan01_01_01_00.move("20.00","95","100%","48",null,null);

                p.edtFlrplnPrmIp02.set_taborder("32");
                p.edtFlrplnPrmIp02.set_readonly("true");
                p.edtFlrplnPrmIp02.set_flexgrow("1");
                p.edtFlrplnPrmIp02.move("180.00","114","30%","40",null,null);

                p.staLabel01_00_01_00_00_00.set_taborder("31");
                p.staLabel01_00_01_00_00_00.set_text("-");
                p.staLabel01_00_01_00_00_00.set_textAlign("center");
                p.staLabel01_00_01_00_00_00.move("10","98","6","40",null,null);

                p.edtFlrplnPrmIp01.set_taborder("30");
                p.edtFlrplnPrmIp01.set_readonly("true");
                p.edtFlrplnPrmIp01.set_flexgrow("1");
                p.edtFlrplnPrmIp01.move("180.00","114","30%","40",null,null);

                p.cmbIpBand.set_taborder("29");
                p.cmbIpBand.set_flexgrow("1");
                p.cmbIpBand.set_innerdataset("dsIpBand");
                p.cmbIpBand.set_codecolumn("cdId");
                p.cmbIpBand.set_datacolumn("cdNm");
                p.cmbIpBand.set_text("사용안함");
                p.cmbIpBand.set_value("");
                p.cmbIpBand.set_index("-1");
                p.cmbIpBand.move("-60.00","65","30%","40",null,null);

                p.staLabel01_00_01_00.set_taborder("28");
                p.staLabel01_00_01_00.set_text("도면허용 IP");
                p.staLabel01_00_01_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_01_00.move("10","98","100%","46",null,null);

                p.pan02_03.set_taborder("26");
                p.pan02_03.set_type("vertical");
                p.pan02_03.set_flexgrow("1");
                p.pan02_03.move("10.00","98","305","86",null,null);

                p.edtEmpExtNo.set_taborder("27");
                p.edtEmpExtNo.set_readonly("false");
                p.edtEmpExtNo.move("10.00","158","100%","40",null,null);

                p.edtUserMblTelno.set_taborder("11");
                p.edtUserMblTelno.set_readonly("false");
                p.edtUserMblTelno.move("10.00","158","100%","40",null,null);

                p.pan01_02.set_taborder("12");
                p.pan01_02.set_type("vertical");
                p.pan01_02.set_flexgrow("1");
                p.pan01_02.move("10.00","98","305","86",null,null);

                p.staLabel01_00_01.set_taborder("22");
                p.staLabel01_00_01.set_text("전화번호");
                p.staLabel01_00_01.set_cssclass("sta_WF_Label");
                p.staLabel01_00_01.move("10","98","100%","46",null,null);

                p.edtUserTelno.set_taborder("23");
                p.edtUserTelno.set_readonly("false");
                p.edtUserTelno.move("10.00","158","100%","40",null,null);

                p.pan01_01.set_taborder("9");
                p.pan01_01.set_type("vertical");
                p.pan01_01.set_flexgrow("1");
                p.pan01_01.move("10.00","98","305","86",null,null);

                p.edtEml.set_taborder("8");
                p.edtEml.set_readonly("false");
                p.edtEml.move("10.00","158","100%","40",null,null);

                p.staLabel01_00.set_taborder("7");
                p.staLabel01_00.set_text("이메일");
                p.staLabel01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel01_00.move("10","98","100%","46",null,null);

                p.pan01_03.set_taborder("24");
                p.pan01_03.set_type("vertical");
                p.pan01_03.set_flexgrow("1");
                p.pan01_03.move("10.00","98","305","86",null,null);

                p.staLabel03_01.set_taborder("16");
                p.staLabel03_01.set_text("부서");
                p.staLabel03_01.set_cssclass("sta_WF_Label");
                p.staLabel03_01.move("10","98","100%","46",null,null);

                p.pan02_02.set_taborder("17");
                p.pan02_02.set_type("vertical");
                p.pan02_02.set_flexgrow("1");
                p.pan02_02.move("10.00","98","305","86",null,null);

                p.staLabel03_00_00.set_taborder("25");
                p.staLabel03_00_00.set_text("내선번호");
                p.staLabel03_00_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00_00.move("10","98","100%","46",null,null);

                p.staLabel03_00_01.set_taborder("36");
                p.staLabel03_00_01.set_text("서비스진행상황(이메일)");
                p.staLabel03_00_01.set_cssclass("sta_WF_Label");
                p.staLabel03_00_01.move("10","98","100%","46",null,null);

                p.rdoEmlRcptnYn.set_taborder("43");
                p.rdoEmlRcptnYn.set_fittocontents("width");
                p.rdoEmlRcptnYn.set_innerdataset(divForm_form_Div00_form_rdoEmlRcptnYn_innerdataset);
                p.rdoEmlRcptnYn.set_codecolumn("codecolumn");
                p.rdoEmlRcptnYn.set_datacolumn("datacolumn");
                p.rdoEmlRcptnYn.set_direction("vertical");
                p.rdoEmlRcptnYn.set_value("0");
                p.rdoEmlRcptnYn.set_index("0");
                p.rdoEmlRcptnYn.move("127","203","100%","40",null,null);

                p.pan04_01.set_taborder("37");
                p.pan04_01.set_type("vertical");
                p.pan04_01.set_flexgrow("1");
                p.pan04_01.move("10.00","98","200","86",null,null);

                p.staLabel03_00_01_00.set_taborder("44");
                p.staLabel03_00_01_00.set_text("서비스진행상황(SMS)");
                p.staLabel03_00_01_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00_01_00.move("10","98","100%","46",null,null);

                p.rdoSmsRcptnPrgrsYn.set_taborder("46");
                p.rdoSmsRcptnPrgrsYn.set_fittocontents("width");
                p.rdoSmsRcptnPrgrsYn.set_innerdataset(divForm_form_Div00_form_rdoSmsRcptnPrgrsYn_innerdataset);
                p.rdoSmsRcptnPrgrsYn.set_codecolumn("codecolumn");
                p.rdoSmsRcptnPrgrsYn.set_datacolumn("datacolumn");
                p.rdoSmsRcptnPrgrsYn.set_direction("vertical");
                p.rdoSmsRcptnPrgrsYn.set_value("0");
                p.rdoSmsRcptnPrgrsYn.set_index("0");
                p.rdoSmsRcptnPrgrsYn.move("127","203","100%","40",null,null);

                p.pan04_02.set_taborder("45");
                p.pan04_02.set_type("vertical");
                p.pan04_02.set_flexgrow("1");
                p.pan04_02.move("10.00","98","200","86",null,null);

                p.staLabel03_01_00.set_taborder("38");
                p.staLabel03_01_00.set_text("뉴스 및 이벤트(SMS)");
                p.staLabel03_01_00.set_cssclass("sta_WF_Label");
                p.staLabel03_01_00.move("10","98","100%","46",null,null);

                p.rdoSmsRcptnNewYn.set_taborder("47");
                p.rdoSmsRcptnNewYn.set_fittocontents("width");
                p.rdoSmsRcptnNewYn.set_innerdataset(divForm_form_Div00_form_rdoSmsRcptnNewYn_innerdataset);
                p.rdoSmsRcptnNewYn.set_codecolumn("codecolumn");
                p.rdoSmsRcptnNewYn.set_datacolumn("datacolumn");
                p.rdoSmsRcptnNewYn.set_direction("vertical");
                p.rdoSmsRcptnNewYn.set_value("0");
                p.rdoSmsRcptnNewYn.set_index("0");
                p.rdoSmsRcptnNewYn.move("127","203","100%","40",null,null);

                p.pan04_03.set_taborder("39");
                p.pan04_03.set_type("vertical");
                p.pan04_03.set_flexgrow("1");
                p.pan04_03.move("10.00","98","200","86",null,null);

                p.staLabel03_00_00_00.set_taborder("40");
                p.staLabel03_00_00_00.set_text("승인요청");
                p.staLabel03_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00_00_00.move("10","98","100%","46",null,null);

                p.rdoSmsRcptnAcntYn.set_taborder("48");
                p.rdoSmsRcptnAcntYn.set_fittocontents("width");
                p.rdoSmsRcptnAcntYn.set_innerdataset(divForm_form_Div00_form_rdoSmsRcptnAcntYn_innerdataset);
                p.rdoSmsRcptnAcntYn.set_codecolumn("codecolumn");
                p.rdoSmsRcptnAcntYn.set_datacolumn("datacolumn");
                p.rdoSmsRcptnAcntYn.set_direction("vertical");
                p.rdoSmsRcptnAcntYn.set_value("0");
                p.rdoSmsRcptnAcntYn.set_index("0");
                p.rdoSmsRcptnAcntYn.move("127","203","100%","40",null,null);

                p.pan04_04.set_taborder("41");
                p.pan04_04.set_type("vertical");
                p.pan04_04.set_flexgrow("1");
                p.pan04_04.move("10.00","98","200","86",null,null);

                p.pan01.set_taborder("13");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.set_flexshrink("1");
                p.pan01.set_fittocontents("height");
                p.pan01.move("0","60","100.00%","96",null,null);

                p.pan02.set_taborder("18");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","60","100%","96",null,null);

                p.pan03.set_taborder("35");
                p.pan03.set_horizontalgap("20");
                p.pan03.set_flexcrossaxiswrapalign("start");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_fittocontents("height");
                p.pan03.set_verticalgap("0");
                p.pan03.set_spacing("0px 20px 10px 20px");
                p.pan03.set_cssclass("pal_WF_DtlBg");
                p.pan03.set_type("horizontal");
                p.pan03.move("0","60","100.00%","96",null,null);

                p.pan04.set_taborder("42");
                p.pan04.set_horizontalgap("20");
                p.pan04.set_flexcrossaxiswrapalign("start");
                p.pan04.set_flexwrap("wrap");
                p.pan04.set_fittocontents("height");
                p.pan04.set_verticalgap("0");
                p.pan04.set_spacing("0px 20px 10px 20px");
                p.pan04.set_cssclass("pal_WF_DtlBg");
                p.pan04.move("0","60","100%","96",null,null);

                p.divEdtPop00.set_taborder("56");
                p.divEdtPop00.set_text("Div00");
                p.divEdtPop00.set_formscrollbartype("none none");
                p.divEdtPop00.set_formscrolltype("none");
                p.divEdtPop00.set_flexgrow("1");
                p.divEdtPop00.move("43.00","393","100%","40",null,null);

                p.divEdtPop.set_taborder("57");
                p.divEdtPop.set_text("Div00");
                p.divEdtPop.set_formscrollbartype("none none");
                p.divEdtPop.set_formscrolltype("none");
                p.divEdtPop.set_flexgrow("1");
                p.divEdtPop.move("43.00","393","100%","40",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div00.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div01.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sub_tit01.set_taborder("18");
                p.sub_tit01.set_background("#ffffff");
                p.sub_tit01.move("0","0","100%","50",null,null);

                p.staLabel05_01.set_taborder("0");
                p.staLabel05_01.set_text("변경비밀번호확인");
                p.staLabel05_01.set_cssclass("sta_WF_Label");
                p.staLabel05_01.move("10","98","305","46",null,null);

                p.pan00.set_taborder("5");
                p.pan00.set_type("vertical");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.set_fittocontents("height");
                p.pan00.set_spacing("0px 0px 10px 0px ");
                p.pan00.move("0","560","100%","146",null,null);

                p.Panel04_02.set_taborder("4");
                p.Panel04_02.set_spacing("0px 20px 0px 20px");
                p.Panel04_02.set_fittocontents("height");
                p.Panel04_02.set_horizontalgap("20");
                p.Panel04_02.move("0","685","100%","42",null,null);

                p.btnChangePw.set_taborder("12");
                p.btnChangePw.set_text("변경");
                p.btnChangePw.move("1268","158","120","40",null,null);

                p.pan00_01_00.set_taborder("7");
                p.pan00_01_00.set_type("vertical");
                p.pan00_01_00.set_flexgrow("1");
                p.pan00_01_00.set_minwidth("");
                p.pan00_01_00.move("10.00","98","305","86",null,null);

                p.edtNewPswd01.set_taborder("11");
                p.edtNewPswd01.set_readonly("false");
                p.edtNewPswd01.set_password("true");
                p.edtNewPswd01.move("10.00","158","100%","40",null,null);

                p.staLabel00_00.set_taborder("6");
                p.staLabel00_00.set_text("변경비밀번호");
                p.staLabel00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00.move("10","98","100%","46",null,null);

                p.pan00_01_00_00.set_taborder("10");
                p.pan00_01_00_00.set_type("vertical");
                p.pan00_01_00_00.set_flexgrow("1");
                p.pan00_01_00_00.set_minwidth("");
                p.pan00_01_00_00.move("10.00","98","305","86",null,null);

                p.edtNowPswd.set_taborder("9");
                p.edtNowPswd.set_readonly("false");
                p.edtNowPswd.set_password("true");
                p.edtNowPswd.move("10.00","158","100%","40",null,null);

                p.staLabel00_00_00.set_taborder("8");
                p.staLabel00_00_00.set_text("현재비밀번호");
                p.staLabel00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00_00.move("10","98","100%","46",null,null);

                p.edtNewPswd02.set_taborder("13");
                p.edtNewPswd02.set_readonly("false");
                p.edtNewPswd02.set_password("true");
                p.edtNewPswd02.move("10.00","158","100%","40",null,null);

                p.Panel01_02.set_taborder("17");
                p.Panel01_02.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02.set_spacing("0px 10px");
                p.Panel01_02.set_horizontalgap("10");
                p.Panel01_02.set_flexcrossaxisalign("center");
                p.Panel01_02.set_flexmainaxisalign("end");
                p.Panel01_02.move("710.00","50","100%","50",null,null);

                p.Button00_00_00.set_taborder("16");
                p.Button00_00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_00.set_visible("false");
                p.Button00_00_00.move("1390.00","18","34","34",null,null);

                p.Button00_00.set_taborder("15");
                p.Button00_00.set_cssclass("btn_WF_ACPlus");
                p.Button00_00.set_visible("false");
                p.Button00_00.move("1362.00","10","34","34",null,null);

                p.staSubTitle02_00.set_taborder("14");
                p.staSubTitle02_00.set_text("비밀번호");
                p.staSubTitle02_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00.move("30","50","100%","50",null,null);

                p.pan04_02.set_taborder("1");
                p.pan04_02.set_type("vertical");
                p.pan04_02.set_flexgrow("1");
                p.pan04_02.move("10.00","98","305","86",null,null);

                p.pan04.set_taborder("2");
                p.pan04.set_horizontalgap("20");
                p.pan04.set_flexcrossaxiswrapalign("start");
                p.pan04.set_flexwrap("wrap");
                p.pan04.set_fittocontents("height");
                p.pan04.set_verticalgap("0");
                p.pan04.set_spacing("0px 20px 10px 20px");
                p.pan04.move("0","60","100.00%","96",null,null);

                p.sta00.set_taborder("3");
                p.sta00.set_text("비밀번호는 9자리 이상이며, 반드시 특수문자를 포함해야 합니다.  [ ! @ # $ % ^ & * ( ) ]");
                p.sta00.set_cssclass("sta_WF_Des");
                p.sta00.set_fittocontents("height");
                p.sta00.set_flexgrow("1");
                p.sta00.move("20","20","100%","40",null,null);
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
            //-- Default Layout : this.divForm.form.Div02.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.Div02.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.PanelGrdBtn.set_taborder("2");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_fittocontents("width");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.move(null,"0","450","34","0",null);

                p.grdCtrtInfoList.set_taborder("0");
                p.grdCtrtInfoList.set_binddataset("dsCtrtInfoList");
                p.grdCtrtInfoList.set_autofittype("col");
                p.grdCtrtInfoList.getSetter("uFunction").set("checkbox");
                p.grdCtrtInfoList.move("0","44","100.00%","160",null,null);

                p.btnGrdDel.set_taborder("4");
                p.btnGrdDel.set_text("삭제");
                p.btnGrdDel.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel.set_visible("true");
                p.btnGrdDel.move("804.00","10","45","34",null,null);

                p.btnGrdRegi.set_taborder("3");
                p.btnGrdRegi.set_text("연결");
                p.btnGrdRegi.set_cssclass("btn_WF_SmallBlack");
                p.btnGrdRegi.set_visible("true");
                p.btnGrdRegi.move("774.00","10","45","34",null,null);

                p.staTotal.set_taborder("1");
                p.staTotal.set_text("총 <fc v=\'#1e4ebe\'>100</fc>건");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.move("0","0","200","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.Div02.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div02.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div02.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdCtrtInfoList.set_autofittype("none");

                p.btnGrdRegi.set_visible("false");

                p.btnGrdDel.set_visible("false");
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.Div02.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div02.form.divGrd.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div02.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.Div02.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div02.form
            obj = new Layout("default","",0,0,this.divForm.form.Div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sub_tit01.set_taborder("7");
                p.sub_tit01.set_background("#ffffff");
                p.sub_tit01.move("0","0","100%","50",null,null);

                p.pan00.set_taborder("0");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("10");
                p.pan00.set_spacing("10px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.set_type("vertical");
                p.pan00.move("0","60","100.00%","292",null,null);

                p.Button00_00.set_taborder("4");
                p.Button00_00.set_cssclass("btn_WF_ACPlus");
                p.Button00_00.set_visible("false");
                p.Button00_00.move("1362.00","10","34","34",null,null);

                p.staSubTitle02_00.set_taborder("3");
                p.staSubTitle02_00.set_text("계약정보 목록");
                p.staSubTitle02_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00.move("30","50","100%","50",null,null);

                p.Button00_00_00.set_taborder("5");
                p.Button00_00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_00.set_visible("false");
                p.Button00_00_00.move("1390.00","18","34","34",null,null);

                p.Panel01_02.set_taborder("6");
                p.Panel01_02.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02.set_spacing("0px 10px");
                p.Panel01_02.set_horizontalgap("10");
                p.Panel01_02.set_flexcrossaxisalign("center");
                p.Panel01_02.set_flexmainaxisalign("end");
                p.Panel01_02.move("710.00","50","100%","50",null,null);

                p.divGrd.set_taborder("2");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","30","100%","204",null,null);

                p.sta00.set_taborder("1");
                p.sta00.set_text("일반사용자계정은 계정관리자가 연결한 계약명만 연결이 가능합니다. (계정관리자가 계약 연결 및 지정시 계약내용 안보임)\r\n계약연결 미지정시에는 서비스신청시 수기등록을 선택하여 신청이 가능합니다.");
                p.sta00.set_cssclass("sta_WF_Des");
                p.sta00.set_fittocontents("height");
                p.sta00.move("20","20","100%","57",null,null);
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
            //-- Default Layout : this.divForm.form.divPopBtn.form
            obj = new Layout("default","",0,0,this.divForm.form.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnWhdwl.set_taborder("1");
                p.btnWhdwl.set_text("탈퇴하기");
                p.btnWhdwl.set_fittocontents("width");
                p.btnWhdwl.set_visible("true");
                p.btnWhdwl.move("217.00","10","120","40",null,null);

                p.Button00_01.set_taborder("2");
                p.Button00_01.set_text("권한신청");
                p.Button00_01.set_fittocontents("width");
                p.Button00_01.set_visible("true");
                p.Button00_01.move("217.00","10","120","40",null,null);

                p.Button00_00.set_taborder("0");
                p.Button00_00.set_text("확인");
                p.Button00_00.set_cssclass("btn_WF_Yes");
                p.Button00_00.set_fittocontents("width");
                p.Button00_00.move("btnWhdwl:10","10","100","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
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
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            this.divForm.form.divPopBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div00.set_taborder("0");
                p.Div00.set_text("Div00");
                p.Div00.set_cssclass("div_WF_Bg");
                p.Div00.set_fittocontents("height");
                p.Div00.move("50.00","478","100.00%","530",null,null);

                p.Div01.set_taborder("1");
                p.Div01.set_text("Div00");
                p.Div01.set_cssclass("div_WF_Bg");
                p.Div01.set_fittocontents("height");
                p.Div01.move("50.00","478","100.00%","200",null,null);

                p.Div02.set_taborder("2");
                p.Div02.set_text("Div00");
                p.Div02.set_cssclass("div_WF_Bg");
                p.Div02.set_fittocontents("height");
                p.Div02.move("50.00","508","100.00%","342",null,null);

                p.divPopBtn.set_taborder("3");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.move("0","1540","99.99577482641578%","60",null,null);
            	}
            );
            obj.set_verticalgap("20");
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
            obj.set_verticalgap("20");
            obj.set_type("vertical");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("개인정보 수정");

                p.divGuide.set_taborder("0");
                p.divGuide.set_text("div00");
                p.divGuide.set_visible("false");
                p.divGuide.set_cssclass("div_GD_Tip");
                p.divGuide.move("1590.00","135","450","385",null,null);

                p.divTitle.set_taborder("1");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.set_minheight("50");
                p.divTitle.set_maxheight("");
                p.divTitle.move("0","0",null,"60","60",null);

                p.divForm.set_taborder("2");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.set_fittocontents("height");
                p.divForm.move("0","70",null,"1112","60",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divTitle.move("0","0",null,"50","0",null);

                p.divForm.move("20","divTitle:10",null,"1112","20",null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.Div00.form.edtUserId","value","dsGet","userId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.Div00.form.edtUserNm","value","dsGet","userNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.Div00.form.edtAcntAutzrId","value","dsGet","acntAutzrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.Div00.form.edtEml","value","dsGet","eml");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.Div00.form.edtUserMblTelno","value","dsGet","userMblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.Div00.form.edtUserTelno","value","dsGet","userTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.Div00.form.edtEmpExtNo","value","dsGet","empExtNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divForm.form.Div00.form.rdoEmlRcptnYn","value","dsGet","emlRcptnYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divForm.form.Div00.form.rdoSmsRcptnPrgrsYn","value","dsGet","smsRcptnPrgrsYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divForm.form.Div00.form.rdoSmsRcptnNewYn","value","dsGet","smsRcptnNewYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divForm.form.Div00.form.rdoSmsRcptnAcntYn","value","dsGet","smsRcptnAcntYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.Div00.form.divEdtPop00.form.edtCoNm","value","dsGet","coNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.Div00.form.divEdtPop.form.edtDeptNm","value","dsGet","deptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divForm.form.Div01.form.edtNowPswd","value","dsPw","nowPswd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divForm.form.Div01.form.edtNewPswd01","value","dsPw","newPswd01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divForm.form.Div01.form.edtNewPswd02","value","dsPw","newPswd02");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.registerScript("COM001M05.xfdl", function() {
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
        * 2024/08/08			김완성					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.userId;

        this.validateColumn = [];

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        	this.fnInit();

        	this.validateColumn.push({"title" : "성명", "com": this.divForm.form.Div00.form.edtUserNm});
        	this.validateColumn.push({"title" : "이메일", "com": this.divForm.form.Div00.form.edtEml});
        	this.validateColumn.push({"title" : "휴대전화번호", "com": this.divForm.form.Div00.form.edtUserMblTelno});

        	this.userId = this.objApp.gUser.userId;
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
        	//TODO..
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.getSearchTransaction = function()
        {
        	var strSvcId    = "search";
        	var strSvcUrl   = "member/prvsInq.do";
        	var inData      = "";
        	var outData     = "dsGet=dsGet dsCtrtInfoList=dsCtrtInfoList";
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
        this.saveTransaction = function()
        {
        	var strSvcId    = "save";
        	var strSvcUrl   = "member/prvsStrg.do";
        	var inData      = "dsGet=dsGet:A dsCtrtInfoList=dsCtrtInfoList:U";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= false;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 비밀번호 변경
        this.savePwTransaction = function()
        {
        	var strSvcId    = "savePw";
        	var strSvcUrl   = "member/pswdMdfcn.do";
        	var inData      = "dsPw=dsPw:U";
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
        			this.divForm.form.Div02.form.divGrd.form.staTotal.text = "총 <fc v='#1e4ebe'>" + this.dsCtrtInfoList.getRowCount() + "</fc>건";

        			// 도면허용 IP
        			var flrplnPrmIp = this.dsGet.getColumn(0, "flrplnPrmIp");
        			if(this.gfnIsNull(flrplnPrmIp) != true) {
        				var arr = flrplnPrmIp.split(".");
        				this.divForm.form.Div00.form.edtFlrplnPrmIp01.value = arr[0] + "." + arr[1] + ".";
        				this.divForm.form.Div00.form.edtFlrplnPrmIp02.value = arr[2] + "." + arr[3];

        				var sRow = this.dsIpBand.findRow("cdNm", arr[0] + "." + arr[1]);
        				if(sRow > -1) {
        					this.divForm.form.Div00.form.cmbIpBand.index = sRow;
        				}
        			}
        			break;
        		case "save" :
        			this.cfnSearch();
        			this.gfnAlertMsg("save", "MSG_001");
        			break;
        		case "savePw" :
        			this.dsPw.clearData();
        			this.dsPw.addRow();
        			this.cfnSearch();
        			this.gfnAlertMsg("save", "MSG_001");
        			break;
        	}
        };

        /**
        	sPopupId	// 페세지창을 구분하기 위한 ID
        	sRtn		// 메세지창에서 리턴 해주는 변수값 (JSON 형태의 스트링 리턴)
        **/
        this.msgCallback = function(sPopupId, sRtn)
        {
        	var oRtn = JSON.parse(sRtn);
        	if(sPopupId == "ctrt_del") {
        		if(oRtn.result == "Y") {
        			var chk = this.dsCtrtInfoList.extractRows("chk == " + 1);
        			if(chk.length > 0) {
        				this.dsCtrtInfoList.deleteMultiRows(chk);
        			}
        		}
        	}
        	else if(sPopupId == "user_save") {
        		if(oRtn.result == "Y") {
        			this.saveTransaction();
        		}
        	}
        	else if(sPopupId == "pswd_update") {
        		if(oRtn.result == "Y") {
        			var sTitle = "본인인증";
        			var objArg   = {};

        			var objOption = {
        				popuptype: "modal"	//modal,modaless
        				, autosize: true
        				, title: sTitle
        				, resize: true
        				, titlebar: true
        			};
        			var sPopupCallBack = "fnPopupCallback";

        			this.gfnOpenPopup("onslfCertPopup", "work::COM/member/COM000P034.xfdl", objArg, sPopupCallBack, objOption);
        		}
        	}
        };

        this.fnPopupCallback = function(sPopupId, sRtn)
        {
        	if(sPopupId =="coIdSearchPopup") {
        		if (this.gfnIsNull(sRtn)) return;
        		var objRtn = JSON.parse(sRtn);
        		this.dsGet.setColumn(0, "coId", objRtn.coId);
        		this.dsGet.setColumn(0, "coNm", objRtn.coNm);
        	}
        	else if(sPopupId == "deptSearchPopup") {
        		if (this.gfnIsNull(sRtn)) return;
        		var objRtn = JSON.parse(sRtn);
        		this.dsGet.setColumn(0, "deptId", objRtn.deptId);
        		this.dsGet.setColumn(0, "deptNm", objRtn.deptNm);
        	}
        	else if(sPopupId == "ctrtSearchPopup") {
        		if (this.gfnIsNull(sRtn)) return;
        		var objRtn = JSON.parse(sRtn);
        		var nRow = this.dsCtrtInfoList.addRow();
        		this.dsCtrtInfoList.setColumn(nRow, "userId", this.userId);
        		this.dsCtrtInfoList.setColumn(nRow, "ctrtNo", objRtn.ctrtNo);
        		this.dsCtrtInfoList.setColumn(nRow, "ctrtNm", objRtn.ctrtNm);
        		this.dsCtrtInfoList.setColumn(nRow, "ctrtType", objRtn.ctrtType);
        		this.dsCtrtInfoList.setColumn(nRow, "ctrtTypeNm", objRtn.ctrtTypeNm);
        		this.dsCtrtInfoList.setColumn(nRow, "ctrtYmd", objRtn.ctrtYmd);
        		this.dsCtrtInfoList.setColumn(nRow, "ctrtBgngYmd", objRtn.ctrtBgngYmd);
        		this.dsCtrtInfoList.setColumn(nRow, "ctrtEndYmd", objRtn.ctrtEndYmd);
        	}
        	else if(sPopupId == "onslfCertPopup") {
        		if (this.gfnIsNull(sRtn)) return;
        		var objRtn = JSON.parse(sRtn);
        		if(objRtn.result == "Y") {
        			this.dsPw.setColumn(0, "userId", this.userId);
        			this.savePwTransaction();
        		}
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	this.gfnCmmCode("flrplnPrmIp", "dsIpBand", "IP_BAND", "");
        	this.dsIpBand.insertRow(0);
        	this.dsIpBand.setColumn(0, "cdId", "");
        	this.dsIpBand.setColumn(0, "cdNm", "사용안함");
        	this.divForm.form.Div00.form.cmbIpBand.index = 0;
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // 회사 정보 팝업
        this.divForm_Div00_divEdtPop00_btnPop_onclick = function(obj,e)
        {
        	var sTitle = "회사 목록";
        	var objArg   = {};

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
         		, width: 1221
         		, height: 650			//width,height 지정하지 않음 popup form size적용
        		, autosize: false
        		, title: sTitle
        		, resize: false
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("coIdSearchPopup", "work::COM/crtr/COM100P01.xfdl", objArg, sPopupCallBack, objOption);
        };

        // 부서 정보 팝업
        this.divForm_Div00_divEdtPop_btnPop_onclick = function(obj,e)
        {
        	var sTitle = "부서 목록";
        	var objArg   = {};

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
         		, width: 1221
         		, height: 650			//width,height 지정하지 않음 popup form size적용
        		, autosize: false
        		, title: sTitle
        		, resize: false
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("deptSearchPopup", "work::COM/crtr/COM100P03.xfdl", objArg, sPopupCallBack, objOption);
        };

        // 계약정보 팝업
        this.divForm_Div01_divGrd_btnGrdRegi_onclick = function(obj,e)
        {
        	var sTitle = "계약신청_계약정보 연결";
        	var objArg   = {};

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
        		, autosize: true
        		, title: sTitle
        		, resize: true
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("ctrtSearchPopup", "work::COM/sysMng/COM024P063.xfdl", objArg, sPopupCallBack, objOption);
        };

        // 계정정보 삭제
        this.divForm_Div01_divGrd_btnGrdDel_onclick = function(obj,e)
        {
        	var chk = this.dsCtrtInfoList.findRow("chk", 1);
        	if(chk != -1) {
        		this.gfnConfirmMsg("ctrt_del", "MSG_005", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        	} else {
        		this.gfnAlertMsg("msg", "MSG_006");
        	}
        };

        // 사용자 정보 저장
        this.divBtn_btnSave_onclick = function(obj,e)
        {
        	if(this.gfnDsIsUpdated(this.dsGet) != true && this.gfnDsIsUpdated(this.dsCtrtInfoList) != true) {
        		this.gfnAlertMsg("msg", "MSG_004");
        	} else {
        		if(this.gfnDsIsValidated(this.validateColumn)) {
        			this.gfnConfirmMsg("user_save", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"], "", ["사용자 정보 변경"]);
        		}
        	}
        };

        // 권한신청
        this.divForm_divPopBtn_Button00_01_onclick = function(obj,e)
        {
        	var objArg   = {};

        	var sMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        	var sMenuUrl = 'work::COM/sysMng/COM001P051.xfdl';
        	var actNm = '계정권한 신청';
        	this.gfnPageOpen(sMenuId, sMenuUrl, actNm, objArg);
        };

        // 도면허용 IP 콤보 변경시
        this.divForm_Div06_cmbIpBand_onitemchanged = function(obj,e)
        {
        	if(this.gfnIsNull(e.postvalue)) {
        		this.divForm.form.Div00.form.edtFlrplnPrmIp01.value = "";
        		this.divForm.form.Div00.form.edtFlrplnPrmIp02.value = "";

        		this.divForm.form.Div00.form.edtFlrplnPrmIp02.readonly = true;
        	} else {
        		this.divForm.form.Div00.form.edtFlrplnPrmIp01.value = e.posttext;

        		this.divForm.form.Div00.form.edtFlrplnPrmIp02.readonly = false;
        	}
        };

        // 도면허용 IP 값 변경시
        this.divForm_Div06_edtFlrplnPrmIp02_onchanged = function(obj,e)
        {
        	if(this.gfnIsNull(e.postvalue)) {
        		if(this.gfnIsNull(this.divForm.form.Div00.form.cmbIpBand.value)) {
        			this.dsGet.setColumn(0, "flrplnPrmIp", "");
        		}
        	} else {
        		if(this.gfnIsNull(this.divForm.form.Div00.form.cmbIpBand.value) != true) {
        			var flrplnPrmIp = this.divForm.form.Div00.form.edtFlrplnPrmIp01.value + "." + this.divForm.form.Div00.form.edtFlrplnPrmIp02.value;
        			this.dsGet.setColumn(0, "flrplnPrmIp", flrplnPrmIp);
        		}
        	}
        };

        // 비밀번호 변경 - 인증팝업 호출
        this.divForm_Div01_btnChangePw_onclick = function(obj,e)
        {
        	if(this.fnValidPw() != true) {
        		return;
        	}

        	this.gfnConfirmMsg("pswd_update", "MSG_011", "msgCallback", ["확인", "취소"], ["Y", "N"], "", ["비밀번호 변경 하시겠습니까?"]);
        };

        // 비밀번호 검증
        this.fnValidPw = function()
        {
        	var pswd = this.dsGet.getColumn(0, "pswd");
        	var nowPswd = this.dsPw.getColumn(0, "nowPswd");
        	var newPswd01 = this.dsPw.getColumn(0, "newPswd01");
        	var newPswd02 = this.dsPw.getColumn(0, "newPswd02");

        	if(this.gfnIsNull(nowPswd) == true) {
        		this.gfnAlertMsg("msg", "MSG_011", ["현재 비밀번호를 입력해주세요!"]);
        		this.divForm.form.Div01.form.edtNowPswd.setFocus();
        		return false;
        	}

        	if(pswd != nowPswd) {
        		this.gfnAlertMsg("msg", "MSG_011", ["현재 비밀번호가 일치하지 않습니다."]);
        		this.divForm.form.Div01.form.edtNowPswd.setFocus();
        		return false;
        	}

        	if(this.gfnIsNull(newPswd01) == true || this.gfnIsNull(newPswd02) == true) {
        		this.gfnAlertMsg("msg", "MSG_011", ["변경할 비밀번호를 입력해주세요!"]);
        		this.divForm.form.Div01.form.edtNewPswd01.setFocus();
        		return false;
        	}

        	if(newPswd01 != newPswd02) {
        		this.gfnAlertMsg("msg", "MSG_011", ["변경할 비밀번호가 일치하지 않습니다."]);
        		this.divForm.form.Div01.form.edtNewPswd01.setFocus();
        		return false;
        	}

        	if(nowPswd == newPswd01) {
        		this.gfnAlertMsg("msg", "MSG_011", ["현재 비밀번호와 변경할 비밀번호는\n다르게 입력해야 합니다."]);
        		this.divForm.form.Div01.form.edtNewPswd01.setFocus();
        		return false;
        	}

        	// 정규식 체크
        	var pwPatten = new RegExp("[!@#$%^&*()]", "ig");
        	//var pwAlpha = new RegExp("[a-zA-Z]", "ig");
        	//var pwNum = new RegExp("[0-9]", "ig");
        	if(pwPatten.test(newPswd01) != true || newPswd01.length < 9) {
        		this.gfnAlertMsg("msg", "MSG_011", ["비밀번호는 9자리 이상이며, \n반드시 특수문자를 포함해야 합니다. \n[!@#$%^&*()]"]);
        		this.divForm.form.Div01.form.edtNewPswd01.setFocus();
        		return false;
        	}

        	return true;
        };

        // 계약정보 팝업
        this.divForm_Div02_divGrd_grdCtrtInfoList_oncellclick = function(obj,e)
        {
        	if(e.cell == 1) {
        		var sTitle = "계약정보";
        		var objArg   = {"ctrtNo" : this.dsCtrtInfoList.getColumn(this.dsCtrtInfoList.rowposition, "ctrtNo")};

        		var objOption = {
        			popuptype: "modal"	//modal,modaless
        			, width: 1000
        			, height: 600
        			, autosize: false
        			, title: sTitle
        			, resize: true
        			, titlebar: true
        		};
        		var sPopupCallBack = "fnPopupCallback";

        		this.gfnOpenPopup("ctrtInfoPopup", "work::COM/crtr/COM023P04.xfdl", objArg, sPopupCallBack, objOption);
        	}
        };

        this.divForm_divPopBtn_btnWhdwl_onclick = function(obj,e)
        {
        	var sTitle = "회원탈퇴";
        	var param = {
        		"id" : this.dsGet.getColumn(e.row, "userId")
        	};

        	if (this.objApp.screenid == "Desktop_screen") {
        		var sMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        		var sMenuUrl = 'work::COM/member/COM001M06.xfdl';
        		var actNm = '회원탈퇴';
        		this.gfnPageOpen(sMenuId, sMenuUrl, actNm, param);
        	} else {
        		var objOption = {
        			popuptype: "modal"	//modal,modaless
        			, autosize: true
        			, title: sTitle
        			, resize: true
        			, titlebar: true
        		};
        		var sPopupCallBack = "fnPopupCallback";

        		this.gfnOpenPopup("COM014P01", "work::COM/doc/COM014P01.xfdl", param, sPopupCallBack, objOption);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.Div00.form.edtFlrplnPrmIp02.addEventHandler("onchanged",this.divForm_Div06_edtFlrplnPrmIp02_onchanged,this);
            this.divForm.form.Div00.form.cmbIpBand.addEventHandler("onitemchanged",this.divForm_Div06_cmbIpBand_onitemchanged,this);
            this.divForm.form.Div00.form.divEdtPop00.form.btnPop.addEventHandler("onclick",this.divForm_Div00_divEdtPop00_btnPop_onclick,this);
            this.divForm.form.Div00.form.divEdtPop.form.btnPop.addEventHandler("onclick",this.divForm_Div00_divEdtPop_btnPop_onclick,this);
            this.divForm.form.Div01.form.btnChangePw.addEventHandler("onclick",this.divForm_Div01_btnChangePw_onclick,this);
            this.divForm.form.Div02.form.divGrd.form.grdCtrtInfoList.addEventHandler("oncellclick",this.divForm_Div02_divGrd_grdCtrtInfoList_oncellclick,this);
            this.divForm.form.Div02.form.divGrd.form.btnGrdDel.addEventHandler("onclick",this.divForm_Div01_divGrd_btnGrdDel_onclick,this);
            this.divForm.form.Div02.form.divGrd.form.btnGrdRegi.addEventHandler("onclick",this.divForm_Div01_divGrd_btnGrdRegi_onclick,this);
            this.divForm.form.divPopBtn.form.btnWhdwl.addEventHandler("onclick",this.divForm_divPopBtn_btnWhdwl_onclick,this);
            this.divForm.form.divPopBtn.form.Button00_01.addEventHandler("onclick",this.divForm_divPopBtn_Button00_01_onclick,this);
            this.divForm.form.divPopBtn.form.Button00_00.addEventHandler("onclick",this.divBtn_btnSave_onclick,this);
        };
        this.loadIncludeScript("COM001M05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
