(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST015M00");
            this.set_titletext("신청서작성(통신실작업)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Panel("panForm","0","0","100.00%","1997",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem02\" componentid=\"div00\"/><PanelItem id=\"PanelItem03\" componentid=\"panTitle00\"/><PanelItem id=\"PanelItem04\" componentid=\"div00_01_02_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle","320","173","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("작업계획");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel07","1140","173","200","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnFold\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panTitle","320","173","100%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("3");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel07\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","960","26","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnFold","853","6","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0","70","100.00%","1707",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("div00");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("pan00","0","0","100.00%","171",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","20","-70","100%","160",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem02\" componentid=\"Static00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel00","0","-70","96.88%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("보안구역여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","-20","96.88%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"chkRgnSeNm1\"/><PanelItem id=\"PanelItem01\" componentid=\"chkRgnSeNm2\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("chkRgnSeNm1","0","-70","150","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("A/S(보호구역)");
            obj.set_fittocontents("width");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("chkRgnSeNm2","150","-70","150","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("L/S(일반지역)");
            obj.set_fittocontents("width");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","24","100%","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("A/S(보호구역):출입허가가 필요한 보안구역(보안검색이 완료된 구역)\r\nL/S(일반지역):출입허가 없이 출입이 가능한 지역");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Des");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan00_00","1610","315","100%","350",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("30");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan06","0","242","100.00%","96",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"pan04_01_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtComurmPstnCn","0","-24","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_readonly("false");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01","0","-70","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_text("통신실위치");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan_04_00_00","20.00","-70","610","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtComurmPstnCn\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtJobTnope","0","-24","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_01","0","-70","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_text("총 작업인원");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00","650","-70","610","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtJobTnope\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan06_00","0","242","100.00%","140",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"pan04_01_00_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static06","0","20","100%","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("18");
            obj.set_text("작업전 48시간 이전에 등록");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.div00.addChild(obj.name, obj);

            obj = new Calendar("calJobBgngYmd","0","-22","150","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("17");
            obj.set_dateformat("yyyy-MM-dd");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01_00","0","-70","100%","44",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("16");
            obj.set_text("작업시작일");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan_04_00_00_00","20.00","-70","610","130",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"calJobBgngYmd\"/><PanelItem id=\"PanelItem02\" componentid=\"Static06\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static07","0","20","100%","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("22");
            obj.set_text("작업신청 가능기간은");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.div00.addChild(obj.name, obj);

            obj = new Calendar("calJobEndYmd","0","-22","150","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("21");
            obj.set_dateformat("yyyy-MM-dd");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_01_00","0","-70","100%","44",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("20");
            obj.set_text("작업종료일");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00_00","650","-70","610","130",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("19");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"calJobEndYmd\"/><PanelItem id=\"PanelItem02\" componentid=\"Static07\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan06_01_00","0","242","100.00%","96",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("23");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"pan04_01_00_01_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtIncmgJobNm","0","-24","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("26");
            obj.set_readonly("false");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01_01_00","0","-70","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("25");
            obj.set_text("출입/작업명");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan_04_00_00_01_00","20.00","-70","610","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("24");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtIncmgJobNm\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtTrgtSysEqpmntNm","0","-24","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("29");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_01_01_00","0","-70","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("28");
            obj.set_text("대상시스템/장비명");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00_01_00","650","-70","610","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("27");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_01_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtTrgtSysEqpmntNm\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","20.00","-70","100%","350",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("31");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel03\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel04\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel05\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","0","-70","58.52%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("32");
            obj.set_text("건물구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","-20","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("33");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01\"/><PanelItem id=\"PanelItem01\" componentid=\"chkBldgSeNm1\"/><PanelItem id=\"PanelItem02\" componentid=\"chkBldgSeNm2\"/><PanelItem id=\"PanelItem03\" componentid=\"chkBldgSeNm3\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","-70","120","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("34");
            obj.set_text("[제1터미널지역]");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("chkBldgSeNm1","120","-70","136","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("35");
            obj.set_text("제1여객터미널");
            obj.set_fittocontents("width");
            obj.set_value("false");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("chkBldgSeNm2","255","-70","123","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("36");
            obj.set_text("제1교통센터");
            obj.set_fittocontents("width");
            obj.set_value("false");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("chkBldgSeNm3","377","-70","88","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("37");
            obj.set_text("탑승동");
            obj.set_fittocontents("width");
            obj.set_value("false");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel03","0","22","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("38");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static02\"/><PanelItem id=\"PanelItem01\" componentid=\"chkBldgSeNm4\"/><PanelItem id=\"PanelItem02\" componentid=\"chkBldgSeNm5\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02","0","-70","120","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("39");
            obj.set_text("[제2터미널지역]");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("chkBldgSeNm4","120","-70","150","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("40");
            obj.set_text("제2여객터미널");
            obj.set_fittocontents("width");
            obj.set_value("false");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("chkBldgSeNm5","270","-70","125","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("41");
            obj.set_text("제2교통센터");
            obj.set_fittocontents("width");
            obj.set_value("false");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel04","0","67","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("42");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static03\"/><PanelItem id=\"PanelItem01\" componentid=\"chkBldgSeNm6\"/><PanelItem id=\"PanelItem02\" componentid=\"chkBldgSeNm7\"/><PanelItem id=\"PanelItem03\" componentid=\"chkBldgSeNm8\"/><PanelItem id=\"PanelItem04\" componentid=\"chkBldgSeNm9\"/><PanelItem id=\"PanelItem05\" componentid=\"chkBldgSeNm10\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static03","0","-70","120","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("43");
            obj.set_text("[기타그외지역]");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("chkBldgSeNm6","120","-70","109","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("44");
            obj.set_text("제1청사동");
            obj.set_fittocontents("width");
            obj.set_value("false");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("chkBldgSeNm7","227","-70","125","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("45");
            obj.set_text("제2합동청사");
            obj.set_fittocontents("width");
            obj.set_value("false");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("chkBldgSeNm8","352","-70","83","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("46");
            obj.set_text("AICC");
            obj.set_fittocontents("width");
            obj.set_value("false");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("chkBldgSeNm9","435","-70","116","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("47");
            obj.set_text("인재개발원");
            obj.set_fittocontents("width");
            obj.set_value("false");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("chkBldgSeNm10","552","-70","129","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("48");
            obj.set_text("기타부대건물");
            obj.set_fittocontents("width");
            obj.set_value("false");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","110","100%","80",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("49");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static04\"/><PanelItem id=\"PanelItem01\" componentid=\"chkBldgSeNm11\"/><PanelItem id=\"PanelItem02\" componentid=\"chkBldgSeNm12\"/><PanelItem id=\"PanelItem03\" componentid=\"chkBldgSeNm13\"/><PanelItem id=\"PanelItem04\" componentid=\"chkBldgSeNm14\"/><PanelItem id=\"PanelItem05\" componentid=\"chkBldgSeNm16\"/><PanelItem id=\"PanelItem06\" componentid=\"chkBldgSeNm17\"/><PanelItem id=\"PanelItem07\" componentid=\"chkBldgSeNm18\"/><PanelItem id=\"PanelItem08\" componentid=\"chkBldgSeNm19\"/><PanelItem id=\"PanelItem09\" componentid=\"chkBldgSeNm20\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static04","0","-70","120","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("50");
            obj.set_text("[화물터미널지역]");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("chkBldgSeNm11","120","-70","144","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("51");
            obj.set_text("화물터미널 A동");
            obj.set_fittocontents("width");
            obj.set_value("false");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("chkBldgSeNm12","262","-70","143","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("52");
            obj.set_text("화물터미널 B동");
            obj.set_fittocontents("width");
            obj.set_value("false");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("chkBldgSeNm13","405","-70","142","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("53");
            obj.set_text("화물터미널 E동");
            obj.set_fittocontents("width");
            obj.set_value("false");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("chkBldgSeNm14","547","-70","144","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("54");
            obj.set_text("A동 운송대리점");
            obj.set_fittocontents("width");
            obj.set_value("false");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("chkBldgSeNm16","0","-30","144","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("55");
            obj.set_text("C동 운송대리점");
            obj.set_fittocontents("width");
            obj.set_value("false");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("chkBldgSeNm17","142","-30","161","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("56");
            obj.set_text("항공화물창고1(남)");
            obj.set_fittocontents("width");
            obj.set_value("false");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("chkBldgSeNm18","305","-30","163","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("57");
            obj.set_text("항공화물창고2(북)");
            obj.set_fittocontents("width");
            obj.set_value("false");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("chkBldgSeNm19","467","-30","157","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("58");
            obj.set_text("북측항공화물창고");
            obj.set_fittocontents("width");
            obj.set_value("false");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("chkBldgSeNm20","0","10","209","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("59");
            obj.set_text("화물터미널지역(기타지역)");
            obj.set_fittocontents("width");
            obj.set_value("false");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel05","0","195","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("60");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static05\"/><PanelItem id=\"PanelItem01\" componentid=\"chkBldgSeNm21\"/><PanelItem id=\"PanelItem02\" componentid=\"chkBldgSeNm22\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static05","0","-70","120","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("61");
            obj.set_text("[제1물류단지]");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("chkBldgSeNm21","120","-70","162","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("62");
            obj.set_text("사업/행정지원센터");
            obj.set_fittocontents("width");
            obj.set_value("false");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("chkBldgSeNm22","280","-70","189","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("63");
            obj.set_text("제1물류단지(기타지역)");
            obj.set_fittocontents("width");
            obj.set_value("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01_01_00_00","10","98","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("64");
            obj.set_text("출입/작업내용");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);

            obj = new TextArea("txtIncmgJobCn","95","1087","100%","80",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("65");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan_04_00_00_01_00_00","20.00","242","305","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("66");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"txtIncmgJobCn\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static08","64","1131","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("67");
            obj.set_text("다중작업인 경우 아래 표 기재");
            obj.set_cssclass("sta_WF_Des");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan06_01_00_00","0","242","100.00%","140",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("68");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00_00_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static08\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Div("divGrd","0","1168","100.00%","330",null,null,null,null,null,null,this.div00.form);
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_taborder("69");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("panGrdBtn","470","0","100%","34",null,null,null,null,null,null,this.div00.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnGrdAdd\"/><PanelItem id=\"PanelItem04\" componentid=\"btnGrdDel\"/></Contents>");
            this.div00.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdCmnctIncmgJobCn","0","panGrdBtn:20","100.00%","300",null,null,null,null,null,null,this.div00.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsCmnctIncmgDtl");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"250\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"200\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"시공사명\"/><Cell col=\"3\" text=\"위치정보(룸번호)\"/><Cell col=\"4\" text=\"출입/작업내용\"/><Cell col=\"5\" text=\"작업일시\"/><Cell col=\"6\" text=\"작업인원\"/><Cell col=\"7\" text=\"비고\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:sn\"/><Cell col=\"2\" text=\"bind:cnstrNm\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:pstnInfoRnb\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:incmgJobCn\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"5\" text=\"bind:jobYmd\" displaytype=\"calendarcontrol\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"6\" text=\"bind:jobNope\" displaytype=\"maskeditcontrol\" edittype=\"mask\"/><Cell col=\"7\" text=\"bind:rmrkCn\" displaytype=\"editcontrol\" cssclass=\"CellEnd\" edittype=\"text\"/></Band></Format></Formats>");
            this.div00.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdAdd","774.00","10","47","34",null,null,null,null,null,null,this.div00.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.div00.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","804.00","10","45","34",null,null,null,null,null,null,this.div00.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.div00.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staLabel00_01_01_00_00","10","98","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("70");
            obj.set_text("용접기 사용");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Radio("rdoWdmchnUseYn","681","1303","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("71");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("none");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var div00_form_rdoWdmchnUseYn_innerdataset = new nexacro.NormalDataset("div00_form_rdoWdmchnUseYn_innerdataset", obj);
            div00_form_rdoWdmchnUseYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">유</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">무</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_rdoWdmchnUseYn_innerdataset);
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_01_00_00","20.00","84","305","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("72");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01_01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoWdmchnUseYn\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","638","856","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("73");
            obj.set_text("기존시설물(마감재) 해체, 재조립");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("chkExsFcltyFinmtDslovRasblCd1","702","1512","60","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("74");
            obj.set_text("벽");
            obj.set_fittocontents("width");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("chkExsFcltyFinmtDslovRasblCd2","744","1541","74","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("75");
            obj.set_text("바닥");
            obj.set_fittocontents("width");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("chkExsFcltyFinmtDslovRasblCd3","688","1541","74","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("76");
            obj.set_text("천장");
            obj.set_fittocontents("width");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("chkExsFcltyFinmtDslovRasblCd4","590","1535","74","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("77");
            obj.set_text("없음");
            obj.set_fittocontents("width");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel06","520","1529","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("78");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"chkExsFcltyFinmtDslovRasblCd1\"/><PanelItem id=\"PanelItem01\" componentid=\"chkExsFcltyFinmtDslovRasblCd2\"/><PanelItem id=\"PanelItem02\" componentid=\"chkExsFcltyFinmtDslovRasblCd3\"/><PanelItem id=\"PanelItem03\" componentid=\"chkExsFcltyFinmtDslovRasblCd4\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan0005_00","974.00","151","305","96",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("79");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel06\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan00_01_01_00_00","0","60","100.00%","96",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("80");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_01_01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan0005_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_01_01_00","10","98","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("81");
            obj.set_text("인화성/유독성/악취발생");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Radio("rdoFlmatyTicBdsmlOcrnYn","681","1303","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("82");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("none");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var div00_form_rdoFlmatyTicBdsmlOcrnYn_innerdataset = new nexacro.NormalDataset("div00_form_rdoFlmatyTicBdsmlOcrnYn_innerdataset", obj);
            div00_form_rdoFlmatyTicBdsmlOcrnYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">유</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">무</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_rdoFlmatyTicBdsmlOcrnYn_innerdataset);
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_01_00","20.00","84","305","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("83");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoFlmatyTicBdsmlOcrnYn\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_01","638","856","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("84");
            obj.set_text("소음/진동발생");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Radio("rdoNoiseVbrnOcrnYn","658","1303","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("85");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("none");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var div00_form_rdoNoiseVbrnOcrnYn_innerdataset = new nexacro.NormalDataset("div00_form_rdoNoiseVbrnOcrnYn_innerdataset", obj);
            div00_form_rdoNoiseVbrnOcrnYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">유</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">무</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_rdoNoiseVbrnOcrnYn_innerdataset);
            obj.set_text("유");
            obj.set_value("0");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan0005","974.00","151","305","96",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("86");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01_01\"/><PanelItem id=\"PanelItem03\" componentid=\"rdoNoiseVbrnOcrnYn\"/><PanelItem id=\"PanelItem01\" componentid=\"noiseVbrnOcrnYn\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan00_01_01_00","0","60","100.00%","96",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("87");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_01_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan0005\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_01_01_00_01","10","98","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("88");
            obj.set_text("방문증 필요여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Radio("rdoVstPrdocNeedYn","681","1303","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("89");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("none");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var div00_form_rdoVstPrdocNeedYn_innerdataset = new nexacro.NormalDataset("div00_form_rdoVstPrdocNeedYn_innerdataset", obj);
            div00_form_rdoVstPrdocNeedYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">유</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">무</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_rdoVstPrdocNeedYn_innerdataset);
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_01_00_01","20.00","84","305","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("90");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01_01_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoVstPrdocNeedYn\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","638","856","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("91");
            obj.set_text("전원작업 여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Radio("rdoPosplyJobYn","658","916","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("92");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("none");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var div00_form_rdoPosplyJobYn_innerdataset = new nexacro.NormalDataset("div00_form_rdoPosplyJobYn_innerdataset", obj);
            div00_form_rdoPosplyJobYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">유</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">무</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_rdoPosplyJobYn_innerdataset);
            obj.set_text("유");
            obj.set_value("0");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan0005_01","974.00","151","305","96",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("93");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoPosplyJobYn\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan00_01_01_00_01","0","60","100.00%","96",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("94");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_01_01_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan0005_01\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01_01_00_01","10","98","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("95");
            obj.set_text("공항공사 담당자");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtArptPbcprtPicNm","20.00","288","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("96");
            obj.set_readonly("false");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan_04_00_00_01_00_01","20.00","242","305","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("97");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01_01_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtArptPbcprtPicNm\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("panblank","970.00","270","305","1",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("98");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan06_01_00_01","0","242","100.00%","96",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("99");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00_00_01_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"panblank\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staSubTitle00","1700","1903","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("작업계획");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel07_00","2806","1903","172","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Panel("panTitle00","1700","1883","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("9");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel07_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("div00_01_02_00_00_00","1420","1835","100%","150",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("신청자정보");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01_01_00_00","10","98","100%","46",null,null,null,null,null,null,this.div00_01_02_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("전달사항");
            obj.set_cssclass("sta_WF_Label");
            this.div00_01_02_00_00_00.addChild(obj.name, obj);

            obj = new Panel("pan_04_00_00_01_00_00","20.00","242","305","120",null,null,null,null,null,null,this.div00_01_02_00_00_00.form);
            obj.set_taborder("1");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"txtCnvyMttrCn\"/></Contents>");
            this.div00_01_02_00_00_00.addChild(obj.name, obj);

            obj = new Panel("pan06_01_00_00","0","242","100.00%","140",null,null,null,null,null,null,this.div00_01_02_00_00_00.form);
            obj.set_taborder("2");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00_00_01_00_00\"/></Contents>");
            this.div00_01_02_00_00_00.addChild(obj.name, obj);

            obj = new TextArea("txtCnvyMttrCn","95","1087","100%","100",null,null,null,null,null,null,this.div00_01_02_00_00_00.form);
            obj.set_taborder("3");
            this.div00_01_02_00_00_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form.divGrd.form
            obj = new Layout("default","",0,0,this.div00.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panGrdBtn.set_taborder("1");
                p.panGrdBtn.set_flexcrossaxisalign("start");
                p.panGrdBtn.set_flexcrossaxiswrapalign("start");
                p.panGrdBtn.set_flexmainaxisalign("end");
                p.panGrdBtn.set_horizontalgap("10");
                p.panGrdBtn.move("470","0","100%","34",null,null);

                p.grdCmnctIncmgJobCn.set_taborder("0");
                p.grdCmnctIncmgJobCn.set_binddataset("dsCmnctIncmgDtl");
                p.grdCmnctIncmgJobCn.set_autofittype("col");
                p.grdCmnctIncmgJobCn.move("0","panGrdBtn:20","100.00%","300",null,null);

                p.btnGrdAdd.set_taborder("2");
                p.btnGrdAdd.set_text("추가");
                p.btnGrdAdd.set_cssclass("btn_WF_Small");
                p.btnGrdAdd.set_visible("true");
                p.btnGrdAdd.set_fittocontents("width");
                p.btnGrdAdd.move("774.00","10","47","34",null,null);

                p.btnGrdDel.set_taborder("3");
                p.btnGrdDel.set_text("삭제");
                p.btnGrdDel.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel.set_visible("true");
                p.btnGrdDel.set_fittocontents("width");
                p.btnGrdDel.move("804.00","10","45","34",null,null);
            	}
            );
            obj.set_verticalgap("10");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_type("vertical");
            this.div00.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.div00.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("10");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_type("vertical");
            this.div00.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.div00.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("10");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_type("vertical");
            this.div00.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,
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
                p.pan00.set_visible("true");
                p.pan00.move("0","0","100.00%","171",null,null);

                p.Panel00_00.set_taborder("1");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.set_verticalgap("4");
                p.Panel00_00.set_minwidth("");
                p.Panel00_00.move("20","-70","100%","160",null,null);

                p.staLabel00.set_taborder("2");
                p.staLabel00.set_text("보안구역여부");
                p.staLabel00.set_cssclass("sta_WF_Label_E");
                p.staLabel00.move("0","-70","96.88%","46",null,null);

                p.Panel01.set_taborder("3");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.move("0","-20","96.88%","40",null,null);

                p.chkRgnSeNm1.set_taborder("4");
                p.chkRgnSeNm1.set_text("A/S(보호구역)");
                p.chkRgnSeNm1.set_fittocontents("width");
                p.chkRgnSeNm1.move("0","-70","150","40",null,null);

                p.chkRgnSeNm2.set_taborder("5");
                p.chkRgnSeNm2.set_text("L/S(일반지역)");
                p.chkRgnSeNm2.set_fittocontents("width");
                p.chkRgnSeNm2.move("150","-70","150","40",null,null);

                p.Static00.set_taborder("6");
                p.Static00.set_text("A/S(보호구역):출입허가가 필요한 보안구역(보안검색이 완료된 구역)\r\nL/S(일반지역):출입허가 없이 출입이 가능한 지역");
                p.Static00.set_fittocontents("height");
                p.Static00.set_cssclass("sta_WF_Des");
                p.Static00.move("0","24","100%","60",null,null);

                p.pan00_00.set_taborder("30");
                p.pan00_00.set_horizontalgap("20");
                p.pan00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_00.set_flexwrap("wrap");
                p.pan00_00.set_fittocontents("height");
                p.pan00_00.set_verticalgap("0");
                p.pan00_00.set_spacing("0px 20px 10px 20px");
                p.pan00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_00.move("1610","315","100%","350",null,null);

                p.pan06.set_taborder("7");
                p.pan06.set_horizontalgap("20");
                p.pan06.set_flexcrossaxiswrapalign("start");
                p.pan06.set_flexwrap("wrap");
                p.pan06.set_fittocontents("height");
                p.pan06.set_verticalgap("0");
                p.pan06.set_spacing("0px 20px 10px 20px");
                p.pan06.set_cssclass("pal_WF_DtlBg");
                p.pan06.set_visible("true");
                p.pan06.move("0","242","100.00%","96",null,null);

                p.edtComurmPstnCn.set_taborder("10");
                p.edtComurmPstnCn.set_readonly("false");
                p.edtComurmPstnCn.move("0","-24","100%","40",null,null);

                p.staLabel03_00_00_01.set_taborder("9");
                p.staLabel03_00_00_01.set_text("통신실위치");
                p.staLabel03_00_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_01.move("0","-70","100%","46",null,null);

                p.pan_04_00_00.set_taborder("8");
                p.pan_04_00_00.set_type("vertical");
                p.pan_04_00_00.set_flexgrow("1");
                p.pan_04_00_00.move("20.00","-70","610","86",null,null);

                p.edtJobTnope.set_taborder("13");
                p.edtJobTnope.move("0","-24","100%","40",null,null);

                p.staLabel03_01_00_01.set_taborder("12");
                p.staLabel03_01_00_01.set_text("총 작업인원");
                p.staLabel03_01_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel03_01_00_01.move("0","-70","100%","46",null,null);

                p.pan04_01_00.set_taborder("11");
                p.pan04_01_00.set_type("vertical");
                p.pan04_01_00.set_flexgrow("1");
                p.pan04_01_00.move("650","-70","610","86",null,null);

                p.pan06_00.set_taborder("14");
                p.pan06_00.set_horizontalgap("20");
                p.pan06_00.set_flexcrossaxiswrapalign("start");
                p.pan06_00.set_flexwrap("wrap");
                p.pan06_00.set_fittocontents("height");
                p.pan06_00.set_verticalgap("0");
                p.pan06_00.set_spacing("0px 20px 10px 20px");
                p.pan06_00.set_cssclass("pal_WF_DtlBg");
                p.pan06_00.set_visible("true");
                p.pan06_00.move("0","242","100.00%","140",null,null);

                p.Static06.set_taborder("18");
                p.Static06.set_text("작업전 48시간 이전에 등록");
                p.Static06.set_cssclass("sta_WF_Des");
                p.Static06.set_fittocontents("height");
                p.Static06.move("0","20","100%","38",null,null);

                p.calJobBgngYmd.set_taborder("17");
                p.calJobBgngYmd.set_dateformat("yyyy-MM-dd");
                p.calJobBgngYmd.move("0","-22","150","38",null,null);

                p.staLabel03_00_00_01_00.set_taborder("16");
                p.staLabel03_00_00_01_00.set_text("작업시작일");
                p.staLabel03_00_00_01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_01_00.move("0","-70","100%","44",null,null);

                p.pan_04_00_00_00.set_taborder("15");
                p.pan_04_00_00_00.set_type("vertical");
                p.pan_04_00_00_00.set_flexgrow("1");
                p.pan_04_00_00_00.set_fittocontents("height");
                p.pan_04_00_00_00.set_verticalgap("4");
                p.pan_04_00_00_00.move("20.00","-70","610","130",null,null);

                p.Static07.set_taborder("22");
                p.Static07.set_text("작업신청 가능기간은");
                p.Static07.set_cssclass("sta_WF_Des");
                p.Static07.set_fittocontents("height");
                p.Static07.move("0","20","100%","38",null,null);

                p.calJobEndYmd.set_taborder("21");
                p.calJobEndYmd.set_dateformat("yyyy-MM-dd");
                p.calJobEndYmd.move("0","-22","150","38",null,null);

                p.staLabel03_01_00_01_00.set_taborder("20");
                p.staLabel03_01_00_01_00.set_text("작업종료일");
                p.staLabel03_01_00_01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_01_00_01_00.move("0","-70","100%","44",null,null);

                p.pan04_01_00_00.set_taborder("19");
                p.pan04_01_00_00.set_type("vertical");
                p.pan04_01_00_00.set_flexgrow("1");
                p.pan04_01_00_00.set_fittocontents("height");
                p.pan04_01_00_00.set_verticalgap("4");
                p.pan04_01_00_00.move("650","-70","610","130",null,null);

                p.pan06_01_00.set_taborder("23");
                p.pan06_01_00.set_horizontalgap("20");
                p.pan06_01_00.set_flexcrossaxiswrapalign("start");
                p.pan06_01_00.set_flexwrap("wrap");
                p.pan06_01_00.set_fittocontents("height");
                p.pan06_01_00.set_verticalgap("0");
                p.pan06_01_00.set_spacing("0px 20px 10px 20px");
                p.pan06_01_00.set_cssclass("pal_WF_DtlBg");
                p.pan06_01_00.set_visible("true");
                p.pan06_01_00.move("0","242","100.00%","96",null,null);

                p.edtIncmgJobNm.set_taborder("26");
                p.edtIncmgJobNm.set_readonly("false");
                p.edtIncmgJobNm.move("0","-24","100%","40",null,null);

                p.staLabel03_00_00_01_01_00.set_taborder("25");
                p.staLabel03_00_00_01_01_00.set_text("출입/작업명");
                p.staLabel03_00_00_01_01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_01_01_00.move("0","-70","100%","46",null,null);

                p.pan_04_00_00_01_00.set_taborder("24");
                p.pan_04_00_00_01_00.set_type("vertical");
                p.pan_04_00_00_01_00.set_flexgrow("1");
                p.pan_04_00_00_01_00.move("20.00","-70","610","86",null,null);

                p.edtTrgtSysEqpmntNm.set_taborder("29");
                p.edtTrgtSysEqpmntNm.move("0","-24","100%","40",null,null);

                p.staLabel03_01_00_01_01_00.set_taborder("28");
                p.staLabel03_01_00_01_01_00.set_text("대상시스템/장비명");
                p.staLabel03_01_00_01_01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_01_00_01_01_00.move("0","-70","100%","46",null,null);

                p.pan04_01_00_01_00.set_taborder("27");
                p.pan04_01_00_01_00.set_type("vertical");
                p.pan04_01_00_01_00.set_flexgrow("1");
                p.pan04_01_00_01_00.move("650","-70","610","86",null,null);

                p.Panel00_00_00.set_taborder("31");
                p.Panel00_00_00.set_type("vertical");
                p.Panel00_00_00.set_flexgrow("1");
                p.Panel00_00_00.set_fittocontents("height");
                p.Panel00_00_00.set_verticalgap("4");
                p.Panel00_00_00.set_minwidth("");
                p.Panel00_00_00.move("20.00","-70","100%","350",null,null);

                p.staLabel00_00.set_taborder("32");
                p.staLabel00_00.set_text("건물구분");
                p.staLabel00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00.move("0","-70","58.52%","46",null,null);

                p.Panel02.set_taborder("33");
                p.Panel02.set_fittocontents("height");
                p.Panel02.set_flexwrap("wrap");
                p.Panel02.move("0","-20","100%","40",null,null);

                p.Static01.set_taborder("34");
                p.Static01.set_text("[제1터미널지역]");
                p.Static01.move("0","-70","120","40",null,null);

                p.chkBldgSeNm1.set_taborder("35");
                p.chkBldgSeNm1.set_text("제1여객터미널");
                p.chkBldgSeNm1.set_fittocontents("width");
                p.chkBldgSeNm1.set_value("false");
                p.chkBldgSeNm1.move("120","-70","136","40",null,null);

                p.chkBldgSeNm2.set_taborder("36");
                p.chkBldgSeNm2.set_text("제1교통센터");
                p.chkBldgSeNm2.set_fittocontents("width");
                p.chkBldgSeNm2.set_value("false");
                p.chkBldgSeNm2.move("255","-70","123","40",null,null);

                p.chkBldgSeNm3.set_taborder("37");
                p.chkBldgSeNm3.set_text("탑승동");
                p.chkBldgSeNm3.set_fittocontents("width");
                p.chkBldgSeNm3.set_value("false");
                p.chkBldgSeNm3.move("377","-70","88","40",null,null);

                p.Panel03.set_taborder("38");
                p.Panel03.set_fittocontents("height");
                p.Panel03.set_flexwrap("wrap");
                p.Panel03.move("0","22","100%","40",null,null);

                p.Static02.set_taborder("39");
                p.Static02.set_text("[제2터미널지역]");
                p.Static02.move("0","-70","120","40",null,null);

                p.chkBldgSeNm4.set_taborder("40");
                p.chkBldgSeNm4.set_text("제2여객터미널");
                p.chkBldgSeNm4.set_fittocontents("width");
                p.chkBldgSeNm4.set_value("false");
                p.chkBldgSeNm4.move("120","-70","150","40",null,null);

                p.chkBldgSeNm5.set_taborder("41");
                p.chkBldgSeNm5.set_text("제2교통센터");
                p.chkBldgSeNm5.set_fittocontents("width");
                p.chkBldgSeNm5.set_value("false");
                p.chkBldgSeNm5.move("270","-70","125","40",null,null);

                p.Panel04.set_taborder("42");
                p.Panel04.set_fittocontents("height");
                p.Panel04.set_flexwrap("wrap");
                p.Panel04.move("0","67","100%","40",null,null);

                p.Static03.set_taborder("43");
                p.Static03.set_text("[기타그외지역]");
                p.Static03.move("0","-70","120","40",null,null);

                p.chkBldgSeNm6.set_taborder("44");
                p.chkBldgSeNm6.set_text("제1청사동");
                p.chkBldgSeNm6.set_fittocontents("width");
                p.chkBldgSeNm6.set_value("false");
                p.chkBldgSeNm6.move("120","-70","109","40",null,null);

                p.chkBldgSeNm7.set_taborder("45");
                p.chkBldgSeNm7.set_text("제2합동청사");
                p.chkBldgSeNm7.set_fittocontents("width");
                p.chkBldgSeNm7.set_value("false");
                p.chkBldgSeNm7.move("227","-70","125","40",null,null);

                p.chkBldgSeNm8.set_taborder("46");
                p.chkBldgSeNm8.set_text("AICC");
                p.chkBldgSeNm8.set_fittocontents("width");
                p.chkBldgSeNm8.set_value("false");
                p.chkBldgSeNm8.move("352","-70","83","40",null,null);

                p.chkBldgSeNm9.set_taborder("47");
                p.chkBldgSeNm9.set_text("인재개발원");
                p.chkBldgSeNm9.set_fittocontents("width");
                p.chkBldgSeNm9.set_value("false");
                p.chkBldgSeNm9.move("435","-70","116","40",null,null);

                p.chkBldgSeNm10.set_taborder("48");
                p.chkBldgSeNm10.set_text("기타부대건물");
                p.chkBldgSeNm10.set_fittocontents("width");
                p.chkBldgSeNm10.set_value("false");
                p.chkBldgSeNm10.move("552","-70","129","40",null,null);

                p.Panel00.set_taborder("49");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.move("0","110","100%","80",null,null);

                p.Static04.set_taborder("50");
                p.Static04.set_text("[화물터미널지역]");
                p.Static04.move("0","-70","120","40",null,null);

                p.chkBldgSeNm11.set_taborder("51");
                p.chkBldgSeNm11.set_text("화물터미널 A동");
                p.chkBldgSeNm11.set_fittocontents("width");
                p.chkBldgSeNm11.set_value("false");
                p.chkBldgSeNm11.move("120","-70","144","40",null,null);

                p.chkBldgSeNm12.set_taborder("52");
                p.chkBldgSeNm12.set_text("화물터미널 B동");
                p.chkBldgSeNm12.set_fittocontents("width");
                p.chkBldgSeNm12.set_value("false");
                p.chkBldgSeNm12.move("262","-70","143","40",null,null);

                p.chkBldgSeNm13.set_taborder("53");
                p.chkBldgSeNm13.set_text("화물터미널 E동");
                p.chkBldgSeNm13.set_fittocontents("width");
                p.chkBldgSeNm13.set_value("false");
                p.chkBldgSeNm13.move("405","-70","142","40",null,null);

                p.chkBldgSeNm14.set_taborder("54");
                p.chkBldgSeNm14.set_text("A동 운송대리점");
                p.chkBldgSeNm14.set_fittocontents("width");
                p.chkBldgSeNm14.set_value("false");
                p.chkBldgSeNm14.move("547","-70","144","40",null,null);

                p.chkBldgSeNm16.set_taborder("55");
                p.chkBldgSeNm16.set_text("C동 운송대리점");
                p.chkBldgSeNm16.set_fittocontents("width");
                p.chkBldgSeNm16.set_value("false");
                p.chkBldgSeNm16.move("0","-30","144","40",null,null);

                p.chkBldgSeNm17.set_taborder("56");
                p.chkBldgSeNm17.set_text("항공화물창고1(남)");
                p.chkBldgSeNm17.set_fittocontents("width");
                p.chkBldgSeNm17.set_value("false");
                p.chkBldgSeNm17.move("142","-30","161","40",null,null);

                p.chkBldgSeNm18.set_taborder("57");
                p.chkBldgSeNm18.set_text("항공화물창고2(북)");
                p.chkBldgSeNm18.set_fittocontents("width");
                p.chkBldgSeNm18.set_value("false");
                p.chkBldgSeNm18.move("305","-30","163","40",null,null);

                p.chkBldgSeNm19.set_taborder("58");
                p.chkBldgSeNm19.set_text("북측항공화물창고");
                p.chkBldgSeNm19.set_fittocontents("width");
                p.chkBldgSeNm19.set_value("false");
                p.chkBldgSeNm19.move("467","-30","157","40",null,null);

                p.chkBldgSeNm20.set_taborder("59");
                p.chkBldgSeNm20.set_text("화물터미널지역(기타지역)");
                p.chkBldgSeNm20.set_fittocontents("width");
                p.chkBldgSeNm20.set_value("false");
                p.chkBldgSeNm20.move("0","10","209","40",null,null);

                p.Panel05.set_taborder("60");
                p.Panel05.set_flexwrap("wrap");
                p.Panel05.set_fittocontents("height");
                p.Panel05.move("0","195","100%","40",null,null);

                p.Static05.set_taborder("61");
                p.Static05.set_text("[제1물류단지]");
                p.Static05.move("0","-70","120","40",null,null);

                p.chkBldgSeNm21.set_taborder("62");
                p.chkBldgSeNm21.set_text("사업/행정지원센터");
                p.chkBldgSeNm21.set_fittocontents("width");
                p.chkBldgSeNm21.set_value("false");
                p.chkBldgSeNm21.move("120","-70","162","40",null,null);

                p.chkBldgSeNm22.set_taborder("63");
                p.chkBldgSeNm22.set_text("제1물류단지(기타지역)");
                p.chkBldgSeNm22.set_fittocontents("width");
                p.chkBldgSeNm22.set_value("false");
                p.chkBldgSeNm22.move("280","-70","189","40",null,null);

                p.staLabel03_00_00_01_01_00_00.set_taborder("64");
                p.staLabel03_00_00_01_01_00_00.set_text("출입/작업내용");
                p.staLabel03_00_00_01_01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00_00_01_01_00_00.move("10","98","100%","46",null,null);

                p.txtIncmgJobCn.set_taborder("65");
                p.txtIncmgJobCn.move("95","1087","100%","80",null,null);

                p.pan_04_00_00_01_00_00.set_taborder("66");
                p.pan_04_00_00_01_00_00.set_type("vertical");
                p.pan_04_00_00_01_00_00.set_flexgrow("1");
                p.pan_04_00_00_01_00_00.move("20.00","242","305","86",null,null);

                p.Static08.set_taborder("67");
                p.Static08.set_text("다중작업인 경우 아래 표 기재");
                p.Static08.set_cssclass("sta_WF_Des");
                p.Static08.move("64","1131","100%","40",null,null);

                p.pan06_01_00_00.set_taborder("68");
                p.pan06_01_00_00.set_horizontalgap("20");
                p.pan06_01_00_00.set_flexcrossaxiswrapalign("start");
                p.pan06_01_00_00.set_flexwrap("wrap");
                p.pan06_01_00_00.set_fittocontents("height");
                p.pan06_01_00_00.set_verticalgap("4");
                p.pan06_01_00_00.set_spacing("0px 20px 10px 20px");
                p.pan06_01_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan06_01_00_00.move("0","242","100.00%","140",null,null);

                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.set_taborder("69");
                p.divGrd.move("0","1168","100.00%","330",null,null);

                p.staLabel00_01_01_00_00.set_taborder("70");
                p.staLabel00_01_01_00_00.set_text("용접기 사용");
                p.staLabel00_01_01_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_01_01_00_00.move("10","98","100%","46",null,null);

                p.rdoWdmchnUseYn.set_taborder("71");
                p.rdoWdmchnUseYn.set_innerdataset(div00_form_rdoWdmchnUseYn_innerdataset);
                p.rdoWdmchnUseYn.set_codecolumn("codecolumn");
                p.rdoWdmchnUseYn.set_datacolumn("datacolumn");
                p.rdoWdmchnUseYn.set_direction("vertical");
                p.rdoWdmchnUseYn.set_fittocontents("none");
                p.rdoWdmchnUseYn.set_columncount("-1");
                p.rdoWdmchnUseYn.set_rowcount("-1");
                p.rdoWdmchnUseYn.set_value("0");
                p.rdoWdmchnUseYn.set_index("0");
                p.rdoWdmchnUseYn.move("681","1303","100%","40",null,null);

                p.Panel00_00_01_01_00_00.set_taborder("72");
                p.Panel00_00_01_01_00_00.set_type("vertical");
                p.Panel00_00_01_01_00_00.set_flexgrow("1");
                p.Panel00_00_01_01_00_00.set_fittocontents("height");
                p.Panel00_00_01_01_00_00.set_verticalgap("4");
                p.Panel00_00_01_01_00_00.set_minwidth("");
                p.Panel00_00_01_01_00_00.move("20.00","84","305","86",null,null);

                p.Static01_00.set_taborder("73");
                p.Static01_00.set_text("기존시설물(마감재) 해체, 재조립");
                p.Static01_00.set_cssclass("sta_WF_Label_E");
                p.Static01_00.move("638","856","100%","46",null,null);

                p.chkExsFcltyFinmtDslovRasblCd1.set_taborder("74");
                p.chkExsFcltyFinmtDslovRasblCd1.set_text("벽");
                p.chkExsFcltyFinmtDslovRasblCd1.set_fittocontents("width");
                p.chkExsFcltyFinmtDslovRasblCd1.move("702","1512","60","40",null,null);

                p.chkExsFcltyFinmtDslovRasblCd2.set_taborder("75");
                p.chkExsFcltyFinmtDslovRasblCd2.set_text("바닥");
                p.chkExsFcltyFinmtDslovRasblCd2.set_fittocontents("width");
                p.chkExsFcltyFinmtDslovRasblCd2.move("744","1541","74","40",null,null);

                p.chkExsFcltyFinmtDslovRasblCd3.set_taborder("76");
                p.chkExsFcltyFinmtDslovRasblCd3.set_text("천장");
                p.chkExsFcltyFinmtDslovRasblCd3.set_fittocontents("width");
                p.chkExsFcltyFinmtDslovRasblCd3.move("688","1541","74","40",null,null);

                p.chkExsFcltyFinmtDslovRasblCd4.set_taborder("77");
                p.chkExsFcltyFinmtDslovRasblCd4.set_text("없음");
                p.chkExsFcltyFinmtDslovRasblCd4.set_fittocontents("width");
                p.chkExsFcltyFinmtDslovRasblCd4.move("590","1535","74","40",null,null);

                p.Panel06.set_taborder("78");
                p.Panel06.set_fittocontents("height");
                p.Panel06.set_flexwrap("wrap");
                p.Panel06.move("520","1529","100%","40",null,null);

                p.pan0005_00.set_taborder("79");
                p.pan0005_00.set_type("vertical");
                p.pan0005_00.set_flexgrow("1");
                p.pan0005_00.set_fittocontents("height");
                p.pan0005_00.set_verticalgap("4");
                p.pan0005_00.move("974.00","151","305","96",null,null);

                p.pan00_01_01_00_00.set_taborder("80");
                p.pan00_01_01_00_00.set_horizontalgap("20");
                p.pan00_01_01_00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_01_01_00_00.set_flexwrap("wrap");
                p.pan00_01_01_00_00.set_fittocontents("height");
                p.pan00_01_01_00_00.set_verticalgap("0");
                p.pan00_01_01_00_00.set_spacing("0px 20px 10px 20px");
                p.pan00_01_01_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_01_01_00_00.move("0","60","100.00%","96",null,null);

                p.staLabel00_01_01_00.set_taborder("81");
                p.staLabel00_01_01_00.set_text("인화성/유독성/악취발생");
                p.staLabel00_01_01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_01_01_00.move("10","98","100%","46",null,null);

                p.rdoFlmatyTicBdsmlOcrnYn.set_taborder("82");
                p.rdoFlmatyTicBdsmlOcrnYn.set_innerdataset(div00_form_rdoFlmatyTicBdsmlOcrnYn_innerdataset);
                p.rdoFlmatyTicBdsmlOcrnYn.set_codecolumn("codecolumn");
                p.rdoFlmatyTicBdsmlOcrnYn.set_datacolumn("datacolumn");
                p.rdoFlmatyTicBdsmlOcrnYn.set_direction("vertical");
                p.rdoFlmatyTicBdsmlOcrnYn.set_fittocontents("none");
                p.rdoFlmatyTicBdsmlOcrnYn.set_columncount("-1");
                p.rdoFlmatyTicBdsmlOcrnYn.set_rowcount("-1");
                p.rdoFlmatyTicBdsmlOcrnYn.set_value("0");
                p.rdoFlmatyTicBdsmlOcrnYn.set_index("0");
                p.rdoFlmatyTicBdsmlOcrnYn.move("681","1303","100%","40",null,null);

                p.Panel00_00_01_01_00.set_taborder("83");
                p.Panel00_00_01_01_00.set_type("vertical");
                p.Panel00_00_01_01_00.set_flexgrow("1");
                p.Panel00_00_01_01_00.set_fittocontents("height");
                p.Panel00_00_01_01_00.set_verticalgap("4");
                p.Panel00_00_01_01_00.set_minwidth("");
                p.Panel00_00_01_01_00.move("20.00","84","305","86",null,null);

                p.Static01_01.set_taborder("84");
                p.Static01_01.set_text("소음/진동발생");
                p.Static01_01.set_cssclass("sta_WF_Label_E");
                p.Static01_01.move("638","856","100%","46",null,null);

                p.rdoNoiseVbrnOcrnYn.set_taborder("85");
                p.rdoNoiseVbrnOcrnYn.set_innerdataset(div00_form_rdoNoiseVbrnOcrnYn_innerdataset);
                p.rdoNoiseVbrnOcrnYn.set_codecolumn("codecolumn");
                p.rdoNoiseVbrnOcrnYn.set_datacolumn("datacolumn");
                p.rdoNoiseVbrnOcrnYn.set_direction("vertical");
                p.rdoNoiseVbrnOcrnYn.set_fittocontents("none");
                p.rdoNoiseVbrnOcrnYn.set_columncount("-1");
                p.rdoNoiseVbrnOcrnYn.set_rowcount("-1");
                p.rdoNoiseVbrnOcrnYn.set_value("0");
                p.rdoNoiseVbrnOcrnYn.set_index("0");
                p.rdoNoiseVbrnOcrnYn.move("658","1303","100%","40",null,null);

                p.pan0005.set_taborder("86");
                p.pan0005.set_type("vertical");
                p.pan0005.set_flexgrow("1");
                p.pan0005.set_fittocontents("height");
                p.pan0005.set_verticalgap("4");
                p.pan0005.move("974.00","151","305","96",null,null);

                p.pan00_01_01_00.set_taborder("87");
                p.pan00_01_01_00.set_horizontalgap("20");
                p.pan00_01_01_00.set_flexcrossaxiswrapalign("start");
                p.pan00_01_01_00.set_flexwrap("wrap");
                p.pan00_01_01_00.set_fittocontents("height");
                p.pan00_01_01_00.set_verticalgap("0");
                p.pan00_01_01_00.set_spacing("0px 20px 10px 20px");
                p.pan00_01_01_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_01_01_00.move("0","60","100.00%","96",null,null);

                p.staLabel00_01_01_00_01.set_taborder("88");
                p.staLabel00_01_01_00_01.set_text("방문증 필요여부");
                p.staLabel00_01_01_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel00_01_01_00_01.move("10","98","100%","46",null,null);

                p.rdoVstPrdocNeedYn.set_taborder("89");
                p.rdoVstPrdocNeedYn.set_innerdataset(div00_form_rdoVstPrdocNeedYn_innerdataset);
                p.rdoVstPrdocNeedYn.set_codecolumn("codecolumn");
                p.rdoVstPrdocNeedYn.set_datacolumn("datacolumn");
                p.rdoVstPrdocNeedYn.set_direction("vertical");
                p.rdoVstPrdocNeedYn.set_fittocontents("none");
                p.rdoVstPrdocNeedYn.set_columncount("-1");
                p.rdoVstPrdocNeedYn.set_rowcount("-1");
                p.rdoVstPrdocNeedYn.set_value("0");
                p.rdoVstPrdocNeedYn.set_index("0");
                p.rdoVstPrdocNeedYn.move("681","1303","100%","40",null,null);

                p.Panel00_00_01_01_00_01.set_taborder("90");
                p.Panel00_00_01_01_00_01.set_type("vertical");
                p.Panel00_00_01_01_00_01.set_flexgrow("1");
                p.Panel00_00_01_01_00_01.set_fittocontents("height");
                p.Panel00_00_01_01_00_01.set_verticalgap("4");
                p.Panel00_00_01_01_00_01.set_minwidth("");
                p.Panel00_00_01_01_00_01.move("20.00","84","305","86",null,null);

                p.Static01_01_00.set_taborder("91");
                p.Static01_01_00.set_text("전원작업 여부");
                p.Static01_01_00.set_cssclass("sta_WF_Label_E");
                p.Static01_01_00.move("638","856","100%","46",null,null);

                p.rdoPosplyJobYn.set_taborder("92");
                p.rdoPosplyJobYn.set_innerdataset(div00_form_rdoPosplyJobYn_innerdataset);
                p.rdoPosplyJobYn.set_codecolumn("codecolumn");
                p.rdoPosplyJobYn.set_datacolumn("datacolumn");
                p.rdoPosplyJobYn.set_direction("vertical");
                p.rdoPosplyJobYn.set_fittocontents("none");
                p.rdoPosplyJobYn.set_columncount("-1");
                p.rdoPosplyJobYn.set_rowcount("-1");
                p.rdoPosplyJobYn.set_value("0");
                p.rdoPosplyJobYn.set_index("0");
                p.rdoPosplyJobYn.move("658","916","100%","40",null,null);

                p.pan0005_01.set_taborder("93");
                p.pan0005_01.set_type("vertical");
                p.pan0005_01.set_flexgrow("1");
                p.pan0005_01.set_fittocontents("height");
                p.pan0005_01.set_verticalgap("4");
                p.pan0005_01.move("974.00","151","305","96",null,null);

                p.pan00_01_01_00_01.set_taborder("94");
                p.pan00_01_01_00_01.set_horizontalgap("20");
                p.pan00_01_01_00_01.set_flexcrossaxiswrapalign("start");
                p.pan00_01_01_00_01.set_flexwrap("wrap");
                p.pan00_01_01_00_01.set_fittocontents("height");
                p.pan00_01_01_00_01.set_verticalgap("0");
                p.pan00_01_01_00_01.set_spacing("0px 20px 10px 20px");
                p.pan00_01_01_00_01.set_cssclass("pal_WF_DtlBg");
                p.pan00_01_01_00_01.move("0","60","100.00%","96",null,null);

                p.staLabel03_00_00_01_01_00_01.set_taborder("95");
                p.staLabel03_00_00_01_01_00_01.set_text("공항공사 담당자");
                p.staLabel03_00_00_01_01_00_01.set_cssclass("sta_WF_Label");
                p.staLabel03_00_00_01_01_00_01.move("10","98","100%","46",null,null);

                p.edtArptPbcprtPicNm.set_taborder("96");
                p.edtArptPbcprtPicNm.set_readonly("false");
                p.edtArptPbcprtPicNm.move("20.00","288","100%","40",null,null);

                p.pan_04_00_00_01_00_01.set_taborder("97");
                p.pan_04_00_00_01_00_01.set_type("vertical");
                p.pan_04_00_00_01_00_01.set_flexgrow("1");
                p.pan_04_00_00_01_00_01.move("20.00","242","305","86",null,null);

                p.panblank.set_taborder("98");
                p.panblank.set_type("vertical");
                p.panblank.set_flexgrow("1");
                p.panblank.move("970.00","270","305","1",null,null);

                p.pan06_01_00_01.set_taborder("99");
                p.pan06_01_00_01.set_horizontalgap("20");
                p.pan06_01_00_01.set_flexcrossaxiswrapalign("start");
                p.pan06_01_00_01.set_flexwrap("wrap");
                p.pan06_01_00_01.set_fittocontents("height");
                p.pan06_01_00_01.set_verticalgap("0");
                p.pan06_01_00_01.set_spacing("0px 20px 10px 20px");
                p.pan06_01_00_01.set_cssclass("pal_WF_DtlBg");
                p.pan06_01_00_01.move("0","242","100.00%","96",null,null);
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
                p.Static01.move("0","-70","100%","40",null,null);

                p.Static02.move("0","-70","100%","40",null,null);

                p.Static03.move("0","-70","100%","40",null,null);

                p.Static04.move("0","-70","100%","40",null,null);

                p.Static05.move("0","-70","100%","40",null,null);

                p.pan00_00.move("1610","315","100.00%","677",null,null);

                p.Panel02.move("0","-20","100%","80",null,null);

                p.Panel03.move("0","22","100%","80",null,null);

                p.Panel04.move("0","67","100%","120",null,null);

                p.Panel00_00_00.move("20.00","-70","100%","666",null,null);

                p.Panel05.move("0","195","100%","80",null,null);

                p.Panel00.move("0","110","100%","240",null,null);
            	}
            );
            obj.set_type("vertical");
            this.div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div00_01_02_00_00_00.form
            obj = new Layout("default","",0,0,this.div00_01_02_00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel03_00_00_01_01_00_00.set_taborder("0");
                p.staLabel03_00_00_01_01_00_00.set_text("전달사항");
                p.staLabel03_00_00_01_01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00_00_01_01_00_00.move("10","98","100%","46",null,null);

                p.pan_04_00_00_01_00_00.set_taborder("1");
                p.pan_04_00_00_01_00_00.set_type("vertical");
                p.pan_04_00_00_01_00_00.set_flexgrow("1");
                p.pan_04_00_00_01_00_00.set_fittocontents("height");
                p.pan_04_00_00_01_00_00.move("20.00","242","305","120",null,null);

                p.pan06_01_00_00.set_taborder("2");
                p.pan06_01_00_00.set_horizontalgap("20");
                p.pan06_01_00_00.set_flexcrossaxiswrapalign("start");
                p.pan06_01_00_00.set_flexwrap("wrap");
                p.pan06_01_00_00.set_fittocontents("height");
                p.pan06_01_00_00.set_verticalgap("4");
                p.pan06_01_00_00.set_spacing("0px 20px 10px 20px");
                p.pan06_01_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan06_01_00_00.move("0","242","100.00%","140",null,null);

                p.txtCnvyMttrCn.set_taborder("3");
                p.txtCnvyMttrCn.move("95","1087","100%","100",null,null);
            	}
            );
            obj.set_type("vertical");
            this.div00_01_02_00_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_01_02_00_00_00.form
            obj = new Layout("mobile","",0,0,this.div00_01_02_00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.div00_01_02_00_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_01_02_00_00_00.form
            obj = new Layout("Layout0","",0,0,this.div00_01_02_00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.div00_01_02_00_00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("신청서작성(통신실작업)");

                p.panForm.set_taborder("0");
                p.panForm.set_fittocontents("height");
                p.panForm.set_type("vertical");
                p.panForm.move("0","0","100.00%","1997",null,null);

                p.staSubTitle.set_taborder("1");
                p.staSubTitle.set_text("작업계획");
                p.staSubTitle.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle.move("320","173","100%","50",null,null);

                p.Panel07.set_taborder("2");
                p.Panel07.set_cssclass("pal_WF_TitBtnBg");
                p.Panel07.set_flexcrossaxisalign("center");
                p.Panel07.set_flexmainaxisalign("end");
                p.Panel07.set_horizontalgap("10");
                p.Panel07.set_spacing("0px 10px 0px 10px");
                p.Panel07.move("1140","173","200","50",null,null);

                p.panTitle.set_taborder("3");
                p.panTitle.set_fittocontents("none");
                p.panTitle.set_flexcrossaxisalign("end");
                p.panTitle.set_minheight("70");
                p.panTitle.set_maxheight("");
                p.panTitle.move("320","173","100%","70",null,null);

                p.Button00.set_taborder("4");
                p.Button00.set_cssclass("btn_WF_ACPlus");
                p.Button00.set_visible("false");
                p.Button00.move("960","26","34","34",null,null);

                p.btnFold.set_taborder("5");
                p.btnFold.set_cssclass("btn_WF_ACMinus");
                p.btnFold.move("853","6","34","34",null,null);

                p.div00.set_taborder("6");
                p.div00.set_text("div00");
                p.div00.set_fittocontents("height");
                p.div00.move("0","70","100.00%","1707",null,null);

                p.staSubTitle00.set_taborder("7");
                p.staSubTitle00.set_text("작업계획");
                p.staSubTitle00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle00.move("1700","1903","100%","50",null,null);

                p.Panel07_00.set_taborder("8");
                p.Panel07_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel07_00.set_flexcrossaxisalign("center");
                p.Panel07_00.set_flexmainaxisalign("end");
                p.Panel07_00.set_horizontalgap("10");
                p.Panel07_00.set_spacing("0px 10px 0px 10px");
                p.Panel07_00.move("2806","1903","172","50",null,null);

                p.panTitle00.set_taborder("9");
                p.panTitle00.set_fittocontents("none");
                p.panTitle00.set_flexcrossaxisalign("end");
                p.panTitle00.set_minheight("70");
                p.panTitle00.set_maxheight("");
                p.panTitle00.move("1700","1883","100.00%","70",null,null);

                p.div00_01_02_00_00_00.set_taborder("10");
                p.div00_01_02_00_00_00.set_text("신청자정보");
                p.div00_01_02_00_00_00.set_cssclass("div_WF_Bg");
                p.div00_01_02_00_00_00.set_fittocontents("height");
                p.div00_01_02_00_00_00.move("1420","1835","100%","150",null,null);
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
                p.panForm.set_spacing("0px 20px 10px 20px");
                p.panForm.move("0","0","100.00%","10000",null,null);

                p.div00.move("0","70","100%","2034",null,null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div00.form.edtComurmPstnCn","value","dsCmnctIncmgJobWtpl","comurmPstnCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div00.form.edtJobTnope","value","dsCmnctIncmgJobWtpl","jobTnope");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div00.form.calJobBgngYmd","value","dsCmnctIncmgJobWtpl","jobBgngYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div00.form.calJobEndYmd","value","dsCmnctIncmgJobWtpl","jobEndYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div00.form.edtIncmgJobNm","value","dsCmnctIncmgJobWtpl","incmgJobNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div00.form.edtTrgtSysEqpmntNm","value","dsCmnctIncmgJobWtpl","trgtSysEqpmntNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div00.form.txtIncmgJobCn","value","dsCmnctIncmgJobWtpl","incmgJobCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div00.form.rdoWdmchnUseYn","value","dsCmnctIncmgJobWtpl","wdmchnUseYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div00.form.rdoFlmatyTicBdsmlOcrnYn","value","dsCmnctIncmgJobWtpl","flmatyTicBdsmlOcrnYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div00.form.noiseVbrnOcrnYn","value","dsCmnctIncmgJobWtpl","noiseVbrnOcrnYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div00.form.rdoNoiseVbrnOcrnYn","value","dsCmnctIncmgJobWtpl","noiseVbrnOcrnYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div00.form.rdoVstPrdocNeedYn","value","dsCmnctIncmgJobWtpl","vstPrdocNeedYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div00.form.rdoPosplyJobYn","value","dsCmnctIncmgJobWtpl","posplyJobYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div00.form.edtArptPbcprtPicNm","value","dsCmnctIncmgJobWtpl","arptPbcprtPicNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div00_01_02_00_00_00.form.txtCnvyMttrCn","value","dsCmnctIncmgJobWtpl","cnvyMttrCn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CST015M03.xfdl", function() {
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
        	this.dsCmnctIncmgDtl 	= this.lookup("dsCmnctIncmgDtl");		//작업내용
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
         * @name : btnFold_onclick
         * @description : 작업계획 접기/펼치기
        ***************************************************************************/
        this.btnFold_onclick = function(obj,e)
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

        /**************************************************************************
         * @name : div00_divGrd_btnGrdAdd_onclick
         * @description : 행추가
        ***************************************************************************/
        this.div00_divGrd_btnGrdAdd_onclick = function(obj,e)
        {
        	//trace("rowcount::"+this.dsCmnctIncmgDtl.getRowCount());
        	if(this.dsCmnctIncmgDtl.getRowCount() == 0) {
        		this.dsCmnctIncmgDtl.addRow();
        	} else {
        		alert("CMM_CMNCT_INCMG_JOB_CN \n 테이블 확인필요 \n sn 추가설정 요청");
        		return;
        	}
        };

        /**************************************************************************
         * @name : div00_divGrd_btnGrdAdd_onclick
         * @description : 행삭제
        ***************************************************************************/
        this.div00_divGrd_btnGrdDel_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnFold.addEventHandler("onclick",this.btnFold_onclick,this);
            this.div00.form.divGrd.form.btnGrdAdd.addEventHandler("onclick",this.div00_divGrd_btnGrdAdd_onclick,this);
            this.div00.form.divGrd.form.btnGrdDel.addEventHandler("onclick",this.div00_divGrd_btnGrdDel_onclick,this);
            this.div00.form.rdoWdmchnUseYn.addEventHandler("onitemchanged",this.divForm_div00_00_Radio00_00_00_onitemchanged,this);
            this.div00.form.rdoFlmatyTicBdsmlOcrnYn.addEventHandler("onitemchanged",this.divForm_div00_00_Radio00_00_00_onitemchanged,this);
            this.div00.form.rdoVstPrdocNeedYn.addEventHandler("onitemchanged",this.divForm_div00_00_Radio00_00_00_onitemchanged,this);
        };
        this.loadIncludeScript("CST015M03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
