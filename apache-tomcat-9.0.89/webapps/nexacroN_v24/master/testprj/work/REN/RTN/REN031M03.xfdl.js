(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("REN031M03");
            this.set_titletext("임차의향서(반납) 접수");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,2000);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"hireLoiNo\" type=\"STRING\" size=\"256\"/><Column id=\"rtfeYnCd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"hireLoiNo\" type=\"STRING\" size=\"256\"/><Column id=\"hireLohNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"loiSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrsSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"hirerCustNo\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyClsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyClsfNm\" type=\"STRING\" size=\"256\"/><Column id=\"rtfeYnCd\" type=\"STRING\" size=\"256\"/><Column id=\"mncoYnCd\" type=\"STRING\" size=\"256\"/><Column id=\"utltYnCd\" type=\"STRING\" size=\"256\"/><Column id=\"rltnMttr\" type=\"STRING\" size=\"256\"/><Column id=\"noteMttr\" type=\"STRING\" size=\"256\"/><Column id=\"checkIdfrNm1\" type=\"STRING\" size=\"256\"/><Column id=\"checkIdfrNm2\" type=\"STRING\" size=\"256\"/><Column id=\"sbmsnDt\" type=\"STRING\" size=\"256\"/><Column id=\"sbmsnId\" type=\"STRING\" size=\"256\"/><Column id=\"rvwOpnn\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSpceList", this);
            obj._setContents("<ColumnInfo><Column id=\"hireLoiNo\" type=\"STRING\" size=\"256\"/><Column id=\"polSpceId\" type=\"STRING\" size=\"256\"/><Column id=\"rtnChgSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizSectNm\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnDtyDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"bldgCd\" type=\"STRING\" size=\"256\"/><Column id=\"bldgNm\" type=\"STRING\" size=\"256\"/><Column id=\"usgCd\" type=\"STRING\" size=\"256\"/><Column id=\"dtlUsgCd\" type=\"STRING\" size=\"256\"/><Column id=\"rmnmNo\" type=\"STRING\" size=\"256\"/><Column id=\"rntar\" type=\"STRING\" size=\"256\"/><Column id=\"rentBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"rentEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"cfmtnRmnmNo\" type=\"STRING\" size=\"256\"/><Column id=\"cfmtnrntar\" type=\"STRING\" size=\"256\"/><Column id=\"cfmtnCtrtBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"cfmtnCtrtEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"userCnt\" type=\"STRING\" size=\"256\"/><Column id=\"userCnt1\" type=\"STRING\" size=\"256\"/><Column id=\"userCnt2\" type=\"STRING\" size=\"256\"/><Column id=\"userCnt3\" type=\"STRING\" size=\"256\"/><Column id=\"rtnHpeDt\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtCncltnDt\" type=\"STRING\" size=\"256\"/><Column id=\"gvbkAplyYn\" type=\"STRING\" size=\"256\"/><Column id=\"hpePrlgDt\" type=\"STRING\" size=\"256\"/><Column id=\"cfmtnPrlgDt\" type=\"STRING\" size=\"256\"/><Column id=\"noteMttr\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtPrd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPicList", this);
            obj._setContents("<ColumnInfo><Column id=\"hireLoiNo\" type=\"STRING\" size=\"256\"/><Column id=\"regSeq\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntSmYn\" type=\"STRING\" size=\"256\"/><Column id=\"picDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"picNm\" type=\"STRING\" size=\"256\"/><Column id=\"picJbpsNm\" type=\"STRING\" size=\"256\"/><Column id=\"picTelno\" type=\"STRING\" size=\"256\"/><Column id=\"picMblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"picEmlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"picFxno\" type=\"STRING\" size=\"256\"/><Column id=\"dtyBsnsNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtflList", this);
            obj._setContents("<ColumnInfo><Column id=\"loiSeCd\" type=\"STRING\" size=\"0\"/><Column id=\"prgrsSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"hirerCustNo\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyNm\" type=\"STRING\" size=\"0\"/><Column id=\"bzentyClsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyClsfNm\" type=\"STRING\" size=\"256\"/><Column id=\"rtfeYnCd\" type=\"STRING\" size=\"0\"/><Column id=\"mncoYnCd\" type=\"STRING\" size=\"0\"/><Column id=\"utltYnCd\" type=\"STRING\" size=\"0\"/><Column id=\"rltnMttr\" type=\"STRING\" size=\"0\"/><Column id=\"noteMttr\" type=\"STRING\" size=\"0\"/><Column id=\"checkListYn1\" type=\"STRING\" size=\"256\"/><Column id=\"checkListYn2\" type=\"STRING\" size=\"256\"/><Column id=\"sbmsnDt\" type=\"STRING\" size=\"0\"/><Column id=\"sbmsnId\" type=\"STRING\" size=\"0\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHireLoh", this);
            obj._setContents("<ColumnInfo><Column id=\"hireLoiNo\" type=\"STRING\" size=\"256\"/><Column id=\"hireLohNo\" type=\"STRING\" size=\"256\"/><Column id=\"loiSeCd\" type=\"STRING\" size=\"0\"/><Column id=\"prgrsSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"hirerCustNo\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyNm\" type=\"STRING\" size=\"0\"/><Column id=\"bzentyClsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyClsfNm\" type=\"STRING\" size=\"256\"/><Column id=\"rtfeYnCd\" type=\"STRING\" size=\"0\"/><Column id=\"mncoYnCd\" type=\"STRING\" size=\"0\"/><Column id=\"utltYnCd\" type=\"STRING\" size=\"0\"/><Column id=\"rltnMttr\" type=\"STRING\" size=\"0\"/><Column id=\"noteMttr\" type=\"STRING\" size=\"0\"/><Column id=\"checkIdfrNm1\" type=\"STRING\" size=\"256\"/><Column id=\"checkIdfrNm2\" type=\"STRING\" size=\"256\"/><Column id=\"sbmsnDt\" type=\"STRING\" size=\"0\"/><Column id=\"sbmsnId\" type=\"STRING\" size=\"0\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHireLohSpceList", this);
            obj._setContents("<ColumnInfo><Column id=\"hireLoiNo\" type=\"STRING\" size=\"0\"/><Column id=\"polSpceId\" type=\"STRING\" size=\"0\"/><Column id=\"rtnChgSeCd\" type=\"STRING\" size=\"0\"/><Column id=\"bizSectNm\" type=\"STRING\" size=\"0\"/><Column id=\"cstrnDtyDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"bldgCd\" type=\"STRING\" size=\"0\"/><Column id=\"bldgNm\" type=\"STRING\" size=\"256\"/><Column id=\"usgCd\" type=\"STRING\" size=\"0\"/><Column id=\"dtlUsgCd\" type=\"STRING\" size=\"0\"/><Column id=\"rmnmNo\" type=\"STRING\" size=\"0\"/><Column id=\"rntar\" type=\"STRING\" size=\"0\"/><Column id=\"rentBgngYmd\" type=\"STRING\" size=\"0\"/><Column id=\"rentEndYmd\" type=\"STRING\" size=\"0\"/><Column id=\"cfmtnRmnmNo\" type=\"STRING\" size=\"0\"/><Column id=\"cfmtnrntar\" type=\"STRING\" size=\"0\"/><Column id=\"cfmtnCtrtBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"cfmtnCtrtEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"userCnt\" type=\"STRING\" size=\"0\"/><Column id=\"userCnt1\" type=\"STRING\" size=\"0\"/><Column id=\"userCnt2\" type=\"STRING\" size=\"0\"/><Column id=\"userCnt3\" type=\"STRING\" size=\"0\"/><Column id=\"rtnHpeDt\" type=\"STRING\" size=\"0\"/><Column id=\"ctrtCncltnDt\" type=\"STRING\" size=\"0\"/><Column id=\"gvbkAplyYn\" type=\"STRING\" size=\"0\"/><Column id=\"hpePrlgDt\" type=\"STRING\" size=\"0\"/><Column id=\"cfmtnPrlgDt\" type=\"STRING\" size=\"0\"/><Column id=\"noteMttr\" type=\"STRING\" size=\"0\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboBldgCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboDtlUsgCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboRtnChgSeCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboprgrsSttsCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","divTitle:0",null,"1950","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickFrBg");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle00","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("임차인 정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel00","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 20px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divRcptNo","990","16","100%","96",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("20");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staRcptNo","0","0","100%","46",null,null,null,null,null,null,this.divForm.form.divRcptNo.form);
            obj.set_taborder("0");
            obj.set_text("접수번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.divRcptNo.addChild(obj.name, obj);

            obj = new Edit("edtRcptNo","0","46","100%","40",null,null,null,null,null,null,this.divForm.form.divRcptNo.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.divRcptNo.addChild(obj.name, obj);

            obj = new Panel("panRcptNo","20","0","300","86",null,null,null,null,null,null,this.divForm.form.divRcptNo.form);
            obj.set_taborder("2");
            obj.set_flexgrow("1");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRcptNo\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRcptNo\"/></Contents>");
            this.divForm.form.divRcptNo.addChild(obj.name, obj);

            obj = new Static("staSttsNm","10","10","100%","46",null,null,null,null,null,null,this.divForm.form.divRcptNo.form);
            obj.set_taborder("3");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.divRcptNo.addChild(obj.name, obj);

            obj = new Panel("panSttsNm","720","0","300","86",null,null,null,null,null,null,this.divForm.form.divRcptNo.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSttsNm\"/><PanelItem id=\"PanelItem02\" componentid=\"cboSttsNm\"/></Contents>");
            this.divForm.form.divRcptNo.addChild(obj.name, obj);

            obj = new Panel("Panel01","1006","28","300","1",null,null,null,null,null,null,this.divForm.form.divRcptNo.form);
            obj.set_taborder("6");
            obj._setContents("");
            this.divForm.form.divRcptNo.addChild(obj.name, obj);

            obj = new Panel("panRcptNoGrp","0","0","100.00%","96",null,null,null,null,null,null,this.divForm.form.divRcptNo.form);
            obj.set_taborder("5");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_horizontalgap("20");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panRcptNo\"/><PanelItem id=\"PanelItem02\" componentid=\"panSttsNm\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel01\"/></Contents>");
            this.divForm.form.divRcptNo.addChild(obj.name, obj);

            obj = new Combo("cboSttsNm","590","55","100%","40",null,null,null,null,null,null,this.divForm.form.divRcptNo.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsCboprgrsSttsCd");
            obj.set_datacolumn("cdNm");
            obj.set_codecolumn("cdId");
            obj.set_displaynulltext("선택");
            obj.set_readonly("true");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divRcptNo.addChild(obj.name, obj);

            obj = new Panel("sub_tit00","1630","674","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divHirerInfo","0","0","100%","380",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staBzentyNm","396.00","70","100%","46",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("0");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Edit("edtBzentyNm","396.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Panel("panBzentyNm","396.00","70","200","86",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staBzentyNm\"/><PanelItem id=\"PanelItem01\" componentid=\"edtBzentyNm\"/></Contents>");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Static("staBzentyClsfNm","396.00","70","100%","46",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("3");
            obj.set_text("업체분류");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Edit("edtBzentyClsfNm","396.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Panel("panBzentyClsfNm","396.00","70","150","86",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staBzentyClsfNm\"/><PanelItem id=\"PanelItem01\" componentid=\"edtBzentyClsfNm\"/></Contents>");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Static("staRtfeYn","396.00","70","100%","46",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("6");
            obj.set_text("임대료");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Panel("panRtfeYn","396.00","70","90","86",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRtfeYn\"/><PanelItem id=\"PanelItem02\" componentid=\"cboRtfeYn\"/></Contents>");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Static("staMncoYn","46.00","46","100%","46",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("8");
            obj.set_text("관리비");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Panel("panMncoYn","46.00","46","90","86",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("9");
            obj.set_flexgrow("1");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staMncoYn\"/><PanelItem id=\"PanelItem02\" componentid=\"cboMncoYn\"/></Contents>");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Static("staUtltYn","396.00","70","100%","46",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("10");
            obj.set_text("유틸리티");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Panel("panUtltYn","396.00","70","90","86",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("11");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staUtltYn\"/><PanelItem id=\"PanelItem02\" componentid=\"cboUtltYn\"/></Contents>");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Panel("Panel00","136.00","100","100.00%","96",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("12");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"panBzentyNm\"/><PanelItem id=\"PanelItem05\" componentid=\"panBzentyClsfNm\"/><PanelItem id=\"PanelItem03\" componentid=\"panRtfeYn\"/><PanelItem id=\"PanelItem00\" componentid=\"panMncoYn\"/><PanelItem id=\"PanelItem02\" componentid=\"panUtltYn\"/></Contents>");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Static("staRltnMttr","396.00","70","100%","46",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("13");
            obj.set_text("관련사항");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new TextArea("txtRltnMttr","171","111","100%","100",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            obj.set_displaynulltext("내용 입력");
            obj.set_visible("true");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Panel("panRltnMttr","396.00","70","100%","100",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"txtRltnMttr\"/></Contents>");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Panel("panRltnMttrGrp","136.00","100","100.00%","157",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("16");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staRltnMttr\"/><PanelItem id=\"PanelItem04\" componentid=\"panRltnMttr\"/></Contents>");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Static("staNoteMttr","396.00","70","100%","46",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("17");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new TextArea("txtNoteMttr","171","111","100%","70",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("18");
            obj.set_readonly("true");
            obj.set_displaynulltext("비고 입력");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Panel("panNoteMttr","396.00","70","100%","70",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("19");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"txtNoteMttr\"/></Contents>");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Panel("panNoteMttrGrp","136.00","100","100.00%","127",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("20");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staNoteMttr\"/><PanelItem id=\"PanelItem04\" componentid=\"panNoteMttr\"/></Contents>");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Combo("cboRtfeYn","590","55","100%","40",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("21");
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            obj.set_displaynulltext("선택");
            obj.set_readonly("true");
            var divForm_form_divHirerInfo_form_cboRtfeYn_innerdataset = new nexacro.NormalDataset("divForm_form_divHirerInfo_form_cboRtfeYn_innerdataset", obj);
            divForm_form_divHirerInfo_form_cboRtfeYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">유상</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">무상</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_divHirerInfo_form_cboRtfeYn_innerdataset);
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Combo("cboMncoYn","590","55","100%","40",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("22");
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            obj.set_displaynulltext("선택");
            obj.set_readonly("true");
            var divForm_form_divHirerInfo_form_cboMncoYn_innerdataset = new nexacro.NormalDataset("divForm_form_divHirerInfo_form_cboMncoYn_innerdataset", obj);
            divForm_form_divHirerInfo_form_cboMncoYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">유상</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">무상</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_divHirerInfo_form_cboMncoYn_innerdataset);
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Combo("cboUtltYn","590","55","100%","40",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("23");
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            obj.set_displaynulltext("선택");
            obj.set_readonly("true");
            var divForm_form_divHirerInfo_form_cboUtltYn_innerdataset = new nexacro.NormalDataset("divForm_form_divHirerInfo_form_cboUtltYn_innerdataset", obj);
            divForm_form_divHirerInfo_form_cboUtltYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">유상</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">무상</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_divHirerInfo_form_cboUtltYn_innerdataset);
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Static("staSubTitle01","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_text("반납요청사항");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button01","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("7");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit01","1630","674","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("8");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divSpceListGrp","0","66","100%","320",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("9");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panSpceList","0","40","100.00%","301",null,null,null,null,null,null,this.divForm.form.divSpceListGrp.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divGrdSpceList\"/></Contents>");
            this.divForm.form.divSpceListGrp.addChild(obj.name, obj);

            obj = new Div("divGrdSpceList","0","0","100%","280",null,null,null,null,null,null,this.divForm.form.divSpceListGrp.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divSpceListGrp.addChild(obj.name, obj);

            obj = new Grid("grdSpceList","0","44","100.00%","236",null,null,null,null,null,null,this.divForm.form.divSpceListGrp.form.divGrdSpceList.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsSpceList");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"구분\" cssclass=\"CellHead_E\"/><Cell col=\"1\" text=\"건물명\"/><Cell col=\"2\" text=\"호실번호\"/><Cell col=\"3\" text=\"사용용도\" cssclass=\"sta_WF_Label_E\"/><Cell col=\"4\" text=\"면적(m2)\"/><Cell col=\"5\" text=\"사용인원수\" cssclass=\"CellHead_E\"/><Cell col=\"6\" text=\"계약기간\"/><Cell col=\"7\" text=\"반납희망일자\" cssclass=\"CellHead_E\"/><Cell col=\"8\" text=\"임대계약해지일자\" cssclass=\"CellHead_E\"/></Band><Band id=\"body\"><Cell displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsCboRtnChgSeCd\" combocodecol=\"cdId\" combodatacol=\"cdNm\" text=\"bind:rtnChgSeCd\"/><Cell col=\"1\" textAlign=\"center\" verticalAlign=\"middle\" displaytype=\"normal\" edittype=\"none\" text=\"bind:bldgCd\" combodataset=\"dsCboBldgCd\" combocodecol=\"cdId\" combodatacol=\"cdNm\"/><Cell col=\"2\" suppressalign=\"middle\" textAlign=\"center\" verticalAlign=\"middle\" edittype=\"none\" displaytype=\"normal\" cssclass=\"CellReadonly\" text=\"bind:rmnmNo\"/><Cell col=\"3\" textAlign=\"center\" verticalAlign=\"middle\" displaytype=\"combotext\" text=\"bind:dtlUsgCd\" edittype=\"readonly\" combodataset=\"dsCboDtlUsgCd\" combodatacol=\"cdNm\" combocodecol=\"cdId\"/><Cell col=\"4\" textAlign=\"center\" verticalAlign=\"middle\" displaytype=\"normal\" text=\"bind:rntar\" edittype=\"text\"/><Cell col=\"5\" textAlign=\"center\" verticalAlign=\"middle\" text=\"bind:userCnt\" edittype=\"text\" editmaxlength=\"3\"/><Cell col=\"6\" textAlign=\"center\" verticalAlign=\"middle\" text=\"bind:ctrtPrd\" edittype=\"readonly\" displaytype=\"text\" calendardateformat=\"yyyy-MM-dd\" maskedittype=\"string\" maskeditmaskchar=\" \"/><Cell col=\"7\" textAlign=\"center\" verticalAlign=\"middle\" displaytype=\"date\" text=\"bind:rtnHpeDt\" maskedittype=\"string\" calendardateformat=\"yyyy-MM-dd\" edittype=\"date\" maskeditmaskchar=\" \"/><Cell col=\"8\" textAlign=\"center\" verticalAlign=\"middle\" displaytype=\"date\" text=\"bind:rentEndYmd\" maskedittype=\"string\" calendardateformat=\"yyyy-MM-dd\" edittype=\"date\" maskeditmaskchar=\" \" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.divForm.form.divSpceListGrp.form.divGrdSpceList.addChild(obj.name, obj);

            obj = new Static("staTotal00","0","12","35","34",null,null,null,null,null,null,this.divForm.form.divSpceListGrp.form.divGrdSpceList.form);
            obj.set_taborder("1");
            obj.set_text("반납");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divSpceListGrp.form.divGrdSpceList.addChild(obj.name, obj);

            obj = new Static("staTotal01","39","12","43","34",null,null,null,null,null,null,this.divForm.form.divSpceListGrp.form.divGrdSpceList.form);
            obj.set_taborder("2");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_textAlign("center");
            this.divForm.form.divSpceListGrp.form.divGrdSpceList.addChild(obj.name, obj);

            obj = new Static("staTotal02","82","12","30","34",null,null,null,null,null,null,this.divForm.form.divSpceListGrp.form.divGrdSpceList.form);
            obj.set_taborder("3");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divForm.form.divSpceListGrp.form.divGrdSpceList.addChild(obj.name, obj);

            obj = new Panel("PanelTtlCnt","500","12","120","34",null,null,null,null,null,null,this.divForm.form.divSpceListGrp.form.divGrdSpceList.form);
            obj.set_taborder("4");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staTotal00\"/><PanelItem id=\"PanelItem03\" componentid=\"staTotal01\"/><PanelItem id=\"PanelItem02\" componentid=\"staTotal02\"/></Contents>");
            this.divForm.form.divSpceListGrp.form.divGrdSpceList.addChild(obj.name, obj);

            obj = new Static("staTotal01_00","0","12","70","34",null,null,null,null,null,null,this.divForm.form.divSpceListGrp.form.divGrdSpceList.form);
            obj.set_taborder("5");
            obj.set_text("기간축소");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divSpceListGrp.form.divGrdSpceList.addChild(obj.name, obj);

            obj = new Static("staTotal01_01","51","24","43","34",null,null,null,null,null,null,this.divForm.form.divSpceListGrp.form.divGrdSpceList.form);
            obj.set_taborder("6");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_textAlign("center");
            this.divForm.form.divSpceListGrp.form.divGrdSpceList.addChild(obj.name, obj);

            obj = new Static("staTotal01_02","94","24","30","34",null,null,null,null,null,null,this.divForm.form.divSpceListGrp.form.divGrdSpceList.form);
            obj.set_taborder("7");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divForm.form.divSpceListGrp.form.divGrdSpceList.addChild(obj.name, obj);

            obj = new Panel("PanelTtlCnt01","0","0","150","34",null,null,null,null,null,null,this.divForm.form.divSpceListGrp.form.divGrdSpceList.form);
            obj.set_taborder("8");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staTotal01_00\"/><PanelItem id=\"PanelItem03\" componentid=\"staTotal01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"staTotal01_02\"/></Contents>");
            this.divForm.form.divSpceListGrp.form.divGrdSpceList.addChild(obj.name, obj);

            obj = new Button("btnSpceAddRow","450","0","64","34",null,null,null,null,null,null,this.divForm.form.divSpceListGrp.form.divGrdSpceList.form);
            obj.set_taborder("9");
            obj.set_text("행추가");
            obj.set_tooltiptext("신규 추가건은 업무용시설 배정 담당부서와 사전협의 필수\r\n* 협의 없이 임의로 내용입력 절대 불가");
            this.divForm.form.divSpceListGrp.form.divGrdSpceList.addChild(obj.name, obj);

            obj = new Button("btnSpceDelRow","524","0","64","34",null,null,null,null,null,null,this.divForm.form.divSpceListGrp.form.divGrdSpceList.form);
            obj.set_taborder("10");
            obj.set_text("행삭제");
            this.divForm.form.divSpceListGrp.form.divGrdSpceList.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn","710","0","150","34",null,null,null,null,null,null,this.divForm.form.divSpceListGrp.form.divGrdSpceList.form);
            obj.set_taborder("11");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnSpceAddRow\"/><PanelItem id=\"PanelItem01\" componentid=\"btnSpceDelRow\"/></Contents>");
            this.divForm.form.divSpceListGrp.form.divGrdSpceList.addChild(obj.name, obj);

            obj = new Panel("PanTotalBtn","0","0","100.00%","40",null,null,null,null,null,null,this.divForm.form.divSpceListGrp.form.divGrdSpceList.form);
            obj.set_taborder("12");
            obj.set_flexmainaxisalign("end");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"PanelTtlCnt\"/><PanelItem id=\"PanelItem01\" componentid=\"PanelTtlCnt01\"/><PanelItem id=\"PanelItem02\" componentid=\"PanelGrdBtn\"/></Contents>");
            this.divForm.form.divSpceListGrp.form.divGrdSpceList.addChild(obj.name, obj);

            obj = new Static("staSubTitle02","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("10");
            obj.set_text("반납업무 담당자 연락처");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button02","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel02","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("12");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button02\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit02","1630","674","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("13");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divPicListGrp","0","422.856","100%","420",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("14");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panPicList","0","60","100.00%","290",null,null,null,null,null,null,this.divForm.form.divPicListGrp.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"PanTotalBtn\"/><PanelItem id=\"PanelItem02\" componentid=\"grdPicList\"/></Contents>");
            this.divForm.form.divPicListGrp.addChild(obj.name, obj);

            obj = new Panel("panFile02","0","313","100.00%","110",null,null,null,null,null,null,this.divForm.form.divPicListGrp.form);
            obj.set_taborder("1");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle02\"/><PanelItem id=\"PanelItem02\" componentid=\"grdPrvcUtlzWtcs\"/></Contents>");
            this.divForm.form.divPicListGrp.addChild(obj.name, obj);

            obj = new Static("staLabel02","0","-931","400","46",null,null,null,null,null,null,this.divForm.form.divPicListGrp.form);
            obj.set_taborder("3");
            obj.set_text("반납업무 담당자 개인정보수집 및 이용동의서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.divForm.form.divPicListGrp.addChild(obj.name, obj);

            obj = new Panel("panTitle02","20","-921","100%","46",null,null,null,null,null,null,this.divForm.form.divPicListGrp.form);
            obj.set_taborder("2");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02\"/></Contents>");
            this.divForm.form.divPicListGrp.addChild(obj.name, obj);

            obj = new Grid("grdPicList","-400","58","100%","236",null,null,null,null,null,null,this.divForm.form.divPicListGrp.form);
            obj.set_taborder("4");
            obj.set_binddataset("dsPicList");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"101\"/><Column size=\"85\"/><Column size=\"98\"/><Column size=\"120\"/><Column size=\"142\"/><Column size=\"149\"/><Column size=\"155\"/><Column size=\"150\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"담당부서\" cssclass=\"CellHead_E\"/><Cell col=\"1\" text=\"담당자\" cssclass=\"CellHead_E\"/><Cell col=\"2\" text=\"직위(직급)\" cssclass=\"CellHead_E\"/><Cell col=\"3\" text=\"전화(사무실)\" cssclass=\"CellHead_E\"/><Cell col=\"4\" text=\"휴대폰\" cssclass=\"CellHead_E\"/><Cell col=\"5\" text=\"이메일\" cssclass=\"CellHead_E\"/><Cell col=\"6\" text=\"FAX\" cssclass=\"CellHead_E\"/><Cell col=\"7\" cssclass=\"CellHead_E\" text=\"담당업무\"/></Band><Band id=\"body\"><Cell textAlign=\"left\" verticalAlign=\"middle\" displaytype=\"text\" text=\"bind:picDeptNm\" edittype=\"text\" editmaxlength=\"20\"/><Cell col=\"1\" suppressalign=\"middle\" textAlign=\"left\" verticalAlign=\"middle\" edittype=\"text\" displaytype=\"text\" cssclass=\"CellReadonly\" text=\"bind:picNm\" editmaxlength=\"10\"/><Cell col=\"2\" textAlign=\"left\" verticalAlign=\"middle\" text=\"bind:picJbpsNm\" edittype=\"text\" editmaxlength=\"10\"/><Cell col=\"3\" textAlign=\"center\" verticalAlign=\"middle\" displaytype=\"mask\" text=\"bind:picTelno\" edittype=\"mask\" maskedittype=\"string\" maskeditformat=\"###-####-####\" maskeditmaskchar=\" \" editmaxlength=\"11\"/><Cell col=\"4\" textAlign=\"center\" verticalAlign=\"middle\" text=\"bind:picMblTelno\" edittype=\"mask\" maskedittype=\"string\" maskeditformat=\"###-####-####\" maskeditmaskchar=\" \" displaytype=\"mask\" editmaxlength=\"11\"/><Cell col=\"5\" textAlign=\"left\" verticalAlign=\"middle\" text=\"bind:picEmlAddr\" edittype=\"text\" editmaxlength=\"30\"/><Cell col=\"6\" textAlign=\"center\" verticalAlign=\"middle\" displaytype=\"mask\" text=\"bind:picFxno\" edittype=\"mask\" maskedittype=\"string\" maskeditformat=\"###-####-####\" maskeditmaskchar=\" \" editmaxlength=\"11\"/><Cell col=\"7\" cssclass=\"CellEnd\" textAlign=\"left\" verticalAlign=\"middle\" text=\"bind:dtyBsnsNm\" edittype=\"text\" editmaxlength=\"20\"/></Band></Format></Formats>");
            this.divForm.form.divPicListGrp.addChild(obj.name, obj);

            obj = new Grid("grdPrvcUtlzWtcs","20.00","60","100%","40",null,null,null,null,null,null,this.divForm.form.divPicListGrp.form);
            obj.set_taborder("5");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell cssclass=\"expr:!A110 ? &quot;&quot; : &quot;CellFile&quot;\" text=\"bind:A110\"/></Band></Format></Formats>");
            this.divForm.form.divPicListGrp.addChild(obj.name, obj);

            obj = new Button("btnPicAddRow","716","6","64","34",null,null,null,null,null,null,this.divForm.form.divPicListGrp.form);
            obj.set_taborder("6");
            obj.set_text("행추가");
            this.divForm.form.divPicListGrp.addChild(obj.name, obj);

            obj = new Button("btnPicDelRow","768","1","64","34",null,null,null,null,null,null,this.divForm.form.divPicListGrp.form);
            obj.set_taborder("7");
            obj.set_text("행삭제");
            this.divForm.form.divPicListGrp.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn","530","0","60%","34",null,null,null,null,null,null,this.divForm.form.divPicListGrp.form);
            obj.set_taborder("8");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnPicAddRow\"/><PanelItem id=\"PanelItem01\" componentid=\"btnPicDelRow\"/></Contents>");
            this.divForm.form.divPicListGrp.addChild(obj.name, obj);

            obj = new Panel("PanTotalBtn","0","0","100%","40",null,null,null,null,null,null,this.divForm.form.divPicListGrp.form);
            obj.set_taborder("9");
            obj.set_flexmainaxisalign("end");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"PanelGrdBtn\"/></Contents>");
            this.divForm.form.divPicListGrp.addChild(obj.name, obj);

            obj = new Static("staSubTitle03","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("15");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button03","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel03","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("17");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button03\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit03","1630","674","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("18");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staSubTitle03\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel03\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divAtfl","0","30","100%","120",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("19");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel03","0","44","305","46",null,null,null,null,null,null,this.divForm.form.divAtfl.form);
            obj.set_taborder("0");
            obj.set_text("반납 공문");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.divForm.form.divAtfl.addChild(obj.name, obj);

            obj = new Panel("panTitle03","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.divAtfl.form);
            obj.set_taborder("1");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03\"/></Contents>");
            this.divForm.form.divAtfl.addChild(obj.name, obj);

            obj = new Panel("panFile03","0","42","100.00%","110",null,null,null,null,null,null,this.divForm.form.divAtfl.form);
            obj.set_taborder("2");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle03\"/><PanelItem id=\"PanelItem02\" componentid=\"grdRtnAplyOfdoc\"/></Contents>");
            this.divForm.form.divAtfl.addChild(obj.name, obj);

            obj = new Grid("grdRtnAplyOfdoc","20.00","60","100%","40",null,null,null,null,null,null,this.divForm.form.divAtfl.form);
            obj.set_taborder("3");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell cssclass=\"expr:!B110 ? &quot;&quot; : &quot;CellFile&quot;\" text=\"bind:B110\"/></Band></Format></Formats>");
            this.divForm.form.divAtfl.addChild(obj.name, obj);

            obj = new Static("staSubTitleRvwOpnn","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("21");
            obj.set_text("임차의향서(반납) 검토의견");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btn","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panRvwOpnn","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("23");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("subTitRvwOpnn","1630","674","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("24");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitleRvwOpnn\"/><PanelItem id=\"PanelItem01\" componentid=\"panRvwOpnn\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divRvwOpnn","0","30","100%","158",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("25");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg .div_WF_SchBg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panRvwOpnn","0","50","100.00%","130",null,null,null,null,null,null,this.divForm.form.divRvwOpnn.form);
            obj.set_taborder("0");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("div_WF_InfoGuide");
            obj.set_verticalgap("0");
            obj.set_horizontalgap("20");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"txtRvwOpnn\"/></Contents>");
            this.divForm.form.divRvwOpnn.addChild(obj.name, obj);

            obj = new TextArea("txtRvwOpnn","171","111","100%","100",null,null,null,null,null,null,this.divForm.form.divRvwOpnn.form);
            obj.set_taborder("1");
            obj.set_readonly("false");
            obj.set_displaynulltext("검토의견 입력 – 반려(보완요청)의 경우 입력 필수");
            obj.set_visible("true");
            obj.set_maxlength("200");
            this.divForm.form.divRvwOpnn.addChild(obj.name, obj);

            obj = new Div("divQuick",null,"62","296","250","62",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickMenu");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","17","20","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("0");
            obj.set_text("임차인 정보");
            obj.set_cssclass("btn_WF_Quick_S");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn01","17.00","btn00:0","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("1");
            obj.set_text("반납요청사항");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn02","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("2");
            obj.set_text("반납업무 담당자 연락처");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn03","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("3");
            obj.set_text("첨부파일");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn04","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("4");
            obj.set_text("검토의견");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"divQuick:0","296","90","62",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickBtnBg");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","7","20","84","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_No");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btnRjct","btnCancel:10","20","84","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("1");
            obj.set_text("반려");
            obj.set_cssclass("btn_WF_Yes");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btnCfmtn","10","20","84","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("2");
            obj.set_text("확정");
            obj.set_cssclass("btn_WF_Yes");
            this.divBtn.addChild(obj.name, obj);

            obj = new Div("divGuide00","1600.00","145","450","385",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            obj.set_visible("false");
            obj.set_cssclass("div_GD_Tip");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","18.00","15","262","45",null,null,null,null,null,null,this.divGuide00.form);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_cssclass("btn_WF_Quick");
            this.divGuide00.addChild(obj.name, obj);

            obj = new Static("sta00","18.00","122","375","50",null,null,null,null,null,null,this.divGuide00.form);
            obj.set_taborder("1");
            obj.set_text("선택했을때 class : btn_WF_Quick_S 적용");
            this.divGuide00.addChild(obj.name, obj);

            obj = new Button("btn00_00","18.00","68","262","45",null,null,null,null,null,null,this.divGuide00.form);
            obj.set_taborder("2");
            obj.set_text("기본정보");
            obj.set_cssclass("btn_WF_Quick_S");
            this.divGuide00.addChild(obj.name, obj);

            obj = new Button("Button00_00","20.00","205","34","34",null,null,null,null,null,null,this.divGuide00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.divGuide00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","64.00","205","34","34",null,null,null,null,null,null,this.divGuide00.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divGuide00.addChild(obj.name, obj);

            obj = new Static("sta00_00","20.00","255","375","50",null,null,null,null,null,null,this.divGuide00.form);
            obj.set_taborder("5");
            obj.set_text("접혀있을때 class : btn_WF_ACPlus 로 접음");
            this.divGuide00.addChild(obj.name, obj);

            obj = new RaonkUpload("RaonkUpload","-1080","630","1020","200",null,null,null,null,null,null,this);
            obj.set_taborder("5");
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

            //-- Default Layout : this.divForm.form.divRcptNo.form
            obj = new Layout("default","",0,0,this.divForm.form.divRcptNo.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staRcptNo.set_taborder("0");
                p.staRcptNo.set_text("접수번호");
                p.staRcptNo.set_cssclass("sta_WF_Label");
                p.staRcptNo.move("0","0","100%","46",null,null);

                p.edtRcptNo.set_taborder("1");
                p.edtRcptNo.set_readonly("true");
                p.edtRcptNo.move("0","46","100%","40",null,null);

                p.panRcptNo.set_taborder("2");
                p.panRcptNo.set_flexgrow("1");
                p.panRcptNo.set_type("vertical");
                p.panRcptNo.move("20","0","300","86",null,null);

                p.staSttsNm.set_taborder("3");
                p.staSttsNm.set_text("상태");
                p.staSttsNm.set_cssclass("sta_WF_Label");
                p.staSttsNm.move("10","10","100%","46",null,null);

                p.panSttsNm.set_taborder("4");
                p.panSttsNm.set_type("vertical");
                p.panSttsNm.set_flexgrow("1");
                p.panSttsNm.move("720","0","300","86",null,null);

                p.Panel01.set_taborder("6");
                p.Panel01.move("1006","28","300","1",null,null);

                p.panRcptNoGrp.set_taborder("5");
                p.panRcptNoGrp.set_flexcrossaxiswrapalign("start");
                p.panRcptNoGrp.set_flexwrap("wrap");
                p.panRcptNoGrp.set_fittocontents("height");
                p.panRcptNoGrp.set_verticalgap("0");
                p.panRcptNoGrp.set_spacing("0px 20px 10px 20px");
                p.panRcptNoGrp.set_cssclass("pal_WF_DtlBg");
                p.panRcptNoGrp.set_type("horizontal");
                p.panRcptNoGrp.set_horizontalgap("20");
                p.panRcptNoGrp.move("0","0","100.00%","96",null,null);

                p.cboSttsNm.set_taborder("7");
                p.cboSttsNm.set_innerdataset("dsCboprgrsSttsCd");
                p.cboSttsNm.set_datacolumn("cdNm");
                p.cboSttsNm.set_codecolumn("cdId");
                p.cboSttsNm.set_displaynulltext("선택");
                p.cboSttsNm.set_readonly("true");
                p.cboSttsNm.set_value("");
                p.cboSttsNm.set_index("-1");
                p.cboSttsNm.move("590","55","100%","40",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_flexwrap("nowrap");
            this.divForm.form.divRcptNo.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divRcptNo.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divRcptNo.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_flexwrap("nowrap");
            this.divForm.form.divRcptNo.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divHirerInfo.form
            obj = new Layout("default","",0,0,this.divForm.form.divHirerInfo.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staBzentyNm.set_taborder("0");
                p.staBzentyNm.set_text("업체명");
                p.staBzentyNm.set_cssclass("sta_WF_Label");
                p.staBzentyNm.move("396.00","70","100%","46",null,null);

                p.edtBzentyNm.set_taborder("1");
                p.edtBzentyNm.set_readonly("true");
                p.edtBzentyNm.move("396.00","114","100%","40",null,null);

                p.panBzentyNm.set_taborder("2");
                p.panBzentyNm.set_type("vertical");
                p.panBzentyNm.set_flexgrow("1");
                p.panBzentyNm.move("396.00","70","200","86",null,null);

                p.staBzentyClsfNm.set_taborder("3");
                p.staBzentyClsfNm.set_text("업체분류");
                p.staBzentyClsfNm.set_cssclass("sta_WF_Label");
                p.staBzentyClsfNm.move("396.00","70","100%","46",null,null);

                p.edtBzentyClsfNm.set_taborder("4");
                p.edtBzentyClsfNm.set_readonly("true");
                p.edtBzentyClsfNm.move("396.00","114","100%","40",null,null);

                p.panBzentyClsfNm.set_taborder("5");
                p.panBzentyClsfNm.set_type("vertical");
                p.panBzentyClsfNm.set_flexgrow("1");
                p.panBzentyClsfNm.move("396.00","70","150","86",null,null);

                p.staRtfeYn.set_taborder("6");
                p.staRtfeYn.set_text("임대료");
                p.staRtfeYn.set_cssclass("sta_WF_Label");
                p.staRtfeYn.move("396.00","70","100%","46",null,null);

                p.panRtfeYn.set_taborder("7");
                p.panRtfeYn.set_type("vertical");
                p.panRtfeYn.set_flexgrow("1");
                p.panRtfeYn.move("396.00","70","90","86",null,null);

                p.staMncoYn.set_taborder("8");
                p.staMncoYn.set_text("관리비");
                p.staMncoYn.set_cssclass("sta_WF_Label");
                p.staMncoYn.move("46.00","46","100%","46",null,null);

                p.panMncoYn.set_taborder("9");
                p.panMncoYn.set_flexgrow("1");
                p.panMncoYn.set_type("vertical");
                p.panMncoYn.move("46.00","46","90","86",null,null);

                p.staUtltYn.set_taborder("10");
                p.staUtltYn.set_text("유틸리티");
                p.staUtltYn.set_cssclass("sta_WF_Label");
                p.staUtltYn.move("396.00","70","100%","46",null,null);

                p.panUtltYn.set_taborder("11");
                p.panUtltYn.set_type("vertical");
                p.panUtltYn.set_flexgrow("1");
                p.panUtltYn.move("396.00","70","90","86",null,null);

                p.Panel00.set_taborder("12");
                p.Panel00.set_horizontalgap("20");
                p.Panel00.set_flexcrossaxiswrapalign("start");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_verticalgap("0");
                p.Panel00.set_spacing("0px 20px 10px 20px");
                p.Panel00.set_cssclass("pal_WF_DtlBg");
                p.Panel00.set_type("horizontal");
                p.Panel00.move("136.00","100","100.00%","96",null,null);

                p.staRltnMttr.set_taborder("13");
                p.staRltnMttr.set_text("관련사항");
                p.staRltnMttr.set_cssclass("sta_WF_Label");
                p.staRltnMttr.move("396.00","70","100%","46",null,null);

                p.txtRltnMttr.set_taborder("14");
                p.txtRltnMttr.set_readonly("true");
                p.txtRltnMttr.set_displaynulltext("내용 입력");
                p.txtRltnMttr.set_visible("true");
                p.txtRltnMttr.move("171","111","100%","100",null,null);

                p.panRltnMttr.set_taborder("15");
                p.panRltnMttr.set_type("vertical");
                p.panRltnMttr.set_flexgrow("1");
                p.panRltnMttr.set_fittocontents("height");
                p.panRltnMttr.move("396.00","70","100%","100",null,null);

                p.panRltnMttrGrp.set_taborder("16");
                p.panRltnMttrGrp.set_horizontalgap("20");
                p.panRltnMttrGrp.set_flexcrossaxiswrapalign("start");
                p.panRltnMttrGrp.set_flexwrap("wrap");
                p.panRltnMttrGrp.set_fittocontents("height");
                p.panRltnMttrGrp.set_verticalgap("0");
                p.panRltnMttrGrp.set_spacing("0px 20px 10px 20px");
                p.panRltnMttrGrp.set_cssclass("pal_WF_DtlBg");
                p.panRltnMttrGrp.set_type("horizontal");
                p.panRltnMttrGrp.move("136.00","100","100.00%","157",null,null);

                p.staNoteMttr.set_taborder("17");
                p.staNoteMttr.set_text("비고");
                p.staNoteMttr.set_cssclass("sta_WF_Label");
                p.staNoteMttr.move("396.00","70","100%","46",null,null);

                p.txtNoteMttr.set_taborder("18");
                p.txtNoteMttr.set_readonly("true");
                p.txtNoteMttr.set_displaynulltext("비고 입력");
                p.txtNoteMttr.move("171","111","100%","70",null,null);

                p.panNoteMttr.set_taborder("19");
                p.panNoteMttr.set_type("vertical");
                p.panNoteMttr.set_flexgrow("1");
                p.panNoteMttr.set_fittocontents("height");
                p.panNoteMttr.move("396.00","70","100%","70",null,null);

                p.panNoteMttrGrp.set_taborder("20");
                p.panNoteMttrGrp.set_horizontalgap("20");
                p.panNoteMttrGrp.set_flexcrossaxiswrapalign("start");
                p.panNoteMttrGrp.set_flexwrap("wrap");
                p.panNoteMttrGrp.set_fittocontents("height");
                p.panNoteMttrGrp.set_verticalgap("0");
                p.panNoteMttrGrp.set_spacing("0px 20px 10px 20px");
                p.panNoteMttrGrp.set_cssclass("pal_WF_DtlBg");
                p.panNoteMttrGrp.set_type("horizontal");
                p.panNoteMttrGrp.move("136.00","100","100.00%","127",null,null);

                p.cboRtfeYn.set_taborder("21");
                p.cboRtfeYn.set_innerdataset(divForm_form_divHirerInfo_form_cboRtfeYn_innerdataset);
                p.cboRtfeYn.set_datacolumn("datacolumn");
                p.cboRtfeYn.set_codecolumn("codecolumn");
                p.cboRtfeYn.set_displaynulltext("선택");
                p.cboRtfeYn.set_readonly("true");
                p.cboRtfeYn.set_value("");
                p.cboRtfeYn.set_index("-1");
                p.cboRtfeYn.move("590","55","100%","40",null,null);

                p.cboMncoYn.set_taborder("22");
                p.cboMncoYn.set_innerdataset(divForm_form_divHirerInfo_form_cboMncoYn_innerdataset);
                p.cboMncoYn.set_datacolumn("datacolumn");
                p.cboMncoYn.set_codecolumn("codecolumn");
                p.cboMncoYn.set_displaynulltext("선택");
                p.cboMncoYn.set_readonly("true");
                p.cboMncoYn.set_value("");
                p.cboMncoYn.set_index("-1");
                p.cboMncoYn.move("590","55","100%","40",null,null);

                p.cboUtltYn.set_taborder("23");
                p.cboUtltYn.set_innerdataset(divForm_form_divHirerInfo_form_cboUtltYn_innerdataset);
                p.cboUtltYn.set_datacolumn("datacolumn");
                p.cboUtltYn.set_codecolumn("codecolumn");
                p.cboUtltYn.set_displaynulltext("선택");
                p.cboUtltYn.set_readonly("true");
                p.cboUtltYn.set_value("");
                p.cboUtltYn.set_index("-1");
                p.cboUtltYn.move("590","55","100%","40",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.divHirerInfo.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divHirerInfo.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divHirerInfo.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.divHirerInfo.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divSpceListGrp.form.divGrdSpceList.form
            obj = new Layout("default","",0,0,this.divForm.form.divSpceListGrp.form.divGrdSpceList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdSpceList.set_taborder("0");
                p.grdSpceList.set_binddataset("dsSpceList");
                p.grdSpceList.set_autofittype("none");
                p.grdSpceList.set_autoenter("select");
                p.grdSpceList.move("0","44","100.00%","236",null,null);

                p.staTotal00.set_taborder("1");
                p.staTotal00.set_text("반납");
                p.staTotal00.set_usedecorate("true");
                p.staTotal00.set_fittocontents("width");
                p.staTotal00.move("0","12","35","34",null,null);

                p.staTotal01.set_taborder("2");
                p.staTotal01.set_text("0");
                p.staTotal01.set_cssclass("sta_WF_Total");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.set_fittocontents("width");
                p.staTotal01.set_textAlign("center");
                p.staTotal01.move("39","12","43","34",null,null);

                p.staTotal02.set_taborder("3");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.move("82","12","30","34",null,null);

                p.PanelTtlCnt.set_taborder("4");
                p.PanelTtlCnt.set_fittocontents("width");
                p.PanelTtlCnt.set_flexcrossaxisalign("start");
                p.PanelTtlCnt.set_flexmainaxisalign("end");
                p.PanelTtlCnt.move("500","12","120","34",null,null);

                p.staTotal01_00.set_taborder("5");
                p.staTotal01_00.set_text("기간축소");
                p.staTotal01_00.set_usedecorate("true");
                p.staTotal01_00.set_fittocontents("width");
                p.staTotal01_00.move("0","12","70","34",null,null);

                p.staTotal01_01.set_taborder("6");
                p.staTotal01_01.set_text("0");
                p.staTotal01_01.set_cssclass("sta_WF_Total");
                p.staTotal01_01.set_usedecorate("true");
                p.staTotal01_01.set_fittocontents("width");
                p.staTotal01_01.set_textAlign("center");
                p.staTotal01_01.move("51","24","43","34",null,null);

                p.staTotal01_02.set_taborder("7");
                p.staTotal01_02.set_text("건");
                p.staTotal01_02.set_usedecorate("true");
                p.staTotal01_02.move("94","24","30","34",null,null);

                p.PanelTtlCnt01.set_taborder("8");
                p.PanelTtlCnt01.set_fittocontents("width");
                p.PanelTtlCnt01.move("0","0","150","34",null,null);

                p.btnSpceAddRow.set_taborder("9");
                p.btnSpceAddRow.set_text("행추가");
                p.btnSpceAddRow.set_tooltiptext("신규 추가건은 업무용시설 배정 담당부서와 사전협의 필수\r\n* 협의 없이 임의로 내용입력 절대 불가");
                p.btnSpceAddRow.move("450","0","64","34",null,null);

                p.btnSpceDelRow.set_taborder("10");
                p.btnSpceDelRow.set_text("행삭제");
                p.btnSpceDelRow.move("524","0","64","34",null,null);

                p.PanelGrdBtn.set_taborder("11");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.set_visible("true");
                p.PanelGrdBtn.move("710","0","150","34",null,null);

                p.PanTotalBtn.set_taborder("12");
                p.PanTotalBtn.set_flexmainaxisalign("end");
                p.PanTotalBtn.set_flexcrossaxiswrapalign("start");
                p.PanTotalBtn.set_flexcrossaxisalign("start");
                p.PanTotalBtn.set_flexwrap("wrap");
                p.PanTotalBtn.move("0","0","100.00%","40",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divSpceListGrp.form.divGrdSpceList.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divSpceListGrp.form.divGrdSpceList.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divSpceListGrp.form.divGrdSpceList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdSpceList.set_autofittype("none");

                p.btnGrdRegi.set_visible("false");

                p.btnGrdDel.set_visible("false");
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divSpceListGrp.form.divGrdSpceList.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divSpceListGrp.form.divGrdSpceList.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divSpceListGrp.form.divGrdSpceList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divSpceListGrp.form.divGrdSpceList.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divSpceListGrp.form.divGrdSpceList.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divSpceListGrp.form.divGrdSpceList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divSpceListGrp.form.divGrdSpceList.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divSpceListGrp.form
            obj = new Layout("default","",0,0,this.divForm.form.divSpceListGrp.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panSpceList.set_taborder("0");
                p.panSpceList.set_horizontalgap("20");
                p.panSpceList.set_flexcrossaxiswrapalign("start");
                p.panSpceList.set_flexwrap("wrap");
                p.panSpceList.set_fittocontents("height");
                p.panSpceList.set_verticalgap("0");
                p.panSpceList.set_spacing("10px 20px 10px 20px");
                p.panSpceList.set_cssclass("pal_WF_DtlBg");
                p.panSpceList.set_type("horizontal");
                p.panSpceList.move("0","40","100.00%","301",null,null);

                p.divGrdSpceList.set_taborder("1");
                p.divGrdSpceList.set_text("Div01");
                p.divGrdSpceList.set_fittocontents("height");
                p.divGrdSpceList.set_formscrollbartype("none none");
                p.divGrdSpceList.set_formscrolltype("none");
                p.divGrdSpceList.move("0","0","100%","280",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.divSpceListGrp.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divSpceListGrp.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divSpceListGrp.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.divSpceListGrp.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divPicListGrp.form
            obj = new Layout("default","",0,0,this.divForm.form.divPicListGrp.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panPicList.set_taborder("0");
                p.panPicList.set_horizontalgap("20");
                p.panPicList.set_flexcrossaxiswrapalign("start");
                p.panPicList.set_flexwrap("wrap");
                p.panPicList.set_fittocontents("height");
                p.panPicList.set_verticalgap("0");
                p.panPicList.set_spacing("10px 20px 10px 20px");
                p.panPicList.set_cssclass("pal_WF_DtlBg");
                p.panPicList.set_type("horizontal");
                p.panPicList.move("0","60","100.00%","290",null,null);

                p.panFile02.set_taborder("1");
                p.panFile02.set_fittocontents("height");
                p.panFile02.set_spacing("10px 20px 10px 20px");
                p.panFile02.set_flexwrap("wrap");
                p.panFile02.set_cssclass("pal_WF_DtlBg");
                p.panFile02.set_verticalgap("4");
                p.panFile02.move("0","313","100.00%","110",null,null);

                p.staLabel02.set_taborder("3");
                p.staLabel02.set_text("반납업무 담당자 개인정보수집 및 이용동의서");
                p.staLabel02.set_cssclass("sta_WF_Label");
                p.staLabel02.set_fittocontents("width");
                p.staLabel02.move("0","-931","400","46",null,null);

                p.panTitle02.set_taborder("2");
                p.panTitle02.set_cssclass("pan_WF_FileTitle");
                p.panTitle02.set_flexwrap("wrap");
                p.panTitle02.set_fittocontents("height");
                p.panTitle02.move("20","-921","100%","46",null,null);

                p.grdPicList.set_taborder("4");
                p.grdPicList.set_binddataset("dsPicList");
                p.grdPicList.set_autofittype("none");
                p.grdPicList.set_autoenter("select");
                p.grdPicList.set_selecttype("row");
                p.grdPicList.move("-400","58","100%","236",null,null);

                p.grdPrvcUtlzWtcs.set_taborder("5");
                p.grdPrvcUtlzWtcs.set_binddataset("dsFile");
                p.grdPrvcUtlzWtcs.set_autofittype("col");
                p.grdPrvcUtlzWtcs.set_cssclass("grd_WF_FileAdd");
                p.grdPrvcUtlzWtcs.set_readonly("true");
                p.grdPrvcUtlzWtcs.move("20.00","60","100%","40",null,null);

                p.btnPicAddRow.set_taborder("6");
                p.btnPicAddRow.set_text("행추가");
                p.btnPicAddRow.move("716","6","64","34",null,null);

                p.btnPicDelRow.set_taborder("7");
                p.btnPicDelRow.set_text("행삭제");
                p.btnPicDelRow.move("768","1","64","34",null,null);

                p.PanelGrdBtn.set_taborder("8");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.set_visible("true");
                p.PanelGrdBtn.move("530","0","60%","34",null,null);

                p.PanTotalBtn.set_taborder("9");
                p.PanTotalBtn.set_flexmainaxisalign("end");
                p.PanTotalBtn.set_flexcrossaxiswrapalign("start");
                p.PanTotalBtn.set_flexcrossaxisalign("start");
                p.PanTotalBtn.set_flexwrap("wrap");
                p.PanTotalBtn.move("0","0","100%","40",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.divPicListGrp.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divPicListGrp.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divPicListGrp.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.divPicListGrp.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divAtfl.form
            obj = new Layout("default","",0,0,this.divForm.form.divAtfl.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel03.set_taborder("0");
                p.staLabel03.set_text("반납 공문");
                p.staLabel03.set_cssclass("sta_WF_Label");
                p.staLabel03.set_fittocontents("width");
                p.staLabel03.move("0","44","305","46",null,null);

                p.panTitle03.set_taborder("1");
                p.panTitle03.set_cssclass("pan_WF_FileTitle");
                p.panTitle03.set_flexwrap("wrap");
                p.panTitle03.set_fittocontents("height");
                p.panTitle03.move("0","124","100%","46",null,null);

                p.panFile03.set_taborder("2");
                p.panFile03.set_fittocontents("height");
                p.panFile03.set_spacing("10px 20px 10px 20px");
                p.panFile03.set_flexwrap("wrap");
                p.panFile03.set_cssclass("pal_WF_DtlBg");
                p.panFile03.set_verticalgap("4");
                p.panFile03.move("0","42","100.00%","110",null,null);

                p.grdRtnAplyOfdoc.set_taborder("3");
                p.grdRtnAplyOfdoc.set_binddataset("dsFile");
                p.grdRtnAplyOfdoc.set_autofittype("col");
                p.grdRtnAplyOfdoc.set_cssclass("grd_WF_FileAdd");
                p.grdRtnAplyOfdoc.set_readonly("true");
                p.grdRtnAplyOfdoc.move("20.00","60","100%","40",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.divAtfl.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divAtfl.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divAtfl.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel03.move("0","44","305","46",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.divAtfl.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divRvwOpnn.form
            obj = new Layout("default","",0,0,this.divForm.form.divRvwOpnn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panRvwOpnn.set_taborder("0");
                p.panRvwOpnn.set_fittocontents("height");
                p.panRvwOpnn.set_spacing("10px 20px 10px 20px");
                p.panRvwOpnn.set_flexwrap("wrap");
                p.panRvwOpnn.set_cssclass("div_WF_InfoGuide");
                p.panRvwOpnn.set_verticalgap("0");
                p.panRvwOpnn.set_horizontalgap("20");
                p.panRvwOpnn.move("0","50","100.00%","130",null,null);

                p.txtRvwOpnn.set_taborder("1");
                p.txtRvwOpnn.set_readonly("false");
                p.txtRvwOpnn.set_displaynulltext("검토의견 입력 – 반려(보완요청)의 경우 입력 필수");
                p.txtRvwOpnn.set_visible("true");
                p.txtRvwOpnn.set_maxlength("200");
                p.txtRvwOpnn.move("171","111","100%","100",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.divRvwOpnn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divRvwOpnn.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divRvwOpnn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.divRvwOpnn.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staSubTitle00.set_taborder("0");
                p.staSubTitle00.set_text("임차인 정보");
                p.staSubTitle00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle00.move("1630.00","690","50%","50",null,null);

                p.Button00.set_taborder("1");
                p.Button00.set_cssclass("btn_WF_ACMinus");
                p.Button00.move("2890.00","692","34","34",null,null);

                p.Panel00.set_taborder("2");
                p.Panel00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel00.set_spacing("0px 20px");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.set_flexcrossaxisalign("center");
                p.Panel00.set_flexmainaxisalign("end");
                p.Panel00.move("2340.00","690","50%","50",null,null);

                p.divRcptNo.set_taborder("20");
                p.divRcptNo.set_text("div00");
                p.divRcptNo.set_cssclass("div_WF_Bg");
                p.divRcptNo.set_fittocontents("height");
                p.divRcptNo.move("990","16","100%","96",null,null);

                p.sub_tit00.set_taborder("3");
                p.sub_tit00.set_background("#ffffff");
                p.sub_tit00.set_flexcrossaxisalign("end");
                p.sub_tit00.set_minheight("70");
                p.sub_tit00.set_maxheight("");
                p.sub_tit00.move("1630","674","100%","70",null,null);

                p.divHirerInfo.set_taborder("4");
                p.divHirerInfo.set_text("Div00");
                p.divHirerInfo.set_cssclass("div_WF_Bg");
                p.divHirerInfo.set_fittocontents("height");
                p.divHirerInfo.move("0","0","100%","380",null,null);

                p.staSubTitle01.set_taborder("5");
                p.staSubTitle01.set_text("반납요청사항");
                p.staSubTitle01.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle01.move("1630.00","690","50%","50",null,null);

                p.Button01.set_taborder("6");
                p.Button01.set_cssclass("btn_WF_ACMinus");
                p.Button01.move("2890.00","692","34","34",null,null);

                p.Panel01.set_taborder("7");
                p.Panel01.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01.set_spacing("0px 10px");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_flexcrossaxisalign("center");
                p.Panel01.set_flexmainaxisalign("end");
                p.Panel01.move("2340.00","690","50%","50",null,null);

                p.sub_tit01.set_taborder("8");
                p.sub_tit01.set_background("#ffffff");
                p.sub_tit01.set_flexcrossaxisalign("end");
                p.sub_tit01.set_minheight("70");
                p.sub_tit01.set_maxheight("");
                p.sub_tit01.move("1630","674","100%","70",null,null);

                p.divSpceListGrp.set_taborder("9");
                p.divSpceListGrp.set_text("Div00");
                p.divSpceListGrp.set_cssclass("div_WF_Bg");
                p.divSpceListGrp.set_fittocontents("height");
                p.divSpceListGrp.move("0","66","100%","320",null,null);

                p.staSubTitle02.set_taborder("10");
                p.staSubTitle02.set_text("반납업무 담당자 연락처");
                p.staSubTitle02.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02.move("1630.00","690","50%","50",null,null);

                p.Button02.set_taborder("11");
                p.Button02.set_cssclass("btn_WF_ACMinus");
                p.Button02.move("2890.00","692","34","34",null,null);

                p.Panel02.set_taborder("12");
                p.Panel02.set_cssclass("pal_WF_TitBtnBg");
                p.Panel02.set_spacing("0px 10px");
                p.Panel02.set_horizontalgap("10");
                p.Panel02.set_flexcrossaxisalign("center");
                p.Panel02.set_flexmainaxisalign("end");
                p.Panel02.move("2340.00","690","50%","50",null,null);

                p.sub_tit02.set_taborder("13");
                p.sub_tit02.set_background("#ffffff");
                p.sub_tit02.set_flexcrossaxisalign("end");
                p.sub_tit02.set_minheight("70");
                p.sub_tit02.set_maxheight("");
                p.sub_tit02.move("1630","674","100%","70",null,null);

                p.divPicListGrp.set_taborder("14");
                p.divPicListGrp.set_text("Div00");
                p.divPicListGrp.set_cssclass("div_WF_Bg");
                p.divPicListGrp.set_fittocontents("height");
                p.divPicListGrp.move("0","422.856","100%","420",null,null);

                p.staSubTitle03.set_taborder("15");
                p.staSubTitle03.set_text("첨부파일");
                p.staSubTitle03.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle03.move("1630.00","690","50%","50",null,null);

                p.Button03.set_taborder("16");
                p.Button03.set_cssclass("btn_WF_ACMinus");
                p.Button03.move("2890.00","692","34","34",null,null);

                p.Panel03.set_taborder("17");
                p.Panel03.set_cssclass("pal_WF_TitBtnBg");
                p.Panel03.set_spacing("0px 10px");
                p.Panel03.set_horizontalgap("10");
                p.Panel03.set_flexcrossaxisalign("center");
                p.Panel03.set_flexmainaxisalign("end");
                p.Panel03.move("2340.00","690","50%","50",null,null);

                p.sub_tit03.set_taborder("18");
                p.sub_tit03.set_background("#ffffff");
                p.sub_tit03.set_flexcrossaxisalign("end");
                p.sub_tit03.set_minheight("70");
                p.sub_tit03.set_maxheight("");
                p.sub_tit03.move("1630","674","100%","70",null,null);

                p.divAtfl.set_taborder("19");
                p.divAtfl.set_text("Div00");
                p.divAtfl.set_cssclass("div_WF_Bg");
                p.divAtfl.set_fittocontents("height");
                p.divAtfl.move("0","30","100%","120",null,null);

                p.staSubTitleRvwOpnn.set_taborder("21");
                p.staSubTitleRvwOpnn.set_text("임차의향서(반납) 검토의견");
                p.staSubTitleRvwOpnn.set_cssclass("sta_WF_SubTitle");
                p.staSubTitleRvwOpnn.move("1630.00","690","50%","50",null,null);

                p.btn.set_taborder("22");
                p.btn.set_cssclass("btn_WF_ACMinus");
                p.btn.move("2890.00","692","34","34",null,null);

                p.panRvwOpnn.set_taborder("23");
                p.panRvwOpnn.set_cssclass("pal_WF_TitBtnBg");
                p.panRvwOpnn.set_spacing("0px 10px");
                p.panRvwOpnn.set_horizontalgap("10");
                p.panRvwOpnn.set_flexcrossaxisalign("center");
                p.panRvwOpnn.set_flexmainaxisalign("end");
                p.panRvwOpnn.move("2340.00","690","50%","50",null,null);

                p.subTitRvwOpnn.set_taborder("24");
                p.subTitRvwOpnn.set_background("#ffffff");
                p.subTitRvwOpnn.set_flexcrossaxisalign("end");
                p.subTitRvwOpnn.set_minheight("70");
                p.subTitRvwOpnn.set_maxheight("");
                p.subTitRvwOpnn.move("1630","674","100%","70",null,null);

                p.divRvwOpnn.set_taborder("25");
                p.divRvwOpnn.set_text("Div00");
                p.divRvwOpnn.set_cssclass("div_WF_Bg .div_WF_SchBg");
                p.divRvwOpnn.set_fittocontents("height");
                p.divRvwOpnn.move("0","30","100%","158",null,null);
            	}
            );
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
            obj.set_type("vertical");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divQuick.form
            obj = new Layout("default","",0,0,this.divQuick.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btn00.set_taborder("0");
                p.btn00.set_text("임차인 정보");
                p.btn00.set_cssclass("btn_WF_Quick_S");
                p.btn00.move("17","20","100%","45",null,null);

                p.btn01.set_taborder("1");
                p.btn01.set_text("반납요청사항");
                p.btn01.set_cssclass("btn_WF_Quick");
                p.btn01.move("17.00","btn00:0","100%","45",null,null);

                p.btn02.set_taborder("2");
                p.btn02.set_text("반납업무 담당자 연락처");
                p.btn02.set_cssclass("btn_WF_Quick");
                p.btn02.move("17.00","110","100%","45",null,null);

                p.btn03.set_taborder("3");
                p.btn03.set_text("첨부파일");
                p.btn03.set_cssclass("btn_WF_Quick");
                p.btn03.move("17.00","110","100%","45",null,null);

                p.btn04.set_taborder("4");
                p.btn04.set_text("검토의견");
                p.btn04.set_cssclass("btn_WF_Quick");
                p.btn04.move("17.00","110","100%","45",null,null);
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

                p.btn03.set_fittocontents("width");
                p.btn03.set_cssclass("btn_WF_QuickM");
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
                p.btnCancel.set_taborder("0");
                p.btnCancel.set_text("취소");
                p.btnCancel.set_cssclass("btn_WF_No");
                p.btnCancel.move("7","20","84","40",null,null);

                p.btnRjct.set_taborder("1");
                p.btnRjct.set_text("반려");
                p.btnRjct.set_cssclass("btn_WF_Yes");
                p.btnRjct.move("btnCancel:10","20","84","40",null,null);

                p.btnCfmtn.set_taborder("2");
                p.btnCfmtn.set_text("확정");
                p.btnCfmtn.set_cssclass("btn_WF_Yes");
                p.btnCfmtn.move("10","20","84","40",null,null);
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
            //-- Default Layout : this.divGuide00.form
            obj = new Layout("default","",0,0,this.divGuide00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btn00.set_taborder("0");
                p.btn00.set_text("기본정보");
                p.btn00.set_cssclass("btn_WF_Quick");
                p.btn00.move("18.00","15","262","45",null,null);

                p.sta00.set_taborder("1");
                p.sta00.set_text("선택했을때 class : btn_WF_Quick_S 적용");
                p.sta00.move("18.00","122","375","50",null,null);

                p.btn00_00.set_taborder("2");
                p.btn00_00.set_text("기본정보");
                p.btn00_00.set_cssclass("btn_WF_Quick_S");
                p.btn00_00.move("18.00","68","262","45",null,null);

                p.Button00_00.set_taborder("3");
                p.Button00_00.set_cssclass("btn_WF_ACPlus");
                p.Button00_00.set_visible("false");
                p.Button00_00.move("20.00","205","34","34",null,null);

                p.Button00_00_00.set_taborder("4");
                p.Button00_00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_00.move("64.00","205","34","34",null,null);

                p.sta00_00.set_taborder("5");
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
            obj = new Layout("default","Desktop_screen",1480,2000,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("임차의향서(반납) 접수");

                p.divTitle.set_taborder("3");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_cssclass("div_WF_QuickFrBg");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("height");
                p.divForm.move("0","divTitle:0",null,"1950","60",null);

                p.divQuick.set_taborder("1");
                p.divQuick.set_text("div00");
                p.divQuick.set_cssclass("div_WF_QuickMenu");
                p.divQuick.set_fittocontents("height");
                p.divQuick.move(null,"62","296","250","62",null);

                p.divBtn.set_taborder("2");
                p.divBtn.set_text("div00");
                p.divBtn.set_cssclass("div_WF_QuickBtnBg");
                p.divBtn.set_fittocontents("height");
                p.divBtn.move(null,"divQuick:0","296","90","62",null);

                p.divGuide00.set_taborder("4");
                p.divGuide00.set_text("div00");
                p.divGuide00.set_visible("false");
                p.divGuide00.set_cssclass("div_GD_Tip");
                p.divGuide00.move("1600.00","145","450","385",null,null);

                p.RaonkUpload.set_taborder("5");
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
                p.divTitle.move("0","0",null,"50","0",null);

                p.divQuick.set_cssclass("div_WF_QuickMenuM");
                p.divQuick.move("20","60",null,"60","20",null);

                p.divForm.set_fittocontents("none");
                p.divForm.set_cssclass("div_WF_QuickFrBgM");
                p.divForm.move("0","110",null,null,"0","80");

                p.divBtn.set_cssclass("div_WF_QuickBtnBgM");
                p.divBtn.set_fittocontents("none");
                p.divBtn.move("0",null,null,"80","0","0");
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.divHirerInfo.form.edtBzentyNm","value","dsMaster","bzentyNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.divHirerInfo.form.edtBzentyClsfNm","value","dsMaster","bzentyClsfNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.divHirerInfo.form.txtRltnMttr","value","dsMaster","rltnMttr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.divHirerInfo.form.txtNoteMttr","value","dsMaster","noteMttr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.divRcptNo.form.edtRcptNo","value","dsMaster","rcptNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divForm.form.divRvwOpnn.form.txtRvwOpnn","value","dsMaster","rvwOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.divHirerInfo.form.cboRtfeYn","value","dsMaster","rtfeYnCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.divHirerInfo.form.cboMncoYn","value","dsMaster","mncoYnCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.divHirerInfo.form.cboUtltYn","value","dsMaster","utltYnCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.divRcptNo.form.cboSttsNm","value","dsMaster","prgrsSttsCd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.addIncludeScript("REN031M03.xfdl","xjs::TaskCom.xjs");
        this.registerScript("REN031M03.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	REN031M03.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/11/21
        *  @Desction    ****소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/11/21			pys						최초생성
        *******************************************************************************
        */

        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;  // 업무공통
        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.param;
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
         * 공통함수영역 (fnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        this.cfnClose = function (){};

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        // 임차의향서 등록조회
        this.selectHireLoiReg = function()
        {
        	var strSvcId    = "selectHireLoiReg";
        	var strSvcUrl   = "ren/rtn/selectHireLoiReg.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsHireLoh=dsHireLoh dsHireLohSpceList=dsHireLohSpceList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 임차의향서 상세조회
        this.selectHireLoi = function()
        {
        	var strSvcId    = "selectHireLoi";
        	var strSvcUrl   = "ren/rtn/selectHireLoi.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsMaster=dsMaster dsSpceList=dsSpceList dsPicList=dsPicList dsAtfl=dsAtfl";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 저장
        this.saveHireLoi = function()
        {
        	var strSvcId    = "saveHireLoi";
        	var strSvcUrl   = "ren/rtn/saveHireLoi.do";
        	var inData      = "dsMaster=dsMaster:A  dsSpceList=dsSpceList:U dsPicList=dsPicList:U dsAtflList=dsAtflList:U";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= false;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 임차의향서 상태변경
        this.updateHireLoiRcptRjct = function()
        {
        	var strSvcId    = "updateHireLoiRcptRjct";
        	var strSvcUrl   = "ren/rtn/updateHireLoiRcptRjct.do";
        	var inData      = "dsMaster=dsMaster:A";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= false;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        }

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
        			this.dsCboRtnChgSeCd.filter("cdId == 4 || cdId == 5"); // 반납, 기간축소
        			break;

        		case "cfnEtcCd":
        			this.dsFile.clear();

        			for(var i = 0; i < this.dsAtflArtclList.rowcount; i++) {
        				this.dsFile.addColumn(this.dsAtflArtclList.getColumn(i, "cdId"), "STRING");
        			}

        			this.dsFile.addRow();
        			break;

        		// 임차의향서 등록조회
        		case "selectHireLoiReg":
        			this.dsMaster.clearData();

        			this.dsMaster.addRow();
        			this.dsMaster.copyRow(0, this.dsHireLoh,0);
        			this.dsMaster.setColumn(0, "loiSeCd"	, "W");		// 의향서구분: A.신규, R.정기, W.반납
        			this.dsMaster.setColumn(0, "rowSttsCd"	, "I");		// ROW상태코드: I.등록

        			this.dsSpceList.clearData();

        			for (i = 0; i<this.dsHireLohSpceList.rowcount; i++) {
        				this.dsSpceList.addRow();
        				this.dsSpceList.copyRow(i,this.dsHireLohSpceList,i);
        			};

        			break;

        		// 임차의향서 상세조회
        		case "selectHireLoi":
        			var rtnCnt = 0;

        			for (var i=0; i<this.dsSpceList.rowcount; i++){
        				if (this.dsSpceList.getColumn(i, "rtnChgSeCd") == 4){
        						rtnCnt = rtnCnt+1;
        					}
        			}

        			this.divForm.form.divSpceListGrp.form.divGrdSpceList.form.staTotal01.text = rtnCnt; //반납건수

        			if (this.gfnIsNull(this.dsMaster.getColumn(0, "rvwOpnn"))){
        				this.divForm.form.divRvwOpnn.form.txtRvwOpnn.value = null;
        				this.divForm.form.divRvwOpnn.form.txtRvwOpnn.displaynulltext = "검토의견 입력 – 반려(보완요청)의 경우 입력 필수";
        			}

        			break;

        		case "saveHireLoi":	// 저장
        			this.gfnAlertMsg("msg", "MSG_007", [ this.objApp.getVariable("gvRetMsg")]);

        			if (this.objApp.screenid == "Desktop_screen") {
        				var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        				this.gfnCloseMenu(cMenuId);
        				this._gfnOpenMenu(cMenuId.substring(0,14),"",true);
        			} else {
        				this.close();
        			}

        			break;

        	}
        };

        // 얼럿창 콜백 함수
        this.msgCallback = function(sPopupId, sRtn) {

        	var oRtn = JSON.parse(sRtn);

        	// 저장
        	if (sPopupId == "save_confirm" && oRtn.result == "Y") {
        		if (this.gfnDsIsUpdated(this.dsMaster) == true ||
        			this.gfnDsIsUpdated(this.dsSpceList) == true ||
        			this.gfnDsIsUpdated(this.dsPicList) == true ||
        			this.gfnDsIsUpdated(this.dsAtfl) == true ) {

        			// 그리드 필수입력여부 체크(반납요청사항)
        			if (this.cfnGrdIsValidated(this.divForm.form.divSpceListGrp.form.divGrdSpceList.form.grdSpceList) == false) {
        				return;
        			}

        			// 그리드 필수입력여부 체크(반납업무 담당자 연락처)
        			if (this.dsPicList.rowcount == 0) {
        				// 임차업무 담당자 연락처 필수입력 입니다.
        				this.gfnAlertMsg("msg", "REN_025");
        				return;
        			} else {
        				// 그리드 필수입력여부 체크(임차업무 담당자 연락처)
        				if (this.cfnGrdIsValidated(this.divForm.form.divPicListGrp.form.grdPicList) == false) {
        					return;
        				}
        			}
        		} else {
        			// 변경된 내용이 없습니다.
        			this.gfnAlertMsg("msg", "MSG_004");
        			return;
        		}

        		if (this.dsMaster.getColumn(0, "hireLoiNo") != null && this.dsMaster.getColumn(0, "hireLoiNo") != "") {
        			this.dsMaster.setColumn(0, "rowSttsCd", "U");	// ROW상태코드
        		}

        		this.saveHireLoi();
        	}
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

        	// 공통코드조회 : 상세용도, 유무상코드
        	this.cfnComCdLoad({dsCboRtnChgSeCd:"UPDT_SE_CD:B", dsCboprgrsSttsCd:"HIRE_LOI_STTS_CD:A" });
        	this.cfnEtcCdLoad({id:"cfnEtcCd"
        					  ,cbf:"fnCallback"
        					  ,dsCboBldgCd:"{id:'selectTaskComListCd', cnd:{cdTyId:'RENT_ASN_BLDG'}, opt:'B:cdNm'}"
        					  ,dsCboDtlUsgCd:"{id:'selectTaskComListCd', cnd:{cdTyId:'RENT_USE'}, opt:'B:cdNm'}"
        					  ,dsAtflArtclList:"{id:'selectTaskComListCd', cnd:{cdTyId:'ATFL_SE', grp1CdId:'REN031M03'}}"});

        	this.atchValidateColumn.push({"title" : "반납업무 담당자 개인정보수집 및 이용\n동의서", "code" : "A110"});
        	this.atchValidateColumn.push({"title" : "반납 공문", "code" : "B110"});

        	if (this.param != null) {
        		// 등록
        		if (this.param.status != null && this.param.status == "reg") {
        			this.dsSearch.setColumn(0, "rtfeYnCd", this.param.rtfeYnCd);

        			// 임차의향서 등록조회
        			this.selectHireLoiReg();
        		} else {
        			// 임차의향서 상세조회
        			this.dsSearch.setColumn(0,"hireLoiNo"	,this.param.hireLoiNo);
        			this.selectHireLoi();
        		}
        	} else {
        		this.gfnAlertMsg("msg", "REN_002");	// 임차의향서번호가 없습니다.
        	}
        };

        // 상세 페이지 옆 버튼 부분 플로팅 스크롤
        this.form_onvscroll = function(obj,e)
        {
        	if(this.objApp.screenid == "Desktop_screen") {
        		this.divQuick.top = e.pos+50;
        		this.divBtn.top = "divQuick:0";
        	}
        };

        // 첨부파일 필수체크
        this.atchValidate = function(validateColumn) {
        	var ret = true;

        	for (var i = 0; i < validateColumn.length; i++) {
        		if (this.gfnIsNull(this.dsFile.getColumn(0, validateColumn[i].code))) {
        			this.gfnAlertMsg("validate", "CST_004", [validateColumn[i].title], "msgCallback");
        			ret = false;
        			break;
        		}
        	}

        	return ret;
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // 퀵메뉴
        this.divQuick_onclick = function(obj,e)
        {
        	if (obj.name == "btn00") {
        		this.divForm.form.sub_tit00.setFocus(); // 임차인정보
        	} else if (obj.name == "btn01") {
        		this.divForm.form.sub_tit01.setFocus(); // 반납요청사항
        	} else if (obj.name == "btn02") {
        		this.divForm.form.sub_tit02.setFocus();	// 반납업무 담당자 연락처
        	} else if (obj.name == "btn03") {
        		this.divForm.form.sub_tit03.setFocus();	// 첨부파일
        	} else if (obj.name == "btn04") {
        		this.divForm.form.sub_tit04.setFocus();	// 검토의견
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

        // 반려
        this.divBtn_btnRjct_onclick = function(obj,e)
        {
        	if (!this.gfnIsNull(this.dsMaster.getColumn(0, "rvwOpnn"))) {
        		this.dsMaster.setColumn(0, "prgrsSttsCd", "33");
        		this.gfnConfirmMsg("save_confirm", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"],"",["반려"]);
        	} else {
        		this.gfnAlertMsg("msg", "REN_015");
        		this.divForm.form.divRvwOpnn.form.txtRvwOpnn.setFocus(); // 검토의견
         		return;
        	}
        };

        // 확정
        this.divBtn_btnCfmtn_onclick = function(obj,e)
        {
        	if (!this.gfnIsNull(this.dsMaster.getColumn(0, "rvwOpnn"))) {
        		this.dsMaster.setColumn(0, "prgrsSttsCd", "32");
        		this.gfnConfirmMsg("save_confirm", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"],"",["확정"]);
        	} else {
         		this.gfnAlertMsg("msg", "REN_015");
        		this.divForm.form.divRvwOpnn.form.txtRvwOpnn.setFocus(); // 검토의견
         		return;
        	}
        };

        // 반납요청사항 행 추가
        this.divForm_divSpceListGrp_divGrdSpceList_btnSpceAddRow_onclick = function(obj,e)
        {
        	var sTitle = "SAP풀공간검색";
        	var objArg   = {"jobGroupId" : ""};

        	var objOption = {
        		popuptype: "modal"
        		, autosize: true
        		, title: sTitle
        		, resize: true
        		, titlebar: true
        	};

        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("sapPolSpce", "work::REN/CHG/REN041P01.xfdl", objArg, sPopupCallBack, objOption);
        };

        // 반납요청사항 행 삭제
        this.divForm_divSpceListGrp_divGrdSpceList_btnSpceDelRow_onclick = function(obj,e)
        {
        	this.dsSpceList.deleteRow(this.dsSpceList.rowposition);
        	this.dsSpceList_oncolumnchanged();
        };

        // 반납요청사항 구분변경시
        this.divForm_divSpceListGrp_divGrdSpceList_grdSpceList_oncloseup = function(obj,e)
        {
        	obj.updateToDataset();
        };

        // 반납요청사항 데이터셋 변경
        this.dsSpceList_oncolumnchanged = function(obj,e)
        {
        	var cnt1 = 0;
        	var cnt2 = 0;

        	for (var i = 0; i < this.dsSpceList.rowcount; i++) {
        		if (this.dsSpceList.getColumn(i, "rtnChgSeCd") == 4) {
        			cnt1 = cnt1+1;
        		} else if (this.dsSpceList.getColumn(i, "rtnChgSeCd") == 5) {
        			cnt2 = cnt2+1;
        		}
        	}

        	this.divForm.form.divSpceListGrp.form.divGrdSpceList.form.staTotal00_01.text = cnt1;
        	this.divForm.form.divSpceListGrp.form.divGrdSpceList.form.staTotal01_01.text = cnt2;
        };

        // 업무담당자 행 추가
        this.divForm_divPicListGrp_divGrdPicList_btnPicAddRow_onclick = function(obj,e)
        {
        	this.dsPicList.addRow();
        };

        // 업무담당자 행 삭제
        this.divForm_divPicListGrp_divGrdPicList_btnPicDelRow_onclick = function(obj,e)
        {
        	this.dsPicList.deleteRow(this.dsPicList.rowposition);
        };

        // 파일 그리드
        this.divForm_grdAtch_oncellclick = function(obj,e)
        {
        	// 그리드 내의 버튼 클릭
        	if (e.col == 0) {
        		if (obj.getCellPropertyValue(0, 0, "cssclass") == "CellFile") {  // 파일
        			// 파일 다운로드
        			this.cfnFileDwnld(this.RaonkUpload, this.dsAtfl, obj.getCellProperty("body", 0, "text").substr(5), e);
        		}
            }
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
            this.addEventHandler("onkeyup",this.form_onkeyup,this);
            this.addEventHandler("onvscroll",this.form_onvscroll,this);
            this.divForm.form.divRcptNo.form.staSttsNm.addEventHandler("onclick",this.divForm_divRcptNo_staSttsNm_onclick,this);
            this.divForm.form.divHirerInfo.form.txtRltnMttr.addEventHandler("onchanged",this.divForm_Div03_TextArea00_onchanged,this);
            this.divForm.form.divHirerInfo.form.staNoteMttr.addEventHandler("onclick",this.divForm_Div01_staLabel01_00_01_01_00_00_00_onclick,this);
            this.divForm.form.divHirerInfo.form.txtNoteMttr.addEventHandler("onchanged",this.divForm_Div03_TextArea00_onchanged,this);
            this.divForm.form.staSubTitle01.addEventHandler("onclick",this.divForm_staSubTitle02_00_00_onclick,this);
            this.divForm.form.divSpceListGrp.form.divGrdSpceList.form.grdSpceList.addEventHandler("oncloseup",this.divForm_divSpceListGrp_divGrdSpceList_grdSpceList_oncloseup,this);
            this.divForm.form.divSpceListGrp.form.divGrdSpceList.form.btnSpceAddRow.addEventHandler("onclick",this.divForm_divSpceListGrp_divGrdSpceList_btnSpceAddRow_onclick,this);
            this.divForm.form.divSpceListGrp.form.divGrdSpceList.form.btnSpceDelRow.addEventHandler("onclick",this.divForm_divSpceListGrp_divGrdSpceList_btnSpceDelRow_onclick,this);
            this.divForm.form.staSubTitle02.addEventHandler("onclick",this.divForm_staSubTitle02_00_01_onclick,this);
            this.divForm.form.divPicListGrp.form.staLabel02.addEventHandler("onclick",this.divForm_Div05_staLabel00_02_01_onclick,this);
            this.divForm.form.divPicListGrp.form.grdPrvcUtlzWtcs.addEventHandler("oncellclick",this.divForm_grdAtch_oncellclick,this);
            this.divForm.form.divPicListGrp.form.btnPicAddRow.addEventHandler("onclick",this.divForm_divPicListGrp_divGrdPicList_btnPicAddRow_onclick,this);
            this.divForm.form.divPicListGrp.form.btnPicDelRow.addEventHandler("onclick",this.divForm_divPicListGrp_divGrdPicList_btnPicDelRow_onclick,this);
            this.divForm.form.divAtfl.form.staLabel03.addEventHandler("onclick",this.divForm_Div05_staLabel00_02_01_onclick,this);
            this.divForm.form.divAtfl.form.grdRtnAplyOfdoc.addEventHandler("oncellclick",this.divForm_grdAtch_oncellclick,this);
            this.divForm.form.btn.addEventHandler("onclick",this.divForm_Button00_00_02_00_00_onclick,this);
            this.divForm.form.divRvwOpnn.form.txtRvwOpnn.addEventHandler("onchanged",this.divForm_Div03_TextArea00_onchanged,this);
            this.divQuick.addEventHandler("onclick",this.divQuick_onclick,this);
            this.divQuick.form.btn00.addEventHandler("onclick",this.divQuick_onclick,this);
            this.divQuick.form.btn01.addEventHandler("onclick",this.divQuick_onclick,this);
            this.divQuick.form.btn02.addEventHandler("onclick",this.divQuick_onclick,this);
            this.divQuick.form.btn03.addEventHandler("onclick",this.divQuick_onclick,this);
            this.divQuick.form.btn04.addEventHandler("onclick",this.divQuick_onclick,this);
            this.divBtn.form.btnCancel.addEventHandler("onclick",this.divBtn_btnCancel_onclick,this);
            this.divBtn.form.btnRjct.addEventHandler("onclick",this.divBtn_btnRjct_onclick,this);
            this.divBtn.form.btnCfmtn.addEventHandler("onclick",this.divBtn_btnCfmtn_onclick,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddFile",this.RaonkUpload_RAONKUPLOAD_AfterAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_CreationComplete",this.RaonkUpload_RAONKUPLOAD_CreationComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_UploadComplete",this.RaonkUpload_RAONKUPLOAD_UploadComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_OnError",this.RaonkUpload_RAONKUPLOAD_OnError,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeAddFile",this.RaonkUpload_RAONKUPLOAD_BeforeAddFile,this);
            this.dsSpceList.addEventHandler("oncolumnchanged",this.dsSpceList_oncolumnchanged,this);
            this.dsHireLohSpceList.addEventHandler("oncolumnchanged",this.dsHireLohSpceList_oncolumnchanged,this);
            this.dsAtfl.addEventHandler("onload",this.dsAtfl_onload,this);
        };
        this.loadIncludeScript("REN031M03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
