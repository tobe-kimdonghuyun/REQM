(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("REN034M01");
            this.set_titletext("임대보증금반환신청 접수");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"hireLoiNo\" type=\"STRING\" size=\"256\"/><Column id=\"prgrsSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyClsfNm\" type=\"STRING\" size=\"256\"/><Column id=\"picNm\" type=\"STRING\" size=\"256\"/><Column id=\"picJbpsNm\" type=\"STRING\" size=\"256\"/><Column id=\"picTelno\" type=\"STRING\" size=\"256\"/><Column id=\"picMblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"picEmlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"picFxno\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntSmYn\" type=\"STRING\" size=\"256\"/><Column id=\"prvcClctAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"prvcClctAgreAtflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"builcAtflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"cobacAtflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"sbmsnDt\" type=\"STRING\" size=\"256\"/><Column id=\"sbmsnUserId\" type=\"STRING\" size=\"256\"/><Column id=\"rvwOpnn\" type=\"STRING\" size=\"256\"/><Column id=\"rcptDt\" type=\"STRING\" size=\"256\"/><Column id=\"rcptUserId\" type=\"STRING\" size=\"256\"/><Column id=\"rtfeYnNm\" type=\"STRING\" size=\"256\"/><Column id=\"mncoYnNm\" type=\"STRING\" size=\"256\"/><Column id=\"utltYnNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSpceList", this);
            obj._setContents("<ColumnInfo><Column id=\"chc\" type=\"STRING\" size=\"256\"/><Column id=\"hireLoiNo\" type=\"STRING\" size=\"0\"/><Column id=\"polSpceId\" type=\"STRING\" size=\"0\"/><Column id=\"rtnChgSeCd\" type=\"STRING\" size=\"0\"/><Column id=\"bizSectNm\" type=\"STRING\" size=\"0\"/><Column id=\"cstrnDtyDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"bldgCd\" type=\"STRING\" size=\"0\"/><Column id=\"bldgNm\" type=\"STRING\" size=\"256\"/><Column id=\"usgCd\" type=\"STRING\" size=\"0\"/><Column id=\"dtlUsgNm\" type=\"STRING\" size=\"0\"/><Column id=\"rmnmNo\" type=\"STRING\" size=\"0\"/><Column id=\"rntar\" type=\"STRING\" size=\"0\"/><Column id=\"rentBgngYmd\" type=\"STRING\" size=\"0\"/><Column id=\"rentEndYmd\" type=\"STRING\" size=\"0\"/><Column id=\"cfmtnRmnmNo\" type=\"STRING\" size=\"0\"/><Column id=\"cfmtnRntar\" type=\"STRING\" size=\"0\"/><Column id=\"cfmtnCtrtBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"cfmtnCtrtEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"userCnt\" type=\"STRING\" size=\"0\"/><Column id=\"userCnt1\" type=\"STRING\" size=\"0\"/><Column id=\"userCnt2\" type=\"STRING\" size=\"0\"/><Column id=\"userCnt3\" type=\"STRING\" size=\"0\"/><Column id=\"rtnHpeDt\" type=\"STRING\" size=\"0\"/><Column id=\"ctrtCncltnYmd\" type=\"STRING\" size=\"0\"/><Column id=\"gvbkAplyYn\" type=\"STRING\" size=\"0\"/><Column id=\"hpePrlgDt\" type=\"STRING\" size=\"0\"/><Column id=\"cfmtnPrlgDt\" type=\"STRING\" size=\"0\"/><Column id=\"noteMttr\" type=\"STRING\" size=\"0\"/><Column id=\"ctrtPrd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"hireLoiNo\" type=\"STRING\" size=\"256\"/><Column id=\"grp1CdId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtflList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"grp1CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp1CdNm\" type=\"STRING\" size=\"0\"/><Column id=\"grp2CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp2CdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"hireLoiNo\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId\" type=\"STRING\" size=\"256\"/><Column id=\"atflCd\" type=\"STRING\" size=\"256\"/><Column id=\"natchRsn\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bsnsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId2\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtn\" type=\"STRING\" size=\"256\"/><Column id=\"strgFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTerm\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"grp2CdNm\">010</Col><Col id=\"hireLoiNo\">REN0022001</Col></Row><Row><Col id=\"grp2CdNm\">020</Col><Col id=\"hireLoiNo\">REN0022001</Col><Col id=\"prgrmId\">REN0022002</Col></Row><Row><Col id=\"grp2CdNm\">030</Col><Col id=\"hireLoiNo\">REN0022001</Col><Col id=\"prgrmId\">REN0022002</Col></Row><Row><Col id=\"grp2CdNm\">040</Col><Col id=\"prgrmId\">REN0022002</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj.set_useclientlayout("true");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"grp1CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp1CdNm\" type=\"STRING\" size=\"256\"/><Column id=\"grp2CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp2CdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"hireLoiNo\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId\" type=\"STRING\" size=\"256\"/><Column id=\"atflCd\" type=\"STRING\" size=\"256\"/><Column id=\"natchRsn\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bsnsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId2\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtn\" type=\"STRING\" size=\"256\"/><Column id=\"strgFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTerm\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"grp1CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp1CdNm\" type=\"STRING\" size=\"256\"/><Column id=\"grp2CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp2CdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"hireLoiNo\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId\" type=\"STRING\" size=\"256\"/><Column id=\"atflCd\" type=\"STRING\" size=\"256\"/><Column id=\"natchRsn\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bsnsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId2\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtn\" type=\"STRING\" size=\"256\"/><Column id=\"strgFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTerm\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile3", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"grp1CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp1CdNm\" type=\"STRING\" size=\"256\"/><Column id=\"grp2CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp2CdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"hireLoiNo\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId\" type=\"STRING\" size=\"256\"/><Column id=\"atflCd\" type=\"STRING\" size=\"256\"/><Column id=\"natchRsn\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bsnsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId2\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtn\" type=\"STRING\" size=\"256\"/><Column id=\"strgFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTerm\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtchRslt", this);
            obj._setContents("<ColumnInfo><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","divTitle:0",null,"4566","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickFrBg");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("sub_tit01","1630","674","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div01","0","0","100%","288",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_01_01","396.00","70","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00_01","396.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_1","396.00","70","200","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_01_00_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_01_02","396.00","70","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("3");
            obj.set_text("업체분류");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00_02","396.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_2","396.00","70","150","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_01_02\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_01_00_02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_01_00","396.00","70","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("6");
            obj.set_text("임대료");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00_00","396.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_3","396.00","70","90","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_01_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00","46.00","46","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("9");
            obj.set_text("관리비");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_4","46.00","46","90","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("10");
            obj.set_flexgrow("1");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"edt00_01_00_02_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_01","396.00","70","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("11");
            obj.set_text("유틸리티");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_5","396.00","70","90","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"edt01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00","136.00","100","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("13");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"Panel00_1\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel00_2\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel00_3\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel00_4\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_5\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_2_00","296","-120","150","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("20");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_01_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtPicTelno\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtPicTelno","0","-74","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("22");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_01_02_00","0","-120","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("21");
            obj.set_text("담당자 전화(사무실)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01","-22","108","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("16");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_1_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_2_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_3_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel00_4_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt01","867","55","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00_02_00","396.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtPicEmlAddr","0","-74","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("28");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00_00_00","0","-120","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("27");
            obj.set_text("담당자이메일");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_4_00","688","-120","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("26");
            obj.set_flexgrow("1");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel03\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel03","697","137","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("29");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"edtPicEmlAddr\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtPicMblTelno","0","-74","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("25");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_01_00_00","0","-120","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("24");
            obj.set_text("담당자 휴대폰");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_3_00","522","-120","150","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("23");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtPicMblTelno\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtPicNm","0","-74","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_01_01_00","0","-120","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("18");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_1_00","20","-120","150","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("17");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_01_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtPicNm\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("panFile00_00_00","-30","180","100.00%","156",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("30");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"grdFile1\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01_00_00","0","-120","400","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("32");
            obj.set_text("담당자 개인정보수집 및 이용동의서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00_00","20","-110","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("31");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Grid("grdFile1","20.00","60","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("33");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell cssclass=\"expr:!colId ? &quot;&quot; : &quot;CellFile&quot;\" text=\"bind:orgnlFileNm\"/><Cell col=\"1\" cssclass=\"expr:!colId ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"expr:!colId ? &quot;파일찾기&quot; : &quot;삭제&quot;\"/></Band></Format></Formats>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 20px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_00","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_text("반환신청 대상");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
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
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit02","1630","674","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("8");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div02","0","66","100%","308",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("9");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","40","100.00%","301",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divGrd\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Div("divGrd","0","0","100%","236",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","0","100.00%","236",null,null,null,null,null,null,this.divForm.form.Div02.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsSpceList");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"187\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"75\"/><Column size=\"92\"/><Column size=\"221\"/><Column size=\"134\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"건물명\"/><Cell col=\"1\" text=\"호실번호\"/><Cell col=\"2\" text=\"사용용도\"/><Cell col=\"3\" text=\"면적(m2)\"/><Cell col=\"4\" text=\"사용인원수\"/><Cell col=\"5\" text=\"계약기간\"/><Cell col=\"6\" text=\"임대계약해지일자\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell suppressalign=\"middle\" textAlign=\"left\" verticalAlign=\"middle\" edittype=\"readonly\" displaytype=\"text\" cssclass=\"CellReadonly Bgsky\" text=\"bind:bldgNm\"/><Cell col=\"1\" textAlign=\"center\" verticalAlign=\"middle\" cssclass=\"Bgsky\" text=\"bind:rmnmNo\"/><Cell col=\"2\" textAlign=\"left\" verticalAlign=\"middle\" displaytype=\"text\" cssclass=\"Bgsky\" text=\"bind:dtlUsgNm\"/><Cell col=\"3\" textAlign=\"center\" verticalAlign=\"middle\" cssclass=\"Bgsky\" text=\"bind:rntar\"/><Cell col=\"4\" textAlign=\"center\" verticalAlign=\"middle\" cssclass=\"Bgsky\" text=\"bind:userCnt\"/><Cell col=\"5\" textAlign=\"center\" verticalAlign=\"middle\" displaytype=\"text\" cssclass=\"Bgsky\" text=\"bind:ctrtPrd\"/><Cell col=\"6\" textAlign=\"center\" verticalAlign=\"middle\" displaytype=\"mask\" cssclass=\"CellEnd Bgsky\" text=\"bind:ctrtCncltnYmd\" maskedittype=\"string\" maskeditformat=\"####-##-##\"/></Band></Format></Formats>");
            this.divForm.form.Div02.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_02_00","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("10");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00_02_00","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_02_00","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("12");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_02_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit03","1630","674","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("13");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_02_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div03","0","30","100%","312",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("14");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panFile00_00_00","0","313","100.00%","156",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("2");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grdFile3\"/></Contents>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Grid("grdFile3","-551","421","100%","236",null,null,null,null,null,null,this.divForm.form.Div03.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsFile3");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"596\"/><Column size=\"100\" band=\"right\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"증빙자료명\"/><Cell col=\"1\" text=\"첨부파일명\" cssclass=\"CellHead_E\"/><Cell col=\"2\"/></Band><Band id=\"body\"><Cell text=\"bind:cdNm\"/><Cell col=\"1\" text=\"bind:orgnlFileNm\" cssclass=\"CellLink\"/><Cell col=\"2\" cssclass=\"expr:!colId ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\" text=\"expr:!colId ? &quot;파일찾기&quot; : &quot;삭제&quot;\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band></Format></Formats>");
            this.divForm.form.Div03.addChild(obj.name, obj);

            obj = new Panel("sub_tit04","0","0","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("19");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_00_00","30","50","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("16");
            obj.set_text("반환신청 검토의견");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","1390.00","18","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_00_00","710.00","50","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("18");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 20px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div04","50.00","478","100.00%","146",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("20");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new TextArea("txtRvwOpnn","171","111","100%","100",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("0");
            obj.set_readonly("false");
            obj.set_displaynulltext("검토의견 입력 – 반려(보완요청)의 경우 입력 필수");
            obj.set_visible("true");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","50","100.00%","130",null,null,null,null,null,null,this.divForm.form.Div04.form);
            obj.set_taborder("1");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("div_WF_InfoGuide");
            obj.set_verticalgap("0");
            obj.set_horizontalgap("20");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"txtRvwOpnn\"/></Contents>");
            this.divForm.form.Div04.addChild(obj.name, obj);

            obj = new Div("divQuick",null,"62","296","245","62",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickMenu");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Button("btnSubTit01","17","20","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("0");
            obj.set_text("신청자");
            obj.set_cssclass("btn_WF_Quick_S");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btnSubTit02","17.00","btnSubTit01:0","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("1");
            obj.set_text("반환신청 대상");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btnSubTit03","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("2");
            obj.set_text("첨부파일");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btnSubTit04","17.00","110","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("3");
            obj.set_text("반환신청 검토의견");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"divQuick:0","296","181","62",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickBtnBg");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","7","20","84","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_No");
            obj.set_fittocontents("none");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btnReject","7","20","84","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("1");
            obj.set_text("반려");
            obj.set_cssclass("btn_WF_No");
            obj.set_fittocontents("none");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btnRcpt","10","20","84","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("2");
            obj.set_text("접수");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("none");
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

            obj = new RaonkUpload("RaonkUpload","0","520","864","200",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_DevelopLangage("JAVA");
            obj.set_ExtensionAllowOrLimit("1");
            obj.set_HandlerUrl("/common/uploadDownload.do");
            obj.set_RunTimes("html5");
            obj.set_ButtonBarView("0");
            obj.set_visible("false");
            obj.set_AllowDuplicationFile("1");
            obj.set_text("");
            obj.set_DisableDeleteConfirm("1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.Div01.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel01_00_01_01.set_taborder("0");
                p.staLabel01_00_01_01.set_text("업체명");
                p.staLabel01_00_01_01.set_cssclass("sta_WF_Label");
                p.staLabel01_00_01_01.move("396.00","70","100%","46",null,null);

                p.edt00_01_00_01.set_taborder("1");
                p.edt00_01_00_01.set_readonly("true");
                p.edt00_01_00_01.move("396.00","114","100%","40",null,null);

                p.Panel00_1.set_taborder("2");
                p.Panel00_1.set_type("vertical");
                p.Panel00_1.set_flexgrow("1");
                p.Panel00_1.move("396.00","70","200","86",null,null);

                p.staLabel01_00_01_02.set_taborder("3");
                p.staLabel01_00_01_02.set_text("업체분류");
                p.staLabel01_00_01_02.set_cssclass("sta_WF_Label");
                p.staLabel01_00_01_02.move("396.00","70","100%","46",null,null);

                p.edt00_01_00_02.set_taborder("4");
                p.edt00_01_00_02.set_readonly("true");
                p.edt00_01_00_02.move("396.00","114","100%","40",null,null);

                p.Panel00_2.set_taborder("5");
                p.Panel00_2.set_type("vertical");
                p.Panel00_2.set_flexgrow("1");
                p.Panel00_2.move("396.00","70","150","86",null,null);

                p.staLabel01_00_01_00.set_taborder("6");
                p.staLabel01_00_01_00.set_text("임대료");
                p.staLabel01_00_01_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_01_00.move("396.00","70","100%","46",null,null);

                p.edt00_01_00_00.set_taborder("7");
                p.edt00_01_00_00.set_readonly("true");
                p.edt00_01_00_00.move("396.00","114","100%","40",null,null);

                p.Panel00_3.set_taborder("8");
                p.Panel00_3.set_type("vertical");
                p.Panel00_3.set_flexgrow("1");
                p.Panel00_3.move("396.00","70","90","86",null,null);

                p.staLabel01_00_00_00.set_taborder("9");
                p.staLabel01_00_00_00.set_text("관리비");
                p.staLabel01_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00_00.move("46.00","46","100%","46",null,null);

                p.Panel00_4.set_taborder("10");
                p.Panel00_4.set_flexgrow("1");
                p.Panel00_4.set_type("vertical");
                p.Panel00_4.move("46.00","46","90","86",null,null);

                p.staLabel01_00_01.set_taborder("11");
                p.staLabel01_00_01.set_text("유틸리티");
                p.staLabel01_00_01.set_cssclass("sta_WF_Label");
                p.staLabel01_00_01.move("396.00","70","100%","46",null,null);

                p.Panel00_5.set_taborder("12");
                p.Panel00_5.set_type("vertical");
                p.Panel00_5.set_flexgrow("1");
                p.Panel00_5.move("396.00","70","90","86",null,null);

                p.Panel00.set_taborder("13");
                p.Panel00.set_horizontalgap("20");
                p.Panel00.set_flexcrossaxiswrapalign("start");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_verticalgap("0");
                p.Panel00.set_spacing("0px 20px 10px 20px");
                p.Panel00.set_cssclass("pal_WF_DtlBg");
                p.Panel00.set_type("horizontal");
                p.Panel00.move("136.00","100","100.00%","96",null,null);

                p.Panel00_2_00.set_taborder("20");
                p.Panel00_2_00.set_type("vertical");
                p.Panel00_2_00.set_flexgrow("1");
                p.Panel00_2_00.move("296","-120","150","86",null,null);

                p.edtPicTelno.set_taborder("22");
                p.edtPicTelno.set_readonly("true");
                p.edtPicTelno.move("0","-74","100%","40",null,null);

                p.staLabel01_00_01_02_00.set_taborder("21");
                p.staLabel01_00_01_02_00.set_text("담당자 전화(사무실)");
                p.staLabel01_00_01_02_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_01_02_00.move("0","-120","100%","46",null,null);

                p.Panel01.set_taborder("16");
                p.Panel01.set_horizontalgap("20");
                p.Panel01.set_flexcrossaxiswrapalign("start");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_verticalgap("0");
                p.Panel01.set_spacing("0px 20px 10px 20px");
                p.Panel01.set_cssclass("pal_WF_DtlBg");
                p.Panel01.set_type("horizontal");
                p.Panel01.move("-22","108","100.00%","96",null,null);

                p.edt01.set_taborder("14");
                p.edt01.set_readonly("true");
                p.edt01.move("867","55","100%","40",null,null);

                p.edt00_01_00_02_00.set_taborder("15");
                p.edt00_01_00_02_00.set_readonly("true");
                p.edt00_01_00_02_00.move("396.00","114","100%","40",null,null);

                p.edtPicEmlAddr.set_taborder("28");
                p.edtPicEmlAddr.set_readonly("true");
                p.edtPicEmlAddr.move("0","-74","100%","40",null,null);

                p.staLabel01_00_00_00_00.set_taborder("27");
                p.staLabel01_00_00_00_00.set_text("담당자이메일");
                p.staLabel01_00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00_00_00.move("0","-120","100%","46",null,null);

                p.Panel00_4_00.set_taborder("26");
                p.Panel00_4_00.set_flexgrow("1");
                p.Panel00_4_00.set_type("vertical");
                p.Panel00_4_00.move("688","-120","305","86",null,null);

                p.Panel03.set_taborder("29");
                p.Panel03.set_horizontalgap("10");
                p.Panel03.move("697","137","100%","40",null,null);

                p.edtPicMblTelno.set_taborder("25");
                p.edtPicMblTelno.set_readonly("true");
                p.edtPicMblTelno.move("0","-74","100%","40",null,null);

                p.staLabel01_00_01_00_00.set_taborder("24");
                p.staLabel01_00_01_00_00.set_text("담당자 휴대폰");
                p.staLabel01_00_01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_01_00_00.move("0","-120","100%","46",null,null);

                p.Panel00_3_00.set_taborder("23");
                p.Panel00_3_00.set_type("vertical");
                p.Panel00_3_00.set_flexgrow("1");
                p.Panel00_3_00.move("522","-120","150","86",null,null);

                p.edtPicNm.set_taborder("19");
                p.edtPicNm.set_readonly("true");
                p.edtPicNm.move("0","-74","100%","40",null,null);

                p.staLabel01_00_01_01_00.set_taborder("18");
                p.staLabel01_00_01_01_00.set_text("담당자");
                p.staLabel01_00_01_01_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_01_01_00.move("0","-120","100%","46",null,null);

                p.Panel00_1_00.set_taborder("17");
                p.Panel00_1_00.set_type("vertical");
                p.Panel00_1_00.set_flexgrow("1");
                p.Panel00_1_00.move("20","-120","150","86",null,null);

                p.panFile00_00_00.set_taborder("30");
                p.panFile00_00_00.set_fittocontents("height");
                p.panFile00_00_00.set_spacing("10px 20px 10px 20px");
                p.panFile00_00_00.set_flexwrap("wrap");
                p.panFile00_00_00.set_cssclass("pal_WF_DtlBg");
                p.panFile00_00_00.set_verticalgap("4");
                p.panFile00_00_00.move("-30","180","100.00%","156",null,null);

                p.staLabel00_02_01_00_00.set_taborder("32");
                p.staLabel00_02_01_00_00.set_text("담당자 개인정보수집 및 이용동의서");
                p.staLabel00_02_01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_01_00_00.set_fittocontents("width");
                p.staLabel00_02_01_00_00.move("0","-120","400","40",null,null);

                p.panTitle00_00_00.set_taborder("31");
                p.panTitle00_00_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00_00.set_flexwrap("wrap");
                p.panTitle00_00_00.set_fittocontents("height");
                p.panTitle00_00_00.move("20","-110","100%","40",null,null);

                p.grdFile1.set_taborder("33");
                p.grdFile1.set_binddataset("dsFile1");
                p.grdFile1.set_autofittype("col");
                p.grdFile1.set_cssclass("grd_WF_FileAdd");
                p.grdFile1.set_readonly("true");
                p.grdFile1.move("20.00","60","100%","40",null,null);
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
                p.Grid00.set_taborder("0");
                p.Grid00.set_binddataset("dsSpceList");
                p.Grid00.set_autofittype("none");
                p.Grid00.move("0","0","100.00%","236",null,null);
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
                p.Grid00.set_autofittype("none");

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
                p.Panel00.set_taborder("0");
                p.Panel00.set_horizontalgap("20");
                p.Panel00.set_flexcrossaxiswrapalign("start");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_verticalgap("0");
                p.Panel00.set_spacing("10px 20px 10px 20px");
                p.Panel00.set_cssclass("pal_WF_DtlBg");
                p.Panel00.set_type("horizontal");
                p.Panel00.move("0","40","100.00%","301",null,null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","0","100%","236",null,null);
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
            //-- Default Layout : this.divForm.form.Div03.form
            obj = new Layout("default","",0,0,this.divForm.form.Div03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panFile00_00_00.set_taborder("2");
                p.panFile00_00_00.set_fittocontents("height");
                p.panFile00_00_00.set_spacing("10px 20px 10px 20px");
                p.panFile00_00_00.set_flexwrap("wrap");
                p.panFile00_00_00.set_cssclass("pal_WF_DtlBg");
                p.panFile00_00_00.set_verticalgap("4");
                p.panFile00_00_00.move("0","313","100.00%","156",null,null);

                p.grdFile3.set_taborder("1");
                p.grdFile3.set_binddataset("dsFile3");
                p.grdFile3.set_autofittype("col");
                p.grdFile3.set_autoenter("select");
                p.grdFile3.move("-551","421","100%","236",null,null);
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
            //-- Default Layout : this.divForm.form.Div04.form
            obj = new Layout("default","",0,0,this.divForm.form.Div04.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.txtRvwOpnn.set_taborder("0");
                p.txtRvwOpnn.set_readonly("false");
                p.txtRvwOpnn.set_displaynulltext("검토의견 입력 – 반려(보완요청)의 경우 입력 필수");
                p.txtRvwOpnn.set_visible("true");
                p.txtRvwOpnn.move("171","111","100%","100",null,null);

                p.Panel01.set_taborder("1");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_spacing("10px 20px 10px 20px");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_cssclass("div_WF_InfoGuide");
                p.Panel01.set_verticalgap("0");
                p.Panel01.set_horizontalgap("20");
                p.Panel01.move("0","50","100.00%","130",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div04.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div04.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div04.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div04.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sub_tit01.set_taborder("4");
                p.sub_tit01.set_background("#ffffff");
                p.sub_tit01.set_flexcrossaxisalign("end");
                p.sub_tit01.set_minheight("70");
                p.sub_tit01.set_maxheight("");
                p.sub_tit01.move("1630","674","100%","70",null,null);

                p.Div01.set_taborder("0");
                p.Div01.set_text("Div00");
                p.Div01.set_cssclass("div_WF_Bg");
                p.Div01.set_fittocontents("height");
                p.Div01.move("0","0","100%","288",null,null);

                p.staSubTitle02_00.set_taborder("1");
                p.staSubTitle02_00.set_text("신청자");
                p.staSubTitle02_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00.move("1630.00","690","50%","50",null,null);

                p.Button00_00.set_taborder("2");
                p.Button00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00.move("2890.00","692","34","34",null,null);

                p.Panel01_02.set_taborder("3");
                p.Panel01_02.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02.set_spacing("0px 20px");
                p.Panel01_02.set_horizontalgap("10");
                p.Panel01_02.set_flexcrossaxisalign("center");
                p.Panel01_02.set_flexmainaxisalign("end");
                p.Panel01_02.move("2340.00","690","50%","50",null,null);

                p.staSubTitle02_00_00.set_taborder("5");
                p.staSubTitle02_00_00.set_text("반환신청 대상");
                p.staSubTitle02_00_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_00.move("1630.00","690","50%","50",null,null);

                p.Button00_00_00.set_taborder("6");
                p.Button00_00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_00.move("2890.00","692","34","34",null,null);

                p.Panel01_02_00.set_taborder("7");
                p.Panel01_02_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_00.set_spacing("0px 10px");
                p.Panel01_02_00.set_horizontalgap("10");
                p.Panel01_02_00.set_flexcrossaxisalign("center");
                p.Panel01_02_00.set_flexmainaxisalign("end");
                p.Panel01_02_00.move("2340.00","690","50%","50",null,null);

                p.sub_tit02.set_taborder("8");
                p.sub_tit02.set_background("#ffffff");
                p.sub_tit02.set_flexcrossaxisalign("end");
                p.sub_tit02.set_minheight("70");
                p.sub_tit02.set_maxheight("");
                p.sub_tit02.move("1630","674","100%","70",null,null);

                p.Div02.set_taborder("9");
                p.Div02.set_text("Div00");
                p.Div02.set_cssclass("div_WF_Bg");
                p.Div02.set_fittocontents("height");
                p.Div02.move("0","66","100%","308",null,null);

                p.staSubTitle02_00_02_00.set_taborder("10");
                p.staSubTitle02_00_02_00.set_text("첨부파일");
                p.staSubTitle02_00_02_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_02_00.move("1630.00","690","50%","50",null,null);

                p.Button00_00_02_00.set_taborder("11");
                p.Button00_00_02_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_02_00.move("2890.00","692","34","34",null,null);

                p.Panel01_02_02_00.set_taborder("12");
                p.Panel01_02_02_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_02_00.set_spacing("0px 10px");
                p.Panel01_02_02_00.set_horizontalgap("10");
                p.Panel01_02_02_00.set_flexcrossaxisalign("center");
                p.Panel01_02_02_00.set_flexmainaxisalign("end");
                p.Panel01_02_02_00.move("2340.00","690","50%","50",null,null);

                p.sub_tit03.set_taborder("13");
                p.sub_tit03.set_background("#ffffff");
                p.sub_tit03.set_flexcrossaxisalign("end");
                p.sub_tit03.set_minheight("70");
                p.sub_tit03.set_maxheight("");
                p.sub_tit03.move("1630","674","100%","70",null,null);

                p.Div03.set_taborder("14");
                p.Div03.set_text("Div00");
                p.Div03.set_cssclass("div_WF_Bg");
                p.Div03.set_fittocontents("height");
                p.Div03.move("0","30","100%","312",null,null);

                p.sub_tit04.set_taborder("19");
                p.sub_tit04.set_background("#ffffff");
                p.sub_tit04.set_flexcrossaxisalign("end");
                p.sub_tit04.set_minheight("70");
                p.sub_tit04.set_maxheight("");
                p.sub_tit04.move("0","0","100%","70",null,null);

                p.staSubTitle02_00_00_00.set_taborder("16");
                p.staSubTitle02_00_00_00.set_text("반환신청 검토의견");
                p.staSubTitle02_00_00_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_00_00.move("30","50","100%","50",null,null);

                p.Button00_00_00_00.set_taborder("17");
                p.Button00_00_00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_00_00.set_visible("false");
                p.Button00_00_00_00.move("1390.00","18","34","34",null,null);

                p.Panel01_02_00_00.set_taborder("18");
                p.Panel01_02_00_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_00_00.set_spacing("0px 20px");
                p.Panel01_02_00_00.set_horizontalgap("10");
                p.Panel01_02_00_00.set_flexcrossaxisalign("center");
                p.Panel01_02_00_00.set_flexmainaxisalign("end");
                p.Panel01_02_00_00.move("710.00","50","100%","50",null,null);

                p.Div04.set_taborder("20");
                p.Div04.set_text("Div00");
                p.Div04.set_cssclass("div_WF_Bg");
                p.Div04.set_fittocontents("height");
                p.Div04.move("50.00","478","100.00%","146",null,null);
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
                p.btnSubTit01.set_taborder("0");
                p.btnSubTit01.set_text("신청자");
                p.btnSubTit01.set_cssclass("btn_WF_Quick_S");
                p.btnSubTit01.move("17","20","100%","45",null,null);

                p.btnSubTit02.set_taborder("1");
                p.btnSubTit02.set_text("반환신청 대상");
                p.btnSubTit02.set_cssclass("btn_WF_Quick");
                p.btnSubTit02.move("17.00","btnSubTit01:0","100%","45",null,null);

                p.btnSubTit03.set_taborder("2");
                p.btnSubTit03.set_text("첨부파일");
                p.btnSubTit03.set_cssclass("btn_WF_Quick");
                p.btnSubTit03.move("17.00","110","100%","45",null,null);

                p.btnSubTit04.set_taborder("3");
                p.btnSubTit04.set_text("반환신청 검토의견");
                p.btnSubTit04.set_cssclass("btn_WF_Quick");
                p.btnSubTit04.move("17.00","110","100%","45",null,null);
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
                p.btnSubTit01.set_cssclass("btn_WF_QuickM_S");
                p.btnSubTit01.set_fittocontents("width");

                p.btnSubTit02.set_fittocontents("width");
                p.btnSubTit02.set_cssclass("btn_WF_QuickM");

                p.btnSubTit03.set_fittocontents("width");
                p.btnSubTit03.set_cssclass("btn_WF_QuickM");
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
                p.btn00.set_taborder("0");
                p.btn00.set_text("취소");
                p.btn00.set_cssclass("btn_WF_No");
                p.btn00.set_fittocontents("none");
                p.btn00.move("7","20","84","40",null,null);

                p.btnReject.set_taborder("1");
                p.btnReject.set_text("반려");
                p.btnReject.set_cssclass("btn_WF_No");
                p.btnReject.set_fittocontents("none");
                p.btnReject.move("7","20","84","40",null,null);

                p.btnRcpt.set_taborder("2");
                p.btnRcpt.set_text("접수");
                p.btnRcpt.set_cssclass("btn_WF_Yes");
                p.btnRcpt.set_fittocontents("none");
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
            obj = new Layout("default","Desktop_screen,Phone_screen",1480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("임대보증금반환신청 접수");

                p.divTitle.set_taborder("3");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_cssclass("div_WF_QuickFrBg");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("height");
                p.divForm.move("0","divTitle:0",null,"4566","60",null);

                p.divQuick.set_taborder("1");
                p.divQuick.set_text("div00");
                p.divQuick.set_cssclass("div_WF_QuickMenu");
                p.divQuick.set_fittocontents("height");
                p.divQuick.move(null,"62","296","245","62",null);

                p.divBtn.set_taborder("2");
                p.divBtn.set_text("div00");
                p.divBtn.set_cssclass("div_WF_QuickBtnBg");
                p.divBtn.set_fittocontents("height");
                p.divBtn.move(null,"divQuick:0","296","181","62",null);

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
                p.RaonkUpload.set_visible("false");
                p.RaonkUpload.set_AllowDuplicationFile("1");
                p.RaonkUpload.set_text("");
                p.RaonkUpload.set_DisableDeleteConfirm("1");
                p.RaonkUpload.move("0","520","864","200",null,null);
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
                p.divForm.move("0","120",null,null,"0","80");

                p.divBtn.set_cssclass("div_WF_QuickBtnBgM");
                p.divBtn.set_fittocontents("none");
                p.divBtn.move("0",null,null,"80","0","0");
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.Div01.form.edt00_01_00_01","value","dsMaster","bzentyNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.Div01.form.edt00_01_00_02","value","dsMaster","bzentyClsfNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.Div01.form.edtPicNm","value","dsMaster","picNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.Div01.form.edtPicTelno","value","dsMaster","picTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.Div01.form.edtPicMblTelno","value","dsMaster","picMblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.Div01.form.edtPicEmlAddr","value","dsMaster","picEmlAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.Div01.form.edt00_01_00_00","value","dsMaster","rtfeYnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.Div01.form.edt00_01_00_02_00","value","dsMaster","mncoYnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divForm.form.Div01.form.edt01","value","dsMaster","utltYnNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.addIncludeScript("REN034M01.xfdl","xjs::TaskCom.xjs");
        this.registerScript("REN034M01.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	REN034M01.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/11/20
        *  @Desction    임대보증금반환신청 등록
        ******************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/11/20			이루온						최초생성
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

        	// 전달받은 파라메터 팝업창과 페이지오픈으로 파라메터 불러오는 방식이 달라짐
        	this.param = this.getOwnerFrame().form.fvObjArgs;

        	if (this.param != null) {
        		//페이지 로딩시 처음에 실행 되는 함수
        		this.fnInit();

        		// 등록 이면
        		if (this.param.status != null && this.param.status == "reg") {
        			// 임차의향서 등록조회
        			this.dsSearch.setColumn(0,"grp1CdId", "REN033M01");
        			this.selectRentSctdpGvbkAply();
        		} else {
        			// 임차의향서 상세조회
        			this.dsSearch.setColumn(0,"hireLoiNo"	,this.param.hireLoiNo);
        			this.dsSearch.setColumn(0,"grp1CdId", "REN033M01");
        			this.selectRentSctdpGvbkAply();
        		}

        		//초기포커스 지정
        		//this.divForm.form.Div01.form.rdoSptIdntyCd.setFocus();
        	} else {
        		this.gfnAlertMsg("msg", "REN_004");	//임차희망서번호가 없습니다.
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	this.validateColumn.push({"title" : "검토의견"		, "com": this.divForm.form.Div04.form.txtRvwOpnn});
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        /*******************************************************************************************************************************
         * 상세조회
        *******************************************************************************************************************************/
        this.selectRentSctdpGvbkAply = function()
        {
        	var strSvcId    = "selectRentSctdpGvbkAply";
        	var strSvcUrl   = "ren/rtn/selectRentSctdpGvbkAply.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsMaster=dsMaster dsSpceList=dsSpceList dsAtflList=dsAtflList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };


        this.cfnClose = function() {
        	console.log('cfnClose');
        }

        this.form_onkeyup = function(obj,e)
        {
        	if (e.keycode==13) {
        		this.divSch.form.btnSch.click();
        	}
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

        		// 임차의향서 상세조회
        		case "selectRentSctdpGvbkAply":
        			this.divBtn.form.btnRcpt.visible = false;		// 접수
        			this.divBtn.form.btnReject.visible = false;		// 반려

        			// 10.작성중 11.제출 20.접수 21.반려
        			if (this.dsMaster.getColumn(0,"prgrsSttsCd") == "11") {
        				this.divBtn.form.btnRcpt.visible = true;	// 접수
        				this.divBtn.form.btnReject.visible = true;	// 반려
        			}

        			// 10.작성중 아닌 경우 첨부파일 버튼 비활성화 시킴
        			this.divForm.form.Div01.form.grdFile1.setFormatColProperty(1, "size", 0);
        			this.divForm.form.Div03.form.grdFile3.setFormatColProperty(2, "size", 0);

        			// 첨부파일 설정
        			this.cfnFileSet();

        			break;

        		case "updateRentSctdpGvbkAplyRcpt":		// 접수/반려
        			this.gfnAlertMsg("msg", "MSG_007", [ this.objApp.getVariable("gvRetMsg") ]);
        			var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        			this.gfnCloseMenu(cMenuId);
        			this._gfnOpenMenu(cMenuId.substring(0,14),"",true);

        			break;
        	}
        };

        // 첨부파일 설정
        this.cfnFileSet = function()
        {
        	var vBZENTY_CLSF_CD = "";
        	if (this.dsMaster.getColumn(0,"bzentyClsfCd") == "BZENTY_CLSF_CD001") {			// 공항운영그룹
        		vBZENTY_CLSF_CD = "B";
        	} else if (this.dsMaster.getColumn(0,"bzentyClsfCd") == "BZENTY_CLSF_CD002") {	// 항공사그룹
        		vBZENTY_CLSF_CD = "C";
        	} else if (this.dsMaster.getColumn(0,"bzentyClsfCd") == "BZENTY_CLSF_CD003") {	// 조업사 정비업체
        		vBZENTY_CLSF_CD = "D";
        	} else if (this.dsMaster.getColumn(0,"bzentyClsfCd") == "BZENTY_CLSF_CD004") {	// 여행사
        		vBZENTY_CLSF_CD = "E";
        	} else if (this.dsMaster.getColumn(0,"bzentyClsfCd") == "BZENTY_CLSF_CD005") {	// 공공그룹
        		vBZENTY_CLSF_CD = "F";
        	} else if (this.dsMaster.getColumn(0,"bzentyClsfCd") == "BZENTY_CLSF_CD006") {	// 상업그룹
        		vBZENTY_CLSF_CD = "G";
        	} else if (this.dsMaster.getColumn(0,"bzentyClsfCd") == "BZENTY_CLSF_CD007") {	// 기타
        		vBZENTY_CLSF_CD = "H";
        	}

        	this.dsFile1.clearData();
        	this.dsFile3.clearData();

        	for (i = 0; i<this.dsAtflList.rowcount; i++) {
        		// 임차업무 담당자 개인정보수집 및 이용동의서
        		if (this.dsAtflList.getColumn(i,"grp2CdId") == "A") {
        			this.dsFile1.addRow();
        			this.dsFile1.copyRow(this.dsFile1.rowposition,this.dsAtflList,i);
        		}

        		// 첨부파일
        		if (this.dsAtflList.getColumn(i,"grp1CdId") == 'REN033M01' &&
        		   (this.dsAtflList.getColumn(i,"grp2CdId") == vBZENTY_CLSF_CD || this.dsAtflList.getColumn(i,"grp2CdId") == 'B')) {
        			this.dsFile3.addRow();
        			this.dsFile3.copyRow(this.dsFile3.rowposition,this.dsAtflList,i);
        		}
        	};

        	console.log("this.dsFile1==2==>"+this.dsFile1.saveXML());
        	console.log("this.dsFile3==2==>"+this.dsFile3.saveXML());

        	// 데이터 조회 후 파일리스트에 셋팅
        	this.gfnDownloadSetting(this.RaonkUpload, this.dsFile1);
        	this.gfnDownloadSetting(this.RaonkUpload, this.dsFile3);
        }


        /*******************************************************************************************************************************
         * 접수 버튼 클릭시
        *******************************************************************************************************************************/
        this.divBtn_btnRcpt_onclick = function(obj,e)
        {
        	this.dsMaster.setColumn(0, "prgrsSttsCd"	, "20");	// 진행상태코드: 10.작성중 11.제출 20.접수 21.반려
        	this.gfnConfirmMsg("save_confirm", "MSG_003", "msgCallback", ["접수", "취소"], ["Y", "N"]);
        };

        /*******************************************************************************************************************************
         * 반려 버튼 클릭시
        *******************************************************************************************************************************/
        this.divBtn_btnReject_onclick = function(obj,e)
        {
        	// 필수입력 여부 체크
        	if(this.gfnDsIsValidated(this.validateColumn)) {
        		this.dsMaster.setColumn(0, "prgrsSttsCd"	, "21");	// 진행상태코드: 10.작성중 11.제출 20.접수 21.반려
        		this.gfnConfirmMsg("save_confirm", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"],"",["반려"]);
        	}
        };

        /*******************************************************************************************************************************
         * 취소 버튼 클릭시
        *******************************************************************************************************************************/
        this.divBtn_btnCancel_onclick = function(obj,e)
        {
        	var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        	this.gfnCloseMenu(cMenuId);
        	this._gfnOpenMenu(cMenuId.substring(0,14),"",true);
        };


        //얼럿창 콜백 함수
        this.msgCallback = function(sPopupId, sRtn) {

        	var oRtn 		= JSON.parse(sRtn);

        	// 접수/반려
        	if (sPopupId == "save_confirm" && oRtn.result == "Y") {

        		var strSvcId    = "updateRentSctdpGvbkAplyRcpt";
        		var strSvcUrl   = "ren/rtn/updateRentSctdpGvbkAplyRcpt.do";
        		var inData      = "dsMaster=dsMaster:A";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";
        		var isAsync   	= false;

        		this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        	}
        };

        // 퀵메뉴 클릭시
        this.divQuickMenu_onclick = function(obj,e)
        {
        	if (obj.name == "btnSubTit01") {
        		this.divForm.form.sub_tit01.setFocus();		// 신청자정보
        	} if (obj.name == "btnSubTit02") {
        		this.divForm.form.sub_tit02.setFocus();		// 반환신청 대상
        	} if (obj.name == "btnSubTit03") {
        		this.divForm.form.sub_tit03.setFocus();		// 첨부파일
        	} if (obj.name == "btnSubTit04") {
        		this.divForm.form.sub_tit04.setFocus();		// 검토의견
        	}
        };


        // 페이지에서 라온K업로드 솔루션의 생성 이벤트
        this.RaonkUpload_RAONKUPLOAD_CreationComplete = function(obj,  paramObj)
        {
        	// 업로드 솔루션이 초기 생성시 업로드 할 경로를 지정해야 한다.
        	// /CMM/YYYY/MM/DD/  <<== CMM은 업무별 폴더 지정이고 기본적으로 /년도/월/일 의 폴더 구조를 갖는다.
        	this.RaonkUpload.SetConfig('FolderNameRule', '/COM/YYYY/MM/DD/');
        };

        // 파일 업로드 시 에러 발생 이벤트
        this.RaonkUpload_RAONKUPLOAD_OnError = function(obj, paramObj)
        {
        	console.log(paramObj);
        };

        // 파일 추가 시 발생 이벤트
        // 파일 추가 시 타입을 정해야 한다.(사업자등록증, 증빙자료, 첨부파일, 등등)
        this.RaonkUpload_RAONKUPLOAD_AfterAddAllFile = function(obj, paramObj)
        {
        	// 파일 카테고리 초기화

        	this.gvUploadCategory = "";
        };

        this.RaonkUpload_RAONKUPLOAD_BeforeAddFile = function(obj, paramObj)
        {
        	console.log("RaonkUpload_RAONKUPLOAD_BeforeAddFile");

        	this.gAtflCnt++;
        	if (this.gAtflCnt > 1) {
        		//this.gfnAlertMsg("MSG_001", "msgCallback");
        		//this.gfnAlertMsg("msg", "파일 1개만 업로드 가능 합니다.");
        		// 파일 1개만 업로드 가능 합니다."
        		this.gfnAlertMsg("msg", "REN_022");
        		return false;
        	}

        	return true;
        };

        this.RaonkUpload_RAONKUPLOAD_AfterAddFile = function(obj, paramObj)
        {

        	// 파일에 카테고리 셋팅
        	var sRow = this.dsFile.findRow("colId", this.gvUploadCategory);
        	var atflMngNo = this.dsFile.getColumn(sRow, "atflMngNo");

        	var cvObj = {
        		"strCustomValue" : this.gvUploadCategory,
        		"atflMngNo" : atflMngNo
        	}

        	this.RaonkUpload.SetFileCustomValue(-1, JSON.stringify(cvObj));

        	// 파일 카테고리별 구분으로 파일 리스트에 추가
        	// 임차업무 담당자 개인정보수집 및 이용동의서
        	if(this.gAtflSe == "dsFile1") {
        		var nIdx = this.dsFile1.rowposition;
        		this.dsFile1.setColumn(nIdx, "fullName", paramObj.userdata.strName + ' (' + paramObj.userdata.nSize + ')');
        		this.dsFile1.setColumn(nIdx, "orgnlFileNm", paramObj.userdata.strName);
        		this.dsFile1.setColumn(nIdx, "fileSz", paramObj.userdata.nSize);
        		this.dsFile1.setColumn(nIdx, "atflMngSno", paramObj.userdata.nIndex);
        		this.dsFile1.setColumn(nIdx, "colId", this.dsFile1.getColumn(nIdx,"cdId"));
        		console.log(">>>this.dsFile1<<<"+this.dsFile1.saveJSON());

        	// 첨부파일
        	} else {
        		var nIdx = this.dsFile3.rowposition;
        		this.dsFile3.setColumn(nIdx, "fullName", paramObj.userdata.strName + ' (' + paramObj.userdata.nSize + ')');
        		this.dsFile3.setColumn(nIdx, "orgnlFileNm", paramObj.userdata.strName);
        		this.dsFile3.setColumn(nIdx, "fileSz", paramObj.userdata.nSize);
        		this.dsFile3.setColumn(nIdx, "atflMngSno", paramObj.userdata.nIndex);
        		this.dsFile3.setColumn(nIdx, "colId", this.dsFile3.getColumn(nIdx,"cdId"));
        		//this.dsFile1.setColumn(nIdx, "colId", this.gvUploadCategory);
        		console.log(">>>this.dsFile3<<<"+this.dsFile3.saveJSON());

        	}
        };

        // 파일 업로드 완료 이벤트
        this.RaonkUpload_RAONKUPLOAD_UploadComplete = function(obj, paramObj)
        {
        	var allListArray = this.RaonkUpload.GetListInfo("json");
        	console.log("RaonkUpload_RAONKUPLOAD_UploadComplete");
        	console.log(allListArray);
        	// 파일 업로드 후 첨부파일관리번호를 얻기 위한 함수
        	this.gfnUploadComplete("uploadComplete", allListArray, "dsAtchRslt", "fnCallback");
        };

        // 임차업무 담당자 개인정보수집 및 이용동의서
        this.divForm_Div03_grdFile1_oncellclick = function(obj,e)
        {
        	// 데이터의 첨부파일 관리번호 입력 컬럼명
        	if (e.col == 0) {
        		// 파일명을 더블클릭 시 다운로드
        		this.gfnDownloadFile(this.RaonkUpload, this.dsFile1, e);
        	}
        };

        // 첨부파일
        this.divForm_Div05_grdFile3_oncellclick = function(obj,e)
        {
        	// 데이터의 첨부파일 관리번호 입력 컬럼명
        	if (e.col == 1) {
        		// 파일명을 더블클릭 시 다운로드
        		this.gfnDownloadFile(this.RaonkUpload, this.dsFile3, e);
        	}
        };







        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.Div01.form.staLabel00_02_01_00_00.addEventHandler("onclick",this.divForm_Div05_staLabel00_02_01_onclick,this);
            this.divForm.form.Div01.form.grdFile1.addEventHandler("oncellclick",this.divForm_Div03_grdFile1_oncellclick,this);
            this.divForm.form.staSubTitle02_00_00.addEventHandler("onclick",this.divForm_staSubTitle02_00_00_onclick,this);
            this.divForm.form.Div03.form.grdFile3.addEventHandler("oncellclick",this.divForm_Div05_grdFile3_oncellclick,this);
            this.divForm.form.Div04.form.txtRvwOpnn.addEventHandler("onchanged",this.divForm_Div03_TextArea00_onchanged,this);
            this.divQuick.form.btnSubTit01.addEventHandler("onclick",this.divQuickMenu_onclick,this);
            this.divQuick.form.btnSubTit02.addEventHandler("onclick",this.divQuickMenu_onclick,this);
            this.divQuick.form.btnSubTit03.addEventHandler("onclick",this.divQuickMenu_onclick,this);
            this.divQuick.form.btnSubTit04.addEventHandler("onclick",this.divQuickMenu_onclick,this);
            this.divBtn.form.btn00.addEventHandler("onclick",this.divBtn_btnCancel_onclick,this);
            this.divBtn.form.btnReject.addEventHandler("onclick",this.divBtn_btnReject_onclick,this);
            this.divBtn.form.btnRcpt.addEventHandler("onclick",this.divBtn_btnRcpt_onclick,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddFile",this.RaonkUpload_RAONKUPLOAD_AfterAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_CreationComplete",this.RaonkUpload_RAONKUPLOAD_CreationComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_UploadComplete",this.RaonkUpload_RAONKUPLOAD_UploadComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_OnError",this.RaonkUpload_RAONKUPLOAD_OnError,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeAddFile",this.RaonkUpload_RAONKUPLOAD_BeforeAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddAllFile",this.RaonkUpload_RAONKUPLOAD_AfterAddAllFile,this);
            this.dsFile1.addEventHandler("onload",this.dsAtfl_onload,this);
            this.dsFile2.addEventHandler("onload",this.dsAtfl_onload,this);
            this.dsFile3.addEventHandler("onload",this.dsAtfl_onload,this);
        };
        this.loadIncludeScript("REN034M01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
