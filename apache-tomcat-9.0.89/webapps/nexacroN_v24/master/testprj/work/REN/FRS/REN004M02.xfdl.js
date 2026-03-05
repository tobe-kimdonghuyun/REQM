(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("REN004M02");
            this.set_titletext("임차대기목록 상세");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,1400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"hireLohNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGet", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"bzentyNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyClsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"rcptNo\" type=\"STRING\" size=\"256\"/><Column id=\"hireLohNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"prgrsSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"picNm\" type=\"STRING\" size=\"256\"/><Column id=\"picJbpsNm\" type=\"STRING\" size=\"256\"/><Column id=\"picTelno\" type=\"STRING\" size=\"256\"/><Column id=\"picMblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"picEmlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"rentRsnPrps\" type=\"STRING\" size=\"256\"/><Column id=\"pstnCd\" type=\"STRING\" size=\"256\"/><Column id=\"bldgCd\" type=\"STRING\" size=\"256\"/><Column id=\"zoneCd\" type=\"STRING\" size=\"256\"/><Column id=\"bldgNofl\" type=\"STRING\" size=\"256\"/><Column id=\"rntar\" type=\"STRING\" size=\"256\"/><Column id=\"usgCd\" type=\"STRING\" size=\"256\"/><Column id=\"dtlUsgCd\" type=\"STRING\" size=\"256\"/><Column id=\"mvnHpeYmd\" type=\"STRING\" size=\"256\"/><Column id=\"etcDmndMttr\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboBzentyClsfCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboPstnCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboBldgCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboUsgCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboDtlUsgCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboPrgsSttsCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtchRslt", this);
            obj._setContents("<ColumnInfo><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtfl", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bsnsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtn\" type=\"STRING\" size=\"256\"/><Column id=\"strgFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTerm\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj.set_useclientlayout("true");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtflArtclList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","divTitle:0",null,"1300","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_cssclass("div_WF_QuickFrBg");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit00","1630","674","100%","70",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div00","0","370","100%","410",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00","10","10","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtHirerNm","10","56","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_displaynulltext("업체명 입력");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","30.00","10","200","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtHirerNm\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_01","20.00","20","47.66%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("3");
            obj.set_text("업체분류");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Combo("cboBzentyClsfCd","20.00","66","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsCboBzentyClsfCd");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_readonly("true");
            obj.set_text("선택하기");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01","660.00","10","200","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"cboBzentyClsfCd\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_02","10","10","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("6");
            obj.set_text("접수번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtHireLohNo","10","56","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_displaynulltext("업체명 입력");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_02","30.00","10","200","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"edtHireLohNo\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00_00_00","10","10","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("9");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Combo("cboPrgsSttsCd","797","102","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            obj.set_innerdataset("dsCboPrgsSttsCd");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_03","30.00","10","200","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("11");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"cboPrgsSttsCd\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_00","10","10","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("12");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_horizontalgap("20");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel00_00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00_03\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_01_00","0","0","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("13");
            obj.set_text("담당자 성명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtPicNm","0.00","46","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("14");
            obj.set_readonly("false");
            obj.set_displaynulltext("담당자 성명 입력");
            obj.set_maxlength("10");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_01_00","20.00","0","200","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtPicNm\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_01_01","10","10","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("16");
            obj.set_text("담당자 직위(직급)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtPicJbpsNm","10.00","56","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("17");
            obj.set_readonly("false");
            obj.set_displaynulltext("담당자 직위 입력");
            obj.set_maxlength("10");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_01_01","440.00","0","200","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("18");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtPicJbpsNm\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_01","0.00","192","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("19");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan00_01_01\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00","20","20","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("20");
            obj.set_text("담당자 전화");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtPicTelno","0","46","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("21");
            obj.set_readonly("false");
            obj.set_displaynulltext("담당자명 입력");
            obj.set_maxlength("13");
            obj.set_inputtype("number");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_02_00","20.00","0","200","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("22");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtPicTelno\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_01_02","0","0","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("23");
            obj.set_text("담당자 휴대폰");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtPicMblTelno","0","46","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("24");
            obj.set_displaynulltext("담당자 휴대폰 입력");
            obj.set_maxlength("13");
            obj.set_inputtype("number");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_01_02","860.00","0","200","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("25");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01_02\"/><PanelItem id=\"PanelItem02\" componentid=\"edtPicMblTelno\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_01_02_00","0","0","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("26");
            obj.set_text("담당자 이메일");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtPicEmlAddr","0","46","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("27");
            obj.set_displaynulltext("담당자 이메일 입력");
            obj.set_maxlength("30");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_01_02_00","860.00","0","200","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("28");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01_02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtPicEmlAddr\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_02","0","96","100%","97",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("29");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan00_02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan00_01_02\"/><PanelItem id=\"PanelItem03\" componentid=\"pan00_01_02_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel","192","1038","100.00%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("30");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grdPrvcUtlzWtcs\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel","0","-931","400","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("31");
            obj.set_text("개인정보활용동의서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("panFile","0","313","100.00%","110",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("32");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Grid("grdPrvcUtlzWtcs","20.00","60","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("33");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell cssclass=\"expr:!A110 ? &quot;&quot; : &quot;CellFile&quot;\" text=\"bind:A110\"/><Cell col=\"1\" cssclass=\"expr:!A110 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"expr:!A110 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\"/></Band></Format></Formats>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_00","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_text("임차관련 정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_00","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("7");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit01","1630","674","100%","70",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("8");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div01","0","728","100%","384",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("9");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00","0","0","19.61%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("임대사유/목적");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtRentRsnPrps","0","46","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_displaynulltext("임대사유/목적 입력");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00","20.00","0","610","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRentRsnPrps\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_00","0","50","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_01_00","0","0","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("4");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cboPstnCd","28","200","90%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsCboPstnCd");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_readonly("true");
            obj.set_text("선택하기");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_00","260.00","0","50","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("6");
            obj.set_horizontalgap("10");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divEdtPop\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00","20","177","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("7");
            obj.set_verticalgap("0");
            obj.set_horizontalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"cboPstnCd\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_00_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_01_00","20.00","0","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_01_01","0","0","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("9");
            obj.set_text("건물명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cboBldgCd","658","196","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("10");
            obj.set_innerdataset("dsCboBldgCd");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_readonly("true");
            obj.set_text("선택하기");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Radio("rdoZoneCd","0.00","46","280","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("11");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_readonly("true");
            var divForm_form_Div01_form_rdoZoneCd_innerdataset = new nexacro.NormalDataset("divForm_form_Div01_form_rdoZoneCd_innerdataset", obj);
            divForm_form_Div01_form_rdoZoneCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">A/S</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">L/S</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div01_form_rdoZoneCd_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_01_00_00","1071","192","280","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("12");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"rdoZoneCd\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_01_00","0","46","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("13");
            obj.set_verticalgap("0");
            obj.set_horizontalgap("10");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"cboBldgCd\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel01_01_01_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_01_01","465.00","0","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("14");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_01_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_01","0","0","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("15");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan01_01_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_00","0","0","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("16");
            obj.set_text("층");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtBldgNofl","0","56","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("17");
            obj.set_readonly("true");
            obj.set_displaynulltext("희망층 입력");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_02_00","30.00","10","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("18");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtBldgNofl\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_01","0","0","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("19");
            obj.set_text("면적 (m2)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtRentAr","20.00","66","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("20");
            obj.set_readonly("true");
            obj.set_displaynulltext("임차면적 입력");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_02_01","660.00","10","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("21");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRentAr\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_02","0.00","0","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("22");
            obj.set_text("입주희망일자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Calendar("calMvnHpeYmd","0.00","46","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("23");
            obj.set_readonly("true");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_02_02","20.00","86","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("24");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_02\"/><PanelItem id=\"PanelItem03\" componentid=\"calMvnHpeYmd\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_02","85","401","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("25");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01_02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan01_02_01\"/><PanelItem id=\"PanelItem03\" componentid=\"pan01_02_02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_03_00","10.00","10","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("26");
            obj.set_text("용도");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cboUsgCd","10.00","56","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("27");
            obj.set_innerdataset("dsCboUsgCd");
            obj.set_codecolumn("grp2CdId");
            obj.set_datacolumn("grp2CdNm");
            obj.set_readonly("true");
            obj.set_text("선택하기");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_03_00","20.00","338","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("28");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_03_00\"/><PanelItem id=\"PanelItem02\" componentid=\"cboUsgCd\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel02_03_01","0","10","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("29");
            obj.set_text("상세용도");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cboDtlUsgCd","553","916","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("30");
            obj.set_innerdataset("dsCboDtlUsgCd");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_readonly("true");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_03_01","30.00","10","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("31");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02_03_01\"/><PanelItem id=\"PanelItem02\" componentid=\"cboDtlUsgCd\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_03","384","516","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("32");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("20");
            obj.set_type("horizontal");
            obj.set_verticalgap("0");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_03_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_03_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Button("divEdtPop","0","0","40","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("33");
            obj.set_cssclass("btn_WF_Information");
            obj.set_flexshrink("0");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("[여객터미널 업무용시설] 운영기획팀 032-741-2401\r\n[교통 업무용시설] 교통운영팀 032-741-2422\r\n[화물터미널 업무용시설] 물류운영팀 032-741-2288\r\n[부대건물] 재무팀 032-741-2323");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_01","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("10");
            obj.set_text("기타 요청사항");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00_01","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_01","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("12");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit02","1630","674","100%","70",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("13");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div02","0","990","100%","150",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("14");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new TextArea("textAreaEtcDmndMttr","0","0","100%","100%",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_displaynulltext("내용 입력");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan02","0","0","100.00%","150",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("1");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"textAreaEtcDmndMttr\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Div("divQuick",null,"70","296","165","60",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickMenu");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","17","20","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_cssclass("btn_WF_Quick_S");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn01","17.00","btn00:0","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("1");
            obj.set_text("임차관련 정보");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn02","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("2");
            obj.set_text("기타 요청사항");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"divQuick:0","296","130","60",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickBtnBg");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","7","20","100","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_No");
            obj.set_fittocontents("none");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btnSave","200.00","365","100","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Yes");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btnDel","200.00","365","100","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_No");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btnCnddRcmdtn","457.00","30","140","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("2");
            obj.set_text("후보추천검색");
            obj.set_cssclass("btn_WF_Yes");
            this.divBtn.addChild(obj.name, obj);

            obj = new RaonkUpload("RaonkUpload","-1080","630","1020","200",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_DevelopLangage("JAVA");
            obj.set_ExtensionAllowOrLimit("1");
            obj.set_HandlerUrl("/common/uploadDownload.do");
            obj.set_RunTimes("html5");
            obj.set_ButtonBarView("0");
            obj.set_AllowDuplicationFile("1");
            obj.set_text("");
            obj.set_DisableDeleteConfirm("1");
            obj.set_positionstep("0");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.Div00.form
            obj = new Layout("default","",0,0,this.divForm.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel00_00_00.set_taborder("0");
                p.staLabel00_00_00.set_text("업체명");
                p.staLabel00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00_00.move("10","10","100%","46",null,null);

                p.edtHirerNm.set_taborder("1");
                p.edtHirerNm.set_readonly("true");
                p.edtHirerNm.set_displaynulltext("업체명 입력");
                p.edtHirerNm.move("10","56","100%","40",null,null);

                p.Panel00_00_00.set_taborder("2");
                p.Panel00_00_00.set_type("vertical");
                p.Panel00_00_00.set_flexgrow("1");
                p.Panel00_00_00.move("30.00","10","200","86",null,null);

                p.staLabel00_00_01.set_taborder("3");
                p.staLabel00_00_01.set_text("업체분류");
                p.staLabel00_00_01.set_cssclass("sta_WF_Label");
                p.staLabel00_00_01.move("20.00","20","47.66%","46",null,null);

                p.cboBzentyClsfCd.set_taborder("4");
                p.cboBzentyClsfCd.set_innerdataset("dsCboBzentyClsfCd");
                p.cboBzentyClsfCd.set_codecolumn("cdId");
                p.cboBzentyClsfCd.set_datacolumn("cdNm");
                p.cboBzentyClsfCd.set_readonly("true");
                p.cboBzentyClsfCd.set_text("선택하기");
                p.cboBzentyClsfCd.set_value("");
                p.cboBzentyClsfCd.set_index("-1");
                p.cboBzentyClsfCd.move("20.00","66","100%","40",null,null);

                p.Panel00_00_01.set_taborder("5");
                p.Panel00_00_01.set_type("vertical");
                p.Panel00_00_01.set_flexgrow("1");
                p.Panel00_00_01.move("660.00","10","200","86",null,null);

                p.staLabel00_00_02.set_taborder("6");
                p.staLabel00_00_02.set_text("접수번호");
                p.staLabel00_00_02.set_cssclass("sta_WF_Label");
                p.staLabel00_00_02.move("10","10","100%","46",null,null);

                p.edtHireLohNo.set_taborder("7");
                p.edtHireLohNo.set_readonly("true");
                p.edtHireLohNo.set_displaynulltext("업체명 입력");
                p.edtHireLohNo.move("10","56","100%","40",null,null);

                p.Panel00_00_02.set_taborder("8");
                p.Panel00_00_02.set_type("vertical");
                p.Panel00_00_02.set_flexgrow("1");
                p.Panel00_00_02.move("30.00","10","200","86",null,null);

                p.staLabel00_00_00_00_00.set_taborder("9");
                p.staLabel00_00_00_00_00.set_text("상태");
                p.staLabel00_00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00_00_00_00.move("10","10","100%","46",null,null);

                p.cboPrgsSttsCd.set_taborder("10");
                p.cboPrgsSttsCd.set_readonly("true");
                p.cboPrgsSttsCd.set_innerdataset("dsCboPrgsSttsCd");
                p.cboPrgsSttsCd.set_codecolumn("cdId");
                p.cboPrgsSttsCd.set_datacolumn("cdNm");
                p.cboPrgsSttsCd.set_value("");
                p.cboPrgsSttsCd.set_index("-1");
                p.cboPrgsSttsCd.move("797","102","100%","40",null,null);

                p.Panel00_00_03.set_taborder("11");
                p.Panel00_00_03.set_type("vertical");
                p.Panel00_00_03.set_flexgrow("1");
                p.Panel00_00_03.move("30.00","10","200","86",null,null);

                p.pan00_00.set_taborder("12");
                p.pan00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_00.set_flexwrap("wrap");
                p.pan00_00.set_fittocontents("height");
                p.pan00_00.set_verticalgap("0");
                p.pan00_00.set_spacing("0px 20px 10px 20px");
                p.pan00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_00.set_horizontalgap("20");
                p.pan00_00.move("10","10","100.00%","96",null,null);

                p.staLabel00_01_00.set_taborder("13");
                p.staLabel00_01_00.set_text("담당자 성명");
                p.staLabel00_01_00.set_cssclass("sta_WF_Label");
                p.staLabel00_01_00.move("0","0","100%","46",null,null);

                p.edtPicNm.set_taborder("14");
                p.edtPicNm.set_readonly("false");
                p.edtPicNm.set_displaynulltext("담당자 성명 입력");
                p.edtPicNm.set_maxlength("10");
                p.edtPicNm.move("0.00","46","100%","40",null,null);

                p.pan00_01_00.set_taborder("15");
                p.pan00_01_00.set_type("vertical");
                p.pan00_01_00.set_flexgrow("1");
                p.pan00_01_00.move("20.00","0","200","86",null,null);

                p.staLabel00_01_01.set_taborder("16");
                p.staLabel00_01_01.set_text("담당자 직위(직급)");
                p.staLabel00_01_01.set_cssclass("sta_WF_Label");
                p.staLabel00_01_01.move("10","10","100%","46",null,null);

                p.edtPicJbpsNm.set_taborder("17");
                p.edtPicJbpsNm.set_readonly("false");
                p.edtPicJbpsNm.set_displaynulltext("담당자 직위 입력");
                p.edtPicJbpsNm.set_maxlength("10");
                p.edtPicJbpsNm.move("10.00","56","100%","40",null,null);

                p.pan00_01_01.set_taborder("18");
                p.pan00_01_01.set_type("vertical");
                p.pan00_01_01.set_flexgrow("1");
                p.pan00_01_01.move("440.00","0","200","86",null,null);

                p.pan00_01.set_taborder("19");
                p.pan00_01.set_horizontalgap("20");
                p.pan00_01.set_flexcrossaxiswrapalign("start");
                p.pan00_01.set_flexwrap("wrap");
                p.pan00_01.set_fittocontents("height");
                p.pan00_01.set_verticalgap("0");
                p.pan00_01.set_spacing("0px 20px 10px 20px");
                p.pan00_01.set_cssclass("pal_WF_DtlBg");
                p.pan00_01.move("0.00","192","100.00%","96",null,null);

                p.staLabel00_02_00.set_taborder("20");
                p.staLabel00_02_00.set_text("담당자 전화");
                p.staLabel00_02_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_00.move("20","20","100%","46",null,null);

                p.edtPicTelno.set_taborder("21");
                p.edtPicTelno.set_readonly("false");
                p.edtPicTelno.set_displaynulltext("담당자명 입력");
                p.edtPicTelno.set_maxlength("13");
                p.edtPicTelno.set_inputtype("number");
                p.edtPicTelno.move("0","46","100%","40",null,null);

                p.pan00_02_00.set_taborder("22");
                p.pan00_02_00.set_type("vertical");
                p.pan00_02_00.set_flexgrow("1");
                p.pan00_02_00.move("20.00","0","200","86",null,null);

                p.staLabel00_01_02.set_taborder("23");
                p.staLabel00_01_02.set_text("담당자 휴대폰");
                p.staLabel00_01_02.set_cssclass("sta_WF_Label");
                p.staLabel00_01_02.move("0","0","100%","46",null,null);

                p.edtPicMblTelno.set_taborder("24");
                p.edtPicMblTelno.set_displaynulltext("담당자 휴대폰 입력");
                p.edtPicMblTelno.set_maxlength("13");
                p.edtPicMblTelno.set_inputtype("number");
                p.edtPicMblTelno.move("0","46","100%","40",null,null);

                p.pan00_01_02.set_taborder("25");
                p.pan00_01_02.set_type("vertical");
                p.pan00_01_02.set_flexgrow("1");
                p.pan00_01_02.move("860.00","0","200","86",null,null);

                p.staLabel00_01_02_00.set_taborder("26");
                p.staLabel00_01_02_00.set_text("담당자 이메일");
                p.staLabel00_01_02_00.set_cssclass("sta_WF_Label");
                p.staLabel00_01_02_00.move("0","0","100%","46",null,null);

                p.edtPicEmlAddr.set_taborder("27");
                p.edtPicEmlAddr.set_displaynulltext("담당자 이메일 입력");
                p.edtPicEmlAddr.set_maxlength("30");
                p.edtPicEmlAddr.move("0","46","100%","40",null,null);

                p.pan00_01_02_00.set_taborder("28");
                p.pan00_01_02_00.set_type("vertical");
                p.pan00_01_02_00.set_flexgrow("1");
                p.pan00_01_02_00.move("860.00","0","200","86",null,null);

                p.pan00_02.set_taborder("29");
                p.pan00_02.set_horizontalgap("20");
                p.pan00_02.set_flexcrossaxiswrapalign("start");
                p.pan00_02.set_flexwrap("wrap");
                p.pan00_02.set_fittocontents("height");
                p.pan00_02.set_verticalgap("0");
                p.pan00_02.set_spacing("0px 20px 10px 20px");
                p.pan00_02.set_cssclass("pal_WF_DtlBg");
                p.pan00_02.move("0","96","100%","97",null,null);

                p.Panel.set_taborder("30");
                p.Panel.set_type("vertical");
                p.Panel.set_verticalgap("10");
                p.Panel.move("192","1038","100.00%","40",null,null);

                p.staLabel.set_taborder("31");
                p.staLabel.set_text("개인정보활용동의서");
                p.staLabel.set_cssclass("sta_WF_Label");
                p.staLabel.set_fittocontents("width");
                p.staLabel.move("0","-931","400","46",null,null);

                p.panFile.set_taborder("32");
                p.panFile.set_fittocontents("height");
                p.panFile.set_spacing("10px 20px 10px 20px");
                p.panFile.set_flexwrap("wrap");
                p.panFile.set_cssclass("pal_WF_DtlBg");
                p.panFile.set_verticalgap("4");
                p.panFile.move("0","313","100.00%","110",null,null);

                p.grdPrvcUtlzWtcs.set_taborder("33");
                p.grdPrvcUtlzWtcs.set_binddataset("dsFile");
                p.grdPrvcUtlzWtcs.set_autofittype("col");
                p.grdPrvcUtlzWtcs.set_cssclass("grd_WF_FileAdd");
                p.grdPrvcUtlzWtcs.set_readonly("true");
                p.grdPrvcUtlzWtcs.move("20.00","60","100%","40",null,null);
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
                p.staLabel01_00_00.set_taborder("0");
                p.staLabel01_00_00.set_text("임대사유/목적");
                p.staLabel01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00.move("0","0","19.61%","46",null,null);

                p.edtRentRsnPrps.set_taborder("1");
                p.edtRentRsnPrps.set_readonly("true");
                p.edtRentRsnPrps.set_displaynulltext("임대사유/목적 입력");
                p.edtRentRsnPrps.move("0","46","100%","40",null,null);

                p.Panel01_00_00.set_taborder("2");
                p.Panel01_00_00.set_type("vertical");
                p.Panel01_00_00.set_flexgrow("1");
                p.Panel01_00_00.move("20.00","0","610","86",null,null);

                p.pan01_00.set_taborder("3");
                p.pan01_00.set_horizontalgap("20");
                p.pan01_00.set_flexcrossaxiswrapalign("start");
                p.pan01_00.set_flexwrap("wrap");
                p.pan01_00.set_fittocontents("height");
                p.pan01_00.set_verticalgap("0");
                p.pan01_00.set_spacing("0px 20px 10px 20px");
                p.pan01_00.set_cssclass("pal_WF_DtlBg");
                p.pan01_00.move("0","50","100.00%","96",null,null);

                p.staLabel01_01_00.set_taborder("4");
                p.staLabel01_01_00.set_text("구분");
                p.staLabel01_01_00.set_cssclass("sta_WF_Label");
                p.staLabel01_01_00.move("0","0","100%","46",null,null);

                p.cboPstnCd.set_taborder("5");
                p.cboPstnCd.set_innerdataset("dsCboPstnCd");
                p.cboPstnCd.set_codecolumn("cdId");
                p.cboPstnCd.set_datacolumn("cdNm");
                p.cboPstnCd.set_readonly("true");
                p.cboPstnCd.set_text("선택하기");
                p.cboPstnCd.set_value("");
                p.cboPstnCd.set_index("-1");
                p.cboPstnCd.move("28","200","90%","40",null,null);

                p.Panel01_01_00_00_00.set_taborder("6");
                p.Panel01_01_00_00_00.set_horizontalgap("10");
                p.Panel01_01_00_00_00.set_flexmainaxisalign("end");
                p.Panel01_01_00_00_00.set_fittocontents("width");
                p.Panel01_01_00_00_00.move("260.00","0","50","40",null,null);

                p.Panel01_01_00_00.set_taborder("7");
                p.Panel01_01_00_00.set_verticalgap("0");
                p.Panel01_01_00_00.set_horizontalgap("8");
                p.Panel01_01_00_00.move("20","177","100%","40",null,null);

                p.pan01_01_00.set_taborder("8");
                p.pan01_01_00.set_type("vertical");
                p.pan01_01_00.set_flexgrow("1");
                p.pan01_01_00.move("20.00","0","300","86",null,null);

                p.staLabel01_01_01.set_taborder("9");
                p.staLabel01_01_01.set_text("건물명");
                p.staLabel01_01_01.set_cssclass("sta_WF_Label");
                p.staLabel01_01_01.move("0","0","100%","46",null,null);

                p.cboBldgCd.set_taborder("10");
                p.cboBldgCd.set_innerdataset("dsCboBldgCd");
                p.cboBldgCd.set_codecolumn("cdId");
                p.cboBldgCd.set_datacolumn("cdNm");
                p.cboBldgCd.set_readonly("true");
                p.cboBldgCd.set_text("선택하기");
                p.cboBldgCd.set_value("");
                p.cboBldgCd.set_index("-1");
                p.cboBldgCd.move("658","196","100%","40",null,null);

                p.rdoZoneCd.set_taborder("11");
                p.rdoZoneCd.set_fittocontents("width");
                p.rdoZoneCd.set_innerdataset(divForm_form_Div01_form_rdoZoneCd_innerdataset);
                p.rdoZoneCd.set_codecolumn("codecolumn");
                p.rdoZoneCd.set_datacolumn("datacolumn");
                p.rdoZoneCd.set_direction("vertical");
                p.rdoZoneCd.set_readonly("true");
                p.rdoZoneCd.set_index("-1");
                p.rdoZoneCd.move("0.00","46","280","40",null,null);

                p.Panel01_01_01_00_00.set_taborder("12");
                p.Panel01_01_01_00_00.move("1071","192","280","40",null,null);

                p.Panel01_01_01_00.set_taborder("13");
                p.Panel01_01_01_00.set_verticalgap("0");
                p.Panel01_01_01_00.set_horizontalgap("10");
                p.Panel01_01_01_00.set_type("horizontal");
                p.Panel01_01_01_00.move("0","46","100%","40",null,null);

                p.pan01_01_01.set_taborder("14");
                p.pan01_01_01.set_type("vertical");
                p.pan01_01_01.set_flexgrow("1");
                p.pan01_01_01.move("465.00","0","300","86",null,null);

                p.pan01_01.set_taborder("15");
                p.pan01_01.set_horizontalgap("20");
                p.pan01_01.set_flexcrossaxiswrapalign("start");
                p.pan01_01.set_flexwrap("wrap");
                p.pan01_01.set_fittocontents("height");
                p.pan01_01.set_verticalgap("0");
                p.pan01_01.set_spacing("0px 20px 10px 20px");
                p.pan01_01.set_cssclass("pal_WF_DtlBg");
                p.pan01_01.move("0","0","100.00%","96",null,null);

                p.staLabel01_02_00.set_taborder("16");
                p.staLabel01_02_00.set_text("층");
                p.staLabel01_02_00.set_cssclass("sta_WF_Label");
                p.staLabel01_02_00.move("0","0","100%","46",null,null);

                p.edtBldgNofl.set_taborder("17");
                p.edtBldgNofl.set_readonly("true");
                p.edtBldgNofl.set_displaynulltext("희망층 입력");
                p.edtBldgNofl.move("0","56","100%","40",null,null);

                p.pan01_02_00.set_taborder("18");
                p.pan01_02_00.set_type("vertical");
                p.pan01_02_00.set_flexgrow("1");
                p.pan01_02_00.move("30.00","10","300","86",null,null);

                p.staLabel01_02_01.set_taborder("19");
                p.staLabel01_02_01.set_text("면적 (m2)");
                p.staLabel01_02_01.set_cssclass("sta_WF_Label");
                p.staLabel01_02_01.move("0","0","100%","46",null,null);

                p.edtRentAr.set_taborder("20");
                p.edtRentAr.set_readonly("true");
                p.edtRentAr.set_displaynulltext("임차면적 입력");
                p.edtRentAr.move("20.00","66","100%","40",null,null);

                p.pan01_02_01.set_taborder("21");
                p.pan01_02_01.set_type("vertical");
                p.pan01_02_01.set_flexgrow("1");
                p.pan01_02_01.move("660.00","10","300","86",null,null);

                p.staLabel01_02_02.set_taborder("22");
                p.staLabel01_02_02.set_text("입주희망일자");
                p.staLabel01_02_02.set_cssclass("sta_WF_Label");
                p.staLabel01_02_02.move("0.00","0","100%","46",null,null);

                p.calMvnHpeYmd.set_taborder("23");
                p.calMvnHpeYmd.set_readonly("true");
                p.calMvnHpeYmd.move("0.00","46","100%","40",null,null);

                p.pan01_02_02.set_taborder("24");
                p.pan01_02_02.set_type("vertical");
                p.pan01_02_02.set_flexgrow("1");
                p.pan01_02_02.move("20.00","86","300","86",null,null);

                p.pan01_02.set_taborder("25");
                p.pan01_02.set_horizontalgap("20");
                p.pan01_02.set_flexcrossaxiswrapalign("start");
                p.pan01_02.set_flexwrap("wrap");
                p.pan01_02.set_fittocontents("height");
                p.pan01_02.set_verticalgap("0");
                p.pan01_02.set_spacing("0px 20px 10px 20px");
                p.pan01_02.set_cssclass("pal_WF_DtlBg");
                p.pan01_02.move("85","401","100.00%","96",null,null);

                p.staLabel01_03_00.set_taborder("26");
                p.staLabel01_03_00.set_text("용도");
                p.staLabel01_03_00.set_cssclass("sta_WF_Label");
                p.staLabel01_03_00.move("10.00","10","100%","46",null,null);

                p.cboUsgCd.set_taborder("27");
                p.cboUsgCd.set_innerdataset("dsCboUsgCd");
                p.cboUsgCd.set_codecolumn("grp2CdId");
                p.cboUsgCd.set_datacolumn("grp2CdNm");
                p.cboUsgCd.set_readonly("true");
                p.cboUsgCd.set_text("선택하기");
                p.cboUsgCd.set_value("");
                p.cboUsgCd.set_index("-1");
                p.cboUsgCd.move("10.00","56","100%","40",null,null);

                p.Panel01_03_00.set_taborder("28");
                p.Panel01_03_00.set_type("vertical");
                p.Panel01_03_00.set_flexgrow("1");
                p.Panel01_03_00.move("20.00","338","300","86",null,null);

                p.staLabel02_03_01.set_taborder("29");
                p.staLabel02_03_01.set_text("상세용도");
                p.staLabel02_03_01.set_cssclass("sta_WF_Label");
                p.staLabel02_03_01.move("0","10","100%","46",null,null);

                p.cboDtlUsgCd.set_taborder("30");
                p.cboDtlUsgCd.set_innerdataset("dsCboDtlUsgCd");
                p.cboDtlUsgCd.set_codecolumn("cdId");
                p.cboDtlUsgCd.set_datacolumn("cdNm");
                p.cboDtlUsgCd.set_readonly("true");
                p.cboDtlUsgCd.set_value("");
                p.cboDtlUsgCd.set_index("-1");
                p.cboDtlUsgCd.move("553","916","100%","40",null,null);

                p.Panel01_03_01.set_taborder("31");
                p.Panel01_03_01.set_type("vertical");
                p.Panel01_03_01.set_flexgrow("1");
                p.Panel01_03_01.move("30.00","10","300","86",null,null);

                p.pan01_03.set_taborder("32");
                p.pan01_03.set_cssclass("pal_WF_DtlBg");
                p.pan01_03.set_spacing("0px 20px 10px 20px");
                p.pan01_03.set_flexwrap("wrap");
                p.pan01_03.set_horizontalgap("20");
                p.pan01_03.set_type("horizontal");
                p.pan01_03.set_verticalgap("0");
                p.pan01_03.set_fittocontents("height");
                p.pan01_03.move("384","516","100.00%","96",null,null);

                p.divEdtPop.set_taborder("33");
                p.divEdtPop.set_cssclass("btn_WF_Information");
                p.divEdtPop.set_flexshrink("0");
                p.divEdtPop.set_tooltiptype("hover");
                p.divEdtPop.set_tooltiptext("[여객터미널 업무용시설] 운영기획팀 032-741-2401\r\n[교통 업무용시설] 교통운영팀 032-741-2422\r\n[화물터미널 업무용시설] 물류운영팀 032-741-2288\r\n[부대건물] 재무팀 032-741-2323");
                p.divEdtPop.move("0","0","40","40",null,null);
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
            //-- Default Layout : this.divForm.form.Div02.form
            obj = new Layout("default","",0,0,this.divForm.form.Div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.textAreaEtcDmndMttr.set_taborder("0");
                p.textAreaEtcDmndMttr.set_readonly("true");
                p.textAreaEtcDmndMttr.set_displaynulltext("내용 입력");
                p.textAreaEtcDmndMttr.move("0","0","100%","100%",null,null);

                p.pan02.set_taborder("1");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("10px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","0","100.00%","150",null,null);
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
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staSubTitle02_00.set_taborder("0");
                p.staSubTitle02_00.set_text("기본정보");
                p.staSubTitle02_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00.move("1630.00","690","50%","50",null,null);

                p.Button00_00_00.set_taborder("1");
                p.Button00_00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_00.move("2890.00","692","34","34",null,null);

                p.Panel01_02.set_taborder("2");
                p.Panel01_02.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02.set_spacing("0px 10px");
                p.Panel01_02.set_horizontalgap("10");
                p.Panel01_02.set_flexcrossaxisalign("center");
                p.Panel01_02.set_flexmainaxisalign("end");
                p.Panel01_02.move("2340.00","690","50%","50",null,null);

                p.sub_tit00.set_taborder("3");
                p.sub_tit00.set_background("#ffffff");
                p.sub_tit00.set_flexcrossaxisalign("end");
                p.sub_tit00.move("1630","674","100%","70",null,null);

                p.Div00.set_taborder("4");
                p.Div00.set_text("Div00");
                p.Div00.set_cssclass("div_WF_Bg");
                p.Div00.set_fittocontents("height");
                p.Div00.move("0","370","100%","410",null,null);

                p.staSubTitle02_00_00.set_taborder("5");
                p.staSubTitle02_00_00.set_text("임차관련 정보");
                p.staSubTitle02_00_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_00.move("1630.00","690","50%","50",null,null);

                p.Button00_00_00_00.set_taborder("6");
                p.Button00_00_00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_00_00.move("2890.00","692","34","34",null,null);

                p.Panel01_02_00.set_taborder("7");
                p.Panel01_02_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_00.set_spacing("0px 10px");
                p.Panel01_02_00.set_horizontalgap("10");
                p.Panel01_02_00.set_flexcrossaxisalign("center");
                p.Panel01_02_00.set_flexmainaxisalign("end");
                p.Panel01_02_00.move("2340.00","690","50%","50",null,null);

                p.sub_tit01.set_taborder("8");
                p.sub_tit01.set_background("#ffffff");
                p.sub_tit01.set_flexcrossaxisalign("end");
                p.sub_tit01.move("1630","674","100%","70",null,null);

                p.Div01.set_taborder("9");
                p.Div01.set_text("Div00");
                p.Div01.set_cssclass("div_WF_Bg");
                p.Div01.set_fittocontents("height");
                p.Div01.move("0","728","100%","384",null,null);

                p.staSubTitle02_00_01.set_taborder("10");
                p.staSubTitle02_00_01.set_text("기타 요청사항");
                p.staSubTitle02_00_01.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_01.move("1630.00","690","50%","50",null,null);

                p.Button00_00_01.set_taborder("11");
                p.Button00_00_01.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_01.move("2890.00","692","34","34",null,null);

                p.Panel01_02_01.set_taborder("12");
                p.Panel01_02_01.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_01.set_spacing("0px 10px");
                p.Panel01_02_01.set_horizontalgap("10");
                p.Panel01_02_01.set_flexcrossaxisalign("center");
                p.Panel01_02_01.set_flexmainaxisalign("end");
                p.Panel01_02_01.move("2340.00","690","50%","50",null,null);

                p.sub_tit02.set_taborder("13");
                p.sub_tit02.set_background("#ffffff");
                p.sub_tit02.set_flexcrossaxisalign("end");
                p.sub_tit02.move("1630","674","100%","70",null,null);

                p.Div02.set_taborder("14");
                p.Div02.set_text("Div00");
                p.Div02.set_cssclass("div_WF_Bg");
                p.Div02.set_fittocontents("height");
                p.Div02.move("0","990","100%","150",null,null);
            	}
            );
            obj.set_verticalgap("10");
            obj.set_flexmainaxisalign("start");
            obj.set_flexwrap("wrap");
            obj.set_type("vertical");
            obj.set_spacing("0px 400px 0px 0px");
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
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_type("horizontal");
            obj.set_verticalgap("10");
            obj.set_flexmainaxisalign("start");
            obj.set_flexwrap("wrap");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divQuick.form
            obj = new Layout("default","",0,0,this.divQuick.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btn00.set_taborder("0");
                p.btn00.set_text("기본정보");
                p.btn00.set_cssclass("btn_WF_Quick_S");
                p.btn00.move("17","20","100%","45",null,null);

                p.btn01.set_taborder("1");
                p.btn01.set_text("임차관련 정보");
                p.btn01.set_cssclass("btn_WF_Quick");
                p.btn01.move("17.00","btn00:0","100%","45",null,null);

                p.btn02.set_taborder("2");
                p.btn02.set_text("기타 요청사항");
                p.btn02.set_cssclass("btn_WF_Quick");
                p.btn02.move("17.00","110","100%","45",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("20px 17px  0px 17px");
            this.divQuick.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divQuick.form
            obj = new Layout("mobile","",0,0,this.divQuick.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btn00.set_cssclass("btn_WF_QuickM_S");
                p.btn00.set_fittocontents("width");

                p.btn01.set_fittocontents("width");
                p.btn01.set_cssclass("btn_WF_QuickM");

                p.btn02.set_fittocontents("width");
                p.btn02.set_cssclass("btn_WF_QuickM");
            	}
            );
            obj.set_type("horizontal");
            obj.set_spacing("0px 0px 0px 0px");
            this.divQuick.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divBtn.form
            obj = new Layout("default","",0,0,this.divBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnCancel.set_taborder("1");
                p.btnCancel.set_text("취소");
                p.btnCancel.set_cssclass("btn_WF_No");
                p.btnCancel.set_fittocontents("none");
                p.btnCancel.move("7","20","100","40",null,null);

                p.btnSave.set_taborder("3");
                p.btnSave.set_text("저장");
                p.btnSave.set_cssclass("btn_WF_Yes");
                p.btnSave.move("200.00","365","100","40",null,null);

                p.btnDel.set_taborder("0");
                p.btnDel.set_text("삭제");
                p.btnDel.set_cssclass("btn_WF_No");
                p.btnDel.move("200.00","365","100","40",null,null);

                p.btnCnddRcmdtn.set_taborder("2");
                p.btnCnddRcmdtn.set_text("후보추천검색");
                p.btnCnddRcmdtn.set_cssclass("btn_WF_Yes");
                p.btnCnddRcmdtn.move("457.00","30","140","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_verticalgap("10");
            obj.set_horizontalgap("10");
            obj.set_spacing("20px 10px");
            obj.set_flexwrap("wrap");
            obj.set_flexcrossaxiswrapalign("start");
            this.divBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divBtn.form
            obj = new Layout("mobile","",0,0,this.divBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnSave.set_fittocontents("width");

                p.btnDel.set_fittocontents("width");

                p.btnCancel.set_fittocontents("width");

                p.btnCnddRcmdtn.set_fittocontents("width");
            	}
            );
            obj.set_flexmainaxisalign("start");
            obj.set_flexwrap("nowrap");
            obj.set_spacing("0px 10px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("10");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxiswrapalign("start");
            this.divBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,1400,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("임차대기목록 상세");

                p.divTitle.set_taborder("1");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_cssclass("div_WF_QuickFrBg");
                p.divForm.set_fittocontents("height");
                p.divForm.move("0","divTitle:0",null,"1300","60",null);

                p.divQuick.set_taborder("2");
                p.divQuick.set_text("div00");
                p.divQuick.set_cssclass("div_WF_QuickMenu");
                p.divQuick.set_fittocontents("height");
                p.divQuick.move(null,"70","296","165","60",null);

                p.divBtn.set_taborder("3");
                p.divBtn.set_text("div00");
                p.divBtn.set_cssclass("div_WF_QuickBtnBg");
                p.divBtn.set_fittocontents("height");
                p.divBtn.move(null,"divQuick:0","296","130","60",null);

                p.RaonkUpload.set_taborder("4");
                p.RaonkUpload.set_DevelopLangage("JAVA");
                p.RaonkUpload.set_ExtensionAllowOrLimit("1");
                p.RaonkUpload.set_HandlerUrl("/common/uploadDownload.do");
                p.RaonkUpload.set_RunTimes("html5");
                p.RaonkUpload.set_ButtonBarView("0");
                p.RaonkUpload.set_AllowDuplicationFile("1");
                p.RaonkUpload.set_text("");
                p.RaonkUpload.set_DisableDeleteConfirm("1");
                p.RaonkUpload.set_positionstep("0");
                p.RaonkUpload.set_visible("false");
                p.RaonkUpload.move("-1080","630","1020","200",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.set_cssclass("div_WF_QuickFrBgM");
                p.divForm.set_fittocontents("none");
                p.divForm.move("0","120",null,null,"0","80");

                p.divTitle.move("0","0",null,"50","0",null);

                p.divQuick.set_cssclass("div_WF_QuickMenuM");
                p.divQuick.move("20","60",null,"60","20",null);

                p.divBtn.set_cssclass("div_WF_QuickBtnBgM");
                p.divBtn.set_fittocontents("none");
                p.divBtn.move("0",null,null,"80","0","0");
            	}
            );
            obj.set_mobileorientation("Portrait");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtHirerNm","value","dsGet","bzentyNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtPicEmlAddr","value","dsGet","picEmlAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.Div02.form.textAreaEtcDmndMttr","value","dsGet","etcDmndMttr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.Div00.form.edtHirerNm","value","dsGet","bzentyNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.Div00.form.cboBzentyClsfCd","value","dsGet","bzentyClsfCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.Div00.form.edtHireLohNo","value","dsGet","rcptNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.Div00.form.cboPrgsSttsCd","value","dsGet","prgrsSttsCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.Div00.form.edtPicNm","value","dsGet","picNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.Div00.form.edtPicJbpsNm","value","dsGet","picJbpsNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divForm.form.Div00.form.edtPicTelno","value","dsGet","picTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divForm.form.Div00.form.edtPicMblTelno","value","dsGet","picMblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divForm.form.Div00.form.edtPicEmlAddr","value","dsGet","picEmlAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divForm.form.Div01.form.edtRentRsnPrps","value","dsGet","rentRsnPrps");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divForm.form.Div01.form.cboPstnCd","value","dsGet","pstnCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divForm.form.Div01.form.cboBldgCd","value","dsGet","bldgCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divForm.form.Div01.form.rdoZoneCd","value","dsGet","zoneCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divForm.form.Div01.form.edtBldgNofl","value","dsGet","bldgNofl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divForm.form.Div01.form.edtRentAr","value","dsGet","rntar");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divForm.form.Div01.form.calMvnHpeYmd","value","dsGet","mvnHpeYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divForm.form.Div01.form.cboUsgCd","value","dsGet","usgCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divForm.form.Div01.form.cboDtlUsgCd","value","dsGet","dtlUsgCd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.addIncludeScript("REN004M02.xfdl","xjs::TaskCom.xjs");
        this.registerScript("REN004M02.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	REN004M02.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/10/25
        *  @Desction   ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/10/25			박영수						최초생성
        *******************************************************************************
        */

        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;  // 업무공통
        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.param;
        this.validateColumn = [];
        this.atchValidateColumn = [];

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
        // 조회
        this.cfnSearch = function ()
        {
        	this.selectTransaction();
        };

        this.cfnClose = function (){};

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        // 데이터 조회
        this.selectTransaction = function()
        {
        	var strSvcId    = "select";
        	var strSvcUrl   = "ren/frs/selectHireWtng.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsGet=dsGet dsAtfl=dsAtfl";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 파일 업로드
        this.upload = function() {
        	var callBackFnc = "fnCallback";   	  // transaction의 결과를 받을 Function 이름
        	var obj = { "thumnail" : "N"          // 썸네일 생성여부(첨부파일 중 이미지 파일이 있는 경우 "Y" 이면 썸네일 파일 생성)
        			    , "bsnsSeCd" : "TSPREN"   // 업무구분코드(입주자서비스)
        				, "prgrmId"  : this.name  // 프로그램ID (화면 ID)
        			};

        	this.RaonkUpload.AddFormData('params', JSON.stringify(obj));
        	this.RaonkUpload.Transfer();

        	return;
        };

        // 데이터 저장
        this.updateTransaction = function()
        {
        	var strSvcId    = "update";
        	var strSvcUrl   = "ren/frs/updateHireWtng.do";
        	var inData      = "dsGet=dsGet:A dsAtfl=dsAtfl:U";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= false;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 후보추천검색
        this.cnddRcmdtnTransaction = function()
        {
        	var strSvcId    = "cnddRcmdtn";
        	var strSvcUrl   = "ren/frs/cnddRcmdtn.do";
        	var inData      = "dsGet=dsGet:A";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= false;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if (errorCode != 0)	{
        		return;
        	}

        	switch (svcID) {
        		case "_cfnComCdLoad_":
        			break;

        		case "cfnEtcCd":
        			this.dsFile.clear();

        			for (var i = 0; i < this.dsAtflArtclList.rowcount; i++) {
        				this.dsFile.addColumn(this.dsAtflArtclList.getColumn(i, "cdId"), "STRING");
        			}

        			this.dsFile.addRow();
        			break;

        		case "select":
        			break;

        		case "uploadComplete":
        			// 파일 업로드 결과를 첨부파일 데이터셋에 설정
        			for (var i = 0; i < this.dsAtchRslt.rowcount; i++) {
        			    // 첨부파일관리번호
        				this.dsAtfl.setColumn(this.dsAtfl.findRow("colId", this.dsAtchRslt.getColumn(i, "colId")), "atflMngNo", this.dsAtchRslt.getColumn(i, "atflMngNo"));
        			}

                    // 저장
        			this.updateTransaction();
        			break;

        		case "update":
        			this.gfnAlertMsg("msg", "MSG_007", [ this.objApp.getVariable("gvRetMsg") ]);

        			if (this.objApp.screenid == "Desktop_screen") {
        				var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        				this.gfnCloseMenu(cMenuId);
        				this._gfnOpenMenu(cMenuId.substring(0,14),"",true);
        			} else {
        				this.close();
        			}

        			break;

        		case "cnddRcmdtn":
        			this.gfnAlertMsg("msg", "MSG_007", [ this.objApp.getVariable("gvRetMsg") ]);
        			break;
        	}
        };

        // 얼럿창 콜백 함수
        this.msgCallback = function(sPopupId, sRtn)
        {
        	var oRtn = JSON.parse(sRtn);

        	if (sPopupId == "update_confirm" && oRtn.result == "Y") {
        		this.dsGet.setColumn(0, "rowSttsCd", "U");

        		// 첨부파일 변경시 첨부파일부터 저장
        		if (this.gfnDsIsUpdated(this.dsAtfl)) {  // 첨부파일 변경시
        			// 첨부파일 저장
        			this.upload();
        		} else {
        			// 저장
        			this.updateTransaction();
        		}
        	}

        	if (sPopupId == "delete_confirm" && oRtn.result == "Y") {
        		this.dsGet.setColumn(0, "rowSttsCd", "D");
        		this.updateTransaction();
        	}

        	if (sPopupId == "cnddRcmdtn_confirm" && oRtn.result == "Y") {
        		this.cnddRcmdtnTransaction();
        	}

        };

        // 첨부파일 필수체크
        this.atchValidate = function(validateColumn) {
        	var ret = true;

        	for (var i=0;i<validateColumn.length;i++) {
        		if (this.gfnIsNull(this.dsFile.getColumn(0, validateColumn[i].code))) {
        			this.gfnAlertMsg("validate", "CST_004", [validateColumn[i].title], "msgCallback");
        			ret = false;
        			break;
        		}
        	}

        	return ret;
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	if (this.opener) {
        		this.param = {
        			"status" : this.getOwnerFrame().status
        			,"hireLohNo" : this.getOwnerFrame().hireLohNo
        		}
        	} else {
        		this.param = this.getOwnerFrame().form.fvObjArgs;
        	}

        	this.dsSearch.setColumn(0, "hireLohNo", this.param.hireLohNo);

        	// 공통코드 함수 호출
        	this.cfnComCdLoad({dsCboBzentyClsfCd:"BZENTY_CLSF_CD:B", dsCboPstnCd:"ZONE_SE_CD:B", dsCboPrgsSttsCd:"HIRE_ASN_STTS_CD:B" });
        	this.cfnEtcCdLoad({id:"cfnEtcCd"
        					 , cbf:"fnCallback"
        					 , dsCboBldgCd:"{id:'selectTaskComListCd', cnd:{cdTyId:'RENT_ASN_BLDG'}, opt:'A:cdNm'}"
        					 , dsCboUsgCd:"{id:'selectTaskComListCd', cnd:{cdTyId:'RENT_USE'}, opt:'B:grp2CdNm'}"
        					 , dsCboDtlUsgCd:"{id:'selectTaskComListCd', cnd:{cdTyId:'RENT_USE'}, opt:'B:cdNm'}"
        					 , dsAtflArtclList:"{id:'selectTaskComListCd', cnd:{cdTyId:'ATFL_SE', grp1CdId:'REN004M02'}}"});

        	if (this.param != null && this.param.hireLohNo != null && this.param.hireLohNo != '') {
        		this.cfnSearch();
        	}

          	this.validateColumn.push({"title" : "담당자 성명", "com": this.divForm.form.Div00.form.edtPicNm});
          	this.validateColumn.push({"title" : "담당자 직위", "com": this.divForm.form.Div00.form.edtPicJbpsNm});
        	this.validateColumn.push({"title" : "담당자 전화", "com": this.divForm.form.Div00.form.edtPicTelno});
         	this.validateColumn.push({"title" : "담당자 휴대폰", "com": this.divForm.form.Div00.form.edtPicMblTelno});
         	this.validateColumn.push({"title" : "담당자 이메일", "com": this.divForm.form.Div00.form.edtPicEmlAddr});

        	this.atchValidateColumn.push({"title" : "개인정보수집이용동의서", "code" : "A110"});
        };

        // 상세 페이지 옆 버튼 부분 플로팅 스크롤
        this.form_onvscroll = function(obj,e)
        {
        	if (this.objApp.screenid == "Desktop_screen") {
        		this.divQuick.top = e.pos+50;
        		this.divBtn.top = e.pos+206;
        	}
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // 퀵메뉴
        this.divQuick_onclick = function(obj,e)
        {
        	if (obj.name == "btn00") {
        		this.divForm.form.sub_tit00.setFocus(); // 기본정보
        	} else if (obj.name == "btn01") {
        		this.divForm.form.sub_tit01.setFocus(); // 임차관련정보
        	} else if (obj.name == "btn02") {
        		this.divForm.form.sub_tit02.setFocus();	// 기타 요청사항
        	}
        };

        // 구분 변경
        this.divForm_cboPstnCd_onitemchanged = function(obj,e)
        {
        	if (e.postvalue == "") {
        		this.dsCboBldgCd.filter("");
        		this.divSch.form.cboBldgCd.set_index(0);
        	} else {
        		this.dsCboBldgCd.filter("cdVl01 == '" + e.postvalue + "' || cdNm == '전체' ");
        	}
        };

        // 취소
        this.divBtn_btnCancel_onclick = function(obj,e)
        {
        	if (this.objApp.screenid == "Desktop_screen") {
        		var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        		this.gfnCloseMenu(cMenuId);
        		this._gfnOpenMenu(cMenuId.substring(0,14),"",true);
        	} else {
        		this.close();
        	}
        };

        // 저장
        this.divBtn_btnSave_onclick = function(obj,e)
        {
        	if (this.gfnDsIsUpdated(this.dsGet) == true || this.gfnDsIsUpdated(this.dsAtfl) == true) {
        		// 필수입력 여부 체크
        		if (this.gfnDsIsValidated(this.validateColumn)) {
        		// 첨부파일필수입력 여부 체크
        			if (this.atchValidate(this.atchValidateColumn)) {
        				this.gfnConfirmMsg("update_confirm", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        			}
        		}
        	} else {
        		this.gfnAlertMsg("msg", "MSG_004");
        		return;
        	}
        };

        // 삭제
        this.divBtn_btnDel_onclick = function(obj,e)
        {
        	this.gfnConfirmMsg("delete_confirm", "MSG_005", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        };

        // 후보추천검색
        this.divBtn_btnCnddRcmdtn_onclick = function(obj,e)
        {
        	this.gfnConfirmMsg("cnddRcmdtn_confirm", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"], "", ["후보추천검색"]);
        };

        // 파일 그리드
        this.divForm_grdAtch_oncellclick = function(obj,e)
        {
        	// 그리드 내의 버튼 클릭
        	if(e.col == 0) {
        		if (obj.getCellPropertyValue(0, 0, "cssclass") == "CellFile") {  // 파일
        			// 파일 다운로드
        			this.cfnFileDwnld(this.RaonkUpload, this.dsAtfl, obj.getCellProperty("body", 0, "text").substr(5), e);
        		}
            } else if(e.col == 1) {
        	    if (obj.getCellPropertyValue(0, 1, "edittype") != "none") {
        			if (obj.getCellPropertyValue(0, 1, "cssclass") == "CellFileUp") {  // 파일찾기
        				// 첨부파일 선택 창 열기
        				this.cfnSetAtflInfo(this.RaonkUpload, obj).OpenFileDialog();
        			} else {
        				// 첨부파일 삭제
        				this.cfnSetAtflInfo(this.RaonkUpload, obj).cfnDelAtfl();
        			}
        		}
        	}
        };

        this.RaonkUpload_RAONKUPLOAD_CreationComplete = function(obj,  paramObj)
        {
        	// 업로드 솔루션이 초기 생성시 업로드 할 경로를 지정해야 한다.
        	// /CMM/YYYY/MM/DD/  <<== CMM은 업무별 폴더 지정이고 기본적으로 /년도/월/일 의 폴더 구조를 갖는다.
        	this.RaonkUpload.SetConfig('FolderNameRule', '/REN/TSC/YYYY/MM/DD/');

        	// 첨부 파일 추가 함수
            obj.cfnAddAtfl = function(oFile) {
        		// 이미 첨부된 파일이 있으면 기존 파일 삭제
        		this.cfnDelAtfl();

        		// RaonkUpload에 컬럼ID 설정
        		this.SetFileCustomValue(-1, JSON.stringify({ "strCustomValue" : this.upatflinfo.colid }));

        		// 첨부파일 DS에 추가
        		var nRow = this.parent.dsAtfl.findRow("colId", this.upatflinfo.colid);
        			nRow = Math.max(nRow, 0) ? nRow : this.parent.dsAtfl.addRow();
        		this.parent.dsAtfl.setColumn(nRow, "colId", this.upatflinfo.colid);  // 컬럼ID

        		// 첨부 파일 표출용 DS 설정
        		this.parent.dsFile.setColumn(0, this.upatflinfo.colid, oFile.userdata.strName + '(' + oFile.userdata.nSize + ')');  // 파일풀명
        	};

        	// 첨부 파일 삭제
            obj.cfnDelAtfl = function() {
        	    // 존재하지 않으면 돌아감
        		var nRow = this.parent.dsAtfl.findRow("colId", this.upatflinfo.colid);
        		if (nRow == -1) { return; }

        		// RaonkUpload mergeFile 삭제
        		if (this.GetListInfo().mergeFile) {
        		    var RaonkUpload       = this;
        			var cfnGetCustomValue = this.parent.cfnGetCustomValue;
        			this.GetListInfo().mergeFile.forEach(function(v, i, o) {
        			    if (cfnGetCustomValue(v.customValue) == RaonkUpload.upatflinfo.colid) {
        					RaonkUpload.SetSelectFile(i, '0');
        					RaonkUpload.DeleteSelectedFile();
        				}
        			});
        		}

        		// 첨부파일 삭제
        		this.parent.dsAtfl.deleteRow(this.parent.dsAtfl.findRow("colId", this.upatflinfo.colid));

        		// 첨부 파일 표출용 DS 설정
        		this.parent.dsFile.setColumn(0, this.upatflinfo.colid, "")  // 파일풀명
        	};
        };

        this.RaonkUpload_RAONKUPLOAD_BeforeAddFile = function(obj, paramObj)
        {
        	return true;
        };

        this.RaonkUpload_RAONKUPLOAD_AfterAddFile = function(obj, e)
        {
            obj.cfnAddAtfl(e);
        };

        this.RaonkUpload_RAONKUPLOAD_OnError = function(obj, paramObj)
        {
            // 파일 업로드 중 오류가 발생했습니다!
        	this.gfnAlertMsg(this.RaonkUpload.name, "CST_002", [paramObj.userdata.strMessage]);
        };

        this.RaonkUpload_RAONKUPLOAD_UploadComplete = function(obj, e)
        {
        	var allListArray = this.RaonkUpload.GetListInfo("json");
        	// 파일 업로드 후 첨부파일관리번호를 얻기 위한 함수
        	this.gfnUploadComplete("uploadComplete", allListArray, "dsAtchRslt", "fnCallback");
        };

        this.dsAtfl_onload = function(obj,e)
        {
        	// 데이터 조회 후 첨부파일 파일리스트에 셋팅
        	this.gfnDownloadSetting(this.RaonkUpload, this.dsAtfl);

        	// 첨부 파일 표출용 DS 설정
        	for (var i = 0; i < this.dsAtfl.rowcount; i++) {
        		// 첨부 파일 표출용 DS 설정
        		var colId = this.dsAtfl.getColumn(i, "colId");
        		this.dsFile.setColumn(0, colId , this.dsAtfl.getColumn(i, "orgnlFileNm") + '(' + this.dsAtfl.getColumn(i, "fileSz") + ')');  // 파일풀명
        	}

        	this.resetScroll();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onvscroll",this.form_onvscroll,this);
            this.divForm.form.Div00.form.staLabel00_01_00.addEventHandler("onclick",this.divForm_staLabel05_00_onclick,this);
            this.divForm.form.Div00.form.staLabel00_01_01.addEventHandler("onclick",this.divForm_staLabel05_01_onclick,this);
            this.divForm.form.Div00.form.staLabel00_02_00.addEventHandler("onclick",this.divForm_staLabel05_00_onclick,this);
            this.divForm.form.Div00.form.staLabel.addEventHandler("onclick",this.divForm_Div05_staLabel00_02_01_onclick,this);
            this.divForm.form.Div00.form.grdPrvcUtlzWtcs.addEventHandler("oncellclick",this.divForm_grdAtch_oncellclick,this);
            this.divForm.form.Div01.form.edtRentRsnPrps.addEventHandler("onchanged",this.edt00_02_onchanged,this);
            this.divForm.form.Div01.form.cboPstnCd.addEventHandler("onitemchanged",this.divForm_cboPstnCd_onitemchanged,this);
            this.divForm.form.Div01.form.staLabel01_01_01.addEventHandler("onclick",this.divForm_staLabel05_01_onclick,this);
            this.divForm.form.Div01.form.rdoZoneCd.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.divForm.form.Div01.form.staLabel01_02_00.addEventHandler("onclick",this.divForm_staLabel05_00_onclick,this);
            this.divForm.form.Div01.form.staLabel01_02_01.addEventHandler("onclick",this.divForm_staLabel05_01_onclick,this);
            this.divQuick.form.btn00.addEventHandler("onclick",this.divQuick_onclick,this);
            this.divQuick.form.btn01.addEventHandler("onclick",this.divQuick_onclick,this);
            this.divQuick.form.btn02.addEventHandler("onclick",this.divQuick_onclick,this);
            this.divBtn.form.btnCancel.addEventHandler("onclick",this.divBtn_btnCancel_onclick,this);
            this.divBtn.form.btnSave.addEventHandler("onclick",this.divBtn_btnSave_onclick,this);
            this.divBtn.form.btnDel.addEventHandler("onclick",this.divBtn_btnDel_onclick,this);
            this.divBtn.form.btnCnddRcmdtn.addEventHandler("onclick",this.divBtn_btnCnddRcmdtn_onclick,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddFile",this.RaonkUpload_RAONKUPLOAD_AfterAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_CreationComplete",this.RaonkUpload_RAONKUPLOAD_CreationComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_UploadComplete",this.RaonkUpload_RAONKUPLOAD_UploadComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_OnError",this.RaonkUpload_RAONKUPLOAD_OnError,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeAddFile",this.RaonkUpload_RAONKUPLOAD_BeforeAddFile,this);
            this.dsAtfl.addEventHandler("onload",this.dsAtfl_onload,this);
        };
        this.loadIncludeScript("REN004M02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
