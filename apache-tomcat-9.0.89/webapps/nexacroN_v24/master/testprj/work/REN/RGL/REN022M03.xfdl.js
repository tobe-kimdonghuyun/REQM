(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("REN022M03");
            this.set_titletext("임차의향서(정기) 상세");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,2050);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"hireLoiNo\" type=\"STRING\" size=\"256\"/><Column id=\"rtfeYnCd\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSbsd", this);
            obj._setContents("<ColumnInfo><Column id=\"rprsCustCd\" type=\"STRING\" size=\"256\"/><Column id=\"coNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCtrtInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"ctrtNo\" type=\"STRING\" size=\"0\"/><Column id=\"ctrtNm\" type=\"STRING\" size=\"0\"/><Column id=\"bzentyClsfCd\" type=\"STRING\" size=\"0\"/><Column id=\"rtfeYnCd\" type=\"STRING\" size=\"256\"/><Column id=\"mncoYnCd\" type=\"STRING\" size=\"0\"/><Column id=\"utltYnCd\" type=\"STRING\" size=\"0\"/><Column id=\"custNm\" type=\"STRING\" size=\"0\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"hireLoiNo\" type=\"STRING\" size=\"256\"/><Column id=\"hireLohNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"loiSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrsSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"custNo\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyClsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyClsfNm\" type=\"STRING\" size=\"256\"/><Column id=\"rtfeYnCd\" type=\"STRING\" size=\"256\"/><Column id=\"mncoYnCd\" type=\"STRING\" size=\"256\"/><Column id=\"utltYnCd\" type=\"STRING\" size=\"256\"/><Column id=\"rltnMttr\" type=\"STRING\" size=\"256\"/><Column id=\"noteMttr\" type=\"STRING\" size=\"256\"/><Column id=\"checkIdfrNm1\" type=\"STRING\" size=\"256\"/><Column id=\"checkIdfrNm2\" type=\"STRING\" size=\"256\"/><Column id=\"sbmsnDt\" type=\"STRING\" size=\"256\"/><Column id=\"sbmsnId\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"rcptNo\" type=\"STRING\" size=\"256\"/><Column id=\"rvwOpnn\" type=\"STRING\" size=\"2000\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSpceList", this);
            obj._setContents("<ColumnInfo><Column id=\"hireLoiNo\" type=\"STRING\" size=\"0\"/><Column id=\"polSpceId\" type=\"STRING\" size=\"0\"/><Column id=\"rtnChgSeCd\" type=\"STRING\" size=\"0\"/><Column id=\"bizSectNm\" type=\"STRING\" size=\"0\"/><Column id=\"cstrnDtyDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"bldgCd\" type=\"STRING\" size=\"0\"/><Column id=\"bldgNm\" type=\"STRING\" size=\"256\"/><Column id=\"usgCd\" type=\"STRING\" size=\"0\"/><Column id=\"dtlUsgCd\" type=\"STRING\" size=\"0\"/><Column id=\"rmnmNo\" type=\"STRING\" size=\"0\"/><Column id=\"rntar\" type=\"STRING\" size=\"0\"/><Column id=\"rentBgngYmd\" type=\"STRING\" size=\"0\"/><Column id=\"rentEndYmd\" type=\"STRING\" size=\"0\"/><Column id=\"cfmtnRmnmNo\" type=\"STRING\" size=\"0\"/><Column id=\"cfmtnRntar\" type=\"STRING\" size=\"0\"/><Column id=\"cfmtnCtrtBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"cfmtnCtrtEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"userCnt\" type=\"STRING\" size=\"0\"/><Column id=\"userCnt1\" type=\"STRING\" size=\"0\"/><Column id=\"userCnt2\" type=\"STRING\" size=\"0\"/><Column id=\"userCnt3\" type=\"STRING\" size=\"0\"/><Column id=\"rtnHpeDt\" type=\"STRING\" size=\"0\"/><Column id=\"ctrtCncltnDt\" type=\"STRING\" size=\"0\"/><Column id=\"gvbkAplyYn\" type=\"STRING\" size=\"0\"/><Column id=\"hpePrlgDt\" type=\"STRING\" size=\"0\"/><Column id=\"cfmtnPrlgDt\" type=\"STRING\" size=\"0\"/><Column id=\"noteMttr\" type=\"STRING\" size=\"0\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPicList", this);
            obj._setContents("<ColumnInfo><Column id=\"hireLoiNo\" type=\"STRING\" size=\"0\"/><Column id=\"regSeq\" type=\"STRING\" size=\"0\"/><Column id=\"aplcntSmYn\" type=\"STRING\" size=\"0\"/><Column id=\"picDeptNm\" type=\"STRING\" size=\"0\"/><Column id=\"picNm\" type=\"STRING\" size=\"0\"/><Column id=\"picJbpsNm\" type=\"STRING\" size=\"0\"/><Column id=\"picTelno\" type=\"STRING\" size=\"0\"/><Column id=\"picMblTelno\" type=\"STRING\" size=\"0\"/><Column id=\"picEmlAddr\" type=\"STRING\" size=\"0\"/><Column id=\"picFxno\" type=\"STRING\" size=\"0\"/><Column id=\"dtyBsnsNm\" type=\"STRING\" size=\"0\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboBldgCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboDtlUsgCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtflList", this);
            obj._setContents("<ColumnInfo><Column id=\"loiSeCd\" type=\"STRING\" size=\"0\"/><Column id=\"prgrsSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"custNo\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyNm\" type=\"STRING\" size=\"0\"/><Column id=\"bzentyClsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyClsfNm\" type=\"STRING\" size=\"256\"/><Column id=\"rtfeYnCd\" type=\"STRING\" size=\"0\"/><Column id=\"mncoYnCd\" type=\"STRING\" size=\"0\"/><Column id=\"utltYnCd\" type=\"STRING\" size=\"0\"/><Column id=\"rltnMttr\" type=\"STRING\" size=\"0\"/><Column id=\"noteMttr\" type=\"STRING\" size=\"0\"/><Column id=\"checkListYn1\" type=\"STRING\" size=\"256\"/><Column id=\"checkListYn2\" type=\"STRING\" size=\"256\"/><Column id=\"sbmsnDt\" type=\"STRING\" size=\"0\"/><Column id=\"sbmsnId\" type=\"STRING\" size=\"0\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboRtnChgSeCd", this);
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


            obj = new Dataset("dsCboBzentyClsfCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","divTitle:20",null,"1950","60",null,null,null,null,null,this);
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

            obj = new Edit("edtSttsNm","10","56","100%","40",null,null,null,null,null,null,this.divForm.form.divRcptNo.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_value("임차의향서 제출");
            obj.set_text("임차의향서 제출");
            this.divForm.form.divRcptNo.addChild(obj.name, obj);

            obj = new Panel("panSttsNm","720","0","300","86",null,null,null,null,null,null,this.divForm.form.divRcptNo.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSttsNm\"/><PanelItem id=\"PanelItem01\" componentid=\"edtSttsNm\"/></Contents>");
            this.divForm.form.divRcptNo.addChild(obj.name, obj);

            obj = new Panel("Panel01","1006","28","300","1",null,null,null,null,null,null,this.divForm.form.divRcptNo.form);
            obj.set_taborder("7");
            obj._setContents("");
            this.divForm.form.divRcptNo.addChild(obj.name, obj);

            obj = new Panel("panRcptNoGrp","0","0","100.00%","96",null,null,null,null,null,null,this.divForm.form.divRcptNo.form);
            obj.set_taborder("6");
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

            obj = new Panel("panBzentyClsfNm","396.00","70","150","86",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staBzentyClsfNm\"/><PanelItem id=\"PanelItem02\" componentid=\"cboBzentyClsf\"/></Contents>");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Static("staRtfeYn","396.00","70","100%","46",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("5");
            obj.set_text("임대료");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Panel("panRtfeYn","396.00","70","90","86",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRtfeYn\"/><PanelItem id=\"PanelItem03\" componentid=\"cboRtfeYn\"/></Contents>");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Static("staMncoYn","46.00","46","100%","46",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("7");
            obj.set_text("관리비");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Panel("panMncoYn","46.00","46","90","86",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("8");
            obj.set_flexgrow("1");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staMncoYn\"/><PanelItem id=\"PanelItem02\" componentid=\"cboMncoYn\"/></Contents>");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Static("staUtltYn","396.00","70","100%","46",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("9");
            obj.set_text("유틸리티");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Panel("panUtltYn","396.00","70","90","86",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staUtltYn\"/><PanelItem id=\"PanelItem03\" componentid=\"cboUtltYn\"/></Contents>");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Panel("Panel00","136.00","100","100.00%","96",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("11");
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

            obj = new Combo("cboMncoYn","698","55","100%","40",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("22");
            obj.set_displaynulltext("선택");
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            obj.set_readonly("true");
            var divForm_form_divHirerInfo_form_cboMncoYn_innerdataset = new nexacro.NormalDataset("divForm_form_divHirerInfo_form_cboMncoYn_innerdataset", obj);
            divForm_form_divHirerInfo_form_cboMncoYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">유상</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">무상</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_divHirerInfo_form_cboMncoYn_innerdataset);
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Combo("cboUtltYn","906","53","100%","40",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("21");
            obj.set_displaynulltext("선택");
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            obj.set_readonly("true");
            var divForm_form_divHirerInfo_form_cboUtltYn_innerdataset = new nexacro.NormalDataset("divForm_form_divHirerInfo_form_cboUtltYn_innerdataset", obj);
            divForm_form_divHirerInfo_form_cboUtltYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">유상</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">무상</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_divHirerInfo_form_cboUtltYn_innerdataset);
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Combo("cboRtfeYn","590","55","100%","40",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("20");
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

            obj = new Static("staRltnMttr","396.00","70","100%","46",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("12");
            obj.set_text("관련사항");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new TextArea("txtRltnMttr","171","111","100%","100",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            obj.set_displaynulltext("내용 입력");
            obj.set_visible("true");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Panel("panRltnMttr","396.00","70","100%","100",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("14");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"txtRltnMttr\"/></Contents>");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Panel("panRltnMttrGrp","136.00","100","100.00%","157",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("15");
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
            obj.set_taborder("16");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new TextArea("txtNoteMttr","171","111","100%","70",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("17");
            obj.set_readonly("true");
            obj.set_displaynulltext("비고 입력");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Panel("panNoteMttr","396.00","70","100%","70",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("18");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"txtNoteMttr\"/></Contents>");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Panel("panNoteMttrGrp","136.00","100","100.00%","127",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("19");
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

            obj = new Combo("cboBzentyClsf","590","55","100%","40",null,null,null,null,null,null,this.divForm.form.divHirerInfo.form);
            obj.set_taborder("23");
            obj.set_innerdataset("dsCboBzentyClsfCd");
            obj.set_datacolumn("cdNm");
            obj.set_codecolumn("cdId");
            obj.set_displaynulltext("선택");
            obj.set_readonly("true");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divHirerInfo.addChild(obj.name, obj);

            obj = new Static("staSubTitle01","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_text("임차요청사항");
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
            obj.set_flexgrow("1");
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
            obj.set_flexgrow("1");
            this.divForm.form.divSpceListGrp.addChild(obj.name, obj);

            obj = new Panel("PanTotalBtn","0","0","100.00%","34",null,null,null,null,null,null,this.divForm.form.divSpceListGrp.form.divGrdSpceList.form);
            obj.set_taborder("4");
            obj.set_flexmainaxisalign("end");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"PanelTtlCnt00\"/><PanelItem id=\"PanelItem03\" componentid=\"PanelTtlCnt01\"/><PanelItem id=\"PanelItem01\" componentid=\"PanelTtlCnt02\"/><PanelItem id=\"PanelItem02\" componentid=\"PanelGrdBtn\"/></Contents>");
            this.divForm.form.divSpceListGrp.form.divGrdSpceList.addChild(obj.name, obj);

            obj = new Grid("grdSpceList","0","44","100.00%","236",null,null,null,null,null,null,this.divForm.form.divSpceListGrp.form.divGrdSpceList.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsSpceList");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"250\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"200\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"구분\" cssclass=\"CellHead_E\"/><Cell col=\"1\" text=\"건물명\" cssclass=\"CellHead_E\"/><Cell col=\"2\" text=\"호실번호\" cssclass=\"CellHead_E\"/><Cell col=\"3\" text=\"사용용도\" cssclass=\"CellHead_E\"/><Cell col=\"4\" text=\"면적(m2)\" cssclass=\"CellHead_E\"/><Cell col=\"5\" text=\"사용인원수\" cssclass=\"CellHead_E\"/><Cell col=\"6\" text=\"계약시작일자\" cssclass=\"CellHead_E\"/><Cell col=\"7\" text=\"계약종료일자\" cssclass=\"CellHead_E\"/><Cell col=\"8\" text=\"비고\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsCboRtnChgSeCd\" combocodecol=\"cdId\" combodatacol=\"cdNm\" text=\"bind:rtnChgSeCd\"/><Cell col=\"1\" textAlign=\"center\" verticalAlign=\"middle\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:bldgCd\" combodataset=\"dsCboBldgCd\" combocodecol=\"cdId\" combodatacol=\"cdNm\"/><Cell col=\"2\" suppressalign=\"middle\" textAlign=\"center\" verticalAlign=\"middle\" edittype=\"text\" displaytype=\"normal\" cssclass=\"CellHead_E\" text=\"bind:rmnmNo\" editmaxlength=\"10\"/><Cell col=\"3\" textAlign=\"center\" verticalAlign=\"middle\" displaytype=\"combocontrol\" text=\"bind:dtlUsgCd\" edittype=\"combo\" combodataset=\"dsCboDtlUsgCd\" combodatacol=\"cdNm\" combocodecol=\"cdId\"/><Cell col=\"4\" textAlign=\"center\" verticalAlign=\"middle\" displaytype=\"normal\" text=\"bind:rntar\" edittype=\"text\" editmaxlength=\"3\"/><Cell col=\"5\" textAlign=\"center\" verticalAlign=\"middle\" text=\"bind:userCnt\" edittype=\"text\" editmaxlength=\"3\"/><Cell col=\"6\" textAlign=\"center\" verticalAlign=\"middle\" text=\"bind:rentBgngYmd\" edittype=\"date\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" maskedittype=\"string\" maskeditmaskchar=\" \"/><Cell col=\"7\" textAlign=\"center\" verticalAlign=\"middle\" displaytype=\"date\" text=\"bind:rentEndYmd\" maskedittype=\"string\" calendardateformat=\"yyyy-MM-dd\" edittype=\"date\" maskeditmaskchar=\" \"/><Cell col=\"8\" textAlign=\"center\" verticalAlign=\"middle\" displaytype=\"normal\" cssclass=\"CellEnd\" text=\"bind:noteMttr\" edittype=\"text\" editmaxlength=\"30\"/></Band></Format></Formats>");
            this.divForm.form.divSpceListGrp.form.divGrdSpceList.addChild(obj.name, obj);

            obj = new Button("btnSpceAddRow","450","0","64","34",null,null,null,null,null,null,this.divForm.form.divSpceListGrp.form.divGrdSpceList.form);
            obj.set_taborder("1");
            obj.set_text("행추가");
            obj.set_tooltiptext("신규 추가건은 업무용시설 배정 담당부서와 사전협의 필수\r\n* 협의 없이 임의로 내용입력 절대 불가");
            this.divForm.form.divSpceListGrp.form.divGrdSpceList.addChild(obj.name, obj);

            obj = new Button("btnSpceDelRow","524","0","64","34",null,null,null,null,null,null,this.divForm.form.divSpceListGrp.form.divGrdSpceList.form);
            obj.set_taborder("2");
            obj.set_text("행삭제");
            this.divForm.form.divSpceListGrp.form.divGrdSpceList.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn","392","0","270","34",null,null,null,null,null,null,this.divForm.form.divSpceListGrp.form.divGrdSpceList.form);
            obj.set_taborder("3");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnGrdExcel\"/><PanelItem id=\"PanelItem02\" componentid=\"btnSpceAddRow\"/><PanelItem id=\"PanelItem01\" componentid=\"btnSpceDelRow\"/></Contents>");
            this.divForm.form.divSpceListGrp.form.divGrdSpceList.addChild(obj.name, obj);

            obj = new Button("btnGrdExcel","341","0","109","34",null,null,null,null,null,null,this.divForm.form.divSpceListGrp.form.divGrdSpceList.form);
            obj.set_taborder("5");
            obj.set_text("다운로드(엑셀)");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divSpceListGrp.form.divGrdSpceList.addChild(obj.name, obj);

            obj = new Panel("PanelTtlCnt01","620","12","100","34",null,null,null,null,null,null,this.divForm.form.divSpceListGrp.form.divGrdSpceList.form);
            obj.set_taborder("13");
            obj.set_fittocontents("none");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staTotal01_00\"/><PanelItem id=\"PanelItem03\" componentid=\"staTotal01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"staTotal01_02\"/></Contents>");
            this.divForm.form.divSpceListGrp.form.divGrdSpceList.addChild(obj.name, obj);

            obj = new Static("staTotal02_00","PanelTtlCnt01:0","0","27","34",null,null,null,null,null,null,this.divForm.form.divSpceListGrp.form.divGrdSpceList.form);
            obj.set_taborder("6");
            obj.set_text("신규");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divSpceListGrp.form.divGrdSpceList.addChild(obj.name, obj);

            obj = new Static("staTotal02_01","27","0","43","34",null,null,null,null,null,null,this.divForm.form.divSpceListGrp.form.divGrdSpceList.form);
            obj.set_taborder("7");
            obj.set_text("0");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_textAlign("center");
            this.divForm.form.divSpceListGrp.form.divGrdSpceList.addChild(obj.name, obj);

            obj = new Static("staTotal02_02","70","0","30","34",null,null,null,null,null,null,this.divForm.form.divSpceListGrp.form.divGrdSpceList.form);
            obj.set_taborder("8");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divForm.form.divSpceListGrp.form.divGrdSpceList.addChild(obj.name, obj);

            obj = new Panel("PanelTtlCnt02","0","0","100","34",null,null,null,null,null,null,this.divForm.form.divSpceListGrp.form.divGrdSpceList.form);
            obj.set_taborder("9");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staTotal02_00\"/><PanelItem id=\"PanelItem03\" componentid=\"staTotal02_01\"/><PanelItem id=\"PanelItem02\" componentid=\"staTotal02_02\"/></Contents>");
            this.divForm.form.divSpceListGrp.form.divGrdSpceList.addChild(obj.name, obj);

            obj = new Panel("PanelTtlCnt00","620","12","100","34",null,null,null,null,null,null,this.divForm.form.divSpceListGrp.form.divGrdSpceList.form);
            obj.set_taborder("17");
            obj.set_fittocontents("none");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staTotal00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"staTotal00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"staTotal00_02\"/></Contents>");
            this.divForm.form.divSpceListGrp.form.divGrdSpceList.addChild(obj.name, obj);

            obj = new Static("staTotal01_00","PanelTtlCnt00:0","12","27","34",null,null,null,null,null,null,this.divForm.form.divSpceListGrp.form.divGrdSpceList.form);
            obj.set_taborder("10");
            obj.set_text("반납");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divSpceListGrp.form.divGrdSpceList.addChild(obj.name, obj);

            obj = new Static("staTotal01_01","39","12","43","34",null,null,null,null,null,null,this.divForm.form.divSpceListGrp.form.divGrdSpceList.form);
            obj.set_taborder("11");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_textAlign("center");
            this.divForm.form.divSpceListGrp.form.divGrdSpceList.addChild(obj.name, obj);

            obj = new Static("staTotal01_02","82","12","30","34",null,null,null,null,null,null,this.divForm.form.divSpceListGrp.form.divGrdSpceList.form);
            obj.set_taborder("12");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divForm.form.divSpceListGrp.form.divGrdSpceList.addChild(obj.name, obj);

            obj = new Static("staTotal00_00","12","12","27","34",null,null,null,null,null,null,this.divForm.form.divSpceListGrp.form.divGrdSpceList.form);
            obj.set_taborder("14");
            obj.set_text("연장");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divSpceListGrp.form.divGrdSpceList.addChild(obj.name, obj);

            obj = new Static("staTotal00_01","39","12","43","34",null,null,null,null,null,null,this.divForm.form.divSpceListGrp.form.divGrdSpceList.form);
            obj.set_taborder("15");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_textAlign("center");
            this.divForm.form.divSpceListGrp.form.divGrdSpceList.addChild(obj.name, obj);

            obj = new Static("staTotal00_02","82","12","30","34",null,null,null,null,null,null,this.divForm.form.divSpceListGrp.form.divGrdSpceList.form);
            obj.set_taborder("16");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divForm.form.divSpceListGrp.form.divGrdSpceList.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","44","100%","236",null,null,null,null,null,null,this.divForm.form.divSpceListGrp.form.divGrdSpceList.form);
            obj.set_taborder("19");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"grdSpceList\"/><PanelItem id=\"PanelItem00\" componentid=\"grdCoSpceList\"/></Contents>");
            this.divForm.form.divSpceListGrp.form.divGrdSpceList.addChild(obj.name, obj);

            obj = new Grid("grdCoSpceList","0","44","100.00%","236",null,null,null,null,null,null,this.divForm.form.divSpceListGrp.form.divGrdSpceList.form);
            obj.set_taborder("18");
            obj.set_binddataset("dsSpceList");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"200\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"구분\" cssclass=\"CellHead_E\"/><Cell col=\"1\" text=\"사업부문\" cssclass=\"CellHead_E\"/><Cell col=\"2\" text=\"공사담당부서\" cssclass=\"CellHead_E\"/><Cell col=\"3\" text=\"건물명\" cssclass=\"CellHead_E\"/><Cell col=\"4\" text=\"호실번호\" cssclass=\"CellHead_E\"/><Cell col=\"5\" text=\"사용용도\" cssclass=\"CellHead_E\"/><Cell col=\"6\" text=\"면적(m2)\" cssclass=\"CellHead_E\"/><Cell col=\"7\" text=\"계약시작일자\" cssclass=\"CellHead_E\"/><Cell col=\"8\" text=\"계약종료일자\" cssclass=\"CellHead_E\"/><Cell col=\"9\" text=\"이용자수&#13;&#10;(일근)\"/><Cell col=\"10\" text=\"이용자수&#13;&#10;(교대/조당)\"/><Cell col=\"11\" text=\"이용자수&#13;&#10;(교대/총원)\"/><Cell col=\"12\" text=\"비고\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsCboRtnChgSeCd\" combocodecol=\"cdId\" combodatacol=\"cdNm\" text=\"bind:rtnChgSeCd\"/><Cell col=\"1\" text=\"bind:bizSectNm\" edittype=\"text\" textAlign=\"center\" editmaxlength=\"20\"/><Cell col=\"2\" text=\"bind:cstrnDtyDeptNm\" edittype=\"text\" textAlign=\"center\" editmaxlength=\"20\"/><Cell col=\"3\" textAlign=\"center\" verticalAlign=\"middle\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:bldgCd\" combodataset=\"dsCboBldgCd\" combocodecol=\"cdId\" combodatacol=\"cdNm\"/><Cell col=\"4\" suppressalign=\"middle\" textAlign=\"center\" verticalAlign=\"middle\" edittype=\"text\" displaytype=\"normal\" cssclass=\"CellReadonly\" text=\"bind:rmnmNo\" editmaxlength=\"10\"/><Cell col=\"5\" textAlign=\"center\" verticalAlign=\"middle\" displaytype=\"combocontrol\" text=\"bind:dtlUsgCd\" edittype=\"combo\" combodataset=\"dsCboDtlUsgCd\" combodatacol=\"cdNm\" combocodecol=\"cdId\"/><Cell col=\"6\" textAlign=\"center\" verticalAlign=\"middle\" displaytype=\"normal\" text=\"bind:rntar\" edittype=\"text\" editmaxlength=\"3\"/><Cell col=\"7\" textAlign=\"center\" verticalAlign=\"middle\" text=\"bind:rentBgngYmd\" edittype=\"date\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" maskedittype=\"string\" maskeditmaskchar=\" \"/><Cell col=\"8\" textAlign=\"center\" verticalAlign=\"middle\" displaytype=\"date\" text=\"bind:rentEndYmd\" maskedittype=\"string\" calendardateformat=\"yyyy-MM-dd\" edittype=\"date\" maskeditmaskchar=\" \"/><Cell col=\"9\" textAlign=\"center\" verticalAlign=\"middle\" text=\"bind:userCnt1\" edittype=\"text\" editmaxlength=\"3\"/><Cell col=\"10\" textAlign=\"center\" verticalAlign=\"middle\" text=\"bind:userCnt2\" edittype=\"text\" editmaxlength=\"3\"/><Cell col=\"11\" textAlign=\"center\" verticalAlign=\"middle\" text=\"bind:userCnt3\" edittype=\"text\" editmaxlength=\"3\"/><Cell col=\"12\" textAlign=\"center\" verticalAlign=\"middle\" displaytype=\"normal\" cssclass=\"CellEnd\" text=\"bind:noteMttr\" edittype=\"text\" editmaxlength=\"30\"/></Band></Format></Formats>");
            this.divForm.form.divSpceListGrp.form.divGrdSpceList.addChild(obj.name, obj);

            obj = new Static("staSubTitle02","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("10");
            obj.set_text("임차업무 담당자 연락처");
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
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"grdPicList\"/></Contents>");
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
            obj.set_text("임차업무 담당자 개인정보수집 및 이용동의서");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"101\"/><Column size=\"85\"/><Column size=\"98\"/><Column size=\"120\"/><Column size=\"142\"/><Column size=\"149\"/><Column size=\"155\"/><Column size=\"150\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"담당부서\"/><Cell col=\"1\" text=\"담당자\"/><Cell col=\"2\" text=\"직위(직급)\"/><Cell col=\"3\" text=\"전화(사무실)\"/><Cell col=\"4\" text=\"휴대폰\"/><Cell col=\"5\" text=\"이메일\"/><Cell col=\"6\" text=\"FAX\"/><Cell col=\"7\" text=\"담당업무\"/></Band><Band id=\"body\"><Cell textAlign=\"left\" verticalAlign=\"middle\" displaytype=\"text\" text=\"bind:picDeptNm\" edittype=\"readonly\" editmaxlength=\"20\"/><Cell col=\"1\" suppressalign=\"middle\" textAlign=\"left\" verticalAlign=\"middle\" edittype=\"readonly\" displaytype=\"text\" cssclass=\"CellReadonly\" text=\"bind:picNm\" editmaxlength=\"10\"/><Cell col=\"2\" textAlign=\"left\" verticalAlign=\"middle\" text=\"bind:picJbpsNm\" edittype=\"readonly\" editmaxlength=\"10\"/><Cell col=\"3\" textAlign=\"center\" verticalAlign=\"middle\" displaytype=\"mask\" text=\"bind:picTelno\" edittype=\"readonly\" maskedittype=\"string\" maskeditformat=\"###-####-####\" maskeditmaskchar=\" \" maskeditclipmode=\"excludespace\" editmaxlength=\"11\"/><Cell col=\"4\" textAlign=\"center\" verticalAlign=\"middle\" text=\"bind:picMblTelno\" edittype=\"readonly\" maskedittype=\"string\" maskeditformat=\"###-####-####\" maskeditmaskchar=\" \" displaytype=\"mask\" editmaxlength=\"11\"/><Cell col=\"5\" textAlign=\"left\" verticalAlign=\"middle\" text=\"bind:picEmlAddr\" edittype=\"readonly\" editmaxlength=\"30\"/><Cell col=\"6\" textAlign=\"center\" verticalAlign=\"middle\" displaytype=\"mask\" text=\"bind:picFxno\" edittype=\"readonly\" maskedittype=\"string\" maskeditformat=\"###-####-####\" maskeditmaskchar=\" \" editmaxlength=\"11\"/><Cell col=\"7\" cssclass=\"CellEnd\" textAlign=\"left\" verticalAlign=\"middle\" text=\"bind:dtyBsnsNm\" edittype=\"readonly\" editmaxlength=\"20\"/></Band></Format></Formats>");
            this.divForm.form.divPicListGrp.addChild(obj.name, obj);

            obj = new Grid("grdPrvcUtlzWtcs","20.00","60","100%","40",null,null,null,null,null,null,this.divForm.form.divPicListGrp.form);
            obj.set_taborder("5");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell cssclass=\"expr:!A110 ? &quot;&quot; : &quot;CellFile&quot;\" text=\"bind:A110\"/></Band></Format></Formats>");
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

            obj = new Div("divAtfl","0","30","100%","220",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("19");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","0","44","305","46",null,null,null,null,null,null,this.divForm.form.divAtfl.form);
            obj.set_taborder("0");
            obj.set_text("업무용시설 정기신청 공문");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.divForm.form.divAtfl.addChild(obj.name, obj);

            obj = new Panel("panTitle03_00","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.divAtfl.form);
            obj.set_taborder("1");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/></Contents>");
            this.divForm.form.divAtfl.addChild(obj.name, obj);

            obj = new Panel("panFile03_00","0","42","100.00%","110",null,null,null,null,null,null,this.divForm.form.divAtfl.form);
            obj.set_taborder("2");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle03_00\"/><PanelItem id=\"PanelItem02\" componentid=\"grdRglryAplyOfdoc\"/></Contents>");
            this.divForm.form.divAtfl.addChild(obj.name, obj);

            obj = new Static("staLabel03_01","0","44","305","46",null,null,null,null,null,null,this.divForm.form.divAtfl.form);
            obj.set_taborder("5");
            obj.set_text("기타");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.divForm.form.divAtfl.addChild(obj.name, obj);

            obj = new Panel("panTitle03_01","20","-2445","100%","46",null,null,null,null,null,null,this.divForm.form.divAtfl.form);
            obj.set_taborder("4");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01\"/></Contents>");
            this.divForm.form.divAtfl.addChild(obj.name, obj);

            obj = new Panel("panFile03_01","0","42","100.00%","110",null,null,null,null,null,null,this.divForm.form.divAtfl.form);
            obj.set_taborder("3");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle03_01\"/><PanelItem id=\"PanelItem02\" componentid=\"grdEtc\"/></Contents>");
            this.divForm.form.divAtfl.addChild(obj.name, obj);

            obj = new Grid("grdRglryAplyOfdoc","20.00","60","100%","40",null,null,null,null,null,null,this.divForm.form.divAtfl.form);
            obj.set_taborder("6");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell cssclass=\"expr:!B110 ? &quot;&quot; : &quot;CellFile&quot;\" text=\"bind:B110\"/></Band></Format></Formats>");
            this.divForm.form.divAtfl.addChild(obj.name, obj);

            obj = new Grid("grdEtc","20.00","60","100%","40",null,null,null,null,null,null,this.divForm.form.divAtfl.form);
            obj.set_taborder("7");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell cssclass=\"expr:!B120 ? &quot;&quot; : &quot;CellFile&quot;\" text=\"bind:B120\"/></Band></Format></Formats>");
            this.divForm.form.divAtfl.addChild(obj.name, obj);

            obj = new Panel("sub_tit04","1630","674","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("21");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitleRvwOpnn\"/><PanelItem id=\"PanelItem02\" componentid=\"panRvwOpnn00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitleRvwOpnn","-15","1935","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("22");
            obj.set_text("임차의향서 검토의견");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button04","942","1942","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panRvwOpnn00","485","1935","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("24");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button04\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new TextArea("txtRvwOpnn","1062","1922","100%","100",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("25");
            obj.set_readonly("false");
            obj.set_displaynulltext("검토의견 입력 – 반려(보완요청)의 경우 입력 필수");
            obj.set_visible("true");
            obj.set_maxlength("200");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panRvwOpnn","1042","1912","100%","130",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("26");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("div_WF_InfoGuide");
            obj.set_verticalgap("0");
            obj.set_horizontalgap("20");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"txtRvwOpnn\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divQuick",null,"70","296","250","62",null,null,null,null,null,this);
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
            obj.set_text("임차요청사항");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn02","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("2");
            obj.set_text("임차업무 담당자 연락처");
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
            obj.set_visible("true");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btnRcpt","10","20","84","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("2");
            obj.set_text("접수");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_visible("true");
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

                p.edtSttsNm.set_taborder("4");
                p.edtSttsNm.set_readonly("true");
                p.edtSttsNm.set_value("임차의향서 제출");
                p.edtSttsNm.move("10","56","100%","40",null,null);

                p.panSttsNm.set_taborder("5");
                p.panSttsNm.set_type("vertical");
                p.panSttsNm.set_flexgrow("1");
                p.panSttsNm.move("720","0","300","86",null,null);

                p.Panel01.set_taborder("7");
                p.Panel01.move("1006","28","300","1",null,null);

                p.panRcptNoGrp.set_taborder("6");
                p.panRcptNoGrp.set_flexcrossaxiswrapalign("start");
                p.panRcptNoGrp.set_flexwrap("wrap");
                p.panRcptNoGrp.set_fittocontents("height");
                p.panRcptNoGrp.set_verticalgap("0");
                p.panRcptNoGrp.set_spacing("0px 20px 10px 20px");
                p.panRcptNoGrp.set_cssclass("pal_WF_DtlBg");
                p.panRcptNoGrp.set_type("horizontal");
                p.panRcptNoGrp.set_horizontalgap("20");
                p.panRcptNoGrp.move("0","0","100.00%","96",null,null);
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

                p.panBzentyClsfNm.set_taborder("4");
                p.panBzentyClsfNm.set_type("vertical");
                p.panBzentyClsfNm.set_flexgrow("1");
                p.panBzentyClsfNm.move("396.00","70","150","86",null,null);

                p.staRtfeYn.set_taborder("5");
                p.staRtfeYn.set_text("임대료");
                p.staRtfeYn.set_cssclass("sta_WF_Label");
                p.staRtfeYn.move("396.00","70","100%","46",null,null);

                p.panRtfeYn.set_taborder("6");
                p.panRtfeYn.set_type("vertical");
                p.panRtfeYn.set_flexgrow("1");
                p.panRtfeYn.move("396.00","70","90","86",null,null);

                p.staMncoYn.set_taborder("7");
                p.staMncoYn.set_text("관리비");
                p.staMncoYn.set_cssclass("sta_WF_Label");
                p.staMncoYn.move("46.00","46","100%","46",null,null);

                p.panMncoYn.set_taborder("8");
                p.panMncoYn.set_flexgrow("1");
                p.panMncoYn.set_type("vertical");
                p.panMncoYn.move("46.00","46","90","86",null,null);

                p.staUtltYn.set_taborder("9");
                p.staUtltYn.set_text("유틸리티");
                p.staUtltYn.set_cssclass("sta_WF_Label");
                p.staUtltYn.move("396.00","70","100%","46",null,null);

                p.panUtltYn.set_taborder("10");
                p.panUtltYn.set_type("vertical");
                p.panUtltYn.set_flexgrow("1");
                p.panUtltYn.move("396.00","70","90","86",null,null);

                p.Panel00.set_taborder("11");
                p.Panel00.set_horizontalgap("20");
                p.Panel00.set_flexcrossaxiswrapalign("start");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_verticalgap("0");
                p.Panel00.set_spacing("0px 20px 10px 20px");
                p.Panel00.set_cssclass("pal_WF_DtlBg");
                p.Panel00.set_type("horizontal");
                p.Panel00.move("136.00","100","100.00%","96",null,null);

                p.cboMncoYn.set_taborder("22");
                p.cboMncoYn.set_displaynulltext("선택");
                p.cboMncoYn.set_innerdataset(divForm_form_divHirerInfo_form_cboMncoYn_innerdataset);
                p.cboMncoYn.set_datacolumn("datacolumn");
                p.cboMncoYn.set_codecolumn("codecolumn");
                p.cboMncoYn.set_readonly("true");
                p.cboMncoYn.set_value("");
                p.cboMncoYn.set_index("-1");
                p.cboMncoYn.move("698","55","100%","40",null,null);

                p.cboUtltYn.set_taborder("21");
                p.cboUtltYn.set_displaynulltext("선택");
                p.cboUtltYn.set_innerdataset(divForm_form_divHirerInfo_form_cboUtltYn_innerdataset);
                p.cboUtltYn.set_datacolumn("datacolumn");
                p.cboUtltYn.set_codecolumn("codecolumn");
                p.cboUtltYn.set_readonly("true");
                p.cboUtltYn.set_value("");
                p.cboUtltYn.set_index("-1");
                p.cboUtltYn.move("906","53","100%","40",null,null);

                p.cboRtfeYn.set_taborder("20");
                p.cboRtfeYn.set_innerdataset(divForm_form_divHirerInfo_form_cboRtfeYn_innerdataset);
                p.cboRtfeYn.set_datacolumn("datacolumn");
                p.cboRtfeYn.set_codecolumn("codecolumn");
                p.cboRtfeYn.set_displaynulltext("선택");
                p.cboRtfeYn.set_readonly("true");
                p.cboRtfeYn.set_value("");
                p.cboRtfeYn.set_index("-1");
                p.cboRtfeYn.move("590","55","100%","40",null,null);

                p.staRltnMttr.set_taborder("12");
                p.staRltnMttr.set_text("관련사항");
                p.staRltnMttr.set_cssclass("sta_WF_Label");
                p.staRltnMttr.move("396.00","70","100%","46",null,null);

                p.txtRltnMttr.set_taborder("13");
                p.txtRltnMttr.set_readonly("true");
                p.txtRltnMttr.set_displaynulltext("내용 입력");
                p.txtRltnMttr.set_visible("true");
                p.txtRltnMttr.move("171","111","100%","100",null,null);

                p.panRltnMttr.set_taborder("14");
                p.panRltnMttr.set_type("vertical");
                p.panRltnMttr.set_flexgrow("1");
                p.panRltnMttr.set_fittocontents("height");
                p.panRltnMttr.move("396.00","70","100%","100",null,null);

                p.panRltnMttrGrp.set_taborder("15");
                p.panRltnMttrGrp.set_horizontalgap("20");
                p.panRltnMttrGrp.set_flexcrossaxiswrapalign("start");
                p.panRltnMttrGrp.set_flexwrap("wrap");
                p.panRltnMttrGrp.set_fittocontents("height");
                p.panRltnMttrGrp.set_verticalgap("0");
                p.panRltnMttrGrp.set_spacing("0px 20px 10px 20px");
                p.panRltnMttrGrp.set_cssclass("pal_WF_DtlBg");
                p.panRltnMttrGrp.set_type("horizontal");
                p.panRltnMttrGrp.move("136.00","100","100.00%","157",null,null);

                p.staNoteMttr.set_taborder("16");
                p.staNoteMttr.set_text("비고");
                p.staNoteMttr.set_cssclass("sta_WF_Label");
                p.staNoteMttr.move("396.00","70","100%","46",null,null);

                p.txtNoteMttr.set_taborder("17");
                p.txtNoteMttr.set_readonly("true");
                p.txtNoteMttr.set_displaynulltext("비고 입력");
                p.txtNoteMttr.move("171","111","100%","70",null,null);

                p.panNoteMttr.set_taborder("18");
                p.panNoteMttr.set_type("vertical");
                p.panNoteMttr.set_flexgrow("1");
                p.panNoteMttr.set_fittocontents("height");
                p.panNoteMttr.move("396.00","70","100%","70",null,null);

                p.panNoteMttrGrp.set_taborder("19");
                p.panNoteMttrGrp.set_horizontalgap("20");
                p.panNoteMttrGrp.set_flexcrossaxiswrapalign("start");
                p.panNoteMttrGrp.set_flexwrap("wrap");
                p.panNoteMttrGrp.set_fittocontents("height");
                p.panNoteMttrGrp.set_verticalgap("0");
                p.panNoteMttrGrp.set_spacing("0px 20px 10px 20px");
                p.panNoteMttrGrp.set_cssclass("pal_WF_DtlBg");
                p.panNoteMttrGrp.set_type("horizontal");
                p.panNoteMttrGrp.move("136.00","100","100.00%","127",null,null);

                p.cboBzentyClsf.set_taborder("23");
                p.cboBzentyClsf.set_innerdataset("dsCboBzentyClsfCd");
                p.cboBzentyClsf.set_datacolumn("cdNm");
                p.cboBzentyClsf.set_codecolumn("cdId");
                p.cboBzentyClsf.set_displaynulltext("선택");
                p.cboBzentyClsf.set_readonly("true");
                p.cboBzentyClsf.set_value("");
                p.cboBzentyClsf.set_index("-1");
                p.cboBzentyClsf.move("590","55","100%","40",null,null);
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
                p.PanTotalBtn.set_taborder("4");
                p.PanTotalBtn.set_flexmainaxisalign("end");
                p.PanTotalBtn.set_flexcrossaxiswrapalign("start");
                p.PanTotalBtn.set_flexcrossaxisalign("start");
                p.PanTotalBtn.set_flexwrap("wrap");
                p.PanTotalBtn.set_fittocontents("height");
                p.PanTotalBtn.set_flexgrow("0");
                p.PanTotalBtn.move("0","0","100.00%","34",null,null);

                p.grdSpceList.set_taborder("0");
                p.grdSpceList.set_binddataset("dsSpceList");
                p.grdSpceList.set_autofittype("none");
                p.grdSpceList.set_autoenter("select");
                p.grdSpceList.move("0","44","100.00%","236",null,null);

                p.btnSpceAddRow.set_taborder("1");
                p.btnSpceAddRow.set_text("행추가");
                p.btnSpceAddRow.set_tooltiptext("신규 추가건은 업무용시설 배정 담당부서와 사전협의 필수\r\n* 협의 없이 임의로 내용입력 절대 불가");
                p.btnSpceAddRow.move("450","0","64","34",null,null);

                p.btnSpceDelRow.set_taborder("2");
                p.btnSpceDelRow.set_text("행삭제");
                p.btnSpceDelRow.move("524","0","64","34",null,null);

                p.PanelGrdBtn.set_taborder("3");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.set_visible("true");
                p.PanelGrdBtn.move("392","0","270","34",null,null);

                p.btnGrdExcel.set_taborder("5");
                p.btnGrdExcel.set_text("다운로드(엑셀)");
                p.btnGrdExcel.set_cssclass("btn_WF_GrdDw");
                p.btnGrdExcel.set_visible("true");
                p.btnGrdExcel.set_fittocontents("width");
                p.btnGrdExcel.move("341","0","109","34",null,null);

                p.PanelTtlCnt01.set_taborder("13");
                p.PanelTtlCnt01.set_fittocontents("none");
                p.PanelTtlCnt01.move("620","12","100","34",null,null);

                p.staTotal02_00.set_taborder("6");
                p.staTotal02_00.set_text("신규");
                p.staTotal02_00.set_usedecorate("true");
                p.staTotal02_00.set_fittocontents("width");
                p.staTotal02_00.move("PanelTtlCnt01:0","0","27","34",null,null);

                p.staTotal02_01.set_taborder("7");
                p.staTotal02_01.set_text("0");
                p.staTotal02_01.set_usedecorate("true");
                p.staTotal02_01.set_fittocontents("width");
                p.staTotal02_01.set_textAlign("center");
                p.staTotal02_01.move("27","0","43","34",null,null);

                p.staTotal02_02.set_taborder("8");
                p.staTotal02_02.set_text("건");
                p.staTotal02_02.set_usedecorate("true");
                p.staTotal02_02.move("70","0","30","34",null,null);

                p.PanelTtlCnt02.set_taborder("9");
                p.PanelTtlCnt02.set_fittocontents("width");
                p.PanelTtlCnt02.move("0","0","100","34",null,null);

                p.PanelTtlCnt00.set_taborder("17");
                p.PanelTtlCnt00.set_fittocontents("none");
                p.PanelTtlCnt00.move("620","12","100","34",null,null);

                p.staTotal01_00.set_taborder("10");
                p.staTotal01_00.set_text("반납");
                p.staTotal01_00.set_usedecorate("true");
                p.staTotal01_00.set_fittocontents("width");
                p.staTotal01_00.move("PanelTtlCnt00:0","12","27","34",null,null);

                p.staTotal01_01.set_taborder("11");
                p.staTotal01_01.set_text("0");
                p.staTotal01_01.set_cssclass("sta_WF_Total");
                p.staTotal01_01.set_usedecorate("true");
                p.staTotal01_01.set_fittocontents("width");
                p.staTotal01_01.set_textAlign("center");
                p.staTotal01_01.move("39","12","43","34",null,null);

                p.staTotal01_02.set_taborder("12");
                p.staTotal01_02.set_text("건");
                p.staTotal01_02.set_usedecorate("true");
                p.staTotal01_02.move("82","12","30","34",null,null);

                p.staTotal00_00.set_taborder("14");
                p.staTotal00_00.set_text("연장");
                p.staTotal00_00.set_usedecorate("true");
                p.staTotal00_00.set_fittocontents("width");
                p.staTotal00_00.move("12","12","27","34",null,null);

                p.staTotal00_01.set_taborder("15");
                p.staTotal00_01.set_text("0");
                p.staTotal00_01.set_cssclass("sta_WF_Total");
                p.staTotal00_01.set_usedecorate("true");
                p.staTotal00_01.set_fittocontents("width");
                p.staTotal00_01.set_textAlign("center");
                p.staTotal00_01.move("39","12","43","34",null,null);

                p.staTotal00_02.set_taborder("16");
                p.staTotal00_02.set_text("건");
                p.staTotal00_02.set_usedecorate("true");
                p.staTotal00_02.move("82","12","30","34",null,null);

                p.Panel00.set_taborder("19");
                p.Panel00.set_type("vertical");
                p.Panel00.move("0","44","100%","236",null,null);

                p.grdCoSpceList.set_taborder("18");
                p.grdCoSpceList.set_binddataset("dsSpceList");
                p.grdCoSpceList.set_autofittype("none");
                p.grdCoSpceList.set_autoenter("select");
                p.grdCoSpceList.move("0","44","100.00%","236",null,null);
            	}
            );
            obj.set_verticalgap("10");
            obj.set_type("vertical");
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
            obj.set_verticalgap("10");
            obj.set_type("vertical");
            this.divForm.form.divSpceListGrp.form.divGrdSpceList.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divSpceListGrp.form.divGrdSpceList.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divSpceListGrp.form.divGrdSpceList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.PanTotalBtn.set_flexwrap("wrap");
                p.PanTotalBtn.set_fittocontents("height");
                p.PanTotalBtn.move("0","0","100.00%","68",null,null);

                p.grdSpceList.move("0","PanTotalBtn:10","100.00%","236",null,null);

                p.grdCoSpceList.move("0","44","100.00%","236",null,null);
            	}
            );
            obj.set_verticalgap("10");
            obj.set_type("vertical");
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
            obj.set_verticalgap("10");
            obj.set_type("vertical");
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
                p.divGrdSpceList.set_flexgrow("1");
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
                p.panSpceList.move("0","40","100.00%","320",null,null);
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
                p.staLabel02.set_text("임차업무 담당자 개인정보수집 및 이용동의서");
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
                p.staLabel03_00.set_taborder("0");
                p.staLabel03_00.set_text("업무용시설 정기신청 공문");
                p.staLabel03_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00.set_fittocontents("width");
                p.staLabel03_00.move("0","44","305","46",null,null);

                p.panTitle03_00.set_taborder("1");
                p.panTitle03_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle03_00.set_flexwrap("wrap");
                p.panTitle03_00.set_fittocontents("height");
                p.panTitle03_00.move("0","124","100%","46",null,null);

                p.panFile03_00.set_taborder("2");
                p.panFile03_00.set_fittocontents("height");
                p.panFile03_00.set_spacing("10px 20px 10px 20px");
                p.panFile03_00.set_flexwrap("wrap");
                p.panFile03_00.set_cssclass("pal_WF_DtlBg");
                p.panFile03_00.set_verticalgap("4");
                p.panFile03_00.move("0","42","100.00%","110",null,null);

                p.staLabel03_01.set_taborder("5");
                p.staLabel03_01.set_text("기타");
                p.staLabel03_01.set_cssclass("sta_WF_Label");
                p.staLabel03_01.set_fittocontents("width");
                p.staLabel03_01.move("0","44","305","46",null,null);

                p.panTitle03_01.set_taborder("4");
                p.panTitle03_01.set_cssclass("pan_WF_FileTitle");
                p.panTitle03_01.set_flexwrap("wrap");
                p.panTitle03_01.set_fittocontents("height");
                p.panTitle03_01.move("20","-2445","100%","46",null,null);

                p.panFile03_01.set_taborder("3");
                p.panFile03_01.set_fittocontents("height");
                p.panFile03_01.set_spacing("10px 20px 10px 20px");
                p.panFile03_01.set_flexwrap("wrap");
                p.panFile03_01.set_cssclass("pal_WF_DtlBg");
                p.panFile03_01.set_verticalgap("4");
                p.panFile03_01.move("0","42","100.00%","110",null,null);

                p.grdRglryAplyOfdoc.set_taborder("6");
                p.grdRglryAplyOfdoc.set_binddataset("dsFile");
                p.grdRglryAplyOfdoc.set_autofittype("col");
                p.grdRglryAplyOfdoc.set_cssclass("grd_WF_FileAdd");
                p.grdRglryAplyOfdoc.set_readonly("true");
                p.grdRglryAplyOfdoc.move("20.00","60","100%","40",null,null);

                p.grdEtc.set_taborder("7");
                p.grdEtc.set_binddataset("dsFile");
                p.grdEtc.set_autofittype("col");
                p.grdEtc.set_cssclass("grd_WF_FileAdd");
                p.grdEtc.set_readonly("true");
                p.grdEtc.move("20.00","60","100%","40",null,null);
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
                p.staLabel03_00.move("0","44","305","46",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.divAtfl.form.addLayout(obj.name, obj);
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
                p.staSubTitle01.set_text("임차요청사항");
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
                p.divSpceListGrp.set_flexgrow("1");
                p.divSpceListGrp.move("0","66","100%","320",null,null);

                p.staSubTitle02.set_taborder("10");
                p.staSubTitle02.set_text("임차업무 담당자 연락처");
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
                p.divAtfl.move("0","30","100%","220",null,null);

                p.sub_tit04.set_taborder("21");
                p.sub_tit04.set_background("#ffffff");
                p.sub_tit04.set_flexcrossaxisalign("end");
                p.sub_tit04.set_visible("true");
                p.sub_tit04.set_minheight("70");
                p.sub_tit04.set_maxheight("");
                p.sub_tit04.move("1630","674","100%","70",null,null);

                p.staSubTitleRvwOpnn.set_taborder("22");
                p.staSubTitleRvwOpnn.set_text("임차의향서 검토의견");
                p.staSubTitleRvwOpnn.set_cssclass("sta_WF_SubTitle");
                p.staSubTitleRvwOpnn.move("-15","1935","50%","50",null,null);

                p.Button04.set_taborder("23");
                p.Button04.set_cssclass("btn_WF_ACMinus");
                p.Button04.move("942","1942","34","34",null,null);

                p.panRvwOpnn00.set_taborder("24");
                p.panRvwOpnn00.set_cssclass("pal_WF_TitBtnBg");
                p.panRvwOpnn00.set_spacing("0px 10px");
                p.panRvwOpnn00.set_horizontalgap("10");
                p.panRvwOpnn00.set_flexcrossaxisalign("center");
                p.panRvwOpnn00.set_flexmainaxisalign("end");
                p.panRvwOpnn00.move("485","1935","50%","50",null,null);

                p.txtRvwOpnn.set_taborder("25");
                p.txtRvwOpnn.set_readonly("false");
                p.txtRvwOpnn.set_displaynulltext("검토의견 입력 – 반려(보완요청)의 경우 입력 필수");
                p.txtRvwOpnn.set_visible("true");
                p.txtRvwOpnn.set_maxlength("200");
                p.txtRvwOpnn.move("1062","1922","100%","100",null,null);

                p.panRvwOpnn.set_taborder("26");
                p.panRvwOpnn.set_fittocontents("height");
                p.panRvwOpnn.set_spacing("10px 20px 10px 20px");
                p.panRvwOpnn.set_flexwrap("wrap");
                p.panRvwOpnn.set_cssclass("div_WF_InfoGuide");
                p.panRvwOpnn.set_verticalgap("0");
                p.panRvwOpnn.set_horizontalgap("20");
                p.panRvwOpnn.set_visible("true");
                p.panRvwOpnn.move("1042","1912","100%","130",null,null);
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
                p.divSpceListGrp.set_flexgrow("1");
                p.divSpceListGrp.move("0","66","100%","320",null,null);
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
                p.btn01.set_text("임차요청사항");
                p.btn01.set_cssclass("btn_WF_Quick");
                p.btn01.move("17.00","btn00:0","100%","45",null,null);

                p.btn02.set_taborder("2");
                p.btn02.set_text("임차업무 담당자 연락처");
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
                p.btnRjct.set_visible("true");
                p.btnRjct.move("btnCancel:10","20","84","40",null,null);

                p.btnRcpt.set_taborder("2");
                p.btnRcpt.set_text("접수");
                p.btnRcpt.set_cssclass("btn_WF_Yes");
                p.btnRcpt.set_visible("true");
                p.btnRcpt.move("10","20","84","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_verticalgap("10");
            obj.set_horizontalgap("10");
            obj.set_spacing("20px 10px");
            obj.set_flexwrap("wrap");
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
            obj = new Layout("default","Desktop_screen",1480,2050,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("임차의향서(정기) 상세");

                p.divTitle.set_taborder("3");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_cssclass("div_WF_QuickFrBg");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("height");
                p.divForm.move("0","divTitle:20",null,"1950","60",null);

                p.divQuick.set_taborder("1");
                p.divQuick.set_text("div00");
                p.divQuick.set_cssclass("div_WF_QuickMenu");
                p.divQuick.set_fittocontents("height");
                p.divQuick.move(null,"70","296","250","62",null);

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

            obj = new BindItem("item3","divForm.form.divHirerInfo.form.cboMncoYn","value","dsMaster","mncoYnCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.divHirerInfo.form.cboUtltYn","value","dsMaster","utltYnCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.divHirerInfo.form.txtRltnMttr","value","dsMaster","rltnMttr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.divHirerInfo.form.txtNoteMttr","value","dsMaster","noteMttr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.divHirerInfo.form.cboRtfeYn","value","dsMaster","rtfeYnCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.divRcptNo.form.edtRcptNo","value","dsMaster","rcptNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.divRcptNo.form.edtSttsNm","value","dsMaster","prgrsSttsNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divForm.form.txtRvwOpnn","value","dsMaster","rvwOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.divHirerInfo.form.cboBzentyClsf","value","dsMaster","bzentyClsfCd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.addIncludeScript("REN022M03.xfdl","xjs::TaskCom.xjs");
        this.registerScript("REN022M03.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	REN022M03.xfdl
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
        this.validateColumn = [];

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
        // 임차의향서 상세조회
        this.selectHireLoiRcpt = function()
        {
        	var strSvcId    = "selectHireLoiRcpt";
        	var strSvcUrl   = "ren/rgl/selectHireLoiRcpt.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsSbsd=dsSbsd dsMaster=dsMaster dsSpceList=dsSpceList dsPicList=dsPicList dsAtfl=dsAtfl";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 데이터 저장
        this.saveTransaction = function()
        {
        	var strSvcId    = "saveHireLoi";
        	var strSvcUrl   = "ren/rgl/saveHireLoi.do";
        	var inData      = "dsMaster=dsMaster:A  dsSpceList=dsSpceList:U dsPicList=dsPicList:U dsAtflList=dsAtflList:U dsAtfl=dsAtfl:U";
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
        			this.dsCboRtnChgSeCd.filter("cdId == 1 || cdId == 2 || cdId == 4 "); //변경 제외
        			break;

        		case "cfnEtcCd":
        			this.dsFile.clear();

        			for(var i = 0; i < this.dsAtflArtclList.rowcount; i++) {
        				this.dsFile.addColumn(this.dsAtflArtclList.getColumn(i, "cdId"), "STRING");
        			}

        			this.dsFile.addRow();
        			break;

        		// 임차의향서 상세조회
        		case "selectHireLoiRcpt":
        			// 자회사 구분
        			if (this.dsSbsd.rowcount == 0) {
        				this.divForm.form.divSpceListGrp.form.divGrdSpceList.form.grdCoSpceList.set_visible(false); // 자회사아닐때
        			} else {
        				this.divForm.form.divSpceListGrp.form.divGrdSpceList.form.grdSpceList.set_visible(false);   // 자회사일때
        			}

        			// 30.작성중 31.제출 32.접수 33.반려 34.SAP전송 35.배정확정
        			if (this.dsMaster.getColumn(0,"prgrsSttsCd") == "31") {
        				this.divBtn.form.btnRcpt.visible = true; 	 // 접수
        				this.divBtn.form.btnRjct.visible = true; 	 // 반려
        				this.divForm.form.sub_tit04.visible = true;  // 검토의견
        				this.divForm.form.panRvwOpnn.visible = true; // 검토의견
        				this.divQuick.form.btn04.visible = true; 	 // 검토의견

        				if (this.dsMaster.getColumn(0, "rvwOpnn") == "" ) {
        					this.divForm.form.txtRvwOpnn.value = null;
        				}
        			} else {
        				this.divBtn.form.btnRcpt.visible = false; 	  // 접수
        				this.divBtn.form.btnRjct.visible = false; 	  // 반려
        				this.divForm.form.sub_tit04.visible = false;  // 검토의견
        				this.divForm.form.panRvwOpnn.visible = false; // 검토의견
        				this.divQuick.form.btn04.visible = false;     // 검토의견
        				this.divBtn.set_top(270);
        			}

        			this.dsSpceList_oncolumnchanged();

        			this.divForm.form.divSpceListGrp.form.divGrdSpceList.form.PanelTtlCnt00.fittocontents="width";
        			this.divForm.form.divSpceListGrp.form.divGrdSpceList.form.PanelTtlCnt01.fittocontents="width";
        			this.divForm.form.divSpceListGrp.form.divGrdSpceList.form.PanelTtlCnt02.fittocontents="width";
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

        			if (this.dsSbsd.rowcount == 0) {
        				// 그리드 필수입력여부 체크(임차요청사항) 자회사 아닐때
        				if (this.cfnGrdIsValidated(this.divForm.form.divSpceListGrp.form.divGrdSpceList.form.grdSpceList) == false) {
        					return;
        				}
        			} else {
        				// 그리드 필수입력여부 체크(임차요청사항) 자회사일때
        				if (this.cfnGrdIsValidated(this.divForm.form.divSpceListGrp.form.divGrdSpceList.form.grdCoSpceList) == false) {
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

        		this.saveTransaction();
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

        	// 사용자정보 조회
        	const gdsUser = nexacro.getApplication().gdsUser;
        	this.dsSearch.setColumn(0, "userId", gdsUser.getColumn(0, "userId"));

        	// 공통코드조회
        	this.cfnComCdLoad({dsCboRtnChgSeCd:"UPDT_SE_CD:B", dsCboBzentyClsfCd:"BZENTY_CLSF_CD:B"});
        	this.cfnEtcCdLoad({id:"cfnEtcCd"
        					  ,cbf:"fnCallback"
        					  ,dsAtflArtclList:"{id:'selectTaskComListCd', cnd:{cdTyId:'ATFL_SE', grp1CdId:'REN022M03'}}"
        				      ,dsCboBldgCd:"{id:'selectTaskComListCd', cnd:{cdTyId:'RENT_ASN_BLDG'}, opt:'B:cdNm'}"
        					  ,dsCboDtlUsgCd:"{id:'selectTaskComListCd', cnd:{cdTyId:'RENT_USE'}, opt:'B:cdNm'}"});

        	if (this.param != null) {
        		// 임차의향서 상세조회
        		this.dsSearch.setColumn(0,"hireLoiNo", this.param.hireLoiNo);
        		this.selectHireLoiRcpt();
        	} else {
        		this.gfnAlertMsg("msg", "REN_002");	// 임차의향서번호가 없습니다.
        	}

        };

        this.form_onvscroll = function(obj,e)
        {
        	if(this.objApp.screenid == "Desktop_screen") {
        		this.divQuick.top = e.pos+50;
        		this.divBtn.top = "divQuick:0";
        	}
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
        		this.divForm.form.sub_tit01.setFocus(); // 임차요청사항
        	} else if (obj.name == "btn02") {
        		this.divForm.form.sub_tit02.setFocus();	// 임차업무 담당자 연락처
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
        		this.divForm.form.txtRvwOpnn.setFocus(); // 검토의견
         		return;
        	}
        };

        // 접수
        this.divBtn_btnRcpt_onclick = function(obj,e)
        {
        	if (!this.gfnIsNull(this.dsMaster.getColumn(0, "rvwOpnn"))) {
        		this.dsMaster.setColumn(0, "prgrsSttsCd", "32");
        		this.gfnConfirmMsg("save_confirm", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"],"",["접수"]);
        	} else {
        		this.gfnAlertMsg("msg", "REN_015");
        		this.divForm.form.divRvwOpnn.form.txtRvwOpnn.setFocus(); // 검토의견
         		return;
        	}
        };

        // 임차요청 행 추가
        this.divForm_divSpceListGrp_divGrdSpceList_btnSpceAddRow_onclick = function(obj,e)
        {
        	this.dsSpceList.addRow();
        	this.dsSpceList.setColumn(this.dsSpceList.rowposition, "rtnChgSeCd" , "1");

        	var d = new Date();
        	var year = d.getFullYear()+1;
        	var sDate = "0101";
        	var eDate = "1231";

        	this.dsSpceList.setColumn(this.dsSpceList.rowposition, "rtnChgSeCd", "1");
        	this.dsSpceList.setColumn(this.dsSpceList.rowposition, "rentBgngYmd", year + sDate);
        	this.dsSpceList.setColumn(this.dsSpceList.rowposition, "rentEndYmd", year + eDate);
        };

        // 임차요청 행 삭제
        this.divForm_divSpceListGrp_divGrdSpceList_btnSpceDelRow_onclick = function(obj,e)
        {
        	this.dsSpceList.deleteRow(this.dsSpceList.rowposition);
        	this.dsSpceList_oncolumnchanged();
        };

        // 임차요청사항 구분변경시
        this.divForm_divSpceListGrp_divGrdSpceList_grdSpceList_oncloseup = function(obj,e)
        {
        	obj.updateToDataset();
        };

        // 임차요청사항 데이터셋 변경
        this.dsSpceList_oncolumnchanged = function(obj,e)
        {
        	var newCnt = 0;
        	var prlgCnt = 0;
        	var rtnCnt = 0;

        	for (var i=0; i<this.dsSpceList.rowcount; i++){
        		if (this.dsSpceList.getColumn(i, "rtnChgSeCd") == 1) {
        			newCnt = newCnt+1;
        		} else if (this.dsSpceList.getColumn(i, "rtnChgSeCd") == 2) {
        			prlgCnt = prlgCnt+1;
        		} else if (this.dsSpceList.getColumn(i, "rtnChgSeCd") == 4) {
        			rtnCnt = rtnCnt+1;
        		}
        	}

        	this.divForm.form.divSpceListGrp.form.divGrdSpceList.form.staTotal00_01.text = prlgCnt;
        	this.divForm.form.divSpceListGrp.form.divGrdSpceList.form.staTotal01_01.text = rtnCnt;
        	this.divForm.form.divSpceListGrp.form.divGrdSpceList.form.staTotal02_01.text = newCnt;
        };

        // 엑셀
        this.divGrd00_btnGrdExcel_onclick = function(obj,e)
        {
        	/*****  현재 그리드 화면을 엑셀로 다운로드 받음  *****/
        	this.exportObj = new ExcelExportObject();
        	var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.divForm.form.divSpceListGrp.form.divGrdSpceList.form.grdSpceList, "Sheet1!A1");
        	this.exportObj.set_exporturl("svcUrl::/XExportImport.do");
        	this.exportObj.exportData();
        	/*****  현재 그리드 화면을 엑셀로 다운로드 받음  *****/
        };

        // 파일 그리드
        this.divForm_grdAtch_oncellclick = function(obj,e)
        {
        	// 그리드 내의 버튼 클릭
        	if(e.col == 0) {
        		if(obj.getCellPropertyValue(0, 0, "cssclass") == "CellFile") {  // 파일
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
            this.divForm.form.divSpceListGrp.form.divGrdSpceList.form.btnGrdExcel.addEventHandler("onclick",this.divGrd00_btnGrdExcel_onclick,this);
            this.divForm.form.divSpceListGrp.form.divGrdSpceList.form.grdCoSpceList.addEventHandler("oncloseup",this.divForm_divSpceListGrp_divGrdSpceList_grdSpceList_oncloseup,this);
            this.divForm.form.staSubTitle02.addEventHandler("onclick",this.divForm_staSubTitle02_00_01_onclick,this);
            this.divForm.form.divPicListGrp.form.staLabel02.addEventHandler("onclick",this.divForm_Div05_staLabel00_02_01_onclick,this);
            this.divForm.form.divPicListGrp.form.grdPrvcUtlzWtcs.addEventHandler("oncellclick",this.divForm_grdAtch_oncellclick,this);
            this.divForm.form.divAtfl.form.staLabel03_00.addEventHandler("onclick",this.divForm_Div05_staLabel00_02_01_onclick,this);
            this.divForm.form.divAtfl.form.staLabel03_01.addEventHandler("onclick",this.divForm_Div05_staLabel00_02_01_onclick,this);
            this.divForm.form.divAtfl.form.grdRglryAplyOfdoc.addEventHandler("oncellclick",this.divForm_grdAtch_oncellclick,this);
            this.divForm.form.divAtfl.form.grdEtc.addEventHandler("oncellclick",this.divForm_grdAtch_oncellclick,this);
            this.divForm.form.staSubTitleRvwOpnn.addEventHandler("onclick",this.divForm_divRvwOpnn_staSubTitleRvwOpnn_onclick,this);
            this.divForm.form.Button04.addEventHandler("onclick",this.divForm_Button00_00_02_00_00_onclick,this);
            this.divQuick.addEventHandler("onclick",this.divQuick_onclick,this);
            this.divQuick.form.btn00.addEventHandler("onclick",this.divQuick_onclick,this);
            this.divQuick.form.btn01.addEventHandler("onclick",this.divQuick_onclick,this);
            this.divQuick.form.btn02.addEventHandler("onclick",this.divQuick_onclick,this);
            this.divQuick.form.btn03.addEventHandler("onclick",this.divQuick_onclick,this);
            this.divQuick.form.btn04.addEventHandler("onclick",this.divQuick_onclick,this);
            this.divBtn.form.btnCancel.addEventHandler("onclick",this.divBtn_btnCancel_onclick,this);
            this.divBtn.form.btnRjct.addEventHandler("onclick",this.divBtn_btnRjct_onclick,this);
            this.divBtn.form.btnRcpt.addEventHandler("onclick",this.divBtn_btnRcpt_onclick,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddFile",this.RaonkUpload_RAONKUPLOAD_AfterAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_CreationComplete",this.RaonkUpload_RAONKUPLOAD_CreationComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_UploadComplete",this.RaonkUpload_RAONKUPLOAD_UploadComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_OnError",this.RaonkUpload_RAONKUPLOAD_OnError,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeAddFile",this.RaonkUpload_RAONKUPLOAD_BeforeAddFile,this);
            this.dsSpceList.addEventHandler("oncolumnchanged",this.dsSpceList_oncolumnchanged,this);
            this.dsAtfl.addEventHandler("onload",this.dsAtfl_onload,this);
        };
        this.loadIncludeScript("REN022M03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
