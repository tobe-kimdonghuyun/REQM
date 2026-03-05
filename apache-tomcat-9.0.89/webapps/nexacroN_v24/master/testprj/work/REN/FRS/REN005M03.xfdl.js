(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("REN005M03");
            this.set_titletext("후보공간확인요청 상세조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1420,1550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCboSptIdntyCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"hh\" type=\"STRING\" size=\"256\"/><Column id=\"mm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"hh\">선택</Col><Col id=\"code\">0</Col><Col id=\"mm\">선택</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"hh\">01</Col><Col id=\"mm\">5</Col></Row><Row><Col id=\"hh\">02</Col><Col id=\"code\">2</Col><Col id=\"mm\">10</Col></Row><Row><Col id=\"hh\">03</Col><Col id=\"code\">3</Col><Col id=\"mm\">15</Col></Row><Row><Col id=\"hh\">04</Col><Col id=\"code\">4</Col><Col id=\"mm\">20</Col></Row><Row><Col id=\"hh\">05</Col><Col id=\"code\">5</Col><Col id=\"mm\">25</Col></Row><Row><Col id=\"hh\">06</Col><Col id=\"code\">6</Col><Col id=\"mm\">30</Col></Row><Row><Col id=\"hh\">07</Col><Col id=\"code\">7</Col><Col id=\"mm\">35</Col></Row><Row><Col id=\"hh\">08</Col><Col id=\"code\">8</Col><Col id=\"mm\">40</Col></Row><Row><Col id=\"hh\">09</Col><Col id=\"code\">9</Col><Col id=\"mm\">45</Col></Row><Row><Col id=\"hh\">10</Col><Col id=\"code\">10</Col><Col id=\"mm\">50</Col></Row><Row><Col id=\"hh\">11</Col><Col id=\"code\">11</Col><Col id=\"mm\">60</Col></Row><Row><Col id=\"hh\">12</Col><Col id=\"code\">12</Col></Row><Row><Col id=\"hh\">13</Col><Col id=\"code\">13</Col></Row><Row><Col id=\"hh\">14</Col><Col id=\"code\">14</Col></Row><Row><Col id=\"code\">15</Col><Col id=\"hh\">15</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboLdrNeedYn", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInsideMail", this);
            obj._setContents("<ColumnInfo><Column id=\"fromEmpId\" type=\"STRING\" size=\"256\"/><Column id=\"toEmpId\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"contentId\" type=\"STRING\" size=\"256\"/><Column id=\"contentParam1\" type=\"STRING\" size=\"256\"/><Column id=\"contentParam2\" type=\"STRING\" size=\"256\"/><Column id=\"contentParam3\" type=\"STRING\" size=\"256\"/><Column id=\"contentParam4\" type=\"STRING\" size=\"256\"/><Column id=\"contentParam5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"fromEmpId\">81014uuu</Col><Col id=\"toEmpId\">81014uuu</Col><Col id=\"title\">test</Col><Col id=\"contentParam1\">test</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"hireLohNo\" type=\"STRING\" size=\"256\"/><Column id=\"pstnNm\" type=\"STRING\" size=\"256\"/><Column id=\"bldgNm\" type=\"STRING\" size=\"256\"/><Column id=\"rmnmNo\" type=\"STRING\" size=\"256\"/><Column id=\"rntar\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGet", this);
            obj._setContents("<ColumnInfo><Column id=\"hireLohNo\" type=\"STRING\" size=\"256\"/><Column id=\"rcptNo\" type=\"STRING\" size=\"256\"/><Column id=\"prgrsSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyClsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"sptIdntyCd\" type=\"STRING\" size=\"256\"/><Column id=\"vstHpeYmd\" type=\"STRING\" size=\"256\"/><Column id=\"vstrNm\" type=\"STRING\" size=\"256\"/><Column id=\"vstrTelno\" type=\"STRING\" size=\"256\"/><Column id=\"vstrEmlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"ldrNeedYn\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntSmYn\" type=\"STRING\" size=\"256\"/><Column id=\"prvcClctAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"prvc_clct_agre_atfl_mng_no\" type=\"STRING\" size=\"256\"/><Column id=\"sptIdntyYmd\" type=\"STRING\" size=\"256\"/><Column id=\"sptIdntyNm\" type=\"STRING\" size=\"256\"/><Column id=\"sptIdntyPicId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntGdMttr\" type=\"STRING\" size=\"256\"/><Column id=\"schdlChgRsn\" type=\"STRING\" size=\"256\"/><Column id=\"ldrNeedYnNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"hireLohNo\" type=\"STRING\" size=\"256\"/><Column id=\"grp1CdId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"hireLohNo\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj.set_useclientlayout("true");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"grp1CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp1CdNm\" type=\"STRING\" size=\"256\"/><Column id=\"grp2CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp2CdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"hireLoiNo\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId\" type=\"STRING\" size=\"256\"/><Column id=\"atflCd\" type=\"STRING\" size=\"256\"/><Column id=\"natchRsn\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bsnsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId2\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtn\" type=\"STRING\" size=\"256\"/><Column id=\"strgFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTerm\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"grp1CdId\">Iaad010101 [PDF, 328KB]</Col><Col id=\"grp2CdId\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtchRslt", this);
            obj._setContents("<ColumnInfo><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"panBzentyNm\"/><PanelItem id=\"PanelItem01\" componentid=\"panRcptNo\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staBzentyNm","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtBzentyNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("panBzentyNm","20.00","50","360","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staBzentyNm\"/><PanelItem id=\"PanelItem01\" componentid=\"edtBzentyNm\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("panSpceList","0","97","100.00%","180",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("4");
            obj.set_horizontalgap("0");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 0px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grdSpceList\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("panRcptNo","417","62","360","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staRcptNo\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRcptNo\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staRcptNo","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("6");
            obj.set_text("접수번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtRcptNo","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Grid("grdSpceList","40.00","107","100%","180",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("8");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"위치\"/><Cell col=\"1\" text=\"건물명\"/><Cell col=\"2\" text=\"호실번호\"/><Cell col=\"3\" text=\"면적(m2)\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:pstnNm\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" cssclass=\"CellReadonly\"/><Cell col=\"1\" text=\"bind:bldgNm\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" cssclass=\"CellReadonly\"/><Cell col=\"2\" text=\"bind:rmnmNo\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" cssclass=\"CellReadonly\"/><Cell col=\"3\" text=\"bind:rntar\" displaytype=\"normal\" edittype=\"none\" textAlign=\"right\" cssclass=\"CellReadonly CellEnd\"/></Band></Format></Formats>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","0","0","100.00%","376",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staHpeYmd","0","0","86","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("입주희망일자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("mskHpeYmd","0","46","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_format("####-##-##");
            obj.set_maskchar(" ");
            obj.set_type("string");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("panHpeYmd","20.00","0","255","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staHpeYmd\"/><PanelItem id=\"PanelItem03\" componentid=\"mskHpeYmd\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLdrNeedYn","10","10","90%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("3");
            obj.set_text("인솔자 필요여부");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtLdrNeedYn","10","56","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("4");
            obj.set_value("");
            obj.getSetter("index").set("-1");
            obj.getSetter("innerdataset").set("dsCboLdrNeedYn");
            obj.getSetter("datacolumn").set("cdNm");
            obj.getSetter("codecolumn").set("cdId");
            obj.set_readonly("true");
            obj.set_text("선택하기");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("panLdrNeedYn","410.00","0","255","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLdrNeedYn\"/><PanelItem id=\"PanelItem02\" componentid=\"edtLdrNeedYn\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staVstrNm","1028","0","92","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("6");
            obj.set_text("방문자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtVstrNm","0","46","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_displaynulltext("성명");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("panVstrNm","20.00","86","255","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staVstrNm\"/><PanelItem id=\"PanelItem01\" componentid=\"edtVstrNm\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("panSptIdntyCd","410.00","0","255","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSptIdntyCd\"/><PanelItem id=\"PanelItem02\" componentid=\"edtSptIdntyCd\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","0","100%","97",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("9");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("start");
            obj.set_spacing("0px 0px 10px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem07\" componentid=\"panSptIdntyCd\"/><PanelItem id=\"PanelItem02\" componentid=\"panHpeYmd\"/><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem03\" componentid=\"panLdrNeedYn\"/><PanelItem id=\"PanelItem04\" componentid=\"panVstrNm\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00","828","123","765","1",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("22");
            obj.set_flexgrow("3");
            obj._setContents("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staSptIdntyCd","10","10","90%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("10");
            obj.set_text("확인구분");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtSptIdntyCd","10","56","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("11");
            obj.set_value("");
            obj.getSetter("index").set("-1");
            obj.getSetter("innerdataset").set("dsCboLdrNeedYn");
            obj.getSetter("datacolumn").set("cdNm");
            obj.getSetter("codecolumn").set("cdId");
            obj.set_readonly("true");
            obj.set_text("선택하기");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staVstrTelno00","0","0","150","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("13");
            obj.set_text("방문자 휴대폰");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtVstrTelno00","0","0","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            obj.set_displaynulltext("휴대폰번호 입력");
            obj.getSetter("format").set("###-####-{####}");
            obj.getSetter("type").set("string");
            obj.set_value("01012341234");
            obj.getSetter("maskchar").set(" ");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_02_00","10","56","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("15");
            obj.set_verticalgap("0");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("2");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"edtVstrTelno00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("panVstrTelno00","20.00","97","255","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_flexgrow("3");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staVstrTelno00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_02_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","0","0","100%","97",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("17");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("start");
            obj.set_spacing("0px 0px 10px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"panVstrTelno00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Grid("grdFile1","130","230","100.00%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("23");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"0\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell cssclass=\"expr:!colId ? &quot;&quot; : &quot;CellFile&quot;\" text=\"bind:orgnlFileNm\"/><Cell col=\"1\" cssclass=\"expr:!colId ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"expr:!colId ? &quot;파일찾기&quot; : &quot;삭제&quot;\"/></Band></Format></Formats>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00_00","0","0","380","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("18");
            obj.set_text("개인정보활용동의서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00_00_00","0.00","0","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("19");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("6");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("panFile00_00_00","20","258","100%","161",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("20");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"grdFile1\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00","0","0","97.06%","172",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("21");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("start");
            obj.set_spacing("0px 0px 10px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem01\" componentid=\"panFile00_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Div("divBtn","0",null,null,"60","60","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_CkBg");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","200.00","365","100","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_No");
            this.divBtn.addChild(obj.name, obj);

            obj = new RaonkUpload("RaonkUpload","500","520","864","200",null,null,null,null,null,null,this);
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

                p.staBzentyNm.set_taborder("1");
                p.staBzentyNm.set_text("업체명");
                p.staBzentyNm.set_cssclass("sta_WF_Label");
                p.staBzentyNm.move("10","98","100%","46",null,null);

                p.edtBzentyNm.set_taborder("2");
                p.edtBzentyNm.set_readonly("true");
                p.edtBzentyNm.move("10.00","158","100%","40",null,null);

                p.panBzentyNm.set_taborder("3");
                p.panBzentyNm.set_type("vertical");
                p.panBzentyNm.set_flexgrow("1");
                p.panBzentyNm.move("20.00","50","360","86",null,null);

                p.panSpceList.set_taborder("4");
                p.panSpceList.set_horizontalgap("0");
                p.panSpceList.set_flexcrossaxiswrapalign("start");
                p.panSpceList.set_flexwrap("wrap");
                p.panSpceList.set_verticalgap("0");
                p.panSpceList.set_spacing("10px 20px 0px 20px");
                p.panSpceList.set_cssclass("pal_WF_DtlBg");
                p.panSpceList.set_flexshrink("1");
                p.panSpceList.set_fittocontents("height");
                p.panSpceList.move("0","97","100.00%","180",null,null);

                p.panRcptNo.set_taborder("5");
                p.panRcptNo.set_type("vertical");
                p.panRcptNo.set_flexgrow("1");
                p.panRcptNo.move("417","62","360","86",null,null);

                p.staRcptNo.set_taborder("6");
                p.staRcptNo.set_text("접수번호");
                p.staRcptNo.set_cssclass("sta_WF_Label");
                p.staRcptNo.move("10","98","100%","46",null,null);

                p.edtRcptNo.set_taborder("7");
                p.edtRcptNo.set_readonly("true");
                p.edtRcptNo.move("10.00","158","100%","40",null,null);

                p.grdSpceList.set_taborder("8");
                p.grdSpceList.set_binddataset("dsList");
                p.grdSpceList.set_autofittype("col");
                p.grdSpceList.move("40.00","107","100%","180",null,null);
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

                p.panSpceList.set_spacing("0px 10px 10px 10px");
                p.panSpceList.set_type("horizontal");
                p.panSpceList.move("0","60","100.00%","231",null,null);
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
                p.staHpeYmd.set_taborder("0");
                p.staHpeYmd.set_text("입주희망일자");
                p.staHpeYmd.set_cssclass("sta_WF_Label");
                p.staHpeYmd.move("0","0","86","46",null,null);

                p.mskHpeYmd.set_taborder("1");
                p.mskHpeYmd.set_readonly("true");
                p.mskHpeYmd.set_format("####-##-##");
                p.mskHpeYmd.set_maskchar(" ");
                p.mskHpeYmd.set_type("string");
                p.mskHpeYmd.move("0","46","100%","40",null,null);

                p.panHpeYmd.set_taborder("2");
                p.panHpeYmd.set_type("vertical");
                p.panHpeYmd.set_flexgrow("1");
                p.panHpeYmd.move("20.00","0","255","86",null,null);

                p.staLdrNeedYn.set_taborder("3");
                p.staLdrNeedYn.set_text("인솔자 필요여부");
                p.staLdrNeedYn.set_cssclass("sta_WF_Label");
                p.staLdrNeedYn.move("10","10","90%","46",null,null);

                p.edtLdrNeedYn.set_taborder("4");
                p.edtLdrNeedYn.set_value("");
                p.edtLdrNeedYn.getSetter("index").set("-1");
                p.edtLdrNeedYn.getSetter("innerdataset").set("dsCboLdrNeedYn");
                p.edtLdrNeedYn.getSetter("datacolumn").set("cdNm");
                p.edtLdrNeedYn.getSetter("codecolumn").set("cdId");
                p.edtLdrNeedYn.set_readonly("true");
                p.edtLdrNeedYn.move("10","56","100%","40",null,null);

                p.panLdrNeedYn.set_taborder("5");
                p.panLdrNeedYn.set_type("vertical");
                p.panLdrNeedYn.set_flexgrow("1");
                p.panLdrNeedYn.move("410.00","0","255","86",null,null);

                p.staVstrNm.set_taborder("6");
                p.staVstrNm.set_text("방문자");
                p.staVstrNm.set_cssclass("sta_WF_Label");
                p.staVstrNm.move("1028","0","92","46",null,null);

                p.edtVstrNm.set_taborder("7");
                p.edtVstrNm.set_readonly("true");
                p.edtVstrNm.set_displaynulltext("성명");
                p.edtVstrNm.move("0","46","100%","40",null,null);

                p.panVstrNm.set_taborder("8");
                p.panVstrNm.set_type("vertical");
                p.panVstrNm.set_flexgrow("1");
                p.panVstrNm.move("20.00","86","255","86",null,null);

                p.panSptIdntyCd.set_taborder("12");
                p.panSptIdntyCd.set_type("vertical");
                p.panSptIdntyCd.set_flexgrow("1");
                p.panSptIdntyCd.move("410.00","0","255","86",null,null);

                p.Panel01.set_taborder("9");
                p.Panel01.set_horizontalgap("20");
                p.Panel01.set_flexcrossaxiswrapalign("start");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_cssclass("pal_WF_DtlBg");
                p.Panel01.set_type("horizontal");
                p.Panel01.set_flexcrossaxisalign("start");
                p.Panel01.set_flexmainaxisalign("start");
                p.Panel01.set_spacing("0px 0px 10px 0px");
                p.Panel01.move("0","0","100%","97",null,null);

                p.Panel00.set_taborder("22");
                p.Panel00.set_flexgrow("3");
                p.Panel00.move("828","123","765","1",null,null);

                p.staSptIdntyCd.set_taborder("10");
                p.staSptIdntyCd.set_text("확인구분");
                p.staSptIdntyCd.set_cssclass("sta_WF_Label");
                p.staSptIdntyCd.move("10","10","90%","46",null,null);

                p.edtSptIdntyCd.set_taborder("11");
                p.edtSptIdntyCd.set_value("");
                p.edtSptIdntyCd.getSetter("index").set("-1");
                p.edtSptIdntyCd.getSetter("innerdataset").set("dsCboLdrNeedYn");
                p.edtSptIdntyCd.getSetter("datacolumn").set("cdNm");
                p.edtSptIdntyCd.getSetter("codecolumn").set("cdId");
                p.edtSptIdntyCd.set_readonly("true");
                p.edtSptIdntyCd.move("10","56","100%","40",null,null);

                p.staVstrTelno00.set_taborder("13");
                p.staVstrTelno00.set_text("방문자 휴대폰");
                p.staVstrTelno00.set_cssclass("sta_WF_Label");
                p.staVstrTelno00.move("0","0","150","46",null,null);

                p.edtVstrTelno00.set_taborder("14");
                p.edtVstrTelno00.set_readonly("true");
                p.edtVstrTelno00.set_displaynulltext("휴대폰번호 입력");
                p.edtVstrTelno00.getSetter("format").set("###-####-{####}");
                p.edtVstrTelno00.getSetter("type").set("string");
                p.edtVstrTelno00.set_value("01012341234");
                p.edtVstrTelno00.getSetter("maskchar").set(" ");
                p.edtVstrTelno00.move("0","0","100%","40",null,null);

                p.Panel00_02_00.set_taborder("15");
                p.Panel00_02_00.set_verticalgap("0");
                p.Panel00_02_00.set_horizontalgap("10");
                p.Panel00_02_00.set_flexgrow("2");
                p.Panel00_02_00.move("10","56","100%","40",null,null);

                p.panVstrTelno00.set_taborder("16");
                p.panVstrTelno00.set_type("vertical");
                p.panVstrTelno00.set_flexgrow("3");
                p.panVstrTelno00.move("20.00","97","255","86",null,null);

                p.Panel01_00.set_taborder("17");
                p.Panel01_00.set_horizontalgap("20");
                p.Panel01_00.set_flexcrossaxiswrapalign("start");
                p.Panel01_00.set_flexwrap("wrap");
                p.Panel01_00.set_fittocontents("height");
                p.Panel01_00.set_cssclass("pal_WF_DtlBg");
                p.Panel01_00.set_type("horizontal");
                p.Panel01_00.set_flexcrossaxisalign("start");
                p.Panel01_00.set_flexmainaxisalign("start");
                p.Panel01_00.set_spacing("0px 0px 10px 0px");
                p.Panel01_00.move("0","0","100%","97",null,null);

                p.grdFile1.set_taborder("23");
                p.grdFile1.set_binddataset("dsFile1");
                p.grdFile1.set_autofittype("col");
                p.grdFile1.set_cssclass("grd_WF_FileAdd");
                p.grdFile1.set_readonly("true");
                p.grdFile1.move("130","230","100.00%","40",null,null);

                p.staLabel00_02_00_00_00.set_taborder("18");
                p.staLabel00_02_00_00_00.set_text("개인정보활용동의서");
                p.staLabel00_02_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_00_00_00.set_flexgrow("1");
                p.staLabel00_02_00_00_00.move("0","0","380","46",null,null);

                p.panTitle00_00_00_00.set_taborder("19");
                p.panTitle00_00_00_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00_00_00.set_flexwrap("wrap");
                p.panTitle00_00_00_00.set_fittocontents("height");
                p.panTitle00_00_00_00.set_verticalgap("6");
                p.panTitle00_00_00_00.move("0.00","0","100%","46",null,null);

                p.panFile00_00_00.set_taborder("20");
                p.panFile00_00_00.set_fittocontents("height");
                p.panFile00_00_00.set_flexwrap("wrap");
                p.panFile00_00_00.set_cssclass("pal_WF_DtlBg");
                p.panFile00_00_00.set_verticalgap("4");
                p.panFile00_00_00.move("20","258","100%","161",null,null);

                p.Panel01_00_00.set_taborder("21");
                p.Panel01_00_00.set_horizontalgap("20");
                p.Panel01_00_00.set_flexcrossaxiswrapalign("start");
                p.Panel01_00_00.set_flexwrap("wrap");
                p.Panel01_00_00.set_fittocontents("height");
                p.Panel01_00_00.set_cssclass("pal_WF_DtlBg");
                p.Panel01_00_00.set_type("horizontal");
                p.Panel01_00_00.set_flexcrossaxisalign("start");
                p.Panel01_00_00.set_flexmainaxisalign("start");
                p.Panel01_00_00.set_spacing("0px 0px 10px 0px");
                p.Panel01_00_00.move("0","0","97.06%","172",null,null);
            	}
            );
            obj.set_type("vertical");
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
            obj.set_type("vertical");
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
                p.Div01.move("0","0","100.00%","376",null,null);
            	}
            );
            obj.set_verticalgap("30");
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
                p.btnCancel.set_taborder("0");
                p.btnCancel.set_text("취소");
                p.btnCancel.set_cssclass("btn_WF_No");
                p.btnCancel.move("200.00","365","100","40",null,null);
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
                p.set_titletext("후보공간확인요청 상세조회");

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
                p.RaonkUpload.move("500","520","864","200",null,null);
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
                p.divForm.move("20","divTitle:20",null,null,"20","60");

                p.divBtn.move("20",null,null,"60","20","0");

                p.divTitle.set_visible("false");
                p.divTitle.move("0","0",null,"50","0",null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.Div00.form.edtBzentyNm","value","dsGet","bzentyNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.Div00.form.edtRcptNo","value","dsGet","rcptNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.Div01.form.mskHpeYmd","value","dsGet","vstHpeYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.Div01.form.edtLdrNeedYn","value","dsGet","ldrNeedYnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.Div01.form.edtVstrNm","value","dsGet","vstrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.Div01.form.edtSptIdntyCd","value","dsGet","sptIdntyNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.addIncludeScript("REN005M03.xfdl","xjs::TaskCom.xjs");
        this.registerScript("REN005M03.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	REN005M01.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/10/07
        *  @Desction    후보공간확인요청 상세
        ******************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/10/11			이루온						최초생성
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
        		this.dsSearch.setColumn(0,"grp1CdId"	,"REN005M03");
        		this.dsSearch.setColumn(0,"hireLohNo"	,this.param.hireLohNo);
        		this.cfnSearch();

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
        	this.cfnComCdLoad({dsCboLdrNeedYn:"LDR_NEED_YN_CD:S"});	//인솔자필요여부
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        // 조회
        this.cfnSearch = function ()
        {
        	this.getSelectTransaction();
        };

        // 닫기
        this.cfnClose = function (){};

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        // 상세 조회
        this.getSelectTransaction = function()
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

        		//상세조회
        		case "select":
        			// 데이터 조회 후 파일리스트에 셋팅
        			this.gfnDownloadSetting(this.RaonkUpload, this.dsFile1);

        			break;
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.Div01.form.staVstrNm.addEventHandler("onclick",this.divForm_staLabel05_01_onclick,this);
            this.divForm.form.Div01.form.staVstrTelno00.addEventHandler("onclick",this.divForm_staLabel05_01_onclick,this);
            this.divForm.form.Div01.form.edtVstrTelno00.addEventHandler("onchanged",this.edt00_00_00_00_00_onchanged,this);
            this.divForm.form.Div01.form.grdFile1.addEventHandler("oncellclick",this.divForm_Div03_grdFile1_oncellclick,this);
            this.divBtn.form.btnCancel.addEventHandler("onclick",this.divBtn_btnCancel_onclick,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddFile",this.RaonkUpload_RAONKUPLOAD_AfterAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_CreationComplete",this.RaonkUpload_RAONKUPLOAD_CreationComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_UploadComplete",this.RaonkUpload_RAONKUPLOAD_UploadComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_OnError",this.RaonkUpload_RAONKUPLOAD_OnError,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeAddFile",this.RaonkUpload_RAONKUPLOAD_BeforeAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddAllFile",this.RaonkUpload_RAONKUPLOAD_AfterAddAllFile,this);
        };
        this.loadIncludeScript("REN005M03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
