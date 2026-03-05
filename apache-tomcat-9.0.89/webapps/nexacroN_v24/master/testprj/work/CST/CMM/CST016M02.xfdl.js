(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST016M00");
            this.set_titletext("작업개요(전산실작업)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cbo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"hh\" type=\"STRING\" size=\"256\"/><Column id=\"mm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"hh\">선택</Col><Col id=\"code\">0</Col><Col id=\"mm\">선택</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"hh\">01</Col><Col id=\"mm\">5</Col></Row><Row><Col id=\"hh\">02</Col><Col id=\"code\">2</Col><Col id=\"mm\">10</Col></Row><Row><Col id=\"hh\">03</Col><Col id=\"code\">3</Col><Col id=\"mm\">15</Col></Row><Row><Col id=\"hh\">04</Col><Col id=\"code\">4</Col><Col id=\"mm\">20</Col></Row><Row><Col id=\"hh\">05</Col><Col id=\"code\">5</Col><Col id=\"mm\">25</Col></Row><Row><Col id=\"hh\">06</Col><Col id=\"code\">6</Col><Col id=\"mm\">30</Col></Row><Row><Col id=\"hh\">07</Col><Col id=\"code\">7</Col><Col id=\"mm\">35</Col></Row><Row><Col id=\"hh\">08</Col><Col id=\"code\">8</Col><Col id=\"mm\">40</Col></Row><Row><Col id=\"hh\">09</Col><Col id=\"code\">9</Col><Col id=\"mm\">45</Col></Row><Row><Col id=\"hh\">10</Col><Col id=\"code\">10</Col><Col id=\"mm\">50</Col></Row><Row><Col id=\"hh\">11</Col><Col id=\"code\">11</Col><Col id=\"mm\">60</Col></Row><Row><Col id=\"hh\">12</Col><Col id=\"code\">12</Col></Row><Row><Col id=\"hh\">13</Col><Col id=\"code\">13</Col></Row><Row><Col id=\"hh\">14</Col><Col id=\"code\">14</Col></Row><Row><Col id=\"code\">15</Col><Col id=\"hh\">15</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"fullName\">Iaad010101 [PDF, 328KB]</Col><Col id=\"fileSz\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Panel("Panel12","0","0","100.00%","1871",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel09\"/><PanelItem id=\"PanelItem01\" componentid=\"div00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle","0","0","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("작업개요");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","112.00","6","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","156.00","6","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel06","819","0","200","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button01\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel09","1183","0","100.00%","70",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel06\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("div00","104","180","100.00%","1801",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("div00");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","194","162","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("전산실 작업명");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtCmproJobNm","194","210","100%","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","194","162","300","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtCmproJobNm\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00_00","194","210","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("작업근거");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtJobBssCn","824","162","100%","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan06_00_00","194","162","300","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtJobBssCn\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan00_00","174","162","100.00%","97",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"pan06_00_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00","990","458","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("작업내용 요약");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtJobSmryCn","990","504","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00","990","458","300","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtJobSmryCn\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01","990","504","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_text("대상시스템");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtTrgtSysCn","1620","458","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00","990","458","300","96",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_flexgrow("1");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtTrgtSysCn\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan02","970","458","100.00%","107",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan04_00","1289","244","100.00%","171",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("29");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static03","430","448","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("26");
            obj.set_text("작업감독자 입회여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Radio("rdoJobApvsrEtrntYn","430","448","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("27");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("horizontal");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var div00_form_rdoJobApvsrEtrntYn_innerdataset = new nexacro.NormalDataset("div00_form_rdoJobApvsrEtrntYn_innerdataset", obj);
            div00_form_rdoJobApvsrEtrntYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">입회</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">불필요</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_rdoJobApvsrEtrntYn_innerdataset);
            obj.set_text("입회");
            obj.set_value("0");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel02","430","402","300","150",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("28");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static03\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoJobApvsrEtrntYn\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02","430","402","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            obj.set_text("작업장위치");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("chkCPRBLD102","246.00","0","167","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("17");
            obj.set_text("전산실 3층(301호)");
            obj.set_fittocontents("width");
            obj.set_value("false");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("chkCPRBLD101","80.00","0","166","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("16");
            obj.set_text("전산실 2층(201호)");
            obj.set_fittocontents("width");
            obj.set_value("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static04","0","0","80","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            obj.set_text("[ICT센터]");
            obj.set_flexshrink("1");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel03","430","448","100%","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("18");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static04\"/><PanelItem id=\"PanelItem01\" componentid=\"chkCPRBLD101\"/><PanelItem id=\"PanelItem02\" componentid=\"chkCPRBLD102\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("chkCPRBLD201","676","448","216","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("20");
            obj.set_text("전산실 2층(221호, 222호)");
            obj.set_fittocontents("width");
            obj.set_value("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static05","510","448","80","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("19");
            obj.set_text("[AICC]");
            obj.set_flexshrink("1");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel04","430","448","100%","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("21");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static05\"/><PanelItem id=\"PanelItem01\" componentid=\"chkCPRBLD201\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("chkCPRBLD301","430","486","217","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("23");
            obj.set_text("전산실 미출입(원격접속 등)");
            obj.set_value("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static06","676","448","80","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("22");
            obj.set_text("[기타]");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel05","510","448","100%","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("24");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static06\"/><PanelItem id=\"PanelItem01\" componentid=\"chkCPRBLD301\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel01","430","402","300","160",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("25");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel03\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel04\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel05\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01","0","0","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("30");
            obj.set_text("작업목적");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Radio("rdoJobPrpsNm","0","41","100%","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("31");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_fittocontents("none");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var div00_form_rdoJobPrpsNm_innerdataset = new nexacro.NormalDataset("div00_form_rdoJobPrpsNm_innerdataset", obj);
            div00_form_rdoJobPrpsNm_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">신규입주(구축)</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">유지보수</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">시설물공사</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">시스템점검</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">기타</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_rdoJobPrpsNm_innerdataset);
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan_04_00_00","20.00","0","100%","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("32");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoJobPrpsNm\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan06","1289","415","100.00%","97",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("33");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan06_00","1289","494","100.00%","97",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("37");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00_00_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01_00","370","692","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("34");
            obj.set_text("작업목적 기타내용");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtJobPrpsEtcCn","370","738","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("35");
            obj.set_readonly("false");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan_04_00_00_00","370","692","96.88%","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("36");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtJobPrpsEtcCn\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan06_00_01","0","569","100.00%","170",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("42");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00_00_00_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01_00_00","394","694","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("38");
            obj.set_text("일상점검 여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Radio("rdoDladtYn","394","736","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("39");
            obj.set_direction("horizontal");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_fittocontents("none");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var div00_form_rdoDladtYn_innerdataset = new nexacro.NormalDataset("div00_form_rdoDladtYn_innerdataset", obj);
            div00_form_rdoDladtYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">해당</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">해당없음</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_rdoDladtYn_innerdataset);
            obj.set_text("해당");
            obj.set_value("0");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static07","394","762","100%","73",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("40");
            obj.set_text("일상점검 : 매일 및 수시로 시행하는 시스템.하드웨어 점검(점검 체크리스트를 통한 공사 및 자회사 자체 점검\r\n※ 정기점검 또는 일상점검이지만 구체적인 작업내용을 기술해야하는 경우(분기점검, 외부업체 점검 등) ‘해당없음＇ 선택 및 작업내용을 작성하시기 바랍니다.");
            obj.set_cssclass("sta_WF_Des004");
            obj.set_fittocontents("height");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan_04_00_00_00_00","394","694","100%","159",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("41");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoDladtYn\"/><PanelItem id=\"PanelItem02\" componentid=\"Static07\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan06_00_01_00","1289","720","100.00%","179",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("63");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"pan_04_00_00_00_00_00_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01_00_00_00_00","384","890","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("53");
            obj.set_text("작업종료일");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Calendar("calJobEndDt","538","890","145","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("54");
            obj.set_dateformat("yyyy-MM-dd ");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("edtJobEndDt","684","890","135","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("55");
            obj.set_format("##:##");
            obj.set_maskchar(" ");
            obj.set_type("string");
            obj.set_limitbymask("integer");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel07_00","384","890","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("59");
            obj.set_verticalgap("4");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"calJobEndDt\"/><PanelItem id=\"PanelItem01\" componentid=\"edtJobEndDt\"/><PanelItem id=\"PanelItem02\" componentid=\"cmbJobEndDt1\"/><PanelItem id=\"PanelItem03\" componentid=\"cmbJobEndDt2\"/><PanelItem id=\"PanelItem04\" componentid=\"chkJobEndDt\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("chkJobEndDt","384","934","133","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("58");
            obj.set_text("시간 직접입력");
            obj.set_fittocontents("width");
            obj.set_value("false");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmbJobEndDt2","384","934","80","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("57");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmbJobEndDt2_innerdataset = new nexacro.NormalDataset("div00_form_cmbJobEndDt2_innerdataset", obj);
            div00_form_cmbJobEndDt2_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">00</Col><Col id=\"datacolumn\">00</Col></Row><Row><Col id=\"codecolumn\">30</Col><Col id=\"datacolumn\">30</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmbJobEndDt2_innerdataset);
            obj.set_text("00");
            obj.set_value("00");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmbJobEndDt1","165.00","10","80","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("56");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmbJobEndDt1_innerdataset = new nexacro.NormalDataset("div00_form_cmbJobEndDt1_innerdataset", obj);
            div00_form_cmbJobEndDt1_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">00</Col><Col id=\"datacolumn\">00</Col></Row><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">01</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">02</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">03</Col></Row><Row><Col id=\"codecolumn\">04</Col><Col id=\"datacolumn\">04</Col></Row><Row><Col id=\"codecolumn\">05</Col><Col id=\"datacolumn\">05</Col></Row><Row><Col id=\"codecolumn\">06</Col><Col id=\"datacolumn\">06</Col></Row><Row><Col id=\"codecolumn\">07</Col><Col id=\"datacolumn\">07</Col></Row><Row><Col id=\"codecolumn\">08</Col><Col id=\"datacolumn\">08</Col></Row><Row><Col id=\"codecolumn\">09</Col><Col id=\"datacolumn\">09</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">11</Col><Col id=\"datacolumn\">11</Col></Row><Row><Col id=\"codecolumn\">12</Col><Col id=\"datacolumn\">12</Col></Row><Row><Col id=\"codecolumn\">13</Col><Col id=\"datacolumn\">13</Col></Row><Row><Col id=\"codecolumn\">14</Col><Col id=\"datacolumn\">14</Col></Row><Row><Col id=\"codecolumn\">15</Col><Col id=\"datacolumn\">15</Col></Row><Row><Col id=\"codecolumn\">16</Col><Col id=\"datacolumn\">16</Col></Row><Row><Col id=\"codecolumn\">17</Col><Col id=\"datacolumn\">17</Col></Row><Row><Col id=\"codecolumn\">18</Col><Col id=\"datacolumn\">18</Col></Row><Row><Col id=\"codecolumn\">19</Col><Col id=\"datacolumn\">19</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">21</Col><Col id=\"datacolumn\">21</Col></Row><Row><Col id=\"codecolumn\">22</Col><Col id=\"datacolumn\">22</Col></Row><Row><Col id=\"codecolumn\">23</Col><Col id=\"datacolumn\">23</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmbJobEndDt1_innerdataset);
            obj.set_text("00");
            obj.set_value("00");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static08_00","684","890","100.00%","74",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("60");
            obj.set_text("작업신청 가능기간은 최대 7일입니다(휴일포함)");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Des004");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan00_00_01_00","1289","927","100.00%","120",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("73");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"pan06_00_00_01_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00_00_01_00","320","1140","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("68");
            obj.set_text("위험작업여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Radio("rdoDageJobYn","950","1102","200","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("69");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_fittocontents("none");
            obj.set_direction("horizontal");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var div00_form_rdoDageJobYn_innerdataset = new nexacro.NormalDataset("div00_form_rdoDageJobYn_innerdataset", obj);
            div00_form_rdoDageJobYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">해당</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">해당없음</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_rdoDageJobYn_innerdataset);
            obj.set_text("해당");
            obj.set_value("0");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btnDageJobInfo","950","1102","179","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("70");
            obj.set_text("위험작업 여부 확인하기");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_SmallGray");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel10","320","1172","100%","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("71");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"rdoDageJobYn\"/><PanelItem id=\"PanelItem01\" componentid=\"btnDageJobInfo\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan06_00_00_01_00","320","1102","300","100",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("72");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel10\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel08_00","538","890","100%","57",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("61");
            obj.set_flexcrossaxisalign("center");
            obj.set_horizontalgap("10");
            obj.set_verticalgap("4");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static08_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01_00_00_00","384","840","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("43");
            obj.set_text("작업시작일");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Calendar("calJobBgngDt","0","0","145","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("44");
            obj.set_dateformat("yyyy-MM-dd ");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel07","384","890","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("49");
            obj.set_verticalgap("4");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"calJobBgngDt\"/><PanelItem id=\"PanelItem01\" componentid=\"edtJobBgngDt\"/><PanelItem id=\"PanelItem02\" componentid=\"cmbJobBgngDt1\"/><PanelItem id=\"PanelItem03\" componentid=\"cmbJobBgngDt2\"/><PanelItem id=\"PanelItem04\" componentid=\"chkJobBgngDt\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("chkJobBgngDt","335.00","0","133","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("48");
            obj.set_text("시간 직접입력");
            obj.set_fittocontents("width");
            obj.set_value("false");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmbJobBgngDt2","245.00","0","80","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("47");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmbJobBgngDt2_innerdataset = new nexacro.NormalDataset("div00_form_cmbJobBgngDt2_innerdataset", obj);
            div00_form_cmbJobBgngDt2_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">00</Col><Col id=\"datacolumn\">00</Col></Row><Row><Col id=\"codecolumn\">30</Col><Col id=\"datacolumn\">30</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmbJobBgngDt2_innerdataset);
            obj.set_text("00");
            obj.set_value("00");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmbJobBgngDt1","155.00","0","80","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("46");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmbJobBgngDt1_innerdataset = new nexacro.NormalDataset("div00_form_cmbJobBgngDt1_innerdataset", obj);
            div00_form_cmbJobBgngDt1_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">00</Col><Col id=\"datacolumn\">00</Col></Row><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">01</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">02</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">03</Col></Row><Row><Col id=\"codecolumn\">04</Col><Col id=\"datacolumn\">04</Col></Row><Row><Col id=\"codecolumn\">05</Col><Col id=\"datacolumn\">05</Col></Row><Row><Col id=\"codecolumn\">06</Col><Col id=\"datacolumn\">06</Col></Row><Row><Col id=\"codecolumn\">07</Col><Col id=\"datacolumn\">07</Col></Row><Row><Col id=\"codecolumn\">08</Col><Col id=\"datacolumn\">08</Col></Row><Row><Col id=\"codecolumn\">09</Col><Col id=\"datacolumn\">09</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">11</Col><Col id=\"datacolumn\">11</Col></Row><Row><Col id=\"codecolumn\">12</Col><Col id=\"datacolumn\">12</Col></Row><Row><Col id=\"codecolumn\">13</Col><Col id=\"datacolumn\">13</Col></Row><Row><Col id=\"codecolumn\">14</Col><Col id=\"datacolumn\">14</Col></Row><Row><Col id=\"codecolumn\">15</Col><Col id=\"datacolumn\">15</Col></Row><Row><Col id=\"codecolumn\">16</Col><Col id=\"datacolumn\">16</Col></Row><Row><Col id=\"codecolumn\">17</Col><Col id=\"datacolumn\">17</Col></Row><Row><Col id=\"codecolumn\">18</Col><Col id=\"datacolumn\">18</Col></Row><Row><Col id=\"codecolumn\">19</Col><Col id=\"datacolumn\">19</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">21</Col><Col id=\"datacolumn\">21</Col></Row><Row><Col id=\"codecolumn\">22</Col><Col id=\"datacolumn\">22</Col></Row><Row><Col id=\"codecolumn\">23</Col><Col id=\"datacolumn\">23</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmbJobBgngDt1_innerdataset);
            obj.set_text("00");
            obj.set_value("00");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("edtJobBgngDt","190.00","0","135","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("45");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_maskchar(" ");
            obj.set_limitbymask("integer");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static08","538","890","100%","74",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("50");
            obj.set_text("작업전 48시간 이전에 등록 하시기 바랍니다.");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Des004");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel08","384","890","100%","74",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("51");
            obj.set_flexcrossaxisalign("center");
            obj.set_horizontalgap("10");
            obj.set_verticalgap("4");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static08\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan_04_00_00_00_00_00","384","840","300","168",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("52");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel07\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel08\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan_04_00_00_00_00_00_00","384","840","300","151",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("62");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel07_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel08_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_02_00","320","1102","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("64");
            obj.set_text("야간작업");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Radio("rdoNghtJobYn","320","1140","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("65");
            obj.set_direction("horizontal");
            obj.set_fittocontents("none");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var div00_form_rdoNghtJobYn_innerdataset = new nexacro.NormalDataset("div00_form_rdoNghtJobYn_innerdataset", obj);
            div00_form_rdoNghtJobYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_rdoNghtJobYn_innerdataset);
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00","320","1172","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("66");
            obj.set_text("(주간(09~18시 , 야간 18시~09시)");
            obj.set_cssclass("sta_WF_Des004");
            obj.set_fittocontents("height");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_02_00","320","1102","300","100",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("67");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoNghtJobYn\"/><PanelItem id=\"PanelItem02\" componentid=\"Static00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_01","0","0","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("74");
            obj.set_text("대표작업자 성함");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtRprsOprtrNm","0","47","100%","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("75");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01","30.00","10","300","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("76");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRprsOprtrNm\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00_00_00","10.00","10","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("77");
            obj.set_text("대표작업자 소속");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtRprsOprtrInstNm","10.00","57","100%","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("78");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan06_00_00_00","530.00","10","300","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("79");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRprsOprtrInstNm\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan00_00_00","1289","1047","100.00%","97",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("80");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan06_00_00_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_02","0","0","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("81");
            obj.set_text("대표작업자 연락처");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtRprsOprtrCtinfoNo","0","47","100%","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("82");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_02","30.00","10","300","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("83");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRprsOprtrCtinfoNo\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00_00_01","10.00","10","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("84");
            obj.set_text("총 작업인원");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtJobTnope","10.00","57","100%","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("85");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan06_00_00_01","530.00","10","300","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("86");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtJobTnope\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan00_00_01","1289","1130","100.00%","97",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("87");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"pan06_00_00_01\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_02_00_00","0","0","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("88");
            obj.set_text("대상 시스템 영향");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Radio("rdoTrgtSysInflncExnCd","0","49","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("89");
            obj.set_direction("horizontal");
            obj.set_fittocontents("none");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var div00_form_rdoTrgtSysInflncExnCd_innerdataset = new nexacro.NormalDataset("div00_form_rdoTrgtSysInflncExnCd_innerdataset", obj);
            div00_form_rdoTrgtSysInflncExnCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_rdoTrgtSysInflncExnCd_innerdataset);
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_02_00_00","20","1232","300","90",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("90");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_02_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoTrgtSysInflncExnCd\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00_00_01_00_00","0","0","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("91");
            obj.set_text("대상 시스템 영향도");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtTrgtSysInflncCn","0","47","100%","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("92");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan06_00_00_01_00_00","650","1232","300","88",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("93");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00_00_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtTrgtSysInflncCn\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan00_00_01_00_00","0","1232","100.00%","101",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("94");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_02_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan06_00_00_01_00_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_01_00","0","0","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("95");
            obj.set_text("타 시스템 영향");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Radio("rdoOtherSysInflncExnCd","0","47","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("96");
            obj.set_direction("horizontal");
            obj.set_fittocontents("none");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var div00_form_rdoOtherSysInflncExnCd_innerdataset = new nexacro.NormalDataset("div00_form_rdoOtherSysInflncExnCd_innerdataset", obj);
            div00_form_rdoOtherSysInflncExnCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_rdoOtherSysInflncExnCd_innerdataset);
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01_00","20","1333","300","90",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("97");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoOtherSysInflncExnCd\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00_00_00_00","10.00","10","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("98");
            obj.set_text("타 시스템 영향도");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtOtherSysInflncCn","10.00","57","100%","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("99");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan06_00_00_00_00","530.00","10","300","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("100");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtOtherSysInflncCn\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan00_00_00_00","0","1333","100.00%","101",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("101");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan06_00_00_00_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan00_00_00_00_00","1289","1379","100.00%","101",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("108");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_01_00_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_01_00_00","268","1615","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("102");
            obj.set_text("전산 장비 반출입");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("chkCtrtHwrtInptYn3","148.00","0","102","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("105");
            obj.set_text("해당없음");
            obj.set_fittocontents("width");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("chkCtrtHwrtInptYn2","74.00","0","74","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("104");
            obj.set_text("반출");
            obj.set_fittocontents("width");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("chkCtrtHwrtInptYn1","0","0","74","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("103");
            obj.set_text("반입");
            obj.set_fittocontents("width");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel11","268","1665","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("106");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"chkCtrtHwrtInptYn1\"/><PanelItem id=\"PanelItem01\" componentid=\"chkCtrtHwrtInptYn2\"/><PanelItem id=\"PanelItem02\" componentid=\"chkCtrtHwrtInptYn3\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01_00_00","268","1615","100%","90",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("107");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel11\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_01_00_00_00","0","0","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("109");
            obj.set_text("반입품목");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtCrynItemCn","0","44","100%","35",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("110");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static09","0","84","100%","35",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("111");
            obj.set_text("전산장비(서버, 네트워크 장비 등)품목만 기재(공구, 휴대용 저장매체 등 제외)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01_00_00_00","20","1535","100%","124",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("112");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_01_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtCrynItemCn\"/><PanelItem id=\"PanelItem02\" componentid=\"Static09\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("panCrynItemCn","0","1535","100.00%","135",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("113");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_01_00_00_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_01_00_00_00_00","0","0","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("114");
            obj.set_text("반출품목");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtShpgotItemCn","0","44","100%","35",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("115");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static10","0","84","100%","35",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("116");
            obj.set_text("전산장비(서버, 네트워크 장비 등)품목만 기재(공구, 휴대용 저장매체 등 제외)");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Des");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_01_00_00_00_00","30.00","10","100%","120",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("117");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_01_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtShpgotItemCn\"/><PanelItem id=\"PanelItem02\" componentid=\"Static10\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("panShpgotItemCn","1289","1618","100.00%","131",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("118");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_01_00_00_00_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel00_00.set_taborder("0");
                p.staLabel00_00.set_text("전산실 작업명");
                p.staLabel00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00.move("194","162","100%","46",null,null);

                p.edtCmproJobNm.set_taborder("1");
                p.edtCmproJobNm.move("194","210","100%","38",null,null);

                p.Panel00_00_00.set_taborder("2");
                p.Panel00_00_00.set_type("vertical");
                p.Panel00_00_00.set_flexgrow("1");
                p.Panel00_00_00.set_fittocontents("height");
                p.Panel00_00_00.set_verticalgap("4");
                p.Panel00_00_00.set_minwidth("");
                p.Panel00_00_00.move("194","162","300","86",null,null);

                p.staLabel03_00_00_00_00.set_taborder("3");
                p.staLabel03_00_00_00_00.set_text("작업근거");
                p.staLabel03_00_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_00_00.move("194","210","100%","46",null,null);

                p.edtJobBssCn.set_taborder("4");
                p.edtJobBssCn.move("824","162","100%","38",null,null);

                p.pan06_00_00.set_taborder("5");
                p.pan06_00_00.set_type("vertical");
                p.pan06_00_00.set_flexgrow("1");
                p.pan06_00_00.set_fittocontents("height");
                p.pan06_00_00.set_verticalgap("4");
                p.pan06_00_00.move("194","162","300","86",null,null);

                p.pan00_00.set_taborder("6");
                p.pan00_00.set_horizontalgap("20");
                p.pan00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_00.set_flexwrap("wrap");
                p.pan00_00.set_fittocontents("height");
                p.pan00_00.set_verticalgap("0");
                p.pan00_00.set_spacing("0px 20px 10px 20px");
                p.pan00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_00.move("174","162","100.00%","97",null,null);

                p.staLabel00_00_00.set_taborder("7");
                p.staLabel00_00_00.set_text("작업내용 요약");
                p.staLabel00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00_00.move("990","458","100%","46",null,null);

                p.edtJobSmryCn.set_taborder("8");
                p.edtJobSmryCn.move("990","504","100%","40",null,null);

                p.Panel00_00_00_00.set_taborder("9");
                p.Panel00_00_00_00.set_type("vertical");
                p.Panel00_00_00_00.set_flexgrow("1");
                p.Panel00_00_00_00.set_fittocontents("height");
                p.Panel00_00_00_00.set_minwidth("");
                p.Panel00_00_00_00.move("990","458","300","86",null,null);

                p.Static01.set_taborder("10");
                p.Static01.set_text("대상시스템");
                p.Static01.set_cssclass("sta_WF_Label_E");
                p.Static01.move("990","504","100%","46",null,null);

                p.edtTrgtSysCn.set_taborder("11");
                p.edtTrgtSysCn.move("1620","458","100%","40",null,null);

                p.Panel00.set_taborder("12");
                p.Panel00.set_flexgrow("1");
                p.Panel00.set_type("vertical");
                p.Panel00.move("990","458","300","96",null,null);

                p.pan02.set_taborder("13");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("970","458","100.00%","107",null,null);

                p.pan04_00.set_taborder("29");
                p.pan04_00.set_horizontalgap("20");
                p.pan04_00.set_flexcrossaxiswrapalign("start");
                p.pan04_00.set_flexwrap("wrap");
                p.pan04_00.set_fittocontents("height");
                p.pan04_00.set_spacing("0px 20px 10px 20px");
                p.pan04_00.set_cssclass("pal_WF_DtlBg");
                p.pan04_00.set_verticalgap("0");
                p.pan04_00.move("1289","244","100.00%","171",null,null);

                p.Static03.set_taborder("26");
                p.Static03.set_text("작업감독자 입회여부");
                p.Static03.set_cssclass("sta_WF_Label_E");
                p.Static03.move("430","448","100%","46",null,null);

                p.rdoJobApvsrEtrntYn.set_taborder("27");
                p.rdoJobApvsrEtrntYn.set_innerdataset(div00_form_rdoJobApvsrEtrntYn_innerdataset);
                p.rdoJobApvsrEtrntYn.set_codecolumn("codecolumn");
                p.rdoJobApvsrEtrntYn.set_datacolumn("datacolumn");
                p.rdoJobApvsrEtrntYn.set_direction("horizontal");
                p.rdoJobApvsrEtrntYn.set_columncount("-1");
                p.rdoJobApvsrEtrntYn.set_rowcount("-1");
                p.rdoJobApvsrEtrntYn.set_value("0");
                p.rdoJobApvsrEtrntYn.set_index("0");
                p.rdoJobApvsrEtrntYn.move("430","448","100%","40",null,null);

                p.Panel02.set_taborder("28");
                p.Panel02.set_flexgrow("1");
                p.Panel02.set_fittocontents("height");
                p.Panel02.set_type("vertical");
                p.Panel02.move("430","402","300","150",null,null);

                p.Static02.set_taborder("14");
                p.Static02.set_text("작업장위치");
                p.Static02.set_cssclass("sta_WF_Label_E");
                p.Static02.move("430","402","100%","46",null,null);

                p.chkCPRBLD102.set_taborder("17");
                p.chkCPRBLD102.set_text("전산실 3층(301호)");
                p.chkCPRBLD102.set_fittocontents("width");
                p.chkCPRBLD102.set_value("false");
                p.chkCPRBLD102.move("246.00","0","167","40",null,null);

                p.chkCPRBLD101.set_taborder("16");
                p.chkCPRBLD101.set_text("전산실 2층(201호)");
                p.chkCPRBLD101.set_fittocontents("width");
                p.chkCPRBLD101.set_value("false");
                p.chkCPRBLD101.move("80.00","0","166","40",null,null);

                p.Static04.set_taborder("15");
                p.Static04.set_text("[ICT센터]");
                p.Static04.set_flexshrink("1");
                p.Static04.move("0","0","80","40",null,null);

                p.Panel03.set_taborder("18");
                p.Panel03.set_fittocontents("height");
                p.Panel03.set_flexwrap("wrap");
                p.Panel03.move("430","448","100%","38",null,null);

                p.chkCPRBLD201.set_taborder("20");
                p.chkCPRBLD201.set_text("전산실 2층(221호, 222호)");
                p.chkCPRBLD201.set_fittocontents("width");
                p.chkCPRBLD201.set_value("false");
                p.chkCPRBLD201.move("676","448","216","40",null,null);

                p.Static05.set_taborder("19");
                p.Static05.set_text("[AICC]");
                p.Static05.set_flexshrink("1");
                p.Static05.move("510","448","80","40",null,null);

                p.Panel04.set_taborder("21");
                p.Panel04.set_fittocontents("height");
                p.Panel04.set_flexwrap("wrap");
                p.Panel04.move("430","448","100%","38",null,null);

                p.chkCPRBLD301.set_taborder("23");
                p.chkCPRBLD301.set_text("전산실 미출입(원격접속 등)");
                p.chkCPRBLD301.set_value("false");
                p.chkCPRBLD301.move("430","486","217","40",null,null);

                p.Static06.set_taborder("22");
                p.Static06.set_text("[기타]");
                p.Static06.move("676","448","80","40",null,null);

                p.Panel05.set_taborder("24");
                p.Panel05.set_fittocontents("height");
                p.Panel05.move("510","448","100%","38",null,null);

                p.Panel01.set_taborder("25");
                p.Panel01.set_flexgrow("1");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_type("vertical");
                p.Panel01.move("430","402","300","160",null,null);

                p.staLabel03_00_00_01.set_taborder("30");
                p.staLabel03_00_00_01.set_text("작업목적");
                p.staLabel03_00_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_01.move("0","0","100%","46",null,null);

                p.rdoJobPrpsNm.set_taborder("31");
                p.rdoJobPrpsNm.set_innerdataset(div00_form_rdoJobPrpsNm_innerdataset);
                p.rdoJobPrpsNm.set_codecolumn("codecolumn");
                p.rdoJobPrpsNm.set_datacolumn("datacolumn");
                p.rdoJobPrpsNm.set_fittocontents("none");
                p.rdoJobPrpsNm.set_columncount("-1");
                p.rdoJobPrpsNm.set_rowcount("-1");
                p.rdoJobPrpsNm.move("0","41","100%","60",null,null);

                p.pan_04_00_00.set_taborder("32");
                p.pan_04_00_00.set_type("vertical");
                p.pan_04_00_00.set_flexgrow("1");
                p.pan_04_00_00.set_fittocontents("height");
                p.pan_04_00_00.move("20.00","0","100%","86",null,null);

                p.pan06.set_taborder("33");
                p.pan06.set_horizontalgap("20");
                p.pan06.set_flexcrossaxiswrapalign("start");
                p.pan06.set_flexwrap("wrap");
                p.pan06.set_fittocontents("height");
                p.pan06.set_verticalgap("0");
                p.pan06.set_spacing("0px 20px 10px 20px");
                p.pan06.set_cssclass("pal_WF_DtlBg");
                p.pan06.move("1289","415","100.00%","97",null,null);

                p.pan06_00.set_taborder("37");
                p.pan06_00.set_horizontalgap("20");
                p.pan06_00.set_flexcrossaxiswrapalign("start");
                p.pan06_00.set_flexwrap("wrap");
                p.pan06_00.set_fittocontents("height");
                p.pan06_00.set_verticalgap("0");
                p.pan06_00.set_spacing("0px 20px 10px 20px");
                p.pan06_00.set_cssclass("pal_WF_DtlBg");
                p.pan06_00.move("1289","494","100.00%","97",null,null);

                p.staLabel03_00_00_01_00.set_taborder("34");
                p.staLabel03_00_00_01_00.set_text("작업목적 기타내용");
                p.staLabel03_00_00_01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_01_00.move("370","692","100%","46",null,null);

                p.edtJobPrpsEtcCn.set_taborder("35");
                p.edtJobPrpsEtcCn.set_readonly("false");
                p.edtJobPrpsEtcCn.move("370","738","100%","40",null,null);

                p.pan_04_00_00_00.set_taborder("36");
                p.pan_04_00_00_00.set_type("vertical");
                p.pan_04_00_00_00.set_flexgrow("1");
                p.pan_04_00_00_00.move("370","692","96.88%","86",null,null);

                p.pan06_00_01.set_taborder("42");
                p.pan06_00_01.set_horizontalgap("20");
                p.pan06_00_01.set_flexcrossaxiswrapalign("start");
                p.pan06_00_01.set_flexwrap("wrap");
                p.pan06_00_01.set_fittocontents("height");
                p.pan06_00_01.set_verticalgap("0");
                p.pan06_00_01.set_spacing("0px 20px 10px 20px");
                p.pan06_00_01.set_cssclass("pal_WF_DtlBg");
                p.pan06_00_01.move("0","569","100.00%","170",null,null);

                p.staLabel03_00_00_01_00_00.set_taborder("38");
                p.staLabel03_00_00_01_00_00.set_text("일상점검 여부");
                p.staLabel03_00_00_01_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_01_00_00.move("394","694","100%","46",null,null);

                p.rdoDladtYn.set_taborder("39");
                p.rdoDladtYn.set_direction("horizontal");
                p.rdoDladtYn.set_innerdataset(div00_form_rdoDladtYn_innerdataset);
                p.rdoDladtYn.set_codecolumn("codecolumn");
                p.rdoDladtYn.set_datacolumn("datacolumn");
                p.rdoDladtYn.set_fittocontents("none");
                p.rdoDladtYn.set_columncount("-1");
                p.rdoDladtYn.set_rowcount("-1");
                p.rdoDladtYn.set_value("0");
                p.rdoDladtYn.set_index("0");
                p.rdoDladtYn.move("394","736","100%","40",null,null);

                p.Static07.set_taborder("40");
                p.Static07.set_text("일상점검 : 매일 및 수시로 시행하는 시스템.하드웨어 점검(점검 체크리스트를 통한 공사 및 자회사 자체 점검\r\n※ 정기점검 또는 일상점검이지만 구체적인 작업내용을 기술해야하는 경우(분기점검, 외부업체 점검 등) ‘해당없음＇ 선택 및 작업내용을 작성하시기 바랍니다.");
                p.Static07.set_cssclass("sta_WF_Des004");
                p.Static07.set_fittocontents("height");
                p.Static07.move("394","762","100%","73",null,null);

                p.pan_04_00_00_00_00.set_taborder("41");
                p.pan_04_00_00_00_00.set_type("vertical");
                p.pan_04_00_00_00_00.set_flexgrow("1");
                p.pan_04_00_00_00_00.set_verticalgap("4");
                p.pan_04_00_00_00_00.move("394","694","100%","159",null,null);

                p.pan06_00_01_00.set_taborder("63");
                p.pan06_00_01_00.set_horizontalgap("20");
                p.pan06_00_01_00.set_flexcrossaxiswrapalign("start");
                p.pan06_00_01_00.set_flexwrap("wrap");
                p.pan06_00_01_00.set_fittocontents("height");
                p.pan06_00_01_00.set_verticalgap("0");
                p.pan06_00_01_00.set_spacing("0px 20px 10px 20px");
                p.pan06_00_01_00.set_cssclass("pal_WF_DtlBg");
                p.pan06_00_01_00.move("1289","720","100.00%","179",null,null);

                p.staLabel03_00_00_01_00_00_00_00.set_taborder("53");
                p.staLabel03_00_00_01_00_00_00_00.set_text("작업종료일");
                p.staLabel03_00_00_01_00_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_01_00_00_00_00.move("384","890","100%","46",null,null);

                p.calJobEndDt.set_taborder("54");
                p.calJobEndDt.set_dateformat("yyyy-MM-dd ");
                p.calJobEndDt.move("538","890","145","40",null,null);

                p.edtJobEndDt.set_taborder("55");
                p.edtJobEndDt.set_format("##:##");
                p.edtJobEndDt.set_maskchar(" ");
                p.edtJobEndDt.set_type("string");
                p.edtJobEndDt.set_limitbymask("integer");
                p.edtJobEndDt.move("684","890","135","40",null,null);

                p.Panel07_00.set_taborder("59");
                p.Panel07_00.set_verticalgap("4");
                p.Panel07_00.set_horizontalgap("10");
                p.Panel07_00.set_flexwrap("wrap");
                p.Panel07_00.set_fittocontents("height");
                p.Panel07_00.move("384","890","100%","40",null,null);

                p.chkJobEndDt.set_taborder("58");
                p.chkJobEndDt.set_text("시간 직접입력");
                p.chkJobEndDt.set_fittocontents("width");
                p.chkJobEndDt.set_value("false");
                p.chkJobEndDt.move("384","934","133","40",null,null);

                p.cmbJobEndDt2.set_taborder("57");
                p.cmbJobEndDt2.set_innerdataset(div00_form_cmbJobEndDt2_innerdataset);
                p.cmbJobEndDt2.set_codecolumn("codecolumn");
                p.cmbJobEndDt2.set_datacolumn("datacolumn");
                p.cmbJobEndDt2.set_text("00");
                p.cmbJobEndDt2.set_value("00");
                p.cmbJobEndDt2.set_index("0");
                p.cmbJobEndDt2.move("384","934","80","40",null,null);

                p.cmbJobEndDt1.set_taborder("56");
                p.cmbJobEndDt1.set_innerdataset(div00_form_cmbJobEndDt1_innerdataset);
                p.cmbJobEndDt1.set_codecolumn("codecolumn");
                p.cmbJobEndDt1.set_datacolumn("datacolumn");
                p.cmbJobEndDt1.set_text("00");
                p.cmbJobEndDt1.set_value("00");
                p.cmbJobEndDt1.set_index("0");
                p.cmbJobEndDt1.move("165.00","10","80","40",null,null);

                p.Static08_00.set_taborder("60");
                p.Static08_00.set_text("작업신청 가능기간은 최대 7일입니다(휴일포함)");
                p.Static08_00.set_fittocontents("height");
                p.Static08_00.set_cssclass("sta_WF_Des004");
                p.Static08_00.move("684","890","100.00%","74",null,null);

                p.pan00_00_01_00.set_taborder("73");
                p.pan00_00_01_00.set_horizontalgap("20");
                p.pan00_00_01_00.set_flexcrossaxiswrapalign("start");
                p.pan00_00_01_00.set_flexwrap("wrap");
                p.pan00_00_01_00.set_fittocontents("height");
                p.pan00_00_01_00.set_verticalgap("0");
                p.pan00_00_01_00.set_spacing("0px 20px 10px 20px");
                p.pan00_00_01_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_00_01_00.move("1289","927","100.00%","120",null,null);

                p.staLabel03_00_00_00_00_01_00.set_taborder("68");
                p.staLabel03_00_00_00_00_01_00.set_text("위험작업여부");
                p.staLabel03_00_00_00_00_01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_00_00_01_00.move("320","1140","100%","46",null,null);

                p.rdoDageJobYn.set_taborder("69");
                p.rdoDageJobYn.set_innerdataset(div00_form_rdoDageJobYn_innerdataset);
                p.rdoDageJobYn.set_codecolumn("codecolumn");
                p.rdoDageJobYn.set_datacolumn("datacolumn");
                p.rdoDageJobYn.set_fittocontents("none");
                p.rdoDageJobYn.set_direction("horizontal");
                p.rdoDageJobYn.set_columncount("-1");
                p.rdoDageJobYn.set_rowcount("-1");
                p.rdoDageJobYn.set_value("0");
                p.rdoDageJobYn.set_index("0");
                p.rdoDageJobYn.move("950","1102","200","40",null,null);

                p.btnDageJobInfo.set_taborder("70");
                p.btnDageJobInfo.set_text("위험작업 여부 확인하기");
                p.btnDageJobInfo.set_fittocontents("width");
                p.btnDageJobInfo.set_cssclass("btn_WF_SmallGray");
                p.btnDageJobInfo.move("950","1102","179","34",null,null);

                p.Panel10.set_taborder("71");
                p.Panel10.set_fittocontents("height");
                p.Panel10.set_flexwrap("wrap");
                p.Panel10.move("320","1172","100%","38",null,null);

                p.pan06_00_00_01_00.set_taborder("72");
                p.pan06_00_00_01_00.set_type("vertical");
                p.pan06_00_00_01_00.set_flexgrow("1");
                p.pan06_00_00_01_00.set_fittocontents("height");
                p.pan06_00_00_01_00.set_verticalgap("4");
                p.pan06_00_00_01_00.move("320","1102","300","100",null,null);

                p.Panel08_00.set_taborder("61");
                p.Panel08_00.set_flexcrossaxisalign("center");
                p.Panel08_00.set_horizontalgap("10");
                p.Panel08_00.set_verticalgap("4");
                p.Panel08_00.set_flexwrap("wrap");
                p.Panel08_00.set_fittocontents("height");
                p.Panel08_00.move("538","890","100%","57",null,null);

                p.staLabel03_00_00_01_00_00_00.set_taborder("43");
                p.staLabel03_00_00_01_00_00_00.set_text("작업시작일");
                p.staLabel03_00_00_01_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_01_00_00_00.move("384","840","100%","46",null,null);

                p.calJobBgngDt.set_taborder("44");
                p.calJobBgngDt.set_dateformat("yyyy-MM-dd ");
                p.calJobBgngDt.move("0","0","145","40",null,null);

                p.Panel07.set_taborder("49");
                p.Panel07.set_verticalgap("4");
                p.Panel07.set_horizontalgap("10");
                p.Panel07.set_flexwrap("wrap");
                p.Panel07.set_fittocontents("height");
                p.Panel07.move("384","890","100%","40",null,null);

                p.chkJobBgngDt.set_taborder("48");
                p.chkJobBgngDt.set_text("시간 직접입력");
                p.chkJobBgngDt.set_fittocontents("width");
                p.chkJobBgngDt.set_value("false");
                p.chkJobBgngDt.move("335.00","0","133","40",null,null);

                p.cmbJobBgngDt2.set_taborder("47");
                p.cmbJobBgngDt2.set_innerdataset(div00_form_cmbJobBgngDt2_innerdataset);
                p.cmbJobBgngDt2.set_codecolumn("codecolumn");
                p.cmbJobBgngDt2.set_datacolumn("datacolumn");
                p.cmbJobBgngDt2.set_text("00");
                p.cmbJobBgngDt2.set_value("00");
                p.cmbJobBgngDt2.set_index("0");
                p.cmbJobBgngDt2.move("245.00","0","80","40",null,null);

                p.cmbJobBgngDt1.set_taborder("46");
                p.cmbJobBgngDt1.set_innerdataset(div00_form_cmbJobBgngDt1_innerdataset);
                p.cmbJobBgngDt1.set_codecolumn("codecolumn");
                p.cmbJobBgngDt1.set_datacolumn("datacolumn");
                p.cmbJobBgngDt1.set_text("00");
                p.cmbJobBgngDt1.set_value("00");
                p.cmbJobBgngDt1.set_index("0");
                p.cmbJobBgngDt1.move("155.00","0","80","40",null,null);

                p.edtJobBgngDt.set_taborder("45");
                p.edtJobBgngDt.set_format("##:##");
                p.edtJobBgngDt.set_type("string");
                p.edtJobBgngDt.set_maskchar(" ");
                p.edtJobBgngDt.set_limitbymask("integer");
                p.edtJobBgngDt.move("190.00","0","135","40",null,null);

                p.Static08.set_taborder("50");
                p.Static08.set_text("작업전 48시간 이전에 등록 하시기 바랍니다.");
                p.Static08.set_fittocontents("height");
                p.Static08.set_cssclass("sta_WF_Des004");
                p.Static08.move("538","890","100%","74",null,null);

                p.Panel08.set_taborder("51");
                p.Panel08.set_flexcrossaxisalign("center");
                p.Panel08.set_horizontalgap("10");
                p.Panel08.set_verticalgap("4");
                p.Panel08.set_flexwrap("wrap");
                p.Panel08.set_fittocontents("height");
                p.Panel08.move("384","890","100%","74",null,null);

                p.pan_04_00_00_00_00_00.set_taborder("52");
                p.pan_04_00_00_00_00_00.set_type("vertical");
                p.pan_04_00_00_00_00_00.set_fittocontents("height");
                p.pan_04_00_00_00_00_00.set_verticalgap("4");
                p.pan_04_00_00_00_00_00.set_flexgrow("1");
                p.pan_04_00_00_00_00_00.move("384","840","300","168",null,null);

                p.pan_04_00_00_00_00_00_00.set_taborder("62");
                p.pan_04_00_00_00_00_00_00.set_type("vertical");
                p.pan_04_00_00_00_00_00_00.set_flexgrow("1");
                p.pan_04_00_00_00_00_00_00.set_fittocontents("height");
                p.pan_04_00_00_00_00_00_00.set_verticalgap("4");
                p.pan_04_00_00_00_00_00_00.move("384","840","300","151",null,null);

                p.staLabel00_00_02_00.set_taborder("64");
                p.staLabel00_00_02_00.set_text("야간작업");
                p.staLabel00_00_02_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00_02_00.move("320","1102","100%","46",null,null);

                p.rdoNghtJobYn.set_taborder("65");
                p.rdoNghtJobYn.set_direction("horizontal");
                p.rdoNghtJobYn.set_fittocontents("none");
                p.rdoNghtJobYn.set_innerdataset(div00_form_rdoNghtJobYn_innerdataset);
                p.rdoNghtJobYn.set_codecolumn("codecolumn");
                p.rdoNghtJobYn.set_datacolumn("datacolumn");
                p.rdoNghtJobYn.set_columncount("-1");
                p.rdoNghtJobYn.set_rowcount("-1");
                p.rdoNghtJobYn.set_value("0");
                p.rdoNghtJobYn.set_index("0");
                p.rdoNghtJobYn.move("320","1140","100%","40",null,null);

                p.Static00.set_taborder("66");
                p.Static00.set_text("(주간(09~18시 , 야간 18시~09시)");
                p.Static00.set_cssclass("sta_WF_Des004");
                p.Static00.set_fittocontents("height");
                p.Static00.move("320","1172","100%","40",null,null);

                p.Panel00_00_00_02_00.set_taborder("67");
                p.Panel00_00_00_02_00.set_type("vertical");
                p.Panel00_00_00_02_00.set_flexgrow("1");
                p.Panel00_00_00_02_00.set_fittocontents("height");
                p.Panel00_00_00_02_00.set_verticalgap("4");
                p.Panel00_00_00_02_00.set_minwidth("");
                p.Panel00_00_00_02_00.move("320","1102","300","100",null,null);

                p.staLabel00_00_01.set_taborder("74");
                p.staLabel00_00_01.set_text("대표작업자 성함");
                p.staLabel00_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00_01.move("0","0","100%","46",null,null);

                p.edtRprsOprtrNm.set_taborder("75");
                p.edtRprsOprtrNm.move("0","47","100%","38",null,null);

                p.Panel00_00_00_01.set_taborder("76");
                p.Panel00_00_00_01.set_type("vertical");
                p.Panel00_00_00_01.set_flexgrow("1");
                p.Panel00_00_00_01.set_fittocontents("height");
                p.Panel00_00_00_01.set_verticalgap("4");
                p.Panel00_00_00_01.set_minwidth("");
                p.Panel00_00_00_01.move("30.00","10","300","86",null,null);

                p.staLabel03_00_00_00_00_00.set_taborder("77");
                p.staLabel03_00_00_00_00_00.set_text("대표작업자 소속");
                p.staLabel03_00_00_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_00_00_00.move("10.00","10","100%","46",null,null);

                p.edtRprsOprtrInstNm.set_taborder("78");
                p.edtRprsOprtrInstNm.move("10.00","57","100%","38",null,null);

                p.pan06_00_00_00.set_taborder("79");
                p.pan06_00_00_00.set_type("vertical");
                p.pan06_00_00_00.set_flexgrow("1");
                p.pan06_00_00_00.set_fittocontents("height");
                p.pan06_00_00_00.set_verticalgap("4");
                p.pan06_00_00_00.move("530.00","10","300","86",null,null);

                p.pan00_00_00.set_taborder("80");
                p.pan00_00_00.set_horizontalgap("20");
                p.pan00_00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_00_00.set_flexwrap("wrap");
                p.pan00_00_00.set_fittocontents("height");
                p.pan00_00_00.set_verticalgap("0");
                p.pan00_00_00.set_spacing("0px 20px 10px 20px");
                p.pan00_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_00_00.move("1289","1047","100.00%","97",null,null);

                p.staLabel00_00_02.set_taborder("81");
                p.staLabel00_00_02.set_text("대표작업자 연락처");
                p.staLabel00_00_02.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00_02.move("0","0","100%","46",null,null);

                p.edtRprsOprtrCtinfoNo.set_taborder("82");
                p.edtRprsOprtrCtinfoNo.move("0","47","100%","38",null,null);

                p.Panel00_00_00_02.set_taborder("83");
                p.Panel00_00_00_02.set_type("vertical");
                p.Panel00_00_00_02.set_flexgrow("1");
                p.Panel00_00_00_02.set_fittocontents("height");
                p.Panel00_00_00_02.set_verticalgap("4");
                p.Panel00_00_00_02.set_minwidth("");
                p.Panel00_00_00_02.move("30.00","10","300","86",null,null);

                p.staLabel03_00_00_00_00_01.set_taborder("84");
                p.staLabel03_00_00_00_00_01.set_text("총 작업인원");
                p.staLabel03_00_00_00_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_00_00_01.move("10.00","10","100%","46",null,null);

                p.edtJobTnope.set_taborder("85");
                p.edtJobTnope.move("10.00","57","100%","38",null,null);

                p.pan06_00_00_01.set_taborder("86");
                p.pan06_00_00_01.set_type("vertical");
                p.pan06_00_00_01.set_flexgrow("1");
                p.pan06_00_00_01.set_fittocontents("height");
                p.pan06_00_00_01.set_verticalgap("4");
                p.pan06_00_00_01.move("530.00","10","300","86",null,null);

                p.pan00_00_01.set_taborder("87");
                p.pan00_00_01.set_horizontalgap("20");
                p.pan00_00_01.set_flexcrossaxiswrapalign("start");
                p.pan00_00_01.set_flexwrap("wrap");
                p.pan00_00_01.set_fittocontents("height");
                p.pan00_00_01.set_verticalgap("0");
                p.pan00_00_01.set_spacing("0px 20px 10px 20px");
                p.pan00_00_01.set_cssclass("pal_WF_DtlBg");
                p.pan00_00_01.move("1289","1130","100.00%","97",null,null);

                p.staLabel00_00_02_00_00.set_taborder("88");
                p.staLabel00_00_02_00_00.set_text("대상 시스템 영향");
                p.staLabel00_00_02_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00_02_00_00.move("0","0","100%","46",null,null);

                p.rdoTrgtSysInflncExnCd.set_taborder("89");
                p.rdoTrgtSysInflncExnCd.set_direction("horizontal");
                p.rdoTrgtSysInflncExnCd.set_fittocontents("none");
                p.rdoTrgtSysInflncExnCd.set_innerdataset(div00_form_rdoTrgtSysInflncExnCd_innerdataset);
                p.rdoTrgtSysInflncExnCd.set_codecolumn("codecolumn");
                p.rdoTrgtSysInflncExnCd.set_datacolumn("datacolumn");
                p.rdoTrgtSysInflncExnCd.set_columncount("-1");
                p.rdoTrgtSysInflncExnCd.set_rowcount("-1");
                p.rdoTrgtSysInflncExnCd.set_value("0");
                p.rdoTrgtSysInflncExnCd.set_index("0");
                p.rdoTrgtSysInflncExnCd.move("0","49","100%","40",null,null);

                p.Panel00_00_00_02_00_00.set_taborder("90");
                p.Panel00_00_00_02_00_00.set_type("vertical");
                p.Panel00_00_00_02_00_00.set_flexgrow("1");
                p.Panel00_00_00_02_00_00.set_fittocontents("height");
                p.Panel00_00_00_02_00_00.set_verticalgap("4");
                p.Panel00_00_00_02_00_00.set_minwidth("");
                p.Panel00_00_00_02_00_00.move("20","1232","300","90",null,null);

                p.staLabel03_00_00_00_00_01_00_00.set_taborder("91");
                p.staLabel03_00_00_00_00_01_00_00.set_text("대상 시스템 영향도");
                p.staLabel03_00_00_00_00_01_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_00_00_01_00_00.move("0","0","100%","46",null,null);

                p.edtTrgtSysInflncCn.set_taborder("92");
                p.edtTrgtSysInflncCn.move("0","47","100%","38",null,null);

                p.pan06_00_00_01_00_00.set_taborder("93");
                p.pan06_00_00_01_00_00.set_type("vertical");
                p.pan06_00_00_01_00_00.set_flexgrow("1");
                p.pan06_00_00_01_00_00.set_fittocontents("height");
                p.pan06_00_00_01_00_00.set_verticalgap("4");
                p.pan06_00_00_01_00_00.move("650","1232","300","88",null,null);

                p.pan00_00_01_00_00.set_taborder("94");
                p.pan00_00_01_00_00.set_horizontalgap("20");
                p.pan00_00_01_00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_00_01_00_00.set_flexwrap("wrap");
                p.pan00_00_01_00_00.set_fittocontents("height");
                p.pan00_00_01_00_00.set_verticalgap("0");
                p.pan00_00_01_00_00.set_spacing("0px 20px 10px 20px");
                p.pan00_00_01_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_00_01_00_00.move("0","1232","100.00%","101",null,null);

                p.staLabel00_00_01_00.set_taborder("95");
                p.staLabel00_00_01_00.set_text("타 시스템 영향");
                p.staLabel00_00_01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00_01_00.move("0","0","100%","46",null,null);

                p.rdoOtherSysInflncExnCd.set_taborder("96");
                p.rdoOtherSysInflncExnCd.set_direction("horizontal");
                p.rdoOtherSysInflncExnCd.set_fittocontents("none");
                p.rdoOtherSysInflncExnCd.set_innerdataset(div00_form_rdoOtherSysInflncExnCd_innerdataset);
                p.rdoOtherSysInflncExnCd.set_codecolumn("codecolumn");
                p.rdoOtherSysInflncExnCd.set_datacolumn("datacolumn");
                p.rdoOtherSysInflncExnCd.set_columncount("-1");
                p.rdoOtherSysInflncExnCd.set_rowcount("-1");
                p.rdoOtherSysInflncExnCd.set_value("0");
                p.rdoOtherSysInflncExnCd.set_index("0");
                p.rdoOtherSysInflncExnCd.move("0","47","100%","40",null,null);

                p.Panel00_00_00_01_00.set_taborder("97");
                p.Panel00_00_00_01_00.set_type("vertical");
                p.Panel00_00_00_01_00.set_flexgrow("1");
                p.Panel00_00_00_01_00.set_fittocontents("height");
                p.Panel00_00_00_01_00.set_verticalgap("4");
                p.Panel00_00_00_01_00.set_minwidth("");
                p.Panel00_00_00_01_00.move("20","1333","300","90",null,null);

                p.staLabel03_00_00_00_00_00_00.set_taborder("98");
                p.staLabel03_00_00_00_00_00_00.set_text("타 시스템 영향도");
                p.staLabel03_00_00_00_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_00_00_00_00.move("10.00","10","100%","46",null,null);

                p.edtOtherSysInflncCn.set_taborder("99");
                p.edtOtherSysInflncCn.move("10.00","57","100%","38",null,null);

                p.pan06_00_00_00_00.set_taborder("100");
                p.pan06_00_00_00_00.set_type("vertical");
                p.pan06_00_00_00_00.set_flexgrow("1");
                p.pan06_00_00_00_00.set_fittocontents("height");
                p.pan06_00_00_00_00.set_verticalgap("4");
                p.pan06_00_00_00_00.move("530.00","10","300","86",null,null);

                p.pan00_00_00_00.set_taborder("101");
                p.pan00_00_00_00.set_horizontalgap("20");
                p.pan00_00_00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_00_00_00.set_flexwrap("wrap");
                p.pan00_00_00_00.set_fittocontents("height");
                p.pan00_00_00_00.set_verticalgap("0");
                p.pan00_00_00_00.set_spacing("0px 20px 10px 20px");
                p.pan00_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_00_00_00.move("0","1333","100.00%","101",null,null);

                p.pan00_00_00_00_00.set_taborder("108");
                p.pan00_00_00_00_00.set_horizontalgap("20");
                p.pan00_00_00_00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_00_00_00_00.set_flexwrap("wrap");
                p.pan00_00_00_00_00.set_fittocontents("height");
                p.pan00_00_00_00_00.set_verticalgap("4");
                p.pan00_00_00_00_00.set_spacing("0px 20px 10px 20px");
                p.pan00_00_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_00_00_00_00.move("1289","1379","100.00%","101",null,null);

                p.staLabel00_00_01_00_00.set_taborder("102");
                p.staLabel00_00_01_00_00.set_text("전산 장비 반출입");
                p.staLabel00_00_01_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00_01_00_00.move("268","1615","100%","46",null,null);

                p.chkCtrtHwrtInptYn3.set_taborder("105");
                p.chkCtrtHwrtInptYn3.set_text("해당없음");
                p.chkCtrtHwrtInptYn3.set_fittocontents("width");
                p.chkCtrtHwrtInptYn3.move("148.00","0","102","40",null,null);

                p.chkCtrtHwrtInptYn2.set_taborder("104");
                p.chkCtrtHwrtInptYn2.set_text("반출");
                p.chkCtrtHwrtInptYn2.set_fittocontents("width");
                p.chkCtrtHwrtInptYn2.move("74.00","0","74","40",null,null);

                p.chkCtrtHwrtInptYn1.set_taborder("103");
                p.chkCtrtHwrtInptYn1.set_text("반입");
                p.chkCtrtHwrtInptYn1.set_fittocontents("width");
                p.chkCtrtHwrtInptYn1.move("0","0","74","40",null,null);

                p.Panel11.set_taborder("106");
                p.Panel11.set_flexwrap("wrap");
                p.Panel11.set_verticalgap("4");
                p.Panel11.set_fittocontents("height");
                p.Panel11.move("268","1665","100%","40",null,null);

                p.Panel00_00_00_01_00_00.set_taborder("107");
                p.Panel00_00_00_01_00_00.set_type("vertical");
                p.Panel00_00_00_01_00_00.set_flexgrow("1");
                p.Panel00_00_00_01_00_00.set_fittocontents("height");
                p.Panel00_00_00_01_00_00.set_verticalgap("4");
                p.Panel00_00_00_01_00_00.set_minwidth("");
                p.Panel00_00_00_01_00_00.move("268","1615","100%","90",null,null);

                p.staLabel00_00_01_00_00_00.set_taborder("109");
                p.staLabel00_00_01_00_00_00.set_text("반입품목");
                p.staLabel00_00_01_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00_01_00_00_00.move("0","0","100%","46",null,null);

                p.edtCrynItemCn.set_taborder("110");
                p.edtCrynItemCn.move("0","44","100%","35",null,null);

                p.Static09.set_taborder("111");
                p.Static09.set_text("전산장비(서버, 네트워크 장비 등)품목만 기재(공구, 휴대용 저장매체 등 제외)");
                p.Static09.set_cssclass("sta_WF_Des");
                p.Static09.set_fittocontents("height");
                p.Static09.move("0","84","100%","35",null,null);

                p.Panel00_00_00_01_00_00_00.set_taborder("112");
                p.Panel00_00_00_01_00_00_00.set_type("vertical");
                p.Panel00_00_00_01_00_00_00.set_flexgrow("1");
                p.Panel00_00_00_01_00_00_00.set_fittocontents("height");
                p.Panel00_00_00_01_00_00_00.set_verticalgap("4");
                p.Panel00_00_00_01_00_00_00.set_minwidth("");
                p.Panel00_00_00_01_00_00_00.move("20","1535","100%","124",null,null);

                p.panCrynItemCn.set_taborder("113");
                p.panCrynItemCn.set_horizontalgap("20");
                p.panCrynItemCn.set_flexcrossaxiswrapalign("start");
                p.panCrynItemCn.set_flexwrap("wrap");
                p.panCrynItemCn.set_fittocontents("height");
                p.panCrynItemCn.set_verticalgap("0");
                p.panCrynItemCn.set_spacing("0px 20px 10px 20px");
                p.panCrynItemCn.set_cssclass("pal_WF_DtlBg");
                p.panCrynItemCn.move("0","1535","100.00%","135",null,null);

                p.staLabel00_00_01_00_00_00_00.set_taborder("114");
                p.staLabel00_00_01_00_00_00_00.set_text("반출품목");
                p.staLabel00_00_01_00_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00_01_00_00_00_00.move("0","0","100%","46",null,null);

                p.edtShpgotItemCn.set_taborder("115");
                p.edtShpgotItemCn.move("0","44","100%","35",null,null);

                p.Static10.set_taborder("116");
                p.Static10.set_text("전산장비(서버, 네트워크 장비 등)품목만 기재(공구, 휴대용 저장매체 등 제외)");
                p.Static10.set_fittocontents("height");
                p.Static10.set_cssclass("sta_WF_Des");
                p.Static10.move("0","84","100%","35",null,null);

                p.Panel00_00_00_01_00_00_00_00.set_taborder("117");
                p.Panel00_00_00_01_00_00_00_00.set_type("vertical");
                p.Panel00_00_00_01_00_00_00_00.set_flexgrow("1");
                p.Panel00_00_00_01_00_00_00_00.set_fittocontents("height");
                p.Panel00_00_00_01_00_00_00_00.set_verticalgap("4");
                p.Panel00_00_00_01_00_00_00_00.set_minwidth("");
                p.Panel00_00_00_01_00_00_00_00.move("30.00","10","100%","120",null,null);

                p.panShpgotItemCn.set_taborder("118");
                p.panShpgotItemCn.set_horizontalgap("20");
                p.panShpgotItemCn.set_flexcrossaxiswrapalign("start");
                p.panShpgotItemCn.set_flexwrap("wrap");
                p.panShpgotItemCn.set_fittocontents("height");
                p.panShpgotItemCn.set_verticalgap("0");
                p.panShpgotItemCn.set_spacing("0px 20px 10px 20px");
                p.panShpgotItemCn.set_cssclass("pal_WF_DtlBg");
                p.panShpgotItemCn.move("1289","1618","100.00%","131",null,null);
            	}
            );
            obj.set_type("vertical");
            this.div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00.form
            obj = new Layout("Layout0","",0,0,this.div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static04.move("0","0","100%","40",null,null);

                p.Static05.move("510","448","100%","40",null,null);

                p.Static06.move("676","448","100%","40",null,null);

                p.pan_04_00_00_00_00.set_fittocontents("height");
            	}
            );
            obj.set_type("vertical");
            this.div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("작업개요(전산실작업)");

                p.Panel12.set_taborder("5");
                p.Panel12.set_type("vertical");
                p.Panel12.set_fittocontents("height");
                p.Panel12.move("0","0","100.00%","1871",null,null);

                p.staSubTitle.set_taborder("0");
                p.staSubTitle.set_text("작업개요");
                p.staSubTitle.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle.move("0","0","100%","50",null,null);

                p.Button01.set_taborder("1");
                p.Button01.set_cssclass("btn_WF_ACPlus");
                p.Button01.set_visible("false");
                p.Button01.move("112.00","6","34","34",null,null);

                p.Button00.set_taborder("2");
                p.Button00.set_cssclass("btn_WF_ACMinus");
                p.Button00.move("156.00","6","34","34",null,null);

                p.Panel06.set_taborder("3");
                p.Panel06.set_cssclass("pal_WF_TitBtnBg");
                p.Panel06.set_flexcrossaxisalign("center");
                p.Panel06.set_flexmainaxisalign("end");
                p.Panel06.set_horizontalgap("10");
                p.Panel06.set_spacing("0px 10px 0px 10px");
                p.Panel06.move("819","0","200","50",null,null);

                p.Panel09.set_taborder("4");
                p.Panel09.set_flexcrossaxisalign("end");
                p.Panel09.move("1183","0","100.00%","70",null,null);

                p.div00.set_taborder("6");
                p.div00.set_text("div00");
                p.div00.set_fittocontents("height");
                p.div00.move("104","180","100.00%","1801",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel12.set_spacing("0px 20px 10px 20px");
                p.Panel12.move("0","0","100.00%","1870.98",null,null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div00.form.edtCmproJobNm","value","dsCmproMst","cmproJobNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div00.form.edtJobBssCn","value","dsCmproMst","jobBssCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div00.form.edtJobSmryCn","value","dsCmproMst","jobSmryCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div00.form.edtTrgtSysCn","value","dsCmproMst","trgtSysCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div00.form.rdoJobApvsrEtrntYn","value","dsCmproMst","jobApvsrEtrntYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div00.form.rdoJobPrpsNm","value","dsCmproMst","jobPrpsNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div00.form.edtJobPrpsEtcCn","value","dsCmproMst","jobPrpsEtcCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div00.form.rdoDladtYn","value","dsCmproMst","dladtYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div00.form.calJobBgngDt","value","dsCmproMst","jobBgngDt1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div00.form.calJobEndDt","value","dsCmproMst","jobEndDt1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div00.form.rdoNghtJobYn","value","dsCmproMst","nghtJobYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div00.form.rdoDageJobYn","value","dsCmproMst","dageJobYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div00.form.edtRprsOprtrNm","value","dsCmproMst","rprsOprtrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div00.form.edtRprsOprtrInstNm","value","dsCmproMst","rprsOprtrInstNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div00.form.edtRprsOprtrCtinfoNo","value","dsCmproMst","rprsOprtrCtinfoNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div00.form.edtJobTnope","value","dsCmproMst","jobTnope");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div00.form.rdoTrgtSysInflncExnCd","value","dsCmproMst","trgtSysInflncExnCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div00.form.edtTrgtSysInflncCn","value","dsCmproMst","trgtSysInflncCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div00.form.rdoOtherSysInflncExnCd","value","dsCmproMst","otherSysInflncExnCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div00.form.edtOtherSysInflncCn","value","dsCmproMst","otherSysInflncCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div00.form.edtCrynItemCn","value","dsCmproMst","crynItemCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div00.form.edtShpgotItemCn","value","dsCmproMst","shpgotItemCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div00.form.edtJobBgngDt","value","dsCmproMst","jobBgngHr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div00.form.edtJobEndDt","value","dsCmproMst","jobEndHr");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CST016M02.xfdl", function() {
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

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        	//this.divForm.form.divSch.set_width("100%");
        	//this.divForm.form.divSch.fittocontents = "height";

        	this.div00.form.edtJobBgngDt.visible  	= false;
        	this.div00.form.edtJobEndDt.visible  	= false;

        	//this.div00.form.panCrynItemCn.visible  	= false;	//반입품목
        	//this.div00.form.panShpgotItemCn.visible = false;	//반출품목

        	this.dsCmproMst = this.lookup("dsCmproMst");
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	//TODO..
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

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        /**************************************************************************
         * @name : btnArptPbcprtPicSpvsrId_onclick
         * @description : 위험작업 여부 확인하기 팝업
         ***************************************************************************/
        this.btnDageJobInfo_onclick = function(obj,e)
        {
        	var sTitle = "<위험작업 대상>";
        	var objArg   = {};

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
        		, autosize: true
        		, title: sTitle
        		, resize: true
        		, titlebar: true
        	};
        	var objOption = {
        		popuptype: "modal"	//modal,modaless
        		, width: 1050
        		, height: 550		//width,height 지정하지 않음 popup form size적용
        		, autosize: false
        		, title: sTitle
        		, resize: true
        		, titlebar: true
        	};

        	var sPopupCallBack = "";

        	this.gfnOpenPopup("plcSch", "work::CST/CMM/CST016P09.xfdl", objArg, sPopupCallBack, objOption);
        };

        /**************************************************************************
         * @name : chkJobBgngDt_onchanged
         * @description : 작업시작시간 직접입력 체크박스
         ***************************************************************************/
        this.chkJobBgngDt_onchanged = function(obj,e)
        {
        	if(obj.isChecked() ) {
        		this.div00.form.cmbJobBgngDt1.visible = false;
        		this.div00.form.cmbJobBgngDt2.visible = false;
        		this.div00.form.edtJobBgngDt.visible  = true;
        	} else {
        		this.div00.form.cmbJobBgngDt1.visible = true;
        		this.div00.form.cmbJobBgngDt2.visible = true;
        		this.div00.form.edtJobBgngDt.visible  = false;
        	}
        };

        /**************************************************************************
         * @name : chkJobEndDt_onchanged
         * @description : 작업종료시간 직접입력 체크박스
         ***************************************************************************/
        this.chkJobEndDt_onchanged = function(obj,e)
        {
        	if(obj.isChecked() ) {
        		this.div00.form.cmbJobEndDt1.visible = false;
        		this.div00.form.cmbJobEndDt2.visible = false;
        		this.div00.form.edtJobEndDt.visible  = true;
        	} else {
        		this.div00.form.cmbJobEndDt1.visible = true;
        		this.div00.form.cmbJobEndDt2.visible = true;
        		this.div00.form.edtJobEndDt.visible  = false;
        	}
        };

        /**************************************************************************
         * @name : chkCtrtHwrtInptYn1_onchanged
         * @description : 전산장비 반입 체크박스
         ***************************************************************************/
        this.chkCtrtHwrtInptYn1_onchanged = function(obj,e)
        {
        	if(obj.isChecked() ) {
        		this.div00.form.chkCtrtHwrtInptYn3.value 	= false;	//해당없음체크
        		//this.div00.form.panCrynItemCn.visible 		= true;
        	} else {
        		//this.div00.form.panCrynItemCn.visible 		= false;
        	}
        	this.resetScroll();
        };

        /**************************************************************************
         * @name : chkCtrtHwrtInptYn2_onchanged
         * @description : 전산장비 반출 체크박스
         ***************************************************************************/
        this.chkCtrtHwrtInptYn2_onchanged = function(obj,e)
        {
        	if(obj.isChecked() ) {
        		this.div00.form.chkCtrtHwrtInptYn3.value 	= false;	//해당없음체크
        		this.div00.form.panShpgotItemCn.visible 	= true;
        	} else {
        		this.div00.form.panShpgotItemCn.visible 	= false;
        	}
        	this.resetScroll();
        };

        /**************************************************************************
         * @name : chkCtrtHwrtInptYn3_onchanged
         * @description : 전산장비 해당없음 체크박스
         ***************************************************************************/
        this.chkCtrtHwrtInptYn3_onchanged = function(obj,e)
        {
        	if(obj.isChecked() ) {
        		this.div00.form.chkCtrtHwrtInptYn1.value 	= false;	//반입체크
        		this.div00.form.chkCtrtHwrtInptYn2.value 	= false;	//반출체크

        		//this.div00.form.panCrynItemCn.visible 		= false;	//반입텍스트
        		//this.div00.form.panShpgotItemCn.visible 	= false;	//반출텍스트
        	}else{
        		//this.div00.form.panCrynItemCn.visible 		= true;		//반입텍스트
        		//this.div00.form.panShpgotItemCn.visible		= true;		//반출텍스트
        	}
        	this.resetScroll();
        };

        /**************************************************************************
         * @name : cmbJobBgngDt1_onitemchanged
         * @description : 작업시작시간 변경시
         ***************************************************************************/
        this.cmbJobBgngDt1_onitemchanged = function(obj,e)
        {
        	if(!this.gfnIsNull(obj.value) && !this.gfnIsNull(this.div00.form.cmbJobBgngDt2.value) ) {
        		this.dsCmproMst.setColumn(0, "jobBgngHr", obj.value + this.div00.form.cmbJobBgngDt2.value);
        	}
        };

        this.cmbJobBgngDt2_onitemchanged = function(obj,e)
        {
        	if(!this.gfnIsNull(this.div00.form.cmbJobBgngDt1.value) && !this.gfnIsNull(obj.value) ) {
        		this.dsCmproMst.setColumn(0, "jobBgngHr", this.div00.form.cmbJobBgngDt1.value + obj.value);
        	}
        };

        /**************************************************************************
         * @name : cmbJobBgngDt1_canitemchange
         * @description : 작업종료시간 변경시
         ***************************************************************************/
        this.cmbJobEndDt1_onitemchanged = function(obj,e)
        {
        	if(!this.gfnIsNull(obj.value) && !this.gfnIsNull(this.div00.form.cmbJobEndDt2.value) ) {
        		this.dsCmproMst.setColumn(0, "jobEndHr", obj.value + this.div00.form.cmbJobEndDt2.value);
        	}
        };

        this.cmbJobEndDt2_onitemchanged = function(obj,e)
        {
        	if(!this.gfnIsNull(this.div00.form.cmbJobEndDt1.value) && !this.gfnIsNull(obj.value) ) {
        		this.dsCmproMst.setColumn(0, "jobEndHr", this.div00.form.cmbJobEndDt1.value + obj.value);
        	}
        };
        this.Button00_onclick = function(obj,e)
        {
        	if (obj.cssclass == "btn_WF_ACPlus") {
        		this.div00.visible = true;
        	} else {
        		this.div00.visible = false;
        	}
        	// 펼침(축소)
        	obj.cssclass = obj.cssclass == "btn_WF_ACPlus" ? "btn_WF_ACMinus" : "btn_WF_ACPlus";  // +,- css 변경
        	this.div00.form.resetScroll();

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.div00.form.chkJobEndDt.addEventHandler("onchanged",this.chkJobEndDt_onchanged,this);
            this.div00.form.cmbJobEndDt2.addEventHandler("onitemchanged",this.cmbJobEndDt2_onitemchanged,this);
            this.div00.form.cmbJobEndDt1.addEventHandler("onitemchanged",this.cmbJobEndDt1_onitemchanged,this);
            this.div00.form.Static08_00.addEventHandler("onclick",this.Static08_00_onclick,this);
            this.div00.form.btnDageJobInfo.addEventHandler("onclick",this.btnDageJobInfo_onclick,this);
            this.div00.form.chkJobBgngDt.addEventHandler("onchanged",this.chkJobBgngDt_onchanged,this);
            this.div00.form.cmbJobBgngDt2.addEventHandler("onitemchanged",this.cmbJobBgngDt2_onitemchanged,this);
            this.div00.form.cmbJobBgngDt1.addEventHandler("onitemchanged",this.cmbJobBgngDt1_onitemchanged,this);
            this.div00.form.chkCtrtHwrtInptYn3.addEventHandler("onchanged",this.chkCtrtHwrtInptYn3_onchanged,this);
            this.div00.form.chkCtrtHwrtInptYn2.addEventHandler("onchanged",this.chkCtrtHwrtInptYn2_onchanged,this);
            this.div00.form.chkCtrtHwrtInptYn1.addEventHandler("onchanged",this.chkCtrtHwrtInptYn1_onchanged,this);
        };
        this.loadIncludeScript("CST016M02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
