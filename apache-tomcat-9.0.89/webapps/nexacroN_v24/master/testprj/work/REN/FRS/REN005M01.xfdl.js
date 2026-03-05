(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("REN005M01");
            this.set_titletext("후보공간확인요청 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1420,1550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCboSptIdntyCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"hh\" type=\"STRING\" size=\"256\"/><Column id=\"mm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"hh\">선택</Col><Col id=\"code\">0</Col><Col id=\"mm\">선택</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"hh\">01</Col><Col id=\"mm\">5</Col></Row><Row><Col id=\"hh\">02</Col><Col id=\"code\">2</Col><Col id=\"mm\">10</Col></Row><Row><Col id=\"hh\">03</Col><Col id=\"code\">3</Col><Col id=\"mm\">15</Col></Row><Row><Col id=\"hh\">04</Col><Col id=\"code\">4</Col><Col id=\"mm\">20</Col></Row><Row><Col id=\"hh\">05</Col><Col id=\"code\">5</Col><Col id=\"mm\">25</Col></Row><Row><Col id=\"hh\">06</Col><Col id=\"code\">6</Col><Col id=\"mm\">30</Col></Row><Row><Col id=\"hh\">07</Col><Col id=\"code\">7</Col><Col id=\"mm\">35</Col></Row><Row><Col id=\"hh\">08</Col><Col id=\"code\">8</Col><Col id=\"mm\">40</Col></Row><Row><Col id=\"hh\">09</Col><Col id=\"code\">9</Col><Col id=\"mm\">45</Col></Row><Row><Col id=\"hh\">10</Col><Col id=\"code\">10</Col><Col id=\"mm\">50</Col></Row><Row><Col id=\"hh\">11</Col><Col id=\"code\">11</Col><Col id=\"mm\">60</Col></Row><Row><Col id=\"hh\">12</Col><Col id=\"code\">12</Col></Row><Row><Col id=\"hh\">13</Col><Col id=\"code\">13</Col></Row><Row><Col id=\"hh\">14</Col><Col id=\"code\">14</Col></Row><Row><Col id=\"code\">15</Col><Col id=\"hh\">15</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"grp1CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp1CdNm\" type=\"STRING\" size=\"256\"/><Column id=\"grp2CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp2CdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"hireLoiNo\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId\" type=\"STRING\" size=\"256\"/><Column id=\"atflCd\" type=\"STRING\" size=\"256\"/><Column id=\"natchRsn\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bsnsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId2\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtn\" type=\"STRING\" size=\"256\"/><Column id=\"strgFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTerm\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"grp1CdId\">Iaad010101 [PDF, 328KB]</Col><Col id=\"grp2CdId\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboLdrNeedYn", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"hireLohNo\" type=\"STRING\" size=\"256\"/><Column id=\"pstnNm\" type=\"STRING\" size=\"256\"/><Column id=\"bldgNm\" type=\"STRING\" size=\"256\"/><Column id=\"rmnmNo\" type=\"STRING\" size=\"256\"/><Column id=\"rntar\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGet", this);
            obj._setContents("<ColumnInfo><Column id=\"hireLohNo\" type=\"STRING\" size=\"256\"/><Column id=\"rcptNo\" type=\"STRING\" size=\"256\"/><Column id=\"prgrsSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyClsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"sptIdntyCd\" type=\"STRING\" size=\"256\"/><Column id=\"vstHpeYmd\" type=\"STRING\" size=\"256\"/><Column id=\"vstrNm\" type=\"STRING\" size=\"256\"/><Column id=\"vstrTelno\" type=\"STRING\" size=\"256\"/><Column id=\"vstrEmlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"ldrNeedYn\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntSmYn\" type=\"STRING\" size=\"256\"/><Column id=\"sptIdntyYmd\" type=\"STRING\" size=\"256\"/><Column id=\"sptIdntyHm\" type=\"STRING\" size=\"256\"/><Column id=\"sptIdntyPicId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntGdMttr\" type=\"STRING\" size=\"256\"/><Column id=\"schdlChgRsn\" type=\"STRING\" size=\"256\"/><Column id=\"prsnrId\" type=\"STRING\" size=\"256\"/><Column id=\"rcptUserId\" type=\"STRING\" size=\"256\"/><Column id=\"prsnrMblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"rcptUserMblTelno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"hireLohNo\" type=\"STRING\" size=\"256\"/><Column id=\"grp1CdId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"hireLohNo\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj.set_useclientlayout("true");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtchRslt", this);
            obj._setContents("<ColumnInfo><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile99", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"grp1CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp1CdNm\" type=\"STRING\" size=\"256\"/><Column id=\"grp2CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp2CdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"hireLoiNo\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId\" type=\"STRING\" size=\"256\"/><Column id=\"atflCd\" type=\"STRING\" size=\"256\"/><Column id=\"natchRsn\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bsnsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId2\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtn\" type=\"STRING\" size=\"256\"/><Column id=\"strgFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTerm\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSms", this);
            obj._setContents("<ColumnInfo><Column id=\"send_num\" type=\"STRING\" size=\"256\"/><Column id=\"recipient_num\" type=\"STRING\" size=\"256\"/><Column id=\"contentId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"send_num\">81014uuu</Col><Col id=\"recipient_num\">81014uuu</Col><Col id=\"contentId\">TSP_18</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","70",null,null,"60","60",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","0","100.00%","300",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","0","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel03\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt00_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","20.00","50","360","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_01\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","97","100.00%","180",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("4");
            obj.set_horizontalgap("0");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 0px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Grid00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel03","417","62","360","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_01_01\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("6");
            obj.set_text("접수번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt00_01_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","40.00","107","100%","180",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("8");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"위치\"/><Cell col=\"2\" text=\"건물명\"/><Cell col=\"3\" text=\"호실번호\"/><Cell col=\"4\" text=\"면적(m2)\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"expr:dsList.rowposition + 1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" cssclass=\"CellReadonly\"/><Cell col=\"1\" text=\"bind:pstnNm\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" cssclass=\"CellReadonly\"/><Cell col=\"2\" text=\"bind:bldgNm\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" cssclass=\"CellReadonly\"/><Cell col=\"3\" text=\"bind:rmnmNo\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" cssclass=\"CellReadonly\"/><Cell col=\"4\" text=\"bind:rntar\" displaytype=\"normal\" edittype=\"none\" textAlign=\"right\" cssclass=\"CellReadonly CellEnd\"/></Band></Format></Formats>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","0","0","100%","488",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Radio("rdoSptIdntyCd","66","438","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("height");
            var divForm_form_Div01_form_rdoSptIdntyCd_innerdataset = new nexacro.NormalDataset("divForm_form_Div01_form_rdoSptIdntyCd_innerdataset", obj);
            divForm_form_Div01_form_rdoSptIdntyCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">현장확인생략</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">현장확인요청</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div01_form_rdoSptIdntyCd_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("panSptIdntyCd","66","438","360","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("1");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"rdoSptIdntyCd\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staVstHpeYmd","0","0","100","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("2");
            obj.set_text("방문희망일자");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Calendar("calVstHpeYmd","0","46","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("3");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("panVstHpeYmd","20.00","0","280","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staVstHpeYmd\"/><PanelItem id=\"PanelItem03\" componentid=\"calVstHpeYmd\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLdrNeedYn","10","10","90%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("5");
            obj.set_text("인솔자 필요여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cboLdrNeedYn","10","56","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsCboLdrNeedYn");
            obj.set_datacolumn("cdNm");
            obj.set_codecolumn("cdId");
            obj.set_text("선택하기");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("panLdrNeedYn","410.00","0","280","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLdrNeedYn\"/><PanelItem id=\"PanelItem02\" componentid=\"cboLdrNeedYn\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staVstrNm","1028","0","92","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("8");
            obj.set_text("방문자");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtVstrNm","0","46","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("9");
            obj.set_readonly("false");
            obj.set_displaynulltext("성명");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("panVstrNm","20.00","86","280","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staVstrNm\"/><PanelItem id=\"PanelItem01\" componentid=\"edtVstrNm\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staVstrTelno","0","0","190","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("11");
            obj.set_text("방문자 휴대폰");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtVstrTelno","0","0","200","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("12");
            obj.set_readonly("false");
            obj.set_displaynulltext("휴대폰번호 입력");
            obj.getSetter("type").set("string");
            obj.getSetter("maskchar").set(" ");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new CheckBox("cbxAplcntSmYn","450.00","0","200","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("13");
            obj.set_text("신청자와 동일");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_value("N");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("panVstrTelno","10","56","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("14");
            obj.set_verticalgap("0");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("2");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"edtVstrTelno\"/><PanelItem id=\"PanelItem00\" componentid=\"cbxAplcntSmYn\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_02_01","20.00","172","560","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_flexgrow("3");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staVstrTelno\"/><PanelItem id=\"PanelItem01\" componentid=\"panVstrTelno\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00","0","0","380","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("16");
            obj.set_text("개인정보활용동의서");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00","0.00","0","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("17");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("6");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("panFile00","20","258","100%","161",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("18");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"grdFile1\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","0","77%","350",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("19");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("start");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_flexgrow("2");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"panVstHpeYmd\"/><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem03\" componentid=\"panLdrNeedYn\"/><PanelItem id=\"PanelItem04\" componentid=\"panVstrNm\"/><PanelItem id=\"PanelItem05\" componentid=\"pan01_02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"panFile00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Grid("grdFile1","20.00","60","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("20");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell cssclass=\"expr:!colId ? &quot;&quot; : &quot;CellFile&quot;\" text=\"bind:orgnlFileNm\"/><Cell col=\"1\" cssclass=\"expr:!colId ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"expr:!colId ? &quot;파일찾기&quot; : &quot;삭제&quot;\"/></Band></Format></Formats>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Div("divBtn","0",null,null,"60","60","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_CkBg");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","200.00","365","100","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_No");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btnSave","457.00","30","100","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Yes");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btnDelete","457.00","30","100","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Yes");
            this.divBtn.addChild(obj.name, obj);

            obj = new RaonkUpload("RaonkUpload","0","720","864","200",null,null,null,null,null,null,this);
            obj.set_taborder("3");
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

            //-- Default Layout : this.divForm.form.Div00.form
            obj = new Layout("default","",0,0,this.divForm.form.Div00.form,
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
                p.Panel00.set_cssclass("pal_WF");
                p.Panel00.move("0","0","100.00%","96",null,null);

                p.staLabel01_00.set_taborder("1");
                p.staLabel01_00.set_text("업체명");
                p.staLabel01_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00.move("10","98","100%","46",null,null);

                p.edt00_01.set_taborder("2");
                p.edt00_01.set_readonly("true");
                p.edt00_01.move("10.00","158","100%","40",null,null);

                p.Panel01_00.set_taborder("3");
                p.Panel01_00.set_type("vertical");
                p.Panel01_00.set_flexgrow("1");
                p.Panel01_00.move("20.00","50","360","86",null,null);

                p.Panel01.set_taborder("4");
                p.Panel01.set_horizontalgap("0");
                p.Panel01.set_flexcrossaxiswrapalign("start");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_verticalgap("0");
                p.Panel01.set_spacing("10px 20px 0px 20px");
                p.Panel01.set_cssclass("pal_WF_DtlBg");
                p.Panel01.set_flexshrink("1");
                p.Panel01.set_fittocontents("height");
                p.Panel01.move("0","97","100.00%","180",null,null);

                p.Panel03.set_taborder("5");
                p.Panel03.set_type("vertical");
                p.Panel03.set_flexgrow("1");
                p.Panel03.move("417","62","360","86",null,null);

                p.staLabel01_00_00.set_taborder("6");
                p.staLabel01_00_00.set_text("접수번호");
                p.staLabel01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00.move("10","98","100%","46",null,null);

                p.edt00_01_01.set_taborder("7");
                p.edt00_01_01.set_readonly("true");
                p.edt00_01_01.move("10.00","158","100%","40",null,null);

                p.Grid00.set_taborder("8");
                p.Grid00.set_binddataset("dsList");
                p.Grid00.set_autofittype("col");
                p.Grid00.move("40.00","107","100%","180",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div00.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_type("horizontal");
                p.Panel00.set_spacing("0px 10px 10px 10px");
                p.Panel00.move("0","56.713","100.00%","193",null,null);

                p.Panel01.set_spacing("0px 10px 10px 10px");
                p.Panel01.set_type("horizontal");
                p.Panel01.move("0","60","100.00%","231",null,null);
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
                p.rdoSptIdntyCd.set_taborder("0");
                p.rdoSptIdntyCd.set_innerdataset(divForm_form_Div01_form_rdoSptIdntyCd_innerdataset);
                p.rdoSptIdntyCd.set_codecolumn("codecolumn");
                p.rdoSptIdntyCd.set_datacolumn("datacolumn");
                p.rdoSptIdntyCd.set_direction("vertical");
                p.rdoSptIdntyCd.set_fittocontents("height");
                p.rdoSptIdntyCd.set_value("");
                p.rdoSptIdntyCd.set_index("-1");
                p.rdoSptIdntyCd.move("66","438","100%","40",null,null);

                p.panSptIdntyCd.set_taborder("1");
                p.panSptIdntyCd.set_fittocontents("height");
                p.panSptIdntyCd.set_flexgrow("1");
                p.panSptIdntyCd.set_type("horizontal");
                p.panSptIdntyCd.move("66","438","360","40",null,null);

                p.staVstHpeYmd.set_taborder("2");
                p.staVstHpeYmd.set_text("방문희망일자");
                p.staVstHpeYmd.set_cssclass("sta_WF_Label_E");
                p.staVstHpeYmd.move("0","0","100","46",null,null);

                p.calVstHpeYmd.set_taborder("3");
                p.calVstHpeYmd.move("0","46","100%","40",null,null);

                p.panVstHpeYmd.set_taborder("4");
                p.panVstHpeYmd.set_type("vertical");
                p.panVstHpeYmd.set_flexgrow("1");
                p.panVstHpeYmd.move("20.00","0","280","86",null,null);

                p.staLdrNeedYn.set_taborder("5");
                p.staLdrNeedYn.set_text("인솔자 필요여부");
                p.staLdrNeedYn.set_cssclass("sta_WF_Label_E");
                p.staLdrNeedYn.move("10","10","90%","46",null,null);

                p.cboLdrNeedYn.set_taborder("6");
                p.cboLdrNeedYn.set_innerdataset("dsCboLdrNeedYn");
                p.cboLdrNeedYn.set_datacolumn("cdNm");
                p.cboLdrNeedYn.set_codecolumn("cdId");
                p.cboLdrNeedYn.set_text("선택하기");
                p.cboLdrNeedYn.set_value("");
                p.cboLdrNeedYn.set_index("-1");
                p.cboLdrNeedYn.move("10","56","100%","40",null,null);

                p.panLdrNeedYn.set_taborder("7");
                p.panLdrNeedYn.set_type("vertical");
                p.panLdrNeedYn.set_flexgrow("1");
                p.panLdrNeedYn.move("410.00","0","280","86",null,null);

                p.staVstrNm.set_taborder("8");
                p.staVstrNm.set_text("방문자");
                p.staVstrNm.set_cssclass("sta_WF_Label_E");
                p.staVstrNm.move("1028","0","92","46",null,null);

                p.edtVstrNm.set_taborder("9");
                p.edtVstrNm.set_readonly("false");
                p.edtVstrNm.set_displaynulltext("성명");
                p.edtVstrNm.move("0","46","100%","40",null,null);

                p.panVstrNm.set_taborder("10");
                p.panVstrNm.set_type("vertical");
                p.panVstrNm.set_flexgrow("1");
                p.panVstrNm.move("20.00","86","280","86",null,null);

                p.staVstrTelno.set_taborder("11");
                p.staVstrTelno.set_text("방문자 휴대폰");
                p.staVstrTelno.set_cssclass("sta_WF_Label_E");
                p.staVstrTelno.move("0","0","190","46",null,null);

                p.edtVstrTelno.set_taborder("12");
                p.edtVstrTelno.set_readonly("false");
                p.edtVstrTelno.set_displaynulltext("휴대폰번호 입력");
                p.edtVstrTelno.getSetter("type").set("string");
                p.edtVstrTelno.getSetter("maskchar").set(" ");
                p.edtVstrTelno.move("0","0","200","40",null,null);

                p.cbxAplcntSmYn.set_taborder("13");
                p.cbxAplcntSmYn.set_text("신청자와 동일");
                p.cbxAplcntSmYn.set_falsevalue("N");
                p.cbxAplcntSmYn.set_truevalue("Y");
                p.cbxAplcntSmYn.set_value("N");
                p.cbxAplcntSmYn.move("450.00","0","200","40",null,null);

                p.panVstrTelno.set_taborder("14");
                p.panVstrTelno.set_verticalgap("0");
                p.panVstrTelno.set_horizontalgap("10");
                p.panVstrTelno.set_flexgrow("2");
                p.panVstrTelno.move("10","56","100%","40",null,null);

                p.pan01_02_01.set_taborder("15");
                p.pan01_02_01.set_type("vertical");
                p.pan01_02_01.set_flexgrow("3");
                p.pan01_02_01.move("20.00","172","560","86",null,null);

                p.staLabel00_02_00.set_taborder("16");
                p.staLabel00_02_00.set_text("개인정보활용동의서");
                p.staLabel00_02_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_02_00.set_flexgrow("1");
                p.staLabel00_02_00.move("0","0","380","46",null,null);

                p.panTitle00_00.set_taborder("17");
                p.panTitle00_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00.set_flexwrap("wrap");
                p.panTitle00_00.set_fittocontents("height");
                p.panTitle00_00.set_verticalgap("6");
                p.panTitle00_00.move("0.00","0","100%","46",null,null);

                p.panFile00.set_taborder("18");
                p.panFile00.set_fittocontents("height");
                p.panFile00.set_flexwrap("wrap");
                p.panFile00.set_cssclass("pal_WF_DtlBg");
                p.panFile00.set_verticalgap("4");
                p.panFile00.move("20","258","100%","161",null,null);

                p.Panel01.set_taborder("19");
                p.Panel01.set_horizontalgap("20");
                p.Panel01.set_flexcrossaxiswrapalign("start");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_cssclass("pal_WF_DtlBg");
                p.Panel01.set_type("horizontal");
                p.Panel01.set_flexcrossaxisalign("start");
                p.Panel01.set_flexmainaxisalign("start");
                p.Panel01.set_spacing("0px 0px 10px 0px");
                p.Panel01.set_flexgrow("2");
                p.Panel01.move("0","0","77%","350",null,null);

                p.grdFile1.set_taborder("20");
                p.grdFile1.set_binddataset("dsFile1");
                p.grdFile1.set_autofittype("col");
                p.grdFile1.set_cssclass("grd_WF_FileAdd");
                p.grdFile1.set_readonly("true");
                p.grdFile1.move("20.00","60","100%","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_spacing("0px 20px 10px 20px");
            this.divForm.form.Div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div01.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_spacing("0px 10px 10px 10px");
                p.Panel00.set_type("horizontal");
                p.Panel00.move("0","60","100.00%","126",null,null);

                p.Panel01.set_spacing("0px 10px 10px 10px");
                p.Panel01.set_type("horizontal");
                p.Panel01.move("0","60","100.00%","336",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_spacing("0px 20px 10px 20px");
            this.divForm.form.Div01.form.addLayout(obj.name, obj);
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
                p.Div00.move("0","0","100.00%","300",null,null);

                p.Div01.set_taborder("1");
                p.Div01.set_text("Div00");
                p.Div01.set_cssclass("div_WF_Bg");
                p.Div01.set_fittocontents("height");
                p.Div01.move("0","0","100%","488",null,null);
            	}
            );
            obj.set_verticalgap("20");
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
                p.btnCancel.move("200.00","365","100","40",null,null);

                p.btnSave.set_taborder("0");
                p.btnSave.set_text("저장");
                p.btnSave.set_cssclass("btn_WF_Yes");
                p.btnSave.move("457.00","30","100","40",null,null);

                p.btnDelete.set_taborder("2");
                p.btnDelete.set_text("삭제");
                p.btnDelete.set_cssclass("btn_WF_Yes");
                p.btnDelete.move("457.00","30","100","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("20");
            obj.set_spacing("10px 20px 10px 20px");
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
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("20");
            obj.set_spacing("10px 20px 10px 20px");
            this.divBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1420,1550,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("후보공간확인요청 등록");

                p.divTitle.set_taborder("2");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.move("0","70",null,null,"60","60");

                p.divBtn.set_taborder("1");
                p.divBtn.set_text("Div00");
                p.divBtn.set_cssclass("div_WF_CkBg");
                p.divBtn.move("0",null,null,"60","60","0");

                p.RaonkUpload.set_taborder("3");
                p.RaonkUpload.set_DevelopLangage("JAVA");
                p.RaonkUpload.set_ExtensionAllowOrLimit("1");
                p.RaonkUpload.set_HandlerUrl("/common/uploadDownload.do");
                p.RaonkUpload.set_RunTimes("html5");
                p.RaonkUpload.set_ButtonBarView("0");
                p.RaonkUpload.set_visible("false");
                p.RaonkUpload.set_AllowDuplicationFile("1");
                p.RaonkUpload.set_text("");
                p.RaonkUpload.set_DisableDeleteConfirm("1");
                p.RaonkUpload.move("0","720","864","200",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.move("20","10",null,"750","20",null);

                p.divBtn.set_taborder("2");
                p.divBtn.move("20",null,null,"60","20","0");

                p.divTitle.set_visible("false");
                p.divTitle.set_taborder("1");
                p.divTitle.move("0","0",null,"50","0",null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.Div00.form.edt00_01","value","dsGet","bzentyNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.Div00.form.edt00_01_01","value","dsGet","rcptNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.Div01.form.edtVstrTelno","value","dsGet","vstrTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.Div01.form.cbxAplcntSmYn","value","dsGet","aplcntSmYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.Div01.form.calVstHpeYmd","value","dsGet","vstHpeYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.Div01.form.cboLdrNeedYn","value","dsGet","ldrNeedYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.Div01.form.edtVstrNm","value","dsGet","vstrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.Div01.form.rdoSptIdntyCd","value","dsGet","sptIdntyCd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.addIncludeScript("REN005M01.xfdl","xjs::TaskCom.xjs");
        this.registerScript("REN005M01.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	REN005M01.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/10/07
        *  @Desction    후보공간확인요청 상세
        ******************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/10/11			이루온h						최초생성
        *******************************************************************************
        */

        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;  // 업무공통
        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.param;
        this.gAtflSe;
        this.gRow;
        this.gAtflCnt;

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	if (this.opener) {
        		this.divTitle.height = 0;
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
        		this.dsSearch.setColumn(0,"grp1CdId", "REN005M01");
        		this.dsSearch.setColumn(0,"hireLohNo"	,this.param.hireLohNo);
        		this.cfnSearch();

        		//초기포커스 지정
        		//this.divForm.form.Div01.form.rdoSptIdntyCd.setFocus();
        	} else {
        		this.gfnAlertMsg("msg", "REN_004");	//임차희망서번호가 없습니다.
        	}
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        // 조회
        this.cfnSearch = function ()
        {
        	this.selectTransaction();
        };

        // 닫기
        this.cfnClose = function (){};

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        // 상세 조회
        this.selectTransaction = function()
        {
        	var strSvcId    = "select";
        	var strSvcUrl   = "ren/frs/selectCnddSpceIdntyDmnd.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsGet=dsGet dsList=dsList dsFile1=dsFile1";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 데이터 저장
        this.saveTransaction = function()
        {
        	// 저장
        	if (this.getFocus().name == "btnSave") {
        		var strSvcId    = "save";
        		var strSvcUrl   = "ren/frs/updateCnddSpceIdntyDmnd.do";
        		var inData      = "dsGet=dsGet:A dsFile1=dsFile1:U";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";
        		var isAsync   	= false;

        		this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        	// 삭제
        	} else {
        		var strSvcId    = "delete";
        		var strSvcUrl   = "ren/frs/deleteCnddSpceIdntyDmnd.do";
        		var inData      = "dsGet=dsGet:A";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";
        		var isAsync   	= false;

        		this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
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

        		// 상세조회
        		case "select":
        			this.divBtn.form.btnSave.visible = true;		//저장
        			this.divBtn.form.btnDelete.visible = false;		//삭제

        			//22.추천전달 23.현장확인요청
        			if (this.dsGet.getColumn(0,"prgrsSttsCd") == "23") {
        				this.divBtn.form.btnDelete.visible = true;		//삭제
        			}

        			this.divForm_Div01_rdoSptIdntyCd_onitemchanged();

        			// 데이터 조회 후 파일리스트에 셋팅
        			this.gfnDownloadSetting(this.RaonkUpload, this.dsFile1);

        			break;

        		// 저장
        		case "save":
        			// 알림메시지 전송
        			//this.fnSmsSend();

        			this.gfnAlertMsg("alert_msg", this.objApp.getVariable("gvRetMsg"), null, "msgCallback");

        			break;

        		// 삭제
        		case "delete":
        			this.gfnAlertMsg("alert_msg", this.objApp.getVariable("gvRetMsg"), null, "msgCallback");

        			break;

        		// 파일업로드
        		case "uploadComplete":
        			// 파일 업로드가 완료 된 후 첨부파일 과 같이 데이터 저장
        			console.log("this.dsAtchRslt.saveJSON"+this.dsAtchRslt.saveJSON());

        			console.log("this.dsFile1==aa==>"+this.dsFile1.saveJSON());

        			// 파일 업로드 결과를 첨부파일 데이터셋에 설정
        			for (var i = 0; i < this.dsAtchRslt.rowcount; i++) {
        			    // 첨부파일관리번호
        				this.dsFile1.setColumn(this.dsFile1.findRow("colId", this.dsAtchRslt.getColumn(i, "colId")), "atflMngNo", this.dsAtchRslt.getColumn(i, "atflMngNo"));
        			}

        			console.log("this.dsFile1==bb==>"+this.dsFile1.saveJSON());

        			this.saveTransaction();

        			break;
        	}
        };


        // 메시지 콜백 함수
        this.msgCallback = function(sPopupId, sRtn) {

        	var oRtn 		= JSON.parse(sRtn);

        	this.dsGet.setColumn(0, "prgrsSttsCd" ,"23");	// 현장확인요청

        	// 저장
        	if (sPopupId == "save_confirm" || sPopupId == "delete_confirm") {
        		if (oRtn.result == "Y") {

        			var obj = {
        				"atchFileId" : "",			// 기존 첨부파일 있을 경우 입력
        				"bsnsSeCd" : "REN",			// 업무구분코드
        				"prgrmId" : "REN008M01" 	// 프로그램ID (화면 ID)
        			}
        			var str = JSON.stringify(obj);
        			this.RaonkUpload.AddFormData('params', str);

        			this.RaonkUpload.Transfer();
        		}

        	// 개인정보활용동의서 삭제
        	} else if(sPopupId == "file_del1") {
        		this.cfnDsFileDelete(this.dsFile1, oRtn);

        	// 저장/삭제후 얼릿 메시지
        	} else if (sPopupId == "alert_msg") {
        		// 목록화면으로 이동
        		var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        		this.gfnCloseMenu(cMenuId);
        		this._gfnOpenMenu(cMenuId.substring(0,14),"",true);
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
        // 화면로드시 초기값 설정
        this.fnInit = function()
        {
        	this.cfnComCdLoad({dsCboLdrNeedYn:"LDR_NEED_YN_CD:S"});	//인솔자필요여부
        };


        // 저장 버튼 클릭시
        this.divBtn_btnSave_onclick = function(obj,e)
        {
        	this.validateColumn = [];

        	this.validateColumn.push({"title" : "현장확인구분"		, "com": this.divForm.form.Div01.form.rdoSptIdntyCd});
        	this.validateColumn.push({"title" : "방문희망일자"		, "com": this.divForm.form.Div01.form.calVstHpeYmd});
        	this.validateColumn.push({"title" : "인솔자 필요여부"	, "com": this.divForm.form.Div01.form.cboLdrNeedYn});
        	this.validateColumn.push({"title" : "방문자"			, "com": this.divForm.form.Div01.form.edtVstrNm});
        	this.validateColumn.push({"title" : "방문자 휴대폰"		, "com": this.divForm.form.Div01.form.edtVstrTelno});

        	if (this.gfnDsIsUpdated(this.dsGet) == true ||
        		this.gfnDsIsUpdated(this.dsFile1) == true) {

        		if (this.dsGet.getColumn(0, "sptIdntyCd") == "0") {
        			// 현장확인생략 일때
        			this.gfnConfirmMsg("save_confirm", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"]);

        		} else {
        			// 필수입력 여부 체크
        			if(this.gfnDsIsValidated(this.validateColumn)) {

        				// 그리드 필수입력여부 체크(임차업무 담당자 개인정보수집 및 이용동의서)
        				if (this.gfnIsNull(this.dsFile1.getColumn(0,"orgnlFileNm"))) {
        					// {0} 필수첨부 입니다.
        					this.gfnAlertMsg("msg", "REN_026", ["개인정보활용동의서"]);
        					return;
        				};

        				this.gfnConfirmMsg("save_confirm", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        			}
        		}
        	} else {
        		// 변경된 내용이 없습니다.
         		this.gfnAlertMsg("msg", "MSG_004");
         		return;
        	}
        };


        // 삭제 버튼 클릭시
        this.divBtn_btnDelete_onclick = function(obj,e)
        {
        	this.gfnConfirmMsg("delete_confirm", "MSG_005", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        };


        // 취소 버튼 클릭시
        this.divBtn_btnCancel_onclick = function(obj,e)
        {
        	var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        	this.gfnCloseMenu(cMenuId);
        	this._gfnOpenMenu(cMenuId.substring(0,14),"",true);
        };


        // 첨부파일 삭제
        this.cfnDsFileDelete = function(oDsFile, oRtn) {
        	console.log(">>>oDsFile 1<<<"+oDsFile.saveJSON());

        	this.dsFile99.clearData();
        	this.dsFile99.copyData(oDsFile);

        	// 임차희망서 제출에서 첨부한 파일은 삭제 불가
        	if (oDsFile.getColumn(this.gRow,"prgrmId2") != "REN002M01") {
        		this.gfnDeleteFile(this.RaonkUpload, oDsFile, oRtn.paramArg);
        	}

        	oDsFile.clearData();
        	oDsFile.copyData(this.dsFile99);

        	oDsFile.setColumn(this.gRow,"colId","");
        	oDsFile.setColumn(this.gRow,"atflMngNo","");
        	oDsFile.setColumn(this.gRow,"orgnlFileNm","");

        	console.log(">>>oDsFile 2<<<"+oDsFile.saveJSON());
        };


        // 신청자와동일 체크시
        this.divForm_Div01_cbxAplcntSmYn_onclick = function(obj,e)
        {
        	if (this.divForm.form.Div01.form.cbxAplcntSmYn.value == "Y") {
        		this.divForm.form.Div01.form.edtVstrNm.value = this.objApp.gdsUser.getColumn(0,"userNm");
        		this.divForm.form.Div01.form.edtVstrTelno.value  = this.objApp.gdsUser.getColumn(0, "userMblTelno");
        	}
        };


        // 현장확인 선택시
        this.divForm_Div01_rdoSptIdntyCd_onitemchanged = function(obj,e)
        {
        	if (this.dsGet.getColumn(0,"sptIdntyCd") == "0") {
        		this.dsGet.setColumn(0,"vstHpeYmd"	,"");			// 방문희망일자
        		this.dsGet.setColumn(0,"vstrNm"		,"");			// 방문자명
        		this.dsGet.setColumn(0,"vstrTelno"	,"");			// 방문자전화번호
        		this.dsGet.setColumn(0,"vstrEmlAddr","");			// 방문자이메일주소
        		this.dsGet.setColumn(0,"aplcntSmYn"	,"");			// 신청자와동일여부
        		this.dsGet.setColumn(0,"ldrNeedYn"	,"");			// 인솔자필요여부

        		this.divForm.form.Div01.form.calVstHpeYmd.readonly 	= true;
        		this.divForm.form.Div01.form.cboLdrNeedYn.readonly 	= true;
        		this.divForm.form.Div01.form.edtVstrNm.readonly 	= true;
        		this.divForm.form.Div01.form.edtVstrTelno.readonly 	= true;
        		this.divForm.form.Div01.form.cbxAplcntSmYn.readonly = true;
        	} else {
        		this.divForm.form.Div01.form.calVstHpeYmd.readonly 	= false;
        		this.divForm.form.Div01.form.cboLdrNeedYn.readonly 	= false;
        		this.divForm.form.Div01.form.edtVstrNm.readonly 	= false;
        		this.divForm.form.Div01.form.edtVstrTelno.readonly 	= false;
        		this.divForm.form.Div01.form.cbxAplcntSmYn.readonly = false;
        	}
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
        	var contentId = "REN130_01";	// 신규 현장확인요청 등록

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


        /*******************************************************************************************************************************
         * 각 RAONK 별 EVENT 영역
        *******************************************************************************************************************************/
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
        		this.dsFile1.setColumn(nIdx, "atflCd", this.dsFile1.getColumn(nIdx,"cdId"));
        		console.log(">>>this.dsFile1<<<"+this.dsFile1.saveJSON());
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

        	} else if (e.col == 1) {
        		this.gAtflSe = "dsFile1";
        		this.gRow = this.dsFile1.rowposition;
        		this.gAtflCnt = 0;

        		// 파일추가 또는 삭제여부
        		if (this.gfnIsNull(this.dsFile1.getColumn(this.gRow,"orgnlFileNm"))) {
        			this.gvUploadCategory = this.dsFile1.getColumn(this.dsFile1.rowposition,"cdId");		// 컬럼ID
        			this.RaonkUpload.OpenFileDialog();
        		} else {
        			var param = {
        				"row" : e.row,
        				"col" : e.col
        			};

        			// {0} 첨부파일 삭제하시겠습니까?
        			var sCdNm = this.dsFile1.getColumn(this.dsFile1.rowposition,"cdNm")
        			this.gfnConfirmMsg("file_del1", "REN_021", "msgCallback", ["확인", "취소"], ["Y", "N"], param,[ "" ]);
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.Div01.form.rdoSptIdntyCd.addEventHandler("onitemchanged",this.divForm_Div01_rdoSptIdntyCd_onitemchanged,this);
            this.divForm.form.Div01.form.staVstrNm.addEventHandler("onclick",this.divForm_staLabel05_01_onclick,this);
            this.divForm.form.Div01.form.staVstrTelno.addEventHandler("onclick",this.divForm_staLabel05_01_onclick,this);
            this.divForm.form.Div01.form.cbxAplcntSmYn.addEventHandler("onclick",this.divForm_Div01_cbxAplcntSmYn_onclick,this);
            this.divForm.form.Div01.form.grdFile1.addEventHandler("oncellclick",this.divForm_Div03_grdFile1_oncellclick,this);
            this.divBtn.form.btnCancel.addEventHandler("onclick",this.divBtn_btnCancel_onclick,this);
            this.divBtn.form.btnSave.addEventHandler("onclick",this.divBtn_btnSave_onclick,this);
            this.divBtn.form.btnDelete.addEventHandler("onclick",this.divBtn_btnDelete_onclick,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddFile",this.RaonkUpload_RAONKUPLOAD_AfterAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_CreationComplete",this.RaonkUpload_RAONKUPLOAD_CreationComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_UploadComplete",this.RaonkUpload_RAONKUPLOAD_UploadComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_OnError",this.RaonkUpload_RAONKUPLOAD_OnError,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeAddFile",this.RaonkUpload_RAONKUPLOAD_BeforeAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddAllFile",this.RaonkUpload_RAONKUPLOAD_AfterAddAllFile,this);
            this.dsFile99.addEventHandler("onload",this.dsAtfl_onload,this);
        };
        this.loadIncludeScript("REN005M01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
