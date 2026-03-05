(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST011M00_07");
            this.set_titletext("위해물품 출력(출력)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staSubTitle","270","55","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("문서출력");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrtc","1185","20","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","1340","55","209","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnPrtc\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panTitle","270","55","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("3");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("divPrtc","1380","20","100.00%","211",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("신청정보");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrtcInfo3","535","280","250","34",null,null,null,null,null,null,this.divPrtc.form);
            obj.set_taborder("3");
            obj.set_text("보호구역내 보안위해물품 사용승인서 출력");
            obj.set_fittocontents("width");
            this.divPrtc.addChild(obj.name, obj);

            obj = new Static("staPrtcInfo","535","317","100%","35",null,null,null,null,null,null,this.divPrtc.form);
            obj.set_taborder("4");
            obj.set_text(" 보호구역 위해물품 출력 시 신규 위해물품 일괄 업로드에 사용하실 수 있습니다.(사진 제외)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divPrtc.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00_00","535","151","100%","190",null,null,null,null,null,null,this.divPrtc.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnPrtcInfo1\"/><PanelItem id=\"PanelItem02\" componentid=\"btnPrtcInfo2\"/><PanelItem id=\"PanelItem03\" componentid=\"btnPrtcInfo3\"/><PanelItem id=\"PanelItem05\" componentid=\"btnPrtcInfo4\"/><PanelItem id=\"PanelItem04\" componentid=\"staPrtcInfo\"/></Contents>");
            this.divPrtc.addChild(obj.name, obj);

            obj = new Button("btnPrtcInfo1","535","200","293","34",null,null,null,null,null,null,this.divPrtc.form);
            obj.set_taborder("1");
            obj.set_text("보호구역내 보안위해물품 사용 관련 준수사항 출력");
            obj.set_fittocontents("width");
            this.divPrtc.addChild(obj.name, obj);

            obj = new Button("btnPrtcInfo2","535","242","226","34",null,null,null,null,null,null,this.divPrtc.form);
            obj.set_taborder("2");
            obj.set_text("보호구역내 보안위해물품 스티커 출력");
            obj.set_fittocontents("width");
            this.divPrtc.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","0","100.00%","211",null,null,null,null,null,null,this.divPrtc.form);
            obj.set_taborder("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_horizontalgap("20");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00_00\"/></Contents>");
            this.divPrtc.addChild(obj.name, obj);

            obj = new Button("btnPrtcInfo4","535","280","218","34",null,null,null,null,null,null,this.divPrtc.form);
            obj.set_taborder("6");
            obj.set_text("보호구역 위해물품 목록(Excel)출력");
            obj.set_fittocontents("width");
            this.divPrtc.addChild(obj.name, obj);

            obj = new Static("staSubTitle00","10","30","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("스티커출력");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btnStkr","101","16","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","1110","30","179","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnStkr\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panTitle02","10","10","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("8");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("divStkr","0","352","100.00%","415",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("신청정보");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_01_00","0","-352","100%","46",null,null,null,null,null,null,this.divStkr.form);
            obj.set_taborder("15");
            obj.set_text("스티커 수령일시");
            obj.set_cssclass("sta_WF_Label_E");
            this.divStkr.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01","0","-351","100%","46",null,null,null,null,null,null,this.divStkr.form);
            obj.set_taborder("2");
            obj.set_text("보호구역위해물품 스티커출력여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divStkr.addChild(obj.name, obj);

            obj = new Panel("pan_04_00_00","20.00","-351","300","86",null,null,null,null,null,null,this.divStkr.form);
            obj.set_taborder("1");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoPrtcZoneDgadsCmdtyStkrOtptYn\"/></Contents>");
            this.divStkr.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_01","0","-351","100%","46",null,null,null,null,null,null,this.divStkr.form);
            obj.set_taborder("4");
            obj.set_text("스티커 출력자");
            obj.set_cssclass("sta_WF_Label_E");
            this.divStkr.addChild(obj.name, obj);

            obj = new Edit("edtStkrPrntrNm","0","-306","100%","40",null,null,null,null,null,null,this.divStkr.form);
            obj.set_taborder("5");
            obj.set_text("");
            this.divStkr.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00","650","-351","300","86",null,null,null,null,null,null,this.divStkr.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtStkrPrntrNm\"/></Contents>");
            this.divStkr.addChild(obj.name, obj);

            obj = new Button("btnStkrPrtc2","0","-310","260","34",null,null,null,null,null,null,this.divStkr.form);
            obj.set_taborder("10");
            obj.set_text("보호구역내 보안위해물품 스티커 출력(한장)");
            obj.set_fittocontents("width");
            this.divStkr.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","31","100%","40",null,null,null,null,null,null,this.divStkr.form);
            obj.set_taborder("18");
            obj.set_horizontalgap("10");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"calStkrRcvYmd\"/><PanelItem id=\"PanelItem01\" componentid=\"medtStkrRcvDt\"/><PanelItem id=\"PanelItem02\" componentid=\"btnSetDt1\"/></Contents>");
            this.divStkr.addChild(obj.name, obj);

            obj = new Panel("pan06","1420","384","100.00%","96",null,null,null,null,null,null,this.divStkr.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"pan04_01_00\"/></Contents>");
            this.divStkr.addChild(obj.name, obj);

            obj = new Radio("rdoPrtcZoneDgadsCmdtyStkrOtptYn","145","58","280","40",null,null,null,null,null,null,this.divStkr.form);
            obj.set_taborder("6");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divStkr_form_rdoPrtcZoneDgadsCmdtyStkrOtptYn_innerdataset = new nexacro.NormalDataset("divStkr_form_rdoPrtcZoneDgadsCmdtyStkrOtptYn_innerdataset", obj);
            divStkr_form_rdoPrtcZoneDgadsCmdtyStkrOtptYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divStkr_form_rdoPrtcZoneDgadsCmdtyStkrOtptYn_innerdataset);
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.divStkr.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00_00","20","96","100%","212",null,null,null,null,null,null,this.divStkr.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03_00_00_01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"btnStkrPrtc1\"/><PanelItem id=\"PanelItem01\" componentid=\"btnStkrPrtc2\"/><PanelItem id=\"PanelItem04\" componentid=\"btnStkrPrtc3\"/><PanelItem id=\"PanelItem05\" componentid=\"btnStkrPrtc4\"/></Contents>");
            this.divStkr.addChild(obj.name, obj);

            obj = new Button("btnStkrPrtc1","0","-351","226","34",null,null,null,null,null,null,this.divStkr.form);
            obj.set_taborder("9");
            obj.set_text("보호구역내 보안위해물품 스티커 출력");
            obj.set_fittocontents("width");
            this.divStkr.addChild(obj.name, obj);

            obj = new Panel("Panel02_01","595","141","100.00%","223",null,null,null,null,null,null,this.divStkr.form);
            obj.set_taborder("7");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_horizontalgap("20");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00_00\"/></Contents>");
            this.divStkr.addChild(obj.name, obj);

            obj = new Button("btnStkrPrtc3","1026","243","300","33",null,null,null,null,null,null,this.divStkr.form);
            obj.set_taborder("22");
            obj.set_text("보호구역내 보안위해물품 스티커 출력(한장) 테스트");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.divStkr.addChild(obj.name, obj);

            obj = new Button("btnStkrPrtc4","1026","201","266","33",null,null,null,null,null,null,this.divStkr.form);
            obj.set_taborder("23");
            obj.set_text("보호구역내 보안위해물품 스티커 출력 테스트");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.divStkr.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01_01","40","105","47.66%","46",null,null,null,null,null,null,this.divStkr.form);
            obj.set_taborder("21");
            obj.set_text("스티커출력(관리자)");
            obj.set_cssclass("sta_WF_Label");
            this.divStkr.addChild(obj.name, obj);

            obj = new Button("btnSetDt1","933","251","40","40",null,null,null,null,null,null,this.divStkr.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_MDI_Prev");
            this.divStkr.addChild(obj.name, obj);

            obj = new MaskEdit("medtStkrRcvDt","831","255","90","40",null,null,null,null,null,null,this.divStkr.form);
            obj.set_taborder("19");
            obj.set_type("string");
            obj.set_format("##:##");
            this.divStkr.addChild(obj.name, obj);

            obj = new Calendar("calStkrRcvYmd","736","242","150","40",null,null,null,null,null,null,this.divStkr.form);
            obj.set_taborder("17");
            obj.set_dateformat("yyyy-MM-dd");
            this.divStkr.addChild(obj.name, obj);

            obj = new Panel("pan06_00","1420","384","100.00%","96",null,null,null,null,null,null,this.divStkr.form);
            obj.set_taborder("11");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"pan04_01_00_00\"/></Contents>");
            this.divStkr.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01_00","0","-352","100%","46",null,null,null,null,null,null,this.divStkr.form);
            obj.set_taborder("13");
            obj.set_text("보호구역위해물품 스티커 수령여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divStkr.addChild(obj.name, obj);

            obj = new Panel("pan_04_00_00_00","20.00","-352","300","86",null,null,null,null,null,null,this.divStkr.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoPrtcZoneDgadsCmdtyStkrRcvYn\"/></Contents>");
            this.divStkr.addChild(obj.name, obj);

            obj = new Radio("rdoPrtcZoneDgadsCmdtyStkrRcvYn","145","58","100%","40",null,null,null,null,null,null,this.divStkr.form);
            obj.set_taborder("16");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divStkr_form_rdoPrtcZoneDgadsCmdtyStkrRcvYn_innerdataset = new nexacro.NormalDataset("divStkr_form_rdoPrtcZoneDgadsCmdtyStkrRcvYn_innerdataset", obj);
            divStkr_form_rdoPrtcZoneDgadsCmdtyStkrRcvYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divStkr_form_rdoPrtcZoneDgadsCmdtyStkrRcvYn_innerdataset);
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.divStkr.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00_00","650","-352","300","86",null,null,null,null,null,null,this.divStkr.form);
            obj.set_taborder("14");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/></Contents>");
            this.divStkr.addChild(obj.name, obj);

            obj = new Static("staSubTitle00_00","20","40","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("레이저마킹");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btnLaser","111","26","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00","1120","40","179","50",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnLaser\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panTitle03","0","286","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("13");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("divLaser","0","772","100.00%","508",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("신청정보");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01","0","-351","100%","46",null,null,null,null,null,null,this.divLaser.form);
            obj.set_taborder("2");
            obj.set_text("보호구역위해물품 레이져마킹각인 여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divLaser.addChild(obj.name, obj);

            obj = new Panel("pan_04_00_00","20.00","-351","300","86",null,null,null,null,null,null,this.divLaser.form);
            obj.set_taborder("1");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoPrtcZoneDgadsCmdtyLaserMarkgEngvgYn\"/></Contents>");
            this.divLaser.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_01","0","-351","100%","46",null,null,null,null,null,null,this.divLaser.form);
            obj.set_taborder("4");
            obj.set_text("레이져마킹 각인자");
            obj.set_cssclass("sta_WF_Label_E");
            this.divLaser.addChild(obj.name, obj);

            obj = new Edit("edtLaserMarkgEngvrNm","0","-306","100%","40",null,null,null,null,null,null,this.divLaser.form);
            obj.set_taborder("5");
            obj.set_text("");
            this.divLaser.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00","650","-351","300","86",null,null,null,null,null,null,this.divLaser.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtLaserMarkgEngvrNm\"/></Contents>");
            this.divLaser.addChild(obj.name, obj);

            obj = new Button("btnLaserPrtc2","0","-310","226","34",null,null,null,null,null,null,this.divLaser.form);
            obj.set_taborder("10");
            obj.set_text("보호구역내 보안위해물품 레이저마킹 출력(한장)");
            obj.set_fittocontents("width");
            this.divLaser.addChild(obj.name, obj);

            obj = new Panel("pan06","1420","384","100.00%","96",null,null,null,null,null,null,this.divLaser.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"pan04_01_00\"/></Contents>");
            this.divLaser.addChild(obj.name, obj);

            obj = new Radio("rdoPrtcZoneDgadsCmdtyLaserMarkgEngvgYn","145","58","280","40",null,null,null,null,null,null,this.divLaser.form);
            obj.set_taborder("6");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divLaser_form_rdoPrtcZoneDgadsCmdtyLaserMarkgEngvgYn_innerdataset = new nexacro.NormalDataset("divLaser_form_rdoPrtcZoneDgadsCmdtyLaserMarkgEngvgYn_innerdataset", obj);
            divLaser_form_rdoPrtcZoneDgadsCmdtyLaserMarkgEngvgYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divLaser_form_rdoPrtcZoneDgadsCmdtyLaserMarkgEngvgYn_innerdataset);
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.divLaser.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00_00","20","-341","300","127",null,null,null,null,null,null,this.divLaser.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03_00_00_01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"btnLaserPrtc1\"/><PanelItem id=\"PanelItem01\" componentid=\"btnLaserPrtc2\"/></Contents>");
            this.divLaser.addChild(obj.name, obj);

            obj = new Button("btnLaserPrtc1","0","-351","226","34",null,null,null,null,null,null,this.divLaser.form);
            obj.set_taborder("9");
            obj.set_text("보호구역내 보안위해물품 레이저마킹 출력");
            obj.set_fittocontents("width");
            this.divLaser.addChild(obj.name, obj);

            obj = new Panel("Panel02_01","595","141","100.00%","150",null,null,null,null,null,null,this.divLaser.form);
            obj.set_taborder("7");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_horizontalgap("20");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00_00\"/></Contents>");
            this.divLaser.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01_01","30","142","47.66%","46",null,null,null,null,null,null,this.divLaser.form);
            obj.set_taborder("21");
            obj.set_text("레이져각인(관리자)");
            obj.set_cssclass("sta_WF_Label");
            this.divLaser.addChild(obj.name, obj);

            obj = new Button("btnSetDt2","933","251","40","40",null,null,null,null,null,null,this.divLaser.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_MDI_Prev");
            this.divLaser.addChild(obj.name, obj);

            obj = new MaskEdit("medtLaserMarkgCmdtyDt","831","255","90","40",null,null,null,null,null,null,this.divLaser.form);
            obj.set_taborder("19");
            obj.set_type("string");
            obj.set_format("##:##");
            this.divLaser.addChild(obj.name, obj);

            obj = new Calendar("calLaserMarkgCmdtyYmd","736","242","150","40",null,null,null,null,null,null,this.divLaser.form);
            obj.set_taborder("17");
            obj.set_dateformat("yyyy-MM-dd");
            this.divLaser.addChild(obj.name, obj);

            obj = new Panel("pan06_00","1420","384","100.00%","96",null,null,null,null,null,null,this.divLaser.form);
            obj.set_taborder("11");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"pan04_01_00_00\"/></Contents>");
            this.divLaser.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00_00_01","320","395","300","86",null,null,null,null,null,null,this.divLaser.form);
            obj.set_taborder("29");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_01_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_01\"/></Contents>");
            this.divLaser.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","0","-698","100%","40",null,null,null,null,null,null,this.divLaser.form);
            obj.set_taborder("31");
            obj.set_horizontalgap("10");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"calLaserMarkgCmdtyAcptnYmd\"/><PanelItem id=\"PanelItem01\" componentid=\"medtLaserMarkgCmdtyAcptnDt\"/><PanelItem id=\"PanelItem02\" componentid=\"btnSetDt4\"/></Contents>");
            this.divLaser.addChild(obj.name, obj);

            obj = new Calendar("calLaserMarkgCmdtyAcptnYmd","0","-744","150","40",null,null,null,null,null,null,this.divLaser.form);
            obj.set_taborder("32");
            obj.set_dateformat("yyyy-MM-dd");
            this.divLaser.addChild(obj.name, obj);

            obj = new MaskEdit("medtLaserMarkgCmdtyAcptnDt","160","-744","90","40",null,null,null,null,null,null,this.divLaser.form);
            obj.set_taborder("33");
            obj.set_type("string");
            obj.set_format("##:##");
            this.divLaser.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_01_00_01","0","-744","100%","46",null,null,null,null,null,null,this.divLaser.form);
            obj.set_taborder("30");
            obj.set_text("레이져마킹 물품인수일예정일");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_fittocontents("width");
            this.divLaser.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01_00","0","-352","100%","46",null,null,null,null,null,null,this.divLaser.form);
            obj.set_taborder("13");
            obj.set_text("보호구역위해물품 레이져마킹 수령여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divLaser.addChild(obj.name, obj);

            obj = new Panel("pan_04_00_00_00","20.00","-352","300","86",null,null,null,null,null,null,this.divLaser.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoPrtcZoneDgadsCmdtyLaserMarkgRcvYn\"/></Contents>");
            this.divLaser.addChild(obj.name, obj);

            obj = new Radio("rdoPrtcZoneDgadsCmdtyLaserMarkgRcvYn","145","58","100%","40",null,null,null,null,null,null,this.divLaser.form);
            obj.set_taborder("16");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divLaser_form_rdoPrtcZoneDgadsCmdtyLaserMarkgRcvYn_innerdataset = new nexacro.NormalDataset("divLaser_form_rdoPrtcZoneDgadsCmdtyLaserMarkgRcvYn_innerdataset", obj);
            divLaser_form_rdoPrtcZoneDgadsCmdtyLaserMarkgRcvYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divLaser_form_rdoPrtcZoneDgadsCmdtyLaserMarkgRcvYn_innerdataset);
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.divLaser.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00_00","650","-352","300","86",null,null,null,null,null,null,this.divLaser.form);
            obj.set_taborder("14");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/></Contents>");
            this.divLaser.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_01_00_00","0","-352","100%","46",null,null,null,null,null,null,this.divLaser.form);
            obj.set_taborder("22");
            obj.set_text("레이져마킹 수령일시");
            obj.set_cssclass("sta_WF_Label_E");
            this.divLaser.addChild(obj.name, obj);

            obj = new Calendar("calLaserMarkgRcvYmd","736","242","150","40",null,null,null,null,null,null,this.divLaser.form);
            obj.set_taborder("23");
            obj.set_dateformat("yyyy-MM-dd");
            this.divLaser.addChild(obj.name, obj);

            obj = new MaskEdit("medtLaserMarkgRcvDt","831","255","90","40",null,null,null,null,null,null,this.divLaser.form);
            obj.set_taborder("24");
            obj.set_type("string");
            obj.set_format("##:##");
            this.divLaser.addChild(obj.name, obj);

            obj = new Button("btnSetDt3","933","251","40","40",null,null,null,null,null,null,this.divLaser.form);
            obj.set_taborder("25");
            obj.set_cssclass("btn_MDI_Prev");
            this.divLaser.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","0","31","100%","40",null,null,null,null,null,null,this.divLaser.form);
            obj.set_taborder("26");
            obj.set_horizontalgap("10");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"calLaserMarkgRcvYmd\"/><PanelItem id=\"PanelItem01\" componentid=\"medtLaserMarkgRcvDt\"/><PanelItem id=\"PanelItem02\" componentid=\"btnSetDt3\"/></Contents>");
            this.divLaser.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00_00_00","650","-352","300","86",null,null,null,null,null,null,this.divLaser.form);
            obj.set_taborder("27");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00\"/></Contents>");
            this.divLaser.addChild(obj.name, obj);

            obj = new Panel("pan06_00_00","1420","384","100.00%","96",null,null,null,null,null,null,this.divLaser.form);
            obj.set_taborder("28");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"pan04_01_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan04_01_00_00_01\"/></Contents>");
            this.divLaser.addChild(obj.name, obj);

            obj = new Button("btnSetDt4","260","-744","40","40",null,null,null,null,null,null,this.divLaser.form);
            obj.set_taborder("34");
            obj.set_cssclass("btn_MDI_Prev");
            this.divLaser.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_01_00","0","-352","100%","46",null,null,null,null,null,null,this.divLaser.form);
            obj.set_taborder("15");
            obj.set_text("레이져마킹 물품인도일");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_fittocontents("width");
            this.divLaser.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","31","100%","40",null,null,null,null,null,null,this.divLaser.form);
            obj.set_taborder("18");
            obj.set_horizontalgap("10");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"calLaserMarkgCmdtyYmd\"/><PanelItem id=\"PanelItem01\" componentid=\"medtLaserMarkgCmdtyDt\"/><PanelItem id=\"PanelItem02\" componentid=\"btnSetDt2\"/></Contents>");
            this.divLaser.addChild(obj.name, obj);

            obj = new Panel("panForm","0","0","100.00%","2000",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem02\" componentid=\"divPrtc\"/><PanelItem id=\"PanelItem03\" componentid=\"panTitle02\"/><PanelItem id=\"PanelItem04\" componentid=\"divStkr\"/><PanelItem id=\"PanelItem05\" componentid=\"panTitle03\"/><PanelItem id=\"PanelItem06\" componentid=\"divLaser\"/></Contents>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divPrtc.form
            obj = new Layout("default","",0,0,this.divPrtc.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnPrtcInfo3.set_taborder("3");
                p.btnPrtcInfo3.set_text("보호구역내 보안위해물품 사용승인서 출력");
                p.btnPrtcInfo3.set_fittocontents("width");
                p.btnPrtcInfo3.move("535","280","250","34",null,null);

                p.staPrtcInfo.set_taborder("4");
                p.staPrtcInfo.set_text(" 보호구역 위해물품 출력 시 신규 위해물품 일괄 업로드에 사용하실 수 있습니다.(사진 제외)");
                p.staPrtcInfo.set_cssclass("sta_WF_Des");
                p.staPrtcInfo.set_fittocontents("height");
                p.staPrtcInfo.move("535","317","100%","35",null,null);

                p.Panel02_00_00_00_00.set_taborder("5");
                p.Panel02_00_00_00_00.set_type("vertical");
                p.Panel02_00_00_00_00.set_fittocontents("height");
                p.Panel02_00_00_00_00.set_verticalgap("8");
                p.Panel02_00_00_00_00.move("535","151","100%","190",null,null);

                p.btnPrtcInfo1.set_taborder("1");
                p.btnPrtcInfo1.set_text("보호구역내 보안위해물품 사용 관련 준수사항 출력");
                p.btnPrtcInfo1.set_fittocontents("width");
                p.btnPrtcInfo1.move("535","200","293","34",null,null);

                p.btnPrtcInfo2.set_taborder("2");
                p.btnPrtcInfo2.set_text("보호구역내 보안위해물품 스티커 출력");
                p.btnPrtcInfo2.set_fittocontents("width");
                p.btnPrtcInfo2.move("535","242","226","34",null,null);

                p.Panel02.set_taborder("0");
                p.Panel02.set_spacing("10px 20px 10px 20px");
                p.Panel02.set_cssclass("pal_WF_DtlBg");
                p.Panel02.set_horizontalgap("20");
                p.Panel02.set_flexwrap("wrap");
                p.Panel02.set_fittocontents("height");
                p.Panel02.move("0","0","100.00%","211",null,null);

                p.btnPrtcInfo4.set_taborder("6");
                p.btnPrtcInfo4.set_text("보호구역 위해물품 목록(Excel)출력");
                p.btnPrtcInfo4.set_fittocontents("width");
                p.btnPrtcInfo4.move("535","280","218","34",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("0");
            this.divPrtc.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divPrtc.form
            obj = new Layout("mobile","",0,0,this.divPrtc.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("0");
            this.divPrtc.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divPrtc.form
            obj = new Layout("Layout0","",0,0,this.divPrtc.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("0");
            this.divPrtc.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divStkr.form
            obj = new Layout("default","",0,0,this.divStkr.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel03_01_00_01_00.set_taborder("15");
                p.staLabel03_01_00_01_00.set_text("스티커 수령일시");
                p.staLabel03_01_00_01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_01_00_01_00.move("0","-352","100%","46",null,null);

                p.staLabel03_00_00_01.set_taborder("2");
                p.staLabel03_00_00_01.set_text("보호구역위해물품 스티커출력여부");
                p.staLabel03_00_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_01.move("0","-351","100%","46",null,null);

                p.pan_04_00_00.set_taborder("1");
                p.pan_04_00_00.set_type("vertical");
                p.pan_04_00_00.set_flexgrow("1");
                p.pan_04_00_00.move("20.00","-351","300","86",null,null);

                p.staLabel03_01_00_01.set_taborder("4");
                p.staLabel03_01_00_01.set_text("스티커 출력자");
                p.staLabel03_01_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel03_01_00_01.move("0","-351","100%","46",null,null);

                p.edtStkrPrntrNm.set_taborder("5");
                p.edtStkrPrntrNm.move("0","-306","100%","40",null,null);

                p.pan04_01_00.set_taborder("3");
                p.pan04_01_00.set_type("vertical");
                p.pan04_01_00.set_flexgrow("1");
                p.pan04_01_00.move("650","-351","300","86",null,null);

                p.btnStkrPrtc2.set_taborder("10");
                p.btnStkrPrtc2.set_text("보호구역내 보안위해물품 스티커 출력(한장)");
                p.btnStkrPrtc2.set_fittocontents("width");
                p.btnStkrPrtc2.move("0","-310","260","34",null,null);

                p.Panel00.set_taborder("18");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.set_verticalgap("4");
                p.Panel00.move("0","31","100%","40",null,null);

                p.pan06.set_taborder("0");
                p.pan06.set_horizontalgap("20");
                p.pan06.set_flexcrossaxiswrapalign("start");
                p.pan06.set_flexwrap("wrap");
                p.pan06.set_fittocontents("height");
                p.pan06.set_verticalgap("0");
                p.pan06.set_spacing("0px 20px 10px 20px");
                p.pan06.set_cssclass("pal_WF_DtlBg");
                p.pan06.move("1420","384","100.00%","96",null,null);

                p.rdoPrtcZoneDgadsCmdtyStkrOtptYn.set_taborder("6");
                p.rdoPrtcZoneDgadsCmdtyStkrOtptYn.set_fittocontents("width");
                p.rdoPrtcZoneDgadsCmdtyStkrOtptYn.set_innerdataset(divStkr_form_rdoPrtcZoneDgadsCmdtyStkrOtptYn_innerdataset);
                p.rdoPrtcZoneDgadsCmdtyStkrOtptYn.set_codecolumn("codecolumn");
                p.rdoPrtcZoneDgadsCmdtyStkrOtptYn.set_datacolumn("datacolumn");
                p.rdoPrtcZoneDgadsCmdtyStkrOtptYn.set_direction("vertical");
                p.rdoPrtcZoneDgadsCmdtyStkrOtptYn.set_value("0");
                p.rdoPrtcZoneDgadsCmdtyStkrOtptYn.set_index("0");
                p.rdoPrtcZoneDgadsCmdtyStkrOtptYn.move("145","58","280","40",null,null);

                p.Panel02_00_00_00_00.set_taborder("8");
                p.Panel02_00_00_00_00.set_type("vertical");
                p.Panel02_00_00_00_00.set_fittocontents("height");
                p.Panel02_00_00_00_00.set_verticalgap("8");
                p.Panel02_00_00_00_00.set_flexgrow("1");
                p.Panel02_00_00_00_00.move("20","96","100%","212",null,null);

                p.btnStkrPrtc1.set_taborder("9");
                p.btnStkrPrtc1.set_text("보호구역내 보안위해물품 스티커 출력");
                p.btnStkrPrtc1.set_fittocontents("width");
                p.btnStkrPrtc1.move("0","-351","226","34",null,null);

                p.Panel02_01.set_taborder("7");
                p.Panel02_01.set_spacing("0px 20px 10px 20px");
                p.Panel02_01.set_cssclass("pal_WF_DtlBg");
                p.Panel02_01.set_horizontalgap("20");
                p.Panel02_01.set_flexwrap("wrap");
                p.Panel02_01.set_fittocontents("height");
                p.Panel02_01.move("595","141","100.00%","223",null,null);

                p.btnStkrPrtc3.set_taborder("22");
                p.btnStkrPrtc3.set_text("보호구역내 보안위해물품 스티커 출력(한장) 테스트");
                p.btnStkrPrtc3.set_fittocontents("width");
                p.btnStkrPrtc3.set_visible("true");
                p.btnStkrPrtc3.move("1026","243","300","33",null,null);

                p.btnStkrPrtc4.set_taborder("23");
                p.btnStkrPrtc4.set_text("보호구역내 보안위해물품 스티커 출력 테스트");
                p.btnStkrPrtc4.set_fittocontents("width");
                p.btnStkrPrtc4.set_visible("true");
                p.btnStkrPrtc4.move("1026","201","266","33",null,null);

                p.staLabel03_00_00_01_01.set_taborder("21");
                p.staLabel03_00_00_01_01.set_text("스티커출력(관리자)");
                p.staLabel03_00_00_01_01.set_cssclass("sta_WF_Label");
                p.staLabel03_00_00_01_01.move("40","105","47.66%","46",null,null);

                p.btnSetDt1.set_taborder("20");
                p.btnSetDt1.set_cssclass("btn_MDI_Prev");
                p.btnSetDt1.move("933","251","40","40",null,null);

                p.medtStkrRcvDt.set_taborder("19");
                p.medtStkrRcvDt.set_type("string");
                p.medtStkrRcvDt.set_format("##:##");
                p.medtStkrRcvDt.move("831","255","90","40",null,null);

                p.calStkrRcvYmd.set_taborder("17");
                p.calStkrRcvYmd.set_dateformat("yyyy-MM-dd");
                p.calStkrRcvYmd.move("736","242","150","40",null,null);

                p.pan06_00.set_taborder("11");
                p.pan06_00.set_horizontalgap("20");
                p.pan06_00.set_flexcrossaxiswrapalign("start");
                p.pan06_00.set_flexwrap("wrap");
                p.pan06_00.set_fittocontents("height");
                p.pan06_00.set_verticalgap("0");
                p.pan06_00.set_spacing("0px 20px 10px 20px");
                p.pan06_00.set_cssclass("pal_WF_DtlBg");
                p.pan06_00.move("1420","384","100.00%","96",null,null);

                p.staLabel03_00_00_01_00.set_taborder("13");
                p.staLabel03_00_00_01_00.set_text("보호구역위해물품 스티커 수령여부");
                p.staLabel03_00_00_01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_01_00.move("0","-352","100%","46",null,null);

                p.pan_04_00_00_00.set_taborder("12");
                p.pan_04_00_00_00.set_type("vertical");
                p.pan_04_00_00_00.set_flexgrow("1");
                p.pan_04_00_00_00.move("20.00","-352","300","86",null,null);

                p.rdoPrtcZoneDgadsCmdtyStkrRcvYn.set_taborder("16");
                p.rdoPrtcZoneDgadsCmdtyStkrRcvYn.set_fittocontents("width");
                p.rdoPrtcZoneDgadsCmdtyStkrRcvYn.set_innerdataset(divStkr_form_rdoPrtcZoneDgadsCmdtyStkrRcvYn_innerdataset);
                p.rdoPrtcZoneDgadsCmdtyStkrRcvYn.set_codecolumn("codecolumn");
                p.rdoPrtcZoneDgadsCmdtyStkrRcvYn.set_datacolumn("datacolumn");
                p.rdoPrtcZoneDgadsCmdtyStkrRcvYn.set_direction("vertical");
                p.rdoPrtcZoneDgadsCmdtyStkrRcvYn.set_value("0");
                p.rdoPrtcZoneDgadsCmdtyStkrRcvYn.set_index("0");
                p.rdoPrtcZoneDgadsCmdtyStkrRcvYn.move("145","58","100%","40",null,null);

                p.pan04_01_00_00.set_taborder("14");
                p.pan04_01_00_00.set_type("vertical");
                p.pan04_01_00_00.set_flexgrow("1");
                p.pan04_01_00_00.move("650","-352","300","86",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("0");
            this.divStkr.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divStkr.form
            obj = new Layout("mobile","",0,0,this.divStkr.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("0");
            this.divStkr.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divStkr.form
            obj = new Layout("Layout0","",0,0,this.divStkr.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("0");
            this.divStkr.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divLaser.form
            obj = new Layout("default","",0,0,this.divLaser.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel03_00_00_01.set_taborder("2");
                p.staLabel03_00_00_01.set_text("보호구역위해물품 레이져마킹각인 여부");
                p.staLabel03_00_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_01.move("0","-351","100%","46",null,null);

                p.pan_04_00_00.set_taborder("1");
                p.pan_04_00_00.set_type("vertical");
                p.pan_04_00_00.set_flexgrow("1");
                p.pan_04_00_00.move("20.00","-351","300","86",null,null);

                p.staLabel03_01_00_01.set_taborder("4");
                p.staLabel03_01_00_01.set_text("레이져마킹 각인자");
                p.staLabel03_01_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel03_01_00_01.move("0","-351","100%","46",null,null);

                p.edtLaserMarkgEngvrNm.set_taborder("5");
                p.edtLaserMarkgEngvrNm.move("0","-306","100%","40",null,null);

                p.pan04_01_00.set_taborder("3");
                p.pan04_01_00.set_type("vertical");
                p.pan04_01_00.set_flexgrow("1");
                p.pan04_01_00.move("650","-351","300","86",null,null);

                p.btnLaserPrtc2.set_taborder("10");
                p.btnLaserPrtc2.set_text("보호구역내 보안위해물품 레이저마킹 출력(한장)");
                p.btnLaserPrtc2.set_fittocontents("width");
                p.btnLaserPrtc2.move("0","-310","226","34",null,null);

                p.pan06.set_taborder("0");
                p.pan06.set_horizontalgap("20");
                p.pan06.set_flexcrossaxiswrapalign("start");
                p.pan06.set_flexwrap("wrap");
                p.pan06.set_fittocontents("height");
                p.pan06.set_verticalgap("0");
                p.pan06.set_spacing("0px 20px 10px 20px");
                p.pan06.set_cssclass("pal_WF_DtlBg");
                p.pan06.move("1420","384","100.00%","96",null,null);

                p.rdoPrtcZoneDgadsCmdtyLaserMarkgEngvgYn.set_taborder("6");
                p.rdoPrtcZoneDgadsCmdtyLaserMarkgEngvgYn.set_fittocontents("width");
                p.rdoPrtcZoneDgadsCmdtyLaserMarkgEngvgYn.set_innerdataset(divLaser_form_rdoPrtcZoneDgadsCmdtyLaserMarkgEngvgYn_innerdataset);
                p.rdoPrtcZoneDgadsCmdtyLaserMarkgEngvgYn.set_codecolumn("codecolumn");
                p.rdoPrtcZoneDgadsCmdtyLaserMarkgEngvgYn.set_datacolumn("datacolumn");
                p.rdoPrtcZoneDgadsCmdtyLaserMarkgEngvgYn.set_direction("vertical");
                p.rdoPrtcZoneDgadsCmdtyLaserMarkgEngvgYn.set_value("0");
                p.rdoPrtcZoneDgadsCmdtyLaserMarkgEngvgYn.set_index("0");
                p.rdoPrtcZoneDgadsCmdtyLaserMarkgEngvgYn.move("145","58","280","40",null,null);

                p.Panel02_00_00_00_00.set_taborder("8");
                p.Panel02_00_00_00_00.set_type("vertical");
                p.Panel02_00_00_00_00.set_fittocontents("height");
                p.Panel02_00_00_00_00.set_verticalgap("8");
                p.Panel02_00_00_00_00.set_flexgrow("1");
                p.Panel02_00_00_00_00.move("20","-341","300","127",null,null);

                p.btnLaserPrtc1.set_taborder("9");
                p.btnLaserPrtc1.set_text("보호구역내 보안위해물품 레이저마킹 출력");
                p.btnLaserPrtc1.set_fittocontents("width");
                p.btnLaserPrtc1.move("0","-351","226","34",null,null);

                p.Panel02_01.set_taborder("7");
                p.Panel02_01.set_spacing("0px 20px 10px 20px");
                p.Panel02_01.set_cssclass("pal_WF_DtlBg");
                p.Panel02_01.set_horizontalgap("20");
                p.Panel02_01.set_flexwrap("wrap");
                p.Panel02_01.set_fittocontents("height");
                p.Panel02_01.move("595","141","100.00%","150",null,null);

                p.staLabel03_00_00_01_01.set_taborder("21");
                p.staLabel03_00_00_01_01.set_text("레이져각인(관리자)");
                p.staLabel03_00_00_01_01.set_cssclass("sta_WF_Label");
                p.staLabel03_00_00_01_01.move("30","142","47.66%","46",null,null);

                p.btnSetDt2.set_taborder("20");
                p.btnSetDt2.set_cssclass("btn_MDI_Prev");
                p.btnSetDt2.move("933","251","40","40",null,null);

                p.medtLaserMarkgCmdtyDt.set_taborder("19");
                p.medtLaserMarkgCmdtyDt.set_type("string");
                p.medtLaserMarkgCmdtyDt.set_format("##:##");
                p.medtLaserMarkgCmdtyDt.move("831","255","90","40",null,null);

                p.calLaserMarkgCmdtyYmd.set_taborder("17");
                p.calLaserMarkgCmdtyYmd.set_dateformat("yyyy-MM-dd");
                p.calLaserMarkgCmdtyYmd.move("736","242","150","40",null,null);

                p.pan06_00.set_taborder("11");
                p.pan06_00.set_horizontalgap("20");
                p.pan06_00.set_flexcrossaxiswrapalign("start");
                p.pan06_00.set_flexwrap("wrap");
                p.pan06_00.set_fittocontents("height");
                p.pan06_00.set_verticalgap("0");
                p.pan06_00.set_spacing("0px 20px 10px 20px");
                p.pan06_00.set_cssclass("pal_WF_DtlBg");
                p.pan06_00.move("1420","384","100.00%","96",null,null);

                p.pan04_01_00_00_01.set_taborder("29");
                p.pan04_01_00_00_01.set_type("vertical");
                p.pan04_01_00_00_01.set_flexgrow("1");
                p.pan04_01_00_00_01.move("320","395","300","86",null,null);

                p.Panel00_01.set_taborder("31");
                p.Panel00_01.set_horizontalgap("10");
                p.Panel00_01.set_verticalgap("4");
                p.Panel00_01.move("0","-698","100%","40",null,null);

                p.calLaserMarkgCmdtyAcptnYmd.set_taborder("32");
                p.calLaserMarkgCmdtyAcptnYmd.set_dateformat("yyyy-MM-dd");
                p.calLaserMarkgCmdtyAcptnYmd.move("0","-744","150","40",null,null);

                p.medtLaserMarkgCmdtyAcptnDt.set_taborder("33");
                p.medtLaserMarkgCmdtyAcptnDt.set_type("string");
                p.medtLaserMarkgCmdtyAcptnDt.set_format("##:##");
                p.medtLaserMarkgCmdtyAcptnDt.move("160","-744","90","40",null,null);

                p.staLabel03_01_00_01_00_01.set_taborder("30");
                p.staLabel03_01_00_01_00_01.set_text("레이져마킹 물품인수일예정일");
                p.staLabel03_01_00_01_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel03_01_00_01_00_01.set_fittocontents("width");
                p.staLabel03_01_00_01_00_01.move("0","-744","100%","46",null,null);

                p.staLabel03_00_00_01_00.set_taborder("13");
                p.staLabel03_00_00_01_00.set_text("보호구역위해물품 레이져마킹 수령여부");
                p.staLabel03_00_00_01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_01_00.move("0","-352","100%","46",null,null);

                p.pan_04_00_00_00.set_taborder("12");
                p.pan_04_00_00_00.set_type("vertical");
                p.pan_04_00_00_00.set_flexgrow("1");
                p.pan_04_00_00_00.move("20.00","-352","300","86",null,null);

                p.rdoPrtcZoneDgadsCmdtyLaserMarkgRcvYn.set_taborder("16");
                p.rdoPrtcZoneDgadsCmdtyLaserMarkgRcvYn.set_fittocontents("width");
                p.rdoPrtcZoneDgadsCmdtyLaserMarkgRcvYn.set_innerdataset(divLaser_form_rdoPrtcZoneDgadsCmdtyLaserMarkgRcvYn_innerdataset);
                p.rdoPrtcZoneDgadsCmdtyLaserMarkgRcvYn.set_codecolumn("codecolumn");
                p.rdoPrtcZoneDgadsCmdtyLaserMarkgRcvYn.set_datacolumn("datacolumn");
                p.rdoPrtcZoneDgadsCmdtyLaserMarkgRcvYn.set_direction("vertical");
                p.rdoPrtcZoneDgadsCmdtyLaserMarkgRcvYn.set_value("0");
                p.rdoPrtcZoneDgadsCmdtyLaserMarkgRcvYn.set_index("0");
                p.rdoPrtcZoneDgadsCmdtyLaserMarkgRcvYn.move("145","58","100%","40",null,null);

                p.pan04_01_00_00.set_taborder("14");
                p.pan04_01_00_00.set_type("vertical");
                p.pan04_01_00_00.set_flexgrow("1");
                p.pan04_01_00_00.move("650","-352","300","86",null,null);

                p.staLabel03_01_00_01_00_00.set_taborder("22");
                p.staLabel03_01_00_01_00_00.set_text("레이져마킹 수령일시");
                p.staLabel03_01_00_01_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_01_00_01_00_00.move("0","-352","100%","46",null,null);

                p.calLaserMarkgRcvYmd.set_taborder("23");
                p.calLaserMarkgRcvYmd.set_dateformat("yyyy-MM-dd");
                p.calLaserMarkgRcvYmd.move("736","242","150","40",null,null);

                p.medtLaserMarkgRcvDt.set_taborder("24");
                p.medtLaserMarkgRcvDt.set_type("string");
                p.medtLaserMarkgRcvDt.set_format("##:##");
                p.medtLaserMarkgRcvDt.move("831","255","90","40",null,null);

                p.btnSetDt3.set_taborder("25");
                p.btnSetDt3.set_cssclass("btn_MDI_Prev");
                p.btnSetDt3.move("933","251","40","40",null,null);

                p.Panel00_00.set_taborder("26");
                p.Panel00_00.set_horizontalgap("10");
                p.Panel00_00.set_verticalgap("4");
                p.Panel00_00.move("0","31","100%","40",null,null);

                p.pan04_01_00_00_00.set_taborder("27");
                p.pan04_01_00_00_00.set_type("vertical");
                p.pan04_01_00_00_00.set_flexgrow("1");
                p.pan04_01_00_00_00.move("650","-352","300","86",null,null);

                p.pan06_00_00.set_taborder("28");
                p.pan06_00_00.set_horizontalgap("20");
                p.pan06_00_00.set_flexcrossaxiswrapalign("start");
                p.pan06_00_00.set_flexwrap("wrap");
                p.pan06_00_00.set_fittocontents("height");
                p.pan06_00_00.set_verticalgap("0");
                p.pan06_00_00.set_spacing("0px 20px 10px 20px");
                p.pan06_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan06_00_00.move("1420","384","100.00%","96",null,null);

                p.btnSetDt4.set_taborder("34");
                p.btnSetDt4.set_cssclass("btn_MDI_Prev");
                p.btnSetDt4.move("260","-744","40","40",null,null);

                p.staLabel03_01_00_01_00.set_taborder("15");
                p.staLabel03_01_00_01_00.set_text("레이져마킹 물품인도일");
                p.staLabel03_01_00_01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_01_00_01_00.set_fittocontents("width");
                p.staLabel03_01_00_01_00.move("0","-352","100%","46",null,null);

                p.Panel00.set_taborder("18");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.set_verticalgap("4");
                p.Panel00.move("0","31","100%","40",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("0");
            this.divLaser.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divLaser.form
            obj = new Layout("mobile","",0,0,this.divLaser.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("0");
            this.divLaser.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divLaser.form
            obj = new Layout("Layout0","",0,0,this.divLaser.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("0");
            this.divLaser.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("위해물품 출력(출력)");

                p.staSubTitle.set_taborder("0");
                p.staSubTitle.set_text("문서출력");
                p.staSubTitle.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle.move("270","55","100%","50",null,null);

                p.btnPrtc.set_taborder("1");
                p.btnPrtc.set_cssclass("btn_WF_ACMinus");
                p.btnPrtc.move("1185","20","34","34",null,null);

                p.Panel02.set_taborder("2");
                p.Panel02.set_cssclass("pal_WF_TitBtnBg");
                p.Panel02.set_flexcrossaxisalign("center");
                p.Panel02.set_flexmainaxisalign("end");
                p.Panel02.set_horizontalgap("10");
                p.Panel02.set_spacing("0px 10px 0px 10px");
                p.Panel02.move("1340","55","209","50",null,null);

                p.panTitle.set_taborder("3");
                p.panTitle.set_fittocontents("none");
                p.panTitle.set_flexcrossaxisalign("end");
                p.panTitle.set_minheight("70");
                p.panTitle.set_maxheight("");
                p.panTitle.move("270","55","100.00%","70",null,null);

                p.divPrtc.set_taborder("4");
                p.divPrtc.set_text("신청정보");
                p.divPrtc.set_cssclass("div_WF_Bg");
                p.divPrtc.set_fittocontents("height");
                p.divPrtc.set_formscrollbartype("none none");
                p.divPrtc.set_formscrolltype("none");
                p.divPrtc.move("1380","20","100.00%","211",null,null);

                p.staSubTitle00.set_taborder("5");
                p.staSubTitle00.set_text("스티커출력");
                p.staSubTitle00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle00.move("10","30","100%","50",null,null);

                p.btnStkr.set_taborder("6");
                p.btnStkr.set_cssclass("btn_WF_ACMinus");
                p.btnStkr.move("101","16","34","34",null,null);

                p.Panel02_00.set_taborder("7");
                p.Panel02_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel02_00.set_flexcrossaxisalign("center");
                p.Panel02_00.set_flexmainaxisalign("end");
                p.Panel02_00.set_horizontalgap("10");
                p.Panel02_00.set_spacing("0px 10px 0px 10px");
                p.Panel02_00.move("1110","30","179","50",null,null);

                p.panTitle02.set_taborder("8");
                p.panTitle02.set_fittocontents("none");
                p.panTitle02.set_flexcrossaxisalign("end");
                p.panTitle02.set_minheight("70");
                p.panTitle02.set_maxheight("");
                p.panTitle02.move("10","10","100.00%","70",null,null);

                p.divStkr.set_taborder("9");
                p.divStkr.set_text("신청정보");
                p.divStkr.set_cssclass("div_WF_Bg");
                p.divStkr.set_fittocontents("height");
                p.divStkr.set_formscrollbartype("none none");
                p.divStkr.set_formscrolltype("none");
                p.divStkr.move("0","352","100.00%","415",null,null);

                p.staSubTitle00_00.set_taborder("10");
                p.staSubTitle00_00.set_text("레이저마킹");
                p.staSubTitle00_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle00_00.move("20","40","100%","50",null,null);

                p.btnLaser.set_taborder("11");
                p.btnLaser.set_cssclass("btn_WF_ACMinus");
                p.btnLaser.move("111","26","34","34",null,null);

                p.Panel02_00_00.set_taborder("12");
                p.Panel02_00_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel02_00_00.set_flexcrossaxisalign("center");
                p.Panel02_00_00.set_flexmainaxisalign("end");
                p.Panel02_00_00.set_horizontalgap("10");
                p.Panel02_00_00.set_spacing("0px 10px 0px 10px");
                p.Panel02_00_00.move("1120","40","179","50",null,null);

                p.panTitle03.set_taborder("13");
                p.panTitle03.set_fittocontents("none");
                p.panTitle03.set_flexcrossaxisalign("end");
                p.panTitle03.set_minheight("70");
                p.panTitle03.set_maxheight("");
                p.panTitle03.move("0","286","100.00%","70",null,null);

                p.divLaser.set_taborder("14");
                p.divLaser.set_text("신청정보");
                p.divLaser.set_cssclass("div_WF_Bg");
                p.divLaser.set_fittocontents("height");
                p.divLaser.set_formscrollbartype("none none");
                p.divLaser.set_formscrolltype("none");
                p.divLaser.move("0","772","100.00%","508",null,null);

                p.panForm.set_taborder("15");
                p.panForm.set_fittocontents("height");
                p.panForm.set_type("vertical");
                p.panForm.move("0","0","100.00%","2000",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panForm.set_spacing("0px 20px 10px 20px");
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divStkr.form.rdoPrtcZoneDgadsCmdtyStkrOtptYn","value","dsAply","prtcZoneDgadsCmdtyStkrOtptYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divStkr.form.edtStkrPrntrNm","value","dsAply","stkrPrntrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divStkr.form.rdoPrtcZoneDgadsCmdtyStkrRcvYn","value","dsAply","prtcZoneDgadsCmdtyStkrRcvYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divStkr.form.calStkrRcvYmd","value","dsAply","stkrRcvYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divStkr.form.medtStkrRcvDt","value","dsAply","stkrRcvDt2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divLaser.form.rdoPrtcZoneDgadsCmdtyLaserMarkgEngvgYn","value","dsAply","prtcZoneDgadsCmdtyLaserMarkgEngvgYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divLaser.form.edtLaserMarkgEngvrNm","value","dsAply","laserMarkgEngvrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divLaser.form.rdoPrtcZoneDgadsCmdtyLaserMarkgRcvYn","value","dsAply","prtcZoneDgadsCmdtyLaserMarkgRcvYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divLaser.form.calLaserMarkgCmdtyYmd","value","dsAply","laserMarkgCmdtyYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divLaser.form.medtLaserMarkgCmdtyDt","value","dsAply","laserMarkgCmdtyDt2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divLaser.form.calLaserMarkgRcvYmd","value","dsAply","laserMarkgRcvYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divLaser.form.medtLaserMarkgRcvDt","value","dsAply","laserMarkgRcvDt2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divLaser.form.calLaserMarkgCmdtyAcptnYmd","value","dsAply","laserMarkgCmdtyAcptnYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divLaser.form.medtLaserMarkgCmdtyAcptnDt","value","dsAply","laserMarkgCmdtyAcptnDt2");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CST011M00_07.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CST011M00_07.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	CST011M00_06.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/12/24
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/12/24			박상희						최초생성
        *******************************************************************************
        */
        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvParent = this.parent.parent;

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        };

        /*******************************************************************************************************************************
         * 공통함수영역
        *******************************************************************************************************************************/


        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function () {

        }

        //스티커출력 영역 visible 처리
        this.fnStkrVisible = function (bVisible = false) {
        	this.panTitle02.visible = bVisible;
        	this.divStkr.visible = bVisible;
        	this.panTitle02.height = 0;
        	this.divStkr.height = 0;
        	this.resetScroll();
        }

        //레이저마킹 영역 visible 처리
        this.fnLaserVisible = function (bVisible = false) {
        	this.panTitle03.visible = bVisible;
        	this.divLaser.visible = bVisible;
        	this.panTitle03.height = 0;
        	this.divLaser.height = 0;
        	this.resetScroll();
        }

        //문서출력영역 버튼 세팅(sVal : 1-버튼 3개 세팅(만족도 조사) / 2-버튼 2개 세팅(만족도 조사) / 3-버튼 4개 세팅(종료) / 4-버튼 3개 세팅(종료))
        this.fnSetbtnPrtcInfo = function(sVal)
        {
        	if(sVal == 1) {
        		this.divPrtc.form.btnPrtcInfo1.visible = true;
        		this.divPrtc.form.btnPrtcInfo2.visible = true;
        		this.divPrtc.form.btnPrtcInfo3.visible = true;
        		this.divPrtc.form.btnPrtcInfo4.visible = false;
        		this.divPrtc.form.staPrtcInfo.text = " Windows 7 이상의 OS에서 출력 가능합니다. (Windows XP 출력 불가)";
        	} else if(sVal == 2) {
        		this.divPrtc.form.btnPrtcInfo1.visible = true;
        		this.divPrtc.form.btnPrtcInfo2.visible = false;
        		this.divPrtc.form.btnPrtcInfo3.visible = true;
        		this.divPrtc.form.btnPrtcInfo4.visible = false;
        		this.divPrtc.form.staPrtcInfo.text = " Windows 7 이상의 OS에서 출력 가능합니다. (Windows XP 출력 불가)";
        	} else if(sVal == 3) {
        		this.divPrtc.form.btnPrtcInfo1.visible = true;
        		this.divPrtc.form.btnPrtcInfo2.visible = true;
        		this.divPrtc.form.btnPrtcInfo3.visible = true;
        		this.divPrtc.form.btnPrtcInfo4.visible = true;
        		this.divPrtc.form.staPrtcInfo.text = " 보호구역 위해물품 출력 시 신규 위해물품 일괄 업로드에 사용하실 수 있습니다.(사진 제외)";
        	} else if(sVal == 4) {
        		this.divPrtc.form.btnPrtcInfo1.visible = true;
        		this.divPrtc.form.btnPrtcInfo2.visible = false;
        		this.divPrtc.form.btnPrtcInfo3.visible = true;
        		this.divPrtc.form.btnPrtcInfo4.visible = true;
        		this.divPrtc.form.staPrtcInfo.text = " 보호구역 위해물품 출력 시 신규 위해물품 일괄 업로드에 사용하실 수 있습니다.(사진 제외)";
        	}

        	this.divPrtc.form.resetScroll();
        };

        //문서출력영역 버튼 세팅(enable설정)
        this.fnSetEnablebtnPrtcInfo = function()
        {
        	this.divPrtc.form.btnPrtcInfo1.enable = false;
        	this.divPrtc.form.btnPrtcInfo2.enable = false;
        	this.divPrtc.form.btnPrtcInfo3.enable = false;
        	this.divPrtc.form.btnPrtcInfo4.enable = false;
        };

        //스티커 출력 영역, 레이저 마킹 영역 줄어들지 않게 하기 위해 visible과 height 체크하여 영역 보존
        this.fnSetArea = function() {
        	var sVisibleYn = this.panTitle02.visible;
        	var pVisibleYn = this.panTitle03.visible;
        	var sHeight = this.panTitle02.height;
        	var pHeight = this.panTitle03.height;

        	//영역이 존재하는데 height가 0일 경우 체크하여 보존
        	if(sVisibleYn && sHeight == 0) {
        		this.panTitle02.height = 70;
        		this.divStkr.height = 415;
        	}
        	if(pVisibleYn && pHeight == 0) {
        		this.panTitle03.height = 70;
        		this.divLaser.height = 508;
        	}
        	this.resetScroll();
        };

        //여부 선택에 따라 form세팅 변경
        this.fnPrtcSetForm = function(sRbprsnType, sVal) {
        	if (this.gfnIsNull(sRbprsnType)) return;

        	var sReadonly = false;
        	var sEnable = true;
        	if(sVal == "N") {
        		sReadonly = true;
        		sEnable = false;
        	}

        	if (sRbprsnType == "search") {
        		this.fnPrtcSetForm("prtcZoneDgadsCmdtyStkrOtptYn" , this.fvParent.dsAply.getColumn(0, "prtcZoneDgadsCmdtyStkrOtptYn"));
        		this.fnPrtcSetForm("prtcZoneDgadsCmdtyStkrRcvYn" , this.fvParent.dsAply.getColumn(0, "prtcZoneDgadsCmdtyStkrRcvYn"));
        		this.fnPrtcSetForm("prtcZoneDgadsCmdtyLaserMarkgEngvgYn", this.fvParent.dsAply.getColumn(0, "prtcZoneDgadsCmdtyLaserMarkgEngvgYn"));
        		this.fnPrtcSetForm("prtcZoneDgadsCmdtyLaserMarkgRcvYn", this.fvParent.dsAply.getColumn(0, "prtcZoneDgadsCmdtyLaserMarkgRcvYn"));
        	}
        	// 스티커 출력여부 [Y : 출력, N : 출력안함]
        	else if (sRbprsnType == "prtcZoneDgadsCmdtyStkrOtptYn") {
        		// 스티커출력자, 스티커수령여부, 스티커수령일자, 스티커수령일시
        		["edtStkrPrntrNm", "rdoPrtcZoneDgadsCmdtyStkrRcvYn", "calStkrRcvYmd", "medtStkrRcvDt"]
        		.forEach(sComp => this.divStkr.form[sComp].readonly = sReadonly);

        		//스티커출력(관리자) 버튼4개, 스티커수령일시 버튼
        		["btnStkrPrtc1", "btnStkrPrtc2", "btnStkrPrtc3", "btnStkrPrtc4", "btnSetDt1"]
        		.forEach(sComp => this.divStkr.form[sComp].enable = sEnable);
        	}
        	// 스티커 수령여부 [Y : 수령, N : 수령안함]
        	else if (sRbprsnType == "prtcZoneDgadsCmdtyStkrRcvYn") {
        		// 스티커수령일자, 스티커수령일시
        		["calStkrRcvYmd", "medtStkrRcvDt"]
        		.forEach(sComp => this.divStkr.form[sComp].readonly = sReadonly);

        		// 스티커수령일시 버튼
        		["btnSetDt1"]
        		.forEach(sComp => this.divStkr.form[sComp].enable = sEnable);
        	}
        	// 레이저 각인여부 [Y : 각인, N : 각인안함]
        	else if (sRbprsnType == "prtcZoneDgadsCmdtyLaserMarkgEngvgYn") {
        		// 레이저각인자, 수령여부, 물품인도일자, 물품인도일시, 수령일자, 수령일시, 인수예정일자, 인수예정일시
        		["edtLaserMarkgEngvrNm", "rdoPrtcZoneDgadsCmdtyLaserMarkgRcvYn", "calLaserMarkgCmdtyYmd", "medtLaserMarkgCmdtyDt"
        		,"calLaserMarkgRcvYmd", "medtLaserMarkgRcvDt", "calLaserMarkgCmdtyAcptnYmd", "medtLaserMarkgCmdtyAcptnDt"]
        		.forEach(sComp => this.divLaser.form[sComp].readonly = sReadonly);

        		// 레이저각인(관리자) 버튼2개, 물품인도일시 버튼, 수령일시 버튼, 인수예정일시 버튼
        		["btnLaserPrtc1", "btnLaserPrtc2", "btnSetDt2", "btnSetDt3", "btnSetDt4"]
        		.forEach(sComp => this.divLaser.form[sComp].enable = sEnable);
        	}
        	// 레이저 수령여부 [Y : 수령, N : 수령안함]
        	else if (sRbprsnType == "prtcZoneDgadsCmdtyLaserMarkgRcvYn") {
        		// 물품인도일자, 물품인도일시, 수령일자, 수령일시, 인수예정일자, 인수예정일시
        		["calLaserMarkgCmdtyYmd", "medtLaserMarkgCmdtyDt"
        		,"calLaserMarkgRcvYmd", "medtLaserMarkgRcvDt", "calLaserMarkgCmdtyAcptnYmd", "medtLaserMarkgCmdtyAcptnDt"]
        		.forEach(sComp => this.divLaser.form[sComp].readonly = sReadonly);

        		// 물품인도일시 버튼, 수령일시 버튼, 인수예정일시 버튼
        		["btnSetDt2", "btnSetDt3", "btnSetDt4"]
        		.forEach(sComp => this.divLaser.form[sComp].enable = sEnable);
        	}
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        //버튼 접기, 펼치기
        this.btnPrtc_onclick = function(obj,e)
        {
        	//visible로만 설정하면 남는 공간이 생겨서 height 0으로 변경한 뒤에 버튼으로 접었다 펼치기 적용 위해 기본 height 세팅
        	this.panTitle02.height = 70;
        	this.divStkr.height = 415;
        	//visible로만 설정하면 남는 공간이 생겨서 height 0으로 변경한 뒤에 버튼으로 접었다 펼치기 적용 위해 기본 height 세팅
        	this.panTitle03.height = 70;
        	this.divLaser.height = 508;

        	this.cfnFold(obj, e.ctrlkey);
        	this.resetScroll();
        };

        //버튼 클릭 시 일시 세팅
        this.divStkr_btnSetDt1_onclick = function(obj,e)
        {
        	var sDateTime = this.gfnGetDate("time");	//시분초까지 나오는 현재날짜
        	var sDate = sDateTime.substring(0, 8);		//현재날짜 YYYYMMDD
        	var sTime = sDateTime.substring(8, 12);		//현재시간 HHmm

        	const dsAply = this.fvParent.dsAply;
        	var eventId = obj.id;
        	if(eventId == "btnSetDt1") {
        		//스티커 수령일시
        		dsAply.setColumn(0, "stkrRcvYmd", sDate);
        		dsAply.setColumn(0, "stkrRcvDt2", sTime);
        	} else if(eventId == "btnSetDt2") {
        		//레이저마킹 물품인도일
        		dsAply.setColumn(0, "laserMarkgCmdtyYmd", sDate);
        		dsAply.setColumn(0, "laserMarkgCmdtyDt2", sTime);
        	} else if(eventId == "btnSetDt3") {
        		//레이저마킹 수령일시
        		dsAply.setColumn(0, "laserMarkgRcvYmd", sDate);
        		dsAply.setColumn(0, "laserMarkgRcvDt2", sTime);
        	} else if(eventId == "btnSetDt4") {
        		//레이저마킹 물품인수일예정일
        		dsAply.setColumn(0, "laserMarkgCmdtyAcptnYmd", sDate);
        		dsAply.setColumn(0, "laserMarkgCmdtyAcptnDt2", sTime);
        	}
        };

        //보호구역내 보안위해물품 사용 관련 준수사항 출력 버튼
        this.divPrtc_btnPrtcInfo1_onclick = function(obj,e)
        {
        	//스티커 출력 영역, 레이저 마킹 영역 줄어들지 않게 하기 위해 visible과 height 체크하여 영역 보존
        	this.fnSetArea();
        	this.gfnAlertMsg("msgInfo1", "MSG_011", ["보호구역내 보안위해물품 사용 관련 \n준수사항 출력 적용 예정입니다."]);
        };

        //보호구역내 보안위해물품 스티커 출력 버튼
        this.divPrtc_btnPrtcInfo2_onclick = function(obj,e)
        {
        	//스티커 출력 영역, 레이저 마킹 영역 줄어들지 않게 하기 위해 visible과 height 체크하여 영역 보존
        	this.fnSetArea();
        	this.gfnAlertMsg("msgInfo2", "MSG_011", ["보호구역내 보안위해물품 스티커 출력 \n적용 예정입니다."]);
        };

        //보호구역내 보안위해물품 사용승인서 출력 버튼
        this.divPrtc_btnPrtcInfo3_onclick = function(obj,e)
        {
        	//스티커 출력 영역, 레이저 마킹 영역 줄어들지 않게 하기 위해 visible과 height 체크하여 영역 보존
        	this.fnSetArea();
        	this.gfnAlertMsg("msgInfo3", "MSG_011", ["보호구역내 보안위해물품 사용승인서 출력 \n적용 예정입니다."]);
        };

        //보호구역 위해물품 목록(Excel)출력
        this.divPrtc_btnPrtcInfo4_onclick = function(obj,e)
        {
        	//this.gfn_excelExport(this.fvParent.divForm05.form.divGrd.form.grdCsafList, "보호구역위해물품목록", "보호구역위해물품목록");
        	this.fvParent.fnExcelDownload();
        };

        //보호구역내 보안위해물품 스티커 출력
        this.divStkr_btnStkrPrtc1_onclick = function(obj,e)
        {
        	//스티커 출력 영역, 레이저 마킹 영역 줄어들지 않게 하기 위해 visible과 height 체크하여 영역 보존
        	this.fnSetArea();
        	this.gfnAlertMsg("msgStkr1", "MSG_011", ["보호구역내 보안위해물품 스티커 출력 \n적용 예정입니다."]);
        };

        //보호구역내 보안위해물품 스티커 출력(한장)
        this.divStkr_btnStkrPrtc2_onclick = function(obj,e)
        {
        	//스티커 출력 영역, 레이저 마킹 영역 줄어들지 않게 하기 위해 visible과 height 체크하여 영역 보존
        	this.fnSetArea();
        	this.gfnAlertMsg("msgStkr2", "MSG_011", ["보호구역내 보안위해물품 스티커 출력(한장) \n적용 예정입니다."]);
        };

        //보호구역내 보안위해물품 스티커 출력(한장) 테스트
        this.divStkr_btnStkrPrtc3_onclick = function(obj,e)
        {
        	//스티커 출력 영역, 레이저 마킹 영역 줄어들지 않게 하기 위해 visible과 height 체크하여 영역 보존
        	this.fnSetArea();
        	this.gfnAlertMsg("msgStkr3", "MSG_011", ["보호구역내 보안위해물품 스티커 출력(한장) \n테스트 적용 예정입니다."]);
        };

        //보호구역내 보안위해물품 스티커 출력 테스트
        this.divStkr_btnStkrPrtc4_onclick = function(obj,e)
        {
        	//스티커 출력 영역, 레이저 마킹 영역 줄어들지 않게 하기 위해 visible과 height 체크하여 영역 보존
        	this.fnSetArea();
        	this.gfnAlertMsg("msgStkr4", "MSG_011", ["보호구역내 보안위해물품 스티커 출력 \n테스트 적용 예정입니다."]);
        };

        //보호구역내 보안위해물품 레이저마킹 출력
        this.divLaser_btnLaserPrtc1_onclick = function(obj,e)
        {
        	//스티커 출력 영역, 레이저 마킹 영역 줄어들지 않게 하기 위해 visible과 height 체크하여 영역 보존
        	this.fnSetArea();
        	this.gfnAlertMsg("msgLaser1", "MSG_011", ["보호구역내 보안위해물품 레이저마킹 출력 \n적용 예정입니다."]);
        };

        //보호구역내 보안위해물품 레이저마킹 출력(한장)
        this.divLaser_btnLaserPrtc2_onclick = function(obj,e)
        {
        	//스티커 출력 영역, 레이저 마킹 영역 줄어들지 않게 하기 위해 visible과 height 체크하여 영역 보존
        	this.fnSetArea();
        	this.gfnAlertMsg("msgLaser2", "MSG_011", ["보호구역내 보안위해물품 레이저마킹 \n출력(한장) 테스트 적용 예정입니다."]);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnPrtc.addEventHandler("onclick",this.btnPrtc_onclick,this);
            this.divPrtc.form.btnPrtcInfo3.addEventHandler("onclick",this.divPrtc_btnPrtcInfo3_onclick,this);
            this.divPrtc.form.btnPrtcInfo1.addEventHandler("onclick",this.divPrtc_btnPrtcInfo1_onclick,this);
            this.divPrtc.form.btnPrtcInfo2.addEventHandler("onclick",this.divPrtc_btnPrtcInfo2_onclick,this);
            this.divPrtc.form.btnPrtcInfo4.addEventHandler("onclick",this.divPrtc_btnPrtcInfo4_onclick,this);
            this.btnStkr.addEventHandler("onclick",this.btnPrtc_onclick,this);
            this.divStkr.form.btnStkrPrtc2.addEventHandler("onclick",this.divStkr_btnStkrPrtc2_onclick,this);
            this.divStkr.form.btnStkrPrtc1.addEventHandler("onclick",this.divStkr_btnStkrPrtc1_onclick,this);
            this.divStkr.form.btnStkrPrtc3.addEventHandler("onclick",this.divStkr_btnStkrPrtc3_onclick,this);
            this.divStkr.form.btnStkrPrtc4.addEventHandler("onclick",this.divStkr_btnStkrPrtc4_onclick,this);
            this.divStkr.form.btnSetDt1.addEventHandler("onclick",this.divStkr_btnSetDt1_onclick,this);
            this.btnLaser.addEventHandler("onclick",this.btnPrtc_onclick,this);
            this.divLaser.form.btnLaserPrtc2.addEventHandler("onclick",this.divLaser_btnLaserPrtc2_onclick,this);
            this.divLaser.form.btnLaserPrtc1.addEventHandler("onclick",this.divLaser_btnLaserPrtc1_onclick,this);
            this.divLaser.form.btnSetDt2.addEventHandler("onclick",this.divStkr_btnSetDt1_onclick,this);
            this.divLaser.form.btnSetDt3.addEventHandler("onclick",this.divStkr_btnSetDt1_onclick,this);
            this.divLaser.form.btnSetDt4.addEventHandler("onclick",this.divStkr_btnSetDt1_onclick,this);
        };
        this.loadIncludeScript("CST011M00_07.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
